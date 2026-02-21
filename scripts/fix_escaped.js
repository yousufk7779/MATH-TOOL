const fs = require('fs');
const path = require('path');

const chaptersDir = 'd:/MATH-T-new/client/assets/chapters';

function fixEscaped(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            fixEscaped(fullPath);
        } else if (item.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            const regex = /&lt;span class="fraction"&gt;&lt;span class="numerator"&gt;(.*?)&lt;\/span&gt;&lt;span class="denominator"&gt;(.*?)&lt;\/span&gt;&lt;\/span&gt;/g;

            if (regex.test(content)) {
                content = content.replace(regex, (match, n, d) => {
                    return `<span class="fraction"><span class="numerator">${n}</span><span class="denominator">${d}</span></span>`;
                });
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Unescaped fractions in:', fullPath);
            }
        }
    }
}
fixEscaped(chaptersDir);
