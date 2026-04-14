const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'content', 'math-ch1.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The color to use: #FF6B6B
const newColor = '#FF6B6B';

// Regex to find things like "<span style=\"font-weight: normal;\">(i) 140</span>" inside the solution array.
// We want to replace <span style="font-weight: normal;">(i)...</span> with <span style="font-weight: normal; color: #FF6B6B;">(i)...</span>

content = content.replace(/<span style=\\"font-weight: normal;\\">\((i|ii|iii|iv|v|vi|a|b|c|d|e)\)(.*?)<\/span>/g, '<span style=\\"font-weight: normal; color: #FF6B6B;\\">($1)$2</span>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done modifying math-ch1.ts');
