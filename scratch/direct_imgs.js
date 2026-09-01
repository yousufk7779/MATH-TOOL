const fs = require('fs');

const raw = fs.readFileSync('client/data/content/c12-chem-1.ts', 'utf8');

const imgPositions = [];
let idx = 0;
while ((idx = raw.indexOf('<img', idx)) !== -1) {
  imgPositions.push(idx);
  idx += 4;
}

console.log('Total img positions:', imgPositions.length);
imgPositions.forEach((pos, i) => {
  const start = Math.max(0, pos - 200);
  const end = Math.min(raw.length, pos + 500);
  let chunk = raw.slice(start, end);
  chunk = chunk.replace(/data:image\/[a-zA-Z0-9.+_-]+;base64,[A-Za-z0-9+/=]{30,}/g, '[BASE64]');
  console.log(`\n--- IMG ${i + 1} ---`);
  console.log(chunk);
});
