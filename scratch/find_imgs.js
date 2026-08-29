const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const imgPositions = [];
let pos = 0;
while ((pos = txt.indexOf('<img', pos)) !== -1) {
  imgPositions.push(pos);
  pos += 4;
}

console.log(`Total <img positions found: ${imgPositions.length}`);

imgPositions.forEach((pIdx, i) => {
  const start = Math.max(0, pIdx - 200);
  const end = Math.min(txt.length, pIdx + 200);
  console.log(`\n--- #${i + 1} (pos: ${pIdx}) ---`);
  console.log(txt.slice(start, end));
});
