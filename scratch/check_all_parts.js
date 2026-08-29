const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

console.log("Total file length:", txt.length);

const ovMatch = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
const solMatch = txt.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);\s*export const c12Phy1Mcqs/);
const mcqMatch = txt.match(/export const c12Phy1Mcqs = ([\s\S]*?);?\s*$/);

console.log("Overview matched:", !!ovMatch);
console.log("Solutions matched:", !!solMatch);
console.log("Mcqs matched:", !!mcqMatch);
