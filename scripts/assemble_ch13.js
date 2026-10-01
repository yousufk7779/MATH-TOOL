const fs = require("fs");
const path = require("path");

const { buildEx1 } = require("./build_ch13_ex1");
const { buildEx2 } = require("./build_ch13_ex2");
const { buildEx3 } = require("./build_ch13_ex3");
const { buildMisc } = require("./build_ch13_misc");
const { buildOverview, buildMCQs } = require("./build_ch13_overview_mcqs");

console.log("Generating Chapter 13 content components...");

const ex1Html = buildEx1();
const ex2Html = buildEx2();
const ex3Html = buildEx3();
const miscHtml = buildMisc();
const overviewHtml = buildOverview();
const mcqs = buildMCQs();

const chapterData = {
  id: "c11-math-13",
  number: 13,
  title: "Statistics",
  isHtmlView: true,
  introduction: "Statistics deals with dispersion, variance, and standard deviation to analyze scatter, reliability, and spread in data distributions. Measures of dispersion quantify the extent of variation around central tendencies, providing fundamental insights in modern probability, science, and analytics.",
  summary: [
    "Measures of dispersion quantify the degree of scattering or spread of observations around a central tendency.",
    "Mean Deviation about Mean: MD(x̄) = (1/N) ∑ fᵢ |xᵢ − x̄|, and Mean Deviation about Median: MD(M) = (1/N) ∑ fᵢ |xᵢ − M|.",
    "Variance σ² is the mean of squared deviations: σ² = (1/N) ∑ fᵢ (xᵢ − x̄)² = (1/N) ∑ fᵢ xᵢ² − (x̄)².",
    "Standard Deviation σ = +√Variance, retaining the original measurement units of the data.",
    "Variance of first n natural numbers is σ² = (n² − 1) / 12 and their mean is (n + 1) / 2.",
    "Coefficient of Variation CV = (σ / x̄) × 100; smaller CV indicates higher consistency and stability, whereas larger CV indicates higher variability."
  ],
  definitions: [
    {
      term: "Dispersion",
      definition: "The degree of scatter or variation of individual observations around a measure of central tendency."
    },
    {
      term: "Mean Deviation",
      definition: "The arithmetic mean of the absolute values of the deviations of observations from their mean or median."
    },
    {
      term: "Standard Deviation",
      definition: "The positive square root of the arithmetic mean of the squares of deviations from the arithmetic mean."
    },
    {
      term: "Coefficient of Variation",
      definition: "A dimensionless measure of relative dispersion expressed as the percentage ratio of standard deviation to mean."
    }
  ],
  formulas: [
    {
      name: "Mean Deviation (Mean)",
      formula: "MD(x̄) = (1/N) ∑ fᵢ |xᵢ − x̄|"
    },
    {
      name: "Mean Deviation (Median)",
      formula: "MD(M) = (1/N) ∑ fᵢ |xᵢ − M|"
    },
    {
      name: "Continuous Median",
      formula: "M = l + [(N/2 − C)/f] × h"
    },
    {
      name: "Variance",
      formula: "σ² = (1/N) ∑ fᵢ (xᵢ − x̄)² = (1/N) ∑ fᵢ xᵢ² − (x̄)²"
    },
    {
      name: "Standard Deviation",
      formula: "σ = √Variance"
    },
    {
      name: "Variance (First n Natural Numbers)",
      formula: "σ² = (n² − 1) / 12"
    },
    {
      name: "Short-Cut Variance",
      formula: "σ² = (h²/N²) [N ∑ fᵢ yᵢ² − (∑ fᵢ yᵢ)²]"
    },
    {
      name: "Coefficient of Variation",
      formula: "CV = (σ / x̄) × 100"
    }
  ],
  exercises: [
    {
      id: "ex13-1",
      name: "Exercise 13.1",
      questions: []
    },
    {
      id: "ex13-2",
      name: "Exercise 13.2",
      questions: []
    },
    {
      id: "ex13-3",
      name: "Exercise 13.3",
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
    "ex13-1": ex1Html,
    "ex13-2": ex2Html,
    "ex13-3": ex3Html,
    "misc": miscHtml
  },
  mcqs: mcqs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math13: ChapterContent = ${JSON.stringify(chapterData, null, 2)};
`;

const outputPath = path.resolve(__dirname, "../client/data/content/c11-math-13.ts");
fs.writeFileSync(outputPath, fileContent, "utf8");

console.log("Successfully assembled Chapter 13 into:", outputPath);
