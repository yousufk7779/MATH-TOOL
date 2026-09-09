const { themeColor, frac } = require('./c11_phy_4_helpers');

function getSaQuestions() {
  const qList = [
    {
      q: "A force F = (3 î + 4 ĵ - 5 k̂) N acts on a particle and produces a displacement s = (5 î + 4 ĵ + 3 k̂) m. Calculate: (a) Work done by the force, (b) Angle between force and displacement vectors.",
      sol: "<b>(a) Work Done:</b> W = F &bull; s = (3)(5) + (4)(4) + (-5)(3) = 15 + 16 - 15 = <b>16 Joules</b>.<br><b>(b) Angle &theta;:</b><br>|F| = &radic;[3<sup>2</sup> + 4<sup>2</sup> + (-5)<sup>2</sup>] = &radic;[9 + 16 + 25] = &radic;50 = 5&radic;2 N.<br>|s| = &radic;[5<sup>2</sup> + 4<sup>2</sup> + 3<sup>2</sup>] = &radic;[25 + 16 + 9] = &radic;50 = 5&radic;2 m.<br>cos &theta; = " + frac('W', '|F| |s|') + " = " + frac('16', '(5&radic;2)(5&radic;2)') + " = " + frac('16', '50') + " = 0.32.<br><b>&theta; = cos<sup>-1</sup>(0.32) &approx; 71.34&deg;</b>."
    },
    {
      q: "A position-dependent variable force F(x) = (3 x² + 2 x - 7) N acts on a 2 kg body moving along the x-axis. Calculate the work done in displacing the body from x = 0 to x = 5 meters.",
      sol: "W = &int;<sub>0</sub><sup>5</sup> F(x) dx = &int;<sub>0</sub><sup>5</sup> (3 x<sup>2</sup> + 2 x - 7) dx = [x<sup>3</sup> + x<sup>2</sup> - 7x]<sub>0</sub><sup>5</sup>.<br>At x = 5: W = (5)<sup>3</sup> + (5)<sup>2</sup> - 7(5) = 125 + 25 - 35 = <b>115 Joules</b>.<br>At x = 0: W = 0.<br><b>Total Work Done = 115 Joules</b>."
    },
    {
      q: "A ball of mass 0.5 kg slows down from an initial speed of 20 m/s to 10 m/s due to air resistance. Calculate the total work done by the resistive force using the Work-Energy Theorem.",
      sol: "m = 0.5 kg, v<sub>i</sub> = 20 m/s, v<sub>f</sub> = 10 m/s.<br>Initial Kinetic Energy: K<sub>i</sub> = &frac12; m v<sub>i</sub><sup>2</sup> = &frac12;(0.5)(20)<sup>2</sup> = 0.25 &times; 400 = <b>100 J</b>.<br>Final Kinetic Energy: K<sub>f</sub> = &frac12; m v<sub>f</sub><sup>2</sup> = &frac12;(0.5)(10)<sup>2</sup> = 0.25 &times; 100 = <b>25 J</b>.<br>By Work-Energy Theorem: W = &Delta;K = K<sub>f</sub> - K<sub>i</sub> = 25 - 100 = <b>-75 Joules</b>.<br>The negative sign indicates work was done against motion by resistive drag."
    },
    {
      q: "A bullet of mass 20 grams moving horizontally at 250 m/s strikes a wooden target and penetrates a depth of 12.5 cm before halting. Calculate the average retarding force exerted by the wood.",
      sol: "m = 20 g = 0.02 kg, u = 250 m/s, v = 0, s = 12.5 cm = 0.125 m.<br>Initial Kinetic Energy: K<sub>i</sub> = &frac12; m u<sup>2</sup> = &frac12;(0.02)(250)<sup>2</sup> = 0.01 &times; 62500 = <b>625 Joules</b>.<br>Final Kinetic Energy: K<sub>f</sub> = 0.<br>By Work-Energy Theorem: W = -f s = &Delta;K = -625 J.<br>f &times; 0.125 = 625 &rArr; f = 625 / 0.125 = <b>5000 Newtons (5 kN)</b>."
    },
    {
      q: "An electric water pump lifts 3600 kg of water per minute from an underground borehole 20 meters deep. Calculate the power developed by the pump in kW and Horsepower (g = 9.8 m/s²).",
      sol: "Mass m = 3600 kg, h = 20 m, t = 1 minute = 60 seconds, g = 9.8 m/s².<br>Work done: W = m g h = 3600 &times; 9.8 &times; 20 = <b>705,600 Joules</b>.<br>Power in Watts: P = W / t = 705600 / 60 = <b>11,760 Watts = 11.76 kW</b>.<br>Power in Horsepower: P = 11760 / 746 &approx; <b>15.76 hp</b>."
    },
    {
      q: "A car of mass 1000 kg accelerates uniformly from rest to a speed of 72 km/h in 10 seconds along a horizontal road. Calculate: (a) Average power, (b) Instantaneous power at t = 10 s.",
      sol: "m = 1000 kg, u = 0, v = 72 km/h = 20 m/s, t = 10 s.<br>Acceleration: a = (20 - 0) / 10 = <b>2 m s<sup>-2</sup></b>.<br>Force: F = m a = 1000 &times; 2 = <b>2000 N</b>.<br><b>(a) Average Power:</b> Total work W = &Delta;K = &frac12;(1000)(20)<sup>2</sup> = 200,000 J.<br>P<sub>avg</sub> = W / t = 200000 / 10 = <b>20,000 W = 20 kW</b>.<br><b>(b) Instantaneous Power at t = 10 s:</b> P = F &times; v = 2000 N &times; 20 m/s = <b>40,000 W = 40 kW</b>.<br>(Notice that P<sub>inst</sub> at final speed is exactly twice P<sub>avg</sub>)."
    },
    {
      q: "State and prove the Work-Energy Theorem for a constant force acting in one dimension.",
      sol: "<b>Statement:</b> The net work done by an applied force on a body equals the change in its kinetic energy.<br><b>Proof:</b> Let a constant force F act on mass m, changing velocity from u to v over displacement s.<br>By definition: W = F &times; s = (m a) s.<br>From kinematics: v<sup>2</sup> = u<sup>2</sup> + 2 a s &rArr; a s = " + frac('v<sup>2</sup> - u<sup>2</sup>', '2') + ".<br>Substituting into work formula:<br>W = m(a s) = m [" + frac('v<sup>2</sup> - u<sup>2</sup>', '2') + "] = &frac12; m v<sup>2</sup> - &frac12; m u<sup>2</sup> = <b>K<sub>f</sub> - K<sub>i</sub> = &Delta;K</b>."
    },
    {
      q: "If the kinetic energy of an object is increased by 300%, calculate the percentage increase in its linear momentum.",
      sol: "Let initial kinetic energy be K<sub>1</sub> and initial momentum be p<sub>1</sub> = &radic;(2m K<sub>1</sub>).<br>New kinetic energy: K<sub>2</sub> = K<sub>1</sub> + 300% of K<sub>1</sub> = K<sub>1</sub> + 3K<sub>1</sub> = <b>4 K<sub>1</sub></b>.<br>New momentum: p<sub>2</sub> = &radic;(2m K<sub>2</sub>) = &radic;(2m &times; 4K<sub>1</sub>) = 2 &radic;(2m K<sub>1</sub>) = <b>2 p<sub>1</sub></b>.<br>Fractional increase: (p<sub>2</sub> - p<sub>1</sub>) / p<sub>1</sub> = (2p<sub>1</sub> - p<sub>1</sub>) / p<sub>1</sub> = 1.<br><b>Percentage Increase = 100%</b> (momentum doubles)."
    },
    {
      q: "If the linear momentum of a moving body is increased by 50%, calculate the percentage increase in its kinetic energy.",
      sol: "Let initial momentum be p<sub>1</sub>, so K<sub>1</sub> = p<sub>1</sub><sup>2</sup> / (2m).<br>New momentum: p<sub>2</sub> = p<sub>1</sub> + 0.5 p<sub>1</sub> = <b>1.5 p<sub>1</sub></b>.<br>New kinetic energy: K<sub>2</sub> = p<sub>2</sub><sup>2</sup> / (2m) = (1.5 p<sub>1</sub>)<sup>2</sup> / (2m) = 2.25 [p<sub>1</sub><sup>2</sup> / (2m)] = <b>2.25 K<sub>1</sub></b>.<br>Percentage increase = " + frac('K<sub>2</sub> - K<sub>1</sub>', 'K<sub>1</sub>') + " &times; 100% = " + frac('2.25 K<sub>1</sub> - K<sub>1</sub>', 'K<sub>1</sub>') + " &times; 100% = 1.25 &times; 100% = <b>125%</b>."
    },
    {
      q: "Derive the fundamental relation connecting a one-dimensional conservative force F(x) and its potential energy function U(x): F(x) = -dU/dx.",
      sol: "By definition, the change in potential energy &Delta;U in an infinitesimal displacement dx equals the negative of work done by the conservative force:<br>dU = -dW<sub>cons</sub> = -[F(x) dx].<br>Dividing both sides by dx:<br><b>F(x) = -" + frac('dU', 'dx') + "</b>.<br><b>Physical Significance:</b> The negative sign confirms that conservative forces always act in the direction of decreasing potential energy (spontaneous tendency toward lowest energy state)."
    },
    {
      q: "The potential energy of a particle moving along the x-axis is given by U(x) = (2 x⁴ - 5 x² + 6) Joules. Find the force acting on the particle at x = 2 meters.",
      sol: "Using F(x) = -dU/dx:<br>dU/dx = " + frac('d', 'dx') + "(2x<sup>4</sup> - 5x<sup>2</sup> + 6) = 8x<sup>3</sup> - 10x.<br>F(x) = -(8x<sup>3</sup> - 10x) = -8x<sup>3</sup> + 10x.<br>At x = 2 m:<br>F(2) = -8(2)<sup>3</sup> + 10(2) = -8(8) + 20 = -64 + 20 = <b>-44 Newtons</b>.<br>The negative sign indicates the force acts in the negative x-direction."
    },
    {
      q: "A spring has a spring constant k = 500 N/m. Calculate the work required to stretch the spring from an elongation of 2 cm to 6 cm from its unstrained length.",
      sol: "Given: k = 500 N/m, x<sub>1</sub> = 2 cm = 0.02 m, x<sub>2</sub> = 6 cm = 0.06 m.<br>Work done: W = &frac12; k (x<sub>2</sub><sup>2</sup> - x<sub>1</sub><sup>2</sup>) = &frac12;(500) [(0.06)<sup>2</sup> - (0.02)<sup>2</sup>]<br>W = 250 [0.0036 - 0.0004] = 250 &times; 0.0032 = <b>0.80 Joules</b>."
    },
    {
      q: "Prove analytically that the elastic restoring force of an ideal spring is a Conservative Force.",
      sol: "Let a spring be stretched from x = 0 to elongation +x and then allowed to return back to x = 0.<br>&bull; Work during expansion (0 to x): W<sub>1</sub> = &int;<sub>0</sub><sup>x</sup> (-kx') dx' = -&frac12; k x<sup>2</sup>.<br>&bull; Work during contraction (x to 0): W<sub>2</sub> = &int;<sub>x</sub><sup>0</sup> (-kx') dx' = [-&frac12; k x'<sup>2</sup>]<sub>x</sub><sup>0</sup> = 0 - (-&frac12; k x<sup>2</sup>) = +&frac12; k x<sup>2</sup>.<br>Total work done in the closed round trip:<br>W<sub>net</sub> = W<sub>1</sub> + W<sub>2</sub> = -&frac12; k x<sup>2</sup> + &frac12; k x<sup>2</sup> = <b>0</b>.<br>Since &oint; F<sub>s</sub> &bull; dr = 0, the spring force is strictly <b>conservative</b>."
    },
    {
      q: "A body of mass 2 kg attached to a horizontal spring of stiffness k = 800 N/m is pulled to a displacement of 10 cm and released from rest on a frictionless floor. Calculate the maximum speed attained by the body.",
      sol: "m = 2 kg, k = 800 N/m, amplitude A = 10 cm = 0.10 m.<br>By conservation of mechanical energy, potential energy at maximum stretch converts entirely to kinetic energy at equilibrium position (x = 0):<br>&frac12; m v<sub>max</sub><sup>2</sup> = &frac12; k A<sup>2</sup> &rArr; v<sub>max</sub> = A &radic;(k / m).<br>v<sub>max</sub> = 0.10 &times; &radic;(800 / 2) = 0.10 &times; &radic;400 = 0.10 &times; 20 = <b>2.0 m s<sup>-1</sup></b>."
    },
    {
      q: "Construct an analytical comparison between Conservative Forces and Non-Conservative Forces across four key physical criteria.",
      sol: "1. <b>Path Dependence:</b> Conservative work is path-independent; non-conservative work depends on specific path.<br>2. <b>Closed Loop Work:</b> Conservative &oint; F &bull; dr = 0; non-conservative &oint; F &bull; dr &ne; 0.<br>3. <b>Potential Energy:</b> Conservative forces have an associated potential energy (F = -dU/dx); non-conservative forces have no potential energy function.<br>4. <b>Mechanical Energy:</b> Conservative forces conserve total mechanical energy (E = K + U = const); non-conservative forces dissipate energy into heat/sound."
    },
    {
      q: "State the Principle of Conservation of Mechanical Energy. Prove it for a freely falling stone of mass m dropped from height H at three points: top (A), midpoint (B), and ground impact (C).",
      sol: "<b>Statement:</b> Total mechanical energy E = K + U remains constant when only conservative forces act.<br><b>Proof:</b><br>&bull; <b>Point A (Height H):</b> v = 0 &rArr; K<sub>A</sub> = 0, U<sub>A</sub> = mgH &rArr; <b>E<sub>A</sub> = mgH</b>.<br>&bull; <b>Point B (Fallen x, Height H - x):</b> v<sub>B</sub><sup>2</sup> = 2gx &rArr; K<sub>B</sub> = &frac12;m(2gx) = mgx. U<sub>B</sub> = mg(H - x).<br>E<sub>B</sub> = mgx + mg(H - x) = <b>mgH</b>.<br>&bull; <b>Point C (Ground, Height 0):</b> v<sub>C</sub><sup>2</sup> = 2gH &rArr; K<sub>C</sub> = &frac12;m(2gH) = mgH. U<sub>C</sub> = 0.<br>E<sub>C</sub> = mgH + 0 = <b>mgH</b>.<br><b>Since E<sub>A</sub> = E<sub>B</sub> = E<sub>C</sub> = mgH, mechanical energy is strictly conserved.</b>"
    },
    {
      q: "A small object of mass m tied to an inextensible string of length L is whirled in a vertical circle. Derive the expression for string tension T at any general position inclined at angle &theta; with the downward vertical.",
      sol: "At angle &theta; with downward vertical, the radial forces acting on mass m are:<br>&bull; Inward tension T along string toward center.<br>&bull; Outward radial component of gravity: mg cos &theta;.<br>The net inward force supplies the centripetal acceleration:<br>T - mg cos &theta; = " + frac('m v<sup>2</sup>', 'L') + ".<br><b>T = " + frac('m v<sup>2</sup>', 'L') + " + m g cos &theta;</b>."
    },
    {
      q: "A stone of mass 0.2 kg tied to a string 0.5 m long is whirled in a vertical circle. Calculate: (a) Minimum critical velocity at the top, (b) Minimum critical velocity at the bottom, (c) String tension at the bottom (g = 9.8 m/s²).",
      sol: "m = 0.2 kg, L = 0.5 m, g = 9.8 m/s².<br><b>(a) Top Velocity:</b> v<sub>top</sub> = &radic;(g L) = &radic;(9.8 &times; 0.5) = &radic;4.9 &approx; <b>2.21 m s<sup>-1</sup></b>.<br><b>(b) Bottom Velocity:</b> v<sub>bottom</sub> = &radic;(5 g L) = &radic;(5 &times; 9.8 &times; 0.5) = &radic;24.5 &approx; <b>4.95 m s<sup>-1</sup></b>.<br><b>(c) Tension at Bottom:</b> T<sub>bottom</sub> = " + frac('m v<sub>bottom</sub><sup>2</sup>', 'L') + " + mg = " + frac('0.2 &times; 24.5', '0.5') + " + 0.2(9.8) = 9.8 + 1.96 = <b>11.76 Newtons (= 6 mg)</b>."
    },
    {
      q: "Prove analytically that in vertical circular motion of a bob tied to a string, the difference in string tension between the lowest and highest points is an invariant constant equal to 6 mg.",
      sol: "Tension at bottom (&theta; = 0&deg;): T<sub>b</sub> = " + frac('m v<sub>b</sub><sup>2</sup>', 'L') + " + mg.<br>Tension at top (&theta; = 180&deg;): T<sub>t</sub> = " + frac('m v<sub>t</sub><sup>2</sup>', 'L') + " - mg.<br>Difference: T<sub>b</sub> - T<sub>t</sub> = " + frac('m', 'L') + "(v<sub>b</sub><sup>2</sup> - v<sub>t</sub><sup>2</sup>) + 2mg.<br>By conservation of energy between bottom and top (height difference = 2L):<br>&frac12; m v<sub>b</sub><sup>2</sup> = &frac12; m v<sub>t</sub><sup>2</sup> + mg(2L) &rArr; v<sub>b</sub><sup>2</sup> - v<sub>t</sub><sup>2</sup> = 4 g L.<br>Substitute (v<sub>b</sub><sup>2</sup> - v<sub>t</sub><sup>2</sup>):<br>T<sub>b</sub> - T<sub>t</sub> = " + frac('m', 'L') + "(4 g L) + 2 mg = 4 mg + 2 mg = <b>6 mg</b>.<br>This confirms the tension difference is strictly <b>6 mg</b> regardless of launch speed."
    },
    {
      q: "A body executes vertical circular motion with velocity v_b = &radic;(7 g L) at its lowest point. Calculate its velocity and string tension at the highest point in terms of m, g, and L.",
      sol: "Given: v<sub>b</sub><sup>2</sup> = 7 g L.<br><b>(a) Top Velocity:</b> Using v<sub>t</sub><sup>2</sup> = v<sub>b</sub><sup>2</sup> - 4 g L = 7 g L - 4 g L = 3 g L &rArr; <b>v<sub>t</sub> = &radic;(3 g L)</b>.<br><b>(b) Tension at Top:</b> T<sub>t</sub> = " + frac('m v<sub>t</sub><sup>2</sup>', 'L') + " - mg = " + frac('m(3 g L)', 'L') + " - mg = 3 mg - mg = <b>2 mg</b>."
    },
    {
      q: "Classify physical collisions into three distinct types based on kinetic energy conservation and the coefficient of restitution (e).",
      sol: "1. <b>Perfectly Elastic Collision (e = 1):</b> Momentum and kinetic energy both conserved; zero permanent deformation.<br>2. <b>Inelastic Collision (0 < e < 1):</b> Momentum conserved; kinetic energy partially lost to heat/sound/deformation.<br>3. <b>Perfectly Inelastic Collision (e = 0):</b> Colliding bodies stick together and move with single common velocity; kinetic energy loss is maximal."
    },
    {
      q: "Define the Coefficient of Restitution (e). Prove that e = 1 for a one-dimensional elastic collision.",
      sol: "<b>Definition:</b> e = (v<sub>2</sub> - v<sub>1</sub>) / (u<sub>1</sub> - u<sub>2</sub>).<br><b>Proof for 1D Elastic Collision:</b><br>From momentum conservation: m<sub>1</sub>(u<sub>1</sub> - v<sub>1</sub>) = m<sub>2</sub>(v<sub>2</sub> - u<sub>2</sub>) &nbsp;&hellip;(1)<br>From kinetic energy conservation: m<sub>1</sub>(u<sub>1</sub><sup>2</sup> - v<sub>1</sub><sup>2</sup>) = m<sub>2</sub>(v<sub>2</sub><sup>2</sup> - u<sub>2</sub><sup>2</sup>) &nbsp;&hellip;(2)<br>Dividing (2) by (1) gives: u<sub>1</sub> + v<sub>1</sub> = v<sub>2</sub> + u<sub>2</sub> &rArr; <b>v<sub>2</sub> - v<sub>1</sub> = u<sub>1</sub> - u<sub>2</sub></b>.<br>Therefore: e = (v<sub>2</sub> - v<sub>1</sub>) / (u<sub>1</sub> - u<sub>2</sub>) = <b>1</b>."
    },
    {
      q: "A ball of mass 2 kg moving at 6 m/s collides head-on elastically with a stationary ball of mass 4 kg. Calculate the final velocities of both balls.",
      sol: "m<sub>1</sub> = 2 kg, u<sub>1</sub> = 6 m/s; m<sub>2</sub> = 4 kg, u<sub>2</sub> = 0.<br>Using 1D elastic collision formulas:<br>v<sub>1</sub> = [ (m<sub>1</sub> - m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub> = [ (2 - 4) / (2 + 4) ] &times; 6 = (-2 / 6) &times; 6 = <b>-2 m s<sup>-1</sup></b> (rebounds backward).<br>v<sub>2</sub> = [ 2 m<sub>1</sub> / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub> = [ 2(2) / 6 ] &times; 6 = <b>+4 m s<sup>-1</sup></b> (moves forward)."
    },
    {
      q: "Two identical railway wagons of mass 10,000 kg each collide. Wagon A moves at 4 m/s and collides with stationary Wagon B. They couple together upon impact. Calculate: (a) Common velocity, (b) Loss in kinetic energy.",
      sol: "m<sub>1</sub> = m<sub>2</sub> = 10,000 kg, u<sub>1</sub> = 4 m/s, u<sub>2</sub> = 0.<br><b>(a) Common Velocity:</b> V = " + frac('m<sub>1</sub> u<sub>1</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " = " + frac('10000 &times; 4', '20000') + " = <b>2 m s<sup>-1</sup></b>.<br><b>(b) Kinetic Energy Loss:</b><br>&Delta;K = &frac12; [ (m<sub>1</sub> m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>) ] (u<sub>1</sub> - u<sub>2</sub>)<sup>2</sup> = &frac12; [ (10000 &times; 10000) / 20000 ] (4)<sup>2</sup><br>&Delta;K = &frac12;(5000)(16) = <b>40,000 Joules (40 kJ)</b> (50% of initial kinetic energy is lost)."
    },
    {
      q: "A bullet of mass 10 grams moving horizontally at 400 m/s embeds into a wooden block of mass 3.99 kg suspended by cords (Ballistic Pendulum). Calculate the vertical height h to which the block rises (g = 9.8 m/s²).",
      sol: "m = 10 g = 0.01 kg, M = 3.99 kg, u = 400 m/s.<br>Total combined mass = m + M = 4.0 kg.<br>By momentum conservation: (m + M) V = m u &rArr; 4.0 V = 0.01 &times; 400 = 4 &rArr; <b>V = 1.0 m s<sup>-1</sup></b>.<br>By energy conservation: &frac12; (m + M) V<sup>2</sup> = (m + M) g h &rArr; h = V<sup>2</sup> / (2g).<br>h = (1.0)<sup>2</sup> / (2 &times; 9.8) = 1 / 19.6 &approx; <b>0.051 m = 5.1 cm</b>."
    },
    {
      q: "In a 1D elastic collision between projectile m_1 and stationary target m_2, analyze the final velocities when: (a) Projectile is vastly heavier (m_1 >> m_2), (b) Projectile is vastly lighter (m_1 << m_2).",
      sol: "Target stationary (u<sub>2</sub> = 0).<br><b>(a) Massive Projectile (m<sub>1</sub> &gg; m<sub>2</sub>):</b><br>v<sub>1</sub> &approx; (m<sub>1</sub>/m<sub>1</sub>) u<sub>1</sub> = <b>u<sub>1</sub></b> (continues almost unaffected).<br>v<sub>2</sub> &approx; (2m<sub>1</sub>/m<sub>1</sub>) u<sub>1</sub> = <b>2 u<sub>1</sub></b> (light target flies off with double projectile speed!).<br><b>(b) Very Light Projectile (m<sub>1</sub> &ll; m<sub>2</sub>):</b><br>v<sub>1</sub> &approx; (-m<sub>2</sub>/m<sub>2</sub>) u<sub>1</sub> = <b>-u<sub>1</sub></b> (light projectile rebounds with same speed).<br>v<sub>2</sub> &approx; (2m<sub>1</sub>/m<sub>2</sub>) u<sub>1</sub> &approx; <b>0</b> (massive target remains stationary)."
    },
    {
      q: "A rubber ball is dropped from an initial height h_0 = 10 m onto a rigid horizontal floor. If the coefficient of restitution is e = 0.8, calculate the height h_1 to which the ball rebounds after the first bounce.",
      sol: "Impact velocity: v = &radic;(2 g h<sub>0</sub>).<br>Rebound velocity: v' = e v = e &radic;(2 g h<sub>0</sub>).<br>Rebound height: h<sub>1</sub> = (v')<sup>2</sup> / (2g) = [e<sup>2</sup> (2 g h<sub>0</sub>)] / (2g) = <b>e<sup>2</sup> h<sub>0</sub></b>.<br>h<sub>1</sub> = (0.8)<sup>2</sup> &times; 10 = 0.64 &times; 10 = <b>6.4 meters</b>.<br>(General formula after n bounces: h<sub>n</sub> = e<sup>2n</sup> h<sub>0</sub>)."
    },
    {
      q: "Two particles of identical mass m collide elastically in two dimensions with one initially at rest. Prove that they scatter at strictly 90° to each other (orthogonal scattering).",
      sol: "Let m<sub>1</sub> = m<sub>2</sub> = m, and target initially at rest (u<sub>2</sub> = 0).<br>&bull; Momentum conservation: m u<sub>1</sub> = m v<sub>1</sub> + m v<sub>2</sub> &rArr; <b>u<sub>1</sub> = v<sub>1</sub> + v<sub>2</sub></b>.<br>Squaring both sides (dot product): u<sub>1</sub><sup>2</sup> = v<sub>1</sub><sup>2</sup> + v<sub>2</sub><sup>2</sup> + 2 (v<sub>1</sub> &bull; v<sub>2</sub>) &nbsp;&hellip;(1)<br>&bull; Kinetic energy conservation: &frac12; m u<sub>1</sub><sup>2</sup> = &frac12; m v<sub>1</sub><sup>2</sup> + &frac12; m v<sub>2</sub><sup>2</sup> &rArr; <b>u<sub>1</sub><sup>2</sup> = v<sub>1</sub><sup>2</sup> + v<sub>2</sub><sup>2</sup></b> &nbsp;&hellip;(2)<br>Subtracting (2) from (1):<br>2 (v<sub>1</sub> &bull; v<sub>2</sub>) = 0 &rArr; v<sub>1</sub> &bull; v<sub>2</sub> = 0.<br>|v<sub>1</sub>| |v<sub>2</sub>| cos(&theta;<sub>1</sub> + &theta;<sub>2</sub>) = 0 &rArr; <b>&theta;<sub>1</sub> + &theta;<sub>2</sub> = 90&deg;</b>.<br>The particles fly apart at strictly right angles."
    },
    {
      q: "A particle of mass m with velocity u strikes an identical stationary particle elastically in 2D. If the incident particle scatters at 30° to incident axis, find the scattering angle of the target particle and their final speeds.",
      sol: "Since masses are equal and collision is elastic in 2D, the scattering angles satisfy: &theta;<sub>1</sub> + &theta;<sub>2</sub> = 90&deg;.<br>Given &theta;<sub>1</sub> = 30&deg; &rArr; <b>&theta;<sub>2</sub> = 90&deg; - 30&deg; = 60&deg;</b>.<br>By momentum conservation along perpendicular y-axis:<br>m v<sub>1</sub> sin 30&deg; = m v<sub>2</sub> sin 60&deg; &rArr; v<sub>1</sub>(0.5) = v<sub>2</sub>(&radic;3 / 2) &rArr; v<sub>1</sub> = &radic;3 v<sub>2</sub>.<br>From kinetic energy conservation: u<sup>2</sup> = v<sub>1</sub><sup>2</sup> + v<sub>2</sub><sup>2</sup> = 3 v<sub>2</sub><sup>2</sup> + v<sub>2</sub><sup>2</sup> = 4 v<sub>2</sub><sup>2</sup>.<br>v<sub>2</sub> = u / 2 = <b>0.50 u</b>.<br>v<sub>1</sub> = &radic;3 (u / 2) = <b>(&radic;3 / 2) u &approx; 0.866 u</b>."
    },
    {
      q: "A particle moves along the x-axis under a conservative force F(x) = (-k x + a x³). Find its potential energy function U(x), taking standard reference U(0) = 0.",
      sol: "Using U(x) - U(0) = -&int;<sub>0</sub><sup>x</sup> F(x') dx':<br>U(x) = -&int;<sub>0</sub><sup>x</sup> (-k x' + a x'<sup>3</sup>) dx' = &int;<sub>0</sub><sup>x</sup> (k x' - a x'<sup>3</sup>) dx'.<br>U(x) = [ &frac12; k x'<sup>2</sup> - &frac14; a x'<sup>4</sup> ]<sub>0</sub><sup>x</sup>.<br><b>U(x) = &frac12; k x<sup>2</sup> - &frac14; a x<sup>4</sup></b>."
    },
    {
      q: "Explain why a rubber ball rebounds high after striking the floor, whereas a lump of soft wet clay sticks dead to the floor upon impact.",
      sol: "<b>Rubber Ball:</b> Exhibits high elasticity (e &approx; 0.8 - 0.9). During impact, kinetic energy is stored temporarily as elastic strain energy and almost fully restored as kinetic energy upon expansion.<br><b>Wet Clay:</b> Undergoes permanent plastic deformation (e = 0). The work of impact is completely dissipated in shearing and deforming clay molecules into internal thermal energy, resulting in zero rebound."
    },
    {
      q: "A force of 20 N compresses a spring by 0.1 m. Calculate: (a) Spring constant k, (b) Stored elastic energy, (c) Speed with which a 0.2 kg ball placed on the spring is launched when released.",
      sol: "<b>(a) Spring Constant:</b> k = F / x = 20 / 0.1 = <b>200 N m<sup>-1</sup></b>.<br><b>(b) Stored Energy:</b> U<sub>s</sub> = &frac12; k x<sup>2</sup> = &frac12;(200)(0.1)<sup>2</sup> = 100 &times; 0.01 = <b>1.0 Joule</b>.<br><b>(c) Launch Speed:</b> All potential energy converts to kinetic energy: &frac12; m v<sup>2</sup> = U<sub>s</sub>.<br>&frac12;(0.2) v<sup>2</sup> = 1.0 &rArr; 0.1 v<sup>2</sup> = 1.0 &rArr; v<sup>2</sup> = 10 &rArr; <b>v = &radic;10 &approx; 3.16 m s<sup>-1</sup></b>."
    },
    {
      q: "Can a physical body possess energy without possessing linear momentum? Can a body possess linear momentum without possessing energy? Justify both cases.",
      sol: "<b>1. Energy without Momentum: YES.</b> A body at rest (v = 0) has zero linear momentum (p = 0), but possesses gravitational potential energy (mgh) or internal rest-mass energy (E = mc²).<br><b>2. Momentum without Energy: NO.</b> If a body has momentum (p = mv &ne; 0), it must possess speed v &ne; 0, which guarantees non-zero kinetic energy (K = p²/2m > 0)."
    },
    {
      q: "An engine of mass 50 metric tons pulls a train of 200 metric tons up an incline of 1 in 100 at a steady speed of 36 km/h. If frictional resistance is 5 N per ton, calculate the power of the engine (g = 9.8 m/s²).",
      sol: "Total mass M = 50 + 200 = 250 tons = 250,000 kg.<br>Speed v = 36 km/h = 10 m/s. Slope sin &theta; = 1/100.<br>&bull; Downward gravitational component: F<sub>g</sub> = M g sin &theta; = 250000 &times; 9.8 &times; (1/100) = <b>24,500 N</b>.<br>&bull; Total friction: F<sub>f</sub> = 250 tons &times; 5 N/ton = <b>1,250 N</b>.<br>Total tractive force required: F = F<sub>g</sub> + F<sub>f</sub> = 24500 + 1250 = <b>25,750 N</b>.<br>Power: P = F &times; v = 25750 &times; 10 = <b>257,500 W = 257.5 kW &approx; 345 hp</b>."
    },
    {
      q: "Explain why the brake drums and wheels of a truck become scalding hot during a continuous steep mountain descent, in terms of work and energy transformation.",
      sol: "As the truck descends, it loses gravitational potential energy &Delta;U = mgh. To maintain constant safe speed without accelerating, the brakes apply continuous retarding friction. By the Work-Energy Theorem and First Law of Thermodynamics, the non-conservative work done by friction transforms this immense mechanical potential energy into thermal internal energy in the brake pads and drums."
    },
    {
      q: "A light body and a heavy body have equal linear momenta. Which one possesses greater kinetic energy? Prove mathematically.",
      sol: "Kinetic energy is K = p<sup>2</sup> / (2m).<br>Given p<sub>light</sub> = p<sub>heavy</sub> = p.<br>K<sub>light</sub> / K<sub>heavy</sub> = [p<sup>2</sup> / (2m<sub>light</sub>)] / [p<sup>2</sup> / (2m<sub>heavy</sub>)] = <b>m<sub>heavy</sub> / m<sub>light</sub></b>.<br>Since m<sub>heavy</sub> > m<sub>light</sub>, it follows that: <b>K<sub>light</sub> > K<sub>heavy</sub></b>.<br>The lighter body has significantly greater kinetic energy."
    },
    {
      q: "A light body and a heavy body have identical kinetic energies. Which one possesses greater linear momentum? Prove mathematically.",
      sol: "Momentum is p = &radic;(2m K).<br>Given K<sub>light</sub> = K<sub>heavy</sub> = K.<br>p<sub>heavy</sub> / p<sub>light</sub> = &radic;(2m<sub>heavy</sub> K) / &radic;(2m<sub>light</sub> K) = <b>&radic;(m<sub>heavy</sub> / m<sub>light</sub>)</b>.<br>Since m<sub>heavy</sub> > m<sub>light</sub>, it follows that: <b>p<sub>heavy</sub> > p<sub>light</sub></b>.<br>The heavier body carries greater linear momentum."
    },
    {
      q: "What is a Conservative Field? Prove that the Earth's gravitational field is conservative.",
      sol: "A force field is conservative if the line integral of the force along any closed path is zero: &oint; F &bull; dr = 0.<br>For gravity near Earth, F = -mg ĵ.<br>For any path from (x<sub>1</sub>, y<sub>1</sub>) to (x<sub>2</sub>, y<sub>2</sub>):<br>W = &int; (-mg ĵ) &bull; (dx î + dy ĵ) = -&int;<sub>y<sub>1</sub></sub><sup>y<sub>2</sub></sup> mg dy = -mg(y<sub>2</sub> - y<sub>1</sub>).<br>The work depends solely on initial and final vertical coordinates and is independent of horizontal path. For a closed loop, y<sub>2</sub> = y<sub>1</sub> &rArr; W = 0, proving gravity is strictly conservative."
    },
    {
      q: "An athlete of mass 60 kg climbs a vertical training rope of length 10 meters in 15 seconds at uniform speed. Calculate the power developed by the athlete (g = 9.8 m/s²).",
      sol: "m = 60 kg, h = 10 m, t = 15 s, g = 9.8 m/s².<br>Work done against gravity: W = m g h = 60 &times; 9.8 &times; 10 = <b>5,880 Joules</b>.<br>Power developed: P = W / t = 5880 / 15 = <b>392 Watts &approx; 0.525 hp</b>."
    },
    {
      q: "Describe the continuous transformation between kinetic and potential energy in an oscillating simple pendulum. Show how total mechanical energy remains conserved at the mean and extreme positions.",
      sol: "Let the pendulum bob of mass m oscillate with amplitude displacement h.<br>&bull; <b>At Extreme Position:</b> Velocity vanishes momentarily (v = 0 &rArr; K = 0). Height is maximum (U = mgh). Total energy: <b>E<sub>ext</sub> = mgh</b>.<br>&bull; <b>At Mean Equilibrium Position:</b> Height is datum level (h = 0 &rArr; U = 0). Velocity is maximum (v = &radic;(2gh)). Kinetic energy: K = &frac12;m(2gh) = mgh. Total energy: <b>E<sub>mean</sub> = mgh</b>.<br>&bull; <b>At Intermediate Position:</b> Mechanical energy is partitioned: E = &frac12;mv<sup>2</sup> + mgy = mgh.<br>Energy continuously shifts between potential and kinetic forms while total mechanical energy remains perfectly invariant."
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 41}: ${item.q}</h3>
    <div style="background: rgba(0, 198, 255, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Step-by-Step Proof:</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getSaQuestions };
