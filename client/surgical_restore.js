const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(file, 'utf8');

console.log('Original length:', content.length);

// 1. Surgical fix for q5 - q6 transition
// We search for the unique "q5 answer" part
const q5AnswerLine = '"answer": "Therefore, the required values are sin Q = <sup>7</sup>/<sub>25</sub>, cos Q = <sup>24</sup>/<sub>25</sub>."';
const q6Start = '"id": "q6"';

// We want the part before q5AnswerLine to end with ]
// And everything between q5AnswerLine and q6Start to be the boilerplate closing q5 and opening q6.

// Let's find where q5's solution should realistically end.
const targetResult = '**Therefore, the required values are sin Q = <sup>7</sup>/<sub>25</sub>, cos Q = <sup>24</sup>/<sub>25</sub>.**';
const resultIdx = content.indexOf(targetResult);
if (resultIdx !== -1) {
    const stringEnd = content.indexOf('"', resultIdx + targetResult.length);
    if (stringEnd !== -1) {
        // We found the end of the last valid string in q5's solution.
        // Now find q6.
        const q6Idx = content.indexOf(q6Start);
        if (q6Idx !== -1) {
            const header = content.substring(0, stringEnd + 1);
            const footer = content.substring(q6Idx - 15); // include some whitespace/brackets

            // Reconstruct the bridge
            const bridge = '\n            ],\n            ' + q5AnswerLine + '\n        },\n        {\n            ';
            content = header + bridge + footer;
            console.log('Bridge fixed between q5 and q6');
        }
    }
}

// 2. Fix the end of file
const lastClosingIdx = content.lastIndexOf('};');
if (lastClosingIdx !== -1) {
    content = content.substring(0, lastClosingIdx + 2);
    console.log('Fixed file end');
}

// 3. Fix the "Unterminated string" at line 144
// It might be due to a stray \ at the end of a line.
// Let's remove any \ that is at the end of a line inside a quote.
content = content.replace(/\\\s*\n/g, '\n');

// 4. Final safety check: if we have any \" that should be " or vice versa.
// Let's assume all attribute quotes should be escaped \" because they are inside a TS string.
// If my previous script replaced them with ", let's fix it.
content = content.replace(/=([\\"]+)/g, '=\\\"'); // Normalize =\"
content = content.replace(/=\\\"\"/g, '=\\\"'); // dedupe

fs.writeFileSync(file, content, 'utf8');
console.log('New length:', content.length);
