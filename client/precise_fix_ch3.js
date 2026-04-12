const fs = require('fs');
const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(path, 'utf8');

console.log('Original length:', content.length);

// The garbage pattern is exactly:
// \" />",x 6px rgba(0,0,0,0.05);\" />",
// Or variations thereof.

// Let's use a more robust regex that looks for the closing of the img tag followed by the garbage.
// We want to replace  \" />",x 6px rgba...  with  \" />",

// The garbage seems to repeat 0.05);\" />", or similar.
const garbage = /\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g;
content = content.replace(garbage, '\\" />",');

// Also check for the one I saw at the end of L43:
// 5);\" />",x 6px rgba(0,0,0,0.05
const tailGarbage = /0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05/g;
content = content.replace(tailGarbage, '0.05);\\" />"');

// And the one that caused the Babel error at line 43:
// it ended in 0.05);\" />",x 6px rgba(0,0,0,0.05
// Wait, if I replace the L43 tail:
const lines = content.split('\n');
if (lines[42] && lines[42].includes('rgba(0,0,0,0.05')) {
    console.log('Line 43 still has garbage. Cleaning...');
    let l = lines[42];
    let lastValidIdx = l.lastIndexOf('\\" />",');
    if (lastValidIdx !== -1) {
        lines[42] = l.substring(0, lastValidIdx + 7); // include \" />",
    }
}
content = lines.join('\n');

fs.writeFileSync(path, content, 'utf8');
console.log('New length:', content.length);
