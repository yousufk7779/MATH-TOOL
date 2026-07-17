import fs from "fs";
import path from "path";
import { mathCh5 } from "./data/content/math-ch5";

const HTML_DIR = path.join(__dirname, "assets", "chapters", "chapter5");
const OUTPUT_FILE = path.join(__dirname, "data", "content", "math-ch5.ts");

const overrideCSS = `
<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #66BB6A !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #66BB6A !important; }
  .question { color: #66BB6A !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #66BB6A !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #66BB6A !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }
  
  /* Make sure every sub part of the question has the question color */
  strong[style*="color: #FF6B6B"] { color: #66BB6A !important; }
  strong[style*="color: #ff6b6b"] { color: #66BB6A !important; }

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

function readHtml(filename: string, isExample: boolean): string {
  const filepath = path.join(HTML_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.warn(`File not found: ${filepath}`);
    return "";
  }
  let html = fs.readFileSync(filepath, "utf-8");

  // 1. Remove <h1> and <h2> headers
  html = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, "");
  html = html.replace(/<h2[^>]*>[\s\S]*?<\/h2>/gi, "");

  // Remove the header section with "JIGUU" and Chapter name if it exists
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

  // 4. Inject Question/Example Numbers
  let count = 0;
  html = html.replace(/<div class="question">/g, () => {
    count++;
    const prefix = isExample ? `Example ${count}. ` : `Question ${count}. `;
    return `<div class="question">${prefix}`;
  });

  // Escape for embedded string
  return html.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

const examples = readHtml("examples.html", true);
const exercise1 = readHtml("exercise1.html", false);
const exercise2 = readHtml("exercise2.html", false);
const exercise3 = readHtml("exercise3.html", false);

const tsCode = `import { ChapterContent } from "../types";

export const mathCh5: ChapterContent = {
  id: "ch5",
  number: 5,
  title: "Arithmetic Progressions",
  introduction: ${JSON.stringify(mathCh5.introduction)},
  definitions: ${JSON.stringify(mathCh5.definitions, null, 2)},
  keyPoints: ${JSON.stringify(mathCh5.keyPoints, null, 2)},
  formulas: ${JSON.stringify(mathCh5.formulas, null, 2)},
  crux: ${JSON.stringify(mathCh5.crux, null, 2)},
  summary: ${JSON.stringify(mathCh5.summary, null, 2)},
  examples: [],
  exercises: [
    { id: "examples", name: "Examples", questions: [] },
    { id: "exercise1", name: "Exercise 5.1", questions: [] },
    { id: "exercise2", name: "Exercise 5.2", questions: [] },
    { id: "exercise3", name: "Exercise 5.3", questions: [] }
  ],
  mcqs: ${JSON.stringify(mathCh5.mcqs, null, 2)},
  isHtmlView: true,
  htmlExercises: {
    examples: \`${examples}\`,
    exercise1: \`${exercise1}\`,
    exercise2: \`${exercise2}\`,
    exercise3: \`${exercise3}\`
  }
};
`;

fs.writeFileSync(OUTPUT_FILE, tsCode, "utf-8");
console.log("math-ch5.ts generated successfully with WebView HTML support and standard native MCQs!");
