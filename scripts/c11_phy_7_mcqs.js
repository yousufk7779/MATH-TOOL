// scripts/c11_phy_7_mcqs.js

const mcqs = [
  // Q1: B
  {
    id: "c11-phy-7-mcq-1",
    question: "According to Hooke's Law, within which physical limit is the stress developed in a deformed body directly proportional to the strain produced?",
    options: [
      "A):   Within the breaking fracture limit",
      "B):   Within the proportional limit of elasticity",
      "C):   Within the plastic deformation region",
      "D):   At all stress values up to the ultimate tensile strength"
    ],
    correctAnswer: "B",
    explanation: "Hooke's Law (Stress ∝ Strain) is strictly valid only up to the proportionality limit (Point A on the stress-strain curve), beyond which stress ceases to vary linearly with strain."
  },

  // Q2: C
  {
    id: "c11-phy-7-mcq-2",
    question: "What is the theoretical value of the modulus of elasticity (Young's modulus) for a perfectly rigid body that undergoes zero deformation under any deforming load?",
    options: [
      "A):   Zero",
      "B):   1.0 N/m<sup>2</sup>",
      "C):   Infinite (∞)",
      "D):   Indeterminate"
    ],
    correctAnswer: "C",
    explanation: "For a perfectly rigid body, the strain produced is zero (ΔL = 0) regardless of the applied stress. Since Young's modulus is Y = Stress / Strain = Stress / 0, Y = ∞ (infinite)."
  },

  // Q3: A
  {
    id: "c11-phy-7-mcq-3",
    question: "Which of the following represents the correct SI unit and dimensional formula of Young's modulus of elasticity?",
    options: [
      "A):   N/m<sup>2</sup> (Pascal) and [M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]",
      "B):   N·m and [M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]",
      "C):   N/m and [M<sup>1</sup> L<sup>0</sup> T<sup>-2</sup>]",
      "D):   Dimensionless and [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]"
    ],
    correctAnswer: "A",
    explanation: "Young's modulus Y = (F / A) / (ΔL / L). Since strain is dimensionless, the unit of Y is the unit of stress: N/m<sup>2</sup> (or Pascal, Pa), with dimensional formula [M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]."
  },

  // Q4: D
  {
    id: "c11-phy-7-mcq-4",
    question: "In physics, why is a steel wire considered significantly more elastic than an identical rubber cord?",
    options: [
      "A):   Steel stretches much more easily than rubber when pulled",
      "B):   Rubber has a higher Young's modulus than steel",
      "C):   Steel breaks under a smaller tensile load than rubber",
      "D):   Steel generates a far larger restoring stress than rubber for the same strain (Y<sub>steel</sub> > Y<sub>rubber</sub>)"
    ],
    correctAnswer: "D",
    explanation: "Elasticity measures the resistance to deforming force and the magnitude of internal restoring stress generated per unit strain. Because steel requires a much greater force to produce a given elongation, Y_steel ≫ Y_rubber, making steel strictly more elastic."
  },

  // Q5: B
  {
    id: "c11-phy-7-mcq-5",
    question: "Which of the following practical hydraulic devices operates directly on the principle of Pascal's Law of fluid pressure transmission?",
    options: [
      "A):   Venturimeter",
      "B):   Hydraulic automobile brakes",
      "C):   Atomizer spray bottle",
      "D):   Pitot tube"
    ],
    correctAnswer: "B",
    explanation: "Hydraulic brakes operate on Pascal's law: pedal pressure applied to master cylinder fluid is transmitted undiminished through brake fluid lines to slave cylinders at all four wheels, exerting large multiplied braking forces."
  },

  // Q6: A
  {
    id: "c11-phy-7-mcq-6",
    question: "What is the SI unit of the dynamic coefficient of viscosity (η)?",
    options: [
      "A):   Poiseuille (or Pa·s = N·s/m<sup>2</sup>)",
      "B):   Poise (dyne·s/cm<sup>2</sup>)",
      "C):   N/m",
      "D):   J/m<sup>2</sup>"
    ],
    correctAnswer: "A",
    explanation: "From Newton's law of viscosity F = η A (dv/dx), η = F / [A (dv/dx)] has the SI unit N·s/m<sup>2</sup> = Pa·s, also termed the Poiseuille (Pl). Note: 1 Poiseuille = 10 Poise (CGS)."
  },

  // Q7: C
  {
    id: "c11-phy-7-mcq-7",
    question: "According to Stokes' Law, how does the terminal velocity (v<sub>t</sub>) of a smooth spherical pebble falling through a viscous liquid depend on its radius r?",
    options: [
      "A):   Directly proportional to r",
      "B):   Inversely proportional to r",
      "C):   Directly proportional to r<sup>2</sup>",
      "D):   Inversely proportional to r<sup>2</sup>"
    ],
    correctAnswer: "C",
    explanation: "Terminal velocity is given by v_t = (2/9) [r<sup>2</sup> (ρ - σ) g / η]. Hence, terminal velocity is directly proportional to the square of the sphere's radius (v_t ∝ r<sup>2</sup>)."
  },

  // Q8: D
  {
    id: "c11-phy-7-mcq-8",
    question: "What is the value of the angle of contact (θ) for clean liquid water in contact with a clean glass surface?",
    options: [
      "A):   90°",
      "B):   138°",
      "C):   45°",
      "D):   Nearly 0° (acute)"
    ],
    correctAnswer: "D",
    explanation: "For pure water and clean glass, the adhesive attraction between water and glass molecules strongly overwhelms cohesive water forces, pulling the liquid into a fully wetting concave meniscus with an angle of contact θ ≈ 0°."
  },

  // Q9: B
  {
    id: "c11-phy-7-mcq-9",
    question: "What is the excess pressure (ΔP) inside a spherical liquid droplet of radius R and surface tension T hanging in air?",
    options: [
      "A):   T / R",
      "B):   2T / R",
      "C):   4T / R",
      "D):   8T / R"
    ],
    correctAnswer: "B",
    explanation: "A liquid droplet has only one free liquid-air interface. From the virtual work method, the excess pressure across this single spherical boundary is ΔP = 2T / R."
  },

  // Q10: A
  {
    id: "c11-phy-7-mcq-10",
    question: "At what specific temperature does liquid water attain its maximum density of 1000 kg/m<sup>3</sup> under standard atmospheric pressure?",
    options: [
      "A):   4°C (277 K)",
      "B):   0°C (273 K)",
      "C):   -4°C (269 K)",
      "D):   100°C (373 K)"
    ],
    correctAnswer: "A",
    explanation: "Due to anomalous thermal expansion caused by the progressive collapse of open hydrogen-bonded cage structures, water contracts when heated from 0°C to 4°C, reaching its minimum volume and maximum density at exactly 4°C."
  },

  // Q11: D
  {
    id: "c11-phy-7-mcq-11",
    question: "What is the exact theoretical ratio among the coefficients of linear (α), superficial (β), and cubical (γ) thermal expansion of an isotropic solid?",
    options: [
      "A):   1 : 1 : 1",
      "B):   3 : 2 : 1",
      "C):   1 : 3 : 2",
      "D):   1 : 2 : 3"
    ],
    correctAnswer: "D",
    explanation: "For an isotropic solid, β = 2α and γ = 3α. Therefore, the ratio of coefficients of expansion is α : β : γ = α : 2α : 3α = 1 : 2 : 3."
  },

  // Q12: C
  {
    id: "c11-phy-7-mcq-12",
    question: "Which of the following fundamental equations correctly expresses Mayer's Relation between molar specific heat capacities of an ideal gas?",
    options: [
      "A):   C<sub>p</sub> + C<sub>v</sub> = R",
      "B):   C<sub>v</sub> - C<sub>p</sub> = R",
      "C):   C<sub>p</sub> - C<sub>v</sub> = R",
      "D):   C<sub>p</sub> / C<sub>v</sub> = R"
    ],
    correctAnswer: "C",
    explanation: "Mayer's Relation is C_p - C_v = R, expressing that at constant pressure extra thermal energy equal to external expansion work (P ΔV = R ΔT) must be supplied per mole per degree rise."
  },

  // Q13: A
  {
    id: "c11-phy-7-mcq-13",
    question: "Which mode of heat transfer can propagate through a complete physical vacuum without requiring any intervening material medium?",
    options: [
      "A):   Thermal radiation",
      "B):   Thermal conduction",
      "C):   Thermal convection",
      "D):   Advection"
    ],
    correctAnswer: "A",
    explanation: "Thermal radiation travels via electromagnetic waves (infrared radiation) at the speed of light (3 × 10<sup>8</sup> m/s) and requires no material medium, allowing solar energy to traverse empty interplanetary space to reach Earth."
  },

  // Q14: B
  {
    id: "c11-phy-7-mcq-14",
    question: "According to Wien's Displacement Law for blackbody radiation, what is the mathematical relationship between peak emission wavelength (λ<sub>max</sub>) and absolute temperature (T)?",
    options: [
      "A):   λ<sub>max</sub> / T = constant",
      "B):   λ<sub>max</sub> · T = b (constant)",
      "C):   λ<sub>max</sub> · T<sup>4</sup> = constant",
      "D):   λ<sub>max</sub> = b · T<sup>2</sup>"
    ],
    correctAnswer: "B",
    explanation: "Wien's Displacement Law states that λ_max · T = b = 2.898 × 10<sup>-3</sup> m·K, meaning that as a blackbody becomes hotter, the wavelength of peak radiative emission shifts inversely toward shorter wavelengths."
  },

  // Q15: D
  {
    id: "c11-phy-7-mcq-15",
    question: "According to the Stefan-Boltzmann Law, the total radiant energy emitted per second per unit surface area of a blackbody is directly proportional to:",
    options: [
      "A):   T",
      "B):   T<sup>2</sup>",
      "C):   T<sup>3</sup>",
      "D):   T<sup>4</sup>"
    ],
    correctAnswer: "D",
    explanation: "Stefan-Boltzmann Law states that E = σ T<sup>4</sup>, where E is total radiant emissive power, σ is the Stefan-Boltzmann constant (5.67 × 10<sup>-8</sup> W/m<sup>2</sup>·K<sup>4</sup>), and T is absolute temperature in Kelvin."
  },

  // Q16: C
  {
    id: "c11-phy-7-mcq-16",
    question: "A metal wire of length L and cross-sectional area A is stretched by an extension ΔL when subjected to an external load F. What is the elastic potential energy stored in the wire?",
    options: [
      "A):   F · ΔL",
      "B):   2 F · ΔL",
      "C):   (1/2) F · ΔL",
      "D):   (1/4) F · ΔL"
    ],
    correctAnswer: "C",
    explanation: "Since restoring force increases linearly from 0 to F, average restoring force during stretching is (0 + F)/2 = F/2. Work done stored as elastic potential energy is U = Average Force × Extension = (1/2) F · ΔL."
  },

  // Q17: A
  {
    id: "c11-phy-7-mcq-17",
    question: "A wire of length L and radius r stretches by an amount ΔL under a load F. If another wire of the same material has double the length (2L) and double the radius (2r), what will be its elongation under the same load F?",
    options: [
      "A):   ΔL / 2",
      "B):   ΔL",
      "C):   2 ΔL",
      "D):   4 ΔL"
    ],
    correctAnswer: "A",
    explanation: "Elongation is ΔL = F L / (π r<sup>2</sup> Y). For the second wire: ΔL' = F (2L) / [π (2r)<sup>2</sup> Y] = 2 F L / [4 π r<sup>2</sup> Y] = (1/2) ΔL. The elongation becomes half of the original elongation."
  },

  // Q18: B
  {
    id: "c11-phy-7-mcq-18",
    question: "In a hydraulic car lift, the area of the smaller input piston is 10 cm<sup>2</sup> and that of the larger output piston is 500 cm<sup>2</sup>. If an input force of 50 N is applied to the small piston, what upward load can the large piston support?",
    options: [
      "A):   500 N",
      "B):   2500 N",
      "C):   5000 N",
      "D):   25,000 N"
    ],
    correctAnswer: "B",
    explanation: "By Pascal's principle, F_2 = F_1 × (A_2 / A_1) = 50 N × (500 cm<sup>2</sup> / 10 cm<sup>2</sup>) = 50 × 50 = 2500 N."
  },

  // Q19: D
  {
    id: "c11-phy-7-mcq-19",
    question: "A small spherical raindrop falling through air reaches a terminal velocity of 2.0 m/s. If two such identical spherical raindrops coalesce to form a single larger spherical drop, what is the terminal velocity of the new drop?",
    options: [
      "A):   2.0 m/s",
      "B):   2.83 m/s",
      "C):   4.0 m/s",
      "D):   2 × 2<sup>2/3</sup> ≈ 3.17 m/s"
    ],
    correctAnswer: "D",
    explanation: "By conservation of volume: (4/3)π R<sup>3</sup> = 2 × (4/3)π r<sup>3</sup> ⟹ R = 2<sup>1/3</sup> r. Since terminal speed v_t ∝ r<sup>2</sup>: v_new / v_old = (R / r)<sup>2</sup> = (2<sup>1/3</sup>)<sup>2</sup> = 2<sup>2/3</sup>. Thus v_new = 2.0 × 2<sup>2/3</sup> ≈ 2.0 × 1.587 = 3.17 m/s."
  },

  // Q20: C
  {
    id: "c11-phy-7-mcq-20",
    question: "Water rises to a height h in a glass capillary tube of radius r. If the tube is replaced by another capillary of radius r/2, to what height will water rise?",
    options: [
      "A):   h / 2",
      "B):   h",
      "C):   2 h",
      "D):   4 h"
    ],
    correctAnswer: "C",
    explanation: "According to Jurin's Law, capillary ascent is inversely proportional to bore radius: h = 2T cosθ / (r ρ g) ⟹ h ∝ 1/r. Halving the radius doubles the ascent height to 2h."
  },

  // Q21: A
  {
    id: "c11-phy-7-mcq-21",
    question: "What is the total mechanical work required to blow a spherical soap bubble from an initial radius R to a final radius 2R in air, if the surface tension of the soap solution is T?",
    options: [
      "A):   24π R<sup>2</sup> T",
      "B):   12π R<sup>2</sup> T",
      "C):   8π R<sup>2</sup> T",
      "D):   48π R<sup>2</sup> T"
    ],
    correctAnswer: "A",
    explanation: "A soap bubble has 2 free surfaces, so total area is A = 2 × (4π R<sup>2</sup>) = 8π R<sup>2</sup>. Increase in area is ΔA = 8π [(2R)<sup>2</sup> - R<sup>2</sup>] = 8π (4R<sup>2</sup> - R<sup>2</sup>) = 24π R<sup>2</sup>. Work done is W = T · ΔA = 24π R<sup>2</sup> T."
  },

  // Q22: D
  {
    id: "c11-phy-7-mcq-22",
    question: "A metal rod of length 1.0 m expands in length by 1.2 mm when heated through a temperature increase of 100°C. What is the coefficient of linear expansion (α) of the metal?",
    options: [
      "A):   1.2 × 10<sup>-3</sup> K<sup>-1</sup>",
      "B):   2.4 × 10<sup>-5</sup> K<sup>-1</sup>",
      "C):   1.2 × 10<sup>-4</sup> K<sup>-1</sup>",
      "D):   1.2 × 10<sup>-5</sup> K<sup>-1</sup>"
    ],
    correctAnswer: "D",
    explanation: "Coefficient of linear expansion is α = ΔL / (L_0 ΔT) = (1.2 × 10<sup>-3</sup> m) / (1.0 m × 100 K) = 1.2 × 10<sup>-5</sup> K<sup>-1</sup>."
  },

  // Q23: B
  {
    id: "c11-phy-7-mcq-23",
    question: "Two metal slabs of equal thickness d and equal area A, having thermal conductivities K and 2K, are joined end-to-end in series. What is the equivalent thermal conductivity (K<sub>eq</sub>) of the combination?",
    options: [
      "A):   1.5 K",
      "B):   (4/3) K ≈ 1.33 K",
      "C):   0.75 K",
      "D):   3 K"
    ],
    correctAnswer: "B",
    explanation: "In series combination of two slabs of equal thickness: K_eq = 2 K_1 K_2 / (K_1 + K_2) = 2(K)(2K) / (K + 2K) = 4K<sup>2</sup> / 3K = (4/3) K."
  },

  // Q24: C
  {
    id: "c11-phy-7-mcq-24",
    question: "A blackbody at an absolute temperature of 27°C (300 K) radiates thermal energy at a rate E. If its temperature is raised to 327°C (600 K), what will be its new rate of thermal emission?",
    options: [
      "A):   2 E",
      "B):   4 E",
      "C):   16 E",
      "D):   81 E"
    ],
    correctAnswer: "C",
    explanation: "Initial temperature T_1 = 27 + 273 = 300 K. Final temperature T_2 = 327 + 273 = 600 K = 2 T_1. By Stefan-Boltzmann Law, E ∝ T<sup>4</sup>. Therefore, E_2 / E_1 = (T_2 / T_1)<sup>4</sup> = (600 / 300)<sup>4</sup> = 2<sup>4</sup> = 16. The rate becomes 16 E."
  },

  // Q25: D
  {
    id: "c11-phy-7-mcq-25",
    question: "The solar spectrum reaches its maximum radiant emission intensity at a wavelength of 480 nm when the Sun's surface is at 6000 K. At what wavelength will a cooler giant star with surface temperature 3000 K exhibit its maximum emission intensity?",
    options: [
      "A):   240 nm",
      "B):   360 nm",
      "C):   720 nm",
      "D):   960 nm"
    ],
    correctAnswer: "D",
    explanation: "By Wien's Displacement Law: λ_max · T = constant ⟹ λ_1 T_1 = λ_2 T_2. Therefore, λ_2 = λ_1 × (T_1 / T_2) = 480 nm × (6000 K / 3000 K) = 480 × 2 = 960 nm (in the near-infrared spectrum)."
  }
];

module.exports = { mcqs };
