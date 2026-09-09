const { themeColor } = require('./c11_phy_6_helpers');

function getSolutionsPart2() {
  return `
  <!-- SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS EACH) -->
  <div style="background: rgba(253, 200, 48, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 & 3 Marks Each) &bull; Q41 to Q80
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Numerical calculations, conceptual deductions, variations of g, gravitational potential problems, and orbital satellite mechanics.
    </p>
  </div>

  <!-- Q41 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q41: Two lead spheres of masses 20 kg and 10 kg are placed with their centers 0.5 m apart. Calculate the gravitational force between them.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
      <br/>Given: $m_1 = 20\\text{ kg}$, $m_2 = 10\\text{ kg}$, $r = 0.5\\text{ m}$, $G = 6.674 &times; 10<sup>-11</sup>\\text{ N m}^2\\text{/kg}^2$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $F = G\\frac{m_1 m_2}{r^2} = \\frac{(6.674 &times; 10^{-11}) \\times 20 \\times 10}{(0.5)^2} = \\frac{1.335 &times; 10^{-8}}{0.25} = 5.34 &times; 10^{-8}\\text{ N}$
    </div>
  </div>

  <!-- Q42 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q42: Calculate the gravitational force of attraction between the Earth (M = 6 &times; 10<sup>24</sup> kg) and the Moon (m = 7.4 &times; 10<sup>22</sup> kg) at distance 3.84 &times; 10<sup>8</sup> m.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $F = G\\frac{M m}{r^2} = \\frac{(6.67 &times; 10^{-11}) \\times (6 &times; 10^{24}) \\times (7.4 &times; 10^{22})}{(3.84 &times; 10^8)^2}$<br/>
      $= \\frac{2.961 &times; 10^{37}}{1.475 &times; 10^{17}} \\approx 2.01 &times; 10^{20}\\text{ N}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      This enormous force provides the necessary centripetal force keeping the Moon in orbit.
    </p>
  </div>

  <!-- Q43 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q43: Three equal masses m are placed at the vertices of an equilateral triangle of side a. Find the net gravitational force on any one mass.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Consider mass $m$ at vertex $A$. The other two masses at $B$ and $C$ each exert an attractive force of magnitude:
      $$F_1 = F_2 = \\frac{G m^2}{a^2}$$
      The angle between these two force vectors is $60^\\circ$. By vector addition:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $F_{\\text{net}} = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos 60^\\circ} = \\sqrt{F^2 + F^2 + 2F^2(0.5)} = \\sqrt{3} F = \\sqrt{3}\\frac{G m^2}{a^2}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The resultant force acts along the angle bisector toward the centroid of the triangle.
    </p>
  </div>

  <!-- Q44 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q44: A planet moves in an elliptical orbit. If the ratio of its maximum distance (aphelion) to minimum distance (perihelion) is 1.5, find the ratio of its maximum to minimum orbital speeds.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Because gravitational force is central, orbital angular momentum is conserved:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $L = m r_1 v_1 = m r_2 v_2 \\implies \\frac{v_{\\max}}{v_{\\min}} = \\frac{v_p}{v_a} = \\frac{r_a}{r_p} = \\frac{r_{\\max}}{r_{\\min}} = 1.5$
    </div>
  </div>

  <!-- Q45 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q45: A planet orbits the Sun with an orbital period of 8 years. Find its orbital radius in terms of Earth&apos;s orbital radius (Astronomical Units).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Applying Kepler&apos;s Third Law: $\\frac{T_p^2}{T_e^2} = \\frac{r_p^3}{r_e^3}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\left(\\frac{8}{1}\\right)^2 = \\left(\\frac{r_p}{r_e}\\right)^3 \\implies 64 = \\left(\\frac{r_p}{r_e}\\right)^3 \\implies \\frac{r_p}{r_e} = (64)^{1/3} = 4$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The planet&apos;s orbital radius is <b>4 AU (4 times that of Earth)</b>.
    </p>
  </div>

  <!-- Q46 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q46: Calculate the mass of the Sun given Earth&apos;s orbital radius r = 1.5 &times; 10<sup>11</sup> m and period T = 3.15 &times; 10<sup>7</sup> s (1 year).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> From Kepler&apos;s Third Law: $T^2 = \\frac{4\\pi^2 r^3}{G M_s}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $M_s = \\frac{4\\pi^2 r^3}{G T^2} = \\frac{4 \\times (3.14)^2 \\times (1.5 &times; 10^{11})^3}{(6.67 &times; 10^{-11}) \\times (3.15 &times; 10^7)^2}$<br/>
      $= \\frac{39.44 \\times 3.375 &times; 10^{33}}{6.67 &times; 10^{-11} \\times 9.92 &times; 10^{14}} = \\frac{1.331 &times; 10^{35}}{6.617 &times; 10^4} \\approx 2.01 &times; 10^{30}\\text{ kg}$
    </div>
  </div>

  <!-- Q47 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q47: At what height above the Earth&apos;s surface will the acceleration due to gravity be 25% of its value at the surface?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Here $g_h = 0.25 g = g/4$. Since the change is large, use the exact formula:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $g_h = g\\left(\\frac{R}{R + h}\\right)^2 \\implies \\frac{g}{4} = g\\left(\\frac{R}{R + h}\\right)^2$<br/>
      $\\frac{R}{R + h} = \\frac{1}{2} \\implies R + h = 2R \\implies h = R = 6400\\text{ km}$
    </div>
  </div>

  <!-- Q48 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q48: Find the height at which the acceleration due to gravity decreases by 1% of its value at the surface (R = 6400 km).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For a small percentage change ($1\%$), use the binomial approximation:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{\\Delta g}{g} = \\frac{2h}{R} \\implies 0.01 = \\frac{2h}{6400}$<br/>
      $2h = 0.01 \\times 6400 = 64\\text{ km} \\implies h = 32\\text{ km}$
    </div>
  </div>

  <!-- Q49 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q49: At what depth below Earth&apos;s surface does the acceleration due to gravity decrease by 20% of its surface value?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> With depth, $g_d = g(1 - d/R) \\implies \\frac{\\Delta g}{g} = \\frac{d}{R}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $0.20 = \\frac{d}{6400} \\implies d = 0.20 \\times 6400 = 1280\\text{ km}$
    </div>
  </div>

  <!-- Q50 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q50: Calculate the percentage decrease in the weight of a body when taken to a height of 32 km above Earth (R = 6400 km).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Weight $W = mg \\propto g$. Percentage decrease in weight equals percentage decrease in $g$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{\\Delta W}{W} &times; 100 = \\frac{2h}{R} &times; 100 = \\frac{2 \\times 32}{6400} &times; 100 = \\frac{64}{64} = 1\\%$
    </div>
  </div>

  <!-- Q51 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q51: How far below the surface of the Earth does the acceleration due to gravity become 1% of its surface value?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> We are given $g_d = 0.01 g$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $g_d = g\\left(1 - \\frac{d}{R}\\right) \\implies 0.01 = 1 - \\frac{d}{R} \\implies \\frac{d}{R} = 0.99$<br/>
      $d = 0.99 R = 0.99 \\times 6400 = 6336\\text{ km}$
    </div>
  </div>

  <!-- Q52 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q52: Compare the acceleration due to gravity at altitude h = R with that at depth d = R/2.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
      <br/>&bull; At altitude $h = R$: $g_h = g\\left(\\frac{R}{R + R}\\right)^2 = \\frac{g}{4} = 0.25 g$.
      <br/>&bull; At depth $d = R/2$: $g_d = g\\left(1 - \\frac{R/2}{R}\\right) = \\frac{g}{2} = 0.50 g$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{g_h}{g_d} = \\frac{g/4}{g/2} = \\frac{1}{2} \\implies g_d = 2 g_h$
    </div>
  </div>

  <!-- Q53 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q53: Calculate the mean density of Earth given g = 9.8 m/s<sup>2</sup>, G = 6.67 &times; 10<sup>-11</sup> SI units, and R = 6.4 &times; 10<sup>6</sup> m.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Since $g = \\frac{4}{3}\\pi G R \\rho$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\rho = \\frac{3 g}{4\\pi G R} = \\frac{3 \\times 9.8}{4 \\times 3.1416 \\times (6.67 &times; 10^{-11}) \\times (6.4 &times; 10^6)}$<br/>
      $= \\frac{29.4}{5.364 &times; 10^{-3}} \\approx 5480\\text{ kg/m}^3$
    </div>
  </div>

  <!-- Q54 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q54: If the radius of the Earth shrinks by 1% with its mass remaining constant, find the percentage change in g.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> $g = G M R^{-2}$. Differentiating logarithmically:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{\\Delta g}{g} = -2\\frac{\\Delta R}{R} = -2(-1\\%) = +2\\%$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The acceleration due to gravity <b>increases by 2%</b>.
    </p>
  </div>

  <!-- Q55 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q55: Two point masses m<sub>1</sub> = 100 kg and m<sub>2</sub> = 900 kg are separated by 1 m. Find the point on the joining line where the net gravitational field is zero.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Let the null point be at distance $x$ from $m_1$ and $(1 - x)$ from $m_2$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{G m_1}{x^2} = \\frac{G m_2}{(1 - x)^2} \\implies \\frac{100}{x^2} = \\frac{900}{(1 - x)^2} \\implies \\frac{1}{x} = \\frac{3}{1 - x}$<br/>
      $1 - x = 3x \\implies 4x = 1 \\implies x = 0.25\\text{ m} = 25\\text{ cm}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The null point lies at <b>25 cm from the 100 kg mass</b>.
    </p>
  </div>

  <!-- Q56 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q56: Four particles each of mass 2 kg are placed at the vertices of a square of side 1 m. Calculate the gravitational potential at the center of the square.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Distance from center to each vertex: $r = \\frac{a}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\text{ m}$.
      <br/>Since potential is a scalar:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $V = 4\\left(-\\frac{G m}{r}\\right) = -4 \\frac{G(2)}{1/\\sqrt{2}} = -8\\sqrt{2} G \\approx -8(1.414)(6.67 &times; 10^{-11}) = -7.55 &times; 10^{-10}\\text{ J/kg}$
    </div>
  </div>

  <!-- Q57 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q57: Find the work done in bringing a 5 kg mass from infinity to Earth&apos;s surface (M = 6 &times; 10<sup>24</sup> kg, R = 6.4 &times; 10<sup>6</sup> m).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Work done by external agent without acceleration:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $W_{\\text{ext}} = U(R) - U(\\infty) = -\\frac{G M m}{R} - 0$<br/>
      $= -\\frac{(6.67 &times; 10^{-11}) \\times (6 &times; 10^{24}) \\times 5}{6.4 &times; 10^6} = -\\frac{2.001 &times; 10^{15}}{6.4 &times; 10^6} \\approx -3.13 &times; 10^8\\text{ Joules}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      (The gravitational field does $+3.13 &times; 10^8\\text{ J}$ of positive work).
    </p>
  </div>

  <!-- Q58 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q58: Show that the exact change in potential energy reduces to &Delta;U = mgh for small heights h &Lt; R.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
      $$\\Delta U = U(R + h) - U(R) = -\\frac{G M m}{R + h} - \\left(-\\frac{G M m}{R}\\right) = G M m\\left(\\frac{1}{R} - \\frac{1}{R + h}\\right)$$
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\Delta U = \\frac{G M m h}{R(R + h)} = \\frac{G M m h}{R^2\\left(1 + \\frac{h}{R}\\right)} = \\frac{m g h}{1 + \\frac{h}{R}}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      For $h \\ll R$, the denominator $(1 + h/R) \\approx 1$, which gives $\\Delta U \\approx mgh$.
    </p>
  </div>

  <!-- Q59 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q59: A body of mass m is raised to height h = R above the surface of the Earth. Find the gain in gravitational potential energy.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Using the exact expression derived in Q58:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\Delta U = \\frac{m g h}{1 + \\frac{h}{R}} = \\frac{m g R}{1 + \\frac{R}{R}} = \\frac{m g R}{2} = \\frac{1}{2} m g R$
    </div>
  </div>

  <!-- Q60 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q60: Calculate the escape speed from a planet whose mass is 8 times and radius is 2 times that of the Earth.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Escape speed $v_e = \\sqrt{\\frac{2 G M}{R}} \\propto \\sqrt{\\frac{M}{R}}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{v_{e,p}}{v_{e,E}} = \\sqrt{\\frac{M_p/M_E}{R_p/R_E}} = \\sqrt{\\frac{8}{2}} = \\sqrt{4} = 2$<br/>
      $v_{e,p} = 2 \\times 11.2\\text{ km/s} = 22.4\\text{ km/s}$
    </div>
  </div>

  <!-- Q61 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q61: What is the escape speed from the Moon if its mass is 7.36 &times; 10<sup>22</sup> kg and radius is 1.74 &times; 10<sup>6</sup> m?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $v_e = \\sqrt{\\frac{2 G M}{R}} = \\sqrt{\\frac{2 \\times (6.67 &times; 10^{-11}) \\times (7.36 &times; 10^{22})}{1.74 &times; 10^6}} = \\sqrt{5.64 &times; 10^6} \\approx 2375\\text{ m/s} \\approx 2.38\\text{ km/s}$
    </div>
  </div>

  <!-- Q62 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q62: A body is projected vertically upwards with a speed v = 0.5 v<sub>e</sub> from Earth&apos;s surface. What maximum height h does it attain?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> By Conservation of Energy: $\\frac{1}{2}m v^2 = \\Delta U = \\frac{m g h}{1 + h/R}$.
      <br/>Since $v_e = \\sqrt{2 g R}$, $v^2 = (0.5 v_e)^2 = 0.25(2 g R) = 0.5 g R$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{1}{2}m(0.5 g R) = \\frac{m g h}{1 + h/R} \\implies \\frac{R}{4} = \\frac{h}{1 + h/R}$<br/>
      $R\\left(1 + \\frac{h}{R}\\right) = 4h \\implies R + h = 4h \\implies 3h = R \\implies h = \\frac{R}{3} \\approx 2133\\text{ km}$
    </div>
  </div>

  <!-- Q63 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q63: A projectile is fired with a speed of 15 km/s from Earth&apos;s surface. What will be its residual speed in deep space far from Earth?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> By Conservation of Mechanical Energy:
      $$\\frac{1}{2}m v^2 - \\frac{G M m}{R} = \\frac{1}{2}m v_\\infty^2 + 0$$
      Since $\\frac{G M m}{R} = \\frac{1}{2}m v_e^2$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $v_\\infty = \\sqrt{v^2 - v_e^2} = \\sqrt{(15)^2 - (11.2)^2} = \\sqrt{225 - 125.44} = \\sqrt{99.56} \\approx 9.98\\text{ km/s}$
    </div>
  </div>

  <!-- Q64 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q64: An artificial satellite orbits Earth at an altitude of 600 km. Calculate its orbital speed (R = 6400 km, g = 9.8 m/s<sup>2</sup>).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Orbital radius $r = R + h = 6400 + 600 = 7000\\text{ km} = 7 &times; 10^6\\text{ m}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $v_o = \\sqrt{\\frac{g R^2}{R + h}} = \\sqrt{\\frac{9.8 \\times (6.4 &times; 10^6)^2}{7 &times; 10^6}} = \\sqrt{5.73 &times; 10^7} \\approx 7570\\text{ m/s} = 7.57\\text{ km/s}$
    </div>
  </div>

  <!-- Q65 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q65: Find the orbital period of a satellite orbiting at an altitude of 1600 km above Earth (R = 6400 km).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> $r = 6400 + 1600 = 8000\\text{ km} = 8 &times; 10^6\\text{ m}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $T = 2\\pi \\sqrt{\\frac{r^3}{g R^2}} = 2(3.1416) \\sqrt{\\frac{(8 &times; 10^6)^3}{9.8 \\times (6.4 &times; 10^6)^2}} = 6.283 \\times 1130 \\approx 7100\\text{ s} \\approx 1.97\\text{ hours}$
    </div>
  </div>

  <!-- Q66 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q66: Calculate the kinetic energy, potential energy, and total energy of a 200 kg satellite in a circular orbit of radius 8000 km.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> $G M m = (6.67 &times; 10^{-11}) \\times (6 &times; 10^{24}) \\times 200 = 8 &times; 10^{16}\\text{ J m}$.
      <br/>Radius $r = 8 &times; 10^6\\text{ m}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $K = \\frac{G M m}{2 r} = \\frac{8 &times; 10^{16}}{2(8 &times; 10^6)} = 5 &times; 10^9\\text{ Joules (5 GJ)}$<br/>
      $U = -\\frac{G M m}{r} = -\\frac{8 &times; 10^{16}}{8 &times; 10^6} = -10 &times; 10^9\\text{ Joules (-10 GJ)}$<br/>
      $E = K + U = 5 - 10 = -5 &times; 10^9\\text{ Joules (-5 GJ)}$
    </div>
  </div>

  <!-- Q67 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q67: What is the binding energy of a satellite of mass 1000 kg orbiting at height h = R?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Radius $r = R + h = 2R$. Binding Energy:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\text{B.E.} = +\\frac{G M m}{2 r} = +\\frac{G M m}{4 R} = \\frac{m g R}{4} = \\frac{1000 \\times 9.8 \\times (6.4 &times; 10^6)}{4} = 1.568 &times; 10^{10}\\text{ J}$
    </div>
  </div>

  <!-- Q68 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q68: If a satellite in circular orbit at radius r = 2R is suddenly brought to rest, with what speed does it strike Earth&apos;s surface?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Initial energy at rest at $r = 2R$: $E_i = 0 - \\frac{G M m}{2R}$.
      <br/>Final energy on impact at $r = R$: $E_f = \\frac{1}{2}m v^2 - \\frac{G M m}{R}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{1}{2}m v^2 - \\frac{G M m}{R} = -\\frac{G M m}{2R} \\implies \\frac{1}{2}m v^2 = \\frac{G M m}{2R} = \\frac{1}{2}m(g R)$<br/>
      $v = \\sqrt{g R} = \\sqrt{9.8 \\times 6.4 &times; 10^6} \\approx 7.92\\text{ km/s}$
    </div>
  </div>

  <!-- Q69 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q69: Explain why an astronaut feels weightless in an orbiting space station even though gravity is nearly 90% of sea level.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Apparent weight is the normal contact reaction force $N$ exerted by the floor on the astronaut. In orbit, both the space station and the astronaut accelerate toward Earth&apos;s center with the identical free-fall acceleration $a = g_h$. Thus, $m g_h - N = m a = m g_h \\implies N = 0$. The sensation of weightlessness is caused by perpetual common free fall, not the absence of gravity.
    </p>
  </div>

  <!-- Q70 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q70: What is a geostationary satellite? State its essential orbital parameters.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> A <b>geostationary satellite</b> revolves around Earth such that it appears permanently stationary over a fixed point on the equator.
      <br/>&bull; <b>Period:</b> Exactly 24 hours (1 sidereal day).
      <br/>&bull; <b>Sense of Rotation:</b> West to East (matching Earth&apos;s spin).
      <br/>&bull; <b>Orbital Plane:</b> Coplanar with the Earth&apos;s equatorial plane.
      <br/>&bull; <b>Altitude:</b> Approximately $35,800\\text{ km} \\approx 36,000\\text{ km}$ above the surface.
    </p>
  </div>

  <!-- Q71 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q71: Calculate the exact orbital radius and altitude of a geostationary satellite (T = 86400 s).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> From $T = 2\\pi \\sqrt{\\frac{r^3}{G M}}$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $r = \\left(\\frac{G M T^2}{4\\pi^2}\\right)^{1/3} = \\left(\\frac{(6.67 &times; 10^{-11}) \\times (6 &times; 10^{24}) \\times (86400)^2}{4\\pi^2}\\right)^{1/3} \\approx 4.22 &times; 10^7\\text{ m} = 42,200\\text{ km}$<br/>
      $h = r - R = 42,200 - 6400 = 35,800\\text{ km}$
    </div>
  </div>

  <!-- Q72 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q72: Differentiate between Geostationary and Polar satellites.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
      <br/>&bull; <b>Geostationary:</b> Orbital plane is equatorial; altitude $\\approx 36,000\\text{ km}$; period $T = 24\\text{ hours}$; used for telecommunications and television broadcasting.
      <br/>&bull; <b>Polar:</b> Orbital plane passes over North and South poles; low altitude ($500 - 800\\text{ km}$); period $T \\approx 100\\text{ minutes}$; used for weather forecasting, remote sensing, and environmental surveillance.
    </p>
  </div>

  <!-- Q73 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q73: Show that the orbital velocity of a satellite is completely independent of its mass.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Equating centripetal force to gravitational pull:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{m v_o^2}{r} = \\frac{G M m}{r^2} \\implies v_o^2 = \\frac{G M}{r} \\implies v_o = \\sqrt{\\frac{G M}{r}}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      Because the satellite mass $m$ cancels from both sides, an apple and a 10-ton satellite in the same orbit travel with identical speeds.
    </p>
  </div>

  <!-- Q74 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q74: Show that for a satellite orbiting very close to Earth, its period is T = &radic;(3&pi; / G&rho;).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For $h \\ll R$, $r \\approx R$. Period $T = 2\\pi \\sqrt{\\frac{R^3}{G M}}$.
      <br/>Substitute $M = \\frac{4}{3}\\pi R^3 \\rho$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $T = 2\\pi \\sqrt{\\frac{R^3}{G \\left(\\frac{4}{3}\\pi R^3 \\rho\\right)}} = 2\\pi \\sqrt{\\frac{3}{4\\pi G \\rho}} = \\sqrt{\\frac{4\\pi^2 \\times 3}{4\\pi G \\rho}} = \\sqrt{\\frac{3\\pi}{G \\rho}}$
    </div>
  </div>

  <!-- Q75 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q75: How much additional energy must be supplied to a satellite of mass m in orbit of radius r to make it escape Earth?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> The total mechanical energy in orbit is $E_{\\text{orbit}} = -\\frac{G M m}{2 r}$.
      <br/>To escape to infinity with zero residual energy, final energy is $E_\\infty = 0$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\Delta E = E_\\infty - E_{\\text{orbit}} = 0 - \\left(-\\frac{G M m}{2 r}\\right) = +\\frac{G M m}{2 r}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The energy required is exactly equal to the satellite&apos;s current orbital kinetic energy ($K = \\frac{G M m}{2r}$).
    </p>
  </div>

  <!-- Q76 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q76: Distinguish between Inertial Mass and Gravitational Mass.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
      <br/>&bull; <b>Inertial Mass ($m_i$):</b> The measure of a body&apos;s inertia resisting linear acceleration under external force, defined by Newton&apos;s second law: $m_i = F/a$. Measured using an inertial balance.
      <br/>&bull; <b>Gravitational Mass ($m_g$):</b> The measure of a body&apos;s gravitational interaction with other masses, defined by Newton&apos;s law of gravitation: $m_g = F r^2 / (G M)$. Measured using a physical beam balance.
      <br/>Einstein&apos;s Principle of Equivalence establishes that $m_i = m_g$ to within experimental precision.
    </p>
  </div>

  <!-- Q77 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q77: Why does a person weigh slightly more at the poles than at the equator? State two reasons.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
      <br/>1. <b>Oblate Spheroid Shape:</b> Earth&apos;s polar radius $R_p$ is about 21 km smaller than equatorial radius $R_e$. Since $g \\propto 1/R^2$, gravity is naturally higher at the poles.
      <br/>2. <b>Axial Rotation of Earth:</b> Centrifugal force due to Earth&apos;s spin reduces effective gravity at latitude $\\lambda$: $g&apos; = g - R\\omega^2\\cos^2\\lambda$. At the equator ($\\lambda = 0^\\circ$), reduction is maximum ($R\\omega^2$), whereas at the poles ($\\lambda = 90^\\circ$), centrifugal reduction is zero.
    </p>
  </div>

  <!-- Q78 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q78: If Earth stops rotating on its axis, what will be the effect on g at the equator and at the poles?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Effective gravity is $g&apos; = g - R\\omega^2\\cos^2\\lambda$.
      <br/>&bull; <b>At Equator ($\lambda = 0^\circ$):</b> When rotation halts ($\omega = 0$), centrifugal reduction ceases, so $g$ <b>increases by $R\\omega^2 \approx 0.034\text{ m/s}^2$</b>.
      <br/>&bull; <b>At Poles ($\lambda = 90^\circ$):</b> Since $\cos 90^\circ = 0$, centrifugal force was already zero, so $g$ <b>remains completely unchanged</b>.
    </p>
  </div>

  <!-- Q79 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q79: Two satellites of masses m<sub>1</sub> and m<sub>2</sub> revolve in orbits of radii r<sub>1</sub> and r<sub>2</sub> with r<sub>1</sub> = 4 r<sub>2</sub>. Find the ratio of their orbital speeds and periods.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
      <br/>&bull; Orbital speed $v_o \\propto \\frac{1}{\\sqrt{r}}$:
      $$\\frac{v_1}{v_2} = \\sqrt{\\frac{r_2}{r_1}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$$
      &bull; Period $T \\propto r^{3/2}$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{T_1}{T_2} = \\left(\\frac{r_1}{r_2}\\right)^{3/2} = (4)^{3/2} = 8$
    </div>
  </div>

  <!-- Q80 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(253, 200, 48, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q80: Derive the formula for the escape speed of a body projected from the center of the Earth.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> The potential at Earth&apos;s center is $V_{\\text{center}} = -\\frac{3 G M}{2 R}$.
      <br/>Initial energy of body launched from center with speed $v_{e,c}$:
      $$E_i = \\frac{1}{2}m v_{e,c}^2 + m V_{\\text{center}} = \\frac{1}{2}m v_{e,c}^2 - \\frac{3 G M m}{2 R}$$
      To reach infinity with zero kinetic energy, $E_f = 0$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\frac{1}{2}m v_{e,c}^2 = \\frac{3 G M m}{2 R} \\implies v_{e,c} = \\sqrt{\\frac{3 G M}{R}} = \\sqrt{3 g R} = \\sqrt{\\frac{3}{2}} v_e \\approx 1.225 v_e$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      Escape speed from Earth&apos;s center is $\\sqrt{3 g R} \\approx 13.7\\text{ km/s}$.
    </p>
  </div>
`;
}

module.exports = { getSolutionsPart2 };
