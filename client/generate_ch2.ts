import fs from "fs";
import path from "path";
import { mathCh2 } from "./data/content/math-ch2";

const HTML_DIR = path.join(__dirname, "assets", "chapters", "chapter2");
const OUTPUT_FILE = path.join(__dirname, "data", "content", "math-ch2.ts");

const overrideCSS = `
<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF4081 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF4081 !important; }
  .question { color: #FF4081 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #FF4081 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FF4081 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #FF4081 !important; }
  strong[style*="color: #ff6b6b"] { color: #FF4081 !important; }

  .question { font-size: 0.95em !important; }
  .sub-question { font-size: 0.9em !important; }
  .step { font-size: 0.9em !important; }
  .final-answer { font-size: 0.95em !important; }
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

function readHtml(filename: string): string {
  const filepath = path.join(HTML_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.warn(`File not found: ${filepath}`);
    return "";
  }
  let html = fs.readFileSync(filepath, "utf-8");

  // 1. Remove the header section with "JIGUU" and Chapter name
  html = html.replace(
    /<div class="header">[\s\S]*?<div class="chapter-title">[^<]*<\/div>\s*<\/div>/gi,
    ""
  );

  // 2. Remove slow MathJax script
  html = html.replace(/<script[^>]*MathJax-script[^>]*><\/script>/gi, "");
  html = html.replace(
    /<script src="https:\/\/polyfill.io\/v3\/polyfill.min.js\?features=es6"><\/script>/gi,
    ""
  );

  // 3. Inject Fast KaTeX scripts and Dark Mode Overrides right before </head>
  html = html.replace(/<\/head>/i, katexScripts + overrideCSS + "</head>");

  // Escape for embedded string
  return html.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

const examples = readHtml("examples.html");
const exercise1 = readHtml("exercise1.html");
const exercise2 = readHtml("exercise2.html");

const tsCode = `import { ChapterContent } from "../types";

export const mathCh2: ChapterContent = {
  id: "ch2",
  number: 2,
  title: "Polynomials",
  introduction: ${JSON.stringify(mathCh2.introduction)},
  definitions: ${JSON.stringify(mathCh2.definitions, null, 2)},
  keyPoints: ${JSON.stringify(mathCh2.keyPoints, null, 2)},
  formulas: ${JSON.stringify(mathCh2.formulas, null, 2)},
  crux: ${JSON.stringify(mathCh2.crux, null, 2)},
  summary: ${JSON.stringify(mathCh2.summary, null, 2)},
  examples: ${JSON.stringify(mathCh2.examples, null, 2)},
  exercises: [
    { id: "examples", name: "Examples", questions: [] },
    { id: "exercise1", name: "Exercise 2.1", questions: [] },
    { id: "exercise2", name: "Exercise 2.2", questions: [] }
  ],
  mcqs: ${JSON.stringify(mathCh2.mcqs, null, 2)},
  isHtmlView: true,
  htmlExercises: {
    examples: \`${examples}\`,
    exercise1: \`${exercise1}\`,
    exercise2: \`${exercise2}\`
  }
};
`;

fs.writeFileSync(OUTPUT_FILE, tsCode, "utf-8");
console.log("math-ch2.ts generated successfully with WebView HTML support and standard native MCQs!");
