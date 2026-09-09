const {
  themeColor,
  frac,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_4_helpers');

function buildOverview() {
  return `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- CHAPTER TITLE BANNER -->
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h1 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 24px; font-weight: bold; text-align: center !important;">
      Unit IV: Work, Energy and Power (06 Marks)
    </h1>
    <p style="color: #CBD5E1; margin: 0; font-size: 15px; text-align: center !important;">
      Comprehensive Reference Textbook Guide &bull; JKBOSE / CBSE Official Syllabus Alignment
    </p>
  </div>

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 10px; padding: 16px; margin-bottom: 25px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">
      ⚡ Quick Glossary & Fundamental Operational Quantities
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Work (W):</b> Scalar product of force and displacement; $W = \vec{F} \cdot \vec{s} = F s \cos\theta$. SI Unit: <b>Joule (J)</b> &bull; Dimensions: <b>[M L<sup>2</sup> T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Kinetic Energy (K):</b> Energy possessed by virtue of translational velocity; $K = \frac{1}{2}mv^2 = \frac{p^2}{2m}$. SI Unit: <b>Joule (J)</b> &bull; Dimensions: <b>[M L<sup>2</sup> T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Power (P):</b> Time rate of doing mechanical work; $P = \frac{dW}{dt} = \vec{F} \cdot \vec{v}$. SI Unit: <b>Watt (W = J s<sup>-1</sup>)</b> &bull; Dimensions: <b>[M L<sup>2</sup> T<sup>-3</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Restitution (e):</b> Ratio of relative speed of separation to approach; $e = \frac{v_2 - v_1}{u_1 - u_2}$. <b>Dimensionless & Unitless [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]</b>.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    1. Work Done by a Constant Force & a Variable Force
  </h2>
  <p>
    In everyday language, the term "work" is applied loosely to any mental or physical exertion—such as reading a textbook, standing holding a heavy briefcase, or pushing against a concrete wall. However, in scientific physics, <b>work has a rigorous operational definition</b>. Work is said to be performed only when an applied force succeeds in producing a spatial displacement of the body along or opposite to the line of action of the force.
  </p>

  ${defBox(
    "Mechanical Work Done (W)",
    "Work done by a constant force acting on a body is defined as the scalar (dot) product of the force vector and the displacement vector.",
    "Joule (J = N m = kg m<sup>2</sup> s<sup>-2</sup>)",
    "[M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    W = \vec{F} \cdot \vec{s} = F s \cos\theta
  </div>
  <p>
    where $F = |\vec{F}|$ is the magnitude of the force, $s = |\vec{s}|$ is the magnitude of displacement, and $\theta$ is the angle included between the force and displacement vectors ($0 \le \theta \le \pi$).
  </p>

  <p>
    <b>Classification of Work Done:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. Positive Work ($0^\circ \le \theta < 90^\circ$):</b> When the force vector has a component in the direction of displacement ($\cos\theta > 0$). <i>Examples:</i> Work done by gravity on a freely falling stone ($\theta = 0^\circ$); work done by an engine pulling a train along a straight horizontal track.</li>
    <li><b style="color: ${themeColor};">2. Negative Work ($90^\circ < \theta \le 180^\circ$):</b> When the force vector opposes the direction of displacement ($\cos\theta < 0$). <i>Examples:</i> Work done by friction on a braking car ($\theta = 180^\circ, W = -f s$); work done by gravity on a ball thrown vertically upwards ($\theta = 180^\circ, W = -mgh$).</li>
    <li><b style="color: ${themeColor};">3. Zero Work ($W = 0$):</b> Work vanishes under any of the following three distinct physical conditions:
      <ul>
        <li>Displacement is zero ($s = 0$): A person pushing against a stationary brick wall performs zero work, despite experiencing muscular fatigue.</li>
        <li>Force is zero ($F = 0$): An isolated particle gliding through deep interstellar space at constant velocity performs zero work.</li>
        <li>Force is strictly perpendicular to displacement ($\theta = 90^\circ, \cos 90^\circ = 0$): A coolie carrying a heavy luggage load on his head while walking along a horizontal railway platform does zero work against gravity because the downward gravitational force $mg$ is at $90^\circ$ to horizontal displacement. Similarly, the central gravitational pull of Earth on an orbiting satellite in a circular orbit does zero work.</li>
      </ul>
    </li>
  </ul>

  <p>
    <b>Work Done by a Variable Force:</b><br>
    In real physical systems, forces rarely remain constant; they vary continuously with position (such as a stretching spring, gravitational pull across astronomical distances, or electrostatic repulsion).<br>
    To calculate work done by a variable one-dimensional force $F(x)$, we subdivide the total displacement from $x_1$ to $x_2$ into an infinite number of infinitesimal steps $dx$. Over each tiny step, the force can be treated as effectively constant. The infinitesimal work is $dW = F(x) \, dx$.
  </p>

  ${stepDerivationBox(
    "Calculus Integration for Variable Force",
    [
      {
        name: "Infinitesimal Work Element",
        content: `For an infinitesimal displacement $dx$, work is $dW = F(x) \, dx$.`
      },
      {
        name: "Definite Integral Formulation",
        content: `Total work done as position changes from $x_1$ to $x_2$ is the definite integral:
          <br><div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold; margin: 6px 0;">
            W = \int_{x_1}^{x_2} F(x) \, dx
          </div>`
      },
      {
        name: "Geometric Area Interpretation",
        content: `The definite integral $\\int_{x_1}^{x_2} F(x) dx$ represents the <b>geometric area under the Force-Displacement ($F-x$) curve</b> bounded by the displacement axis between limits $x_1$ and $x_2$.`
      },
      {
        name: "General Three-Dimensional Form",
        content: `In 3D Cartesian coordinates:
          <br>$W = \int_{\vec{r}_1}^{\vec{r}_2} \vec{F} \cdot d\vec{r} = \int_{x_1}^{x_2} F_x \, dx + \int_{y_1}^{y_2} F_y \, dy + \int_{z_1}^{z_2} F_z \, dz$.`
      }
    ]
  )}

  <p>
    <b>Units of Work & Energy:</b><br>
    &bull; <b>SI Absolute Unit:</b> Joule (J). $1\text{ J} = 1\text{ N} \times 1\text{ m} = 1\text{ kg m}^2\text{ s}^{-2}$.<br>
    &bull; <b>CGS Unit:</b> Erg. $1\text{ erg} = 1\text{ dyne} \times 1\text{ cm} = 1\text{ g cm}^2\text{ s}^{-2}$.<br>
    &bull; <b>Conversion:</b> $1\text{ J} = (10^5\text{ dynes}) \times (10^2\text{ cm}) = \mathbf{10^7\text{ erg}}$.<br>
    &bull; <b>Atomic Unit:</b> Electron-Volt (eV). $1\text{ eV} = 1.602 \times 10^{-19}\text{ J}$.<br>
    &bull; <b>Commercial Unit:</b> Kilowatt-hour (kWh). $1\text{ kWh} = (1000\text{ W}) \times (3600\text{ s}) = \mathbf{3.6 \times 10^6\text{ J} = 3.6\text{ MJ}}$.
  </p>

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    2. Kinetic Energy & The Work-Energy Theorem
  </h2>
  <p>
    <b>Kinetic Energy ($K$)</b> is the energy possessed by an object by virtue of its translational motion. A bullet fired from a rifle, a blowing gale of wind turning a turbine, or a rushing river torrent all perform mechanical work by virtue of their velocity.
  </p>

  ${defBox(
    "Kinetic Energy (K)",
    "The kinetic energy of a body of mass m moving with velocity v is defined as the total mechanical work required to accelerate the body from a state of rest to that velocity.",
    "Joule (J)",
    "[M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    K = \frac{1}{2} m v^2 = \frac{1}{2} m (\vec{v} \cdot \vec{v})
  </div>

  <p>
    <b>Relation Between Kinetic Energy and Linear Momentum:</b><br>
    Since momentum magnitude is $p = mv$, multiplying numerator and denominator by $m$ gives:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 198, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16.5px; color: #80DEEA;">
    <b>K = ${frac('p^2', '2 m')} \quad \Longleftrightarrow \quad p = \sqrt{2 m K}</b>
  </div>

  ${defBox(
    "The Work-Energy Theorem",
    "The total net mechanical work done by all forces (conservative, non-conservative, internal, and external) acting on a body is identically equal to the net change in its kinetic energy.",
    "Joule (J)",
    "[M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    W_{\text{net}} = K_f - K_i = \Delta K = \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2
  </div>

  ${stepDerivationBox(
    "Proof of Work-Energy Theorem for a Variable Force (Calculus Method)",
    [
      {
        name: "Differential Work Expression",
        content: `By definition, the work done in displacement $dx$ is: $dW = F \, dx$.`
      },
      {
        name: "Substitute Newton's Second Law",
        content: `Substitute $F = m a = m \, ${frac('dv', 'dt')}$:
          <br>$dW = m \, ${frac('dv', 'dt')} \, dx = m \, ${frac('dx', 'dt')} \, dv$.`
      },
      {
        name: "Velocity Identity",
        content: `Since instantaneous velocity is $v = ${frac('dx', 'dt')}$, we have:
          <br>$dW = m v \, dv$.`
      },
      {
        name: "Integration Between Velocity Limits",
        content: `Integrate both sides from initial velocity $v_i$ to final velocity $v_f$:
          <br>$W = \int dW = \int_{v_i}^{v_f} m v \, dv = m \left[ ${frac('v^2', '2')} \right]_{v_i}^{v_f} = \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2$.`
      },
      {
        name: "Final Conclusion",
        content: `<div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold;">
          W_{\\text{net}} = K_f - K_i = \Delta K
        </div>
        <i>This proves that the work done by a variable force equals the exact change in kinetic energy.</i>`
      }
    ]
  )}

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    3. Power & Its Operational Formulations
  </h2>
  <p>
    In engineering, it is not merely the total work done that matters, but <b>how rapidly that work is accomplished</b>. A construction crane lifts a metric ton of concrete to the tenth floor of a building in 30 seconds, whereas an individual laborer carrying small buckets takes two full days to perform the exact same mechanical work ($mgh$). The crane possesses vastly higher <b>power</b>.
  </p>

  ${defBox(
    "Power (P)",
    "Power is defined as the time rate of doing mechanical work or the rate at which energy is transferred or transformed.",
    "Watt (W = J s<sup>-1</sup> = kg m<sup>2</sup> s<sup>-3</sup>)",
    "[M<sup>1</sup> L<sup>2</sup> T<sup>-3</sup>]"
  )}

  <p>
    &bull; <b>Average Power ($P_{\text{avg}}$):</b> Ratio of total work $\Delta W$ to total elapsed time $\Delta t$:
    <br><span style="color: #80DEEA; font-weight: bold;">P_{\text{avg}} = ${frac('\Delta W', '\Delta t')}</span>
  </p>
  <p>
    &bull; <b>Instantaneous Power ($P$):</b> The limiting value of average power as time interval approaches zero:
    <br><span style="color: #76FF03; font-weight: bold;">P = \lim_{\Delta t \to 0} ${frac('\Delta W', '\Delta t')} = ${frac('dW', 'dt')}</span>
  </p>
  <p>
    Substituting $dW = \vec{F} \cdot d\vec{r}$:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 198, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16.5px; color: #76FF03;">
    <b>P = \vec{F} \cdot ${frac('d\vec{r}', 'dt')} = \vec{F} \cdot \vec{v} = F v \cos\theta</b>
  </div>

  <p>
    <b>Practical Units of Power:</b><br>
    &bull; <b>Kilowatt (kW):</b> $1\text{ kW} = 10^3\text{ W}$.<br>
    &bull; <b>Megawatt (MW):</b> $1\text{ MW} = 10^6\text{ W}$.<br>
    &bull; <b>Horsepower (hp):</b> Imperial unit used for automobile and industrial electric motors: <b>$1\text{ hp} = 746\text{ Watts}$</b>.
  </p>

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    4. Notion of Potential Energy & Conservative Gradient
  </h2>
  <p>
    <b>Potential Energy ($U$)</b> is the stored energy possessed by a physical system by virtue of its position, spatial configuration, or state of strain within a field of force. Unlike kinetic energy, which belongs to a single moving particle, potential energy is fundamentally a <b>property of a system of two or more interacting bodies</b>.
  </p>

  ${defBox(
    "Potential Energy (U)",
    "The potential energy of a body at any position is defined as the negative of the work done by the conservative internal force in displacing the body from a chosen standard reference position (where U = 0) to that position.",
    "Joule (J)",
    "[M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    \Delta U = U(x) - U(x_0) = -W_{\text{conservative}} = -\int_{x_0}^x F_{\text{cons}}(x') \, dx'
  </div>

  <p>
    <b>Fundamental Relation Between Conservative Force and Potential Energy:</b><br>
    Differentiating both sides of $\Delta U = -\int F dx$ with respect to position $x$ yields the master differential identity:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 198, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16.5px; color: #76FF03;">
    <b>F(x) = -${frac('dU', 'dx')} \quad \Longleftrightarrow \quad \vec{F} = -\nabla U = -\left( ${frac('\partial U', '\partial x')}\hat{i} + ${frac('\partial U', '\partial y')}\hat{j} + ${frac('\partial U', '\partial z')}\hat{k} \right)</b>
  </div>
  <p>
    <i>Physical Insight: A conservative force always points in the direction in which potential energy decreases most rapidly (downhill on the potential energy curve).</i>
  </p>

  <p>
    <b>Gravitational Potential Energy Near Earth's Surface:</b><br>
    To raise a body of mass $m$ vertically through height $h$ at constant speed against gravity ($\vec{F}_g = -mg\hat{j}$):<br>
    $W_{\text{ext}} = \int_0^h mg \, dy = mgh$.<br>
    Taking the ground level as standard reference datum ($U = 0$ at $y = 0$):
  </p>
  <div style="text-align: center; color: #80DEEA; font-size: 16px; font-weight: bold; margin: 8px 0;">
    U(h) = mgh
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    5. Potential Energy of a Stretched or Compressed Spring
  </h2>
  <p>
    Consider an ideal, massless helical spring fixed at one end to a rigid wall and attached to a block of mass $m$ resting on a smooth horizontal surface. When the spring is stretched or compressed by displacement $x$ from its natural unstrained equilibrium position ($x = 0$), it exerts an internal elastic restoring force described by <b>Hooke's Law</b>:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 10px 0;">
    F_s = -k x
  </div>
  <p>
    where $k$ is the <b>spring constant (stiffness constant)</b> having SI unit $\text{N m}^{-1}$ and dimensions $[M^1 T^{-2}]$. The negative sign indicates that the restoring force always opposes the displacement, pointing back toward the equilibrium center.
  </p>

  ${stepDerivationBox(
    "Derivation of Elastic Potential Energy of a Spring",
    [
      {
        name: "External Force Required",
        content: `To slowly stretch the spring without accelerating the block, the external applied force must balance the restoring force at every instant:
          <br>$F_{\\text{ext}} = -F_s = -(-kx) = +kx$.`
      },
      {
        name: "Infinitesimal Work",
        content: `Work done by the external pulling agent in causing an additional elongation $dx$ is:
          <br>$dW_{\\text{ext}} = F_{\\text{ext}} \, dx = kx \, dx$.`
      },
      {
        name: "Integration Across Elongation Limits",
        content: `Total work done in stretching the spring from unstrained state ($x = 0$) to final elongation $x$:
          <br>$W_{\\text{ext}} = \int_0^x kx' \, dx' = k \left[ ${frac('x\'^2', '2')} \right]_0^x = \frac{1}{2} k x^2$.`
      },
      {
        name: "Potential Energy Formula",
        content: `By definition, this external work is stored entirely as internal elastic strain potential energy:
          <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin-top: 6px;">
            U_s = \frac{1}{2} k x^2
          </div>`
      }
    ]
  )}

  <p>
    <b>Work Done by Spring Force ($W_s$):</b><br>
    $W_s = \int_{x_i}^{x_f} (-kx) dx = -\frac{1}{2}k(x_f^2 - x_i^2) = -(U_f - U_i) = -\Delta U_s$.<br>
    Notice that the work done by the spring force depends exclusively on initial and final elongations, proving that <b>the ideal spring force is strictly conservative</b>.
  </p>

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    6. Conservative vs Non-Conservative Forces & Conservation of Energy
  </h2>
  <p>
    Forces in nature are fundamentally divided into two major thermodynamic classes based on the path-dependence of the work they perform:
  </p>

  ${defBox(
    "Conservative Force",
    "A force is said to be conservative if the work done by or against it in moving a particle from one position to another depends exclusively on the initial and final endpoints and is completely independent of the path taken; equivalently, the work done in traversing any closed loop is identically zero.",
    "—",
    "—"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold; margin: 10px 0;">
    \oint \vec{F}_{\text{cons}} \cdot d\vec{r} = 0
  </div>
  <p>
    <i>Key Examples of Conservative Forces:</i> Gravitational force, Electrostatic Coulomb force, Ideal spring restoring force, Magnetic force (on static charges).
  </p>

  ${defBox(
    "Non-Conservative Force",
    "A force is non-conservative if the work done by it depends explicitly on the specific trajectory or path traversed between two points; over a closed path, net work done is non-zero, and mechanical energy is irreversibly dissipated into heat, sound, or light.",
    "—",
    "—"
  )}

  <div style="text-align: center; color: #FF8A65; font-size: 16.5px; font-weight: bold; margin: 10px 0;">
    \oint \vec{F}_{\text{non-cons}} \cdot d\vec{r} \ne 0
  </div>
  <p>
    <i>Key Examples of Non-Conservative Forces:</i> Friction, Viscous drag in fluids, Air resistance, Inelastic damping forces.
  </p>

  <!-- COMPARISON TABLE -->
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.7); font-size: 14px; border: 1px solid rgba(0, 198, 255, 0.3);">
      <thead>
        <tr style="background: rgba(0, 198, 255, 0.15); border-bottom: 2px solid ${themeColor};">
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Criterion</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Conservative Force</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Non-Conservative Force</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; font-weight: bold; color: #CBD5E1;">Path Dependence</td>
          <td style="padding: 9px; color: #E2E8F0;">Completely path-independent</td>
          <td style="padding: 9px; color: #E2E8F0;">Strictly path-dependent</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; font-weight: bold; color: #CBD5E1;">Closed Loop Work</td>
          <td style="padding: 9px; color: #E2E8F0;">Identically zero ($\oint \vec{F}\cdot d\vec{r} = 0$)</td>
          <td style="padding: 9px; color: #E2E8F0;">Non-zero ($\oint \vec{F}\cdot d\vec{r} \ne 0$)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; font-weight: bold; color: #CBD5E1;">Potential Energy</td>
          <td style="padding: 9px; color: #E2E8F0;">Associated function exists ($F = -dU/dx$)</td>
          <td style="padding: 9px; color: #E2E8F0;">No potential energy function can be defined</td>
        </tr>
        <tr>
          <td style="padding: 9px; font-weight: bold; color: #CBD5E1;">Mechanical Energy</td>
          <td style="padding: 9px; color: #E2E8F0;">Strictly conserved ($E = K + U = \text{const}$)</td>
          <td style="padding: 9px; color: #E2E8F0;">Dissipated into thermal/acoustic energy</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    <b>Proof of Conservation of Mechanical Energy for a Freely Falling Body:</b><br>
    Let a body of mass $m$ be dropped from rest from height $H$ above the ground:
  </p>
  <ul>
    <li><b style="color: ${themeColor};">At Top Point A (height H):</b> Velocity $v_A = 0 \implies K_A = 0$. Potential energy $U_A = mgH$.
      <br>Total mechanical energy: $E_A = K_A + U_A = 0 + mgH = \mathbf{mgH}$.
    </li>
    <li><b style="color: ${themeColor};">At Intermediate Point B (fallen distance x, height H - x):</b>
      <br>Using $v_B^2 = 0 + 2gx \implies K_B = \frac{1}{2}m(2gx) = mgx$.
      <br>Potential energy: $U_B = mg(H - x)$.
      <br>Total mechanical energy: $E_B = mgx + mg(H - x) = \mathbf{mgH}$.
    </li>
    <li><b style="color: ${themeColor};">At Lowest Ground Point C (height 0):</b>
      <br>Using $v_C^2 = 0 + 2gH \implies K_C = \frac{1}{2}m(2gH) = mgH$.
      <br>Potential energy: $U_C = mg(0) = 0$.
      <br>Total mechanical energy: $E_C = mgH + 0 = \mathbf{mgH}$.
    </li>
  </ul>
  <p>
    <i>Since $E_A = E_B = E_C = mgH$, total mechanical energy remains strictly conserved at every point of the descent.</i>
  </p>

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    7. Motion in a Vertical Circle
  </h2>
  <p>
    When a small body of mass $m$ tied to an inextensible light string of length $L$ is whirled in a vertical circle, the motion is <b>non-uniform circular motion</b> because gravitational pull continuously retards the body during ascent and accelerates it during descent.
  </p>

  ${stepDerivationBox(
    "Dynamics and Critical Velocity in Vertical Circular Motion",
    [
      {
        name: "Tension Equation at Angle theta",
        content: `Let $\\theta$ be the angle the string makes with the downward vertical.
          <br>Centripetal force is supplied by the net radial force:
          <br>$T - mg \\cos\\theta = ${frac('m v^2', 'L')} \\implies \\mathbf{T = ${frac('m v^2', 'L')} + mg \\cos\\theta}$.`
      },
      {
        name: "Topmost Point (Crest, theta = 180 degrees)",
        content: `At the highest point, $\\cos 180^\\circ = -1$:
          <br>$T_{\\text{top}} = ${frac('m v_{\\text{top}}^2', 'L')} - mg$.
          <br>To prevent the string from slacking, tension must be non-negative ($T_{\\text{top}} \\ge 0$):
          <br>${frac('m v_{\\text{top}}^2', 'L')} - mg \\ge 0 \\implies \\mathbf{v_{\\text{top}} \\ge \\sqrt{g L}}$.
          <br><b>Critical Minimum Velocity at Top: $v_{\\text{top, min}} = \\sqrt{g L}$.</b>`
      },
      {
        name: "Lowest Point (Trough, theta = 0 degrees)",
        content: `By conservation of mechanical energy between lowest point (height $0$) and highest point (height $2L$):
          <br>$\\frac{1}{2}m v_{\\text{bottom}}^2 = \\frac{1}{2}m v_{\\text{top}}^2 + mg(2L)$.
          <br>Substitute critical top speed $v_{\\text{top}}^2 = gL$:
          <br>$v_{\\text{bottom}}^2 = gL + 4gL = 5gL$.
          <br><div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin-top: 6px;">
            v_{\\text{bottom, min}} = \\sqrt{5 g L}
          </div>`
      },
      {
        name: "Horizontal Mid-Position (theta = 90 degrees)",
        content: `At mid-position (height $L$):
          <br>$\\frac{1}{2}m v_{\\text{bottom}}^2 = \\frac{1}{2}m v_{\\text{mid}}^2 + mgL \\implies 5gL = v_{\\text{mid}}^2 + 2gL \\implies \\mathbf{v_{\\text{mid}} = \\sqrt{3 g L}}$.`
      },
      {
        name: "Tension Difference (Bottom vs Top)",
        content: `At bottom: $T_{\\text{bottom}} = ${frac('m v_{\\text{bottom}}^2', 'L')} + mg = ${frac('m(5gL)', 'L')} + mg = 6mg$.
          <br>At top: $T_{\\text{top}} = ${frac('m(gL)', 'L')} - mg = 0$.
          <br><div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold; margin-top: 6px;">
            T_{\\text{bottom}} - T_{\\text{top}} = 6 mg
          </div>
          <i>The tension difference between trough and crest is always an invariant $6mg$, completely independent of the orbital speed!</i>`
      }
    ]
  )}

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    8. Collisions in One & Two Dimensions (Elastic & Inelastic)
  </h2>
  <p>
    A <b>collision</b> is an intense mutual interaction between two or more bodies occurring over a relatively short interval of time, during which relatively large internal impulsive forces are exerted, fundamentally altering the velocities and trajectories of the bodies.
  </p>

  ${defBox(
    "Coefficient of Restitution (e)",
    "The coefficient of restitution is defined as the ratio of the relative velocity of separation of two colliding bodies after impact to their relative velocity of approach before impact along the line of collision.",
    "Dimensionless & Unitless",
    "[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    e = ${frac('v_2 - v_1', 'u_1 - u_2')} = ${frac('\text{Velocity of Separation}', '\text{Velocity of Approach')}
  </div>

  <p>
    <b>Classification of Collisions:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. Perfectly Elastic Collision ($e = 1$):</b> Both total linear momentum and total kinetic energy are strictly conserved before and after collision. Mechanical deformation is completely restored. <i>Example:</i> Collisions between atomic nuclei and gas molecules.</li>
    <li><b style="color: ${themeColor};">2. Inelastic Collision ($0 < e < 1$):</b> Total linear momentum is conserved, but total kinetic energy is NOT conserved (some kinetic energy is dissipated into heat, sound, or structural deformation). <i>Example:</i> Automobile collisions, dropping a rubber ball onto floor.</li>
    <li><b style="color: ${themeColor};">3. Completely (Perfectly) Inelastic Collision ($e = 0$):</b> The two colliding bodies stick together upon impact and move with a single common velocity. Kinetic energy loss is maximal. <i>Example:</i> A bullet embedding inside a wooden pendulum block.</li>
  </ul>

  ${stepDerivationBox(
    "Elastic Collision in One Dimension (Head-On Collision)",
    [
      {
        name: "Conservation of Linear Momentum",
        content: `$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \\implies m_1(u_1 - v_1) = m_2(v_2 - u_2) \\quad \\ldots(1)$`
      },
      {
        name: "Conservation of Kinetic Energy",
        content: `$\\frac{1}{2}m_1 u_1^2 + \\frac{1}{2}m_2 u_2^2 = \\frac{1}{2}m_1 v_1^2 + \\frac{1}{2}m_2 v_2^2 \\implies m_1(u_1^2 - v_1^2) = m_2(v_2^2 - u_2^2) \\quad \\ldots(2)$`
      },
      {
        name: "Relative Velocity Theorem (u1 - u2 = v2 - v1)",
        content: `Divide equation (2) by equation (1) using difference of squares $(a^2 - b^2) = (a-b)(a+b)$:
          <br>$u_1 + v_1 = v_2 + u_2 \\implies \\mathbf{u_1 - u_2 = v_2 - v_1}$.
          <br><i>In any 1D elastic collision, the relative velocity of approach equals the relative velocity of separation ($e = 1$).</i>`
      },
      {
        name: "Master Velocity Formulas",
        content: `Solving for final velocities $v_1$ and $v_2$:
          <div style="text-align: center; color: #76FF03; font-size: 16px; font-weight: bold; margin: 8px 0;">
            v_1 = \\left(${frac('m_1 - m_2', 'm_1 + m_2')}\\right) u_1 + \\left(${frac('2 m_2', 'm_1 + m_2')}\\right) u_2
          </div>
          <div style="text-align: center; color: #76FF03; font-size: 16px; font-weight: bold; margin: 8px 0;">
            v_2 = \\left(${frac('2 m_1', 'm_1 + m_2')}\\right) u_1 + \\left(${frac('m_2 - m_1', 'm_1 + m_2')}\\right) u_2
          </div>`
      },
      {
        name: "Special Case: Equal Masses (m1 = m2)",
        content: `When $m_1 = m_2$:
          <br>$v_1 = 0 + u_2 = \\mathbf{u_2}$ and $v_2 = u_1 + 0 = \\mathbf{u_1}$.
          <br><b>Two bodies of identical mass completely swap their velocities upon 1D elastic collision!</b>`
      }
    ]
  )}

  <p>
    <b>Loss of Kinetic Energy in Perfectly Inelastic 1D Collision:</b><br>
    Two bodies of masses $m_1$ and $m_2$ stick together after colliding, moving with common velocity $V = ${frac('m_1 u_1 + m_2 u_2', 'm_1 + m_2')}$.<br>
    The loss of kinetic energy is given by:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(0, 198, 255, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 12px 0; font-size: 16.5px; color: #76FF03;">
    <b>\Delta K = K_i - K_f = \frac{1}{2} \left(${frac('m_1 m_2', 'm_1 + m_2')}\right) (u_1 - u_2)^2</b>
  </div>
  <p>
    <i>Since $(u_1 - u_2)^2 > 0$, $\Delta K$ is strictly positive, proving kinetic energy is always irreversibly lost in completely inelastic collisions.</i>
  </p>

  <p>
    <b>Elastic Collision in Two Dimensions (Glancing Collision):</b><br>
    When colliding bodies do not strike head-on, they scatter in a plane at angles $\theta_1$ and $\theta_2$ relative to the incident axis. Vector momentum must be conserved along both $x$ and $y$ axes independently:
  </p>
  <div style="text-align: center; color: #80DEEA; font-size: 15px; margin: 8px 0;">
    &bull; x-axis: $m_1 u_1 = m_1 v_1 \cos\theta_1 + m_2 v_2 \cos\theta_2$<br>
    &bull; y-axis: $0 = m_1 v_1 \sin\theta_1 - m_2 v_2 \sin\theta_2$
  </div>
  <p>
    <b>Right-Angle Scattering Property:</b> When a particle of mass $m$ strikes an identical stationary particle ($m_1 = m_2, u_2 = 0$) elastically in 2D, the two particles strictly scatter at right angles to one another: <b>$\theta_1 + \theta_2 = 90^\circ$</b>.
  </p>

  <!-- MASTER REVISION FORMULA CHEAT SHEET -->
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">
      ⚡ Master Revision Formula Cheat Sheet
    </h2>
    <p class="text-center" style="color: #CBD5E1; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">
      Comprehensive Operational Equations &bull; Unit IV: Work, Energy and Power (06 Marks)
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Work Formulas:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Constant Force: $W = \vec{F} \cdot \vec{s} = F s \cos\theta$<br>
          Variable Force: $W = \int_{x_1}^{x_2} F(x) \, dx$<br>
          Area under $F-x$ curve $= \text{Work Done}$<br>
          $1\text{ J} = 10^7\text{ erg} = 1\text{ N m}$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Kinetic Energy & Theorem:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $K = \frac{1}{2} m v^2 = ${frac('p^2', '2m')}$<br>
          $p = \sqrt{2 m K}$<br>
          Work-Energy: $W_{\text{net}} = K_f - K_i = \Delta K$<br>
          $P = ${frac('dW', 'dt')} = \vec{F} \cdot \vec{v} \quad (1\text{ hp} = 746\text{ W})$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Potential Energy & Springs:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Gravitational: $U = mgh$<br>
          Conservative: $F(x) = -${frac('dU', 'dx')}$<br>
          Hooke's Law: $F_s = -kx$<br>
          Spring Potential: $U_s = \frac{1}{2} k x^2$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Vertical Circular Motion:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Tension: $T = ${frac('m v^2', 'L')} + mg \cos\theta$<br>
          Top Speed (Min): $v_{\text{top}} = \sqrt{g L}$<br>
          Bottom Speed (Min): $v_{\text{bottom}} = \sqrt{5 g L}$<br>
          Mid Speed (Min): $v_{\text{mid}} = \sqrt{3 g L}$<br>
          $T_{\text{bottom}} - T_{\text{top}} = 6 mg$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; 1D Elastic Collisions:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $u_1 - u_2 = v_2 - v_1 \quad (e = 1)$<br>
          $v_1 = \left(${frac('m_1 - m_2', 'm_1 + m_2')}\right)u_1 + \left(${frac('2 m_2', 'm_1 + m_2')}\right)u_2$<br>
          $v_2 = \left(${frac('2 m_1', 'm_1 + m_2')}\right)u_1 + \left(${frac('m_2 - m_1', 'm_1 + m_2')}\right)u_2$<br>
          $m_1 = m_2 \implies v_1 = u_2, v_2 = u_1$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Inelastic & 2D Collisions:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Common Velocity: $V = ${frac('m_1 u_1 + m_2 u_2', 'm_1 + m_2')}$<br>
          Kinetic Energy Loss: $\Delta K = \frac{1}{2}\left(${frac('m_1 m_2', 'm_1 + m_2')}\right)(u_1 - u_2)^2$<br>
          2D Glancing ($m_1 = m_2, u_2 = 0$): $\theta_1 + \theta_2 = 90^\circ$
        </span>
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
