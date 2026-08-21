const fs = require('fs');
const path = require('path');

const imgPath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\dc58b52e-1680-4301-8d58-d0145e6c64c5\\locomotion_joints_3d_diagram_1786899400500.jpg';

const b64 = fs.readFileSync(imgPath).toString('base64');
console.log('New Diagram 4 Base64 size:', b64.length);

const targetFilePath = path.join(__dirname, '../client/data/content/c11-zoo-4.ts');
let content = fs.readFileSync(targetFilePath, 'utf8');

const imgs = content.match(/<img[^>]+>/g) || [];
if (imgs.length !== 6) {
  console.error('Expected 6 images, found:', imgs.length);
  process.exit(1);
}

// Replace img 4 (index 3)
const newImg4 = `<img src="data:image/jpeg;base64,${b64}" style="max-width: 100%; border-radius: 10px; border: 2px solid #00B0FF; box-shadow: 0 4px 18px rgba(0, 176, 255, 0.25);" alt="3D Human Skeleton, Joint Types & Muscle Tissues" /><p style="color: #00B0FF; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure 4.4: 3D The Human Skeleton, Joints (Pivot, Hinge, Ball-and-Socket) & Muscle Tissues</p>`;

content = content.replace(imgs[3], newImg4);

fs.writeFileSync(targetFilePath, content, 'utf8');
console.log('Successfully updated Diagram 4 in c11-zoo-4.ts with exact 3D matching visual!');
