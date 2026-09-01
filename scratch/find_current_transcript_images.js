const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\944a3b30-06dc-4c2c-9bec-91424ca2bb43\\.system_generated\\logs\\transcript_full.jsonl';
if (fs.existsSync(transcriptPath)) {
  const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n').filter(Boolean);
  lines.forEach((l, idx) => {
    try {
      const obj = JSON.parse(l);
      const str = JSON.stringify(obj);
      const re = /([A-Za-z]:\\[^"'\n\r]+\.(?:png|jpg|jpeg|webp))|(\/[^"'\n\r]+\.(?:png|jpg|jpeg|webp))/gi;
      let m;
      const matches = [];
      while ((m = re.exec(str)) !== null) {
        matches.push(m[0]);
      }
      if (matches.length > 0) {
        console.log(`Step ${idx} (${obj.type || obj.source}):`, matches);
      }
    } catch (e) {
      console.error(e);
    }
  });
}
