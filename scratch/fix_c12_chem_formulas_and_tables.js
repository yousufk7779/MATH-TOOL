const fs = require('fs');
const path = require('path');

let scriptContent = fs.readFileSync(path.join(__dirname, 'rebuild_chem1_exact_physics_match.js'), 'utf8');

// 1. Fix Table 1 (9 types of binary solutions)
const oldTable0Regex = /<div style="overflow-x: auto; margin: 18px 0;">\s*<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14.5px; background: #0B0F19; border-radius: 8px; overflow: hidden; border: 1px solid rgba\(255,64,129,0.3\);">[\s\S]*?<\/table>\s*<\/div>/;

const newTable0 = `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 18px 0; border-radius: 8px; border: 1px solid rgba(255,64,129,0.35);">
    <table style="min-width: 580px; width: 100%; border-collapse: collapse; text-align: left; font-size: 14.5px; background: #0B0F19;">
      <thead>
        <tr style="background: rgba(255,64,129,0.25); color: #FF4081; font-weight: bold; border-bottom: 2px solid #FF4081;">
          <th style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); width: 22%; white-space: nowrap;">Type of Solution</th>
          <th style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); width: 14%; white-space: nowrap;">Solute</th>
          <th style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); width: 14%; white-space: nowrap;">Solvent</th>
          <th style="padding: 10px 14px; width: 50%;">Common Real-World Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td rowspan="3" style="padding: 12px 14px; font-weight: bold; color: #38BDF8; border-right: 1px solid rgba(255,255,255,0.1); background: rgba(56,189,248,0.05); white-space: nowrap;"><b>Gaseous Solutions</b></td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Gas</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Gas</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Mixture of dinitrogen (N<sub>2</sub>) and dioxygen (O<sub>2</sub>) gases (Air)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Liquid</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Gas</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Chloroform (CHCl<sub>3</sub>) vapours mixed with nitrogen gas; Humidity in air</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Solid</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Gas</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Camphor vapours in nitrogen gas; Iodine vapours in air</td>
        </tr>

        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td rowspan="3" style="padding: 12px 14px; font-weight: bold; color: #4ADE80; border-right: 1px solid rgba(255,255,255,0.1); background: rgba(74,222,128,0.05); white-space: nowrap;"><b>Liquid Solutions</b></td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Gas</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Liquid</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Oxygen dissolved in water (sustains aquatic life); Carbon dioxide in soda water</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Liquid</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Liquid</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Ethanol dissolved in water; Acetic acid in water (Vinegar)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Solid</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Liquid</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Glucose dissolved in water; Sodium chloride (NaCl) in water</td>
        </tr>

        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td rowspan="3" style="padding: 12px 14px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1); background: rgba(253,200,48,0.05); white-space: nowrap;"><b>Solid Solutions</b></td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Gas</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Solid</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Solution of Hydrogen (H<sub>2</sub>) gas in Palladium metal (adsorption/occlusion)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Liquid</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Solid</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Amalgam of mercury (liquid Hg) with sodium (solid Na metal)</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Solid</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Solid</td>
          <td style="padding: 10px 14px; line-height: 1.5;">Copper dissolved in Gold (22 Karat ornamental gold); Brass (Cu + Zn)</td>
        </tr>
      </tbody>
    </table>
  </div>`;

scriptContent = scriptContent.replace(oldTable0Regex, newTable0);

// 2. Fix Table 2 (Ideal vs Non-Ideal Comparison Matrix)
const oldTable1Regex = /<div style="overflow-x: auto; margin: 18px 0;">\s*<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; background: #0B0F19; border-radius: 8px; overflow: hidden; border: 1px solid rgba\(255,64,129,0.3\);">[\s\S]*?<\/table>\s*<\/div>/;

const newTable1 = `<div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 18px 0; border-radius: 8px; border: 1px solid rgba(255,64,129,0.35);">
    <table style="min-width: 580px; width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; background: #0B0F19;">
      <thead>
        <tr style="background: rgba(255,64,129,0.25); color: #FF4081; font-weight: bold; border-bottom: 2px solid #FF4081;">
          <th style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); width: 22%; white-space: nowrap;">Parameter</th>
          <th style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); width: 26%; white-space: nowrap;">Ideal Solution</th>
          <th style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1); width: 26%; white-space: nowrap;">Positive Deviation</th>
          <th style="padding: 10px 14px; width: 26%; white-space: nowrap;">Negative Deviation</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Intermolecular Forces</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">F<sub>A-B</sub> = F<sub>A-A</sub> = F<sub>B-B</sub></td>
          <td style="padding: 10px 14px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">F<sub>A-B</sub> &lt; F<sub>A-A</sub>, F<sub>B-B</sub> (Weaker)</td>
          <td style="padding: 10px 14px; color: #38BDF8;">F<sub>A-B</sub> &gt; F<sub>A-A</sub>, F<sub>B-B</sub> (Stronger)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Raoult's Law</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub></td>
          <td style="padding: 10px 14px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">p<sub>A</sub> &gt; p<sub>A</sub>&deg; &chi;<sub>A</sub></td>
          <td style="padding: 10px 14px; color: #38BDF8;">p<sub>A</sub> &lt; p<sub>A</sub>&deg; &chi;<sub>A</sub></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">&Delta;H<sub>mixing</sub></td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;H = 0</td>
          <td style="padding: 10px 14px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;H &gt; 0 (Endothermic)</td>
          <td style="padding: 10px 14px; color: #38BDF8;">&Delta;H &lt; 0 (Exothermic)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">&Delta;V<sub>mixing</sub></td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;V = 0</td>
          <td style="padding: 10px 14px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">&Delta;V &gt; 0 (Expansion)</td>
          <td style="padding: 10px 14px; color: #38BDF8;">&Delta;V &lt; 0 (Contraction)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Azeotrope Type</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Does not form azeotrope</td>
          <td style="padding: 10px 14px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">Minimum Boiling Azeotrope</td>
          <td style="padding: 10px 14px; color: #38BDF8;">Maximum Boiling Azeotrope</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; color: #FDC830; border-right: 1px solid rgba(255,255,255,0.1); white-space: nowrap;">Representative System</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Benzene + Toluene</td>
          <td style="padding: 10px 14px; color: #F87171; border-right: 1px solid rgba(255,255,255,0.1);">Ethanol + Acetone</td>
          <td style="padding: 10px 14px; color: #38BDF8;">Chloroform + Acetone</td>
        </tr>
      </tbody>
    </table>
  </div>`;

scriptContent = scriptContent.replace(oldTable1Regex, newTable1);

// 3. Exact replacements for raw LaTeX formulas in scriptContent
const formulaReplacements = [
  // Concentration formulas
  {
    target: "\\text{Mass \\% of A} = ${frac('\\text{Mass of component A}', '\\text{Total mass of solution}')} \\times 100",
    replace: "Mass % of A = ${frac('Mass of component A', 'Total mass of solution')} &times; 100"
  },
  {
    target: "\\text{Volume \\% of A} = ${frac('\\text{Volume of component A}', '\\text{Total volume of solution}')} \\times 100",
    replace: "Volume % of A = ${frac('Volume of component A', 'Total volume of solution')} &times; 100"
  },
  {
    target: "\\text{Mass by Volume \\% (w/V)} = ${frac('\\text{Mass of solute (in g)}', '\\text{Volume of solution (in mL)}')} \\times 100",
    replace: "Mass by Volume % (w/V) = ${frac('Mass of solute (in g)', 'Volume of solution (in mL)')} &times; 100"
  },
  {
    target: "\\text{ppm of A} = ${frac('\\text{Number of parts of component A}', '\\text{Total number of parts of all components of solution}')} \\times 10<sup>6</sup>",
    replace: "ppm of A = ${frac('Number of parts of component A', 'Total number of parts of all components of solution')} &times; 10<sup>6</sup>"
  },
  {
    target: "\\chi_A = ${frac('n_A', 'n_A + n_B')} \\qquad | \\qquad \\chi_B = ${frac('n_B', 'n_A + n_B')}",
    replace: "&chi;<sub>A</sub> = ${frac('n<sub>A</sub>', 'n<sub>A</sub> + n<sub>B</sub>')} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; &chi;<sub>B</sub> = ${frac('n<sub>B</sub>', 'n<sub>A</sub> + n<sub>B</sub>')}"
  },
  {
    target: "\\sum_{i=1}^k \\chi_i = \\chi_A + \\chi_B = 1",
    replace: "&Sigma; &chi;<sub>i</sub> = &chi;<sub>A</sub> + &chi;<sub>B</sub> = 1"
  },
  {
    target: "M = ${frac('n_B', 'V_{\\text{solution (L)}')} = ${frac('w_B \\times 1000', 'M_B \\times V_{\\text{(mL)}')}",
    replace: "M = ${frac('n<sub>B</sub>', 'V<sub>solution (L)</sub>')} = ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; V<sub>(mL)</sub>')}"
  },
  {
    target: "m = ${frac('n_B', 'w_A \\text{ (in kg)}')} = ${frac('w_B \\times 1000', 'M_B \\times w_A \\text{ (in g)}')}",
    replace: "m = ${frac('n<sub>B</sub>', 'w<sub>A</sub> (in kg)')} = ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub> (in g)')}"
  },
  {
    target: "\\text{Gas} + \\text{Liquid Solvent} \\rightleftharpoons \\text{Solution} + \\text{Heat} \\quad (\\Delta H_{\\text{solution}} < 0)",
    replace: "Gas + Liquid Solvent &#8652; Solution + Heat &nbsp;&nbsp; (&Delta;H<sub>solution</sub> &lt; 0)"
  },
  {
    target: "<b>p = K_H \\chi</b>",
    replace: "<b>p = K<sub>H</sub> &chi;</b>"
  },
  {
    target: "<b>p_A = p_A&deg; \\chi_A \\qquad | \\qquad p_B = p_B&deg; \\chi_B</b>",
    replace: "<b>p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub></b>"
  },
  {
    target: "p_{\\text{total}} = p_A + p_B = p_A&deg; \\chi_A + p_B&deg; \\chi_B = <b>p_A&deg; + (p_B&deg; - p_A&deg;) \\chi_B</b>",
    replace: "p<sub>total</sub> = p<sub>A</sub> + p<sub>B</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> + p<sub>B</sub>&deg; &chi;<sub>B</sub> = <b>p<sub>A</sub>&deg; + (p<sub>B</sub>&deg; - p<sub>A</sub>&deg;) &chi;<sub>B</sub></b>"
  },
  {
    target: "y_A = ${frac('p_A', 'p_{\\text{total}}')} = ${frac('p_A&deg; \\chi_A', 'p_A + p_B')} \\qquad | \\qquad y_B = ${frac('p_B', 'p_{\\text{total}}')} = ${frac('p_B&deg; \\chi_B', 'p_A + p_B')}",
    replace: "y<sub>A</sub> = ${frac('p<sub>A</sub>', 'p<sub>total</sub>')} = ${frac('p<sub>A</sub>&deg; &chi;<sub>A</sub>', 'p<sub>A</sub> + p<sub>B</sub>')} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; y<sub>B</sub> = ${frac('p<sub>B</sub>', 'p<sub>total</sub>')} = ${frac('p<sub>B</sub>&deg; &chi;<sub>B</sub>', 'p<sub>A</sub> + p<sub>B</sub>')}"
  },
  {
    target: "<b>${frac('p_A&deg; - p', 'p_A&deg;')} = \\chi_B</b>",
    replace: "<b>${frac('p<sub>A</sub>&deg; - p', 'p<sub>A</sub>&deg;')} = &chi;<sub>B</sub></b>"
  },
  {
    target: "${frac('p_A&deg; - p', 'p_A&deg;')} = \\chi_B \\approx ${frac('n_B', 'n_A')} = ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\times M_A', 'M_B \\times w_A')}",
    replace: "${frac('p<sub>A</sub>&deg; - p', 'p<sub>A</sub>&deg;')} = &chi;<sub>B</sub> &approx; ${frac('n<sub>B</sub>', 'n<sub>A</sub>')} = ${frac('w<sub>B</sub> / M<sub>B</sub>', 'w<sub>A</sub> / M<sub>A</sub>')} = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'M<sub>B</sub> &times; w<sub>A</sub>')}"
  },
  {
    target: "<b>M_B = ${frac('w_B \\times M_A', 'w_A')} \\times ${frac('p_A&deg;', 'p_A&deg; - p')}</b>",
    replace: "<b>M<sub>B</sub> = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'w<sub>A</sub>')} &times; ${frac('p<sub>A</sub>&deg;', 'p<sub>A</sub>&deg; - p')}</b>"
  },
  {
    target: "\\Delta T_b = K_b m = K_b \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')} &implies; <b>M_B = ${frac('1000 \\times K_b \\times w_B', '\\Delta T_b \\times w_A')}</b>",
    replace: "&Delta;T<sub>b</sub> = K<sub>b</sub> m = K<sub>b</sub> &times; ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub>')} &rArr; <b>M<sub>B</sub> = ${frac('1000 &times; K<sub>b</sub> &times; w<sub>B</sub>', '&Delta;T<sub>b</sub> &times; w<sub>A</sub>')}</b>"
  },
  {
    target: "\\Delta T_f = K_f m = K_f \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')} &implies; <b>M_B = ${frac('1000 \\times K_f \\times w_B', '\\Delta T_f \\times w_A')}</b>",
    replace: "&Delta;T<sub>f</sub> = K<sub>f</sub> m = K<sub>f</sub> &times; ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub>')} &rArr; <b>M<sub>B</sub> = ${frac('1000 &times; K<sub>f</sub> &times; w<sub>B</sub>', '&Delta;T<sub>f</sub> &times; w<sub>A</sub>')}</b>"
  },
  {
    target: "<b>\\Pi = C R T = ${frac('n_B', 'V')} R T = ${frac('w_B R T', 'M_B V')} &implies; M_B = ${frac('w_B R T', '\\Pi V')}</b>",
    replace: "<b>&Pi; = C R T = ${frac('n<sub>B</sub>', 'V')} R T = ${frac('w<sub>B</sub> R T', 'M<sub>B</sub> V')} &rArr; M<sub>B</sub> = ${frac('w<sub>B</sub> R T', '&Pi; V')}</b>"
  },
  {
    target: "i = ${frac('\\text{Observed Colligative Property}', '\\text{Calculated Colligative Property}')} = ${frac('\\text{Normal Molar Mass}', '\\text{Abnormal Molar Mass}')} = ${frac('\\text{Total moles of particles after dissociation/association}', '\\text{Total moles of particles initially}')}",
    replace: "i = ${frac('Observed Colligative Property', 'Calculated Colligative Property')} = ${frac('Normal Molar Mass', 'Abnormal Molar Mass')} = ${frac('Total moles after dissociation/association', 'Total moles initially')}"
  },
  {
    target: "K_b = ${frac('R M_A (T_b&deg;)<sup>2</sup>', '1000 \\Delta H_{\\text{vap}}')} \\qquad | \\qquad K_f = ${frac('R M_A (T_f&deg;)<sup>2</sup>', '1000 \\Delta H_{\\text{fusion}}')}",
    replace: "K<sub>b</sub> = ${frac('R M<sub>A</sub> (T<sub>b</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>vap</sub>')} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; K<sub>f</sub> = ${frac('R M<sub>A</sub> (T<sub>f</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>fusion</sub>')}"
  },
  {
    target: "p_A = p_A&deg; \\chi_A",
    replace: "p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub>"
  },
  {
    target: "p_A = p_A&deg; (1 - \\chi_B) = p_A&deg; - p_A&deg; \\chi_B",
    replace: "p<sub>A</sub> = p<sub>A</sub>&deg; (1 - &chi;<sub>B</sub>) = p<sub>A</sub>&deg; - p<sub>A</sub>&deg; &chi;<sub>B</sub>"
  },
  {
    target: "\\Delta p = p_A&deg; - p_A = p_A&deg; \\chi_B",
    replace: "&Delta;p = p<sub>A</sub>&deg; - p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>B</sub>"
  },
  {
    target: "${frac('p_A&deg; - p_A', 'p_A&deg;')} = \\chi_B",
    replace: "${frac('p<sub>A</sub>&deg; - p<sub>A</sub>', 'p<sub>A</sub>&deg;')} = &chi;<sub>B</sub>"
  },
  {
    target: "\\chi_B = ${frac('n_B', 'n_A + n_B')} = ${frac('w_B / M_B', '(w_A / M_A) + (w_B / M_B)')}",
    replace: "&chi;<sub>B</sub> = ${frac('n<sub>B</sub>', 'n<sub>A</sub> + n<sub>B</sub>')} = ${frac('w<sub>B</sub> / M<sub>B</sub>', '(w<sub>A</sub> / M<sub>A</sub>) + (w<sub>B</sub> / M<sub>B</sub>)')}"
  },
  {
    target: "${frac('p_A&deg; - p_A', 'p_A&deg;')} \\approx ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\times M_A', 'M_B \\times w_A')}",
    replace: "${frac('p<sub>A</sub>&deg; - p<sub>A</sub>', 'p<sub>A</sub>&deg;')} &approx; ${frac('w<sub>B</sub> / M<sub>B</sub>', 'w<sub>A</sub> / M<sub>A</sub>')} = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'M<sub>B</sub> &times; w<sub>A</sub>')}"
  },
  {
    target: "<b>M_B = ${frac('w_B \\times M_A', 'w_A')} \\times ${frac('p_A&deg;', 'p_A&deg; - p_A')}</b>",
    replace: "<b>M<sub>B</sub> = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'w<sub>A</sub>')} &times; ${frac('p<sub>A</sub>&deg;', 'p<sub>A</sub>&deg; - p<sub>A</sub>')}</b>"
  },
  {
    target: "p_A = p_A&deg; \\chi_A \\qquad | \\qquad p_B = p_B&deg; \\chi_B",
    replace: "p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub>"
  },
  {
    target: "p_{\\text{total}} = p_A + p_B = p_A&deg; \\chi_A + p_B&deg; \\chi_B",
    replace: "p<sub>total</sub> = p<sub>A</sub> + p<sub>B</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> + p<sub>B</sub>&deg; &chi;<sub>B</sub>"
  },
  {
    target: "p_{\\text{total}} = p_A&deg; (1 - \\chi_B) + p_B&deg; \\chi_B = <b>p_A&deg; + (p_B&deg; - p_A&deg;) \\chi_B</b>",
    replace: "p<sub>total</sub> = p<sub>A</sub>&deg; (1 - &chi;<sub>B</sub>) + p<sub>B</sub>&deg; &chi;<sub>B</sub> = <b>p<sub>A</sub>&deg; + (p<sub>B</sub>&deg; - p<sub>A</sub>&deg;) &chi;<sub>B</sub></b>"
  },
  {
    target: "p_A = y_A p_{\\text{total}} &implies; <b>y_A = ${frac('p_A', 'p_{\\text{total}}')} = ${frac('p_A&deg; \\chi_A', 'p_A + p_B')}</b>",
    replace: "p<sub>A</sub> = y<sub>A</sub> p<sub>total</sub> &rArr; <b>y<sub>A</sub> = ${frac('p<sub>A</sub>', 'p<sub>total</sub>')} = ${frac('p<sub>A</sub>&deg; &chi;<sub>A</sub>', 'p<sub>A</sub> + p<sub>B</sub>')}</b>"
  },
  {
    target: "p_B = y_B p_{\\text{total}} &implies; <b>y_B = ${frac('p_B', 'p_{\\text{total}}')} = ${frac('p_B&deg; \\chi_B', 'p_A + p_B')}</b>",
    replace: "p<sub>B</sub> = y<sub>B</sub> p<sub>total</sub> &rArr; <b>y<sub>B</sub> = ${frac('p<sub>B</sub>', 'p<sub>total</sub>')} = ${frac('p<sub>B</sub>&deg; &chi;<sub>B</sub>', 'p<sub>A</sub> + p<sub>B</sub>')}</b>"
  },
  {
    target: "\\Delta T_b \\propto \\Delta p \\propto \\chi_B = ${frac('n_B', 'n_A')} = ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\times M_A', 'M_B \\times w_A')}",
    replace: "&Delta;T<sub>b</sub> &prop; &Delta;p &prop; &chi;<sub>B</sub> = ${frac('n<sub>B</sub>', 'n<sub>A</sub>')} = ${frac('w<sub>B</sub> / M<sub>B</sub>', 'w<sub>A</sub> / M<sub>A</sub>')} = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'M<sub>B</sub> &times; w<sub>A</sub>')}"
  },
  {
    target: "\\Delta T_b \\propto ${frac('w_B \\times 1000', 'M_B \\times w_A')} = m \\quad \\text{(Molality)} &implies; <b>\\Delta T_b = K_b m</b>",
    replace: "&Delta;T<sub>b</sub> &prop; ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub>')} = m &nbsp;&nbsp; (Molality) &rArr; <b>&Delta;T<sub>b</sub> = K<sub>b</sub> m</b>"
  },
  {
    target: "K_b = ${frac('R M_A (T_b&deg;)<sup>2</sup>', '1000 \\Delta H_{\\text{vap}}')}",
    replace: "K<sub>b</sub> = ${frac('R M<sub>A</sub> (T<sub>b</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>vap</sub>')}"
  },
  {
    target: "\\Delta T_b = K_b \\times ${frac('w_B \\times 1000', 'M_B \\times w_A')} &implies; <b>M_B = ${frac('1000 \\times K_b \\times w_B', '\\Delta T_b \\times w_A')}</b>",
    replace: "&Delta;T<sub>b</sub> = K<sub>b</sub> &times; ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub>')} &rArr; <b>M<sub>B</sub> = ${frac('1000 &times; K<sub>b</sub> &times; w<sub>B</sub>', '&Delta;T<sub>b</sub> &times; w<sub>A</sub>')}</b>"
  },
  {
    target: "\\Delta T_f \\propto \\Delta p \\propto \\chi_B = ${frac('w_B \\times M_A', 'M_B \\times w_A')} \\propto m &implies; <b>\\Delta T_f = K_f m</b>",
    replace: "&Delta;T<sub>f</sub> &prop; &Delta;p &prop; &chi;<sub>B</sub> = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'M<sub>B</sub> &times; w<sub>A</sub>')} &prop; m &rArr; <b>&Delta;T<sub>f</sub> = K<sub>f</sub> m</b>"
  },
  {
    target: "K_f = ${frac('R M_A (T_f&deg;)<sup>2</sup>', '1000 \\Delta H_{\\text{fusion}}')}",
    replace: "K<sub>f</sub> = ${frac('R M<sub>A</sub> (T<sub>f</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>fusion</sub>')}"
  },
  {
    target: "<b>M_B = ${frac('1000 \\times K_f \\times w_B', '\\Delta T_f \\times w_A')}</b>",
    replace: "<b>M<sub>B</sub> = ${frac('1000 &times; K<sub>f</sub> &times; w<sub>B</sub>', '&Delta;T<sub>f</sub> &times; w<sub>A</sub>')}</b>"
  },
  {
    target: "\\Pi \\propto C T &implies; <b>\\Pi = C R T = ${frac('n_B', 'V')} R T = ${frac('w_B R T', 'M_B V')}</b>",
    replace: "&Pi; &prop; C T &rArr; <b>&Pi; = C R T = ${frac('n<sub>B</sub>', 'V')} R T = ${frac('w<sub>B</sub> R T', 'M<sub>B</sub> V')}</b>"
  },
  {
    target: "<b>M_B = ${frac('w_B R T', '\\Pi V')}</b>",
    replace: "<b>M<sub>B</sub> = ${frac('w<sub>B</sub> R T', '&Pi; V')}</b>"
  },
  {
    target: "i = ${frac('1 + (n - 1)\\alpha', '1')} &implies; <b>\\alpha = ${frac('i - 1', 'n - 1')}</b>",
    replace: "i = ${frac('1 + (n - 1)&alpha;', '1')} &rArr; <b>&alpha; = ${frac('i - 1', 'n - 1')}</b>"
  },
  {
    target: "i = 1 - \\alpha \\left(1 - ${frac('1', 'n')}\\right) &implies; <b>\\alpha = ${frac('1 - i', '1 - (1/n)')} = ${frac('(1 - i)n', 'n - 1')}</b>",
    replace: "i = 1 - &alpha; (1 - ${frac('1', 'n')}) &rArr; <b>&alpha; = ${frac('1 - i', '1 - (1/n)')} = ${frac('(1 - i)n', 'n - 1')}</b>"
  },
  {
    target: "K_a = ${frac('C \\alpha<sup>2</sup>', '1 - \\alpha')} = ${frac('0.1 \\times (0.0645)<sup>2</sup>', '1 - 0.0645')} = <b>4.45 \\times 10<sup>-4</sup></b>",
    replace: "K<sub>a</sub> = ${frac('C &alpha;<sup>2</sup>', '1 - &alpha;')} = ${frac('0.1 &times; (0.0645)<sup>2</sup>', '1 - 0.0645')} = <b>4.45 &times; 10<sup>-4</sup></b>"
  },
  {
    target: "p_i = p_i&deg; \\chi_i",
    replace: "p<sub>i</sub> = p<sub>i</sub>&deg; &chi;<sub>i</sub>"
  },
  {
    target: "p_i = K_H \\chi_i",
    replace: "p<sub>i</sub> = K<sub>H</sub> &chi;<sub>i</sub>"
  },
  {
    target: "\\alpha = ${frac('i - 1', 'n - 1')} = ${frac('3.656 - 1', '4 - 1')} = ${frac('2.656', '3')} = <b>0.8853 \\text{ (88.53%)}</b>",
    replace: "&alpha; = ${frac('i - 1', 'n - 1')} = ${frac('3.656 - 1', '4 - 1')} = ${frac('2.656', '3')} = <b>0.8853 (88.53%)</b>"
  },
  {
    target: "${frac('p&deg; - p', 'p&deg;')} = \\left(${frac('\\Pi', 'R T')}\\right) \\left(${frac('M_A', '\\rho')}\\right) = ${frac('\\Pi M_A', '\\rho R T')}",
    replace: "${frac('p&deg; - p', 'p&deg;')} = (${frac('&Pi;', 'R T')}) (${frac('M<sub>A</sub>', '&rho;')}) = ${frac('&Pi; M<sub>A</sub>', '&rho; R T')}"
  },
  {
    target: "i = 1 - \\alpha \\left(1 - ${frac('1', 'n')}\\right) = 1 - 0.80 \\left(1 - ${frac('1', '2')}\\right) = 1 - 0.40 = <b>0.60</b>",
    replace: "i = 1 - &alpha; (1 - ${frac('1', 'n')}) = 1 - 0.80 (1 - ${frac('1', '2')}) = 1 - 0.40 = <b>0.60</b>"
  },
  {
    target: "M_{\\text{obs}} = ${frac('M_{\\text{normal}}', 'i')} = ${frac('60', '0.60')} = <b>100 g mol<sup>-1</sup></b>",
    replace: "M<sub>obs</sub> = ${frac('M<sub>normal</sub>', 'i')} = ${frac('60', '0.60')} = <b>100 g mol<sup>-1</sup></b>"
  }
];

formulaReplacements.forEach(({ target, replace }) => {
  if (scriptContent.includes(target)) {
    scriptContent = scriptContent.split(target).join(replace);
    console.log('✅ Replaced:', target.substring(0, 40) + '...');
  } else {
    console.log('⚠️ Could not find exact match for:', target.substring(0, 40) + '...');
  }
});

// Save updated script
fs.writeFileSync(path.join(__dirname, 'rebuild_chem1_exact_physics_match.js'), scriptContent, 'utf8');
console.log('🎉 Fixed script saved! Now running it...');
