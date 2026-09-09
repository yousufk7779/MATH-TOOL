const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_2_overview');
const { buildSolutions } = require('./c11_phy_2_solutions');
const { getMcqs } = require('./c11_phy_2_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 2 Gold Standard Content with 0 Carets & 0 Diagrams...');

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

const fullContent = `// Class 11 Physics Unit II: Kinematics (09 Marks)
// Motion in a Straight Line & Motion in a Plane (JKBOSE / NCERT Official Syllabus Alignment)
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy2HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy2HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy2Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-2.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy2Mcqs
if (ccCode.includes('c11Phy2HtmlOverview, c11Phy2HtmlSolutions } from "./content/c11-phy-2"')) {
  ccCode = ccCode.replace(
    'c11Phy2HtmlOverview, c11Phy2HtmlSolutions } from "./content/c11-phy-2"',
    'c11Phy2HtmlOverview, c11Phy2HtmlSolutions, c11Phy2Mcqs } from "./content/c11-phy-2"'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy2 assignment has mcqs and clean structure
const ch11Phy2Pattern = /const ch11Phy2 = chapterContents\["c11-phy-2"\];[\s\S]*?ch11Phy2\.htmlExercises\["ex-c11-qa"\] = c11Phy2HtmlSolutions;\s*}/;
const newCh11Phy2Code = `const ch11Phy2 = chapterContents["c11-phy-2"];
if (ch11Phy2) {
  ch11Phy2.htmlOverview = c11Phy2HtmlOverview;
  ch11Phy2.htmlExercises = {
    "ex-c11-qa": c11Phy2HtmlSolutions,
  };
  ch11Phy2.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy2.mcqs = c11Phy2Mcqs;
}`;

if (ccCode.match(ch11Phy2Pattern)) {
  ccCode = ccCode.replace(ch11Phy2Pattern, newCh11Phy2Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy2 block in chapterContent.ts');
} else {
  console.log('Pattern not matched, writing directly if needed');
}
