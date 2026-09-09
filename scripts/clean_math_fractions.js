const fs = require('fs');
const path = require('path');

const files = [
  'c11_phy_5_solutions_part1.js',
  'c11_phy_5_solutions_part2.js',
  'c11_phy_5_solutions_part3.js'
];

for (const file of files) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Replace broken nested fracs like:
  // ${frac('g\\sin\\theta', '1 + ')}${frac('k^2', 'R^2')}}}
  content = content.replace(/\$\{frac\('g\\sin\\theta', '1 \+ '\)\}\$\{frac\('k\^2', 'R\^2'\)\}\}\}/g, '\\\\frac{g\\\\sin\\\\theta}{1 + k^2/R^2}');
  content = content.replace(/\$\{frac\('\\tan\\theta', '1 \+ '\)\}\$\{frac\('R\^2', 'k\^2'\)\}\}\}/g, '\\\\frac{\\\\tan\\\\theta}{1 + R^2/k^2}');
  content = content.replace(/\$\{frac\('\(m_1 - m_2\)g', 'm_1 \+ m_2 \+ '\)\}\$\{frac\('I', 'R\^2'\)\}\}\}/g, '\\\\frac{(m_1 - m_2)g}{m_1 + m_2 + I/R^2}');

  // 2. Replace any leftover ${frac('A}{B} or ${frac('A', 'B')} inside LaTeX $ or $$
  // Let's replace any ${frac('A', 'B')} with \\frac{A}{B}
  content = content.replace(/\$\{frac\('([^',]+)',\s*'([^',]+)'\)\}/g, (match, n, d) => {
    return `\\\\frac{${n}}{${d}}`;
  });

  // 3. Also fix any ${frac('A}{B} without comma
  content = content.replace(/\$\{frac\('([^}]+)\}\{([^}]+)\}/g, (match, n, d) => {
    return `\\\\frac{${n}}{${d}}`;
  });

  // Specifically fix known broken lines from part1:
  content = content.replace(/\$\{frac\('\\sum m_i \\vec\{r\}_i\}\{\\sum m_i\}/g, '\\\\frac{\\\\sum m_i \\\\vec{r}_i}{\\\\sum m_i}');
  content = content.replace(/\$\{frac\('d\\vec\{R\}_\{\\text\{cm\}\}\}\{dt\}/g, '\\\\frac{d\\\\vec{R}_{\\\\text{cm}}}{dt}');
  content = content.replace(/\$\{frac\('d\\vec\{r\}_1\}\{dt\}/g, '\\\\frac{d\\\\vec{r}_1}{dt}');
  content = content.replace(/\$\{frac\('d\\vec\{r\}_2\}\{dt\}/g, '\\\\frac{d\\\\vec{r}_2}{dt}');
  content = content.replace(/\$\{frac\('d\\vec\{V\}_\{\\text\{cm\}\}\}\{dt\}/g, '\\\\frac{d\\\\vec{V}_{\\\\text{cm}}}{dt}');
  content = content.replace(/\$\{frac\('m_1 \\vec\{r\}_1 \+ m_2 \\vec\{r\}_2\}\{m_1 \+ m_2\}/g, '\\\\frac{m_1 \\\\vec{r}_1 + m_2 \\\\vec{r}_2}{m_1 + m_2}');
  content = content.replace(/\$\{frac\('v_\\text\{cm\}\}\{R\}\}/g, '\\\\frac{v_{\\\\text{cm}}}{R}');
  content = content.replace(/\$\{frac\('v_\\text\{cm\}\}\{R\}/g, '\\\\frac{v_{\\\\text{cm}}}{R}');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Cleaned fractions in ${file}`);
}
