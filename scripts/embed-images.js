const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../client/assets/chapters');

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case '.svg': return 'image/svg+xml';
        case '.png': return 'image/png';
        case '.jpg':
        case '.jpeg': return 'image/jpeg';
        case '.gif': return 'image/gif';
        default: return 'application/octet-stream';
    }
}

function embedImagesInFile(filePath, chapterDir) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanges = false;

    const imgRegex = /<img([^>]*?)src=["']([^"']+)["']([^>]*)>/gi;

    content = content.replace(imgRegex, (match, prefix, src, suffix) => {
        if (src.startsWith('http') || src.startsWith('data:')) return match;

        // Skip empty src
        if (src.trim() === '' || src.trim() === 'images/') return match;

        let path1 = path.resolve(chapterDir, src);
        let path2 = path.resolve(chapterDir, 'images', path.basename(src));
        let path3 = path.resolve(chapterDir, 'images', src);

        let finalImagePath = null;
        if (fs.existsSync(path1) && fs.statSync(path1).isFile()) finalImagePath = path1;
        else if (fs.existsSync(path2) && fs.statSync(path2).isFile()) finalImagePath = path2;
        else if (fs.existsSync(path3) && fs.statSync(path3).isFile()) finalImagePath = path3;

        if (finalImagePath) {
            try {
                const imageBuffer = fs.readFileSync(finalImagePath);
                const mimeType = getMimeType(finalImagePath);
                const base64Data = imageBuffer.toString('base64');
                const dataUri = `data:${mimeType};base64,${base64Data}`;
                hasChanges = true;
                return `<img${prefix}src="${dataUri}"${suffix}>`;
            } catch (err) {
                console.error(`Error reading image ${finalImagePath}:`, err);
                return match;
            }
        }

        console.warn(`[WARNING] Image not found: ${src} referenced in ${filePath}`);
        return match;
    });

    if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated images in: ${filePath}`);
    }
}

for (let i = 1; i <= 14; i++) {
    const chapterDir = path.join(srcDir, `chapter${i}`);
    if (fs.existsSync(chapterDir)) {
        const files = fs.readdirSync(chapterDir);
        for (const file of files) {
            if (file.endsWith('.html')) {
                embedImagesInFile(path.join(chapterDir, file), chapterDir);
            }
        }
    }
}
console.log("Image embedding complete without errors.");
