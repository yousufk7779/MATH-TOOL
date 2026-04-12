const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch8.ts';
let content = fs.readFileSync(file, 'utf8');

// 1. Identify the damage in q5
// We want q5's solution to end after the sin/cos result.
const q5Start = content.indexOf('"id": "q5"');
if (q5Start !== -1) {
    const solStart = content.indexOf('"solution": [', q5Start);
    if (solStart !== -1) {
        const firstResult = content.indexOf('**Therefore, the required values are sin Q', solStart);
        if (firstResult !== -1) {
            // Find the end of this string
            const firstResultEnd = content.indexOf('**"', firstResult) + 3;
            // Now find where the solution array SHOULD end.
            // It should be ],
            const solutionEnd = content.indexOf(']', firstResultEnd);

            // If we found extra stuff between firstResultEnd and solutionEnd, we need to cut it.
            // But wait, the current file is so corrupted that line 144 had "**...**"]", and then q12 stuff!

            // Let's locate q6.
            const q6Start = content.indexOf('"id": "q6"');
            if (q6Start !== -1) {
                // Everything between the firstResultEnd and q6Start is garbage.
                // We want: 
                // ... results.**"
                // ],
                // "answer": "...",
                // },
                // {
                // "id": "q6"

                const answerStr = '\n            "answer": "Therefore, the required values are sin Q = <sup>7</sup>/<sub>25</sub>, cos Q = <sup>24</sup>/<sub>25</sub>."\n        },\n        {\n            "id": "q6"';
                content = content.substring(0, firstResultEnd) + '\n            ]' + answerStr + content.substring(q6Start + 10);
                console.log('Fixed q5 solution and merged back to q6.');
            }
        }
    }
}

// 2. Fix the end of file mess
// The file should end with };
// Current mess: Sample: ... }; ], "correctAnswer": "
const footerIdx = content.lastIndexOf('};');
if (footerIdx !== -1) {
    console.log('Found footer at', footerIdx, 'Truncating.');
    content = content.substring(0, footerIdx + 2);
}

// 3. One more pass on backslashes just in case
content = content.replace(/\\(sin|cos|tan|cot|sec|cosec|∠|∆|√|⇒|×|≠|≤|≥|±|π|·|°)/g, '$1');
content = content.replace(/\\n/g, '\n'); // Restore newlines if they were escaped
content = content.replace(/\\"/g, '\"'); // We want literal quotes NOT escaped quotes in the source
// Wait! In TypeScript data files, if it's a string, it should be "literal \" escaped".
// So if I have " ... \" ... " then the quote is escaped.
// If I want a literal backslash I need \\.
// The data is: "question": "...", 
// So internal quotes should be escaped: \"
// My fix_ch8 messed up by replacing \" with ".
// NO! I should keep \" for internal quotes like <img src=\"...\">

// Let's revert the quote damage.
content = content.replace(/src=/g, 'src=\\"');
// And fix the closing of attributes
content = content.replace(/style=/g, 'style=\\"');

// Actually, let's be smarter.
// Any quote inside a string block starting with " and ending with " should be escaped.
// My previous script might have unescaped them.

fs.writeFileSync(file, content, 'utf8');
console.log('math-ch8.ts restored and fixed');
