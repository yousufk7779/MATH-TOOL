import fs from "fs";
import path from "path";
import { mathCh6 } from "./data/content/math-ch6";

const HTML_DIR = path.join(__dirname, "assets", "chapters", "chapter6");
const OUTPUT_FILE = path.join(__dirname, "data", "content", "math-ch6.ts");

const overrideCSS = `
<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #26C6DA !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #26C6DA !important; }
  .question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #26C6DA !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  
  /* SVG Container styles */
  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto !important;
    width: 100% !important;
    max-width: 340px !important;
    background: rgba(255, 255, 255, 0.02) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 15px !important;
  }
  .svg-container svg {
    width: 100% !important;
    height: auto !important;
    max-height: 250px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #26C6DA !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-header { color: #4CAF50 !important; font-weight: 700 !important; }
  * { font-family: 'Noto Sans', sans-serif !important; }

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

function colorAndCleanSvg(svgContent: string): string {
  // 1. Remove XML declaration if present
  svgContent = svgContent.replace(/<\?xml[^>]*\?>/gi, "");
  
  // 2. Ensure viewBox is present so that the SVG scales instead of being cropped
  if (!/viewBox\s*=/i.test(svgContent)) {
    const widthMatch = svgContent.match(/width\s*=\s*["']([^"']+)["']/i);
    const heightMatch = svgContent.match(/height\s*=\s*["']([^"']+)["']/i);
    if (widthMatch && heightMatch) {
      const w = widthMatch[1].replace(/px/gi, "").trim();
      const h = heightMatch[1].replace(/px/gi, "").trim();
      // Inject viewBox right after '<svg'
      svgContent = svgContent.replace(/<svg/i, `<svg viewBox="0 0 ${w} ${h}"`);
    }
  }

  // 3. Replace all occurrences of blue/cyan highlight colors with the chapter theme color (#26C6DA)
  svgContent = svgContent
    .replace(/#00BFFF/gi, "#26C6DA")
    .replace(/#00bfff/gi, "#26C6DA")
    .replace(/#03a9f4/gi, "#26C6DA")
    .replace(/#0099cc/gi, "#26C6DA")
    .replace(/#0099CC/gi, "#26C6DA");

  // Wrap the inline svg in a container div
  return `<div class="svg-container">${svgContent}</div>`;
}

function readHtml(filename: string, isExample: boolean, isTheorem = false): string {
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

  // 2. Remove <h1> and <h2> headers
  html = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, "");
  html = html.replace(/<h2[^>]*>[\s\S]*?<\/h2>/gi, "");

  // 3. Replace inline base64 images in exercise2.html with clean relative references to load corrected SVGs
  if (filename === "exercise2.html") {
    html = html.replace(/<img[^>]*alt="Triangle with AD=1.5, DB=3, AE=1"[^>]*>/gi, 
      '<img src="images/ex6_2_q1_i.svg" alt="Triangle with AD=1.5, DB=3, AE=1">'
    );
    html = html.replace(/<img[^>]*alt="Triangle with DB=7.2, AE=1.8, EC=5.4"[^>]*>/gi, 
      '<img src="images/ex6_2_q1_ii.svg" alt="Triangle with DB=7.2, AE=1.8, EC=5.4">'
    );
  }

  // 4. Fix broken img tag attributes in exercise3.html
  if (filename === "exercise3.html") {
    html = html.replace(/<img\s+src="images\/"\s+([^.]+)\.svg"=""/gi, '<img src="images/$1.svg"');
    html = html.replace(/<img\s+src="images\/ex6_3_q([^.]+)\.svg"=""/gi, '<img src="images/ex6_3_q$1.svg"');
  }

  // 5. Replace inline base64 image tags with decoded inline SVG tags (for examples, exercise1, exercise2, theorems)
  const base64ImgRegex = /<img[^>]*src="data:image\/svg\+xml;base64,([a-zA-Z0-9+/=]+)"[^>]*>/gi;
  html = html.replace(base64ImgRegex, (match, base64) => {
    try {
      const decodedSvg = Buffer.from(base64, "base64").toString("utf8");
      return colorAndCleanSvg(decodedSvg);
    } catch (e) {
      console.error(`Error decoding base64 SVG: ${e}`);
      return match;
    }
  });

  // 6. Inline and parse all relative SVGs under "images/" folder to actual inline SVG tags
  const relativeImgRegex = /<img\s+[^>]*src="images\/([a-zA-Z0-9_-]+\.svg)"[^>]*>/gi;
  html = html.replace(relativeImgRegex, (match, svgFile) => {
    const svgPath = path.join(HTML_DIR, "images", svgFile);
    if (fs.existsSync(svgPath)) {
      const svgContent = fs.readFileSync(svgPath, "utf8");
      return colorAndCleanSvg(svgContent);
    }
    console.warn(`Could not find SVG: ${svgPath}`);
    return match;
  });

  // 7. Inject Fast KaTeX scripts and Dark Mode Overrides right before </head>
  html = html.replace(/<\/head>/i, katexScripts + overrideCSS + "</head>");

  // 8. Inject Question/Example Numbers for questions (excluding theorems)
  if (!isTheorem) {
    let count = 0;
    html = html.replace(/<div class="question">/g, () => {
      count++;
      const prefix = isExample ? `Example ${count}. ` : `Question ${count}. `;
      return `<div class="question">${prefix}`;
    });
  }

  // Escape for embedded string
  return html.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

const examples = readHtml("examples.html", true);
const exercise1 = readHtml("exercise1.html", false);
const exercise2 = readHtml("exercise2.html", false);
const exercise3 = readHtml("exercise3.html", false);
const theorems = readHtml("theorems.html", false, true);

const tsCode = `import { ChapterContent } from "../types";

export const mathCh6: ChapterContent = {
  id: "ch6",
  number: 6,
  title: "Triangles",
  introduction: ${JSON.stringify(mathCh6.introduction)},
  definitions: ${JSON.stringify(mathCh6.definitions, null, 2)},
  keyPoints: ${JSON.stringify(mathCh6.keyPoints, null, 2)},
  formulas: ${JSON.stringify(mathCh6.formulas, null, 2)},
  crux: ${JSON.stringify(mathCh6.crux, null, 2)},
  summary: ${JSON.stringify(mathCh6.summary, null, 2)},
  examples: [],
  exercises: [
    { id: "examples", name: "Examples", questions: [] },
    { id: "exercise1", name: "Exercise 6.1", questions: [] },
    { id: "exercise2", name: "Exercise 6.2", questions: [] },
    { id: "exercise3", name: "Exercise 6.3", questions: [] },
    { id: "theorems", name: "Theorems", questions: [] }
  ],
  theorems: ${JSON.stringify(mathCh6.theorems, null, 2)},
  mcqs: ${JSON.stringify(mathCh6.mcqs, null, 2)},
  isHtmlView: true,
  htmlExercises: {
    examples: \`${examples}\`,
    exercise1: \`${exercise1}\`,
    exercise2: \`${exercise2}\`,
    exercise3: \`${exercise3}\`,
    theorems: \`${theorems}\`
  }
};
`;

fs.writeFileSync(OUTPUT_FILE, tsCode, "utf-8");
console.log("math-ch6.ts generated successfully with auto viewBox insertion and scale fix!");
