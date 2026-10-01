const fs = require('fs');
const path = require('path');
const { getExercise4_1 } = require('./build_ch4_ex1');
const { getExercise4_2 } = require('./build_ch4_ex2');
const { getExercise4_3 } = require('./build_ch4_ex3');
const { getMiscellaneousExercise } = require('./build_ch4_misc');
const { getChapter4Overview, chapter4MCQs } = require('./build_ch4_overview_mcqs');

console.log("Generating Chapter 4 content...");

const c11Math4 = {
  id: "c11-math-4",
  number: 4,
  title: "Complex Numbers and Quadratic Equations",
  isHtmlView: true,
  introduction: "Complex numbers expand the real number continuum by incorporating imaginary roots, enabling algebraic completeness where every non-zero polynomial equation possesses solutions.",
  summary: [
    "The imaginary unit i = √(-1) satisfies i² = −1, i³ = −i, i⁴ = 1, repeating cyclically with period 4.",
    "A complex number z = a + ib has real part Re(z) = a and imaginary part Im(z) = b.",
    "The complex conjugate z̄ = a − ib represents a geometric reflection across the real axis in the Argand plane.",
    "The modulus |z| = √(a² + b²) represents distance from the origin; z · z̄ = |z|².",
    "The multiplicative inverse for non-zero z is z⁻¹ = z̄ / |z|².",
    "Polar representation is given by z = r(cos θ + i sin θ), where r = |z| and principal argument −π < θ ≤ π.",
    "Quadratic equations ax² + bx + c = 0 with negative discriminant D < 0 yield complex conjugate roots."
  ],
  definitions: [
    {
      term: "Imaginary Unit (i)",
      definition: "The fundamental unit satisfying i² = −1, introduced to define square roots of negative numbers."
    },
    {
      term: "Complex Number",
      definition: "An algebraic expression z = a + ib where a, b are real numbers and i = √(-1)."
    },
    {
      term: "Complex Conjugate",
      definition: "For z = a + ib, its conjugate is z̄ = a − ib, satisfying z · z̄ = |z|²."
    },
    {
      term: "Modulus",
      definition: "The non-negative distance of point (a, b) from origin in Argand plane: |z| = √(a² + b²)."
    },
    {
      term: "Principal Argument",
      definition: "The unique angle θ subtended with the positive real axis in the interval −π < θ ≤ π."
    }
  ],
  formulas: [
    {
      name: "Powers of Iota",
      formula: "i⁴ⁿ = 1, i⁴ⁿ⁺¹ = i, i⁴ⁿ⁺² = −1, i⁴ⁿ⁺³ = −i"
    },
    {
      name: "Modulus Formula",
      formula: "|z| = √(a² + b²)"
    },
    {
      name: "Multiplicative Inverse",
      formula: "z⁻¹ = z̄ / |z|² = (a − ib) / (a² + b²)"
    },
    {
      name: "Polar Form",
      formula: "z = r(cos θ + i sin θ), where r = |z|"
    },
    {
      name: "Complex Quadratic Roots",
      formula: "x = (−b ± i√(4ac − b²)) / (2a) for D = b² − 4ac < 0"
    }
  ],
  exercises: [
    {
      id: "ex4-1",
      name: "Exercise 4.1",
      questions: []
    },
    {
      id: "ex4-2",
      name: "Exercise 4.2",
      questions: []
    },
    {
      id: "ex4-3",
      name: "Exercise 4.3",
      questions: []
    },
    {
      id: "misc",
      name: "Miscellaneous",
      questions: []
    }
  ],
  htmlOverview: getChapter4Overview(),
  htmlExercises: {
    "ex4-1": getExercise4_1(),
    "ex4-2": getExercise4_2(),
    "ex4-3": getExercise4_3(),
    "misc": getMiscellaneousExercise()
  },
  mcqs: chapter4MCQs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math4: ChapterContent = ${JSON.stringify(c11Math4, null, 2)};
`;

const targetPath = path.resolve(__dirname, '../client/data/content/c11-math-4.ts');
fs.writeFileSync(targetPath, fileContent, 'utf-8');

console.log(`Successfully generated Chapter 4 content at: ${targetPath}`);
console.log(`File size: ${(fs.statSync(targetPath).size / 1024).toFixed(2)} KB`);
