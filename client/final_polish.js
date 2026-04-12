const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the double brace
content = content.replace(/},\n\s*{\n\s*{\n\s*"id": "q6"/g, '},\n        {\n            "id": "q6"');

// 2. Clean up common stray backslashes
// Trig functions
content = content.replace(/\\(sin|cos|tan|cot|sec|cosec)/g, '$1');
// HTML tags commonly hit
content = content.replace(/\\<(sup|sub|\/sup|\/sub|span|img|br)/g, '<$1');
// Symbols
content = content.replace(/\\(∠|∆|√|⇒|×|≠|≤|≥|±|π|·|°)/g, '$1');

// 3. Fix botched 30^° to 30°
content = content.replace(/\^°/g, '°');

// 4. Fix stray \ cm to cm
content = content.replace(/\\ cm/g, ' cm');

// 5. Ensure all <sup> and <sub> are not preceded by \
content = content.replace(/\\<sup>/g, '<sup>');
content = content.replace(/\\<sub>/g, '<sub>');
content = content.replace(/\\<\/sup>/g, '</sup>');
content = content.replace(/\\<\/sub>/g, '</sub>');

// 6. Fix any stray \" that might have come from my replacement mistakes
// but keep them for attributes!
// A simple way to check for attribute quotes: src=\"...\"
// But also check for end-of-string quotes: sin Q = ... .**\"
// The ending quote of a string in the solution array should NOT be escaped.
// "line content",
// If it's "line content\", then it's escaped.
content = content.replace(/\\\",/g, '",'); // Fix escaped ending quote
content = content.replace(/\\\"\]/g, '"]'); // Fix escaped ending array quote
// BUT put them BACK for attributes!
content = content.replace(/src=/g, 'src=\\"');
content = content.replace(/style=/g, 'style=\\"');
content = content.replace(/class=/g, 'class=\\"');
// Deduplicate
content = content.replace(/src=\\\"\\\"/g, 'src=\\\"');
content = content.replace(/style=\\\"\\\"/g, 'style=\\\"');
content = content.replace(/class=\\\"\\\"/g, 'class=\\\"');

// 7. Fix q5 answer specifically if it was messed up
content = content.replace(/"\*\*Therefore, the required values are sin Q = <sup>7<\/sup>\/<sub>25<\/sub>, cos Q = <sup>24<\/sup>\/<sub>25<\/sub>.\*\*"\]/, '"**Therefore, the required values are sin Q = <sup>7</sup>/<sub>25</sub>, cos Q = <sup>24</sup>/<sub>25</sub>.**"');

fs.writeFileSync(file, content, 'utf8');
console.log('Final polish complete.');
