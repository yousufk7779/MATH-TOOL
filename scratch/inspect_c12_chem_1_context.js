const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-1.ts', 'utf8');

const imgIndices = [];
let pos = 0;
while ((pos = content.indexOf('<img', pos)) !== -1) {
  imgIndices.push(pos);
  pos += 4;
}

imgIndices.forEach((idx, i) => {
  const start = Math.max(0, idx - 250);
  const end = Math.min(content.length, idx + 400);
  let snippet = content.slice(start, end);
  // truncate base64
  snippet = snippet.replace(/data:image\/[a-zA-Z0-9.+_-]+;base64,[A-Za-z0-9+/=]{30,}/g, '[BASE64_DATA]');
  console.log(`\n================ IMAGE ${i + 1} CONTEXT ================`);
  console.log(snippet);
});
