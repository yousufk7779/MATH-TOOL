const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const carets = (txt.match(/[^\\]\^[0-9a-zA-Z]/g) || []).length;
console.log("Raw carets found in c12-phy-1.ts:", carets);

const ovMatch = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
if (ovMatch) {
  const html = JSON.parse(ovMatch[1]);
  console.log("Has Master Revision Formula Cheat Sheet:", html.includes('Master Revision Formula Cheat Sheet'));
  console.log("HTML ends with </div>:", html.trim().endsWith('</div>'));
  console.log("Total Base64 <img> tags:", (html.match(/<img/g) || []).length);
}
