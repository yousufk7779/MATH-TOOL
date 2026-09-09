const {
  themeColor,
  frac,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_6_helpers');

function buildOverview() {
  return `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- CHAPTER TITLE BANNER -->
  <div style="background: rgba(253, 200, 48, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h1 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 24px; font-weight: bold; text-align: center !important;">
      Unit VI: Gravitation (06 Marks)
    </h1>
    <p style="color: #CBD5E1; margin: 0; font-size: 15px; text-align: center !important;">
      Comprehensive Reference Textbook Guide &bull; JKBOSE / CBSE Official Syllabus Alignment
    </p>
  </div>

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(253, 200, 48, 0.3); border-radius: 10px; padding: 16px; margin-bottom: 25px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">
      ⚡ Quick Glossary & Fundamental Gravitational Quantities
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Universal Gravitational Constant (G):</b> Universal proportionality constant; $G = 6.674 &times; 10<sup>-11</sup>\\text{ N m}<sup>2</sup>\\text{ kg}<sup>-2</sup>$. Dimensions: <b>[M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Acceleration Due to Gravity (g):</b> Gravitational acceleration near Earth&apos;s surface; $g = GM/R^2 \\approx 9.8\\text{ m/s}<sup>2</sup>$. Dimensions: <b>[M<sup>0</sup> L<sup>1</sup> T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Gravitational Potential (V):</b> Work done per unit mass in bringing a test body from infinity to a point; $V = -GM/r$. SI Unit: <b>J/kg</b> &bull; Dimensions: <b>[M<sup>0</sup> L<sup>2</sup> T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Escape Speed (v<sub>e</sub>):</b> Minimum launch speed required to permanently escape gravitational pull; $v_e = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$ on Earth.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    1. Kepler&apos;s Laws of Planetary Motion
  </h2>
  <p>
    For centuries, celestial mechanics struggled between geocentric dogma and early heliocentric models. Utilizing decades of meticulous astronomical observations recorded by Tycho Brahe, Johannes Kepler deduced three empirical laws that revolutionized our comprehension of planetary mechanics, subsequently laying the experimental foundation for Isaac Newton&apos;s universal synthesis.
  </p>

  <p>
    <b style="color: ${themeColor};">(i) Kepler&apos;s First Law (Law of Orbits):</b><br/>
    <i>Every planet revolves around the Sun in an elliptical orbit, with the Sun situated at one of the two foci of the ellipse.</i>
    <br/>An ellipse is a geometric conic section characterized by a semi-major axis $a$, semi-minor axis $b$, and eccentricity $e = \\sqrt{1 - b^2/a^2}$ ($0 &lt; e &lt; 1$). The closest approach of the planet to the Sun is termed the <b>perihelion</b> ($r_{\\min} = a(1 - e)$), while the farthest point is termed the <b>aphelion</b> ($r_{\\max} = a(1 + e)$). Planetary orbits in our Solar System possess low eccentricities (Earth&apos;s $e \\approx 0.0167$), approximating near-circular geometries.
  </p>

  <p>
    <b style="color: ${themeColor};">(ii) Kepler&apos;s Second Law (Law of Areas):</b><br/>
    <i>The radius vector drawn from the Sun to any planet sweeps out equal areas in equal intervals of time; that is, the areal velocity of the planet is strictly constant.</i>
  </p>

  ${defBox(
    "Areal Velocity",
    "The rate at which area is swept out by the position vector of a planet relative to the Sun: $dA/dt = L / (2m) = \\text{constant}$, representing an exact consequence of the conservation of angular momentum under central forces.",
    "m<sup>2</sup> s<sup>-1</sup>",
    "[M<sup>0</sup> L<sup>2</sup> T<sup>-1</sup>]"
  )}

  ${stepDerivationBox(
    "Derivation of Kepler's Second Law from Angular Momentum Conservation",
    [
      {
        name: "Central Nature of Gravitational Force",
        content: "The gravitational pull of the Sun on a planet acts directly along the radial direction connecting them: $\\vec{F} = -\\frac{G M_s m}{r^2}\\hat{r}$. Because $\\vec{r}$ and $\\vec{F}$ are strictly collinear, the torque about the Sun vanishes identically: $$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{0}$$"
      },
      {
        name: "Conservation of Angular Momentum",
        content: "Since $\\vec{\\tau} = \\frac{d\\vec{L}}{dt} = \\vec{0}$, the planet&apos;s orbital angular momentum $\\vec{L} = \\vec{r} \\times \\vec{p} = m(\\vec{r} \\times \\vec{v})$ is a strict constant of motion."
      },
      {
        name: "Differential Area Swept Out",
        content: "In infinitesimal time $dt$, the radius vector sweeps out a triangular area: $$d\\vec{A} = \\frac{1}{2}(\\vec{r} \\times d\\vec{r}) = \\frac{1}{2}(\\vec{r} \\times \\vec{v}\\,dt)$$"
      },
      {
        name: "Areal Velocity Expression",
        content: "Dividing by $dt$: $$\\frac{d\\vec{A}}{dt} = \\frac{1}{2}(\\vec{r} \\times \\vec{v}) = \\frac{\\vec{L}}{2m} = \\text{constant}$$ As a physical consequence, a planet moves fastest when closest to the Sun at perihelion ($r \\downarrow \\implies v \\uparrow$) and slowest at aphelion ($r \\uparrow \\implies v \\downarrow$)."
      }
    ]
  )}

  <p>
    <b style="color: ${themeColor};">(iii) Kepler&apos;s Third Law (Law of Periods):</b><br/>
    <i>The square of the orbital period of revolution of a planet is directly proportional to the cube of the semi-major axis of its elliptical orbit:</i>
  </p>
  <div style="text-align: center; color: #FFE082; font-size: 16px; font-weight: bold; margin: 8px 0;">
    T<sup>2</sup> &prop; a<sup>3</sup> &nbsp;&implies;&nbsp; \\frac{T^2}{a^3} = \\text{constant}
  </div>
  <p>
    For circular orbits of radius $r$, centripetal balance yields $\\frac{m v^2}{r} = \\frac{G M_s m}{r^2} \\implies v = \\sqrt{\\frac{G M_s}{r}}$. Period $T = \\frac{2\\pi r}{v} = \\frac{2\\pi r^{3/2}}{\\sqrt{G M_s}}$, whence squaring gives:
    $$T^2 = \\left(\\frac{4\\pi^2}{G M_s}\\right) r^3$$
  </p>

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    2. Universal Law of Gravitation
  </h2>
  <p>
    In 1687, Sir Isaac Newton formulated the overarching principle governing all gravitational interactions in the universe. Gravitational attraction is not confined to terrestrial bodies but extends infinitely across cosmic space.
  </p>

  ${defBox(
    "Newton's Universal Law of Gravitation",
    "Every particle of matter in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.",
    "Newton (N)",
    "[M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>]"
  )}

  <p>
    <b style="color: ${themeColor};">Mathematical Formulation:</b><br/>
    For two point masses $m_1$ and $m_2$ separated by distance $r$:
  </p>
  <div style="text-align: center; color: #FFE082; font-size: 16px; font-weight: bold; margin: 8px 0;">
    F = G \\frac{m_1 m_2}{r^2}
  </div>
  <p>
    In vector form, the gravitational force $\\vec{F}_{12}$ exerted by mass $m_1$ on mass $m_2$ located at position vector $\\vec{r}_{12}$ is:
    $$\\vec{F}_{12} = -\\frac{G m_1 m_2}{r^2}\\hat{r}_{12}$$
    The negative sign indicates that gravity is exclusively an <b>attractive force</b>. In accordance with Newton&apos;s third law, $\\vec{F}_{21} = -\\vec{F}_{12}$.
  </p>

  ${analogyBox(
    "Universal Gravitational Constant vs Acceleration Due to Gravity",
    "Think of G as the universal cosmic currency exchange rate—it is identical everywhere in the cosmos (on Earth, Jupiter, or deep interstellar space). In contrast, g is local purchasing power, varying drastically whether you stand at Earth's sea level, atop Mount Everest, or on the surface of the Moon."
  )}

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    3. Acceleration Due to Gravity (g) & Mean Density of Earth
  </h2>
  <p>
    When a body of mass $m$ is released freely near Earth&apos;s surface, it accelerates downwards under Earth&apos;s gravitational pull. Equating Newton&apos;s gravitational attraction to the body&apos;s weight:
    $$F = m g = \\frac{G M m}{R^2} \\implies g = \\frac{G M}{R^2}$$
    where $M = 5.972 &times; 10<sup>24</sup>\\text{ kg}$ is the mass of Earth, and $R = 6.371 &times; 10<sup>6</sup>\\text{ m}$ is Earth&apos;s mean equatorial radius.
  </p>

  <p>
    <b style="color: ${themeColor};">Mean Density of Earth (&rho;):</b><br/>
    Assuming Earth to be a uniform sphere of radius $R$ and density $\\rho$, its mass is $M = \\frac{4}{3}\\pi R^3 \\rho$. Substituting this into the formula for $g$:
    $$g = \\frac{G}{R^2}\\left(\\frac{4}{3}\\pi R^3 \\rho\\right) = \\frac{4}{3}\\pi G R \\rho$$
    Rearranging gives the mean density of Earth:
    $$\\rho = \\frac{3 g}{4\\pi G R} \\approx 5.5 &times; 10<sup>3</sup>\\text{ kg/m}<sup>3</sup>$$
  </p>

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    4. Variation of Acceleration Due to Gravity with Altitude and Depth
  </h2>
  <p>
    The value of acceleration due to gravity $g$ is not universally constant across terrestrial locations; it varies systematically with height above sea level, depth beneath the crust, latitude, and Earth&apos;s non-spherical oblate spheroidal shape.
  </p>

  <p>
    <b style="color: ${themeColor};">(i) Variation with Altitude (Height h above Earth's Surface):</b>
  </p>
  ${stepDerivationBox(
    "Derivation of g at Altitude h",
    [
      {
        name: "Exact Expression at Distance r = R + h",
        content: "At height $h$ above Earth&apos;s surface, the distance from Earth&apos;s center is $r = R + h$. The local acceleration due to gravity is: $$g_h = \\frac{G M}{(R + h)^2} = \\frac{G M}{R^2\\left(1 + \\frac{h}{R}\\right)^2} = \\frac{g}{\\left(1 + \\frac{h}{R}\\right)^2}$$"
      },
      {
        name: "Binomial Approximation for Small Altitudes (h << R)",
        content: "Rewriting in negative power form: $g_h = g\\left(1 + \\frac{h}{R}\\right)^{-2}$. Expanding binomially when $h \\ll R$ and neglecting higher-order terms: $$g_h \\approx g\\left(1 - \\frac{2h}{R}\\right)$$"
      },
      {
        name: "Fractional and Percentage Decrease",
        content: "Fractional decrease: $\\frac{g - g_h}{g} = \\frac{2h}{R}$.<br/>Percentage decrease: $\\left(\\frac{\\Delta g}{g}\\right) \\times 100 = \\left(\\frac{2h}{R}\\right) \\times 100\\%$."
      }
    ]
  )}

  <p>
    <b style="color: ${themeColor};">(ii) Variation with Depth (d beneath Earth's Surface):</b>
  </p>
  ${stepDerivationBox(
    "Derivation of g at Depth d",
    [
      {
        name: "Newtonian Spherical Shell Theorem",
        content: "At depth $d$ below the surface, the distance from the center is $r = R - d$. According to Gauss&apos;s Law for gravity and Newton&apos;s Shell Theorem, the outer concentric spherical shell of thickness $d$ exerts <b>zero net gravitational force</b> on any interior point. The gravitational pull is produced solely by the inner core of radius $r = R - d$."
      },
      {
        name: "Inner Sphere Mass Expression",
        content: "Assuming uniform density $\\rho$, the enclosed mass is: $$M&apos; = \\frac{4}{3}\\pi (R - d)^3 \\rho$$"
      },
      {
        name: "Evaluating g_d",
        content: "The acceleration due to gravity is: $$g_d = \\frac{G M&apos;}{(R - d)^2} = \\frac{G}{(R - d)^2}\\left[\\frac{4}{3}\\pi (R - d)^3 \\rho\\right] = \\frac{4}{3}\\pi G \\rho (R - d)$$ Since $g = \\frac{4}{3}\\pi G R \\rho$, taking the ratio yields: $$g_d = g\\left(1 - \\frac{d}{R}\\right)$$"
      },
      {
        name: "At Earth's Center (d = R)",
        content: "Setting $d = R$: $g_{\\text{center}} = g\\left(1 - \\frac{R}{R}\\right) = 0$. A body at the center of the Earth experiences complete gravitational weightlessness."
      }
    ]
  )}

  ${examTrapBox(
    "Altitude vs Depth Rate of Decrease",
    "For small distances (h, d << R), gravity drops TWICE as fast with altitude as it does with depth: g_h = g(1 - 2h/R) versus g_d = g(1 - d/R). Therefore, the decrease in g at a height h is equal to the decrease in g at a depth d = 2h."
  )}

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    5. Gravitational Potential Energy & Gravitational Potential
  </h2>
  <p>
    Gravitational fields are conservative force fields. Consequently, the work performed against gravitational attraction is stored as gravitational potential energy, independent of the geometric trajectory traversed.
  </p>

  <p>
    <b style="color: ${themeColor};">(i) Gravitational Potential Energy (U):</b><br/>
    The <b>gravitational potential energy</b> of a body of mass $m$ at distance $r$ from Earth&apos;s center is defined as the work done by an external agent in bringing the mass from infinity to distance $r$ without acceleration:
    $$U(r) = -\\int_{\\infty}^r \\vec{F} \\cdot d\\vec{r} = -\\int_{\\infty}^r \\frac{G M m}{x^2}\\,dx = -G M m \\left[-\\frac{1}{x}\\right]_{\\infty}^r = -\\frac{G M m}{r}$$
    The <b>negative sign</b> signifies that gravitational force is attractive; work must be supplied to liberate the body from Earth&apos;s gravitational grip to infinite separation ($U = 0$).
  </p>

  <p>
    <b style="color: ${themeColor};">(ii) Gravitational Potential (V):</b><br/>
    Gravitational potential at a spatial point is defined as the potential energy per unit test mass:
    $$V(r) = \\frac{U(r)}{m} = -\\frac{G M}{r}$$
    The gravitational field intensity $\\vec{E}_g$ and potential $V$ are related via the spatial gradient:
    $$\\vec{E}_g = -\\frac{dV}{dr}\\hat{r}$$
  </p>

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    6. Escape Speed
  </h2>
  <p>
    When a projectile is thrown vertically upwards, its kinetic energy is progressively converted into gravitational potential energy. At everyday speeds, it halts and plummets back. However, if projected with a sufficiently large critical speed, its kinetic energy overcomes the total negative potential energy, allowing it to escape Earth&apos;s gravitational influence entirely.
  </p>

  ${defBox(
    "Escape Speed",
    "The minimum initial speed with which a body must be projected from the surface of a celestial body so that it just overcomes the gravitational field and never returns on its own.",
    "m/s (or km/s)",
    "[M<sup>0</sup> L<sup>1</sup> T<sup>-1</sup>]"
  )}

  ${stepDerivationBox(
    "Derivation of Escape Speed from Earth's Surface",
    [
      {
        name: "Initial Mechanical Energy at Surface (r = R)",
        content: "Let a mass $m$ be launched with speed $v_e$ from Earth&apos;s surface: $$E_i = K_i + U_i = \\frac{1}{2}m v_e^2 - \\frac{G M m}{R}$$"
      },
      {
        name: "Final Mechanical Energy at Infinity (r -> infinity)",
        content: "At infinity, gravitational potential energy vanishes ($U_f = 0$). For minimum escape speed, the body just reaches infinity with zero residual velocity ($K_f = 0$): $$E_f = 0 + 0 = 0$$"
      },
      {
        name: "Conservation of Total Mechanical Energy",
        content: "Equating initial and final mechanical energy: $$\\frac{1}{2}m v_e^2 - \\frac{G M m}{R} = 0 \\implies \\frac{1}{2}m v_e^2 = \\frac{G M m}{R}$$ $$v_e = \\sqrt{\\frac{2 G M}{R}}$$"
      },
      {
        name: "Expressing in terms of Surface Gravity g",
        content: "Since $g = \\frac{G M}{R^2} \\implies G M = g R^2$: $$v_e = \\sqrt{2 g R}$$"
      },
      {
        name: "Numerical Value for Earth & Planetary Significance",
        content: "For Earth ($g = 9.8\\text{ m/s}^2, R = 6.4 &times; 10^6\\text{ m}$): $$v_e = \\sqrt{2 \\times 9.8 \\times 6.4 &times; 10^6} \\approx 11.2\\text{ km/s}$$ Notice that $v_e$ is <b>independent of the mass of the projectile</b> and launch angle. On the Moon, $v_e \\approx 2.38\\text{ km/s}$, which is lower than the root-mean-square thermal speeds of gas molecules (oxygen, nitrogen), explaining why the Moon has no atmosphere."
      }
    ]
  )}

  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    7. Orbital Velocity of an Earth Satellite & Orbital Dynamics
  </h2>
  <p>
    An artificial satellite is an object placed into stable orbit around a celestial body. For circular orbital motion at altitude $h$ ($r = R + h$), the gravitational pull provides the necessary centripetal force:
    $$\\frac{m v_o^2}{r} = \\frac{G M m}{r^2} \\implies v_o = \\sqrt{\\frac{G M}{r}} = \\sqrt{\\frac{G M}{R + h}}$$
  </p>

  <p>
    <b style="color: ${themeColor};">(i) Near-Earth Orbit Speed:</b><br/>
    For satellites revolving very close to Earth&apos;s surface ($h \\ll R$):
    $$v_o = \\sqrt{\\frac{G M}{R}} = \\sqrt{g R} \\approx 7.92\\text{ km/s} \\approx 8\\text{ km/s}$$
  </p>

  <p>
    <b style="color: ${themeColor};">(ii) Relationship Between Escape Speed and Orbital Speed:</b><br/>
    $$v_e = \\sqrt{2 g R} = \\sqrt{2} \\times \\sqrt{g R} = \\sqrt{2} v_o \\approx 1.414 v_o$$
    An increase of only <b>41.4%</b> in the orbital speed of a near-Earth satellite causes it to break out of orbit and escape into interplanetary space.
  </p>

  <p>
    <b style="color: ${themeColor};">(iii) Orbital Period (T):</b><br/>
    $$T = \\frac{2\\pi r}{v_o} = \\frac{2\\pi (R + h)^{3/2}}{\\sqrt{G M}} = 2\\pi \\sqrt{\\frac{(R + h)^3}{g R^2}}$$
    For a near-Earth satellite ($h \\ll R$): $T \\approx 2\\pi \\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ minutes} \\approx 1.4\\text{ hours}$.
  </p>

  <p>
    <b style="color: ${themeColor};">(iv) Energy Analysis of an Orbiting Satellite:</b><br/>
    &bull; <b>Kinetic Energy:</b> $K = \\frac{1}{2}m v_o^2 = \\frac{G M m}{2 r}$<br/>
    &bull; <b>Potential Energy:</b> $U = -\\frac{G M m}{r}$<br/>
    &bull; <b>Total Mechanical Energy:</b> $E = K + U = \\frac{G M m}{2 r} - \\frac{G M m}{r} = -\\frac{G M m}{2 r}$<br/>
    &bull; <b>Binding Energy:</b> The energy required to liberate the satellite from its orbit: $\\text{B.E.} = -E = +\\frac{G M m}{2 r}$.
  </p>

  <!-- MASTER FORMULA CHEAT SHEET -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 2px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-align: center !important;">
      📋 Master Revision Formula Cheat Sheet &bull; Unit VI: Gravitation
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 13.5px; color: #E2E8F0;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Newton&apos;s Law of Gravitation:</b><br/>
        $F = G\\frac{m_1 m_2}{r^2}$ &bull; $G = 6.674 &times; 10<sup>-11</sup>\\text{ N m}^2\\text{/kg}^2$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Surface Acceleration Due to Gravity:</b><br/>
        $g = \\frac{GM}{R^2} = \\frac{4}{3}\\pi G R \\rho$ &bull; $\\rho = \\frac{3g}{4\\pi GR}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Gravity Variation with Altitude:</b><br/>
        Exact: $g_h = \\frac{g}{(1 + h/R)^2}$ &bull; ($h \\ll R$): $g_h = g\\left(1 - \\frac{2h}{R}\\right)$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Gravity Variation with Depth:</b><br/>
        $g_d = g\\left(1 - \\frac{d}{R}\\right)$ &bull; At center ($d = R$): $g = 0$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Gravitational Potential & Potential Energy:</b><br/>
        $V = -\\frac{GM}{r}$ &bull; $U = -\\frac{GMm}{r}$ &bull; $E_g = -\\frac{dV}{dr}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Escape Speed & Orbital Velocity:</b><br/>
        $v_e = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$ &bull; $v_o = \\sqrt{gR} \\approx 7.92\\text{ km/s}$<br/>
        Relation: $v_e = \\sqrt{2} v_o$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Kepler&apos;s Third Law & Satellite Period:</b><br/>
        $T^2 = \\left(\\frac{4\\pi^2}{GM}\\right) r^3$ &bull; $T = 2\\pi \\sqrt{\\frac{(R+h)^3}{GM}}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Satellite Energy Balance:</b><br/>
        $K = \\frac{GMm}{2r}$, $U = -\\frac{GMm}{r}$, $E = -\\frac{GMm}{2r}$, $\\text{B.E.} = +\\frac{GMm}{2r}$
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
