const fs = require('fs');

const txt = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_phy_2_overview_clean.html', 'utf8');

const svgRegex = /<svg[\s\S]*?<\/svg>/g;
let m;
let i = 1;
while ((m = svgRegex.exec(txt)) !== null) {
  const start = Math.max(0, m.index - 150);
  const end = Math.min(txt.length, m.index + m[0].length + 150);
  console.log(`\n=== SVG ${i} (pos: ${m.index}) ===`);
  console.log("Before:", txt.slice(start, m.index).replace(/<[^>]+>/g, ' ').trim());
  console.log("After:", txt.slice(m.index + m[0].length, end).replace(/<[^>]+>/g, ' ').trim());
  i++;
}
