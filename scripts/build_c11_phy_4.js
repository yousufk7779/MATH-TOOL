const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_4_overview');
const { buildSolutions } = require('./c11_phy_4_solutions');
const { getMcqs } = require('./c11_phy_4_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 4 Gold Standard Content with 0 Carets & 0 Diagrams...');

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

const fullContent = `// Class 11 Physics Unit IV: Work, Energy and Power (06 Marks)
// Official JKBOSE / CBSE / NCERT Syllabus Alignment
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy4HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy4HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy4Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-4.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy4Mcqs
if (ccCode.includes('c11Phy4HtmlOverview, c11Phy4HtmlSolutions } from "./content/c11-phy-4"')) {
  ccCode = ccCode.replace(
    'c11Phy4HtmlOverview, c11Phy4HtmlSolutions } from "./content/c11-phy-4"',
    'c11Phy4HtmlOverview, c11Phy4HtmlSolutions, c11Phy4Mcqs } from "./content/c11-phy-4"'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy4 assignment has mcqs and clean structure
const ch11Phy4Pattern = /const ch11Phy4 = chapterContents\["c11-phy-4"\];[\s\S]*?ch11Phy4\.htmlExercises\["ex-c11-qa"\] = c11Phy4HtmlSolutions;\s*}/;
const newCh11Phy4Code = `const ch11Phy4 = chapterContents["c11-phy-4"];
if (ch11Phy4) {
  ch11Phy4.htmlOverview = c11Phy4HtmlOverview;
  ch11Phy4.htmlExercises = {
    "ex-c11-qa": c11Phy4HtmlSolutions,
  };
  ch11Phy4.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy4.mcqs = c11Phy4Mcqs;
}`;

if (ccCode.match(ch11Phy4Pattern)) {
  ccCode = ccCode.replace(ch11Phy4Pattern, newCh11Phy4Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy4 block in chapterContent.ts');
} else {
  console.log('ch11Phy4 pattern not matched, please check chapterContent.ts');
}
