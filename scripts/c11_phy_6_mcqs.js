const c11Phy6Mcqs = [
  {
    id: "c11-phy-6-mcq-1",
    question: "The gravitational force of attraction between two point masses depends on the intervening medium:",
    options: [
      "A):   Directly linearly",
      "B):   Inversely quadratically",
      "C):   Completely independent of the medium",
      "D):   Exponentially"
    ],
    correctAnswer: "c",
    explanation: "Gravitational force is an intrinsic property of mass and remains entirely unaffected by the nature or presence of any intervening physical medium."
  },
  {
    id: "c11-phy-6-mcq-2",
    question: "Kepler's second law (Law of Areas) is a direct consequence of the conservation of:",
    options: [
      "A):   Linear momentum",
      "B):   Angular momentum",
      "C):   Total kinetic energy",
      "D):   Mass"
    ],
    correctAnswer: "b",
    explanation: "The gravitational force exerted by the Sun on a planet is purely central (directed along the radius vector). Hence, torque is zero, conserving orbital angular momentum."
  },
  {
    id: "c11-phy-6-mcq-3",
    question: "The dimensional formula of the universal gravitational constant G is:",
    options: [
      "A):   [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]",
      "B):   [M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]",
      "C):   [M<sup>0</sup> L<sup>1</sup> T<sup>-2</sup>]",
      "D):   [M<sup>-2</sup> L<sup>3</sup> T<sup>-1</sup>]"
    ],
    correctAnswer: "a",
    explanation: "From F = G * m_1 * m_2 / r<sup>2</sup>, G = F * r<sup>2</sup> / (m_1 * m_2) = [M L T<sup>-2</sup>][L<sup>2</sup>] / [M<sup>2</sup>] = [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]."
  },
  {
    id: "c11-phy-6-mcq-4",
    question: "If the distance between two spherical masses is doubled, the mutual gravitational force between them becomes:",
    options: [
      "A):   Double",
      "B):   Four times",
      "C):   Half",
      "D):   One-fourth"
    ],
    correctAnswer: "d",
    explanation: "By Newton's inverse-square law, F is proportional to 1/r<sup>2</sup>. Doubling separation r reduces the force to 1/(2)<sup>2</sup> = 1/4 of its initial value."
  },
  {
    id: "c11-phy-6-mcq-5",
    question: "Where on the surface of the Earth is the acceleration due to gravity maximum?",
    options: [
      "A):   At the equator",
      "B):   At the poles",
      "C):   At 45° latitude",
      "D):   At the Tropic of Cancer"
    ],
    correctAnswer: "b",
    explanation: "Due to Earth's equatorial bulge, polar radius is ~21 km smaller than equatorial radius, and centrifugal force from rotation vanishes at the poles (cos 90° = 0), making g maximum."
  },
  {
    id: "c11-phy-6-mcq-6",
    question: "The value of acceleration due to gravity at the exact geometric center of the Earth is:",
    options: [
      "A):   Zero",
      "B):   9.8 m/s<sup>2</sup>",
      "C):   Infinity",
      "D):   Half the surface value"
    ],
    correctAnswer: "a",
    explanation: "At the center of Earth, depth d = R, so g_d = g(1 - R/R) = g(0) = 0."
  },
  {
    id: "c11-phy-6-mcq-7",
    question: "By universal astronomical convention, the reference zero of gravitational potential is chosen at:",
    options: [
      "A):   The center of the Earth",
      "B):   Earth's sea level",
      "C):   Infinite separation",
      "D):   The surface of the Sun"
    ],
    correctAnswer: "c",
    explanation: "At infinite distance (r -> infinity), gravitational attraction drops to zero, making infinity the natural reference point where V = 0 and U = 0."
  },
  {
    id: "c11-phy-6-mcq-8",
    question: "The escape speed of a projectile launched from the surface of the Earth is approximately:",
    options: [
      "A):   7.92 km/s",
      "B):   11.2 m/s",
      "C):   11.2 km/s",
      "D):   9.8 km/s"
    ],
    correctAnswer: "c",
    explanation: "Escape speed from Earth's surface is v_e = √(2gR) = √(2 * 9.8 * 6.4 * 10<sup>6</sup>) ≈ 11.2 km/s."
  },
  {
    id: "c11-phy-6-mcq-9",
    question: "The escape speed of a projectile from a planet does NOT depend upon:",
    options: [
      "A):   Mass of the planet",
      "B):   Radius of the planet",
      "C):   Universal gravitational constant G",
      "D):   Mass of the projected projectile"
    ],
    correctAnswer: "d",
    explanation: "From v_e = √(2GM/R), escape speed depends solely on the mass and radius of the planet, and is completely independent of the mass or launch angle of the projectile."
  },
  {
    id: "c11-phy-6-mcq-10",
    question: "For an artificial satellite revolving in an orbit very close to Earth's surface, its orbital speed is approximately:",
    options: [
      "A):   11.2 km/s",
      "B):   7.92 km/s",
      "C):   5.5 km/s",
      "D):   9.8 km/s"
    ],
    correctAnswer: "b",
    explanation: "Near-Earth orbital speed is v_o = √(gR) = √(9.8 * 6.4 * 10<sup>6</sup>) ≈ 7.92 km/s (~8 km/s)."
  },
  {
    id: "c11-phy-6-mcq-11",
    question: "The orbital period of revolution of a geostationary satellite is:",
    options: [
      "A):   12 hours",
      "B):   48 hours",
      "C):   24 hours",
      "D):   84.6 minutes"
    ],
    correctAnswer: "c",
    explanation: "A geostationary satellite matches the Earth's diurnal rotational period of 24 hours (1 sidereal day), remaining permanently fixed above a point on the equator."
  },
  {
    id: "c11-phy-6-mcq-12",
    question: "The ratio of escape speed to near-Earth orbital speed is:",
    options: [
      "A):   1 : 1",
      "B):   √2 : 1",
      "C):   2 : 1",
      "D):   1 : √2"
    ],
    correctAnswer: "b",
    explanation: "v_e = √(2gR) and v_o = √(gR), so v_e / v_o = √2 : 1 ≈ 1.414 : 1."
  },
  {
    id: "c11-phy-6-mcq-13",
    question: "An astronaut experiences complete weightlessness in an orbiting space station because:",
    options: [
      "A):   Earth's gravity is completely absent in orbit",
      "B):   The spacecraft's hull shields against gravitational fields",
      "C):   Centrifugal force cancels out the body's mass",
      "D):   The astronaut and spacecraft are both in perpetual free fall toward Earth"
    ],
    correctAnswer: "d",
    explanation: "Both the spacecraft and the astronaut experience the same gravitational acceleration, so no normal contact reaction force is exerted between them (N = 0)."
  },
  {
    id: "c11-phy-6-mcq-14",
    question: "The total mechanical energy of an artificial satellite revolving in a circular orbit of radius r is:",
    options: [
      "A):   -GMm / (2r)",
      "B):   +GMm / (2r)",
      "C):   -GMm / r",
      "D):   Zero"
    ],
    correctAnswer: "a",
    explanation: "E = K + U = GMm/(2r) - GMm/r = -GMm/(2r). The negative total energy indicates that the satellite is gravitationally bound to Earth."
  },
  {
    id: "c11-phy-6-mcq-15",
    question: "The height of a geostationary satellite above the surface of the Earth is approximately:",
    options: [
      "A):   800 km",
      "B):   6,400 km",
      "C):   36,000 km",
      "D):   42,000 km"
    ],
    correctAnswer: "c",
    explanation: "Orbital radius is r ≈ 42,200 km, so height above Earth's surface is h = r - R ≈ 42,200 - 6,400 ≈ 35,800 km ≈ 36,000 km."
  },
  {
    id: "c11-phy-6-mcq-16",
    question: "At what height above Earth's surface does the acceleration due to gravity become 1/9th of its surface value?",
    options: [
      "A):   R",
      "B):   2R",
      "C):   3R",
      "D):   8R"
    ],
    correctAnswer: "b",
    explanation: "g_h = g / (1 + h/R)<sup>2</sup> = g/9 => 1 + h/R = 3 => h = 2R."
  },
  {
    id: "c11-phy-6-mcq-17",
    question: "At what depth below Earth's surface does the acceleration due to gravity become half of its surface value?",
    options: [
      "A):   R / 4",
      "B):   R / 3",
      "C):   R / 2",
      "D):   R / √2"
    ],
    correctAnswer: "c",
    explanation: "g_d = g(1 - d/R) = g/2 => 1 - d/R = 1/2 => d = R/2."
  },
  {
    id: "c11-phy-6-mcq-18",
    question: "If the Earth's radius were to shrink by 2% while its mass remains constant, the acceleration due to gravity g at the surface would:",
    options: [
      "A):   Increase by 4%",
      "B):   Decrease by 2%",
      "C):   Decrease by 4%",
      "D):   Increase by 2%"
    ],
    correctAnswer: "a",
    explanation: "Since g = GM/R<sup>2</sup>, fractional change is dg/g = -2(dR/R) = -2(-2%) = +4%."
  },
  {
    id: "c11-phy-6-mcq-19",
    question: "A body weighs 72 N on Earth's surface. Its weight at an altitude equal to half the radius of the Earth (h = R/2) is:",
    options: [
      "A):   36 N",
      "B):   48 N",
      "C):   18 N",
      "D):   32 N"
    ],
    correctAnswer: "d",
    explanation: "g_h = g / (1 + h/R)<sup>2</sup> = g / (1 + 0.5)<sup>2</sup> = g / 2.25 = 4g/9. Weight = 72 * (4/9) = 32 N."
  },
  {
    id: "c11-phy-6-mcq-20",
    question: "A planet has twice the mass and twice the radius of the Earth. The escape speed from this planet is:",
    options: [
      "A):   22.4 km/s",
      "B):   5.6 km/s",
      "C):   15.8 km/s",
      "D):   11.2 km/s"
    ],
    correctAnswer: "d",
    explanation: "v_e = √(2GM/R). For M' = 2M and R' = 2R, ratio M'/R' = M/R, so escape speed remains exactly 11.2 km/s."
  },
  {
    id: "c11-phy-6-mcq-21",
    question: "The period of revolution of planet A around the Sun is 8 times that of planet B. The orbital radius of A is how many times that of B?",
    options: [
      "A):   4 times",
      "B):   2 times",
      "C):   16 times",
      "D):   8 times"
    ],
    correctAnswer: "a",
    explanation: "By Kepler's Third Law, (r_A/r_B)<sup>3</sup> = (T_A/T_B)<sup>2</sup> = (8)<sup>2</sup> = 64 => r_A/r_B = 64<sup>1/3</sup> = 4."
  },
  {
    id: "c11-phy-6-mcq-22",
    question: "A satellite orbits at height h above Earth where local gravity is g_h. Its orbital velocity is given by:",
    options: [
      "A):   √(g_h * (R + h))",
      "B):   √(2 * g_h * R)",
      "C):   g_h * (R + h)",
      "D):   √(g * R)"
    ],
    correctAnswer: "a",
    explanation: "The centripetal acceleration in orbit is v_o<sup>2</sup> / (R + h) = g_h, which yields v_o = √(g_h * (R + h))."
  },
  {
    id: "c11-phy-6-mcq-23",
    question: "If the kinetic energy of an artificial satellite in a circular orbit of radius r is K, its gravitational potential energy is:",
    options: [
      "A):   -K",
      "B):   -2K",
      "C):   +2K",
      "D):   -K / 2"
    ],
    correctAnswer: "b",
    explanation: "K = GMm/(2r) and U = -GMm/r. Thus U = -2K."
  },
  {
    id: "c11-phy-6-mcq-24",
    question: "A projectile is launched vertically upward with speed v = √(gR) from Earth's surface. The maximum height h attained is:",
    options: [
      "A):   R / 2",
      "B):   2R",
      "C):   R / 4",
      "D):   R"
    ],
    correctAnswer: "d",
    explanation: "1/2 m v<sup>2</sup> = mgh / (1 + h/R). Since v<sup>2</sup> = gR, 1/2 mgR = mgh / (1 + h/R) => 1/2 = (h/R) / (1 + h/R) => 1 + h/R = 2h/R => h = R."
  },
  {
    id: "c11-phy-6-mcq-25",
    question: "If a satellite in circular orbit at radius r suddenly stops in its tracks, its impact speed with Earth's surface is:",
    options: [
      "A):   v_e",
      "B):   v_o",
      "C):   √(v_e<sup>2</sup> - v_o<sup>2</sup>)",
      "D):   √(v_e<sup>2</sup> - 2v_o<sup>2</sup>)"
    ],
    correctAnswer: "d",
    explanation: "By conservation of energy: E_i = 0 - GMm/r = 1/2 m v<sup>2</sup> - GMm/R => v<sup>2</sup> = 2GM/R - 2GM/r = v_e<sup>2</sup> - 2v_o<sup>2</sup> => v = √(v_e<sup>2</sup> - 2v_o<sup>2</sup>)."
  }
];

module.exports = { c11Phy6Mcqs };
