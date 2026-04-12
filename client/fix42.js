const fs = require('fs');
let s = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

// There are multiple instances of this corruption probably:
const regex = /r: 1px solid #e9ecef; bo\\" \/>\\",/g;
s = s.replace(regex, ''); // Wait, let's see what it exactly is.

const lines = s.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('bo" />"')) {
        console.log("Found bo /> in line " + (i + 1));
        const idx = lines[i].indexOf('bo" />"');
        console.log(lines[i].substring(idx - 30, idx + 30));

        // Let's just fix it manually. The string should end at the correct img tag end.
        // Replace the corrupted string:
        lines[i] = lines[i].replace(/border: 1px solid #e9ecef; bo" \/>",/g, 'border: 1px solid #e9ecef; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\\" />",');
    }
}

fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', lines.join('\n'), 'utf8');
