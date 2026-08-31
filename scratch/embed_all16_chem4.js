const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\036ab895-c67b-4d10-961e-ce89f4772aae\\.user_uploaded';

const imageFiles = {
  generalStructure: 'media_1788191564110.jpg',
  electronicConfig: 'media_1788191564399.jpg',
  occurrence: 'media_1788191564447.jpg',
  generalTrends: 'media_1788191564753.jpg',
  oxidationStates: 'media_1788191636917.jpg',
  ionicRadiusTrend: 'media_1788191637063.jpg',
  coloredIons: 'media_1788191637196.jpg',
  complexFormation: 'media_1788191637226.jpg',
  magneticProps: 'media_1788191664916.jpg',
  interstitialCompound: 'media_1788191665191.jpg',
  alloyFormation: 'media_1788191665380.jpg',
  prepK2Cr2O7: 'media_1788191665425.jpg',
  prepKMnO4: 'media_1788191691490.jpg',
  lanthanideContraction: 'media_1788191691769.jpg',
  effectLanthanideContraction: 'media_1788191691811.jpg',
  actinidesTrend: 'media_1788191692380.jpg'
};

const b64Map = {};
for (const [key, file] of Object.entries(imageFiles)) {
  const filePath = path.join(userUploadedDir, file);
  const data = fs.readFileSync(filePath);
  b64Map[key] = `data:image/jpeg;base64,${data.toString('base64')}`;
  console.log(`Loaded ${key} (${file}), size: ${data.length} bytes, b64 length: ${b64Map[key].length}`);
}

function makeCard(b64, caption, alt) {
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const cards = {
  generalStructure: makeCard(
    b64Map.generalStructure,
    "<b>Periodic Table Architecture of Transition Elements:</b> d-Block elements occupy Groups 3 to 12 in the center, bridging electropositive s-block metals and electronegative p-block non-metals, with f-block inner-transition elements below.",
    "Transition Metal General Structure"
  ),
  electronicConfig: makeCard(
    b64Map.electronicConfig,
    "<b>Valence Electronic Configuration of First Row (3d) Transition Metals:</b> General configuration [Ar] (n-1)d<sup>1-10</sup> ns<sup>1-2</sup> showing progressive filling of 3d orbitals before 4s pairing.",
    "Electronic Configuration First Row Transition Metals"
  ),
  occurrence: makeCard(
    b64Map.occurrence,
    "<b>Occurrence of Transition Metals:</b> Unreactive noble metals (Cu, Ag, Au, Pt) occur in native (free) elemental form, whereas reactive transition metals occur as oxides (Fe<sub>2</sub>O<sub>3</sub>), sulfides, or carbonates.",
    "Occurrence of Transition Metals Native vs Ores"
  ),
  generalTrends: makeCard(
    b64Map.generalTrends,
    "<b>General Trends in Properties across 3d Series (Sc &rarr; Zn):</b> Progressive variations in Ionization Enthalpy (IE), peak in Oxidation State (+7 at Mn), standard Electrode Potential (E&deg;), and overall contraction in Ionic Radii.",
    "General Trends in Properties 3d Series"
  ),
  oxidationStates: makeCard(
    b64Map.oxidationStates,
    "<b>Variable Oxidation States of Manganese (Mn, Z=25):</b> Exhibiting +2 (3d<sup>5</sup>), +3 (3d<sup>4</sup>), +4 (3d<sup>3</sup>), +6 (3d<sup>1</sup>), and +7 (3d<sup>0</sup>) due to close energies of 3d and 4s orbitals.",
    "Variable Oxidation States Manganese"
  ),
  ionicRadiusTrend: makeCard(
    b64Map.ionicRadiusTrend,
    "<b>Ionic Radius Trend in 3d Series:</b> Gradual decrease in M<sup>2+</sup> ionic radius from Sc to Zn caused by poor shielding of increasing nuclear charge by inner d-electrons.",
    "Ionic Radius Trend 3d Series"
  ),
  coloredIons: makeCard(
    b64Map.coloredIons,
    "<b>Origin of Color & d&ndash;d Transitions:</b> Degenerate d-orbitals split into t<sub>2g</sub> and e<sub>g</sub> levels in an octahedral crystal field (&Delta;<sub>o</sub>); absorption of visible light excites d-electrons, transmitting complementary color.",
    "Colored Ions d-d Transitions"
  ),
  complexFormation: makeCard(
    b64Map.complexFormation,
    "<b>Coordination Complex Formation ([Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>):</b> Small ionic size, high nuclear charge, and vacant d-orbitals enable transition metals to coordinate with 6 aqua (H<sub>2</sub>O) ligands in octahedral geometry.",
    "Complex Formation Cu H2O 6 2+"
  ),
  magneticProps: makeCard(
    b64Map.magneticProps,
    "<b>Paramagnetism vs Diamagnetism:</b> Unpaired d-electrons generate net spin magnetic moments (&mu;<sub>s</sub> = &radic;[n(n+2)] BM), making ions paramagnetic; fully paired configurations (d<sup>0</sup>/d<sup>10</sup>) are diamagnetic (&mu; = 0).",
    "Magnetic Properties Paramagnetic vs Diamagnetic"
  ),
  interstitialCompound: makeCard(
    b64Map.interstitialCompound,
    "<b>Interstitial Compounds (e.g. Fe<sub>3</sub>C / Cementite):</b> Small non-metal atoms (C, H, N) occupy octahedral/tetrahedral voids within the transition metal host lattice, imparting extreme hardness and high melting points.",
    "Interstitial Compound Fe3C"
  ),
  alloyFormation: makeCard(
    b64Map.alloyFormation,
    "<b>Alloy Formation (Brass Cu&ndash;Zn):</b> Because transition metals have similar atomic radii (within 15%), atoms of Zn readily substitute Cu in the metallic lattice, creating high-strength corrosion-resistant alloys.",
    "Alloy Formation Brass"
  ),
  prepK2Cr2O7: makeCard(
    b64Map.prepK2Cr2O7,
    "<b>Industrial Preparation of Potassium Dichromate (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>):</b> 3-Step synthesis from Chromite Ore: 1. Na<sub>2</sub>CO<sub>3</sub> roasting &rarr; 2. Acidification to Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> &rarr; 3. KCl crystallization yielding bright orange crystals.",
    "Preparation of K2Cr2O7 Chromite Ore"
  ),
  prepKMnO4: makeCard(
    b64Map.prepKMnO4,
    "<b>Industrial Preparation of Potassium Permanganate (KMnO<sub>4</sub>):</b> 1. Alkaline fusion of Pyrolusite (MnO<sub>2</sub>) with KOH &rarr; Green K<sub>2</sub>MnO<sub>4</sub> &rarr; 2. Oxidation / Disproportionation &rarr; 3. Crystallization of intense purple KMnO<sub>4</sub> crystals.",
    "Preparation of KMnO4 Pyrolusite Ore"
  ),
  lanthanideContraction: makeCard(
    b64Map.lanthanideContraction,
    "<b>Lanthanoid Contraction (La<sup>3+</sup> &rarr; Lu<sup>3+</sup>):</b> Steady, continuous decrease in ionic radii across the 4f series due to extremely poor shielding by diffuse 4f electrons against increasing nuclear charge.",
    "Lanthanide Contraction La3+ to Lu3+"
  ),
  effectLanthanideContraction: makeCard(
    b64Map.effectLanthanideContraction,
    "<b>Consequences of Lanthanoid Contraction:</b> Results in virtually identical radii and identical chemical properties for 4d/5d transition pairs (Chemical Twins: Zr<sup>4+</sup> &approx; Hf<sup>4+</sup>, Nb &approx; Ta, Mo &approx; W).",
    "Effect of Lanthanide Contraction Zr Hf"
  ),
  actinidesTrend: makeCard(
    b64Map.actinidesTrend,
    "<b>Actinoid Series (5f Orbitals Progressive Filling: Th &rarr; Lr):</b> Progressive 5f subshell filling exhibiting higher variable oxidation states (+3 to +7) and pronounced Actinoid Contraction due to very poor 5f electron shielding.",
    "Actinides General Trend Th to Lr"
  )
};

let overviewHtml = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_4_overview_extracted.html', 'utf8');

// 1. Insert General Structure card in Section 1 after introductory paragraph
const target1 = '<p>The <b>d-block elements</b> occupy Groups 3 to 12 in the middle of the Periodic Table, bridging the electropositive s-block alkali/alkaline earth metals and electronegative p-block elements. They are called <i>transition elements</i> because their properties represent a gradual transition from ionic to covalent character.</p>';
if (overviewHtml.includes(target1)) {
  overviewHtml = overviewHtml.replace(target1, target1 + '\n\n' + cards.generalStructure);
  console.log("Inserted Card 1: General Structure in Section 1");
}

// 2. Insert Electronic Configuration card in Section 1(i) after anomalous configurations
const target1_i = '<h3 style="color: #00E676; margin-top: 20px;">(i) General Valence Electronic Configuration</h3>';
if (overviewHtml.includes(target1_i)) {
  overviewHtml = overviewHtml.replace(target1_i, target1_i + '\n\n' + cards.electronicConfig);
  console.log("Inserted Card 2: Electronic Configuration in Section 1(i)");
}

// 3. Insert General Trends Overview & Occurrence in Section 2 after Section 2 heading
const target2 = '<h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 36px;">2. General Trends in Properties of First Row (3d) Transition Metals</h2>';
if (overviewHtml.includes(target2)) {
  overviewHtml = overviewHtml.replace(target2, target2 + '\n\n' + cards.generalTrends + '\n\n' + cards.occurrence);
  console.log("Inserted Card 3 & 4: General Trends & Occurrence in Section 2");
}

// 4. Insert Ionic Radius Trend card in Section 2 Point 2 (Atomic & Ionic Radii Trends)
const target2_2 = '<b style="color: #00E676; font-size: 16px; display: block; margin-bottom: 6px;">2. Atomic &amp; Ionic Radii Trends (Sc &rarr; Zn)</b>';
if (overviewHtml.includes(target2_2)) {
  const p2End = overviewHtml.indexOf('</div>\n    </div>', overviewHtml.indexOf(target2_2)) + 18;
  overviewHtml = overviewHtml.slice(0, p2End) + '\n\n' + cards.ionicRadiusTrend + overviewHtml.slice(p2End);
  console.log("Inserted Card 6: Ionic Radius Trend in Section 2 Point 2");
}

// 5. Insert Oxidation States card in Section 2 Point 3 (Variable Oxidation States)
const target2_3 = '<b style="color: #00E676; font-size: 16px; display: block; margin-bottom: 6px;">3. Variable Oxidation States</b>';
if (overviewHtml.includes(target2_3)) {
  const p3End = overviewHtml.indexOf('</div>\n    </div>', overviewHtml.indexOf(target2_3)) + 18;
  overviewHtml = overviewHtml.slice(0, p3End) + '\n\n' + cards.oxidationStates + overviewHtml.slice(p3End);
  console.log("Inserted Card 5: Oxidation States in Section 2 Point 3");
}

// 6. Insert Magnetic Properties card in Section 2 Point 4 (Magnetic Properties)
const target2_4 = '<b style="color: #00E676; font-size: 16px; display: block; margin-bottom: 6px;">4. Magnetic Properties &amp; Spin-Only Formula</b>';
if (overviewHtml.includes(target2_4)) {
  const p4End = overviewHtml.indexOf('</div>\n    </div>', overviewHtml.indexOf(target2_4)) + 18;
  overviewHtml = overviewHtml.slice(0, p4End) + '\n\n' + cards.magneticProps + overviewHtml.slice(p4End);
  console.log("Inserted Card 9: Magnetic Properties in Section 2 Point 4");
}

// 7. Insert Colored Ions card in Section 2 Point 5 (Color of Transition Metal Ions)
const target2_5 = '<b style="color: #00E676; font-size: 16px; display: block; margin-bottom: 6px;">5. Color of Transition Metal Ions (d-d Transitions)</b>';
if (overviewHtml.includes(target2_5)) {
  const p5End = overviewHtml.indexOf('</div>\n    </div>', overviewHtml.indexOf(target2_5)) + 18;
  overviewHtml = overviewHtml.slice(0, p5End) + '\n\n' + cards.coloredIons + overviewHtml.slice(p5End);
  console.log("Inserted Card 7: Colored Ions in Section 2 Point 5");
}

// 8. Insert Complex Formation & Catalytic in Section 2 Point 6
const target2_6 = '<b style="color: #00E676; font-size: 16px; display: block; margin-bottom: 6px;">6. Catalytic Properties</b>';
if (overviewHtml.includes(target2_6)) {
  const p6End = overviewHtml.indexOf('</div>\n    </div>', overviewHtml.indexOf(target2_6)) + 18;
  overviewHtml = overviewHtml.slice(0, p6End) + '\n\n' + cards.complexFormation + overviewHtml.slice(p6End);
  console.log("Inserted Card 8: Complex Formation in Section 2 Point 6");
}

// 9. Insert Interstitial Compound & Alloy Formation in Section 2 Point 7
const target2_7 = '<b style="color: #00E676; font-size: 16px; display: block; margin-bottom: 6px;">7. Interstitial Compounds &amp; Alloy Formation</b>';
if (overviewHtml.includes(target2_7)) {
  const p7End = overviewHtml.indexOf('</div>\n    </div>', overviewHtml.indexOf(target2_7)) + 18;
  overviewHtml = overviewHtml.slice(0, p7End) + '\n\n' + cards.interstitialCompound + '\n\n' + cards.alloyFormation + overviewHtml.slice(p7End);
  console.log("Inserted Cards 10 & 11: Interstitial Compound & Alloy Formation in Section 2 Point 7");
}

// 10. Insert K2Cr2O7 Preparation in Section 3(i)
const target3_1 = '<h3 style="color: #00E676; margin-top: 20px;">(i) Industrial Preparation from Chromite Ore (FeCr<sub>2</sub>O<sub>4</sub>)</h3>';
if (overviewHtml.includes(target3_1)) {
  overviewHtml = overviewHtml.replace(target3_1, target3_1 + '\n\n' + cards.prepK2Cr2O7);
  console.log("Inserted Card 12: Preparation of K2Cr2O7 in Section 3(i)");
}

// 11. Insert KMnO4 Preparation in Section 4(i)
const target4_1 = '<h3 style="color: #00E676; margin-top: 20px;">(i) Industrial Preparation from Pyrolusite Ore (MnO<sub>2</sub>)</h3>';
if (overviewHtml.includes(target4_1)) {
  overviewHtml = overviewHtml.replace(target4_1, target4_1 + '\n\n' + cards.prepKMnO4);
  console.log("Inserted Card 13: Preparation of KMnO4 in Section 4(i)");
}

// 12. Insert Lanthanoid Contraction in Section 5(ii)
const target5_2 = '<h3 style="color: #00E676; margin-top: 24px;">(ii) Lanthanoid (Lanthanide) Contraction &amp; Its 4 Major Consequences</h3>';
if (overviewHtml.includes(target5_2)) {
  overviewHtml = overviewHtml.replace(target5_2, target5_2 + '\n\n' + cards.lanthanideContraction);
  console.log("Inserted Card 14: Lanthanoid Contraction in Section 5(ii)");
}

// 13. Insert Effect of Lanthanoid Contraction (Zr-Hf) in Section 5(ii) Point 1
const target5_2_1 = '<b style="color: #00E676; font-size: 15.5px; display: block; margin-bottom: 4px;">1. Identical Radii of 4d and 5d Transition Pairs (Chemical Twins):</b>';
if (overviewHtml.includes(target5_2_1)) {
  const pTwinEnd = overviewHtml.indexOf('</div>', overviewHtml.indexOf(target5_2_1)) + 6;
  overviewHtml = overviewHtml.slice(0, pTwinEnd) + '\n\n' + cards.effectLanthanideContraction + overviewHtml.slice(pTwinEnd);
  console.log("Inserted Card 15: Effect of Lanthanoid Contraction (Zr-Hf) in Section 5(ii) Point 1");
}

// 14. Insert Actinides Trend in Section 6(i)
const target6_1 = '<h3 style="color: #00E676; margin-top: 20px;">(i) General Characteristics of Actinoid (Actinide)s (Actinides)</h3>';
if (overviewHtml.includes(target6_1)) {
  overviewHtml = overviewHtml.replace(target6_1, target6_1 + '\n\n' + cards.actinidesTrend);
  console.log("Inserted Card 16: Actinides Trend in Section 6(i)");
}

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_4_overview_with_all_16_cards.html', overviewHtml, 'utf8');

// Update c12-chem-4.ts
const fullTs = fs.readFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-4.ts', 'utf8');
const restTs = fullTs.slice(fullTs.indexOf('export const c12Chem4HtmlSolutions'));

const newTsContent = `// Class 12 Chemistry Unit IV: d- and f-Block Elements (Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem4HtmlOverview = ${JSON.stringify(overviewHtml)};

${restTs}`;

fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\client\\data\\content\\c12-chem-4.ts', newTsContent, 'utf8');
console.log("Successfully updated client/data/content/c12-chem-4.ts with ALL 16 diagrams!");
