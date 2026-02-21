const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../client/assets/chapters/chapter13');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'exercises.html');
files.forEach(f => {
    let content = fs.readFileSync(path.join(dir, f), 'utf-8');
    const matches = content.match(/<img[^>]+>/g);
    let changed = false;
    if (matches) {
        matches.forEach(img => {
            const altAttr = img.match(/alt="([^"]+)"/);
            const alt = altAttr ? altAttr[1] : '';
            const b64Match = img.match(/base64,([^"]+)/);
            if (b64Match) {
                const svg = Buffer.from(b64Match[1], 'base64').toString('utf-8');
                const isBarChart = svg.includes('<rect') && alt !== 'Table Visual';
                console.log(f + ' : ' + alt + ' : ' + (isBarChart ? 'Bar Chart' : 'Other'));

                if (isBarChart) {
                    content = content.replace(img, '');
                    changed = true;
                }
            }
        });
    }
    if (changed) {
        fs.writeFileSync(path.join(dir, f), content, 'utf-8');
        console.log(`Updated ${f}`);
    }
});
