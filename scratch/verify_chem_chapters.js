const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'chapters.ts');
const txt = fs.readFileSync(p, 'utf8');

// Match Chemistry chapters
const chemMatch = txt.match(/Chemistry:\s*\[([\s\S]*?)\]\s*,\s*Zoology/);
console.log("Class 12 Chemistry Chapters:");
console.log(chemMatch[1].trim());

const colors = [...chemMatch[1].matchAll(/color:\s*"([^"]+)"/g)].map(m => m[1]);
console.log("\nColors count:", colors.length);
console.log("Unique colors:", new Set(colors).size);
if (colors.length === new Set(colors).size) {
  console.log("✅ All colors are 100% UNIQUE!");
} else {
  console.log("❌ Duplicate colors found!");
}
