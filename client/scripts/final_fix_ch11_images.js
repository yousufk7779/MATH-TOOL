
const fs = require('fs');
const p = "d:\\All NCERT SOLUTIONS\\client\\data\\content\\math-ch11.ts";
let c = fs.readFileSync(p, 'utf8');

// The file contains base64 strings which internally have malformed XML attributes.
// To fix them, I need to find the base64, decode, fix, re-encode.
// I'll do this for all data:image/svg+xml;base64,... occurrences.

const fixedC = c.replace(/(data:image\/svg\+xml;base64,)([^"'\s`]+)/g, (match, prefix, b64) => {
    try {
        let dec = Buffer.from(b64, 'base64').toString('utf8');
        // Fix common corruptions
        dec = dec.replace(/stroke="stroke=" ([^"]+)"=""/g, 'stroke="$1"');
        dec = dec.replace(/stroke="stroke=" stroke=""/g, 'stroke="currentColor"');
        dec = dec.replace(/ "=""/g, '');
        dec = dec.replace(/ "}=\"\"/g, '');
        // Sometimes double stroke
        dec = dec.replace(/stroke="stroke=" ([^"]+)"/g, 'stroke="$1"');

        return prefix + Buffer.from(dec).toString('base64');
    } catch (e) {
        return match;
    }
});

fs.writeFileSync(p, fixedC, 'utf8');
console.log("SVG base64 strings cleaned successfully.");
