const fs = require('fs');
const path = require('path');

const { getExercise1_1, getExercise1_2 } = require('./build_ch1_ex1');
const { getExercise1_3, getExercise1_4 } = require('./build_ch1_ex2');
const { getExercise1_5, getExercise1_6, getMiscellaneousExercise } = require('./build_ch1_ex3');
const { getOverviewHtml, getMcqs } = require('./build_ch1_overview_mcqs');

const chapterId = "c11-math-1";
const chapterNum = 1;
const chapterTitle = "Sets";

const summary = [
  "A set is a well-defined collection of distinct objects.",
  "Sets are represented in Roster (tabular) form or Set-builder form.",
  "The empty set ∅ contains no elements; universal set U contains all contextual elements.",
  "A is a subset of B (A ⊆ B) if every element of A belongs to B.",
  "The power set P(A) is the collection of all subsets of A, containing 2ⁿ elements when |A| = n.",
  "Operations on sets include Union (A ∪ B), Intersection (A ∩ B), Difference (A − B), and Complement (A′).",
  "De Morgan's Laws: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′."
];

const definitions = [
  { term: "Set", definition: "A well-defined collection of distinct objects." },
  { term: "Empty Set (Null Set)", definition: "A set consisting of no elements, denoted by ∅ or {}." },
  { term: "Power Set P(A)", definition: "The set of all subsets of a set A. If |A| = n, then |P(A)| = 2ⁿ." },
  { term: "Universal Set U", definition: "A superset comprising all objects under consideration in a given context." },
  { term: "Disjoint Sets", definition: "Two sets A and B such that A ∩ B = ∅." }
];

const formulas = [
  { name: "Cardinality of Union (2 Sets)", formula: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)" },
  { name: "Disjoint Sets Union", formula: "n(A ∪ B) = n(A) + n(B)" },
  { name: "Set Difference Cardinality", formula: "n(A − B) = n(A) − n(A ∩ B)" },
  { name: "Cardinality of Union (3 Sets)", formula: "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C)" },
  { name: "Number of Subsets", formula: "|P(A)| = 2ⁿ" },
  { name: "De Morgan's First Law", formula: "(A ∪ B)′ = A′ ∩ B′" },
  { name: "De Morgan's Second Law", formula: "(A ∩ B)′ = A′ ∪ B′" }
];

const exercises = [
  { id: "ex1-1", name: "Exercise 1.1", questions: [] },
  { id: "ex1-2", name: "Exercise 1.2", questions: [] },
  { id: "ex1-3", name: "Exercise 1.3", questions: [] },
  { id: "ex1-4", name: "Exercise 1.4", questions: [] },
  { id: "ex1-5", name: "Exercise 1.5", questions: [] },
  { id: "ex1-6", name: "Exercise 1.6", questions: [] },
  { id: "misc", name: "Miscellaneous", questions: [] },
];

const htmlOverview = getOverviewHtml();
const htmlExercises = {
  "ex1-1": getExercise1_1(),
  "ex1-2": getExercise1_2(),
  "ex1-3": getExercise1_3(),
  "ex1-4": getExercise1_4(),
  "ex1-5": getExercise1_5(),
  "ex1-6": getExercise1_6(),
  "misc": getMiscellaneousExercise()
};

const mcqs = getMcqs();

const fileContent = `import { ChapterContent } from "../types";

export const c11Math1: ChapterContent = {
  id: "${chapterId}",
  number: ${chapterNum},
  title: "${chapterTitle}",
  isHtmlView: true,
  introduction: "Sets and set theory form the bedrock of modern mathematics, underpinning relations, functions, probability, and abstract algebra.",
  summary: ${JSON.stringify(summary, null, 4)},
  definitions: ${JSON.stringify(definitions, null, 4)},
  formulas: ${JSON.stringify(formulas, null, 4)},
  exercises: ${JSON.stringify(exercises, null, 4)},
  htmlOverview: ${JSON.stringify(htmlOverview)},
  htmlExercises: ${JSON.stringify(htmlExercises, null, 4)},
  mcqs: ${JSON.stringify(mcqs, null, 4)}
};
`;

const targetFile = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-math-1.ts');
fs.writeFileSync(targetFile, fileContent, 'utf8');

console.log(`Successfully assembled ${targetFile}`);
console.log(`Exercises included: ${Object.keys(htmlExercises).join(', ')}`);
console.log(`MCQs count: ${mcqs.length}`);
