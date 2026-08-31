const fs = require('fs');

const transcriptPath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.system_generated\\logs\\transcript_full.jsonl';
if (fs.existsSync(transcriptPath)) {
  const content = fs.readFileSync(transcriptPath, 'utf8');
  const lines = content.split('\n').filter(Boolean);
  lines.forEach((line, i) => {
    try {
      const obj = JSON.parse(line);
      console.log(`Line ${i} type: ${obj.type}, source: ${obj.source}`);
      if (obj.content) {
        console.log(`Line ${i} content keys/type:`, typeof obj.content);
        if (Array.isArray(obj.content)) {
          console.log(`Line ${i} array items:`, obj.content.length);
          obj.content.forEach((item, j) => {
            console.log(`  item ${j}:`, Object.keys(item));
            if (item.image_url) console.log(`    image_url:`, item.image_url);
            if (item.media_path) console.log(`    media_path:`, item.media_path);
          });
        }
      }
    } catch(e) {
      console.log(`Line ${i} parse error:`, e.message);
    }
  });
}
