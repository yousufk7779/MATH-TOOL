const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'client', 'data', 'content');

for (let ch = 1; ch <= 9; ch++) {
  const filename = `c12-phy-${ch}.ts`;
  const p = path.join(dir, filename);
  if (fs.existsSync(p)) {
    const txt = fs.readFileSync(p, 'utf8');
    // find headers with 📸 or 📍 or [ 3D DIAGRAM
    const pins = txt.match(/📍[^\n<"]+/g) || [];
    const cameras = txt.match(/📸[^\n<"]+/g) || [];
    const frames = txt.match(/\[\s*3D\s*DIAGRAM[^\n<"]+/gi) || [];
    console.log(`${filename}: 📍=${pins.length}, 📸=${cameras.length}, frames=${frames.length}`);
  }
}
