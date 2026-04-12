const fs = require('fs');
const path = require('path');

const HTML_DIR = path.join(__dirname, 'data', 'chapter14');
const OUTPUT_FILE = path.join(__dirname, 'data', 'content', 'math-ch14.ts');

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
  .formula-box { background: rgba(108, 99, 255, 0.1) !important; border-left: 4px solid #66BB6A !important; color: #fff !important; }
  h1, h2, h3, h4, h5, h6 { color: #66BB6A !important; }
  .question { color: #66BB6A !important; text-align: justify !important; font-weight: bold !important; font-family: 'Noto Sans', sans-serif !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; font-family: 'Noto Sans', sans-serif !important; }
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
    
    return html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function parseMcqs() {
    const filepath = path.join(HTML_DIR, "Probability_MCQs.html");
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
            
            questionText = questionText.replace(/\\(sqrt|text|circ|theta|frac|pi|bar|sum|mu|sigma|alpha|beta|gamma)/g, (match, p1) => {
                if (p1 === 'sqrt') return '√';
                if (p1 === 'text') return '';
                if (p1 === 'circ') return '°';
                if (p1 === 'theta') return 'θ';
                if (p1 === 'pi') return 'π';
                if (p1 === 'bar') return '̄';
                if (p1 === 'sum') return 'Σ';
                if (p1 === 'sigma') return 'σ';
                return match;
            });
            questionText = questionText.replace(/\{([^\}]+)\}/g, '$1').replace(/[\{\}]/g, '');

            const options = optMatch.map(m => {
                let text = m[1].replace(/^\(?([A-Da-d])\)?\s*[\.\:]?\s*/i, '').trim();
                text = text.replace(/\\sqrt\{(\d+)\}/g, '√$1');
                text = text.replace(/\\frac\{([^\}]+)\}\{([^\}]+)\}/g, '<sup>$1</sup>&frasl;<sub>$2</sub>');
                text = text.replace(/\\circ/g, '°');
                text = text.replace(/\\theta/g, 'θ');
                text = text.replace(/\\pi/g, 'π');
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

const overview = readHtml("Probability_Overview.html");
const exercise1 = readHtml("Probability_Exercise_14.1.html");
const examples = readHtml("Probability_Examples.html");
const mcqArray = parseMcqs();

const tsCode = `import { ChapterContent } from "../chapterContent";

export const mathCh14: ChapterContent = {
    id: "ch14",
    number: 14,
    title: "Probability",
    introduction: "In this concluding chapter, we explore the mathematics of chance. We focus on calculating the theoretical probability of events based on possible outcomes and favourable cases, applying these concepts to real-world scenarios like coin tosses, dice rolls, and card draws.",
    definitions: [
        { term: "Probability", description: "A numerical measure ranging from 0 to 1 that represents the likelihood of an event occurring." },
        { term: "Sure Event", description: "An event that is certain to happen, with a probability of 1." },
        { term: "Impossible Event", description: "An event that cannot happen, with a probability of 0." }
    ],
    keyPoints: [
        "The sum of probabilities of all elementary events in an experiment is always 1.",
        "Complementary events (P(E) and P(not E)) always satisfy: P(E) + P(not E) = 1.",
        "Probability values are always within the range [0, 1]."
    ],
    formulas: [
        { name: "Theoretical Prob.", formula: "P(E) = (Favourable Outcomes) / (Total Outcomes)" },
        { name: "Complementary Event", formula: "P(not E) = 1 - P(E)" }
    ],
    crux: [
        "Always calculate the Total Sample Space first before looking for favourable outcomes.",
        "For complementary events, it's often easier to calculate 1 - P(Other Event).",
        "Be careful with keywords like 'at least', 'at most', and 'greater than' when counting outcomes."
    ],
    exercises: [
        { id: "exercise1", name: "Exercise 14.1", questions: [] }
    ],
    examples: [
        { id: "examples", name: "Examples", questions: [] }
    ],
    theorems: [],
    mcqs: ${JSON.stringify(mcqArray, null, '\t\t')},
    summary: [
        "Mastered the basic definition and calculation of theoretical probability.",
        "Learned to handle complementary, sure, and impossible events.",
        "Applied probability to a wide variety of practical and theoretical experiments."
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
console.log("math-ch14.ts generated successfully with Native MCQ Quiz support!");
