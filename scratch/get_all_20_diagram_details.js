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
  const after = txt.slice(pIdx, Math.min(txt.length, pIdx + 800));
  
  // Look for headings before
  const hMatch = before.match(/<h[2-4][^>]*>(.*?)<\/h[2-4]>|<b[^>]*>(.*?)<\/b>/g);
  const captionMatch = after.match(/💡\s*([^<\n]+)/) || after.match(/<div style="color: #CBD5E1[^>]*>(.*?)<\/div>/);
  
  const lastHeaders = hMatch ? hMatch.slice(-3).map(x => x.replace(/<[^>]+>/g, '').trim()) : [];
  console.log(`\n================ Diagram #${i + 1} ================`);
  console.log(`Nearby Headings:`, lastHeaders.join(' -> '));
  if (captionMatch) console.log(`Caption:`, captionMatch[0].replace(/<[^>]+>/g, '').trim());
});
