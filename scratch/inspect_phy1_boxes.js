const fs = require('fs');
const path = require('path');

const p1 = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt1 = fs.readFileSync(p1, 'utf8');

const ovMatch1 = txt1.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
if (ovMatch1) {
  const ovHtml = JSON.parse(ovMatch1[1]);
  
  // Find sample boxes
  const defMatch = ovHtml.match(/<div style="background: rgba\(255, 81, 47[\s\S]*?<\/div>\s*<\/div>/g);
  if (defMatch) {
    console.log("=== DEF BOX SAMPLE ===");
    console.log(defMatch[0]);
  }

  const derMatch = ovHtml.match(/<div style="background: rgba\(30, 41, 59[\s\S]*?<\/div>\s*<\/div>/g);
  if (derMatch) {
    console.log("\n=== DERIVATION BOX SAMPLE ===");
    console.log(derMatch[0].slice(0, 800));
  }

  const trapMatch = ovHtml.match(/<div style="background: rgba\(239, 68, 68[\s\S]*?<\/div>\s*<\/div>/g);
  if (trapMatch) {
    console.log("\n=== EXAM TRAP BOX SAMPLE ===");
    console.log(trapMatch[0]);
  }
}
