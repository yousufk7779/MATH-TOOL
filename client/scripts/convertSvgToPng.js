const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../assets/chapters/chapter6/images');

async function convertAll() {
    const files = fs.readdirSync(imgDir);
    for (const file of files) {
        if (file.endsWith('.svg')) {
            const svgPath = path.join(imgDir, file);
            const pngPath = path.join(imgDir, file.replace('.svg', '.png'));
            console.log(`Converting ${file} to ${file.replace('.svg', '.png')}`);
            try {
                // Ensure correct density for sharp to rasterize SVGs cleanly
                await sharp(svgPath, { density: 300 })
                    .png()
                    .toFile(pngPath);
            } catch (err) {
                console.error(`Failed to convert ${file}`, err);
            }
        }
    }
    console.log("Done converting SVGs to PNGs!");
}

convertAll();
