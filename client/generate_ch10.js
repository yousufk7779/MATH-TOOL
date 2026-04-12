const fs = require('fs');
const path = require('path');

const HTML_DIR = path.join(__dirname, 'data', 'chapter10');
const OUTPUT_FILE = path.join(__dirname, 'data', 'content', 'math-ch10.ts');

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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FFB74D !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FFB74D !important; }
  .question { color: #FFB74D !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .step { color: #ccc !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; font-weight: bold !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); max-width: 100% !important; height: auto !important; }
  .section-title { color: #FFB74D !important; font-weight: 700 !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; font-family: 'Noto Sans', sans-serif !important; }
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
    
    // 1. Remove the header section with "JIGUU" and Chapter name
    html = html.replace(/<div class="header">[\s\S]*?<div class="chapter-title">[^<]*<\/div>\s*<\/div>/gi, '');

    // 2. Remove slow MathJax script
    html = html.replace(/<script[^>]*MathJax-script[^>]*><\/script>/gi, '');
    html = html.replace(/<script src="https:\/\/polyfill.io\/v3\/polyfill.min.js\?features=es6"><\/script>/gi, '');

    // 3. Inject Fast KaTeX scripts and Dark Mode Overrides right before </head>
    html = html.replace(/<\/head>/i, katexScripts + overrideCSS + "</head>");

    // 4. Base64 encode images
    html = html.replace(/src="(images\/[^"]+)"/g, (match, p1) => {
        const fullImgPath = path.join(HTML_DIR, p1);
        const b64Src = encodeImage(fullImgPath);
        if (b64Src) return `src="${b64Src}"`;
        return match;
    });
    
    // Escape for embedded string
    return html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function parseMcqs() {
    const filepath = path.join(HTML_DIR, "mcqs.html");
    if (!fs.existsSync(filepath)) return [];
    let html = fs.readFileSync(filepath, 'utf-8');
    
    const mcqs = [];
    const boxes = html.split('<div class="content-box">').slice(1);
    
    boxes.forEach((boxContent, idx) => {
        const qMatch = boxContent.match(/<div class="question">([\s\S]*?)<\/div>/);
        const optMatch = [...boxContent.matchAll(/<(?:span|div) class="option">([\s\S]*?)<\/(?:span|div)>/g)];
        const ansMatch = boxContent.match(/<(?:div|span) class="(?:final-answer|correct-answer|answer)">([\s\S]*?)<\/(?:div|span)>/);

        if (qMatch && optMatch.length >= 4 && ansMatch) {
            let questionText = qMatch[1].replace(/^\d+\.\s*/, '').replace(/\s+/g, ' ').trim();
            
            // Clean up math in question
            questionText = questionText.replace(/\\(sqrt|text|circ|theta|frac)/g, (match, p1) => {
                if (p1 === 'sqrt') return '√';
                if (p1 === 'text') return '';
                if (p1 === 'circ') return '°';
                if (p1 === 'theta') return 'θ';
                return match;
            });
            questionText = questionText.replace(/\{(\d+)\}/g, '$1').replace(/[\{\}]/g, '');

            const options = optMatch.map(m => {
                let text = m[1].replace(/^\(?([A-Da-d])\)?\s*[\.\:]?\s*/i, '').trim();
                text = text.replace(/\\sqrt\{(\d+)\}/g, '√$1');
                text = text.replace(/\\frac\{([^\}]+)\}\{([^\}]+)\}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
                text = text.replace(/\\circ/g, '°');
                text = text.replace(/\\theta/g, 'θ');
                text = text.replace(/\\text\{([^\}]+)\}/g, '$1');
                text = text.replace(/\{([^\}]+)\}/g, '$1');
                if (!text.includes('sup') && text.match(/^\d+\/\d+$/)) {
                    text = text.replace(/(\d+)\/(\d+)/, '<sup>$1</sup>&frasl;<sub>$2</sub>');
                }
                return text;
            });

            const ansRaw = ansMatch[1].toUpperCase();
            let correctLetter = "";
            const letterMatch = ansRaw.match(/\(([A-D])\)/);
            if (letterMatch) {
                correctLetter = letterMatch[1];
            } else {
                const altMatch = ansRaw.match(/\b([A-D])\b/);
                if (altMatch) correctLetter = altMatch[1];
            }

            let correctAnswer = "";
            if (correctLetter) {
                const cIdx = correctLetter.charCodeAt(0) - 65;
                correctAnswer = options[cIdx] || "";
            }

            mcqs.push({
                id: `mcq${idx + 1}`,
                question: `<span style="font-weight: normal;">${questionText}</span>`,
                options: options,
                correctAnswer: correctAnswer
            });
        }
    });

    return mcqs;
}

const overview = readHtml("overview.html");
const theorems = readHtml("theorems.html");
const exercise1 = readHtml("exercise1.html");
const exercise2 = readHtml("exercise2.html");
const examples = readHtml("examples.html");
const mcqArray = parseMcqs();

const tsCode = `import { ChapterContent } from "../chapterContent";

export const mathCh10: ChapterContent = {
    id: "ch10",
    number: 10,
    title: "Circles",
    introduction: "In this chapter, we explore the properties of circles, focus on the geometry of tangents, and prove fundamental theorems about the relationship between a circle and its tangent lines.",
    definitions: [
        { term: "Tangent", description: "A line that touches a circle at exactly one point." },
        { term: "Secant", description: "A line that intersects a circle at two distinct points." },
        { term: "Point of Contact", description: "The single point where a tangent touches the circle." }
    ],
    keyPoints: [
        "A tangent is perpendicular to the radius at the point of contact.",
        "The lengths of tangents drawn from an external point to a circle are equal.",
        "There is only one tangent at any point on a circle."
    ],
    formulas: [
        { name: "Tangent-Radius Relation", formula: "OP ⊥ XY" },
        { name: "External Tangents", formula: "PQ = PR" }
    ],
    crux: [
        "Always draw the radius to the point of contact for right-angle properties.",
        "Use Pythagoras theorem in problems involving tangent lengths and radii.",
        "Remember that tangents from an external point form an isosceles triangle with the chord of contact."
    ],
    exercises: [
        { id: "theorems", name: "Theorems", questions: [] },
        { id: "examples", name: "Examples", questions: [] },
        { id: "exercise1", name: "Exercise 10.1", questions: [] },
        { id: "exercise2", name: "Exercise 10.2", questions: [] }
    ],
    examples: [],
    theorems: [],
    mcqs: ${JSON.stringify(mcqArray, null, '\t\t')},
    summary: [
        "Learned that tangents are perpendicular to the radius at the point of contact.",
        "Proved that tangents from an external point are equal in length.",
        "Solved various problems using these properties."
    ],

    isHtmlView: true,
    htmlOverview: \`${overview}\`,
    htmlExercises: {
        theorems: \`${theorems}\`,
        examples: \`${examples}\`,
        exercise1: \`${exercise1}\`,
        exercise2: \`${exercise2}\`
    }
};
`;

fs.writeFileSync(OUTPUT_FILE, tsCode, 'utf-8');
console.log("math-ch10.ts generated successfully with Native MCQ Quiz support!");
