const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const match = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const/);
const html = JSON.parse(match[1]);

console.log("HTML length:", html.length);
console.log("Image count:", (html.match(/<img/g) || []).length);

// Sample of diagram 1 card
const d1Start = html.indexOf('📸 Diagram 1:');
if (d1Start !== -1) {
  const d1Snippet = html.slice(d1Start - 100, d1Start + 500);
  console.log("\nDiagram 1 Card Snippet (Cleaned):");
  console.log(d1Snippet.replace(/src="data:image\/[^;]+;base64,[^"]+"/, 'src="[BASE64_DATA]"'));
}
