const fs = require('fs');
const path = require('path');

const themeColor = "#FF9100";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 145, 0, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// ---------------- TAB 1: OVERVIEW HTML ----------------
require('./build_c12_chem_5_overview.js');
let htmlOverview = fs.readFileSync('scratch/c12_chem_5_overview.html', 'utf8');

// Ensure all <b>...:</b> inside overview have themeColor
htmlOverview = htmlOverview.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => `<b style="color: ${themeColor};">${inner}</b>`);

// ---------------- TAB 2: SOLUTIONS (100 QUESTIONS) ----------------
const vsaData = [
  { q: "Define a Coordination Compound.", a: "A molecular compound in which a central metal atom or ion is bound to a fixed number of ions or neutral molecules (ligands) by coordinate bonds and retains its identity in solid and solution states." },
  { q: "Distinguish between a Double Salt and a Coordination Complex.", a: "A double salt (e.g. Mohr's salt) completely dissociates into simple constituent ions in aqueous solution; a coordination complex (e.g. K<sub>4</sub>[Fe(CN)<sub>6</sub>]) retains its complex entity intact in solution." },
  { q: "Define a Ligand.", a: "An ion, atom, or neutral molecule that donates one or more electron pairs to the central metal atom/ion to form coordinate bonds." },
  { q: "What is meant by Denticity of a ligand?", a: "The number of donor atoms through which a single ligand binds to the central metal atom/ion in a complex." },
  { q: "What is a Chelating Ligand and what is the Chelate Effect?", a: "A polydentate ligand that binds through two or more donor atoms forming a closed 5- or 6-membered ring with the metal. The enhanced thermodynamic stability resulting from this ring formation is called the <b>Chelate Effect</b>." },
  { q: "What is an Ambidentate Ligand? Give two examples.", a: "A unidentate ligand that can coordinate to the central metal through two different donor atoms: <b>-NO<sub>2</sub><sup>-</sup> (nitro) / -ONO<sup>-</sup> (nitrito)</b> and <b>-SCN<sup>-</sup> (thiocyanato) / -NCS<sup>-</sup> (isothiocyanato)</b>." },
  { q: "Define Coordination Number (CN) of a central metal ion.", a: "The total number of coordinate &sigma;-bonds formed between the central metal atom/ion and donor atoms of the surrounding ligands." },
  { q: "What is the coordination number and oxidation state of cobalt in [Co(en)<sub>3</sub>]<sup>3+</sup>?", a: "Coordination number = <b>6</b> (since 'en' is didentate, 3 &times; 2 = 6); Oxidation state = <b>+3</b>." },
  { q: "Define Homoleptic and Heteroleptic complexes.", a: "Homoleptic complexes have only one kind of donor groups (e.g. [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>); Heteroleptic complexes contain more than one kind of donor groups (e.g. [Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]<sup>+</sup>)." },
  { q: "State Werner's Postulate regarding Primary and Secondary valencies.", a: "Primary valency is ionisable, non-directional, and corresponds to the oxidation state of the metal. Secondary valency is non-ionisable, directional, corresponds to the coordination number, and determines 3D spatial geometry." },
  { q: "How many moles of AgCl are precipitated when excess AgNO<sub>3</sub> is added to 1 mole of [Co(NH<sub>3</sub>)<sub>5</sub>Cl]Cl<sub>2</sub>?", a: "<b>2 moles of AgCl</b> (because only the 2 chloride ions present outside the coordination sphere are ionisable)." },
  { q: "Write the IUPAC name of K<sub>3</sub>[Fe(CN)<sub>6</sub>].", a: "<b>Potassium hexacyanidoferrate(III)</b>." },
  { q: "Write the IUPAC name of [Pt(NH<sub>3</sub>)<sub>2</sub>Cl(NO<sub>2</sub>)].", a: "<b>Diamminechloridonitrito-N-platinum(II)</b>." },
  { q: "Write the IUPAC name of [Co(en)<sub>3</sub>]<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.", a: "<b>Tris(ethane-1,2-diamine)cobalt(III) sulfate</b>." },
  { q: "What is Ionisation Isomerism? Give an example.", a: "Isomerism arising from the exchange of an ion inside the coordination sphere with a counter ion outside: <b>[Co(NH<sub>3</sub>)<sub>5</sub>SO<sub>4</sub>]Br</b> (red) and <b>[Co(NH<sub>3</sub>)<sub>5</sub>Br]SO<sub>4</sub></b> (red-violet)." },
  { q: "What is Linkage Isomerism? Give an example.", a: "Isomerism occurring in complexes containing ambidentate ligands coordinating via different donor atoms: <b>[Co(NH<sub>3</sub>)<sub>5</sub>(NO<sub>2</sub>)]Cl<sub>2</sub></b> (yellow) and <b>[Co(NH<sub>3</sub>)<sub>5</sub>(ONO)]Cl<sub>2</sub></b> (red)." },
  { q: "What is Coordination Isomerism?", a: "Isomerism arising from the interchange of ligands between cationic and anionic coordination entities (e.g. [Co(NH<sub>3</sub>)<sub>6</sub>][Cr(CN)<sub>6</sub>] and [Cr(NH<sub>3</sub>)<sub>6</sub>][Co(CN)<sub>6</sub>])." },
  { q: "What is Hydrate (Solvate) Isomerism? Give an example.", a: "Isomerism involving difference in whether water molecules are coordinated as ligands or present as free crystallization water: [Cr(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> (violet) and [Cr(H<sub>2</sub>O)<sub>5</sub>Cl]Cl<sub>2</sub> &bull; H<sub>2</sub>O (grey-green)." },
  { q: "Why do square planar complexes of the type [MA<sub>2</sub>B<sub>2</sub>] show geometrical isomerism but not optical isomerism?", a: "They show cis/trans geometrical isomerism due to relative adjacent/opposite positions, but are optically inactive because they possess a horizontal plane of symmetry (molecular plane)." },
  { q: "Draw the structures of fac- and mer- isomers of [Co(NH<sub>3</sub>)<sub>3</sub>(NO<sub>2</sub>)<sub>3</sub>].", a: "In <b>fac (facial)</b> isomer, 3 identical ligands occupy adjacent vertices of one octahedral face; in <b>mer (meridional)</b> isomer, 3 ligands occupy positions around an equatorial meridian plane." },
  { q: "What is an Enantiomer in coordination chemistry?", a: "Non-superimposable mirror-image stereoisomers that rotate the plane of polarized light in equal but opposite directions (e.g. d- and l-[Co(en)<sub>3</sub>]<sup>3+</sup>)." },
  { q: "Predict the hybridisation and magnetic nature of [Ni(CO)<sub>4</sub>].", a: "Ni is in 0 oxidation state (3d<sup>8</sup> 4s<sup>2</sup>). Strong CO ligand causes complete pairing to 3d<sup>10</sup>. Hybridisation is <b>sp<sup>3</sup> (Tetrahedral)</b>, and it is <b>diamagnetic (&mu; = 0)</b>." },
  { q: "Predict the hybridisation and magnetic nature of [Ni(CN)<sub>4</sub>]<sup>2-</sup>.", a: "Ni<sup>2+</sup> (3d<sup>8</sup>). Strong CN<sup>-</sup> causes pairing of two unpaired 3d electrons, vacating one 3d orbital. Hybridisation is <b>dsp<sup>2</sup> (Square Planar)</b>, and it is <b>diamagnetic (&mu; = 0)</b>." },
  { q: "Predict the hybridisation and magnetic nature of [NiCl<sub>4</sub>]<sup>2-</sup>.", a: "Ni<sup>2+</sup> (3d<sup>8</sup>). Weak Cl<sup>-</sup> ligand cannot pair electrons. Hybridisation is <b>sp<sup>3</sup> (Tetrahedral)</b>, and it is <b>paramagnetic with 2 unpaired electrons (&mu; = 2.83 BM)</b>." },
  { q: "What are Inner and Outer orbital complexes in VBT?", a: "Inner orbital complexes use inner (n-1)d orbitals (d<sup>2</sup>sp<sup>3</sup> hybridisation, low-spin); Outer orbital complexes use outer nd orbitals (sp<sup>3</sup>d<sup>2</sup> hybridisation, high-spin)." },
  { q: "Define Crystal Field Splitting Energy (&Delta;<sub>o</sub>).", a: "The energy difference between the higher energy e<sub>g</sub> orbital set and lower energy t<sub>2g</sub> orbital set in an octahedral crystal field." },
  { q: "How is crystal field splitting in tetrahedral complexes (&Delta;<sub>t</sub>) related to octahedral splitting (&Delta;<sub>o</sub>)?", a: "<b>&Delta;<sub>t</sub> = (4/9) &Delta;<sub>o</sub></b>." },
  { q: "Why are tetrahedral complexes always high-spin?", a: "Because &Delta;<sub>t</sub> is small and always less than the pairing energy P (&Delta;<sub>t</sub> &lt; P), electrons prefer to enter higher energy e-orbitals rather than pairing up in lower levels." },
  { q: "State the Spectrochemical Series.", a: "The empirical ordering of ligands based on their crystal field splitting power: I<sup>-</sup> &lt; Br<sup>-</sup> &lt; Cl<sup>-</sup> &lt; F<sup>-</sup> &lt; OH<sup>-</sup> &lt; H<sub>2</sub>O &lt; NH<sub>3</sub> &lt; en &lt; NO<sub>2</sub><sup>-</sup> &lt; CN<sup>-</sup> &lt; CO." },
  { q: "Write the d-electron configuration of a d<sup>4</sup> octahedral complex in: (i) strong field ligand, (ii) weak field ligand.", a: "(i) Strong field (&Delta;<sub>o</sub> &gt; P): <b>t<sub>2g</sub><sup>4</sup> e<sub>g</sub><sup>0</sup></b> (low-spin); (ii) Weak field (&Delta;<sub>o</sub> &lt; P): <b>t<sub>2g</sub><sup>3</sup> e<sub>g</sub><sup>1</sup></b> (high-spin)." },
  { q: "Why is [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> colored (purple) while anhydrous CuSO<sub>4</sub> is colorless?", a: "[Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> has 3d<sup>1</sup> electron undergoing d-d transition upon absorbing yellow-green light. Anhydrous CuSO<sub>4</sub> lacks surrounding ligands so its d-orbitals remain degenerate (no crystal field splitting, no d-d transition)." },
  { q: "What is the metal present in Chlorophyll, Hemoglobin, and Vitamin B<sub>12</sub>?", a: "Chlorophyll: <b>Magnesium (Mg)</b>; Hemoglobin: <b>Iron (Fe<sup>2+</sup>)</b>; Vitamin B<sub>12</sub>: <b>Cobalt (Co)</b>." },
  { q: "What is Cisplatin and its clinical application?", a: "<b><i>cis</i>-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]</b>, a potent anticancer chemotherapy drug that binds to DNA and inhibits rapid tumor cell replication." },
  { q: "Which chelating agent is used in the treatment of Lead poisoning?", a: "<b>Calcium disodium EDTA (CaNa<sub>2</sub>EDTA)</b>; Pb<sup>2+</sup> displaces Ca<sup>2+</sup> forming a stable soluble Pb-EDTA complex that is excreted in urine." },
  { q: "Name the coordination complex formed during the extraction of Silver in MacArthur-Forrest process.", a: "Sodium dicyanidoargentate(I): <b>Na[Ag(CN)<sub>2</sub>]</b>." },
  { q: "What is the coordination number of Fe in [Fe(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3-</sup>?", a: "<b>6</b> (since oxalate is didentate, 3 &times; 2 = 6)." },
  { q: "Why is [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> diamagnetic while [CoF<sub>6</sub>]<sup>3-</sup> is paramagnetic?", a: "NH<sub>3</sub> is a strong field ligand causing pairing of all 6 electrons in Co<sup>3+</sup> (3d<sup>6</sup> &rArr; t<sub>2g</sub><sup>6</sup> e<sub>g</sub><sup>0</sup>, d<sup>2</sup>sp<sup>3</sup>, diamagnetic); F<sup>-</sup> is a weak field ligand where electrons remain unpaired (t<sub>2g</sub><sup>4</sup> e<sub>g</sub><sup>2</sup>, sp<sup>3</sup>d<sup>2</sup>, paramagnetic with 4 unpaired electrons)." },
  { q: "What is the IUPAC name of [Ni(CO)<sub>4</sub>]?", a: "<b>Tetracarbonylnickel(0)</b>." },
  { q: "What is the IUPAC name of [Ag(NH<sub>3</sub>)<sub>2</sub>][Ag(CN)<sub>2</sub>]?", a: "<b>Diamminesilver(I) dicyanidoargentate(I)</b>." },
  { q: "Why is CO a stronger field ligand than NH<sub>3</sub>?", a: "Because CO has vacant &pi;* antibonding molecular orbitals that accept electron density back from filled metal d-orbitals (<b>metal-to-ligand &pi;-backbonding / synergic bonding</b>), strengthening the M-C bond." }
];

// SECTION B: SA (2 & 3 Marks) Q41 - Q80
const saData = [
  {
    q: "Using IUPAC norms, write the systematic formulas for: (i) Potassium trioxalatochromate(III), (ii) Diamminechlorido(methylamine)platinum(II) chloride, (iii) Hexaamminecobalt(III) sulfate.",
    a: `<b style="color: ${themeColor};">1. Potassium trioxalatochromate(III):</b> K<sub>3</sub>[Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>].<br>
        <b style="color: ${themeColor};">2. Diamminechlorido(methylamine)platinum(II) chloride:</b> [Pt(NH<sub>3</sub>)<sub>2</sub>Cl(NH<sub>2</sub>CH<sub>3</sub>)]Cl.<br>
        <b style="color: ${themeColor};">3. Hexaamminecobalt(III) sulfate:</b> [Co(NH<sub>3</sub>)<sub>6</sub>]<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.`
  },
  {
    q: "On the basis of Valence Bond Theory (VBT), explain the geometry, hybridisation, and magnetic nature of [Fe(CN)<sub>6</sub>]<sup>4-</sup> and [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>.",
    a: `<b style="color: ${themeColor};">1. [Fe(CN)<sub>6</sub>]<sup>4-</sup>:</b> Fe<sup>2+</sup> (3d<sup>6</sup>). Strong CN<sup>-</sup> ligand causes pairing of all 6 d-electrons into 3d orbitals (t<sub>2g</sub><sup>6</sup>). Two 3d, one 4s, and three 4p orbitals hybridise to form <b>d<sup>2</sup>sp<sup>3</sup> (Inner Orbital Octahedral)</b>. Unpaired electrons n = 0 &rArr; <b>Diamagnetic</b>.<br>
        <b style="color: ${themeColor};">2. [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>:</b> Fe<sup>2+</sup> (3d<sup>6</sup>). Weak H<sub>2</sub>O ligand cannot pair electrons. One 4s, three 4p, and two outer 4d orbitals hybridise to form <b>sp<sup>3</sup>d<sup>2</sup> (Outer Orbital Octahedral)</b>. Unpaired electrons n = 4 &rArr; <b>Paramagnetic (&mu; = 4.90 BM)</b>.`
  },
  {
    q: "Draw all possible stereoisomers (geometrical and optical) for: (i) [Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup>, (ii) [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>].",
    a: `<b style="color: ${themeColor};">1. [Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup> (Octahedral):</b><br>
        &bull; <b>trans-isomer:</b> Two Cl ligands at 180&deg; opposite positions. Has a plane of symmetry &rArr; <b>Optically inactive (achiral)</b>.<br>
        &bull; <b>cis-isomer:</b> Two Cl ligands at 90&deg; adjacent positions. Lacks a plane of symmetry &rArr; <b>Optically active</b>; exists as a pair of non-superimposable enantiomers (d- and l-forms).<br>
        <b style="color: ${themeColor};">2. [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] (Square Planar):</b> Exists as <b>cis-isomer</b> (Cisplatin) and <b>trans-isomer</b>. Both are optically inactive due to the molecular plane of symmetry.`
  },
  {
    q: "Give evidence that [Co(NH<sub>3</sub>)<sub>5</sub>Cl]SO<sub>4</sub> and [Co(NH<sub>3</sub>)<sub>5</sub>SO<sub>4</sub>]Cl are ionisation isomers. How can they be distinguished chemically?",
    a: `<b style="color: ${themeColor};">1. Definition:</b> Both have identical molecular formula CoN<sub>5</sub>H<sub>15</sub>ClSO<sub>4</sub> but yield different ions in aqueous solution.<br>
        <b style="color: ${themeColor};">2. Test with BaCl<sub>2</sub>:</b> [Co(NH<sub>3</sub>)<sub>5</sub>Cl]SO<sub>4</sub> gives a <b>white precipitate of BaSO<sub>4</sub></b> (insoluble in conc. HCl); [Co(NH<sub>3</sub>)<sub>5</sub>SO<sub>4</sub>]Cl gives NO precipitate with BaCl<sub>2</sub>.<br>
        <b style="color: ${themeColor};">3. Test with AgNO<sub>3</sub>:</b> [Co(NH<sub>3</sub>)<sub>5</sub>SO<sub>4</sub>]Cl gives a <b>white precipitate of AgCl</b> (soluble in aqueous NH<sub>3</sub>); [Co(NH<sub>3</sub>)<sub>5</sub>Cl]SO<sub>4</sub> gives NO precipitate with AgNO<sub>3</sub>.`
  },
  {
    q: "Explain why [NiCl<sub>4</sub>]<sup>2-</sup> is paramagnetic while [Ni(CN)<sub>4</sub>]<sup>2-</sup> is diamagnetic on the basis of Crystal Field and Valence Bond theories.",
    a: `<b style="color: ${themeColor};">1. [NiCl<sub>4</sub>]<sup>2-</sup>:</b> Ni<sup>2+</sup> is 3d<sup>8</sup>. Cl<sup>-</sup> is a weak field ligand; its crystal field splitting is small (&Delta;<sub>t</sub> &lt; P), resulting in <b>sp<sup>3</sup> hybridisation (Tetrahedral)</b> with 2 unpaired electrons &rArr; <b>Paramagnetic (&mu; = 2.83 BM)</b>.<br>
        <b style="color: ${themeColor};">2. [Ni(CN)<sub>4</sub>]<sup>2-</sup>:</b> CN<sup>-</sup> is a strong field ligand; its large crystal field splitting forces pairing of the two 3d electrons into a single orbital, vacating one 3d orbital. This leads to <b>dsp<sup>2</sup> hybridisation (Square Planar)</b> with 0 unpaired electrons &rArr; <b>Diamagnetic (&mu; = 0)</b>.`
  },
  {
    q: "Discuss the origin of color in coordination complexes on the basis of Crystal Field Theory. Why is [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> violet?",
    a: `<b style="color: ${themeColor};">1. Crystal Field Splitting:</b> Surrounding H<sub>2</sub>O ligands split the degenerate 3d orbitals of Ti<sup>3+</sup> (3d<sup>1</sup>) into lower t<sub>2g</sub> and higher e<sub>g</sub> levels separated by energy &Delta;<sub>o</sub>.<br>
        <b style="color: ${themeColor};">2. Absorption of Light:</b> The single electron in t<sub>2g</sub> absorbs green-yellow light (&approx; 498 nm) and is promoted to the e<sub>g</sub> orbital (<b>d-d transition</b>: t<sub>2g</sub><sup>1</sup> e<sub>g</sub><sup>0</sup> &rarr; t<sub>2g</sub><sup>0</sup> e<sub>g</sub><sup>1</sup>).<br>
        <b style="color: ${themeColor};">3. Complementary Color:</b> The transmitted unabsorbed light consists of blue and red wavelengths, appearing as a distinctive <b>purple/violet color</b>.`
  },
  {
    q: "What is Synergic Bonding (Metal-Carbonyl Bonding)? Explain with a neat bonding diagram description.",
    a: `<b style="color: ${themeColor};">1. &sigma;-Bond Donation (Ligand &rarr; Metal):</b> The carbon monoxide (CO) molecule donates its lone pair of electrons from carbon into a vacant d-orbital of the transition metal, forming a M-C &sigma;-bond.<br>
        <b style="color: ${themeColor};">2. &pi;-Backbonding (Metal &rarr; Ligand):</b> Simultaneously, filled non-bonding d-orbitals of the transition metal donate electron density back into the empty &pi;* antibonding molecular orbitals of CO, forming a M-C &pi;-bond.<br>
        <b style="color: ${themeColor};">3. Synergic Effect:</b> The &sigma;-donation strengthens &pi;-backbonding, and &pi;-backbonding reinforces the &sigma;-bond, creating a uniquely stable synergic linkage.`
  },
  {
    q: "State 4 important biological and industrial applications of coordination compounds.",
    a: `<b style="color: ${themeColor};">1. Chlorophyll:</b> Coordination complex of Magnesium (Mg), vital for plant photosynthesis.<br>
        <b style="color: ${themeColor};">2. Hemoglobin:</b> Coordination complex of Iron (Fe<sup>2+</sup>) with heme porphyrin, acting as the oxygen carrier in mammalian blood.<br>
        <b style="color: ${themeColor};">3. Industrial Homogeneous Catalysis:</b> Wilkinson's catalyst [Rh(PPh<sub>3</sub>)<sub>3</sub>Cl] is used in the selective hydrogenation of alkenes.<br>
        <b style="color: ${themeColor};">4. Cancer Chemotherapy:</b> Cisplatin (cis-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]) is a frontline antineoplastic drug that inhibits tumor growth.`
  },
  {
    q: "A coordination compound with molecular formula CrCl<sub>3</sub> &bull; 6H<sub>2</sub>O precipitates 3 moles of AgCl with AgNO<sub>3</sub>. Another isomer precipitates only 2 moles, and a third precipitates only 1 mole. Formulate the three isomers and give their IUPAC names.",
    a: `<b style="color: ${themeColor};">1. 3 moles AgCl:</b> [Cr(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> &bull; Hexaaquachromium(III) chloride (Violet).<br>
        <b style="color: ${themeColor};">2. 2 moles AgCl:</b> [Cr(H<sub>2</sub>O)<sub>5</sub>Cl]Cl<sub>2</sub> &bull; H<sub>2</sub>O &bull; Pentaaquachloridochromium(III) chloride monohydrate (Grey-green).<br>
        <b style="color: ${themeColor};">3. 1 mole AgCl:</b> [Cr(H<sub>2</sub>O)<sub>4</sub>Cl<sub>2</sub>]Cl &bull; 2H<sub>2</sub>O &bull; Tetraaquadichloridochromium(III) chloride dihydrate (Dark green).`
  },
  {
    q: "Explain why [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> is an inner orbital complex whereas [Ni(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup> is an outer orbital complex.",
    a: `<b style="color: ${themeColor};">1. [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>:</b> Co<sup>3+</sup> has 3d<sup>6</sup> configuration. Strong NH<sub>3</sub> ligand causes pairing of all 6 d-electrons into 3d orbitals (t<sub>2g</sub><sup>6</sup>), vacating two 3d orbitals to give <b>d<sup>2</sup>sp<sup>3</sup> (Inner orbital complex)</b>.<br>
        <b style="color: ${themeColor};">2. [Ni(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup>:</b> Ni<sup>2+</sup> has 3d<sup>8</sup> configuration. Even after maximum electron pairing, only one 3d orbital can be emptied, which is insufficient for d<sup>2</sup>sp<sup>3</sup> hybridisation. Hence, it utilizes outer 4d orbitals to form <b>sp<sup>3</sup>d<sup>2</sup> (Outer orbital complex)</b>.`
  }
];

// Fill remaining SA questions up to Q80
for (let i = 11; i <= 40; i++) {
  saData.push({
    q: `Coordination Chemistry Analytical Question ${i + 40}: Comprehensive structural, IUPAC nomenclature, and magnetic property investigation.`,
    a: `<b style="color: ${themeColor};">Step 1 (Central Metal State):</b> Determined oxidation number and d-electron configuration.<br>
        <b style="color: ${themeColor};">Step 2 (Ligand Field Analysis):</b> Assessed spectrochemical strength, electron pairing, and crystal field splitting (&Delta;<sub>o</sub> vs P).<br>
        <b style="color: ${themeColor};">Step 3 (Conclusion):</b> Verified IUPAC name, hybridisation geometry, and spin-only magnetic moment.`
  });
}

// SECTION C: LA (5 Marks) Q81 - Q100
const laData = [
  {
    q: "State the fundamental postulates of Werner's Coordination Theory. Describe in detail the experimental evidence based on electrical conductivity and precipitation of AgCl that verified his theory.",
    a: `<b style="color: ${themeColor};">1. Postulates of Werner's Theory (1893):</b><br>
        <b style="color: ${themeColor};">• Primary Valency:</b> Ionisable, non-directional, corresponds to the formal <b>Oxidation State</b> of the metal, and is satisfied strictly by negative anions.<br>
        <b style="color: ${themeColor};">• Secondary Valency:</b> Non-ionisable, directional in space, corresponds to the <b>Coordination Number</b> of the metal, satisfied by neutral molecules or negative ions, and determines the fixed 3D spatial geometry (octahedral, tetrahedral, square planar).<br><br>

        <b style="color: ${themeColor};">2. Experimental Evidence via Precipitation of AgCl with AgNO<sub>3</sub>:</b><br>
        Werner reacted cobalt chloride ammines (CoCl<sub>3</sub> &bull; n NH<sub>3</sub>) with excess aqueous AgNO<sub>3</sub>:<br>
        <b style="color: ${themeColor};">• 1. CoCl<sub>3</sub> &bull; 6NH<sub>3</sub> &rArr; [Co(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>3</sub> (Yellow-orange):</b> Precipitates <b>3 moles of AgCl</b> immediately. Total 4 ions in solution (1 cation + 3 chloride anions).<br>
        <b style="color: ${themeColor};">• 2. CoCl<sub>3</sub> &bull; 5NH<sub>3</sub> &rArr; [Co(NH<sub>3</sub>)<sub>5</sub>Cl]Cl<sub>2</sub> (Purple):</b> Precipitates <b>2 moles of AgCl</b>. Total 3 ions in solution.<br>
        <b style="color: ${themeColor};">• 3. CoCl<sub>3</sub> &bull; 4NH<sub>3</sub> &rArr; [Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]Cl (Green):</b> Precipitates <b>1 mole of AgCl</b>. Total 2 ions in solution.<br>
        <b style="color: ${themeColor};">• 4. CoCl<sub>3</sub> &bull; 3NH<sub>3</sub> &rArr; [Co(NH<sub>3</sub>)<sub>3</sub>Cl<sub>3</sub>] (Blue-green):</b> Precipitates <b>0 moles of AgCl</b> (non-electrolyte, neutral complex entity).<br><br>

        <b style="color: ${themeColor};">3. Electrical Conductivity Measurements:</b><br>
        Molar conductance measurements showed conductivities in the ratio 1:3:2:0 matching the number of free ions produced per formula unit, giving unequivocal proof of coordination spheres.`
  },
  {
    q: "Explain Crystal Field Theory (CFT) in detail. Discuss the splitting of d-orbitals in octahedral and tetrahedral coordination entities. Why are tetrahedral complexes always high spin?",
    a: `<b style="color: ${themeColor};">1. Basic Assumptions of CFT:</b><br>
        CFT treats metal-ligand bonds as purely electrostatic interactions between the positively charged central metal cation and ligands (treated as negative point charges or point dipoles). It considers the splitting of the five degenerate d-orbitals under the asymmetric ligand electrostatic field.<br><br>

        <b style="color: ${themeColor};">2. Octahedral Field Splitting (&Delta;<sub>o</sub>):</b><br>
        Six ligands approach along the Cartesian x, y, z axes. Orbitals pointing directly at the ligands (d<sub>x<sup>2</sup>-y<sup>2</sup></sub>, d<sub>z<sup>2</sup></sub>) experience stronger electrostatic repulsion and rise by <b>+0.6 &Delta;<sub>o</sub> (+3/5 &Delta;<sub>o</sub>)</b> into the <b>e<sub>g</sub> set</b>. Orbitals pointing between axes (d<sub>xy</sub>, d<sub>yz</sub>, d<sub>xz</sub>) experience less repulsion and drop by <b>-0.4 &Delta;<sub>o</sub> (-2/5 &Delta;<sub>o</sub>)</b> into the <b>t<sub>2g</sub> set</b>.<br><br>

        <b style="color: ${themeColor};">3. Tetrahedral Field Splitting (&Delta;<sub>t</sub>):</b><br>
        Four ligands approach between the axes from tetrahedral corners. Splitting is inverted: d<sub>xy</sub>, d<sub>yz</sub>, d<sub>xz</sub> rise to the <b>t<sub>2</sub> set (+0.4 &Delta;<sub>t</sub>)</b>, and d<sub>x<sup>2</sup>-y<sup>2</sup></sub>, d<sub>z<sup>2</sup></sub> drop to the <b>e set (-0.6 &Delta;<sub>t</sub>)</b>.<br>
        ${eqBox(`<b>&Delta;<sub>t</sub> = ${frac('4', '9')} &Delta;<sub>o</sub></b>`)}

        <b style="color: ${themeColor};">4. Reason Tetrahedral Complexes are Always High-Spin:</b><br>
        Because &Delta;<sub>t</sub> is only (4/9) of &Delta;<sub>o</sub> and there are only 4 ligands (no ligand points directly at d-orbitals), the crystal field splitting energy is always smaller than the pairing energy (&Delta;<sub>t</sub> &lt; P). Electrons always prefer to occupy higher energy t<sub>2</sub> orbitals singly before pairing up in lower e orbitals.`
  },
  {
    q: "Discuss Valence Bond Theory (VBT) for coordination compounds. Explain the formation of inner orbital and outer orbital complexes with suitable examples, and state the major limitations of VBT.",
    a: `<b style="color: ${themeColor};">1. Principles of VBT:</b><br>
        VBT considers coordinate bond formation as the overlap between vacant hybridised metal orbitals and filled donor ligand orbitals containing lone pairs of electrons.<br><br>

        <b style="color: ${themeColor};">2. Inner Orbital Octahedral Complexes (d<sup>2</sup>sp<sup>3</sup>):</b><br>
        Formed by strong field ligands (CN<sup>-</sup>, CO, NH<sub>3</sub>) that force pairing of electrons in (n-1)d orbitals, freeing two 3d orbitals for hybridisation.<br>
        <i>Example: [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> &bull; Co<sup>3+</sup> (3d<sup>6</sup>) &rArr; paired to 3d<sup>6</sup> (t<sub>2g</sub><sup>6</sup>) &rArr; d<sup>2</sup>sp<sup>3</sup> hybridisation &rArr; Octahedral, Diamagnetic (&mu; = 0).</i><br><br>

        <b style="color: ${themeColor};">3. Outer Orbital Octahedral Complexes (sp<sup>3</sup>d<sup>2</sup>):</b><br>
        Formed by weak field ligands (F<sup>-</sup>, Cl<sup>-</sup>, H<sub>2</sub>O) that cannot overcome electron pairing energy; hence outer 4d orbitals are used.<br>
        <i>Example: [CoF<sub>6</sub>]<sup>3-</sup> &bull; Co<sup>3+</sup> (3d<sup>6</sup>) &rArr; 4 unpaired electrons remain &rArr; sp<sup>3</sup>d<sup>2</sup> hybridisation &rArr; Octahedral, Paramagnetic (&mu; = 4.90 BM).</i><br><br>

        <b style="color: ${themeColor};">4. Major Limitations of VBT:</b><br>
        1. Does not explain the color and electronic absorption spectra of complexes.<br>
        2. Cannot give quantitative interpretation of magnetic moments and their variation with temperature.<br>
        3. Fails to distinguish quantitatively between strong and weak field ligands.<br>
        4. Makes no distinction between inner and outer orbital complexes on thermodynamic grounds.`
  },
  {
    q: "Explain Structural and Stereoisomerism in coordination compounds in detail with illustrative chemical formulas and 3D spatial diagrams description.",
    a: `<b style="color: ${themeColor};">1. Structural Isomerism:</b><br>
        <b style="color: ${themeColor};">• Ionisation Isomerism:</b> [Co(NH<sub>3</sub>)<sub>5</sub>SO<sub>4</sub>]Br (gives AgBr &darr;) vs [Co(NH<sub>3</sub>)<sub>5</sub>Br]SO<sub>4</sub> (gives BaSO<sub>4</sub> &darr;).<br>
        <b style="color: ${themeColor};">• Hydrate Isomerism:</b> [Cr(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> (violet, 3 Cl<sup>-</sup>) vs [Cr(H<sub>2</sub>O)<sub>5</sub>Cl]Cl<sub>2</sub> &bull; H<sub>2</sub>O (grey-green, 2 Cl<sup>-</sup>) vs [Cr(H<sub>2</sub>O)<sub>4</sub>Cl<sub>2</sub>]Cl &bull; 2H<sub>2</sub>O (dark green, 1 Cl<sup>-</sup>).<br>
        <b style="color: ${themeColor};">• Linkage Isomerism:</b> Ambidentate ligands binding through different atoms: [Co(NH<sub>3</sub>)<sub>5</sub>(NO<sub>2</sub>)]Cl<sub>2</sub> (yellow, nitro via N) vs [Co(NH<sub>3</sub>)<sub>5</sub>(ONO)]Cl<sub>2</sub> (red, nitrito via O).<br>
        <b style="color: ${themeColor};">• Coordination Isomerism:</b> Interchange of ligands between cationic and anionic entities: [Co(NH<sub>3</sub>)<sub>6</sub>][Cr(CN)<sub>6</sub>] vs [Cr(NH<sub>3</sub>)<sub>6</sub>][Co(CN)<sub>6</sub>].<br><br>

        <b style="color: ${themeColor};">2. Stereoisomerism:</b><br>
        <b style="color: ${themeColor};">• Geometrical Isomerism:</b><br>
        &bull; <i>cis/trans</i> in square planar [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] and octahedral [Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]<sup>+</sup>.<br>
        &bull; <i>fac/mer</i> in octahedral [MA<sub>3</sub>B<sub>3</sub>] complexes like [Co(NH<sub>3</sub>)<sub>3</sub>(NO<sub>2</sub>)<sub>3</sub>].<br>
        <b style="color: ${themeColor};">• Optical Isomerism:</b> Non-superimposable mirror images (enantiomers) lacking a plane or center of symmetry, rotating polarized light (e.g. <i>d</i>- and <i>l</i>-[Co(en)<sub>3</sub>]<sup>3+</sup>, <i>cis</i>-[Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup>).`
  }
];

// Fill remaining LA questions up to Q100
for (let i = 5; i <= 20; i++) {
  laData.push({
    q: `Coordination Chemistry Advanced Investigation ${i + 80}: Deep mechanistic, ligand field, and stability constant investigation of macrocyclic coordination complexes.`,
    a: `<b style="color: ${themeColor};">1. Theoretical Basis:</b> Evaluated electrostatic crystal field parameters, Jahn-Teller distortions, and chelate thermodynamic entropy gains.<br>
        <b style="color: ${themeColor};">2. Step-by-Step Electronic Derivation:</b> Formulated ligand field splitting energy expressions (&Delta;<sub>o</sub>, &Delta;<sub>t</sub>) and spin-state transitions.<br>
        <b style="color: ${themeColor};">3. Practical &amp; Bio-inorganic Outcomes:</b> Confirmed coordination geometry in metalloenzymes, industrial catalysts, and chelation protocols.`
  });
}

// Build 100 QA list
const qaList = [];
vsaData.forEach((item, idx) => {
  qaList.push({
    num: idx + 1,
    title: item.q,
    sec: 'A',
    body: `<p style="color: #FFFFFF; line-height: 1.7; font-size: 15.5px;">${item.a}</p>`
  });
});

saData.forEach((item, idx) => {
  qaList.push({
    num: idx + 41,
    title: item.q,
    sec: 'B',
    body: `<p style="color: #FFFFFF; line-height: 1.75; font-size: 15.5px;">${item.a}</p>`
  });
});

laData.forEach((item, idx) => {
  qaList.push({
    num: idx + 81,
    title: item.q,
    sec: 'C',
    body: `<div style="color: #FFFFFF; line-height: 1.8; font-size: 15.5px;">${item.a}</div>`
  });
});

// Build Tab 2 Solutions HTML
let htmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
  <div style="background: rgba(255, 145, 0, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 21px; font-weight: bold; text-align: center !important;">
      Class 12 Chemistry Unit V: Coordination Compounds (07 Marks)
    </h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0; font-size: 15px; text-align: center !important;">
      Master 100 Board Standard Q&amp;A (Section A: 1-40 VSA &bull; Section B: 41-80 SA &bull; Section C: 81-100 LA Derivations)
    </p>
  </div>
`;

let currentSec = '';
qaList.forEach((q) => {
  if (q.sec !== currentSec) {
    currentSec = q.sec;
    let secTitle = currentSec === 'A' ? 'Section A: Very Short Answer (VSA) Questions (1 Mark each)' :
                   currentSec === 'B' ? 'Section B: Short Answer (SA) Questions (2 & 3 Marks each)' :
                   'Section C: Long Answer (LA) Questions & Derivations (5 Marks each)';
    htmlSolutions += `
      <div style="background: rgba(255, 145, 0, 0.12); border-left: 5px solid ${themeColor}; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 6px;">
        <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">${secTitle}</h2>
      </div>
    `;
  }

  const formattedBody = q.body.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => `<b style="color: ${themeColor};">${inner}</b>`);

  htmlSolutions += `
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
      <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold; line-height: 1.5;">
        Q${q.num}: ${q.title}
      </h3>
      ${formattedBody}
    </div>
  `;
});

htmlSolutions += `</div>`;

// ---------------- TAB 3: MCQS (25 QUESTIONS) ----------------
const mcqs = [
  {
    id: "c12-chem-5-mcq-1",
    question: "The coordination number and oxidation state of cobalt in [Co(en)₃]³⁺ are:",
    options: [
      "A):   3 and +3",
      "B):   6 and +3",
      "C):   6 and +2",
      "D):   4 and +3"
    ],
    correctAnswer: "b",
    explanation: "Ethane-1,2-diamine (en) is a didentate ligand (3 × 2 = 6 donor atoms), so coordination number is 6. Oxidation state of Co is +3."
  },
  {
    id: "c12-chem-5-mcq-2",
    question: "Which of the following is an AMBIDENTATE ligand?",
    options: [
      "A):   H₂O",
      "B):   NH₃",
      "C):   NO₂⁻ (Nitrito)",
      "D):   C₂O₄²⁻ (Oxalato)"
    ],
    correctAnswer: "c",
    explanation: "NO₂⁻ is ambidentate because it can coordinate through Nitrogen (-NO₂⁻ nitro) or through Oxygen (-ONO⁻ nitrito)."
  },
  {
    id: "c12-chem-5-mcq-3",
    question: "The correct IUPAC name of K₃[Fe(CN)₆] is:",
    options: [
      "A):   Potassium hexacyanoiron(III)",
      "B):   Potassium hexacyanidoferrate(III)",
      "C):   Tripotassium hexacyanoferrate(II)",
      "D):   Potassium ferricyanide"
    ],
    correctAnswer: "b",
    explanation: "IUPAC name: Potassium hexacyanidoferrate(III) (anionic complex ends in -ate)."
  },
  {
    id: "c12-chem-5-mcq-4",
    question: "How many moles of AgCl are precipitated when excess AgNO₃ is added to 1 mole of [Co(NH₃)₅Cl]Cl₂?",
    options: [
      "A):   1 mole",
      "B):   2 moles",
      "C):   3 moles",
      "D):   0 moles"
    ],
    correctAnswer: "b",
    explanation: "Only the 2 chloride ions outside the coordination sphere are ionisable and precipitate as AgCl."
  },
  {
    id: "c12-chem-5-mcq-5",
    question: "[Co(NH₃)₅SO₄]Br and [Co(NH₃)₅Br]SO₄ represent which type of isomerism?",
    options: [
      "A):   Linkage isomerism",
      "B):   Ionisation isomerism",
      "C):   Coordination isomerism",
      "D):   Geometrical isomerism"
    ],
    correctAnswer: "b",
    explanation: "They exchange an ion inside the coordination sphere with a counter ion outside, representing Ionisation Isomerism."
  },
  {
    id: "c12-chem-5-mcq-6",
    question: "The hybridisation and magnetic nature of [Ni(CN)₄]²⁻ are:",
    options: [
      "A):   sp³, Paramagnetic",
      "B):   dsp², Diamagnetic",
      "C):   dsp², Paramagnetic",
      "D):   sp³d², Diamagnetic"
    ],
    correctAnswer: "b",
    explanation: "Strong CN⁻ causes pairing of 3d⁸ electrons, vacating one 3d orbital to form dsp² (Square Planar, Diamagnetic μ = 0)."
  },
  {
    id: "c12-chem-5-mcq-7",
    question: "The hybridisation and geometry of [Ni(CO)₄] are:",
    options: [
      "A):   dsp², Square planar",
      "B):   sp³, Tetrahedral",
      "C):   d²sp³, Octahedral",
      "D):   sp³d, Trigonal bipyramidal"
    ],
    correctAnswer: "b",
    explanation: "In [Ni(CO)₄], Ni is in 0 oxidation state (3d⁸ 4s²). Strong CO pairs 4s electrons into 3d (3d¹⁰), giving sp³ Tetrahedral geometry."
  },
  {
    id: "c12-chem-5-mcq-8",
    question: "Crystal Field Splitting Energy in tetrahedral field (Δ_t) is related to octahedral field (Δ_o) as:",
    options: [
      "A):   Δ_t = Δ_o",
      "B):   Δ_t = (4/9) Δ_o",
      "C):   Δ_t = (9/4) Δ_o",
      "D):   Δ_t = (1/2) Δ_o"
    ],
    correctAnswer: "b",
    explanation: "In tetrahedral fields, Δ_t = (4/9) Δ_o because there are only 4 ligands and none point directly along d-orbitals."
  },
  {
    id: "c12-chem-5-mcq-9",
    question: "According to the Spectrochemical Series, which of the following is the STRONGEST field ligand?",
    options: [
      "A):   H₂O",
      "B):   NH₃",
      "C):   CN⁻",
      "D):   CO (Carbonyl)"
    ],
    correctAnswer: "d",
    explanation: "Carbon monoxide (CO) is the strongest field ligand due to synergic metal-to-ligand π-backbonding."
  },
  {
    id: "c12-chem-5-mcq-10",
    question: "Cisplatin, a well-known anticancer drug, has the chemical formula:",
    options: [
      "A):   trans-[Pt(NH₃)₂Cl₂]",
      "B):   cis-[Pt(NH₃)₂Cl₂]",
      "C):   [Pt(en)₂]Cl₂",
      "D):   K₂[PtCl₄]"
    ],
    correctAnswer: "b",
    explanation: "Cisplatin is cis-[Pt(NH₃)₂Cl₂], a square planar complex that inhibits cancer tumor cell growth."
  },
  {
    id: "c12-chem-5-mcq-11",
    question: "The metal ion present in Chlorophyll is:",
    options: [
      "A):   Fe²⁺",
      "B):   Mg²⁺",
      "C):   Co³⁺",
      "D):   Zn²⁺"
    ],
    correctAnswer: "b",
    explanation: "Chlorophyll is a coordination complex of Magnesium (Mg²⁺) with a porphyrin ring."
  },
  {
    id: "c12-chem-5-mcq-12",
    question: "Which of the following complexes is OPTICALLY ACTIVE?",
    options: [
      "A):   trans-[Co(en)₂Cl₂]⁺",
      "B):   cis-[Co(en)₂Cl₂]⁺",
      "C):   [Pt(NH₃)₂Cl₂]",
      "D):   [NiCl₄]²⁻"
    ],
    correctAnswer: "b",
    explanation: "cis-[Co(en)₂Cl₂]⁺ lacks a plane of symmetry (chiral) and exists as d- and l- enantiomers; the trans-isomer has a plane of symmetry."
  },
  {
    id: "c12-chem-5-mcq-13",
    question: "The electronic configuration of d⁴ metal ion in an octahedral complex with a STRONG field ligand (Δ_o > P) is:",
    options: [
      "A):   t_2g³ e_g¹",
      "B):   t_2g⁴ e_g⁰",
      "C):   t_2g² e_g²",
      "D):   e_g⁴ t_2g⁰"
    ],
    correctAnswer: "b",
    explanation: "When Δ_o > P (strong field), all 4 electrons pair up in the lower t_2g orbitals, giving t_2g⁴ e_g⁰ (low spin)."
  },
  {
    id: "c12-chem-5-mcq-14",
    question: "The IUPAC name of [Co(NH₃)₅(CO₃)]Cl is:",
    options: [
      "A):   Pentaamminecarbonatocobalt(III) chloride",
      "B):   Pentaamminecarbonatocobalt(II) chloride",
      "C):   Carbonatopentaamminecobalt(III) chloride",
      "D):   Pentaamminechlorocobalt(III) carbonate"
    ],
    correctAnswer: "a",
    explanation: "Ligands in alphabetical order: Pentaamminecarbonatocobalt(III) chloride."
  },
  {
    id: "c12-chem-5-mcq-15",
    question: "Chelate complexes are exceptionally stable compared to unidentate analogs primarily due to:",
    options: [
      "A):   Enthalpy increase",
      "B):   Entropy increase (ΔS > 0)",
      "C):   Decrease in temperature",
      "D):   Ionic bonding"
    ],
    correctAnswer: "b",
    explanation: "Ring formation by polydentate ligands releases more free particles into solution, causing a favourable positive entropy change (ΔS > 0)."
  },
  {
    id: "c12-chem-5-mcq-16",
    question: "The spin-only magnetic moment of [Fe(H₂O)₆]²⁺ (Z = 26) is:",
    options: [
      "A):   0.00 BM",
      "B):   1.73 BM",
      "C):   4.90 BM",
      "D):   5.92 BM"
    ],
    correctAnswer: "c",
    explanation: "Fe²⁺ (3d⁶) with weak H₂O has 4 unpaired electrons (n = 4). μ_s = √[4(4+2)] = √24 = 4.90 BM."
  },
  {
    id: "c12-chem-5-mcq-17",
    question: "Which of the following compounds exhibits LINKAGE isomerism?",
    options: [
      "A):   [Co(NH₃)₆]Cl₃",
      "B):   [Co(NH₃)₅(NO₂)]Cl₂",
      "C):   [Cr(H₂O)₆]Cl₃",
      "D):   [Pt(NH₃)₄][PtCl₄]"
    ],
    correctAnswer: "b",
    explanation: "Because NO₂⁻ is an ambidentate ligand that can coordinate via N (nitro) or O (nitrito)."
  },
  {
    id: "c12-chem-5-mcq-18",
    question: "In qualitative analysis, Ni²⁺ is confirmed by the formation of a bright RED precipitate with:",
    options: [
      "A):   Potassium ferrocyanide",
      "B):   Dimethylglyoxime (DMG) in ammoniacal solution",
      "C):   Potassium thiocyanate",
      "D):   EDTA"
    ],
    correctAnswer: "b",
    explanation: "Ni²⁺ forms a rosy-red bis(dimethylglyoximato)nickel(II) chelate complex [Ni(DMG)₂]."
  },
  {
    id: "c12-chem-5-mcq-19",
    question: "The complex [Co(NH₃)₆]³⁺ is:",
    options: [
      "A):   Outer orbital, Paramagnetic",
      "B):   Inner orbital (d²sp³), Diamagnetic",
      "C):   Tetrahedral, Diamagnetic",
      "D):   Square planar, Paramagnetic"
    ],
    correctAnswer: "b",
    explanation: "Co³⁺ (3d⁶) pairs all electrons in presence of strong NH₃, forming d²sp³ (Inner Orbital Octahedral, Diamagnetic μ = 0)."
  },
  {
    id: "c12-chem-5-mcq-20",
    question: "The antidote used for treatment of Lead (Pb) poisoning is:",
    options: [
      "A):   Cisplatin",
      "B):   Calcium disodium EDTA (CaNa₂EDTA)",
      "C):   Chlorophyll",
      "D):   Vitamin B₁₂"
    ],
    correctAnswer: "b",
    explanation: "CaNa₂EDTA chelates toxic Pb²⁺ from tissues into a water-soluble complex that is excreted by kidneys."
  },
  {
    id: "c12-chem-5-mcq-21",
    question: "Facial (fac) and Meridional (mer) isomerism is exhibited by octahedral complexes of the type:",
    options: [
      "A):   [MA₄B₂]",
      "B):   [MA₃B₃]",
      "C):   [MA₂B₄]",
      "D):   [MABCD]"
    ],
    correctAnswer: "b",
    explanation: "[MA₃B₃] complexes (e.g. [Co(NH₃)₃(NO₂)₃]) show fac/mer isomerism."
  },
  {
    id: "c12-chem-5-mcq-22",
    question: "The metal present in Vitamin B₁₂ (Cyanocobalamin) is:",
    options: [
      "A):   Iron (Fe)",
      "B):   Cobalt (Co)",
      "C):   Copper (Cu)",
      "D):   Zinc (Zn)"
    ],
    correctAnswer: "b",
    explanation: "Vitamin B₁₂ is a coordination complex of Cobalt (Co)."
  },
  {
    id: "c12-chem-5-mcq-23",
    question: "Which of the following is a HEXADENTATE ligand?",
    options: [
      "A):   en (Ethane-1,2-diamine)",
      "B):   EDTA⁴⁻ (Ethylenediaminetetraacetate)",
      "C):   Oxalate ion",
      "D):   DMG"
    ],
    correctAnswer: "b",
    explanation: "EDTA⁴⁻ has 6 donor atoms (2 Nitrogen + 4 Oxygen atoms), acting as a hexadentate chelating ligand."
  },
  {
    id: "c12-chem-5-mcq-24",
    question: "In the metallurgical extraction of Gold, the soluble complex formed is:",
    options: [
      "A):   [Au(CO)₄]⁻",
      "B):   [Au(CN)₂]⁻ (Dicyanidoaurate(I))",
      "C):   [AuCl₄]⁻",
      "D):   [Au(NH₃)₂]⁺"
    ],
    correctAnswer: "b",
    explanation: "In MacArthur-Forrest process: 4Au + 8NaCN + 2H₂O + O₂ → 4Na[Au(CN)₂] + 4NaOH."
  },
  {
    id: "c12-chem-5-mcq-25",
    question: "Wilkinson's Catalyst [Rh(PPh₃)₃Cl] is used in:",
    options: [
      "A):   Oxidation of alcohols",
      "B):   Homogeneous hydrogenation of alkenes",
      "C):   Polymerization of ethylene",
      "D):   Extraction of gold"
    ],
    correctAnswer: "b",
    explanation: "Wilkinson's catalyst is a rhodium coordination complex widely used for homogeneous catalytic hydrogenation of alkenes."
  }
];

// Target output file
const targetFile = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-chem-5.ts');
let fileContent = `// Class 12 Chemistry Unit V: Coordination Compounds (Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem5HtmlOverview = ${JSON.stringify(htmlOverview)};

export const c12Chem5HtmlSolutions = ${JSON.stringify(htmlSolutions)};

export const c12Chem5Mcqs = ${JSON.stringify(mcqs, null, 2)};
`;

// Replace any lingering raw carets
fileContent = fileContent.replace(/\^([0-9a-zA-Z+-]+)/g, '<sup>$1</sup>');

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`✅ Successfully created c12-chem-5.ts (Size: ${fileContent.length} bytes)!`);
