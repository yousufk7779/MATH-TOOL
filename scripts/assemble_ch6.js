const fs = require('fs');
const path = require('path');
const { getExercise6_1 } = require('./build_ch6_ex1');
const { getExercise6_2 } = require('./build_ch6_ex2');
const { getExercise6_3 } = require('./build_ch6_ex3');
const { getExercise6_4 } = require('./build_ch6_ex4');
const { getMiscellaneousExercise } = require('./build_ch6_misc');
const { getChapter6Overview, chapter6MCQs } = require('./build_ch6_overview_mcqs');

console.log("Generating Chapter 6 Permutations and Combinations content...");

const c11Math6 = {
  id: "c11-math-6",
  number: 6,
  title: "Permutations and Combinations",
  isHtmlView: true,
  introduction: "Permutations and Combinations provide the rigorous mathematical framework for enumeration, combinatorial optimization, discrete probability distributions, and algebraic architectures.",
  summary: [
    "Fundamental Principle of Multiplication: If an event can occur in m ways and a second in n ways, the total successive occurrences = m × n.",
    "Fundamental Principle of Addition: If two mutually exclusive events can occur in m and n ways respectively, either can occur in m + n ways.",
    "Factorial notation: n! = n × (n − 1) × ... × 2 × 1 with 0! = 1 by convention.",
    "Permutation: An ordered arrangement of objects where sequence is paramount: ⁿPᵣ = n! / (n − r)!.",
    "Permutation with identical items: Number of arrangements of n objects with p₁, p₂, ... repetitions = n! / (p₁! p₂! ...).",
    "Combination: An unordered selection where sequence does not matter: ⁿCᵣ = n! / [r! (n − r)!].",
    "Complementary theorem: ⁿCᵣ = ⁿCₙ₋ᵣ.",
    "Pascal's Identity: ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ.",
    "Geometric applications: Chords = ⁿC₂, Diagonals in an n-gon = ⁿC₂ − n = n(n − 3)/2, Triangles = ⁿC₃."
  ],
  definitions: [
    {
      term: "Fundamental Counting Principle",
      definition: "If an independent operation can be performed in m ways and subsequent operation in n ways, both in succession can be performed in m × n ways."
    },
    {
      term: "Permutation",
      definition: "An arrangement in a definite order of a number of objects taken some or all at a time."
    },
    {
      term: "Combination",
      definition: "A selection of a number of objects taken some or all at a time, where the order of selection is ignored."
    },
    {
      term: "Factorial",
      definition: "For a positive integer n, n! is the continued product of the first n positive integers."
    },
    {
      term: "Restricted Permutation",
      definition: "Arrangements subject to specific positional constraints (e.g. elements together, separate, or in fixed positions)."
    }
  ],
  formulas: [
    {
      name: "Permutation Formula",
      formula: "ⁿPᵣ = n! / (n − r)! (0 ≤ r ≤ n)"
    },
    {
      name: "Combination Formula",
      formula: "ⁿCᵣ = n! / (r! (n − r)!) (0 ≤ r ≤ n)"
    },
    {
      name: "Permutation-Combination Link",
      formula: "ⁿPᵣ = r! × ⁿCᵣ"
    },
    {
      name: "Pascal's Identity",
      formula: "ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ"
    },
    {
      name: "Permutations of Non-Distinct Objects",
      formula: "P = n! / (p₁! p₂! ... pₖ!)"
    },
    {
      name: "Polygon Diagonals",
      formula: "Number of diagonals = ⁿC₂ − n = n(n − 3)/2"
    }
  ],
  exercises: [
    {
      id: "ex6-1",
      name: "Exercise 6.1",
      questions: []
    },
    {
      id: "ex6-2",
      name: "Exercise 6.2",
      questions: []
    },
    {
      id: "ex6-3",
      name: "Exercise 6.3",
      questions: []
    },
    {
      id: "ex6-4",
      name: "Exercise 6.4",
      questions: []
    },
    {
      id: "misc",
      name: "Miscellaneous",
      questions: []
    }
  ],
  htmlOverview: getChapter6Overview(),
  htmlExercises: {
    "ex6-1": getExercise6_1(),
    "ex6-2": getExercise6_2(),
    "ex6-3": getExercise6_3(),
    "ex6-4": getExercise6_4(),
    "misc": getMiscellaneousExercise()
  },
  mcqs: chapter6MCQs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math6: ChapterContent = ${JSON.stringify(c11Math6, null, 2)};
`;

const targetPath = path.resolve(__dirname, '../client/data/content/c11-math-6.ts');
fs.writeFileSync(targetPath, fileContent, 'utf-8');

console.log(`Successfully generated Chapter 6 at: ${targetPath}`);
console.log(`Overview size: ${c11Math6.htmlOverview.length} chars`);
console.log(`Ex 6.1 size: ${c11Math6.htmlExercises["ex6-1"].length} chars`);
console.log(`Ex 6.2 size: ${c11Math6.htmlExercises["ex6-2"].length} chars`);
console.log(`Ex 6.3 size: ${c11Math6.htmlExercises["ex6-3"].length} chars`);
console.log(`Ex 6.4 size: ${c11Math6.htmlExercises["ex6-4"].length} chars`);
console.log(`Misc size: ${c11Math6.htmlExercises["misc"].length} chars`);
console.log(`MCQs count: ${c11Math6.mcqs.length}`);
