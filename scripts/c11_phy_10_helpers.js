// scripts/c11_phy_10_helpers.js
const themeColor = "#00E5FF";

function frac(num, den) {
  return `<span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">${num}</span><span style="display:block;">${den}</span></span>`;
}

function defBox(title, content) {
  return `
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 16px 0;">
    <div style="color: ${themeColor}; font-weight: 700; font-size: 15px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
      <span>📌</span> <span>DEFINITION: ${title}</span>
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">
      ${content}
    </div>
  </div>`;
}

function analogyBox(title, content) {
  return `
  <div style="background: rgba(255, 171, 0, 0.06); border-left: 4px solid #FFAB00; border-radius: 0 8px 8px 0; padding: 14px 16px; margin: 16px 0;">
    <div style="color: #FFD54F; font-weight: 700; font-size: 15px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
      <span>💡</span> <span>INTUITIVE ANALOGY: ${title}</span>
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">
      ${content}
    </div>
  </div>`;
}

function stepDerivationBox(title, steps) {
  const stepsHtml = steps.map((s, idx) => `
    <div style="margin-bottom: 10px;">
      <b style="color: ${themeColor}; font-size: 14px;">Step ${idx + 1}: ${s.title}</b>
      <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px; line-height: 1.5;">${s.content}</div>
    </div>
  `).join('');

  return `
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 8px; padding: 16px; margin: 18px 0;">
    <div style="color: ${themeColor}; font-weight: 700; font-size: 15.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(0, 229, 255, 0.3); padding-bottom: 6px;">
      🔬 STEP-BY-STEP DERIVATION: ${title}
    </div>
    ${stepsHtml}
  </div>`;
}

function examTrapBox(title, content) {
  return `
  <div style="background: rgba(239, 68, 68, 0.07); border-left: 4px solid #EF4444; border-radius: 0 8px 8px 0; padding: 14px 16px; margin: 16px 0;">
    <div style="color: #F87171; font-weight: 700; font-size: 15px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
      <span>⚠️</span> <span>EXAM TRAP &amp; COMMON PITFALL: ${title}</span>
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">
      ${content}
    </div>
  </div>`;
}

function solvedExampleBox(title, problem, solution) {
  return `
  <div style="background: rgba(16, 185, 129, 0.06); border: 1.5px solid rgba(16, 185, 129, 0.35); border-radius: 8px; padding: 16px; margin: 18px 0;">
    <div style="color: #34D399; font-weight: 700; font-size: 15.5px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
      <span>📝</span> <span>FULLY WORKED BOARD NUMERICAL: ${title}</span>
    </div>
    <div style="color: #F1F5F9; font-weight: 500; font-size: 14.5px; margin-bottom: 10px; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 6px;">
      <b>Problem:</b> ${problem}
    </div>
    <div style="color: #CBD5E1; font-size: 14px; line-height: 1.6;">
      <b style="color: #34D399;">Step-by-Step Solution:</b><br/>
      ${solution}
    </div>
  </div>`;
}

module.exports = {
  themeColor,
  frac,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
};
