const fs = require('fs');
const path = require('path');

const tsFile = path.join(__dirname, 'content', 'math-ch11.ts');
const imgDir = path.join(__dirname, 'chapter11', 'images');

if (!fs.existsSync(tsFile)) {
    console.error("File not found: " + tsFile);
    process.exit(1);
}

let content = fs.readFileSync(tsFile, 'utf8');

// Find all src attributes
const regex = /src="([^"]+)"/g;
let match;
const replacements = [];

while ((match = regex.exec(content)) !== null) {
    let originalSrc = match[0];
    let filename = match[1];

    // If it's already base64, we might still want to fix its internal syntax
    if (filename.startsWith('data:image/svg')) {
        let b64Data = filename.split(',')[1];
        let svg = Buffer.from(b64Data, 'base64').toString('utf8');
        if (svg.includes('stroke="stroke="') || svg.includes('fill="none""')) {
            svg = svg.replace(/stroke="stroke="black"/g, 'stroke="black"')
                     .replace(/fill="none""/g, 'fill="none"')
                     .replace(/stroke="stroke="/g, 'stroke="');
            let newB64 = Buffer.from(svg).toString('base64');
            replacements.push({ old: originalSrc, new: `src="data:image/svg+xml;base64,${newB64}"` });
            console.log("Fixed existing Base64 syntax");
        }
        continue;
    }

    // If it's a filename, resolve and encode
    const fullPath = path.join(imgDir, filename);
    if (fs.existsSync(fullPath)) {
        let svg = fs.readFileSync(fullPath, 'utf8');
        // Fix syntax errors in the source file too for safety
        svg = svg.replace(/stroke="stroke="black"/g, 'stroke="black"')
                 .replace(/fill="none""/g, 'fill="none"')
                 .replace(/stroke="stroke="/g, 'stroke="');
        
        const b64 = Buffer.from(svg).toString('base64');
        replacements.push({ old: originalSrc, new: `src="data:image/svg+xml;base64,${b64}"` });
        console.log("Encoded file: " + filename);
    } else {
        console.warn("File not found: " + fullPath);
    }
}

// Apply replacements
replacements.forEach(r => {
    content = content.replace(r.old, r.new);
});

fs.writeFileSync(tsFile, content, 'utf8');
console.log("Chapter 11 fully updated.");
