const fs = require('fs');
const path = require('path');

const CHAPTER_NAME = 'chapter11';
const HTML_DIR = path.join(__dirname, 'data', CHAPTER_NAME);
const OUTPUT_FILE = path.join(__dirname, 'data', 'content', 'math-ch11.ts');

function encodeImage(imgPath) {
    if (!fs.existsSync(imgPath)) {
        // Try in images subdirectory
        const altPath = path.join(path.dirname(imgPath), 'images', path.basename(imgPath));
        if (fs.existsSync(altPath)) imgPath = altPath;
        else return "";
    }
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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #FF4081 !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #FF4081 !important; }
  .question { color: #FF4081 !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
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

function parseMcqs() {
    const filepath = path.join(HTML_DIR, "Areas_Related_to_Circles_MCQs.html");
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
            
            // Basic math cleaning
            questionText = questionText.replace(/\\(sqrt|text|circ|theta|frac|pi|bar|sum|mu|sigma|alpha|beta|gamma)/g, (match, p1) => {
                if (p1 === 'sqrt') return '√';
                if (p1 === 'text') return '';
                if (p1 === 'circ') return '°';
                return match;
            });
            questionText = questionText.replace(/\{([^\}]+)\}/g, '$1').replace(/[\{\}]/g, '');

            const options = optMatch.map(m => {
                let text = m[1].replace(/^\s*\(?([A-Da-d])\)?\s*[\.\:]?\s*/i, '').trim();
                
                // Final LaTeX cleaning for options
                text = text.replace(/\\sqrt\{(\d+)\}/g, '√$1');
                text = text.replace(/\\frac\{([^\}]+)\}\{([^\}]+)\}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
                text = text.replace(/\\circ/g, '°');
                text = text.replace(/\\text\{([^\}]+)\}/g, '$1');
                text = text.replace(/\{([^\}]+)\}/g, '$1');

                // Large padding and line-height for a professional MCQ section
                return `<div style="padding-top: 15px; padding-bottom: 15px; line-height: 2.0; font-family: 'Noto Sans', sans-serif;">${text.trim()}</div>`;
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

const overview = readHtml("Areas_Related_to_Circles_Overview.html");
const exercise1 = readHtml("Areas_Related_to_Circles_Exercise_11.1.html");
const examples = readHtml("Areas_Related_to_Circles_Examples.html");
const mcqArray = parseMcqs();

const tsCode = `import { ChapterContent } from "../chapterContent";

export const mathCh11: ChapterContent = {
    id: "ch11",
    number: 11,
    title: "Areas Related to Circles",
    introduction: "In this chapter, we explore the measurement of planar figures related to circles, including sectors and segments, using algebraic and geometric principles.",
    definitions: [
        { term: "Sector", description: "The region between two radii and the corresponding arc of a circle." },
        { term: "Segment", description: "The region between a chord and the corresponding arc of a circle." },
        { term: "Arc", description: "A part of the circumference of a circle." }
    ],
    keyPoints: [
        "Area of a circle = πr²",
        "Circumference of a circle = 2πr",
        "Area of a sector of angle θ = (θ/360) × πr²",
        "Length of an arc of a sector of angle θ = (θ/360) × 2πr"
    ],
    formulas: [
        { name: "Area of Sector", formula: "<sup>θ</sup>&frasl;<sub>360</sub> × πr²" },
        { name: "Arc Length", formula: "<sup>θ</sup>&frasl;<sub>360</sub> × 2πr" },
        { name: "Area of Segment", formula: "Area of Sector - Area of Triangle" }
    ],
    crux: [
        "Always identify the radius and the angle subtended at the center.",
        "For segments, area of the triangle can often be found using (1/2)r² sin θ."
    ],
    exercises: [
        { id: "exercise1", name: "Exercise 11.1", questions: [] }
    ],
    examples: [
        { id: "examples", name: "Examples", questions: [] }
    ],
    theorems: [],
    mcqs: ${JSON.stringify(mcqArray, null, '\t\t')},
    summary: [
        "We learned to calculate area and perimeter of circles and their parts.",
        "Applied these concepts to solve real-world problems like clock hands and brooch designs."
    ],

    isHtmlView: true,
    htmlOverview: \`${overview}\`,
    htmlExercises: {
        exercise1: \`${exercise1}\`,
        examples: \`${examples}\`
    }
};
`;

fs.writeFileSync(OUTPUT_FILE, tsCode, 'utf-8');
console.log("math-ch11.ts generated successfully with standard Native MCQs and height fix!");
