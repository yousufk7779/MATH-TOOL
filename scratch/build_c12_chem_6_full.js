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
  const data = fs.readFileSync(filePath);
  b64Map[key] = `data:image/jpeg;base64,${data.toString('base64')}`;
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

const card1 = makeCard(
  b64Map.cxBond,
  "<b>Nature of Carbon–Halogen Bond (C–X):</b> Greater electronegativity of halogen polarizes the &sigma;-bond into C<sup>&delta;+</sup>–X<sup>&delta;-</sup>. As halogen atomic radius increases down the group from F to I, bond length increases and orbital overlap weakens, causing bond dissociation enthalpy and bond strength to decrease: <b>C–F &gt; C–Cl &gt; C–Br &gt; C–I</b>.",
  "Nature of Carbon Halogen Bond"
);

const card2 = makeCard(
  b64Map.physTrends,
  "<b>Physical Properties Trends of Alkyl Halides:</b> Increasing molecular mass and halogen polarizability from CH<sub>3</sub>F to CH<sub>3</sub>I strengthens intermolecular London dispersion forces, steadily elevating boiling points (-78 &deg;C to +42 &deg;C) and liquid densities (0.92 to 1.78 g mL<sup>-1</sup>).",
  "Physical Properties Trend of Alkyl Halides"
);

const card3 = makeCard(
  b64Map.rsConfig,
  "<b>Cahn-Ingold-Prelog (CIP) R/S Stereochemical Priority:</b> Substituents at a chiral center are ranked by atomic number (Priority 1 &gt; 2 &gt; 3 &gt; 4). With the lowest priority group (#4, -H) pointing away from the viewer, tracing the priority path 1 &rarr; 2 &rarr; 3 clockwise gives <b>(R)-configuration</b>, while anticlockwise gives <b>(S)-configuration</b>.",
  "RS Stereochemical Configuration CIP Rules"
);

const card4 = makeCard(
  b64Map.sn1sn2,
  "<b>Mechanisms of Nucleophilic Substitution (S<sub>N</sub>1 vs S<sub>N</sub>2):</b> S<sub>N</sub>1 is a two-step process proceeding via a planar carbocation intermediate yielding <b>Racemisation</b> (reactivity: 3&deg; &gt; 2&deg; &gt; 1&deg;). S<sub>N</sub>2 is a single-step concerted backside attack passing through a pentacoordinate transition state [Nu&middot;&middot;&middot;C&middot;&middot;&middot;X]<sup>&Dagger;</sup> with 100% <b>Walden Inversion</b> (reactivity: CH<sub>3</sub>X &gt; 1&deg; &gt; 2&deg; &gt;&gt; 3&deg;).",
  "SN1 vs SN2 Nucleophilic Substitution Mechanism"
);

const card5 = makeCard(
  b64Map.indEffect,
  "<b>Inductive Electron Withdrawal (-I Effect) of Halogens:</b> The strongly electronegative halogen atom withdraws &sigma;-electron density from adjacent carbon atoms, stabilizing conjugate negative charge and driving carbanion stability in the order: <b>1&deg; &gt; 2&deg; &gt; 3&deg;</b>.",
  "Halogen Inductive Withdrawal and Carbanion Stability"
);

const card6 = makeCard(
  b64Map.haloarenes,
  "<b>Structures of Monohaloarenes:</b> Fluorobenzene, Chlorobenzene, Bromobenzene, and Iodobenzene. The halogen atom is bonded directly to an sp<sup>2</sup>-hybridised aromatic ring carbon, rendering the ring deactivated towards electrophilic attack yet strongly directing incoming electrophiles to ortho and para positions.",
  "Structures of Important Monohaloarenes"
);

const card7 = makeCard(
  b64Map.haloareneRxns,
  "<b>Key Substitution Reactions of Chlorobenzene:</b> Drastic conditions are required for nucleophilic substitution due to partial double bond resonance character (Dow Process: aq. NaOH at 623 K, 300 atm &rarr; Phenol; Chichibabin amination &rarr; Aniline). Electrophilic nitration produces ortho- and para-nitrochlorobenzene (para-isomer major).",
  "Substitution Reactions of Haloarenes"
);

const card8 = makeCard(
  b64Map.ddtStructure,
  "<b>3D Molecular Architecture &amp; Environmental Impact of DDT:</b> <i>p,p'</i>-DDT (1,1,1-trichloro-2,2-bis(4-chlorophenyl)ethane) contains a central CCl<sub>3</sub> group and two chlorophenyl rings. Its extreme chemical persistence and lipophilicity cause dangerous <b>Biomagnification</b> across ecological food pyramids.",
  "Structure and Environmental Impact of DDT"
);

const card9 = makeCard(
  b64Map.envEffects,
  "<b>Industrial Applications &amp; Environmental Impact of Polyhalogen Compounds:</b> Chlorofluorocarbons (CFCs / Freons) photolytically release catalytic Cl&bull; free radicals in the stratosphere, destroying the ozone layer. Dichloromethane (CH<sub>2</sub>Cl<sub>2</sub>) and chloroform (CHCl<sub>3</sub>) serve as heavy solvents, while PVC produces durable industrial polymers.",
  "Uses and Environmental Effects of Polyhalogen Compounds"
);

const overviewHtml = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY CARD -->
  <div style="background: rgba(41, 121, 255, 0.05); border: 1.5px solid #2979FF; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #2979FF; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #2979FF; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit VI: Haloalkanes and Haloarenes (JKBOSE / CBSE Official Syllabus - 06 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #2979FF; border-radius: 6px;">
        <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">1. Haloalkane (Alkyl Halide) &amp; Haloarene (Aryl Halide):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Halogen derivatives of aliphatic hydrocarbons (R-X) where halogen is bonded to an sp<sup>3</sup> hybridised carbon atom; and halogen derivatives of aromatic hydrocarbons (Ar-X) where halogen is directly attached to an sp<sup>2</sup> hybridised aromatic ring carbon atom.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #2979FF; border-radius: 6px;">
        <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">2. S<sub>N</sub>1 vs S<sub>N</sub>2 Mechanisms:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>S<sub>N</sub>1</b> is a two-step unimolecular substitution proceeding via a planar carbocation intermediate leading to <b>Racemisation</b> (order: 3&deg; &gt; 2&deg; &gt; 1&deg;). <b>S<sub>N</sub>2</b> is a single-step bimolecular concerted substitution proceeding via a 5-coordinate transition state with 100% <b>Walden Inversion</b> (order: Methyl &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #2979FF; border-radius: 6px;">
        <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">3. Saytzeff's (Zaitsev's) Rule:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">In dehydrohalogenation (&beta;-elimination) of haloalkanes by alcoholic KOH, the major alkene product is the one that has the greater number of alkyl groups attached to the doubly bonded carbon atoms (more highly substituted, thermodynamically stable alkene).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #2979FF; border-radius: 6px;">
        <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">4. Chirality &amp; Enantiomers:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A molecule that is non-superimposable on its mirror image is <b>Chiral</b> (possesses an asymmetric carbon with 4 different substituents). Non-superimposable mirror-image stereoisomers that rotate plane-polarized light in equal and opposite directions are called <b>Enantiomers</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #2979FF; border-radius: 6px;">
        <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">5. Low Reactivity of Haloarenes:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Aryl halides are exceptionally unreactive towards nucleophilic substitution due to: (1) resonance stabilization giving partial double bond character to the C-X bond, (2) sp<sup>2</sup> hybridised carbon having higher electronegativity and shorter bond length, (3) instability of phenyl cation, and (4) repulsion from aromatic &pi;-electron cloud.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 30px;">1. Nomenclature &amp; Classification of Haloalkanes and Haloarenes</h2>

  <p>Haloalkanes (alkyl halides) and haloarenes (aryl halides) represent organic compounds in which one or more hydrogen atoms of aliphatic or aromatic hydrocarbons have been replaced by halogen atoms (-F, -Cl, -Br, -I). They serve as foundational synthetic intermediates in industrial organic synthesis, pharmaceuticals, agrochemicals, and polymers.</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Structural Classification based on Hybridisation</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #2979FF;">• Alkyl Halides (sp<sup>3</sup> C-X):</b> Halogen attached to saturated carbon chain (Primary 1&deg;: R-CH<sub>2</sub>X; Secondary 2&deg;: R<sub>2</sub>CHX; Tertiary 3&deg;: R<sub>3</sub>CX).<br>
        <b style="color: #2979FF;">• Allylic Halides (sp<sup>3</sup> C-X):</b> Halogen attached to an sp<sup>3</sup> carbon adjacent to a C=C double bond (e.g. CH<sub>2</sub>=CH-CH<sub>2</sub>Cl, 3-chloroprop-1-ene).<br>
        <b style="color: #2979FF;">• Benzylic Halides (sp<sup>3</sup> C-X):</b> Halogen attached to an sp<sup>3</sup> carbon bonded directly to an aromatic ring (e.g. C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl, benzyl chloride).<br>
        <b style="color: #2979FF;">• Vinylic Halides (sp<sup>2</sup> C-X):</b> Halogen bonded directly to an sp<sup>2</sup> carbon of a C=C double bond (e.g. CH<sub>2</sub>=CH-Cl, chloroethene / vinyl chloride).<br>
        <b style="color: #2979FF;">• Aryl Halides (sp<sup>2</sup> C-X):</b> Halogen bonded directly to an aromatic ring carbon (e.g. C<sub>6</sub>H<sub>5</sub>Cl, chlorobenzene).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Gem-Dihalides vs Vic-Dihalides</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #2979FF;">• Geminal Dihalides (Gem-dihalides / Alkylidene halides):</b> Both halogen atoms are attached to the <b>same carbon atom</b> (e.g. CH<sub>3</sub>CHCl<sub>2</sub>: Ethylidene chloride / 1,1-dichloroethane).<br>
        <b style="color: #2979FF;">• Vicinal Dihalides (Vic-dihalides / Alkylene dihalides):</b> Halogen atoms are attached to <b>adjacent carbon atoms</b> (e.g. ClCH<sub>2</sub>-CH<sub>2</sub>Cl: Ethylene dichloride / 1,2-dichloroethane).
      </div>
    </div>
  </div>

  ${card6}

  <div style="background: rgba(41, 121, 255, 0.08); border-left: 4.5px solid #2979FF; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #2979FF; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 WORKED BOARD MECHANISM &amp; CONVERSION EXAMPLE: Master IUPAC Nomenclature Examples</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65; margin-bottom: 8px;"><b style="color: #2979FF;">Problem:</b> Give systematic IUPAC names for: (i) (CH<sub>3</sub>)<sub>3</sub>C-CH<sub>2</sub>-Br, (ii) CH<sub>3</sub>-CH(Cl)-CH=CH<sub>2</sub>, (iii) p-Cl-C<sub>6</sub>H<sub>4</sub>-CH<sub>2</sub>-CH(CH<sub>3</sub>)<sub>2</sub>, (iv) CHF<sub>2</sub>CBrClF.</div>
    <div style="color: #E3F2FD; font-size: 15px; line-height: 1.65; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;"><b style="color: #2979FF;">Step-by-Step Solution:</b><br><b style="color: #2979FF;">1. (CH<sub>3</sub>)<sub>3</sub>C-CH<sub>2</sub>-Br:</b> 1-Bromo-2,2-dimethylpropane (Neopentyl bromide).<br>
     <b style="color: #2979FF;">2. CH<sub>3</sub>-CH(Cl)-CH=CH<sub>2</sub>:</b> 3-Chlorobut-1-ene (Double bond gets lower locant numbering priority over halogen).<br>
     <b style="color: #2979FF;">3. p-Cl-C<sub>6</sub>H<sub>4</sub>-CH<sub>2</sub>-CH(CH<sub>3</sub>)<sub>2</sub>:</b> 1-Chloro-4-(2-methylpropyl)benzene.<br>
     <b style="color: #2979FF;">4. CHF<sub>2</sub>CBrClF:</b> 2-Bromo-2-chloro-1,1,2-trifluoroethane.</div>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 36px;">2. Nature of C-X Bond &amp; Physical Properties</h2>

  <p>The carbon-halogen bond is formed by the overlap of an sp<sup>3</sup> hybridised orbital of carbon with a half-filled p-orbital of halogen. Because halogen atoms are substantially more electronegative than carbon, the bonding electron pair is pulled strongly toward the halogen atom, rendering the bond polar with a partial negative charge (&delta;-) on halogen and a partial positive charge (&delta;+) on carbon.</p>

  ${card1}

  <div style="background: rgba(41, 121, 255, 0.08); border-left: 4.5px solid #2979FF; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #2979FF; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION &amp; TRENDS: Polarity &amp; Dipole Moment Anomaly of C-X Bond</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">
    Because halogens are significantly more electronegative than carbon, the carbon-halogen bond is polar with a partial positive charge on carbon (&delta;+) and partial negative charge on halogen (&delta;-): <b>—C<sup>&delta;+</sup> &mdash; X<sup>&delta;-</sup></b>.<br><br>
    <b style="color: #2979FF;">• Dipole Moment Order Anomaly:</b><br>
    Although Fluorine is more electronegative than Chlorine, the dipole moment (&mu; = q &times; d) of <b>CH<sub>3</sub>Cl (1.860 D) &gt; CH<sub>3</sub>F (1.847 D) &gt; CH<sub>3</sub>Br (1.830 D) &gt; CH<sub>3</sub>I (1.636 D)</b>. This is because the exceptionally short C-F bond distance in CH<sub>3</sub>F outweighs the higher ionic charge on Fluorine.<br><br>
    <b style="color: #2979FF;">• Boiling Points:</b> RI &gt; RBr &gt; RCl &gt; RF (due to increasing molecular mass and stronger London dispersion forces). For isomeric haloalkanes, branching decreases surface area &rArr; <b>Primary (1&deg;) &gt; Secondary (2&deg;) &gt; Tertiary (3&deg;)</b>.<br><br>
    <b style="color: #2979FF;">• Melting Point of Para-isomers:</b> <i>p</i>-Dichlorobenzene has a much higher melting point (325 K) than <i>o</i>- (256 K) and <i>m</i>- (249 K) isomers due to its <b>high symmetry</b>, which fits closely into the crystal lattice.
  </div>
  </div>

  ${card2}

  <!-- SECTION 3 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 36px;">3. Methods of Preparation of Haloalkanes &amp; Haloarenes</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Preparation from Alcohols (Best Method: Darzen's Process)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-OH + SOCl<sub>2</sub> (Thionyl chloride) &rarr; R-Cl + SO<sub>2</sub>&uarr; + HCl&uarr;</div>
        <b style="color: #2979FF;">• Why Thionyl Chloride is the Best Reagent:</b> Both by-products (SO<sub>2</sub> and HCl) are escapable gases, leaving pure alkyl chloride in almost 100% yield without tedious purification.<br>
        <b style="color: #2979FF;">• Lucas Reagent (conc. HCl + anhyd. ZnCl<sub>2</sub>):</b> 3&deg; alcohols react immediately (instant turbidity), 2&deg; alcohols react in 5 minutes, 1&deg; alcohols do not react at room temperature (requires heating).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Halogen Exchange Named Reactions</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #2979FF;">• Finkelstein Reaction (Preparation of Alkyl Iodides):</b><br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-Cl / R-Br + NaI &rarr; R-I + NaCl&darr; / NaBr&darr;</div>
        <i>NaCl and NaBr are insoluble in dry acetone and precipitate out, shifting the equilibrium forward according to Le Chatelier's principle.</i><br><br>
        <b style="color: #2979FF;">• Swarts Reaction (Preparation of Alkyl Fluorides):</b><br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-Br / R-Cl + AgF (or Hg<sub>2</sub>F<sub>2</sub>, CoF<sub>3</sub>, SbF<sub>3</sub>) &rarr; R-F + AgBr&darr;</div>
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">3. Preparation of Haloarenes (Sandmeyer &amp; Gattermann Reactions)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #2979FF;">• Diazotisation &amp; Sandmeyer Reaction:</b><br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> (Aniline) &rarr; C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>-</sup> &rarr; C<sub>6</sub>H<sub>5</sub>Cl + N<sub>2</sub>&uarr;</div>
        <b style="color: #2979FF;">• For Iodoarene:</b> Simply warm with aqueous KI: C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + KI &rarr; C<sub>6</sub>H<sub>5</sub>I + KCl + N<sub>2</sub>&uarr;.<br>
        <b style="color: #2979FF;">• Balz-Schiemann Reaction (Fluoroarene):</b> C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + HBF<sub>4</sub> &rarr; C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>-</sup> &rarr; C<sub>6</sub>H<sub>5</sub>F + BF<sub>3</sub> + N<sub>2</sub>&uarr;.
      </div>
    </div>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 36px;">4. Mechanisms of Nucleophilic Substitution: S<sub>N</sub>1 vs S<sub>N</sub>2 &amp; Carbocation Stability</h2>

  <p>Nucleophilic substitution reactions constitute the hallmark transformation of haloalkanes, where an electron-rich nucleophile (:Nu<sup>-</sup>) displaces the halogen leaving group (:X<sup>-</sup>). The reaction pathway bifurcates into two distinct kinetic and stereochemical regimes: S<sub>N</sub>1 (unimolecular, stepwise) and S<sub>N</sub>2 (bimolecular, concerted).</p>

  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(41, 121, 255, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: #2979FF; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(41,121,255,0.3); padding-bottom: 6px;">
      📐 REACTION MECHANISM &amp; STEREOCHEMISTRY: Complete Kinetic, Mechanistic & Stereochemical Comparison of S<sub>N</sub>1 and S<sub>N</sub>2
    </div>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.75;">
      
    <b style="color: #2979FF;">1. S<sub>N</sub>2 Mechanism (Substitution Nucleophilic Bimolecular):</b><br>
    <b style="color: #2979FF;">• Step &amp; Kinetics:</b> Single-step concerted mechanism. Rate depends on both substrate and nucleophile:
    <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">Rate = k [R-X] [Nu<sup>-</sup>] &nbsp;&nbsp; (Order = 2)</div>
    <b style="color: #2979FF;">• Transition State:</b> Nucleophile attacks from the backside (180&deg; opposite the leaving group), passing through an unstable pentacoordinate transition state [Nu&middot;&middot;&middot;C&middot;&middot;&middot;X]<sup>&Dagger;</sup> with partial C-Nu and C-X bonds.<br>
    <b style="color: #2979FF;">• Stereochemistry:</b> Results in complete 100% <b>Walden Inversion of configuration</b> (like an umbrella turned inside out in high wind).<br>
    <b style="color: #2979FF;">• Reactivity Order:</b> <b>CH<sub>3</sub>X &gt; 1&deg; &gt; 2&deg; &gt;&gt; 3&deg;</b> (governed strictly by steric hindrance; bulky alkyl groups block backside attack).<br><br>

    <b style="color: #2979FF;">2. S<sub>N</sub>1 Mechanism (Substitution Nucleophilic Unimolecular):</b><br>
    <b style="color: #2979FF;">• Step 1 (Slow, Rate-Determining Step):</b> Heterolytic cleavage of C-X bond forming a planar sp<sup>2</sup> hybridised carbocation:
    <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-X (slow, r.d.s) &rarr; R<sup>+</sup> (planar carbocation) + X<sup>-</sup></div>
    <b style="color: #2979FF;">• Step 2 (Fast Step):</b> Nucleophile attacks the flat carbocation from front or back face with equal probability:
    <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R<sup>+</sup> + :Nu<sup>-</sup> (fast) &rarr; R-Nu</div>
    <b style="color: #2979FF;">• Kinetics:</b> <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">Rate = k [R-X] &nbsp;&nbsp; (Order = 1)</div>
    <b style="color: #2979FF;">• Stereochemistry:</b> In optically active substrates, nucleophilic attack from both faces results in <b>Racemisation</b> (formation of 50% d and 50% l enantiomers, net optical rotation = 0).<br>
    <b style="color: #2979FF;">• Reactivity Order:</b> <b>3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub>X</b> (governed strictly by carbocation stability).<br><br>

    <b style="color: #2979FF;">3. Stability of Carbocations (Order: 3&deg; &gt; 2&deg; &gt; 1&deg; &gt; Methyl):</b><br>
    &bull; <b style="color: #2979FF;">Inductive Effect (+I):</b> Three electron-releasing alkyl groups in 3&deg; carbocation (R<sub>3</sub>C<sup>+</sup>) disperse positive charge maximally.<br>
    &bull; <b style="color: #2979FF;">Hyperconjugation (&sigma;-p overlap):</b> (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> has 9 &alpha;-hydrogens (9 hyperconjugative canonical structures), stabilizing it far more than 2&deg; (6 &alpha;-H) and 1&deg; (3 &alpha;-H).<br>
    &bull; <b style="color: #2979FF;">Allylic and Benzylic Halides:</b> Exhibit extraordinarily high S<sub>N</sub>1 reactivity due to <b>resonance stabilization</b> of their carbocations:
    <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">CH<sub>2</sub>=CH-CH<sub>2</sub><sup>+</sup> &harr; <sup>+</sup>CH<sub>2</sub>-CH=CH<sub>2</sub></div>
  
    </div>
  </div>

  ${card4}

  ${card5}

  <!-- SECTION 5 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 36px;">5. Stereochemical Principles: Optical Activity, R-S and D-L Configurations</h2>

  <p>Stereochemistry examines the spatial arrangement of atoms in three dimensions. The interaction of chiral haloalkanes with nucleophiles reveals fundamental insights into substitution mechanisms through optical rotation, configuration retention, inversion, and racemisation.</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Optical Activity, Chirality &amp; Racemic Mixtures</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #2979FF;">• Optical Activity:</b> The ability of certain chiral organic compounds to rotate the plane of plane-polarized light (clockwise = <b>dextrorotatory, d or (+)</b>; counter-clockwise = <b>laevorotatory, l or (-)</b>).<br>
        <b style="color: #2979FF;">• Asymmetric / Chiral Carbon:</b> A carbon atom bonded to four entirely different atoms or groups.<br>
        <b style="color: #2979FF;">• Enantiomers:</b> Stereoisomers that are non-superimposable mirror images of each other, having identical physical properties (MP, BP, density) except the sign of optical rotation.<br>
        <b style="color: #2979FF;">• Racemic Mixture (&plusmn; or dl):</b> An equimolar (50:50) mixture of two enantiomers. It is <b>optically inactive</b> due to <b>external compensation</b> (rotation caused by one enantiomer is exactly cancelled by the equal and opposite rotation of the other).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Cahn-Ingold-Prelog (CIP) R-S Configuration Rules</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #2979FF;">• Rule 1 (Atomic Number Priority):</b> Assign priorities (1 &gt; 2 &gt; 3 &gt; 4) to the four atoms attached directly to the chiral center based on decreasing atomic number (e.g. -I &gt; -Br &gt; -Cl &gt; -OH &gt; -NH<sub>2</sub> &gt; -CH<sub>2</sub>CH<sub>3</sub> &gt; -CH<sub>3</sub> &gt; -H).<br>
        <b style="color: #2979FF;">• Rule 2 (Tie-Breaker):</b> If direct atoms are identical, compare the atomic numbers of the next atoms along the chain until a point of difference is reached.<br>
        <b style="color: #2979FF;">• Rule 3 (Orientation &amp; Assignment):</b> View the molecule with the lowest priority group (#4, usually -H) pointing away from the observer (on dash / bottom of Fischer). Trace the path from 1 &rarr; 2 &rarr; 3:<br>
        &bull; <b style="color: #2979FF;">Clockwise:</b> <b>R (Rectus / Right)</b>.<br>
        &bull; <b style="color: #2979FF;">Counter-Clockwise:</b> <b>S (Sinister / Left)</b>.
      </div>
    </div>
  </div>

  ${card3}

  <!-- SECTION 6 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 36px;">6. Elimination Reactions (Saytzeff Rule) &amp; Reactions with Metals</h2>

  <p>When a haloalkane having &beta;-hydrogen is treated with a strong base such as alcoholic potassium hydroxide (alc. KOH), it undergoes &beta;-elimination of a hydrogen halide molecule (HX) to yield an alkene. When multiple &beta;-hydrogens are available, the regioselectivity is dictated by Saytzeff's rule.</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Dehydrohalogenation (&beta;-Elimination) &amp; Saytzeff's Rule</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        When a haloalkane with &beta;-hydrogen is heated with <b>alcoholic KOH</b>, elimination of HX occurs yielding an alkene.<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">CH<sub>3</sub>-CH<sub>2</sub>-CH(Br)-CH<sub>3</sub> + alc. KOH &rarr; CH<sub>3</sub>-CH=CH-CH<sub>3</sub> (81%, But-2-ene, Major) + CH<sub>3</sub>-CH<sub>2</sub>-CH=CH<sub>2</sub> (19%, But-1-ene, Minor)</div>
        <b style="color: #2979FF;">• Saytzeff's (Zaitsev's) Rule:</b> In dehydrohalogenation reactions, the preferred product is that alkene which has the greater number of alkyl groups attached to the doubly bonded carbon atoms (the more highly substituted, more stable alkene).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Reactions with Metals (Grignard, Wurtz, Fittig &amp; Wurtz-Fittig)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #2979FF;">• Grignard Reagent:</b> R-X + Mg &rarr; <b>R-Mg-X (Alkylmagnesium halide)</b> in dry ether.<br>
        <i>Must be prepared in strictly anhydrous conditions because Grignard reagents react aggressively with active proton donors: RMgX + H<sub>2</sub>O &rarr; R-H + Mg(OH)X.</i><br><br>
        <b style="color: #2979FF;">• Wurtz Reaction:</b> 2R-X + 2Na &rarr; R-R (Symmetrical alkane) + 2NaX.<br>
        <b style="color: #2979FF;">• Fittig Reaction:</b> 2Ar-X + 2Na &rarr; Ar-Ar (Diphenyl) + 2NaX.<br>
        <b style="color: #2979FF;">• Wurtz-Fittig Reaction:</b> Ar-X + R-X + 2Na &rarr; Ar-R (Alkylbenzene) + 2NaX.
      </div>
    </div>
  </div>

  <!-- SECTION 7 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 36px;">7. Haloarenes: Low Reactivity &amp; Directive Influence of Halogens</h2>

  <p>Haloarenes exhibit extreme inertness toward nucleophilic substitution compared to haloalkanes. Four core factors explain this phenomenon: (1) Resonance stabilization, (2) Difference in hybridisation of the carbon atom in the C-X bond, (3) Instability of phenyl cation, and (4) Electronic repulsion from the aromatic &pi;-cloud.</p>

  <div style="background: rgba(41, 121, 255, 0.08); border-left: 4.5px solid #2979FF; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #2979FF; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: Why Halogens are Deactivating yet Ortho-Para Directing in Electrophilic Substitution</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">
    In haloarenes (e.g. Chlorobenzene), the halogen atom exerts two opposing electronic effects on the benzene ring:<br>
    <b style="color: #2979FF;">1. Inductive Effect (-I):</b> Halogen is strongly electronegative and withdraws &sigma;-electron density from the ring, making the ring <b>overall deactivated</b> compared to benzene (reactions are slower than benzene).<br>
    <b style="color: #2979FF;">2. Resonance Effect (+R / +M):</b> The lone pair on halogen undergoes delocalisation with the aromatic &pi;-system, increasing electron density specifically at the <b>ortho and para positions</b>.<br><br>
    <b style="color: #2979FF;">• Conclusion:</b> The -I effect controls reactivity (deactivating), while the +R effect controls orientation (<b>ortho/para directing</b>). Due to steric hindrance at ortho position, the <b>para-isomer is always the major product</b>.
  </div>
  </div>

  ${card7}

  <!-- SECTION 8 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 36px;">8. Polyhalogen Compounds: Uses &amp; Environmental Impact</h2>

  <p>Polyhalogen compounds are organic molecules containing two or more halogen atoms. While historically pivotal in industrial refrigeration, firefighting, aerosol propellants, and agricultural pest management, their ecological persistence and atmospheric toxicity have sparked worldwide regulation.</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">1. Dichloromethane (Methylene Chloride, CH<sub>2</sub>Cl<sub>2</sub>):</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">Widely used as a solvent in paint strippers and propellant in aerosols. Adverse health effects include central nervous system depression, impaired hearing and vision, dizziness, and skin burns.</span>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">2. Trichloromethane (Chloroform, CHCl<sub>3</sub>) &amp; Phosgene Hazard:</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">Historical surgical general anesthetic; solvent for fats, alkaloids, and iodine. In the presence of light and air, chloroform slowly oxidizes to extremely poisonous <b>Phosgene gas (Carbonyl chloride, COCl<sub>2</sub>)</b>:<br>
      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">2CHCl<sub>3</sub> + O<sub>2</sub> (in presence of light/air) &rarr; 2COCl<sub>2</sub> (Phosgene) + 2HCl</div>
      <i>Storage: Stored in completely filled, dark brown airtight glass bottles containing 1% ethanol (which converts toxic phosgene to harmless diethyl carbonate: COCl<sub>2</sub> + 2C<sub>2</sub>H<sub>5</sub>OH &rarr; (C<sub>2</sub>H<sub>5</sub>O)<sub>2</sub>CO + 2HCl).</i></span>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">3. Tetrachloromethane (Carbon Tetrachloride, CCl<sub>4</sub>):</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">Used as an industrial solvent and fire extinguisher (trade name <b>Pyrene</b>). Major environmental hazard is stratospheric ozone layer depletion leading to increased UV-B radiation exposure, skin cancer, and eye cataracts.</span>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">4. Triiodomethane (Iodoform, CHI<sub>3</sub>):</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">Yellow crystalline solid with an objectionable odor. Used as an antiseptic; its antiseptic action is due to the slow liberation of <b>free elemental iodine</b> on contact with skin tissue.</span>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">5. Freons (Chlorofluorocarbons, e.g. Freon-12, CCl<sub>2</sub>F<sub>2</sub>):</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">Extremely stable, non-toxic, non-corrosive, unreactive gases manufactured from CCl<sub>4</sub> by Swarts reaction. Used in refrigeration and air conditioning. In the stratosphere, UV radiation photolyzes Freons releasing active <b>Chlorine free radicals (Cl&bull;)</b> that catalytically destroy ozone molecules in a continuous radical chain reaction.</span>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(41, 121, 255, 0.35); border-left: 5px solid #2979FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">6. p,p'-Dichlorodiphenyltrichloroethane (DDT):</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">First chlorinated organic insecticide synthesized in 1874 (Paul M&uuml;ller discovered insecticidal action in 1939). Highly persistent, lipid-soluble, and non-biodegradable. It undergoes <b>Biomagnification</b> across ecological food chains, bioaccumulating in fatty tissues of fish and birds, interfering with eggshell calcium deposition (causing premature egg breakage and population collapse), leading to global bans.</span>
    </div>
  </div>

  ${card8}

  ${card9}

  <!-- SECTION 9 -->
  <h2 style="color: #2979FF; border-bottom: 2px solid #2979FF; padding-bottom: 6px; margin-top: 36px;">9. Master Revision Formula &amp; Reaction Summary Cheat Sheet</h2>

  <div style="background: rgba(41, 121, 255, 0.05); border: 1.5px solid rgba(41, 121, 255, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      
      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">1. Key Preparation Reactions:</b>
      <b style="color: #2979FF;">• Darzen's:</b> R-OH + SOCl<sub>2</sub> &rarr; R-Cl + SO<sub>2</sub>&uarr; + HCl&uarr;.<br>
      <b style="color: #2979FF;">• Finkelstein:</b> R-X + NaI &rarr; R-I + NaX&darr; (in dry acetone).<br>
      <b style="color: #2979FF;">• Swarts:</b> R-X + AgF &rarr; R-F + AgX&darr; (or Hg<sub>2</sub>F<sub>2</sub>, SbF<sub>3</sub>).<br>
      <b style="color: #2979FF;">• Sandmeyer:</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + Cu<sub>2</sub>Cl<sub>2</sub>/HCl &rarr; ArCl + N<sub>2</sub>&uarr;.<br><br>

      <b style="color: #2979FF; font-size: 16px; display: block; margin-bottom: 4px;">2. Reactivity &amp; Mechanism Orders:</b>
      <b style="color: #2979FF;">• S<sub>N</sub>1:</b> 3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub>X &bull; (Racemisation, Carbocation stability).<br>
      <b style="color: #2979FF;">• S<sub>N</sub>2:</b> CH<sub>3</sub>X &gt; 1&deg; &gt; 2&deg; &gt; 3&deg; &bull; (Walden Inversion, Steric hindrance).<br>
      <b style="color: #2979FF;">• Carbocations:</b> 3&deg; &gt; 2&deg; &gt; 1&deg; &gt; Methyl &bull; (Hyperconjugation &amp; +I effect).<br>
      <b style="color: #2979FF;">• Boiling Points:</b> RI &gt; RBr &gt; RCl &gt; RF &bull; (Branching decreases BP: 1&deg; &gt; 2&deg; &gt; 3&deg;).<br>
      <b style="color: #2979FF;">• Dipole Moments:</b> CH<sub>3</sub>Cl (1.86 D) &gt; CH<sub>3</sub>F (1.85 D) &gt; CH<sub>3</sub>Br (1.83 D) &gt; CH<sub>3</sub>I (1.64 D).<br>
      <b style="color: #2979FF;">• Bond Strength:</b> C-F &gt; C-Cl &gt; C-Br &gt; C-I.
    </div>
  </div>

</div>
`;

// Read existing solutions and mcqs
const existingContent = fs.readFileSync('client/data/content/c12-chem-6.ts', 'utf8');

const solMatch = existingContent.match(/export const c12Chem6HtmlSolutions = ([\s\S]*?);\n\nexport const c12Chem6Mcqs/);
if (!solMatch) {
  console.error("Could not find c12Chem6HtmlSolutions");
  process.exit(1);
}
const solutionsHtmlString = solMatch[1];

const mcqMatch = existingContent.match(/export const c12Chem6Mcqs = (\[[\s\S]*?\]);\n/);
if (!mcqMatch) {
  console.error("Could not find c12Chem6Mcqs");
  process.exit(1);
}
const mcqsString = mcqMatch[1];

const finalFileContent = `// Class 12 Chemistry Unit VI: Haloalkanes and Haloarenes • physical & chemical properties • mechanism of substitution reactions (Official Syllabus - 06 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem6HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c12Chem6HtmlSolutions = ${solutionsHtmlString};

export const c12Chem6Mcqs = ${mcqsString};
`;

fs.writeFileSync('client/data/content/c12-chem-6.ts', finalFileContent, 'utf8');
console.log('Successfully updated client/data/content/c12-chem-6.ts with all 9 diagrams!');
