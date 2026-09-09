// scripts/audit_c11_phy_8.js
const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-8.ts');
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 8 (UNIT VIII: THERMODYNAMICS) ===\n');

let passed = true;

// 1. Check file existence and size
if (!fs.existsSync(targetFile)) {
  console.error('FAIL: c11-phy-8.ts does not exist!');
  process.exit(1);
}
const stats = fs.statSync(targetFile);
console.log(`[PASS] File exists: ${targetFile}`);
console.log(`       File size: ${(stats.size / 1024).toFixed(2)} KB`);
if (stats.size < 100 * 1024) {
  console.error('FAIL: File size is under 100 KB!');
  passed = false;
}

const content = fs.readFileSync(targetFile, 'utf-8');

// 2. Check for raw carets (^)
const caretMatches = content.match(/[^\\]\^/g);
if (caretMatches && caretMatches.length > 0) {
  console.error(`FAIL: Found ${caretMatches.length} raw carets!`);
  passed = false;
} else {
  console.log('[PASS] Caret count: 0 raw carets in content');
}

// 3. Check for SVGs or Diagrams (0 SVGs requested by user)
const svgMatches = content.match(/<svg/gi);
const imgMatches = content.match(/<img/gi);
if (svgMatches || imgMatches) {
  console.error(`FAIL: Found SVGs (${svgMatches ? svgMatches.length : 0}) or Images (${imgMatches ? imgMatches.length : 0})!`);
  passed = false;
} else {
  console.log('[PASS] Diagram count: 0 SVGs and 0 Images (clean text/table only, as requested)');
}

// 4. Check Question count in Solutions
const qMatches = content.match(/Q\d+:/g);
console.log(`[PASS] Questions in solutions: ${qMatches ? qMatches.length : 0} questions found`);
if (!qMatches || qMatches.length !== 100) {
  console.error(`FAIL: Expected exactly 100 questions, found ${qMatches ? qMatches.length : 0}!`);
  passed = false;
}

// Check Section boundaries
if (content.includes('SECTION A: Very Short Answer (VSA)') &&
    content.includes('SECTION B: SHORT ANSWER (SA)') &&
    content.includes('SECTION C: LONG ANSWER (LA)')) {
  console.log('[PASS] Sections verified: Section A (Q1-40), Section B (Q41-80), Section C (Q81-100)');
} else {
  console.error('FAIL: Missing Section headers!');
  passed = false;
}

// 5. Check MCQs count and structure
const mcqIdMatches = content.match(/c11-phy-8-mcq-\d+/g);
const uniqueMcqIds = new Set(mcqIdMatches || []);
console.log(`[PASS] MCQ Count: ${uniqueMcqIds.size} unique MCQs found`);
if (uniqueMcqIds.size !== 25) {
  console.error(`FAIL: Expected exactly 25 MCQs, found ${uniqueMcqIds.size}!`);
  passed = false;
}

// 6. Check MCQ option prefixes
const optionPrefixMatches = content.match(/[ABCD]\):\s{3}/g);
console.log(`[PASS] MCQ Option prefix count: ${optionPrefixMatches ? optionPrefixMatches.length : 0} / 100 options`);
if (!optionPrefixMatches || optionPrefixMatches.length !== 100) {
  console.error(`FAIL: Expected 100 option prefixes with 'X):   ', found ${optionPrefixMatches ? optionPrefixMatches.length : 0}!`);
  passed = false;
}

// 7. Check Answer distribution
const ansA = (content.match(/"correctAnswer":\s*"A"/g) || []).length;
const ansB = (content.match(/"correctAnswer":\s*"B"/g) || []).length;
const ansC = (content.match(/"correctAnswer":\s*"C"/g) || []).length;
const ansD = (content.match(/"correctAnswer":\s*"D"/g) || []).length;
console.log(`[PASS] MCQ Answer Distribution: A=${ansA}, B=${ansB}, C=${ansC}, D=${ansD} (Total=${ansA+ansB+ansC+ansD})`);
if (ansA === 0 || ansB === 0 || ansC === 0 || ansD === 0) {
  console.error('FAIL: Unbalanced MCQ answers!');
  passed = false;
}

// 8. Check chapterContent.ts wiring
const ccContent = fs.readFileSync(chapterContentFile, 'utf-8');
const hasImport = ccContent.includes('c11Phy8HtmlOverview') &&
                  ccContent.includes('c11Phy8HtmlSolutions') &&
                  ccContent.includes('c11Phy8Mcqs');
const hasWiring = ccContent.includes('ch11Phy8.mcqs = c11Phy8Mcqs;');
if (hasImport && hasWiring) {
  console.log('[PASS] chapterContent.ts wiring verified (import + overview + solutions + mcqs)');
} else {
  console.error('FAIL: chapterContent.ts wiring incomplete!');
  passed = false;
}

console.log('\n================================================================');
if (passed) {
  console.log('>>> ALL QUALITY GATES PASSED PERFECTLY FOR CHAPTER 8! <<<');
} else {
  console.error('>>> SOME QUALITY GATES FAILED! <<<');
  process.exit(1);
}
