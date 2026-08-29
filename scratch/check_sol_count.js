const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const solMatch = txt.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);?\s*$/);
if (solMatch) {
  const solHtml = JSON.parse(solMatch[1]);
  console.log("Solutions HTML length:", solHtml.length);
  const qMatches = solHtml.match(/Q\d+:/g) || [];
  console.log(`Total questions in solutions: ${qMatches.length} (${qMatches[0]} to ${qMatches[qMatches.length - 1]})`);
}
