const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

console.log('Original length:', content.length);

// Fix 1: Add missing \" after src=
content = content.replace(/<img src=data:image\/png;base64,/g, '<img src=\\"data:image/png;base64,');

// Fix 2: Remove duplicated data:image/png sequences
// e.g. iVBORw0"data:image/png;base64,iVBORw
// This happens when a replace went wrong.
content = content.replace(/iVBORw0"data:image\/png;base64,iVBORw/g, 'iVBORw');

// Fix 3: Ensure there's a \" before />", if it's missing or unescaped
// This is harder but let's look for the pattern of the garbage shadow again.
// We already did some of this but let's be thorough.
content = content.replace(/rgba\(0,0,0,0\.05\);" \/>",/g, 'rgba(0,0,0,0.05);\\" />",');

fs.writeFileSync(file, content, 'utf8');
console.log('New length:', content.length);
