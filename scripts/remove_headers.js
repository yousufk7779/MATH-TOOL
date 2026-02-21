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
            let originalContent = content;

            // Remove the exact block:
            // <div class="header">
            //    <div class="logo">JIGUU</div>
            //    <div class="chapter-title">...</div>
            // </div>
            const headerRegex = /<div class="header">\s*<div class="logo">JIGUU<\/div>\s*<div class="chapter-title">.*?<\/div>\s*<\/div>/g;

            content = content.replace(headerRegex, '');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Removed header from:', fullPath);
            }
        }
    }
}
processHTMLFiles(basePath);
