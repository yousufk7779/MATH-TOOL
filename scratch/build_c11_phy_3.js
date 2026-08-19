const fs = require('fs');
const path = require('path');

const themeColor = "#FF8A65"; // Exact primary theme color for Class 11 Physics Unit III (Laws of Motion)

// Clean compact inline stacked fraction that DOES NOT break lines vertically
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 138, 101, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(255, 138, 101, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 4px;">📌 Definition (${term}):</b>
    <p style="margin: 0; color: #FFFFFF; line-height: 1.6; font-size: 15.5px;">${definition}</p>
  </div>`;
}

// Diagram placeholder
function diagramPlaceholder(title, description) {
  return `
  <div style="border: 2px dashed ${themeColor}; border-radius: 12px; padding: 18px; text-align: center; margin: 20px 0; background: rgba(255, 138, 101, 0.04);">
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
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit III: Laws of Motion</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Force:</b>
        <span style="color: #FFFFFF;">An external agency (push or pull) that changes or tends to change the state of rest or uniform motion of a body.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Inertia:</b>
        <span style="color: #FFFFFF;">The inherent property of a body by virtue of which it resists any change in its state of rest or uniform motion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Linear Momentum (p):</b>
        <span style="color: #FFFFFF;">The total quantity of motion contained in a body, defined as the product of its mass and velocity (p = m v).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Impulse (J):</b>
        <span style="color: #FFFFFF;">The product of a large force acting on a body and the short time interval for which it acts (J = F × Δt = Δp).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Law of Conservation of Momentum:</b>
        <span style="color: #FFFFFF;">In an isolated system with zero net external force, the total linear momentum remains strictly constant.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Concurrent Forces:</b>
        <span style="color: #FFFFFF;">Forces whose lines of action pass through a single common point.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Static Friction (f<sub>s</sub>):</b>
        <span style="color: #FFFFFF;">The self-adjusting opposing contact force between two surfaces that prevents relative motion up to a limiting value.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Kinetic Friction (f<sub>k</sub>):</b>
        <span style="color: #FFFFFF;">The constant opposing contact force acting between two surfaces in relative sliding motion (f<sub>k</sub> = μ<sub>k</sub> N).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Angle of Repose (θ):</b>
        <span style="color: #FFFFFF;">The minimum angle of inclination of a rough plane at which a body placed on it just begins to slide down.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Banked Road:</b>
        <span style="color: #FFFFFF;">A curved road whose outer edge is raised above the inner edge to provide necessary centripetal force without relying solely on friction.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: CONCEPT OF FORCE, INERTIA & NEWTON'S FIRST LAW -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Concept of Force, Inertia & Newton's First Law</h2>
  
  ${defCard("Force", "An external agency in the form of a push or pull that changes or tends to change the state of rest, state of uniform motion, or direction of motion of a physical body.")}

  <p>Before Galileo and Newton, Aristotelian mechanics incorrectly asserted that an external force was continuously required to keep a body in uniform motion. Galileo Galilei disproved this by conducting experiments on double inclined planes, proving that a body moving on a frictionless horizontal plane requires zero net force to maintain constant velocity.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Galileo's Experiments & Concept of Inertia</h3>
  <p>Inertia is the natural resistance of any physical object to any change in its velocity. Mass is the quantitative measure of inertia; heavier bodies possess greater inertia than lighter bodies.</p>

  <div style="margin: 12px 0;">
    ${colonTopic("Inertia of Rest", "The inability of a body to change its state of rest by itself. Example: When a stationary bus suddenly starts, passengers jerk backward because their lower body moves forward while their upper body tends to stay at rest.")}
    ${colonTopic("Inertia of Motion", "The inability of a body to change its state of uniform motion by itself. Example: When a moving bus suddenly stops, passengers jerk forward because their feet stop with the bus while their upper body continues moving.")}
    ${colonTopic("Inertia of Direction", "The inability of a body to change its direction of motion by itself. Example: When a car takes a sharp curve, passengers are thrown outward due to their tendency to maintain straight-line motion.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Newton's First Law of Motion (Law of Inertia)</h3>
  ${defCard("Newton's First Law of Motion", "Every body continues in its state of rest or of uniform motion in a straight line unless it is compelled to change that state by an external net unbalanced force.")}

  <p>Newton's First Law provides the qualitative definition of force as an agent that produces acceleration, and establishes the fundamental concept of inertial frames of reference.</p>

  ${diagramPlaceholder("Galileo's Double Inclined Plane Experiment", "Diagram showing a ball rolling down an inclined plane and ascending to the exact same height on an opposing plane of varying angles.")}

  <!-- SECTION 2: LINEAR MOMENTUM & NEWTON'S SECOND LAW -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Linear Momentum & Newton's Second Law of Motion</h2>

  ${defCard("Linear Momentum (p)", "A vector physical quantity representing the total quantity of motion contained in a body, defined as the product of its mass m and velocity v.")}

  ${eqBox("<b>p = m × v</b> &nbsp; (Vector quantity, SI unit: <b>kg m s<sup>-1</sup></b>)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Statement & Derivation of Newton's Second Law</h3>
  ${defCard("Newton's Second Law of Motion", "The rate of change of linear momentum of a body is directly proportional to the applied net external force and takes place in the direction of the force.")}

  <p>Mathematically, if a net force F acts on a body of mass m producing velocity v:</p>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-weight: bold; font-size: 15.5px; margin-bottom: 4px;">• Mathematical Formulation:</div>
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px; display: inline-block; white-space: nowrap;">F ∝ ` + frac('dp', 'dt') + ` &nbsp; ⇒ &nbsp; F = k ` + frac('d(m v)', 'dt') + `</div>
    <p style="color: #FFFFFF; margin: 8px 0 0 0; line-height: 1.6;">For a system with constant mass m (k = 1 in SI units):</p>
    <div style="color: #FFFFFF; font-size: 16px; font-weight: bold; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px; display: inline-block; margin-top: 6px; white-space: nowrap;">F = m ` + frac('dv', 'dt') + ` = m a</div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Absolute and Gravitational Units of Force</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("1 Newton (SI Absolute)", singleLineCode("1 N = 1 kg m s<sup>-2</sup> = 10<sup>5</sup> dynes"))}
    ${colonTopic("1 Dyne (CGS Absolute)", singleLineCode("1 dyne = 1 g cm s<sup>-2</sup> = 10<sup>-5</sup> N"))}
    ${colonTopic("1 kgf / 1 kg-wt (Gravitational)", singleLineCode("1 kgf = 9.8 N"))}
  </div>

  ${diagramPlaceholder("Force vs Acceleration Linear Relationship F = ma", "Graph depicting linear relationship F = ma and rate of change of momentum slope dp/dt.")}

  <!-- SECTION 3: IMPULSE & IMPULSE-MOMENTUM THEOREM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Impulse & Impulse-Momentum Theorem</h2>

  ${defCard("Impulse (J)", "The total measure of impact of a force, defined as the product of a large force and the short time interval for which it acts.")}

  ${eqBox("<b>J = F<sub>avg</sub> × Δt = ∫ F dt = Δp = p<sub>2</sub> - p<sub>1</sub></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Impulse-Momentum Theorem</h3>
  <p>The Impulse-Momentum Theorem states that the impulse of a force acting on a body equals the total change in linear momentum produced in the body.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Practical Applications of Impulse</h3>
  <p>Since Impulse J = F × Δt is constant for a given momentum change, increasing impact time Δt significantly reduces the peak impact force F:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("Cricket Fielder Pulling Hands Back", "A fielder pulls hands backward while catching a fast ball to increase impact time Δt, thereby reducing force F on hands and preventing injury.")}
    ${colonTopic("Vehicle Shock Absorbers & Airbags", "Springs and airbags increase collision time Δt during sudden impacts, dramatically decreasing retarding force acting on vehicle occupants.")}
    ${colonTopic("Crumple Zones in Cars", "Modern automobile car fronts are designed to crumple during accidents to prolong impact duration Δt and minimize passenger deceleration forces.")}
  </div>

  ${diagramPlaceholder("Force-Time Graph & Impulse Area under Curve", "F-t curve demonstrating peak impulsive force and equivalent average force over time interval Δt.")}

  <!-- SECTION 4: NEWTON'S THIRD LAW & CONSERVATION OF LINEAR MOMENTUM -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Newton's Third Law & Conservation of Linear Momentum</h2>

  ${defCard("Newton's Third Law of Motion", "To every action force, there is always an equal and opposite reaction force, acting simultaneously on two different interacting bodies.")}

  ${eqBox("<b>F<sub>12</sub> = - F<sub>21</sub></b> &nbsp; (Force on 1 by 2 = - Force on 2 by 1)")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Key Features of Action-Reaction Forces</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Simultaneous Occurrence", "Action and reaction forces arise simultaneously; neither exists without the other.")}
    ${colonTopic("Different Bodies", "Action and reaction act on TWO DIFFERENT bodies, so they never cancel each other out to produce equilibrium on a single body.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Law of Conservation of Linear Momentum</h3>
  ${defCard("Law of Conservation of Linear Momentum", "The total linear momentum of an isolated system of interacting particles remains strictly constant in magnitude and direction if zero net external force acts on the system.")}

  <p>For an isolated system of two bodies A and B undergoing collision (F<sub>ext</sub> = 0):</p>
  ${eqBox("<b>p<sub>A, initial</sub> + p<sub>B, initial</sub> = p<sub>A, final</sub> + p<sub>B, final</sub></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Applications of Momentum Conservation</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Recoil Velocity of Gun", "When a bullet of mass m is fired with velocity v from a gun of mass M:<br>" + singleLineCode("v<sub>recoil</sub> = - " + frac('m v', 'M')))}
    ${colonTopic("Rocket Propulsion", "Mass of rocket continuously decreases as gas is ejected backward at exhaust velocity u<sub>ex</sub>:<br>" + singleLineCode("v(t) = v<sub>0</sub> + u<sub>ex</sub> ln ( " + frac('m<sub>0</sub>', 'm(t)') + " )"))}
  </div>

  ${diagramPlaceholder("Recoil of Gun & Conservation of Linear Momentum", "Vector diagram illustrating forward momentum of bullet m·v balanced by backward recoil momentum of gun M·V_recoil.")}

  <!-- SECTION 5: EQUILIBRIUM OF CONCURRENT FORCES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Equilibrium of Concurrent Forces & Lami's Theorem</h2>

  ${defCard("Concurrent Forces", "A set of forces whose lines of action intersect at a single common point in space.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Equilibrium Condition</h3>
  <p>A body subjected to concurrent forces is in translational equilibrium if the vector sum of all forces is zero:</p>
  ${eqBox("<b>∑ F = F<sub>1</sub> + F<sub>2</sub> + F<sub>3</sub> + ... = 0 &nbsp; ⇒ &nbsp; ∑ F<sub>x</sub> = 0, &nbsp; ∑ F<sub>y</sub> = 0, &nbsp; ∑ F<sub>z</sub> = 0</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Lami's Theorem</h3>
  ${defCard("Lami's Theorem", "If three coplanar concurrent forces acting at a point are in equilibrium, each force is directly proportional to the sine of the angle between the other two forces.")}

  ${eqBox("<b>" + frac('F<sub>1</sub>', 'sin α') + " = " + frac('F<sub>2</sub>', 'sin β') + " = " + frac('F<sub>3</sub>', 'sin γ') + "</b>")}

  ${diagramPlaceholder("Lami's Theorem 3 Coplanar Concurrent Forces Diagram", "Geometry diagram showing 3 forces F1, F2, F3 in equilibrium with opposite angles α, β, γ.")}

  <!-- SECTION 6: FRICTION: STATIC, KINETIC & ROLLING FRICTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Friction: Static, Kinetic, and Rolling Friction</h2>

  ${defCard("Friction", "The tangential opposing contact force that resists relative sliding or rolling motion between two surfaces in contact.")}

  <p>At the microscopic level, even highly polished surfaces possess cold-weld adhesive bonds and microscopic irregularities (peaks and valleys) that interlock when surfaces are pressed together under normal reaction force N.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Types of Friction</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Static Friction (f<sub>s</sub>)", "Self-adjusting opposing force acting when there is a tendency of relative motion but no actual motion takes place. <code>0 ≤ f<sub>s</sub> ≤ f<sub>s(max)</sub></code>.")}
    ${colonTopic("Limiting Friction (f<sub>s(max)</sub>)", "The maximum value of static friction just before relative motion begins:<br>" + singleLineCode("f<sub>s(max)</sub> = μ<sub>s</sub> N"))}
    ${colonTopic("Kinetic / Sliding Friction (f<sub>k</sub>)", "The constant opposing force acting once relative motion has commenced:<br>" + singleLineCode("f<sub>k</sub> = μ<sub>k</sub> N &nbsp; (μ<sub>k</sub> < μ<sub>s</sub>)"))}
    ${colonTopic("Rolling Friction (f<sub>r</sub>)", "Opposing force encountered when a spherical or cylindrical object rolls on a surface:<br>" + singleLineCode("f<sub>r</sub> = μ<sub>r</sub> " + frac('N', 'r') + " &nbsp; (f<sub>r</sub> << f<sub>k</sub> < f<sub>s</sub>)"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Angle of Friction & Angle of Repose</h3>
  <div style="margin: 10px 0;">
    ${colonTopic("Angle of Friction (λ)", "Angle between resultant contact force S (normal N + limiting friction f<sub>s</sub>) and normal reaction N:<br>" + singleLineCode("tan λ = " + frac('f<sub>s(max)</sub>', 'N') + " = μ<sub>s</sub>"))}
    ${colonTopic("Angle of Repose (θ)", "Minimum angle of an inclined plane at which a body placed on it just begins to slide down under gravity:<br>" + singleLineCode("tan θ = μ<sub>s</sub> &nbsp; ⇒ &nbsp; Angle of Repose θ = Angle of Friction λ"))}
  </div>

  ${diagramPlaceholder("Static vs Kinetic Friction Graph & Angle of Repose Plane", "Plot of friction force vs applied force showing linear self-adjusting static region, peak limiting friction, and constant kinetic friction level.")}

  <!-- SECTION 7: DYNAMICS OF UNIFORM CIRCULAR MOTION & BANKED ROADS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Dynamics of Uniform Circular Motion & Banked Roads</h2>

  ${defCard("Centripetal Force", "The real inward radial force directed toward the center of a circular path required to continuously deflect a body's velocity direction along the circle.")}

  ${eqBox("<b>F<sub>c</sub> = m a<sub>c</sub> = " + frac('m v<sup>2</sup>', 'r') + " = m r ω<sup>2</sup></b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Vehicle on a Level Circular Road</h3>
  <p>When a vehicle negotiates a flat level curve of radius r, the necessary centripetal force is provided solely by static friction between tires and road surface:</p>
  ${eqBox("<b>f<sub>s</sub> = " + frac('m v<sup>2</sup>', 'r') + " ≤ μ<sub>s</sub> m g &nbsp; ⇒ &nbsp; Maximum Safe Speed v<sub>max</sub> = √(μ<sub>s</sub> g r)</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Vehicle on a Banked Circular Road</h3>
  <p>To reduce dependence on friction and prevent skidding, the outer edge of a curved road is raised above the inner edge at an angle of banking θ.</p>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    ${colonTopic("Optimum Speed (Zero Friction)", singleLineCode("v<sub>0</sub> = √(r g tan θ)"))}
    ${colonTopic("Maximum Safe Speed with Friction", singleLineCode("v<sub>max</sub> = √[ r g " + frac('μ<sub>s</sub> + tan θ', '1 - μ<sub>s</sub> tan θ') + " ]"))}
    ${colonTopic("Minimum Speed without Sliding Down", singleLineCode("v<sub>min</sub> = √[ r g " + frac('tan θ - μ<sub>s</sub>', '1 + μ<sub>s</sub> tan θ') + " ]"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Bending of a Cyclist</h3>
  <p>A cyclist negotiating a curve of radius r at speed v bends inward toward the center at angle θ with vertical so that normal reaction provides centripetal force:</p>
  ${eqBox("<b>tan θ = " + frac('v<sup>2</sup>', 'r g') + "</b>")}

  ${diagramPlaceholder("Free Body Diagram of Vehicle on Banked Circular Road", "FBD showing normal reaction N resolved into N cos θ balancing mg and N sin θ providing centripetal force mv²/r.")}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(255, 138, 101, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Friction Laws & Dynamics Summary for Unit III</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Newton's 2nd Law & Impulse:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">F = ` + frac('dp', 'dt') + ` = m a<br>J = F<sub>avg</sub> Δt = Δp = p<sub>2</sub> - p<sub>1</sub></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Momentum Conservation:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">m<sub>1</sub> v<sub>1</sub> + m<sub>2</sub> v<sub>2</sub> = m<sub>1</sub> u<sub>1</sub> + m<sub>2</sub> u<sub>2</sub><br>Recoil Gun: v<sub>recoil</sub> = - ` + frac('m v', 'M') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Laws of Friction:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">f<sub>s(max)</sub> = μ<sub>s</sub> N &nbsp;|&nbsp; f<sub>k</sub> = μ<sub>k</sub> N<br>tan λ = μ<sub>s</sub> &nbsp;|&nbsp; Angle of Repose θ = λ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Equilibrium & Lami's Theorem:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">∑ F = 0<br>` + frac('F<sub>1</sub>', 'sin α') + ` = ` + frac('F<sub>2</sub>', 'sin β') + ` = ` + frac('F<sub>3</sub>', 'sin γ') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Level Road Speeds:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>max</sub> = √(μ<sub>s</sub> g r)<br>Bending Cyclist: tan θ = ` + frac('v<sup>2</sup>', 'r g') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Banked Road Speeds:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v<sub>0</sub> = √(r g tan θ)<br>v<sub>max</sub> = √[ r g ` + frac('μ<sub>s</sub> + tan θ', '1 - μ<sub>s</sub> tan θ') + ` ]</span>
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
    <div style="background: rgba(255, 138, 101, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
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
    <p style="color: #B0BEC5; margin: 5px 0 0 0; font-size: 15px; text-align: center !important;">Unit III: Laws of Motion — 100 Master Practice Questions (Theoretical & Numerical)</p>
  </div>
`;

// Rebalanced 100 Questions for Unit III (Laws of Motion)
const mcqs = [
  { q: "Newton's First Law of Motion defines which fundamental physical quantity?", opts: ["a) Energy", "b) Work", "c) Force", "d) Power"], ans: "c) Force", exp: "Newton's First Law provides the qualitative definition of Force as an external agency that alters state of rest or uniform motion." },
  { q: "Which property of a body measures its quantitative inertia?", opts: ["a) Velocity", "b) Volume", "c) Mass", "d) Weight"], ans: "c) Mass", exp: "Mass is the quantitative measure of inertia; larger mass implies greater resistance to change in motion." },
  { q: "If net external force acting on a body is zero, its acceleration is:", opts: ["a) Zero", "b) Infinite", "c) Constant non-zero", "d) Equal to g"], ans: "a) Zero", exp: "From F = m a, if F = 0, acceleration a = 0." },
  { q: "A 5 kg block is acted upon by a net force of 20 N. Its acceleration is:", opts: ["a) 2 m s<sup>-2</sup>", "b) 4 m s<sup>-2</sup>", "c) 5 m s<sup>-2</sup>", "d) 100 m s<sup>-2</sup>"], ans: "b) 4 m s<sup>-2</sup>", exp: "a = F / m = 20 / 5 = 4 m s<sup>-2</sup>." },
  { q: "The SI unit of Impulse is identical to the SI unit of:", opts: ["a) Force", "b) Energy", "c) Linear Momentum", "d) Power"], ans: "c) Linear Momentum", exp: "Impulse J = Δp (change in momentum), so its unit is N s or kg m s<sup>-1</sup>." },
  { q: "Action and reaction forces described in Newton's Third Law:", opts: ["a) Act on the same body", "b) Act on two different bodies simultaneously", "c) Act at different times", "d) Cancel each other completely on one body"], ans: "b) Act on two different bodies simultaneously", exp: "Action and reaction act on different bodies (F<sub>12</sub> = -F<sub>21</sub>), so they never cancel out on a single object." },
  { q: "A bullet of mass 0.02 kg is fired with velocity 500 m s<sup>-1</sup> from a rifle of mass 4 kg. The recoil velocity of rifle is:", opts: ["a) -2.5 m s<sup>-1</sup>", "b) -5.0 m s<sup>-1</sup>", "c) -10 m s<sup>-1</sup>", "d) -0.5 m s<sup>-1</sup>"], ans: "a) -2.5 m s<sup>-1</sup>", exp: "v<sub>recoil</sub> = -(m v)/M = -(0.02 × 500)/4 = -10 / 4 = -2.5 m s<sup>-1</sup>." },
  { q: "Static friction f<sub>s</sub> is a:", opts: ["a) Constant force", "b) Self-adjusting force", "c) Zero force always", "d) Force greater than limiting friction"], ans: "b) Self-adjusting force", exp: "Static friction automatically adjusts its magnitude equal to applied force up to limiting friction limit f<sub>s(max)</sub>." },
  { q: "The ratio of limiting friction f<sub>s(max)</sub> to normal reaction N is called:", opts: ["a) Coefficient of kinetic friction", "b) Coefficient of static friction", "c) Angle of repose", "d) Rolling resistance"], ans: "b) Coefficient of static friction", exp: "μ<sub>s</sub> = f<sub>s(max)</sub> / N." },
  { q: "The maximum safe speed for a car negotiating a flat level curve of radius r with static friction coefficient μ<sub>s</sub> is:", opts: ["a) √(μ<sub>s</sub> g / r)", "b) √(μ<sub>s</sub> g r)", "c) μ<sub>s</sub> g r", "d) r g / μ<sub>s</sub>"], ans: "b) √(μ<sub>s</sub> g r)", exp: "v<sub>max</sub> = √(μ<sub>s</sub> g r)." },
  { q: "When a passenger jumps out of a moving train, he falls forward due to:", opts: ["a) Inertia of rest", "b) Inertia of motion", "c) Inertia of direction", "d) Gravitational attraction"], ans: "b) Inertia of motion", exp: "His feet touch the ground and stop, but his body continues moving forward due to inertia of motion." },
  { q: "The area under Force vs Time (F-t) graph represents:", opts: ["a) Work done", "b) Power", "c) Impulse", "d) Acceleration"], ans: "c) Impulse", exp: "Area under F-t graph = ∫ F dt = Impulse J." },
  { q: "Which friction force has the smallest magnitude among the following?", opts: ["a) Static friction", "b) Limiting friction", "c) Kinetic friction", "d) Rolling friction"], ans: "d) Rolling friction", exp: "Rolling friction (f<sub>r</sub>) is much smaller than sliding kinetic friction (f<sub>k</sub>) and limiting friction." },
  { q: "Angle of friction λ and coefficient of static friction μ<sub>s</sub> are related by:", opts: ["a) sin λ = μ<sub>s</sub>", "b) cos λ = μ<sub>s</sub>", "c) tan λ = μ<sub>s</sub>", "d) cot λ = μ<sub>s</sub>"], ans: "c) tan λ = μ<sub>s</sub>", exp: "tan λ = f<sub>s(max)</sub> / N = μ<sub>s</sub>." },
  { q: "Angle of repose θ for an inclined plane is equal to:", opts: ["a) Angle of friction λ", "b) 90° - λ", "c) λ / 2", "d) 2 λ"], ans: "a) Angle of friction λ", exp: "tan θ = μ<sub>s</sub> = tan λ, so Angle of Repose θ = Angle of Friction λ." },
  { q: "The optimum speed on a banked circular road of radius r with banking angle θ (without friction) is:", opts: ["a) √(r g sin θ)", "b) √(r g cos θ)", "c) √(r g tan θ)", "d) r g tan θ"], ans: "c) √(r g tan θ)", exp: "v<sub>0</sub> = √(r g tan θ)." },
  { q: "A body of mass 2 kg moving at 10 m s<sup>-1</sup> is brought to rest in 2 s. The stopping force is:", opts: ["a) 5 N", "b) 10 N", "c) 20 N", "d) 40 N"], ans: "b) 10 N", exp: "a = (0 - 10)/2 = -5 m/s<sup>2</sup>. F = m a = 2 × (-5) = -10 N (magnitude 10 N)." },
  { q: "Working of rocket propulsion is based on:", opts: ["a) Conservation of mass", "b) Conservation of energy", "c) Conservation of linear momentum", "d) Conservation of angular momentum"], ans: "c) Conservation of linear momentum", exp: "Forward thrust on rocket is produced by conservation of linear momentum as gases are ejected backward." },
  { q: "When a horse pulls a wagon, the force that causes the horse to move forward is exerted by:", opts: ["a) The wagon on the horse", "b) The ground on the horse", "c) The horse on the ground", "d) The horse on the wagon"], ans: "b) The ground on the horse", exp: "The horse pushes ground backward; the ground exerts an equal and opposite reaction force forward on horse feet." },
  { q: "If three concurrent forces F<sub>1</sub>, F<sub>2</sub>, F<sub>3</sub> are in equilibrium, their vector sum is:", opts: ["a) F<sub>1</sub> + F<sub>2</sub>", "b) 0", "c) F<sub>3</sub>", "d) Infinite"], ans: "b) 0", exp: "Equilibrium condition for concurrent forces: ∑ F = F<sub>1</sub> + F<sub>2</sub> + F<sub>3</sub> = 0." },
  { q: "A cyclist bends inward while taking a turn to:", opts: ["a) Increase friction", "b) Provide necessary centripetal force", "c) Reduce speed", "d) Prevent air resistance"], ans: "b) Provide necessary centripetal force", exp: "Bending inward allows horizontal component of normal reaction to provide centripetal force (tan θ = v<sup>2</sup>/(rg))." },
  { q: "Coefficient of kinetic friction μ<sub>k</sub> compared to static friction coefficient μ<sub>s</sub> is:", opts: ["a) μ<sub>k</sub> > μ<sub>s</sub>", "b) μ<sub>k</sub> < μ<sub>s</sub>", "c) μ<sub>k</sub> = μ<sub>s</sub>", "d) μ<sub>k</sub> = 0"], ans: "b) μ<sub>k</sub> < μ<sub>s</sub>", exp: "Once sliding starts, microscopic cold welds break, so kinetic friction is slightly less than static friction (μ<sub>k</sub> < μ<sub>s</sub>)." },
  { q: "A 1000 kg car moves around a turn of radius 50 m at 10 m s<sup>-1</sup>. Required centripetal force is:", opts: ["a) 1000 N", "b) 2000 N", "c) 5000 N", "d) 10000 N"], ans: "b) 2000 N", exp: "F<sub>c</sub> = m v<sup>2</sup> / r = [1000 × 10<sup>2</sup>] / 50 = 100000 / 50 = 2000 N." },
  { q: "Lami's theorem is applicable for:", opts: ["a) Two non-concurrent forces", "b) Three coplanar concurrent forces in equilibrium", "c) Four parallel forces", "d) Variable forces"], ans: "b) Three coplanar concurrent forces in equilibrium", exp: "Lami's theorem applies specifically to 3 coplanar concurrent forces in equilibrium: F<sub>1</sub>/sin α = F<sub>2</sub>/sin β = F<sub>3</sub>/sin γ." },
  { q: "A bomb of mass 9 kg at rest explodes into two pieces of 3 kg and 6 kg. If 3 kg piece moves at 16 m s<sup>-1</sup>, speed of 6 kg piece is:", opts: ["a) 4 m s<sup>-1</sup>", "b) 8 m s<sup>-1</sup>", "c) 12 m s<sup>-1</sup>", "d) 16 m s<sup>-1</sup>"], ans: "b) 8 m s<sup>-1</sup>", exp: "By momentum conservation: 0 = m<sub>1</sub> v<sub>1</sub> + m<sub>2</sub> v<sub>2</sub> ⇒ 3(16) + 6 v<sub>2</sub> = 0 ⇒ 48 + 6 v<sub>2</sub> = 0 ⇒ |v<sub>2</sub>| = 8 m s<sup>-1</sup>." }
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
  { t: "Define Force", q: "Define force according to Newton's First Law.", s: "Force is an external agency in the form of a push or pull that changes or tends to change a body's state of rest or uniform motion." },
  { t: "Define Inertia", q: "What is inertia? State its quantitative measure.", s: "Inertia is the natural resistance of a body to any change in its state of rest or uniform motion. Mass is the quantitative measure of inertia." },
  { t: "Inertia of Rest Example", q: "Give one practical example of inertia of rest.", s: "When a carpet is beaten with a stick, dust particles fall off because the carpet moves with the stick while dust particles tend to remain at rest due to inertia of rest." },
  { t: "Inertia of Motion Example", q: "Give one practical example of inertia of motion.", s: "An athlete runs some distance before taking a long jump to gain momentum and inertia of motion, which helps jump farther." },
  { t: "Inertia of Direction Example", q: "Give one practical example of inertia of direction.", s: "Mud flying off a rotating bicycle tire flies tangentially due to inertia of direction." },
  { t: "Define Linear Momentum", q: "Define linear momentum and state its SI unit.", s: "Linear momentum is total quantity of motion contained in a body, defined as p = m v. SI unit: kg m s<sup>-1</sup>." },
  { t: "Newton's Second Law Formula", q: "State Newton's Second Law in mathematical vector form.", s: "F = dp / dt = d(m v) / dt = m a (for constant mass)." },
  { t: "Define Newton (N)", q: "Define 1 Newton force in SI units.", s: "One Newton is the net force that produces an acceleration of 1 m s<sup>-2</sup> in a body of mass 1 kg (1 N = 1 kg m s<sup>-2</sup>)." },
  { t: "Define Dyne", q: "Define 1 Dyne force in CGS units.", s: "One Dyne is the net force that produces an acceleration of 1 cm s<sup>-2</sup> in a body of mass 1 g (1 dyne = 10<sup>-5</sup> N)." },
  { t: "Define Impulse", q: "Define impulse of a force.", s: "Impulse is the product of average force and time interval for which it acts: J = F<sub>avg</sub> × Δt = Δp." },
  { t: "Impulse-Momentum Theorem Statement", q: "State Impulse-Momentum Theorem.", s: "Impulse-Momentum Theorem states that impulse of a force equals total change in linear momentum produced: J = Δp." },
  { t: "Newton's Third Law Statement", q: "State Newton's Third Law of Motion.", s: "To every action force, there is always an equal and opposite reaction force (F<sub>12</sub> = -F<sub>21</sub>)." },
  { t: "Action and Reaction Simultaneous", q: "Do action and reaction forces act on the same body?", s: "No, action and reaction forces act simultaneously on TWO DIFFERENT interacting bodies." },
  { t: "Conservation of Linear Momentum Statement", q: "State Law of Conservation of Linear Momentum.", s: "In an isolated system with zero net external force (F<sub>ext</sub> = 0), total linear momentum remains strictly constant." },
  { t: "Recoil Velocity Formula", q: "Write recoil velocity formula for a gun of mass M firing bullet of mass m at velocity v.", s: "v<sub>recoil</sub> = - (m v) / M." },
  { t: "Define Concurrent Forces", q: "What are concurrent forces?", s: "Concurrent forces are forces whose lines of action intersect at a single common point." },
  { t: "Equilibrium Condition for Concurrent Forces", q: "State the mathematical condition for equilibrium of 3 concurrent forces.", s: "∑ F = F<sub>1</sub> + F<sub>2</sub> + F<sub>3</sub> = 0." },
  { t: "State Lami's Theorem", q: "State Lami's Theorem formula for 3 forces.", s: "F<sub>1</sub> / sin α = F<sub>2</sub> / sin β = F<sub>3</sub> / sin γ." },
  { t: "Define Friction", q: "What is friction force?", s: "Friction is the tangential contact force that opposes relative motion or tendency of relative motion between two surfaces." },
  { t: "Define Static Friction", q: "Define static friction.", s: "Static friction is self-adjusting opposing force that prevents relative sliding between two contact surfaces up to limiting friction." },
  { t: "Define Limiting Friction", q: "Define limiting friction.", s: "Limiting friction f<sub>s(max)</sub> is the maximum value of static friction just before relative sliding motion begins." },
  { t: "Define Kinetic Friction", q: "Define kinetic friction.", s: "Kinetic friction f<sub>k</sub> is constant opposing contact force acting between surfaces in relative sliding motion." },
  { t: "Define Rolling Friction", q: "What is rolling friction?", s: "Rolling friction is the opposing force encountered when a spherical or cylindrical object rolls on a surface." },
  { t: "State Coefficient of Static Friction Formula", q: "State formula for coefficient of static friction μ<sub>s</sub>.", s: "μ<sub>s</sub> = f<sub>s(max)</sub> / N." },
  { t: "Define Angle of Friction", q: "Define angle of friction λ.", s: "Angle of friction λ is the angle between resultant contact force S and normal reaction N when limiting friction acts: tan λ = μ<sub>s</sub>." },
  { t: "Define Angle of Repose", q: "Define angle of repose θ.", s: "Angle of repose is the minimum inclination of a rough plane at which a body just begins to slide down under gravity: tan θ = μ<sub>s</sub>." },
  { t: "Methods to Reduce Friction", q: "State two common methods to reduce friction.", s: "1. Applying lubricants (oil, grease, graphite).<br>2. Using ball bearings to convert sliding friction into rolling friction." },
  { t: "Centripetal Force Formula", q: "State centripetal force formula for mass m in radius r with speed v.", s: "F<sub>c</sub> = m v<sup>2</sup> / r = m r ω<sup>2</sup>." },
  { t: "Max Speed on Level Road Formula", q: "State formula for maximum safe speed of a vehicle on a level curve.", s: "v<sub>max</sub> = √(μ<sub>s</sub> g r)." },
  { t: "Optimum Banked Road Speed Formula", q: "State formula for optimum speed on a banked road without friction.", s: "v<sub>0</sub> = √(r g tan θ)." }
];

vsas.forEach((item, idx) => {
  let qNo = idx + 26;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// SAs Q56-Q85: Theoretical & Conceptual Reasoning Mixed with Simple Derivations
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part C: Short Answer Questions (Q56 - Q85)</h3>`;

const sas = [
  { t: "Galileo Inclined Plane Reasoning", q: "Explain how Galileo's experiments disproved Aristotelian view of motion.", s: "Aristotle claimed force is needed to sustain uniform motion. Galileo showed a ball rolling down an incline gains speed, rolling up loses speed, so on a frictionless horizontal surface it moves indefinitely with constant velocity without net force!" },
  { t: "Derive F = ma from Newton's Second Law", q: "Derive F = m a from Newton's Second Law statement.", s: "Statement: F ∝ dp/dt. Since p = mv, F = k d(mv)/dt.<br>For constant mass m, d(mv)/dt = m (dv/dt) = m a.<br>Setting k = 1 in SI units: <b>F = m a</b>." },
  { t: "Why Second Law is Real Law of Motion", q: "Prove why Newton's Second Law is called the real law of motion.", s: "1. <b>First Law from Second Law:</b> If F = 0 in F = ma, then a = 0 ⇒ v = constant (body stays at rest/uniform motion).<br>2. <b>Third Law from Second Law:</b> Impulse F<sub>12</sub> Δt = Δp<sub>1</sub> and F<sub>21</sub> Δt = Δp<sub>2</sub>. In isolated system Δp<sub>1</sub> + Δp<sub>2</sub> = 0 ⇒ F<sub>12</sub> = -F<sub>21</sub>.<br>Thus, Second Law contains both First and Third Laws!" },
  { t: "Impulse Cricket Ball Application", q: "Why does a cricketer lower his hands while catching a ball?", s: "Impulse J = F × Δt = Δp. By pulling hands backward, time interval Δt for momentum to reach zero is increased, which significantly reduces retarding force F on hands, preventing hurt." },
  { t: "Apparent Weight in a Lift Problem", q: "Calculate apparent weight of a 60 kg man in an elevator (g = 10 m s<sup>-2</sup>) moving (i) upward at 2 m s<sup>-2</sup>, (ii) downward at 2 m s<sup>-2</sup>.", s: "(i) <b>Upward Acceleration:</b> N = m(g + a) = 60(10 + 2) = 60(12) = <b>720 N</b>.<br>(ii) <b>Downward Acceleration:</b> N = m(g - a) = 60(10 - 2) = 60(8) = <b>480 N</b>." },
  { t: "Recoil of Gun Problem", q: "A 5 kg rifle fires a 50 g bullet at speed 400 m s<sup>-1</sup>. Calculate recoil velocity of rifle.", s: "Mass bullet m = 0.05 kg, velocity v = 400 m/s, mass gun M = 5 kg.<br>v<sub>recoil</sub> = -(m v)/M = -(0.05 × 400) / 5 = -20 / 5 = <b>-4 m s<sup>-1</sup></b> (backward)." },
  { t: "Prove Angle of Repose Equals Angle of Friction", q: "Prove that Angle of Repose θ equals Angle of Friction λ.", s: "On inclined plane at angle of repose θ, component mg sin θ balances limiting friction f<sub>s(max)</sub> and mg cos θ balances normal reaction N.<br>f<sub>s(max)</sub> = mg sin θ &nbsp;and&nbsp; N = mg cos θ.<br>μ<sub>s</sub> = f<sub>s(max)</sub> / N = (mg sin θ) / (mg cos θ) = tan θ.<br>Since tan λ = μ<sub>s</sub>, <b>tan θ = tan λ ⇒ θ = λ</b>." },
  { t: "Block on Rough Plane Acceleration", q: "A block of mass 4 kg slides down an inclined plane of angle 30° with μ<sub>k</sub> = 0.2. Calculate acceleration (g = 10 m s<sup>-2</sup>).", s: "Downward force along plane = mg sin 30° - f<sub>k</sub> = mg sin 30° - μ<sub>k</sub> mg cos 30°.<br>Acceleration a = g (sin 30° - μ<sub>k</sub> cos 30°) = 10 (0.5 - 0.2 × 0.866) = 10 (0.5 - 0.1732) = 10 × 0.3268 = <b>3.27 m s<sup>-2</sup></b>." },
  { t: "Tension in Connected Motion Problem", q: "Two masses m<sub>1</sub> = 3 kg and m<sub>2</sub> = 2 kg connected by string over frictionless pulley. Find acceleration and tension.", s: "Acceleration a = " + frac('(m<sub>1</sub> - m<sub>2</sub>) g', 'm<sub>1</sub> + m<sub>2</sub>') + " = " + frac('(3 - 2) 10', '3 + 2') + " = 10 / 5 = <b>2 m s<sup>-2</sup></b>.<br>Tension T = " + frac('2 m<sub>1</sub> m<sub>2</sub> g', 'm<sub>1</sub> + m<sub>2</sub>') + " = " + frac('2(3)(2)(10)', '5') + " = 120 / 5 = <b>24 N</b>." },
  { t: "Bending of Cyclist Derivation", q: "Derive expression for angle of leaning θ of a cyclist taking a turn of radius r at speed v.", s: "Inward torque about center of mass must balance outward torque.<br>Normal reaction N balances weight: N = mg.<br>Frictional force f provides centripetal force: f = m v<sup>2</sup> / r.<br>Leaning angle with vertical: tan θ = f / N = (m v<sup>2</sup> / r) / (mg) = <b>v<sup>2</sup> / (r g)</b>." },
  { t: "Level Circular Road Skidding Limit Problem", q: "A car takes a turn of radius 40 m on a level road with μ<sub>s</sub> = 0.4. Find max speed to avoid skidding (g = 9.8 m s<sup>-2</sup>).", s: "v<sub>max</sub> = √(μ<sub>s</sub> g r) = √(0.4 × 9.8 × 40) = √156.8 = <b>12.52 m s<sup>-1</sup> (45.1 km/h)</b>." },
  { t: "Banked Road Optimum Speed Calculation", q: "A highway curve of radius 100 m is banked at 15°. Find optimum speed (tan 15° = 0.268, g = 9.8 m s<sup>-2</sup>).", s: "v<sub>0</sub> = √(r g tan θ) = √(100 × 9.8 × 0.268) = √262.64 = <b>16.2 m s<sup>-1</sup> (58.3 km/h)</b>." },
  { t: "Rocket Thrust Formula Problem", q: "Gas is ejected from a rocket at rate 50 kg s<sup>-1</sup> with exhaust speed 2000 m s<sup>-1</sup>. Calculate thrust on rocket.", s: "Thrust F = u<sub>ex</sub> (dm/dt) = 2000 × 50 = <b>100,000 N (100 kN)</b>." },
  { t: "Lami's Theorem Numerical Problem", q: "A 10 kg mass suspended by two strings making angles 30° and 60° with horizontal. Find tensions T<sub>1</sub> and T<sub>2</sub> (g = 10 m s<sup>-2</sup>).", s: "T<sub>1</sub> cos 30° = T<sub>2</sub> cos 60° &nbsp;and&nbsp; T<sub>1</sub> sin 30° + T<sub>2</sub> sin 60° = 100.<br>T<sub>1</sub> (√3/2) = T<sub>2</sub> (1/2) ⇒ T<sub>2</sub> = √3 T<sub>1</sub>.<br>Substitute: T<sub>1</sub> (1/2) + (√3 T<sub>1</sub>) (√3/2) = 100 ⇒ T<sub>1</sub> (1/2 + 3/2) = 100 ⇒ 2 T<sub>1</sub> = 100.<br><b>T<sub>1</sub> = 50 N</b> &nbsp;and&nbsp; <b>T<sub>2</sub> = 50√3 ≈ 86.6 N</b>." },
  { t: "Static vs Kinetic Friction Differences", q: "Differentiate between static friction and kinetic friction with 4 comparison points.", s: "1. <b>Occurrence:</b> Static friction acts before sliding; Kinetic acts during sliding.<br>2. <b>Self-adjustment:</b> Static is self-adjusting (0 to f<sub>s(max)</sub>); Kinetic is constant.<br>3. <b>Coefficient:</b> μ<sub>s</sub> is larger than μ<sub>k</sub>.<br>4. <b>Formula:</b> f<sub>s(max)</sub> = μ<sub>s</sub> N; f<sub>k</sub> = μ<sub>k</sub> N." },
  { t: "Why Rolling Friction is Smaller than Sliding Friction", q: "Explain micro-mechanism why rolling friction is much smaller than sliding friction.", s: "Sliding involves continuous breaking of microscopic cold welds across entire contact area. Rolling involves surface indentation and momentary line contact without relative sliding, reducing resistance enormously." },
  { t: "Horse Cart Paradox Explained", q: "Explain the paradox: 'Horse pulls cart with force F, cart pulls horse with -F; how does system move?'", s: "Action and reaction forces act on different bodies. Horse pushes ground backward with force F<sub>H</sub>; ground pushes horse forward with reaction R<sub>H</sub>. If R<sub>H</sub> > backward pull of cart, horse moves forward!" },
  { t: "Impulse Calculation from F-t Data", q: "A force F = (20 t + 5) N acts on a 2 kg mass for 2 s. Calculate impulse and final velocity from rest.", s: "Impulse J = ∫<sub>0</sub><sup>2</sup> (20 t + 5) dt = [10 t<sup>2</sup> + 5 t]<sub>0</sub><sup>2</sup> = 10(4) + 5(2) = 40 + 10 = <b>50 N s</b>.<br>Velocity: J = m Δv ⇒ 50 = 2(v - 0) ⇒ <b>v = 25 m s<sup>-1</sup></b>." },
  { t: "Block Pulled at Angle on Rough Floor", q: "A 10 kg block is pulled by 50 N force at 37° to horizontal on floor with μ<sub>k</sub> = 0.2. Find acceleration (cos 37°=0.8, sin 37°=0.6).", s: "F<sub>x</sub> = 50 cos 37° = 40 N, F<sub>y</sub> = 50 sin 37° = 30 N.<br>Normal reaction N = mg - F<sub>y</sub> = 100 - 30 = 70 N.<br>Friction f<sub>k</sub> = μ<sub>k</sub> N = 0.2 × 70 = 14 N.<br>Net force F<sub>net</sub> = 40 - 14 = 26 N.<br>Acceleration a = F<sub>net</sub> / m = 26 / 10 = <b>2.6 m s<sup>-2</sup></b>." },
  { t: "Momentum Conservation Bomb Explosion Problem", q: "A shell of mass 5 kg moving at 20 m s<sup>-1</sup> explodes into two fragments of 2 kg and 3 kg. If 2 kg fragment moves at 50 m s<sup>-1</sup> in same direction, find speed of 3 kg fragment.", s: "Total initial momentum = 5 × 20 = 100 kg m s<sup>-1</sup>.<br>Final momentum = 2(50) + 3 v<sub>2</sub> = 100 + 3 v<sub>2</sub>.<br>By conservation: 100 = 100 + 3 v<sub>2</sub> ⇒ 3 v<sub>2</sub> = 0 ⇒ <b>v<sub>2</sub> = 0 m s<sup>-1</sup></b> (3 kg fragment comes to rest)." },
  { t: "Limiting Friction Problem on Flat Floor", q: "A 20 kg crate rests on floor with μ<sub>s</sub> = 0.5. Calculate horizontal force needed to just start moving it (g = 9.8 m s<sup>-2</sup>).", s: "Limiting friction f<sub>s(max)</sub> = μ<sub>s</sub> N = μ<sub>s</sub> m g = 0.5 × 20 × 9.8 = <b>98 Newtons</b>." },
  { t: "Why Banking of Roads is Necessary", q: "Why is banking of roads preferred over relying on tire friction for circular turns?", s: "Tire friction μ<sub>s</sub> fluctuates with rain, ice, or tire wear, leading to skidding risks. Banking utilizes normal reaction component N sin θ to guarantee centripetal force independent of friction!" },
  { t: "Explain Inertial vs Non-Inertial Frame Pseudo Force", q: "What is a pseudo force? Give an example.", s: "A pseudo force F<sub>pseudo</sub> = -m a<sub>frame</sub> is an apparent fictitious force observed in an accelerating non-inertial frame to make Newton's second law valid (e.g. centrifugal force in rotating frame)." },
  { t: "Momentum Vector Component Problem", q: "Momentum of a particle p = 3 cos(2t) î + 3 sin(2t) ĵ kg m s<sup>-1</sup>. Find force vector F and magnitude |F|.", s: "F = dp/dt = d/dt [3 cos(2t) î + 3 sin(2t) ĵ] = <b>-6 sin(2t) î + 6 cos(2t) ĵ</b>.<br>Magnitude |F| = √[(-6 sin 2t)<sup>2</sup> + (6 cos 2t)<sup>2</sup>] = √(36 sin<sup>2</sup> 2t + 36 cos<sup>2</sup> 2t) = <b>6 Newtons</b>." },
  { t: "Incline Angle of Repose Sliding Condition", q: "If an incline has angle 45° and μ<sub>s</sub> = 0.5, show that a block will slide down.", s: "Angle of repose θ<sub>r</sub> = tan<sup>-1</sup>(μ<sub>s</sub>) = tan<sup>-1</sup>(0.5) ≈ 26.6°.<br>Since incline angle 45° > 26.6°, mg sin 45° > f<sub>s(max)</sub>, so block will definitely slide!" },
  { t: "Variable Force Impulse Problem", q: "A force F(t) = 6 t<sup>2</sup> N acts on 1 kg mass for t = 0 to t = 3 s. Calculate change in velocity.", s: "Impulse J = ∫<sub>0</sub><sup>3</sup> 6 t<sup>2</sup> dt = [2 t<sup>3</sup>]<sub>0</sub><sup>3</sup> = 2(27) = 54 N s.<br>Δv = J / m = 54 / 1 = <b>54 m s<sup>-1</sup></b>." },
  { t: "Three Blocks Connected by Strings Problem", q: "Three blocks of 1 kg, 2 kg, 3 kg tied in series pulled by 12 N force on smooth table. Find acceleration and string tensions.", s: "Total mass = 1 + 2 + 3 = 6 kg. Acceleration a = 12 / 6 = <b>2 m s<sup>-2</sup></b>.<br>Tension T<sub>1</sub> (behind 1 kg) = 1 × 2 = <b>2 N</b>.<br>Tension T<sub>2</sub> (behind 1+2 kg) = (1 + 2) × 2 = <b>6 N</b>." },
  { t: "Overcoming Friction Work Concept", q: "Calculate work done in dragging a 10 kg block by 5 m on rough floor with μ<sub>k</sub> = 0.3 (g = 10 m s<sup>-2</sup>).", s: "Frictional force f<sub>k</sub> = μ<sub>k</sub> m g = 0.3 × 10 × 10 = 30 N.<br>Work W = f<sub>k</sub> × d = 30 × 5 = <b>150 Joules</b>." },
  { t: "Centripetal Acceleration on Curved Path", q: "A car of 1200 kg negotiates a curve of 100 m at 20 m s<sup>-1</sup>. Find centripetal acceleration and force.", s: "a<sub>c</sub> = v<sup>2</sup> / r = 400 / 100 = <b>4 m s<sup>-2</sup></b>.<br>Force F<sub>c</sub> = m a<sub>c</sub> = 1200 × 4 = <b>4800 Newtons</b>." },
  { t: "Weightlessness in Free Fall", q: "Why does a body experience weightlessness during free fall?", s: "During free fall, downward acceleration of body equals g. Normal reaction from supporting floor N = m(g - g) = 0, so apparent weight becomes zero!" }
];

sas.forEach((item, idx) => {
  let qNo = idx + 56;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// LAs Q86-Q100: Deep Multi-Part Theoretical Derivations & Analytical Master Problems
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part D: Long Answer Questions (Q86 - Q100)</h3>`;

const las = [
  { t: "Derivation of Newton's Laws & F = ma Master Theory", q: "State Newton's three laws of motion. Derive F = ma from the Second Law and prove that Newton's Second Law is the real law containing the first and third laws.", s: "<b>Newton's Three Laws:</b><br>1. <b>First Law:</b> A body remains at rest or in uniform straight-line motion unless acted upon by net external force.<br>2. <b>Second Law:</b> Rate of change of linear momentum is directly proportional to applied force (F = dp/dt).<br>3. <b>Third Law:</b> To every action force, there is an equal and opposite reaction force (F<sub>12</sub> = -F<sub>21</sub>).<br><br><b>Derivation of F = ma:</b><br>F = k dp/dt = k d(mv)/dt. For constant mass m and setting k = 1 in SI: <b>F = m a</b>.<br><br><b>Proof Second Law Contains First Law:</b><br>If F = 0 in F = ma, then a = 0 ⇒ v = constant (rest or uniform motion maintained).<br><br><b>Proof Second Law Contains Third Law:</b><br>In isolated system of two bodies A and B (F<sub>ext</sub> = 0):<br>dp<sub>A</sub>/dt + dp<sub>B</sub>/dt = 0 ⇒ F<sub>BA</sub> + F<sub>AB</sub> = 0 ⇒ <b>F<sub>AB</sub> = -F<sub>BA</sub></b>." },
  { t: "Conservation of Linear Momentum Derivation & Applications", q: "State and prove the Law of Conservation of Linear Momentum using Newton's Second and Third Laws. Explain recoil of gun and rocket propulsion.", s: "<b>Statement:</b> In an isolated system (F<sub>ext</sub> = 0), total linear momentum is conserved.<br><br><b>Proof using Newton's Laws:</b><br>Consider collision between bodies A and B.<br>Force on A by B: F<sub>AB</sub> = dp<sub>A</sub>/dt.<br>Force on B by A: F<sub>BA</sub> = dp<sub>B</sub>/dt.<br>By Third Law: F<sub>AB</sub> = -F<sub>BA</sub> ⇒ dp<sub>A</sub>/dt + dp<sub>B</sub>/dt = 0 ⇒ d(p<sub>A</sub> + p<sub>B</sub>)/dt = 0.<br>Integrating: <b>p<sub>A</sub> + p<sub>B</sub> = Constant</b>.<br><br><b>Recoil of Gun:</b> Initial momentum = 0. Bullet momentum p<sub>b</sub> = mv, gun recoil momentum p<sub>g</sub> = MV<sub>r</sub>.<br>mv + MV<sub>r</sub> = 0 ⇒ <b>V<sub>r</sub> = -(m v)/M</b>.<br><br><b>Rocket Propulsion:</b> Ejection of burnt gases backward at speed u<sub>ex</sub> produces forward reaction force (thrust) F = u<sub>ex</sub> (dm/dt)." },
  { t: "Complete Theory of Friction & Angle of Repose Derivation", q: "Define Static, Limiting, Kinetic, and Rolling friction. State the laws of limiting friction and derive Angle of Repose = Angle of Friction.", s: "<b>Types of Friction:</b><br>1. Static friction f<sub>s</sub> (self-adjusting force preventing motion).<br>2. Limiting friction f<sub>s(max)</sub> (maximum static friction before sliding).<br>3. Kinetic friction f<sub>k</sub> (friction during sliding motion).<br>4. Rolling friction f<sub>r</sub> (resistance during rolling).<br><br><b>Laws of Limiting Friction:</b><br>- f<sub>s(max)</sub> ∝ Normal reaction N.<br>- Depends on nature and roughness of contact surfaces.<br>- Independent of area of contact for given normal reaction.<br><br><b>Derivation (Angle of Repose = Angle of Friction):</b><br>On incline at angle θ<sub>r</sub>: f<sub>s(max)</sub> = mg sin θ<sub>r</sub> &nbsp;and&nbsp; N = mg cos θ<sub>r</sub>.<br>μ<sub>s</sub> = f<sub>s(max)</sub> / N = tan θ<sub>r</sub>.<br>Since angle of friction tan λ = μ<sub>s</sub>, <b>tan θ<sub>r</sub> = tan λ ⇒ θ<sub>r</sub> = λ</b>." },
  { t: "Complete Dynamics of Banked Circular Road", q: "Derive the formula for maximum safe speed v<sub>max</sub> of a vehicle on a banked circular road with coefficient of static friction μ<sub>s</sub>.", s: "Consider a car of mass m on a road banked at angle θ with radius r.<br>Forces acting: Weight mg downward, Normal reaction N perpendicular to bank, Friction f<sub>s</sub> down the incline.<br><br><b>Vertical Equilibrium:</b><br>N cos θ - f<sub>s</sub> sin θ = mg &nbsp; ⇒ &nbsp; mg = N cos θ - μ<sub>s</sub> N sin θ = N (cos θ - μ<sub>s</sub> sin θ).<br><br><b>Centripetal Force (Horizontal Balance):</b><br>N sin θ + f<sub>s</sub> cos θ = " + frac('m v<sup>2</sup>', 'r') + " &nbsp; ⇒ &nbsp; " + frac('m v<sup>2</sup>', 'r') + " = N (sin θ + μ<sub>s</sub> cos θ).<br><br><b>Divide Centripetal Equation by Vertical Equation:</b><br>" + frac('v<sup>2</sup>', 'r g') + " = " + frac('N (sin θ + μ<sub>s</sub> cos θ)', 'N (cos θ - μ<sub>s</sub> sin θ)') + " = " + frac('tan θ + μ<sub>s</sub>', '1 - μ<sub>s</sub> tan θ') + ".<br><br><b>Maximum Safe Speed v<sub>max</sub>:</b><br><b>v<sub>max</sub> = √[ r g " + frac('μ<sub>s</sub> + tan θ', '1 - μ<sub>s</sub> tan θ') + " ]</b>." },
  { t: "Atwood Machine Connected Motion Derivation", q: "Derive expressions for acceleration a and string tension T for two masses m<sub>1</sub> and m<sub>2</sub> (m<sub>1</sub> > m<sub>2</sub>) connected over a light frictionless pulley.", s: "Let m<sub>1</sub> move downward with acceleration a and m<sub>2</sub> move upward with acceleration a.<br><br><b>Equation for Mass 1 (Downward):</b><br>m<sub>1</sub> g - T = m<sub>1</sub> a &nbsp; ---(Equation 1)<br><br><b>Equation for Mass 2 (Upward):</b><br>T - m<sub>2</sub> g = m<sub>2</sub> a &nbsp; ---(Equation 2)<br><br><b>Adding Equations 1 and 2:</b><br>(m<sub>1</sub> - m<sub>2</sub>) g = (m<sub>1</sub> + m<sub>2</sub>) a &nbsp; ⇒ &nbsp; <b>a = " + frac('(m<sub>1</sub> - m<sub>2</sub>) g', 'm<sub>1</sub> + m<sub>2</sub>') + "</b>.<br><br><b>Substitute a into Equation 2 for Tension T:</b><br>T = m<sub>2</sub> g + m<sub>2</sub> [ " + frac('(m<sub>1</sub> - m<sub>2</sub>) g', 'm<sub>1</sub> + m<sub>2</sub>') + " ] = <b>" + frac('2 m<sub>1</sub> m<sub>2</sub> g', 'm<sub>1</sub> + m<sub>2</sub>') + "</b>." },
  { t: "Lami's Theorem Statement & Vector Proof", q: "State Lami's theorem and prove it analytically using vector cross product for three concurrent coplanar forces F<sub>1</sub>, F<sub>2</sub>, F<sub>3</sub> in equilibrium.", s: "<b>Lami's Theorem:</b> For 3 coplanar concurrent forces in equilibrium, F<sub>1</sub>/sin α = F<sub>2</sub>/sin β = F<sub>3</sub>/sin γ.<br><br><b>Proof:</b><br>F<sub>1</sub> + F<sub>2</sub> + F<sub>3</sub> = 0 ⇒ F<sub>1</sub> + F<sub>2</sub> = -F<sub>3</sub>.<br>Take cross product with F<sub>1</sub>:<br>F<sub>1</sub> × (F<sub>1</sub> + F<sub>2</sub> + F<sub>3</sub>) = 0 ⇒ 0 + F<sub>1</sub> × F<sub>2</sub> + F<sub>1</sub> × F<sub>3</sub> = 0 ⇒ <b>F<sub>1</sub> × F<sub>2</sub> = F<sub>3</sub> × F<sub>1</sub></b>.<br>Similarly, cross product with F<sub>2</sub> yields: <b>F<sub>1</sub> × F<sub>2</sub> = F<sub>2</sub> × F<sub>3</sub></b>.<br>Thus |F<sub>1</sub> × F<sub>2</sub>| = |F<sub>2</sub> × F<sub>3</sub>| = |F<sub>3</sub> × F<sub>1</sub>|.<br>F<sub>1</sub> F<sub>2</sub> sin(180° - γ) = F<sub>2</sub> F<sub>3</sub> sin(180° - α) = F<sub>3</sub> F<sub>1</sub> sin(180° - β).<br>F<sub>1</sub> F<sub>2</sub> sin γ = F<sub>2</sub> F<sub>3</sub> sin α = F<sub>3</sub> F<sub>1</sub> sin β.<br>Dividing throughout by F<sub>1</sub> F<sub>2</sub> F<sub>3</sub>:<br><b>" + frac('F<sub>1</sub>', 'sin α') + " = " + frac('F<sub>2</sub>', 'sin β') + " = " + frac('F<sub>3</sub>', 'sin γ') + "</b>." },
  { t: "Block Pulled vs Pushed on Rough Floor", q: "Prove mathematically why it is easier to pull a lawn roller than to push it on a rough horizontal floor.", s: "Let P be force applied at angle θ with horizontal.<br><br><b>Case 1: Pushing:</b><br>Vertical force component acts DOWNWARD.<br>Normal reaction N<sub>push</sub> = mg + P sin θ.<br>Friction force f<sub>push</sub> = μ<sub>k</sub> N<sub>push</sub> = <b>μ<sub>k</sub> (mg + P sin θ)</b>.<br><br><b>Case 2: Pulling:</b><br>Vertical force component acts UPWARD.<br>Normal reaction N<sub>pull</sub> = mg - P sin θ.<br>Friction force f<sub>pull</sub> = μ<sub>k</sub> N<sub>pull</sub> = <b>μ<sub>k</sub> (mg - P sin θ)</b>.<br><br><b>Conclusion:</b> Since N<sub>pull</sub> < N<sub>push</sub>, f<sub>pull</sub> < f<sub>push</sub>. Therefore, pulling requires significantly less force than pushing!" },
  { t: "Rocket Propulsion Calculus Derivation", q: "Derive the rocket velocity formula v(t) = v<sub>0</sub> + u<sub>ex</sub> ln(m<sub>0</sub>/m) and upward thrust expression.", s: "Consider rocket of mass m moving at velocity v. In time dt, mass dm of gas is ejected at velocity u<sub>ex</sub> backward.<br>Momentum conservation:<br>m v = (m - dm)(v + dv) + dm (v - u<sub>ex</sub>).<br>m v = m v + m dv - v dm - dm dv + v dm - u<sub>ex</sub> dm.<br>Ignoring small dm dv term: m dv = u<sub>ex</sub> dm.<br>dv = -u<sub>ex</sub> (dm / m).<br>Integrating from t=0 (m<sub>0</sub>, v<sub>0</sub>) to t (m, v):<br>∫<sub>v0</sub><sup>v</sup> dv = -u<sub>ex</sub> ∫<sub>m0</sub><sup>m</sup> (dm / m).<br>v - v<sub>0</sub> = -u<sub>ex</sub> [ln m]<sub>m0</sub><sup>m</sup> = u<sub>ex</sub> ln(m<sub>0</sub> / m).<br><b>v(t) = v<sub>0</sub> + u<sub>ex</sub> ln ( " + frac('m<sub>0</sub>', 'm') + " )</b>." },
  { t: "Master Block and Incline Numerical", q: "A 10 kg block placed on an incline of 37° (μ<sub>s</sub> = 0.4, μ<sub>k</sub> = 0.3). (i) Will the block slide? (ii) Find friction force. (iii) Find acceleration if pulled UP the incline by 100 N force.", s: "Given sin 37° = 0.6, cos 37° = 0.8, g = 10 m s<sup>-2</sup>.<br>Gravity component down plane = mg sin 37° = 100 × 0.6 = 60 N.<br>Normal N = mg cos 37° = 100 × 0.8 = 80 N.<br>Max static friction f<sub>s(max)</sub> = μ<sub>s</sub> N = 0.4 × 80 = 32 N.<br><br><b>(i) Will it slide under gravity alone?</b> Yes, 60 N > 32 N.<br><b>(ii) Friction force when sliding down:</b> Kinetic friction f<sub>k</sub> = μ<sub>k</sub> N = 0.3 × 80 = <b>24 N</b>.<br><b>(iii) Pulled UP by 100 N force:</b><br>Upward force = 100 N. Downward forces = mg sin 37° + f<sub>k</sub> = 60 + 24 = 84 N.<br>Net force F<sub>net</sub> = 100 - 84 = 16 N.<br>Acceleration a = F<sub>net</sub> / m = 16 / 10 = <b>1.6 m s<sup>-2</sup> UP the incline</b>." },
  { t: "Conical Pendulum Motion Derivation", q: "Derive time period T of a conical pendulum of length L making angle θ with vertical.", s: "Consider bob of mass m rotating in horizontal circle of radius r = L sin θ.<br>Vertical balance: T<sub>str</sub> cos θ = mg.<br>Horizontal balance (Centripetal force): T<sub>str</sub> sin θ = m v<sup>2</sup> / r = m r ω<sup>2</sup>.<br>Dividing equations: tan θ = (r ω<sup>2</sup>) / g = (L sin θ ω<sup>2</sup>) / g ⇒ ω<sup>2</sup> = g / (L cos θ).<br>Angular speed ω = √[ g / (L cos θ) ].<br>Time Period T = 2π / ω = <b>2 π √[ " + frac('L cos θ', 'g') + " ]</b>." },
  { t: "Chain Sliding Off Rough Table Numerical", q: "A chain of length L and mass M lies on a rough table with coefficient of static friction μ<sub>s</sub>. Find max fraction of length that can hang over the edge without sliding.", s: "Let fraction hanging over edge be x.<br>Hanging length = x L, Hanging mass = x M.<br>Table length = (1 - x) L, Table mass = (1 - x) M.<br>Downward pull of hanging part = (x M) g.<br>Limiting friction on table part = μ<sub>s</sub> N = μ<sub>s</sub> (1 - x) M g.<br>At sliding boundary: x M g = μ<sub>s</sub> (1 - x) M g ⇒ x = μ<sub>s</sub> - μ<sub>s</sub> x ⇒ x (1 + μ<sub>s</sub>) = μ<sub>s</sub>.<br><b>Hanging Fraction x = " + frac('μ<sub>s</sub>', '1 + μ<sub>s</sub>') + "</b>." },
  { t: "Motion of Two Blocks Stacked on Each Other", q: "A 2 kg block A sits on a 4 kg block B on a smooth floor. μ<sub>s</sub> between A and B is 0.3. Find max horizontal force F on B so that both blocks move together.", s: "For both blocks to move together as a single 6 kg unit with max acceleration a<sub>max</sub>:<br>Max friction force on top block A: f<sub>s(max)</sub> = μ<sub>s</sub> m<sub>A</sub> g = 0.3 × 2 × 10 = 6 N.<br>Max acceleration of block A: a<sub>max</sub> = f<sub>s(max)</sub> / m<sub>A</sub> = 6 / 2 = 3 m s<sup>-2</sup>.<br>Force F applied on bottom block B to accelerate combined system at 3 m s<sup>-2</sup>:<br>F<sub>max</sub> = (m<sub>A</sub> + m<sub>B</sub>) a<sub>max</sub> = (2 + 4) × 3 = 6 × 3 = <b>18 Newtons</b>." },
  { t: "Dynamics of Motion in a Vertical Circle", q: "Derive minimum speed at lowest point and highest point for a body tied to a string of length L to complete a vertical circle.", s: "At highest point H: T<sub>H</sub> + mg = m v<sub>H</sub><sup>2</sup> / L.<br>For critical loop-the-loop, T<sub>H</sub> ≥ 0 ⇒ v<sub>H, min</sub> = <b>√(g L)</b>.<br><br>By Energy Conservation between lowest point L and highest point H:<br>1/2 m v<sub>L</sub><sup>2</sup> = 1/2 m v<sub>H</sub><sup>2</sup> + m g (2 L).<br>v<sub>L</sub><sup>2</sup> = v<sub>H</sub><sup>2</sup> + 4 g L = g L + 4 g L = 5 g L.<br>Minimum speed at lowest point: <b>v<sub>L, min</sub> = √(5 g L)</b>." },
  { t: "Impulse and Collision Impact Numerical", q: "A 0.15 kg baseball traveling at 40 m s<sup>-1</sup> is struck by a bat and flies back at 50 m s<sup>-1</sup> in opposite direction. If contact duration is 0.005 s, calculate average force exerted.", s: "Initial velocity u = +40 m/s, final velocity v = -50 m/s.<br>Change in momentum Δp = m(v - u) = 0.15 (-50 - 40) = 0.15 (-90) = -13.5 kg m s<sup>-1</sup>.<br>Impulse J = -13.5 N s.<br>Average Force F<sub>avg</sub> = J / Δt = -13.5 / 0.005 = <b>-2700 Newtons</b>." },
  { t: "Master Variable Mass Rocket Dynamics Numerical", q: "A rocket of initial mass 1000 kg ejects gas at 10 kg s<sup>-1</sup> with exhaust speed 1500 m s<sup>-1</sup>. Calculate (i) initial thrust, (ii) velocity after 50 s if starting from rest.", s: "(i) <b>Initial Thrust F:</b> F = u<sub>ex</sub> (dm/dt) = 1500 × 10 = <b>15,000 N (15 kN)</b>.<br>(ii) <b>Velocity at t = 50 s:</b><br>Mass burnt in 50 s = 10 × 50 = 500 kg.<br>Remaining mass m(50) = 1000 - 500 = 500 kg.<br>v(50) = u<sub>ex</sub> ln(m<sub>0</sub> / m) = 1500 ln(1000 / 500) = 1500 ln(2) = 1500 × 0.693 = <b>1039.5 m s<sup>-1</sup></b>." }
];

las.forEach((item, idx) => {
  let qNo = idx + 86;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

solutionsHtml += `</div>`;

console.log("Unit III (Laws of Motion) Solutions HTML generated successfully.");

// Construct final TS content string
const tsContent = `// Class 11 Physics Unit III: Laws of Motion
// High-Level Reference Book Content & NCERT Solutions

export const c11Phy3HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy3HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-3.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote c11-phy-3.ts to " + outputPath);
