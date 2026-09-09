// scripts/c11_phy_10_overview.js
const {
  themeColor,
  frac,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_10_helpers');

function buildOverview() {
  return `
<div style="font-family: 'Outfit', sans-serif; color: #E2E8F0; line-height: 1.65; max-width: 900px; margin: 0 auto; padding: 12px;">

  <!-- CHAPTER HEADER -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(15, 23, 42, 0.95)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 22px 20px; margin-bottom: 25px; box-shadow: 0 4px 20px rgba(0, 229, 255, 0.15);">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
      <div>
        <span style="background: ${themeColor}; color: #0F172A; font-weight: 800; font-size: 12px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">Class 11 Physics &bull; Unit X</span>
        <h1 style="color: ${themeColor}; font-size: 26px; margin: 10px 0 6px 0; font-weight: 800;">Oscillations and Waves</h1>
        <p style="color: #94A3B8; font-size: 14px; margin: 0;">Comprehensive Reference Textbook Guide &amp; Master Formula Cheat Sheet &bull; Marks Weightage: 10 Marks</p>
      </div>
      <div style="text-align: right; background: rgba(0, 229, 255, 0.08); padding: 10px 16px; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <div style="color: #94A3B8; font-size: 12px; font-weight: bold; text-transform: uppercase;">Weightage</div>
        <div style="color: ${themeColor}; font-size: 22px; font-weight: 800;">10 Marks</div>
      </div>
    </div>
  </div>

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 10px; padding: 18px; margin-bottom: 30px;">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 17px; display: flex; align-items: center; gap: 8px;">
      <span>📖</span> <span>Quick Glossary &amp; Fundamental Definitions</span>
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; font-size: 13.5px;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Periodic Motion:</b> Motion that strictly repeats itself identically at equal intervals of time along a definite path.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Simple Harmonic Motion:</b> Bounded oscillatory motion where restoring force is directly proportional to displacement and acts toward mean position: $F = -kx$.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Phase ($\\Phi$):</b> The physical argument $(\\omega t + \\phi_0)$ specifying the exact instantaneous position and direction of motion of an oscillator.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Force Constant ($k$):</b> Restoring force per unit displacement: $k = |F|/x$. SI unit: $\\text{N/m}$; dimensions: $[\\text{M}^1 \\text{L}^0 \\text{T}^{-2}]$.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Simple Pendulum:</b> Heavy point-mass bob suspended by an inextensible weightless string from a rigid support: $T = 2\\pi \\sqrt{L/g}$.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Transverse vs Longitudinal:</b> Transverse: vibrations $\\perp$ wave propagation. Longitudinal: vibrations $\\parallel$ wave propagation.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Progressive Wave:</b> Disturbance traveling through a medium carrying energy and momentum continuously: $y(x,t) = A \\sin(kx - \\omega t + \\phi_0)$.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 12px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Beats:</b> Periodic acoustic intensity modulation arising from superposition of two waves of slightly differing frequencies: $f_b = |f_1 - f_2|$.
      </div>
    </div>
  </div>

  <!-- PART A: OSCILLATIONS -->
  <div style="background: rgba(0, 229, 255, 0.08); padding: 10px 16px; border-radius: 8px; margin: 30px 0 20px 0; border: 1px solid rgba(0, 229, 255, 0.25);">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Part A: Oscillations</h2>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">
    1. Periodic Motion, Time Period, Frequency, and Periodic Functions
  </h2>
  
  <p>Motion in the physical universe is broadly categorized into translational, rotational, and periodic types. When a body retraces its physical path at strictly regular intervals of time, its motion is termed <strong>periodic motion</strong>. If the body moves to-and-fro repeatedly about a fixed equilibrium position (mean position), the periodic motion is designated as <strong>oscillatory (or vibratory) motion</strong>.</p>

  <p>Every oscillatory motion is inherently periodic, but every periodic motion is not necessarily oscillatory. For instance, the revolution of Earth around the Sun is periodic (period $365.25\\text{ days}$), yet it is purely orbital without any to-and-fro oscillation about an equilibrium state. In contrast, the swing of a pendulum or vibration of a plucked guitar string is both oscillatory and periodic.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Core Kinematical Parameters of Periodic Motion:</h3>
  <p>
    <b style="color: ${themeColor};">Time Period ($T$):</b> The smallest interval of time after which the motion of an oscillating system repeats itself completely. SI unit: second ($\\text{s}$).<br/>
    <b style="color: ${themeColor};">Frequency ($\\nu$ or $f$):</b> The number of complete cycles or oscillations executed by the system per unit time:
    $$\\nu = \\frac{1}{T}$$
    SI unit: Hertz ($\\text{Hz} = \\text{s}^{-1}$). Dimensions: $[\\text{M}^0 \\text{L}^0 \\text{T}^{-1}]$.<br/>
    <b style="color: ${themeColor};">Angular Frequency ($\\omega$):</b> The rate of change of phase angle with time:
    $$\\omega = 2\\pi \\nu = \\frac{2\\pi}{T}$$
    SI unit: radians per second ($\\text{rad/s}$). Dimensions: $[\\text{T}^{-1}]$.
  </p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) Displacement as a Function of Time:</h3>
  <p>In oscillatory dynamics, the term "displacement" ($x$ or $y$) does not merely represent a spatial distance vector; it denotes any physical quantity that varies periodically with time—such as the angular deviation $\\theta(t)$ of a pendulum, pressure fluctuation $\\Delta P(t)$ in a sound wave, or electric charge $q(t)$ in an LC resonant tank circuit.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(iii) Periodic Functions and Fourier's Theorem:</h3>
  <p>Mathematically, any function $f(t)$ is periodic with period $T$ if it satisfies:
  $$f(t + T) = f(t)$$
  The simplest periodic functions are the harmonic sine and cosine functions: $\\sin(\\omega t)$ and $\\cos(\\omega t)$, whose period is $T = 2\\pi / \\omega$.</p>

  <p><strong>Fourier's Theorem:</strong> Jean-Baptiste Joseph Fourier established that any arbitrary bounded, single-valued periodic function of period $T$ can be expressed as a linear superposition of harmonic sine and cosine terms containing the fundamental frequency $\\omega$ and its integral multiples (harmonics $2\\omega, 3\\omega, \\dots$):
  $$f(t) = A_0 + \\sum_{n=1}^{\\infty} \\left[ A_n \\cos(n \\omega t) + B_n \\sin(n \\omega t) \\right]$$
  This theorem bridges simple harmonic motion to complex periodic sound waves, seismic ripples, and electronic signals.</p>

  ${defBox(
    "Harmonic vs Non-Harmonic Periodic Motion",
    "<strong>Harmonic Motion:</strong> A periodic motion that can be represented by a single trigonometric function of single frequency, such as $x(t) = A \\cos(\\omega t)$.<br/><strong>Non-Harmonic Motion:</strong> A periodic motion represented by a linear combination of two or more harmonic functions of differing frequencies, such as $x(t) = A \\sin(\\omega t) + B \\sin(2\\omega t)$."
  )}

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    2. Simple Harmonic Motion (S.H.M), Equations of Motion, and Phase
  </h2>

  <p><strong>Simple Harmonic Motion (S.H.M)</strong> represents the most fundamental archetype of all oscillatory systems. A particle executes linear S.H.M if it oscillates back and forth along a straight line about a stable equilibrium (mean position) under the action of a restoring force that is directly proportional to its displacement from the mean position and always directed toward that mean position.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Restoring Force and Differential Equation:</h3>
  <p>Let $x$ be the instantaneous displacement from the mean position ($x = 0$). By definition:
  $$F = -kx$$
  where $k$ is the positive spring force constant (stiffness). The negative sign mathematically signifies that force always opposes displacement, continuously driving the particle back toward equilibrium.<br/>
  By Newton's Second Law: $F = m a = m \\frac{d^2x}{dt^2}$.
  $$m \\frac{d^2x}{dt^2} = -kx \\implies \\frac{d^2x}{dt^2} + \\left(\\frac{k}{m}\\right) x = 0$$
  Defining the angular frequency as $\\omega = \\sqrt{\\frac{k}{m}}$:
  $$\\mathbf{\\frac{d^2x}{dt^2} + \\omega^2 x = 0}$$
  This is the universal second-order linear differential equation governing linear S.H.M.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) General Solutions for Displacement, Velocity, and Acceleration:</h3>
  <p>
    <b style="color: ${themeColor};">Displacement Equation:</b><br/>
    The general solution of the differential equation is:
    $$\\mathbf{x(t) = A \\cos(\\omega t + \\phi_0)} \\quad \\text{or} \\quad \\mathbf{x(t) = A \\sin(\\omega t + \\phi'_0)}$$
    where $A$ is the <strong>amplitude</strong> (maximum displacement from mean position), and $\\phi_0$ is the <strong>initial phase (epoch)</strong> at $t = 0$.<br/><br/>
    
    <b style="color: ${themeColor};">Velocity Equation:</b><br/>
    Differentiating displacement with respect to time:
    $$v(t) = \\frac{dx}{dt} = -A \\omega \\sin(\\omega t + \\phi_0)$$
    Using $\\sin\\theta = \\pm \\sqrt{1 - \\cos^2\\theta}$:
    $$\\mathbf{v = \\pm \\omega \\sqrt{A^2 - x^2}}$$
    - At the mean position ($x = 0$): velocity reaches maximum magnitude: $\\mathbf{v_{\\text{max}} = \\omega A}$.<br/>
    - At extreme positions ($x = \\pm A$): velocity drops to zero: $\\mathbf{v = 0}$.<br/><br/>
    
    <b style="color: ${themeColor};">Acceleration Equation:</b><br/>
    Differentiating velocity with respect to time:
    $$a(t) = \\frac{dv}{dt} = -A \\omega^2 \\cos(\\omega t + \\phi_0)$$
    Substituting $x = A \\cos(\\omega t + \\phi_0)$:
    $$\\mathbf{a = -\\omega^2 x}$$
    - At the mean position ($x = 0$): acceleration is zero: $\\mathbf{a = 0}$.<br/>
    - At extreme positions ($x = \\pm A$): acceleration reaches maximum magnitude: $\\mathbf{|a_{\\text{max}}| = \\omega^2 A}$.
  </p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(iii) Phase and Phase Relationships:</h3>
  <p>The entire argument of the harmonic function, $\\Phi(t) = (\\omega t + \\phi_0)$, is called the <strong>phase</strong> of S.H.M. It completely encapsulates the instantaneous state of motion—both position and algebraic direction of velocity.</p>
  
  <p>Expressing kinematics in terms of cosine functions:
  $$x = A \\cos(\\omega t)$$
  $$v = -\\omega A \\sin(\\omega t) = \\omega A \\cos\\left(\\omega t + \\frac{\\pi}{2}\\right)$$
  $$a = -\\omega^2 A \\cos(\\omega t) = \\omega^2 A \\cos(\\omega t + \\pi)$$
  These equations establish fundamental phase differences:
  - Velocity <strong>leads</strong> displacement by a phase of $\\frac{\\pi}{2}\\text{ rad}$ ($90^{\\circ}$ or quarter cycle).
  - Acceleration <strong>leads</strong> velocity by a phase of $\\frac{\\pi}{2}\\text{ rad}$ ($90^{\\circ}$).
  - Acceleration is in direct <strong>antiphase</strong> (leads/lags by $\\pi\\text{ rad} = 180^{\\circ}$) relative to displacement.</p>

  ${analogyBox(
    "Reference Circle & Uniform Circular Motion Projection",
    "Imagine a particle moving with uniform speed on a circle of radius $A$ in the vertical plane. If you shine horizontal parallel rays of light across the circle onto a vertical wall, the shadow cast on the wall executes pure Simple Harmonic Motion along the diameter! The circular speed translates to angular frequency $\\omega$, circle radius corresponds to amplitude $A$, and the angular position of the rotating particle is precisely the phase $\\Phi$."
  )}

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    3. Oscillations of a Loaded Spring — Restoring Force and Force Constant
  </h2>

  <p>A mass-spring oscillator is the prototypical mechanical embodiment of linear S.H.M. Consider a massless ideal helical spring of force constant $k$ resting horizontally on a frictionless table with one end fixed to a rigid wall and the other attached to a mass $m$.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Horizontal Spring Oscillations:</h3>
  <p>When displaced by distance $x$ from its natural unstretched length, Hooke's Law dictates that the spring exerts a restoring force:
  $$F = -kx$$
  Equation of motion: $m \\frac{d^2x}{dt^2} = -kx \\implies \\frac{d^2x}{dt^2} + \\frac{k}{m}x = 0$.<br/>
  The angular frequency and time period are:
  $$\\omega = \\sqrt{\\frac{k}{m}} \\implies \\mathbf{T = 2\\pi \\sqrt{\\frac{m}{k}}}$$
  Frequency of oscillation:
  $$\\mathbf{\\nu = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}}$$</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) Vertical Loaded Spring:</h3>
  <p>When the spring is hung vertically and loaded with mass $m$, it undergoes an initial static elongation $\\Delta l$ under gravity until equilibrium is reached:
  $$m g = k \\Delta l \\implies \\frac{m}{k} = \\frac{\\Delta l}{g}$$
  When displaced vertically by an additional distance $y$ from this new equilibrium and released:
  $$F_{\\text{net}} = m g - k(\\Delta l + y) = m g - k \\Delta l - ky = -ky$$
  The gravitational force simply shifts the mean position downward by $\\Delta l$ without altering the harmonic restoring mechanism! The time period remains strictly identical:
  $$\\mathbf{T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{\\Delta l}{g}}}$$</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(iii) Combinations of Springs:</h3>
  <p>
    <b style="color: ${themeColor};">1. Parallel Combination:</b><br/>
    When mass $m$ is attached to two springs of constants $k_1$ and $k_2$ in parallel, both springs undergo identical displacement $x$. The net restoring force is $F = -(k_1 + k_2) x$.
    $$\\mathbf{k_{\\text{eq}} = k_1 + k_2} \\implies T = 2\\pi \\sqrt{\\frac{m}{k_1 + k_2}}$$
    <b style="color: ${themeColor};">2. Series Combination:</b><br/>
    When two springs are connected end-to-end, each experiences identical tension $F$, while total elongation is $x = x_1 + x_2 = \\frac{F}{k_1} + \\frac{F}{k_2}$.
    $$\\mathbf{\\frac{1}{k_{\\text{eq}}} = \\frac{1}{k_1} + \\frac{1}{k_2} \\implies k_{\\text{eq}} = \\frac{k_1 k_2}{k_1 + k_2}} \\implies T = 2\\pi \\sqrt{\\frac{m(k_1 + k_2)}{k_1 k_2}}$$
    <b style="color: ${themeColor};">3. Cutting a Spring:</b><br/>
    Spring constant is inversely proportional to spring length: $k \\propto 1/L$. If a spring of constant $k$ is cut into $n$ equal segments, each piece has length $L/n$ and spring constant:
    $$\\mathbf{k' = n k}$$
  </p>

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    4. Energy in S.H.M. — Kinetic and Potential Energies
  </h2>

  <p>In Simple Harmonic Motion, energy continuously oscillates between two fundamental forms: <strong>kinetic energy</strong> of moving mass and <strong>potential energy</strong> stored in the deformed elastic field or gravitational configuration.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Potential Energy ($U$):</h3>
  <p>The work done against restoring force $F = -kx$ in displacing the particle from $0$ to $x$ is stored as elastic potential energy:
  $$U = \\int_{0}^{x} k x' dx' = \\mathbf{\\frac{1}{2} k x^2 = \\frac{1}{2} m \\omega^2 x^2}$$
  Expressing as a function of time ($x = A \\cos(\\omega t + \\phi_0)$):
  $$U(t) = \\frac{1}{2} k A^2 \\cos^2(\\omega t + \\phi_0)$$
  - At mean position ($x = 0$): $U_{\\text{min}} = 0$.<br/>
  - At extreme positions ($x = \\pm A$): $U_{\\text{max}} = \\frac{1}{2} k A^2$.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) Kinetic Energy ($E_k$):</h3>
  <p>The kinetic energy of the mass moving with instantaneous velocity $v = \\pm \\omega \\sqrt{A^2 - x^2}$ is:
  $$E_k = \\frac{1}{2} m v^2 = \\mathbf{\\frac{1}{2} m \\omega^2 (A^2 - x^2) = \\frac{1}{2} k (A^2 - x^2)}$$
  Expressing as a function of time:
  $$E_k(t) = \\frac{1}{2} k A^2 \\sin^2(\\omega t + \\phi_0)$$
  - At mean position ($x = 0$): $E_{k,\\text{max}} = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2$.<br/>
  - At extreme positions ($x = \\pm A$): $E_k = 0$.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(iii) Conservation of Total Mechanical Energy ($E$):</h3>
  <p>Summing kinetic and potential energies at any arbitrary displacement $x$:
  $$E = E_k + U = \\frac{1}{2} k (A^2 - x^2) + \\frac{1}{2} k x^2 = \\mathbf{\\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2 = \\text{Constant}}$$
  Total energy is strictly conserved, independent of position $x$ and time $t$.<br/>
  <b style="color: ${themeColor};">Equipartition Displacement:</b> When $E_k = U$:
  $$\\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} k x^2 \\implies 2x^2 = A^2 \\implies \\mathbf{x = \\pm \\frac{A}{\\sqrt{2}} \\approx \\pm 0.707 A}$$
  <b style="color: ${themeColor};">Energy Oscillation Frequency:</b> Since $\\sin^2(\\omega t) = \\frac{1 - \\cos(2\\omega t)}{2}$ and $\\cos^2(\\omega t) = \\frac{1 + \\cos(2\\omega t)}{2}$, both kinetic and potential energies oscillate at <strong>twice the frequency</strong> of displacement S.H.M: $\\nu_{\\text{energy}} = 2\\nu$.</p>

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    5. Simple Pendulum — Derivation of Expression for its Time Period
  </h2>

  <p>A simple pendulum consists of a small, dense bob of mass $m$ suspended from a rigid, frictionless support by a light, inextensible string of effective length $L$ (measured from point of suspension to center of mass of the bob).</p>

  ${stepDerivationBox(
    "Time Period of a Simple Pendulum",
    [
      {
        title: "Displacement and Restoring Torque",
        content: "When pulled aside by small angular displacement $\\theta$, gravitational force $mg$ resolves into two orthogonal components:<br/>• Radial component $mg \\cos\\theta$ along the string, balanced by string tension $T_s$.<br/>• Tangential component $mg \\sin\\theta$ perpendicular to the string, acting toward the mean position.<br/>Restoring torque about point of suspension $O$:<br/>$$\\tau = - (m g \\sin\\theta) L$$"
      },
      {
        title: "Small Angle Approximation",
        content: "For small angular amplitudes ($\\theta \\le 10^{\\circ} \\approx 0.17\\text{ rad}$), Taylor series gives $\\sin\\theta \\approx \\theta$ (in radians).<br/>$$\\tau \\approx - m g L \\theta$$"
      },
      {
        title: "Rotational Equation of Motion",
        content: "By Newton's rotational law, $\\tau = I \\alpha = I \\frac{d^2\\theta}{dt^2}$.<br/>Since point-bob moment of inertia is $I = m L^2$:<br/>$$m L^2 \\frac{d^2\\theta}{dt^2} = - m g L \\theta \\implies \\frac{d^2\\theta}{dt^2} + \\left(\\frac{g}{L}\\right) \\theta = 0$$<br/>This is the standard differential equation of angular S.H.M: $\\frac{d^2\\theta}{dt^2} + \\omega^2 \\theta = 0$."
      },
      {
        title: "Angular Frequency and Time Period",
        content: "Comparing equations: $\\omega = \\sqrt{\\frac{g}{L}}$.<br/>$$\\mathbf{T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{L}{g}}}$$<br/>Frequency of oscillation:<br/>$$\\mathbf{\\nu = \\frac{1}{2\\pi} \\sqrt{\\frac{g}{L}}}$$"
      }
    ]
  )}

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">Laws of Simple Pendulum:</h3>
  <p>
    1. <b style="color: ${themeColor};">Law of Length:</b> $T \\propto \\sqrt{L}$ (time period is directly proportional to square root of effective length).<br/>
    2. <b style="color: ${themeColor};">Law of Gravity:</b> $T \\propto \\frac{1}{\\sqrt{g}}$ (time period is inversely proportional to square root of local gravitational acceleration).<br/>
    3. <b style="color: ${themeColor};">Law of Mass:</b> $T$ is completely independent of the mass, density, and material of the bob.<br/>
    4. <b style="color: ${themeColor};">Law of Isochronism:</b> For small amplitudes, $T$ is strictly independent of amplitude $\\theta_0$.
  </p>

  ${examTrapBox(
    "Pendulum in Accelerating Elevators",
    "• In an elevator accelerating <strong>upward</strong> with acceleration $a$: effective gravity is $g_{\\text{eff}} = g + a \\implies T = 2\\pi \\sqrt{L/(g+a)}$ (period decreases, clock runs fast).<br/>• In an elevator accelerating <strong>downward</strong> with $a < g$: $g_{\\text{eff}} = g - a \\implies T = 2\\pi \\sqrt{L/(g-a)}$ (period increases, clock runs slow).<br/>• In a <strong>freely falling</strong> elevator ($a = g$): $g_{\\text{eff}} = 0 \\implies T \\to \\infty$ (bob becomes weightless and does not oscillate)."
  )}

  <!-- PART B: WAVES -->
  <div style="background: rgba(0, 229, 255, 0.08); padding: 10px 16px; border-radius: 8px; margin: 35px 0 20px 0; border: 1px solid rgba(0, 229, 255, 0.25);">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.5px;">Part B: Waves</h2>
  </div>

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">
    6. Wave Motion: Transverse and Longitudinal Waves, Speed of Travelling Wave
  </h2>

  <p>A wave is a traveling disturbance propagated through an elastic medium due to the repeated periodic vibrations of medium particles about their mean equilibrium positions, transferring energy and momentum from one point to another without macroscopic transport of matter.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Transverse Waves:</h3>
  <p>In a <strong>transverse wave</strong>, particles of the medium vibrate in directions strictly perpendicular to the direction of wave propagation. As the disturbance travels, it produces alternating elevated regions called <strong>crests</strong> and depressed regions called <strong>troughs</strong>.<br/>
  - Because transverse waves require shear elasticity (resistance to shape deformation), mechanical transverse waves can propagate <strong>only through solids</strong> and along the surfaces of liquids (due to surface tension), but never through the interior of liquids or gases.<br/>
  - Light and all electromagnetic waves are transverse, propagating through vacuum with $c \\approx 3 \\times 10^8\\text{ m/s}$.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) Longitudinal Waves:</h3>
  <p>In a <strong>longitudinal wave</strong>, particles of the medium oscillate back and forth along the axis parallel to the direction of wave propagation. This motion creates alternating regions of high particle density and pressure called <strong>compressions</strong>, and low particle density and pressure called <strong>rarefactions</strong>.<br/>
  - Because longitudinal waves depend on volume elasticity (bulk modulus $B$), they can propagate through <strong>all states of matter: solids, liquids, and gases</strong>. Sound waves in air are longitudinal mechanical waves.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(iii) Speed of Travelling Waves:</h3>
  <p>
    <b style="color: ${themeColor};">1. General Dynamical Principle:</b><br/>
    The speed of any mechanical wave in an elastic medium is universally governed by:
    $$v = \\sqrt{\\frac{\\text{Elastic factor}}{\\text{Inertial factor}}}$$
    <b style="color: ${themeColor};">2. Transverse Wave on a Stretched String:</b><br/>
    Elastic factor is string tension $T$; inertial factor is linear mass density $\\mu = m/L$:
    $$\\mathbf{v = \\sqrt{\\frac{T}{\\mu}}}$$
    <b style="color: ${themeColor};">3. Longitudinal Sound Wave in a Fluid (Newton-Laplace Formula):</b><br/>
    Newton assumed acoustic compressions and rarefactions occur isothermally ($B = P$), yielding $v = \\sqrt{P/\\rho} \\approx 280\\text{ m/s}$ in air (a $15\\%$ error).<br/>
    Pierre-Simon Laplace corrected this by recognizing that acoustic pressure changes occur so rapidly that heat exchange is negligible. The process is strictly <strong>adiabatic</strong> with adiabatic bulk modulus $B_{\\text{adia}} = \\gamma P$:
    $$\\mathbf{v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}}$$
    where $\\gamma = C_p / C_v$. At $0^{\\circ}\\text{C}$ in air, this yields $v \\approx 331.3\\text{ m/s}$, matching experimental data perfectly.
  </p>

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    7. Displacement Relation for a Progressive Wave
  </h2>

  <p>A wave traveling continuously in a given direction through a medium without reflection or attenuation is termed a <strong>progressive wave (traveling wave)</strong>.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Mathematical Derivation of Wave Function:</h3>
  <p>Let the particle at origin $x = 0$ execute S.H.M: $y(0,t) = A \\sin(\\omega t)$.<br/>
  The disturbance travels along the positive $x$-direction with wave speed $v$. It reaches a point at position $x$ after a time delay $\\Delta t = x/v$.<br/>
  Therefore, the motion of the particle at position $x$ at time $t$ corresponds to the motion of the origin at the earlier instant $(t - x/v)$:
  $$y(x,t) = A \\sin\\left[ \\omega \\left(t - \\frac{x}{v}\\right) \\right] = A \\sin(\\omega t - k x)$$
  where $k = \\frac{\\omega}{v} = \\frac{2\\pi \\nu}{v} = \\frac{2\\pi}{\\lambda}$ is the <strong>angular wave number (propagation constant)</strong>.<br/>
  Including initial phase $\\phi_0$:
  $$\\mathbf{y(x,t) = A \\sin(kx - \\omega t + \\phi_0)} \\quad \\text{or} \\quad \\mathbf{y(x,t) = A \\sin(\\omega t - kx + \\phi_0)}$$
  - Sign rule: $(kx - \\omega t)$ represents wave propagation in <strong>positive $x$-direction</strong>.<br/>
  - Sign rule: $(kx + \\omega t)$ represents wave propagation in <strong>negative $x$-direction</strong>.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) Particle Velocity vs Wave Velocity:</h3>
  <p>It is vital not to confuse the speed of the wave disturbance ($v$) with the speed of individual medium particles ($v_p$):<br/>
  - <b style="color: ${themeColor};">Wave Velocity:</b> $v = \\nu \\lambda = \\frac{\\omega}{k}$ (constant speed of phase propagation through the medium).<br/>
  - <b style="color: ${themeColor};">Particle Velocity:</b> $v_p = \\frac{\\partial y}{\\partial t} = -\\omega A \\cos(kx - \\omega t)$.<br/>
  - <b style="color: ${themeColor};">Spatial Gradient:</b> $\\frac{\\partial y}{\\partial x} = k A \\cos(kx - \\omega t)$.<br/>
  Dividing particle velocity by wave velocity:
  $$\\mathbf{v_p = - v \\left( \\frac{\\partial y}{\\partial x} \\right)}$$
  Particle velocity equals the negative product of wave velocity and the spatial slope of the wave profile.</p>

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    8. Principle of Superposition of Waves and Reflection of Waves
  </h2>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Principle of Superposition:</h3>
  <p>The <strong>Principle of Superposition</strong> states that when two or more wave trains travel through the same region of an elastic medium simultaneously, the net resultant displacement of any medium particle at any instant is the vector sum of the individual displacements produced by each constituent wave independently:
  $$\\mathbf{y(x,t) = y_1(x,t) + y_2(x,t) + \\dots + y_n(x,t)}$$
  This linear superposition accounts for interference, standing waves, diffraction, and acoustic beats.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) Reflection of Waves and Boundary Conditions:</h3>
  <p>When a traveling wave reaches an interface or boundary separating two different media, part of the wave energy is reflected back into the original medium, and part is transmitted into the second medium.<br/>
  - <b style="color: ${themeColor};">Reflection from a Rigid / Fixed End (Denser Boundary):</b><br/>
    At a fixed boundary ($x = 0$), the particle is clamped and cannot move ($y_{\\text{net}} = 0$). By Newton's Third Law, the wall exerts an equal and opposite reaction force, sending back an inverted wave with an abrupt <strong>phase change of $\\pi\\text{ radians}$ ($180^{\\circ}$)</strong>:
    $$y_i = A \\sin(kx - \\omega t) \\implies y_r = -A \\sin(-kx - \\omega t) = A \\sin(kx + \\omega t + \\pi)$$
    A crest reflects back as a trough; a compression reflects back as a compression (phase inversion of displacement, not pressure).<br/>
  - <b style="color: ${themeColor};">Reflection from a Free / Open End (Rarer Boundary):</b><br/>
    At an open boundary, the medium particle has maximum freedom to oscillate without constraint. The reflected wave experiences <strong>zero phase change</strong> ($\\Delta \\phi = 0$):
    $$y_r = A \\sin(kx + \\omega t)$$
    A crest reflects back as a crest; a compression reflects back as a rarefaction.</p>

  <!-- SECTION 9 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    9. Standing Waves in Strings and Organ Pipes, Fundamental Mode and Harmonics
  </h2>

  <p>When two identical harmonic progressive waves of the same frequency and amplitude travel through a bounded medium in opposite directions along the same straight line, their superposition creates a non-traveling wave pattern called a <strong>standing wave (stationary wave)</strong>.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Analytical Equation of Standing Waves:</h3>
  <p>Let an incident wave travel to the right: $y_1 = A \\sin(kx - \\omega t)$.<br/>
  Let the reflected wave travel to the left: $y_2 = -A \\sin(kx + \\omega t)$ (from fixed boundary at $x=0$).<br/>
  By superposition:
  $$y = y_1 + y_2 = A [\\sin(kx - \\omega t) - \\sin(kx + \\omega t)]$$
  Using trigonometric identity $\\sin(A - B) - \\sin(A + B) = -2 \\sin B \\cos A$:
  $$\\mathbf{y(x,t) = -2A \\sin(kx) \\cos(\\omega t) = A(x) \\cos(\\omega t)}$$
  where the position-dependent amplitude is $A(x) = 2A \\sin(kx)$.<br/>
  - <b style="color: ${themeColor};">Nodes ($N$):</b> Points of permanently zero displacement ($A(x) = 0$). Occur where $\\sin(kx) = 0 \\implies kx = m\\pi \\implies x = 0, \\frac{\\lambda}{2}, \\lambda, \\frac{3\\lambda}{2}, \\dots$<br/>
  - <b style="color: ${themeColor};">Antinodes ($A$):</b> Points of maximum displacement amplitude ($|A(x)| = 2A$). Occur where $\\sin(kx) = \\pm 1 \\implies x = \\frac{\\lambda}{4}, \\frac{3\\lambda}{4}, \\frac{5\\lambda}{4}, \\dots$<br/>
  - Distance between two consecutive nodes (or two antinodes) = $\\frac{\\lambda}{2}$.<br/>
  - Distance between an adjacent node and antinode = $\\frac{\\lambda}{4}$.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) Standing Waves in a Stretched String Fixed at Both Ends:</h3>
  <p>For a string of length $L$ clamped at $x=0$ and $x=L$, both ends must be nodes: $y(L,t) = 0 \\implies \\sin(kL) = 0 \\implies kL = n\\pi$.<br/>
  Since $k = 2\\pi / \\lambda_n$:
  $$\\lambda_n = \\frac{2L}{n} \\quad (n = 1, 2, 3, \\dots)$$
  The permitted natural frequencies are:
  $$\\mathbf{f_n = \\frac{v}{\\lambda_n} = n \\left( \\frac{v}{2L} \\right) = \\frac{n}{2L} \\sqrt{\\frac{T}{\\mu}}}$$
  - $n = 1$: <strong>Fundamental frequency (1st harmonic)</strong>: $f_1 = \\frac{v}{2L}$.<br/>
  - $n = 2$: <strong>First overtone (2nd harmonic)</strong>: $f_2 = 2 f_1$.<br/>
  - $n = 3$: <strong>Second overtone (3rd harmonic)</strong>: $f_3 = 3 f_1$.<br/>
  Stretched strings produce <strong>all integer harmonics</strong>: $f_1 : f_2 : f_3 : \\dots = 1 : 2 : 3 : \\dots$</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(iii) Standing Waves in Organ Pipes (Acoustic Resonance):</h3>
  <p>
    <b style="color: ${themeColor};">1. Open Organ Pipe (Both Ends Open):</b><br/>
    Air particles at both open ends have maximum freedom to vibrate, forming antinodes at both ends.<br/>
    Length $L = n \\left( \\frac{\\lambda_n}{2} \\right) \\implies \\lambda_n = \\frac{2L}{n}$.
    $$\\mathbf{f_n = n \\left( \\frac{v}{2L} \\right) = n f_1} \\quad (n = 1, 2, 3, \\dots)$$
    An open pipe contains <strong>all harmonics</strong> ($1 : 2 : 3 : 4 : \\dots$), producing a rich, pleasant musical timbre.<br/><br/>
    
    <b style="color: ${themeColor};">2. Closed Organ Pipe (One End Closed, One End Open):</b><br/>
    A node forms at the rigid closed end, while an antinode forms at the open end.<br/>
    Length $L = (2n - 1) \\frac{\\lambda_n}{4} \\implies \\lambda_n = \\frac{4L}{2n - 1}$.
    $$\\mathbf{f_n = (2n - 1) \\left( \\frac{v}{4L} \\right) = (2n - 1) f_1} \\quad (n = 1, 2, 3, \\dots)$$
    A closed pipe contains <strong>only odd harmonics</strong> ($1 : 3 : 5 : 7 : \\dots$).<br/>
    Notice that the fundamental frequency of a closed pipe ($f_{\\text{closed}} = \\frac{v}{4L}$) is exactly half that of an open pipe of the same length ($f_{\\text{open}} = \\frac{v}{2L}$).
  </p>

  <!-- SECTION 10 -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    10. Beats
  </h2>

  <p>The phenomenon of periodic waxing and waning in the loudness (intensity) of sound produced when two sound wave trains of slightly differing frequencies travel in the same direction and superpose is called <strong>beats</strong>.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(i) Mathematical Derivation of Beat Frequency:</h3>
  <p>Consider two harmonic sound waves of equal amplitude $A$ and slightly different angular frequencies $\\omega_1$ and $\\omega_2$ ($\\\\omega_1 \\approx \\omega_2$):
  $$y_1(t) = A \\sin(\\omega_1 t) \\quad \\text{and} \\quad y_2(t) = A \\sin(\\omega_2 t)$$
  By the Principle of Superposition:
  $$y(t) = y_1(t) + y_2(t) = A [\\sin(\\omega_1 t) + \\sin(\\omega_2 t)]$$
  Using sum-to-product trigonometric identity:
  $$\\mathbf{y(t) = 2A \\cos\\left( \\frac{\\omega_1 - \\omega_2}{2} t \\right) \\sin\\left( \\frac{\\omega_1 + \\omega_2}{2} t \\right) = R(t) \\sin(\\omega_{\\text{avg}} t)}$$
  where the modulated amplitude is:
  $$R(t) = 2A \\cos\\left( \\frac{\\omega_1 - \\omega_2}{2} t \\right)$$
  Sound intensity is proportional to the square of amplitude ($I \\propto R^2$):
  $$I(t) \\propto 4A^2 \\cos^2\\left( \\frac{\\omega_1 - \\omega_2}{2} t \\right) = 2A^2 [1 + \\cos((\\omega_1 - \\omega_2) t)]$$
  The intensity modulates with angular frequency $\\omega_b = \\omega_1 - \\omega_2 = 2\\pi (f_1 - f_2)$.<br/>
  Therefore, the <strong>beat frequency ($f_b$)</strong> is:
  $$\\mathbf{f_b = |f_1 - f_2|}$$
  One beat consists of one waxing (maximum loudness) and one waning (minimum loudness). The time period of one beat is $T_b = \\frac{1}{f_b} = \\frac{1}{|f_1 - f_2|}$.</p>

  <h3 style="color: ${themeColor}; font-size: 16px; margin-top: 18px;">(ii) Practical Applications of Beats:</h3>
  <p>
    1. <b style="color: ${themeColor};">Tuning Musical Instruments:</b> Musicians adjust string tension until beats between their instrument and a standard reference fork completely cease ($f_b = 0$).<br/>
    2. <b style="color: ${themeColor};">Determining Unknown Frequencies:</b> Sounds produced by an unknown fork and a calibrated fork yield $f_b$. Waxing or filing the fork determines whether $f_x = f_0 + f_b$ or $f_0 - f_b$.<br/>
    3. <b style="color: ${themeColor};">Mine Safety Detectors:</b> In coal mines, two organ pipes (one blown with pure air, one with mine air containing methane gas) produce beats if explosive gas enters, alerting miners immediately.
  </p>

  ${examTrapBox(
    "Persistence of Hearing Limit",
    "The human auditory system possesses a physiological persistence of hearing of $\\Delta t \\approx 0.1\\text{ s}$. If the beat frequency exceeds $10\\text{ Hz}$ ($f_b > 10\\text{ beats/s}$), successive intensity waxings occur faster than $0.1\\text{ s}$, blending into a single continuous, harsh tone rather than distinct separable beats."
  )}

  <!-- MASTER COMPARISON TABLES -->
  <h2 style="color: ${themeColor}; font-size: 19px; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">
    Master Comparison Matrices
  </h2>

  <h3 style="color: ${themeColor}; font-size: 15px; margin-top: 15px;">Table 1: Progressive Waves vs. Standing (Stationary) Waves</h3>
  <div style="overflow-x: auto; margin: 12px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; border: 1px solid rgba(0, 229, 255, 0.3);">
      <thead>
        <tr style="background: rgba(0, 229, 255, 0.15); color: ${themeColor};">
          <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3); width: 25%;">Characteristic</th>
          <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">Progressive Wave</th>
          <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">Standing (Stationary) Wave</th>
        </tr>
      </thead>
      <tbody style="color: #CBD5E1;">
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Propagation</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Travels continuously forward with constant wave speed $v$.</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Confined between boundaries; no forward phase propagation.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Energy Transmission</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Continuously transports energy and momentum across space.</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Zero net energy transport; energy is trapped between nodes.</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Amplitude Distribution</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Every particle vibrates with the identical amplitude $A$.</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Varies from zero at nodes to maximum $2A$ at antinodes.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Phase Relationships</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Phase changes continuously from particle to particle: $\\Delta\\phi = k \\Delta x$.</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">All particles between two consecutive nodes vibrate in exact phase.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: ${themeColor}; font-size: 15px; margin-top: 20px;">Table 2: Open Organ Pipe vs. Closed Organ Pipe</h3>
  <div style="overflow-x: auto; margin: 12px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; border: 1px solid rgba(0, 229, 255, 0.3);">
      <thead>
        <tr style="background: rgba(0, 229, 255, 0.15); color: ${themeColor};">
          <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3); width: 25%;">Parameter</th>
          <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">Open Organ Pipe (Length $L$)</th>
          <th style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">Closed Organ Pipe (Length $L$)</th>
        </tr>
      </thead>
      <tbody style="color: #CBD5E1;">
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Boundary Conditions</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Antinodes at both ends.</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Node at closed end; Antinode at open end.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Fundamental Frequency</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold; color: ${themeColor};">$f_1 = \\frac{v}{2L}$</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold; color: ${themeColor};">$f'_1 = \\frac{v}{4L} = \\frac{f_1}{2}$</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Harmonics Present</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);"><strong>All harmonics:</strong> $f_1, 2f_1, 3f_1, 4f_1, \\dots$ ($1:2:3:4$)</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);"><strong>Only odd harmonics:</strong> $f'_1, 3f'_1, 5f'_1, \\dots$ ($1:3:5$)</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2); font-weight: bold;">Musical Quality (Timbre)</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Rich, resonant, pleasant timbre due to even &amp; odd overtones.</td>
          <td style="padding: 8px; border: 1px solid rgba(0, 229, 255, 0.2);">Hollow, somber timbre due to absence of even harmonics.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- MASTER REVISION FORMULA CHEAT SHEET -->
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 20px; margin-top: 35px; margin-bottom: 20px;">
    <h2 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 20px; font-weight: bold; text-align: center;">
      ⚡ Master Revision Formula Cheat Sheet — Unit X: Oscillations &amp; Waves
    </h2>
    <p style="color: #94A3B8; font-size: 13px; text-align: center; margin-bottom: 18px;">
      Comprehensive quick-reference formula summary in stacked fraction format with zero carets.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 14px; font-size: 13.5px;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Linear S.H.M Kinematics:</b><br/>
        $x = A \\cos(\\omega t + \\phi_0)$<br/>
        $v = \\pm \\omega \\sqrt{A^2 - x^2}$ &bull; $v_{\\text{max}} = \\omega A$<br/>
        $a = -\\omega^2 x$ &bull; $|a_{\\text{max}}| = \\omega^2 A$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Oscillator Periods:</b><br/>
        Spring: $T = 2\\pi \\sqrt{\\frac{m}{k}}$<br/>
        Simple Pendulum: $T = 2\\pi \\sqrt{\\frac{L}{g}}$<br/>
        Seconds Pendulum: $T = 2\\text{ s} \\implies L \\approx 0.993\\text{ m}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Energy in S.H.M:</b><br/>
        $U = \\frac{1}{2} k x^2 = \\frac{1}{2} m \\omega^2 x^2$<br/>
        $E_k = \\frac{1}{2} k (A^2 - x^2)$<br/>
        $E_{\\text{total}} = \\frac{1}{2} k A^2 = \\text{Constant}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Wave Speeds:</b><br/>
        General: $v = \\nu \\lambda = \\frac{\\omega}{k}$<br/>
        Stretched String: $v = \\sqrt{\\frac{T}{\\mu}}$<br/>
        Laplace Sound: $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Progressive &amp; Standing Waves:</b><br/>
        Wave: $y = A \\sin(kx - \\omega t)$ &bull; $k = \\frac{2\\pi}{\\lambda}$<br/>
        Standing Wave: $y = -2A \\sin(kx) \\cos(\\omega t)$<br/>
        Node spacing: $\\frac{\\lambda}{2}$ &bull; Node-Antinode: $\\frac{\\lambda}{4}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Organ Pipes &amp; Harmonics:</b><br/>
        Open pipe: $f_n = n \\left(\\frac{v}{2L}\\right)$ ($n=1,2,3...$)<br/>
        Closed pipe: $f_n = (2n-1) \\left(\\frac{v}{4L}\\right)$ ($n=1,2,3...$)<br/>
        String fixed ends: $f_n = \\frac{n}{2L} \\sqrt{\\frac{T}{\\mu}}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Beats &amp; Modulation:</b><br/>
        Beat frequency: $f_b = |f_1 - f_2|$<br/>
        Audibility limit: $f_b \\le 10\\text{ Hz}$<br/>
        Beat period: $T_b = \\frac{1}{|f_1 - f_2|}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Phase and Path Differences:</b><br/>
        $\\Delta \\phi = \\left(\\frac{2\\pi}{\\lambda}\\right) \\Delta x$<br/>
        $\\Delta \\phi = \\left(\\frac{2\\pi}{T}\\right) \\Delta t$<br/>
        Particle velocity: $v_p = -v \\left(\\frac{\\partial y}{\\partial x}\\right)$
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
