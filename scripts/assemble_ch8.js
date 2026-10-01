const fs = require('fs');
const path = require('path');

const { generateOverview, generateMcqs } = require('./build_ch8_overview_mcqs');
const { generateEx81 } = require('./build_ch8_ex1');
const { generateEx82 } = require('./build_ch8_ex2');
const { generateEx83 } = require('./build_ch8_ex3');
const { generateEx84 } = require('./build_ch8_ex4');
const { generateEx8Misc } = require('./build_ch8_misc');

console.log("Generating Chapter 8 content components...");
const overviewHtml = generateOverview();
const ex81Html = generateEx81();
const ex82Html = generateEx82();
const ex83Html = generateEx83();
const ex84Html = generateEx84();
const ex8MiscHtml = generateEx8Misc();
const mcqs = generateMcqs();

const fileContent = `import { ChapterContent } from "../types";

export const c11Math8: ChapterContent = {
  id: "c11-math-8",
  number: 8,
  title: "Sequences and Series",
  isHtmlView: true,
  introduction: "Sequences and Series examine ordered successions of numbers and their summations, exploring linear and geometric progressions, means, inequalities, and special series formulas.",
  summary: [
    "A sequence is an ordered succession of numbers according to a definite rule aₙ = f(n).",
    "Arithmetic Progression (A.P.): a, a + d, a + 2d, ... with general term aₙ = a + (n − 1)d and sum Sₙ = (n/2)[2a + (n − 1)d].",
    "Geometric Progression (G.P.): a, ar, ar², ... with general term aₙ = arⁿ⁻¹ and sum Sₙ = a(rⁿ − 1)/(r − 1) (for |r| ≠ 1).",
    "For |r| < 1, the sum of an infinite geometric progression converges to S_∞ = a / (1 − r).",
    "Arithmetic Mean A.M. = (a + b)/2 and Geometric Mean G.M. = √(ab). For any two positive real numbers, A.M. ≥ G.M.",
    "Sums of special series: ∑ n = n(n + 1)/2, ∑ n² = n(n + 1)(2n + 1)/6, and ∑ n³ = [n(n + 1)/2]²."
  ],
  definitions: [
    {
      term: "Arithmetic Progression (A.P.)",
      definition: "A sequence in which each term after the first differs from its preceding term by a constant value called the common difference d."
    },
    {
      term: "Geometric Progression (G.P.)",
      definition: "A sequence in which each term after the first is obtained by multiplying the preceding term by a fixed non-zero ratio r."
    },
    {
      term: "Arithmetic Mean (A.M.)",
      definition: "For two real numbers a and b, the single number A such that a, A, b form an A.P., given by A = (a + b)/2."
    },
    {
      term: "Geometric Mean (G.M.)",
      definition: "For two positive numbers a and b, the single number G such that a, G, b form a G.P., given by G = √(ab)."
    },
    {
      term: "Infinite Geometric Series",
      definition: "A geometric series with infinitely many terms that converges to S_∞ = a / (1 − r) when the common ratio satisfies |r| < 1."
    }
  ],
  formulas: [
    {
      name: "n-th Term of an A.P.",
      formula: "aₙ = a + (n − 1)d"
    },
    {
      name: "Sum of First n Terms of an A.P.",
      formula: "Sₙ = (n/2)[2a + (n − 1)d] = (n/2)(a + l)"
    },
    {
      name: "n-th Term of a G.P.",
      formula: "aₙ = a × rⁿ⁻¹"
    },
    {
      name: "Sum of First n Terms of a G.P.",
      formula: "Sₙ = a(rⁿ − 1)/(r − 1) = a(1 − rⁿ)/(1 − r)"
    },
    {
      name: "Sum of an Infinite G.P. (|r| < 1)",
      formula: "S_∞ = a / (1 − r)"
    },
    {
      name: "A.M. - G.M. Inequality",
      formula: "A.M. ≥ G.M.  i.e.  (a + b)/2 ≥ √(ab)"
    },
    {
      name: "Sum of First n Natural Numbers",
      formula: "∑ k = n(n + 1)/2"
    },
    {
      name: "Sum of Squares of First n Natural Numbers",
      formula: "∑ k² = n(n + 1)(2n + 1)/6"
    },
    {
      name: "Sum of Cubes of First n Natural Numbers",
      formula: "∑ k³ = [n(n + 1)/2]² = (∑ k)²"
    }
  ],
  exercises: [
    {
      id: "ex8-1",
      name: "Exercise 8.1",
      questions: []
    },
    {
      id: "ex8-2",
      name: "Exercise 8.2",
      questions: []
    },
    {
      id: "ex8-3",
      name: "Exercise 8.3",
      questions: []
    },
    {
      id: "ex8-4",
      name: "Exercise 8.4",
      questions: []
    },
    {
      id: "misc",
      name: "Miscellaneous",
      questions: []
    }
  ],
  htmlOverview: ${JSON.stringify(overviewHtml)},
  htmlExercises: {
    "ex8-1": ${JSON.stringify(ex81Html)},
    "ex8-2": ${JSON.stringify(ex82Html)},
    "ex8-3": ${JSON.stringify(ex83Html)},
    "ex8-4": ${JSON.stringify(ex84Html)},
    "misc": ${JSON.stringify(ex8MiscHtml)}
  },
  mcqs: ${JSON.stringify(mcqs, null, 4)}
};
`;

const targetPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-math-8.ts');
fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log(`Successfully assembled Chapter 8 into: ${targetPath}`);
