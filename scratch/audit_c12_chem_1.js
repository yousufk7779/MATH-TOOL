const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-chem-1.ts');
const txt = fs.readFileSync(p, 'utf8');

console.log("=== AUDIT OF c12-chem-1.ts ===");
console.log("File size (bytes):", txt.length);

const carets = (txt.match(/[^\\]\^[0-9a-zA-Z]/g) || []).length;
console.log("Raw carets found:", carets);

// Verify Question count
const qMatches = txt.match(/Q\d+:/g) || [];
console.log("Total questions in Solutions:", qMatches.length);

// Verify MCQs count
const mcqMatches = txt.match(/c12-chem-1-mcq-\d+/g) || [];
console.log("Total MCQs:", mcqMatches.length);

const ovMatch = txt.match(/export const c12Chem1HtmlOverview = ([\s\S]*?);\s*export const c12Chem1HtmlSolutions/);
if (ovMatch) {
  const html = JSON.parse(ovMatch[1]);
  console.log("Has Quick Glossary:", html.includes('Quick Glossary'));
  console.log("Has Cheat Sheet:", html.includes('Master Revision Formula Cheat Sheet'));
  console.log("Has Comparison Matrix:", html.includes('Master Comparison Matrices'));
  console.log("Overview HTML Length:", html.length);
}
