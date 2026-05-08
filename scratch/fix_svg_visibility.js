const fs = require('fs');
const path = 'd:\\All NCERT SOLUTIONS\\client\\data\\content\\c8-math-3.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Fix stroke colors in SVGs to black for white background
content = content.replace(/stroke="#e0e0e0"/g, 'stroke="#000000"');
content = content.replace(/stroke="#333"/g, 'stroke="#000000"');
content = content.replace(/stroke="#666"/g, 'stroke="#444"'); // Diagonals a bit lighter but visible

// 2. Fix text fill colors in SVGs to black for white background
content = content.replace(/fill="#e0e0e0"/g, 'fill="#000000"');
content = content.replace(/fill="#333"/g, 'fill="#000000"');

// 3. Ensure theme color highlights are preserved (they are #FB8C00)
// The previous script already set them to #FB8C00.

fs.writeFileSync(path, content);
console.log('Visibility fix complete!');
