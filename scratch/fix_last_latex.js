const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'rebuild_chem1_exact_physics_match.js');
let code = fs.readFileSync(filePath, 'utf8');

code = code.replace(
  /\$\{eqBox\(`K_b = \$\{frac\('R M_A \(T_b&deg;\)<sup>2<\/sup>', '1000 \\\\Delta H_\\{\\\\text\{vap\}\\}'\)\} \\\\qquad \| \\\\qquad K_f = \$\{frac\('R M_A \(T_f&deg;\)<sup>2<\/sup>', '1000 \\\\Delta H_\\{\\\\text\{fus\}\\}'\)\}`\)\}/g,
  "${eqBox(`K<sub>b</sub> = ${frac('R M<sub>A</sub> (T<sub>b</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>vap</sub>')} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; K<sub>f</sub> = ${frac('R M<sub>A</sub> (T<sub>f</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>fus</sub>')}`)}"
);

code = code.replace(
  /\$\{eqBox\(`i = \$\{frac\('\\\\text\{Observed Colligative Property\}', '\\\\text\{Calculated Colligative Property\}'\)\} = \$\{frac\('\\\\text\{Normal Molar Mass\}', '\\\\text\{Abnormal Molar Mass\}'\)\} = \$\{frac\('\\\\text\{Total moles at equilibrium\}', '\\\\text\{Initial moles\}'\)\}`\)\}/g,
  "${eqBox(`i = ${frac('Observed Colligative Property', 'Calculated Colligative Property')} = ${frac('Normal Molar Mass', 'Abnormal Molar Mass')} = ${frac('Total moles at equilibrium', 'Initial moles')}`)}"
);

code = code.replace(
  /\$\{eqBox\(`\\&chi;<sub>B<\/sub> = \$\{frac\('n<sub>B<\/sub>', 'n<sub>A<\/sub> \+ n<sub>B<\/sub>'\)\} = \$\{frac\('w<sub>B<\/sub> \/ M<sub>B<\/sub>', '\(w<sub>A<\/sub> \/ M<sub>A<\/sub>\) \+ \(w<sub>B<\/sub> \/ M<sub>B<\/sub>\)'\)\}`\)\}/g,
  "${eqBox(`&chi;<sub>B</sub> = ${frac('n<sub>B</sub>', 'n<sub>A</sub> + n<sub>B</sub>')} = ${frac('w<sub>B</sub> / M<sub>B</sub>', '(w<sub>A</sub> / M<sub>A</sub>) + (w<sub>B</sub> / M<sub>B</sub>)')}`)}"
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('✅ Replaced lingering LaTeX in rebuild_chem1_exact_physics_match.js!');
