const fs = require('fs');
const sharp = require('sharp');

async function run() {
    console.log('Reading file...');
    let content = fs.readFileSync('client/data/content/math-ch3.ts', 'utf8');
    const svgRegex = /data:image\/svg\+xml;base64,([a-zA-Z0-9+\/]+=*)/g;
    let match;
    const matches = [];
    while ((match = svgRegex.exec(content)) !== null) {
        matches.push({
            full: match[0],
            b64: match[1]
        });
    }

    console.log(`Found ${matches.length} SVGs`);
    for (let i = 0; i < matches.length; i++) {
        console.log(`Processing ${i + 1}/${matches.length}...`);
        const b64 = matches[i].b64;
        const svgBuffer = Buffer.from(b64, 'base64');
        const pngBuffer = await sharp(svgBuffer).png().toBuffer();
        const pngB64 = pngBuffer.toString('base64');
        const newSrc = `data:image/png;base64,${pngB64}`;
        content = content.replace(matches[i].full, newSrc);
    }

    fs.writeFileSync('client/data/content/math-ch3.ts', content);
    console.log('Saved updated math-ch3.ts');
}

run().catch(console.error);
