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
  const before = txt.slice(Math.max(0, pIdx - 800), pIdx);
  // Find text inside <div style="color: #FF... or headers
  const matches = before.match(/<div style="[^"]*color:\s*#[A-Fa-f0-9]{3,6}[^"]*"[^>]*>([\s\S]*?)<\/div>/g) || [];
  const titles = matches.map(m => m.replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 3 && t.length < 150);
  console.log(`\n=== Diagram #${i + 1} ===`);
  console.log(titles.slice(-2).join(' | '));
});
