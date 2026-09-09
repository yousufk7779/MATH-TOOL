// scripts/c11_phy_10_solutions_part2.js
const { themeColor, frac } = require('./c11_phy_10_helpers');

const solutionsPart2 = `
<!-- SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS) (Q41 TO Q80) -->
<div style="margin-top: 35px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid ${themeColor};">
  <h2 style="color: ${themeColor}; font-size: 20px; margin: 0;">SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS)</h2>
  <p style="color: #94A3B8; font-size: 13px; margin: 4px 0 0 0;">Comprehensive board numericals, S.H.M energy proofs, pendulum variations, acoustic wave properties, organ pipes, and beat problems.</p>
</div>

<!-- Q41 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q41: Kinematical Parameters of an S.H.M Equation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A particle executes linear S.H.M described by the equation $x = 5 \\sin(20\\pi t + \\pi/3)\\text{ cm}$. Determine: (a) Amplitude, (b) Angular frequency, (c) Frequency, (d) Time period, (e) Initial phase (epoch), (f) Maximum velocity, and (g) Maximum acceleration.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Comparing $x = 5 \\sin(20\\pi t + \\pi/3)$ with the standard S.H.M equation $x = A \\sin(\\omega t + \\phi_0)$:<br/>
    (a) <strong>Amplitude:</strong> $A = 5\\text{ cm} = 0.05\\text{ m}$.<br/>
    (b) <strong>Angular Frequency:</strong> $\\omega = 20\\pi\\text{ rad/s} \\approx 62.83\\text{ rad/s}$.<br/>
    (c) <strong>Frequency:</strong> $\\nu = \\frac{\\omega}{2\\pi} = \\frac{20\\pi}{2\\pi} = 10\\text{ Hz}$.<br/>
    (d) <strong>Time Period:</strong> $T = \\frac{1}{\\nu} = \\frac{1}{10} = 0.1\\text{ s}$.<br/>
    (e) <strong>Initial Phase:</strong> $\\phi_0 = \\frac{\\pi}{3}\\text{ rad}$ ($60^{\\circ}$).<br/>
    (f) <strong>Maximum Velocity:</strong> $v_{\\text{max}} = \\omega A = (20\\pi) \\times 5 = 100\\pi\\text{ cm/s} = \\pi\\text{ m/s} \\approx 3.14\\text{ m/s}$.<br/>
    (g) <strong>Maximum Acceleration:</strong> $|a_{\\text{max}}| = \\omega^2 A = (20\\pi)^2 \\times 5 = 2000\\pi^2\\text{ cm/s}^2 = 20\\pi^2\\text{ m/s}^2 \\approx 197.4\\text{ m/s}^2$.
  </div>
</div>

<!-- Q42 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q42: Time Taken to Travel from Mean Position to Half Amplitude</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A particle executes S.H.M with time period $T$ starting from the mean position. Derive the time taken by the particle to travel from the mean position ($x = 0$) to half its amplitude ($x = A/2$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Starting from the mean position at $t = 0$, the displacement is given by:
    $$x(t) = A \\sin(\\omega t)$$
    Setting $x = A/2$:
    $$\\frac{A}{2} = A \\sin(\\omega t) \\implies \\sin(\\omega t) = \\frac{1}{2}$$
    The smallest positive time corresponds to:
    $$\\omega t = \\frac{\\pi}{6}$$
    Since $\\omega = \\frac{2\\pi}{T}$:
    $$\\left( \\frac{2\\pi}{T} \\right) t = \\frac{\\pi}{6} \\implies t = \\frac{\\pi}{6} \\times \\frac{T}{2\\pi} = \\mathbf{\\frac{T}{12}}$$
    The time taken to reach half amplitude from the mean position is exactly <strong>$T/12$</strong>.
  </div>
</div>

<!-- Q43 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q43: Time Taken to Travel from Half Amplitude to Extreme Position</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> For the same particle in S.H.M with time period $T$, calculate the time taken to travel from $x = A/2$ to the extreme position $x = A$. Explain why this time is longer than the time to reach $x = A/2$ from the mean position.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Total time from mean position ($x=0$) to extreme position ($x=A$):
    $$A = A \\sin(\\omega t_{\\text{ext}}) \\implies \\omega t_{\\text{ext}} = \\frac{\\pi}{2} \\implies t_{\\text{ext}} = \\frac{T}{4}$$
    From Q42, the time to reach $x = A/2$ from $x = 0$ is $t_1 = T/12$.<br/>
    Therefore, the time to travel from $x = A/2$ to $x = A$ is:
    $$t_2 = t_{\\text{ext}} - t_1 = \\frac{T}{4} - \\frac{T}{12} = \\frac{3T - T}{12} = \\frac{2T}{12} = \\mathbf{\\frac{T}{6}}$$
    Notice that $t_2 = 2 t_1$: it takes <strong>twice as long</strong> to cover the outer half of the amplitude as the inner half.<br/>
    <strong>Physical Reason:</strong> In S.H.M, the particle decelerates continuously as it moves away from the mean position ($v = \\omega \\sqrt{A^2 - x^2}$). Its average speed over the outer interval $[A/2, A]$ is significantly lower than over the inner interval $[0, A/2]$.
  </div>
</div>

<!-- Q44 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q44: Calculation of Instantaneous Velocity in S.H.M</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A body executes S.H.M with an amplitude of $5\\text{ cm}$ and a time period of $2\\pi\\text{ seconds}$. Calculate its velocity when it is at a displacement of $3\\text{ cm}$ from the mean position.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $A = 5\\text{ cm}$, $T = 2\\pi\\text{ s}$, $x = 3\\text{ cm}$.<br/>
    Angular frequency:
    $$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{2\\pi} = 1\\text{ rad/s}$$
    Velocity at displacement $x$:
    $$v = \\pm \\omega \\sqrt{A^2 - x^2} = \\pm (1) \\sqrt{5^2 - 3^2} = \\pm \\sqrt{25 - 9} = \\pm \\sqrt{16} = \\mathbf{\\pm 4\\text{ cm/s}}$$
    The velocity of the body at $x = 3\\text{ cm}$ is <strong>$\\pm 4\\text{ cm/s}$</strong> (or $\\pm 0.04\\text{ m/s}$).
  </div>
</div>

<!-- Q45 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q45: Time Period of Mass Attached to Springs in Series vs Parallel</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A mass $m$ is attached to two springs of force constants $k_1$ and $k_2$. Find the effective time period when the springs are connected: (a) In parallel, and (b) In series.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">(a) Parallel Combination:</b><br/>
    Both springs stretch by the same displacement $x$. The restoring forces add directly:
    $$F = -(k_1 + k_2) x \\implies k_{\\text{eq}} = k_1 + k_2$$
    $$\\mathbf{T_p = 2\\pi \\sqrt{\\frac{m}{k_1 + k_2}}}$$
    <b style="color: ${themeColor};">(b) Series Combination:</b><br/>
    Both springs experience the same tension $F$, while total elongation is $x = x_1 + x_2$:
    $$x = \\frac{F}{k_1} + \\frac{F}{k_2} = F \\left( \\frac{1}{k_1} + \\frac{1}{k_2} \\right) \\implies k_{\\text{eq}} = \\frac{k_1 k_2}{k_1 + k_2}$$
    $$\\mathbf{T_s = 2\\pi \\sqrt{\\frac{m(k_1 + k_2)}{k_1 k_2}}}$$
    Notice that $T_s > T_p$ because the series combination is less stiff ($k_{\\text{series}} < k_{\\text{parallel}}$).
  </div>
</div>

<!-- Q46 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q46: Vertical Spring Extension and Oscillation Period</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A light spring suspended vertically extends by $4.9\\text{ cm}$ when a mass of $200\\text{ g}$ is hung from it. Calculate: (a) The force constant of the spring, and (b) The time period of vertical oscillations when the mass is pulled down slightly and released. ($g = 9.8\\text{ m/s}^2$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $m = 200\\text{ g} = 0.2\\text{ kg}$, $\\Delta l = 4.9\\text{ cm} = 0.049\\text{ m}$, $g = 9.8\\text{ m/s}^2$.<br/>
    <b style="color: ${themeColor};">(a) Force Constant ($k$):</b><br/>
    At static equilibrium:
    $$k \\Delta l = m g \\implies k = \\frac{m g}{\\Delta l} = \\frac{0.2 \\times 9.8}{0.049} = \\frac{1.96}{0.049} = \\mathbf{40\\text{ N/m}}$$
    <b style="color: ${themeColor};">(b) Time Period ($T$):</b><br/>
    $$T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{0.2}{40}} = 2\\pi \\sqrt{\\frac{1}{200}} = \\frac{2\\pi}{10\\sqrt{2}} = \\frac{\\pi \\sqrt{2}}{10}$$
    Alternatively, using $T = 2\\pi \\sqrt{\\frac{\\Delta l}{g}}$:
    $$T = 2\\pi \\sqrt{\\frac{0.049}{9.8}} = 2\\pi \\sqrt{\\frac{1}{200}} = 2 \\times 3.1416 \\times 0.07071 \\approx \\mathbf{0.444\\text{ seconds}}$$
  </div>
</div>

<!-- Q47 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q47: Simple Pendulum in an Accelerating Elevator</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A simple pendulum of length $L$ is mounted inside an elevator. Deduce its time period when the elevator: (a) Accelerates upward with acceleration $a$, and (b) Accelerates downward with acceleration $a$ ($a < g$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    In an accelerating reference frame, an oscillating bob experiences a pseudo-force $-m\\vec{a}$ in addition to the real gravitational force $m\\vec{g}$. The effective acceleration due to gravity is $\\vec{g}_{\\text{eff}} = \\vec{g} - \\vec{a}$.<br/><br/>
    <b style="color: ${themeColor};">(a) Elevator Accelerating Upward with $a$:</b><br/>
    The pseudo-force acts downward, reinforcing gravity:
    $$g_{\\text{eff}} = g + a$$
    $$\\mathbf{T = 2\\pi \\sqrt{\\frac{L}{g + a}}}$$
    Since $g_{\\text{eff}} > g$, the time period <strong>decreases</strong> (the pendulum swings faster, so a pendulum clock gains time).<br/><br/>
    <b style="color: ${themeColor};">(b) Elevator Accelerating Downward with $a$ ($a < g$):</b><br/>
    The pseudo-force acts upward, opposing gravity:
    $$g_{\\text{eff}} = g - a$$
    $$\\mathbf{T = 2\\pi \\sqrt{\\frac{L}{g - a}}}$$
    Since $g_{\\text{eff}} < g$, the time period <strong>increases</strong> (the pendulum swings slower, clock loses time).
  </div>
</div>

<!-- Q48 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q48: Behavior of a Simple Pendulum in Free Fall and Orbiting Satellite</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain what happens to the time period of a simple pendulum inside: (a) A freely falling elevator, and (b) An artificial satellite orbiting Earth.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">(a) Freely Falling Elevator:</b><br/>
    The downward acceleration is $a = g$. The effective gravitational acceleration is:
    $$g_{\\text{eff}} = g - a = g - g = 0$$
    Substituting into the period formula:
    $$T = 2\\pi \\sqrt{\\frac{L}{g_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{L}{0}} \\to \\mathbf{\\infty}$$
    An infinite time period means the bob never completes an oscillation: if displaced, it remains stuck at that displaced angle or floats freely in a state of apparent weightlessness.<br/><br/>
    <b style="color: ${themeColor};">(b) Artificial Satellite Orbiting Earth:</b><br/>
    An orbiting satellite is in continuous free-fall toward Earth under centripetal gravitational acceleration ($a_c = g$). Hence $g_{\\text{eff}} = 0$, and the pendulum has $T \\to \\infty$. A simple pendulum cannot function inside an orbiting spacecraft.
  </div>
</div>

<!-- Q49 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q49: Percentage Increase in Pendulum Period for a 44% Length Increase</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> If the effective length of a simple pendulum is increased by $44\\%$, calculate the percentage change in its time period.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Initial time period: $T_1 = 2\\pi \\sqrt{\\frac{L_1}{g}}$.<br/>
    New length: $L_2 = L_1 + 0.44 L_1 = 1.44 L_1$.<br/>
    New time period:
    $$T_2 = 2\\pi \\sqrt{\\frac{1.44 L_1}{g}} = \\sqrt{1.44} \\left( 2\\pi \\sqrt{\\frac{L_1}{g}} \\right) = 1.20 T_1$$
    Fractional change in period:
    $$\\frac{\\Delta T}{T_1} = \\frac{T_2 - T_1}{T_1} = \\frac{1.20 T_1 - T_1}{T_1} = 0.20$$
    Percentage increase:
    $$\\text{Percentage Increase} = 0.20 \\times 100\\% = \\mathbf{20\\%}$$
    The time period increases by exactly <strong>$20\\%$</strong>.
  </div>
</div>

<!-- Q50 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q50: Energy Curves vs Displacement in S.H.M</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the spatial variations of kinetic energy ($E_k$), potential energy ($U$), and total energy ($E$) with displacement $x$ in S.H.M. Specify their values at $x = 0$, $x = \\pm A/\\sqrt{2}$, and $x = \\pm A$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    In S.H.M, the energies as functions of displacement $x$ are:<br/>
    - Potential Energy: $U(x) = \\frac{1}{2} k x^2$ (a parabola opening upward, vertex at $x=0$).<br/>
    - Kinetic Energy: $E_k(x) = \\frac{1}{2} k (A^2 - x^2)$ (an inverted parabola opening downward, peak at $x=0$).<br/>
    - Total Energy: $E = U(x) + E_k(x) = \\frac{1}{2} k A^2$ (a straight horizontal line parallel to the $x$-axis).<br/><br/>
    <b style="color: ${themeColor};">Key Cardinal Points:</b><br/>
    1. <strong>At Mean Position ($x = 0$):</strong><br/>
       $U = 0, \\quad E_k = \\frac{1}{2} k A^2 = E$. Entire energy is purely kinetic.<br/>
    2. <strong>At Equipartition Points ($x = \\pm \\frac{A}{\\sqrt{2}}$):</strong><br/>
       $U = \\frac{1}{2} k \\left(\\frac{A}{\\sqrt{2}}\\right)^2 = \\frac{1}{4} k A^2 = \\frac{E}{2}$.<br/>
       $E_k = \\frac{1}{2} k \\left( A^2 - \\frac{A^2}{2} \\right) = \\frac{1}{4} k A^2 = \\frac{E}{2}$.<br/>
       Kinetic and potential energies are equal ($E_k = U = E/2$). The curves intersect at these points.<br/>
    3. <strong>At Extreme Positions ($x = \\pm A$):</strong><br/>
       $E_k = 0, \\quad U = \\frac{1}{2} k A^2 = E$. Entire energy is purely potential.
  </div>
</div>

<!-- Q51 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q51: Average Kinetic and Potential Energies Over a Complete Cycle</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Show that in Simple Harmonic Motion, the time average of kinetic energy and the time average of potential energy over one full cycle are both equal to $\\frac{1}{4} k A^2 = \\frac{1}{2} E$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Let $x(t) = A \\cos(\\omega t)$. Then $v(t) = -\\omega A \\sin(\\omega t)$.<br/>
    Instantaneous kinetic energy: $E_k(t) = \\frac{1}{2} m v^2 = \\frac{1}{2} m \\omega^2 A^2 \\sin^2(\\omega t) = \\frac{1}{2} k A^2 \\sin^2(\\omega t)$.<br/>
    Instantaneous potential energy: $U(t) = \\frac{1}{2} k x^2 = \\frac{1}{2} k A^2 \\cos^2(\\omega t)$.<br/><br/>
    The time average of any function over period $T$ is $\\langle f \\rangle = \\frac{1}{T} \\int_{0}^{T} f(t) dt$.<br/>
    Using standard cycle integrals:
    $$\\langle \\sin^2(\\omega t) \\rangle = \\frac{1}{T} \\int_{0}^{T} \\sin^2(\\omega t) dt = \\frac{1}{2}, \\quad \\langle \\cos^2(\\omega t) \\rangle = \\frac{1}{2}$$
    Therefore:
    $$\\mathbf{\\langle E_k \\rangle = \\frac{1}{2} k A^2 \\left( \\frac{1}{2} \\right) = \\frac{1}{4} k A^2 = \\frac{1}{2} E}$$
    $$\\mathbf{\\langle U \\rangle = \\frac{1}{2} k A^2 \\left( \\frac{1}{2} \\right) = \\frac{1}{4} k A^2 = \\frac{1}{2} E}$$
    Thus, $\\langle E_k \\rangle = \\langle U \\rangle = \\frac{E}{2}$. Over time, energy is partitioned equally between kinetic and potential forms.
  </div>
</div>

<!-- Q52 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q52: S.H.M as Projection of Uniform Circular Motion on a Diameter</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe how linear Simple Harmonic Motion can be represented geometrically as the projection of uniform circular motion on a diameter of the reference circle.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Consider a particle $P$ moving with constant angular velocity $\\omega$ in a counterclockwise direction around a circle of radius $A$ (called the <strong>reference circle</strong>).<br/>
    2. Let the initial position vector at $t = 0$ make an angle $\\phi_0$ with the positive $x$-axis. At time $t$, the angle rotated is $\\theta(t) = \\omega t + \\phi_0$.<br/>
    3. Drop a perpendicular from $P$ onto the horizontal diameter ($x$-axis). The foot of this perpendicular is point $N$.<br/>
    4. The position coordinate of $N$ is:
    $$x(t) = A \\cos(\\omega t + \\phi_0)$$
    5. Differentiating with respect to time gives the velocity of $N$:
    $$v_N = \\frac{dx}{dt} = -\\omega A \\sin(\\omega t + \\phi_0)$$
    which is precisely the projection of the tangential linear velocity vector $\\vec{v}_T$ of particle $P$ onto the $x$-axis.<br/>
    6. Differentiating again gives the acceleration of $N$:
    $$a_N = -\\omega^2 A \\cos(\\omega t + \\phi_0) = -\\omega^2 x$$
    which is the projection of the centripetal acceleration vector $\\vec{a}_c = \\omega^2 A$ directed toward the center of the circle.<br/>
    7. This proves that the foot of the perpendicular $N$ executes pure Simple Harmonic Motion about the center $O$ with amplitude $A$ and angular frequency $\\omega$.
  </div>
</div>

<!-- Q53 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q53: Damped Oscillations and Exponential Decay of Amplitude</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What are damped oscillations? State the physical causes of damping, write the differential equation of a damped harmonic oscillator, and describe how amplitude varies with time.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Definition:</b> Oscillations whose amplitude decreases continuously with time due to energy dissipation against resistive forces are called <strong>damped oscillations</strong>.<br/>
    <b style="color: ${themeColor};">2. Physical Causes:</b> Air resistance, viscous drag of fluids, and internal molecular friction in the elastic spring or string.<br/>
    <b style="color: ${themeColor};">3. Differential Equation:</b><br/>
    For moderate speeds, the damping force is proportional to velocity: $F_d = -b v = -b \\frac{dx}{dt}$ (where $b$ is the damping coefficient).<br/>
    Net force: $F_{\\text{net}} = -kx - b \\frac{dx}{dt}$.<br/>
    By Newton's Second Law: $m \\frac{d^2x}{dt^2} + b \\frac{dx}{dt} + kx = 0$, or:
    $$\\mathbf{\\frac{d^2x}{dt^2} + 2\\gamma \\frac{dx}{dt} + \\omega_0^2 x = 0}$$
    where $2\\gamma = \\frac{b}{m}$ and $\\omega_0 = \\sqrt{\\frac{k}{m}}$ is the natural undamped frequency.<br/>
    <b style="color: ${themeColor};">4. Amplitude Decay:</b><br/>
    For light damping ($\gamma < \\omega_0$), the displacement is:
    $$x(t) = A_0 e^{-\\gamma t} \\cos(\\omega' t + \\phi)$$
    The effective amplitude decays exponentially with time:
    $$\\mathbf{A(t) = A_0 e^{-\\frac{b}{2m} t}}$$
    The modified frequency is slightly lower than the natural frequency: $\\omega' = \\sqrt{\\omega_0^2 - \\gamma^2}$.
  </div>
</div>

<!-- Q54 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q54: Forced Oscillations and Condition for Resonance</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Distinguish between free oscillations, forced oscillations, and resonance. State the condition under which amplitude resonance occurs and explain the role of damping on the sharpness of resonance.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Free Oscillations:</b> An oscillator displaced from equilibrium and released oscillates at its own natural frequency $\\omega_0 = \\sqrt{k/m}$ without any external driving force.<br/>
    <b style="color: ${themeColor};">2. Forced Oscillations:</b> When an oscillator is driven by a periodic external driving force $F(t) = F_0 \\cos(\\omega_d t)$, it eventually oscillates at the driving frequency $\\omega_d$ rather than its natural frequency $\\omega_0$.<br/>
    <b style="color: ${themeColor};">3. Resonance:</b><br/>
    When the external driving frequency matches the natural frequency of the oscillator:
    $$\\mathbf{\\omega_d = \\omega_0}$$
    the system absorbs energy at the maximum possible rate from the driver, and the steady-state amplitude of oscillation reaches a dramatic maximum. This phenomenon is called <strong>resonance</strong>.<br/>
    <b style="color: ${themeColor};">4. Sharpness of Resonance:</b><br/>
    The peak amplitude at resonance is given by $A_{\\text{res}} = \\frac{F_0}{b \\omega_0}$.<br/>
    - <strong>Small Damping ($b \\to 0$):</strong> The resonance curve is exceptionally tall, narrow, and sharp (high quality factor $Q$).<br/>
    - <strong>Large Damping:</strong> The peak amplitude is severely suppressed, and the resonance curve becomes broad and flat.
  </div>
</div>

<!-- Q55 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q55: Extraction of Parameters from a Progressive Wave Equation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A transverse harmonic progressive wave travelling along a string is described by: $y(x,t) = 0.04 \\sin(100\\pi t - 2\\pi x)\\text{ m}$ (where $x, y$ are in meters and $t$ in seconds). Find: (a) Amplitude, (b) Angular frequency, (c) Wave number, (d) Wavelength, (e) Frequency, (f) Wave speed, and (g) Maximum particle velocity.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Comparing with $y(x,t) = A \\sin(\\omega t - kx)$:<br/>
    (a) <strong>Amplitude:</strong> $A = 0.04\\text{ m} = 4\\text{ cm}$.<br/>
    (b) <strong>Angular Frequency:</strong> $\\omega = 100\\pi\\text{ rad/s} \\approx 314.16\\text{ rad/s}$.<br/>
    (c) <strong>Wave Number (Propagation Constant):</strong> $k = 2\\pi\\text{ m}^{-1} \\approx 6.28\\text{ m}^{-1}$.<br/>
    (d) <strong>Wavelength:</strong> $\\lambda = \\frac{2\\pi}{k} = \\frac{2\\pi}{2\\pi} = \\mathbf{1.0\\text{ m}}$.<br/>
    (e) <strong>Frequency:</strong> $\\nu = \\frac{\\omega}{2\\pi} = \\frac{100\\pi}{2\\pi} = \\mathbf{50\\text{ Hz}}$.<br/>
    (f) <strong>Wave Speed:</strong> $v = \\frac{\\omega}{k} = \\frac{100\\pi}{2\\pi} = \\mathbf{50\\text{ m/s}}$ (or $v = \\nu \\lambda = 50 \\times 1 = 50\\text{ m/s}$).<br/>
    (g) <strong>Maximum Particle Velocity:</strong> $v_{p,\\text{max}} = \\omega A = 100\\pi \\times 0.04 = 4\\pi\\text{ m/s} \\approx \\mathbf{12.57\\text{ m/s}}$.
  </div>
</div>

<!-- Q56 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q56: Relation Between Path Difference and Phase Difference</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Establish the relationship between path difference ($\\Delta x$) and phase difference ($\\Delta \\phi$) between two points in the path of a progressive wave of wavelength $\\lambda$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. A spatial distance equal to one full wavelength $\\lambda$ corresponds to a complete wave cycle, which is equivalent to a phase shift of $2\\pi\\text{ radians}$ ($360^{\\circ}$).<br/>
    2. Therefore, a path difference of $1$ unit corresponds to a phase difference of $\\frac{2\\pi}{\\lambda}$.<br/>
    3. For any arbitrary path difference $\\Delta x$:
    $$\\mathbf{\\Delta \\phi = \\left( \\frac{2\\pi}{\\lambda} \\right) \\Delta x = k \\Delta x}$$
    where $k = \\frac{2\\pi}{\\lambda}$ is the angular wave number.<br/>
    For example:
    - Path difference $\\Delta x = \\lambda / 2 \\implies \\Delta \\phi = \\pi\\text{ rad}$ ($180^{\\circ}$, destructive/opposite phase).<br/>
    - Path difference $\\Delta x = \\lambda \\implies \\Delta \\phi = 2\\pi\\text{ rad}$ ($360^{\\circ}$, constructive/in-phase).
  </div>
</div>

<!-- Q57 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q57: Relation Between Time Difference and Phase Difference</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive the relation between the phase difference ($\\Delta \\phi$) of a vibrating particle at two different instants separated by time interval $\\Delta t$ in terms of time period $T$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. A time interval equal to one full period $T$ corresponds to one complete harmonic cycle, which introduces a phase angle change of $2\\pi\\text{ radians}$.<br/>
    2. By unitary method, a time interval of $1$ second corresponds to a phase change of $\\frac{2\\pi}{T} = \\omega$.<br/>
    3. For any arbitrary time difference $\\Delta t$:
    $$\\mathbf{\\Delta \\phi = \\left( \\frac{2\\pi}{T} \\right) \\Delta t = \\omega \\Delta t}$$
    For example:
    - If $\\Delta t = T/4$, $\\Delta \\phi = \\frac{2\\pi}{T} \\left( \\frac{T}{4} \\right) = \\frac{\\pi}{2}\\text{ rad}$ ($90^{\\circ}$).<br/>
    - If $\\Delta t = T/2$, $\\Delta \\phi = \\pi\\text{ rad}$ ($180^{\\circ}$).
  </div>
</div>

<!-- Q58 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q58: Ratio of Speed of Sound in Hydrogen and Oxygen Gases</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Compare the speed of sound in hydrogen gas to that in oxygen gas at the same temperature. Both are diatomic gases with $\\gamma = 1.4$. ($M_{\\text{H}_2} = 2\\text{ g/mol}, M_{\\text{O}_2} = 32\\text{ g/mol}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    By Laplace's formula, the speed of sound in an ideal gas of molar mass $M$ at temperature $T$ is:
    $$v = \\sqrt{\\frac{\\gamma R T}{M}}$$
    Since both gases are diatomic ($\\gamma$ identical) and held at the same temperature $T$:
    $$v \\propto \\frac{1}{\\sqrt{M}}$$
    Taking the ratio:
    $$\\frac{v_{\\text{H}_2}}{v_{\\text{O}_2}} = \\sqrt{\\frac{M_{\\text{O}_2}}{M_{\\text{H}_2}}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = \\mathbf{4}$$
    Sound travels <strong>4 times faster in hydrogen</strong> than in oxygen at the same temperature.
  </div>
</div>

<!-- Q59 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q59: Independence of Speed of Sound on Pressure at Constant Temperature</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain clearly why the speed of sound in a gas is completely independent of pressure, provided temperature remains constant.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. By Laplace's formula, the speed of sound in a gas of pressure $P$ and density $\\rho$ is:
    $$v = \\sqrt{\\frac{\\gamma P}{\\rho}}$$
    2. According to Boyle's Law, at constant temperature:
    $$P V = \\text{constant} \\implies P \\left(\\frac{M}{\\rho}\\right) = \\text{constant} \\implies \\frac{P}{\\rho} = \\text{constant}$$
    3. When pressure is doubled ($P \\to 2P$), the volume is compressed to half, which exactly doubles the density ($\\rho \\to 2\\rho$).<br/>
    4. The ratio $\\frac{P}{\\rho}$ remains strictly invariant:
    $$\\frac{2P}{2\\rho} = \\frac{P}{\\rho}$$
    Therefore, varying the atmospheric pressure at constant temperature produces <strong>zero change</strong> in the speed of sound.
  </div>
</div>

<!-- Q60 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q60: Effect of Temperature on Sound Speed and $0.61\\text{ m/s}$ Rule</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Show that the speed of sound in air increases by approximately $0.61\\text{ m/s}$ for every $1^{\\circ}\\text{C}$ rise in temperature above $0^{\\circ}\\text{C}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    From $v = \\sqrt{\\frac{\\gamma R T}{M}}$, sound speed is directly proportional to the square root of absolute temperature: $v \\propto \\sqrt{T}$.<br/>
    Let $v_0$ be the speed at $0^{\\circ}\\text{C}$ ($T_0 = 273.15\\text{ K}$), where $v_0 \\approx 332\\text{ m/s}$.<br/>
    At temperature $t^{\\circ}\\text{C}$, absolute temperature is $T = 273.15 + t$:
    $$\\frac{v_t}{v_0} = \\sqrt{\\frac{273.15 + t}{273.15}} = \\left( 1 + \\frac{t}{273.15} \\right)^{1/2}$$
    Using binomial expansion $(1 + x)^{1/2} \\approx 1 + \\frac{x}{2}$ for $t \\ll 273$:
    $$v_t \\approx v_0 \\left( 1 + \\frac{t}{2 \\times 273.15} \\right) = v_0 + \\left( \\frac{v_0}{546.3} \\right) t$$
    Substituting $v_0 = 332\\text{ m/s}$:
    $$\\frac{v_0}{546.3} = \\frac{332}{546.3} \\approx 0.6078\\text{ m/s per }^{\\circ}\\text{C} \\approx 0.61\\text{ m/s}$$
    $$\\mathbf{v_t \\approx v_0 + 0.61 t}$$
    Thus, sound speed increases by approximately <strong>$0.61\\text{ m/s}$</strong> for every $1^{\\circ}\\text{C}$ rise in temperature.
  </div>
</div>

<!-- Q61 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q61: Why Sound Travels Faster in Humid Air than in Dry Air</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain why the speed of sound is higher in humid (moist) air than in completely dry air at the same temperature and pressure.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. By Laplace's formula, the speed of sound is inversely proportional to the square root of gas density:
    $$v = \\sqrt{\\frac{\\gamma P}{\\rho}} \\implies v \\propto \\frac{1}{\\sqrt{\\rho}}$$
    2. Dry air consists primarily of Nitrogen (N$_2$, molar mass $28\\text{ g/mol}$) and Oxygen (O$_2$, molar mass $32\\text{ g/mol}$), giving an effective molar mass of $M_{\\text{dry}} \\approx 28.8\\text{ g/mol}$.<br/>
    3. Water vapor consists of H$_2$O molecules with molar mass $M_{\\text{H}_2\\text{O}} = 18\\text{ g/mol}$, which is significantly lighter than dry air.<br/>
    4. When air becomes humid, lighter water vapor molecules displace heavier N$_2$ and O$_2$ molecules at a given pressure and temperature. Consequently, the density of moist air is lower than that of dry air:
    $$\\rho_{\\text{moist}} < \\rho_{\\text{dry}}$$
    5. Because density is lower, sound travels faster through humid air ($v_{\\text{moist}} > v_{\\text{dry}}$). That is why sounds are heard more clearly and across greater distances on humid or rainy days.
  </div>
</div>

<!-- Q62 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q62: Formation of Stationary Waves on a Stretched String: Conditions for Nodes & Antinodes</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Show mathematically that the superposition of two counter-propagating waves $y_1 = A \\sin(kx - \\omega t)$ and $y_2 = -A \\sin(kx + \\omega t)$ results in a standing wave. Derive the spatial coordinates of nodes and antinodes.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    By the Principle of Superposition:
    $$y = y_1 + y_2 = A [\\sin(kx - \\omega t) - \\sin(kx + \\omega t)]$$
    Using the trigonometric identity $\\sin(A - B) - \\sin(A + B) = -2 \\sin B \\cos A$:
    $$y = -2A \\sin(kx) \\cos(\\omega t)$$
    The resultant amplitude at position $x$ is $R(x) = 2A \\sin(kx)$.<br/><br/>
    <b style="color: ${themeColor};">1. Condition for Nodes ($R = 0$):</b><br/>
    Displacement is permanently zero where:
    $$\\sin(kx) = 0 \\implies kx = n\\pi \\quad (n = 0, 1, 2, \\dots)$$
    Since $k = 2\\pi / \\lambda$:
    $$\\left( \\frac{2\\pi}{\\lambda} \\right) x = n\\pi \\implies \\mathbf{x = 0, \\frac{\\lambda}{2}, \\lambda, \\frac{3\\lambda}{2}, \\dots, \\frac{n\\lambda}{2}}$$
    <b style="color: ${themeColor};">2. Condition for Antinodes ($|R| = 2A$):</b><br/>
    Displacement amplitude is maximum where:
    $$\\sin(kx) = \\pm 1 \\implies kx = (2n - 1) \\frac{\\pi}{2} \\quad (n = 1, 2, 3, \\dots)$$
    $$\\left( \\frac{2\\pi}{\\lambda} \\right) x = (2n - 1) \\frac{\\pi}{2} \\implies \\mathbf{x = \\frac{\\lambda}{4}, \\frac{3\\lambda}{4}, \\frac{5\\lambda}{4}, \\dots, (2n-1) \\frac{\\lambda}{4}}$$
  </div>
</div>

<!-- Q63 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q63: Separation Distances in Standing Waves</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> From the coordinates of nodes and antinodes derived in Q62, deduce: (a) The distance between two consecutive nodes, (b) The distance between two consecutive antinodes, and (c) The distance between an adjacent node and antinode.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    (a) <strong>Distance between two consecutive nodes:</strong><br/>
    Node positions: $x_n = n \\frac{\\lambda}{2}$ and $x_{n+1} = (n+1) \\frac{\\lambda}{2}$.
    $$\\Delta x_{NN} = x_{n+1} - x_n = (n+1) \\frac{\\lambda}{2} - n \\frac{\\lambda}{2} = \\mathbf{\\frac{\\lambda}{2}}$$
    (b) <strong>Distance between two consecutive antinodes:</strong><br/>
    Antinode positions: $x_n = (2n-1) \\frac{\\lambda}{4}$ and $x_{n+1} = (2n+1) \\frac{\\lambda}{4}$.
    $$\\Delta x_{AA} = (2n+1) \\frac{\\lambda}{4} - (2n-1) \\frac{\\lambda}{4} = \\frac{2\\lambda}{4} = \\mathbf{\\frac{\\lambda}{2}}$$
    (c) <strong>Distance between adjacent node and antinode:</strong><br/>
    For the first node ($x = 0$) and first antinode ($x = \\lambda/4$):
    $$\\Delta x_{NA} = \\frac{\\lambda}{4} - 0 = \\mathbf{\\frac{\\lambda}{4}}$$
  </div>
</div>

<!-- Q64 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q64: Harmonics of a Stretched String Fixed at Both Ends</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A string of length $L$ fixed at both ends has wave speed $v$. Derive the frequencies of its fundamental mode, first overtone, and second overtone, and state the ratio of these frequencies.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Since both ends ($x=0$ and $x=L$) are clamped, they must both be nodes. Hence length $L$ must contain an integer number of half-wavelengths: $L = n \\left(\\frac{\\lambda_n}{2}\\right) \\implies \\lambda_n = \\frac{2L}{n}$.<br/><br/>
    1. <b style="color: ${themeColor};">Fundamental Mode ($n = 1$, 1st Harmonic):</b><br/>
       String vibrates in 1 loop ($2$ nodes at ends, $1$ antinode in middle).<br/>
       $\\lambda_1 = 2L \\implies \\mathbf{f_1 = \\frac{v}{2L}}$.<br/><br/>
    2. <b style="color: ${themeColor};">First Overtone ($n = 2$, 2nd Harmonic):</b><br/>
       String vibrates in 2 loops ($3$ nodes, $2$ antinodes).<br/>
       $\\lambda_2 = L \\implies \\mathbf{f_2 = \\frac{v}{L} = 2 f_1}$.<br/><br/>
    3. <b style="color: ${themeColor};">Second Overtone ($n = 3$, 3rd Harmonic):</b><br/>
       String vibrates in 3 loops ($4$ nodes, $3$ antinodes).<br/>
       $\\lambda_3 = \\frac{2L}{3} \\implies \\mathbf{f_3 = \\frac{3v}{2L} = 3 f_1}$.<br/><br/>
    <strong>Frequency Ratio:</strong>
    $$\\mathbf{f_1 : f_2 : f_3 : \\dots = 1 : 2 : 3 : \\dots}$$
    All integer multiples of the fundamental frequency are physically permitted.
  </div>
</div>

<!-- Q65 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q65: The Three Laws of Transverse Vibrations of Stretched Strings (Sonometer Laws)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State and formulate the three fundamental laws of transverse vibrations of a stretched string (Sonometer Laws) derived from $f = \\frac{1}{2L} \\sqrt{\\frac{T}{\\mu}}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    The fundamental frequency of a stretched string is $f = \\frac{1}{2L} \\sqrt{\\frac{T}{\\mu}}$. From this expression, three experimental laws follow:<br/><br/>
    1. <b style="color: ${themeColor};">Law of Length:</b><br/>
       For a given tension $T$ and linear mass density $\\mu$, the fundamental frequency is inversely proportional to the vibrating length:
       $$\\mathbf{f \\propto \\frac{1}{L}} \\iff f L = \\text{constant}$$
    2. <b style="color: ${themeColor};">Law of Tension:</b><br/>
       For a given length $L$ and linear mass density $\\mu$, the fundamental frequency is directly proportional to the square root of tension:
       $$\\mathbf{f \\propto \\sqrt{T}} \\iff \\frac{f}{\\sqrt{T}} = \\text{constant}$$
    3. <b style="color: ${themeColor};">Law of Linear Mass Density:</b><br/>
       For a given length $L$ and tension $T$, the fundamental frequency is inversely proportional to the square root of mass per unit length:
       $$\\mathbf{f \\propto \\frac{1}{\\sqrt{\\mu}}} \\iff f \\sqrt{\\mu} = \\text{constant}$$
       In terms of string radius $r$ and density $\\rho$ (since $\\mu = \\pi r^2 \\rho$): $f \\propto \\frac{1}{r \\sqrt{\\rho}}$.
  </div>
</div>

<!-- Q66 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q66: Open Organ Pipe: Proof that All Harmonics are Present</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the standing wave modes in an organ pipe open at both ends. Prove that both odd and even harmonics are generated, and find the frequencies of the first three modes.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    In an open organ pipe of length $L$, air molecules at both open ends have maximum vibrational amplitude, so <strong>antinodes form at both ends</strong>.<br/>
    For $n$ loops, the distance between two open ends must be an integer multiple of $\\lambda/2$:
    $$L = n \\left( \\frac{\\lambda_n}{2} \\right) \\implies \\lambda_n = \\frac{2L}{n} \\quad (n = 1, 2, 3, \\dots)$$
    The permitted natural frequencies are:
    $$\\mathbf{f_n = \\frac{v}{\\lambda_n} = n \\left( \\frac{v}{2L} \\right) = n f_1}$$
    - <b style="color: ${themeColor};">Fundamental Mode ($n=1$):</b> $f_1 = \\frac{v}{2L}$ (Antinode at ends, Node at center).<br/>
    - <b style="color: ${themeColor};">First Overtone ($n=2$):</b> $f_2 = 2 \\left( \\frac{v}{2L} \\right) = 2 f_1$ (2nd Harmonic).<br/>
    - <b style="color: ${themeColor};">Second Overtone ($n=3$):</b> $f_3 = 3 \\left( \\frac{v}{2L} \\right) = 3 f_1$ (3rd Harmonic).<br/>
    The harmonic ratio is $f_1 : f_2 : f_3 : \\dots = 1 : 2 : 3 : \\dots$, proving that <strong>all integer harmonics are physically produced</strong> in an open pipe.
  </div>
</div>

<!-- Q67 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q67: Closed Organ Pipe: Proof that Only Odd Harmonics are Present</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the standing wave modes in an organ pipe closed at one end and open at the other. Prove that only odd harmonics are generated, and compare its fundamental frequency with that of an open pipe of the same length.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    In a closed organ pipe of length $L$, the closed end imposes zero particle displacement (<strong>Node</strong>), while the open end allows maximum displacement (<strong>Antinode</strong>).<br/>
    The distance from a node to an antinode must be an odd multiple of quarter-wavelengths:
    $$L = (2n - 1) \\frac{\\lambda_n}{4} \\implies \\lambda_n = \\frac{4L}{2n - 1} \\quad (n = 1, 2, 3, \\dots)$$
    The permitted natural frequencies are:
    $$\\mathbf{f'_n = \\frac{v}{\\lambda_n} = (2n - 1) \\left( \\frac{v}{4L} \\right) = (2n - 1) f'_1}$$
    - <b style="color: ${themeColor};">Fundamental Mode ($n=1$):</b> $f'_1 = \\frac{v}{4L}$.<br/>
    - <b style="color: ${themeColor};">First Overtone ($n=2$):</b> $f'_2 = 3 \\left( \\frac{v}{4L} \\right) = 3 f'_1$ (3rd Harmonic).<br/>
    - <b style="color: ${themeColor};">Second Overtone ($n=3$):</b> $f'_3 = 5 \\left( \\frac{v}{4L} \\right) = 5 f'_1$ (5th Harmonic).<br/>
    The harmonic ratio is:
    $$\\mathbf{f'_1 : f'_2 : f'_3 : \\dots = 1 : 3 : 5 : \\dots}$$
    Only <strong>odd harmonics</strong> are present; all even harmonics ($2f_1, 4f_1, \\dots$) are completely absent.<br/>
    <b style="color: ${themeColor};">Comparison:</b><br/>
    $$f'_1(\\text{closed}) = \\frac{v}{4L} = \\frac{1}{2} \\left( \\frac{v}{2L} \\right) = \\frac{1}{2} f_1(\\text{open})$$
    The fundamental pitch of a closed pipe is exactly <strong>one octave lower</strong> (half frequency) than that of an open pipe of identical length.
  </div>
</div>

<!-- Q68 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q68: Why Open Organ Pipes Sound Musically Superior to Closed Pipes</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> From acoustic principles, explain why the musical sound produced by an open organ pipe is richer, warmer, and more pleasing to the ear than that produced by a closed organ pipe.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. The musical quality, or <strong>timbre (tone color)</strong>, of a sound depends directly on the number and relative intensities of overtones and harmonics accompanying the fundamental note.<br/>
    2. An open organ pipe produces <strong>all harmonics</strong> ($1, 2, 3, 4, 5, \\dots$). The presence of both even and odd overtones provides a rich, balanced, and harmonically full sound spectrum.<br/>
    3. A closed organ pipe produces <strong>only odd harmonics</strong> ($1, 3, 5, 7, \\dots$). Because all even harmonics are completely missing, the frequency gaps between consecutive overtones are twice as wide ($2f_1$ instead of $f_1$), producing a hollow, somber, and nasal acoustic tone.<br/>
    4. Therefore, musical instruments based on open tubes (e.g. flutes, open brasses) possess a much richer and more melodious timbre than closed tubes (e.g. panpipes, clarinets).
  </div>
</div>

<!-- Q69 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q69: End Correction in Organ Pipes (Rayleigh's Formula)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is meant by End Correction in organ pipes? State Lord Rayleigh's formula and write the corrected expressions for the effective lengths and fundamental frequencies of open and closed pipes.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. In real organ pipes, air molecules just outside the open lip of the tube participate in the vibration. Consequently, the boundary antinode does not form exactly at the physical edge of the tube, but slightly outside at an effective distance $e$.<br/>
    2. This distance $e$ is called the <strong>end correction</strong>. According to Lord Rayleigh:
    $$\\mathbf{e = 0.6 r}$$
    where $r$ is the internal radius of the pipe.<br/><br/>
    <b style="color: ${themeColor};">Corrected Lengths and Frequencies:</b><br/>
    - <b style="color: ${themeColor};">Closed Organ Pipe:</b> Has 1 open end:
      $$L_{\\text{eff}} = L + e = L + 0.6 r$$
      $$f_{\\text{closed}} = \\frac{v}{4(L + 0.6 r)}$$
    - <b style="color: ${themeColor};">Open Organ Pipe:</b> Has 2 open ends:
      $$L_{\\text{eff}} = L + 2e = L + 2(0.6 r) = L + 1.2 r$$
      $$f_{\\text{open}} = \\frac{v}{2(L + 1.2 r)}$$
    Accounting for end correction slightly lowers the actual resonant frequencies.
  </div>
</div>

<!-- Q70 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q70: Determination of Speed of Sound by Resonance Tube Experiment</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> In a resonance tube experiment using a tuning fork of known frequency $\\nu$, the first and second resonances occur at air column lengths $l_1$ and $l_2$ respectively. Derive the formula for the speed of sound $v$ eliminating the unknown end correction $e$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    A resonance tube acts as a closed organ pipe (water surface is the closed end, top lip is the open end).<br/>
    Let $e$ be the end correction.<br/>
    - For the <strong>first resonance</strong> (fundamental mode):
      $$l_1 + e = \\frac{\\lambda}{4} \\quad \\text{--- (1)}$$
    - For the <strong>second resonance</strong> (first overtone):
      $$l_2 + e = \\frac{3\\lambda}{4} \\quad \\text{--- (2)}$$
    Subtracting equation (1) from equation (2):
    $$(l_2 + e) - (l_1 + e) = \\frac{3\\lambda}{4} - \\frac{\\lambda}{4}$$
    $$l_2 - l_1 = \\frac{2\\lambda}{4} = \\frac{\\lambda}{2} \\implies \\mathbf{\\lambda = 2(l_2 - l_1)}$$
    The unknown end correction $e$ cancels out completely!<br/>
    Since wave speed is $v = \\nu \\lambda$:
    $$\\mathbf{v = 2\\nu (l_2 - l_1)}$$
    End correction can also be determined: $e = \\frac{l_2 - 3l_1}{2}$.
  </div>
</div>

<!-- Q71 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q71: Phenomenon of Beats and Necessary Conditions</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define the phenomenon of beats. State the physical conditions necessary for the clear formation and perception of distinct beats.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Definition:</b> The periodic waxing (rise) and waning (fall) in the intensity of sound produced when two sound waves of nearly equal frequencies and comparable amplitudes travel in the same direction and superpose is called <strong>beats</strong>.<br/><br/>
    <b style="color: ${themeColor};">Necessary Conditions:</b><br/>
    1. The frequencies of the two sound sources must differ by only a small amount (typically $\\Delta f \\le 10\\text{ Hz}$).<br/>
    2. The amplitudes of the two waves must be nearly equal to ensure complete destructive interference at minima (waning down to silence) and high contrast at maxima.<br/>
    3. Both wave trains must propagate simultaneously along the same spatial direction through the medium.<br/>
    4. For distinct human auditory perception, the beat frequency must not exceed $10\\text{ beats per second}$ due to the persistence of hearing limit ($\\Delta t \\approx 0.1\\text{ s}$).
  </div>
</div>

<!-- Q72 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q72: Analytical Derivation of Beat Frequency</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using trigonometric identities, derive the expression for the resultant displacement and prove that the beat frequency is $f_b = |f_1 - f_2|$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Consider two collinear sound waves of equal amplitude $A$ and slightly differing frequencies $f_1, f_2$:
    $$y_1 = A \\sin(2\\pi f_1 t) \\quad \\text{and} \\quad y_2 = A \\sin(2\\pi f_2 t)$$
    By the Principle of Superposition:
    $$y = y_1 + y_2 = A [\\sin(2\\pi f_1 t) + \\sin(2\\pi f_2 t)]$$
    Using $\\sin C + \\sin D = 2 \\cos\\left(\\frac{C - D}{2}\\right) \\sin\\left(\\frac{C + D}{2}\\right)$:
    $$y = 2A \\cos\\left[ 2\\pi \\left( \\frac{f_1 - f_2}{2} \\right) t \\right] \\sin\\left[ 2\\pi \\left( \\frac{f_1 + f_2}{2} \\right) t \\right]$$
    This represents a wave oscillating with average frequency $f_{\\text{avg}} = \\frac{f_1 + f_2}{2}$ and modulated amplitude:
    $$R(t) = 2A \\cos\\left[ \\pi (f_1 - f_2) t \\right]$$
    Intensity is proportional to amplitude squared: $I \\propto R^2(t) = 4A^2 \\cos^2[\\pi(f_1 - f_2)t]$.<br/>
    - Maxima (waxing) occur when $\\cos[\\pi(f_1 - f_2)t] = \\pm 1 \\implies \\pi(f_1 - f_2)t = n\\pi \\implies t = \\frac{n}{f_1 - f_2}$.<br/>
    - Time interval between successive waxings:
    $$T_b = t_{n+1} - t_n = \\frac{1}{f_1 - f_2}$$
    The number of beats per second (beat frequency) is:
    $$\\mathbf{f_b = \\frac{1}{T_b} = |f_1 - f_2|}$$
  </div>
</div>

<!-- Q73 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q73: Persistence of Hearing and Audibility of Beats</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Two tuning forks of frequencies $256\\text{ Hz}$ and $280\\text{ Hz}$ are sounded together. Calculate the beat frequency and explain why a human ear cannot hear distinct beats.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Beat frequency:
    $$f_b = |f_1 - f_2| = |280 - 256| = \\mathbf{24\\text{ beats/s}}$$
    2. The time period between successive intensity maxima is:
    $$T_b = \\frac{1}{f_b} = \\frac{1}{24}\\text{ s} \\approx 0.042\\text{ s}$$
    3. The human brain retains auditory sensations for approximately $\\frac{1}{10}\\text{ s} = 0.10\\text{ s}$ (physiological persistence of hearing).<br/>
    4. Because $T_b = 0.042\\text{ s} < 0.10\\text{ s}$, the ear cannot separate consecutive waxings and wanings. Instead of distinct beats, the ear perceives a single continuous, discordant, and harsh combination tone. Distinct beats require $f_b \\le 10\\text{ Hz}$.
  </div>
</div>

<!-- Q74 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q74: Practical Applications of Beats</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain how beats are practically utilized for: (a) Tuning a musical instrument (such as a piano or violin), and (b) Detecting hazardous methane gas in underground coal mines.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">(a) Tuning Musical Instruments:</b><br/>
    A standard tuning fork of precise known frequency is sounded simultaneously with an instrument string. If the string is out of tune, distinct beats are heard. The musician adjusts string tension ($f \\propto \\sqrt{T}$) to decrease the beat frequency until the beats slow down and completely vanish ($f_b = 0$). The string is then perfectly tuned in unison.<br/><br/>
    <b style="color: ${themeColor};">(b) Gas Detection in Coal Mines:</b><br/>
    Two identical organ pipes are blown simultaneously by the same air pump. One pipe is fed pure atmospheric air, while the second pipe is fed air drawn from the underground mine. If the mine air contains flammable methane gas ($M = 16\\text{ g/mol}$, lighter than air $M = 28.8\\text{ g/mol}$), the speed of sound in the second pipe increases ($v \\propto 1/\\sqrt{M}$), raising its frequency ($f = v/2L$). The resulting frequency mismatch produces clear beats, alerting miners immediately of an explosive gas leak.
  </div>
</div>

<!-- Q75 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q75: Frequency of a Wax-Loaded Tuning Fork</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A tuning fork $A$ of known frequency $384\\text{ Hz}$ produces $6\\text{ beats/s}$ when sounded with an unknown fork $B$. When the prongs of fork $B$ are loaded with a small amount of wax, the beat frequency decreases to $2\\text{ beats/s}$. Calculate the original frequency of fork $B$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Known frequency: $f_A = 384\\text{ Hz}$. Beat frequency: $f_b = 6\\text{ Hz}$.<br/>
    The possible initial frequencies for fork $B$ are:
    $$f_B = f_A \\pm 6 = 384 + 6 = 390\\text{ Hz} \\quad \\text{or} \\quad 384 - 6 = 378\\text{ Hz}$$
    <b style="color: ${themeColor};">Effect of Waxing:</b><br/>
    Loading a tuning fork with wax increases its prong inertia (mass), which strictly <strong>decreases</strong> its vibrational frequency ($f'_B < f_B$).<br/>
    - <strong>Case 1: If $f_B = 390\\text{ Hz}$:</strong><br/>
      As $f_B$ decreases from $390\\text{ Hz}$ to say $386\\text{ Hz}$, the new beat frequency becomes:
      $$f'_b = 386 - 384 = 2\\text{ beats/s}$$
      This matches the problem statement (beat frequency decreases from $6$ to $2$).<br/>
    - <strong>Case 2: If $f_B = 378\\text{ Hz}$:</strong><br/>
      As $f_B$ decreases further below $378\\text{ Hz}$ (e.g. to $374\\text{ Hz}$), the frequency difference $|384 - 374| = 10\\text{ Hz}$ would increase, contradicting the problem.<br/>
    Therefore, the original frequency of fork $B$ was <strong>$390\\text{ Hz}$</strong>.
  </div>
</div>

<!-- Q76 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q76: Frequency of a Filed Tuning Fork</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Two tuning forks $A$ and $B$ produce $5\\text{ beats/s}$. Fork $A$ has frequency $512\\text{ Hz}$. When fork $B$ is slightly filed, the beat frequency increases to $8\\text{ beats/s}$. Calculate the original frequency of fork $B$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Known frequency: $f_A = 512\\text{ Hz}$. Beat frequency: $f_b = 5\\text{ Hz}$.<br/>
    The possible initial frequencies for fork $B$ are:
    $$f_B = 512 + 5 = 517\\text{ Hz} \\quad \\text{or} \\quad 512 - 5 = 507\\text{ Hz}$$
    <b style="color: ${themeColor};">Effect of Filing:</b><br/>
    Filing reduces the mass of the prongs, which strictly <strong>increases</strong> the frequency of the fork ($f'_B > f_B$).<br/>
    - <strong>Case 1: If $f_B = 517\\text{ Hz}$:</strong><br/>
      As $f_B$ increases above $517\\text{ Hz}$ to $520\\text{ Hz}$, the new beat frequency becomes $|520 - 512| = 8\\text{ beats/s}$. This matches the problem statement (beat frequency increases from $5$ to $8$).<br/>
    - <strong>Case 2: If $f_B = 507\\text{ Hz}$:</strong><br/>
      As $f_B$ increases toward $512\\text{ Hz}$, the beat frequency $|512 - f'_B|$ would initially decrease toward zero, contradicting the problem.<br/>
    Therefore, the original frequency of fork $B$ was <strong>$517\\text{ Hz}$</strong>.
  </div>
</div>

<!-- Q77 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q77: Resonant Mode of a Closed Pipe</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A pipe $20\\text{ cm}$ long is closed at one end. Which harmonic mode of the pipe is resonantly excited by a source of frequency $425\\text{ Hz}$? Take the speed of sound in air as $340\\text{ m/s}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $L = 20\\text{ cm} = 0.20\\text{ m}$, $v = 340\\text{ m/s}$, $f = 425\\text{ Hz}$.<br/>
    Fundamental frequency of the closed pipe:
    $$f_1 = \\frac{v}{4L} = \\frac{340}{4 \\times 0.20} = \\frac{340}{0.80} = 425\\text{ Hz}$$
    Since the source frequency ($425\\text{ Hz}$) is exactly equal to the fundamental frequency $f_1$, the pipe resonates in its <strong>fundamental mode (1st harmonic)</strong>.<br/>
    The wavelength in the pipe is $\\lambda_1 = 4L = 4 \\times 0.20 = 0.80\\text{ m}$.
  </div>
</div>

<!-- Q78 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q78: Comparison Between Stationary Waves and Progressive Waves</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State four fundamental differences between Stationary (Standing) Waves and Progressive (Traveling) Waves.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <b style="color: ${themeColor};">Propagation:</b> Progressive waves travel continuously forward through the medium with velocity $v = \\nu \\lambda$. Stationary waves remain confined between boundaries with no forward phase movement.<br/>
    2. <b style="color: ${themeColor};">Energy Transfer:</b> Progressive waves continuously transport energy and momentum across space. Stationary waves transport zero net energy (energy oscillates back and forth between kinetic and potential forms confined between nodes).<br/>
    3. <b style="color: ${themeColor};">Amplitude:</b> In a progressive wave, all particles oscillate with the exact same amplitude $A$. In a stationary wave, amplitude varies from zero at nodes to maximum $2A$ at antinodes.<br/>
    4. <b style="color: ${themeColor};">Phase:</b> In a progressive wave, the phase changes continuously from point to point ($\\Delta \\phi = k \\Delta x$). In a stationary wave, all particles within a single loop between two consecutive nodes vibrate in exact phase with one another, while particles in adjacent loops are in direct antiphase ($180^{\\circ}$).
  </div>
</div>

<!-- Q79 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q79: Comparison Between Transverse and Longitudinal Waves</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State four key differences between Transverse Waves and Longitudinal Waves.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <b style="color: ${themeColor};">Vibration Direction:</b> In transverse waves, particles vibrate perpendicular to the direction of wave propagation. In longitudinal waves, particles vibrate parallel to the direction of wave propagation.<br/>
    2. <b style="color: ${themeColor};">Wave Pattern:</b> Transverse waves propagate as alternating <strong>crests and troughs</strong>. Longitudinal waves propagate as alternating <strong>compressions and rarefactions</strong>.<br/>
    3. <b style="color: ${themeColor};">Elastic Property Required:</b> Mechanical transverse waves require shear elasticity (modulus of rigidity $\\eta$), so they can only propagate through solids and liquid surfaces. Longitudinal waves require volume elasticity (bulk modulus $B$), so they propagate through solids, liquids, and gases.<br/>
    4. <b style="color: ${themeColor};">Polarization:</b> Transverse waves can be polarized (oscillations restricted to a single plane). Longitudinal waves cannot be polarized because vibrations are strictly along the propagation axis.
  </div>
</div>

<!-- Q80 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q80: Why Sound Waves Cannot Propagate in a Vacuum While Light Waves Can</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain physically why sound cannot travel through a vacuum, whereas sunlight travels across millions of kilometers of empty space to reach Earth.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <b style="color: ${themeColor};">Nature of Sound Waves:</b> Sound is a <strong>mechanical wave</strong>. Its propagation depends strictly on elastic collisions and inertial interactions between contiguous material particles (atoms or molecules) in a physical medium. In a vacuum, there are no particles to exert restoring forces or transfer momentum, so sound waves cannot exist or propagate.<br/>
    2. <b style="color: ${themeColor};">Nature of Light Waves:</b> Light is an <strong>electromagnetic wave</strong> consisting of mutually perpendicular, time-varying electric ($\\vec{E}$) and magnetic ($\\vec{B}$) fields regenerating each other through Maxwell's laws ($\ abla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ and $\\nabla \\times \\vec{B} = \\mu_0 \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$). Because electric and magnetic fields exist in empty space without requiring a material matrix, electromagnetic radiation propagates effortlessly through vacuum at speed $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$.
  </div>
</div>
`;

module.exports = { solutionsPart2 };
