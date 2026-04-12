const fs = require('fs');
const file = 'd:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts';
let content = fs.readFileSync(file, 'utf8');

// The most foolproof way: find 'x 6px rgba(0,0,0,0.05)' and look backwards for where the img tag ends.
const badStr = 'x 6px rgba(0,0,0,0.05)';
let count = 0;
while (content.indexOf(badStr) !== -1) {
    let idx = content.indexOf(badStr);
    // Look back for the nearest closing of an img tag.
    // It should look like \" />",
    let startOfGarbage = -1;
    for (let i = idx; i > idx - 100; i--) {
        if (content.substring(i, i + 7) === '\\" />",') {
            startOfGarbage = i + 7;
            break;
        } else if (content.substring(i, i + 6) === '" />",') {
            startOfGarbage = i + 6;
            break;
        }
    }

    if (startOfGarbage !== -1) {
        // Find where this garbage section ends.
        // It ends with another \" />", or just ends the line.
        let endOfGarbage = content.indexOf('/>",', startOfGarbage);
        if (endOfGarbage === -1 || endOfGarbage > startOfGarbage + 100) {
            // It might be at the end of the line
            endOfGarbage = content.indexOf('\n', startOfGarbage);
            if (endOfGarbage === -1) endOfGarbage = content.length;
        } else {
            endOfGarbage += 4; // include />",
        }

        console.log(`Removing garbage from ${startOfGarbage} to ${endOfGarbage}`);
        content = content.substring(0, startOfGarbage) + content.substring(endOfGarbage);
        count++;
    } else {
        // If we can't find a valid boundary, just remove this instance to avoid infinite loop
        content = content.substring(0, idx) + content.substring(idx + badStr.length);
    }
}

if (count > 0) {
    console.log(`Removed ${count} garbage blocks.`);
    fs.writeFileSync(file, content, 'utf8');
} else {
    console.log('No garbage blocks found with badStr.');
}
