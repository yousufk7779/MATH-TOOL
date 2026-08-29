const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

// Find sections or context around each img
const regex = /<img[^>]+src="([^"]+)"[^>]*>/g;
let match;
let i = 1;

while ((match = regex.exec(txt)) !== null) {
  const start = Math.max(0, match.index - 300);
  const end = Math.min(txt.length, match.index + match[0].length + 300);
  const snippet = txt.slice(start, end);
  
  // Try to find preceding h2, h3, or bold title
  const titles = snippet.match(/<h[2-4][^>]*>([^<]+)<\/h[2-4]>|<b[^>]*>([^<]+)<\/b>/g) || [];
  const cleanTitles = titles.map(t => t.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  
  console.log(`\n=== DIAGRAM ${i} ===`);
  console.log(`Context Headers:`, cleanTitles.join(' | '));
  console.log(`Image Source preview:`, match[1].slice(0, 40) + '... (len: ' + match[1].length + ')');
  i++;
}
