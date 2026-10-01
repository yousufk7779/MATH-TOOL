const fs = require('fs');
const path = require('path');
const { getExercise2_1 } = require('./build_ch2_ex1');
const { getExercise2_2 } = require('./build_ch2_ex2');
const { getExercise2_3, getMiscellaneousExercise } = require('./build_ch2_ex3');
const { getChapter2Overview, chapter2MCQs } = require('./build_ch2_overview_mcqs');

console.log("Generating Chapter 2 content...");

const c11Math2 = {
  id: "c11-math-2",
  number: 2,
  title: "Relations and Functions",
  isHtmlView: true,
  introduction: "Relations and functions provide the foundational language connecting mathematical inputs to outputs, modelling real-world phenomena across calculus, algebra, and physical sciences.",
  summary: [
    "An ordered pair (a, b) has two components in fixed order where (a, b) = (c, d) ⇔ a = c and b = d.",
    "The Cartesian product A × B is the set of all ordered pairs (a, b) with a ∈ A and b ∈ B; n(A × B) = n(A) · n(B).",
    "A relation R from set A to set B is any subset of the Cartesian product A × B. The total number of relations is 2^(n(A) · n(B)).",
    "The domain of R is the set of all first components; the range is the set of all second components; codomain is the set B.",
    "A relation f from A to B is a function if every element of A has one and only one unique image in B.",
    "Standard real functions include Identity, Constant, Modulus |x|, Signum sgn(x), and Greatest Integer [x].",
    "Algebra of functions defines pointwise addition, subtraction, multiplication, and quotient with domain intersections."
  ],
  definitions: [
    {
      term: "Ordered Pair",
      definition: "A pair of elements written in fixed order (a, b), where order of coordinates matters."
    },
    {
      term: "Cartesian Product",
      definition: "The set of all ordered pairs (a, b) such that a ∈ A and b ∈ B."
    },
    {
      term: "Relation",
      definition: "Any subset of the Cartesian product A × B."
    },
    {
      term: "Function (Mapping)",
      definition: "A relation where every element of the domain has exactly one image in the codomain."
    },
    {
      term: "Domain & Range",
      definition: "Domain is the set of allowable inputs (first coordinates); Range is the set of actual outputs (second coordinates)."
    }
  ],
  formulas: [
    {
      name: "Cartesian Product Cardinality",
      formula: "n(A × B) = n(A) × n(B)"
    },
    {
      name: "Total Relations Formula",
      formula: "Total Relations = 2^(n(A) · n(B))"
    },
    {
      name: "Modulus Function",
      formula: "f(x) = |x| = x (x ≥ 0), −x (x < 0)"
    },
    {
      name: "Signum Function",
      formula: "sgn(x) = 1 (x > 0), 0 (x = 0), −1 (x < 0)"
    },
    {
      name: "Quotient Function Domain",
      formula: "Dom(f / g) = Dom(f) ∩ Dom(g) − {x : g(x) = 0}"
    }
  ],
  exercises: [
    {
      id: "ex2-1",
      name: "Exercise 2.1",
      questions: []
    },
    {
      id: "ex2-2",
      name: "Exercise 2.2",
      questions: []
    },
    {
      id: "ex2-3",
      name: "Exercise 2.3",
      questions: []
    },
    {
      id: "misc",
      name: "Miscellaneous",
      questions: []
    }
  ],
  htmlOverview: getChapter2Overview(),
  htmlExercises: {
    "ex2-1": getExercise2_1(),
    "ex2-2": getExercise2_2(),
    "ex2-3": getExercise2_3(),
    "misc": getMiscellaneousExercise()
  },
  mcqs: chapter2MCQs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math2: ChapterContent = ${JSON.stringify(c11Math2, null, 2)};
`;

const targetPath = path.resolve(__dirname, '../client/data/content/c11-math-2.ts');
fs.writeFileSync(targetPath, fileContent, 'utf-8');

console.log(`Successfully generated Chapter 2 content at: ${targetPath}`);
console.log(`File size: ${(fs.statSync(targetPath).size / 1024).toFixed(2)} KB`);
