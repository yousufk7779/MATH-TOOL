import fs from "fs";
import path from "path";
import { mathCh7 } from "./data/content/math-ch7";

const HTML_DIR = path.join(__dirname, "assets", "chapters", "chapter7");
const OUTPUT_FILE = path.join(__dirname, "data", "content", "math-ch7.ts");

const overrideCSS = `
<style>
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(255, 152, 0, 0.1) !important; border-left: 4px solid #FFA726 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FFA726 !important; }
  .question { color: #FFA726 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
  .sub-question { color: #FFA726 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; font-size: 14px !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; font-size: 14px !important; line-height: 2.0 !important; margin-bottom: 14px !important; }
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
    margin: 25px auto !important;
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
    max-height: 280px !important;
    display: block !important;
    background: transparent !important;
  }
  .svg-container svg text {
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: bold !important;
  }

  .section-title { color: #FFA726 !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
      svgContent = svgContent.replace(/<svg/i, `<svg viewBox="0 0 ${w} ${h}"`);
    }
  }

  // 3. Remove inline style="background-color:white; border:1px solid #ddd;" from <svg> tag
  svgContent = svgContent.replace(/style\s*=\s*["']background-color:\s*white;\s*border:\s*1px\s*solid\s*#ddd;?["']/gi, "");
  svgContent = svgContent.replace(/style\s*=\s*["']background-color:\s*white;?["']/gi, "");

  // 4. Color replacements for Chapter 7 Coordinate Geometry (Orange theme)
  // Axes: blue -> readable semi-transparent white/gray
  svgContent = svgContent
    .replace(/stroke="blue"/g, 'stroke="rgba(255,255,255,0.4)"')
    .replace(/fill="blue"/g, 'fill="rgba(255,255,255,0.4)"');

  // Main shapes & Text labels: red -> high-contrast orange (#FFA726)
  svgContent = svgContent
    .replace(/stroke="red"/g, 'stroke="#FFA726"')
    .replace(/fill="red"/g, 'fill="#FFA726"')
    .replace(/fill:\s*red/g, 'fill: #FFA726')
    .replace(/fill\s*=\s*["']#ff0000["']/gi, 'fill="#FFA726"')
    .replace(/stroke\s*=\s*["']#ff0000["']/gi, 'stroke="#FFA726"');

  // 5. Scope global-looking styles inside the SVG style tags to prevent leaking into main HTML
  svgContent = svgContent.replace(/text,\s*tspan/gi, "svg text, svg tspan");
  svgContent = svgContent.replace(/\.text\s*\{/gi, "svg .text {");
  svgContent = svgContent.replace(/\.axis\s*\{/gi, "svg .axis {");
  svgContent = svgContent.replace(/\.grid-line\s*\{/gi, "svg .grid-line {");

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

  // 3. Replace inline base64 image tags with decoded inline SVG tags (if any)
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

  // 4. Inline and parse all relative SVGs under "images/" folder to actual inline SVG tags
  // Support both src="images/filename.svg" and src="filename.svg"
  const relativeImgRegex = /<img\s+[^>]*src="(?:images\/)?([a-zA-Z0-9_-]+\.svg)"[^>]*>/gi;
  html = html.replace(relativeImgRegex, (match, svgFile) => {
    const svgPath = path.join(HTML_DIR, "images", svgFile);
    if (fs.existsSync(svgPath)) {
      const svgContent = fs.readFileSync(svgPath, "utf8");
      return colorAndCleanSvg(svgContent);
    }
    console.warn(`Could not find SVG: ${svgPath}`);
    return match;
  });

  // 5. Inject Fast KaTeX scripts and Dark Mode Overrides right before </head>
  html = html.replace(/<\/head>/i, katexScripts + overrideCSS + "</head>");

  // 6. Inject Question/Example Numbers safely without doubling
  if (!isTheorem) {
    let count = 0;
    if (isExample) {
      // Examples: clean and prepend "Example {N}. " without duplication
      html = html.replace(/<div class="question">(\s*Example\s*\d+\.?\s*)?/gi, () => {
        count++;
        return `<div class="question">Example ${count}. `;
      });
    } else {
      // Exercises: clean and prepend "Q{N}. " without duplication
      html = html.replace(/<div class="question">(\s*\d+\.\s*)?/gi, () => {
        count++;
        return `<div class="question">Q${count}. `;
      });
    }
  }

  // Escape for embedded string
  return html.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

const examples = readHtml("examples.html", true);
const exercise1 = readHtml("exercise1.html", false);
const exercise2 = readHtml("exercise2.html", false);

const tsCode = `import { ChapterContent } from "../types";

export const mathCh7: ChapterContent = {
  id: "ch7",
  number: 7,
  title: "Coordinate Geometry",
  introduction: ${JSON.stringify(mathCh7.introduction)},
  definitions: ${JSON.stringify(mathCh7.definitions, null, 2)},
  keyPoints: ${JSON.stringify(mathCh7.keyPoints, null, 2)},
  formulas: ${JSON.stringify(mathCh7.formulas, null, 2)},
  crux: ${JSON.stringify(mathCh7.crux, null, 2)},
  summary: ${JSON.stringify(mathCh7.summary, null, 2)},
  examples: [],
  exercises: [
    { id: "examples", name: "Examples", questions: [] },
    { id: "exercise1", name: "Exercise 7.1", questions: [] },
    { id: "exercise2", name: "Exercise 7.2", questions: [] }
  ],
  theorems: ${JSON.stringify(mathCh7.theorems || [], null, 2)},
  mcqs: ${JSON.stringify(mathCh7.mcqs || [], null, 2)},
  isHtmlView: true,
  htmlExercises: {
    examples: \`${examples}\`,
    exercise1: \`${exercise1}\`,
    exercise2: \`${exercise2}\`
  }
};
`;

fs.writeFileSync(OUTPUT_FILE, tsCode, "utf-8");
console.log("math-ch7.ts generated successfully with layout changes and extra vertical spacing!");
