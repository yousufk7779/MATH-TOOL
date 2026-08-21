const sharp = require('sharp');
const path = require('path');

const imgPath = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\d123af52-ff96-4b27-bff2-978545bba9ee\\.user_uploaded\\media_1786721156933.jpg';

sharp(imgPath).metadata().then(meta => {
  console.log('ZOO 4 IMAGE METADATA:', meta.width, 'x', meta.height, 'format:', meta.format);
}).catch(err => {
  console.error('ERROR:', err);
});
