import os
import re

SCRIPT_DIR = r"d:\All NCERT SOLUTIONS\client"

files = [
    "generate_ch8.js",
    "generate_ch9.js",
    "generate_ch10.js",
    "generate_ch11.js",
    "generate_ch12.js"
]

NEW_SCRIPT = """const mcqQuizScript = `

<div id="quiz-overlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:9998; backdrop-filter: blur(4px);"></div>
<div id="quiz-modal" class="popup" style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); width:100%; z-index:9999; justify-content:center; align-items:center;">
   <div style="background: linear-gradient(135deg, #2b2b36, #1a1a2e); padding: 25px; border-radius: 20px; border: 2px solid #6C63FF; text-align: center; color: white; width: 85%; max-width: 320px; box-shadow: 0 10px 30px rgba(0,0,0,0.8); pointer-events: auto;">
      <h2 style="margin:0; font-family:'Noto Sans',sans-serif; color: #4CAF50; font-size: 24px;">🎉 Quiz Completed!</h2>
      <p id="quiz-score" style="font-size: 28px; font-weight: bold; margin: 10px 0; color: #fff;"></p>
      <div style="display:flex; justify-content:space-around; margin: 15px 0;">
         <div style="color:#4CAF50; font-weight:bold; font-size: 14px;">✅ Correct<br><span id="quiz-correct" style="font-size:20px;">0</span></div>
         <div style="color:#F44336; font-weight:bold; font-size: 14px;">❌ Wrong<br><span id="quiz-wrong" style="font-size:18px;">0</span></div>
      </div>
      <button id="quiz-close" style="margin-top: 10px; padding: 12px 30px; border: none; border-radius: 12px; background: #6C63FF; color: white; font-weight: bold; font-size: 16px; cursor: pointer; width: 100%; box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);">Play Again 🔄</button>
   </div>
</div>
<script>
  (function() {
    const quizStyles = document.createElement('style');
    quizStyles.innerHTML = " \\n\\\n      @keyframes shake { \\n\\\n        0%, 100% { transform: translateX(0); } \\n\\\n        20%, 60% { transform: translateX(-5px); } \\n\\\n        40%, 80% { transform: translateX(5px); } \\n\\\n      } \\n\\\n      .shake { animation: shake 0.4s ease-in-out; } \\n\\\n      .option { padding: 8px 12px; border: 1px solid #555; border-radius: 6px; margin-bottom: 8px; display: block; cursor: pointer; transition: all 0.2s; -webkit-tap-highlight-color: transparent; } \\n\\\n      .option * { pointer-events: none; } \\n\\\n      .correct-answer, .final-answer, .answer, .explanation, .step { display: none !important; opacity: 0 !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important; border: none !important; }";
    document.head.appendChild(quizStyles);

    function initQuiz() {
      try {
        let score = 0;
        let answered = 0;
        const boxes = document.querySelectorAll('.content-box');
        const total = boxes.length;
        const modal = document.getElementById('quiz-modal');
        const overlay = document.getElementById('quiz-overlay');
        let lockStyle = null;

        function preventScroll(e) { e.preventDefault(); }

        function lockScroll() {
          const scrollY = window.scrollY;
          document.body.style.position = 'fixed';
          document.body.style.top = '-' + scrollY + 'px';
          document.body.style.width = '100%';
          document.body.style.overflow = 'hidden';
          document.documentElement.style.overflow = 'hidden';
          document.addEventListener('touchmove', preventScroll, { passive: false });

          lockStyle = document.createElement('style');
          lockStyle.id = 'quiz-lock-style';
          lockStyle.innerHTML = "html, body { overflow: hidden !important; height: 100% !important; } .main-container, .content, .screen { overflow: hidden !important; height: 100% !important; } .app-container { pointer-events: none !important; } .popup { pointer-events: auto !important; }";
          document.head.appendChild(lockStyle);
        }

        function unlockScroll() {
          const scrollY = document.body.style.top;
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
          document.removeEventListener('touchmove', preventScroll);
          if (lockStyle && lockStyle.parentNode) {
              lockStyle.parentNode.removeChild(lockStyle);
          }
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        boxes.forEach(box => {
          let answerEl = box.querySelector('.correct-answer, .final-answer, .answer');
          let correctLetter = "";
          
          if (answerEl && answerEl.textContent) {
             const match = answerEl.textContent.match(/\\\\(([A-Da-d])\\\\)/);
             if (match) {
                 correctLetter = match[1].toUpperCase();
             }
          }
          
          box.querySelectorAll('.correct-answer, .final-answer, .answer, .explanation, .step').forEach(el => {
              el.style.display = 'none';
          });

          const optionsContainer = box.querySelector('.options');
          if (!optionsContainer) return;
          
          const options = Array.from(box.querySelectorAll('.option'));
          optionsContainer.style.display = "flex";
          optionsContainer.style.flexDirection = "column";

          options.forEach((opt, idx) => {
            const labels = ['A', 'B', 'C', 'D'];
            const label = labels[idx] || '';
            
            const optText = opt.textContent ? opt.textContent.trim() : "";
            if (correctLetter && (optText.toUpperCase().startsWith("(" + correctLetter + ")") || optText.toUpperCase().startsWith(correctLetter + "."))) {
               opt.dataset.isCorrect = "true";
            }
            
            const cleanContent = opt.innerHTML.replace(/^\\\\s*\\\\(?([A-Da-d])\\\\)?\\\\s*\\\\.?\\\\s*/i, '');
            opt.innerHTML = '<span style="font-weight:bold; color: #6C63FF; margin-right: 8px;">' + label + '.</span>' + cleanContent;
            
            const handleOptClick = function(e) {
              if (e) {
                 e.preventDefault();
                 e.stopPropagation();
              }
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
                     
                     modal.style.display = 'flex';
                     overlay.style.display = 'block';
                     lockScroll();
                 }, 500);
              }
            };

            opt.addEventListener('touchstart', handleOptClick, { passive: false });
            opt.addEventListener('click', handleOptClick);
          });

          for (let i = options.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = options[i];
              options[i] = options[j];
              options[j] = temp;
          }
          options.forEach(opt => optionsContainer.appendChild(opt));
        });

        document.getElementById('quiz-close').addEventListener('click', () => {
           modal.style.display = 'none';
           overlay.style.display = 'none';
           unlockScroll();
           score = 0;
           answered = 0;
           boxes.forEach(box => {
              box.dataset.answered = "false";
              const optionsContainer = box.querySelector('.options');
              const options = Array.from(box.querySelectorAll('.option'));
              options.forEach(opt => {
                 opt.style.backgroundColor = '';
                 opt.style.borderColor = '#555';
              });
              for (let i = options.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  const temp = options[i];
                  options[i] = options[j];
                  options[j] = temp;
              }
              options.forEach(opt => optionsContainer.appendChild(opt));
           });
           if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
               window.ReactNativeWebView.postMessage("scroll_to_top");
           }
        });
        
      } catch (err) {
        console.error("MCQ Quiz Error:", err);
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initQuiz);
    } else {
      initQuiz();
    }
    setTimeout(function() {
       if (document.querySelectorAll('.content-box').length > 0 && document.querySelectorAll('.content-box')[0].dataset.answered !== "true" && !document.querySelectorAll('.content-box')[0].querySelector('.option').onclick && !document.querySelectorAll('.content-box')[0].dataset.initialized) {
          document.querySelectorAll('.content-box').forEach(b => b.dataset.initialized = "true");
          initQuiz();
       }
    }, 1000);
  })();
</script>
`;"""

for file_name in files:
    path = os.path.join(SCRIPT_DIR, file_name)
    if not os.path.exists(path):
        continue
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    pattern = r"const mcqQuizScript = `\s*[\s\S]*?`;\s*(?=function readHtml|const overrideCSS|const overview|function encodeImage)"
    
    new_content = re.sub(pattern, NEW_SCRIPT + "\n\n", content, count=1)
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_name}")
    else:
        print(f"No match found for {file_name}")
