const fs = require('fs');
const path = require('path');

const p1 = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt1 = fs.readFileSync(p1, 'utf8');

const solMatch1 = txt1.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);\s*export const c12Phy1Mcqs/);
if (solMatch1) {
  const solHtml = JSON.parse(solMatch1[1]);
  console.log("=== C12-PHY-1 SOLUTIONS SAMPLE (First 1500 chars) ===");
  console.log(solHtml.slice(0, 1500));
}

const ovMatch1 = txt1.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
if (ovMatch1) {
  const ovHtml = JSON.parse(ovMatch1[1]);
  console.log("\n=== C12-PHY-1 OVERVIEW SAMPLE (First 1500 chars) ===");
  console.log(ovHtml.slice(0, 1500));
}
