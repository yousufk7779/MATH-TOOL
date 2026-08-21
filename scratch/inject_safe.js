const fs = require('fs');
const path = require('path');

const svgMapPath = path.join(__dirname, '..', 'svg_b64_map.json');
const svgs = JSON.parse(fs.readFileSync(svgMapPath, 'utf8'));

function makeImgBlock(b64Data, figNum, caption, altText) {
  return '<div style="text-align: center; margin: 26px 0;">\n' +
    '  <img src="' + b64Data + '" style="width: 100%; max-width: 720px; height: auto; border-radius: 14px; display: block; margin: 15px auto; box-shadow: 0 6px 24px rgba(255, 61, 0, 0.45); border: 2px solid #FF3D00;" alt="' + altText + '" />\n' +
    '  <p style="color: #FF3D00; font-size: 14px; margin-top: 10px; font-weight: bold;">Figure ' + figNum + ': ' + caption + '</p>\n' +
  '</div>';
}

const htmlTemplatePath = path.join(__dirname, 'overview.html');
let html = fs.readFileSync(htmlTemplatePath, 'utf8');

const figReplacements = {
  '{{FIG_1_1}}': makeImgBlock(svgs.coelomTypesSvg, "1.1", "3D Coelom Types Cross-Sectional Architecture (Acoelomate, Pseudocoelomate &amp; Eucoelomate)", "3D Coelom Types Diagram"),
  '{{FIG_1_2}}': makeImgBlock(svgs.germLayersSvg, "1.2", "3D Embryonic Germ Layer Organization (Diploblastic vs Triploblastic Animals)", "3D Embryonic Germ Layers Diagram"),
  '{{FIG_1_3}}': makeImgBlock(svgs.bodySymmetrySvg, "1.3", "3D Body Symmetry Patterns (Radial Symmetry in Hydra vs Bilateral Symmetry)", "3D Body Symmetry Diagram"),
  '{{FIG_1_4}}': makeImgBlock(svgs.syconPoriferaSvg, "1.4", "3D Porifera Anatomy &amp; Water Canal System (Sycon Osculum, Ostia &amp; Choanocyte Cells)", "3D Sycon Sponge Diagram"),
  '{{FIG_1_5}}': makeImgBlock(svgs.cnidariaFormsSvg, "1.5", "3D Cnidaria Body Plans (Comparative Sessile Polyp vs Free-Swimming Medusa Forms)", "3D Cnidaria Body Forms Diagram"),
  '{{FIG_1_6}}': makeImgBlock(svgs.taeniaPlatyhelminthesSvg, "1.6", "3D Platyhelminthes Anatomy (Taenia solium Scolex, Proglottids &amp; Excretory Flame Cells)", "3D Taenia Tapeworm Diagram"),
  '{{FIG_1_7}}': makeImgBlock(svgs.ascarisAschelminthesSvg, "1.7", "3D Aschelminthes Sexual Dimorphism (Male Ascaris Curved Tail vs Female Straight)", "3D Ascaris Roundworm Diagram"),
  '{{FIG_1_8}}': makeImgBlock(svgs.annelidaNereisEarthwormSvg, "1.8", "3D Annelida Structure (Nereis Lateral Parapodia &amp; Earthworm Metameric Segmentation)", "3D Annelida Diagram"),
  '{{FIG_1_9}}': makeImgBlock(svgs.arthropodaBodyPlanSvg, "1.9", "3D Arthropoda Architecture (Tagmatization: Head, Thorax, Abdomen &amp; Jointed Legs)", "3D Arthropoda Diagram"),
  '{{FIG_1_10}}': makeImgBlock(svgs.echinodermataAsteriasSvg, "1.10", "3D Echinodermata Anatomy (Asterias Starfish Aboral/Oral View &amp; Water Vascular System)", "3D Starfish Diagram"),
  '{{FIG_1_11}}': makeImgBlock(svgs.hemichordataSvg, "1.11", "3D Hemichordata Structure (Balanoglossus Proboscis, Collar, Trunk &amp; Stomochord)", "3D Balanoglossus Diagram"),
  '{{FIG_1_12}}': makeImgBlock(svgs.chordateCharacteristicsSvg, "1.12", "3D Generalized Chordate Body Plan (Notochord, Nerve Cord, Gill Slits &amp; Tail)", "3D Chordate Diagram"),
  '{{FIG_1_13}}': makeImgBlock(svgs.biosphereReserveSvg, "1.13", "3D Biosphere Reserve Zonation Architecture (Core Zone, Buffer Zone &amp; Transition Zone with J&amp;K/Ladakh NPs)", "3D Biosphere Reserve Zonation Diagram")
};

for (const [key, value] of Object.entries(figReplacements)) {
  html = html.split(key).join(value);
}

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

console.log("SUCCESS: c11-zoo-1.ts updated with 13 embedded 3D SVGs!");
