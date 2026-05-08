const fs = require('fs');
const path = 'd:\\All NCERT SOLUTIONS\\client\\data\\content\\c8-math-3.ts';
let content = fs.readFileSync(path, 'utf8');

// The correct theme color for Chapter 3 (Understanding Quadrilaterals) is PURPLE
// because it is the 3rd chapter and follows the default gradient mapping (Index 2).
// The purple accent color is #AB47BC.

content = content.replace(/#FB8C00/g, '#AB47BC');
content = content.replace(/#FF8C00/g, '#AB47BC');
content = content.replace(/rgba\(255, 140, 0/g, 'rgba(171, 71, 188'); // Purple rgba for sol-box background

fs.writeFileSync(path, content);
console.log('Chapter 3 theme color corrected to PURPLE (#AB47BC)!');
