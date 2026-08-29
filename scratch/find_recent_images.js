const fs = require('fs');
const path = require('path');
const os = require('os');

function searchDir(dir, maxDepth, depth = 0) {
  if (depth > maxDepth) return [];
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const f of list) {
      const full = path.join(dir, f);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          if (!f.startsWith('.') || f === '.gemini' || f === 'antigravity-ide') {
            results = results.concat(searchDir(full, maxDepth, depth + 1));
          }
        } else if (/\.(png|jpg|jpeg|webp)$/i.test(f)) {
          // Check modified time in last 2 hours
          if (Date.now() - stat.mtimeMs < 2 * 60 * 60 * 1000) {
            results.push({ path: full, mtime: stat.mtime, size: stat.size });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

const dirsToSearch = [
  'C:\\Users\\hp\\.gemini',
  os.tmpdir(),
  'D:\\All NCERT SOLUTIONS11'
];

let allImages = [];
dirsToSearch.forEach(d => {
  allImages = allImages.concat(searchDir(d, 5));
});

allImages.sort((a, b) => b.mtime - a.mtime);
console.log(`Found ${allImages.length} recently modified images:`);
allImages.slice(0, 30).forEach((img, idx) => {
  console.log(`${idx + 1}. [${img.mtime.toLocaleTimeString()}] (${img.size} bytes) ${img.path}`);
});
