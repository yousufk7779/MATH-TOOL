const fs = require('fs');
const path = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(path, 'utf8');

// Fix the "backslash-over-kill" quotes.
// Any sequence like \\" or \\\" that precedes a quote intended to be INSIDE the string
// needs to be simplified to just \"
console.log("Fixing over-escaped quotes...");

// Robust replacement for strings
// We want to find any double backslash followed by a quote and turn it into single backslash quote.
content = content.replace(/\\\\+\"/g, '\\"');

// Also check for literal newlines again just in case
content = content.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/gs, (match) => {
    return match.replace(/\r?\n/g, ' ');
});

fs.writeFileSync(path, content, 'utf8');
console.log("Done.");
