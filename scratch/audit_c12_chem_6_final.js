const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-6.ts', 'utf8');

// Check diagrams
const imgMatches = content.match(/<img src="data:image\/jpeg;base64,[^"]+"/g) || [];
console.log('Total embedded images found:', imgMatches.length);

// Check questions
const qMatches = content.match(/Q\d+:/g) || [];
console.log('Total Questions found:', qMatches.length);

// Check MCQs
const mcqMatches = content.match(/"id": "c12-chem-6-mcq-\d+"/g) || [];
console.log('Total MCQs found:', mcqMatches.length);

// Check carets (should be 0)
const caretMatches = content.match(/\d+\^\d+/g) || [];
console.log('Unformatted carets found:', caretMatches.length);

console.log('File size:', content.length, 'bytes');
