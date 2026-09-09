const { themeColor, frac, stepDerivationBox } = require('./c11_phy_5_helpers');

function getSolutionsPart3() {
  return `
  <!-- SECTION C: LONG ANSWER (LA) QUESTIONS & DERIVATIONS (5 MARKS EACH) -->
  <div style="background: rgba(171, 71, 188, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions & Derivations (5 Marks Each) &bull; Q81 to Q100
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Exhaustive mathematical derivations, calculus integrations, equilibrium systems, rotational dynamics proofs, and board exam derivations.
    </p>
  </div>

  <!-- Q81 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q81: Derive the expressions for the position, velocity, and acceleration of the centre of mass of a two-particle system. Prove that internal forces cancel out.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Consider two particles of masses $m_1$ and $m_2$ located at position vectors $\\vec{r}_1$ and $\\vec{r}_2$ with respect to an origin $O$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Position Vector of CM',
        math: `$$\\vec{R}_{\\text{cm}} = \frac{m_1 \\vec{r}_1 + m_2 \\vec{r}_2}{m_1 + m_2} = \\frac{1}{M}(m_1 \\vec{r}_1 + m_2 \\vec{r}_2)$$ where $M = m_1 + m_2$.`
      },
      {
        step: 'Step 2: Velocity of Centre of Mass',
        math: `Differentiating with respect to time $t$:
        $$\\vec{V}_{\\text{cm}} = \frac{d\\vec{R}_{\\text{cm}}}{dt} = \\frac{1}{M}\\left(m_1 \frac{d\\vec{r}_1}{dt} + m_2 \frac{d\\vec{r}_2}{dt}\\right) = \frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2}{M}$$
        Multiplying by $M$: $M \\vec{V}_{\\text{cm}} = m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = \\vec{p}_1 + \\vec{p}_2 = \\vec{P}_{\\text{total}}$.`
      },
      {
        step: 'Step 3: Acceleration of Centre of Mass & Newton&apos;s Second Law',
        math: `Differentiating once more with respect to $t$:
        $$\\vec{A}_{\\text{cm}} = \frac{d\\vec{V}_{\\text{cm}}}{dt} = \\frac{1}{M}\\left(m_1 \\vec{a}_1 + m_2 \\vec{a}_2\\right) \\implies M \\vec{A}_{\\text{cm}} = m_1 \\vec{a}_1 + m_2 \\vec{a}_2$$
        The total force on $m_1$ is $\\vec{F}_1 = \\vec{F}_{1,\\text{ext}} + \\vec{F}_{12}$, and on $m_2$ is $\\vec{F}_2 = \\vec{F}_{2,\\text{ext}} + \\vec{F}_{21}$.
        $$M \\vec{A}_{\\text{cm}} = (\\vec{F}_{1,\\text{ext}} + \\vec{F}_{12}) + (\\vec{F}_{2,\\text{ext}} + \\vec{F}_{21}) = (\\vec{F}_{1,\\text{ext}} + \\vec{F}_{2,\\text{ext}}) + (\\vec{F}_{12} + \\vec{F}_{21})$$`
      },
      {
        step: 'Step 4: Cancellation of Internal Forces by Newton&apos;s Third Law',
        math: `By Newton&apos;s Third Law, $\\vec{F}_{12} = -\\vec{F}_{21} \\implies \\vec{F}_{12} + \\vec{F}_{21} = \\vec{0}$.
        $$M \\vec{A}_{\\text{cm}} = \\vec{F}_{1,\\text{ext}} + \\vec{F}_{2,\\text{ext}} = \\vec{F}_{\\text{ext}}$$
        $$\\vec{A}_{\\text{cm}} = \frac{\\vec{F}_{\\text{ext}}}{M}$$
        <b>Conclusion:</b> The centre of mass accelerates solely in response to external forces; internal interaction forces cancel out completely.`
      }
    ])}
  </div>

  <!-- Q82 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q82: Prove that in the absence of external forces, the centre of mass moves with constant velocity. Discuss its application to an exploding projectile.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Proof:</b> From the equation of motion of the centre of mass:
      $M \\vec{A}_{\\text{cm}} = \\vec{F}_{\\text{ext}}$.
      <br/>If no external force acts on the system, $\\vec{F}_{\\text{ext}} = \\vec{0}$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin: 8px 0;">
      $M \frac{d\\vec{V}_{\\text{cm}}}{dt} = \\vec{0} \\implies \\vec{V}_{\\text{cm}} = \\text{constant vector} \\implies \\vec{R}_{\\text{cm}}(t) = \\vec{R}_0 + \\vec{V}_{\\text{cm}} t$
    </div>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Application to Exploding Projectile:</b>
      <br/>When a shell is fired at angle $\theta$ with speed $u$, it follows a standard parabolic trajectory under gravity ($M\\vec{g}$). If it explodes in mid-air at the highest point into multiple fragments:
      <br/>&bull; The explosive blast is generated purely by <b>internal chemical forces</b>, which sum to zero.
      <br/>&bull; The only external force acting on the collection of flying fragments is still the constant gravitational force: $\\vec{F}_{\\text{ext}} = \\sum m_i \\vec{g} = M\\vec{g}$.
      <br/>&bull; Therefore, the acceleration of the centre of mass remains $\\vec{A}_{\\text{cm}} = \\vec{g}$ downwards.
      <br/>&bull; <b>Result:</b> The centre of mass of the fragments continues precisely along the original parabolic trajectory until the first fragment strikes the ground.
    </p>
  </div>

  <!-- Q83 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q83: Rigorously derive the position of the centre of mass of a thin uniform rod of length L and mass M using calculus integration.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Let a thin uniform rod of mass $M$ and length $L$ lie along the positive x-axis with its left end at the origin $x = 0$ and right end at $x = L$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Linear Mass Density & Differential Mass Element',
        math: `Since the rod is uniform, its linear mass density $\\lambda$ is constant:
        $$\\lambda = \\frac{M}{L}$$
        Consider an infinitesimal element of length $dx$ situated at distance $x$ from the origin.
        $$dm = \\lambda\\,dx = \\frac{M}{L}\\,dx$$`
      },
      {
        step: 'Step 2: Integration of Mass Moment',
        math: `By definition of the centre of mass for continuous mass distributions:
        $$X_{\\text{cm}} = \\frac{1}{M}\\int x\\,dm = \\frac{1}{M}\\int_0^L x \\left(\\frac{M}{L}\\,dx\\right) = \\frac{1}{L}\\int_0^L x\\,dx$$`
      },
      {
        step: 'Step 3: Evaluating the Definite Integral',
        math: `$$\\int_0^L x\\,dx = \\left[ \\frac{x^2}{2} \\right]_0^L = \\frac{L^2}{2} - 0 = \\frac{L^2}{2}$$
        Substituting back:
        $$X_{\\text{cm}} = \\frac{1}{L} \\times \\frac{L^2}{2} = \\frac{L}{2}$$`
      },
      {
        step: 'Step 4: Conclusion & Physical Interpretation',
        math: `Since the rod has uniform cross-section, $Y_{\\text{cm}} = 0$ and $Z_{\\text{cm}} = 0$.
        Therefore, the centre of mass is situated exactly at the <b>geometric midpoint</b>:
        $$\\vec{R}_{\\text{cm}} = \\left(\\frac{L}{2}, 0, 0\\right)$$`
      }
    ])}
  </div>

  <!-- Q84 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q84: Define torque (moment of a force). Derive its Cartesian rectangular components and explain the Right-Hand Grip Rule.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Definition:</b> Torque (moment of a force) $\\vec{\\tau}$ represents the turning or rotational effect produced by a force $\\vec{F}$ acting at position $\\vec{r}$ relative to a reference pivot:
      $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Cartesian Representation of Vectors',
        math: `Let $\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}$ and $\\vec{F} = F_x\\hat{i} + F_y\\hat{j} + F_z\\hat{k}$.`
      },
      {
        step: 'Step 2: Determinant Cross Product Expansion',
        math: `$$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ x & y & z \\\\ F_x & F_y & F_z \\end{vmatrix}$$
        $$\\vec{\\tau} = \\hat{i}(y F_z - z F_y) + \\hat{j}(z F_x - x F_z) + \\hat{k}(x F_y - y F_x)$$`
      },
      {
        step: 'Step 3: Component Identification',
        math: `$$\\tau_x = y F_z - z F_y$$
        $$\\tau_y = z F_x - x F_z$$
        $$\\tau_z = x F_y - y F_x$$
        For planar motion in the $xy$-plane ($z = 0, F_z = 0$), only the z-component survives: $\\tau_z = x F_y - y F_x$.`
      },
      {
        step: 'Step 4: Direction via Right-Hand Grip Rule',
        math: `Point the fingers of the right hand along $\\vec{r}$ and curl them towards $\\vec{F}$ through the smaller angle $\\theta$. The extended thumb indicates the unique axial vector direction of $\\vec{\\tau}$. Counter-clockwise rotation yields torque pointing outward (+z); clockwise rotation yields torque pointing inward (-z).`
      }
    ])}
  </div>

  <!-- Q85 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q85: Derive the master relation between torque and angular momentum: &tau;&vec; = dL&vec;/dt for a single particle and extend it to a system of particles.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>By definition, the angular momentum of a particle of mass $m$ with position vector $\\vec{r}$ and linear momentum $\\vec{p}$ is:
      $\\vec{L} = \\vec{r} \\times \\vec{p}$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Differentiating with Product Rule',
        math: `$$\\frac{d\\vec{L}}{dt} = \\frac{d}{dt}(\\vec{r} \\times \\vec{p}) = \\left(\\frac{d\\vec{r}}{dt} \\times \\vec{p}\\right) + \\left(\\vec{r} \\times \\frac{d\\vec{p}}{dt}\\right)$$`
      },
      {
        step: 'Step 2: Vanishing of the First Term',
        math: `Note that $\\frac{d\\vec{r}}{dt} = \\vec{v}$ and $\\vec{p} = m\\vec{v}$.
        $$\\frac{d\\vec{r}}{dt} \\times \\vec{p} = \\vec{v} \\times (m\\vec{v}) = m(\\vec{v} \\times \\vec{v}) = \\vec{0}$$
        because the cross product of any vector with itself is identically zero.`
      },
      {
        step: 'Step 3: Substitution of Newton&apos;s Second Law',
        math: `By Newton&apos;s Second Law, $\\frac{d\\vec{p}}{dt} = \\vec{F}$.
        Therefore:
        $$\\frac{d\\vec{L}}{dt} = \\vec{0} + \\vec{r} \\times \\vec{F} = \\vec{r} \\times \\vec{F} = \\vec{\\tau}$$`
      },
      {
        step: 'Step 4: Extension to System of Particles',
        math: `For a system: $\\vec{L}_{\\text{sys}} = \\sum \\vec{L}_i$.
        $$\\frac{d\\vec{L}_{\\text{sys}}}{dt} = \\sum \\frac{d\\vec{L}_i}{dt} = \\sum (\\vec{\\tau}_{i,\\text{ext}} + \\vec{\\tau}_{i,\\text{int}})$$
        Internal torques between pairs of particles cancel in pairs by Newton&apos;s third law (central forces).
        $$\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}_{\\text{sys}}}{dt}$$`
      }
    ])}
  </div>

  <!-- Q86 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q86: State and derive the Law of Conservation of Angular Momentum. Explain two real-world applications in detail.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Statement:</b> When the net external torque acting on a system of particles or a rotating rigid body is zero, the total angular momentum of the system remains constant in magnitude and direction.
    </p>
    ${stepDerivationBox([
      {
        step: 'Mathematical Proof',
        math: `From the fundamental rotational dynamical equation:
        $$\\vec{\\tau}_{\\text{ext}} = \\frac{d\\vec{L}}{dt}$$
        If $\\vec{\\tau}_{\\text{ext}} = \\vec{0}$:
        $$\\frac{d\\vec{L}}{dt} = \\vec{0} \\implies \\vec{L} = \\text{constant vector}$$
        For rotation about a fixed principal axis where $L = I\\omega$:
        $$I \\omega = \\text{constant} \\implies I_1 \\omega_1 = I_2 \\omega_2$$`
      }
    ])}
    <p style="margin: 10px 0 0 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Real-World Applications:</b>
      <br/><b>1. Ballet Dancers and Figure Skaters:</b> A skater initiates a pirouette with arms and one leg stretched outward, creating a large moment of inertia $I_1$. When she pulls her arms and leg tightly against her torso, her moment of inertia decreases dramatically to $I_2 < I_1$. Since $I_1 \omega_1 = I_2 \omega_2$, her spin velocity $\omega_2$ accelerates sharply into a rapid spin.
      <br/><b>2. Acrobatic Springboard Divers:</b> On launching from the board, a diver leaves the board with a fixed angular momentum. In mid-air, the diver draws the knees to the chest and tucks the head (decreasing $I$), enabling 3 to 4 complete somersaults. Just prior to hitting the water, the diver fully extends arms and legs (increasing $I$), dropping $\omega$ to zero for a clean, vertical entry.
    </p>
  </div>

  <!-- Q87 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q87: Prove Kepler&apos;s Second Law of Planetary Motion using the conservation of angular momentum under a central gravitational force.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Proof:</b>
      <br/>Let a planet of mass $m$ orbit the Sun of mass $M_s$ located at the origin $O$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Central Force & Torque Calculation',
        math: `The gravitational pull of the Sun is a central force directed along $-\\hat{r}$:
        $$\\vec{F} = -\\frac{G M_s m}{r^2}\\,\\hat{r}$$
        The torque acting on the planet about the Sun:
        $$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{r} \\times \\left(-\\frac{G M_s m}{r^2}\\,\\hat{r}\\right) = \\vec{0}$$
        since $\\vec{r}$ is parallel to $\\hat{r}$ ($\theta = 180^\\circ, \\sin 180^\\circ = 0$).`
      },
      {
        step: 'Step 2: Conservation of Angular Momentum',
        math: `$$\\vec{\\tau} = \\frac{d\\vec{L}}{dt} = \\vec{0} \\implies \\vec{L} = \\vec{r} \\times \\vec{p} = \\text{constant vector}$$`
      },
      {
        step: 'Step 3: Geometrical Area Swept Out in Time dt',
        math: `In differential time $dt$, the position vector $\\vec{r}$ moves through displacement $d\\vec{r} = \\vec{v}\\,dt$.
        The infinitesimal triangular area swept out by $\\vec{r}$ is:
        $$d\\vec{A} = \\frac{1}{2}(\\vec{r} \\times d\\vec{r}) = \\frac{1}{2}(\\vec{r} \\times \\vec{v}\\,dt)$$`
      },
      {
        step: 'Step 4: Areal Velocity Formula',
        math: `Dividing both sides by $dt$:
        $$\\frac{d\\vec{A}}{dt} = \\frac{1}{2}(\\vec{r} \\times \\vec{v}) = \\frac{1}{2m}(\\vec{r} \\times m\\vec{v}) = \frac{\\vec{L}}{2m}$$
        Since $\\vec{L}$ and $m$ are constant, the <b>areal velocity</b> is constant:
        $$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$$
        This proves Kepler&apos;s second law: the radius vector sweeps out equal areas in equal intervals of time.`
      }
    ])}
  </div>

  <!-- Q88 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q88: Formulate the conditions for complete mechanical equilibrium of a rigid body and establish the Principle of Moments.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Theory of Equilibrium:</b> A rigid body is in complete mechanical equilibrium when its linear momentum and angular momentum are both constant in time.
    </p>
    ${stepDerivationBox([
      {
        step: '1. First Condition: Translational Equilibrium',
        math: `$$\\vec{P} = \\text{constant} \\implies \\frac{d\\vec{P}}{dt} = \\vec{0} \\implies \\sum \\vec{F}_{\\text{ext}} = \\vec{0}$$
        In Cartesian components:
        $$\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0$$`
      },
      {
        step: '2. Second Condition: Rotational Equilibrium',
        math: `$$\\vec{L} = \\text{constant} \\implies \\frac{d\\vec{L}}{dt} = \\vec{0} \\implies \\sum \\vec{\\tau}_{\\text{ext}} = \\vec{0}$$
        In Cartesian components about any arbitrary point $O$:
        $$\\sum \\tau_x = 0, \\quad \\sum \\tau_y = 0, \\quad \\sum \\tau_z = 0$$`
      },
      {
        step: '3. Derivation of Principle of Moments for a Lever',
        math: `Consider a light horizontal beam supported at fulcrum $F$. A load $W = F_1$ acts downward at distance $d_1$ to the left, and an effort $E = F_2$ acts downward at distance $d_2$ to the right. Normal reaction at fulcrum is $R$.
        Translational balance: $R - F_1 - F_2 = 0 \\implies R = F_1 + F_2$.
        Rotational balance taking torques about fulcrum $F$:
        $$\\sum \\tau = F_1 d_1 - F_2 d_2 = 0 \\implies F_1 d_1 = F_2 d_2$$
        $$\\text{Load} \\times \\text{Load Arm} = \\text{Effort} \\times \\text{Effort Arm}$$
        Mechanical Advantage: $\\text{M.A.} = \\frac{F_1}{F_2} = \\frac{d_2}{d_1}$.`
      }
    ])}
  </div>

  <!-- Q89 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q89: Derive the three equations of rotational motion with constant angular acceleration &alpha; using the calculus method.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Calculus Derivation:</b>
    </p>
    ${stepDerivationBox([
      {
        step: '1. First Equation: &omega; = &omega;<sub>0</sub> + &alpha; t',
        math: `By definition, angular acceleration $\\alpha = \\frac{d\\omega}{dt} \\implies d\\omega = \\alpha\\,dt$.
        Integrating between limits $t = 0$ (where $\\omega = \\omega_0$) to $t = t$ (where $\\omega = \\omega$):
        $$\\int_{\\omega_0}^\\omega d\\omega = \\alpha \\int_0^t dt \\implies \\omega - \\omega_0 = \\alpha t \\implies \\omega = \\omega_0 + \\alpha t$$`
      },
      {
        step: '2. Second Equation: &theta; = &omega;<sub>0</sub> t + &frac12; &alpha; t<sup>2</sup>',
        math: `By definition, $\\omega = \\frac{d\\theta}{dt} \\implies d\\theta = \\omega\\,dt = (\\omega_0 + \\alpha t)\\,dt$.
        Integrating between $t = 0$ (where $\\theta = 0$) to $t = t$ (where $\\theta = \\theta$):
        $$\\int_0^\\theta d\\theta = \\int_0^t (\\omega_0 + \\alpha t)\\,dt = \\omega_0 \\int_0^t dt + \\alpha \\int_0^t t\\,dt$$
        $$\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$$`
      },
      {
        step: '3. Third Equation: &omega;<sup>2</sup> = &omega;<sub>0</sub><sup>2</sup> + 2&alpha;&theta;',
        math: `Using the chain rule: $\\alpha = \\frac{d\\omega}{dt} = \\frac{d\\omega}{d\\theta} \\frac{d\\theta}{dt} = \\omega \\frac{d\\omega}{d\\theta} \\implies \\omega\\,d\\omega = \\alpha\\,d\\theta$.
        Integrating between $\\omega_0$ to $\\omega$ and $0$ to $\\theta$:
        $$\\int_{\\omega_0}^\\omega \\omega\\,d\\omega = \\alpha \\int_0^\\theta d\\theta \\implies \\left[ \\frac{\\omega^2}{2} \\right]_{\\omega_0}^\\omega = \\alpha \\theta$$
        $\\frac{\\omega^2 - \\omega_0^2}{2} = \\alpha \\theta \\implies \\omega^2 = \\omega_0^2 + 2\\alpha\\theta$$`
      }
    ])}
  </div>

  <!-- Q90 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q90: Derive the formula for Rotational Kinetic Energy: K<sub>rot</sub> = &frac12; I &omega;<sup>2</sup> and prove the Rotational Work-Energy Theorem.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Consider a rigid body rotating about a fixed axis with angular velocity $\omega$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Summing Kinetic Energies of Constituent Particles',
        math: `Let the body comprise $n$ particles of masses $m_1, m_2, \\dots, m_n$ at perpendicular distances $r_1, r_2, \\dots, r_n$ from the axis of rotation.
        The linear speed of the $i$-th particle is $v_i = r_i \\omega$.
        The total kinetic energy of the rigid body is:
        $$K_{\\text{rot}} = \\sum_{i=1}^n \\frac{1}{2} m_i v_i^2 = \\sum_{i=1}^n \\frac{1}{2} m_i (r_i \\omega)^2 = \\frac{1}{2}\\left(\\sum_{i=1}^n m_i r_i^2\\right) \\omega^2$$`
      },
      {
        step: 'Step 2: Introducing Moment of Inertia I',
        math: `By definition, $I = \\sum_{i=1}^n m_i r_i^2$.
        $$K_{\\text{rot}} = \\frac{1}{2} I \\omega^2$$`
      },
      {
        step: 'Step 3: Rotational Work-Energy Theorem Proof',
        math: `Work done by torque in infinitesimal angular displacement $d\\theta$ is $dW = \\tau\\,d\\theta$.
        Using $\\tau = I\\alpha = I\\left(\\frac{d\\omega}{dt}\\right)$ and $d\\theta = \\omega\\,dt$:
        $$dW = \\left(I \\frac{d\\omega}{dt}\\right)(\\omega\\,dt) = I \\omega\\,d\\omega$$
        Integrating from initial angular speed $\\omega_0$ to final angular speed $\\omega$:
        $$W = \\int_{\\omega_0}^\\omega I\\omega\\,d\\omega = I \\left[ \\frac{\\omega^2}{2} \\right]_{\\omega_0}^\\omega = \\frac{1}{2} I \\omega^2 - \\frac{1}{2} I \\omega_0^2 = \\Delta K_{\\text{rot}}$$
        <b>Conclusion:</b> Work done by external torque equals the change in rotational kinetic energy.`
      }
    ])}
  </div>

  <!-- Q91 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q91: Define Moment of Inertia and Radius of Gyration. Explain why Moment of Inertia is neither a true scalar nor a simple vector (Tensor nature).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Moment of Inertia ($I$):</b> Defined mathematically as $I = \\sum m_i r_i^2$. Physically, it represents the resistance of a rigid body to angular acceleration under applied torque ($\tau = I\alpha$).
      <br/><b style="color: ${themeColor};">Radius of Gyration ($k$):</b> The perpendicular distance from the axis of rotation to a single point where, if the entire mass $M$ of the body were concentrated, its moment of inertia would remain identical: $I = M k^2 \implies k = \sqrt{I/M}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 10px 14px; border-radius: 4px; margin: 10px 0;">
      <b style="color: ${themeColor};">Why Moment of Inertia is a Tensor:</b>
      <br/>1. <b>Not a Scalar:</b> A scalar possesses only magnitude and has the exact same value in all directions. For a rigid body (e.g. an ellipsoid or a cylinder), the moment of inertia changes completely when calculated about different axes passing through the very same point ($I_x \ne I_y \ne I_z$).
      <br/>2. <b>Not a Vector:</b> It does not obey the parallelogram law of vector addition and has no unique direction in space.
      <br/>3. <b>Tensor of Rank 2:</b> An applied torque vector $\vec{\tau}$ along one axis can produce angular acceleration $\vec{\alpha}$ along a different axis unless the rotation is about a principal axis of inertia. In general, $\vec{L} = \\mathbf{I} \\vec{\\omega}$, where $\\mathbf{I}$ is a $3 \\times 3$ symmetric matrix (the Inertia Tensor).
    </div>
  </div>

  <!-- Q92 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q92: Construct an exhaustive comparison between Linear Translational Mechanics and Rotational Mechanics.</h3>
    <p style="margin: 0 0 10px 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Tabular Correspondence:</b>
    </p>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #CBD5E1;">
        <thead>
          <tr style="background: rgba(171, 71, 188, 0.2); color: ${themeColor};">
            <th style="padding: 8px; border: 1px solid rgba(171, 71, 188, 0.3); text-align: left;">Feature / Concept</th>
            <th style="padding: 8px; border: 1px solid rgba(171, 71, 188, 0.3); text-align: left;">Translational Motion</th>
            <th style="padding: 8px; border: 1px solid rgba(171, 71, 188, 0.3); text-align: left;">Rotational Motion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Displacement</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$s$ or $\vec{r}$ (m)</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$\theta$ (rad)</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Velocity</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$v = ds/dt$ (m/s)</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$\omega = d\theta/dt$ (rad/s)</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Acceleration</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$a = dv/dt$ (m/s<sup>2</sup>)</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$\alpha = d\omega/dt$ (rad/s<sup>2</sup>)</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Inertia Measure</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Mass $M$ (kg)</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Moment of Inertia $I = \sum m_i r_i^2$ (kg m<sup>2</sup>)</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Dynamical Cause</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Force $\vec{F}$ (N)</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Torque $\vec{\tau} = \vec{r}\times\vec{F}$ (N m)</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Newton&apos;s 2nd Law</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$F = M a$</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$\tau = I \alpha$</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Momentum</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$P = M v$</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$L = I \omega$</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Kinetic Energy</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$K = \frac{1}{2} M v^2$</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$K_{\text{rot}} = \frac{1}{2} I \omega^2$</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Work Done</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$W = \int F\,ds$</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$W = \int \tau\,d\theta$</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Power</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$P = F v$</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$P = \tau \omega$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Q93 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q93: Analyze pure rolling motion without slipping. Derive the total kinetic energy formula: K = &frac12; M v<sub>cm</sub><sup>2</sup> (1 + k<sup>2</sup>/R<sup>2</sup>).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Pure rolling of a body of mass $M$, radius $R$, and radius of gyration $k$ is the simultaneous combination of translation of the centre of mass and rotation about the centre of mass.
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Condition for Rolling Without Slipping',
        math: `At the instantaneous point of contact with the ground, the backward tangential velocity due to rotation must cancel the forward translational velocity:
        $$v_{\\text{contact}} = v_{\\text{cm}} - R\\omega = 0 \\implies v_{\\text{cm}} = R\\omega \\implies \\omega = \frac{v_{\\text{cm}}}{R}$$`
      },
      {
        step: 'Step 2: Total Kinetic Energy Expression',
        math: `$$K_{\\text{total}} = K_{\\text{trans}} + K_{\\text{rot}} = \\frac{1}{2} M v_{\\text{cm}}^2 + \\frac{1}{2} I_{\\text{cm}} \\omega^2$$`
      },
      {
        step: 'Step 3: Factoring with Radius of Gyration k',
        math: `Substitute $I_{\\text{cm}} = M k^2$ and $\\omega = \\frac{v_{\\text{cm}}}{R}$:
        $$K_{\\text{total}} = \\frac{1}{2} M v_{\\text{cm}}^2 + \\frac{1}{2}(M k^2)\\left(\frac{v_{\\text{cm}}}{R}\\right)^2$$
        $$K_{\\text{total}} = \\frac{1}{2} M v_{\\text{cm}}^2 + \\frac{1}{2} M v_{\\text{cm}}^2 \\left(\\frac{k^2}{R^2}\\right)$$
        $$K_{\\text{total}} = \\frac{1}{2} M v_{\\text{cm}}^2 \\left(1 + \\frac{k^2}{R^2}\\right)$$`
      },
      {
        step: 'Step 4: Energy Partition Ratios',
        math: `Translational fraction: $\\frac{K_{\\text{trans}}}{K_{\\text{total}}} = \\frac{1}{1 + k^2/R^2}$<br/>
        Rotational fraction: $\\frac{K_{\\text{rot}}}{K_{\\text{total}}} = \\frac{k^2/R^2}{1 + k^2/R^2}$`
      }
    ])}
  </div>

  <!-- Q94 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q94: Derive the acceleration of a body rolling down a rough incline without slipping. Rank ring, disc, and sphere in an incline race.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Consider a round body of mass $M$, radius $R$, radius of gyration $k$ rolling down an incline of angle $\theta$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Equations of Motion',
        math: `Translational equation down the slope:
        $$M g \\sin\\theta - f_s = M a$$
        Rotational equation about centre of mass:
        $$\\tau = f_s R = I \\alpha = (M k^2) \\left(\\frac{a}{R}\\right) \\implies f_s = M a \\left(\\frac{k^2}{R^2}\\right)$$`
      },
      {
        step: 'Step 2: Solving for Linear Acceleration a',
        math: `Substitute $f_s$ into the translational equation:
        $$M g \\sin\\theta - M a \\left(\\frac{k^2}{R^2}\\right) = M a$$
        $$g \\sin\\theta = a \\left(1 + \\frac{k^2}{R^2}\\right) \\implies a = \\frac{g\\sin\\theta}{1 + }\\frac{k^2}{R^2}}}$$`
      },
      {
        step: 'Step 3: Minimum Friction Coefficient for Pure Rolling',
        math: `Normal force $N = M g \\cos\\theta$. For no slipping: $f_s \\le \\mu_s N$.
        $$M a \\left(\\frac{k^2}{R^2}\\right) \\le \\mu_s M g \\cos\\theta \\implies \\mu_s \\ge \\frac{\\tan\\theta}{1 + }\\frac{R^2}{k^2}}}$$`
      },
      {
        step: 'Step 4: Race Down the Incline (Ring vs Disc vs Solid Sphere)',
        math: `Values of $k^2/R^2$:
        <br/>&bull; Solid Sphere: $k^2/R^2 = 2/5 = 0.40 \\implies a = \\frac{5}{7} g\\sin\\theta \\approx 0.714 g\\sin\\theta$
        <br/>&bull; Solid Disc: $k^2/R^2 = 1/2 = 0.50 \\implies a = \\frac{2}{3} g\\sin\\theta \\approx 0.667 g\\sin\\theta$
        <br/>&bull; Ring: $k^2/R^2 = 1.00 \\implies a = \\frac{1}{2} g\\sin\\theta = 0.500 g\\sin\\theta$
        <br/><b>Winner:</b> The <b>solid sphere</b> arrives first, followed by the <b>disc</b>, and the <b>ring</b> finishes last.`
      }
    ])}
  </div>

  <!-- Q95 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q95: Two masses m<sub>1</sub> and m<sub>2</sub> (m<sub>1</sub> > m<sub>2</sub>) are connected by a string over a massive pulley of moment of inertia I. Derive system acceleration and string tensions.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Let the pulley have mass $M$, radius $R$, moment of inertia $I$, and let string tensions on the two sides be $T_1$ and $T_2$ ($T_1 \ne T_2$ because torque is required to turn the massive pulley).
    </p>
    ${stepDerivationBox([
      {
        step: 'Step 1: Free Body Equations of Suspended Masses',
        math: `For descending mass $m_1$: $m_1 g - T_1 = m_1 a \\implies T_1 = m_1(g - a)$<br/>
        For ascending mass $m_2$: $T_2 - m_2 g = m_2 a \\implies T_2 = m_2(g + a)$`
      },
      {
        step: 'Step 2: Rotational Dynamics of the Pulley',
        math: `Net torque on the pulley: $\\tau = (T_1 - T_2) R = I \\alpha = I\\left(\\frac{a}{R}\\right)$
        $$T_1 - T_2 = \\frac{I a}{R^2}$$`
      },
      {
        step: 'Step 3: Calculating Acceleration a',
        math: `Substitute expressions for $T_1$ and $T_2$:
        $$m_1(g - a) - m_2(g + a) = \\frac{I a}{R^2}$$
        $$(m_1 - m_2)g = a \\left(m_1 + m_2 + \\frac{I}{R^2}\\right)$$
        $$a = \\frac{(m_1 - m_2)g}{m_1 + m_2 + I/R^2}$$`
      }
    ])}
  </div>

  <!-- Q96 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q96: A person on a frictionless turntable pulls dumbbells inward. Show that kinetic energy increases and identify the origin of this energy.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Analysis:</b>
      <br/>Let initial moment of inertia and angular velocity be $I_1$ and $\omega_1$. When dumbbells are pulled in, moment of inertia decreases to $I_2 < I_1$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Conservation of Angular Momentum',
        math: `Since no external torque acts about the vertical axis:
        $$L = I_1 \\omega_1 = I_2 \\omega_2 = \\text{constant} \\implies \\omega_2 = \\left(\\frac{I_1}{I_2}\\right) \\omega_1 > \\omega_1$$`
      },
      {
        step: 'Ratio of Final to Initial Kinetic Energy',
        math: `Express kinetic energy in terms of angular momentum: $K = \\frac{L^2}{2I}$.
        $$\\frac{K_2}{K_1} = \\frac{L^2 / (2I_2)}{L^2 / (2I_1)} = \\frac{I_1}{I_2}$$
        Since $I_1 > I_2$, $\\frac{K_2}{K_1} > 1 \\implies K_2 > K_1$.`
      },
      {
        step: 'Origin of Additional Kinetic Energy',
        math: `The extra rotational kinetic energy is not created out of nothing; it is supplied directly by the <b>internal biological work done by the person&apos;s muscular forces</b> against centrifugal inertia while pulling the heavy weights inwards toward the rotation axis.`
      }
    ])}
  </div>

  <!-- Q97 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q97: A uniform ladder of mass M and length L leans at angle &theta; to the horizontal against a smooth wall. Derive the minimum coefficient of static friction &mu;<sub>s</sub> with the floor to prevent slipping.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>The ladder makes angle $\theta$ with the rough ground. Weight $M g$ acts downward at midpoint ($L/2$). Smooth vertical wall exerts normal force $N_w$ horizontally. Floor exerts vertical normal force $N_f$ and horizontal static friction force $f_s$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Translational Equilibrium Equations',
        math: `Vertical: $\\sum F_y = 0 \\implies N_f = M g$<br/>
        Horizontal: $\\sum F_x = 0 \\implies f_s = N_w$`
      },
      {
        step: 'Rotational Equilibrium About Base of Ladder',
        math: `Taking torques about the contact point on the floor:
        $$\\sum \\tau = (M g)\\left(\\frac{L}{2}\\cos\\theta\\right) - N_w(L\\sin\\theta) = 0$$
        $$N_w = \\frac{M g \\cos\\theta}{2\\sin\\theta} = \\frac{M g}{2\\tan\\theta}$$`
      },
      {
        step: 'Condition for No Slipping',
        math: `Static friction must satisfy $f_s \\le \\mu_s N_f$:
        $\\frac{M g}{2\\tan\\theta} \\le \\mu_s (M g) \\implies \\mu_s \\ge \\frac{1}{2\\tan\\theta} = \\frac{1}{2}\\cot\\theta$$
        <b>Minimum Coefficient of Friction:</b> $\\mu_{s,\\min} = \\frac{1}{2\\tan\\theta}$.`
      }
    ])}
  </div>

  <!-- Q98 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q98: A block of height h and base b rests on a rough floor. A horizontal force F is applied at height y. Derive conditions for sliding vs toppling.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Analysis:</b>
      <br/>Let block have mass $M$, resting on floor with static friction coefficient $\mu_s$.
    </p>
    ${stepDerivationBox([
      {
        step: 'Condition for Sliding',
        math: `The block begins sliding when the applied force exceeds maximum static friction:
        $$F_{\\text{slide}} = f_{s,\\max} = \\mu_s M g$$`
      },
      {
        step: 'Condition for Toppling',
        math: `Toppling occurs about the front edge when the overturning torque of $F$ exceeds the restoring torque of gravity:
        $$\\tau_{\\text{overturning}} = F y, \\quad \\tau_{\\text{restoring}} = M g \\left(\\frac{b}{2}\\right)$$
        $$F_{\\text{topple}} = \\frac{M g b}{2 y}$$`
      },
      {
        step: 'Comparison: Sliding vs Toppling',
        math: `&bull; <b>Block slides before toppling</b> if $F_{\\text{slide}} < F_{\\text{topple}} \\implies \\mu_s < \\frac{b}{2y}$.<br/>
        &bull; <b>Block topples before sliding</b> if $F_{\\text{topple}} < F_{\\text{slide}} \\implies \\mu_s > \\frac{b}{2y}$.`
      }
    ])}
  </div>

  <!-- Q99 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q99: Describe the operational principles of flywheels and gyroscopes. Explain gyroscopic stability and flywheel energy storage.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">1. Flywheel Energy Storage Systems:</b>
      <br/>A flywheel is a heavy wheel with large moment of inertia $I$ designed to store kinetic energy ($K_{\text{rot}} = \frac{1}{2}I\omega^2$). Modern flywheels made of carbon-fiber composites rotate at upwards of 60,000 rpm in vacuum chambers on magnetic levitation bearings. They deliver rapid surge power and store regenerative braking energy in electric trains and power grids with efficiency exceeding 90%.
      <br/><br/>
      <b style="color: ${themeColor};">2. Gyroscopic Precession & Stability:</b>
      <br/>A gyroscope consists of a rapidly spinning rotor possessing large angular momentum $\vec{L}$.
      <br/>&bull; <b>Gyroscopic Inertia (Rigidity in Space):</b> In the absence of external torque, $\vec{L}$ maintains its orientation fixed in inertial space, providing an drift-free directional reference for aircraft and spacecraft navigation (inertial guidance systems).
      <br/>&bull; <b>Precession:</b> When an external torque $\vec{\tau}$ is applied perpendicular to $\vec{L}$, the angular momentum vector changes according to $d\vec{L} = \vec{\tau}\,dt$. Rather than falling over, the spin axis slowly rotates (precesses) in a horizontal circle with precession angular velocity:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin: 8px 0;">
      $\\Omega_p = \\frac{\\tau}{L} = \\frac{\\tau}{I \\omega}$
    </div>
  </div>

  <!-- Q100 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q100: Master Synthesis of Unit V: System of Particles and Rotational Motion. Summarize the core mathematical laws, moments of inertia, and examination traps.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Summary of Core Dynamical Principles:</b>
      <br/>1. <b>Centre of Mass:</b> $\vec{R}_{\text{cm}} = \frac{1}{M}\sum m_i \vec{r}_i$, $\vec{F}_{\text{ext}} = M\vec{A}_{\text{cm}}$. Internal forces cancel identically.
      <br/>2. <b>Torque & Angular Momentum:</b> $\vec{\tau} = \vec{r}\times\vec{F}$, $\vec{L} = \vec{r}\times\vec{p} = I\vec{\omega}$, and $\vec{\tau}_{\text{ext}} = \frac{d\vec{L}}{dt}$.
      <br/>3. <b>Equilibrium:</b> Both conditions must simultaneously hold: $\sum\vec{F}_{\text{ext}} = \vec{0}$ and $\sum\vec{\tau}_{\text{ext}} = \vec{0}$.
      <br/>4. <b>Pure Rolling:</b> $v_{\text{cm}} = R\omega$, $K_{\text{total}} = \frac{1}{2}M v_{\text{cm}}^2(1 + k^2/R^2)$, and acceleration on an incline $a = \frac{g\sin\theta}{1 + k^2/R^2}$.
      <br/><br/>
      <b style="color: ${themeColor};">Standard Moments of Inertia Reference Table:</b>
      <br/>&bull; Circular Ring ($M, R$) about central axis: $I = M R^2$ ($k = R$)
      <br/>&bull; Circular Disc ($M, R$) about central axis: $I = \frac{1}{2} M R^2$ ($k = R/\sqrt{2}$)
      <br/>&bull; Thin Rod ($M, L$) about centre: $I = \frac{1}{12} M L^2$ &bull; about end: $I = \frac{1}{3} M L^2$
      <br/>&bull; Solid Cylinder ($M, R$) about axis: $I = \frac{1}{2} M R^2$
      <br/>&bull; Hollow Cylinder ($M, R$) about axis: $I = M R^2$
      <br/>&bull; Solid Sphere ($M, R$) about diameter: $I = \frac{2}{5} M R^2$
      <br/>&bull; Spherical Shell ($M, R$) about diameter: $I = \frac{2}{3} M R^2$
      <br/><br/>
      <b style="color: ${themeColor};">Common Board Exam Traps:</b>
      <br/>&bull; Confusing torque and work: Both have dimensions $[M L^2 T^{-2}]$, but torque is an axial vector cross product (N m) and work is a scalar dot product (J).
      <br/>&bull; Incline race order: The body with the <b>smallest $k^2/R^2$</b> wins the race (Solid Sphere > Disc > Hollow Sphere > Ring).
    </p>
  </div>
`;
}

module.exports = { getSolutionsPart3 };
