const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const match = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const/);
const html = JSON.parse(match[1]);

let pos = 0;
let i = 1;
while ((pos = html.indexOf('<img', pos)) !== -1) {
  const before = html.slice(Math.max(0, pos - 300), pos);
  const after = html.slice(pos, Math.min(html.length, pos + 300));
  
  console.log(`\n=== Diagram #${i} ===`);
  console.log('BEFORE:', before.replace(/\s+/g, ' '));
  console.log('AFTER (cleaned):', after.replace(/src="data:image\/[^;]+;base64,[^"]+"/, 'src="[B64]"').replace(/\s+/g, ' '));
  i++;
  pos += 4;
}
