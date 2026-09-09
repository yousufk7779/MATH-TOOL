// scripts/c11_phy_10_solutions_part1.js
const { themeColor, frac } = require('./c11_phy_10_helpers');

function getSolutionsPart1() {
  return `
  <!-- SECTION A: VERY SHORT ANSWER (VSA) QUESTIONS (1 MARK EACH) -->
  <div style="background: rgba(0, 229, 255, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each) &bull; Q1 to Q40
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Fundamental definitions, S.H.M differential equations, phase, spring constant, simple pendulum, wave motion, and superposition.
    </p>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q1: Define periodic motion and time period.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      A motion that strictly repeats itself along a definite path at equal, regular intervals of time is called <strong>periodic motion</strong>. The smallest time interval after which the motion repeats is called its <strong>time period ($T$)</strong>.
    </p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q2: Define frequency of an oscillating body and state its SI unit.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      The number of complete cycles or oscillations executed by a particle per second is called its <strong>frequency ($\\nu$)</strong>:
      $$\\nu = \\frac{1}{T}$$
      Its SI unit is <strong>Hertz ($\\text{Hz}$)</strong> or $\\text{s}^{-1}$.
    </p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q3: State the fundamental difference between periodic and oscillatory motion.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      In periodic motion, a body repeats its motion at regular intervals (e.g. planetary orbit), while in oscillatory motion, the body specifically moves <em>to-and-fro</em> about a stable mean equilibrium position. All oscillatory motions are periodic, but not all periodic motions are oscillatory.
    </p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q4: Define Simple Harmonic Motion (S.H.M).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Simple Harmonic Motion is a special bounded oscillatory motion along a straight line in which the restoring force (or acceleration) acting on the particle is directly proportional to its displacement from the mean position and is always directed toward the mean position ($F = -kx$).
    </p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q5: Write the differential equation of linear Simple Harmonic Motion.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$\\frac{d^2x}{dt^2} + \\omega^2 x = 0$$
      where $x$ is displacement, $t$ is time, and $\\omega = \\sqrt{k/m}$ is angular frequency.
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q6: Write the general equation of displacement in S.H.M.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$x(t) = A \\cos(\\omega t + \\phi_0) \\quad \\text{or} \\quad x(t) = A \\sin(\\omega t + \\phi_0)$$
      where $A$ is amplitude, $\\omega$ is angular frequency, and $\\phi_0$ is the initial phase.
    </p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q7: Define Amplitude of an oscillating particle.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      The magnitude of maximum displacement of the oscillating particle on either side of its mean equilibrium position is called its <strong>amplitude ($A$)</strong>.
    </p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q8: Define Phase in Simple Harmonic Motion.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      The argument of the harmonic trigonometric function, $\\Phi = (\\omega t + \\phi_0)$, is called the <strong>phase</strong>. It completely determines the instantaneous position and direction of motion of the oscillating particle.
    </p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q9: What is meant by Initial Phase or Epoch?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      The phase angle $\\phi_0$ of the oscillating particle at the beginning of time ($t = 0$) is called its <strong>initial phase</strong> or <strong>epoch</strong>.
    </p>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q10: Write the formula for velocity of a particle in S.H.M at displacement $x$.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$v = \\pm \\omega \\sqrt{A^2 - x^2}$$
      where $A$ is amplitude and $\\omega$ is angular frequency.
    </p>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q11: At what position is the velocity of an S.H.M particle maximum, and what is its value?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      The velocity is maximum at the <strong>mean position ($x = 0$)</strong>, and its magnitude is:
      $$v_{\\text{max}} = \\omega A$$
    </p>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q12: What is the velocity of a particle executing S.H.M at its extreme positions?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      At the extreme positions ($x = \\pm A$), the particle momentarily halts to reverse its direction, so:
      $$v = 0$$
    </p>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q13: Write the expression for acceleration in S.H.M as a function of displacement $x$.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$a = -\\omega^2 x$$
      The negative sign indicates that acceleration is always directed opposite to displacement, toward the mean position.
    </p>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q14: Where is acceleration maximum in S.H.M, and what is its magnitude?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Acceleration is maximum at the <strong>extreme positions ($x = \\pm A$)</strong>, and its magnitude is:
      $$|a_{\\text{max}}| = \\omega^2 A$$
    </p>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q15: What is the phase difference between displacement and velocity in S.H.M?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Velocity leads displacement by a phase angle of <strong>$\\frac{\\pi}{2}\\text{ radians}$ ($90^{\\circ}$)</strong>.
    </p>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q16: What is the phase difference between displacement and acceleration in S.H.M?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Acceleration and displacement are in direct <strong>antiphase</strong>, with a phase difference of <strong>$\\pi\\text{ radians}$ ($180^{\\circ}$)</strong>.
    </p>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q17: What is the phase difference between velocity and acceleration in S.H.M?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Acceleration leads velocity by a phase angle of <strong>$\\frac{\\pi}{2}\\text{ radians}$ ($90^{\\circ}$)</strong>.
    </p>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q18: State Hooke's Law for an elastic spring and define spring constant.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Hooke's Law states that within elastic limits, the restoring force $F$ developed in a spring is directly proportional to its extension or compression $x$: $F = -kx$. The proportionality constant $k = |F|/x$ is the <strong>spring constant (force constant)</strong>.
    </p>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q19: State the SI unit and dimensional formula of force constant ($k$).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      - SI unit: <strong>$\\text{N/m}$</strong> (Newton per meter) or $\\text{kg/s}^2$.<br/>
      - Dimensional formula: $[\\text{M}^1 \\text{L}^0 \\text{T}^{-2}]$.
    </p>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q20: Write the formula for the time period of a horizontal mass-spring oscillator.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$T = 2\\pi \\sqrt{\\frac{m}{k}}$$
      where $m$ is the attached mass and $k$ is the spring force constant.
    </p>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q21: Express the time period of a vertical loaded spring in terms of its static extension $\\Delta l$.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Since $mg = k\\Delta l \\implies \\frac{m}{k} = \\frac{\\Delta l}{g}$, the time period is:
      $$T = 2\\pi \\sqrt{\\frac{\\Delta l}{g}}$$
    </p>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q22: If a spring of force constant $k$ is cut into two equal halves, what is the force constant of each half?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Because spring constant is inversely proportional to spring length ($k \\propto 1/L$), halving the length doubles the stiffness:
      $$k' = 2k$$
    </p>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q23: What is the equivalent force constant of two springs of constants $k_1$ and $k_2$ connected in parallel?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$k_{\\text{eq}} = k_1 + k_2$$
    </p>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q24: What is the equivalent force constant of two springs of constants $k_1$ and $k_2$ connected in series?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$\\frac{1}{k_{\\text{eq}}} = \\frac{1}{k_1} + \\frac{1}{k_2} \\implies k_{\\text{eq}} = \\frac{k_1 k_2}{k_1 + k_2}$$
    </p>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q25: Write the formula for kinetic energy of a particle in S.H.M at displacement $x$.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$E_k = \\frac{1}{2} m \\omega^2 (A^2 - x^2) = \\frac{1}{2} k (A^2 - x^2)$$
    </p>
  </div>

  <!-- Q26 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q26: Write the formula for potential energy of a particle in S.H.M at displacement $x$.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$U = \\frac{1}{2} m \\omega^2 x^2 = \\frac{1}{2} k x^2$$
    </p>
  </div>

  <!-- Q27 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q27: State the expression for total mechanical energy in Simple Harmonic Motion.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$E = E_k + U = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2 = \\text{Constant}$$
      Total energy is conserved and strictly proportional to the square of amplitude ($E \\propto A^2$).
    </p>
  </div>

  <!-- Q28 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q28: If the frequency of displacement in S.H.M is $\\nu$, what is the frequency of its kinetic energy?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Kinetic energy oscillates at <strong>twice the frequency of S.H.M</strong>, i.e., $2\\nu$ (since kinetic energy peaks twice during each full cycle of displacement).
    </p>
  </div>

  <!-- Q29 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q29: At what displacement from the mean position is kinetic energy equal to potential energy?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Setting $E_k = U \\implies \\frac{1}{2}k(A^2 - x^2) = \\frac{1}{2}kx^2 \\implies 2x^2 = A^2$:
      $$x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707 A$$
    </p>
  </div>

  <!-- Q30 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q30: State the formula for the time period of a simple pendulum.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$T = 2\\pi \\sqrt{\\frac{L}{g}}$$
      where $L$ is effective length and $g$ is acceleration due to gravity.
    </p>
  </div>

  <!-- Q31 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q31: What is a Seconds Pendulum, and what is its approximate effective length on Earth?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      A simple pendulum having a time period of exactly <strong>$2\\text{ seconds}$</strong> is called a <strong>Seconds Pendulum</strong>. Its effective length on Earth is approximately $L = \\frac{g}{\\pi^2} \\approx 0.993\\text{ m} \\approx 1\\text{ meter}$.
    </p>
  </div>

  <!-- Q32 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q32: Why does the time period of a simple pendulum not depend on the mass of the bob?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Gravitational acceleration $g$ is independent of the mass of the falling or swinging body ($F_g \\propto m$ and inertia $\\propto m$, so mass cancels identically in the equation of motion).
    </p>
  </div>

  <!-- Q33 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q33: Define wave motion.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Wave motion is a form of disturbance propagated through an elastic medium due to the repeated periodic vibrations of medium particles about their mean positions, transporting energy and momentum without bulk mass transport.
    </p>
  </div>

  <!-- Q34 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q34: Define a Transverse Wave and give an example.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      A wave in which the particles of the medium vibrate in directions perpendicular to the direction of wave propagation (forming crests and troughs). Example: waves on a plucked guitar string or light waves.
    </p>
  </div>

  <!-- Q35 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q35: Define a Longitudinal Wave and give an example.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      A wave in which the particles of the medium oscillate back and forth parallel to the direction of wave propagation (forming compressions and rarefactions). Example: sound waves in air.
    </p>
  </div>

  <!-- Q36 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q36: Write the formula for the speed of a transverse wave in a stretched string.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$v = \\sqrt{\\frac{T}{\\mu}}$$
      where $T$ is the string tension and $\\mu$ is the mass per unit length (linear mass density).
    </p>
  </div>

  <!-- Q37 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q37: Write Newton's formula for the speed of sound in air and explain its drawback.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Newton assumed sound propagation is isothermal ($B = P$), giving $v = \\sqrt{P/\\rho} \\approx 280\\text{ m/s}$ at STP. Its drawback is that it underestimates the experimental sound speed ($332\\text{ m/s}$) by about $15\\%$.
    </p>
  </div>

  <!-- Q38 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q38: State Laplace's correction for the speed of sound in air.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      Laplace recognized that sound compressions and rarefactions occur adiabatically ($B_{\\text{adia}} = \\gamma P$):
      $$v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}$$
      where $\\gamma = C_p/C_v \\approx 1.41$ for air, predicting $v \\approx 331.3\\text{ m/s}$, in perfect agreement with experiment.
    </p>
  </div>

  <!-- Q39 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q39: State the Principle of Superposition of waves.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      When two or more waves overlap in an elastic medium, the resultant displacement at any point and time is the algebraic (vector) sum of the displacements produced by each individual wave:
      $$y = y_1 + y_2 + \\dots + y_n$$
    </p>
  </div>

  <!-- Q40 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q40: What phase change occurs when a wave reflects from a rigid boundary vs a free boundary?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      - Reflection from a <strong>rigid / fixed boundary</strong> introduces a phase change of <strong>$\\pi\\text{ radians}$ ($180^{\\circ}$)</strong>.<br/>
      - Reflection from a <strong>free / open boundary</strong> introduces <strong>zero phase change ($0^{\\circ}$)</strong>.
    </p>
  </div>
  `;
}

module.exports = {
  getSolutionsPart1,
  solutionsPart1: getSolutionsPart1()
};
