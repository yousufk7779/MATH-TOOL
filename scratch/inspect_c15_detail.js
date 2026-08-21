const fs = require('fs');
const path = require('path');

const files = ['c11-phy-1.ts', 'c11-phy-2.ts', 'c11-phy-3.ts', 'c11-phy-4.ts', 'c11-phy-5.ts'];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', 'client', 'data', 'content', file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');

  console.log(`==================== ${file} ====================`);
  
  // Find carets line numbers
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('^')) {
      console.log(`[CARET] Line ${idx + 1}: ${line.trim().substring(0, 100)}`);
    }
  });

  // Check exported symbols
  const exports = content.match(/export\ (const|var|let)\ [a-zA-Z0-9_]+/g);
  console.log('Exports:', exports);

  // Find figure card wrapper HTML patterns
  const cardWrappers = content.match(/<div style="background:\ #0B0F19;[^>]*>[\s\S]*?📍[\s\S]*?<\/div>/g) || [];
  console.log(`Card Wrappers Count: ${cardWrappers.length}`);
  
  // Sample card wrapper heading format
  cardWrappers.slice(0, 2).forEach((cw, i) => {
    console.log(`--- Card Wrapper Sample ${i+1} ---`);
    console.log(cw.substring(0, 300));
  });
});
