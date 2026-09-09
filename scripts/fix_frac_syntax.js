const fs = require('fs');
const path = require('path');

const files = [
  'c11_phy_5_overview.js',
  'c11_phy_5_solutions_part1.js',
  'c11_phy_5_solutions_part2.js',
  'c11_phy_5_solutions_part3.js'
];

// Regex to find `${frac('num}{den'}` or `${frac('num}{den')}`
// Sometimes it is frac('num}{den} without quotes in the middle
for (const file of files) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace ${frac('A}{B} with ${frac('A', 'B')}
  // A is characters up to }{
  // B is characters up to } or '
  content = content.replace(/\$\{frac\('([^'}]+)\}\{([^'}]+)\}/g, (match, n, d) => {
    return `\${frac('${n}', '${d}')}`;
  });

  // Also replace ${frac('A}{B}$ with ${frac('A', 'B')}$
  content = content.replace(/\$\{frac\('([^'}]+)\}\{([^'}]+)\$/g, (match, n, d) => {
    return `\${frac('${n}', '${d}')}$`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed frac patterns in ${file}`);
  } else {
    console.log(`No simple frac patterns changed in ${file}`);
  }
}
