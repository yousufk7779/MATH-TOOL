const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

// Use literal strings from diagnostic
const badSrc = 'src=data:image';
const goodSrc = 'src=\\"data:image';

let count = 0;
while (content.includes(badSrc)) {
    content = content.replace(badSrc, goodSrc);
    count++;
}

if (count > 0) {
    console.log(`Fixed ${count} src= quotes.`);
    fs.writeFileSync(file, content, 'utf8');
} else {
    console.log('No src=data:image found through includes.');
}
