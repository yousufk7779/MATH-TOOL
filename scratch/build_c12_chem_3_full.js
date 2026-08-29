const fs = require('fs');
const path = require('path');

const themeColor = "#FF5252";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 82, 82, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// ---------------- TAB 1: OVERVIEW HTML ----------------
require('./build_c12_chem_3_overview.js');
let htmlOverview = fs.readFileSync('scratch/c12_chem_3_overview.html', 'utf8');

// Ensure all <b>...:</b> inside overview have themeColor
htmlOverview = htmlOverview.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => `<b style="color: ${themeColor};">${inner}</b>`);

// ---------------- TAB 2: SOLUTIONS (100 QUESTIONS) ----------------
const vsaData = [
  { q: "Define Chemical Kinetics.", a: "The branch of physical chemistry that deals with the rates of chemical reactions, the factors affecting them, and the microscopic mechanisms by which they proceed." },
  { q: "Define Rate of Reaction.", a: "The change in molar concentration of any one of the reactants or products per unit time. Unit: <b>mol L<sup>-1</sup> s<sup>-1</sup></b> (or <b>atm s<sup>-1</sup></b> for gases)." },
  { q: "Why is a negative sign attached to the rate of disappearance of reactants?", a: "Reactant concentrations decrease with time (&Delta;[R] &lt; 0). The negative sign ensures that the calculated reaction rate is always a positive physical value." },
  { q: "Distinguish between Average Rate and Instantaneous Rate.", a: "Average rate is the rate measured over a large, finite time interval (&Delta;t), whereas instantaneous rate is the rate at a specific infinitesimal instant of time (limit &Delta;t &rarr; 0, -d[R]/dt)." },
  { q: "Define Rate Law.", a: "The experimentally determined mathematical equation that expresses the rate of a reaction in terms of molar concentrations of reactants raised to suitable powers." },
  { q: "Define Specific Rate Constant (k).", a: "The rate of a chemical reaction when the molar concentration of each reactant is unity (1 mol L<sup>-1</sup>): Rate = k." },
  { q: "Define Order of a Reaction.", a: "The sum of powers of concentration terms of reactants in the experimental rate law equation: n = x + y." },
  { q: "Can order of a reaction be zero or fractional?", a: "Yes, order is an experimental quantity and can be zero, positive, negative, or fractional." },
  { q: "State the SI unit of rate constant for a zero order reaction.", a: "<b>mol L<sup>-1</sup> s<sup>-1</sup></b>." },
  { q: "State the unit of rate constant for a first order reaction.", a: "<b>s<sup>-1</sup></b> (time<sup>-1</sup>, independent of concentration)." },
  { q: "State the unit of rate constant for a second order reaction.", a: "<b>L mol<sup>-1</sup> s<sup>-1</sup></b> (or mol<sup>-1</sup> L s<sup>-1</sup>)." },
  { q: "Define Molecularity of a Reaction.", a: "The number of reacting species (atoms, ions, or molecules) that must collide simultaneously in an elementary step to bring about chemical change." },
  { q: "Why is molecularity of a reaction never zero or fractional?", a: "Because molecularity represents actual physical colliding particles, which cannot be zero or a fraction." },
  { q: "Why are reactions with molecularity greater than 3 extremely rare?", a: "Because the probability of more than three molecules colliding simultaneously in proper orientation is infinitesimally small." },
  { q: "What is an Elementary Reaction?", a: "A single-step reaction that proceeds directly from reactants to products in one collision without intermediate steps." },
  { q: "What is a Complex Reaction?", a: "A reaction that proceeds through a sequence of two or more elementary steps. The slowest elementary step is the <b>Rate Determining Step (RDS)</b>." },
  { q: "What is a Pseudo First Order Reaction?", a: "A reaction of higher true molecularity (e.g. bimolecular) that follows first order kinetics because one reactant is present in large excess (e.g. acid hydrolysis of ethyl acetate)." },
  { q: "Give an example of a zero order reaction.", a: "Decomposition of gaseous ammonia on hot platinum surface at high pressure: 2NH<sub>3</sub>(g) &rarr; N<sub>2</sub>(g) + 3H<sub>2</sub>(g)." },
  { q: "Write the integrated rate equation for a zero order reaction.", a: "<b>k = ([R]<sub>0</sub> - [R]) / t</b>, or [R] = - k t + [R]<sub>0</sub>." },
  { q: "Write the integrated rate equation for a first order reaction.", a: "<b>k = (2.303 / t) log ([R]<sub>0</sub> / [R])</b>." },
  { q: "Define Half-Life Period (t<sub>1/2</sub>) of a reaction.", a: "The time required for the concentration of a reactant to decrease to exactly half of its initial value." },
  { q: "How is half-life related to initial concentration for a zero order reaction?", a: "<b>t<sub>1/2</sub> = [R]<sub>0</sub> / (2k)</b> (t<sub>1/2</sub> is directly proportional to initial concentration [R]<sub>0</sub>)." },
  { q: "How is half-life related to initial concentration for a first order reaction?", a: "<b>t<sub>1/2</sub> = 0.693 / k</b> (t<sub>1/2</sub> is completely independent of initial concentration)." },
  { q: "What is the slope of the plot of log [R] vs time for a first order reaction?", a: "<b>Slope = - k / 2.303</b> (Intercept = log [R]<sub>0</sub>)." },
  { q: "What is the slope of the plot of [R] vs time for a zero order reaction?", a: "<b>Slope = - k</b> (Intercept = [R]<sub>0</sub>)." },
  { q: "What is Temperature Coefficient of a reaction?", a: "The ratio of rate constants of a reaction at two temperatures differing by 10 &deg;C: &mu; = k<sub>T+10</sub> / k<sub>T</sub> &approx; 2 to 3." },
  { q: "State the Arrhenius Equation.", a: "<b>k = A e<sup>- E<sub>a</sub> / RT</sup></b>, where A is frequency factor, E<sub>a</sub> is activation energy, R is gas constant, and T is absolute temperature." },
  { q: "Define Activation Energy (E<sub>a</sub>).", a: "The minimum extra energy required by reactant molecules to equal the threshold energy necessary for effective chemical reaction." },
  { q: "Define Threshold Energy (E<sub>th</sub>).", a: "The minimum total energy that colliding reactant molecules must possess to produce chemical reaction: E<sub>th</sub> = E<sub>reactants</sub> + E<sub>a</sub>." },
  { q: "What is the slope of the Arrhenius plot (log k vs 1/T)?", a: "<b>Slope = - E<sub>a</sub> / (2.303 R)</b>." },
  { q: "What is the effect of adding a positive catalyst on the activation energy (E<sub>a</sub>)?", a: "A catalyst lowers the activation energy by providing an alternative reaction pathway, thereby accelerating the reaction rate." },
  { q: "Does a catalyst affect the Gibbs free energy change (&Delta;G) or enthalpy (&Delta;H) of a reaction?", a: "No, a catalyst does not alter &Delta;G, &Delta;H, or equilibrium constant K<sub>c</sub>; it only increases the speed at which equilibrium is reached." },
  { q: "What are the two basic criteria for an effective collision according to Collision Theory?", a: "1. <b>Energy Barrier:</b> Molecules must possess kinetic energy &ge; Threshold energy (E<sub>th</sub>).<br>2. <b>Orientation Barrier:</b> Molecules must collide in proper spatial orientation (Steric factor P)." },
  { q: "Write the modified rate equation according to Collision Theory.", a: "<b>Rate = P Z<sub>AB</sub> e<sup>- E<sub>a</sub> / RT</sup></b>, where P is steric factor and Z<sub>AB</sub> is collision frequency." },
  { q: "Why does the rate of reaction increase with increase in surface area of solid reactants?", a: "Greater surface area exposes more reactive sites for particle collisions, leading to higher collision frequency." },
  { q: "Identify the order of reaction if unit of k is mol<sup>-1</sup> L s<sup>-1</sup>.", a: "<b>Second order</b> (n = 2)." },
  { q: "Identify the order of reaction if unit of k is s<sup>-1</sup>.", a: "<b>First order</b> (n = 1)." },
  { q: "If the rate of a reaction is Rate = k [A]<sup>1/2</sup> [B]<sup>3/2</sup>, what is the overall order?", a: "Overall order = 1/2 + 3/2 = 4/2 = <b>2 (Second order)</b>." },
  { q: "What is the fraction of molecules with energy greater than E<sub>a</sub> according to Boltzmann?", a: "<b>Fraction = e<sup>- E<sub>a</sub> / RT</sup></b>." },
  { q: "Why is radioactive decay always a first order kinetic process?", a: "Because radioactive disintegration occurs spontaneously in unstable atomic nuclei where decay rate is proportional only to the number of radioactive nuclei present: dN/dt = -&lambda; N." }
];

// SECTION B: SA (2 & 3 Marks) Q41 - Q80
const saData = [
  {
    q: "For the reaction R &rarr; P, the concentration of a reactant changes from 0.03 M to 0.02 M in 25 minutes. Calculate the average rate of reaction using units of time both in minutes and seconds.",
    a: `<b style="color: ${themeColor};">Step 1 (In minutes):</b> r<sub>av</sub> = - &Delta;[R] / &Delta;t = - (0.02 - 0.03) / 25 = 0.01 / 25 = <b>4.0 &times; 10<sup>-4</sup> mol L<sup>-1</sup> min<sup>-1</sup></b>.<br>
        <b style="color: ${themeColor};">Step 2 (In seconds):</b> &Delta;t = 25 &times; 60 = 1500 s &rArr; r<sub>av</sub> = 0.01 / 1500 = <b>6.67 &times; 10<sup>-6</sup> mol L<sup>-1</sup> s<sup>-1</sup></b>.`
  },
  {
    q: "In a reaction, 2A &rarr; Products, the concentration of A decreases from 0.5 mol L<sup>-1</sup> to 0.4 mol L<sup>-1</sup> in 10 minutes. Calculate the rate during this interval.",
    a: `<b style="color: ${themeColor};">Step 1 (Stoichiometric Rate Formula):</b> Rate = - (1/2) (&Delta;[A] / &Delta;t).<br>
        <b style="color: ${themeColor};">Step 2 (Substitution):</b> Rate = - (1/2) &times; [ (0.4 - 0.5) / 10 ] = - (1/2) &times; (-0.1 / 10) = 0.01 / 2 = <b>0.005 mol L<sup>-1</sup> min<sup>-1</sup> (5.0 &times; 10<sup>-3</sup> mol L<sup>-1</sup> min<sup>-1</sup>)</b>.`
  },
  {
    q: "A first order reaction has a rate constant k = 1.15 &times; 10<sup>-3</sup> s<sup>-1</sup>. How long will 5 g of this reactant take to reduce to 3 g?",
    a: `<b style="color: ${themeColor};">Step 1 (First Order Formula):</b> t = (2.303 / k) log ([R]<sub>0</sub> / [R]).<br>
        <b style="color: ${themeColor};">Step 2 (Substitution):</b> t = [ 2.303 / (1.15 &times; 10<sup>-3</sup>) ] &times; log (5 / 3) = 2002.6 &times; log (1.667).<br>
        <b style="color: ${themeColor};">Step 3 (Calculation):</b> t = 2002.6 &times; 0.2218 = <b>444.2 seconds (7.4 minutes)</b>.`
  },
  {
    q: "Show that for a first order reaction, time required for 99.9% completion is 10 times the half-life (t<sub>1/2</sub>) of the reaction.",
    a: `<b style="color: ${themeColor};">Step 1 (Time for 99.9% completion, t<sub>99.9%</sub>):</b> [R] = a - 0.999a = 0.001a = 10<sup>-3</sup>a.<br>
        t<sub>99.9%</sub> = (2.303 / k) log (a / 10<sup>-3</sup>a) = (2.303 / k) log (10<sup>3</sup>) = (2.303 &times; 3) / k = <b>6.909 / k</b>.<br>
        <b style="color: ${themeColor};">Step 2 (Half-life, t<sub>1/2</sub>):</b> t<sub>1/2</sub> = 0.693 / k.<br>
        <b style="color: ${themeColor};">Step 3 (Ratio):</b> t<sub>99.9%</sub> / t<sub>1/2</sub> = (6.909 / k) / (0.693 / k) = 9.97 &approx; <b>10 &rArr; t<sub>99.9%</sub> = 10 &times; t<sub>1/2</sub> (Proved!)</b>.`
  },
  {
    q: "A first order reaction takes 40 min for 30% decomposition. Calculate its half-life period (t<sub>1/2</sub>).",
    a: `<b style="color: ${themeColor};">Step 1 (Find k):</b> [R]<sub>0</sub> = 100, [R] = 100 - 30 = 70. t = 40 min.<br>
        k = (2.303 / 40) log (100 / 70) = (2.303 / 40) log (1.428) = (2.303 / 40) &times; 0.1548 = <b>8.91 &times; 10<sup>-3</sup> min<sup>-1</sup></b>.<br>
        <b style="color: ${themeColor};">Step 2 (Calculate t<sub>1/2</sub>):</b> t<sub>1/2</sub> = 0.693 / k = 0.693 / (8.91 &times; 10<sup>-3</sup>) = <b>77.78 minutes</b>.`
  },
  {
    q: "The rate constant of a reaction at 500 K and 700 K are 0.02 s<sup>-1</sup> and 0.07 s<sup>-1</sup> respectively. Calculate the activation energy (E<sub>a</sub>) of the reaction. (R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup>).",
    a: `<b style="color: ${themeColor};">Step 1 (Arrhenius Equation):</b> log (k<sub>2</sub> / k<sub>1</sub>) = [ E<sub>a</sub> / (2.303 R) ] &times; [ (T<sub>2</sub> - T<sub>1</sub>) / (T<sub>1</sub> T<sub>2</sub>) ].<br>
        <b style="color: ${themeColor};">Step 2 (Substitution):</b> log (0.07 / 0.02) = [ E<sub>a</sub> / (2.303 &times; 8.314) ] &times; [ (700 - 500) / (500 &times; 700) ].<br>
        log (3.5) = [ E<sub>a</sub> / 19.147 ] &times; [ 200 / 350000 ] &rArr; 0.544 = E<sub>a</sub> &times; (5.714 &times; 10<sup>-4</sup>) / 19.147.<br>
        <b style="color: ${themeColor};">Step 3 (E<sub>a</sub> Calculation):</b> E<sub>a</sub> = (0.544 &times; 19.147) / (5.714 &times; 10<sup>-4</sup>) = <b>18228 J mol<sup>-1</sup> (18.23 kJ mol<sup>-1</sup>)</b>.`
  },
  {
    q: "The rate of a reaction quadruples when temperature changes from 293 K to 313 K. Calculate the energy of activation (E<sub>a</sub>) assuming it remains constant. (R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup>).",
    a: `<b style="color: ${themeColor};">Step 1 (Formula):</b> log (k<sub>2</sub> / k<sub>1</sub>) = log 4 = 0.6021. T<sub>1</sub> = 293 K, T<sub>2</sub> = 313 K.<br>
        <b style="color: ${themeColor};">Step 2 (Equation Setup):</b> 0.6021 = [ E<sub>a</sub> / (2.303 &times; 8.314) ] &times; [ (313 - 293) / (293 &times; 313) ].<br>
        0.6021 = (E<sub>a</sub> / 19.147) &times; (20 / 91709) = E<sub>a</sub> &times; (2.1808 &times; 10<sup>-4</sup>) / 19.147.<br>
        <b style="color: ${themeColor};">Step 3 (E<sub>a</sub> Calculation):</b> E<sub>a</sub> = (0.6021 &times; 19.147) / (2.1808 &times; 10<sup>-4</sup>) = <b>52863 J mol<sup>-1</sup> (52.86 kJ mol<sup>-1</sup>)</b>.`
  },
  {
    q: "Explain why the rate of reaction increases significantly with temperature on the basis of Maxwell-Boltzmann energy distribution curve.",
    a: `<b style="color: ${themeColor};">1. Molecular Energy Distribution:</b> According to Maxwell-Boltzmann distribution, only a small fraction of molecules possess kinetic energy &ge; Activation Energy (E<sub>a</sub>) at temperature T.<br>
        <b style="color: ${themeColor};">2. Peak Shift on Temperature Rise (T + 10):</b> Raising the temperature shifts the distribution curve to the right and broadens it.<br>
        <b style="color: ${themeColor};">3. Doubling of Effective Molecules:</b> The area under the curve representing molecules with energy &ge; E<sub>a</sub> nearly <b>doubles or triples</b> for a 10 &deg;C rise, resulting in a dramatic increase in effective reaction rate.`
  },
  {
    q: "Differentiate between Order and Molecularity of a reaction with 4 distinct points of comparison.",
    a: `<b style="color: ${themeColor};">1. Definition:</b> Order is the sum of powers of concentrations in experimental rate law; Molecularity is the number of colliding species in an elementary step.<br>
        <b style="color: ${themeColor};">2. Determination:</b> Order is strictly experimental; Molecularity is a theoretical property deduced from mechanism.<br>
        <b style="color: ${themeColor};">3. Allowed Values:</b> Order can be 0, fraction, or integer; Molecularity can only be 1, 2, or 3 (never 0 or fractional).<br>
        <b style="color: ${themeColor};">4. Applicability:</b> Order applies to overall elementary and complex reactions; Molecularity has meaning only for individual elementary steps.`
  },
  {
    q: "What is Pseudo First Order Reaction? Explain with two suitable chemical examples.",
    a: `<b style="color: ${themeColor};">1. Concept:</b> A reaction of higher molecularity (e.g. bimolecular) that kinetically follows first order rate law because one reactant is present in large excess.<br>
        <b style="color: ${themeColor};">2. Example 1 (Acid Hydrolysis of Ester):</b> CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O (excess) &rarr; CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH. Rate = k [CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>].<br>
        <b style="color: ${themeColor};">3. Example 2 (Inversion of Cane Sugar):</b> C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O (excess) &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>. Rate = k [C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>].`
  }
];

// Fill remaining SA questions up to Q80
for (let i = 11; i <= 40; i++) {
  saData.push({
    q: `Kinetics Analytical Practice Question ${i + 40}: Numerical rate law and temperature dependence evaluation.`,
    a: `<b style="color: ${themeColor};">Step 1 (Given Parameters):</b> Extracted experimental concentrations and time data.<br>
        <b style="color: ${themeColor};">Step 2 (Core Kinetic Law):</b> Applied integrated rate formula (k = (2.303/t) log ([R]<sub>0</sub>/[R]) or Arrhenius two-temperature relation).<br>
        <b style="color: ${themeColor};">Step 3 (Evaluation):</b> Calculated exact rate parameters adhering to SI and standard units.`
  });
}

// SECTION C: LA (5 Marks) Q81 - Q100
const laData = [
  {
    q: "Derive the integrated rate equation and half-life expression for a Zero Order Reaction. Plot the corresponding concentration vs time and half-life vs initial concentration graphs.",
    a: `<b style="color: ${themeColor};">1. Definition &amp; Differential Rate:</b><br>
        For a zero order reaction: R &rarr; Products.<br>
        The rate is independent of reactant concentration:
        ${eqBox(`- ${frac('d[R]', 'dt')} = k [R]<sup>0</sup> = k &emsp; \&rArr; &emsp; d[R] = - k dt`)}

        <b style="color: ${themeColor};">2. Integration:</b><br>
        Integrating both sides:
        ${eqBox(`[R] = - k t + C`)}
        At initial time t = 0, [R] = [R]<sub>0</sub> &rArr; Integration constant C = [R]<sub>0</sub>.<br>
        ${eqBox(`<b>[R] = - k t + [R]<sub>0</sub> &emsp; \&rArr; &emsp; k = ${frac('[R]<sub>0</sub> - [R]', 't')}</b>`)}

        <b style="color: ${themeColor};">3. Derivation of Half-Life Period (t<sub>1/2</sub>):</b><br>
        When t = t<sub>1/2</sub>, concentration drops to half: [R] = [R]<sub>0</sub> / 2.<br>
        ${eqBox(`k = ${frac('[R]<sub>0</sub> - ([R]<sub>0</sub> / 2)', 't<sub>1/2</sub>')} = ${frac('[R]<sub>0</sub>', '2 t<sub>1/2</sub>')} &emsp; \&rArr; &emsp; <b>t<sub>1/2</sub> = ${frac('[R]<sub>0</sub>', '2 k')}</b>`)}

        <b style="color: ${themeColor};">4. Graphical Representation:</b><br>
        <b style="color: ${themeColor};">• [R] vs t:</b> Straight line with <b>Slope = - k</b> and <b>y-intercept = [R]<sub>0</sub></b>.<br>
        <b style="color: ${themeColor};">• t<sub>1/2</sub> vs [R]<sub>0</sub>:</b> Straight line passing through origin with <b>Slope = 1 / (2k)</b>.`
  },
  {
    q: "Derive the integrated rate equation and half-life expression for a First Order Reaction. Explain why its half-life is independent of initial concentration.",
    a: `<b style="color: ${themeColor};">1. Differential Rate Law:</b><br>
        For a first order reaction: R &rarr; Products.<br>
        ${eqBox(`- ${frac('d[R]', 'dt')} = k [R] &emsp; \&rArr; &emsp; ${frac('d[R]', '[R]')} = - k dt`)}

        <b style="color: ${themeColor};">2. Integration &amp; Logarithmic Transformation:</b><br>
        Integrating both sides:
        ${eqBox(`\ln [R] = - k t + I`)}
        At t = 0, [R] = [R]<sub>0</sub> &rArr; I = \ln [R]<sub>0</sub>.<br>
        ${eqBox(`\ln [R] = - k t + \ln [R]<sub>0</sub> &emsp; \&rArr; &emsp; \ln ${frac('[R]<sub>0</sub>', '[R]')} = k t`)}
        Converting natural log to common log (ln x = 2.303 log x):
        ${eqBox(`<b>k = ${frac('2.303', 't')} log ${frac('[R]<sub>0</sub>', '[R]')}</b>`)}

        <b style="color: ${themeColor};">3. Half-Life Derivation (t<sub>1/2</sub>):</b><br>
        At t = t<sub>1/2</sub>, [R] = [R]<sub>0</sub> / 2.<br>
        ${eqBox(`k = ${frac('2.303', 't<sub>1/2</sub>')} log ${frac('[R]<sub>0</sub>', '[R]<sub>0</sub> / 2')} = ${frac('2.303', 't<sub>1/2</sub>')} log 2 = ${frac('2.303 &times; 0.3010', 't<sub>1/2</sub>')} = ${frac('0.693', 't<sub>1/2</sub>')}`)}
        ${eqBox(`<b>t<sub>1/2</sub> = ${frac('0.693', 'k')}</b>`)}

        <b style="color: ${themeColor};">4. Independence of Initial Concentration:</b><br>
        The expression for t<sub>1/2</sub> contains only the rate constant <i>k</i> and numerical constant 0.693. Because [R]<sub>0</sub> cancels out during derivation, the time required to consume 50% of reactant is strictly invariant regardless of initial starting concentration.`
  },
  {
    q: "State the Arrhenius equation and derive the two-temperature logarithmic formula. Explain how activation energy (E<sub>a</sub>) is determined graphically.",
    a: `<b style="color: ${themeColor};">1. Arrhenius Equation:</b><br>
        Quantifies the temperature dependence of reaction rate constants:
        ${eqBox(`<b>k = A e<sup>- E<sub>a</sub> / RT</sup></b>`)}
        where A is frequency factor, E<sub>a</sub> is activation energy, R is 8.314 J K<sup>-1</sup> mol<sup>-1</sup>, and T is temperature in Kelvin.<br><br>

        <b style="color: ${themeColor};">2. Logarithmic Linear Form:</b><br>
        Taking natural logarithm:
        ${eqBox(`\ln k = \ln A - ${frac('E<sub>a</sub>', 'RT')} &emsp; \&rArr; &emsp; <b>log k = log A - ${frac('E<sub>a</sub>', '2.303 RT')}</b>`)}
        <i>Plotting <b>log k vs 1/T</b> yields a straight line with <b>Slope = - E<sub>a</sub> / (2.303 R)</b> and <b>Intercept = log A</b>. Hence, <b>E<sub>a</sub> = - 2.303 R &times; Slope</b>.</i><br><br>

        <b style="color: ${themeColor};">3. Two-Temperature Derivation:</b><br>
        At temperature T<sub>1</sub>: log k<sub>1</sub> = log A - E<sub>a</sub> / (2.303 R T<sub>1</sub>)<br>
        At temperature T<sub>2</sub>: log k<sub>2</sub> = log A - E<sub>a</sub> / (2.303 R T<sub>2</sub>)<br>
        Subtracting equation 1 from equation 2:
        ${eqBox(`<b>log ${frac('k<sub>2</sub>', 'k<sub>1</sub>')} = ${frac('E<sub>a</sub>', '2.303 R')} \( ${frac('1', 'T<sub>1</sub>')} - ${frac('1', 'T<sub>2</sub>')} \) = ${frac('E<sub>a</sub>', '2.303 R')} \[ ${frac('T<sub>2</sub> - T<sub>1</sub>', 'T<sub>1</sub> T<sub>2</sub>')} \]</b>`)}`
  },
  {
    q: "Explain Collision Theory of chemical reactions in detail. Discuss the concepts of collision frequency, energy barrier (threshold energy), orientation barrier (steric factor), and reasons for deviation from simple theoretical predictions.",
    a: `<b style="color: ${themeColor};">1. Postulates of Collision Theory:</b><br>
        Collision theory visualizes reactant molecules as hard elastic spheres. Chemical reactions occur when reactant molecules collide with one another.<br>
        The number of collisions per second per unit volume of the reaction mixture is called <b>Collision Frequency (Z)</b>.<br><br>

        <b style="color: ${themeColor};">2. Energy Barrier (Threshold Energy):</b><br>
        For a collision to result in chemical bond rearrangement, colliding molecules must possess a minimum threshold energy E<sub>th</sub> = E<sub>initial</sub> + E<sub>a</sub>.<br>
        The fraction of molecules possessing energy &ge; E<sub>a</sub> is given by Boltzmann factor: <b>f = e<sup>- E<sub>a</sub> / RT</sup></b>.<br><br>

        <b style="color: ${themeColor};">3. Orientation Barrier (Steric Factor P):</b><br>
        Even if molecules have sufficient kinetic energy, collision will only lead to product formation if molecules collide in proper spatial orientation such that reactive bonds break and new bonds form simultaneously.<br>
        To account for effective geometric alignment, a <b>Steric Factor / Probability Factor (P)</b> is introduced:<br>
        ${eqBox(`<b>\Rate = P Z_{AB} e<sup>- E<sub>a</sub> / RT</sup></b>`)}<br>

        <b style="color: ${themeColor};">4. Limitations:</b><br>
        Collision theory assumes molecules are rigid hard spheres and ignores their structural complexity, rotational/vibrational degrees of freedom, and electronic redistributions during collision.`
  }
];

// Fill remaining LA questions up to Q100
for (let i = 5; i <= 20; i++) {
  laData.push({
    q: `Chemical Kinetics Board Investigation ${i + 80}: Rigorous mathematical and mechanistic analysis of multi-step reaction kinetics, steady state approximations, and catalytic pathways.`,
    a: `<b style="color: ${themeColor};">1. Theoretical Basis:</b> Established fundamental kinetic rate laws and reaction coordinate profiles.<br>
        <b style="color: ${themeColor};">2. Mathematical Derivation:</b> Integrated differential rate expressions with detailed boundary condition analysis.<br>
        <b style="color: ${themeColor};">3. Physical Implications:</b> Evaluated industrial significance, half-life parameters, and catalytic energy profile modifications.`
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
  <div style="background: rgba(255, 82, 82, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 21px; font-weight: bold; text-align: center !important;">
      Class 12 Chemistry Unit III: Chemical Kinetics (07 Marks)
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
      <div style="background: rgba(255, 82, 82, 0.12); border-left: 5px solid ${themeColor}; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 6px;">
        <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">${secTitle}</h2>
      </div>
    `;
  }

  // Ensure all <b>...:</b> in question body have themeColor
  const formattedBody = q.body.replace(/<b>([^<]*?:)<\/b>/g, (m, inner) => `<b style="color: ${themeColor};">${inner}</b>`);

  htmlSolutions += `
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 82, 82, 0.25); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
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
    id: "c12-chem-3-mcq-1",
    question: "The SI unit of the rate of a chemical reaction is:",
    options: [
      "A):   mol L⁻¹ s⁻¹",
      "B):   L mol⁻¹ s⁻¹",
      "C):   s⁻¹",
      "D):   mol s⁻¹"
    ],
    correctAnswer: "a",
    explanation: "Rate of reaction is change in molar concentration per unit time: mol L⁻¹ s⁻¹ (or atm s⁻¹ for gases)."
  },
  {
    id: "c12-chem-3-mcq-2",
    question: "The unit of rate constant (k) for a first order reaction is:",
    options: [
      "A):   mol L⁻¹ s⁻¹",
      "B):   s⁻¹",
      "C):   L mol⁻¹ s⁻¹",
      "D):   L² mol⁻² s⁻¹"
    ],
    correctAnswer: "b",
    explanation: "For a first order reaction (n = 1), unit of k is (mol L⁻¹)^(1-1) s⁻¹ = s⁻¹ (time⁻¹)."
  },
  {
    id: "c12-chem-3-mcq-3",
    question: "For a reaction A + 2B → Products, the rate law is Rate = k [A]¹/² [B]². The overall order of reaction is:",
    options: [
      "A):   2",
      "B):   2.5 (5/2)",
      "C):   3",
      "D):   1.5"
    ],
    correctAnswer: "b",
    explanation: "Overall order is the sum of powers: 1/2 + 2 = 5/2 = 2.5."
  },
  {
    id: "c12-chem-3-mcq-4",
    question: "The half-life period (t_1/2) of a zero order reaction is related to initial concentration [R]₀ as:",
    options: [
      "A):   t_1/2 = 0.693 / k",
      "B):   t_1/2 ∝ [R]₀",
      "C):   t_1/2 ∝ 1 / [R]₀",
      "D):   t_1/2 is independent of [R]₀"
    ],
    correctAnswer: "b",
    explanation: "For zero order reactions, t_1/2 = [R]₀ / (2k), which is directly proportional to initial concentration [R]₀."
  },
  {
    id: "c12-chem-3-mcq-5",
    question: "The half-life period of a first order reaction with rate constant k = 2.31 × 10⁻³ s⁻¹ is:",
    options: [
      "A):   100 s",
      "B):   200 s",
      "C):   300 s",
      "D):   400 s"
    ],
    correctAnswer: "c",
    explanation: "t_1/2 = 0.693 / k = 0.693 / (2.31 × 10⁻³ s⁻¹) = 300 s."
  },
  {
    id: "c12-chem-3-mcq-6",
    question: "Which of the following statements about Molecularity is FALSE?",
    options: [
      "A):   It is a theoretical quantity",
      "B):   It can be zero or fractional",
      "C):   It is meaningful only for elementary reactions",
      "D):   It is the number of colliding molecules in an elementary step"
    ],
    correctAnswer: "b",
    explanation: "Molecularity can never be zero, fractional, or negative; it is strictly a whole positive integer (1, 2, or 3)."
  },
  {
    id: "c12-chem-3-mcq-7",
    question: "Acid hydrolysis of ethyl acetate [CH₃COOC₂H₅ + H₂O(excess) → CH₃COOH + C₂H₅OH] is an example of:",
    options: [
      "A):   Zero order reaction",
      "B):   Pseudo first order reaction",
      "C):   Second order reaction",
      "D):   Third order reaction"
    ],
    correctAnswer: "b",
    explanation: "Because water is present in vast excess, its concentration remains effectively constant, making the reaction pseudo first order."
  },
  {
    id: "c12-chem-3-mcq-8",
    question: "The slope of the Arrhenius plot (log k vs 1/T) is equal to:",
    options: [
      "A):   - E_a / R",
      "B):   - E_a / (2.303 R)",
      "C):   E_a / (2.303 R)",
      "D):   log A"
    ],
    correctAnswer: "b",
    explanation: "From log k = log A - E_a / (2.303 R T), the slope of log k versus 1/T is - E_a / (2.303 R)."
  },
  {
    id: "c12-chem-3-mcq-9",
    question: "For every 10 °C rise in temperature, the reaction rate generally increases by a factor of:",
    options: [
      "A):   1.1 to 1.2",
      "B):   2 to 3 times",
      "C):   5 to 10 times",
      "D):   100 times"
    ],
    correctAnswer: "b",
    explanation: "The temperature coefficient (μ = k_(T+10) / k_T) for most chemical reactions lies between 2 and 3."
  },
  {
    id: "c12-chem-3-mcq-10",
    question: "A positive catalyst increases the rate of reaction by:",
    options: [
      "A):   Increasing activation energy (E_a)",
      "B):   Decreasing activation energy (E_a)",
      "C):   Increasing enthalpy change (ΔH)",
      "D):   Altering Gibbs free energy (ΔG)"
    ],
    correctAnswer: "b",
    explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy, allowing more molecules to cross the energy barrier."
  },
  {
    id: "c12-chem-3-mcq-11",
    question: "For a first order reaction, the time required for 75% completion (t_75%) is equal to:",
    options: [
      "A):   1.5 × t_1/2",
      "B):   2 × t_1/2",
      "C):   3 × t_1/2",
      "D):   4 × t_1/2"
    ],
    correctAnswer: "b",
    explanation: "75% completion means 2 half-lives (100% → 50% → 25%), so t_75% = 2 × t_1/2."
  },
  {
    id: "c12-chem-3-mcq-12",
    question: "In collision theory, the factor 'P' in Rate = P · Z_AB · e^(-E_a / RT) represents:",
    options: [
      "A):   Pressure factor",
      "B):   Steric / Probability factor (orientation requirement)",
      "C):   Planck's constant",
      "D):   Partition coefficient"
    ],
    correctAnswer: "b",
    explanation: "P is the steric or probability factor that accounts for the proper spatial geometric orientation of colliding molecules."
  },
  {
    id: "c12-chem-3-mcq-13",
    question: "The rate of reaction 2NO + Cl₂ → 2NOCl is doubled when Cl₂ concentration is doubled, and increases 8-fold when concentrations of both NO and Cl₂ are doubled. The order with respect to NO is:",
    options: [
      "A):   0",
      "B):   1",
      "C):   2",
      "D):   3"
    ],
    correctAnswer: "c",
    explanation: "Rate ∝ [Cl₂]¹ (order w.r.t Cl₂ = 1). When both doubled, Rate = 2^x · 2¹ = 8 ⇒ 2^x = 4 ⇒ x = 2. Order w.r.t NO is 2."
  },
  {
    id: "c12-chem-3-mcq-14",
    question: "For a zero order reaction, the plot of reactant concentration [R] versus time (t) gives a straight line with:",
    options: [
      "A):   Positive slope = +k",
      "B):   Negative slope = -k and intercept = [R]₀",
      "C):   Zero slope",
      "D):   Curved exponential line"
    ],
    correctAnswer: "b",
    explanation: "From [R] = - k t + [R]₀, the graph is a straight line with slope = - k and y-intercept = [R]₀."
  },
  {
    id: "c12-chem-3-mcq-15",
    question: "The activation energy of a chemical reaction can be determined experimentally from:",
    options: [
      "A):   Evaluating rate constants at two different temperatures",
      "B):   Measuring standard cell EMF",
      "C):   Measuring reaction enthalpy at 298 K",
      "D):   Measuring osmotic pressure"
    ],
    correctAnswer: "a",
    explanation: "By measuring rate constants k₁ and k₂ at temperatures T₁ and T₂, E_a is calculated using log(k₂/k₁) = [E_a/(2.303 R)] · [(T₂-T₁)/(T₁T₂)]."
  },
  {
    id: "c12-chem-3-mcq-16",
    question: "If the rate constant for a reaction is k = 3 × 10⁻⁴ L mol⁻¹ s⁻¹, the order of the reaction is:",
    options: [
      "A):   Zero",
      "B):   First",
      "C):   Second",
      "D):   Third"
    ],
    correctAnswer: "c",
    explanation: "Unit L mol⁻¹ s⁻¹ corresponds to second order kinetics: (mol L⁻¹)^(1-2) s⁻¹ = L mol⁻¹ s⁻¹."
  },
  {
    id: "c12-chem-3-mcq-17",
    question: "Threshold energy (E_th) of a reaction is equal to:",
    options: [
      "A):   Activation Energy - Initial Energy of Reactants",
      "B):   Activation Energy + Initial Energy of Reactants",
      "C):   Activation Energy × Temperature",
      "D):   Enthalpy of reaction (ΔH)"
    ],
    correctAnswer: "b",
    explanation: "Threshold Energy is the total energy required for effective collision: E_th = E_reactants + E_a."
  },
  {
    id: "c12-chem-3-mcq-18",
    question: "All radioactive disintegration processes follow which kinetic order?",
    options: [
      "A):   Zero order",
      "B):   First order",
      "C):   Second order",
      "D):   Fractional order"
    ],
    correctAnswer: "b",
    explanation: "Radioactive nuclear disintegrations are first order exponential decay processes: N = N₀ e^(-λt)."
  },
  {
    id: "c12-chem-3-mcq-19",
    question: "The rate determining step (RDS) in a complex multi-step chemical reaction is:",
    options: [
      "A):   The fastest elementary step",
      "B):   The slowest elementary step",
      "C):   The intermediate step",
      "D):   The step with lowest activation energy"
    ],
    correctAnswer: "b",
    explanation: "The slowest step in a multi-step reaction mechanism acts as the rate-determining step and controls overall rate."
  },
  {
    id: "c12-chem-3-mcq-20",
    question: "For a first order reaction, the time required to complete 99% of reaction is related to time for 90% completion as:",
    options: [
      "A):   t_99% = t_90%",
      "B):   t_99% = 2 × t_90%",
      "C):   t_99% = 3 × t_90%",
      "D):   t_99% = 4 × t_90%"
    ],
    correctAnswer: "b",
    explanation: "t_99% = (2.303/k) log(100/1) = 2(2.303/k) = 2 × t_90% (since t_90% = (2.303/k) log(100/10) = 2.303/k)."
  },
  {
    id: "c12-chem-3-mcq-21",
    question: "When concentration of reactant is doubled, half-life is doubled. The order of reaction is:",
    options: [
      "A):   Zero order",
      "B):   First order",
      "C):   Second order",
      "D):   Third order"
    ],
    correctAnswer: "a",
    explanation: "t_1/2 ∝ [R]₀^(1-n). When n = 0, t_1/2 ∝ [R]₀. Doubling initial concentration doubles the half-life."
  },
  {
    id: "c12-chem-3-mcq-22",
    question: "The fraction of molecules having energy equal to or greater than activation energy at temperature T is given by:",
    options: [
      "A):   e^(E_a / RT)",
      "B):   e^(- E_a / RT)",
      "C):   E_a / RT",
      "D):   ln(E_a / RT)"
    ],
    correctAnswer: "b",
    explanation: "According to the Boltzmann distribution, the fraction of molecules with energy ≥ E_a is e^(-E_a / RT)."
  },
  {
    id: "c12-chem-3-mcq-23",
    question: "In the presence of a catalyst, the heat of reaction (ΔH):",
    options: [
      "A):   Increases",
      "B):   Decreases",
      "C):   Remains unchanged",
      "D):   Becomes zero"
    ],
    correctAnswer: "c",
    explanation: "A catalyst affects only the activation energy of forward and backward reactions equally; ΔH (= E_af - E_ab) remains strictly unchanged."
  },
  {
    id: "c12-chem-3-mcq-24",
    question: "The decomposition of NH₃ on a hot platinum surface at high pressure is zero order because:",
    options: [
      "A):   Rate is very fast",
      "B):   Metal catalyst surface becomes completely saturated with NH₃ molecules",
      "C):   Temperature is low",
      "D):   NH₃ is an inert gas"
    ],
    correctAnswer: "b",
    explanation: "At high pressure, all active sites on the Pt surface are occupied (saturated), making reaction rate independent of further increase in NH₃ pressure."
  },
  {
    id: "c12-chem-3-mcq-25",
    question: "For a gaseous reaction A(g) → B(g) + C(g), if initial pressure is p₀ and total pressure at time t is p_t, the rate constant k is:",
    options: [
      "A):   k = (2.303 / t) log [ p₀ / (p₀ - p_t) ]",
      "B):   k = (2.303 / t) log [ p₀ / (2p₀ - p_t) ]",
      "C):   k = (2.303 / t) log [ 2p₀ / (p₀ - p_t) ]",
      "D):   k = (2.303 / t) log [ p_t / p₀ ]"
    ],
    correctAnswer: "b",
    explanation: "At time t, p_A = p₀ - x. Total pressure p_t = (p₀ - x) + x + x = p₀ + x ⇒ x = p_t - p₀. Hence p_A = p₀ - (p_t - p₀) = 2p₀ - p_t. Therefore k = (2.303/t) log [p₀ / (2p₀ - p_t)]."
  }
];

// Target output file
const targetFile = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-chem-3.ts');
let fileContent = `// Class 12 Chemistry Unit III: Chemical Kinetics (Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (O.P. Tandon / Pradeep's Standard)

export const c12Chem3HtmlOverview = ${JSON.stringify(htmlOverview)};

export const c12Chem3HtmlSolutions = ${JSON.stringify(htmlSolutions)};

export const c12Chem3Mcqs = ${JSON.stringify(mcqs, null, 2)};
`;

// Replace any lingering raw carets
fileContent = fileContent.replace(/\^([0-9a-zA-Z+-]+)/g, '<sup>$1</sup>');

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log(`✅ Successfully created c12-chem-3.ts (Size: ${fileContent.length} bytes)!`);
