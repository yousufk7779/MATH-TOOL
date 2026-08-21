const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-6.ts'), 'utf8');
const matchSol = content.match(/export const c11Phy6HtmlSolutions = ([\s\S]*?);?\s*$/);
const sol = JSON.parse(matchSol[1]);

const lines = sol.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('^')) console.log(`Caret at Sol L${idx+1}: ${l.trim()}`);
});
