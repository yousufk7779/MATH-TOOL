const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const text = fs.readFileSync(filePath, 'utf8');

const svgs = text.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log(`Found ${svgs.length} SVGs in c12-phy-1.ts`);

svgs.forEach((svg, idx) => {
  const hasSub = /<sub/i.test(svg);
  const hasSup = /<sup/i.test(svg);
  const hasHtmlEntity = /&(Phi|oint|sdot|theta|lambda|epsilon|pi);/i.test(svg);
  console.log(`SVG ${idx + 1}: hasSub=${hasSub}, hasSup=${hasSup}, hasHtmlEntity=${hasHtmlEntity}`);
  if (hasSub || hasSup || hasHtmlEntity) {
    const invalidMatches = svg.match(/<text[^>]*>[\s\S]*?<\/text>/gi) || [];
    invalidMatches.forEach(m => {
      if (/<sub|<sup|&(Phi|oint|sdot|theta|lambda|epsilon|pi);/i.test(m)) {
        console.log(`  Invalid Text in SVG ${idx + 1}: ${m}`);
      }
    });
  }
});
