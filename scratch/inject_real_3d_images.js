const fs = require('fs');
const path = require('path');

const img1Path = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\5b52cbc1-32a7-4925-827a-3020587c6e99\\c11_zoo_1_fig1_classification_1786988653641.jpg';
const img2Path = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\5b52cbc1-32a7-4925-827a-3020587c6e99\\c11_zoo_1_fig2_chordate_1786988676100.jpg';
const img3Path = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\5b52cbc1-32a7-4925-827a-3020587c6e99\\c11_zoo_1_fig3_organisms_1786989171038.jpg';
const img4Path = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\5b52cbc1-32a7-4925-827a-3020587c6e99\\c11_zoo_1_fig4_biosphere_1786989425979.jpg';

const b64_1 = 'data:image/jpeg;base64,' + fs.readFileSync(img1Path).toString('base64');
const b64_2 = 'data:image/jpeg;base64,' + fs.readFileSync(img2Path).toString('base64');
const b64_3 = 'data:image/jpeg;base64,' + fs.readFileSync(img3Path).toString('base64');
const b64_4 = 'data:image/jpeg;base64,' + fs.readFileSync(img4Path).toString('base64');

function makeHdImgBlock(b64Data, figNum, title, altText) {
  return '<div style="text-align: center; margin: 32px 0;">\n' +
    '  <img src="' + b64Data + '" style="width: 100%; max-width: 860px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 10px 32px rgba(255, 61, 0, 0.35); border: 2px solid #FF3D00;" alt="' + altText + '" />\n' +
    '  <p style="color: #FF3D00; font-size: 15px; margin-top: 12px; font-weight: bold;">Figure ' + figNum + ': ' + title + '</p>\n' +
  '</div>';
}

const htmlTemplatePath = path.join(__dirname, 'overview.html');
let html = fs.readFileSync(htmlTemplatePath, 'utf8');

const fig1 = makeHdImgBlock(b64_1, "1.1", "Ultra-HD 3D Biological Diagram - Basis of Animal Classification (Body Symmetry &amp; Coelom Types)", "Basis of Animal Classification");
const fig2 = makeHdImgBlock(b64_2, "1.2", "Ultra-HD 3D Anatomical Illustration - Generalized Chordate Body Plan (Notochord, Nerve Cord &amp; Gill Slits)", "Generalized Chordate Body Plan");
const fig3 = makeHdImgBlock(b64_3, "1.3", "Ultra-HD 3D Representative Organisms Collage - Flashcards of Key Non-Chordate Phyla (Sycon, Hydra, Ascaris, Earthworm, Prawn, Starfish)", "Representative Non-Chordate Organisms");
const fig4 = makeHdImgBlock(b64_4, "1.4", "Ultra-HD 3D Conservation Diagram - Biosphere Reserve Zonation Architecture &amp; Selected National Parks Reference", "Biosphere Reserve Zonation Architecture");

html = html.replace('{{FIG_1_1}}', fig1)
           .replace('{{FIG_1_2}}', '')
           .replace('{{FIG_1_3}}', '')
           .replace('{{FIG_1_4}}', fig3)
           .replace('{{FIG_1_5}}', '')
           .replace('{{FIG_1_6}}', '')
           .replace('{{FIG_1_7}}', '')
           .replace('{{FIG_1_8}}', '')
           .replace('{{FIG_1_9}}', '')
           .replace('{{FIG_1_10}}', '')
           .replace('{{FIG_1_11}}', '')
           .replace('{{FIG_1_12}}', fig2)
           .replace('{{FIG_1_13}}', fig4);

// Escape backticks and ${ in html
html = html.replace(/`/g, '\\`').replace(/\${/g, '\\${');

const targetFilePath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-zoo-1.ts');
let tsContent = fs.readFileSync(targetFilePath, 'utf8');

const regex = /export const c11Zoo1HtmlOverview = `[\s\S]*?`;/;
if (!regex.test(tsContent)) {
  console.error("Could not match regex in c11-zoo-1.ts!");
  process.exit(1);
}

tsContent = tsContent.replace(regex, () => 'export const c11Zoo1HtmlOverview = `' + html + '`;');
fs.writeFileSync(targetFilePath, tsContent, 'utf8');

console.log("SUCCESS: c11-zoo-1.ts updated with 4 HD Realistic 3D JPEG Base64 Illustrations matching Chapter 4 standard!");
