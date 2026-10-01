const fs = require("fs");
const path = require("path");

const { buildEx1 } = require("./build_ch14_ex1");
const { buildEx2 } = require("./build_ch14_ex2");
const { buildEx3 } = require("./build_ch14_ex3");
const { buildMisc } = require("./build_ch14_misc");
const { buildOverview, buildMCQs } = require("./build_ch14_overview_mcqs");

console.log("Generating Chapter 14 content components...");

const ex1Html = buildEx1();
const ex2Html = buildEx2();
const ex3Html = buildEx3();
const miscHtml = buildMisc();
const overviewHtml = buildOverview();
const mcqs = buildMCQs();

const chapterData = {
  id: "c11-math-14",
  number: 14,
  title: "Probability",
  isHtmlView: true,
  introduction: "Probability formalizes the mathematics of chance, sample spaces, random events, and axiomatic foundations of uncertainty. Using modern set theory and Kolmogorov's axioms, it models outcomes of complex stochastic processes, games of chance, genetics, and statistical inference.",
  summary: [
    "A random experiment is an experiment whose outcomes cannot be predicted with absolute certainty, though all possible outcomes are known.",
    "Sample space S is the set of all possible outcomes of a random experiment. Any subset E of S is called an event.",
    "Two events A and B are mutually exclusive if they cannot happen together: A ∩ B = ∅, hence P(A ∩ B) = 0.",
    "Events E₁, E₂, ..., Eₙ are exhaustive if their union constitutes the entire sample space: E₁ ∪ E₂ ∪ ... ∪ Eₙ = S.",
    "Axiomatic probability guarantees: 0 ≤ P(E) ≤ 1 for every event, P(S) = 1, and P(A ∪ B) = P(A) + P(B) for mutually exclusive events.",
    "General Addition Theorem: P(A ∪ B) = P(A) + P(B) − P(A ∩ B), and Complement Rule: P(A′) = 1 − P(A)."
  ],
  definitions: [
    {
      term: "Sample Space",
      definition: "The set of all possible outcomes of a random experiment, denoted by S."
    },
    {
      term: "Mutually Exclusive Events",
      definition: "Two or more events that have no sample points in common, so that they cannot occur simultaneously: A ∩ B = ∅."
    },
    {
      term: "Exhaustive Events",
      definition: "A collection of events whose union equals the complete sample space S: ⋃ Eᵢ = S."
    },
    {
      term: "Axiomatic Probability",
      definition: "A mathematical framework based on Kolmogorov's axioms assigning probabilities P(E) to events satisfying non-negativity, normalization, and additivity."
    }
  ],
  formulas: [
    {
      name: "Classical Probability",
      formula: "P(E) = n(E) / n(S)"
    },
    {
      name: "Complement Rule",
      formula: "P(A′) = 1 − P(A)"
    },
    {
      name: "General Addition Theorem",
      formula: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"
    },
    {
      name: "Mutually Exclusive Addition",
      formula: "P(A ∪ B) = P(A) + P(B)"
    },
    {
      name: "Difference of Events",
      formula: "P(A − B) = P(A ∩ B′) = P(A) − P(A ∩ B)"
    },
    {
      name: "De Morgan's Probability Rule",
      formula: "P(A′ ∩ B′) = 1 − P(A ∪ B)"
    }
  ],
  exercises: [
    {
      id: "ex14-1",
      name: "Exercise 14.1",
      questions: []
    },
    {
      id: "ex14-2",
      name: "Exercise 14.2",
      questions: []
    },
    {
      id: "ex14-3",
      name: "Exercise 14.3",
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
    "ex14-1": ex1Html,
    "ex14-2": ex2Html,
    "ex14-3": ex3Html,
    "misc": miscHtml
  },
  mcqs: mcqs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math14: ChapterContent = ${JSON.stringify(chapterData, null, 2)};
`;

const outputPath = path.resolve(__dirname, "../client/data/content/c11-math-14.ts");
fs.writeFileSync(outputPath, fileContent, "utf8");

console.log("Successfully assembled Chapter 14 into:", outputPath);
