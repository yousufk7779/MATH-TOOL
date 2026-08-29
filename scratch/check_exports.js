const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

const exportMatches = txt.match(/export const \w+/g) || [];
console.log('Exports found in c12-phy-1.ts:', exportMatches);
