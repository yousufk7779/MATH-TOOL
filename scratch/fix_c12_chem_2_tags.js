const fs = require('fs');

// 1. Fix overview script
let overviewScript = fs.readFileSync('scratch/build_c12_chem_2_overview.js', 'utf8');
overviewScript = overviewScript.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => {
  return `<b style="color: \${themeColor};">${inner}</b>`;
});
fs.writeFileSync('scratch/build_c12_chem_2_overview.js', overviewScript, 'utf8');

// 2. Fix full builder script
let fullScript = fs.readFileSync('scratch/build_c12_chem_2_full.js', 'utf8');
fullScript = fullScript.replace(/\\\\text\{([^}]+)\}/g, '$1');
fullScript = fullScript.replace(/\\text\{([^}]+)\}/g, '$1');
fullScript = fullScript.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => {
  return `<b style="color: \${themeColor};">${inner}</b>`;
});
fs.writeFileSync('scratch/build_c12_chem_2_full.js', fullScript, 'utf8');

console.log('✅ Corrected scripts successfully!');
