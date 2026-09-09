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

  // Replace ${frac(' with \frac{
  content = content.replaceAll("${frac('", "\\frac{");
  // Replace ${frac( with \frac{
  content = content.replaceAll("${frac(", "\\frac{");

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Replaced in ${file}`);
}
