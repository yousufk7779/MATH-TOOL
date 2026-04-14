const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'content', 'math-ch1.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace: <span style="font-weight: normal; color: #FF6B6B;">(i) 140</span>
// With: <span style="font-weight: normal;"><font color="#FF6B6B">(i) 140</font></span>

content = content.replace(/<span style=\\"font-weight: normal; color: #FF6B6B;\\">\((i|ii|iii|iv|v|vi|a|b|c|d|e)\)(.*?)<\/span>/g, '<span style=\\"font-weight: normal;\\"><font color=\\"#FF6B6B\\">($1)$2</font></span>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done modifying math-ch1.ts for Android compatibility using <font color="...">');
