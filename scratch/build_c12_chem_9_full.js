const fs = require('fs');
const path = require('path');

const userUploadedDir = 'C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\944a3b30-06dc-4c2c-9bec-91424ca2bb43\\.user_uploaded';

const imageFiles = {
  physProps: 'media_1788276888721.jpg',   // 1. Physical Properties
  basicNature: 'media_1788276888884.jpg', // 2. Basic Nature
  alkylation: 'media_1788276889088.jpg',  // 3. Alkylation
  classStruct: 'media_1788276889316.jpg', // 4. Classification & Structure
  preparation: 'media_1788276889395.jpg', // 5. Preparation
  acylation: 'media_1788277006981.jpg',   // 6. Acylation
  carbylamine: 'media_1788277007031.jpg', // 7. Carbylamine Reaction
  diazoPrep: 'media_1788277007365.jpg',   // 8. Diazonium Salts Preparation
  diazoRxns: 'media_1788277007603.jpg',   // 9. Diazonium Salt Reactions
  importance: 'media_1788277007701.jpg'   // 10. Synthetic Importance
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
  return `<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 23, 68, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
    <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${alt}" />
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 ${caption}
  </div>
</div>`;
}

const card1 = makeCard(
  b64Map.classStruct,
  "<b>Classification &amp; Pyramidal Geometry of Amines:</b> Primary (1&deg;, R-NH<sub>2</sub>; Methylamine), Secondary (2&deg;, R-NH-R'; Dimethylamine), Tertiary (3&deg;, R-N(R')R''; Trimethylamine), and Quaternary ammonium salts with 3D spatial models. Nitrogen is sp<sup>3</sup> hybridised (trigonal pyramidal with bond angle &approx; 107&deg;) and retains an active lone pair responsible for basicity.",
  "Classification and Structure of Amines"
);

const card2 = makeCard(
  b64Map.physProps,
  "<b>Physical Properties &amp; Intermolecular H-Bonding in Amines:</b> Lower members are gases, middle liquids, and higher solids. Extensive N-H&middot;&middot;&middot;N intermolecular hydrogen bonding creates higher boiling points (1&deg; &gt; 2&deg; &gt; 3&deg;) and water solubility for lower homologs.",
  "Physical Properties and Hydrogen Bonding in Amines"
);

const card3 = makeCard(
  b64Map.basicNature,
  "<b>Basicity of Amines &amp; Aqueous Equilibrium:</b> R-NH<sub>2</sub> + H<sub>2</sub>O &#8652; R-NH<sub>3</sub><sup>+</sup> + OH<sup>-</sup>. In aqueous solutions, basic strength follows <b>2&deg; amine &gt; 1&deg; amine &gt; 3&deg; amine &gt; NH<sub>3</sub></b> (methyl series) due to the composite interplay of +I inductive, hydration, and steric effects.",
  "Basicity and Strength of Amines in Water"
);

const card4 = makeCard(
  b64Map.preparation,
  "<b>Primary Synthetic Pathways to Amines:</b> (1) Nucleophilic substitution on alkyl halides with excess ethanolic ammonia, (2) Reduction of nitro compounds (R-NO<sub>2</sub> &rarr; R-NH<sub>2</sub>), (3) Hofmann Bromamide degradation of amides (R-CONH<sub>2</sub> + Br<sub>2</sub>/KOH &rarr; R-NH<sub>2</sub> + K<sub>2</sub>CO<sub>3</sub>), and (4) Nitrile reduction using LiAlH<sub>4</sub> or catalytic hydrogenation.",
  "Methods of Preparation of Amines"
);

const card5 = makeCard(
  b64Map.alkylation,
  "<b>Sequential Alkylation of Amines (Hofmann Ammonolysis):</b> Stepwise nucleophilic substitution on alkyl halides: 1&deg; amine (R-NH<sub>2</sub>) &rarr; 2&deg; amine (R-NHR') &rarr; 3&deg; amine (R-NR'<sub>2</sub>) &rarr; Quaternary ammonium salt ([R-NR'<sub>3</sub>]<sup>+</sup>X<sup>-</sup>).",
  "Alkylation and Quaternary Ammonium Salt Formation"
);

const card6 = makeCard(
  b64Map.acylation,
  "<b>Acylation of Amines:</b> Nucleophilic acyl substitution of primary amines with acyl chlorides (RCOCl) or acid anhydrides in the presence of pyridine/base to yield substituted amides (R-NHCOR + HCl).",
  "Acylation of Amines to Amides"
);

const card7 = makeCard(
  b64Map.carbylamine,
  "<b>Carbylamine Reaction (Diagnostic Test for 1&deg; Amines):</b> Heating primary aliphatic or aromatic amines with chloroform (CHCl<sub>3</sub>) and alcoholic KOH yields an intensely foul-smelling <b>Isocyanide / Carbylamine (R-NC)</b>. (2&deg; and 3&deg; amines give negative test).",
  "Carbylamine Reaction for Primary Amines"
);

const card8 = makeCard(
  b64Map.diazoPrep,
  "<b>Preparation and Mechanism of Diazonium Salts:</b> Primary aromatic amines (Aniline) undergo diazotisation with NaNO<sub>2</sub> + 2 HCl at <b>0 &ndash; 5 &deg;C (273 &ndash; 278 K)</b> via electrophilic nitrosonium ion (NO<sup>+</sup>) attack to produce Benzenediazonium chloride (C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>-</sup>).",
  "Diazonium Salts Preparation and Mechanism"
);

const card9 = makeCard(
  b64Map.diazoRxns,
  "<b>Key Chemical Reactions of Diazonium Salts:</b> (1) <b>Sandmeyer Reactions</b> (yielding Ar-Cl, Ar-Br, Ar-CN), (2) <b>Hydrolysis</b> to Phenol (Ar-OH) on warming with water, and (3) <b>Azo Coupling</b> with Phenol (pH 9-10) yielding p-hydroxyazobenzene (Orange Azo Dye).",
  "Chemical Reactions of Diazonium Salts"
);

const card10 = makeCard(
  b64Map.importance,
  "<b>Synthetic Importance of Diazonium Salts in Organic Chemistry:</b> Indispensable intermediates for synthesizing azo dyes, pharmaceuticals, agrochemical pesticides, substituted haloarenes, phenols, and biphenyls with complete orientation control.",
  "Importance of Diazonium Salts in Synthetic Organic Chemistry"
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
  <div style="background: rgba(255, 23, 68, 0.05); border: 1.5px solid #FF1744; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF1744; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #FF1744; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit IX: Organic Compounds Containing Nitrogen (Official Syllabus - 06 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF1744; border-radius: 6px;">
        <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">1. Amines &amp; Nitrogen Hybridisation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Amines are organic derivatives of ammonia (NH<sub>3</sub>) obtained by replacing one, two, or three hydrogen atoms with alkyl or aryl groups. The nitrogen atom is <b>sp<sup>3</sup> hybridised</b> with a trigonal pyramidal geometry and a C-N-H/C-N-C bond angle of &approx; 108&deg; due to unshared lone pair-bond pair repulsion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF1744; border-radius: 6px;">
        <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">2. Basicity Order of Aliphatic vs Aromatic Amines:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">In aqueous medium, basicity is governed by the combined interplay of inductive (+I), steric, and hydration effects: <b>(CH<sub>3</sub>)<sub>2</sub>NH (2&deg;) &gt; CH<sub>3</sub>NH<sub>2</sub> (1&deg;) &gt; (CH<sub>3</sub>)<sub>3</sub>N (3&deg;) &gt; NH<sub>3</sub></b> for methyl amines; and <b>(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH (2&deg;) &gt; (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N (3&deg;) &gt; C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub> (1&deg;) &gt; NH<sub>3</sub></b> for ethyl amines. Aniline is a far weaker base (pK<sub>b</sub> &approx; 9.38) because the nitrogen lone pair is delocalized into the benzene ring via resonance.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF1744; border-radius: 6px;">
        <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">3. Gabriel Phthalimide Synthesis:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A specific method for synthesizing pure <b>primary (1&deg;) aliphatic amines</b> by reacting potassium phthalimide with primary alkyl halides followed by alkaline hydrolysis. Aromatic primary amines (aniline) cannot be prepared by this method because aryl halides do not undergo S<sub>N</sub>2 nucleophilic substitution.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF1744; border-radius: 6px;">
        <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">4. Hoffmann Bromamide Degradation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Treatment of a primary acid amide with bromine in aqueous or ethanolic NaOH yields a <b>primary amine containing ONE LESS carbon atom</b> than the parent amide (R-CONH<sub>2</sub> + Br<sub>2</sub> + 4 NaOH &rarr; R-NH<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> + 2 NaBr + 2 H<sub>2</sub>O).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF1744; border-radius: 6px;">
        <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">5. Carbylamine (Isocyanide) Test:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Heating any <b>primary amine (aliphatic or aromatic)</b> with chloroform and alcoholic KOH produces an extremely foul-smelling <b>Isocyanide / Carbylamine (R-NC)</b>. Secondary (2&deg;) and tertiary (3&deg;) amines do not show this reaction.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF1744; border-radius: 6px;">
        <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">6. Hinsberg Test:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Reaction with <b>Benzenesulphonyl chloride (C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl)</b>: 1&deg; amines form sulfonamides with acidic N-H (soluble in alkali); 2&deg; amines form sulfonamides without acidic N-H (insoluble in alkali); 3&deg; amines do not react.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF1744; border-radius: 6px;">
        <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">7. Diazotisation &amp; Arenediazonium Salts:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Reaction of primary aromatic amines (aniline) with nitrous acid (NaNO<sub>2</sub> + HCl) at ice-cold temperatures (<b>273 &mdash; 278 K</b>) produces stable <b>Arenediazonium salts (Ar-N<sub>2</sub><sup>+</sup>Cl<sup>-</sup>)</b>, which serve as versatile synthetic intermediates for preparing aryl halides, cyanides, phenols, and azo dyes.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FF1744; border-bottom: 2px solid #FF1744; padding-bottom: 6px; margin-top: 30px;">1. Nomenclature &amp; Classification of Amines</h2>

  <p>Amines represent nitrogenous organic compounds derived from ammonia by stepwise replacement of hydrogen atoms with alkyl or aryl residues. They are classified into primary (1&deg;), secondary (2&deg;), tertiary (3&deg;) amines, and quaternary ammonium salts according to the degree of substitution at nitrogen.</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">1. Classification: 1&deg;, 2&deg;, 3&deg; Amines and Quaternary Salts</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Amines are classified according to the number of carbon groups attached directly to the nitrogen atom:<br>
        <b style="color: #FF1744;">&bull; Primary (1&deg;) Amines (-NH<sub>2</sub> group):</b> One alkyl/aryl group attached to nitrogen (e.g. CH<sub>3</sub>NH<sub>2</sub>, Methanamine; C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>, Aniline).<br>
        <b style="color: #FF1744;">&bull; Secondary (2&deg;) Amines (&gt;NH group):</b> Two alkyl/aryl groups attached to nitrogen (e.g. (CH<sub>3</sub>)<sub>2</sub>NH, N-Methylmethanamine; C<sub>6</sub>H<sub>5</sub>NHCH<sub>3</sub>, N-Methylaniline).<br>
        <b style="color: #FF1744;">&bull; Tertiary (3&deg;) Amines (&gt;N- group):</b> Three alkyl/aryl groups attached to nitrogen (e.g. (CH<sub>3</sub>)<sub>3</sub>N, N,N-Dimethylmethanamine).<br>
        <b style="color: #FF1744;">&bull; Quaternary Ammonium Salts [R<sub>4</sub>N]<sup>+</sup>X<sup>-</sup>:</b> Four alkyl/aryl groups bonded tetrahedrally to nitrogen with a formal positive charge.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">2. IUPAC Nomenclature Rules &amp; Worked Examples</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Aliphatic amines are named by replacing the terminal &apos;-e&apos; of the parent alkane with <b>&apos;-amine&apos;</b> (Alkanamine). For 2&deg; and 3&deg; amines, the largest alkyl chain is taken as parent, and other groups are specified with prefix <b>&apos;N-&apos;</b>.<br>
        <b style="color: #FF1744;">&bull; Examples:</b><br>
        1. <b>CH<sub>3</sub>-CH(NH<sub>2</sub>)-CH<sub>3</sub>:</b> Propan-2-amine.<br>
        2. <b>H<sub>2</sub>N-(CH<sub>2</sub>)<sub>6</sub>-NH<sub>2</sub>:</b> Hexane-1,6-diamine (Hexamethylenediamine).<br>
        3. <b>CH<sub>3</sub>-NH-CH<sub>2</sub>CH<sub>3</sub>:</b> N-Methylethanamine.<br>
        4. <b>(CH<sub>3</sub>CH<sub>2</sub>)<sub>2</sub>N-CH<sub>3</sub>:</b> N,N-Diethylethanamine / N-Ethyl-N-methylethanamine.<br>
        5. <b>p-CH<sub>3</sub>-C<sub>6</sub>H<sub>4</sub>-NH<sub>2</sub>:</b> 4-Methylaniline (p-Toluidine).<br>
        6. <b>C<sub>6</sub>H<sub>5</sub>-CH<sub>2</sub>-NH<sub>2</sub>:</b> Phenylmethanamine (Benzylamine).
      </div>
    </div>
  </div>

  ${card1}

  <!-- SECTION 2 -->
  <h2 style="color: #FF1744; border-bottom: 2px solid #FF1744; padding-bottom: 6px; margin-top: 36px;">2. Structure &amp; Basicity of Amines (Inductive, Steric &amp; Hydration Effects)</h2>

  <div style="background: rgba(255, 23, 68, 0.08); border-left: 4.5px solid #FF1744; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF1744; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 ELECTRONIC STRUCTURE &amp; MULTI-FACTOR BASICITY ANALYSIS</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">
      <b style="color: #FF1744;">1. Geometry &amp; Inversion:</b> Nitrogen is <b>sp<sup>3</sup> hybridised</b> with a pyramidal shape. The unshared electron pair occupies one sp<sup>3</sup> orbital. Amines undergo rapid umbrella-like <b>pyramidal inversion</b> (flipping frequency &approx; 10<sup>11</sup> s<sup>-1</sup>), making simple tertiary amines with three different alkyl groups non-resolvable into enantiomers.<br><br>
      <b style="color: #FF1744;">2. Basicity in Gaseous Phase (Inductive Effect Only):</b><br>
      In the gas phase without solvent, basicity strictly follows the electron-releasing (+I) power of alkyl groups:<br>
      <b>3&deg; Amine &gt; 2&deg; Amine &gt; 1&deg; Amine &gt; NH<sub>3</sub></b>.<br><br>
      <b style="color: #FF1744;">3. Basicity in Aqueous Medium (Combined 3 Factors):</b><br>
      In water, basicity is governed by the equilibrium: R-NH<sub>2</sub> + H<sub>2</sub>O &#8652; R-NH<sub>3</sub><sup>+</sup> + OH<sup>-</sup>.<br>
      The stability of substituted ammonium cation depends on three opposing effects:<br>
      &bull; <b>Inductive Effect (+I):</b> Stabilizes cation: 3&deg; &gt; 2&deg; &gt; 1&deg;.<br>
      &bull; <b>Hydration Effect (H-bonding with water):</b> More H-atoms on nitrogen give greater hydration energy: 1&deg; (3 H-bonds) &gt; 2&deg; (2 H-bonds) &gt; 3&deg; (1 H-bond).<br>
      &bull; <b>Steric Hindrance:</b> Bulky alkyl groups hinder hydration and proton attack: 1&deg; &lt; 2&deg; &lt; 3&deg;.<br>
      <b style="color: #FF1744;">&bull; Net Result for Methyl Amines:</b> <b>(CH<sub>3</sub>)<sub>2</sub>NH (2&deg;) &gt; CH<sub>3</sub>NH<sub>2</sub> (1&deg;) &gt; (CH<sub>3</sub>)<sub>3</sub>N (3&deg;) &gt; NH<sub>3</sub></b>.<br>
      <b style="color: #FF1744;">&bull; Net Result for Ethyl Amines:</b> <b>(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH (2&deg;) &gt; (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N (3&deg;) &gt; C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub> (1&deg;) &gt; NH<sub>3</sub></b>.
    </div>
  </div>

  ${card2}

  ${card3}

  <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px; margin: 18px 0;">
    <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">Why is Aniline a much weaker base than Aliphatic Amines?</b>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b>Resonance Delocalization:</b> In unprotonated aniline, the lone pair on nitrogen is delocalized over the ortho and para positions of the benzene ring through 5 canonical resonance structures, significantly lowering lone pair availability.<br>
      2. <b>Anilinium Cation Destabilization:</b> Upon protonation, the anilinium ion (C<sub>6</sub>H<sub>5</sub>-NH<sub>3</sub><sup>+</sup>) possesses only 2 resonance structures, meaning protonation results in loss of resonance energy.<br>
      3. <b>Substituent Effects:</b> Electron-donating groups (-OCH<sub>3</sub>, -CH<sub>3</sub>) increase basicity; Electron-withdrawing groups (-NO<sub>2</sub>, -CN, -X) sharply decrease basicity (p-Toluidine &gt; Aniline &gt; p-Nitroaniline).
    </div>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #FF1744; border-bottom: 2px solid #FF1744; padding-bottom: 6px; margin-top: 36px;">3. Methods of Preparation of Amines</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">1. Reduction of Nitro Compounds, Nitriles &amp; Amides</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF1744;">&bull; Reduction of Nitro Compounds:</b> R-NO<sub>2</sub> + 3 H<sub>2</sub> / Pd &rarr; R-NH<sub>2</sub> + 2 H<sub>2</sub>O. (Laboratory/industrial preference: <b>Fe + conc. HCl</b>, because FeCl<sub>2</sub> hydrolyzes to regenerate HCl, requiring only a catalytic amount of acid).<br>
        <b style="color: #FF1744;">&bull; Reduction of Nitriles (Mendius Reaction):</b> R-C&equiv;N + 2 H<sub>2</sub> / Ni &rarr; <b>R-CH<sub>2</sub>-NH<sub>2</sub></b> (Increases chain length by 1 carbon).<br>
        <b style="color: #FF1744;">&bull; Reduction of Amides:</b> R-CONH<sub>2</sub> + LiAlH<sub>4</sub> &rarr; (H<sub>2</sub>O) &rarr; <b>R-CH<sub>2</sub>-NH<sub>2</sub></b> (Same number of carbon atoms).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">2. Gabriel Phthalimide Synthesis (Pure 1&deg; Aliphatic Amines Only)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Phthalimide is treated with ethanolic KOH to form Potassium phthalimide, which reacts with a 1&deg; alkyl halide via S<sub>N</sub>2 to form N-alkylphthalimide. Subsequent alkaline hydrolysis with aqueous NaOH yields pure <b>Primary Aliphatic Amine</b> and Sodium phthalate.<br>
        <b style="color: #FF1744;">CRUCIAL BOARD TRAP:</b> Aromatic primary amines (aniline) <b>cannot be prepared</b> by Gabriel synthesis because aryl halides (chlorobenzene/bromobenzene) do not undergo S<sub>N</sub>2 displacement with phthalimide anion due to partial double bond character of C-X bond and steric repulsion from the &pi;-electron ring.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">3. Hoffmann Bromamide Degradation Reaction</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Heating a primary acid amide with bromine in aqueous or ethanolic NaOH causes decarbonylation, yielding a <b>Primary amine containing ONE LESS carbon atom</b> than the parent amide:<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 23, 68, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-CONH<sub>2</sub> + Br<sub>2</sub> + 4 NaOH &rarr; R-NH<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> + 2 NaBr + 2 H<sub>2</sub>O</div>
        <i>(The alkyl/aryl group migrates with retention of configuration from carbonyl carbon to nitrogen via an isocyanate intermediate R-N=C=O).</i>
      </div>
    </div>
  </div>

  ${card4}

  <!-- SECTION 4 -->
  <h2 style="color: #FF1744; border-bottom: 2px solid #FF1744; padding-bottom: 6px; margin-top: 36px;">4. Chemical Properties &amp; Diagnostic Distinction Tests of Amines</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">1. Carbylamine Reaction (Isocyanide Test for 1&deg; Amines)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Heating any primary amine with chloroform and alcoholic KOH yields an extremely offensive smelling <b>Carbylamine / Isocyanide (R-NC)</b>:<br>
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 23, 68, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 8px 0; font-size: 15px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">R-NH<sub>2</sub> + CHCl<sub>3</sub> + 3 KOH(alc.) &rarr; (&Delta;) &rarr; R-NC (Foul smell) + 3 KCl + 3 H<sub>2</sub>O</div>
        <i>(2&deg; and 3&deg; amines do not give this test &bull; exclusive diagnostic test for 1&deg; amines).</i>
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">2. Hinsberg Test for Distinction of 1&deg;, 2&deg;, and 3&deg; Amines</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Reagent: <b>Benzenesulphonyl chloride (C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl)</b>.<br>
        &bull; <b style="color: #FF1744;\">1&deg; Amine:</b> Forms N-alkylbenzenesulphonamide (C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NHR). The hydrogen on nitrogen is strongly acidic due to electron-withdrawing -SO<sub>2</sub>- group &rarr; <b>Dissolves in aqueous KOH</b>.<br>
        &bull; <b style="color: #FF1744;\">2&deg; Amine:</b> Forms N,N-dialkylbenzenesulphonamide (C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>NR<sub>2</sub>). Has no acidic hydrogen on nitrogen &rarr; <b>Insoluble in aqueous KOH</b>.<br>
        &bull; <b style="color: #FF1744;\">3&deg; Amine:</b> Has no hydrogen attached to nitrogen &rarr; <b>Does not react</b> (remains insoluble in alkali, dissolves in acid).
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">3. Reaction with Nitrous Acid (HNO<sub>2</sub>)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        &bull; <b style="color: #FF1744;">1&deg; Aliphatic Amines:</b> Form unstable alkyldiazonium salts which decompose quantitatively liberating <b>Nitrogen gas (N<sub>2</sub>&uarr;)</b> and a mixture of alcohols, alkenes, and alkyl halides.<br>
        &bull; <b style="color: #FF1744;">1&deg; Aromatic Amines (Aniline):</b> At 273&ndash;278 K, forms a stable <b>Benzenediazonium salt (C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>-</sup>)</b> (Diazotisation).<br>
        &bull; <b style="color: #FF1744;">2&deg; Amines:</b> Form yellow oily <b>N-Nitrosamines</b> (R<sub>2</sub>N-NO) which give Liebermann nitroso test.
      </div>
    </div>
  </div>

  ${card5}

  ${card6}

  ${card7}

  <!-- SECTION 5 -->
  <h2 style="color: #FF1744; border-bottom: 2px solid #FF1744; padding-bottom: 6px; margin-top: 36px;">5. Electrophilic Aromatic Substitution in Aniline</h2>

  <div style="background: rgba(255, 23, 68, 0.08); border-left: 4.5px solid #FF1744; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF1744; font-size: 16.5px; display: block; margin-bottom: 6px;">RING ACTIVATION, PROTECTION BY ACETYLATION &amp; ANOMALIES</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">
      <b style="color: #FF1744;">1. Bromination:</b> The -NH<sub>2</sub> group is exceptionally activating (+R effect). Aniline reacts instantly with bromine water without any catalyst to give a white precipitate of <b>2,4,6-Tribromoaniline</b>.<br>
      <i>To prepare monobromo derivative (4-bromoaniline), the amino group is first protected by acetylation with acetic anhydride/pyridine to acetanilide (reducing activation via amide resonance), brominated, and then hydrolysed.</i><br><br>
      <b style="color: #FF1744;">2. Nitration (The 47% Meta-Nitration Anomaly):</b> Direct nitration with conc. HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub> produces <b>51% para, 47% meta, and 2% ortho-nitroaniline</b>.<br>
      <i>Reason: In strongly acidic nitrating mixture, aniline is extensively protonated to the <b>Anilinium ion (-NH<sub>3</sub><sup>+</sup>)</b>, which is a strongly deactivating meta-directing group! To obtain p-nitroaniline selectively, the -NH<sub>2</sub> group is protected by acetylation before nitration.</i><br><br>
      <b style="color: #FF1744;">3. Sulphonation &amp; Zwitterion Formation:</b> Heating aniline with conc. H<sub>2</sub>SO<sub>4</sub> at 453&ndash;473 K forms <b>Sulphanilic acid (p-aminobenzenesulphonic acid)</b>, which exists as an internal dipolar <b>Zwitterion (H<sub>3</sub>N<sup>+</sup>-C<sub>6</sub>H<sub>4</sub>-SO<sub>3</sub><sup>-</sup>)</b>.<br><br>
      <b style="color: #FF1744;">4. Why Aniline Does NOT Undergo Friedel-Crafts Reaction:</b> Aniline is a Lewis base; its amino group forms a coordinate complex with the Lewis acid catalyst anhydrous AlCl<sub>3</sub> (-NH<sub>2</sub> &bull;&bull;&rarr; AlCl<sub>3</sub>), placing a formal positive charge on nitrogen which strongly deactivates the ring.
    </div>
  </div>

  <!-- SECTION 6 -->
  <h2 style="color: #FF1744; border-bottom: 2px solid #FF1744; padding-bottom: 6px; margin-top: 36px;">6. Cyanides (Nitriles) &amp; Isocyanides (Isonitriles)</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">1. Structures &amp; Formation from Alkyl Halides (KCN vs AgCN)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        Cyanide ion ([:C&equiv;N:]<sup>-</sup>) is an <b>ambident nucleophile</b> capable of attacking through carbon or nitrogen:<br>
        <b style="color: #FF1744;">&bull; With KCN (Ionic):</b> KCN ionizes into K<sup>+</sup> and CN<sup>-</sup>. Attack occurs predominantly through carbon because C-C bond is more stable than C-N bond, yielding <b>Alkyl cyanides (R-CN)</b> as major product.<br>
        <b style="color: #FF1744;">&bull; With AgCN (Covalent):</b> Ag-C bond is predominantly covalent; only the nitrogen lone pair is available for nucleophilic attack, yielding <b>Alkyl isocyanides (R-NC)</b> as major product.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 23, 68, 0.35); border-left: 5px solid #FF1744; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 6px;">2. Comparative Chemical Reactions of Cyanides vs Isocyanides</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: #FF1744;">&bull; Complete Hydrolysis:</b><br>
        &bull; R-CN + 2 H<sub>2</sub>O + H<sup>+</sup> &rarr; <b>R-COOH (Carboxylic acid)</b> + NH<sub>4</sub><sup>+</sup>.<br>
        &bull; R-NC + 2 H<sub>2</sub>O + H<sup>+</sup> &rarr; <b>R-NH<sub>2</sub> (1&deg; Amine)</b> + HCOOH (Formic acid).<br><br>
        <b style="color: #FF1744;">&bull; Reduction:</b><br>
        &bull; R-CN + 4 [H] (LiAlH<sub>4</sub> or Na/EtOH) &rarr; <b>R-CH<sub>2</sub>-NH<sub>2</sub> (1&deg; Amine)</b>.<br>
        &bull; R-NC + 4 [H] (LiAlH<sub>4</sub> or H<sub>2</sub>/Ni) &rarr; <b>R-NH-CH<sub>3</sub> (Secondary Amine with methyl group)</b>.
      </div>
    </div>
  </div>

  <!-- SECTION 7 -->
  <h2 style="color: #FF1744; border-bottom: 2px solid #FF1744; padding-bottom: 6px; margin-top: 36px;">7. Diazonium Salts: Preparation, Mechanism &amp; Synthetic Importance</h2>

  <div style="background: rgba(255, 23, 68, 0.08); border-left: 4.5px solid #FF1744; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF1744; font-size: 16.5px; display: block; margin-bottom: 6px;">MECHANISM OF DIAZOTISATION &amp; REACTION ARSENAL</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.75;">
      <b style="color: #FF1744;">1. Preparation &amp; Mechanism (273 &mdash; 278 K):</b><br>
      NaNO<sub>2</sub> + HCl &rarr; HNO<sub>2</sub> + NaCl. Protonation yields nitrosonium ion (:N=O<sup>+</sup>), which attacks aniline: C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + NO<sup>+</sup> &rarr; C<sub>6</sub>H<sub>5</sub>-NH<sub>2</sub><sup>+</sup>-NO &rarr; C<sub>6</sub>H<sub>5</sub>-N=N-OH &rarr; (H<sup>+</sup>, -H<sub>2</sub>O) &rarr; <b>C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>-</sup> (Benzenediazonium chloride)</b>.<br><br>

      <b style="color: #FF1744;">2. Replacement Reactions (Loss of N<sub>2</sub>):</b><br>
      &bull; <b>Sandmeyer Reaction:</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + Cu<sub>2</sub>Cl<sub>2</sub>/HCl &rarr; <b>Ar-Cl</b>; Cu<sub>2</sub>Br<sub>2</sub>/HBr &rarr; <b>Ar-Br</b>; CuCN/KCN &rarr; <b>Ar-CN</b>.<br>
      &bull; <b>Gattermann Reaction:</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + Cu powder / HCl &rarr; <b>Ar-Cl</b>; Cu powder / HBr &rarr; <b>Ar-Br</b>.<br>
      &bull; <b>Iodination:</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + KI &rarr; <b>Ar-I</b> + N<sub>2</sub>&uarr; + KCl.<br>
      &bull; <b>Balz-Schiemann Reaction:</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + HBF<sub>4</sub> &rarr; ArN<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>-</sup> &rarr; (&Delta;) &rarr; <b>Ar-F (Fluorobenzene)</b> + BF<sub>3</sub> + N<sub>2</sub>&uarr;.<br>
      &bull; <b>Deamination (Replacement by -H):</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + H<sub>3</sub>PO<sub>2</sub> + H<sub>2</sub>O &rarr; (Cu<sup>+</sup>) &rarr; <b>Ar-H (Benzene)</b> + H<sub>3</sub>PO<sub>3</sub> + HCl + N<sub>2</sub>&uarr; (or with CH<sub>3</sub>CH<sub>2</sub>OH &rarr; Ar-H + CH<sub>3</sub>CHO).<br>
      &bull; <b>Hydrolysis to Phenol:</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + H<sub>2</sub>O &rarr; (Warm / 373 K) &rarr; <b>Ar-OH (Phenol)</b> + N<sub>2</sub>&uarr; + HCl.<br>
      &bull; <b>Nitration:</b> ArN<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>-</sup> + NaNO<sub>2</sub> / Cu &rarr; (&Delta;) &rarr; <b>Ar-NO<sub>2</sub> (Nitrobenzene)</b> + N<sub>2</sub> + NaBF<sub>4</sub>.<br><br>

      <b style="color: #FF1744;">3. Azo Coupling Reactions (Retention of Diazo Group):</b><br>
      &bull; <b>Coupling with Phenol (pH 9-10 / 273-278 K):</b> C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + C<sub>6</sub>H<sub>5</sub>OH &rarr; <b>p-Hydroxyazobenzene (Orange Azo Dye)</b>.<br>
      &bull; <b>Coupling with Aniline (pH 4-5 / 273-278 K):</b> C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> &rarr; <b>p-Aminoazobenzene (Yellow Azo Dye)</b>.
    </div>
  </div>

  ${card8}

  ${card9}

  ${card10}

  <!-- SECTION 8 -->
  <h2 style="color: #FF1744; border-bottom: 2px solid #FF1744; padding-bottom: 6px; margin-top: 36px;">8. Master Revision Formula &amp; Named Reactions Cheat Sheet</h2>

  <div style="background: rgba(255, 23, 68, 0.05); border: 1.5px solid rgba(255, 23, 68, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">1. Master Named Reactions Matrix:</b>
      <b style="color: #FF1744;\">&bull; Gabriel Phthalimide:</b> Phthalimide &rarr; (KOH) &rarr; Potassium phthalimide + 1&deg; R-X &rarr; (aq. NaOH) &rarr; 1&deg; Aliphatic Amine.<br>
      <b style="color: #FF1744;\">&bull; Hoffmann Bromamide:</b> R-CONH<sub>2</sub> + Br<sub>2</sub> + 4 NaOH &rarr; R-NH<sub>2</sub> (1 less carbon) + Na<sub>2</sub>CO<sub>3</sub>.<br>
      <b style="color: #FF1744;\">&bull; Carbylamine Test:</b> 1&deg; Amine + CHCl<sub>3</sub> + 3 alc. KOH &rarr; R-NC (Foul smell) + 3 KCl.<br>
      <b style="color: #FF1744;\">&bull; Sandmeyer:</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + Cu<sub>2</sub>Cl<sub>2</sub>/HCl &rarr; Ar-Cl; Cu<sub>2</sub>Br<sub>2</sub>/HBr &rarr; Ar-Br; CuCN/KCN &rarr; Ar-CN.<br>
      <b style="color: #FF1744;\">&bull; Balz-Schiemann:</b> ArN<sub>2</sub><sup>+</sup>Cl<sup>-</sup> + HBF<sub>4</sub> &rarr; ArN<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>-</sup> &rarr; (&Delta;) &rarr; Ar-F + BF<sub>3</sub> + N<sub>2</sub>&uarr;.<br>
      <b style="color: #FF1744;\">&bull; Azo Coupling:</b> Diazonium salt + Phenol (pH 9-10) &rarr; Orange dye; + Aniline (pH 4-5) &rarr; Yellow dye.<br><br>

      <b style="color: #FF1744; font-size: 16px; display: block; margin-bottom: 4px;">2. Diagnostic Distinction Matrix:</b>
      <b style="color: #FF1744;\">&bull; Carbylamine Test:</b> 1&deg; Amines (Foul smell of isocyanide) | 2&deg; &amp; 3&deg; Amines (No reaction).<br>
      <b style="color: #FF1744;\">&bull; Hinsberg Test:</b> 1&deg; (Soluble in KOH) | 2&deg; (Insoluble in KOH) | 3&deg; (No reaction).<br>
      <b style="color: #FF1744;\">&bull; Azo Dye Test:</b> 1&deg; Aromatic amine (Orange/red dye with &beta;-naphthol) | 1&deg; Aliphatic amine (N<sub>2</sub> gas evolution, no dye).<br>
      <b style="color: #FF1744;\">&bull; Basicity Order (Aqueous):</b> (C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH &gt; (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N &gt; C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub> &gt; NH<sub>3</sub> &gt; Aniline.
    </div>
  </div>

</div>
`;

// Read existing solutions and mcqs
const existingContent = fs.readFileSync('client/data/content/c12-chem-9.ts', 'utf8');

const solMatch = existingContent.match(/export const c12Chem9HtmlSolutions = ([\s\S]*?);\n\nexport const c12Chem9Mcqs/);
if (!solMatch) {
  console.error("Could not find c12Chem9HtmlSolutions");
  process.exit(1);
}
const solutionsHtmlString = solMatch[1];

const mcqMatch = existingContent.match(/export const c12Chem9Mcqs = (\[[\s\S]*?\]);\n/);
if (!mcqMatch) {
  console.error("Could not find c12Chem9Mcqs");
  process.exit(1);
}
const mcqsString = mcqMatch[1];

const finalFileContent = `// Class 12 Chemistry Unit IX: Organic Compounds Containing Nitrogen (Official Syllabus - 06 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem9HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c12Chem9HtmlSolutions = ${solutionsHtmlString};

export const c12Chem9Mcqs = ${mcqsString};
`;

fs.writeFileSync('client/data/content/c12-chem-9.ts', finalFileContent, 'utf8');
console.log('Successfully updated client/data/content/c12-chem-9.ts with all 10 diagrams!');
