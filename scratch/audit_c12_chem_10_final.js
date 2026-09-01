const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-10.ts', 'utf8');

// Check diagrams
const imgMatches = content.match(/data:image\/jpeg;base64,[A-Za-z0-9+/=]+/g) || [];
console.log('Total base64 data URIs found:', imgMatches.length);
imgMatches.forEach((m, idx) => {
  console.log('Image', idx + 1, 'length:', m.length);
});

// Check questions
const qMatches = content.match(/Q\d+:/g) || [];
console.log('Total Questions found:', qMatches.length);

// Check MCQs
const mcqMatches = content.match(/"id": "c12-chem-10-mcq-\d+"/g) || [];
console.log('Total MCQs found:', mcqMatches.length);

// Check carets
const caretMatches = content.match(/\d+\^\d+/g) || [];
console.log('Unformatted carets found:', caretMatches.length);

console.log('File size:', content.length, 'bytes');
