const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const match = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const/);
const html = JSON.parse(match[1]);

const diagMatches = html.match(/📸 Diagram \d+:[^<]+/g) || [];
console.log(`Found ${diagMatches.length} diagrams:`);
diagMatches.forEach((d, i) => {
  console.log(`${d}`);
});
