const fs = require('fs');

try {
    const imgPath = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\66ae3c29-3950-406e-bfcb-f1822305deb2\\media__1777318995626.png';
    const imgBuffer = fs.readFileSync(imgPath);
    const newB64 = imgBuffer.toString('base64');
    
    const targetFile = 'client/data/content/c9-sci-chem-2.ts';
    let content = fs.readFileSync(targetFile, 'utf8');

    const qId = 'id: "c9-sci-chem-2-ex-q3"';
    const qIdx = content.indexOf(qId);
    if (qIdx === -1) {
        console.error('Question not found');
        process.exit(1);
    }

    const tableStart = "<div style='overflow-x: auto;'><table";
    const startIdx = content.indexOf(tableStart, qIdx);
    if (startIdx === -1 || startIdx > qIdx + 2000) {
        console.error('Table start not found in Q3');
        process.exit(1);
    }

    const tableEnd = '</table></div>';
    const endIdx = content.indexOf(tableEnd, startIdx);
    if (endIdx === -1) {
        console.error('Table end not found');
        process.exit(1);
    }

    const imgTag = "<div style='text-align: center; width: 100%; overflow: hidden;'><img src='data:image/png;base64," + newB64 + "' width='100%' style='width: 100%; height: auto;' /></div>";
    
    // Replace the table with the image in the question field
    const newContent = content.substring(0, startIdx) + imgTag + content.substring(endIdx + tableEnd.length);
    
    fs.writeFileSync(targetFile, newContent);
    console.log('Table replaced with image successfully!');
} catch (e) {
    console.error('Error:', e);
    process.exit(1);
}
