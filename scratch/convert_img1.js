const fs = require('fs');
const content = fs.readFileSync('base64_images.txt', 'utf8');
const lines = content.split('\n');
const img1Line = lines.find(l => l.startsWith('IMG1:'));
if (img1Line) {
    const b64 = img1Line.replace('IMG1:', '').trim();
    const buffer = Buffer.from(b64, 'base64');
    fs.writeFileSync('scratch/img1.png', buffer);
    console.log('Done');
} else {
    console.log('IMG1 not found');
}
