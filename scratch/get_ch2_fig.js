const fs = require('fs');
const path = 'C:/Users/hp/.gemini/antigravity/brain/d6b54ba5-59a9-4d2a-8979-a2db378dc9b4/media__1777652825610.png';
const buffer = fs.readFileSync(path);
const b64 = buffer.toString('base64');
console.log('data:image/png;base64,' + b64);
