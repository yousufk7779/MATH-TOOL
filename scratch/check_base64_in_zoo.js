const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');
['c11-zoo-1.ts', 'c11-zoo-2.ts', 'c11-zoo-3.ts', 'c11-zoo-4.ts'].forEach(file => {
  const filePath = path.join(contentDir, file);
  if (fs.existsSync(filePath)) {
    const text = fs.readFileSync(filePath, 'utf8');
    const b64Matches = text.match(/data:image\/[a-zA-Z]+;base64,[A-Za-z0-9+/=]+/g) || [];
    let b64SizeMB = 0;
    b64Matches.forEach(m => b64SizeMB += m.length / (1024 * 1024));
    console.log(`${file}: ${b64Matches.length} base64 images, total base64 size = ${b64SizeMB.toFixed(2)} MB (file total = ${(text.length / (1024*1024)).toFixed(2)} MB)`);
  }
});
