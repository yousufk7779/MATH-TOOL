const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.user_uploaded';

const files = [
  'media_1788189110387.jpg',
  'media_1788189110510.jpg',
  'media_1788189110603.jpg',
  'media_1788189110668.jpg',
  'media_1788189110700.jpg',
  'media_1788189124134.jpg'
];

files.forEach((f, idx) => {
  const full = path.join(userUploadedDir, f);
  const stat = fs.statSync(full);
  console.log(`File [${idx + 1}]: ${f}, Size: ${stat.size} bytes`);
});
