const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const filePath = path.join(__dirname, '../data/content/math-ch8.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

async function processFile() {
    console.log('Cleaning LaTeX syntax...');

    // Replace \theta
    fileContent = fileContent.replace(/\\\\theta/g, 'θ');
    fileContent = fileContent.replace(/\\theta/g, 'θ');
    fileContent = fileContent.replace(/θ\s*=/g, 'θ =');

    // Replace \left and \right
    fileContent = fileContent.replace(/\\\\left\(/g, '(');
    fileContent = fileContent.replace(/\\\\right\)/g, ')');
    fileContent = fileContent.replace(/\\\\left\[/g, '[');
    fileContent = fileContent.replace(/\\\\right\]/g, ']');
    fileContent = fileContent.replace(/\\\\left/g, '');
    fileContent = fileContent.replace(/\\\\right/g, '');
    fileContent = fileContent.replace(/\\left/g, '');
    fileContent = fileContent.replace(/\\right/g, '');

    // Replace \text
    for (let i = 0; i < 3; i++) {
        fileContent = fileContent.replace(/\\\\text\s*\{([^}]+)\}/g, '$1');
        fileContent = fileContent.replace(/\\text\s*\{([^}]+)\}/g, '$1');
    }

    // Replace \frac - after \text to avoid nested {} issues
    for (let i = 0; i < 5; i++) {
        fileContent = fileContent.replace(/\\\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2');
        fileContent = fileContent.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2');
    }

    // SUPERSCRIPTS (POWERS)
    fileContent = fileContent.replace(/(\\*)sin\^2/g, 'sin²');
    fileContent = fileContent.replace(/(\\*)cos\^2/g, 'cos²');
    fileContent = fileContent.replace(/(\\*)tan\^2/g, 'tan²');
    fileContent = fileContent.replace(/(\\*)cot\^2/g, 'cot²');
    fileContent = fileContent.replace(/(\\*)sec\^2/g, 'sec²');
    fileContent = fileContent.replace(/(\\*)cosec\^2/g, 'cosec²');
    fileContent = fileContent.replace(/cosec \^2/g, 'cosec²');

    fileContent = fileContent.replace(/\^2/g, '²');
    fileContent = fileContent.replace(/\^3/g, '³');

    // REMOVE REMAINING BACKSLASH COMMANDS
    fileContent = fileContent.replace(/\\\\sin/g, 'sin');
    fileContent = fileContent.replace(/\\\\cos/g, 'cos');
    fileContent = fileContent.replace(/\\\\tan/g, 'tan');
    fileContent = fileContent.replace(/\\\\cot/g, 'cot');
    fileContent = fileContent.replace(/\\\\sec/g, 'sec');
    fileContent = fileContent.replace(/\\\\cosec/g, 'cosec');
    fileContent = fileContent.replace(/\\\\sqrt\{([^{}]+)\}/g, '√($1)');
    fileContent = fileContent.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');

    fileContent = fileContent.replace(/\\\\circ/g, '°');
    fileContent = fileContent.replace(/\\\\Rightarrow/g, '⇒');
    fileContent = fileContent.replace(/\\\\triangle/g, '∆');
    fileContent = fileContent.replace(/\\\\angle/g, '∠');
    fileContent = fileContent.replace(/\\\\sim/g, '~');
    fileContent = fileContent.replace(/\\\\pm/g, '±');
    fileContent = fileContent.replace(/\\\\pi/g, 'π');
    fileContent = fileContent.replace(/\\\\times/g, '×');
    fileContent = fileContent.replace(/\\\\ne/g, '≠');
    fileContent = fileContent.replace(/\\\\leq/g, '≤');
    fileContent = fileContent.replace(/\\\\ge/g, '≥');
    fileContent = fileContent.replace(/\\\\cdot/g, '·');

    // Strip leftover \( \)
    fileContent = fileContent.replace(/\\\\\(/g, '');
    fileContent = fileContent.replace(/\\\\\)/g, '');
    fileContent = fileContent.replace(/\\\(/g, '');
    fileContent = fileContent.replace(/\\\)/g, '');

    // Fix multiple empty spaces
    fileContent = fileContent.replace(/ {2,}/g, ' ');

    // FIX IMAGES
    // Match data:image/svg+xml;base64,... 
    // Sometimes it's src=\"data:image... rather than src="data:image...
    const svgRegex = /src=\\?"data:image\/svg\+xml;base64,([a-zA-Z0-9+/=]+)\\?"/g;
    let match;
    const matches = [];
    while ((match = svgRegex.exec(fileContent)) !== null) {
        matches.push({
            full: match[0],
            base64Data: match[1]
        });
    }

    console.log(`Found ${matches.length} SVG images. Converting to PNG...`);

    for (let i = 0; i < matches.length; i++) {
        const m = matches[i];

        try {
            const svgBuffer = Buffer.from(m.base64Data, 'base64');
            const pngBuffer = await sharp(svgBuffer).png().toBuffer();
            const pngBase64 = pngBuffer.toString('base64');

            const isEscaped = m.full.includes('\\"');
            const newSrc = isEscaped ? `src=\\"data:image/png;base64,${pngBase64}\\"` : `src="data:image/png;base64,${pngBase64}"`;

            // Re-find target string
            fileContent = fileContent.replace(m.full, newSrc);

            console.log(`Converted image ${i + 1}/${matches.length}`);
        } catch (err) {
            console.error(`Failed to convert image ${i + 1}`, err.message);
        }
    }

    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log('Done! Updated math-ch8.ts');
}

processFile().catch(console.error);
