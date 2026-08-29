const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'client', 'data', 'content');

for (let ch = 1; ch <= 9; ch++) {
  const filename = `c12-phy-${ch}.ts`;
  const p = path.join(dir, filename);
  if (fs.existsSync(p)) {
    const txt = fs.readFileSync(p, 'utf8');
    const ovMatch = txt.match(new RegExp(`export const c12Phy${ch}HtmlOverview = ([\\s\\S]*?);\\s*export const`));
    if (ovMatch) {
      let html = JSON.parse(ovMatch[1]);
      
      // Pattern 1: <div style="...color: #...; font-size: 15.5px...">(📸|📍)...</div>
      const pattern1 = /<div style="[^"]*color:\s*#[A-Fa-f0-9]{3,6}[^"]*"[^>]*>\s*(?:📸|📍)[\s\S]*?<\/div>\s*/g;
      
      // Pattern 2: <div style="color: #[A-Fa-f0-9]{3,6}; font-weight: bold;...">(📸|📍)...</div>
      const pattern2 = /<div style="color:\s*#[A-Fa-f0-9]{3,6};\s*font-weight:\s*bold;[^"]*">\s*(?:📸|📍)[\s\S]*?<\/div>\s*/g;
      
      let matches1 = html.match(pattern1) || [];
      let matches2 = html.match(pattern2) || [];
      let totalMatches = Array.from(new Set([...matches1, ...matches2]));
      
      console.log(`${filename}: Found ${totalMatches.length} title headers to remove.`);
      if (totalMatches.length > 0) {
        console.log(`  Sample from ${filename}:`, totalMatches[0].replace(/\s+/g, ' ').slice(0, 100));
      }
    }
  }
}
