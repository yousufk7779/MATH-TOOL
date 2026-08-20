const fs = require('fs');
const path = require('path');

const themeColor = "#FF512F";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 18px; margin: 26px 0; box-shadow: 0 10px 30px rgba(255, 81, 47, 0.25);">
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

const svg1_3d_si_units = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <text x="405" y="30" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="17" font-weight="bold">The 7 Fundamental SI Base Units &amp; Supplementary Units</text>

    <rect x="20" y="60" width="240" height="90" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.5"/>
    <text x="140" y="88" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">1. Length [L]</text>
    <text x="140" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14">Meter (m)</text>
    <text x="140" y="135" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">Speed of light standard</text>

    <rect x="280" y="60" width="240" height="90" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.5"/>
    <text x="400" y="88" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">2. Mass [M]</text>
    <text x="400" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14">Kilogram (kg)</text>
    <text x="400" y="135" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">Planck constant standard</text>

    <rect x="540" y="60" width="240" height="90" rx="8" fill="rgba(255,81,47,0.1)" stroke="#FF512F" stroke-width="1.5"/>
    <text x="660" y="88" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="15" font-weight="bold">3. Time [T]</text>
    <text x="660" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14">Second (s)</text>
    <text x="660" y="135" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">Cs-133 transition standard</text>

    <rect x="20" y="170" width="240" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="140" y="198" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">4. Electric Current [I]</text>
    <text x="140" y="225" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14">Ampere (A)</text>
    <text x="140" y="245" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">Elementary charge e standard</text>

    <rect x="280" y="170" width="240" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="400" y="198" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">5. Temperature [K]</text>
    <text x="400" y="225" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14">Kelvin (K)</text>
    <text x="400" y="245" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">Boltzmann constant standard</text>

    <rect x="540" y="170" width="240" height="90" rx="8" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="1.5"/>
    <text x="660" y="198" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="15" font-weight="bold">6. Amount of Substance [N]</text>
    <text x="660" y="225" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14">Mole (mol)</text>
    <text x="660" y="245" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">Avogadro constant N_A</text>

    <rect x="20" y="280" width="240" height="90" rx="8" fill="rgba(118,255,3,0.1)" stroke="#76FF03" stroke-width="1.5"/>
    <text x="140" y="308" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="15" font-weight="bold">7. Luminous Intensity [J]</text>
    <text x="140" y="335" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14">Candela (cd)</text>
    <text x="140" y="355" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="12.5">540×10¹² Hz monochromatic</text>

    <rect x="280" y="280" width="500" height="90" rx="8" fill="rgba(255,215,0,0.1)" stroke="#FFD700" stroke-width="1.5"/>
    <text x="530" y="308" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="15" font-weight="bold">Supplementary Units: Radian &amp; Steradian</text>
    <text x="530" y="335" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13.5">• Plane Angle dθ = ds / r (Radian rad) &nbsp;|&nbsp; Solid Angle dΩ = dA / r² (Steradian sr)</text>
    <text x="530" y="355" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="12.5">Dimensionless Quantity Pair [M⁰ L⁰ T⁰]!</text>
  </g>
</svg>`;

const svg2_3d_dimensional_analysis = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 480" width="100%" height="100%" style="background: linear-gradient(135deg, #0B0F19 0%, #111827 50%, #070A10 100%);">
  <g transform="translate(15, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">1. Principle of Dimensional Homogeneity</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Homogeneity Principle Rule:</text>
    <text x="195" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13">In any physical equation, dimensions of all terms on both sides must be identical.</text>
    <text x="195" y="145" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="14.5">For A + B = C  ⇒  [A] = [B] = [C]</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14.5" font-weight="bold">Example Equation Verification:</text>
    <text x="195" y="240" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15">s = u t + ½ a t²</text>
    <text x="195" y="270" text-anchor="middle" fill="#FFD700" font-family="monospace" font-size="14">[L] = [L T⁻¹][T] + [L T⁻²][T²] = [L] + [L]</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#00E5FF" font-family="sans-serif" font-size="14" font-weight="bold">Conversion of Units Formula:</text>
    <text x="195" y="365" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15">n₂ = n₁ [M₁/M₂]ᵃ [L₁/L₂]ᵇ [T₁/T₂]ᶜ</text>
  </g>

  <line x1="415" y1="30" x2="415" y2="450" stroke="#334155" stroke-width="2" stroke-dasharray="6,6"/>

  <g transform="translate(430, 20)">
    <rect x="0" y="0" width="390" height="430" rx="12" fill="rgba(15,23,42,0.9)" stroke="#FF512F" stroke-width="1.8"/>
    <text x="195" y="35" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="16.5" font-weight="bold">2. Derivation of Physical Relations</text>

    <rect x="15" y="60" width="360" height="110" rx="8" fill="rgba(255,81,47,0.08)" stroke="#FF512F" stroke-width="1.2"/>
    <text x="195" y="85" text-anchor="middle" fill="#FF512F" font-family="sans-serif" font-size="14.5" font-weight="bold">Simple Pendulum Derivation:</text>
    <text x="195" y="115" text-anchor="middle" fill="#FFFFFF" font-family="monospace" font-size="15">T = k mᵃ Lᵇ gᶜ</text>
    <text x="195" y="145" text-anchor="middle" fill="#76FF03" font-family="monospace" font-size="16.5" font-weight="bold">T = 2π √(L / g)</text>

    <rect x="15" y="185" width="360" height="110" rx="8" fill="rgba(255,215,0,0.08)" stroke="#FFD700" stroke-width="1.2"/>
    <text x="195" y="210" text-anchor="middle" fill="#FFD700" font-family="sans-serif" font-size="14.5" font-weight="bold">Limitations of Dimensional Analysis:</text>
    <text x="25" y="238" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Cannot determine dimensionless constants (like 2π, ½)</text>
    <text x="25" y="260" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Fails if quantity depends on more than 3 variables</text>
    <text x="25" y="282" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Cannot derive trigonometric / exponential functions</text>

    <rect x="15" y="310" width="360" height="105" rx="8" fill="rgba(118,255,3,0.08)" stroke="#76FF03" stroke-width="1.2"/>
    <text x="195" y="335" text-anchor="middle" fill="#76FF03" font-family="sans-serif" font-size="14" font-weight="bold">Dimensional Constants vs Variables:</text>
    <text x="25" y="362" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Dimensional Constant: Gravitational Constant G</text>
    <text x="25" y="384" fill="#FFFFFF" font-family="sans-serif" font-size="12.5">• Dimensionless Variable: Refractive index μ, Strain</text>
  </g>
</svg>`;

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
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for Unit I: Units and Measurements</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Physical Quantity:</b>
        <span style="color: #FFFFFF;">Any property of a material or system that can be quantified and measured using standard physical apparatus.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Unit of Measurement:</b>
        <span style="color: #FFFFFF;">An arbitrarily chosen, internationally accepted standard reference quantity used to express physical magnitude.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Fundamental Units:</b>
        <span style="color: #FFFFFF;">Independent basic units (Length, Mass, Time, Current, Temp, Amount of Substance, Luminous Intensity) that form the foundation of SI system.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Derived Units:</b>
        <span style="color: #FFFFFF;">Units expressed as mathematical combinations of fundamental units (e.g. Velocity m/s, Force N = kg m/s²).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Significant Figures:</b>
        <span style="color: #FFFFFF;">The meaningful digits in a measured value, including all reliable digits plus the first uncertain digit.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Dimensions of Physical Quantity:</b>
        <span style="color: #FFFFFF;">The powers to which base fundamental units (M, L, T, etc.) must be raised to represent that physical quantity.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>7. Dimensional Homogeneity:</b>
        <span style="color: #FFFFFF;">The principle stating that all terms added, subtracted, or equated in a valid physical equation must possess identical dimensions.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>8. Supplementary Units:</b>
        <span style="color: #FFFFFF;">Radian (plane angle rad) and Steradian (solid angle sr), which are dimensionless supplementary SI quantities.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: UNITS OF MEASUREMENT, SYSTEM OF UNITS & SI UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Units of Measurement, System of Units &amp; SI Units</h2>

  <p>Physics is a quantitative science based on observation, measurement, and mathematical formulation. Measurement of any physical quantity involves comparing an unknown magnitude against a chosen standard reference quantity called a <b>unit</b>. The complete specification of a physical quantity $Q$ is given by the product of its numerical value $n$ and its unit $u$:</p>

  ${eqBox("<b>Q = n × u &nbsp; ⇒ &nbsp; n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub></b>")}

  <p>If a smaller unit is chosen, the numerical value becomes larger, ensuring that the total physical magnitude remains invariant regardless of the system of units employed.</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(i) Historical Systems of Units</h3>
  <p>Historically, different countries developed distinct systems of units based on practical local standards:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>CGS System:</b> Uses centimeter (cm) for length, gram (g) for mass, and second (s) for time.</li>
    <li><b>FPS System:</b> Uses foot (ft) for length, pound (lb) for mass, and second (s) for time.</li>
    <li><b>MKS System:</b> Uses meter (m) for length, kilogram (kg) for mass, and second (s) for time.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(ii) The International System of Units (SI)</h3>
  <p>In 1971, the 14th General Conference on Weights and Measures (CGPM) formally adopted the <b>Système International d'Unités (SI)</b> to establish a coherent, rational, and universally accepted system of measurement across all scientific disciplines worldwide.</p>

  ${svg3DCardWrapper("The 7 Fundamental SI Base Units & Supplementary Units", "Complete 3D visual grid of the 7 fundamental SI base units and 2 supplementary dimensionless units.", svg1_3d_si_units)}

  <!-- SECTION 2: FUNDAMENTAL AND DERIVED UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Fundamental and Derived Units</h2>

  <p>Physical quantities are categorized into two primary classes based on their operational independence: fundamental (base) quantities and derived quantities.</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(i) Fundamental Units</h3>
  <p><b>Fundamental quantities</b> are independent quantities that cannot be defined in terms of other physical quantities. The SI system is built upon 7 fundamental base units:</p>
  <ol style="margin-left: 20px; line-height: 1.8;">
    <li><b>Length (meter, m):</b> Defined via the distance light travels in vacuum in $1 / 299,792,458$ seconds.</li>
    <li><b>Mass (kilogram, kg):</b> Defined via fixing the numerical value of Planck's constant $h = 6.62607015 \times 10^{-34}\text{ J s}$.</li>
    <li><b>Time (second, s):</b> Defined via $9,192,631,770$ periods of radiation of Caesium-133 atom.</li>
    <li><b>Electric Current (ampere, A):</b> Defined by fixing elementary charge $e = 1.602176634 \times 10^{-19}\text{ C}$.</li>
    <li><b>Thermodynamic Temperature (kelvin, K):</b> Defined by fixing Boltzmann constant $k_B = 1.380649 \times 10^{-23}\text{ J K}^{-1}$.</li>
    <li><b>Amount of Substance (mole, mol):</b> Defined by Avogadro's constant $N_A = 6.02214076 \times 10^{23}\text{ mol}^{-1}$.</li>
    <li><b>Luminous Intensity (candela, cd):</b> Defined by luminous efficacy of monochromatic radiation of frequency $540 \times 10^{12}\text{ Hz}$.</li>
  </ol>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(ii) Derived Units</h3>
  <p><b>Derived quantities</b> are physical quantities expressed as algebraic combinations of fundamental quantities (e.g. Speed $\text{m s}^{-1}$, Force $\text{kg m s}^{-2} = \text{Newton}$, Pressure $\text{N m}^{-2} = \text{Pascal}$).</p>

  <!-- SECTION 3: SIGNIFICANT FIGURES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Significant Figures</h2>

  <p>Every experimental measurement contains an inherent uncertainty stemming from instrument precision and human limitation. <b>Significant figures</b> represent the digits in a measurement that are known reliably plus the first digit that is uncertain.</p>

  <h3 style="color: ${themeColor}; margin-top: 18px;">(i) Rules for Determining Significant Figures</h3>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li>All non-zero digits are significant ($123.45$ has 5 significant figures).</li>
    <li>All zeros occurring between two non-zero digits are significant ($1005$ has 4 significant figures).</li>
    <li>Leading zeros preceding the first non-zero digit are NOT significant ($0.0025$ has 2 significant figures).</li>
    <li>Trailing zeros in a number with a decimal point ARE significant ($4.300$ has 4 significant figures).</li>
  </ul>

  <!-- SECTION 4: DIMENSIONS OF PHYSICAL QUANTITIES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Dimensions of Physical Quantities</h2>

  <p>The <b>dimensions</b> of a physical quantity are the exponents (or powers) to which fundamental base quantities $[M]$, $[L]$, $[T]$, $[I]$, $[\Theta]$, $[N]$, $[J]$ are raised to represent that physical quantity.</p>

  ${eqBox("<b>[Quantity] = [M<sup>a</sup> L<sup>b</sup> T<sup>c</sup>] &nbsp;|&nbsp; Force = [M L T<sup>-2</sup>] &nbsp;|&nbsp; Energy = [M L<sup>2</sup> T<sup>-2</sup>]</b>")}

  <!-- SECTION 5: DIMENSIONAL ANALYSIS AND ITS APPLICATIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Dimensional Analysis and Its Applications</h2>

  <p><b>Dimensional Analysis</b> utilizes the Principle of Dimensional Homogeneity to verify physical equations, convert units between systems, and derive mathematical relations between physical quantities.</p>

  ${svg3DCardWrapper("Dimensional Homogeneity & Applications of Dimensional Analysis", "Principle of dimensional homogeneity, equation derivation for simple pendulum T = 2π √(L/g), and limitations.", svg2_3d_dimensional_analysis)}

  <!-- QUICK REVISION CHEAT SHEET -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for Unit I: Units and Measurements</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Unit Invariance:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">Q = n₁ u₁ = n₂ u₂<br>n ∝ 1/u</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Key Dimensions:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">Force: [M L T⁻²]<br>Work/Energy: [M L² T⁻²]<br>Power: [M L² T⁻³]</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Dimensional Constants:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">G = [M⁻¹ L³ T⁻²]<br>h = [M L² T⁻¹]<br>k_B = [M L² T⁻² K⁻¹]</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Unit Conversion:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">n₂ = n₁ [M₁/M₂]ᵃ [L₁/L₂]ᵇ [T₁/T₂]ᶜ<br>1 Joule = 10⁷ Erg | 1 N = 10⁵ Dyne</span>
      </div>
    </div>
  </div>

</div>
`;
}

// Safely update ONLY the overview constant without touching solutions!
const overviewHtml = generateFullOverviewHtml();
const targetPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-1.ts');
let content = fs.readFileSync(targetPath, 'utf8');

const regex = /export const c11Phy1HtmlOverview = [\s\S]*?;\s*\n\s*export const c11Phy1HtmlSolutions/;
const replacement = `export const c11Phy1HtmlOverview = ${JSON.stringify(overviewHtml)};\n\nexport const c11Phy1HtmlSolutions`;

content = content.replace(regex, replacement).replace(/\^/g, '');
fs.writeFileSync(targetPath, content, 'utf8');

console.log("Safely updated Overview for Chapter 1!");
