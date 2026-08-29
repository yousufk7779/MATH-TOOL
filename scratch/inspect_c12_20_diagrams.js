const fs = require('fs');

const content = fs.readFileSync('client/data/content/c12-phy-1.ts', 'utf8');

// Find all image cards
const cardRegex = /<div style="background: #0B0F19; border: 1.8px solid #FF512F;[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
let matches = content.match(cardRegex) || [];

console.log(`Found ${matches.length} diagram cards in c12-phy-1.ts:`);
matches.forEach((card, idx) => {
  const titleMatch = card.match(/📍\s*([^<]+)/);
  const captionMatch = card.match(/💡\s*([^<]+)/);
  console.log(`${idx + 1}. Title: ${titleMatch ? titleMatch[1].trim() : 'N/A'}`);
  console.log(`   Caption: ${captionMatch ? captionMatch[1].trim() : 'N/A'}`);
});
