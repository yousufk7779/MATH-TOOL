const fs = require('fs');

let fileContent = fs.readFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-1.ts', 'utf8');

// The file currently has:
// question: "Fig 8.11 shows... <img src="..." ... />",
// We need to change the enclosing double quotes to backticks.

fileContent = fileContent.replace(
  'question: "Fig 8.11 shows the distance-time graph of three objects A, B and C. Answer the following:<br/>(a) Which is fastest?<br/>(b) Do they meet?<br/>(c) Distance of C when B passes A<br/>(d) Distance of B when it passes C<br/><img src="data:image/png;base64,',
  'question: `Fig 8.11 shows the distance-time graph of three objects A, B and C. Answer the following:<br/>(a) Which is fastest?<br/>(b) Do they meet?<br/>(c) Distance of C when B passes A<br/>(d) Distance of B when it passes C<br/><img src="data:image/png;base64,'
);

fileContent = fileContent.replace(
  'alt="Fig 8.11" />",',
  'alt="Fig 8.11" />`,'
);

fileContent = fileContent.replace(
  'question: "Speed-time graph is given.<br/>(a) Find distance travelled<br/>(b) Identify uniform motion<br/><img src="data:image/png;base64,',
  'question: `Speed-time graph is given.<br/>(a) Find distance travelled<br/>(b) Identify uniform motion<br/><img src="data:image/png;base64,'
);

fileContent = fileContent.replace(
  'alt="Fig 8.12" />",',
  'alt="Fig 8.12" />`,'
);

fs.writeFileSync('d:\\\\All NCERT SOLUTIONS\\\\client\\\\data\\\\content\\\\c9-sci-phy-1.ts', fileContent);
console.log('Fixed syntax error!');
