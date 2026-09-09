const { themeColor, frac } = require('./c11_phy_5_helpers');

function getSolutionsPart2() {
  return `
  <!-- SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS EACH) -->
  <div style="background: rgba(171, 71, 188, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 & 3 Marks Each) &bull; Q41 to Q80
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Mathematical calculations, 2-mark conceptual deductions, coordinate transformations, and rotational dynamics problems.
    </p>
  </div>

  <!-- Q41 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q41: Three particles of masses 1 kg, 2 kg, and 3 kg are placed at the vertices of an equilateral triangle of side 1 m. Find the coordinates of their centre of mass.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Place $m_1 = 1\\text{ kg}$ at $(0, 0)$, $m_2 = 2\\text{ kg}$ at $(1, 0)$, and $m_3 = 3\\text{ kg}$ at $(0.5, \frac{\\sqrt{3}}{2}})$.
      <br/>Total mass: $M = 1 + 2 + 3 = 6\\text{ kg}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $X_{\\text{cm}} = \\frac{1(0) + 2(1) + 3(0.5)}{6} = \\frac{3.5}{6} = \\frac{7}{12} \\approx 0.583\\text{ m}$<br/>
      $Y_{\\text{cm}} = \frac{1(0) + 2(0) + 3(\\sqrt{3}/2)}{6} = \frac{3\\sqrt{3}}{12} = \frac{\\sqrt{3}}{4} \\approx 0.433\\text{ m}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      <b>Centre of Mass:</b> $(\\frac{7}{12}\\text{ m}, \frac{\\sqrt{3}}{4}\\text{ m})$.
    </p>
  </div>

  <!-- Q42 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q42: Two bodies of masses 10 kg and 30 kg are placed on the x-axis at x = 0 and x = 2 m. If the 10 kg mass is moved 0.5 m to the right, by what distance should the 30 kg mass be moved to keep the centre of mass fixed?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For the centre of mass position to remain unchanged:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\Delta X_{\\text{cm}} = 0 \\implies m_1 \\Delta x_1 + m_2 \\Delta x_2 = 0$<br/>
      $10(+0.5) + 30(\\Delta x_2) = 0 \\implies 5 + 30 \\Delta x_2 = 0$<br/>
      $\\Delta x_2 = -\\frac{5}{30} = -\\frac{1}{6} \\approx -0.167\\text{ m}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The 30 kg mass must be shifted by <b>\\frac{1}{6} m (or ~16.7 cm) to the left</b>.
    </p>
  </div>

  <!-- Q43 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q43: Four particles of masses m, 2m, 3m, and 4m are located at the corners of a square of side L: (0,0), (L,0), (L,L), and (0,L). Find the coordinates of the centre of mass.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Total mass: $M = m + 2m + 3m + 4m = 10m$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $X_{\\text{cm}} = \\frac{m(0) + 2m(L) + 3m(L) + 4m(0)}{10m} = \\frac{5mL}{10m} = 0.5 L$<br/>
      $Y_{\\text{cm}} = \\frac{m(0) + 2m(0) + 3m(L) + 4m(L)}{10m} = \\frac{7mL}{10m} = 0.7 L$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      <b>Coordinates of CM:</b> $(0.5 L, 0.7 L)$.
    </p>
  </div>

  <!-- Q44 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q44: From a uniform circular disc of radius R, a circular hole of radius R/2 is cut out touching the edge. Find the centre of mass of the remaining portion.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Let original disc have surface mass density $\sigma$, mass $M = \sigma \pi R^2$, centre at $(0, 0)$.
      <br/>Removed hole has area $\pi (R/2)^2 = \\frac{\\pi R^2}{4}$, mass $m = \\frac{M}{4}$, centre at $(R/2, 0)$.
      <br/>Using negative mass concept:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $X_{\\text{cm}} = \\frac{M(0) - m(R/2)}{M - m} = \\frac{- (M/4)(R/2)}{M - M/4} = \\frac{- M R / 8}{3M / 4} = -\\frac{R}{6}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The centre of mass shifts by <b>$R/6$ away from the hole</b> along the line of symmetry: $(-R/6, 0)$.
    </p>
  </div>

  <!-- Q45 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q45: A 60 kg man and a 40 kg boy stand at opposite ends of a stationary boat of mass 100 kg and length 4 m on still, frictionless water. If they walk across and exchange positions, how much does the boat move?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Since no horizontal external force acts on the system (boat + man + boy), the centre of mass of the entire system remains at rest: $\\Delta X_{\\text{cm}} = 0$.
      <br/>Let the boat shift by distance $x$ relative to the water.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $m_{\\text{man}}(L - x) + m_{\\text{boy}}(-L - x) + M_{\\text{boat}}(-x) = 0$<br/>
      $60(4 - x) + 40(-4 - x) - 100x = 0$<br/>
      $240 - 60x - 160 - 40x - 100x = 0 \\implies 80 - 200x = 0$<br/>
      $x = \\frac{80}{200} = 0.4\\text{ m} = 40\\text{ cm}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The boat shifts by <b>0.4 m (40 cm)</b> towards the side where the heavier man originally stood.
    </p>
  </div>

  <!-- Q46 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q46: Two particles of masses 2 kg and 3 kg have velocity vectors (2&icirc; + 3&jcirc;) m/s and (&icirc; - &jcirc;) m/s. Calculate the velocity of their centre of mass.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{V}_{\\text{cm}} = \frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2}{m_1 + m_2} = \frac{2(2\\hat{i} + 3\\hat{j}) + 3(\\hat{i} - \\hat{j})}{2 + 3}$<br/>
      $= \frac{(4\\hat{i} + 6\\hat{j}) + (3\\hat{i} - 3\\hat{j})}{5} = \frac{7\\hat{i} + 3\\hat{j}}{5} = 1.4\\hat{i} + 0.6\\hat{j}\\text{ m/s}$
    </div>
  </div>

  <!-- Q47 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q47: Why do internal forces fail to alter the linear momentum of an isolated system? Illustrate with Newton&apos;s third law.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For every internal force $\\vec{F}_{ij}$ that particle $j$ exerts on particle $i$, Newton&apos;s third law requires an equal and opposite force $\\vec{F}_{ji} = -\\vec{F}_{ij}$ exerted by particle $i$ on particle $j$. Summing over all pairs:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\sum \\vec{F}_{\\text{int}} = \\sum_{i \\ne j} \\vec{F}_{ij} = \\vec{0} \\implies \frac{d\\vec{P}}{dt} = \\vec{F}_{\\text{ext}} = \\vec{0}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      Therefore, internal interactions can redistribute momentum among parts, but the total system momentum $\\vec{P}$ remains strictly invariant.
    </p>
  </div>

  <!-- Q48 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q48: Differentiate between an idealized rigid body and a real elastic body.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>&bull; <b>Rigid Body:</b> An idealized solid body in which the relative distance between any pair of constituent particles remains perfectly invariant, regardless of the magnitude of external forces applied.
      <br/>&bull; <b>Elastic Body:</b> A real body whose constituent particles undergo measurable relative displacement (deformation) under external deforming stress, returning to original configuration when deforming forces are removed.
    </p>
  </div>

  <!-- Q49 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q49: A mechanic applies a force of 50 N at an angle of 60&deg; to a wrench of length 30 cm. Calculate the torque generated about the bolt.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Given: $F = 50\\text{ N}$, $r = 30\\text{ cm} = 0.3\\text{ m}$, $\\theta = 60^\\circ$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\tau = r F \\sin\\theta = 0.3 \\times 50 \\times \\sin(60^\\circ) = 15 \\times \frac{\\sqrt{3}}{2} = 7.5\\sqrt{3} \\approx 12.99\\text{ N m}$
    </div>
  </div>

  <!-- Q50 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q50: A force F = (2&icirc; - 3&jcirc; + 4k̂) N acts at the position vector r = (3&icirc; + 2&jcirc; + 3k̂) m. Compute the torque vector about the origin.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Torque is the determinant vector cross product:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 2 & 3 \\\\ 2 & -3 & 4 \\end{vmatrix}$<br/>
      $= \\hat{i}[ (2)(4) - (3)(-3) ] - \\hat{j}[ (3)(4) - (3)(2) ] + \\hat{k}[ (3)(-3) - (2)(2) ]$<br/>
      $= \\hat{i}(8 + 9) - \\hat{j}(12 - 6) + \\hat{k}(-9 - 4) = 17\\hat{i} - 6\\hat{j} - 13\\hat{k}\\text{ N m}$
    </div>
  </div>

  <!-- Q51 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q51: Show that the moment of a couple is independent of the choice of the origin or reference point.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Consider two opposite forces $\\vec{F}$ at position $\\vec{r}_1$ and $-\\vec{F}$ at position $\\vec{r}_2$ with respect to origin $O$.
      <br/>Total torque about $O$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{\\tau} = \\vec{r}_1 \\times \\vec{F} + \\vec{r}_2 \\times (-\\vec{F}) = (\\vec{r}_1 - \\vec{r}_2) \\times \\vec{F}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      Here, $(\\vec{r}_1 - \\vec{r}_2) = \\vec{r}_{12}$ is the relative position vector connecting the two points of application, which is completely independent of the choice of reference origin $O$.
    </p>
  </div>

  <!-- Q52 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q52: A uniform meter stick of mass M is balanced horizontally on a knife-edge at the 40 cm mark when a mass of 20 g is suspended at the 10 cm mark. Determine the mass M of the meter stick.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> The meter stick has its centre of mass at the 50 cm mark. Fulcrum is at 40 cm mark.
      <br/>Effort/suspended mass: $m = 20\\text{ g}$ at 10 cm; distance from fulcrum $d_1 = 40 - 10 = 30\\text{ cm}$.
      <br/>Meter stick mass $M$ acts at 50 cm; distance from fulcrum $d_2 = 50 - 40 = 10\\text{ cm}$.
      <br/>Applying the Principle of Moments:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\text{Anticlockwise Torque} = \\text{Clockwise Torque} \\implies 20 \\times 30 = M \\times 10$<br/>
      $M = \\frac{600}{10} = 60\\text{ g}$
    </div>
  </div>

  <!-- Q53 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q53: Can a body be in translational equilibrium without being in rotational equilibrium? Give an example.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> <b>Yes.</b> When a couple acts on a body (e.g., turning a steering wheel or opening a water tap with two equal and opposite forces), $\\sum \\vec{F} = \\vec{F} - \\vec{F} = \\vec{0}$, so the body is in translational equilibrium. However, the net torque $\\sum \\vec{\\tau} = F d \\ne 0$, so it is not in rotational equilibrium and accelerates angularly.
    </p>
  </div>

  <!-- Q54 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q54: A particle of mass 2 kg moves with a constant velocity v = 5&icirc; m/s along the straight line y = 4 m. Calculate its angular momentum about the origin.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> At any time, $\\vec{r} = x\\hat{i} + 4\\hat{j}$, and linear momentum $\\vec{p} = m\\vec{v} = 2(5\\hat{i}) = 10\\hat{i}\\text{ kg m/s}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\vec{L} = \\vec{r} \\times \\vec{p} = (x\\hat{i} + 4\\hat{j}) \\times (10\\hat{i}) = 40(\\hat{j} \\times \\hat{i}) = -40\\hat{k}\\text{ kg m}^2/\\text{s}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      The angular momentum has constant magnitude <b>40 J s</b> directed along $-\\hat{k}$, independent of $x$ and time $t$.
    </p>
  </div>

  <!-- Q55 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q55: A uniform circular disc of mass 4 kg and radius 0.5 m rotates about its central axis at 120 rpm. Calculate its angular momentum.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>Angular frequency: $\\omega = \\frac{120 \\times 2\\pi}{60} = 4\\pi \\approx 12.57\\text{ rad/s}$.
      <br/>Moment of inertia: $I = \\frac{1}{2} M R^2 = \\frac{1}{2}(4)(0.5)^2 = 0.5\\text{ kg m}^2$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $L = I \\omega = 0.5 \\times 4\\pi = 2\\pi \\approx 6.28\\text{ J s}$
    </div>
  </div>

  <!-- Q56 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q56: Explain how a falling cat manages to land on its feet without violating the conservation of angular momentum.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Even though net external torque is zero ($\vec{L} = \vec{0}$), a cat arches its back and twists its front and rear halves in opposite directions. By pulling its front paws in (low $I$) and extending its rear legs (high $I$), it rotates the front by a large angle while the rear rotates in reverse by only a small angle. Repeating this sequence in reverse re-orients its feet downward with zero net angular momentum.
    </p>
  </div>

  <!-- Q57 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q57: If the Earth suddenly contracts to half its present radius without change in mass, calculate the new duration of the day.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For a solid sphere, $I = \\frac{2}{5} M R^2 \\propto R^2$.
      <br/>Since no external torque acts, $L = I \\omega = \\text{constant} \\implies I_1 \\left(\\frac{2\\pi}{T_1}\\right) = I_2 \\left(\\frac{2\\pi}{T_2}\\right)$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $T_2 = T_1 \\left(\\frac{I_2}{I_1}\\right) = T_1 \\left(\\frac{R_2}{R_1}\\right)^2 = 24 \\times \\left(\\frac{1}{2}\\right)^2 = 24 \\times \\frac{1}{4} = 6\\text{ hours}$
    </div>
  </div>

  <!-- Q58 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q58: A ballet dancer spins at 2 rev/s with outstretched arms. When she folds her arms, her moment of inertia decreases by 40%. Find her new rotational speed.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Initial speed $f_1 = 2\\text{ rev/s}$, initial moment of inertia $I_1$.
      <br/>Final moment of inertia $I_2 = I_1 - 0.40 I_1 = 0.60 I_1$.
      <br/>By conservation of angular momentum:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_1 f_1 = I_2 f_2 \\implies f_2 = \\frac{I_1}{I_2} f_1 = \\frac{I_1}{0.60 I_1}(2) = \\frac{2}{0.6} = \\frac{10}{3} \\approx 3.33\\text{ rev/s}$
    </div>
  </div>

  <!-- Q59 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q59: A flywheel decelerates uniformly from 600 rpm to 300 rpm in 10 seconds under a braking torque. Calculate its angular acceleration and the number of revolutions made in this interval.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>$\\omega_0 = \\frac{600 \\times 2\\pi}{60} = 20\\pi\\text{ rad/s}$, $\\omega = \\frac{300 \\times 2\\pi}{60} = 10\\pi\\text{ rad/s}$, $t = 10\\text{ s}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\alpha = \\frac{\\omega - \\omega_0}{t} = \\frac{10\\pi - 20\\pi}{10} = -\\pi \\approx -3.14\\text{ rad/s}^2$<br/>
      $\\theta = \\left(\\frac{\\omega_0 + \\omega}{2}\\right) t = \\left(\\frac{20\\pi + 10\\pi}{2}\\right) \\times 10 = 150\\pi\\text{ rad}$<br/>
      $\\text{Revolutions } N = \\frac{\\theta}{2\\pi} = \\frac{150\\pi}{2\\pi} = 75\\text{ revolutions}$
    </div>
  </div>

  <!-- Q60 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q60: An electric fan rotating at 900 rpm is switched off and completes 200 revolutions before stopping. Find its constant angular deceleration and the time taken to halt.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>$\\omega_0 = \\frac{900 \\times 2\\pi}{60} = 30\\pi\\text{ rad/s}$, $\\omega = 0$, $\\theta = 200 \\times 2\\pi = 400\\pi\\text{ rad}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\omega^2 = \\omega_0^2 + 2\\alpha \\theta \\implies 0 = (30\\pi)^2 + 2\\alpha(400\\pi)$<br/>
      $\\alpha = -\\frac{900\\pi^2}{800\\pi} = -\\frac{9\\pi}{8} \\approx -3.53\\text{ rad/s}^2$<br/>
      $t = \\frac{\\omega - \\omega_0}{\\alpha} = \\frac{-30\\pi}{-9\\pi/8} = \\frac{240}{9} = \\frac{80}{3} \\approx 26.67\\text{ s}$
    </div>
  </div>

  <!-- Q61 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q61: Show that for a body consisting of n equal-mass particles, the radius of gyration is the root-mean-square distance from the rotational axis.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Let body have $n$ particles, each of mass $m$, so total mass $M = n m$.
      <br/>Moment of inertia: $I = m r_1^2 + m r_2^2 + \\dots + m r_n^2 = m(r_1^2 + r_2^2 + \\dots + r_n^2)$.
      <br/>By definition of radius of gyration, $I = M k^2 = (n m) k^2$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $(n m) k^2 = m(r_1^2 + r_2^2 + \\dots + r_n^2) \\implies k = \\sqrt{\\frac{r_1^2 + r_2^2 + \\dots + r_n^2}{n}}}$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      Thus, $k$ is precisely the <b>root-mean-square (RMS)</b> distance of the particles from the axis of rotation.
    </p>
  </div>

  <!-- Q62 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q62: Find the ratio of the radius of gyration of a circular ring to that of a circular disc of the same radius about their central perpendicular axes.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>&bull; For circular ring: $I_{\\text{ring}} = M R^2 = M k_{\\text{ring}}^2 \\implies k_{\\text{ring}} = R$.
      <br/>&bull; For circular disc: $I_{\\text{disc}} = \\frac{1}{2} M R^2 = M k_{\\text{disc}}^2 \\implies k_{\\text{disc}} = \\frac{R}{\\sqrt{2}}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      \frac{k_{\\text{ring}}}{k_{\\text{disc}}} = \\frac{R}{R / \\sqrt{2}} = \\sqrt{2} : 1 \\approx 1.414 : 1$
    </div>
  </div>

  <!-- Q63 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q63: Calculate the moment of inertia and radius of gyration of a uniform solid cylinder of mass 5 kg and radius 0.2 m about its central cylindrical axis.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For a solid cylinder, $I = \\frac{1}{2} M R^2$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I = \\frac{1}{2}(5)(0.2)^2 = 2.5 \\times 0.04 = 0.1\\text{ kg m}^2$<br/>
      $k = \\sqrt{\\frac{I}{M}}} = \\sqrt{\\frac{0.1}{5}}} = \\sqrt{0.02} \\approx 0.1414\\text{ m}$
    </div>
  </div>

  <!-- Q64 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q64: Three point masses each of mass m are fixed at the vertices of an equilateral triangle of side a. Calculate the moment of inertia of the system about an axis passing through one vertex perpendicular to the plane.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Let the axis pass through vertex $A$.
      <br/>Distance of mass at $A$ from axis: $r_A = 0$.
      <br/>Distance of mass at $B$ from axis: $r_B = a$.
      <br/>Distance of mass at $C$ from axis: $r_C = a$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I = m r_A^2 + m r_B^2 + m r_C^2 = m(0)^2 + m(a^2) + m(a^2) = 2 m a^2$
    </div>
  </div>

  <!-- Q65 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q65: A thin uniform rod of length 1.2 m and mass 2 kg rotates about an axis perpendicular to its length through one of its ends. Calculate its moment of inertia and radius of gyration.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For an axis through one end:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I = \\frac{1}{3} M L^2 = \\frac{1}{3}(2)(1.2)^2 = \\frac{2 \\times 1.44}{3} = 0.96\\text{ kg m}^2$<br/>
      $k = \\frac{L}{\\sqrt{3}} = \\frac{1.2}{\\sqrt{3}} \\approx 0.693\\text{ m}$
    </div>
  </div>

  <!-- Q66 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q66: Calculate the rotational kinetic energy of a solid sphere of mass 10 kg and radius 0.2 m rotating about its diameter at 30 rad/s.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>Moment of inertia: $I = \\frac{2}{5} M R^2 = \\frac{2}{5}(10)(0.2)^2 = 4 \\times 0.04 = 0.16\\text{ kg m}^2$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $K_{\\text{rot}} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2}(0.16)(30)^2 = 0.08 \\times 900 = 72\\text{ Joules}$
    </div>
  </div>

  <!-- Q67 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q67: Compare linear momentum and angular momentum in terms of formula, SI unit, and conservation conditions.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>&bull; <b>Linear Momentum ($\vec{P}$):</b> Formula $\vec{P} = m\vec{v}$, SI Unit: $\text{kg m s}^{-1}$, Conserved when $\sum \vec{F}_{\text{ext}} = \vec{0}$.
      <br/>&bull; <b>Angular Momentum ($\vec{L}$):</b> Formula $\vec{L} = \vec{r}\times\vec{p} = I\vec{\omega}$, SI Unit: $\text{J s}$ (or $\text{kg m}^2\text{ s}^{-1}$), Conserved when $\sum \vec{\tau}_{\text{ext}} = \vec{0}$.
    </p>
  </div>

  <!-- Q68 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q68: Compare Force and Torque in rotational dynamics.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b>
      <br/>&bull; <b>Force ($\vec{F}$):</b> Causes linear acceleration ($\vec{F} = m\vec{a}$); work done $dW = \vec{F} \cdot d\vec{r}$; unit is Newton (N).
      <br/>&bull; <b>Torque ($\vec{\tau}$):</b> Causes angular acceleration ($\vec{\tau} = I\vec{\alpha}$); work done $dW = \vec{\tau} \cdot d\vec{\theta}$; unit is Newton-metre (N m).
    </p>
  </div>

  <!-- Q69 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q69: State the Theorem of Parallel Axes.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> The moment of inertia $I$ of any rigid body about an arbitrary axis is equal to its moment of inertia $I_{\\text{cm}}$ about a parallel axis passing through its centre of mass plus the product of total mass $M$ and the square of perpendicular distance $d$ between the two axes:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I = I_{\\text{cm}} + M d^2$
    </div>
  </div>

  <!-- Q70 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q70: State the Theorem of Perpendicular Axes for a planar lamina.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For a flat planar lamina lying in the $xy$-plane, the moment of inertia $I_z$ about an axis perpendicular to the plane is equal to the sum of its moments of inertia about two mutually perpendicular axes $x$ and $y$ lying in its plane and intersecting at the same point:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_z = I_x + I_y$ &bull; (Valid exclusively for 2D thin laminar bodies)
    </div>
  </div>

  <!-- Q71 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q71: Use the perpendicular axis theorem to find the moment of inertia of a circular disc about any diameter.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> For a planar circular disc, the perpendicular central axis has $I_z = \\frac{1}{2} M R^2$.
      <br/>By symmetry, all diametrical axes are identical: $I_x = I_y = I_{\\text{dia}}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_z = I_x + I_y = 2 I_{\\text{dia}} \\implies I_{\\text{dia}} = \\frac{I_z}{2} = \\frac{1}{4} M R^2$
    </div>
  </div>

  <!-- Q72 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q72: Calculate the moment of inertia of a thin circular ring of mass M and radius R about a tangent in its plane.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>About a diameter in the plane: $I_{\\text{dia}} = \\frac{1}{2} M R^2$ (from $I_z = M R^2 = 2 I_{\\text{dia}}$).
      <br/>The tangent in the plane is parallel to the diameter at distance $d = R$. By Parallel Axis Theorem:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_{\\text{tangent}} = I_{\\text{dia}} + M R^2 = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2$
    </div>
  </div>

  <!-- Q73 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q73: A constant torque of 200 N m is applied to a flywheel of moment of inertia 40 kg m<sup>2</sup> initially at rest. Find its angular velocity after 5 seconds and work done by the torque.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> 
      <br/>Angular acceleration: $\\alpha = \\frac{\\tau}{I} = \\frac{200}{40} = 5\\text{ rad/s}^2$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\omega = \\omega_0 + \\alpha t = 0 + 5(5) = 25\\text{ rad/s}$<br/>
      $W = \\Delta K_{\\text{rot}} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2}(40)(25)^2 = 20 \\times 625 = 12,500\\text{ Joules (12.5 kJ)}$
    </div>
  </div>

  <!-- Q74 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q74: A solid sphere and a hollow sphere of identical mass and radius roll down the same incline without slipping. Which reaches the bottom first?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> The linear acceleration of a body rolling down an incline is $a = \\frac{g\\sin\\theta}{1 + k^2/R^2}$.
      <br/>&bull; For solid sphere: $k^2/R^2 = 2/5 = 0.40 \\implies a_s = \\frac{g\\sin\\theta}{1.4} \\approx 0.714 g\\sin\\theta$.
      <br/>&bull; For hollow sphere: $k^2/R^2 = 2/3 \\approx 0.67 \\implies a_h = \\frac{g\\sin\\theta}{1.67} \\approx 0.60 g\\sin\\theta$.
    </p>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      Since $a_s > a_h$, the <b>solid sphere</b> accelerates faster and reaches the bottom first.
    </p>
  </div>

  <!-- Q75 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q75: Derive the mathematical expression for the work done by a torque &tau; in rotating a body through an angle &theta;.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> A tangential force $F$ acts at radius $r$, displacing the point through arc $ds = r\\,d\\theta$.
      <br/>Work done: $dW = F\\,ds = F(r\\,d\\theta) = (F r)\\,d\\theta = \\tau\\,d\\theta$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $W = \\int_0^{\\theta} \\tau\\,d\\theta$ &bull; (For constant torque: $W = \\tau \\theta$)
    </div>
  </div>

  <!-- Q76 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q76: Show that the rotational power delivered by a torque is P = &tau; &omega;.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Instantaneous power is the rate of doing work:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $P = \\frac{dW}{dt} = \frac{\\tau\\,d\\theta', 'dt')} = \\tau \\left(\\frac{d\\theta}{dt}\\right) = \\tau \\omega$
    </div>
    <p style="margin: 6px 0 0 0; color: #CBD5E1; font-size: 13px;">
      This is the exact rotational analogue of linear power $P = F v$.
    </p>
  </div>

  <!-- Q77 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q77: A cord is wound around the rim of a flywheel of diameter 0.4 m and moment of inertia 0.5 kg m<sup>2</sup>. A steady pull of 25 N is exerted on the cord. Find the angular acceleration of the wheel.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> Radius $R = 0.4 / 2 = 0.2\\text{ m}$.
      <br/>Torque exerted: $\\tau = F \\times R = 25 \\times 0.2 = 5\\text{ N m}$.
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\alpha = \\frac{\\tau}{I} = \\frac{5}{0.5} = 10\\text{ rad/s}^2$
    </div>
  </div>

  <!-- Q78 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q78: Explain why a massive flywheel is attached to the crankshaft of internal combustion engines.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> In a 4-stroke engine, power is delivered only during the brief power stroke, while the other 3 strokes consume energy. A massive flywheel possesses a very large moment of inertia $I$. It absorbs excess kinetic energy during the power stroke with negligible speed increase ($\Delta \omega = \Delta K / I\omega$), and delivers it back during the exhaust, suction, and compression strokes, maintaining a remarkably smooth rotational speed.
    </p>
  </div>

  <!-- Q79 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q79: A wheel of moment of inertia 2 kg m<sup>2</sup> rotating at 30 rad/s is brought into contact with a stationary wheel of moment of inertia 4 kg m<sup>2</sup> on the same axis. Find the common angular speed and energy lost.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> By Conservation of Angular Momentum:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $I_1 \\omega_1 = (I_1 + I_2) \\omega \\implies \\omega = \\frac{2 \\times 30}{2 + 4} = \\frac{60}{6} = 10\\text{ rad/s}$<br/>
      $K_i = \\frac{1}{2}(2)(30)^2 = 900\\text{ J}$<br/>
      $K_f = \\frac{1}{2}(6)(10)^2 = 300\\text{ J}$<br/>
      $\\Delta K_{\\text{loss}} = 900 - 300 = 600\\text{ Joules}$ (lost as heat and frictional sound).
    </div>
  </div>

  <!-- Q80 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(171, 71, 188, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q80: Why is a tail rotor indispensable on single-rotor helicopters? Explain using conservation of angular momentum.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Solution:</b> By Newton&apos;s third law and conservation of angular momentum ($L_{\\text{total}} = 0$), when the helicopter&apos;s engine drives the main overhead rotor blade in a clockwise direction, an equal and opposite reaction torque is exerted on the fuselage, causing the body of the helicopter to spin uncontrollably in the counter-clockwise direction. The vertical <b>tail rotor</b> exerts a sideways horizontal thrust at a long lever arm from the mast, generating a counter-torque that cancels the reaction torque and stabilizes the fuselage.
    </p>
  </div>
`;
}

module.exports = { getSolutionsPart2 };
