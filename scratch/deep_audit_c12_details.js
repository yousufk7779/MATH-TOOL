const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const text = fs.readFileSync(filePath, 'utf8');

console.log("================================================================================");
console.log("                DEEP QUALITY, MATH & PHYSICS ACCURACY AUDIT                    ");
console.log("================================================================================");

// 1. Check for raw carets
const carets = (text.match(/\^/g) || []).length;
console.log(`1. Caret count: ${carets} ${carets === 0 ? '✅' : '❌'}`);

// 2. Check for missing closing tags
const openDivs = (text.match(/<div/g) || []).length;
const closeDivs = (text.match(/<\/div>/g) || []).length;
console.log(`2. Div tags: Open = ${openDivs}, Close = ${closeDivs} ${openDivs === closeDivs ? '✅' : '❌'}`);

const openSpans = (text.match(/<span/g) || []).length;
const closeSpans = (text.match(/<\/span>/g) || []).length;
console.log(`3. Span tags: Open = ${openSpans}, Close = ${closeSpans} ${openSpans === closeSpans ? '✅' : '❌'}`);

// 4. Check for unescaped special characters in SVGs
const svgs = text.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log(`4. Total SVGs: ${svgs.length}`);
svgs.forEach((svg, idx) => {
  const hasSub = svg.includes('<sub>') || svg.includes('</sub>');
  const hasSup = svg.includes('<sup>') || svg.includes('</sup>');
  const hasBr = svg.includes('<br>') || svg.includes('<br/>');
  const hasBadEntity = /&[a-z]+;/i.test(svg.replace(/&(middot|times|plusmn|approx|le|ge|amp|lt|gt|quot);/g, ''));
  console.log(`   - SVG ${idx + 1}: hasSub=${hasSub}, hasSup=${hasSup}, hasBr=${hasBr}, hasBadEntity=${hasBadEntity}`);
});

// 5. Check all section titles
const headings = (text.match(/<h2[^>]*>(.*?)<\/h2>/g) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
console.log(`5. Main Headings Count: ${headings.length}`);
headings.forEach((h, i) => console.log(`   ${i + 1}. ${h}`));

// 6. Check question counts and structure
const mcqCount = (text.match(/Q[1-9]:|Q[1-2][0-5]:/g) || []).length;
const totalQ = (text.match(/Q\d+:/g) || []).length;
console.log(`6. Total Questions in Solutions: ${totalQ} ${totalQ === 100 ? '✅' : '❌'}`);

console.log("================================================================================");
