// scripts/build_c11_phy_9.js
const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_9_overview');
const { solutionsHtml: rawSolutionsHtml } = require('./c11_phy_9_solutions');
const { c11Phy9Mcqs: rawMcqs } = require('./c11_phy_9_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 9 Gold Standard Content with 0 Carets & 0 Diagrams...');

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

const fullContent = `// Class 11 Physics Unit IX: Behaviour of Perfect Gases and Kinetic Theory of Gases (06 Marks)
// Official JKBOSE / CBSE / NCERT Syllabus Alignment
// Covering: Equation of state of a perfect gas, work done in compressing a gas. Kinetic theory of gases - assumptions, concept of pressure, Expression for pressure exerted by a gas. Kinetic interpretation of temperature; rms speed of gas molecules; degrees of freedom, law of equi-partition of energy (statement only) and application to specific heat capacities of gases; concept of mean free path, Avogadro's number.
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy9HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy9HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy9Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-9.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy9Mcqs
if (ccCode.includes('import { c11Phy9HtmlOverview, c11Phy9HtmlSolutions } from "./content/c11-phy-9";')) {
  ccCode = ccCode.replace(
    'import { c11Phy9HtmlOverview, c11Phy9HtmlSolutions } from "./content/c11-phy-9";',
    'import { c11Phy9HtmlOverview, c11Phy9HtmlSolutions, c11Phy9Mcqs } from "./content/c11-phy-9";'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy9 assignment has mcqs and clean structure
const ch11Phy9Pattern = /const ch11Phy9 = chapterContents\["c11-phy-9"\];[\s\S]*?ch11Phy9\.htmlExercises\["ex-c11-qa"\] = c11Phy9HtmlSolutions;\s*}/;
const newCh11Phy9Code = `const ch11Phy9 = chapterContents["c11-phy-9"];
if (ch11Phy9) {
  ch11Phy9.htmlOverview = c11Phy9HtmlOverview;
  ch11Phy9.htmlExercises = {
    "ex-c11-qa": c11Phy9HtmlSolutions,
  };
  ch11Phy9.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy9.mcqs = c11Phy9Mcqs;
}`;

if (ccCode.match(ch11Phy9Pattern)) {
  ccCode = ccCode.replace(ch11Phy9Pattern, newCh11Phy9Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy9 block in chapterContent.ts');
} else {
  console.log('ch11Phy9 pattern not matched, please check chapterContent.ts');
}
