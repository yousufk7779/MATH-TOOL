const fs = require('fs');
let c = fs.readFileSync('client/data/content/math-ch3.ts', 'utf8');

// The file is a valid TS module, but string literals are missing closing quotes, and contain literal newlines.
// We can find all occurrences of `"<img src=\\"data:image`
let out = "";
let i = 0;
let modified = false;

while (i < c.length) {
    let imgStart = c.indexOf('"<img src=\\"data:image', i);
    if (imgStart === -1) {
        out += c.substring(i);
        break;
    }

    // We found an image tag!
    out += c.substring(i, imgStart);

    // Now we need to find the end of this image block.
    // Ideally it ends with `/>",`
    // However, it might be corrupted and missing the `/>",`
    // Let's look for the next obvious solution array element like `"Solution:"` or `"<span` or `answer:`
    // Or just look for the first double quote that is at the START of a line, indicating the next element.
    let j = imgStart + 20;
    let endOfBlock = -1;
    let closedProperly = false;

    // look for `/>",` within next 2 million chars (base64 can be huge)
    let normalEnd = c.indexOf('/>",', imgStart);
    // Is there a natural next element before normalEnd, or is normalEnd missing?
    let nextElement = c.indexOf('\n                        "', imgStart + 20); // typical indentation
    if (nextElement === -1) nextElement = c.indexOf('\n                    "', imgStart + 20);

    if (normalEnd !== -1 && (nextElement === -1 || normalEnd < nextElement)) {
        // It's closed properly!
        endOfBlock = normalEnd + 4; // include />",
        closedProperly = true;
    } else {
        // Corrupted! It's missing `/>",`
        // We stop at nextElement
        endOfBlock = nextElement !== -1 ? nextElement : c.length;
    }

    // Now we have the block from imgStart to endOfBlock.
    let block = c.substring(imgStart, endOfBlock);

    // If it's corrupted or just has newlines, we need to fix it.
    // Replace newlines inside the block.
    // And if it's corrupted, add the closing `/>",`
    block = block.replace(/\r?\n/g, ''); // strip all newlines

    if (!closedProperly) {
        // we stripped newlines, so we just append the closing tag
        block += '/>",\n';
    } else {
        block += '\n'; // add back the newline after `/>",` that we stripped
    }

    out += block;
    i = endOfBlock;
    modified = true;
}

if (modified) {
    fs.writeFileSync('client/data/content/math-ch3.ts', out, 'utf8');
    console.log("math-ch3.ts fixed!");
} else {
    console.log("No images found or modified.");
}
