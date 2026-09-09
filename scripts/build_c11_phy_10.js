// scripts/build_c11_phy_10.js
const fs = require('fs');
const path = require('path');

const { buildOverview } = require('./c11_phy_10_overview');
const { solutionsHtml: rawSolutionsHtml } = require('./c11_phy_10_solutions');
const { c11Phy10Mcqs: rawMcqs } = require('./c11_phy_10_mcqs');
const { sanitizeMath } = require('./sanitize_math');

console.log('Building Class 11 Physics Chapter 10 Gold Standard Content with 0 Carets & 0 Diagrams...');

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

const fullContent = `// Class 11 Physics Unit X: Oscillations and Waves (10 Marks)
// Official JKBOSE / CBSE / NCERT Syllabus Alignment
// Covering: Periodic motion, time period, frequency, displacement as a function of time, periodic functions and their applications. Simple harmonic motion (S.H.M) and its equations of motion; phase; oscillations of a loaded spring- restoring force and force constant; energy in S.H.M. Kinetic and potential energies; simple pendulum derivation of expression for its time period.
// Waves: Wave motion: Transverse and longitudinal waves, speed of travelling wave, displacement relation for a progressive wave, principle of superposition of waves, reflection of waves, standing waves in strings and organ pipes, fundamental mode and harmonics, Beats.
// Gold Standard Reference Textbook & 3-Tab Architecture (Pradeep's / S.L. Arora Standard)

export const c11Phy10HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy10HtmlSolutions = ${JSON.stringify(solutionsHtml)};

export const c11Phy10Mcqs = ${mcqsCode};
`;

const targetFile = path.join(__dirname, '../client/data/content/c11-phy-10.ts');
fs.writeFileSync(targetFile, fullContent, 'utf-8');
console.log(`Successfully generated ${targetFile} (${fullContent.length} bytes)!`);

// Now update client/data/chapterContent.ts
const chapterContentFile = path.join(__dirname, '../client/data/chapterContent.ts');
let ccCode = fs.readFileSync(chapterContentFile, 'utf-8');

// 1. Ensure import includes c11Phy10Mcqs
if (ccCode.includes('import { c11Phy10HtmlOverview, c11Phy10HtmlSolutions } from "./content/c11-phy-10";')) {
  ccCode = ccCode.replace(
    'import { c11Phy10HtmlOverview, c11Phy10HtmlSolutions } from "./content/c11-phy-10";',
    'import { c11Phy10HtmlOverview, c11Phy10HtmlSolutions, c11Phy10Mcqs } from "./content/c11-phy-10";'
  );
  console.log('Updated import in chapterContent.ts');
}

// 2. Ensure ch11Phy10 assignment has mcqs and clean structure
const ch11Phy10Pattern = /const ch11Phy10 = chapterContents\["c11-phy-10"\];[\s\S]*?ch11Phy10\.htmlExercises\["ex-c11-qa"\] = c11Phy10HtmlSolutions;\s*}/;
const newCh11Phy10Code = `const ch11Phy10 = chapterContents["c11-phy-10"];
if (ch11Phy10) {
  ch11Phy10.htmlOverview = c11Phy10HtmlOverview;
  ch11Phy10.htmlExercises = {
    "ex-c11-qa": c11Phy10HtmlSolutions,
  };
  ch11Phy10.exercises = [
    {
      id: "ex-c11-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch11Phy10.mcqs = c11Phy10Mcqs;
}`;

if (ccCode.match(ch11Phy10Pattern)) {
  ccCode = ccCode.replace(ch11Phy10Pattern, newCh11Phy10Code);
  fs.writeFileSync(chapterContentFile, ccCode, 'utf-8');
  console.log('Updated ch11Phy10 block in chapterContent.ts');
} else {
  console.log('ch11Phy10 pattern not matched, please check chapterContent.ts');
}
