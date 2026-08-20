const fs = require('fs');
const path = require('path');

const chMap = [
  { file: 'c11-phy-1.ts', master: 'build_c11_phy_1_3d_master.js', expectedColor: '#FF512F', name: 'Chapter 1' },
  { file: 'c11-phy-2.ts', master: 'build_c11_phy_2_3d_master.js', expectedColor: '#8E2DE2', name: 'Chapter 2' },
  { file: 'c11-phy-3.ts', master: 'build_c11_phy_3_3d_master.js', expectedColor: '#FF8A65', name: 'Chapter 3' },
  { file: 'c11-phy-4.ts', master: 'build_c11_phy_4_3d_master.js', expectedColor: '#00c6ff', name: 'Chapter 4' },
  { file: 'c11-phy-5.ts', master: 'build_c11_phy_5_3d_master.js', expectedColor: '#AB47BC', name: 'Chapter 5' }
];

chMap.forEach(ch => {
  const filePath = path.join(__dirname, '..', 'client', 'data', 'content', ch.file);
  const masterPath = path.join(__dirname, '..', ch.master);

  console.log(`\n==================== AUDITING ${ch.name} (${ch.file}) ====================`);

  // Check master script existence
  if (fs.existsSync(masterPath)) {
    console.log(`✅ Master Script exists: ${ch.master}`);
    const masterContent = fs.readFileSync(masterPath, 'utf8');

    // Check text-transform uppercase in card wrapper
    const hasUppercase = masterContent.includes('text-transform: uppercase') || masterContent.includes('text-transform:uppercase');
    if (hasUppercase) {
      console.log(`⚠️ WARNING: Master script contains 'text-transform: uppercase' in card title style!`);
    } else {
      console.log(`✅ Master script card title format is clean (no forced uppercase).`);
    }
  } else {
    console.log(`ℹ️ Master Script not in scratch: ${ch.master}`);
  }

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File missing: ${ch.file}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Overview JSON extract
  const match = content.match(/export const c11Phy\dHtmlOverview = ([\s\S]*?);\n\nexport const/);
  if (!match) {
    console.log(`❌ Failed to extract Overview JSON from ${ch.file}`);
    return;
  }

  const overviewHtml = JSON.parse(match[1]);

  // Carets in overview
  const overviewCarets = (overviewHtml.match(/\^/g) || []);
  console.log(`Carets in Overview: ${overviewCarets.length}`);
  if (overviewCarets.length > 0) {
    const lines = overviewHtml.split('\n');
    lines.forEach((l, idx) => {
      if (l.includes('^')) console.log(`   ❌ Caret at L${idx+1}: ${l.trim()}`);
    });
  }

  // Check Solutions
  const solMatch = content.match(/export const c11Phy\dHtmlSolutions = ([\s\S]*?);?\s*$/);
  if (solMatch) {
    const solHtml = JSON.parse(solMatch[1]);
    const solCarets = (solHtml.match(/\^/g) || []);
    console.log(`Carets in Solutions: ${solCarets.length}`);
    const hotsMatches = (solHtml.match(/HOTS/gi) || []);
    console.log(`HOTS in Solutions: ${hotsMatches.length}`);

    // Count Q markers
    const totalQ = (solHtml.match(/Q\d+[:.]/gi) || []).length;
    console.log(`Total Question markers in Solutions: ${totalQ}`);
  }

  // Count Figure Cards
  const figCards = (overviewHtml.match(/📍/g) || []).length;
  console.log(`Total 3D SVG Figure Cards in Overview: ${figCards}`);
});
