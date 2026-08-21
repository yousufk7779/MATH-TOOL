const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');
const files = fs.readdirSync(contentDir);

let totalB64MB = 0;
let fileReport = [];

files.forEach(f => {
  if (f.endsWith('.ts') || f.endsWith('.js')) {
    const filePath = path.join(contentDir, f);
    const text = fs.readFileSync(filePath, 'utf8');
    const b64Matches = text.match(/data:image\/[a-zA-Z]+;base64,[A-Za-z0-9+/=]+/g) || [];
    if (b64Matches.length > 0) {
      let b64SizeMB = 0;
      b64Matches.forEach(m => b64SizeMB += m.length / (1024 * 1024));
      totalB64MB += b64SizeMB;
      fileReport.push({ file: f, count: b64Matches.length, b64MB: b64SizeMB.toFixed(2), totalMB: (text.length / (1024*1024)).toFixed(2) });
    }
  }
});

console.log(`FOUND BASE64 IMAGES IN ${fileReport.length} FILES. TOTAL BASE64 PAYLOAD: ${totalB64MB.toFixed(2)} MB\n`);
fileReport.forEach(r => {
  console.log(` - ${r.file}: ${r.count} base64 images (${r.b64MB} MB base64 / ${r.totalMB} MB total)`);
});
