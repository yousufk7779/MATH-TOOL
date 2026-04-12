const fs = require('fs');
let s = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

const strToFind = `0.05);\\" />",x 6px rgba`;

if (s.includes(strToFind)) {
    console.log("Still includes it!");
} else {
    console.log("No longer includes it!");
}

let idx = s.indexOf('x 6px rgba');
if (idx !== -1) {
    console.log('INDEX:', idx, s.slice(idx - 20, idx + 20));
    // Let's just fix it at the index
    let before = s.slice(0, idx - 14); // removes ,0.05);\" />",
    let after = s.slice(idx + 24); // removes x 6px rgba(0,0,0,0.05);\" />",

    // Actually let's just do a big replace
    let newS = s.substring(0, idx - 14) + s.substring(idx + 24);
    fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', newS, 'utf8');
}
