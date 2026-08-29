const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const ovMatch = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
if (ovMatch) {
  const html = JSON.parse(ovMatch[1]);
  console.log("End of overview (last 1500 chars):");
  console.log(html.slice(-1500));
}
