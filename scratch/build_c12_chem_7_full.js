const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\944a3b30-06dc-4c2c-9bec-91424ca2bb43\\.user_uploaded';

const imageFiles = {
  alcoholClass: 'media_1788276317282.jpg',   // 1. Classification of Alcohols
  alcoholPrep: 'media_1788276317451.jpg',    // 2. Preparation of Alcohols
  alcoholPhys: 'media_1788276317665.jpg',    // 3. Physical Properties of Alcohols
  phenolAcid: 'media_1788276317727.jpg',     // 4. Acidic Nature of Phenol
  phenolElec: 'media_1788276318111.jpg',     // 5. Electrophilic Substitution in Phenol
  alcoholHxMech: 'media_1788276440556.jpg',  // 6. Mechanism with HX
  etherNom: 'media_1788276440780.jpg',       // 7. Nomenclature of Ethers
  etherPrep: 'media_1788276441014.jpg',      // 8. Preparation of Ethers
  etherPhys: 'media_1788276441128.jpg'       // 9. Physical Properties of Ethers
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
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const card1 = makeCard(
  b64Map.alcoholClass,
  "<b>Classification of Alcohols based on Carbon Degree:</b> Primary (1&deg;, R-CH<sub>2</sub>OH; e.g. Ethanol), Secondary (2&deg;, R<sub>2</sub>CH-OH; e.g. Isopropanol / Propan-2-ol), and Tertiary (3&deg;, R<sub>3</sub>C-OH; e.g. tert-Butanol / 2-Methylpropan-2-ol) with 3D spatial conformations.",
  "Classification of Primary Secondary Tertiary Alcohols"
);

const card2 = makeCard(
  b64Map.alcoholPrep,
  "<b>Standard Synthetic Pathways to Alcohols:</b> (1) Acid-catalysed hydration of alkenes (CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub>O/H<sup>+</sup> &rarr; CH<sub>3</sub>CH<sub>2</sub>OH), (2) Nucleophilic alkaline hydrolysis of haloalkanes with aqueous KOH, and (3) Hydride reduction of carbonyls using NaBH<sub>4</sub> or LiAlH<sub>4</sub>.",
  "Preparation Methods of Alcohols"
);

const card3 = makeCard(
  b64Map.alcoholPhys,
  "<b>Physical Properties &amp; Intermolecular Hydrogen Bonding of Alcohols:</b> Extensive H-bonding between -OH groups and water creates high boiling points, complete lower-member aqueous solubility, elevated viscosity, and distinct characteristic aromas compared to isomeric hydrocarbons and ethers.",
  "Physical Properties and Hydrogen Bonding of Alcohols"
);

const card4 = makeCard(
  b64Map.phenolAcid,
  "<b>Acidic Behavior of Phenols:</b> Phenol reacts readily with strong bases like aqueous NaOH to form water-soluble <b>Sodium phenoxide (C<sub>6</sub>H<sub>5</sub>O<sup>-</sup>Na<sup>+</sup>)</b> and H<sub>2</sub>O, driven by the exceptional resonance stabilization of the conjugate phenoxide anion.",
  "Acidic Reaction of Phenol with NaOH"
);

const card5 = makeCard(
  b64Map.phenolElec,
  "<b>Electrophilic Aromatic Substitution in Phenol:</b> Due to powerful +R activation by the -OH group, reaction with bromine water (Br<sub>2</sub>/H<sub>2</sub>O) causes instantaneous polysubstitution at both ortho and para positions, precipitating white <b>2,4,6-Tribromophenol</b>.",
  "Electrophilic Bromination of Phenol"
);

const card6 = makeCard(
  b64Map.alcoholHxMech,
  "<b>Nucleophilic Substitution Mechanism of Alcohols with Hydrogen Halides (HX):</b> Step 1: Rapid protonation to ethyl oxonium ion (ROH<sub>2</sub><sup>+</sup>); Step 2 (Rate-Determining Step): Heterolytic departure of water forming carbocation intermediate; Step 3: Fast halide attack yielding alkyl halide (R-X).",
  "Mechanism of Reaction of Alcohols with Hydrogen Halides"
);

const card7 = makeCard(
  b64Map.etherNom,
  "<b>Nomenclature and Structure of Ethers:</b> Symmetrical and unsymmetrical ethers (Alkoxyalkanes). For CH<sub>3</sub>-O-CH<sub>2</sub>CH<sub>3</sub>: Common name is <b>Methyl ethyl ether</b> and systematic IUPAC name is <b>Methoxyethane</b>, featuring a bent C-O-C skeleton.",
  "Nomenclature of Ethers Common and IUPAC"
);

const card8 = makeCard(
  b64Map.etherPrep,
  "<b>Synthetic Routes to Ethers:</b> (1) Intermolecular catalytic dehydration of ethanol with conc. H<sub>2</sub>SO<sub>4</sub> at <b>413 K</b> (yielding diethyl ether), and (2) <b>Williamson Ether Synthesis</b> via S<sub>N</sub>2 displacement on primary alkyl halides by sodium alkoxides (CH<sub>3</sub>ONa + CH<sub>3</sub>CH<sub>2</sub>Br &rarr; CH<sub>3</sub>OCH<sub>2</sub>CH<sub>3</sub> + NaBr).",
  "Preparation of Ethers Dehydration and Williamson Synthesis"
);

const card9 = makeCard(
  b64Map.etherPhys,
  "<b>Physical Properties of Ethers:</b> Absence of intermolecular O-H&middot;&middot;&middot;O hydrogen bonds results in much lower boiling points than isomeric alcohols, high volatility, flammability, and slight water solubility due to weak H-bond acceptor ability.",
  "Physical Properties of Ethers"
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
  <div style="background: rgba(255, 0, 127, 0.05); border: 1.5px solid #FF007F; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF007F; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #FF007F; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit VII: Alcohols, Phenols and Ethers (Official Syllabus - 06 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">1. Alcohols, Phenols &amp; Ethers:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Alcohols (R-OH)</b> are hydroxy derivatives of aliphatic hydrocarbons where -OH is bonded to an sp<sup>3</sup> hybridised carbon. <b>Phenols (Ar-OH)</b> are hydroxy derivatives of aromatic hydrocarbons where -OH is bonded directly to an sp<sup>2</sup> hybridised carbon of an aromatic benzene ring. <b>Ethers (R-O-R&apos; / Ar-O-R)</b> are dialkyl/diaryl derivatives of water or monoalkyl derivatives of alcohols/phenols.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">2. Lucas Reagent &amp; Lucas Test:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">An equimolar mixture of concentrated HCl and anhydrous ZnCl<sub>2</sub>. Used to distinguish 1&deg;, 2&deg;, and 3&deg; alcohols based on the rate of formation of insoluble alkyl chloride turbidity (3&deg;: immediate turbidity; 2&deg;: turbidity in 5 minutes; 1&deg;: no turbidity at room temperature, appears only upon heating).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">3. Acidic Nature of Phenol &amp; Phenoxide Resonance:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Phenol is significantly more acidic (pK<sub>a</sub> &approx; 10) than aliphatic alcohols (pK<sub>a</sub> &approx; 16-18) because the conjugate base, <b>phenoxide ion (C<sub>6</sub>H<sub>5</sub>O<sup>-</sup>)</b>, is resonance-stabilized with delocalization of negative charge over ortho and para positions of the benzene ring without charge separation.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">4. Kolbe&apos;s Reaction:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Treatment of sodium phenoxide with carbon dioxide (CO<sub>2</sub>) at 400 K and 4-7 atm pressure followed by acidification yields <b>Salicylic acid (2-hydroxybenzoic acid)</b> as the major product.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">5. Reimer-Tiemann Reaction:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Reaction of phenol with chloroform (CHCl<sub>3</sub>) in the presence of aqueous NaOH at 340 K introduces an aldehyde group (-CHO) at the ortho position, forming <b>Salicylaldehyde (2-hydroxybenzaldehyde)</b> via the electrophilic intermediate <b>dichlorocarbene (:CCl<sub>2</sub>)</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">6. Williamson Ether Synthesis:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">An S<sub>N</sub>2 reaction between an alkyl halide (R-X) and sodium alkoxide (R&apos;-O<sup>-</sup>Na<sup>+</sup>) to produce symmetrical or asymmetrical ethers. Best yields are obtained when the alkyl halide is primary (1&deg;); tertiary (3&deg;) alkyl halides yield alkenes exclusively via E2 elimination.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">7. Denatured Alcohol (Methylated Spirit):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Commercial ethyl alcohol made unfit for drinking by the addition of poisonous methanol (about 5-10%), pyridine (for foul smell), and copper sulphate (for blue colour).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">1. Nomenclature &amp; Classification of Alcohols, Phenols and Ethers</h2>

  <p>Alcohols, phenols, and ethers constitute fundamental oxygen-containing organic families. In alcohols and phenols, a hydroxyl group (-OH) is attached to aliphatic carbon and aromatic ring carbon respectively, while in ethers, an oxygen atom connects two alkyl or aryl radicals.</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Classification of Alcohols &amp; Phenols based on Number of -OH Groups</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; Monohydric Alcohols:</b> Contain 1 -OH group (e.g. CH<sub>3</sub>CH<sub>2</sub>OH, Ethanol).<br>
        <b style="color: #FF007F;">&bull; Dihydric Alcohols (Glycols):</b> Contain 2 -OH groups (e.g. HO-CH<sub>2</sub>-CH<sub>2</sub>-OH, Ethane-1,2-diol / Ethylene glycol).<br>
        <b style="color: #FF007F;">&bull; Trihydric Alcohols:</b> Contain 3 -OH groups (e.g. CH<sub>2</sub>OH-CHOH-CH<sub>2</sub>OH, Propane-1,2,3-triol / Glycerol).<br>
        <b style="color: #FF007F;">&bull; Monohydric Phenols:</b> e.g. C<sub>6</sub>H<sub>5</sub>OH (Phenol / Carbolic acid), o-Cresol (2-Methylphenol).<br>
        <b style="color: #FF007F;">&bull; Dihydric Phenols:</b> Benzene-1,2-diol (Catechol), Benzene-1,3-diol (Resorcinol), Benzene-1,4-diol (Quinol / Hydroquinone).<br>
        <b style="color: #FF007F;">&bull; Trihydric Phenols:</b> Benzene-1,2,3-triol (Pyrogallol), Benzene-1,3,5-triol (Phloroglucinol).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Classification of Alcohols based on Hybridisation of Carbon Bonded to -OH</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; Primary (1&deg;), Secondary (2&deg;) &amp; Tertiary (3&deg;) Alcohols (sp<sup>3</sup> C-OH):</b> -OH bonded to 1&deg;, 2&deg;, or 3&deg; carbon atom.<br>
        <b style="color: #FF007F;">&bull; Allylic Alcohols (sp<sup>3</sup> C-OH):</b> -OH attached to an sp<sup>3</sup> carbon adjacent to a C=C double bond (e.g. CH<sub>2</sub>=CH-CH<sub>2</sub>OH, Prop-2-en-1-ol / Allyl alcohol).<br>
        <b style="color: #FF007F;">&bull; Benzylic Alcohols (sp<sup>3</sup> C-OH):</b> -OH attached to an sp<sup>3</sup> carbon adjacent to an aromatic benzene ring (e.g. C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH, Benzyl alcohol / Phenylmethanol).<br>
        <b style="color: #FF007F;">&bull; Vinylic Alcohols (sp<sup>2</sup> C-OH):</b> -OH bonded directly to an sp<sup>2</sup> carbon of a C=C double bond (e.g. CH<sub>2</sub>=CH-OH, Ethenol / Vinyl alcohol &mdash; rapidly tautomerises to acetaldehyde).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">3. Classification of Ethers (Symmetrical vs Asymmetrical)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; Simple / Symmetrical Ethers:</b> Both alkyl or aryl groups attached to the oxygen atom are identical (e.g. C<sub>2</sub>H<sub>5</sub>-O-C<sub>2</sub>H<sub>5</sub>: Diethyl ether / Ethoxyethane; C<sub>6</sub>H<sub>5</sub>-O-C<sub>6</sub>H<sub>5</sub>: Diphenyl ether).<br>
        <b style="color: #FF007F;">&bull; Mixed / Asymmetrical Ethers:</b> Alkyl or aryl groups attached to oxygen are different (e.g. C<sub>2</sub>H<sub>5</sub>-O-CH<sub>3</sub>: Ethyl methyl ether / Methoxyethane; C<sub>6</sub>H<sub>5</sub>-O-CH<sub>3</sub>: Anisole / Methoxybenzene).
      </div>
    </div>
  </div>

  ${card1}

  ${card7}

  <div style="background: rgba(255, 0, 127, 0.08); border-left: 4.5px solid #FF007F; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF007F; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 WORKED IUPAC NOMENCLATURE EXAMPLES</b>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;">
      <b style="color: #FF007F;">1. (CH<sub>3</sub>)<sub>3</sub>C-OH:</b> 2-Methylpropan-2-ol (tert-Butyl alcohol).<br>
      <b style="color: #FF007F;">2. CH<sub>3</sub>-CH(OH)-CH=CH-CH<sub>3</sub>:</b> Pent-3-en-2-ol (-OH gets numbering priority over double bond).<br>
      <b style="color: #FF007F;">3. HO-CH<sub>2</sub>-CH(OH)-CH<sub>2</sub>-OH:</b> Propane-1,2,3-triol (Glycerol).<br>
      <b style="color: #FF007F;">4. o-NO<sub>2</sub>-C<sub>6</sub>H<sub>4</sub>-OH:</b> 2-Nitrophenol.<br>
      <b style="color: #FF007F;">5. CH<sub>3</sub>-O-CH(CH<sub>3</sub>)<sub>2</sub>:</b> 2-Methoxypropane (Isopropyl methyl ether).<br>
      <b style="color: #FF007F;">6. C<sub>6</sub>H<sub>5</sub>-O-CH<sub>2</sub>CH<sub>3</sub>:</b> Ethoxybenzene (Phenetole).
    </div>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">2. Structures of Functional Groups &amp; Bond Angle Anomalies</h2>

  <div style="background: rgba(255, 0, 127, 0.08); border-left: 4.5px solid #FF007F; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF007F; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 COMPARISON: Bond Angles and C-O Bond Lengths</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Bond Angle Variations:</b><br>
      &bull; <b style="color: #FF007F;">In Methanol (Alcohols):</b> The C-O-H bond angle is <b>108.9&deg;</b>, which is slightly less than the tetrahedral angle (109&deg;28&apos;). This is due to the <b>repulsion between the two unshared lone pairs of electrons</b> on the oxygen atom.<br>
      &bull; <b style="color: #FF007F;">In Phenol:</b> The C-O-H bond angle is <b>109&deg;</b>.<br>
      &bull; <b style="color: #FF007F;">In Dimethyl Ether (Ethers):</b> The C-O-C bond angle is <b>111.7&deg;</b>, which is <b>greater than the tetrahedral angle</b>. This notable enlargement is caused by the <b>strong steric repulsive interaction between the two bulky alkyl groups (-CH<sub>3</sub>)</b> attached to the central oxygen atom.<br><br>

      <b style="color: #FF007F;">2. C-O Bond Length Variations:</b><br>
      &bull; <b style="color: #FF007F;">In Methanol (142 pm):</b> Pure sp<sup>3</sup> C-O single bond.<br>
      &bull; <b style="color: #FF007F;">In Phenol (136 pm):</b> The C-O bond length is significantly shorter (136 pm) due to: (1) <b>Partial double bond character</b> arising from the conjugation of the unshared electron pair of oxygen with the aromatic benzene ring, and (2) The oxygen is attached to an <b>sp<sup>2</sup> hybridised carbon</b> of benzene, which has greater s-character and is more electronegative than sp<sup>3</sup> carbon.
    </div>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">3. Methods of Preparation of Alcohols</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Preparation from Alkenes (Hydration vs Hydroboration-Oxidation)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; (a) Acid-Catalysed Hydration (Markovnikov Addition):</b><br>
        Alkenes react with water in the presence of dilute H<sub>2</sub>SO<sub>4</sub> to form alcohols according to <b>Markovnikov&apos;s Rule</b>:\n        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 0, 127, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">CH<sub>3</sub>-CH=CH<sub>2</sub> + H<sub>2</sub>O &rarr; (H<sup>+</sup>) &rarr; CH<sub>3</sub>-CH(OH)-CH<sub>3</sub> (Propan-2-ol)</div>
        <i>Mechanism proceeds via a planar carbocation intermediate (susceptible to 1,2-hydride or methyl shifts).</i><br><br>
        <b style="color: #FF007F;">&bull; (b) Hydroboration-Oxidation (Anti-Markovnikov Overall Hydration):</b><br>
        Diborane (B<sub>2</sub>H<sub>6</sub>) reacts with alkenes to form trialkylboranes, which on subsequent oxidation with alkaline hydrogen peroxide (H<sub>2</sub>O<sub>2</sub> / OH<sup>-</sup>) yield primary alcohols with <b>overall Anti-Markovnikov regiochemistry and syn-addition</b>:\n        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 0, 127, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">6 CH<sub>3</sub>-CH=CH<sub>2</sub> + B<sub>2</sub>H<sub>6</sub> &rarr; 2 (CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>)<sub>3</sub>B &rarr; (3 H<sub>2</sub>O<sub>2</sub> / OH<sup>-</sup>) &rarr; 6 CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH + 2 H<sub>3</sub>BO<sub>3</sub></div>
        <b style="color: #FF007F;">Key Advantage:</b> Excellent method for preparing 1&deg; alcohols without carbocation rearrangement!
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Preparation from Carbonyl Compounds (Reduction)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; Reduction of Aldehydes &amp; Ketones:</b> Catalytic hydrogenation (H<sub>2</sub>/Ni, Pt, Pd) or hydride transfer agents (<b>NaBH<sub>4</sub></b> in ethanol, or <b>LiAlH<sub>4</sub></b> in dry ether):<br>
        &bull; Aldehyde (R-CHO) &rarr; <b>Primary alcohol (R-CH<sub>2</sub>OH)</b>.<br>
        &bull; Ketone (R-CO-R&apos;) &rarr; <b>Secondary alcohol (R-CH(OH)-R&apos;)</b>.<br><br>
        <b style="color: #FF007F;">&bull; Reduction of Carboxylic Acids and Esters:</b><br>
        R-COOH &rarr; (1. LiAlH<sub>4</sub>, 2. H<sub>2</sub>O) &rarr; R-CH<sub>2</sub>OH.<br>
        <i>Commercially, acids are first esterified with alcohols and then catalytically hydrogenated using H<sub>2</sub>/catalyst.</i>
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">3. Preparation using Grignard Reagent (Nucleophilic Addition)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Grignard reagents (RMgX) undergo nucleophilic addition to carbonyl compounds, followed by acidic hydrolysis:<br>
        <b style="color: #FF007F;">1. Formaldehyde (HCHO) + RMgX &rarr; Primary (1&deg;) Alcohol (R-CH<sub>2</sub>OH)</b>.<br>
        <b style="color: #FF007F;">2. Other Aldehydes (R&apos;CHO) + RMgX &rarr; Secondary (2&deg;) Alcohol (R&apos;-CH(OH)-R)</b>.<br>
        <b style="color: #FF007F;">3. Ketones (R&apos;-CO-R&apos;&apos;) + RMgX &rarr; Tertiary (3&deg;) Alcohol (R&apos;-C(OH)(R)-R&apos;&apos;)</b>.
      </div>
    </div>
  </div>

  ${card2}

  <!-- SECTION 4 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">4. Physical &amp; Chemical Properties of Alcohols (Mechanism of Dehydration)</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Physical Properties (Boiling Point &amp; Solubility)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; High Boiling Points:</b> Alcohols have much higher boiling points than isomeric ethers, haloalkanes, and hydrocarbons of comparable molecular mass due to the presence of <b>intermolecular Hydrogen Bonding</b>.<br>
        <b style="color: #FF007F;">&bull; Branching Effect:</b> Boiling points decrease with branching among isomeric alcohols (1&deg; &gt; 2&deg; &gt; 3&deg;) due to decrease in surface area and London dispersion forces.<br>
        <b style="color: #FF007F;">&bull; Solubility in Water:</b> Lower alcohols are completely miscible in water in all proportions because they form hydrogen bonds with water molecules.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Acidity of Alcohols (Order: 1&deg; &gt; 2&deg; &gt; 3&deg;)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Alcohols react with active metals (Na, K, Al) to liberate hydrogen gas, acting as Bronsted acids:<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 0, 127, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">2 R-OH + 2 Na &rarr; 2 R-O<sup>-</sup>Na<sup>+</sup> + H<sub>2</sub>&uarr;</div>
        <b style="color: #FF007F;">&bull; Relative Acidic Strength:</b> <b>CH<sub>3</sub>OH &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;</b>.<br>
        <i>Reason: Alkyl groups are electron-releasing (+I effect). In 3&deg; alcohols, three alkyl groups pump electron density towards oxygen, destabilizing the alkoxide ion and decreasing the polarity of the O-H bond.</i>
      </div>
    </div>
  </div>

  ${card3}

  ${card6}

  <!-- STEP-BY-STEP DEHYDRATION MECHANISM BOX -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: #FF007F; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(255, 0, 127, 0.3); padding-bottom: 6px;">
      📐 STEP-BY-STEP BOARD MECHANISM: Acid-Catalysed Dehydration of Ethanol to Ethene (at 443 K)
    </div>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.75;">
      When ethanol is heated with concentrated H<sub>2</sub>SO<sub>4</sub> (or H<sub>3</sub>PO<sub>4</sub>) at <b>443 K</b>, it undergoes dehydration to form ethene via a 3-step mechanism:<br><br>

      <b style="color: #FF007F;">Step 1: Protonation of Alcohol (Fast Step)</b><br>
      The unshared electron pair on oxygen attacks the proton released by the acid:<br>
      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 0, 127, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">CH<sub>3</sub>-CH<sub>2</sub>-OH + H<sup>+</sup> &#8652; CH<sub>3</sub>-CH<sub>2</sub>-O<sup>+</sup>H<sub>2</sub> (Protonated alcohol / Ethyl oxonium ion)</div>

      <b style="color: #FF007F;">Step 2: Formation of Carbocation (Slow, Rate-Determining Step - RDS)</b><br>
      The C-O bond breaks with departure of a neutral water molecule, generating an ethyl carbocation:<br>
      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 0, 127, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">CH<sub>3</sub>-CH<sub>2</sub>-O<sup>+</sup>H<sub>2</sub> &rarr; (Slow, RDS) &rarr; CH<sub>3</sub>-C<sup>+</sup>H<sub>2</sub> + H<sub>2</sub>O</div>

      <b style="color: #FF007F;">Step 3: Elimination of Proton to form Ethene (Fast Step)</b><br>
      A base (H<sub>2</sub>O) abstracts a &beta;-proton from the carbocation, creating the C=C &pi;-bond and regenerating H<sub>3</sub>O<sup>+</sup>:<br>
      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 0, 127, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">H-CH<sub>2</sub>-C<sup>+</sup>H<sub>2</sub> + H<sub>2</sub>O &rarr; CH<sub>2</sub>=CH<sub>2</sub> + H<sub>3</sub>O<sup>+</sup></div>

      <b style="color: #FF007F;">&bull; Ease of Dehydration Order:</b> <b>3&deg; &gt; 2&deg; &gt; 1&deg;</b> (governed by the relative stability of intermediate carbocations: 3&deg; &gt; 2&deg; &gt; 1&deg;).
    </div>
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">5. Identification &amp; Distinction of Primary, Secondary &amp; Tertiary Alcohols</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Lucas Test (conc. HCl + anhydrous ZnCl<sub>2</sub>)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        &bull; <b style="color: #FF007F;">Tertiary (3&deg;) Alcohol:</b> Reacts immediately; <b>turbidity appears instantly</b>.<br>
        &bull; <b style="color: #FF007F;">Secondary (2&deg;) Alcohol:</b> Reacts slowly; <b>turbidity appears within 5 minutes</b>.<br>
        &bull; <b style="color: #FF007F;">Primary (1&deg;) Alcohol:</b> Does not react at room temperature; <b>solution remains clear</b> (turbidity appears only upon heating).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Victor Meyer Test (The "Red-Blue-White" Trick)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Sequence: Alcohol &rarr; (P + I<sub>2</sub>) &rarr; Alkyl Iodide &rarr; (AgNO<sub>2</sub>) &rarr; Nitroalkane &rarr; (HNO<sub>2</sub>) &rarr; Product &rarr; (aq. NaOH):<br>
        &bull; <b style="color: #FF007F;">Primary (1&deg;) Alcohol:</b> Forms Nitrolic acid &rarr; gives <b>Blood-Red colouration</b> with NaOH.<br>
        &bull; <b style="color: #FF007F;">Secondary (2&deg;) Alcohol:</b> Forms Pseudonitrol &rarr; gives <b>Deep Blue colouration</b> with NaOH.<br>
        &bull; <b style="color: #FF007F;">Tertiary (3&deg;) Alcohol:</b> Has no &alpha;-hydrogen &rarr; does not react with HNO<sub>2</sub> &rarr; gives <b>Colourless / White solution</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">3. Catalytic Dehydrogenation with Heated Copper at 573 K</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        &bull; <b style="color: #FF007F;">Primary (1&deg;) Alcohol:</b> Undergoes dehydrogenation to form an <b>Aldehyde</b> (CH<sub>3</sub>CH<sub>2</sub>OH &rarr; CH<sub>3</sub>CHO + H<sub>2</sub>&uarr;).<br>
        &bull; <b style="color: #FF007F;">Secondary (2&deg;) Alcohol:</b> Undergoes dehydrogenation to form a <b>Ketone</b> (CH<sub>3</sub>-CH(OH)-CH<sub>3</sub> &rarr; CH<sub>3</sub>COCH<sub>3</sub> + H<sub>2</sub>&uarr;).<br>
        &bull; <b style="color: #FF007F;">Tertiary (3&deg;) Alcohol:</b> Has no &alpha;-hydrogen, so it resists dehydrogenation and undergoes <b>Dehydration to yield an Alkene</b> ((CH<sub>3</sub>)<sub>3</sub>C-OH &rarr; (CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub> + H<sub>2</sub>O).
      </div>
    </div>
  </div>

  <!-- SECTION 6 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">6. Important Commercial Alcohols: Methanol &amp; Ethanol</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Methanol (Wood Spirit, CH<sub>3</sub>OH)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; Industrial Synthesis:</b> CO(g) + 2 H<sub>2</sub>(g) &rarr; (ZnO - Cr<sub>2</sub>O<sub>3</sub> / 573-673 K / 200-300 atm) &rarr; CH<sub>3</sub>OH(l).<br>
        <b style="color: #FF007F;">&bull; Toxicity:</b> Methanol is metabolized by liver alcohol dehydrogenase to formaldehyde and formic acid, causing blindness and death.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Ethanol (Grain Alcohol, C<sub>2</sub>H<sub>5</sub>OH) &amp; Fermentation</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; Fermentation:</b> Sucrose &rarr; (Invertase) &rarr; Glucose + Fructose &rarr; (Zymase) &rarr; 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub>&uarr;.<br>
        <b style="color: #FF007F;">&bull; Rectified Spirit:</b> 95.6% ethanol + 4.4% water.<br>
        <b style="color: #FF007F;">&bull; Absolute Alcohol:</b> 100% pure ethanol.<br>
        <b style="color: #FF007F;">&bull; Denatured Alcohol:</b> Rendered unfit for drinking by adding methanol, pyridine, and copper sulphate.
      </div>
    </div>
  </div>

  <!-- SECTION 7 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">7. Phenols: Preparation &amp; Resonance Origin of Acidic Nature</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Industrial Preparation from Cumene (Cumene Hydroperoxide Method)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Cumene (isopropylbenzene) is oxidized with air to <b>cumene hydroperoxide</b>, which on acidic hydrolysis yields <b>Phenol and Acetone</b> in high yield:<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 0, 127, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">C<sub>6</sub>H<sub>5</sub>-CH(CH<sub>3</sub>)<sub>2</sub> + O<sub>2</sub> &rarr; C<sub>6</sub>H<sub>5</sub>-C(CH<sub>3</sub>)<sub>2</sub>-O-O-H &rarr; (dil. H<sub>2</sub>SO<sub>4</sub>) &rarr; C<sub>6</sub>H<sub>5</sub>OH + CH<sub>3</sub>COCH<sub>3</sub></div>
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Resonance Explanation for Acidity of Phenol</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Phenol is stronger acid than alcohols because the conjugate base, <b>phenoxide ion (C<sub>6</sub>H<sub>5</sub>O<sup>-</sup>)</b>, is resonance-stabilized with negative charge delocalized over the ortho and para positions of the benzene ring. Phenoxide ion has no charge separation, whereas resonance structures of un-ionized phenol possess charge separation (+ on oxygen, - on ring).<br>
        <b style="color: #FF007F;">&bull; Substituent Effects:</b> Electron-withdrawing groups (-NO<sub>2</sub>) at ortho and para positions increase acidity (Picric acid &gt; p-nitrophenol &gt; o-nitrophenol &gt; m-nitrophenol &gt; phenol); Electron-donating groups (-CH<sub>3</sub>) decrease acidity.
      </div>
    </div>
  </div>

  ${card4}

  <!-- SECTION 8 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">8. Chemical Reactions of Phenols: Electrophilic Substitution &amp; Named Reactions</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Electrophilic Substitution (Bromination &amp; Nitration)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; Bromination in CS<sub>2</sub> (273 K):</b> Yields <b>4-Bromophenol (major)</b>.<br>
        <b style="color: #FF007F;">&bull; Bromine Water (Br<sub>2</sub>/H<sub>2</sub>O):</b> Yields a white precipitate of <b>2,4,6-Tribromophenol</b>.<br>
        <b style="color: #FF007F;">&bull; Nitration with dil. HNO<sub>3</sub>:</b> Yields <b>o-Nitrophenol &amp; p-Nitrophenol</b> (separable by steam distillation due to intramolecular vs intermolecular H-bonding).<br>
        <b style="color: #FF007F;">&bull; Nitration with conc. HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub>:</b> Yields <b>2,4,6-Trinitrophenol (Picric acid)</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Named Reactions &amp; Other Key Reactions of Phenol</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">&bull; Kolbe&apos;s Reaction:</b> C<sub>6</sub>H<sub>5</sub>ONa + CO<sub>2</sub> (400 K, 4-7 atm) &rarr; (H<sup>+</sup>) &rarr; <b>Salicylic acid</b> (used to prepare Aspirin).<br>
        <b style="color: #FF007F;">&bull; Reimer-Tiemann Reaction:</b> Phenol + CHCl<sub>3</sub> + NaOH (340 K) &rarr; (H<sup>+</sup>) &rarr; <b>Salicylaldehyde</b> (intermediate: :CCl<sub>2</sub> dichlorocarbene).<br>
        <b style="color: #FF007F;">&bull; Reaction with Zinc Dust:</b> C<sub>6</sub>H<sub>5</sub>OH + Zn &rarr; (Heat) &rarr; <b>Benzene (C<sub>6</sub>H<sub>6</sub>)</b> + ZnO.<br>
        <b style="color: #FF007F;">&bull; Oxidation:</b> Phenol + Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>/H<sub>2</sub>SO<sub>4</sub> &rarr; <b>p-Benzoquinone</b>.<br>
        <b style="color: #FF007F;">&bull; Neutral FeCl<sub>3</sub> Test:</b> Gives a characteristic <b>violet colouration</b>.
      </div>
    </div>
  </div>

  ${card5}

  <!-- SECTION 9 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">9. Ethers: Preparation, Physical Properties &amp; Williamson Synthesis Rules</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Preparation from Alcohols (413 K vs 443 K)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        &bull; At <b>413 K (140 &deg;C)</b> with conc. H<sub>2</sub>SO<sub>4</sub>: 2 C<sub>2</sub>H<sub>5</sub>OH &rarr; <b>C<sub>2</sub>H<sub>5</sub>-O-C<sub>2</sub>H<sub>5</sub> (Diethyl ether)</b> + H<sub>2</sub>O (S<sub>N</sub>2 pathway).<br>
        &bull; At <b>443 K (170 &deg;C)</b> with conc. H<sub>2</sub>SO<sub>4</sub>: C<sub>2</sub>H<sub>5</sub>OH &rarr; <b>CH<sub>2</sub>=CH<sub>2</sub> (Ethene)</b> + H<sub>2</sub>O (E1 elimination).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Williamson Ether Synthesis &amp; Substrate Rules</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF007F;">R-X + R&apos;-ONa &rarr; R-O-R&apos; + NaX</b> (S<sub>N</sub>2 mechanism).<br>
        &bull; <b style="color: #FF007F;">Rule:</b> The alkyl halide (R-X) <b>must be 1&deg;</b>.<br>
        &bull; <b style="color: #FF007F;">Trap with 3&deg; Halide:</b> If a 3&deg; alkyl halide is used (e.g. (CH<sub>3</sub>)<sub>3</sub>C-Br + CH<sub>3</sub>ONa), the strongly basic alkoxide causes <b>E2 elimination yielding an Alkene ((CH<sub>3</sub>)<sub>2</sub>C=CH<sub>2</sub>) exclusively</b>.<br>
        &bull; <b style="color: #FF007F;">To prepare (CH<sub>3</sub>)<sub>3</sub>C-O-CH<sub>3</sub>:</b> Use <b>CH<sub>3</sub>I (1&deg; halide) + (CH<sub>3</sub>)<sub>3</sub>C-O<sup>-</sup>Na<sup>+</sup> (3&deg; alkoxide)</b>.
      </div>
    </div>
  </div>

  ${card8}

  ${card9}

  <!-- SECTION 10 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">10. Chemical Reactions of Ethers: C-O Cleavage by HI &amp; Substitution in Anisole</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">1. Cleavage of C-O Bond by Concentrated HI</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        &bull; <b style="color: #FF007F;">With 1&deg; / 2&deg; Alkyl Groups (S<sub>N</sub>2):</b> Iodide attacks the smaller alkyl group &rarr; CH<sub>3</sub>-O-CH<sub>2</sub>CH<sub>3</sub> + HI &rarr; <b>CH<sub>3</sub>I + CH<sub>3</sub>CH<sub>2</sub>OH</b>.<br>
        &bull; <b style="color: #FF007F;">With a 3&deg; Alkyl Group (S<sub>N</sub>1):</b> Tertiary carbocation forms preferentially &rarr; (CH<sub>3</sub>)<sub>3</sub>C-O-CH<sub>3</sub> + HI &rarr; <b>(CH<sub>3</sub>)<sub>3</sub>C-I + CH<sub>3</sub>OH</b>.<br>
        &bull; <b style="color: #FF007F;">With Anisole (Alkyl Aryl Ether):</b> Ar-O bond has partial double bond character &rarr; C<sub>6</sub>H<sub>5</sub>-O-CH<sub>3</sub> + HI &rarr; <b>C<sub>6</sub>H<sub>5</sub>OH (Phenol) + CH<sub>3</sub>I</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 0, 127, 0.35); border-left: 5px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 6px;">2. Electrophilic Substitution in Anisole</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Methoxy group (-OCH<sub>3</sub>) activates the benzene ring and directs electrophiles to ortho and para positions (para major):<br>
        &bull; <b>Bromination:</b> Anisole + Br<sub>2</sub>/CH<sub>3</sub>COOH &rarr; <b>4-Bromoanisole (major)</b>.<br>
        &bull; <b>Friedel-Crafts:</b> Alkylation &rarr; <b>4-Methoxytoluene (major)</b>; Acylation &rarr; <b>4-Methoxyacetophenone (major)</b>.<br>
        &bull; <b>Nitration:</b> Anisole + HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub> &rarr; <b>4-Nitroanisole (major)</b>.
      </div>
    </div>
  </div>

  <!-- SECTION 11 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 36px;">11. Master Revision Formula &amp; Named Reactions Cheat Sheet</h2>

  <div style="background: rgba(255, 0, 127, 0.05); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">1. Key Reaction Matrix:</b>
      <b style="color: #FF007F;">&bull; Hydration:</b> Alkene + H<sub>2</sub>O/H<sup>+</sup> &rarr; Alcohol (Markovnikov).<br>
      <b style="color: #FF007F;">&bull; Hydroboration-Oxidation:</b> Alkene + B<sub>2</sub>H<sub>6</sub> &rarr; H<sub>2</sub>O<sub>2</sub>/OH<sup>-</sup> &rarr; 1&deg; Alcohol (Anti-Markovnikov).<br>
      <b style="color: #FF007F;">&bull; Cumene to Phenol:</b> Cumene + O<sub>2</sub> &rarr; Hydroperoxide &rarr; Phenol + Acetone.<br>
      <b style="color: #FF007F;">&bull; Kolbe:</b> C<sub>6</sub>H<sub>5</sub>ONa + CO<sub>2</sub> (400 K, 4-7 atm) &rarr; Salicylic acid.<br>
      <b style="color: #FF007F;">&bull; Reimer-Tiemann:</b> Phenol + CHCl<sub>3</sub> + NaOH (340 K) &rarr; Salicylaldehyde.<br>
      <b style="color: #FF007F;">&bull; Williamson:</b> 1&deg; R-X + R&apos;ONa &rarr; R-O-R&apos; + NaX (3&deg; R-X gives Alkene!).<br>
      <b style="color: #FF007F;">&bull; Dehydration Temp:</b> Ethanol &rarr; Ethene (443 K) vs Diethyl ether (413 K).<br><br>

      <b style="color: #FF007F; font-size: 16px; display: block; margin-bottom: 4px;">2. Distinction Tests:</b>
      <b style="color: #FF007F;">&bull; Lucas Test:</b> 3&deg; (instant) &gt; 2&deg; (5 min) &gt; 1&deg; (on heating).<br>
      <b style="color: #FF007F;">&bull; Victor Meyer:</b> 1&deg; (Blood Red) | 2&deg; (Blue) | 3&deg; (Colourless).<br>
      <b style="color: #FF007F;">&bull; Cu at 573 K:</b> 1&deg; (Aldehyde) | 2&deg; (Ketone) | 3&deg; (Alkene).<br>
      <b style="color: #FF007F;">&bull; Phenol Test:</b> Neutral FeCl<sub>3</sub> &rarr; Violet colour; Br<sub>2</sub>/H<sub>2</sub>O &rarr; White precipitate.<br>
      <b style="color: #FF007F;">&bull; Acidity Order:</b> Picric acid &gt; p-Nitrophenol &gt; o-Nitrophenol &gt; m-Nitrophenol &gt; Phenol &gt; Water &gt; 1&deg; &gt; 2&deg; &gt; 3&deg; Alcohol.
    </div>
  </div>

</div>
`;

// Read existing solutions and mcqs
const existingContent = fs.readFileSync('client/data/content/c12-chem-7.ts', 'utf8');

const solMatch = existingContent.match(/export const c12Chem7HtmlSolutions = ([\s\S]*?);\n\nexport const c12Chem7Mcqs/);
if (!solMatch) {
  console.error("Could not find c12Chem7HtmlSolutions");
  process.exit(1);
}
const solutionsHtmlString = solMatch[1];

const mcqMatch = existingContent.match(/export const c12Chem7Mcqs = (\[[\s\S]*?\]);\n/);
if (!mcqMatch) {
  console.error("Could not find c12Chem7Mcqs");
  process.exit(1);
}
const mcqsString = mcqMatch[1];

const finalFileContent = `// Class 12 Chemistry Unit VII: Alcohols, Phenols and Ethers (Official Syllabus - 06 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem7HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c12Chem7HtmlSolutions = ${solutionsHtmlString};

export const c12Chem7Mcqs = ${mcqsString};
`;

fs.writeFileSync('client/data/content/c12-chem-7.ts', finalFileContent, 'utf8');
console.log('Successfully updated client/data/content/c12-chem-7.ts with all 9 diagrams!');
