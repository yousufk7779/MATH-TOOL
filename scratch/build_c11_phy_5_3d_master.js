const fs = require('fs');
const path = require('path');

const themeColor = "#AB47BC"; // Primary theme color for Unit V System of Particles and Rotational Motion

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(171, 71, 188, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(171, 71, 188, 0.25);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 17.5px; margin-bottom: 14px; text-align: center; letter-spacing: 0.5px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 840px; margin: 0 auto; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
      ${svgContent}
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 14px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

// 3D SVG 1: Moment of Inertia for Geometrical Bodies
const svg1_3d_moment_of_inertia = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="405" y="30" text-anchor="middle" fill="#AB47BC" font-family="sans-serif" font-size="17" font-weight="bold">Moments of Inertia (I) &amp; Radii of Gyration (k) for Standard Rigid Bodies</text>

    <!-- Ring Box -->
    <rect x="20" y="60" width="370" height="110" rx="8" fill="rgba(171,71,188,0.1)" stroke="#AB47BC" stroke-width="1.5"/>
    <text x="205" y="90" text-anchor="middle" fill="#AB47BC" font-family="sans-serif" font-size="15.5" font-weight="bold">1. Thin Circular Ring (Mass M, Radius R)</text>
    <text x="205" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16">Center Axis ⊥ Plane: I = M R² &nbsp;|&nbsp; k = R</text>
    <text x="205" y="145" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="14.5">Diameter Axis: I = ½ M R²</text>

    <!-- Disc Box -->
    <rect x="420" y="60" width="370" height="110" rx="8" fill="rgba(171,71,188,0.1)" stroke="#AB47BC" stroke-width="1.5"/>
    <text x="605" y="90" text-anchor="middle" fill="#AB47BC" font-family="sans-serif" font-size="15.5" font-weight="bold">2. Uniform Circular Disc (Mass M, Radius R)</text>
    <text x="605" y="120" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16">Center Axis ⊥ Plane: I = ½ M R² &nbsp;|&nbsp; k = R / √2</text>
    <text x="605" y="145" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="14.5">Diameter Axis: I = ¼ M R²</text>

    <!-- Solid Sphere Box -->
    <rect x="20" y="190" width="370" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="205" y="220" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15.5" font-weight="bold">3. Solid Sphere (Mass M, Radius R)</text>
    <text x="205" y="250" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16">Central Diameter Axis: I = (2/5) M R²</text>
    <text x="205" y="275" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="14.5">Tangent Axis: I = (7/5) M R²</text>

    <!-- Hollow Cylinder Box -->
    <rect x="420" y="190" width="370" height="110" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="605" y="220" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15.5" font-weight="bold">4. Uniform Thin Rod (Mass M, Length L)</text>
    <text x="605" y="250" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="16">Axis ⊥ Rod through Center: I = (1/12) M L²</text>
    <text x="605" y="275" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="14.5">Axis ⊥ Rod through One End: I = (1/3) M L²</text>

    <text x="405" y="340" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Rotational Kinetic Energy E_rot = ½ I ω² &nbsp;|&nbsp; Angular Momentum L = I ω</text>
  </g>
</svg>`;

// Construct Overview HTML for Chapter 5
function generateFullOverviewHtml() {
  return `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(171, 71, 188, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for Unit V: System of Particles and Rotational Motion</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Centre of Mass (C.M.):</b>
        <span style="color: #FFFFFF;">The unique point where the total mass of a system can be supposed to be concentrated for translational motion analysis.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Torque (τ⃗):</b>
        <span style="color: #FFFFFF;">The turning or rotational effect of a force about a given axis: τ⃗ = r⃗ × F⃗ = I α⃗ [N m].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Angular Momentum (L⃗):</b>
        <span style="color: #FFFFFF;">The moment of linear momentum of a rotating body: L⃗ = r⃗ × p⃗ = I ω⃗ [kg m²/s].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Moment of Inertia (I):</b>
        <span style="color: #FFFFFF;">Rotational inertia of a rigid body measuring resistance to angular acceleration: I = ∑ m_i r_i² [kg m²].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Radius of Gyration (k):</b>
        <span style="color: #FFFFFF;">The effective radial distance from rotation axis at which total mass can be concentrated to yield same moment of inertia: I = M k².</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Conservation of Angular Momentum:</b>
        <span style="color: #FFFFFF;">If net external torque on a system is zero (τ_ext = 0), total angular momentum remains constant: I₁ ω₁ = I₂ ω₂.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Work-Energy Theorem:</b>
        <span style="color: #FFFFFF;">Total work done by all forces equals net change in kinetic energy: W_total = ΔE_k = ½ m v₂² - ½ m v₁².</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Elastic vs Inelastic Collisions:</b>
        <span style="color: #FFFFFF;">Elastic: Both Momentum and Kinetic Energy conserved (e=1). Inelastic: Momentum conserved, KE lost (0 ≤ e < 1).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 & 2: WORK, KINETIC ENERGY & WORK-ENERGY THEOREM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Work Done by Constant &amp; Variable Forces, Work-Energy Theorem &amp; Power</h2>

  <p>Work $W = \int \mathbf{F} \cdot d\mathbf{r}$ measures energy transferred by a force. The <b>Work-Energy Theorem</b> asserts that the net work done by all forces acting on a body equals the change in its kinetic energy.</p>

  ${eqBox("<b>W<sub>net</sub> = ΔE<sub>k</sub> = " + frac("1", "2") + " m v<sub>2</sub><sup>2</sup> - " + frac("1", "2") + " m v<sub>1</sub><sup>2</sup> &nbsp;|&nbsp; Power P = " + frac("dW", "dt") + " = F⃗ · v⃗</b>")}

  <!-- SECTION 6 & 7: CENTRE OF MASS OF TWO-PARTICLE SYSTEM & RIGID BODY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Centre of Mass of a Two-Particle System &amp; Rigid Body Motion</h2>

  <p>For a system of $N$ particles of masses $m_i$ at position vectors $\mathbf{r}_i$, the position vector of the <b>Centre of Mass ($\mathbf{R}_{\text{cm}}$)</b> is defined as:</p>

  ${eqBox("<b>R⃗<sub>cm</sub> = " + frac("∑ m<sub>i</sub> r⃗<sub>i</sub>", "∑ m<sub>i</sub>") + " = " + frac("1", "M") + " ∫ r⃗ dm</b>")}

  <!-- SECTION 8: TORQUE & ANGULAR MOMENTUM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Moment of a Force, Torque, Angular Momentum &amp; Conservation Law</h2>

  <p>Rotational motion is driven by <b>Torque ($\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$)</b>. Angular momentum $\mathbf{L} = \mathbf{r} \times \mathbf{p} = I \boldsymbol{\omega}$ obeys the conservation law ($\mathbf{L} = \text{Constant}$ when $\boldsymbol{\tau}_{\text{ext}} = 0$).</p>

  <!-- SECTION 10: MOMENT OF INERTIA & RADIUS OF GYRATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Moment of Inertia, Radius of Gyration &amp; Values for Geometrical Bodies</h2>

  <p><b>Moment of Inertia ($I = \sum m_i r_i^2 = M k^2$)</b> quantifies a body's resistance to rotational acceleration. Radii of gyration $k$ allow comparing inertia across different shapes.</p>

  ${svg3DCardWrapper("Moments of Inertia (I) & Radii of Gyration (k) for Standard Rigid Bodies", "Summary of I formulas for Ring (MR²), Disc (½MR²), Solid Sphere (2/5 MR²), and Rod (1/12 ML²).", svg1_3d_moment_of_inertia)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(171, 71, 188, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for Unit V: System of Particles and Rotational Motion</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Rotational Analogue:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">Linear m → Rotational I<br>Linear v → Rotational ω<br>Linear F → Rotational τ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Torque &amp; Angular Momentum:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">τ⃗ = r⃗ × F⃗ = I α⃗<br>L⃗ = r⃗ × p⃗ = I ω⃗<br>τ_ext = dL⃗/dt</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Rotational Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">E_rot = ½ I ω²<br>Rolling E_total = ½ m v² + ½ I ω²</span>
      </div>
    </div>
  </div>

</div>
`;
}

function generateFullSolutionsHtml() {
  const fileContent = fs.readFileSync(path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-5.ts'), 'utf8');
  const matchSol = fileContent.match(/export const c11Phy5HtmlSolutions = ([\s\S]*?);?\s*$/);
  return JSON.parse(matchSol[1]);
}

const overviewHtml = generateFullOverviewHtml();
const solutionsHtml = generateFullSolutionsHtml();

const tsContent = `// Class 11 Physics Unit V Chapter 5: System of Particles and Rotational Motion (100% Exact Official NCERT Syllabus Alignment)
// High-Level Reference Book Content & NCERT Solutions (3D Volumetric SVG Diagrams)

export const c11Phy5HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy5HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-5.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully rebuilt c11-phy-5.ts with rich textbook prose explanations!");
