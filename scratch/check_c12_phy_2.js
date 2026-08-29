const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-2.ts');
const txt = fs.readFileSync(p, 'utf8');

console.log("File size of c12-phy-2.ts:", txt.length);
console.log("SVG count:", (txt.match(/<svg/g) || []).length);
console.log("Img count:", (txt.match(/<img/g) || []).length);

const exportsFound = txt.match(/export const \w+/g) || [];
console.log("Exports in c12-phy-2.ts:", exportsFound);

const ovMatch = txt.match(/export const c12Phy2HtmlOverview = ([\s\S]*?);\s*export const/);
if (ovMatch) {
  try {
    const html = JSON.parse(ovMatch[1]);
    console.log("Overview HTML length:", html.length);
    // Find headings
    const h2s = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/g) || [];
    console.log("H2 headings:", h2s.map(h => h.replace(/<[^>]+>/g, '').trim()));
  } catch (e) {
    console.log("Error parsing JSON overview:", e.message);
  }
}
