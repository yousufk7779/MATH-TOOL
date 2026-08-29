const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\a5d89c48-b99a-4b0b-8fde-e8954f944404\\.user_uploaded';

const imageMap = {
  21: 'media_1787935407687.jpg',
  22: 'media_1787935407962.jpg',
  23: 'media_1787935408193.jpg',
  24: 'media_1787935408478.jpg',
  25: 'media_1787935408553.jpg',
  26: 'media_1787935448781.jpg',
  27: 'media_1787935448964.jpg',
  28: 'media_1787935449045.jpg'
};

const b64Data = {};
for (const [num, filename] of Object.entries(imageMap)) {
  const buf = fs.readFileSync(path.join(userUploadedDir, filename));
  b64Data[num] = `data:image/jpeg;base64,${buf.toString('base64')}`;
  console.log(`Diagram ${num} loaded, b64 length: ${b64Data[num].length}`);
}

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\diagrams_21_to_28_b64.json', JSON.stringify(b64Data, null, 2), 'utf8');
console.log("Saved diagrams_21_to_28_b64.json successfully!");
