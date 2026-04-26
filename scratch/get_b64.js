const fs = require('fs');
const path = 'C:/Users/hp/.gemini/antigravity/brain/51c3a93b-e2d0-423c-86d0-6f44d0e4c30a/media__1777199806160.png';
const buffer = fs.readFileSync(path);
const b64 = buffer.toString('base64');
console.log('data:image/png;base64,' + b64);
