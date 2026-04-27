const fs = require('fs');

try {
    const imgPath = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\66ae3c29-3950-406e-bfcb-f1822305deb2\\media__1777317883787.png';
    const imgBuffer = fs.readFileSync(imgPath);
    const newB64 = imgBuffer.toString('base64');
    
    const targetFile = 'client/data/content/c9-sci-chem-2.ts';
    let content = fs.readFileSync(targetFile, 'utf8');

    const qId = 'id: "c9-sci-chem-2-it-1-q2"';
    const qIdx = content.indexOf(qId);
    if (qIdx === -1) {
        console.error('Question not found');
        process.exit(1);
    }

    const tableStart = "<div style='margin-top: 10px; overflow-x: auto;'><table";
    const startIdx = content.indexOf(tableStart, qIdx);
    if (startIdx === -1) {
        console.error('Table start not found');
        process.exit(1);
    }

    const tableEnd = '</table></div>"';
    const endIdx = content.indexOf(tableEnd, startIdx);
    if (endIdx === -1) {
        console.error('Table end not found');
        process.exit(1);
    }

    // imgTag does not start with a double quote because substring(0, startIdx) already provides it.
    // It ends with a double quote because we replace the entire tableEnd which includes the original double quote.
    const imgTag = "<div style='text-align: center;'><img src='data:image/png;base64," + newB64 + "' style='max-width: 100%; height: auto;' /></div>\"";
    
    const newContent = content.substring(0, startIdx) + imgTag + content.substring(endIdx + tableEnd.length);
    
    fs.writeFileSync(targetFile, newContent);
    console.log('Answer replaced successfully!');
} catch (e) {
    console.error('Error:', e);
    process.exit(1);
}
