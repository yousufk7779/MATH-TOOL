const fs = require('fs');
const buffer = fs.readFileSync('b64.txt');
console.log(buffer.slice(0, 100).toString('utf16le'));
