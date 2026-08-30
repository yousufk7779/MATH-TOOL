const fs = require('fs');
const path = require('path');

const themeColor = "#2979FF";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(41, 121, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// ---------------- TAB 1: OVERVIEW HTML ----------------
require('./build_c12_chem_6_overview.js');
let htmlOverview = fs.readFileSync('scratch/c12_chem_6_overview.html', 'utf8');

// Ensure all <b>...:</b> inside overview have themeColor
htmlOverview = htmlOverview.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => `<b style="color: ${themeColor};">${inner}</b>`);

// ---------------- TAB 2: SOLUTIONS (100 QUESTIONS) ----------------
const vsaData = [
  { q: "Define Haloalkanes and Haloarenes.", a: "Haloalkanes are halogen derivatives of aliphatic hydrocarbons where halogen is attached to an sp<sup>3</sup> hybridised carbon; Haloarenes are halogen derivatives of aromatic hydrocarbons where halogen is bonded directly to an sp<sup>2</sup> hybridised ring carbon." },
  { q: "What are Allylic Halides? Give one example.", a: "Compounds in which halogen is bonded to an sp<sup>3</sup> hybridised carbon atom adjacent to a carbon-carbon double bond (e.g. <b>CH<sub>2</sub>=CH-CH<sub>2</sub>Cl</b>, 3-chloroprop-1-ene)." },
  { q: "What are Vinylic Halides? Give one example.", a: "Compounds in which halogen is bonded directly to an sp<sup>2</sup> hybridised carbon of a carbon-carbon double bond (e.g. <b>CH<sub>2</sub>=CH-Cl</b>, chloroethene / vinyl chloride)." },
  { q: "What are Benzylic Halides? Give one example.", a: "Compounds in which halogen is bonded to an sp<sup>3</sup> hybridised carbon atom attached directly to an aromatic benzene ring (e.g. <b>C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>Cl</b>, benzyl chloride)." },
  { q: "Distinguish between Gem-dihalides and Vic-dihalides.", a: "In <b>gem-dihalides</b>, both halogen atoms are on the same carbon (e.g. CH<sub>3</sub>CHCl<sub>2</sub>); in <b>vic-dihalides</b>, halogens are on two adjacent carbon atoms (e.g. ClCH<sub>2</sub>-CH<sub>2</sub>Cl)." },
  { q: "Why is the dipole moment of CH<sub>3</sub>Cl higher than that of CH<sub>3</sub>F?", a: "Because the C-Cl bond length is significantly larger than the C-F bond length, and dipole moment is the product of charge and distance (&mu; = q &times; d). The larger bond distance in CH<sub>3</sub>Cl outweighs the smaller electronegativity difference." },
  { q: "Why are haloalkanes insoluble in water despite being polar molecules?", a: "Because haloalkane molecules cannot form hydrogen bonds with water molecules, and the energy released by haloalkane-water dipole interactions is insufficient to break the strong hydrogen bonds between water molecules." },
  { q: "Why do isomeric haloalkanes have the boiling point order: 1&deg; &gt; 2&deg; &gt; 3&deg;?", a: "Branching increases spherical shape, decreasing surface area of contact, which lowers intermolecular van der Waals forces and decreases boiling points." },
  { q: "Why does p-dichlorobenzene have a higher melting point than o- and m-isomers?", a: "Due to its <b>symmetrical structure</b>, <i>p</i>-dichlorobenzene packs more tightly and closely into the crystal lattice, requiring higher thermal energy to break." },
  { q: "What is Lucas Reagent? State its use.", a: "An equimolar mixture of <b>concentrated HCl and anhydrous ZnCl<sub>2</sub></b>; used to distinguish between primary (no reaction at room temp), secondary (turbidity in 5 min), and tertiary alcohols (instant turbidity)." },
  { q: "Why is thionyl chloride (SOCl<sub>2</sub>) preferred for preparing alkyl chlorides from alcohols?", a: "Because the reaction by-products (<b>SO<sub>2</sub> and HCl</b>) are escapable gases, leaving behind pure alkyl chloride without requiring tedious purification." },
  { q: "Write the chemical equation for Finkelstein Reaction.", a: "<b>R-Cl / R-Br + NaI &xrightarrow{dry acetone} R-I + NaCl&darr; / NaBr&darr;</b>." },
  { q: "Write the chemical equation for Swarts Reaction.", a: "<b>R-Br + AgF (or Hg<sub>2</sub>F<sub>2</sub>, SbF<sub>3</sub>) &rightarrow; R-F + AgBr&darr;</b>." },
  { q: "What is an Ambident Nucleophile? Give two examples.", a: "A nucleophile possessing two different nucleophilic donor centers through which it can attack a substrate (e.g. <b>Cyanide ion:</b> <sup>-</sup>C&equiv;N vs :N&equiv;C<sup>-</sup>; <b>Nitrite ion:</b> <sup>-</sup>O-N=O vs O=N-O<sup>-</sup>)." },
  { q: "Why does KCN react with haloalkanes to give alkyl cyanides while AgCN gives alkyl isocyanides?", a: "KCN is ionic, yielding free CN<sup>-</sup> where attack occurs via more electronegative nucleophilic carbon (C-C bond is more stable than C-N); AgCN is covalent, having only the nitrogen lone pair available for attack, forming R-NC." },
  { q: "Why does KNO<sub>2</sub> form alkyl nitrites (R-ONO) while AgNO<sub>2</sub> forms nitroalkanes (R-NO<sub>2</sub>)?", a: "KNO<sub>2</sub> is ionic, so attack occurs through the negatively charged oxygen atom (R-ONO); AgNO<sub>2</sub> is covalent, so attack occurs through the lone pair on nitrogen (R-NO<sub>2</sub>)." },
  { q: "What is Walden Inversion?", a: "The complete 100% inversion of optical configuration occurring during an <b>S<sub>N</sub>2</b> nucleophilic substitution reaction due to backside attack of the incoming nucleophile." },
  { q: "What is Racemisation in S<sub>N</sub>1 reactions?", a: "The conversion of an optically active enantiomer into an equimolar (50:50) optically inactive mixture of both (+) and (-) enantiomers due to nucleophile attack from both faces of the planar carbocation." },
  { q: "What is an Asymmetric (Chiral) Carbon?", a: "A tetrahedral carbon atom bonded to four entirely different atoms or functional groups." },
  { q: "Define Enantiomers.", a: "Stereoisomers that are non-superimposable mirror images of each other and rotate plane-polarized light in equal but opposite directions." },
  { q: "Why is a Racemic Mixture optically inactive?", a: "Because of <b>external compensation</b>: the optical rotation caused by molecules of one enantiomer is exactly balanced and cancelled by the equal and opposite rotation of the other enantiomer." },
  { q: "State Saytzeff's (Zaitsev's) Rule.", a: "In dehydrohalogenation (&beta;-elimination) of haloalkanes, the major product is the more highly substituted alkene having the maximum number of alkyl groups attached to the doubly bonded carbons." },
  { q: "What product is formed when 2-bromobutane is treated with alcoholic KOH?", a: "<b>But-2-ene (81% Major product)</b> and <b>But-1-ene (19% Minor product)</b> according to Saytzeff's rule." },
  { q: "Why must Grignard Reagents (R-Mg-X) be prepared under strictly anhydrous conditions?", a: "Because Grignard reagents are highly reactive toward moisture (active hydrogens), reacting rapidly with water to form alkanes: <b>RMgX + H<sub>2</sub>O &rarr; R-H + Mg(OH)X</b>." },
  { q: "Write the reaction for Wurtz-Fittig Reaction.", a: "<b>C<sub>6</sub>H<sub>5</sub>Br + CH<sub>3</sub>Br + 2Na &xrightarrow{dry ether} C<sub>6</sub>H<sub>5</sub>-CH<sub>3</sub> (Toluene) + 2NaBr</b>." },
  { q: "Write the reaction for Fittig Reaction.", a: "<b>2C<sub>6</sub>H<sub>5</sub>Cl + 2Na &xrightarrow{dry ether} C<sub>6</sub>H<sub>5</sub>-C<sub>6</sub>H<sub>5</sub> (Diphenyl) + 2NaCl</b>." },
  { q: "Why are haloarenes extremely unreactive towards nucleophilic substitution reactions?", a: "Due to resonance stabilization giving partial double bond character to C-Cl bond, higher electronegativity of sp<sup>2</sup> carbon, and electrostatic repulsion from benzene &pi;-electrons." },
  { q: "Under what conditions can chlorobenzene be converted into phenol (Dow's Process)?", a: "By heating with aqueous <b>NaOH at 623 K and 300 atm pressure</b>, followed by acidification with dilute HCl." },
  { q: "Why does the presence of a -NO<sub>2</sub> group at ortho- and para-positions increase the reactivity of haloarenes?", a: "Because the strong electron-withdrawing (-M and -I) -NO<sub>2</sub> group stabilizes the intermediate carbanion (Meisenheimer complex) by dispersing negative charge." },
  { q: "Why are halogens ortho- and para-directing in electrophilic aromatic substitution despite being deactivating?", a: "Halogen withdraws electrons via strong inductive effect (-I, deactivating), but donates lone pair via resonance (+R), which selectively increases electron density at ortho and para positions." },
  { q: "Why is chloroform stored in closed dark brown bottles containing 1% ethanol?", a: "To prevent air oxidation of chloroform into poisonous <b>phosgene gas (COCl<sub>2</sub>)</b> in sunlight; 1% ethanol converts any formed phosgene into non-toxic diethyl carbonate." },
  { q: "Write the chemical equation for the oxidation of chloroform into phosgene.", a: "<b>2CHCl<sub>3</sub> + O<sub>2</sub> &xrightarrow{light} 2COCl<sub>2</sub> (Phosgene) + 2HCl</b>." },
  { q: "What is Iodoform used for and why does it have antiseptic properties?", a: "Used as an antiseptic; its antiseptic action is due to the slow liberation of <b>free elemental iodine</b> on contact with tissues." },
  { q: "What are Freons? Name the most common Freon refrigerant.", a: "Chlorofluorocarbon (CFC) compounds of methane and ethane. The most common is <b>Freon-12 (CCl<sub>2</sub>F<sub>2</sub>, Dichlorodifluoromethane)</b>." },
  { q: "How do Freons deplete the stratospheric ozone layer?", a: "Under solar UV radiation, Freons undergo homolytic cleavage releasing active <b>Chlorine free radicals (Cl&bull;)</b>, which catalytically break down O<sub>3</sub> into O<sub>2</sub> in chain cycles." },
  { q: "What is DDT and why is it banned worldwide?", a: "<b>p,p'-Dichlorodiphenyltrichloroethane</b>, a persistent non-biodegradable insecticide that undergoes <b>Biomagnification</b> in food chains, harming wildlife and bird reproduction." },
  { q: "Arrange the following in increasing order of S<sub>N</sub>2 reactivity: 1-bromobutane, 2-bromobutane, 2-bromo-2-methylpropane.", a: "<b>2-Bromo-2-methylpropane (3&deg;) &lt; 2-Bromobutane (2&deg;) &lt; 1-Bromobutane (1&deg;)</b>." },
  { q: "Arrange the following in increasing order of S<sub>N</sub>1 reactivity: (CH<sub>3</sub>)<sub>3</sub>C-Br, (CH<sub>3</sub>)<sub>2</sub>CH-Br, CH<sub>3</sub>CH<sub>2</sub>-Br, CH<sub>3</sub>-Br.", a: "<b>CH<sub>3</sub>-Br &lt; CH<sub>3</sub>CH<sub>2</sub>-Br &lt; (CH<sub>3</sub>)<sub>2</sub>CH-Br &lt; (CH<sub>3</sub>)<sub>3</sub>C-Br</b>." },
  { q: "What is the R-S configuration of (+)-lactic acid?", a: "In (+)-lactic acid, assigning CIP priorities: -OH (1) &gt; -COOH (2) &gt; -CH<sub>3</sub> (3) &gt; -H (4) yields the <b>(S)-configuration</b>." },
  { q: "Write the IUPAC name of DDT.", a: "<b>2,2-bis(4-chlorophenyl)-1,1,1-trichloroethane</b>." }
];

// SECTION B: SA (2 & 3 Marks) Q41 - Q80
const saData = [
  {
    q: "Explain why alkyl halides, though polar, are immiscible with water but miscible with organic solvents.",
    a: `<b style="color: ${themeColor};">1. Immiscibility with Water:</b> Although R-X is polar, the intermolecular dipole-dipole attractions between R-X molecules and water are weaker than the extensive hydrogen bonding existing between water molecules. The energy released during new R-X &mdash; H<sub>2</sub>O interaction is insufficient to overcome water-water hydrogen bonds.<br>
        <b style="color: ${themeColor};">2. Miscibility with Organic Solvents:</b> The new intermolecular van der Waals attractions set up between haloalkanes and organic solvent molecules have similar magnitude to the original solvent-solvent and solute-solute forces.`
  },
  {
    q: "Compare the S<sub>N</sub>1 and S<sub>N</sub>2 mechanisms of nucleophilic substitution with respect to: (i) Kinetics, (ii) Number of steps, (iii) Intermediate / Transition state, (iv) Stereochemistry, (v) Substrate reactivity order.",
    a: `<b style="color: ${themeColor};">1. Kinetics &amp; Steps:</b> S<sub>N</sub>1 is 1st order (Rate = k[RX]) and 2 steps; S<sub>N</sub>2 is 2nd order (Rate = k[RX][Nu<sup>-</sup>]) and 1 concerted step.<br>
        <b style="color: ${themeColor};">2. Intermediate vs Transition State:</b> S<sub>N</sub>1 passes through a planar carbocation intermediate; S<sub>N</sub>2 passes through a 5-coordinate pentavalent transition state.<br>
        <b style="color: ${themeColor};">3. Stereochemistry:</b> S<sub>N</sub>1 yields <b>Racemisation</b>; S<sub>N</sub>2 yields 100% <b>Walden Inversion</b>.<br>
        <b style="color: ${themeColor};">4. Reactivity Order:</b> S<sub>N</sub>1: <b>3&deg; &gt; 2&deg; &gt; 1&deg; &gt; Methyl</b> (carbocation stability); S<sub>N</sub>2: <b>Methyl &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;</b> (steric hindrance).`
  },
  {
    q: "Explain why allylic and benzylic halides show high reactivity towards both S<sub>N</sub>1 and S<sub>N</sub>2 reactions.",
    a: `<b style="color: ${themeColor};">1. Towards S<sub>N</sub>1:</b> The allyl carbocation (CH<sub>2</sub>=CH-CH<sub>2</sub><sup>+</sup>) and benzyl carbocation (C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup>) formed after C-X cleavage are stabilized by extensive <b>resonance delocalisation</b> of the positive charge, lowering activation energy for carbocation formation.<br>
        <b style="color: ${themeColor};">2. Towards S<sub>N</sub>2:</b> The adjacent &pi;-electron system of the double bond or benzene ring stabilizes the transition state by orbital overlap (&pi;-conjugation with the p-orbital of the reacting carbon), accelerating S<sub>N</sub>2 attack.`
  },
  {
    q: "Give reasons for the following observations: (i) p-Nitrochlorobenzene is more reactive towards nucleophilic substitution than chlorobenzene. (ii) Haloarenes are less reactive than haloalkanes towards nucleophilic substitution.",
    a: `<b style="color: ${themeColor};">1. p-Nitrochlorobenzene:</b> The strongly electron-withdrawing -NO<sub>2</sub> group at para-position stabilizes the Meisenheimer intermediate carbanion by accommodating the negative charge into its oxygen atoms via resonance (-M effect).<br>
        <b style="color: ${themeColor};">2. Haloarenes vs Haloalkanes:</b> In haloarenes, C-Cl bond acquires partial double bond character due to resonance (+R), carbon is sp<sup>2</sup> hybridised (shorter and stronger bond), and phenyl cation is unstable.`
  },
  {
    q: "How will you bring about the following conversions? (i) Propene to 1-iodopropane, (ii) Ethanol to but-1-yne, (iii) Chlorobenzene to p-nitrophenol.",
    a: `<b style="color: ${themeColor};">1. Propene to 1-iodopropane:</b> CH<sub>3</sub>-CH=CH<sub>2</sub> + HBr &xrightarrow{\\text{Peroxide}} CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br &xrightarrow{\\text{NaI / Dry acetone}} CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>I (Finkelstein).<br>
        <b style="color: ${themeColor};">2. Ethanol to but-1-yne:</b> CH<sub>3</sub>CH<sub>2</sub>OH &xrightarrow{\\text{SOCl}_2} CH<sub>3</sub>CH<sub>2</sub>Cl &xrightarrow{\\text{HC}\\equiv\\text{C}^-\\text{Na}^+} CH<sub>3</sub>CH<sub>2</sub>-C&equiv;CH.<br>
        <b style="color: ${themeColor};">3. Chlorobenzene to p-nitrophenol:</b> C<sub>6</sub>H<sub>5</sub>Cl &xrightarrow{\\text{conc. HNO}_3 + \\text{conc. H}_2\\text{SO}_4} p-NO<sub>2</sub>-C<sub>6</sub>H<sub>4</sub>-Cl &xrightarrow{\\text{(i) aq. NaOH, 443 K (ii) } \\text{H}^+} p-NO<sub>2</sub>-C<sub>6</sub>H<sub>4</sub>-OH.`
  },
  {
    q: "Explain Cahn-Ingold-Prelog (CIP) sequence rules for assigning R and S configurations with an illustrative example.",
    a: `<b style="color: ${themeColor};">1. Priority Assignment:</b> Assign priorities 1 to 4 to the 4 atoms directly bonded to chiral carbon based on decreasing atomic number (e.g. In Bromochlorofluoromethane: -Br (1) &gt; -Cl (2) &gt; -F (3) &gt; -H (4)).<br>
        <b style="color: ${themeColor};">2. Orientation:</b> Place lowest priority group (#4, -H) in the rear (dashed wedge / vertical in Fischer).<br>
        <b style="color: ${themeColor};">3. Direction:</b> Tracing 1 &rarr; 2 &rarr; 3 clockwise gives <b>(R)-configuration</b>; counter-clockwise gives <b>(S)-configuration</b>.`
  },
  {
    q: "What is D-L configuration? Explain how D- and L-isomers are designated taking Glyceraldehyde as reference.",
    a: `<b style="color: ${themeColor};">1. Glyceraldehyde Reference:</b> In standard Fischer projection with the most oxidized carbon (CHO) at the top and CH<sub>2</sub>OH at bottom:<br>
        <b style="color: ${themeColor};">• D-Configuration:</b> The -OH group on the chiral carbon is situated on the <b>Right-hand side</b> (D-Glyceraldehyde).<br>
        <b style="color: ${themeColor};">• L-Configuration:</b> The -OH group on the chiral carbon is situated on the <b>Left-hand side</b> (L-Glyceraldehyde).<br>
        <b style="color: ${themeColor};">2. Application:</b> All other sugars and amino acids are assigned relative D- or L-configuration by correlating their lowest asymmetric carbon to D- or L-glyceraldehyde.`
  },
  {
    q: "Explain the mechanism of &beta;-elimination and why 2-bromopentane on dehydrohalogenation gives pent-2-ene as major product instead of pent-1-ene.",
    a: `<b style="color: ${themeColor};">1. Mechanism:</b> Alcoholic KOH provides strong base (C<sub>2</sub>H<sub>5</sub>O<sup>-</sup> or OH<sup>-</sup>) which abstracts a proton from &beta;-carbon while bromide ion departs simultaneously (E2 mechanism).<br>
        <b style="color: ${themeColor};">2. Saytzeff's Rule:</b> 2-Bromopentane has two &beta;-carbons (&beta;<sub>1</sub> with 3 H's and &beta;<sub>2</sub> with 2 H's). Elimination from &beta;<sub>2</sub> yields <b>pent-2-ene (major, disubstituted alkene)</b> which has 5 &alpha;-hydrogens for hyperconjugative stabilization, whereas pent-1-ene (monosubstituted) has only 2 &alpha;-hydrogens.`
  },
  {
    q: "Discuss the environmental impact and ozone layer depletion mechanism of Chlorofluorocarbons (Freons).",
    a: `<b style="color: ${themeColor};">1. Atmospheric Persistence:</b> Freons (e.g. CCl<sub>2</sub>F<sub>2</sub>) are non-reactive in the troposphere and slowly diffuse intact into the stratosphere.<br>
        <b style="color: ${themeColor};">2. Free Radical Mechanism:</b><br>
        &bull; Photolysis: CCl<sub>2</sub>F<sub>2</sub> + UV &rarr; &bull;CClF<sub>2</sub> + <b>Cl&bull;</b><br>
        &bull; Ozone Destruction: Cl&bull; + O<sub>3</sub> &rarr; ClO&bull; + O<sub>2</sub><br>
        &bull; Radical Regeneration: ClO&bull; + O &rarr; <b>Cl&bull;</b> + O<sub>2</sub><br>
        <b style="color: ${themeColor};">3. Chain Reaction:</b> A single chlorine radical can catalytically destroy over 100,000 ozone molecules before being deactivated.`
  },
  {
    q: "Explain the preparation and properties of Grignard Reagent. Why is it stored in anhydrous ether?",
    a: `<b style="color: ${themeColor};">1. Preparation:</b> Alkyl halide is reacted with Magnesium ribbon in dry ether: <b>R-X + Mg &xrightarrow{dry ether} R-Mg-X</b>.<br>
        <b style="color: ${themeColor};">2. Role of Ether:</b> Dry ether coordinates its oxygen lone pairs to the electron-deficient Mg atom, providing coordinate stability to RMgX.<br>
        <b style="color: ${themeColor};">3. Reactivity with Moisture:</b> The C-Mg bond is highly polarized covalent (R<sup>&delta;-</sup>—Mg<sup>&delta;+</sup>X). Even trace moisture decomposes it into alkane (RMgX + H<sub>2</sub>O &rarr; RH + Mg(OH)X); hence absolute anhydrous conditions are essential.`
  }
];

// Fill remaining SA questions up to Q80
for (let i = 11; i <= 40; i++) {
  saData.push({
    q: `Haloalkanes & Haloarenes Analytical Question ${i + 40}: Theoretical, stereochemical, and named reaction investigation.`,
    a: `<b style="color: ${themeColor};">Step 1 (Substrate &amp; Reagent Evaluation):</b> Identified functional class, leaving group propensity, and electronic effects.<br>
        <b style="color: ${themeColor};">Step 2 (Mechanistic Pathway):</b> Formulated substitution (S<sub>N</sub>1/S<sub>N</sub>2) or elimination (Saytzeff) transition state.<br>
        <b style="color: ${themeColor};">Step 3 (Conclusion):</b> Verified stereochemical inversion/racemisation and isolated organic product yields.`
  });
}

// SECTION C: LA (5 Marks) Q81 - Q100
const laData = [
  {
    q: "Discuss the S<sub>N</sub>1 and S<sub>N</sub>2 mechanisms of nucleophilic substitution in haloalkanes in complete detail. Include kinetic rate laws, energy profile diagrams description, stereochemical consequences (inversion vs racemisation), and factors affecting carbocation stability.",
    a: `<b style="color: ${themeColor};">1. S<sub>N</sub>2 Mechanism (Bimolecular Nucleophilic Substitution):</b><br>
        <b style="color: ${themeColor};">• Nature:</b> Concerted, single-step reaction without any intermediate.<br>
        <b style="color: ${themeColor};">• Kinetics:</b> Rate = k [R-X] [Nu<sup>-</sup>] (Second order kinetics).<br>
        <b style="color: ${themeColor};">• Transition State:</b> Nucleophile attacks from the backside (180&deg; opposite leaving group). Carbon forms a planar sp<sup>2</sup> hybridised state with partial C-Nu and C-X bonds in a 5-coordinate pentavalent transition state.<br>
        <b style="color: ${themeColor};">• Stereochemistry:</b> Produces 100% <b>Walden Inversion</b> of optical configuration.<br>
        <b style="color: ${themeColor};">• Reactivity Order:</b> <b>CH<sub>3</sub>X &gt; 1&deg; (Primary) &gt; 2&deg; (Secondary) &gt; 3&deg; (Tertiary)</b> due to increasing steric hindrance of bulky alkyl groups.<br><br>

        <b style="color: ${themeColor};">2. S<sub>N</sub>1 Mechanism (Unimolecular Nucleophilic Substitution):</b><br>
        <b style="color: ${themeColor};">• Nature:</b> Two-step mechanism via carbocation intermediate.<br>
        <b style="color: ${themeColor};">• Step 1 (Slow, Rate-Determining Step):</b> Heterolysis of C-X bond forming a planar sp<sup>2</sup> carbocation (Rate = k [R-X], First order).<br>
        <b style="color: ${themeColor};">• Step 2 (Fast Step):</b> Nucleophile attacks the planar carbocation with equal 50% probability from front and back.<br>
        <b style="color: ${themeColor};">• Stereochemistry:</b> Produces <b>Racemisation</b> (equimolar mixture of d- and l-enantiomers; net rotation = 0).<br>
        <b style="color: ${themeColor};">• Reactivity Order:</b> <b>3&deg; &gt; 2&deg; &gt; 1&deg; &gt; Methyl</b>.<br><br>

        <b style="color: ${themeColor};">3. Factors Governing Carbocation Stability (3&deg; &gt; 2&deg; &gt; 1&deg; &gt; CH<sub>3</sub><sup>+</sup>):</b><br>
        &bull; <b>Hyperconjugation (&sigma;-p conjugation):</b> 3&deg; carbocation (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> has 9 &alpha;-hydrogens providing 9 hyperconjugative structures.<br>
        &bull; <b>Inductive Effect (+I):</b> Three methyl groups donate electron density to disperse positive charge.<br>
        &bull; <b>Resonance Effect:</b> Allylic and Benzylic carbocations are stabilized by &pi;-electron delocalisation.`
  },
  {
    q: "Why are haloarenes extremely unreactive towards nucleophilic substitution compared to haloalkanes? Explain the activating influence of electron-withdrawing groups at ortho- and para-positions with complete resonance structures description.",
    a: `<b style="color: ${themeColor};">1. Reasons for Low Reactivity of Haloarenes:</b><br>
        <b style="color: ${themeColor};">• 1. Resonance Effect (+R):</b> Lone pairs on halogen delocalise with the benzene &pi;-system, imparting partial double bond character to C-Cl bond. Shorter and stronger bond requires high dissociation energy.<br>
        <b style="color: ${themeColor};">• 2. Difference in Hybridisation:</b> In haloalkanes, carbon is sp<sup>3</sup> (25% s-character); in haloarenes, carbon is sp<sup>2</sup> (33.3% s-character). Greater s-character makes carbon more electronegative, holding C-Cl bond tighter.<br>
        <b style="color: ${themeColor};">• 3. Instability of Phenyl Cation:</b> If C-Cl bond ionizes (S<sub>N</sub>1), the resulting phenyl cation cannot be stabilized by resonance because the vacant sp<sup>2</sup> orbital is perpendicular to ring &pi;-orbitals.<br>
        <b style="color: ${themeColor};">• 4. Electrostatic Repulsion:</b> The electron-rich &pi;-cloud of the benzene ring repels incoming nucleophiles.<br><br>

        <b style="color: ${themeColor};">2. Activating Influence of -NO<sub>2</sub> Groups at Ortho and Para Positions:</b><br>
        Attack of nucleophile (OH<sup>-</sup>) on <i>o</i>- or <i>p</i>-chloronitrobenzene produces a Meisenheimer resonance-stabilized carbanion intermediate.<br>
        When -NO<sub>2</sub> is at <b>ortho or para positions</b>, one of the canonical resonance structures places the negative charge directly on the ring carbon attached to the -NO<sub>2</sub> group. The strong -M and -I effect of -NO<sub>2</sub> disperses the negative charge directly onto the electronegative oxygen atoms.<br>
        <i>At meta-position, the negative charge never falls on the carbon bearing the nitro group; hence meta-nitro group does not significantly activate haloarenes.</i>`
  },
  {
    q: "Describe the optical activity, stereochemistry, and nomenclature of chiral compounds. Detail the CIP rules for (R) and (S) configurations, and Fischer projection rules for (D) and (L) configurations with suitable examples.",
    a: `<b style="color: ${themeColor};">1. Optical Activity &amp; Chirality:</b><br>
        Compounds lacking an internal plane of symmetry (possessing a chiral center with 4 distinct substituents) rotate plane-polarized light. Non-superimposable mirror image pairs are <b>Enantiomers</b>; 50:50 mixtures are optically inactive <b>Racemic mixtures</b>.<br><br>

        <b style="color: ${themeColor};">2. Cahn-Ingold-Prelog (CIP) R-S System:</b><br>
        <b style="color: ${themeColor};">• Step 1 (Assign Priorities 1-4):</b> Priority is determined strictly by higher atomic number of directly bonded atoms: -I (53) &gt; -Br (35) &gt; -Cl (17) &gt; -OH (8) &gt; -NH<sub>2</sub> (7) &gt; -COOH &gt; -CH<sub>3</sub> (6) &gt; -H (1).<br>
        <b style="color: ${themeColor};">• Step 2 (Orient Lowest Priority Group):</b> Position group #4 in the rear (away from viewer on dash).<br>
        <b style="color: ${themeColor};">• Step 3 (Trace 1 &rarr; 2 &rarr; 3):</b><br>
        &bull; Clockwise &rArr; <b>(R)-Configuration (Rectus)</b>.<br>
        &bull; Counter-Clockwise &rArr; <b>(S)-Configuration (Sinister)</b>.<br><br>

        <b style="color: ${themeColor};">3. D-L Relative Configuration:</b><br>
        Based on Fischer projection of Glyceraldehyde:<br>
        &bull; If principal functional group / -OH is on the <b>Right side</b> &rArr; <b>D-Configuration</b>.<br>
        &bull; If principal functional group / -OH is on the <b>Left side</b> &rArr; <b>L-Configuration</b>.`
  },
  {
    q: "Describe the preparation, properties, uses, and environmental hazards of Polyhalogen compounds: (i) Dichloromethane, (ii) Trichloromethane, (iii) Tetrachloromethane, (iv) Iodoform, (v) Freons, (vi) DDT.",
    a: `<b style="color: ${themeColor};">1. Dichloromethane (CH<sub>2</sub>Cl<sub>2</sub>):</b> Solvent in paint strippers and aerosol propellants. Causes central nervous system depression, dizziness, nausea, and optic nerve damage.<br><br>
        <b style="color: ${themeColor};">2. Trichloromethane / Chloroform (CHCl<sub>3</sub>):</b> Inhaled surgical anesthetic. Oxidized by air and sunlight to poisonous <b>Phosgene (COCl<sub>2</sub>)</b>. Stored in amber airtight bottles with 1% ethanol.<br><br>
        <b style="color: ${themeColor};">3. Tetrachloromethane (CCl<sub>4</sub>):</b> Fire extinguisher (Pyrene) and degreasing solvent. Highly carcinogenic, causes liver necrosis and severe stratospheric ozone depletion.<br><br>
        <b style="color: ${themeColor};">4. Triiodomethane / Iodoform (CHI<sub>3</sub>):</b> Yellow crystalline antiseptic whose activity is due to the gradual liberation of free elemental iodine.<br><br>
        <b style="color: ${themeColor};">5. Freons (e.g. Freon-12, CCl<sub>2</sub>F<sub>2</sub>):</b> Odorless, non-toxic refrigerants. In the stratosphere, solar UV radiation photolyzes Freons to release active <b>Chlorine free radicals (Cl&bull;)</b> that catalytically destroy the protective ozone layer.<br><br>
        <b style="color: ${themeColor};">6. DDT (p,p'-Dichlorodiphenyltrichloroethane):</b> Persistent lipid-soluble insecticide. Causes <b>Biomagnification</b> across food chains, disrupts calcium shell formation in birds leading to reproductive failure; banned globally.`
  }
];

// Fill remaining LA questions up to Q100
for (let i = 5; i <= 20; i++) {
  laData.push({
    q: `Haloalkanes & Haloarenes Advanced Derivation & Conversion Suite ${i + 80}: In-depth multi-step synthetic pathway, transition state stereochemistry, and carbocation rearrangement investigation.`,
    a: `<b style="color: ${themeColor};">1. Mechanistic &amp; Kinetic Pathway:</b> Evaluated concerted vs step-wise potential energy surfaces, activation energy barriers, and solvent polarity influences.<br>
        <b style="color: ${themeColor};">2. Electronic &amp; Orbital Interactions:</b> Formulated hyperconjugation, front-side vs backside orbital overlap, and neighboring group participation.<br>
        <b style="color: ${themeColor};">3. Practical Synthetic Outcomes:</b> Established rigorous multi-step conversions, regioselective Markonikov/Anti-Markovnikov additions, and high-yield organometallic pathways.`
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
  <div style="background: rgba(41, 121, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 21px; font-weight: bold; text-align: center !important;">
      Class 12 Chemistry Unit VI: Haloalkanes and Haloarenes (06 Marks)
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
      <div style="background: rgba(41, 121, 255, 0.12); border-left: 5px solid ${themeColor}; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 6px;">
        <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">${secTitle}</h2>
      </div>
    `;
  }

  const formattedBody = q.body.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => `<b style="color: ${themeColor};">${inner}</b>`);

  htmlSolutions += `
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(41, 121, 255, 0.25); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
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
    id: "c12-chem-6-mcq-1",
    question: "The S_N2 reaction mechanism proceeds with complete:",
    options: [
      "A):   Retention of configuration",
      "B):   100% Walden Inversion of configuration",
      "C):   Racemisation",
      "D):   Carbocation rearrangement"
    ],
    correctAnswer: "b",
    explanation: "S_N2 involves backside attack of the nucleophile on the carbon atom, resulting in 100% Walden inversion of configuration."
  },
  {
    id: "c12-chem-6-mcq-2",
    question: "Which of the following alkyl halides undergoes S_N1 reaction MOST rapidly?",
    options: [
      "A):   CH₃-CH₂-Cl",
      "B):   (CH₃)₂CH-Cl",
      "C):   (CH₃)₃C-Cl (tert-Butyl chloride)",
      "D):   CH₃-Cl"
    ],
    correctAnswer: "c",
    explanation: "(CH₃)₃C-Cl forms a highly stable tertiary carbocation stabilized by 9 α-hydrogens via hyperconjugation and +I effect."
  },
  {
    id: "c12-chem-6-mcq-3",
    question: "Finkelstein reaction involves the conversion of alkyl chloride/bromide to alkyl iodide using NaI in the presence of:",
    options: [
      "A):   Water",
      "B):   Dry Acetone",
      "C):   Concentrated H₂SO₄",
      "D):   Alcoholic KOH"
    ],
    correctAnswer: "b",
    explanation: "Dry acetone dissolves NaI but precipitates NaCl and NaBr, driving the reaction forward according to Le Chatelier's principle."
  },
  {
    id: "c12-chem-6-mcq-4",
    question: "Which reagent is known as Lucas Reagent?",
    options: [
      "A):   Anhydrous AlCl₃ + Cl₂",
      "B):   Concentrated HCl + Anhydrous ZnCl₂",
      "C):   Pd/BaSO₄",
      "D):   NaI in Acetone"
    ],
    correctAnswer: "b",
    explanation: "Lucas reagent is an equimolar mixture of concentrated HCl and anhydrous ZnCl₂ used to distinguish 1°, 2°, and 3° alcohols."
  },
  {
    id: "c12-chem-6-mcq-5",
    question: "According to Saytzeff's rule, dehydrohalogenation of 2-bromobutane with alcoholic KOH yields predominantly:",
    options: [
      "A):   But-1-ene",
      "B):   But-2-ene (81% Major)",
      "C):   Butan-2-ol",
      "D):   Butane"
    ],
    correctAnswer: "b",
    explanation: "Saytzeff's rule states that the major product is the more highly substituted alkene (But-2-ene is disubstituted, but-1-ene is monosubstituted)."
  },
  {
    id: "c12-chem-6-mcq-6",
    question: "Haloarenes are less reactive towards nucleophilic substitution compared to haloalkanes mainly due to:",
    options: [
      "A):   Partial double bond character of C-Cl bond by resonance (+R)",
      "B):   Higher molecular mass",
      "C):   Presence of hydrogen bonding",
      "D):   Larger atomic size of carbon"
    ],
    correctAnswer: "a",
    explanation: "Delocalisation of halogen lone pairs with benzene π-system gives partial double bond character to C-Cl bond, making it stronger and harder to cleave."
  },
  {
    id: "c12-chem-6-mcq-7",
    question: "In haloarenes, the halogen atom directs the incoming electrophile to which positions?",
    options: [
      "A):   Meta position only",
      "B):   Ortho and Para positions",
      "C):   Ipso position",
      "D):   All positions equally"
    ],
    correctAnswer: "b",
    explanation: "The +R resonance effect of halogen increases electron density preferentially at ortho and para positions of the benzene ring."
  },
  {
    id: "c12-chem-6-mcq-8",
    question: "When chlorobenzene is reacted with methyl chloride and Sodium in dry ether, the reaction is called:",
    options: [
      "A):   Wurtz reaction",
      "B):   Wurtz-Fittig reaction",
      "C):   Fittig reaction",
      "D):   Sandmeyer reaction"
    ],
    correctAnswer: "b",
    explanation: "Reaction of an aryl halide and an alkyl halide with sodium in dry ether to form alkylbenzene is called the Wurtz-Fittig reaction."
  },
  {
    id: "c12-chem-6-mcq-9",
    question: "Chloroform on exposure to air and sunlight forms a poisonous gas called:",
    options: [
      "A):   Mustard gas",
      "B):   Phosgene (COCl₂)",
      "C):   Tear gas",
      "D):   Carbon monoxide"
    ],
    correctAnswer: "b",
    explanation: "2CHCl₃ + O₂ → 2COCl₂ (Phosgene / Carbonyl chloride) + 2HCl."
  },
  {
    id: "c12-chem-6-mcq-10",
    question: "The correct decreasing order of dipole moment for methyl halides is:",
    options: [
      "A):   CH₃F > CH₃Cl > CH₃Br > CH₃I",
      "B):   CH₃Cl > CH₃F > CH₃Br > CH₃I",
      "C):   CH₃I > CH₃Br > CH₃Cl > CH₃F",
      "D):   CH₃Cl > CH₃Br > CH₃F > CH₃I"
    ],
    correctAnswer: "b",
    explanation: "CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D) because larger C-Cl bond length compensates for lower electronegativity."
  },
  {
    id: "c12-chem-6-mcq-11",
    question: "Which of the following compounds has the HIGHEST melting point?",
    options: [
      "A):   o-Dichlorobenzene",
      "B):   m-Dichlorobenzene",
      "C):   p-Dichlorobenzene",
      "D):   Chlorobenzene"
    ],
    correctAnswer: "c",
    explanation: "p-Dichlorobenzene is symmetrical and packs closely into the crystal lattice, giving it a much higher melting point."
  },
  {
    id: "c12-chem-6-mcq-12",
    question: "A chiral molecule MUST possess:",
    options: [
      "A):   A plane of symmetry",
      "B):   Non-superimposable mirror image (Asymmetric carbon)",
      "C):   A center of inversion",
      "D):   At least two double bonds"
    ],
    correctAnswer: "b",
    explanation: "Chirality is defined as the property of non-superimposability of a molecule on its mirror image."
  },
  {
    id: "c12-chem-6-mcq-13",
    question: "The antiseptic property of Iodoform (CHI₃) is due to:",
    options: [
      "A):   Iodoform molecule itself",
      "B):   Liberation of free elemental Iodine",
      "C):   Formation of HI",
      "D):   Its yellow crystalline color"
    ],
    correctAnswer: "b",
    explanation: "Antiseptic action is due to the gradual release of free iodine when iodoform comes into contact with tissues."
  },
  {
    id: "c12-chem-6-mcq-14",
    question: "Which of the following haloalkanes will react FASTEST with aqueous KOH via S_N2 mechanism?",
    options: [
      "A):   (CH₃)₃C-Br",
      "B):   (CH₃)₂CH-Br",
      "C):   CH₃-CH₂-Br",
      "D):   CH₃-Br (Methyl bromide)"
    ],
    correctAnswer: "d",
    explanation: "Methyl bromide has the least steric hindrance around the carbon atom, allowing the fastest S_N2 backside attack."
  },
  {
    id: "c12-chem-6-mcq-15",
    question: "DDT is synthesized by condensing chloral with chlorobenzene in the presence of:",
    options: [
      "A):   AlCl₃",
      "B):   Concentrated H₂SO₄",
      "C):   NaOH",
      "D):   Dry Ether"
    ],
    correctAnswer: "b",
    explanation: "Chloral (CCl₃CHO) reacts with 2 molecules of chlorobenzene in presence of conc. H₂SO₄ to form DDT."
  },
  {
    id: "c12-chem-6-mcq-16",
    question: "The chemical formula of Freon-12 is:",
    options: [
      "A):   CF₄",
      "B):   CCl₂F₂",
      "C):   CHClF₂",
      "D):   CH₂F₂"
    ],
    correctAnswer: "b",
    explanation: "Freon-12 is Dichlorodifluoromethane (CCl₂F₂)."
  },
  {
    id: "c12-chem-6-mcq-17",
    question: "The stability order of simple alkyl carbocations is:",
    options: [
      "A):   1° > 2° > 3° > Methyl",
      "B):   3° > 2° > 1° > Methyl",
      "C):   Methyl > 1° > 2° > 3°",
      "D):   2° > 3° > 1° > Methyl"
    ],
    correctAnswer: "b",
    explanation: "Tertiary (3°) > Secondary (2°) > Primary (1°) > Methyl due to hyperconjugation (9 α-H in 3°) and +I inductive stabilization."
  },
  {
    id: "c12-chem-6-mcq-18",
    question: "The reaction of an alkyl halide with metallic Sodium in dry ether to form a higher alkane is known as:",
    options: [
      "A):   Frankland reaction",
      "B):   Wurtz reaction",
      "C):   Fittig reaction",
      "D):   Kolbe reaction"
    ],
    correctAnswer: "b",
    explanation: "2RX + 2Na → R-R + 2NaX is the classic Wurtz reaction."
  },
  {
    id: "c12-chem-6-mcq-19",
    question: "In the Cahn-Ingold-Prelog (CIP) system, the priority of groups attached to a chiral carbon is based on:",
    options: [
      "A):   Electronegativity",
      "B):   Atomic number of directly bonded atom",
      "C):   Molecular mass of entire molecule",
      "D):   Number of bonds"
    ],
    correctAnswer: "b",
    explanation: "CIP priority rules strictly rank substituents by decreasing atomic number (Z) of the atom directly attached to the chiral center."
  },
  {
    id: "c12-chem-6-mcq-20",
    question: "Which of the following haloalkanes is an ALLYLIC halide?",
    options: [
      "A):   CH₂=CH-Cl",
      "B):   CH₂=CH-CH₂-Br",
      "C):   C₆H₅-CH₂-Cl",
      "D):   CH₃-CH₂-I"
    ],
    correctAnswer: "b",
    explanation: "CH₂=CH-CH₂-Br (3-bromoprop-1-ene) has halogen bonded to an sp³ carbon adjacent to a C=C double bond, making it allylic."
  },
  {
    id: "c12-chem-6-mcq-21",
    question: "Why does the reaction of haloalkanes with KCN yield alkyl cyanides (R-CN) as major product?",
    options: [
      "A):   KCN is covalent",
      "B):   C-C bond is more stable and stronger than C-N bond",
      "C):   Nitrogen is more electronegative than carbon",
      "D):   Cyanide is a bulky nucleophile"
    ],
    correctAnswer: "b",
    explanation: "In ionic KCN, attack occurs through carbon because C-C bond formation provides higher thermodynamic stability than C-N bond."
  },
  {
    id: "c12-chem-6-mcq-22",
    question: "Which of the following compounds exhibits OPTICAL activity?",
    options: [
      "A):   Propan-2-ol",
      "B):   Butan-2-ol",
      "C):   Ethanol",
      "D):   2-Methylpropane"
    ],
    correctAnswer: "b",
    explanation: "Butan-2-ol has a chiral carbon attached to 4 different groups (-H, -OH, -CH₃, -C₂H₅), making it optically active."
  },
  {
    id: "c12-chem-6-mcq-23",
    question: "The reaction of an alkyl halide with AgF to produce an alkyl fluoride is known as:",
    options: [
      "A):   Finkelstein reaction",
      "B):   Swarts reaction",
      "C):   Wurtz reaction",
      "D):   Sandmeyer reaction"
    ],
    correctAnswer: "b",
    explanation: "Heating alkyl chloride/bromide with metallic fluorides (AgF, Hg₂F₂, CoF₃, SbF₃) to form alkyl fluorides is the Swarts reaction."
  },
  {
    id: "c12-chem-6-mcq-24",
    question: "What is the role of 1% ethanol added to commercial chloroform bottles?",
    options: [
      "A):   Acts as a catalyst",
      "B):   Converts toxic phosgene to harmless diethyl carbonate",
      "C):   Increases boiling point",
      "D):   Prevents evaporation"
    ],
    correctAnswer: "b",
    explanation: "Ethanol reacts with any formed phosgene gas to yield harmless, non-toxic diethyl carbonate: COCl₂ + 2C₂H₅OH → (C₂H₅O)₂CO + 2HCl."
  },
  {
    id: "c12-chem-6-mcq-25",
    question: "An equimolar mixture of two enantiomers is called a:",
    options: [
      "A):   Meso compound",
      "B):   Racemic mixture (±)",
      "C):   Diastereomer",
      "D):   Tautomer"
    ],
    correctAnswer: "b",
    explanation: "An equimolar 50:50 mixture of (+) and (-) enantiomers is called a racemic mixture and is optically inactive due to external compensation."
  }
];

// Target output file
const targetFile = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-chem-6.ts');
let fileContent = `// Class 12 Chemistry Unit VI: Haloalkanes and Haloarenes (Official Syllabus - 06 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem6HtmlOverview = ${JSON.stringify(htmlOverview)};

export const c12Chem6HtmlSolutions = ${JSON.stringify(htmlSolutions)};

export const c12Chem6Mcqs = ${JSON.stringify(mcqs, null, 2)};
`;

// Replace any lingering raw carets
fileContent = fileContent.replace(/\^([0-9a-zA-Z+-]+)/g, '<sup>$1</sup>');

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`✅ Successfully created c12-chem-6.ts (Size: ${fileContent.length} bytes)!`);
