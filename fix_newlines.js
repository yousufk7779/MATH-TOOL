const fs = require('fs');
const files = fs.readdirSync('client/data/content').filter(f => f.endsWith('.ts'));
for (let file of files) {
    let p = 'client/data/content/' + file;
    let content = fs.readFileSync(p, 'utf8');
    let newContent = content.replace(/"<img[\s\S]*?\/>",/g, match => match.replace(/\r?\n\s*/g, ' '));
    if (content !== newContent) {
        fs.writeFileSync(p, newContent, 'utf8');
        console.log('Fixed newlines in', file);
    }
}
