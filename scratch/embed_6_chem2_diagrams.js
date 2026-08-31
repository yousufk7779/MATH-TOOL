const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.user_uploaded';

const imageFiles = {
  conductance: 'media_1788189110668.jpg',
  electrolytic: 'media_1788189110387.jpg',
  galvanic: 'media_1788189110510.jpg',
  she: 'media_1788189110603.jpg',
  fuelCell: 'media_1788189110700.jpg',
  corrosion: 'media_1788189124134.jpg'
};

const b64Map = {};
for (const [key, file] of Object.entries(imageFiles)) {
  const filePath = path.join(userUploadedDir, file);
  const data = fs.readFileSync(filePath);
  b64Map[key] = `data:image/jpeg;base64,${data.toString('base64')}`;
  console.log(`Loaded ${key} (${file}), size: ${data.length} bytes, b64 length: ${b64Map[key].length}`);
}

function makeCard(b64, caption, alt) {
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const cards = {
  conductance: makeCard(
    b64Map.conductance,
    "<b>Conductivity Cell & Conductance Measurement:</b> Two platinized platinum electrodes immersed in electrolytic solution connected to a high-frequency AC conductivity bridge to eliminate polarization and measure solution conductance directly.",
    "Conductance Measurement & Conductivity Cell"
  ),
  electrolytic: makeCard(
    b64Map.electrolytic,
    "<b>Electrolytic Cell:</b> External electrical energy (DC source) forces a non-spontaneous redox reaction: Cu anode (+) dissolves into Cu<sup>2+</sup> ions while pure Cu deposits at the cathode (-).",
    "Electrolytic Cell"
  ),
  galvanic: makeCard(
    b64Map.galvanic,
    "<b>Galvanic (Voltaic / Daniell) Cell:</b> Spontaneous chemical redox reaction generates electrical energy. Zinc undergoes oxidation at the Anode (-) and Copper undergoes reduction at the Cathode (+), with a Salt Bridge maintaining electrical neutrality.",
    "Galvanic Voltaic Daniell Cell"
  ),
  she: makeCard(
    b64Map.she,
    "<b>Standard Hydrogen Electrode (SHE):</b> Universal primary reference electrode with E&deg; = 0.00 V. Pure H<sub>2</sub> gas at 1 atm bubbles over a platinum-black foil immersed in a 1 M H<sup>+</sup> acidic solution at 298 K.",
    "Standard Hydrogen Electrode SHE"
  ),
  fuelCell: makeCard(
    b64Map.fuelCell,
    "<b>H<sub>2</sub> &ndash; O<sub>2</sub> Fuel Cell:</b> High-efficiency galvanic cell directly converting the chemical combustion energy of Hydrogen and Oxygen into electrical work with zero pollution, producing only pure water (H<sub>2</sub>O) as byproduct.",
    "Fuel Cell H2-O2"
  ),
  corrosion: makeCard(
    b64Map.corrosion,
    "<b>Electrochemical Theory of Corrosion (Rusting of Iron):</b> Non-uniform metal surface acts as a miniature galvanic cell where iron oxidizes at the Anode (Fe &rarr; Fe<sup>2+</sup> + 2e<sup>-</sup>) and atmospheric O<sub>2</sub> reduces at the Cathode, forming hydrated ferric oxide (Fe<sub>2</sub>O<sub>3</sub> &middot; xH<sub>2</sub>O).",
    "Corrosion Rusting of Iron"
  )
};

// Read c12_chem_2_overview_extracted.html
let overviewHtml = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_2_overview_extracted.html', 'utf8');

// 1. Insert conductance card in Section 2 after (ii) Specific Conductivity Definition box
const target2 = '(ii) Specific Conductivity (&kappa; - Kappa) &amp; Cell Constant (G*)</h3>';
if (overviewHtml.includes(target2)) {
  overviewHtml = overviewHtml.replace(target2, target2 + '\n\n' + cards.conductance);
  console.log("Inserted Card 1: Conductance Measurement in Section 2");
} else {
  console.error("Target 2 not found!");
}

// 2. Insert electrolytic card in Section 5 after main description or (i) Faraday's First Law
const target5 = '<h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 36px;">5. Electrolysis &amp; Faraday\'s Quantitative Laws of Electrolysis</h2>\n\n  <p><b>Electrolysis</b> is the chemical decomposition of an electrolyte driven by passing direct electrical current (DC) from an external voltage source through its molten state or aqueous solution.</p>';
if (overviewHtml.includes(target5)) {
  overviewHtml = overviewHtml.replace(target5, target5 + '\n\n' + cards.electrolytic);
  console.log("Inserted Card 2: Electrolytic Cell in Section 5");
} else {
  console.error("Target 5 not found!");
}

// 3. Insert galvanic card in Section 6 after (i) Daniell Cell & Salt Bridge Functions
const target6_1 = '<h3 style="color: #00E5FF; margin-top: 20px;">(i) Daniell Cell &amp; Salt Bridge Functions</h3>';
if (overviewHtml.includes(target6_1)) {
  overviewHtml = overviewHtml.replace(target6_1, target6_1 + '\n\n' + cards.galvanic);
  console.log("Inserted Card 3: Galvanic / Daniell Cell in Section 6(i)");
} else {
  console.error("Target 6_1 not found!");
}

// 4. Insert SHE card in Section 6 after (ii) Standard Hydrogen Electrode (SHE)
const target6_2 = '<h3 style="color: #00E5FF; margin-top: 24px;">(ii) Standard Hydrogen Electrode (SHE) &amp; Electrochemical Series</h3>';
if (overviewHtml.includes(target6_2)) {
  overviewHtml = overviewHtml.replace(target6_2, target6_2 + '\n\n' + cards.she);
  console.log("Inserted Card 4: Standard Hydrogen Electrode in Section 6(ii)");
} else {
  console.error("Target 6_2 not found!");
}

// 5. Insert fuel cell card in Section 10 after heading
const target10 = '<h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 36px;">10. Fuel Cells &amp; Hydrogen Economy</h2>';
if (overviewHtml.includes(target10)) {
  overviewHtml = overviewHtml.replace(target10, target10 + '\n\n' + cards.fuelCell);
  console.log("Inserted Card 5: Fuel Cell in Section 10");
} else {
  console.error("Target 10 not found!");
}

// 6. Insert corrosion card in Section 11 after heading
const target11 = '<h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 36px;">11. Corrosion &amp; Electrochemical Theory of Rusting</h2>';
if (overviewHtml.includes(target11)) {
  overviewHtml = overviewHtml.replace(target11, target11 + '\n\n' + cards.corrosion);
  console.log("Inserted Card 6: Corrosion in Section 11");
} else {
  console.error("Target 11 not found!");
}

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_2_overview_with_cards.html', overviewHtml, 'utf8');

// Now update c12-chem-2.ts
const fullTs = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-2.ts', 'utf8');
const restTs = fullTs.slice(fullTs.indexOf('export const c12Chem2HtmlSolutions'));

const newTsContent = `// Class 12 Chemistry Unit II: Electrochemistry (Official Syllabus - 09 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem2HtmlOverview = ${JSON.stringify(overviewHtml)};

${restTs}`;

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-2.ts', newTsContent, 'utf8');
console.log("Successfully updated client/data/content/c12-chem-2.ts!");
