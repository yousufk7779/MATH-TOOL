const fs = require('fs');
const path = require('path');

const themeColor = "#00c6ff"; // Exact primary theme color for Class 11 Physics Unit IV (Work, Energy and Power)

// Clean compact inline stacked fraction that DOES NOT break lines vertically
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 198, 255, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(0, 198, 255, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 4px;">📌 Definition (${term}):</b>
    <p style="margin: 0; color: #FFFFFF; line-height: 1.6; font-size: 15.5px;">${definition}</p>
  </div>`;
}

// Diagram placeholder
function diagramPlaceholder(title, description) {
  return `
  <div style="border: 2px dashed ${themeColor}; border-radius: 12px; padding: 18px; text-align: center; margin: 20px 0; background: rgba(0, 198, 255, 0.04);">
    <div style="font-size: 22px; margin-bottom: 4px;">🖼️</div>
    <div style="color: ${themeColor}; font-weight: bold; font-size: 15.5px; margin-bottom: 4px;">[ Diagram Placeholder: ${title} ]</div>
    <div style="color: #B0BEC5; font-size: 13.5px; max-width: 600px; margin: 0 auto; line-height: 1.4;">${description}</div>
  </div>`;
}

// Helper for subtopic item with title in themeColor on new line with white explanation text
function colonTopic(title, explanation) {
  return `
  <div style="margin-bottom: 12px;">
    <b style="color: ${themeColor}; font-size: 15.5px; display: block; margin-bottom: 3px;">• ${title}:</b>
    <span style="color: #FFFFFF; line-height: 1.6; display: block; font-size: 15px;">${explanation}</span>
  </div>`;
}

// Helper for single line code formula (strictly nowrap to prevent awkward word wrap on mobile)
function singleLineCode(codeText) {
  return `<code style="font-size: 14px; white-space: nowrap; font-family: monospace; color: #FFFFFF; display: inline-block;">${codeText}</code>`;
}

// Generate Overview HTML
let overviewHtml = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit IV: Work, Energy and Power</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Work (W):</b>
        <span style="color: #FFFFFF;">The scalar product of force vector F and displacement vector s: W = F · s = |F||s| cos θ.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Kinetic Energy (E<sub>k</sub>):</b>
        <span style="color: #FFFFFF;">The capacity of a body to do work by virtue of its motion, defined as E<sub>k</sub> = 1/2 m v<sup>2</sup> = p<sup>2</sup> / (2m).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Work-Energy Theorem:</b>
        <span style="color: #FFFFFF;">The total work done by all net external forces on a body equals the net change in its kinetic energy (W<sub>net</sub> = ΔE<sub>k</sub>).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Power (P):</b>
        <span style="color: #FFFFFF;">The time rate at which work is done by an agent: P = dW / dt = F · v.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Conservative Force:</b>
        <span style="color: #FFFFFF;">A force for which work done in moving a body depends solely on initial and final positions, independent of path.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Potential Energy (U):</b>
        <span style="color: #FFFFFF;">Energy stored in a system by virtue of its position, configuration, or state of strain relative to a reference.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Spring Potential Energy (U<sub>s</sub>):</b>
        <span style="color: #FFFFFF;">Potential energy stored in a stretched/compressed spring of spring constant k: U<sub>s</sub> = 1/2 k x<sup>2</sup>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Elastic Collision:</b>
        <span style="color: #FFFFFF;">A collision in which both total linear momentum AND total kinetic energy are strictly conserved.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Inelastic Collision:</b>
        <span style="color: #FFFFFF;">A collision in which total linear momentum is conserved, but part of kinetic energy is converted into heat, sound, or deformation.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Coefficient of Restitution (e):</b>
        <span style="color: #FFFFFF;">The ratio of relative velocity of separation after collision to relative velocity of approach before collision: e = (v<sub>2</sub> - v<sub>1</sub>) / (u<sub>1</sub> - u<sub>2</sub>).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WORK DONE BY CONSTANT & VARIABLE FORCES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Work Done by Constant and Variable Forces</h2>
  
  ${defCard("Work", "In physics, work is said to be done by a force when the point of application of the force undergoes a displacement along or opposite to the direction of force.")}

  <p>Work is a scalar quantity defined mathematically as the scalar dot product of force vector F and displacement vector s:</p>
  
  ${eqBox("<b>W = F · s = |F| |s| cos θ</b> &nbsp; (SI Unit: <b>Joule, J</b>, CGS Unit: <b>Erg</b>, 1 J = 10<sup>7</sup> Ergs)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Three Categories of Work (Based on Angle θ)</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Positive Work (0° ≤ θ < 90°)", "Work done is positive when force and displacement act in the same general direction (cos θ > 0). Example: Work done by gravity on a falling body (θ = 0°), or work done by a horse pulling a cart.")}
    ${colonTopic("Negative Work (90° < θ ≤ 180°)", "Work done is negative when force opposes displacement (cos θ < 0). Example: Work done by friction on a sliding block (θ = 180°), or work done by gravity on a body thrown vertically upward.")}
    ${colonTopic("Zero Work (θ = 90° or s = 0)", "Work done is zero when force is perpendicular to displacement (cos 90° = 0) or displacement is zero. Example: Work done by centripetal force on a body in circular motion, or work done by a coolie standing with luggage on his head.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Work Done by a Variable Force</h3>
  <p>When force varies continuously with position x, total work done from initial position x<sub>1</sub> to final position x<sub>2</sub> is obtained by definite integration:</p>

  ${eqBox("<b>W = ∫ [F(x) dx] &nbsp; (from x<sub>1</sub> to x<sub>2</sub>) = Area under Force-Displacement (F-x) Graph</b>")}

  ${diagramPlaceholder("Work Done as Area under F-x Graph", "Graphical representation showing variable force curve F(x) and shaded area under curve between x1 and x2 representing total work W.")}

  <!-- SECTION 2: KINETIC ENERGY & WORK-ENERGY THEOREM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Kinetic Energy & Work-Energy Theorem</h2>

  ${defCard("Kinetic Energy (E<sub>k</sub>)", "The energy possessed by a physical body by virtue of its state of motion.")}

  ${eqBox("<b>E<sub>k</sub> = " + frac('1', '2') + " m v<sup>2</sup> = " + frac('p<sup>2</sup>', '2 m') + "</b> &nbsp; (where p = m v is linear momentum)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Statement of Work-Energy Theorem</h3>
  ${defCard("Work-Energy Theorem", "The net work done by all forces (conservative, non-conservative, internal, and external) acting on a body is equal to the net change in its kinetic energy.")}

  ${eqBox("<b>W<sub>net</sub> = ΔE<sub>k</sub> = E<sub>k, final</sub> - E<sub>k, initial</sub> = " + frac('1', '2') + " m v<sup>2</sup> - " + frac('1', '2') + " m u<sup>2</sup></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Proof of Work-Energy Theorem for Variable Force</h3>
  <p>By Newton's second law F = m a = m (dv / dt) = m v (dv / dx):</p>
  
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold;">W = ∫ F dx = ∫ (m v dv/dx) dx = m ∫ v dv &nbsp; (from u to v)</div>
    <div style="color: #FFFFFF; font-size: 16px; font-weight: bold; margin-top: 6px; color: ${themeColor};">W = m [ v<sup>2</sup> / 2 ]<sub>u</sub><sup>v</sup> = " + frac('1', '2') + " m v<sup>2</sup> - " + frac('1', '2') + " m u<sup>2</sup> = ΔE<sub>k</sub></div>
  </div>

  ${diagramPlaceholder("Work-Energy Theorem Integral Area Proof", "Diagram illustrating v-dv integration step for work-energy theorem under variable force.")}

  <!-- SECTION 3: POWER -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Power</h2>

  ${defCard("Power (P)", "The rate at which work is done by an agent, or the rate of transfer of energy per unit time.")}

  ${eqBox("<b>P<sub>avg</sub> = " + frac('W', 't') + " &nbsp;|&nbsp; P<sub>inst</sub> = " + frac('dW', 'dt') + " = F · " + frac('dr', 'dt') + " = F · v = |F| |v| cos θ</b>")}

  <div style="margin: 12px 0;">
    ${colonTopic("SI Unit of Power", "1 Watt (W) = 1 Joule per second (1 J s<sup>-1</sup>). Larger units: 1 kW = 10<sup>3</sup> W, 1 MW = 10<sup>6</sup> W.")}
    ${colonTopic("Horsepower (hp)", singleLineCode("1 hp = 746 Watts"))}
    ${colonTopic("Commercial Unit of Electrical Energy", singleLineCode("1 Kilowatt-hour (kWh) = 1 kW × 1 h = 1000 W × 3600 s = 3.6 × 10<sup>6</sup> Joules"))}
  </div>

  ${diagramPlaceholder("Power P = F · v Vector Diagram", "Vector diagram showing force F pulling a body at velocity v with power output P = F v cos θ.")}

  <!-- SECTION 4: POTENTIAL ENERGY & CONSERVATION OF MECHANICAL ENERGY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Potential Energy & Conservative vs Non-Conservative Forces</h2>

  ${defCard("Potential Energy (U)", "The energy stored within a system by virtue of its position, configuration, or state of strain relative to a reference zero state.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Conservative vs Non-Conservative Forces</h3>
  <div style="overflow-x: auto; margin: 15px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.25); text-align: left; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(0, 198, 255, 0.2); color: ${themeColor}; border-bottom: 2px solid ${themeColor};">
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Property</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Conservative Force</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Non-Conservative Force</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Path Dependence</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Independent of path followed; depends only on initial and final positions.</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Depends directly on the actual path length taken.</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Work in Closed Loop</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work done over a closed round trip is strictly zero: ∮ F · dr = 0.</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work done over a closed loop is non-zero: ∮ F · dr ≠ 0.</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Energy Recovery</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work done is completely recoverable as kinetic energy.</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work done is dissipated as non-recoverable heat or sound.</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Examples</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Gravitational force, Electrostatic force, Spring force.</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Frictional force, Viscous drag, Air resistance.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Potential Energy of a Stretched Spring</h3>
  <p>For an ideal spring obeying Hooke's Law (Restoring force F<sub>s</sub> = -k x where k is spring constant):</p>
  
  ${eqBox("<b>W<sub>ext</sub> = ∫<sub>0</sub><sup>x</sup> (k x') dx' = " + frac('1', '2') + " k x<sup>2</sup> &nbsp; ⇒ &nbsp; Elastic Potential Energy U<sub>s</sub> = " + frac('1', '2') + " k x<sup>2</sup></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Law of Conservation of Mechanical Energy</h3>
  ${defCard("Law of Conservation of Mechanical Energy", "The total mechanical energy E = E_k + U of an isolated system remains strictly constant if only conservative forces do work on the system.")}

  ${eqBox("<b>E<sub>total</sub> = E<sub>k</sub> + U = " + frac('1', '2') + " m v<sup>2</sup> + m g h = Constant</b>")}

  ${diagramPlaceholder("Parabolic Potential and Kinetic Energy Curves of a Spring", "Graph plotting Us = 1/2 k x² (parabola opening up) and Ek = E - 1/2 k x² showing constant sum E.")}

  <!-- SECTION 5: MOTION IN A VERTICAL CIRCLE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Motion in a Vertical Circle (Loop-the-Loop)</h2>

  ${defCard("Vertical Circular Motion", "Non-uniform circular motion of a body tied to a string or inside a vertical track under the combined action of gravity and tension.")}

  <p>Consider a body of mass m tied to a light string of length r rotated in a vertical circle:</p>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    ${colonTopic("Highest Point (Apex H) Critical Conditions", singleLineCode("Minimum Speed v<sub>H</sub> = √(g r) &nbsp;|&nbsp; Tension T<sub>H</sub> = 0"))}
    ${colonTopic("Lowest Point (Bottom L) Critical Conditions", singleLineCode("Minimum Speed v<sub>L</sub> = √(5 g r) &nbsp;|&nbsp; Tension T<sub>L</sub> = 6 m g"))}
    ${colonTopic("Midway Horizontal Point (M) Critical Conditions", singleLineCode("Minimum Speed v<sub>M</sub> = √(3 g r) &nbsp;|&nbsp; Tension T<sub>M</sub> = 3 m g"))}
    ${colonTopic("Tension Difference", singleLineCode("T<sub>L</sub> - T<sub>H</sub> = 6 m g"))}
  </div>

  ${diagramPlaceholder("Motion in a Vertical Circle Forces and Speeds", "Vertical circle diagram illustrating string tension vectors TL, TM, TH and minimum critical velocities for loop-the-loop.")}

  <!-- SECTION 6: COLLISIONS IN ONE AND TWO DIMENSIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Collisions in One and Two Dimensions</h2>

  ${defCard("Collision", "An isolated intense interaction between two or more bodies over a short time interval during which internal forces alter their initial velocities.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Classification of Collisions & Coefficient of Restitution</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Perfectly Elastic Collision (e = 1)", "Both total linear momentum AND total kinetic energy are conserved. No energy is dissipated as heat/sound.")}
    ${colonTopic("Inelastic Collision (0 < e < 1)", "Linear momentum is conserved, but kinetic energy is partially lost to deformation/heat.")}
    ${colonTopic("Perfectly Inelastic Collision (e = 0)", "Colliding bodies stick together after impact and move with a common final velocity V.")}
    ${colonTopic("Coefficient of Restitution (e)", singleLineCode("e = " + frac('v<sub>2</sub> - v<sub>1</sub>', 'u<sub>1</sub> - u<sub>2</sub>') + " = " + frac('Relative Velocity of Separation', 'Relative Velocity of Approach')))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Derivation of Final Velocities in 1D Elastic Collision</h3>
  <p>For two bodies of masses m<sub>1</sub> and m<sub>2</sub> moving with initial velocities u<sub>1</sub> and u<sub>2</sub> along a straight line:</p>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    ${colonTopic("Final Velocity of Mass 1 (v<sub>1</sub>)", singleLineCode("v<sub>1</sub> = [ " + frac('m<sub>1</sub> - m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>1</sub> + [ " + frac('2 m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>2</sub>"))}
    ${colonTopic("Final Velocity of Mass 2 (v<sub>2</sub>)", singleLineCode("v<sub>2</sub> = [ " + frac('2 m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>1</sub> + [ " + frac('m<sub>2</sub> - m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>2</sub>"))}
    ${colonTopic("Special Case: Equal Masses (m<sub>1</sub> = m<sub>2</sub>)", "When equal masses undergo 1D elastic collision, they completely exchange their velocities: <code>v<sub>1</sub> = u<sub>2</sub></code> and <code>v<sub>2</sub> = u<sub>1</sub></code>.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Kinetic Energy Loss in 1D Perfectly Inelastic Collision</h3>
  <p>When mass m<sub>1</sub> moving at u<sub>1</sub> collides and sticks to stationary mass m<sub>2</sub> (u<sub>2</sub> = 0):</p>

  ${eqBox("<b>Common Velocity V = " + frac('m<sub>1</sub> u<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " &nbsp;|&nbsp; K.E. Loss ΔE<sub>k</sub> = " + frac('1', '2') + " [ " + frac('m<sub>1</sub> m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>1</sub><sup>2</sup></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iv) 2D Oblique Elastic Collision</h3>
  <p>For oblique 2D collision in x-y plane, resolve momentum conservation along x-axis and y-axis independently:</p>
  <div style="margin: 10px 0;">
    ${colonTopic("x-axis Momentum", singleLineCode("m<sub>1</sub> u<sub>1</sub> = m<sub>1</sub> v<sub>1</sub> cos θ<sub>1</sub> + m<sub>2</sub> v<sub>2</sub> cos θ<sub>2</sub>"))}
    ${colonTopic("y-axis Momentum", singleLineCode("0 = m<sub>1</sub> v<sub>1</sub> sin θ<sub>1</sub> - m<sub>2</sub> v<sub>2</sub> sin θ<sub>2</sub>"))}
  </div>

  ${diagramPlaceholder("1D and 2D Elastic Collision Vector Diagrams", "Schematic diagram comparing head-on 1D elastic collision velocity swap vs 2D oblique collision scattering angles θ1 and θ2.")}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Energy Theorems & Collision Relations Summary for Unit IV</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Work & Work-Energy Theorem:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">W = F · s = |F||s| cos θ &nbsp;|&nbsp; W = ∫ F dx<br>W<sub>net</sub> = ΔE<sub>k</sub> = ` + frac('1', '2') + ` m v<sup>2</sup> - ` + frac('1', '2') + ` m u<sup>2</sup></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Power & Commercial Unit:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">P = ` + frac('dW', 'dt') + ` = F · v = F v cos θ<br>1 hp = 746 W &nbsp;|&nbsp; 1 kWh = 3.6 × 10<sup>6</sup> J</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Potential Energy Formulas:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Gravitational: U = m g h<br>Spring PE: U<sub>s</sub> = ` + frac('1', '2') + ` k x<sup>2</sup> (F<sub>s</sub> = -k x)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Vertical Circle Limits:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>L</sub> ≥ √(5 g r) &nbsp;|&nbsp; v<sub>H</sub> ≥ √(g r)<br>T<sub>L</sub> - T<sub>H</sub> = 6 m g</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• 1D Elastic Collision Velocities:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>1</sub> = [ ` + frac('m<sub>1</sub> - m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>1</sub> + [ ` + frac('2 m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>2</sub><br>v<sub>2</sub> = [ ` + frac('2 m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>1</sub> + [ ` + frac('m<sub>2</sub> - m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] u<sub>2</sub></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Inelastic Collision & e:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">e = ` + frac('v<sub>2</sub> - v<sub>1</sub>', 'u<sub>1</sub> - u<sub>2</sub>') + `<br>K.E. Loss = ` + frac('1', '2') + ` [ ` + frac('m<sub>1</sub> m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + ` ] (u<sub>1</sub> - u<sub>2</sub>)<sup>2</sup></span>
      </div>
    </div>
  </div>

</div>
`;

// Helper for solution box
function solBox(qNo, title, question, solution) {
  return `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">Q${qNo}: ${title}</h3>
    <div style="color: #F0F0F0; margin-bottom: 12px; line-height: 1.6; font-size: 15.5px;">${question}</div>
    <div style="background: rgba(0, 198, 255, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Explanation:</b>
      ${solution}
    </div>
  </div>`;
}

// Generate Solutions HTML
let solutionsHtml = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">
  
  <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid ${themeColor}; padding-bottom: 10px;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 22px; font-weight: bold; text-align: center !important;">NCERT & Master Solutions Guide</h2>
    <p style="color: #B0BEC5; margin: 5px 0 0 0; font-size: 15px; text-align: center !important;">Unit IV: Work, Energy and Power — 100 Master Practice Questions (Theoretical & Numerical)</p>
  </div>
`;

// Rebalanced 100 Questions for Unit IV (Work, Energy and Power)
const mcqs = [
  { q: "Work done on a body is maximum when the angle θ between force and displacement is:", opts: ["a) 0°", "b) 45°", "c) 90°", "d) 180°"], ans: "a) 0°", exp: "W = F s cos θ. W is maximum when cos θ = 1, which occurs at θ = 0°." },
  { q: "The work done by centripetal force on a body moving in a circular path is:", opts: ["a) Positive", "b) Negative", "c) Zero", "d) Infinite"], ans: "c) Zero", exp: "Centripetal force is always perpendicular to displacement (θ = 90°), so W = F s cos 90° = 0." },
  { q: "A body of mass 2 kg moving at 4 m s<sup>-1</sup> has kinetic energy of:", opts: ["a) 4 J", "b) 8 J", "c) 16 J", "d) 32 J"], ans: "c) 16 J", exp: "E<sub>k</sub> = 1/2 m v<sup>2</sup> = 1/2 (2) (4<sup>2</sup>) = 16 Joules." },
  { q: "If linear momentum of a body is doubled, its kinetic energy increases by a factor of:", opts: ["a) 2", "b) 4", "c) 8", "d) Remains same"], ans: "b) 4", exp: "E<sub>k</sub> = p<sup>2</sup> / (2m). If p becomes 2p, E<sub>k</sub>' = (2p)<sup>2</sup> / (2m) = 4 E<sub>k</sub>." },
  { q: "The area under Force-Displacement (F-x) graph represents:", opts: ["a) Power", "b) Acceleration", "c) Work done", "d) Momentum"], ans: "c) Work done", exp: "Area under F-x graph = ∫ F dx = Work done." },
  { q: "Which of the following is a non-conservative force?", opts: ["a) Gravitational force", "b) Electrostatic force", "c) Frictional force", "d) Spring force"], ans: "c) Frictional force", exp: "Friction is a non-conservative force because work done against friction depends on path length and is non-recoverable." },
  { q: "Work done over a complete closed loop by a conservative force is:", opts: ["a) Maximum", "b) Zero", "c) Infinity", "d) Negative"], ans: "b) Zero", exp: "For a conservative force, ∮ F · dr = 0 over any closed loop." },
  { q: "The elastic potential energy stored in a spring stretched by distance x is:", opts: ["a) k x", "b) 1/2 k x", "c) 1/2 k x<sup>2</sup>", "d) k x<sup>2</sup>"], ans: "c) 1/2 k x<sup>2</sup>", exp: "U<sub>s</sub> = 1/2 k x<sup>2</sup>." },
  { q: "1 Horsepower (hp) is equal to how many Watts?", opts: ["a) 500 W", "b) 746 W", "c) 1000 W", "d) 3.6 × 10<sup>6</sup> W"], ans: "b) 746 W", exp: "1 hp = 746 Watts." },
  { q: "1 Kilowatt-hour (kWh) in Joules is equal to:", opts: ["a) 3.6 × 10<sup>5</sup> J", "b) 3.6 × 10<sup>6</sup> J", "c) 10<sup>3</sup> J", "d) 746 J"], ans: "b) 3.6 × 10<sup>6</sup> J", exp: "1 kWh = 1000 W × 3600 s = 3.6 × 10<sup>6</sup> Joules." },
  { q: "In a perfectly elastic collision, which quantity is conserved?", opts: ["a) Kinetic energy only", "b) Linear momentum only", "c) Both linear momentum and kinetic energy", "d) Neither momentum nor kinetic energy"], ans: "c) Both linear momentum and kinetic energy", exp: "Perfectly elastic collisions strictly conserve both linear momentum and kinetic energy." },
  { q: "The coefficient of restitution e for a perfectly inelastic collision is:", opts: ["a) 1", "b) 0", "c) 0.5", "d) Infinite"], ans: "b) 0", exp: "In a perfectly inelastic collision, colliding bodies stick together (v<sub>1</sub> = v<sub>2</sub>), so e = (v<sub>2</sub> - v<sub>1</sub>)/(u<sub>1</sub> - u<sub>2</sub>) = 0." },
  { q: "Minimum speed required at lowest point to complete a vertical circular loop of radius r is:", opts: ["a) √(g r)", "b) √(3 g r)", "c) √(5 g r)", "d) √(7 g r)"], ans: "c) √(5 g r)", exp: "At the bottom of vertical circle, critical speed v<sub>L</sub> = √(5 g r)." },
  { q: "The minimum speed required at the apex (highest point) of a vertical circular loop of radius r is:", opts: ["a) √(g r)", "b) √(2 g r)", "c) √(3 g r)", "d) √(5 g r)"], ans: "a) √(g r)", exp: "At top of vertical loop, critical speed v<sub>H</sub> = √(g r)." },
  { q: "Tension difference between lowest point T<sub>L</sub> and highest point T<sub>H</sub> in vertical circular motion is:", opts: ["a) 2 m g", "b) 4 m g", "c) 6 m g", "d) 8 m g"], ans: "c) 6 m g", exp: "T<sub>L</sub> - T<sub>H</sub> = 6 m g." },
  { q: "When two equal masses undergo 1D head-on elastic collision, their final velocities:", opts: ["a) Become zero", "b) Double", "c) Swap completely", "d) Become equal to average speed"], ans: "c) Swap completely", exp: "For equal masses (m<sub>1</sub> = m<sub>2</sub>) in 1D elastic collision, v<sub>1</sub> = u<sub>2</sub> and v<sub>2</sub> = u<sub>1</sub>." },
  { q: "Work done by friction force on a sliding block is:", opts: ["a) Always positive", "b) Always negative", "c) Always zero", "d) Undefined"], ans: "b) Always negative", exp: "Friction acts at 180° to displacement (cos 180° = -1), making work done negative." },
  { q: "If spring constant k is doubled for same stretch x, stored potential energy becomes:", opts: ["a) Halved", "b) Doubled", "c) 4 times", "d) Unchanged"], ans: "b) Doubled", exp: "U = 1/2 k x<sup>2</sup>. Direct linear dependence on k." },
  { q: "A 50 kg man climbs 20 steps of height 0.2 m each in 10 s. Power output is (g = 10 m s<sup>-2</sup>):", opts: ["a) 100 W", "b) 200 W", "c) 400 W", "d) 500 W"], ans: "b) 200 W", exp: "Height h = 20 × 0.2 = 4 m. Work W = m g h = 50 × 10 × 4 = 2000 J. Power P = W / t = 2000 / 10 = 200 W." },
  { q: "Work done by a force F = 3 î + 4 ĵ N for displacement s = 5 î m is:", opts: ["a) 7 J", "b) 12 J", "c) 15 J", "d) 20 J"], ans: "c) 15 J", exp: "W = F · s = (3)(5) + (4)(0) = 15 Joules." },
  { q: "Dimensions of Power are:", opts: ["a) [M L T<sup>-2</sup>]", "b) [M L<sup>2</sup> T<sup>-2</sup>]", "c) [M L<sup>2</sup> T<sup>-3</sup>]", "d) [M L<sup>-1</sup> T<sup>-2</sup>]"], ans: "c) [M L<sup>2</sup> T<sup>-3</sup>]", exp: "Power = Work / Time = [M L<sup>2</sup> T<sup>-2</sup>] / [T] = [M L<sup>2</sup> T<sup>-3</sup>]." },
  { q: "A bullet embeds into a wooden block resting on smooth surface. The collision is:", opts: ["a) Perfectly elastic", "b) Perfectly inelastic", "c) Partially elastic", "d) Conservative"], ans: "b) Perfectly inelastic", exp: "Since bullet embeds and moves with block at common velocity (e = 0), collision is perfectly inelastic." },
  { q: "The rate of doing work is called:", opts: ["a) Force", "b) Energy", "c) Power", "d) Momentum"], ans: "c) Power", exp: "Power P = dW/dt." },
  { q: "Potential energy curve U(x) and force F(x) are related by:", opts: ["a) F = dU / dx", "b) F = - dU / dx", "c) F = U<sup>2</sup>", "d) F = ∫ U dx"], ans: "b) F = - dU / dx", exp: "For conservative force, F = - dU/dx." },
  { q: "A force F = 10 N moves a block at constant velocity 5 m s<sup>-1</sup> in its direction. Power is:", opts: ["a) 2 W", "b) 15 W", "c) 50 W", "d) 100 W"], ans: "c) 50 W", exp: "P = F v = 10 × 5 = 50 W." }
];

solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 25px;">Part A: Multiple Choice Questions (Q1 - Q25)</h3>`;

// MCQ RENDERING WITH VERTICAL STACKED LEFT-ALIGNED OPTIONS (PREVENTS TEXT JUSTIFICATION & OVERLAP DISTORTIONS)
mcqs.forEach((item, index) => {
  let qNo = index + 1;
  let qText = `${item.q}<div style="margin: 12px 0; text-align: left !important; line-height: 1.8; color: #FFCC80;">
    <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${item.opts[0]}</div>
    <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${item.opts[1]}</div>
    <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${item.opts[2]}</div>
    <div class="mcq-option" style="text-align: left !important; margin: 4px 0;">${item.opts[3]}</div>
  </div>`;
  let solText = `<b>Correct Answer: <span style="color: ${themeColor};">${item.ans}</span></b><br>${item.exp}`;
  solutionsHtml += solBox(qNo, "Multiple Choice Question", qText, solText);
});

// VSAs Q26-Q55: Strong Theoretical Focus
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part B: Very Short Answer Questions (Q26 - Q55)</h3>`;

const vsas = [
  { t: "Define Work", q: "Define work in physics and state its SI unit.", s: "Work is done when a force causes displacement along or opposite to force direction: W = F · s = |F||s| cos θ. SI unit: Joule (J)." },
  { t: "Positive Work Condition", q: "When is work done said to be positive? Give one example.", s: "Work is positive when force and displacement act in same direction (0° ≤ θ < 90°). Example: Work done by gravitational force on falling apple." },
  { t: "Negative Work Condition", q: "When is work done negative? Give one example.", s: "Work is negative when force opposes displacement (90° < θ ≤ 180°). Example: Work done by friction on sliding block." },
  { t: "Zero Work Condition", q: "State two conditions under which work done is zero.", s: "1. Displacement is zero (s = 0).<br>2. Force is perpendicular to displacement (θ = 90°)." },
  { t: "Work Done by Variable Force Formula", q: "State formula for work done by a variable force F(x).", s: "W = ∫<sub>x1</sub><sup>x2</sup> F(x) dx = Area under F-x graph." },
  { t: "Define Kinetic Energy", q: "Define kinetic energy and state its formula.", s: "Kinetic energy is energy possessed by a body due to its motion: E<sub>k</sub> = 1/2 m v<sup>2</sup> = p<sup>2</sup> / (2m)." },
  { t: "State Work-Energy Theorem", q: "State the Work-Energy Theorem.", s: "Work-Energy Theorem states that net work done by all forces on a body equals net change in its kinetic energy: W<sub>net</sub> = ΔE<sub>k</sub>." },
  { t: "Define Power", q: "Define power and state its SI unit.", s: "Power is rate of doing work or energy transfer per unit time: P = dW/dt = F · v. SI unit: Watt (W)." },
  { t: "Define Horsepower", q: "State the relation between Horsepower and Watt.", s: "1 Horsepower (hp) = 746 Watts." },
  { t: "Define Kilowatt-Hour", q: "Define 1 kilowatt-hour (kWh) and convert it into Joules.", s: "1 kWh is commercial unit of energy consumed by 1 kW appliance in 1 hour. 1 kWh = 3.6 × 10<sup>6</sup> Joules." },
  { t: "Define Conservative Force", q: "Define a conservative force with two examples.", s: "A force is conservative if work done by it depends only on initial/final positions and ∮ F · dr = 0 (e.g. Gravitational force, Electrostatic force)." },
  { t: "Define Non-Conservative Force", q: "Define a non-conservative force with two examples.", s: "A force is non-conservative if work done depends on path length (e.g. Frictional force, Viscous drag)." },
  { t: "Define Gravitational Potential Energy", q: "State formula for gravitational potential energy near Earth surface.", s: "U = m g h (where h is height above reference plane)." },
  { t: "Spring Potential Energy Formula", q: "State formula for potential energy stored in a stretched spring.", s: "U<sub>s</sub> = 1/2 k x<sup>2</sup> (where k is spring constant and x is elongation)." },
  { t: "Conservation of Mechanical Energy Statement", q: "State Law of Conservation of Mechanical Energy.", s: "Total mechanical energy E = E<sub>k</sub> + U of an isolated system remains constant under conservative forces." },
  { t: "Define Elastic Collision", q: "What is an elastic collision?", s: "An elastic collision is one in which both total linear momentum AND total kinetic energy are strictly conserved." },
  { t: "Define Inelastic Collision", q: "What is an inelastic collision?", s: "An inelastic collision is one in which linear momentum is conserved, but kinetic energy is partially lost." },
  { t: "Define Perfectly Inelastic Collision", q: "What is a perfectly inelastic collision?", s: "A collision where colliding bodies stick together after impact and move with a common final velocity (e = 0)." },
  { t: "Coefficient of Restitution Formula", q: "State formula for coefficient of restitution e.", s: "e = (v<sub>2</sub> - v<sub>1</sub>) / (u<sub>1</sub> - u<sub>2</sub>)." },
  { t: "Coefficient of Restitution Values", q: "State values of e for elastic and perfectly inelastic collisions.", s: "For elastic collision e = 1; for perfectly inelastic collision e = 0." },
  { t: "Critical Speed at Lowest Point of Vertical Circle", q: "State minimum speed at bottom to complete vertical circle of radius r.", s: "v<sub>L</sub> = √(5 g r)." },
  { t: "Critical Speed at Apex of Vertical Circle", q: "State minimum speed at top to complete vertical circle of radius r.", s: "v<sub>H</sub> = √(g r)." },
  { t: "Tension Difference in Vertical Circle", q: "State tension difference T<sub>L</sub> - T<sub>H</sub> in vertical circular motion.", s: "T<sub>L</sub> - T<sub>H</sub> = 6 m g." },
  { t: "Relation between F and U", q: "Write differential relation between conservative force F and potential energy U.", s: "F = - dU / dx." },
  { t: "Spring Force Formula (Hooke's Law)", q: "State Hooke's Law for spring restoring force.", s: "F<sub>s</sub> = - k x." },
  { t: "Work Done by Centripetal Force", q: "Why is work done by centripetal force always zero?", s: "Because centripetal force acts perpendicular to instantaneous displacement (θ = 90°), cos 90° = 0." },
  { t: "Exchange of Velocities in 1D Elastic Collision", q: "Under what condition do colliding bodies exchange velocities in 1D elastic collision?", s: "When two colliding bodies have equal masses (m<sub>1</sub> = m<sub>2</sub>)." },
  { t: "Dimension of Work", q: "State dimensional formula of Work.", s: "Dimensions of Work = [M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]." },
  { t: "Dimension of Power", q: "State dimensional formula of Power.", s: "Dimensions of Power = [M<sup>1</sup> L<sup>2</sup> T<sup>-3</sup>]." },
  { t: "Light vs Heavy Body Momentum Relation", q: "If light body A and heavy body B have equal kinetic energy, which has larger momentum?", s: "Heavy body B has larger momentum because p = √(2 m E<sub>k</sub>), so p ∝ √m for constant E<sub>k</sub>." }
];

vsas.forEach((item, idx) => {
  let qNo = idx + 26;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// SAs Q56-Q85: Theoretical & Conceptual Reasoning Mixed with Simple Derivations
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part C: Short Answer Questions (Q56 - Q85)</h3>`;

const sas = [
  { t: "Work Done by Constant Force Vector Problem", q: "Force F = 2 î - 3 ĵ + 4 k̂ N displaces a body from r<sub>1</sub> = î + 2 ĵ + k̂ m to r<sub>2</sub> = 3 î + 4 ĵ + 5 k̂ m. Calculate work done.", s: "Displacement s = r<sub>2</sub> - r<sub>1</sub> = (3-1)î + (4-2)ĵ + (5-1)k̂ = 2 î + 2 ĵ + 4 k̂ m.<br>Work W = F · s = (2)(2) + (-3)(2) + (4)(4) = 4 - 6 + 16 = <b>14 Joules</b>." },
  { t: "Work Done by Variable Force F(x) Integral Problem", q: "A variable force F(x) = (3 x<sup>2</sup> + 2 x) N acts on a particle from x = 1 m to x = 3 m. Calculate work done.", s: "W = ∫<sub>1</sub><sup>3</sup> (3 x<sup>2</sup> + 2 x) dx = [x<sup>3</sup> + x<sup>2</sup>]<sub>1</sub><sup>3</sup>.<br>At x = 3: 3<sup>3</sup> + 3<sup>2</sup> = 27 + 9 = 36.<br>At x = 1: 1<sup>3</sup> + 1<sup>2</sup> = 1 + 1 = 2.<br>W = 36 - 2 = <b>34 Joules</b>." },
  { t: "Derive Work-Energy Theorem for Constant Force", q: "Derive Work-Energy Theorem W = 1/2 m v<sup>2</sup> - 1/2 m u<sup>2</sup> for constant force.", s: "From equation of motion v<sup>2</sup> - u<sup>2</sup> = 2 a s ⇒ s = (v<sup>2</sup> - u<sup>2</sup>) / (2 a).<br>Work done W = F × s = (m a) × [ (v<sup>2</sup> - u<sup>2</sup>) / (2 a) ].<br>Canceling acceleration a:<br><b>W = " + frac('1', '2') + " m v<sup>2</sup> - " + frac('1', '2') + " m u<sup>2</sup> = ΔE<sub>k</sub></b>." },
  { t: "Derive Potential Energy of Stretched Spring", q: "Derive formula U<sub>s</sub> = 1/2 k x<sup>2</sup> for potential energy of spring.", s: "Restoring force F<sub>s</sub> = -k x. External force needed F<sub>ext</sub> = k x.<br>Work done to stretch spring by small dx: dW = F<sub>ext</sub> dx = k x dx.<br>Total work U<sub>s</sub> = ∫<sub>0</sub><sup>x</sup> k x' dx' = k [ x'<sup>2</sup> / 2 ]<sub>0</sub><sup>x</sup> = <b>" + frac('1', '2') + " k x<sup>2</sup></b>." },
  { t: "Prove Conservative Force Work in Closed Loop is Zero", q: "Prove that work done by gravity over a closed round trip is zero.", s: "Body of mass m lifted to height h: W<sub>up</sub> = m g h cos 180° = -m g h.<br>Body falls back from height h: W<sub>down</sub> = m g h cos 0° = +m g h.<br>Total work W<sub>total</sub> = W<sub>up</sub> + W<sub>down</sub> = -m g h + m g h = <b>0</b>." },
  { t: "Spring Extension Problem", q: "A spring of spring constant k = 200 N m<sup>-1</sup> is compressed by 0.1 m. Calculate stored elastic potential energy.", s: "U<sub>s</sub> = 1/2 k x<sup>2</sup> = 1/2 (200) (0.1)<sup>2</sup> = 100 × 0.01 = <b>1 Joule</b>." },
  { t: "Power Output of Engine Problem", q: "An engine pumps 1000 kg of water to a height of 10 m in 20 s. Calculate power output in Watts and hp (g = 10 m s<sup>-2</sup>).", s: "Work W = m g h = 1000 × 10 × 10 = 100,000 J.<br>Power P = W / t = 100,000 / 20 = <b>5000 Watts (5 kW)</b>.<br>In hp: P = 5000 / 746 = <b>6.7 Horsepower</b>." },
  { t: "Light vs Heavy Body Speed for Equal Momentum", q: "If light body m<sub>1</sub> and heavy body m<sub>2</sub> (m<sub>2</sub> > m<sub>1</sub>) have equal linear momentum p, show that light body has larger kinetic energy.", s: "E<sub>k</sub> = p<sup>2</sup> / (2 m). Since p is same for both:<br>E<sub>k1</sub> / E<sub>k2</sub> = m<sub>2</sub> / m<sub>1</sub>.<br>Since m<sub>2</sub> > m<sub>1</sub>, E<sub>k1</sub> > E<sub>k2</sub>. <b>Lighter body has larger kinetic energy!</b>" },
  { t: "Stopping Distance Comparison Problem", q: "Two cars of masses m<sub>1</sub> and m<sub>2</sub> moving at same velocity v apply identical braking force F. Compare stopping distances.", s: "By Work-Energy Theorem: F × s = 1/2 m v<sup>2</sup> ⇒ s = (m v<sup>2</sup>) / (2 F).<br>For same v and F: s ∝ m. <b>Heavier car requires larger stopping distance!</b>" },
  { t: "Kinetic Energy Loss in 1D Inelastic Collision Derivation", q: "Derive expression for kinetic energy loss when mass m<sub>1</sub> moving at u<sub>1</sub> collides with stationary m<sub>2</sub> (u<sub>2</sub> = 0) perfectly inelastically.", s: "Common velocity V = (m<sub>1</sub> u<sub>1</sub>) / (m<sub>1</sub> + m<sub>2</sub>).<br>Initial K.E. E<sub>k1</sub> = 1/2 m<sub>1</sub> u<sub>1</sub><sup>2</sup>.<br>Final K.E. E<sub>k2</sub> = 1/2 (m<sub>1</sub> + m<sub>2</sub>) V<sup>2</sup> = 1/2 (m<sub>1</sub> + m<sub>2</sub>) [ m<sub>1</sub> u<sub>1</sub> / (m<sub>1</sub> + m<sub>2</sub>) ]<sup>2</sup> = 1/2 [ m<sub>1</sub><sup>2</sup> u<sub>1</sub><sup>2</sup> / (m<sub>1</sub> + m<sub>2</sub>) ].<br>Loss ΔE<sub>k</sub> = E<sub>k1</sub> - E<sub>k2</sub> = 1/2 m<sub>1</sub> u<sub>1</sub><sup>2</sup> [ 1 - m<sub>1</sub> / (m<sub>1</sub> + m<sub>2</sub>) ] = <b>" + frac('1', '2') + " [ " + frac('m<sub>1</sub> m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>1</sub><sup>2</sup></b>." },
  { t: "Vertical Circle Tension at Lowest vs Highest Point Derivation", q: "Derive expressions for string tension at lowest point T<sub>L</sub> and highest point T<sub>H</sub> in vertical circular motion.", s: "At lowest point L: T<sub>L</sub> - mg = m v<sub>L</sub><sup>2</sup> / r ⇒ T<sub>L</sub> = mg + m v<sub>L</sub><sup>2</sup> / r.<br>For critical loop v<sub>L</sub> = √(5 gr): T<sub>L</sub> = mg + m(5 gr)/r = <b>6 mg</b>.<br><br>At highest point H: T<sub>H</sub> + mg = m v<sub>H</sub><sup>2</sup> / r ⇒ T<sub>H</sub> = m v<sub>H</sub><sup>2</sup> / r - mg.<br>For critical loop v<sub>H</sub> = √(gr): T<sub>H</sub> = m(gr)/r - mg = <b>0</b>." },
  { t: "1D Elastic Collision Velocity Exchange Proof", q: "Prove that when two equal masses collide elastically in 1D, they completely swap their velocities.", s: "Velocity formulas:<br>v<sub>1</sub> = [ (m<sub>1</sub> - m<sub>2</sub>)/(m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub> + [ 2 m<sub>2</sub> / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>2</sub>.<br>v<sub>2</sub> = [ 2 m<sub>1</sub> / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub> + [ (m<sub>2</sub> - m<sub>1</sub>)/(m<sub>1</sub> + m<sub>2</sub>) ] u<sub>2</sub>.<br>Substitute m<sub>1</sub> = m<sub>2</sub> = m:<br>v<sub>1</sub> = (0) u<sub>1</sub> + (2m / 2m) u<sub>2</sub> = <b>u<sub>2</sub></b>.<br>v<sub>2</sub> = (2m / 2m) u<sub>1</sub> + (0) u<sub>2</sub> = <b>u<sub>1</sub></b>. Velocities are swapped!" },
  { t: "Rain Drop Terminal Velocity & Work Done", q: "A raindrop of mass 1 g falls from height 1 km and hits ground with 50 m s<sup>-1</sup>. Calculate work done by gravity and air resistance (g = 10 m s<sup>-2</sup>).", s: "Work by gravity W<sub>g</sub> = m g h = 0.001 × 10 × 1000 = <b>10 Joules</b>.<br>Net K.E. change ΔE<sub>k</sub> = 1/2 m v<sup>2</sup> = 1/2 (0.001) (50<sup>2</sup>) = 0.5 × 2.5 = <b>1.25 Joules</b>.<br>By Work-Energy Theorem: W<sub>g</sub> + W<sub>air</sub> = ΔE<sub>k</sub> ⇒ 10 + W<sub>air</sub> = 1.25.<br><b>W<sub>air</sub> = 1.25 - 10 = -8.75 Joules</b>." },
  { t: "Potential Energy Function Force Calculation", q: "Potential energy function U(x) = 5 x<sup>2</sup> - 4 x J. Find force F(x) and equilibrium position.", s: "Force F(x) = - dU/dx = - d/dx (5 x<sup>2</sup> - 4 x) = <b>-(10 x - 4) = 4 - 10 x</b>.<br>At equilibrium F(x) = 0 ⇒ 4 - 10 x = 0 ⇒ <b>x = 0.4 m</b>." },
  { t: "Colliding Masses Common Velocity Problem", q: "A 2 kg mass moving at 6 m s<sup>-1</sup> collides with a 4 kg mass moving at 3 m s<sup>-1</sup> in same direction and sticks. Find common speed.", s: "Conservation of momentum: m<sub>1</sub> u<sub>1</sub> + m<sub>2</sub> u<sub>2</sub> = (m<sub>1</sub> + m<sub>2</sub>) V.<br>2(6) + 4(3) = (2 + 4) V ⇒ 12 + 12 = 6 V ⇒ 24 = 6 V.<br><b>Common Speed V = 4 m s<sup>-1</sup></b>." },
  { t: "Calculate kWh Energy Consumption", q: "A house runs 4 bulbs of 100 W for 5 h daily and 1 electric heater of 1000 W for 2 h daily. Calculate total energy in kWh consumed in 30 days.", s: "Daily energy bulbs = 4 × 100 W × 5 h = 2000 Wh = 2 kWh.<br>Daily energy heater = 1000 W × 2 h = 2000 Wh = 2 kWh.<br>Total daily energy = 2 + 2 = 4 kWh.<br>Total 30 days energy = 4 × 30 = <b>120 kWh (Units)</b>." },
  { t: "Conservation of Energy Free Fall Proof", q: "Prove conservation of mechanical energy for a body of mass m falling freely under gravity from height h.", s: "<b>Top (A):</b> E<sub>k</sub> = 0, U = mgh ⇒ E<sub>A</sub> = mgh.<br><b>Middle (B, fallen x):</b> v<sup>2</sup> = 2gx ⇒ E<sub>kB</sub> = 1/2 m(2gx) = mgx, U<sub>B</sub> = mg(h-x) ⇒ E<sub>B</sub> = mgx + mgh - mgx = mgh.<br><b>Bottom (C):</b> v<sup>2</sup> = 2gh ⇒ E<sub>kC</sub> = mgh, U<sub>C</sub> = 0 ⇒ E<sub>C</sub> = mgh.<br><b>E<sub>A</sub> = E<sub>B</sub> = E<sub>C</sub> = mgh (Conserved!)</b>." },
  { t: "Power Required to Move Car against Friction", q: "A car of 1000 kg moves up an incline of 1 in 20 at constant 18 km h<sup>-1</sup>. Friction is 100 N. Find engine power (g = 10 m s<sup>-2</sup>).", s: "Speed v = 18 × (5/18) = 5 m/s. sin θ = 1/20.<br>Parallel gravity component = mg sin θ = 1000 × 10 × (1/20) = 500 N.<br>Total opposing force F = 500 + 100 (friction) = 600 N.<br>Engine Power P = F × v = 600 × 5 = <b>3000 Watts (3 kW)</b>." },
  { t: "Spring Compressed by Falling Mass Problem", q: "A 2 kg mass falls from height 0.4 m onto a vertical spring of k = 1960 N m<sup>-1</sup>. Calculate max compression x (g = 9.8 m s<sup>-2</sup>).", s: "Loss in gravitational PE = Gain in spring PE.<br>m g (h + x) = 1/2 k x<sup>2</sup> ⇒ 2(9.8)(0.4 + x) = 1/2 (1960) x<sup>2</sup>.<br>19.6 (0.4 + x) = 980 x<sup>2</sup> ⇒ 7.84 + 19.6 x = 980 x<sup>2</sup>.<br>980 x<sup>2</sup> - 19.6 x - 7.84 = 0 ⇒ 50 x<sup>2</sup> - x - 0.4 = 0.<br>Solving quadratic: <b>x = 0.1 m (10 cm)</b>." },
  { t: "Coefficient of Restitution Bounce Height Problem", q: "A ball dropped from height h rebound to height h'. Express e in terms of h and h'.", s: "Impact velocity u = √(2 g h), rebound velocity v = √(2 g h').<br>e = v / u = √(2 g h') / √(2 g h) = <b>√(h' / h)</b>." },
  { t: "Elastic Collision 2D Equations Setup", q: "State 3 scalar equations governing a 2D oblique elastic collision between mass m<sub>1</sub> and m<sub>2</sub>.", s: "1. <b>x-momentum:</b> m<sub>1</sub> u<sub>1</sub> = m<sub>1</sub> v<sub>1</sub> cos θ<sub>1</sub> + m<sub>2</sub> v<sub>2</sub> cos θ<sub>2</sub>.<br>2. <b>y-momentum:</b> 0 = m<sub>1</sub> v<sub>1</sub> sin θ<sub>1</sub> - m<sub>2</sub> v<sub>2</sub> sin θ<sub>2</sub>.<br>3. <b>Kinetic Energy:</b> 1/2 m<sub>1</sub> u<sub>1</sub><sup>2</sup> = 1/2 m<sub>1</sub> v<sub>1</sub><sup>2</sup> + 1/2 m<sub>2</sub> v<sub>2</sub><sup>2</sup>." },
  { t: "Work Done Lifting Hanging Rope Problem", q: "A uniform rope of mass M and length L lies on floor. Calculate work needed to lift one end to height L.", s: "Center of gravity of lifted rope rises to height L/2.<br>Work W = M g h<sub>cg</sub> = M g (L / 2) = <b>1/2 M g L</b>." },
  { t: "Kinetic Energy Ratio from Velocity Ratio", q: "Two bodies have mass ratio 1:4 and kinetic energy ratio 4:1. Calculate ratio of their linear momenta.", s: "p = √(2 m E<sub>k</sub>).<br>p<sub>1</sub> / p<sub>2</sub> = √[ (m<sub>1</sub> E<sub>k1</sub>) / (m<sub>2</sub> E<sub>k2</sub>) ] = √[ (1 × 4) / (4 × 1) ] = √1 = <b>1:1 (Equal momenta!)</b>." },
  { t: "Conservative Force Gradient Property", q: "Show that F = - dU/dx implies force points in direction of decreasing potential energy.", s: "Since F = - dU/dx, if dU/dx is positive (U increases with x), F is negative (points in -x direction). Thus force always drives system toward lower potential energy!" },
  { t: "Power delivered by Constant Force to Mass m from Rest", q: "A constant force F acts on mass m starting from rest. Derive power P as a function of time t.", s: "Acceleration a = F / m. Velocity at time t: v = a t = (F / m) t.<br>Instantaneous Power P = F · v = F × (F / m) t = <b>(F<sup>2</sup> / m) t</b>." },
  { t: "Work-Energy Theorem Application to Bullet", q: "A 10 g bullet moving at 200 m s<sup>-1</sup> penetrates 4 cm into mud block before stopping. Find average retarding force.", s: "Initial K.E. = 1/2 (0.01) (200<sup>2</sup>) = 0.5 × 0.01 × 40000 = 200 Joules.<br>By Work-Energy Theorem: W = -F × s = -200 J.<br>F × 0.04 = 200 ⇒ F = 200 / 0.04 = <b>5000 Newtons</b>." },
  { t: "Collision of Pendulum Bob Problem", q: "A pendulum bob of mass m released from height h collides elastically with identical stationary mass m on table. Find height to which table mass rises.", s: "Bob reaches bottom with speed u = √(2 gh). In 1D elastic collision between equal masses, velocities swap.<br>Table mass acquires speed v = √(2 gh) and rises to same height <b>h</b>!" },
  { t: "Stable vs Unstable Equilibrium from U(x)", q: "Explain conditions for stable, unstable, and neutral equilibrium using d<sup>2</sup>U/dx<sup>2</sup>.", s: "At equilibrium dU/dx = 0.<br>1. <b>Stable:</b> d<sup>2</sup>U/dx<sup>2</sup> > 0 (U is minimum).<br>2. <b>Unstable:</b> d<sup>2</sup>U/dx<sup>2</sup> < 0 (U is maximum).<br>3. <b>Neutral:</b> d<sup>2</sup>U/dx<sup>2</sup> = 0 (U is constant)." },
  { t: "Work Done by Force F = (x i + y j)", q: "Calculate work done by force F = x î + y ĵ N moving particle from (0,0) to (2,3) m.", s: "W = ∫<sub>0</sub><sup>2</sup> x dx + ∫<sub>0</sub><sup>3</sup> y dy = [x<sup>2</sup>/2]<sub>0</sub><sup>2</sup> + [y<sup>2</sup>/2]<sub>0</sub><sup>3</sup> = 2 + 4.5 = <b>6.5 Joules</b>." },
  { t: "Energy Conserved in Spring-Block System", q: "Prove total energy E = 1/2 k A<sup>2</sup> for a block of mass m oscillating on spring of constant k with amplitude A.", s: "At extreme displacement x = A: v = 0 ⇒ E<sub>k</sub> = 0, U<sub>s</sub> = 1/2 k A<sup>2</sup>.<br>Total mechanical energy E = E<sub>k</sub> + U<sub>s</sub> = <b>1/2 k A<sup>2</sup></b> (Constant throughout oscillation)." }
];

sas.forEach((item, idx) => {
  let qNo = idx + 56;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// LAs Q86-Q100: Deep Multi-Part Theoretical Derivations & Analytical Master Problems
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part D: Long Answer Questions (Q86 - Q100)</h3>`;

const las = [
  { t: "Work-Energy Theorem Full Calculus Proof & Applications", q: "State and prove the Work-Energy Theorem for (i) constant force, and (ii) variable force using calculus. Discuss its applications.", s: "<b>Statement:</b> Net work done by all forces on a body equals change in its kinetic energy: W<sub>net</sub> = ΔE<sub>k</sub>.<br><br><b>(i) Proof for Constant Force:</b><br>v<sup>2</sup> - u<sup>2</sup> = 2 a s ⇒ s = (v<sup>2</sup> - u<sup>2</sup>)/(2a).<br>W = F s = m a [ (v<sup>2</sup> - u<sup>2</sup>)/(2a) ] = <b>1/2 m v<sup>2</sup> - 1/2 m u<sup>2</sup></b>.<br><br><b>(ii) Proof for Variable Force:</b><br>F = m a = m (dv/dt) = m v (dv/dx).<br>W = ∫<sub>x1</sub><sup>x2</sup> F dx = ∫<sub>x1</sub><sup>x2</sup> (m v dv/dx) dx = m ∫<sub>u</sub><sup>v</sup> v dv.<br>W = m [ v<sup>2</sup> / 2 ]<sub>u</sub><sup>v</sup> = <b>1/2 m v<sup>2</sup> - 1/2 m u<sup>2</sup> = ΔE<sub>k</sub></b>.<br><br><b>Applications:</b> Used to calculate stopping distances of vehicles, bullet penetration depth, and speed of objects under non-uniform forces." },
  { t: "Complete Theory & Derivation of Potential Energy of Spring", q: "Define spring constant k. Derive the expression for elastic potential energy of a stretched spring U<sub>s</sub> = 1/2 k x<sup>2</sup>. Plot U<sub>s</sub> and E<sub>k</sub> vs position x.", s: "<b>Spring Constant k:</b> Restoring force per unit elongation F<sub>s</sub> = -k x.<br><br><b>Derivation:</b><br>To stretch spring by small displacement dx', external force required F<sub>ext</sub> = k x'.<br>Small work done dW = k x' dx'.<br>Total work done to stretch from x = 0 to x:<br>W = ∫<sub>0</sub><sup>x</sup> k x' dx' = k [ x'<sup>2</sup> / 2 ]<sub>0</sub><sup>x</sup> = <b>1/2 k x<sup>2</sup></b>.<br>This work is stored as potential energy <b>U<sub>s</sub> = 1/2 k x<sup>2</sup></b>.<br><br><b>Energy Graph Analysis:</b><br>- At equilibrium x = 0: U<sub>s</sub> = 0, E<sub>k</sub> = E<sub>max</sub> = 1/2 k A<sup>2</sup>.<br>- At extremes x = ±A: U<sub>s</sub> = 1/2 k A<sup>2</sup>, E<sub>k</sub> = 0.<br>- Total mechanical energy E = E<sub>k</sub> + U<sub>s</sub> = 1/2 k A<sup>2</sup> is a horizontal straight line." },
  { t: "Complete Derivation of 1D Elastic Collision Final Velocities", q: "Derive mathematical expressions for final velocities v<sub>1</sub> and v<sub>2</sub> of two masses m<sub>1</sub> and m<sub>2</sub> undergoing 1D head-on elastic collision. Discuss 3 special cases.", s: "Consider masses m<sub>1</sub> and m<sub>2</sub> moving with initial velocities u<sub>1</sub> and u<sub>2</sub>.<br><br><b>Momentum Conservation:</b> m<sub>1</sub> u<sub>1</sub> + m<sub>2</sub> u<sub>2</sub> = m<sub>1</sub> v<sub>1</sub> + m<sub>2</sub> v<sub>2</sub> &nbsp; ⇒ &nbsp; m<sub>1</sub> (u<sub>1</sub> - v<sub>1</sub>) = m<sub>2</sub> (v<sub>2</sub> - u<sub>2</sub>) ---(1)<br><b>Kinetic Energy Conservation:</b> 1/2 m<sub>1</sub> u<sub>1</sub><sup>2</sup> + 1/2 m<sub>2</sub> u<sub>2</sub><sup>2</sup> = 1/2 m<sub>1</sub> v<sub>1</sub><sup>2</sup> + 1/2 m<sub>2</sub> v<sub>2</sub><sup>2</sup> &nbsp; ⇒ &nbsp; m<sub>1</sub> (u<sub>1</sub><sup>2</sup> - v<sub>1</sub><sup>2</sup>) = m<sub>2</sub> (v<sub>2</sub><sup>2</sup> - u<sub>2</sub><sup>2</sup>) ---(2)<br>Dividing (2) by (1): u<sub>1</sub> + v<sub>1</sub> = v<sub>2</sub> + u<sub>2</sub> &nbsp; ⇒ &nbsp; <b>u<sub>1</sub> - u<sub>2</sub> = v<sub>2</sub> - v<sub>1</sub></b> (Relative velocity of approach = Relative velocity of separation).<br><br><b>Solving for v<sub>1</sub> and v<sub>2</sub>:</b><br><b>v<sub>1</sub> = [ " + frac('m<sub>1</sub> - m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>1</sub> + [ " + frac('2 m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>2</sub></b><br><b>v<sub>2</sub> = [ " + frac('2 m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>1</sub> + [ " + frac('m<sub>2</sub> - m<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] u<sub>2</sub></b><br><br><b>Special Cases:</b><br>1. m<sub>1</sub> = m<sub>2</sub>: v<sub>1</sub> = u<sub>2</sub>, v<sub>2</sub> = u<sub>1</sub> (Velocity Swap).<br>2. m<sub>1</sub> >> m<sub>2</sub> and u<sub>2</sub> = 0: v<sub>1</sub> ≈ u<sub>1</sub>, v<sub>2</sub> ≈ 2 u<sub>1</sub>.<br>3. m<sub>1</sub> << m<sub>2</sub> and u<sub>2</sub> = 0: v<sub>1</sub> ≈ -u<sub>1</sub>, v<sub>2</sub> ≈ 0." },
  { t: "Complete Theory & Derivation of Motion in a Vertical Circle", q: "Derive minimum velocities required at bottom, middle, and top of a vertical circular loop of radius r for a body tied to a string to complete the loop. Find tension difference T<sub>L</sub> - T<sub>H</sub>.", s: "Let body of mass m be tied to string of radius r.<br><br><b>(i) Apex (Top H):</b><br>T<sub>H</sub> + mg = m v<sub>H</sub><sup>2</sup> / r. For critical loop T<sub>H</sub> ≥ 0 ⇒ <b>v<sub>H, min</sub> = √(g r)</b>.<br><br><b>(ii) Bottom (Lowest Point L):</b><br>Energy Conservation: 1/2 m v<sub>L</sub><sup>2</sup> = 1/2 m v<sub>H</sub><sup>2</sup> + m g (2 r).<br>v<sub>L</sub><sup>2</sup> = v<sub>H</sub><sup>2</sup> + 4 g r = g r + 4 g r = 5 g r ⇒ <b>v<sub>L, min</sub> = √(5 g r)</b>.<br>Tension T<sub>L</sub> = mg + m v<sub>L</sub><sup>2</sup> / r = mg + m(5 gr)/r = <b>6 m g</b>.<br><br><b>(iii) Midway Point (Horizontal M):</b><br>1/2 m v<sub>M</sub><sup>2</sup> = 1/2 m v<sub>H</sub><sup>2</sup> + m g r ⇒ v<sub>M</sub><sup>2</sup> = g r + 2 g r = 3 g r ⇒ <b>v<sub>M, min</sub> = √(3 g r)</b>.<br>Tension T<sub>M</sub> = m v<sub>M</sub><sup>2</sup> / r = <b>3 m g</b>.<br><br><b>Tension Difference:</b> T<sub>L</sub> - T<sub>H</sub> = 6 mg - 0 = <b>6 m g</b>." },
  { t: "Conservation of Mechanical Energy in Gravitational Field Proof", q: "Prove that total mechanical energy of a body of mass m thrown vertically upward with initial speed u remains constant at all points of its path.", s: "Let initial speed be u. Max height H = u<sup>2</sup> / (2g). Total energy E = 1/2 m u<sup>2</sup> = m g H.<br><br><b>1. Ground Level (A):</b> h = 0, v = u ⇒ E<sub>A</sub> = 1/2 m u<sup>2</sup> + 0 = <b>1/2 m u<sup>2</sup></b>.<br><b>2. Height y above ground (B):</b> v<sup>2</sup> = u<sup>2</sup> - 2gy.<br>E<sub>kB</sub> = 1/2 m (u<sup>2</sup> - 2gy) = 1/2 m u<sup>2</sup> - mgy.<br>U<sub>B</sub> = mgy.<br>E<sub>B</sub> = E<sub>kB</sub> + U<sub>B</sub> = (1/2 m u<sup>2</sup> - mgy) + mgy = <b>1/2 m u<sup>2</sup></b>.<br><b>3. Maximum Height H (C):</b> v = 0, h = H = u<sup>2</sup>/(2g).<br>E<sub>kC</sub> = 0, U<sub>C</sub> = mg [u<sup>2</sup>/(2g)] = 1/2 m u<sup>2</sup>.<br>E<sub>C</sub> = <b>1/2 m u<sup>2</sup></b>.<br><br><b>Conclusion:</b> E<sub>A</sub> = E<sub>B</sub> = E<sub>C</sub> = 1/2 m u<sup>2</sup> (Total mechanical energy is strictly conserved!)." },
  { t: "1D Inelastic Collision Kinetic Energy Loss Derivation", q: "Derive common velocity V and expression for kinetic energy loss ΔE<sub>k</sub> in a 1D perfectly inelastic collision between mass m<sub>1</sub> (velocity u<sub>1</sub>) and m<sub>2</sub> (velocity u<sub>2</sub>).", s: "<b>Common Velocity V:</b><br>By momentum conservation: m<sub>1</sub> u<sub>1</sub> + m<sub>2</sub> u<sub>2</sub> = (m<sub>1</sub> + m<sub>2</sub>) V ⇒ <b>V = " + frac('m<sub>1</sub> u<sub>1</sub> + m<sub>2</sub> u<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + "</b>.<br><br><b>Kinetic Energy Loss ΔE<sub>k</sub>:</b><br>ΔE<sub>k</sub> = E<sub>k, initial</sub> - E<sub>k, final</sub> = [ 1/2 m<sub>1</sub> u<sub>1</sub><sup>2</sup> + 1/2 m<sub>2</sub> u<sub>2</sub><sup>2</sup> ] - 1/2 (m<sub>1</sub> + m<sub>2</sub>) V<sup>2</sup>.<br>Substitute V:<br>ΔE<sub>k</sub> = 1/2 m<sub>1</sub> u<sub>1</sub><sup>2</sup> + 1/2 m<sub>2</sub> u<sub>2</sub><sup>2</sup> - " + frac('1', '2') + " " + frac('(m<sub>1</sub> u<sub>1</sub> + m<sub>2</sub> u<sub>2</sub>)<sup>2</sup>', 'm<sub>1</sub> + m<sub>2</sub>') + ".<br>Simplifying terms:<br><b>ΔE<sub>k</sub> = " + frac('1', '2') + " [ " + frac('m<sub>1</sub> m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " ] (u<sub>1</sub> - u<sub>2</sub>)<sup>2</sup></b>.<br>Since square term (u<sub>1</sub> - u<sub>2</sub>)<sup>2</sup> > 0, ΔE<sub>k</sub> is always positive, proving kinetic energy is strictly lost in inelastic collision!" },
  { t: "Work Done by Variable Force Curved F-x Integration Numerical", q: "A force F(x) = (2 + 3 x - x<sup>2</sup>) N acts on a 2 kg body causing displacement from x = 0 to x = 3 m. Calculate (i) work done, (ii) final velocity if initial velocity is 2 m s<sup>-1</sup>.", s: "<b>(i) Work Done W:</b><br>W = ∫<sub>0</sub><sup>3</sup> (2 + 3 x - x<sup>2</sup>) dx = [ 2 x + 3 x<sup>2</sup>/2 - x<sup>3</sup>/3 ]<sub>0</sub><sup>3</sup>.<br>W = [ 2(3) + 3(9)/2 - 27/3 ] = [ 6 + 13.5 - 9 ] = <b>10.5 Joules</b>.<br><br><b>(ii) Final Velocity v:</b><br>By Work-Energy Theorem: W = 1/2 m v<sup>2</sup> - 1/2 m u<sup>2</sup>.<br>10.5 = 1/2 (2) v<sup>2</sup> - 1/2 (2) (2<sup>2</sup>) = v<sup>2</sup> - 4.<br>v<sup>2</sup> = 10.5 + 4 = 14.5.<br><b>v = √14.5 ≈ 3.81 m s<sup>-1</sup></b>." },
  { t: "Spring Mass Oscillation & Energy Distribution Numerical", q: "A 0.5 kg body attached to a horizontal spring of k = 50 N m<sup>-1</sup> is pulled 0.2 m from equilibrium and released from rest. Calculate (i) total mechanical energy, (ii) max speed, (iii) speed at x = 0.1 m.", s: "Amplitude A = 0.2 m, m = 0.5 kg, k = 50 N m<sup>-1</sup>.<br><br><b>(i) Total Mechanical Energy E:</b><br>E = 1/2 k A<sup>2</sup> = 1/2 (50) (0.2<sup>2</sup>) = 25 × 0.04 = <b>1.0 Joule</b>.<br><br><b>(ii) Maximum Speed v<sub>max</sub> (at x = 0):</b><br>1/2 m v<sub>max</sub><sup>2</sup> = E ⇒ 1/2 (0.5) v<sub>max</sub><sup>2</sup> = 1.0 ⇒ 0.25 v<sub>max</sub><sup>2</sup> = 1.0 ⇒ v<sub>max</sub><sup>2</sup> = 4 ⇒ <b>v<sub>max</sub> = 2 m s<sup>-1</sup></b>.<br><br><b>(iii) Speed at x = 0.1 m:</b><br>U(0.1) = 1/2 k x<sup>2</sup> = 1/2 (50) (0.01) = 0.25 J.<br>E<sub>k</sub>(0.1) = E - U = 1.0 - 0.25 = 0.75 J.<br>1/2 (0.5) v<sup>2</sup> = 0.75 ⇒ 0.25 v<sup>2</sup> = 0.75 ⇒ v<sup>2</sup> = 3 ⇒ <b>v = √3 ≈ 1.732 m s<sup>-1</sup></b>." },
  { t: "Vertical Circle Loop-the-Loop Rollercoaster Numerical", q: "A rollercoaster car of mass 500 kg enters a vertical circular loop of radius 20 m. Calculate (i) min entry speed at bottom, (ii) normal force from track at top if speed at top is 15 m s<sup>-1</sup> (g = 10 m s<sup>-2</sup>).", s: "Radius r = 20 m, m = 500 kg, g = 10 m s<sup>-2</sup>.<br><br><b>(i) Min Entry Speed v<sub>L</sub> at bottom:</b><br>v<sub>L, min</sub> = √(5 g r) = √(5 × 10 × 20) = √1000 = <b>31.62 m s<sup>-1</sup></b>.<br><br><b>(ii) Normal Force N<sub>H</sub> at top when v<sub>H</sub> = 15 m s<sup>-1</sup>:</b><br>N<sub>H</sub> + mg = m v<sub>H</sub><sup>2</sup> / r.<br>N<sub>H</sub> = m (v<sub>H</sub><sup>2</sup> / r - g) = 500 [ (225 / 20) - 10 ] = 500 [ 11.25 - 10 ] = 500 (1.25) = <b>625 Newtons</b>." },
  { t: "Elastic Collision 2D Oblique Scattering Problem", q: "A billiard ball A of mass m moving at 5 m s<sup>-1</sup> strikes an identical stationary ball B elastically. After collision, ball A moves at angle 30° to initial direction. Calculate speeds of A and B and scattering angle of B.", s: "For equal masses in 2D elastic collision with target at rest, the two balls scatter at right angles to each other (θ<sub>1</sub> + θ<sub>2</sub> = 90°)!<br>Since θ<sub>1</sub> = 30°, θ<sub>2</sub> = 90° - 30° = <b>60°</b>.<br><br><b>Speeds:</b><br>v<sub>1</sub> = u cos θ<sub>1</sub> = 5 cos 30° = 5 (√3/2) = <b>4.33 m s<sup>-1</sup></b>.<br>v<sub>2</sub> = u sin θ<sub>1</sub> = 5 sin 30° = 5 (0.5) = <b>2.50 m s<sup>-1</sup></b>." },
  { t: "Power and Efficiency of Motor Pump System Numerical", q: "An electric motor pump of efficiency 80% lifts 36,000 litres of water per hour from a well 20 m deep. Calculate electric power input to motor (g = 10 m s<sup>-2</sup>, 1 L water = 1 kg).", s: "Mass of water m = 36,000 kg. Time t = 1 hour = 3600 s.<br>Output Work W = m g h = 36,000 × 10 × 20 = 7,200,000 J.<br>Output Power P<sub>out</sub> = W / t = 7,200,000 / 3600 = <b>2000 Watts (2 kW)</b>.<br><br>Efficiency η = P<sub>out</sub> / P<sub>in</sub> = 0.80.<br>Electric Power Input P<sub>in</sub> = P<sub>out</sub> / 0.80 = 2000 / 0.80 = <b>2500 Watts (2.5 kW)</b>." },
  { t: "Potential Energy Function Graph & Force Stability Analysis", q: "Given potential energy U(x) = x<sup>3</sup>/3 - 4 x J. (i) Find equilibrium points. (ii) Determine stability of each equilibrium point.", s: "Force F(x) = - dU/dx = - d/dx (x<sup>3</sup>/3 - 4 x) = -(x<sup>2</sup> - 4) = 4 - x<sup>2</sup>.<br><br><b>(i) Equilibrium Points (F = 0):</b><br>4 - x<sup>2</sup> = 0 ⇒ x<sup>2</sup> = 4 ⇒ <b>x = +2 m and x = -2 m</b>.<br><br><b>(ii) Stability Analysis (d<sup>2</sup>U/dx<sup>2</sup>):</b><br>d<sup>2</sup>U/dx<sup>2</sup> = d/dx (x<sup>2</sup> - 4) = 2 x.<br>- At x = +2 m: d<sup>2</sup>U/dx<sup>2</sup> = +4 > 0 ⇒ <b>Stable Equilibrium</b>.<br>- At x = -2 m: d<sup>2</sup>U/dx<sup>2</sup> = -4 < 0 ⇒ <b>Unstable Equilibrium</b>." },
  { t: "Ball Dropped and Bouncing Repeatedly Numerical", q: "A ball is dropped from height H<sub>0</sub> = 10 m on a floor with coefficient of restitution e = 0.8. Calculate (i) height H<sub>1</sub> after 1st rebound, (ii) total distance covered before coming to rest.", s: "(i) <b>Height after 1st rebound H<sub>1</sub>:</b><br>H<sub>1</sub> = e<sup>2</sup> H<sub>0</sub> = (0.8)<sup>2</sup> × 10 = 0.64 × 10 = <b>6.4 metres</b>.<br><br>(ii) <b>Total Distance Covered S:</b><br>S = H<sub>0</sub> + 2 H<sub>1</sub> + 2 H<sub>2</sub> + ... = H<sub>0</sub> + 2 e<sup>2</sup> H<sub>0</sub> + 2 e<sup>4</sup> H<sub>0</sub> + ...<br>S = H<sub>0</sub> [ 1 + 2 e<sup>2</sup> / (1 - e<sup>2</sup>) ] = H<sub>0</sub> [ (1 + e<sup>2</sup>) / (1 - e<sup>2</sup>) ].<br>S = 10 × [ (1 + 0.64) / (1 - 0.64) ] = 10 × (1.64 / 0.36) = 10 × 4.555 = <b>45.55 metres</b>." },
  { t: "Energy Conservation in Pendulum with String Cut at Apex", q: "A pendulum bob of mass 0.2 kg tied to string of 1 m is rotated in vertical circle. If string snaps at apex when speed is 4 m s<sup>-1</sup>, find horizontal distance where bob hits ground (g = 10 m s<sup>-2</sup>).", s: "When string snaps at apex (height h = 2 r = 2 m above bottom), bob becomes a horizontal projectile launched with velocity u<sub>x</sub> = 4 m/s at height 2 m.<br>Time to fall to ground: t = √(2 h / g) = √(2 × 2 / 10) = √(0.4) ≈ 0.632 s.<br>Horizontal distance x = u<sub>x</sub> × t = 4 × 0.632 = <b>2.53 metres</b>." },
  { t: "Master Inelastic Collision & Friction Stopping Distance Numerical", q: "A 1 kg block moving at 10 m s<sup>-1</sup> on a rough table (μ<sub>k</sub> = 0.2) collides perfectly inelastically with a stationary 3 kg block. Calculate (i) common velocity, (ii) K.E. lost in collision, (iii) distance combined block travels before stopping.", s: "m<sub>1</sub> = 1 kg, u<sub>1</sub> = 10 m/s, m<sub>2</sub> = 3 kg, u<sub>2</sub> = 0.<br><br><b>(i) Common Velocity V:</b><br>V = (1 × 10) / (1 + 3) = 10 / 4 = <b>2.5 m s<sup>-1</sup></b>.<br><br><b>(ii) K.E. Lost in Collision ΔE<sub>k</sub>:</b><br>Initial K.E. = 1/2 (1) (100) = 50 J.<br>Final K.E. = 1/2 (4) (2.5<sup>2</sup>) = 2 × 6.25 = 12.5 J.<br>Loss ΔE<sub>k</sub> = 50 - 12.5 = <b>37.5 Joules</b>.<br><br><b>(iii) Distance traveled before stopping:</b><br>Friction force on combined block (4 kg): f<sub>k</sub> = μ<sub>k</sub> M g = 0.2 × 4 × 10 = 8 N.<br>By Work-Energy Theorem: f<sub>k</sub> × s = Final K.E. ⇒ 8 × s = 12.5.<br><b>Stopping Distance s = 12.5 / 8 = 1.5625 metres</b>." }
];

las.forEach((item, idx) => {
  let qNo = idx + 86;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

solutionsHtml += `</div>`;

console.log("Unit IV (Work, Energy and Power) Solutions HTML generated successfully.");

// Construct final TS content string
const tsContent = `// Class 11 Physics Unit IV: Work, Energy and Power
// High-Level Reference Book Content & NCERT Solutions

export const c11Phy4HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy4HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-4.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote c11-phy-4.ts to " + outputPath);
