const fs = require('fs');
const content = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

// Use a regex on the entire string to strip everything after \" />", up to the comma if it exists, for all image lines.
// But only if it's garbage.
// A simpler way: Find all instances of  " />",x 6px rgba(0,0,0,0.05);\" />",  and replace them with  " />",  where the quotes might be escaped.

// This specific garbage is:
// \" />\",x 6px rgba(0,0,0,0.05);\" />\",
// In a JS string it's: \\" />\",x 6px rgba(0,0,0,0.05);\\" />\",

const broken = /\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g;
const fixed = content.replace(broken, '\\" />",');

// Also for the trailing garbage on line 43:
// ... \" />\",x 6px rgba(0,0,0,0.05
const brokenTail = /\\" \/>",x 6px rgba\(0,0,0,0\.05[^\s",]*/g;
const final = fixed.replace(brokenTail, '\\" />",');

if (final.length !== content.length) {
    console.log(`Length decreased from ${content.length} to ${final.length}`);
    fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', final, 'utf8');
} else {
    console.log('No change. The regex did not match.');
    // Let's dump the ACTUAL bytes of the suspected garbage area to see why it doesn't match.
    const l43 = content.split('\n')[42];
    console.log('Line 43 tail bytes (last 50 chars):');
    const tail = l43.slice(-50);
    for (let i = 0; i < tail.length; i++) {
        process.stdout.write(tail.charCodeAt(i).toString(16) + ' ');
    }
    console.log('\nTail string: ' + tail);
}
