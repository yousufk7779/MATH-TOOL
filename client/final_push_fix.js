const fs = require('fs');
const content = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

// The garbage is definitely  " />",x 6px rgba(0,0,0,0.05);\" />",
// Or  \" />",x 6px rgba(0,0,0,0.05);\" />",
// We simply want to strip any  " />",x 6px rgba...  garbage.

// This replaces the whole block including the garbage and the final correctly-escaped suffix.
// We want it to just be  \" />",
const broken1 = /" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g;
const broken2 = /\\" \/>",x 6px rgba\(0,0,0,0\.05\);\\" \/>",/g;

let final = content.replace(broken1, '\\" />",');
final = final.replace(broken2, '\\" />",');

// Also handle the case where it's at the very end of the line without the rest
const brokenTail = /\\" \/>",x 6px rgba\(0,0,0,0\.05/g;
final = final.replace(brokenTail, '\\" />",');

// Handle the one with NO backslash at the end
const brokenTail2 = /" \/>",x 6px rgba\(0,0,0,0\.05/g;
final = final.replace(brokenTail2, '\\" />",');

if (final.length !== content.length) {
    console.log(`Length decreased from ${content.length} to ${final.length}`);
    fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', final, 'utf8');
} else {
    console.log('No change yet. Still trying...');
    // Maybe try identifying it by the "x 6px rgba" part uniquely
    const regex = /" \/>",x 6px rgba\(0,0,0,0\.05\);[^\s"]+ \/>",/g;
    final = content.replace(regex, '\\" />",');
    if (final.length !== content.length) {
        console.log(`Matched with robust regex. Decreased by ${content.length - final.length}`);
        fs.writeFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', final, 'utf8');
    } else {
        console.log('STILL NO MATCH! Dumping raw tail of L43 for one last check:');
        console.log(content.split('\n')[42].slice(-100));
    }
}
