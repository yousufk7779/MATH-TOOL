const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const regex = /<div style="background: #0B0F19; border: 1.8px solid #FF512F;[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
// Let's find each card container
const cardStartRegex = /<div style="background: #0B0F19; border: 1.8px solid #FF512F/g;
let m;
let count = 0;
while ((m = cardStartRegex.exec(txt)) !== null) {
  count++;
  const slice = txt.slice(m.index, m.index + 400);
  console.log(`Card ${count}:`);
  console.log(slice.replace(/src="data:image\/[^;]+;base64,[^"]+"/, 'src="[B64]"'));
}
