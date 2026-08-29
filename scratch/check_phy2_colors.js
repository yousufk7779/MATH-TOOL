const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-2.ts');
const txt = fs.readFileSync(p, 'utf8');

// Find color hexes in c12-phy-2.ts
const colors = txt.match(/#[A-Fa-f0-9]{6}/g) || [];
const freq = {};
colors.forEach(c => freq[c] = (freq[c] || 0) + 1);
console.log("Colors in c12-phy-2.ts:", freq);
