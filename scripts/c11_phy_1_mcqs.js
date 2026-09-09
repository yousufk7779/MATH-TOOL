function getMcqs() {
  return [
    {
      id: "c11-phy-1-mcq-1",
      question: "Which of the following is NOT one of the 7 fundamental base SI units?",
      options: [
        "A):   Newton (N)",
        "B):   Candela (cd)",
        "C):   Kelvin (K)",
        "D):   Mole (mol)"
      ],
      correctAnswer: "a",
      explanation: "Newton (N = kg m s<sup>-2</sup>) is a derived unit of force, whereas Candela, Kelvin, and Mole are fundamental base SI units."
    },
    {
      id: "c11-phy-1-mcq-2",
      question: "What is the relation between the numerical magnitude n and the size of unit u of a measured physical quantity?",
      options: [
        "A):   n &prop; u",
        "B):   n &prop; 1 / u",
        "C):   n &prop; u<sup>2</sup>",
        "D):   n is independent of u"
      ],
      correctAnswer: "b",
      explanation: "Since the total physical magnitude Q = n &times; u is constant, the numerical value is inversely proportional to unit size: n &prop; 1/u (n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub>)."
    },
    {
      id: "c11-phy-1-mcq-3",
      question: "The supplementary physical quantities 'Plane Angle' and 'Solid Angle' are classified as:",
      options: [
        "A):   Quantities possessing base dimensions [L] and [L<sup>2</sup>]",
        "B):   Derived quantities with dimensions [M L T<sup>-2</sup>]",
        "C):   Dimensionless quantities possessing recognized SI units",
        "D):   Quantities with neither units nor dimensions"
      ],
      correctAnswer: "c",
      explanation: "Plane angle (radian, s/r) and Solid angle (steradian, A/r<sup>2</sup>) both have standard SI units, but their dimensional formulas are strictly [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]."
    },
    {
      id: "c11-phy-1-mcq-4",
      question: "Which of the following astronomical distance units represents the largest physical length?",
      options: [
        "A):   Astronomical Unit (1 AU)",
        "B):   Light Year (1 ly)",
        "C):   Terameter (1 Tm)",
        "D):   Parsec (1 pc)"
      ],
      correctAnswer: "d",
      explanation: "1 Parsec &approx; 3.08 &times; 10<sup>16</sup> m &approx; 3.26 light years, which is greater than 1 light year (9.46 &times; 10<sup>15</sup> m) and 1 AU (1.496 &times; 10<sup>11</sup> m)."
    },
    {
      id: "c11-phy-1-mcq-5",
      question: "How many significant figures are present in the measured value 0.003040 m?",
      options: [
        "A):   4",
        "B):   3",
        "C):   6",
        "D):   7"
      ],
      correctAnswer: "a",
      explanation: "Leading zeros (0.00) are not significant. Trapped zero between 3 and 4, non-zero digits 3 and 4, and trailing zero after decimal are significant. Total = 4 (digits 3, 0, 4, 0)."
    },
    {
      id: "c11-phy-1-mcq-6",
      question: "What is the dimensional formula of the Universal Gravitational Constant (G)?",
      options: [
        "A):   [M L<sup>3</sup> T<sup>-2</sup>]",
        "B):   [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]",
        "C):   [M<sup>-1</sup> L<sup>2</sup> T<sup>-1</sup>]",
        "D):   [M L<sup>2</sup> T<sup>-2</sup>]"
      ],
      correctAnswer: "b",
      explanation: "From Newton's law F = G m<sub>1</sub> m<sub>2</sub> / r<sup>2</sup> &rArr; G = F r<sup>2</sup> / m<sup>2</sup> = [M L T<sup>-2</sup>][L<sup>2</sup>] / [M<sup>2</sup>] = [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]."
    },
    {
      id: "c11-phy-1-mcq-7",
      question: "Which pair of physical quantities possesses identical dimensional formulas?",
      options: [
        "A):   Force and Power",
        "B):   Surface Tension and Stress",
        "C):   Work and Torque",
        "D):   Angular Momentum and Force"
      ],
      correctAnswer: "c",
      explanation: "Both Work (Force &times; Distance) and Torque (Force &times; Lever arm) have the identical dimensional formula [M L<sup>2</sup> T<sup>-2</sup>]."
    },
    {
      id: "c11-phy-1-mcq-8",
      question: "The dimensional formula of Planck's constant (h) is identical to the dimensional formula of:",
      options: [
        "A):   Linear momentum",
        "B):   Force",
        "C):   Energy",
        "D):   Angular momentum"
      ],
      correctAnswer: "d",
      explanation: "Planck's constant h = E / &nu; = [M L<sup>2</sup> T<sup>-2</sup>] / [T<sup>-1</sup>] = [M L<sup>2</sup> T<sup>-1</sup>], which is identically the dimensional formula of Angular Momentum (L = m v r = [M][L T<sup>-1</sup>][L] = [M L<sup>2</sup> T<sup>-1</sup>])."
    },
    {
      id: "c11-phy-1-mcq-9",
      question: "Round off the measured number 24.350 to 3 significant figures according to scientific rules:",
      options: [
        "A):   24.4",
        "B):   24.3",
        "C):   24.0",
        "D):   24.35"
      ],
      correctAnswer: "a",
      explanation: "The terminal digit to be dropped is 5 followed by zeros, preceded by the odd digit 3. By the even-odd rule, 3 is rounded up by 1 to make it even: 24.4."
    },
    {
      id: "c11-phy-1-mcq-10",
      question: "What is the dimensional formula of Surface Tension (T = Force / Length)?",
      options: [
        "A):   [M L T<sup>-2</sup>]",
        "B):   [M L<sup>0</sup> T<sup>-2</sup>]",
        "C):   [M L<sup>-1</sup> T<sup>-2</sup>]",
        "D):   [M L<sup>2</sup> T<sup>-2</sup>]"
      ],
      correctAnswer: "b",
      explanation: "Surface Tension T = Force / Length = [M L T<sup>-2</sup>] / [L] = [M L<sup>0</sup> T<sup>-2</sup>]."
    },
    {
      id: "c11-phy-1-mcq-11",
      question: "One Joule of energy in the SI system is equivalent to how many Ergs in the CGS system?",
      options: [
        "A):   10<sup>5</sup> Erg",
        "B):   10<sup>6</sup> Erg",
        "C):   10<sup>7</sup> Erg",
        "D):   10<sup>8</sup> Erg"
      ],
      correctAnswer: "c",
      explanation: "1 J = 1 kg m<sup>2</sup> s<sup>-2</sup> = (10<sup>3</sup> g) &times; (10<sup>2</sup> cm)<sup>2</sup> s<sup>-2</sup> = 10<sup>3</sup> &times; 10<sup>4</sup> = 10<sup>7</sup> Erg."
    },
    {
      id: "c11-phy-1-mcq-12",
      question: "Which of the following physical quantities is a dimensionless variable?",
      options: [
        "A):   Gravitational constant",
        "B):   Planck constant",
        "C):   Acceleration due to gravity",
        "D):   Mechanical Strain"
      ],
      correctAnswer: "d",
      explanation: "Strain (&Delta;L / L) is a ratio of two lengths [L]/[L] = [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]. Its value varies with applied load, so it is a dimensionless variable."
    },
    {
      id: "c11-phy-1-mcq-13",
      question: "The ratio of 1 Newton (SI unit of force) to 1 Dyne (CGS unit of force) is:",
      options: [
        "A):   10<sup>5</sup>",
        "B):   10<sup>7</sup>",
        "C):   10<sup>-5</sup>",
        "D):   10<sup>3</sup>"
      ],
      correctAnswer: "a",
      explanation: "1 N = 1 kg m s<sup>-2</sup> = (10<sup>3</sup> g)(10<sup>2</sup> cm) s<sup>-2</sup> = 10<sup>5</sup> g cm s<sup>-2</sup> = 10<sup>5</sup> Dyne."
    },
    {
      id: "c11-phy-1-mcq-14",
      question: "In the formula y = A sin(ω t - k x), what are the dimensions of the angular frequency ω?",
      options: [
        "A):   [T]",
        "B):   [T<sup>-1</sup>]",
        "C):   [L T<sup>-1</sup>]",
        "D):   [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]"
      ],
      correctAnswer: "b",
      explanation: "The argument (&omega; t - k x) of a sine function must be dimensionless. Thus [&omega; t] = [1] &rArr; [&omega;] = 1 / [t] = [T<sup>-1</sup>]."
    },
    {
      id: "c11-phy-1-mcq-15",
      question: "In the van der Waals gas equation (P + a/V²)(V - b) = RT, the dimensional formula of constant a is:",
      options: [
        "A):   [M L<sup>-1</sup> T<sup>-2</sup>]",
        "B):   [M L<sup>3</sup> T<sup>-2</sup>]",
        "C):   [M L<sup>5</sup> T<sup>-2</sup>]",
        "D):   [M L<sup>2</sup> T<sup>-2</sup>]"
      ],
      correctAnswer: "c",
      explanation: "By Principle of Homogeneity, [a / V<sup>2</sup>] = [P] &rArr; [a] = [P][V<sup>2</sup>] = [M L<sup>-1</sup> T<sup>-2</sup>][L<sup>6</sup>] = [M L<sup>5</sup> T<sup>-2</sup>]."
    },
    {
      id: "c11-phy-1-mcq-16",
      question: "What is the dimensional formula of the coefficient of viscosity (η) in Stokes' law?",
      options: [
        "A):   [M L T<sup>-1</sup>]",
        "B):   [M L<sup>-2</sup> T<sup>-1</sup>]",
        "C):   [M L<sup>2</sup> T<sup>-2</sup>]",
        "D):   [M L<sup>-1</sup> T<sup>-1</sup>]"
      ],
      correctAnswer: "d",
      explanation: "From Stokes' Law F = 6&pi; &eta; r v &rArr; [&eta;] = [F] / ([r][v]) = [M L T<sup>-2</sup>] / ([L][L T<sup>-1</sup>]) = [M L<sup>-1</sup> T<sup>-1</sup>]."
    },
    {
      id: "c11-phy-1-mcq-17",
      question: "If error in measuring the radius of a sphere is 2%, what is the percentage error in the calculated volume of the sphere?",
      options: [
        "A):   6%",
        "B):   2%",
        "C):   8%",
        "D):   4%"
      ],
      correctAnswer: "a",
      explanation: "Volume V = (4/3) &pi; r<sup>3</sup> &rArr; &Delta;V / V = 3 (&Delta;r / r). Therefore, percentage error in volume = 3 &times; 2% = 6%."
    },
    {
      id: "c11-phy-1-mcq-18",
      question: "The dimensional formula of Electric Permittivity of Free Space (ε₀) is:",
      options: [
        "A):   [M L<sup>3</sup> T<sup>-4</sup> A<sup>-2</sup>]",
        "B):   [M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]",
        "C):   [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup> A<sup>2</sup>]",
        "D):   [M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>]"
      ],
      correctAnswer: "b",
      explanation: "From Coulomb's Law &epsilon;<sub>0</sub> = q<sup>2</sup> / (4&pi; F r<sup>2</sup>) = [A T]<sup>2</sup> / ([M L T<sup>-2</sup>][L<sup>2</sup>]) = [M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]."
    },
    {
      id: "c11-phy-1-mcq-19",
      question: "If mass M, length L, and time T are related such that the combination (G^a c^b h^c) gives the dimension of Length, then a, b, and c are respectively:",
      options: [
        "A):   1/2, 3/2, 1/2",
        "B):   -1/2, 1/2, 1/2",
        "C):   1/2, -3/2, 1/2",
        "D):   1, -1, 1"
      ],
      correctAnswer: "c",
      explanation: "Planck length l<sub>p</sub> = &radic;(G h / c<sup>3</sup>) = G<sup>1/2</sup> c<sup>-3/2</sup> h<sup>1/2</sup>. Therefore a = 1/2, b = -3/2, c = 1/2."
    },
    {
      id: "c11-phy-1-mcq-20",
      question: "Which of the following equations cannot be derived purely by dimensional analysis?",
      options: [
        "A):   T = 2&pi; &radic;(l / g)",
        "B):   F = m v<sup>2</sup> / r",
        "C):   v = &radic;(P / &rho;)",
        "D):   s = u t + ½ a t²"
      ],
      correctAnswer: "d",
      explanation: "Dimensional analysis fails for equations containing multiple additive terms on one side (like s = ut + &frac12; at<sup>2</sup>) because it cannot generate the plus sign or determine separate numerical coefficients."
    },
    {
      id: "c11-phy-1-mcq-21",
      question: "The combination (1 / √(ε₀ μ₀)) has the same dimensional formula as:",
      options: [
        "A):   Velocity",
        "B):   Acceleration",
        "C):   Force",
        "D):   Electric field"
      ],
      correctAnswer: "a",
      explanation: "From Maxwell's electromagnetic wave theory, c = 1 / &radic;(&epsilon;<sub>0</sub> &mu;<sub>0</sub>). Its dimensional formula is identically that of velocity: [L T<sup>-1</sup>]."
    },
    {
      id: "c11-phy-1-mcq-22",
      question: "The product of Resistance (R) and Capacitance (C) has the dimensional formula of:",
      options: [
        "A):   Frequency [T<sup>-1</sup>]",
        "B):   Time [T]",
        "C):   Current [A]",
        "D):   Energy [M L<sup>2</sup> T<sup>-2</sup>]"
      ],
      correctAnswer: "b",
      explanation: "[RC] = [M L<sup>2</sup> T<sup>-3</sup> A<sup>-2</sup>] &times; [M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> A<sup>2</sup>] = [T], which is the capacitive time constant &tau; = RC."
    },
    {
      id: "c11-phy-1-mcq-23",
      question: "What is the solid angle subtended by a hemisphere at its center of curvature?",
      options: [
        "A):   4&pi; steradians",
        "B):   &pi; steradians",
        "C):   2&pi; steradians",
        "D):   &pi;/2 steradians"
      ],
      correctAnswer: "c",
      explanation: "A full sphere subtends 4&pi; steradians. Therefore, a hemisphere subtends exactly half: &Omega; = 4&pi; / 2 = 2&pi; steradians."
    },
    {
      id: "c11-phy-1-mcq-24",
      question: "A wire has mass m = (0.3 ± 0.003) g, radius r = (0.5 ± 0.005) mm, and length l = (6 ± 0.06) cm. The maximum percentage error in its density is:",
      options: [
        "A):   1%",
        "B):   2%",
        "C):   3%",
        "D):   4%"
      ],
      correctAnswer: "d",
      explanation: "Density &rho; = m / (&pi; r<sup>2</sup> l) &rArr; &Delta;&rho;/&rho; = (&Delta;m/m) + 2(&Delta;r/r) + (&Delta;l/l) = (0.003/0.3) + 2(0.005/0.5) + (0.06/6) = 1% + 2(1%) + 1% = 4%."
    },
    {
      id: "c11-phy-1-mcq-25",
      question: "Which of the following physical quantities has dimensions of Energy Density (Energy per unit volume) [M L⁻¹ T⁻²]?",
      options: [
        "A):   Force per unit area (Pressure)",
        "B):   Mechanical Stress",
        "C):   Electric Energy Density (½ ε₀ E²)",
        "D):   All of the above"
      ],
      correctAnswer: "d",
      explanation: "Pressure, Stress, and Electric Energy Density (½ &epsilon;<sub>0</sub> E<sup>2</sup>) all share the identical dimensional formula [M L<sup>-1</sup> T<sup>-2</sup>] = J m<sup>-3</sup> = N m<sup>-2</sup>."
    }
  ];
}

module.exports = { getMcqs };
