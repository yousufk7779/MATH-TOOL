const sharp = require('sharp');
const fs = require('fs');

const svgText = `<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#090D16"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="720" fill="url(#bgGrad)"/>
  <text x="640" y="50" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#00B0FF" text-anchor="middle">HUMAN SKELETON &amp; SYNOVIAL JOINTS (3D)</text>
</svg>`;

sharp(Buffer.from(svgText))
  .jpeg({ quality: 95 })
  .toFile('d:\\All NCERT SOLUTIONS11\\scratch\\test_3d.jpg')
  .then(() => console.log('Successfully rendered test SVG!'))
  .catch(err => console.error(err));
