const fs = require('fs'); 
const content = fs.readFileSync('client/data/content/c9-sci-chem-1.ts', 'utf8'); 
const qId = content.indexOf('id: "c9-sci-chem-1-it-2-q2a"'); 
const nextImgIdx = content.indexOf("<img src='data:image/png;base64,", qId); 
const nextLength = "<img src='data:image/png;base64,".length; 
console.log('qId:', qId, 'nextImgIdx:', nextImgIdx, 'nextLength:', nextLength); 
const srcEndIdx = content.indexOf("'", nextImgIdx + nextLength); 
console.log('srcEndIdx:', srcEndIdx); 
if (srcEndIdx !== -1) {
    console.log('char at srcEndIdx:', content[srcEndIdx]); 
    console.log('chars around srcEndIdx:', content.substring(srcEndIdx - 10, srcEndIdx + 50));
}
