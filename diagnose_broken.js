const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'client/data/content');
const files = fs.readdirSync(contentDir).filter(f => f.startsWith('sci-bio-') && f.endsWith('.ts'));

for (const file of files) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('\\</div>"')) {
        console.log(file + ' has broken divs');
    }
}
