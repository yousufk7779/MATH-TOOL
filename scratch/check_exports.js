const fs = require('fs');
const content = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-2.ts', 'utf8');

const lines = content.split('\n');
console.log("Total lines:", lines.length);
for (let i = 0; i < Math.min(lines.length, 30); i++) {
  console.log(`${i+1}: ${lines[i].slice(0, 100)}`);
}

// Find export lines
lines.forEach((l, idx) => {
  if (l.startsWith('export const')) {
    console.log(`Export line ${idx + 1}: ${l.slice(0, 80)}`);
  }
});
