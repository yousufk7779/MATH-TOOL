const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F";

const p = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const raw = fs.readFileSync(p, 'utf8');

const ovMatch = raw.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
const solMatch = raw.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);\s*export const c12Phy1Mcqs/);
const mcqMatch = raw.match(/export const c12Phy1Mcqs = ([\s\S]*?);?\s*$/);

let html = JSON.parse(ovMatch[1]);

// Check if section 15 / Cheat sheet already exists
if (html.includes('Master Revision Formula Cheat Sheet')) {
  console.log("Cheat sheet already exists, replacing...");
  const csIdx = html.indexOf('Master Revision Formula Cheat Sheet');
  const h2Start = html.lastIndexOf('<h2', csIdx);
  html = html.slice(0, h2Start);
}

// Ensure closing </div> at the end is removed before appending
html = html.trim();
if (html.endsWith('</div>')) {
  html = html.slice(0, -6).trim();
}

const cheatSheetHtml = `
  <!-- SECTION 15: MASTER REVISION FORMULA CHEAT SHEET -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">15. Master Revision Formula Cheat Sheet</h2>

  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.85;">
      
      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Charges, Coulomb's Law &amp; Superposition:</b>
      &bull; <b>Quantization:</b> q = &plusmn; n e &nbsp;|&nbsp; e = 1.6 &times; 10<sup>-19</sup> C.<br>
      &bull; <b>Coulomb's Law (Vacuum):</b> F<sub>0</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span></span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">|q<sub>1</sub> q<sub>2</sub>|</span><span style="padding: 0 2px; display: inline-block;">r<sup>2</sup></span></span> &nbsp;|&nbsp; <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span></span> &approx; 9 &times; 10<sup>9</sup> N m<sup>2</sup> C<sup>-2</sup>.<br>
      &bull; <b>In Dielectric Medium:</b> F<sub>m</sub> = F<sub>0</sub> / K = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;</span></span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">|q<sub>1</sub> q<sub>2</sub>|</span><span style="padding: 0 2px; display: inline-block;">r<sup>2</sup></span></span> (&epsilon; = K &epsilon;<sub>0</sub>).<br>
      &bull; <b>Superposition:</b> <b>F</b><sub>1</sub> = &Sigma; <b>F</b><sub>1i</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">q<sub>1</sub></span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span></span> &Sigma; <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">q<sub>i</sub></span><span style="padding: 0 2px; display: inline-block;">r<sub>1i</sub><sup>2</sup></span></span> r&#770;<sub>i1</sub>.<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Charge Densities &amp; Electric Dipole:</b>
      &bull; <b>Charge Densities:</b> Linear &lambda; = dq/dL [C m<sup>-1</sup>] &nbsp;|&nbsp; Surface &sigma; = dq/dA [C m<sup>-2</sup>] &nbsp;|&nbsp; Volume &rho; = dq/dV [C m<sup>-3</sup>].<br>
      &bull; <b>Dipole Moment:</b> <b>p</b> = q (2<b>a</b>) (directed from -q to +q, Unit: C m).<br>
      &bull; <b>Axial Field (r &gg; a):</b> E<sub>axial</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span></span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">2 p</span><span style="padding: 0 2px; display: inline-block;">r<sup>3</sup></span></span> (along <b>p</b>).<br>
      &bull; <b>Equatorial Field (r &gg; a):</b> E<sub>eq</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span></span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">p</span><span style="padding: 0 2px; display: inline-block;">r<sup>3</sup></span></span> (opposite to <b>p</b>) &nbsp;&implies;&nbsp; <b>E<sub>axial</sub> = 2 E<sub>eq</sub></b>.<br>
      &bull; <b>Torque on Dipole:</b> &tau; = <b>p</b> &times; <b>E</b> &implies; &tau; = p E sin&theta; (&tau;<sub>max</sub> = p E at &theta; = 90&deg;).<br>
      &bull; <b>Potential Energy of Dipole:</b> U = -<b>p</b> &sdot; <b>E</b> = -p E cos&theta; (Stable: &theta; = 0&deg;, U = -pE; Unstable: &theta; = 180&deg;, U = +pE).<br>
      &bull; <b>Work Done in Rotation:</b> W = p E (cos&theta;<sub>1</sub> - cos&theta;<sub>2</sub>).<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Electric Flux &amp; Gauss's Theorem Applications:</b>
      &bull; <b>Electric Flux:</b> &Phi;<sub>E</sub> = &oint; <b>E</b> &sdot; d<b>A</b> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">q<sub>enclosed</sub></span><span style="padding: 0 2px; display: inline-block;">&epsilon;<sub>0</sub></span></span> [N m<sup>2</sup> C<sup>-1</sup> or V m].<br>
      &bull; <b>Infinitely Long Straight Wire:</b> E = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&lambda;</span><span style="padding: 0 2px; display: inline-block;">2&pi;&epsilon;<sub>0</sub> r</span></span> (E &prop; 1/r).<br>
      &bull; <b>Infinite Uniformly Charged Plane Sheet:</b> E = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&sigma;</span><span style="padding: 0 2px; display: inline-block;">2&epsilon;<sub>0</sub></span></span> (independent of distance r).<br>
      &bull; <b>Conducting Surface:</b> E = &sigma; / &epsilon;<sub>0</sub>.<br>
      &bull; <b>Thin Spherical Shell (Radius R, Total Charge Q):</b><br>
      &nbsp;&nbsp;- Outside (r &gt; R): E = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span></span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">Q</span><span style="padding: 0 2px; display: inline-block;">r<sup>2</sup></span></span>.<br>
      &nbsp;&nbsp;- Surface (r = R): E = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span></span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">Q</span><span style="padding: 0 2px; display: inline-block;">R<sup>2</sup></span></span> = &sigma; / &epsilon;<sub>0</sub>.<br>
      &nbsp;&nbsp;- Inside (r &lt; R): <b>E<sub>inside</sub> = 0</b>.<br><br>

      <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Capacitance, Dielectrics &amp; Energy Stored:</b>
      &bull; <b>Capacitance Definition:</b> C = Q / V [Farad F = C V<sup>-1</sup>, Dimensions: [M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> I<sup>2</sup>]].<br>
      &bull; <b>Parallel Plate Capacitor (Vacuum):</b> C<sub>0</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&epsilon;<sub>0</sub> A</span><span style="padding: 0 2px; display: inline-block;">d</span></span>.<br>
      &bull; <b>With Dielectric Medium (Constant K):</b> C = K C<sub>0</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">K &epsilon;<sub>0</sub> A</span><span style="padding: 0 2px; display: inline-block;">d</span></span> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&epsilon; A</span><span style="padding: 0 2px; display: inline-block;">d</span></span>.<br>
      &bull; <b>Dielectric Slab of Thickness t &lt; d:</b> C = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&epsilon;<sub>0</sub> A</span><span style="padding: 0 2px; display: inline-block;">d - t + t/K</span></span> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&epsilon;<sub>0</sub> A</span><span style="padding: 0 2px; display: inline-block;">d - t (1 - 1/K)</span></span>.<br>
      &bull; <b>Conducting Slab of Thickness t (K = &infin;):</b> C = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&epsilon;<sub>0</sub> A</span><span style="padding: 0 2px; display: inline-block;">d - t</span></span>.<br>
      &bull; <b>Series Combination:</b> 1/C<sub>s</sub> = &Sigma; (1/C<sub>i</sub>) &nbsp;|&nbsp; 2 Capacitors: C<sub>s</sub> = (C<sub>1</sub> C<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>) &nbsp;|&nbsp; n Identical: C<sub>s</sub> = C / n.<br>
      &bull; <b>Parallel Combination:</b> C<sub>p</sub> = &Sigma; C<sub>i</sub> = C<sub>1</sub> + C<sub>2</sub> + ... + C<sub>n</sub> &nbsp;|&nbsp; n Identical: C<sub>p</sub> = n C.<br>
      &bull; <b>Energy Stored:</b> U = &frac12; C V<sup>2</sup> = &frac12; Q V = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">Q<sup>2</sup></span><span style="padding: 0 2px; display: inline-block;">2 C</span></span> [Joule J].<br>
      &bull; <b>Energy Density in Field:</b> u = &frac12; &epsilon;<sub>0</sub> E<sup>2</sup> (in vacuum) &nbsp;|&nbsp; u = &frac12; K &epsilon;<sub>0</sub> E<sup>2</sup> = &frac12; &epsilon; E<sup>2</sup> (in medium) [J m<sup>-3</sup>, Dimensions: [M L<sup>-1</sup> T<sup>-2</sup>]].<br>
      &bull; <b>Common Potential:</b> V = (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>).<br>
      &bull; <b>Energy Loss on Sharing:</b> &Delta;U = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">C<sub>1</sub> C<sub>2</sub> (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup></span><span style="padding: 0 2px; display: inline-block;">2 (C<sub>1</sub> + C<sub>2</sub>)</span></span> &gt; 0.
    </div>
  </div>
</div>
`;

const finalOverviewHtml = html + cheatSheetHtml;

const finalTsCode = `// Class 12 Physics Unit I: Electrostatics (JKBOSE / NCERT Official Syllabus - 09 Marks)
// Comprehensive Deep Reference Book Standard (Pradeep's / S.L. Arora)

export const c12Phy1HtmlOverview = ${JSON.stringify(finalOverviewHtml)};

export const c12Phy1HtmlSolutions = ${solMatch[1]};

export const c12Phy1Mcqs = ${mcqMatch[1]};
`;

fs.writeFileSync(p, finalTsCode, 'utf8');
console.log("Successfully added Master Revision Formula Cheat Sheet to c12-phy-1.ts!");
