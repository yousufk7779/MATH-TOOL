const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-2.ts', 'utf8');

// Check Solutions breakdown
const solChunk = content.match(/export const c12Chem2HtmlSolutions = ([\s\S]*?);\n\nexport const c12Chem2Mcqs/)[1];
const vsaMatches = solChunk.match(/Q([1-9]|[1-3][0-9]|40):/g) || [];
const saMatches = solChunk.match(/Q(4[1-9]|[5-7][0-9]|80):/g) || [];
const laMatches = solChunk.match(/Q(8[1-9]|9[0-9]|100):/g) || [];

console.log('Section A (VSA 1-40):', vsaMatches.length);
console.log('Section B (SA 41-80):', saMatches.length);
console.log('Section C (LA 81-100):', laMatches.length);

// Check MCQs
const mcqChunk = content.match(/export const c12Chem2Mcqs = (\[[\s\S]*?\]);\n/)[1];
const mcqs = JSON.parse(mcqChunk);
console.log('Total MCQs parsed:', mcqs.length);

const ansCounts = { a: 0, b: 0, c: 0, d: 0 };
mcqs.forEach((m, idx) => {
  ansCounts[m.correctAnswer] = (ansCounts[m.correctAnswer] || 0) + 1;
  // check options format
  m.options.forEach((opt, oIdx) => {
    const expectedPrefix = ['A):   ', 'B):   ', 'C):   ', 'D):   '][oIdx];
    if (!opt.startsWith(expectedPrefix)) {
      console.warn(`MCQ ${idx + 1} option ${oIdx} prefix issue: "${opt.slice(0, 10)}"`);
    }
  });
});
console.log('MCQs Answer distribution:', ansCounts);
