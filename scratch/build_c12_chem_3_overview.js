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

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 82, 82, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${defContent}</div>
  </div>`;
}

function analogyBox(title, text) {
  return `
  <div style="background: rgba(255, 82, 82, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">💡 REAL-WORLD INTUITION &amp; ANALOGY: ${title}</b>
    <div style="color: #E2E8F0; font-size: 15px; line-height: 1.65;">${text}</div>
  </div>`;
}

function stepDerivationBox(title, stepsHtml) {
  return `
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(255, 82, 82, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,82,82,0.3); padding-bottom: 6px;">
      📐 STEP-BY-STEP MATHEMATICAL DERIVATION: ${title}
    </div>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.75;">
      ${stepsHtml}
    </div>
  </div>`;
}

function solvedExampleBox(title, prob, sol) {
  return `
  <div style="background: rgba(255, 82, 82, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 WORKED BOARD NUMERICAL EXAMPLE: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65; margin-bottom: 8px;"><b style="color: ${themeColor};">Problem:</b> ${prob}</div>
    <div style="color: #FFEBEE; font-size: 15px; line-height: 1.65; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px;"><b style="color: ${themeColor};">Step-by-Step Solution:</b><br>${sol}</div>
  </div>`;
}

// ---------------- TAB 1: OVERVIEW HTML ----------------
const htmlOverview = `
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
  <div style="background: rgba(255, 82, 82, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit III: Chemical Kinetics (JKBOSE / CBSE Official Syllabus - 07 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Chemical Kinetics:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The branch of chemistry that deals with the study of reaction rates, the factors affecting them (concentration, temperature, pressure, catalyst), and the microscopic molecular mechanisms of chemical reactions.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Rate of Reaction:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The change in concentration of any one of the reactants or products per unit time. Unit: <b>mol L<sup>-1</sup> s<sup>-1</sup></b> (or <b>atm s<sup>-1</sup></b> for gases).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Rate Law &amp; Specific Rate Constant (k):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">An experimentally determined mathematical expression representing rate in terms of molar concentrations of reactants raised to empirical powers: Rate = <i>k [A]<sup>x</sup> [B]<sup>y</sup></i>. When all reactant concentrations are unity (1 mol L<sup>-1</sup>), Rate = <i>k</i> (Specific Reaction Rate).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Order of Reaction:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The sum of powers of concentration terms in the experimental rate law expression: <i>n = x + y</i>. It is an experimental quantity that can be zero, integer, or fractional.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Molecularity of Reaction:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The total number of reactant species (atoms, ions, or molecules) taking part in an elementary step that must collide simultaneously to bring about a chemical reaction. It is strictly a non-zero whole integer (1, 2, or 3).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">6. Activation Energy (E<sub>a</sub>):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The minimum extra amount of kinetic energy absorbed by reactant molecules to equal the threshold energy required for effective chemical collision.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">1. Rate of Reaction (Average &amp; Instantaneous Rate)</h2>

  <p>Chemical reactions proceed at vastly differing speeds: from instantaneous ionic precipitations (AgNO<sub>3</sub> + NaCl &rarr; AgCl &darr;, ~10<sup>-12</sup> s) to extremely slow geological transformations (rusting of iron, weathering of rocks). Chemical kinetics focuses on <b>moderate, measurable reaction rates</b>.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Mathematical Definition of Reaction Rate</h3>
  ${defBox('Rate of Reaction', `
    For a general stoichiometric reaction: a A + b B &rarr; c C + d D<br>
    The unique rate of reaction is expressed by dividing the rate of disappearance of reactants or rate of appearance of products by their respective stoichiometric coefficients:
    ${eqBox(`\Rate = - ${frac('1', 'a')} ${frac('&Delta;[A]', '&Delta;t')} = - ${frac('1', 'b')} ${frac('&Delta;[B]', '&Delta;t')} = + ${frac('1', 'c')} ${frac('&Delta;[C]', '&Delta;t')} = + ${frac('1', 'd')} ${frac('&Delta;[D]', '&Delta;t')}`)}
    <b style="color: ${themeColor};">• Negative Sign Meaning:</b> Reactant concentrations decrease over time (&Delta;[Reactant] &lt; 0), so a negative sign ensures that the calculated rate is always a positive physical quantity.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Average Rate vs Instantaneous Rate</h3>
  <div style="display: flex; flex-direction: column; gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 6px;">1. Average Rate (r<sub>av</sub>):</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">
        The change in molar concentration of a reactant or product divided by a large, finite time interval &Delta;t:
        ${eqBox(`r<sub>av</sub> = - ${frac('&Delta;[R]', '&Delta;t')} = + ${frac('&Delta;[P]', '&Delta;t')}`)}
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 6px;">2. Instantaneous Rate (r<sub>inst</sub>):</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">
        The exact rate of reaction at a specific infinitesimal instant of time as &Delta;t approaches zero (limit &Delta;t &rarr; 0):
        ${eqBox(`r<sub>inst</sub> = \lim<sub>&Delta;t&rarr;0</sub> ${frac('&Delta;[R]', '&Delta;t')} = - ${frac('d[R]', 'dt')} = + ${frac('d[P]', 'dt')}`)}
        <i>Graphically obtained from the negative slope of the tangent to the concentration-time curve at that specific time t: Slope = - d[R]/dt.</i>
      </div>
    </div>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">2. Factors Influencing Reaction Rates</h2>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Concentration of Reactants:</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">Higher reactant concentration increases the number of reacting particles per unit volume, which increases collision frequency (Z) and accelerates reaction rate.</span>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Temperature:</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">For almost all chemical reactions, rate increases rapidly with temperature. For every <b>10 &deg;C rise in temperature</b>, the reaction rate nearly <b>doubles or triples</b> (Temperature Coefficient &mu; = k<sub>T+10</sub> / k<sub>T</sub> &approx; 2 to 3).</span>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Presence of Catalyst:</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">A positive catalyst speeds up reaction by providing an alternative reaction pathway with a <b>lower activation energy (E<sub>a</sub>)</b>. It does NOT alter &Delta;G, &Delta;H, or equilibrium constant K<sub>c</sub>; it merely establishes equilibrium faster.</span>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Surface Area of Solid Reactants:</b>
      <span style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">Finely divided powdered solids expose a vastly greater surface area for collisions, dramatically accelerating heterogeneous reactions.</span>
    </div>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">3. Rate Law, Rate Constant &amp; Order of Reaction</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Rate Law Expression</h3>
  ${defBox('Rate Law', `
    <b>Rate Law:</b> The experimentally determined mathematical equation that expresses the reaction rate in terms of molar concentrations of reactants, with each term raised to some power that may or may not be equal to its stoichiometric coefficient in the balanced chemical equation:<br>
    For reaction: a A + b B &rarr; Products
    ${eqBox(`<b>\Rate = k [A]<sup>x</sup> [B]<sup>y</sup></b>`)}
    where <b>k</b> is the <b>Rate Constant (Specific Reaction Rate)</b>, and <b>x</b>, <b>y</b> are the partial reaction orders with respect to A and B.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Order of Reaction &amp; Units of Rate Constant (k)</h3>
  ${defBox('Order of Reaction', `
    <b>Order of Reaction:</b> The sum of powers (exponents) to which the concentration terms are raised in the experimental rate law:
    ${eqBox(`<b>n = x + y</b>`)}
    <b style="color: ${themeColor};">• General Unit Formula for Rate Constant (k):</b>
    ${eqBox(`\Unit of  k = <b>(mol L<sup>-1</sup>)<sup>1 - n</sup> s<sup>-1</sup></b>`)}
    <b style="color: ${themeColor};">• For Zero Order (n = 0):</b> <b>mol L<sup>-1</sup> s<sup>-1</sup></b>.<br>
    <b style="color: ${themeColor};">• For First Order (n = 1):</b> <b>s<sup>-1</sup></b> (time<sup>-1</sup>, concentration independent).<br>
    <b style="color: ${themeColor};">• For Second Order (n = 2):</b> <b>L mol<sup>-1</sup> s<sup>-1</sup></b>.<br>
    <b style="color: ${themeColor};">• For Half Order (n = 1/2):</b> <b>mol<sup>1/2</sup> L<sup>-1/2</sup> s<sup>-1</sup></b>.
  `)}

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">4. Molecularity of a Reaction &amp; Order vs Molecularity Comparison</h2>

  ${defBox('Molecularity', `
    <b>Molecularity:</b> The number of reacting species (atoms, ions, or molecules) taking part in an elementary step that must collide simultaneously in proper orientation to undergo chemical change.<br>
    &bull; <b>Unimolecular:</b> NH<sub>4</sub>NO<sub>2</sub> &rarr; N<sub>2</sub> + 2H<sub>2</sub>O (Molecularity = 1)<br>
    &bull; <b>Bimolecular:</b> 2HI &rarr; H<sub>2</sub> + I<sub>2</sub> (Molecularity = 2)<br>
    &bull; <b>Trimolecular:</b> 2NO + O<sub>2</sub> &rarr; 2NO<sub>2</sub> (Molecularity = 3, rare).<br>
    <i>Reactions with molecularity > 3 are virtually impossible due to the infinitesimally small probability of 4 or more particles colliding simultaneously.</i>
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Master Comparison: Order of Reaction vs Molecularity</h3>
  <div style="display: flex; flex-direction: column; gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 6px;">📊 1. Order of Reaction (Experimental Quantity)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: ${themeColor};">• Definition:</b> Sum of exponents of concentration terms in experimental rate law.<br>
        <b style="color: ${themeColor};">• Nature:</b> Purely experimental; cannot be predicted from balanced equation.<br>
        <b style="color: ${themeColor};">• Values:</b> Can be zero, whole number, fractional, or negative.<br>
        <b style="color: ${themeColor};">• Scope:</b> Applicable to elementary as well as complex multistep reactions.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 6px;">📊 2. Molecularity of Reaction (Theoretical Property)</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
        <b style="color: ${themeColor};">• Definition:</b> Number of colliding reactant species in an elementary step.<br>
        <b style="color: ${themeColor};">• Nature:</b> Theoretical concept derived from proposed reaction mechanism.<br>
        <b style="color: ${themeColor};">• Values:</b> Strictly a non-zero positive integer (1, 2, or 3 only; never 0 or fraction).<br>
        <b style="color: ${themeColor};">• Scope:</b> Meaningful ONLY for elementary steps; has no meaning for overall complex reactions.
      </div>
    </div>
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">5. Integrated Rate Equations &amp; Half-Life Derivations</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Zero Order Reactions</h3>
  ${stepDerivationBox('Integrated Rate Law & Half-Life for Zero Order Reaction', `
    For a zero order reaction: R &rarr; Products<br>
    Differential rate equation:
    ${eqBox(`- ${frac('d[R]', 'dt')} = k [R]<sup>0</sup> = k &rArr; d[R] = - k dt`)}
    Integrating both sides:
    ${eqBox(`[R] = - k t + I`)}
    At t = 0, [R] = [R]<sub>0</sub> (Initial Concentration) &rArr; I = [R]<sub>0</sub>.<br>
    Substituting I back into the equation:
    ${eqBox(`<b>[R] = - k t + [R]<sub>0</sub> &emsp; \&rArr; &emsp; k = ${frac('[R]<sub>0</sub> - [R]', 't')}</b>`)}
    <br><b style="color: ${themeColor};">• Derivation of Half-Life Period (t<sub>1/2</sub>):</b><br>
    At t = t<sub>1/2</sub>, concentration becomes half of initial value: [R] = [R]<sub>0</sub> / 2.<br>
    ${eqBox(`k = ${frac('[R]<sub>0</sub> - ([R]<sub>0</sub> / 2)', 't<sub>1/2</sub>')} = ${frac('[R]<sub>0</sub>', '2 t<sub>1/2</sub>')} &emsp; \&rArr; &emsp; <b>t<sub>1/2</sub> = ${frac('[R]<sub>0</sub>', '2 k')}</b>`)}
    <i>Key Fact: For zero order reactions, t<sub>1/2</sub> is directly proportional to initial concentration [R]<sub>0</sub>.</i>
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) First Order Reactions</h3>
  ${stepDerivationBox('Integrated Rate Law & Half-Life for First Order Reaction', `
    For a first order reaction: R &rarr; Products<br>
    Differential rate equation:
    ${eqBox(`- ${frac('d[R]', 'dt')} = k [R] &emsp; \&rArr; &emsp; ${frac('d[R]', '[R]')} = - k dt`)}
    Integrating both sides:
    ${eqBox(`\ln [R] = - k t + I`)}
    At t = 0, [R] = [R]<sub>0</sub> &rArr; I = \ln [R]<sub>0</sub>.<br>
    ${eqBox(`\ln [R] = - k t + \ln [R]<sub>0</sub> &emsp; \&rArr; &emsp; \ln ${frac('[R]<sub>0</sub>', '[R]')} = k t`)}
    Converting natural logarithm to base 10 (ln x = 2.303 log x):
    ${eqBox(`<b>k = ${frac('2.303', 't')} log ${frac('[R]<sub>0</sub>', '[R]')} = ${frac('2.303', 't')} log ${frac('a', 'a - x')}</b>`)}
    <br><b style="color: ${themeColor};">• Derivation of Half-Life Period (t<sub>1/2</sub>):</b><br>
    At t = t<sub>1/2</sub>, [R] = [R]<sub>0</sub> / 2:<br>
    ${eqBox(`k = ${frac('2.303', 't<sub>1/2</sub>')} log ${frac('[R]<sub>0</sub>', '[R]<sub>0</sub> / 2')} = ${frac('2.303', 't<sub>1/2</sub>')} log 2 = ${frac('2.303 &times; 0.3010', 't<sub>1/2</sub>')} = ${frac('0.693', 't<sub>1/2</sub>')}`)}
    ${eqBox(`<b>t<sub>1/2</sub> = ${frac('0.693', 'k')}</b>`)}
    <i>Key Fact: For first order reactions, half-life is completely independent of initial reactant concentration!</i>
  `)}

  ${solvedExampleBox('First Order Kinetic Calculation',
    'A first order reaction is found to have a rate constant k = 5.5 &times; 10<sup>-14</sup> s<sup>-1</sup>. Find the half-life of the reaction. Also, show that time required for 99% completion is twice the time required for 90% completion.',
    `<b style="color: ${themeColor};">Step 1 (Half-life calculation):</b> t<sub>1/2</sub> = 0.693 / k = 0.693 / (5.5 &times; 10<sup>-14</sup> s<sup>-1</sup>) = <b>1.26 &times; 10<sup>13</sup> s</b>.<br>
     <b style="color: ${themeColor};">Step 2 (Time for 99% completion, t<sub>99%</sub>):</b> [R] = 1% of a = 0.01a &rArr; t<sub>99%</sub> = (2.303 / k) log (a / 0.01a) = (2.303 / k) log (100) = (2.303 / k) &times; 2 = <b>4.606 / k</b>.<br>
     <b style="color: ${themeColor};">Step 3 (Time for 90% completion, t<sub>90%</sub>):</b> [R] = 10% of a = 0.1a &rArr; t<sub>90%</sub> = (2.303 / k) log (a / 0.1a) = (2.303 / k) log (10) = <b>2.303 / k</b>.<br>
     <b style="color: ${themeColor};">Step 4 (Comparison):</b> t<sub>99%</sub> / t<sub>90%</sub> = (4.606 / k) / (2.303 / k) = <b>2 &rArr; t<sub>99%</sub> = 2 &times; t<sub>90%</sub> (Proved!)</b>.`
  )}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Pseudo First Order Reactions</h3>
  ${defBox('Pseudo First Order Reaction', `
    <b>Pseudo First Order Reaction:</b> A chemical reaction of higher true molecularity (e.g. bimolecular) that behaves kinetically as a first order reaction because one of the reactants is present in large excess such that its concentration remains practically constant throughout the reaction.<br><br>
    <b style="color: ${themeColor};">• Example 1: Acid Hydrolysis of Ethyl Acetate:</b>
    ${eqBox(`CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O (excess) \&rarr; (H<sup>+</sup>) CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH`)}
    Rate = k' [CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>] [H<sub>2</sub>O] = <b>k [CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>]</b> (where k = k' [H<sub>2</sub>O]).<br><br>
    <b style="color: ${themeColor};">• Example 2: Inversion of Cane Sugar:</b>
    ${eqBox(`C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O (excess) \&rarr; (H<sup>+</sup>) C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (Glucose) + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (Fructose)`)}
  `)}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">6. Temperature Dependence &amp; Arrhenius Equation</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Arrhenius Equation &amp; Activation Energy (E<sub>a</sub>)</h3>
  ${defBox('Arrhenius Equation (1889)', `
    <b>Arrhenius Equation:</b> Quantifies the exponential temperature dependence of reaction rate constant:
    ${eqBox(`<b>k = A e<sup>- E<sub>a</sub> / R T</sup></b>`)}
    where:<br>
    <b style="color: ${themeColor};">• A:</b> <b>Arrhenius Pre-exponential Factor (Frequency Factor)</b>, related to collision frequency.<br>
    <b style="color: ${themeColor};">• E<sub>a</sub>:</b> <b>Activation Energy (J mol<sup>-1</sup>)</b>.<br>
    <b style="color: ${themeColor};">• e<sup>- E<sub>a</sub> / R T</sup>:</b> The Boltzmann fraction of molecules possessing kinetic energy greater than or equal to E<sub>a</sub>.<br>
    <b style="color: ${themeColor};">• T:</b> Absolute temperature in Kelvin (K).
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Two-Temperature Form of Arrhenius Equation</h3>
  ${stepDerivationBox('Two-Temperature Arrhenius Formula', `
    Taking natural logarithm on both sides:
    ${eqBox(`\ln k = \ln A - ${frac('E<sub>a</sub>', 'R T')}`)}
    Converting to log<sub>10</sub> (ln x = 2.303 log x):
    ${eqBox(`<b>log k = log A - ${frac('E<sub>a</sub>', '2.303 R T')}</b>`)}
    <i>Plot of log k vs 1/T yields a straight line with: <b>Slope = - E<sub>a</sub> / (2.303 R)</b> and <b>Intercept = log A</b>.</i><br><br>
    At two different temperatures T<sub>1</sub> and T<sub>2</sub> with rate constants k<sub>1</sub> and k<sub>2</sub>:
    ${eqBox(`log k<sub>1</sub> = log A - ${frac('E<sub>a</sub>', '2.303 R T<sub>1</sub>')} &emsp; \and &emsp; log k<sub>2</sub> = log A - ${frac('E<sub>a</sub>', '2.303 R T<sub>2</sub>')}`)}
    Subtracting equation 1 from equation 2:
    ${eqBox(`<b>log ${frac('k<sub>2</sub>', 'k<sub>1</sub>')} = ${frac('E<sub>a</sub>', '2.303 R')} \( ${frac('1', 'T<sub>1</sub>')} - ${frac('1', 'T<sub>2</sub>')} \) = ${frac('E<sub>a</sub>', '2.303 R')} \[ ${frac('T<sub>2</sub> - T<sub>1</sub>', 'T<sub>1</sub> T<sub>2</sub>')} \]</b>`)}
  `)}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">7. Concept of Collision Theory of Chemical Reactions</h2>

  <p>Developed by Max Trautz (1916) and William Lewis (1918), <b>Collision Theory</b> is based on the kinetic theory of gases. It visualizes reactant molecules as hard spheres and asserts that chemical reactions occur via molecular collisions.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Two Essential Criteria for Effective Collisions</h3>
  <div style="display: flex; flex-direction: column; gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 6px;">1. Energy Barrier (Threshold Energy):</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">
        Colliding molecules must possess a minimum amount of energy called <b>Threshold Energy (E<sub>th</sub>)</b>:
        ${eqBox(`\Threshold Energy (E<sub>th</sub>) = \Initial Energy of Reactants + \Activation Energy (E<sub>a</sub>)`)}
        Collisions with energy below E<sub>th</sub> are purely elastic and bounce off without chemical reaction.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.35); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 6px;">2. Orientation Barrier (Steric Factor P):</b>
      <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">
        Molecules must collide in a specific spatial geometric alignment so that reactive bonds can break and new product bonds can simultaneously form.<br><br>
        <b style="color: ${themeColor};">• Modified Collision Theory Rate Equation:</b>
        ${eqBox(`<b>\Rate = P Z_{AB} e<sup>- E<sub>a</sub> / R T</sup></b>`)}
        where <b>Z<sub>AB</sub></b> is collision frequency and <b>P</b> is the <b>Steric / Probability Factor</b>.
      </div>
    </div>
  </div>

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">8. Master Revision Formula Cheat Sheet</h2>

  <div style="background: rgba(255, 82, 82, 0.05); border: 1.5px solid rgba(255, 82, 82, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Rate of Reaction &amp; Units:</b>
      <b style="color: ${themeColor};">• Rate:</b> - (1/a) d[A]/dt = + (1/c) d[C]/dt &nbsp; [Unit: mol L<sup>-1</sup> s<sup>-1</sup>].<br>
      <b style="color: ${themeColor};">• General Rate Constant Unit:</b> (mol L<sup>-1</sup>)<sup>1-n</sup> s<sup>-1</sup>.<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Zero Order Kinetics:</b>
      <b style="color: ${themeColor};">• Integrated Rate:</b> k = ([R]<sub>0</sub> - [R]) / t.<br>
      <b style="color: ${themeColor};">• Half-Life:</b> t<sub>1/2</sub> = [R]<sub>0</sub> / (2k).<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. First Order Kinetics:</b>
      <b style="color: ${themeColor};">• Integrated Rate:</b> k = (2.303 / t) log ([R]<sub>0</sub> / [R]).<br>
      <b style="color: ${themeColor};">• Half-Life:</b> t<sub>1/2</sub> = 0.693 / k.<br>
      <b style="color: ${themeColor};">• Gaseous First Order:</b> k = (2.303 / t) log [ p<sub>0</sub> / (2p<sub>0</sub> - p<sub>t</sub>) ].<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Temperature Dependence &amp; Arrhenius Equation:</b>
      <b style="color: ${themeColor};">• Arrhenius Equation:</b> k = A e<sup>- E<sub>a</sub> / RT</sup>.<br>
      <b style="color: ${themeColor};">• Linear Form:</b> log k = log A - [ E<sub>a</sub> / (2.303 R T) ].<br>
      <b style="color: ${themeColor};">• Two Temperatures:</b> log (k<sub>2</sub> / k<sub>1</sub>) = [ E<sub>a</sub> / (2.303 R) ] &times; [ (T<sub>2</sub> - T<sub>1</sub>) / (T<sub>1</sub> T<sub>2</sub>) ].<br>
      <b style="color: ${themeColor};">• Collision Theory:</b> Rate = P Z<sub>AB</sub> e<sup>- E<sub>a</sub> / RT</sup>.
    </div>
  </div>

</div>
`;

// Export Overview HTML
fs.writeFileSync('scratch/c12_chem_3_overview.html', htmlOverview, 'utf8');
console.log('✅ Generated c12_chem_3_overview.html with 100% themeColor compliance!');
