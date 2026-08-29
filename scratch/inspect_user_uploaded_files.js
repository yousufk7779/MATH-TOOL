const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\a5d89c48-b99a-4b0b-8fde-e8954f944404\\.user_uploaded';

const files = fs.readdirSync(userUploadedDir).filter(f => f.startsWith('media_') && f.endsWith('.jpg'));

files.forEach(f => {
  const full = path.join(userUploadedDir, f);
  const stat = fs.statSync(full);
  console.log(`${f}: size = ${stat.size}, time = ${stat.mtime}`);
});
