const fs = require('fs');
const path = 'd:\\All NCERT SOLUTIONS\\client\\data\\content\\c8-math-3.ts';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/#FF8C00/g, '#FB8C00');
fs.writeFileSync(path, content);
console.log('Done!');
