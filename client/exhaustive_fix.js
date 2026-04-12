const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

const bad = 'x 6px rgba(0,0,0,0.05);\\" />",';
// Note: bad might occur multiple times or have slightly different spacing
// Based on diagnostic: 5c 22 20 2f 3e 22 2c  is  \" />",
// So the bad part is:  x 6px rgba(0,0,0,0.05);\" />",

let count = 0;
while (content.includes(bad)) {
    content = content.replace(bad, '');
    count++;
}

if (count > 0) {
    console.log(`Successfully removed ${count} occurrences of bad string.`);
    fs.writeFileSync(file, content, 'utf8');
} else {
    console.log('Failing to find literal "bad". Trying exact diagnostic bytes.');
    // "x 6px rgba(0,0,0,0.05);\" />","
    // 78 20 36 70 78 20 72 67 62 61 28 30 2c 30 2c 30 2c 30 2e 30 35 29 3b 5c 22 20 2f 3e 22 2c
    const bytes = [0x78, 0x20, 0x36, 0x70, 0x78, 0x20, 0x72, 0x67, 0x62, 0x61, 0x28, 0x30, 0x2c, 0x30, 0x2c, 0x30, 0x2c, 0x30, 0x2e, 0x30, 0x35, 0x29, 0x3b, 0x5c, 0x22, 0x20, 0x2f, 0x3e, 0x22, 0x2c];
    let badFromBytes = '';
    for (let b of bytes) badFromBytes += String.fromCharCode(b);

    if (content.includes(badFromBytes)) {
        console.log('FOUND WITH BYTES!');
        content = content.split(badFromBytes).join('');
        fs.writeFileSync(file, content, 'utf8');
    } else {
        console.log('STILL NOT WORKING. I will use a more aggressive approach.');
    }
}
