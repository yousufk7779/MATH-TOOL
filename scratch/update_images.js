const fs = require('fs');
const path = require('path');

const tsFile = 'd:/All NCERT SOLUTIONS/client/data/content/c9-sci-bio-4.ts';
const img1File = 'd:/All NCERT SOLUTIONS/scratch/img1.b64';
const img2File = 'd:/All NCERT SOLUTIONS/scratch/img2.b64';

const img1 = fs.readFileSync(img1File, 'utf8').trim();
const img2 = fs.readFileSync(img2File, 'utf8').trim();

let content = fs.readFileSync(tsFile, 'utf8');

function replaceAnswer(id, b64) {
    const startKey = `id: "${id}"`;
    const solKey = 'solution: [';
    
    const startIdx = content.indexOf(startKey);
    if (startIdx === -1) {
        console.log(`Could not find ID: ${id}`);
        return;
    }
    
    const solIdx = content.indexOf(solKey, startIdx);
    if (solIdx === -1) {
        console.log(`Could not find solution key for ID: ${id}`);
        return;
    }
    
    const endIdx = content.indexOf(']', solIdx);
    if (endIdx === -1) {
        console.log(`Could not find closing bracket for ID: ${id}`);
        return;
    }
    
    const imgTag = `"<div style='margin-top: 10px; text-align: center;'><img src='data:image/png;base64,${b64}' style='max-width: 100%; height: auto; border-radius: 8px;' /></div>"`;
    
    content = content.substring(0, solIdx + solKey.length) + 
              '\n            ' + imgTag + '\n          ' + 
              content.substring(endIdx);
}

replaceAnswer('c9-sci-bio-4-ex-q20', img1);
replaceAnswer('c9-sci-bio-4-ex-q22', img2);

fs.writeFileSync(tsFile, content);
console.log('Successfully updated Q20 and Q22 answers with images.');
