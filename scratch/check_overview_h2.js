const fs = require('fs');

const overviewFile = 'd:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-2.ts';
const content = fs.readFileSync(overviewFile, 'utf8');

// Get just the overview string
const overviewMatch = content.match(/export const c12Chem2HtmlOverview = "([\s\S]*?)";\s*export const c12Chem2Exercises/);
if (overviewMatch) {
  const overviewHtml = JSON.parse(`"${overviewMatch[1]}"`);
  const h2s = overviewHtml.match(/<h2[^>]*>.*?<\/h2>/g) || [];
  console.log("Overview H2 Headings:");
  h2s.forEach((h, i) => console.log(`${i+1}: ${h}`));
}
