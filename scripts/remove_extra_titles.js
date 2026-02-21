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

            // Remove <div class="exercise-title">...</div>
            content = content.replace(/<div class="exercise-title">.*?<\/div>\s*/g, '');

            // Remove <div class="chapter-title">...</div>
            content = content.replace(/<div class="chapter-title">.*?<\/div>\s*/g, '');

            // The previous script might have left a loose </div> right after the chapter-title.
            // Let's remove any </div> that are just hanging around at the very beginning of the body 
            // after the titles. We can just look for instances where it might be orphaned.
            // Actually, a safer way is just to replace:
            // \n    \n        \n    </div>
            // Wait, looking at the source:
            // <div class="exercise-title">EXERCISE1</div>\n\n\n    \n        <div class="chapter-title">Chapter 1: Real Numbers - Exercise 1.1</div>\n    </div>
            // If I remove the exercise-title and chapter-title, I'm left with:
            // \n\n\n    \n        \n    </div>
            content = content.replace(/<body>\s*(?:<\/div>\s*)*/g, '<body>\n');

            // Let's also do a general cleanup of any trailing `</div>` that occurs RIGHT after an `<hr/>`
            // Since there's <hr/>\n<div class="exercise-title">... then potentially a loose </div>
            content = content.replace(/<hr\/>\s*(?:<\/div>\s*)*/g, '<hr/>\n');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Cleaned titles from:', fullPath);
            }
        }
    }
}
processHTMLFiles(basePath);
