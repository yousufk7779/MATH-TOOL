const fs = require('fs');
const path = require('path');

const themeColor = "#AB47BC"; // Exact primary theme color for Class 11 Physics Unit V (System of Particles and Rotational Motion)

// Clean compact inline stacked fraction that DOES NOT break lines vertically
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(171, 71, 188, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(171, 71, 188, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 4px;">📌 Definition (${term}):</b>
    <p style="margin: 0; color: #FFFFFF; line-height: 1.6; font-size: 15.5px;">${definition}</p>
  </div>`;
}

// Diagram placeholder
function diagramPlaceholder(title, description) {
  return `
  <div style="border: 2px dashed ${themeColor}; border-radius: 12px; padding: 18px; text-align: center; margin: 20px 0; background: rgba(171, 71, 188, 0.04);">
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
  <div style="background: rgba(171, 71, 188, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit V: Motion of System of Particles and Rigid Body</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Centre of Mass (CM):</b>
        <span style="color: #FFFFFF;">The single point where the whole mass of a body or system is concentrated and where external forces appear to act.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Rigid Body:</b>
        <span style="color: #FFFFFF;">A body with a perfectly definite and unchanging shape, where distances between all pairs of constituent particles remain constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Torque (τ):</b>
        <span style="color: #FFFFFF;">The turning or rotational effect of a force about a point or axis of rotation: τ = r × F = |r||F| sin θ.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Angular Momentum (L):</b>
        <span style="color: #FFFFFF;">The moment of linear momentum of a particle about an axis: L = r × p = |r||p| sin θ = I ω.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Moment of Inertia (I):</b>
        <span style="color: #FFFFFF;">The quantitative measure of rotational inertia of a body about an axis: I = ∑ mᵢ rᵢ² = ∫ r² dm.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Radius of Gyration (k):</b>
        <span style="color: #FFFFFF;">The perpendicular distance from axis of rotation at which total mass can be concentrated: I = M k² ⇒ k = √(I / M).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Conservation of Angular Momentum:</b>
        <span style="color: #FFFFFF;">If net external torque is zero (τ_ext = 0), total angular momentum remains constant: L = I ω = constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Couple:</b>
        <span style="color: #FFFFFF;">A pair of equal, opposite, non-collinear parallel forces acting on a rigid body that produces pure rotational motion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Mechanical Equilibrium:</b>
        <span style="color: #FFFFFF;">A state where both net external force (∑ F_ext = 0) and net external torque (∑ τ_ext = 0) are simultaneously zero.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Rotational Kinetic Energy:</b>
        <span style="color: #FFFFFF;">The kinetic energy possessed by a body due to pure rotation about an axis: E<sub>rot</sub> = 1/2 I ω<sup>2</sup>.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: CENTRE OF MASS OF TWO-PARTICLE AND N-PARTICLE SYSTEMS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Centre of Mass of Two-Particle and N-Particle Systems</h2>
  
  ${defCard("Centre of Mass (CM)", "The mathematical point in space where the entire mass of a physical system can be assumed to be concentrated for describing its overall translational motion under external forces.")}

  <p>In extended system analysis, treating every constituent particle individually is computationally complex. By introducing the concept of Centre of Mass, Newton's second law for translational motion applies directly to the system as a whole.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Centre of Mass of a Two-Particle System</h3>
  <p>Consider two particles of masses m<sub>1</sub> and m<sub>2</sub> located at position vectors r<sub>1</sub> and r<sub>2</sub> relative to an origin O:</p>
  
  ${eqBox("<b>R<sub>cm</sub> = " + frac('m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + "</b>")}

  <p>Along a 1D x-axis with m<sub>1</sub> at x<sub>1</sub> and m<sub>2</sub> at x<sub>2</sub>:</p>
  ${eqBox("<b>X<sub>cm</sub> = " + frac('m<sub>1</sub> x<sub>1</sub> + m<sub>2</sub> x<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " &nbsp; (If origin at m<sub>1</sub>: X<sub>cm</sub> = " + frac('m<sub>2</sub> d', 'm<sub>1</sub> + m<sub>2</sub>') + ")</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Centre of Mass of an N-Particle System</h3>
  <p>For a system of N particles of masses m<sub>1</sub>, m<sub>2</sub>, ..., m<sub>N</sub> with total mass M = ∑ m<sub>i</sub>:</p>
  
  ${eqBox("<b>R<sub>cm</sub> = " + frac('∑ m<sub>i</sub> r<sub>i</sub>', 'M') + " = " + frac('1', 'M') + " ( m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub> + ... + m<sub>N</sub> r<sub>N</sub> )</b>")}

  ${diagramPlaceholder("Centre of Mass of 2-Particle & N-Particle System Vector Diagram", "Position vector diagram showing origin O, position vectors r1, r2, and resultant Centre of Mass vector Rcm.")}

  <!-- SECTION 2: MOMENTUM CONSERVATION & CENTRE OF MASS MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Momentum Conservation & Centre of Mass Motion</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Velocity and Acceleration of Centre of Mass</h3>
  <p>Differentiating position vector R<sub>cm</sub> with respect to time t:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("Velocity of Centre of Mass (V<sub>cm</sub>)", singleLineCode("V<sub>cm</sub> = " + frac('dR<sub>cm</sub>', 'dt') + " = " + frac('∑ m<sub>i</sub> v<sub>i</sub>', 'M') + " = " + frac('P<sub>total</sub>', 'M')))}
    ${colonTopic("Acceleration of Centre of Mass (A<sub>cm</sub>)", singleLineCode("A<sub>cm</sub> = " + frac('dV<sub>cm</sub>', 'dt') + " = " + frac('∑ m<sub>i</sub> a<sub>i</sub>', 'M') + " &nbsp; ⇒ &nbsp; M A<sub>cm</sub> = F<sub>ext</sub>"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Conservation of Linear Momentum of CM</h3>
  ${defCard("Conservation of CM Motion", "Internal forces between particles cancel out in pairs by Newton's Third Law (F<sub>ij</sub> = -F<sub>ji</sub>). Therefore, internal forces cannot alter the motion of the Centre of Mass.")}

  <p>If zero net external force acts on a system (F<sub>ext</sub> = 0):</p>
  ${eqBox("<b>M A<sub>cm</sub> = 0 &nbsp; ⇒ &nbsp; V<sub>cm</sub> = Constant &nbsp; ⇒ &nbsp; P<sub>total</sub> = M V<sub>cm</sub> = Constant</b>")}

  ${diagramPlaceholder("Internal Forces Cancellation & Trajectory of CM in Projectile Explosion", "Diagram showing parabolic path of CM of a projectile that explodes mid-air into fragments while CM continues parabolic trajectory.")}

  <!-- SECTION 3: CENTRE OF MASS OF RIGID BODIES & UNIFORM ROD -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Centre of Mass of a Rigid Body & Uniform Rod</h2>

  ${defCard("Continuous Mass Distribution CM", "For a rigid body with continuous distribution of mass dm at position r, summation is replaced by integration over the volume of the body.")}

  ${eqBox("<b>R<sub>cm</sub> = " + frac('1', 'M') + " ∫ r dm &nbsp;|&nbsp; X<sub>cm</sub> = " + frac('1', 'M') + " ∫ x dm &nbsp;|&nbsp; Y<sub>cm</sub> = " + frac('1', 'M') + " ∫ y dm</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Derivation for Centre of Mass of a Uniform Rod</h3>
  <p>Consider a uniform rod of mass M, length L, and linear mass density λ = M / L aligned from x = 0 to x = L:</p>
  
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold;">Mass element dm = λ dx = (M / L) dx</div>
    <div style="color: #FFFFFF; font-size: 16px; font-weight: bold; margin-top: 6px; color: ${themeColor};">X<sub>cm</sub> = " + frac('1', 'M') + " ∫<sub>0</sub><sup>L</sup> x [ (M / L) dx ] = " + frac('1', 'L') + " [ x<sup>2</sup> / 2 ]<sub>0</sub><sup>L</sup> = " + frac('1', 'L') + " ( " + frac('L<sup>2</sup>', '2') + " ) = " + frac('L', '2') + "</div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) CM of Symmetric Geometrical Bodies</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Uniform Ring / Disc / Sphere", "Located at geometric center of symmetry.")}
    ${colonTopic("Uniform Semi-Circular Ring", singleLineCode("Y<sub>cm</sub> = " + frac('2 R', 'π')))}
    ${colonTopic("Uniform Semi-Circular Disc", singleLineCode("Y<sub>cm</sub> = " + frac('4 R', '3 π')))}
    ${colonTopic("Uniform Solid Hemisphere", singleLineCode("Y<sub>cm</sub> = " + frac('3 R', '8')))}
  </div>

  ${diagramPlaceholder("Centre of Mass of Uniform Rod and Semi-Circular Ring/Disc", "Diagrams demonstrating integral element dx for uniform rod Xcm = L/2 and semi-circular ring Ycm = 2R/π.")}

  <!-- SECTION 4: TORQUE & ANGULAR MOMENTUM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Moment of a Force (Torque) & Angular Momentum</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Moment of a Force (Torque τ)</h3>
  ${defCard("Torque (τ)", "The rotational analogue of force, defined as the vector cross product of position vector r and applied force F.")}

  ${eqBox("<b>τ = r × F = |r| |F| sin θ n̂ = Force × Perpendicular Distance (F r<sub>⊥</sub>)</b> &nbsp; (SI Unit: <b>N m</b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Angular Momentum (L)</h3>
  ${defCard("Angular Momentum (L)", "The rotational analogue of linear momentum, defined as the vector cross product of position vector r and linear momentum p.")}

  ${eqBox("<b>L = r × p = |r| |p| sin θ n̂ = I ω</b> &nbsp; (SI Unit: <b>kg m<sup>2</sup> s<sup>-1</sup> or J s</b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Relation Between Torque and Angular Momentum</h3>
  <p>Differentiating angular momentum L = r × p with respect to time t:</p>
  
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold;">dL / dt = d(r × p)/dt = (dr/dt × p) + (r × dp/dt)</div>
    <div style="color: #FFFFFF; font-size: 15.5px;">Since dr/dt = v and p = m v, (v × m v) = 0. And dp/dt = F:</div>
    <div style="color: #FFFFFF; font-size: 16px; font-weight: bold; margin-top: 6px; color: ${themeColor};">dL / dt = r × F = τ<sub>ext</sub></div>
  </div>

  ${diagramPlaceholder("Vector Cross Product Diagram for Torque τ = r x F and L = r x p", "3D vector diagram depicting position vector r, force F, and perpendicular torque vector τ = r x F.")}

  <!-- SECTION 5: CONSERVATION OF ANGULAR MOMENTUM & APPLICATIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Law of Conservation of Angular Momentum & Applications</h2>

  ${defCard("Law of Conservation of Angular Momentum", "If the net external torque acting on a rotating system is zero (τ_ext = 0), the total angular momentum of the system remains strictly constant.")}

  ${eqBox("<b>τ<sub>ext</sub> = " + frac('dL', 'dt') + " = 0 &nbsp; ⇒ &nbsp; L = I ω = I<sub>1</sub> ω<sub>1</sub> = I<sub>2</sub> ω<sub>2</sub> = Constant</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Practical Applications</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Acrobat / Ice Skater Spinning", "When an ice skater pulls arms and legs inward toward axis of rotation, moment of inertia I decreases. To conserve L = I ω, angular speed ω increases dramatically!")}
    ${colonTopic("Diver Jumping from Springboard", "After leaving springboard, diver folds body (curling arms and legs) to reduce I, causing fast rotational somersaults (high ω). Before touching water, diver stretches body to increase I and slow down rotation for a smooth entry.")}
    ${colonTopic("Planetary Motion (Kepler's Second Law)", "As a planet moves closer to Sun in elliptical orbit, radius r decreases, so moment of inertia I = m r<sup>2</sup> decreases. To conserve L, orbital speed v (or ω) increases.")}
  </div>

  ${diagramPlaceholder("Conservation of Angular Momentum Ice Skater & Diver", "Illustration of ice skater folding arms to decrease moment of inertia I and increase spinning speed ω.")}

  <!-- SECTION 6: EQUILIBRIUM OF RIGID BODIES & COUPLE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Equilibrium of Rigid Bodies & Couple</h2>

  ${defCard("Complete Mechanical Equilibrium", "A rigid body is in complete mechanical equilibrium if it possesses simultaneous translational equilibrium AND rotational equilibrium.")}

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    ${colonTopic("Translational Equilibrium", singleLineCode("∑ F<sub>ext</sub> = 0 &nbsp; ⇒ &nbsp; ∑ F<sub>x</sub> = 0, &nbsp; ∑ F<sub>y</sub> = 0, &nbsp; ∑ F<sub>z</sub> = 0 &nbsp; (A<sub>cm</sub> = 0)"))}
    ${colonTopic("Rotational Equilibrium", singleLineCode("∑ τ<sub>ext</sub> = 0 &nbsp; ⇒ &nbsp; ∑ τ<sub>x</sub> = 0, &nbsp; ∑ τ<sub>y</sub> = 0, &nbsp; ∑ τ<sub>z</sub> = 0 &nbsp; (α = 0)"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Couple and Moment of a Couple</h3>
  ${defCard("Couple", "A pair of two equal, opposite, and non-collinear parallel forces acting on a rigid body at different points.")}

  <p>A couple produces pure rotational motion without any translational acceleration (since ∑ F = 0 but ∑ τ ≠ 0).</p>
  ${eqBox("<b>Torque of a Couple = Magnitude of Either Force × Perpendicular Distance between Forces (F × d)</b>")}

  ${diagramPlaceholder("Couple Forces and Equilibrium Balance Bar", "Diagram showing two equal opposite non-collinear forces forming a couple torque = F x d.")}

  <!-- SECTION 7: RIGID BODY ROTATION & ROTATIONAL KINEMATICS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Rigid Body Rotation & Equations of Rotational Motion</h2>

  <p>For a rigid body rotating about a fixed axis with constant angular acceleration α:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("First Rotational Equation", singleLineCode("ω = ω<sub>0</sub> + α t"))}
    ${colonTopic("Second Rotational Equation", singleLineCode("θ = ω<sub>0</sub> t + " + frac('1', '2') + " α t<sup>2</sup>"))}
    ${colonTopic("Third Rotational Equation", singleLineCode("ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ"))}
    ${colonTopic("Angular Displacement in n-th Second", singleLineCode("θ<sub>n<sup>th</sup></sub> = ω<sub>0</sub> + " + frac('α', '2') + " (2 n - 1)"))}
  </div>

  <!-- SECTION 8: COMPARISON OF LINEAR AND ROTATIONAL MOTIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Comparison of Linear and Rotational Motions</h2>

  <div style="overflow-x: auto; margin: 15px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.25); text-align: left; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(171, 71, 188, 0.2); color: ${themeColor}; border-bottom: 2px solid ${themeColor};">
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Linear Motion Variable</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Rotational Motion Variable</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Connecting Relation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Displacement x</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Angular Displacement θ</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>s = r θ</b></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Velocity v = dx/dt</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Angular Velocity ω = dθ/dt</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>v = r ω</b></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Acceleration a = dv/dt</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Angular Acceleration α = dω/dt</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>a<sub>t</sub> = r α</b></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Mass m (Inertia)</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Moment of Inertia I</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>I = ∑ m r<sup>2</sup></b></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Force F = m a</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Torque τ = I α</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>τ = r × F</b></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Linear Momentum p = m v</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Angular Momentum L = I ω</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>L = r × p</b></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work W = F s</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work W = τ θ</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>W = ∫ τ dθ</b></td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Kinetic Energy E<sub>k</sub> = 1/2 m v<sup>2</sup></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Kinetic Energy E<sub>rot</sub> = 1/2 I ω<sup>2</sup></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>E<sub>rot</sub> = L<sup>2</sup> / (2 I)</b></td>
        </tr>
      </tbody>
    </table>
  </div>

  ${diagramPlaceholder("Analogous Linear and Rotational Motion Variables Summary Chart", "Comparison table visual chart linking translational force F, mass m, velocity v with rotational torque τ, moment of inertia I, angular velocity ω.")}

  <!-- SECTION 9: MOMENT OF INERTIA & RADIUS OF GYRATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">9. Moment of Inertia & Radius of Gyration</h2>

  ${defCard("Moment of Inertia (I)", "The property of a rigid body by virtue of which it opposes any change in its state of uniform rotational motion about a specified axis.")}

  ${eqBox("<b>I = ∑ m<sub>i</sub> r<sub>i</sub><sup>2</sup> = m<sub>1</sub> r<sub>1</sub><sup>2</sup> + m<sub>2</sub> r<sub>2</sub><sup>2</sup> + ... + m<sub>N</sub> r<sub>N</sub><sup>2</sup> = ∫ r<sup>2</sup> dm</b> &nbsp; (SI Unit: <b>kg m<sup>2</sup></b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Radius of Gyration (k)</h3>
  ${defCard("Radius of Gyration (k)", "The perpendicular distance from the axis of rotation to a point where the entire mass M of the body can be assumed to be concentrated without changing its moment of inertia.")}

  ${eqBox("<b>I = M k<sup>2</sup> &nbsp; ⇒ &nbsp; k = √[ " + frac('I', 'M') + " ] = √[ " + frac('r<sub>1</sub><sup>2</sup> + r<sub>2</sub><sup>2</sup> + ... + r<sub>N</sub><sup>2</sup>', 'N') + " ]</b> &nbsp; (SI Unit: <b>metre, m</b>)")}

  ${diagramPlaceholder("Radius of Gyration k Concept Diagram", "Diagram showing mass M concentrated at distance k from axis of rotation yielding equivalent I = M k².")}

  <!-- SECTION 10: VALUES OF MOMENTS OF INERTIA FOR SIMPLE GEOMETRICAL OBJECTS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">10. Moments of Inertia of Simple Geometrical Objects</h2>

  <div style="overflow-x: auto; margin: 15px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.25); text-align: left; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(171, 71, 188, 0.2); color: ${themeColor}; border-bottom: 2px solid ${themeColor};">
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Geometrical Body</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Axis of Rotation</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Moment of Inertia (I)</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Radius of Gyration (k)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Thin Circular Ring (Mass M, Radius R)</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Transverse axis through CM (perpendicular to plane)</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>M R<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">R</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Thin Circular Ring</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">About any diameter</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>1/2 M R<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">R / √2</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Uniform Circular Disc (Mass M, Radius R)</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Transverse axis through CM (perpendicular to plane)</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>1/2 M R<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">R / √2</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Uniform Circular Disc</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">About any diameter</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>1/4 M R<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">R / 2</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Thin Uniform Rod (Mass M, Length L)</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Perpendicular axis through CM (middle)</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>1/12 M L<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">L / √12</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Thin Uniform Rod</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Perpendicular axis through one end</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>1/3 M L<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">L / √3</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Solid Sphere (Mass M, Radius R)</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">About any diameter</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>2/5 M R<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">√(2/5) R</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Spherical Shell / Hollow Sphere</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">About any diameter</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>2/3 M R<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">√(2/3) R</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Solid Cylinder (Mass M, Radius R)</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">About central longitudinal axis</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);"><b>1/2 M R<sup>2</sup></b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">R / √2</td>
        </tr>
      </tbody>
    </table>
  </div>

  ${diagramPlaceholder("Moments of Inertia Reference Set for Standard Bodies", "3D geometrical figures showing ring, disc, rod, sphere, cylinder with their respective rotation axes and MI formulas.")}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(171, 71, 188, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Rotational Identities & Moments of Inertia Summary for Unit V</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Centre of Mass Position:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">2-Particle: R<sub>cm</sub> = ` + frac('m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + `<br>Rod (Length L): X<sub>cm</sub> = ` + frac('L', '2') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Torque & Angular Momentum:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">τ = r × F = I α &nbsp;|&nbsp; L = r × p = I ω<br>τ<sub>ext</sub> = ` + frac('dL', 'dt') + ` &nbsp;|&nbsp; τ<sub>ext</sub> = 0 ⇒ L = I ω = Const.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Rotational Kinematics:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">ω = ω<sub>0</sub> + α t &nbsp;|&nbsp; θ = ω<sub>0</sub> t + ` + frac('1', '2') + ` α t<sup>2</sup><br>ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Rotational Kinetic Energy & Power:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">E<sub>rot</sub> = ` + frac('1', '2') + ` I ω<sup>2</sup> = ` + frac('L<sup>2</sup>', '2 I') + `<br>Power P = τ ω</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Standard Moments of Inertia:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Ring (CM): MR<sup>2</sup> &nbsp;|&nbsp; Disc (CM): ` + frac('1', '2') + ` MR<sup>2</sup><br>Rod (CM): ` + frac('1', '12') + ` ML<sup>2</sup> &nbsp;|&nbsp; Sphere: ` + frac('2', '5') + ` MR<sup>2</sup></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Radius of Gyration Formula:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">I = M k<sup>2</sup> &nbsp; ⇒ &nbsp; k = √[ ` + frac('I', 'M') + ` ]</span>
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
    <div style="background: rgba(171, 71, 188, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
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
    <p style="color: #B0BEC5; margin: 5px 0 0 0; font-size: 15px; text-align: center !important;">Unit V: Motion of System of Particles and Rigid Body — 100 Master Practice Questions (Theoretical & Numerical)</p>
  </div>
`;

// Rebalanced 100 Questions for Unit V (Motion of System of Particles and Rigid Body)
const mcqs = [
  { q: "The Centre of Mass of a two-particle system lies on the line joining the particles and:", opts: ["a) Always lies at exact midpoint", "b) Divides distance inversely as their masses", "c) Divides distance directly as their masses", "d) Lies outside the joining line"], ans: "b) Divides distance inversely as their masses", exp: "m<sub>1</sub> r<sub>1</sub> = m<sub>2</sub> r<sub>2</sub> ⇒ r<sub>1</sub> / r<sub>2</sub> = m<sub>2</sub> / m<sub>1</sub> (closer to heavier mass)." },
  { q: "Internal forces acting between particles of a system can change:", opts: ["a) Linear momentum of CM", "b) Total kinetic energy of system", "c) Velocity of CM", "d) Acceleration of CM"], ans: "b) Total kinetic energy of system", exp: "Internal forces cancel out in pairs for momentum/CM motion (∑ F<sub>int</sub> = 0), but can do net internal work altering total kinetic energy." },
  { q: "The location of Centre of Mass of a uniform thin rod of length L from one end is:", opts: ["a) L / 4", "b) L / 3", "c) L / 2", "d) 2 L / 3"], ans: "c) L / 2", exp: "By symmetry, CM of a uniform rod lies at its geometric midpoint X<sub>cm</sub> = L/2." },
  { q: "The rotational analogue of force in rotational motion is:", opts: ["a) Angular momentum", "b) Moment of inertia", "c) Torque", "d) Angular velocity"], ans: "c) Torque", exp: "Torque τ = I α is the rotational counterpart of linear force F = m a." },
  { q: "The rotational analogue of mass (inertia) is:", opts: ["a) Torque", "b) Moment of inertia", "c) Angular acceleration", "d) Angular momentum"], ans: "b) Moment of inertia", exp: "Moment of inertia I measures rotational inertia of a body about a given axis." },
  { q: "The SI unit of Torque is:", opts: ["a) N s", "b) N m", "c) J s", "d) kg m s<sup>-1</sup>"], ans: "b) N m", exp: "Torque τ = r × F, so its unit is Newton metre (N m)." },
  { q: "The SI unit of Angular Momentum is:", opts: ["a) N m", "b) kg m<sup>2</sup> s<sup>-1</sup> (or J s)", "c) kg m s<sup>-2</sup>", "d) N m s<sup>-1</sup>"], ans: "b) kg m<sup>2</sup> s<sup>-1</sup> (or J s)", exp: "L = r × p = [L] [M L T<sup>-1</sup>] = kg m<sup>2</sup> s<sup>-1</sup> = J s." },
  { q: "The relationship between Torque τ and Angular Momentum L is:", opts: ["a) τ = L / t", "b) τ = dL / dt", "c) L = dτ / dt", "d) τ = L × ω"], ans: "b) τ = dL / dt", exp: "Torque equals time rate of change of angular momentum (rotational analogue of F = dp/dt)." },
  { q: "When a spinning ice skater pulls her arms inward, her angular speed ω increases because her:", opts: ["a) Torque increases", "b) Moment of inertia decreases", "c) Mass increases", "d) Angular momentum increases"], ans: "b) Moment of inertia decreases", exp: "By conservation of angular momentum L = I ω = constant. Pulling arms in decreases I, so ω increases." },
  { q: "A rigid body is in complete mechanical equilibrium when:", opts: ["a) ∑ F<sub>ext</sub> = 0 only", "b) ∑ τ<sub>ext</sub> = 0 only", "c) Both ∑ F<sub>ext</sub> = 0 and ∑ τ<sub>ext</sub> = 0", "d) Velocity is zero"], ans: "c) Both ∑ F<sub>ext</sub> = 0 and ∑ τ<sub>ext</sub> = 0", exp: "Complete equilibrium requires zero translational acceleration (∑ F = 0) AND zero rotational acceleration (∑ τ = 0)." },
  { q: "A couple acting on a rigid body produces:", opts: ["a) Pure translation", "b) Pure rotation", "c) Both translation and rotation", "d) No motion"], ans: "b) Pure rotation", exp: "A couple consists of equal and opposite non-collinear forces (∑ F = 0, ∑ τ ≠ 0), causing pure rotation without translation." },
  { q: "The third equation of rotational motion with constant angular acceleration α is:", opts: ["a) ω = ω<sub>0</sub> + α t", "b) θ = ω<sub>0</sub> t + 1/2 α t<sup>2</sup>", "c) ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ", "d) τ = I α"], ans: "c) ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ", exp: "Rotational analogue of v<sup>2</sup> - u<sup>2</sup> = 2 a s." },
  { q: "The rotational kinetic energy of a body of moment of inertia I rotating at angular speed ω is:", opts: ["a) I ω", "b) 1/2 I ω", "c) 1/2 I ω<sup>2</sup>", "d) I ω<sup>2</sup>"], ans: "c) 1/2 I ω<sup>2</sup>", exp: "Rotational K.E. E<sub>rot</sub> = 1/2 I ω<sup>2</sup>." },
  { q: "Moment of inertia of a thin circular ring of mass M and radius R about its transverse central axis is:", opts: ["a) 1/2 M R<sup>2</sup>", "b) M R<sup>2</sup>", "c) 1/4 M R<sup>2</sup>", "d) 2/5 M R<sup>2</sup>"], ans: "b) M R<sup>2</sup>", exp: "For a ring, all mass elements are at distance R from central transverse axis, so I = ∫ R<sup>2</sup> dm = M R<sup>2</sup>." },
  { q: "Moment of inertia of a uniform circular disc of mass M and radius R about its transverse central axis is:", opts: ["a) M R<sup>2</sup>", "b) 1/2 M R<sup>2</sup>", "c) 1/4 M R<sup>2</sup>", "d) 2/5 M R<sup>2</sup>"], ans: "b) 1/2 M R<sup>2</sup>", exp: "For a disc, I = 1/2 M R<sup>2</sup>." },
  { q: "Moment of inertia of a solid sphere of mass M and radius R about its diameter is:", opts: ["a) 1/2 M R<sup>2</sup>", "b) 2/3 M R<sup>2</sup>", "c) 2/5 M R<sup>2</sup>", "d) 7/5 M R<sup>2</sup>"], ans: "c) 2/5 M R<sup>2</sup>", exp: "For a solid sphere about diameter, I = 2/5 M R<sup>2</sup>." },
  { q: "Moment of inertia of a thin uniform rod of mass M and length L about an axis through its CM perpendicular to length is:", opts: ["a) 1/3 M L<sup>2</sup>", "b) 1/12 M L<sup>2</sup>", "c) 1/2 M L<sup>2</sup>", "d) M L<sup>2</sup>"], ans: "b) 1/12 M L<sup>2</sup>", exp: "For a thin rod about central transverse axis, I = 1/12 M L<sup>2</sup>." },
  { q: "Moment of inertia of a thin uniform rod of mass M and length L about an axis through one end perpendicular to length is:", opts: ["a) 1/12 M L<sup>2</sup>", "b) 1/3 M L<sup>2</sup>", "c) 1/4 M L<sup>2</sup>", "d) M L<sup>2</sup>"], ans: "b) 1/3 M L<sup>2</sup>", exp: "For a thin rod about end transverse axis, I = 1/3 M L<sup>2</sup>." },
  { q: "Radius of gyration k of a body of mass M and moment of inertia I is defined by:", opts: ["a) k = I / M", "b) k = √(I / M)", "c) k = I M", "d) k = √(I M)"], ans: "b) k = √(I / M)", exp: "From I = M k<sup>2</sup>, k = √(I / M)." },
  { q: "Radius of gyration of a solid sphere of radius R about its diameter is:", opts: ["a) R", "b) R / √2", "c) √(2/5) R", "d) √(2/3) R"], ans: "c) √(2/5) R", exp: "I = 2/5 M R<sup>2</sup> = M k<sup>2</sup> ⇒ k = √(2/5) R." },
  { q: "If net external force on a system of particles is zero, the Centre of Mass:", opts: ["a) Must be at rest", "b) Must accelerate", "c) Moves with constant velocity or remains at rest", "d) Rotates continuously"], ans: "c) Moves with constant velocity or remains at rest", exp: "F<sub>ext</sub> = 0 ⇒ M A<sub>cm</sub> = 0 ⇒ V<sub>cm</sub> = Constant." },
  { q: "The work done by a torque τ in rotating a body through angular displacement θ is:", opts: ["a) τ / θ", "b) τ θ", "c) 1/2 τ θ", "d) τ θ<sup>2</sup>"], ans: "b) τ θ", exp: "Rotational work W = ∫ τ dθ = τ θ (for constant torque)." },
  { q: "Angular momentum L and rotational kinetic energy E<sub>rot</sub> are related by:", opts: ["a) E<sub>rot</sub> = L<sup>2</sup> / (2 I)", "b) E<sub>rot</sub> = L I", "c) E<sub>rot</sub> = L<sup>2</sup> I", "d) E<sub>rot</sub> = L / (2 I)"], ans: "a) E<sub>rot</sub> = L<sup>2</sup> / (2 I)", exp: "E<sub>rot</sub> = 1/2 I ω<sup>2</sup> = 1/2 I (L / I)<sup>2</sup> = L<sup>2</sup> / (2 I)." },
  { q: "A wheel of radius 0.5 m rolls without slipping. If angular velocity is 10 rad s<sup>-1</sup>, linear speed of CM is:", opts: ["a) 2 m s<sup>-1</sup>", "b) 5 m s<sup>-1</sup>", "c) 10 m s<sup>-1</sup>", "d) 20 m s<sup>-1</sup>"], ans: "b) 5 m s<sup>-1</sup>", exp: "v<sub>cm</sub> = r ω = 0.5 × 10 = 5 m s<sup>-1</sup>." },
  { q: "A fly-wheel increases its angular speed from 10 rad s<sup>-1</sup> to 30 rad s<sup>-1</sup> in 5 s. Angular acceleration is:", opts: ["a) 2 rad s<sup>-2</sup>", "b) 4 rad s<sup>-2</sup>", "c) 6 rad s<sup>-2</sup>", "d) 8 rad s<sup>-2</sup>"], ans: "b) 4 rad s<sup>-2</sup>", exp: "α = (ω - ω<sub>0</sub>)/t = (30 - 10)/5 = 20 / 5 = 4 rad s<sup>-2</sup>." }
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
  { t: "Define Centre of Mass", q: "Define Centre of Mass of a system.", s: "Centre of Mass is the single point in space where total mass of system is concentrated and where net external force produces translational acceleration." },
  { t: "Centre of Mass 2-Particle Formula", q: "State formula for position vector R<sub>cm</sub> of a 2-particle system.", s: "R<sub>cm</sub> = (m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>)." },
  { t: "Define Rigid Body", q: "What is an ideal rigid body?", s: "A rigid body is a body with a fixed shape where inter-particle distances remain strictly constant under external forces." },
  { t: "Define Torque", q: "Define torque and state its SI unit.", s: "Torque is the rotational turning effect of force: τ = r × F = |r||F| sin θ n̂. SI unit: N m." },
  { t: "Define Angular Momentum", q: "Define angular momentum and state its SI unit.", s: "Angular momentum is moment of linear momentum: L = r × p = I ω. SI unit: kg m<sup>2</sup> s<sup>-1</sup> (or J s)." },
  { t: "Torque and Angular Momentum Relation", q: "State differential relation between Torque and Angular Momentum.", s: "τ<sub>ext</sub> = dL / dt." },
  { t: "State Conservation of Angular Momentum", q: "State Law of Conservation of Angular Momentum.", s: "If net external torque τ<sub>ext</sub> = 0, total angular momentum L = I ω remains strictly constant." },
  { t: "Define Moment of Inertia", q: "Define moment of inertia of a body.", s: "Moment of inertia is rotational inertia of a body about an axis: I = ∑ m<sub>i</sub> r<sub>i</sub><sup>2</sup> = ∫ r<sup>2</sup> dm. SI unit: kg m<sup>2</sup>." },
  { t: "Define Radius of Gyration", q: "Define radius of gyration k.", s: "Radius of gyration is perpendicular distance from rotation axis to point where total body mass can be concentrated: k = √(I / M)." },
  { t: "Define Couple", q: "What is a couple in rotational mechanics?", s: "A couple is a pair of equal, opposite, non-collinear parallel forces acting on a body that produces pure rotation." },
  { t: "Moment of a Couple Formula", q: "State formula for torque of a couple.", s: "Torque of couple = Force × Perpendicular distance between force lines (F × d)." },
  { t: "Condition for Translational Equilibrium", q: "State condition for translational equilibrium of a rigid body.", s: "Vector sum of all external forces must be zero: ∑ F<sub>ext</sub> = 0." },
  { t: "Condition for Rotational Equilibrium", q: "State condition for rotational equilibrium of a rigid body.", s: "Vector sum of all external torques about any axis must be zero: ∑ τ<sub>ext</sub> = 0." },
  { t: "First Rotational Kinematic Equation", q: "State first equation of rotational motion with constant α.", s: "ω = ω<sub>0</sub> + α t." },
  { t: "Second Rotational Kinematic Equation", q: "State second equation of rotational motion.", s: "θ = ω<sub>0</sub> t + " + frac('1', '2') + " α t<sup>2</sup>." },
  { t: "Third Rotational Kinematic Equation", q: "State third equation of rotational motion.", s: "ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ." },
  { t: "Rotational Kinetic Energy Formula", q: "State formula for rotational kinetic energy.", s: "E<sub>rot</sub> = " + frac('1', '2') + " I ω<sup>2</sup> = " + frac('L<sup>2</sup>', '2 I') + "." },
  { t: "Rotational Power Formula", q: "State formula for rotational power P.", s: "P = τ · ω = τ ω cos θ." },
  { t: "Moment of Inertia of Ring (CM)", q: "State MI of thin ring of mass M, radius R about transverse CM axis.", s: "I = M R<sup>2</sup>." },
  { t: "Moment of Inertia of Disc (CM)", q: "State MI of uniform disc of mass M, radius R about transverse CM axis.", s: "I = " + frac('1', '2') + " M R<sup>2</sup>." },
  { t: "Moment of Inertia of Rod (CM)", q: "State MI of thin rod of mass M, length L about transverse CM axis.", s: "I = " + frac('1', '12') + " M L<sup>2</sup>." },
  { t: "Moment of Inertia of Rod (End)", q: "State MI of thin rod of mass M, length L about transverse axis through end.", s: "I = " + frac('1', '3') + " M L<sup>2</sup>." },
  { t: "Moment of Inertia of Solid Sphere", q: "State MI of solid sphere of mass M, radius R about diameter.", s: "I = " + frac('2', '5') + " M R<sup>2</sup>." },
  { t: "Moment of Inertia of Spherical Shell", q: "State MI of hollow spherical shell about diameter.", s: "I = " + frac('2', '3') + " M R<sup>2</sup>." },
  { t: "Moment of Inertia of Solid Cylinder", q: "State MI of solid cylinder of mass M, radius R about central axis.", s: "I = " + frac('1', '2') + " M R<sup>2</sup>." },
  { t: "Linear vs Angular Velocity Relation", q: "Write vector relation between linear velocity v, angular velocity ω, and radius vector r.", s: "v = ω × r &nbsp; (Magnitude: v = r ω)." },
  { t: "Linear vs Angular Acceleration Relation", q: "Write relation between tangential acceleration a<sub>t</sub> and angular acceleration α.", s: "a<sub>t</sub> = r α." },
  { t: "Does CM of Body Always Lie Inside It?", q: "Does Centre of Mass of a body necessarily lie inside its material body?", s: "No! For hollow objects like a ring or hollow sphere, Centre of Mass lies in empty space outside material body." },
  { t: "Internal Forces Effect on CM", q: "Can internal forces accelerate Centre of Mass of a system?", s: "No! Internal forces cancel out in pairs by Newton's Third Law, so only external forces accelerate CM." },
  { t: "Dimension of Moment of Inertia", q: "State dimensional formula of Moment of Inertia.", s: "Dimensions of MI = [M<sup>1</sup> L<sup>2</sup> T<sup>0</sup>]." }
];

vsas.forEach((item, idx) => {
  let qNo = idx + 26;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// SAs Q56-Q85: Theoretical & Conceptual Reasoning Mixed with Simple Derivations
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part C: Short Answer Questions (Q56 - Q85)</h3>`;

const sas = [
  { t: "Centre of Mass of 2 Particles Numerical", q: "Two particles of masses 2 kg and 3 kg are placed 1 m apart along x-axis. Find location of CM from 2 kg particle.", s: "Let origin be at 2 kg mass (x<sub>1</sub> = 0), m<sub>2</sub> = 3 kg at x<sub>2</sub> = 1 m.<br>X<sub>cm</sub> = (m<sub>1</sub> x<sub>1</sub> + m<sub>2</sub> x<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>) = (2×0 + 3×1) / (2 + 3) = 3 / 5 = <b>0.6 metres (60 cm from 2 kg particle)</b>." },
  { t: "Derive Centre of Mass of Uniform Rod", q: "Derive expression for Centre of Mass of a uniform thin rod of length L and mass M.", s: "Linear density λ = M/L. Take element dx at position x from one end.<br>Mass element dm = λ dx = (M/L) dx.<br>X<sub>cm</sub> = (1/M) ∫<sub>0</sub><sup>L</sup> x dm = (1/M) ∫<sub>0</sub><sup>L</sup> x (M/L) dx = (1/L) [ x<sup>2</sup>/2 ]<sub>0</sub><sup>L</sup> = (1/L) (L<sup>2</sup>/2) = <b>L / 2 (Midpoint)</b>." },
  { t: "Torque Vector Calculation Problem", q: "Position vector r = 2 î + 3 ĵ m and Force F = 4 î + 5 ĵ N. Calculate torque vector τ.", s: "τ = r × F = (2 î + 3 ĵ) × (4 î + 5 ĵ) = 2(5)(î×ĵ) + 3(4)(ĵ×î) = 10 k̂ - 12 k̂ = <b>-2 k̂ N m</b>." },
  { t: "Angular Momentum Vector Problem", q: "Particle of mass 2 kg moves at v = 3 î + 4 ĵ m s<sup>-1</sup> at position r = 5 î m. Find angular momentum L.", s: "Linear momentum p = m v = 2 (3 î + 4 ĵ) = 6 î + 8 ĵ kg m s<sup>-1</sup>.<br>L = r × p = (5 î) × (6 î + 8 ĵ) = 40 (î × ĵ) = <b>40 k̂ kg m<sup>2</sup> s<sup>-1</sup></b>." },
  { t: "Spinning Ice Skater Reasoning", q: "Explain using conservation of angular momentum why a spinning skater speeds up when pulling arms inward.", s: "Net external torque τ<sub>ext</sub> = 0, so L = I ω = constant.<br>Pulling arms inward brings mass closer to rotation axis, reducing moment of inertia (I<sub>2</sub> < I<sub>1</sub>).<br>Since I<sub>1</sub> ω<sub>1</sub> = I<sub>2</sub> ω<sub>2</sub>, angular velocity ω<sub>2</sub> = (I<sub>1</sub>/I<sub>2</sub>) ω<sub>1</sub> > ω<sub>1</sub> (Spin speed increases!)." },
  { t: "Flywheel Torque and Angular Acceleration Numerical", q: "A flywheel of moment of inertia I = 5 kg m<sup>2</sup> is acted upon by torque τ = 20 N m. Find angular acceleration α.", s: "τ = I α ⇒ α = τ / I = 20 / 5 = <b>4 rad s<sup>-2</sup></b>." },
  { t: "Rotational Kinematics Problem 1", q: "A wheel starting from rest accelerates uniformly at α = 2 rad s<sup>-2</sup> for 6 s. Find final angular speed and angular displacement.", s: "(i) Final angular speed: ω = ω<sub>0</sub> + α t = 0 + 2(6) = <b>12 rad s<sup>-1</sup></b>.<br>(ii) Displacement: θ = ω<sub>0</sub> t + 1/2 α t<sup>2</sup> = 0 + 1/2 (2) (36) = <b>36 radians</b>." },
  { t: "Rotational Kinetic Energy Calculation", q: "A solid sphere of mass 5 kg and radius 0.2 m rotates at 10 rad s<sup>-1</sup> about diameter. Find its rotational kinetic energy.", s: "I = 2/5 M R<sup>2</sup> = 2/5 (5) (0.2<sup>2</sup>) = 2 (0.04) = 0.08 kg m<sup>2</sup>.<br>E<sub>rot</sub> = 1/2 I ω<sup>2</sup> = 1/2 (0.08) (10<sup>2</sup>) = 0.04 × 100 = <b>4 Joules</b>." },
  { t: "Radius of Gyration of Disc vs Ring", q: "Compare radius of gyration of a uniform disc and a thin ring of same mass and radius about transverse central axis.", s: "Ring: I<sub>ring</sub> = M R<sup>2</sup> = M k<sub>1</sub><sup>2</sup> ⇒ <b>k<sub>1</sub> = R</b>.<br>Disc: I<sub>disc</sub> = 1/2 M R<sup>2</sup> = M k<sub>2</sub><sup>2</sup> ⇒ <b>k<sub>2</sub> = R / √2</b>.<br>Ratio k<sub>ring</sub> / k<sub>disc</sub> = R / (R / √2) = <b>√2 : 1</b>." },
  { t: "Couple Forces Torque Proof", q: "Show that torque of a couple is independent of the choice of origin.", s: "Forces F at r<sub>1</sub> and -F at r<sub>2</sub>.<br>Total torque τ = (r<sub>1</sub> × F) + (r<sub>2</sub> × -F) = (r<sub>1</sub> - r<sub>2</sub>) × F = d × F.<br>Since relative vector d = r<sub>1</sub> - r<sub>2</sub> is fixed between forces, torque of couple depends ONLY on separation d, not origin!" },
  { t: "CM of 3 Particles at Vertices of Equilateral Triangle", q: "Three equal masses m placed at vertices of equilateral triangle of side a: (0,0), (a,0), (a/2, a√3/2). Find CM coordinates.", s: "X<sub>cm</sub> = (m×0 + m×a + m×a/2) / (3m) = (1.5 m a) / (3m) = <b>a / 2</b>.<br>Y<sub>cm</sub> = (m×0 + m×0 + m×a√3/2) / (3m) = (a√3/2) / 3 = <b>a / (2√3)</b>.<br>CM is at centroid <b>(a/2, a/(2√3))</b>." },
  { t: "Rotational Work and Power Problem", q: "A constant torque of 50 N m turns a wheel at constant angular velocity 20 rad s<sup>-1</sup>. Find work done in 10 s and power delivered.", s: "Angular displacement θ = ω t = 20 × 10 = 200 radians.<br>Work W = τ θ = 50 × 200 = <b>10,000 Joules (10 kJ)</b>.<br>Power P = τ ω = 50 × 20 = <b>1000 Watts (1 kW)</b>." },
  { t: "Angular Momentum Conservation Collision Problem", q: "A disc of moment of inertia I<sub>1</sub> = 2 kg m<sup>2</sup> rotating at 30 rad s<sup>-1</sup> drops onto a stationary disc of I<sub>2</sub> = 1 kg m<sup>2</sup>. Find common angular speed.", s: "By conservation of angular momentum: I<sub>1</sub> ω<sub>1</sub> = (I<sub>1</sub> + I<sub>2</sub>) ω.<br>2 (30) = (2 + 1) ω ⇒ 60 = 3 ω ⇒ <b>Common ω = 20 rad s<sup>-1</sup></b>." },
  { t: "CM Motion in Explosive Decay", q: "A projectile of mass 10 kg moving at 20 m s<sup>-1</sup> explodes mid-air into 4 kg and 6 kg pieces. If 4 kg piece moves forward at 50 m s<sup>-1</sup>, find velocity of 6 kg piece.", s: "Total momentum before = 10 × 20 = 200 kg m s<sup>-1</sup>.<br>200 = 4(50) + 6 v<sub>2</sub> ⇒ 200 = 200 + 6 v<sub>2</sub> ⇒ 6 v<sub>2</sub> = 0 ⇒ <b>v<sub>2</sub> = 0 m s<sup>-1</sup></b>." },
  { t: "Moment of Inertia of Thin Rod about End Formula Derivation", q: "Derive MI of thin uniform rod of mass M, length L about transverse axis through one end using integration.", s: "Linear density λ = M/L. Axis at x = 0, rod extends from x = 0 to x = L.<br>I = ∫<sub>0</sub><sup>L</sup> x<sup>2</sup> dm = ∫<sub>0</sub><sup>L</sup> x<sup>2</sup> (M/L) dx = (M/L) [ x<sup>3</sup>/3 ]<sub>0</sub><sup>L</sup> = (M/L) (L<sup>3</sup>/3) = <b>1/3 M L<sup>2</sup></b>." },
  { t: "Moment of Inertia of Ring about Diameter", q: "Using symmetry, find moment of inertia of a thin circular ring of mass M and radius R about its diameter.", s: "Let I<sub>z</sub> = M R<sup>2</sup> be MI about transverse axis through center.<br>By perpendicular axis symmetry for planar ring: I<sub>z</sub> = I<sub>x</sub> + I<sub>y</sub> = 2 I<sub>diameter</sub>.<br>2 I<sub>diameter</sub> = M R<sup>2</sup> ⇒ <b>I<sub>diameter</sub> = 1/2 M R<sup>2</sup></b>." },
  { t: "Rotational Impulse Concept", q: "Define angular (rotational) impulse and state its relation to angular momentum change.", s: "Angular impulse is product of average torque and time interval: Rotational Impulse = ∫ τ dt = ΔL = L<sub>final</sub> - L<sub>initial</sub>." },
  { t: "Rolling Motion Total Kinetic Energy Formula", q: "Write total kinetic energy formula for a body of mass M, radius R, radius of gyration k rolling without slipping at speed v.", s: "Total K.E. = E<sub>trans</sub> + E<sub>rot</sub> = 1/2 M v<sup>2</sup> + 1/2 I ω<sup>2</sup>.<br>Substitute I = M k<sup>2</sup> and ω = v/R:<br>Total K.E. = <b>1/2 M v<sup>2</sup> [ 1 + (k<sup>2</sup> / R<sup>2</sup>) ]</b>." },
  { t: "Rolling Disc Total Kinetic Energy Problem", q: "Find fraction of total kinetic energy that is rotational for a uniform disc rolling without slipping.", s: "For disc: k<sup>2</sup>/R<sup>2</sup> = 1/2.<br>E<sub>rot</sub> = 1/2 I ω<sup>2</sup> = 1/2 (1/2 M R<sup>2</sup>) (v/R)<sup>2</sup> = 1/4 M v<sup>2</sup>.<br>Total K.E. = 1/2 M v<sup>2</sup> (1 + 1/2) = 3/4 M v<sup>2</sup>.<br>Fraction E<sub>rot</sub> / E<sub>total</sub> = (1/4 M v<sup>2</sup>) / (3/4 M v<sup>2</sup>) = <b>1 / 3 (33.3%)</b>." },
  { t: "Angular Acceleration from Stopping Revolutions Problem", q: "A grinding wheel running at 600 rpm is brought to rest in 10 s. Find angular retardation and revolutions completed.", s: "Initial ω<sub>0</sub> = 600 rpm = 600 × (2π/60) = 20π rad s<sup>-1</sup>.<br>α = (0 - 20π) / 10 = <b>-2π rad s<sup>-2</sup> ≈ -6.28 rad s<sup>-2</sup></b>.<br>Displacement θ = (ω<sub>0</sub> + ω)/2 × t = (20π / 2) × 10 = 100π radians.<br>Revolutions = 100π / (2π) = <b>50 revolutions</b>." },
  { t: "Why Spokes are Provided in Bicycle Wheels", q: "Why are bicycle wheels provided with spokes and heavy rim?", s: "Spokes place most mass near outer rim at distance R, maximizing moment of inertia I = M R<sup>2</sup>. High I maintains uniform motion and resists sudden speed fluctuations!" },
  { t: "Equilibrium Ladder Problem", q: "A 10 kg uniform ladder of length 4 m leans against smooth wall at 60° to horizontal floor. Find normal reaction from wall.", s: "Torque about base on floor: N<sub>wall</sub> (L sin 60°) - mg (L/2 cos 60°) = 0.<br>N<sub>wall</sub> (4 × √3/2) = 100 (2 × 0.5) ⇒ N<sub>wall</sub> (2√3) = 100.<br>N<sub>wall</sub> = 100 / (2√3) = 50 / √3 ≈ <b>28.87 Newtons</b>." },
  { t: "Linear Momentum of CM System Formula", q: "Express total linear momentum P of an N-particle system in terms of total mass M and velocity of CM V<sub>cm</sub>.", s: "P<sub>total</sub> = ∑ m<sub>i</sub> v<sub>i</sub> = M V<sub>cm</sub>." },
  { t: "Relation between Rotational KE and Angular Momentum Derivation", q: "Derive E<sub>rot</sub> = L<sup>2</sup> / (2 I).", s: "E<sub>rot</sub> = 1/2 I ω<sup>2</sup>. Multiply numerator and denominator by I:<br>E<sub>rot</sub> = (I<sup>2</sup> ω<sup>2</sup>) / (2 I) = (I ω)<sup>2</sup> / (2 I).<br>Since L = I ω: <b>E<sub>rot</sub> = L<sup>2</sup> / (2 I)</b>." },
  { t: "CM of L-shaped Thin Uniform Sheet", q: "Find CM of an L-shaped uniform lamina cut from a 2m × 2m square sheet missing one 1m × 1m corner.", s: "Lamina consists of three 1m × 1m squares of mass m each at (0.5, 0.5), (1.5, 0.5), and (0.5, 1.5).<br>X<sub>cm</sub> = (m×0.5 + m×1.5 + m×0.5) / 3m = 2.5 / 3 = <b>5/6 m ≈ 0.833 m</b>.<br>Y<sub>cm</sub> = (m×0.5 + m×0.5 + m×1.5) / 3m = 2.5 / 3 = <b>5/6 m ≈ 0.833 m</b>." },
  { t: "Torque required to stop rotating disc", q: "A disc of I = 2 kg m<sup>2</sup> rotating at 50 rad s<sup>-1</sup> is stopped in 5 s. Find retarding torque.", s: "α = (0 - 50) / 5 = -10 rad s<sup>-2</sup>.<br>Torque τ = I α = 2 × (-10) = <b>-20 N m (Magnitude 20 N m)</b>." },
  { t: "Moment of Inertia Factors", q: "State 3 factors on which the moment of inertia of a body depends.", s: "1. Mass of the body.<br>2. Distribution of mass relative to axis of rotation.<br>3. Position and orientation of the axis of rotation." },
  { t: "Moment of Inertia of Hollow vs Solid Cylinder", q: "Which has a larger moment of inertia about central axis: a solid cylinder or hollow cylinder of same mass M and radius R?", s: "Hollow cylinder has larger MI (I = M R<sup>2</sup>) than solid cylinder (I = 1/2 M R<sup>2</sup>) because all mass of hollow cylinder is at maximum distance R from axis." },
  { t: "Angular Velocity Ratio for Earth Shrinking", q: "If Earth suddenly shrinks to half its radius without mass change, find new duration of day.", s: "Solid sphere I = 2/5 M R<sup>2</sup>. If R becomes R/2, I<sub>2</sub> = I<sub>1</sub> / 4.<br>By conservation of L: I<sub>1</sub> ω<sub>1</sub> = I<sub>2</sub> ω<sub>2</sub> ⇒ I<sub>1</sub> (2π/T<sub>1</sub>) = (I<sub>1</sub>/4) (2π/T<sub>2</sub>).<br>T<sub>2</sub> = T<sub>1</sub> / 4 = 24 hours / 4 = <b>6 hours!</b>" },
  { t: "Deceleration of Rolling Sphere on Incline", q: "Write acceleration formula of a solid sphere rolling down an incline of angle θ.", s: "a = " + frac('g sin θ', '1 + k<sup>2</sup>/R<sup>2</sup>') + ". For solid sphere k<sup>2</sup>/R<sup>2</sup> = 2/5:<br>a = " + frac('g sin θ', '1 + 2/5') + " = <b>5/7 g sin θ</b>." }
];

sas.forEach((item, idx) => {
  let qNo = idx + 56;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// LAs Q86-Q100: Deep Multi-Part Theoretical Derivations & Analytical Master Problems
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part D: Long Answer Questions (Q86 - Q100)</h3>`;

const las = [
  { t: "Derivation of Centre of Mass for 2-Particle & N-Particle System", q: "Define Centre of Mass. Derive the position vector expression R<sub>cm</sub> = (m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub>)/(m<sub>1</sub> + m<sub>2</sub>) for a two-particle system and extend it to N particles.", s: "<b>Definition:</b> The Centre of Mass is the point where total system mass is concentrated for describing translational motion.<br><br><b>Derivation for 2 Particles:</b><br>Let particles m<sub>1</sub>, m<sub>2</sub> have position vectors r<sub>1</sub>, r<sub>2</sub>.<br>Newton's 2nd Law for particle 1: F<sub>1</sub><sup>ext</sup> + F<sub>12</sub> = m<sub>1</sub> (d<sup>2</sup>r<sub>1</sub>/dt<sup>2</sup>).<br>Newton's 2nd Law for particle 2: F<sub>2</sub><sup>ext</sup> + F<sub>21</sub> = m<sub>2</sub> (d<sup>2</sup>r<sub>2</sub>/dt<sup>2</sup>).<br>Adding equations and applying F<sub>12</sub> + F<sub>21</sub> = 0 (Newton's 3rd Law):<br>F<sub>ext</sub> = m<sub>1</sub> (d<sup>2</sup>r<sub>1</sub>/dt<sup>2</sup>) + m<sub>2</sub> (d<sup>2</sup>r<sub>2</sub>/dt<sup>2</sup>) = d<sup>2</sup>/dt<sup>2</sup> [ m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub> ].<br>Define total mass M = m<sub>1</sub> + m<sub>2</sub> and write F<sub>ext</sub> = M (d<sup>2</sup>R<sub>cm</sub>/dt<sup>2</sup>):<br>M R<sub>cm</sub> = m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub> &nbsp; ⇒ &nbsp; <b>R<sub>cm</sub> = " + frac('m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + "</b>.<br><br><b>Extension to N Particles:</b><br><b>R<sub>cm</sub> = " + frac('∑ m<sub>i</sub> r<sub>i</sub>', 'M') + " = " + frac('1', 'M') + " (m<sub>1</sub> r<sub>1</sub> + m<sub>2</sub> r<sub>2</sub> + ... + m<sub>N</sub> r<sub>N</sub>)</b>." },
  { t: "Complete Theory & Derivation of Torque and Angular Momentum Relation", q: "Define Torque τ and Angular Momentum L. Derive the differential relation τ = dL/dt and prove conservation of angular momentum.", s: "<b>Definitions:</b><br>- Torque: τ = r × F (rotational turning force).<br>- Angular Momentum: L = r × p (moment of momentum).<br><br><b>Derivation of τ = dL/dt:</b><br>L = r × p. Differentiating with respect to time t:<br>dL/dt = d(r × p)/dt = (dr/dt × p) + (r × dp/dt).<br>Since dr/dt = v and p = m v, (v × m v) = m (v × v) = 0.<br>And dp/dt = F<sub>ext</sub>:<br>dL/dt = 0 + (r × F<sub>ext</sub>) = <b>τ<sub>ext</sub></b>.<br><br><b>Proof of Conservation Law:</b><br>If net external torque τ<sub>ext</sub> = 0, then dL/dt = 0.<br>Integrating yields: <b>L = I ω = Constant</b>." },
  { t: "Derivation of 3 Equations of Rotational Motion", q: "Derive the three equations of rotational motion (ω = ω<sub>0</sub> + α t, θ = ω<sub>0</sub> t + 1/2 α t<sup>2</sup>, ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ) for constant angular acceleration α.", s: "Consider a rigid body rotating with constant angular acceleration α, initial angular velocity ω<sub>0</sub> at t = 0, final angular velocity ω at time t, and angular displacement θ.<br><br><b>(i) First Equation (ω = ω<sub>0</sub> + α t):</b><br>By definition α = dω / dt ⇒ dω = α dt.<br>Integrating: ∫<sub>ω0</sub><sup>ω</sup> dω = α ∫<sub>0</sub><sup>t</sup> dt ⇒ ω - ω<sub>0</sub> = α t &nbsp; ⇒ &nbsp; <b>ω = ω<sub>0</sub> + α t</b>.<br><br><b>(ii) Second Equation (θ = ω<sub>0</sub> t + 1/2 α t<sup>2</sup>):</b><br>By definition ω = dθ / dt ⇒ dθ = ω dt = (ω<sub>0</sub> + α t) dt.<br>Integrating: ∫<sub>0</sub><sup>θ</sup> dθ = ∫<sub>0</sub><sup>t</sup> (ω<sub>0</sub> + α t) dt ⇒ <b>θ = ω<sub>0</sub> t + " + frac('1', '2') + " α t<sup>2</sup></b>.<br><br><b>(iii) Third Equation (ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ):</b><br>α = dω / dt = (dω / dθ) (dθ / dt) = ω (dω / dθ) ⇒ ω dω = α dθ.<br>Integrating: ∫<sub>ω0</sub><sup>ω</sup> ω dω = α ∫<sub>0</sub><sup>θ</sup> dθ ⇒ [ ω<sup>2</sup> / 2 ]<sub>ω0</sub><sup>ω</sup> = α θ ⇒ <b>ω<sup>2</sup> - ω<sub>0</sub><sup>2</sup> = 2 α θ</b>." },
  { t: "Complete Theory & Applications of Conservation of Angular Momentum", q: "State the Law of Conservation of Angular Momentum. Explain in detail 3 physical applications: (i) Ice skater spinning, (ii) Diver springboard somersaults, (iii) Planetary orbital speed variation.", s: "<b>Statement:</b> In an isolated system (τ<sub>ext</sub> = 0), total angular momentum L = I ω remains constant.<br><br><b>(i) Ice Skater / Ballet Dancer:</b><br>When skater extends arms, mass is far from axis, so I<sub>1</sub> is large and ω<sub>1</sub> is small. When arms are pulled close to chest, mass distribution contracts, reducing moment of inertia to I<sub>2</sub> < I<sub>1</sub>. To keep L = I<sub>1</sub> ω<sub>1</sub> = I<sub>2</sub> ω<sub>2</sub> constant, spin speed ω<sub>2</sub> increases dramatically.<br><br><b>(ii) Diver Somersaults:</b><br>Diver leaves springboard with initial angular momentum. In air, diver tucks knees and arms tight (curling into a ball) to minimize I, maximizing angular velocity ω for multiple fast somersaults. Before entering water, diver extends limbs to increase I and slow down rotation for clean vertical entry.<br><br><b>(iii) Planetary Orbits (Kepler's 2nd Law):</b><br>Sun exerts gravitational force along radius vector (torqueless: τ = r × F = 0). Thus angular momentum L = m r v sin φ is conserved. At perihelion (closest distance r<sub>1</sub>), velocity v<sub>1</sub> is maximum. At aphelion (farthest distance r<sub>2</sub>), velocity v<sub>2</sub> is minimum." },
  { t: "Derivation of Rotational Kinetic Energy & Torque-Inertia Relation", q: "Derive expressions for (i) Rotational Kinetic Energy E<sub>rot</sub> = 1/2 I ω<sup>2</sup>, and (ii) Torque τ = I α for a rigid body rotating about a fixed axis.", s: "Consider a rigid body consisting of particles of masses m<sub>1</sub>, m<sub>2</sub>, ... at perpendicular distances r<sub>1</sub>, r<sub>2</sub>, ... from rotation axis. All particles rotate with same angular velocity ω and angular acceleration α.<br><br><b>(i) Rotational Kinetic Energy:</b><br>Linear speed of i-th particle: v<sub>i</sub> = r<sub>i</sub> ω.<br>Total K.E. = ∑ 1/2 m<sub>i</sub> v<sub>i</sub><sup>2</sup> = ∑ 1/2 m<sub>i</sub> (r<sub>i</sub> ω)<sup>2</sup> = 1/2 ( ∑ m<sub>i</sub> r<sub>i</sub><sup>2</sup> ) ω<sup>2</sup>.<br>Since I = ∑ m<sub>i</sub> r<sub>i</sub><sup>2</sup>: <b>E<sub>rot</sub> = " + frac('1', '2') + " I ω<sup>2</sup></b>.<br><br><b>(ii) Torque Relation τ = I α:</b><br>Linear force on i-th particle: F<sub>i</sub> = m<sub>i</sub> a<sub>i</sub> = m<sub>i</sub> (r<sub>i</sub> α).<br>Torque on i-th particle: τ<sub>i</sub> = r<sub>i</sub> F<sub>i</sub> = m<sub>i</sub> r<sub>i</sub><sup>2</sup> α.<br>Total Torque τ = ∑ τ<sub>i</sub> = ( ∑ m<sub>i</sub> r<sub>i</sub><sup>2</sup> ) α = <b>I α</b>." },
  { t: "Complete Mechanical Equilibrium of Rigid Bodies & Conditions", q: "Explain complete mechanical equilibrium of a rigid body. State 6 scalar equilibrium conditions and discuss the difference between center of mass and center of gravity.", s: "<b>Mechanical Equilibrium:</b> A rigid body is in complete equilibrium if it has neither translational acceleration nor rotational acceleration.<br><br><b>6 Scalar Conditions:</b><br>1. ∑ F<sub>x</sub> = 0 (No x-translation)<br>2. ∑ F<sub>y</sub> = 0 (No y-translation)<br>3. ∑ F<sub>z</sub> = 0 (No z-translation)<br>4. ∑ τ<sub>x</sub> = 0 (No x-axis rotation)<br>5. ∑ τ<sub>y</sub> = 0 (No y-axis rotation)<br>6. ∑ τ<sub>z</sub> = 0 (No z-axis rotation)<br><br><b>Difference: CM vs Center of Gravity (CG):</b><br>- <b>Centre of Mass (CM):</b> Point where total mass of body is concentrated (independent of gravitational field).<br>- <b>Center of Gravity (CG):</b> Point where net gravitational force (weight) acts.<br>- CM and CG coincide in uniform gravitational fields, but differ in large celestial bodies across non-uniform gravity fields!" },
  { t: "Derivation of Rolling Motion Total K.E. & Acceleration on Inclined Plane", q: "Derive total kinetic energy of a body rolling without slipping. Derive expression for acceleration a = g sin θ / (1 + k<sup>2</sup>/R<sup>2</sup>) down an incline of angle θ.", s: "<b>Total K.E. of Rolling Body:</b><br>E<sub>total</sub> = E<sub>trans</sub> + E<sub>rot</sub> = 1/2 M v<sup>2</sup> + 1/2 I ω<sup>2</sup>.<br>Substitute I = M k<sup>2</sup> and ω = v/R:<br><b>E<sub>total</sub> = " + frac('1', '2') + " M v<sup>2</sup> [ 1 + " + frac('k<sup>2</sup>', 'R<sup>2</sup>') + " ]</b>.<br><br><b>Acceleration down Inclined Plane:</b><br>Forces on incline: Downward gravity M g sin θ, Static friction f up incline.<br>1. Linear motion: M g sin θ - f = M a.<br>2. Rotational motion: Torque τ = f R = I α = (M k<sup>2</sup>) (a / R) ⇒ f = M a (k<sup>2</sup> / R<sup>2</sup>).<br>Substitute f into linear equation:<br>M g sin θ - M a (k<sup>2</sup> / R<sup>2</sup>) = M a ⇒ M g sin θ = M a [ 1 + (k<sup>2</sup> / R<sup>2</sup>) ].<br><b>Acceleration a = " + frac('g sin θ', '1 + k<sup>2</sup>/R<sup>2</sup>') + "</b>." },
  { t: "Detailed Moments of Inertia Comparison of Standard Bodies", q: "List and compare moments of inertia of Ring, Disc, Solid Sphere, Hollow Sphere, and Rod. Determine which body reaches bottom of an inclined plane first when rolling together.", s: "<b>MI Formulas & k<sup>2</sup>/R<sup>2</sup> Values:</b><br>1. Thin Ring (CM): I = M R<sup>2</sup> ⇒ k<sup>2</sup>/R<sup>2</sup> = <b>1.00</b><br>2. Hollow Sphere: I = 2/3 M R<sup>2</sup> ⇒ k<sup>2</sup>/R<sup>2</sup> = <b>0.67</b><br>3. Uniform Disc: I = 1/2 M R<sup>2</sup> ⇒ k<sup>2</sup>/R<sup>2</sup> = <b>0.50</b><br>4. Solid Sphere: I = 2/5 M R<sup>2</sup> ⇒ k<sup>2</sup>/R<sup>2</sup> = <b>0.40</b><br><br><b>Race down Incline Analysis:</b><br>Acceleration a = g sin θ / (1 + k<sup>2</sup>/R<sup>2</sup>).<br>The body with the SMALLEST k<sup>2</sup>/R<sup>2</sup> has the LARGEST acceleration and reaches bottom FIRST!<br>Order of arrival: <b>1st Solid Sphere (a = 5/7 g sin θ) → 2nd Disc (a = 2/3 g sin θ) → 3rd Hollow Sphere (a = 3/5 g sin θ) → 4th Ring (a = 1/2 g sin θ)</b>." },
  { t: "CM of 4 Particles Square System Numerical", q: "Four masses 1 kg, 2 kg, 3 kg, 4 kg placed at corners of square of side 1 m: (0,0), (1,0), (1,1), (0,1). Find CM coordinates.", s: "Total mass M = 1 + 2 + 3 + 4 = 10 kg.<br><br><b>X<sub>cm</sub>:</b><br>X<sub>cm</sub> = (1×0 + 2×1 + 3×1 + 4×0) / 10 = (0 + 2 + 3 + 0) / 10 = 5 / 10 = <b>0.5 m</b>.<br><br><b>Y<sub>cm</sub>:</b><br>Y<sub>cm</sub> = (1×0 + 2×0 + 3×1 + 4×1) / 10 = (0 + 0 + 3 + 4) / 10 = 7 / 10 = <b>0.7 m</b>.<br><br><b>Centre of Mass position = (0.5 m, 0.7 m)</b>." },
  { t: "Rotational Kinematics & Work Master Numerical", q: "A motor of power 2 kW rotates a heavy wheel of I = 10 kg m<sup>2</sup> from rest. Calculate (i) angular acceleration if constant torque of 40 N m is applied, (ii) time to reach 600 rpm, (iii) work done in this time.", s: "(i) <b>Angular acceleration α:</b> α = τ / I = 40 / 10 = <b>4 rad s<sup>-2</sup></b>.<br><br>(ii) <b>Time to reach 600 rpm:</b><br>Target ω = 600 × (2π/60) = 20π ≈ 62.83 rad s<sup>-1</sup>.<br>t = (ω - ω<sub>0</sub>) / α = 20π / 4 = 5π ≈ <b>15.71 seconds</b>.<br><br>(iii) <b>Work Done W:</b><br>By Work-Energy Theorem: W = 1/2 I ω<sup>2</sup> = 1/2 (10) (20π)<sup>2</sup> = 5 × 400 π<sup>2</sup> = 2000 π<sup>2</sup> ≈ <b>19,739 Joules (19.74 kJ)</b>." },
  { t: "Moment of Inertia of Ring & Disc Transverse vs Diameter Proof", q: "Prove using perpendicular axis theorem that moment of inertia of a disc about its diameter is 1/4 M R<sup>2</sup>.", s: "Let disc lie in x-y plane. Central transverse axis is z-axis (I<sub>z</sub> = 1/2 M R<sup>2</sup>).<br>By Perpendicular Axis Theorem: I<sub>z</sub> = I<sub>x</sub> + I<sub>y</sub>.<br>By circular symmetry in plane: I<sub>x</sub> = I<sub>y</sub> = I<sub>diameter</sub>.<br>I<sub>z</sub> = 2 I<sub>diameter</sub> ⇒ 1/2 M R<sup>2</sup> = 2 I<sub>diameter</sub>.<br><b>I<sub>diameter</sub> = " + frac('1', '4') + " M R<sup>2</sup></b>." },
  { t: "Angular Momentum & Rotational K.E. Numerical", q: "A wheel of I = 0.4 kg m<sup>2</sup> has angular momentum L = 12 kg m<sup>2</sup> s<sup>-1</sup>. Calculate (i) angular velocity, (ii) rotational kinetic energy.", s: "(i) <b>Angular velocity ω:</b> L = I ω ⇒ ω = L / I = 12 / 0.4 = <b>30 rad s<sup>-1</sup></b>.<br><br>(ii) <b>Rotational K.E.:</b> E<sub>rot</sub> = L<sup>2</sup> / (2 I) = (12<sup>2</sup>) / (2 × 0.4) = 144 / 0.8 = <b>180 Joules</b>." },
  { t: "Diver Springboard Somersault Numerical", q: "A diver in stretched position has I<sub>1</sub> = 15 kg m<sup>2</sup> and rotates at 1 rev s<sup>-1</sup>. When tucked, I<sub>2</sub> drops to 3 kg m<sup>2</sup>. Find (i) new rotational speed, (ii) ratio of final to initial kinetic energy.", s: "Initial ω<sub>1</sub> = 2π rad s<sup>-1</sup>, I<sub>1</sub> = 15, I<sub>2</sub> = 3.<br><br>(i) <b>New Rotational Speed ω<sub>2</sub>:</b><br>I<sub>1</sub> ω<sub>1</sub> = I<sub>2</sub> ω<sub>2</sub> ⇒ 15 (1 rev/s) = 3 ω<sub>2</sub> ⇒ <b>ω<sub>2</sub> = 5 rev s<sup>-1</sup> (10π rad s<sup>-1</sup>)</b>.<br><br>(ii) <b>K.E. Ratio:</b><br>E<sub>2</sub> / E<sub>1</sub> = (1/2 I<sub>2</sub> ω<sub>2</sub><sup>2</sup>) / (1/2 I<sub>1</sub> ω<sub>1</sub><sup>2</sup>) = (3 × 25) / (15 × 1) = 75 / 15 = <b>5 : 1</b>.<br>(Kinetic energy increases by 5 times due to internal muscular work done by diver while pulling limbs in!)." },
  { t: "Rod Supported by Two Cables Tension Numerical", q: "A 6 kg uniform beam of length 3 m is supported horizontally by cables at ends A and B. A 4 kg mass is hung at 1 m from end A. Find tensions T<sub>A</sub> and T<sub>B</sub> in cables (g = 10 m s<sup>-2</sup>).", s: "Beam weight 60 N acts at center 1.5 m from A. Hung weight 40 N acts at 1 m from A.<br><br><b>1. Vertical Force Equilibrium:</b> T<sub>A</sub> + T<sub>B</sub> = 60 + 40 = 100 N.<br><br><b>2. Rotational Equilibrium (Torque about A):</b><br>T<sub>B</sub> (3) - (60 × 1.5) - (40 × 1.0) = 0.<br>3 T<sub>B</sub> = 90 + 40 = 130 ⇒ <b>T<sub>B</sub> = 130 / 3 ≈ 43.33 Newtons</b>.<br>T<sub>A</sub> = 100 - 43.33 = <b>56.67 Newtons</b>." },
  { t: "Master Rolling Cylinder down Incline Speed Numerical", q: "A solid cylinder of mass 4 kg and radius 0.1 m rolls down an inclined plane of height h = 3 m without slipping. Calculate (i) acceleration down 30° incline, (ii) speed at bottom of incline (g = 9.8 m s<sup>-2</sup>).", s: "For solid cylinder k<sup>2</sup>/R<sup>2</sup> = 1/2 = 0.5.<br><br><b>(i) Acceleration down 30° incline:</b><br>a = g sin 30° / (1 + 0.5) = (9.8 × 0.5) / 1.5 = 4.9 / 1.5 = <b>3.27 m s<sup>-2</sup></b>.<br><br><b>(ii) Speed at bottom from height h = 3 m:</b><br>By Energy Conservation: M g h = 1/2 M v<sup>2</sup> (1 + k<sup>2</sup>/R<sup>2</sup>) = 1/2 M v<sup>2</sup> (1.5) = 3/4 M v<sup>2</sup>.<br>v<sup>2</sup> = (4/3) g h = (4/3) × 9.8 × 3 = 4 × 9.8 = 39.2.<br><b>v = √39.2 ≈ 6.26 m s<sup>-1</sup></b>." }
];

las.forEach((item, idx) => {
  let qNo = idx + 86;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

solutionsHtml += `</div>`;

console.log("Unit V (Motion of System of Particles and Rigid Body) Solutions HTML generated successfully.");

// Construct final TS content string
const tsContent = `// Class 11 Physics Unit V: Motion of System of Particles and Rigid Body
// High-Level Reference Book Content & NCERT Solutions

export const c11Phy5HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy5HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-5.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote c11-phy-5.ts to " + outputPath);
