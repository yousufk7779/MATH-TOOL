const { themeColor, stepDerivationBox } = require('./c11_phy_6_helpers');

function getSolutionsPart3() {
  return `
  <!-- SECTION C: LONG ANSWER (LA) QUESTIONS & DERIVATIONS (5 MARKS EACH) -->
  <div style="background: rgba(253, 200, 48, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions & Derivations (5 Marks Each) &bull; Q81 to Q100
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Exhaustive mathematical derivations, calculus integrations, altitude & depth variations, escape speed proofs, and orbital satellite mechanics.
    </p>
  </div>

  <!-- Q81 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q81: State Kepler&apos;s laws of planetary motion. Rigorously derive Kepler&apos;s second law (Law of Areas) from the principle of conservation of angular momentum.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Kepler&apos;s Laws:</b>
      <br/>1. <b>Law of Orbits:</b> All planets revolve around the Sun in elliptical orbits, with the Sun situated at one of the foci.
      <br/>2. <b>Law of Areas:</b> The radius vector drawn from the Sun to a planet sweeps out equal areas in equal intervals of time ($dA/dt = \\text{constant}$).
      <br/>3. <b>Law of Periods:</b> $T^2 \\propto a^3$, where $T$ is the orbital period and $a$ is the semi-major axis.
    </p>
    ${stepDerivationBox([
      {
        step: "Central Force Nature of Gravitation",
        math: "The gravitational pull exerted by the Sun (mass $M_s$) on a planet (mass $m$) acts along the radial line joining them: $$\\vec{F} = -\\frac{G M_s m}{r^2}\\hat{r}$$ The torque acting on the planet about the Sun: $$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{r} \\times \\left(-\\frac{G M_s m}{r^2}\\hat{r}\\right) = \\vec{0}$$ since the cross product of any vector with its own collinear unit vector vanishes."
      },
      {
        step: "Conservation of Angular Momentum",
        math: "By Newton&apos;s second law in rotational form: $$\\vec{\\tau} = \\frac{d\\vec{L}}{dt} = \\vec{0} \\implies \\vec{L} = \\vec{r} \\times \\vec{p} = m(\\vec{r} \\times \\vec{v}) = \\text{constant vector}$$"
      },
      {
        step: "Area Swept Out in Time dt",
        math: "In differential time $dt$, the displacement of the planet is $d\\vec{r} = \\vec{v}\\,dt$. The triangular area swept out by the radius vector is: $$d\\vec{A} = \\frac{1}{2}(\\vec{r} \\times d\\vec{r}) = \\frac{1}{2}(\\vec{r} \\times \\vec{v}\\,dt)$$"
      },
      {
        step: "Areal Velocity Expression",
        math: "Dividing both sides by $dt$: $$\\frac{d\\vec{A}}{dt} = \\frac{1}{2}(\\vec{r} \\times \\vec{v}) = \\frac{\\vec{r} \\times m\\vec{v}}{2m} = \\frac{\\vec{L}}{2m}$$ Since both $\\vec{L}$ and $m$ are constants of the motion: $$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$$ This completely proves Kepler&apos;s second law."
      }
    ])}
  </div>

  <!-- Q82 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q82: Deduce Kepler&apos;s third law of planetary motion for circular planetary orbits using Newton&apos;s universal law of gravitation.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Consider a planet of mass $m$ revolving in a circular orbit of radius $r$ around the Sun of mass $M_s$ with constant orbital speed $v$.
    </p>
    ${stepDerivationBox([
      {
        step: "Centripetal Force Balance",
        math: "The necessary centripetal force required to keep the planet in circular motion is provided solely by the gravitational pull of the Sun: $$\\frac{m v^2}{r} = \\frac{G M_s m}{r^2} \\implies v^2 = \\frac{G M_s}{r} \\implies v = \\sqrt{\\frac{G M_s}{r}}$$"
      },
      {
        step: "Orbital Period Relation",
        math: "The time period $T$ required for one complete revolution around the orbit of circumference $2\\pi r$ is: $$T = \\frac{2\\pi r}{v} = \\frac{2\\pi r}{\\sqrt{\\frac{G M_s}{r}}} = \\frac{2\\pi r^{3/2}}{\\sqrt{G M_s}}$$"
      },
      {
        step: "Squaring Both Sides",
        math: "$$T^2 = \\frac{4\\pi^2 r^3}{G M_s} = \\left(\\frac{4\\pi^2}{G M_s}\\right) r^3$$"
      },
      {
        step: "Conclusion",
        math: "Since $G$ and $M_s$ are constant, $\\frac{4\\pi^2}{G M_s} = \\text{constant}$, establishing that: $$T^2 \\propto r^3$$ (or $T^2 \\propto a^3$ for elliptical orbits)."
      }
    ])}
  </div>

  <!-- Q83 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q83: State Newton&apos;s Universal Law of Gravitation. Express it in vector form and discuss its four fundamental characteristics.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Universal Law Statement:</b> Every particle in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them:
      $$F = G\\frac{m_1 m_2}{r^2}$$
      In vector form, the force $\\vec{F}_{12}$ exerted on particle 2 by particle 1 is:
      $$\\vec{F}_{12} = -\\frac{G m_1 m_2}{r^2}\\hat{r}_{12} = -\\frac{G m_1 m_2}{r^3}\\vec{r}_{12}$$
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 10px 14px; border-radius: 4px; margin: 10px 0;">
      <b style="color: ${themeColor};">Four Fundamental Characteristics of Gravitational Force:</b>
      <br/>1. <b>Universal Attraction:</b> Gravitational force is always attractive; unlike electrostatic forces, repulsive gravitation does not exist in classical physics.
      <br/>2. <b>Inverse Square Law:</b> The force obeys $F \\propto 1/r^2$. Doubling the separation quarters the mutual force.
      <br/>3. <b>Central and Conservative Nature:</b> It acts strictly along the line joining the centers of the two interacting masses, and the work done around any closed path is zero ($\\oint \\vec{F}\\cdot d\\vec{r} = 0$).
      <br/>4. <b>Medium Independence & Action-Reaction Pair:</b> The force is completely unaltered by the intervening physical medium (air, water, vacuum) and obeys Newton&apos;s third law: $\\vec{F}_{21} = -\\vec{F}_{12}$.
    </div>
  </div>

  <!-- Q84 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q84: Describe the principle, working, and mathematical formulation of the Cavendish Torsion Balance experiment to determine G.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Principle:</b> The gravitational attraction between two pairs of spherical masses generates a deflecting couple on a light horizontal rod suspended by a fine quartz or phosphor-bronze wire. The deflecting gravitational torque is balanced by the restoring elastic twist torque of the suspension wire.
    </p>
    ${stepDerivationBox([
      {
        step: "Experimental Arrangement",
        math: "Two small lead spheres each of mass $m$ are attached to the opposite ends of a light rod of length $L$. Two large lead spheres each of mass $M$ are brought close to the small spheres on opposite sides at separation $d$."
      },
      {
        step: "Gravitational Deflecting Torque",
        math: "Each small sphere experiences an attractive force $F = \\frac{G M m}{d^2}$. Since these forces act on opposite ends of the rod, they form a couple of arm $L$: $$\\tau_{\\text{def}} = F \\times L = \\frac{G M m L}{d^2}$$"
      },
      {
        step: "Restoring Torque of Suspension Fiber",
        math: "If the wire twists through angle $\\theta$, the restoring torque is: $$\\tau_{\\text{res}} = C \\theta$$ where $C$ is the restoring torque per unit twist (torsional rigidity)."
      },
      {
        step: "Equilibrium Condition & Formula for G",
        math: "At equilibrium, $\\tau_{\\text{def}} = \\tau_{\\text{res}}$: $$\\frac{G M m L}{d^2} = C \\theta \\implies G = \\frac{C \\theta d^2}{M m L}$$ Measuring the twist $\\theta$ via a lamp-and-scale mirror arrangement yields $G = 6.674 &times; 10^{-11}\\text{ N m}^2\\text{/kg}^2$."
      }
    ])}
  </div>

  <!-- Q85 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q85: Derive the relation between g and G at Earth&apos;s surface. Deduce the formula for the mean density of the Earth.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Consider the Earth to be a homogeneous sphere of mass $M$, radius $R$, and uniform volume mass density $\rho$.
    </p>
    ${stepDerivationBox([
      {
        step: "Equating Weight to Gravitational Attraction",
        math: "A test body of mass $m$ placed on Earth&apos;s surface experiences gravitational pull: $$F = \\frac{G M m}{R^2}$$ By Newton&apos;s second law, this gravitational force is the body&apos;s true weight: $F = mg$. Equating both: $$m g = \\frac{G M m}{R^2} \\implies g = \\frac{G M}{R^2}$$"
      },
      {
        step: "Expressing Mass in Terms of Mean Density",
        math: "The volume of the Earth is $V = \\frac{4}{3}\\pi R^3$. Mass of Earth: $$M = V \\rho = \\frac{4}{3}\\pi R^3 \\rho$$"
      },
      {
        step: "Substituting Mass into Gravity Formula",
        math: "$$g = \\frac{G}{R^2}\\left(\\frac{4}{3}\\pi R^3 \\rho\\right) = \\frac{4}{3}\\pi G R \\rho$$"
      },
      {
        step: "Mean Density Formula & Numerical Evaluation",
        math: "$$\\rho = \\frac{3 g}{4\\pi G R}$$ Substituting $g = 9.8\\text{ m/s}^2, G = 6.67 &times; 10^{-11}\\text{ SI}, R = 6.4 &times; 10^6\\text{ m}$: $$\\rho = \\frac{3 \\times 9.8}{4 \\times 3.1416 \\times (6.67 &times; 10^{-11}) \\times (6.4 &times; 10^6)} \\approx 5500\\text{ kg/m}^3$$"
      }
    ])}
  </div>

  <!-- Q86 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q86: Derive an expression for the acceleration due to gravity at altitude h. Obtain the binomial approximation for h &Lt; R and find fractional decrease.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>At Earth&apos;s surface ($r = R$): $g = \\frac{G M}{R^2}$.
    </p>
    ${stepDerivationBox([
      {
        step: "Exact Expression at Altitude h",
        math: "At height $h$ above the surface, distance from center is $r = R + h$: $$g_h = \\frac{G M}{(R + h)^2} = \\frac{G M}{R^2\\left(1 + \\frac{h}{R}\\right)^2} = \\frac{g}{\\left(1 + \\frac{h}{R}\\right)^2}$$ This is the exact formula valid for any height $h$."
      },
      {
        step: "Binomial Expansion for h << R",
        math: "Rewrite as a negative exponent: $$g_h = g\\left(1 + \\frac{h}{R}\\right)^{-2}$$ Applying the Binomial Theorem $(1 + x)^n = 1 + n x + \\dots$ for $|x| \\ll 1$: $$g_h \\approx g\\left(1 - \\frac{2h}{R}\\right)$$"
      },
      {
        step: "Fractional and Percentage Variations",
        math: "Absolute decrease in $g$: $$\\Delta g = g - g_h = g\\left(\\frac{2h}{R}\\right)$$ Fractional decrease: $$\\frac{\\Delta g}{g} = \\frac{2h}{R}$$ Percentage decrease: $$\\left(\\frac{\\Delta g}{g}\\right) \\times 100 = \\left(\\frac{2h}{R}\\right) \\times 100\\%$$"
      }
    ])}
  </div>

  <!-- Q87 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q87: Derive an expression for acceleration due to gravity at depth d below Earth&apos;s surface. Prove that g vanishes at Earth&apos;s center.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Let the Earth have radius $R$, mass $M$, and uniform density $\rho = \\frac{M}{\\frac{4}{3}\\pi R^3}$.
    </p>
    ${stepDerivationBox([
      {
        step: "Spherical Shell Theorem Application",
        math: "At depth $d$ below the surface, the distance from Earth&apos;s center is $r = R - d$. The outer concentric spherical shell of thickness $d$ exerts zero resultant gravitational force on any interior mass. Gravitational attraction is generated exclusively by the inner core sphere of radius $r = R - d$."
      },
      {
        step: "Enclosed Core Mass M&apos;",
        math: "$$M&apos; = \\frac{4}{3}\\pi (R - d)^3 \\rho = \\frac{4}{3}\\pi (R - d)^3 \\left(\\frac{M}{\\frac{4}{3}\\pi R^3}\\right) = M \\frac{(R - d)^3}{R^3}$$"
      },
      {
        step: "Evaluating Acceleration at Depth d",
        math: "$$g_d = \\frac{G M&apos;}{(R - d)^2} = \\frac{G}{(R - d)^2}\\left[M \\frac{(R - d)^3}{R^3}\\right] = \\frac{G M}{R^3}(R - d)$$ Since $g = \\frac{G M}{R^2}$: $$g_d = \\frac{g}{R}(R - d) = g\\left(1 - \\frac{d}{R}\\right)$$"
      },
      {
        step: "Gravity at Center of Earth",
        math: "At the center of the Earth, $d = R$: $$g_{\\text{center}} = g\\left(1 - \\frac{R}{R}\\right) = g(0) = 0$$ The acceleration due to gravity is identically zero at Earth&apos;s center."
      }
    ])}
  </div>

  <!-- Q88 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q88: Compare the variations of g with altitude and depth. Prove that for small distances, a given decrease in g at height h equals the decrease at depth d = 2h.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Proof and Comparative Analysis:</b>
    </p>
    ${stepDerivationBox([
      {
        step: "Formulas for Altitude and Depth",
        math: "For small height $h \\ll R$: $$g_h = g\\left(1 - \\frac{2h}{R}\\right) \\implies \\Delta g_h = g - g_h = g\\left(\\frac{2h}{R}\\right)$$ For depth $d$: $$g_d = g\\left(1 - \\frac{d}{R}\\right) \\implies \\Delta g_d = g - g_d = g\\left(\\frac{d}{R}\\right)$$"
      },
      {
        step: "Equating the Decreases",
        math: "Setting the two decreases equal: $\\Delta g_h = \\Delta g_d$: $$g\\left(\\frac{2h}{R}\\right) = g\\left(\\frac{d}{R}\\right) \\implies 2h = d \\implies d = 2h \\quad \\text{or} \\quad h = \\frac{d}{2}$$"
      },
      {
        step: "Physical Interpretation",
        math: "Acceleration due to gravity drops twice as rapidly with height as it does with depth. For example, the decrease in $g$ observed at a height of 10 km above the surface is equal to the decrease found at a depth of 20 km inside a mine."
      }
    ])}
  </div>

  <!-- Q89 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q89: Derive the expression for the variation of acceleration due to gravity with latitude &lambda; due to the rotation of the Earth: g&apos; = g - R&omega;<sup>2</sup> cos<sup>2</sup>&lambda;.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Consider a particle of mass $m$ on Earth&apos;s surface at latitude $\\lambda$. The Earth rotates about its polar axis with constant angular velocity $\\omega$.
    </p>
    ${stepDerivationBox([
      {
        step: "Radius of Circular Path of Rotation",
        math: "As Earth spins, the particle describes a horizontal circle of radius: $$r = R \\cos\\lambda$$"
      },
      {
        step: "Centrifugal Force in Rotating Frame",
        math: "In Earth&apos;s rotating frame of reference, the particle experiences an outward fictitious centrifugal force: $$F_c = m r \\omega^2 = m (R \\cos\\lambda) \\omega^2 = m R \\omega^2 \\cos\\lambda$$ directed horizontally away from the rotation axis."
      },
      {
        step: "Vector Resolution along the Radial Line",
        math: "The true gravitational force $m g$ acts radially toward Earth&apos;s center. The component of centrifugal force acting radially outward against gravity is: $$F_{c,r} = F_c \\cos\\lambda = (m R \\omega^2 \\cos\\lambda) \\cos\\lambda = m R \\omega^2 \\cos^2\\lambda$$"
      },
      {
        step: "Effective Gravity Formula",
        math: "Apparent weight: $m g&apos; = m g - m R \\omega^2 \\cos^2\\lambda \\implies g&apos; = g - R \\omega^2 \\cos^2\\lambda$.<br/>&bull; <b>At Equator ($\lambda = 0^\circ$):</b> $\cos 0^\circ = 1 \\implies g_e = g - R\\omega^2$ (minimum).<br/>&bull; <b>At Poles ($\lambda = 90^\circ$):</b> $\cos 90^\circ = 0 \\implies g_p = g$ (maximum)."
      }
    ])}
  </div>

  <!-- Q90 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q90: Define Gravitational Potential Energy. Rigorously derive U(r) = -GMm/r by calculus integration and explain the physical meaning of the negative sign.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Definition:</b> The gravitational potential energy of a body at a point is the work done by an external agent in bringing the body from infinity to that point without acceleration.
    </p>
    ${stepDerivationBox([
      {
        step: "Differential Work Element",
        math: "Let a test mass $m$ be at distance $x$ from the center of Earth (mass $M$). The attractive gravitational force on $m$ is: $$F = \\frac{G M m}{x^2}$$ directed radially inward toward Earth&apos;s center."
      },
      {
        step: "Infinitesimal Displacement",
        math: "Work done by an external agent against the attractive force in displacing the body inward through $dx$ toward Earth without acceleration: $$dW = -F\\,dx = -\\frac{G M m}{x^2}\\,dx$$"
      },
      {
        step: "Definite Integral from Infinity to r",
        math: "$$U(r) = \\int_\\infty^r -\\frac{G M m}{x^2}\\,dx = -G M m \\int_\\infty^r x^{-2}\\,dx = -G M m \\left[ -\\frac{1}{x} \\right]_\\infty^r = G M m \\left[ \\frac{1}{r} - \\frac{1}{\\infty} \\right]$$ $$U(r) = -\\frac{G M m}{r}$$"
      },
      {
        step: "Physical Significance of the Negative Sign",
        math: "The negative sign indicates that the system is <b>bound</b>. Gravitational force is attractive, so positive work was done by the field itself in bringing the mass from infinity. An external supply of positive energy $+GMm/r$ (Binding Energy) must be provided to free the body to infinite separation where $U = 0$."
      }
    ])}
  </div>

  <!-- Q91 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q91: Define Gravitational Potential. Derive V = -GM/r and establish the gradient relation E<sub>g</sub> = -dV/dr.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Definition:</b> Gravitational potential $V$ at a point is the work done in bringing a unit positive test mass from infinity to that point without acceleration: $V = U/m$.
    </p>
    ${stepDerivationBox([
      {
        step: "Derivation of V = -GM/r",
        math: "Setting $m = 1\\text{ kg}$ in the potential energy derivation: $$V(r) = \\frac{U(r)}{m} = \\frac{-G M m / r}{m} = -\\frac{G M}{r}$$"
      },
      {
        step: "Relation between Gravitational Field and Potential",
        math: "Work done in moving a unit test mass through displacement $dr$ against field $\\vec{E}_g$: $$dV = -\\vec{E}_g \\cdot d\\vec{r} = -E_g\\,dr \\implies E_g = -\\frac{dV}{dr}$$"
      },
      {
        step: "Verification",
        math: "$$E_g = -\\frac{d}{dr}\\left(-\\frac{G M}{r}\\right) = -\\left(\\frac{G M}{r^2}\\right) = -\\frac{G M}{r^2}$$ matching the magnitude and inward direction of the gravitational field."
      }
    ])}
  </div>

  <!-- Q92 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q92: Define Escape Speed. Rigorously derive v<sub>e</sub> = &radic;(2GM/R) = &radic;(2gR) using energy conservation.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Definition:</b> The minimum initial projection speed required for a body to overcome Earth&apos;s gravitational field and never return.
    </p>
    ${stepDerivationBox([
      {
        step: "Total Mechanical Energy at Surface",
        math: "Let a body of mass $m$ be projected with speed $v_e$ from Earth&apos;s surface ($r = R$): $$E_i = K_i + U_i = \\frac{1}{2}m v_e^2 - \\frac{G M m}{R}$$"
      },
      {
        step: "Total Mechanical Energy at Infinity",
        math: "At infinity ($r \\to \\infty$), gravitational potential energy vanishes ($U_f = 0$). For minimum launch speed, the body just reaches infinity with zero remaining velocity ($K_f = 0$): $$E_f = K_f + U_f = 0 + 0 = 0$$"
      },
      {
        step: "Applying Law of Conservation of Energy",
        math: "In a conservative field, $E_i = E_f$: $$\\frac{1}{2}m v_e^2 - \\frac{G M m}{R} = 0 \\implies \\frac{1}{2}m v_e^2 = \\frac{G M m}{R} \\implies v_e = \\sqrt{\\frac{2 G M}{R}}$$"
      },
      {
        step: "Expressing in Terms of Surface Gravity g",
        math: "Since $g = \\frac{G M}{R^2} \\implies G M = g R^2$: $$v_e = \\sqrt{\\frac{2(g R^2)}{R}} = \\sqrt{2 g R}$$ Substituting Earth values: $v_e = \\sqrt{2 \\times 9.8 \\times 6.4 &times; 10^6} \\approx 11.2\\text{ km/s}$."
      }
    ])}
  </div>

  <!-- Q93 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q93: Explain in detail why the Moon lacks an atmosphere while Earth retains a dense gaseous envelope, using kinetic molecular theory.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Theoretical Explanation:</b>
      <br/>Retention of an atmosphere on any celestial body depends on the competition between the <b>escape speed ($v_e$)</b> of the planet and the <b>root-mean-square thermal speed ($v_{\\text{rms}}$)</b> of gas molecules at surface temperatures.
    </p>
    ${stepDerivationBox([
      {
        step: "Thermal Molecular Speed Formula",
        math: "From the kinetic theory of gases, the root-mean-square speed of gas molecules of molar mass $M_{\\text{mol}}$ at absolute temperature $T$ is: $$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M_{\\text{mol}}}}$$ For Earth&apos;s atmosphere ($T \\approx 300\\text{ K}$), $v_{\\text{rms}}$ for Nitrogen ($N_2$) is $\\approx 0.52\\text{ km/s}$ and for Oxygen ($O_2$) is $\\approx 0.48\\text{ km/s}$."
      },
      {
        step: "Atmospheric Retention Condition on Earth",
        math: "On Earth, escape speed is $v_e \\approx 11.2\\text{ km/s}$. Since $v_{\\text{rms}} \\ll v_e$ (thermal speed is less than 5% of escape speed), gas molecules cannot escape into space, retaining a dense atmosphere."
      },
      {
        step: "Atmospheric Escape on the Moon",
        math: "On the Moon, mass and surface gravity are low, giving an escape speed of only $v_{e,\\text{Moon}} \\approx 2.38\\text{ km/s}$. During lunar daytime, temperatures reach up to $400\\text{ K}$, elevating molecular thermal speeds above $v_{e,\\text{Moon}}$. Consequently, gas molecules easily exceeded escape speed and boiled away into interplanetary space over billions of years."
      }
    ])}
  </div>

  <!-- Q94 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q94: Derive expressions for the orbital velocity, time period, and orbital frequency of an artificial satellite orbiting Earth at altitude h.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Derivation:</b>
      <br/>Let a satellite of mass $m$ orbit Earth (mass $M$, radius $R$) in a circular orbit at altitude $h$ ($r = R + h$).
    </p>
    ${stepDerivationBox([
      {
        step: "1. Orbital Velocity (v_o)",
        math: "Centripetal force is provided by gravitational attraction: $$\\frac{m v_o^2}{R + h} = \\frac{G M m}{(R + h)^2} \\implies v_o = \\sqrt{\\frac{G M}{R + h}} = \\sqrt{\\frac{g R^2}{R + h}}$$"
      },
      {
        step: "2. Orbital Period (T)",
        math: "$$T = \\frac{2\\pi (R + h)}{v_o} = \\frac{2\\pi (R + h)}{\\sqrt{\\frac{G M}{R + h}}} = \\frac{2\\pi (R + h)^{3/2}}{\\sqrt{G M}} = 2\\pi \\sqrt{\\frac{(R + h)^3}{g R^2}}$$"
      },
      {
        step: "3. Orbital Frequency (f)",
        math: "$$f = \\frac{1}{T} = \\frac{1}{2\\pi}\\sqrt{\\frac{G M}{(R + h)^3}} = \\frac{R}{2\\pi}\\sqrt{\\frac{g}{(R + h)^3}}$$"
      }
    ])}
  </div>

  <!-- Q95 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q95: Establish the relation between escape speed v<sub>e</sub> and near-Earth orbital velocity v<sub>o</sub>: v<sub>e</sub> = &radic;2 v<sub>o</sub>. Explain its physical significance.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Mathematical Proof:</b>
    </p>
    ${stepDerivationBox([
      {
        step: "Near-Earth Orbital Velocity",
        math: "For a satellite orbiting very close to Earth ($h \\ll R$): $$v_o = \\sqrt{\\frac{G M}{R}} = \\sqrt{g R}$$"
      },
      {
        step: "Escape Speed from Earth's Surface",
        math: "$$v_e = \\sqrt{\\frac{2 G M}{R}} = \\sqrt{2 g R}$$"
      },
      {
        step: "Ratio and Relation",
        math: "$$\\frac{v_e}{v_o} = \\frac{\\sqrt{2 g R}}{\\sqrt{g R}} = \\sqrt{2} \\implies v_e = \\sqrt{2} v_o \\approx 1.414 v_o$$"
      },
      {
        step: "Physical Significance",
        math: "This demonstrates that an increase in the speed of an orbiting satellite by a factor of $\\sqrt{2} - 1 \\approx 41.4\\%$ will supply enough kinetic energy to break its closed elliptical/circular orbit and launch it onto an open parabolic escape trajectory out of Earth&apos;s gravitational grip."
      }
    ])}
  </div>

  <!-- Q96 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q96: Derive expressions for the Kinetic Energy, Potential Energy, Total Energy, and Binding Energy of an orbiting satellite. State their numerical ratios.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b>Energy Derivations:</b>
      <br/>For a satellite of mass $m$ orbiting at radius $r$ with speed $v_o = \\sqrt{G M / r}$:
    </p>
    ${stepDerivationBox([
      {
        step: "1. Kinetic Energy (K)",
        math: "$$K = \\frac{1}{2}m v_o^2 = \\frac{1}{2}m \\left(\\frac{G M}{r}\\right) = \\frac{G M m}{2 r}$$"
      },
      {
        step: "2. Potential Energy (U)",
        math: "$$U = -\\frac{G M m}{r}$$"
      },
      {
        step: "3. Total Mechanical Energy (E)",
        math: "$$E = K + U = \\frac{G M m}{2 r} - \\frac{G M m}{r} = -\\frac{G M m}{2 r}$$"
      },
      {
        step: "4. Binding Energy (B.E.) & Energy Ratios",
        math: "$$\\text{B.E.} = -E = +\\frac{G M m}{2 r}$$ Ratios: $$K : U : E = 1 : -2 : -1 \\quad \\implies \\quad E = -K = \\frac{U}{2}$$"
      }
    ])}
  </div>

  <!-- Q97 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q97: What is a Geostationary Satellite? Derive the formula for its height above the Earth&apos;s surface.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Definition:</b> A satellite whose orbital period matches the Earth&apos;s rotational period ($T = 24\\text{ hours}$), orbiting in the equatorial plane from West to East so that it remains permanently stationary relative to a ground observer.
    </p>
    ${stepDerivationBox([
      {
        step: "Formula for Orbital Radius r",
        math: "From Kepler&apos;s Third Law: $$T^2 = \\frac{4\\pi^2 r^3}{G M} \\implies r^3 = \\frac{G M T^2}{4\\pi^2} \\implies r = \\left(\\frac{G M T^2}{4\\pi^2}\\right)^{1/3}$$"
      },
      {
        step: "Numerical Substitution",
        math: "Given $T = 24\\text{ h} = 86400\\text{ s}, M = 6 &times; 10^{24}\\text{ kg}, G = 6.67 &times; 10^{-11}\\text{ SI}$: $$r = \\left(\\frac{(6.67 &times; 10^{-11}) \\times (6 &times; 10^{24}) \\times (86400)^2}{4 \\times (3.1416)^2}\\right)^{1/3} \\approx 4.22 &times; 10^7\\text{ m} = 42,200\\text{ km}$$"
      },
      {
        step: "Altitude above Earth's Surface (h)",
        math: "$$h = r - R = 42,200\\text{ km} - 6,400\\text{ km} = 35,800\\text{ km} \\approx 36,000\\text{ km}$$"
      }
    ])}
  </div>

  <!-- Q98 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q98: Construct a comprehensive comparison between Geostationary and Polar Satellites across key astronomical and engineering parameters.</h3>
    <p style="margin: 0 0 10px 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Tabular Comparison:</b>
    </p>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #CBD5E1;">
        <thead>
          <tr style="background: rgba(253, 200, 48, 0.2); color: ${themeColor};">
            <th style="padding: 8px; border: 1px solid rgba(253, 200, 48, 0.3); text-align: left;">Parameter</th>
            <th style="padding: 8px; border: 1px solid rgba(253, 200, 48, 0.3); text-align: left;">Geostationary Satellite (GEO)</th>
            <th style="padding: 8px; border: 1px solid rgba(253, 200, 48, 0.3); text-align: left;">Polar Satellite (LEO)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Orbital Plane</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Equatorial plane (inclination $0^\circ$)</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Passes over North & South poles (inclination $\approx 90^\circ$)</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Altitude Above Surface</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$\approx 35,800\text{ km}$ (high altitude)</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$500 - 800\text{ km}$ (low altitude)</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Orbital Period</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Exactly 24 hours</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">$\approx 100\text{ minutes}$ (14-15 orbits per day)</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Relative Motion</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Appears stationary over a fixed ground point</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Scans successive strips of Earth as Earth rotates underneath</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Earth Coverage</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Covers $\approx 42\%$ of Earth (poor polar view)</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Covers the entire globe including Arctic & Antarctic</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Primary Uses</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Telecommunication, television relay, continuous weather monitoring</td>
            <td style="padding: 6px 8px; border: 1px solid rgba(255,255,255,0.1);">Remote sensing, spy/military reconnaissance, climate change, cartography</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Q99 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q99: Explain the true physical cause of Weightlessness in an orbiting satellite. Formulate the equation of motion for an astronaut.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Theory of Weightlessness:</b>
      <br/>It is a common student misconception that weightlessness in orbit is caused by zero gravity. In reality, at an altitude of $400\text{ km}$ (e.g. International Space Station), gravity is $g_h = g(R/(R+h))^2 \approx 8.7\text{ m/s}^2$—nearly <b>90%</b> of sea level gravity!
    </p>
    ${stepDerivationBox([
      {
        step: "Equation of Motion",
        math: "Consider an astronaut of mass $m$ standing on a weighing scale on the floor of a spacecraft orbiting at altitude $h$. Both the spacecraft and the astronaut have acceleration $a = g_h$ directed toward Earth&apos;s center. The downward forces on the astronaut are gravity $m g_h$ and the upward normal contact reaction $N$ from the floor: $$m g_h - N = m a$$"
      },
      {
        step: "Free-Fall Condition",
        math: "Because the spacecraft is in free fall under gravity, $a = g_h$: $$m g_h - N = m g_h \\implies N = 0$$"
      },
      {
        step: "Conclusion",
        math: "Since human sensation of weight originates from the normal reaction force $N$ exerted by a supporting floor or seat, when $N = 0$, the body experiences complete physiological and mechanical <b>weightlessness</b>. The astronaut and satellite are falling together with identical acceleration."
      }
    ])}
  </div>

  <!-- Q100 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 16px;">Q100: Master Synthesis of Unit VI: Gravitation. Consolidate all mathematical laws, potential relationships, and examination pitfalls.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Master Summary of Gravitational Laws:</b>
      <br/>1. <b>Newton&apos;s Gravitation:</b> $F = G\frac{m_1 m_2}{r^2}$ &bull; $G = 6.674 &times; 10^{-11}\text{ N m}^2\text{/kg}^2$ [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>].
      <br/>2. <b>Surface Gravity:</b> $g = \frac{GM}{R^2} = \frac{4}{3}\pi G R \rho$ &bull; $\rho = \frac{3g}{4\pi GR}$.
      <br/>3. <b>Variations of g:</b>
      <br/>&bull; Altitude ($h$): Exact $g_h = \frac{g}{(1 + h/R)^2}$ &bull; Binomial ($h \ll R$): $g_h = g\left(1 - \frac{2h}{R}\right)$.
      <br/>&bull; Depth ($d$): $g_d = g\left(1 - \frac{d}{R}\right)$ &bull; Center: $g = 0$.
      <br/>&bull; Equator to Poles: $g_p > g_e$ due to oblate shape and axial spin ($g' = g - R\omega^2\cos^2\lambda$).
      <br/>4. <b>Potential & Energy:</b>
      <br/>&bull; Gravitational Potential: $V = -\frac{GM}{r}$ (J/kg) &bull; Field relation: $E_g = -\frac{dV}{dr}$.
      <br/>&bull; Gravitational Potential Energy: $U = -\frac{GMm}{r}$ (J) &bull; Surface elevation $\Delta U = \frac{mgh}{1 + h/R}$.
      <br/>5. <b>Escape & Orbital Dynamics:</b>
      <br/>&bull; Escape Speed: $v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR} \approx 11.2\text{ km/s}$.
      <br/>&bull; Orbital Speed: $v_o = \sqrt{\frac{GM}{r}} = \sqrt{\frac{gR^2}{R+h}}$ &bull; Near-Earth $v_o = \sqrt{gR} \approx 7.92\text{ km/s}$.
      <br/>&bull; Inter-relation: $v_e = \sqrt{2} v_o$.
      <br/>&bull; Satellite Energies: $K = \frac{GMm}{2r}, U = -\frac{GMm}{r}, E = -\frac{GMm}{2r}, \text{B.E.} = +\frac{GMm}{2r}$.
      <br/><br/>
      <b style="color: ${themeColor};">High-Yield Board Traps:</b>
      <br/>&bull; <b>Altitude vs Depth rate:</b> Gravity drops twice as fast with height as it does with depth ($\Delta g_h / g = 2h/R$ vs $\Delta g_d / g = d/R$).
      <br/>&bull; <b>Escape speed independence:</b> $v_e$ does NOT depend on the mass or launch angle of the projected object.
      <br/>&bull; <b>Satellite Total Energy:</b> Total energy is negative ($E = -K$), indicating a bound gravitational system.
    </p>
  </div>
`;
}

module.exports = { getSolutionsPart3 };
