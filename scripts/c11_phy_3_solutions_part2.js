const { themeColor, frac } = require('./c11_phy_3_helpers');

function getSaQuestions() {
  const qList = [
    {
      q: "A constant retarding force of 50 N is applied to a body of mass 20 kg moving initially with a speed of 15 m/s. How long does the body take to come to rest, and what distance does it travel?",
      sol: "Given: m = 20 kg, u = 15 m/s, v = 0, F = -50 N.<br><b>(a) Acceleration:</b> a = F / m = -50 / 20 = <b>-2.5 m s<sup>-2</sup></b> (retardation = 2.5 m/s²).<br><b>(b) Time to rest:</b> Using v = u + at &rArr; 0 = 15 - 2.5 t &rArr; <b>t = 6 seconds</b>.<br><b>(c) Stopping distance:</b> Using v<sup>2</sup> = u<sup>2</sup> + 2as &rArr; 0 = (15)<sup>2</sup> + 2(-2.5)s &rArr; 5s = 225 &rArr; <b>s = 45 meters</b>."
    },
    {
      q: "A bullet of mass 0.04 kg moving with a speed of 90 m/s enters a heavy wooden block and is stopped after penetrating a distance of 60 cm. Estimate the average resistive force exerted by the block on the bullet.",
      sol: "Given: m = 0.04 kg, u = 90 m/s, v = 0, s = 60 cm = 0.60 m.<br>Using third equation of motion: v<sup>2</sup> = u<sup>2</sup> + 2as<br>0 = (90)<sup>2</sup> + 2 a (0.60) &rArr; 1.2 a = -8100 &rArr; <b>a = -6750 m s<sup>-2</sup></b>.<br><b>Average Resistive Force:</b> F = m a = 0.04 &times; (-6750) = <b>-270 N</b>.<br>The magnitude of the average resistive force is <b>270 Newtons</b>."
    },
    {
      q: "A force F = (6 t² - 4 t) N acts on a body of mass 2 kg initially at rest. Calculate: (a) Impulse imparted between t = 1 s and t = 3 s, (b) Velocity of the body at t = 3 s.",
      sol: "<b>(a) Impulse:</b> J = &int;<sub>1</sub><sup>3</sup> F dt = &int;<sub>1</sub><sup>3</sup> (6 t<sup>2</sup> - 4 t) dt = [2 t<sup>3</sup> - 2 t<sup>2</sup>]<sub>1</sub><sup>3</sup>.<br>At t = 3: 2(27) - 2(9) = 54 - 18 = 36 N s.<br>At t = 1: 2(1) - 2(1) = 0 N s.<br><b>J = 36 - 0 = 36 N s (kg m s<sup>-1</sup>)</b>.<br><b>(b) Velocity at t = 3 s:</b> Since initial velocity at t = 0 is 0: v(t) = " + frac('1', 'm') + " &int;<sub>0</sub><sup>3</sup> (6 t<sup>2</sup> - 4 t) dt = &frac12; [2(27) - 2(9)] = &frac12;(36) = <b>18 m s<sup>-1</sup></b>."
    },
    {
      q: "Prove analytically that Newton's First Law of Motion is contained within Newton's Second Law.",
      sol: "By Newton's Second Law: <b>F = m a</b>.<br>If no net external force acts on the body (F = 0):<br>0 = m a.<br>Since the mass of a physical body cannot be zero (m &ne; 0), the acceleration must vanish: <b>a = 0</b>.<br>Zero acceleration implies: " + frac('dv', 'dt') + " = 0 &rArr; <b>v = constant</b>.<br>1. If the body was initially at rest (v = 0), it remains permanently at rest.<br>2. If the body was moving with velocity v, it continues moving with constant velocity in a straight line.<br>This is precisely the statement of Newton's First Law."
    },
    {
      q: "Prove analytically that Newton's Third Law of Motion can be deduced from Newton's Second Law and the Principle of Conservation of Momentum.",
      sol: "Consider an isolated system consisting of two interacting bodies A and B with no external forces acting on them (F<sub>ext</sub> = 0).<br>Let F<sub>AB</sub> be force exerted on A by B, and F<sub>BA</sub> be force exerted on B by A.<br>Over a small collision time &Delta;t:<br>&bull; Change in momentum of A: &Delta;p<sub>A</sub> = F<sub>AB</sub> &Delta;t.<br>&bull; Change in momentum of B: &Delta;p<sub>B</sub> = F<sub>BA</sub> &Delta;t.<br>Total change in momentum: &Delta;p<sub>total</sub> = &Delta;p<sub>A</sub> + &Delta;p<sub>B</sub> = (F<sub>AB</sub> + F<sub>BA</sub>) &Delta;t.<br>Since F<sub>ext</sub> = 0, by conservation of linear momentum: &Delta;p<sub>total</sub> = 0.<br>(F<sub>AB</sub> + F<sub>BA</sub>) &Delta;t = 0 &rArr; <b>F<sub>AB</sub> = -F<sub>BA</sub></b>.<br>Thus, Action = -Reaction, which is Newton's Third Law."
    },
    {
      q: "A batsman deflects a cricket ball of mass 0.15 kg by an angle of 45° without changing its initial speed of 54 km/h. What is the impulse imparted to the ball?",
      sol: "Mass m = 0.15 kg, speed u = 54 km/h = 54 &times; (5/18) = <b>15 m s<sup>-1</sup></b>.<br>Let incoming trajectory be along x-axis. Deflection angle = 45&deg;.<br>&bull; Initial velocity: v<sub>i</sub> = 15 &icirc;.<br>&bull; Final velocity: v<sub>f</sub> = 15 cos 45&deg; &icirc; + 15 sin 45&deg; &jcirc;.<br>Change in velocity: &Delta;v = 15(cos 45&deg; - 1)&icirc; + 15 sin 45&deg; &jcirc;.<br>Magnitude: |&Delta;v| = 2 u sin(&theta;/2) = 2(15) sin(22.5&deg;) = 30 &times; 0.3827 = 11.48 m/s.<br><b>Impulse imparted:</b> J = m |&Delta;v| = 0.15 &times; 11.48 &approx; <b>1.72 N s (or kg m s<sup>-1</sup>)</b>."
    },
    {
      q: "Explain why a person jumping from a height onto a hard concrete floor sustains severe injuries, whereas jumping onto loose sand or an inflated cushion causes no harm.",
      sol: "When a jumper strikes a concrete floor, the rigid surface does not yield, bringing momentum to zero over an extremely short time interval &Delta;t<sub>1</sub> (~0.01 s).<br>Since Impulse &Delta;p = F<sub>avg</sub> &Delta;t is constant, F<sub>avg</sub> = &Delta;p / &Delta;t.<br>A very small &Delta;t<sub>1</sub> produces an enormous peak impact force that shatters bones.<br>On loose sand or a cushion, the surface yields and compresses, prolonging the impact time &Delta;t<sub>2</sub> by 10 to 50 times. Consequently, F<sub>avg</sub> is reduced to a harmless, survivable level."
    },
    {
      q: "A machine gun fires 240 bullets per minute with a muzzle speed of 500 m/s. If the mass of each bullet is 10 grams, calculate the average force required to hold the gun stationary.",
      sol: "Mass of each bullet: m = 10 g = 0.01 kg.<br>Number of bullets per second: n = 240 / 60 = <b>4 bullets s<sup>-1</sup></b>.<br>Muzzle speed: v = 500 m s<sup>-1</sup>.<br>Momentum carried away per bullet: p = m v = 0.01 &times; 500 = 5 kg m s<sup>-1</sup>.<br>Rate of change of momentum of bullets: " + frac('&Delta;p', '&Delta;t') + " = n &times; (m v) = 4 &times; 5 = <b>20 N</b>.<br>By Newton's Third Law, the bullets exert a backward recoil force of 20 N on the gun.<br>Therefore, the operator must exert a forward force of <b>20 Newtons</b> to hold the gun in place."
    },
    {
      q: "A bomb of mass 30 kg flying with a velocity of 48 m/s explodes into two fragments of masses 18 kg and 12 kg. If the 18 kg fragment is brought to instantaneous rest, find the velocity of the 12 kg fragment.",
      sol: "Total mass M = 30 kg, initial velocity V = 48 m/s.<br>Initial momentum: P<sub>initial</sub> = M V = 30 &times; 48 = <b>1440 kg m s<sup>-1</sup></b>.<br>After explosion: m<sub>1</sub> = 18 kg with v<sub>1</sub> = 0; m<sub>2</sub> = 12 kg with velocity v<sub>2</sub>.<br>Final momentum: P<sub>final</sub> = m<sub>1</sub> v<sub>1</sub> + m<sub>2</sub> v<sub>2</sub> = (18 &times; 0) + 12 v<sub>2</sub> = 12 v<sub>2</sub>.<br>By conservation of linear momentum: P<sub>initial</sub> = P<sub>final</sub> &rArr; 1440 = 12 v<sub>2</sub>.<br><b>v<sub>2</sub> = 1440 / 12 = 120 m s<sup>-1</sup></b> in the original direction of flight."
    },
    {
      q: "A rocket of initial mass 6000 kg ejects fuel exhaust gases at a constant speed of 1000 m/s relative to the rocket at a rate of 16 kg/s. Calculate: (a) Upward thrust on the rocket, (b) Initial acceleration of the rocket (g = 9.8 m/s²).",
      sol: "Given: m<sub>0</sub> = 6000 kg, u = 1000 m/s, " + frac('dm', 'dt') + " = 16 kg/s.<br><b>(a) Upward Thrust:</b> F<sub>thrust</sub> = u " + frac('dm', 'dt') + " = 1000 &times; 16 = <b>16,000 N (16 kN)</b>.<br><b>(b) Initial Acceleration:</b> Gravitational weight W = m<sub>0</sub> g = 6000 &times; 9.8 = 58,800 N.<br>Net force F<sub>net</sub> = F<sub>thrust</sub> - m<sub>0</sub> g.<br>Here F<sub>thrust</sub> (16,000 N) < Weight (58,800 N), so the rocket would not lift off vertically unless thrust exceeds weight. If launched horizontally in deep space: a = F<sub>thrust</sub> / m<sub>0</sub> = 16000 / 6000 = <b>2.67 m s<sup>-2</sup></b>."
    },
    {
      q: "State and derive the condition for equilibrium of three concurrent coplanar forces using the vector triangle method.",
      sol: "Let three concurrent forces F<sub>1</sub>, F<sub>2</sub>, F<sub>3</sub> act at a common point O.<br>For translational equilibrium: <b>F<sub>1</sub> + F<sub>2</sub> + F<sub>3</sub> = 0 &rArr; F<sub>1</sub> + F<sub>2</sub> = -F<sub>3</sub></b>.<br>This states that the resultant of any two forces must be equal in magnitude, collinear, and opposite in direction to the third force.<br><b>Triangle Rule:</b> If three concurrent forces can be represented in magnitude and direction by the three sides of a triangle taken in the same cyclic order, their vector sum is identically zero and the particle is in equilibrium."
    },
    {
      q: "A mass of 10 kg is suspended by a rope from a ceiling. A horizontal force F pulls the rope such that it makes an angle of 30° with the vertical. Calculate: (a) Tension in the rope, (b) Magnitude of the horizontal force F (g = 9.8 m/s²).",
      sol: "Let T be the tension in the rope inclined at 30&deg; to the vertical. Weight W = m g = 10 &times; 9.8 = <b>98 N</b>.<br>Resolving forces on the joint:<br>&bull; Vertical: T cos 30&deg; = W = 98 N &rArr; T(&radic;3 / 2) = 98 &rArr; <b>T = 196 / &radic;3 &approx; 113.16 N</b>.<br>&bull; Horizontal: F = T sin 30&deg; = 113.16 &times; 0.5 = <b>56.58 N</b>."
    },
    {
      q: "Two masses m_1 and m_2 (m_1 > m_2) are connected to the ends of a light, inextensible string passing over a frictionless, massless pulley (Atwood's Machine). Derive expressions for the acceleration of the system and the tension in the string.",
      sol: "Let m<sub>1</sub> accelerate downward with acceleration a, and m<sub>2</sub> accelerate upward with acceleration a. Tension throughout the string is T.<br>&bull; For mass m<sub>1</sub>: m<sub>1</sub> g - T = m<sub>1</sub> a &nbsp;&hellip;(1)<br>&bull; For mass m<sub>2</sub>: T - m<sub>2</sub> g = m<sub>2</sub> a &nbsp;&hellip;(2)<br><b>1. Acceleration:</b> Adding (1) and (2):<br>(m<sub>1</sub> - m<sub>2</sub>)g = (m<sub>1</sub> + m<sub>2</sub>)a &rArr; <b>a = " + frac('m<sub>1</sub> - m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " g</b>.<br><b>2. Tension:</b> Dividing (1) by (2):<br>" + frac('m<sub>1</sub> g - T', 'T - m<sub>2</sub> g') + " = " + frac('m<sub>1</sub>', 'm<sub>2</sub>') + " &rArr; <b>T = " + frac('2 m<sub>1</sub> m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " g</b>."
    },
    {
      q: "In an Atwood machine, two masses of 8 kg and 12 kg are attached to the string. Taking g = 9.8 m/s², find the acceleration of the masses and the tension in the string.",
      sol: "Given: m<sub>1</sub> = 12 kg, m<sub>2</sub> = 8 kg, g = 9.8 m/s².<br><b>Acceleration:</b> a = " + frac('m<sub>1</sub> - m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " g = " + frac('12 - 8', '12 + 8') + " &times; 9.8 = " + frac('4', '20') + " &times; 9.8 = 0.2 &times; 9.8 = <b>1.96 m s<sup>-2</sup></b>.<br><b>Tension:</b> T = " + frac('2 m<sub>1</sub> m<sub>2</sub>', 'm<sub>1</sub> + m<sub>2</sub>') + " g = " + frac('2 &times; 12 &times; 8', '20') + " &times; 9.8 = " + frac('192', '20') + " &times; 9.8 = 9.6 &times; 9.8 = <b>94.08 N</b>."
    },
    {
      q: "Distinguish between static friction, limiting friction, and kinetic friction. Sketch the characteristic curve showing how frictional force varies with applied external force.",
      sol: "1. <b>Static Friction (f_s):</b> Opposes impending motion when body is at rest; self-adjusting from 0 to f<sub>L</sub>.<br>2. <b>Limiting Friction (f_L):</b> Maximum threshold of static friction before sliding begins (f<sub>L</sub> = &mu;<sub>s</sub> N).<br>3. <b>Kinetic Friction (f_k):</b> Opposes actual relative sliding motion; constant and less than f<sub>L</sub> (f<sub>k</sub> = &mu;<sub>k</sub> N).<br><b>Curve Profile:</b> A linear ramp of slope 1 (f<sub>s</sub> = F<sub>applied</sub>) up to a peak sharp crest at f<sub>L</sub>, followed by a slight drop to a flat horizontal plateau representing f<sub>k</sub>."
    },
    {
      q: "State the four empirical Laws of Limiting Friction.",
      sol: "1. The direction of limiting friction is always tangential to the contact surfaces and opposes the direction of impending motion.<br>2. The magnitude of limiting friction f<sub>L</sub> is directly proportional to the normal reaction N between the surfaces: <b>f<sub>L</sub> &prop; N &rArr; f<sub>L</sub> = &mu;<sub>s</sub> N</b>.<br>3. Limiting friction is independent of the apparent macroscopic surface area of contact, provided normal reaction remains constant.<br>4. Limiting friction depends entirely on the material nature and degree of microscopic roughness of the contacting surfaces."
    },
    {
      q: "Define Angle of Friction (&theta;) and Angle of Repose (&alpha;). Prove analytically that Angle of Friction equals Angle of Repose.",
      sol: "<b>Angle of Friction (&theta;):</b> The angle made by the resultant of limiting friction f<sub>L</sub> and normal reaction N with the normal reaction: tan &theta; = f<sub>L</sub> / N = (&mu;<sub>s</sub> N) / N = <b>&mu;<sub>s</sub></b>.<br><b>Angle of Repose (&alpha;):</b> The angle of inclination of a rough incline at which a body placed on it just begins to slide down under gravity:<br>Along the incline: mg sin &alpha; = f<sub>L</sub> = &mu;<sub>s</sub> N.<br>Perpendicular to incline: N = mg cos &alpha;.<br>Dividing: tan &alpha; = " + frac('mg sin &alpha;', 'mg cos &alpha;') + " = " + frac('&mu;<sub>s</sub> N', 'N') + " = <b>&mu;<sub>s</sub></b>.<br>Since tan &theta; = &mu;<sub>s</sub> and tan &alpha; = &mu;<sub>s</sub>, it strictly follows that: <b>&theta; = &alpha;</b>."
    },
    {
      q: "Explain why it is easier to pull a lawn mower than to push it, using vector resolution of forces.",
      sol: "Let force F be applied at angle &theta; to the horizontal.<br><b>1. Pushing:</b> The force is directed downward into the ground. Normal reaction is N = mg + F sin &theta;. Kinetic friction is <b>f<sub>push</sub> = &mu;(mg + F sin &theta;)</b>.<br><b>2. Pulling:</b> The force is directed upward away from the ground. Normal reaction is N = mg - F sin &theta;. Kinetic friction is <b>f<sub>pull</sub> = &mu;(mg - F sin &theta;)</b>.<br>Because N is reduced during pulling, frictional resistance is significantly smaller, making <b>pulling much easier than pushing</b>."
    },
    {
      q: "A block of mass 4 kg rests on a rough horizontal surface with &mu;_s = 0.4 and &mu;_k = 0.3 (g = 9.8 m/s²). Calculate the frictional force and acceleration when applied horizontal force is: (a) 12 N, (b) 20 N.",
      sol: "Normal reaction: N = mg = 4 &times; 9.8 = <b>39.2 N</b>.<br>Limiting friction: f<sub>L</sub> = &mu;<sub>s</sub> N = 0.4 &times; 39.2 = <b>15.68 N</b>.<br>Kinetic friction: f<sub>k</sub> = &mu;<sub>k</sub> N = 0.3 &times; 39.2 = <b>11.76 N</b>.<br><b>(a) Applied Force F = 12 N:</b> Since F < f<sub>L</sub> (12 < 15.68), the block remains at rest. By self-adjusting static friction: <b>f<sub>s</sub> = 12 N</b>, and acceleration <b>a = 0 m s<sup>-2</sup></b>.<br><b>(b) Applied Force F = 20 N:</b> Since F > f<sub>L</sub> (20 > 15.68), the block accelerates. Friction drops to kinetic friction: <b>f<sub>k</sub> = 11.76 N</b>.<br>Net force = 20 - 11.76 = 8.24 N &rArr; a = 8.24 / 4 = <b>2.06 m s<sup>-2</sup></b>."
    },
    {
      q: "A wooden block slides down an inclined plane of inclination 30° with a uniform constant speed. What is the coefficient of kinetic friction between the block and the plane?",
      sol: "When a body moves down an incline at constant speed, its acceleration is zero (a = 0).<br>Net force along incline = mg sin &theta; - f<sub>k</sub> = 0 &rArr; mg sin &theta; = &mu;<sub>k</sub> N.<br>Since N = mg cos &theta;, we have: mg sin &theta; = &mu;<sub>k</sub> mg cos &theta;.<br>&mu;<sub>k</sub> = tan &theta; = tan 30&deg; = 1 / &radic;3 &approx; <b>0.577</b>."
    },
    {
      q: "A block of mass 2 kg is placed on a rough inclined plane making an angle of 45° with the horizontal. If the coefficient of kinetic friction is 0.2, calculate the acceleration down the incline (g = 9.8 m/s²).",
      sol: "Given: m = 2 kg, &theta; = 45&deg;, &mu;<sub>k</sub> = 0.2, g = 9.8 m/s².<br>Acceleration down incline: a = g (sin &theta; - &mu;<sub>k</sub> cos &theta;).<br>sin 45&deg; = cos 45&deg; = 1 / &radic;2 &approx; 0.7071.<br>a = 9.8 &times; (0.7071 - 0.2 &times; 0.7071) = 9.8 &times; 0.7071 &times; (1 - 0.2) = 9.8 &times; 0.7071 &times; 0.8 = <b>5.54 m s<sup>-2</sup></b>."
    },
    {
      q: "Explain why Rolling Friction is vastly smaller than Sliding Friction. How do ball bearings exploit this principle?",
      sol: "<b>Cause of Rolling Friction:</b> When a wheel rolls, it deforms the contact surface, creating a small depression ahead of it. The wheel must climb over this tiny mound, but there is zero relative tangential rubbing between contact surfaces.<br>Sliding friction involves shearing thousands of cold-welded microscopic asperities, whereas rolling involves momentary compressive contact without tearing welds.<br><b>Ball Bearings:</b> Hardened steel balls placed between an axle and outer casing convert sliding contact into pure rolling contact, reducing friction by up to 90%."
    },
    {
      q: "Enumerate three practical methods of reducing friction and two engineering situations where friction is deliberately increased.",
      sol: "<b>Three Methods of Reducing Friction:</b><br>1. <b>Lubrication:</b> Engine oils and grease form fluid films separating metallic asperities.<br>2. <b>Ball Bearings:</b> Converting sliding friction into rolling friction.<br>3. <b>Streamlining:</b> Aerodynamic contouring of aircraft and cars to reduce fluid drag.<br><b>Two Situations where Friction is Increased:</b><br>1. <b>Tire Treads:</b> Grooves on vehicle tires maintain grip and expel water to prevent hydroplaning.<br>2. <b>Brake Pads:</b> High-friction composite pads clamp onto brake discs to stop vehicles."
    },
    {
      q: "Derive the expression for the maximum safe speed with which a vehicle can round an unbanked, level circular curve of radius r without skidding.",
      sol: "On a flat circular road of radius r, vertical forces balance: N = mg.<br>The sole horizontal force directed toward the center is static friction f<sub>s</sub>, which provides the centripetal acceleration:<br>f<sub>s</sub> = " + frac('m v<sup>2</sup>', 'r') + ".<br>To prevent skidding, required friction cannot exceed limiting friction f<sub>L</sub> = &mu;<sub>s</sub> N = &mu;<sub>s</sub> mg:<br>" + frac('m v<sup>2</sup>', 'r') + " &le; &mu;<sub>s</sub> mg &rArr; v<sup>2</sup> &le; &mu;<sub>s</sub> r g.<br><b>Maximum Safe Speed: v<sub>max</sub> = &radic;(&mu;<sub>s</sub> r g)</b>."
    },
    {
      q: "A car rounds an unbanked horizontal curve of radius 50 m on a road with &mu;_s = 0.2. What is the maximum speed in km/h to prevent skidding? (g = 9.8 m/s²)",
      sol: "Given: r = 50 m, &mu;<sub>s</sub> = 0.2, g = 9.8 m/s².<br>v<sub>max</sub> = &radic;(&mu;<sub>s</sub> r g) = &radic;(0.2 &times; 50 &times; 9.8) = &radic;(10 &times; 9.8) = &radic;98 &approx; <b>9.90 m s<sup>-1</sup></b>.<br>In km/h: 9.90 &times; (18/5) = <b>35.64 km/h</b>."
    },
    {
      q: "Why are roads banked at curves? Derive the expression for the Optimum Speed of a vehicle on a banked road without relying on friction.",
      sol: "<b>Need for Banking:</b> On flat curves, centripetal force relies entirely on tire friction, which varies unpredictably with rain, ice, or tire wear. Banking the outer edge creates a horizontal component of normal reaction that directs inward, reducing reliance on friction.<br><b>Optimum Speed:</b> In the absence of friction (&mu; = 0):<br>&bull; N cos &theta; = mg (vertical balance)<br>&bull; N sin &theta; = " + frac('m v<sub>0</sub><sup>2</sup>', 'r') + " (centripetal force)<br>Dividing: tan &theta; = " + frac('v<sub>0</sub><sup>2</sup>', 'rg') + " &rArr; <b>v<sub>0</sub> = &radic;(r g tan &theta;)</b>."
    },
    {
      q: "A circular racetrack of radius 300 m is banked at an angle of 15°. If &mu;_s = 0.2 and g = 9.8 m/s², calculate: (a) Optimum speed, (b) Maximum permissible safe speed.",
      sol: "r = 300 m, &theta; = 15&deg; (tan 15&deg; &approx; 0.2679), &mu;<sub>s</sub> = 0.2, g = 9.8 m/s².<br><b>(a) Optimum Speed:</b> v<sub>0</sub> = &radic;(r g tan &theta;) = &radic;(300 &times; 9.8 &times; 0.2679) = &radic;787.6 = <b>28.06 m s<sup>-1</sup> (101 km/h)</b>.<br><b>(b) Maximum Safe Speed:</b><br>v<sub>max</sub> = &radic;[ r g (" + frac('&mu;<sub>s</sub> + tan &theta;', '1 - &mu;<sub>s</sub> tan &theta;') + ") ]<br>" + frac('0.2 + 0.2679', '1 - 0.2 &times; 0.2679') + " = " + frac('0.4679', '0.9464') + " &approx; 0.4944.<br>v<sub>max</sub> = &radic;(300 &times; 9.8 &times; 0.4944) = &radic;1453.5 = <b>38.12 m s<sup>-1</sup> (137.2 km/h)</b>."
    },
    {
      q: "Explain why a cyclist bends inward while taking a turn. Derive the expression for the angle of lean with the vertical.",
      sol: "A cyclist negotiating a curve must generate an inward centripetal force. If upright, normal reaction from the ground is vertical and cannot provide centripetal force, causing outward tipping. By leaning inward at angle &theta; with the vertical, the ground reaction R tilts inward:<br>&bull; R sin &theta; = " + frac('m v<sup>2</sup>', 'r') + " (centripetal force)<br>&bull; R cos &theta; = mg (vertical weight support)<br>Dividing gives: <b>tan &theta; = " + frac('v<sup>2</sup>', 'rg') + " &rArr; &theta; = tan<sup>-1</sup>(" + frac('v<sup>2</sup>', 'rg') + ")</b>."
    },
    {
      q: "A cyclist speeding at 18 km/h negotiates a circular turn of radius 3 m without slipping. What is the minimum angle of inclination with the vertical? (g = 9.8 m/s²)",
      sol: "Speed: v = 18 km/h = 18 &times; (5/18) = <b>5 m s<sup>-1</sup></b>. Radius: r = 3 m, g = 9.8 m/s².<br>tan &theta; = " + frac('v<sup>2</sup>', 'rg') + " = " + frac('5<sup>2</sup>', '3 &times; 9.8') + " = " + frac('25', '29.4') + " &approx; 0.8503.<br><b>&theta; = tan<sup>-1</sup>(0.8503) &approx; 40.37°</b>."
    },
    {
      q: "A mass of 0.5 kg attached to the end of a string 1.2 m long is whirled in a horizontal circle at 3 revolutions per second. Calculate the tension in the string.",
      sol: "Given: m = 0.5 kg, r = 1.2 m, &nu; = 3 rev/s.<br>Angular speed: &omega; = 2&pi; &nu; = 2 &times; 3.1416 &times; 3 = <b>18.85 rad s<sup>-1</sup></b>.<br>Centripetal force is provided solely by string tension T:<br>T = m &omega;<sup>2</sup> r = 0.5 &times; (18.85)<sup>2</sup> &times; 1.2 = 0.6 &times; 355.3 = <b>213.2 Newtons</b>."
    },
    {
      q: "A person of mass m stands on a weighing machine in an elevator. Derive the apparent weight recorded by the machine when the elevator: (a) Accelerates upward with a, (b) Accelerates downward with a, (c) Falls freely.",
      sol: "The weighing scale records the normal contact reaction N.<br><b>(a) Accelerating Upward with a:</b> Net force is upward: N - mg = ma &rArr; <b>N = m (g + a)</b> (Apparent weight increases).<br><b>(b) Accelerating Downward with a:</b> Net force is downward: mg - N = ma &rArr; <b>N = m (g - a)</b> (Apparent weight decreases).<br><b>(c) Free Fall (a = g):</b> N = m (g - g) = <b>0</b> (Complete state of weightlessness)."
    },
    {
      q: "A 70 kg person stands inside an elevator. Calculate the apparent weight when the elevator: (a) Ascends with acceleration 2 m/s², (b) Descends with acceleration 2 m/s², (c) Descends at constant speed 5 m/s (g = 9.8 m/s²).",
      sol: "Mass m = 70 kg, g = 9.8 m/s².<br><b>(a) Ascending at a = 2 m/s²:</b> N = m(g + a) = 70(9.8 + 2) = 70 &times; 11.8 = <b>826 N</b>.<br><b>(b) Descending at a = 2 m/s²:</b> N = m(g - a) = 70(9.8 - 2) = 70 &times; 7.8 = <b>546 N</b>.<br><b>(c) Constant Speed (a = 0):</b> N = m g = 70 &times; 9.8 = <b>686 N</b> (true weight)."
    },
    {
      q: "Explain why a horse cannot pull a cart and accelerate in deep outer space or on frictionless ice.",
      sol: "To move forward, the horse must push backward against the ground with its hooves. By Newton's Third Law, the ground reacts with an equal and opposite forward reaction force R. On frictionless ice or in empty space, no horizontal ground reaction can be developed (R = 0), making forward acceleration impossible."
    },
    {
      q: "Why does a heavy rifle kick back with noticeably less severity than a light pistol firing an identical bullet?",
      sol: "By conservation of linear momentum, recoil velocity is V<sub>R</sub> = -(m/M)v. Because the mass M of a heavy rifle is much greater than that of a lightweight pistol, its recoil velocity V<sub>R</sub> is much smaller. Consequently, the recoil kinetic energy delivered to the shooter's shoulder (&frac12; M V<sub>R</sub><sup>2</sup> = p<sup>2</sup> / 2M) is substantially less."
    },
    {
      q: "A 1000 kg car moving at 72 km/h crashes into a concrete wall and comes to a halt in 0.05 seconds. Calculate the average force exerted on the vehicle and the total impulse delivered.",
      sol: "Mass m = 1000 kg, initial speed u = 72 km/h = <b>20 m s<sup>-1</sup></b>, final v = 0, &Delta;t = 0.05 s.<br><b>Impulse:</b> J = &Delta;p = m(0 - u) = 1000 &times; (-20) = <b>-20,000 N s</b> (Magnitude = 20,000 N s).<br><b>Average Force:</b> F<sub>avg</sub> = J / &Delta;t = -20000 / 0.05 = <b>-400,000 N (-400 kN)</b>."
    },
    {
      q: "Explain how conservation of momentum applies to the recoil of an artillery cannon, and why an artillery crew stands clear of the gun tube.",
      sol: "Before discharge, total momentum is zero. When the heavy shell is propelled forward with immense velocity, the massive cannon tube recoils backward with velocity V<sub>R</sub> = -(m/M)v to keep total momentum zero. Modern artillery uses hydraulic recoil buffers to absorb this backward stroke, but any crew standing behind the recoiling breech would be crushed."
    },
    {
      q: "Three concurrent coplanar forces act on a body: F_1 = (2 î + 3 ĵ) N, F_2 = (-5 î + ĵ) N, and F_3. If the body is in equilibrium, find the magnitude and direction of F_3.",
      sol: "For translational equilibrium: F<sub>1</sub> + F<sub>2</sub> + F<sub>3</sub> = 0.<br>F<sub>3</sub> = -(F<sub>1</sub> + F<sub>2</sub>) = -[(2 - 5)&icirc; + (3 + 1)&jcirc;] = -[-3 &icirc; + 4 &jcirc;] = <b>3 &icirc; - 4 &jcirc; N</b>.<br><b>Magnitude:</b> |F<sub>3</sub>| = &radic;[3<sup>2</sup> + (-4)<sup>2</sup>] = &radic;[9 + 16] = <b>5 Newtons</b>.<br><b>Direction:</b> &theta; = tan<sup>-1</sup>(-4/3) &approx; -53.13&deg; (in fourth quadrant)."
    },
    {
      q: "What is lubrication? Distinguish between thick-film (hydrodynamic) lubrication and thin-film (boundary) lubrication.",
      sol: "<b>Lubrication</b> is the introduction of a substance between moving surfaces to reduce friction and wear.<br>&bull; <b>Thick-Film Lubrication:</b> A continuous thick viscous fluid layer completely separates solid surfaces so asperities never touch; friction depends solely on lubricant fluid viscosity.<br>&bull; <b>Thin-Film (Boundary) Lubrication:</b> A microscopic molecular layer adsorbs onto metal surfaces; some asperity contact occurs, but cold-welding is substantially prevented."
    },
    {
      q: "A car of mass 1200 kg travels around an unbanked circular curve of radius 80 m at 54 km/h. Find the centripetal force required and the minimum coefficient of friction needed.",
      sol: "m = 1200 kg, r = 80 m, v = 54 km/h = <b>15 m s<sup>-1</sup></b>, g = 9.8 m/s².<br><b>Centripetal Force:</b> F<sub>c</sub> = " + frac('m v<sup>2</sup>', 'r') + " = " + frac('1200 &times; (15)<sup>2</sup>', '80') + " = 15 &times; 225 = <b>3375 Newtons</b>.<br><b>Minimum Friction Coefficient:</b> &mu;<sub>s</sub> = " + frac('v<sup>2</sup>', 'rg') + " = " + frac('225', '80 &times; 9.8') + " = " + frac('225', '784') + " &approx; <b>0.287</b>."
    },
    {
      q: "Explain why railway tracks are banked (superelevation), and write the formula for the height h by which the outer rail is elevated above the inner rail.",
      sol: "When a train negotiates a curve, centripetal force is required. If rails are level, the wheel flanges press hard against the outer rail, causing severe rail wear and danger of derailment. By elevating the outer rail by height h across track gauge width G, the normal reaction tilts inward:<br>tan &theta; = " + frac('h', 'G') + " = " + frac('v<sup>2</sup>', 'rg') + " &rArr; <b>h = " + frac('G v<sup>2</sup>', 'rg') + "</b>."
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 41}: ${item.q}</h3>
    <div style="background: rgba(255, 138, 101, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Step-by-Step Proof:</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getSaQuestions };
