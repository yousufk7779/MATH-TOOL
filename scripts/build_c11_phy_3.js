const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_3_overview');
const { buildSolutions } = require('./c11_phy_3_solutions');
const { getMcqs } = require('./c11_phy_3_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 3 Gold Standard Content with 0 Carets & 0 Diagrams...');

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

const fullContent = `// Class 11 Physics Unit III: Laws of Motion (07 Marks)
// Official JKBOSE / CBSE / NCERT Syllabus Alignment
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy3HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy3HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy3Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-3.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy3Mcqs
if (ccCode.includes('c11Phy3HtmlOverview, c11Phy3HtmlSolutions } from "./content/c11-phy-3"')) {
  ccCode = ccCode.replace(
    'c11Phy3HtmlOverview, c11Phy3HtmlSolutions } from "./content/c11-phy-3"',
    'c11Phy3HtmlOverview, c11Phy3HtmlSolutions, c11Phy3Mcqs } from "./content/c11-phy-3"'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy3 assignment has mcqs and clean structure
const ch11Phy3Pattern = /const ch11Phy3 = chapterContents\["c11-phy-3"\];[\s\S]*?ch11Phy3\.htmlExercises\["ex-c11-qa"\] = c11Phy3HtmlSolutions;\s*}/;
const newCh11Phy3Code = `const ch11Phy3 = chapterContents["c11-phy-3"];
if (ch11Phy3) {
  ch11Phy3.htmlOverview = c11Phy3HtmlOverview;
  ch11Phy3.htmlExercises = {
    "ex-c11-qa": c11Phy3HtmlSolutions,
  };
  ch11Phy3.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy3.mcqs = c11Phy3Mcqs;
}`;

if (ccCode.match(ch11Phy3Pattern)) {
  ccCode = ccCode.replace(ch11Phy3Pattern, newCh11Phy3Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy3 block in chapterContent.ts');
} else {
  console.log('ch11Phy3 pattern not matched, please verify manual replacement');
}
