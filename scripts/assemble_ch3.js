const fs = require('fs');
const path = require('path');
const { getExercise3_1 } = require('./build_ch3_ex1');
const { getExercise3_2 } = require('./build_ch3_ex2');
const { getExercise3_3 } = require('./build_ch3_ex3');
const { getExercise3_4 } = require('./build_ch3_ex4');
const { getMiscellaneousExercise } = require('./build_ch3_misc');
const { getChapter3Overview, chapter3MCQs } = require('./build_ch3_overview_mcqs');

console.log("Generating Chapter 3 content...");

const c11Math3 = {
  id: "c11-math-3",
  number: 3,
  title: "Trigonometric Functions",
  isHtmlView: true,
  introduction: "Trigonometry extends geometric angle measurements into real periodic functions, driving oscillations, Fourier analysis, geometry, and modern physics.",
  summary: [
    "Angles are measured in degrees and radians, connected by π radians = 180°.",
    "Arc length on a circle of radius r subtending central angle θ radians is given by l = rθ.",
    "On the unit circle x² + y² = 1, cos θ = x and sin θ = y, giving sin² θ + cos² θ = 1.",
    "ASTC rule governs the signs: All positive in Q I; Sin/Cosec in Q II; Tan/Cot in Q III; Cos/Sec in Q IV.",
    "Compound angle identities determine functions of sums and differences (A ± B).",
    "Sum-to-product (CD formulas) and product-to-sum identities enable analytical factorization.",
    "Trigonometric equations possess principal solutions in [0, 2π) and integer-parameterised general solutions."
  ],
  definitions: [
    {
      term: "Radian Measure",
      definition: "The angle subtended at the centre of a circle of radius r by an arc of length r: θ = l / r."
    },
    {
      term: "Unit Circle",
      definition: "A circle of radius 1 centered at the origin, defining circular functions cos θ = x and sin θ = y."
    },
    {
      term: "ASTC Quadrant Rule",
      definition: "Mnemonic rule indicating positive trigonometric ratios across the four Cartesian quadrants."
    },
    {
      term: "Principal Solutions",
      definition: "Solutions of a trigonometric equation in the domain 0 ≤ x < 2π."
    },
    {
      term: "General Solution",
      definition: "An analytical expression containing integer parameter n that gives all solutions of a trigonometric equation."
    }
  ],
  formulas: [
    {
      name: "Degree-Radian Conversion",
      formula: "180° = π rad ⇒ 1° = π/180 rad; 1 rad = 180°/π"
    },
    {
      name: "Arc Length Formula",
      formula: "l = rθ (θ in radians)"
    },
    {
      name: "Pythagorean Identities",
      formula: "sin² x + cos² x = 1, 1 + tan² x = sec² x, 1 + cot² x = csc² x"
    },
    {
      name: "Sine Addition Identity",
      formula: "sin(A ± B) = sin A cos B ± cos A sin B"
    },
    {
      name: "Cosine Addition Identity",
      formula: "cos(A ± B) = cos A cos B ∓ sin A sin B"
    },
    {
      name: "Tangent Addition Identity",
      formula: "tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)"
    },
    {
      name: "Sine Sum-to-Product",
      formula: "sin C + sin D = 2 sin((C + D)/2) cos((C − D)/2)"
    },
    {
      name: "Cosine Difference-to-Product",
      formula: "cos C − cos D = −2 sin((C + D)/2) sin((C − D)/2)"
    },
    {
      name: "General Solution for Sine",
      formula: "sin θ = sin α ⇒ θ = nπ + (−1)ⁿ α, n ∈ ℤ"
    },
    {
      name: "General Solution for Cosine",
      formula: "cos θ = cos α ⇒ θ = 2nπ ± α, n ∈ ℤ"
    },
    {
      name: "General Solution for Tangent",
      formula: "tan θ = tan α ⇒ θ = nπ + α, n ∈ ℤ"
    }
  ],
  exercises: [
    {
      id: "ex3-1",
      name: "Exercise 3.1",
      questions: []
    },
    {
      id: "ex3-2",
      name: "Exercise 3.2",
      questions: []
    },
    {
      id: "ex3-3",
      name: "Exercise 3.3",
      questions: []
    },
    {
      id: "ex3-4",
      name: "Exercise 3.4",
      questions: []
    },
    {
      id: "misc",
      name: "Miscellaneous",
      questions: []
    }
  ],
  htmlOverview: getChapter3Overview(),
  htmlExercises: {
    "ex3-1": getExercise3_1(),
    "ex3-2": getExercise3_2(),
    "ex3-3": getExercise3_3(),
    "ex3-4": getExercise3_4(),
    "misc": getMiscellaneousExercise()
  },
  mcqs: chapter3MCQs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math3: ChapterContent = ${JSON.stringify(c11Math3, null, 2)};
`;

const targetPath = path.resolve(__dirname, '../client/data/content/c11-math-3.ts');
fs.writeFileSync(targetPath, fileContent, 'utf-8');

console.log(`Successfully generated Chapter 3 content at: ${targetPath}`);
console.log(`File size: ${(fs.statSync(targetPath).size / 1024).toFixed(2)} KB`);
