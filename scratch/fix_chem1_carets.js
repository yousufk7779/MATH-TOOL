const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-chem-1.ts');
let txt = fs.readFileSync(p, 'utf8');

const matches = [];
const regex = /[^\\]\^[0-9a-zA-Z]/g;
let m;
while ((m = regex.exec(txt)) !== null) {
  const start = Math.max(0, m.index - 50);
  const end = Math.min(txt.length, m.index + 50);
  matches.push(txt.slice(start, end));
}

console.log("Caret snippets:", matches);

// Replace ^[a-zA-Z0-9+-]+ with <sup>...</sup>
txt = txt.replace(/\^([0-9a-zA-Z+-]+)/g, '<sup>$1</sup>');
fs.writeFileSync(p, txt, 'utf8');

const newCarets = (txt.match(/[^\\]\^[0-9a-zA-Z]/g) || []).length;
console.log("Carets after fix:", newCarets);
