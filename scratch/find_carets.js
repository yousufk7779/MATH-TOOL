const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-3.ts', 'utf8');

const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('^')) {
    console.log(`Line ${idx + 1}:`, line.slice(0, 150));
  }
});
