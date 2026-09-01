const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-1.ts', 'utf8');

const regex = /<div style="background: rgba\(15, 23, 42, 0\.9\); border: 1\.5px solid rgba\(0, 229, 255, 0\.4\)[\s\S]*?<\/div>\s*<\/div>/g;
let match;
let count = 0;
while ((match = regex.exec(content)) !== null) {
  count++;
  let cardHtml = match[0].replace(/data:image\/[a-zA-Z0-9.+_-]+;base64,[A-Za-z0-9+/=]{30,}/g, '[BASE64]');
  console.log(`\n================ CARD ${count} ================`);
  console.log(cardHtml);
}
