const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'client', 'data', 'content');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(f => {
  const p = path.join(dir, f);
  const txt = fs.readFileSync(p, 'utf8');
  const dMatches = txt.match(/Diagram \d+:[^<"]+/gi) || [];
  const cameraMatches = txt.match(/📸[^<"]+/g) || [];
  if (dMatches.length > 0 || cameraMatches.length > 0) {
    console.log(`${f} => Diagram matches: ${dMatches.length}, Camera matches: ${cameraMatches.length}`);
  }
});
