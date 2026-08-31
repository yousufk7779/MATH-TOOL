const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.user_uploaded';

const imageFiles = {
  coordCompound: 'media_1788195679679.jpg',
  coordNumber: 'media_1788195679830.jpg',
  importantLigands: 'media_1788195680000.jpg',
  shapesComplexes: 'media_1788195680156.jpg',
  isomerism: 'media_1788195680196.jpg',
  magneticProps: 'media_1788195720474.jpg',
  chelateComplexes: 'media_1788195720633.jpg',
  importanceCoord: 'media_1788195720796.jpg',
  bondingCoord: 'media_1788195720949.jpg',
  applications: 'media_1788195721000.jpg'
};

const b64Map = {};
for (const [key, file] of Object.entries(imageFiles)) {
  const filePath = path.join(userUploadedDir, file);
  const data = fs.readFileSync(filePath);
  b64Map[key] = `data:image/jpeg;base64,${data.toString('base64')}`;
  console.log(`Loaded ${key} (${file}), size: ${data.length} bytes, b64 length: ${b64Map[key].length}`);
}

function makeCard(b64, caption, alt) {
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const cards = {
  coordCompound: makeCard(
    b64Map.coordCompound,
    "<b>Architecture of a Coordination Entity [M(L)<sub>n</sub>]<sup>x</sup>:</b> Central transition metal ion (M) bound to surrounding Lewis base ligands (L) by coordinate dative bonds, retaining structural integrity in solid and solution states.",
    "Coordination Compounds Structure"
  ),
  coordNumber: makeCard(
    b64Map.coordNumber,
    "<b>Coordination Number (CN):</b> Total number of ligand donor atoms directly bonded to the central metal atom/ion: Linear (CN = 2), Square Planar/Tetrahedral (CN = 4), and Octahedral (CN = 6).",
    "Coordination Number Examples"
  ),
  importantLigands: makeCard(
    b64Map.importantLigands,
    "<b>Essential Monodentate & Chelating Ligands:</b> Lewis dot structures of key electron pair donors: unidentate (NH<sub>3</sub>, H<sub>2</sub>O, Cl<sup>-</sup>, CN<sup>-</sup>, OH<sup>-</sup>) and didentate chelating ligands (en, C<sub>2</sub>O<sub>4</sub><sup>2-</sup>).",
    "Important Ligands Lewis Structures"
  ),
  chelateComplexes: makeCard(
    b64Map.chelateComplexes,
    "<b>Chelate Effect & Ring Formation ([Cu(en)<sub>2</sub>]<sup>2+</sup>):</b> Polydentate ligands coordinate through multiple donor atoms to form stable 5-membered chelate rings, drastically enhancing thermodynamic stability through an entropy increase (&Delta;S > 0).",
    "Chelate Complexes Cu en 2 2+"
  ),
  shapesComplexes: makeCard(
    b64Map.shapesComplexes,
    "<b>Spatial Geometries of Coordination Entities:</b> 3D molecular geometries determined by hybridisation: Linear (sp), Tetrahedral (sp<sup>3</sup>), Square Planar (dsp<sup>2</sup>), and Octahedral (d<sup>2</sup>sp<sup>3</sup> / sp<sup>3</sup>d<sup>2</sup>).",
    "Shapes of Complexes"
  ),
  isomerism: makeCard(
    b64Map.isomerism,
    "<b>Geometrical & Linkage Isomerism:</b> Contrasting <i>cis/trans</i> relative spatial arrangements in [Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]<sup>+</sup> and ambidentate ligand binding modes (Yellow Nitro -NO<sub>2</sub> vs Red Nitrito -ONO).",
    "Isomerism in Coordination Compounds"
  ),
  bondingCoord: makeCard(
    b64Map.bondingCoord,
    "<b>Coordinate & Synergic &pi;-Back Bonding:</b> In addition to primary &sigma; ligand-to-metal donation, metal d-electrons back-donate into vacant &pi;* ligand orbitals, strengthening the metal-carbon bond (e.g. in metal carbonyls/cyanides).",
    "Bonding in Coordination Compounds Synergic Bonding"
  ),
  magneticProps: makeCard(
    b64Map.magneticProps,
    "<b>Crystal Field Splitting & Magnetic Properties:</b> Comparison of Diamagnetic (&mu; = 0, fully paired), Paramagnetic (&mu; > 0, unpaired electrons in t<sub>2g</sub>/e<sub>g</sub>), and Ferromagnetic states.",
    "Magnetic Properties CFT t2g eg"
  ),
  importanceCoord: makeCard(
    b64Map.importanceCoord,
    "<b>Multidisciplinary Importance of Coordination Complexes:</b> Vivid colors from d&ndash;d transitions, industrial catalysts (V<sub>2</sub>O<sub>5</sub>, Ziegler-Natta), analytical reagents, and vital biological pigments (Hemoglobin, Chlorophyll, Vitamin B<sub>12</sub>).",
    "Importance of Coordination Compounds"
  ),
  applications: makeCard(
    b64Map.applications,
    "<b>Major Industrial & Medical Applications:</b> Phthalocyanine dyes/pigments, silver extraction & photography hypo fixing, and targeted cancer chemotherapy with Cisplatin (<i>cis</i>-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]).",
    "Applications Coordination Compounds Medicine Metallurgy"
  )
};

let overviewHtml = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_5_overview_extracted.html', 'utf8');

// 1. Insert Coordination Compound card in Section 1 Point 1
const target1 = '<b style="color: #FF9100; font-size: 16px; display: block; margin-bottom: 6px;">1. Double Salts vs Coordination Complexes</b>';
if (overviewHtml.includes(target1)) {
  const p1End = overviewHtml.indexOf('</div>\n    </div>', overviewHtml.indexOf(target1)) + 18;
  overviewHtml = overviewHtml.slice(0, p1End) + '\n\n' + cards.coordCompound + overviewHtml.slice(p1End);
  console.log("Inserted Card 1: Coordination Compound in Section 1 Point 1");
}

// 2. Insert Coordination Number, Important Ligands, and Chelate Complexes in Section 1 Point 2
const target1_2 = '<b style="color: #FF9100; font-size: 16px; display: block; margin-bottom: 6px;">2. Types of Ligands based on Denticity &amp; Binding Mode</b>';
if (overviewHtml.includes(target1_2)) {
  const p2End = overviewHtml.indexOf('</div>\n    </div>', overviewHtml.indexOf(target1_2)) + 18;
  overviewHtml = overviewHtml.slice(0, p2End) + '\n\n' + cards.coordNumber + '\n\n' + cards.importantLigands + '\n\n' + cards.chelateComplexes + overviewHtml.slice(p2End);
  console.log("Inserted Cards 2, 3, 7: Coord Number, Important Ligands, Chelate in Section 1 Point 2");
}

// 3. Insert Isomerism in Section 3
const target3 = '<h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 36px;">3. Isomerism in Co-ordination Compounds (Coordination Compounds)</h2>';
if (overviewHtml.includes(target3)) {
  overviewHtml = overviewHtml.replace(target3, target3 + '\n\n' + cards.isomerism);
  console.log("Inserted Card 5: Isomerism in Section 3");
}

// 4. Insert Bonding in Coordination Compounds in Section 4(i) (Werner's Theory)
const target4_1 = '<h3 style="color: #FF9100; margin-top: 20px;">(i) Werner\'s Coordination Theory (1893)</h3>';
if (overviewHtml.includes(target4_1)) {
  overviewHtml = overviewHtml.replace(target4_1, target4_1 + '\n\n' + cards.bondingCoord);
  console.log("Inserted Card 9: Bonding in Coordination Compounds in Section 4(i)");
}

// 5. Insert Shapes of Complexes in Section 4(ii) (Valence Bond Theory)
const target4_2 = '<h3 style="color: #FF9100; margin-top: 24px;">(ii) Valence Bond Theory (VBT) &amp; Hybridisation</h3>';
if (overviewHtml.includes(target4_2)) {
  overviewHtml = overviewHtml.replace(target4_2, target4_2 + '\n\n' + cards.shapesComplexes);
  console.log("Inserted Card 4: Shapes of Complexes in Section 4(ii)");
}

// 6. Insert Magnetic Properties in Section 4(iii) (Crystal Field Theory)
const target4_3 = '<h3 style="color: #FF9100; margin-top: 24px;">(iii) Crystal Field Theory (CFT) &amp; d-Orbital Splitting</h3>';
if (overviewHtml.includes(target4_3)) {
  overviewHtml = overviewHtml.replace(target4_3, target4_3 + '\n\n' + cards.magneticProps);
  console.log("Inserted Card 6: Magnetic Properties in Section 4(iii)");
}

// 7. Insert Importance and Applications in Section 5
const target5 = '<h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 36px;">5. Importance &amp; Applications of Co-ordination Compounds (Coordination Compounds)</h2>';
if (overviewHtml.includes(target5)) {
  overviewHtml = overviewHtml.replace(target5, target5 + '\n\n' + cards.importanceCoord);
  console.log("Inserted Card 8: Importance in Section 5");
}

const target5_4 = '<b style="color: #FF9100; font-size: 16px; display: block; margin-bottom: 4px;">4. Medical Applications &amp; Chelation Therapy:</b>';
if (overviewHtml.includes(target5_4)) {
  const p5End = overviewHtml.indexOf('</div>\n  </div>', overviewHtml.indexOf(target5_4)) + 14;
  overviewHtml = overviewHtml.slice(0, p5End) + '\n\n' + cards.applications + overviewHtml.slice(p5End);
  console.log("Inserted Card 10: Applications in Section 5 Point 4");
}

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_5_overview_with_all_10_cards.html', overviewHtml, 'utf8');

// Update c12-chem-5.ts
const fullTs = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-5.ts', 'utf8');
const restTs = fullTs.slice(fullTs.indexOf('export const c12Chem5HtmlSolutions'));

const newTsContent = `// Class 12 Chemistry Unit V: Co-ordination Compounds (Coordination Compounds) (Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem5HtmlOverview = ${JSON.stringify(overviewHtml)};

${restTs}`;

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-5.ts', newTsContent, 'utf8');
console.log("Successfully updated client/data/content/c12-chem-5.ts with ALL 10 diagrams!");
