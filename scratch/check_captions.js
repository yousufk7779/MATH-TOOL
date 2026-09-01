const fs = require('fs');

const raw = fs.readFileSync('client/data/content/c12-chem-1.ts', 'utf8');

const imgPositions = [];
let idx = 0;
while ((idx = raw.indexOf('<img', idx)) !== -1) {
  imgPositions.push(idx);
  idx += 4;
}

imgPositions.forEach((pos, i) => {
  const quoteClose = raw.indexOf('\"', pos + 12);
  const endCard = raw.indexOf('</div>', quoteClose + 50);
  const endDiv2 = raw.indexOf('</div>', endCard + 6);
  const captionChunk = raw.slice(quoteClose, endDiv2 + 6);
  console.log(`\n================ CARD ${i + 1} CAPTION ================`);
  console.log(captionChunk.replace(/\\"/g, '"').replace(/\\n/g, '\n'));
});
