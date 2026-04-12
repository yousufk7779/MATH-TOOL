const fs = require('fs');

let content = fs.readFileSync('data/content/math-ch3.ts', 'utf8');

// Replace unescaped quotes with escaped quotes for valid TS strings
content = content.replace(/class="([^"]+)"/g, 'class=\\"$1\\"');
content = content.replace(/rowspan="([^"]+)"/g, 'rowspan=\\"$1\\"');
content = content.replace(/colspan="([^"]+)"/g, 'colspan=\\"$1\\"');
content = content.replace(/width="([^"]+)"/g, 'width=\\"$1\\"');

fs.writeFileSync('data/content/math-ch3.ts', content, 'utf8');
console.log('Fixed math-ch3.ts');
