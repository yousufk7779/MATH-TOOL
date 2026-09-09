const { themeColor, frac } = require('./c11_phy_5_helpers');

function getSolutionsPart1() {
  return `
  <!-- SECTION A: VERY SHORT ANSWER (VSA) QUESTIONS (1 MARK EACH) -->
  <div style="background: rgba(171, 71, 188, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each) &bull; Q1 to Q40
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Fundamental definitions, dimensional analysis, core formulas, SI units, and instantaneous conceptual facts.
    </p>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q1: Define the Centre of Mass (CM) of a system of particles.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>centre of mass</b> of a system of particles is defined as that unique spatial point at which the entire mass of the system is imagined to be concentrated, such that any external force applied to the system produces the exact same translational acceleration as if applied directly to this single point:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{R}_{\\text{cm}} = \frac{\\sum m_i \\vec{r}_i}{\\sum m_i} = \\frac{1}{M}\\sum m_i \\vec{r}_i$
    </div>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q2: Does the centre of mass of a body necessarily lie within the material of the body? Give an example.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>No</b>, the centre of mass does not necessarily lie inside the material of the body. For hollow or curved symmetrical objects—such as a uniform circular ring, a hollow sphere, or a hollow cylinder—the centre of mass lies at the geometric centre in empty space where no material exists.
    </p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q3: Write down the mathematical coordinates of the centre of mass for a two-particle system along the x-axis.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For two masses $m_1$ and $m_2$ located at coordinates $x_1$ and $x_2$ on the x-axis, the coordinate of the centre of mass is:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $X_{\\text{cm}} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}$
    </div>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q4: If the origin of the coordinate system is chosen at the centre of mass, what is the sum of mass moments &Sigma; m<sub>i</sub> r<sub>i</sub>?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> If the origin is placed at the centre of mass, $\\vec{R}_{\\text{cm}} = \\vec{0}$. Therefore, the sum of the mass moments of all particles about the centre of mass is strictly zero:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\sum m_i \\vec{r}_i = M \\vec{R}_{\\text{cm}} = \\vec{0}$
    </div>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q5: How does the centre of mass divide the straight line joining two particles of masses m<sub>1</sub> and m<sub>2</sub>?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The centre of mass divides the line segment joining the two masses internally in the <b>inverse ratio of their masses</b>:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $m_1 r_1 = m_2 r_2 \\implies \\frac{r_1}{r_2} = \\frac{m_2}{m_1}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      Hence, the centre of mass always lies closer to the heavier particle.
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q6: Why do internal forces have no effect on the motion of the centre of mass of a system?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> According to <b>Newton&apos;s Third Law of Motion</b>, internal mutual interaction forces between pairs of particles inside a system are strictly equal in magnitude and opposite in direction ($\\vec{F}_{ij} = -\\vec{F}_{ji}$). Therefore, their vector sum over the entire system identically cancels out to zero ($\\sum \\vec{F}_{\\text{int}} = \\vec{0}$).
    </p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q7: State the law of conservation of linear momentum for a system of particles.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> If the net external force acting on a system of particles is zero ($\\vec{F}_{\\text{ext}} = \\vec{0}$), the total linear momentum $\\vec{P}$ of the system remains strictly constant in time:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{P} = M \\vec{V}_{\\text{cm}} = \\text{constant vector}$
    </div>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q8: A bomb at rest explodes in mid-air into several fragments. What is the trajectory of the centre of mass of the fragments?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Since the explosion is driven solely by <b>internal chemical forces</b> and the only external force is gravity ($M\\vec{g}$), the centre of mass continues along its original parabolic path uninterrupted, exactly as if no explosion had occurred.
    </p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q9: Where is the centre of mass of a thin uniform rod of length L situated?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> By symmetry and calculus integration ($X_{\\text{cm}} = \\frac{1}{L}\\int_0^L x\\,dx$), the centre of mass of a uniform rod lies at its <b>geometric midpoint</b>:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $X_{\\text{cm}} = \\frac{L}{2}$ from either end.
    </div>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q10: Distinguish in one sentence between the Centre of Mass and Centre of Gravity.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>Centre of Mass</b> depends solely on the distribution of matter, whereas the <b>Centre of Gravity</b> is the point where the net resultant gravitational force acts; they coincide only in a uniform gravitational field.
    </p>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q11: Define torque (moment of a force) in vector form.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>torque</b> $\\vec{\\tau}$ of a force $\\vec{F}$ acting at a point whose position vector with respect to a reference origin is $\\vec{r}$ is given by the cross product:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ &bull; Magnitude: $\\tau = r F \\sin\\theta$
    </div>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q12: State the SI unit and dimensional formula of torque.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> Newton-metre (<b>N m</b>)
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M L<sup>2</sup> T<sup>-2</sup>]</b>
    </p>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q13: Work and torque have identical dimensional formulas [M L<sup>2</sup> T<sup>-2</sup>]. How are they fundamentally different?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Work</b> is a scalar quantity defined by a dot product ($W = \\vec{F} \\cdot \\vec{d}$) with unit Joule (J), whereas <b>torque</b> is an axial vector defined by a cross product ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}$) measured in Newton-metres (N m), representing rotational turning effect.
    </p>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q14: Under what conditions is the torque produced by a force zero?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Since $\\tau = r F \\sin\\theta$, torque is zero when:
      <br/>1. The force $F = 0$, or
      <br/>2. The line of action passes through the reference origin ($r = 0$), or
      <br/>3. The force is parallel or antiparallel to $\\vec{r}$ ($\theta = 0^\\circ$ or $180^\\circ$).
    </p>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q15: What is a couple in rotational mechanics?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A <b>couple</b> consists of two equal, opposite, and non-collinear parallel forces acting simultaneously on a rigid body, producing pure rotation without any translational acceleration.
    </p>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q16: Write the formula for the moment of a couple.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The moment of a couple is equal to the product of either force magnitude and the perpendicular distance $d$ (arm of the couple) between their parallel lines of action:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\tau_{\\text{couple}} = F \\times d$
    </div>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q17: Why is the handle of a door placed at its outermost edge away from the hinges?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Because torque $\\tau = r F \\sin\\theta$. Maximizing the lever arm $r$ produces the required turning torque with the minimum applied manual force $F$.
    </p>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q18: Define angular momentum of a particle in vector form.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>angular momentum</b> $\\vec{L}$ of a particle of linear momentum $\\vec{p}$ with position vector $\\vec{r}$ relative to an origin is defined as:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{L} = \\vec{r} \\times \\vec{p} = m(\\vec{r} \\times \\vec{v})$
    </div>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q19: State the SI unit and dimensional formula of angular momentum.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> Joule-second (<b>J s</b>) or <b>kg m<sup>2</sup> s<sup>-1</sup></b>
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M L<sup>2</sup> T<sup>-1</sup>]</b> (identical to Planck&apos;s constant $h$)
    </p>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q20: State the fundamental relation between torque and angular momentum.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The time rate of change of the total angular momentum of a particle or system equals the net external torque acting on it:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{\\tau}_{\\text{ext}} = \frac{d\\vec{L}}{dt}$
    </div>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q21: State the Law of Conservation of Angular Momentum.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> If the net external torque acting on a system is zero ($\\vec{\\tau}_{\\text{ext}} = \\vec{0}$), the total angular momentum $\\vec{L}$ of the system remains strictly constant:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{L} = I \\vec{\\omega} = \\text{constant} \\implies I_1 \\omega_1 = I_2 \\omega_2$
    </div>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q22: Why does an ice-skater spin faster when she pulls her arms inward?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> By pulling her arms in, mass moves closer to the rotation axis, decreasing her moment of inertia $I$. To conserve angular momentum ($L = I\\omega = \\text{constant}$), her angular velocity $\\omega$ increases proportionally.
    </p>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q23: How does a diver execute multiple somersaults before plunging into water?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The diver tucks the body by curling arms and legs inward, drastically reducing moment of inertia $I$, which causes the spin speed $\\omega$ to surge according to $I_1\\omega_1 = I_2\\omega_2$.
    </p>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q24: What are the two necessary and sufficient conditions for complete mechanical equilibrium of a rigid body?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>1. <b>Translational Equilibrium:</b> Net external force must vanish: $\\sum \\vec{F}_{\\text{ext}} = \\vec{0}$.
      <br/>2. <b>Rotational Equilibrium:</b> Net external torque about any point must vanish: $\\sum \\vec{\\tau}_{\\text{ext}} = \\vec{0}$.
    </p>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q25: State the Principle of Moments for a lever in rotational equilibrium.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For a lever in rotational equilibrium about a fulcrum:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\text{Sum of Anticlockwise Moments} = \\text{Sum of Clockwise Moments} \\implies \\text{Load} \\times d_1 = \\text{Effort} \\times d_2$
    </div>
  </div>

  <!-- Q26 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q26: What is the mechanical advantage (M.A.) of a lever?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Mechanical advantage is the ratio of Load to Effort, or Effort Arm to Load Arm:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\text{M.A.} = \frac{\\text{Load}}{\\text{Effort}} = \\frac{d_2}{d_1} = \frac{\\text{Effort Arm}}{\\text{Load Arm}}$
    </div>
  </div>

  <!-- Q27 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q27: Write down the three kinematic equations of rotational motion for constant angular acceleration &alpha;.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>1. $\\omega = \\omega_0 + \\alpha t$
      <br/>2. $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$
      <br/>3. $\\omega^2 = \\omega_0^2 + 2\\alpha \\theta$
    </p>
  </div>

  <!-- Q28 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q28: Define Moment of Inertia of a rigid body about a given axis of rotation.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>moment of inertia</b> $I$ is defined as the sum of the products of each constituent particle&apos;s mass and the square of its perpendicular distance from the rotation axis:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I = \\sum_{i=1}^n m_i r_i^2$
    </div>
  </div>

  <!-- Q29 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q29: State the SI unit and dimensional formula of moment of inertia.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> kilogram metre-squared (<b>kg m<sup>2</sup></b>)
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M L<sup>2</sup> T<sup>0</sup>]</b>
    </p>
  </div>

  <!-- Q30 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q30: State the physical significance of moment of inertia.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Moment of inertia plays the exact same role in rotational motion that mass plays in linear motion—it represents the rotational inertia of the body resisting changes in its rotational state under an applied torque ($\\tau = I\\alpha$).
    </p>
  </div>

  <!-- Q31 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q31: On what factors does the moment of inertia of a body depend?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Moment of inertia depends on:
      <br/>1. Total mass of the body $M$.
      <br/>2. Shape and size of the body.
      <br/>3. Distribution of mass relative to the axis of rotation.
      <br/>4. Position and orientation of the chosen rotational axis.
    </p>
  </div>

  <!-- Q32 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q32: Define Radius of Gyration (k).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>radius of gyration</b> $k$ is the effective perpendicular distance from the axis of rotation to a point where, if the entire mass $M$ of the body were concentrated, its moment of inertia would be equal to the actual moment of inertia $I$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I = M k^2 \\implies k = \\sqrt{\\frac{I}{M}}}$
    </div>
  </div>

  <!-- Q33 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q33: State the SI unit and dimensional formula of radius of gyration.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> metre (<b>m</b>)
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]</b>
    </p>
  </div>

  <!-- Q34 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q34: What is the moment of inertia of a thin circular ring of mass M and radius R about its central symmetry axis?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Since all constituent mass elements are at an identical perpendicular distance $R$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_{\\text{ring}} = M R^2$ &bull; ($k = R$)
    </div>
  </div>

  <!-- Q35 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q35: State the moment of inertia of a uniform circular disc of mass M and radius R about its central perpendicular axis.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_{\\text{disc}} = \\frac{1}{2} M R^2$ &bull; ($k = \\frac{R}{\\sqrt{2}}$)
    </div>
  </div>

  <!-- Q36 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q36: State the moment of inertia of a thin uniform rod of mass M and length L about an axis through its centre perpendicular to length.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_{\\text{rod, cm}} = \\frac{1}{12} M L^2$ &bull; ($k = \\frac{L}{\\sqrt{12}}$)
    </div>
  </div>

  <!-- Q37 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q37: What is the moment of inertia of a thin rod of mass M and length L about an axis through one of its ends?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_{\\text{rod, end}} = \\frac{1}{3} M L^2$
    </div>
  </div>

  <!-- Q38 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q38: State the moment of inertia of a uniform solid sphere of mass M and radius R about its diameter.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_{\\text{solid sphere}} = \\frac{2}{5} M R^2$ &bull; ($k = \\sqrt{\\frac{2}{5}}} R$)
    </div>
  </div>

  <!-- Q39 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q39: State the moment of inertia of a thin spherical shell (hollow sphere) about its diameter.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_{\\text{hollow sphere}} = \\frac{2}{3} M R^2$ &bull; ($k = \\sqrt{\\frac{2}{3}}} R$)
    </div>
  </div>

  <!-- Q40 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q40: Between a solid cylinder and a hollow cylinder of equal mass and radius, which has a larger moment of inertia about its central axis?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>hollow cylinder</b> ($I = M R^2$) has a larger moment of inertia than the solid cylinder ($I = \\frac{1}{2} M R^2$), because all of its mass is concentrated at the maximum possible distance $R$ from the rotational axis.
    </p>
  </div>
`;
}

module.exports = { getSolutionsPart1 };
