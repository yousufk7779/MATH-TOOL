// Helper components and theme configuration for Class 11 Physics Chapter 4: Work, Energy and Power
const themeColor = "#00c6ff";

function frac(n, d) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; padding: 0 4px; font-size: 0.9em; line-height: 1.1;">
    <span style="border-bottom: 1px solid currentColor; padding-bottom: 2px;">${n}</span>
    <span style="padding-top: 2px;">${d}</span>
  </span>`;
}

function defBox(term, def, unit = "", dim = "") {
  return `
  <div style="background: rgba(0, 198, 255, 0.06); border: 1.5px solid ${themeColor}; border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
      <span style="background: ${themeColor}; color: #121212; font-weight: bold; font-size: 11px; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px;">DEFINITION</span>
      <b style="color: ${themeColor}; font-size: 16px;">${term}</b>
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">${def}</div>
    ${unit || dim ? `
    <div style="display: flex; gap: 16px; margin-top: 10px; padding-top: 8px; border-top: 1px dashed rgba(0, 198, 255, 0.3); font-size: 13.5px; color: #CBD5E1;">
      ${unit ? `<span><b>SI Unit:</b> <code style="color: #80DEEA; background: rgba(0,0,0,0.3); padding: 1px 6px; border-radius: 4px;">${unit}</code></span>` : ""}
      ${dim ? `<span><b>Dimensional Formula:</b> <code style="color: #80DEEA; background: rgba(0,0,0,0.3); padding: 1px 6px; border-radius: 4px;">${dim}</code></span>` : ""}
    </div>` : ""}
  </div>`;
}

function analogyBox(title, text) {
  return `
  <div style="background: rgba(14, 165, 233, 0.06); border-left: 4px solid #0EA5E9; border-radius: 6px; padding: 14px 18px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
      <span style="color: #38BDF8; font-size: 18px;">💡</span>
      <b style="color: #38BDF8; font-size: 15px; text-transform: uppercase; letter-spacing: 0.5px;">REAL-WORLD INTUITION &bull; ${title}</b>
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">${text}</div>
  </div>`;
}

function stepDerivationBox(title, steps) {
  const stepsHtml = steps.map((s, idx) => `
    <div style="display: flex; gap: 12px; margin-bottom: 12px; align-items: flex-start;">
      <span style="background: rgba(0, 198, 255, 0.2); color: ${themeColor}; font-weight: bold; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; border: 1px solid ${themeColor};">${idx + 1}</span>
      <div style="flex: 1;">
        <div style="color: ${themeColor}; font-weight: 600; font-size: 14px; margin-bottom: 2px;">${s.name}</div>
        <div style="color: #E2E8F0; font-size: 14px; line-height: 1.5;">${s.content}</div>
      </div>
    </div>
  `).join("");

  return `
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 10px; padding: 16px; margin: 18px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; border-bottom: 1px solid rgba(0, 198, 255, 0.2); padding-bottom: 8px;">
      <span style="color: ${themeColor}; font-size: 18px;">📐</span>
      <b style="color: ${themeColor}; font-size: 15.5px;">${title}</b>
    </div>
    ${stepsHtml}
  </div>`;
}

function examTrapBox(title, text) {
  return `
  <div style="background: rgba(239, 68, 68, 0.08); border: 1.5px solid #EF4444; border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
      <span style="color: #F87171; font-size: 18px;">⚠️</span>
      <b style="color: #F87171; font-size: 14.5px; text-transform: uppercase; letter-spacing: 0.5px;">EXAM TRAP & COMMON MISCONCEPTION: ${title}</b>
    </div>
    <div style="color: #FECACA; font-size: 14px; line-height: 1.6;">${text}</div>
  </div>`;
}

function solvedExampleBox(num, q, steps, ans) {
  const stepsHtml = steps.map(s => `
    <div style="margin-bottom: 8px; color: #E2E8F0; font-size: 14px; line-height: 1.5;">
      <b style="color: ${themeColor};">${s.step}:</b> ${s.detail}
    </div>
  `).join("");

  return `
  <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(0, 198, 255, 0.4); border-radius: 10px; padding: 16px; margin: 18px 0;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid rgba(0, 198, 255, 0.2); padding-bottom: 8px;">
      <b style="color: ${themeColor}; font-size: 15px;">Solved Board Numerical #${num}</b>
      <span style="background: rgba(0, 198, 255, 0.15); color: ${themeColor}; font-size: 12px; padding: 2px 8px; border-radius: 4px; font-weight: 600;">NCERT / CBSE HOTS</span>
    </div>
    <div style="color: #F8FAFC; font-size: 14.5px; font-weight: 500; margin-bottom: 12px; line-height: 1.5;">
      <b>Question:</b> ${q}
    </div>
    <div style="background: rgba(15, 23, 42, 0.5); border-radius: 6px; padding: 12px; margin-bottom: 10px;">
      ${stepsHtml}
    </div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10B981; border-radius: 6px; padding: 8px 12px; color: #6EE7B7; font-size: 14px; font-weight: bold; text-align: center;">
      Final Answer: ${ans}
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
