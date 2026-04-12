const fs = require('fs');
let s = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

const lines = s.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('0.05);\\" />",x 6px rgba')) {
        console.log("Found in line " + (i + 1));
        const idx = lines[i].indexOf('0.05);\\" />",x 6px rgba');
        console.log(lines[i].substring(idx - 30, idx + 30));

        // We will slice out the garbage. The garbage starts right after the quote.
        // wait, if we see `"Solution:",,0.05);\" />",x 6px rgba(0,0,0,0.05);\" />",`
        // We can just find `,0.05);\\" />",x 6px rgba(0,0,0,0.05);\\" />",` and replace with ''
        lines[i] = lines[i].split(',0.05);\\" />",x 6px rgba(0,0,0,0.05);\\" />",').join('');
    }
}

fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', lines.join('\n'), 'utf8');
