const { themeColor, frac } = require('./c11_phy_2_helpers');

function getLaQuestions() {
  const qList = [
    {
      q: "Derive the three equations of uniformly accelerated rectilinear motion (v = u + at, s = ut + &frac12;at&sup2;, and v&sup2; - u&sup2; = 2as) using the Graphical Method (velocity-time graph).",
      sol: `<b>Graphical Setup:</b><br>
      Consider an object moving along a straight line with uniform acceleration $a$. Let its initial velocity at time $t = 0$ be $u$ (represented by point $A$ on the velocity axis) and final velocity at time $t$ be $v$ (represented by point $B$).<br>
      Plotting the velocity-time ($v-t$) graph:<br>
      &bull; $OA = CD = u$ (initial velocity)<br>
      &bull; $OE = CB = v$ (final velocity)<br>
      &bull; $OC = AD = t$ (time interval)<br>
      &bull; $BD = BC - CD = v - u$ (change in velocity).<br><br>
      <b>1. First Equation of Motion ($v = u + at$):</b><br>
      The slope of the $v-t$ graph represents the instantaneous acceleration $a$:<br>
      $a = \text{Slope of line } AB = ${frac('BD', 'AD')} = ${frac('v - u', 't')}$.<br>
      Cross-multiplying: $v - u = at \implies \mathbf{v = u + at}$.<br><br>
      <b>2. Second Equation of Motion ($s = ut + \frac{1}{2}at^2$):</b><br>
      The area under the $v-t$ curve between $t = 0$ and $t$ represents displacement $s$:<br>
      $s = \text{Area of trapezium } OABC = \text{Area of rectangle } OADC + \text{Area of right triangle } ABD$.<br>
      &bull; $\text{Area of rectangle } OADC = OA \times OC = u \times t = ut$.<br>
      &bull; $\text{Area of triangle } ABD = \frac{1}{2} \times \text{base } AD \times \text{height } BD = \frac{1}{2} \times t \times (v - u)$.<br>
      From the first equation, $(v - u) = at$. Substituting this gives:<br>
      $\text{Area of triangle } ABD = \frac{1}{2} \times t \times (at) = \frac{1}{2}at^2$.<br>
      Summing the areas: $\mathbf{s = ut + \frac{1}{2}at^2}$.<br><br>
      <b>3. Third Equation of Motion ($v^2 - u^2 = 2as$):</b><br>
      Displacement $s$ can also be computed directly using the standard formula for the area of a trapezium:<br>
      $s = \frac{1}{2} \times (\text{sum of parallel sides}) \times (\text{perpendicular distance between them})$<br>
      $s = \frac{1}{2}(OA + CB) \times OC = \frac{1}{2}(u + v)t$.<br>
      From the first equation, $t = ${frac('v - u', 'a')}$. Substituting $t$:<br>
      $s = \frac{1}{2}(v + u)\left(${frac('v - u', 'a')}\right) = ${frac('v^2 - u^2', '2a')}$.<br>
      Cross-multiplying yields: $\mathbf{v^2 - u^2 = 2as} \implies \mathbf{v^2 = u^2 + 2as}$.`
    },
    {
      q: "Derive the three kinematic equations of uniformly accelerated motion (v = u + at, s = ut + &frac12;at&sup2;, and v&sup2; - u&sup2; = 2as) using the Calculus Method (differentiation and integration).",
      sol: `<b>1. First Equation ($v = u + at$):</b><br>
      By definition, instantaneous acceleration is $a = ${frac('dv', 'dt')}$.<br>
      Rearranging: $dv = a \, dt$.<br>
      Integrating both sides with appropriate boundary conditions: at $t = 0$, velocity is $u$; at time $t$, velocity is $v$:<br>
      $\int_u^v dv = \int_0^t a \, dt$.<br>
      Since acceleration $a$ is constant, it factors out of the integral:<br>
      $[v]_u^v = a [t]_0^t \implies v - u = a(t - 0) \implies \mathbf{v = u + at}$.<br><br>
      <b>2. Second Equation ($s = ut + \frac{1}{2}at^2$):</b><br>
      Instantaneous velocity is $v = ${frac('ds', 'dt')}$, so $ds = v \, dt$.<br>
      Substitute $v = u + at$: $ds = (u + at)dt$.<br>
      Integrating both sides: at $t = 0$, displacement $s = 0$; at time $t$, displacement is $s$:<br>
      $\int_0^s ds = \int_0^t (u + at) dt = u \int_0^t dt + a \int_0^t t \, dt$.<br>
      $[s]_0^s = u [t]_0^t + a \left[${frac('t^2', '2')}\right]_0^t \implies \mathbf{s = ut + \frac{1}{2}at^2}$.<br><br>
      <b>3. Third Equation ($v^2 - u^2 = 2as$):</b><br>
      By the calculus chain rule, acceleration can be expressed as:<br>
      $a = ${frac('dv', 'dt')} = ${frac('dv', 'ds')} \cdot ${frac('ds', 'dt')} = v \, ${frac('dv', 'ds')}$.<br>
      Rearranging terms: $a \, ds = v \, dv$.<br>
      Integrating both sides: when $s = 0$, velocity is $u$; when displacement is $s$, velocity is $v$:<br>
      $\int_0^s a \, ds = \int_u^v v \, dv$.<br>
      $a [s]_0^s = \left[${frac('v^2', '2')}\right]_u^v \implies a(s - 0) = ${frac('v^2 - u^2', '2')}$.<br>
      Multiplying by $2$: $2as = v^2 - u^2 \implies \mathbf{v^2 = u^2 + 2as}$.`
    },
    {
      q: "Derive an analytical expression for the distance traversed by a uniformly accelerated body in the n-th second (s_n). Hence, prove Galileo's Law of Odd Numbers for a freely falling body dropped from rest.",
      sol: `<b>1. Derivation of Distance in $n^{\text{th}}$ Second ($s_n$):</b><br>
      The distance covered specifically during the $n^{\text{th}}$ second is the difference between displacement after $n$ seconds ($s_n'$) and displacement after $(n - 1)$ seconds ($s_{n-1}'$):<br>
      $s_n = s_n' - s_{n-1}'$.<br>
      Using $s = ut + \frac{1}{2}at^2$:<br>
      &bull; $s_n' = u(n) + \frac{1}{2}a(n)^2 = un + \frac{1}{2}an^2$.<br>
      &bull; $s_{n-1}' = u(n - 1) + \frac{1}{2}a(n - 1)^2 = un - u + \frac{1}{2}a(n^2 - 2n + 1) = un - u + \frac{1}{2}an^2 - an + \frac{1}{2}a$.<br>
      Subtracting $s_{n-1}'$ from $s_n'$:<br>
      $s_n = \left(un + \frac{1}{2}an^2\right) - \left(un - u + \frac{1}{2}an^2 - an + \frac{1}{2}a\right)$<br>
      $s_n = u + an - \frac{1}{2}a = \mathbf{u + \frac{a}{2}(2n - 1)}$.<br><br>
      <b>2. Galileo's Law of Odd Numbers:</b><br>
      Consider a body released from rest ($u = 0$) under gravity ($a = g$):<br>
      $s_n = 0 + \frac{g}{2}(2n - 1) = \frac{g}{2}(2n - 1)$.<br>
      Calculating distance covered in successive seconds:<br>
      &bull; For $1^{\text{st}}$ second ($n = 1$): $s_1 = \frac{g}{2}[2(1) - 1] = \mathbf{1 \left(\frac{g}{2}\right)}$.<br>
      &bull; For $2^{\text{nd}}$ second ($n = 2$): $s_2 = \frac{g}{2}[2(2) - 1] = \mathbf{3 \left(\frac{g}{2}\right)}$.<br>
      &bull; For $3^{\text{rd}}$ second ($n = 3$): $s_3 = \frac{g}{2}[2(3) - 1] = \mathbf{5 \left(\frac{g}{2}\right)}$.<br>
      &bull; For $4^{\text{th}}$ second ($n = 4$): $s_4 = \frac{g}{2}[2(4) - 1] = \mathbf{7 \left(\frac{g}{2}\right)}$.<br>
      Taking the ratio of successive displacements:<br>
      $s_1 : s_2 : s_3 : s_4 : \dots = \mathbf{1 : 3 : 5 : 7 : \dots}$<br>
      This establishes <b>Galileo's Law of Odd Numbers</b>: The distances traversed during equal successive intervals of time by a body falling from rest stand to one another in the ratio of the consecutive odd integers beginning with unity.`
    },
    {
      q: "State the Parallelogram Law of Vector Addition. Derive the analytical expressions for both the magnitude and direction of the resultant of two vectors inclined at an angle &theta;. Discuss the special cases when &theta; = 0&deg;, 90&deg;, and 180&deg;.",
      sol: `<b>1. Statement of Parallelogram Law:</b><br>
      If two vectors acting simultaneously at a point are represented both in magnitude and direction by two adjacent sides of a parallelogram drawn from a common origin, their resultant vector is completely represented in magnitude and direction by the diagonal of the parallelogram passing through that same point.<br><br>
      <b>2. Analytical Derivation:</b><br>
      Let two vectors $\vec{A}$ and $\vec{B}$ be represented by sides $\vec{OP}$ and $\vec{OS}$ of parallelogram $OPQS$, with angle between them $\angle POS = \theta$.<br>
      The diagonal $\vec{OQ} = \vec{R}$ represents the resultant. Drop perpendicular $QN$ from $Q$ onto extended line $OP$.<br>
      In right triangle $PNQ$:<br>
      $PQ = OS = B$, $\angle QPN = \theta$.<br>
      &bull; $PN = PQ \cos\theta = B \cos\theta$.<br>
      &bull; $QN = PQ \sin\theta = B \sin\theta$.<br>
      In right-angled triangle $ONQ$, applying Pythagoras theorem:<br>
      $OQ^2 = ON^2 + QN^2 = (OP + PN)^2 + QN^2$<br>
      $R^2 = (A + B\cos\theta)^2 + (B\sin\theta)^2$<br>
      $R^2 = A^2 + 2AB\cos\theta + B^2\cos^2\theta + B^2\sin^2\theta = A^2 + B^2(\cos^2\theta + \sin^2\theta) + 2AB\cos\theta$<br>
      Since $\cos^2\theta + \sin^2\theta = 1$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        R = \sqrt{A^2 + B^2 + 2AB\cos\theta}
      </div>
      <b>Direction of Resultant (&alpha; with vector A):</b><br>
      In right triangle $ONQ$:<br>
      $\tan\alpha = ${frac('QN', 'ON')} = ${frac('QN', 'OP + PN')}$<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \tan\alpha = ${frac('B\sin\theta', 'A + B\cos\theta')} \implies \alpha = \tan^{-1}\left(${frac('B\sin\theta', 'A + B\cos\theta')}\right)
      </div>
      <b>3. Special Cases:</b><br>
      &bull; <b>Case I: $\theta = 0^\circ$ (Collinear in same direction):</b><br>
      $\cos 0^\circ = 1 \implies R = \sqrt{A^2 + B^2 + 2AB} = \sqrt{(A+B)^2} = \mathbf{A + B}$ (Maximum resultant). $\tan\alpha = 0 \implies \alpha = 0^\circ$.<br>
      &bull; <b>Case II: $\theta = 180^\circ$ (Opposite directions):</b><br>
      $\cos 180^\circ = -1 \implies R = \sqrt{A^2 + B^2 - 2AB} = \sqrt{(A-B)^2} = \mathbf{|A - B|}$ (Minimum resultant). $\alpha = 0^\circ$ (along larger vector).<br>
      &bull; <b>Case III: $\theta = 90^\circ$ (Orthogonal vectors):</b><br>
      $\cos 90^\circ = 0, \sin 90^\circ = 1 \implies \mathbf{R = \sqrt{A^2 + B^2}}$ and $\tan\alpha = \mathbf{B / A}$.`
    },
    {
      q: "What is a projectile? A particle is projected with initial velocity u at an angle &theta; with the horizontal. Derive: (a) The equation of its trajectory and prove it is a parabola, (b) Time of maximum height and Total Time of Flight.",
      sol: `<b>Definition:</b> A projectile is any body thrown into space with an initial velocity, which thereafter moves under the sole influence of gravity without any propulsion engine.<br><br>
      <b>Kinematic Decomposition:</b><br>
      Initial velocity components:<br>
      &bull; Horizontal: $u_x = u \cos\theta$, Acceleration $a_x = 0$ (neglecting air resistance).<br>
      &bull; Vertical: $u_y = u \sin\theta$, Acceleration $a_y = -g$ (directed downward).<br><br>
      <b>(a) Equation of Trajectory:</b><br>
      Horizontal displacement after time $t$:<br>
      $x = u_x t + \frac{1}{2}a_x t^2 = (u \cos\theta)t \implies \mathbf{t = ${frac('x', 'u \cos\theta')}}$.<br>
      Vertical displacement after time $t$:<br>
      $y = u_y t - \frac{1}{2}gt^2 = (u \sin\theta)t - \frac{1}{2}gt^2$.<br>
      Substitute $t = ${frac('x', 'u \cos\theta')}$ into the vertical equation:<br>
      $y = (u \sin\theta)\left(${frac('x', 'u \cos\theta')}\right) - \frac{1}{2}g\left(${frac('x', 'u \cos\theta')}\right)^2$<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        y = x \tan\theta - ${frac('g', '2 u^2 \cos^2\theta')} x^2
      </div>
      This is of the standard mathematical form $y = Ax - Bx^2$ where $A = \tan\theta$ and $B = ${frac('g', '2u^2\cos^2\theta')}$ are constants. Since this is a quadratic equation in $x$ with a negative leading coefficient, <b>the trajectory of a projectile is strictly a parabola curving downward</b>.<br><br>
      <b>(b) Time of Ascent and Total Time of Flight:</b><br>
      At the peak of trajectory ($H$), the vertical component of velocity vanishes momentarily: $v_y = 0$.<br>
      Using $v_y = u_y - gt_a$:<br>
      $0 = u \sin\theta - gt_a \implies \mathbf{t_a = ${frac('u\sin\theta', 'g')}}$ (Time of Ascent).<br>
      Because gravitational acceleration is symmetrical in uniform fields, time of ascent equals time of descent ($t_a = t_d$).<br>
      Total Time of Flight $T = t_a + t_d = 2t_a$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        T = ${frac('2 u \sin\theta', 'g')}
      </div>`
    },
    {
      q: "For an oblique projectile launched at angle &theta; with speed u, derive expressions for: (a) Maximum height attained (H), (b) Horizontal Range (R). Hence prove the fundamental relation connecting Range and Maximum Height: R = 4H cot &theta;.",
      sol: `<b>(a) Maximum Height ($H$):</b><br>
      At maximum height, vertical velocity $v_y = 0$.<br>
      Using the kinematic equation $v_y^2 = u_y^2 - 2gy$ with $y = H$ and $u_y = u\sin\theta$:<br>
      $0 = (u \sin\theta)^2 - 2gH \implies 2gH = u^2 \sin^2\theta$<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        H = ${frac('u^2 \sin^2\theta', '2g')}
      </div>
      <b>(b) Horizontal Range ($R$):</b><br>
      Horizontal range is the total horizontal distance traversed during total time of flight $T = ${frac('2u\sin\theta', 'g')}$.<br>
      Since horizontal acceleration is zero ($a_x = 0$):<br>
      $R = u_x \times T = (u \cos\theta) \times \left(${frac('2u\sin\theta', 'g')}\right) = ${frac('u^2(2\sin\theta\cos\theta)', 'g')}$.<br>
      Applying the trigonometric identity $2\sin\theta\cos\theta = \sin 2\theta$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        R = ${frac('u^2 \sin 2\theta', 'g')}
      </div>
      <b>(c) Proof of $R = 4H \cot\theta$:</b><br>
      Divide the formula for $R$ by $H$:<br>
      ${frac('R', 'H')} = ${frac('u^2 (2\sin\theta\cos\theta) / g', 'u^2 \sin^2\theta / (2g)')}$<br>
      Cancel $u^2 / g$ from numerator and denominator:<br>
      ${frac('R', 'H')} = ${frac('2\sin\theta\cos\theta', '\sin^2\theta / 2')} = 4 \times ${frac('\cos\theta', '\sin\theta')} = 4 \cot\theta$.<br>
      Cross-multiplying gives:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        R = 4H \cot\theta \quad \text{or} \quad \tan\theta = ${frac('4H', 'R')}
      </div>
      This is a cornerstone relation used to compute launch angle directly from peak height and range.`
    },
    {
      q: "Prove analytically that: (a) Horizontal range of a projectile is maximum when angle of projection is 45&deg;, (b) The horizontal range is identical for two angles of projection that are complementary (&theta; and 90&deg; - &theta;), (c) The product of times of flight for these two complementary angles satisfies T_1 &times; T_2 = 2R / g.",
      sol: `<b>(a) Condition for Maximum Range:</b><br>
      Horizontal range is given by $R = ${frac('u^2 \sin 2\theta', 'g')}$.<br>
      For a given launch speed $u$ and local gravity $g$, $R$ is maximum when $\sin 2\theta$ reaches its maximum mathematical value, which is $+1$:<br>
      $\sin 2\theta = 1 \implies 2\theta = 90^\circ \implies \mathbf{\theta = 45^\circ}$.<br>
      Maximum horizontal range value:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        R_{\max} = ${frac('u^2', 'g')} \quad \text{and at this angle, } H = ${frac('R_{\max}', '4')}
      </div>
      <b>(b) Equal Range for Complementary Angles:</b><br>
      Let the projectile be fired at angle $\theta_1 = \theta$:<br>
      $R_1 = ${frac('u^2 \sin(2\theta)', 'g')}$.<br>
      Now let the projectile be fired with identical speed at complementary angle $\theta_2 = 90^\circ - \theta$:<br>
      $R_2 = ${frac('u^2 \sin[2(90^\circ - \theta)]', 'g')} = ${frac('u^2 \sin(180^\circ - 2\theta)', 'g')}$.<br>
      From trigonometry, $\sin(180^\circ - \phi) = \sin\phi$, so $\sin(180^\circ - 2\theta) = \sin 2\theta$.<br>
      Therefore: $R_2 = ${frac('u^2 \sin 2\theta', 'g')} = R_1$.<br>
      <b>Hence, the horizontal range is strictly identical for complementary angles $\theta$ and $90^\circ - \theta$ (e.g. $30^\circ$ and $60^\circ$).</b><br><br>
      <b>(c) Product of Times of Flight ($T_1 \times T_2$):</b><br>
      &bull; For angle $\theta$: $T_1 = ${frac('2u\sin\theta', 'g')}$.<br>
      &bull; For angle $90^\circ - \theta$: $T_2 = ${frac('2u\sin(90^\circ - \theta)', 'g')} = ${frac('2u\cos\theta', 'g')}$.<br>
      Multiplying $T_1$ and $T_2$:<br>
      $T_1 T_2 = \left(${frac('2u\sin\theta', 'g')}\right) \times \left(${frac('2u\cos\theta', 'g')}\right) = ${frac('2', 'g')} \times \left(${frac('u^2(2\sin\theta\cos\theta)', 'g')}\right)$.<br>
      Recognizing that $R = ${frac('u^2(2\sin\theta\cos\theta)', 'g')}$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        T_1 T_2 = ${frac('2R', 'g')}
      </div>`
    },
    {
      q: "A projectile is launched with velocity u at an angle &theta; to the horizontal. Derive expressions for: (a) Velocity vector v, speed, and angle of motion &beta; at any instant t, (b) Velocity of projectile when it is at a vertical height h above ground.",
      sol: `<b>(a) Velocity Vector at Time $t$:</b><br>
      At any elapsed time $t$, velocity components are:<br>
      &bull; Horizontal component: $v_x = u_x = u \cos\theta$ (remains strictly constant).<br>
      &bull; Vertical component: $v_y = u_y - gt = u \sin\theta - gt$.<br>
      In vector Cartesian form:<br>
      $\vec{v}(t) = v_x \hat{i} + v_y \hat{j} = (u \cos\theta)\hat{i} + (u \sin\theta - gt)\hat{j}$.<br>
      <b>Instantaneous Speed:</b><br>
      $v = |\vec{v}| = \sqrt{v_x^2 + v_y^2} = \sqrt{(u\cos\theta)^2 + (u\sin\theta - gt)^2}$<br>
      $v = \sqrt{u^2\cos^2\theta + u^2\sin^2\theta - 2u gt\sin\theta + g^2 t^2} = \mathbf{\sqrt{u^2 - 2ugt\sin\theta + g^2 t^2}}$.<br>
      <b>Direction ($\beta$ with horizontal):</b><br>
      $\tan\beta = ${frac('v_y', 'v_x')} = ${frac('u\sin\theta - gt', 'u\cos\theta')} \implies \mathbf{\beta = \tan^{-1}\left(${frac('u\sin\theta - gt', 'u\cos\theta')}\right)}$.<br><br>
      <b>(b) Velocity at Height $h$:</b><br>
      Using the third kinematic equation for vertical motion: $v_y^2 = u_y^2 - 2gh = (u\sin\theta)^2 - 2gh$.<br>
      Horizontal velocity remains: $v_x^2 = (u\cos\theta)^2$.<br>
      Total speed at height $h$ is:<br>
      $v = \sqrt{v_x^2 + v_y^2} = \sqrt{(u\cos\theta)^2 + (u\sin\theta)^2 - 2gh} = \sqrt{u^2(\cos^2\theta + \sin^2\theta) - 2gh}$.<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v = \sqrt{u^2 - 2gh}
      </div>
      <b>Physical Insight:</b> This result is completely independent of launch angle $\theta$ and directly proves conservation of mechanical energy: $\frac{1}{2}m v^2 + mgh = \frac{1}{2}m u^2$.`
    },
    {
      q: "A body is projected horizontally with a velocity u from the top of a cliff of height h. Derive: (a) Equation of its trajectory, (b) Time taken to strike the ground, (c) Horizontal distance from base of cliff (Range), (d) Resultant velocity on striking ground.",
      sol: `<b>Initial Conditions:</b><br>
      At the cliff edge (origin $O$):<br>
      &bull; Initial horizontal velocity: $u_x = u$, acceleration $a_x = 0$.<br>
      &bull; Initial vertical velocity: $u_y = 0$, acceleration $a_y = +g$ (taking downward direction as positive).<br><br>
      <b>(a) Trajectory Equation:</b><br>
      Horizontal distance after time $t$: $x = u \cdot t \implies t = ${frac('x', 'u')}$.<br>
      Vertical downward displacement: $y = \frac{1}{2}gt^2$.<br>
      Substitute $t = x/u$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        y = \left(${frac('g', '2u^2')}\right) x^2 = k x^2
      </div>
      This is the equation of a vertical parabola having vertex at origin $O$.<br><br>
      <b>(b) Time Taken to Strike Ground ($T$):</b><br>
      When the body reaches the ground, downward vertical displacement $y = h$.<br>
      $h = \frac{1}{2}g T^2 \implies T^2 = ${frac('2h', 'g')} \implies \mathbf{T = \sqrt{${frac('2h', 'g')}}}$.<br>
      Notice that this time is identical to the time taken by a body simply dropped vertically from rest from the same height.<br><br>
      <b>(c) Horizontal Range ($R$):</b><br>
      Horizontal range is the distance from base to impact point:<br>
      $R = u_x \times T = \mathbf{u \sqrt{${frac('2h', 'g')}}}$.<br><br>
      <b>(d) Velocity upon Striking Ground:</b><br>
      &bull; Horizontal velocity: $v_x = u$.<br>
      &bull; Vertical velocity: $v_y^2 = 0 + 2gh \implies v_y = \sqrt{2gh}$.<br>
      Resultant impact speed:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v = \sqrt{v_x^2 + v_y^2} = \sqrt{u^2 + 2gh}
      </div>
      Impact angle $\beta$ with the ground horizontal: $\tan\beta = ${frac('v_y', 'v_x')} = ${frac('\sqrt{2gh}', 'u')}$.`
    },
    {
      q: "Define Uniform Circular Motion. Derive the expression for Centripetal Acceleration (a_c = v&sup2; / r = &omega;&sup2; r) using vector calculus / similar triangles. Explain why centripetal force does zero work on the particle.",
      sol: `<b>1. Definition:</b> When a particle traverses a circular track of radius $r$ at constant speed $v$, its motion is called <b>Uniform Circular Motion (UCM)</b>. Although speed is constant, the direction of velocity changes continuously, creating acceleration directed radially toward the center.<br><br>
      <b>2. Derivation using Vector Geometry:</b><br>
      Let a particle move around a circle of radius $r$ centered at $O$.<br>
      At time $t$, position vector is $\vec{r}_1$ (point $P_1$) with velocity $\vec{v}_1$.<br>
      At time $t + \Delta t$, position vector is $\vec{r}_2$ (point $P_2$) with velocity $\vec{v}_2$.<br>
      Angle subtended: $\angle P_1 O P_2 = \Delta\theta$.<br>
      Position displacement: $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$.<br>
      Velocity change: $\Delta\vec{v} = \vec{v}_2 - \vec{v}_1$.<br><br>
      Construct a velocity triangle with vectors $\vec{v}_1, \vec{v}_2$ and $\Delta\vec{v}$.<br>
      Since $\vec{v}_1 \perp \vec{r}_1$ and $\vec{v}_2 \perp \vec{r}_2$, the angle between $\vec{v}_1$ and $\vec{v}_2$ is also $\Delta\theta$.<br>
      Both triangles $\Delta O P_1 P_2$ and the velocity triangle are isosceles with common vertex angle $\Delta\theta$, making them <b>geometrically similar</b>:<br>
      ${frac('|\Delta\vec{v}|', 'v')} = ${frac('|\Delta\vec{r}|', 'r')} \implies |\Delta\vec{v}| = ${frac('v', 'r')} |\Delta\vec{r}|$.<br>
      Divide both sides by elapsed time $\Delta t$ and take the limit $\Delta t \to 0$:<br>
      $\lim_{\Delta t \to 0} ${frac('|\Delta\vec{v}|', '\Delta t')} = ${frac('v', 'r')} \left(\lim_{\Delta t \to 0} ${frac('|\Delta\vec{r}|', '\Delta t')}\right)$.<br>
      By definition, instantaneous acceleration is $a_c = \lim_{\Delta t \to 0} \frac{|\Delta\vec{v}|}{\Delta t}$, and instantaneous speed is $v = \lim_{\Delta t \to 0} \frac{|\Delta\vec{r}|}{\Delta t}$.<br>
      Substituting gives:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        a_c = ${frac('v^2', 'r')}
      </div>
      Using linear-angular relation $v = r\omega$:<br>
      $a_c = ${frac('(r\omega)^2', 'r')} = \mathbf{\omega^2 r} = \mathbf{4\pi^2 \nu^2 r}$.<br>
      As $\Delta t \to 0$, vector $\Delta\vec{v}$ points perpendicular to the velocity vector, directed inwards towards center $O$.<br><br>
      <b>3. Work Done by Centripetal Force:</b><br>
      Work done is $W = \vec{F}_c \cdot \Delta\vec{r} = F_c \, \Delta r \cos\theta$.<br>
      At every instant, centripetal force $\vec{F}_c$ acts along the radius toward the center, while displacement $\Delta\vec{r}$ acts along the tangent.<br>
      Angle $\theta = 90^\circ \implies \cos 90^\circ = 0$.<br>
      <b>$W = F_c \, \Delta r \cos 90^\circ = 0$. Centripetal force performs strictly zero work.</b>`
    },
    {
      q: "Establish the mathematical relations connecting linear and angular kinematic variables: (a) Linear displacement and angular displacement (s = r&theta;), (b) Linear velocity and angular velocity (v = &omega; &times; r), (c) Linear tangential acceleration and angular acceleration (a_t = &alpha; &times; r).",
      sol: `<b>(a) Linear Displacement and Angular Displacement ($s = r\theta$):</b><br>
      By circular geometry, angle subtended in radians is defined as ratio of arc length to radius:<br>
      $\theta = ${frac('s', 'r')} \implies \mathbf{s = r\theta}$.<br>
      For an infinitesimal displacement: $ds = r \, d\theta$.<br><br>
      <b>(b) Linear Velocity and Angular Velocity ($\vec{v} = \vec{\omega}\times\vec{r}$):</b><br>
      Differentiating $s = r\theta$ with respect to time $t$ for a fixed radius $r$:<br>
      ${frac('ds', 'dt')} = r \, ${frac('d\theta', 'dt')}$.<br>
      Since linear speed $v = ds/dt$ and angular speed $\omega = d\theta/dt$:<br>
      $\mathbf{v = r\omega}$.<br>
      <b>Vector Cross Product Form:</b><br>
      Angular velocity $\vec{\omega}$ is an axial vector directed along the axis of rotation (via Right Hand Thumb Rule). The linear velocity vector $\vec{v}$ is given by:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \vec{v} = \vec{\omega} \times \vec{r}
      </div>
      Magnitude: $|\vec{v}| = \omega r \sin 90^\circ = \omega r$. Direction: Tangential, perpendicular to both $\vec{\omega}$ and $\vec{r}$.<br><br>
      <b>(c) Tangential Acceleration and Angular Acceleration ($\vec{a}_t = \vec{\alpha}\times\vec{r}$):</b><br>
      Differentiating the vector velocity expression with respect to time:<br>
      ${frac('d\vec{v}', 'dt')} = ${frac('d', 'dt')}(\vec{\omega} \times \vec{r}) = \left(${frac('d\vec{\omega}', 'dt')} \times \vec{r}\right) + \left(\vec{\omega} \times ${frac('d\vec{r}', 'dt')}\right)$.<br>
      Recognizing that $\vec{\alpha} = \frac{d\vec{\omega}}{dt}$ (angular acceleration) and $\frac{d\vec{r}}{dt} = \vec{v}$:<br>
      $\vec{a}_{\text{net}} = (\vec{\alpha} \times \vec{r}) + (\vec{\omega} \times \vec{v})$.<br>
      &bull; The first term $\vec{a}_t = \vec{\alpha} \times \vec{r}$ acts tangentially and changes speed magnitude: $\mathbf{a_t = r\alpha}$.<br>
      &bull; The second term $\vec{a}_c = \vec{\omega} \times \vec{v}$ acts centripetally toward center and changes direction: $\mathbf{a_c = \omega v = \omega^2 r = v^2/r}$.`
    },
    {
      q: "Explain relative velocity in two dimensions. Formulate the Rain-Man Problem: A person walks with velocity v_m while rain falls vertically with velocity v_r. Derive the magnitude and angle at which an umbrella must be tilted. Analyze what happens if wind starts blowing.",
      sol: `<b>1. Conceptual Foundation:</b><br>
      Relative velocity of an object $A$ observed from the frame of reference of object $B$ is defined as:<br>
      $\vec{v}_{AB} = \vec{v}_A - \vec{v}_B = \vec{v}_A + (-\vec{v}_B)$.<br>
      To find the velocity of $A$ relative to $B$, superimpose a velocity equal and opposite to $B$'s velocity onto both objects, bringing observer $B$ to virtual rest.<br><br>
      <b>2. Rain-Man Problem Formulation:</b><br>
      Let vertical downward direction be $-\hat{j}$ and horizontal forward direction be $+\hat{i}$.<br>
      &bull; Velocity of rain: $\vec{v}_r = -v_r \hat{j}$.<br>
      &bull; Velocity of moving person: $\vec{v}_m = v_m \hat{i}$.<br>
      The velocity of rain relative to the person is:<br>
      $\vec{v}_{rm} = \vec{v}_r - \vec{v}_m = -v_r \hat{j} - v_m \hat{i} = -v_m \hat{i} - v_r \hat{j}$.<br><br>
      <b>Magnitude of Relative Velocity:</b><br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        v_{rm} = \sqrt{v_r^2 + v_m^2}
      </div>
      <b>Angle of Umbrella Tilt (&theta; with vertical):</b><br>
      To protect against rain falling along $\vec{v}_{rm}$, the umbrella must be held in the exact opposite direction ($-\vec{v}_{rm} = v_m \hat{i} + v_r \hat{j}$), tilted forward toward the direction of motion at an angle $\theta$ with the vertical:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        \tan\theta = ${frac('v_m', 'v_r')} \implies \theta = \tan^{-1}\left(${frac('v_m', 'v_r')}\right)
      </div>
      <b>3. Effect of Horizontal Wind ($\vec{v}_w = v_w \hat{i}$):</b><br>
      If wind blows horizontally, true velocity of rain becomes $\vec{v}_r = v_w \hat{i} - v_r \hat{j}$.<br>
      Relative velocity to moving person:<br>
      $\vec{v}_{rm} = \vec{v}_r - \vec{v}_m = (v_w - v_m)\hat{i} - v_r \hat{j}$.<br>
      Umbrella angle with vertical:<br>
      $\tan\theta' = ${frac('|v_w - v_m|', 'v_r')}$.<br>
      If $v_m = v_w$, the relative horizontal velocity vanishes: $\vec{v}_{rm} = -v_r \hat{j}$, meaning the person feels the rain falling purely vertically and must hold the umbrella straight upright!`
    },
    {
      q: "Analyze the River-Boat Crossing Problem in two dimensions: (a) Derive the condition, steering angle, and time taken to cross the river along the shortest path (directly across, zero drift), (b) Derive the condition and time taken to cross in minimum time, and calculate the resulting downstream drift.",
      sol: `<b>Setup:</b><br>
      Let river width be $d$, river flow velocity be $\vec{v}_r = v_r \hat{i}$ (downstream along x-axis).<br>
      Let speed of boat in still water be $v_b$. Boat's engine directs it at an angle $\theta$ to the vertical y-axis (upstream direction).<br><br>
      <b>(a) Shortest Path Crossing (Zero Drift, $x = 0$):</b><br>
      To land directly opposite on the bank (along y-axis), the resultant horizontal velocity must be zero:<br>
      $v_{net, x} = v_r - v_b \sin\theta = 0 \implies \mathbf{\sin\theta = ${frac('v_r', 'v_b')}}$.<br>
      &bull; <b>Feasibility Condition:</b> Since $\sin\theta \le 1$, zero drift is physically possible only if <b>$v_b > v_r$</b> (boat speed exceeds river speed).<br>
      &bull; Resultant crossing velocity across the river:<br>
      $v_{net, y} = v_b \cos\theta = v_b \sqrt{1 - \sin^2\theta} = \sqrt{v_b^2 - v_r^2}$.<br>
      &bull; Time taken for shortest path:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        t_{\text{shortest path}} = ${frac('d', '\sqrt{v_b^2 - v_r^2}')}
      </div>
      <b>(b) Minimum Time Crossing:</b><br>
      Time to cross depends solely on vertical velocity component perpendicular to the bank: $t = ${frac('d', 'v_b \cos\theta')}$.<br>
      Time $t$ is minimum when the denominator is maximized, which occurs when $\cos\theta = 1 \implies \mathbf{\theta = 0^\circ}$.<br>
      The boat must steer <b>strictly perpendicular to the river bank</b>.<br>
      &bull; Minimum crossing time:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        t_{\min} = ${frac('d', 'v_b')}
      </div>
      &bull; Resulting downstream drift ($x$):<br>
      While crossing, river current pushes the boat horizontally:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        \text{Drift } x = v_r \times t_{\min} = v_r \left(${frac('d', 'v_b')}\right) = d \left(${frac('v_r', 'v_b')}\right)
      </div>`
    },
    {
      q: "State the definition of the Scalar (Dot) Product of two vectors. Enumerate its six fundamental mathematical properties, explain its geometrical interpretation as an orthogonal projection, and derive the formula for work done by a variable or constant force vector.",
      sol: `<b>1. Definition:</b><br>
      The scalar or dot product of two vectors $\vec{A}$ and $\vec{B}$ inclined at an angle $\theta$ ($0 \le \theta \le \pi$) is defined as the product of their magnitudes and the cosine of the included angle:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        \vec{A} \cdot \vec{B} = A B \cos\theta
      </div>
      The result is a pure scalar quantity.<br><br>
      <b>2. Six Fundamental Properties:</b><br>
      1. <b>Commutative Property:</b> $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$ (since $\cos\theta = \cos(-\theta)$).<br>
      2. <b>Distributive Property:</b> $\vec{A} \cdot (\vec{B} + \vec{C}) = \vec{A} \cdot \vec{B} + \vec{A} \cdot \vec{C}$.<br>
      3. <b>Self Dot Product:</b> $\vec{A} \cdot \vec{A} = A \cdot A \cos 0^\circ = A^2 \implies A = \sqrt{\vec{A} \cdot \vec{A}}$.<br>
      4. <b>Orthogonal Vectors ($\theta = 90^\circ$):</b> $\vec{A} \cdot \vec{B} = A B \cos 90^\circ = 0$. Mutual orthogonality test: $\vec{A} \cdot \vec{B} = 0$.<br>
      5. <b>Unit Vector Orthogonality:</b><br>
      &bull; $\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1$<br>
      &bull; $\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0$.<br>
      6. <b>Cartesian Component Formula:</b> For $\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$ and $\vec{B} = B_x\hat{i} + B_y\hat{j} + B_z\hat{k}$:<br>
      $\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z$.<br><br>
      <b>3. Geometrical Interpretation:</b><br>
      $\vec{A} \cdot \vec{B} = A(B\cos\theta) = (\text{Magnitude of } \vec{A}) \times (\text{Scalar projection of } \vec{B} \text{ onto } \vec{A})$.<br>
      Projection of $\vec{B}$ on $\vec{A} = ${frac('\vec{A} \cdot \vec{B}', 'A')}$.<br><br>
      <b>4. Application to Work Done:</b><br>
      Mechanical work done $W$ by a constant force vector $\vec{F}$ causing displacement $\Delta\vec{r} = \Delta x\hat{i} + \Delta y\hat{j} + \Delta z\hat{k}$ is:<br>
      $W = \vec{F} \cdot \Delta\vec{r} = F_x \Delta x + F_y \Delta y + F_z \Delta z$.`
    },
    {
      q: "State the definition of the Vector (Cross) Product of two vectors. Enumerate its six core properties, explain the Right Hand Thumb Rule, prove that the area of a parallelogram equals |A &times; B|, and express torque &tau; = r &times; F in 3x3 determinant form.",
      sol: `<b>1. Definition:</b><br>
      The vector or cross product of two vectors $\vec{A}$ and $\vec{B}$ inclined at angle $\theta$ is a vector $\vec{C}$ defined as:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        \vec{A} \times \vec{B} = (A B \sin\theta) \hat{n}
      </div>
      where $\hat{n}$ is a unit vector perpendicular to the plane containing $\vec{A}$ and $\vec{B}$, oriented according to the Right-Hand Thumb Rule.<br><br>
      <b>2. Six Core Properties:</b><br>
      1. <b>Anti-Commutative:</b> $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$.<br>
      2. <b>Distributive:</b> $\vec{A} \times (\vec{B} + \vec{C}) = (\vec{A} \times \vec{B}) + (\vec{A} \times \vec{C})$.<br>
      3. <b>Collinear Vectors ($\theta = 0^\circ$ or $180^\circ$):</b> $\vec{A} \times \vec{B} = \vec{0}$ (null vector). Collinearity test: $\vec{A} \times \vec{B} = 0$.<br>
      4. <b>Self Cross Product:</b> $\vec{A} \times \vec{A} = \vec{0}$.<br>
      5. <b>Unit Vector Orthogonal Relations:</b><br>
      &bull; $\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = \vec{0}$<br>
      &bull; Cyclic: $\hat{i} \times \hat{j} = \hat{k}$, $\hat{j} \times \hat{k} = \hat{i}$, $\hat{k} \times \hat{i} = \hat{j}$<br>
      &bull; Anti-cyclic: $\hat{j} \times \hat{i} = -\hat{k}$, $\hat{k} \times \hat{j} = -\hat{i}$, $\hat{i} \times \hat{k} = -\hat{j}$.<br>
      6. <b>Determinant Form:</b><br>
      $\vec{A} \times \vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix} = \hat{i}(A_y B_z - A_z B_y) - \hat{j}(A_x B_z - A_z B_x) + \hat{k}(A_x B_y - A_y B_x)$.<br><br>
      <b>3. Area of Parallelogram:</b><br>
      Consider parallelogram $OPQS$ spanned by adjacent vector sides $\vec{OP} = \vec{A}$ and $\vec{OS} = \vec{B}$ with angle $\theta$.<br>
      $\text{Area} = \text{base} \times \text{height} = OP \times (OS \sin\theta) = A B \sin\theta = |\vec{A} \times \vec{B}|$.<br>
      Similarly, Area of $\Delta OPQ = \frac{1}{2} |\vec{A} \times \vec{B}|$.<br><br>
      <b>4. Torque Application:</b><br>
      Torque $\vec{\tau} = \vec{r} \times \vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ x & y & z \\ F_x & F_y & F_z \end{vmatrix}$.`
    },
    {
      q: "Explain non-uniform circular motion in detail. Distinguish between tangential acceleration (a_t) and centripetal acceleration (a_c). Derive the expression for net acceleration vector a, its magnitude a = &radic;(a_t&sup2; + a_c&sup2;), and the angle &phi; it makes with the radius vector.",
      sol: `<b>1. Conceptual Foundation:</b><br>
      In <b>Non-Uniform Circular Motion</b>, a particle moves along a circular path of radius $r$ with variable speed $v(t)$. Because both the speed (magnitude) and direction of the velocity vector change simultaneously with time, the motion involves two distinct, mutually orthogonal components of acceleration.<br><br>
      <b>2. Two Acceleration Components:</b><br>
      &bull; <b>Centripetal (Radial) Acceleration ($a_c$):</b> Acts radially inward along the radius vector toward the center of curvature. It is responsible solely for changing the spatial direction of the velocity vector:<br>
      $a_c = ${frac('v^2', 'r')} = \omega^2 r$.<br>
      &bull; <b>Tangential Acceleration ($a_t$):</b> Acts along the tangent to the circular path (collinear with instantaneous velocity). It is responsible solely for changing the scalar speed of the particle:<br>
      $a_t = ${frac('dv', 'dt')} = r \alpha \quad \text{where } \alpha = ${frac('d\omega', 'dt')}$.<br><br>
      <b>3. Net Acceleration Vector:</b><br>
      In polar coordinates, net acceleration vector $\vec{a}$ is the vector sum of radial and tangential components:<br>
      $\vec{a} = \vec{a}_c + \vec{a}_t = -a_c \hat{r} + a_t \hat{\theta}$.<br>
      Since radial and tangential directions are strictly perpendicular ($\angle = 90^\circ$), applying Pythagoras theorem:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        a = |\vec{a}| = \sqrt{a_c^2 + a_t^2} = \sqrt{\left(${frac('v^2', 'r')}\right)^2 + \left(${frac('dv', 'dt')}\right)^2} = \sqrt{(\omega^2 r)^2 + (r\alpha)^2}
      </div>
      <b>4. Direction of Net Acceleration:</b><br>
      Let $\phi$ be the angle that the net acceleration vector $\vec{a}$ makes with the inward radius vector:<br>
      <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 16px; font-weight: bold;">
        \tan\phi = ${frac('a_t', 'a_c')} = ${frac('r\alpha', 'v^2 / r')} = ${frac('r^2 \alpha', 'v^2')} \implies \phi = \tan^{-1}\left(${frac('a_t', 'a_c')}\right)
      </div>
      &bull; If speed is constant ($dv/dt = 0$), $a_t = 0 \implies \phi = 0^\circ$ (pure UCM, net acceleration is purely radial).<br>
      &bull; If radius $r \to \infty$ (straight line), $a_c = 0 \implies \phi = 90^\circ$ (rectilinear acceleration).`
    },
    {
      q: "Discuss Velocity-Time (v-t) graphs in depth: Show how slope represents acceleration and area represents displacement. Sketch and analytically analyze: (a) A ball thrown vertically upwards and caught upon return, (b) A ball dropped from height h undergoing elastic bounce on the floor, (c) Motion with constant positive acceleration vs increasing acceleration.",
      sol: `<b>1. Mathematical Principles of the $v-t$ Graph:</b><br>
      &bull; <b>Slope:</b> By definition, $a = ${frac('dv', 'dt')}$. Hence, the slope of the tangent at any point on the $v-t$ curve gives the instantaneous acceleration.<br>
      &bull; <b>Area under Curve:</b> Since $ds = v \, dt$, total displacement is $s = \int v \, dt$. The definite integral represents the geometric area under the $v-t$ graph bounded by the time axis. Area above the time axis represents positive displacement; area below represents negative displacement.<br><br>
      <b>2. Physical Motion Profiles:</b><br>
      <b>(a) Ball Thrown Vertically Upward & Caught:</b><br>
      Taking upward as positive:<br>
      &bull; At $t = 0$, $v = +u$.<br>
      &bull; Throughout the flight, acceleration is constant downward: $a = -g = -9.8\text{ m/s}^2$.<br>
      &bull; The $v-t$ graph is a <b>straight line with constant negative slope ($-g$)</b> crossing the time axis at peak time $t = u/g$ ($v = 0$), and reaching $v = -u$ at total time $T = 2u/g$.<br>
      &bull; Area of positive triangle (ascent) = $+H$; Area of negative triangle (descent) = $-H$. Net displacement = $H - H = 0$. Total distance = $H + H = 2H$.<br><br>
      <b>(b) Ball Dropped and Undergoing Elastic Bounce:</b><br>
      Taking downward as positive:<br>
      &bull; Starts from rest ($v = 0$ at $t = 0$), accelerates downward with slope $+g$ until hitting floor at $t_1 = \sqrt{2h/g}$ with velocity $v_1 = +\sqrt{2gh}$.<br>
      &bull; At impact, velocity reverses instantaneously from $+\sqrt{2gh}$ to $-\sqrt{2gh}$ (represented by a vertical discontinuity line).<br>
      &bull; Moves upward under gravity with slope $+g$ from $v = -\sqrt{2gh}$ to $v = 0$ at peak height.<br><br>
      <b>(c) Constant vs Increasing Acceleration:</b><br>
      &bull; <b>Constant $a$:</b> Straight line with uniform slope $\tan\theta = a$.<br>
      &bull; <b>Increasing $a$ ($da/dt > 0$):</b> Convex curve bending upwards with continuously steepening slope.`
    },
    {
      q: "A car accelerates from rest at a constant rate &alpha; for time t_1, and then decelerates at a constant rate &beta; to come to rest in total elapsed time T. Derive expressions for: (a) Maximum velocity attained (v_max), (b) Total distance traversed (S) in terms of &alpha;, &beta;, and T.",
      sol: `<b>1. Breakdown into Two Motion Phases:</b><br>
      Let total time be $T = t_1 + t_2$, where $t_1$ is acceleration duration and $t_2$ is retardation duration.<br>
      &bull; <b>Phase 1 (Acceleration from rest):</b> Initial velocity $u = 0$, acceleration $= \alpha$.<br>
      Maximum velocity reached at $t = t_1$ is:<br>
      $v_{\max} = 0 + \alpha t_1 \implies \mathbf{t_1 = ${frac('v_{\max}', '\alpha')}}$.<br>
      &bull; <b>Phase 2 (Deceleration to rest):</b> Initial velocity $= v_{\max}$, final velocity $= 0$, deceleration $= \beta$.<br>
      $0 = v_{\max} - \beta t_2 \implies \mathbf{t_2 = ${frac('v_{\max}', '\beta')}}$.<br><br>
      <b>(a) Maximum Velocity ($v_{\max}$):</b><br>
      Summing the two time intervals:<br>
      $T = t_1 + t_2 = ${frac('v_{\max}', '\alpha')} + ${frac('v_{\max}', '\beta')} = v_{\max} \left(${frac('\alpha + \beta', '\alpha \beta')}\right)$.<br>
      Solving for $v_{\max}$:<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        v_{\max} = \left(${frac('\alpha \beta', '\alpha + \beta')}\right) T
      </div>
      <b>(b) Total Distance Traversed ($S$):</b><br>
      On the velocity-time graph, this motion forms a triangle with base equal to total time $T$ and height equal to $v_{\max}$.<br>
      Total displacement is the area of this triangle:<br>
      $S = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times T \times v_{\max}$.<br>
      Substitute the expression for $v_{\max}$:<br>
      $S = \frac{1}{2} T \times \left[ \left(${frac('\alpha \beta', '\alpha + \beta')}\right) T \right]$<br>
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        S = \frac{1}{2} \left(${frac('\alpha \beta', '\alpha + \beta')}\right) T^2
      </div>
      This elegant result demonstrates how two distinct kinematic phases collapse into a single harmonic-mean acceleration form.`
    },
    {
      q: "Two particles are projected simultaneously from two different points in a vertical plane. Derive the condition for their mid-air collision. Prove analytically that the trajectory of one projectile as viewed from the other is a straight line.",
      sol: `<b>1. Proof that Relative Trajectory is a Straight Line:</b><br>
      Let particle 1 be launched from origin $(0,0)$ with initial velocity $\vec{u}_1 = u_{1x}\hat{i} + u_{1y}\hat{j}$.<br>
      Position vector of particle 1 at time $t$ is:<br>
      $\vec{r}_1(t) = (u_{1x} t)\hat{i} + \left(u_{1y} t - \frac{1}{2}gt^2\right)\hat{j}$.<br>
      Let particle 2 be launched from point $(x_0, y_0)$ with initial velocity $\vec{u}_2 = u_{2x}\hat{i} + u_{2y}\hat{j}$.<br>
      Position vector of particle 2 at time $t$ is:<br>
      $\vec{r}_2(t) = (x_0 + u_{2x} t)\hat{i} + \left(y_0 + u_{2y} t - \frac{1}{2}gt^2\right)\hat{j}$.<br><br>
      Relative position vector of particle 1 with respect to particle 2 is:<br>
      $\vec{r}_{12}(t) = \vec{r}_1(t) - \vec{r}_2(t) = \left[(u_{1x} - u_{2x})t - x_0\right]\hat{i} + \left[(u_{1y} - u_{2y})t - y_0\right]\hat{j}$.<br>
      Notice that the non-linear $-\frac{1}{2}gt^2$ gravitational term cancels out completely because both particles experience identical downward acceleration $\vec{g}$!<br>
      Relative acceleration is identically zero: $\vec{a}_{12} = \vec{g} - \vec{g} = \vec{0}$.<br>
      The coordinates of relative position satisfy:<br>
      $x_{12} = (u_{1x} - u_{2x})t - x_0 \implies t = ${frac('x_{12} + x_0', 'u_{1x} - u_{2x}')}$.<br>
      Substituting $t$ into $y_{12}$ yields a linear equation of the form $y_{12} = m x_{12} + c$.<br>
      <b>Hence, the path of one projectile as observed by another projectile is strictly a straight line.</b><br><br>
      <b>2. Condition for Mid-Air Collision:</b><br>
      For collision to occur at time $t_c$, both particles must occupy the exact same spatial location: $\vec{r}_1(t_c) = \vec{r}_2(t_c)$, which implies $\vec{r}_{12}(t_c) = \vec{0}$.<br>
      This requires the relative velocity vector $\vec{u}_{12} = \vec{u}_1 - \vec{u}_2$ to be directed straight along the line joining their initial launch positions: $\vec{r}_2(0) - \vec{r}_1(0)$.`
    },
    {
      q: "Master Synthesis of Unit II: Kinematics (09 Marks). Provide a comprehensive, rigorous conceptual review mapping 1D rectilinear mechanics, calculus operators, 2D vector kinematics, projectile motion invariants, and circular acceleration constraints for CBSE Board Examinations.",
      sol: `<b>1. Comprehensive Conceptual Map of Kinematics:</b><br>
      Unit II: Kinematics (09 Marks) describes physical motion geometrically without reference to the forces causing it.<br><br>
      <b>2. Dimensional & Operational Matrix:</b><br>
      &bull; <b>Calculus Operators:</b><br>
      $v = ${frac('dx', 'dt')} \quad \Longleftrightarrow \quad x = \int v \, dt$<br>
      $a = ${frac('dv', 'dt')} = v \, ${frac('dv', 'dx')} = ${frac('d^2x', 'dt^2')} \quad \Longleftrightarrow \quad v = \int a \, dt$.<br>
      &bull; <b>Uniformly Accelerated Rectilinear Motion ($a = \text{const}$):</b><br>
      1. $v = u + at$<br>
      2. $s = ut + \frac{1}{2}at^2$<br>
      3. $v^2 - u^2 = 2as$<br>
      4. $s_n = u + \frac{a}{2}(2n - 1)$.<br><br>
      <b>3. Vector Algebra in 2D Plane:</b><br>
      &bull; Resultant: $R = \sqrt{A^2 + B^2 + 2AB\cos\theta}$, $\tan\alpha = ${frac('B\sin\theta', 'A + B\cos\theta')}$.<br>
      &bull; Dot Product: $\vec{A} \cdot \vec{B} = AB\cos\theta = A_x B_x + A_y B_y + A_z B_z$. ($W = \vec{F} \cdot \Delta\vec{r}$).<br>
      &bull; Cross Product: $\vec{A} \times \vec{B} = (AB\sin\theta)\hat{n} = \begin{vmatrix}\hat{i}&\hat{j}&\hat{k}\\A_x&A_y&A_z\\B_x&B_y&B_z\end{vmatrix}$. ($\vec{\tau} = \vec{r} \times \vec{F}$).<br><br>
      <b>4. Projectile Motion Core Invariants:</b><br>
      &bull; Trajectory: $y = x\tan\theta - ${frac('g', '2u^2\cos^2\theta')} x^2$ (Parabolic).<br>
      &bull; Time of Flight: $T = ${frac('2u\sin\theta', 'g')}$.<br>
      &bull; Maximum Height: $H = ${frac('u^2\sin^2\theta', '2g')}$.<br>
      &bull; Horizontal Range: $R = ${frac('u^2\sin 2\theta', 'g')}$; $R_{\max} = ${frac('u^2', 'g')}$ at $\theta = 45^\circ$.<br>
      &bull; Master Relation: $R = 4H \cot\theta \implies \tan\theta = ${frac('4H', 'R')}$.<br>
      &bull; Invariant: Horizontal velocity $v_x = u\cos\theta$ is conserved throughout flight.<br><br>
      <b>5. Circular Motion Dynamics:</b><br>
      &bull; Angular-Linear: $s = r\theta$, $v = r\omega$, $a_t = r\alpha$.<br>
      &bull; Centripetal Acceleration: $a_c = ${frac('v^2', 'r')} = \omega^2 r = 4\pi^2\nu^2 r$.<br>
      &bull; Non-Uniform Circular: Net $a = \sqrt{a_c^2 + a_t^2}$, $\tan\phi = a_t / a_c$.<br><br>
      <b>6. Top 5 Board Examination Trap Alerts:</b><br>
      1. Never apply $v = u + at$ when acceleration varies with time or position (must integrate!).<br>
      2. At the peak of projectile flight, acceleration is NOT zero; it is strictly $g$ downward.<br>
      3. Centripetal force performs ZERO work because $\vec{F}_c \perp \vec{v}$ at every instant.<br>
      4. A body can have zero velocity with non-zero acceleration (e.g. ball at highest point of vertical toss).<br>
      5. Caret symbols ($^$) are strictly forbidden in final presentation; standard superscripts must be used.`
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 81}: ${item.q}</h3>
    <div style="background: rgba(142, 45, 226, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Complete Step-by-Step Derivation & Theoretical Proof (5 Marks):</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getLaQuestions };
