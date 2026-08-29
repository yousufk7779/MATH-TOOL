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

console.log(`Total 20 Diagrams List:`);
imgPositions.forEach((pIdx, i) => {
  const before = txt.slice(Math.max(0, pIdx - 500), pIdx);
  const titleMatch = before.match(/\[ 3D DIAGRAM FRAME #\d+: ([^\]]+)\]/) || before.match(/<div style="color: #FF512F[^>]*>([^<]+)<\/div>/);
  console.log(`${i + 1}. ${titleMatch ? titleMatch[1].trim() : 'Unknown'}`);
});
