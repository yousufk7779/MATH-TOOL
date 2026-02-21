const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../client/assets/chapters');

function checkImages(directory) {
    if (!fs.existsSync(directory)) return;

    const entries = fs.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) {
            checkImages(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const imgRegex = /<img[^>]*?src=["']([^"']+)["'][^>]*>/gi;
            let match;
            while ((match = imgRegex.exec(content)) !== null) {
                const src = match[1];
                if (!src.startsWith('data:') && !src.startsWith('http')) {
                    console.log(`Unconverted Image: ${src} in ${fullPath}`);
                }
            }
        }
    }
}

checkImages(srcDir);
console.log("Check complete.");
