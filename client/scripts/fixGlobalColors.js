const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseDir = path.join(__dirname, '../assets/chapters');
const contentDir = path.join(__dirname, '../data/content');
const darkColors = ['black', '#000', '#000000', '#333', '#333333', '#444', '#444444', '#555', '#555555', '#222', '#222222', '#111', '#111111', 'rgb(0,0,0)', 'rgb(0, 0, 0)', 'rgba(0,0,0,1)'];

function isDarkColor(c) {
    if (!c) return false;
    let d = c.toLowerCase().trim().replace(/['"]/g, '');
    if (darkColors.includes(d)) return true;
    return false;
}

function getAllFiles(dirPath, ext, arrayOfFiles) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles || [];
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, ext, arrayOfFiles);
        } else {
            if (file.endsWith(ext)) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

function extractBrightColor(content) {
    const regex = /(?:stroke|fill)(?::|\s*=\s*["']?)\s*(#(?:[A-Fa-f0-9]{3}){1,2}|[a-zA-Z]+)(?![a-zA-Z0-9])/gi;
    let match;
    let colorCounts = {};

    while ((match = regex.exec(content)) !== null) {
        let color = match[1].toLowerCase();
        let stripped = color.replace(/['"]/g, '');
        if (stripped !== 'none' && stripped !== 'white' && stripped !== '#fff' && stripped !== '#ffffff' && stripped !== 'transparent' && !darkColors.includes(stripped) && !stripped.startsWith('url')) {
            colorCounts[stripped] = (colorCounts[stripped] || 0) + 1;
        }
    }

    let chosenColor = '#00BFFF'; // Default fallback
    if (Object.keys(colorCounts).length > 0) {
        chosenColor = Object.keys(colorCounts).reduce((a, b) => colorCounts[a] > colorCounts[b] ? a : b);
    }
    return chosenColor;
}

function processNode($, el, chosenColor) {
    // Overwrite dark fills and strokes in attributes
    let fill = $(el).attr('fill');
    if (isDarkColor(fill)) {
        $(el).attr('fill', chosenColor);
    }

    let stroke = $(el).attr('stroke');
    if (isDarkColor(stroke)) {
        $(el).attr('stroke', chosenColor);
    }

    let colorAttr = $(el).attr('color');
    if (isDarkColor(colorAttr)) {
        $(el).attr('color', chosenColor);
    }

    // Overwrite dark colors in styles
    let inlineStyle = $(el).attr('style');
    if (inlineStyle) {
        let updatedStyle = inlineStyle;
        const styleRegex = /(fill|stroke|color)\s*:\s*([^;]+)/gi;
        updatedStyle = updatedStyle.replace(styleRegex, (match, p1, p2) => {
            if (isDarkColor(p2.trim())) {
                return `${p1}:${chosenColor}`;
            }
            return match;
        });
        $(el).attr('style', updatedStyle);
    }

    // Special forced colorization targeting elements that commonly default to black or need coloring:
    let tagName = el.tagName ? el.tagName.toLowerCase() : '';

    // 1. Texts and TSpans
    if (tagName === 'text' || tagName === 'tspan' || tagName === 'textpath') {
        $(el).attr('fill', chosenColor);
        // Ensure no stroke overrides it to black unless it explicitly needs it
        if ($(el).attr('stroke') === 'none' || !$(el).attr('stroke')) {
            // we remove stroke to keep text crisp, just let fill handle it
        } else if (isDarkColor($(el).attr('stroke'))) {
            $(el).attr('stroke', chosenColor);
        }
    }

    // 2. Lines, Polylines
    if (tagName === 'line' || tagName === 'polyline' || tagName === 'polygon' || tagName === 'circle' || tagName === 'rect') {
        if (!$(el).attr('stroke') && !inlineStyle?.includes('stroke')) {
            // Only add if fill also wasn't defined. Or actually let's assume if it is black fill we hit it above.
        }
    }

    // 3. Angular arcs or specifically marked paths
    if (tagName === 'path') {
        let classAttr = $(el).attr('class');
        if (classAttr && classAttr.includes('angle-arc')) {
            $(el).attr('stroke', chosenColor);
            $(el).attr('fill', 'none');
        }
    }
}

function fixSvgUsingCheerio(svgString) {
    let chosenColor = extractBrightColor(svgString);

    const $ = cheerio.load(svgString, { xmlMode: true, decodeEntities: false });

    // Traverse every element
    $('*').each((i, el) => {
        processNode($, el, chosenColor);
    });

    // Strip previous injected style blocks for tidiness and to avoid overrides
    $('style#custom-color-fix').remove();

    return $.xml();
}

let modifiedSvgCount = 0;
const svgFiles = getAllFiles(baseDir, '.svg');
svgFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let fixedContent = fixSvgUsingCheerio(content);
    if (fixedContent !== content) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        modifiedSvgCount++;
    }
});

let modifiedHtmlCount = 0;
const htmlFiles = getAllFiles(baseDir, '.html');
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    const b64Regex = /data:image\/svg\+xml(?:;charset=[^;]+)?;base64,([A-Za-z0-9+/=]+)/g;
    let match;
    let replacements = [];

    while ((match = b64Regex.exec(content)) !== null) {
        let fullMatch = match[0];
        let base64Svg = match[1];
        try {
            let svgString = Buffer.from(base64Svg, 'base64').toString('utf8');
            let fixedSvg = fixSvgUsingCheerio(svgString);
            if (fixedSvg !== svgString) {
                let newBase64 = Buffer.from(fixedSvg, 'utf8').toString('base64');
                let targetPrefix = fullMatch.split('base64,')[0] + 'base64,';
                replacements.push({ old: fullMatch, new: targetPrefix + newBase64 });
            }
        } catch (e) {
            console.error("Error decoding base64 in HTML " + file, e);
        }
    }

    for (let r of replacements) {
        content = content.replace(r.old, r.new);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedHtmlCount++;
    }
});

console.log(`Cheerio Update Complete:
- Modified ${modifiedSvgCount} physical SVG files.
- Modified ${modifiedHtmlCount} HTML files.`);
