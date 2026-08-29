const fs = require('fs');
const path = require('path');

const p1 = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt1 = fs.readFileSync(p1, 'utf8');

const solMatch1 = txt1.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);\s*export const c12Phy1Mcqs/);
if (solMatch1) {
  const solHtml = JSON.parse(solMatch1[1]);
  console.log("=== C12-PHY-1 SOLUTIONS Q1 - Q3 ===");
  console.log(solHtml.slice(0, 3000));
}
