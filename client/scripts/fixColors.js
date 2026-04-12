const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../assets/chapters');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.svg')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

const svgFiles = getAllFiles(baseDir);

// Convert all types of dark inputs like rgb(0,0,0) as well.
const darkColors = ['black', '#000', '#000000', '#333', '#333333', '#444', '#444444', '#555', '#555555', '#222', '#222222', '#111', '#111111', 'rgb\\(0,\\s*0,\\s*0\\)'];

let modifiedCount = 0;

svgFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Find the primary bright color
    const regex = /(?:stroke|fill)(?::|\s*=\s*["']?)\s*(#(?:[A-Fa-f0-9]{3}){1,2}|[a-zA-Z]+)(?![a-zA-Z0-9])/gi;
    let match;
    let chosenColor = null;
    let colorCounts = {};

    while ((match = regex.exec(content)) !== null) {
        let color = match[1].toLowerCase();
        let stripped = color.replace(/['"]/g, ''); // strip any trailing quotes that matched (though regex shouldn't let it)
        if (stripped !== 'none' && stripped !== 'white' && stripped !== '#fff' && stripped !== '#ffffff' && stripped !== 'transparent' && !darkColors.includes(stripped) && !stripped.startsWith('url')) {
            colorCounts[stripped] = (colorCounts[stripped] || 0) + 1;
        }
    }

    if (Object.keys(colorCounts).length > 0) {
        // Find the most frequent bright color
        chosenColor = Object.keys(colorCounts).reduce((a, b) => colorCounts[a] > colorCounts[b] ? a : b);
    } else {
        // Default to a theme color if no bright color exists
        chosenColor = '#00BFFF';
    }

    let originalContent = content;

    // Replace all dark colors with the chosen color
    // 1. In inline styles and attributes
    // Ensure we handle single or double quotes correctly.
    const replaceRegex = new RegExp(`(fill|stroke|color)(?:\\s*:\\s*|\\s*=\\s*(["']))(${darkColors.join('|')})(?![A-Za-z0-9])`, 'gi');

    content = content.replace(replaceRegex, (match, p1, p2) => {
        if (p2) {
            // Attribute format: fill="black
            return `${p1}=${p2}${chosenColor}`;
        } else {
            // CSS format: fill: black
            return `${p1}: ${chosenColor}`;
        }
    });

    // 2. Ensure text has the chosen color even if fill wasn't specified
    // Add a <style> block just before </svg> or merge with existing
    const styleInjection = `\n<style> text, tspan { fill: ${chosenColor} !important; } </style>\n</svg>`;

    // Check if we already injected this (idempotency)
    if (!content.includes('text, tspan { fill:')) {
        content = content.replace(/<\/svg>\s*$/i, styleInjection);
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
    }
});

console.log(`Processed ${svgFiles.length} SVGs and updated ${modifiedCount} files.`);
