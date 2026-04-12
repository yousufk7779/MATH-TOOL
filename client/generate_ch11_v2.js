const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, 'assets', 'chapters', 'chapter11');
const targetFile = path.join(__dirname, 'data', 'content', 'math-ch11.ts');

const readFile = (name) => fs.readFileSync(path.join(chDir, name), 'utf8');

const overview = readFile('overview.html');
const exercise1 = readFile('exercise1.html');
const examples = readFile('examples.html');
const mcqs = readFile('mcqs.html');

const cleanHtml = (html, isMcq = false) => {
    // Remove headers/titles
    html = html.replace(/<div class="header">[\s\S]*?<\/div>/g, '');
    html = html.replace(/<div class="chapter-title">[\s\S]*?<\/div>/g, '');
    html = html.replace(/<title>[\s\S]*?<\/title>/g, '');
    
    // Fix malformed SVGs before encoding local images (if any)
    // The pattern is: stroke="stroke=" gray"="" or stroke="pink"=" "
    // We'll normalize these weird forms.
    html = html.replace(/stroke="stroke="?\s*([^"]+)"?\s*=""/g, 'stroke="$1"');
    html = html.replace(/fill="fill="?\s*([^"]+)"?\s*=""/g, 'fill="$1"');

    if (isMcq) {
        // PER USER REQUEST: Remove images from MCQs
        html = html.replace(/<img[^>]+>/g, '');
    }

    return html;
};

const encodeImages = (html, color = '#304FFE') => {
    return html.replace(/<img[^>]+src="([^"]+)"[^>]*>/g, (match, src) => {
        let updatedSvgBase64 = src;
        
        if (src.startsWith('data:image/svg+xml;base64,')) {
            const base64Part = src.split(',')[1];
            let decoded = Buffer.from(base64Part, 'base64').toString('utf8');
            
            // Fix malformed attributes inside the SVG
            decoded = decoded
                .replace(/stroke="stroke="?\s*([^"]+)"?\s*=""/g, 'stroke="$1"')
                .replace(/fill="fill="?\s*([^"]+)"?\s*=""/g, 'fill="$1"');
            
            // Leave colors as they are so the CSS filter can handle them
            updatedSvgBase64 = `data:image/svg+xml;base64,${Buffer.from(decoded).toString('base64')}`;
        }
        
        return match.replace(src, updatedSvgBase64);
    });
};

const injectStyles = (html) => {
    const katex = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\\\\\\\(', right: '\\\\\\\\)', display: false},
        {left: '\\\\\\\\[', right: '\\\\\\\\]', display: true},
        {left: '\\\\(', right: '\\\\)', display: false},
        {left: '$', right: '$', display: true}
      ],
      throwOnError : false
    });
  });
</script>
`;

    const commonStyles = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@400;700&display=swap');
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 200px !important; margin: 0 !important; font-family: 'Noto Sans', sans-serif !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; padding: 15px !important; border-radius: 12px !important; margin-bottom: 20px !important; }
  .question { color: #fff !important; font-weight: bold !important; margin-bottom: 15px !important; font-size: 1.1em !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding-bottom: 10px !important; }
  .step { background: rgba(48, 79, 254, 0.1) !important; border-left: 4px solid #304FFE !important; color: #eee !important; padding: 10px !important; border-radius: 4px !important; margin-bottom: 8px !important; }
  .final-answer { color: #4CAF50 !important; font-weight: bold !important; margin-top: 10px !important; font-size: 1.1em !important; }
  .exercise-title { text-align: center !important; font-size: 1.5em !important; border-bottom: 2px solid #304FFE !important; margin-bottom: 20px !important; font-family: 'Nunito', sans-serif !important; color: #6C63FF !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg) !important; max-width: 100% !important; height: auto !important; margin: 10px auto !important; display: block !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .solution-header { color: #4CAF50 !important; font-weight: bold !important; margin-bottom: 8px !important; }
  .section-title { color: #64B5F6 !important; font-weight: bold !important; font-size: 1.2em !important; margin-top: 20px !important; margin-bottom: 10px !important; }
  .highlight-text { color: #304FFE !important; font-weight: bold !important; }
</style>
`;
    // Head part
    return html.replace(/<\/head>/, `${katex}${commonStyles}</head>`);
};

// MCQ Logic injection remains the same but handles the missing images
const injectMcqLogic = (html) => {
    const mcqLogic = `
<style>
    .options { display: flex; flex-direction: column; gap: 10px; margin: 15px 0; }
    .option { padding: 12px 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; cursor: pointer; color: #eee; transition: all 0.2s ease; }
    .option:active { transform: scale(0.98); }
    .option.correct { background: rgba(76, 175, 80, 0.2) !important; border-color: #4CAF50 !important; color: #fff !important; }
    .option.wrong { background: rgba(244, 67, 54, 0.2) !important; border-color: #F44336 !important; color: #fff !important; }
    .shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
    @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
    .correct-answer, .step { display: none; }
    #result-modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); display: none; justify-content: center; alignItems: center; z-index: 1000; }
    .modal-content { background: #1e1e2e; padding: 30px; border-radius: 20px; text-align: center; width: 80%; max-width: 300px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .modal-title { font-size: 24px; color: #fff; margin-bottom: 10px; font-family: 'Nunito', sans-serif; }
    .modal-score { font-size: 18px; color: #64B5F6; margin-bottom: 20px; }
    .modal-btn { background: #304FFE; color: #fff; padding: 12px 25px; border-radius: 10px; border: none; font-weight: bold; cursor: pointer; font-size: 16px; width: 100%; }
</style>
<div id="result-modal">
    <div class="modal-content">
        <div class="modal-title">Quiz Finished!</div>
        <div id="score-text" class="modal-score"></div>
        <button class="modal-btn" onclick="resetQuiz()">Retake Quiz</button>
    </div>
</div>
<script>
    let score = 0;
    let answered = 0;
    let total = 0;

    function initQuiz() {
        const containers = document.querySelectorAll('.content-box');
        total = containers.length;
        containers.forEach((box, idx) => {
            const optionsDiv = box.querySelector('.options');
            const options = Array.from(optionsDiv.querySelectorAll('.option'));
            const correctText = box.querySelector('.correct-answer').innerText.replace('Answer:', '').trim();
            
            // Shuffle
            options.sort(() => Math.random() - 0.5);
            optionsDiv.innerHTML = '';
            options.forEach(opt => {
                opt.onclick = function() {
                    if (box.dataset.answered) return;
                    box.dataset.answered = true;
                    answered++;
                    const isCorrect = opt.innerText.trim().startsWith(correctText.split(' ')[0]);
                    if (isCorrect) {
                        opt.classList.add('correct');
                        score++;
                    } else {
                        opt.classList.add('wrong');
                        box.classList.add('shake');
                        options.forEach(o => {
                            if (o.innerText.trim().startsWith(correctText.split(' ')[0])) o.classList.add('correct');
                        });
                    }
                    if (answered === total) showResult();
                };
                optionsDiv.appendChild(opt);
            });
        });
    }

    function showResult() {
        document.getElementById('score-text').innerText = 'Correct: ' + score + ' / ' + total;
        document.getElementById('result-modal').style.display = 'flex';
        if (window.ReactNativeWebView) window.ReactNativeWebView.postMessage("scroll_to_top");
    }

    function resetQuiz() {
        location.reload();
    }

    window.onload = initQuiz;
</script>
`;
    return html.replace(/<\/body>/, `${mcqLogic}</body>`);
};

const processedOverview = encodeImages(injectStyles(cleanHtml(overview)));
const processedExercise1 = encodeImages(injectStyles(cleanHtml(exercise1)));
const processedExamples = encodeImages(injectStyles(cleanHtml(examples)));
const processedMcqs = injectMcqLogic(injectStyles(cleanHtml(mcqs, true)));

const fileContent = `import { ChapterContent } from "../chapterContent";

export const mathCh11: ChapterContent = {
    id: "ch11",
    number: 11,
    title: "Areas Related to Circles",
    introduction: "In this chapter, we explore the measurement of planar figures related to circles, including sectors and segments, using algebraic and geometric principles.",
    definitions: [
        { term: "Sector", description: "The region between two radii and the corresponding arc of a circle." },
        { term: "Segment", description: "The region between a chord and the corresponding arc of a circle." }
    ],
    keyPoints: [
        "Area of a circle = πr²",
        "Circumference of a circle = 2πr",
        "Area of a sector of angle θ = (θ/360) × πr²",
        "Length of an arc of a sector of angle θ = (θ/360) × 2πr"
    ],
    formulas: [
        { name: "Area of Sector", formula: "(θ/360) × πr²" },
        { name: "Area of Segment", formula: "Area of Sector - Area of Triangle" }
    ],
    crux: [
        "Always identify the radius and the angle subtended at the center.",
        "For segments, area of the triangle can often be found using (1/2)r² sin θ."
    ],
    exercises: [
        { id: "exercise1", name: "Exercise 11.1", questions: [] }
    ],
    // DUMMY ENTRY TO ENSURE EXAMPLES TAB SHOWS UP IN SolutionsScreen
    examples: [
        { id: "examples-dummy", number: "1", question: "Solved Examples", solution: [], answer: "" }
    ],
    theorems: [],
    mcqs: [],
    summary: [
        "We learned to calculate area and perimeter of circles and their parts.",
        "Applied these concepts to solve real-world problems like clock hands and brooch designs."
    ],

    isHtmlView: true,
    htmlOverview: \`${processedOverview.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    htmlExercises: {
        exercise1: \`${processedExercise1.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
        examples: \`${processedExamples.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    },
    htmlMcqs: \`${processedMcqs.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
};
`;

fs.writeFileSync(targetFile, fileContent);
console.log('Chapter 11 integrated successfully with fixed SVG and examples tab.');
