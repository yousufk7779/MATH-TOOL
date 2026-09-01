const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-6.ts', 'utf8');
const qMatches = content.match(/Q\d+:/g) || [];
console.log('Total Questions found:', qMatches.length);
console.log('First 5:', qMatches.slice(0, 5));
console.log('Last 5:', qMatches.slice(-5));

const mcqMatches = content.match(/"id": "c12-chem-6-mcq-\d+"/g) || [];
console.log('Total MCQs found:', mcqMatches.length);
