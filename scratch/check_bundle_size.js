const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');
const files = fs.readdirSync(contentDir);

let totalBytes = 0;
let fileDetails = [];

files.forEach(f => {
  const filePath = path.join(contentDir, f);
  const stats = fs.statSync(filePath);
  totalBytes += stats.size;
  fileDetails.push({ file: f, sizeKB: (stats.size / 1024).toFixed(1) });
});

fileDetails.sort((a, b) => parseFloat(b.sizeKB) - parseFloat(a.sizeKB));

console.log("Total Content Files:", files.length);
console.log("Total Content Size:", (totalBytes / (1024 * 1024)).toFixed(2), "MB\n");
console.log("Top 15 Largest Content Files:");
fileDetails.slice(0, 15).forEach(fd => {
  console.log(` - ${fd.file}: ${fd.sizeKB} KB`);
});
