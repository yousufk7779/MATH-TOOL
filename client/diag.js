const fs = require('fs');
const content = fs.readFileSync('d:/All NCERT SOLUTIONS/client/data/content/math-ch3.ts', 'utf8');

const target = 'x 6px rgba';
const idx = content.indexOf(target);
if (idx !== -1) {
    console.log('FOUND IT AT:', idx);
    const slice = content.substring(idx - 30, idx + 70);
    console.log('Bytes around it (hex):');
    for (let i = 0; i < slice.length; i++) {
        process.stdout.write(slice.charCodeAt(i).toString(16) + ' ');
    }
    console.log('\nString: ' + slice);
} else {
    console.log('Literal x 6px rgba not found. Trying x6px...');
    console.log('Index of x6px:', content.indexOf('x6px'));
}
