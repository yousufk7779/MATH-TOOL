const fs = require("fs");
const path = require("path");

const { buildEx1 } = require("./build_ch10_ex1");
const { buildEx2 } = require("./build_ch10_ex2");
const { buildEx3 } = require("./build_ch10_ex3");
const { buildEx4 } = require("./build_ch10_ex4");
const { buildMisc } = require("./build_ch10_misc");
const { buildOverview, buildMCQs } = require("./build_ch10_overview_mcqs");

console.log("Generating Chapter 10 content components...");

const ex1Html = buildEx1();
const ex2Html = buildEx2();
const ex3Html = buildEx3();
const ex4Html = buildEx4();
const miscHtml = buildMisc();
const overviewHtml = buildOverview();
const mcqs = buildMCQs();

const chapterData = {
  id: "c11-math-10",
  number: 10,
  title: "Conic Sections",
  isHtmlView: true,
  introduction: "Conic Sections are curves obtained by the intersection of a plane with a double-napped right circular cone: circles, parabolas, ellipses, and hyperbolas. These foundational curves form the bedrock of planetary motion, optics, satellite communications, and modern engineering design.",
  summary: [
    "Circle: (x − h)² + (y − k)² = r² with centre (h, k) and radius r.",
    "Parabola: Standard form y² = 4ax with vertex (0, 0), focus (a, 0), directrix x = −a, and latus rectum 4a.",
    "Ellipse: Standard form x²/a² + y²/b² = 1 (a > b) with foci (±c, 0), vertices (±a, 0), b² = a² − c², and eccentricity e = c/a < 1.",
    "Hyperbola: Standard form x²/a² − y²/b² = 1 with foci (±c, 0), vertices (±a, 0), c² = a² + b², and eccentricity e = c/a > 1."
  ],
  definitions: [
    {
      term: "Conic Section",
      definition: "The locus of a point that moves such that the ratio of its distance from a fixed point (focus) to its perpendicular distance from a fixed line (directrix) is a constant (eccentricity e)."
    },
    {
      term: "Eccentricity (e)",
      definition: "The constant ratio defining the conic type: e = 0 for a circle, e = 1 for a parabola, 0 < e < 1 for an ellipse, and e > 1 for a hyperbola."
    },
    {
      term: "Latus Rectum",
      definition: "A chord passing through a focus of a conic section and perpendicular to its principal axis of symmetry."
    }
  ],
  formulas: [
    {
      name: "Standard Circle",
      formula: "(x − h)² + (y − k)² = r²"
    },
    {
      name: "Parabola Latus Rectum",
      formula: "LR = 4a"
    },
    {
      name: "Ellipse Eccentricity & Relation",
      formula: "c² = a² − b²,  e = c/a"
    },
    {
      name: "Hyperbola Eccentricity & Relation",
      formula: "c² = a² + b²,  e = c/a"
    },
    {
      name: "Latus Rectum (Ellipse & Hyperbola)",
      formula: "LR = 2b²/a"
    }
  ],
  exercises: [
    {
      id: "ex10-1",
      name: "Exercise 10.1",
      questions: []
    },
    {
      id: "ex10-2",
      name: "Exercise 10.2",
      questions: []
    },
    {
      id: "ex10-3",
      name: "Exercise 10.3",
      questions: []
    },
    {
      id: "ex10-4",
      name: "Exercise 10.4",
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
    "ex10-1": ex1Html,
    "ex10-2": ex2Html,
    "ex10-3": ex3Html,
    "ex10-4": ex4Html,
    "misc": miscHtml
  },
  mcqs: mcqs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math10: ChapterContent = ${JSON.stringify(chapterData, null, 2)};
`;

const outputPath = path.resolve(__dirname, "../client/data/content/c11-math-10.ts");
fs.writeFileSync(outputPath, fileContent, "utf8");

console.log("Successfully assembled Chapter 10 into:", outputPath);
