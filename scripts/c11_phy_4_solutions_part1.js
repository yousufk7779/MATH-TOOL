const { themeColor, frac } = require('./c11_phy_4_helpers');

function getVsaQuestions() {
  const qList = [
    {
      q: "Define work done by a constant force in classical mechanics. Is it a scalar or vector quantity?",
      sol: "Work done by a constant force is defined as the scalar (dot) product of the applied force vector and displacement vector: <b>W = F &bull; s = F s cos &theta;</b>.<br>Work is a <b>scalar quantity</b> possessing magnitude and algebraic sign, but no spatial direction."
    },
    {
      q: "State the SI unit and dimensional formula of work and energy.",
      sol: "<b>SI Unit:</b> Joule (J = N m = kg m<sup>2</sup> s<sup>-2</sup>) &bull; <b>Dimensional Formula:</b> [M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]."
    },
    {
      q: "Define the absolute SI unit of work: One Joule (1 J).",
      sol: "<b>One Joule (1 J)</b> of work is defined as the mechanical work performed when a constant force of 1 Newton displaces a body by a distance of 1 meter in the direction of the force."
    },
    {
      q: "Define 1 erg (CGS unit of work) and state its mathematical relationship with 1 Joule.",
      sol: "<b>1 erg</b> is the work done when a force of 1 dyne displaces an object through 1 cm in the direction of the force.<br>1 J = 1 N &times; 1 m = (10<sup>5</sup> dyne) &times; (10<sup>2</sup> cm) = <b>10<sup>7</sup> erg</b>."
    },
    {
      q: "Under what condition is the work done by a force classified as positive? Give an example.",
      sol: "Work done is positive when the angle &theta; between force and displacement is acute (<b>0&deg; &le; &theta; < 90&deg;</b>, so cos &theta; > 0).<br><i>Example:</i> Work done by gravity on a freely falling body (&theta; = 0&deg;, W = +mgh)."
    },
    {
      q: "Under what condition is the work done by a force classified as negative? Give an example.",
      sol: "Work done is negative when the angle &theta; between force and displacement is obtuse (<b>90&deg; < &theta; &le; 180&deg;</b>, so cos &theta; < 0).<br><i>Example:</i> Work done by kinetic friction on a sliding block (&theta; = 180&deg;, W = -f s)."
    },
    {
      q: "State three distinct physical conditions under which the work done by a force is identically zero.",
      sol: "1. <b>Zero Displacement:</b> s = 0 (e.g. pushing a stationary wall).<br>2. <b>Zero Force:</b> F = 0 (e.g. motion in deep space).<br>3. <b>Orthogonal Direction:</b> &theta; = 90&deg; &rArr; cos 90&deg; = 0 (e.g. centripetal force in circular motion)."
    },
    {
      q: "Why is the work done by a porter carrying a suitcase horizontally on his head considered zero against gravity?",
      sol: "The downward gravitational force (mg) acting on the luggage is directed vertically downward, while the porter moves horizontally along the platform (&theta; = 90&deg;). Since cos 90&deg; = 0, work done by gravity is strictly <b>zero</b>."
    },
    {
      q: "Does the Earth perform any work on a satellite moving in a circular orbit around it? Explain.",
      sol: "<b>No.</b> In a circular orbit, the gravitational pull of the Earth acts radially inward toward the center, while the instantaneous displacement is tangential along the orbital path (&theta; = 90&deg;). W = F s cos 90&deg; = <b>0</b>."
    },
    {
      q: "Write the mathematical formula for work done by a variable force F(x) along the x-axis from x_1 to x_2.",
      sol: "The work done by a position-dependent force F(x) is given by the definite integral: <b>W = &int;<sub>x<sub>1</sub></sub><sup>x<sub>2</sub></sup> F(x) dx</b>."
    },
    {
      q: "What physical quantity is represented by the geometric area under a Force-Displacement (F-x) graph?",
      sol: "The geometric area under the Force-Displacement (F-x) curve bounded by the displacement axis represents the <b>total mechanical work done (W)</b>."
    },
    {
      q: "Define Kinetic Energy of a body. State its mathematical formula.",
      sol: "Kinetic Energy is the energy possessed by a body by virtue of its translational motion, measured by the total work done in accelerating it from rest to speed v: <b>K = &frac12; m v<sup>2</sup></b>."
    },
    {
      q: "State the mathematical relation connecting kinetic energy K, linear momentum p, and mass m.",
      sol: "<b>K = " + frac('p<sup>2</sup>', '2 m') + "</b> &bull; Inversely: <b>p = &radic;(2 m K)</b>."
    },
    {
      q: "Can the kinetic energy of an object ever be negative? Justify.",
      sol: "<b>No.</b> Mass m is always positive, and the square of velocity (v<sup>2</sup> = v &bull; v) is mathematically non-negative (v<sup>2</sup> &ge; 0). Hence K = &frac12; m v<sup>2</sup> is strictly <b>zero or positive</b>."
    },
    {
      q: "If the linear momentum of a moving body is doubled, by what factor does its kinetic energy increase?",
      sol: "Since K = p<sup>2</sup> / (2m), if p' = 2p, then K' = (2p)<sup>2</sup> / (2m) = 4 [p<sup>2</sup> / (2m)] = <b>4 K</b>.<br>The kinetic energy increases by a factor of <b>4 (400%)</b>."
    },
    {
      q: "State the Work-Energy Theorem.",
      sol: "The total net work done by all forces (conservative, non-conservative, internal, and external) acting on an object is identically equal to the net change in its kinetic energy: <b>W<sub>net</sub> = &Delta;K = K<sub>f</sub> - K<sub>i</sub></b>."
    },
    {
      q: "Does the Work-Energy Theorem hold true for non-uniform variable forces?",
      sol: "<b>Yes.</b> The Work-Energy Theorem is a universal mathematical theorem derived directly from Newton's Second Law and holds unconditionally for both constant and variable forces."
    },
    {
      q: "Define Power. State its SI base unit and dimensional formula.",
      sol: "Power is defined as the time rate of doing mechanical work: <b>P = dW/dt</b>.<br><b>SI Unit:</b> Watt (W = J s<sup>-1</sup> = kg m<sup>2</sup> s<sup>-3</sup>) &bull; <b>Dimensional Formula:</b> [M<sup>1</sup> L<sup>2</sup> T<sup>-3</sup>]."
    },
    {
      q: "Define the SI unit of power: One Watt (1 W).",
      sol: "<b>One Watt (1 W)</b> is defined as the power of an engine or agent that performs mechanical work at the rate of exactly 1 Joule per second (1 W = 1 J s<sup>-1</sup>)."
    },
    {
      q: "Define Horsepower (hp) and state its numerical equivalent in Watts.",
      sol: "<b>Horsepower (hp)</b> is an imperial engineering unit of power.<br><b>1 hp = 746 Watts (0.746 kW)</b>."
    },
    {
      q: "Express instantaneous power P in terms of force vector F and velocity vector v.",
      sol: "Since dW = F &bull; dr, instantaneous power is the dot product: <b>P = " + frac('dW', 'dt') + " = F &bull; " + frac('dr', 'dt') + " = F &bull; v = F v cos &theta;</b>."
    },
    {
      q: "Define the commercial unit of electrical energy: One Kilowatt-hour (1 kWh), and express it in Joules.",
      sol: "<b>1 kWh</b> is the total electrical energy consumed by a device of power 1 kilowatt operating continuously for 1 hour.<br>1 kWh = (1000 W) &times; (3600 s) = <b>3.6 &times; 10<sup>6</sup> Joules (3.6 MJ)</b>."
    },
    {
      q: "Define Potential Energy. Can potential energy be associated with an isolated single particle in empty space?",
      sol: "Potential energy is the stored energy possessed by a body by virtue of its position, configuration, or spatial strain in a force field.<br><b>No.</b> Potential energy is fundamentally a mutual interaction property of a <b>system of two or more particles</b>."
    },
    {
      q: "Write the formula for gravitational potential energy of a mass m at height h above the Earth's surface (h << R_E).",
      sol: "Taking ground level as zero reference datum: <b>U(h) = m g h</b>."
    },
    {
      q: "State the fundamental calculus relation connecting a one-dimensional conservative force F(x) and its potential energy function U(x).",
      sol: "The conservative force equals the negative spatial derivative (negative gradient) of potential energy: <b>F(x) = -" + frac('dU', 'dx') + "</b>."
    },
    {
      q: "State Hooke's Law for an ideal helical spring.",
      sol: "Within the elastic limit, the restoring force developed in a spring is directly proportional to its displacement from equilibrium and directed opposite to it: <b>F<sub>s</sub> = -k x</b>."
    },
    {
      q: "Define the spring constant (force constant) k. State its SI unit and dimensions.",
      sol: "Spring constant k is the restoring force produced per unit displacement: k = |F<sub>s</sub>| / x.<br><b>SI Unit:</b> N m<sup>-1</sup> &bull; <b>Dimensional Formula:</b> [M<sup>1</sup> L<sup>0</sup> T<sup>-2</sup>]."
    },
    {
      q: "Write the formula for the elastic potential energy stored in a spring stretched or compressed by displacement x.",
      sol: "<b>U<sub>s</sub> = &frac12; k x<sup>2</sup></b>, where k is the spring constant."
    },
    {
      q: "Define a Conservative Force. State two examples.",
      sol: "A force is conservative if the work done by it on a particle depends solely on initial and final positions and is independent of the path taken (&oint; F &bull; dr = 0).<br><i>Examples:</i> <b>Gravitational force</b>, <b>Electrostatic Coulomb force</b>, and <b>Ideal spring force</b>."
    },
    {
      q: "Define a Non-Conservative Force. State two examples.",
      sol: "A force is non-conservative if the work done by it depends explicitly on the path traversed, irreversibly dissipating mechanical energy as heat.<br><i>Examples:</i> <b>Frictional force</b> and <b>Viscous drag</b>."
    },
    {
      q: "What is the net work done by a conservative force in moving a particle around any closed loop?",
      sol: "The net work done by a conservative force around any closed path is <b>identically zero (&oint; F<sub>cons</sub> &bull; dr = 0)</b>."
    },
    {
      q: "State the Principle of Conservation of Mechanical Energy.",
      sol: "The total mechanical energy (sum of kinetic and potential energy: E = K + U) of an isolated system remains strictly constant over time if the internal forces doing work are purely conservative: <b>&Delta;K + &Delta;U = 0 &rArr; E = constant</b>."
    },
    {
      q: "What is the minimum critical velocity at the topmost point of a vertical circular loop of radius L to prevent the string from slackening?",
      sol: "To ensure non-zero tension at the crest (T<sub>top</sub> &ge; 0), the minimum critical velocity is: <b>v<sub>top</sub> = &radic;(g L)</b>."
    },
    {
      q: "What is the minimum speed required at the lowest point of a vertical circle of radius L for a body to loop the full circle?",
      sol: "By conservation of mechanical energy, the minimum speed at the trough must be: <b>v<sub>bottom</sub> = &radic;(5 g L)</b>."
    },
    {
      q: "What is the difference in string tension between the lowest and highest points in vertical circular motion?",
      sol: "The difference in string tension between the trough and crest is strictly an invariant constant: <b>T<sub>bottom</sub> - T<sub>top</sub> = 6 m g</b> (independent of speed!)."
    },
    {
      q: "Define the Coefficient of Restitution (e) in collision physics.",
      sol: "The coefficient of restitution is defined as the ratio of relative velocity of separation to relative velocity of approach along the line of impact: <b>e = (v<sub>2</sub> - v<sub>1</sub>) / (u<sub>1</sub> - u<sub>2</sub>)</b>."
    },
    {
      q: "State the numerical value of the coefficient of restitution e for: (a) Perfectly elastic collision, (b) Perfectly inelastic collision.",
      sol: "<b>(a) Perfectly Elastic Collision:</b> e = <b>1</b>.<br><b>(b) Perfectly Inelastic Collision:</b> e = <b>0</b>."
    },
    {
      q: "What physical quantities are strictly conserved in an Elastic Collision?",
      sol: "In an elastic collision, both <b>Total Linear Momentum</b> and <b>Total Kinetic Energy</b> are strictly conserved."
    },
    {
      q: "What physical quantities are conserved in an Inelastic Collision?",
      sol: "In an inelastic collision, <b>Total Linear Momentum</b> is strictly conserved, but <b>Kinetic Energy is NOT conserved</b> (a fraction is converted into thermal or deformation energy)."
    },
    {
      q: "What occurs when two bodies of identical mass m undergo a head-on elastic collision in one dimension?",
      sol: "When two identical masses collide elastically in 1D, they <b>completely exchange their velocities</b> (v<sub>1</sub> = u<sub>2</sub> and v<sub>2</sub> = u<sub>1</sub>)."
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 1}: ${item.q}</h3>
    <div style="background: rgba(0, 198, 255, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Standard Answer (1 Mark):</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getVsaQuestions };
