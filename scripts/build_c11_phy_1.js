const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_1_overview');
const { buildSolutions } = require('./c11_phy_1_solutions');
const { getMcqs } = require('./c11_phy_1_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 1 Gold Standard Content with 0 Carets...');

let overviewHtml = sanitizeMath(buildOverview());
let solutionsHtml = sanitizeMath(buildSolutions());
let mcqs = getMcqs().map(m => ({
  ...m,
  question: sanitizeMath(m.question),
  options: m.options.map(opt => sanitizeMath(opt)),
  explanation: sanitizeMath(m.explanation)
}));

// Double check if any carets remain anywhere
const fullContentRaw = overviewHtml + solutionsHtml + JSON.stringify(mcqs);
const remainingCarets = (fullContentRaw.match(/[^\\]\^/g) || []).length;
console.log(`Remaining carets check before write: ${remainingCarets}`);

// Format MCQs JSON with indentation
const mcqsCode = JSON.stringify(mcqs, null, 2);

const fullContent = `// Class 11 Physics Unit I: Physical World and Measurement (05 Marks)
// Units and Measurements (JKBOSE / NCERT Official Syllabus Alignment)
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy1HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy1HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy1Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-1.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy1Mcqs
if (ccCode.includes('c11Phy1HtmlOverview, c11Phy1HtmlSolutions } from "./content/c11-phy-1"')) {
  ccCode = ccCode.replace(
    'c11Phy1HtmlOverview, c11Phy1HtmlSolutions } from "./content/c11-phy-1"',
    'c11Phy1HtmlOverview, c11Phy1HtmlSolutions, c11Phy1Mcqs } from "./content/c11-phy-1"'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy1 assignment has mcqs
const ch11Phy1Pattern = /const ch11Phy1 = chapterContents\["c11-phy-1"\];[\s\S]*?ch11Phy1\.htmlExercises\["ex-c11-qa"\] = c11Phy1HtmlSolutions;\s*}/;
const newCh11Phy1Code = `const ch11Phy1 = chapterContents["c11-phy-1"];
if (ch11Phy1) {
  ch11Phy1.htmlOverview = c11Phy1HtmlOverview;
  ch11Phy1.htmlExercises = {
    "ex-c11-qa": c11Phy1HtmlSolutions,
  };
  ch11Phy1.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy1.mcqs = c11Phy1Mcqs;
}`;

if (ccCode.match(ch11Phy1Pattern)) {
  ccCode = ccCode.replace(ch11Phy1Pattern, newCh11Phy1Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy1 block in chapterContent.ts');
}
