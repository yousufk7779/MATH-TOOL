const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-7.ts');
const content = fs.readFileSync(filePath, 'utf8');

const matchOverview = content.match(/export const c11Phy7HtmlOverview = ([\s\S]*?);\n\nexport const/);
const matchSol = content.match(/export const c11Phy7HtmlSolutions = ([\s\S]*?);?\s*$/);

const overview = JSON.parse(matchOverview[1]);
const sol = JSON.parse(matchSol[1]);

console.log("=== CHAPTER 7 (PROPERTIES OF BULK MATTER) AUDIT ===");
console.log("Carets in Overview:", (overview.match(/\^/g) || []).length);
console.log("Carets in Solutions:", (sol.match(/\^/g) || []).length);
console.log("HOTS in Solutions:", (sol.match(/HOTS/gi) || []).length);

const totalQ = (sol.match(/Q\d+[:.]/gi) || []).length;
console.log("Total Question Markers:", totalQ);

const figCards = (overview.match(/📍/g) || []).length;
console.log("3D SVG Figure Cards:", figCards);

const h1s = overview.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) || [];
console.log("\nH1 Parts:");
h1s.forEach(h => console.log(" -", h.replace(/<[^>]+>/g, '').trim()));

const h2s = overview.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || [];
console.log("\nH2 Headings:");
h2s.forEach(h => console.log(" -", h.replace(/<[^>]+>/g, '').trim()));
