const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

let newContent = content.split('<img src=data:image').join('<img src=\\"data:image');

if (newContent.length !== content.length) {
    console.log(`Fixed src= quotes. Length changed by ${newContent.length - content.length}`);
    content = newContent;
}

// Also fix the duplication: iVBORw0"data:image/png;base64,iVBORw
newContent = content.split('iVBORw0"data:image/png;base64,iVBORw').join('iVBORw');
if (newContent.length !== content.length) {
    console.log(`Fixed duplication. Length changed by ${newContent.length - content.length}`);
    content = newContent;
}

fs.writeFileSync(file, content, 'utf8');
