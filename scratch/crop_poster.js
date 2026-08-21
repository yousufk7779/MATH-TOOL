const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgPath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\d123af52-ff96-4b27-bff2-978545bba9ee\\.user_uploaded\\media_1786715542252.jpg';

async function processCrops() {
  const masterBuf = fs.readFileSync(imgPath);
  const masterB64 = `data:image/jpeg;base64,${masterBuf.toString('base64')}`;

  console.log('Master image base64 created! Length:', masterB64.length);

  // Region definitions based on 1024 x 559 image
  const regions = {
    cell_types: { left: 45, top: 85, width: 305, h: 200 },
    fluid_mosaic: { left: 45, top: 285, width: 305, h: 145 },
    cell_wall_cilia: { left: 45, top: 430, width: 305, h: 110 },
    nucleus: { left: 355, top: 85, width: 145, h: 135 },
    mitochondria: { left: 500, top: 85, width: 150, h: 135 },
    golgi_upper: { left: 355, top: 220, width: 145, h: 110 },
    plastids: { left: 500, top: 220, width: 150, h: 110 },
    er_golgi_lower: { left: 355, top: 330, width: 145, h: 210 },
    mitosis_meiosis_mid: { left: 500, top: 330, width: 150, h: 210 },
    cell_cycle_top: { left: 655, top: 85, width: 300, h: 220 },
    internal_struct_bottom: { left: 655, top: 305, width: 300, h: 235 }
  };

  const croppedB64 = {};

  for (const [key, reg] of Object.entries(regions)) {
    const croppedBuffer = await sharp(imgPath)
      .extract({ left: reg.left, top: reg.top, width: reg.width, height: reg.h })
      .jpeg({ quality: 95 })
      .toBuffer();
    
    croppedB64[key] = `data:image/jpeg;base64,${croppedBuffer.toString('base64')}`;
    console.log(`Cropped ${key}: ${croppedBuffer.length} bytes`);
  }

  // Create test HTML page
  let htmlContent = `<!DOCTYPE html><html><head><title>Cropped Diagram Preview</title>
  <style>body{background:#0F172A; color:white; font-family:sans-serif; padding:20px;}
  .grid{display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:15px;}
  .card{background:#1E293B; border:1px solid #FF007F; padding:10px; border-radius:8px;}
  img{max-width:100%; border-radius:4px;}
  </style></head><body><h1>User Uploaded Cell Biology Diagram Crops</h1>
  <div style="margin-bottom:20px;"><h2>Full Master Poster</h2><img src="${masterB64}"/></div>
  <div class="grid">`;

  for (const [key, b64] of Object.entries(croppedB64)) {
    htmlContent += `<div class="card"><h3>${key}</h3><img src="${b64}"/></div>`;
  }
  htmlContent += `</div></body></html>`;

  fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\test_crops.html', htmlContent, 'utf8');
  console.log('Saved d:\\All NCERT SOLUTIONS11\\scratch\\test_crops.html!');

  // Save json of base64 strings for generator
  fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\cropped_b64.json', JSON.stringify({ masterB64, ...croppedB64 }), 'utf8');
  console.log('Saved d:\\All NCERT SOLUTIONS11\\scratch\\cropped_b64.json!');
}

processCrops().catch(err => console.error(err));
