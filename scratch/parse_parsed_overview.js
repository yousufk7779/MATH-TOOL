const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

// Extract c12Phy1HtmlOverview string
const match = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const/);
if (!match) {
  console.log('No overview match');
  process.exit(1);
}

const html = JSON.parse(match[1]);

// Search for cards or images
const cardRegex = /<div style="background: #0B0F19; border: 1.8px solid #FF512F[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
let cards = html.match(cardRegex) || [];

console.log(`Found ${cards.length} cards in parsed HTML!`);

cards.forEach((card, idx) => {
  const title = (card.match(/<div style="color: #FF512F[^>]*>([\s\S]*?)<\/div>/) || [])[1] || '';
  const caption = (card.match(/<div style="color: #CBD5E1[^>]*>([\s\S]*?)<\/div>/) || [])[1] || '';
  console.log(`\n${idx + 1}. Title: ${title.replace(/<[^>]+>/g, '').trim()}`);
  console.log(`   Caption: ${caption.replace(/<[^>]+>/g, '').trim()}`);
});
