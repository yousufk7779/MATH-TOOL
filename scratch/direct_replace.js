const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'rebuild_chem1_exact_physics_match.js');
let code = fs.readFileSync(filePath, 'utf8');

// List of exact line replacements
const lineMap = {
  // Mass %
  "${eqBox(`\\\\text{Mass \\\\% of A} = ${frac('\\\\text{Mass of component A}', '\\\\text{Total mass of solution}')} \\\\times 100`)}":
  "${eqBox(`Mass % of A = ${frac('Mass of component A', 'Total mass of solution')} &times; 100`)}",

  // Volume %
  "${eqBox(`\\\\text{Volume \\\\% of A} = ${frac('\\\\text{Volume of component A}', '\\\\text{Total volume of solution}')} \\\\times 100`)}":
  "${eqBox(`Volume % of A = ${frac('Volume of component A', 'Total volume of solution')} &times; 100`)}",

  // Mass by Volume %
  "${eqBox(`\\\\text{Mass by Volume \\\\% (w/V)} = ${frac('\\\\text{Mass of solute (in g)}', '\\\\text{Volume of solution (in mL)}')} \\\\times 100`)}":
  "${eqBox(`Mass by Volume % (w/V) = ${frac('Mass of solute (in g)', 'Volume of solution (in mL)')} &times; 100`)}",

  // ppm
  "${eqBox(`\\\\text{ppm of A} = ${frac('\\\\text{Number of parts of component A}', '\\\\text{Total number of parts of all components of solution}')} \\\\times 10<sup>6</sup>`)}":
  "${eqBox(`ppm of A = ${frac('Number of parts of component A', 'Total number of parts of all components of solution')} &times; 10<sup>6</sup>`)}",

  // Mole fraction
  "${eqBox(`\\\\chi_A = ${frac('n_A', 'n_A + n_B')} \\\\qquad | \\\\qquad \\\\chi_B = ${frac('n_B', 'n_A + n_B')}`)}":
  "${eqBox(`&chi;<sub>A</sub> = ${frac('n<sub>A</sub>', 'n<sub>A</sub> + n<sub>B</sub>')} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; &chi;<sub>B</sub> = ${frac('n<sub>B</sub>', 'n<sub>A</sub> + n<sub>B</sub>')}`)}",

  // Sum of mole fractions
  "${eqBox(`\\\\sum_{i=1}^k \\\\chi_i = \\\\chi_A + \\\\chi_B = 1`)}":
  "${eqBox(`&Sigma; &chi;<sub>i</sub> = &chi;<sub>A</sub> + &chi;<sub>B</sub> = 1`)}",

  // Molarity
  "${eqBox(`M = ${frac('n_B', 'V_{\\\\text{solution (L)}')} = ${frac('w_B \\\\times 1000', 'M_B \\\\times V_{\\\\text{(mL)}')}`)}":
  "${eqBox(`M = ${frac('n<sub>B</sub>', 'V<sub>solution (L)</sub>')} = ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; V<sub>(mL)</sub>')}`)}",

  // Molality
  "${eqBox(`m = ${frac('n_B', 'w_A \\\\text{ (in kg)}')} = ${frac('w_B \\\\times 1000', 'M_B \\\\times w_A \\\\text{ (in g)}')}`)}":
  "${eqBox(`m = ${frac('n<sub>B</sub>', 'w<sub>A</sub> (in kg)')} = ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub> (in g)')}`)}",

  // Gas dissolution
  "${eqBox(`\\\\text{Gas} + \\\\text{Liquid Solvent} \\\\rightleftharpoons \\\\text{Solution} + \\\\text{Heat} \\\\quad (\\\\Delta H_{\\\\text{solution}} < 0)`)}":
  "${eqBox(`Gas + Liquid Solvent &#8652; Solution + Heat &nbsp;&nbsp; (&Delta;H<sub>solution</sub> &lt; 0)`)}",

  // Henry's law
  "${eqBox(`<b>p = K_H \\\\chi</b>`)}":
  "${eqBox(`<b>p = K<sub>H</sub> &chi;</b>`)}",

  // Raoult's law for volatile solutes
  "${eqBox(`<b>p_A = p_A&deg; \\\\chi_A \\\\qquad | \\\\qquad p_B = p_B&deg; \\\\chi_B</b>`)}":
  "${eqBox(`<b>p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub></b>`)}",

  // Total vapour pressure
  "${eqBox(`p_{\\\\text{total}} = p_A + p_B = p_A&deg; \\\\chi_A + p_B&deg; \\\\chi_B = <b>p_A&deg; + (p_B&deg; - p_A&deg;) \\\\chi_B</b>`)}":
  "${eqBox(`p<sub>total</sub> = p<sub>A</sub> + p<sub>B</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> + p<sub>B</sub>&deg; &chi;<sub>B</sub> = <b>p<sub>A</sub>&deg; + (p<sub>B</sub>&deg; - p<sub>A</sub>&deg;) &chi;<sub>B</sub></b>`)}",

  // Vapour phase mole fractions
  "${eqBox(`y_A = ${frac('p_A', 'p_{\\\\text{total}}')} = ${frac('p_A&deg; \\\\chi_A', 'p_A + p_B')} \\\\qquad | \\\\qquad y_B = ${frac('p_B', 'p_{\\\\text{total}}')} = ${frac('p_B&deg; \\\\chi_B', 'p_A + p_B')}`)}":
  "${eqBox(`y<sub>A</sub> = ${frac('p<sub>A</sub>', 'p<sub>total</sub>')} = ${frac('p<sub>A</sub>&deg; &chi;<sub>A</sub>', 'p<sub>A</sub> + p<sub>B</sub>')} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; y<sub>B</sub> = ${frac('p<sub>B</sub>', 'p<sub>total</sub>')} = ${frac('p<sub>B</sub>&deg; &chi;<sub>B</sub>', 'p<sub>A</sub> + p<sub>B</sub>')}`)}",

  // RLVP
  "${eqBox(`<b>${frac('p_A&deg; - p', 'p_A&deg;')} = \\\\chi_B</b>`)}":
  "${eqBox(`<b>${frac('p<sub>A</sub>&deg; - p', 'p<sub>A</sub>&deg;')} = &chi;<sub>B</sub></b>`)}",

  // Step Derivation RLVP
  "${eqBox(`${frac('p_A&deg; - p', 'p_A&deg;')} = \\\\chi_B \\\\approx ${frac('n_B', 'n_A')} = ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\\\times M_A', 'M_B \\\\times w_A')}`)}":
  "${eqBox(`${frac('p<sub>A</sub>&deg; - p', 'p<sub>A</sub>&deg;')} = &chi;<sub>B</sub> &approx; ${frac('n<sub>B</sub>', 'n<sub>A</sub>')} = ${frac('w<sub>B</sub> / M<sub>B</sub>', 'w<sub>A</sub> / M<sub>A</sub>')} = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'M<sub>B</sub> &times; w<sub>A</sub>')}`)}",

  // M_B from RLVP
  "${eqBox(`<b>M_B = ${frac('w_B \\\\times M_A', 'w_A')} \\\\times ${frac('p_A&deg;', 'p_A&deg; - p')}</b>`)}":
  "${eqBox(`<b>M<sub>B</sub> = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'w<sub>A</sub>')} &times; ${frac('p<sub>A</sub>&deg;', 'p<sub>A</sub>&deg; - p')}</b>`)}",

  // Boiling point elevation
  "${eqBox(`\\\\Delta T_b = K_b m = K_b \\\\times ${frac('w_B \\\\times 1000', 'M_B \\\\times w_A')} &implies; <b>M_B = ${frac('1000 \\\\times K_b \\\\times w_B', '\\\\Delta T_b \\\\times w_A')}</b>`)}":
  "${eqBox(`&Delta;T<sub>b</sub> = K<sub>b</sub> m = K<sub>b</sub> &times; ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub>')} &rArr; <b>M<sub>B</sub> = ${frac('1000 &times; K<sub>b</sub> &times; w<sub>B</sub>', '&Delta;T<sub>b</sub> &times; w<sub>A</sub>')}</b>`)}",

  // Freezing point depression
  "${eqBox(`\\\\Delta T_f = K_f m = K_f \\\\times ${frac('w_B \\\\times 1000', 'M_B \\\\times w_A')} &implies; <b>M_B = ${frac('1000 \\\\times K_f \\\\times w_B', '\\\\Delta T_f \\\\times w_A')}</b>`)}":
  "${eqBox(`&Delta;T<sub>f</sub> = K<sub>f</sub> m = K<sub>f</sub> &times; ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub>')} &rArr; <b>M<sub>B</sub> = ${frac('1000 &times; K<sub>f</sub> &times; w<sub>B</sub>', '&Delta;T<sub>f</sub> &times; w<sub>A</sub>')}</b>`)}",

  // Osmotic pressure
  "${eqBox(`<b>\\\\Pi = C R T = ${frac('n_B', 'V')} R T = ${frac('w_B R T', 'M_B V')} &implies; M_B = ${frac('w_B R T', '\\\\Pi V')}</b>`)}":
  "${eqBox(`<b>&Pi; = C R T = ${frac('n<sub>B</sub>', 'V')} R T = ${frac('w<sub>B</sub> R T', 'M<sub>B</sub> V')} &rArr; M<sub>B</sub> = ${frac('w<sub>B</sub> R T', '&Pi; V')}</b>`)}",

  // Van't Hoff factor
  "${eqBox(`i = ${frac('\\\\text{Observed Colligative Property}', '\\\\text{Calculated Colligative Property}')} = ${frac('\\\\text{Normal Molar Mass}', '\\\\text{Abnormal Molar Mass}')} = ${frac('\\\\text{Total moles of particles after dissociation/association}', '\\\\text{Total moles of particles initially}')}`)}":
  "${eqBox(`i = ${frac('Observed Colligative Property', 'Calculated Colligative Property')} = ${frac('Normal Molar Mass', 'Abnormal Molar Mass')} = ${frac('Total moles after dissociation/association', 'Total moles initially')}`)}",

  // Kb and Kf thermodynamic derivation
  "${eqBox(`K_b = ${frac('R M_A (T_b&deg;)<sup>2</sup>', '1000 \\\\Delta H_{\\\\text{vap}}')} \\\\qquad | \\\\qquad K_f = ${frac('R M_A (T_f&deg;)<sup>2</sup>', '1000 \\\\Delta H_{\\\\text{fusion}}')}`)}":
  "${eqBox(`K<sub>b</sub> = ${frac('R M<sub>A</sub> (T<sub>b</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>vap</sub>')} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; K<sub>f</sub> = ${frac('R M<sub>A</sub> (T<sub>f</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>fusion</sub>')}`)}",

  // Long Answers (Section C)
  "${eqBox(`p_A = p_A&deg; \\\\chi_A`)}":
  "${eqBox(`p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub>`)}",

  "${eqBox(`p_A = p_A&deg; (1 - \\\\chi_B) = p_A&deg; - p_A&deg; \\\\chi_B`)}":
  "${eqBox(`p<sub>A</sub> = p<sub>A</sub>&deg; (1 - &chi;<sub>B</sub>) = p<sub>A</sub>&deg; - p<sub>A</sub>&deg; &chi;<sub>B</sub>`)}",

  "${eqBox(`\\\\Delta p = p_A&deg; - p_A = p_A&deg; \\\\chi_B`)}":
  "${eqBox(`&Delta;p = p<sub>A</sub>&deg; - p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>B</sub>`)}",

  "${eqBox(`${frac('p_A&deg; - p_A', 'p_A&deg;')} = \\\\chi_B`)}":
  "${eqBox(`${frac('p<sub>A</sub>&deg; - p<sub>A</sub>', 'p<sub>A</sub>&deg;')} = &chi;<sub>B</sub>`)}",

  "${eqBox(`${frac('p_A&deg; - p_A', 'p_A&deg;')} \\\\approx ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\\\times M_A', 'M_B \\\\times w_A')}`)}":
  "${eqBox(`${frac('p<sub>A</sub>&deg; - p<sub>A</sub>', 'p<sub>A</sub>&deg;')} &approx; ${frac('w<sub>B</sub> / M<sub>B</sub>', 'w<sub>A</sub> / M<sub>A</sub>')} = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'M<sub>B</sub> &times; w<sub>A</sub>')}`)}",

  "${eqBox(`<b>M_B = ${frac('w_B \\\\times M_A', 'w_A')} \\\\times ${frac('p_A&deg;', 'p_A&deg; - p_A')}</b>`)}":
  "${eqBox(`<b>M<sub>B</sub> = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'w<sub>A</sub>')} &times; ${frac('p<sub>A</sub>&deg;', 'p<sub>A</sub>&deg; - p<sub>A</sub>')}</b>`)}",

  "${eqBox(`p_A = p_A&deg; \\\\chi_A \\\\qquad | \\\\qquad p_B = p_B&deg; \\\\chi_B`)}":
  "${eqBox(`p<sub>A</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; p<sub>B</sub> = p<sub>B</sub>&deg; &chi;<sub>B</sub>`)}",

  "${eqBox(`p_{\\\\text{total}} = p_A + p_B = p_A&deg; \\\\chi_A + p_B&deg; \\\\chi_B`)}":
  "${eqBox(`p<sub>total</sub> = p<sub>A</sub> + p<sub>B</sub> = p<sub>A</sub>&deg; &chi;<sub>A</sub> + p<sub>B</sub>&deg; &chi;<sub>B</sub>`)}",

  "${eqBox(`p_{\\\\text{total}} = p_A&deg; (1 - \\\\chi_B) + p_B&deg; \\\\chi_B = <b>p_A&deg; + (p_B&deg; - p_A&deg;) \\\\chi_B</b>`)}":
  "${eqBox(`p<sub>total</sub> = p<sub>A</sub>&deg; (1 - &chi;<sub>B</sub>) + p<sub>B</sub>&deg; &chi;<sub>B</sub> = <b>p<sub>A</sub>&deg; + (p<sub>B</sub>&deg; - p<sub>A</sub>&deg;) &chi;<sub>B</sub></b>`)}",

  "${eqBox(`p_A = y_A p_{\\\\text{total}} &implies; <b>y_A = ${frac('p_A', 'p_{\\\\text{total}}')} = ${frac('p_A&deg; \\\\chi_A', 'p_A + p_B')}</b>`)}":
  "${eqBox(`p<sub>A</sub> = y<sub>A</sub> p<sub>total</sub> &rArr; <b>y<sub>A</sub> = ${frac('p<sub>A</sub>', 'p<sub>total</sub>')} = ${frac('p<sub>A</sub>&deg; &chi;<sub>A</sub>', 'p<sub>A</sub> + p<sub>B</sub>')}</b>`)}",

  "${eqBox(`p_B = y_B p_{\\\\text{total}} &implies; <b>y_B = ${frac('p_B', 'p_{\\\\text{total}}')} = ${frac('p_B&deg; \\\\chi_B', 'p_A + p_B')}</b>`)}":
  "${eqBox(`p<sub>B</sub> = y<sub>B</sub> p<sub>total</sub> &rArr; <b>y<sub>B</sub> = ${frac('p<sub>B</sub>', 'p<sub>total</sub>')} = ${frac('p<sub>B</sub>&deg; &chi;<sub>B</sub>', 'p<sub>A</sub> + p<sub>B</sub>')}</b>`)}",

  "${eqBox(`\\\\Delta T_b \\\\propto \\\\Delta p \\\\propto \\\\chi_B = ${frac('n_B', 'n_A')} = ${frac('w_B / M_B', 'w_A / M_A')} = ${frac('w_B \\\\times M_A', 'M_B \\\\times w_A')}`)}":
  "${eqBox(`&Delta;T<sub>b</sub> &prop; &Delta;p &prop; &chi;<sub>B</sub> = ${frac('n<sub>B</sub>', 'n<sub>A</sub>')} = ${frac('w<sub>B</sub> / M<sub>B</sub>', 'w<sub>A</sub> / M<sub>A</sub>')} = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'M<sub>B</sub> &times; w<sub>A</sub>')}`)}",

  "${eqBox(`\\\\Delta T_b \\\\propto ${frac('w_B \\\\times 1000', 'M_B \\\\times w_A')} = m \\\\quad \\\\text{(Molality)} &implies; <b>\\\\Delta T_b = K_b m</b>`)}":
  "${eqBox(`&Delta;T<sub>b</sub> &prop; ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub>')} = m &nbsp;&nbsp; (Molality) &rArr; <b>&Delta;T<sub>b</sub> = K<sub>b</sub> m</b>`)}",

  "${eqBox(`K_b = ${frac('R M_A (T_b&deg;)<sup>2</sup>', '1000 \\\\Delta H_{\\\\text{vap}}')}`)}":
  "${eqBox(`K<sub>b</sub> = ${frac('R M<sub>A</sub> (T<sub>b</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>vap</sub>')}`)}",

  "${eqBox(`\\\\Delta T_b = K_b \\\\times ${frac('w_B \\\\times 1000', 'M_B \\\\times w_A')} &implies; <b>M_B = ${frac('1000 \\\\times K_b \\\\times w_B', '\\\\Delta T_b \\\\times w_A')}</b>`)}":
  "${eqBox(`&Delta;T<sub>b</sub> = K<sub>b</sub> &times; ${frac('w<sub>B</sub> &times; 1000', 'M<sub>B</sub> &times; w<sub>A</sub>')} &rArr; <b>M<sub>B</sub> = ${frac('1000 &times; K<sub>b</sub> &times; w<sub>B</sub>', '&Delta;T<sub>b</sub> &times; w<sub>A</sub>')}</b>`)}",

  "${eqBox(`\\\\Delta T_f \\\\propto \\\\Delta p \\\\propto \\\\chi_B = ${frac('w_B \\\\times M_A', 'M_B \\\\times w_A')} \\\\propto m &implies; <b>\\\\Delta T_f = K_f m</b>`)}":
  "${eqBox(`&Delta;T<sub>f</sub> &prop; &Delta;p &prop; &chi;<sub>B</sub> = ${frac('w<sub>B</sub> &times; M<sub>A</sub>', 'M<sub>B</sub> &times; w<sub>A</sub>')} &prop; m &rArr; <b>&Delta;T<sub>f</sub> = K<sub>f</sub> m</b>`)}",

  "${eqBox(`K_f = ${frac('R M_A (T_f&deg;)<sup>2</sup>', '1000 \\\\Delta H_{\\\\text{fusion}}')}`)}":
  "${eqBox(`K<sub>f</sub> = ${frac('R M<sub>A</sub> (T<sub>f</sub>&deg;)<sup>2</sup>', '1000 &Delta;H<sub>fusion</sub>')}`)}",

  "${eqBox(`<b>M_B = ${frac('1000 \\\\times K_f \\\\times w_B', '\\\\Delta T_f \\\\times w_A')}</b>`)}":
  "${eqBox(`<b>M<sub>B</sub> = ${frac('1000 &times; K<sub>f</sub> &times; w<sub>B</sub>', '&Delta;T<sub>f</sub> &times; w<sub>A</sub>')}</b>`)}",

  "${eqBox(`\\\\Pi \\\\propto C T &implies; <b>\\\\Pi = C R T = ${frac('n_B', 'V')} R T = ${frac('w_B R T', 'M_B V')}</b>`)}":
  "${eqBox(`&Pi; &prop; C T &rArr; <b>&Pi; = C R T = ${frac('n<sub>B</sub>', 'V')} R T = ${frac('w<sub>B</sub> R T', 'M<sub>B</sub> V')}</b>`)}",

  "${eqBox(`<b>M_B = ${frac('w_B R T', '\\\\Pi V')}</b>`)}":
  "${eqBox(`<b>M<sub>B</sub> = ${frac('w<sub>B</sub> R T', '&Pi; V')}</b>`)}",

  "${eqBox(`i = ${frac('1 + (n - 1)\\\\alpha', '1')} &implies; <b>\\\\alpha = ${frac('i - 1', 'n - 1')}</b>`)}":
  "${eqBox(`i = ${frac('1 + (n - 1)&alpha;', '1')} &rArr; <b>&alpha; = ${frac('i - 1', 'n - 1')}</b>`)}",

  "${eqBox(`i = 1 - \\\\alpha \\\\left(1 - ${frac('1', 'n')}\\\\right) &implies; <b>\\\\alpha = ${frac('1 - i', '1 - (1/n)')} = ${frac('(1 - i)n', 'n - 1')}</b>`)}":
  "${eqBox(`i = 1 - &alpha; (1 - ${frac('1', 'n')}) &rArr; <b>&alpha; = ${frac('1 - i', '1 - (1/n)')} = ${frac('(1 - i)n', 'n - 1')}</b>`)}",

  "${eqBox(`K_a = ${frac('C \\\\alpha<sup>2</sup>', '1 - \\\\alpha')} = ${frac('0.1 \\\\times (0.0645)<sup>2</sup>', '1 - 0.0645')} = <b>4.45 \\\\times 10<sup>-4</sup></b>`)}":
  "${eqBox(`K<sub>a</sub> = ${frac('C &alpha;<sup>2</sup>', '1 - &alpha;')} = ${frac('0.1 &times; (0.0645)<sup>2</sup>', '1 - 0.0645')} = <b>4.45 &times; 10<sup>-4</sup></b>`)}",

  "${eqBox(`p_i = p_i&deg; \\\\chi_i`)}":
  "${eqBox(`p<sub>i</sub> = p<sub>i</sub>&deg; &chi;<sub>i</sub>`)}",

  "${eqBox(`p_i = K_H \\\\chi_i`)}":
  "${eqBox(`p<sub>i</sub> = K<sub>H</sub> &chi;<sub>i</sub>`)}",

  "${eqBox(`\\\\alpha = ${frac('i - 1', 'n - 1')} = ${frac('3.656 - 1', '4 - 1')} = ${frac('2.656', '3')} = <b>0.8853 \\\\text{ (88.53%)}</b>`)}":
  "${eqBox(`&alpha; = ${frac('i - 1', 'n - 1')} = ${frac('3.656 - 1', '4 - 1')} = ${frac('2.656', '3')} = <b>0.8853 (88.53%)</b>`)}",

  "${eqBox(`${frac('p&deg; - p', 'p&deg;')} = \\\\left(${frac('\\\\Pi', 'R T')}\\\\right) \\\\left(${frac('M_A', '\\\\rho')}\\\\right) = ${frac('\\\\Pi M_A', '\\\\rho R T')}`)}":
  "${eqBox(`${frac('p&deg; - p', 'p&deg;')} = (${frac('&Pi;', 'R T')}) (${frac('M<sub>A</sub>', '&rho;')}) = ${frac('&Pi; M<sub>A</sub>', '&rho; R T')}`)}",

  "${eqBox(`i = 1 - \\\\alpha \\\\left(1 - ${frac('1', 'n')}\\\\right) = 1 - 0.80 \\\\left(1 - ${frac('1', '2')}\\\\right) = 1 - 0.40 = <b>0.60</b>`)}":
  "${eqBox(`i = 1 - &alpha; (1 - ${frac('1', 'n')}) = 1 - 0.80 (1 - ${frac('1', '2')}) = 1 - 0.40 = <b>0.60</b>`)}",

  "${eqBox(`M_{\\\\text{obs}} = ${frac('M_{\\\\text{normal}}', 'i')} = ${frac('60', '0.60')} = <b>100 g mol<sup>-1</sup></b>`)}":
  "${eqBox(`M<sub>obs</sub> = ${frac('M<sub>normal</sub>', 'i')} = ${frac('60', '0.60')} = <b>100 g mol<sup>-1</sup></b>`)}"
};

let replacedCount = 0;
for (const [target, replacement] of Object.entries(lineMap)) {
  if (code.includes(target)) {
    code = code.split(target).join(replacement);
    replacedCount++;
  } else {
    console.log('❌ Missing line:', target.substring(0, 45));
  }
}

console.log(`Replaced ${replacedCount} / ${Object.keys(lineMap).length} formula blocks.`);

fs.writeFileSync(filePath, code, 'utf8');
