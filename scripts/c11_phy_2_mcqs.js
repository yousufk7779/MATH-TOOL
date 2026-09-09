function getMcqs() {
  return [
    {
      id: "c11-phy-2-mcq-1",
      question: "Which of the following physical quantities can be negative, zero, or positive depending on the direction of travel?",
      options: [
        "A):   Displacement",
        "B):   Distance traversed",
        "C):   Average speed",
        "D):   Path length"
      ],
      correctAnswer: "a",
      explanation: "Displacement is a vector quantity that accounts for spatial direction; hence it can be positive, negative, or zero. Distance and speed are scalar magnitudes and can never be negative."
    },
    {
      id: "c11-phy-2-mcq-2",
      question: "The area under a Velocity-Time (v-t) graph over a given time interval represents:",
      options: [
        "A):   Instantaneous acceleration",
        "B):   Total displacement of the object",
        "C):   Average force acting on the body",
        "D):   Rate of change of acceleration (jerk)"
      ],
      correctAnswer: "b",
      explanation: "Since displacement s = &int; v dt, the geometric area under the velocity-time curve bounded by the time axis represents the total displacement."
    },
    {
      id: "c11-phy-2-mcq-3",
      question: "What physical quantity is represented by the slope of the tangent to a Position-Time (x-t) curve at any given instant?",
      options: [
        "A):   Instantaneous acceleration",
        "B):   Average momentum",
        "C):   Instantaneous velocity",
        "D):   Total distance covered"
      ],
      correctAnswer: "c",
      explanation: "By definition, the first derivative of position with respect to time dx/dt is the instantaneous velocity, which corresponds to the slope of the tangent to the x-t graph."
    },
    {
      id: "c11-phy-2-mcq-4",
      question: "A ball is thrown vertically upward into the air. At the highest point of its trajectory, which statement is true?",
      options: [
        "A):   Both its velocity and acceleration are zero",
        "B):   Its velocity is non-zero, but acceleration is zero",
        "C):   Its acceleration points upward",
        "D):   Its velocity is momentarily zero, while acceleration is g downwards"
      ],
      correctAnswer: "d",
      explanation: "At the topmost peak, vertical velocity momentarily reverses direction and equals zero (v = 0), but the gravitational acceleration g continues to act downward unabated (a = 9.8 m s<sup>-2</sup> downward)."
    },
    {
      id: "c11-phy-2-mcq-5",
      question: "Which of the following conditions guarantees that two non-zero vectors A and B are mutually perpendicular?",
      options: [
        "A):   A &bull; B = 0",
        "B):   A &times; B = 0",
        "C):   |A + B| = |A| + |B|",
        "D):   A &bull; B = |A| |B|"
      ],
      correctAnswer: "a",
      explanation: "Since A &bull; B = A B cos &theta;, for non-zero vectors, A &bull; B = 0 implies cos &theta; = 0, which means &theta; = 90&deg; (the vectors are orthogonal)."
    },
    {
      id: "c11-phy-2-mcq-6",
      question: "A unit vector has a numerical magnitude of:",
      options: [
        "A):   Zero",
        "B):   Exactly 1 (with no physical units)",
        "C):   Equal to the magnitude of the original vector",
        "D):   Variable depending on coordinate axes"
      ],
      correctAnswer: "b",
      explanation: "A unit vector is defined as a dimensionless vector with a magnitude of exactly unity (1), serving solely to specify spatial direction in coordinate geometry."
    },
    {
      id: "c11-phy-2-mcq-7",
      question: "For a projectile launched on level ground, what launch angle produces the maximum possible horizontal range?",
      options: [
        "A):   30&deg;",
        "B):   60&deg;",
        "C):   45&deg;",
        "D):   90&deg;"
      ],
      correctAnswer: "c",
      explanation: "Horizontal range is R = (u<sup>2</sup> sin 2&theta;) / g. The term sin 2&theta; achieves its maximum value of 1 when 2&theta; = 90&deg;, meaning &theta; = 45&deg;."
    },
    {
      id: "c11-phy-2-mcq-8",
      question: "During ideal projectile motion (neglecting air drag), which component of velocity remains strictly constant throughout the flight?",
      options: [
        "A):   Vertical component of velocity",
        "B):   Total velocity vector",
        "C):   Magnitude of velocity (speed)",
        "D):   Horizontal component of velocity"
      ],
      correctAnswer: "d",
      explanation: "Since gravity acts exclusively in the downward vertical direction (a<sub>y</sub> = -g) and there are no horizontal forces (a<sub>x</sub> = 0), the horizontal velocity u<sub>x</sub> = u cos &theta; remains strictly constant."
    },
    {
      id: "c11-phy-2-mcq-9",
      question: "In uniform circular motion (UCM), what is the direction of the acceleration vector at any instant?",
      options: [
        "A):   Radially inward toward the center of the circular orbit",
        "B):   Radially outward away from the center",
        "C):   Tangential along the direction of velocity",
        "D):   Perpendicular to the orbital plane"
      ],
      correctAnswer: "a",
      explanation: "In uniform circular motion, the speed is constant so tangential acceleration is zero. The centripetal acceleration a<sub>c</sub> = v<sup>2</sup>/r acts purely radially inward toward the center of curvature."
    },
    {
      id: "c11-phy-2-mcq-10",
      question: "Two bullets are fired simultaneously from the same height: one is fired horizontally with high speed, and the other is simply dropped vertically from rest. Neglecting air resistance, which hits the flat ground first?",
      options: [
        "A):   The bullet fired horizontally",
        "B):   Both bullets strike the ground at the exact same instant",
        "C):   The dropped bullet strikes first",
        "D):   It depends on the relative masses of the bullets"
      ],
      correctAnswer: "b",
      explanation: "Both bullets have zero initial vertical velocity (u<sub>y</sub> = 0) and experience identical downward gravitational acceleration g. Therefore, their vertical flight times t = &radic;(2h/g) are identical."
    },
    {
      id: "c11-phy-2-mcq-11",
      question: "If the cross product of two non-zero vectors A &times; B = 0, what does this imply about their spatial relationship?",
      options: [
        "A):   The vectors are mutually orthogonal (90&deg;)",
        "B):   The vectors must have identical magnitudes",
        "C):   The vectors are collinear (parallel or anti-parallel)",
        "D):   The vectors form the diagonals of a square"
      ],
      correctAnswer: "c",
      explanation: "|A &times; B| = A B sin &theta;. For non-zero vectors, sin &theta; = 0 implies &theta; = 0&deg; or 180&deg;, proving the vectors are collinear (parallel or anti-parallel)."
    },
    {
      id: "c11-phy-2-mcq-12",
      question: "A car covers the first half of a total distance at 40 km/h and the remaining second half at 60 km/h. What is its average speed for the entire journey?",
      options: [
        "A):   50 km/h",
        "B):   45 km/h",
        "C):   52 km/h",
        "D):   48 km/h"
      ],
      correctAnswer: "d",
      explanation: "For equal distance intervals, average speed is the harmonic mean: v<sub>avg</sub> = 2 v<sub>1</sub> v<sub>2</sub> / (v<sub>1</sub> + v<sub>2</sub>) = 2(40)(60) / (40 + 60) = 4800 / 100 = 48 km/h."
    },
    {
      id: "c11-phy-2-mcq-13",
      question: "The displacement x of a particle is given by x = 4 t&sup2; - 16 t + 5. At what instant does the particle momentarily come to rest?",
      options: [
        "A):   t = 2 s",
        "B):   t = 4 s",
        "C):   t = 0.5 s",
        "D):   t = 1 s"
      ],
      correctAnswer: "a",
      explanation: "Instantaneous velocity v = dx/dt = 8t - 16. Setting v = 0 gives 8t - 16 = 0 &rArr; t = 2 seconds."
    },
    {
      id: "c11-phy-2-mcq-14",
      question: "A body dropped from rest falls freely under gravity. What is the ratio of the distances fallen during the 1st, 2nd, and 3rd seconds of its motion?",
      options: [
        "A):   1 : 2 : 3",
        "B):   1 : 3 : 5",
        "C):   1 : 4 : 9",
        "D):   1 : &radic;2 : &radic;3"
      ],
      correctAnswer: "b",
      explanation: "By Galileo's Law of Odd Numbers, distance traversed in the n-th second from rest is s<sub>n</sub> = (g/2)(2n - 1), yielding the consecutive odd integer ratio 1 : 3 : 5."
    },
    {
      id: "c11-phy-2-mcq-15",
      question: "Which of the following pairs of projection angles with the horizontal yields the EXACT same horizontal range for a given initial velocity?",
      options: [
        "A):   20&deg; and 80&deg;",
        "B):   40&deg; and 60&deg;",
        "C):   35&deg; and 55&deg;",
        "D):   15&deg; and 65&deg;"
      ],
      correctAnswer: "c",
      explanation: "Horizontal range is identical for complementary angles (&theta; and 90&deg; - &theta;). Here, 35&deg; + 55&deg; = 90&deg;, so they yield identical ranges."
    },
    {
      id: "c11-phy-2-mcq-16",
      question: "If the maximum height H and horizontal range R of an oblique projectile are related by R = 2H, what is the angle of projection &theta;?",
      options: [
        "A):   45&deg;",
        "B):   30&deg;",
        "C):   60&deg;",
        "D):   tan<sup>-1</sup>(2) &approx; 63.4&deg;"
      ],
      correctAnswer: "d",
      explanation: "Using the master relation tan &theta; = 4H / R: with R = 2H, tan &theta; = 4H / (2H) = 2, so &theta; = tan<sup>-1</sup>(2) &approx; 63.43&deg;."
    },
    {
      id: "c11-phy-2-mcq-17",
      question: "Two vectors A and B have magnitudes 3 and 4, and their resultant has magnitude 5. What is the dot product A &bull; B?",
      options: [
        "A):   0",
        "B):   12",
        "C):   6",
        "D):   7"
      ],
      correctAnswer: "a",
      explanation: "Since R<sup>2</sup> = 5<sup>2</sup> = 25, and A<sup>2</sup> + B<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25, we have R<sup>2</sup> = A<sup>2</sup> + B<sup>2</sup>, which means &theta; = 90&deg; (Pythagorean triplet). Thus A &bull; B = A B cos 90&deg; = 0."
    },
    {
      id: "c11-phy-2-mcq-18",
      question: "A train of length 150 m moving at 54 km/h overtakes another train of length 100 m moving in the same direction at 36 km/h. How long does the overtaking take?",
      options: [
        "A):   30 seconds",
        "B):   50 seconds",
        "C):   25 seconds",
        "D):   10 seconds"
      ],
      correctAnswer: "b",
      explanation: "Total distance L = 150 + 100 = 250 m. Relative speed in same direction = 54 - 36 = 18 km/h = 18 &times; (5/18) = 5 m/s. Time t = 250 / 5 = 50 seconds."
    },
    {
      id: "c11-phy-2-mcq-19",
      question: "A stone tied to the end of an 80 cm string is whirled in a horizontal circle at constant speed. If it completes 14 revolutions in 22 seconds, what is its centripetal acceleration? (&pi; &approx; 22/7)",
      options: [
        "A):   19.6 m s<sup>-2</sup>",
        "B):   9.8 m s<sup>-2</sup>",
        "C):   12.8 m s<sup>-2</sup>",
        "D):   15.4 m s<sup>-2</sup>"
      ],
      correctAnswer: "c",
      explanation: "Frequency &nu; = 14 / 22 Hz. &omega; = 2&pi; &nu; = 2(22/7)(14/22) = 4 rad/s. Centripetal acceleration a<sub>c</sub> = &omega;<sup>2</sup> r = (4)<sup>2</sup> &times; 0.8 = 16 &times; 0.8 = 12.8 m s<sup>-2</sup>."
    },
    {
      id: "c11-phy-2-mcq-20",
      question: "The position vector of a particle is r(t) = (3 t &icirc; + 2 t&sup2; &jcirc; + 5 k̂) m. What is the magnitude of its acceleration at t = 3 s?",
      options: [
        "A):   12 m s<sup>-2</sup>",
        "B):   8 m s<sup>-2</sup>",
        "C):   6 m s<sup>-2</sup>",
        "D):   4 m s<sup>-2</sup>"
      ],
      correctAnswer: "d",
      explanation: "Velocity v(t) = dr/dt = 3 &icirc; + 4t &jcirc;. Acceleration a(t) = dv/dt = 4 &jcirc;. Magnitude |a| = 4 m s<sup>-2</sup> at all times (uniform acceleration)."
    },
    {
      id: "c11-phy-2-mcq-21",
      question: "Rain is falling vertically downward at 12 m/s, and a cyclist rides horizontally at 5 m/s. At what speed does the rain strike the cyclist?",
      options: [
        "A):   13 m s<sup>-1</sup>",
        "B):   17 m s<sup>-1</sup>",
        "C):   7 m s<sup>-1</sup>",
        "D):   11.9 m s<sup>-1</sup>"
      ],
      correctAnswer: "a",
      explanation: "Relative velocity vector is v<sub>rc</sub> = v<sub>r</sub> - v<sub>c</sub>. Since vectors are orthogonal, magnitude is |v<sub>rc</sub>| = &radic;[12<sup>2</sup> + 5<sup>2</sup>] = &radic;[144 + 25] = &radic;169 = 13 m s<sup>-1</sup>."
    },
    {
      id: "c11-phy-2-mcq-22",
      question: "What is the angle between vectors A = &icirc; + &jcirc; and B = &icirc; - &jcirc;?",
      options: [
        "A):   45&deg;",
        "B):   90&deg;",
        "C):   0&deg;",
        "D):   180&deg;"
      ],
      correctAnswer: "b",
      explanation: "A &bull; B = (1)(1) + (1)(-1) = 1 - 1 = 0. Since the dot product is zero and neither vector is null, the angle between them is strictly 90&deg;."
    },
    {
      id: "c11-phy-2-mcq-23",
      question: "A projectile has a flight time T and horizontal range R. What is its initial horizontal velocity component u_x?",
      options: [
        "A):   g T / 2",
        "B):   2 R / T",
        "C):   R / T",
        "D):   &radic;(g R)"
      ],
      correctAnswer: "c",
      explanation: "Because horizontal acceleration is zero (a<sub>x</sub> = 0), horizontal range is simply R = u<sub>x</sub> &times; T, which gives u<sub>x</sub> = R / T."
    },
    {
      id: "c11-phy-2-mcq-24",
      question: "A particle starts from rest and moves with constant acceleration along a straight line. If it covers distance s_1 in the first 10 seconds and additional distance s_2 in the next 10 seconds, what is the relation between s_1 and s_2?",
      options: [
        "A):   s<sub>2</sub> = s<sub>1</sub>",
        "B):   s<sub>2</sub> = 2 s<sub>1</sub>",
        "C):   s<sub>2</sub> = 4 s<sub>1</sub>",
        "D):   s<sub>2</sub> = 3 s<sub>1</sub>"
      ],
      correctAnswer: "d",
      explanation: "s<sub>1</sub> = &frac12; a (10)<sup>2</sup> = 50a. Total distance in 20 s is s<sub>total</sub> = &frac12; a (20)<sup>2</sup> = 200a. Therefore s<sub>2</sub> = s<sub>total</sub> - s<sub>1</sub> = 200a - 50a = 150a = 3(50a) = 3 s<sub>1</sub>."
    },
    {
      id: "c11-phy-2-mcq-25",
      question: "Which of the following physical quantities is an axial vector (pseudovector)?",
      options: [
        "A):   Linear velocity",
        "B):   Linear acceleration",
        "C):   Linear momentum",
        "D):   Angular velocity"
      ],
      correctAnswer: "d",
      explanation: "Angular velocity (&omega;) is an axial vector pointing along the axis of rotation whose spatial sign is governed by the Right-Hand Rule convention, unlike polar vectors (linear velocity, acceleration, momentum) which point along the direction of motion."
    }
  ];
}

module.exports = { getMcqs };
