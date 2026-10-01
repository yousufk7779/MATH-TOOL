const fs = require('fs');
const path = require('path');
const { getExercise5_1 } = require('./build_ch5_ex1');
const { getExercise5_2 } = require('./build_ch5_ex2');
const { getExercise5_3 } = require('./build_ch5_ex3');
const { getMiscellaneousExercise } = require('./build_ch5_misc');
const { getChapter5Overview, chapter5MCQs } = require('./build_ch5_overview_mcqs');

console.log("Generating Chapter 5 Linear Inequalities content...");

const c11Math5 = {
  id: "c11-math-5",
  number: 5,
  title: "Linear Inequalities",
  isHtmlView: true,
  introduction: "Linear Inequalities establish mathematical relationships of order and constraint, playing a pivotal role in linear programming, optimization theory, and real-world resource allocation.",
  summary: [
    "An algebraic relation connecting two expressions with <, >, ≤, or ≥ is called an inequality.",
    "Equal real numbers may be added to or subtracted from both sides without altering the inequality sign.",
    "Multiplying or dividing both sides by a positive real number preserves the inequality direction.",
    "Multiplying or dividing both sides by a negative real number strictly reverses the inequality symbol.",
    "On a 1D real number line, open circles denote excluded endpoints (<, >) while solid circles denote included endpoints (≤, ≥).",
    "In 2D Cartesian plane, a linear inequality divides the plane into two half-planes; strict inequalities use dashed boundary lines, whereas slack inequalities use solid boundary lines.",
    "The test point (0, 0) instantly determines whether the feasible region contains the origin or lies away from it.",
    "The solution of a system of linear inequalities is the common overlapping feasible region satisfying all constraints simultaneously."
  ],
  definitions: [
    {
      term: "Linear Inequality in One Variable",
      definition: "An inequality of the form ax + b < 0, ax + b ≤ 0, ax + b > 0, or ax + b ≥ 0 with a ≠ 0."
    },
    {
      term: "Linear Inequality in Two Variables",
      definition: "An inequality of the form ax + by < c, ax + by ≤ c, ax + by > c, or ax + by ≥ c with not both a and b zero."
    },
    {
      term: "Strict vs Slack Inequality",
      definition: "Strict inequalities use < or > (excluding boundary); slack inequalities use ≤ or ≥ (including boundary)."
    },
    {
      term: "Half-Plane",
      definition: "One of the two regions into which a straight line divides the Cartesian plane."
    },
    {
      term: "Feasible Solution Region",
      definition: "The intersection of all individual half-planes that satisfy a system of linear inequalities simultaneously."
    }
  ],
  formulas: [
    {
      name: "Sign Inversion Property",
      formula: "a < b ⇔ −a > −b"
    },
    {
      name: "Division by Negative Number",
      formula: "If c < 0, then a < b ⇒ a/c > b/c"
    },
    {
      name: "Modulus Bounded Property",
      formula: "|x| < a ⇔ −a < x < a (for a > 0)"
    },
    {
      name: "Modulus Unbounded Property",
      formula: "|x| > a ⇔ x < −a or x > a (for a > 0)"
    },
    {
      name: "Interval Equivalences",
      formula: "(a, b) = {x : a < x < b}, [a, b] = {x : a ≤ x ≤ b}"
    }
  ],
  exercises: [
    {
      id: "ex5-1",
      name: "Exercise 5.1",
      questions: []
    },
    {
      id: "ex5-2",
      name: "Exercise 5.2",
      questions: []
    },
    {
      id: "ex5-3",
      name: "Exercise 5.3",
      questions: []
    },
    {
      id: "misc",
      name: "Miscellaneous",
      questions: []
    }
  ],
  htmlOverview: getChapter5Overview(),
  htmlExercises: {
    "ex5-1": getExercise5_1(),
    "ex5-2": getExercise5_2(),
    "ex5-3": getExercise5_3(),
    "misc": getMiscellaneousExercise()
  },
  mcqs: chapter5MCQs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math5: ChapterContent = ${JSON.stringify(c11Math5, null, 2)};
`;

const targetPath = path.resolve(__dirname, '../client/data/content/c11-math-5.ts');
fs.writeFileSync(targetPath, fileContent, 'utf-8');

console.log(`Successfully generated Chapter 5 at: ${targetPath}`);
console.log(`Overview size: ${c11Math5.htmlOverview.length} chars`);
console.log(`Ex 5.1 size: ${c11Math5.htmlExercises["ex5-1"].length} chars`);
console.log(`Ex 5.2 size: ${c11Math5.htmlExercises["ex5-2"].length} chars`);
console.log(`Ex 5.3 size: ${c11Math5.htmlExercises["ex5-3"].length} chars`);
console.log(`Misc size: ${c11Math5.htmlExercises["misc"].length} chars`);
console.log(`MCQs count: ${c11Math5.mcqs.length}`);
