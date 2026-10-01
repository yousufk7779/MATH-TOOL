const fs = require("fs");
const path = require("path");

const { buildEx1 } = require("./build_ch12_ex1");
const { buildEx2 } = require("./build_ch12_ex2");
const { buildMisc } = require("./build_ch12_misc");
const { buildOverview, buildMCQs } = require("./build_ch12_overview_mcqs");

console.log("Generating Chapter 12 content components...");

const ex1Html = buildEx1();
const ex2Html = buildEx2();
const miscHtml = buildMisc();
const overviewHtml = buildOverview();
const mcqs = buildMCQs();

const chapterData = {
  id: "c11-math-12",
  number: 12,
  title: "Limits and Derivatives",
  isHtmlView: true,
  introduction: "Limits and Derivatives initiate calculus, formalizing instantaneous rates of change, continuous curves, and tangents. These fundamental tools power mathematical analysis, classical physics, optimization theory, and modern computational algorithms.",
  summary: [
    "A limit lim_{x→a} f(x) exists if and only if both the Left-Hand Limit (LHL) and Right-Hand Limit (RHL) exist and are equal.",
    "Fundamental limit identity: lim_{x→a} (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹.",
    "Trigonometric limits: lim_{x→0} (sin x)/x = 1 and lim_{x→0} (1 − cos x)/x = 0 (for x in radians).",
    "Derivative from First Principle: f′(x) = lim_{h→0} [f(x + h) − f(x)] / h.",
    "Differentiation rules: Product rule (uv)′ = u′v + uv′, Quotient rule (u/v)′ = (v u′ − u v′)/v²."
  ],
  definitions: [
    {
      term: "Limit of a Function",
      definition: "The unique real number L that f(x) approaches as x approaches a from both left and right directions."
    },
    {
      term: "Derivative from First Principle",
      definition: "The instantaneous rate of change of a function with respect to its variable, defined by f′(x) = lim_{h→0} [f(x + h) − f(x)] / h."
    }
  ],
  formulas: [
    {
      name: "Algebraic Limit Identity",
      formula: "lim_{x→a} (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹"
    },
    {
      name: "Trigonometric Limit",
      formula: "lim_{x→0} (sin x)/x = 1"
    },
    {
      name: "Derivative Definition",
      formula: "f′(x) = lim_{h→0} [f(x + h) − f(x)] / h"
    },
    {
      name: "Leibniz Product Rule",
      formula: "(uv)′ = u′v + uv′"
    },
    {
      name: "Quotient Rule",
      formula: "(u/v)′ = (v u′ − u v′)/v²"
    }
  ],
  exercises: [
    {
      id: "ex12-1",
      name: "Exercise 12.1",
      questions: []
    },
    {
      id: "ex12-2",
      name: "Exercise 12.2",
      questions: []
    },
    {
      id: "misc",
      name: "Miscellaneous",
      questions: []
    }
  ],
  htmlOverview: overviewHtml,
  htmlExercises: {
    "ex12-1": ex1Html,
    "ex12-2": ex2Html,
    "misc": miscHtml
  },
  mcqs: mcqs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math12: ChapterContent = ${JSON.stringify(chapterData, null, 2)};
`;

const outputPath = path.resolve(__dirname, "../client/data/content/c11-math-12.ts");
fs.writeFileSync(outputPath, fileContent, "utf8");

console.log("Successfully assembled Chapter 12 into:", outputPath);
