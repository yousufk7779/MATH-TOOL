const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const contentDir = path.join(__dirname, '../data/content');

async function fixAllTsFiles() {
    const files = fs.readdirSync(contentDir);
    let totalReplaced = 0;

    for (const file of files) {
        if (!file.endsWith('.ts')) continue;

        const filePath = path.join(contentDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Note: The regex also catches `data:image/svg+xml;charset=utf-8;base64,` forms if present
        const regex = /data:image\/svg\+xml(?:;charset=[A-Za-z0-9-]+)?;base64,([A-Za-z0-9+/=]+)/g;
        let match;
        let replacements = [];

        while ((match = regex.exec(content)) !== null) {
            let fullMatch = match[0];
            let base64Svg = match[1];
            try {
                let svgBuffer = Buffer.from(base64Svg, 'base64');
                let pngBuffer = await sharp(svgBuffer, { density: 300 }).png().toBuffer();
                let newBase64 = `data:image/png;base64,${pngBuffer.toString('base64')}`;
                replacements.push({ old: fullMatch, new: newBase64 });
            } catch (e) {
                console.error(`Error converting SVG base64 in ${file}`, e);
            }
        }

        if (replacements.length > 0) {
            for (let r of replacements) {
                // Must do a global replace or string exact replace
                content = content.replace(r.old, r.new);
            }
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Replaced ${replacements.length} inline SVGs with PNGs in ${file}.`);
            totalReplaced += replacements.length;
        }
    }

    console.log(`Finished converting ${totalReplaced} SVGs to PNGs across all target TS files.`);
}

fixAllTsFiles();
