const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-8.ts', 'utf8');

console.log('--- CHAPTER 8 AUDIT: ALDEHYDES, KETONES AND CARBOXYLIC ACIDS ---');
console.log('File size:', content.length, 'bytes');

// 1. Diagrams
const imgMatches = content.match(/data:image\/[a-zA-Z0-9.+_-]+;base64,[A-Za-z0-9+/=]+/g) || [];
const svgMatches = content.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log('Embedded base64 images:', imgMatches.length);
console.log('Embedded SVGs:', svgMatches.length);

// 2. Sections in Overview
const h2Matches = content.match(/<h2[\s\S]*?<\/h2>/g) || [];
console.log('H2 Section Headers in Overview:', h2Matches.length);
h2Matches.forEach(h => console.log(' -', h.replace(/<[^>]+>/g, '').trim()));

// 3. Questions in Solutions
const qMatches = content.match(/Q\d+:/g) || [];
console.log('Total Questions found in Solutions:', qMatches.length);
const qNums = qMatches.map(q => parseInt(q.replace(/\D/g, '')));
console.log('Min Q:', Math.min(...qNums), 'Max Q:', Math.max(...qNums));

// 4. MCQs
const mcqMatches = content.match(/"id":\s*"c12-chem-8-mcq-\d+"/g) || [];
console.log('Total MCQs found:', mcqMatches.length);

// 5. Raw carets check
const caretMatches = content.match(/[a-zA-Z0-9\)]\^[a-zA-Z0-9\(\-]/g) || [];
console.log('Raw carets count:', caretMatches.length);
if (caretMatches.length > 0) {
  console.log('Caret samples:', caretMatches.slice(0, 5));
}

// 6. Check duplicate title divs
const duplicateTitleMatches = content.match(/<div[^>]*>📸[^<]+<\/div>/g) || [];
console.log('Duplicate title divs found:', duplicateTitleMatches.length);

// 7. Check image captions
const imgPositions = [];
let idx = 0;
while ((idx = content.indexOf('<img', idx)) !== -1) {
  imgPositions.push(idx);
  idx += 4;
}

console.log('\n--- DIAGRAM CARDS CAPTIONS ---');
imgPositions.forEach((pos, i) => {
  const quoteClose = content.indexOf('\"', pos + 12);
  const endCard = content.indexOf('</div>', quoteClose + 50);
  const endDiv2 = content.indexOf('</div>', endCard + 6);
  const captionChunk = content.slice(quoteClose, endDiv2 + 6);
  console.log(`\n================ CARD ${i + 1} ================`);
  console.log(captionChunk.replace(/\\"/g, '"').replace(/\\n/g, '\n').trim());
});

// 8. MCQs verification
const mcqChunk = content.match(/export const c12Chem8Mcqs = (\[[\s\S]*?\]);\n/)[1];
const mcqs = JSON.parse(mcqChunk);
console.log('\nTotal MCQs parsed:', mcqs.length);
const ansCounts = { a: 0, b: 0, c: 0, d: 0 };
mcqs.forEach((m, idx) => {
  ansCounts[m.correctAnswer] = (ansCounts[m.correctAnswer] || 0) + 1;
  m.options.forEach((opt, oIdx) => {
    const expectedPrefix = ['A):   ', 'B):   ', 'C):   ', 'D):   '][oIdx];
    if (!opt.startsWith(expectedPrefix)) {
      console.warn(`MCQ ${idx + 1} option ${oIdx} prefix issue: "${opt.slice(0, 10)}"`);
    }
  });
});
console.log('MCQs Answer distribution:', ansCounts);
