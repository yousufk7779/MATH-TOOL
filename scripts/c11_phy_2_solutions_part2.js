const { themeColor, frac } = require('./c11_phy_2_helpers');

function getSaQuestions() {
  const qList = [
    {
      q: "A particle moves along the x-axis such that its position is given by x(t) = 3 t³ - 6 t² + 4 t + 2 (where x is in meters and t in seconds). Find: (a) Instantaneous velocity at t = 2 s, (b) Instantaneous acceleration at t = 2 s, (c) Instant when acceleration vanishes.",
      sol: "<b>(a) Velocity:</b> v(t) = " + frac('dx', 'dt') + " = " + frac('d', 'dt') + "(3t<sup>3</sup> - 6t<sup>2</sup> + 4t + 2) = 9t<sup>2</sup> - 12t + 4.<br>At t = 2 s: v(2) = 9(2)<sup>2</sup> - 12(2) + 4 = 36 - 24 + 4 = <b>16 m s<sup>-1</sup></b>.<br><b>(b) Acceleration:</b> a(t) = " + frac('dv', 'dt') + " = 18t - 12.<br>At t = 2 s: a(2) = 18(2) - 12 = 36 - 12 = <b>24 m s<sup>-2</sup></b>.<br><b>(c) Zero Acceleration Instant:</b> a(t) = 0 &rArr; 18t - 12 = 0 &rArr; t = 12/18 = <b>0.67 s (2/3 s)</b>."
    },
    {
      q: "A car traveling at 72 km/h is brought to rest over a distance of 40 m by applying uniform brakes. Calculate: (a) Retardation of the car, (b) Time taken to come to complete stop.",
      sol: "Initial velocity u = 72 km/h = 72 &times; (5/18) = <b>20 m s<sup>-1</sup></b>. Final velocity v = 0. Stopping distance s = 40 m.<br><b>(a) Retardation:</b> Using v<sup>2</sup> = u<sup>2</sup> + 2as:<br>0 = (20)<sup>2</sup> + 2a(40) &rArr; 80a = -400 &rArr; a = -5 m s<sup>-2</sup>.<br><b>Retardation = 5 m s<sup>-2</sup></b>.<br><b>(b) Time taken:</b> Using v = u + at &rArr; 0 = 20 - 5t &rArr; <b>t = 4 seconds</b>."
    },
    {
      q: "A ball is thrown vertically upwards with a speed of 19.6 m/s from the top of a tower 39.2 m high. Calculate: (a) Maximum height reached above the ground, (b) Total time taken to hit the ground (g = 9.8 m/s²).",
      sol: "<b>(a) Maximum height above tower:</b> At peak, v = 0. v<sup>2</sup> = u<sup>2</sup> - 2gh<sub>1</sub> &rArr; 0 = (19.6)<sup>2</sup> - 2(9.8)h<sub>1</sub> &rArr; h<sub>1</sub> = (19.6)<sup>2</sup> / 19.6 = <b>19.6 m</b>.<br>Height above ground = 39.2 + 19.6 = <b>58.8 m</b>.<br><b>(b) Total time of flight:</b> Choosing upward direction as positive, net displacement y = -39.2 m, u = +19.6 m/s, a = -9.8 m/s<sup>2</sup>.<br>y = ut - &frac12;gt<sup>2</sup> &rArr; -39.2 = 19.6t - 4.9t<sup>2</sup>.<br>Divide by 4.9: -8 = 4t - t<sup>2</sup> &rArr; t<sup>2</sup> - 4t - 8 = 0.<br>Quadratic formula: t = [4 &plusmn; &radic;(16 - 4(1)(-8))] / 2 = [4 &plusmn; &radic;48] / 2 = 2 + 3.464 = <b>5.46 seconds</b>."
    },
    {
      q: "Explain with diagrams what is meant by Stopping Distance and Reaction Time of a driver. Derive the expression for stopping distance.",
      sol: "<b>Reaction Time (t_r):</b> The elapsed time between a driver observing a hazard and physically actuating the brake pedal. During this time, the car continues forward with constant speed u, covering reaction distance: d<sub>r</sub> = u &times; t<sub>r</sub>.<br><b>Stopping Distance (d_s):</b> The distance traveled after the brakes are applied until the vehicle stops. Using v<sup>2</sup> = u<sup>2</sup> - 2as where v = 0:<br>0 = u<sup>2</sup> - 2ad<sub>s</sub> &rArr; <b>d<sub>s</sub> = " + frac('u<sup>2</sup>', '2 a') + "</b>.<br>Total stopping distance = d<sub>r</sub> + d<sub>s</sub> = <b>u t<sub>r</sub> + " + frac('u<sup>2</sup>', '2 a') + "</b>."
    },
    {
      q: "Two trains 120 m and 80 m long are running in opposite directions with velocities 42 km/h and 30 km/h. In what time will they completely cross each other?",
      sol: "Total distance to be covered for complete crossing = L<sub>1</sub> + L<sub>2</sub> = 120 m + 80 m = <b>200 m</b>.<br>Since running in opposite directions, relative speed = v<sub>1</sub> + v<sub>2</sub>.<br>v<sub>rel</sub> = 42 + 30 = 72 km/h = 72 &times; (5/18) = <b>20 m s<sup>-1</sup></b>.<br>Time to cross = " + frac('Total Distance', 'v<sub>rel</sub>') + " = " + frac('200 m', '20 m s<sup>-1</sup>') + " = <b>10 seconds</b>."
    },
    {
      q: "Derive the relation for relative velocity of body A with respect to body B (v_AB = v_A - v_B) in one dimension.",
      sol: "Let positions of A and B at time t be x<sub>A</sub>(t) and x<sub>B</sub>(t).<br>Position of A relative to B is: x<sub>AB</sub>(t) = x<sub>A</sub>(t) - x<sub>B</sub>(t).<br>Differentiating with respect to time t:<br>" + frac('d x<sub>AB</sub>', 'dt') + " = " + frac('d x<sub>A</sub>', 'dt') + " - " + frac('d x<sub>B</sub>', 'dt') + ".<br>By definition of instantaneous velocity:<br><b>v<sub>AB</sub> = v<sub>A</sub> - v<sub>B</sub></b>.<br>Similarly, velocity of B relative to A is <b>v<sub>BA</sub> = v<sub>B</sub> - v<sub>A</sub> = -v<sub>AB</sub></b>."
    },
    {
      q: "If |A + B| = |A - B|, prove analytically that the angle between vectors A and B is 90°.",
      sol: "Given: |A + B| = |A - B|.<br>Squaring both sides:<br>|A + B|<sup>2</sup> = |A - B|<sup>2</sup>.<br>A<sup>2</sup> + B<sup>2</sup> + 2 A &bull; B = A<sup>2</sup> + B<sup>2</sup> - 2 A &bull; B.<br>Subtract A<sup>2</sup> + B<sup>2</sup> from both sides:<br>2 A &bull; B = -2 A &bull; B &rArr; 4 A &bull; B = 0 &rArr; A &bull; B = 0.<br>A B cos &theta; = 0. Since A &ne; 0 and B &ne; 0: cos &theta; = 0 &rArr; <b>&theta; = 90&deg;</b>.<br>Hence vectors A and B are strictly mutually perpendicular."
    },
    {
      q: "Find the unit vector in the direction of vector A = 3 î - 4 ĵ + 12 k̂. Also find its direction cosines.",
      sol: "Magnitude of A: |A| = &radic;[3<sup>2</sup> + (-4)<sup>2</sup> + 12<sup>2</sup>] = &radic;[9 + 16 + 144] = &radic;169 = <b>13</b>.<br><b>Unit Vector:</b> Â = A / |A| = <b>" + frac('3', '13') + " î - " + frac('4', '13') + " ĵ + " + frac('12', '13') + " k̂</b>.<br><b>Direction Cosines:</b><br>l = cos &alpha; = <b>3/13</b>, m = cos &beta; = <b>-4/13</b>, n = cos &gamma; = <b>12/13</b>.<br>(Verification: l<sup>2</sup> + m<sup>2</sup> + n<sup>2</sup> = 9/169 + 16/169 + 144/169 = 169/169 = 1)."
    },
    {
      q: "Find the angle between the two vectors A = 2 î + 2 ĵ - k̂ and B = 6 î - 3 ĵ + 2 k̂.",
      sol: "Dot product: A &bull; B = (2)(6) + (2)(-3) + (-1)(2) = 12 - 6 - 2 = <b>4</b>.<br>Magnitude of A: |A| = &radic;[2<sup>2</sup> + 2<sup>2</sup> + (-1)<sup>2</sup>] = &radic;[4 + 4 + 1] = &radic;9 = <b>3</b>.<br>Magnitude of B: |B| = &radic;[6<sup>2</sup> + (-3)<sup>2</sup> + 2<sup>2</sup>] = &radic;[36 + 9 + 4] = &radic;49 = <b>7</b>.<br>cos &theta; = " + frac('A &bull; B', '|A| |B|') + " = " + frac('4', '3 &times; 7') + " = <b>" + frac('4', '21') + "</b>.<br><b>&theta; = cos<sup>-1</sup>(4 / 21) &approx; 79.02&deg;</b>."
    },
    {
      q: "Find the scalar and vector projections of vector A = î + 3 ĵ + 7 k̂ on vector B = 7 î - ĵ + 8 k̂.",
      sol: "<b>1. Dot product:</b> A &bull; B = (1)(7) + (3)(-1) + (7)(8) = 7 - 3 + 56 = <b>60</b>.<br><b>2. Magnitude of B:</b> |B| = &radic;[7<sup>2</sup> + (-1)<sup>2</sup> + 8<sup>2</sup>] = &radic;[49 + 1 + 64] = &radic;114.<br><b>Scalar Projection of A on B:</b> A &bull; B̂ = " + frac('A &bull; B', '|B|') + " = <b>" + frac('60', '&radic;114') + "</b>.<br><b>Vector Projection of A on B:</b> (A &bull; B̂) B̂ = " + frac('60', '114') + " (7 î - ĵ + 8 k̂) = <b>" + frac('10', '19') + " (7 î - ĵ + 8 k̂)</b>."
    },
    {
      q: "Determine a unit vector perpendicular to both vectors A = 2 î + ĵ + k̂ and B = î - ĵ + 2 k̂.",
      sol: "A vector perpendicular to both A and B is given by their cross product A &times; B:<br>A &times; B = | î &nbsp; ĵ &nbsp; k̂ |<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 2 &nbsp; 1 &nbsp; 1 |<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 1 &nbsp;-1 &nbsp; 2 |<br>= î[(1)(2) - (1)(-1)] - ĵ[(2)(2) - (1)(1)] + k̂[(2)(-1) - (1)(1)]<br>= î(2 + 1) - ĵ(4 - 1) + k̂(-2 - 1) = <b>3 î - 3 ĵ - 3 k̂</b>.<br>Magnitude: |A &times; B| = &radic;[3<sup>2</sup> + (-3)<sup>2</sup> + (-3)<sup>2</sup>] = &radic;[9 + 9 + 9] = &radic;27 = 3&radic;3.<br>Unit vector n̂ = " + frac('A &times; B', '|A &times; B|') + " = <b>&plusmn; " + frac('1', '&radic;3') + " (î - ĵ - k̂)</b>."
    },
    {
      q: "Calculate the area of a parallelogram whose adjacent sides are given by vectors A = 3 î + ĵ + 4 k̂ and B = î - ĵ + k̂.",
      sol: "Area of parallelogram = |A &times; B|.<br>A &times; B = | î &nbsp; ĵ &nbsp; k̂ |<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 3 &nbsp; 1 &nbsp; 4 |<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 1 &nbsp;-1 &nbsp; 1 |<br>= î(1 - (-4)) - ĵ(3 - 4) + k̂(-3 - 1) = <b>5 î + ĵ - 4 k̂</b>.<br>Area = &radic;[5<sup>2</sup> + 1<sup>2</sup> + (-4)<sup>2</sup>] = &radic;[25 + 1 + 16] = <b>&radic;42 &approx; 6.48 sq. units</b>."
    },
    {
      q: "Prove that the area of a triangle formed by two vectors A and B as adjacent sides is ½ |A × B|.",
      sol: "Let vectors A and B act at angle &theta;. Base of triangle = |A|. Height of triangle = |B| sin &theta;.<br>Area of triangle = &frac12; &times; Base &times; Height = &frac12; |A| |B| sin &theta;.<br>Since |A &times; B| = |A| |B| sin &theta;, it follows directly that:<br><b>Area of Triangle = &frac12; |A &times; B|</b>."
    },
    {
      q: "Rain is falling vertically downwards with speed 30 m/s. A cyclist rides horizontally with speed 10 m/s from North to South. In what direction should the cyclist hold an umbrella to protect against rain?",
      sol: "Velocity of rain: v<sub>R</sub> = -30 ĵ. Velocity of cyclist: v<sub>C</sub> = -10 î (taking South as positive X).<br>Relative velocity of rain with respect to cyclist: v<sub>RC</sub> = v<sub>R</sub> - v<sub>C</sub> = -30 ĵ - (-10 î) = 10 î - 30 ĵ.<br>Magnitude: |v<sub>RC</sub>| = &radic;[10<sup>2</sup> + (-30)<sup>2</sup>] = &radic;1000 &approx; 31.62 m/s.<br>Direction: tan &theta; = |v<sub>C</sub>| / |v<sub>R</sub>| = 10 / 30 = 1/3.<br>&theta; = tan<sup>-1</sup>(1/3) &approx; <b>18.43&deg; with the vertical towards South</b>.<br>The cyclist should hold the umbrella tilted at <b>18.4&deg; towards the South</b>."
    },
    {
      q: "A boat can row with speed 10 km/h in still water. River flows at 5 km/h. In what direction should the boat head to cross the river along the shortest path? What will be the resultant crossing speed?",
      sol: "For the shortest path (straight across, perpendicular to river flow), resultant velocity must be directed straight across.<br>Let angle with river upstream be &theta;.<br>sin &alpha; = v<sub>river</sub> / v<sub>boat</sub> = 5 / 10 = 0.5 &rArr; &alpha; = 30&deg;.<br>Therefore, the boat must head at an angle of <b>90&deg; + 30&deg; = 120&deg; upstream</b> relative to river flow direction.<br>Resultant crossing speed: v<sub>res</sub> = &radic;[v<sub>boat</sub><sup>2</sup> - v<sub>river</sub><sup>2</sup>] = &radic;[10<sup>2</sup> - 5<sup>2</sup>] = &radic;75 = <b>5&radic;3 km/h &approx; 8.66 km/h</b>."
    },
    {
      q: "A projectile is fired with an initial speed of 98 m/s at an angle of 30° with the horizontal. Calculate: (a) Time of flight, (b) Maximum height attained, (c) Horizontal range (g = 9.8 m/s²).",
      sol: "u = 98 m/s, &theta; = 30&deg;, g = 9.8 m/s<sup>2</sup>. sin 30&deg; = 0.5, cos 30&deg; = &radic;3/2, sin 60&deg; = &radic;3/2.<br><b>(a) Time of flight:</b> T = " + frac('2 u sin &theta;', 'g') + " = " + frac('2 &times; 98 &times; 0.5', '9.8') + " = <b>10 seconds</b>.<br><b>(b) Maximum height:</b> H = " + frac('u<sup>2</sup> sin<sup>2</sup> &theta;', '2g') + " = " + frac('(98)<sup>2</sup> &times; (0.5)<sup>2</sup>', '2 &times; 9.8') + " = " + frac('9604 &times; 0.25', '19.6') + " = <b>122.5 meters</b>.<br><b>(c) Horizontal range:</b> R = " + frac('u<sup>2</sup> sin 2&theta;', 'g') + " = " + frac('(98)<sup>2</sup> &times; sin 60&deg;', '9.8') + " = 980 &times; " + frac('&radic;3', '2') + " = <b>490&radic;3 &approx; 848.7 meters</b>."
    },
    {
      q: "Prove analytically that the horizontal range of a projectile is the same for two angles of projection θ and (90° - θ).",
      sol: "Range formula: R(&theta;) = " + frac('u<sup>2</sup> sin 2&theta;', 'g') + ".<br>For angle (90&deg; - &theta;):<br>R(90&deg; - &theta;) = " + frac('u<sup>2</sup> sin[2(90&deg; - &theta;)]', 'g') + " = " + frac('u<sup>2</sup> sin(180&deg; - 2&theta;)', 'g') + ".<br>Since trigonometric identity gives sin(180&deg; - A) = sin A:<br>sin(180&deg; - 2&theta;) = sin 2&theta;.<br>Therefore: <b>R(90&deg; - &theta;) = " + frac('u<sup>2</sup> sin 2&theta;', 'g') + " = R(&theta;)</b>.<br>Thus, for a given initial velocity, complementary angles yield identical horizontal ranges."
    },
    {
      q: "Prove that the maximum height H and horizontal range R of a projectile are related by: R = 4 H cot θ. What does this become at maximum range?",
      sol: "H = " + frac('u<sup>2</sup> sin<sup>2</sup> &theta;', '2g') + " &rArr; u<sup>2</sup> / g = " + frac('2H', 'sin<sup>2</sup> &theta;') + ".<br>Substitute into Range R = " + frac('u<sup>2</sup> (2 sin &theta; cos &theta;)', 'g') + ":<br>R = \left(" + frac('2H', 'sin<sup>2</sup> &theta;') + "\right) (2 sin &theta; cos &theta;) = 4H " + frac('cos &theta;', 'sin &theta;') + " = <b>4 H cot &theta;</b>.<br>At maximum range, &theta; = 45&deg; (cot 45&deg; = 1):<br><b>R<sub>max</sub> = 4 H</b>."
    },
    {
      q: "A projectile has an initial kinetic energy K₀. Find its kinetic energy at the highest point of its trajectory.",
      sol: "Initial kinetic energy: K<sub>0</sub> = &frac12; m u<sup>2</sup>.<br>At the highest point, vertical velocity v<sub>y</sub> = 0. Only horizontal component v<sub>x</sub> = u cos &theta; remains.<br>Kinetic energy at peak: K<sub>top</sub> = &frac12; m v<sub>x</sub><sup>2</sup> = &frac12; m (u cos &theta;)<sup>2</sup> = (&frac12; m u<sup>2</sup>) cos<sup>2</sup> &theta;.<br><b>K<sub>top</sub> = K<sub>0</sub> cos<sup>2</sup> &theta;</b>.<br>For example, if projected at 60&deg;, K<sub>top</sub> = K<sub>0</sub> cos<sup>2</sup> 60&deg; = K<sub>0</sub> (1/2)<sup>2</sup> = K<sub>0</sub> / 4."
    },
    {
      q: "Calculate the angular speed (ω) of: (a) Second hand, (b) Minute hand, (c) Hour hand of a clock in rad/s.",
      sol: "Angular speed &omega; = 2&pi; / T:<br><b>(a) Second hand:</b> T = 60 s &rArr; &omega; = 2&pi; / 60 = <b>&pi; / 30 rad s<sup>-1</sup> &approx; 0.1047 rad s<sup>-1</sup></b>.<br><b>(b) Minute hand:</b> T = 60 min = 3600 s &rArr; &omega; = 2&pi; / 3600 = <b>&pi; / 1800 rad s<sup>-1</sup> &approx; 1.745 &times; 10<sup>-3</sup> rad s<sup>-1</sup></b>.<br><b>(c) Hour hand:</b> T = 12 h = 12 &times; 3600 = 43200 s &rArr; &omega; = 2&pi; / 43200 = <b>&pi; / 21600 rad s<sup>-1</sup> &approx; 1.454 &times; 10<sup>-4</sup> rad s<sup>-1</sup></b>."
    },
    {
      q: "A particle is moving on a circular track of radius 20 m with a speed that increases uniformly at the rate of 3 m/s². At the instant when speed is 20 m/s, find: (a) Centripetal acceleration, (b) Total acceleration magnitude.",
      sol: "r = 20 m, tangential acceleration a<sub>t</sub> = dv/dt = 3 m s<sup>-2</sup>, instantaneous speed v = 20 m/s.<br><b>(a) Centripetal acceleration:</b> a<sub>c</sub> = v<sup>2</sup> / r = (20)<sup>2</sup> / 20 = <b>20 m s<sup>-2</sup></b> (radially inward).<br><b>(b) Total acceleration:</b> Since a<sub>t</sub> and a<sub>c</sub> are perpendicular:<br>a = &radic;[a<sub>t</sub><sup>2</sup> + a<sub>c</sub><sup>2</sup>] = &radic;[3<sup>2</sup> + 20<sup>2</sup>] = &radic;[9 + 400] = &radic;409 = <b>20.22 m s<sup>-2</sup></b>."
    },
    {
      q: "Explain why a stone tied to a string and whirled in a horizontal circle flies off tangentially when the string breaks.",
      sol: "By Newton's First Law of Motion (Inertia of Direction), an object moving along a curved path possesses an instantaneous tangential velocity at every point. The string provides the necessary inward centripetal tension to bend the path. When the string breaks, tension instantly drops to zero, and the stone continues in a straight line along the instantaneous <b>tangent</b>."
    },
    {
      q: "A ball is dropped from a balloon ascending vertically at 10 m/s when the balloon is at a height of 75 m. How long does the ball take to reach the ground? (g = 10 m/s²)",
      sol: "Initial velocity of ball = balloon velocity: u = +10 m/s. Height y = -75 m, a = -g = -10 m/s<sup>2</sup>.<br>y = u t - &frac12; g t<sup>2</sup> &rArr; -75 = 10t - 5t<sup>2</sup>.<br>Divide by 5: -15 = 2t - t<sup>2</sup> &rArr; t<sup>2</sup> - 2t - 15 = 0.<br>Factorize: (t - 5)(t + 3) = 0.<br>Since time cannot be negative: <b>t = 5 seconds</b>."
    },
    {
      q: "Derive the relation between linear acceleration (a) and angular acceleration (α) in circular motion.",
      sol: "Linear velocity relates to angular velocity by v = r &omega;.<br>Differentiating with respect to time t:<br>" + frac('dv', 'dt') + " = " + frac('d', 'dt') + "(r &omega;) = r " + frac('d&omega;', 'dt') + ".<br>Since tangential acceleration is a<sub>t</sub> = dv/dt and angular acceleration is &alpha; = d&omega;/dt:<br><b>a<sub>t</sub> = r &alpha; &nbsp;&bull;&nbsp; a = &alpha; &times; r</b>."
    },
    {
      q: "Two bodies are thrown with the same initial velocity at angles θ₁ and θ₂ with the horizontal. If their maximum heights are H₁ and H₂, prove that (H₁ / H₂) = tan² θ₁ when θ₁ + θ₂ = 90°.",
      sol: "H<sub>1</sub> = " + frac('u<sup>2</sup> sin<sup>2</sup> &theta;<sub>1</sub>', '2g') + " and H<sub>2</sub> = " + frac('u<sup>2</sup> sin<sup>2</sup> &theta;<sub>2</sub>', '2g') + ".<br>Since &theta;<sub>1</sub> + &theta;<sub>2</sub> = 90&deg; &rArr; &theta;<sub>2</sub> = 90&deg; - &theta;<sub>1</sub>:<br>sin &theta;<sub>2</sub> = sin(90&deg; - &theta;<sub>1</sub>) = cos &theta;<sub>1</sub>.<br>Therefore: H<sub>2</sub> = " + frac('u<sup>2</sup> cos<sup>2</sup> &theta;<sub>1</sub>', '2g') + ".<br>Ratio: " + frac('H<sub>1</sub>', 'H<sub>2</sub>') + " = " + frac('sin<sup>2</sup> &theta;<sub>1</sub>', 'cos<sup>2</sup> &theta;<sub>1</sub>') + " = <b>tan<sup>2</sup> &theta;<sub>1</sub></b>."
    },
    {
      q: "State and prove the Triangle Law of Vector Addition geometrically.",
      sol: "<b>Statement:</b> If two vectors are represented in magnitude and direction by two sides of a triangle taken in order, their resultant is represented by the third side taken in reverse order.<br><b>Proof:</b> Let vector P = OA and vector Q = AB. Draw BC &perp; OA extended.<br>In &Delta;ABC: AC = Q cos &theta;, BC = Q sin &theta;.<br>In right &Delta;OCB: OB<sup>2</sup> = OC<sup>2</sup> + BC<sup>2</sup> = (OA + AC)<sup>2</sup> + BC<sup>2</sup><br>R<sup>2</sup> = (P + Q cos &theta;)<sup>2</sup> + (Q sin &theta;)<sup>2</sup> = P<sup>2</sup> + Q<sup>2</sup> cos<sup>2</sup> &theta; + 2PQ cos &theta; + Q<sup>2</sup> sin<sup>2</sup> &theta;<br>R<sup>2</sup> = P<sup>2</sup> + Q<sup>2</sup>(cos<sup>2</sup> &theta; + sin<sup>2</sup> &theta;) + 2PQ cos &theta; = P<sup>2</sup> + Q<sup>2</sup> + 2PQ cos &theta;.<br><b>R = &radic;[P<sup>2</sup> + Q<sup>2</sup> + 2PQ cos &theta;]</b>."
    },
    {
      q: "If A = 2 î + 3 ĵ + 4 k̂ and B = 4 î + 3 ĵ + 2 k̂, find: (a) A • B, (b) Magnitude of A × B.",
      sol: "<b>(a) A &bull; B:</b> (2)(4) + (3)(3) + (4)(2) = 8 + 9 + 8 = <b>25</b>.<br><b>(b) A &times; B:</b><br>| î &nbsp; ĵ &nbsp; k̂ |<br>| 2 &nbsp; 3 &nbsp; 4 |<br>| 4 &nbsp; 3 &nbsp; 2 |<br>= î(6 - 12) - ĵ(4 - 16) + k̂(6 - 12) = -6 î + 12 ĵ - 6 k̂.<br>Magnitude |A &times; B| = &radic;[(-6)<sup>2</sup> + 12<sup>2</sup> + (-6)<sup>2</sup>] = &radic;[36 + 144 + 36] = &radic;216 = <b>6&radic;6 &approx; 14.70</b>."
    },
    {
      q: "Prove that vector cross product is anti-commutative: A × B = - (B × A).",
      sol: "By definition: A &times; B = (A B sin &theta;) n̂<sub>1</sub>, where n̂<sub>1</sub> points in direction determined by right-hand thumb rule curling from A to B.<br>Similarly: B &times; A = (B A sin &theta;) n̂<sub>2</sub>, where n̂<sub>2</sub> points curling from B to A.<br>Since turning from B to A is opposite to turning from A to B, n̂<sub>2</sub> = -n̂<sub>1</sub>.<br>Therefore: B &times; A = - (A B sin &theta;) n̂<sub>1</sub> = - (A &times; B) &rArr; <b>A &times; B = - (B &times; A)</b>."
    },
    {
      q: "Show that for two vectors to be parallel, their corresponding components must be in constant proportion.",
      sol: "Two vectors A and B are parallel if A &times; B = 0.<br>A &times; B = (A<sub>y</sub> B<sub>z</sub> - A<sub>z</sub> B<sub>y</sub>) î + (A<sub>z</sub> B<sub>x</sub> - A<sub>x</sub> B<sub>z</sub>) ĵ + (A<sub>x</sub> B<sub>y</sub> - A<sub>y</sub> B<sub>x</sub>) k̂ = 0.<br>Equating each component to zero:<br>A<sub>y</sub>/B<sub>y</sub> = A<sub>z</sub>/B<sub>z</sub>, A<sub>z</sub>/B<sub>z</sub> = A<sub>x</sub>/B<sub>x</sub>, A<sub>x</sub>/B<sub>x</sub> = A<sub>y</sub>/B<sub>y</sub>.<br>Therefore: <b>" + frac('A<sub>x</sub>', 'B<sub>x</sub>') + " = " + frac('A<sub>y</sub>', 'B<sub>y</sub>') + " = " + frac('A<sub>z</sub>', 'B<sub>z</sub>') + " = \text{Constant}</b>."
    },
    {
      q: "A body starts from rest with acceleration a₁ for time t₁ and then decelerates to rest at rate a₂ in time t₂. If total distance is s, prove that s = ½ a₁ a₂ T² / (a₁ + a₂), where T = t₁ + t₂.",
      sol: "Maximum velocity attained: v<sub>max</sub> = a<sub>1</sub> t<sub>1</sub> = a<sub>2</sub> t<sub>2</sub>.<br>t<sub>1</sub> = v<sub>max</sub> / a<sub>1</sub> and t<sub>2</sub> = v<sub>max</sub> / a<sub>2</sub>.<br>Total time T = t<sub>1</sub> + t<sub>2</sub> = v<sub>max</sub> (1/a<sub>1</sub> + 1/a<sub>2</sub>) = v<sub>max</sub> " + frac('a<sub>1</sub> + a<sub>2</sub>', 'a<sub>1</sub> a<sub>2</sub>') + " &rArr; v<sub>max</sub> = " + frac('a<sub>1</sub> a<sub>2</sub> T', 'a<sub>1</sub> + a<sub>2</sub>') + ".<br>Total distance s = Area of v-t triangle = &frac12; &times; Base &times; Height = &frac12; T v<sub>max</sub>.<br>s = &frac12; T \left(" + frac('a<sub>1</sub> a<sub>2</sub> T', 'a<sub>1</sub> + a<sub>2</sub>') + "\right) = <b>" + frac('1', '2') + " " + frac('a<sub>1</sub> a<sub>2</sub> T<sup>2</sup>', 'a<sub>1</sub> + a<sub>2</sub>') + "</b>."
    },
    {
      q: "A bomb is released from an airplane flying horizontally with speed u at altitude H. Find: (a) Time taken to strike the ground, (b) Horizontal distance traveled, (c) Speed when striking ground.",
      sol: "Horizontal velocity u<sub>x</sub> = u, initial vertical velocity u<sub>y</sub> = 0.<br><b>(a) Time:</b> Vertical motion: H = &frac12; g t<sup>2</sup> &rArr; <b>t = &radic;(2H / g)</b>.<br><b>(b) Horizontal distance:</b> x = u<sub>x</sub> t = <b>u &radic;(2H / g)</b>.<br><b>(c) Striking velocity:</b> v<sub>x</sub> = u, v<sub>y</sub> = &radic;(2gH).<br>Resultant speed: <b>v = &radic;[v<sub>x</sub><sup>2</sup> + v<sub>y</sub><sup>2</sup>] = &radic;(u<sup>2</sup> + 2gH)</b>."
    },
    {
      q: "Find the angle of projection for which the horizontal range of a projectile is equal to its maximum height.",
      sol: "Given: R = H.<br>" + frac('u<sup>2</sup> (2 sin &theta; cos &theta;)', 'g') + " = " + frac('u<sup>2</sup> sin<sup>2</sup> &theta;', '2g') + ".<br>Cancel u<sup>2</sup> / g and sin &theta;: 2 cos &theta; = " + frac('sin &theta;', '2') + " &rArr; sin &theta; / cos &theta; = 4 &rArr; <b>tan &theta; = 4</b>.<br><b>&theta; = tan<sup>-1</sup>(4) &approx; 75.96&deg;</b>."
    },
    {
      q: "If R is the horizontal range for projection angle θ and h₁, h₂ are the maximum heights for complementary angles θ and (90° - θ), prove that R = 4 √(h₁ h₂).",
      sol: "h<sub>1</sub> = " + frac('u<sup>2</sup> sin<sup>2</sup> &theta;', '2g') + " and h<sub>2</sub> = " + frac('u<sup>2</sup> cos<sup>2</sup> &theta;', '2g') + ".<br>Multiply h<sub>1</sub> and h<sub>2</sub>:<br>h<sub>1</sub> h<sub>2</sub> = " + frac('u<sup>4</sup> sin<sup>2</sup> &theta; cos<sup>2</sup> &theta;', '4 g<sup>2</sup>') + " = " + frac('u<sup>4</sup> (2 sin &theta; cos &theta;)<sup>2</sup>', '16 g<sup>2</sup>') + " = " + frac('u<sup>4</sup> sin<sup>2</sup> 2&theta;', '16 g<sup>2</sup>') + ".<br>Taking square root: &radic;(h<sub>1</sub> h<sub>2</sub>) = " + frac('u<sup>2</sup> sin 2&theta;', '4 g') + " = " + frac('R', '4') + ".<br>Therefore: <b>R = 4 &radic;(h<sub>1</sub> h<sub>2</sub>)</b>."
    },
    {
      q: "A projectile passes through two points at the same height h above the ground at times t₁ and t₂. Prove that: (a) t₁ + t₂ = T (time of flight), (b) h = ½ g t₁ t₂.",
      sol: "Vertical equation: h = (u sin &theta;) t - &frac12; g t<sup>2</sup> &rArr; &frac12; g t<sup>2</sup> - (u sin &theta;) t + h = 0 &rArr; t<sup>2</sup> - " + frac('2 u sin &theta;', 'g') + " t + " + frac('2h', 'g') + " = 0.<br>The roots of this quadratic equation are the two passage times t<sub>1</sub> and t<sub>2</sub>.<br><b>(a) Sum of roots:</b> t<sub>1</sub> + t<sub>2</sub> = " + frac('2 u sin &theta;', 'g') + " = <b>T (Total time of flight)</b>.<br><b>(b) Product of roots:</b> t<sub>1</sub> t<sub>2</sub> = " + frac('2h', 'g') + " &rArr; <b>h = &frac12; g t<sub>1</sub> t<sub>2</sub></b>."
    },
    {
      q: "Find the work done by force F = (2 î - 3 ĵ + 4 k̂) N in displacing a body from point A(1, 2, 3) m to point B(4, 5, 6) m.",
      sol: "Displacement vector: &Delta;r = r<sub>B</sub> - r<sub>A</sub> = (4 - 1) î + (5 - 2) ĵ + (6 - 3) k̂ = <b>3 î + 3 ĵ + 3 k̂ m</b>.<br>Work done W = F &bull; &Delta;r = (2)(3) + (-3)(3) + (4)(3) = 6 - 9 + 12 = <b>9 Joules</b>."
    },
    {
      q: "Find the torque vector τ = r × F about the origin for position vector r = (3 î + 2 ĵ + k̂) m and force F = (5 î + 2 ĵ - 7 k̂) N.",
      sol: "&tau; = r &times; F = | î &nbsp; ĵ &nbsp; k̂ |<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 3 &nbsp; 2 &nbsp; 1 |<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 5 &nbsp; 2 &nbsp;-7 |<br>= î[(2)(-7) - (1)(2)] - ĵ[(3)(-7) - (1)(5)] + k̂[(3)(2) - (2)(5)]<br>= î(-14 - 2) - ĵ(-21 - 5) + k̂(6 - 10) = <b>-16 î + 26 ĵ - 4 k̂ N m</b>."
    },
    {
      q: "A swimmer wishes to cross a 500 m wide river flowing at 3 km/h. If his swimming speed in still water is 5 km/h, calculate: (a) Shortest time to cross, (b) Resulting drift downstream.",
      sol: "Width d = 500 m = 0.5 km, v<sub>s</sub> = 5 km/h, v<sub>r</sub> = 3 km/h.<br><b>(a) Shortest time:</b> To cross in minimum time, swimmer must steer strictly perpendicular to flow (along width).<br>t<sub>min</sub> = d / v<sub>s</sub> = 0.5 / 5 = 0.1 hour = <b>6 minutes (360 seconds)</b>.<br><b>(b) Drift downstream:</b> Drift x = v<sub>r</sub> &times; t<sub>min</sub> = 3 km/h &times; 0.1 h = 0.3 km = <b>300 meters</b>."
    },
    {
      q: "Explain why an object moving in a circle with constant speed has non-zero acceleration, while along a straight line constant speed implies zero acceleration.",
      sol: "Acceleration is the time rate of change of the velocity vector: a = dv/dt. Velocity has two components: magnitude (speed) and direction.<br>1. In rectilinear motion, direction is fixed. If speed is constant, dv/dt = 0 (zero acceleration).<br>2. In circular motion, although speed is constant, the spatial direction of velocity changes continuously at every instant. This continuous turning of the velocity vector requires an acceleration directed toward the center: <b>centripetal acceleration a<sub>c</sub> = v<sup>2</sup>/r &ne; 0</b>."
    },
    {
      q: "State the Polygon Law of Vector Addition. How is it applied to determine equilibrium of concurrent forces?",
      sol: "<b>Polygon Law Statement:</b> If a number of vectors are represented in magnitude and direction by the sides of an open polygon taken in the same cyclic order, then their resultant vector is represented in magnitude and direction by the closing side of the polygon taken in the reverse direction.<br><b>Equilibrium Application:</b> If a system of concurrent coplanar forces forms a <b>closed polygon</b> taken in the same cyclic order, the closing side is zero, meaning the net resultant force is identically zero (&Sigma; F = 0), establishing translational equilibrium."
    },
    {
      q: "A particle executes uniform circular motion with frequency 120 rpm on a track of radius 25 cm. Calculate: (a) Angular speed, (b) Linear speed, (c) Centripetal acceleration.",
      sol: "r = 25 cm = 0.25 m, &nu; = 120 rpm = 120 / 60 = <b>2 rev/s (Hz)</b>.<br><b>(a) Angular speed:</b> &omega; = 2&pi; &nu; = 2 &times; 3.1416 &times; 2 = <b>4&pi; rad s<sup>-1</sup> &approx; 12.57 rad s<sup>-1</sup></b>.<br><b>(b) Linear speed:</b> v = r &omega; = 0.25 &times; 4&pi; = &pi; m/s &approx; <b>3.14 m s<sup>-1</sup></b>.<br><b>(c) Centripetal acceleration:</b> a<sub>c</sub> = &omega;<sup>2</sup> r = (4&pi;)<sup>2</sup> &times; 0.25 = 16&pi;<sup>2</sup> &times; 0.25 = 4&pi;<sup>2</sup> &approx; <b>39.48 m s<sup>-2</sup></b>."
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 41}: ${item.q}</h3>
    <div style="background: rgba(142, 45, 226, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Step-by-Step Mathematical Proof:</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getSaQuestions };
