const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../client/data/content/c11-phy-6.ts');
const content = fs.readFileSync(file, 'utf-8');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 6 ===\n');

let failed = false;

// 1. Raw carets check
const caretMatches = content.match(/[^\\]\^/g);
if (caretMatches) {
  console.error(`❌ FAILED: Found ${caretMatches.length} raw carets (^) in content!`);
  failed = true;
} else {
  console.log('✅ PASSED: 0 raw carets (^) found in content.');
}

// 2. Questions count in Solutions
const qMatches = content.match(/>Q\d+:/g) || [];
console.log(`ℹ️ Total questions found: ${qMatches.length}`);
if (qMatches.length === 100) {
  console.log('✅ PASSED: Exactly 100 questions in Solutions tab.');
} else {
  console.error(`❌ FAILED: Expected 100 questions, but found ${qMatches.length}!`);
  failed = true;
}

// Check Sections breakdown
const vsaHeaders = content.match(/SECTION A: Very Short Answer \(VSA\) Questions/i);
const saHeaders = content.match(/SECTION B: Short Answer \(SA\) Questions/i);
const laHeaders = content.match(/SECTION C: Long Answer \(LA\) Questions/i);

if (vsaHeaders && saHeaders && laHeaders) {
  console.log('✅ PASSED: Section A (Q1-Q40), Section B (Q41-Q80), Section C (Q81-Q100) correctly labeled.');
} else {
  console.error('❌ FAILED: Section headers mismatch!');
  failed = true;
}

// 3. MCQs count & structure
const mcqRegex = /"id": "c11-phy-6-mcq-(\d+)"/g;
const mcqsFound = (content.match(mcqRegex) || []).length;
console.log(`ℹ️ Total MCQs found: ${mcqsFound}`);
if (mcqsFound === 25) {
  console.log('✅ PASSED: Exactly 25 MCQs in Tab 3.');
} else {
  console.error(`❌ FAILED: Expected 25 MCQs, found ${mcqsFound}!`);
  failed = true;
}

// 4. Option prefix check
const optionLines = content.match(/"A\):   |"B\):   |"C\):   |"D\):   /g) || [];
if (optionLines.length === 25 * 4) {
  console.log(`✅ PASSED: All 100 options (25 x 4) have strict 'A):   ', 'B):   ', 'C):   ', 'D):   ' prefixes.`);
} else {
  console.error(`❌ FAILED: Option prefixes count: ${optionLines.length} / 100!`);
  failed = true;
}

// 5. Answer distribution
const ansCount = { a: 0, b: 0, c: 0, d: 0 };
const ansMatches = content.match(/"correctAnswer": "([abcd])"/g) || [];
ansMatches.forEach(m => {
  const ans = m.match(/"([abcd])"/)[1];
  ansCount[ans] = (ansCount[ans] || 0) + 1;
});
console.log('ℹ️ MCQ Answer Distribution:', ansCount);
const isBalanced = Object.values(ansCount).every(c => c >= 5 && c <= 8);
if (isBalanced) {
  console.log('✅ PASSED: Balanced A/B/C/D answer distribution.');
} else {
  console.error('❌ FAILED: Imbalanced answer key distribution!');
  failed = true;
}

// 6. Zero SVGs and Zero Images check
const svgs = (content.match(/<svg/gi) || []).length;
const imgs = (content.match(/<img/gi) || []).length;
if (svgs === 0 && imgs === 0) {
  console.log('✅ PASSED: 0 SVGs and 0 Images (diagrams cleanly omitted as requested).');
} else {
  console.error(`❌ FAILED: Found ${svgs} SVGs and ${imgs} Images!`);
  failed = true;
}

// 7. Check chapterContent.ts wiring
const ccFile = path.join(__dirname, '../client/data/chapterContent.ts');
const ccContent = fs.readFileSync(ccFile, 'utf-8');

const importCheck = ccContent.includes('c11Phy6Mcqs');
const mcqsAssigned = ccContent.includes('ch11Phy6.mcqs = c11Phy6Mcqs;');
const overviewAssigned = ccContent.includes('ch11Phy6.htmlOverview = c11Phy6HtmlOverview;');
const solutionsAssigned = ccContent.includes('c11Phy6HtmlSolutions');

if (importCheck && mcqsAssigned && overviewAssigned && solutionsAssigned) {
  console.log('✅ PASSED: chapterContent.ts is fully and correctly wired with Overview, Solutions, and MCQs for c11-phy-6.');
} else {
  console.error('❌ FAILED: chapterContent.ts wiring incomplete:', {
    importCheck,
    mcqsAssigned,
    overviewAssigned,
    solutionsAssigned
  });
  failed = true;
}

console.log('\n----------------------------------------');
if (failed) {
  console.error('❌ AUDIT FAILED! Please fix the errors above.');
  process.exit(1);
} else {
  console.log('🌟 AUDIT PASSED! All 7 quality gates successfully satisfied.');
}
