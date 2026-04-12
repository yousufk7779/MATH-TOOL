const fs = require('fs');
let content = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

// The issue seems to be text appended like:
// 0.05);\" />",x 6px rgba(0,0,0,0.05);\" />",
// or similar strings. Let's find exactly what line 92 col 198 fails on.
const lines = content.split('\n');
console.log('Line 92:', lines[91]); // remember lines are 0-indexed in JS, so line 92 is index 91

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('/>\",x')) {
        console.log('Found string in line:', i + 1);
        const badIdx = lines[i].indexOf('/>\",x');
        console.log('Context:', lines[i].substring(badIdx - 50, badIdx + 50));

        // Let's fix this specific line
        // Assuming the part '/>\",x 6px rgba(0,0,0,0.05);\\\" />\",' is the bug
        lines[i] = lines[i].replace(/\/\>\\",x 6px rgba\(0,0,0,0\.05\);\\\" \/\>\\",/g, '/>\\",');
    }
}

fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', lines.join('\n'), 'utf8');
console.log('Finished checking');
