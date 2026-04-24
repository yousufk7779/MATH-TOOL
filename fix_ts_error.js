const fs = require('fs');

const img1Base64 = fs.readFileSync('C:\\Users\\hp\\.gemini\\antigravity\\brain\\e228bb5c-816a-4e7e-b50b-5102bc40ebbd\\media__1777050379331.png', 'base64');
const img2Base64 = fs.readFileSync('C:\\Users\\hp\\.gemini\\antigravity\\brain\\e228bb5c-816a-4e7e-b50b-5102bc40ebbd\\media__1777050379425.png', 'base64');

const q6Img = `<img src="data:image/png;base64,${img1Base64}" style="filter: invert(0.8) sepia(1) hue-rotate(180deg) saturate(3) brightness(1.2); border-radius: 8px;" alt="Fig 8.11" />`;
const q8Img = `<img src="data:image/png;base64,${img2Base64}" style="filter: invert(0.8) sepia(1) hue-rotate(280deg) saturate(3) brightness(1.2); border-radius: 8px;" alt="Fig 8.12" />`;

let fileContent = fs.readFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-1.ts', 'utf8');

// Replace the literal template literal expressions with actual double quotes and the image tags
fileContent = fileContent.replace('`${q6Img}`', `"${q6Img}"`);
// Wait, the file actually contains: question: `...<br/>${q6Img}`,
// I will replace the whole line:
fileContent = fileContent.replace(
  'question: `Fig 8.11 shows the distance-time graph of three objects A, B and C. Answer the following:<br/>(a) Which is fastest?<br/>(b) Do they meet?<br/>(c) Distance of C when B passes A<br/>(d) Distance of B when it passes C<br/>${q6Img}`,',
  `question: "Fig 8.11 shows the distance-time graph of three objects A, B and C. Answer the following:<br/>(a) Which is fastest?<br/>(b) Do they meet?<br/>(c) Distance of C when B passes A<br/>(d) Distance of B when it passes C<br/>${q6Img}",`
);

fileContent = fileContent.replace(
  'question: `Speed-time graph is given.<br/>(a) Find distance travelled<br/>(b) Identify uniform motion<br/>${q8Img}`,',
  `question: "Speed-time graph is given.<br/>(a) Find distance travelled<br/>(b) Identify uniform motion<br/>${q8Img}",`
);

fs.writeFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-1.ts', fileContent);
console.log('Fixed!');
