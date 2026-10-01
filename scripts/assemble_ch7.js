const fs = require('fs');
const path = require('path');
const { getExercise7_1 } = require('./build_ch7_ex1');
const { getExercise7_2 } = require('./build_ch7_ex2');
const { getMiscellaneousExercise } = require('./build_ch7_misc');
const { getChapter7Overview, chapter7MCQs } = require('./build_ch7_overview_mcqs');

console.log("Generating Chapter 7 Binomial Theorem content...");

const c11Math7 = {
  id: "c11-math-7",
  number: 7,
  title: "Binomial Theorem",
  isHtmlView: true,
  introduction: "The Binomial Theorem establishes the algebraic foundation for expanding arbitrary positive integer powers of a binomial expression, underpinning polynomial algebra, series approximations, and combinatorial proofs.",
  summary: [
    "Binomial expansion: (a + b)ⁿ = ⁿC₀ aⁿ + ⁿC₁ aⁿ⁻¹ b + ⁿC₂ aⁿ⁻² b² + ... + ⁿCₙ bⁿ.",
    "Total terms in (a + b)ⁿ is exactly (n + 1).",
    "General term is Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ.",
    "If n is even, there is one middle term: T₍ₙ/₂ ₊ ₁₎. If n is odd, there are two middle terms: T₍₍ₙ₊₁₎/₂₎ and T₍₍ₙ₊₃₎/₂₎.",
    "Coefficients equidistant from beginning and end are equal: ⁿCᵣ = ⁿCₙ₋ᵣ.",
    "Sum of all binomial coefficients: ⁿC₀ + ⁿC₁ + ... + ⁿCₙ = 2ⁿ.",
    "Alternating sum: ⁿC₀ − ⁿC₁ + ⁿC₂ − ... + (−1)ⁿ ⁿCₙ = 0.",
    "The k-th term from the end is the (n − k + 2)-th term from the beginning."
  ],
  definitions: [
    {
      term: "Binomial Theorem",
      definition: "An algebraic identity expressing any positive integer power of a two-term sum (a + b)ⁿ as a finite sum of polynomial terms."
    },
    {
      term: "Binomial Coefficients",
      definition: "The combinatorial factors ⁿCᵣ occurring as coefficients in the binomial expansion."
    },
    {
      term: "General Term",
      definition: "The (r + 1)-th term denoted by Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ."
    },
    {
      term: "Middle Term",
      definition: "The central term(s) possessing the maximum binomial coefficient in the expansion."
    },
    {
      term: "Independent Term",
      definition: "The constant term in the expansion where the exponent of the variable x equals zero."
    }
  ],
  formulas: [
    {
      name: "Binomial Expansion",
      formula: "(a + b)ⁿ = ∑ᵣ₌₀ⁿ ⁿCᵣ aⁿ⁻ʳ bʳ"
    },
    {
      name: "General Term",
      formula: "Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ"
    },
    {
      name: "Middle Term (Even n)",
      formula: "T₍ₙ/₂ ₊ ₁₎"
    },
    {
      name: "Middle Terms (Odd n)",
      formula: "T₍₍ₙ₊₁₎/₂₎ and T₍₍ₙ₊₃₎/₂₎"
    },
    {
      name: "Sum of Coefficients",
      formula: "∑ᵣ₌₀ⁿ ⁿCᵣ = 2ⁿ"
    }
  ],
  exercises: [
    {
      id: "ex7-1",
      name: "Exercise 7.1",
      questions: []
    },
    {
      id: "ex7-2",
      name: "Exercise 7.2",
      questions: []
    },
    {
      id: "misc",
      name: "Miscellaneous",
      questions: []
    }
  ],
  htmlOverview: getChapter7Overview(),
  htmlExercises: {
    "ex7-1": getExercise7_1(),
    "ex7-2": getExercise7_2(),
    "misc": getMiscellaneousExercise()
  },
  mcqs: chapter7MCQs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math7: ChapterContent = ${JSON.stringify(c11Math7, null, 2)};
`;

const targetPath = path.resolve(__dirname, '../client/data/content/c11-math-7.ts');
fs.writeFileSync(targetPath, fileContent, 'utf-8');

console.log(`Successfully generated Chapter 7 at: ${targetPath}`);
console.log(`Overview size: ${c11Math7.htmlOverview.length} chars`);
console.log(`Ex 7.1 size: ${c11Math7.htmlExercises["ex7-1"].length} chars`);
console.log(`Ex 7.2 size: ${c11Math7.htmlExercises["ex7-2"].length} chars`);
console.log(`Misc size: ${c11Math7.htmlExercises["misc"].length} chars`);
console.log(`MCQs count: ${c11Math7.mcqs.length}`);
