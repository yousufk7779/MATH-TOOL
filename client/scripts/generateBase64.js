const fs = require('fs');

const files = [
  { id: 'Q9', path: 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\c69d9760-01da-460c-8be3-549fcb77d4dd\\media__1777398574998.png' },
  { id: 'Q15', path: 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\c69d9760-01da-460c-8be3-549fcb77d4dd\\media__1777398575106.png' },
  { id: 'Q6', path: 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\c69d9760-01da-460c-8be3-549fcb77d4dd\\media__1777398575255.png' }
];

files.forEach(file => {
  const base64 = fs.readFileSync(file.path, { encoding: 'base64' });
  fs.writeFileSync(`D:\\base64_${file.id}.txt`, `<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img src='data:image/png;base64,${base64}' style='width: 100%; height: auto; border-radius: 10px;' /></div>`);
});

console.log("Base64 strings written to D:\\base64_*.txt");
