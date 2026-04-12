const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

// Look for '0.05);\\" />",x 6px rgba' and remove the whole garbage section
const startStr = '0.05);\\" />",x 6px rgba';
const regex = /,0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g;

content = content.replace(regex, '');

// another possible malformed string could be just '0.05);\\" />",x 6px rgba(0,0,0,0.05);\\" />",' without comma
const regex2 = /0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g;
content = content.replace(regex2, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed garbage.');
