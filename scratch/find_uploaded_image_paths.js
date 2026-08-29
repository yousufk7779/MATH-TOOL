const fs = require('fs');

const appData = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\a5d89c48-b99a-4b0b-8fde-e8954f944404\\.system_generated\\logs\\transcript_full.jsonl';
if (fs.existsSync(appData)) {
  const lines = fs.readFileSync(appData, 'utf8').split('\n').filter(Boolean);
  [161, 163].forEach(idx => {
    if (lines[idx]) {
      const obj = JSON.parse(lines[idx]);
      console.log(`\n=== STEP ${idx} ===`);
      console.log("Keys:", Object.keys(obj));
      if (obj.media_paths || obj.images || obj.attachments) {
        console.log("Media:", obj.media_paths || obj.images || obj.attachments);
      }
      // check if content has image references or base64
      const str = JSON.stringify(obj);
      const matches = str.match(/([A-Za-z]:\\[^"'\n]+\.(?:png|jpg|jpeg|webp))|(\/[^"'\n]+\.(?:png|jpg|jpeg|webp))/gi) || [];
      console.log("Image paths in step:", matches);
    }
  });
}
