const cp = require('child_process');
const fs = require('fs');

cp.exec('npx tsc --noEmit', { maxBuffer: 1024 * 1024 * 10 }, (err, stdout, stderr) => {
    fs.writeFileSync('tsc_errors.txt', stdout, 'utf8');
    console.log('Done');
});
