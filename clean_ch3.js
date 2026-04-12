const fs = require('fs');

let c = fs.readFileSync('client/data/content/math-ch3.ts', 'utf8');

// The file might currently have its newlines stripped from auto_fix_ch3.js
// It's probably better to just find `"<img src=\\"data:image` and replace the entire string literal.
// But since the newlines were stripped, the whole broken <img is on line 43.
// Let's replace any `"<img src=\\"data:image` ... until we find what looks like the next valid string in the array.
// Notice that the next string usually starts with `"`, and the broken element is separated by a comma (or is missing a quote entirely and eats up code).

let out = "";
let i = 0;
let modified = false;

while (i < c.length) {
    let imgStart = c.indexOf('"<img src=\\"data:image', i);
    if (imgStart === -1) {
        out += c.substring(i);
        break;
    }

    out += c.substring(i, imgStart);

    // find end of this broken string
    // Since it's corrupted and has no closing quote in the right place, we'll scan forward.
    // We want to skip all base64 garbage and look for something that strongly looks like the start of the next solution line.
    // E.g., `",\n` or `<span` or `**` or `Solution:`

    let j = imgStart + 20;
    let endIdx = -1;
    // We will look for `",` followed by spaces/newlines and then `"`
    let regex = /",\s*"/g;
    regex.lastIndex = imgStart;
    let match = regex.exec(c);
    if (match && match.index < imgStart + 3000000) {
        // found a boundary!
        endIdx = match.index + 2; // right after `,`
    } else {
        // try to find `">\n` or `,"answer":`
        let ansMatch = /",\s*"answer":/g;
        ansMatch.lastIndex = imgStart;
        let m2 = ansMatch.exec(c);
        if (m2) {
            endIdx = m2.index + 2;
        } else {
            // fallback
            endIdx = c.indexOf('/>",', imgStart);
            if (endIdx !== -1) endIdx += 4;
        }
    }

    if (endIdx !== -1) {
        let replacement = '"[Image Removed]",\n';
        out += replacement;
        i = endIdx;
    } else {
        out += '"[Image Removed]",\n';
        i = c.length;
    }
    modified = true;
}

if (modified) {
    fs.writeFileSync('client/data/content/math-ch3-fixed.ts', out, 'utf8');
    console.log("Written to math-ch3-fixed.ts");
}
