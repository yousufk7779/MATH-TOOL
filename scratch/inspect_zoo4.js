const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../client/data/content/c11-zoo-4.ts'), 'utf8');

const imgs = content.match(/<img[^>]+>/g) || [];
console.log('Total img tags in c11-zoo-4.ts:', imgs.length);

imgs.forEach((img, idx) => {
  console.log(`\n--- Image ${idx + 1} ---`);
  console.log('Length of img tag:', img.length);
  // Check if it's SVG base64 or PNG/JPEG base64 or external url
  if (img.includes('data:image/svg+xml;base64,')) {
    const b64Data = img.match(/data:image\/svg\+xml;base64,([A-Za-z0-9+/=]+)/);
    if (b64Data) {
      const decoded = Buffer.from(b64Data[1], 'base64').toString('utf8');
      console.log('Type: SVG (Base64 decoded length: ' + decoded.length + ')');
      console.log('SVG preview (first 300 chars):');
      console.log(decoded.substring(0, 300));
    }
  } else if (img.includes('data:image/')) {
    const typeMatch = img.match(/data:image\/([a-zA-Z]+);base64,/);
    console.log('Type: PNG/JPEG/etc (' + (typeMatch ? typeMatch[1] : 'unknown') + ')');
    console.log('Tag preview:', img.substring(0, 150) + '...');
  } else {
    console.log('Type: Other / URL');
    console.log('Tag preview:', img.substring(0, 200));
  }
  
  // Find context surrounding the image in c11-zoo-4.ts
  const pos = content.indexOf(img);
  const contextBefore = content.substring(Math.max(0, pos - 300), pos);
  console.log('Context before image:');
  console.log(contextBefore.replace(/\n+/g, ' '));
});
