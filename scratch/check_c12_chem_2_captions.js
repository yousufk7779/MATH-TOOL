const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-2.ts', 'utf8');

const imgPositions = [];
let idx = 0;
while ((idx = content.indexOf('<img', idx)) !== -1) {
  imgPositions.push(idx);
  idx += 4;
}

imgPositions.forEach((pos, i) => {
  const quoteClose = content.indexOf('\"', pos + 12);
  const endCard = content.indexOf('</div>', quoteClose + 50);
  const endDiv2 = content.indexOf('</div>', endCard + 6);
  const captionChunk = content.slice(quoteClose, endDiv2 + 6);
  console.log(`\n================ CARD ${i + 1} ================`);
  console.log(captionChunk.replace(/\\"/g, '"').replace(/\\n/g, '\n'));
});
