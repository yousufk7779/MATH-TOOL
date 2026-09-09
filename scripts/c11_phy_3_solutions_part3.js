const { themeColor, frac } = require('./c11_phy_3_helpers');

function getLaQuestions() {
  const qList = [
    {
      q: "State Newton's Second Law of Motion. Derive the master vector relation F = m a for a body of constant mass, explain how the absolute SI unit of force (1 Newton) is calibrated, and write the law in Cartesian component form.",
      sol: `<b>1. Statement of Newton's Second Law:</b><br>
      The time rate of change of linear momentum of an object is directly proportional to the net applied unbalanced external force, and this rate of change takes place along the spatial direction in which the force acts.<br><br>
      <b>2. Mathematical Derivation ($\vec{F} = m\vec{a}$):</b><br>
      Let a particle of mass $m$ move with instantaneous velocity $\vec{v}$.<br>
      Its linear momentum is: $\vec{p} = m \vec{v}$.<br>
      By Newton's Second Law: $\vec{F} \propto ${frac('d\\vec{p}', 'dt')} \implies \vec{F} = k \, ${frac('d\\vec{p}', 'dt')}$, where $k$ is a constant of proportionality.<br>
      Substituting $\vec{p} = m\vec{v}$ and applying the product rule of calculus:<br>
      $\vec{F} = k \, ${frac('d', 'dt')}(m\vec{v}) = k \left( m \, ${frac('d\\vec{v}', 'dt')} + \vec{v} \, ${frac('dm', 'dt')} \right)$.<br>
      For a rigid body moving at speeds far below the speed of light, mass is strictly constant ($dm/dt = 0$):<br>
      $\vec{F} = k \, m \, ${frac('d\\vec{v}', 'dt')} = k \, m \vec{a}$, where $\vec{a} = d\vec{v}/dt$ is instantaneous acceleration.<br><br>
      <b>3. Unit Calibration of $k$:</b><br>
      The SI absolute unit of force, the <b>Newton (N)</b>, is defined such that a force of $1\text{ N}$ acting on a mass of $1\text{ kg}$ produces an acceleration of $1\text{ m s}^{-2}$.<br>
      Substituting $F = 1\text{ N}$, $m = 1\text{ kg}$, and $a = 1\text{ m s}^{-2}$ into $F = k m a$ yields:<br>
      $1 = k(1)(1) \implies \mathbf{k = 1}$.<br>
      Hence, the fundamental vector equation is:
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \vec{F} = m \vec{a} = m \, ${frac('d\\vec{v}', 'dt')} = m \, ${frac('d^2\\vec{r}', 'dt^2')}
      </div>
      <b>4. Cartesian Component Form:</b><br>
      Since force and acceleration are 3D vectors: $\vec{F} = F_x\hat{i} + F_y\hat{j} + F_z\hat{k}$ and $\vec{a} = a_x\hat{i} + a_y\hat{j} + a_z\hat{k}$.<br>
      Equating components along each orthogonal axis:<br>
      <div style="text-align: center; margin: 8px 0; color: #FFCC80; font-size: 15px;">
        F_x = m a_x = m \, ${frac('d v_x', 'dt')}, \quad F_y = m a_y = m \, ${frac('d v_y', 'dt')}, \quad F_z = m a_z = m \, ${frac('d v_z', 'dt')}
      </div>`
    },
    {
      q: "Prove analytically that Newton's Second Law of Motion is the 'Real Law of Motion' by demonstrating that: (a) Newton's First Law is completely contained within the Second Law, and (b) Newton's Third Law can be deduced from the Second Law.",
      sol: `<b>1. Conceptual Thesis:</b><br>
      Newton's Second Law is termed the fundamental or 'real' law of motion because both the First Law (Law of Inertia) and the Third Law (Law of Action-Reaction) are logical, mathematical consequences contained within it.<br><br>
      <b>(a) Deducing Newton's First Law from the Second Law:</b><br>
      By Newton's Second Law: $\vec{F} = m\vec{a}$.<br>
      If the net external force acting on the body is zero ($\vec{F} = \vec{0}$):<br>
      $\vec{0} = m\vec{a}$.<br>
      Since the inertial mass of a material object cannot be zero ($m \ne 0$), we must have:<br>
      $\vec{a} = \vec{0} \implies ${frac('d\\vec{v}', 'dt')} = \vec{0} \implies \vec{v} = \text{Constant Vector}$.<br>
      &bull; If the body was initially at rest ($\vec{v} = \vec{0}$), it continues to remain at rest indefinitely.<br>
      &bull; If the body was in motion with velocity $\vec{v}$, it continues moving at constant speed along the exact same straight line.<br>
      This is precisely the statement of Newton's First Law. Hence, <b>the First Law is contained within the Second Law</b>.<br><br>
      <b>(b) Deducing Newton's Third Law from the Second Law:</b><br>
      Consider an isolated system consisting of two interacting bodies $A$ and $B$ upon which no external forces act ($\vec{F}_{\text{ext}} = \vec{0}$).<br>
      Let $\vec{F}_{AB}$ be the force exerted on $A$ by $B$, and $\vec{F}_{BA}$ be the force exerted on $B$ by $A$.<br>
      By Newton's Second Law, the rate of change of momentum of each body is:<br>
      $\vec{F}_{AB} = ${frac('d\\vec{p}_A', 'dt')} \quad \text{and} \quad \vec{F}_{BA} = ${frac('d\\vec{p}_B', 'dt')}$.<br>
      Adding both equations:<br>
      $\vec{F}_{AB} + \vec{F}_{BA} = ${frac('d\\vec{p}_A', 'dt')} + ${frac('d\\vec{p}_B', 'dt')} = ${frac('d', 'dt')}(\vec{p}_A + \vec{p}_B) = ${frac('d\\vec{P}_{\\text{total}}', 'dt')}$.<br>
      Since no external forces act on the system, the total linear momentum must be conserved ($d\vec{P}_{\\text{total}}/dt = \vec{0}$):<br>
      $\vec{F}_{AB} + \vec{F}_{BA} = \vec{0} \implies \mathbf{\vec{F}_{AB} = -\vec{F}_{BA}}$.<br>
      This proves that Action is equal and opposite to Reaction, which is Newton's Third Law. Hence, <b>both laws are contained within the Second Law</b>.`
    },
    {
      q: "Define Impulse. State and derive the Impulse-Momentum Theorem from Newton's Second Law. Explain three practical everyday applications where impulsive forces are modified to prevent injury or damage.",
      sol: `<b>1. Definition of Impulse ($\vec{J}$):</b><br>
      Impulse is the measure of the total effect produced by a force acting over a finite time interval, defined mathematically as the time integral of the force vector:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        \vec{J} = \int_{t_1}^{t_2} \vec{F} \, dt = \vec{F}_{\\text{avg}} \Delta t
      </div>
      <b>2. Derivation of the Impulse-Momentum Theorem:</b><br>
      By Newton's Second Law: $\vec{F} = ${frac('d\\vec{p}', 'dt')}$.<br>
      Rearranging: $d\vec{p} = \vec{F} \, dt$.<br>
      Integrating both sides from initial state $(t_1, \vec{p}_1)$ to final state $(t_2, \vec{p}_2)$:<br>
      $\int_{\vec{p}_1}^{\vec{p}_2} d\vec{p} = \int_{t_1}^{t_2} \vec{F} \, dt$.<br>
      $[\vec{p}]_{\vec{p}_1}^{\vec{p}_2} = \vec{J} \implies \mathbf{\vec{J} = \vec{p}_2 - \vec{p}_1 = \Delta\vec{p}}$.<br>
      <i>The impulse delivered by an applied force equals the net change in linear momentum produced by it.</i><br><br>
      <b>3. Three Everyday Applications:</b><br>
      &bull; <b>1. Catching a Cricket Ball:</b> A fielder catches a fast-moving ball by pulling his hands backward. Because $\Delta\vec{p}$ is fixed, increasing the impact duration $\Delta t$ drastically reduces the average force $\vec{F}_{\\text{avg}} = \Delta\vec{p}/\Delta t$ on his hands, preventing broken bones.<br>
      &bull; <b>2. Automobile Airbags & Crumple Zones:</b> During a frontal collision, the crumple zone collapses and airbags inflate, lengthening deceleration time $\Delta t$ by a factor of 10 to 20, thereby reducing the impulsive force exerted on the driver's chest and head below lethal thresholds.<br>
      &bull; <b>3. Packing Brittle Chinaware in Bubble Wrap:</b> Fragile porcelain is enveloped in air-filled bubble wrap so that any shock or drop deforms the wrap, prolonging collision time $\Delta t$ and cushioning against sharp impulsive force spikes.`
    },
    {
      q: "State the Principle of Conservation of Linear Momentum. Derive it rigorously for an isolated system of two colliding particles using: (a) Newton's Third Law, (b) Newton's Second Law.",
      sol: `<b>1. Statement:</b><br>
      The total linear momentum of an isolated system (a system subjected to zero net external unbalanced force, $\sum \vec{F}_{\\text{ext}} = \vec{0}$) remains strictly conserved in magnitude and direction, regardless of internal interactions or collisions among the particles.<br><br>
      <b>2. Derivation using Newton's Third Law:</b><br>
      Consider two particles $A$ and $B$ of masses $m_1$ and $m_2$ moving with initial velocities $\vec{u}_1$ and $\vec{u}_2$.<br>
      They collide for a short duration $\Delta t$ and emerge with final velocities $\vec{v}_1$ and $\vec{v}_2$.<br>
      During contact:<br>
      &bull; Force on $A$ due to $B$ is $\vec{F}_{AB} = m_1 \left(${frac('\\vec{v}_1 - \\vec{u}_1', '\\Delta t')}\right)$.<br>
      &bull; Force on $B$ due to $A$ is $\vec{F}_{BA} = m_2 \left(${frac('\\vec{v}_2 - \\vec{u}_2', '\\Delta t')}\right)$.<br>
      By Newton's Third Law: $\vec{F}_{AB} = -\vec{F}_{BA}$.<br>
      $m_1 \left(${frac('\\vec{v}_1 - \\vec{u}_1', '\\Delta t')}\right) = -m_2 \left(${frac('\\vec{v}_2 - \\vec{u}_2', '\\Delta t')}\right)$.<br>
      Multiplying by $\Delta t$:<br>
      $m_1\vec{v}_1 - m_1\vec{u}_1 = -(m_2\vec{v}_2 - m_2\vec{u}_2) = -m_2\vec{v}_2 + m_2\vec{u}_2$.<br>
      Rearranging terms:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        m_1\vec{u}_1 + m_2\vec{u}_2 = m_1\vec{v}_1 + m_2\vec{v}_2 \implies \vec{P}_{\\text{initial}} = \vec{P}_{\\text{final}}
      </div>
      <b>3. Derivation using Newton's Second Law:</b><br>
      For the total system: $\vec{F}_{\\text{ext}} = ${frac('d\\vec{P}_{\\text{total}}', 'dt')}$.<br>
      For an isolated system, $\vec{F}_{\\text{ext}} = \vec{0} \implies ${frac('d\\vec{P}_{\\text{total}}', 'dt')} = \vec{0}$.<br>
      Integrating yields: $\mathbf{\vec{P}_{\\text{total}} = \sum m_i \vec{v}_i = \\text{Constant Vector}}$.`
    },
    {
      q: "Derive an analytical formula for the Recoil Velocity of a gun of mass M firing a bullet of mass m with muzzle speed v. Prove that the kinetic energy of the bullet is substantially greater than the recoil kinetic energy of the gun.",
      sol: `<b>1. Recoil Velocity Derivation:</b><br>
      Let the gun of mass $M$ and bullet of mass $m$ be initially at rest before firing.<br>
      Initial momentum of system: $\vec{P}_{\\text{initial}} = \vec{0}$.<br>
      Upon detonation of the cartridge, the bullet leaves the barrel with muzzle velocity $\vec{v}$.<br>
      Let the gun recoil backward with velocity $\vec{V}_R$.<br>
      Since the chemical explosion forces are internal to the gun-bullet system, external force is zero ($\vec{F}_{\\text{ext}} = \vec{0}$).<br>
      By the Law of Conservation of Linear Momentum:<br>
      $\vec{P}_{\\text{initial}} = \vec{P}_{\\text{final}} \implies \vec{0} = m\vec{v} + M\vec{V}_R$.<br>
      Solving for recoil velocity:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \vec{V}_R = -${frac('m', 'M')} \vec{v} \quad \implies \quad V_R = ${frac('m', 'M')} v
      </div>
      The negative sign indicates that the gun kicks back in the direction opposite to bullet flight.<br><br>
      <b>2. Kinetic Energy Comparison:</b><br>
      Kinetic energy of bullet: $K_b = \frac{1}{2} m v^2 = ${frac('p^2', '2m')}$.<br>
      Kinetic energy of recoiling gun: $K_g = \frac{1}{2} M V_R^2 = ${frac('p^2', '2M')}$.<br>
      Since both have identical momentum magnitudes ($p_b = p_g = p$):<br>
      ${frac('K_b', 'K_g')} = ${frac('p^2 / (2m)', 'p^2 / (2M)')} = \mathbf{${frac('M', 'm')}}$.<br>
      Because gun mass is vastly greater than bullet mass ($M \gg m$), it follows that:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        K_b \gg K_g
      </div>
      Almost all the explosive chemical energy is transferred as kinetic energy to the bullet, while only a small fraction appears as recoil energy in the gun.`
    },
    {
      q: "Formulate the theory of Rocket Propulsion as a variable mass system: Derive expressions for: (a) Upward thrust on the rocket, (b) Instantaneous acceleration at time t, (c) Burnt-out velocity of the rocket.",
      sol: `<b>1. Conceptual Physical Model:</b><br>
      A rocket accelerates by ejecting combustion gases at high speed $u$ relative to the nozzle. Since propellant is burned continuously, the mass of the rocket decreases with time, making it a classic <b>variable-mass system</b>.<br><br>
      <b>2. Derivations:</b><br>
      Let initial mass of rocket with fuel at $t = 0$ be $m_0$.<br>
      At time $t$, mass is $m$ and upward velocity is $v$.<br>
      In time interval $dt$, mass $dm$ of gas is expelled downward with speed $u$ relative to the rocket, so its velocity relative to Earth is $(v - u)$.<br>
      The rocket's mass becomes $(m - dm)$ and its velocity increases to $(v + dv)$.<br><br>
      By conservation of linear momentum:<br>
      $m v = (m - dm)(v + dv) + dm(v - u)$<br>
      $m v = m v + m \, dv - v \, dm - dm \, dv + v \, dm - u \, dm$.<br>
      Neglecting the second-order differential product $dm \, dv \approx 0$:<br>
      $0 = m \, dv - u \, dm \implies m \, dv = u \, dm$.<br>
      Dividing by $dt$:<br>
      $m \, ${frac('dv', 'dt')} = u \, ${frac('dm', 'dt')}$.<br><br>
      <b>(a) Upward Thrust ($F_{\\text{thrust}}$):</b><br>
      Since mass is decreasing, rate of fuel consumption is $-dm/dt$:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        F_{\\text{thrust}} = -u \, ${frac('dm', 'dt')}
      </div>
      <b>(b) Instantaneous Acceleration under Gravity ($a$):</b><br>
      Taking downward gravitational pull $mg$ into account:<br>
      $F_{\\text{net}} = F_{\\text{thrust}} - mg \implies m a = -u \, ${frac('dm', 'dt')} - mg$.<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        a(t) = -${frac('u', 'm')} \, ${frac('dm', 'dt')} - g
      </div>
      <b>(c) Burnt-Out Velocity ($v_b$):</b><br>
      From $dv = -u \frac{dm}{m} - g \, dt$, integrating from $t = 0$ ($v = 0, m = m_0$) to burn-out ($v = v_b, m = m_b$):<br>
      $\int_0^{v_b} dv = -u \int_{m_0}^{m_b} ${frac('dm', 'm')} - g \int_0^t dt$<br>
      $v_b = -u [\ln m]_{m_0}^{m_b} - gt = -u (\ln m_b - \ln m_0) - gt$<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v_b = u \ln\left(${frac('m_0', 'm_b')}\right) - gt
      </div>`
    },
    {
      q: "State Lami's Theorem for three coplanar concurrent forces in equilibrium. Provide a complete analytical proof using the sine rule of vector triangles.",
      sol: `<b>1. Statement of Lami's Theorem:</b><br>
      If three coplanar concurrent forces acting at a point keep a particle in static equilibrium, each force is directly proportional to the sine of the angle included between the remaining two forces:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        ${frac('F_1', '\\sin\\alpha')} = ${frac('F_2', '\\sin\\beta')} = ${frac('F_3', '\\sin\\gamma')}
      </div>
      where $\alpha$ is the angle between $\vec{F}_2$ and $\vec{F}_3$, $\beta$ is between $\vec{F}_3$ and $\vec{F}_1$, and $\gamma$ is between $\vec{F}_1$ and $\vec{F}_2$.<br><br>
      <b>2. Analytical Proof:</b><br>
      Let three forces $\vec{F}_1, \vec{F}_2, \vec{F}_3$ act concurrently at point $O$ in equilibrium:<br>
      $\vec{F}_1 + \vec{F}_2 + \vec{F}_3 = \vec{0} \implies \vec{F}_1 + \vec{F}_2 = -\vec{F}_3$.<br>
      By the triangle law of vector addition, these three forces can be represented both in magnitude and direction by the three sides of a closed triangle $ABC$ taken in cyclic order:<br>
      $\vec{AB} = \vec{F}_1$, $\vec{BC} = \vec{F}_2$, $\vec{CA} = \vec{F}_3$.<br><br>
      The interior angles of triangle $ABC$ are related to the angles between the vectors by exterior angle relations:<br>
      &bull; Interior angle at $A = 180^\circ - \beta$<br>
      &bull; Interior angle at $B = 180^\circ - \gamma$<br>
      &bull; Interior angle at $C = 180^\circ - \alpha$<br><br>
      Applying the standard trigonometric Sine Rule to $\Delta ABC$:<br>
      ${frac('BC', '\\sin(\\angle A)')} = ${frac('CA', '\\sin(\\angle B)')} = ${frac('AB', '\\sin(\\angle C)')}$.<br>
      Substitute the force magnitudes and angles:<br>
      ${frac('F_2', '\\sin(180^\\circ - \\beta)')} = ${frac('F_3', '\\sin(180^\\circ - \\gamma)')} = ${frac('F_1', '\\sin(180^\\circ - \\alpha)')}$.<br>
      Since $\sin(180^\circ - \theta) = \sin\theta$, this yields:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        ${frac('F_1', '\\sin\\alpha')} = ${frac('F_2', '\\sin\\beta')} = ${frac('F_3', '\\sin\\gamma')}
      </div>
      This completes the analytical proof.`
    },
    {
      q: "In an Atwood Machine, two unequal masses m_1 and m_2 (with m_1 > m_2) are suspended over a light, frictionless, fixed pulley by a light inextensible string. Derive: (a) Acceleration of the system, (b) Tension in the string, (c) Downward thrust on the pulley support.",
      sol: `<b>1. Free-Body Diagram (FBD) Equations:</b><br>
      Because the string is inextensible, both masses move with identical acceleration magnitude $a$. Mass $m_1$ moves downward while mass $m_2$ moves upward.<br>
      Because the pulley is light and frictionless, tension $T$ is uniform throughout the string.<br>
      &bull; <b>Equation of motion for $m_1$ (downward):</b><br>
      $m_1 g - T = m_1 a \quad \implies \quad T = m_1(g - a) \quad \ldots(1)$<br>
      &bull; <b>Equation of motion for $m_2$ (upward):</b><br>
      $T - m_2 g = m_2 a \quad \implies \quad T = m_2(g + a) \quad \ldots(2)$<br><br>
      <b>(a) Acceleration of the System ($a$):</b><br>
      Equating the expressions for $T$ from (1) and (2):<br>
      $m_1 g - m_1 a = m_2 g + m_2 a \implies (m_1 - m_2)g = (m_1 + m_2)a$.<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        a = \left(${frac('m_1 - m_2', 'm_1 + m_2')}\right) g
      </div>
      <b>(b) Tension in the String ($T$):</b><br>
      Substitute $a$ into equation (2):<br>
      $T = m_2(g + a) = m_2\left[ g + \left(${frac('m_1 - m_2', 'm_1 + m_2')}\right)g \right] = m_2 g \left[ ${frac('(m_1 + m_2) + (m_1 - m_2)', 'm_1 + m_2')} \right]$<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        T = \left(${frac('2 m_1 m_2', 'm_1 + m_2')}\right) g
      </div>
      <b>(c) Force on the Pulley Support ($F_P$):</b><br>
      Two string segments pull straight down on the pulley, each with tension $T$. Neglecting pulley mass:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        F_P = 2 T = \left(${frac('4 m_1 m_2', 'm_1 + m_2')}\right) g
      </div>`
    },
    {
      q: "Two bodies of masses m_1 and m_2 connected by a light string lie on a smooth horizontal surface. A horizontal pulling force F is applied to m_1. Derive expressions for: (a) Acceleration of the system, (b) Tension in the connecting string. Extend the result to three connected bodies.",
      sol: `<b>1. Two Connected Bodies:</b><br>
      Let horizontal force $F$ pull mass $m_1$ to the right, and let mass $m_2$ be connected to $m_1$ by a taut string with tension $T$. Surface is smooth ($\mu = 0$).<br>
      Both masses accelerate together with acceleration $a$.<br>
      &bull; <b>For mass $m_1$:</b> $F - T = m_1 a \quad \ldots(1)$<br>
      &bull; <b>For mass $m_2$:</b> $T = m_2 a \quad \ldots(2)$<br><br>
      <b>(a) Acceleration:</b><br>
      Adding (1) and (2):<br>
      $F = (m_1 + m_2)a \implies \mathbf{a = ${frac('F', 'm_1 + m_2')}}$.<br><br>
      <b>(b) Tension:</b><br>
      Substitute $a$ into (2):<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        T = m_2 a = \left(${frac('m_2', 'm_1 + m_2')}\right) F
      </div>
      <b>2. Extension to Three Connected Bodies ($m_1, m_2, m_3$):</b><br>
      Let $m_1$ be pulled by $F$, connected to $m_2$ by string with tension $T_1$, and $m_2$ connected to $m_3$ by string with tension $T_2$.<br>
      Total mass $= m_1 + m_2 + m_3$.<br>
      System acceleration: $\mathbf{a = ${frac('F', 'm_1 + m_2 + m_3')}}$.<br>
      &bull; Tension $T_1$ pulls $(m_2 + m_3)$: $\mathbf{T_1 = (m_2 + m_3) a = \left(${frac('m_2 + m_3', 'm_1 + m_2 + m_3')}\right) F}$.<br>
      &bull; Tension $T_2$ pulls $m_3$ alone: $\mathbf{T_2 = m_3 a = \left(${frac('m_3', 'm_1 + m_2 + m_3')}\right) F}$.`
    },
    {
      q: "A block of mass m_1 on a rough horizontal table (&mu;_k) is connected by a light string over a frictionless pulley to a hanging mass m_2. Derive expressions for: (a) Common acceleration of the blocks, (b) Tension in the string, (c) Minimum mass m_2 required to initiate motion from rest (&mu;_s).",
      sol: `<b>1. Free Body Equations of Motion:</b><br>
      Let hanging mass $m_2$ descend with acceleration $a$, pulling horizontal mass $m_1$ across the table.<br>
      Normal reaction on $m_1$: $N = m_1 g$.<br>
      Kinetic friction on $m_1$: $f_k = \mu_k N = \mu_k m_1 g$.<br>
      &bull; <b>For mass $m_1$:</b> $T - f_k = m_1 a \implies T - \mu_k m_1 g = m_1 a \quad \ldots(1)$<br>
      &bull; <b>For mass $m_2$:</b> $m_2 g - T = m_2 a \quad \ldots(2)$<br><br>
      <b>(a) Acceleration:</b><br>
      Adding (1) and (2):<br>
      $m_2 g - \mu_k m_1 g = (m_1 + m_2)a$<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        a = \left(${frac('m_2 - \mu_k m_1', 'm_1 + m_2')}\right) g
      </div>
      <b>(b) Tension in String:</b><br>
      Multiply (1) by $m_2$ and (2) by $m_1$, then subtract:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        T = \left(${frac('m_1 m_2 (1 + \mu_k)', 'm_1 + m_2')}\right) g
      </div>
      <b>(c) Condition to Initiate Motion:</b><br>
      To start motion from rest, the downward gravitational pull of $m_2$ must exceed the maximum limiting static friction on $m_1$ ($f_L = \mu_s m_1 g$):<br>
      $m_2 g > \mu_s m_1 g \implies \mathbf{m_2 > \mu_s m_1}$.`
    },
    {
      q: "Explain the microscopic origin of friction using both the classical mechanical roughness model and the modern molecular adhesion (cold-welding) theory. Why does mirror-polishing beyond a certain limit increase friction rather than decreasing it?",
      sol: `<b>1. Classical Mechanical Roughness Theory:</b><br>
      Macroscopically smooth surfaces possess microscopic hills (asperities) and valleys. The classical view attributed friction to the mechanical interlocking of these jagged asperities. Moving one surface requires lifting or shearing these interlocking peaks.<br><br>
      <b>2. Modern Molecular Adhesion (Cold-Welding) Theory:</b><br>
      When two surfaces are placed in contact, they touch only at the tiny summit tips of asperities. Consequently, the <b>true contact area ($A_{\\text{true}}$)</b> is only $\approx 10^{-4}$ of the apparent surface area ($A_{\\text{apparent}}$).<br>
      Under the massive localized pressure ($P = N / A_{\\text{true}}$), the atoms at the contact tips come within interatomic bond distances ($\sim 10^{-10}\text{ m}$), forming strong chemical/metallic bonds known as <b>cold-welded micro-junctions</b>.<br>
      Friction is primarily the tangential shearing force required to rupture these atomic welds: $f = A_{\\text{true}} \times \tau_{\\text{shear}}$.<br><br>
      <b>3. The Paradox of Excessive Polishing:</b><br>
      Moderate polishing removes large asperities, decreasing mechanical roughness and reducing friction.<br>
      However, if surfaces are <b>excessively mirror-polished (super-finished)</b>, the surfaces become so flat that the actual contact area $A_{\\text{true}}$ expands dramatically. Millions more surface atoms are brought into direct atomic contact, creating massive intermolecular adhesion. As a result, the force required to break these bonds increases, and <b>friction increases sharply</b> (seizing or cold galling).`
    },
    {
      q: "Define Angle of Friction (&theta;) and Angle of Repose (&alpha;). Prove analytically that &theta; = &alpha;, and derive the expression for acceleration of a body sliding down an inclined plane when inclination angle exceeds the angle of repose.",
      sol: `<b>1. Angle of Friction ($\theta$):</b><br>
      The angle that the resultant of limiting friction $\vec{f}_L$ and normal reaction $\vec{N}$ makes with the normal reaction:<br>
      $\tan\theta = ${frac('f_L', 'N')} = ${frac('\mu_s N', 'N')} = \mu_s \implies \mathbf{\theta = \tan^{-1}(\mu_s)}$.<br><br>
      <b>2. Angle of Repose ($\alpha$):</b><br>
      The maximum angle of inclination of a rough incline at which a body placed upon it just rests in equilibrium without sliding down under gravity.<br>
      At impending slip:<br>
      &bull; Along incline: $mg \sin\alpha = f_L$<br>
      &bull; Normal to incline: $N = mg \cos\alpha$<br>
      Dividing: $\tan\alpha = ${frac('f_L', 'N')} = \mu_s \implies \mathbf{\alpha = \tan^{-1}(\mu_s)}$.<br><br>
      <b>3. Equivalence:</b><br>
      Since $\tan\theta = \mu_s$ and $\tan\alpha = \mu_s$, it strictly follows that: <b>$\theta = \alpha$ (Angle of Friction = Angle of Repose)</b>.<br><br>
      <b>4. Acceleration down Incline ($\alpha > \theta$):</b><br>
      When inclination angle $\alpha$ exceeds the angle of repose, the downward gravitational component $mg\sin\alpha$ exceeds limiting friction and sliding begins.<br>
      Normal reaction: $N = mg \cos\alpha$.<br>
      Kinetic friction: $f_k = \mu_k N = \mu_k mg \cos\alpha$.<br>
      Net downward accelerating force along the incline:<br>
      $F_{\\text{net}} = mg \sin\alpha - f_k = mg \sin\alpha - \mu_k mg \cos\alpha$.<br>
      Applying $F_{\\text{net}} = ma$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        a = g(\sin\alpha - \mu_k \cos\alpha)
      </div>`
    },
    {
      q: "Prove analytically, using complete resolution of forces, why it is noticeably easier to PULL a heavy lawn roller than to PUSH it across the ground.",
      sol: `<b>1. Pushing the Lawn Roller:</b><br>
      Let a compressive pushing force $F$ be applied at an angle $\theta$ below the horizontal.<br>
      Resolving force $F$ into rectangular components:<br>
      &bull; Horizontal forward component: $F \cos\theta$<br>
      &bull; Vertical downward component: $F \sin\theta$<br>
      The downward component acts in the same direction as gravity ($mg$).<br>
      Vertical equilibrium equation:<br>
      $N_1 - mg - F \sin\theta = 0 \implies \mathbf{N_1 = mg + F \sin\theta}$.<br>
      Kinetic friction opposing motion is:<br>
      <div style="text-align: center; margin: 6px 0; color: #FF8A65; font-size: 15px;">
        f_{\\text{push}} = \mu_k N_1 = \mu_k (mg + F \sin\theta)
      </div>
      Net forward accelerating force: $F_{\\text{net, push}} = F \cos\theta - \mu_k(mg + F \sin\theta)$.<br><br>
      <b>2. Pulling the Lawn Roller:</b><br>
      Let an identical pulling force $F$ be applied at an angle $\theta$ above the horizontal.<br>
      Resolving force $F$ into rectangular components:<br>
      &bull; Horizontal forward component: $F \cos\theta$<br>
      &bull; Vertical upward component: $F \sin\theta$<br>
      The upward component relieves the ground pressure.<br>
      Vertical equilibrium equation:<br>
      $N_2 + F \sin\theta - mg = 0 \implies \mathbf{N_2 = mg - F \sin\theta}$.<br>
      Kinetic friction opposing motion is:<br>
      <div style="text-align: center; margin: 6px 0; color: #76FF03; font-size: 15px;">
        f_{\\text{pull}} = \mu_k N_2 = \mu_k (mg - F \sin\theta)
      </div>
      Net forward accelerating force: $F_{\\text{net, pull}} = F \cos\theta - \mu_k(mg - F \sin\theta)$.<br><br>
      <b>3. Comparison:</b><br>
      Since $N_2 < N_1$, we have $f_{\\text{pull}} < f_{\\text{push}}$. The difference in frictional drag is:<br>
      $\Delta f = f_{\\text{push}} - f_{\\text{pull}} = 2 \mu_k F \sin\theta > 0$.<br>
      <b>Hence, pulling encounters vastly less frictional drag, making pulling significantly easier than pushing.</b>`
    },
    {
      q: "Derive the expression for the minimum force required to drag a body of mass m along a rough horizontal plane. Prove that the pulling force is an absolute minimum when applied at an angle equal to the angle of friction.",
      sol: `<b>1. Force Resolution Setup:</b><br>
      Let a pulling force $F$ be inclined at an angle $\theta$ with the horizontal.<br>
      Resolving $F$:<br>
      &bull; Horizontal component: $F \cos\theta$<br>
      &bull; Vertical upward component: $F \sin\theta$<br>
      Vertical equilibrium: $N + F\sin\theta = mg \implies N = mg - F\sin\theta$.<br>
      Frictional force opposing impending motion: $f = \mu N = \mu(mg - F\sin\theta)$.<br><br>
      <b>2. Condition for Motion:</b><br>
      To drag the body forward, horizontal force must balance friction:<br>
      $F \cos\theta = \mu (mg - F \sin\theta) = \mu mg - \mu F \sin\theta$<br>
      $F(\cos\theta + \mu \sin\theta) = \mu mg \implies \mathbf{F = ${frac('\mu mg', '\\cos\\theta + \mu \\sin\\theta')}}$.<br><br>
      <b>3. Angle of Friction Substitution:</b><br>
      Let $\lambda$ be the angle of friction: $\mu = \tan\lambda = ${frac('\\sin\\lambda', '\\cos\\lambda')}$.<br>
      $F = ${frac('(\\sin\\lambda / \\cos\\lambda) mg', '\\cos\\theta + (\\sin\\lambda / \\cos\\lambda) \\sin\\theta')} = ${frac('mg \\sin\\lambda', '\\cos\\theta \\cos\\lambda + \\sin\\theta \\sin\\lambda')}$.<br>
      Using the trigonometric identity $\cos(A - B) = \cos A \cos B + \sin A \sin B$:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        F = ${frac('mg \\sin\\lambda', '\\cos(\\theta - \\lambda)')}
      </div>
      <b>4. Minimization Condition:</b><br>
      For pulling force $F$ to be minimum, the denominator $\cos(\theta - \lambda)$ must be maximum, which is $+1$:<br>
      $\cos(\theta - \lambda) = 1 \implies \theta - \lambda = 0 \implies \mathbf{\theta = \lambda}$.<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        F_{\\min} = mg \\sin\\lambda = ${frac('\mu mg', '\\sqrt{1 + \mu^2}')}
      </div>
      <b>Hence, the required pulling force is strictly minimum when applied at an angle equal to the angle of friction.</b>`
    },
    {
      q: "Derive the formula for the maximum speed with which a car can safely negotiate an unbanked, level circular curve of radius r without skidding. Explain why sharp curves cannot be taken safely in wet weather.",
      sol: `<b>1. Physical Mechanism:</b><br>
      When an automobile navigates an unbanked flat circular curve of radius $r$, its velocity vector continuously rotates. This requires centripetal acceleration $a_c = v^2/r$ directed toward the center.<br>
      The only force acting along the horizontal plane towards the center of curvature is the <b>static friction ($f_s$)</b> between the tire rubber and the tarmac.<br><br>
      <b>2. Mathematical Derivation:</b><br>
      Vertical equilibrium: $N = mg$.<br>
      Required inward centripetal force: $F_c = ${frac('m v^2', 'r')}$.<br>
      To prevent the vehicle from skidding outward, the required centripetal force cannot exceed the maximum available limiting friction:<br>
      $F_c \le f_L = \mu_s N = \mu_s mg$<br>
      ${frac('m v^2', 'r')} \le \mu_s mg \implies v^2 \le \mu_s r g$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v_{\\max} = \sqrt{\mu_s r g}
      </div>
      <b>3. Effect of Wet Weather:</b><br>
      In dry conditions, $\mu_s \approx 0.7 - 0.8$. In wet or icy weather, a thin lubricating water film separates the tire rubber from the asphalt (hydroplaning), causing $\mu_s$ to plummet to $0.1 - 0.2$.<br>
      Since $v_{\\max} \propto \sqrt{\mu_s}$, the maximum safe speed is cut by more than half. If a driver attempts to negotiate the turn above $v_{\\max}$, tire friction is insufficient to supply $mv^2/r$, and the vehicle skids tangentially off the road.`
    },
    {
      q: "Derive the formula for the Optimum Speed of a vehicle on a banked road of radius r and banking angle &theta; in the absence of friction. Also derive the expression for Maximum Safe Speed when friction coefficient &mu;_s is present.",
      sol: `<b>1. Resolution of Forces on Banked Curve:</b><br>
      The outer edge of the road is raised by angle $\theta$. The normal reaction $\vec{N}$ is perpendicular to the road, tilted at angle $\theta$ to the vertical.<br><br>
      <b>(a) Optimum Speed ($v_0$, Zero Friction):</b><br>
      When moving at the engineered optimum speed $v_0$, no lateral frictional force is called into play ($\mu = 0$):<br>
      &bull; Vertical balance: $N \cos\theta = mg \quad \ldots(1)$<br>
      &bull; Horizontal centripetal force: $N \sin\theta = ${frac('m v_0^2', 'r')} \quad \ldots(2)$<br>
      Dividing (2) by (1):<br>
      $\tan\theta = ${frac('v_0^2', 'rg')} \implies \mathbf{v_0 = \sqrt{rg \tan\theta}}$.<br><br>
      <b>(b) Maximum Safe Speed ($v_{\\max}$ with Friction $\mu_s$):</b><br>
      At maximum speed $v_{\\max}$, the vehicle tends to skid outward up the bank, generating limiting friction $f_L = \mu_s N$ directed downward along the banked incline.<br>
      Resolving forces:<br>
      &bull; Horizontally (towards center):<br>
      $N \sin\theta + f_L \cos\theta = ${frac('m v_{\\max}^2', 'r')} \implies N(\sin\theta + \mu_s \cos\theta) = ${frac('m v_{\\max}^2', 'r')} \quad \ldots(3)$<br>
      &bull; Vertically:<br>
      $N \cos\theta - f_L \sin\theta = mg \implies N(\cos\theta - \mu_s \sin\theta) = mg \quad \ldots(4)$<br>
      Dividing (3) by (4):<br>
      ${frac('v_{\\max}^2', 'rg')} = ${frac('N(\\sin\\theta + \\mu_s\\cos\\theta)', 'N(\\cos\\theta - \\mu_s\\sin\\theta)')}$.<br>
      Divide numerator and denominator by $\cos\theta$:<br>
      ${frac('v_{\\max}^2', 'rg')} = ${frac('\\mu_s + \\tan\\theta', '1 - \\mu_s \\tan\\theta')}$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v_{\\max} = \sqrt{rg \left( ${frac('\\mu_s + \\tan\\theta', '1 - \\mu_s\\tan\\theta')} \\right)}
      </div>`
    },
    {
      q: "For a vehicle negotiating a banked circular road of radius r with banking angle &theta; and friction &mu;_s, derive the expression for the Minimum Safe Speed (v_min) below which the vehicle slides down the incline.",
      sol: `<b>1. Physical Condition for Minimum Speed:</b><br>
      If the vehicle travels too slowly ($v < v_0$), the horizontal component of normal reaction $N\sin\theta$ exceeds the required centripetal force ($mv^2/r$). Consequently, the vehicle tends to slip downward toward the inner edge of the banked road.<br>
      To oppose this impending downward slip, limiting friction $f_L = \mu_s N$ acts <b>upward along the incline</b>.<br><br>
      <b>2. Mathematical Resolution:</b><br>
      &bull; <b>Horizontal equilibrium (towards center of curve):</b><br>
      $N \sin\theta - f_L \cos\theta = ${frac('m v_{\\min}^2', 'r')}$.<br>
      Substitute $f_L = \mu_s N$:<br>
      $N(\sin\theta - \mu_s \cos\theta) = ${frac('m v_{\\min}^2', 'r')} \quad \ldots(1)$<br><br>
      &bull; <b>Vertical equilibrium:</b><br>
      $N \cos\theta + f_L \sin\theta = mg$.<br>
      Substitute $f_L = \mu_s N$:<br>
      $N(\cos\theta + \mu_s \sin\theta) = mg \quad \ldots(2)$<br><br>
      <b>3. Division and Formula Assembly:</b><br>
      Dividing equation (1) by equation (2):<br>
      ${frac('v_{\\min}^2', 'rg')} = ${frac('N(\\sin\\theta - \\mu_s\\cos\\theta)', 'N(\\cos\\theta + \\mu_s\\sin\\theta)')}$.<br>
      Divide numerator and denominator by $\cos\theta$:<br>
      ${frac('v_{\\min}^2', 'rg')} = ${frac('\\tan\\theta - \\mu_s', '1 + \\mu_s \\tan\\theta')}$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v_{\\min} = \sqrt{rg \left( ${frac('\\tan\\theta - \\mu_s', '1 + \\mu_s\\tan\\theta')} \\right)}
      </div>
      If $\tan\theta \le \mu_s$, the numerator becomes zero or negative, meaning the vehicle can safely come to a complete stop ($v_{\\min} = 0$) without sliding down.`
    },
    {
      q: "Explain why a cyclist leans inward while taking a turn on a flat road. Derive the formula for the angle of lean &theta; with the vertical, and show that this angle is independent of the mass of the cyclist.",
      sol: `<b>1. Physical Mechanism:</b><br>
      A cyclist negotiating a curve of radius $r$ at speed $v$ requires a centripetal force $mv^2/r$.<br>
      If the cyclist remains upright, the ground reaction force acts vertically upward through the center of gravity, while the friction force at the wheels acts horizontally inward at ground level. These two forces create an unbalanced torque that violently tips the cyclist outward.<br>
      To prevent toppling, the cyclist leans inward at angle $\theta$ with the vertical. The resultant ground reaction force $\vec{R}$ now tilts inward through the cyclist's center of gravity, generating zero destabilizing torque.<br><br>
      <b>2. Derivation:</b><br>
      Resolving the ground reaction force $\vec{R}$ into rectangular components:<br>
      &bull; Vertical component balances weight: $R \cos\theta = mg \quad \ldots(1)$<br>
      &bull; Horizontal component provides centripetal force: $R \sin\theta = ${frac('m v^2', 'r')} \quad \ldots(2)$<br>
      Dividing equation (2) by equation (1):<br>
      ${frac('R \\sin\\theta', 'R \\cos\\theta')} = ${frac('m v^2 / r', 'mg')}$<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \tan\theta = ${frac('v^2', 'rg')} \implies \theta = \tan^{-1}\left(${frac('v^2', 'rg')}\right)
      </div>
      <b>3. Independence of Mass:</b><br>
      The mass $m$ cancels out entirely from the relation. Therefore, whether the rider is a lightweight child or a heavy adult, the required angle of lean depends exclusively on speed $v$, curve radius $r$, and local gravity $g$.`
    },
    {
      q: "A person of mass m stands on a spring scale inside an elevator. Derive the apparent weight recorded by the scale when the elevator: (a) Accelerates upward with a, (b) Accelerates downward with a, (c) Moves with uniform velocity v, (d) Falls freely under gravity (cable snaps).",
      sol: `<b>1. Principle of Weighing Scales:</b><br>
      A spring weighing machine does not record the true gravitational pull $mg$; it directly measures the normal contact reaction $N$ exerted by the elevator floor on the occupant's feet.<br><br>
      <b>(a) Elevator Accelerating Upward with $a$:</b><br>
      Net force is upward: $F_{\\text{net}} = N - mg = ma$.<br>
      <div style="text-align: center; margin: 6px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        N = m (g + a) = W_{\\text{true}} + ma
      </div>
      The apparent weight is <b>greater than the true weight</b>. The passenger feels heavy.<br><br>
      <b>(b) Elevator Accelerating Downward with $a$ ($a < g$):</b><br>
      Net force is downward: $F_{\\text{net}} = mg - N = ma$.<br>
      <div style="text-align: center; margin: 6px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        N = m (g - a) = W_{\\text{true}} - ma
      </div>
      The apparent weight is <b>less than the true weight</b>. The passenger feels lighter.<br><br>
      <b>(c) Elevator Moving with Uniform Velocity ($a = 0$):</b><br>
      Whether ascending or descending, when acceleration is zero: $N - mg = 0$.<br>
      <div style="text-align: center; margin: 6px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        N = mg = W_{\\text{true}}
      </div>
      The apparent weight <b>equals the true weight</b>.<br><br>
      <b>(d) Free Fall ($a = g$, Cable Snaps):</b><br>
      Substituting $a = g$ into downward formula:<br>
      $N = m (g - g) = \mathbf{0}$.<br>
      The normal reaction vanishes completely. The passenger experiences total <b>weightlessness</b>, floating freely above the elevator floor.`
    },
    {
      q: "Master Comprehensive Synthesis of Unit III: Laws of Motion (07 Marks). Synthesize the full theoretical architecture of classical Newtonian mechanics, summarizing core laws, conservation principles, friction dynamics, circular motion constraints, and top board exam focus areas.",
      sol: `<b>1. Core Theoretical Architecture of Unit III:</b><br>
      Unit III: Laws of Motion (07 Marks) represents the dynamical foundation of Newtonian mechanics, relating physical motion to the forces causing it.<br><br>
      <b>2. Master Conceptual Pillars:</b><br>
      &bull; <b>First Law:</b> Defines force qualitatively and establishes the concept of inertia (rest, motion, direction).<br>
      &bull; <b>Second Law:</b> Quantitative law $\vec{F} = d\vec{p}/dt = m\vec{a}$. It is the fundamental law containing both First and Third laws.<br>
      &bull; <b>Third Law:</b> Forces occur in matched action-reaction pairs ($\vec{F}_{AB} = -\vec{F}_{BA}$) acting on different bodies simultaneously.<br>
      &bull; <b>Impulse:</b> $\vec{J} = \vec{F}_{\\text{avg}} \Delta t = \Delta\vec{p} = \text{Area under } F-t \text{ curve}$.<br>
      &bull; <b>Momentum Conservation:</b> $\sum \vec{F}_{\\text{ext}} = \vec{0} \implies \vec{P} = \text{const}$. Governs gun recoil ($V_R = -mv/M$) and rocket propulsion ($F = -u \, dm/dt$).<br>
      &bull; <b>Friction Dynamics:</b> Microscopic cold-welding origin. Static friction is self-adjusting ($0 \le f_s \le \mu_s N$). Limiting friction $f_L = \mu_s N$. Kinetic friction $f_k = \mu_k N$ ($\mu_k < \mu_s$). Angle of friction $\tan\theta = \mu_s$, Angle of repose $\tan\alpha = \mu_s \implies \theta = \alpha$. Pulling is easier than pushing.<br>
      &bull; <b>Circular Dynamics:</b> Centripetal force $F_c = mv^2/r$. Unbanked road $v_{\\max} = \sqrt{\mu_s rg}$. Banked road optimum $v_0 = \sqrt{rg\tan\theta}$, maximum $v_{\\max} = \sqrt{rg(\frac{\mu_s+\tan\theta}{1-\mu_s\tan\theta})}$. Cyclist lean $\tan\theta = v^2/rg$.<br><br>
      <b>3. Top 5 Board Examination Trap Alerts:</b><br>
      1. Action and reaction NEVER cancel each other out because they act on two different bodies.<br>
      2. Normal reaction does NOT always equal $mg$ (e.g. on inclines $N = mg\cos\theta$, in pulling $N = mg - F\sin\theta$).<br>
      3. Static friction is NOT constant; it equals applied force until limiting friction is reached.<br>
      4. Centripetal force is NOT a new physical force; it is the label given to whichever real inward force (tension, friction, gravity, normal) maintains the curve.<br>
      5. Caret symbols ($^$) are strictly forbidden in final presentation; standard superscripts must be used.`
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 81}: ${item.q}</h3>
    <div style="background: rgba(255, 138, 101, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Complete Step-by-Step Derivation & Theoretical Proof (5 Marks):</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getLaQuestions };
