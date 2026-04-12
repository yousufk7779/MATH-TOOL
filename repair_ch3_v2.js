const fs = require('fs');
const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(path, 'utf8');

console.log("Original content length:", content.length);

// 1. Structural Fix for Exercise 1 Question 1
// It has a premature closing of the solution array.
content = content.replace('"solution": ["[Image Removed]"],', '"solution": ["[Image Removed]",');

// 2. Fix literal newlines in strings
// We will iterate and replace any \n or \r found while inString is true.
let fixed = "";
let inString = false;
let escape = false;
for (let i = 0; i < content.length; i++) {
    let char = content[i];
    if (escape) {
        fixed += char;
        escape = false;
    } else if (char === '\\') {
        fixed += char;
        escape = true;
    } else if (char === '"') {
        fixed += char;
        inString = !inString;
    } else if (char === '\n' || char === '\r') {
        if (inString) {
            // Literal newline inside string!
            fixed += ' '; // Replace with space to avoid breaking syntax
            if (char === '\r' && content[i + 1] === '\n') i++; // Skip the \n part of \r\n
        } else {
            fixed += char;
        }
    } else {
        fixed += char;
    }
}
content = fixed;

// 3. Fix problematic nested quote in line 80 and 120 if they are unescaped
// Let's use a regex to find strings and escape any internal double quotes.
// This is safest if we only target suspected content strings.
content = content.replace(/"question":\s*"([^"]*)"/g, (match, p1) => {
    // If there were unescaped quotes, the regex would have stopped early.
    // So this might not catch them if they are truly unescaped.
    return match;
});

// Since the error at line 80 col 203 suggests a quote issue, 
// let's look for literal quotes inside strings that are NOT preceded by backslash.
// We'll focus on the "question" and "answer" values.
// Actually, let's just look for any double quote followed by letters/space and then another double quote,
// where the whole thing is meant to be one string.
// This is risky. Let's just fix the known corrupted patterns if any.

// Let's check for "answer": "Solution: x = 6, y = 0"
// I saw some and they looked fine.

fs.writeFileSync(path, content, 'utf8');
console.log("Saved fixed file.");
