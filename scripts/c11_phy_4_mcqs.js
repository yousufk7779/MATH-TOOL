function getMcqs() {
  return [
    {
      id: "c11-phy-4-mcq-1",
      question: "Which of the following physical conditions results in strictly ZERO work done by an applied force?",
      options: [
        "A):   The force is perpendicular to the displacement (&theta; = 90&deg;)",
        "B):   The force acts in the opposite direction to displacement (&theta; = 180&deg;)",
        "C):   The force acts in the direction of displacement (&theta; = 0&deg;)",
        "D):   The angle between force and displacement is 45&deg;"
      ],
      correctAnswer: "a",
      explanation: "Since W = F s cos &theta;, when &theta; = 90&deg;, cos 90&deg; = 0, resulting in identically zero mechanical work."
    },
    {
      id: "c11-phy-4-mcq-2",
      question: "How many ergs are there in one Joule of energy?",
      options: [
        "A):   10<sup>5</sup> ergs",
        "B):   10<sup>7</sup> ergs",
        "C):   10<sup>9</sup> ergs",
        "D):   10<sup>-7</sup> ergs"
      ],
      correctAnswer: "b",
      explanation: "1 J = 1 N &times; 1 m = (10<sup>5</sup> dyne) &times; (10<sup>2</sup> cm) = 10<sup>7</sup> ergs."
    },
    {
      id: "c11-phy-4-mcq-3",
      question: "The area under a Force-Displacement (F-x) curve represents which physical quantity?",
      options: [
        "A):   Linear momentum",
        "B):   Instantaneous power",
        "C):   Total mechanical work done",
        "D):   Total impulse"
      ],
      correctAnswer: "c",
      explanation: "Because W = &int; F(x) dx, the definite integral geometrically equals the area under the force-displacement graph."
    },
    {
      id: "c11-phy-4-mcq-4",
      question: "What is the equivalent value of one Horsepower (1 hp) in the metric SI unit of Watts?",
      options: [
        "A):   500 Watts",
        "B):   1000 Watts",
        "C):   750 Watts",
        "D):   746 Watts"
      ],
      correctAnswer: "d",
      explanation: "By historical imperial engineering definition: 1 Horsepower (1 hp) = 746 Watts = 0.746 kW."
    },
    {
      id: "c11-phy-4-mcq-5",
      question: "According to the Work-Energy Theorem, the net work done by all forces on a particle equals the change in its:",
      options: [
        "A):   Kinetic energy",
        "B):   Potential energy",
        "C):   Linear momentum",
        "D):   Total rest mass"
      ],
      correctAnswer: "a",
      explanation: "The Work-Energy Theorem states that W<sub>net</sub> = &Delta;K = K<sub>final</sub> - K<sub>initial</sub>."
    },
    {
      id: "c11-phy-4-mcq-6",
      question: "Which of the following is a classic example of a Conservative Force?",
      options: [
        "A):   Kinetic frictional force",
        "B):   Gravitational force of attraction",
        "C):   Viscous drag in fluids",
        "D):   Air resistance on a moving car"
      ],
      correctAnswer: "b",
      explanation: "The work done by gravity depends exclusively on initial and final vertical positions, being completely path-independent (&oint; F<sub>g</sub> &bull; dr = 0)."
    },
    {
      id: "c11-phy-4-mcq-7",
      question: "The potential energy stored in an elastic spring of stiffness k stretched by displacement x is:",
      options: [
        "A):   k x",
        "B):   &frac12; k<sup>2</sup> x",
        "C):   &frac12; k x<sup>2</sup>",
        "D):   k x<sup>2</sup>"
      ],
      correctAnswer: "c",
      explanation: "Integrating the restoring force F = kx across displacement yields U<sub>s</sub> = &int; kx dx = &frac12; k x<sup>2</sup>."
    },
    {
      id: "c11-phy-4-mcq-8",
      question: "For a body executing vertical circular motion of radius L attached to a string, what is the minimum critical speed at the topmost point to prevent string slackening?",
      options: [
        "A):   &radic;(5 g L)",
        "B):   &radic;(3 g L)",
        "C):   2 &radic;(g L)",
        "D):   &radic;(g L)"
      ],
      correctAnswer: "d",
      explanation: "At the topmost point, setting tension T &ge; 0 gives mv<sup>2</sup>/L - mg &ge; 0 &rArr; v<sub>top</sub> = &radic;(g L)."
    },
    {
      id: "c11-phy-4-mcq-9",
      question: "What is the minimum speed required at the bottom-most point of a vertical circle of radius L for a bob to successfully loop the circle?",
      options: [
        "A):   &radic;(5 g L)",
        "B):   &radic;(3 g L)",
        "C):   &radic;(g L)",
        "D):   &radic;(6 g L)"
      ],
      correctAnswer: "a",
      explanation: "By conservation of mechanical energy between top (h = 2L, v = &radic;gL) and bottom (h = 0), &frac12; m v<sub>b</sub><sup>2</sup> = &frac12; m (gL) + mg(2L) &rArr; v<sub>b</sub> = &radic;(5 g L)."
    },
    {
      id: "c11-phy-4-mcq-10",
      question: "In vertical circular motion with a flexible string, what is the invariant difference in string tension between the lowest and highest points?",
      options: [
        "A):   4 m g",
        "B):   6 m g",
        "C):   2 m g",
        "D):   0"
      ],
      correctAnswer: "b",
      explanation: "T<sub>bottom</sub> - T<sub>top</sub> = (m/L)(v<sub>b</sub><sup>2</sup> - v<sub>t</sub><sup>2</sup>) + 2mg = (m/L)(4gL) + 2mg = 6 mg, independent of orbital speed."
    },
    {
      id: "c11-phy-4-mcq-11",
      question: "What is the numerical value of the Coefficient of Restitution (e) for a Perfectly Inelastic Collision?",
      options: [
        "A):   e = 1",
        "B):   e = 0.5",
        "C):   e = 0",
        "D):   e = &infin;"
      ],
      correctAnswer: "c",
      explanation: "In a perfectly inelastic collision, colliding bodies stick together and move with a single common velocity, so relative separation velocity is zero, giving e = 0."
    },
    {
      id: "c11-phy-4-mcq-12",
      question: "Two identical masses m moving along a line collide head-on elastically. What happens to their velocities after the impact?",
      options: [
        "A):   Both bodies come to a complete halt",
        "B):   Both bodies stick together and move with half speed",
        "C):   The first body moves with double velocity",
        "D):   The two bodies completely exchange their velocities"
      ],
      correctAnswer: "d",
      explanation: "In a 1D elastic collision between identical masses (m<sub>1</sub> = m<sub>2</sub>), the master formulas yield v<sub>1</sub> = u<sub>2</sub> and v<sub>2</sub> = u<sub>1</sub> (complete velocity exchange)."
    },
    {
      id: "c11-phy-4-mcq-13",
      question: "How many Joules of energy are equivalent to 1 kilowatt-hour (1 kWh)?",
      options: [
        "A):   3.6 &times; 10<sup>6</sup> J",
        "B):   3.6 &times; 10<sup>3</sup> J",
        "C):   1.0 &times; 10<sup>3</sup> J",
        "D):   7.46 &times; 10<sup>5</sup> J"
      ],
      correctAnswer: "a",
      explanation: "1 kWh = 1000 W &times; 3600 s = 3,600,000 Joules = 3.6 &times; 10<sup>6</sup> J (3.6 MJ)."
    },
    {
      id: "c11-phy-4-mcq-14",
      question: "If the linear momentum of a body increases by 100%, what is the percentage increase in its kinetic energy?",
      options: [
        "A):   100%",
        "B):   300%",
        "C):   200%",
        "D):   400%"
      ],
      correctAnswer: "b",
      explanation: "K &prop; p<sup>2</sup>. If momentum doubles (p' = 2p), kinetic energy quadruples (K' = 4K). Percentage increase = (4K - K)/K &times; 100% = 300%."
    },
    {
      id: "c11-phy-4-mcq-15",
      question: "Which of the following relations correctly expresses instantaneous power P in vector notation?",
      options: [
        "A):   P = F &times; v",
        "B):   P = F / v",
        "C):   P = F &bull; v",
        "D):   P = &frac12; F &bull; v<sup>2</sup>"
      ],
      correctAnswer: "c",
      explanation: "Instantaneous power is the scalar dot product of force vector and velocity vector: P = dW/dt = F &bull; (dr/dt) = F &bull; v."
    },
    {
      id: "c11-phy-4-mcq-16",
      question: "A force F = (2 î + 3 ĵ) N displaces a body along s = (4 î + 5 ĵ) m. What is the total work done?",
      options: [
        "A):   15 J",
        "B):   18 J",
        "C):   20 J",
        "D):   23 J"
      ],
      correctAnswer: "d",
      explanation: "W = F &bull; s = (2)(4) + (3)(5) = 8 + 15 = 23 Joules."
    },
    {
      id: "c11-phy-4-mcq-17",
      question: "A body of mass 4 kg has a linear momentum of 20 kg m/s. What is its kinetic energy?",
      options: [
        "A):   50 J",
        "B):   100 J",
        "C):   25 J",
        "D):   80 J"
      ],
      correctAnswer: "a",
      explanation: "K = p<sup>2</sup> / (2m) = (20)<sup>2</sup> / [2(4)] = 400 / 8 = 50 Joules."
    },
    {
      id: "c11-phy-4-mcq-18",
      question: "An electric motor rated at 2 kW operates for 5 hours. How many commercial units (kWh) of electrical energy are consumed?",
      options: [
        "A):   2.5 units",
        "B):   10 units",
        "C):   7 units",
        "D):   20 units"
      ],
      correctAnswer: "b",
      explanation: "Energy = Power &times; Time = 2 kW &times; 5 h = 10 kWh = 10 commercial electrical units."
    },
    {
      id: "c11-phy-4-mcq-19",
      question: "A spring of stiffness k = 400 N/m is compressed by 0.05 m. What is the elastic potential energy stored in it?",
      options: [
        "A):   1.0 J",
        "B):   2.0 J",
        "C):   0.5 J",
        "D):   10 J"
      ],
      correctAnswer: "c",
      explanation: "U<sub>s</sub> = &frac12; k x<sup>2</sup> = &frac12;(400)(0.05)<sup>2</sup> = 200 &times; 0.0025 = 0.5 Joules."
    },
    {
      id: "c11-phy-4-mcq-20",
      question: "A stone tied to a string of length 1 m is whirled in a vertical circle. What is its minimum speed at the lowest point so it can complete the circle? (g = 9.8 m/s²)",
      options: [
        "A):   3.13 m s<sup>-1</sup>",
        "B):   5.42 m s<sup>-1</sup>",
        "C):   9.80 m s<sup>-1</sup>",
        "D):   7.00 m s<sup>-1</sup>"
      ],
      correctAnswer: "d",
      explanation: "v<sub>bottom</sub> = &radic;(5 g L) = &radic;(5 &times; 9.8 &times; 1) = &radic;49 = 7.0 m s<sup>-1</sup>."
    },
    {
      id: "c11-phy-4-mcq-21",
      question: "Two bodies of mass 1 kg and 4 kg have equal kinetic energies. What is the ratio of their linear momenta (p_1 : p_2)?",
      options: [
        "A):   1 : 2",
        "B):   2 : 1",
        "C):   1 : 4",
        "D):   1 : 16"
      ],
      correctAnswer: "a",
      explanation: "p = &radic;(2m K). Since K is identical: p<sub>1</sub> / p<sub>2</sub> = &radic;(m<sub>1</sub> / m<sub>2</sub>) = &radic;(1 / 4) = 1/2."
    },
    {
      id: "c11-phy-4-mcq-22",
      question: "A ball dropped from height h rebounds from the floor to a height of 0.64 h. What is the coefficient of restitution e?",
      options: [
        "A):   0.64",
        "B):   0.80",
        "C):   0.40",
        "D):   0.32"
      ],
      correctAnswer: "b",
      explanation: "Rebound height satisfies h' = e<sup>2</sup> h. Here e<sup>2</sup> = 0.64 &rArr; e = &radic;0.64 = 0.80."
    },
    {
      id: "c11-phy-4-mcq-23",
      question: "When two identical billiard balls collide elastically in two dimensions with one ball initially at rest, what is the angle between their final velocity vectors?",
      options: [
        "A):   45&deg;",
        "B):   60&deg;",
        "C):   90&deg;",
        "D):   180&deg;"
      ],
      correctAnswer: "c",
      explanation: "By combining linear momentum conservation and kinetic energy conservation for identical masses, &theta;<sub>1</sub> + &theta;<sub>2</sub> = 90&deg; (orthogonal scattering)."
    },
    {
      id: "c11-phy-4-mcq-24",
      question: "In which of the following mechanical processes is kinetic energy NOT conserved?",
      options: [
        "A):   Head-on collision of two steel ball bearings",
        "B):   Scattering of alpha particles from a gold nucleus",
        "C):   Elastic bouncing of a superball on rigid ground",
        "D):   A bullet embedding into a block of wood"
      ],
      correctAnswer: "d",
      explanation: "A bullet embedding into a wooden block is a completely inelastic collision (e = 0) where a substantial fraction of kinetic energy is converted into heat and deformation."
    },
    {
      id: "c11-phy-4-mcq-25",
      question: "The potential energy of a particle is U(x) = a x² - b x. At what position x is the particle in mechanical equilibrium?",
      options: [
        "A):   x = 0",
        "B):   x = b / a",
        "C):   x = 2b / a",
        "D):   x = b / (2a)"
      ],
      correctAnswer: "d",
      explanation: "At equilibrium, force F = -dU/dx = 0 &rArr; -(2ax - b) = 0 &rArr; 2ax = b &rArr; x = b / (2a)."
    }
  ];
}

module.exports = { getMcqs };
