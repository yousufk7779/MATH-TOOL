const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F";

const b64Data = JSON.parse(fs.readFileSync(path.join(__dirname, 'diagrams_21_to_28_b64.json'), 'utf8'));

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${defContent}</div>
  </div>`;
}

function analogyBox(title, text) {
  return `
  <div style="background: rgba(16, 185, 129, 0.08); border-left: 4.5px solid #10B981; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #10B981; font-size: 16.5px; display: block; margin-bottom: 6px;">💡 REAL-WORLD INTUITION &amp; ANALOGY: ${title}</b>
    <div style="color: #E2E8F0; font-size: 15.5px; line-height: 1.65;">${text}</div>
  </div>`;
}

function stepDerivationBox(title, stepsHtml) {
  return `
  <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,81,47,0.3); padding-bottom: 6px;">
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

function imgCard(num, title, caption, b64) {
  return `
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="color: ${themeColor}; font-size: 15.5px; font-weight: bold; margin-bottom: 10px; text-align: left;">📸 Diagram ${num}: ${title}</div>
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
      <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${title}" />
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

// Read existing c12-phy-1.ts
const c12Path = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');
const rawFile = fs.readFileSync(c12Path, 'utf8');

const ovMatch = rawFile.match(/export const c12Phy1HtmlOverview = ([\s\S]*?);\s*export const c12Phy1HtmlSolutions/);
const solMatch = rawFile.match(/export const c12Phy1HtmlSolutions = ([\s\S]*?);\s*export const c12Phy1Mcqs/);
const mcqMatch = rawFile.match(/export const c12Phy1Mcqs = ([\s\S]*?);?\s*$/);

let existingOverviewHtml = JSON.parse(ovMatch[1]);

// Base HTML before section 12 (Preserves Diagrams 1 to 19 completely)
const sec12Start = existingOverviewHtml.indexOf('12. Capacitors, Capacitance');
const h2Sec12Start = existingOverviewHtml.lastIndexOf('<h2', sec12Start);
const baseOverviewHtml = existingOverviewHtml.slice(0, h2Sec12Start);

// Build sections 12, 13, 14 with all 8 new diagrams
const enhancedSectionsHtml = `
  <!-- SECTION 12 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">12. Capacitors, Capacitance &amp; Parallel Plate Capacitor (With &amp; Without Dielectric Medium)</h2>

  <p>A <b>capacitor</b> is an electrical component engineered specifically to store electric charge and electrostatic potential energy in the localized electric field between two conducting plates. When connected to a potential difference <i>V</i>, equal and opposite charges <i>+Q</i> and <i>-Q</i> accumulate on the conducting plates. The magnitude of stored charge <i>Q</i> is directly proportional to the potential difference <i>V</i>:</p>

  ${eqBox(`<b>Q &prop; V &nbsp;&implies;&nbsp; Q = C V &nbsp;&implies;&nbsp; C = ${frac('Q', 'V')}</b>`)}

  ${defBox('Capacitance &amp; SI Unit (Farad)', `
    <b>Capacitance (C):</b> The ratio of the magnitude of electric charge on either conductor plate to the potential difference established between them.<br><br>
    <b>SI Unit:</b> <b>Farad (F)</b>, where 1 Farad = 1 Coulomb / Volt (1 C V<sup>-1</sup>). Standard submultiples:
    <ul style="margin: 6px 0 0 18px; line-height: 1.6;">
      <li>Microfarad: 1 &mu;F = 10<sup>-6</sup> F</li>
      <li>Nanofarad: 1 nF = 10<sup>-9</sup> F</li>
      <li>Picofarad: 1 pF = 10<sup>-12</sup> F</li>
    </ul>
    <b>Dimensional Formula:</b> [C] = <b>[M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> I<sup>2</sup>]</b>.
  `)}

  <!-- DIAGRAM 21: CAPACITOR -->
  ${imgCard(21, 'Capacitor (Two Conductors Separated by Dielectric)', 'A capacitor consists of two conductors separated by a dielectric. It stores energy in the electric field formed between the plates.', b64Data[21])}

  ${analogyBox('The Flexible Water Reservoir Analogy', `
    Think of a capacitor as a water reservoir where potential difference <i>V</i> is the liquid column height (pressure) and charge <i>Q</i> is the total water volume. The cross-sectional area represents <b>capacitance (C)</b>. A larger capacitor holds significantly more charge at the exact same applied voltage!
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Capacitance of a Parallel Plate Capacitor (Without Dielectric Medium)</h3>
  <p>Consider two large plane parallel conducting plates each of cross-sectional area <i>A</i>, separated by a uniform distance <i>d</i> in vacuum or air (permittivity <i>&epsilon;<sub>0</sub></i>). With surface charge density <i>&sigma; = Q / A</i>:</p>

  ${stepDerivationBox('Parallel Plate Capacitor Formulation', `
    <b>Step 1 (Electric Field between plates):</b> Gauss's law shows that fields cancel outside the plates and add constructively in the interior region:
    ${eqBox(`E<sub>0</sub> = ${frac('&sigma;', '&epsilon;<sub>0</sub>')} = ${frac('Q', '&epsilon;<sub>0</sub> A')}`)}

    <b>Step 2 (Potential Difference V₀):</b> Across separation <i>d</i>:
    ${eqBox(`V<sub>0</sub> = E<sub>0</sub> &sdot; d = ${frac('Q d', '&epsilon;<sub>0</sub> A')}`)}

    <b>Step 3 (Capacitance C₀):</b> By definition <i>C₀ = Q / V₀</i>:
    ${eqBox(`<b>C<sub>0</sub> = ${frac('&epsilon;<sub>0</sub> A', 'd')}</b>`)}
  `)}

  <!-- DIAGRAM 24: CAPACITANCE OF PARALLEL PLATE CAPACITOR -->
  ${imgCard(24, 'Capacitance of Parallel Plate Capacitor', 'Capacitance C = ε A / d (where ε = ε₀ without dielectric, and ε = K ε₀ with dielectric of dielectric constant K).', b64Data[24])}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Effect of Dielectric Medium Between Plates &amp; Polarization</h3>
  <p>When an insulating dielectric slab of dielectric constant <i>K</i> is placed between the plates, the external electric field <i>E<sub>0</sub></i> causes electric polarization. Dipoles align and induce bound surface charges <i>+&sigma;<sub>p</sub></i> and <i>-&sigma;<sub>p</sub></i> on dielectric faces, creating an opposing internal field <i>E<sub>p</sub></i>. The net electric field is reduced by factor <i>K</i>:</p>

  ${eqBox(`E = E<sub>0</sub> - E<sub>p</sub> = ${frac('E<sub>0</sub>', 'K')} &implies; V = E d = ${frac('V<sub>0</sub>', 'K')}`)}

  <p>Therefore, the capacitance increases <i>K</i> times:</p>

  ${eqBox(`<b>C = K C<sub>0</sub> = ${frac('K &epsilon;<sub>0</sub> A', 'd')} = ${frac('&epsilon; A', 'd')}</b>`)}

  <!-- DIAGRAM 25: DIELECTRIC BETWEEN THE PLATES -->
  ${imgCard(25, 'Dielectric Between the Plates (Polarization & Field Reduction)', 'Dielectric becomes polarized in electric field. It reduces the effective electric field, increasing capacitance to C = K C₀ (K ≥ 1).', b64Data[25])}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Dielectric Slab of Thickness t &lt; d (Partial Filling)</h3>
  <p>If a dielectric slab of thickness <i>t</i> (where <i>t &lt; d</i>) is inserted, the air gap <i>(d - t)</i> maintains field <i>E<sub>0</sub></i> while the slab maintains reduced field <i>E = E<sub>0</sub>/K</i>:</p>

  ${stepDerivationBox('Partial Dielectric Slab of Thickness t', `
    <b>Total Potential Difference:</b>
    ${eqBox(`V = E<sub>0</sub>(d - t) + E &sdot; t = E<sub>0</sub> \\left[ (d - t) + ${frac('t', 'K')} \\right] = ${frac('Q', '&epsilon;<sub>0</sub> A')} \\left[ d - t \\left(1 - ${frac('1', 'K')}\\right) \\right]`)}
    <b>Capacitance:</b>
    ${eqBox(`<b>C = ${frac('&epsilon;<sub>0</sub> A', 'd - t + ' + frac('t', 'K'))} = ${frac('&epsilon;<sub>0</sub> A', 'd - t \\left(1 - ' + frac('1', 'K') + '\\right)')}</b>`)}
    <div style="margin-top: 8px; color: #38BDF8;">
      &#10148; <b>Special Case (Conducting slab, K = &infin;):</b> Inside conductor <i>E = 0</i>, so <b>C = ${frac('&epsilon;<sub>0</sub> A', 'd - t')}</b>.
    </div>
  `)}

  ${solvedExampleBox(
    'Capacitance with Mica Slab Insertion',
    'A parallel plate capacitor with air between plates has C₀ = 8 pF with plate separation d = 4 mm. A mica slab of thickness t = 3 mm and K = 6 is inserted. Find the new capacitance.',
    `<b>Formula:</b> C = &epsilon;<sub>0</sub> A / [ d - t + t/K ]<br>
     &epsilon;<sub>0</sub> A = C₀ &times; d = 8 pF &times; 4 mm = 32 pF&sdot;mm.<br>
     Effective thickness: d - t + t/K = 4 - 3 + 3/6 = 1.5 mm.<br>
     <b>Calculation:</b> C = (32 pF&sdot;mm) / (1.5 mm) = <b>21.33 pF</b>.`
  )}

  <!-- SECTION 13 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">13. Combination of Capacitors in Series and in Parallel</h2>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Capacitors in Series Combination</h3>
  <p>In a <b>series</b> combination, capacitors are connected sequentially end-to-end along a single path:</p>
  <ul style="margin: 6px 0 6px 18px; line-height: 1.8;">
    <li><b>Charge Q is identical</b> on all capacitors (Q₁ = Q₂ = Q₃ = Q).</li>
    <li><b>Potential difference divides:</b> V = V₁ + V₂ + V₃.</li>
  </ul>

  ${stepDerivationBox('Series Equivalent Capacitance', `
    Since <i>V₁ = Q/C₁, V₂ = Q/C₂, V₃ = Q/C₃</i> and <i>V = Q/Cₛ</i>:
    ${eqBox(`${frac('Q', 'C<sub>s</sub>')} = ${frac('Q', 'C<sub>1</sub>')} + ${frac('Q', 'C<sub>2</sub>')} + ${frac('Q', 'C<sub>3</sub>')} &implies; <b>${frac('1', 'C<sub>s</sub>')} = ${frac('1', 'C<sub>1</sub>')} + ${frac('1', 'C<sub>2</sub>')} + ${frac('1', 'C<sub>3</sub>')}</b>`)}
    <ul style="margin: 6px 0 0 18px;">
      <li>For 2 capacitors: <b>C<sub>s</sub> = ${frac('C<sub>1</sub> C<sub>2</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}</b></li>
      <li>For n identical capacitors: <b>C<sub>s</sub> = C / n</b></li>
    </ul>
  `)}

  <!-- DIAGRAM 22: CAPACITORS IN SERIES -->
  ${imgCard(22, 'Capacitors in Series Combination', 'In series combination, equivalent capacitance is less than the smallest capacitance (1/C_eq = 1/C₁ + 1/C₂ + 1/C₃). Total voltage V = V₁ + V₂ + V₃.', b64Data[22])}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Capacitors in Parallel Combination</h3>
  <p>In a <b>parallel</b> combination, positive plates connect to one common node and negative plates connect to another:</p>
  <ul style="margin: 6px 0 6px 18px; line-height: 1.8;">
    <li><b>Potential difference V is identical</b> across all capacitors (V₁ = V₂ = V₃ = V).</li>
    <li><b>Total charge divides:</b> Q = Q₁ + Q₂ + Q₃.</li>
  </ul>

  ${stepDerivationBox('Parallel Equivalent Capacitance', `
    Since <i>Q₁ = C₁V, Q₂ = C₂V, Q₃ = C₃V</i> and <i>Q = CₚV</i>:
    ${eqBox(`C<sub>p</sub> V = C<sub>1</sub> V + C<sub>2</sub> V + C<sub>3</sub> V &implies; <b>C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub></b>`)}
    <ul style="margin: 6px 0 0 18px;">
      <li>For n identical capacitors: <b>C<sub>p</sub> = n &sdot; C</b></li>
      <li>Cₚ is always strictly greater than the largest individual capacitor.</li>
    </ul>
  `)}

  <!-- DIAGRAM 23: CAPACITORS IN PARALLEL -->
  ${imgCard(23, 'Capacitors in Parallel Combination', 'In parallel combination, equivalent capacitance is greater than the largest capacitance (C_eq = C₁ + C₂ + C₃). Voltage V is identical across all.', b64Data[23])}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Complex Capacitor Network Reduction</h3>
  <p>General capacitor circuits containing bridge arrangements or multiple parallel-series loops are analyzed systematically by identifying parallel and series sub-circuits and reducing them step-by-step.</p>

  <!-- DIAGRAM 28: COMBINATION OF CAPACITORS -->
  ${imgCard(28, 'Combination of Capacitors (Network Reduction)', 'Any combination can be reduced by replacing parts step by step using series and parallel rules.', b64Data[28])}

  <!-- SECTION 14 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">14. Energy Stored in a Capacitor, Energy Density &amp; Loss of Energy on Sharing Charges (Formulae Only)</h2>

  <p><i>(Official Syllabus Standard: No derivation required; complete formulae and physical concepts only).</i></p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Formulae for Energy Stored in a Charged Capacitor</h3>
  <p>The total electrostatic potential energy <i>U</i> stored in the electric field localized between the plates is given by:</p>

  ${eqBox(`<b>U = ${frac('1', '2')} C V<sup>2</sup> = ${frac('1', '2')} Q V = ${frac('Q<sup>2</sup>', '2 C')}</b>`)}

  <!-- DIAGRAM 26: ENERGY STORED IN A CAPACITOR -->
  ${imgCard(26, 'Energy Stored in a Capacitor', 'Energy is stored in the electric field between the plates: U = 1/2 C V² = 1/2 Q V = Q² / (2 C).', b64Data[26])}

  ${examTrapBox('The 50% Energy Loss Mechanism', `
    <b>Question:</b> When a battery of EMF <i>V</i> deposits charge <i>Q</i> on a capacitor, total work done by battery is <b>W = Q V</b>. Why is stored energy only <b>U = &frac12; Q V</b>?<br><br>
    <b>Explanation:</b> Exactly <b>50% of the energy (W / 2 = &frac12; Q V) is dissipated as Joule heat</b> in connecting wires and electromagnetic radiation during the transient charging current, irrespective of the circuit resistance!
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Electrostatic Energy Density (u)</h3>
  <p><b>Energy density (u)</b> is the energy stored per unit volume of electric field space:</p>

  ${eqBox(`<b>u = ${frac('U', 'A &sdot; d')} = ${frac('1', '2')} &epsilon;<sub>0</sub> E<sup>2</sup></b> &nbsp;&nbsp;&nbsp; (in vacuum/air) &nbsp;|&nbsp; <b>u = ${frac('1', '2')} K &epsilon;<sub>0</sub> E<sup>2</sup> = ${frac('1', '2')} &epsilon; E<sup>2</sup></b> &nbsp;&nbsp;&nbsp; (in dielectric)`)}

  <p><b>SI Unit:</b> <b>J m<sup>-3</sup></b> (or N m<sup>-2</sup>) &nbsp;|&nbsp; <b>Dimensions:</b> <b>[M L<sup>-1</sup> T<sup>-2</sup>]</b>.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Common Potential &amp; Energy Loss on Sharing Charges</h3>
  <p>When two charged capacitors <i>C₁</i> and <i>C₂</i> at potentials <i>V₁</i> and <i>V₂</i> are connected together:</p>
  <ol style="margin: 6px 0 6px 20px; line-height: 1.8;">
    <li><b>Common Potential (V):</b>
      ${eqBox(`V = ${frac('C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>', 'C<sub>1</sub> + C<sub>2</sub>')}`)}
    </li>
    <li><b>Loss of Electrostatic Energy (&Delta;U):</b>
      ${eqBox(`\\Delta U = <b>${frac('C<sub>1</sub> C<sub>2</sub> (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup>', '2 (C<sub>1</sub> + C<sub>2</sub>)')}</b> &gt; 0`)}
      <i>(&Delta;U is always positive, proving energy is lost as heat and spark in connecting wires).</i>
    </li>
  </ol>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Master Reference Matrix &amp; Official Formula Summary</h3>
  <p>Summary comparison of dielectric insertion and quick revision table:</p>

  <!-- DIAGRAM 27: NO DERIVATION - FORMULAE ONLY -->
  ${imgCard(27, 'Master Formula Revision Sheet (No Derivation – Formulae Only)', 'Official standard formula sheet summarizing capacitance definitions, series & parallel rules, parallel plate formulas, and stored energy relations.', b64Data[27])}

  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px; background: #0B0F19; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,81,47,0.3);">
      <thead>
        <tr style="background: rgba(255,81,47,0.25); color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F;">
          <th style="padding: 12px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Quantity</th>
          <th style="padding: 12px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Battery Disconnected (Q Constant)</th>
          <th style="padding: 12px 14px;">Battery Connected (V Constant)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">Capacitance (C)</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Increases (C' = K C₀)</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold;">Increases (C' = K C₀)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">Charge (Q)</td>
          <td style="padding: 10px 14px; color: #FDE047; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Constant (Q' = Q₀)</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold;">Increases (Q' = K Q₀)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">Potential (V)</td>
          <td style="padding: 10px 14px; color: #F87171; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Decreases (V' = V₀ / K)</td>
          <td style="padding: 10px 14px; color: #FDE047; font-weight: bold;">Constant (V' = V₀)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">Electric Field (E)</td>
          <td style="padding: 10px 14px; color: #F87171; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Decreases (E' = E₀ / K)</td>
          <td style="padding: 10px 14px; color: #FDE047; font-weight: bold;">Constant (E' = E₀)</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; color: #FF8A65; border-right: 1px solid rgba(255,255,255,0.1);">Stored Energy (U)</td>
          <td style="padding: 10px 14px; color: #F87171; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Decreases (U' = U₀ / K)</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold;">Increases (U' = K U₀)</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
`;

const finalOverviewHtml = baseOverviewHtml + enhancedSectionsHtml;

// Write back to c12-phy-1.ts
const newFileCode = `// Class 12 Physics Unit I: Electrostatics (JKBOSE / NCERT Official Syllabus - 09 Marks)
// Comprehensive Deep Reference Book Standard (Pradeep's / S.L. Arora) with 5-Layer Topic Breakdown

export const c12Phy1HtmlOverview = ${JSON.stringify(finalOverviewHtml)};

export const c12Phy1HtmlSolutions = ${solMatch[1]};

export const c12Phy1Mcqs = ${mcqMatch[1]};
`;

fs.writeFileSync(c12Path, newFileCode, 'utf8');
console.log("Successfully rebuilt c12-phy-1.ts with all 8 authentic user-provided diagrams (21 to 28)!");
