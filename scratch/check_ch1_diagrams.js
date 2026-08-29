const fs = require('fs');
const path = require('path');

const files = [
  'c12-phy-1.ts',
  'c11-phy-1.ts',
  'c11-zoo-1.ts',
  'c11-bot-1.ts',
  'c11-chem-1.ts',
  'c7-sci-1.ts',
  'c8-sci-1.ts',
  'c9-sci-phy-1.ts',
  'c9-sci-chem-1.ts',
  'c9-sci-bio-1.ts'
];

files.forEach(f => {
  const p = path.join(__dirname, '..', 'client', 'data', 'content', f);
  if (fs.existsSync(p)) {
    const txt = fs.readFileSync(p, 'utf8');
    const svgCount = (txt.match(/<svg/g) || []).length;
    const imgCount = (txt.match(/<img/g) || []).length;
    console.log(`${f} => SVG count: ${svgCount}, IMG count: ${imgCount}`);
  }
});
