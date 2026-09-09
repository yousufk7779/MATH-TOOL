// scripts/c11_phy_10_solutions_part3.js
const { themeColor, frac } = require('./c11_phy_10_helpers');

const solutionsPart3 = `
<!-- SECTION C: LONG ANSWER (LA) QUESTIONS (5 MARKS EACH) - Q81 TO Q100 -->
<div style="background: rgba(0, 229, 255, 0.08); padding: 16px; border-radius: 8px; margin: 30px 0 20px 0; border: 1px solid rgba(0, 229, 255, 0.25);">
  <h2 style="color: ${themeColor}; margin: 0; font-size: 20px;">SECTION C: LONG ANSWER (LA) QUESTIONS &amp; DERIVATIONS (5 MARKS EACH) — QUESTIONS 81 TO 100</h2>
  <p style="color: #94A3B8; margin: 6px 0 0 0; font-size: 13px;">Comprehensive 5-mark board derivations, differential equations of motion, harmonic wave analyses, standing wave proofs, acoustic beats, and unified syntheses.</p>
</div>

<!-- Q81 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q81: Comprehensive Derivation of S.H.M Differential Equation and General Solutions</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the defining condition for linear Simple Harmonic Motion. Set up the second-order differential equation of motion and solve it rigorously to obtain expressions for: (a) Displacement, (b) Velocity, and (c) Acceleration. Discuss the phase relationships between them.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Defining Condition &amp; Differential Equation:</b><br/>
    In linear Simple Harmonic Motion, a particle of mass $m$ moves along a straight line under a restoring force directly proportional to its displacement $x$ from the mean position ($x=0$):
    $$F = -kx$$
    where $k$ is the positive force constant.<br/>
    By Newton's Second Law: $F = m a = m \\frac{d^2x}{dt^2}$.
    $$m \\frac{d^2x}{dt^2} = -kx \\implies \\frac{d^2x}{dt^2} + \\left( \\frac{k}{m} \\right) x = 0$$
    Setting $\\omega^2 = \\frac{k}{m}$ (where $\\omega = \\sqrt{k/m}$ is the natural angular frequency):
    $$\\mathbf{\\frac{d^2x}{dt^2} + \\omega^2 x = 0}$$
    This is the standard second-order linear homogeneous differential equation of linear S.H.M.<br/><br/>
    <b style="color: ${themeColor};">2. Mathematical Solution for Velocity:</b><br/>
    Rewrite acceleration as $a = \\frac{dv}{dt} = \\frac{dv}{dx} \\frac{dx}{dt} = v \\frac{dv}{dx}$:
    $$v \\frac{dv}{dx} = -\\omega^2 x \\implies v dv = -\\omega^2 x dx$$
    Integrating both sides:
    $$\\int v dv = -\\omega^2 \\int x dx \\implies \\frac{v^2}{2} = -\\omega^2 \\frac{x^2}{2} + C_1$$
    At the extreme positions ($x = \\pm A$), the particle momentarily halts ($v = 0$):
    $$0 = -\\omega^2 \\frac{A^2}{2} + C_1 \\implies C_1 = \\frac{1}{2} \\omega^2 A^2$$
    Substituting $C_1$ back:
    $$\\frac{v^2}{2} = \\frac{1}{2} \\omega^2 (A^2 - x^2) \\implies \\mathbf{v = \\pm \\omega \\sqrt{A^2 - x^2}}$$
    <b style="color: ${themeColor};">3. Mathematical Solution for Displacement:</b><br/>
    Since $v = \\frac{dx}{dt}$:
    $$\\frac{dx}{dt} = \\omega \\sqrt{A^2 - x^2} \\implies \\frac{dx}{\\sqrt{A^2 - x^2}} = \\omega dt$$
    Integrating both sides:
    $$\\int \\frac{dx}{\\sqrt{A^2 - x^2}} = \\omega \\int dt \\implies \\sin^{-1}\\left( \\frac{x}{A} \\right) = \\omega t + \\phi_0$$
    Taking the sine of both sides:
    $$\\mathbf{x(t) = A \\sin(\\omega t + \\phi_0)}$$
    Alternatively, with a cosine reference: $\\mathbf{x(t) = A \\cos(\\omega t + \\phi'_0)}$.<br/><br/>
    <b style="color: ${themeColor};">4. Acceleration Equation:</b><br/>
    Differentiating velocity with respect to time:
    $$a(t) = \\frac{dv}{dt} = \\frac{d}{dt}[A \\omega \\cos(\\omega t + \\phi_0)] = -A \\omega^2 \\sin(\\omega t + \\phi_0) = \\mathbf{-\\omega^2 x}$$
    <b style="color: ${themeColor};">5. Phase Relationships:</b><br/>
    Expressing all three kinematic variables in common cosine form:
    $$x = A \\cos(\\omega t)$$
    $$v = -\\omega A \\sin(\\omega t) = \\omega A \\cos\\left(\\omega t + \\frac{\\pi}{2}\\right)$$
    $$a = -\\omega^2 A \\cos(\\omega t) = \\omega^2 A \\cos(\\omega t + \\pi)$$
    - Velocity leads displacement by $\\frac{\\pi}{2}\\text{ rad}$ ($90^{\\circ}$).<br/>
    - Acceleration leads velocity by $\\frac{\\pi}{2}\\text{ rad}$ ($90^{\\circ}$).<br/>
    - Acceleration and displacement are in complete antiphase (phase difference $\\pi\\text{ rad} = 180^{\\circ}$).
  </div>
</div>

<!-- Q82 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q82: Geometrical Derivation of S.H.M as Projection of Uniform Circular Motion</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Demonstrate geometrically that Simple Harmonic Motion is the projection of uniform circular motion on a diameter of the circle of reference. Derive expressions for displacement, velocity, and acceleration using this geometrical representation.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. The Reference Circle Setup:</b><br/>
    Consider a particle $P$ (the reference particle) moving with constant angular speed $\\omega$ along the circumference of a circle of radius $A$ centered at origin $O$. This circle is called the <strong>reference circle</strong>.<br/>
    Let the initial position of $P$ at $t = 0$ make an angle $\\phi_0$ with the positive $x$-axis. In time $t$, $P$ rotates through an angle $\\omega t$.<br/>
    Its angular position at time $t$ is:
    $$\\theta(t) = \\omega t + \\phi_0$$
    <b style="color: ${themeColor};">2. Projection of Displacement:</b><br/>
    Drop a perpendicular from $P$ onto the horizontal diameter ($X'OX$). Let the foot of this perpendicular be $N$.<br/>
    In the right-angled triangle $OPN$, the displacement $x = ON$ of point $N$ from the origin is:
    $$\\cos\\theta = \\frac{ON}{OP} = \\frac{x}{A} \\implies \\mathbf{x(t) = A \\cos(\\omega t + \\phi_0)}$$
    This is the standard equation of Simple Harmonic Motion.<br/><br/>
    <b style="color: ${themeColor};">3. Projection of Velocity:</b><br/>
    The reference particle $P$ has a constant linear speed $v_0 = \\omega A$ directed tangentially along the circle.<br/>
    The velocity of the projection point $N$ is the component of this tangential velocity parallel to the diameter ($x$-axis):
    $$v_N = -v_0 \\sin\\theta = -\\omega A \\sin(\\omega t + \\phi_0)$$
    Using $\\sin\\theta = \\pm \\sqrt{1 - \\cos^2\\theta} = \\pm \\sqrt{1 - (x/A)^2}$:
    $$\\mathbf{v_N = \\pm \\omega \\sqrt{A^2 - x^2}}$$
    The negative sign indicates that when $P$ is in the upper semicircle ($0 < \\theta < \\pi$), $N$ moves to the left toward negative $x$.<br/><br/>
    <b style="color: ${themeColor};">4. Projection of Acceleration:</b><br/>
    The reference particle $P$ experiences a constant centripetal acceleration directed radially inward toward the center $O$:
    $$a_c = \\omega^2 A$$
    The acceleration of the foot $N$ is the component of $\\vec{a}_c$ along the $x$-axis:
    $$a_N = -a_c \\cos\\theta = -(\\omega^2 A) \\cos(\\omega t + \\phi_0)$$
    Substituting $x = A \\cos(\\omega t + \\phi_0)$:
    $$\\mathbf{a_N = -\\omega^2 x}$$
    <b style="color: ${themeColor};">Conclusion:</b> The foot of the perpendicular $N$ exhibits an acceleration directly proportional to displacement and directed toward the center ($a \\propto -x$). Hence, the projection of uniform circular motion on any diameter is strictly Simple Harmonic Motion.
  </div>
</div>

<!-- Q83 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q83: Conservation of Mechanical Energy in S.H.M with Graphical Analysis</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Rigorously derive the expressions for the kinetic energy and potential energy of a particle executing S.H.M at displacement $x$. Prove that the total mechanical energy is strictly conserved at all points, and explain the energy-displacement and energy-time graphs.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Derivation of Potential Energy ($U$):</b><br/>
    When an oscillating particle of mass $m$ is displaced by distance $x'$ from its mean position, the restoring force is $F = -kx' = -m\\omega^2 x'$.<br/>
    The external work done against this restoring force to displace it further by $dx'$ is:
    $$dW = -F dx' = -(-kx') dx' = kx' dx'$$
    Integrating from equilibrium ($x'=0$) to displacement $x$:
    $$U = \\int_{0}^{x} kx' dx' = k \\left[ \\frac{x'^2}{2} \\right]_{0}^{x} = \\mathbf{\\frac{1}{2} k x^2 = \\frac{1}{2} m \\omega^2 x^2}$$
    In terms of time ($x = A \\cos(\\omega t)$):
    $$U(t) = \\frac{1}{2} k A^2 \\cos^2(\\omega t)$$
    <b style="color: ${themeColor};">2. Derivation of Kinetic Energy ($E_k$):</b><br/>
    The instantaneous velocity at displacement $x$ is $v = \\pm \\omega \\sqrt{A^2 - x^2}$.
    $$E_k = \\frac{1}{2} m v^2 = \\frac{1}{2} m \\left( \\omega^2 (A^2 - x^2) \\right) = \\mathbf{\\frac{1}{2} k (A^2 - x^2)}$$
    In terms of time ($v = -\\omega A \\sin(\\omega t)$):
    $$E_k(t) = \\frac{1}{2} m \\omega^2 A^2 \\sin^2(\\omega t) = \\frac{1}{2} k A^2 \\sin^2(\\omega t)$$
    <b style="color: ${themeColor};">3. Proof of Conservation of Total Energy ($E$):</b><br/>
    Summing kinetic and potential energies:
    $$E = E_k + U = \\frac{1}{2} k (A^2 - x^2) + \\frac{1}{2} k x^2 = \\frac{1}{2} k A^2 - \\frac{1}{2} k x^2 + \\frac{1}{2} k x^2$$
    $$\\mathbf{E = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2 = 2\\pi^2 m \\nu^2 A^2 = \\text{Constant}}$$
    Similarly, using time expressions:
    $$E(t) = \\frac{1}{2} k A^2 [\\sin^2(\\omega t) + \\cos^2(\\omega t)] = \\frac{1}{2} k A^2 (1) = \\frac{1}{2} k A^2$$
    Total mechanical energy is completely independent of displacement $x$ and time $t$. It is strictly conserved.<br/><br/>
    <b style="color: ${themeColor};">4. Graphical Analysis:</b><br/>
    - <b style="color: ${themeColor};">Energy vs. Displacement ($E-x$ plot):</b><br/>
      • $U(x) = \\frac{1}{2}kx^2$ is an upward-opening parabola with minimum at $x=0$ ($U=0$) and maxima at $x = \\pm A$ ($U = \\frac{1}{2}kA^2$).<br/>
      • $E_k(x) = \\frac{1}{2}k(A^2 - x^2)$ is an inverted parabola with maximum at $x=0$ ($E_k = \\frac{1}{2}kA^2$) and zeros at $x = \\pm A$.<br/>
      • Total energy $E$ is a horizontal straight line tangent to both parabolas at their peaks.<br/>
      • The curves intersect where $E_k = U = E/2$, which occurs at $x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707 A$.<br/>
    - <b style="color: ${themeColor};">Energy vs. Time ($E-t$ plot):</b><br/>
      Both $E_k(t)$ and $U(t)$ fluctuate sinusoidally between $0$ and $\\frac{1}{2}kA^2$ with angular frequency $2\\omega$ (double frequency $\\nu_{\\text{energy}} = 2\\nu$).
  </div>
</div>

<!-- Q84 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q84: Oscillations of a Loaded Helical Spring (Horizontal & Vertical)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive the expression for the time period of a mass $m$ executing small oscillations attached to a helical spring of force constant $k$ in: (a) Horizontal orientation, and (b) Vertical orientation. Show that gravity shifts the equilibrium position without changing the period.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">(a) Horizontal Mass-Spring System:</b><br/>
    Consider a block of mass $m$ attached to one end of a spring of stiffness $k$ resting on a frictionless horizontal plane, with the other end anchored to a wall.<br/>
    When displaced horizontally by distance $x$, Hooke's Law gives the restoring force:
    $$F = -kx$$
    By Newton's Second Law: $m \\frac{d^2x}{dt^2} = -kx \\implies \\frac{d^2x}{dt^2} + \\left( \\frac{k}{m} \\right) x = 0$.<br/>
    Comparing with $\\frac{d^2x}{dt^2} + \\omega^2 x = 0$:
    $$\\omega = \\sqrt{\\frac{k}{m}} \\implies \\mathbf{T = 2\\pi \\sqrt{\\frac{m}{k}}}$$
    <b style="color: ${themeColor};">(b) Vertical Loaded Spring System:</b><br/>
    Let a spring of natural length $L_0$ and stiffness $k$ be suspended vertically.<br/>
    1. <strong>Static Equilibrium:</strong> When mass $m$ is attached, the spring extends by $\\Delta l$ under downward gravity until spring restoring force balances gravity:
    $$m g = k \\Delta l \\implies \\frac{m}{k} = \\frac{\\Delta l}{g} \\quad \\text{--- (1)}$$
    This point is the new equilibrium (mean position $y = 0$).<br/>
    2. <strong>Dynamic Oscillation:</strong> Pull the mass down further by a vertical displacement $y$ and release it. The total downward displacement from the unstretched length is $(\\Delta l + y)$.<br/>
    The net upward restoring force is:
    $$F_{\\text{net}} = m g - k(\\Delta l + y) = m g - k \\Delta l - ky$$
    Using equation (1), $mg - k\\Delta l = 0$:
    $$F_{\\text{net}} = -ky$$
    3. <strong>Equation of Motion:</strong>
    $$m \\frac{d^2y}{dt^2} = -ky \\implies \\frac{d^2y}{dt^2} + \\left( \\frac{k}{m} \\right) y = 0$$
    The angular frequency is $\\omega = \\sqrt{\\frac{k}{m}}$.<br/>
    The time period of vertical oscillation is:
    $$\\mathbf{T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{\\Delta l}{g}}}$$
    <b style="color: ${themeColor};">Crucial Deduction:</b> Gravity plays no role in the restoring dynamic oscillation; it merely offsets the equilibrium position downward by $\\Delta l$. The period of vertical oscillation is strictly identical to the horizontal period.
  </div>
</div>

<!-- Q85 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q85: Time Period of a Simple Pendulum for Small Oscillations</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is a simple pendulum? State the assumptions made in its ideal formulation. Derive the expression for its time period for small angular displacements, and discuss the physical factors that govern its period.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Definition &amp; Ideal Assumptions:</b><br/>
    An ideal simple pendulum consists of a heavy point-mass bob suspended from a rigid, frictionless support by a completely weightless, perfectly flexible, and inextensible string of effective length $L$.<br/><br/>
    <b style="color: ${themeColor};">2. Mathematical Derivation:</b><br/>
    Let the bob of mass $m$ be deflected by a small angular displacement $\\theta$ from the vertical equilibrium position.<br/>
    The forces acting on the bob are:
    - Tension $T_s$ along the suspension string.
    - Downward gravitational force $m\\vec{g}$.<br/>
    Resolving $mg$ into two orthogonal components:
    - Radial component $mg \\cos\\theta$ acting along the string, balancing string tension: $T_s = mg \\cos\\theta$.
    - Tangential component $mg \\sin\\theta$ acting perpendicular to the string, directed toward the mean position.<br/>
    This tangential component provides the restoring torque about the suspension pivot $O$:
    $$\\tau = - (m g \\sin\\theta) L$$
    By Newton's rotational equation: $\\tau = I \\alpha = I \\frac{d^2\\theta}{dt^2}$.<br/>
    For a point mass bob at distance $L$, the moment of inertia is $I = m L^2$:
    $$m L^2 \\frac{d^2\\theta}{dt^2} = - m g L \\sin\\theta \\implies \\frac{d^2\\theta}{dt^2} + \\left( \\frac{g}{L} \\right) \\sin\\theta = 0$$
    <b style="color: ${themeColor};">3. Small Angle Linearization:</b><br/>
    For small angular deflections ($\\theta \\le 10^{\\circ} \\approx 0.17\\text{ rad}$), $\\sin\\theta \\approx \\theta$ in radians:
    $$\\mathbf{\\frac{d^2\\theta}{dt^2} + \\left( \\frac{g}{L} \\right) \\theta = 0}$$
    This matches the standard angular S.H.M equation $\\frac{d^2\\theta}{dt^2} + \\omega^2 \\theta = 0$, where:
    $$\\omega = \\sqrt{\\frac{g}{L}}$$
    The time period is:
    $$\\mathbf{T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{L}{g}}}$$
    The frequency is:
    $$\\mathbf{\\nu = \\frac{1}{2\\pi} \\sqrt{\\frac{g}{L}}}$$
    <b style="color: ${themeColor};">4. Factors Governing Time Period:</b><br/>
    (i) $T \\propto \\sqrt{L}$: Period increases as effective length increases.<br/>
    (ii) $T \\propto \\frac{1}{\\sqrt{g}}$: Period decreases where gravitational acceleration is stronger (poles vs equator, mountains vs sea level).<br/>
    (iii) Period is completely independent of bob mass $m$ and composition.<br/>
    (iv) Period is independent of amplitude $\\theta$ as long as oscillations remain small (isochronism).
  </div>
</div>

<!-- Q86 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q86: Time Period of a Pendulum of Infinite Length &amp; Tunnel Oscillations</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Show that the time period of a simple pendulum of extremely large length (comparable to Earth's radius $R_E$) is given by $T = 2\\pi \\sqrt{\\frac{1}{g(1/L + 1/R_E)}}$. Hence show that for infinite length ($L \\to \\infty$), $T = 2\\pi \\sqrt{R_E/g} \\approx 84.6\\text{ minutes}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    When length $L$ is comparable to Earth's radius $R_E$, the gravitational force vectors along the swing are not parallel; they converge toward the center of Earth $C$.<br/>
    Let the bob be deflected horizontally by displacement $x$.<br/>
    The angle of the string with vertical is $\\theta_1 \\approx x/L$.<br/>
    The angle made by Earth's radius vector to the bob with vertical is $\\theta_2 \\approx x/R_E$.<br/>
    The net angle between the string and the gravitational pull is $(\\theta_1 + \\theta_2) = x \\left( \\frac{1}{L} + \\frac{1}{R_E} \\right)$.<br/>
    The restoring force directed toward the mean position is:
    $$F = -mg \\sin(\\theta_1 + \\theta_2) \\approx -mg (\\theta_1 + \\theta_2) = -mg x \\left( \\frac{1}{L} + \\frac{1}{R_E} \\right)$$
    Equation of motion:
    $$m \\frac{d^2x}{dt^2} = -mg \\left( \\frac{1}{L} + \\frac{1}{R_E} \\right) x \\implies \\frac{d^2x}{dt^2} + g \\left( \\frac{1}{L} + \\frac{1}{R_E} \\right) x = 0$$
    The angular frequency is:
    $$\\omega = \\sqrt{g \\left( \\frac{1}{L} + \\frac{1}{R_E} \\right)}$$
    The general time period for any length $L$ is:
    $$\\mathbf{T = 2\\pi \\sqrt{\\frac{1}{g \\left( \\frac{1}{L} + \\frac{1}{R_E} \\right)}}}$$
    <b style="color: ${themeColor};">Special Case 1: Ordinary Laboratory Pendulum ($L \\ll R_E$):</b><br/>
    $\\frac{1}{R_E} \\ll \\frac{1}{L}$, so $T \\approx 2\\pi \\sqrt{\\frac{L}{g}}$.<br/><br/>
    <b style="color: ${themeColor};">Special Case 2: Pendulum of Infinite Length ($L \\to \\infty$):</b><br/>
    As $L \\to \\infty$, $\\frac{1}{L} \\to 0$:
    $$\\mathbf{T_{\\text{max}} = 2\\pi \\sqrt{\\frac{R_E}{g}}}$$
    Substituting $R_E = 6.4 \\times 10^6\\text{ m}$ and $g = 9.8\\text{ m/s}^2$:
    $$T_{\\text{max}} = 2\\pi \\sqrt{\\frac{6.4 \\times 10^6}{9.8}} = 2\\pi \\sqrt{653,061} = 2\\pi \\times 808.12 \\approx 5077\\text{ s} \\approx \\mathbf{84.6\\text{ minutes}}$$
    This is the absolute upper limit for the period of any simple pendulum on Earth. It also equals the period of oscillation of a body dropped through a tunnel drilled across Earth's diameter.
  </div>
</div>

<!-- Q87 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q87: Oscillations of a Liquid Column in a U-Tube</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A liquid of density $\\rho$ is filled to height $h$ in each arm of a uniform U-tube of cross-sectional area $A$. If the liquid in one arm is depressed by $y$ and released, show that the liquid column executes S.H.M and derive its time period $T = 2\\pi \\sqrt{h/g}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    1. Total length of the liquid column in the U-tube is $L = 2h$.<br/>
    Total mass of the liquid:
    $$M = A L \\rho = 2 A h \\rho$$
    2. When the liquid in one limb is depressed by distance $y$, it rises by $y$ in the other limb. The difference in liquid levels between the two limbs is $2y$.<br/>
    3. This excess column of height $2y$ exerts a hydrostatic restoring force that pushes the liquid back:
    $$F = -(\\text{Weight of excess liquid column}) = -(A \\cdot 2y \\cdot \\rho) g = -2 A \\rho g y$$
    4. By Newton's Second Law: $M \\frac{d^2y}{dt^2} = F$.
    $$(2 A h \\rho) \\frac{d^2y}{dt^2} = -2 A \\rho g y$$
    Canceling common factor $2 A \\rho$:
    $$h \\frac{d^2y}{dt^2} = -g y \\implies \\mathbf{\\frac{d^2y}{dt^2} + \\left( \\frac{g}{h} \\right) y = 0}$$
    5. This is the equation of S.H.M: $\\frac{d^2y}{dt^2} + \\omega^2 y = 0$, where:
    $$\\omega = \\sqrt{\\frac{g}{h}}$$
    6. Time period:
    $$\\mathbf{T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{h}{g}} = 2\\pi \\sqrt{\\frac{L}{2g}}}$$
    Notice that the period is independent of liquid density $\\rho$ and tube cross-sectional area $A$.
  </div>
</div>

<!-- Q88 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q88: Oscillations of a Floating Cylinder in a Liquid</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A cylindrical wooden block of mass $m$, length $L$, and cross-sectional area $A$ floats vertically in a liquid of density $\\rho$. If depressed slightly and released, prove that it executes Simple Harmonic Motion and find its time period.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    1. At static equilibrium, the cylinder floats with length $l$ submerged in the liquid.<br/>
    By the Law of Floatation, weight of cylinder equals weight of displaced liquid:
    $$m g = (A l \\rho) g \\implies m = A l \\rho \\quad \\text{--- (1)}$$
    2. Now, push the cylinder down vertically by a small additional displacement $y$ into the liquid.<br/>
    The volume of liquid displaced increases by $\\Delta V = A y$.<br/>
    The additional upward buoyant force (upthrust) acting on the cylinder is:
    $$\\Delta F_B = -(\\Delta V \\rho g) = -A \\rho g y$$
    This acts as the restoring force driving the cylinder upward:
    $$F_{\\text{restoring}} = - (A \\rho g) y$$
    3. Equation of motion:
    $$m \\frac{d^2y}{dt^2} = - (A \\rho g) y \\implies \\mathbf{\\frac{d^2y}{dt^2} + \\left( \\frac{A \\rho g}{m} \\right) y = 0}$$
    Since acceleration is proportional to negative displacement ($a \\propto -y$), the motion is strictly Simple Harmonic.<br/>
    4. Angular frequency:
    $$\\omega = \\sqrt{\\frac{A \\rho g}{m}}$$
    Substituting $m = A l \\rho$ from equation (1):
    $$\\omega = \\sqrt{\\frac{A \\rho g}{A l \\rho}} = \\sqrt{\\frac{g}{l}}$$
    5. Time period:
    $$\\mathbf{T = 2\\pi \\sqrt{\\frac{m}{A \\rho g}} = 2\\pi \\sqrt{\\frac{l}{g}}}$$
    The time period is identical to that of a simple pendulum whose effective length equals the submerged depth $l$ of the floating cylinder.
  </div>
</div>

<!-- Q89 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q89: Derivation of the Displacement Relation for a Progressive Wave</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define a progressive wave. Rigorously derive the mathematical equation representing a plane progressive harmonic wave propagating along the positive $x$-direction: $y(x,t) = A \\sin(kx - \\omega t + \\phi_0)$. Establish the relation between particle velocity and wave speed.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Definition:</b> A wave that travels continuously through a medium in a given direction without reflection or attenuation, transporting energy and momentum across space, is called a <strong>progressive wave</strong>.<br/><br/>
    <b style="color: ${themeColor};">2. Mathematical Derivation:</b><br/>
    Let an elastic medium particle at origin $x = 0$ execute S.H.M of amplitude $A$ and angular frequency $\\omega$:
    $$y(0,t) = A \\sin(\\omega t)$$
    Suppose the wave disturbance propagates along the positive $x$-axis with constant speed $v$.<br/>
    The disturbance generated at the origin takes time $\\Delta t = \\frac{x}{v}$ to reach a point at distance $x$.<br/>
    Therefore, the displacement of the particle at position $x$ at time $t$ is identical to the displacement that the particle at origin had at the earlier instant $(t - x/v)$:
    $$y(x,t) = A \\sin\\left[ \\omega \\left( t - \\frac{x}{v} \\right) \\right]$$
    Expanding:
    $$y(x,t) = A \\sin\\left( \\omega t - \\frac{\\omega}{v} x \\right)$$
    Since wave speed is $v = \\nu \\lambda = \\frac{\\omega}{2\\pi} \\lambda \\implies \\frac{\\omega}{v} = \\frac{2\\pi}{\\lambda} = k$ (the angular wave number):
    $$\\mathbf{y(x,t) = A \\sin(\\omega t - k x) = -A \\sin(k x - \\omega t)}$$
    Including an arbitrary initial phase $\\phi_0$:
    $$\\mathbf{y(x,t) = A \\sin(k x - \\omega t + \\phi_0)}$$
    <b style="color: ${themeColor};">3. Particle Velocity vs Wave Velocity:</b><br/>
    - Particle velocity is the rate of change of displacement with time at fixed position $x$:
    $$v_p = \\frac{\\partial y}{\\partial t} = -\\omega A \\cos(k x - \\omega t + \\phi_0)$$
    - The spatial wave gradient (slope of wave shape at time $t$) is:
    $$\\frac{\\partial y}{\\partial x} = k A \\cos(k x - \\omega t + \\phi_0)$$
    Dividing particle velocity by slope:
    $$\\frac{v_p}{\\frac{\\partial y}{\\partial x}} = \\frac{-\\omega A \\cos(\\dots)}{k A \\cos(\\dots)} = -\\frac{\\omega}{k}$$
    Since wave speed is $v = \\frac{\\omega}{k}$:
    $$\\mathbf{v_p = - v \\left( \\frac{\\partial y}{\\partial x} \\right)}$$
    Particle velocity equals the negative product of wave speed and the spatial slope of the wave profile.
  </div>
</div>

<!-- Q90 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q90: Newton's Formula for Speed of Sound and Laplace's Adiabatic Correction</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Newton's formula for the speed of sound in a gas. Explain why Newton's assumption was flawed and derive Laplace's adiabatic correction. Calculate the numerical speed predicted in air at STP ($P = 1.013 \\times 10^5\\text{ Pa}, \\rho = 1.293\\text{ kg/m}^3, \\gamma = 1.41$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Newton's Formula and Its Failure:</b><br/>
    Newton assumed that when sound waves propagate through a gas, acoustic compressions and rarefactions take place so slowly that heat generated during compression immediately flows to surrounding air, maintaining constant temperature (an <strong>isothermal process</strong>).<br/>
    For an isothermal process, $PV = \\text{constant}$.<br/>
    Differentiating: $P dV + V dP = 0 \\implies -V \\frac{dP}{dV} = P$.<br/>
    The isothermal bulk modulus is $B_{\\text{iso}} = P$.<br/>
    Newton's sound speed formula:
    $$v = \\sqrt{\\frac{B_{\\text{iso}}}{\\rho}} = \\sqrt{\\frac{P}{\\rho}}$$
    At STP ($P = 1.013 \\times 10^5\\text{ Pa}, \\rho = 1.293\\text{ kg/m}^3$):
    $$v_{\\text{Newton}} = \\sqrt{\\frac{1.013 \\times 10^5}{1.293}} = \\sqrt{78,345} \\approx \\mathbf{279.9\\text{ m/s} \\approx 280\\text{ m/s}}$$
    The experimental speed of sound in air at STP is $332\\text{ m/s}$. Newton's formula was off by about $15.7\\%$.<br/><br/>
    <b style="color: ${themeColor};">2. Laplace's Adiabatic Correction:</b><br/>
    In 1816, Pierre-Simon Laplace pointed out two physical realities:
    (i) Air is a poor thermal conductor.<br/>
    (ii) Sound compressions and rarefactions occur extraordinarily rapidly (e.g. $1000$ times per second).<br/>
    Consequently, heat produced in compressions has no time to dissipate, and cooling in rarefactions has no time to absorb heat. The propagation of sound is strictly <strong>adiabatic</strong>.<br/>
    For an adiabatic process:
    $$P V^{\\gamma} = \\text{constant}$$
    Differentiating:
    $$P (\\gamma V^{\\gamma-1} dV) + V^{\\gamma} dP = 0 \\implies \\gamma P dV + V dP = 0 \\implies -V \\frac{dP}{dV} = \\gamma P$$
    The adiabatic bulk modulus is:
    $$B_{\\text{adia}} = \\gamma P$$
    where $\\gamma = C_p / C_v$ is the adiabatic index.<br/>
    Laplace's corrected formula:
    $$\\mathbf{v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}}$$
    <b style="color: ${themeColor};">3. Numerical Verification:</b><br/>
    For air (chiefly diatomic N$_2$ and O$_2$), $\\gamma = 1.41$:
    $$v = \\sqrt{\\frac{1.41 \\times 1.013 \\times 10^5}{1.293}} = \\sqrt{1.41 \\times 78345} = \\sqrt{110466} \\approx \\mathbf{332.4\\text{ m/s}}$$
    This matches the experimental value ($332\\text{ m/s}$) with complete precision.
  </div>
</div>

<!-- Q91 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q91: Analytical Treatment of Superposition and Interference of Harmonic Waves</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the Principle of Superposition. Analyze mathematically the interference of two collinear harmonic waves of equal frequency and amplitudes $A_1$ and $A_2$ with phase difference $\\phi$. Deduce the conditions for constructive and destructive interference.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    Let two harmonic waves of same angular frequency $\\omega$ and wave number $k$ travel along positive $x$:
    $$y_1 = A_1 \\sin(kx - \\omega t) \\quad \\text{and} \\quad y_2 = A_2 \\sin(kx - \\omega t + \\phi)$$
    By the Principle of Superposition:
    $$y = y_1 + y_2 = A_1 \\sin(kx - \\omega t) + A_2 [\\sin(kx - \\omega t) \\cos\\phi + \\cos(kx - \\omega t) \\sin\\phi]$$
    $$y = [A_1 + A_2 \\cos\\phi] \\sin(kx - \\omega t) + [A_2 \\sin\\phi] \\cos(kx - \\omega t)$$
    Let:
    $$A_1 + A_2 \\cos\\phi = R \\cos\\theta \\quad \\text{--- (1)}$$
    $$A_2 \\sin\\phi = R \\sin\\theta \\quad \\text{--- (2)}$$
    Substituting:
    $$y = R \\cos\\theta \\sin(kx - \\omega t) + R \\sin\\theta \\cos(kx - \\omega t) = \\mathbf{R \\sin(kx - \\omega t + \\theta)}$$
    <b style="color: ${themeColor};">1. Resultant Amplitude $R$:</b><br/>
    Squaring and adding equations (1) and (2):
    $$R^2 (\\cos^2\\theta + \\sin^2\\theta) = (A_1 + A_2 \\cos\\phi)^2 + (A_2 \\sin\\phi)^2$$
    $$R^2 = A_1^2 + 2 A_1 A_2 \\cos\\phi + A_2^2 (\\cos^2\\phi + \\sin^2\\phi)$$
    $$\\mathbf{R = \\sqrt{A_1^2 + A_2^2 + 2 A_1 A_2 \\cos\\phi}}$$
    Resultant intensity ($I \\propto R^2$):
    $$I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos\\phi$$
    <b style="color: ${themeColor};">2. Constructive Interference (Intensity Maxima):</b><br/>
    Occurs when $\\cos\\phi = +1 \\implies \\mathbf{\\phi = 2n\\pi}$ ($n = 0, 1, 2, \\dots$).<br/>
    Path difference: $\\Delta x = \\frac{\\lambda}{2\\pi} \\phi = n\\lambda$.<br/>
    Maximum amplitude: $R_{\\text{max}} = A_1 + A_2$.<br/>
    Maximum intensity: $I_{\\text{max}} = (\\sqrt{I_1} + \\sqrt{I_2})^2$.<br/><br/>
    <b style="color: ${themeColor};">3. Destructive Interference (Intensity Minima):</b><br/>
    Occurs when $\\cos\\phi = -1 \\implies \\mathbf{\\phi = (2n + 1)\\pi}$ ($n = 0, 1, 2, \\dots$).<br/>
    Path difference: $\\Delta x = (2n + 1) \\frac{\\lambda}{2}$.<br/>
    Minimum amplitude: $R_{\\text{min}} = |A_1 - A_2|$.<br/>
    Minimum intensity: $I_{\\text{min}} = (\\sqrt{I_1} - \\sqrt{I_2})^2$. (If $A_1 = A_2$, $I_{\\text{min}} = 0$, complete darkness/silence).
  </div>
</div>

<!-- Q92 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q92: Analytical Formulation of Standing Waves on a Stretched String</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Set up the mathematical equation of standing waves in a stretched string clamped at both ends ($x=0$ and $x=L$). Apply boundary conditions to find the permitted wavelengths and natural frequencies. Formulate the fundamental mode and first three overtones.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Standing Wave Equation:</b><br/>
    Incident wave traveling along positive $x$: $y_1 = A \\sin(kx - \\omega t)$.<br/>
    Reflected wave from fixed rigid end at $x=L$: undergoes $\\pi$ phase reversal: $y_2 = -A \\sin(kx + \\omega t)$.<br/>
    By superposition:
    $$y(x,t) = y_1 + y_2 = A [\\sin(kx - \\omega t) - \\sin(kx + \\omega t)] = -2A \\sin(kx) \\cos(\\omega t)$$
    <b style="color: ${themeColor};">2. Boundary Conditions:</b><br/>
    At $x = 0$: $y(0,t) = -2A \\sin(0) \\cos(\\omega t) = 0$ (automatically satisfied, node at $x=0$).<br/>
    At $x = L$: The string is clamped rigidly, so displacement must be zero for all time $t$:
    $$y(L,t) = -2A \\sin(kL) \\cos(\\omega t) = 0 \\implies \\sin(kL) = 0$$
    Therefore:
    $$kL = n\\pi \\quad (n = 1, 2, 3, \\dots)$$
    Since $k = 2\\pi / \\lambda_n$:
    $$\\left( \\frac{2\\pi}{\\lambda_n} \\right) L = n\\pi \\implies \\mathbf{\\lambda_n = \\frac{2L}{n}}$$
    <b style="color: ${themeColor};">3. Natural Frequencies (Harmonics):</b><br/>
    Using wave speed on string $v = \\sqrt{T/\\mu}$:
    $$\\mathbf{f_n = \\frac{v}{\\lambda_n} = \\frac{n v}{2L} = \\frac{n}{2L} \\sqrt{\\frac{T}{\\mu}}}$$
    - <b style="color: ${themeColor};">Mode 1: Fundamental Mode ($n=1$, 1st Harmonic):</b><br/>
      $\\lambda_1 = 2L, \\quad f_1 = \\frac{v}{2L} = \\frac{1}{2L} \\sqrt{\\frac{T}{\\mu}}$. String vibrates in $1$ loop ($2$ nodes at ends, $1$ antinode in middle).<br/>
    - <b style="color: ${themeColor};">Mode 2: First Overtone ($n=2$, 2nd Harmonic):</b><br/>
      $\\lambda_2 = L, \\quad f_2 = 2 \\left( \\frac{v}{2L} \\right) = 2 f_1$. String vibrates in $2$ loops ($3$ nodes, $2$ antinodes).<br/>
    - <b style="color: ${themeColor};">Mode 3: Second Overtone ($n=3$, 3rd Harmonic):</b><br/>
      $\\lambda_3 = \\frac{2L}{3}, \\quad f_3 = 3 \\left( \\frac{v}{2L} \\right) = 3 f_1$. String vibrates in $3$ loops ($4$ nodes, $3$ antinodes).<br/>
    - <b style="color: ${themeColor};">Mode 4: Third Overtone ($n=4$, 4th Harmonic):</b><br/>
      $\\lambda_4 = \\frac{L}{2}, \\quad f_4 = 4 f_1$. String vibrates in $4$ loops ($5$ nodes, $4$ antinodes).<br/>
    The harmonic frequencies form an exact integer sequence: $f_1 : f_2 : f_3 : f_4 = 1 : 2 : 3 : 4$.
  </div>
</div>

<!-- Q93 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q93: Mathematical Derivation of Resonant Modes in an Open Organ Pipe</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Show mathematically how standing waves are formed in an Open Organ Pipe of length $L$. Derive expressions for the resonant wavelengths and frequencies for the fundamental mode and first three overtones. Prove that all harmonics are present.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Boundary Conditions:</b><br/>
    In an organ pipe open at both ends ($x=0$ and $x=L$), air molecules at both open boundaries are exposed to atmospheric pressure and vibrate with maximum displacement. Therefore, <strong>antinodes form at both ends</strong>.<br/><br/>
    <b style="color: ${themeColor};">2. Mathematical Derivation:</b><br/>
    The distance between two consecutive antinodes is $\\lambda/2$. For $n$ half-wave segments fitting into pipe length $L$:
    $$L = n \\left( \\frac{\\lambda_n}{2} \\right) \\implies \\mathbf{\\lambda_n = \\frac{2L}{n}} \\quad (n = 1, 2, 3, \\dots)$$
    The permitted resonant frequencies are:
    $$\\mathbf{f_n = \\frac{v}{\\lambda_n} = n \\left( \\frac{v}{2L} \\right) = n f_1}$$
    <b style="color: ${themeColor};">3. Analysis of Harmonic Modes:</b><br/>
    (i) <b style="color: ${themeColor};">Fundamental Mode ($n=1$, 1st Harmonic):</b><br/>
    $$L = \\frac{\\lambda_1}{2} \\implies \\lambda_1 = 2L \\implies \\mathbf{f_1 = \\frac{v}{2L}}$$
    Contains $2$ antinodes (at ends) and $1$ node (at center).<br/><br/>
    (ii) <b style="color: ${themeColor};">First Overtone ($n=2$, 2nd Harmonic):</b><br/>
    $$L = \\lambda_2 \\implies \\lambda_2 = L \\implies \\mathbf{f_2 = \\frac{v}{L} = 2 \\left( \\frac{v}{2L} \\right) = 2 f_1}$$
    Contains $3$ antinodes and $2$ nodes.<br/><br/>
    (iii) <b style="color: ${themeColor};">Second Overtone ($n=3$, 3rd Harmonic):</b><br/>
    $$L = \\frac{3\\lambda_3}{2} \\implies \\lambda_3 = \\frac{2L}{3} \\implies \\mathbf{f_3 = \\frac{3v}{2L} = 3 f_1}$$
    Contains $4$ antinodes and $3$ nodes.<br/><br/>
    (iv) <b style="color: ${themeColor};">Third Overtone ($n=4$, 4th Harmonic):</b><br/>
    $$L = 2\\lambda_4 \\implies \\lambda_4 = \\frac{L}{2} \\implies \\mathbf{f_4 = 4 f_1}$$
    Contains $5$ antinodes and $4$ nodes.<br/><br/>
    <b style="color: ${themeColor};">Conclusion:</b> The ratio of frequencies is:
    $$\\mathbf{f_1 : f_2 : f_3 : f_4 : \\dots = 1 : 2 : 3 : 4 : \\dots}$$
    An open organ pipe physically produces <strong>both even and odd harmonics</strong>, yielding a rich, full musical timbre.
  </div>
</div>

<!-- Q94 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q94: Mathematical Derivation of Resonant Modes in a Closed Organ Pipe</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Show mathematically how standing waves are formed in a Closed Organ Pipe of length $L$. Derive expressions for the resonant wavelengths and frequencies for the fundamental mode and first three overtones. Prove that only odd harmonics are present.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Boundary Conditions:</b><br/>
    In an organ pipe closed at one end ($x=0$) and open at the other ($x=L$):
    - At the closed rigid boundary, air molecules cannot move: a <strong>displacement node forms at $x=0$</strong>.
    - At the open boundary, air molecules vibrate freely: an <strong>antinode forms at $x=L$</strong>.<br/><br/>
    <b style="color: ${themeColor};">2. Mathematical Derivation:</b><br/>
    The separation between a node and an antinode must be an odd multiple of quarter-wavelengths $\\lambda/4$:
    $$L = (2n - 1) \\frac{\\lambda_n}{4} \\implies \\mathbf{\\lambda_n = \\frac{4L}{2n - 1}} \\quad (n = 1, 2, 3, \\dots)$$
    The permitted natural frequencies are:
    $$\\mathbf{f'_n = \\frac{v}{\\lambda_n} = (2n - 1) \\left( \\frac{v}{4L} \\right) = (2n - 1) f'_1}$$
    <b style="color: ${themeColor};">3. Analysis of Harmonic Modes:</b><br/>
    (i) <b style="color: ${themeColor};">Fundamental Mode ($n=1$, 1st Harmonic):</b><br/>
    $$L = \\frac{\\lambda_1}{4} \\implies \\lambda_1 = 4L \\implies \\mathbf{f'_1 = \\frac{v}{4L}}$$
    Contains $1$ node (closed end) and $1$ antinode (open end).<br/><br/>
    (ii) <b style="color: ${themeColor};">First Overtone ($n=2$, 3rd Harmonic):</b><br/>
    $$L = \\frac{3\\lambda_2}{4} \\implies \\lambda_2 = \\frac{4L}{3} \\implies \\mathbf{f'_2 = 3 \\left( \\frac{v}{4L} \\right) = 3 f'_1}$$
    Contains $2$ nodes and $2$ antinodes.<br/><br/>
    (iii) <b style="color: ${themeColor};">Second Overtone ($n=3$, 5th Harmonic):</b><br/>
    $$L = \\frac{5\\lambda_3}{4} \\implies \\lambda_3 = \\frac{4L}{5} \\implies \\mathbf{f'_3 = 5 \\left( \\frac{v}{4L} \\right) = 5 f'_1}$$
    Contains $3$ nodes and $3$ antinodes.<br/><br/>
    (iv) <b style="color: ${themeColor};">Third Overtone ($n=4$, 7th Harmonic):</b><br/>
    $$L = \\frac{7\\lambda_4}{4} \\implies \\lambda_4 = \\frac{4L}{7} \\implies \\mathbf{f'_4 = 7 f'_1}$$
    Contains $4$ nodes and $4$ antinodes.<br/><br/>
    <b style="color: ${themeColor};">Conclusion:</b> The ratio of frequencies is:
    $$\\mathbf{f'_1 : f'_2 : f'_3 : f'_4 : \\dots = 1 : 3 : 5 : 7 : \\dots}$$
    A closed organ pipe produces <strong>strictly odd harmonics</strong>; all even harmonics are entirely absent.
  </div>
</div>

<!-- Q95 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q95: Analytical Theory of Beats &amp; Amplitude Modulation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Formulate the analytical theory of beats produced by two sound waves of equal amplitude $A$ and slightly different frequencies $\\nu_1$ and $\\nu_2$. Deduce the equation of the envelope of resultant amplitude and show that the beat frequency is $f_b = |\\nu_1 - \\nu_2|$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Superposition of Wave Equations:</b><br/>
    Let two sound waves traveling in the same direction have equal amplitude $A$ and slightly different frequencies $\\nu_1, \\nu_2$ (with angular frequencies $\\omega_1 = 2\\pi \\nu_1, \\omega_2 = 2\\pi \\nu_2$):
    $$y_1(t) = A \\sin(2\\pi \\nu_1 t) \\quad \\text{and} \\quad y_2(t) = A \\sin(2\\pi \\nu_2 t)$$
    By the Principle of Superposition:
    $$y(t) = y_1(t) + y_2(t) = A [\\sin(2\\pi \\nu_1 t) + \\sin(2\\pi \\nu_2 t)]$$
    Using the trigonometric identity $\\sin C + \\sin D = 2 \\cos\\left(\\frac{C - D}{2}\\right) \\sin\\left(\\frac{C + D}{2}\\right)$:
    $$y(t) = 2A \\cos\\left[ 2\\pi \\left( \\frac{\\nu_1 - \\nu_2}{2} \\right) t \\right] \\sin\\left[ 2\\pi \\left( \\frac{\\nu_1 + \\nu_2}{2} \\right) t \\right]$$
    Let:
    $$\\nu_{\\text{avg}} = \\frac{\\nu_1 + \\nu_2}{2} \\quad \\text{and} \\quad R(t) = 2A \\cos\\left[ \\pi (\\nu_1 - \\nu_2) t \\right]$$
    The resultant displacement is:
    $$\\mathbf{y(t) = R(t) \\sin(2\\pi \\nu_{\\text{avg}} t)}$$
    This represents a wave oscillating with mean frequency $\\nu_{\\text{avg}}$ whose amplitude $R(t)$ is periodically modulated with time.<br/><br/>
    <b style="color: ${themeColor};">2. Conditions for Maxima (Waxing of Sound):</b><br/>
    Intensity is maximum when $|R(t)|$ is maximum ($2A$):
    $$\\cos[\\pi (\\nu_1 - \\nu_2) t] = \\pm 1 \\implies \\pi (\\nu_1 - \\nu_2) t = n\\pi$$
    $$t = \\frac{n}{\\nu_1 - \\nu_2} \\quad (n = 0, 1, 2, \\dots)$$
    Times of successive maxima:
    $$t_0 = 0, \\quad t_1 = \\frac{1}{\\nu_1 - \\nu_2}, \\quad t_2 = \\frac{2}{\\nu_1 - \\nu_2}, \\dots$$
    Time interval between consecutive waxings:
    $$T_b = t_{n+1} - t_n = \\frac{1}{\\nu_1 - \\nu_2}$$
    <b style="color: ${themeColor};">3. Conditions for Minima (Waning of Sound):</b><br/>
    Intensity is minimum when $R(t) = 0$:
    $$\\cos[\\pi (\\nu_1 - \\nu_2) t] = 0 \\implies \\pi (\\nu_1 - \\nu_2) t = (2n + 1) \\frac{\\pi}{2}$$
    $$t = \\frac{2n + 1}{2(\\nu_1 - \\nu_2)} = \\frac{1}{2(\\nu_1 - \\nu_2)}, \\frac{3}{2(\\nu_1 - \\nu_2)}, \\dots$$
    Time interval between consecutive wanings:
    $$T'_b = \\frac{1}{\\nu_1 - \\nu_2} = T_b$$
    <b style="color: ${themeColor};">4. Beat Frequency:</b><br/>
    One beat consists of one waxing and one waning. The number of beats per second is:
    $$\\mathbf{f_b = \\frac{1}{T_b} = |\\nu_1 - \\nu_2|}$$
    This proves that the beat frequency strictly equals the absolute difference between the frequencies of the two interfering sound sources.
  </div>
</div>

<!-- Q96 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q96: Reflection and Transmission of Waves at Media Interfaces</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Discuss the reflection and transmission of transverse waves at the boundary between two strings of different linear densities. Explain mathematically why phase reversal of $\\pi\\text{ radians}$ occurs upon reflection from a denser medium, while zero phase change occurs at a rarer medium.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    Consider a wave traveling in string 1 (wave speed $v_1$) meeting the boundary ($x = 0$) with string 2 (wave speed $v_2$). Both strings are under identical tension $T$.<br/>
    Linear mass densities are $\\mu_1$ and $\\mu_2$, so $v_1 = \\sqrt{T/\\mu_1}$ and $v_2 = \\sqrt{T/\\mu_2}$.<br/>
    Incident wave: $y_i = A_i \\sin(k_1 x - \\omega t)$.<br/>
    Reflected wave: $y_r = A_r \\sin(-k_1 x - \\omega t + \\pi) = A_r \\sin(k_1 x + \\omega t)$.<br/>
    Transmitted wave: $y_t = A_t \\sin(k_2 x - \\omega t)$.<br/><br/>
    <b style="color: ${themeColor};">Boundary Conditions at $x = 0$:</b><br/>
    1. <strong>Displacement Continuity:</strong> $y_i(0,t) + y_r(0,t) = y_t(0,t) \\implies A_i + A_r = A_t$.<br/>
    2. <strong>Transverse Force Continuity (Slope Continuity):</strong> $T \\left( \\frac{\\partial y_i}{\\partial x} + \\frac{\\partial y_r}{\\partial x} \\right) = T \\frac{\\partial y_t}{\\partial x} \\implies k_1 (A_i - A_r) = k_2 A_t$.<br/>
    Solving these simultaneous equations gives:
    $$\\mathbf{A_r = \\left( \\frac{k_1 - k_2}{k_1 + k_2} \\right) A_i = \\left( \\frac{v_2 - v_1}{v_2 + v_1} \\right) A_i}$$
    $$\\mathbf{A_t = \\left( \\frac{2 k_1}{k_1 + k_2} \\right) A_i = \\left( \\frac{2 v_2}{v_1 + v_2} \\right) A_i}$$
    <b style="color: ${themeColor};">Physical Implications:</b><br/>
    - <b style="color: ${themeColor};">Case 1: Reflection from Denser Medium (Rigid Boundary):</b><br/>
      Here $\\mu_2 > \\mu_1 \\implies v_2 < v_1$.<br/>
      Therefore, $A_r$ is <strong>negative</strong> ($A_r < 0$). A negative amplitude corresponds mathematically to an added phase shift of $\\pi$:
      $$\\mathbf{\\Delta \\phi = \\pi\\text{ radians} = 180^{\\circ}}$$
      A crest reflects back as a trough.<br/>
    - <b style="color: ${themeColor};">Case 2: Reflection from Rarer Medium (Free Boundary):</b><br/>
      Here $\\mu_2 < \\mu_1 \\implies v_2 > v_1$.<br/>
      Therefore, $A_r > 0$. The reflected wave maintains its algebraic sign:
      $$\\mathbf{\\Delta \\phi = 0^{\\circ}}$$
      A crest reflects back as a crest.
  </div>
</div>

<!-- Q97 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q97: Melde's Experiment: Transverse and Longitudinal Modes</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe Melde's experiment. Deduce the relationship between the frequency of the tuning fork ($f$) and the frequency of the vibrating string in: (a) Transverse arrangement, and (b) Longitudinal arrangement. State Melde's Law.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    Melde's experiment demonstrates the formation of standing waves on a stretched string driven by an electrically maintained tuning fork.<br/><br/>
    <b style="color: ${themeColor};">(a) Transverse Arrangement:</b><br/>
    The prong of the tuning fork vibrates in a direction perpendicular to the length of the stretched string.<br/>
    - In one complete vibration of the fork prong, the end of the string attached to it moves up, down, and returns to its original position once.<br/>
    - Therefore, the string completes one full oscillation for each oscillation of the fork:
    $$f_{\\text{string}} = f_{\\text{fork}} = f$$
    If the string of length $L$ vibrates in $p$ loops under tension $T$:
    $$f = \\frac{p}{2L} \\sqrt{\\frac{T}{\\mu}} \\implies \\mathbf{p \\sqrt{T} = \\text{constant}}$$
    <b style="color: ${themeColor};">(b) Longitudinal Arrangement:</b><br/>
    The prong of the tuning fork vibrates parallel to the length of the string.<br/>
    - In one complete vibration of the prong (forward and backward), the string becomes slack twice and tight twice, completing TWO transverse half-cycles.<br/>
    - Therefore, the frequency of vibration of the string is exactly <strong>half</strong> the frequency of the fork:
    $$f_{\\text{string}} = \\frac{f_{\\text{fork}}}{2} = \\frac{f}{2}$$
    Equating to the loop frequency formula:
    $$\\frac{f}{2} = \\frac{p}{2L} \\sqrt{\\frac{T}{\\mu}} \\implies f = \\frac{p}{L} \\sqrt{\\frac{T}{\\mu}}$$
    Here too: $\\mathbf{p \\sqrt{T} = \\text{constant}}$.<br/><br/>
    <b style="color: ${themeColor};">Melde's Law:</b><br/>
    In both arrangements, for a string of fixed length and linear density, the number of loops $p$ is inversely proportional to the square root of tension $T$:
    $$\\mathbf{p \\propto \\frac{1}{\\sqrt{T}} \\iff p^2 T = \\text{constant}}$$
  </div>
</div>

<!-- Q98 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q98: Doppler Effect in Sound Waves (General Formulation)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the Doppler Effect in sound. Derive the general formula for the apparent frequency $\\nu'$ heard by an observer when both source and observer are moving along the line joining them. Deduce the special cases when: (a) Source approaches stationary observer, and (b) Observer moves away from stationary source.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Definition:</b> The apparent change in the observed pitch (frequency) of sound caused by relative motion between the sound source, the observer, and the medium is called the <strong>Doppler Effect</strong>.<br/><br/>
    <b style="color: ${themeColor};">2. General Derivation:</b><br/>
    Let:
    - Speed of sound in stationary medium = $v$.
    - True frequency of the source = $\\nu_0$, true time period = $T_0 = 1/\\nu_0$.
    - Velocity of source moving toward observer = $v_s$.
    - Velocity of observer moving away from source = $v_o$.<br/>
    (i) <strong>Wavelength Alteration:</strong> In time $T_0$, the source moves forward by distance $v_s T_0$. The emitted wavelength is compressed to:
    $$\\lambda' = (v - v_s) T_0 = \\frac{v - v_s}{\\nu_0}$$
    (ii) <strong>Relative Speed of Waves past Observer:</strong> The observer moves away with speed $v_o$, so the relative speed of sound waves entering the observer's ear is $(v - v_o)$.<br/>
    (iii) <strong>Apparent Frequency ($\\nu'$):</strong>
    $$\\nu' = \\frac{\\text{Relative speed}}{\\text{Apparent wavelength}} = \\frac{v - v_o}{\\lambda'} = \\frac{v - v_o}{\\frac{v - v_s}{\\nu_0}}$$
    $$\\mathbf{\\nu' = \\nu_0 \\left( \\frac{v - v_o}{v - v_s} \\right)}$$
    <b style="color: ${themeColor};">3. Universal Sign Convention:</b><br/>
    Treat the direction from <strong>Source to Observer</strong> as positive.<br/><br/>
    <b style="color: ${themeColor};">4. Special Cases:</b><br/>
    (a) <b style="color: ${themeColor};">Source approaching stationary observer ($v_o = 0$, $v_s > 0$ toward observer):</b>
    $$\\mathbf{\\nu' = \\nu_0 \\left( \\frac{v}{v - v_s} \\right) > \\nu_0}$$
    The observed pitch rises (wavelength compressed).<br/><br/>
    (b) <b style="color: ${themeColor};">Observer moving away from stationary source ($v_s = 0$, $v_o > 0$ away):</b>
    $$\\mathbf{\\nu' = \\nu_0 \\left( \\frac{v - v_o}{v} \\right) < \\nu_0}$$
    The observed pitch falls (fewer wave fronts intercepted per second).
  </div>
</div>

<!-- Q99 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q99: Physical Synthesis of Damped and Forced Oscillations with Quality Factor</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Formulate the differential equations governing damped oscillations and forced oscillations. Define Quality Factor ($Q$) of an oscillator, relate it to energy loss per cycle, and explain its physical significance in acoustic and electronic resonators.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Damped Oscillations:</b><br/>
    When an oscillating system experiences a velocity-dependent dissipative damping force $F_d = -b \\frac{dx}{dt}$ alongside Hooke's restoring force $F_r = -kx$:
    $$m \\frac{d^2x}{dt^2} + b \\frac{dx}{dt} + kx = 0 \\implies \\mathbf{\\frac{d^2x}{dt^2} + 2\\gamma \\frac{dx}{dt} + \\omega_0^2 x = 0}$$
    where $\\omega_0 = \\sqrt{k/m}$ and $2\\gamma = b/m$.<br/>
    The mechanical energy decays exponentially: $E(t) = E_0 e^{-2\\gamma t}$.<br/><br/>
    <b style="color: ${themeColor};">2. Forced Oscillations &amp; Resonance:</b><br/>
    Subject the damped oscillator to an external periodic driving force $F(t) = F_0 \\cos(\\omega_d t)$:
    $$\\mathbf{m \\frac{d^2x}{dt^2} + b \\frac{dx}{dt} + kx = F_0 \\cos(\\omega_d t)}$$
    In steady state, the oscillator oscillates at the driving frequency $\\omega_d$ with amplitude:
    $$A(\\omega_d) = \\frac{F_0}{\\sqrt{m^2(\\omega_0^2 - \\omega_d^2)^2 + b^2 \\omega_d^2}}$$
    At resonance ($\\omega_d \\approx \\omega_0$), the amplitude reaches maximum: $A_{\\text{res}} = \\frac{F_0}{b \\omega_0}$.<br/><br/>
    <b style="color: ${themeColor};">3. Quality Factor ($Q$):</b><br/>
    The Quality Factor $Q$ is a dimensionless parameter characterizing the sharpness of resonance and the efficiency of energy storage:<br/>
    $$Q = 2\\pi \\left( \\frac{\\text{Total Energy Stored}}{\\text{Energy Dissipated per Cycle}} \\right)$$
    In terms of oscillator parameters:
    $$\\mathbf{Q = \\frac{\\omega_0}{2\\gamma} = \\frac{m \\omega_0}{b} = \\frac{\\omega_0}{\\Delta \\omega}}$$
    where $\\Delta \\omega$ is the full width at half-maximum power (resonance bandwidth).<br/>
    - <b style="color: ${themeColor};">High $Q$ ($Q \\gg 100$):</b> Extremely sharp resonance peak, minimal energy loss, prolonged ringing (e.g. quartz crystals $Q \\sim 10^5$, tuning forks $Q \\sim 10^3$).<br/>
    - <b style="color: ${themeColor};">Low $Q$:</b> Broad, flat resonance curve, rapid damping (e.g. car shock absorbers designed for critical damping $Q \\approx 0.5$).
  </div>
</div>

<!-- Q100 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q100: Master Synthesis of Unit X: Oscillations and Waves (10 Marks)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Provide a master synthesis of Unit X: Oscillations and Waves (10 Marks). Construct a comprehensive comparison table contrasting Oscillations vs Waves and Open vs Closed Organ Pipes. Summarize all core relations, SI units, and common exam traps.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 14px 16px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.65;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Master Comparison: Oscillations vs Waves:</b><br/>
    <div style="overflow-x: auto; margin: 12px 0;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: center; border: 1px solid rgba(0, 229, 255, 0.3);">
        <thead>
          <tr style="background: rgba(0, 229, 255, 0.15); color: ${themeColor};">
            <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">Parameter</th>
            <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">Oscillations (S.H.M)</th>
            <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">Wave Motion</th>
          </tr>
        </thead>
        <tbody style="color: #CBD5E1;">
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">System Type</td>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Single localized particle / lumped body</td>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Continuous extended elastic medium</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Governing Variable</td>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Time $t$ only: $x = f(t)$</td>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Space and Time: $y = f(x, t)$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Energy Transport</td>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">No spatial transport; energy cycles locally ($E_k \\leftrightarrow U$)</td>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Transports energy &amp; momentum across space ($v = \\nu \\lambda$)</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Phase Relation</td>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Single phase $\\Phi(t) = \\omega t + \\phi_0$</td>
            <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Phase varies spatially: $\\Delta\\phi = k \\Delta x$</td>
          </tr>
        </tbody>
      </table>
    </div><br/>
    <b style="color: ${themeColor};">2. Unified Core Formula Matrix:</b><br/>
    (i) Spring period: $T = 2\\pi \\sqrt{m/k}$ &bull; Pendulum period: $T = 2\\pi \\sqrt{L/g}$<br/>
    (ii) Velocity in S.H.M: $v = \\pm \\omega \\sqrt{A^2 - x^2}$ &bull; Acceleration: $a = -\\omega^2 x$<br/>
    (iii) Energy in S.H.M: $E = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2$<br/>
    (iv) String wave speed: $v = \\sqrt{T/\\mu}$ &bull; Sound speed: $v = \\sqrt{\\gamma P/\\rho}$<br/>
    (v) Progressive wave: $y = A \\sin(kx - \\omega t)$ &bull; Standing wave: $y = -2A \\sin(kx) \\cos(\\omega t)$<br/>
    (vi) Open pipe harmonics: $f_n = n \\left( \\frac{v}{2L} \\right)$ ($1:2:3:4$) &bull; Closed pipe: $f'_n = (2n-1) \\left( \\frac{v}{4L} \\right)$ ($1:3:5$)<br/>
    (vii) Beat frequency: $f_b = |f_1 - f_2|$ ($f_b \\le 10\\text{ Hz}$ for distinct audibility)<br/><br/>
    <b style="color: ${themeColor};">3. Final Exam Traps to Avoid:</b><br/>
    - In simple pendulum problems, changing bob mass ($m$) or material has <strong>zero effect</strong> on period ($T$).<br/>
    - Atmospheric pressure changes at constant temperature have <strong>zero effect</strong> on the speed of sound.<br/>
    - In standing waves, nodes are points of zero displacement but <strong>maximum pressure variation</strong> (pressure antinodes).<br/>
    - Do not confuse beat frequency ($f_1 - f_2$) with average acoustic frequency heard $\\frac{f_1 + f_2}{2}$.
  </div>
</div>
`;

module.exports = { solutionsPart3 };
