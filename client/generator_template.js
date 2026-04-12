const fs = require('fs');
const path = require('path');

const HTML_DIR = path.join(__dirname, 'data', 'math_ch8_html');
const OUTPUT_FILE = path.join(__dirname, 'data', 'content', 'math-ch8.ts');

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
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 150px !important; margin: 0 !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; }
  .formula-box { background: rgba(76, 175, 80, 0.1) !important; border-left: 4px solid #4CAF50 !important; color: #fff !important; }
  .question { color: #fff !important; text-align: justify !important; }
  .sub-question { color: #ddd !important; text-align: justify !important; }
  .step { color: #ccc !important; text-align: justify !important; }
  .final-answer { color: #4CAF50 !important; text-align: justify !important; }
  .formula { color: #4CAF50 !important; }
  .true-text { color: #4CAF50 !important; }
  .false-text { color: #F44336 !important; }
  table, th, td, tr { border-color: #555 !important; background: transparent !important; color: #fff !important; }
  .diagram-placeholder { background: transparent !important; color: #aaa !important; border-color: #555 !important; }
  img { background: transparent !important; border: none !important; box-shadow: none !important; filter: brightness(0.9) invert(1) hue-rotate(180deg); }
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


const mcqQuizScript = `
<style>
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
  }
  .shake { animation: shake 0.4s ease-in-out; }
  .option { padding: 8px 12px; border: 1px solid #555; border-radius: 6px; margin-bottom: 8px; display: block; cursor: pointer; transition: all 0.2s; }
  .option * { pointer-events: none; }
</style>
<div id="quiz-modal" style="display:none; position:absolute; left:0; width:100%; z-index:9999; justify-content:center; align-items:center; padding-bottom: 50px;">
   <div style="background: linear-gradient(135deg, #2b2b36, #1a1a2e); padding: 20px; border-radius: 16px; border: 2px solid #6C63FF; text-align: center; color: white; width: 80%; max-width: 350px; box-shadow: 0 5px 20px rgba(0,0,0,0.8);">
      <h2 style="margin:0; font-family:'Nunito',sans-serif; color: #4CAF50; font-size: 22px;">🎉 Quiz Completed!</h2>
      <p id="quiz-score" style="font-size: 22px; font-weight: bold; margin: 5px 0; color: #fff;"></p>
      <div style="display:flex; justify-content:space-around; margin: 10px 0;">
         <div style="color:#4CAF50; font-weight:bold; font-size: 14px;">✅ Correct<br><span id="quiz-correct" style="font-size:18px;">0</span></div>
         <div style="color:#F44336; font-weight:bold; font-size: 14px;">❌ Wrong<br><span id="quiz-wrong" style="font-size:18px;">0</span></div>
      </div>
      <button id="quiz-close" style="margin-top: 5px; padding: 10px 24px; border: none; border-radius: 8px; background: #6C63FF; color: white; font-weight: bold; font-size: 14px; cursor: pointer;">Play Again 🔄</button>
   </div>
</div>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    let score = 0;
    let answered = 0;
    const boxes = document.querySelectorAll('.content-box');
    const total = boxes.length;
    const modal = document.getElementById('quiz-modal');

    // Make options styled by css class directly rather than JS mostly, though JS overrides work
    
    boxes.forEach(box => {
      const answerEl = box.querySelector('.final-answer');
      if (!answerEl) return;
      
      let correctLetter = "";
      const match = answerEl.innerText.match(/\\(([A-D])\\)/);
      if (match) correctLetter = match[1];
      answerEl.style.display = 'none';

      const optionsContainer = box.querySelector('.options');
      const options = Array.from(box.querySelectorAll('.option'));
      
      optionsContainer.style.display = "flex";
      optionsContainer.style.flexDirection = "column";

      options.forEach(opt => {
        const optText = opt.innerText.trim();
        if (optText.startsWith("(" + correctLetter + ")")) {
           opt.dataset.isCorrect = "true";
        }
        
        opt.innerHTML = opt.innerHTML.replace(/^\\([A-D]\\)\\s*/, '');
        
        opt.onclick = () => {
          if (box.dataset.answered === "true") return;
          box.dataset.answered = "true";
          answered++;
          
          if (opt.dataset.isCorrect === "true") {
            opt.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
            opt.style.borderColor = '#4CAF50';
            score++;
          } else {
            opt.style.backgroundColor = 'rgba(244, 67, 54, 0.2)';
            opt.style.borderColor = '#F44336';
            opt.classList.add('shake');
            setTimeout(() => opt.classList.remove('shake'), 400);
            
            options.forEach(o => {
               if (o.dataset.isCorrect === "true") {
                  o.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
                  o.style.borderColor = '#4CAF50';
               }
            });
          }
          
          if (answered === total) {
             setTimeout(() => {
                 document.getElementById('quiz-score').innerText = Math.round((score/total)*100) + '%';
                 document.getElementById('quiz-correct').innerText = score;
                 document.getElementById('quiz-wrong').innerText = total - score;
                 
                 const rect = box.getBoundingClientRect();
                 modal.style.top = Math.max(0, rect.top - 100) + 'px';
                 modal.style.display = 'flex';
             }, 500);
          }
        };
      });
      shuffleOptions(optionsContainer, options);
    });

    function shuffleOptions(container, optsArray) {
        for (let i = optsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = optsArray[i];
            optsArray[i] = optsArray[j];
            optsArray[j] = temp;
        }
        optsArray.forEach(opt => container.appendChild(opt));
    }

    document.getElementById('quiz-close').onclick = () => {
       modal.style.display = 'none';
       score = 0;
       answered = 0;
       boxes.forEach(box => {
          box.dataset.answered = "false";
          const optionsContainer = box.querySelector('.options');
          const options = Array.from(box.querySelectorAll('.option'));
          options.forEach(opt => {
             opt.style.backgroundColor = 'transparent';
             opt.style.borderColor = '#555';
          });
          shuffleOptions(optionsContainer, options);
       });
       if (window.ReactNativeWebView) {
           window.ReactNativeWebView.postMessage("scroll_to_top");
       }
    };
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

    // Append interactive quiz logic ONLY to mcqs.html
    if (filename === "mcqs.html") {
        html = html.replace(/<\/body>/i, mcqQuizScript + "</body>");
    }

    // 4. Base64 encode images to prevent flickering or loading issues
    html = html.replace(/src="(images\/[^"]+)"/g, (match, p1) => {
        const fullImgPath = path.join(HTML_DIR, p1);
        const b64Src = encodeImage(fullImgPath);
        if (b64Src) return `src="${b64Src}"`;
        return match;
    });
    
    // Escape for embedded string
    return html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

const overview = readHtml("overview.html");
const exercise1 = readHtml("exercise1.html");
const exercise2 = readHtml("exercise.2.html");
const exercise3 = readHtml("exercise3.html");
const examples = readHtml("examples.html");
const mcqs = readHtml("mcqs.html");

const tsCode = `import { ChapterContent } from "../chapterContent";

export const mathCh8: ChapterContent = {
    id: "ch8",
    number: 8,
    title: "Introduction to Trigonometry",
    introduction: "Loading Chapter 8...",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    exercises: [
        { id: "exercise1", name: "Exercise 8.1", questions: [] },
        { id: "exercise2", name: "Exercise 8.2", questions: [] },
        { id: "exercise3", name: "Exercise 8.3", questions: [] }
    ],
    examples: [],
    theorems: [],
    mcqs: [],
    summary: [],

    isHtmlView: true,
    htmlOverview: \`${overview}\`,
    htmlExercises: {
        exercise1: \`${exercise1}\`,
        exercise2: \`${exercise2}\`,
        exercise3: \`${exercise3}\`,
        examples: \`${examples}\`
    },
    htmlMcqs: \`${mcqs}\`
};
`;

fs.writeFileSync(OUTPUT_FILE, tsCode, 'utf-8');
console.log("math-ch8.ts regenerated safely with dark mode, fast loading, and removed headers!");
