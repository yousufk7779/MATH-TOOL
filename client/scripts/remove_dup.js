const fs = require('fs');
const filepath = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch1.ts';
let content = fs.readFileSync(filepath, 'utf8');

const regex = /,?\s*\{\s*id:\s*"examples",[\s\S]*?\}\s*(?=\]\s*,\s*mcqs:)/g;
if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(filepath, content);
    console.log('Successfully removed duplicate Examples');
} else {
    console.log('Could not find duplicate Examples');
}
