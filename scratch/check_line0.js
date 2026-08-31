const fs = require('fs');

const transcriptPath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.system_generated\\logs\\transcript_full.jsonl';
if (fs.existsSync(transcriptPath)) {
  const content = fs.readFileSync(transcriptPath, 'utf8');
  const lines = content.split('\n').filter(Boolean);
  const obj = JSON.parse(lines[0]);
  console.log("Line 0 keys:", Object.keys(obj));
  console.log("Line 0 object:", JSON.stringify(obj, null, 2).slice(0, 2000));
}
