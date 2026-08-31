const fs = require('fs');
const path = require('path');

const logDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.system_generated\\logs';
console.log("Log dir files:", fs.existsSync(logDir) ? fs.readdirSync(logDir) : "Not found");

const transcriptPath = path.join(logDir, 'transcript_full.jsonl');
if (fs.existsSync(transcriptPath)) {
  const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n').filter(Boolean);
  lines.forEach((line, i) => {
    const obj = JSON.parse(line);
    const str = JSON.stringify(obj);
    if (str.includes('.png') || str.includes('.jpg') || str.includes('.jpeg') || str.includes('.webp') || str.includes('data:image')) {
      console.log(`Match at line ${i}, keys:`, Object.keys(obj));
    }
  });
}
