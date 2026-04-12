const fs = require('fs');
let content = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');
content = content.replace(/0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g, '0.05);\\" />",');
fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', content, 'utf8');
console.log('Fixed math-ch3.ts');
