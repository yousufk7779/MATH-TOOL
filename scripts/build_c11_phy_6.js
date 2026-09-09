const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_6_overview');
const { buildSolutions } = require('./c11_phy_6_solutions');
const { c11Phy6Mcqs } = require('./c11_phy_6_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 6 Gold Standard Content with 0 Carets & 0 Diagrams...');

let overviewHtml = sanitizeMath(buildOverview());
let solutionsHtml = sanitizeMath(buildSolutions());
let mcqs = c11Phy6Mcqs.map(m => ({
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

const fullContent = `// Class 11 Physics Unit VI: Gravitation (06 Marks)
// Official JKBOSE / CBSE / NCERT Syllabus Alignment
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy6HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy6HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy6Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-6.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy6Mcqs
if (ccCode.includes('import { c11Phy6HtmlOverview, c11Phy6HtmlSolutions } from "./content/c11-phy-6";')) {
  ccCode = ccCode.replace(
    'import { c11Phy6HtmlOverview, c11Phy6HtmlSolutions } from "./content/c11-phy-6";',
    'import { c11Phy6HtmlOverview, c11Phy6HtmlSolutions, c11Phy6Mcqs } from "./content/c11-phy-6";'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy6 assignment has mcqs and clean structure
const ch11Phy6Pattern = /const ch11Phy6 = chapterContents\["c11-phy-6"\];[\s\S]*?ch11Phy6\.htmlExercises\["ex-c11-qa"\] = c11Phy6HtmlSolutions;\s*}/;
const newCh11Phy6Code = `const ch11Phy6 = chapterContents["c11-phy-6"];
if (ch11Phy6) {
  ch11Phy6.htmlOverview = c11Phy6HtmlOverview;
  ch11Phy6.htmlExercises = {
    "ex-c11-qa": c11Phy6HtmlSolutions,
  };
  ch11Phy6.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy6.mcqs = c11Phy6Mcqs;
}`;

if (ccCode.match(ch11Phy6Pattern)) {
  ccCode = ccCode.replace(ch11Phy6Pattern, newCh11Phy6Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy6 block in chapterContent.ts');
} else {
  console.log('ch11Phy6 pattern not matched, please check chapterContent.ts');
}
