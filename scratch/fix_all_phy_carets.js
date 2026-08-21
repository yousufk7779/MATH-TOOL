const fs = require('fs');
const path = require('path');

const files = [
  'c11-phy-7.ts',
  'c11-phy-8.ts',
  'c11-phy-9.ts',
  'c11-phy-10.ts'
];

const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace caret expressions:
    // PV^γ => PV<sup>γ</sup>
    content = content.replace(/PV\^γ/g, 'PV<sup>γ</sup>');
    content = content.replace(/PV\^\{γ\}/g, 'PV<sup>γ</sup>');
    content = content.replace(/PV\^/g, 'PV<sup>γ</sup>');
    content = content.replace(/10\^(-?\d+)/g, '10<sup>$1</sup>');
    content = content.replace(/0\^\s*°\s*C/g, '0 °C');
    content = content.replace(/0\^o\s*C/g, '0 °C');
    content = content.replace(/4\^o\s*C/g, '4 °C');
    content = content.replace(/0\^°C/g, '0 °C');
    content = content.replace(/4\^°C/g, '4 °C');
    content = content.replace(/10\^o\s*C/g, '10 °C');
    content = content.replace(/\^γ/g, '<sup>γ</sup>');
    content = content.replace(/\^/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned carets from ${file}`);
  }
});
