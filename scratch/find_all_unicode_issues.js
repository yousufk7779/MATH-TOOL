const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const text = fs.readFileSync(filePath, 'utf8');

const issues = {
  combiningArrows: (text.match(/[\u20D0-\u20FF]/g) || []).length,
  unicodeSubscripts: (text.match(/[₀₁₂₃₄₅₆₇₈₉ᵢₙ]/g) || []).length,
  unicodeSuperscripts: (text.match(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g) || []).length,
  doubleIntegrals: (text.match(/∬/g) || []).length,
  contourIntegrals: (text.match(/∮/g) || []).length,
  parallelSymbols: (text.match(/∥/g) || []).length,
  middleDots: (text.match(/[·•∙]/g) || []).length,
};

console.log("UNICODE ENCODING AUDIT FOR c12-phy-1.ts:");
console.log(JSON.stringify(issues, null, 2));

// Check other Class 12 files if any exist
const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');
const files = fs.readdirSync(contentDir).filter(f => f.startsWith('c12-'));
console.log("\nAll Class 12 content files found:", files);
