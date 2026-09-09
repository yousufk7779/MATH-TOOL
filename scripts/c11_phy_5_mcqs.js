const c11Phy5Mcqs = [
  {
    id: "c11-phy-5-mcq-1",
    question: "The centre of mass of a physical body:",
    options: [
      "A):   Must always lie strictly inside the material of the body",
      "B):   Must always lie on the surface of the body",
      "C):   May lie inside or outside the material of the body",
      "D):   Always coincides with the geometric origin of coordinates"
    ],
    correctAnswer: "c",
    explanation: "For hollow or annular bodies (such as a uniform circular ring or a hollow sphere), the centre of mass lies at the geometric centre in empty space where no material exists."
  },
  {
    id: "c11-phy-5-mcq-2",
    question: "The centre of mass of a system of particles accelerates under the action of:",
    options: [
      "A):   External forces alone",
      "B):   Internal forces alone",
      "C):   Both internal and external forces equally",
      "D):   Gravitational force only"
    ],
    correctAnswer: "a",
    explanation: "Internal interaction forces cancel in pairs according to Newton's Third Law (F_ij = -F_ji). Consequently, only net external forces can accelerate the centre of mass."
  },
  {
    id: "c11-phy-5-mcq-3",
    question: "Two particles of masses 1 kg and 3 kg are separated by 4 m. The distance of the centre of mass from the 1 kg particle is:",
    options: [
      "A):   1 m",
      "B):   2 m",
      "C):   3 m",
      "D):   4 m"
    ],
    correctAnswer: "c",
    explanation: "The centre of mass divides the line in the inverse ratio of masses: r_1 = [m_2 / (m_1 + m_2)] d = [3 / (1 + 3)] * 4 = 3 m."
  },
  {
    id: "c11-phy-5-mcq-4",
    question: "A thin uniform rod of length L has its centre of mass located at:",
    options: [
      "A):   L / 4 from either end",
      "B):   L / 2 from either end",
      "C):   2L / 3 from either end",
      "D):   L / 3 from either end"
    ],
    correctAnswer: "b",
    explanation: "For a uniform rod of constant linear density, the centre of mass lies at its geometric midpoint, L/2 from either end."
  },
  {
    id: "c11-phy-5-mcq-5",
    question: "The dimensional formula of torque is identical to that of:",
    options: [
      "A):   Linear Momentum",
      "B):   Force",
      "C):   Angular Momentum",
      "D):   Work or Energy"
    ],
    correctAnswer: "d",
    explanation: "Both torque and work have the dimensional formula [M L<sup>2</sup> T<sup>-2</sup>], though torque is an axial vector cross product (N m) and work is a scalar dot product (J)."
  },
  {
    id: "c11-phy-5-mcq-6",
    question: "A force F produces maximum torque about a pivot when the angle between position vector r and force F is:",
    options: [
      "A):   90°",
      "B):   0°",
      "C):   45°",
      "D):   180°"
    ],
    correctAnswer: "a",
    explanation: "Torque magnitude is tau = r F sin(theta). Since sin(theta) reaches its maximum value of 1 at theta = 90°, torque is greatest when force is perpendicular to position vector."
  },
  {
    id: "c11-phy-5-mcq-7",
    question: "What is the net translational force exerted by a couple on a rigid body?",
    options: [
      "A):   Positive infinite",
      "B):   Strictly Zero",
      "C):   2F",
      "D):   F / 2"
    ],
    correctAnswer: "b",
    explanation: "A couple consists of two equal and opposite forces (F + (-F) = 0). Thus, it imparts pure rotation with zero net translational acceleration."
  },
  {
    id: "c11-phy-5-mcq-8",
    question: "The time rate of change of total angular momentum of a system equals the:",
    options: [
      "A):   Net linear momentum",
      "B):   Total kinetic energy",
      "C):   Net external force",
      "D):   Net external torque"
    ],
    correctAnswer: "d",
    explanation: "By rotational Newton's second law, tau_ext = dL/dt. The time rate of change of angular momentum equals the net external torque."
  },
  {
    id: "c11-phy-5-mcq-9",
    question: "An ice skater pulls her arms inward during a spin and rotates faster because:",
    options: [
      "A):   Her angular momentum increases",
      "B):   Her moment of inertia decreases while angular momentum is conserved",
      "C):   Frictional torque from the ice spins her",
      "D):   Her mass decreases"
    ],
    correctAnswer: "b",
    explanation: "Pulling arms inward brings mass closer to the axis, reducing moment of inertia I. Because angular momentum L = I*omega is conserved, omega must increase."
  },
  {
    id: "c11-phy-5-mcq-10",
    question: "The SI unit of angular momentum is:",
    options: [
      "A):   J s (Joule-second)",
      "B):   N m / s",
      "C):   kg m / s",
      "D):   Watt s<sup>2</sup>"
    ],
    correctAnswer: "a",
    explanation: "L = r * p, which gives units of m * (kg m/s) = kg m<sup>2</sup> s<sup>-1</sup> = J s."
  },
  {
    id: "c11-phy-5-mcq-11",
    question: "For a rigid body to be in complete mechanical equilibrium, which of the following is required?",
    options: [
      "A):   Only sum of forces vanishes",
      "B):   Only sum of torques vanishes",
      "C):   Both sum of forces and sum of torques must vanish",
      "D):   Neither force nor torque needs to vanish"
    ],
    correctAnswer: "c",
    explanation: "Complete equilibrium requires both translational equilibrium (sum of F = 0) and rotational equilibrium (sum of tau = 0) simultaneously."
  },
  {
    id: "c11-phy-5-mcq-12",
    question: "The moment of inertia of a rigid body does NOT depend on its:",
    options: [
      "A):   Mass",
      "B):   Distribution of mass relative to axis",
      "C):   Position of axis of rotation",
      "D):   Angular velocity of rotation"
    ],
    correctAnswer: "d",
    explanation: "Moment of inertia I = sum(m_i * r_i<sup>2</sup>) depends solely on mass, geometry, and rotational axis location, entirely independent of angular speed omega."
  },
  {
    id: "c11-phy-5-mcq-13",
    question: "The radius of gyration of a circular ring of radius R about its central symmetry axis is:",
    options: [
      "A):   R",
      "B):   R / 2",
      "C):   R / √2",
      "D):   2R"
    ],
    correctAnswer: "a",
    explanation: "For a ring, all mass elements are at distance R from the central axis: I = M R<sup>2</sup> = M k<sup>2</sup>, which means k = R."
  },
  {
    id: "c11-phy-5-mcq-14",
    question: "The moment of inertia of a uniform circular disc of mass M and radius R about its central perpendicular axis is:",
    options: [
      "A):   M R<sup>2</sup>",
      "B):   1/2 M R<sup>2</sup>",
      "C):   1/4 M R<sup>2</sup>",
      "D):   2/5 M R<sup>2</sup>"
    ],
    correctAnswer: "b",
    explanation: "Integrating concentric annular rings gives I = 1/2 M R<sup>2</sup> for a uniform circular disc about its central symmetry axis."
  },
  {
    id: "c11-phy-5-mcq-15",
    question: "The moment of inertia of a uniform solid sphere of mass M and radius R about a diameter is:",
    options: [
      "A):   1/2 M R<sup>2</sup>",
      "B):   2/3 M R<sup>2</sup>",
      "C):   2/5 M R<sup>2</sup>",
      "D):   M R<sup>2</sup>"
    ],
    correctAnswer: "c",
    explanation: "For a uniform solid sphere rotating about any diameter passing through its centre, I = 2/5 M R<sup>2</sup>."
  },
  {
    id: "c11-phy-5-mcq-16",
    question: "A force F = (4i + 5j) N acts at a point r = (2i + 3j) m. The torque about the origin is:",
    options: [
      "A):   -2i N m",
      "B):   -2k N m",
      "C):   -2j N m",
      "D):   +2k N m"
    ],
    correctAnswer: "b",
    explanation: "tau = r x F = (2i + 3j) x (4i + 5j) = 10(i x j) + 12(j x i) = 10k - 12k = -2k N m."
  },
  {
    id: "c11-phy-5-mcq-17",
    question: "A wheel starts from rest and accelerates with constant angular acceleration alpha = 4 rad/s<sup>2</sup>. The angle turned in 3 seconds is:",
    options: [
      "A):   12 rad",
      "B):   36 rad",
      "C):   24 rad",
      "D):   18 rad"
    ],
    correctAnswer: "d",
    explanation: "theta = omega_0 * t + 1/2 * alpha * t<sup>2</sup> = 0 + 1/2 * 4 * (3)<sup>2</sup> = 2 * 9 = 18 rad."
  },
  {
    id: "c11-phy-5-mcq-18",
    question: "If the Earth suddenly contracts to one-third of its present radius keeping mass constant, the length of the day will become:",
    options: [
      "A):   2.67 hours",
      "B):   8 hours",
      "C):   72 hours",
      "D):   24 hours"
    ],
    correctAnswer: "a",
    explanation: "By conservation of angular momentum, T_2 = T_1 * (R_2/R_1)<sup>2</sup> = 24 * (1/3)<sup>2</sup> = 24 / 9 = 2.67 hours."
  },
  {
    id: "c11-phy-5-mcq-19",
    question: "A constant torque of 10 N m is applied to a body of moment of inertia 2 kg m<sup>2</sup>. The angular acceleration produced is:",
    options: [
      "A):   20 rad/s<sup>2</sup>",
      "B):   0.2 rad/s<sup>2</sup>",
      "C):   5 rad/s<sup>2</sup>",
      "D):   2.5 rad/s<sup>2</sup>"
    ],
    correctAnswer: "c",
    explanation: "alpha = tau / I = 10 / 2 = 5 rad/s<sup>2</sup>."
  },
  {
    id: "c11-phy-5-mcq-20",
    question: "A flywheel of moment of inertia 5 kg m<sup>2</sup> rotates at 10 rad/s. Its rotational kinetic energy is:",
    options: [
      "A):   50 J",
      "B):   500 J",
      "C):   25 J",
      "D):   250 J"
    ],
    correctAnswer: "d",
    explanation: "K_rot = 1/2 * I * omega<sup>2</sup> = 1/2 * 5 * (10)<sup>2</sup> = 2.5 * 100 = 250 Joules."
  },
  {
    id: "c11-phy-5-mcq-21",
    question: "The ratio of rotational kinetic energy to translational kinetic energy for a solid sphere rolling without slipping is:",
    options: [
      "A):   2 / 5",
      "B):   1 / 2",
      "C):   2 / 7",
      "D):   5 / 2"
    ],
    correctAnswer: "a",
    explanation: "K_rot / K_trans = (1/2 * I * omega<sup>2</sup>) / (1/2 * M * v<sup>2</sup>) = k<sup>2</sup> / R<sup>2</sup> = 2/5."
  },
  {
    id: "c11-phy-5-mcq-22",
    question: "A solid cylinder of mass M and radius R rolls down an incline of angle theta without slipping. Its linear acceleration is:",
    options: [
      "A):   g sin(theta)",
      "B):   1/2 g sin(theta)",
      "C):   2/3 g sin(theta)",
      "D):   3/4 g sin(theta)"
    ],
    correctAnswer: "c",
    explanation: "a = g sin(theta) / (1 + k<sup>2</sup>/R<sup>2</sup>). For a solid cylinder, k<sup>2</sup>/R<sup>2</sup> = 1/2, so a = g sin(theta) / (1 + 0.5) = 2/3 g sin(theta)."
  },
  {
    id: "c11-phy-5-mcq-23",
    question: "A uniform meter stick of mass 120 g is balanced at 50 cm. Where must a 40 g mass be hung to balance it on a knife edge at 40 cm?",
    options: [
      "A):   At 20 cm mark",
      "B):   At 10 cm mark",
      "C):   At 30 cm mark",
      "D):   At 25 cm mark"
    ],
    correctAnswer: "b",
    explanation: "Clockwise moment of stick about 40 cm fulcrum = 120 * (50 - 40) = 1200 g cm. For balance: 40 * (40 - x) = 1200 => 40 - x = 30 => x = 10 cm mark."
  },
  {
    id: "c11-phy-5-mcq-24",
    question: "The moment of inertia of a thin uniform rod of length L and mass M about a transverse axis through one end is:",
    options: [
      "A):   1/12 M L<sup>2</sup>",
      "B):   1/2 M L<sup>2</sup>",
      "C):   1/4 M L<sup>2</sup>",
      "D):   1/3 M L<sup>2</sup>"
    ],
    correctAnswer: "d",
    explanation: "By Parallel Axis Theorem, I_end = I_cm + M(L/2)<sup>2</sup> = 1/12 M L<sup>2</sup> + 1/4 M L<sup>2</sup> = 1/3 M L<sup>2</sup>."
  },
  {
    id: "c11-phy-5-mcq-25",
    question: "In pure rolling motion of a wheel along flat ground, the instantaneous velocity of the point in contact with the ground is:",
    options: [
      "A):   2 v_cm",
      "B):   v_cm",
      "C):   1/2 v_cm",
      "D):   0 (Zero)"
    ],
    correctAnswer: "d",
    explanation: "At the point of contact with ground, forward translational velocity (+v_cm) and backward rotational tangential velocity (-R*omega = -v_cm) cancel out to zero."
  }
];

module.exports = { c11Phy5Mcqs };
