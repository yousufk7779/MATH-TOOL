const fs = require('fs');
const path = require('path');

const imagePath = 'C:/Users/hp/.gemini/antigravity/brain/d6b54ba5-59a9-4d2a-8979-a2db378dc9b4/media__1777664889377.png';
const targetFile = 'd:/All NCERT SOLUTIONS/client/data/content/c7-sci-3.ts';

const base64 = fs.readFileSync(imagePath).toString('base64');
const imgTag = `<div style=\\"text-align: center; color: #FFFFFF;\\"><img src=\\"data:image/png;base64,${base64}\\" style=\\"width: 100%; max-width: 100%; height: auto;\\" /></div>`;

let content = fs.readFileSync(targetFile, 'utf8');
content = content.replace('(Image will be added in next update)', imgTag);

fs.writeFileSync(targetFile, content);
console.log('Replacement successful');
