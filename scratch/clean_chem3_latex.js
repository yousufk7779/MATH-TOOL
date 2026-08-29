const fs = require('fs');

function cleanLatex(str) {
  return str
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\implies/g, '&rArr;')
    .replace(/\\lim_\{[^}]+\}/g, 'lim<sub>&Delta;t&rarr;0</sub>')
    .replace(/\\ln/g, 'ln')
    .replace(/\\xrightarrow\{([^}]+)\}/g, '&rarr; ($1)')
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
    .replace(/\\left\{/g, '{')
    .replace(/\\right\}/g, '}');
}

// Clean overview
let overview = fs.readFileSync('scratch/build_c12_chem_3_overview.js', 'utf8');
overview = cleanLatex(overview);
fs.writeFileSync('scratch/build_c12_chem_3_overview.js', overview, 'utf8');

// Clean full builder
let full = fs.readFileSync('scratch/build_c12_chem_3_full.js', 'utf8');
full = cleanLatex(full);
fs.writeFileSync('scratch/build_c12_chem_3_full.js', full, 'utf8');

console.log('✅ LaTeX commands sanitized in Chem 3 builders!');
