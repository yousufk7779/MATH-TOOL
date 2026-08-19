const fs = require('fs');
const path = require('path');

const themeColor = "#8E2DE2"; // Exact primary theme color for Class 11 Physics Unit II (Kinematics)

// Clean compact inline stacked fraction that DOES NOT break lines vertically
function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

// Clean centered equation box container
function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 10px 14px; text-align: center; margin: 14px 0; font-size: 15.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

// Definition card
function defCard(term, definition) {
  return `
  <div style="background: rgba(142, 45, 226, 0.06); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 12px 16px; margin: 15px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 4px;">📌 Definition (${term}):</b>
    <p style="margin: 0; color: #FFFFFF; line-height: 1.6; font-size: 15.5px;">${definition}</p>
  </div>`;
}

// Diagram placeholder
function diagramPlaceholder(title, description) {
  return `
  <div style="border: 2px dashed ${themeColor}; border-radius: 12px; padding: 18px; text-align: center; margin: 20px 0; background: rgba(142, 45, 226, 0.04);">
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
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms & Concepts for Unit II: Kinematics (Motion in a Straight Line & Motion in a Plane)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>1. Kinematics:</b>
        <span style="color: #FFFFFF;">The branch of mechanics that describes the motion of objects without considering the forces causing the motion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>2. Frame of Reference:</b>
        <span style="color: #FFFFFF;">A coordinate system combined with a clock relative to which the position, velocity, and acceleration of an object are measured.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>3. Distance vs Displacement:</b>
        <span style="color: #FFFFFF;">Distance is total path length (scalar), whereas Displacement is the shortest straight-line distance from initial to final position (vector).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>4. Instantaneous Velocity:</b>
        <span style="color: #FFFFFF;">The velocity of a body at a specific instant of time, defined as the derivative of position vector v = dx / dt.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>5. Uniform Acceleration:</b>
        <span style="color: #FFFFFF;">Motion in which the velocity of an object changes by equal amounts in equal intervals of time.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>6. Scalar vs Vector:</b>
        <span style="color: #FFFFFF;">Scalars possess only magnitude (e.g. Mass, Speed), while Vectors possess both magnitude and direction (e.g. Force, Velocity).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>7. Unit Vector:</b>
        <span style="color: #FFFFFF;">A vector of unit magnitude (1) used purely to specify direction in space, defined as â = A / |A|.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>8. Projectile Motion:</b>
        <span style="color: #FFFFFF;">Two-dimensional motion of an object projected into air under the sole influence of gravity near Earth's surface.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>9. Scalar (Dot) Product:</b>
        <span style="color: #FFFFFF;">Product of magnitudes of two vectors and cosine of angle between them (A · B = |A||B| cos θ).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>10. Centripetal Acceleration:</b>
        <span style="color: #FFFFFF;">Inward radial acceleration directed towards the center in uniform circular motion, a<sub>c</sub> = v<sup>2</sup> / r = r ω<sup>2</sup>.</span>
      </div>
    </div>
  </div>

  <!-- PART A: MOTION IN A STRAIGHT LINE -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">PART A: MOTION IN A STRAIGHT LINE</h1>

  <!-- SECTION 1: FRAME OF REFERENCE & RECTILINEAR MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">1. Frame of Reference & Motion in a Straight Line</h2>
  
  ${defCard("Frame of Reference", "A coordinate system (usually Cartesian x, y, z axes) along with a time-measuring clock attached to an observer, relative to which the motion of a physical body is observed and described.")}

  <p>Motion is a relative concept; an object at rest in one frame of reference may be moving relative to another. For instance, a passenger sitting inside a moving train is at rest relative to fellow passengers, but in motion relative to an observer standing on the railway platform.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Types of Frames of Reference</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Inertial Frame of Reference", "A frame of reference that is either at rest or moving with a uniform constant velocity (zero acceleration). Newton's laws of motion hold strictly true in an inertial frame.")}
    ${colonTopic("Non-Inertial Frame of Reference", "An accelerating or rotating frame of reference relative to an inertial frame. Newton's laws do not directly apply unless fictitious (pseudo) forces are introduced.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Position, Distance, and Displacement</h3>
  <p>In one-dimensional rectilinear motion along the x-axis, position is specified by coordinate x(t).</p>
  <div style="margin: 12px 0;">
    ${colonTopic("Distance (Scalar)", "The total length of the actual path traversed by an object during a given time interval. Distance is always positive or zero (Path Length ≥ 0).")}
    ${colonTopic("Displacement (Vector)", "The shortest directed straight-line distance from the initial position x<sub>1</sub> to the final position x<sub>2</sub>:<br>" + singleLineCode("Δx = x<sub>2</sub> - x<sub>1</sub>"))}
  </div>

  ${eqBox("<b>|Displacement| ≤ Distance</b> &nbsp; (Equality holds only for unidirectional straight-line motion)")}

  ${diagramPlaceholder("Distance vs Displacement in 1D Rectilinear Motion", "Line diagram comparing path length vs displacement vector Δx = x2 - x1 for an object turning back along a straight track.")}

  <!-- SECTION 2: CALCULUS IN KINEMATICS & INSTANTANEOUS VELOCITY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Elementary Concepts of Differentiation & Integration in Kinematics</h2>

  ${defCard("Instantaneous Velocity", "The limiting value of average velocity as the time interval Δt approaches zero, mathematically represented as the first derivative of position with respect to time.")}

  <p>Calculus provides the mathematical framework for describing non-uniform motion where velocity and acceleration change continuously over time.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Differentiation Formulations in Kinematics</h3>
  <p>When position x(t) is given as a continuous function of time t:</p>
  <div style="margin: 12px 0;">
    ${colonTopic("Instantaneous Velocity v(t)", "The first derivative of position x with respect to time t:<br>" + singleLineCode("v(t) = limit (Δt → 0) [ Δx / Δt ] = dx / dt"))}
    ${colonTopic("Instantaneous Acceleration a(t)", "The first derivative of velocity v (or second derivative of position x) with respect to time t:<br>" + singleLineCode("a(t) = dv / dt = d<sup>2</sup>x / dt<sup>2</sup> = v (dv / dx)"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Integration Formulations in Kinematics</h3>
  <p>When acceleration a(t) or velocity v(t) is known, position and velocity are obtained by definite integration:</p>
  <div style="margin: 12px 0;">
    ${colonTopic("Velocity from Acceleration", singleLineCode("v(t) - u = ∫ [a dt] &nbsp; (from t<sub>1</sub> to t<sub>2</sub>)"))}
    ${colonTopic("Displacement from Velocity", singleLineCode("x(t) - x<sub>0</sub> = ∫ [v dt] &nbsp; (from t<sub>1</sub> to t<sub>2</sub>)"))}
  </div>

  ${diagramPlaceholder("Differential Tangent Slope & Integral Area in Kinematics", "Graphs illustrating dx/dt as slope of tangent to x-t curve and ∫v dt as area under v-t curve.")}

  <!-- SECTION 3: UNIFORM & NON-UNIFORM MOTION & GRAPHS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Uniform vs Non-Uniform Motion & Kinematic Graphs</h2>

  ${defCard("Uniform Motion", "Motion in a straight line in which an object covers equal displacements in equal intervals of time, resulting in a constant velocity and zero acceleration.")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Kinematic Graphs Analysis</h3>
  <div style="overflow-x: auto; margin: 15px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.25); text-align: left; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(142, 45, 226, 0.2); color: ${themeColor}; border-bottom: 2px solid ${themeColor};">
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Graph Type</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Slope Significance</th>
          <th style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Area Under Curve Significance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Position-Time (x-t)</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Slope = dx/dt = Instantaneous Velocity (v)</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">No physical significance</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Velocity-Time (v-t)</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Slope = dv/dt = Acceleration (a)</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Area = ∫v dt = Displacement (Δx)</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1); color: ${themeColor};"><b>Acceleration-Time (a-t)</b></td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Jerk (da/dt)</td>
          <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Area = ∫a dt = Velocity Change (Δv)</td>
        </tr>
      </tbody>
    </table>
  </div>

  ${diagramPlaceholder("Position-Time and Velocity-Time Graphs Set", "Set of 4 graphs showing x-t and v-t curves for at rest, uniform velocity, uniform acceleration, and uniform retardation.")}

  <!-- SECTION 4: EQUATIONS OF UNIFORMLY ACCELERATED MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Kinematic Equations for Uniformly Accelerated Motion (Graphical Derivation)</h2>

  ${defCard("Uniformly Accelerated Motion", "Motion along a straight line in which acceleration a remains constant in magnitude and direction throughout the motion.")}

  <p>For an object moving with constant acceleration a, initial velocity u at t = 0, final velocity v at time t, and displacement s:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("First Equation of Motion (Velocity-Time Relation)", singleLineCode("v = u + a t"))}
    ${colonTopic("Second Equation of Motion (Position-Time Relation)", singleLineCode("s = u t + " + frac('1', '2') + " a t<sup>2</sup>"))}
    ${colonTopic("Third Equation of Motion (Position-Velocity Relation)", singleLineCode("v<sup>2</sup> - u<sup>2</sup> = 2 a s"))}
    ${colonTopic("Distance Traveled in n-th Second", singleLineCode("s<sub>n<sup>th</sup></sub> = u + " + frac('a', '2') + " (2 n - 1)"))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Motion Under Gravity (Free Fall)</h3>
  <p>For vertical motion under Earth's gravity with downward acceleration a = -g (taking upward direction as positive):</p>
  <div style="margin: 10px 0;">
    ${colonTopic("Free Fall from Rest (u = 0)", singleLineCode("v = g t &nbsp;|&nbsp; h = " + frac('1', '2') + " g t<sup>2</sup> &nbsp;|&nbsp; v<sup>2</sup> = 2 g h"))}
    ${colonTopic("Upward Vertical Projection", singleLineCode("Maximum Height H<sub>max</sub> = " + frac('u<sup>2</sup>', '2 g') + " &nbsp;|&nbsp; Time of Ascent t<sub>a</sub> = " + frac('u', 'g')))}
  </div>

  ${diagramPlaceholder("Graphical Derivation of 3 Equations of Motion", "Velocity-Time graph showing trapezoid area breakdown into rectangle (u·t) and triangle (1/2 a t²) to derive kinematic equations.")}

  <!-- PART B: MOTION IN A PLANE -->
  <h1 style="color: ${themeColor}; border-bottom: 2.5px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">PART B: MOTION IN A PLANE (VECTORS & 2D MOTION)</h1>

  <!-- SECTION 5: SCALARS, VECTORS & VECTOR ALGEBRA -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 20px;">5. Scalars, Vectors & Vector Algebra</h2>

  ${defCard("Vector Quantity", "A physical quantity that possesses both magnitude and a specific direction in space, and obeys the laws of vector addition (e.g. Displacement, Velocity, Force, Acceleration).")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Types of Vectors</h3>
  <div style="margin: 12px 0;">
    ${colonTopic("Equal Vectors", "Vectors having identical magnitude and exact same direction.")}
    ${colonTopic("Zero / Null Vector (0)", "A vector having zero magnitude and an arbitrary indefinite direction. Example: position vector of origin.")}
    ${colonTopic("Unit Vector (â)", "A dimensionless vector of unit magnitude (1) pointing in a specified direction:<br>" + singleLineCode("â = A / |A| &nbsp; ⇒ &nbsp; A = |A| â"))}
    ${colonTopic("Position & Displacement Vectors", "Position vector r points from origin O to point P(x, y): r = x î + y ĵ. Displacement vector Δr = r<sub>2</sub> - r<sub>1</sub> = Δx î + Δy ĵ.")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Resolution of a Vector in a Plane (Rectangular Components)</h3>
  <p>Any 2D vector A making angle θ with the positive x-axis can be resolved into two mutually perpendicular rectangular components:</p>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    <div style="color: #FFFFFF; font-weight: bold; font-size: 15.5px; margin-bottom: 4px;">• Vector Expression:</div>
    <div style="color: #FFFFFF; font-size: 15.5px; font-weight: bold; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px; display: inline-block; white-space: nowrap;">A = A<sub>x</sub> î + A<sub>y</sub> ĵ</div>
    <b style="color: ${themeColor}; display: block; font-size: 15px; margin: 8px 0 4px 0;">Components & Magnitude:</b>
    <div style="color: #FFFFFF; line-height: 1.8;">
      A<sub>x</sub> = |A| cos θ &nbsp;|&nbsp; A<sub>y</sub> = |A| sin θ<br>
      Magnitude: <b>|A| = √(A<sub>x</sub><sup>2</sup> + A<sub>y</sub><sup>2</sup>)</b> &nbsp;|&nbsp; Direction: <b>tan θ = A<sub>y</sub> / A<sub>x</sub></b>
    </div>
  </div>

  ${diagramPlaceholder("Resolution of Vector A into Rectangular Components Ax and Ay", "Vector diagram showing vector A resolved into Ax = A cos θ along x-axis and Ay = A sin θ along y-axis.")}

  <!-- SECTION 6: VECTOR PRODUCTS: SCALAR (DOT) & VECTOR (CROSS) PRODUCTS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Scalar (Dot) and Vector (Cross) Product of Vectors</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Scalar Product (Dot Product)</h3>
  ${defCard("Scalar Product (A · B)", "The scalar quantity obtained by multiplying the magnitude of vector A, magnitude of vector B, and the cosine of the angle θ between them.")}

  ${eqBox("<b>A · B = |A| |B| cos θ = A<sub>x</sub> B<sub>x</sub> + A<sub>y</sub> B<sub>y</sub> + A<sub>z</sub> B<sub>z</sub></b>")}

  <div style="margin: 12px 0;">
    ${colonTopic("Properties of Dot Product", "1. Commutative: A · B = B · A<br>2. Perpendicular Vectors (θ = 90°): A · B = 0<br>3. Orthogonal Unit Vectors: î · î = ĵ · ĵ = k̂ · k̂ = 1 &nbsp;|&nbsp; î · ĵ = ĵ · k̂ = k̂ · î = 0")}
    ${colonTopic("Physical Application", "Work Done W = F · s = |F| |s| cos θ")}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Vector Product (Cross Product)</h3>
  ${defCard("Vector Product (A × B)", "The vector quantity whose magnitude is equal to the product of magnitudes of A and B and sine of angle θ, pointing perpendicular to the plane of both vectors by Right-Hand Thumb Rule.")}

  ${eqBox("<b>A × B = |A| |B| sin θ n̂</b>")}

  <div style="margin: 12px 0;">
    ${colonTopic("Properties of Cross Product", "1. Anti-commutative: A × B = -(B × A)<br>2. Parallel Vectors (θ = 0° or 180°): A × B = 0<br>3. Orthogonal Unit Vectors: î × î = ĵ × ĵ = k̂ × k̂ = 0 &nbsp;|&nbsp; î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ")}
    ${colonTopic("Physical Application", "Torque τ = r × F &nbsp;|&nbsp; Angular Momentum L = r × p")}
  </div>

  ${diagramPlaceholder("Right-Hand Thumb Rule for Vector Cross Product A x B", "3D vector diagram depicting vector cross product C = A x B perpendicular to plane containing A and B.")}

  <!-- SECTION 7: PROJECTILE MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Projectile Motion in a Plane</h2>

  ${defCard("Projectile Motion", "The two-dimensional parabolic motion of a body projected into the air with an initial velocity u at an angle θ to the horizontal, moving under the sole influence of gravity.")}

  <p>Consider a projectile launched with initial velocity u at projection angle θ to the horizontal:</p>

  <div style="margin: 12px 0;">
    ${colonTopic("Initial Velocity Components", "Horizontal: u<sub>x</sub> = u cos θ (Constant) &nbsp;|&nbsp; Vertical: u<sub>y</sub> = u sin θ (Accelerating with a<sub>y</sub> = -g)")}
    ${colonTopic("Equation of Parabolic Trajectory", singleLineCode("y = x tan θ - " + frac('g x<sup>2</sup>', '2 u<sup>2</sup> cos<sup>2</sup> θ')))}
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">Key Projectile Parameters</h3>

  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px; margin: 12px 0;">
    ${colonTopic("Time of Flight (T)", singleLineCode("T = " + frac('2 u sin θ', 'g')))}
    ${colonTopic("Maximum Height (H)", singleLineCode("H = " + frac('u<sup>2</sup> sin<sup>2</sup> θ', '2 g')))}
    ${colonTopic("Horizontal Range (R)", singleLineCode("R = " + frac('u<sup>2</sup> sin 2θ', 'g')))}
    ${colonTopic("Maximum Range (θ = 45°)", singleLineCode("R<sub>max</sub> = " + frac('u<sup>2</sup>', 'g')))}
  </div>

  ${diagramPlaceholder("Parabolic Trajectory of Projectile Motion", "Complete trajectory graph showing projection angle θ, maximum height H, range R, velocity components, and apex velocity u cos θ.")}

  <!-- SECTION 8: UNIFORM CIRCULAR MOTION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Uniform Circular Motion</h2>

  ${defCard("Uniform Circular Motion", "Motion of a body along a circular path of fixed radius r at a constant speed v, during which direction of velocity continuously changes, creating a centripetal acceleration directed toward the center.")}

  <div style="margin: 12px 0;">
    ${colonTopic("Angular Velocity (ω)", "Rate of change of angular displacement θ:<br>" + singleLineCode("ω = dθ / dt = 2π f = 2π / T"))}
    ${colonTopic("Relation Between Linear and Angular Velocity", singleLineCode("v = r ω &nbsp; (In vector form: v = ω × r)"))}
    ${colonTopic("Centripetal Acceleration (a<sub>c</sub>)", "Inward radial acceleration toward the center:<br>" + singleLineCode("a<sub>c</sub> = " + frac('v<sup>2</sup>', 'r') + " = r ω<sup>2</sup> = v ω"))}
    ${colonTopic("Centripetal Force (F<sub>c</sub>)", "Inward force required to maintain circular path:<br>" + singleLineCode("F<sub>c</sub> = m a<sub>c</sub> = " + frac('m v<sup>2</sup>', 'r') + " = m r ω<sup>2</sup>"))}
  </div>

  ${diagramPlaceholder("Uniform Circular Motion & Centripetal Acceleration Vector", "Circular motion diagram illustrating tangential velocity v, inward radial centripetal acceleration ac, and angular velocity ω.")}

  <!-- QUICK REVISION CHEAT SHEET (PLACED AT THE VERY END OF OVERVIEW SECTION) -->
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Quick Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Formulae, Vector Identities & Kinematic Equations Summary for Unit II</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• 1D Motion Equations:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v = u + a t<br>s = u t + ` + frac('1', '2') + ` a t<sup>2</sup><br>v<sup>2</sup> - u<sup>2</sup> = 2 a s<br>s<sub>n<sup>th</sup></sub> = u + ` + frac('a', '2') + ` (2 n - 1)</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Vector Resolution & Magnitude:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">A = A<sub>x</sub> î + A<sub>y</sub> ĵ<br>|A| = √(A<sub>x</sub><sup>2</sup> + A<sub>y</sub><sup>2</sup>)<br>tan θ = A<sub>y</sub> / A<sub>x</sub></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Vector Multiplication:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">Dot Product: A · B = |A||B| cos θ<br>Cross Product: |A × B| = |A||B| sin θ</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Projectile Parameters:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">T = ` + frac('2 u sin θ', 'g') + `<br>H = ` + frac('u<sup>2</sup> sin<sup>2</sup> θ', '2 g') + `<br>R = ` + frac('u<sup>2</sup> sin 2θ', 'g') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Circular Motion Relations:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">v = r ω &nbsp;|&nbsp; ω = ` + frac('2π', 'T') + `<br>a<sub>c</sub> = ` + frac('v<sup>2</sup>', 'r') + ` = r ω<sup>2</sup><br>F<sub>c</sub> = ` + frac('m v<sup>2</sup>', 'r') + `</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 3px;'>• Vector Addition Resultant:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">R = √(A<sup>2</sup> + B<sup>2</sup> + 2 A B cos θ)<br>tan α = ` + frac('B sin θ', 'A + B cos θ') + `</span>
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
    <div style="background: rgba(142, 45, 226, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
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
    <p style="color: #B0BEC5; margin: 5px 0 0 0; font-size: 15px; text-align: center !important;">Unit II: Kinematics — 100 Master Practice Questions (Theoretical & Numerical)</p>
  </div>
`;

// Rebalanced 100 Questions for Unit II (Kinematics)
const mcqs = [
  { q: "The slope of position-time (x-t) graph represents which physical quantity?", opts: ["a) Distance", "b) Velocity", "c) Acceleration", "d) Work done"], ans: "b) Velocity", exp: "The slope of x-t graph v = dx/dt represents instantaneous velocity." },
  { q: "The area under velocity-time (v-t) graph represents:", opts: ["a) Acceleration", "b) Speed", "c) Displacement", "d) Force"], ans: "c) Displacement", exp: "Area under v-t graph = ∫v dt = Displacement Δx." },
  { q: "Which of the following is a scalar quantity?", opts: ["a) Displacement", "b) Velocity", "c) Electric Current", "d) Acceleration"], ans: "c) Electric Current", exp: "Electric current has direction but does not obey laws of vector addition; it is a scalar quantity." },
  { q: "If position x = 3 t<sup>2</sup> + 2 t + 5 m, the velocity at t = 2 s is:", opts: ["a) 10 m s<sup>-1</sup>", "b) 14 m s<sup>-1</sup>", "c) 16 m s<sup>-1</sup>", "d) 20 m s<sup>-1</sup>"], ans: "b) 14 m s<sup>-1</sup>", exp: "v = dx/dt = 6 t + 2. At t = 2 s, v = 6(2) + 2 = 14 m s<sup>-1</sup>." },
  { q: "A body dropped from height h reaches ground in time t given by:", opts: ["a) t = " + frac('2 h', 'g'), "b) t = " + frac('√h', '√g'), "c) t = " + frac('√(2 h)', '√g'), "d) t = " + frac('h<sup>2</sup>', '2 g')], ans: "c) t = " + frac('√(2 h)', '√g'), exp: "From h = 1/2 g t<sup>2</sup>, t = √(2h / g)." },
  { q: "The angle of projection for maximum horizontal range of a projectile is:", opts: ["a) 30°", "b) 45°", "c) 60°", "d) 90°"], ans: "b) 45°", exp: "R = (u<sup>2</sup> sin 2θ)/g. R is maximum when sin 2θ = 1 ⇒ 2θ = 90° ⇒ θ = 45°." },
  { q: "Two vectors A and B are perpendicular if their dot product A · B is:", opts: ["a) |A||B|", "b) 1", "c) 0", "d) -1"], ans: "c) 0", exp: "A · B = |A||B| cos 90° = 0." },
  { q: "The magnitude of cross product |A × B| of two vectors is maximum when angle θ is:", opts: ["a) 0°", "b) 45°", "c) 90°", "d) 180°"], ans: "c) 90°", exp: "|A × B| = |A||B| sin θ, which is maximum at θ = 90° (sin 90° = 1)." },
  { q: "In uniform circular motion, which quantity remains CONSTANT?", opts: ["a) Velocity vector", "b) Acceleration vector", "c) Speed", "d) Displacement"], ans: "c) Speed", exp: "Speed is the magnitude of velocity and remains constant in uniform circular motion, whereas direction of velocity continuously changes." },
  { q: "Centripetal acceleration of a particle in circular motion of radius r with speed v is:", opts: ["a) v / r", "b) v<sup>2</sup> / r", "c) v r", "d) v / r<sup>2</sup>"], ans: "b) v<sup>2</sup> / r", exp: "Centripetal acceleration a<sub>c</sub> = v<sup>2</sup> / r = r ω<sup>2</sup>." },
  { q: "The displacement of a particle in n-th second of uniformly accelerated motion is:", opts: ["a) u + a (n - 1)", "b) u + " + frac('a', '2') + " (2 n - 1)", "c) u n + " + frac('1', '2') + " a n<sup>2</sup>", "d) a / 2 (n - 1)"], ans: "b) u + " + frac('a', '2') + " (2 n - 1)", exp: "s<sub>n<sup>th</sup></sub> = s<sub>n</sub> - s<sub>n-1</sub> = u + (a/2)(2n - 1)." },
  { q: "A car covers first half distance at speed v<sub>1</sub> and second half at v<sub>2</sub>. Average speed is:", opts: ["a) " + frac('v<sub>1</sub> + v<sub>2</sub>', '2'), "b) " + frac('2 v<sub>1</sub> v<sub>2</sub>', 'v<sub>1</sub> + v<sub>2</sub>'), "c) √(v<sub>1</sub> v<sub>2</sub>)", "d) " + frac('v<sub>1</sub> v<sub>2</sub>', 'v<sub>1</sub> + v<sub>2</sub>')], ans: "b) " + frac('2 v<sub>1</sub> v<sub>2</sub>', 'v<sub>1</sub> + v<sub>2</sub>'), exp: "Harmonic mean of speeds for equal distance intervals: v<sub>avg</sub> = 2 v<sub>1</sub> v<sub>2</sub> / (v<sub>1</sub> + v<sub>2</sub>)." },
  { q: "What is the unit vector parallel to vector A = 3 î + 4 ĵ?", opts: ["a) " + frac('3 î + 4 ĵ', '5'), "b) " + frac('3 î + 4 ĵ', '7'), "c) 3 î + 4 ĵ", "d) " + frac('î + ĵ', '5')], ans: "a) " + frac('3 î + 4 ĵ', '5'), exp: "|A| = √(3<sup>2</sup> + 4<sup>2</sup>) = 5. Unit vector â = A / |A| = (3î + 4ĵ) / 5." },
  { q: "The horizontal velocity component of a projectile during flight:", opts: ["a) Increases continuously", "b) Decreases continuously", "c) Remains constant", "d) Becomes zero at apex"], ans: "c) Remains constant", exp: "Assuming no air resistance, no horizontal force acts on the projectile (a<sub>x</sub> = 0), so u<sub>x</sub> = u cos θ remains constant." },
  { q: "At the highest point of projectile trajectory, the angle between velocity and acceleration is:", opts: ["a) 0°", "b) 45°", "c) 90°", "d) 180°"], ans: "c) 90°", exp: "At apex, velocity is purely horizontal (u cos θ) and acceleration due to gravity is vertically downward (g), making an angle of 90°." },
  { q: "If A = 2 î + 3 ĵ and B = î - 2 ĵ, then dot product A · B is:", opts: ["a) 5", "b) -4", "c) -1", "d) 8"], ans: "b) -4", exp: "A · B = (2)(1) + (3)(-2) = 2 - 6 = -4." },
  { q: "The resultant of two forces 6 N and 8 N acting at right angles (90°) is:", opts: ["a) 14 N", "b) 2 N", "c) 10 N", "d) 48 N"], ans: "c) 10 N", exp: "R = √(6<sup>2</sup> + 8<sup>2</sup>) = √(36 + 64) = √100 = 10 N." },
  { q: "Which graph represents a body at rest?", opts: ["a) Line parallel to time axis on x-t graph", "b) Inclined line on x-t graph", "c) Parabola on x-t graph", "d) Line parallel to time axis on v-t graph"], ans: "a) Line parallel to time axis on x-t graph", exp: "Position x remains constant over time t, giving a horizontal line slope = dx/dt = 0." },
  { q: "The magnitude of displacement can be:", opts: ["a) Greater than distance", "b) Equal to or less than distance", "c) Always zero", "d) Always negative"], ans: "b) Equal to or less than distance", exp: "|Displacement| ≤ Distance. Equality holds only for straight-line motion without direction change." },
  { q: "Relation between linear velocity v and angular velocity ω is:", opts: ["a) v = r / ω", "b) v = r ω", "c) ω = v r", "d) v = r<sup>2</sup> ω"], ans: "b) v = r ω", exp: "Linear velocity v = r ω." },
  { q: "If a body travels with uniform acceleration, its velocity-time graph is:", opts: ["a) A straight line inclined to time axis", "b) A curve (parabola)", "c) A circle", "d) A line parallel to velocity axis"], ans: "a) A straight line inclined to time axis", exp: "Uniform acceleration means constant dv/dt, giving a straight line with constant slope on v-t graph." },
  { q: "The maximum height reached by a projectile launched with velocity u at angle θ is:", opts: ["a) " + frac('u<sup>2</sup> sin θ', 'g'), "b) " + frac('u<sup>2</sup> sin<sup>2</sup> θ', '2 g'), "c) " + frac('u<sup>2</sup> sin 2θ', 'g'), "d) " + frac('u sin θ', '2 g')], ans: "b) " + frac('u<sup>2</sup> sin<sup>2</sup> θ', '2 g'), exp: "H<sub>max</sub> = (u<sup>2</sup> sin<sup>2</sup> θ) / (2 g)." },
  { q: "Vector sum of î × ĵ is:", opts: ["a) 0", "b) 1", "c) k̂", "d) -k̂"], ans: "c) k̂", exp: "By right-hand thumb rule, î × ĵ = k̂." },
  { q: "If speed of a particle moving in a circle of radius 2 m is doubled, its centripetal acceleration becomes:", opts: ["a) Doubled", "b) Halved", "c) 4 times", "d) 8 times"], ans: "c) 4 times", exp: "a<sub>c</sub> = v<sup>2</sup>/r. If v becomes 2v, a<sub>c</sub>' = (2v)<sup>2</sup>/r = 4 (v<sup>2</sup>/r) = 4 a<sub>c</sub>." },
  { q: "A ball thrown vertically upwards with 20 m s<sup>-1</sup> reaches maximum height in (take g = 10 m s<sup>-2</sup>):", opts: ["a) 1 s", "b) 2 s", "c) 3 s", "d) 4 s"], ans: "b) 2 s", exp: "t = u/g = 20 / 10 = 2 s." }
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
  { t: "Define Kinematics", q: "What is kinematics in physics?", s: "Kinematics is the branch of classical mechanics that describes the motion of points, bodies, and systems without considering the forces that cause the motion." },
  { t: "Define Frame of Reference", q: "Define a frame of reference.", s: "A frame of reference is a coordinate system (axes + clock) attached to an observer relative to which position, displacement, and velocity of an object are measured." },
  { t: "Inertial vs Non-Inertial Frame", q: "Differentiate between inertial and non-inertial frames of reference.", s: "An inertial frame is non-accelerating where Newton's laws hold true. A non-inertial frame is accelerating or rotating relative to an inertial frame." },
  { t: "Distance vs Displacement Definition", q: "Distinguish between distance and displacement in 1 sentence.", s: "Distance is total path length traversed (scalar), whereas displacement is the shortest directed straight-line vector from initial to final position." },
  { t: "Average Speed Formula", q: "Define average speed and state its mathematical expression.", s: "Average speed is total distance divided by total time: Average Speed = Total Path Length / Total Time." },
  { t: "Instantaneous Speed Definition", q: "What is instantaneous speed?", s: "Instantaneous speed is the magnitude of instantaneous velocity at a specific instant of time: v = limit(Δt→0) [Δs / Δt] = ds / dt." },
  { t: "Define Acceleration", q: "Define acceleration and state its SI unit.", s: "Acceleration is the rate of change of velocity with respect to time: a = dv / dt. Its SI unit is m s<sup>-2</sup>." },
  { t: "Slope of x-t Graph", q: "What physical quantity is given by the slope of position-time graph?", s: "The slope of position-time graph (dx/dt) represents Instantaneous Velocity." },
  { t: "Slope of v-t Graph", q: "What physical quantity is given by the slope of velocity-time graph?", s: "The slope of velocity-time graph (dv/dt) represents Instantaneous Acceleration." },
  { t: "Area under v-t Graph", q: "What physical quantity is represented by the area under a v-t graph?", s: "The area under a velocity-time graph (∫v dt) represents total Displacement of the object." },
  { t: "First Equation of Motion", q: "State the first equation of motion for uniform acceleration.", s: "First equation of motion: v = u + a t." },
  { t: "Second Equation of Motion", q: "State the second equation of motion.", s: "Second equation of motion: s = u t + " + frac('1', '2') + " a t<sup>2</sup>." },
  { t: "Third Equation of Motion", q: "State the third equation of motion.", s: "Third equation of motion: v<sup>2</sup> - u<sup>2</sup> = 2 a s." },
  { t: "Distance in n-th Second Formula", q: "State the formula for distance traveled in n-th second.", s: "s<sub>n<sup>th</sup></sub> = u + " + frac('a', '2') + " (2 n - 1)." },
  { t: "Define Scalar Quantity", q: "Define a scalar quantity with two examples.", s: "A scalar quantity is a physical quantity having magnitude only and no direction (e.g. Mass, Temperature, Distance)." },
  { t: "Define Vector Quantity", q: "Define a vector quantity with two examples.", s: "A vector quantity possesses both magnitude and direction, and obeys vector addition laws (e.g. Force, Velocity, Displacement)." },
  { t: "Define Unit Vector", q: "What is a unit vector? State its formula.", s: "A unit vector is a vector of magnitude 1 pointing in a specified direction: â = A / |A|." },
  { t: "Define Zero Vector", q: "What is a zero or null vector?", s: "A zero vector is a vector having zero magnitude and an arbitrary direction, represented as 0." },
  { t: "Components of Vector in 2D", q: "Write rectangular components of a vector A making angle θ with x-axis.", s: "A<sub>x</sub> = |A| cos θ &nbsp;and&nbsp; A<sub>y</sub> = |A| sin θ." },
  { t: "Magnitude of Vector A = Ax i + Ay j", q: "Write the formula for magnitude of vector A = A<sub>x</sub> î + A<sub>y</sub> ĵ.", s: "|A| = √(A<sub>x</sub><sup>2</sup> + A<sub>y</sub><sup>2</sup>)." },
  { t: "Scalar Product Definition", q: "Define scalar (dot) product of two vectors A and B.", s: "Scalar product A · B = |A||B| cos θ, where θ is the angle between vectors." },
  { t: "Vector Product Definition", q: "Define vector (cross) product of two vectors A and B.", s: "Vector product A × B = |A||B| sin θ n̂, where n̂ is unit vector perpendicular to both A and B." },
  { t: "Dot Product of Perpendicular Vectors", q: "What is the value of dot product of two perpendicular vectors?", s: "For perpendicular vectors (θ = 90°), A · B = 0." },
  { t: "Cross Product of Parallel Vectors", q: "What is the cross product of two parallel vectors?", s: "For parallel vectors (θ = 0° or 180°), A × B = 0." },
  { t: "Define Projectile Motion", q: "What is projectile motion?", s: "Projectile motion is two-dimensional motion of a body launched into air with an initial velocity under uniform downward gravity." },
  { t: "Time of Flight Formula", q: "State the formula for time of flight T of a projectile.", s: "T = " + frac('2 u sin θ', 'g') + "." },
  { t: "Maximum Height Formula", q: "State the formula for maximum height H of a projectile.", s: "H = " + frac('u<sup>2</sup> sin<sup>2</sup> θ', '2 g') + "." },
  { t: "Horizontal Range Formula", q: "State the formula for horizontal range R of a projectile.", s: "R = " + frac('u<sup>2</sup> sin 2θ', 'g') + "." },
  { t: "Define Angular Velocity", q: "Define angular velocity ω in circular motion.", s: "Angular velocity is the rate of change of angular displacement: ω = dθ / dt = 2π / T." },
  { t: "Centripetal Acceleration Formula", q: "State the formula for centripetal acceleration.", s: "a<sub>c</sub> = " + frac('v<sup>2</sup>', 'r') + " = r ω<sup>2</sup>." }
];

vsas.forEach((item, idx) => {
  let qNo = idx + 26;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// SAs Q56-Q85: Theoretical & Conceptual Reasoning Mixed with Simple Derivations
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part C: Short Answer Questions (Q56 - Q85)</h3>`;

const sas = [
  { t: "Difference Between Speed and Velocity", q: "Differentiate between speed and velocity with 4 distinct comparison points.", s: "1. <b>Nature:</b> Speed is scalar; Velocity is vector.<br>2. <b>Direction:</b> Speed has no direction; Velocity includes direction.<br>3. <b>Sign:</b> Speed is always positive or zero; Velocity can be positive, negative, or zero.<br>4. <b>Formula:</b> Speed = Distance/Time; Velocity = Displacement/Time." },
  { t: "Differentiation Method for v and a", q: "Position of particle x(t) = 4 t<sup>3</sup> - 2 t<sup>2</sup> + 5 m. Find velocity and acceleration at t = 2 s.", s: "Velocity v = dx/dt = 12 t<sup>2</sup> - 4 t.<br>At t = 2 s: v = 12(4) - 4(2) = 48 - 8 = <b>40 m s<sup>-1</sup></b>.<br>Acceleration a = dv/dt = 24 t - 4.<br>At t = 2 s: a = 24(2) - 4 = 48 - 4 = <b>44 m s<sup>-2</sup></b>." },
  { t: "Integration Method for Displacement", q: "Velocity of a particle v(t) = 3 t<sup>2</sup> + 4 t m s<sup>-1</sup>. Find displacement between t = 1 s and t = 3 s.", s: "Displacement Δx = ∫ v dt (from 1 to 3) = ∫ (3 t<sup>2</sup> + 4 t) dt = [t<sup>3</sup> + 2 t<sup>2</sup>]<sub>1</sub><sup>3</sup>.<br>At t = 3: 3<sup>3</sup> + 2(3)<sup>2</sup> = 27 + 18 = 45.<br>At t = 1: 1<sup>3</sup> + 2(1)<sup>2</sup> = 1 + 2 = 3.<br>Δx = 45 - 3 = <b>42 m</b>." },
  { t: "Derive s_nth Formula", q: "Derive formula for displacement in n-th second s<sub>n<sup>th</sup></sub> = u + " + frac('a', '2') + "(2n - 1).", s: "Displacement in n seconds: s<sub>n</sub> = u n + 1/2 a n<sup>2</sup>.<br>Displacement in (n-1) seconds: s<sub>n-1</sub> = u(n-1) + 1/2 a(n-1)<sup>2</sup>.<br>s<sub>n<sup>th</sup></sub> = s<sub>n</sub> - s<sub>n-1</sub> = [u n + 1/2 a n<sup>2</sup>] - [u n - u + 1/2 a (n<sup>2</sup> - 2n + 1)].<br>s<sub>n<sup>th</sup></sub> = u + 1/2 a [n<sup>2</sup> - n<sup>2</sup> + 2n - 1] = <b>u + " + frac('a', '2') + "(2n - 1)</b>." },
  { t: "Car Stopping Distance Problem", q: "A car moving at 20 m s<sup>-1</sup> is stopped by applying brakes with uniform retardation of 4 m s<sup>-2</sup>. Find stopping distance and time.", s: "Initial u = 20 m/s, final v = 0, acceleration a = -4 m/s<sup>2</sup>.<br>1. Time: v = u + a t ⇒ 0 = 20 - 4 t ⇒ <b>t = 5 s</b>.<br>2. Distance: v<sup>2</sup> - u<sup>2</sup> = 2 a s ⇒ 0 - 400 = 2(-4) s ⇒ -400 = -8 s ⇒ <b>s = 50 m</b>." },
  { t: "Parabolic Trajectory Proof", q: "Prove dimensionally/analytically that trajectory of a projectile is parabolic y = ax - bx<sup>2</sup>.", s: "Horizontal motion: x = (u cos θ) t ⇒ t = x / (u cos θ).<br>Vertical motion: y = (u sin θ) t - 1/2 g t<sup>2</sup>.<br>Substitute t: y = (u sin θ) [x / (u cos θ)] - 1/2 g [x / (u cos θ)]<sup>2</sup>.<br><b>y = x tan θ - " + frac('g x<sup>2</sup>', '2 u<sup>2</sup> cos<sup>2</sup> θ') + "</b>.<br>This equation is of form y = a x - b x<sup>2</sup>, which represents a parabola!" },
  { t: "Triangle Law of Vector Addition", q: "State Triangle Law of Vector Addition with diagram specification.", s: "If two vectors are represented in magnitude and direction by two sides of a triangle taken in the same order, their resultant is represented in magnitude and direction by the third side taken in the reverse order." },
  { t: "Parallelogram Law Resultant Formula", q: "Write resultant magnitude and direction formula for Parallelogram Law of Vector Addition.", s: "Resultant Magnitude R = √(A<sup>2</sup> + B<sup>2</sup> + 2 A B cos θ).<br>Direction angle α with vector A: tan α = " + frac('B sin θ', 'A + B cos θ') + "." },
  { t: "Magnitude and Unit Vector Problem", q: "Find magnitude and unit vector for A = 6 î + 8 ĵ.", s: "Magnitude |A| = √(6<sup>2</sup> + 8<sup>2</sup>) = √(36 + 64) = √100 = <b>10</b>.<br>Unit vector â = A / |A| = <b>" + frac('6 î + 8 ĵ', '10') + " = 0.6 î + 0.8 ĵ</b>." },
  { t: "Dot Product Problem for Work", q: "Force F = 3 î + 4 ĵ - 2 k̂ N displaces a body by s = 2 î + 5 ĵ + 3 k̂ m. Calculate work done.", s: "Work W = F · s = (3)(2) + (4)(5) + (-2)(3) = 6 + 20 - 6 = <b>20 Joules</b>." },
  { t: "Angle Between Two Vectors Using Dot Product", q: "Find angle θ between vectors A = î + ĵ and B = ĵ + k̂.", s: "A · B = (1)(0) + (1)(1) + (0)(1) = 1.<br>|A| = √(1<sup>2</sup> + 1<sup>2</sup>) = √2, &nbsp;|B| = √(1<sup>2</sup> + 1<sup>2</sup>) = √2.<br>cos θ = (A · B) / (|A||B|) = 1 / (√2 × √2) = 1/2.<br>θ = cos<sup>-1</sup>(1/2) = <b>60°</b>." },
  { t: "Cross Product Magnitude Problem", q: "Find magnitude of cross product |A × B| for A = 2 î + 3 ĵ and B = 4 î - ĵ.", s: "A × B = (2 î + 3 ĵ) × (4 î - ĵ) = 2(4)(î×î) - 2(î×ĵ) + 12(ĵ×î) - 3(ĵ×ĵ).<br>Since î×î = ĵ×ĵ = 0, î×ĵ = k̂, ĵ×î = -k̂:<br>A × B = -2 k̂ - 12 k̂ = -14 k̂.<br>Magnitude |A × B| = <b>14</b>." },
  { t: "Complementary Projection Angles for Same Range", q: "Show that horizontal range of a projectile is same for two angles of projection θ and (90° - θ).", s: "Range at angle θ: R<sub>1</sub> = (u<sup>2</sup> sin 2θ)/g.<br>Range at angle (90° - θ): R<sub>2</sub> = [u<sup>2</sup> sin 2(90° - θ)] / g = [u<sup>2</sup> sin (180° - 2θ)] / g.<br>Since sin(180° - x) = sin x, R<sub>2</sub> = (u<sup>2</sup> sin 2θ)/g = R<sub>1</sub>.<br><b>Thus, range is identical for complementary angles θ and (90° - θ)!</b>" },
  { t: "Projectile Launch Velocity Problem", q: "A projectile is launched with speed 30 m s<sup>-1</sup> at 30° to horizontal. Find Time of Flight (g = 10 m s<sup>-2</sup>).", s: "T = (2 u sin θ) / g = [2(30) sin 30°] / 10 = [60 × 0.5] / 10 = <b>3 seconds</b>." },
  { t: "Projectile Range Calculation", q: "A shell is fired with velocity 100 m s<sup>-1</sup> at 45°. Calculate its horizontal range (g = 10 m s<sup>-2</sup>).", s: "R = (u<sup>2</sup> sin 2θ) / g = [100<sup>2</sup> sin 90°] / 10 = 10000 / 10 = <b>1000 metres (1 km)</b>." },
  { t: "Relation v = r ω Proof", q: "Derive relation between linear velocity v and angular velocity ω in circular motion.", s: "Arc length s = r θ. Differentiating with respect to time t:<br>ds/dt = r (dθ/dt).<br>Since ds/dt = v (linear velocity) and dθ/dt = ω (angular velocity):<br><b>v = r ω</b>." },
  { t: "Centripetal Force Problem", q: "A 0.5 kg stone tied to a string of length 1 m is whirled in a horizontal circle at speed 4 m s<sup>-1</sup>. Find string tension.", s: "Tension T = Centripetal Force F<sub>c</sub> = m v<sup>2</sup> / r.<br>F<sub>c</sub> = [0.5 × 4<sup>2</sup>] / 1 = [0.5 × 16] / 1 = <b>8 Newtons</b>." },
  { t: "Relative Velocity in 1D Definition", q: "Define relative velocity of body A with respect to body B in 1D motion.", s: "Relative velocity v<sub>AB</sub> is the time rate of change of position of body A with respect to body B: v<sub>AB</sub> = v<sub>A</sub> - v<sub>B</sub>." },
  { t: "Relative Velocity Opposite Directions", q: "Two trains A and B of length 100 m travel in opposite directions at 20 m s<sup>-1</sup> and 30 m s<sup>-1</sup>. Find crossing time.", s: "Relative speed v<sub>rel</sub> = v<sub>A</sub> + v<sub>B</sub> = 20 + 30 = 50 m s<sup>-1</sup>.<br>Total distance to clear each other = L<sub>1</sub> + L<sub>2</sub> = 100 + 100 = 200 m.<br>Time t = Distance / v<sub>rel</sub> = 200 / 50 = <b>4 seconds</b>." },
  { t: "Average Velocity in Equal Time Intervals", q: "A body travels at 10 m s<sup>-1</sup> for 2 s and then at 30 m s<sup>-1</sup> for 2 s. Find average velocity.", s: "Equal time intervals: Average velocity = (v<sub>1</sub> + v<sub>2</sub>) / 2 = (10 + 30) / 2 = <b>20 m s<sup>-1</sup></b>." },
  { t: "Kinematic Graph Interpretation", q: "Explain the shape of x-t graph for (i) uniform positive velocity, (ii) uniform acceleration.", s: "(i) <b>Uniform Positive Velocity:</b> Straight line inclined to time axis with constant positive slope.<br>(ii) <b>Uniform Acceleration:</b> Parabola opening upwards with increasing slope." },
  { t: "Null Vector Properties", q: "State three main properties of zero (null) vector 0.", s: "1. A + 0 = A<br>2. λ 0 = 0 (where λ is a scalar)<br>3. 0 · A = 0" },
  { t: "Orthogonal Unit Vectors Dot Product", q: "Prove that î · î = 1 and î · ĵ = 0.", s: "1. î · î = |î||î| cos 0° = (1)(1)(1) = 1.<br>2. î · ĵ = |î||ĵ| cos 90° = (1)(1)(0) = 0." },
  { t: "Right Hand Rule for Cross Product", q: "Explain Right-Hand Thumb Rule for determining direction of cross product A × B.", s: "Curl the fingers of right hand from vector A towards vector B through smaller angle θ; the stretched thumb points in direction of cross product C = A × B." },
  { t: "Apex Velocity of Projectile", q: "Why is velocity of projectile not zero at apex?", s: "At apex, vertical velocity component becomes zero (v<sub>y</sub> = 0), but horizontal component u<sub>x</sub> = u cos θ remains active, so total velocity is u cos θ (non-zero)." },
  { t: "Rain Man Relative Velocity Concept", q: "Explain why a walking person must tilt their umbrella forward in vertical rain.", s: "Relative velocity of rain with respect to man v<sub>RM</sub> = v<sub>R</sub> - v<sub>M</sub>. The resultant vector tilts forward at angle tan θ = v<sub>M</sub> / v<sub>R</sub>." },
  { t: "Centripetal vs Centrifugal Force", q: "Differentiate between centripetal force and centrifugal force.", s: "Centripetal force is a real inward force acting toward center in inertial frame. Centrifugal force is a pseudo outward force observed in rotating non-inertial frame." },
  { t: "Angular Acceleration Definition", q: "Define angular acceleration α and state its relation with linear acceleration a.", s: "Angular acceleration is rate of change of angular velocity α = dω / dt (rad s<sup>-2</sup>). Relation: tangential acceleration a<sub>t</sub> = r α." },
  { t: "Condition for Equal Range and Max Height", q: "At what projection angle θ is horizontal range R equal to maximum height H?", s: "R = H ⇒ (u<sup>2</sup> sin 2θ)/g = (u<sup>2</sup> sin<sup>2</sup> θ)/(2g) ⇒ 2 sin θ cos θ = sin<sup>2</sup> θ / 2 ⇒ tan θ = 4 ⇒ <b>θ = tan<sup>-1</sup>(4) ≈ 76°</b>." },
  { t: "Dimensional Proof of v² - u² = 2 a s", q: "Verify dimensional correctness of v<sup>2</sup> - u<sup>2</sup> = 2 a s.", s: "LHS: [v<sup>2</sup>] = [L<sup>2</sup> T<sup>-2</sup>].<br>RHS: [2 a s] = [1] × [L T<sup>-2</sup>] × [L] = [L<sup>2</sup> T<sup>-2</sup>].<br>LHS = RHS. Dimensionally correct!" }
];

sas.forEach((item, idx) => {
  let qNo = idx + 56;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

// LAs Q86-Q100: Deep Multi-Part Theoretical Derivations & Analytical Master Problems
solutionsHtml += `<h3 style="color: ${themeColor}; border-left: 4px solid ${themeColor}; padding-left: 10px; margin-top: 35px;">Part D: Long Answer Questions (Q86 - Q100)</h3>`;

const las = [
  { t: "Graphical Derivation of 3 Equations of Motion", q: "Derive the three kinematic equations of motion (v = u + at, s = ut + 1/2 at<sup>2</sup>, v<sup>2</sup> - u<sup>2</sup> = 2as) for uniform acceleration using velocity-time graph.", s: "Consider a body moving with uniform acceleration a, initial velocity u at t = 0, and final velocity v at time t.<br><br><b>(i) First Equation (v = u + a t):</b><br>Slope of v-t graph = Acceleration a = " + frac('Change in Velocity', 'Time') + " = " + frac('v - u', 't') + ".<br>a t = v - u &nbsp; ⇒ &nbsp; <b>v = u + a t</b>.<br><br><b>(ii) Second Equation (s = u t + 1/2 a t<sup>2</sup>):</b><br>Displacement s = Area under v-t graph = Area of rectangle + Area of triangle.<br>s = (u × t) + " + frac('1', '2') + " × t × (v - u).<br>Substitute (v - u) = a t:<br>s = u t + " + frac('1', '2') + " × t × (a t) &nbsp; ⇒ &nbsp; <b>s = u t + " + frac('1', '2') + " a t<sup>2</sup></b>.<br><br><b>(iii) Third Equation (v<sup>2</sup> - u<sup>2</sup> = 2 a s):</b><br>Displacement s = Area of Trapezoid = " + frac('(u + v)', '2') + " × t.<br>From first equation t = " + frac('v - u', 'a') + ". Substitute t:<br>s = " + frac('(v + u)', '2') + " × " + frac('(v - u)', 'a') + " = " + frac('v<sup>2</sup> - u<sup>2</sup>', '2 a') + ".<br><b>v<sup>2</sup> - u<sup>2</sup> = 2 a s</b>." },
  { t: "Complete Theory & Derivation of Projectile Motion", q: "Define projectile motion. Derive expressions for (i) Parabolic trajectory equation, (ii) Time of flight T, (iii) Maximum height H, and (iv) Horizontal range R.", s: "Consider a projectile launched with velocity u at angle θ to horizontal.<br><br><b>(i) Trajectory Equation:</b><br>Horizontal displacement: x = (u cos θ) t ⇒ t = x / (u cos θ).<br>Vertical displacement: y = (u sin θ) t - 1/2 g t<sup>2</sup>.<br>Substitute t: <b>y = x tan θ - " + frac('g x<sup>2</sup>', '2 u<sup>2</sup> cos<sup>2</sup> θ') + "</b> (Parabola).<br><br><b>(ii) Time of Flight T:</b><br>At return to ground y = 0: 0 = (u sin θ) T - 1/2 g T<sup>2</sup> ⇒ <b>T = " + frac('2 u sin θ', 'g') + "</b>.<br><br><b>(iii) Maximum Height H:</b><br>At highest point v<sub>y</sub> = 0: v<sub>y</sub><sup>2</sup> = u<sub>y</sub><sup>2</sup> - 2 g H ⇒ 0 = u<sup>2</sup> sin<sup>2</sup> θ - 2 g H ⇒ <b>H = " + frac('u<sup>2</sup> sin<sup>2</sup> θ', '2 g') + "</b>.<br><br><b>(iv) Horizontal Range R:</b><br>R = u<sub>x</sub> × T = (u cos θ) × " + frac('2 u sin θ', 'g') + " = " + frac('u<sup>2</sup> (2 sin θ cos θ)', 'g') + " ⇒ <b>R = " + frac('u<sup>2</sup> sin 2θ', 'g') + "</b>." },
  { t: "Laws of Vector Addition & Derivation of Resultant", q: "State Parallelogram Law of Vector Addition. Derive mathematical expressions for magnitude R and direction α of the resultant of two vectors A and B at angle θ.", s: "<b>Parallelogram Law:</b> If two vectors acting simultaneously at a point are represented in magnitude and direction by two adjacent sides of a parallelogram, their resultant is represented by the diagonal passing through their common point.<br><br><b>Derivation:</b><br>Let vectors A along OA and B along OB make angle θ. Complete parallelogram OACB.<br>From C drop perpendicular CD to extended line OA.<br>In right triangle CDC': CD = B sin θ, &nbsp;AD = B cos θ.<br>Total base OD = OA + AD = A + B cos θ.<br>In right triangle ODC, by Pythagoras theorem:<br>OC<sup>2</sup> = OD<sup>2</sup> + CD<sup>2</sup> = (A + B cos θ)<sup>2</sup> + (B sin θ)<sup>2</sup>.<br>R<sup>2</sup> = A<sup>2</sup> + 2 A B cos θ + B<sup>2</sup> cos<sup>2</sup> θ + B<sup>2</sup> sin<sup>2</sup> θ = A<sup>2</sup> + B<sup>2</sup> + 2 A B cos θ.<br><b>R = √(A<sup>2</sup> + B<sup>2</sup> + 2 A B cos θ)</b>.<br><br><b>Direction α:</b><br>tan α = " + frac('CD', 'OD') + " = <b>" + frac('B sin θ', 'A + B cos θ') + "</b>." },
  { t: "Scalar Product (Dot Product) Complete Properties & Derivations", q: "Explain Scalar Product A · B in detail. Derive its component formula and list 5 fundamental properties with applications.", s: "<b>Definition:</b> A · B = |A||B| cos θ.<br><br><b>Component Formula Derivation:</b><br>Let A = A<sub>x</sub> î + A<sub>y</sub> ĵ + A<sub>z</sub> k̂ &nbsp;and&nbsp; B = B<sub>x</sub> î + B<sub>y</sub> ĵ + B<sub>z</sub> k̂.<br>Expanding dot product using î·î = ĵ·ĵ = k̂·k̂ = 1 and orthogonal dot products = 0:<br><b>A · B = A<sub>x</sub> B<sub>x</sub> + A<sub>y</sub> B<sub>y</sub> + A<sub>z</sub> B<sub>z</sub></b>.<br><br><b>Properties:</b><br>1. Commutative: A · B = B · A.<br>2. Perpendicular vectors: A · B = 0 (θ = 90°).<br>3. Self dot product: A · A = |A|<sup>2</sup>.<br>4. Angle formula: cos θ = (A · B) / (|A||B|).<br>5. Work Done: W = F · s." },
  { t: "Vector Product (Cross Product) Complete Theory & Determinant Form", q: "Explain Vector Product A × B. State Right-Hand Thumb Rule, list 5 key properties, and show its evaluation using 3x3 determinant.", s: "<b>Definition:</b> A × B = |A||B| sin θ n̂.<br><br><b>Determinant Form:</b><br>A × B = | î &nbsp; ĵ &nbsp; k̂ |<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| A<sub>x</sub> &nbsp; A<sub>y</sub> &nbsp; A<sub>z</sub> |<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| B<sub>x</sub> &nbsp; B<sub>y</sub> &nbsp; B<sub>z</sub> |<br><b>A × B = (A<sub>y</sub> B<sub>z</sub> - A<sub>z</sub> B<sub>y</sub>) î - (A<sub>x</sub> B<sub>z</sub> - A<sub>z</sub> B<sub>x</sub>) ĵ + (A<sub>x</sub> B<sub>y</sub> - A<sub>y</sub> B<sub>x</sub>) k̂</b>.<br><br><b>Properties:</b><br>1. Anti-commutative: A × B = -(B × A).<br>2. Parallel vectors: A × B = 0.<br>3. Area of Parallelogram = |A × B|.<br>4. Area of Triangle = 1/2 |A × B|.<br>5. Torque τ = r × F." },
  { t: "Derivation of Centripetal Acceleration in Circular Motion", q: "Derive expression for centripetal acceleration a<sub>c</sub> = v<sup>2</sup> / r = r ω<sup>2</sup> for uniform circular motion using vector calculus.", s: "Consider a particle moving in circle of radius r with constant angular speed ω.<br>Position vector r(t) = r cos(ωt) î + r sin(ωt) ĵ.<br>Velocity vector v(t) = dr/dt = -r ω sin(ωt) î + r ω cos(ωt) ĵ.<br>Acceleration vector a(t) = dv/dt = -r ω<sup>2</sup> cos(ωt) î - r ω<sup>2</sup> sin(ωt) ĵ.<br>a(t) = -ω<sup>2</sup> [r cos(ωt) î + r sin(ωt) ĵ] = <b>-ω<sup>2</sup> r</b>.<br>The negative sign indicates acceleration is directed radially inward toward center.<br>Magnitude: <b>a<sub>c</sub> = ω<sup>2</sup> r = " + frac('v<sup>2</sup>', 'r') + "</b>." },
  { t: "Relative Velocity in 2D (Rain-Man & River-Boat Problems)", q: "Explain Relative Velocity in 2D. Derive mathematical solutions for (i) Rain-Man problem, and (ii) River-Boat shortest path problem.", s: "<b>Relative Velocity:</b> v<sub>AB</sub> = v<sub>A</sub> - v<sub>B</sub>.<br><br><b>(i) Rain-Man Problem:</b><br>Rain falling vertically at v<sub>R</sub>, man walking horizontally at v<sub>M</sub>.<br>Relative velocity v<sub>RM</sub> = v<sub>R</sub> - v<sub>M</sub>.<br>Magnitude: <b>v<sub>RM</sub> = √(v<sub>R</sub><sup>2</sup> + v<sub>M</sub><sup>2</sup>)</b>.<br>Tilt angle of umbrella with vertical: <b>tan θ = v<sub>M</sub> / v<sub>R</sub></b>.<br><br><b>(ii) River-Boat Shortest Path:</b><br>To cross river of width d perpendicular to current v<sub>u</sub>, boat of speed v<sub>b</sub> must head upstream at angle θ:<br>sin θ = v<sub>u</sub> / v<sub>b</sub>.<br>Crossing time: <b>t = " + frac('d', '√(v<sub>b</sub><sup>2</sup> - v<sub>u</sub><sup>2</sup>)') + "</b>." },
  { t: "Calculus Kinematics Master Problem", q: "Position of a particle along x-axis is x = t<sup>3</sup> - 6 t<sup>2</sup> + 9 t + 2 m. Find (i) initial velocity, (ii) time when particle comes to rest, (iii) acceleration at that instant.", s: "<b>Given:</b> x(t) = t<sup>3</sup> - 6 t<sup>2</sup> + 9 t + 2.<br>Velocity v(t) = dx/dt = 3 t<sup>2</sup> - 12 t + 9.<br>Acceleration a(t) = dv/dt = 6 t - 12.<br><br><b>(i) Initial Velocity (t = 0):</b> v(0) = 3(0) - 12(0) + 9 = <b>9 m s<sup>-1</sup></b>.<br><b>(ii) Time when at rest (v = 0):</b><br>3 t<sup>2</sup> - 12 t + 9 = 0 ⇒ t<sup>2</sup> - 4 t + 3 = 0 ⇒ (t - 1)(t - 3) = 0.<br>Particle comes to rest at <b>t = 1 s and t = 3 s</b>.<br><b>(iii) Acceleration at rest:</b><br>At t = 1 s: a(1) = 6(1) - 12 = <b>-6 m s<sup>-2</sup></b> (retardation).<br>At t = 3 s: a(3) = 6(3) - 12 = <b>+6 m s<sup>-2</sup></b>." },
  { t: "Master Numerical Problem on Projectile Motion", q: "A projectile is launched from ground with u = 40 m s<sup>-1</sup> at θ = 30° (g = 10 m s<sup>-2</sup>). Calculate (i) Time of flight, (ii) Maximum height, (iii) Horizontal range, (iv) Velocity vector after 1 s.", s: "Initial components: u<sub>x</sub> = 40 cos 30° = 40 (√3/2) = 20√3 ≈ 34.64 m/s.<br>u<sub>y</sub> = 40 sin 30° = 40 (0.5) = 20 m/s.<br><br><b>(i) Time of Flight T:</b> T = 2 u<sub>y</sub> / g = 2(20) / 10 = <b>4 seconds</b>.<br><b>(ii) Maximum Height H:</b> H = u<sub>y</sub><sup>2</sup> / (2g) = 400 / 20 = <b>20 metres</b>.<br><b>(iii) Horizontal Range R:</b> R = u<sub>x</sub> × T = 20√3 × 4 = <b>80√3 ≈ 138.56 metres</b>.<br><b>(iv) Velocity after t = 1 s:</b><br>v<sub>x</sub> = u<sub>x</sub> = 20√3 m/s.<br>v<sub>y</sub> = u<sub>y</sub> - g t = 20 - 10(1) = 10 m/s.<br>Velocity vector: <b>v = 20√3 î + 10 ĵ m/s</b> &nbsp;(Magnitude: √(1200 + 100) = √1300 ≈ 36.05 m/s)." },
  { t: "Vector Resolution and Resultant Master Problem", q: "Three vectors A = 3 î + 2 ĵ, B = -î + 4 ĵ, C = 2 î - 6 ĵ act on a particle. Find (i) Resultant vector R, (ii) Magnitude |R|, (iii) Unit vector r̂.", s: "<b>(i) Resultant R = A + B + C:</b><br>R = (3 - 1 + 2) î + (2 + 4 - 6) ĵ = <b>4 î + 0 ĵ = 4 î</b>.<br><b>(ii) Magnitude |R|:</b> |R| = √(4<sup>2</sup> + 0<sup>2</sup>) = <b>4 units</b>.<br><b>(iii) Unit Vector r̂:</b> r̂ = R / |R| = 4 î / 4 = <b>î</b> (along positive x-axis)." },
  { t: "Non-Uniform Acceleration & Kinematic Integration", q: "Acceleration of a particle moving along straight line is a(t) = 6 t - 2 m s<sup>-2</sup>. If initial position x(0) = 2 m and initial velocity v(0) = 3 m s<sup>-1</sup>, find position x at t = 3 s.", s: "Velocity: v(t) = v(0) + ∫ a dt = 3 + ∫ (6 t - 2) dt = 3 t<sup>2</sup> - 2 t + 3.<br>Position: x(t) = x(0) + ∫ v dt = 2 + ∫ (3 t<sup>2</sup> - 2 t + 3) dt = t<sup>3</sup> - t<sup>2</sup> + 3 t + 2.<br>At t = 3 s:<br>x(3) = 3<sup>3</sup> - 3<sup>2</sup> + 3(3) + 2 = 27 - 9 + 9 + 2 = <b>29 metres</b>." },
  { t: "Horizontal Projectile from Top of Tower", q: "A ball is thrown horizontally at 15 m s<sup>-1</sup> from top of a tower of height 45 m (g = 10 m s<sup>-2</sup>). Find (i) Time to hit ground, (ii) Distance from foot of tower, (iii) Final striking speed.", s: "Height h = 45 m, initial vertical velocity u<sub>y</sub> = 0, u<sub>x</sub> = 15 m/s.<br><br><b>(i) Time to hit ground:</b> h = 1/2 g t<sup>2</sup> ⇒ 45 = 5 t<sup>2</sup> ⇒ t<sup>2</sup> = 9 ⇒ <b>t = 3 seconds</b>.<br><b>(ii) Horizontal distance:</b> x = u<sub>x</sub> × t = 15 × 3 = <b>45 metres</b>.<br><b>(iii) Striking speed:</b> v<sub>x</sub> = 15 m/s, v<sub>y</sub> = g t = 10(3) = 30 m/s.<br>Striking speed v = √(v<sub>x</sub><sup>2</sup> + v<sub>y</sub><sup>2</sup>) = √(15<sup>2</sup> + 30<sup>2</sup>) = √(225 + 900) = √1125 ≈ <b>33.54 m s<sup>-1</sup></b>." },
  { t: "Area & Slope Analysis of Complex v-t Graph", q: "A train starts from rest, accelerates at 2 m s<sup>-2</sup> for 10 s, runs at constant speed for 20 s, and retards at 1 m s<sup>-2</sup> to stop. Calculate total distance traveled.", s: "Phase 1 (Acceleration): u = 0, a = 2, t<sub>1</sub> = 10 s ⇒ Max speed v = a t<sub>1</sub> = 20 m/s.<br>Distance s<sub>1</sub> = 1/2 a t<sub>1</sub><sup>2</sup> = 1/2 (2)(100) = 100 m.<br>Phase 2 (Constant Speed): v = 20 m/s, t<sub>2</sub> = 20 s.<br>Distance s<sub>2</sub> = v × t<sub>2</sub> = 20 × 20 = 400 m.<br>Phase 3 (Retardation): v = 20 m/s, a = -1 m/s<sup>2</sup>, final v = 0 ⇒ t<sub>3</sub> = 20 / 1 = 20 s.<br>Distance s<sub>3</sub> = v<sup>2</sup> / (2 a) = 400 / 2 = 200 m.<br><br><b>Total Distance s = s<sub>1</sub> + s<sub>2</sub> + s<sub>3</sub> = 100 + 400 + 200 = 700 metres.</b>" },
  { t: "Dot and Cross Product Combined Identity Proof", q: "Prove Lagrange's identity for vectors: |A × B|<sup>2</sup> + (A · B)<sup>2</sup> = |A|<sup>2</sup> |B|<sup>2</sup>.", s: "LHS = |A × B|<sup>2</sup> + (A · B)<sup>2</sup>.<br>Substitute vector definitions:<br>|A × B|<sup>2</sup> = (|A||B| sin θ)<sup>2</sup> = |A|<sup>2</sup> |B|<sup>2</sup> sin<sup>2</sup> θ.<br>(A · B)<sup>2</sup> = (|A||B| cos θ)<sup>2</sup> = |A|<sup>2</sup> |B|<sup>2</sup> cos<sup>2</sup> θ.<br>LHS = |A|<sup>2</sup> |B|<sup>2</sup> (sin<sup>2</sup> θ + cos<sup>2</sup> θ).<br>Since sin<sup>2</sup> θ + cos<sup>2</sup> θ = 1:<br><b>LHS = |A|<sup>2</sup> |B|<sup>2</sup> = RHS. Proved!</b>" },
  { t: "Master Problem on Uniform Circular Motion", q: "A cyclist rides around a circular track of radius 50 m at speed 10 m s<sup>-1</sup>. Calculate (i) Angular velocity ω, (ii) Centripetal acceleration a<sub>c</sub>, (iii) Angle of banking required for safe turn without friction.", s: "Radius r = 50 m, speed v = 10 m/s, g = 9.8 m s<sup>-2</sup>.<br><br><b>(i) Angular Velocity ω:</b> ω = v / r = 10 / 50 = <b>0.2 rad s<sup>-1</sup></b>.<br><b>(ii) Centripetal Acceleration a<sub>c</sub>:</b> a<sub>c</sub> = v<sup>2</sup> / r = 100 / 50 = <b>2 m s<sup>-2</sup></b>.<br><b>(iii) Angle of Banking θ:</b> tan θ = v<sup>2</sup> / (r g) = 100 / (50 × 9.8) = 100 / 490 ≈ 0.204.<br><b>θ = tan<sup>-1</sup>(0.204) ≈ 11.5°</b>." }
];

las.forEach((item, idx) => {
  let qNo = idx + 86;
  solutionsHtml += solBox(qNo, item.t, item.q, item.s);
});

solutionsHtml += `</div>`;

console.log("Unit II (Kinematics) Solutions HTML generated successfully.");

// Construct final TS content string
const tsContent = `// Class 11 Physics Unit II: Kinematics (Motion in a Straight Line & Motion in a Plane)
// High-Level Reference Book Content & NCERT Solutions

export const c11Phy2HtmlOverview = ${JSON.stringify(overviewHtml)};

export const c11Phy2HtmlSolutions = ${JSON.stringify(solutionsHtml)};
`;

const outputPath = path.join(__dirname, '..', 'client', 'data', 'content', 'c11-phy-2.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log("Successfully wrote c11-phy-2.ts to " + outputPath);
