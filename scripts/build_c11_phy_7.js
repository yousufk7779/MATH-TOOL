// scripts/build_c11_phy_7.js
const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_7_overview');
const { solutionsHtml: rawSolutionsHtml } = require('./c11_phy_7_solutions');
const { mcqs: rawMcqs } = require('./c11_phy_7_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 7 Gold Standard Content with 0 Carets & 0 Diagrams...');

let overviewHtml = sanitizeMath(buildOverview());
let solutionsHtml = sanitizeMath(rawSolutionsHtml);
let mcqs = rawMcqs.map(m => ({
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

const fullContent = `// Class 11 Physics Unit VII: Properties of Bulk Matter (09 Marks)
// Official JKBOSE / CBSE / NCERT Syllabus Alignment
// Covering: Mechanical Properties of Solids, Mechanical Properties of Fluids, Thermal Properties of Matter
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy7HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy7HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy7Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-7.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy7Mcqs
if (ccCode.includes('import { c11Phy7HtmlOverview, c11Phy7HtmlSolutions } from "./content/c11-phy-7";')) {
  ccCode = ccCode.replace(
    'import { c11Phy7HtmlOverview, c11Phy7HtmlSolutions } from "./content/c11-phy-7";',
    'import { c11Phy7HtmlOverview, c11Phy7HtmlSolutions, c11Phy7Mcqs } from "./content/c11-phy-7";'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy7 assignment has mcqs and clean structure
const ch11Phy7Pattern = /const ch11Phy7 = chapterContents\["c11-phy-7"\];[\s\S]*?ch11Phy7\.htmlExercises\["ex-c11-qa"\] = c11Phy7HtmlSolutions;\s*}/;
const newCh11Phy7Code = `const ch11Phy7 = chapterContents["c11-phy-7"];
if (ch11Phy7) {
  ch11Phy7.htmlOverview = c11Phy7HtmlOverview;
  ch11Phy7.htmlExercises = {
    "ex-c11-qa": c11Phy7HtmlSolutions,
  };
  ch11Phy7.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy7.mcqs = c11Phy7Mcqs;
}`;

if (ccCode.match(ch11Phy7Pattern)) {
  ccCode = ccCode.replace(ch11Phy7Pattern, newCh11Phy7Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy7 block in chapterContent.ts');
} else {
  console.log('ch11Phy7 pattern not matched, please check chapterContent.ts');
}
