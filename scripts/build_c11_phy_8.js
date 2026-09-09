// scripts/build_c11_phy_8.js
const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_8_overview');
const { solutionsHtml: rawSolutionsHtml } = require('./c11_phy_8_solutions');
const { mcqs: rawMcqs } = require('./c11_phy_8_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 8 Gold Standard Content with 0 Carets & 0 Diagrams...');

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

const fullContent = `// Class 11 Physics Unit VIII: Thermodynamics (06 Marks)
// Official JKBOSE / CBSE / NCERT Syllabus Alignment
// Covering: Thermal Equilibrium, Zeroth Law, Heat, Work, Internal Energy, First Law, Second Law, Isothermal, Adiabatic, Reversible, Irreversible, and Cyclic Processes
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy8HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy8HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy8Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-8.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy8Mcqs
if (ccCode.includes('import { c11Phy8HtmlOverview, c11Phy8HtmlSolutions } from "./content/c11-phy-8";')) {
  ccCode = ccCode.replace(
    'import { c11Phy8HtmlOverview, c11Phy8HtmlSolutions } from "./content/c11-phy-8";',
    'import { c11Phy8HtmlOverview, c11Phy8HtmlSolutions, c11Phy8Mcqs } from "./content/c11-phy-8";'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy8 assignment has mcqs and clean structure
const ch11Phy8Pattern = /const ch11Phy8 = chapterContents\["c11-phy-8"\];[\s\S]*?ch11Phy8\.htmlExercises\["ex-c11-qa"\] = c11Phy8HtmlSolutions;\s*}/;
const newCh11Phy8Code = `const ch11Phy8 = chapterContents["c11-phy-8"];
if (ch11Phy8) {
  ch11Phy8.htmlOverview = c11Phy8HtmlOverview;
  ch11Phy8.htmlExercises = {
    "ex-c11-qa": c11Phy8HtmlSolutions,
  };
  ch11Phy8.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy8.mcqs = c11Phy8Mcqs;
}`;

if (ccCode.match(ch11Phy8Pattern)) {
  ccCode = ccCode.replace(ch11Phy8Pattern, newCh11Phy8Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy8 block in chapterContent.ts');
} else {
  console.log('ch11Phy8 pattern not matched, please check chapterContent.ts');
}
