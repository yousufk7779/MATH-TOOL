const fs = require('fs');
const path = require('path');

const appData = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\a5d89c48-b99a-4b0b-8fde-e8954f944404\\.system_generated\\logs\\transcript.jsonl';
if (fs.existsSync(appData)) {
  const lines = fs.readFileSync(appData, 'utf8').split('\n').filter(Boolean);
  console.log(`Found ${lines.length} lines in transcript`);
  for (let i = lines.length - 1; i >= Math.max(0, lines.length - 10); i--) {
    const obj = JSON.parse(lines[i]);
    if (obj.type === 'USER_INPUT') {
      console.log(`Line ${i} USER_INPUT:`, JSON.stringify(obj).slice(0, 300));
    }
  }
} else {
  console.log('Transcript not found at', appData);
}
