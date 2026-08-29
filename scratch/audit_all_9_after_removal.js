const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'client', 'data', 'content');

console.log("=== FINAL AUDIT OF ALL 9 CHAPTERS ===");
for (let ch = 1; ch <= 9; ch++) {
  const filename = `c12-phy-${ch}.ts`;
  const p = path.join(dir, filename);
  if (!fs.existsSync(p)) continue;
  
  const txt = fs.readFileSync(p, 'utf8');
  const carets = (txt.match(/[^\\]\^[0-9a-zA-Z]/g) || []).length;
  const imgs = (txt.match(/<img/g) || []).length;
  const svgs = (txt.match(/<svg/g) || []).length;
  
  const ovMatch = txt.match(new RegExp(`export const c12Phy${ch}HtmlOverview = ([\\s\\S]*?);\\s*export const`));
  let remainingTopTitles = 0;
  if (ovMatch) {
    const html = JSON.parse(ovMatch[1]);
    remainingTopTitles = (html.match(/<div style="[^"]*color:\s*#[A-Fa-f0-9]{3,6}[^"]*"[^>]*>\s*(?:📸|📍)[\s\S]*?<\/div>/g) || []).length;
  }
  
  console.log(`${filename}: Carets=${carets}, Imgs=${imgs}, SVGs=${svgs}, RemainingTopTitles=${remainingTopTitles}`);
}
