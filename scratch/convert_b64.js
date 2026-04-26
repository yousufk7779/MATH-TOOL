const fs = require('fs');
const b64 = fs.readFileSync('b64.txt', 'utf16le').trim().replace(/^\ufeff/, '');
const buffer = Buffer.from(b64, 'base64');
fs.writeFileSync('scratch/q9_user_image.png', buffer);
console.log('Done');
