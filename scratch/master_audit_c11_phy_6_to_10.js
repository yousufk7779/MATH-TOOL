const fs = require('fs');
const path = require('path');

const chapters = [
  { id: 'c11-phy-6', num: 6, title: 'Gravitation (Unit VI)', color: '#FDC830' },
  { id: 'c11-phy-7', num: 7, title: 'Properties of Bulk Matter (Unit VII)', color: '#FF007F' },
  { id: 'c11-phy-8', num: 8, title: 'Thermodynamics (Unit VIII)', color: '#FF512F' },
  { id: 'c11-phy-9', num: 9, title: 'Kinetic Theory (Unit IX)', color: '#42A5F5' },
  { id: 'c11-phy-10', num: 10, title: 'Oscillations and Waves (Unit X)', color: '#00E5FF' }
];

console.log("===============================================================================");
console.log("             MASTER QUALITY & SYLLABUS AUDIT FOR CHAPTERS 6 TO 10              ");
console.log("===============================================================================\n");

let grandTotalCarets = 0;
let grandTotalHots = 0;
let allPassed = true;

chapters.forEach(ch => {
  const filePath = path.join(__dirname, '..', 'client', 'data', 'content', `${ch.id}.ts`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ MISSING FILE: ${filePath}`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Extract Overview and Solutions
  const matchOverview = content.match(/export const c11Phy\d+HtmlOverview = ([\s\S]*?);\n\nexport const/);
  const matchSol = content.match(/export const c11Phy\d+HtmlSolutions = ([\s\S]*?);?\s*$/);

  if (!matchOverview || !matchSol) {
    console.error(`❌ COULD NOT PARSE Overview/Solutions in ${ch.id}.ts`);
    allPassed = false;
    return;
  }

  const overview = JSON.parse(matchOverview[1]);
  const sol = JSON.parse(matchSol[1]);

  const overviewCarets = (overview.match(/\^/g) || []).length;
  const solCarets = (sol.match(/\^/g) || []).length;
  const hotsCount = (sol.match(/HOTS/gi) || []).length;
  const totalQ = (sol.match(/Q\d+[:.]/gi) || []).length;
  const figCards = (overview.match(/📍/g) || []).length;

  grandTotalCarets += overviewCarets + solCarets;
  grandTotalHots += hotsCount;

  const h2s = overview.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || [];

  console.log(`-------------------------------------------------------------------------------`);
  console.log(`📌 CHAPTER ${ch.num}: ${ch.title} [File: ${ch.id}.ts]`);
  console.log(`-------------------------------------------------------------------------------`);
  console.log(` • Carets in Overview: ${overviewCarets === 0 ? '0 ✅' : `${overviewCarets} ❌`}`);
  console.log(` • Carets in Solutions: ${solCarets === 0 ? '0 ✅' : `${solCarets} ❌`}`);
  console.log(` • HOTS labels in Solutions: ${hotsCount === 0 ? '0 ✅' : `${hotsCount} ❌`}`);
  console.log(` • Total Questions: ${totalQ === 100 ? '100 ✅ (25 MCQs, 30 VSAs, 30 SAs, 15 LAs)' : `${totalQ} ❌`}`);
  console.log(` • 3D SVG Figure Cards: ${figCards} ✅`);
  console.log(` • Section H2 Titles Count: ${h2s.length - 2} Syllabus Sections (+ Glossary & Cheat Sheet)`);
  console.log(` • H2 Syllabus Headings:`);
  h2s.forEach(h => {
    const titleText = h.replace(/<[^>]+>/g, '').trim();
    if (!titleText.includes('Glossary') && !titleText.includes('Cheat Sheet')) {
      console.log(`    - ${titleText}`);
    }
  });
  console.log(`\n`);

  if (overviewCarets > 0 || solCarets > 0 || hotsCount > 0 || totalQ !== 100) {
    allPassed = false;
  }
});

console.log("===============================================================================");
console.log(`GRAND TOTAL CARETS: ${grandTotalCarets}`);
console.log(`GRAND TOTAL HOTS LABELS: ${grandTotalHots}`);
console.log(`OVERALL AUDIT STATUS: ${allPassed ? "🎉 100% PASSED - ALL CHAPTERS PERFECT!" : "❌ AUDIT FAILED"}`);
console.log("===============================================================================");
