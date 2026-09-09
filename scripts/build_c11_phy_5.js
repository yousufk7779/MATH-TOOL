const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_5_overview');
const { buildSolutions } = require('./c11_phy_5_solutions');
const { c11Phy5Mcqs } = require('./c11_phy_5_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 5 Gold Standard Content with 0 Carets & 0 Diagrams...');

let overviewHtml = sanitizeMath(buildOverview());
let solutionsHtml = sanitizeMath(buildSolutions());
let mcqs = c11Phy5Mcqs.map(m => ({
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

const fullContent = `// Class 11 Physics Unit V: Motion of System of Particles and Rigid Body (06 Marks)
// Official JKBOSE / CBSE / NCERT Syllabus Alignment
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy5HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy5HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy5Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-5.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy5Mcqs
if (ccCode.includes('import { c11Phy5HtmlOverview, c11Phy5HtmlSolutions } from "./content/c11-phy-5";')) {
  ccCode = ccCode.replace(
    'import { c11Phy5HtmlOverview, c11Phy5HtmlSolutions } from "./content/c11-phy-5";',
    'import { c11Phy5HtmlOverview, c11Phy5HtmlSolutions, c11Phy5Mcqs } from "./content/c11-phy-5";'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy5 assignment has mcqs and clean structure
const ch11Phy5Pattern = /const ch11Phy5 = chapterContents\["c11-phy-5"\];[\s\S]*?ch11Phy5\.htmlExercises\["ex-c11-qa"\] = c11Phy5HtmlSolutions;\s*}/;
const newCh11Phy5Code = `const ch11Phy5 = chapterContents["c11-phy-5"];
if (ch11Phy5) {
  ch11Phy5.htmlOverview = c11Phy5HtmlOverview;
  ch11Phy5.htmlExercises = {
    "ex-c11-qa": c11Phy5HtmlSolutions,
  };
  ch11Phy5.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy5.mcqs = c11Phy5Mcqs;
}`;

if (ccCode.match(ch11Phy5Pattern)) {
  ccCode = ccCode.replace(ch11Phy5Pattern, newCh11Phy5Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy5 block in chapterContent.ts');
} else {
  console.log('ch11Phy5 pattern not matched, please check chapterContent.ts');
}
