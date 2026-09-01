const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\944a3b30-06dc-4c2c-9bec-91424ca2bb43\\.user_uploaded';

const imageFiles = {
  cxBond: 'media_1788275864807.jpg',        // 1. Nature of C-X Bond
  physTrends: 'media_1788275865013.jpg',    // 2. Physical Properties Trend
  rsConfig: 'media_1788275865228.jpg',      // 3. R-S Configurations
  sn1sn2: 'media_1788275865425.jpg',        // 4. SN1 vs SN2 Mechanism
  indEffect: 'media_1788275865476.jpg',     // 5. Halogen Inductive Effect
  haloarenes: 'media_1788276042892.jpg',    // 6. Important Haloarenes
  haloareneRxns: 'media_1788276043084.jpg', // 7. Substitution Reactions of Haloarenes
  ddtStructure: 'media_1788276043319.jpg',  // 8. Example Use of DDT
  envEffects: 'media_1788276043384.jpg'     // 9. Uses & Environmental Effects
};

const b64Map = {};
for (const [key, file] of Object.entries(imageFiles)) {
  const filePath = path.join(userUploadedDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`File missing: ${filePath}`);
    process.exit(1);
  }
  const data = fs.readFileSync(filePath);
  b64Map[key] = `data:image/jpeg;base64,${data.toString('base64')}`;
  console.log(`Loaded ${key} (${file}), size: ${data.length} bytes`);
}

function makeCard(b64, caption, alt) {
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(41, 121, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const cards = {
  // Card 1: Nature of C-X Bond
  cxBond: makeCard(
    b64Map.cxBond,
    "<b>Nature of Carbon–Halogen Bond (C–X):</b> The greater electronegativity of halogens polarizes the &sigma;-bond into C<sup>&delta;+</sup>–X<sup>&delta;-</sup>. As atomic size increases down the halogen group (F &rarr; Cl &rarr; Br &rarr; I), orbital overlap decreases, resulting in declining bond enthalpy and bond strength: <b>C–F &gt; C–Cl &gt; C–Br &gt; C–I</b>.",
    "Nature of Carbon Halogen Bond"
  ),

  // Card 2: Physical Properties Trend
  physTrends: makeCard(
    b64Map.physTrends,
    "<b>Physical Properties Trends of Alkyl Halides:</b> Increasing molecular mass and halogen polarizability from CH<sub>3</sub>F to CH<sub>3</sub>I strengthens intermolecular London dispersion forces, steadily elevating boiling points (-78 &deg;C to +42 &deg;C) and liquid densities (0.92 to 1.78 g mL<sup>-1</sup>).",
    "Physical Properties Trend Alkyl Halides"
  ),

  // Card 3: R-S Configuration
  rsConfig: makeCard(
    b64Map.rsConfig,
    "<b>Cahn-Ingold-Prelog (CIP) R/S Stereochemical Priority:</b> Substituents at a chiral asymmetric carbon are ranked by atomic number (Priority 1 &gt; 2 &gt; 3 &gt; 4). With the lowest priority group (#4, -H) directed away, tracing 1 &rarr; 2 &rarr; 3 clockwise assigns <b>(R)-configuration</b>, while counter-clockwise assigns <b>(S)-configuration</b>.",
    "RS Stereochemical Configuration CIP Rules"
  ),

  // Card 4: SN1 vs SN2 Mechanism
  sn1sn2: makeCard(
    b64Map.sn1sn2,
    "<b>Mechanisms of Nucleophilic Substitution (S<sub>N</sub>1 vs S<sub>N</sub>2):</b> S<sub>N</sub>1 is a two-step process via a planar carbocation intermediate yielding <b>Racemisation</b> (order: 3&deg; &gt; 2&deg; &gt; 1&deg;). S<sub>N</sub>2 is a single-step concerted backside attack via a pentacoordinate transition state with 100% <b>Walden Inversion</b> (order: CH<sub>3</sub>X &gt; 1&deg; &gt; 2&deg; &gt;&gt; 3&deg;).",
    "SN1 vs SN2 Nucleophilic Substitution Mechanism"
  ),

  // Card 5: Halogen Inductive Effect
  indEffect: makeCard(
    b64Map.indEffect,
    "<b>Inductive Electron Withdrawal (-I Effect) of Halogens:</b> The strongly electronegative halogen atom pulls &sigma;-electron density toward itself, stabilizing adjacent negative charge and driving carbanion stability in the order: <b>1&deg; &gt; 2&deg; &gt; 3&deg;</b>.",
    "Halogen Inductive Withdrawal and Carbanion Stability"
  ),

  // Card 6: Important Haloarenes
  haloarenes: makeCard(
    b64Map.haloarenes,
    "<b>Structures of Monohaloarenes:</b> Fluorobenzene, Chlorobenzene, Bromobenzene, and Iodobenzene. The halogen atom is directly bonded to an sp<sup>2</sup>-hybridised aromatic ring carbon, exerting a net deactivating yet ortho/para-directing effect in electrophilic aromatic substitutions.",
    "Structures of Important Monohaloarenes"
  ),

  // Card 7: Substitution Reactions of Haloarenes
  haloareneRxns: makeCard(
    b64Map.haloareneRxns,
    "<b>Key Substitution Reactions of Chlorobenzene:</b> Drastic conditions are required for nucleophilic substitution due to partial double bond resonance character (Dow process: aq. NaOH at 623 K, 300 atm &rarr; Phenol; Chichibabin amination &rarr; Aniline). Electrophilic nitration gives ortho- and para-nitrochlorobenzene (para major).",
    "Substitution Reactions of Haloarenes"
  ),

  // Card 8: Example Use of DDT
  ddtStructure: makeCard(
    b64Map.ddtStructure,
    "<b>3D Molecular Architecture &amp; Environmental Impact of DDT:</b> <i>p,p'</i>-Dichlorodiphenyltrichloroethane (1,1,1-trichloro-2,2-bis(4-chlorophenyl)ethane) features a central CCl<sub>3</sub> group and two chlorophenyl rings. Its extreme chemical persistence and lipophilicity cause dangerous <b>Biomagnification</b> across food pyramids.",
    "Structure and Environmental Impact of DDT"
  ),

  // Card 9: Uses & Environmental Effects
  envEffects: makeCard(
    b64Map.envEffects,
    "<b>Industrial Applications &amp; Environmental Impact of Polyhalogen Compounds:</b> Chlorofluorocarbons (CFCs / Freons) release catalytic Cl&bull; radicals photolytically in the stratosphere, depleting the Earth's protective ozone shield. Dichloromethane (CH<sub>2</sub>Cl<sub>2</sub>) and chloroform (CHCl<sub>3</sub>) serve as heavy solvents, while PVC forms durable industrial polymers.",
    "Uses and Environmental Effects of Polyhalogen Compounds"
  )
};

console.log("All 9 cards prepared successfully.");
