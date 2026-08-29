const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const txt = fs.readFileSync(p, 'utf8');

console.log("File size (bytes):", txt.length);

// 1. Raw carets check
const rawCaretMatches = txt.match(/[^\\]\^[0-9a-zA-Z]/g) || [];
console.log("Raw carets found:", rawCaretMatches.length);

// 2. SVG count
const svgCount = (txt.match(/<svg/g) || []).length;
console.log("SVG count:", svgCount);

// 3. Base64 img count
const imgCount = (txt.match(/<img/g) || []).length;
console.log("Img (Base64) count:", imgCount);

// 4. Exports check
const ovMatch = txt.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
const solMatch = txt.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);\s*export const c12Phy1Mcqs/);
const mcqMatch = txt.match(/export const c12Phy1Mcqs = ([\s\S]*?);?\s*$/);

console.log("Overview valid:", !!ovMatch && ovMatch[1].length > 10000);
console.log("Solutions valid:", !!solMatch && solMatch[1].length > 10000);
console.log("MCQs valid:", !!mcqMatch && mcqMatch[1].length > 1000);

if (ovMatch) {
  const ovHtml = JSON.parse(ovMatch[1]);
  console.log("Parsed Overview HTML length:", ovHtml.length);
  console.log("Contains Series Derivation:", ovHtml.includes('1/C&#8347; = 1/C&#8321; + 1/C&#8322; + 1/C&#8323;') || ovHtml.includes('1/C_s'));
  console.log("Contains Parallel Derivation:", ovHtml.includes('C&#8346; = C&#8321; + C&#8322; + C&#8323;') || ovHtml.includes('C_p'));
  console.log("Contains Dielectric Slab Derivation:", ovHtml.includes('d - t + t/K') || ovHtml.includes('d - t'));
  console.log("Contains Energy Stored Formulae:", ovHtml.includes('U = 1/2 C V') || ovHtml.includes('U ='));
  console.log("Contains Sharing of Charges:", ovHtml.includes('Energy Loss on Sharing') || ovHtml.includes('Common Potential'));
}
