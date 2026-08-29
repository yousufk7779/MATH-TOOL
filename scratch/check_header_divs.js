const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'client', 'data', 'content');

for (let ch = 1; ch <= 9; ch++) {
  const filename = `c12-phy-${ch}.ts`;
  const p = path.join(dir, filename);
  if (fs.existsSync(p)) {
    const txt = fs.readFileSync(p, 'utf8');
    const headerRegex = /<div style="[^"]*font-size:\s*1[5-8]\.?\d*px;[^"]*">([\s\S]*?(?:📸|📍)[\s\S]*?)<\/div>/g;
    let matches = [];
    let m;
    while ((m = headerRegex.exec(txt)) !== null) {
      matches.push(m[0]);
    }
    console.log(`\n=== ${filename} (Found ${matches.length} header elements) ===`);
    if (matches.length > 0) {
      console.log("Sample header 1:", matches[0]);
    }
  }
}
