const fs = require('fs');
const path = require('path');

const HTML_DIR = path.join(__dirname, 'data', 'chapter3');
const OUTPUT_FILE = path.join(__dirname, 'data', 'content', 'math-ch3.ts');

function encodeImage(imgPath) {
    if (!fs.existsSync(imgPath)) return "";
    const b64 = fs.readFileSync(imgPath).toString('base64');
    if (imgPath.endsWith('.svg')) return `data:image/svg+xml;base64,${b64}`;
    if (imgPath.endsWith('.png')) return `data:image/png;base64,${b64}`;
    if (imgPath.endsWith('.jpg') || imgPath.endsWith('.jpeg')) return `data:image/jpeg;base64,${b64}`;
    return `data:image/png;base64,${b64}`;
}

const overrideCSS = `
<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #AB47BC !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #AB47BC !important; }
  .question { color: #AB47BC !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #AB47BC !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
</style>
`;

const katexScripts = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '\\\\[', right: '\\\\]', display: true}
      ]
    });
  });
</script>
`;

function readHtml(filename) {
    const filepath = path.join(HTML_DIR, filename);
    if (!fs.existsSync(filepath)) return "";
    let html = fs.readFileSync(filepath, 'utf-8');
    
    html = html.replace(/<div class="header">[\s\S]*?<div class="chapter-title">[^<]*<\/div>\s*<\/div>/gi, '');
    html = html.replace(/<script[^>]*MathJax-script[^>]*><\/script>/gi, '');
    html = html.replace(/<script src="https:\/\/polyfill.io\/v3\/polyfill.min.js\?features=es6"><\/script>/gi, '');
    html = html.replace(/<\/head>/i, katexScripts + overrideCSS + "</head>");

    html = html.replace(/src="(images\/[^"]+)"/g, (match, p1) => {
        const fullImgPath = path.join(HTML_DIR, p1);
        const b64Src = encodeImage(fullImgPath);
        if (b64Src) return `src="${b64Src}"`;
        return match;
    });

    html = html.replace(/src="([^"]+\.(?:svg|png|jpg|jpeg))"/gi, (match, p1) => {
        if (p1.startsWith('data:') || p1.startsWith('http')) return match;
        const filenamePath = path.basename(p1);
        const fullImgPath = path.join(HTML_DIR, 'images', filenamePath);
        const b64Src = encodeImage(fullImgPath);
        if (b64Src) return 'src="' + b64Src + '"';
        return match;
    });
    
    return html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

// Fixed option helper with large padding
const opt = (text) => `<div style="padding-top: 15px; padding-bottom: 15px; line-height: 2.0; font-family: 'Noto Sans', sans-serif;">${text}</div>`;

const mcqArray = [
    {
        id: "mcq1",
        question: "<span style=\"font-weight: normal;\">The pair of equations x = a and y = b graphically represents lines which are:</span>",
        options: [opt("parallel"), opt("intersecting at (b, a)"), opt("coincident"), opt("intersecting at (a, b)")],
        correctAnswer: opt("intersecting at (a, b)")
    },
    {
        id: "mcq2",
        question: "<span style=\"font-weight: normal;\">For what value of k, do the equations 3x - y + 8 = 0 and 6x - ky = -16 represent coincident lines?</span>",
        options: [opt("<sup>1</sup>&frasl;<sub>2</sub>"), opt("<sup>-1</sup>&frasl;<sub>2</sub>"), opt("2"), opt("-2")],
        correctAnswer: opt("2")
    },
    {
        id: "mcq3",
        question: "<span style=\"font-weight: normal;\">If the lines given by 3x + 2ky = 2 and 2x + 5y + 1 = 0 are parallel, then the value of k is:</span>",
        options: [opt("<sup>-5</sup>&frasl;<sub>4</sub>"), opt("<sup>2</sup>&frasl;<sub>5</sub>"), opt("<sup>15</sup>&frasl;<sub>4</sub>"), opt("<sup>3</sup>&frasl;<sub>2</sub>")],
        correctAnswer: opt("<sup>15</sup>&frasl;<sub>4</sub>")
    },
    {
        id: "mcq4",
        question: "<span style=\"font-weight: normal;\">The value of c for which the pair of equations cx - y = 2 and 6x - 2y = 3 will have infinitely many solutions is:</span>",
        options: [opt("3"), opt("-3"), opt("-12"), opt("no value")],
        correctAnswer: opt("no value")
    },
    {
        id: "mcq5",
        question: "<span style=\"font-weight: normal;\">One equation of a pair of dependent linear equations is -5x + 7y = 2. The second equation can be:</span>",
        options: [opt("10x + 14y + 4 = 0"), opt("-10x - 14y + 4 = 0"), opt("-10x + 14y + 4 = 0"), opt("10x - 14y = -4")],
        correctAnswer: opt("10x - 14y = -4")
    },
    {
        id: "mcq6",
        question: "<span style=\"font-weight: normal;\">A pair of linear equations which has a unique solution x = 2, y = -3 is:</span>",
        options: [opt("x + y = -1; 2x - 3y = -5"), opt("2x + 5y = -11; 4x + 10y = -22"), opt("2x - y = 1; 3x + 2y = 0"), opt("x - 4y - 14 = 0; 5x - y - 13 = 0")],
        correctAnswer: opt("x - 4y - 14 = 0; 5x - y - 13 = 0")
    },
    {
        id: "mcq7",
        question: "<span style=\"font-weight: normal;\">If x = a, y = b is the solution of the equations x - y = 2 and x + y = 4, then the values of a and b are:</span>",
        options: [opt("3 and 5"), opt("5 and 3"), opt("3 and 1"), opt("-1 and -3")],
        correctAnswer: opt("3 and 1")
    },
    {
        id: "mcq8",
        question: "<span style=\"font-weight: normal;\">Aruna has only ₹ 1 and ₹ 2 coins with her. If total coins are 50 and amount is ₹ 75, then number of ₹ 1 and ₹ 2 coins are:</span>",
        options: [opt("35 and 15"), opt("35 and 20"), opt("15 and 35"), opt("25 and 25")],
        correctAnswer: opt("25 and 25")
    },
    {
        id: "mcq9",
        question: "<span style=\"font-weight: normal;\">The father's age is six times his son's age. Four years hence, the age of the father will be four times his son's age. The present ages (in years) are:</span>",
        options: [opt("4 and 24"), opt("5 and 30"), opt("6 and 36"), opt("3 and 24")],
        correctAnswer: opt("6 and 36")
    },
    {
        id: "mcq10",
        question: "<span style=\"font-weight: normal;\">Graphically, the pair of equations 6x - 3y + 10 = 0 and 2x - y + 9 = 0 represents two lines which are:</span>",
        options: [opt("intersecting at exactly one point"), opt("intersecting at exactly two points"), opt("coincident"), opt("parallel")],
        correctAnswer: opt("parallel")
    }
];

const overview = readHtml("overview.html");
const exercise1 = readHtml("exercise1.html");
const exercise2 = readHtml("exercise2.html");
const exercise3 = readHtml("exercise3.html");
const examples = readHtml("examples.html");

const tsCode = `import { ChapterContent } from "../chapterContent";

export const mathCh3: ChapterContent = {
    id: "ch3",
    number: 3,
    title: "Pair of Linear Equations",
    introduction: "In this chapter, we explore systems of two linear equations with two variables. We learn to represent them graphically and algebraically, identifying whether they have a unique solution, infinitely many solutions, or no solution at all.",
    definitions: [
        { term: "Linear Equation", description: "An equation of the form ax + by + c = 0, where a and b are not both zero." },
        { term: "Consistent System", description: "A pair of equations that has at least one common solution." },
        { term: "Inconsistent System", description: "A pair of equations that has no common solution." }
    ],
    keyPoints: [
        "Intersecting lines have a unique solution.",
        "Parallel lines have no solution.",
        "Coincident lines have infinitely many solutions."
    ],
    formulas: [
        { name: "Unique Solution Condition", formula: "a1/a2 ≠ b1/b2" },
        { name: "No Solution", formula: "a1/a2 = b1/b2 ≠ c1/c2" },
        { name: "Infinite Solutions", formula: "a1/a2 = b1/b2 = c1/c2" }
    ],
    crux: [
        "Algebraic methods: Substitution, Elimination, and Cross-multiplication.",
        "Graphical interpretation of consistency and dependence."
    ],
    exercises: [
        { id: "exercise1", name: "Exercise 3.1", questions: [] },
        { id: "exercise2", name: "Exercise 3.2", questions: [] },
        { id: "exercise3", name: "Exercise 3.3", questions: [] }
    ],
    examples: [
        { id: "examples", name: "Examples", questions: [] }
    ],
    theorems: [],
    mcqs: ${JSON.stringify(mcqArray, null, '\t\t')},
    summary: [
        "Understood the graphical representation of linear pairs.",
        "Mastered the conditions for consistency and inconsistency.",
        "Learned efficient algebraic techniques for solving systems of equations."
    ],

    isHtmlView: true,
    htmlOverview: \`${overview}\`,
    htmlExercises: {
        exercise1: \`${exercise1}\`,
        exercise2: \`${exercise2}\`,
        exercise3: \`${exercise3}\`,
        examples: \`${examples}\`
    }
};
`;

fs.writeFileSync(OUTPUT_FILE, tsCode, 'utf-8');
console.log("math-ch3.ts generated MANUALLY and SAFELY with exact Chapter 8 strategy and height fix!");
