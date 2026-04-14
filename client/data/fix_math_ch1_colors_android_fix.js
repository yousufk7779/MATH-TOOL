const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'content', 'math-ch1.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace: <span style="font-weight: normal;"><font color="#FF6B6B">(i) 140</font></span>
// With: <strong style="color: #FF6B6B; font-weight: normal;">(i) 140</strong>

content = content.replace(/<span style=\\"font-weight: normal;\\"><font color=\\"#FF6B6B\\">\((i|ii|iii|iv|v|vi|a|b|c|d|e)\)(.*?)<\/font><\/span>/g, '<strong style=\\"color: #FF6B6B; font-weight: normal;\\">($1)$2</strong>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Reverted <font> tag and changed to <strong style="..."> for Android compatibility');
