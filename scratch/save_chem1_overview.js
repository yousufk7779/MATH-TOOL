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

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 64, 129, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${defContent}</div>
  </div>`;
}

function analogyBox(title, text) {
  return `
  <div style="background: rgba(56, 189, 248, 0.08); border-left: 4.5px solid #38BDF8; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #38BDF8; font-size: 16.5px; display: block; margin-bottom: 6px;">💡 REAL-WORLD INTUITION &amp; ANALOGY: ${title}</b>
    <div style="color: #E2E8F0; font-size: 15.5px; line-height: 1.65;">${text}</div>
  </div>`;
}

function stepDerivationBox(title, stepsHtml) {
  return `
  <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(255, 64, 129, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,64,129,0.3); padding-bottom: 6px;">
      📐 STEP-BY-STEP MATHEMATICAL DERIVATION: ${title}
    </div>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.75;">
      ${stepsHtml}
    </div>
  </div>`;
}

function examTrapBox(title, text) {
  return `
  <div style="background: rgba(239, 68, 68, 0.08); border-left: 4.5px solid #EF4444; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #EF4444; font-size: 16.5px; display: block; margin-bottom: 6px;">⚠️ BOARD EXAM TRAP &amp; COMMON MISCONCEPTION: ${title}</b>
    <div style="color: #FEE2E2; font-size: 15.5px; line-height: 1.65;">${text}</div>
  </div>`;
}

function solvedExampleBox(title, prob, sol) {
  return `
  <div style="background: rgba(59, 130, 246, 0.08); border-left: 4.5px solid #3B82F6; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #3B82F6; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 WORKED BOARD NUMERICAL EXAMPLE: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65; margin-bottom: 8px;"><b>Problem:</b> ${prob}</div>
    <div style="color: #93C5FD; font-size: 15px; line-height: 1.65; background: rgba(0,0,0,0.25); padding: 10px; border-radius: 6px;"><b>Step-by-Step Solution:</b><br>${sol}</div>
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
  <div style="background: rgba(255, 64, 129, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit I: Solutions (JKBOSE / CBSE Official Syllabus - 07 Marks)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Solution &amp; Binary System:</b>
        <span style="color: #FFFFFF;">Homogeneous mixture of two or more chemically non-reacting substances whose composition can be varied within certain limits. Binary solution consists of 1 solvent and 1 solute.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Henry's Law Constant (K<sub>H</sub>):</b>
        <span style="color: #FFFFFF;">Proportionality factor in p = K<sub>H</sub> &chi;. Higher K<sub>H</sub> at a given pressure means lower solubility of the gas in the liquid. K<sub>H</sub> increases with temperature.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Raoult's Law (Volatile Liquid):</b>
        <span style="color: #FFFFFF;">For a solution of volatile liquids, partial vapour pressure of each component is equal to vapour pressure of pure component multiplied by its mole fraction: p<sub>i</sub> = p<sub>i</sub>&deg; &chi;<sub>i</sub>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Colligative Properties:</b>
        <span style="color: #FFFFFF;">Properties of dilute solutions that depend solely on the number of solute particles (ions/molecules) present and not on their chemical nature or identity.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Molal Boiling Point Elevation Constant (K<sub>b</sub>):</b>
        <span style="color: #FFFFFF;">Elevation in boiling point when 1 mole of non-volatile solute is dissolved in 1 kg (1000 g) of solvent. Also called Ebullioscopic Constant [Unit: K kg mol<sup>-1</sup>].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Van't Hoff Factor (i):</b>
        <span style="color: #FFFFFF;">Ratio of experimental/observed colligative property to theoretical/calculated colligative property: i = Normal Molar Mass / Abnormal Molar Mass.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">1. Types of Solutions &amp; General Concepts</h2>

  <p>In our daily life, we rarely come across pure substances; most of them are mixtures containing two or more pure chemical substances. Their utility in life or application in industry depends upon their exact composition. For example, the properties of brass (mixture of copper and zinc) are quite different from those of German silver (copper, zinc and nickel) or bronze (copper and tin). 1 part per million (ppm) of fluoride ions in water prevents tooth decay, whereas 1.5 ppm causes tooth mottling, and high concentrations of fluoride ions act as poison.</p>

  ${defBox('Solution', `
    A <b>solution</b> is defined as a completely <b>homogeneous mixture</b> of two or more chemically non-reacting components whose physical composition and properties are uniform throughout the entire bulk phase.<br><br>
    &bull; <b>Solvent:</b> The component of the solution that is present in the largest quantity, or which determines the ultimate physical state (solid, liquid, or gas) in which the solution exists.<br>
    &bull; <b>Solute:</b> One or more components present in smaller quantities than the solvent, dissolved homogeneously within the solvent.<br>
    &bull; <b>Binary Solution:</b> A solution composed of exactly two components (one solute and one solvent).
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Nine Types of Binary Solutions</h3>
  <p>Depending on the physical states of solute and solvent, solutions are classified into 9 fundamental categories:</p>

  <div style="overflow-x: auto; margin: 18px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14.5px; background: #0B0F19; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,64,129,0.3);">
      <thead>
        <tr style="background: rgba(255,64,129,0.25); color: #FF4081; font-weight: bold; border-bottom: 2px solid #FF4081;">
          <th style="padding: 10px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Type of Solution</th>
          <th style="padding: 10px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Solute</th>
          <th style="padding: 10px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Solvent</th>
          <th style="padding: 10px 12px;">Common Real-World Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td rowspan="3" style="padding: 10px 12px; font-weight: bold; color: #38BDF8; border-right: 1px solid rgba(255,255,255,0.1); background: rgba(56,189,248,0.05);"><b>Gaseous Solutions</b></td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Gas</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Gas</td>
          <td style="padding: 8px 12px;">Mixture of dinitrogen (N<sub>2</sub>) and dioxygen (O<sub>2</sub>) gases (Air)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Liquid</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Gas</td>
          <td style="padding: 8px 12px;">Chloroform (CHCl<sub>3</sub>) vapours mixed with nitrogen gas; Humidity in air</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Solid</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Gas</td>
          <td style="padding: 8px 12px;">Camphor vapours in nitrogen gas; Iodine vapours in air</td>
        </tr>

        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td rowspan="3" style="padding: 10px 12px; font-weight: bold; color: #4ADE80; border-right: 1px solid rgba(255,255,255,0.1); background: rgba(74,222,128,0.05);"><b>Liquid Solutions</b></td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Gas</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Liquid</td>
          <td style="padding: 8px 12px;">Oxygen dissolved in water (sustains aquatic life); Carbon dioxide in soda water</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Liquid</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Liquid</td>
          <td style="padding: 8px 12px;">Ethanol dissolved in water; Acetic acid in water (Vinegar)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Solid</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Liquid</td>
          <td style="padding: 8px 12px;">Glucose dissolved in water; Sodium chloride (NaCl) in water</td>
        </tr>

        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td rowspan="3" style="padding: 10px 12px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1); background: rgba(253,200,48,0.05);"><b>Solid Solutions</b></td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Gas</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Solid</td>
          <td style="padding: 8px 12px;">Solution of Hydrogen (H<sub>2</sub>) gas in Palladium metal (adsorption/occlusion)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Liquid</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Solid</td>
          <td style="padding: 8px 12px;">Amalgam of mercury (liquid Hg) with sodium (solid Na metal)</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Solid</td>
          <td style="padding: 8px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Solid</td>
          <td style="padding: 8px 12px;">Copper dissolved in Gold (22 Karat ornamental gold); Brass (Cu + Zn)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">2. Expression of Concentration of Solutions of Solids in Liquids</h2>

  <p>The concentration of a solution is defined as the amount of solute present in a given quantity of solution or solvent. Concentration can be expressed quantitatively in exact mathematical units:</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Mass Percentage (w/w), Volume Percentage (v/v) &amp; Mass by Volume (w/V)</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b>Mass Percentage (w/w):</b> Mass of solute present in 100 g of solution:
      ${eqBox(`\\text{Mass \\% of A} = ${frac('\\text{Mass of component A}', '\\text{Total mass of solution}')} \\times 100`)}
      <i>Example: 10% glucose solution by mass means 10 g glucose dissolved in 90 g water (total 100 g solution).</i>
    </li>
    <li><b>Volume Percentage (v/v):</b> Volume of solute present in 100 mL of solution:
      ${eqBox(`\\text{Volume \\% of A} = ${frac('\\text{Volume of component A}', '\\text{Total volume of solution}')} \\times 100`)}
      <i>Example: 35% (v/v) solution of ethylene glycol in water is used as anti-freeze in car cooling systems (lowers freezing point of water to -17.6 &deg;C / 255.4 K).</i>
    </li>
    <li><b>Mass by Volume Percentage (w/V):</b> Mass of solute dissolved in 100 mL of solution:
      ${eqBox(`\\text{Mass by Volume \\% (w/V)} = ${frac('\\text{Mass of solute (in g)}', '\\text{Volume of solution (in mL)}')} \\times 100`)}
      <i>Commonly used in medicine and pharmacy (e.g. 0.9% w/V saline solution).</i>
    </li>
    <li><b>Parts Per Million (ppm):</b> Used when solute is present in trace quantities:
      ${eqBox(`\\text{ppm of A} = ${frac('\\text{Number of parts of component A}', '\\text{Total number of parts of all components of solution}')} \\times 10<sup>6</sup>`)}
    </li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Mole Fraction (&chi;)</h3>
  ${defBox('Mole Fraction (&chi;)', `
    The ratio of the number of moles of one particular component to the total number of moles of all components present in the solution.<br><br>
    For a binary solution containing <i>n<sub>A</sub></i> moles of solvent and <i>n<sub>B</sub></i> moles of solute:
    ${eqBox(`\\chi_A = ${frac('n_A', 'n_A + n_B')} \\qquad | \\qquad \\chi_B = ${frac('n_B', 'n_A + n_B')}`)}
    <b>Fundamental Invariant:</b> The sum of mole fractions of all components in any solution is strictly equal to unity:
    ${eqBox(`\\sum_{i=1}^k \\chi_i = \\chi_A + \\chi_B = 1`)}
    <b>Property:</b> Mole fraction is a dimensionless unit and is <b>strictly independent of temperature</b>.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Molarity (M) vs Molality (m)</h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 64, 129, 0.4); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 18px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 6px;">Molarity (M) [Temperature Dependent]</b>
      <div style="color: #FFFFFF; font-size: 14.5px; line-height: 1.65;">
        Defined as the number of moles of solute dissolved in <b>1 Litre (1000 mL)</b> of solution:
        ${eqBox(`M = ${frac('n_B', 'V_{\\text{solution (L)}')} = ${frac('w_B \\times 1000', 'M_B \\times V_{\\text{(mL)}')}`)}
        <b>Unit:</b> <b>mol L<sup>-1</sup></b> or <b>Molar (M)</b>.<br>
        ⚠️ <b>Temperature Dependence:</b> Since volume expands/contracts with temperature (<i>V &prop; T</i>), Molarity <b>changes with temperature</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(74, 222, 128, 0.4); border-left: 5px solid #4ADE80; border-radius: 8px; padding: 14px 18px;">
      <b style="color: #4ADE80; font-size: 16px; display: block; margin-bottom: 6px;">Molality (m) [Temperature Independent]</b>
      <div style="color: #FFFFFF; font-size: 14.5px; line-height: 1.65;">
        Defined as the number of moles of solute dissolved in <b>1 Kilogram (1000 g)</b> of solvent:
        ${eqBox(`m = ${frac('n_B', 'w_A \\text{ (in kg)}')} = ${frac('w_B \\times 1000', 'M_B \\times w_A \\text{ (in g)}')}`)}
        <b>Unit:</b> <b>mol kg<sup>-1</sup></b> or <b>Molal (m)</b>.<br>
        ✅ <b>Temperature Independence:</b> Since mass does not depend on temperature, Molality is <b>constant at all temperatures</b>.
      </div>
    </div>
  </div>

  ${examTrapBox('Molarity vs Molality Preference', `
    <b>Board Question:</b> Why is Molality preferred over Molarity in expressing concentration in physical chemistry and colligative properties?<br>
    <b>Answer:</b> Molarity depends on solution volume, which varies with temperature due to thermal expansion. Molality depends on solvent mass, which is strictly temperature-invariant.
  `)}

  ${solvedExampleBox('Molarity and Molality Calculation',
    'Calculate the molarity and molality of a 20% (w/w) aqueous solution of potassium iodide (KI), given the density of the solution is 1.202 g mL<sup>-1</sup>. (Molar mass of KI = 166 g mol<sup>-1</sup>).',
    `<b>Step 1:</b> 20% (w/w) KI means 20 g of KI (w_B) in 80 g of water (w_A), total solution = 100 g.<br>
     <b>Step 2 (Moles of KI):</b> n_B = 20 / 166 = 0.1205 mol.<br>
     <b>Step 3 (Molality m):</b> m = (0.1205 / 80) &times; 1000 = <b>1.506 mol kg<sup>-1</sup> (1.51 m)</b>.<br>
     <b>Step 4 (Volume V):</b> V = Mass / Density = 100 / 1.202 = 83.19 mL = 0.0832 L.<br>
     <b>Step 5 (Molarity M):</b> M = 0.1205 / 0.0832 = <b>1.448 mol L<sup>-1</sup> (1.45 M)</b>.`
  )}

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">3. Solubility of Gases in Liquids &amp; Henry's Law</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Factors Affecting Gas Solubility in Liquids</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b>Nature of Gas and Solvent:</b> Polar gases (like HCl, NH<sub>3</sub>, SO<sub>2</sub>) which chemically react or ionize in polar water exhibit very high solubility, whereas non-polar gases (like O<sub>2</sub>, N<sub>2</sub>, He) have low solubility.</li>
    <li><b>Effect of Temperature:</b> Dissolution of a gas in a liquid is an <b>exothermic process</b>:
      ${eqBox(`\\text{Gas} + \\text{Liquid Solvent} \\rightleftharpoons \\text{Solution} + \\text{Heat} \\quad (\\Delta H_{\\text{solution}} < 0)`)}
      By <b>Le Chatelier's Principle</b>, increasing temperature shifts equilibrium backwards, so <b>gas solubility decreases with rising temperature</b>.<br>
      <i>Aquatic species thrive in cold water because cold water holds significantly higher dissolved oxygen than warm water.</i>
    </li>
    <li><b>Effect of Pressure (Henry's Law):</b> Gas solubility increases proportionally with partial pressure above the liquid.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Henry's Law &amp; Its Mathematical Formulation</h3>
  ${defBox("Henry's Law (1803)", `
    <b>Henry's Law:</b> <i>At constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of the liquid or solution.</i><br><br>
    In terms of mole fraction (&chi;) of the dissolved gas:
    ${eqBox(`<b>p = K_H \\chi</b>`)}
    where <i>p</i> = Partial pressure of gas in vapour phase, <i>&chi;</i> = Mole fraction of dissolved gas, <i>K<sub>H</sub></i> = <b>Henry's Law Constant</b>.
  `)}

  <div style="background: rgba(15, 23, 42, 0.8); border: 1.2px solid rgba(255, 64, 129, 0.35); border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 16px;">🔑 Crucial Properties of Henry's Law Constant (K<sub>H</sub>):</b>
    <ul style="margin: 8px 0 0 20px; line-height: 1.8; color: #FFFFFF;">
      <li>1. <i>K<sub>H</sub></i> depends on the <b>nature of the gas</b>.</li>
      <li>2. At a given pressure <i>p</i>, <b>higher the value of K<sub>H</sub>, lower is the solubility</b> of the gas.</li>
      <li>3. The value of <i>K<sub>H</sub></i> <b>increases with increase in temperature</b>.</li>
    </ul>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Practical Applications of Henry's Law</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #38BDF8; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #38BDF8; font-size: 15px; display: block; margin-bottom: 4px;">1. Carbonated Beverages:</b>
      <span style="color: #E2E8F0; font-size: 14px;">Soda water bottles are sealed under high pressure to increase CO<sub>2</sub> solubility.</span>
    </div>
    <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #4ADE80; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4ADE80; font-size: 15px; display: block; margin-bottom: 4px;">2. Scuba Diving &amp; The Bends:</b>
      <span style="color: #E2E8F0; font-size: 14px;">Tanks are diluted with Helium (<b>11.7% He, 56.2% N<sub>2</sub>, 32.1% O<sub>2</sub></b>) to prevent painful N<sub>2</sub> bubble blockage in blood vessels (bends).</span>
    </div>
    <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #FDC830; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #FDC830; font-size: 15px; display: block; margin-bottom: 4px;">3. High Altitude Anoxia:</b>
      <span style="color: #E2E8F0; font-size: 14px;">Low atmospheric pO<sub>2</sub> at high altitudes causes low blood oxygen, resulting in dizziness and mental confusion (Anoxia).</span>
    </div>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">4. Solid Solutions</h2>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b>1. Substitutional Solid Solutions:</b> Solute atoms replace solvent atoms in parent crystal lattice (atomic radii difference &lt;15%). Examples: <i>Brass (Cu + Zn), Bronze (Cu + Sn), Monel metal (Ni + Cu), 22-Karat Gold (Cu in Au).</i></li>
    <li><b>2. Interstitial Solid Solutions:</b> Small solute atoms (C, H, B, N) occupy the interstitial voids of metal host lattice. Examples: <i>Carbon Steel (C in Fe lattice), Tungsten Carbide (WC).</i></li>
  </ul>

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">5. Vapour Pressure of Liquid Solutions &amp; Raoult's Law</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Raoult's Law for Binary Volatile Liquids</h3>
  ${defBox("Raoult's Law for Volatile Solutes", `
    <b>Raoult's Law:</b> <i>For a solution of volatile liquids, the partial vapour pressure of each component at a given temperature is equal to the product of vapour pressure of pure component and its mole fraction:</i>
    ${eqBox(`<b>p_A = p_A&deg; \\chi_A \\qquad | \\qquad p_B = p_B&deg; \\chi_B</b>`)}
    Total vapour pressure by Dalton's law:
    ${eqBox(`p_{\\text{total}} = p_A + p_B = p_A&deg; \\chi_A + p_B&deg; \\chi_B = <b>p_A&deg; + (p_B&deg; - p_A&deg;) \\chi_B</b>`)}
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Composition of Vapour Phase (Dalton's Law)</h3>
  ${eqBox(`y_A = ${frac('p_A', 'p_{\\text{total}}')} = ${frac('p_A&deg; \\chi_A', 'p_A + p_B')} \\qquad | \\qquad y_B = ${frac('p_B', 'p_{\\text{total}}')} = ${frac('p_B&deg; \\chi_B', 'p_A + p_B')}`)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Raoult's Law as a Special Case of Henry's Law</h3>
  <p>According to Raoult's law: <i>p = p&deg; &chi;</i>. According to Henry's law: <i>p = K<sub>H</sub> &chi;</i>. Both state partial pressure is proportional to mole fraction. When <b>K<sub>H</sub> = p&deg;</b>, Raoult's law becomes a special case of Henry's law.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Raoult's Law for Non-Volatile Solutes (Relative Lowering of Vapour Pressure)</h3>
  <p>Non-volatile solute molecules occupy surface sites, reducing solvent evaporation rate: <i>&Delta;p = p<sub>A</sub>&deg; - p = p<sub>A</sub>&deg; &chi;<sub>B</sub></i>.</p>
  ${eqBox(`<b>${frac('p_A&deg; - p', 'p_A&deg;')} = \\chi_B</b>`)}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">6. Ideal &amp; Non-Ideal Solutions, Deviations &amp; Azeotropes</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Ideal Solutions</h3>
  ${defBox('Ideal Solution', `
    An <b>Ideal Solution</b> obeys Raoult's law strictly at all concentrations and temperatures.<br>
    &bull; <i>p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub></i>, <i>p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub></i>.<br>
    &bull; <b>&Delta;H<sub>mix</sub> = 0</b> (no heat absorbed or evolved).<br>
    &bull; <b>&Delta;V<sub>mix</sub> = 0</b> (no volume change on mixing).<br>
    &bull; <b>Intermolecular forces:</b> <b>F<sub>A-B</sub> &approx; F<sub>A-A</sub> &approx; F<sub>B-B</sub></b>.<br>
    <i>Examples: n-Hexane + n-Heptane, Bromoethane + Chloroethane, Benzene + Toluene.</i>
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Non-Ideal Solutions: Positive &amp; Negative Deviations</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.9); border: 1.2px solid rgba(255, 64, 129, 0.4); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 18px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 6px;">Positive Deviation from Raoult's Law</b>
      <div style="color: #FFFFFF; font-size: 14.5px; line-height: 1.65;">
        &bull; <b>Forces:</b> F<sub>A-B</sub> &lt; F<sub>A-A</sub>, F<sub>B-B</sub> (Weaker).<br>
        &bull; <b>Vapour Pressure:</b> p<sub>total</sub> &gt; p<sub>A</sub>&deg;&chi;<sub>A</sub> + p<sub>B</sub>&deg;&chi;<sub>B</sub>.<br>
        &bull; <b>Thermodynamics:</b> &Delta;H<sub>mix</sub> &gt; 0, &Delta;V<sub>mix</sub> &gt; 0.<br>
        &bull; <b>Examples:</b> Ethanol + Acetone, CS<sub>2</sub> + Acetone, Ethanol + Water.<br>
        &bull; <b>Azeotrope:</b> <b>Minimum Boiling Azeotrope</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.9); border: 1.2px solid rgba(56, 189, 248, 0.4); border-left: 5px solid #38BDF8; border-radius: 8px; padding: 14px 18px;">
      <b style="color: #38BDF8; font-size: 16px; display: block; margin-bottom: 6px;">Negative Deviation from Raoult's Law</b>
      <div style="color: #FFFFFF; font-size: 14.5px; line-height: 1.65;">
        &bull; <b>Forces:</b> F<sub>A-B</sub> &gt; F<sub>A-A</sub>, F<sub>B-B</sub> (Stronger due to H-bonding).<br>
        &bull; <b>Vapour Pressure:</b> p<sub>total</sub> &lt; p<sub>A</sub>&deg;&chi;<sub>A</sub> + p<sub>B</sub>&deg;&chi;<sub>B</sub>.<br>
        &bull; <b>Thermodynamics:</b> &Delta;H<sub>mix</sub> &lt; 0, &Delta;V<sub>mix</sub> &lt; 0.<br>
        &bull; <b>Examples:</b> Chloroform + Acetone (C-H&bull;&bull;&bull;O=C H-bond), Phenol + Aniline, HNO<sub>3</sub> + Water (68%).<br>
        &bull; <b>Azeotrope:</b> <b>Maximum Boiling Azeotrope</b>.
      </div>
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Azeotropes (Constant Boiling Mixtures)</h3>
  ${defBox('Azeotrope', `
    <b>Azeotropes</b> are binary liquid mixtures having identical liquid and vapour compositions that boil at a constant temperature. They cannot be separated by fractional distillation.<br>
    &bull; <b>Minimum Boiling Azeotrope:</b> Formed by large positive deviation solutions (e.g. 95.4% Ethanol + 4.6% Water boils at 351.15 K).<br>
    &bull; <b>Maximum Boiling Azeotrope:</b> Formed by large negative deviation solutions (e.g. 68% HNO<sub>3</sub> + 32% Water boils at 393.5 K).
  `)}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">7. Colligative Properties &amp; Determination of Molar Mass</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Relative Lowering of Vapour Pressure (RLVP)</h3>
  ${stepDerivationBox('Molar Mass from Relative Lowering of Vapour Pressure', `
    For dilute solutions (<i>n<sub>B</sub> &ll; n<sub>A</sub></i>):
    ${eqBox(`${frac('p_A&deg; - p', 'p_A&deg;')} = \\chi_B \\approx ${frac('n_B', 'n_A')} = ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\times M_A', 'M_B \\times w_A')}`)}
    ${eqBox(`<b>M_B = ${frac('w_B \\times M_A', 'w_A')} \\times ${frac('p_A&deg;', 'p_A&deg; - p')}</b>`)}
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Elevation of Boiling Point (&Delta;T<sub>b</sub>)</h3>
  <p>Boiling point is the temperature at which liquid vapour pressure equals atmospheric pressure. Adding a non-volatile solute lowers vapour pressure, elevating the boiling point: <b>&Delta;T<sub>b</sub> = T<sub>b</sub> - T<sub>b</sub>&deg;</b>.</p>

  ${stepDerivationBox('Elevation of Boiling Point &amp; Ebullioscopic Constant (K<sub>b</sub>)', `
    ${eqBox(`\\Delta T_b = K_b m = K_b \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')} &implies; <b>M_B = ${frac('1000 \\times K_b \\times w_B', '\\Delta T_b \\times w_A')}</b>`)}
    <b>Ebullioscopic Constant (K<sub>b</sub>):</b> Elevation in boiling point for a 1 molal solution. Unit: <b>K kg mol<sup>-1</sup></b>. For water, <i>K<sub>b</sub> = 0.52 K kg mol<sup>-1</sup></i>.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Depression of Freezing Point (&Delta;T<sub>f</sub>)</h3>
  <p>Freezing point is the temperature at which liquid and solid have identical vapour pressures: <b>&Delta;T<sub>f</sub> = T<sub>f</sub>&deg; - T<sub>f</sub></b>.</p>

  ${stepDerivationBox('Depression of Freezing Point &amp; Cryoscopic Constant (K<sub>f</sub>)', `
    ${eqBox(`\\Delta T_f = K_f m = K_f \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')} &implies; <b>M_B = ${frac('1000 \\times K_f \\times w_B', '\\Delta T_f \\times w_A')}</b>`)}
    <b>Cryoscopic Constant (K<sub>f</sub>):</b> Depression in freezing point for a 1 molal solution. Unit: <b>K kg mol<sup>-1</sup></b>. For water, <i>K<sub>f</sub> = 1.86 K kg mol<sup>-1</sup></i>.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Osmosis &amp; Osmotic Pressure (&Pi;)</h3>
  ${defBox('Osmotic Pressure (&Pi;)', `
    <b>Osmotic Pressure (&Pi;):</b> The minimum excess pressure applied to the solution to prevent inward osmosis of solvent through a semipermeable membrane (SPM).<br><br>
    <b>Van't Hoff Equation:</b>
    ${eqBox(`<b>\\Pi = C R T = ${frac('n_B', 'V')} R T = ${frac('w_B R T', 'M_B V')} &implies; M_B = ${frac('w_B R T', '\\Pi V')}</b>`)}
    <b>Superiority for Polymers &amp; Biomolecules:</b> Measured at room temperature (avoids denaturation), has easily readable magnitude even at 10<sup>-4</sup> M dilution, and uses Molarity.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(v) Isotonic Solutions &amp; Reverse Osmosis</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b>Isotonic Solutions:</b> Equal osmotic pressure (&Pi;<sub>1</sub> = &Pi;<sub>2</sub>). <i>0.9% (w/V) NaCl (normal saline) is isotonic with human RBC fluid.</i></li>
    <li><b>Hypertonic (&gt;0.9% NaCl):</b> Water leaves RBCs by exosmosis &rarr; cell shrinks (<b>Plasmolysis/Crenation</b>).</li>
    <li><b>Hypotonic (&lt;0.9% NaCl):</b> Water enters RBCs by endosmosis &rarr; cell swells and bursts (<b>Hemolysis</b>).</li>
    <li><b>Reverse Osmosis (RO):</b> Applying pressure <i>P &gt; &Pi;</i> forces pure solvent out of saline solution across SPM into fresh water (Desalination).</li>
  </ul>

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">8. Abnormal Molecular Mass &amp; Van't Hoff Factor (i)</h2>

  ${defBox("Van't Hoff Factor (i)", `
    ${eqBox(`i = ${frac('\\text{Observed Colligative Property}', '\\text{Calculated Colligative Property}')} = ${frac('\\text{Normal Molar Mass}', '\\text{Abnormal Molar Mass}')} = ${frac('\\text{Total moles of particles after dissociation/association}', '\\text{Total moles of particles initially}')}`)}
    &bull; Non-electrolyte: <b>i = 1</b>.<br>
    &bull; Dissociation (Electrolytes): <b>i &gt; 1</b> &implies; <b>&alpha; = (i - 1) / (n - 1)</b>.<br>
    &bull; Association (Dimerization): <b>i &lt; 1</b> &implies; <b>&alpha; = (1 - i) / (1 - 1/n) = (1 - i)n / (n - 1)</b>.
  `)}

  <!-- SECTION 9 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">9. Master Comparison Matrices</h2>

  <div style="overflow-x: auto; margin: 18px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; background: #0B0F19; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,64,129,0.3);">
      <thead>
        <tr style="background: rgba(255,64,129,0.25); color: #FF4081; font-weight: bold; border-bottom: 2px solid #FF4081;">
          <th style="padding: 10px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Parameter</th>
          <th style="padding: 10px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Ideal Solution</th>
          <th style="padding: 10px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Positive Deviation</th>
          <th style="padding: 10px 12px;">Negative Deviation</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px 12px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1);">Intermolecular Forces</td>
          <td style="padding: 9px 12px; border-right: 1px solid rgba(255,255,255,0.1);">F<sub>A-B</sub> = F<sub>A-A</sub> = F<sub>B-B</sub></td>
          <td style="padding: 9px 12px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">F<sub>A-B</sub> &lt; F<sub>A-A</sub>, F<sub>B-B</sub> (Weaker)</td>
          <td style="padding: 9px 12px; color: #38BDF8;">F<sub>A-B</sub> &gt; F<sub>A-A</sub>, F<sub>B-B</sub> (Stronger)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 9px 12px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1);">Raoult's Law</td>
          <td style="padding: 9px 12px; border-right: 1px solid rgba(255,255,255,0.1);">p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub></td>
          <td style="padding: 9px 12px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">p<sub>A</sub> &gt; p<sub>A</sub>&deg; &chi;<sub>A</sub></td>
          <td style="padding: 9px 12px; color: #38BDF8;">p<sub>A</sub> &lt; p<sub>A</sub>&deg; &chi;<sub>A</sub></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px 12px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;H<sub>mixing</sub></td>
          <td style="padding: 9px 12px; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;H = 0</td>
          <td style="padding: 9px 12px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;H &gt; 0 (Endothermic)</td>
          <td style="padding: 9px 12px; color: #38BDF8;">&Delta;H &lt; 0 (Exothermic)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 9px 12px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;V<sub>mixing</sub></td>
          <td style="padding: 9px 12px; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;V = 0</td>
          <td style="padding: 9px 12px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;V &gt; 0 (Expansion)</td>
          <td style="padding: 9px 12px; color: #38BDF8;">&Delta;V &lt; 0 (Contraction)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px 12px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1);">Azeotrope Type</td>
          <td style="padding: 9px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Does not form azeotrope</td>
          <td style="padding: 9px 12px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">Minimum Boiling Azeotrope</td>
          <td style="padding: 9px 12px; color: #38BDF8;">Maximum Boiling Azeotrope</td>
        </tr>
        <tr>
          <td style="padding: 9px 12px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1);">Representative System</td>
          <td style="padding: 9px 12px; border-right: 1px solid rgba(255,255,255,0.1);">Benzene + Toluene</td>
          <td style="padding: 9px 12px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">Ethanol + Acetone</td>
          <td style="padding: 9px 12px; color: #38BDF8;">Chloroform + Acetone</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 10 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">10. Master Revision Formula Cheat Sheet</h2>

  <div style="background: rgba(255, 64, 129, 0.05); border: 1.5px solid rgba(255, 64, 129, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Concentration Units &amp; Invariants:</b>
      &bull; <b>Mass % (w/w):</b> [ w<sub>B</sub> / (w<sub>A</sub> + w<sub>B</sub>) ] &times; 100.<br>
      &bull; <b>ppm:</b> [ w<sub>B</sub> / (w<sub>A</sub> + w<sub>B</sub>) ] &times; 10<sup>6</sup>.<br>
      &bull; <b>Mole Fraction:</b> &chi;<sub>A</sub> = n<sub>A</sub> / (n<sub>A</sub> + n<sub>B</sub>) &nbsp;|&nbsp; &chi;<sub>B</sub> = n<sub>B</sub> / (n<sub>A</sub> + n<sub>B</sub>) &nbsp;|&nbsp; <b>&Sigma; &chi;<sub>i</sub> = 1</b> (Temp Independent).<br>
      &bull; <b>Molarity (M):</b> M = (w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; V<sub>mL</sub>) [mol L<sup>-1</sup>, Temp Dependent].<br>
      &bull; <b>Molality (m):</b> m = (w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; w<sub>A(g)</sub>) [mol kg<sup>-1</sup>, Temp Independent].<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Gas Solubility &amp; Raoult's Law:</b>
      &bull; <b>Henry's Law:</b> p = K<sub>H</sub> &chi; &nbsp;|&nbsp; Higher K<sub>H</sub> &implies; Lower gas solubility.<br>
      &bull; <b>Raoult's Law (Volatiles):</b> p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> &nbsp;|&nbsp; p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub> &nbsp;|&nbsp; p<sub>total</sub> = p<sub>A</sub>&deg; + (p<sub>B</sub>&deg; - p<sub>A</sub>&deg;) &chi;<sub>B</sub>.<br>
      &bull; <b>Vapour Phase Mole Fraction:</b> y<sub>A</sub> = p<sub>A</sub> / p<sub>total</sub> &nbsp;|&nbsp; y<sub>B</sub> = p<sub>B</sub> / p<sub>total</sub>.<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Colligative Properties (For Non-Electrolytes, i = 1):</b>
      &bull; <b>RLVP:</b> (p<sub>A</sub>&deg; - p) / p<sub>A</sub>&deg; = &chi;<sub>B</sub> &approx; (w<sub>B</sub> M<sub>A</sub>) / (M<sub>B</sub> w<sub>A</sub>).<br>
      &bull; <b>Boiling Elevation:</b> &Delta;T<sub>b</sub> = T<sub>b</sub> - T<sub>b</sub>&deg; = K<sub>b</sub> m = K<sub>b</sub> [ (w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; w<sub>A</sub>) ].<br>
      &bull; <b>Freezing Depression:</b> &Delta;T<sub>f</sub> = T<sub>f</sub>&deg; - T<sub>f</sub> = K<sub>f</sub> m = K<sub>f</sub> [ (w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; w<sub>A</sub>) ].<br>
      &bull; <b>Osmotic Pressure:</b> &Pi; = C R T = (w<sub>B</sub> R T) / (M<sub>B</sub> V).<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Abnormal Molar Masses &amp; Van't Hoff Factor (i):</b>
      &bull; <b>Van't Hoff Factor:</b> i = Observed Colligative / Calculated Colligative = Normal M<sub>B</sub> / Observed M<sub>B</sub>.<br>
      &bull; <b>Degree of Dissociation (&alpha;):</b> &alpha; = (i - 1) / (n - 1) &implies; i = 1 + (n - 1)&alpha;.<br>
      &bull; <b>Degree of Association (&alpha;):</b> &alpha; = (1 - i) / (1 - 1/n) &implies; i = 1 - &alpha;(1 - 1/n).<br>
      &bull; <b>Universal Modified Equations:</b><br>
      &nbsp;&nbsp;&bull; (p<sub>A</sub>&deg; - p) / p<sub>A</sub>&deg; = i &chi;<sub>B</sub><br>
      &nbsp;&nbsp;&bull; &Delta;T<sub>b</sub> = i K<sub>b</sub> m<br>
      &nbsp;&nbsp;&bull; &Delta;T<sub>f</sub> = i K<sub>f</sub> m<br>
      &nbsp;&nbsp;&bull; &Pi; = i C R T
    </div>
  </div>

</div>
`;

// Write overview to intermediate json
fs.writeFileSync('d:\\All NCERT SOLUTIONS11\\scratch\\c12_chem_1_overview.json', JSON.stringify(htmlOverview), 'utf8');
console.log("Overview saved to scratch JSON.");
