const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-1.ts', 'utf8');

const overview = content.match(/export const c12Chem1HtmlOverview = ([\s\S]*?);\n\nexport const c12Chem1HtmlSolutions/)[1];

const cardRegex = /<div style="background: rgba\(15, 23, 42, 0\.9\)[\s\S]*?💡([\s\S]*?)<\/div>\s*<\/div>/g;
let match;
let count = 0;
while ((match = cardRegex.exec(overview)) !== null) {
  count++;
  console.log(`\n=== DIAGRAM CARD ${count} ===`);
  const caption = match[1].replace(/<[^>]+>/g, '').trim();
  console.log('Caption:', caption.slice(0, 180) + '...');
}
console.log('\nTotal diagram cards detected in Overview:', count);
