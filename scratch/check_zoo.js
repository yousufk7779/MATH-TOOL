const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-5.ts'), 'utf8');

// Parse overview
const match = content.match(/export const c11Phy5HtmlOverview = ([\s\S]*?);\n\nexport const/);
if (match) {
  const overview = JSON.parse(match[1]);
  console.log("Overview length:", overview.length);
  const carets = (overview.match(/\^/g) || []).length;
  console.log("Carets in Ch 5 Overview:", carets);

  // Check h2 titles
  const h2s = overview.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) || [];
  console.log("\nCh 5 H2 Headings:");
  h2s.forEach(h => console.log(" -", h.replace(/<[^>]+>/g, '').trim()));
}
