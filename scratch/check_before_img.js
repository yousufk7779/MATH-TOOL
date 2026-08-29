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

imgPositions.forEach((pIdx, i) => {
  console.log(`\n=== #${i + 1} ===`);
  console.log(JSON.stringify(txt.slice(pIdx - 180, pIdx)));
});
