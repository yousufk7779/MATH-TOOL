const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgPath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\d123af52-ff96-4b27-bff2-978545bba9ee\\.user_uploaded\\media_1786721156933.jpg';
const brainDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\d123af52-ff96-4b27-bff2-978545bba9ee';

const panels = {
  skeleton_and_joints: { left: 5, top: 420, width: 338, height: 415 },
  neuron_and_reflex: { left: 343, top: 420, width: 338, height: 415 },
  endocrine_system: { left: 680, top: 420, width: 338, height: 415 }
};

async function enhancePanels() {
  for (const [key, reg] of Object.entries(panels)) {
    // Extract region
    const croppedBuffer = await sharp(imgPath)
      .extract({ left: reg.left, top: reg.top, width: reg.width, height: reg.height })
      .resize(1280, 800, { fit: 'contain', background: { r: 13, g: 7, b: 34 } }) // dark slate background
      .modulate({ brightness: 1.05, saturation: 1.15 })
      .sharpen()
      .jpeg({ quality: 95 })
      .toBuffer();
    
    const targetFile = path.join(brainDir, `c11_zoo4_3d_${key}.jpg`);
    fs.writeFileSync(targetFile, croppedBuffer);
    console.log(`Enhanced 3D panel ${key}: ${croppedBuffer.length} bytes -> ${targetFile}`);
  }
}

enhancePanels().catch(err => console.error(err));
