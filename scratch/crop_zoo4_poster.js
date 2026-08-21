const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgPath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\d123af52-ff96-4b27-bff2-978545bba9ee\\.user_uploaded\\media_1786721156933.jpg';

async function processZoo4Crops() {
  const masterBuf = fs.readFileSync(imgPath);
  const masterB64 = `data:image/jpeg;base64,${masterBuf.toString('base64')}`;

  console.log('Master Zoo 4 image base64 created! Length:', masterB64.length);

  // Panel definitions based on 1024 x 843 grid (3 columns x 2 rows)
  const panels = {
    respiratory_system: { left: 10, top: 10, width: 330, height: 405 },
    heart_and_ecg: { left: 347, top: 10, width: 330, height: 405 },
    excretory_and_nephron: { left: 684, top: 10, width: 330, height: 405 },
    skeleton_and_joints: { left: 10, top: 425, width: 330, height: 405 },
    neuron_and_reflex: { left: 347, top: 425, width: 330, height: 405 },
    endocrine_system: { left: 684, top: 425, width: 330, height: 405 }
  };

  const croppedB64 = {};

  for (const [key, reg] of Object.entries(panels)) {
    const croppedBuffer = await sharp(imgPath)
      .extract({ left: reg.left, top: reg.top, width: reg.width, height: reg.height })
      .jpeg({ quality: 95 })
      .toBuffer();
    
    croppedB64[key] = `data:image/jpeg;base64,${croppedBuffer.toString('base64')}`;
    console.log(`Cropped ${key}: ${croppedBuffer.length} bytes`);
  }

  // Create test HTML preview page
  let htmlContent = `<!DOCTYPE html><html><head><title>Zoo 4 Diagram Preview</title>
  <style>body{background:#0F172A; color:white; font-family:sans-serif; padding:20px;}
  .grid{display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:15px;}
  .card{background:#1E293B; border:1px solid #00B0FF; padding:10px; border-radius:8px;}
  img{max-width:100%; border-radius:4px;}
  </style></head><body><h1>Human Physiology Diagram Crops</h1>
  <div style="margin-bottom:20px;"><h2>Full Master Poster</h2><img src="${masterB64}"/></div>
  <div class="grid">`;

  for (const [key, b64] of Object.entries(croppedB64)) {
    htmlContent += `<div class="card"><h3>${key}</h3><img src="${b64}"/></div>`;
  }
  htmlContent += `</div></body></html>`;

  fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\test_zoo4_crops.html', htmlContent, 'utf8');
  console.log('Saved test_zoo4_crops.html!');

  // Save json of base64 strings
  fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\zoo4_cropped_b64.json', JSON.stringify({ masterB64, ...croppedB64 }), 'utf8');
  console.log('Saved zoo4_cropped_b64.json!');
}

processZoo4Crops().catch(err => console.error(err));
