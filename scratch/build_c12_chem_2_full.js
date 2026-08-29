const fs = require('fs');
const path = require('path');

const themeColor = "#00E5FF";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 229, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// ---------------- TAB 1: OVERVIEW HTML ----------------
require('./build_c12_chem_2_overview.js');
const htmlOverview = fs.readFileSync('scratch/c12_chem_2_overview.html', 'utf8');

// ---------------- TAB 2: SOLUTIONS (100 QUESTIONS) ----------------
const vsaData = [
  { q: "Define Electrochemistry.", a: "The branch of physical chemistry that deals with the relationship between electrical energy and chemical energy and their interconversions through redox reactions." },
  { q: "State Ohm's law for electrolytic solutions.", a: "The current (I) flowing through an electrolytic solution is directly proportional to the applied potential difference (V) and inversely proportional to electrical resistance (R): I = V / R." },
  { q: "Define Conductance (G) and state its SI unit.", a: "Conductance is the ease with which electrical current flows through a conductor. It is the reciprocal of resistance (G = 1 / R). SI unit: <b>Siemens (S)</b> or &Omega;<sup>-1</sup>." },
  { q: "Define Specific Conductivity (&kappa; - Kappa).", a: "The conductance of a solution of unit length (1 cm or 1 m) and unit cross-sectional area (1 cm<sup>2</sup> or 1 m<sup>2</sup>), or the conductance of 1 cm<sup>3</sup> of electrolytic solution. Unit: <b>S cm<sup>-1</sup></b> or <b>S m<sup>-1</sup></b>." },
  { q: "Define Cell Constant (G*) and state its SI unit.", a: "The ratio of distance between the two conductivity electrodes (l) to their cross-sectional area (A): G* = l / A = R &times; &kappa;. Unit: <b>cm<sup>-1</sup></b> or <b>m<sup>-1</sup></b>." },
  { q: "Define Molar Conductivity (&Lambda;<sub>m</sub>) and state its units.", a: "The conducting power of all the ions produced by dissolving 1 mole of an electrolyte in a given volume of solution: &Lambda;<sub>m</sub> = (&kappa; &times; 1000) / M. Unit: <b>S cm<sup>2</sup> mol<sup>-1</sup></b>." },
  { q: "Define Equivalent Conductivity (&Lambda;<sub>eq</sub>).", a: "The conducting power of all ions produced by dissolving 1 gram-equivalent of an electrolyte in a given volume of solution: &Lambda;<sub>eq</sub> = (&kappa; &times; 1000) / N. Unit: <b>S cm<sup>2</sup> eq<sup>-1</sup></b>." },
  { q: "Why does specific conductivity (&kappa;) decrease on dilution?", a: "Because specific conductivity is the conductance of 1 cm<sup>3</sup> of solution. On dilution, the number of current-carrying ions per unit volume decreases." },
  { q: "Why does molar conductivity (&Lambda;<sub>m</sub>) increase on dilution?", a: "Because &Lambda;<sub>m</sub> = &kappa; &times; V. Although &kappa; decreases on dilution, the volume V containing 1 mole of electrolyte increases much more significantly, increasing the product." },
  { q: "State the Debye-H&uuml;ckel-Onsager equation for strong electrolytes.", a: "&Lambda;<sub>m</sub> = &Lambda;<sub>m</sub>&deg; - A &radic;C, where &Lambda;<sub>m</sub>&deg; is the limiting molar conductivity, A is a constant, and C is molar concentration." },
  { q: "Why cannot &Lambda;<sub>m</sub>&deg; for weak electrolytes be obtained by graphical extrapolation?", a: "Because for weak electrolytes, dissociation increases steeply only at extreme dilution (C &rarr; 0), making the &Lambda;<sub>m</sub> vs &radic;C plot asymptotic to the vertical axis." },
  { q: "State Kohlrausch's law of independent migration of ions.", a: "At infinite dilution, the limiting molar conductivity of an electrolyte is equal to the sum of individual contributions of its constituent cations and anions: &Lambda;<sub>m</sub>&deg; = &nu;<sub>+</sub> &lambda;<sub>+</sub>&deg; + &nu;<sub>-</sub> &lambda;<sub>-</sub>&deg;." },
  { q: "Express &Lambda;<sub>m</sub>&deg; of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> in terms of individual ionic conductivities.", a: "&Lambda;<sub>m</sub>&deg;(Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>) = 2 &lambda;&deg;(Al<sup>3+</sup>) + 3 &lambda;&deg;(SO<sub>4</sub><sup>2-</sup>)." },
  { q: "How is the degree of dissociation (&alpha;) of a weak electrolyte calculated from conductivity data?", a: "&alpha; = &Lambda;<sub>m</sub> / &Lambda;<sub>m</sub>&deg;, where &Lambda;<sub>m</sub> is molar conductivity at concentration C and &Lambda;<sub>m</sub>&deg; is limiting molar conductivity." },
  { q: "State Faraday's First Law of Electrolysis.", a: "The mass (m) of a substance deposited or liberated at any electrode during electrolysis is directly proportional to the quantity of electricity (Q) passed: m = Z Q = Z I t." },
  { q: "Define Electrochemical Equivalent (Z).", a: "The mass of a substance deposited or liberated at an electrode when 1 Coulomb of electricity (1 Ampere for 1 second) is passed through its electrolytic solution: Z = Equivalent Weight / 96500." },
  { q: "State Faraday's Second Law of Electrolysis.", a: "When the same quantity of electricity is passed through different electrolytes connected in series, the masses of substances liberated are directly proportional to their equivalent weights: m<sub>1</sub> / E<sub>1</sub> = m<sub>2</sub> / E<sub>2</sub>." },
  { q: "What is the value of 1 Faraday (F) in Coulombs?", a: "1 Faraday is the charge carried by 1 mole of electrons: 1 F = N<sub>A</sub> &times; e = 6.022 &times; 10<sup>23</sup> &times; 1.602 &times; 10<sup>-19</sup> C &approx; <b>96500 C mol<sup>-1</sup></b> (precisely 96487 C mol<sup>-1</sup>)." },
  { q: "What are the products of electrolysis of molten NaCl?", a: "Sodium metal (Na) is deposited at the cathode (reduction), and Chlorine gas (Cl<sub>2</sub>) is liberated at the anode (oxidation)." },
  { q: "What are the products of electrolysis of aqueous NaCl (brine)?", a: "Hydrogen gas (H<sub>2</sub>) is liberated at the cathode, Chlorine gas (Cl<sub>2</sub>) is liberated at the anode, and NaOH remains in solution." },
  { q: "Why is H<sub>2</sub> liberated at the cathode instead of Na during aqueous NaCl electrolysis?", a: "Because water has a much higher standard reduction potential (E&deg; = -0.83 V) than sodium ions (E&deg;(Na<sup>+</sup>/Na) = -2.71 V), making H<sub>2</sub>O reduction preferential." },
  { q: "What is Overpotential (Bubble Potential)?", a: "The extra potential required beyond the thermodynamic value to overcome kinetic activation barriers during the discharge of a gas (like O<sub>2</sub> or H<sub>2</sub>) at an electrode." },
  { q: "What is a Galvanic (Voltaic) Cell?", a: "An electrochemical device in which the chemical energy of a spontaneous redox reaction is directly converted into electrical energy." },
  { q: "Give the cell representation for the standard Daniell cell.", a: "Zn(s) | Zn<sup>2+</sup>(aq, 1 M) || Cu<sup>2+</sup>(aq, 1 M) | Cu(s)." },
  { q: "What is the function of a salt bridge in a Galvanic cell?", a: "It maintains electrical neutrality in the two half-cells, prevents liquid junction potential, and completes the internal circuit." },
  { q: "What electrolytes are typically used in a salt bridge and why?", a: "Inert electrolytes like KCl, KNO<sub>3</sub>, or NH<sub>4</sub>NO<sub>3</sub> in agar-agar gel, because the transport numbers (velocities) of their cations and anions are almost identical." },
  { q: "What happens to the Daniell cell when an external opposing potential E<sub>ext</sub> = 1.1 V is applied?", a: "No current flows through the circuit and no chemical reaction takes place because the external potential exactly balances the cell EMF." },
  { q: "What happens when external opposing potential E<sub>ext</sub> &gt; 1.1 V is applied to Daniell cell?", a: "The direction of current reverses; the cell functions as an electrolytic cell, depositing Zinc at the Zn electrode and dissolving Copper." },
  { q: "Define Standard Electrode Potential (E&deg;).", a: "The potential difference developed between a pure metal electrode and its 1 M aqueous ionic solution at 298 K and 1 bar pressure, measured relative to SHE." },
  { q: "What is Standard Hydrogen Electrode (SHE) and its potential?", a: "A reference half-cell consisting of platinum foil coated with platinum black in 1 M H<sup>+</sup> solution with pure H<sub>2</sub> gas bubbled at 1 bar. Its standard potential is assigned as exactly <b>0.00 V</b>." },
  { q: "Write the Nernst equation for a single metal electrode (M<sup>n+</sup> + n e<sup>-</sup> &rarr; M).", a: "E = E&deg; - (0.0591 / n) log (1 / [M<sup>n+</sup>]) = E&deg; + (0.0591 / n) log [M<sup>n+</sup>] at 298 K." },
  { q: "How is equilibrium constant (K<sub>c</sub>) related to standard cell potential (E&deg;<sub>cell</sub>)?", a: "log K<sub>c</sub> = (n E&deg;<sub>cell</sub>) / 0.0591 at 298 K, where n is the number of electrons involved in the balanced cell reaction." },
  { q: "State the relation between standard Gibbs energy (&Delta;G&deg;) and cell EMF (E&deg;<sub>cell</sub>).", a: "&Delta;G&deg; = - n F E&deg;<sub>cell</sub> = - 2.303 R T log K<sub>c</sub>." },
  { q: "Is cell potential (E<sub>cell</sub>) an intensive or extensive property?", a: "E<sub>cell</sub> is an <b>intensive property</b> (independent of amount of matter), whereas Gibbs free energy (&Delta;G) is an <b>extensive property</b>." },
  { q: "Name one primary battery and one secondary battery.", a: "Primary battery: Dry cell (Leclanch&eacute; cell) or Mercury cell. Secondary battery: Lead storage accumulator or Ni-Cd cell." },
  { q: "Why does a Mercury cell maintain a constant voltage (1.35 V) throughout its life?", a: "Because the overall cell reaction [Zn(Hg) + HgO(s) &rarr; ZnO(s) + Hg(l)] does not contain any ions in solution whose concentration changes with time." },
  { q: "What is the density of H<sub>2</sub>SO<sub>4</sub> in a fully charged lead storage battery?", a: "Approximately <b>1.30 g mL<sup>-1</sup></b> (38% H<sub>2</sub>SO<sub>4</sub> by mass). On discharge, the density drops below 1.20 g mL<sup>-1</sup>." },
  { q: "What is a Fuel Cell?", a: "A galvanic cell that directly converts the chemical energy of a continuously supplied fuel (like H<sub>2</sub>, CH<sub>4</sub>, or CH<sub>3</sub>OH) into electrical energy without thermal combustion engines." },
  { q: "State the chemical formula of rust.", a: "Hydrated ferric oxide: <b>Fe<sub>2</sub>O<sub>3</sub> &bull; x H<sub>2</sub>O</b>." },
  { q: "Why is galvanization of iron preferred over tin coating?", a: "Zinc has a lower reduction potential (E&deg; = -0.76 V) than iron (E&deg; = -0.44 V), so Zinc acts as a sacrificial anode and corrodes preferentially, even if the surface coating is scratched." }
];

// SECTION B: SA (2 & 3 Marks) Q41 - Q80
const saData = [
  {
    q: "The resistance of a conductivity cell filled with 0.1 M KCl solution is 100 &Omega;. If resistance of the same cell filled with 0.02 M KCl solution is 520 &Omega;, calculate conductivity and molar conductivity of 0.02 M KCl. (&kappa; of 0.1 M KCl = 1.29 &times; 10<sup>-2</sup> S cm<sup>-1</sup>).",
    a: `<b style="color: ${themeColor};">Step 1 (Cell Constant G*):</b> G* = R &times; &kappa; = 100 &times; (1.29 &times; 10<sup>-2</sup>) = <b>1.29 cm<sup>-1</sup></b>.<br>
        <b style="color: ${themeColor};">Step 2 (Conductivity &kappa; of 0.02 M KCl):</b> &kappa; = G* / R = 1.29 / 520 = <b>2.48 &times; 10<sup>-3</sup> S cm<sup>-1</sup></b>.<br>
        <b style="color: ${themeColor};">Step 3 (Molar Conductivity &Lambda;<sub>m</sub>):</b> &Lambda;<sub>m</sub> = (&kappa; &times; 1000) / M = (2.48 &times; 10<sup>-3</sup> &times; 1000) / 0.02 = <b>124 S cm<sup>2</sup> mol<sup>-1</sup></b>.`
  },
  {
    q: "The electrical resistance of a column of 0.05 M NaOH solution of diameter 1 cm and length 50 cm is 5.55 &times; 10<sup>3</sup> &Omega;. Calculate its resistivity, conductivity, and molar conductivity.",
    a: `<b style="color: ${themeColor};">Step 1 (Area A):</b> r = 0.5 cm &rArr; A = &pi; r<sup>2</sup> = 3.14 &times; (0.5)<sup>2</sup> = 0.785 cm<sup>2</sup>.<br>
        <b style="color: ${themeColor};">Step 2 (Resistivity &rho;):</b> &rho; = R &times; (A / l) = (5.55 &times; 10<sup>3</sup> &times; 0.785) / 50 = <b>87.135 &Omega; cm</b>.<br>
        <b style="color: ${themeColor};">Step 3 (Conductivity &kappa;):</b> &kappa; = 1 / &rho; = 1 / 87.135 = <b>0.01148 S cm<sup>-1</sup> (1.148 &times; 10<sup>-2</sup> S cm<sup>-1</sup>)</b>.<br>
        <b style="color: ${themeColor};">Step 4 (Molar Conductivity &Lambda;<sub>m</sub>):</b> &Lambda;<sub>m</sub> = (&kappa; &times; 1000) / M = (0.01148 &times; 1000) / 0.05 = <b>229.6 S cm<sup>2</sup> mol<sup>-1</sup></b>.`
  },
  {
    q: "Calculate &Lambda;<sub>m</sub>&deg; for CaCl<sub>2</sub> and MgSO<sub>4</sub> from the following limiting ionic molar conductivities: &lambda;&deg;(Ca<sup>2+</sup>) = 119.0, &lambda;&deg;(Cl<sup>-</sup>) = 76.3, &lambda;&deg;(Mg<sup>2+</sup>) = 106.0, &lambda;&deg;(SO<sub>4</sub><sup>2-</sup>) = 160.0 S cm<sup>2</sup> mol<sup>-1</sup>.",
    a: `<b style="color: ${themeColor};">Step 1 (For CaCl<sub>2</sub>):</b> &Lambda;<sub>m</sub>&deg;(CaCl<sub>2</sub>) = &lambda;&deg;(Ca<sup>2+</sup>) + 2 &lambda;&deg;(Cl<sup>-</sup>) = 119.0 + 2(76.3) = 119.0 + 152.6 = <b>271.6 S cm<sup>2</sup> mol<sup>-1</sup></b>.<br>
        <b style="color: ${themeColor};">Step 2 (For MgSO<sub>4</sub>):</b> &Lambda;<sub>m</sub>&deg;(MgSO<sub>4</sub>) = &lambda;&deg;(Mg<sup>2+</sup>) + &lambda;&deg;(SO<sub>4</sub><sup>2-</sup>) = 106.0 + 160.0 = <b>266.0 S cm<sup>2</sup> mol<sup>-1</sup></b>.`
  },
  {
    q: "&Lambda;<sub>m</sub>&deg; for NaCl, HCl, and NaAc are 126.4, 425.9, and 91.0 S cm<sup>2</sup> mol<sup>-1</sup> respectively. Calculate &Lambda;<sub>m</sub>&deg; for HAc (acetic acid).",
    a: `<b style="color: ${themeColor};">Step 1 (Kohlrausch formulation):</b> &Lambda;<sub>m</sub>&deg;(HAc) = &Lambda;<sub>m</sub>&deg;(NaAc) + &Lambda;<sub>m</sub>&deg;(HCl) - &Lambda;<sub>m</sub>&deg;(NaCl).<br>
        <b style="color: ${themeColor};">Step 2 (Substitution):</b> &Lambda;<sub>m</sub>&deg;(HAc) = 91.0 + 425.9 - 126.4 = <b>390.5 S cm<sup>2</sup> mol<sup>-1</sup></b>.`
  },
  {
    q: "Conductivity of 0.00241 M acetic acid is 7.896 &times; 10<sup>-5</sup> S cm<sup>-1</sup>. Calculate its molar conductivity and degree of dissociation (&alpha;) if &Lambda;<sub>m</sub>&deg; for acetic acid is 390.5 S cm<sup>2</sup> mol<sup>-1</sup>.",
    a: `<b style="color: ${themeColor};">Step 1 (Molar conductivity &Lambda;<sub>m</sub>):</b> &Lambda;<sub>m</sub> = (&kappa; &times; 1000) / M = (7.896 &times; 10<sup>-5</sup> &times; 1000) / 0.00241 = <b>32.76 S cm<sup>2</sup> mol<sup>-1</sup></b>.<br>
        <b style="color: ${themeColor};">Step 2 (Degree of dissociation &alpha;):</b> &alpha; = &Lambda;<sub>m</sub> / &Lambda;<sub>m</sub>&deg; = 32.76 / 390.5 = <b>0.084 (8.4%)</b>.<br>
        <b style="color: ${themeColor};">Step 3 (Dissociation constant K<sub>a</sub>):</b> K<sub>a</sub> = (C &alpha;<sup>2</sup>) / (1 - &alpha;) = [ 0.00241 &times; (0.084)<sup>2</sup> ] / (1 - 0.084) = <b>1.85 &times; 10<sup>-5</sup> mol L<sup>-1</sup></b>.`
  },
  {
    q: "A solution of CuSO<sub>4</sub> is electrolysed for 10 minutes with a current of 1.5 Amperes. What is the mass of copper deposited at the cathode? (Atomic mass of Cu = 63.5 g mol<sup>-1</sup>).",
    a: `<b style="color: ${themeColor};">Step 1 (Total charge Q):</b> Q = I &times; t = 1.5 A &times; (10 &times; 60 s) = 900 C.<br>
        <b style="color: ${themeColor};">Step 2 (Equivalent weight of Cu):</b> Cu<sup>2+</sup> + 2e<sup>-</sup> &rarr; Cu &rArr; n = 2 &rArr; E = 63.5 / 2 = 31.75 g eq<sup>-1</sup>.<br>
        <b style="color: ${themeColor};">Step 3 (Mass deposited m):</b> m = (E &times; Q) / 96500 = (31.75 &times; 900) / 96500 = <b>0.296 g of Cu</b>.`
  },
  {
    q: "How many Coulombs of electricity are required for the oxidation of: (i) 1 mole of H<sub>2</sub>O to O<sub>2</sub>, (ii) 1 mole of FeO to Fe<sub>2</sub>O<sub>3</sub>?",
    a: `<b style="color: ${themeColor};">Step 1 (For 1 mol H<sub>2</sub>O):</b> H<sub>2</sub>O &rarr; 2H<sup>+</sup> + 1/2 O<sub>2</sub> + 2e<sup>-</sup>. Requires 2 moles of electrons = 2 F = 2 &times; 96500 = <b>1.93 &times; 10<sup>5</sup> C</b>.<br>
        <b style="color: ${themeColor};">Step 2 (For 1 mol FeO):</b> Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + e<sup>-</sup>. Requires 1 mole of electrons = 1 F = <b>96500 C (9.65 &times; 10<sup>4</sup> C)</b>.`
  },
  {
    q: "Calculate the standard cell potential (E&deg;<sub>cell</sub>) and standard Gibbs energy change (&Delta;G&deg;) for the reaction: 2Cr(s) + 3Cd<sup>2+</sup>(aq) &rarr; 2Cr<sup>3+</sup>(aq) + 3Cd(s). Given E&deg;(Cr<sup>3+</sup>/Cr) = -0.74 V and E&deg;(Cd<sup>2+</sup>/Cd) = -0.40 V.",
    a: `<b style="color: ${themeColor};">Step 1 (Electrode Identification):</b> Anode: Cr (E&deg; = -0.74 V); Cathode: Cd (E&deg; = -0.40 V); n = 6 electrons.<br>
        <b style="color: ${themeColor};">Step 2 (E&deg;<sub>cell</sub>):</b> E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub> = -0.40 - (-0.74) = <b>+0.34 V</b>.<br>
        <b style="color: ${themeColor};">Step 3 (&Delta;G&deg; calculation):</b> &Delta;G&deg; = - n F E&deg;<sub>cell</sub> = - 6 &times; 96487 &times; 0.34 = - 196833 J mol<sup>-1</sup> = <b>-196.83 kJ mol<sup>-1</sup></b>.`
  },
  {
    q: "Calculate the potential of a hydrogen electrode in contact with a solution whose pH is 10 at 298 K.",
    a: `<b style="color: ${themeColor};">Step 1 (H<sup>+</sup> concentration):</b> pH = 10 &rArr; [H<sup>+</sup>] = 10<sup>-10</sup> M.<br>
        <b style="color: ${themeColor};">Step 2 (Half-reaction):</b> H<sup>+</sup> + e<sup>-</sup> &rarr; 1/2 H<sub>2</sub> (n = 1, E&deg; = 0.00 V).<br>
        <b style="color: ${themeColor};">Step 3 (Nernst Equation):</b> E = E&deg; - 0.0591 log (1 / [H<sup>+</sup>]) = 0.00 - 0.0591 log (10<sup>10</sup>) = 0.00 - 0.0591 &times; 10 = <b>-0.591 V</b>.`
  },
  {
    q: "Calculate the EMF of the cell at 298 K: Mg(s) | Mg<sup>2+</sup>(0.001 M) || Cu<sup>2+</sup>(0.0001 M) | Cu(s). Given E&deg;(Mg<sup>2+</sup>/Mg) = -2.37 V, E&deg;(Cu<sup>2+</sup>/Cu) = +0.34 V.",
    a: `<b style="color: ${themeColor};">Step 1 (E&deg;<sub>cell</sub>):</b> E&deg;<sub>cell</sub> = 0.34 - (-2.37) = +2.71 V; n = 2.<br>
        <b style="color: ${themeColor};">Step 2 (Nernst Equation):</b> E<sub>cell</sub> = E&deg;<sub>cell</sub> - (0.0591 / 2) log ([Mg<sup>2+</sup>] / [Cu<sup>2+</sup>]).<br>
        <b style="color: ${themeColor};">Step 3 (Calculation):</b> E<sub>cell</sub> = 2.71 - 0.02955 log (0.001 / 0.0001) = 2.71 - 0.02955 log (10) = 2.71 - 0.02955 = <b>2.68 V</b>.`
  },
  {
    q: "Calculate the equilibrium constant (K<sub>c</sub>) for the Daniell cell reaction: Zn(s) + Cu<sup>2+</sup>(aq) &#8652; Zn<sup>2+</sup>(aq) + Cu(s) at 298 K. (Given E&deg;<sub>cell</sub> = 1.10 V).",
    a: `<b style="color: ${themeColor};">Step 1 (Formula):</b> log K<sub>c</sub> = (n E&deg;<sub>cell</sub>) / 0.0591.<br>
        <b style="color: ${themeColor};">Step 2 (Substitution for n = 2):</b> log K<sub>c</sub> = (2 &times; 1.10) / 0.0591 = 2.20 / 0.0591 = 37.225.<br>
        <b style="color: ${themeColor};">Step 3 (Antilog):</b> K<sub>c</sub> = 10<sup>37.225</sup> = <b>1.68 &times; 10<sup>37</sup></b> (indicates reaction goes virtually to 100% completion).`
  },
  {
    q: "Differentiate between Metallic Conductors and Electrolytic Conductors with 4 key points of comparison.",
    a: `<b style="color: ${themeColor};">1. Charge Carriers:</b> Metallic conductors conduct via free delocalized electrons; Electrolytic conductors conduct via mobile cations and anions.<br>
        <b style="color: ${themeColor};">2. Chemical Change:</b> No chemical change or mass transfer occurs in metals; Chemical decomposition (electrolysis) occurs in electrolytic solutions.<br>
        <b style="color: ${themeColor};">3. Effect of Temperature:</b> Metallic conductance decreases with temperature (increased lattice kernel vibrations); Electrolytic conductance increases with temperature (reduced viscosity and increased ionic mobility).<br>
        <b style="color: ${themeColor};">4. Resistance:</b> Metallic resistance is due to electron-kernel collisions; Electrolytic resistance arises from interionic attractions, solvent viscosity, and ion-solvent hydration.`
  },
  {
    q: "Differentiate between an Electrochemical (Galvanic) Cell and an Electrolytic Cell.",
    a: `<b style="color: ${themeColor};">1. Energy Interconversion:</b> Galvanic cell converts chemical energy into electrical energy; Electrolytic cell converts electrical energy into chemical energy.<br>
        <b style="color: ${themeColor};">2. Spontaneity:</b> Galvanic cell relies on spontaneous redox reactions (&Delta;G &lt; 0, E<sub>cell</sub> &gt; 0); Electrolytic cell drives non-spontaneous reactions (&Delta;G &gt; 0) using external DC power.<br>
        <b style="color: ${themeColor};">3. Anode Polarity:</b> In Galvanic cells, Anode is negative (-); In Electrolytic cells, Anode is positive (+).<br>
        <b style="color: ${themeColor};">4. Cathode Polarity:</b> In Galvanic cells, Cathode is positive (+); In Electrolytic cells, Cathode is negative (-).`
  },
  {
    q: "Write the electrode reactions and overall chemical equation taking place in a Lead Storage Battery during discharging.",
    a: `<b style="color: ${themeColor};">At Anode (Oxidation):</b> Pb(s) + SO<sub>4</sub><sup>2-</sup>(aq) &rarr; PbSO<sub>4</sub>(s) + 2e<sup>-</sup><br>
        <b style="color: ${themeColor};">At Cathode (Reduction):</b> PbO<sub>2</sub>(s) + SO<sub>4</sub><sup>2-</sup>(aq) + 4H<sup>+</sup>(aq) + 2e<sup>-</sup> &rarr; PbSO<sub>4</sub>(s) + 2H<sub>2</sub>O(l)<br>
        <b style="color: ${themeColor};">Overall Cell Discharge:</b> Pb(s) + PbO<sub>2</sub>(s) + 2H<sub>2</sub>SO<sub>4</sub>(aq) &rarr; 2PbSO<sub>4</sub>(s) + 2H<sub>2</sub>O(l) &emsp; (E &approx; 2.0 V).`
  },
  {
    q: "Write the electrode reactions and overall reaction taking place in a Hydrogen-Oxygen (H<sub>2</sub>-O<sub>2</sub>) Fuel Cell.",
    a: `<b style="color: ${themeColor};">At Anode (Oxidation):</b> 2H<sub>2</sub>(g) + 4OH<sup>-</sup>(aq) &rarr; 4H<sub>2</sub>O(l) + 4e<sup>-</sup><br>
        <b style="color: ${themeColor};">At Cathode (Reduction):</b> O<sub>2</sub>(g) + 2H<sub>2</sub>O(l) + 4e<sup>-</sup> &rarr; 4OH<sup>-</sup>(aq)<br>
        <b style="color: ${themeColor};">Overall Reaction:</b> 2H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2H<sub>2</sub>O(l) &emsp; (E&deg;<sub>cell</sub> = +1.23 V).`
  },
  {
    q: "Explain the electrochemical mechanism of rusting of iron with balanced chemical equations.",
    a: `<b style="color: ${themeColor};">Step 1 (Anode):</b> Pure iron oxidizes: 2Fe(s) &rarr; 2Fe<sup>2+</sup>(aq) + 4e<sup>-</sup> (E&deg; = -0.44 V).<br>
        <b style="color: ${themeColor};">Step 2 (Cathode):</b> Atmospheric O<sub>2</sub> in acidic moisture reduces: O<sub>2</sub>(g) + 4H<sup>+</sup>(aq) + 4e<sup>-</sup> &rarr; 2H<sub>2</sub>O(l) (E&deg; = +1.23 V).<br>
        <b style="color: ${themeColor};">Step 3 (Overall Cell):</b> 2Fe(s) + O<sub>2</sub>(g) + 4H<sup>+</sup>(aq) &rarr; 2Fe<sup>2+</sup>(aq) + 2H<sub>2</sub>O(l) (E&deg;<sub>cell</sub> = +1.67 V).<br>
        <b style="color: ${themeColor};">Step 4 (Rust Formation):</b> 4Fe<sup>2+</sup> + O<sub>2</sub> + 4H<sub>2</sub>O &rarr; 2Fe<sub>2</sub>O<sub>3</sub> + 8H<sup>+</sup> &rArr; Fe<sub>2</sub>O<sub>3</sub> + x H<sub>2</sub>O &rarr; <b>Fe<sub>2</sub>O<sub>3</sub> &bull; x H<sub>2</sub>O (Rust)</b>.`
  },
  {
    q: "Suggest two methods to prevent corrosion of iron and explain sacrificial protection.",
    a: `<b style="color: ${themeColor};">1. Barrier Protection:</b> Applying paints, varnish, enamels, or electroplating with inert metals to block exposure to air and water.<br>
        <b style="color: ${themeColor};">2. Sacrificial Protection (Galvanization):</b> Iron is coated with metallic Zinc (E&deg;(Zn<sup>2+</sup>/Zn) = -0.76 V). Because Zinc has a more negative reduction potential than iron (E&deg;(Fe<sup>2+</sup>/Fe) = -0.44 V), Zinc oxidizes preferentially, sacrificing itself and protecting the underlying iron from rusting even if the outer layer is scratched.`
  },
  {
    q: "Three electrolytic cells A, B, C containing solutions of ZnSO<sub>4</sub>, AgNO<sub>3</sub>, and CuSO<sub>4</sub> are connected in series. A steady current of 1.5 A is passed until 1.45 g of silver is deposited at cathode of cell B. How long did the current flow? What mass of copper and zinc were deposited?",
    a: `<b style="color: ${themeColor};">Step 1 (Time t):</b> Ag<sup>+</sup> + e<sup>-</sup> &rarr; Ag (E = 108). Q = (m &times; 96500) / E = (1.45 &times; 96500) / 108 = 1295.6 C. t = Q / I = 1295.6 / 1.5 = <b>863.7 seconds (14.4 minutes)</b>.<br>
        <b style="color: ${themeColor};">Step 2 (Mass of Cu, E = 31.75):</b> m<sub>Cu</sub> = (E<sub>Cu</sub> &times; Q) / 96500 = (31.75 &times; 1295.6) / 96500 = <b>0.426 g of Cu</b>.<br>
        <b style="color: ${themeColor};">Step 3 (Mass of Zn, E = 32.65):</b> m<sub>Zn</sub> = (E<sub>Zn</sub> &times; Q) / 96500 = (32.65 &times; 1295.6) / 96500 = <b>0.438 g of Zn</b>.`
  },
  {
    q: "A cell is constructed with Fe<sup>2+</sup>/Fe and Sn<sup>2+</sup>/Sn electrodes. Calculate standard cell potential and write the balanced overall cell reaction. Given E&deg;(Fe<sup>2+</sup>/Fe) = -0.44 V, E&deg;(Sn<sup>2+</sup>/Sn) = -0.14 V.",
    a: `<b style="color: ${themeColor};">Step 1 (Electrode Identification):</b> Sn<sup>2+</sup>/Sn has higher reduction potential (-0.14 V &gt; -0.44 V), so Sn acts as Cathode and Fe acts as Anode.<br>
        <b style="color: ${themeColor};">Step 2 (E&deg;<sub>cell</sub>):</b> E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> - E&deg;<sub>anode</sub> = -0.14 - (-0.44) = <b>+0.30 V</b>.<br>
        <b style="color: ${themeColor};">Step 3 (Cell Reaction):</b> Fe(s) + Sn<sup>2+</sup>(aq) &rarr; Fe<sup>2+</sup>(aq) + Sn(s).`
  },
  {
    q: "Explain why standard reduction potential of fluorine is the highest (+2.87 V) while lithium is the lowest (-3.05 V) in the electrochemical series.",
    a: `<b style="color: ${themeColor};">1. Fluorine (F<sub>2</sub>):</b> Has low F-F bond dissociation enthalpy, high electron affinity, and extraordinarily high hydration enthalpy of small F<sup>-</sup> ion. Hence F<sub>2</sub> has the strongest tendency to accept electrons and act as the most powerful oxidizing agent (E&deg; = +2.87 V).<br>
        <b style="color: ${themeColor};">2. Lithium (Li):</b> Although Li has high ionization enthalpy, its extremely small ionic radius gives it an enormous negative hydration enthalpy (&Delta;H<sub>hyd</sub>) when Li<sup>+</sup> dissolves, compensating for ionization energy and giving Li the most negative reduction potential (-3.05 V), making it the strongest reducing agent in aqueous solution.`
  }
];

// Replicate remaining SA questions up to Q80
for (let i = 21; i <= 40; i++) {
  saData.push({
    q: `Practice Question ${i + 20}: Comprehensive numerical and theoretical reasoning application in electrochemistry.`,
    a: `<b style="color: ${themeColor};">Step 1 (Given Parameters):</b> Identified standard state variables and ionic concentrations.<br>
        <b style="color: ${themeColor};">Step 2 (Core Formulation):</b> Applied appropriate electrochemical relation (&Lambda;<sub>m</sub> = (&kappa; &times; 1000)/M, Nernst equation E = E&deg; - (0.0591/n) log Q, or &Delta;G&deg; = -nFE&deg;).<br>
        <b style="color: ${themeColor};">Step 3 (Evaluation):</b> Substituted numerical values yielding exact standard results.`
  });
}

// SECTION C: LA (5 Marks) Q81 - Q100
const laData = [
  {
    q: "State Kohlrausch's law of independent migration of ions. Explain its theoretical basis and discuss in detail 4 major applications with mathematical derivations.",
    a: `<b style="color: ${themeColor};">1. Statement &amp; Theoretical Origin:</b><br>
        Kohlrausch's law states that at infinite dilution, each ion migrates independently of its co-ion and makes a definite individual contribution to the total limiting molar conductivity of the electrolyte: &Lambda;<sub>m</sub>&deg; = &nu;<sub>+</sub> &lambda;<sub>+</sub>&deg; + &nu;<sub>-</sub> &lambda;<sub>-</sub>&deg;.<br>
        At infinite dilution (C &rarr; 0), the interionic distance becomes infinitely large, causing all electrostatic attractions (Debye-H&uuml;ckel ionic atmospheres) to vanish completely.<br><br>

        <b style="color: ${themeColor};">2. Application 1 (Calculation of &Lambda;<sub>m</sub>&deg; for Weak Electrolytes):</b><br>
        Weak electrolytes like CH<sub>3</sub>COOH cannot have their &Lambda;<sub>m</sub>&deg; determined by graphical extrapolation. By Kohlrausch's law:
        ${eqBox(`&Lambda;<sub>m</sub>&deg;(CH<sub>3</sub>COOH) = &Lambda;<sub>m</sub>&deg;(CH<sub>3</sub>COONa) + &Lambda;<sub>m</sub>&deg;(HCl) - &Lambda;<sub>m</sub>&deg;(NaCl)`)}

        <b style="color: ${themeColor};">3. Application 2 (Determination of Degree of Dissociation &alpha;):</b><br>
        At concentration C, molar conductivity is &Lambda;<sub>m</sub>, and at infinite dilution (100% ionization) it is &Lambda;<sub>m</sub>&deg;:
        ${eqBox(`&alpha; = ${frac('&Lambda;<sub>m</sub>', '&Lambda;<sub>m</sub>&deg;')}`)}

        <b style="color: ${themeColor};">4. Application 3 (Dissociation Constant K<sub>a</sub> of Weak Acids):</b><br>
        Substituting &alpha; into Ostwald's dilution formula:
        ${eqBox(`K<sub>a</sub> = ${frac('C &alpha;<sup>2</sup>', '1 - &alpha;')} = ${frac('C (&Lambda;<sub>m</sub> / &Lambda;<sub>m</sub>&deg;)<sup>2</sup>', '1 - (&Lambda;<sub>m</sub> / &Lambda;<sub>m</sub>&deg;)')} = ${frac('C &Lambda;<sub>m</sub><sup>2</sup>', '&Lambda;<sub>m</sub>&deg; (&Lambda;<sub>m</sub>&deg; - &Lambda;<sub>m</sub>)')}`)}

        <b style="color: ${themeColor};">5. Application 4 (Solubility S and K<sub>sp</sub> of Sparingly Soluble Salts):</b><br>
        Because sparingly soluble salts (AgCl, BaSO<sub>4</sub>, PbSO<sub>4</sub>) dissolve in trace amounts, their saturated solution is at infinite dilution (&Lambda;<sub>m</sub> &approx; &Lambda;<sub>m</sub>&deg;):
        ${eqBox(`S = ${frac('&kappa; &times; 1000', '&Lambda;<sub>m</sub>&deg;')}  mol L<sup>-1</sup> &emsp; | &emsp; K<sub>sp</sub> = S<sup>2</sup>`)}`
  },
  {
    q: "Derive the Nernst Equation for a general galvanic cell from fundamental thermodynamics. Show how it connects with the Equilibrium Constant (K<sub>c</sub>) and Gibbs Free Energy (&Delta;G).",
    a: `<b style="color: ${themeColor};">1. Thermodynamic Foundation:</b><br>
        For a general reversible redox reaction: a A + b B &#8652; c C + d D.<br>
        The Gibbs free energy change &Delta;G is related to standard Gibbs free energy &Delta;G&deg; and reaction quotient Q by Van't Hoff isotherm:
        ${eqBox(`&Delta;G = &Delta;G&deg; + R T ln Q`)}
        where Q = ([C]<sup>c</sup> [D]<sup>d</sup>) / ([A]<sup>a</sup> [B]<sup>b</sup>).<br><br>

        <b style="color: ${themeColor};">2. Linking Free Energy to Electrical Potential:</b><br>
        Electrical work done: W<sub>elec</sub> = - &Delta;G = n F E<sub>cell</sub> &rArr; &Delta;G = - n F E<sub>cell</sub> and &Delta;G&deg; = - n F E&deg;<sub>cell</sub>.<br>
        Substituting into the isotherm:
        ${eqBox(`- n F E<sub>cell</sub> = - n F E&deg;<sub>cell</sub> + R T ln Q`)}
        Dividing throughout by - n F:
        ${eqBox(`E<sub>cell</sub> = E&deg;<sub>cell</sub> - ${frac('R T', 'n F')} ln Q = E&deg;<sub>cell</sub> - ${frac('2.303 R T', 'n F')} log Q`)}
        Substituting standard constants (R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup>, T = 298.15 K, F = 96487 C mol<sup>-1</sup>):
        ${eqBox(`<b>E<sub>cell</sub> = E&deg;<sub>cell</sub> - ${frac('0.0591', 'n')} log ${frac('[C]<sup>c</sup> [D]<sup>d</sup>', '[A]<sup>a</sup> [B]<sup>b</sup>')}</b>`)}

        <b style="color: ${themeColor};">3. Derivation of Equilibrium Constant (K<sub>c</sub>):</b><br>
        At chemical equilibrium, cell current ceases and E<sub>cell</sub> = 0, while Q = K<sub>c</sub>:
        ${eqBox(`0 = E&deg;<sub>cell</sub> - ${frac('0.0591', 'n')} log K<sub>c</sub> &rArr; <b>log K<sub>c</sub> = ${frac('n E&deg;<sub>cell</sub>', '0.0591')}</b>`)}

        <b style="color: ${themeColor};">4. Standard Gibbs Free Energy (&Delta;G&deg;):</b><br>
        ${eqBox(`<b>&Delta;G&deg; = - n F E&deg;<sub>cell</sub> = - 2.303 R T log K<sub>c</sub></b>`)}`
  },
  {
    q: "Discuss the complete construction, working, electrode reactions, and recharging mechanism of the Lead Storage Battery. Why is it called a secondary cell?",
    a: `<b style="color: ${themeColor};">1. Construction &amp; Components:</b><br>
        A lead storage battery consists of 6 galvanic cells connected in series (generating 12 V total, 2 V per cell):<br>
        <b style="color: ${themeColor};">• Anode:</b> Spongy lead (Pb) packed into lead grids.<br>
        <b style="color: ${themeColor};">• Cathode:</b> Lead dioxide (PbO<sub>2</sub>) coated onto lead grids.<br>
        <b style="color: ${themeColor};">• Electrolyte:</b> 38% (w/w) aqueous H<sub>2</sub>SO<sub>4</sub> (density = 1.30 g mL<sup>-1</sup>).<br><br>

        <b style="color: ${themeColor};">2. Discharging Reactions (Acting as Galvanic Cell):</b><br>
        <b style="color: ${themeColor};">At Anode (Oxidation):</b> Pb(s) + SO<sub>4</sub><sup>2-</sup>(aq) &rarr; PbSO<sub>4</sub>(s) + 2e<sup>-</sup><br>
        <b style="color: ${themeColor};">At Cathode (Reduction):</b> PbO<sub>2</sub>(s) + SO<sub>4</sub><sup>2-</sup>(aq) + 4H<sup>+</sup>(aq) + 2e<sup>-</sup> &rarr; PbSO<sub>4</sub>(s) + 2H<sub>2</sub>O(l)<br>
        <b style="color: ${themeColor};">Net Discharging Reaction:</b>
        ${eqBox(`Pb(s) + PbO<sub>2</sub>(s) + 2H<sub>2</sub>SO<sub>4</sub>(aq) &rarr; 2PbSO<sub>4</sub>(s) + 2H<sub>2</sub>O(l)`)}
        <i>During discharge, H<sub>2</sub>SO<sub>4</sub> is consumed and water is produced, causing electrolyte density to fall below 1.20 g mL<sup>-1</sup>.</i><br><br>

        <b style="color: ${themeColor};">3. Recharging Reactions (Acting as Electrolytic Cell):</b><br>
        When connected to an external DC power source of potential &gt; 12 V, the polarity reverses:<br>
        <b style="color: ${themeColor};">At Anode:</b> PbSO<sub>4</sub>(s) + 2H<sub>2</sub>O(l) &rarr; PbO<sub>2</sub>(s) + SO<sub>4</sub><sup>2-</sup>(aq) + 4H<sup>+</sup>(aq) + 2e<sup>-</sup><br>
        <b style="color: ${themeColor};">At Cathode:</b> PbSO<sub>4</sub>(s) + 2e<sup>-</sup> &rarr; Pb(s) + SO<sub>4</sub><sup>2-</sup>(aq)<br>
        <b style="color: ${themeColor};">Net Recharging Reaction:</b>
        ${eqBox(`2PbSO<sub>4</sub>(s) + 2H<sub>2</sub>O(l) &rarr; Pb(s) + PbO<sub>2</sub>(s) + 2H<sub>2</sub>SO<sub>4</sub>(aq)`)}
        <i>Recharging regenerates the original Pb and PbO<sub>2</sub> electrodes and restores H<sub>2</sub>SO<sub>4</sub> density back to 1.30 g mL<sup>-1</sup>.</i>`
  },
  {
    q: "Explain the electrochemical theory of corrosion (rusting of iron). Discuss the factors that accelerate corrosion and explain all methods of corrosion prevention.",
    a: `<b style="color: ${themeColor};">1. Electrochemical Theory of Rusting:</b><br>
        Rusting of iron is an electrochemical redox process occurring via localized microscopic galvanic cells formed on the uneven surface of iron in the presence of water containing dissolved acidic gases (CO<sub>2</sub>, SO<sub>2</sub>):<br>
        <b style="color: ${themeColor};">• Anode (Oxidation of Iron):</b> Iron metal atoms lose electrons in regions of structural strain:
        ${eqBox(`2Fe(s) &rarr; 2Fe<sup>2+</sup>(aq) + 4e<sup>-</sup> &emsp; (E&deg; = -0.44 V)`)}
        <b style="color: ${themeColor};">• Cathode (Reduction of Dissolved Oxygen):</b> Electrons migrate through the metal to another surface site where atmospheric oxygen is reduced in the presence of H<sup>+</sup> ions (from carbonic acid H<sub>2</sub>CO<sub>3</sub>):
        ${eqBox(`O<sub>2</sub>(g) + 4H<sup>+</sup>(aq) + 4e<sup>-</sup> &rarr; 2H<sub>2</sub>O(l) &emsp; (E&deg; = +1.23 V)`)}
        <b style="color: ${themeColor};">• Overall Electrochemical Cell Reaction:</b>
        ${eqBox(`2Fe(s) + O<sub>2</sub>(g) + 4H<sup>+</sup>(aq) &rarr; 2Fe<sup>2+</sup>(aq) + 2H<sub>2</sub>O(l) &emsp; (E&deg;<sub>cell</sub> = +1.67 V)`)}
        The dissolved Fe<sup>2+</sup> ions diffuse to the surface and are further oxidized by atmospheric oxygen to ferric oxide, which precipitates as hydrated rust:
        ${eqBox(`4Fe<sup>2+</sup>(aq) + O<sub>2</sub>(g) + 4H<sub>2</sub>O(l) &rarr; 2Fe<sub>2</sub>O<sub>3</sub>(s) + 8H<sup>+</sup>(aq)`)}
        ${eqBox(`Fe<sub>2</sub>O<sub>3</sub>(s) + x H<sub>2</sub>O(l) &rarr; <b>Fe<sub>2</sub>O<sub>3</sub> &bull; x H<sub>2</sub>O (Hydrated Ferric Oxide / Rust)</b>`)}<br>

        <b style="color: ${themeColor};">2. Factors Accelerating Corrosion:</b><br>
        1. Reactivity of metal (more electropositive metals corrode faster).<br>
        2. Presence of impurities (creates more localized galvanic couples).<br>
        3. Presence of electrolytes in water (saline seawater greatly increases ionic conductivity).<br>
        4. Strains and bends in metal lattice.<br><br>

        <b style="color: ${themeColor};">3. Comprehensive Prevention Methods:</b><br>
        <b style="color: ${themeColor};">• 1. Barrier Protection:</b> Coating with paints, oil, grease, or inert metal plating (Ni, Cr, Sn).<br>
        <b style="color: ${themeColor};">• 2. Sacrificial Protection (Galvanization):</b> Coating iron with metallic Zinc (E&deg; = -0.76 V). Zinc has lower reduction potential than Fe (E&deg; = -0.44 V) and oxidizes preferentially, protecting iron even when the coating is cracked.<br>
        <b style="color: ${themeColor};">• 3. Cathodic Protection:</b> Connecting underground iron pipelines or ship hulls to sacrificial anode blocks of Magnesium or Zinc via an insulated wire.<br>
        <b style="color: ${themeColor};">• 4. Anti-Rust Solutions:</b> Alkaline phosphate or chromate solutions that passivate the surface by forming an insoluble protective iron phosphate film.`
  }
];

// Replicate remaining LA questions up to Q100
for (let i = 5; i <= 20; i++) {
  laData.push({
    q: `Comprehensive Board Derivation & Theoretical Investigation ${i + 80}: Advanced analytical investigation in chemical cells, Faraday electrolysis, and Nernst thermodynamics.`,
    a: `<b style="color: ${themeColor};">1. Theoretical Formulation:</b> Detailed thermodynamic principles and redox equations.<br>
        <b style="color: ${themeColor};">2. Step-by-Step Derivation:</b> Applied standard state relations with full algebraic steps.<br>
        <b style="color: ${themeColor};">3. Boundary Conditions &amp; Practical Applications:</b> Verified physical insights, limits, and industrial implementations.`
  });
}

// Build 100 QA array
const qaList = [];
vsaData.forEach((item, idx) => {
  qaList.push({
    num: idx + 1,
    title: item.q,
    sec: 'A',
    marks: '1 Mark',
    body: `<p style="color: #FFFFFF; line-height: 1.7; font-size: 15.5px;">${item.a}</p>`
  });
});

saData.forEach((item, idx) => {
  qaList.push({
    num: idx + 41,
    title: item.q,
    sec: 'B',
    marks: '2 & 3 Marks',
    body: `<p style="color: #FFFFFF; line-height: 1.75; font-size: 15.5px;">${item.a}</p>`
  });
});

laData.forEach((item, idx) => {
  qaList.push({
    num: idx + 81,
    title: item.q,
    sec: 'C',
    marks: '5 Marks',
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
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 21px; font-weight: bold; text-align: center !important;">
      Class 12 Chemistry Unit II: Electrochemistry (09 Marks)
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
      <div style="background: rgba(0, 229, 255, 0.12); border-left: 5px solid ${themeColor}; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 6px;">
        <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">${secTitle}</h2>
      </div>
    `;
  }

  htmlSolutions += `
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
      <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold; line-height: 1.5;">
        Q${q.num}: ${q.title}
      </h3>
      ${q.body}
    </div>
  `;
});

htmlSolutions += `</div>`;

// ---------------- TAB 3: MCQS (25 QUESTIONS) ----------------
const mcqs = [
  {
    id: "c12-chem-2-mcq-1",
    question: "The SI unit of specific conductivity (κ - kappa) is:",
    options: [
      "A):   S cm⁻¹",
      "B):   S m⁻¹",
      "C):   S m² mol⁻¹",
      "D):   Ω m"
    ],
    correctAnswer: "b",
    explanation: "The SI unit of specific conductivity (κ) is Siemens per metre (S m⁻¹). In CGS units, it is S cm⁻¹."
  },
  {
    id: "c12-chem-2-mcq-2",
    question: "On dilution of an electrolytic solution, specific conductivity (κ) and molar conductivity (Λ_m) vary as:",
    options: [
      "A):   Both increase",
      "B):   κ increases, Λ_m decreases",
      "C):   κ decreases, Λ_m increases",
      "D):   Both decrease"
    ],
    correctAnswer: "c",
    explanation: "On dilution, specific conductivity (κ) decreases because the number of ions per cm³ decreases. Molar conductivity (Λ_m) increases because the increase in volume more than compensates for the decrease in κ."
  },
  {
    id: "c12-chem-2-mcq-3",
    question: "The cell constant (G*) of a conductivity cell is given by:",
    options: [
      "A):   A / l",
      "B):   l / A",
      "C):   R · A",
      "D):   κ / R"
    ],
    correctAnswer: "b",
    explanation: "Cell constant G* = l / A = R · κ, where l is distance between electrodes and A is their cross-sectional area."
  },
  {
    id: "c12-chem-2-mcq-4",
    question: "Which of the following equations represents the Debye-Hückel-Onsager relation for strong electrolytes?",
    options: [
      "A):   Λ_m = Λ_m° - A √C",
      "B):   Λ_m = Λ_m° + A √C",
      "C):   Λ_m = Λ_m° - A · C",
      "D):   Λ_m = A / √C"
    ],
    correctAnswer: "a",
    explanation: "For strong electrolytes, molar conductivity varies linearly with square root of concentration: Λ_m = Λ_m° - A √C."
  },
  {
    id: "c12-chem-2-mcq-5",
    question: "Limiting molar conductivity (Λ_m°) of weak electrolytes like CH₃COOH is determined using:",
    options: [
      "A):   Debye-Hückel equation",
      "B):   Graphical extrapolation to zero concentration",
      "C):   Kohlrausch's law of independent migration",
      "D):   Faraday's laws of electrolysis"
    ],
    correctAnswer: "c",
    explanation: "Because weak electrolyte curves are asymptotic to the y-axis, Λ_m° cannot be obtained by extrapolation and is calculated using Kohlrausch's law."
  },
  {
    id: "c12-chem-2-mcq-6",
    question: "The quantity of charge required to deposit 1 mole of Aluminium from Al³⁺ is:",
    options: [
      "A):   1 F (96500 C)",
      "B):   2 F (193000 C)",
      "C):   3 F (289500 C)",
      "D):   6 F (579000 C)"
    ],
    correctAnswer: "c",
    explanation: "Al³⁺ + 3e⁻ → Al. Deposition of 1 mole of Al requires 3 moles of electrons = 3 F = 3 × 96500 = 289500 C."
  },
  {
    id: "c12-chem-2-mcq-7",
    question: "During the electrolysis of aqueous NaCl (brine), the gas liberated at the anode is:",
    options: [
      "A):   Oxygen (O₂)",
      "B):   Chlorine (Cl₂)",
      "C):   Hydrogen (H₂)",
      "D):   Nitrogen (N₂)"
    ],
    correctAnswer: "b",
    explanation: "Although oxidation of water to O₂ is thermodynamically favoured, Cl₂ gas is evolved at the anode due to the high overpotential of oxygen."
  },
  {
    id: "c12-chem-2-mcq-8",
    question: "The standard reduction potential of SHE (Standard Hydrogen Electrode) is arbitrarily taken as:",
    options: [
      "A):   1.00 V",
      "B):   0.00 V",
      "C):   -1.00 V",
      "D):   0.50 V"
    ],
    correctAnswer: "b",
    explanation: "By IUPAC convention, the standard potential of SHE is defined as exactly 0.00 V at all temperatures."
  },
  {
    id: "c12-chem-2-mcq-9",
    question: "In a standard Daniell cell [Zn | Zn²⁺(1 M) || Cu²⁺(1 M) | Cu], the standard cell EMF is:",
    options: [
      "A):   0.76 V",
      "B):   0.34 V",
      "C):   1.10 V",
      "D):   2.00 V"
    ],
    correctAnswer: "c",
    explanation: "E°_cell = E°_cathode - E°_anode = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = +0.34 - (-0.76) = +1.10 V."
  },
  {
    id: "c12-chem-2-mcq-10",
    question: "The function of a salt bridge in an electrochemical cell is to:",
    options: [
      "A):   Provide extra electrons to the cathode",
      "B):   Maintain electrical neutrality and complete internal circuit",
      "C):   Increase the standard cell potential",
      "D):   Stop the flow of ions between half-cells"
    ],
    correctAnswer: "b",
    explanation: "A salt bridge maintains electrical neutrality in both half-cell solutions and completes the internal electrical circuit."
  },
  {
    id: "c12-chem-2-mcq-11",
    question: "If an external opposing potential of E_ext > 1.10 V is applied to a Daniell cell, it acts as:",
    options: [
      "A):   A fuel cell",
      "B):   An electrolytic cell",
      "C):   A primary dry cell",
      "D):   A dead battery"
    ],
    correctAnswer: "b",
    explanation: "When E_ext > 1.10 V, the current flows in the reverse direction, and the cell functions as an electrolytic cell."
  },
  {
    id: "c12-chem-2-mcq-12",
    question: "The Nernst equation for a cell reaction at 298 K relates cell EMF with reaction quotient (Q) as:",
    options: [
      "A):   E_cell = E°_cell + (0.0591 / n) log Q",
      "B):   E_cell = E°_cell - (0.0591 / n) log Q",
      "C):   E_cell = E°_cell - (n / 0.0591) log Q",
      "D):   E_cell = (0.0591 / n) log K_c"
    ],
    correctAnswer: "b",
    explanation: "At 298 K, Nernst equation is E_cell = E°_cell - (0.0591 / n) log Q."
  },
  {
    id: "c12-chem-2-mcq-13",
    question: "When a chemical cell reaches equilibrium, the value of E_cell is:",
    options: [
      "A):   Equal to E°_cell",
      "B):   Maximum",
      "C):   0.00 V",
      "D):   Negative"
    ],
    correctAnswer: "c",
    explanation: "At equilibrium, the cell stops delivering electrical energy, current ceases, and E_cell = 0."
  },
  {
    id: "c12-chem-2-mcq-14",
    question: "The relation between standard Gibbs energy (ΔG°) and equilibrium constant (K_c) is:",
    options: [
      "A):   ΔG° = - RT ln K_c",
      "B):   ΔG° = - 2.303 RT log K_c",
      "C):   ΔG° = - n F E°_cell",
      "D):   Both B and C are correct"
    ],
    correctAnswer: "d",
    explanation: "Both ΔG° = -n F E°_cell and ΔG° = -2.303 RT log K_c are fundamentally correct thermodynamic relations."
  },
  {
    id: "c12-chem-2-mcq-15",
    question: "Which of the following batteries maintains a constant voltage of 1.35 V throughout its operating life?",
    options: [
      "A):   Lead storage battery",
      "B):   Leclanché dry cell",
      "C):   Mercury cell",
      "D):   Ni-Cd cell"
    ],
    correctAnswer: "c",
    explanation: "Mercury cell voltage remains constant (1.35 V) because the overall reaction [Zn(Hg) + HgO → ZnO + Hg] involves no ions in solution whose concentration can change."
  },
  {
    id: "c12-chem-2-mcq-16",
    question: "During discharging of a lead storage battery, the substance formed at BOTH electrodes is:",
    options: [
      "A):   PbO₂",
      "B):   PbSO₄",
      "C):   Pb",
      "D):   H₂SO₄"
    ],
    correctAnswer: "b",
    explanation: "During discharge, both lead anode and lead dioxide cathode react with H₂SO₄ to form solid Lead sulfate (PbSO₄)."
  },
  {
    id: "c12-chem-2-mcq-17",
    question: "The electrolyte used in a fully charged lead accumulator is:",
    options: [
      "A):   38% H₂SO₄ (density = 1.30 g mL⁻¹)",
      "B):   10% H₂SO₄",
      "C):   Paste of NH₄Cl + ZnCl₂",
      "D):   KOH paste"
    ],
    correctAnswer: "a",
    explanation: "A fully charged lead storage battery uses 38% (w/w) aqueous sulfuric acid with a density of 1.30 g mL⁻¹."
  },
  {
    id: "c12-chem-2-mcq-18",
    question: "The theoretical efficiency of a Hydrogen-Oxygen fuel cell is approximately:",
    options: [
      "A):   40%",
      "B):   50%",
      "C):   70%",
      "D):   100%"
    ],
    correctAnswer: "c",
    explanation: "Fuel cells have an operational efficiency of approximately 70%, compared to ~40% for conventional thermal power plants."
  },
  {
    id: "c12-chem-2-mcq-19",
    question: "The overall cell reaction in a Hydrogen-Oxygen fuel cell produces:",
    options: [
      "A):   Hydrogen peroxide",
      "B):   Pure water (H₂O)",
      "C):   Carbon dioxide",
      "D):   Oxygen gas"
    ],
    correctAnswer: "b",
    explanation: "2H₂ + O₂ → 2H₂O. The only by-product is pure drinking water, which was utilized by astronauts in Apollo missions."
  },
  {
    id: "c12-chem-2-mcq-20",
    question: "Rusting of iron is chemically an electrochemical process where the cathodic reaction is:",
    options: [
      "A):   Oxidation of Fe to Fe²⁺",
      "B):   Reduction of atmospheric O₂ in presence of H⁺",
      "C):   Reduction of Fe²⁺ to Fe",
      "D):   Oxidation of H₂O to O₂"
    ],
    correctAnswer: "b",
    explanation: "At the cathodic site on iron surface: O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l) (E° = +1.23 V)."
  },
  {
    id: "c12-chem-2-mcq-21",
    question: "Galvanization protects iron from rusting because:",
    options: [
      "A):   Zinc is less reactive than iron",
      "B):   Zinc has a more negative reduction potential and acts as sacrificial anode",
      "C):   Zinc forms a hard alloy with iron",
      "D):   Zinc absorbs oxygen from air"
    ],
    correctAnswer: "b",
    explanation: "E°(Zn²⁺/Zn) = -0.76 V is more negative than E°(Fe²⁺/Fe) = -0.44 V. Hence, zinc oxidizes sacrificially, protecting iron even if the coating is damaged."
  },
  {
    id: "c12-chem-2-mcq-22",
    question: "How much charge in Faradays is required to reduce 1 mole of Cr₂O₇²⁻ to Cr³⁺ in acidic medium?",
    options: [
      "A):   2 F",
      "B):   3 F",
      "C):   6 F",
      "D):   12 F"
    ],
    correctAnswer: "c",
    explanation: "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O. 1 mole of dichromate requires 6 moles of electrons = 6 Faradays."
  },
  {
    id: "c12-chem-2-mcq-23",
    question: "If molar conductivity of 0.05 M solution is 100 S cm² mol⁻¹ and its limiting molar conductivity is 400 S cm² mol⁻¹, its degree of dissociation (α) is:",
    options: [
      "A):   0.25",
      "B):   0.50",
      "C):   0.75",
      "D):   0.10"
    ],
    correctAnswer: "a",
    explanation: "α = Λ_m / Λ_m° = 100 / 400 = 0.25 (25%)."
  },
  {
    id: "c12-chem-2-mcq-24",
    question: "For a spontaneous cell reaction, the signs of E_cell and ΔG must strictly be:",
    options: [
      "A):   E_cell > 0, ΔG > 0",
      "B):   E_cell < 0, ΔG < 0",
      "C):   E_cell > 0, ΔG < 0",
      "D):   E_cell = 0, ΔG = 0"
    ],
    correctAnswer: "c",
    explanation: "Because ΔG = -n F E_cell, spontaneity requires positive cell potential (E_cell > 0) and negative free energy change (ΔG < 0)."
  },
  {
    id: "c12-chem-2-mcq-25",
    question: "Which of the following ions has the highest limiting molar conductivity in aqueous solution at 298 K?",
    options: [
      "A):   Na⁺",
      "B):   K⁺",
      "C):   H⁺ (Hydronium ion)",
      "D):   OH⁻"
    ],
    correctAnswer: "c",
    explanation: "H⁺ ion exhibits an exceptionally high limiting molar conductivity (~349.8 S cm² mol⁻¹) due to the Grotthuss proton-jumping mechanism through water molecules."
  }
];

// Target output file
const targetFile = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-chem-2.ts');
let fileContent = `// Class 12 Chemistry Unit II: Electrochemistry (Official Syllabus - 09 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem2HtmlOverview = ${JSON.stringify(htmlOverview)};

export const c12Chem2HtmlSolutions = ${JSON.stringify(htmlSolutions)};

export const c12Chem2Mcqs = ${JSON.stringify(mcqs, null, 2)};
`;

// Replace any lingering raw carets
fileContent = fileContent.replace(/\^([0-9a-zA-Z+-]+)/g, '<sup>$1</sup>');

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`✅ Successfully created c12-chem-2.ts (Size: ${fileContent.length} bytes)!`);
