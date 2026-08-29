const fs = require('fs');
const path = require('path');

const p2 = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-2.ts');
const txt2 = fs.readFileSync(p2, 'utf8');
const match2 = txt2.match(/export const c12Phy2HtmlOverview = ([\s\S]*?);\s*export const c12Phy2HtmlSolutions/);
const html2 = JSON.parse(match2[1]);

console.log("=== Chapter 2 (c12-phy-2.ts) Clean Headers ===");
const cards2 = html2.match(/<div style="color: #FF9100; font-size: 15.5px; font-weight: bold; margin-bottom: 10px; text-align: left;">([\s\S]*?)<\/div>/g) || [];
cards2.forEach(c => console.log("  " + c.replace(/<[^>]+>/g, '').trim()));

const p1 = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt1 = fs.readFileSync(p1, 'utf8');
const match1 = txt1.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
const html1 = JSON.parse(match1[1]);

console.log("\n=== Chapter 1 (c12-phy-1.ts) Clean Headers ===");
const cards1 = html1.match(/<div style="color: #FF512F; font-size: 15.5px; font-weight: bold; margin-bottom: 10px; text-align: left;">([\s\S]*?)<\/div>/g) || [];
cards1.forEach(c => console.log("  " + c.replace(/<[^>]+>/g, '').trim()));
