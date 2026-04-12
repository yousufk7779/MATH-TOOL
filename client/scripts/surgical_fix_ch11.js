
const fs = require('fs');
const p = "d:\\All NCERT SOLUTIONS\\client\\data\\content\\math-ch11.ts";
let content = fs.readFileSync(p, 'utf8');

// Find the start of the MCQ section
const mcqKey = "htmlMcqs: \`<!DOCTYPE";
const mcqEndKey = "</body></html>\`;";

const startIdx = content.lastIndexOf(mcqKey);
const endIdx = content.indexOf(mcqEndKey, startIdx);

if (startIdx === -1 || (endIdx === -1 && content.indexOf("</body></html>`\r\n};") === -1)) {
    console.log("MARKERS NOT FOUND");
    process.exit(1);
}

// Just replace the problematic JS logic with a clean one
const scriptStart = content.indexOf("<script>", startIdx);
const scriptEnd = content.indexOf("</script>", scriptStart);

const cleanScript = `
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
      const match = answerEl.innerText.match(/\\(([a-dA-D])\\)/);
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
          
          if (opt.dataset.isCorrect === "true") {
            opt.classList.add('correct');
            score++;
          } else {
            opt.classList.add('wrong');
            opt.classList.add('shake');
            setTimeout(() => {
                opt.classList.remove('shake');
                options.forEach(o => { if (o.dataset.isCorrect === "true") o.classList.add('correct'); });
            }, 400);
          }
          
          if (answered === total) {
             setTimeout(() => {
                 document.getElementById('quiz-score').innerText = Math.round((score/total)*100) + '%';
                 document.getElementById('quiz-correct').innerText = score;
                 document.getElementById('quiz-wrong').innerText = total - score;
                 if(overlay) overlay.style.display = 'block';
                 if(modal) {
                    modal.style.display = 'flex'; // Centered viewport placement
                    modal.style.position = 'fixed';
                    modal.style.top = '50%';
                    modal.style.left = '50%';
                    modal.style.transform = 'translate(-50%, -50%)';
                 }
                 
                 // STOP SCROLLING
                 document.body.style.height = '100vh';
                 document.body.style.overflow = 'hidden';
                 document.documentElement.style.height = '100vh';
                 document.documentElement.style.overflow = 'hidden';
                 
                 if (window.ReactNativeWebView) window.ReactNativeWebView.postMessage("scroll_to_top");
                 window.scrollTo(0, 0);
             }, 600);
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

    const closeBtn = document.getElementById('quiz-close');
    if(closeBtn) closeBtn.onclick = () => {
       if(overlay) overlay.style.display = 'none';
       if(modal) modal.style.display = 'none';
       document.body.style.height = 'auto'; document.body.style.overflow = 'auto';
       document.documentElement.style.height = 'auto'; document.documentElement.style.overflow = 'auto';
       score = 0; answered = 0;
       boxes.forEach(b => {
          b.dataset.answered = "false";
          Array.from(b.querySelectorAll('.option')).forEach(o => o.classList.remove('correct', 'wrong', 'shake'));
          shuffleOptions(b.querySelector('.options'), Array.from(b.querySelectorAll('.option')));
       });
       window.scrollTo(0, 0);
    };
  });
</script>
`;

const finalContent = content.substring(0, scriptStart) + cleanScript + content.substring(scriptEnd + 9);
fs.writeFileSync(p, finalContent, 'utf8');
console.log('DONE REPAIR');
