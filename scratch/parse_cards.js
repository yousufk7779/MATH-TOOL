const fs = require('fs');

const raw = fs.readFileSync('client/data/content/c12-chem-1.ts', 'utf8');

// match all img tags and their enclosing container
const imgRegex = /<div style=\\"background: rgba\(15, 23, 42, 0\.9\);[^\\]*\\">[\s\S]*?<\/div>\\n<\/div>/g;
let match;
let count = 0;
while ((match = imgRegex.exec(raw)) !== null) {
  count++;
  let snippet = match[0].replace(/data:image\/[a-zA-Z0-9.+_-]+;base64,[A-Za-z0-9+/=]{30,}/g, '[BASE64]');
  snippet = snippet.replace(/\\"/g, '"').replace(/\\n/g, '\n');
  console.log(`\n================ CARD ${count} ================`);
  console.log(snippet);
}
console.log('Matched cards:', count);
