const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const text = fs.readFileSync(filePath, 'utf8');

for (let i = 1; i <= 100; i++) {
  const m = text.match(new RegExp(`<h3[^>]*>Q${i}:([\\s\\S]*?)<\\/h3>`, 'i'));
  if (m) {
    const qTitle = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    let type = "MCQ (1 Mark)";
    if (i > 25 && i <= 55) type = "VSA (1 Mark)";
    else if (i > 55 && i <= 85) type = "SA (2/3 Marks)";
    else if (i > 85) type = "LA (5 Marks)";
    console.log(`Q${i} [${type}]: ${qTitle.substring(0, 100)}...`);
  }
}
