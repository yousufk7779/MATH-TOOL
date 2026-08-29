const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-2.ts');
const txt = fs.readFileSync(p, 'utf8');

const ovMatch = txt.match(/export const c12Phy2HtmlOverview = ([\s\S]*?);\s*export const c12Phy2HtmlSolutions/);
const ovHtml = JSON.parse(ovMatch[1]);

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_phy_2_overview_clean.html', ovHtml, 'utf8');
console.log("Written c12_phy_2_overview_clean.html (length: " + ovHtml.length + ")");
