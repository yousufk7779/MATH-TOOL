const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-3.ts', 'utf8');

const mcqMatch = content.match(/export const c12Chem3Mcqs = (\[[\s\S]*?\]);\n/);
if (!mcqMatch) {
  console.log('No mcqs found');
  process.exit(1);
}

const mcqs = JSON.parse(mcqMatch[1]);
console.log('Original answers:', mcqs.map(m => m.correctAnswer).join(', '));

// Let's re-distribute some options if needed so that options A, B, C, D are evenly balanced (e.g. ~6 each)
// For each MCQ we want to change answer letter, we swap the option strings and update correctAnswer.
// Target counts: A: 6, B: 7, C: 6, D: 6

const targetLetters = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'b'];

mcqs.forEach((mcq, idx) => {
  const currentLetter = mcq.correctAnswer.toLowerCase();
  const targetLetter = targetLetters[idx];
  if (currentLetter !== targetLetter) {
    const letterToIdx = { a: 0, b: 1, c: 2, d: 3 };
    const currIdx = letterToIdx[currentLetter];
    const newIdx = letterToIdx[targetLetter];

    // clean option text without prefix
    const cleanOpts = mcq.options.map(o => o.replace(/^[A-D]\):\s*/, ''));

    // swap content
    const temp = cleanOpts[currIdx];
    cleanOpts[currIdx] = cleanOpts[newIdx];
    cleanOpts[newIdx] = temp;

    // re-add prefixes
    const prefixes = ['A):   ', 'B):   ', 'C):   ', 'D):   '];
    mcq.options = cleanOpts.map((text, i) => prefixes[i] + text);
    mcq.correctAnswer = targetLetter;
  }
});

const newCounts = { a: 0, b: 0, c: 0, d: 0 };
mcqs.forEach(m => newCounts[m.correctAnswer]++);
console.log('New balanced distribution:', newCounts);

// Replace in content
const updatedMcqsJson = JSON.stringify(mcqs, null, 2);
const newContent = content.replace(mcqMatch[1], updatedMcqsJson);
fs.writeFileSync('client/data/content/c12-chem-3.ts', newContent, 'utf8');
console.log('Successfully updated balanced MCQs in c12-chem-3.ts!');
