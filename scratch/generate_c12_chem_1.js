const fs = require('fs');
const path = require('path');

const themeColor = "#FF4081";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 64, 129, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 64, 129, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${defContent}</div>
  </div>`;
}

function analogyBox(title, text) {
  return `
  <div style="background: rgba(56, 189, 248, 0.08); border-left: 4.5px solid #38BDF8; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #38BDF8; font-size: 16.5px; display: block; margin-bottom: 6px;">💡 REAL-WORLD INTUITION &amp; ANALOGY: ${title}</b>
    <div style="color: #E2E8F0; font-size: 15.5px; line-height: 1.65;">${text}</div>
  </div>`;
}

function stepDerivationBox(title, stepsHtml) {
  return `
  <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(255, 64, 129, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,64,129,0.3); padding-bottom: 6px;">
      📐 STEP-BY-STEP MATHEMATICAL DERIVATION: ${title}
    </div>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.75;">
      ${stepsHtml}
    </div>
  </div>`;
}

function examTrapBox(title, text) {
  return `
  <div style="background: rgba(239, 68, 68, 0.08); border-left: 4.5px solid #EF4444; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #EF4444; font-size: 16.5px; display: block; margin-bottom: 6px;">⚠️ BOARD EXAM TRAP &amp; COMMON MISCONCEPTION: ${title}</b>
    <div style="color: #FEE2E2; font-size: 15.5px; line-height: 1.65;">${text}</div>
  </div>`;
}

function solvedExampleBox(title, prob, sol) {
  return `
  <div style="background: rgba(59, 130, 246, 0.08); border-left: 4.5px solid #3B82F6; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #3B82F6; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 WORKED BOARD NUMERICAL EXAMPLE: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65; margin-bottom: 8px;"><b>Problem:</b> ${prob}</div>
    <div style="color: #93C5FD; font-size: 15px; line-height: 1.65; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 6px;"><b>Step-by-Step Solution:</b><br>${sol}</div>
  </div>`;
}

console.log("Helper functions defined successfully.");
