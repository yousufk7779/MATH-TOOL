// Helper components and theme configuration for Class 11 Physics Chapter 7: Properties of Bulk Matter
const themeColor = "#FF007F";

function frac(n, d) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; padding: 0 4px; font-size: 0.9em; line-height: 1.1;">
    <span style="border-bottom: 1px solid currentColor; padding-bottom: 2px;">${n}</span>
    <span style="padding-top: 2px;">${d}</span>
  </span>`;
}

function defBox(term, def, unit = "", dim = "") {
  return `
  <div style="background: rgba(255, 0, 127, 0.06); border: 1.5px solid ${themeColor}; border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
      <span style="background: ${themeColor}; color: #FFFFFF; font-weight: bold; font-size: 11px; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px;">DEFINITION</span>
      <b style="color: ${themeColor}; font-size: 16px;">${term}</b>
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">${def}</div>
    ${unit || dim ? `
    <div style="display: flex; gap: 16px; margin-top: 10px; padding-top: 8px; border-top: 1px dashed rgba(255, 0, 127, 0.3); font-size: 13.5px; color: #CBD5E1;">
      ${unit ? `<span><b>SI Unit:</b> <code style="color: #FF80BF; background: rgba(0,0,0,0.3); padding: 1px 6px; border-radius: 4px;">${unit}</code></span>` : ""}
      ${dim ? `<span><b>Dimensional Formula:</b> <code style="color: #FF80BF; background: rgba(0,0,0,0.3); padding: 1px 6px; border-radius: 4px;">${dim}</code></span>` : ""}
    </div>` : ""}
  </div>`;
}

function analogyBox(title, text) {
  return `
  <div style="background: rgba(14, 165, 233, 0.06); border-left: 4px solid #0EA5E9; border-radius: 6px; padding: 14px 18px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
      <span style="color: #0EA5E9; font-size: 18px;">💡</span>
      <b style="color: #38BDF8; font-size: 15px;">Physical Analogy &bull; ${title}</b>
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">${text}</div>
  </div>`;
}

function stepDerivationBox(title, steps) {
  if (Array.isArray(title)) {
    steps = title;
    title = "Mathematical Derivation & Proof";
  }
  if (!Array.isArray(steps)) {
    steps = [];
  }
  const stepsHtml = steps.map((s, idx) => `
    <div style="display: flex; gap: 12px; margin-bottom: 12px; align-items: flex-start;">
      <span style="background: rgba(255, 0, 127, 0.2); color: ${themeColor}; font-weight: bold; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; border: 1px solid ${themeColor};">${idx + 1}</span>
      <div style="flex: 1;">
        <div style="color: ${themeColor}; font-weight: 600; font-size: 14px; margin-bottom: 2px;">${s.name || s.step || `Step ${idx + 1}`}</div>
        <div style="color: #E2E8F0; font-size: 14px; line-height: 1.5;">${s.content || s.math || ""}</div>
      </div>
    </div>
  `).join("");

  return `
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 10px; padding: 16px; margin: 18px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px; border-bottom: 1px solid rgba(255, 0, 127, 0.2); padding-bottom: 8px;">
      <span style="color: ${themeColor}; font-size: 18px;">📐</span>
      <b style="color: ${themeColor}; font-size: 15.5px;">${title}</b>
    </div>
    ${stepsHtml}
  </div>`;
}

function examTrapBox(title, text) {
  return `
  <div style="background: rgba(239, 68, 68, 0.07); border-left: 4px solid #EF4444; border-radius: 6px; padding: 14px 18px; margin: 16px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
      <span style="color: #EF4444; font-size: 18px;">⚠️</span>
      <b style="color: #F87171; font-size: 15px;">Board Exam Pitfall &bull; ${title}</b>
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">${text}</div>
  </div>`;
}

function solvedExampleBox(title, problem, solution) {
  return `
  <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 16px; margin: 18px 0;">
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
      <span style="background: #10B981; color: #FFFFFF; font-weight: bold; font-size: 11px; padding: 2px 8px; border-radius: 4px; text-transform: uppercase;">WORKED NUMERICAL</span>
      <b style="color: #34D399; font-size: 15.5px;">${title}</b>
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; margin-bottom: 10px; background: rgba(0,0,0,0.25); padding: 10px 12px; border-radius: 6px; border-left: 3px solid #10B981;">
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
