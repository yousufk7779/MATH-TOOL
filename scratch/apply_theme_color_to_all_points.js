const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'rebuild_chem1_exact_physics_match.js');
let code = fs.readFileSync(filePath, 'utf8');

const themeColor = "#FF4081";

// 1. Update helper boxes to use themeColor
code = code.replace(
  /function analogyBox\(title, text\) \{[\s\S]*?function stepDerivationBox/,
  `function analogyBox(title, text) {
  return \`
  <div style="background: rgba(255, 64, 129, 0.08); border-left: 4.5px solid \${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: \${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">💡 REAL-WORLD INTUITION: \${title}</b>
    <div style="color: #E2E8F0; font-size: 15px; line-height: 1.65;">\${text}</div>
  </div>\`;
}

function stepDerivationBox`
);

code = code.replace(
  /function solvedExampleBox\(title, prob, sol\) \{[\s\S]*?function /g,
  `function solvedExampleBox(title, prob, sol) {
  return \`
  <div style="background: rgba(255, 64, 129, 0.08); border-left: 4.5px solid \${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: \${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 WORKED BOARD NUMERICAL EXAMPLE: \${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65; margin-bottom: 8px;"><b style="color: \${themeColor};">Problem:</b> \${prob}</div>
    <div style="color: #FCE4EC; font-size: 15px; line-height: 1.65; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;"><b style="color: \${themeColor};">Step-by-Step Solution:</b><br>\${sol}</div>
  </div>\`;
}

function `
);

// 2. Replace any unstyled <b>...:</b> with <b style="color: ${themeColor};">...:</b>
// We also handle <b> tags with other text like <b>Step 1:</b>, <b>Step 2 (Moles):</b>, <b>Unit:</b>, <b>Raoult's Law:</b>, etc.
let styledCount = 0;
code = code.replace(/<b>([^<]*?:)<\/b>/g, (match, inner) => {
  styledCount++;
  return `<b style="color: \${themeColor};">${inner}</b>`;
});

// Also replace <b> tags that contain inline formatting before colon, e.g. <b>Ebullioscopic Constant (K<sub>b</sub>):</b>
code = code.replace(/<b>((?:(?!style)[^<]|<sub[^>]*>.*?<\/sub>|<sup[^>]*>.*?<\/sup>|&[a-zA-Z0-9#]+;)*?:)<\/b>/g, (match, inner) => {
  if (!match.includes('style=')) {
    styledCount++;
    return `<b style="color: \${themeColor};">${inner}</b>`;
  }
  return match;
});

// Also ensure section cards use themeColor
code = code.replace(/color:\s*#38BDF8;/g, `color: \${themeColor};`);
code = code.replace(/color:\s*#4ADE80;/g, `color: \${themeColor};`);
code = code.replace(/color:\s*#FDC830;/g, `color: \${themeColor};`);
code = code.replace(/border-left:\s*5px solid #FDC830;/g, `border-left: 5px solid \${themeColor};`);
code = code.replace(/border-left:\s*5px solid #38BDF8;/g, `border-left: 5px solid \${themeColor};`);
code = code.replace(/border-left:\s*5px solid #4ADE80;/g, `border-left: 5px solid \${themeColor};`);
code = code.replace(/border-left:\s*5px solid #F87171;/g, `border-left: 5px solid \${themeColor};`);
code = code.replace(/border-left:\s*4px solid #38BDF8;/g, `border-left: 4px solid \${themeColor};`);
code = code.replace(/border-left:\s*4px solid #4ADE80;/g, `border-left: 4px solid \${themeColor};`);
code = code.replace(/border-left:\s*4px solid #FDC830;/g, `border-left: 4px solid \${themeColor};`);

console.log(`✅ Applied themeColor to ${styledCount} bold colon points and headers!`);

fs.writeFileSync(filePath, code, 'utf8');
