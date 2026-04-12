const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertSvgBase64ToPngBase64(svgBase64) {
    try {
        const svgBuffer = Buffer.from(svgBase64, 'base64');
        const pngBuffer = await sharp(svgBuffer)
            .png()
            .toBuffer();
        return pngBuffer.toString('base64');
    } catch (err) {
        console.error('Error converting SVG to PNG:', err);
        return null;
    }
}

async function processFile() {
    const filePath = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
    console.log(`Processing file: ${filePath}`);

    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to find data:image/svg+xml;base64,...
    const regex = /data:image\/svg\+xml;base64,([a-zA-Z0-9+/=]+)/g;

    let match;
    let replacements = [];

    while ((match = regex.exec(content)) !== null) {
        const svgBase64 = match[1];
        const pngBase64 = await convertSvgBase64ToPngBase64(svgBase64);
        if (pngBase64) {
            replacements.push({
                fullMatch: match[0],
                newString: `data:image/png;base64,${pngBase64}`
            });
        }
    }

    console.log(`Found ${replacements.length} SVGs to convert.`);

    for (const replacement of replacements) {
        content = content.replace(replacement.fullMatch, replacement.newString);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Conversion complete!');
}

processFile();
