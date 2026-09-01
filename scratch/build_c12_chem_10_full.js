const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\944a3b30-06dc-4c2c-9bec-91424ca2bb43\\.user_uploaded';

const imageFiles = {
  carbClass: 'media_1788277136845.jpg',   // 1. Classification of Carbohydrates
  monoStruct: 'media_1788277137077.jpg',  // 2. Monosaccharides Structure
  oligoStruct: 'media_1788277137305.jpg', // 3. Oligosaccharides
  glucosePrep: 'media_1788277136516.jpg', // 4. Preparation of Glucose
  glucoseRxns: 'media_1788277137349.jpg', // 5. Chemical Reactions of Glucose
  polyStruct: 'media_1788277192807.jpg',  // 6. Polysaccharides
  aaStruct: 'media_1788277193026.jpg',    // 7. Amino Acids General Structure
  peptideBond: 'media_1788277193265.jpg', // 8. Peptide Bond Formation
  polypeptide: 'media_1788277193510.jpg', // 9. Polypeptide Chain
  proteinLevels: 'media_1788277193590.jpg', // 10. Levels of Protein Structure
  nucleotides: 'media_1788277232084.jpg', // 11. Nucleotides
  bases: 'media_1788277232270.jpg',       // 12. Nitrogenous Bases
  dnaRna: 'media_1788277232475.jpg',      // 13. DNA and RNA
  vitamins: 'media_1788277232707.jpg'     // 14. Vitamins
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
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const card1 = makeCard(
  b64Map.carbClass,
  "<b>Classification of Carbohydrates (Aldoses vs Ketoses):</b> Systematic hierarchy based on functional group and carbon count into Aldoses (-CHO) and Ketoses (&gt;C=O) across Trioses (3C), Pentoses (5C), and Hexoses (6C). Monosaccharides represent irreducible single units.",
  "Classification of Carbohydrates"
);

const card2 = makeCard(
  b64Map.glucosePrep,
  "<b>Preparation of Glucose:</b> Industrial preparation via catalytic acid hydrolysis of Starch [(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub> + n H<sub>2</sub>O &rarr; n C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>] at 393 K under 2-3 atm pressure.",
  "Preparation Methods of Glucose"
);

const card3 = makeCard(
  b64Map.glucoseRxns,
  "<b>Key Chemical Reactions of Glucose:</b> (1) Mild Br<sub>2</sub>/H<sub>2</sub>O oxidation to Gluconic acid, (2) Nucleophilic HCN addition yielding Glucose Cyanohydrin, (3) Catalytic reduction over Ni to Sorbitol (hexitol), and (4) Zymase fermentation to Ethanol and CO<sub>2</sub>.",
  "Chemical Reactions of Glucose"
);

const card4 = makeCard(
  b64Map.monoStruct,
  "<b>Structural Architectures of Monosaccharides:</b> Open-chain Fischer projections and closed Haworth cyclic representations of <b>D-Glucose (&alpha;-D-Glucopyranose, 6-membered ring)</b> and <b>D-Fructose (&alpha;-D-Fructofuranose, 5-membered ring)</b>.",
  "Monosaccharide Structures Glucose and Fructose"
);

const card5 = makeCard(
  b64Map.oligoStruct,
  "<b>Oligosaccharides &amp; Glycosidic Bonds:</b> (a) <b>Sucrose:</b> &alpha;-D-Glucose + &beta;-D-Fructose (&alpha;-1,&beta;-2 bond, non-reducing); (b) <b>Lactose:</b> &beta;-D-Galactose + &beta;-D-Glucose (&beta;-1,4 bond, reducing); (c) <b>Maltose:</b> 2 &alpha;-D-Glucose units (&alpha;-1,4 bond, reducing).",
  "Oligosaccharides and Disaccharide Structures"
);

const card6 = makeCard(
  b64Map.polyStruct,
  "<b>Structural Organization of Polysaccharides:</b> (a) <b>Starch:</b> Linear &alpha;-1,4 Amylose and branched &alpha;-1,4 / &alpha;-1,6 Amylopectin; (b) <b>Cellulose:</b> Linear unbranched &beta;-1,4 microfibrils; (c) <b>Glycogen:</b> Highly branched animal storage polymer.",
  "Polysaccharide Structures Starch Cellulose Glycogen"
);

const card7 = makeCard(
  b64Map.aaStruct,
  "<b>General Tetrahedral Structure of Amino Acids:</b> Central &alpha;-carbon atom covalently bonded to an amino group (-NH<sub>2</sub>), carboxyl group (-COOH), hydrogen atom (-H), and a variable side chain (-R). All natural &alpha;-amino acids except glycine are chiral (L-series).",
  "General Amino Acid Structure"
);

const card8 = makeCard(
  b64Map.peptideBond,
  "<b>Peptide Bond Formation:</b> Condensation of the &alpha;-carboxyl group of one amino acid with the &alpha;-amino group of another with loss of water, producing the rigid planar <b>covalent peptide linkage (-CO-NH-)</b>.",
  "Peptide Bond Formation"
);

const card9 = makeCard(
  b64Map.polypeptide,
  "<b>Linear Architecture of a Polypeptide Chain:</b> Unbranched repetitive sequence of amino acid residues joined by successive peptide linkages extending from N-terminus to C-terminus.",
  "Polypeptide Chain Architecture"
);

const card10 = makeCard(
  b64Map.proteinLevels,
  "<b>Four Structural Levels of Protein Organization:</b> <b>Primary</b> (linear sequence), <b>Secondary</b> (&alpha;-helix / &beta;-pleated sheets via H-bonds), <b>Tertiary</b> (3D folding stabilized by disulfide, hydrophobic, ionic forces), and <b>Quaternary</b> (multi-subunit oligomeric assembly like Haemoglobin).",
  "Levels of Protein Structure"
);

const card11 = makeCard(
  b64Map.nucleotides,
  "<b>Nucleotide Monomeric Architecture:</b> Fundamental building unit composed of a <b>Phosphate Group</b>, a <b>Pentose Sugar</b> (D-Ribose in RNA / 2-Deoxy-D-ribose in DNA), and a <b>Nitrogenous Base</b>. (Nucleotide = Phosphate + Sugar + Base).",
  "Nucleotide Structure and Components"
);

const card12 = makeCard(
  b64Map.bases,
  "<b>Nitrogenous Bases in Nucleic Acids:</b> Two-ring <b>Purines</b> [Adenine (A), Guanine (G)] and single-ring <b>Pyrimidines</b> [Cytosine (C), Thymine (T, DNA only), Uracil (U, RNA only)].",
  "Nitrogenous Bases Purines and Pyrimidines"
);

const card13 = makeCard(
  b64Map.dnaRna,
  "<b>Comparative Anatomy of DNA vs RNA:</b> <b>DNA:</b> Double-stranded antiparallel helix with deoxyribose sugar and bases A, T, G, C (A=T, G&equiv;C); <b>RNA:</b> Single-stranded ribonucleic acid with ribose sugar and bases A, U, G, C.",
  "Comparison of DNA and RNA"
);

const card14 = makeCard(
  b64Map.vitamins,
  "<b>Classification, Sources &amp; Deficiency Diseases of Vitamins:</b> (a) <b>Fat-Soluble</b> (A, D, E, K; stored in liver/adipose tissue); (b) <b>Water-Soluble</b> (B-complex, C; excreted in urine). Summary of Night blindness (Vit A), Beriberi (Vit B1), Scurvy (Vit C), Rickets (Vit D), and Haemorrhage (Vit K).",
  "Vitamins Classification and Deficiency Matrix"
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
  <div style="background: rgba(0, 176, 255, 0.05); border: 1.5px solid #00B0FF; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #00B0FF; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #00B0FF; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit X: Biomolecules (Official Syllabus - 07 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00B0FF; border-radius: 6px;">
        <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">1. Carbohydrates &amp; Reducing Sugars:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Optically active polyhydroxy aldehydes or polyhydroxy ketones, or substances that yield such compounds upon hydrolysis. <b>Reducing Sugars</b> contain free or potential hemiacetal/hemiketal aldehydic/ketonic groups that reduce Tollens&apos; and Fehling&apos;s reagents (all monosaccharides, maltose, lactose; sucrose is non-reducing).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00B0FF; border-radius: 6px;">
        <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">2. Anomers &amp; Mutarotation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Anomers</b> are cyclic diastereomers of sugars differing in spatial configuration solely at the hemiacetal/hemiketal carbon (C-1 in aldoses, C-2 in ketoses), called the <b>anomeric carbon</b> (&alpha; and &beta; forms). <b>Mutarotation</b> is the spontaneous change in specific optical rotation of an optically active sugar in aqueous solution until equilibrium is reached (+112&deg; for &alpha;-D-glucose &rarr; +52.7&deg; &larr; +19&deg; for &beta;-D-glucose).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00B0FF; border-radius: 6px;">
        <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">3. Glycosidic &amp; Peptide Linkages:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Glycosidic Linkage:</b> The ether oxide linkage (-C-O-C-) joining two monosaccharide units via elimination of water. <b>Peptide Linkage (-CO-NH-):</b> An amide covalent bond formed between the &alpha;-carboxyl group of one amino acid and the &alpha;-amino group of another amino acid with elimination of water.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00B0FF; border-radius: 6px;">
        <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">4. Amino Acids, Zwitterion &amp; Isoelectric Point (pI):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Compounds containing both an amino (-NH<sub>2</sub>) and a carboxyl (-COOH) group. In aqueous solution, the -COOH transfers a proton to -NH<sub>2</sub> forming an internal dipolar <b>Zwitterion (H<sub>3</sub>N<sup>+</sup>-CHR-COO<sup>-</sup>)</b>. The specific pH at which an amino acid carries no net electrical charge and does not migrate in an electric field is its <b>Isoelectric Point (pI)</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00B0FF; border-radius: 6px;">
        <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">5. Protein Structures &amp; Denaturation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Primary (1&deg;):</b> Specific linear sequence of amino acids; <b>Secondary (2&deg;):</b> &alpha;-Helix and &beta;-Pleated Sheet stabilized by H-bonds; <b>Tertiary (3&deg;):</b> Overall 3D folding (Fibrous vs Globular) stabilized by disulfide bonds, H-bonds, salt bridges, van der Waals; <b>Quaternary (4&deg;):</b> Assembly of multiple subunits (e.g. Haemoglobin). <b>Denaturation:</b> Physical or chemical disruption (heat, pH) that unfolds 2&deg;, 3&deg;, 4&deg; structures with loss of biological activity, leaving 1&deg; structure intact.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00B0FF; border-radius: 6px;">
        <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">6. Nucleic Acids (DNA &amp; RNA):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Polynucleotides joined by 3&apos;-5&apos; phosphodiester linkages. A <b>Nucleoside</b> = Sugar + Nitrogenous Base; a <b>Nucleotide</b> = Nucleoside + Phosphate group. <b>DNA:</b> 2-Deoxy-D-ribose sugar, bases A, T, G, C, double-stranded antiparallel helix with complementary base pairing (A=T, G&equiv;C). <b>RNA:</b> D-Ribose sugar, bases A, U, G, C, single-stranded.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00B0FF; border-radius: 6px;">
        <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">7. Vitamins (Fat-Soluble vs Water-Soluble):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Essential micronutrients required in small amounts. <b>Fat-Soluble:</b> Vitamins A, D, E, K (stored in liver and adipose tissue). <b>Water-Soluble:</b> Vitamins B-complex and C (cannot be stored in the body except B12, readily excreted in urine).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 30px;">1. Classification of Carbohydrates &amp; Reducing Sugars</h2>

  <p>Carbohydrates are complex organic molecules containing carbon, hydrogen, and oxygen that serve as primary energy reservoirs and structural building materials for living organisms. Chemically, they are defined as optically active polyhydroxy aldehydes or polyhydroxy ketones.</p>

  ${card1}

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Classification based on Behaviour on Hydrolysis</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #00B0FF;">&bull; Monosaccharides:</b> Cannot be hydrolysed further into simpler polyhydroxy aldehydes/ketones (e.g. Glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, Fructose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, Ribose C<sub>5</sub>H<sub>10</sub>O<sub>5</sub>).<br>
        <b style="color: #00B0FF;">&bull; Oligosaccharides:</b> Yield 2 to 10 monosaccharide units on hydrolysis:<br>
        &bull; <b>Disaccharides (yield 2 units):</b> Sucrose (Glucose + Fructose), Maltose (Glucose + Glucose), Lactose (Glucose + Galactose).<br>
        &bull; <b>Trisaccharides (yield 3 units):</b> Raffinose.<br>
        <b style="color: #00B0FF;">&bull; Polysaccharides (Non-Sugars):</b> High-molecular-weight polymers yielding a large number of monosaccharide units on hydrolysis (e.g. Starch, Cellulose, Glycogen).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Reducing vs Non-Reducing Sugars</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #00B0FF;">&bull; Reducing Sugars:</b> Contain free or potential aldehydic (-CHO) or &alpha;-hydroxy ketonic (-CO-CH<sub>2</sub>OH) groups and reduce Tollens&apos; reagent (to silver mirror) and Fehling&apos;s solution (to red Cu<sub>2</sub>O ppt). Examples: All monosaccharides (Glucose, Fructose, Galactose) and disaccharides like <b>Maltose and Lactose</b>.<br>
        <b style="color: #00B0FF;">&bull; Non-Reducing Sugars:</b> The reducing groups (hemiacetal/hemiketal OH) of both monosaccharide units are involved in glycosidic bond formation (no free anomeric -OH). Example: <b>Sucrose</b>.
      </div>
    </div>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">2. D-Glucose: Structure, Preparation &amp; 6 Chemical Proofs</h2>

  ${card2}

  ${card3}

  <div style="background: rgba(0, 176, 255, 0.08); border-left: 4.5px solid #00B0FF; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #00B0FF; font-size: 16.5px; display: block; margin-bottom: 6px;">6 EXPERIMENTAL CHEMICAL EVIDENCES FOR OPEN-CHAIN STRUCTURE OF GLUCOSE</b>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;">
      <b style="color: #00B0FF;">1. Six Carbon Unbranched Straight Chain:</b> Prolonged heating with <b>HI and Red Phosphorus</b> at 373 K yields <b>n-Hexane</b> (CH<sub>3</sub>-(CH<sub>2</sub>)<sub>4</sub>-CH<sub>3</sub>), proving all 6 carbons are linked in a straight chain.<br>
      <b style="color: #00B0FF;">2. Presence of Carbonyl Group (&gt;C=O):</b> Reacts with <b>Hydroxylamine (NH<sub>2</sub>OH)</b> to form an <b>Oxime</b>, and adds <b>HCN</b> to form a <b>Cyanohydrin</b>.<br>
      <b style="color: #00B0FF;">3. Carbonyl Group is an Aldehyde (-CHO):</b> Mild oxidation with <b>Bromine Water (Br<sub>2</sub>/H<sub>2</sub>O)</b> oxidizes glucose to a 6-carbon monocarboxylic acid, <b>Gluconic acid [HOCH<sub>2</sub>-(CHOH)<sub>4</sub>-COOH]</b>.<br>
      <b style="color: #00B0FF;">4. Presence of Five Hydroxyl Groups (-OH):</b> Acetylation with <b>Acetic Anhydride</b> in the presence of ZnCl<sub>2</sub> yields <b>Glucose Pentaacetate</b>, confirming 5 -OH groups attached to 5 different carbons.<br>
      <b style="color: #00B0FF;">5. Presence of One Primary Alcohol Group (-CH<sub>2</sub>OH):</b> Oxidation with concentrated <b>Nitric Acid (HNO<sub>3</sub>)</b> oxidizes both the terminal -CHO and -CH<sub>2</sub>OH groups to give a 6-carbon dicarboxylic acid, <b>Saccharic acid / Glucaric acid [HOOC-(CHOH)<sub>4</sub>-COOH]</b>.<br>
      <b style="color: #00B0FF;">6. D-(+) Configuration:</b> The -OH group on the lowest asymmetric carbon (C-5) lies on the right-hand side in the Fischer projection (resembling D-(+)-glyceraldehyde).
    </div>
  </div>

  ${card4}

  <!-- SECTION 3 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">3. Cyclic Structure of Glucose, Anomers &amp; Mutarotation</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Limitations of Open-Chain Structure of Glucose</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Despite having an aldehyde group: (1) Glucose does not restore pink colour with Schiff&apos;s reagent; (2) Does not form bisulphite addition product with NaHSO<sub>3</sub>; (3) Glucose pentaacetate does not react with hydroxylamine (proves absence of free -CHO group); (4) Exists in two distinct crystalline forms (&alpha; and &beta;) with different melting points and optical rotations.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Haworth Pyranose Structures &amp; Anomers (&alpha; vs &beta;)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Glucose forms a six-membered cyclic hemiacetal ring between the C-1 carbonyl and C-5 hydroxyl group, called <b>Glucopyranose</b>. This generates a new chiral carbon at C-1 (anomeric carbon):<br>
        <b style="color: #00B0FF;">&bull; &alpha;-D-(+)-Glucopyranose:</b> Anomeric -OH group at C-1 is directed <b>downwards</b> (trans to -CH<sub>2</sub>OH at C-5). MP = 419 K, specific rotation [&alpha;]<sub>D</sub> = <b>+112&deg;</b>.<br>
        <b style="color: #00B0FF;">&bull; &beta;-D-(+)-Glucopyranose:</b> Anomeric -OH group at C-1 is directed <b>upwards</b> (cis to -CH<sub>2</sub>OH at C-5). MP = 423 K, specific rotation [&alpha;]<sub>D</sub> = <b>+19&deg;</b>.<br>
        <b style="color: #00B0FF;">&bull; Mutarotation Equilibrium:</b> In aqueous solution, both forms interconvert through the open-chain form until an equilibrium specific rotation of <b>+52.7&deg;</b> (36% &alpha; + 64% &beta;) is attained.
      </div>
    </div>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">4. Disaccharides: Sucrose, Maltose &amp; Lactose (Invert Sugar)</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Sucrose (Cane Sugar) &amp; Invert Sugar Phenomenon</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #00B0FF;">&bull; Structure:</b> Composed of <b>&alpha;-D-Glucopyranose and &beta;-D-Fructofuranose</b> linked by an <b>&alpha;-1,&beta;-2 glycosidic bond</b> between C-1 of glucose and C-2 of fructose. Since both anomeric carbons are locked, sucrose is a <b>Non-Reducing Sugar</b>.<br>
        <b style="color: #00B0FF;">&bull; Inversion of Cane Sugar:</b> Sucrose is dextrorotatory ([&alpha;]<sub>D</sub> = <b>+66.5&deg;</b>). Upon hydrolysis by dilute acid or enzyme <i>invertase</i>, it yields an equimolar mixture of D-(+)-glucose ([&alpha;]<sub>D</sub> = +52.7&deg;) and D-(-)-fructose ([&alpha;]<sub>D</sub> = -92.4&deg;). Because the laevorotation of fructose exceeds the dextrorotation of glucose, the resulting hydrolysate is <b>laevorotatory ([&alpha;]<sub>D</sub> = -39.7&deg;)</b>. This optical sign reversal is called <b>Inversion of Sugar</b>, and the mixture is called <b>Invert Sugar</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Maltose &amp; Lactose (Reducing Disaccharides)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #00B0FF;">&bull; Maltose (Malt Sugar):</b> Composed of two <b>&alpha;-D-Glucose</b> units linked by an <b>&alpha;-1,4-glycosidic bond</b>. The hemiacetal group at C-1 of the second glucose unit is free &rarr; <b>Reducing Sugar</b>.<br>
        <b style="color: #00B0FF;">&bull; Lactose (Milk Sugar):</b> Composed of <b>&beta;-D-Galactose and &beta;-D-Glucose</b> joined by a <b>&beta;-1,4-glycosidic bond</b>. C-1 of glucose unit is free &rarr; <b>Reducing Sugar</b>.
      </div>
    </div>
  </div>

  ${card5}

  <!-- SECTION 5 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">5. Polysaccharides: Starch, Cellulose &amp; Glycogen</h2>

  <div style="background: rgba(0, 176, 255, 0.08); border-left: 4.5px solid #00B0FF; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #00B0FF; font-size: 16.5px; display: block; margin-bottom: 6px;">COMPARISON: Starch (Amylose vs Amylopectin), Cellulose &amp; Glycogen</b>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;">
      <b style="color: #00B0FF;">1. Starch (Plants Storage Polysaccharide, (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>):</b><br>
      &bull; <b>Amylose (15-20%):</b> Water-soluble linear unbranched polymer of &alpha;-D-glucose linked exclusively by <b>&alpha;-1,4-glycosidic bonds</b> (200-1000 units). Gives <b>deep blue colour with iodine</b>.<br>
      &bull; <b>Amylopectin (80-85%):</b> Water-insoluble branched polymer. Linear chains contain <b>&alpha;-1,4-glycosidic bonds</b>, while branching points occur every 20-25 glucose units via <b>&alpha;-1,6-glycosidic bonds</b>.<br><br>
      <b style="color: #00B0FF;">2. Cellulose (Plant Structural Material):</b> Linear unbranched polymer of <b>&beta;-D-Glucose</b> linked by <b>&beta;-1,4-glycosidic bonds</b>. Hydrogen bonding between adjacent parallel chains forms rigid, tensile microfibrils. Cannot be digested by humans due to lack of enzyme <i>cellulase</i>.<br><br>
      <b style="color: #00B0FF;">3. Glycogen (Animal Starch):</b> Primary carbohydrate storage in animal liver and muscles. Structurally similar to amylopectin but <b>much more highly branched</b> (branch points every 8-12 glucose units via &alpha;-1,6 bonds).
    </div>
  </div>

  ${card6}

  <!-- SECTION 6 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">6. Amino Acids: Classification, Zwitterion &amp; Isoelectric Point</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Essential vs Non-Essential Amino Acids</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #00B0FF;">&bull; Essential Amino Acids (10):</b> Cannot be synthesized by the human body and must be supplied in diet (Valine, Leucine, Isoleucine, Phenylalanine, Methionine, Tryptophan, Threonine, Lysine, Histidine, Arginine).<br>
        <b style="color: #00B0FF;">&bull; Non-Essential Amino Acids (10):</b> Can be synthesized in the human body from metabolic intermediates (Glycine, Alanine, Serine, Cysteine, Aspartic acid, Glutamic acid, Asparagine, Glutamine, Tyrosine, Proline).<br>
        <b style="color: #00B0FF;">&bull; Optical Activity:</b> All naturally occurring &alpha;-amino acids except <b>Glycine (H<sub>2</sub>N-CH<sub>2</sub>-COOH)</b> are optically active and possess the <b>L-configuration</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Zwitterion Structure &amp; Amphoteric Behaviour</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        In aqueous solution, the carboxyl group loses a proton and the amino group accepts a proton, forming an internal dipolar ion (<b>Zwitterion: H<sub>3</sub>N<sup>+</sup>-CHR-COO<sup>-</sup></b>).<br>
        <b style="color: #00B0FF;">&bull; Amphoteric Nature:</b> In acidic medium (low pH), zwitterion accepts a proton to form a cation (H<sub>3</sub>N<sup>+</sup>-CHR-COOH) migrating to cathode. In alkaline medium (high pH), it loses a proton to form an anion (H<sub>2</sub>N-CHR-COO<sup>-</sup>) migrating to anode.<br>
        <b style="color: #00B0FF;">&bull; Isoelectric Point (pI):</b> The intermediate pH at which the dipolar zwitterion has net zero charge and does not migrate towards either electrode in electrophoresis.
      </div>
    </div>
  </div>

  ${card7}

  <!-- SECTION 7 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">7. Proteins: 4 Structural Levels &amp; Denaturation</h2>

  ${card8}

  ${card9}

  <div style="background: rgba(0, 176, 255, 0.08); border-left: 4.5px solid #00B0FF; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #00B0FF; font-size: 16.5px; display: block; margin-bottom: 6px;">FOUR LEVELS OF PROTEIN ARCHITECTURE</b>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;">
      <b style="color: #00B0FF;">1. Primary Structure (1&deg;):</b> The exact linear sequence in which amino acids are joined by covalent peptide bonds (-CO-NH-). Any change in sequence disrupts biological activity (e.g. Sickle-cell anaemia where Glu is replaced by Val at position 6 of &beta;-chain).<br>
      <b style="color: #00B0FF;">2. Secondary Structure (2&deg;):</b> Conformation of polypeptide backbone stabilized by <b>Hydrogen Bonds</b> between &gt;C=O and -NH- groups:<br>
      &bull; <b>&alpha;-Helix:</b> Right-handed coil stabilized by <b>intramolecular H-bonds</b> between C=O of amino acid n and N-H of amino acid (n+4) (e.g. &alpha;-Keratin in hair, wool).<br>
      &bull; <b>&beta;-Pleated Sheet:</b> Polypeptide chains lie side by side in parallel or antiparallel sheets held by <b>intermolecular H-bonds</b> (e.g. Silk fibroin).<br>
      <b style="color: #00B0FF;">3. Tertiary Structure (3&deg;):</b> Overall three-dimensional folding of polypeptide chains giving <b>Fibrous</b> (insoluble, structural: collagen, keratin) or <b>Globular</b> (soluble, functional: enzymes, myoglobin, insulin) shapes, stabilized by <b>disulfide bonds (-S-S-), ionic bonds/salt bridges, hydrophobic interactions, and H-bonds</b>.<br>
      <b style="color: #00B0FF;">4. Quaternary Structure (4&deg;):</b> Spatial arrangement and assembly of two or more independent polypeptide subunits (e.g. <b>Haemoglobin</b> consisting of 4 subunits: 2&alpha; + 2&beta; chains).
    </div>
  </div>

  ${card10}

  <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px; margin: 18px 0;">
    <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">Denaturation of Proteins</b>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When a native protein is subjected to physical change (heat) or chemical change (pH change, salts), hydrogen bonds and tertiary interactions are disrupted; globules unfold, helices uncoil, and the protein precipitates with complete loss of biological activity.<br>
      <b style="color: #00B0FF;">CRUCIAL BOARD POINT:</b> During denaturation, <b>Secondary (2&deg;), Tertiary (3&deg;), and Quaternary (4&deg;) structures are completely destroyed, but the Primary (1&deg;) covalent peptide structure remains 100% intact</b>.<br>
      <i>Examples: Coagulation of egg white (albumin) upon boiling; Curdling of milk (lactic acid bacteria lower pH causing precipitation of casein).</i>
    </div>
  </div>

  <!-- SECTION 8 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">8. Enzymes, Lipids &amp; Hormones</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">1. Enzymes (Biocatalysts)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Proteins that catalyze biochemical reactions with immense efficiency (rate enhancement of 10<sup>8</sup> &mdash; 10<sup>20</sup> times) and strict substrate specificity by lowering activation energy via the lock-and-key / induced-fit mechanism. Optimal at body temperature (310 K) and physiological pH (7.4).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 176, 255, 0.35); border-left: 5px solid #00B0FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 6px;">2. Hormones (Chemical Messengers)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Molecules synthesized by endocrine ductless glands that regulate metabolic homeostasis:<br>
        <b style="color: #00B0FF;">&bull; Steroid Hormones:</b> Estrogens, Progesterone, Testosterone, Cortisone (contain cyclopentanoperhydrophenanthrene ring).<br>
        <b style="color: #00B0FF;">&bull; Peptide / Protein Hormones:</b> <b>Insulin</b> (51 amino acids, regulates blood glucose), Glucagon, Oxytocin.<br>
        <b style="color: #00B0FF;">&bull; Amine Derivatives:</b> Epinephrine (adrenaline, fight-or-flight response), Thyroxine (iodinated tyrosine, regulates basal metabolism).
      </div>
    </div>
  </div>

  <!-- SECTION 9 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">9. Nucleic Acids: Chemical Composition, DNA vs RNA &amp; Double Helix</h2>

  ${card11}

  ${card12}

  <div style="background: rgba(0, 176, 255, 0.08); border-left: 4.5px solid #00B0FF; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #00B0FF; font-size: 16.5px; display: block; margin-bottom: 6px;">CHEMICAL ANATOMY OF NUCLEIC ACIDS</b>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;">
      <b style="color: #00B0FF;">1. Three Fundamental Components:</b><br>
      &bull; <b>Pentose Sugar:</b> &beta;-D-2-deoxyribose (in DNA) vs &beta;-D-ribose (in RNA, has -OH at C-2&apos;).<br>
      &bull; <b>Nitrogenous Bases:</b> <b>Purines:</b> Adenine (A), Guanine (G). <b>Pyrimidines:</b> Cytosine (C), Thymine (T, DNA only), Uracil (U, RNA only).<br>
      &bull; <b>Phosphoric Acid:</b> Links nucleotides via <b>3&apos;-5&apos; phosphodiester bonds</b>.<br><br>
      <b style="color: #00B0FF;">2. Nucleoside vs Nucleotide:</b><br>
      &bull; <b>Nucleoside = Base + Sugar</b> (linked via &beta;-glycosidic bond at C-1&apos; of sugar).<br>
      &bull; <b>Nucleotide = Nucleoside + Phosphate</b> (esterified at C-5&apos; of sugar).<br><br>
      <b style="color: #00B0FF;">3. Watson-Crick Double Helix Model of DNA:</b><br>
      &bull; Two antiparallel polynucleotide strands (5&apos;&rarr;3&apos; and 3&apos;&rarr;5&apos;) wound around a common central axis.<br>
      &bull; <b>Complementary Base Pairing:</b> Adenine pairs exclusively with Thymine via <b>2 Hydrogen Bonds (A=T)</b>; Guanine pairs exclusively with Cytosine via <b>3 Hydrogen Bonds (G&equiv;C)</b>.<br>
      &bull; Pitch of helix = 3.4 nm containing 10 base pairs per turn (distance between adjacent base pairs = 0.34 nm).
    </div>
  </div>

  ${card13}

  <!-- SECTION 10 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">10. Vitamins: Classification, Sources &amp; Deficiency Diseases</h2>

  ${card14}

  <div style="background: rgba(0, 176, 255, 0.08); border-left: 4.5px solid #00B0FF; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #00B0FF; font-size: 16.5px; display: block; margin-bottom: 6px;">COMPLETE BOARD VITAMIN MATRIX</b>
    <div style="color: #FFFFFF; font-size: 14.5px; line-height: 1.7; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;">
      <b style="color: #00B0FF;">FAT-SOLUBLE VITAMINS:</b><br>
      &bull; <b>Vitamin A (Retinol):</b> Carrots, butter, fish liver oil &bull; <i>Deficiency:</i> <b>Night Blindness, Xerophthalmia (keratinisation of cornea)</b>.<br>
      &bull; <b>Vitamin D (Calciferol):</b> Sunlight, egg yolk, fish liver oil &bull; <i>Deficiency:</i> <b>Rickets (in children), Osteomalacia (soft bones in adults)</b>.<br>
      &bull; <b>Vitamin E (Tocopherol):</b> Wheat germ oil, sunflower oil &bull; <i>Deficiency:</i> <b>Muscular weakness, increased fragility of RBCs, Sterility</b>.<br>
      &bull; <b>Vitamin K (Phylloquinone):</b> Green leafy vegetables &bull; <i>Deficiency:</i> <b>Increased blood clotting time, Haemorrhagic disease</b>.<br><br>

      <b style="color: #00B0FF;">WATER-SOLUBLE VITAMINS:</b><br>
      &bull; <b>Vitamin B<sub>1</sub> (Thiamine):</b> Yeast, whole grains &bull; <i>Deficiency:</i> <b>Beriberi (loss of appetite, muscular weakness)</b>.<br>
      &bull; <b>Vitamin B<sub>2</sub> (Riboflavin):</b> Milk, egg white, liver &bull; <i>Deficiency:</i> <b>Cheilosis (fissuring at corners of mouth), glossitis</b>.<br>
      &bull; <b>Vitamin B<sub>3</sub> (Niacin / Nicotinic acid):</b> Meat, fish &bull; <i>Deficiency:</i> <b>Pellagra (dermatitis, diarrhoea, dementia)</b>.<br>
      &bull; <b>Vitamin B<sub>6</sub> (Pyridoxine):</b> Cereals, gram &bull; <i>Deficiency:</i> <b>Convulsions</b>.<br>
      &bull; <b>Vitamin B<sub>12</sub> (Cyanocobalamin - contains Cobalt):</b> Meat, fish, egg (not present in plants!) &bull; <i>Deficiency:</i> <b>Pernicious Anaemia (RBC deficiency in haemoglobin)</b>.<br>
      &bull; <b>Vitamin C (Ascorbic acid):</b> Citrus fruits, amla, tomato &bull; <i>Deficiency:</i> <b>Scurvy (bleeding gums, delayed wound healing)</b>.
    </div>
  </div>

  <!-- SECTION 11 -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 36px;">11. Master Revision Formula &amp; Biomolecules Summary Cheat Sheet</h2>

  <div style="background: rgba(0, 176, 255, 0.05); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">1. Master Biomolecule Linkages &amp; Units:</b>
      <b style="color: #00B0FF;">&bull; Sucrose:</b> &alpha;-D-Glucopyranose + &beta;-D-Fructofuranose (&alpha;-1,&beta;-2 bond) &bull; Non-reducing &bull; Invert sugar ([&alpha;]<sub>D</sub>: +66.5&deg; &rarr; -39.7&deg;).<br>
      <b style="color: #00B0FF;">&bull; Maltose:</b> &alpha;-D-Glucose + &alpha;-D-Glucose (&alpha;-1,4 bond) &bull; Reducing sugar.<br>
      <b style="color: #00B0FF;">&bull; Lactose:</b> &beta;-D-Galactose + &beta;-D-Glucose (&beta;-1,4 bond) &bull; Reducing sugar.<br>
      <b style="color: #00B0FF;">&bull; Starch:</b> Amylose (&alpha;-1,4 linear) + Amylopectin (&alpha;-1,4 linear and &alpha;-1,6 branched).<br>
      <b style="color: #00B0FF;">&bull; Cellulose:</b> &beta;-D-Glucose (&beta;-1,4 linear).<br>
      <b style="color: #00B0FF;">&bull; Protein:</b> Amino acids linked by peptide bonds (-CO-NH-).<br>
      <b style="color: #00B0FF;">&bull; Nucleic Acids:</b> Nucleotides linked by 3&apos;-5&apos; phosphodiester bonds.<br><br>

      <b style="color: #00B0FF; font-size: 16px; display: block; margin-bottom: 4px;">2. Diagnostic Distinction Matrix:</b>
      <b style="color: #00B0FF;">&bull; DNA vs RNA:</b> 2-Deoxyribose (DNA) vs Ribose (RNA); Thymine (DNA) vs Uracil (RNA); Double helix (DNA) vs Single strand (RNA).<br>
      <b style="color: #00B0FF;">&bull; Base Pairing:</b> A=T (2 H-bonds) and G&equiv;C (3 H-bonds).<br>
      <b style="color: #00B0FF;">&bull; Denaturation:</b> Destroys 2&deg;, 3&deg;, 4&deg; protein structures; 1&deg; primary sequence remains intact.
    </div>
  </div>

</div>
`;

// Read existing solutions and mcqs
const existingContent = fs.readFileSync('client/data/content/c12-chem-10.ts', 'utf8');

const solMatch = existingContent.match(/export const c12Chem10HtmlSolutions = ([\s\S]*?);\n\nexport const c12Chem10Mcqs/);
if (!solMatch) {
  console.error("Could not find c12Chem10HtmlSolutions");
  process.exit(1);
}
const solutionsHtmlString = solMatch[1];

const mcqMatch = existingContent.match(/export const c12Chem10Mcqs = (\[[\s\S]*?\]);\n/);
if (!mcqMatch) {
  console.error("Could not find c12Chem10Mcqs");
  process.exit(1);
}
const mcqsString = mcqMatch[1];

const finalFileContent = `// Class 12 Chemistry Unit X: Biomolecules (Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem10HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c12Chem10HtmlSolutions = ${solutionsHtmlString};

export const c12Chem10Mcqs = ${mcqsString};
`;

fs.writeFileSync('client/data/content/c12-chem-10.ts', finalFileContent, 'utf8');
console.log('Successfully updated client/data/content/c12-chem-10.ts with all 14 diagrams!');
