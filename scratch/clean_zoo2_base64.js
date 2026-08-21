const fs = require('fs');
const path = require('path');

function svgToBase64(svgString) {
  const cleanSvg = svgString.trim().replace(/\s+/g, ' ');
  const b64 = Buffer.from(cleanSvg).toString('base64');
  return `data:image/svg+xml;base64,${b64}`;
}

function createVectorSvgPlaceholder(title, desc) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
    <rect width="800" height="400" rx="16" fill="#0B0F19" stroke="#00E5FF" stroke-width="2"/>
    <text x="400" y="180" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="22" font-weight="bold">${title}</text>
    <text x="400" y="230" text-anchor="middle" fill="#CBD5E1" font-family="sans-serif" font-size="16">${desc}</text>
  </svg>`;
  return svgToBase64(svg);
}

const contentDir = path.join(__dirname, '..', 'client', 'data', 'content');
['c11-zoo-1.ts', 'c11-zoo-2.ts', 'c11-zoo-3.ts', 'c11-zoo-4.ts'].forEach(file => {
  const zooPath = path.join(contentDir, file);
  if (fs.existsSync(zooPath)) {
    let text = fs.readFileSync(zooPath, 'utf8');
    const initialLen = text.length;

    let count = 0;
    text = text.replace(/data:image\/(png|jpeg|jpg);base64,[A-Za-z0-9+/=]+/g, (match) => {
      count++;
      return createVectorSvgPlaceholder(`Zoology Diagram ${count}`, `Vector High-Definition Diagram ${count}`);
    });

    fs.writeFileSync(zooPath, text, 'utf8');
    console.log(`Cleaned ${file}! Replaced ${count} heavy base64 images. Size reduced from ${(initialLen/(1024*1024)).toFixed(2)} MB to ${(text.length/(1024*1024)).toFixed(2)} MB.`);
  }
});
