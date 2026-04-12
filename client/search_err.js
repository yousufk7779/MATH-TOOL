const fs = require('fs');
const content = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

// The Babel error was at (43:850795)
const line43 = content.split('\n')[42];
console.log('Line 43 total length:', line43.length);
console.log('Context 850795:', line43.substring(850795 - 100, 850795 + 100));

// Let's search for the "unexpected" part
const patterns = ['bo" />"', 'bo\\" />"', 'box-shad'];
for (const p of patterns) {
    const idx = line43.indexOf(p);
    if (idx !== -1) {
        console.log(`Found pattern "${p}" at index ${idx}`);
        console.log('Context:', line43.substring(idx - 50, idx + 80));
    } else {
        console.log(`Pattern "${p}" not found`);
    }
}
