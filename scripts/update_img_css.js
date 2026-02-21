const fs = require('fs');
const path = require('path');

const basePath = 'd:/MATH-T-new/client/assets/chapters';

function processHTMLFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processHTMLFiles(fullPath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            const oldImgCSS = /img\s*\{\s*max-width:\s*100%;\s*height:\s*auto;\s*max-height:\s*250px;\s*object-fit:\s*contain;\s*display:\s*block;\s*margin:\s*15px\s*auto;\s*border-radius:\s*8px;\s*\}/g;
            const newImgCSS = `img {
            background: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 320px;
            height: 180px;
            object-fit: contain;
            display: block;
            margin: 15px auto;
            border: 1px solid #e9ecef;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }`;

            if (content.match(oldImgCSS)) {
                content = content.replace(oldImgCSS, newImgCSS);
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated image CSS in:', fullPath);
            }
        }
    }
}
processHTMLFiles(basePath);
