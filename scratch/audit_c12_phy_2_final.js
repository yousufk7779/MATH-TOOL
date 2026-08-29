const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-2.ts');
const txt = fs.readFileSync(p, 'utf8');

console.log("File size (bytes):", txt.length);

const rawCaretMatches = txt.match(/[^\\]\^[0-9a-zA-Z]/g) || [];
console.log("Raw carets found:", rawCaretMatches.length);

const imgCount = (txt.match(/<img/g) || []).length;
console.log("Total Base64 <img> tags:", imgCount);

const svgCount = (txt.match(/<svg/g) || []).length;
console.log("SVG count:", svgCount);

const ovMatch = txt.match(/export const c12Phy2HtmlOverview = ([\s\S]*?);\s*export const c12Phy2HtmlSolutions/);
if (ovMatch) {
  const ovHtml = JSON.parse(ovMatch[1]);
  const diagTitles = ovHtml.match(/📸 Diagram [^:]+:[^<]+/g) || [];
  console.log(`Total diagrams in overview: ${diagTitles.length}`);
  diagTitles.forEach(d => console.log(`  - ${d}`));
}
