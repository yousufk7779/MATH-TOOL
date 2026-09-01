const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\944a3b30-06dc-4c2c-9bec-91424ca2bb43\\.user_uploaded';

const imageFiles = {
  classification: 'media_1788276595639.jpg', // 1. Classification (C, H, O compounds)
  alcohols: 'media_1788276595714.jpg',       // 2. Alcohols
  aldehydes: 'media_1788276596078.jpg',      // 3. Aldehydes (Ethanal)
  genStruct: 'media_1788276596301.jpg',      // 4. General Structure & Functional Group
  physProps: 'media_1788276596387.jpg',      // 5. Physical Properties
  ketones: 'media_1788276726880.jpg',        // 6. Ketones (Propanone)
  acids: 'media_1788276727112.jpg',          // 7. Carboxylic Acids (Ethanoic acid)
  compTable: 'media_1788276727472.jpg',      // 8. Comparative Table
  keyRxns: 'media_1788276727672.jpg',        // 9. Key Reactions (Oxidation & Esterification)
  uses: 'media_1788276727713.jpg'            // 10. Uses & Importance
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
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 214, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const card1 = makeCard(
  b64Map.classification,
  "<b>Systematic Classification of Oxygenated Organic Compounds:</b> Core functional division of C, H, O families into Alcohols (R-OH), Aldehydes (R-CHO), Ketones (R-CO-R'), and Carboxylic Acids (R-COOH), subdivided into aliphatic and aromatic subclasses.",
  "Classification of Oxygenated Organic Compounds"
);

const card2 = makeCard(
  b64Map.alcohols,
  "<b>Alcohols Structure &amp; Synthetic Role:</b> Methanol (CH<sub>3</sub>OH) with tetrahedral sp<sup>3</sup> C-O geometry. Alcohols serve as direct precursors to aldehydes, ketones, and esters via oxidation and Fischer esterification.",
  "Alcohols Structure and Core Reactions"
);

const card3 = makeCard(
  b64Map.aldehydes,
  "<b>Aldehydes Structure &amp; Chemical Behavior:</b> Ethanal (CH<sub>3</sub>CHO) containing the terminal formyl group (-CHO). Features high oxidation susceptibility, positive Tollens' and Fehling's tests, volatility, and extensive use in perfumes and flavourings.",
  "Aldehydes Structure and Properties"
);

const card4 = makeCard(
  b64Map.genStruct,
  "<b>Comparative Spatial Geometries of Oxygen Functional Groups:</b> 3D structural comparison of Hydroxyl (-OH, bent sp<sup>3</sup>), Formyl (-CHO, trigonal planar sp<sup>2</sup>), Carbonyl (&gt;C=O, planar sp<sup>2</sup>), and Carboxyl (-COOH, planar resonance hybrid).",
  "General Structure and Functional Groups of Oxygen Compounds"
);

const card5 = makeCard(
  b64Map.physProps,
  "<b>Comparative Physical Property Trends:</b> Intermolecular hydrogen bonding dictates high boiling points in alcohols and carboxylic acid cyclic dimers, while dipole-dipole interactions govern intermediate volatility in aldehydes and ketones.",
  "Physical Properties Trends of Oxygenated Families"
);

const card6 = makeCard(
  b64Map.ketones,
  "<b>Ketones Structure &amp; Properties:</b> Propanone (CH<sub>3</sub>COCH<sub>3</sub> / Acetone) with a non-terminal carbonyl carbon. Demonstrates moderate nucleophilic reactivity, resistance to mild oxidants (negative Tollens'/Fehling's tests), and heavy industrial solvent utility.",
  "Ketones Structure and Properties"
);

const card7 = makeCard(
  b64Map.acids,
  "<b>Carboxylic Acids Structure &amp; Acidity:</b> Ethanoic acid (CH<sub>3</sub>COOH) containing the carboxyl group (-COOH). Displays elevated boiling points due to cyclic dimer formation and distinct Bronsted acidity (turning blue litmus red and forming carboxylate salts).",
  "Carboxylic Acids Structure and Acidity"
);

const card8 = makeCard(
  b64Map.compTable,
  "<b>Master Property Comparison Matrix:</b> Comprehensive overview contrasting functional group, general formula, bond polarity, boiling point hierarchy (Carboxylic acids &gt; Alcohols &gt;&gt; Ketones &ge; Aldehydes), and relative acidic strengths.",
  "Comparative Table of Oxygenated Organic Families"
);

const card9 = makeCard(
  b64Map.keyRxns,
  "<b>Key Reaction Interconversions:</b> Oxidation of 1&deg; alcohols to aldehydes (RCH<sub>2</sub>OH &rarr; RCHO), 2&deg; alcohols to ketones (R<sub>2</sub>CHOH &rarr; R<sub>2</sub>C=O), aldehyde oxidation to carboxylic acids (RCHO &rarr; RCOOH), and acid-catalysed Fischer esterification (RCOOH + R'OH &#8652; RCOOR' + H<sub>2</sub>O).",
  "Key Reaction Interconversions and Esterification"
);

const card10 = makeCard(
  b64Map.uses,
  "<b>Commercial Applications &amp; Industrial Significance:</b> Everyday and industrial uses spanning antiseptics/fuels (alcohols), flavours/formalin disinfectants (aldehydes), pharmaceutical solvents (ketones), and culinary vinegar/polymers/medicines (carboxylic acids).",
  "Uses and Importance of Carbonyl Compounds and Acids"
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
  <div style="background: rgba(255, 214, 0, 0.05); border: 1.5px solid #FFD600; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FFD600; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #FFD600; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit VIII: Aldehydes, Ketones and Carboxylic Acids (Official Syllabus - 08 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFD600; border-radius: 6px;">
        <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">1. Carbonyl Group (&gt;C=O):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A functional group consisting of a carbon atom double-bonded to an oxygen atom. In <b>Aldehydes (R-CHO)</b>, the carbonyl carbon is bonded to at least one hydrogen atom. In <b>Ketones (R-CO-R&apos;)</b>, it is bonded to two alkyl or aryl carbon atoms. In <b>Carboxylic Acids (R-COOH)</b>, the carbonyl carbon is bonded directly to a hydroxyl (-OH) group.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFD600; border-radius: 6px;">
        <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">2. Nucleophilic Addition to Carbonyl Group:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Because oxygen is more electronegative than carbon, the carbonyl &pi;-bond is polarized (&gt;C<sup>&delta;+</sup>=O<sup>&delta;-</sup>). Nucleophiles attack the electrophilic sp<sup>2</sup> hybridised carbonyl carbon perpendicularly to form a tetrahedral alkoxide intermediate (sp<sup>3</sup>), followed by protonation. Reactivity order: <b>HCHO &gt; RCHO &gt; R-CO-R&apos; &gt; Aromatic aldehydes/ketones</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFD600; border-radius: 6px;">
        <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">3. Aldol Condensation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Carbonyl compounds possessing at least one <b>&alpha;-hydrogen</b> undergo self-addition in the presence of dilute base (e.g. dil. NaOH, Ba(OH)<sub>2</sub>) to form &beta;-hydroxyaldehydes (Aldols) or &beta;-hydroxyketones (Ketols), which upon heating eliminate water to yield <b>&alpha;,&beta;-unsaturated carbonyl compounds</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFD600; border-radius: 6px;">
        <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">4. Cannizzaro Reaction:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Aldehydes having <b>NO &alpha;-hydrogen</b> (e.g. HCHO, C<sub>6</sub>H<sub>5</sub>CHO, (CH<sub>3</sub>)<sub>3</sub>C-CHO) undergo disproportionation (self-oxidation and reduction) upon heating with concentrated (50%) alkali (NaOH/KOH) to produce an equimolar mixture of a primary alcohol and a carboxylate salt.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFD600; border-radius: 6px;">
        <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">5. Tollens&apos; &amp; Fehling&apos;s Tests:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Tollens&apos; Reagent</b> [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> is reduced by aldehydes (both aliphatic &amp; aromatic) to form a shiny metallic <b>Silver Mirror</b>. <b>Fehling&apos;s Solution</b> (alkaline Cu<sup>2+</sup> tartrate) is reduced by <b>aliphatic aldehydes only</b> to a red-brown precipitate of <b>Cu<sub>2</sub>O</b> (Ketones and Benzaldehyde give negative Fehling&apos;s test).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFD600; border-radius: 6px;">
        <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">6. Iodoform (Haloform) Reaction:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Compounds containing a methyl carbonyl group (<b>CH<sub>3</sub>-C=O</b>) or methyl carbinol group (<b>CH<sub>3</sub>-CH(OH)-</b>) react with sodium hypoiodite (I<sub>2</sub> + aq. NaOH) to give a characteristic <b>yellow crystalline precipitate of Iodoform (CHI<sub>3</sub>)</b> and a carboxylate salt containing one less carbon atom.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFD600; border-radius: 6px;">
        <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">7. Carboxylate Ion Resonance &amp; Hell-Volhard-Zelinsky (HVZ) Reaction:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Carboxylate ion (RCOO<sup>-</sup>)</b> is exceptionally stabilized by two equivalent resonance structures sharing negative charge equally over two electronegative oxygens. In the <b>HVZ reaction</b>, carboxylic acids with &alpha;-hydrogens react with Cl<sub>2</sub> or Br<sub>2</sub> in the presence of red phosphorus to yield <b>&alpha;-halocarboxylic acids</b>.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 30px;">1. Nomenclature &amp; Classification of Aldehydes, Ketones and Carboxylic Acids</h2>

  <p>Organic compounds containing carbon, hydrogen, and oxygen form the foundation of vital synthetic and biological processes. Aldehydes, ketones, and carboxylic acids all feature carbonyl groups with distinct electronic and steric environments that govern their physical properties and chemical reactivity.</p>

  ${card1}

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">1. IUPAC Rules for Aldehydes (-al) &amp; Ketones (-one)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Aldehydes:</b> Suffix is <b>-al</b> (e.g. HCHO: Methanal; CH<sub>3</sub>CHO: Ethanal; CH<sub>3</sub>CH<sub>2</sub>CHO: Propanal). The -CHO carbon is always numbered as C-1. When -CHO is attached directly to a ring, the suffix <b>-carbaldehyde</b> is used (e.g. Cyclohexanecarbaldehyde; Benzenecarbaldehyde / Benzaldehyde).<br>
        <b style="color: #FFD600;">&bull; Ketones:</b> Suffix is <b>-one</b> (e.g. CH<sub>3</sub>COCH<sub>3</sub>: Propan-2-one / Acetone; CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub>: Butan-2-one). Numbering starts from the end nearer to the carbonyl carbon.<br>
        <b style="color: #FFD600;">&bull; Symmetrical vs Asymmetrical Ketones:</b> Symmetrical (e.g. Propanone, Pentan-3-one) vs Mixed (e.g. Butan-2-one, Acetophenone C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">2. IUPAC Rules for Carboxylic Acids (-oic acid) &amp; Dicarboxylic Acids</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Monocarboxylic Acids:</b> Suffix is <b>-oic acid</b> (e.g. HCOOH: Methanoic acid / Formic acid; CH<sub>3</sub>COOH: Ethanoic acid / Acetic acid; C<sub>6</sub>H<sub>5</sub>COOH: Benzoic acid).<br>
        <b style="color: #FFD600;">&bull; Dicarboxylic Acids:</b> Named as alkanedioic acids (e.g. HOOC-COOH: Ethanedioic acid / Oxalic acid; HOOC-CH<sub>2</sub>-COOH: Propanedioic acid / Malonic acid; HOOC-(CH<sub>2</sub>)<sub>2</sub>-COOH: Butanedioic acid / Succinic acid; HOOC-(CH<sub>2</sub>)<sub>4</sub>-COOH: Hexanedioic acid / Adipic acid).
      </div>
    </div>
  </div>

  ${card3}

  ${card6}

  ${card7}

  <div style="background: rgba(255, 214, 0, 0.08); border-left: 4.5px solid #FFD600; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FFD600; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 WORKED IUPAC NOMENCLATURE EXAMPLES</b>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;">
      <b style="color: #FFD600;">1. CH<sub>3</sub>-CH(CH<sub>3</sub>)-CH<sub>2</sub>-CHO:</b> 3-Methylbutanal.<br>
      <b style="color: #FFD600;">2. CH<sub>3</sub>-CH=CH-CHO:</b> But-2-en-1-al (Crotonaldehyde).<br>
      <b style="color: #FFD600;">3. CH<sub>3</sub>-CO-CH<sub>2</sub>-CH(CH<sub>3</sub>)<sub>2</sub>:</b> 4-Methylpentan-2-one.<br>
      <b style="color: #FFD600;">4. C<sub>6</sub>H<sub>5</sub>-CO-CH<sub>3</sub>:</b> 1-Phenylethan-1-one (Acetophenone).<br>
      <b style="color: #FFD600;">5. C<sub>6</sub>H<sub>5</sub>-CO-C<sub>6</sub>H<sub>5</sub>:</b> Diphenylmethanone (Benzophenone).<br>
      <b style="color: #FFD600;">6. HOOC-CH<sub>2</sub>-CH(COOH)-CH<sub>2</sub>-COOH:</b> Propane-1,2,3-tricarboxylic acid (when &ge;3 -COOH groups are on chain, none is included in parent chain).<br>
      <b style="color: #FFD600;">7. o-HOC<sub>6</sub>H<sub>4</sub>COOH:</b> 2-Hydroxybenzoic acid (Salicylic acid).
    </div>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">2. Structure &amp; Nature of the Carbonyl Group (&gt;C=O)</h2>

  <div style="background: rgba(255, 214, 0, 0.08); border-left: 4.5px solid #FFD600; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FFD600; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 ELECTRONIC STRUCTURE &amp; POLARITY OF CARBONYL GROUP</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">
      <b style="color: #FFD600;">1. Hybridisation &amp; Geometry:</b> The carbonyl carbon atom is <b>sp<sup>2</sup> hybridised</b> and forms three &sigma;-bonds in a coplanar trigonal arrangement with bond angles of approximately <b>120&deg;</b>. The fourth valence electron of carbon remains in an unhybridised 2p orbital which undergoes lateral overlap with a parallel 2p orbital of the oxygen atom to form a <b>&pi;-bond</b>.<br><br>
      <b style="color: #FFD600;">2. Dipole Moment &amp; Polarity:</b> Oxygen is significantly more electronegative (3.5) than carbon (2.5). The &pi;-electron density is strongly shifted towards oxygen, resulting in large bond dipole moments (<b>&mu; = 2.3 &mdash; 2.8 D</b>):\n      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 10px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">&gt;C=O &#8654; &gt;C<sup>+</sup>-O<sup>-</sup> &nbsp;&nbsp; (Electrophilic Carbon &bull; Nucleophilic Oxygen)</div>
      <b style="color: #FFD600;">3. Electrophilic vs Nucleophilic Sites:</b> The carbonyl carbon is an <b>electrophilic (Lewis acid) center</b> susceptible to attack by nucleophiles, whereas the carbonyl oxygen is a <b>nucleophilic (Lewis base) center</b> susceptible to protonation by electrophiles.
    </div>
  </div>

  ${card4}

  ${card2}

  <!-- SECTION 3 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">3. Methods of Preparation of Aldehydes and Ketones</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">1. General Methods for Both Aldehydes &amp; Ketones</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Oxidation of Alcohols:</b> 1&deg; Alcohol &rarr; (PCC in CH<sub>2</sub>Cl<sub>2</sub>) &rarr; <b>Aldehyde</b>; 2&deg; Alcohol &rarr; (CrO<sub>3</sub> / H<sub>2</sub>SO<sub>4</sub>) &rarr; <b>Ketone</b>.<br>
        <b style="color: #FFD600;">&bull; Dehydrogenation of Alcohols over Heated Cu (573 K):</b> 1&deg; Alcohol &rarr; Aldehyde + H<sub>2</sub>&uarr;; 2&deg; Alcohol &rarr; Ketone + H<sub>2</sub>&uarr;.<br>
        <b style="color: #FFD600;">&bull; Ozonolysis of Alkenes:</b> Alkene + O<sub>3</sub> &rarr; Ozonide &rarr; (Zn / H<sub>2</sub>O) &rarr; Aldehydes / Ketones (Zn dust prevents oxidation to acids by destroying H<sub>2</sub>O<sub>2</sub>).<br>
        <b style="color: #FFD600;">&bull; Hydration of Alkynes (Kucherov Reaction):</b> Ethyne + H<sub>2</sub>O &rarr; (40% H<sub>2</sub>SO<sub>4</sub> + 1% HgSO<sub>4</sub> / 333 K) &rarr; [CH<sub>2</sub>=CHOH] &rarr; <b>Acetaldehyde (CH<sub>3</sub>CHO)</b>; Propyne &rarr; <b>Acetone (CH<sub>3</sub>COCH<sub>3</sub>)</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">2. Exclusive Named Methods for Preparation of Aldehydes</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Rosenmund Reduction:</b> Catalytic hydrogenation of acyl chloride over palladium poisoned with BaSO<sub>4</sub> (and sulfur/quinoline):<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-COCl + H<sub>2</sub> &rarr; (Pd - BaSO<sub>4</sub> / Boiling xylene) &rarr; R-CHO + HCl</div>
        <i>(BaSO<sub>4</sub> acts as a catalyst poison to prevent further reduction of aldehyde to alcohol).</i><br><br>
        <b style="color: #FFD600;">&bull; Stephen Reaction:</b> Nitrile reduction by SnCl<sub>2</sub>/HCl followed by steam distillation:<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-C&equiv;N + SnCl<sub>2</sub> + HCl &rarr; R-CH=NH&bull;HCl (Aldimine) &rarr; (H<sub>3</sub>O<sup>+</sup>) &rarr; R-CHO + NH<sub>4</sub>Cl</div>
        <b style="color: #FFD600;">&bull; DIBAL-H Reduction:</b> Diisobutylaluminium hydride reduces nitriles and esters selectively to aldehydes at 195 K.<br><br>
        <b style="color: #FFD600;">&bull; Etard Reaction (Aromatic Aldehyde):</b> Toluene is oxidized by Chromyl chloride (CrO<sub>2</sub>Cl<sub>2</sub>) in CS<sub>2</sub> to form a brown chromium complex, which on hydrolysis yields <b>Benzaldehyde</b>:<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + 2 CrO<sub>2</sub>Cl<sub>2</sub> &rarr; (CS<sub>2</sub>) &rarr; C<sub>6</sub>H<sub>5</sub>CH(OCrOHCl<sub>2</sub>)<sub>2</sub> &rarr; (H<sub>3</sub>O<sup>+</sup>) &rarr; C<sub>6</sub>H<sub>5</sub>CHO</div>
        <b style="color: #FFD600;">&bull; Gattermann-Koch Reaction:</b> Benzene + CO + HCl &rarr; (anhyd. AlCl<sub>3</sub> / CuCl) &rarr; <b>Benzaldehyde</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">3. Exclusive Methods for Preparation of Ketones</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; From Acyl Chlorides with Dialkylcadmium:</b> 2 R&apos;-COCl + R<sub>2</sub>Cd &rarr; 2 R&apos;-CO-R + CdCl<sub>2</sub> (Cadmium alkyls are less reactive and do not react with the ketone product).<br>
        <b style="color: #FFD600;">&bull; From Nitriles with Grignard Reagents:</b> CH<sub>3</sub>-C&equiv;N + C<sub>6</sub>H<sub>5</sub>MgBr &rarr; (Ether) &rarr; CH<sub>3</sub>-C(=NMgBr)-C<sub>6</sub>H<sub>5</sub> &rarr; (H<sub>3</sub>O<sup>+</sup>) &rarr; <b>Acetophenone (C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>)</b>.<br>
        <b style="color: #FFD600;">&bull; Friedel-Crafts Acylation:</b> Benzene + CH<sub>3</sub>COCl / (CH<sub>3</sub>CO)<sub>2</sub>O &rarr; (anhyd. AlCl<sub>3</sub>) &rarr; <b>Acetophenone</b> + HCl.
      </div>
    </div>
  </div>

  ${card9}

  <!-- SECTION 4 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">4. Physical Properties &amp; Mechanism of Nucleophilic Addition Reactions</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">1. Physical Properties &amp; Boiling Point Order</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Boiling Point Hierarchy:</b> Alkanes &lt; Ethers &lt; <b>Aldehydes &lt; Ketones</b> &lt; Alcohols &lt; Carboxylic Acids.<br>
        <i>Aldehydes &amp; ketones have higher boiling points than alkanes due to dipole-dipole attractions, but lower than alcohols because they lack intermolecular H-bonding. Ketones have slightly higher boiling points than isomeric aldehydes due to greater polarity.</i><br>
        <b style="color: #FFD600;">&bull; Water Solubility:</b> Lower aldehydes/ketones (up to 4 carbons) are completely miscible in water by forming H-bonds with water molecules.
      </div>
    </div>
  </div>

  ${card5}

  ${card8}

  <!-- NUCLEOPHILIC ADDITION MECHANISM BOX -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(255, 214, 0, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: #FFD600; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(255, 214, 0, 0.3); padding-bottom: 6px;">
      📐 STEP-BY-STEP BOARD MECHANISM: Nucleophilic Addition to Carbonyl Group
    </div>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.75;">
      <b style="color: #FFD600;">Step 1: Nucleophilic Attack (Slow, Rate-Determining Step)</b><br>
      A nucleophile (Nu<sup>-</sup>) attacks the electrophilic sp<sup>2</sup> hybridised carbonyl carbon perpendicularly (at &approx; 107&deg; angle), rehybridising the carbon from planar sp<sup>2</sup> to tetrahedral sp<sup>3</sup> and forming an alkoxide intermediate:<br>
      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 10px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">&gt;C=O (Planar sp<sup>2</sup>) + Nu<sup>-</sup> &rarr; (Slow, RDS) &rarr; &gt;C(Nu)-O<sup>-</sup> (Tetrahedral Intermediate sp<sup>3</sup>)</div>

      <b style="color: #FFD600;">Step 2: Proton Transfer (Fast Step)</b><br>
      The tetrahedral alkoxide captures a proton (H<sup>+</sup>) from the medium to yield the electrically neutral addition product:<br>
      <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 10px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">&gt;C(Nu)-O<sup>-</sup> + H<sup>+</sup> &rarr; (Fast) &rarr; &gt;C(Nu)-OH</div>

      <b style="color: #FFD600;">Relative Reactivity Order:</b> <b>HCHO &gt; CH<sub>3</sub>CHO &gt; CH<sub>3</sub>COCH<sub>3</sub> &gt; C<sub>6</sub>H<sub>5</sub>CHO &gt; C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> &gt; C<sub>6</sub>H<sub>5</sub>COC<sub>6</sub>H<sub>5</sub></b>.<br>
      <b style="color: #FFD600;">&bull; Steric Reason:</b> Bulky alkyl groups crowd the transition state and hinder the approach of nucleophiles.<br>
      <b style="color: #FFD600;">&bull; Electronic Reason:</b> Alkyl groups (+I effect) disperse the positive charge on carbonyl carbon, reducing electrophilicity. Resonance (+R) in aromatic carbonyls delocalizes &pi;-electrons into the ring, reducing carbonyl carbon positivity.
    </div>
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">5. Addition-Elimination Reactions with Ammonia Derivatives (H<sub>2</sub>N-Z)</h2>

  <div style="background: rgba(255, 214, 0, 0.08); border-left: 4.5px solid #FFD600; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FFD600; font-size: 16.5px; display: block; margin-bottom: 6px;">MASTER REACTION MATRIX: Carbonyl + H<sub>2</sub>N-Z &rarr; &gt;C=N-Z + H<sub>2</sub>O (pH 3.5 &mdash; 4.5)</b>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;">
      <b style="color: #FFD600;">1. With Hydroxylamine (H<sub>2</sub>N-OH):</b> Forms <b>Oximes</b> (&gt;C=N-OH).<br>
      <b style="color: #FFD600;">2. With Hydrazine (H<sub>2</sub>N-NH<sub>2</sub>):</b> Forms <b>Hydrazones</b> (&gt;C=N-NH<sub>2</sub>).<br>
      <b style="color: #FFD600;">3. With Phenylhydrazine (H<sub>2</sub>N-NHC<sub>6</sub>H<sub>5</sub>):</b> Forms <b>Phenylhydrazones</b> (&gt;C=N-NHC<sub>6</sub>H<sub>5</sub>).<br>
      <b style="color: #FFD600;">4. With 2,4-DNP (Brady&apos;s Reagent):</b> Forms yellow/orange crystalline <b>2,4-Dinitrophenylhydrazones</b> (used for characterization of aldehydes and ketones).<br>
      <b style="color: #FFD600;">5. With Semicarbazide (H<sub>2</sub>N-NH-CONH<sub>2</sub>):</b> Forms <b>Semicarbazones</b> (&gt;C=N-NH-CONH<sub>2</sub>).<br>
      <b style="color: #FFD600;">CRUCIAL BOARD TRAP:</b> In semicarbazide, only the hydrazine -NH<sub>2</sub> group acts as a nucleophile. The amide -NH<sub>2</sub> is unreactive because its lone pair is delocalized in resonance with the amide C=O group (-NH-C(=O)-NH<sub>2</sub> &#8654; -NH-C(O<sup>-</sup>)=N<sup>+</sup>H<sub>2</sub>).
    </div>
  </div>

  <!-- SECTION 6 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">6. Oxidation, Reduction &amp; Diagnostic Chemical Tests</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">1. Deoxygenation Reductions: Clemmensen vs Wolff-Kishner</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Clemmensen Reduction:</b> &gt;C=O + 4 [H] &rarr; (<b>Zn-Hg + conc. HCl</b> / Heat) &rarr; <b>&gt;CH<sub>2</sub> (Hydrocarbon)</b> + H<sub>2</sub>O. (Suitable for acid-stable substrates).<br>
        <b style="color: #FFD600;">&bull; Wolff-Kishner Reduction:</b> &gt;C=O + NH<sub>2</sub>NH<sub>2</sub> &rarr; &gt;C=N-NH<sub>2</sub> &rarr; (<b>KOH / Ethylene glycol / 453-473 K</b>) &rarr; <b>&gt;CH<sub>2</sub></b> + N<sub>2</sub>&uarr;. (Suitable for base-stable substrates).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">2. Distinction Tests: Tollens&apos;, Fehling&apos;s &amp; Iodoform Tests</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Tollens&apos; Test (Ammoniacal AgNO<sub>3</sub>):</b> Aldehyde + 2 [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 3 OH<sup>-</sup> &rarr; R-COO<sup>-</sup> + <b>2 Ag&darr; (Bright Silver Mirror)</b> + 4 NH<sub>3</sub> + 2 H<sub>2</sub>O.<br>
        <b style="color: #FFD600;">&bull; Fehling&apos;s Test:</b> Aliphatic aldehyde + 2 Cu<sup>2+</sup> + 5 OH<sup>-</sup> &rarr; R-COO<sup>-</sup> + <b>Cu<sub>2</sub>O&darr; (Red-Brown Precipitate)</b> + 3 H<sub>2</sub>O. (Ketones &amp; Benzaldehyde do NOT reduce Fehling&apos;s solution).<br>
        <b style="color: #FFD600;">&bull; Iodoform Test:</b> CH<sub>3</sub>-CO-R + 3 I<sub>2</sub> + 4 NaOH &rarr; <b>CHI<sub>3</sub>&darr; (Yellow crystals, MP 119 &deg;C)</b> + R-COONa + 3 NaI + 3 H<sub>2</sub>O.
      </div>
    </div>
  </div>

  <!-- SECTION 7 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">7. Reactivity of &alpha;-Hydrogen: Aldol Condensation &amp; Cannizzaro Reaction</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">1. Acidity of &alpha;-Hydrogen &amp; Aldol Condensation</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        The &alpha;-hydrogens of carbonyls are acidic (pK<sub>a</sub> &approx; 19-20) due to electron-withdrawing effect of C=O and resonance stabilization of the enolate anion.<br>
        <b style="color: #FFD600;">&bull; Aldol Condensation:</b> 2 CH<sub>3</sub>CHO &rarr; (dil. NaOH) &rarr; CH<sub>3</sub>-CH(OH)-CH<sub>2</sub>-CHO (3-Hydroxybutanal / Aldol) &rarr; (&Delta;, -H<sub>2</sub>O) &rarr; <b>CH<sub>3</sub>-CH=CH-CHO (But-2-enal / Crotonaldehyde)</b>.<br>
        <b style="color: #FFD600;">&bull; Cross Aldol:</b> Between two different carbonyls. If both have &alpha;-H, 4 products are formed. Between Benzaldehyde and Acetophenone: C<sub>6</sub>H<sub>5</sub>CHO + CH<sub>3</sub>COC<sub>6</sub>H<sub>5</sub> &rarr; (OH<sup>-</sup> / &Delta;) &rarr; <b>C<sub>6</sub>H<sub>5</sub>-CH=CH-CO-C<sub>6</sub>H<sub>5</sub> (Benzalacetophenone / Chalcone)</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">2. Cannizzaro Reaction (Aldehydes with NO &alpha;-Hydrogen)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        When aldehydes lacking &alpha;-hydrogens are heated with 50% NaOH, hydride transfer causes self-redox:<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">2 HCHO + conc. NaOH &rarr; CH<sub>3</sub>OH (Methanol) + HCOONa (Sodium formate)</div>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">2 C<sub>6</sub>H<sub>5</sub>CHO + conc. KOH &rarr; C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH (Benzyl alcohol) + C<sub>6</sub>H<sub>5</sub>COOK (Potassium benzoate)</div>
        <b style="color: #FFD600;">&bull; Cross Cannizzaro:</b> HCHO + C<sub>6</sub>H<sub>5</sub>CHO + conc. NaOH &rarr; <b>HCOONa + C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>OH</b> (Formaldehyde is more electrophilic and oxidizes preferentially).
      </div>
    </div>
  </div>

  <!-- SECTION 8 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">8. Carboxylic Acids: Methods of Preparation &amp; Physical Properties</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">1. Methods of Preparation</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Oxidation of Alkylbenzenes:</b> Heating alkylbenzene with alkaline KMnO₄ followed by acidification gives <b>Benzoic acid</b> regardless of side chain length (provided &alpha;-H is present; tert-butylbenzene is inert).<br>
        <b style="color: #FFD600;">&bull; Hydrolysis of Nitriles:</b> R-C&equiv;N + H<sub>2</sub>O &rarr; (H<sup>+</sup> or OH<sup>-</sup>) &rarr; R-CONH<sub>2</sub> &rarr; (H<sub>3</sub>O<sup>+</sup> / &Delta;) &rarr; <b>R-COOH + NH<sub>4</sub><sup>+</sup></b>.<br>
        <b style="color: #FFD600;">&bull; Grignard Reagent Carbonation:</b> R-MgX + CO<sub>2</sub> (Dry ice) &rarr; R-COOMgX &rarr; (H<sub>3</sub>O<sup>+</sup>) &rarr; <b>R-COOH</b> (Increases chain length by 1 carbon).<br>
        <b style="color: #FFD600;">&bull; Hydrolysis of Esters, Anhydrides &amp; Acyl Halides:</b> R-COCl + H<sub>2</sub>O &rarr; R-COOH + HCl.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">2. Physical Properties &amp; Cyclic Dimer Formation</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Carboxylic acids have remarkably higher boiling points than alcohols of similar molecular weight because they form strong, stable <b>intermolecular Hydrogen-Bonded Cyclic Dimers</b> that persist even in the vapour phase.
      </div>
    </div>
  </div>

  <!-- SECTION 9 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">9. Acidic Nature of Carboxylic Acids &amp; Substituent Effects</h2>

  <div style="background: rgba(255, 214, 0, 0.08); border-left: 4.5px solid #FFD600; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FFD600; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 RESONANCE STABILITY &amp; SUBSTITUENT EFFECT HIERARCHY</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">
      <b style="color: #FFD600;">1. Carboxylate Ion Resonance:</b> The carboxylate anion (RCOO<sup>-</sup>) is stabilized by <b>two equivalent resonance structures</b> with negative charge delocalized over two highly electronegative oxygen atoms. In contrast, phenoxide ion delocalizes charge onto less electronegative carbons with non-equivalent structures.<br><br>
      <b style="color: #FFD600;">2. Electron-Withdrawing Groups (-I, -M):</b> Disperse negative charge, stabilize carboxylate ion, and <b>increase acidity</b> (lower pK<sub>a</sub>):<br>
      <b>CF<sub>3</sub>COOH &gt; CCl<sub>3</sub>COOH &gt; CHCl<sub>2</sub>COOH &gt; NO<sub>2</sub>CH<sub>2</sub>COOH &gt; NC-CH<sub>2</sub>COOH &gt; FCH<sub>2</sub>COOH &gt; ClCH<sub>2</sub>COOH &gt; BrCH<sub>2</sub>COOH &gt; HCOOH &gt; C<sub>6</sub>H<sub>5</sub>COOH &gt; CH<sub>3</sub>COOH</b>.<br><br>
      <b style="color: #FFD600;">3. Ortho Effect in Benzoic Acids:</b> Nearly all ortho-substituted benzoic acids are stronger acids than benzoic acid regardless of whether the substituent is electron-withdrawing or electron-donating due to steric inhibition of resonance.
    </div>
  </div>

  <!-- SECTION 10 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">10. Chemical Reactions of Carboxylic Acids: HVZ &amp; Decarboxylation</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">1. Hell-Volhard-Zelinsky (HVZ) Reaction</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Carboxylic acids containing an <b>&alpha;-hydrogen</b> react with Cl<sub>2</sub> or Br<sub>2</sub> in the presence of a catalytic amount of <b>red phosphorus</b> followed by hydrolysis to yield <b>&alpha;-halocarboxylic acids</b>:<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 214, 0, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-CH<sub>2</sub>-COOH + X<sub>2</sub> / Red P &rarr; (H<sub>2</sub>O) &rarr; R-CH(X)-COOH (&alpha;-Halocarboxylic acid)</div>
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 214, 0, 0.35); border-left: 5px solid #FFD600; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 6px;">2. Decarboxylation &amp; Other Key Reactions</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FFD600;">&bull; Soda-Lime Decarboxylation:</b> R-COONa + NaOH &rarr; (CaO / &Delta;) &rarr; <b>R-H (Alkane with 1 less carbon)</b> + Na<sub>2</sub>CO<sub>3</sub>.<br>
        <b style="color: #FFD600;">&bull; Reduction:</b> R-COOH &rarr; (1. LiAlH<sub>4</sub> or B<sub>2</sub>H<sub>6</sub>, 2. H<sub>3</sub>O<sup>+</sup>) &rarr; <b>R-CH<sub>2</sub>OH (1&deg; Alcohol)</b>. (NaBH<sub>4</sub> does NOT reduce -COOH).<br>
        <b style="color: #FFD600;">&bull; Formation of Acid Chlorides:</b> R-COOH + SOCl<sub>2</sub> &rarr; <b>R-COCl</b> + SO<sub>2</sub>&uarr; + HCl&uarr;.<br>
        <b style="color: #FFD600;">&bull; Reaction with NH<sub>3</sub>:</b> R-COOH + NH<sub>3</sub> &#8652; R-COONH<sub>4</sub> &rarr; (&Delta;) &rarr; <b>R-CONH<sub>2</sub> (Amide)</b> &rarr; (P<sub>2</sub>O<sub>5</sub> / &Delta;) &rarr; <b>R-CN</b>.
      </div>
    </div>
  </div>

  ${card10}

  <!-- SECTION 11 -->
  <h2 style="color: #FFD600; border-bottom: 2px solid #FFD600; padding-bottom: 6px; margin-top: 36px;">11. Master Revision Formula &amp; Named Reactions Cheat Sheet</h2>

  <div style="background: rgba(255, 214, 0, 0.05); border: 1.5px solid rgba(255, 214, 0, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">1. Key Reaction Matrix:</b>
      <b style="color: #FFD600;">&bull; Rosenmund:</b> RCOCl + H<sub>2</sub> &rarr; (Pd-BaSO<sub>4</sub>) &rarr; RCHO + HCl.<br>
      <b style="color: #FFD600;">&bull; Stephen:</b> RCN + SnCl<sub>2</sub>/HCl &rarr; RCH=NH &rarr; RCHO.<br>
      <b style="color: #FFD600;">&bull; Etard:</b> Toluene + CrO<sub>2</sub>Cl<sub>2</sub> &rarr; Benzaldehyde.<br>
      <b style="color: #FFD600;">&bull; Gattermann-Koch:</b> Benzene + CO + HCl &rarr; (AlCl<sub>3</sub>/CuCl) &rarr; Benzaldehyde.<br>
      <b style="color: #FFD600;">&bull; Clemmensen:</b> &gt;C=O + Zn-Hg/conc. HCl &rarr; &gt;CH<sub>2</sub>.<br>
      <b style="color: #FFD600;">&bull; Wolff-Kishner:</b> &gt;C=O + NH<sub>2</sub>NH<sub>2</sub>/KOH &rarr; &gt;CH<sub>2</sub> + N<sub>2</sub>&uarr;.<br>
      <b style="color: #FFD600;">&bull; Aldol:</b> 2 Carbonyls with &alpha;-H + dil. NaOH &rarr; &alpha;,&beta;-unsaturated carbonyl.<br>
      <b style="color: #FFD600;">&bull; Cannizzaro:</b> 2 Aldehydes (no &alpha;-H) + 50% NaOH &rarr; Alcohol + Carboxylate.<br>
      <b style="color: #FFD600;">&bull; HVZ:</b> RCH<sub>2</sub>COOH + X<sub>2</sub>/Red P &rarr; RCH(X)COOH.<br><br>

      <b style="color: #FFD600; font-size: 16px; display: block; margin-bottom: 4px;">2. Diagnostic Distinction Tests:</b>
      <b style="color: #FFD600;">&bull; Tollens&apos; Test:</b> Aldehydes give Silver Mirror; Ketones do not.<br>
      <b style="color: #FFD600;">&bull; Fehling&apos;s Test:</b> Aliphatic aldehydes give red Cu<sub>2</sub>O; Aromatic aldehydes &amp; ketones do not.<br>
      <b style="color: #FFD600;">&bull; 2,4-DNP Test:</b> All aldehydes &amp; ketones give orange/yellow precipitate.<br>
      <b style="color: #FFD600;">&bull; Iodoform Test:</b> CH<sub>3</sub>-C=O or CH<sub>3</sub>-CH(OH)- give yellow CHI<sub>3</sub> ppt.<br>
      <b style="color: #FFD600;">&bull; NaHCO<sub>3</sub> Test:</b> Carboxylic acids give brisk effervescence of CO<sub>2</sub>; Phenols/alcohols do not.
    </div>
  </div>

</div>
`;

// Read existing solutions and mcqs
const existingContent = fs.readFileSync('client/data/content/c12-chem-8.ts', 'utf8');

const solMatch = existingContent.match(/export const c12Chem8HtmlSolutions = ([\s\S]*?);\n\nexport const c12Chem8Mcqs/);
if (!solMatch) {
  console.error("Could not find c12Chem8HtmlSolutions");
  process.exit(1);
}
const solutionsHtmlString = solMatch[1];

const mcqMatch = existingContent.match(/export const c12Chem8Mcqs = (\[[\s\S]*?\]);\n/);
if (!mcqMatch) {
  console.error("Could not find c12Chem8Mcqs");
  process.exit(1);
}
const mcqsString = mcqMatch[1];

const finalFileContent = `// Class 12 Chemistry Unit VIII: Aldehydes, Ketones and Carboxylic Acids (Official Syllabus - 08 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem8HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c12Chem8HtmlSolutions = ${solutionsHtmlString};

export const c12Chem8Mcqs = ${mcqsString};
`;

fs.writeFileSync('client/data/content/c12-chem-8.ts', finalFileContent, 'utf8');
console.log('Successfully updated client/data/content/c12-chem-8.ts with all 10 diagrams!');
