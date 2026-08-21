const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');

console.log("=" .repeat(80));
console.log("          QUALITY & SYLLABUS AUDIT FOR CLASS 12 PHYSICS CHAPTER 1           ");
console.log("=" .repeat(80));

if (!fs.existsSync(filePath)) {
  console.error("❌ FILE NOT FOUND:", filePath);
  process.exit(1);
}

const text = fs.readFileSync(filePath, 'utf8');

const overviewMatch = text.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);?\s*export const/);
const solutionsMatch = text.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);?\s*$/);

const overviewStr = overviewMatch ? overviewMatch[1] : '';
const solutionsStr = solutionsMatch ? solutionsMatch[1] : '';

// 1. Carets count
const overviewCarets = (overviewStr.match(/\^/g) || []).length;
const solutionsCarets = (solutionsStr.match(/\^/g) || []).length;
const totalCarets = overviewCarets + solutionsCarets;

// 2. HOTS count
const hotsCount = (solutionsStr.match(/\(HOTS/gi) || []).length;

// 3. Questions count
const qMatches = solutionsStr.match(/Q\d+:/g) || [];
const totalQuestions = qMatches.length;

// 4. SVG cards
const svgCount = (overviewStr.match(/<svg/g) || []).length;

// 5. Definition Boxes
const defCount = (overviewStr.match(/📌 DEFINITION:/g) || []).length;

// 6. Section Headings (h2)
const h2Matches = (overviewStr.match(/<h2[^>]*>(.*?)<\/h2>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());

console.log(` • File Size: ${(text.length / 1024).toFixed(2)} KB`);
console.log(` • Carets in Overview: ${overviewCarets} ${overviewCarets === 0 ? '✅' : '❌'}`);
console.log(` • Carets in Solutions: ${solutionsCarets} ${solutionsCarets === 0 ? '✅' : '❌'}`);
console.log(` • HOTS labels in Solutions: ${hotsCount} ${hotsCount === 0 ? '✅' : '❌'}`);
console.log(` • Total Questions: ${totalQuestions} ${totalQuestions === 100 ? '✅' : '❌'}`);
console.log(` • 3D SVG Figure Cards: ${svgCount} ${svgCount > 0 ? '✅' : '❌'}`);
console.log(` • Prominent Definition Boxes (defBox): ${defCount} ${defCount >= 10 ? '✅' : '⚠️'}`);
console.log(` • Main Section Headings (h2): ${h2Matches.length}`);

console.log(`\nMain Headings Checklist:`);
h2Matches.forEach((h, idx) => {
  console.log(`   ${idx + 1}. ${h}`);
});

console.log("\n" + "=" .repeat(80));
if (totalCarets === 0 && hotsCount === 0 && totalQuestions === 100 && svgCount >= 4 && defCount >= 10) {
  console.log("OVERALL AUDIT STATUS: 🎉 100% PASSED - CLASS 12 PHYSICS CHAPTER 1 PERFECT!");
} else {
  console.log("OVERALL AUDIT STATUS: ❌ AUDIT ISSUES DETECTED");
}
console.log("=" .repeat(80));
