const themeColor = "#42A5F5";

const solutionsPart3 = `
<!-- SECTION C: LONG ANSWER (LA) QUESTIONS (5 MARKS EACH) - Q81 TO Q100 -->
<div style="background: rgba(66, 165, 245, 0.08); padding: 16px; border-radius: 8px; margin: 30px 0 20px 0; border: 1px solid rgba(66, 165, 245, 0.25);">
  <h2 style="color: ${themeColor}; margin: 0; font-size: 20px;">Section C: Long Answer (LA) Questions & Derivations (5 Marks Each) — Questions 81 to 100</h2>
  <p style="color: #94A3B8; margin: 6px 0 0 0; font-size: 13px;">Comprehensive 5-mark board exam derivations, multi-step mathematical proofs, and theoretical syntheses.</p>
</div>

<!-- Q81 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q81: Complete 3D Derivation of the Pressure Exerted by an Ideal Gas</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the fundamental assumptions of the kinetic theory of gases. From microscopic molecular dynamics, rigorously derive the expression for the pressure exerted by an ideal gas enclosed in a cubical container of side $L$: $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Fundamental Assumptions:</b><br/>
    (i) The gas consists of an enormous number of identical, point-mass, perfectly spherical molecules.<br/>
    (ii) The actual volume occupied by the gas molecules themselves is utterly negligible compared to the total container volume $V$.<br/>
    (iii) Molecules are in incessant, rapid, random rectilinear motion in all directions.<br/>
    (iv) No intermolecular attractive or repulsive forces act between molecules except during collisions.<br/>
    (v) All collisions between molecules and with the container walls are perfectly elastic (total kinetic energy and momentum are strictly conserved).<br/>
    (vi) The duration of any collision is negligible compared to the time elapsed between successive collisions.<br/><br/>
    <b style="color: ${themeColor};">2. Microscopic Mathematical Derivation:</b><br/>
    Consider a cubical box of side $L$ and volume $V = L^3$, aligned along Cartesian axes $x, y, z$. The box contains $N$ identical gas molecules, each of mass $m$.<br/>
    Consider the $i$-th molecule moving with velocity vector:
    $$\\vec{v}_i = v_{xi}\\hat{i} + v_{yi}\\hat{j} + v_{zi}\\hat{k} \\implies v_i^2 = v_{xi}^2 + v_{yi}^2 + v_{zi}^2$$
    Let this molecule strike the planar wall $A_1$ perpendicular to the $x$-axis (at $x = L$).<br/>
    Since the collision is perfectly elastic, only the normal component $v_{xi}$ reverses sign, while tangential components $v_{yi}, v_{zi}$ remain unchanged:<br/>
    Initial momentum before impact: $p_{xi} = m v_{xi}$<br/>
    Final momentum after bounce: $p'_{xi} = -m v_{xi}$<br/>
    Momentum delivered to the wall during one collision:
    $$\\Delta p_{\\text{wall}} = p_{xi} - p'_{xi} = m v_{xi} - (-m v_{xi}) = 2 m v_{xi}$$
    After bouncing from wall $A_1$, the molecule travels a distance $2L$ along the $x$-axis to strike the opposite wall and return to wall $A_1$.<br/>
    Time elapsed between two consecutive impacts on wall $A_1$:
    $$\\Delta t = \\frac{2L}{v_{xi}}$$
    Number of collisions per second on wall $A_1$:
    $$\\nu_c = \\frac{1}{\\Delta t} = \\frac{v_{xi}}{2L}$$
    Rate of momentum transfer (force $F_{xi}$ exerted by this single molecule on wall $A_1$):
    $$F_{xi} = \\frac{\\Delta p_{\\text{wall}}}{\\Delta t} = \\frac{2 m v_{xi}}{\\frac{2L}{v_{xi}}} = \\frac{m v_{xi}^2}{L}$$
    Total normal force exerted on wall $A_1$ by all $N$ molecules:
    $$F_x = \\sum_{i=1}^{N} F_{xi} = \\frac{m}{L} \\sum_{i=1}^{N} v_{xi}^2$$
    Since the area of wall $A_1$ is $A = L^2$, the pressure $P$ on this wall is:
    $$P = \\frac{F_x}{A} = \\frac{m}{L^3} \\sum_{i=1}^{N} v_{xi}^2 = \\frac{m}{V} \\sum_{i=1}^{N} v_{xi}^2$$
    We define the mean square velocity component along the $x$-direction as:
    $$\\overline{v_x^2} = \\frac{1}{N} \\sum_{i=1}^{N} v_{xi}^2 \\implies \\sum_{i=1}^{N} v_{xi}^2 = N \\overline{v_x^2}$$
    Substituting this into the pressure equation:
    $$P = \\frac{m N}{V} \\overline{v_x^2}$$
    <b style="color: ${themeColor};">3. Spatial Isotropy:</b><br/>
    Because molecular motion is completely random and isotropic with no preferred spatial direction:
    $$\\overline{v_x^2} = \\overline{v_y^2} = \\overline{v_z^2}$$
    Total mean square speed is:
    $$\\overline{v^2} = \\overline{v_x^2} + \\overline{v_y^2} + \\overline{v_z^2} = 3\\overline{v_x^2} \\implies \\overline{v_x^2} = \\frac{1}{3} \\overline{v^2}$$
    Substituting $\\overline{v_x^2} = \\frac{1}{3} v_{\\text{rms}}^2$ (where $v_{\\text{rms}}^2 = \\overline{v^2}$):
    $$\\mathbf{P = \\frac{1}{3} \\frac{m N}{V} v_{\\text{rms}}^2}$$
    Total mass of the gas is $M_{\\text{total}} = m N$. Since density is $\\rho = \\frac{m N}{V}$:
    $$\\mathbf{P = \\frac{1}{3} \\rho v_{\\text{rms}}^2}$$
    This fundamental equation directly connects the macroscopic pressure exerted on the walls to the microscopic mass density and root-mean-square speed of the molecules.
  </div>
</div>

<!-- Q82 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q82: Microscopic Deduction of Empirical Gas Laws from Kinetic Theory</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Starting from the kinetic pressure formula $P = \\frac{1}{3} \\frac{m N}{V} v_{\\text{rms}}^2$, deduce: (a) Boyle's Law, (b) Charles's Law, (c) Gay-Lussac's Law, (d) Avogadro's Law, and (e) Graham's Law of Diffusion.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    The kinetic pressure equation can be rewritten as:
    $$P V = \\frac{2}{3} N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right) = \\frac{2}{3} E_{\\text{trans}}$$
    where $E_{\\text{trans}}$ is the total translational kinetic energy.<br/><br/>
    <b style="color: ${themeColor};">(a) Boyle's Law:</b><br/>
    At constant temperature $T$, the mean translational kinetic energy of a molecule is constant ($\\frac{1}{2} m v_{\\text{rms}}^2 = \\text{constant}$). For a given mass of gas ($N$ fixed), $E_{\\text{trans}} = \\text{constant}$.<br/>
    Therefore, $P V = \\frac{2}{3} E_{\\text{trans}} = \\text{constant}$, which is Boyle's Law: $P \\propto \\frac{1}{V}$.<br/><br/>
    <b style="color: ${themeColor};">(b) Charles's Law:</b><br/>
    Translational kinetic energy is directly proportional to absolute temperature: $E_{\\text{trans}} \\propto T$.<br/>
    $$P V = \\frac{2}{3} E_{\\text{trans}} = k T$$
    At constant pressure $P$, $V = \\left( \\frac{k}{P} \\right) T \\implies V \\propto T$. This is Charles's Law.<br/><br/>
    <b style="color: ${themeColor};">(c) Gay-Lussac's Law (Pressure Law):</b><br/>
    From $P V = k T$, if volume $V$ is kept constant, $P = \\left( \\frac{k}{V} \\right) T \\implies P \\propto T$. This is Gay-Lussac's Law.<br/><br/>
    <b style="color: ${themeColor};">(d) Avogadro's Law:</b><br/>
    Consider two different gases $1$ and $2$ at the same pressure $P$, occupying identical volume $V$ at the same temperature $T$.<br/>
    For Gas 1: $P V = \\frac{1}{3} m_1 N_1 v_{\\text{rms},1}^2$<br/>
    For Gas 2: $P V = \\frac{1}{3} m_2 N_2 v_{\\text{rms},2}^2$<br/>
    Equating the two:
    $$\\frac{1}{3} m_1 N_1 v_{\\text{rms},1}^2 = \\frac{1}{3} m_2 N_2 v_{\\text{rms},2}^2 \\implies m_1 N_1 v_{\\text{rms},1}^2 = m_2 N_2 v_{\\text{rms},2}^2$$
    Since both gases are at the same temperature $T$, their average kinetic energies per molecule are equal:
    $$\\frac{1}{2} m_1 v_{\\text{rms},1}^2 = \\frac{1}{2} m_2 v_{\\text{rms},2}^2 \\implies m_1 v_{\\text{rms},1}^2 = m_2 v_{\\text{rms},2}^2$$
    Dividing the first equation by the second gives:
    $$\\mathbf{N_1 = N_2}$$
    Equal volumes of all gases under identical conditions of temperature and pressure contain an equal number of molecules, which is Avogadro's Law.<br/><br/>
    <b style="color: ${themeColor};">(e) Graham's Law of Diffusion:</b><br/>
    The rate of diffusion $r$ of a gas through a fine aperture is directly proportional to its molecular speed: $r \\propto v_{\\text{rms}}$.<br/>
    From $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$, we have $v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}}$.<br/>
    At constant pressure $P$, $v_{\\text{rms}} \\propto \\frac{1}{\\sqrt{\\rho}}$, which yields:
    $$\\mathbf{r \\propto \\frac{1}{\\sqrt{\\rho}} \\implies \\frac{r_1}{r_2} = \\sqrt{\\frac{\\rho_2}{\\rho_1}} = \\sqrt{\\frac{M_2}{M_1}}}$$
    This establishes Graham's Law of Diffusion directly from kinetic theory.
  </div>
</div>

<!-- Q83 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q83: Kinetic Interpretation of Temperature and Physical Meaning of Absolute Zero</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Rigorously establish the kinetic interpretation of temperature. Derive the expressions for average translational kinetic energy per molecule and per mole, and discuss the physical significance of absolute zero ($0\\text{ K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Derivation of Mean Kinetic Energy:</b><br/>
    From the kinetic theory of gases, the pressure of an ideal gas containing $N$ molecules in volume $V$ is:
    $$P = \\frac{1}{3} \\frac{m N}{V} v_{\\text{rms}}^2$$
    Multiplying both sides by $V$:
    $$P V = \\frac{1}{3} m N v_{\\text{rms}}^2 = \\frac{2}{3} N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right)$$
    The macroscopic ideal gas equation for $n$ moles is:
    $$P V = n R T$$
    Since $n = \\frac{N}{N_A}$ and the Boltzmann constant is $k_B = \\frac{R}{N_A}$, we have $n R T = N k_B T$.<br/>
    Equating the kinetic and thermodynamic expressions for $PV$:
    $$\\frac{2}{3} N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right) = N k_B T$$
    Canceling $N$ from both sides:
    $$\\frac{2}{3} \\overline{\\epsilon}_{\\text{trans}} = k_B T$$
    Solving for the mean translational kinetic energy per molecule $\\overline{\\epsilon}_{\\text{trans}}$:
    $$\\mathbf{\\overline{\\epsilon}_{\\text{trans}} = \\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T}$$
    <b style="color: ${themeColor};">2. Kinetic Energy per Mole:</b><br/>
    Multiplying by Avogadro's number $N_A$:
    $$E_{\\text{mole}} = N_A \\cdot \\overline{\\epsilon}_{\\text{trans}} = N_A \\left( \\frac{3}{2} k_B T \\right) = \\frac{3}{2} (N_A k_B) T$$
    $$\\mathbf{E_{\\text{mole}} = \\frac{3}{2} R T}$$
    <b style="color: ${themeColor};">3. Physical Implications:</b><br/>
    (i) Absolute temperature $T$ is a direct macroscopic measure of the mean translational kinetic energy of disordered molecular motion.<br/>
    (ii) It is completely independent of the mass, shape, or chemical identity of the gas molecule: a light hydrogen molecule and a heavy xenon atom at the same temperature possess exactly identical mean kinetic energies ($\\frac{3}{2} k_B T$).<br/><br/>
    <b style="color: ${themeColor};">4. Physical Significance of Absolute Zero ($T = 0\\text{ K}$):</b><br/>
    Setting $T = 0$ in the kinetic formula:
    $$\\overline{\\epsilon}_{\\text{trans}} = \\frac{1}{2} m v_{\\text{rms}}^2 = 0 \\implies v_{\\text{rms}} = 0$$
    Classically, absolute zero is the theoretical temperature at which all random translational molecular motion completely ceases, and gas molecules come to an absolute standstill.<br/>
    <b style="color: ${themeColor};">Quantum Refinement:</b> Under quantum mechanics (Heisenberg's Uncertainty Principle), molecules never come to a total standstill; they retain a minimal non-zero ground-state vibrational energy termed <strong>zero-point energy</strong> ($E_0 > 0$) even at $0\\text{ K}$.
  </div>
</div>

<!-- Q84 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q84: Maxwellian Molecular Speeds: $v_{\\text{rms}}$, $\\overline{v}$, and $v_{\\text{mp}}$</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define and mathematically derive the expressions for: (a) Most Probable Speed ($v_{\\text{mp}}$), (b) Average / Mean Speed ($\\overline{v}$), and (c) Root-Mean-Square Speed ($v_{\\text{rms}}$). Prove that $v_{\\text{mp}} < \\overline{v} < v_{\\text{rms}}$ and describe the effect of temperature and molecular mass on the Maxwell-Boltzmann distribution curve.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    Maxwell and Boltzmann showed that in a thermalized gas, the fraction of molecules with speeds between $v$ and $v + dv$ is governed by the probability density:
    $$f(v) = 4\\pi \\left( \\frac{m}{2\\pi k_B T} \\right)^{3/2} v^2 \\exp\\left( -\\frac{m v^2}{2 k_B T} \\right)$$
    <b style="color: ${themeColor};">(a) Most Probable Speed ($v_{\\text{mp}}$):</b><br/>
    This is the speed possessed by the maximum fraction of molecules. It corresponds to the peak of the distribution where $\\frac{df(v)}{dv} = 0$:
    $$\\frac{d}{dv} \\left[ v^2 e^{-\\beta v^2} \\right] = 2v e^{-\\beta v^2} - 2\\beta v^3 e^{-\\beta v^2} = 0 \\implies 2v (1 - \\beta v^2) = 0$$
    With $\\beta = \\frac{m}{2 k_B T}$, we find $v_{\\text{mp}}^2 = \\frac{1}{\\beta} = \\frac{2 k_B T}{m}$.
    $$\\mathbf{v_{\\text{mp}} = \\sqrt{\\frac{2 k_B T}{m}} = \\sqrt{\\frac{2 R T}{M}} \\approx 1.414 \\sqrt{\\frac{R T}{M}}}$$
    <b style="color: ${themeColor};">(b) Average / Mean Speed ($\\overline{v}$):</b><br/>
    The arithmetic mean speed is obtained by integrating $v f(v) dv$ from $0$ to $\\infty$:
    $$\\overline{v} = \\int_{0}^{\\infty} v f(v) dv = \\sqrt{\\frac{8 k_B T}{\\pi m}} = \\sqrt{\\frac{8 R T}{\\pi M}}$$
    $$\\mathbf{\\overline{v} = \\sqrt{\\frac{8 R T}{\\pi M}} \\approx 1.596 \\sqrt{\\frac{R T}{M}}}$$
    <b style="color: ${themeColor};">(c) Root-Mean-Square Speed ($v_{\\text{rms}}$):</b><br/>
    The square root of the mean squared speed:
    $$v_{\\text{rms}} = \\sqrt{\\overline{v^2}} = \\sqrt{\\int_{0}^{\\infty} v^2 f(v) dv} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}}$$
    $$\\mathbf{v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}} \\approx 1.732 \\sqrt{\\frac{R T}{M}}}$$
    <b style="color: ${themeColor};">Ratio and Ordering:</b><br/>
    Taking the ratio of the three characteristic speeds:
    $$v_{\\text{mp}} : \\overline{v} : v_{\\text{rms}} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1.414 : 1.596 : 1.732 = 1 : 1.128 : 1.224$$
    Therefore, the strict universal ordering is:
    $$\\mathbf{v_{\\text{mp}} < \\overline{v} < v_{\\text{rms}}}$$
    <b style="color: ${themeColor};">Effect of Temperature and Molar Mass on Distribution:</b><br/>
    1. <strong>Increasing Temperature $T$:</strong> The curve shifts toward higher speeds (to the right), broadens, and flattens out (peak height decreases) because total probability $\\int f(v)dv = 1$ is conserved.<br/>
    2. <strong>Increasing Molar Mass $M$:</strong> Heavier gases have lower speeds; the peak shifts to the left and becomes sharper and narrower.
  </div>
</div>

<!-- Q85 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q85: Derivation of the Relation Between Molecular Speed and Speed of Sound</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Newton's formula for the speed of sound and Laplace's correction. Derive the relationship connecting the speed of sound in a gas ($v_s$) to the molecular root-mean-square speed ($v_{\\text{rms}}$), and explain why sound speed can never exceed molecular rms speed.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Newton's Formula and Laplace Correction:</b><br/>
    Newton assumed sound wave compressions and rarefactions occur isothermally ($B_{\\text{iso}} = P$), giving $v = \\sqrt{P / \\rho}$, which predicted $280\\text{ m/s}$ in air (a $15\\%$ error).<br/>
    Laplace corrected this by recognizing that acoustic pressure fluctuations occur so rapidly that no heat can be exchanged between adjacent compressions and rarefactions. The process is strictly <strong>adiabatic</strong>, with adiabatic bulk modulus:
    $$B_{\\text{adia}} = \\gamma P$$
    where $\\gamma = C_p / C_v$ is the adiabatic index. Hence Laplace's formula is:
    $$v_s = \\sqrt{\\frac{\\gamma P}{\\rho}}$$
    Using the ideal gas equation $P = \\frac{\\rho R T}{M} \\implies \\frac{P}{\\rho} = \\frac{R T}{M}$:
    $$\\mathbf{v_s = \\sqrt{\\frac{\\gamma R T}{M}}}$$
    <b style="color: ${themeColor};">2. Kinetic RMS Speed Expression:</b><br/>
    From the kinetic theory of gases, the root-mean-square speed of gas molecules is:
    $$\\mathbf{v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}}}$$
    <b style="color: ${themeColor};">3. Deriving the Relationship:</b><br/>
    Dividing the speed of sound by the rms speed:
    $$\\frac{v_s}{v_{\\text{rms}}} = \\frac{\\sqrt{\\frac{\\gamma R T}{M}}}{\\sqrt{\\frac{3 R T}{M}}} = \\sqrt{\\frac{\\gamma}{3}}$$
    Multiplying by $v_{\\text{rms}}$:
    $$\\mathbf{v_s = v_{\\text{rms}} \\sqrt{\\frac{\\gamma}{3}}}$$
    <b style="color: ${themeColor};">4. Physical Explanation of Why $v_s < v_{\\text{rms}}$:</b><br/>
    For any gas, the adiabatic index $\\gamma$ satisfies $1 < \\gamma \\le \\frac{5}{3} \\approx 1.67$.<br/>
    Even for a monoatomic gas where $\\gamma = 5/3$:
    $$\\sqrt{\\frac{\\gamma}{3}} = \\sqrt{\\frac{5/3}{3}} = \\sqrt{\\frac{5}{9}} = \\frac{\\sqrt{5}}{3} \\approx \\frac{2.236}{3} \\approx 0.745 < 1$$
    For air (diatomic, $\\gamma = 7/5 = 1.40$):
    $$\\sqrt{\\frac{1.40}{3}} = \\sqrt{0.467} \\approx 0.683$$
    Thus, $v_s \\approx 0.68 v_{\\text{rms}}$.<br/>
    <strong>Physical Reason:</strong> A sound wave is a mechanical longitudinal wave propagated via successive collisions between gas molecules. The disturbance cannot propagate through the medium faster than the molecules carrying the momentum and energy from one collision layer to the next.
  </div>
</div>

<!-- Q86 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q86: Mathematical Derivations of Work Done in Compressing an Ideal Gas</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive the exact mathematical formulas for the work done on an ideal gas during: (a) Isothermal compression from $V_1$ to $V_2$, and (b) Adiabatic compression from $(P_1, V_1, T_1)$ to $(P_2, V_2, T_2)$. Compare the work required in both processes using a $P-V$ indicator diagram.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    Work done on a gas by an external piston during compression from initial volume $V_1$ to final volume $V_2$ ($V_2 < V_1$) is:
    $$W_{\\text{on}} = -\\int_{V_1}^{V_2} P dV = \\int_{V_2}^{V_1} P dV$$
    <b style="color: ${themeColor};">(a) Isothermal Compression:</b><br/>
    In an isothermal process, temperature $T$ is held constant. The ideal gas equation gives $P = \\frac{n R T}{V}$.
    $$W_{\\text{on}} = -\\int_{V_1}^{V_2} \\frac{n R T}{V} dV = -n R T [\\ln V]_{V_1}^{V_2} = -n R T \\ln\\left( \\frac{V_2}{V_1} \\right)$$
    Since $V_1 > V_2$, this is equivalently written as:
    $$\\mathbf{W_{\\text{on}} = n R T \\ln\\left( \\frac{V_1}{V_2} \\right) = 2.303 n R T \\log_{10}\\left( \\frac{V_1}{V_2} \\right)}$$
    In terms of initial and final pressures (since $P_1 V_1 = P_2 V_2 \\implies V_1 / V_2 = P_2 / P_1$):
    $$\\mathbf{W_{\\text{on}} = n R T \\ln\\left( \\frac{P_2}{P_1} \\right)}$$
    <b style="color: ${themeColor};">(b) Adiabatic Compression:</b><br/>
    In an adiabatic compression, no heat enters or leaves ($Q = 0$). The gas obeys:
    $$P V^{\\gamma} = K = \\text{constant} \\implies P = K V^{-\\gamma}$$
    Integrating work done:
    $$W = \\int_{V_1}^{V_2} P dV = K \\int_{V_1}^{V_2} V^{-\\gamma} dV = K \\left[ \\frac{V^{1-\\gamma}}{1-\\gamma} \\right]_{V_1}^{V_2} = \\frac{K V_2^{1-\\gamma} - K V_1^{1-\\gamma}}{1-\\gamma}$$
    Since $K = P_2 V_2^{\\gamma} = P_1 V_1^{\\gamma}$:
    $$W = \\frac{(P_2 V_2^{\\gamma}) V_2^{1-\\gamma} - (P_1 V_1^{\\gamma}) V_1^{1-\\gamma}}{1-\\gamma} = \\frac{P_2 V_2 - P_1 V_1}{1-\\gamma}$$
    Work done ON the gas ($W_{\\text{on}} = -W$):
    $$\\mathbf{W_{\\text{on}} = \\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}}$$
    Using the ideal gas relations $P_1 V_1 = n R T_1$ and $P_2 V_2 = n R T_2$:
    $$\\mathbf{W_{\\text{on}} = \\frac{n R (T_2 - T_1)}{\\gamma - 1}}$$
    <b style="color: ${themeColor};">(c) Comparison of Work Required on $P-V$ Diagram:</b><br/>
    1. The slope of an adiabatic curve is steeper than an isothermal curve by factor $\\gamma$:
    $$\\left| \\frac{dP}{dV} \\right|_{\\text{adia}} = \\gamma \\left| \\frac{dP}{dV} \\right|_{\\text{iso}}$$
    2. When compressing a gas from the same initial state $(P_1, V_1)$ to the same final volume $V_2$, the adiabatic curve lies entirely ABOVE the isothermal curve.<br/>
    3. The area under the $P-V$ curve represents work done:
    $$\\mathbf{W_{\\text{adiabatic}} > W_{\\text{isothermal}}}$$
    More work is required in adiabatic compression because the work done on the gas is converted directly into internal energy, causing temperature and pressure to rise rapidly, opposing further compression.
  </div>
</div>

<!-- Q87 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q87: Law of Equipartition of Energy: Theoretical Formulation and Proof</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the Law of Equipartition of Energy clearly. Outline the statistical mechanical derivation using Maxwell-Boltzmann distribution, proving that the mean energy associated with each independent quadratic term in the Hamiltonian is $\\frac{1}{2} k_B T$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Formal Statement:</b><br/>
    The Law of Equipartition of Energy states that in any classical dynamical system in complete thermal equilibrium at absolute temperature $T$, the total energy is equally distributed among all its active degrees of freedom, and the average energy associated with each independent degree of freedom whose energy expression contains a quadratic term of coordinates or momenta is strictly:
    $$\\mathbf{\\overline{\\epsilon} = \\frac{1}{2} k_B T}$$
    where $k_B = 1.38 \\times 10^{-23}\\text{ J/K}$ is Boltzmann's constant.<br/><br/>
    <b style="color: ${themeColor};">2. Statistical Mechanical Proof:</b><br/>
    Consider a single quadratic energy term in the system's Hamiltonian associated with generalized coordinate or momentum $q$ (e.g., kinetic energy along $x$: $\\epsilon_x = \\frac{1}{2} m v_x^2 = \\frac{p_x^2}{2m}$):
    $$\\epsilon(q) = c q^2$$
    where $c$ is a positive constant.<br/>
    According to the Maxwell-Boltzmann canonical distribution, the probability that the system occupies a state with coordinate between $q$ and $q + dq$ is proportional to $e^{-\\epsilon / k_B T} dq = e^{-c q^2 / k_B T} dq$.<br/>
    The thermal expectation value of this energy term is:
    $$\\overline{\\epsilon} = \\frac{\\int_{-\\infty}^{\\infty} c q^2 e^{-c q^2 / k_B T} dq}{\\int_{-\\infty}^{\\infty} e^{-c q^2 / k_B T} dq}$$
    Let $\\beta = \\frac{c}{k_B T}$. The denominator is the standard Gaussian integral:
    $$I_0(\\beta) = \\int_{-\\infty}^{\\infty} e^{-\\beta q^2} dq = \\sqrt{\\frac{\\pi}{\\beta}}$$
    The numerator is related to the derivative of $I_0$ with respect to $\\beta$:
    $$\\int_{-\\infty}^{\\infty} q^2 e^{-\\beta q^2} dq = -\\frac{d I_0}{d\\beta} = -\\frac{d}{d\\beta}\\left( \\pi^{1/2} \\beta^{-1/2} \\right) = \\frac{1}{2} \\pi^{1/2} \\beta^{-3/2}$$
    Substituting back into the expectation value:
    $$\\overline{\\epsilon} = c \\cdot \\frac{\\frac{1}{2} \\pi^{1/2} \\beta^{-3/2}}{\\pi^{1/2} \\beta^{-1/2}} = \\frac{c}{2 \\beta}$$
    Substituting $\\beta = \\frac{c}{k_B T}$:
    $$\\overline{\\epsilon} = \\frac{c}{2 \\left( \\frac{c}{k_B T} \\right)} = \\mathbf{\\frac{1}{2} k_B T}$$
    This mathematically proves that every independent quadratic degree of freedom contributes precisely $\\frac{1}{2} k_B T$ to the average energy of the system.
  </div>
</div>

<!-- Q88 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q88: Comprehensive Analysis of Degrees of Freedom Across Molecular Geometries</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define the concept of degrees of freedom ($f$). Derive the formula $f = 3N - k$ and compute $f$ in detail for: (a) Monoatomic gas, (b) Rigid diatomic gas, (c) Non-rigid (vibrating) diatomic gas, and (d) Non-linear polyatomic gas.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Definition:</b><br/>
    The degrees of freedom ($f$) of a physical system is defined as the total number of independent coordinates or variables required to completely specify the position, configuration, and state of motion of all its constituent particles in space.<br/>
    For a molecule composed of $N$ particles moving in 3D space, it possesses $3N$ total coordinates. If there are $k$ fixed geometrical constraints (e.g., fixed bond lengths):
    $$\\mathbf{f = 3N - k}$$
    <b style="color: ${themeColor};">2. Systematic Classification:</b><br/><br/>
    <b style="color: ${themeColor};">(a) Monoatomic Gas (e.g., He, Ne, Ar):</b><br/>
    - Number of atoms: $N = 1$. Constraints: $k = 0$.<br/>
    - Total degrees of freedom: $f = 3(1) - 0 = 3$.<br/>
    - Breakdown: All $3$ are <strong>translational</strong> along $x, y, z$ axes:
    $$\\epsilon = \\frac{1}{2} m v_x^2 + \\frac{1}{2} m v_y^2 + \\frac{1}{2} m v_z^2$$
    - Rotational degrees of freedom are $0$ because the moment of inertia about its own center of mass is negligible ($I \\approx 0$). Total: $\\mathbf{f = 3}$.<br/><br/>
    <b style="color: ${themeColor};">(b) Rigid Diatomic Gas at Moderate Temperatures (e.g., O$_2$, N$_2$, CO):</b><br/>
    - Number of atoms: $N = 2$. Rigid bond constraint: $k = 1$ (fixed interatomic bond length $d$).<br/>
    - Total degrees of freedom: $f = 3(2) - 1 = 5$.<br/>
    - Breakdown:
      - $3$ translational degrees of freedom (motion of center of mass).
      - $2$ rotational degrees of freedom (rotation about two mutually perpendicular axes orthogonal to the internuclear bond axis; moment of inertia about the bond axis itself is negligible).
      - Total: $\\mathbf{f = 3_{\\text{trans}} + 2_{\\text{rot}} = 5}$.<br/><br/>
    <b style="color: ${themeColor};">(c) Non-Rigid Diatomic Gas at High Temperatures ($T > 1000\\text{ K}$):</b><br/>
    - At high temperatures, the interatomic bond vibrates like a harmonic spring along the internuclear axis.<br/>
    - A single vibrational mode possesses TWO quadratic energy terms:
      - Kinetic energy of vibration: $\\frac{1}{2} \\mu \\left( \\frac{dr}{dt} \\right)^2$
      - Potential energy of vibration: $\\frac{1}{2} k_s (r - r_0)^2$
    - Total vibrational degrees of freedom contribute $2$ quadratic terms.<br/>
    - Total: $\\mathbf{f = 3_{\\text{trans}} + 2_{\\text{rot}} + 2_{\\text{vib}} = 7}$.<br/><br/>
    <b style="color: ${themeColor};">(d) Non-Linear Polyatomic Gas (e.g., H$_2$O, NH$_3$, CH$_4$):</b><br/>
    - Number of atoms $N \\ge 3$ arranged in a non-collinear 3D structure.<br/>
    - Center of mass has $3$ translational degrees of freedom.<br/>
    - The molecule has three non-zero, distinct principal moments of inertia ($I_x, I_y, I_z > 0$), providing $3$ rotational degrees of freedom.<br/>
    - At moderate temperatures (rigid bonds):
      $$\\mathbf{f = 3_{\\text{trans}} + 3_{\\text{rot}} = 6}$$
  </div>
</div>

<!-- Q89 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q89: Application of Equipartition Law to Specific Heat Capacities ($C_v, C_p, \\gamma$)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using the Law of Equipartition of Energy, derive the general formulas for internal energy $U$, molar heat capacities $C_v$ and $C_p$, and the adiabatic ratio $\\gamma = 1 + \\frac{2}{f}$ in terms of degrees of freedom $f$. Calculate numerical values for monoatomic, rigid diatomic, and polyatomic gases.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. General Formulation:</b><br/>
    By the equipartition law, each active degree of freedom carries an average energy of $\\frac{1}{2} k_B T$ per molecule.<br/>
    For a molecule with $f$ degrees of freedom, mean molecular energy is:
    $$\\overline{\\epsilon} = f \\left( \\frac{1}{2} k_B T \\right) = \\frac{f}{2} k_B T$$
    For $1$ mole of gas containing $N_A$ molecules, the total molar internal energy $U$ is:
    $$U = N_A \\overline{\\epsilon} = N_A \\left( \\frac{f}{2} k_B T \\right) = \\mathbf{\\frac{f}{2} R T}$$
    The molar heat capacity at constant volume is:
    $$\\mathbf{C_v = \\frac{dU}{dT} = \\frac{f}{2} R}$$
    Using Mayer's relation ($C_p - C_v = R$):
    $$\\mathbf{C_p = C_v + R = \\frac{f}{2} R + R = \\left( \\frac{f}{2} + 1 \\right) R = \\frac{f + 2}{2} R}$$
    The adiabatic exponent (atomicity ratio) is:
    $$\\mathbf{\\gamma = \\frac{C_p}{C_v} = \\frac{\\frac{f + 2}{2} R}{\\frac{f}{2} R} = \\frac{f + 2}{f} = 1 + \\frac{2}{f}}$$
    <b style="color: ${themeColor};">2. Application to Gas Categories:</b><br/><br/>
    <b style="color: ${themeColor};">(a) Monoatomic Gases ($f = 3$):</b><br/>
    - Molar internal energy: $U = \\frac{3}{2} R T$<br/>
    - $C_v = \\frac{3}{2} R \\approx 1.5 R$<br/>
    - $C_p = \\frac{3}{2} R + R = \\frac{5}{2} R \\approx 2.5 R$<br/>
    - $\\gamma = 1 + \\frac{2}{3} = \\mathbf{\\frac{5}{3} \\approx 1.67}$<br/><br/>
    <b style="color: ${themeColor};">(b) Rigid Diatomic Gases ($f = 5$ at room temperature):</b><br/>
    - Molar internal energy: $U = \\frac{5}{2} R T$<br/>
    - $C_v = \\frac{5}{2} R \\approx 2.5 R$<br/>
    - $C_p = \\frac{5}{2} R + R = \\frac{7}{2} R \\approx 3.5 R$<br/>
    - $\\gamma = 1 + \\frac{2}{5} = \\mathbf{\\frac{7}{5} = 1.40}$<br/><br/>
    <b style="color: ${themeColor};">(c) Diatomic Gas with Active Vibration ($f = 7$ at high $T$):</b><br/>
    - Molar internal energy: $U = \\frac{7}{2} R T$<br/>
    - $C_v = \\frac{7}{2} R \\approx 3.5 R$<br/>
    - $C_p = \\frac{7}{2} R + R = \\frac{9}{2} R \\approx 4.5 R$<br/>
    - $\\gamma = 1 + \\frac{2}{7} = \\mathbf{\\frac{9}{7} \\approx 1.29}$<br/><br/>
    <b style="color: ${themeColor};">(d) Non-Linear Polyatomic Gases ($f = 6$):</b><br/>
    - Molar internal energy: $U = \\frac{6}{2} R T = 3 R T$<br/>
    - $C_v = 3 R$<br/>
    - $C_p = 3 R + R = 4 R$<br/>
    - $\\gamma = 1 + \\frac{2}{6} = 1 + \\frac{1}{3} = \\mathbf{\\frac{4}{3} \\approx 1.33}$
  </div>
</div>

<!-- Q90 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q90: Complete Geometric Derivation of Mean Free Path ($\\lambda$)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define mean free path. Using the collision cylinder model and incorporating Clausius-Maxwell relative molecular velocity correction, rigorously derive the expression: $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Definition:</b><br/>
    The <strong>mean free path</strong> ($\\lambda$) of a gas molecule is the average straight-line distance traversed by a molecule between two successive collisions with other molecules in the medium.<br/><br/>
    <b style="color: ${themeColor};">2. Simplified Collision Cylinder Formulation:</b><br/>
    Assume all molecules are rigid spheres of effective collision diameter $d$.<br/>
    Two molecules collide if the distance between their centers becomes less than or equal to $d$.<br/>
    To begin, assume a single test molecule moves at average speed $v$, while all other molecules are temporarily considered stationary.<br/>
    In time $t$, the test molecule sweeps out a collision cylinder of:
    - Length: $L = v t$
    - Cross-sectional radius: $d$
    - Collision cross-section: $\\sigma = \\pi d^2$
    - Volume of collision cylinder: $V_c = \\pi d^2 (v t)$<br/>
    If the number of molecules per unit volume is $n$ (number density), the number of molecules whose centers lie inside this cylinder is:
    $$N_c = n \\cdot V_c = n \\pi d^2 v t$$
    Every molecule inside this swept cylinder experiences a collision. Thus, the number of collisions in time $t$ is $N_c$.<br/>
    The collision frequency is:
    $$\\nu = \\frac{N_c}{t} = \\pi n d^2 v$$
    The mean free path is total distance traveled divided by total collisions:
    $$\\lambda_0 = \\frac{\\text{Total distance traveled}}{\\text{Total collisions}} = \\frac{v t}{n \\pi d^2 v t} = \\frac{1}{\\pi n d^2}$$
    <b style="color: ${themeColor};">3. Clausius-Maxwell Relative Speed Correction:</b><br/>
    In reality, target molecules are not stationary; they move with thermal speeds in all random directions.<br/>
    The rate of collision depends on the <strong>average relative speed</strong> ($v_{\\text{rel}}$) between two colliding molecules.<br/>
    For two molecules with velocities $\\vec{v}_1$ and $\\vec{v}_2$:
    $$\\vec{v}_{\\text{rel}} = \\vec{v}_1 - \\vec{v}_2 \\implies v_{\\text{rel}}^2 = v_1^2 + v_2^2 - 2 \\vec{v}_1 \\cdot \\vec{v}_2$$
    Averaging over all random isotropic directions where $\\langle \\vec{v}_1 \\cdot \\vec{v}_2 \\rangle = 0$:
    $$\\overline{v_{\\text{rel}}^2} = \\overline{v_1^2} + \\overline{v_2^2} = v_{\\text{rms}}^2 + v_{\\text{rms}}^2 = 2 v_{\\text{rms}}^2$$
    Maxwell's integration over the full velocity distribution yields:
    $$v_{\\text{rel}} = \\sqrt{2} \\overline{v}$$
    The actual collision frequency is therefore:
    $$\\nu_{\\text{actual}} = \\pi d^2 n v_{\\text{rel}} = \\sqrt{2} \\pi n d^2 \\overline{v}$$
    The true mean free path $\\lambda$ is the actual distance traveled ($\\overline{v} t$) divided by total collisions ($\\nu_{\\text{actual}} t$):
    $$\\lambda = \\frac{\\overline{v} t}{\\sqrt{2} \\pi n d^2 \\overline{v} t}$$
    Canceling $\\overline{v} t$ gives the exact fundamental formula:
    $$\\mathbf{\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}}$$
    This completes the rigorous derivation.
  </div>
</div>

<!-- Q91 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q91: Functional Dependencies of Mean Free Path and Behavior in High Vacuum</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Express the mean free path in terms of: (a) Gas density $\\rho$, (b) Temperature $T$ and Pressure $P$, and (c) Volume $V$. Explain the physical behavior of $\\lambda$ when an enclosure is evacuated to high vacuum ($P < 10^{-4}\\text{ Pa}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    The fundamental formula is $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}$.<br/><br/>
    <b style="color: ${themeColor};">(a) In terms of Gas Density $\\rho$:</b><br/>
    Number density is $n = \\frac{N}{V}$. Since gas density is $\\rho = \\frac{m N}{V} = m n$, we have $n = \\frac{\\rho}{m}$ (where $m$ is molecular mass).
    $$\\mathbf{\\lambda = \\frac{m}{\\sqrt{2} \\pi \\rho d^2} \\propto \\frac{1}{\\rho}}$$
    Mean free path is inversely proportional to mass density.<br/><br/>
    <b style="color: ${themeColor};">(b) In terms of Temperature $T$ and Pressure $P$:</b><br/>
    From the ideal gas equation $P = n k_B T$, the number density is $n = \\frac{P}{k_B T}$.
    $$\\mathbf{\\lambda = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}}$$
    Hence:
    1. At constant pressure, $\\lambda \\propto T$ (direct proportionality to absolute temperature).<br/>
    2. At constant temperature, $\\lambda \\propto \\frac{1}{P}$ (inverse proportionality to pressure).<br/><br/>
    <b style="color: ${themeColor};">(c) In terms of Volume $V$:</b><br/>
    For a fixed quantity of gas ($N$ molecules), $n = \\frac{N}{V}$:
    $$\\mathbf{\\lambda = \\frac{V}{\\sqrt{2} \\pi N d^2} \\propto V}$$
    For a sealed container of fixed volume, $\\lambda$ remains strictly constant regardless of heating or cooling.<br/><br/>
    <b style="color: ${themeColor};">(d) Behavior in High Vacuum:</b><br/>
    1. At standard atmospheric pressure ($P \\approx 10^5\\text{ Pa}$), $\\lambda \\approx 6.8 \\times 10^{-8}\\text{ m} = 68\\text{ nm}$, which is tiny compared to laboratory vessel sizes.<br/>
    2. In high vacuum systems where pressure is reduced to $10^{-4}\\text{ Pa}$, the mean free path expands to:
    $$\\lambda \\approx 68\\text{ cm}$$
    At ultra-high vacuum ($10^{-7}\\text{ Pa}$), $\\lambda \\approx 680\\text{ meters}$.<br/>
    3. When $\\lambda$ exceeds the container diameter $L$, molecules travel across the entire vessel without colliding with one another. Collisions occur almost exclusively with the vessel walls.<br/>
    4. The gas transitions from continuum fluid dynamics into <strong>Knudsen flow</strong>, where thermal conductivity and internal friction become directly proportional to pressure $P$.
  </div>
</div>

<!-- Q92 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q92: Molar Heat Capacity of Solids and Derivation of Dulong-Petit Law</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain how the Law of Equipartition of Energy is applied to crystalline solids to derive the Dulong-Petit Law ($C = 3R$). State the assumptions involved and explain why the law fails at low temperatures.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Microscopic Model:</b><br/>
    Consider a monoatomic solid crystal consisting of $N_A$ atoms per mole.<br/>
    Unlike gas molecules, atoms in a solid cannot undergo translational or rotational motion; they are fixed at crystalline lattice sites and execute small 3D harmonic vibrations about their equilibrium positions.<br/><br/>
    <b style="color: ${themeColor};">2. Energy per Atom:</b><br/>
    Each atom behaves as a three-dimensional harmonic oscillator along $x, y, z$ axes.<br/>
    The energy of a 1D harmonic oscillator has two quadratic terms (kinetic and potential):
    $$\\epsilon_{1\\text{D}} = \\frac{1}{2} m v_x^2 + \\frac{1}{2} k_s x^2$$
    By the Law of Equipartition of Energy, each quadratic term contributes $\\frac{1}{2} k_B T$:
    $$\\overline{\\epsilon}_{1\\text{D}} = \\frac{1}{2} k_B T + \\frac{1}{2} k_B T = k_B T$$
    For 3 independent spatial dimensions ($x, y, z$), the mean vibrational energy per atom is:
    $$\\overline{\\epsilon} = 3 \\times k_B T = 3 k_B T$$
    <b style="color: ${themeColor};">3. Molar Internal Energy and Heat Capacity:</b><br/>
    For $1$ mole ($N_A$ atoms), the total internal energy of the solid lattice is:
    $$U = N_A \\overline{\\epsilon} = N_A (3 k_B T) = 3 (N_A k_B) T = 3 R T$$
    The molar heat capacity of the solid (at constant volume or pressure, since thermal expansion in solids is very small: $C_p \\approx C_v = C$) is:
    $$\\mathbf{C = \\frac{dU}{dT} = 3 R}$$
    Substituting $R = 8.314\\text{ J/mol}\\cdot\\text{K}$:
    $$\\mathbf{C = 3 \\times 8.314 \\approx 24.94\\text{ J/mol}\\cdot\\text{K} \\approx 6\\text{ cal/mol}\\cdot\\text{K}}$$
    This constant value is the celebrated <strong>Dulong-Petit Law</strong>.<br/><br/>
    <b style="color: ${themeColor};">4. Failure at Low Temperatures:</b><br/>
    Experimentally, the Dulong-Petit Law holds remarkably well for most metals at room temperature, but as $T \\to 0\\text{ K}$, the heat capacity drops sharply, approaching zero ($C \\propto T^3$, Debye $T^3$ Law).<br/>
    <strong>Reason:</strong> Classical physics assumes energy is continuous, allowing oscillators to absorb arbitrary amounts of energy. Quantum mechanics dictates that oscillator energy is quantized in discrete packets $\\Delta E = h\\nu$. At low temperatures ($k_B T \\ll h\\nu$), thermal energy is insufficient to excite lattice vibrations from the ground state to the first excited state ($n=1$). The vibrational modes <strong>freeze out</strong>, causing heat capacity to plummet to zero.
  </div>
</div>

<!-- Q93 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q93: Equipartition Theory Applied to Specific Heat Capacity of Liquid Water</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Apply the equipartition principle to treat water as a non-rigid triatomic molecule in a condensed phase. Derive the theoretical molar heat capacity $C \\approx 9R$ and explain why liquid water has an exceptionally high specific heat capacity ($4184\\text{ J/kg}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Molecular Structure and Equipartition Model:</b><br/>
    A water molecule (H$_2$O) consists of $3$ atoms ($1$ oxygen atom and $2$ hydrogen atoms) bound non-linearly at an angle of $104.5^{\\circ}$.<br/>
    In the condensed liquid state at room temperature, water molecules form an extensive, dynamic 3D network of intermolecular hydrogen bonds.<br/>
    Each of the $3$ atoms in the molecule can vibrate in 3 spatial dimensions around its local equilibrium position.<br/>
    Because each 1D harmonic oscillator has two quadratic energy terms (kinetic and potential), each 1D mode contributes $k_B T$ to the internal energy.<br/>
    For $3$ atoms executing 3D oscillations, there are $3 \\times 3 = 9$ independent vibrational modes.<br/><br/>
    <b style="color: ${themeColor};">2. Derivation of Molar Heat Capacity:</b><br/>
    Mean internal energy per H$_2$O molecule:
    $$\\overline{\\epsilon} = 9 \\times k_B T = 9 k_B T$$
    For $1$ mole of water ($N_A$ molecules):
    $$U = N_A (9 k_B T) = 9 (N_A k_B) T = 9 R T$$
    Molar heat capacity:
    $$\\mathbf{C = \\frac{dU}{dT} = 9 R}$$
    Substituting $R = 8.314\\text{ J/mol}\\cdot\\text{K}$:
    $$C_{\\text{molar}} = 9 \\times 8.314 = \\mathbf{74.83\\text{ J/mol}\\cdot\\text{K}} \\approx 75\\text{ J/mol}\\cdot\\text{K}$$
    <b style="color: ${themeColor};">3. Conversion to Specific Heat Capacity:</b><br/>
    Molar mass of water is $M = 18\\text{ g/mol} = 0.018\\text{ kg/mol}$.<br/>
    Specific heat capacity $c$ per unit mass is:
    $$c = \\frac{C_{\\text{molar}}}{M} = \\frac{74.83\\text{ J/mol}\\cdot\\text{K}}{0.018\\text{ kg/mol}} \\approx \\mathbf{4157\\text{ J/kg}\\cdot\\text{K}}$$
    This theoretical result matches the measured experimental value ($c_{\\text{water}} = 4184\\text{ J/kg}\\cdot\\text{K}$) within $1\\%$.<br/><br/>
    <b style="color: ${themeColor};">4. Physical and Ecological Importance:</b><br/>
    This exceptionally high specific heat capacity means water can absorb or release enormous amounts of heat with minimal temperature variation. This unique property stabilizes Earth's ocean temperatures, moderates coastal climates, and prevents rapid thermal fluctuations in biological organisms.
  </div>
</div>

<!-- Q94 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q94: Failure of Classical Equipartition and Quantum Freezing of Degrees of Freedom</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the variation of the molar heat capacity $C_v$ of hydrogen gas (H$_2$) with absolute temperature from $20\\text{ K}$ to $2000\\text{ K}$. Explain the failure of classical equipartition and show how quantum mechanics resolves this through the "freezing out" of rotational and vibrational degrees of freedom.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Experimental Observations for H$_2$ Gas:</b><br/>
    Classical physics predicts that for diatomic H$_2$, $C_v$ should remain constant at all temperatures. However, experimental measurements reveal three distinct plateaus:<br/>
    (i) <b style="color: ${themeColor};">Low Temperatures ($T < 70\\text{ K}$):</b> $C_v = \\frac{3}{2} R$. The gas behaves identically to a monoatomic gas ($f = 3$).<br/>
    (ii) <b style="color: ${themeColor};">Room Temperature ($250\\text{ K} < T < 750\\text{ K}$):</b> $C_v = \\frac{5}{2} R$. The gas behaves as a rigid diatomic rotator ($f = 5$).<br/>
    (iii) <b style="color: ${themeColor};">High Temperatures ($T > 1500\\text{ K}$):</b> $C_v = \\frac{7}{2} R$. Vibrational modes become active ($f = 7$).<br/><br/>
    <b style="color: ${themeColor};">2. Why Classical Physics Fails:</b><br/>
    Classical equipartition assumes energy is continuous, so every degree of freedom must contribute $\\frac{1}{2} k_B T$ at any non-zero temperature. It cannot explain why degrees of freedom appear or disappear in stepwise stages as temperature changes.<br/><br/>
    <b style="color: ${themeColor};">3. Quantum Resolution ("Freezing Out"):</b><br/>
    Under quantum mechanics, rotational and vibrational energy levels are discrete and quantized with energy level spacing $\\Delta E$:<br/>
    - A degree of freedom can absorb thermal energy only if average thermal collision energy is comparable to or greater than the quantum energy spacing:
    $$k_B T \\gtrsim \\Delta E$$
    - If $k_B T \\ll \\Delta E$, collisions do not have sufficient energy to kick molecules out of their quantum ground state ($J=0$ or $n=0$). That degree of freedom remains unexcited and is said to be <strong>frozen out</strong>.<br/><br/>
    <b style="color: ${themeColor};">4. Characteristic Temperatures:</b><br/>
    - <strong>Translational Spacing:</strong> In a macroscopic container of length $L \\sim 0.1\\text{ m}$, $\\Delta E_{\\text{trans}} \\sim \\frac{h^2}{8mL^2} \\sim 10^{-38}\\text{ J}$, corresponding to $T_{\\text{trans}} \\sim 10^{-15}\\text{ K}$. Translational motion is active down to nearly absolute zero.<br/>
    - <strong>Rotational Threshold:</strong> Rotational levels have spacing $\\Delta E_{\\text{rot}} = \\frac{\\hbar^2}{I}$. For H$_2$, the characteristic rotational temperature is $\\Theta_{\\text{rot}} = \\frac{\\hbar^2}{k_B I} \\approx 85\\text{ K}$. Below $70\\text{ K}$, rotational modes freeze out, leaving only $3$ translational degrees of freedom ($C_v = \\frac{3}{2} R$).<br/>
    - <strong>Vibrational Threshold:</strong> Vibrational levels have much larger spacing $\\Delta E_{\\text{vib}} = h\\nu$. For H$_2$, the vibrational temperature is $\\Theta_{\\text{vib}} = \\frac{h\\nu}{k_B} \\approx 6000\\text{ K}$. Vibrational motion remains frozen out at room temperature and only activates above $1000\\text{ K}$, raising $C_v$ to $\\frac{7}{2} R$.
  </div>
</div>

<!-- Q95 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q95: Real Gas Deviations, Compressibility Factor, Boyle Temperature, and Critical State</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Discuss deviations of real gases from ideal gas behavior. Define Compressibility Factor ($Z$). Show how $Z$ varies with pressure for H$_2$ and CO$_2$. Derive the formula for Boyle Temperature ($T_B = \\frac{a}{Rb}$) and define Critical State constants ($P_c, V_c, T_c$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Compressibility Factor ($Z$):</b><br/>
    The compressibility factor measures the degree of deviation of a real gas from ideal gas behavior:
    $$\\mathbf{Z = \\frac{P V}{n R T} = \\frac{V_{\\text{real}}}{V_{\\text{ideal}}}}$$
    - For an ideal gas: $Z = 1$ at all pressures and temperatures.<br/>
    - If $Z < 1$: The real gas is more compressible than an ideal gas (attractive forces dominate). Observed at moderate pressures for gases like CO$_2$, CH$_4$, N$_2$.<br/>
    - If $Z > 1$: The real gas is less compressible than an ideal gas (finite molecular volume and repulsive forces dominate). Observed at very high pressures, and at all pressures for light gases like H$_2$ and He at room temperature.<br/><br/>
    <b style="color: ${themeColor};">2. Boyle Temperature ($T_B$):</b><br/>
    The <strong>Boyle Temperature</strong> is the specific temperature at which a real gas strictly obeys Boyle's Law ($PV = \\text{constant}$, $Z \\approx 1$) over an appreciable range of pressures.<br/>
    Expanding the van der Waals equation for $1$ mole in powers of $\\frac{1}{V}$:
    $$P = \\frac{R T}{V - b} - \\frac{a}{V^2} = \\frac{R T}{V}\\left( 1 - \\frac{b}{V} \\right)^{-1} - \\frac{a}{V^2} \\approx \\frac{R T}{V}\\left( 1 + \\frac{b}{V} \\right) - \\frac{a}{V^2}$$
    $$P V = R T + \\frac{1}{V}\\left( R T b - a \\right) + O(V^{-2})$$
    At the Boyle temperature $T = T_B$, the first correction term vanishes:
    $$R T_B b - a = 0 \\implies \\mathbf{T_B = \\frac{a}{R b}}$$
    - If $T < T_B$: $Z$ initially dips below $1$ before rising.<br/>
    - If $T > T_B$: $Z > 1$ for all pressures.<br/><br/>
    <b style="color: ${themeColor};">3. Critical State Constants ($T_c, P_c, V_c$):</b><br/>
    The critical point is the highest temperature and pressure at which gas and liquid phases can coexist in equilibrium. Above $T_c$, gas cannot be liquefied no matter how much pressure is applied.<br/>
    At the critical point on the $P-V$ isotherm, there is a horizontal inflection point:
    $$\\left( \\frac{\\partial P}{\\partial V} \\right)_{T_c} = 0 \\quad \\text{and} \\quad \\left( \\frac{\\partial^2 P}{\\partial V^2} \\right)_{T_c} = 0$$
    Solving these conditions for the van der Waals equation gives:
    $$\\mathbf{V_c = 3b}, \\quad \\mathbf{P_c = \\frac{a}{27 b^2}}, \\quad \\mathbf{T_c = \\frac{8a}{27 R b}}$$
    Critical compressibility factor:
    $$Z_c = \\frac{P_c V_c}{R T_c} = \\frac{\\left( \\frac{a}{27b^2} \\right)(3b)}{R \\left( \\frac{8a}{27Rb} \\right)} = \\mathbf{\\frac{3}{8} = 0.375}$$
  </div>
</div>

<!-- Q96 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q96: Microscopic Derivation of van der Waals Equation of State</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Identify the two faulty assumptions in the kinetic theory of ideal gases. Provide detailed physical reasoning and mathematical corrections for: (a) Finite molecular volume (co-volume $b$), and (b) Intermolecular forces of attraction (internal pressure $\\frac{a}{V^2}$). Write the complete van der Waals equation for $n$ moles.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. The Two Faulty Assumptions of Ideal Gas Theory:</b><br/>
    (i) The actual volume occupied by gas molecules is zero (point masses).<br/>
    (ii) There are no attractive or repulsive intermolecular forces between gas molecules.<br/>
    Johannes Diderik van der Waals (1873) introduced two crucial corrections to account for real molecular behavior:<br/><br/>
    <b style="color: ${themeColor};">2. Volume Correction (Co-Volume $b$):</b><br/>
    Molecules are not point masses; they possess finite spherical sizes of diameter $d$.<br/>
    When two identical spherical molecules collide, their centers cannot approach closer than distance $d$. The center of one molecule is excluded from a sphere of radius $d$ around the second molecule.<br/>
    Excluded volume for a pair of molecules:
    $$v_{\\text{pair}} = \\frac{4}{3} \\pi d^3 = 8 \\left( \\frac{4}{3} \\pi r^3 \\right) = 8 v_m$$
    where $v_m = \\frac{4}{3}\\pi r^3$ is the actual volume of an individual molecule ($d = 2r$).<br/>
    The excluded volume per single molecule is:
    $$v_{\\text{ex}} = \\frac{v_{\\text{pair}}}{2} = 4 v_m$$
    For $1$ mole ($N_A$ molecules), the effective co-volume $b$ is four times the actual molecular volume:
    $$b = 4 N_A v_m$$
    The free volume available for molecular motion is therefore reduced from container volume $V$ to:
    $$\\mathbf{V_{\\text{ideal}} = V - b} \\quad (\\text{for } 1\\text{ mole}) \\implies \\mathbf{V - n b} \\quad (\\text{for } n\\text{ moles})$$
    <b style="color: ${themeColor};">3. Pressure Correction (Internal Pressure $p_i$):</b><br/>
    A molecule deep inside the gas experiences attractive van der Waals forces equally in all directions, so net force is zero.<br/>
    However, when a molecule approaches the container wall to strike it, it experiences an inward net pull from the molecules behind it in the interior of the gas. This inward attraction reduces its impact velocity and momentum delivered to the wall.<br/>
    The inward pull is proportional to:
    - The number of striking molecules per unit wall area $\\propto n = \\frac{N}{V}$.
    - The number of attracting molecules in the interior layer pulling them back $\\propto n = \\frac{N}{V}$.<br/>
    Therefore, the pressure reduction (internal pressure $p_i$) is proportional to $n^2$:
    $$p_i \\propto \\left( \\frac{1}{V} \\right)^2 \\implies p_i = \\frac{a}{V^2}$$
    where $a$ is the van der Waals attraction constant.<br/>
    The ideal pressure that would have been exerted in the absence of attraction is:
    $$\\mathbf{P_{\\text{ideal}} = P + \\frac{a}{V^2}} \\quad (\\text{for } 1\\text{ mole}) \\implies \\mathbf{P + \\frac{a n^2}{V^2}} \\quad (\\text{for } n\\text{ moles})$$
    <b style="color: ${themeColor};">4. Complete van der Waals Equation:</b><br/>
    Substituting $P_{\\text{ideal}}$ and $V_{\\text{ideal}}$ into the ideal gas equation ($P_{\\text{ideal}} V_{\\text{ideal}} = n R T$):<br/>
    For $1$ mole:
    $$\\mathbf{\\left( P + \\frac{a}{V^2} \\right) (V - b) = R T}$$
    For $n$ moles:
    $$\\mathbf{\\left( P + \\frac{a n^2}{V^2} \\right) (V - n b) = n R T}$$
    SI unit of $a$: $\\text{N}\\cdot\\text{m}^4/\\text{mol}^2$ or $\\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$.<br/>
    SI unit of $b$: $\\text{m}^3/\\text{mol}$.
  </div>
</div>

<!-- Q97 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q97: Microscopic Proof of Dalton's Law of Partial Pressures</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Dalton's Law of Partial Pressures. From the kinetic theory of gases, provide a rigorous mathematical proof demonstrating that the total pressure of a mixture of non-reacting gases equals the sum of their individual partial pressures.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Formal Statement:</b><br/>
    Dalton's Law of Partial Pressures states that the total pressure exerted by a mixture of non-reacting ideal gases enclosed in a given volume is equal to the sum of the partial pressures that each gas would exert if it alone occupied the entire volume of the container at the same temperature:
    $$\\mathbf{P_{\\text{total}} = P_1 + P_2 + P_3 + \\dots = \\sum_k P_k}$$
    <b style="color: ${themeColor};">2. Kinetic Theory Proof:</b><br/>
    Consider an enclosure of volume $V$ maintained at absolute temperature $T$ containing a mixture of $k$ different non-reacting gases.<br/>
    Let:
    - Gas 1 have $N_1$ molecules, each of mass $m_1$ and rms speed $v_{\\text{rms},1}$.
    - Gas 2 have $N_2$ molecules, each of mass $m_2$ and rms speed $v_{\\text{rms},2}$.
    - In general, the $k$-th gas has $N_k$ molecules of mass $m_k$ and rms speed $v_{\\text{rms},k}$.<br/>
    Because the gases do not react chemically and collisions between all molecules are assumed perfectly elastic, each molecular species collides with the container walls completely independently.<br/>
    The normal force exerted on a wall of area $A$ is the sum of the momentum transfer rates of all species.<br/>
    Total pressure exerted by the gas mixture on the walls is:
    $$P_{\\text{total}} = \\frac{1}{3} \\frac{m_1 N_1}{V} v_{\\text{rms},1}^2 + \\frac{1}{3} \\frac{m_2 N_2}{V} v_{\\text{rms},2}^2 + \\dots + \\frac{1}{3} \\frac{m_k N_k}{V} v_{\\text{rms},k}^2$$
    This can be written in terms of translational kinetic energy density:
    $$P_{\\text{total}} = \\frac{2}{3 V} \\left[ \\sum_k N_k \\left( \\frac{1}{2} m_k v_{\\text{rms},k}^2 \\right) \\right]$$
    Since the entire mixture is in thermal equilibrium at temperature $T$, by the kinetic interpretation of temperature, the mean kinetic energy of every molecule regardless of species is identical:
    $$\\frac{1}{2} m_1 v_{\\text{rms},1}^2 = \\frac{1}{2} m_2 v_{\\text{rms},2}^2 = \\dots = \\frac{3}{2} k_B T$$
    Substituting this into the pressure equation:
    $$P_{\\text{total}} = \\frac{2}{3 V} \\left[ \\sum_k N_k \\left( \\frac{3}{2} k_B T \\right) \\right] = \\sum_k \\frac{N_k k_B T}{V}$$
    By definition, the partial pressure $P_k$ of the $k$-th species (the pressure it would exert if alone in volume $V$ at temperature $T$) is:
    $$P_k = \\frac{N_k k_B T}{V}$$
    Therefore:
    $$\\mathbf{P_{\\text{total}} = P_1 + P_2 + \\dots + P_k = \\sum_k P_k}$$
    In terms of mole fractions $x_k = \\frac{n_k}{n_{\\text{total}}}$:
    $$\\mathbf{P_k = x_k P_{\\text{total}}}$$
    This completes the kinetic proof of Dalton's Law.
  </div>
</div>

<!-- Q98 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q98: Avogadro's Number: Historical Significance and Experimental Methods of Determination</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the exact modern definition of Avogadro's constant ($N_A$). Describe in detail Jean Perrin's sedimentation equilibrium experiment of colloidal suspensions used to determine $N_A$ and win the 1926 Nobel Prize. Briefly mention modern X-ray crystal density methods.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Definition and Value:</b><br/>
    Avogadro's constant ($N_A$) is defined as the number of constituent elementary entities (atoms, molecules, ions, electrons) per mole of a substance.<br/>
    Under the 2019 redefinition of SI base units, $N_A$ is an exact fundamental defining constant:
    $$\\mathbf{N_A = 6.02214076 \\times 10^{23}\\text{ mol}^{-1}}$$
    <b style="color: ${themeColor};">2. Jean Perrin's Sedimentation Equilibrium Experiment:</b><br/>
    In 1908, French physicist Jean Perrin realized that microscopic colloidal particles (gamboge or mastic resin beads) suspended in water act as "giant molecules" obeying ideal gas statistical mechanics.<br/>
    - <b style="color: ${themeColor};">Barometric Formula for Colloids:</b> In Earth's atmosphere, gas density decreases with height according to the barometric formula:
    $$n(h) = n_0 \\exp\\left( -\\frac{m g h}{k_B T} \\right)$$
    - For colloidal particles of volume $V_p$ and density $\\rho_p$ suspended in a liquid of density $\\rho_L$, the effective downward gravitational force accounting for Archimedes buoyancy is:
    $$m_{\\text{eff}} g = V_p (\\rho_p - \\rho_L) g = \\frac{4}{3} \\pi r^3 (\\rho_p - \\rho_L) g$$
    - Perrin allowed the suspension to reach sedimentation equilibrium, where downward gravity is balanced by upward Brownian thermal diffusion.<br/>
    - The concentration ratio $n_1 / n_2$ at two heights $h_1$ and $h_2$ (separated by $\\Delta h = h_2 - h_1$) is:
    $$\\ln\\left( \\frac{n_1}{n_2} \\right) = \\frac{m_{\\text{eff}} g (h_2 - h_1)}{k_B T} = \\frac{\\frac{4}{3} \\pi r^3 (\\rho_p - \\rho_L) g \\Delta h}{k_B T}$$
    - Since $k_B = \\frac{R}{N_A}$, substituting gives:
    $$\\mathbf{N_A = \\frac{R T \\ln(n_1 / n_2)}{\\frac{4}{3} \\pi r^3 (\\rho_p - \\rho_L) g \\Delta h}}$$
    - By measuring the particle radius $r$ using a microscope, densities $\\rho_p, \\rho_L$, and counting particles $n_1, n_2$ at different focus levels using an ultramicroscope, Perrin calculated:
    $$N_A \\approx 6.5 \\times 10^{23}\\text{ mol}^{-1}$$
    This provided the first indisputable empirical proof of the physical reality of atoms and molecules, earning Perrin the 1926 Nobel Prize in Physics.<br/><br/>
    <b style="color: ${themeColor};">3. Modern X-Ray Crystal Density Determination:</b><br/>
    Today, $N_A$ is measured with extreme precision using ultra-pure single crystals of Silicon-28 ($^{28}\\text{Si}$):
    - By X-ray interferometry, the lattice constant $a_0$ of the unit cell is measured down to picometers.
    - Knowing that an FCC unit cell of silicon contains $8$ atoms:
    $$N_A = \\frac{8 M_{\\text{Si}}}{\\rho a_0^3}$$
    This optical interferometry method established $N_A$ with an uncertainty of less than 1 part in $10^8$.
  </div>
</div>

<!-- Q99 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q99: Brownian Motion and Einstein's Theoretical Formulation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is Brownian motion? Explain its microscopic origin. Outline Albert Einstein's 1905 theoretical formulation of Brownian diffusion, derive the mean square displacement relation $\\overline{x^2} = 2 D t$, and explain how it proved the kinetic-molecular hypothesis.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Definition and Physical Discovery:</b><br/>
    In 1827, Scottish botanist Robert Brown observed under a microscope that microscopic pollen grains suspended in water execute rapid, irregular, zig-zag, incessant motion in all directions. This phenomenon is called <strong>Brownian motion</strong>.<br/><br/>
    <b style="color: ${themeColor};">2. Microscopic Origin:</b><br/>
    Brownian motion is not caused by biological activity, convection currents, or external vibrations. It is caused by the incessant, random thermal collisions of sub-microscopic liquid molecules striking the suspended particle from all sides.<br/>
    Because the particle is tiny (order of $1\\,\\mu\\text{m}$), the number of molecular impacts striking one side of the particle at any given instant does not exactly balance those striking the opposite side. This instantaneous fluctuation in net momentum imparts a random kick to the particle.<br/><br/>
    <b style="color: ${themeColor};">3. Einstein's 1905 Theory of Brownian Diffusion:</b><br/>
    In his 1905 paper, Albert Einstein connected microscopic thermal fluctuations with macroscopic hydrodynamic drag.<br/>
    - A particle of radius $r$ moving with velocity $v$ through a fluid of dynamic viscosity $\\eta$ experiences Stokes drag:
    $$F_{\\text{drag}} = 6\\pi \\eta r v$$
    The mobility of the particle is:
    $$\\mu = \\frac{v}{F} = \\frac{1}{6\\pi \\eta r}$$
    - By balancing thermodynamic osmotic pressure with viscous resistance, Einstein established the <strong>Stokes-Einstein Relation</strong> for the diffusion coefficient $D$:
    $$\\mathbf{D = \\mu k_B T = \\frac{k_B T}{6\\pi \\eta r}}$$
    - For 1D random walk diffusion, solving the diffusion equation $\\frac{\\partial c}{\\partial t} = D \\frac{\\partial^2 c}{\\partial x^2}$ yields the mean square displacement:
    $$\\mathbf{\\overline{x^2} = 2 D t = \\left( \\frac{k_B T}{3\\pi \\eta r} \\right) t = \\left( \\frac{R T}{3\\pi \\eta r N_A} \\right) t}$$
    <b style="color: ${themeColor};">4. Profound Historical Significance:</b><br/>
    (i) Notice that displacement does not scale linearly with time ($x \\not\\propto t$); instead, mean square displacement is proportional to time ($\\overline{x^2} \\propto t$).<br/>
    (ii) Prior to 1905, prominent scientists (such as Ernst Mach and Wilhelm Ostwald) viewed atoms as merely mathematical bookkeeping devices rather than real physical entities.<br/>
    (iii) Einstein's formula allowed physicists to directly track $\\overline{x^2}$ and time $t$ under an ordinary optical microscope and extract Boltzmann's constant $k_B$ and Avogadro's number $N_A$. This provided undeniable empirical proof that atoms and molecules are real physical objects.
  </div>
</div>

<!-- Q100 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q100: Master Synthesis of Unit IX: Behaviour of Perfect Gases & Kinetic Theory</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Provide a master synthesis of Unit IX: Behaviour of Perfect Gases and Kinetic Theory of Gases (06 Marks). Construct a comprehensive comparison table contrasting Monoatomic, Diatomic, and Polyatomic gases across all microscopic and macroscopic parameters.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Master Comparison Table of Gas Categories:</b><br/>
    <div style="overflow-x: auto; margin: 12px 0;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: center; border: 1px solid rgba(66, 165, 245, 0.3);">
        <thead>
          <tr style="background: rgba(66, 165, 245, 0.15); color: ${themeColor};">
            <th style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.3);">Parameter</th>
            <th style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.3);">Monoatomic</th>
            <th style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.3);">Rigid Diatomic</th>
            <th style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.3);">Vibrating Diatomic</th>
            <th style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.3);">Polyatomic (Non-linear)</th>
          </tr>
        </thead>
        <tbody style="color: #CBD5E1;">
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold;">Examples</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">He, Ne, Ar, Kr</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">O$_2$, N$_2$, CO ($300\\text{ K}$)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">O$_2$, N$_2$ ($> 1500\\text{ K}$)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">H$_2$O, NH$_3$, CH$_4$</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold;">Degrees of Freedom ($f$)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">$3$ ($3$ trans)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">$5$ ($3$ trans + $2$ rot)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">$7$ ($3$ trans + $2$ rot + $2$ vib)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">$6$ ($3$ trans + $3$ rot)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold;">Molar Internal Energy ($U$)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">3</span><span style="display:block;">2</span></span> R T</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">5</span><span style="display:block;">2</span></span> R T</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">7</span><span style="display:block;">2</span></span> R T</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">3 R T</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold;">$C_v$ (Molar Heat Capacity)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">3</span><span style="display:block;">2</span></span> R</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">5</span><span style="display:block;">2</span></span> R</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">7</span><span style="display:block;">2</span></span> R</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">3 R</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold;">$C_p$ ($C_v + R$)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">5</span><span style="display:block;">2</span></span> R</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">7</span><span style="display:block;">2</span></span> R</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">9</span><span style="display:block;">2</span></span> R</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2);">4 R</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold;">Adiabatic Ratio ($\\gamma = C_p / C_v$)</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold; color: ${themeColor};"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">5</span><span style="display:block;">3</span></span> ≈ 1.67</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold; color: ${themeColor};"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">7</span><span style="display:block;">5</span></span> = 1.40</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold; color: ${themeColor};"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">9</span><span style="display:block;">7</span></span> ≈ 1.29</td>
            <td style="padding: 8px; border: 1px solid rgba(66, 165, 245, 0.2); font-weight: bold; color: ${themeColor};"><span style="display:inline-block; vertical-align:middle; text-align:center;"><span style="display:block; border-bottom:1px solid currentColor;">4</span><span style="display:block;">3</span></span> ≈ 1.33</td>
          </tr>
        </tbody>
      </table>
    </div><br/>
    <b style="color: ${themeColor};">2. Key Universal Relationships:</b><br/>
    (i) Pressure formula: $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{2}{3} E_v$<br/>
    (ii) RMS speed: $v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}} = \\sqrt{\\frac{3P}{\\rho}}$<br/>
    (iii) Mean translational kinetic energy per molecule: $\\overline{\\epsilon} = \\frac{3}{2} k_B T$ (strictly independent of molecular mass or geometry)<br/>
    (iv) Mean free path: $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2} = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$<br/>
    (v) Equipartition heat capacity formula: $\\gamma = 1 + \\frac{2}{f}$<br/>
    (vi) Real gas van der Waals equation: $\\left( P + \\frac{a n^2}{V^2} \\right) (V - n b) = n R T$<br/><br/>
    <b style="color: ${themeColor};">3. Final Exam Traps to Avoid:</b><br/>
    - Never substitute temperature in Celsius ($^{\\circ}\\text{C}$) in kinetic formulas; always convert to Kelvin ($T = t + 273.15$).<br/>
    - In $v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}}$, always express molar mass $M$ in $\\text{kg/mol}$ ($M_{\\text{O}_2} = 32 \\times 10^{-3}\\text{ kg/mol}$, not $32$).<br/>
    - Note that doubling pressure at constant temperature does NOT change $v_{\\text{rms}}$ because density $\\rho$ doubles simultaneously ($P/\\rho = \\text{constant}$).
  </div>
</div>
`;

module.exports = { solutionsPart3 };
