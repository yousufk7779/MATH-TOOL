const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'client', 'data', 'content');

for (let ch = 1; ch <= 9; ch++) {
  const filename = `c12-phy-${ch}.ts`;
  const p = path.join(dir, filename);
  if (!fs.existsSync(p)) continue;
  
  const raw = fs.readFileSync(p, 'utf8');
  const ovMatch = raw.match(new RegExp(`export const (c12Phy${ch}HtmlOverview) = ([\\s\\S]*?);\\s*export const (c12Phy${ch}HtmlSolutions)`));
  const solMatch = raw.match(new RegExp(`export const (c12Phy${ch}HtmlSolutions) = ([\\s\\S]*?);\\s*export const (c12Phy${ch}Mcqs)`));
  const mcqMatch = raw.match(new RegExp(`export const (c12Phy${ch}Mcqs) = ([\\s\\S]*?);?\\s*$`));
  
  if (ovMatch && solMatch && mcqMatch) {
    let html = JSON.parse(ovMatch[2]);
    
    // Pattern to match the redundant title header div inside diagram cards
    // e.g. <div style="color: #...; ...">📸 ...</div> or 📍 ...
    const pattern = /<div style="[^"]*color:\s*#[A-Fa-f0-9]{3,6}[^"]*"[^>]*>\s*(?:📸|📍)[\s\S]*?<\/div>\s*/g;
    
    const countBefore = (html.match(pattern) || []).length;
    html = html.replace(pattern, '');
    
    // Also remove any remaining isolated [ 3D DIAGRAM FRAME #X: ... ] or standalone camera/pin lines if any
    html = html.replace(/<div style="[^"]*font-size:\s*1[5-8]\.?\d*px;[^"]*">\s*(?:\[\s*3D\s*DIAGRAM\s*FRAME[\s\S]*?\])\s*<\/div>\s*/gi, '');
    
    const finalCode = `// Class 12 Physics Unit ${ch} (JKBOSE / NCERT Official Syllabus)
// Comprehensive Deep Reference Book Standard (Pradeep's / S.L. Arora)

export const c12Phy${ch}HtmlOverview = ${JSON.stringify(html)};

export const c12Phy${ch}HtmlSolutions = ${solMatch[2]};

export const c12Phy${ch}Mcqs = ${mcqMatch[2]};
`;

    fs.writeFileSync(p, finalCode, 'utf8');
    console.log(`✅ ${filename}: Removed ${countBefore} top title headers.`);
  } else {
    console.log(`⚠️ ${filename}: Failed to match export structure.`);
  }
}
