const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.user_uploaded';

if (fs.existsSync(userUploadedDir)) {
  const files = fs.readdirSync(userUploadedDir);
  console.log("All uploaded files in this session:", files);
  files.forEach(f => {
    const stat = fs.statSync(path.join(userUploadedDir, f));
    console.log(`${f}: ${stat.size} bytes, mtime: ${stat.mtime}`);
  });
}
