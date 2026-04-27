const fs = require('fs');

try {
    const b64Lines = fs.readFileSync('base64_images.txt', 'utf8').split('\n');
    const img1Line = b64Lines.find(l => l.startsWith('IMG1:'));
    if (!img1Line) {
        console.error('IMG1: not found');
        process.exit(1);
    }
    const b64 = img1Line.replace('IMG1:', '').trim();
    
    let content = fs.readFileSync('client/data/content/c9-sci-chem-1.ts', 'utf8');

    const qId = 'id: "c9-sci-chem-1-it-2-q2a"';
    const qIdx = content.indexOf(qId);
    if (qIdx === -1) {
        console.error('Question not found');
        process.exit(1);
    }

    const tableStart = "<div style='margin-top: 10px; overflow-x: auto;'><table";
    const startIdx = content.indexOf(tableStart, qIdx);
    if (startIdx === -1) {
        console.error('Table not found');
        process.exit(1);
    }

    // Find the end of the line which ends with </div>"
    const endIdx = content.indexOf('</div>"', startIdx);
    if (endIdx === -1) {
        console.error('Table end not found');
        process.exit(1);
    }

    const imgTag = "<div style='text-align: center;'><img src='data:image/png;base64," + b64 + "' style='max-width: 100%; height: auto;' /></div>\"";

    const newContent = content.substring(0, startIdx) + imgTag + content.substring(endIdx + 7);
    fs.writeFileSync('client/data/content/c9-sci-chem-1.ts', newContent);
    console.log('Replaced successfully!');
} catch (e) {
    console.error(e);
}
