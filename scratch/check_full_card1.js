const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const match = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const/);
const html = JSON.parse(match[1]);

const d1Start = html.indexOf('📸 Diagram 1:');
const d1End = html.indexOf('</div>', html.indexOf('💡', d1Start)) + 6;

console.log(html.slice(d1Start - 200, d1End + 50).replace(/src="data:image\/[^;]+;base64,[^"]+"/, 'src="[BASE64_IMAGE_DATA]"'));
