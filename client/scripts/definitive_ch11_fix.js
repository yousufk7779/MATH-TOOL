
const fs = require('fs');
const p = "d:\\All NCERT SOLUTIONS\\client\\data\\content\\math-ch11.ts";
let c = fs.readFileSync(p, 'utf8');

const headStyles = \`
  body { background: transparent !important; color: #fff !important; text-align: justify !important; padding-bottom: 200px !important; margin: 0 !important; }
  .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(255,255,255,0.1) !important; color: #fff !important; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
  .question { color: #fff !important; font-weight: 700; margin-bottom: 15px; }
  .option { padding: 10px 14px; border: 1px solid #555; border-radius: 6px; margin-bottom: 10px; display: block; cursor: pointer; transition: all 0.2s; }
  .correct { background: rgba(76, 175, 80, 0.2) !important; border-color: #4CAF50 !important; }
  .wrong { background: rgba(244, 67, 54, 0.2) !important; border-color: #F44336 !important; }
  @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-5px); } 40%, 80% { transform: translateX(5px); } }
  .shake { animation: shake 0.4s ease-in-out; }
  img { background: #FFFFFF !important; border-radius: 12px !important; padding: 12px !important; width: 100% !important; max-width: 320px !important; margin: 15px auto !important; border: 1px solid #e1e1e1 !important; filter: none !important; }
\`;

const modalHtml = \`
<div id="quiz-overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9998; backdrop-filter: blur(8px);"></div>
<div id="quiz-modal" style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); z-index:9999; width: 85%; max-width: 380px; box-sizing: border-box;">
   <div style="background: linear-gradient(135deg, #2b2b36, #1a1a2e); padding: 30px; border-radius: 24px; border: 2px solid #304FFE; text-align: center; color: white; box-shadow: 0 10px 40px rgba(0,0,0,0.9);">
      <h2 style="margin:0 0 15px 0; font-family:'Nunito',sans-serif; color: #4CAF50; font-size: 26px;">🎉 Well Done!</h2>
      <div id="quiz-score" style="font-size: 48px; font-weight: 900; margin: 20px 0; color: #fff;">0%</div>
      <div style="display:flex; justify-content:space-around; margin: 25px 0; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 15px;">
         <div style="color:#4CAF50; font-weight:bold; font-size: 14px;">✅ Correct<br><span id="quiz-correct" style="font-size:22px;">0</span></div>
         <div style="color:#F44336; font-weight:bold; font-size: 14px;">❌ Wrong<br><span id="quiz-wrong" style="font-size:22px;">0</span></div>
      </div>
      <button id="quiz-close" style="width: 100%; padding: 15px; border: none; border-radius: 12px; background: #304FFE; color: white; font-weight: 800; font-size: 16px; cursor: pointer;">Try Again 🔄</button>
   </div>
</div>
\`;

const scriptHtml = \`
<script>
  document.addEventListener("DOMContentLoaded", function() {
    let score = 0; let answered = 0;
    const boxes = document.querySelectorAll('.content-box');
    const total = boxes.length;
    const modal = document.getElementById('quiz-modal');
    const overlay = document.getElementById('quiz-overlay');

    boxes.forEach(box => {
      const answerEl = box.querySelector('.correct-answer');
      if (!answerEl) return;
      let correctLetter = "";
      const match = answerEl.innerText.match(/\\\\(([a-dA-D])\\\\)/);
      if (match) correctLetter = match[1].toLowerCase();
      answerEl.style.display = 'none';

      const options = Array.from(box.querySelectorAll('.option'));
      options.forEach(opt => {
        const t = opt.innerText.trim().toLowerCase();
        if (t.startsWith("(" + correctLetter + ")")) opt.dataset.isCorrect = "true";
        opt.onclick = () => {
          if (box.dataset.answered === "true") return;
          box.dataset.answered = "true";
          answered++;
          if (opt.dataset.isCorrect === "true") { opt.classList.add('correct'); score++; }
          else { opt.classList.add('wrong'); opt.classList.add('shake'); setTimeout(()=>opt.classList.remove('shake'),400); options.forEach(o => {if(o.dataset.isCorrect==='true') o.classList.add('correct');}); }
          if (answered === total) {
             setTimeout(() => {
                 document.getElementById('quiz-score').innerText = Math.round((score/total)*100) + '%';
                 document.getElementById('quiz-correct').innerText = score;
                 document.getElementById('quiz-wrong').innerText = total - score;
                 overlay.style.display = 'block'; modal.style.display = 'block';
                 document.body.style.height = '100vh'; document.body.style.overflow = 'hidden';
                 document.documentElement.style.height = '100vh'; document.documentElement.style.overflow = 'hidden';
                 if (window.ReactNativeWebView) window.ReactNativeWebView.postMessage("scroll_to_top");
                 window.scrollTo(0,0);
             }, 500);
          }
        };
      });
      shuffleOptions(box.querySelector('.options'), options);
    });

    function shuffleOptions(c, a) {
       for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
       }
       a.forEach(o => c.appendChild(o));
    }

    document.getElementById('quiz-close').onclick = () => {
       overlay.style.display = 'none'; modal.style.display = 'none';
       document.body.style.height = 'auto'; document.body.style.overflow = 'auto';
       document.documentElement.style.height = 'auto'; document.documentElement.style.overflow = 'auto';
       score = 0; answered = 0;
       boxes.forEach(b => {
          b.dataset.answered = "false";
          Array.from(b.querySelectorAll('.option')).forEach(o => o.classList.remove('correct', 'wrong', 'shake'));
          shuffleOptions(b.querySelector('.options'), Array.from(b.querySelectorAll('.option')));
       });
       window.scrollTo(0,0);
    };
  });
</script>
\`;

// REWRITE
const exerciseEnd = '</body></html>`\\n    },';
const mcqKey = 'htmlMcqs:';
let parts = c.split(exerciseEnd);
if(parts.length < 2) { console.log('EXERCISE END NOT FOUND'); process.exit(1); }

// Everything after exerciseEnd should be replaced
// Find first content-box in what's left
let rest = c.substring(c.indexOf(exerciseEnd) + exerciseEnd.length);
let mcqBodyStart = rest.indexOf('<div class="content-box">');
let mcqBodyEnd = rest.lastIndexOf('</div>');
let mcqBody = rest.substring(mcqBodyStart, mcqBodyEnd + 6);

let finalHtmlMcqs = \`\\n    htmlMcqs: \\\`<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><style>\` + headStyles + \`</style></head><body>\` + modalHtml + mcqBody + scriptHtml + \`</body></html>\\\`\\n};\`;

fs.writeFileSync(p, parts[0] + exerciseEnd + finalHtmlMcqs, 'utf8');
console.log('SUCCESS REPAIRED');
