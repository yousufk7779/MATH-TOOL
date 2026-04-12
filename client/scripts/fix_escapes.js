const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/content/math-ch8.ts');
let d = fs.readFileSync(filePath, 'utf8');

// Replace standard standalone backslash that isn't for quotes or newlines
// Specifically we know there are \1 and \c. We will replace \1 with 1, \c with c.
// Actually just replace any single backslash followed by a digit.
d = d.replace(/\\\\(\d)/g, '$1');

// Replace any backslash followed by 'c' (for cos)
d = d.replace(/\\\\c/g, 'c');
d = d.replace(/\\\\s/g, 's');
d = d.replace(/\\\\t/g, 't');

// The original file error showed errors like:
// "= \1/sin² A + cos² A/sin A cos A"
// Here it literally has a single backslash.

fs.writeFileSync(filePath, d, 'utf8');
console.log('Fixed backslashes');
