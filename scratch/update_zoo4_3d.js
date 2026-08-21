const fs = require('fs');
const path = require('path');

const img4Path = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\dc58b52e-1680-4301-8d58-d0145e6c64c5\\locomotion_3d_diagram_1786897638222.jpg';
const img5Path = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\dc58b52e-1680-4301-8d58-d0145e6c64c5\\neural_3d_diagram_1786897656569.jpg';
const img6Path = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\dc58b52e-1680-4301-8d58-d0145e6c64c5\\endocrine_3d_diagram_1786898575111.jpg';

const b64_4 = fs.readFileSync(img4Path).toString('base64');
const b64_5 = fs.readFileSync(img5Path).toString('base64');
const b64_6 = fs.readFileSync(img6Path).toString('base64');

console.log('Base64 sizes:');
console.log('Image 4 (Locomotion):', b64_4.length);
console.log('Image 5 (Neural):', b64_5.length);
console.log('Image 6 (Endocrine):', b64_6.length);

const targetFilePath = path.join(__dirname, '../client/data/content/c11-zoo-4.ts');
let content = fs.readFileSync(targetFilePath, 'utf8');

const imgs = content.match(/<img[^>]+>/g) || [];
if (imgs.length !== 6) {
  console.error('Expected 6 images, found:', imgs.length);
  process.exit(1);
}

// Prepare replacement img tags
const newImg4 = `<img src="data:image/jpeg;base64,${b64_4}" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" alt="3D Sliding Filament Theory & Sarcomere Contraction Mechanism" /><p style="color: #00B0FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.4: 3D Sliding Filament Theory & Sarcomere Contraction Mechanism</p>`;

const newImg5 = `<img src="data:image/jpeg;base64,${b64_5}" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" alt="3D Neuron Ultrastructure, Impulse Conduction & Synaptic Transmission" /><p style="color: #00B0FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.5: 3D Neuron Structure & Synaptic Transmission Mechanism</p>`;

const newImg6 = `<img src="data:image/jpeg;base64,${b64_6}" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" alt="3D Endocrine Glands System & Mechanism of Hormone Action" /><p style="color: #00B0FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.6: 3D Endocrine System Architecture & Mechanism of Hormone Action</p>`;

// Replace img 4, img 5, img 6
content = content.replace(imgs[3], newImg4);
content = content.replace(imgs[4], newImg5);
content = content.replace(imgs[5], newImg6);

fs.writeFileSync(targetFilePath, content, 'utf8');
console.log('Successfully updated c11-zoo-4.ts with 3D diagrams 4, 5, 6!');
