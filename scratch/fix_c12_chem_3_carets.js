const fs = require('fs');

let content = fs.readFileSync('client/data/content/c12-chem-3.ts', 'utf8');

// Replace carets cleanly
content = content.replace(/\(mol L⁻¹\)\^\(1-1\)/g, '(mol L⁻¹)<sup>1-1</sup>');
content = content.replace(/e\^\(-E_a \/ RT\)/g, 'e<sup>-E_a / RT</sup>');
content = content.replace(/e\^\(- E_a \/ RT\)/g, 'e<sup>-E_a / RT</sup>');
content = content.replace(/e\^\(E_a \/ RT\)/g, 'e<sup>E_a / RT</sup>');
content = content.replace(/\(mol L⁻¹\)\^\(1-2\)/g, '(mol L⁻¹)<sup>1-2</sup>');
content = content.replace(/e\^\(-λt\)/g, 'e<sup>-λt</sup>');
content = content.replace(/\[R\]₀\^\(1-n\)/g, '[R]₀<sup>1-n</sup>');

fs.writeFileSync('client/data/content/c12-chem-3.ts', content, 'utf8');
console.log('Fixed all carets in c12-chem-3.ts!');
