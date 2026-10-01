const fs = require("fs");
const path = require("path");

const { buildEx1 } = require("./build_ch11_ex1");
const { buildEx2 } = require("./build_ch11_ex2");
const { buildEx3 } = require("./build_ch11_ex3");
const { buildMisc } = require("./build_ch11_misc");
const { buildOverview, buildMCQs } = require("./build_ch11_overview_mcqs");

console.log("Generating Chapter 11 content components...");

const ex1Html = buildEx1();
const ex2Html = buildEx2();
const ex3Html = buildEx3();
const miscHtml = buildMisc();
const overviewHtml = buildOverview();
const mcqs = buildMCQs();

const chapterData = {
  id: "c11-math-11",
  number: 11,
  title: "Introduction to Three Dimensional Geometry",
  isHtmlView: true,
  introduction: "Three-Dimensional Geometry expands Cartesian coordinate analysis from the Euclidean plane into physical 3D space with x, y, and z coordinates across eight spatial octants. This foundational branch underpins vector calculus, 3D computer graphics, aerospace navigation, and advanced engineering mechanics.",
  summary: [
    "Three mutually perpendicular coordinate axes (X, Y, Z) divide space into eight octants.",
    "Coordinates of an arbitrary point P are represented as an ordered triplet (x, y, z).",
    "Distance between P(x₁, y₁, z₁) and Q(x₂, y₂, z₂) is d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²).",
    "Section formula divides segment PQ in ratio m : n internally or externally.",
    "Centroid of triangle with vertices (x₁, y₁, z₁), (x₂, y₂, z₂), (x₃, y₃, z₃) is ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3)."
  ],
  definitions: [
    {
      term: "Coordinate Planes",
      definition: "The three mutually perpendicular planes XY (z = 0), YZ (x = 0), and ZX (y = 0) formed by the coordinate axes."
    },
    {
      term: "Spatial Octants",
      definition: "The eight distinct spatial regions into which the three coordinate planes divide three-dimensional space."
    },
    {
      term: "Centroid of Triangle in 3D",
      definition: "The point of concurrency of the medians given by ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3)."
    }
  ],
  formulas: [
    {
      name: "3D Distance Formula",
      formula: "d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)"
    },
    {
      name: "Internal Section Formula",
      formula: "((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n), (mz₂ + nz₁)/(m + n))"
    },
    {
      name: "External Section Formula",
      formula: "((mx₂ − nx₁)/(m − n), (my₂ − ny₁)/(m − n), (mz₂ − nz₁)/(m − n))"
    },
    {
      name: "Midpoint Formula",
      formula: "((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)"
    },
    {
      name: "Triangle Centroid Formula",
      formula: "((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3, (z₁ + z₂ + z₃)/3)"
    }
  ],
  exercises: [
    {
      id: "ex11-1",
      name: "Exercise 11.1",
      questions: []
    },
    {
      id: "ex11-2",
      name: "Exercise 11.2",
      questions: []
    },
    {
      id: "ex11-3",
      name: "Exercise 11.3",
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
    "ex11-1": ex1Html,
    "ex11-2": ex2Html,
    "ex11-3": ex3Html,
    "misc": miscHtml
  },
  mcqs: mcqs
};

const fileContent = `import { ChapterContent } from "../types";

export const c11Math11: ChapterContent = ${JSON.stringify(chapterData, null, 2)};
`;

const outputPath = path.resolve(__dirname, "../client/data/content/c11-math-11.ts");
fs.writeFileSync(outputPath, fileContent, "utf8");

console.log("Successfully assembled Chapter 11 into:", outputPath);
