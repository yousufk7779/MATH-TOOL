const fs = require('fs');

const overviewFile = 'd:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-2.ts';
const content = fs.readFileSync(overviewFile, 'utf8');

// Find all h2 and h3
const matches = content.match(/<h[23][^>]*>.*?<\/h[23]>/g) || [];
console.log("All Headings in c12-chem-2.ts:");
matches.forEach((m, i) => console.log(`${i + 1}: ${m}`));
