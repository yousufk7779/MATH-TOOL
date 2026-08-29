const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const match = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const/);
const html = JSON.parse(match[1]);

// Search where capacitors start in overview
const capIdx = html.indexOf('Capacit');
console.log('Capacitor start idx:', capIdx);
if (capIdx !== -1) {
  console.log(html.slice(capIdx - 100, capIdx + 3000).replace(/src="data:image\/[^;]+;base64,[^"]+"/, 'src="[B64]"'));
}
