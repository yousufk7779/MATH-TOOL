const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'rebuild_chem1_exact_physics_match.js');
let code = fs.readFileSync(filePath, 'utf8');

// Replace remaining lines
code = code.replace(
  /\$\{eqBox\(`K_b = \$\{frac\('R M_A \(T_b&deg;\)<sup>2<\/sup>', '1000 \\\\Delta H_\\{\\\\text\{vap\}\\}'\)\} \\\\qquad \| \\\\qquad K_f = \$\{frac\('R M_A \(T_f&deg;\)<sup>2<\/sup>', '1000 \\\\Delta H_\\{\\\\text\{fus\}\\}'\)\}`\)\}/,
  "${eqBox(`K<sub>b</sub> = ${frac('R M<sub>A</sub> (T<sub>b</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>vap</sub>')} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; K<sub>f</sub> = ${frac('R M<sub>A</sub> (T<sub>f</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>fusion</sub>')}`)}"
);

code = code.replace(
  /\$\{eqBox\(`i = 1 - \\\\alpha \\\\left\(1 - \$\{frac\('1', 'n'\)\}\\\\right\) &implies; <b>\\\\alpha = \$\{frac\('1 - i', '1 - 1\/n'\)\} = \$\{frac\('\(1 - i\)n', 'n - 1'\)\}<\/b>`\)\}/,
  "${eqBox(`i = 1 - &alpha; (1 - ${frac('1', 'n')}) &rArr; <b>&alpha; = ${frac('1 - i', '1 - (1/n)')} = ${frac('(1 - i)n', 'n - 1')}</b>`)}"
);

code = code.replace(
  /\$\{eqBox\(`K_a = \$\{frac\('C \\\\alpha<sup>2<\/sup>', '1 - \\\\alpha'\)\} = \$\{frac\('0\.1 \\\\times \(0\.0645\)<sup>2<\/sup>', '1 - 0\.0645'\)\} = \$\{frac\('0\.1 \\\\times 0\.00416', '0\.9355'\)\} = <b>4\.45 \\\\times 10<sup>-4<\/sup> mol L<sup>-1<\/sup><\/b>`\)\}/,
  "${eqBox(`K<sub>a</sub> = ${frac('C &alpha;<sup>2</sup>', '1 - &alpha;')} = ${frac('0.1 &times; (0.0645)<sup>2</sup>', '1 - 0.0645')} = ${frac('0.1 &times; 0.00416', '0.9355')} = <b>4.45 &times; 10<sup>-4</sup> mol L<sup>-1</sup></b>`)}"
);

code = code.replace(
  /\$\{eqBox\(`\\\\alpha = \$\{frac\('i - 1', 'n - 1'\)\} = \$\{frac\('3\.656 - 1', '4 - 1'\)\} = \$\{frac\('2\.656', '3'\)\} = <b>0\.8853 \(88\.53\\\\%\)<\/b>`\)\}/,
  "${eqBox(`&alpha; = ${frac('i - 1', 'n - 1')} = ${frac('3.656 - 1', '4 - 1')} = ${frac('2.656', '3')} = <b>0.8853 (88.53%)</b>`)}"
);

code = code.replace(
  /\$\{eqBox\(`\$\{frac\('p&deg; - p', 'p&deg;'\)\} = \\\\left\(\$\{frac\('\\\\Pi', 'R T'\)\}\\\\right\) \\\\left\(\$\{frac\('M_A', 'd'\)\}\\\\right\) &implies; <b>\\\\Pi = \$\{frac\('p&deg; - p', 'p&deg;'\)\} \\\\times \$\{frac\('d R T', 'M_A'\)\}<\/b>`\)\}/,
  "${eqBox(`${frac('p&deg; - p', 'p&deg;')} = (${frac('&Pi;', 'R T')}) (${frac('M<sub>A</sub>', 'd')}) &rArr; <b>&Pi; = ${frac('p&deg; - p', 'p&deg;')} &times; ${frac('d R T', 'M<sub>A</sub>')}</b>`)}"
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('✅ Final 5 replacements done!');
