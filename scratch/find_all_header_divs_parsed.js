const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'client', 'data', 'content');

for (let ch = 1; ch <= 9; ch++) {
  const filename = `c12-phy-${ch}.ts`;
  const p = path.join(dir, filename);
  if (fs.existsSync(p)) {
    const txt = fs.readFileSync(p, 'utf8');
    const ovMatch = txt.match(/export const c12Phy\dHtmlOverview = ([\s\S]*?);\s*export const/);
    if (ovMatch) {
      try {
        const html = JSON.parse(ovMatch[1]);
        const pinOrCam = html.match(/<div[^>]*>[\s\S]*?(?:📸|📍)[\s\S]*?<\/div>/g) || [];
        console.log(`\n=== ${filename} (Found ${pinOrCam.length} header divs) ===`);
        if (pinOrCam.length > 0) {
          console.log("Sample:", pinOrCam[0]);
        }
      } catch (e) {
        console.log(`Error parsing ${filename}:`, e.message);
      }
    }
  }
}
