const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../data/content/math-ch2.ts');
let content = fs.readFileSync(file, 'utf8');

const regex = /height: 120px;/g;
const newContent = content.replace(regex, 'height: 84px;');

if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Successfully replaced all graph heights to 84px (30% reduction)');
} else {
    console.log('No matches found for height: 120px;');
}
