const { themeColor, frac } = require('./c11_phy_2_helpers');

function getVsaQuestions() {
  const qList = [
    {
      q: "Explain why rest and motion are termed relative concepts.",
      sol: "An object is at rest or in motion only relative to a chosen observer or frame of reference. A person seated in a moving bus is at rest relative to other passengers, but simultaneously in motion relative to an observer on the roadside. There is no absolute rest in the universe."
    },
    {
      q: "Define a Frame of Reference.",
      sol: "A frame of reference is a coordinate system (such as Cartesian axes X, Y, Z) attached to an observer and equipped with a synchronized clock, relative to which the position and motion of physical bodies are measured."
    },
    {
      q: "Differentiate between an inertial frame and a non-inertial frame of reference.",
      sol: "An <b>inertial frame</b> is either stationary or moving with constant velocity (zero acceleration), where Newton's laws hold valid without fictitious forces. A <b>non-inertial frame</b> is accelerating or rotating, requiring fictitious (pseudo) forces to apply Newton's laws."
    },
    {
      q: "State the mathematical inequality relating Distance and Displacement.",
      sol: "Distance is the total path length, while displacement is the shortest straight-line directed distance. Therefore: <b>Distance &ge; |Displacement|</b>, or " + frac('Distance', '|Displacement|') + " &ge; 1."
    },
    {
      q: "Under what condition is the magnitude of displacement equal to the distance covered?",
      sol: "The magnitude of displacement equals distance if and only if the particle moves strictly along a <b>straight line in a fixed direction without reversing its motion</b>."
    },
    {
      q: "Can the displacement of a moving body be zero even when its distance traveled is non-zero?",
      sol: "<b>Yes.</b> Whenever a moving body returns to its initial starting position (such as completing one full circular lap of radius r, where distance = 2&pi;r), its initial and final coordinates coincide, making <b>displacement = 0</b>."
    },
    {
      q: "Define Instantaneous Velocity and write its mathematical formula.",
      sol: "Instantaneous velocity is the time rate of change of position at a specific instant of time. Mathematically, it is the first derivative of position with respect to time: <b>v = lim(&Delta;t &rarr; 0) " + frac('&Delta;x', '&Delta;t') + " = " + frac('dx', 'dt') + "</b>."
    },
    {
      q: "What does the speedometer of an automobile indicate?",
      sol: "The speedometer of an automobile measures the <b>instantaneous speed</b> of the vehicle at that precise moment in time, expressed in km/h or m/s."
    },
    {
      q: "Can a body possess zero instantaneous velocity and simultaneously non-zero acceleration? Give an example.",
      sol: "<b>Yes.</b> When a body is projected vertically upwards under gravity, at its <b>highest point</b> its instantaneous velocity is momentarily zero (v = 0), but its downward acceleration due to gravity is non-zero: a = g = 9.8 m s<sup>-2</sup>."
    },
    {
      q: "Can a body have a constant speed and still have a varying velocity? Explain.",
      sol: "<b>Yes.</b> In <b>Uniform Circular Motion</b>, the speed remains constant, but the direction of velocity changes continuously at every point along the circular path, meaning the velocity vector is continuously varying."
    },
    {
      q: "Can a body have a constant velocity and a varying speed? Explain.",
      sol: "<b>No.</b> Velocity is a vector composed of magnitude (speed) and direction. If velocity is constant, its magnitude (speed) must strictly be constant."
    },
    {
      q: "What physical quantity is represented by the slope of a position-time (x - t) graph?",
      sol: "The slope (dx/dt) of a position-time graph represents the <b>Instantaneous Velocity</b> of the body."
    },
    {
      q: "What physical quantity is represented by the slope of a velocity-time (v - t) graph?",
      sol: "The slope (dv/dt) of a velocity-time graph represents the <b>Instantaneous Acceleration</b> of the body."
    },
    {
      q: "What physical quantity is given by the area under a velocity-time (v - t) graph?",
      sol: "The area under a velocity-time curve bounded by the time axis represents the <b>Net Displacement</b> of the particle (&Delta;x = &int; v dt)."
    },
    {
      q: "What physical quantity is given by the area under an acceleration-time (a - t) graph?",
      sol: "The area under an acceleration-time graph bounded by the time axis represents the <b>Net Change in Velocity</b> of the body (&Delta;v = &int; a dt)."
    },
    {
      q: "What is negative acceleration called, and when does it occur?",
      sol: "Negative acceleration is termed <b>retardation</b> or <b>deceleration</b>. It occurs whenever the acceleration vector is directed opposite to the direction of velocity, causing speed to decrease."
    },
    {
      q: "Write the formula for the distance traveled by a uniformly accelerated body in the n-th second.",
      sol: "The distance traveled in the n-th second is: <b>s<sub>n</sub> = u + " + frac('a', '2') + " (2n - 1)</b>, where u is initial velocity and a is uniform acceleration."
    },
    {
      q: "Why is electric current treated as a scalar quantity despite possessing direction?",
      sol: "Electric current does not obey the vector laws of addition (triangle/parallelogram law). Current divides and combines at junctions by simple algebraic addition (Kirchhoff's rule), independent of the angle between wires."
    },
    {
      q: "Define a Unit Vector and write its mathematical expression.",
      sol: "A unit vector is a vector having a magnitude of exactly unity (|Â| = 1) pointing in the direction of vector A. It is dimensionless and unitless: <b>Â = " + frac('A', '|A|') + "</b>."
    },
    {
      q: "What are the orthogonal unit vectors along the Cartesian X, Y, and Z axes?",
      sol: "The orthogonal unit vectors are <b>î</b> along positive X-axis, <b>ĵ</b> along positive Y-axis, and <b>k̂</b> along positive Z-axis."
    },
    {
      q: "Define a Null (Zero) Vector. What is its physical significance?",
      sol: "A null vector is a vector having zero magnitude and an indeterminate direction: <b>0</b>. It is physically necessary to define operations such as subtracting a vector from itself (A - A = 0) or the cross product of parallel vectors."
    },
    {
      q: "State the condition for two non-zero vectors A and B to be collinear.",
      sol: "Two vectors are collinear if they act along the same line or parallel lines. Mathematically, <b>A = &lambda; B</b>, where &lambda; is a scalar real number (&theta; = 0&deg; or 180&deg;)."
    },
    {
      q: "State the condition for two non-zero vectors A and B to be perpendicular (orthogonal).",
      sol: "Two vectors are orthogonal if their scalar (dot) product is identically zero: <b>A &bull; B = 0 &rArr; A B cos 90&deg; = 0</b>."
    },
    {
      q: "State the condition for two non-zero vectors A and B to be parallel.",
      sol: "Two vectors are parallel if their vector (cross) product is a null vector: <b>A &times; B = 0 &rArr; A B sin 0&deg; = 0</b>."
    },
    {
      q: "Write the scalar (dot) product formula of two vectors A and B.",
      sol: "The scalar product is: <b>A &bull; B = A B cos &theta;</b>, where &theta; is the angle between A and B ($0 \le \theta \le \pi$)."
    },
    {
      q: "Write the vector (cross) product formula of two vectors A and B.",
      sol: "The vector product is: <b>A &times; B = (A B sin &theta;) n̂</b>, where n̂ is a unit vector perpendicular to the plane containing A and B given by the right-hand rule."
    },
    {
      q: "State the values of î • î, ĵ • ĵ, and k̂ • k̂.",
      sol: "Since the angle between identical unit vectors is 0&deg; (cos 0&deg; = 1): <b>î &bull; î = ĵ &bull; ĵ = k̂ &bull; k̂ = 1</b>."
    },
    {
      q: "State the values of î • ĵ, ĵ • k̂, and k̂ • î.",
      sol: "Since orthogonal axes meet at 90&deg; (cos 90&deg; = 0): <b>î &bull; ĵ = ĵ &bull; k̂ = k̂ &bull; î = 0</b>."
    },
    {
      q: "State the values of î × ĵ, ĵ × k̂, and k̂ × î.",
      sol: "By the right-hand cyclic rule: <b>î &times; ĵ = k̂</b>, <b>ĵ &times; k̂ = î</b>, and <b>k̂ &times; î = ĵ</b>."
    },
    {
      q: "What is the cross product of any vector with itself (A × A)?",
      sol: "Since the angle between a vector and itself is 0&deg; (sin 0&deg; = 0): <b>A &times; A = 0 (Null vector)</b>."
    },
    {
      q: "Define Projectile Motion.",
      sol: "Projectile motion is the two-dimensional parabolic motion of an object projected into space with an initial velocity, moving under the constant downward acceleration of gravity (g) in the absence of air resistance."
    },
    {
      q: "What is the shape of the trajectory of a projectile fired in a gravitational field?",
      sol: "The path or trajectory of a projectile is a <b>Parabola</b> (represented mathematically by the quadratic equation y = Ax - Bx<sup>2</sup>)."
    },
    {
      q: "What is the vertical component of velocity of a projectile at its highest peak?",
      sol: "At the maximum height point, the vertical component of velocity is momentarily zero: <b>v<sub>y</sub> = 0</b>."
    },
    {
      q: "What is the magnitude of velocity of a projectile at its highest point if fired with speed u at angle θ?",
      sol: "At the highest point, only the horizontal velocity component survives: <b>v = v<sub>x</sub> = u cos &theta;</b>."
    },
    {
      q: "What is the angle between the velocity vector and acceleration vector of a projectile at its highest point?",
      sol: "At the highest point, velocity is purely horizontal and acceleration due to gravity is purely vertical downward, making the angle <b>90&deg; (perpendicular)</b>."
    },
    {
      q: "At what angle of projection is the horizontal range of a projectile maximum?",
      sol: "The horizontal range is maximum when sin 2&theta; = 1 &rArr; 2&theta; = 90&deg; &rArr; <b>&theta; = 45&deg;</b>, with value <b>R<sub>max</sub> = u<sup>2</sup> / g</b>."
    },
    {
      q: "What is the relation between two angles of projection that give the same horizontal range for a given launch speed?",
      sol: "The ranges are identical for <b>complementary angles</b>: <b>&theta;</b> and <b>(90&deg; - &theta;)</b> (e.g., 30&deg; and 60&deg; give identical range)."
    },
    {
      q: "Define Uniform Circular Motion (UCM).",
      sol: "Uniform Circular Motion is the motion of a particle along a circular perimeter of radius r at a constant linear speed v (or constant angular velocity &omega;)."
    },
    {
      q: "Write the formula for centripetal acceleration in terms of linear velocity and radius.",
      sol: "Centripetal acceleration: <b>a<sub>c</sub> = " + frac('v<sup>2</sup>', 'r') + " = &omega;<sup>2</sup> r</b>, directed radially inward toward the center of the circular path."
    },
    {
      q: "How much work is done by the centripetal force on a particle executing uniform circular motion?",
      sol: "<b>Zero Joules (W = 0).</b> Centripetal force acts radially inward, which is always perpendicular to the instantaneous tangential displacement (cos 90&deg; = 0 &rArr; dW = F &bull; ds = 0)."
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 1}: ${item.q}</h3>
    <div style="background: rgba(142, 45, 226, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Physical Reasoning:</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getVsaQuestions };
