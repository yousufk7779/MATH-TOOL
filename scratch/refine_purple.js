const fs = require('fs');
const path = 'd:\\All NCERT SOLUTIONS\\client\\data\\content\\c8-math-3.ts';
let content = fs.readFileSync(path, 'utf8');

// The correct theme color for Chapter 3 is PURPLE (#AB47BC)
// Replacing any leftover orange/yellow highlights with purple variants

content = content.replace(/#FFA726/g, '#BA68C8'); // Step labels
content = content.replace(/#FFD54F/g, '#CE93D8'); // Sub-questions
content = content.replace(/#F44336/g, '#AB47BC'); // Red rectangle in SVGs (using theme purple instead)

fs.writeFileSync(path, content);
console.log('Final purple theme refinements complete!');
