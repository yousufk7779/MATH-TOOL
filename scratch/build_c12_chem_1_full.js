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

  <p>In our daily life, we rarely come across pure substances; most of them are mixtures containing two or more pure chemical substances. Their utility in life or application in industry depends upon their exact composition. For example, the properties of brass (mixture of copper and zinc) are quite different from those of German silver (copper, zinc and nickel) or bronze (copper and tin). 1 part per million (ppm) of fluoride ions in water prevents tooth decay, whereas 1.5 ppm causes tooth mottling, and high concentrations of fluoride ions (such as sodium fluoride) act as deadly rat poison.</p>

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

  <p>The concentration of a solution is defined as the amount of solute present in a given quantity of solution or solvent. Concentration can be expressed either qualitatively (dilute vs concentrated) or quantitatively in exact mathematical units:</p>

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
    <li><b>Parts Per Million (ppm):</b> Used when solute is present in trace quantities (water pollutants, atmospheric air quality):
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
        ✅ <b>Temperature Independence:</b> Since mass does not depend on temperature, Molality is <b>constant at all temperatures</b>. (Preferred in thermodynamics).
      </div>
    </div>
  </div>

  ${examTrapBox('Molarity vs Molality: Which is preferred and why?', `
    <b>Question:</b> Why is Molality (m) preferred over Molarity (M) in expressing the concentration of solutions in colligative properties and high-precision physical chemistry?<br>
    <b>Answer:</b> Molarity depends on the volume of the solution, which changes with temperature due to thermal expansion/contraction of liquids. In contrast, Molality depends on the mass of solvent, which is completely independent of temperature. Hence, molality remains invariant during temperature changes.
  `)}

  ${solvedExampleBox('Molarity and Molality Calculation',
    'Calculate the molarity and molality of a 20% (w/w) aqueous solution of potassium iodide (KI), given the density of the solution is 1.202 g mL<sup>-1</sup>. (Molar mass of KI = 39 + 127 = 166 g mol<sup>-1</sup>).',
    `<b>Step 1 (Find masses):</b> 20% (w/w) KI means 20 g of KI (solute w_B) is dissolved in 80 g of water (solvent w_A), making 100 g solution.<br>
     <b>Step 2 (Moles of KI, n_B):</b> n_B = 20 / 166 = 0.1205 mol.<br>
     <b>Step 3 (Calculate Molality m):</b> m = (n_B / w_A) &times; 1000 = (0.1205 / 80) &times; 1000 = <b>1.506 mol kg<sup>-1</sup> (1.51 m)</b>.<br>
     <b>Step 4 (Volume of solution V):</b> V = Mass / Density = 100 g / 1.202 g mL<sup>-1</sup> = 83.19 mL = 0.0832 L.<br>
     <b>Step 5 (Calculate Molarity M):</b> M = n_B / V(L) = 0.1205 / 0.0832 = <b>1.448 mol L<sup>-1</sup> (1.45 M)</b>.`
  )}

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">3. Solubility of Gases in Liquids &amp; Henry's Law</h2>

  <p>Many gases dissolve in liquids. For example, oxygen dissolves only to a small extent in water (~8 mg L<sup>-1</sup> at 298 K), but this dissolved oxygen is vital for sustaining all aquatic flora and fauna. On the other hand, hydrogen chloride gas (HCl) or ammonia gas (NH<sub>3</sub>) is highly soluble in water.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Factors Affecting Gas Solubility in Liquids</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b>Nature of Gas and Solvent:</b> Chemically reactive or polar gases (like HCl, NH<sub>3</sub>, SO<sub>2</sub>) which ionize in polar water exhibit very high solubility, whereas non-polar gases (like O<sub>2</sub>, N<sub>2</sub>, He) have very low solubility.</li>
    <li><b>Effect of Temperature:</b> Dissolution of a gas in a liquid is an <b>exothermic process</b>:
      ${eqBox(`\\text{Gas} + \\text{Liquid Solvent} \\rightleftharpoons \\text{Solution} + \\text{Heat} \\quad (\\Delta H_{\\text{solution}} < 0)`)}
      According to <b>Le Chatelier's Principle</b>, as temperature increases, the equilibrium shifts in the reverse direction. Hence, <b>the solubility of gases in liquids decreases with increase in temperature</b>.<br>
      <i>Biological Significance: Aquatic animals are much more comfortable in cold water than in warm water because cold water holds significantly higher concentrations of dissolved oxygen.</i>
    </li>
    <li><b>Effect of Pressure (Henry's Law):</b> The solubility of a gas increases dramatically with an increase in pressure over the liquid surface.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Henry's Law &amp; Its Mathematical Formulation</h3>
  ${defBox("Henry's Law (1803)", `
    <b>Henry's Law:</b> <i>At constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of the liquid or solution.</i><br><br>
    In terms of mole fraction (&chi;) of the dissolved gas:
    ${eqBox(`<b>p = K_H \\chi</b>`)}
    where:
    &bull; <i>p</i> = Partial pressure of the gas in the vapour phase above the solution.<br>
    &bull; <i>&chi;</i> = Mole fraction of the gas in the liquid solution.<br>
    &bull; <i>K<sub>H</sub></i> = <b>Henry's Law Constant</b> (SI Unit: bar or atm or Pa).
  `)}

  <div style="background: rgba(15, 23, 42, 0.8); border: 1.2px solid rgba(255, 64, 129, 0.35); border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 16px;">🔑 Crucial Properties &amp; Significance of Henry's Law Constant (K<sub>H</sub>):</b>
    <ul style="margin: 8px 0 0 20px; line-height: 1.8; color: #FFFFFF;">
      <li>1. <i>K<sub>H</sub></i> is a function of the <b>nature of the gas</b>. Different gases have different <i>K<sub>H</sub></i> values in the same solvent.</li>
      <li>2. From <i>&chi; = p / K<sub>H</sub></i>, at a given pressure <i>p</i>, <b>higher the value of K<sub>H</sub>, lower is the solubility</b> of the gas in the liquid. (e.g. He has higher <i>K<sub>H</sub></i> than N<sub>2</sub>, so He is less soluble).</li>
      <li>3. The value of <i>K<sub>H</sub></i> <b>increases with increase in temperature</b>. This explains why gas solubility decreases with rising temperature.</li>
    </ul>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Practical &amp; Biological Applications of Henry's Law</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #38BDF8; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #38BDF8; font-size: 15px; display: block; margin-bottom: 4px;">1. Carbonated Soft Drinks &amp; Soda Water:</b>
      <span style="color: #E2E8F0; font-size: 14px;">To increase the solubility of CO<sub>2</sub> in soft drinks, soda water, and champagne, the bottles are sealed under very high pressure. When opened, pressure drops, CO<sub>2</sub> solubility decreases instantly, creating effervescence.</span>
    </div>
    <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #4ADE80; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4ADE80; font-size: 15px; display: block; margin-bottom: 4px;">2. Scuba Divers &amp; Prevention of 'The Bends':</b>
      <span style="color: #E2E8F0; font-size: 14px;">Under high underwater pressure, nitrogen dissolves abundantly in blood. When the diver ascends rapidly, pressure drops and dissolved N<sub>2</sub> bubbles out into blood vessels, causing excruciatingly painful and fatal capillary blockages called <b>Bends</b>. To prevent this, scuba tanks are filled with air diluted with Helium (<b>11.7% He, 56.2% N<sub>2</sub>, 32.1% O<sub>2</sub></b>), because He has very low blood solubility.</span>
    </div>
    <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #FDC830; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #FDC830; font-size: 15px; display: block; margin-bottom: 4px;">3. High Altitude Anoxia in Climbers:</b>
      <span style="color: #E2E8F0; font-size: 14px;">At high altitudes, atmospheric pressure is much lower than at sea level. The partial pressure of oxygen is low, leading to low oxygen concentration in the blood and tissues of mountain climbers. This causes weakness, dizziness, and impaired mental ability known as <b>Anoxia</b>.</span>
    </div>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">4. Solid Solutions</h2>
  <p>Solid solutions are homogeneous solid-state mixtures of two or more metals, or metals with non-metals (alloys). They are primarily divided into two structural classes:</p>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b>1. Substitutional Solid Solutions:</b> Solute atoms replace and substitute solvent atoms directly in the parent crystal lattice sites. This occurs when the atomic radii of solute and solvent differ by less than 15% (Hume-Rothery Rule).<br>
    <i>Examples: Brass (Zinc atoms replace Copper atoms in Cu lattice), Bronze (Copper + Tin), Monel metal (Nickel + Copper), 22-Karat Gold (Copper in Gold).</i></li>
    <li><b>2. Interstitial Solid Solutions:</b> Very small solute atoms (like Carbon, Hydrogen, Boron, or Nitrogen) occupy the empty tetrahedral or octahedral interstitial voids between the larger metal host atoms without displacing them.<br>
    <i>Examples: Carbon Steel (Carbon atoms trapped in interstitial voids of Iron lattice), Tungsten Carbide (WC).</i></li>
  </ul>

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">5. Vapour Pressure of Liquid Solutions &amp; Raoult's Law</h2>

  <p>Liquids placed in an evacuated closed container evaporate until a dynamic equilibrium is reached between vaporization and condensation. The pressure exerted by the vapours above the liquid surface in dynamic equilibrium with the liquid at a specified temperature is called the <b>Vapour Pressure</b> of the liquid.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Raoult's Law for Binary Solutions of Volatile Liquids</h3>
  <p>Consider a binary solution containing two volatile liquid components <i>A</i> (solvent) and <i>B</i> (solute) with mole fractions &chi;<sub>A</sub> and &chi;<sub>B</sub>.</p>

  ${defBox("Raoult's Law for Volatile Solutes (1886)", `
    <b>Raoult's Law:</b> <i>For a solution of volatile liquids, the partial vapour pressure of each component in the solution at a given temperature is directly proportional to its mole fraction in the liquid phase, and is equal to the product of the vapour pressure of that pure component and its mole fraction in the solution:</i>
    ${eqBox(`<b>p_A = p_A&deg; \\chi_A \\qquad | \\qquad p_B = p_B&deg; \\chi_B</b>`)}
    According to <b>Dalton's Law of Partial Pressures</b>, the total vapour pressure (<i>p<sub>total</sub></i>) exerted by the solution is:
    ${eqBox(`p_{\\text{total}} = p_A + p_B = p_A&deg; \\chi_A + p_B&deg; \\chi_B = p_A&deg; (1 - \\chi_B) + p_B&deg; \\chi_B = <b>p_A&deg; + (p_B&deg; - p_A&deg;) \\chi_B</b>`)}
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Composition of the Vapour Phase (Dalton's Law)</h3>
  <p>If <i>y<sub>A</sub></i> and <i>y<sub>B</sub></i> are the mole fractions of components A and B in the <b>vapour phase</b> at equilibrium, then by Dalton's law:</p>
  ${eqBox(`y_A = ${frac('p_A', 'p_{\\text{total}}')} = ${frac('p_A&deg; \\chi_A', 'p_A + p_B')} \\qquad | \\qquad y_B = ${frac('p_B', 'p_{\\text{total}}')} = ${frac('p_B&deg; \\chi_B', 'p_A + p_B')}`)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Raoult's Law as a Special Case of Henry's Law</h3>
  <p>According to Raoult's law: <i>p = p&deg; &chi;</i>.<br>According to Henry's law: <i>p = K<sub>H</sub> &chi;</i>.<br>Both laws state that the partial vapour pressure of the volatile component or gas is directly proportional to its mole fraction in solution. Only the proportionality constant differs: it is <b>p&deg;</b> for Raoult's law and <b>K<sub>H</sub></b> for Henry's law. Thus, Raoult's law becomes a special case of Henry's law in which <b>K<sub>H</sub> = p&deg;</b>.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Raoult's Law for Non-Volatile Solutes (Lowering of Vapour Pressure)</h3>
  <p>When a non-volatile, non-electrolyte solid solute (such as glucose, urea, or sucrose) is dissolved in a pure volatile solvent, solute particles occupy a fraction of the surface area. As a result, the rate of escape of solvent molecules into the vapour phase decreases, causing the vapour pressure of the solution (<i>p</i>) to be strictly lower than that of the pure solvent (<i>p<sub>A</sub>&deg;</i>):</p>
  ${eqBox(`p = p_A = p_A&deg; \\chi_A = p_A&deg; (1 - \\chi_B) = p_A&deg; - p_A&deg; \\chi_B &implies; <b>\\Delta p = p_A&deg; - p = p_A&deg; \\chi_B</b>`)}
  Dividing by <i>p<sub>A</sub>&deg;</i> yields the <b>Relative Lowering of Vapour Pressure (RLVP)</b>:
  ${eqBox(`<b>${frac('p_A&deg; - p', 'p_A&deg;')} = \\chi_B</b>`)}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">6. Ideal &amp; Non-Ideal Solutions, Deviations &amp; Azeotropes</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Ideal Solutions</h3>
  ${defBox('Ideal Solution', `
    An <b>Ideal Solution</b> is one that obeys Raoult's law strictly over the entire range of concentrations and at all temperatures.<br><br>
    <b>Thermodynamic &amp; Molecular Characteristics:</b>
    <ul style="margin: 6px 0 0 16px; line-height: 1.75;">
      <li>1. <b>Obeys Raoult's Law:</b> <i>p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub></i> and <i>p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub></i>.</li>
      <li>2. <b>Zero Enthalpy of Mixing:</b> &Delta;H<sub>mix</sub> = 0 (No heat is absorbed or evolved during dissolution).</li>
      <li>3. <b>Zero Volume Change on Mixing:</b> &Delta;V<sub>mix</sub> = 0 (Total volume equals exact sum of component volumes, e.g. 50 mL A + 50 mL B = 100 mL solution).</li>
      <li>4. <b>Equal Intermolecular Forces:</b> The attractive forces between unlike molecules (A-B) are identical in magnitude to the attractive forces between like molecules (A-A and B-B): <b>F<sub>A-B</sub> &approx; F<sub>A-A</sub> &approx; F<sub>B-B</sub></b>.</li>
    </ul>
    <b>Classic Examples:</b>
    &bull; n-Hexane + n-Heptane &nbsp;|&nbsp; Bromoethane + Chloroethane &nbsp;|&nbsp; Benzene + Toluene &nbsp;|&nbsp; Chlorobenzene + Bromobenzene.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Non-Ideal Solutions: Positive &amp; Negative Deviations</h3>
  <p>When a solution does not obey Raoult's law over the entire concentration range, it is called a <b>Non-Ideal Solution</b>. Non-ideal solutions exhibit two types of deviations based on molecular interactions:</p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.9); border: 1.2px solid rgba(255, 64, 129, 0.4); border-left: 5px solid ${themeColor}; border-radius: 8px; padding: 14px 18px;">
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 6px;">Positive Deviation from Raoult's Law</b>
      <div style="color: #FFFFFF; font-size: 14.5px; line-height: 1.65;">
        &bull; <b>Molecular Cause:</b> Unlike intermolecular forces (A-B) are <b>weaker</b> than like forces (A-A and B-B): <b>F<sub>A-B</sub> &lt; F<sub>A-A</sub>, F<sub>B-B</sub></b>. Molecules escape more easily into vapour phase.<br>
        &bull; <b>Vapour Pressure:</b> <i>p<sub>A</sub> &gt; p<sub>A</sub>&deg; &chi;<sub>A</sub></i>, <i>p<sub>B</sub> &gt; p<sub>B</sub>&deg; &chi;<sub>B</sub></i> &implies; <b>p<sub>total</sub> &gt; p<sub>A</sub>&deg; &chi;<sub>A</sub> + p<sub>B</sub>&deg; &chi;<sub>B</sub></b>.<br>
        &bull; <b>Thermodynamics:</b> <b>&Delta;H<sub>mix</sub> &gt; 0</b> (Endothermic, absorbs heat) and <b>&Delta;V<sub>mix</sub> &gt; 0</b> (Volume expansion).<br>
        &bull; <b>Examples:</b> Ethanol + Acetone (Acetone breaks hydrogen bonds in ethanol) &nbsp;|&nbsp; CS<sub>2</sub> + Acetone &nbsp;|&nbsp; CCl<sub>4</sub> + Benzene &nbsp;|&nbsp; Ethanol + Water.<br>
        &bull; <b>Azeotrope Formed:</b> <b>Minimum Boiling Azeotrope</b>.
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.9); border: 1.2px solid rgba(56, 189, 248, 0.4); border-left: 5px solid #38BDF8; border-radius: 8px; padding: 14px 18px;">
      <b style="color: #38BDF8; font-size: 16px; display: block; margin-bottom: 6px;">Negative Deviation from Raoult's Law</b>
      <div style="color: #FFFFFF; font-size: 14.5px; line-height: 1.65;">
        &bull; <b>Molecular Cause:</b> Unlike intermolecular forces (A-B) are <b>stronger</b> than like forces (A-A and B-B) due to new hydrogen bonding or dipole-dipole attractions: <b>F<sub>A-B</sub> &gt; F<sub>A-A</sub>, F<sub>B-B</sub></b>.<br>
        &bull; <b>Vapour Pressure:</b> <i>p<sub>A</sub> &lt; p<sub>A</sub>&deg; &chi;<sub>A</sub></i>, <i>p<sub>B</sub> &lt; p<sub>B</sub>&deg; &chi;<sub>B</sub></i> &implies; <b>p<sub>total</sub> &lt; p<sub>A</sub>&deg; &chi;<sub>A</sub> + p<sub>B</sub>&deg; &chi;<sub>B</sub></b>.<br>
        &bull; <b>Thermodynamics:</b> <b>&Delta;H<sub>mix</sub> &lt; 0</b> (Exothermic, heat released) and <b>&Delta;V<sub>mix</sub> &lt; 0</b> (Volume contraction).<br>
        &bull; <b>Examples:</b> Chloroform + Acetone (Forms strong intermolecular C-H&bull;&bull;&bull;O=C hydrogen bond) &nbsp;|&nbsp; Phenol + Aniline &nbsp;|&nbsp; HNO<sub>3</sub> + Water (68% HNO<sub>3</sub>) &nbsp;|&nbsp; HCl + Water.<br>
        &bull; <b>Azeotrope Formed:</b> <b>Maximum Boiling Azeotrope</b>.
      </div>
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Azeotropes (Constant Boiling Mixtures)</h3>
  ${defBox('Azeotrope', `
    <b>Azeotropes</b> are binary liquid mixtures having the <b>same composition in liquid and vapour phases</b> and which boil at a <b>constant temperature</b> like a pure chemical compound without any change in composition.<br><br>
    Because the liquid and vapour compositions are identical at the azeotropic point, the two components <b>cannot be separated by fractional distillation</b>.<br><br>
    &bull; <b>Minimum Boiling Azeotrope:</b> Formed by solutions showing large positive deviation from Raoult's law. The boiling point of the azeotrope is lower than that of either pure component. <i>Example: 95.4% Ethanol + 4.6% Water by mass boils at 351.15 K (pure ethanol boils at 351.3 K, water at 373 K).</i><br><br>
    &bull; <b>Maximum Boiling Azeotrope:</b> Formed by solutions showing large negative deviation from Raoult's law. The boiling point of the azeotrope is higher than that of either pure component. <i>Example: 68% Nitric acid (HNO<sub>3</sub>) + 32% Water by mass boils at 393.5 K (pure HNO<sub>3</sub> boils at 359 K, water at 373 K).</i>
  `)}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">7. Colligative Properties &amp; Determination of Molar Mass</h2>

  <p>Dilute solutions of non-volatile solutes display unique physical properties that depend exclusively on the <b>total number of solute particles</b> in solution and not on their chemical identity or nature. These are called <b>Colligative Properties</b> (Latin: <i>colligatus</i> = bound together). There are four fundamental colligative properties:</p>

  <h3 style="color: ${themeColor}; margin-top: 22px;">(i) Relative Lowering of Vapour Pressure (RLVP)</h3>
  ${stepDerivationBox('Molar Mass from Relative Lowering of Vapour Pressure', `
    <b>Step 1 (Raoult's Formulation):</b> According to Raoult's law for a non-volatile solute:
    ${eqBox(`${frac('p_A&deg; - p', 'p_A&deg;')} = \\chi_B = ${frac('n_B', 'n_A + n_B')}`)}

    <b>Step 2 (Dilute Solution Approximation):</b> For very dilute solutions where solute moles are negligible compared to solvent moles (<i>n<sub>B</sub> &ll; n<sub>A</sub></i>), <i>n<sub>A</sub> + n<sub>B</sub> &approx; n<sub>A</sub></i>:
    ${eqBox(`${frac('p_A&deg; - p', 'p_A&deg;')} \\approx ${frac('n_B', 'n_A')} = ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\times M_A', 'M_B \\times w_A')}`)}

    <b>Step 3 (Molar Mass of Solute, M<sub>B</sub>):</b> Rearranging for the unknown solute molar mass:
    ${eqBox(`<b>M_B = ${frac('w_B \\times M_A', 'w_A')} \\times ${frac('p_A&deg;', 'p_A&deg; - p')}</b>`)}
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Elevation of Boiling Point (&Delta;T<sub>b</sub>)</h3>
  <p>The <b>boiling point</b> of a liquid is the temperature at which its vapour pressure becomes strictly equal to the external atmospheric pressure (1.013 bar / 1 atm). Because a non-volatile solute lowers the vapour pressure of the solvent, the solution must be heated to a higher temperature than the pure solvent to make its vapour pressure equal atmospheric pressure. This difference is called the <b>Elevation of Boiling Point (&Delta;T<sub>b</sub>)</b>:</p>

  ${eqBox(`<b>\\Delta T_b = T_b - T_b&deg;</b>`)}
  <p>where <i>T<sub>b</sub></i> is the boiling point of the solution and <i>T<sub>b</sub>&deg;</i> is the boiling point of pure solvent.</p>

  ${stepDerivationBox('Elevation of Boiling Point &amp; Molal Elevation Constant (K<sub>b</sub>)', `
    <b>Step 1 (Thermodynamic Relation):</b> Experimentally, for dilute solutions, the elevation in boiling point is directly proportional to the molality (<i>m</i>) of the solute:
    ${eqBox(`\\Delta T_b \\propto m &implies; <b>\\Delta T_b = K_b m</b>`)}
    where <b>K<sub>b</sub></b> is called the <b>Molal Boiling Point Elevation Constant</b> or <b>Ebullioscopic Constant</b>.<br>
    <i>Definition of K<sub>b</sub>: Elevation of boiling point produced when 1 mole of non-volatile solute is dissolved in 1000 g (1 kg) of solvent (m = 1 mol kg<sup>-1</sup>). SI Unit: <b>K kg mol<sup>-1</sup></b>.</i>

    <b>Step 2 (Molar Mass Formulation):</b> Substituting molality <i>m = (w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; w<sub>A</sub>)</i>:
    ${eqBox(`\\Delta T_b = K_b \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')} &implies; <b>M_B = ${frac('1000 \\times K_b \\times w_B', '\\Delta T_b \\times w_A')}</b>`)}

    <b>Step 3 (Thermodynamic Formula for K<sub>b</sub>):</b>
    ${eqBox(`K_b = ${frac('R \\times M_A \\times (T_b&deg;)<sup>2</sup>', '1000 \\times \\Delta H_{\\text{vap}}')}`)}
    where <i>R</i> is gas constant (8.314 J K<sup>-1</sup> mol<sup>-1</sup>), <i>M<sub>A</sub></i> is solvent molar mass, and <i>&Delta;H<sub>vap</sub></i> is molar enthalpy of vaporization. For water, <b>K<sub>b</sub> = 0.52 K kg mol<sup>-1</sup></b>.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Depression of Freezing Point (&Delta;T<sub>f</sub>)</h3>
  <p>The <b>freezing point</b> of a substance is the temperature at which its liquid phase and solid phase have the identical vapour pressure. Since a non-volatile solute lowers the vapour pressure of the liquid solvent, the solution reaches equilibrium with solid solvent (ice) at a lower temperature. This difference is called the <b>Depression in Freezing Point (&Delta;T<sub>f</sub>)</b>:</p>

  ${eqBox(`<b>\\Delta T_f = T_f&deg; - T_f</b>`)}
  <p>where <i>T<sub>f</sub>&deg;</i> is the freezing point of pure solvent and <i>T<sub>f</sub></i> is the freezing point of the solution.</p>

  ${stepDerivationBox('Depression of Freezing Point &amp; Molal Depression Constant (K<sub>f</sub>)', `
    <b>Step 1 (Molality Proportionality):</b> For dilute solutions:
    ${eqBox(`\\Delta T_f \\propto m &implies; <b>\\Delta T_f = K_f m</b>`)}
    where <b>K<sub>f</sub></b> is the <b>Molal Freezing Point Depression Constant</b> or <b>Cryoscopic Constant</b>.<br>
    <i>Definition of K<sub>f</sub>: Depression in freezing point produced when 1 mole of non-volatile solute is dissolved in 1000 g (1 kg) of solvent. SI Unit: <b>K kg mol<sup>-1</sup></b>.</i>

    <b>Step 2 (Molar Mass Formulation):</b> Substituting <i>m = (w<sub>B</sub> &times; 1000) / (M<sub>B</sub> &times; w<sub>A</sub>)</i>:
    ${eqBox(`\\Delta T_f = K_f \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')} &implies; <b>M_B = ${frac('1000 \\times K_f \\times w_B', '\\Delta T_f \\times w_A')}</b>`)}

    <b>Step 3 (Thermodynamic Formula for K<sub>f</sub>):</b>
    ${eqBox(`K_f = ${frac('R \\times M_A \\times (T_f&deg;)<sup>2</sup>', '1000 \\times \\Delta H_{\\text{fusion}}')}`)}
    For water, <b>K<sub>f</sub> = 1.86 K kg mol<sup>-1</sup></b>.<br>
    <i>Application: Ethylene glycol anti-freeze in cold car radiators &amp; spreading NaCl or CaCl<sub>2</sub> on icy roads to melt snow by lowering freezing point (depression of freezing point).</i>
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Osmosis &amp; Osmotic Pressure (&Pi;)</h3>
  <p>When a solution is separated from its pure solvent by a <b>Semipermeable Membrane (SPM)</b> (a membrane containing microscopic sub-nanometer pores that allow only small solvent molecules to pass through while blocking large solute particles, such as cellulose acetate or copper ferrocyanide Cu<sub>2</sub>[Fe(CN)<sub>6</sub>]), solvent molecules spontaneously flow from pure solvent into the solution phase. This spontaneous net flow is called <b>Osmosis</b>.</p>

  ${defBox('Osmotic Pressure (&Pi;)', `
    <b>Osmotic Pressure (&Pi;):</b> The minimum excess hydrostatic pressure that must be applied to the solution side to completely prevent the inward osmosis of solvent molecules through a semipermeable membrane.<br><br>
    <b>Van't Hoff Equation (for Dilute Solutions):</b>
    ${eqBox(`<b>\\Pi = C R T = ${frac('n_B', 'V')} R T = ${frac('w_B R T', 'M_B V')}</b>`)}
    where <i>C</i> = Molar concentration (mol L<sup>-1</sup>), <i>R</i> = Gas constant (0.0821 L atm K<sup>-1</sup> mol<sup>-1</sup> or 8.314 kPa L K<sup>-1</sup> mol<sup>-1</sup>), <i>T</i> = Temperature in Kelvin, <i>V</i> = Volume in Litres.<br><br>
    <b>Molar Mass Formulation:</b>
    ${eqBox(`<b>M_B = ${frac('w_B R T', '\\Pi V')}</b>`)}
  `)}

  <div style="background: rgba(15, 23, 42, 0.8); border: 1.2px solid rgba(56, 189, 248, 0.35); border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: #38BDF8; font-size: 16px;">🌟 Why Osmotic Pressure is the Superior Method for Macromolecules (Proteins &amp; Polymers):</b>
    <ul style="margin: 8px 0 0 20px; line-height: 1.8; color: #FFFFFF;">
      <li>1. <b>Room Temperature Measurement:</b> Osmotic pressure is measured at ambient room temperature (298 K), avoiding thermal denaturation/degradation of fragile biomolecules (proteins, DNA, polymers) which decompose at high boiling points.</li>
      <li>2. <b>Measurable Magnitude at Extreme Dilution:</b> Even at tiny molar concentrations (~10<sup>-4</sup> M where &Delta;T<sub>b</sub> &approx; 0.0001 K is too small to detect on normal thermometers), osmotic pressure is several millimetres of water (~25 mm Hg), which is easily and accurately readable.</li>
      <li>3. Uses <b>Molarity</b> (concentration per unit volume) rather than molality.</li>
    </ul>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(v) Isotonic, Hypertonic, Hypotonic Solutions &amp; Reverse Osmosis</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b>Isotonic Solutions:</b> Two solutions having <b>identical osmotic pressure</b> at the same temperature (&Pi;<sub>1</sub> = &Pi;<sub>2</sub>). No net osmosis occurs when separated by SPM.<br>
    <i>Medical Standard: 0.9% (mass/volume) aqueous NaCl solution (normal saline) is isotonic with human red blood cell (RBC) intracellular fluid. Safe for intravenous (IV) injections.</i></li>
    <li><b>Hypertonic Solution:</b> A solution with higher osmotic pressure than fluid inside RBCs (&gt;0.9% NaCl). When placed in it, water flows out of cells by exosmosis, causing cells to shrink (<b>Plasmolysis / Crenation</b>).</li>
    <li><b>Hypotonic Solution:</b> A solution with lower osmotic pressure than fluid inside RBCs (&lt;0.9% NaCl). Water rushes into cells by endosmosis, causing cells to swell and burst (<b>Hemolysis</b>).</li>
    <li><b>Reverse Osmosis (RO) &amp; Water Desalination:</b> If an external pressure <b>greater than the osmotic pressure</b> (<i>P &gt; &Pi;</i>) is applied on the solution side, the direction of osmosis is reversed! Pure solvent molecules are forced out of sea water/saline water through a cellulose acetate SPM into the fresh water reservoir. This is the cornerstone of modern sea-water desalination and domestic water purifiers.</li>
  </ul>

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">8. Abnormal Molecular Mass &amp; Van't Hoff Factor (i)</h2>

  <p>Colligative properties depend on the number of solute particles. When a solute undergoes <b>dissociation</b> (into ions) or <b>association</b> (into dimers/trimers) in solution, the total number of particles changes, causing the experimentally observed colligative property to deviate from theoretical expectations. Consequently, the experimentally determined molar mass is called <b>Abnormal Molar Mass</b>.</p>

  ${defBox("Van't Hoff Factor (i) (1880)", `
    The <b>Van't Hoff Factor (i)</b> is defined as the ratio of the observed/experimental colligative property to the theoretical/calculated colligative property:
    ${eqBox(`i = ${frac('\\text{Observed Colligative Property}', '\\text{Calculated (Normal) Colligative Property}')} = ${frac('\\text{Normal (Theoretical) Molar Mass}', '\\text{Abnormal (Observed) Molar Mass}')} = ${frac('\\text{Total moles of particles after association/dissociation}', '\\text{Total moles of particles before association/dissociation}')}`)}
    &bull; <b>No Dissociation / Non-Electrolyte (Glucose, Urea, Sucrose):</b> <b>i = 1</b>.<br>
    &bull; <b>Dissociation (Electrolytes like NaCl, CaCl<sub>2</sub>):</b> <b>i &gt; 1</b> (Observed molar mass &lt; Normal molar mass).<br>
    &bull; <b>Association (Dimerization of Carboxylic acids in Benzene):</b> <b>i &lt; 1</b> (Observed molar mass &gt; Normal molar mass).
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Degree of Dissociation (&alpha;) vs Van't Hoff Factor</h3>
  ${stepDerivationBox('Degree of Dissociation Formulation', `
    Consider 1 mole of an electrolyte <i>A<sub>x</sub> B<sub>y</sub></i> which dissociates to give <i>n</i> ions:
    ${eqBox(`A_x B_y \\rightleftharpoons x A<sup>+</sup> + y B<sup>-</sup> \\quad (n = x + y)`)}
    Let &alpha; be the degree of dissociation.<br>
    &bull; Initial moles: <i>1</i> mole of electrolyte, <i>0</i> ions.<br>
    &bull; Equilibrium moles: <i>(1 - &alpha;)</i> moles of undissociated electrolyte + <i>n &alpha;</i> moles of ions.<br>
    Total moles of particles at equilibrium = <i>(1 - &alpha;) + n &alpha; = 1 + (n - 1)&alpha;</i>.
    ${eqBox(`i = ${frac('1 + (n - 1)\\alpha', '1')} &implies; <b>\\alpha = ${frac('i - 1', 'n - 1')}</b>`)}
    <i>Examples: For NaCl (n = 2), i = 1 + &alpha;. For CaCl<sub>2</sub> (n = 3), i = 1 + 2&alpha;. For Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> (n = 5), i = 1 + 4&alpha;. For 100% complete dissociation (&alpha; = 1), i = n.</i>
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Degree of Association (&alpha;) vs Van't Hoff Factor</h3>
  ${stepDerivationBox('Degree of Association Formulation', `
    Consider <i>n</i> molecules of solute <i>A</i> associating to form a polymer <i>A<sub>n</sub></i> (e.g. 2 CH<sub>3</sub>COOH &harr; (CH<sub>3</sub>COOH)<sub>2</sub> in benzene via cyclic dimer hydrogen bonds, n = 2):
    ${eqBox(`n A \\rightleftharpoons A_n`)}
    Let &alpha; be the degree of association.<br>
    &bull; Initial moles: <i>1</i> mole.<br>
    &bull; Equilibrium moles: <i>(1 - &alpha;)</i> moles of unassociated monomer + <i>&alpha; / n</i> moles of associated dimer/polymer.<br>
    Total moles of particles at equilibrium = <i>1 - &alpha; + &alpha;/n = 1 - &alpha; (1 - 1/n)</i>.
    ${eqBox(`i = 1 - \\alpha \\left(1 - ${frac('1', 'n')}\\right) &implies; <b>\\alpha = ${frac('1 - i', '1 - 1/n')} = ${frac('(1 - i) n', 'n - 1')}</b>`)}
    <i>For dimerization (n = 2), i = 1 - &alpha;/2 &implies; &alpha; = 2(1 - i). For 100% complete dimerization (&alpha; = 1), i = 0.5.</i>
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Modified Colligative Relations with Van't Hoff Factor</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(255, 64, 129, 0.4); border-radius: 10px; padding: 16px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 8px;">⚡ Universal Modified Equations for Electrolytes &amp; Associating Solutes:</b>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      1. <b>Relative Lowering of Vapour Pressure:</b> ${eqBox(`${frac('p_A&deg; - p', 'p_A&deg;')} = <b>i \\chi_B</b> = i \\times ${frac('n_B', 'n_A')}`)}
      2. <b>Elevation of Boiling Point:</b> ${eqBox(`<b>\\Delta T_b = i K_b m</b> = i K_b \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')}`)}
      3. <b>Depression of Freezing Point:</b> ${eqBox(`<b>\\Delta T_f = i K_f m</b> = i K_f \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')}`)}
      4. <b>Osmotic Pressure:</b> ${eqBox(`<b>\\Pi = i C R T</b> = i \\times ${frac('w_B R T', 'M_B V')}`)}
    </div>
  </div>

  <!-- SECTION 9 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">9. Master Comparison Matrices</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Comparison of Ideal and Non-Ideal Solutions</h3>
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

console.log("Overview HTML generated successfully.");
