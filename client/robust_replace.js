const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

// The most robust way: match "x" then some spaces then "6px" then some spaces then "rgba"
const regex = /[,x\s0-9.();\\"]{10,20}x\s+6px\s+rgba\([0-9.,\s]+\);?\\?"\s+\/>",/g;

let count = 0;
content = content.replace(regex, (match) => {
    console.log('Matched garbage:', match);
    count++;
    return ''; // Replace with empty
});

if (count > 0) {
    // Also clean up double commas that might occur
    content = content.replace(/",,/g, '",');
    console.log(`Removed ${count} garbage blocks.`);
    fs.writeFileSync(file, content, 'utf8');
} else {
    console.log('No matches with robust regex. Trying simpler...');
    const simpleGarbage = `,0,0,0,0.05);\\" />",x 6px rgba(0,0,0,0.05);\\" />",`;
    if (content.includes(simpleGarbage)) {
        console.log('Found with simpleGarbage!');
        content = content.split(simpleGarbage).join('');
        fs.writeFileSync(file, content, 'utf8');
    } else {
        console.log('STILL NOTHING. Let me try a very loose match.');
        const looseGarbage = /0\.05\);\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g;
        content = content.replace(looseGarbage, '');
        fs.writeFileSync(file, content, 'utf8');
    }
}
