const fs = require('fs');
const path = require('path');

// 1. Process c12-phy-2.ts
const p2 = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-2.ts');
let txt2 = fs.readFileSync(p2, 'utf8');

// Replace 📸 Diagram \d+:\s* with 📸 
txt2 = txt2.replace(/📸\s*Diagram\s*\d+[\.:]\s*/gi, '📸 ');
txt2 = txt2.replace(/📍\s*Diagram\s*\d+[\.:]\s*/gi, '📍 ');
txt2 = txt2.replace(/\[\s*3D\s*DIAGRAM\s*FRAME\s*#\d+:\s*([^\]]+)\]/gi, '📍 $1');

fs.writeFileSync(p2, txt2, 'utf8');
console.log("Updated c12-phy-2.ts: Removed all 'Diagram X:' numbering prefixes.");

// 2. Process c12-phy-1.ts
const p1 = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
let txt1 = fs.readFileSync(p1, 'utf8');

txt1 = txt1.replace(/📸\s*Diagram\s*\d+[\.:]\s*/gi, '📸 ');
txt1 = txt1.replace(/📍\s*Diagram\s*\d+[\.:]\s*/gi, '📍 ');
txt1 = txt1.replace(/\[\s*3D\s*DIAGRAM\s*FRAME\s*#\d+:\s*([^\]]+)\]/gi, '📍 $1');

fs.writeFileSync(p1, txt1, 'utf8');
console.log("Updated c12-phy-1.ts: Removed all 'Diagram X:' numbering prefixes.");
