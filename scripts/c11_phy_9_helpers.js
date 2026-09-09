// scripts/c11_phy_9_helpers.js
const themeColor = "#42A5F5";

function frac(n, d) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; padding: 0 3px; font-size: 0.9em; line-height: 1.1;"><span style="border-bottom: 1px solid currentColor; padding: 0 2px 1px 2px; display: block;">${n}</span><span style="padding: 1px 2px 0 2px; display: block;">${d}</span></span>`;
}

function defBox(title, content) {
  return `<div style="background: rgba(66, 165, 245, 0.08); border-left: 4px solid ${themeColor}; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
    <div style="font-weight: 700; color: ${themeColor}; font-size: 15px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
      <span>📖</span> <span>DEFINITION: ${title}</span>
    </div>
    <div style="color: #E2E8F0; line-height: 1.65; font-size: 14px;">${content}</div>
  </div>`;
}

function analogyBox(title, content) {
  return `<div style="background: rgba(253, 200, 48, 0.07); border-left: 4px solid #FDC830; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
    <div style="font-weight: 700; color: #FDC830; font-size: 15px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
      <span>💡</span> <span>REAL-WORLD INTUITIVE ANALOGY: ${title}</span>
    </div>
    <div style="color: #E2E8F0; line-height: 1.65; font-size: 14px;">${content}</div>
  </div>`;
}

function stepDerivationBox(title, steps) {
  let stepsHtml = steps.map((s, idx) => `
    <div style="margin-bottom: 10px; padding-left: 10px; border-left: 2px solid rgba(66, 165, 245, 0.4);">
      <b style="color: ${themeColor}; font-size: 14px;">Step ${idx + 1}: ${s.name}</b>
      <div style="color: #CBD5E1; margin-top: 4px; font-size: 13.5px; line-height: 1.6;">${s.desc}</div>
    </div>
  `).join('');

  return `<div style="background: rgba(15, 23, 42, 0.7); border: 1.5px solid rgba(66, 165, 245, 0.35); border-radius: 8px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
    <div style="font-weight: 700; color: ${themeColor}; font-size: 15px; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; border-bottom: 1px solid rgba(66, 165, 245, 0.2); padding-bottom: 6px;">
      <span>📐</span> <span>RIGOROUS STEP-BY-STEP DERIVATION: ${title}</span>
    </div>
    ${stepsHtml}
  </div>`;
}

function examTrapBox(title, content) {
  return `<div style="background: rgba(244, 67, 54, 0.08); border-left: 4px solid #F44336; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
    <div style="font-weight: 700; color: #F44336; font-size: 15px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
      <span>⚠️</span> <span>BOARD EXAM TRAP & COMMON MISCONCEPTION: ${title}</span>
    </div>
    <div style="color: #E2E8F0; line-height: 1.65; font-size: 14px;">${content}</div>
  </div>`;
}

function solvedExampleBox(num, q, sol) {
  return `<div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 14px rgba(0,0,0,0.25);">
    <div style="font-weight: 700; color: ${themeColor}; font-size: 14.5px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
      <span>📝</span> <span>FULLY WORKED BOARD NUMERICAL EXAMPLE ${num}</span>
    </div>
    <div style="color: #F1F5F9; font-weight: 500; font-size: 13.5px; margin-bottom: 10px; line-height: 1.5; background: rgba(0,0,0,0.2); padding: 8px 10px; border-radius: 4px;">
      <b>Problem:</b> ${q}
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; line-height: 1.6; border-top: 1px dashed rgba(255,255,255,0.15); padding-top: 8px;">
      <b style="color: #4CAF50;">Step-by-Step Solution:</b><br/>${sol}
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
