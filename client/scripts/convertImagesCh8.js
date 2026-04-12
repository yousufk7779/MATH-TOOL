const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processImages() {
    const filePath = path.join(__dirname, '../data/content/math-ch8.ts');
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Matches src=\"data:image/svg+xml;base64,...\" or src="data:image...
    const svgRegex = /src=\\?"data:image\/svg\+xml;base64,([a-zA-Z0-9+/=]+)\\?"/g;
    let match;
    const matches = [];
    while ((match = svgRegex.exec(fileContent)) !== null) {
        matches.push({
            full: match[0],
            base64Data: match[1]
        });
    }

    console.log(`Found ${matches.length} SVG images in math-ch8. Convert to PNG...`);

    for (let i = 0; i < matches.length; i++) {
        const m = matches[i];
        try {
            const svgBuffer = Buffer.from(m.base64Data, 'base64');
            const pngBuffer = await sharp(svgBuffer).png().toBuffer();
            const pngBase64 = pngBuffer.toString('base64');

            const isEscaped = m.full.includes('\\"');
            const newSrc = isEscaped ? `src=\\"data:image/png;base64,${pngBase64}\\"` : `src="data:image/png;base64,${pngBase64}"`;

            fileContent = fileContent.replace(m.full, newSrc);
            console.log(`Converted SVG image ${i + 1}/${matches.length}`);
        } catch (err) {
            console.error(`Failed on image ${i + 1}: ${err.message}`);
        }
    }

    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log('Finished updating SVG to PNG in math-ch8.ts');
}

processImages();
