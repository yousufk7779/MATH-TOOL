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
  // find the closest section or topic
  const before = txt.slice(Math.max(0, pIdx - 400), pIdx);
  const after = txt.slice(pIdx, Math.min(txt.length, pIdx + 300));
  
  // Clean base64 out of after
  const cleanAfter = after.replace(/src="data:image\/[^;]+;base64,[^"]+"/, 'src="[BASE64]"');
  
  console.log(`\n================ Diagram #${i + 1} (pos: ${pIdx}) ================`);
  console.log(`BEFORE:`);
  console.log(before.slice(-250));
  console.log(`AFTER:`);
  console.log(cleanAfter.slice(0, 200));
});
