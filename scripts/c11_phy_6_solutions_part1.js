const { themeColor } = require('./c11_phy_6_helpers');

function getSolutionsPart1() {
  return `
  <!-- SECTION A: VERY SHORT ANSWER (VSA) QUESTIONS (1 MARK EACH) -->
  <div style="background: rgba(253, 200, 48, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each) &bull; Q1 to Q40
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Fundamental definitions, universal constants, dimensional formulas, SI units, and instantaneous planetary facts.
    </p>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q1: State Newton&apos;s Universal Law of Gravitation.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Every particle of matter in the universe attracts every other particle with a mutual force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $F = G\\frac{m_1 m_2}{r^2}$
    </div>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q2: Write the vector form of Newton&apos;s law of gravitation and state the physical significance of the negative sign.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> In vector notation:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{F}_{12} = -\\frac{G m_1 m_2}{r^2}\\hat{r}_{12}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The <b>negative sign</b> indicates that the gravitational force is strictly <b>attractive</b> in nature, directed opposite to the unit position displacement vector $\\hat{r}_{12}$.
    </p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q3: State the SI unit and dimensional formula of the universal gravitational constant G.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> Newton metre-squared per kilogram-squared (<b>N m<sup>2</sup> kg<sup>-2</sup></b> or <b>m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup></b>)
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]</b>
    </p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q4: Why is G called a &apos;universal constant&apos;, whereas g is not?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>$G$</b> has the identical value everywhere in the cosmos, independent of time, temperature, chemical composition, and medium. In contrast, <b>$g$</b> depends on the mass and radius of the specific celestial body and varies with altitude, depth, and latitude.
    </p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q5: What is the accepted experimental value of universal gravitational constant G?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$G = 6.674 &times; 10<sup>-11</sup>\\text{ N m}^2\\text{ kg}^{-2}$$
      It was first experimentally measured in the laboratory by Henry Cavendish in 1798 using a sensitive torsion balance.
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q6: State Kepler&apos;s First Law of Planetary Motion (Law of Orbits).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Every planet revolves around the Sun in an <b>elliptical orbit</b>, with the Sun situated at one of the two foci of the ellipse.
    </p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q7: State Kepler&apos;s Second Law of Planetary Motion (Law of Areas).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The radius vector drawn from the Sun to any revolving planet sweeps out <b>equal areas in equal intervals of time</b>; that is, the areal velocity of the planet remains strictly constant ($dA/dt = \\text{constant}$).
    </p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q8: Which universal conservation law forms the theoretical basis of Kepler&apos;s Second Law?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>Law of Conservation of Angular Momentum</b>. Because the gravitational force exerted by the Sun is a strictly central force ($\\vec{r} \\times \\vec{F} = \\vec{0}$), no external torque acts on the planet, so orbital angular momentum $\\vec{L}$ is conserved.
    </p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q9: State Kepler&apos;s Third Law of Planetary Motion (Law of Periods).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The square of the orbital period of revolution $T$ of a planet is directly proportional to the cube of the semi-major axis $a$ of its elliptical orbit:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $T^2 \\propto a^3 \\implies \\frac{T^2}{a^3} = \\text{constant}$
    </div>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q10: Where does a planet move fastest in its orbit: at perihelion or aphelion? Justify.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At <b>perihelion</b> (closest approach to the Sun). By conservation of angular momentum, $L = m r v = \\text{constant}$. Because distance $r$ is minimum at perihelion, linear orbital speed $v$ is maximum.
    </p>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q11: Define acceleration due to gravity (g).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The acceleration acquired by a freely falling body under the sole action of the gravitational attraction of a celestial body (such as Earth) is called <b>acceleration due to gravity</b>.
    </p>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q12: State the SI unit and dimensional formula of acceleration due to gravity g.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> metre per second-squared (<b>m/s<sup>2</sup></b> or <b>N/kg</b>)
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>0</sup> L<sup>1</sup> T<sup>-2</sup>]</b>
    </p>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q13: Write the formula connecting g, G, M, and R at Earth&apos;s surface.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $g = \\frac{G M}{R^2}$
    </div>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q14: What is the standard numerical value of g at the surface of the Earth at sea level?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The internationally standardized value of $g$ at sea level and $45^\\circ$ latitude is:
      $$g = 9.80665\\text{ m/s}^2 \\approx 9.8\\text{ m/s}^2$$
    </p>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q15: How does the value of g vary as we move from the equator towards the poles?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The value of $g$ <b>increases progressively</b> from a minimum of approximately $9.78\\text{ m/s}^2$ at the equator to a maximum of approximately $9.83\\text{ m/s}^2$ at the poles.
    </p>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q16: Why is the value of g greater at the poles than at the equator?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Due to Earth&apos;s equatorial bulge (oblate spheroidal shape), the polar radius is about 21 km shorter than the equatorial radius ($R_p &lt; R_e$). Because $g \\propto 1/R^2$, smaller radius yields larger gravity at the poles ($g_p &gt; g_e$).
    </p>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q17: Write the approximate formula for acceleration due to gravity at height h when h &Lt; R.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $g_h \\approx g\\left(1 - \\frac{2h}{R}\\right)$ &bull; (Valid strictly when $h \\ll R$)
    </div>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q18: What is the exact formula for acceleration due to gravity at altitude h without binomial approximation?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $g_h = \\frac{g}{\\left(1 + \\frac{h}{R}\\right)^2} = g\\left(\\frac{R}{R + h}\\right)^2$
    </div>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q19: Write the formula for acceleration due to gravity at depth d beneath Earth&apos;s surface.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $g_d = g\\left(1 - \\frac{d}{R}\\right)$
    </div>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q20: What is the value of acceleration due to gravity at the exact center of the Earth?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Zero</b> ($g_{\\text{center}} = 0$). At the center, $d = R$, so $g_d = g(1 - R/R) = 0$.
    </p>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q21: At what depth d below Earth&apos;s surface does the value of g become half of its surface value?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At depth <b>$d = R/2$ (half the Earth&apos;s radius)</b>:
      $$g_d = g\\left(1 - \\frac{R/2}{R}\\right) = g\\left(1 - \\frac{1}{2}\\right) = \\frac{g}{2}$$
    </p>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q22: At what height h is the decrease in g equal to that at a depth d for small distances?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At height <b>$h = d/2$</b>. For small distances, $\\Delta g_h = g(2h/R)$ and $\\Delta g_d = g(d/R)$. Setting them equal: $2h = d \\implies h = d/2$.
    </p>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q23: Define gravitational field intensity at a spatial point.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>gravitational field intensity</b> $\\vec{E}_g$ at any point is defined as the gravitational force experienced by a unit test mass placed at that point:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{E}_g = \\lim_{m_0 \\to 0}\\frac{\\vec{F}}{m_0} = -\\frac{G M}{r^2}\\hat{r}$
    </div>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q24: State the SI unit and dimensional formula of gravitational field intensity.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> Newton per kilogram (<b>N/kg</b>) or <b>m/s<sup>2</sup></b>
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>0</sup> L<sup>1</sup> T<sup>-2</sup>]</b> (identical to acceleration)
    </p>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q25: Define gravitational potential at a point.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>gravitational potential</b> $V$ at a point in a gravitational field is defined as the work done by an external agent in bringing a unit positive mass from infinity to that point without acceleration:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $V = -\\frac{G M}{r}$
    </div>
  </div>

  <!-- Q26 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q26: State the SI unit and dimensional formula of gravitational potential.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> Joule per kilogram (<b>J/kg</b> or <b>m<sup>2</sup> s<sup>-2</sup></b>)
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>0</sup> L<sup>2</sup> T<sup>-2</sup>]</b>
    </p>
  </div>

  <!-- Q27 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q27: Why is gravitational potential always negative?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> By convention, gravitational potential is zero at infinity ($V_{\\infty} = 0$). Because gravitational attraction is purely attractive, an attractive field does positive work pulling mass inward from infinity, which means the external agent must perform negative work to hold it in check ($V &lt; 0$).
    </p>
  </div>

  <!-- Q28 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q28: Where is gravitational potential taken to be zero by universal convention?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At <b>infinite distance ($r = \\infty$)</b> from all mass distributions, where gravitational interaction falls to zero.
    </p>
  </div>

  <!-- Q29 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q29: State the relation between gravitational field intensity E_g and gravitational potential V.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Gravitational field intensity is the negative spatial derivative (potential gradient) of gravitational potential:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $E_g = -\\frac{dV}{dr}$
    </div>
  </div>

  <!-- Q30 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q30: Define gravitational potential energy of a body.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>gravitational potential energy</b> $U$ of a body of mass $m$ at distance $r$ from Earth&apos;s center is defined as the work done in bringing the body from infinity to that distance without acceleration.
    </p>
  </div>

  <!-- Q31 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q31: Write the formula for the gravitational potential energy of two masses M and m separated by distance r.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $U = -\\frac{G M m}{r}$
    </div>
  </div>

  <!-- Q32 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q32: Define escape speed from the surface of a celestial body.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>escape speed</b> is defined as the minimum launch speed required for a projectile projected from the surface of a planet to overcome its gravitational field and never return.
    </p>
  </div>

  <!-- Q33 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q33: Write the formulas for escape speed in terms of G, M, and in terms of g, R.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $v_e = \\sqrt{\\frac{2 G M}{R}} = \\sqrt{2 g R}$
    </div>
  </div>

  <!-- Q34 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q34: Does the escape speed depend on the mass of the projected projectile?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>No.</b> As shown by $v_e = \\sqrt{2 g R}$, escape speed depends solely on the mass and radius of the planet, and is completely independent of the mass of the escaping body.
    </p>
  </div>

  <!-- Q35 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q35: Does the escape speed depend on the angle of projection?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>No.</b> Escape speed is a scalar quantity derived strictly from mechanical energy conservation, and is independent of the projection angle (provided the trajectory does not intersect the planet).
    </p>
  </div>

  <!-- Q36 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q36: What is the numerical value of escape speed from Earth&apos;s surface?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$v_e = \\sqrt{2 \\times 9.8 \\times 6.4 &times; 10^6} \\approx 11.2\\text{ km/s}$$
    </p>
  </div>

  <!-- Q37 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q37: Why does the Moon lack an atmosphere?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Because the Moon&apos;s escape speed ($v_e \\approx 2.38\\text{ km/s}$) is lower than the root-mean-square thermal speeds of air molecules at lunar temperatures, allowing atmospheric gas molecules to escape into space.
    </p>
  </div>

  <!-- Q38 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q38: Define the orbital velocity of an artificial Earth satellite.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>orbital velocity</b> is the precise horizontal speed required to insert an artificial satellite into a stable circular orbit around the Earth at a given altitude:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $v_o = \\sqrt{\\frac{G M}{R + h}}$
    </div>
  </div>

  <!-- Q39 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q39: What is the orbital velocity of a satellite revolving very close to Earth&apos;s surface?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For $h \\ll R$:
      $$v_o = \\sqrt{g R} = \\sqrt{9.8 \\times 6.4 &times; 10^6} \\approx 7.92\\text{ km/s} \\approx 8\\text{ km/s}$$
    </p>
  </div>

  <!-- Q40 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q40: State the relationship between escape speed and orbital velocity for a near-Earth satellite.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $v_e = \\sqrt{2} v_o \\approx 1.414 v_o$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      An increase of <b>41.4%</b> in the orbital speed of a near-Earth satellite will cause it to escape Earth&apos;s orbit entirely.
    </p>
  </div>
`;
}

module.exports = { getSolutionsPart1 };
