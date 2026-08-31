const fs = require('fs');
const code = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-3.ts', 'utf8');

const overviewSnippet = code.split('export const c12Chem3HtmlSolutions')[0].replace('export const c12Chem3HtmlOverview =', 'global.c12Chem3HtmlOverview =');
eval(overviewSnippet);

console.log("Overview length:", global.c12Chem3HtmlOverview.length);
fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_3_overview_extracted.html', global.c12Chem3HtmlOverview, 'utf8');

// Find all headings
const headings = global.c12Chem3HtmlOverview.match(/<h[23][^>]*>[\s\S]*?<\/h[23]>/g) || [];
console.log("Found headings:", headings.length);
headings.forEach((h, idx) => {
  console.log(`${idx + 1}: ${h.replace(/\n\s*/g, ' ')}`);
});
