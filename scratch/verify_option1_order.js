const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-2.ts');
const txt = fs.readFileSync(p, 'utf8');

console.log("File size (bytes):", txt.length);

const rawCarets = (txt.match(/[^\\]\^[0-9a-zA-Z]/g) || []).length;
console.log("Raw carets found:", rawCarets);

const imgCount = (txt.match(/<img/g) || []).length;
console.log("Total <img> tags:", imgCount);

const ovMatch = txt.match(/export const c12Phy2HtmlOverview = ([\s\S]*?);\s*export const c12Phy2HtmlSolutions/);
if (ovMatch) {
  const ovHtml = JSON.parse(ovMatch[1]);
  const diagTitles = ovHtml.match(/📸 Diagram \d+:[^<]+/g) || [];
  console.log(`\nTotal Diagrams found (${diagTitles.length}):`);
  diagTitles.forEach(d => console.log(`  ${d}`));
}
