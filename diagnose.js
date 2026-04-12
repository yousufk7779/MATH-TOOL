const fs = require('fs');
let c = fs.readFileSync('client/data/content/math-ch3.ts', 'utf8');
let idx = c.indexOf('<img');
if (idx !== -1) {
    console.log("Found <img at", idx);
    console.log("Snippet:", c.substring(idx, idx + 200).replace(/\n/g, '\\n'));

    // find next closing double quote
    let nextQuote = c.indexOf('"', idx + 2);
    console.log("Next quote at", nextQuote);
} else {
    console.log("No <img found");
}
