const { themeColor, frac } = require('./c11_phy_4_helpers');

function getLaQuestions() {
  const qList = [
    {
      q: "State and prove the Work-Energy Theorem for a Variable Force in one dimension using the definite calculus integration method.",
      sol: `<b>1. Statement of the Work-Energy Theorem:</b><br>
      The net work done by all forces acting on an object during any displacement is identically equal to the change in the kinetic energy of the object: <b>W = K_f - K_i = &Delta;K</b>.<br><br>
      <b>2. Mathematical Calculus Proof:</b><br>
      Consider a body of mass $m$ moving along the x-axis under the action of a position-dependent variable force $F(x)$.<br>
      By Newton's Second Law: $F(x) = m a = m \, ${frac('dv', 'dt')}$.<br>
      Applying the calculus chain rule for acceleration:<br>
      $a = ${frac('dv', 'dt')} = ${frac('dv', 'dx')} \cdot ${frac('dx', 'dt')} = v \, ${frac('dv', 'dx')}$.<br>
      Therefore: $F(x) = m v \, ${frac('dv', 'dx')}$.<br>
      Rearranging differential terms: $F(x) \, dx = m v \, dv$.<br><br>
      The total mechanical work done by the variable force as the particle moves from initial position $x_1$ (where velocity is $v_1$) to final position $x_2$ (where velocity is $v_2$) is the definite integral:<br>
      $W = \int_{x_1}^{x_2} F(x) \, dx = \int_{v_1}^{v_2} m v \, dv$.<br>
      Since mass $m$ is constant, it factors out of the integral:<br>
      $W = m \int_{v_1}^{v_2} v \, dv = m \left[ ${frac('v^2', '2')} \right]_{v_1}^{v_2} = m \left( ${frac('v_2^2 - v_1^2', '2')} \right)$.<br>
      Expanding the brackets:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        W = \frac{1}{2} m v_2^2 - \frac{1}{2} m v_1^2 = K_f - K_i = \Delta K
      </div>
      This rigorously establishes that the work done by a variable force equals the net change in kinetic energy.`
    },
    {
      q: "Derive an expression for the Elastic Potential Energy stored in a helical spring stretched by a distance x. Graphically illustrate the force-displacement relation, and distinguish between work done by the spring force and work done by the external pulling agent.",
      sol: `<b>1. Physical Mechanism & Hooke's Law:</b><br>
      Consider a massless helical spring of stiffness constant $k$ lying on a smooth horizontal table with one end fixed to a rigid wall and the other attached to a mass $m$.<br>
      When stretched by displacement $x$ from natural equilibrium ($x = 0$), the spring exerts an internal restoring force directed toward the origin: <b>F_s = -k x</b>.<br><br>
      <b>2. Derivation of Potential Energy:</b><br>
      To stretch the spring slowly without acceleration, the external applied pulling force must balance the restoring force at every instant: $F_{\\text{ext}} = -F_s = +kx$.<br>
      The work done by the external pulling force in producing an infinitesimal elongation $dx$ is:<br>
      $dW_{\\text{ext}} = F_{\\text{ext}} \, dx = (kx) \, dx$.<br>
      Total work done in stretching the spring from unstrained state $x = 0$ to final extension $x$ is:<br>
      $W_{\\text{ext}} = \int_0^x k x' \, dx' = k \left[ ${frac('x\'^2', '2')} \right]_0^x = \frac{1}{2} k x^2$.<br>
      By definition, this work is stored entirely as internal elastic strain potential energy ($U_s$):<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        U_s = \frac{1}{2} k x^2
      </div>
      <b>3. Work Done by Spring Force vs External Force:</b><br>
      &bull; Work done by external pulling agent: $W_{\\text{ext}} = +\frac{1}{2}kx^2$ (positive, as $F_{\\text{ext}}$ and displacement are in the same direction).<br>
      &bull; Work done by internal spring restoring force: $W_s = \int_0^x (-kx) dx = -\frac{1}{2}kx^2 = -\Delta U_s$ (negative, as restoring force opposes elongation).`
    },
    {
      q: "State the Principle of Conservation of Mechanical Energy. Prove analytically that the total mechanical energy of a freely falling body of mass m dropped from height H is strictly conserved at all points of its descent.",
      sol: `<b>1. Statement:</b><br>
      The total mechanical energy (sum of kinetic energy $K$ and potential energy $U$) of an isolated system remains strictly constant over time if the internal forces doing work are conservative: $E = K + U = \\text{constant}$.<br><br>
      <b>2. Analytical Proof for Free Fall under Gravity:</b><br>
      Let a body of mass $m$ be dropped from rest from initial height $H$ above the ground. Take ground as reference zero datum ($U = 0$ at $y = 0$).<br><br>
      &bull; <b>At Initial Position A (Height y = H):</b><br>
      Velocity $v_A = 0 \implies K_A = \frac{1}{2}m(0)^2 = 0$.<br>
      Potential energy: $U_A = mgH$.<br>
      Total mechanical energy: <b>E_A = K_A + U_A = 0 + mgH = mgH &nbsp;&hellip;(1)</b><br><br>
      &bull; <b>At Intermediate Position B (Fallen distance x, Height y = H - x):</b><br>
      Using third equation of motion: $v_B^2 = u^2 + 2gx = 0 + 2gx = 2gx$.<br>
      Kinetic energy: $K_B = \frac{1}{2}m v_B^2 = \frac{1}{2}m(2gx) = mgx$.<br>
      Potential energy: $U_B = mg(H - x) = mgH - mgx$.<br>
      Total mechanical energy: <b>E_B = K_B + U_B = mgx + (mgH - mgx) = mgH &nbsp;&hellip;(2)</b><br><br>
      &bull; <b>At Ground Impact Position C (Height y = 0):</b><br>
      Using $v_C^2 = 0 + 2gH = 2gH$.<br>
      Kinetic energy: $K_C = \frac{1}{2}m v_C^2 = \frac{1}{2}m(2gH) = mgH$.<br>
      Potential energy: $U_C = mg(0) = 0$.<br>
      Total mechanical energy: <b>E_C = K_C + U_C = mgH + 0 = mgH &nbsp;&hellip;(3)</b><br><br>
      <b>Conclusion:</b> Comparing equations (1), (2), and (3):<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        E_A = E_B = E_C = mgH = \text{Constant}
      </div>
      As the body descends, potential energy continuously transforms into kinetic energy, but their sum remains constant.`
    },
    {
      q: "A small body of mass m is whirled in a vertical circle by means of a light string of length L. Derive expressions for: (a) String tension T(&theta;) at any angle &theta;, (b) Minimum critical velocity at the top (v_top), (c) Minimum velocity at the bottom (v_bottom) required to execute the full circle.",
      sol: `<b>1. Force Resolution at Angle &theta; with Downward Vertical:</b><br>
      Let the body possess speed $v$ when the string is inclined at angle $\theta$ to the downward vertical.<br>
      Forces acting on the mass:<br>
      1. Tension $T$ directed radially inward along the string.<br>
      2. Weight $mg$ directed vertically downward, resolving into radial component $mg\cos\theta$ (outward) and tangential component $mg\sin\theta$ (opposing motion).<br>
      Net radial centripetal force: $T - mg\cos\theta = ${frac('m v^2', 'L')}$.<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        T(\theta) = ${frac('m v^2', 'L')} + mg \cos\theta
      </div>
      <b>(a) Minimum Velocity at Highest Point (Crest, &theta; = 180&deg;):</b><br>
      At the peak, $\cos 180^\circ = -1 \implies T_{\\text{top}} = ${frac('m v_{\\text{top}}^2', 'L')} - mg$.<br>
      To execute the loop without the string going slack, tension must be non-negative: $T_{\\text{top}} \ge 0$.<br>
      ${frac('m v_{\\text{top}}^2', 'L')} - mg \ge 0 \implies v_{\\text{top}}^2 \ge gL$.<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        v_{\\text{top, min}} = \sqrt{g L}
      </div>
      <b>(b) Minimum Velocity at Lowest Point (Trough, &theta; = 0&deg;):</b><br>
      By conservation of mechanical energy between the bottom (height $0$) and top (height $2L$):<br>
      $\frac{1}{2}m v_{\\text{bottom}}^2 + 0 = \frac{1}{2}m v_{\\text{top}}^2 + mg(2L)$.<br>
      Substitute the critical top speed $v_{\\text{top}}^2 = gL$:<br>
      $\frac{1}{2}m v_{\\text{bottom}}^2 = \frac{1}{2}m(gL) + 2mgL = \frac{5}{2}mgL$.<br>
      Multiplying by $2/m$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v_{\\text{bottom, min}} = \sqrt{5 g L}
      </div>`
    },
    {
      q: "In vertical circular motion, prove analytically that: (a) The string tension at the lowest point exceeds that at the highest point by an invariant constant 6 mg, and (b) Derive the critical speed at the horizontal mid-point (v_mid = &radic;(3 g L)).",
      sol: `<b>(a) Proof that T_bottom - T_top = 6 mg:</b><br>
      Using the tension formula $T = ${frac('m v^2', 'L')} + mg\cos\theta$:<br>
      &bull; At lowest point ($\theta = 0^\circ, \cos 0^\circ = 1$):<br>
      $T_{\\text{bottom}} = ${frac('m v_b^2', 'L')} + mg \quad \ldots(1)$<br>
      &bull; At highest point ($\theta = 180^\circ, \cos 180^\circ = -1$):<br>
      $T_{\\text{top}} = ${frac('m v_t^2', 'L')} - mg \quad \ldots(2)$<br>
      Subtracting (2) from (1):<br>
      $T_{\\text{bottom}} - T_{\\text{top}} = ${frac('m', 'L')}(v_b^2 - v_t^2) + 2mg \quad \ldots(3)$<br><br>
      By conservation of mechanical energy between trough and crest:<br>
      $\frac{1}{2}m v_b^2 = \frac{1}{2}m v_t^2 + mg(2L) \implies v_b^2 - v_t^2 = 4gL$.<br>
      Substitute $(v_b^2 - v_t^2) = 4gL$ into equation (3):<br>
      $T_{\\text{bottom}} - T_{\\text{top}} = ${frac('m', 'L')}(4gL) + 2mg = 4mg + 2mg = \mathbf{6mg}$.<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        T_{\\text{bottom}} - T_{\\text{top}} = 6 mg
      </div>
      <b>(b) Critical Speed at Horizontal Mid-Point (&theta; = 90&deg;):</b><br>
      At the horizontal position, height is $L$ above the bottom datum.<br>
      By conservation of energy between bottom and mid-point:<br>
      $\frac{1}{2}m v_b^2 = \frac{1}{2}m v_{\\text{mid}}^2 + mgL$.<br>
      Substitute critical bottom velocity $v_b^2 = 5gL$:<br>
      $\frac{1}{2}m(5gL) = \frac{1}{2}m v_{\\text{mid}}^2 + mgL \implies 5gL = v_{\\text{mid}}^2 + 2gL$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v_{\\text{mid}} = \sqrt{3 g L} \quad \text{and} \quad T_{\\text{mid}} = ${frac('m(3gL)', 'L')} + 0 = 3mg
      </div>`
    },
    {
      q: "Derive the complete mathematical theory of a One-Dimensional Head-On Perfectly Elastic Collision: Prove that the relative velocity of approach equals the relative velocity of separation, and derive the closed-form formulas for the final velocities v_1 and v_2.",
      sol: `<b>1. Physical Setup & Invariant Conservation Laws:</b><br>
      Let two particles of masses $m_1$ and $m_2$ move along the x-axis with initial velocities $u_1$ and $u_2$ ($u_1 > u_2$). They collide head-on elastically, emerging with velocities $v_1$ and $v_2$.<br><br>
      <b>Law 1: Conservation of Linear Momentum:</b><br>
      $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$<br>
      Rearranging terms: $m_1(u_1 - v_1) = m_2(v_2 - u_2) \quad \ldots(1)$<br><br>
      <b>Law 2: Conservation of Kinetic Energy:</b><br>
      $\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2 = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2$<br>
      Rearranging terms: $m_1(u_1^2 - v_1^2) = m_2(v_2^2 - u_2^2) \quad \ldots(2)$<br><br>
      <b>2. Proof that Relative Approach = Relative Separation:</b><br>
      Factor equation (2) using $(a^2 - b^2) = (a - b)(a + b)$:<br>
      $m_1(u_1 - v_1)(u_1 + v_1) = m_2(v_2 - u_2)(v_2 + u_2) \quad \ldots(3)$<br>
      Dividing equation (3) by equation (1):<br>
      $u_1 + v_1 = v_2 + u_2 \implies \mathbf{u_1 - u_2 = v_2 - v_1}$.<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        \text{Velocity of Approach } (u_1 - u_2) = \text{Velocity of Separation } (v_2 - v_1) \implies e = 1
      </div>
      <b>3. Closed-Form Final Velocity Formulas:</b><br>
      From above, $v_2 = u_1 - u_2 + v_1$. Substitute this into momentum equation (1):<br>
      $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2(u_1 - u_2 + v_1) = m_1 v_1 + m_2 u_1 - m_2 u_2 + m_2 v_1$<br>
      $(m_1 + m_2) v_1 = (m_1 - m_2) u_1 + 2 m_2 u_2$.<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        v_1 = \left(${frac('m_1 - m_2', 'm_1 + m_2')}\right) u_1 + \left(${frac('2 m_2', 'm_1 + m_2')}\right) u_2
      </div>
      Similarly, substituting $v_1 = v_2 - (u_1 - u_2)$ yields:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        v_2 = \left(${frac('2 m_1', 'm_1 + m_2')}\right) u_1 + \left(${frac('m_2 - m_1', 'm_1 + m_2')}\right) u_2
      </div>`
    },
    {
      q: "For a 1D elastic collision, analyze the three classic boundary cases in detail: (a) Equal masses (m_1 = m_2), (b) Massive projectile striking light stationary target (m_1 >> m_2, u_2 = 0), (c) Light projectile striking massive stationary target (m_1 << m_2, u_2 = 0).",
      sol: `<b>Using Master Velocity Formulas:</b><br>
      $v_1 = \left(${frac('m_1 - m_2', 'm_1 + m_2')}\right)u_1 + \left(${frac('2 m_2', 'm_1 + m_2')}\right)u_2$<br>
      $v_2 = \left(${frac('2 m_1', 'm_1 + m_2')}\right)u_1 + \left(${frac('m_2 - m_1', 'm_1 + m_2')}\right)u_2$<br><br>
      <b>(a) Case I: Identical Masses ($m_1 = m_2 = m$):</b><br>
      $v_1 = \left(${frac('0', '2m')}\right)u_1 + \left(${frac('2m', '2m')}\right)u_2 = \mathbf{u_2}$.<br>
      $v_2 = \left(${frac('2m', '2m')}\right)u_1 + \left(${frac('0', '2m')}\right)u_2 = \mathbf{u_1}$.<br>
      <b>Physical Result:</b> Two colliding bodies of equal mass completely exchange their velocities upon 1D elastic collision. If target $m_2$ was initially at rest ($u_2 = 0$), projectile $m_1$ stops dead ($v_1 = 0$) while target $m_2$ moves off with original speed $u_1$.<br><br>
      <b>(b) Case II: Massive Projectile striking Light Stationary Target ($m_1 \gg m_2, u_2 = 0$):</b><br>
      Neglecting $m_2$ in comparison to $m_1$ ($m_1 - m_2 \approx m_1, m_1 + m_2 \approx m_1$):<br>
      $v_1 \approx \left(${frac('m_1', 'm_1')}\right) u_1 = \mathbf{u_1}$ (heavy projectile continues forward virtually unperturbed).<br>
      $v_2 \approx \left(${frac('2 m_1', 'm_1')}\right) u_1 = \mathbf{2 u_1}$ (light target is launched forward at double the projectile speed!).<br><br>
      <b>(c) Case III: Light Projectile striking Massive Stationary Target ($m_1 \ll m_2, u_2 = 0$):</b><br>
      Neglecting $m_1$ in comparison to $m_2$ ($m_1 - m_2 \approx -m_2, m_1 + m_2 \approx m_2$):<br>
      $v_1 \approx \left(${frac('-m_2', 'm_2')}\right) u_1 = \mathbf{-u_1}$ (light projectile rebounds backward with identical speed).<br>
      $v_2 \approx \left(${frac('2(0)', 'm_2')}\right) u_1 = \mathbf{0}$ (massive target remains stationary, like a tennis ball hitting a brick wall).`
    },
    {
      q: "Derive an analytical formula for the Loss of Kinetic Energy in a Completely Inelastic Collision in One Dimension. Prove that kinetic energy is always lost (&Delta;K > 0) in such an impact.",
      sol: `<b>1. Common Velocity Derivation:</b><br>
      Let two bodies of masses $m_1$ and $m_2$ move with initial velocities $u_1$ and $u_2$.<br>
      In a completely inelastic collision, the bodies stick together and move with a single common velocity $V$.<br>
      By conservation of linear momentum:<br>
      $m_1 u_1 + m_2 u_2 = (m_1 + m_2) V \implies \mathbf{V = ${frac('m_1 u_1 + m_2 u_2', 'm_1 + m_2')}}$.<br><br>
      <b>2. Kinetic Energy Before and After:</b><br>
      Initial kinetic energy: $K_i = \frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2$.<br>
      Final kinetic energy: $K_f = \frac{1}{2}(m_1 + m_2) V^2 = \frac{1}{2}(m_1 + m_2) \left[ ${frac('m_1 u_1 + m_2 u_2', 'm_1 + m_2')} \right]^2 = ${frac('(m_1 u_1 + m_2 u_2)^2', '2(m_1 + m_2)')}$.<br><br>
      <b>3. Loss of Kinetic Energy ($\Delta K = K_i - K_f$):</b><br>
      $\Delta K = \left(\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2\right) - ${frac('(m_1 u_1 + m_2 u_2)^2', '2(m_1 + m_2)')}$<br>
      $\Delta K = ${frac('m_1 u_1^2(m_1 + m_2) + m_2 u_2^2(m_1 + m_2) - (m_1^2 u_1^2 + m_2^2 u_2^2 + 2m_1 m_2 u_1 u_2)', '2(m_1 + m_2)')}$<br>
      $\Delta K = ${frac('m_1^2 u_1^2 + m_1 m_2 u_1^2 + m_1 m_2 u_2^2 + m_2^2 u_2^2 - m_1^2 u_1^2 - m_2^2 u_2^2 - 2m_1 m_2 u_1 u_2', '2(m_1 + m_2)')}$<br>
      Cancelling like terms and factoring $m_1 m_2$:<br>
      $\Delta K = ${frac('m_1 m_2 (u_1^2 + u_2^2 - 2u_1 u_2)', '2(m_1 + m_2)')}$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \Delta K = \frac{1}{2} \left( ${frac('m_1 m_2', 'm_1 + m_2')} \right) (u_1 - u_2)^2
      </div>
      <b>Proof that Energy is Always Lost:</b><br>
      Since $(m_1 + m_2) > 0$, $m_1 m_2 > 0$, and $(u_1 - u_2)^2 > 0$ for any relative velocity, $\Delta K$ is <b>strictly positive ($\Delta K > 0$)</b>. Kinetic energy is permanently dissipated into heat, sound, and plastic work.`
    },
    {
      q: "Formulate the theory of an Elastic Collision in Two Dimensions (Glancing Collision). Prove analytically that when two particles of identical mass collide elastically with one initially at rest, they scatter at strictly 90° to each other.",
      sol: `<b>1. Mathematical Formulation:</b><br>
      Let projectile mass $m_1$ moving along x-axis with velocity $u_1$ collide elastically with stationary target mass $m_2$ ($u_2 = 0$).<br>
      After collision, $m_1$ moves with speed $v_1$ at angle $\theta_1$ above the x-axis, and $m_2$ moves with speed $v_2$ at angle $\theta_2$ below the x-axis.<br>
      &bull; <b>Momentum conservation along x-axis:</b> $m_1 u_1 = m_1 v_1 \cos\theta_1 + m_2 v_2 \cos\theta_2 \quad \ldots(1)$<br>
      &bull; <b>Momentum conservation along y-axis:</b> $0 = m_1 v_1 \sin\theta_1 - m_2 v_2 \sin\theta_2 \quad \ldots(2)$<br>
      &bull; <b>Kinetic energy conservation:</b> $\frac{1}{2}m_1 u_1^2 = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2 \quad \ldots(3)$<br><br>
      <b>2. Analytical Proof of Right-Angle Scattering ($m_1 = m_2 = m$):</b><br>
      Cancelling mass $m$ in vector momentum conservation:<br>
      $\vec{u}_1 = \vec{v}_1 + \vec{v}_2$.<br>
      Taking the vector self-dot product:<br>
      $|\vec{u}_1|^2 = (\vec{v}_1 + \vec{v}_2) \cdot (\vec{v}_1 + \vec{v}_2) = v_1^2 + v_2^2 + 2 (\vec{v}_1 \cdot \vec{v}_2) \quad \ldots(4)$<br>
      From kinetic energy conservation with $m_1 = m_2$:<br>
      $u_1^2 = v_1^2 + v_2^2 \quad \ldots(5)$<br>
      Comparing (4) and (5):<br>
      $v_1^2 + v_2^2 + 2 (\vec{v}_1 \cdot \vec{v}_2) = v_1^2 + v_2^2 \implies 2 (\vec{v}_1 \cdot \vec{v}_2) = 0 \implies \vec{v}_1 \cdot \vec{v}_2 = 0$.<br>
      By definition of dot product:<br>
      $v_1 v_2 \cos(\theta_1 + \theta_2) = 0 \implies \cos(\theta_1 + \theta_2) = 0 \implies \mathbf{\theta_1 + \theta_2 = 90^\circ}$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \theta_1 + \theta_2 = 90^\circ \quad \text{(Orthogonal Scattering)}
      </div>
      <i>The two identical particles fly apart at strictly right angles.</i>`
    },
    {
      q: "Explain the operating physics of the Ballistic Pendulum. Derive the formula used to determine the high speed of a rifle bullet from the observable vertical swing height h of the pendulum block.",
      sol: `<b>1. Physical Operation:</b><br>
      A ballistic pendulum is a heavy wooden block of mass $M$ suspended by light strings. A high-speed bullet of mass $m$ is fired horizontally into the block and embeds inside it. The collision is completely inelastic. Thereafter, the combined system swings upward as a pendulum, converting kinetic energy into gravitational potential energy.<br><br>
      <b>2. Stage 1: Inelastic Impact (Momentum Conserved):</b><br>
      Let bullet strike with muzzle speed $u$.<br>
      Initial momentum: $P_i = m u$.<br>
      Final momentum immediately after embedment: $P_f = (m + M) V$.<br>
      By conservation of linear momentum:<br>
      $m u = (m + M) V \implies \mathbf{V = \left(${frac('m', 'm + M')}\right) u}$.<br><br>
      <b>3. Stage 2: Pendulum Swing (Mechanical Energy Conserved):</b><br>
      As the pendulum swings up through vertical height $h$, all kinetic energy converts to potential energy:<br>
      $\frac{1}{2} (m + M) V^2 = (m + M) g h \implies V^2 = 2 g h \implies \mathbf{V = \sqrt{2 g h}}$.<br><br>
      <b>4. Formula for Bullet Speed:</b><br>
      Equating the two expressions for common velocity $V$:<br>
      $\left(${frac('m', 'm + M')}\right) u = \sqrt{2 g h}$.<br>
      Solving for bullet velocity $u$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        u = \left( ${frac('m + M', 'm')} \right) \sqrt{2 g h}
      </div>`
    },
    {
      q: "Define Power. Distinguish between Average Power and Instantaneous Power. Derive the relation P = F &bull; v, and calculate the power of a crane that lifts a 2.5-ton load at a constant speed of 1.2 m/s against gravity (g = 9.8 m/s²).",
      sol: `<b>1. Definitions:</b><br>
      &bull; <b>Power:</b> The time rate of doing mechanical work or energy consumption: $P = dW/dt$.<br>
      &bull; <b>Average Power ($P_{\\text{avg}}$):</b> Total work performed divided by total elapsed time: $P_{\\text{avg}} = \Delta W / \Delta t$.<br>
      &bull; <b>Instantaneous Power ($P$):</b> Rate of work at a specific instant: $P = \lim_{\Delta t \to 0} \frac{\Delta W}{\Delta t} = \frac{dW}{dt}$.<br><br>
      <b>2. Derivation of $P = \vec{F} \cdot \vec{v}$:</b><br>
      Infinitesimal work done by force $\vec{F}$ in displacement $d\vec{r}$ is: $dW = \vec{F} \cdot d\vec{r}$.<br>
      Dividing by time differential $dt$:<br>
      $P = ${frac('dW', 'dt')} = \vec{F} \cdot ${frac('d\vec{r}', 'dt')}$.<br>
      Since $\frac{d\vec{r}}{dt} = \vec{v}$ (instantaneous velocity vector):<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        P = \vec{F} \cdot \vec{v} = F v \cos\theta
      </div>
      <b>3. Crane Numerical Calculation:</b><br>
      Mass $m = 2.5\text{ metric tons} = 2500\text{ kg}$, $v = 1.2\text{ m/s}$, $g = 9.8\text{ m/s}^2$.<br>
      Because moving at constant speed, upward crane force equals downward gravitational weight:<br>
      $F = mg = 2500 \times 9.8 = 24,500\text{ N}$.<br>
      Since $\vec{F}$ and $\vec{v}$ are both vertically upward, $\theta = 0^\circ \implies \cos 0^\circ = 1$.<br>
      $P = F \times v = 24500 \times 1.2 = \mathbf{29,400\text{ Watts} = 29.4\text{ kW}}$.<br>
      In Horsepower: $P = 29400 / 746 \approx \mathbf{39.4\text{ hp}}$.`
    },
    {
      q: "Discuss the relationship between a Conservative Force and its Potential Energy: Derive F = -dU/dx, and prove that the work done by any conservative force around any arbitrary closed loop is identically zero (&oint; F &bull; dr = 0).",
      sol: `<b>1. Potential Energy Definition:</b><br>
      Potential energy is defined such that the change in potential energy during an infinitesimal displacement $dx$ equals the negative of work done by the conservative force:<br>
      $dU = -dW_{\\text{cons}} = -F(x) \, dx \implies \mathbf{F(x) = -${frac('dU', 'dx')}}$.<br>
      In 3D Cartesian coordinates: $\vec{F} = -\nabla U = -\left( \frac{\partial U}{\partial x}\hat{i} + \frac{\partial U}{\partial y}\hat{j} + \frac{\partial U}{\partial z}\hat{k} \right)$.<br><br>
      <b>2. Proof of Path Independence:</b><br>
      Work done in moving from point $A$ to point $B$ along any path is:<br>
      $W_{A \to B} = \int_A^B \vec{F} \cdot d\vec{r} = -\int_A^B dU = -(U_B - U_A) = U_A - U_B$.<br>
      Because this depends exclusively on potential energies at endpoints $A$ and $B$, the work is strictly independent of the intermediate path.<br><br>
      <b>3. Proof that Closed Loop Work is Zero (&oint; F &bull; dr = 0):</b><br>
      Consider a closed path starting at point $A$, traversing to point $B$ via path 1, and returning from $B$ to $A$ via path 2:<br>
      $\oint \vec{F} \cdot d\vec{r} = \int_{A(1)}^B \vec{F} \cdot d\vec{r} + \int_{B(2)}^A \vec{F} \cdot d\vec{r}$.<br>
      Using endpoint potential energy values:<br>
      $\oint \vec{F} \cdot d\vec{r} = (U_A - U_B) + (U_B - U_A) = \mathbf{0}$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \oint \vec{F}_{\\text{cons}} \cdot d\vec{r} = 0
      </div>`
    },
    {
      q: "Using the Work-Energy Theorem, derive the expression for the final speed of a block of mass m sliding down a rough inclined plane of length s, inclination angle &theta;, and kinetic friction coefficient &mu;_k.",
      sol: `<b>1. Force Analysis on Rough Incline:</b><br>
      A block of mass $m$ starts from rest ($u = 0$) at the top of an incline of length $s$ and height $h = s\sin\theta$.<br>
      Forces acting on the block:<br>
      1. Gravity $mg$ acting vertically downward.<br>
      2. Normal reaction $N = mg\cos\theta$ acting perpendicular to incline.<br>
      3. Kinetic friction $f_k = \mu_k N = \mu_k mg\cos\theta$ acting upward along the incline.<br><br>
      <b>2. Calculation of Work Done by All Forces:</b><br>
      &bull; Work done by gravity: $W_g = (mg\sin\theta) \times s = mgh$.<br>
      &bull; Work done by normal reaction: $W_N = 0$ (since $\vec{N} \perp \vec{s}$).<br>
      &bull; Work done by friction: $W_f = -f_k \times s = -(\mu_k mg\cos\theta) s$.<br>
      Total net work done:<br>
      $W_{\\text{net}} = W_g + W_f = mg s \sin\theta - \mu_k mg s \cos\theta = mg s (\sin\theta - \mu_k \cos\theta)$.<br><br>
      <b>3. Application of Work-Energy Theorem:</b><br>
      $W_{\\text{net}} = K_f - K_i = \frac{1}{2} m v^2 - 0 = \frac{1}{2} m v^2$.<br>
      Equating expressions:<br>
      $\frac{1}{2} m v^2 = mg s (\sin\theta - \mu_k \cos\theta)$.<br>
      Cancelling $m$ and solving for final speed $v$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v = \sqrt{2 g s (\sin\theta - \mu_k \cos\theta)}
      </div>
      If the incline is perfectly smooth ($\mu_k = 0$), the formula reduces to $v = \sqrt{2gs\sin\theta} = \sqrt{2gh}$.`
    },
    {
      q: "A heavy truck of mass m climbs a hill of inclination &theta; with constant speed v. If coefficient of rolling friction is &mu; and aerodynamic air resistance is F_air, derive the total power delivered by the truck engine.",
      sol: `<b>1. Force Balance along the Incline:</b><br>
      To maintain constant velocity ($a = 0$), the forward tractive force $F_{\\text{engine}}$ exerted by the wheels on the road must balance all opposing resistive forces.<br>
      Opposing forces acting downward along the incline:<br>
      1. Downward gravitational component: $F_g = mg \sin\theta$.<br>
      2. Rolling friction: $F_f = \mu N = \mu mg \cos\theta$.<br>
      3. Aerodynamic drag: $F_{\\text{air}}$.<br><br>
      Total forward force required:<br>
      $F_{\\text{engine}} = mg \sin\theta + \mu mg \cos\theta + F_{\\text{air}} = mg(\sin\theta + \mu \cos\theta) + F_{\\text{air}}$.<br><br>
      <b>2. Power Output Formulation:</b><br>
      Power delivered at velocity $v$ is $P = F_{\\text{engine}} \times v$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        P = \left[ mg(\sin\theta + \mu \cos\theta) + F_{\\text{air}} \right] v
      </div>
      This formula accounts for gravitational lifting work, frictional dissipation, and aerodynamic drag.`
    },
    {
      q: "Formulate the Generalized Work-Energy Theorem for systems containing both conservative and non-conservative forces. Prove that the work done by non-conservative forces equals the net change in total mechanical energy (W_nc = &Delta;E).",
      sol: `<b>1. Separation of Forces:</b><br>
      The total net force acting on an object is the sum of conservative forces and non-conservative forces:<br>
      $\vec{F}_{\\text{net}} = \vec{F}_{\\text{cons}} + \vec{F}_{\\text{non-cons}}$.<br><br>
      <b>2. Work Decomposition:</b><br>
      Total work done is the sum of conservative and non-conservative work:<br>
      $W_{\\text{net}} = W_{\\text{cons}} + W_{\\text{nc}}$.<br>
      By the fundamental Work-Energy Theorem: $W_{\\text{net}} = \Delta K$.<br>
      Therefore: $W_{\\text{cons}} + W_{\\text{nc}} = \Delta K \quad \ldots(1)$<br><br>
      <b>3. Relation to Potential Energy:</b><br>
      By definition of potential energy: $W_{\\text{cons}} = -\Delta U$.<br>
      Substitute $W_{\\text{cons}} = -\Delta U$ into equation (1):<br>
      $-\Delta U + W_{\\text{nc}} = \Delta K \implies W_{\\text{nc}} = \Delta K + \Delta U$.<br>
      Since total mechanical energy is $E = K + U$, we have $\Delta E = \Delta K + \Delta U$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        W_{\\text{nc}} = \Delta E = (K_f + U_f) - (K_i + U_i)
      </div>
      <b>Conclusion:</b> In the presence of friction or air drag, the total mechanical energy decreases by an amount exactly equal to the negative work performed by those non-conservative forces.`
    },
    {
      q: "Discuss the three states of mechanical equilibrium (stable, unstable, and neutral) in terms of potential energy U(x), its first derivative dU/dx, and its second derivative d²U/dx².",
      sol: `<b>1. Equilibrium Condition:</b><br>
      At equilibrium, net force must be zero: $F = -${frac('dU', 'dx')} = 0 \implies \mathbf{${frac('dU', 'dx')} = 0}$.<br>
      Equilibrium states correspond to the stationary points (extrema) of the potential energy curve.<br><br>
      <b>2. Three Equilibrium Classifications:</b><br>
      &bull; <b>1. Stable Equilibrium (Local Minimum of U):</b><br>
      ${frac('dU', 'dx')} = 0 \quad \text{and} \quad \mathbf{${frac('d^2U', 'dx^2')} > 0}$.<br>
      Potential energy is at a minimum. When displaced slightly, the force $F = -dU/dx$ acts in the opposite direction, restoring the body to equilibrium. <i>Example:</i> A marble at the bottom of a spherical bowl.<br><br>
      &bull; <b>2. Unstable Equilibrium (Local Maximum of U):</b><br>
      ${frac('dU', 'dx')} = 0 \quad \text{and} \quad \mathbf{${frac('d^2U', 'dx^2')} < 0}$.<br>
      Potential energy is at a maximum. When displaced, the force accelerates the body further away from equilibrium. <i>Example:</i> A marble balanced precariously on the apex of an inverted bowl.<br><br>
      &bull; <b>3. Neutral Equilibrium (Constant Plateau of U):</b><br>
      ${frac('dU', 'dx')} = 0 \quad \text{and} \quad \mathbf{${frac('d^2U', 'dx^2')} = 0}$.<br>
      Potential energy is uniform. When displaced, no net force arises, and the body remains in equilibrium at its new position. <i>Example:</i> A marble resting on a flat horizontal table.`
    },
    {
      q: "A block attached to a spring of constant k is compressed by x_0 on a smooth floor and released toward a rough horizontal strip of length d and friction &mu;. Derive the stopping condition using energy methods.",
      sol: `<b>1. Energy Accounting:</b><br>
      Initial state: Block held at compression $x_0$.<br>
      Initial mechanical energy: $E_i = \frac{1}{2} k x_0^2$.<br>
      When released, all elastic energy converts into kinetic energy as it passes equilibrium: $K = \frac{1}{2} k x_0^2$.<br><br>
      <b>2. Work Done by Friction across Rough Strip:</b><br>
      On the rough surface, normal reaction is $N = mg$.<br>
      Frictional force is $f_k = \mu mg$.<br>
      If the block comes to rest after sliding distance $s$ on the rough patch:<br>
      Work done by friction: $W_f = -f_k s = -(\mu mg) s$.<br>
      By the Generalized Work-Energy Theorem: $W_{\\text{nc}} = \Delta E = 0 - E_i = -\frac{1}{2} k x_0^2$.<br>
      $-(\mu mg) s = -\frac{1}{2} k x_0^2$.<br>
      Solving for stopping distance $s$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        s = ${frac('k x_0^2', '2 \mu m g')}
      </div>
      If $s < d$, the block stops inside the rough patch. If $s > d$, it exits the patch with remaining kinetic energy $K_{\\text{exit}} = \frac{1}{2} k x_0^2 - \mu mg d$.`
    },
    {
      q: "A particle of mass m is attached to a light rigid rod of length L (instead of a flexible string) and whirled in a vertical circle. Derive the critical minimum velocities at the top and bottom, and explain why they differ from the string case.",
      sol: `<b>1. Fundamental Physical Difference (Rod vs String):</b><br>
      A flexible string cannot support compressive thrust; if velocity drops below $\sqrt{gL}$ at the top, tension becomes negative and the string goes slack.<br>
      In contrast, a <b>rigid rod</b> can support compression as well as tension. The particle cannot fall inward. Therefore, to complete the vertical circle, the particle only needs to reach the topmost point with <b>infinitesimal velocity ($v_{\\text{top}} \ge 0$)</b>.<br><br>
      <b>2. Critical Top Velocity:</b><br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        v_{\\text{top, min}} = 0 \quad (\text{compared to } \sqrt{gL} \text{ for string})
      </div>
      <b>3. Critical Bottom Velocity:</b><br>
      By conservation of mechanical energy between lowest point and highest point (height $2L$):<br>
      $\frac{1}{2} m v_{\\text{bottom}}^2 = \frac{1}{2} m v_{\\text{top}}^2 + mg(2L)$.<br>
      Substituting $v_{\\text{top}} = 0$:<br>
      $\frac{1}{2} m v_{\\text{bottom}}^2 = 0 + 2mgL = 2mgL \implies v_{\\text{bottom}}^2 = 4gL$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v_{\\text{bottom, min}} = \sqrt{4 g L} = 2 \sqrt{g L} \quad (\text{compared to } \sqrt{5gL} \text{ for string})
      </div>`
    },
    {
      q: "A bullet of mass m moving with speed u collides with a block of mass M attached to a horizontal spring of constant k on a frictionless table. Derive the maximum compression x_max of the spring when: (a) Collision is completely inelastic (bullet embeds), (b) Collision is perfectly elastic (m << M).",
      sol: `<b>(a) Inelastic Collision (Bullet Embeds):</b><br>
      &bull; Momentum conservation: $m u = (m + M) V \implies V = \left(${frac('m', 'm + M')}\right) u$.<br>
      &bull; Energy conservation during spring compression:<br>
      $\frac{1}{2} (m + M) V^2 = \frac{1}{2} k x_{\\max}^2 \implies x_{\\max} = V \sqrt{${frac('m + M', 'k')}}$.<br>
      Substitute $V$:<br>
      $x_{\\max} = \left(${frac('m u', 'm + M')}\right) \sqrt{${frac('m + M', 'k')}} = \mathbf{${frac('m u', '\\sqrt{k(m + M)}')}}$.<br><br>
      <b>(b) Elastic Collision ($m \ll M$):</b><br>
      Target $M$ is initially at rest ($u_2 = 0$).<br>
      Velocity transferred to block $M$ in 1D elastic collision:<br>
      $V_M = \left(${frac('2m', 'm + M')}\right) u \approx \left(${frac('2m', 'M')}\right) u$.<br>
      All kinetic energy of block $M$ converts into spring strain energy:<br>
      $\frac{1}{2} M V_M^2 = \frac{1}{2} k x_{\\max}^2 \implies x_{\\max} = V_M \sqrt{${frac('M', 'k')}} = \left(${frac('2m u', 'M')}\right) \sqrt{${frac('M', 'k')}} = \mathbf{${frac('2m u', '\\sqrt{k M}')}}$.`
    },
    {
      q: "Master Comprehensive Synthesis of Unit IV: Work, Energy and Power (06 Marks). Synthesize the full theoretical architecture connecting scalar work, calculus theorems, conservative potential fields, vertical circular dynamics, collision invariants, and top CBSE board examination pitfalls.",
      sol: `<b>1. Core Theoretical Architecture of Unit IV:</b><br>
      Unit IV: Work, Energy and Power (06 Marks) unifies Newtonian dynamics through scalar energy conservation principles.<br><br>
      <b>2. Master Operational Principles:</b><br>
      &bull; <b>Mechanical Work:</b> Scalar dot product $W = \vec{F} \cdot \vec{s} = F s \cos\theta$. For variable forces, $W = \int F(x) dx = \text{Area under } F-x \text{ curve}$.<br>
      &bull; <b>Work-Energy Theorem:</b> $W_{\\text{net}} = \Delta K = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$. Holds unconditionally for all forces.<br>
      &bull; <b>Power:</b> Time rate of work $P = dW/dt = \vec{F} \cdot \vec{v}$ ($1\text{ hp} = 746\text{ W}, 1\text{ kWh} = 3.6\text{ MJ}$).<br>
      &bull; <b>Potential Energy & Springs:</b> $F = -dU/dx$. Spring Hooke force $F_s = -kx \implies U_s = \frac{1}{2}kx^2$.<br>
      &bull; <b>Conservative Fields:</b> Work is path-independent, closed loop $\oint \vec{F}\cdot d\vec{r} = 0$, mechanical energy conserved $E = K + U = \text{const}$.<br>
      &bull; <b>Vertical Circular Motion:</b> String loop: $v_{\\text{top}} = \sqrt{gL}$, $v_{\\text{bottom}} = \sqrt{5gL}$, $v_{\\text{mid}} = \sqrt{3gL}$, $T_{\\text{bottom}} - T_{\\text{top}} = 6mg$. Rigid rod: $v_{\\text{top}} = 0, v_{\\text{bottom}} = \sqrt{4gL}$.<br>
      &bull; <b>Collision Invariants:</b> In 1D elastic ($e = 1$): $u_1 - u_2 = v_2 - v_1$; equal masses swap velocities. In completely inelastic ($e = 0$): bodies stick, $\Delta K = \frac{1}{2}\left(\frac{m_1 m_2}{m_1 + m_2}\right)(u_1 - u_2)^2$. In 2D elastic equal-mass collision: scattering angle $\theta_1 + \theta_2 = 90^\circ$.<br><br>
      <b>3. Top 5 Board Examination Trap Alerts:</b><br>
      1. Work done by a normal force or centripetal force is strictly ZERO because $\theta = 90^\circ$.<br>
      2. The difference $T_{\\text{bottom}} - T_{\\text{top}} = 6mg$ in vertical circles is independent of launch speed.<br>
      3. Total linear momentum is conserved in BOTH elastic and inelastic collisions; kinetic energy is conserved ONLY in elastic collisions.<br>
      4. A rigid rod requires only $v_{\\text{top}} = 0$ to loop the vertical circle, whereas a string requires $v_{\\text{top}} = \sqrt{gL}$ to avoid slackening.<br>
      5. Caret symbols ($^$) are strictly forbidden in final presentation; standard superscripts must be used.`
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 81}: ${item.q}</h3>
    <div style="background: rgba(0, 198, 255, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Complete Step-by-Step Derivation & Theoretical Proof (5 Marks):</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getLaQuestions };
