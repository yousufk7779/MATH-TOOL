const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-6.ts'), 'utf8');
const match = text.match(/export const c11Phy6HtmlSolutions = ([\s\S]*?);?\s*$/);
if (match) {
  const str = match[1];
  const qMatches = str.match(/Q\d+:/g) || [];
  console.log("Q matches count:", qMatches.length);
  console.log("First 10 matches:", qMatches.slice(0, 10));
}
