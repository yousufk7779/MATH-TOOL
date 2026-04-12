const fs = require('fs');
const content = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts', 'utf8');

const set = new Set();
const re = /\\([^\s\"{}]+)/g;
let m;
while ((m = re.exec(content))) {
    set.add(m[1]);
}

const list = Array.from(set).sort();
console.log('Unique backslash patterns:');
console.log(list.join('\n'));
