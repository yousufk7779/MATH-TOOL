const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-2.ts');
const text = fs.readFileSync(filePath, 'utf8');

const qMatches = text.match(/<h3[^>]*>Q\d+:.*?<\/h3>[\s\S]*?(?=<h3[^>]*>Q\d+:|$)/g) || [];
console.log(`Total questions in c11-phy-2: ${qMatches.length}`);
console.log("Sample Question 1:\n", qMatches[0]);
console.log("Sample Question 26 (VSA):\n", qMatches[25]);
console.log("Sample Question 56 (SA):\n", qMatches[55]);
console.log("Sample Question 86 (LA):\n", qMatches[85]);
