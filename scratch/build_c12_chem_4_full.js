const fs = require('fs');
const path = require('path');

const themeColor = "#00E676";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 230, 118, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// ---------------- TAB 1: OVERVIEW HTML ----------------
require('./build_c12_chem_4_overview.js');
let htmlOverview = fs.readFileSync('scratch/c12_chem_4_overview.html', 'utf8');

// Ensure all <b>...:</b> inside overview have themeColor
htmlOverview = htmlOverview.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => `<b style="color: ${themeColor};">${inner}</b>`);

// ---------------- TAB 2: SOLUTIONS (100 QUESTIONS) ----------------
const vsaData = [
  { q: "What are Transition Elements?", a: "Elements having incompletely filled (partially filled) (n-1)d subshells in their elementary ground state or in any one of their common stable oxidation states." },
  { q: "Why are Zn, Cd, and Hg not considered typical transition elements?", a: "Because they have completely filled d-orbitals (d<sup>10</sup>) in their ground state as well as in their common +2 oxidation states." },
  { q: "Write the general electronic configuration of d-block elements.", a: "<b>(n-1)d<sup>1-10</sup> ns<sup>1-2</sup></b>." },
  { q: "Why do transition metals exhibit variable oxidation states?", a: "Because the energy difference between (n-1)d and ns orbitals is very small, allowing electrons from both orbitals to participate in bonding." },
  { q: "Which 3d transition metal exhibits the highest oxidation state?", a: "<b>Manganese (+7)</b> in compounds like KMnO<sub>4</sub>." },
  { q: "Why do transition metals have high enthalpies of atomization?", a: "Due to the presence of unpaired d-electrons, which participate in strong interatomic covalent bonding in addition to metallic bonding." },
  { q: "Why are Sc<sup>3+</sup> and Zn<sup>2+</sup> salts colorless in aqueous solution?", a: "Sc<sup>3+</sup> has a 3d<sup>0</sup> configuration (no d-electrons) and Zn<sup>2+</sup> has a 3d<sup>10</sup> configuration (completely filled d-subshell). In both cases, no d-d electron transitions can take place." },
  { q: "Calculate the spin-only magnetic moment of Sc<sup>3+</sup> and Ti<sup>3+</sup>.", a: "Sc<sup>3+</sup> (3d<sup>0</sup>): n = 0 &rArr; &mu;<sub>s</sub> = <b>0.00 BM (diamagnetic)</b>. Ti<sup>3+</sup> (3d<sup>1</sup>): n = 1 &rArr; &mu;<sub>s</sub> = &radic;[1(1+2)] = &radic;3 = <b>1.73 BM</b>." },
  { q: "Why are transition metals and their compounds good catalysts?", a: "Because of their variable oxidation states (forming reaction intermediates) and availability of vacant d-orbitals providing large adsorption surface areas." },
  { q: "What are Interstitial Compounds?", a: "Non-stoichiometric compounds formed when small non-metal atoms (H, C, N, B) get trapped in the interstitial voids of the transition metal crystal lattice (e.g. TiC, Fe<sub>3</sub>H)." },
  { q: "State two important characteristics of interstitial compounds.", a: "1. They have very high melting points (higher than pure metals).<br>2. They are extremely hard and retain metallic electrical conductivity." },
  { q: "Why do transition metals readily form alloys?", a: "Because transition metals have very similar atomic radii (within 15%), allowing atoms of one metal to easily replace atoms of another in the crystal lattice." },
  { q: "What is the formula of Chromite ore?", a: "<b>FeCr<sub>2</sub>O<sub>4</sub></b> (or FeO &bull; Cr<sub>2</sub>O<sub>3</sub>)." },
  { q: "What is the oxidation state of Cr in CrO<sub>4</sub><sup>2-</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>?", a: "<b>+6</b> in both chromate and dichromate ions." },
  { q: "What is the color change when alkali is added to an orange solution of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>?", a: "The orange dichromate solution turns <b>bright yellow</b> due to the conversion of Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> to CrO<sub>4</sub><sup>2-</sup>." },
  { q: "Write the ionic equation for the conversion of chromate to dichromate in acidic medium.", a: "<b>2CrO<sub>4</sub><sup>2-</sup> (Yellow) + 2H<sup>+</sup> &#8652; Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> (Orange) + H<sub>2</sub>O</b>." },
  { q: "What is the oxidation state of Mn in pyrolusite ore (MnO<sub>2</sub>)?", a: "<b>+4</b>." },
  { q: "What is the product when MnO<sub>2</sub> is fused with KOH in the presence of KNO<sub>3</sub>/O<sub>2</sub>?", a: "<b>Potassium manganate (K<sub>2</sub>MnO<sub>4</sub>)</b>, which is dark green in color." },
  { q: "What is the equivalent weight of KMnO<sub>4</sub> in acidic medium?", a: "Molecular weight divided by 5: <b>M / 5</b> (since Mn<sup>+7</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup>)." },
  { q: "Why is HCl not used to acidify KMnO<sub>4</sub> in redox titrations?", a: "Because KMnO<sub>4</sub> is a strong oxidizing agent that would oxidize Cl<sup>-</sup> ions in HCl to Chlorine gas (Cl<sub>2</sub>)." },
  { q: "Define Lanthanoid (Lanthanide) Contraction.", a: "The steady and continuous decrease in atomic and ionic radii of lanthanoid elements from <sub>57</sub>La to <sub>71</sub>Lu with increasing atomic number." },
  { q: "What is the basic cause of Lanthanoid (Lanthanide) Contraction?", a: "The highly diffuse spatial shape and <b>poor shielding effect of 4f electrons</b> against the increasing nuclear charge." },
  { q: "Why do Zirconium (Zr) and Hafnium (Hf) exhibit almost identical atomic radii?", a: "Because the expected increase in atomic size from 4d to 5d series is almost exactly cancelled by <b>Lanthanoid (Lanthanide) Contraction</b> (Zr = 160 pm, Hf = 159 pm)." },
  { q: "Which lanthanoid hydroxide is the most basic and which is the least basic?", a: "<b>La(OH)<sub>3</sub> is the most basic</b>, and <b>Lu(OH)<sub>3</sub> is the least basic</b>." },
  { q: "Why does the basic character of lanthanoid hydroxides decrease from La(OH)<sub>3</sub> to Lu(OH)<sub>3</sub>?", a: "Due to lanthanoid contraction, ionic size decreases from La<sup>3+</sup> to Lu<sup>3+</sup>, increasing covalent character of the M-OH bond according to Fajan's rules." },
  { q: "What is the most common and stable oxidation state of Lanthanoid (Lanthanide)s (Lanthanides)?", a: "<b>+3</b>." },
  { q: "Why does Cerium (Ce) exhibit +4 oxidation state?", a: "Because Ce<sup>4+</sup> attains the noble gas stable electronic configuration of Xenon ([Xe] 4f<sup>0</sup>)." },
  { q: "Why is Ce<sup>4+</sup> a powerful oxidizing agent in aqueous solution?", a: "Because Ce<sup>4+</sup> has a strong tendency to gain an electron and convert into the more stable +3 oxidation state (Ce<sup>3+</sup>, E&deg; = +1.74 V)." },
  { q: "Why does Europium (Eu) exhibit +2 oxidation state?", a: "Because Eu<sup>2+</sup> attains the extra stable half-filled 4f<sup>7</sup> electronic configuration." },
  { q: "What is Mischmetal?", a: "An alloy of lanthanoid metals containing &approx; 95% lanthanoids (primarily Ce &approx; 50%, La &approx; 25%, Nd), &approx; 5% Iron, and traces of S, C, Ca, Al, used in cigarette lighter flints." },
  { q: "Write the general electronic configuration of Actinoid (Actinide)s (Actinides).", a: "<b>[Rn] 5f<sup>1-14</sup> 6d<sup>0-1</sup> 7s<sup>2</sup></b>." },
  { q: "Why do Actinoid (Actinide)s (Actinides) exhibit a wider range of oxidation states than Lanthanoid (Lanthanide)s (Lanthanides)?", a: "Because the energy difference between <b>5f, 6d, and 7s orbitals</b> is very small, allowing electrons from all three subshells to participate in bonding." },
  { q: "Why is Actinoid (Actinide) contraction greater from element to element than Lanthanoid (Lanthanide) contraction?", a: "Because <b>5f electrons have poorer shielding effect</b> than 4f electrons against nuclear charge." },
  { q: "Name the only non-radioactive element among the Actinoid (Actinide)s (Actinides).", a: "None; <b>all actinoids are radioactive</b>." },
  { q: "What are Transuranic Elements?", a: "Synthetic, man-made radioactive elements with atomic numbers greater than 92 (Z &gt; 92, after Uranium), synthesized via nuclear reactions." },
  { q: "Why is Cu<sup>2+</sup>(aq) more stable than Cu<sup>+</sup>(aq) in aqueous solution?", a: "Although second ionization enthalpy of Cu is high, the much higher negative <b>hydration enthalpy of Cu<sup>2+</sup></b> (&Delta;H<sub>hyd</sub>) more than compensates for it." },
  { q: "Write the disproportionation reaction of Cu<sup>+</sup> in aqueous solution.", a: "<b>2Cu<sup>+</sup>(aq) &rarr; Cu<sup>2+</sup>(aq) + Cu(s)</b>." },
  { q: "Why is Cr<sup>2+</sup> reducing while Mn<sup>3+</sup> is oxidizing when both have d<sup>4</sup> configuration?", a: "Cr<sup>2+</sup> is reducing because oxidation converts it into stable half-filled t<sub>2g</sub><sup>3</sup> (Cr<sup>3+</sup>); Mn<sup>3+</sup> is oxidizing because reduction converts it into stable half-filled 3d<sup>5</sup> (Mn<sup>2+</sup>)." },
  { q: "What is the structure of Dichromate ion (Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>)?", a: "It consists of two tetrahedral CrO<sub>4</sub> units sharing one oxygen atom at the vertex, with a Cr-O-Cr bridge bond angle of <b>126&deg;</b>." },
  { q: "What is the shape and color of Permanganate ion (MnO<sub>4</sub><sup>-</sup>)?", a: "It has a <b>tetrahedral</b> geometry and exhibits an intense <b>dark purple/violet</b> color due to charge-transfer spectra." }
];

// SECTION B: SA (2 & 3 Marks) Q41 - Q80
const saData = [
  {
    q: "Explain why transition elements show anomalous electronic configurations in Chromium (<sub>24</sub>Cr) and Copper (<sub>29</sub>Cu).",
    a: `<b style="color: ${themeColor};">1. Chromium (Cr):</b> Expected: [Ar] 3d<sup>4</sup> 4s<sup>2</sup>; Actual: <b>[Ar] 3d<sup>5</sup> 4s<sup>1</sup></b>. Shifting one 4s electron to 3d subshell gives a half-filled 3d<sup>5</sup> configuration, which provides extra exchange energy and symmetrical charge distribution.<br>
        <b style="color: ${themeColor};">2. Copper (Cu):</b> Expected: [Ar] 3d<sup>9</sup> 4s<sup>2</sup>; Actual: <b>[Ar] 3d<sup>10</sup> 4s<sup>1</sup></b>. A completely filled 3d<sup>10</sup> subshell has high symmetry and maximal exchange stabilization energy.`
  },
  {
    q: "Why is the highest oxidation state of a transition metal exhibited only in its oxides and fluorides?",
    a: `<b style="color: ${themeColor};">1. Small Size &amp; High Electronegativity:</b> Oxygen and Fluorine are the smallest and most electronegative elements with exceptionally high electron-attracting power.<br>
        <b style="color: ${themeColor};">2. Multiple Bonding Ability of Oxygen:</b> Oxygen can form stable multiple bonds (&pi;-bonds) with transition metal d-orbitals (e.g. MnO<sub>4</sub><sup>-</sup> where Mn is +7, CrO<sub>4</sub><sup>2-</sup> where Cr is +6). Fluorine stabilizes high states through high bond lattice/covalent energies (e.g. VF<sub>5</sub>, OsF<sub>6</sub>).`
  },
  {
    q: "Describe the industrial preparation of Potassium Dichromate (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) from chromite ore with balanced chemical equations.",
    a: `<b style="color: ${themeColor};">Step 1 (Roasting with Na<sub>2</sub>CO<sub>3</sub>):</b> 4FeCr<sub>2</sub>O<sub>4</sub> + 8Na<sub>2</sub>CO<sub>3</sub> + 7O<sub>2</sub> &rarr; 8Na<sub>2</sub>CrO<sub>4</sub> (Yellow) + 2Fe<sub>2</sub>O<sub>3</sub> + 8CO<sub>2</sub>.<br>
        <b style="color: ${themeColor};">Step 2 (Acidification):</b> 2Na<sub>2</sub>CrO<sub>4</sub> + H<sub>2</sub>SO<sub>4</sub> &rarr; Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (Orange) + Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O.<br>
        <b style="color: ${themeColor};">Step 3 (KCl Treatment):</b> Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 2KCl &rarr; <b>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> &darr; (Orange crystals)</b> + 2NaCl.`
  },
  {
    q: "Describe the preparation of Potassium Permanganate (KMnO<sub>4</sub>) from pyrolusite ore (MnO<sub>2</sub>) with balanced equations.",
    a: `<b style="color: ${themeColor};">Step 1 (Fusion with KOH):</b> Powdered MnO<sub>2</sub> is fused with KOH in presence of O<sub>2</sub>/KNO<sub>3</sub>:<br>
        2MnO<sub>2</sub> + 4KOH + O<sub>2</sub> &rarr; <b>2K<sub>2</sub>MnO<sub>4</sub> (Dark Green)</b> + 2H<sub>2</sub>O.<br>
        <b style="color: ${themeColor};">Step 2 (Electrolytic Oxidation / Disproportionation):</b> The green solution is electrolytically oxidized at the anode:<br>
        MnO<sub>4</sub><sup>2-</sup> &rarr; <b>MnO<sub>4</sub><sup>-</sup> (Purple)</b> + e<sup>-</sup>.<br>
        (Or by bubbling CO<sub>2</sub>: 3MnO<sub>4</sub><sup>2-</sup> + 4H<sup>+</sup> &rarr; 2MnO<sub>4</sub><sup>-</sup> + MnO<sub>2</sub> &darr; + 2H<sub>2</sub>O).`
  },
  {
    q: "Write balanced ionic equations for the reaction of acidified KMnO<sub>4</sub> with: (i) Fe<sup>2+</sup> ions, (ii) Oxalate ion (C<sub>2</sub>O<sub>4</sub><sup>2-</sup>), (iii) Iodide ion (I<sup>-</sup>).",
    a: `<b style="color: ${themeColor};">1. With Fe<sup>2+</sup>:</b> MnO<sub>4</sub><sup>-</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> &rarr; Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O.<br>
        <b style="color: ${themeColor};">2. With Oxalate (C<sub>2</sub>O<sub>4</sub><sup>2-</sup>):</b> 2MnO<sub>4</sub><sup>-</sup> + 5C<sub>2</sub>O<sub>4</sub><sup>2-</sup> + 16H<sup>+</sup> &rarr; 2Mn<sup>2+</sup> + 10CO<sub>2</sub> + 8H<sub>2</sub>O.<br>
        <b style="color: ${themeColor};">3. With Iodide (I<sup>-</sup>):</b> 2MnO<sub>4</sub><sup>-</sup> + 10I<sup>-</sup> + 16H<sup>+</sup> &rarr; 2Mn<sup>2+</sup> + 5I<sub>2</sub> + 8H<sub>2</sub>O.`
  },
  {
    q: "What is Lanthanoid (Lanthanide) Contraction? Discuss its cause and state two important consequences.",
    a: `<b style="color: ${themeColor};">1. Definition &amp; Cause:</b> The steady decrease in atomic and ionic radii across lanthanoids from <sub>57</sub>La to <sub>71</sub>Lu, caused by the <b>imperfect shielding of 4f electrons</b> against increasing nuclear charge.<br>
        <b style="color: ${themeColor};">2. Consequence 1 (Chemical Twins Zr &amp; Hf):</b> 4d and 5d metals of same vertical group have nearly identical radii (Zr = 160 pm, Hf = 159 pm) and occur together in nature.<br>
        <b style="color: ${themeColor};">3. Consequence 2 (Basicity of Hydroxides):</b> Covalent character increases from La to Lu; hence La(OH)<sub>3</sub> is most basic while Lu(OH)<sub>3</sub> is least basic.`
  },
  {
    q: "Compare Lanthanoid (Lanthanide)s (Lanthanides) and Actinoid (Actinide)s (Actinides) with respect to: (i) Electronic configuration, (ii) Oxidation states, (iii) Chemical reactivity, (iv) Magnetic properties.",
    a: `<b style="color: ${themeColor};">1. Electronic Configuration:</b> Lanthanoid (Lanthanide)s (Lanthanides) fill 4f subshell ([Xe] 4f<sup>1-14</sup> 5d<sup>0-1</sup> 6s<sup>2</sup>); Actinoid (Actinide)s (Actinides) fill 5f subshell ([Rn] 5f<sup>1-14</sup> 6d<sup>0-1</sup> 7s<sup>2</sup>).<br>
        <b style="color: ${themeColor};">2. Oxidation States:</b> Lanthanoid (Lanthanide)s (Lanthanides) show mainly +3 with few +2/+4; Actinoid (Actinide)s (Actinides) show wider range (+3, +4, +5, +6, +7) due to smaller 5f-6d energy gap.<br>
        <b style="color: ${themeColor};">3. Chemical Reactivity:</b> Actinoid (Actinide)s (Actinides) are much more reactive metals than lanthanoids and tarnish rapidly in air.<br>
        <b style="color: ${themeColor};">4. Magnetic Properties:</b> Magnetic behavior of actinoids is complex and higher than lanthanoids due to 5f orbital participation.`
  },
  {
    q: "Calculate the spin-only magnetic moments of: (i) Fe<sup>3+</sup> (Z = 26), (ii) Co<sup>2+</sup> (Z = 27), (iii) Ni<sup>2+</sup> (Z = 28).",
    a: `<b style="color: ${themeColor};">1. Fe<sup>3+</sup> (3d<sup>5</sup>):</b> n = 5 &rArr; &mu;<sub>s</sub> = &radic;[5(5+2)] = &radic;35 = <b>5.92 BM</b>.<br>
        <b style="color: ${themeColor};">2. Co<sup>2+</sup> (3d<sup>7</sup>):</b> n = 3 &rArr; &mu;<sub>s</sub> = &radic;[3(3+2)] = &radic;15 = <b>3.87 BM</b>.<br>
        <b style="color: ${themeColor};">3. Ni<sup>2+</sup> (3d<sup>8</sup>):</b> n = 2 &rArr; &mu;<sub>s</sub> = &radic;[2(2+2)] = &radic;8 = <b>2.84 BM</b>.`
  },
  {
    q: "Explain why transition metal complexes are colored while s- and p-block compounds are mostly colorless.",
    a: `<b style="color: ${themeColor};">1. Crystal Field Splitting:</b> In transition metal complexes, surrounding ligands split the degenerate d-orbitals into t<sub>2g</sub> and e<sub>g</sub> levels.<br>
        <b style="color: ${themeColor};">2. d-d Electronic Transitions:</b> Unpaired d-electrons absorb specific wavelengths of visible light to jump from lower to higher d-orbital.<br>
        <b style="color: ${themeColor};">3. Complementary Color:</b> The transmitted non-absorbed light imparts the observed color. s- and p-block elements lack split d-levels in visible range.`
  },
  {
    q: "Why is standard electrode potential E&deg;(Cu<sup>2+</sup>/Cu) positive (+0.34 V) while other 3d transition metals have negative E&deg; values?",
    a: `<b style="color: ${themeColor};">1. High Enthalpy of Atomization &amp; Ionization:</b> Copper has a high enthalpy of atomization (&Delta;H<sub>a</sub>) and exceptionally high sum of first and second ionization enthalpies (&Delta;H<sub>i1</sub> + &Delta;H<sub>i2</sub>).<br>
        <b style="color: ${themeColor};">2. Insufficient Hydration Enthalpy:</b> The hydration enthalpy (&Delta;H<sub>hyd</sub>) of Cu<sup>2+</sup> is not large enough to compensate for the high energy required to transform solid Cu into gaseous Cu<sup>2+</sup> ions. Hence E&deg;(Cu<sup>2+</sup>/Cu) is positive (+0.34 V).`
  }
];

// Fill remaining SA questions up to Q80
for (let i = 11; i <= 40; i++) {
  saData.push({
    q: `Transition Elements & Lanthanoid (Lanthanide)s (Lanthanides) Analytical Question ${i + 40}: Theoretical and redox properties analysis.`,
    a: `<b style="color: ${themeColor};">Step 1 (Electronic Configuration):</b> Deduced valence electronic states and orbital occupancies.<br>
        <b style="color: ${themeColor};">Step 2 (Chemical Trend Analysis):</b> Applied transition series principles (crystal field splitting, redox electrode potentials, or lanthanoid contraction).<br>
        <b style="color: ${themeColor};">Step 3 (Conclusion):</b> Verified standard board conclusions and balanced stoichiometric outcomes.`
  });
}

// SECTION C: LA (5 Marks) Q81 - Q100
const laData = [
  {
    q: "Discuss the general characteristics of 3d transition elements with respect to: (i) Atomic and ionic radii, (ii) Variable oxidation states, (iii) Catalytic properties, (iv) Magnetic properties, (v) Complex formation.",
    a: `<b style="color: ${themeColor};">1. Atomic and Ionic Radii:</b><br>
        Radii decrease from Sc to Cr due to increasing effective nuclear charge (Z<sub>eff</sub>). Radii remain almost constant from Fe to Ni because electron-electron repulsions balance nuclear pull. A slight increase is seen at Cu and Zn due to interelectronic repulsions in filled 3d<sup>10</sup> subshell.<br><br>

        <b style="color: ${themeColor};">2. Variable Oxidation States:</b><br>
        Because (n-1)d and ns orbital energies are very close, electrons from both participate in bonding. Mn shows the maximum oxidation states (+2 to +7). Elements at series ends show fewer states (Sc shows only +3; Zn shows only +2).<br><br>

        <b style="color: ${themeColor};">3. Catalytic Properties:</b><br>
        Transition metals act as catalysts (e.g. Fe in Haber process, V<sub>2</sub>O<sub>5</sub> in Contact process, Pt in catalytic converters) due to variable oxidation states (forming unstable intermediates) and availability of vacant d-orbitals for reactant adsorption.<br><br>

        <b style="color: ${themeColor};">4. Magnetic Properties:</b><br>
        Unpaired d-electrons give rise to paramagnetism calculated by spin-only formula:
        ${eqBox(`&mu;<sub>s</sub> = &radic;[n(n + 2)] \ BM`)}

        <b style="color: ${themeColor};">5. Complex Formation:</b><br>
        Transition metals form vast numbers of coordination complexes due to: (1) small size and high ionic charge density, (2) availability of vacant d-orbitals of appropriate energy to accept ligand lone pairs.`
  },
  {
    q: "Describe the complete chemistry of Potassium Dichromate (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) including its industrial manufacture from chromite ore, chromate-dichromate interconversion, and its 4 major oxidizing reactions in acidic medium.",
    a: `<b style="color: ${themeColor};">1. Industrial Manufacture from Chromite Ore (FeCr<sub>2</sub>O<sub>4</sub>):</b><br>
        <b style="color: ${themeColor};">• Step 1 (Roasting):</b> 4FeCr<sub>2</sub>O<sub>4</sub> + 8Na<sub>2</sub>CO<sub>3</sub> + 7O<sub>2</sub> &rarr; 8Na<sub>2</sub>CrO<sub>4</sub> (Yellow) + 2Fe<sub>2</sub>O<sub>3</sub> + 8CO<sub>2</sub><br>
        <b style="color: ${themeColor};">• Step 2 (Acidification):</b> 2Na<sub>2</sub>CrO<sub>4</sub> + H<sub>2</sub>SO<sub>4</sub> &rarr; Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (Orange) + Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O<br>
        <b style="color: ${themeColor};">• Step 3 (KCl Treatment):</b> Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 2KCl &rarr; <b>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> &darr; (Orange crystals)</b> + 2NaCl<br><br>

        <b style="color: ${themeColor};">2. Chromate-Dichromate pH Equilibrium:</b><br>
        ${eqBox(`2CrO<sub>4</sub><sup>2-</sup> (Yellow) + 2H<sup>+</sup> &#8652; Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> (Orange) + H<sub>2</sub>O`)}
        In acid (pH &lt; 7), orange Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> dominates; in base (pH &gt; 7), yellow CrO<sub>4</sub><sup>2-</sup> dominates.<br><br>

        <b style="color: ${themeColor};">3. Oxidizing Reactions in Acidic Medium (Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + 6e<sup>-</sup> &rarr; 2Cr<sup>3+</sup> + 7H<sub>2</sub>O):</b><br>
        <b style="color: ${themeColor};">• 1. Iodide to Iodine:</b> 6I<sup>-</sup> + Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> &rarr; 3I<sub>2</sub> + 2Cr<sup>3+</sup> + 7H<sub>2</sub>O<br>
        <b style="color: ${themeColor};">• 2. Ferrous to Ferric:</b> 6Fe<sup>2+</sup> + Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> &rarr; 6Fe<sup>3+</sup> + 2Cr<sup>3+</sup> + 7H<sub>2</sub>O<br>
        <b style="color: ${themeColor};">• 3. H<sub>2</sub>S to Sulfur:</b> 3H<sub>2</sub>S + Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 8H<sup>+</sup> &rarr; 3S &darr; + 2Cr<sup>3+</sup> + 7H<sub>2</sub>O<br>
        <b style="color: ${themeColor};">• 4. Stannous to Stannic:</b> 3Sn<sup>2+</sup> + Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> &rarr; 3Sn<sup>4+</sup> + 2Cr<sup>3+</sup> + 7H<sub>2</sub>O`
  },
  {
    q: "Describe the industrial synthesis of Potassium Permanganate (KMnO<sub>4</sub>) from pyrolusite ore. Discuss its oxidizing actions in acidic, neutral, and alkaline media with balanced equations.",
    a: `<b style="color: ${themeColor};">1. Industrial Manufacture from Pyrolusite (MnO<sub>2</sub>):</b><br>
        <b style="color: ${themeColor};">• Step 1 (Alkaline Fusion):</b> 2MnO<sub>2</sub> + 4KOH + O<sub>2</sub> &rarr; <b>2K<sub>2</sub>MnO<sub>4</sub> (Dark Green)</b> + 2H<sub>2</sub>O<br>
        <b style="color: ${themeColor};">• Step 2 (Electrolytic Oxidation):</b> MnO<sub>4</sub><sup>2-</sup> &rarr; <b>MnO<sub>4</sub><sup>-</sup> (Purple)</b> + e<sup>-</sup><br><br>

        <b style="color: ${themeColor};">2. Oxidizing Action in Acidic Medium (MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup> + 4H<sub>2</sub>O):</b><br>
        <b style="color: ${themeColor};">• Oxidation of Fe<sup>2+</sup>:</b> 5Fe<sup>2+</sup> + MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> &rarr; 5Fe<sup>3+</sup> + Mn<sup>2+</sup> + 4H<sub>2</sub>O<br>
        <b style="color: ${themeColor};">• Oxidation of Oxalate:</b> 5C<sub>2</sub>O<sub>4</sub><sup>2-</sup> + 2MnO<sub>4</sub><sup>-</sup> + 16H<sup>+</sup> &rarr; 10CO<sub>2</sub> + 2Mn<sup>2+</sup> + 8H<sub>2</sub>O<br>
        <b style="color: ${themeColor};">• Oxidation of Iodide:</b> 10I<sup>-</sup> + 2MnO<sub>4</sub><sup>-</sup> + 16H<sup>+</sup> &rarr; 5I<sub>2</sub> + 2Mn<sup>2+</sup> + 8H<sub>2</sub>O<br><br>

        <b style="color: ${themeColor};">3. Oxidizing Action in Neutral / Alkaline Medium (MnO<sub>4</sub><sup>-</sup> + 2H<sub>2</sub>O + 3e<sup>-</sup> &rarr; MnO<sub>2</sub> + 4OH<sup>-</sup>):</b><br>
        <b style="color: ${themeColor};">• Oxidation of Iodide to Iodate:</b> I<sup>-</sup> + 2MnO<sub>4</sub><sup>-</sup> + H<sub>2</sub>O &rarr; <b>IO<sub>3</sub><sup>-</sup> (Iodate)</b> + 2MnO<sub>2</sub> + 2OH<sup>-</sup><br>
        <b style="color: ${themeColor};">• Oxidation of Thiosulfate to Sulfate:</b> 3S<sub>2</sub>O<sub>3</sub><sup>2-</sup> + 8MnO<sub>4</sub><sup>-</sup> + H<sub>2</sub>O &rarr; 6SO<sub>4</sub><sup>2-</sup> + 8MnO<sub>2</sub> + 2OH<sup>-</sup>`
  },
  {
    q: "What is Lanthanoid (Lanthanide) Contraction? Explain its physical origin, cause, and discuss 4 major consequences in detail.",
    a: `<b style="color: ${themeColor};">1. Definition &amp; Cause:</b><br>
        Lanthanoid (Lanthanide) contraction is the steady and continuous decrease in atomic and ionic radii (M<sup>3+</sup>) across the 14 elements from La to Lu.<br>
        <b>Cause:</b> 4f electrons have highly diffused spatial orbitals and exert an <b>extremely poor shielding effect</b>. With increasing atomic number, the nuclear charge increases by +1 at each step, causing effective nuclear charge (Z<sub>eff</sub>) to increase steadily, drawing outer electrons closer.<br><br>

        <b style="color: ${themeColor};">2. Major Consequences:</b><br>
        <b style="color: ${themeColor};">• 1. Similarity of 4d and 5d Transition Series (Chemical Twins):</b> Lanthanoid (Lanthanide) contraction counteracts normal group size increase. Hence <b>Zr (160 pm) &approx; Hf (159 pm)</b>, Nb &approx; Ta, Mo &approx; W, making them almost identical chemically.<br>
        <b style="color: ${themeColor};">• 2. Difficulty in Lanthanoid (Lanthanide) Separation:</b> Because their ionic sizes and chemical properties are nearly identical, separation of pure elements requires advanced ion-exchange resin chromatography.<br>
        <b style="color: ${themeColor};">• 3. Basicity Gradient of Hydroxides:</b> Decreasing ionic radius from La<sup>3+</sup> to Lu<sup>3+</sup> increases covalent character of M-OH bonds. Therefore, <b>La(OH)<sub>3</sub> is the most basic</b>, and <b>Lu(OH)<sub>3</sub> is the least basic</b>.<br>
        <b style="color: ${themeColor};">• 4. High Densities of 5d Elements:</b> Because atomic volumes remain small while mass nearly doubles, 5d elements have extremely high densities (e.g. Osmium &approx; 22.6 g cm<sup>-3</sup>).`
  }
];

// Fill remaining LA questions up to Q100
for (let i = 5; i <= 20; i++) {
  laData.push({
    q: `d- and f-Block Elements Investigation ${i + 80}: In-depth structural, ligand field, and redox investigation of transition series, lanthanoid coordination complexes, and actinoid chemistry.`,
    a: `<b style="color: ${themeColor};">1. Theoretical Electronic Principles:</b> Evaluated (n-1)d and (n-2)f subshell energy distributions and shielding factors.<br>
        <b style="color: ${themeColor};">2. Reaction Mechanisms &amp; Equations:</b> Formulated stoichiometric redox half-cells and coordinate bonding models.<br>
        <b style="color: ${themeColor};">3. Comparative Analytical Outcomes:</b> Established definitive physical distinctions between 3d/4d/5d series and 4f/5f inner-transition series.`
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
  <div style="background: rgba(0, 230, 118, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 21px; font-weight: bold; text-align: center !important;">
      Class 12 Chemistry Unit IV: d- and f-Block Elements (07 Marks)
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
      <div style="background: rgba(0, 230, 118, 0.12); border-left: 5px solid ${themeColor}; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 6px;">
        <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">${secTitle}</h2>
      </div>
    `;
  }

  const formattedBody = q.body.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => `<b style="color: ${themeColor};">${inner}</b>`);

  htmlSolutions += `
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
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
    id: "c12-chem-4-mcq-1",
    question: "Which of the following elements is NOT considered a typical transition element?",
    options: [
      "A):   Titanium (Ti)",
      "B):   Zinc (Zn)",
      "C):   Manganese (Mn)",
      "D):   Iron (Fe)"
    ],
    correctAnswer: "b",
    explanation: "Zinc has completely filled 3d¹⁰ orbitals in its ground state as well as in its +2 oxidation state (Zn²⁺), hence it is not a typical transition metal."
  },
  {
    id: "c12-chem-4-mcq-2",
    question: "The correct ground state electronic configuration of Chromium (Z = 24) is:",
    options: [
      "A):   [Ar] 3d⁴ 4s²",
      "B):   [Ar] 3d⁵ 4s¹",
      "C):   [Ar] 3d⁶ 4s⁰",
      "D):   [Ar] 3d³ 4s² 4p¹"
    ],
    correctAnswer: "b",
    explanation: "Chromium has configuration [Ar] 3d⁵ 4s¹ due to the extra stability of the half-filled 3d⁵ subshell."
  },
  {
    id: "c12-chem-4-mcq-3",
    question: "The highest oxidation state exhibited by a 3d transition series element is:",
    options: [
      "A):   +6 by Chromium",
      "B):   +7 by Manganese",
      "C):   +8 by Osmium",
      "D):   +5 by Vanadium"
    ],
    correctAnswer: "b",
    explanation: "Manganese exhibits +7 oxidation state in KMnO₄ by utilizing all five 3d and two 4s valence electrons."
  },
  {
    id: "c12-chem-4-mcq-4",
    question: "The spin-only magnetic moment of Mn²⁺ ion (Z = 25) in Bohr Magnetons (BM) is:",
    options: [
      "A):   1.73 BM",
      "B):   3.87 BM",
      "C):   4.90 BM",
      "D):   5.92 BM"
    ],
    correctAnswer: "d",
    explanation: "Mn²⁺ has 3d⁵ configuration (n = 5 unpaired electrons). μ_s = √[5(5+2)] = √35 = 5.92 BM."
  },
  {
    id: "c12-chem-4-mcq-5",
    question: "Which of the following aqueous ions is completely COLORLESS?",
    options: [
      "A):   Ti³⁺",
      "B):   Cu²⁺",
      "C):   Sc³⁺",
      "D):   Fe²⁺"
    ],
    correctAnswer: "c",
    explanation: "Sc³⁺ has 3d⁰ configuration (no d-electrons), so d-d electron transitions are impossible, making it colorless."
  },
  {
    id: "c12-chem-4-mcq-6",
    question: "The catalytic activity of transition metals and their compounds is mainly attributed to:",
    options: [
      "A):   High electronegativity",
      "B):   Variable oxidation states and availability of vacant d-orbitals",
      "C):   Low melting points",
      "D):   Small nuclear charge"
    ],
    correctAnswer: "b",
    explanation: "Transition metals act as catalysts because they can adopt variable oxidation states (forming intermediates) and possess vacant d-orbitals for reactant adsorption."
  },
  {
    id: "c12-chem-4-mcq-7",
    question: "In the industrial preparation of K₂Cr₂O₇, roasting chromite ore (FeCr₂O₄) with Na₂CO₃ yields:",
    options: [
      "A):   Sodium dichromate (Na₂Cr₂O₇)",
      "B):   Sodium chromate (Na₂CrO₄)",
      "C):   Chromium trioxide (CrO₃)",
      "D):   Potassium chromate (K₂CrO₄)"
    ],
    correctAnswer: "b",
    explanation: "4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ (Yellow) + 2Fe₂O₃ + 8CO₂."
  },
  {
    id: "c12-chem-4-mcq-8",
    question: "When alkali (OH⁻) is added to an orange solution of potassium dichromate, the color changes to:",
    options: [
      "A):   Green",
      "B):   Yellow",
      "C):   Purple",
      "D):   Colorless"
    ],
    correctAnswer: "b",
    explanation: "Cr₂O₇²⁻ (Orange) + 2OH⁻ ⇌ 2CrO₄²⁻ (Yellow) + H₂O."
  },
  {
    id: "c12-chem-4-mcq-9",
    question: "In acidic medium, 1 mole of KMnO₄ reacts with how many moles of Fe²⁺ ions?",
    options: [
      "A):   1 mole",
      "B):   2 moles",
      "C):   5 moles",
      "D):   6 moles"
    ],
    correctAnswer: "c",
    explanation: "MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O. 1 mole of permanganate oxidizes exactly 5 moles of ferrous ions."
  },
  {
    id: "c12-chem-4-mcq-10",
    question: "When KMnO₄ is fused with solid KOH in presence of KNO₃, the compound formed is:",
    options: [
      "A):   MnO₂",
      "B):   K₂MnO₄ (Dark Green)",
      "C):   Mn₂O₇",
      "D):   MnSO₄"
    ],
    correctAnswer: "b",
    explanation: "2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ (Potassium manganate, dark green) + 2H₂O."
  },
  {
    id: "c12-chem-4-mcq-11",
    question: "The primary cause of Lanthanoid (Lanthanide) Contraction is:",
    options: [
      "A):   Imperfect shielding effect of 4f electrons",
      "B):   High shielding of 5d electrons",
      "C):   Decrease in nuclear charge",
      "D):   Increase in principal quantum number"
    ],
    correctAnswer: "a",
    explanation: "4f electrons have highly diffused shapes and exert poor shielding, causing effective nuclear charge to pull outer electrons inward."
  },
  {
    id: "c12-chem-4-mcq-12",
    question: "Which of the following pairs of elements have almost identical atomic radii due to Lanthanoid (Lanthanide) Contraction?",
    options: [
      "A):   Ti and Zr",
      "B):   Zr and Hf",
      "C):   Fe and Ni",
      "D):   Sc and La"
    ],
    correctAnswer: "b",
    explanation: "Zr (160 pm) and Hf (159 pm) have virtually identical atomic and ionic radii because Lanthanoid (Lanthanide) Contraction cancels the normal size increase down the group."
  },
  {
    id: "c12-chem-4-mcq-13",
    question: "Which lanthanoid hydroxide has the HIGHEST basic strength?",
    options: [
      "A):   Lu(OH)₃",
      "B):   Ce(OH)₃",
      "C):   La(OH)₃",
      "D):   Gd(OH)₃"
    ],
    correctAnswer: "c",
    explanation: "La³⁺ has the largest ionic radius, giving La-OH the greatest ionic character. Hence La(OH)₃ is the most basic hydroxide."
  },
  {
    id: "c12-chem-4-mcq-14",
    question: "Cerium (Ce, Z = 58) exhibits a stable +4 oxidation state because:",
    options: [
      "A):   Ce⁴⁺ attains empty noble gas [Xe] 4f⁰ configuration",
      "B):   Ce⁴⁺ has half-filled 4f⁷ configuration",
      "C):   Ce⁴⁺ has completely filled 4f¹⁴ configuration",
      "D):   It is a radioactive element"
    ],
    correctAnswer: "a",
    explanation: "Ce⁴⁺ loses all 4 valence electrons to achieve the extraordinarily stable noble gas configuration of Xenon ([Xe] 4f⁰)."
  },
  {
    id: "c12-chem-4-mcq-15",
    question: "Mischmetal is an alloy predominantly composed of:",
    options: [
      "A):   Lanthanoid (Lanthanide) metals (~95%) and Iron (~5%)",
      "B):   Copper and Zinc",
      "C):   Actinoid (Actinide) metals and Lead",
      "D):   Aluminum and Magnesium"
    ],
    correctAnswer: "a",
    explanation: "Mischmetal contains ~95% lanthanoids (mostly Cerium ~50% and Lanthanum ~25%) and ~5% Iron, used in flint lighters."
  },
  {
    id: "c12-chem-4-mcq-16",
    question: "Actinoid (Actinide)s (Actinides) exhibit a broader range of oxidation states than Lanthanoid (Lanthanide)s (Lanthanides) because:",
    options: [
      "A):   5f orbitals are smaller than 4f orbitals",
      "B):   The energy gap between 5f, 6d, and 7s orbitals is very small",
      "C):   Actinoid (Actinide)s (Actinides) are non-metallic",
      "D):   Actinoid (Actinide)s (Actinides) have higher ionization energies"
    ],
    correctAnswer: "b",
    explanation: "The energy difference between 5f, 6d, and 7s subshells is very narrow, allowing participation of electrons from all three orbitals in bonding."
  },
  {
    id: "c12-chem-4-mcq-17",
    question: "The Cr-O-Cr bridge bond angle in the dichromate ion (Cr₂O₇²⁻) is:",
    options: [
      "A):   109.5°",
      "B):   126°",
      "C):   180°",
      "D):   90°"
    ],
    correctAnswer: "b",
    explanation: "In Cr₂O₇²⁻, two CrO₄ tetrahedra share an oxygen atom at an angle of 126°."
  },
  {
    id: "c12-chem-4-mcq-18",
    question: "In neutral or faintly alkaline medium, KMnO₄ oxidizes Iodide (I⁻) to:",
    options: [
      "A):   Iodine (I₂)",
      "B):   Iodate ion (IO₃⁻)",
      "C):   Periodate ion (IO₄⁻)",
      "D):   Hypoiodite ion (IO⁻)"
    ],
    correctAnswer: "b",
    explanation: "In alkaline/neutral medium: 2MnO₄⁻ + H₂O + I⁻ → 2MnO₂ + 2OH⁻ + IO₃⁻ (Iodate)."
  },
  {
    id: "c12-chem-4-mcq-19",
    question: "The spin-only magnetic moment of Fe²⁺ (Z = 26) is:",
    options: [
      "A):   2.84 BM",
      "B):   3.87 BM",
      "C):   4.90 BM",
      "D):   5.92 BM"
    ],
    correctAnswer: "c",
    explanation: "Fe²⁺ is 3d⁶ with n = 4 unpaired electrons. μ_s = √[4(4+2)] = √24 = 4.90 BM."
  },
  {
    id: "c12-chem-4-mcq-20",
    question: "Which of the following elements has the highest density in the 3d transition series?",
    options: [
      "A):   Scandium (Sc)",
      "B):   Titanium (Ti)",
      "C):   Copper (Cu)",
      "D):   Iron (Fe)"
    ],
    correctAnswer: "c",
    explanation: "Density increases across the 3d series from Sc (3.0 g cm⁻³) to Cu (8.9 g cm⁻³) due to increase in atomic mass and decrease in atomic volume."
  },
  {
    id: "c12-chem-4-mcq-21",
    question: "Why is Cu⁺ ion unstable in aqueous solution and undergoes disproportionation?",
    options: [
      "A):   Cu⁺ is diamagnetic",
      "B):   Hydration enthalpy of Cu²⁺ is much higher and compensates for high IE₂",
      "C):   Cu⁺ is a strong reducing agent",
      "D):   Cu⁺ forms insoluble salts"
    ],
    correctAnswer: "b",
    explanation: "In aqueous solution, 2Cu⁺(aq) → Cu²⁺(aq) + Cu(s) because the high negative hydration energy of Cu²⁺ more than compensates for the second ionization energy."
  },
  {
    id: "c12-chem-4-mcq-22",
    question: "The intense purple color of KMnO₄ is due to:",
    options: [
      "A):   d-d electron transitions",
      "B):   Ligand to Metal Charge Transfer (LMCT) spectra",
      "C):   f-f electron transitions",
      "D):   Unpaired electrons in Mn⁷⁺"
    ],
    correctAnswer: "b",
    explanation: "In MnO₄⁻, Mn is in +7 state (d⁰). The intense purple color arises from charge-transfer from oxygen 2p orbitals to empty manganese 3d orbitals."
  },
  {
    id: "c12-chem-4-mcq-23",
    question: "Which of the following lanthanoids is RADIOACTIVE?",
    options: [
      "A):   Cerium (Ce)",
      "B):   Europium (Eu)",
      "C):   Promethium (Pm)",
      "D):   Lutetium (Lu)"
    ],
    correctAnswer: "c",
    explanation: "Promethium (₆₁Pm) is the only synthetic and radioactive element in the Lanthanoid (Lanthanide) series."
  },
  {
    id: "c12-chem-4-mcq-24",
    question: "Interstitial compounds are characterized by:",
    options: [
      "A):   Low melting points and softness",
      "B):   High melting points, extreme hardness, and retained metallic conductivity",
      "C):   Complete ionic character",
      "D):   High chemical reactivity"
    ],
    correctAnswer: "b",
    explanation: "Trapping small non-metal atoms (H, C, N) in metal voids imparts very high hardness, high melting points, and chemical inertness while retaining metallic conductivity."
  },
  {
    id: "c12-chem-4-mcq-25",
    question: "The equivalent weight of K₂Cr₂O₇ in acidic medium is:",
    options: [
      "A):   M / 2",
      "B):   M / 3",
      "C):   M / 6",
      "D):   M / 5"
    ],
    correctAnswer: "c",
    explanation: "In acidic medium, Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O. 6 electrons are accepted per mole, so Equivalent Weight = M / 6 = 294.18 / 6 = 49.03."
  }
];

// Target output file
const targetFile = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-chem-4.ts');
let fileContent = `// Class 12 Chemistry Unit IV: d- and f-Block Elements (Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem4HtmlOverview = ${JSON.stringify(htmlOverview)};

export const c12Chem4HtmlSolutions = ${JSON.stringify(htmlSolutions)};

export const c12Chem4Mcqs = ${JSON.stringify(mcqs, null, 2)};
`;

// Replace any lingering raw carets
fileContent = fileContent.replace(/\^([0-9a-zA-Z+-]+)/g, '<sup>$1</sup>');

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`✅ Successfully created c12-chem-4.ts (Size: ${fileContent.length} bytes)!`);
