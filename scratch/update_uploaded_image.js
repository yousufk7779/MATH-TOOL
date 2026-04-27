const fs = require('fs');
const path = require('path');

try {
    // 1. Read the new image and convert to base64
    const imgPath = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\66ae3c29-3950-406e-bfcb-f1822305deb2\\media__1777317557143.png';
    const imgBuffer = fs.readFileSync(imgPath);
    const newB64 = imgBuffer.toString('base64');
    
    // 2. Read the content file
    const targetFile = 'client/data/content/c9-sci-chem-1.ts';
    let content = fs.readFileSync(targetFile, 'utf8');

    // 3. Find the question
    const qId = 'id: "c9-sci-chem-1-it-2-q2a"';
    const qIdx = content.indexOf(qId);
    if (qIdx === -1) {
        console.error('Question not found');
        process.exit(1);
    }

    // 4. Find the image tag
    const imgStart = "<img src='data:image/png;base64,";
    const startIdx = content.indexOf(imgStart, qIdx);
    if (startIdx === -1) {
        console.error('Image tag not found');
        process.exit(1);
    }

    // 5. Find the end of the base64 string (the closing single quote)
    const b64StartIdx = startIdx + imgStart.length;
    const endIdx = content.indexOf("'", b64StartIdx);
    if (endIdx === -1) {
        console.error('Closing quote not found');
        process.exit(1);
    }

    // 6. Replace the base64 string
    const newContent = content.substring(0, b64StartIdx) + newB64 + content.substring(endIdx);
    
    // 7. Write back
    fs.writeFileSync(targetFile, newContent);
    console.log('Image replaced successfully!');
} catch (e) {
    console.error('Error:', e);
    process.exit(1);
}
