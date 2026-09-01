const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-chem-1.ts', 'utf8');

const imgTags = content.match(/<img[^>]+>/g) || [];
console.log('Total img tags in c12-chem-1.ts:', imgTags.length);
imgTags.forEach((img, i) => {
  const altMatch = img.match(/alt="([^"]*)"/);
  console.log(`Image ${i + 1} alt:`, altMatch ? altMatch[1] : 'No alt');
});

// Let's also find surrounding divs
const cardDivs = content.match(/<div style="background: [^"]*border: 1\.5px solid [^"]*"[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log('Total card divs:', cardDivs.length);
