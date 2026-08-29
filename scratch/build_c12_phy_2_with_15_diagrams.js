const fs = require('fs');
const path = require('path');

const themeColor = "#FF9100";

const diags = JSON.parse(fs.readFileSync(path.join(__dirname, 'c12_phy_2_15_diagrams.json'), 'utf8'));

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 145, 0, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 145, 0, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
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
  <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 16.5px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,145,0,0.3); padding-bottom: 6px;">
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
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 22px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="color: ${themeColor}; font-size: 15.5px; font-weight: bold; margin-bottom: 10px; text-align: left;">📸 Diagram ${num}: ${title}</div>
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
      <img src="${b64}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${title}" />
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

// Full Rich Reference Overview for Class 12 Chapter 2: Current Electricity
const fullOverviewHtml = `
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
  <div style="background: rgba(255, 145, 0, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit II: Current Electricity (JKBOSE / CBSE Official Syllabus)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Electric Current (I):</b>
        <span style="color: #FFFFFF;">Rate of flow of electric charge: I = dq/dt [Ampere A, Dimensions: [A]]. Scalar quantity.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Drift Velocity (v<sub>d</sub>):</b>
        <span style="color: #FFFFFF;">Average velocity with which free electrons drift opposite to applied electric field: v<sub>d</sub> = (e E &tau;)/m &approx; 10<sup>-4</sup> m s<sup>-1</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Electron Mobility (&mu;):</b>
        <span style="color: #FFFFFF;">Drift velocity per unit electric field: &mu; = v<sub>d</sub> / E = (e &tau;)/m [m<sup>2</sup> V<sup>-1</sup> s<sup>-1</sup>]. Always positive.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Resistivity (&rho;) &amp; Conductivity (&sigma;):</b>
        <span style="color: #FFFFFF;">Intrinsic property &rho; = m / (n e<sup>2</sup> &tau;) [&Omega; m], &sigma; = 1/&rho; [S m<sup>-1</sup>]. Independent of shape/size.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Electromotive Force (EMF, E) &amp; Internal Resistance (r):</b>
        <span style="color: #FFFFFF;">Potential difference across open-circuit cell terminals. Terminal voltage during discharge: V = E - I r.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Wheatstone Bridge Condition:</b>
        <span style="color: #FFFFFF;">When galvanometer current I<sub>g</sub> = 0 (null deflection), the balanced arms satisfy P / Q = R / S.</span>
      </div>
    </div>
  </div>

  <!-- DIAGRAM 13: CIRCUIT SYMBOLS -->
  ${imgCard('13', diags[13].title, diags[13].caption, diags[13].b64)}

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">1. Electric Current, Flow of Electric Charges in Metallic Conductors, Drift Velocity &amp; Mobility</h2>

  <p>Current electricity is the dynamic branch of physics dealing with charges in steady motion. In electrostatics, charges reside at rest in electrostatic equilibrium. However, when an external electric field or potential difference is maintained across the ends of a metallic conductor by a battery, free electrons experience continuous electrostatic forces, establishing a macroscopic continuous electric current.</p>

  ${defBox('Electric Current (I)', `
    Electric current across any cross-sectional area of a conductor is defined as the net rate of flow of electric charge passing through that area per unit time:
    ${eqBox(`I = ${frac('dq', 'dt')} \\quad \\text{(Instantaneous)} \\quad | \\quad I = ${frac('q', 't')} = ${frac('n e', 't')} \\quad \\text{(Steady State)}`)}
    <b>SI Unit:</b> <b>Ampere (A)</b> = 1 Coulomb per second (1 C s<sup>-1</sup>).<br>
    <b>Nature:</b> Electric current is a <b>scalar quantity</b> because it obeys ordinary scalar algebraic laws of addition rather than vector addition laws (triangle/parallelogram law).
  `)}

  <!-- DIAGRAM 1: ELECTRIC CURRENT -->
  ${imgCard('1', diags[1].title, diags[1].caption, diags[1].b64)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Flow of Charges in Metallic Conductors &amp; Microscopic Electron Dynamics</h3>
  <p>In metallic conductors (such as copper and silver), valence electrons detach from positive metal ions to form a dense free electron gas (number density <i>n &approx; 8.5 &times; 10<sup>28</sup> m<sup>-3</sup></i>). In thermal equilibrium without an external electric field:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Thermal Random Motion:</b> Free electrons move randomly in all directions with high thermal speeds (<i>u<sub>rms</sub> &approx; 10<sup>5</sup> to 10<sup>6</sup> m s<sup>-1</sup></i> at 300 K).</li>
    <li><b>Zero Net Current:</b> Because velocities are distributed randomly in 3D space, the vector average of thermal velocities across any cross-section is strictly zero: <b>u<sub>avg</sub> = 0</b>.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Drift Velocity (v<sub>d</sub>) &amp; Relaxation Time (&tau;)</h3>
  <p>When a potential difference <i>V</i> is applied across a conductor of length <i>L</i>, an internal electric field <b>E</b> = <i>V / L</i> is established. Each electron of mass <i>m</i> and charge <i>-e</i> experiences an electric force <b>F</b> = <i>-e <b>E</b></i>, acquiring acceleration <b>a</b> = <i>-e <b>E</b> / m</i> opposite to <b>E</b>.</p>

  ${stepDerivationBox('Relation Between Drift Velocity, Electric Current &amp; Current Density', `
    <b>Step 1 (Drift Velocity Formulation):</b> Let <i>&tau;</i> be the relaxation time (average time between two successive collisions with lattice ions). Starting from zero average thermal velocity:
    ${eqBox(`\\mathbf{v}_d = \\mathbf{u}_{\\text{avg}} + \\mathbf{a} \\tau = 0 + \\left(-${frac('e \\mathbf{E}', 'm')}\\right) \\tau &implies; <b>v_d = ${frac('e E \\tau', 'm')} = ${frac('e V \\tau', 'm L')}</b>`)}

    <b>Step 2 (Current in Terms of Drift Velocity, I = n e A v_d):</b> In a conductor of length <i>L</i> and cross-sectional area <i>A</i>, the volume is <i>A L</i>. Total number of free electrons is <i>N = n A L</i>, and total charge is <i>q = N e = n A L e</i>.<br>
    Time taken for these electrons to drift across length <i>L</i> is <i>t = L / v_d</i>:
    ${eqBox(`I = ${frac('q', 't')} = ${frac('n A L e', 'L / v_d')} &implies; <b>I = n e A v_d</b>`)}

    <b>Step 3 (Current Density J):</b> Current per unit normal cross-sectional area (a vector quantity):
    ${eqBox(`J = ${frac('I', 'A')} = n e v_d = n e \\left(${frac('e E \\tau', 'm')}\\right) = \\left(${frac('n e<sup>2</sup> \\tau', 'm')}\\right) E = <b>\\sigma E</b>`)}
  `)}

  <!-- DIAGRAM 2: DRIFT VELOCITY & MOBILITY -->
  ${imgCard('2', diags[2].title, diags[2].caption, diags[2].b64)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Electron Mobility (&mu;)</h3>
  ${defBox('Electron Mobility (&mu;)', `
    <b>Mobility (&mu;):</b> Defined as the magnitude of drift velocity acquired per unit applied electric field:
    ${eqBox(`\\mu = ${frac('v_d', 'E')} = ${frac('e \\tau', 'm')}`)}
    <b>SI Unit:</b> <b>m<sup>2</sup> V<sup>-1</sup> s<sup>-1</sup></b> or <b>m<sup>2</sup> N<sup>-1</sup> C<sup>-1</sup> s<sup>-1</sup></b>.<br>
    <b>Note:</b> Mobility is always defined as a positive scalar quantity for both electrons (&mu;<sub>e</sub>) and positive hole carriers (&mu;<sub>h</sub>).
  `)}

  ${analogyBox('Drift vs Thermal Speed Analogy', `
    Imagine a huge swarm of bees buzzing wildly at 100 km/h in every random direction (thermal velocity ~10<sup>5</sup> m/s). When a gentle breeze starts blowing, the entire swarm slowly drifts forward at 1 cm/s (drift velocity ~10<sup>-4</sup> m/s). That gentle forward drift is electric current!
  `)}

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">2. Ohm's Law, Electrical Resistivity, Conductivity &amp; Temperature Dependence of Resistance</h2>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Ohm's Law &amp; Its Microscopic Derivation</h3>
  <p><b>Ohm's Law (1828):</b> <i>At constant temperature and physical dimensions, the steady electric current flowing through a metallic conductor is directly proportional to the potential difference applied across its ends:</i></p>

  ${eqBox(`<b>V &prop; I &nbsp;&implies;&nbsp; V = I R</b>`)}

  <!-- DIAGRAM 3: OHM'S LAW -->
  ${imgCard('3', diags[3].title, diags[3].caption, diags[3].b64)}

  ${stepDerivationBox("Deduction of Ohm's Law from Drift Velocity", `
    Substitute drift velocity <i>v_d = e V &tau; / (m L)</i> into the current equation <i>I = n e A v_d</i>:
    ${eqBox(`I = n e A \\left(${frac('e V \\tau', 'm L')}\\right) = \\left(${frac('n e<sup>2</sup> A \\tau', 'm L')}\\right) V &implies; ${frac('V', 'I')} = \\left(${frac('m', 'n e<sup>2</sup> \\tau')}\\right) ${frac('L', 'A')} = <b>R</b>`)}
    At constant temperature, <i>m, n, e, &tau;</i> are constant for a given material, hence <b>R = constant</b>.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Electrical Resistivity (&rho;) and Conductivity (&sigma;)</h3>
  <p>The electrical resistance <i>R</i> of a uniform conductor is directly proportional to its length <i>L</i> and inversely proportional to its cross-sectional area <i>A</i>:</p>

  ${eqBox(`R = \\rho ${frac('L', 'A')} &implies; <b>\\rho = ${frac('R A', 'L')} = ${frac('m', 'n e<sup>2</sup> \\tau')}</b>`)}

  <!-- DIAGRAM 5: RESISTIVITY AND CONDUCTIVITY -->
  ${imgCard('5', diags[5].title, diags[5].caption, diags[5].b64)}

  <!-- DIAGRAM 15: RESISTIVITY OF MATERIALS TABLE -->
  ${imgCard('15', diags[15].title, diags[15].caption, diags[15].b64)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Temperature Dependence of Resistance &amp; Resistivity</h3>
  <p>As the temperature of a conductor increases, lattice ions vibrate with larger amplitudes. This increases the collision frequency of drifting electrons, causing the relaxation time <i>&tau;</i> to decrease. Since <i>&rho; &prop; 1/&tau;</i>, the resistivity and resistance of metals increase with temperature:</p>

  ${eqBox(`<b>R_T = R_0 (1 + \\alpha \\Delta T) \\quad | \\quad \\rho_T = \\rho_0 (1 + \\alpha \\Delta T)</b>`)}

  <p>where <i>&alpha;</i> is the <b>temperature coefficient of resistance</b>: <i>&alpha; = (R_T - R_0) / (R_0 &Delta;T)</i> [SI Unit: K<sup>-1</sup> or &deg;C<sup>-1</sup>].</p>

  <!-- DIAGRAM 6: TEMPERATURE DEPENDENCE -->
  ${imgCard('6', diags[6].title, diags[6].caption, diags[6].b64)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Resistors in Series and Parallel Combinations</h3>
  <!-- DIAGRAM 7: RESISTORS IN SERIES & PARALLEL -->
  ${imgCard('7', diags[7].title, diags[7].caption, diags[7].b64)}

  <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 145, 0, 0.3); border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <b style="color: ${themeColor}; font-size: 16px;">⚡ Combination Rules for Resistors:</b>
    <ul style="margin: 8px 0 0 20px; line-height: 1.8; color: #E2E8F0;">
      <li><b>Series Combination:</b> Current <i>I</i> is identical across all resistors, voltages add up:
        <div style="color: #4ADE80; font-weight: bold; margin: 4px 0;">R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + ... + R<sub>n</sub></div>
      </li>
      <li><b>Parallel Combination:</b> Potential difference <i>V</i> is identical across all branches, currents add up:
        <div style="color: #38BDF8; font-weight: bold; margin: 4px 0;">1 / R<sub>p</sub> = 1 / R<sub>1</sub> + 1 / R<sub>2</sub> + 1 / R<sub>3</sub> + ... + 1 / R<sub>n</sub></div>
      </li>
    </ul>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">3. V–I Characteristics: Linear (Ohmic) &amp; Non-Linear (Non-Ohmic) Devices</h2>

  <p>Conductors and electronic devices are classified into two broad categories based on their current-voltage relationships:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Ohmic Conductors:</b> Devices that strictly obey Ohm's law (V &prop; I). The V–I characteristic graph is a perfect straight line passing through the origin. Examples: all metallic conductors (Cu, Al, Ag) under small current/constant temperature.</li>
    <li><b>Non-Ohmic Devices:</b> Devices for which V is not strictly proportional to I. The V–I characteristic is non-linear, non-symmetric under reversal of voltage polarity, or shows negative dynamic resistance regions. Examples: p-n junction semiconductor diodes, vacuum tubes, thermistors, and GaAs crystals.</li>
  </ul>

  <!-- DIAGRAM 4: V-I CHARACTERISTICS -->
  ${imgCard('4', diags[4].title, diags[4].caption, diags[4].b64)}

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">4. Electrical Energy, Electrical Power &amp; Joule's Heating Effect</h2>

  <p>When a current <i>I</i> passes through a resistor of resistance <i>R</i> maintained across a potential difference <i>V</i> for time <i>t</i>, the battery does work <i>W = q V = (I t) V</i>. This work is converted into thermal heat energy in the resistor:</p>

  ${eqBox(`<b>H = W = V I t = I<sup>2</sup> R t = ${frac('V<sup>2</sup> t', 'R')}</b> \\quad \\text{[Joule J]}`)}

  <p><b>Electrical Power (P):</b> Rate at which electrical energy is consumed or dissipated:</p>

  ${eqBox(`<b>P = ${frac('W', 't')} = V I = I<sup>2</sup> R = ${frac('V<sup>2</sup>', 'R')}</b> \\quad \\text{[Watt W = J s<sup>-1</sup>]}`)}

  <!-- DIAGRAM 14: ELECTRICAL ENERGY AND POWER -->
  ${imgCard('14', diags[14].title, diags[14].caption, diags[14].b64)}

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">5. Internal Resistance of a Cell, Potential Difference &amp; Electromotive Force (EMF)</h2>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Electromotive Force (EMF, E) vs Terminal Potential Difference (V)</h3>
  <p><b>Electromotive Force (EMF, E):</b> The maximum potential difference between the electrodes of a cell when no current is drawn from it (open circuit condition, I = 0).<br>
  <b>Terminal Voltage (V):</b> The potential difference between the terminals of a cell when a closed circuit current <i>I</i> is drawn from the cell.</p>

  <!-- DIAGRAM 9: EMF AND TERMINAL VOLTAGE -->
  ${imgCard('9', diags[9].title, diags[9].caption, diags[9].b64)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Internal Resistance (r) &amp; Discharging Relation</h3>
  <p>The finite resistance offered by the electrolyte and electrodes of a cell to the internal flow of electric current is called its <b>internal resistance (r)</b>.</p>

  ${eqBox(`<b>V = E - I r &implies; I = ${frac('E', 'R + r')} &implies; r = \\left(${frac('E', 'V')} - 1\\right) R</b>`)}

  <!-- DIAGRAM 8: CELL WITH INTERNAL RESISTANCE -->
  ${imgCard('8', diags[8].title, diags[8].caption, diags[8].b64)}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">6. Kirchhoff's Rules &amp; Wheatstone Bridge Principle</h2>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Kirchhoff's Two Laws</h3>
  ${defBox("Kirchhoff's Laws", `
    <b>1. Kirchhoff's First Rule (Junction Rule / KCL):</b> The algebraic sum of all electric currents meeting at any junction in an electrical circuit is zero:
    ${eqBox(`\\Sigma I_{\\text{in}} = \\Sigma I_{\\text{out}} &implies; <b>\\Sigma I = 0</b>`)}
    <i>(Direct manifestation of the Law of Conservation of Electric Charge).</i><br><br>
    <b>2. Kirchhoff's Second Rule (Loop Rule / KVL):</b> The algebraic sum of changes in potential (&Delta;V) around any closed loop of a network containing resistors and cells is zero:
    ${eqBox(`<b>\\Sigma \\Delta V = \\Sigma E + \\Sigma (I R) = 0</b>`)}
    <i>(Direct manifestation of the Law of Conservation of Energy).</i>
  `)}

  <!-- DIAGRAM 10: KIRCHHOFF'S RULES -->
  ${imgCard('10', diags[10].title, diags[10].caption, diags[10].b64)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Wheatstone Bridge Principle</h3>
  <p>The Wheatstone bridge is an elegant circuit arrangement of four resistors <i>P, Q, R, S</i> forming a quadrilateral with a galvanometer connected across one diagonal and a battery across the other. At null balance (no deflection in galvanometer, <i>I<sub>g</sub> = 0</i>):</p>

  ${eqBox(`<b>${frac('P', 'Q')} = ${frac('R', 'S')}</b>`)}

  <!-- DIAGRAM 11: WHEATSTONE BRIDGE -->
  ${imgCard('11', diags[11].title, diags[11].caption, diags[11].b64)}

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Meter Bridge (Slide Wire Bridge)</h3>
  <p>The <b>meter bridge</b> is the practical laboratory apparatus based on the balanced Wheatstone bridge principle, featuring a 1-meter long uniform constantan/manganin resistance wire stretched over a meter scale. When balanced at balancing length <i>l</i> cm from the left end:</p>

  ${eqBox(`<b>${frac('R', 'X')} = ${frac('l', '100 - l')} &implies; X = ${frac('100 - l', 'l')} R</b>`)}

  <!-- DIAGRAM 12: METER BRIDGE -->
  ${imgCard('12', diags[12].title, diags[12].caption, diags[12].b64)}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">7. Master Comparison Matrices</h2>

  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px; background: #0B0F19; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,145,0,0.3);">
      <thead>
        <tr style="background: rgba(255,145,0,0.25); color: #FF9100; font-weight: bold; border-bottom: 2px solid #FF9100;">
          <th style="padding: 12px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Property</th>
          <th style="padding: 12px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Resistance (R)</th>
          <th style="padding: 12px 14px;">Resistivity (&rho;)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FFD54F; border-right: 1px solid rgba(255,255,255,0.1);">Definition</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Opposition to current flow in a conductor</td>
          <td style="padding: 10px 14px;">Resistance of unit cube of material</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FFD54F; border-right: 1px solid rgba(255,255,255,0.1);">Dependence on Geometry</td>
          <td style="padding: 10px 14px; color: #4ADE80; font-weight: bold; border-right: 1px solid rgba(255,255,255,0.1);">Depends on Length &amp; Area (R &prop; L/A)</td>
          <td style="padding: 10px 14px; color: #FDE047; font-weight: bold;">Independent of Length &amp; Area</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 14px; font-weight: bold; color: #FFD54F; border-right: 1px solid rgba(255,255,255,0.1);">SI Unit</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Ohm (&Omega;)</td>
          <td style="padding: 10px 14px;">Ohm-meter (&Omega; m)</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; font-weight: bold; color: #FFD54F; border-right: 1px solid rgba(255,255,255,0.1);">Temperature Effect</td>
          <td style="padding: 10px 14px; border-right: 1px solid rgba(255,255,255,0.1);">Increases with temperature in metals</td>
          <td style="padding: 10px 14px;">Increases with temperature in metals</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 36px;">8. Master Revision Formula Cheat Sheet</h2>

  <div style="background: rgba(255, 145, 0, 0.05); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 12px; padding: 18px; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.8;">
      <b>1. Current &amp; Drift Dynamics:</b><br>
      - Current: I = q/t = dq/dt = n e A v<sub>d</sub>.<br>
      - Drift velocity: v<sub>d</sub> = (e E &tau;)/m = (e V &tau;)/(m L).<br>
      - Mobility: &mu; = v<sub>d</sub>/E = (e &tau;)/m.<br>
      - Current density: J = I/A = n e v<sub>d</sub> = &sigma; E.<br><br>

      <b>2. Resistivity, Resistance &amp; Temperature:</b><br>
      - Resistance: R = &rho; L / A = [ m / (n e<sup>2</sup> &tau;) ] (L / A).<br>
      - Resistivity: &rho; = m / (n e<sup>2</sup> &tau;) &nbsp;|&nbsp; Conductivity: &sigma; = 1/&rho; = n e<sup>2</sup> &tau; / m.<br>
      - Temperature dependence: R<sub>T</sub> = R<sub>0</sub> (1 + &alpha; &Delta;T).<br>
      - Series: R<sub>s</sub> = &Sigma; R<sub>i</sub> &nbsp;|&nbsp; Parallel: 1/R<sub>p</sub> = &Sigma; 1/R<sub>i</sub>.<br><br>

      <b>3. Cells, Power &amp; Networks:</b><br>
      - Power: P = V I = I<sup>2</sup> R = V<sup>2</sup> / R &nbsp;|&nbsp; Heat: H = I<sup>2</sup> R t.<br>
      - Discharging cell: V = E - I r &nbsp;|&nbsp; Charging cell: V = E + I r.<br>
      - Internal resistance: r = R [ (E/V) - 1 ].<br>
      - Kirchhoff's Laws: &Sigma; I = 0 (Junction) &nbsp;|&nbsp; &Sigma; &Delta;V = 0 (Loop).<br>
      - Wheatstone Bridge (null condition): P / Q = R / S.<br>
      - Meter Bridge: R / X = l / (100 - l) &implies; X = R (100 - l) / l.
    </div>
  </div>

</div>
`;

// Read existing c12-phy-2.ts to get solutions and mcqs
const c12Phy2Path = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-2.ts');
const rawPhy2 = fs.readFileSync(c12Phy2Path, 'utf8');

const solMatch = rawPhy2.match(/export const c12Phy2HtmlSolutions = ([\s\S]*?);\s*export const c12Phy2Mcqs/);
const mcqMatch = rawPhy2.match(/export const c12Phy2Mcqs = ([\s\S]*?);?\s*$/);

const finalPhy2Code = `// Class 12 Physics Unit II: Current Electricity (JKBOSE / NCERT Official Syllabus - 07 Marks)
// Comprehensive Deep Reference Book Standard (Pradeep's / S.L. Arora) with 5-Layer Topic Breakdown

export const c12Phy2HtmlOverview = ${JSON.stringify(fullOverviewHtml)};

export const c12Phy2HtmlSolutions = ${solMatch[1]};

export const c12Phy2Mcqs = ${mcqMatch[1]};
`;

fs.writeFileSync(c12Phy2Path, finalPhy2Code, 'utf8');
console.log("Successfully rebuilt c12-phy-2.ts with all 15 authentic user-provided diagrams!");
