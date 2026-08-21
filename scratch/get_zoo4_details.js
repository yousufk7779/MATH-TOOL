const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../client/data/content/c11-zoo-4.ts'), 'utf8');

const imgs = content.match(/<img[^>]+>/g) || [];

imgs.forEach((img, idx) => {
  const pos = content.indexOf(img);
  const before = content.substring(Math.max(0, pos - 250), pos);
  const after = content.substring(pos + img.length, pos + img.length + 250);
  
  console.log(`==================== DIAGRAM ${idx + 1} ====================`);
  console.log('--- Context Before ---');
  console.log(before.trim());
  console.log('--- Image Tag Info ---');
  console.log('Size (bytes):', img.length);
  console.log('Attributes:', img.replace(/src="data:image\/[^;]+;base64,[^"]+"/, 'src="[BASE64_DATA]"'));
  console.log('--- Context After ---');
  console.log(after.trim());
});
