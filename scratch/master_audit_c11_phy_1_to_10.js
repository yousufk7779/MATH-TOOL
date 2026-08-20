const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');

console.log("=" .repeat(80));
console.log("             MASTER QUALITY & SYLLABUS AUDIT FOR CHAPTERS 1 TO 10              ");
console.log("=" .repeat(80));

let totalCarets = 0;
let totalHots = 0;
let totalQuestions = 0;
let totalSvgCards = 0;
let totalProseParagraphs = 0;

for (let i = 1; i <= 10; i++) {
  const fileName = `c11-phy-${i}.ts`;
  const filePath = path.join(contentDir, fileName);

  console.log(`\n-------------------------------------------------------------------------------`);
  console.log(`📌 CHAPTER ${i}: [File: ${fileName}]`);
  console.log(`-------------------------------------------------------------------------------`);

  if (!fs.existsSync(filePath)) {
    console.log(` ❌ FILE NOT FOUND!`);
    continue;
  }

  const text = fs.readFileSync(filePath, 'utf8');

  // Overview and Solutions match
  const overviewMatch = text.match(/export const c11Phy\d+HtmlOverview = ([\s\S]*?);?\s*export const/);
  const solutionsMatch = text.match(/export const c11Phy\d+HtmlSolutions = ([\s\S]*?);?\s*$/);

  const overviewStr = overviewMatch ? overviewMatch[1] : '';
  const solutionsStr = solutionsMatch ? solutionsMatch[1] : '';

  // Carets count
  const overviewCarets = (overviewStr.match(/\^/g) || []).length;
  const solutionsCarets = (solutionsStr.match(/\^/g) || []).length;
  totalCarets += (overviewCarets + solutionsCarets);

  // HOTS count
  const hotsCount = (solutionsStr.match(/\(HOTS/gi) || []).length;
  totalHots += hotsCount;

  // Questions count matching Q1: to Q100:
  const qMatches = solutionsStr.match(/Q\d+:/g) || [];
  const qSum = qMatches.length;
  totalQuestions += qSum;

  // SVG cards
  const svgCount = (overviewStr.match(/<svg/g) || []).length;
  totalSvgCards += svgCount;

  // Prose paragraphs
  const pCount = (overviewStr.match(/<p>/g) || []).length;
  totalProseParagraphs += pCount;

  // Headings
  const h2Matches = (overviewStr.match(/<h2[^>]*>(.*?)<\/h2>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());

  console.log(` • Carets in Overview: ${overviewCarets} ${overviewCarets === 0 ? '✅' : '❌'}`);
  console.log(` • Carets in Solutions: ${solutionsCarets} ${solutionsCarets === 0 ? '✅' : '❌'}`);
  console.log(` • HOTS labels in Solutions: ${hotsCount} ${hotsCount === 0 ? '✅' : '❌'}`);
  console.log(` • Total Questions: ${qSum} ${qSum === 100 ? '✅' : '❌'}`);
  console.log(` • 3D SVG Figure Cards: ${svgCount} ${svgCount > 0 ? '✅' : '❌'}`);
  console.log(` • Explanatory Prose Paragraphs (<p>): ${pCount} ${pCount >= 4 ? '✅' : '⚠️'}`);
  console.log(` • Main Section Headings (h2): ${h2Matches.length}`);
}

console.log("\n" + "=" .repeat(80));
console.log(`GRAND TOTAL CARETS: ${totalCarets}`);
console.log(`GRAND TOTAL HOTS LABELS: ${totalHots}`);
console.log(`GRAND TOTAL QUESTIONS: ${totalQuestions} / 1000`);
console.log(`GRAND TOTAL 3D SVG CARDS: ${totalSvgCards}`);
console.log(`GRAND TOTAL PROSE PARAGRAPHS: ${totalProseParagraphs}`);
if (totalCarets === 0 && totalHots === 0 && totalQuestions === 1000) {
  console.log("OVERALL AUDIT STATUS: 🎉 100% PASSED - ALL 10 CHAPTERS PERFECT!");
} else {
  console.log("OVERALL AUDIT STATUS: ❌ AUDIT ISSUES DETECTED");
}
console.log("=" .repeat(80));
