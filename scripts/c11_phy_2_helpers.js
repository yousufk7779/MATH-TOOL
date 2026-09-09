const themeColor = "#8E2DE2";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span><span style="padding: 0 2px; display: inline-block;">${den}</span></span>`;
}

function defBox(title, content, si = '', dim = '') {
  let meta = '';
  if (si || dim) {
    meta = `<div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 13.5px; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px; margin-top: 8px;">
      ${si ? `<span style="color: #94A3B8;"><b style="color: ${themeColor};">SI Unit:</b> <span style="color: #FFFFFF;">${si}</span></span>` : ''}
      ${dim ? `<span style="color: #94A3B8;"><b style="color: ${themeColor};">Dimensions:</b> <span style="color: #FFFFFF;">${dim}</span></span>` : ''}
    </div>`;
  }
  return `<div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(142, 45, 226, 0.4); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 18px; margin: 18px 0;">
    <div style="color: ${themeColor}; font-size: 16px; font-weight: bold; margin-bottom: 4px;">📖 DEFINITION: ${title}</div>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">${content}</div>
    ${meta}
  </div>`;
}

function analogyBox(title, content) {
  return `<div style="background: rgba(30, 41, 59, 0.7); border: 1.2px dashed #C084FC; border-radius: 8px; padding: 12px 16px; margin: 16px 0;">
    <div style="color: #C084FC; font-size: 15px; font-weight: bold; margin-bottom: 4px;">💡 REAL-WORLD INTUITION: ${title}</div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">${content}</div>
  </div>`;
}

function stepDerivationBox(title, steps) {
  const stepsHtml = steps.map((s, idx) => `
    <div style="margin-bottom: 12px; padding-left: 10px; border-left: 2.5px solid ${themeColor};">
      <b style="color: ${themeColor}; font-size: 14.5px; display: block; margin-bottom: 3px;">Step ${idx + 1}: ${s.name}</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">${s.content}</div>
    </div>
  `).join('');
  return `<div style="background: rgba(15, 23, 42, 0.95); border: 1.5px solid rgba(142, 45, 226, 0.5); border-radius: 10px; padding: 16px 18px; margin: 20px 0;">
    <div style="color: #FFD700; font-size: 16px; font-weight: bold; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
      <span>📐</span> FULL STEP-BY-STEP MATHEMATICAL PROOF: ${title}
    </div>
    ${stepsHtml}
  </div>`;
}

function examTrapBox(title, content) {
  return `<div style="background: rgba(239, 68, 68, 0.08); border: 1.2px solid #EF4444; border-left: 5px solid #EF4444; border-radius: 8px; padding: 12px 16px; margin: 16px 0;">
    <div style="color: #F87171; font-size: 15px; font-weight: bold; margin-bottom: 4px;">⚠️ BOARD EXAM FOCUS & COMMON MISCONCEPTION: ${title}</div>
    <div style="color: #FEE2E2; font-size: 14.5px; line-height: 1.65;">${content}</div>
  </div>`;
}

function solvedExampleBox(num, qText, solHtml) {
  return `<div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 215, 0, 0.35); border-radius: 8px; padding: 14px 18px; margin: 18px 0;">
    <div style="color: #FFD700; font-size: 15.5px; font-weight: bold; margin-bottom: 6px;">📝 WORKED BOARD NUMERICAL EXAMPLE ${num}</div>
    <div style="color: #FFFFFF; font-size: 14.5px; line-height: 1.6; margin-bottom: 10px;"><b>Problem:</b> ${qText}</div>
    <div style="background: rgba(0, 0, 0, 0.35); border-left: 3px solid #FFD700; padding: 10px 14px; border-radius: 4px; color: #E2E8F0; font-size: 14px; line-height: 1.65;">
      <b style="color: #FFD700; display: block; margin-bottom: 4px;">Solution & Step-by-Step Calculation:</b>
      ${solHtml}
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
