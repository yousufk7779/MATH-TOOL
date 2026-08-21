const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'build_c11_phy_8_master.js'), 'utf8');
const lines = content.split('\n');

lines.forEach((line, idx) => {
  if (line.includes('^')) {
    console.log(`L${idx+1}: ${line.trim()}`);
  }
});
