const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const match = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const/);
const html = JSON.parse(match[1]);

const capIdx = html.indexOf('12. Capacitors, Capacitance');
console.log(html.slice(capIdx).replace(/src="data:image\/[^;]+;base64,[^"]+"/, 'src="[B64]"'));
