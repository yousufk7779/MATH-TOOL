const fs = require('fs');
const path = require('path');

const { generateOverview, generateMcqs } = require('./build_ch9_overview_mcqs');
const { generateEx91 } = require('./build_ch9_ex1');
const { generateEx92 } = require('./build_ch9_ex2');
const { generateEx93 } = require('./build_ch9_ex3');
const { generateEx9Misc } = require('./build_ch9_misc');

console.log("Generating Chapter 9 content components...");
const overviewHtml = generateOverview();
const ex91Html = generateEx91();
const ex92Html = generateEx92();
const ex93Html = generateEx93();
const ex9MiscHtml = generateEx9Misc();
const mcqs = generateMcqs();

const fileContent = `import { ChapterContent } from "../types";

export const c11Math9: ChapterContent = {
  id: "c11-math-9",
  number: 9,
  title: "Straight Lines",
  isHtmlView: true,
  introduction: "Straight Lines in coordinate geometry bridge algebraic equations and geometric trajectories in the two-dimensional Cartesian plane, establishing fundamental forms, metrics, and relationships.",
  summary: [
    "Slope m of a non-vertical line passing through (x₁, y₁) and (x₂, y₂) is m = (y₂ − y₁) / (x₂ − x₁) = tan θ.",
    "Two non-vertical lines are parallel iff m₁ = m₂; perpendicular iff m₁ × m₂ = −1.",
    "Various standard forms of line equation: Slope-Intercept (y = mx + c), Point-Slope (y − y₁ = m(x − x₁)), Two-Point, Intercept (x/a + y/b = 1), Normal (x cos ω + y sin ω = p).",
    "Perpendicular distance of point (x₁, y₁) from line Ax + By + C = 0 is d = |Ax₁ + By₁ + C| / √(A² + B²).",
    "Distance between two parallel lines Ax + By + C₁ = 0 and Ax + By + C₂ = 0 is d = |C₁ − C₂| / √(A² + B²)."
  ],
  definitions: [
    {
      term: "Slope (Gradient) of a Line",
      definition: "The tangent of the angle of inclination θ that a line makes with the positive direction of the x-axis: m = tan θ."
    },
    {
      term: "Collinear Points",
      definition: "Three or more points that lie on the exact same straight line, satisfying Slope(AB) = Slope(BC)."
    },
    {
      term: "Intercept Form",
      definition: "The equation of a straight line cutting off non-zero intercepts a and b on the x- and y-axes respectively: x/a + y/b = 1."
    },
    {
      term: "Normal Form",
      definition: "The equation of a line with perpendicular distance p from the origin and normal angle ω: x cos ω + y sin ω = p."
    },
    {
      term: "Concurrent Lines",
      definition: "Three or more lines that pass through a single common point of intersection in the plane."
    }
  ],
  formulas: [
    {
      name: "Slope Formula",
      formula: "m = (y₂ − y₁) / (x₂ − x₁) = tan θ"
    },
    {
      name: "Point-Slope Form",
      formula: "y − y₁ = m(x − x₁)"
    },
    {
      name: "Two-Point Form",
      formula: "y − y₁ = [(y₂ − y₁) / (x₂ − x₁)](x − x₁)"
    },
    {
      name: "Slope-Intercept Form",
      formula: "y = mx + c"
    },
    {
      name: "Intercept Form",
      formula: "x/a + y/b = 1"
    },
    {
      name: "Normal Form",
      formula: "x cos ω + y sin ω = p"
    },
    {
      name: "Angle Between Two Lines",
      formula: "tan θ = |(m₂ − m₁) / (1 + m₁ m₂)|"
    },
    {
      name: "Perpendicular Distance from Point to Line",
      formula: "d = |Ax₁ + By₁ + C| / √(A² + B²)"
    },
    {
      name: "Distance Between Parallel Lines",
      formula: "d = |C₁ − C₂| / √(A² + B²)"
    }
  ],
  exercises: [
    {
      id: "ex9-1",
      name: "Exercise 9.1",
      questions: []
    },
    {
      id: "ex9-2",
      name: "Exercise 9.2",
      questions: []
    },
    {
      id: "ex9-3",
      name: "Exercise 9.3",
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
    "ex9-1": ${JSON.stringify(ex91Html)},
    "ex9-2": ${JSON.stringify(ex92Html)},
    "ex9-3": ${JSON.stringify(ex93Html)},
    "misc": ${JSON.stringify(ex9MiscHtml)}
  },
  mcqs: ${JSON.stringify(mcqs, null, 4)}
};
`;

const targetPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-math-9.ts');
fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log(`Successfully assembled Chapter 9 into: ${targetPath}`);
