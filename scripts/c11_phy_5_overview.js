const {
  themeColor,
  frac,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_5_helpers');

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
  <div style="background: rgba(171, 71, 188, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h1 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 24px; font-weight: bold; text-align: center !important;">
      Unit V: Motion of System of Particles and Rigid Body (06 Marks)
    </h1>
    <p style="color: #CBD5E1; margin: 0; font-size: 15px; text-align: center !important;">
      Comprehensive Reference Textbook Guide &bull; JKBOSE / CBSE Official Syllabus Alignment
    </p>
  </div>

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(171, 71, 188, 0.3); border-radius: 10px; padding: 16px; margin-bottom: 25px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">
      ⚡ Quick Glossary & Fundamental Operational Quantities
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Centre of Mass (CM):</b> Unique spatial point where the entire mass of a system may be considered concentrated. Vector: $\vec{R}_{\text{cm}} = \frac{1}{M}\sum m_i \vec{r}_i$. SI Unit: <b>meter (m)</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Torque (&tau;):</b> Rotational moment of a force; $\vec{\tau} = \vec{r} \times \vec{F} = r F \sin\theta\,\hat{n}$. SI Unit: <b>N m</b> &bull; Dimensions: <b>[M L<sup>2</sup> T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Angular Momentum (L):</b> Moment of linear momentum; $\vec{L} = \vec{r} \times \vec{p} = I\vec{\omega}$. SI Unit: <b>J s (or kg m<sup>2</sup> s<sup>-1</sup>)</b> &bull; Dimensions: <b>[M L<sup>2</sup> T<sup>-1</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Moment of Inertia (I):</b> Rotational inertia resisting angular acceleration; $I = \sum m_i r_i^2 = M k^2$. SI Unit: <b>kg m<sup>2</sup></b> &bull; Dimensions: <b>[M L<sup>2</sup> T<sup>0</sup>]</b>.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    1. Centre of Mass of a Two-Particle System & N-Particle Systems
  </h2>
  <p>
    Up to this point, classical mechanics has treated material bodies as idealized point particles. However, real physical objects possess finite dimensions and are composed of countless interacting constituent particles. When a cricket bat or a wrench is tossed through the air, different points of the object execute intricate, dizzying trajectories. Yet, remarkable simplicity emerges: there exists one unique spatial point within or associated with the body that travels along a clean, simple parabolic trajectory under gravity, moving precisely as if the entire mass of the object were concentrated there and all external forces were applied directly to it. This privileged point is the <b>Centre of Mass (CM)</b>.
  </p>

  ${defBox(
    "Centre of Mass (CM)",
    "The centre of mass of a system of particles is defined as that single point which moves in such a way that the total mass of the system times the acceleration of this point equals the vector sum of all external forces acting on the system.",
    "meter (m)",
    "[M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]"
  )}

  <p>
    <b>Two-Particle System Formulation:</b><br>
    Consider two particles of masses $m_1$ and $m_2$ located at position vectors $\vec{r}_1$ and $\vec{r}_2$ with respect to an arbitrary origin $O$.<br>
    The position vector $\vec{R}_{\text{cm}}$ of their centre of mass is defined as the weighted average:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    \vec{R}_{\text{cm}} = ${frac('m_1 \vec{r}_1 + m_2 \vec{r}_2', 'm_1 + m_2')} = ${frac('m_1 \vec{r}_1 + m_2 \vec{r}_2', 'M')} \quad \text{where } M = m_1 + m_2
  </div>

  <p>
    <b>Cartesian Coordinates of Centre of Mass:</b><br>
    In three-dimensional space with particle coordinates $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(171, 71, 188, 0.35); border-radius: 8px; padding: 10px 16px; text-align: center; margin: 12px 0; font-size: 15.5px; color: #CE93D8;">
    <b>X_{\text{cm}} = ${frac('m_1 x_1 + m_2 x_2', 'm_1 + m_2')}, \quad Y_{\text{cm}} = ${frac('m_1 y_1 + m_2 y_2', 'm_1 + m_2')}, \quad Z_{\text{cm}} = ${frac('m_1 z_1 + m_2 z_2', 'm_1 + m_2')}</b>
  </div>

  ${analogyBox(
    "The Seesaw Balance Point",
    "If two children sit on a seesaw, the balance fulcrum must be placed closer to the heavier child. The centre of mass of two bodies always lies along the line connecting them, dividing the distance inversely in the ratio of their masses: m_1 r_1 = m_2 r_2. If m_1 = m_2, the CM lies exactly midway."
  )}

  <p>
    <b>Extension to an N-Particle System:</b><br>
    For a system consisting of $N$ discrete particles of masses $m_1, m_2, \dots, m_N$ with position vectors $\vec{r}_1, \vec{r}_2, \dots, \vec{r}_N$:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold; margin: 12px 0;">
    \vec{R}_{\text{cm}} = ${frac('\sum_{i=1}^N m_i \vec{r}_i', '\sum_{i=1}^N m_i')} = ${frac('1', 'M')} \sum_{i=1}^N m_i \vec{r}_i
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    2. Momentum Conservation & Motion of the Centre of Mass
  </h2>
  <p>
    Differentiating the position vector of the centre of mass $\vec{R}_{\text{cm}}$ with respect to time $t$ yields the <b>velocity of the centre of mass ($\vec{V}_{\text{cm}}$)</b>:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold; margin: 12px 0;">
    \vec{V}_{\text{cm}} = ${frac('d\vec{R}_{\text{cm}}', 'dt')} = ${frac('1', 'M')} \sum_{i=1}^N m_i ${frac('d\vec{r}_i', 'dt')} = ${frac('1', 'M')} \sum_{i=1}^N m_i \vec{v}_i = ${frac('\vec{P}_{\text{total}}', 'M')}
  </div>
  <p>
    Cross-multiplying by total mass $M$ reveals a profound physical law:
  </p>
  <div style="text-align: center; color: #CE93D8; font-size: 17px; font-weight: bold; margin: 8px 0;">
    \mathbf{\vec{P}_{\text{total}} = M \vec{V}_{\text{cm}}}
  </div>
  <p>
    <i>The total linear momentum of a multi-particle system equals the total mass of the system multiplied by the velocity of its centre of mass.</i>
  </p>

  <p>
    <b>Acceleration of the Centre of Mass & Equation of Motion:</b><br>
    Differentiating velocity with respect to time:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 16px; font-weight: bold; margin: 10px 0;">
    \vec{A}_{\text{cm}} = ${frac('d\vec{V}_{\text{cm}}', 'dt')} = ${frac('1', 'M')} \sum_{i=1}^N m_i \vec{a}_i \implies M \vec{A}_{\text{cm}} = \sum_{i=1}^N \vec{F}_i
  </div>
  <p>
    The force $\vec{F}_i$ on the $i^{\text{th}}$ particle consists of external forces $\vec{F}_{i,\text{ext}}$ and internal mutual forces $\vec{F}_{ij}$ exerted by other particles. By Newton's Third Law, internal forces occur in equal and opposite pairs ($\vec{F}_{ij} = -\vec{F}_{ji}$), so their vector sum over the entire system cancels out identically: $\sum \vec{F}_{\text{int}} = \vec{0}$.
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(171, 71, 188, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 14px 0; font-size: 17px; color: #76FF03;">
    <b>\vec{F}_{\text{ext}} = M \vec{A}_{\text{cm}} = ${frac('d\vec{P}_{\text{total}}', 'dt')}</b>
  </div>

  <p>
    <b>The Principle of Conservation of Centre of Mass Motion:</b><br>
    If the net external force acting on a system is zero ($\vec{F}_{\text{ext}} = \vec{0}$):
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 16px; font-weight: bold; margin: 10px 0;">
    \vec{A}_{\text{cm}} = \vec{0} \implies \vec{V}_{\text{cm}} = \text{Constant Vector}
  </div>
  <p>
    <i>In the absence of net external forces, internal forces can never accelerate or alter the trajectory of the centre of mass.</i>
  </p>

  ${examTrapBox(
    "Exploding Projectile in Mid-Air",
    "A shell fired from a cannon follows a parabolic trajectory under gravity. If it explodes mid-flight into dozens of fragments, the chemical explosive forces are purely internal. As long as gravity remains the sole external force, the centre of mass of all the scattered fragments continues following the exact same unbroken parabolic path to the ground!"
  )}

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    3. Centre of Mass of a Rigid Body & Uniform Rod
  </h2>
  <p>
    A <b>rigid body</b> is a physical body in which the spatial distance between any pair of constituent particles remains strictly constant regardless of the magnitude of external forces applied to it. In continuous rigid bodies, the summation over discrete masses is replaced by a continuous calculus volume integral over infinitesimal mass elements $dm$:
  </p>
  <div style="text-align: center; color: #76FF03; font-size: 16.5px; font-weight: bold; margin: 12px 0;">
    \vec{R}_{\text{cm}} = ${frac('1', 'M')} \int \vec{r} \, dm
  </div>

  ${stepDerivationBox(
    "Derivation of Centre of Mass of a Uniform Thin Rod",
    [
      {
        name: "Coordinate & Mass Density Setup",
        content: `Consider a uniform thin rod of mass $M$ and length $L$ lying along the x-axis with one end at the origin ($x = 0$) and the other end at $x = L$.
          <br>Linear mass density (mass per unit length) is constant: $\lambda = ${frac('M', 'L')}$.`
      },
      {
        name: "Infinitesimal Element dm",
        content: `Take an infinitesimal element of length $dx$ at a distance $x$ from the origin:
          <br>$dm = \lambda \, dx = \left(${frac('M', 'L')}\right) dx$.`
      },
      {
        name: "Calculus Integration",
        content: `By definition of centre of mass:
          <br>$X_{\\text{cm}} = ${frac('1', 'M')} \int_0^L x \, dm = ${frac('1', 'M')} \int_0^L x \left(${frac('M', 'L')}\right) dx = ${frac('1', 'L')} \int_0^L x \, dx$.`
      },
      {
        name: "Evaluate Definite Integral",
        content: `$X_{\\text{cm}} = ${frac('1', 'L')} \left[ ${frac('x^2', '2')} \right]_0^L = ${frac('1', 'L')} \left( ${frac('L^2', '2')} \right) = \mathbf{${frac('L', '2')}}$.
          <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin-top: 6px;">
            X_{\\text{cm}} = ${frac('L', '2')} \quad \text{(Geometric Midpoint)}
          </div>
          <i>For any homogeneous, symmetric body, the centre of mass coincides with its geometric center of symmetry.</i>`
      }
    ]
  )}

  <p>
    <b>Centre of Mass vs Centre of Gravity:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Centre of Mass (CM):</b> The point where the total mass of the body is concentrated; determined purely by mass distribution, completely independent of gravity.</li>
    <li><b style="color: ${themeColor};">Centre of Gravity (CG):</b> The point through which the resultant gravitational force (weight) acts; the point about which the net torque due to gravity vanishes.</li>
    <li><b style="color: ${themeColor};">Equivalence Condition:</b> In a uniform gravitational field (such as laboratory scale where $\vec{g}$ is constant across the body), <b>CM and CG coincide exactly</b>. In non-uniform fields (such as a skyscraper or a satellite in orbit), CG shifts slightly below CM.</li>
  </ul>

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    4. Moment of a Force (Torque) & Angular Momentum
  </h2>
  <p>
    Just as a linear force causes translational acceleration along a line, the turning or twisting effect of a force about a fixed axis causes rotational acceleration. This rotational analog of force is termed the <b>Moment of a Force</b> or <b>Torque ($\vec{\tau}$)</b>.
  </p>

  ${defBox(
    "Torque or Moment of a Force (&tau;)",
    "Torque about a chosen pivot point is defined as the vector (cross) product of the position vector of the point of application of the force from the pivot and the applied force vector.",
    "Newton meter (N m)",
    "[M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    \vec{\tau} = \vec{r} \times \vec{F} = (r F \sin\theta) \hat{n} = F \cdot d_{\perp}
  </div>
  <p>
    where $d_{\perp} = r\sin\theta$ is the <b>moment arm (lever arm)</b>, representing the shortest perpendicular distance from the axis of rotation to the line of action of the force. The direction of $\vec{\tau}$ is given by the <b>Right-Hand Thumb Rule</b>: curl the fingers from $\vec{r}$ toward $\vec{F}$; the outstretched thumb points in the direction of torque.
  </p>

  ${analogyBox(
    "Opening a Heavy Door",
    "To open a door easily, the handle is positioned at the outer edge furthest from the hinges (maximizing r), and you push perpendicular to the door face (&theta; = 90&deg;, maximizing sin &theta;). Pushing near the hinges requires immense force, and pushing parallel to the door edge produces zero torque (&theta; = 0&deg;)."
  )}

  <p>
    <b>Couple & Moment of a Couple:</b><br>
    A <b>couple</b> consists of two equal and opposite parallel forces whose lines of action do not coincide (e.g. turning a steering wheel or opening a water tap). The net translational force of a couple is zero ($\sum \vec{F} = \vec{0}$), so it causes <b>pure rotation without translation</b>. The torque of a couple equals the magnitude of one force multiplied by the perpendicular distance between their lines of action: $\tau_{\text{couple}} = F \times d$.
  </p>

  ${defBox(
    "Angular Momentum (L)",
    "The angular momentum of a particle about a chosen point is defined as the moment of its linear momentum, given mathematically as the vector product of position vector and linear momentum vector.",
    "Joule second (J s = kg m<sup>2</sup> s<sup>-1</sup>)",
    "[M<sup>1</sup> L<sup>2</sup> T<sup>-1</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    \vec{L} = \vec{r} \times \vec{p} = \vec{r} \times (m\vec{v}) = (r p \sin\theta) \hat{n} = I \vec{\omega}
  </div>

  ${stepDerivationBox(
    "Fundamental Relation Between Torque and Angular Momentum",
    [
      {
        name: "Definition of Angular Momentum",
        content: `$\vec{L} = \vec{r} \times \vec{p}$.`
      },
      {
        name: "Time Derivative",
        content: `Differentiating with respect to time $t$ using the vector product rule:
          <br>${frac('d\\vec{L}', 'dt')} = ${frac('d', 'dt')}(\vec{r} \times \vec{p}) = \left( ${frac('d\\vec{r}', 'dt')} \times \vec{p} \right) + \left( \vec{r} \times ${frac('d\\vec{p}', 'dt')} \right)$.`
      },
      {
        name: "Evaluate First Cross Product",
        content: `Since $\\frac{d\\vec{r}}{dt} = \\vec{v}$ and $\\vec{p} = m\\vec{v}$:
          <br>${frac('d\\vec{r}', 'dt')} \times \vec{p} = \vec{v} \times (m\vec{v}) = m(\vec{v} \times \vec{v}) = \vec{0}$ (since cross product of any vector with itself vanishes).`
      },
      {
        name: "Substitute Second Law for Second Term",
        content: `By Newton's Second Law: $\\frac{d\\vec{p}}{dt} = \\vec{F}$.
          <br>Therefore: $\vec{r} \times ${frac('d\\vec{p}', 'dt')} = \vec{r} \times \vec{F} = \vec{\tau}$.`
      },
      {
        name: "Final Master Relation",
        content: `<div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold;">
          \vec{\tau} = ${frac('d\\vec{L}', 'dt')}
        </div>
        <i>Torque is the time rate of change of angular momentum, perfectly mirroring Newton's Second Law $\\vec{F} = d\\vec{p}/dt$ in rotational dynamics.</i>`
      }
    ]
  )}

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    5. Law of Conservation of Angular Momentum & Applications
  </h2>
  <p>
    The Principle of Conservation of Angular Momentum is a universal conservation law of classical and modern physics.
  </p>

  ${defBox(
    "Law of Conservation of Angular Momentum",
    "If the net external torque acting on a rotating system about an axis is identically zero, the total vector angular momentum of the system remains strictly constant over time.",
    "—",
    "—"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    \vec{\tau}_{\text{ext}} = \vec{0} \implies ${frac('d\vec{L}', 'dt')} = \vec{0} \implies \vec{L} = \text{Constant Vector} \implies I_1 \omega_1 = I_2 \omega_2
  </div>

  <p>
    <b>Major Real-World Applications:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">1. Ballet Dancer & Figure Skater:</b> A spinning ice skater begins spinning slowly with arms and legs outstretched (large moment of inertia $I_1$). When she draws her arms and legs close to her chest, her moment of inertia drops sharply to $I_2 < I_1$. To conserve angular momentum ($I_1\omega_1 = I_2\omega_2$), her angular speed $\omega_2$ increases dramatically, producing a rapid blur spin.</li>
    <li><b style="color: ${themeColor};">2. Acrobat & Olympic Diver:</b> A diver jumping off a high springboard tucks their body tightly into a ball (fetal tuck), minimizing $I$ and spinning rapidly through multiple somersaults. Just before entering the water, the diver stretches arms and legs out, increasing $I$, which slows the rotation rate to ensure clean vertical entry.</li>
    <li><b style="color: ${themeColor};">3. Planetary Motion (Kepler's Second Law):</b> The gravitational pull of the Sun on a planet acts directly along the radial line joining them, generating zero torque ($\vec{\tau} = \vec{r} \times \vec{F}_g = \vec{0}$). Therefore, orbital angular momentum is conserved: $L = m r^2 \omega = \text{constant}$. The areal velocity is constant: $\frac{dA}{dt} = \frac{L}{2m} = \text{constant}$. When closer to the Sun at perihelion ($r$ decreases), orbital speed increases ($v$ increases).</li>
  </ul>

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    6. Equilibrium of Rigid Bodies & The Principle of Moments
  </h2>
  <p>
    Unlike point particles which only require zero net force for equilibrium, an extended rigid body can experience both translation and rotation. Complete mechanical equilibrium requires satisfying two simultaneous vector criteria:
  </p>

  <p>
    <b>1. First Condition of Equilibrium (Translational Equilibrium):</b><br>
    The vector sum of all external forces acting on the rigid body must be zero:
  </p>
  <div style="text-align: center; color: #CE93D8; font-size: 16px; font-weight: bold; margin: 8px 0;">
    \sum \vec{F}_{\text{ext}} = \vec{0} \quad \Longleftrightarrow \quad \sum F_x = 0, \; \sum F_y = 0, \; \sum F_z = 0
  </div>

  <p>
    <b>2. Second Condition of Equilibrium (Rotational Equilibrium):</b><br>
    The vector sum of all external torques acting on the rigid body about any chosen point must be zero:
  </p>
  <div style="text-align: center; color: #CE93D8; font-size: 16px; font-weight: bold; margin: 8px 0;">
    \sum \vec{\tau}_{\text{ext}} = \vec{0} \quad \Longleftrightarrow \quad \sum \tau_{\text{clockwise}} = \sum \tau_{\text{anticlockwise}}
  </div>

  <p>
    <b>The Principle of Moments & Mechanical Advantage:</b><br>
    For a lever pivoted at fulcrum $F$ with load $W$ at distance $d_1$ (load arm) and effort $P$ at distance $d_2$ (effort arm):
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(171, 71, 188, 0.35); border-radius: 8px; padding: 10px 16px; text-align: center; margin: 12px 0; font-size: 15.5px; color: #76FF03;">
    <b>\text{Load} \times \text{Load Arm} = \text{Effort} \times \text{Effort Arm} \implies \text{Mechanical Advantage (MA)} = ${frac('\text{Load}', '\text{Effort}')} = ${frac('\text{Effort Arm}', '\text{Load Arm}')}</b>
  </div>

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    7. Rigid Body Rotation & Equations of Rotational Motion
  </h2>
  <p>
    When a rigid body rotates about a fixed axis, every constituent particle of the body moves in a circular path centered on the axis with the exact same angular velocity $\omega$ and angular acceleration $\alpha$, although particles at different distances $r$ have different linear speeds ($v = r\omega$).
  </p>

  <p>
    <b>Equations of Rotational Motion with Constant Angular Acceleration (&alpha;):</b><br>
    These equations are the exact rotational counterparts of the linear kinematic equations:
  </p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(171, 71, 188, 0.35); border-radius: 8px; padding: 14px 18px; margin: 14px 0; line-height: 1.8; font-size: 16px; color: #76FF03;">
    <b>1. &omega; = &omega;<sub>0</sub> + &alpha; t</b><br>
    <b>2. &theta; = &omega;<sub>0</sub> t + ${frac('1', '2')} &alpha; t<sup>2</sup></b><br>
    <b>3. &omega;<sup>2</sup> - &omega;<sub>0</sub><sup>2</sup> = 2 &alpha; &theta;</b><br>
    <b>4. &theta;<sub>n</sub> = &omega;<sub>0</sub> + ${frac('&alpha;', '2')} (2n - 1) \quad \text{(Angular displacement in } n^{\text{th}} \text{ second)}</b>
  </div>

  <p>
    <b>Rotational Kinetic Energy, Work & Power:</b><br>
    &bull; <b>Rotational Kinetic Energy:</b> $K_{\text{rot}} = \sum \frac{1}{2}m_i v_i^2 = \sum \frac{1}{2}m_i (r_i\omega)^2 = \frac{1}{2}\left(\sum m_i r_i^2\right)\omega^2 = \mathbf{\frac{1}{2} I \omega^2}$.<br>
    &bull; <b>Rotational Work Done:</b> $dW = \tau \, d\theta \implies \mathbf{W = \int_{\theta_1}^{\theta_2} \tau \, d\theta}$.<br>
    &bull; <b>Rotational Power:</b> $P = \frac{dW}{dt} = \tau \, \frac{d\theta}{dt} = \mathbf{\tau \omega}$.
  </p>

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    8. Comparison of Linear (Translational) & Rotational Motions
  </h2>
  <p>
    There exists a complete, elegant one-to-one mathematical isomorphism between the operational physical quantities of translational mechanics and rotational dynamics:
  </p>

  <!-- COMPARISON TABLE -->
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.7); font-size: 14px; border: 1px solid rgba(171, 71, 188, 0.3);">
      <thead>
        <tr style="background: rgba(171, 71, 188, 0.15); border-bottom: 2px solid ${themeColor};">
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Translational Motion</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Rotational Motion</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Connecting Relation</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Linear Displacement: $s$</td>
          <td style="padding: 9px; color: #E2E8F0;">Angular Displacement: $\theta$</td>
          <td style="padding: 9px; color: #CE93D8;">$s = r \theta$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Linear Velocity: $v = ds/dt$</td>
          <td style="padding: 9px; color: #E2E8F0;">Angular Velocity: $\omega = d\theta/dt$</td>
          <td style="padding: 9px; color: #CE93D8;">$\vec{v} = \vec{\omega} \times \vec{r}$ ($v = r\omega$)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Linear Accel: $a = dv/dt$</td>
          <td style="padding: 9px; color: #E2E8F0;">Angular Accel: $\alpha = d\omega/dt$</td>
          <td style="padding: 9px; color: #CE93D8;">$a_t = r \alpha$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Mass (Inertia): $m$</td>
          <td style="padding: 9px; color: #E2E8F0;">Moment of Inertia: $I$</td>
          <td style="padding: 9px; color: #CE93D8;">$I = \sum m_i r_i^2 = M k^2$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Force: $\vec{F} = m \vec{a}$</td>
          <td style="padding: 9px; color: #E2E8F0;">Torque: $\vec{\tau} = I \vec{\alpha}$</td>
          <td style="padding: 9px; color: #CE93D8;">$\vec{\tau} = \vec{r} \times \vec{F}$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Linear Momentum: $\vec{p} = m \vec{v}$</td>
          <td style="padding: 9px; color: #E2E8F0;">Angular Momentum: $\vec{L} = I \vec{\omega}$</td>
          <td style="padding: 9px; color: #CE93D8;">$\vec{L} = \vec{r} \times \vec{p}$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Newton's 2nd: $\vec{F} = d\vec{p}/dt$</td>
          <td style="padding: 9px; color: #E2E8F0;">Rotational 2nd: $\vec{\tau} = d\vec{L}/dt$</td>
          <td style="padding: 9px; color: #CE93D8;">—</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Work: $W = \int F \, ds$</td>
          <td style="padding: 9px; color: #E2E8F0;">Work: $W = \int \tau \, d\theta$</td>
          <td style="padding: 9px; color: #CE93D8;">—</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #E2E8F0;">Kinetic Energy: $K = \frac{1}{2}m v^2$</td>
          <td style="padding: 9px; color: #E2E8F0;">Kinetic Energy: $K = \frac{1}{2}I \omega^2$</td>
          <td style="padding: 9px; color: #CE93D8;">—</td>
        </tr>
        <tr>
          <td style="padding: 9px; color: #E2E8F0;">Power: $P = \vec{F} \cdot \vec{v}$</td>
          <td style="padding: 9px; color: #E2E8F0;">Power: $P = \tau \omega$</td>
          <td style="padding: 9px; color: #CE93D8;">—</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 9 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    9. Moment of Inertia, Radius of Gyration & Geometrical Lookup Values
  </h2>
  <p>
    In translational mechanics, the inertial mass $m$ of an object is a fixed scalar constant that purely resists linear acceleration. In rotational dynamics, however, resistance to angular acceleration depends not only on total mass $M$, but critically on <b>how that mass is distributed in space relative to the chosen axis of rotation</b>. A spinning fly-wheel with heavy perimeter rims has vastly greater rotational inertia than a compact sphere of identical total mass.
  </p>

  ${defBox(
    "Moment of Inertia (I)",
    "The moment of inertia of a rigid body about a given axis of rotation is defined as the sum of the products of the mass of each constituent particle and the square of its perpendicular distance from the axis of rotation.",
    "kg m<sup>2</sup>",
    "[M<sup>1</sup> L<sup>2</sup> T<sup>0</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    I = \sum_{i=1}^N m_i r_i^2 = \int r^2 \, dm
  </div>

  <p>
    <b>Factors Affecting Moment of Inertia:</b><br>
    1. Total mass of the body.<br>
    2. Geometrical shape and dimensions of the body.<br>
    3. Spatial distribution of mass relative to the axis of rotation.<br>
    4. Position and orientation of the axis of rotation.
  </p>

  ${defBox(
    "Radius of Gyration (k)",
    "The radius of gyration of a body about a given axis of rotation is defined as the perpendicular distance from the axis at which the entire mass of the body could be concentrated as a single point particle without altering its moment of inertia about that axis.",
    "meter (m)",
    "[M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]"
  )}

  <div style="text-align: center; color: #76FF03; font-size: 17px; font-weight: bold; margin: 12px 0;">
    I = M k^2 \implies \mathbf{k = \sqrt{${frac('I', 'M')}}}
  </div>

  <p>
    <b>Master Lookup Table: Values of Moments of Inertia for Simple Geometrical Objects:</b><br>
    <i>(As specified in the official syllabus, derivations are not required; standard values must be mastered for problem-solving):</i>
  </p>

  <!-- MOMENT OF INERTIA LOOKUP TABLE -->
  <div style="overflow-x: auto; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.7); font-size: 14px; border: 1px solid rgba(171, 71, 188, 0.3);">
      <thead>
        <tr style="background: rgba(171, 71, 188, 0.15); border-bottom: 2px solid ${themeColor};">
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Body & Geometry</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Axis of Rotation</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Moment of Inertia (I)</th>
          <th style="padding: 10px; color: ${themeColor}; text-align: left;">Radius of Gyration (k)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Thin Circular Ring (Mass M, Radius R)</td>
          <td style="padding: 9px; color: #E2E8F0;">Central axis perpendicular to plane</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">M R<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$R$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Thin Circular Ring (Mass M, Radius R)</td>
          <td style="padding: 9px; color: #E2E8F0;">Diameter in the plane of the ring</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">${frac('1', '2')} M R<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$R / \sqrt{2}$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Uniform Circular Disc (Mass M, Radius R)</td>
          <td style="padding: 9px; color: #E2E8F0;">Central axis perpendicular to plane</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">${frac('1', '2')} M R<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$R / \sqrt{2}$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Uniform Circular Disc (Mass M, Radius R)</td>
          <td style="padding: 9px; color: #E2E8F0;">Diameter in the plane of the disc</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">${frac('1', '4')} M R<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$R / 2$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Thin Uniform Rod (Mass M, Length L)</td>
          <td style="padding: 9px; color: #E2E8F0;">Perpendicular bisector through center</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">${frac('1', '12')} M L<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$L / \sqrt{12}$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Thin Uniform Rod (Mass M, Length L)</td>
          <td style="padding: 9px; color: #E2E8F0;">Perpendicular axis through one end</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">${frac('1', '3')} M L<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$L / \sqrt{3}$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Solid Cylinder (Mass M, Radius R)</td>
          <td style="padding: 9px; color: #E2E8F0;">Central longitudinal axis of symmetry</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">${frac('1', '2')} M R<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$R / \sqrt{2}$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Hollow Cylinder (Thin Shell, M, R)</td>
          <td style="padding: 9px; color: #E2E8F0;">Central longitudinal axis of symmetry</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">M R<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$R$</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Solid Sphere (Mass M, Radius R)</td>
          <td style="padding: 9px; color: #E2E8F0;">Any diameter passing through center</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">${frac('2', '5')} M R<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$\sqrt{2/5} \, R$</td>
        </tr>
        <tr>
          <td style="padding: 9px; color: #CBD5E1; font-weight: bold;">Hollow Spherical Shell (Mass M, Radius R)</td>
          <td style="padding: 9px; color: #E2E8F0;">Any diameter passing through center</td>
          <td style="padding: 9px; color: #76FF03; font-weight: bold;">${frac('2', '3')} M R<sup>2</sup></td>
          <td style="padding: 9px; color: #CE93D8;">$\sqrt{2/3} \, R$</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- MASTER REVISION FORMULA CHEAT SHEET -->
  <div style="background: rgba(171, 71, 188, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">
      ⚡ Master Revision Formula Cheat Sheet
    </h2>
    <p class="text-center" style="color: #CBD5E1; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">
      Comprehensive Operational Equations &bull; Unit V: System of Particles & Rotational Motion (06 Marks)
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Centre of Mass Relations:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\vec{R}_{\text{cm}} = ${frac('\sum m_i \vec{r}_i', 'M')}$<br>
          $\vec{P}_{\text{total}} = M \vec{V}_{\text{cm}}$<br>
          $\vec{F}_{\text{ext}} = M \vec{A}_{\text{cm}}$<br>
          Uniform Rod: $X_{\text{cm}} = ${frac('L', '2')}
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Torque & Angular Momentum:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\vec{\tau} = \vec{r} \times \vec{F} = I \vec{\alpha}$<br>
          $\vec{L} = \vec{r} \times \vec{p} = I \vec{\omega}$<br>
          $\vec{\tau} = ${frac('d\vec{L}', 'dt')}$<br>
          $\vec{\tau}_{\text{ext}} = \vec{0} \implies I_1 \omega_1 = I_2 \omega_2$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Rotational Kinematics:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\omega = \omega_0 + \alpha t$<br>
          $\theta = \omega_0 t + ${frac('1', '2')} \alpha t^2$<br>
          $\omega^2 - \omega_0^2 = 2 \alpha \theta$<br>
          $K_{\text{rot}} = \frac{1}{2} I \omega^2, \quad P = \tau \omega$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Moment of Inertia ($I = M k^2$):</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Ring (center): $I = M R^2$<br>
          Disc (center): $I = ${frac('1', '2')} M R^2$<br>
          Solid Sphere: $I = ${frac('2', '5')} M R^2$<br>
          Hollow Sphere: $I = ${frac('2', '3')} M R^2$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Rods & Cylinders:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Rod (center): $I = ${frac('1', '12')} M L^2$<br>
          Rod (end): $I = ${frac('1', '3')} M L^2$<br>
          Solid Cylinder: $I = ${frac('1', '2')} M R^2$<br>
          Hollow Cylinder: $I = M R^2$
        </span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Equilibrium & Moments:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $\sum \vec{F}_{\text{ext}} = \vec{0} \quad \text{(Translational)}$<br>
          $\sum \vec{\tau}_{\text{ext}} = \vec{0} \quad \text{(Rotational)}$<br>
          Principle: $\text{Load} \times d_1 = \text{Effort} \times d_2$<br>
          $MA = ${frac('d_2', 'd_1')} = ${frac('\text{Effort Arm}', '\text{Load Arm}')}
        </span>
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
