
const fs = require('fs');
const p = "d:\\All NCERT SOLUTIONS\\client\\data\\content\\math-ch11.ts";
let content = fs.readFileSync(p, 'utf8');

const headStyles = \`
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 200px !important; margin: 0 !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
  .question { color: #fff !important; font-weight: 700; margin-bottom: 15px; }
  .option { padding: 8px 12px; border: 1px solid #555; border-radius: 6px; margin-bottom: 8px; display: block; cursor: pointer; transition: all 0.2s; }
  .option.correct { background: rgba(76, 175, 80, 0.2) !important; border-color: #4CAF50 !important; }
  .option.wrong { background: rgba(244, 67, 54, 0.2) !important; border-color: #F44336 !important; }
  @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-5px); } 40%, 80% { transform: translateX(5px); } }
  .shake { animation: shake 0.4s ease-in-out; }
  img { background: #FFFFFF !important; border-radius: 12px !important; padding: 12px !important; width: 100% !important; max-width: 320px !important; margin: 15px auto !important; border: 1px solid #e1e1e1 !important; filter: none !important; }
\`;

const modalHtml = \`
<div id=\"quiz-modal\" style=\"display:none; position:absolute; left:0; width:100%; z-index:9999; justify-content:center; align-items:center; padding-bottom: 50px;\">
   <div style=\"background: linear-gradient(135deg, #2b2b36, #1a1a2e); padding: 20px; border-radius: 16px; border: 2px solid #304FFE; text-align: center; color: white; width: 80%; max-width: 350px; box-shadow: 0 5px 20px rgba(0,0,0,0.8);\">
      <h2 style=\"margin:0; font-family:'Nunito',sans-serif; color: #4CAF50; font-size: 22px;\">🎉 Quiz Completed!</h2>
      <div id=\"quiz-score\" style=\"font-size: 32px; font-weight: bold; margin: 15px 0; color: #fff;\">0%</div>
      <div style=\"display:flex; justify-content:space-around; margin: 10px 0;\">
         <div style=\"color:#4CAF50; font-weight:bold; font-size: 14px;\">✅ Correct<br><span id=\"quiz-correct\" style=\"font-size:18px;\">0</span></div>
         <div style=\"color:#F44336; font-weight:bold; font-size: 14px;\">❌ Wrong<br><span id=\"quiz-wrong\" style=\"font-size:18px;\">0</span></div>
      </div>
      <button id=\"quiz-close\" style=\"width: 100%; padding: 12px; border: none; border-radius: 10px; background: #304FFE; color: white; font-weight: 800; font-size: 15px; cursor: pointer;\">Try Again 🔄</button>
   </div>
</div>\`;

const scriptJs = \`
<script>
  document.addEventListener(\"DOMContentLoaded\", function() {
    let score = 0;
    let answered = 0;
    const boxes = document.querySelectorAll('.content-box');
    const total = boxes.length;
    const modal = document.getElementById('quiz-modal');

    boxes.forEach(box => {
      const answerEl = box.querySelector('.correct-answer');
      if (!answerEl) return;
      
      let correctLetter = \"\";
      const match = answerEl.innerText.match(/\\\\(([a-dA-D])\\\\)/);
      if (match) correctLetter = match[1].toLowerCase();
      answerEl.style.display = 'none';

      const optionsContainer = box.querySelector('.options');
      const options = Array.from(box.querySelectorAll('.option'));

      options.forEach(opt => {
        const optText = opt.innerText.trim().toLowerCase();
        if (optText.startsWith(\"(\" + correctLetter + \")\")) { opt.dataset.isCorrect = \"true\"; }
        
        opt.onclick = () => {
          if (box.dataset.answered === \"true\") return;
          box.dataset.answered = \"true\";
          answered++;
          
          if (opt.dataset.isCorrect === \"true\") {
            opt.classList.add('correct');
            score++;
          } else {
            opt.classList.add('wrong');
            opt.classList.add('shake');
            setTimeout(() => {
                opt.classList.remove('shake');
                options.forEach(o => { if (o.dataset.isCorrect === \"true\") o.classList.add('correct'); });
            }, 400);
          }
          
          if (answered === total) {
             setTimeout(() => {
                 document.getElementById('quiz-score').innerText = Math.round((score/total)*100) + '%';
                 document.getElementById('quiz-correct').innerText = score;
                 document.getElementById('quiz-wrong').innerText = total - score;
                 
                 const rect = box.getBoundingClientRect();
                 const scrollY = window.pageYOffset || document.documentElement.scrollTop;
                 modal.style.top = (rect.top + scrollY - 100) + 'px';
                 modal.style.display = 'flex';
                 if (window.ReactNativeWebView) { window.ReactNativeWebView.postMessage(\"scroll_to_top\"); }
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
       score = 0; answered = 0;
       boxes.forEach(box => {
          box.dataset.answered = \"false\";
          const opts = Array.from(box.querySelectorAll('.option'));
          opts.forEach(o => { o.classList.remove('correct', 'wrong', 'shake'); });
          shuffleOptions(box.querySelector('.options'), opts);
       });
       window.scrollTo(0, 0);
    };
  });
</script>\`;

// Find htmlMcqs
const key = \"htmlMcqs: \\\`<!DOCTYPE html><html lang=\\\"en\\\">\";
const pre = content.substring(0, content.lastIndexOf(key));
const mcqContent = content.substring(content.lastIndexOf(key));

const bodyStart = mcqContent.indexOf('<div class=\"content-box\">');
const mcqs = mcqContent.substring(bodyStart, mcqContent.lastIndexOf('</body>'));

const finalHtml = \`htmlMcqs: \\\`<!DOCTYPE html><html lang=\\\"en\\\"><head><meta charset=\\\"UTF-8\\\"><meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"><style>\` + headStyles + \`</style></head><body>\` + modalHtml + mcqs + scriptJs + \`</body></html>\\\`\\n};\`;

fs.writeFileSync(p, pre + finalHtml, 'utf8');
console.log(\"DONE\");
