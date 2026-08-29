const fs = require('fs');

function cleanChem4(str) {
  return str
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\text/g, '')
    .replace(/Lanthanoids/g, 'Lanthanoids (Lanthanides)')
    .replace(/Lanthanoid/g, 'Lanthanoid (Lanthanide)')
    .replace(/Actinoids/g, 'Actinoids (Actinides)')
    .replace(/Actinoid/g, 'Actinoid (Actinide)');
}

// Clean overview
let overview = fs.readFileSync('scratch/build_c12_chem_4_overview.js', 'utf8');
overview = cleanChem4(overview);
fs.writeFileSync('scratch/build_c12_chem_4_overview.js', overview, 'utf8');

// Clean full builder
let full = fs.readFileSync('scratch/build_c12_chem_4_full.js', 'utf8');
full = cleanChem4(full);
fs.writeFileSync('scratch/build_c12_chem_4_full.js', full, 'utf8');

console.log('✅ Sanitized Chem 4 scripts!');
