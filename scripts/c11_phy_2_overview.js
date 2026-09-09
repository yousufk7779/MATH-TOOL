const {
  themeColor,
  frac,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_2_helpers');

function buildOverview() {
  return `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: #CBD5E1; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Foundational Concepts &bull; Unit II: Kinematics (09 Marks)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">1. Frame of Reference:</b>
        <span style="color: #FFFFFF;">A coordinate coordinate system attached to an observer along with a clock, relative to which the position and motion of a body are measured.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">2. Instantaneous Velocity:</b>
        <span style="color: #FFFFFF;">The time rate of change of position at a specific instant of time, defined mathematically as the derivative v = lim(&Delta;t&rarr;0) &Delta;x/&Delta;t = dx/dt.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">3. Uniform Acceleration:</b>
        <span style="color: #FFFFFF;">Motion in which velocity changes by equal numerical amounts in equal intervals of time, however small these intervals may be (a = dv/dt = constant).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">4. Position & Displacement Vectors:</b>
        <span style="color: #FFFFFF;">Position vector r points from coordinate origin to point (x, y); displacement vector &Delta;r = r<sub>2</sub> - r<sub>1</sub> is the straight directed change in position.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">5. Unit Vector (Â):</b>
        <span style="color: #FFFFFF;">A vector of unit magnitude (|Â| = 1) pointing purely in the direction of vector A: Â = A / |A|, carrying zero physical units and dimensions.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">6. Scalar & Vector Products:</b>
        <span style="color: #FFFFFF;">Dot product A &bull; B = AB cos &theta; (scalar energy/work); Cross product A &times; B = AB sin &theta; n̂ (axial vector torque/rotational area).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">7. Projectile Motion:</b>
        <span style="color: #FFFFFF;">Two-dimensional curvilinear motion under constant vertical downward gravitational acceleration (g) and zero horizontal acceleration.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">8. Centripetal Acceleration:</b>
        <span style="color: #FFFFFF;">Inward radial acceleration a<sub>c</sub> = v<sup>2</sup>/r = &omega;<sup>2</sup>r responsible solely for continuously changing the direction of circular velocity.</span>
      </div>
    </div>
  </div>

  <!-- PART 1: MOTION IN A STRAIGHT LINE -->
  <div style="background: rgba(142, 45, 226, 0.1); border-left: 6px solid ${themeColor}; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #FFFFFF; margin: 0; font-size: 22px; font-weight: bold;">
      PART 1 &bull; MOTION IN A STRAIGHT LINE (RECTILINEAR KINEMATICS)
    </h2>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">
    1. Frame of Reference & Motion in a Straight Line
  </h2>

  <p><b>Kinematics</b> is the foundational branch of classical mechanics that investigates and describes the motion of physical bodies without reference to the forces causing that motion. A physical object is described as being in a state of <b>rest</b> if its spatial position coordinates relative to a designated observer remain completely invariant as time elapses. Conversely, a body is in a state of <b>motion</b> if its position coordinates change continuously with time.</p>

  <p>Crucially, rest and motion are not absolute states; they are purely <b>relative</b> concepts. A passenger seated inside a smoothly cruising high-speed train is at rest relative to fellow passengers and the train carriage, but simultaneously moving at 150 km/h relative to an observer standing beside the railway track on Earth. Furthermore, the Earth itself is revolving around the Sun at ~30 km/s, making absolute rest physically nonexistent.</p>

  ${defBox(
    "Frame of Reference",
    "A designated coordinate framework (typically a 3D Cartesian coordinate system with mutually perpendicular X, Y, and Z axes) linked to an observer and fitted with a synchronized timekeeping device (clock), relative to which the position, displacement, velocity, and acceleration of a moving body are observed and mathematically recorded.",
    "None (Mathematical Reference System)",
    "None"
  )}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Inertial vs Non-Inertial Frames of Reference</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">Inertial Frame of Reference:</b> A frame of reference in which Newton's First Law of Motion (Law of Inertia) holds strictly valid without fictitious forces. It is either completely stationary or moving with a uniform, non-accelerating velocity in a straight line (acceleration a<sub>frame</sub> = 0).</li>
    <li><b style="color: ${themeColor};">Non-Inertial (Accelerated) Frame of Reference:</b> A frame that is accelerating linearly or rotating relative to an inertial frame (a<sub>frame</sub> &ne; 0). In a non-inertial frame, Newton's laws can only be applied by introducing fictitious (pseudo) forces, such as the centrifugal force or Coriolis force.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Dimensional Classification of Motion</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">One-Dimensional Motion (Rectilinear Motion):</b> Motion of an object along a single straight line, where only one coordinate (e.g. x) changes with time (e.g. a car on a straight highway, a freely falling stone under gravity).</li>
    <li><b style="color: ${themeColor};">Two-Dimensional Motion (Motion in a Plane):</b> Motion where two coordinates (e.g. x and y) change simultaneously (e.g. a projectile fired at an angle, circular motion of a satellite, a billiard ball rolling across a table).</li>
    <li><b style="color: ${themeColor};">Three-Dimensional Motion (Motion in Space):</b> Motion where all three spatial coordinates (x, y, z) change concurrently (e.g. a flying kite, a meandering bird, random thermal motion of gas molecules).</li>
  </ul>

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    2. Elementary Concepts of Differentiation and Integration for Describing Motion
  </h2>

  <p>Classical kinematics relies fundamentally on the mathematical language of infinitesimal calculus developed by Sir Isaac Newton and Gottfried Wilhelm Leibniz. Because physical velocities and accelerations change continuously from instant to instant, discrete algebraic ratios are inadequate.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Differentiation: The Instantaneous Rate of Change</h3>
  <p>The derivative represents the limiting value of the average rate of change as the elapsed time interval &Delta;t shrinks infinitesimally toward zero:</p>

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">
    <b>v(t) = ${frac('dx', 'dt')} = \lim_{\Delta t \to 0} ${frac('&Delta;x', '&Delta;t')} &nbsp;&bull;&nbsp; a(t) = ${frac('dv', 'dt')} = ${frac('d<sup>2</sup>x', 'dt<sup>2</sup>')} = v ${frac('dv', 'dx')}</b>
  </div>

  <p><b>Key Differentiation Formulas for Kinematics:</b></p>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li>Power Rule: ${frac('d', 'dt')}(t<sup>n</sup>) = n t<sup>n-1</sup> (e.g., if x = 3t<sup>2</sup>, then v = dx/dt = 6t).</li>
    <li>Constant Rule: ${frac('d', 'dt')}(C) = 0$ (velocity of a stationary body is zero).</li>
    <li>Chain Rule: a = ${frac('dv', 'dt')} = ${frac('dv', 'dx')} &times; ${frac('dx', 'dt')} = \mathbf{v ${frac('dv', 'dx')}}$ (vital when acceleration is given as a function of position).</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Integration: The Continuous Summation & Area Under Curves</h3>
  <p>Integration is the inverse mathematical operation of differentiation. Physically, integration accumulates the continuous infinitesimal displacements or velocity increments over an extended time interval:</p>

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">
    <b>\Delta x = x<sub>2</sub> - x<sub>1</sub> = &int;<sub>t<sub>1</sub></sub><sup>t<sub>2</sub></sup> v(t) \, dt &nbsp;&bull;&nbsp; \Delta v = v<sub>2</sub> - v<sub>1</sub> = &int;<sub>t<sub>1</sub></sub><sup>t<sub>2</sub></sup> a(t) \, dt</b>
  </div>

  <p><b>Key Integration Formulas for Kinematics:</b></p>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li>Power Rule: &int; t<sup>n</sup> dt = ${frac('t<sup>n+1</sup>', 'n + 1')} + C \quad (n &ne; -1).</li>
    <li>Definite Integral: &int;<sub>0</sub><sup>t</sup> t dt = [${frac('t<sup>2</sup>', '2')}]<sub>0</sub><sup>t</sup> = ${frac('1', '2')} t<sup>2</sup>.</li>
  </ul>

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    3. Uniform & Non-Uniform Motion, Instantaneous Velocity & Speed
  </h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Distance vs Displacement</h3>
  <div style="overflow-x: auto; margin: 16px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.9); font-size: 14.5px;">
      <thead>
        <tr style="border-bottom: 2px solid ${themeColor};">
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Characteristic</th>
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Distance (Path Length)</th>
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Displacement (&Delta;x or &Delta;r)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Physical Nature</td>
          <td style="padding: 10px;">Scalar quantity. Total actual length of path traversed between initial and final points.</td>
          <td style="padding: 10px;">Vector quantity. Shortest straight directed distance pointing from initial to final position.</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Sign & Magnitude</td>
          <td style="padding: 10px;">Always positive (or zero for a body at rest). Distance &ge; 0.</td>
          <td style="padding: 10px;">Can be positive, negative, or zero depending on choice of coordinate direction.</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Closed Loop Path</td>
          <td style="padding: 10px;">Non-zero (e.g., in circular lap of radius r, distance = 2&pi;r).</td>
          <td style="padding: 10px;">Strictly zero when body returns to its starting point (&Delta;x = 0).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16px; color: #76FF03;">
    <b>Fundamental Invariance Inequality: &nbsp; \text{Distance} \ge |\text{Displacement}| &nbsp;&rArr;&nbsp; ${frac('\text{Distance}', '|\text{Displacement}|')} \ge 1</b>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Average vs Instantaneous Velocity and Speed</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">Average Speed:</b> Total path length divided by total elapsed time: v<sub>avg</sub> = Total Distance / Total Time.</li>
    <li><b style="color: ${themeColor};">Average Velocity:</b> Net displacement vector divided by total elapsed time: <b>v</b><sub>avg</sub> = &Delta;<b>x</b> / &Delta;t.</li>
    <li><b style="color: ${themeColor};">Instantaneous Speed:</b> The absolute magnitude of instantaneous velocity at a specific point in time: |v(t)| = |dx/dt|. A vehicle's speedometer measures instantaneous speed.</li>
  </ul>

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    4. Uniformly Accelerated Motion, Position-Time & Velocity-Time Graphs
  </h2>

  <p>Graphical representations provide instantaneous visual insights into kinematics. Two fundamental geometric theorems govern rectilinear graphs:</p>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">Theorem 1 (Slope Theorem):</b> The slope (tangent of angle, m = tan &theta; = dy/dx) of a position-time graph yields <b>Instantaneous Velocity</b> ($v = dx/dt$). The slope of a velocity-time graph yields <b>Instantaneous Acceleration</b> ($a = dv/dt$).</li>
    <li><b style="color: ${themeColor};">Theorem 2 (Area Theorem):</b> The area under a velocity-time graph bounded by the time axis represents <b>Net Displacement</b> ($\Delta x = \int v dt$). The area under an acceleration-time graph represents <b>Net Change in Velocity</b> ($\Delta v = \int a dt$).</li>
  </ul>

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    5. Relations for Uniformly Accelerated Motion (Graphical & Calculus Derivations)
  </h2>

  <p>For motion along a straight line under constant acceleration ($a = \text{constant}$), we derive the four master kinematic equations:</p>

  ${stepDerivationBox(
    "Derivation of v = u + a t (First Kinematic Equation)",
    [
      {
        name: "Definition of Acceleration",
        content: `By definition, instantaneous acceleration is $a = ${frac('dv', 'dt')}$.
          <br>Separating variables: $dv = a \, dt$.`
      },
      {
        name: "Integration with Boundary Limits",
        content: `At $t = 0$, velocity is the initial velocity $u$. At time $t$, velocity reaches final velocity $v$.
          <br>&int;<sub>u</sub><sup>v</sup> dv = &int;<sub>0</sub><sup>t</sup> a \, dt.
          <br>Since acceleration $a$ is constant, take it outside the integral:
          <br>[v]<sub>u</sub><sup>v</sup> = a &int;<sub>0</sub><sup>t</sup> dt \implies (v - u) = a [t]<sub>0</sub><sup>t</sup> = a (t - 0).`
      },
      {
        name: "Final Equation",
        content: `<div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold;">v = u + a t</div>`
      }
    ]
  )}

  ${stepDerivationBox(
    "Derivation of s = u t + ½ a t² (Second Kinematic Equation)",
    [
      {
        name: "Definition of Velocity",
        content: `By definition, instantaneous velocity is $v = ${frac('ds', 'dt')}$.
          <br>Separating variables: $ds = v \, dt$.`
      },
      {
        name: "Substitute First Equation of Motion",
        content: `Substitute $v = u + at$:
          <br>$ds = (u + at) \, dt = u \, dt + at \, dt$.`
      },
      {
        name: "Integration Across Limits",
        content: `At $t = 0$, position is initial position $s = 0$. At time $t$, position reaches displacement $s$.
          <br>&int;<sub>0</sub><sup>s</sup> ds = &int;<sub>0</sub><sup>t</sup> u \, dt + &int;<sub>0</sub><sup>t</sup> a t \, dt.
          <br>[s]<sub>0</sub><sup>s</sup> = u [t]<sub>0</sub><sup>t</sup> + a [${frac('t<sup>2</sup>', '2')}]<sub>0</sub><sup>t</sup>.`
      },
      {
        name: "Final Equation",
        content: `<div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold;">s = u t + ${frac('1', '2')} a t<sup>2</sup></div>`
      }
    ]
  )}

  ${stepDerivationBox(
    "Derivation of v² - u² = 2 a s (Third Kinematic Equation)",
    [
      {
        name: "Chain Rule for Acceleration",
        content: `Express acceleration via chain rule eliminating explicit time variable $t$:
          <br>$a = ${frac('dv', 'dt')} = ${frac('dv', 'ds')} \cdot ${frac('ds', 'dt')} = v ${frac('dv', 'ds')}$.`
      },
      {
        name: "Separate Variables",
        content: `Rearrange terms: $v \, dv = a \, ds$.`
      },
      {
        name: "Integrate with Limits",
        content: `At $s = 0$, velocity is $u$. At displacement $s$, velocity is $v$:
          <br>&int;<sub>u</sub><sup>v</sup> v \, dv = &int;<sub>0</sub><sup>s</sup> a \, ds.
          <br>[${frac('v<sup>2</sup>', '2')}]<sub>u</sub><sup>v</sup> = a [s]<sub>0</sub><sup>s</sup> \implies ${frac('v<sup>2</sup> - u<sup>2</sup>', '2')} = a s.`
      },
      {
        name: "Final Equation",
        content: `<div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold;">v<sup>2</sup> - u<sup>2</sup> = 2 a s &nbsp;&rArr;&nbsp; v<sup>2</sup> = u<sup>2</sup> + 2 a s</div>`
      }
    ]
  )}

  ${stepDerivationBox(
    "Distance Traversed in the n-th Second (s_n = u + a/2 (2n - 1))",
    [
      {
        name: "Conceptual Setup",
        content: `The distance covered specifically in the $n$-th second is the difference between displacement after $n$ seconds and displacement after $(n-1)$ seconds:
          <br>$s_n = s(n) - s(n-1)$.`
      },
      {
        name: "Algebraic Expansion",
        content: `$s(n) = u n + ${frac('1', '2')} a n^2$
          <br>$s(n-1) = u (n - 1) + ${frac('1', '2')} a (n - 1)^2 = u n - u + ${frac('1', '2')} a (n^2 - 2n + 1)$.`
      },
      {
        name: "Subtract Terms",
        content: `$s_n = \left[u n + ${frac('1', '2')} a n^2\right] - \left[u n - u + ${frac('1', '2')} a n^2 - a n + ${frac('1', '2')} a\right]$
          <br>$s_n = u n + ${frac('1', '2')} a n^2 - u n + u - ${frac('1', '2')} a n^2 + a n - ${frac('1', '2')} a$
          <br>$s_n = u + a n - ${frac('1', '2')} a = u + ${frac('a', '2')} (2n - 1)$.`
      },
      {
        name: "Final Equation",
        content: `<div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold;">s_n = u + ${frac('a', '2')} (2n - 1)</div>`
      }
    ]
  )}

  <!-- PART 2: MOTION IN A PLANE -->
  <div style="background: rgba(142, 45, 226, 0.1); border-left: 6px solid ${themeColor}; padding: 12px 16px; margin: 40px 0 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #FFFFFF; margin: 0; font-size: 22px; font-weight: bold;">
      PART 2 &bull; MOTION IN A PLANE (VECTORS, 2D PROJECTILE & CIRCULAR MOTION)
    </h2>
  </div>

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">
    6. Scalar & Vector Quantities, Position & Displacement Vectors
  </h2>

  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">Scalar Quantities:</b> Physical quantities possessing magnitude and appropriate physical units, but completely devoid of spatial direction (e.g. Mass, Length, Time, Work, Energy, Temperature, Electric Current). They obey ordinary scalar algebra ($2 \text{ kg} + 3 \text{ kg} = 5 \text{ kg}$).</li>
    <li><b style="color: ${themeColor};">Vector Quantities:</b> Physical quantities that possess magnitude, a definite spatial direction, and <b>must strictly obey the Triangle/Parallelogram Laws of Vector Addition</b> (e.g. Displacement, Velocity, Acceleration, Force, Momentum, Torque).</li>
  </ul>

  ${examTrapBox(
    "Electric Current Has Direction But is a SCALAR!",
    "Electric current flows along a specific wire direction, yet it is strictly a <b>scalar</b> quantity. This is because electric current does NOT obey the vector laws of addition. Current entering a junction obeys Kirchhoff's Junction Rule ($I_1 + I_2 = I_3$) algebraically, completely independent of the spatial geometric angle between the wires."
  )}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    7. Vector Addition Laws & Analytical Formulation
  </h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Triangle Law of Vector Addition</h3>
  <p>If two vectors $\vec{A}$ and $\vec{B}$ are represented in magnitude and direction by two consecutive sides of a triangle taken in the same cyclic order (head to tail), then their resultant $\vec{R} = \vec{A} + \vec{B}$ is represented in magnitude and direction by the third closing side of the triangle taken in the reverse order (tail of first to head of second).</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Parallelogram Law of Vector Addition (Analytical Proof)</h3>
  <p>If two vectors $\vec{P}$ and $\vec{Q}$ acting simultaneously at a point are represented in magnitude and direction by the two adjacent sides of a parallelogram drawn from a common point, their resultant $\vec{R} = \vec{P} + \vec{Q}$ is represented in magnitude and direction by the diagonal passing through that common intersection point.</p>

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">
    <b>R = \sqrt{P<sup>2</sup> + Q<sup>2</sup> + 2 P Q \cos \theta} &nbsp;&bull;&nbsp; \tan \alpha = ${frac('Q \sin \theta', 'P + Q \cos \theta')}</b>
  </div>

  <p><b>Special Geometric Boundary Cases:</b></p>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b>Parallel Vectors (&theta; = 0&deg;):</b> $\cos 0^\circ = 1 \implies R = \sqrt{P^2 + Q^2 + 2PQ} = \mathbf{P + Q}$ (Maximum possible resultant magnitude, $\alpha = 0^\circ$).</li>
    <li><b>Antiparallel Vectors (&theta; = 180&deg;):</b> $\cos 180^\circ = -1 \implies R = \sqrt{P^2 + Q^2 - 2PQ} = \mathbf{|P - Q|}$ (Minimum possible resultant magnitude).</li>
    <li><b>Orthogonal Vectors (&theta; = 90&deg;):</b> $\cos 90^\circ = 0 \implies \mathbf{R = \sqrt{P^2 + Q^2}}$ and $\tan \alpha = Q / P$.</li>
  </ul>

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    8. Unit Vectors & Rectangular Components in 2D and 3D
  </h2>

  <p>A <b>Unit Vector</b> $\hat{A}$ has a magnitude of exactly unity ($|\hat{A}| = 1$) and indicates direction purely: $\mathbf{\hat{A} = \vec{A} / |\vec{A}|}$. In 3D Cartesian coordinates, orthogonal unit vectors along the X, Y, and Z axes are designated as $\mathbf{\hat{i}, \hat{j}, \hat{k}}$ respectively.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Resolution of a Vector in a Plane (2D)</h3>
  <p>Any vector $\vec{A}$ lying in the XY-plane making an angle $\theta$ with the X-axis can be resolved into two mutually perpendicular rectangular components:</p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">
    <b>\vec{A} = A_x \hat{i} + A_y \hat{j} = (A \cos \theta) \hat{i} + (A \sin \theta) \hat{j} &nbsp;&bull;&nbsp; |\vec{A}| = \sqrt{A_x<sup>2</sup> + A_y<sup>2</sup>} &nbsp;&bull;&nbsp; \tan \theta = ${frac('A_y', 'A_x')}</b>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Resolution in 3D & Direction Cosines</h3>
  <p>In 3D space: $\mathbf{\vec{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}}$ with magnitude $\mathbf{|\vec{A}| = \sqrt{A_x^2 + A_y^2 + A_z^2}}$. If $\vec{A}$ makes angles $\alpha, \beta, \gamma$ with the positive X, Y, and Z axes respectively, its <b>direction cosines</b> are $l = \cos \alpha = A_x/A, m = \cos \beta = A_y/A, n = \cos \gamma = A_z/A$, satisfying the fundamental identity:</p>
  <div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold; margin: 8px 0;">
    \cos<sup>2</sup> \alpha + \cos<sup>2</sup> \beta + \cos<sup>2</sup> \gamma = l<sup>2</sup> + m<sup>2</sup> + n<sup>2</sup> = 1
  </div>

  <!-- SECTION 9 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    9. Scalar (Dot) Product and Vector (Cross) Product
  </h2>

  <div style="overflow-x: auto; margin: 18px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.9); font-size: 14px;">
      <thead>
        <tr style="border-bottom: 2px solid ${themeColor};">
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Property</th>
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Scalar (Dot) Product &bull; A &bull; B</th>
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Vector (Cross) Product &bull; A &times; B</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Mathematical Definition</td>
          <td style="padding: 10px;">$\vec{A} \cdot \vec{B} = A B \cos \theta$ (a pure scalar number).</td>
          <td style="padding: 10px;">$\vec{A} \times \vec{B} = (A B \sin \theta) \hat{n}$ (an axial vector normal to plane).</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Commutative Law</td>
          <td style="padding: 10px;">Commutative: $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$.</td>
          <td style="padding: 10px;">Anti-commutative: $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$.</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Self Product</td>
          <td style="padding: 10px;">$\vec{A} \cdot \vec{A} = A^2$ (square of magnitude).</td>
          <td style="padding: 10px;">$\vec{A} \times \vec{A} = \vec{0}$ (null vector).</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Orthogonal Vectors (&theta; = 90&deg;)</td>
          <td style="padding: 10px;">$\vec{A} \cdot \vec{B} = 0$ (Zero). Condition of orthogonality!</td>
          <td style="padding: 10px;">$|\vec{A} \times \vec{B}| = A B$ (Maximum magnitude).</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Unit Vectors Relations</td>
          <td style="padding: 10px;">$\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1$<br>$\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0$.</td>
          <td style="padding: 10px;">$\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = \vec{0}$<br>$\hat{i} \times \hat{j} = \hat{k}, \; \hat{j} \times \hat{k} = \hat{i}, \; \hat{k} \times \hat{i} = \hat{j}$.</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Determinant Form in Components</td>
          <td style="padding: 10px;">$\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z$.</td>
          <td style="padding: 10px;">$\vec{A} \times \vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 10 & 11 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    10 &bull; Projectile Motion in a Vertical Plane
  </h2>

  <p>A <b>projectile</b> is any body projected into space with an initial velocity $\vec{u}$ that moves under the sole influence of gravity (neglecting air resistance). By Galileo's Principle of Independence of Perpendicular Motions, horizontal motion and vertical motion proceed simultaneously without affecting each other:</p>

  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">Horizontal Motion (X-Axis):</b> Acceleration $a_x = 0$. Velocity remains constant: $u_x = u \cos \theta \implies x = (u \cos \theta) t$.</li>
    <li><b style="color: ${themeColor};">Vertical Motion (Y-Axis):</b> Acceleration $a_y = -g$. Initial velocity $u_y = u \sin \theta \implies y = (u \sin \theta) t - \frac{1}{2} g t^2$.</li>
  </ul>

  ${stepDerivationBox(
    "Full Derivation of Projectile Motion Formulas (Trajectory, Time, Height, Range)",
    [
      {
        name: "Equation of Trajectory (Path of Projectile)",
        content: `From horizontal motion: $t = ${frac('x', 'u \cos \theta')}$.
          <br>Substitute $t$ into vertical displacement equation:
          <br>$y = (u \sin \theta) \left(${frac('x', 'u \cos \theta')}\right) - ${frac('1', '2')} g \left(${frac('x', 'u \cos \theta')}\right)^2$
          <br>$y = x \left(${frac('\sin \theta', '\cos \theta')}\right) - ${frac('g x<sup>2</sup>', '2 u<sup>2</sup> \cos<sup>2</sup> \theta')} = \mathbf{x \tan \theta - ${frac('g x<sup>2</sup>', '2 u<sup>2</sup> \cos<sup>2</sup> \theta')}}$.
          <br>This is in standard quadratic form $y = Ax - Bx^2$, proving the trajectory is a <b>Parabola</b>.`
      },
      {
        name: "Time of Flight (T)",
        content: `At the end of flight, vertical displacement $y = 0$:
          <br>$0 = (u \sin \theta) T - ${frac('1', '2')} g T^2 \implies T \left(u \sin \theta - ${frac('1', '2')} g T\right) = 0$.
          <br>Since $T \ne 0$: ${frac('1', '2')} g T = u \sin \theta \implies \mathbf{T = ${frac('2 u \sin \theta', 'g')}}$.
          <br>(Time of ascent $t_a = \frac{u \sin \theta}{g} = \text{Time of descent } t_d$).`
      },
      {
        name: "Maximum Height Attained (H)",
        content: `At maximum height peak, vertical velocity momentarily vanishes: $v_y = 0$.
          <br>Using $v_y^2 = u_y^2 - 2 g H$:
          <br>$0 = (u \sin \theta)^2 - 2 g H \implies 2 g H = u^2 \sin^2 \theta \implies \mathbf{H = ${frac('u<sup>2</sup> \sin<sup>2</sup> \theta', '2 g')}}$.`
      },
      {
        name: "Horizontal Range (R) & Maximum Range Condition",
        content: `Horizontal range is horizontal distance covered during total time of flight $T$:
          <br>$R = u_x \times T = (u \cos \theta) \times \left(${frac('2 u \sin \theta', 'g')}\right) = ${frac('u<sup>2</sup> (2 \sin \theta \cos \theta)', 'g')}$.
          <br>Using trigonometric identity $2 \sin \theta \cos \theta = \sin 2\theta$:
          <div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold; margin: 6px 0;">
            R = ${frac('u<sup>2</sup> \sin 2\theta', 'g')}
          </div>
          &bull; <b>Maximum Range:</b> $R$ is maximum when $\sin 2\theta = 1 \implies 2\theta = 90^\circ \implies \mathbf{\theta = 45^\circ}$.
          <br>$\mathbf{R_{\max} = ${frac('u<sup>2</sup>', 'g')} = 2 H_{\max}}$ (Maximum range is twice the maximum height!).<br>
          &bull; <b>Two Angles of Projection for Same Range:</b> For a given speed $u$, the range is identical for complementary angles $\mathbf{\theta}$ and $\mathbf{(90^\circ - \theta)}$ because $\sin(2(90^\circ - \theta)) = \sin(180^\circ - 2\theta) = \sin 2\theta$.`
      }
    ]
  )}

  <!-- SECTION 12 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    12. Uniform Circular Motion & Centripetal Acceleration
  </h2>

  <p>When a particle moves along a circular trajectory of radius $r$ with constant linear speed $v$, its motion is termed <b>Uniform Circular Motion (UCM)</b>. Even though speed is constant, the velocity vector changes direction continuously at every infinitesimal point, making UCM a strictly <b>accelerated motion</b>.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Angular Kinematics Relations</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">Angular Displacement (&theta;):</b> $\theta = s / r \text{ (radians)}$.</li>
    <li><b style="color: ${themeColor};">Angular Velocity (&omega;):</b> $\omega = \lim_{\Delta t \to 0} \frac{\Delta \theta}{\Delta t} = \frac{d\theta}{dt} = \frac{2\pi}{T} = 2\pi \nu \text{ (rad s}^{-1}\text{)}$.</li>
    <li><b style="color: ${themeColor};">Relation Between Linear & Angular Velocity:</b> $\mathbf{v = r \omega} \quad (\vec{v} = \vec{\omega} \times \vec{r})$.</li>
  </ul>

  ${defBox(
    "Centripetal Acceleration (a_c)",
    "The radial acceleration experienced by a body executing circular motion, directed radially inward toward the instantaneous center of curvature, which acts exclusively to alter the direction of velocity without changing its magnitude.",
    "m s<sup>-2</sup>",
    "[M<sup>0</sup> L<sup>1</sup> T<sup>-2</sup>]"
  )}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(142, 45, 226, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #76FF03; white-space: nowrap; overflow-x: auto;">
    <b>a<sub>c</sub> = ${frac('v<sup>2</sup>', 'r')} = \omega<sup>2</sup> r = 4\pi<sup>2</sup> \nu<sup>2</sup> r = ${frac('4\pi<sup>2</sup> r', 'T<sup>2</sup>')} &nbsp;&bull;&nbsp; \vec{a}_c = -\omega<sup>2</sup> \vec{r}</b>
  </div>

  <!-- MASTER REVISION FORMULA CHEAT SHEET -->
  <div style="background: rgba(142, 45, 226, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Master Revision Formula Cheat Sheet</h2>
    <p class="text-center" style="color: #CBD5E1; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Quick Reference Formulas & Kinematic Laws &bull; Unit II: Kinematics</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Rectilinear Equations:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $v = u + a t$<br>
          $s = u t + ${frac('1', '2')} a t^2$<br>
          $v^2 - u^2 = 2 a s$<br>
          $s_n = u + ${frac('a', '2')} (2n - 1)$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Vector Resultant & Direction:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $R = \sqrt{P^2 + Q^2 + 2 P Q \cos \theta}$<br>
          $\tan \alpha = ${frac('Q \sin \theta', 'P + Q \cos \theta')}$<br>
          $|\vec{A}| = \sqrt{A_x^2 + A_y^2 + A_z^2}$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Vector Products:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\vec{A} \cdot \vec{B} = A B \cos \theta = A_x B_x + A_y B_y + A_z B_z$<br>
          $\vec{A} \times \vec{B} = (A B \sin \theta) \hat{n}$<br>
          $\cos \theta = ${frac('\vec{A} \cdot \vec{B}', 'A B')}$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Projectile Trajectory & Time:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $y = x \tan \theta - ${frac('g x^2', '2 u^2 \cos^2 \theta')}$<br>
          Time of Flight: $T = ${frac('2 u \sin \theta', 'g')}$<br>
          Time to Peak: $t_a = ${frac('u \sin \theta', 'g')}$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Projectile Height & Range:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Max Height: $H = ${frac('u^2 \sin^2 \theta', '2 g')}$<br>
          Horizontal Range: $R = ${frac('u^2 \sin 2\theta', 'g')}$<br>
          $R_{\max} = ${frac('u^2', 'g')} \quad (\theta = 45^\circ)$<br>
          $R(\theta) = R(90^\circ - \theta)$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Uniform Circular Motion:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Linear Speed: $v = r \omega = 2\pi r \nu = ${frac('2\pi r', 'T')}$<br>
          Centripetal Accel: $a_c = ${frac('v^2', 'r')} = \omega^2 r$<br>
          Tangential Accel: $a_t = r \alpha = r \left(${frac('d\omega', 'dt')}\right)$
        </span>
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
