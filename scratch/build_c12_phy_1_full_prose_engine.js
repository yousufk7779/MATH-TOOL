const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${defContent}</div>
  </div>`;
}

function cardWrapper(title, content) {
  return `
  <div style="background: rgba(0,0,0,0.22); border: 1.2px solid rgba(255, 81, 47, 0.3); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 18px; font-weight: bold;">${title}</h3>
    <div style="color: #E2E8F0; line-height: 1.7; font-size: 15.5px;">${content}</div>
  </div>`;
}

function stepDerivationBox(title, stepsHtml) {
  return `
  <div style="background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 12px; padding: 18px; margin: 22px 0;">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 17.5px; margin-bottom: 12px; border-bottom: 1px dashed rgba(255, 81, 47, 0.4); padding-bottom: 6px;">
      📐 STEP-BY-STEP DERIVATION: ${title}
    </div>
    <div style="color: #F1F5F9; line-height: 1.75; font-size: 15.5px;">
      ${stepsHtml}
    </div>
  </div>`;
}

function examTrapBox(title, content) {
  return `
  <div style="background: rgba(255, 193, 7, 0.08); border-left: 4.5px solid #FFC107; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FFD54F; font-size: 16.5px; display: block; margin-bottom: 6px;">⚠️ BOARD EXAM FOCUS & COMMON TRAPS: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${content}</div>
  </div>`;
}

function solvedExampleBox(num, qText, solHtml) {
  return `
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.2px solid rgba(0, 229, 255, 0.3); border-radius: 10px; padding: 16px; margin: 20px 0;">
    <b style="color: #00E5FF; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 SOLVED BOARD EXAMPLE ${num}:</b>
    <div style="color: #FFFFFF; font-weight: 500; font-size: 15.5px; margin-bottom: 10px;">${qText}</div>
    <div style="background: rgba(0,0,0,0.3); border-left: 3px solid #00E5FF; padding: 10px 14px; border-radius: 4px; color: #E0E0E0; font-size: 15px; line-height: 1.6;">
      <b style="color: #00E5FF;">Step-by-Step Solution:</b><br>${solHtml}
    </div>
  </div>`;
}

function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 20px; margin: 28px 0; box-shadow: 0 10px 30px rgba(255, 81, 47, 0.25);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 18px; margin-bottom: 16px; text-align: center; letter-spacing: 0.5px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 920px; margin: 0 auto; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
      ${svgContent}
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; text-align: center; margin-top: 14px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

console.log("Helper templates initialized.");
