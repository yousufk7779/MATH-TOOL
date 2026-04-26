const fs = require('fs');
const b64 = fs.readFileSync('scratch/q9_b64.txt', 'utf8').trim();
let content = fs.readFileSync('client/data/content/c9-sci-chem-1.ts', 'utf8');

// Match the escaped src attribute
const regex = /src=\\"https:\/\/cdn\.teachoo\.com\/66b9767f-8647-4ca4-b378-d42f0b15e196\/name-a,b,c,d,e-and-f-in-the-following-diagram-showing-change-in-its-state-teachoo\.jpg\\"/;
const replacementStr = `src=\\"${b64}\\"`;

if (regex.test(content)) {
    content = content.replace(regex, replacementStr);
    fs.writeFileSync('client/data/content/c9-sci-chem-1.ts', content);
    console.log('Successfully replaced image src');
} else {
    console.log('Target regex not found');
}
