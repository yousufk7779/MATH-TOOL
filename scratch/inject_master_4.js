const fs = require('fs');
const path = require('path');

const svgMapPath = path.join(__dirname, 'master_svg_map.json');
const svgs = JSON.parse(fs.readFileSync(svgMapPath, 'utf8'));

function makeMasterImgBlock(b64Data, figNum, title, altText) {
  return '<div style="text-align: center; margin: 30px 0;">\n' +
    '  <img src="' + b64Data + '" style="width: 100%; max-width: 860px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25); border: 2px solid #2D4A3E;" alt="' + altText + '" />\n' +
    '  <p style="color: #FF3D00; font-size: 15px; margin-top: 12px; font-weight: bold;">Figure ' + figNum + ': ' + title + '</p>\n' +
  '</div>';
}

const htmlTemplatePath = path.join(__dirname, 'overview.html');
let html = fs.readFileSync(htmlTemplatePath, 'utf8');

// We will replace {{FIG_1_1}}, {{FIG_1_2}}, {{FIG_1_3}} with Master Diagram 1
// We will replace {{FIG_1_4}}, {{FIG_1_5}}, {{FIG_1_6}}, {{FIG_1_7}}, {{FIG_1_8}}, {{FIG_1_9}}, {{FIG_1_10}}, {{FIG_1_11}} with Master Diagram 3
// We will replace {{FIG_1_12}} with Master Diagram 2
// We will replace {{FIG_1_13}} with Master Diagram 4

const fig1 = makeMasterImgBlock(svgs.diagram1Svg, "1.1", "Master 3D Diagram - Basic Anatomical Criteria for Animal Classification (Fundamental Body Plans: Radial, Bilateral &amp; Coelom Types)", "Fundamental Body Plans Poster");
const fig2 = makeMasterImgBlock(svgs.diagram2Svg, "1.2", "Master 3D Diagram - Basic Chordate Body Plan &amp; Chordate vs Non-Chordate Comparison", "Basic Chordate Body Plan Poster");
const fig3 = makeMasterImgBlock(svgs.diagram3Svg, "1.3", "Master 3D Diagram - Representative Organisms Sample Flashcards (Sycon, Hydra, Ascaris, Earthworm, Prawn, Starfish)", "Representative Organisms Poster");
const fig4 = makeMasterImgBlock(svgs.diagram4Svg, "1.4", "Master 3D Diagram - Biosphere Reserve Zonation Architecture &amp; Selected National Parks Reference", "Biosphere Reserve Zonation Poster");

// Replace placeholders cleanly
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

// Escape backticks and ${ in html so it doesn't break TS template literals
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

console.log("SUCCESS: c11-zoo-1.ts updated with 4 Master 3D Diagrams matching user screenshot!");
