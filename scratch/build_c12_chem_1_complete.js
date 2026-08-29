const fs = require('fs');
const path = require('path');

const themeColor = "#FF4081";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 64, 129, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Read Overview
const htmlOverview = JSON.parse(fs.readFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_1_overview.json', 'utf8'));

// Build 100 Questions: Section A (40), Section B (40), Section C (20)
const qaList = [];

// SECTION A: VSA (1 Mark) Q1 - Q40
const vsaData = [
  { q: "Define a binary solution.", a: "A homogeneous mixture of exactly two chemically non-reacting substances (one solvent and one solute) whose composition can be varied within certain limits." },
  { q: "Give an example of a solid in gas solution.", a: "Camphor vapours in nitrogen gas or Iodine vapours in air." },
  { q: "Define Molarity of a solution and state its SI unit.", a: "Molarity (M) is the number of moles of solute dissolved in 1 Litre (1000 mL) of solution. Unit: mol L<sup>-1</sup> or Molar (M)." },
  { q: "Why is molality preferred over molarity in temperature-dependent studies?", a: "Molality depends on the mass of solvent, which is temperature-invariant, whereas molarity depends on solution volume, which expands or contracts with temperature." },
  { q: "What is the sum of mole fractions of all components in any solution?", a: "The sum of mole fractions of all components in any solution is strictly equal to unity (1): &Sigma; &chi;<sub>i</sub> = 1." },
  { q: "Define parts per million (ppm).", a: "The number of parts by mass of a solute present in one million (10<sup>6</sup>) parts by mass of the solution: ppm = (Mass of solute / Total mass of solution) &times; 10<sup>6</sup>." },
  { q: "State Henry's law for gas solubility.", a: "At constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of the solution: p = K<sub>H</sub> &chi;." },
  { q: "Why are aquatic species more comfortable in cold water than in warm water?", a: "Gas dissolution in liquid is exothermic (&Delta;H &lt; 0). Hence, oxygen solubility is significantly higher in cold water than in warm water, providing abundant dissolved O<sub>2</sub>." },
  { q: "What happens to Henry's law constant (K<sub>H</sub>) as temperature increases?", a: "Henry's law constant (K<sub>H</sub>) increases with an increase in temperature, leading to a decrease in gas solubility at a given pressure." },
  { q: "Mention the composition of gas mixture used in scuba diving cylinders.", a: "Scuba diving cylinders are filled with air diluted with Helium: 11.7% Helium, 56.2% Nitrogen, and 32.1% Oxygen." },
  { q: "Why do deep-sea divers suffer from the medical condition 'bends'?", a: "Under high underwater pressure, nitrogen dissolves in blood. Rapid ascent causes sudden pressure drop, releasing N<sub>2</sub> as bubbles that block capillaries, causing excruciating pain known as bends." },
  { q: "What is Anoxia experienced by high altitude climbers?", a: "At high altitudes, low atmospheric pressure leads to low partial pressure of O<sub>2</sub> in blood and tissues, causing weakness, dizziness, and cognitive fatigue called Anoxia." },
  { q: "Give one example of a substitutional solid solution.", a: "Brass (an alloy where Zinc atoms substitute Copper atoms in the crystal lattice) or Bronze (Copper + Tin)." },
  { q: "Give one example of an interstitial solid solution.", a: "Carbon steel (where small Carbon atoms occupy interstitial voids in the iron crystal lattice) or Tungsten carbide." },
  { q: "State Raoult's law for volatile solutes in a liquid solution.", a: "For a solution of volatile liquids, the partial vapour pressure of each component at a given temperature is equal to the product of vapour pressure of pure component and its mole fraction: p<sub>i</sub> = p<sub>i</sub>&deg; &chi;<sub>i</sub>." },
  { q: "State Raoult's law for a solution containing a non-volatile solute.", a: "The relative lowering of vapour pressure of a dilute solution containing a non-volatile solute is equal to the mole fraction of the solute: (p<sub>A</sub>&deg; - p) / p<sub>A</sub>&deg; = &chi;<sub>B</sub>." },
  { q: "How does Raoult's law become a special case of Henry's law?", a: "According to Raoult's law, p = p&deg; &chi;, and by Henry's law, p = K<sub>H</sub> &chi;. When the proportionality constant K<sub>H</sub> equals the vapour pressure of pure component p&deg;, Henry's law becomes Raoult's law." },
  { q: "What is the value of &Delta;H<sub>mixing</sub> for an ideal solution?", a: "For an ideal solution, &Delta;H<sub>mixing</sub> = 0 (no heat is absorbed or evolved during dissolution)." },
  { q: "What is the value of &Delta;V<sub>mixing</sub> for an ideal solution?", a: "For an ideal solution, &Delta;V<sub>mixing</sub> = 0 (the total volume of the solution is exactly equal to the sum of individual volumes)." },
  { q: "Give two examples of nearly ideal solutions.", a: "(i) n-Hexane and n-Heptane, (ii) Bromoethane and Chloroethane, or (iii) Benzene and Toluene." },
  { q: "What type of deviation from Raoult's law is shown by an ethanol-acetone mixture?", a: "Positive deviation from Raoult's law (acetone molecules get in between ethanol molecules and break existing intermolecular hydrogen bonds)." },
  { q: "Why does a chloroform-acetone mixture show negative deviation from Raoult's law?", a: "Chloroform and acetone molecules form strong intermolecular hydrogen bonds (C-H&bull;&bull;&bull;O=C) which are stronger than original like-molecule attractions, lowering escaping tendency." },
  { q: "Define an azeotrope (constant boiling mixture).", a: "A binary liquid mixture having identical composition in both liquid and vapour phases and which boils at a constant temperature without undergoing fractional distillation separation." },
  { q: "What type of azeotrope is formed by solutions showing positive deviation from Raoult's law?", a: "Minimum Boiling Azeotrope (e.g. 95.4% ethanol + 4.6% water by mass, boiling at 351.15 K)." },
  { q: "Why can't azeotropic mixtures be separated by fractional distillation?", a: "Because both liquid and vapour phases have the exact same mole fraction composition at the azeotropic boiling point." },
  { q: "Define Colligative Properties.", a: "Properties of dilute solutions that depend solely on the total number of solute particles (ions/molecules) present and not on their chemical nature or identity." },
  { q: "Name four fundamental colligative properties.", a: "1. Relative Lowering of Vapour Pressure, 2. Elevation of Boiling Point, 3. Depression of Freezing Point, 4. Osmotic Pressure." },
  { q: "Define Relative Lowering of Vapour Pressure.", a: "The ratio of the lowering of vapour pressure (&Delta;p = p<sub>A</sub>&deg; - p) to the vapour pressure of the pure solvent (p<sub>A</sub>&deg;): RLVP = (p<sub>A</sub>&deg; - p) / p<sub>A</sub>&deg;." },
  { q: "Define Molal Boiling Point Elevation Constant (K<sub>b</sub>).", a: "The elevation in boiling point produced when 1 mole of a non-volatile, non-electrolyte solute is dissolved in 1000 g (1 kg) of solvent (1 molal solution). Also called Ebullioscopic Constant." },
  { q: "State the SI unit of K<sub>b</sub> (ebullioscopic constant).", a: "The SI unit of K<sub>b</sub> is <b>K kg mol<sup>-1</sup></b> or &deg;C kg mol<sup>-1</sup>." },
  { q: "Define Cryoscopic Constant (K<sub>f</sub>).", a: "The depression in freezing point produced when 1 mole of a non-volatile solute is dissolved in 1 kg (1000 g) of solvent. SI Unit: <b>K kg mol<sup>-1</sup></b>." },
  { q: "Why is ethylene glycol added to water in car radiators in cold climates?", a: "Ethylene glycol acts as an antifreeze agent by lowering the freezing point of water (depression in freezing point) down to -17.6 &deg;C, preventing radiator freezing in winter." },
  { q: "Why is common salt (NaCl) or CaCl<sub>2</sub> sprinkled on snow-covered roads in winter?", a: "Salt dissolves in the thin water film on ice to form a solution, which depresses the freezing point of water below 0 &deg;C, causing snow and ice to melt rapidly." },
  { q: "Define Osmosis and Semipermeable Membrane (SPM).", a: "Osmosis is the spontaneous net flow of solvent molecules from pure solvent into a solution through a Semipermeable Membrane (SPM) which has sub-nanometer pores allowing only solvent passage." },
  { q: "Define Osmotic Pressure (&Pi;).", a: "The minimum excess hydrostatic pressure that must be applied to the solution side to completely prevent the inward osmosis of solvent molecules through a semipermeable membrane: &Pi; = CRT." },
  { q: "What are Isotonic Solutions?", a: "Two solutions that have identical osmotic pressures (&Pi;<sub>1</sub> = &Pi;<sub>2</sub>) at the same temperature, so that no net osmosis occurs across an SPM between them." },
  { q: "What happens when a human red blood cell (RBC) is placed in a 1.5% NaCl solution?", a: "1.5% NaCl is hypertonic relative to RBC internal fluid (0.9% NaCl). Water moves out of the RBC by exosmosis, causing the cell to shrink and shrivel (Plasmolysis / Crenation)." },
  { q: "What is Reverse Osmosis (RO)?", a: "When an external pressure greater than the osmotic pressure (P &gt; &Pi;) is applied to the solution, pure solvent molecules are forced to flow in reverse from solution to pure solvent across an SPM (used in seawater desalination)." },
  { q: "Define Van't Hoff Factor (i).", a: "The ratio of the experimentally observed colligative property to the theoretical calculated colligative property: i = Observed Colligative / Calculated Colligative = Normal Molar Mass / Observed Molar Mass." },
  { q: "What is the theoretical value of Van't Hoff factor (i) for complete dissociation of K<sub>4</sub>[Fe(CN)<sub>6</sub>]?", a: "K<sub>4</sub>[Fe(CN)<sub>6</sub>] dissociates into 4 K<sup>+</sup> + [Fe(CN)<sub>6</sub>]<sup>4-</sup> (total n = 5 ions). For 100% complete dissociation (&alpha; = 1), <b>i = 5</b>." }
];

// Build Section A Questions
vsaData.forEach((item, idx) => {
  qaList.push({
    num: idx + 1,
    title: item.q,
    sec: 'A',
    marks: '1 Mark',
    body: `<p style="color: #FFFFFF; line-height: 1.7; font-size: 15.5px;">${item.a}</p>`
  });
});

// SECTION B: SA (2 & 3 Marks) Q41 - Q80
const saData = [
  {
    q: "Calculate mass percentage of benzene (C<sub>6</sub>H<sub>6</sub>) and carbon tetrachloride (CCl<sub>4</sub>) if 22 g of benzene is dissolved in 122 g of CCl<sub>4</sub>.",
    a: `<b>Step 1:</b> Total mass of solution = Mass of benzene + Mass of CCl<sub>4</sub> = 22 g + 122 g = 144 g.<br>
        <b>Step 2 (Mass % of benzene):</b> % C<sub>6</sub>H<sub>6</sub> = (22 / 144) &times; 100 = <b>15.28%</b>.<br>
        <b>Step 3 (Mass % of CCl<sub>4</sub>):</b> % CCl<sub>4</sub> = (122 / 144) &times; 100 = <b>84.72%</b> (or 100 - 15.28 = 84.72%).`
  },
  {
    q: "Calculate the mole fraction of ethylene glycol (C<sub>2</sub>H<sub>6</sub>O<sub>2</sub>) in a solution containing 20% of C<sub>2</sub>H<sub>6</sub>O<sub>2</sub> by mass.",
    a: `<b>Step 1:</b> 20% (w/w) means 20 g C<sub>2</sub>H<sub>6</sub>O<sub>2</sub> and 80 g water.<br>
        <b>Step 2 (Moles of glycol, M = 62 g mol<sup>-1</sup>):</b> n<sub>glycol</sub> = 20 / 62 = 0.322 mol.<br>
        <b>Step 3 (Moles of water, M = 18 g mol<sup>-1</sup>):</b> n<sub>water</sub> = 80 / 18 = 4.444 mol.<br>
        <b>Step 4 (Mole fraction of glycol &chi;<sub>glycol</sub>):</b> &chi;<sub>glycol</sub> = 0.322 / (0.322 + 4.444) = 0.322 / 4.766 = <b>0.068</b>.<br>
        <b>Step 5 (Mole fraction of water &chi;<sub>water</sub>):</b> &chi;<sub>water</sub> = 1 - 0.068 = <b>0.932</b>.`
  },
  {
    q: "Calculate the molarity of a solution containing 5 g of NaOH dissolved in 450 mL of aqueous solution.",
    a: `<b>Step 1:</b> Molar mass of NaOH = 23 + 16 + 1 = 40 g mol<sup>-1</sup>.<br>
        <b>Step 2 (Moles of NaOH):</b> n = 5 / 40 = 0.125 mol.<br>
        <b>Step 3 (Volume in Litres):</b> V = 450 mL = 0.450 L.<br>
        <b>Step 4 (Molarity M):</b> M = n / V = 0.125 / 0.450 = <b>0.278 mol L<sup>-1</sup> (0.278 M)</b>.`
  },
  {
    q: "Calculate the molality of 2.5 g of ethanoic acid (CH<sub>3</sub>COOH) dissolved in 75 g of benzene.",
    a: `<b>Step 1:</b> Molar mass of CH<sub>3</sub>COOH = 12&times;2 + 16&times;2 + 4 = 60 g mol<sup>-1</sup>.<br>
        <b>Step 2 (Moles of CH<sub>3</sub>COOH):</b> n = 2.5 / 60 = 0.0417 mol.<br>
        <b>Step 3 (Mass of benzene in kg):</b> w<sub>A</sub> = 75 g = 0.075 kg.<br>
        <b>Step 4 (Molality m):</b> m = (0.0417 / 75) &times; 1000 = <b>0.556 mol kg<sup>-1</sup> (0.556 m)</b>.`
  },
  {
    q: "If N<sub>2</sub> gas is bubbled through water at 293 K, how many millimoles of N<sub>2</sub> gas would dissolve in 1 litre of water? Given partial pressure of N<sub>2</sub> is 0.987 bar and K<sub>H</sub> for N<sub>2</sub> at 293 K is 76.48 kbar.",
    a: `<b>Step 1 (Henry's law &chi; = p / K<sub>H</sub>):</b> p = 0.987 bar, K<sub>H</sub> = 76.48 kbar = 76480 bar.<br>
        &chi;<sub>N2</sub> = 0.987 / 76480 = 1.29 &times; 10<sup>-5</sup>.<br>
        <b>Step 2 (Moles of water in 1 L):</b> n<sub>water</sub> = 1000 g / 18 g mol<sup>-1</sup> = 55.5 mol.<br>
        <b>Step 3 (Moles of N<sub>2</sub>):</b> &chi;<sub>N2</sub> &approx; n<sub>N2</sub> / n<sub>water</sub> &implies; n<sub>N2</sub> = (1.29 &times; 10<sup>-5</sup>) &times; 55.5 = 7.16 &times; 10<sup>-4</sup> mol.<br>
        <b>Step 4 (In millimoles):</b> n<sub>N2</sub> = (7.16 &times; 10<sup>-4</sup>) &times; 1000 = <b>0.716 millimoles</b>.`
  },
  {
    q: "The vapour pressure of pure water at 298 K is 23.8 mm Hg. 50 g of urea (NH<sub>2</sub>CONH<sub>2</sub>) is dissolved in 850 g of water. Calculate the vapour pressure of water for this solution and its relative lowering.",
    a: `<b>Step 1:</b> Moles of urea (M = 60) = 50 / 60 = 0.833 mol. Moles of water (M = 18) = 850 / 18 = 47.22 mol.<br>
        <b>Step 2 (Relative Lowering &chi;<sub>B</sub>):</b> &chi;<sub>urea</sub> = 0.833 / (0.833 + 47.22) = 0.833 / 48.053 = <b>0.0173</b>.<br>
        <b>Step 3 (Vapour pressure of solution p):</b> (p&deg; - p) / p&deg; = 0.0173 &implies; 23.8 - p = 0.0173 &times; 23.8 = 0.412 mm Hg.<br>
        p = 23.8 - 0.412 = <b>23.388 mm Hg (23.39 mm Hg)</b>.`
  },
  {
    q: "Vapour pressure of chloroform (CHCl<sub>3</sub>) and dichloromethane (CH<sub>2</sub>Cl<sub>2</sub>) at 298 K are 200 mm Hg and 415 mm Hg respectively. Calculate total vapour pressure of a mixture of 25.5 g CHCl<sub>3</sub> and 40 g CH<sub>2</sub>Cl<sub>2</sub>, and mole fractions in vapour phase.",
    a: `<b>Step 1 (Moles):</b> n(CHCl<sub>3</sub>, M=119.5) = 25.5 / 119.5 = 0.213 mol. n(CH<sub>2</sub>Cl<sub>2</sub>, M=85) = 40 / 85 = 0.470 mol.<br>
        <b>Step 2 (Liquid mole fractions):</b> Total = 0.683 mol. &chi;(CH<sub>2</sub>Cl<sub>2</sub>) = 0.470 / 0.683 = 0.688; &chi;(CHCl<sub>3</sub>) = 1 - 0.688 = 0.312.<br>
        <b>Step 3 (Partial &amp; Total Pressures):</b> p(CH<sub>2</sub>Cl<sub>2</sub>) = 415 &times; 0.688 = 285.52 mm Hg; p(CHCl<sub>3</sub>) = 200 &times; 0.312 = 62.4 mm Hg.<br>
        <b>p<sub>total</sub> = 285.52 + 62.4 = 347.92 mm Hg</b>.<br>
        <b>Step 4 (Vapour Phase):</b> y(CH<sub>2</sub>Cl<sub>2</sub>) = 285.52 / 347.92 = <b>0.82</b>; y(CHCl<sub>3</sub>) = 62.4 / 347.92 = <b>0.18</b>.`
  },
  {
    q: "Differentiate between Ideal and Non-Ideal Solutions with 4 major points of comparison.",
    a: `1. <b>Raoult's Law:</b> Ideal obeys p<sub>i</sub> = p<sub>i</sub>&deg;&chi;<sub>i</sub> over full range; Non-ideal does not obey.<br>
        2. <b>&Delta;H<sub>mix</sub>:</b> Ideal &Delta;H<sub>mix</sub> = 0; Non-ideal &Delta;H<sub>mix</sub> &ne; 0 (+ve or -ve).<br>
        3. <b>&Delta;V<sub>mix</sub>:</b> Ideal &Delta;V<sub>mix</sub> = 0; Non-ideal &Delta;V<sub>mix</sub> &ne; 0 (+ve or -ve).<br>
        4. <b>Intermolecular Forces:</b> Ideal F<sub>A-B</sub> = F<sub>A-A</sub> = F<sub>B-B</sub>; Non-ideal F<sub>A-B</sub> &ne; F<sub>A-A</sub>, F<sub>B-B</sub>.`
  },
  {
    q: "Explain why mixing acetone and ethanol causes positive deviation from Raoult's law.",
    a: `In pure ethanol, molecules are strongly held together by extensive intermolecular hydrogen bonds. When acetone is added, acetone molecules slip between ethanol molecules and break their hydrogen bonds. The intermolecular attractive forces between ethanol-acetone (A-B) become weaker than ethanol-ethanol (A-A) bonds. Consequently, escaping tendency of both liquids increases, resulting in higher vapour pressure than expected from Raoult's law (Positive Deviation, &Delta;H<sub>mix</sub> &gt; 0, &Delta;V<sub>mix</sub> &gt; 0).`
  },
  {
    q: "Explain why a mixture of phenol and aniline shows negative deviation from Raoult's law.",
    a: `Phenol (acidic due to phenolic -OH) and Aniline (basic due to lone pair on -NH<sub>2</sub>) form strong intermolecular hydrogen bonds between the phenolic proton (-O-H) and nitrogen lone pair (-NH<sub>2</sub>). The new A-B attractive forces are significantly stronger than pure phenol-phenol (A-A) or aniline-aniline (B-B) dipole forces. This reduces the escaping tendency of molecules, causing lower vapour pressure (Negative Deviation, &Delta;H<sub>mix</sub> &lt; 0, &Delta;V<sub>mix</sub> &lt; 0).`
  },
  {
    q: "18 g of glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) is dissolved in 1 kg of water. At what temperature will water boil at 1.013 bar? (K<sub>b</sub> for water = 0.52 K kg mol<sup>-1</sup>).",
    a: `<b>Step 1:</b> Molar mass of glucose = 180 g mol<sup>-1</sup>. Moles n<sub>B</sub> = 18 / 180 = 0.1 mol.<br>
        <b>Step 2 (Molality m):</b> m = 0.1 mol / 1 kg = 0.1 m.<br>
        <b>Step 3 (Boiling elevation &Delta;T<sub>b</sub>):</b> &Delta;T<sub>b</sub> = K<sub>b</sub> &times; m = 0.52 &times; 0.1 = <b>0.052 K</b>.<br>
        <b>Step 4 (Boiling point of solution T<sub>b</sub>):</b> Pure water boils at 373.15 K (100 &deg;C).<br>
        T<sub>b</sub> = 373.15 + 0.052 = <b>373.202 K (100.052 &deg;C)</b>.`
  },
  {
    q: "The boiling point of benzene is 353.23 K. When 1.80 g of a non-volatile solute was dissolved in 90 g of benzene, the boiling point raised to 354.11 K. Calculate the molar mass of the solute. (K<sub>b</sub> for benzene = 2.53 K kg mol<sup>-1</sup>).",
    a: `<b>Step 1 (&Delta;T<sub>b</sub>):</b> &Delta;T<sub>b</sub> = 354.11 - 353.23 = 0.88 K.<br>
        <b>Step 2 (Formula M<sub>B</sub>):</b> M<sub>B</sub> = (1000 &times; K<sub>b</sub> &times; w<sub>B</sub>) / (&Delta;T<sub>b</sub> &times; w<sub>A</sub>).<br>
        <b>Step 3 (Calculation):</b> M<sub>B</sub> = (1000 &times; 2.53 &times; 1.80) / (0.88 &times; 90) = 4554 / 79.2 = <b>57.5 g mol<sup>-1</sup></b>.`
  },
  {
    q: "45 g of ethylene glycol (C<sub>2</sub>H<sub>6</sub>O<sub>2</sub>) is mixed with 600 g of water. Calculate (a) the freezing point depression and (b) the freezing point of the solution. (K<sub>f</sub> for water = 1.86 K kg mol<sup>-1</sup>).",
    a: `<b>Step 1 (Moles of glycol, M = 62):</b> n<sub>B</sub> = 45 / 62 = 0.726 mol.<br>
        <b>Step 2 (Molality m):</b> m = (0.726 / 600) &times; 1000 = 1.21 mol kg<sup>-1</sup>.<br>
        <b>Step 3 (Freezing point depression &Delta;T<sub>f</sub>):</b> &Delta;T<sub>f</sub> = K<sub>f</sub> &times; m = 1.86 &times; 1.21 = <b>2.25 K</b>.<br>
        <b>Step 4 (Freezing point of solution T<sub>f</sub>):</b> T<sub>f</sub> = 273.15 - 2.25 = <b>270.90 K (-2.25 &deg;C)</b>.`
  },
  {
    q: "1.00 g of a non-electrolyte solute dissolved in 50 g of benzene lowered the freezing point of benzene by 0.40 K. The cryoscopic constant of benzene is 5.12 K kg mol<sup>-1</sup>. Find the molar mass of the solute.",
    a: `<b>Step 1 (Formula):</b> M<sub>B</sub> = (1000 &times; K<sub>f</sub> &times; w<sub>B</sub>) / (&Delta;T<sub>f</sub> &times; w<sub>A</sub>).<br>
        <b>Step 2 (Calculation):</b> M<sub>B</sub> = (1000 &times; 5.12 &times; 1.00) / (0.40 &times; 50) = 5120 / 20 = <b>256 g mol<sup>-1</sup></b>.`
  },
  {
    q: "200 cm<sup>3</sup> of an aqueous solution of a protein contains 1.26 g of the protein. The osmotic pressure of such a solution at 300 K is found to be 2.57 &times; 10<sup>-3</sup> bar. Calculate the molar mass of the protein. (R = 0.083 L bar K<sup>-1</sup> mol<sup>-1</sup>).",
    a: `<b>Step 1 (Data):</b> V = 200 cm<sup>3</sup> = 0.200 L, w<sub>B</sub> = 1.26 g, &Pi; = 2.57 &times; 10<sup>-3</sup> bar, T = 300 K.<br>
        <b>Step 2 (Formula M<sub>B</sub>):</b> M<sub>B</sub> = (w<sub>B</sub> &times; R &times; T) / (&Pi; &times; V).<br>
        <b>Step 3 (Calculation):</b> M<sub>B</sub> = (1.26 &times; 0.083 &times; 300) / (2.57 &times; 10<sup>-3</sup> &times; 0.200) = 31.374 / (5.14 &times; 10<sup>-4</sup>) = <b>61,038.9 g mol<sup>-1</sup> (61,039 g mol<sup>-1</sup>)</b>.`
  },
  {
    q: "Explain why osmotic pressure measurement is preferred over boiling point elevation or freezing point depression for determining the molecular masses of polymers and biological macromolecules.",
    a: `1. <b>Prevents Thermal Denaturation:</b> Osmotic pressure is measured at ambient room temperature, preventing thermal decomposition of fragile biomolecules (proteins, enzymes, DNA) which denature at elevated boiling points.<br>
        2. <b>Measurable Magnitude at Low Concentration:</b> Because macromolecules have huge molar masses, their molar concentration is very small (~10<sup>-4</sup> M). &Delta;T<sub>b</sub> and &Delta;T<sub>f</sub> values are undetectable (~0.0001 K), whereas osmotic pressure is several millimetres of hydrostatic column (~20-30 mm Hg), easily measured with high precision.<br>
        3. Uses convenient <b>Molarity</b> (concentration per unit volume).`
  },
  {
    q: "State Van't Hoff Boyle's law and Van't Hoff Charles' law for dilute solutions.",
    a: `&bull; <b>Van't Hoff-Boyle's Law:</b> At constant temperature, the osmotic pressure (&Pi;) of a dilute solution is directly proportional to its molar concentration (C) or inversely proportional to its volume (V): &Pi; &prop; C &prop; 1/V.<br>
        &bull; <b>Van't Hoff-Charles' Law:</b> At constant concentration, the osmotic pressure (&Pi;) of a dilute solution is directly proportional to its absolute temperature (T): &Pi; &prop; T.<br>
        Combining both yields: &Pi; &prop; C T &implies; <b>&Pi; = C R T</b>.`
  },
  {
    q: "Distinguish between Osmosis and Diffusion with 3 key differences.",
    a: `1. <b>Semipermeable Membrane:</b> Osmosis strictly requires a semipermeable membrane (SPM); Diffusion occurs without any membrane.<br>
        2. <b>Flow of Particles:</b> In Osmosis, only solvent molecules move from lower concentration of solution (pure solvent) to higher concentration; In Diffusion, both solute and solvent particles move freely from higher to lower concentration.<br>
        3. <b>Reversibility &amp; Pressure:</b> Osmosis can be stopped or reversed by applying external hydrostatic pressure (&Pi;); Diffusion cannot be reversed by external pressure.`
  },
  {
    q: "Describe Reverse Osmosis (RO) and mention its industrial application in desalination of seawater.",
    a: `When external pressure greater than the osmotic pressure (P &gt; &Pi;) is applied to the concentrated solution compartment, the natural direction of osmosis is reversed. Pure solvent (water) is forced out of the saline solution across a synthetic semipermeable membrane (such as porous cellulose acetate supported on polymer backing) into the pure freshwater reservoir.<br>
    <b>Industrial Application:</b> It is used worldwide for large-scale <b>desalination of seawater</b> to produce potable drinking water and in household RO water purifiers.`
  },
  {
    q: "2 g of benzoic acid (C<sub>6</sub>H<sub>5</sub>COOH) dissolved in 25 g of benzene shows a depression in freezing point equal to 1.62 K. Molal depression constant for benzene is 4.9 K kg mol<sup>-1</sup>. What is the percentage association of acid if it forms dimer in solution?",
    a: `<b>Step 1 (Normal M<sub>B</sub>):</b> Molar mass of C<sub>6</sub>H<sub>5</sub>COOH = 7&times;12 + 6&times;1 + 2&times;16 = 122 g mol<sup>-1</sup>.<br>
        <b>Step 2 (Calculated Experimental M<sub>B,exp</sub>):</b> M<sub>B,exp</sub> = (1000 &times; K<sub>f</sub> &times; w<sub>B</sub>) / (&Delta;T<sub>f</sub> &times; w<sub>A</sub>) = (1000 &times; 4.9 &times; 2) / (1.62 &times; 25) = 9800 / 40.5 = 241.98 g mol<sup>-1</sup>.<br>
        <b>Step 3 (Van't Hoff factor i):</b> i = Normal M<sub>B</sub> / M<sub>B,exp</sub> = 122 / 241.98 = 0.504.<br>
        <b>Step 4 (Degree of association &alpha; for dimer n=2):</b> &alpha; = 2(1 - i) = 2(1 - 0.504) = 2(0.496) = 0.992.<br>
        <b>Percentage association = 99.2%</b>.`
  },
  {
    q: "0.6 mL of acetic acid (CH<sub>3</sub>COOH), having density 1.06 g mL<sup>-1</sup>, is dissolved in 1 litre of water. The depression in freezing point observed was 0.0205 &deg;C. Calculate the Van't Hoff factor and dissociation constant K<sub>a</sub>.",
    a: `<b>Step 1 (Mass of CH<sub>3</sub>COOH):</b> Mass = Volume &times; Density = 0.6 &times; 1.06 = 0.636 g.<br>
        <b>Step 2 (Moles &amp; Molality m):</b> M = 60 g mol<sup>-1</sup>. Moles = 0.636 / 60 = 0.0106 mol. In 1 L water (1 kg), m = 0.0106 mol kg<sup>-1</sup>.<br>
        <b>Step 3 (Theoretical &Delta;T<sub>f,cal</sub>):</b> &Delta;T<sub>f,cal</sub> = K<sub>f</sub> &times; m = 1.86 &times; 0.0106 = 0.0197 K.<br>
        <b>Step 4 (Van't Hoff factor i):</b> i = &Delta;T<sub>f,obs</sub> / &Delta;T<sub>f,cal</sub> = 0.0205 / 0.0197 = <b>1.041</b>.<br>
        <b>Step 5 (Degree of dissociation &alpha; &amp; K<sub>a</sub>):</b> &alpha; = i - 1 = 1.041 - 1 = 0.041.<br>
        K<sub>a</sub> = C &alpha;<sup>2</sup> / (1 - &alpha;) &approx; (0.0106) &times; (0.041)<sup>2</sup> = <b>1.78 &times; 10<sup>-5</sup> mol L<sup>-1</sup></b>.`
  },
  {
    q: "Determine the osmotic pressure of a solution prepared by dissolving 25 mg of K<sub>2</sub>SO<sub>4</sub> in 2 litres of water at 25 &deg;C, assuming complete dissociation. (R = 0.0821 L atm K<sup>-1</sup> mol<sup>-1</sup>, M of K<sub>2</sub>SO<sub>4</sub> = 174 g mol<sup>-1</sup>).",
    a: `<b>Step 1 (Dissociation &amp; i):</b> K<sub>2</sub>SO<sub>4</sub> &rarr; 2 K<sup>+</sup> + SO<sub>4</sub><sup>2-</sup> (n = 3 ions). Complete dissociation &implies; <b>i = 3</b>.<br>
        <b>Step 2 (Moles of K<sub>2</sub>SO<sub>4</sub>):</b> w<sub>B</sub> = 25 mg = 0.025 g. n<sub>B</sub> = 0.025 / 174 = 1.437 &times; 10<sup>-4</sup> mol.<br>
        <b>Step 3 (Osmotic Pressure &Pi; = i (n<sub>B</sub>/V) R T):</b> T = 25 + 273.15 = 298.15 K, V = 2 L.<br>
        &Pi; = 3 &times; [ (1.437 &times; 10<sup>-4</sup>) / 2 ] &times; 0.0821 &times; 298.15 = 3 &times; (7.184 &times; 10<sup>-5</sup>) &times; 24.478 = <b>5.27 &times; 10<sup>-3</sup> atm (5.34 &times; 10<sup>-3</sup> bar)</b>.`
  },
  {
    q: "Derive the relationship between Van't Hoff factor i and degree of dissociation &alpha; for an electrolyte A<sub>x</sub>B<sub>y</sub>.",
    a: `Consider 1 mole of electrolyte A<sub>x</sub>B<sub>y</sub> dissociating into <i>x</i> A<sup>y+</sup> and <i>y</i> B<sup>x-</sup> ions (total ions n = x + y):<br>
        Initial: 1 mole electrolyte, 0 ions.<br>
        At equilibrium: (1 - &alpha;) moles of un-ionized electrolyte, x&alpha; + y&alpha; = n&alpha; moles of ions.<br>
        Total moles of particles = (1 - &alpha;) + n&alpha; = 1 + (n - 1)&alpha;.<br>
        i = Total moles at equilibrium / Initial moles = [1 + (n - 1)&alpha;] / 1 &implies; <b>i = 1 + (n - 1)&alpha;</b> &implies; <b>&alpha; = (i - 1) / (n - 1)</b>.`
  },
  {
    q: "Derive the relationship between Van't Hoff factor i and degree of association &alpha; for a solute associating into n-mers.",
    a: `Consider n molecules of solute A associating to form 1 molecule of A<sub>n</sub>: n A &harr; A<sub>n</sub>.<br>
        Initial: 1 mole of A, 0 moles of A<sub>n</sub>.<br>
        At equilibrium: (1 - &alpha;) moles of unassociated monomer, &alpha;/n moles of associated polymer.<br>
        Total moles at equilibrium = 1 - &alpha; + &alpha;/n = 1 - &alpha;(1 - 1/n).<br>
        i = [1 - &alpha;(1 - 1/n)] / 1 &implies; <b>i = 1 - &alpha;(1 - 1/n)</b> &implies; <b>&alpha; = (1 - i) / (1 - 1/n) = (1 - i)n / (n - 1)</b>.`
  },
  {
    q: "Predict the increasing order of boiling point elevation for 0.1 M solutions of Glucose, NaCl, CaCl<sub>2</sub>, and AlCl<sub>3</sub>. Explain your reasoning.",
    a: `&Delta;T<sub>b</sub> is a colligative property proportional to total particle concentration (i &times; C):<br>
        &bull; Glucose: i = 1 &implies; iC = 0.1 M<br>
        &bull; NaCl: i = 2 &implies; iC = 0.2 M<br>
        &bull; CaCl<sub>2</sub>: i = 3 &implies; iC = 0.3 M<br>
        &bull; AlCl<sub>3</sub>: i = 4 &implies; iC = 0.4 M<br>
        <b>Increasing Order of &Delta;T<sub>b</sub>:</b> <b>Glucose (0.1 M) &lt; NaCl (0.1 M) &lt; CaCl<sub>2</sub> (0.1 M) &lt; AlCl<sub>3</sub> (0.1 M)</b>.`
  },
  {
    q: "Predict the order of freezing point depression and actual freezing points for 0.01 M solutions of Urea, KNO<sub>3</sub>, and BaCl<sub>2</sub>.",
    a: `Effective concentration iC determines &Delta;T<sub>f</sub>:<br>
        &bull; Urea: i = 1 &implies; iC = 0.01 M<br>
        &bull; KNO<sub>3</sub>: i = 2 &implies; iC = 0.02 M<br>
        &bull; BaCl<sub>2</sub>: i = 3 &implies; iC = 0.03 M<br>
        <b>Depression in Freezing Point (&Delta;T<sub>f</sub>):</b> Urea &lt; KNO<sub>3</sub> &lt; BaCl<sub>2</sub>.<br>
        <b>Actual Freezing Point (T<sub>f</sub> = 0 - &Delta;T<sub>f</sub>):</b> <b>BaCl<sub>2</sub> &lt; KNO<sub>3</sub> &lt; Urea</b> (BaCl<sub>2</sub> has lowest freezing point).`
  },
  {
    q: "Why do intravenous (IV) fluids injected into the bloodstream need to be strictly isotonic with 0.9% (w/V) NaCl solution?",
    a: `0.9% (w/V) NaCl (normal saline) has the exact same osmotic pressure as human red blood cell intracellular fluid.<br>
    &bull; If a <b>hypertonic</b> solution (&gt;0.9%) is injected, water leaves RBCs by exosmosis, causing them to shrink and shrivel (plasmolysis / crenation), disrupting cellular respiration.<br>
    &bull; If a <b>hypotonic</b> solution (&lt;0.9%) is injected, water enters RBCs by endosmosis, causing cells to swell and burst (hemolysis), which is fatal.`
  },
  {
    q: "Explain why elevation in boiling point is a colligative property.",
    a: `Adding a non-volatile solute reduces the fraction of surface area occupied by solvent molecules, proportionally lowering the solvent vapour pressure (&Delta;p &prop; &chi;<sub>B</sub>). To make vapour pressure reach atmospheric pressure, the temperature must be raised by &Delta;T<sub>b</sub>. Since &Delta;T<sub>b</sub> depends solely on the number of solute particles (&chi;<sub>B</sub> or molality m) and is independent of solute chemical identity, it is a true colligative property.`
  },
  {
    q: "Explain why depression in freezing point is a colligative property.",
    a: `At the freezing point, liquid solvent and solid ice exist in dynamic equilibrium having identical vapour pressure. A non-volatile solute lowers the vapour pressure of the liquid solvent without affecting the vapour pressure of solid ice. Consequently, the liquid curve intersects the ice sublimation curve at a lower temperature (&Delta;T<sub>f</sub> &prop; m). Since &Delta;T<sub>f</sub> is governed entirely by the number of solute particles per kg of solvent, it is a colligative property.`
  },
  {
    q: "Explain why relative lowering of vapour pressure is a colligative property while lowering of vapour pressure is not.",
    a: `Lowering of vapour pressure (&Delta;p = p<sub>A</sub>&deg; - p = p<sub>A</sub>&deg;&chi;<sub>B</sub>) depends on both the mole fraction of solute and the initial vapour pressure of pure solvent (p<sub>A</sub>&deg;), which varies with temperature and nature of solvent. However, Relative Lowering of Vapour Pressure [(p<sub>A</sub>&deg; - p) / p<sub>A</sub>&deg; = &chi;<sub>B</sub>] is equal purely to the mole fraction of solute particles, independent of the nature of solvent and temperature. Hence, only RLVP is a pure colligative property.`
  },
  {
    q: "A solution containing 30 g of non-volatile solute in 90 g of water has vapour pressure 2.8 kPa at 298 K. When 18 g of water is added, new vapour pressure becomes 2.9 kPa. Calculate molar mass of solute and p&deg; of water.",
    a: `<b>Case 1:</b> (p&deg; - 2.8) / p&deg; = (30/M) / [ (30/M) + (90/18) ] &implies; 1 - 2.8/p&deg; = (30/M) / (30/M + 5) &implies; p&deg; / 2.8 = 1 + 5M/30 = 1 + M/6.<br>
        <b>Case 2 (Total water = 90+18 = 108 g = 6 mol):</b> p&deg; / 2.9 = 1 + 6M/30 = 1 + M/5.<br>
        Dividing: 2.9 / 2.8 = (1 + M/5) / (1 + M/6) &implies; 1.0357 (1 + M/6) = 1 + 0.2M &implies; 1.0357 + 0.1726M = 1 + 0.2M &implies; 0.0274M = 0.0357 &implies; <b>M = 23 g mol<sup>-1</sup></b>.<br>
        Substituting M=23: p&deg; = 2.8 &times; (1 + 23/6) = 2.8 &times; 4.833 = <b>3.53 kPa</b>.`
  },
  {
    q: "Henry's law constant for CO<sub>2</sub> in water is 1.67 &times; 10<sup>8</sup> Pa at 298 K. Calculate the quantity of CO<sub>2</sub> in 500 mL soda water packed under 2.5 atm CO<sub>2</sub> pressure at 298 K.",
    a: `<b>Step 1 (Pressure):</b> p = 2.5 atm = 2.5 &times; 101325 Pa = 2.533 &times; 10<sup>5</sup> Pa.<br>
        <b>Step 2 (Mole fraction by Henry's law):</b> &chi; = p / K<sub>H</sub> = (2.533 &times; 10<sup>5</sup>) / (1.67 &times; 10<sup>8</sup>) = 1.517 &times; 10<sup>-3</sup>.<br>
        <b>Step 3 (Moles of water in 500 mL = 500 g):</b> n<sub>water</sub> = 500 / 18 = 27.78 mol.<br>
        <b>Step 4 (Moles of CO<sub>2</sub>):</b> n<sub>CO2</sub> = &chi; &times; n<sub>water</sub> = (1.517 &times; 10<sup>-3</sup>) &times; 27.78 = 0.0421 mol.<br>
        <b>Step 5 (Mass of CO<sub>2</sub>, M=44):</b> Mass = 0.0421 &times; 44 = <b>1.854 g (1.85 g)</b>.`
  },
  {
    q: "An aqueous solution of 2% non-volatile solute exerts a pressure of 1.004 bar at the normal boiling point of the solvent. What is the molar mass of the solute?",
    a: `<b>Step 1:</b> Normal boiling point of water is 100 &deg;C where pure water vapour pressure p&deg; = 1.013 bar. p = 1.004 bar.<br>
        <b>Step 2 (RLVP):</b> (p&deg; - p) / p&deg; = (1.013 - 1.004) / 1.013 = 0.009 / 1.013 = 0.00888.<br>
        <b>Step 3 (Data):</b> 2% solution means w<sub>B</sub> = 2 g solute in 98 g water (w<sub>A</sub>).<br>
        <b>Step 4 (Formula):</b> (p&deg; - p) / p&deg; &approx; (w<sub>B</sub> &times; M<sub>A</sub>) / (M<sub>B</sub> &times; w<sub>A</sub>) &implies; 0.00888 = (2 &times; 18) / (M<sub>B</sub> &times; 98).<br>
        <b>M<sub>B</sub> = 36 / (0.00888 &times; 98) = 36 / 0.8702 = 41.37 g mol<sup>-1</sup></b>.`
  },
  {
    q: "What mass of ethylene glycol (C<sub>2</sub>H<sub>6</sub>O<sub>2</sub>, M = 62 g mol<sup>-1</sup>) must be added to 5.5 kg of water to lower the freezing point from 0 &deg;C to -10.0 &deg;C? (K<sub>f</sub> = 1.86 K kg mol<sup>-1</sup>).",
    a: `<b>Step 1 (&Delta;T<sub>f</sub>):</b> &Delta;T<sub>f</sub> = 10.0 K. w<sub>A</sub> = 5.5 kg = 5500 g.<br>
        <b>Step 2 (Formula w<sub>B</sub>):</b> &Delta;T<sub>f</sub> = (K<sub>f</sub> &times; w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; w<sub>A</sub>) &implies; w<sub>B</sub> = (&Delta;T<sub>f</sub> &times; M<sub>B</sub> &times; w<sub>A</sub>) / (1000 &times; K<sub>f</sub>).<br>
        <b>Step 3 (Calculation):</b> w<sub>B</sub> = (10.0 &times; 62 &times; 5500) / (1000 &times; 1.86) = 3,410,000 / 1860 = <b>1,833.3 g (1.833 kg)</b>.`
  },
  {
    q: "A 5% solution (by mass) of cane sugar (M = 342 g mol<sup>-1</sup>) in water has a freezing point of 271 K. Calculate the freezing point of a 5% solution of glucose (M = 180 g mol<sup>-1</sup>) in water if freezing point of pure water is 273.15 K.",
    a: `<b>Step 1 (Cane sugar &Delta;T<sub>f1</sub>):</b> &Delta;T<sub>f1</sub> = 273.15 - 271 = 2.15 K. Molality m<sub>1</sub> = (5/342) / 0.095 kg = 0.154 m.<br>
        K<sub>f</sub> = &Delta;T<sub>f1</sub> / m<sub>1</sub> = 2.15 / 0.154 = 13.96 K kg mol<sup>-1</sup>.<br>
        <b>Step 2 (Glucose molality m<sub>2</sub>):</b> m<sub>2</sub> = (5/180) / 0.095 kg = 0.292 m.<br>
        <b>Step 3 (Glucose &Delta;T<sub>f2</sub>):</b> &Delta;T<sub>f2</sub> = K<sub>f</sub> &times; m<sub>2</sub> = 13.96 &times; 0.292 = <b>4.08 K</b>.<br>
        <b>Step 4 (Freezing point of glucose solution):</b> T<sub>f</sub> = 273.15 - 4.08 = <b>269.07 K (-4.08 &deg;C)</b>.`
  },
  {
    q: "Two elements A and B form compounds AB<sub>2</sub> and AB<sub>4</sub>. When dissolved in 20 g of benzene, 1 g of AB<sub>2</sub> lowers freezing point by 2.3 K, while 1 g of AB<sub>4</sub> lowers it by 1.3 K. (K<sub>f</sub> for benzene = 5.1 K kg mol<sup>-1</sup>). Calculate atomic masses of A and B.",
    a: `<b>Step 1 (Molar mass of AB<sub>2</sub>):</b> M(AB<sub>2</sub>) = (1000 &times; 5.1 &times; 1.0) / (2.3 &times; 20) = 5100 / 46 = 110.87 g mol<sup>-1</sup>.<br>
        <b>Step 2 (Molar mass of AB<sub>4</sub>):</b> M(AB<sub>4</sub>) = (1000 &times; 5.1 &times; 1.0) / (1.3 &times; 20) = 5100 / 26 = 196.15 g mol<sup>-1</sup>.<br>
        <b>Step 3 (Solve system of equations):</b><br>
        a + 2b = 110.87 ...(1)<br>
        a + 4b = 196.15 ...(2)<br>
        Subtracting (1) from (2): 2b = 85.28 &implies; <b>b (Atomic mass of B) = 42.64 u</b>.<br>
        Substituting into (1): a = 110.87 - 2(42.64) = 110.87 - 85.28 = <b>25.59 u (Atomic mass of A)</b>.`
  },
  {
    q: "At 300 K, 36 g of glucose present in a litre of solution has osmotic pressure 4.98 bar. If the osmotic pressure is 1.52 bar at the same temperature, what is its concentration?",
    a: `<b>Step 1 (&Pi; = CRT):</b> &Pi;<sub>1</sub> = C<sub>1</sub> R T &nbsp;and&nbsp; &Pi;<sub>2</sub> = C<sub>2</sub> R T &implies; &Pi;<sub>1</sub> / &Pi;<sub>2</sub> = C<sub>1</sub> / C<sub>2</sub>.<br>
        <b>Step 2 (Initial concentration C<sub>1</sub>):</b> C<sub>1</sub> = 36 g L<sup>-1</sup> / 180 g mol<sup>-1</sup> = 0.2 mol L<sup>-1</sup>.<br>
        <b>Step 3 (Calculate C<sub>2</sub>):</b> 4.98 / 1.52 = 0.2 / C<sub>2</sub> &implies; C<sub>2</sub> = (0.2 &times; 1.52) / 4.98 = 0.304 / 4.98 = <b>0.061 mol L<sup>-1</sup> (0.061 M)</b>.`
  },
  {
    q: "Explain the term 'Abnormal Molar Mass'. Under what physical conditions does the experimental molar mass become less than or greater than the normal theoretical value?",
    a: `When the experimental molar mass of a solute determined from colligative properties differs from its normal formula mass, it is called <b>Abnormal Molar Mass</b>.<br>
    &bull; <b>Experimental Molar Mass &lt; Normal Molar Mass:</b> Occurs when the solute undergoes <b>dissociation</b> into ions (e.g. NaCl &rarr; Na<sup>+</sup> + Cl<sup>-</sup>). Particle count increases, colligative property increases, and since M<sub>B</sub> &prop; 1/Colligative, observed molar mass decreases.<br>
    &bull; <b>Experimental Molar Mass &gt; Normal Molar Mass:</b> Occurs when solute undergoes <b>association</b> (e.g. dimerization of ethanoic acid in benzene). Particle count decreases, colligative property decreases, causing observed molar mass to increase (approaching double).`
  },
  {
    q: "Calculate the boiling point of a 1.0 M aqueous solution of KCl (density = 1.04 g mL<sup>-1</sup>, K<sub>b</sub> = 0.52 K kg mol<sup>-1</sup>). Assume 100% complete ionization.",
    a: `<b>Step 1 (Find mass of solvent):</b> Mass of 1 L solution = 1000 &times; 1.04 = 1040 g. Mass of 1 mol KCl (M=74.5) = 74.5 g.<br>
        Mass of water w<sub>A</sub> = 1040 - 74.5 = 965.5 g = 0.9655 kg.<br>
        <b>Step 2 (Molality m):</b> m = 1.0 / 0.9655 = 1.0357 m.<br>
        <b>Step 3 (Van't Hoff factor i):</b> KCl &rarr; K<sup>+</sup> + Cl<sup>-</sup> (n=2, complete ionization) &implies; i = 2.<br>
        <b>Step 4 (Boiling elevation &Delta;T<sub>b</sub>):</b> &Delta;T<sub>b</sub> = i &times; K<sub>b</sub> &times; m = 2 &times; 0.52 &times; 1.0357 = <b>1.077 K</b>.<br>
        <b>Step 5 (Boiling Point):</b> T<sub>b</sub> = 100 &deg;C + 1.077 &deg;C = <b>101.077 &deg;C (374.227 K)</b>.`
  },
  {
    q: "Explain the thermodynamic relations for cryoscopic and ebullioscopic constants in terms of enthalpy of fusion and vaporization.",
    a: `Thermodynamically, K<sub>b</sub> and K<sub>f</sub> depend exclusively on solvent properties:<br>
        ${eqBox(`K_b = ${frac('R M_A (T_b&deg;)<sup>2</sup>', '1000 \\Delta H_{\\text{vap}}')} \\qquad | \\qquad K_f = ${frac('R M_A (T_f&deg;)<sup>2</sup>', '1000 \\Delta H_{\\text{fus}}')}`)}
        where R is gas constant (8.314 J K<sup>-1</sup> mol<sup>-1</sup>), M<sub>A</sub> is molar mass of solvent in g mol<sup>-1</sup>, T<sub>b</sub>&deg; and T<sub>f</sub>&deg; are solvent boiling/freezing points in K, and &Delta;H<sub>vap</sub>, &Delta;H<sub>fus</sub> are molar enthalpies of vaporization and fusion.`
  }
];

// Build Section B Questions
saData.forEach((item, idx) => {
  qaList.push({
    num: 40 + idx + 1,
    title: item.q,
    sec: 'B',
    marks: '2 & 3 Marks',
    body: `<div style="color: #FFFFFF; line-height: 1.75; font-size: 15.5px;">${item.a}</div>`
  });
});

// SECTION C: LA (5 Marks) Q81 - Q100
const laData = [
  {
    q: "Derive the thermodynamic relation between Relative Lowering of Vapour Pressure and Mole Fraction of Solute, and show step-by-step how it is utilized to determine the unknown molar mass of a non-volatile solute.",
    a: `<b>1. Theoretical Background &amp; Surface Mechanism:</b><br>
        In a pure volatile solvent A, the entire surface area is occupied by solvent molecules, leading to maximum evaporation rate and equilibrium vapour pressure p<sub>A</sub>&deg;. When a non-volatile solid solute B is dissolved, solute molecules occupy a fraction &chi;<sub>B</sub> of the liquid surface. Because non-volatile solute molecules do not evaporate, the rate of vaporization of solvent molecules decreases proportionally, establishing equilibrium at a lower vapour pressure p.<br><br>

        <b>2. Step-by-Step Derivation of Raoult's Law:</b><br>
        According to Raoult's Law for solvent in solution:
        ${eqBox(`p_A = p_A&deg; \\chi_A`)}
        Since &chi;<sub>A</sub> + &chi;<sub>B</sub> = 1 &implies; &chi;<sub>A</sub> = 1 - &chi;<sub>B</sub>:
        ${eqBox(`p_A = p_A&deg; (1 - \\chi_B) = p_A&deg; - p_A&deg; \\chi_B`)}
        Rearranging for lowering of vapour pressure &Delta;p:
        ${eqBox(`\\Delta p = p_A&deg; - p_A = p_A&deg; \\chi_B`)}
        Dividing both sides by pure solvent vapour pressure p<sub>A</sub>&deg;:
        ${eqBox(`${frac('p_A&deg; - p_A', 'p_A&deg;')} = \\chi_B`)}

        <b>3. Molar Mass Determination Formulation:</b><br>
        Let w<sub>B</sub> grams of non-volatile solute of unknown molar mass M<sub>B</sub> be dissolved in w<sub>A</sub> grams of solvent of molar mass M<sub>A</sub>.<br>
        Moles of solute: n<sub>B</sub> = w<sub>B</sub> / M<sub>B</sub>. Moles of solvent: n<sub>A</sub> = w<sub>A</sub> / M<sub>A</sub>.<br>
        Mole fraction of solute:
        ${eqBox(`\\chi_B = ${frac('n_B', 'n_A + n_B')} = ${frac('w_B / M_B', '(w_A / M_A) + (w_B / M_B)')}`)}
        For dilute solutions (n<sub>B</sub> &ll; n<sub>A</sub>), (w<sub>A</sub>/M<sub>A</sub>) + (w<sub>B</sub>/M<sub>B</sub>) &approx; w<sub>A</sub>/M<sub>A</sub>:
        ${eqBox(`${frac('p_A&deg; - p_A', 'p_A&deg;')} \\approx ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\times M_A', 'M_B \\times w_A')}`)}
        Rearranging for unknown solute molar mass M<sub>B</sub>:
        ${eqBox(`<b>M_B = ${frac('w_B \\times M_A', 'w_A')} \\times ${frac('p_A&deg;', 'p_A&deg; - p_A')}</b>`)}`
  },
  {
    q: "State Raoult's law for a solution of volatile liquids. Derive the expression for total vapour pressure and explain the composition of vapour phase with Dalton's law.",
    a: `<b>1. Statement:</b> For a binary solution of two miscible volatile liquids A and B, the partial vapour pressure of each component in solution at a given temperature is directly proportional to its mole fraction in liquid phase, and is equal to the product of vapour pressure of pure component and its mole fraction in solution:
        ${eqBox(`p_A = p_A&deg; \\chi_A \\qquad | \\qquad p_B = p_B&deg; \\chi_B`)}

        <b>2. Derivation of Total Vapour Pressure (p<sub>total</sub>):</b><br>
        By Dalton's Law of Partial Pressures, total pressure p<sub>total</sub> is:
        ${eqBox(`p_{\\text{total}} = p_A + p_B = p_A&deg; \\chi_A + p_B&deg; \\chi_B`)}
        Since &chi;<sub>A</sub> = 1 - &chi;<sub>B</sub>:
        ${eqBox(`p_{\\text{total}} = p_A&deg; (1 - \\chi_B) + p_B&deg; \\chi_B = <b>p_A&deg; + (p_B&deg; - p_A&deg;) \\chi_B</b>`)}
        <i>Significance: Total vapour pressure varies linearly with mole fraction of component B.</i><br><br>

        <b>3. Vapour Phase Composition (Dalton's Law):</b><br>
        Let y<sub>A</sub> and y<sub>B</sub> be mole fractions of A and B in vapour phase above the liquid at equilibrium:
        ${eqBox(`p_A = y_A p_{\\text{total}} &implies; <b>y_A = ${frac('p_A', 'p_{\\text{total}}')} = ${frac('p_A&deg; \\chi_A', 'p_A + p_B')}</b>`)}
        ${eqBox(`p_B = y_B p_{\\text{total}} &implies; <b>y_B = ${frac('p_B', 'p_{\\text{total}}')} = ${frac('p_B&deg; \\chi_B', 'p_A + p_B')}</b>`)}
        <i>Konovalov's Rule: The vapour phase is always richer in the more volatile component (component with higher pure vapour pressure p&deg;).</i>`
  },
  {
    q: "What are non-ideal solutions? Discuss in detail positive and negative deviations from Raoult's law with respect to molecular interactions, thermodynamics, and azeotrope formation.",
    a: `<b>1. Definition:</b> Solutions that do not obey Raoult's law over the entire concentration range (&Delta;H<sub>mix</sub> &ne; 0, &Delta;V<sub>mix</sub> &ne; 0) are non-ideal solutions.<br><br>

        <b>2. Positive Deviation from Raoult's Law:</b><br>
        &bull; <b>Intermolecular Forces:</b> A-B attractions are weaker than A-A and B-B attractions (F<sub>A-B</sub> &lt; F<sub>A-A</sub>, F<sub>B-B</sub>). Molecules escape more readily into vapour phase.<br>
        &bull; <b>Partial &amp; Total Pressures:</b> p<sub>A</sub> &gt; p<sub>A</sub>&deg;&chi;<sub>A</sub>, p<sub>B</sub> &gt; p<sub>B</sub>&deg;&chi;<sub>B</sub>, p<sub>total</sub> &gt; p<sub>A</sub> + p<sub>B</sub>.<br>
        &bull; <b>Thermodynamics:</b> &Delta;H<sub>mix</sub> &gt; 0 (Endothermic, absorbs heat because energy required to break A-A/B-B bonds exceeds energy released on forming A-B bonds), &Delta;V<sub>mix</sub> &gt; 0 (Volume expansion due to looser packing).<br>
        &bull; <b>Examples:</b> Ethanol + Acetone, Carbon disulfide (CS<sub>2</sub>) + Acetone, Ethanol + Water.<br>
        &bull; <b>Azeotrope:</b> Forms <b>Minimum Boiling Azeotrope</b> at specific composition where vapour pressure curve passes through a maximum.<br><br>

        <b>3. Negative Deviation from Raoult's Law:</b><br>
        &bull; <b>Intermolecular Forces:</b> A-B attractions are stronger than A-A and B-B attractions (F<sub>A-B</sub> &gt; F<sub>A-A</sub>, F<sub>B-B</sub>) due to new hydrogen bonds or strong dipole interactions.<br>
        &bull; <b>Partial &amp; Total Pressures:</b> p<sub>A</sub> &lt; p<sub>A</sub>&deg;&chi;<sub>A</sub>, p<sub>B</sub> &lt; p<sub>B</sub>&deg;&chi;<sub>B</sub>, p<sub>total</sub> &lt; p<sub>A</sub> + p<sub>B</sub>.<br>
        &bull; <b>Thermodynamics:</b> &Delta;H<sub>mix</sub> &lt; 0 (Exothermic, heat released), &Delta;V<sub>mix</sub> &lt; 0 (Volume contraction due to tighter molecular packing).<br>
        &bull; <b>Examples:</b> Chloroform (CHCl<sub>3</sub>) + Acetone (CH<sub>3</sub>COCH<sub>3</sub>), Phenol + Aniline, Nitric acid (HNO<sub>3</sub>) + Water.<br>
        &bull; <b>Azeotrope:</b> Forms <b>Maximum Boiling Azeotrope</b> where vapour pressure curve passes through a minimum.`
  },
  {
    q: "Explain Elevation of Boiling Point (&Delta;T<sub>b</sub>). Derive &Delta;T<sub>b</sub> = K<sub>b</sub> m, define ebullioscopic constant, and formulate the equation for finding solute molar mass.",
    a: `<b>1. Physical Principle:</b> The boiling point of a liquid is the temperature at which its saturated vapour pressure equals the external atmospheric pressure (1 atm / 1.013 bar). Since dissolving a non-volatile solute lowers the vapour pressure of the liquid solvent, the solution must be heated to a higher temperature (T<sub>b</sub>) than the pure solvent (T<sub>b</sub>&deg;) to reach 1 atm pressure. The difference &Delta;T<sub>b</sub> = T<sub>b</sub> - T<sub>b</sub>&deg; is the <b>Elevation of Boiling Point</b>.<br><br>

        <b>2. Thermodynamic Derivation:</b><br>
        From the Clausius-Clapeyron equation and Raoult's law for dilute solutions:
        ${eqBox(`\\Delta T_b \\propto \\Delta p \\propto \\chi_B = ${frac('n_B', 'n_A')} = ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\times M_A', 'M_B \\times w_A')}`)}
        Since M<sub>A</sub> (molar mass of solvent) is constant for a given solvent:
        ${eqBox(`\\Delta T_b \\propto ${frac('w_B \\times 1000', 'M_B \\times w_A')} = m \\quad \\text{(Molality)} &implies; <b>\\Delta T_b = K_b m</b>`)}
        where <b>K<sub>b</sub></b> is the <b>Molal Elevation Constant (Ebullioscopic Constant)</b>.<br><br>

        <b>3. Definition &amp; Thermodynamic Formula for K<sub>b</sub>:</b><br>
        K<sub>b</sub> is the elevation in boiling point when 1 mole of non-volatile solute is dissolved in 1000 g of solvent. Unit: <b>K kg mol<sup>-1</sup></b>.
        ${eqBox(`K_b = ${frac('R M_A (T_b&deg;)<sup>2</sup>', '1000 \\Delta H_{\\text{vap}}')}`)}

        <b>4. Solute Molar Mass Formula:</b>
        ${eqBox(`\\Delta T_b = K_b \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')} &implies; <b>M_B = ${frac('1000 \\times K_b \\times w_B', '\\Delta T_b \\times w_A')}</b>`)}`
  },
  {
    q: "Explain Depression in Freezing Point (&Delta;T<sub>f</sub>). Derive &Delta;T<sub>f</sub> = K<sub>f</sub> m, define cryoscopic constant, and explain its practical applications in antifreeze and de-icing.",
    a: `<b>1. Physical Principle:</b> Freezing point is the temperature at which liquid solvent and solid solvent (ice) have identical vapour pressures. A non-volatile solute lowers the vapour pressure of the liquid solvent, causing the solution vapour pressure curve to intersect the solid ice sublimation curve at a lower temperature (T<sub>f</sub> &lt; T<sub>f</sub>&deg;). The difference &Delta;T<sub>f</sub> = T<sub>f</sub>&deg; - T<sub>f</sub> is the <b>Depression in Freezing Point</b>.<br><br>

        <b>2. Step-by-Step Derivation:</b><br>
        For dilute solutions, lowering of freezing point is directly proportional to vapour pressure lowering &Delta;p, which is proportional to solute mole fraction &chi;<sub>B</sub>:
        ${eqBox(`\\Delta T_f \\propto \\Delta p \\propto \\chi_B = ${frac('w_B \\times M_A', 'M_B \\times w_A')} \\propto m &implies; <b>\\Delta T_f = K_f m</b>`)}
        where <b>K<sub>f</sub></b> is the <b>Molal Depression Constant (Cryoscopic Constant)</b>.<br><br>

        <b>3. Definition &amp; Formula for K<sub>f</sub>:</b><br>
        K<sub>f</sub> is the depression in freezing point for a 1 molal solution. Unit: <b>K kg mol<sup>-1</sup></b>. For water, K<sub>f</sub> = 1.86 K kg mol<sup>-1</sup>.
        ${eqBox(`K_f = ${frac('R M_A (T_f&deg;)<sup>2</sup>', '1000 \\Delta H_{\\text{fusion}}')}`)}
        Solute molar mass:
        ${eqBox(`<b>M_B = ${frac('1000 \\times K_f \\times w_B', '\\Delta T_f \\times w_A')}</b>`)}

        <b>4. Practical Applications:</b><br>
        &bull; <b>Antifreeze Solutions:</b> Ethylene glycol mixed with water (35% v/v) lowers freezing point to -17.6 &deg;C, preventing car radiators from freezing and cracking in sub-zero winters.<br>
        &bull; <b>De-icing Roads:</b> Spreading rock salt (NaCl) or CaCl<sub>2</sub> on snowy highways melts ice because the salt-ice mixture forms a solution with a freezing point below atmospheric winter temperatures (-21 &deg;C for NaCl, -55 &deg;C for CaCl<sub>2</sub>).`
  },
  {
    q: "Define Osmosis, Semipermeable Membrane, and Osmotic Pressure. Derive the Van't Hoff equation &Pi; = CRT and explain Reverse Osmosis desalination.",
    a: `<b>1. Definitions:</b><br>
        &bull; <b>Osmosis:</b> The spontaneous net migration of solvent molecules through a semipermeable membrane from pure solvent (or dilute solution) into a concentrated solution.<br>
        &bull; <b>Semipermeable Membrane (SPM):</b> A porous membrane (e.g. cellulose acetate, parchment, Cu<sub>2</sub>[Fe(CN)<sub>6</sub>]) having sub-nanometre pores that allow passage of small solvent molecules (H<sub>2</sub>O) while blocking large solute particles/hydrated ions.<br>
        &bull; <b>Osmotic Pressure (&Pi;):</b> The minimum excess hydrostatic pressure applied on the solution side to completely halt the inward osmotic flow of solvent molecules.<br><br>

        <b>2. Van't Hoff Derivation:</b><br>
        J.H. Van't Hoff showed that solute molecules in a dilute solution behave analogously to gas molecules occupying the same volume:<br>
        By Van't Hoff-Boyle's Law: &Pi; &prop; C (at constant T).<br>
        By Van't Hoff-Charles' Law: &Pi; &prop; T (at constant C).<br>
        Combining both laws:
        ${eqBox(`\\Pi \\propto C T &implies; <b>\\Pi = C R T = ${frac('n_B', 'V')} R T = ${frac('w_B R T', 'M_B V')}</b>`)}
        Rearranging for solute molar mass:
        ${eqBox(`<b>M_B = ${frac('w_B R T', '\\Pi V')}</b>`)}

        <b>3. Reverse Osmosis (RO) Desalination:</b><br>
        If external mechanical pressure applied on the seawater side exceeds osmotic pressure (P &gt; &Pi; &approx; 30 bar), chemical potential of water in solution exceeds pure water, reversing solvent flow. Pure water molecules are squeezed across the cellulose acetate SPM into the freshwater reservoir, leaving concentrated brine behind.`
  },
  {
    q: "What is Van't Hoff factor i? Derive complete step-by-step mathematical relations connecting i with (i) Degree of Dissociation (&alpha;) and (ii) Degree of Association (&alpha;).",
    a: `<b>1. Concept:</b> When solutes ionize or associate in solution, total particle count deviates from normal stoichiometry, leading to abnormal colligative properties. Van't Hoff factor <i>i</i> accounts for this deviation:
        ${eqBox(`i = ${frac('\\text{Observed Colligative Property}', '\\text{Calculated Colligative Property}')} = ${frac('\\text{Normal Molar Mass}', '\\text{Abnormal Molar Mass}')} = ${frac('\\text{Total moles at equilibrium}', '\\text{Initial moles}')}`)}

        <b>2. Derivation for Dissociation (Electrolytes):</b><br>
        Let 1 mole of electrolyte A<sub>x</sub>B<sub>y</sub> dissociate into <i>n</i> ions: A<sub>x</sub>B<sub>y</sub> &harr; x A<sup>+</sup> + y B<sup>-</sup> (n = x + y).<br>
        Initial: 1 mol.<br>
        At equilibrium: (1 - &alpha;) mol undissociated + n&alpha; mol ions.<br>
        Total moles = (1 - &alpha;) + n&alpha; = 1 + (n - 1)&alpha;.<br>
        ${eqBox(`i = ${frac('1 + (n - 1)\\alpha', '1')} &implies; <b>\\alpha = ${frac('i - 1', 'n - 1')}</b>`)}
        <i>For NaCl (n=2), &alpha; = i - 1. For CaCl<sub>2</sub> (n=3), &alpha; = (i - 1)/2. For Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> (n=5), &alpha; = (i - 1)/4.</i><br><br>

        <b>3. Derivation for Association (Dimerization/Polymerization):</b><br>
        Let n molecules of solute associate to form 1 molecule A<sub>n</sub>: n A &harr; A<sub>n</sub>.<br>
        Initial: 1 mol.<br>
        At equilibrium: (1 - &alpha;) mol unassociated monomer + (&alpha;/n) mol polymer.<br>
        Total moles = (1 - &alpha;) + &alpha;/n = 1 - &alpha;(1 - 1/n).<br>
        ${eqBox(`i = 1 - \\alpha \\left(1 - ${frac('1', 'n')}\\right) &implies; <b>\\alpha = ${frac('1 - i', '1 - 1/n')} = ${frac('(1 - i)n', 'n - 1')}</b>`)}
        <i>For dimerization (n=2, e.g. benzoic acid in benzene), &alpha; = 2(1 - i).</i>`
  },
  {
    q: "(a) 100 g of liquid A (M<sub>A</sub> = 140 g mol<sup>-1</sup>) was dissolved in 1000 g of liquid B (M<sub>B</sub> = 180 g mol<sup>-1</sup>). Pure vapour pressure p<sub>B</sub>&deg; = 500 torr. Total solution pressure is 475 torr. Calculate p<sub>A</sub>&deg; and p<sub>A</sub>. (b) Explain minimum boiling azeotrope.",
    a: `<b>(a) Calculation:</b><br>
        <b>Step 1 (Moles):</b> n<sub>A</sub> = 100 / 140 = 0.714 mol. n<sub>B</sub> = 1000 / 180 = 5.556 mol. Total = 6.270 mol.<br>
        <b>Step 2 (Mole fractions):</b> &chi;<sub>A</sub> = 0.714 / 6.270 = 0.114. &chi;<sub>B</sub> = 1 - 0.114 = 0.886.<br>
        <b>Step 3 (Partial pressure of B):</b> p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub> = 500 &times; 0.886 = 443.0 torr.<br>
        <b>Step 4 (Partial pressure of A):</b> p<sub>total</sub> = p<sub>A</sub> + p<sub>B</sub> &implies; 475 = p<sub>A</sub> + 443.0 &implies; <b>p<sub>A</sub> = 32.0 torr</b>.<br>
        <b>Step 5 (Pure vapour pressure p<sub>A</sub>&deg;):</b> p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> &implies; p<sub>A</sub>&deg; = 32.0 / 0.114 = <b>280.7 torr</b>.<br><br>

        <b>(b) Minimum Boiling Azeotrope:</b> Binary solutions showing large positive deviation from Raoult's law exhibit a maximum in their vapour pressure curve. At this composition, the solution boils at a constant minimum temperature lower than either pure component. Example: 95.4% ethanol + 4.6% water (b.p. 351.15 K).`
  },
  {
    q: "(a) Calculate freezing point depression for 0.05 m aqueous solutions of Glucose, NaCl, BaCl<sub>2</sub>, and FeCl<sub>3</sub> (K<sub>f</sub> = 1.86 K kg mol<sup>-1</sup>). (b) Explain Plasmolysis and Hemolysis.",
    a: `<b>(a) Freezing Point Depressions (&Delta;T<sub>f</sub> = i K<sub>f</sub> m):</b><br>
        1. <b>Glucose (Non-electrolyte, i=1):</b> &Delta;T<sub>f</sub> = 1 &times; 1.86 &times; 0.05 = <b>0.093 K</b> (T<sub>f</sub> = -0.093 &deg;C).<br>
        2. <b>NaCl (i=2):</b> &Delta;T<sub>f</sub> = 2 &times; 1.86 &times; 0.05 = <b>0.186 K</b> (T<sub>f</sub> = -0.186 &deg;C).<br>
        3. <b>BaCl<sub>2</sub> (i=3):</b> &Delta;T<sub>f</sub> = 3 &times; 1.86 &times; 0.05 = <b>0.279 K</b> (T<sub>f</sub> = -0.279 &deg;C).<br>
        4. <b>FeCl<sub>3</sub> (i=4):</b> &Delta;T<sub>f</sub> = 4 &times; 1.86 &times; 0.05 = <b>0.372 K</b> (T<sub>f</sub> = -0.372 &deg;C).<br><br>

        <b>(b) Biological Osmotic Phenomena:</b><br>
        &bull; <b>Plasmolysis:</b> When plant/animal cells are placed in a hypertonic solution (&gt;0.9% NaCl), water flows out by exosmosis, causing cellular protoplasm to shrink and pull away from the cell wall.<br>
        &bull; <b>Hemolysis:</b> When RBCs are placed in a hypotonic solution (&lt;0.9% NaCl), water flows into the cell by endosmosis, causing the cell membrane to stretch, burst, and lyse.`
  },
  {
    q: "A solution of 0.1 mol of an unknown weak monobasic acid HX in 1 kg of water freezes at -0.198 &deg;C. Calculate: (i) Van't Hoff factor i, (ii) degree of ionization &alpha;, (iii) ionization constant K<sub>a</sub> of the acid. (K<sub>f</sub> for water = 1.86 K kg mol<sup>-1</sup>).",
    a: `<b>Step 1 (Theoretical &Delta;T<sub>f,cal</sub>):</b> Molality m = 0.1 mol / 1 kg = 0.1 m.<br>
        &Delta;T<sub>f,cal</sub> = K<sub>f</sub> &times; m = 1.86 &times; 0.1 = 0.186 K.<br>
        <b>Step 2 (Observed &Delta;T<sub>f,obs</sub> &amp; Van't Hoff factor i):</b><br>
        &Delta;T<sub>f,obs</sub> = 0.198 K &implies; <b>i = &Delta;T<sub>f,obs</sub> / &Delta;T<sub>f,cal</sub> = 0.198 / 0.186 = 1.0645</b>.<br>
        <b>Step 3 (Degree of ionization &alpha;):</b> HX &harr; H<sup>+</sup> + X<sup>-</sup> (n=2).<br>
        &alpha; = i - 1 = 1.0645 - 1 = <b>0.0645 (6.45%)</b>.<br>
        <b>Step 4 (Ionization Constant K<sub>a</sub>):</b><br>
        ${eqBox(`K_a = ${frac('C \\alpha<sup>2</sup>', '1 - \\alpha')} = ${frac('0.1 \\times (0.0645)<sup>2</sup>', '1 - 0.0645')} = ${frac('0.1 \\times 0.00416', '0.9355')} = <b>4.45 \\times 10<sup>-4</sup> mol L<sup>-1</sup></b>`)}`
  },
  {
    q: "(a) Derive Raoult's law as a special case of Henry's law. (b) Discuss the effect of temperature and pressure on the solubility of gases in liquids with relevant equations.",
    a: `<b>(a) Raoult's Law as a Special Case of Henry's Law:</b><br>
        According to Raoult's law for a volatile liquid component in solution:
        ${eqBox(`p_i = p_i&deg; \\chi_i`)}
        According to Henry's law for a gas dissolved in a liquid:
        ${eqBox(`p_i = K_H \\chi_i`)}
        Comparing both mathematical equations, the partial pressure of the volatile solute/gas is directly proportional to its mole fraction &chi;<sub>i</sub> in solution in both laws. The only difference is the proportionality constant: p<sub>i</sub>&deg; in Raoult's law and K<sub>H</sub> in Henry's law. When <b>K<sub>H</sub> = p<sub>i</sub>&deg;</b>, Henry's law becomes completely identical to Raoult's law.<br><br>

        <b>(b) Temperature and Pressure Effects:</b><br>
        &bull; <b>Temperature:</b> Dissolution of a gas in liquid is an exothermic equilibrium process: Gas + Solvent &harr; Solution + Heat (&Delta;H &lt; 0). By Le Chatelier's Principle, heating shifts equilibrium in reverse direction, releasing gas. Thus, gas solubility decreases with temperature.<br>
        &bull; <b>Pressure:</b> Increasing partial pressure pushes more gas molecules across the gas-liquid interface until equilibrium is established at higher concentration (p = K<sub>H</sub>&chi;).`
  },
  {
    q: "Discuss all 9 types of solutions with their physical states of solute and solvent, nature of intermolecular interactions, and two industrial/real-world examples for each type.",
    a: `Solutions are classified based on physical states of solute/solvent into 9 types:<br>
        <b>1. Gas in Gas:</b> Solute Gas, Solvent Gas. London dispersion forces. Examples: Air (N<sub>2</sub> + O<sub>2</sub>), Natural gas (CH<sub>4</sub> + C<sub>2</sub>H<sub>6</sub>).<br>
        <b>2. Liquid in Gas:</b> Solute Liquid, Solvent Gas. Examples: Chloroform in N<sub>2</sub>, Water vapour in air (Humidity).<br>
        <b>3. Solid in Gas:</b> Solute Solid, Solvent Gas. Examples: Camphor in N<sub>2</sub>, Iodine vapours in air.<br>
        <b>4. Gas in Liquid:</b> Solute Gas, Solvent Liquid. Dipole-induced dipole. Examples: O<sub>2</sub> in water, CO<sub>2</sub> in soft drinks.<br>
        <b>5. Liquid in Liquid:</b> Solute Liquid, Solvent Liquid. Hydrogen bonding/dipole. Examples: Ethanol in water, Vinegar (acetic acid in water).<br>
        <b>6. Solid in Liquid:</b> Solute Solid, Solvent Liquid. Ion-dipole/H-bonding. Examples: NaCl in water, Glucose in water.<br>
        <b>7. Gas in Solid:</b> Solute Gas, Solvent Solid. Occlusion. Examples: H<sub>2</sub> gas in Palladium, Dissolved air in ice.<br>
        <b>8. Liquid in Solid:</b> Solute Liquid, Solvent Solid. Examples: Dental amalgam (Hg in Ag/Sn), Sodium amalgam (Hg in Na).<br>
        <b>9. Solid in Solid:</b> Solute Solid, Solvent Solid. Metallic bonding. Examples: Brass (Cu + Zn), 22-Karat Gold (Cu in Au).`
  },
  {
    q: "(a) Differentiate between Molarity, Molality, Normality, and Mole Fraction with formulas, SI units, and temperature dependencies. (b) Derive the formula connecting Molarity (M), Molality (m), and Density (d).",
    a: `<b>(a) Comprehensive Concentration Comparison:</b><br>
        1. <b>Molarity (M):</b> M = (w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; V<sub>mL</sub>) [mol L<sup>-1</sup>]. <b>Temperature Dependent</b>.<br>
        2. <b>Molality (m):</b> m = (w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; w<sub>A</sub>) [mol kg<sup>-1</sup>]. <b>Temperature Independent</b>.<br>
        3. <b>Normality (N):</b> N = (Gram equivalents of solute &times; 1000) / V<sub>mL</sub> [eq L<sup>-1</sup>]. N = M &times; n-factor. <b>Temperature Dependent</b>.<br>
        4. <b>Mole Fraction (&chi;):</b> &chi;<sub>B</sub> = n<sub>B</sub> / (n<sub>A</sub> + n<sub>B</sub>) [Dimensionless]. <b>Temperature Independent</b>.<br><br>

        <b>(b) Derivation connecting M, m, and d:</b><br>
        Consider 1 L (1000 mL) of solution of Molarity M and density d (g mL<sup>-1</sup>).<br>
        Mass of solution = 1000 &times; d grams.<br>
        Mass of solute = M &times; M<sub>B</sub> grams.<br>
        Mass of solvent w<sub>A</sub> = (1000 d - M M<sub>B</sub>) grams.<br>
        Molality m = (M &times; 1000) / w<sub>A</sub> = (1000 M) / (1000 d - M M<sub>B</sub>).<br>
        ${eqBox(`<b>m = ${frac('1000 M', '1000 d - M M_B')} &implies; ${frac('1', 'm')} = ${frac('d', 'M')} - ${frac('M_B', '1000')}</b>`)}`
  },
  {
    q: "(a) What are azeotropes? Distinguish between minimum boiling and maximum boiling azeotropes. (b) Why is 100% absolute alcohol not obtainable by simple fractional distillation of rectified spirit?",
    a: `<b>(a) Azeotropes:</b> Binary liquid mixtures having identical composition in both liquid and vapour phases that boil at constant temperature without composition change.<br>
        &bull; <b>Minimum Boiling Azeotrope:</b> Formed by solutions with positive deviation (&Delta;H &gt; 0, &Delta;V &gt; 0). Boiling point of azeotrope is lower than either component. Example: 95.4% ethanol + 4.6% water (b.p. 351.15 K).<br>
        &bull; <b>Maximum Boiling Azeotrope:</b> Formed by solutions with negative deviation (&Delta;H &lt; 0, &Delta;V &lt; 0). Boiling point is higher than either component. Example: 68% HNO<sub>3</sub> + 32% water (b.p. 393.5 K).<br><br>

        <b>(b) Rectified Spirit Separation Limitation:</b><br>
        Fractional distillation of aqueous ethanol yields a 95.4% ethanol solution (rectified spirit), which forms a minimum boiling azeotrope. At this point, liquid and vapour have identical compositions, boiling together at 351.15 K. Hence, 100% absolute ethanol cannot be obtained by simple distillation (requires azeotropic distillation with benzene or drying with CaO).`
  },
  {
    q: "(a) State Henry's law and explain its 3 major applications. (b) What are the main limitations of Henry's law?",
    a: `<b>(a) Statement &amp; Applications:</b><br>
        p = K<sub>H</sub> &chi;. Solubility of gas in liquid is directly proportional to partial pressure above liquid.<br>
        1. <b>Carbonated Drinks:</b> Bottled under high pressure to maximize CO<sub>2</sub> dissolution.<br>
        2. <b>Scuba Diving Tanks:</b> Diluted with Helium (11.7%) to prevent painful nitrogen bubbles (bends).<br>
        3. <b>High Altitude Respiration:</b> Low pO<sub>2</sub> in mountains causes tissue hypoxia (Anoxia).<br><br>

        <b>(b) Limitations of Henry's Law:</b><br>
        Henry's law is valid only when:<br>
        1. Pressure is not excessively high (ideal gas behaviour).<br>
        2. Temperature is not too low.<br>
        3. The gas does not chemically react with the solvent (e.g. NH<sub>3</sub> + H<sub>2</sub>O &rarr; NH<sub>4</sub>OH violates Henry's law).<br>
        4. The gas does not dissociate or associate in solution (e.g. HCl &rarr; H<sup>+</sup> + Cl<sup>-</sup> shows deviation).`
  },
  {
    q: "A 0.01 m aqueous solution of K<sub>3</sub>[Fe(CN)<sub>6</sub>] freezes at -0.068 &deg;C. Calculate the percentage apparent degree of dissociation of the complex salt. (K<sub>f</sub> = 1.86 K kg mol<sup>-1</sup>).",
    a: `<b>Step 1 (Theoretical &Delta;T<sub>f,cal</sub>):</b> &Delta;T<sub>f,cal</sub> = K<sub>f</sub> &times; m = 1.86 &times; 0.01 = 0.0186 K.<br>
        <b>Step 2 (Observed &Delta;T<sub>f,obs</sub>):</b> &Delta;T<sub>f,obs</sub> = 0.068 K.<br>
        <b>Step 3 (Van't Hoff factor i):</b> i = 0.068 / 0.0186 = <b>3.656</b>.<br>
        <b>Step 4 (Dissociation stoichiometry n):</b> K<sub>3</sub>[Fe(CN)<sub>6</sub>] &rarr; 3 K<sup>+</sup> + [Fe(CN)<sub>6</sub>]<sup>3-</sup> (n = 4 ions).<br>
        <b>Step 5 (Degree of dissociation &alpha;):</b><br>
        ${eqBox(`\\alpha = ${frac('i - 1', 'n - 1')} = ${frac('3.656 - 1', '4 - 1')} = ${frac('2.656', '3')} = <b>0.8853 (88.53\\%)</b>`)}`
  },
  {
    q: "(a) Derive the relationship between Osmotic pressure and Relative Lowering of Vapour pressure for dilute solutions. (b) Calculate osmotic pressure of a 5% (w/V) solution of cane sugar at 27 &deg;C.",
    a: `<b>(a) Derivation connecting &Pi; and RLVP:</b><br>
        From Raoult's law for dilute solutions: (p&deg; - p) / p&deg; = n<sub>B</sub> / n<sub>A</sub> = (w<sub>B</sub> / M<sub>B</sub>) / (V d / M<sub>A</sub>) = (n<sub>B</sub> / V) &times; (M<sub>A</sub> / d).<br>
        Since n<sub>B</sub> / V = C (Molarity), and &Pi; = C R T &implies; C = &Pi; / (R T):<br>
        ${eqBox(`${frac('p&deg; - p', 'p&deg;')} = \\left(${frac('\\Pi', 'R T')}\\right) \\left(${frac('M_A', 'd')}\\right) &implies; <b>\\Pi = ${frac('p&deg; - p', 'p&deg;')} \\times ${frac('d R T', 'M_A')}</b>`)}<br>

        <b>(b) Calculation for 5% Cane Sugar:</b><br>
        5% (w/V) cane sugar (M = 342 g mol<sup>-1</sup>) means 5 g in 100 mL (0.1 L) solution.<br>
        C = (5 / 342) / 0.1 L = 0.1462 mol L<sup>-1</sup>. T = 27 + 273.15 = 300.15 K.<br>
        &Pi; = C R T = 0.1462 &times; 0.0821 &times; 300.15 = <b>3.603 atm (3.65 bar)</b>.`
  },
  {
    q: "(a) Discuss the thermodynamic basis of colligative properties in terms of chemical potential and entropy of mixing. (b) Why does adding a non-volatile solute raise boiling point and lower freezing point?",
    a: `<b>(a) Thermodynamic Basis:</b><br>
        The chemical potential of pure liquid solvent is &mu;<sub>A</sub>&deg;(l). When a solute is dissolved, the entropy of the liquid phase increases due to molecular mixing (&Delta;S<sub>mix</sub> &gt; 0). As a result, the chemical potential (Gibbs free energy per mole) of solvent in solution is lowered: &mu;<sub>A</sub>(solution) = &mu;<sub>A</sub>&deg;(l) + RT ln &chi;<sub>A</sub> &lt; &mu;<sub>A</sub>&deg;(l).<br><br>

        <b>(b) Explanation of Boiling Elevation &amp; Freezing Depression:</b><br>
        &bull; <b>Boiling Elevation:</b> Liquid solution has lower chemical potential than pure liquid solvent, but vapour phase chemical potential &mu;<sub>A</sub>(g) is unchanged. Hence, the solution curve intersects the vapour curve at a higher temperature (T<sub>b</sub> &gt; T<sub>b</sub>&deg;).<br>
        &bull; <b>Freezing Depression:</b> Since solid ice chemical potential &mu;<sub>A</sub>(s) is unchanged while liquid solution chemical potential is lowered, the intersection between liquid solution and solid ice shifts to a lower temperature (T<sub>f</sub> &lt; T<sub>f</sub>&deg;).`
  },
  {
    q: "Explain why association of solute molecules leads to abnormal molar mass. Calculate the apparent molar mass of acetic acid in benzene if it is 80% dimerized.",
    a: `<b>1. Mechanism of Association:</b> Carboxylic acids (like CH<sub>3</sub>COOH and C<sub>6</sub>H<sub>5</sub>COOH) in non-polar solvents (benzene, CCl<sub>4</sub>) form cyclic dimers through two strong intermolecular hydrogen bonds (2 CH<sub>3</sub>COOH &harr; (CH<sub>3</sub>COOH)<sub>2</sub>). The number of solute particles is reduced by half. Because colligative properties depend on particle count, the observed colligative property decreases, causing the calculated molar mass (M<sub>obs</sub> &prop; 1/Colligative) to be abnormally high.<br><br>

        <b>2. Calculation for 80% Dimerized Acetic Acid:</b><br>
        Normal Molar Mass M<sub>normal</sub> = 60 g mol<sup>-1</sup>. Dimerization n = 2. Degree of association &alpha; = 0.80.<br>
        ${eqBox(`i = 1 - \\alpha \\left(1 - ${frac('1', 'n')}\\right) = 1 - 0.80 \\left(1 - ${frac('1', '2')}\\right) = 1 - 0.40 = <b>0.60</b>`)}
        Since i = Normal Molar Mass / Observed Molar Mass:
        ${eqBox(`M_{\\text{obs}} = ${frac('M_{\\text{normal}}', 'i')} = ${frac('60', '0.60')} = <b>100 g mol<sup>-1</sup></b>`)}`
  },
  {
    q: "Comprehensive Multi-Step Problem: An aqueous solution of a non-volatile solute has boiling point 100.26 &deg;C. Calculate: (i) its freezing point, (ii) its vapour pressure at 298 K (pure water p&deg; = 23.76 mm Hg), (iii) its osmotic pressure at 27 &deg;C (density = 1.0 g mL<sup>-1</sup>). Given: K<sub>b</sub> = 0.52 K kg mol<sup>-1</sup>, K<sub>f</sub> = 1.86 K kg mol<sup>-1</sup>.",
    a: `<b>Step 1 (Find Molality from &Delta;T<sub>b</sub>):</b><br>
        &Delta;T<sub>b</sub> = 100.26 - 100.00 = 0.26 &deg;C = 0.26 K.<br>
        m = &Delta;T<sub>b</sub> / K<sub>b</sub> = 0.26 / 0.52 = <b>0.50 mol kg<sup>-1</sup></b>.<br><br>

        <b>(i) Freezing Point Calculation:</b><br>
        &Delta;T<sub>f</sub> = K<sub>f</sub> &times; m = 1.86 &times; 0.50 = <b>0.93 K</b>.<br>
        Freezing Point T<sub>f</sub> = 0.00 &deg;C - 0.93 &deg;C = <b>-0.93 &deg;C (272.22 K)</b>.<br><br>

        <b>(ii) Vapour Pressure at 298 K:</b><br>
        In 1 kg water (55.56 mol), solute moles = 0.50 mol.<br>
        Mole fraction &chi;<sub>B</sub> = 0.50 / (0.50 + 55.56) = 0.50 / 56.06 = 0.00892.<br>
        &Delta;p = p&deg; &times; &chi;<sub>B</sub> = 23.76 &times; 0.00892 = 0.212 mm Hg.<br>
        <b>p = 23.76 - 0.212 = 23.548 mm Hg (23.55 mm Hg)</b>.<br><br>

        <b>(iii) Osmotic Pressure at 27 &deg;C (300.15 K):</b><br>
        Since density = 1.0 g mL<sup>-1</sup>, Molarity C &approx; Molality m = 0.50 mol L<sup>-1</sup>.<br>
        &Pi; = C R T = 0.50 &times; 0.0821 &times; 300.15 = <b>12.32 atm (12.48 bar)</b>.`
  }
];

// Build Section C Questions
laData.forEach((item, idx) => {
  qaList.push({
    num: 80 + idx + 1,
    title: item.q,
    sec: 'C',
    marks: '5 Marks',
    body: `<div style="color: #FFFFFF; line-height: 1.8; font-size: 15.5px;">${item.a}</div>`
  });
});

// Build HTML Solutions string
let htmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
  
  <div style="background: rgba(255, 64, 129, 0.08); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 18px; margin-bottom: 25px;">
    <h2 style="color: ${themeColor}; margin: 0 0 4px 0; font-size: 20px;">📚 Solutions Master Bank: Complete 100 Questions &amp; Detailed Answers</h2>
    <p style="color: #FFFFFF; margin: 0; font-size: 14.5px;">Class 12 Chemistry &bull; Unit I: Solutions &bull; Sections A, B, and C (JKBOSE / CBSE Board Standard)</p>
  </div>
`;

let currentSec = '';
qaList.forEach((q) => {
  if (q.sec !== currentSec) {
    currentSec = q.sec;
    let secTitle = '';
    if (currentSec === 'A') secTitle = 'SECTION A: Very Short Answer (VSA) Questions (1 Mark) — Q1 to Q40';
    if (currentSec === 'B') secTitle = 'SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks) — Q41 to Q80';
    if (currentSec === 'C') secTitle = 'SECTION C: Long Answer (LA) Questions &amp; Derivations (5 Marks) — Q81 to Q100';
    
    htmlSolutions += `
    <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px; margin-bottom: 20px;">
      ${secTitle}
    </h2>`;
  }

  htmlSolutions += `
  <div style="background: rgba(15, 23, 42, 0.8); border: 1.2px solid rgba(255, 64, 129, 0.25); border-radius: 10px; padding: 16px 18px; margin: 18px 0; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 16.5px; line-height: 1.5;">
      Q${q.num}: ${q.title}
    </h3>
    <div style="border-top: 1px dashed rgba(255,64,129,0.25); padding-top: 10px; margin-top: 8px;">
      <b style="color: #4ADE80; font-size: 14.5px; display: block; margin-bottom: 6px;">✓ Solution:</b>
      ${q.body}
    </div>
  </div>`;
});

htmlSolutions += `</div>`;

// ---------------- TAB 3: 25 MCQS ----------------
const mcqs = [
  {
    id: "c12-chem-1-mcq-1",
    question: "Which of the following concentration units is strictly independent of temperature changes?",
    options: [
      "A):   Molarity (M)",
      "B):   Molality (m)",
      "C):   Normality (N)",
      "D):   Mass by Volume Percentage (w/V)"
    ],
    correctAnswer: "b",
    explanation: "Molality depends on the mass of the solvent (mol kg⁻¹), which does not expand or contract with temperature, unlike volume-dependent units like Molarity and Normality."
  },
  {
    id: "c12-chem-1-mcq-2",
    question: "According to Henry's law, the solubility of a gas in a liquid is inversely proportional to:",
    options: [
      "A):   Partial pressure of the gas",
      "B):   Henry's law constant (K_H)",
      "C):   Density of the liquid",
      "D):   Surface area of the liquid"
    ],
    correctAnswer: "b",
    explanation: "From Henry's law p = K_H · χ, the mole fraction solubility χ = p / K_H. At a constant pressure, higher K_H results in lower gas solubility."
  },
  {
    id: "c12-chem-1-mcq-3",
    question: "Why are scuba diving gas cylinders diluted with 11.7% Helium gas?",
    options: [
      "A):   Helium is lighter than air",
      "B):   Helium is highly soluble in blood",
      "C):   Helium has very low blood solubility, preventing nitrogen narcosis and the bends",
      "D):   Helium increases oxygen absorption in lungs"
    ],
    correctAnswer: "c",
    explanation: "Helium has extremely low solubility in blood even under high underwater pressure, preventing the formation of painful nitrogen gas bubbles (the bends) during ascent."
  },
  {
    id: "c12-chem-1-mcq-4",
    question: "An ideal solution is formed when two volatile liquids are mixed such that:",
    options: [
      "A):   ΔH_mix > 0 and ΔV_mix > 0",
      "B):   ΔH_mix < 0 and ΔV_mix < 0",
      "C):   ΔH_mix = 0 and ΔV_mix = 0",
      "D):   ΔH_mix = 0 and ΔV_mix > 0"
    ],
    correctAnswer: "c",
    explanation: "In an ideal solution, intermolecular forces between unlike molecules (A-B) are identical to like molecules (A-A and B-B), resulting in zero heat of mixing (ΔH_mix = 0) and zero volume change (ΔV_mix = 0)."
  },
  {
    id: "c12-chem-1-mcq-5",
    question: "A mixture of ethanol and acetone exhibits positive deviation from Raoult's law because:",
    options: [
      "A):   Acetone forms new hydrogen bonds with ethanol",
      "B):   Acetone molecules slip between ethanol molecules and break their hydrogen bonds",
      "C):   Ethanol undergoes dimerization in acetone",
      "D):   The mixture contracts in volume upon mixing"
    ],
    correctAnswer: "b",
    explanation: "Pure ethanol has strong intermolecular hydrogen bonding. Adding acetone breaks these hydrogen bonds, making A-B interactions weaker than A-A interactions and increasing vapour pressure (positive deviation)."
  },
  {
    id: "c12-chem-1-mcq-6",
    question: "Which of the following binary liquid mixtures forms a Maximum Boiling Azeotrope?",
    options: [
      "A):   Ethanol + Water (95.4% ethanol)",
      "B):   Acetone + Carbon disulfide (CS_2)",
      "C):   Nitric acid + Water (68% HNO_3)",
      "D):   Benzene + Toluene"
    ],
    correctAnswer: "c",
    explanation: "Solutions showing large negative deviation from Raoult's law (like 68% HNO_3 + 32% H_2O) exhibit a minimum in vapour pressure and form a Maximum Boiling Azeotrope (b.p. 393.5 K)."
  },
  {
    id: "c12-chem-1-mcq-7",
    question: "The relative lowering of vapour pressure of a dilute solution of a non-volatile solute equals:",
    options: [
      "A):   Mole fraction of solvent",
      "B):   Mole fraction of solute",
      "C):   Molality of solute",
      "D):   Molarity of solution"
    ],
    correctAnswer: "b",
    explanation: "According to Raoult's law for non-volatile solutes, (p_A° - p) / p_A° = χ_B (mole fraction of solute)."
  },
  {
    id: "c12-chem-1-mcq-8",
    question: "The SI unit of molal elevation constant (Ebullioscopic constant, K_b) is:",
    options: [
      "A):   K mol kg⁻¹",
      "B):   K kg mol⁻¹",
      "C):   kg mol⁻¹ K⁻¹",
      "D):   mol kg⁻¹ K⁻¹"
    ],
    correctAnswer: "b",
    explanation: "From ΔT_b = K_b · m, K_b = ΔT_b / m = K / (mol kg⁻¹) = K kg mol⁻¹."
  },
  {
    id: "c12-chem-1-mcq-9",
    question: "Why is Osmotic Pressure preferred for determining the molecular mass of biomolecules and synthetic polymers?",
    options: [
      "A):   It is measured at elevated boiling temperatures",
      "B):   It is measured at ambient room temperature and produces large readable values even at high dilution",
      "C):   It does not require a semipermeable membrane",
      "D):   It is independent of solute concentration"
    ],
    correctAnswer: "b",
    explanation: "Proteins and polymers denature at high boiling temperatures. Osmotic pressure is measured safely at room temperature and gives substantial, easily measurable pressures (~20 mm Hg) even at 10⁻⁴ M concentrations."
  },
  {
    id: "c12-chem-1-mcq-10",
    question: "What happens to a human red blood cell when placed in a 0.2% (w/V) aqueous NaCl solution?",
    options: [
      "A):   Cell remains unchanged",
      "B):   Cell loses water and shrinks (crenation)",
      "C):   Water enters the cell by endosmosis, causing it to swell and burst (hemolysis)",
      "D):   Cell undergoes plasmolysis"
    ],
    correctAnswer: "c",
    explanation: "0.2% NaCl is hypotonic relative to RBC internal fluid (0.9% NaCl). Water flows into the cell by endosmosis, causing the RBC to swell and lyse (hemolysis)."
  },
  {
    id: "c12-chem-1-mcq-11",
    question: "In Reverse Osmosis (RO) desalination of seawater, the external pressure applied on the seawater side must be:",
    options: [
      "A):   Equal to atmospheric pressure",
      "B):   Less than osmotic pressure (P < Π)",
      "C):   Greater than osmotic pressure (P > Π)",
      "D):   Zero"
    ],
    correctAnswer: "c",
    explanation: "When external pressure exceeding osmotic pressure (P > Π) is applied on the solution side, water molecules are forced to flow in reverse from saltwater into the freshwater reservoir through the SPM."
  },
  {
    id: "c12-chem-1-mcq-12",
    question: "The Van't Hoff factor (i) for complete dissociation of aluminium sulphate, Al_2(SO_4)_3, is:",
    options: [
      "A):   2",
      "B):   3",
      "C):   4",
      "D):   5"
    ],
    correctAnswer: "d",
    explanation: "Al_2(SO_4)_3 dissociates into 2 Al³⁺ + 3 SO_4²⁻ ions (total n = 5 ions). For 100% dissociation, i = n = 5."
  },
  {
    id: "c12-chem-1-mcq-13",
    question: "When benzoic acid is dissolved in benzene, it undergoes dimerization. The expected Van't Hoff factor (i) is:",
    options: [
      "A):   i = 1",
      "B):   i > 1",
      "C):   i < 1 (approximately 0.5)",
      "D):   i = 2"
    ],
    correctAnswer: "c",
    explanation: "Benzoic acid forms cyclic hydrogen-bonded dimers in non-polar benzene (2 C_6H_5COOH ⇌ (C_6H_5COOH)_2), halving the particle count, so i = 1 - α/2 ≈ 0.5 (i < 1)."
  },
  {
    id: "c12-chem-1-mcq-14",
    question: "Which of the following 0.1 M aqueous solutions will have the HIGHEST boiling point?",
    options: [
      "A):   0.1 M Glucose",
      "B):   0.1 M NaCl",
      "C):   0.1 M CaCl_2",
      "D):   0.1 M AlCl_3"
    ],
    correctAnswer: "d",
    explanation: "Boiling elevation ΔT_b = i · K_b · C. AlCl_3 produces 4 ions (i = 4), giving effective concentration iC = 0.4 M, which is highest, resulting in maximum boiling point elevation."
  },
  {
    id: "c12-chem-1-mcq-15",
    question: "Which of the following 0.01 M aqueous solutions will have the LOWEST freezing point?",
    options: [
      "A):   0.01 M Urea",
      "B):   0.01 M KNO_3",
      "C):   0.01 M BaCl_2",
      "D):   0.01 M Glucose"
    ],
    correctAnswer: "c",
    explanation: "Freezing depression ΔT_f = i · K_f · C. BaCl_2 dissociates into 3 ions (i = 3), causing the largest depression ΔT_f and therefore the lowest actual freezing point (T_f = 0 - ΔT_f)."
  },
  {
    id: "c12-chem-1-mcq-16",
    question: "If 2.5 g of ethanoic acid is dissolved in 75 g of benzene, the molality of the solution is:",
    options: [
      "A):   0.556 mol kg⁻¹",
      "B):   0.278 mol kg⁻¹",
      "C):   1.112 mol kg⁻¹",
      "D):   0.042 mol kg⁻¹"
    ],
    correctAnswer: "a",
    explanation: "Moles of CH_3COOH (M=60) = 2.5/60 = 0.0417 mol. Molality m = (0.0417 / 75) × 1000 = 0.556 mol kg⁻¹."
  },
  {
    id: "c12-chem-1-mcq-17",
    question: "A solution of two liquids A and B shows negative deviation from Raoult's law. During its formation:",
    options: [
      "A):   Heat is absorbed (ΔH_mix > 0)",
      "B):   Heat is released (ΔH_mix < 0) and volume contracts (ΔV_mix < 0)",
      "C):   Volume expands (ΔV_mix > 0)",
      "D):   Vapour pressure increases"
    ],
    correctAnswer: "b",
    explanation: "Negative deviation occurs when A-B attractions are stronger than like-molecule attractions, releasing energy (ΔH_mix < 0, exothermic) and packing molecules more tightly (ΔV_mix < 0)."
  },
  {
    id: "c12-chem-1-mcq-18",
    question: "The formula connecting degree of dissociation (α) and Van't Hoff factor (i) for an electrolyte producing n ions is:",
    options: [
      "A):   α = (i - 1) / (n - 1)",
      "B):   α = (n - 1) / (i - 1)",
      "C):   α = (1 - i) / (1 - n)",
      "D):   α = (i + 1) / (n + 1)"
    ],
    correctAnswer: "a",
    explanation: "Total moles at equilibrium = 1 + (n - 1)α. Since i = 1 + (n - 1)α, rearranging gives α = (i - 1) / (n - 1)."
  },
  {
    id: "c12-chem-1-mcq-19",
    question: "An aqueous solution of 18 g glucose (C_6H_12O_6) in 1 kg water will boil at 1.013 bar at (K_b = 0.52 K kg mol⁻¹):",
    options: [
      "A):   100.52 °C",
      "B):   100.052 °C (373.202 K)",
      "C):   99.95 °C",
      "D):   101.04 °C"
    ],
    correctAnswer: "b",
    explanation: "m = (18/180) / 1 kg = 0.1 m. ΔT_b = K_b · m = 0.52 × 0.1 = 0.052 K. Boiling point = 100 + 0.052 = 100.052 °C."
  },
  {
    id: "c12-chem-1-mcq-20",
    question: "Which semipermeable membrane material is universally used in industrial reverse osmosis water desalination plants?",
    options: [
      "A):   Animal bladder",
      "B):   Parchment paper",
      "C):   Cellulose acetate supported on a porous sheet",
      "D):   Cellophane paper"
    ],
    correctAnswer: "c",
    explanation: "Cellulose acetate is permeable to water but impermeable to hydrated ions (Na⁺, Cl⁻) and can withstand high operating pressures (P > 30 bar)."
  },
  {
    id: "c12-chem-1-mcq-21",
    question: "What is the mole fraction of a solute in a 1.00 molal aqueous solution?",
    options: [
      "A):   0.0177",
      "B):   0.0354",
      "C):   0.1000",
      "D):   0.0555"
    ],
    correctAnswer: "a",
    explanation: "In 1 kg water, moles of water n_A = 1000/18 = 55.56 mol. Solute moles n_B = 1.0 mol. χ_B = 1.0 / (1.0 + 55.56) = 1 / 56.56 = 0.0177."
  },
  {
    id: "c12-chem-1-mcq-22",
    question: "A mixture of chloroform and acetone shows negative deviation because of:",
    options: [
      "A):   Dipole-induced dipole forces",
      "B):   Intermolecular hydrogen bonding between chloroform C-H and acetone C=O",
      "C):   London dispersion forces",
      "D):   Ion-dipole interactions"
    ],
    correctAnswer: "b",
    explanation: "Chloroform proton is activated by three electronegative chlorine atoms, forming a strong C-H···O=C hydrogen bond with the carbonyl oxygen of acetone."
  },
  {
    id: "c12-chem-1-mcq-23",
    question: "A 5% (w/w) solution of cane sugar (M = 342) in water has a freezing point of 271 K. The cryoscopic constant of water calculated from this data is:",
    options: [
      "A):   1.86 K kg mol⁻¹",
      "B):   13.96 K kg mol⁻¹",
      "C):   0.52 K kg mol⁻¹",
      "D):   2.53 K kg mol⁻¹"
    ],
    correctAnswer: "b",
    explanation: "ΔT_f = 273.15 - 271 = 2.15 K. Molality m = (5/342) / 0.095 kg = 0.154 m. K_f = ΔT_f / m = 2.15 / 0.154 = 13.96 K kg mol⁻¹."
  },
  {
    id: "c12-chem-1-mcq-24",
    question: "If a non-volatile solute undergoes 80% dimerization in benzene, its Van't Hoff factor (i) is:",
    options: [
      "A):   0.80",
      "B):   0.60",
      "C):   1.20",
      "D):   0.50"
    ],
    correctAnswer: "b",
    explanation: "For dimerization n = 2, i = 1 - α(1 - 1/n) = 1 - 0.80(1 - 0.5) = 1 - 0.40 = 0.60."
  },
  {
    id: "c12-chem-1-mcq-25",
    question: "Two solutions having the same osmotic pressure at a given temperature are termed as:",
    options: [
      "A):   Hypertonic",
      "B):   Hypotonic",
      "C):   Isotonic",
      "D):   Azeotropic"
    ],
    correctAnswer: "c",
    explanation: "Isotonic solutions exert identical osmotic pressure across an SPM at the same temperature, so no net osmotic movement of solvent occurs."
  }
];

// Write c12-chem-1.ts
const targetFile = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-chem-1.ts');
const fileContent = `// Class 12 Chemistry Unit I: Solutions (JKBOSE / NCERT Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem1HtmlOverview = ${JSON.stringify(htmlOverview)};

export const c12Chem1HtmlSolutions = ${JSON.stringify(htmlSolutions)};

export const c12Chem1Mcqs = ${JSON.stringify(mcqs, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`✅ Successfully generated c12-chem-1.ts (Size: ${fileContent.length} bytes)!`);

// Now update client/data/chapterContent.ts to wire up c12-chem-1
const chapterContentPath = path.join(__dirname, '..', 'client', 'data', 'chapterContent.ts');
let ccTxt = fs.readFileSync(chapterContentPath, 'utf8');

if (!ccTxt.includes('c12Chem1HtmlOverview')) {
  // Add import
  const importStatement = `import { c12Chem1HtmlOverview, c12Chem1HtmlSolutions, c12Chem1Mcqs } from "./content/c12-chem-1";\n`;
  ccTxt = importStatement + ccTxt;

  // Add chapter override logic
  const overrideBlock = `
// Override Class 12 Chemistry Chapter 1 (Solutions)
const ch12Chem1 = chapterContents["c12-chem-1"];
if (ch12Chem1) {
  ch12Chem1.htmlOverview = c12Chem1HtmlOverview;
  ch12Chem1.htmlExercises = {
    "ex-c12-qa": c12Chem1HtmlSolutions,
  };
  ch12Chem1.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem1.mcqs = c12Chem1Mcqs;
}
`;

  ccTxt = ccTxt + overrideBlock;
  fs.writeFileSync(chapterContentPath, ccTxt, 'utf8');
  console.log("✅ Successfully wired up c12-chem-1 in chapterContent.ts!");
} else {
  console.log("c12-chem-1 is already wired in chapterContent.ts.");
}
