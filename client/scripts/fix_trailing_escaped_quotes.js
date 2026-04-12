const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../data/content');
const files = fs.readdirSync(dirPath).filter(f => f.startsWith('math-') && f.endsWith('.ts'));

let totalFixes = 0;
files.forEach(file => {
    const fPath = path.join(dirPath, file);
    let original = fs.readFileSync(fPath, 'utf8');

    // Remove escaping from quotes at the end of lines
    let content = original.replace(/\\",\r?\n/g, '",\n');
    content = content.replace(/\\"\r?\n/g, '"\n');

    if (original !== content) {
        fs.writeFileSync(fPath, content, 'utf8');
        console.log(`Fixed trailing escaped quotes in: ${file}`);
        totalFixes++;
    }
});
console.log(`Global fix trailing quotes complete: ${totalFixes} files`);

