// scripts/c11_phy_9_mcqs.js
const { sanitizeMath } = require('./sanitize_math');

const rawMcqs = [
  // Q1 - Basic - Key: A
  {
    id: "c11-phy-9-mcq-1",
    question: "What is the SI unit of the Universal Gas Constant $R$?",
    options: [
      "A):   $\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$",
      "B):   $\\text{N}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-1}$",
      "C):   $\\text{J}\\cdot\\text{K}^{-1}$",
      "D):   $\\text{cal}\\cdot\\text{g}^{-1}\\cdot\\text{K}^{-1}$"
    ],
    correctAnswer: "A",
    explanation: "From the ideal gas equation $P V = n R T$, the gas constant is $R = \\frac{P V}{n T} = \\frac{\\text{J}}{\\text{mol}\\cdot\\text{K}} = \\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$."
  },
  // Q2 - Basic - Key: B
  {
    id: "c11-phy-9-mcq-2",
    question: "According to the kinetic theory of gases, the average translational kinetic energy of a single molecule of any ideal gas at absolute temperature $T$ is:",
    options: [
      "A):   $\\frac{1}{2} k_B T$",
      "B):   $\\frac{3}{2} k_B T$",
      "C):   $\\frac{5}{2} k_B T$",
      "D):   $3 k_B T$"
    ],
    correctAnswer: "B",
    explanation: "Every molecule has 3 independent translational degrees of freedom in 3D space. By equipartition, each degree of freedom has mean energy $\\frac{1}{2} k_B T$, giving a total translational kinetic energy of $\\frac{3}{2} k_B T$ per molecule, regardless of molecular mass."
  },
  // Q3 - Basic - Key: C
  {
    id: "c11-phy-9-mcq-3",
    question: "What is the direct relationship between the pressure $P$ of an ideal gas and its translational kinetic energy per unit volume ($E_v$)?",
    options: [
      "A):   $P = E_v$",
      "B):   $P = \\frac{1}{2} E_v$",
      "C):   $P = \\frac{2}{3} E_v$",
      "D):   $P = \\frac{3}{2} E_v$"
    ],
    correctAnswer: "C",
    explanation: "Since pressure is $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$ and translational kinetic energy density is $E_v = \\frac{1}{2} \\rho v_{\\text{rms}}^2$, we immediately obtain $P = \\frac{2}{3} E_v$."
  },
  // Q4 - Basic - Key: D
  {
    id: "c11-phy-9-mcq-4",
    question: "How many total degrees of freedom does a rigid diatomic molecule (such as $\\text{O}_2$ or $\\text{N}_2$) possess at room temperature?",
    options: [
      "A):   $2$",
      "B):   $3$",
      "C):   $4$",
      "D):   $5$"
    ],
    correctAnswer: "D",
    explanation: "A rigid diatomic molecule at room temperature has 3 translational degrees of freedom (center-of-mass motion) plus 2 rotational degrees of freedom (rotation about perpendicular axes orthogonal to the internuclear axis), totaling $3 + 2 = 5$ degrees of freedom."
  },
  // Q5 - Basic - Key: A
  {
    id: "c11-phy-9-mcq-5",
    question: "According to classical kinetic theory, what happens to gas molecules at absolute zero ($0\\text{ K}$)?",
    options: [
      "A):   Random translational molecular motion completely ceases ($v_{\\text{rms}} = 0$)",
      "B):   Gas pressure reaches infinity",
      "C):   Molecules collapse into their atomic nuclei",
      "D):   Molecular speed approaches the speed of light"
    ],
    correctAnswer: "A",
    explanation: "From $\\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T$, setting $T = 0\\text{ K}$ implies $v_{\\text{rms}} = 0$. Classically, all random thermal translational motion completely halts at absolute zero."
  },
  // Q6 - Basic - Key: B
  {
    id: "c11-phy-9-mcq-6",
    question: "What is the correct numerical ratio comparing most probable speed ($v_{\\text{mp}}$), average speed ($\\overline{v}$), and root-mean-square speed ($v_{\\text{rms}}$)?",
    options: [
      "A):   $1 : 1 : 1$",
      "B):   $\\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1 : 1.128 : 1.224$",
      "C):   $\\sqrt{3} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{2}$",
      "D):   $2 : 3 : 4$"
    ],
    correctAnswer: "B",
    explanation: "The characteristic Maxwellian speeds are $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$, $\\overline{v} = \\sqrt{\\frac{8RT}{\\pi M}}$, and $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. Their ratio is $\\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1 : 1.128 : 1.224$, proving $v_{\\text{mp}} < \\overline{v} < v_{\\text{rms}}$."
  },
  // Q7 - Basic - Key: C
  {
    id: "c11-phy-9-mcq-7",
    question: "If the absolute temperature of an ideal gas is quadrupled from $T$ to $4T$, the root-mean-square speed of its molecules becomes:",
    options: [
      "A):   Unchanged",
      "B):   Four times its initial value ($4 v_{\\text{rms}}$)",
      "C):   Twice its initial value ($2 v_{\\text{rms}}$)",
      "D):   Sixteen times its initial value ($16 v_{\\text{rms}}$)"
    ],
    correctAnswer: "C",
    explanation: "Since $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\propto \\sqrt{T}$, quadrupling temperature ($T \\to 4T$) causes the rms speed to scale by $\\sqrt{4} = 2$ times."
  },
  // Q8 - Basic - Key: D
  {
    id: "c11-phy-9-mcq-8",
    question: "The mean free path ($\\lambda$) of gas molecules is inversely proportional to which geometric parameter?",
    options: [
      "A):   Molecular mass ($m$)",
      "B):   Molecular velocity ($v$)",
      "C):   Molecular diameter ($d$)",
      "D):   Square of molecular diameter ($d^2$)"
    ],
    correctAnswer: "D",
    explanation: "From the fundamental derivation $\\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2}$, the mean free path is inversely proportional to the collision cross-sectional area $\\pi d^2$, and therefore inversely proportional to $d^2$."
  },
  // Q9 - Basic - Key: A
  {
    id: "c11-phy-9-mcq-9",
    question: "In a reversible isothermal expansion of $n$ moles of an ideal gas from volume $V_1$ to $V_2$, the work done BY the gas is:",
    options: [
      "A):   $n R T \\ln\\left( \\frac{V_2}{V_1} \\right)$",
      "B):   $n R T \\left( \\frac{V_2}{V_1} \\right)$",
      "C):   $P (V_2 - V_1)$",
      "D):   Zero"
    ],
    correctAnswer: "A",
    explanation: "In an isothermal expansion, $P = \\frac{nRT}{V}$, so work done is $W = \\int_{V_1}^{V_2} P dV = n R T \\int_{V_1}^{V_2} \\frac{dV}{V} = n R T \\ln\\left( \\frac{V_2}{V_1} \\right)$."
  },
  // Q10 - Basic - Key: B
  {
    id: "c11-phy-9-mcq-10",
    question: "For a monoatomic ideal gas ($f = 3$, such as Argon or Helium), what is the theoretical value of the adiabatic ratio $\\gamma = C_p / C_v$?",
    options: [
      "A):   $1.40$",
      "B):   $\\frac{5}{3} \\approx 1.67$",
      "C):   $\\frac{4}{3} \\approx 1.33$",
      "D):   $2.00$"
    ],
    correctAnswer: "B",
    explanation: "For a monoatomic gas, $C_v = \\frac{3}{2} R$ and $C_p = \\frac{5}{2} R$. The adiabatic index is $\\gamma = 1 + \\frac{2}{f} = 1 + \\frac{2}{3} = \\frac{5}{3} \\approx 1.67$."
  },
  // Q11 - Basic - Key: C
  {
    id: "c11-phy-9-mcq-11",
    question: "According to the Law of Equipartition of Energy, the average kinetic or potential energy associated with EACH independent quadratic degree of freedom per molecule in thermal equilibrium is:",
    options: [
      "A):   $k_B T$",
      "B):   $\\frac{3}{2} k_B T$",
      "C):   $\\frac{1}{2} k_B T$",
      "D):   $R T$"
    ],
    correctAnswer: "C",
    explanation: "The Law of Equipartition states that each independent coordinate or momentum appearing quadratically in the energy Hamiltonian carries an average thermal energy of precisely $\\frac{1}{2} k_B T$."
  },
  // Q12 - Basic - Key: D
  {
    id: "c11-phy-9-mcq-12",
    question: "According to Graham's Law of Diffusion, at a given temperature and pressure, the rate of diffusion $r$ of a gas is inversely proportional to:",
    options: [
      "A):   Its volume ($V$)",
      "B):   Its absolute temperature ($T$)",
      "C):   Its molar mass ($M$)",
      "D):   The square root of its molar mass ($\\sqrt{M}$)"
    ],
    correctAnswer: "D",
    explanation: "The diffusion rate is proportional to molecular speed: $r \\propto v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\implies r \\propto \\frac{1}{\\sqrt{M}}$. Hence lighter gases diffuse faster than heavier gases."
  },
  // Q13 - Basic - Key: A
  {
    id: "c11-phy-9-mcq-13",
    question: "Under which pair of thermodynamic conditions does a real gas behave most nearly like an ideal gas?",
    options: [
      "A):   High temperature and low pressure",
      "B):   Low temperature and high pressure",
      "C):   Low temperature and low pressure",
      "D):   High temperature and high pressure"
    ],
    correctAnswer: "A",
    explanation: "At high temperature, molecular kinetic energies are large enough to overcome intermolecular attractions ($a/V^2 \\approx 0$). At low pressure, the container volume is enormous, making actual molecular volume completely negligible ($b \\ll V$)."
  },
  // Q14 - Basic - Key: B
  {
    id: "c11-phy-9-mcq-14",
    question: "According to the Dulong-Petit Law, what is the theoretical molar heat capacity of a monoatomic crystalline solid at room temperature?",
    options: [
      "A):   $\\frac{3}{2} R$",
      "B):   $3 R \\approx 24.9\\text{ J/mol}\\cdot\\text{K}$",
      "C):   $\\frac{9}{2} R$",
      "D):   $R$"
    ],
    correctAnswer: "B",
    explanation: "In a solid lattice, each atom behaves as a 3D harmonic oscillator with 6 quadratic energy terms ($3$ kinetic + $3$ potential). Total internal energy is $U = 6 \\times \\frac{1}{2} R T = 3 R T$, yielding $C = \\frac{dU}{dT} = 3 R \\approx 24.94\\text{ J/mol}\\cdot\\text{K}$."
  },
  // Q15 - Basic - Key: C
  {
    id: "c11-phy-9-mcq-15",
    question: "The total number of molecules contained in $22.4\\text{ liters}$ of any ideal gas at Standard Temperature and Pressure (STP) is:",
    options: [
      "A):   $1.0 \\times 10^{20}$",
      "B):   $3.011 \\times 10^{23}$",
      "C):   $6.022 \\times 10^{23}$ (Avogadro's constant)",
      "D):   $1.38 \\times 10^{-23}$"
    ],
    correctAnswer: "C",
    explanation: "By Avogadro's hypothesis, $1\\text{ mole}$ of any ideal gas occupies $22.4\\text{ L}$ at STP ($0^{\\circ}\\text{C}, 1\\text{ atm}$) and contains exactly $N_A = 6.022 \\times 10^{23}$ molecules."
  },
  // Q16 - Moderate/Numerical - Key: D
  {
    id: "c11-phy-9-mcq-16",
    question: "At what absolute temperature will the root-mean-square speed of oxygen molecules ($\\text{O}_2$, molar mass $32\\text{ g/mol}$) be equal to that of hydrogen molecules ($\\text{H}_2$, molar mass $2\\text{ g/mol}$) at $300\\text{ K}$?",
    options: [
      "A):   $600\\text{ K}$",
      "B):   $1200\\text{ K}$",
      "C):   $2400\\text{ K}$",
      "D):   $4800\\text{ K}$"
    ],
    correctAnswer: "D",
    explanation: "For equal rms speeds: $\\frac{3RT_{\\text{O}_2}}{M_{\\text{O}_2}} = \\frac{3RT_{\\text{H}_2}}{M_{\\text{H}_2}} \\implies \\frac{T_{\\text{O}_2}}{32} = \\frac{300}{2} = 150 \\implies T_{\\text{O}_2} = 150 \\times 32 = 4800\\text{ K}$."
  },
  // Q17 - Moderate - Key: A
  {
    id: "c11-phy-9-mcq-17",
    question: "If the pressure of an enclosed ideal gas is doubled while maintaining its temperature strictly constant, the root-mean-square speed of its molecules will:",
    options: [
      "A):   Remain completely unchanged",
      "B):   Double",
      "C):   Increase by a factor of $\\sqrt{2}$",
      "D):   Be halved"
    ],
    correctAnswer: "A",
    explanation: "RMS speed is $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. At constant temperature $T$, $v_{\\text{rms}}$ is strictly constant. When pressure is doubled, density $\\rho$ also doubles, so the ratio $P/\\rho$ remains invariant."
  },
  // Q18 - Moderate/Numerical - Key: B
  {
    id: "c11-phy-9-mcq-18",
    question: "A mixture consists of $1\\text{ mole}$ of Helium (monoatomic, $f=3$) and $1\\text{ mole}$ of Hydrogen (rigid diatomic, $f=5$). What is the effective adiabatic index $\\gamma_{\\text{mix}}$ of the mixture?",
    options: [
      "A):   $1.40$",
      "B):   $1.50$",
      "C):   $1.67$",
      "D):   $1.33$"
    ],
    correctAnswer: "B",
    explanation: "Total molar heat capacity at constant volume is $C_{v,\\text{mix}} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{1(1.5R) + 1(2.5R)}{2} = 2.0R$. Then $C_{p,\\text{mix}} = C_{v,\\text{mix}} + R = 3.0R$. Hence $\\gamma_{\\text{mix}} = \\frac{C_p}{C_v} = \\frac{3.0R}{2.0R} = 1.50$."
  },
  // Q19 - Moderate/Numerical - Key: C
  {
    id: "c11-phy-9-mcq-19",
    question: "A monoatomic ideal gas ($\\gamma = 5/3$) is compressed adiabatically to $\\frac{1}{8}$ of its initial volume ($V_2 = V_1 / 8$). By what factor does its pressure increase?",
    options: [
      "A):   $8$",
      "B):   $16$",
      "C):   $32$",
      "D):   $64$"
    ],
    correctAnswer: "C",
    explanation: "For an adiabatic process, $P_1 V_1^{\\gamma} = P_2 V_2^{\\gamma} \\implies P_2 = P_1 \\left( \\frac{V_1}{V_2} \\right)^{\\gamma} = P_1 (8)^{5/3} = P_1 (2^3)^{5/3} = P_1 (2)^5 = 32 P_1$."
  },
  // Q20 - Moderate - Key: D
  {
    id: "c11-phy-9-mcq-20",
    question: "A sealed rigid container holds a fixed mass of gas. If the container volume is halved at constant temperature, what happens to the mean free path $\\lambda$ of the molecules?",
    options: [
      "A):   It quadruples",
      "B):   It doubles",
      "C):   It remains constant",
      "D):   It is halved"
    ],
    correctAnswer: "D",
    explanation: "Mean free path is $\\lambda = \\frac{V}{\\sqrt{2}\\pi N d^2} \\propto V$. When the volume is halved for a fixed number of molecules $N$, the number density doubles, causing the mean free path to decrease to half its original value."
  },
  // Q21 - Moderate - Key: A
  {
    id: "c11-phy-9-mcq-21",
    question: "What is the theoretical ratio of the speed of sound ($v_s$) in an ideal gas to the molecular root-mean-square speed ($v_{\\text{rms}}$)?",
    options: [
      "A):   $\\sqrt{\\frac{\\gamma}{3}}$",
      "B):   $\\sqrt{\\frac{3}{\\gamma}}$",
      "C):   $\\frac{\\gamma}{3}$",
      "D):   $\\sqrt{\\gamma}$"
    ],
    correctAnswer: "A",
    explanation: "Speed of sound is $v_s = \\sqrt{\\frac{\\gamma R T}{M}}$ and molecular rms speed is $v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}}$. Dividing gives $\\frac{v_s}{v_{\\text{rms}}} = \\sqrt{\\frac{\\gamma}{3}}$."
  },
  // Q22 - Moderate - Key: B
  {
    id: "c11-phy-9-mcq-22",
    question: "Two separate insulated containers of equal volume $V$ contain Gas 1 (molar mass $M_1 = 4\\text{ g/mol}$) and Gas 2 (molar mass $M_2 = 32\\text{ g/mol}$) at identical pressure $P$ and temperature $T$. What is the ratio of their total translational kinetic energies ($E_1 : E_2$)?",
    options: [
      "A):   $1 : 8$",
      "B):   $1 : 1$",
      "C):   $8 : 1$",
      "D):   $1 : 2\\sqrt{2}$"
    ],
    correctAnswer: "B",
    explanation: "Total translational kinetic energy in volume $V$ is $E = \\frac{3}{2} P V$. Since both containers have identical pressure $P$ and volume $V$, their total translational kinetic energies are equal: $E_1 : E_2 = 1 : 1$."
  },
  // Q23 - Moderate - Key: C
  {
    id: "c11-phy-9-mcq-23",
    question: "In the van der Waals equation of state $\\left( P + \\frac{a n^2}{V^2} \\right) (V - n b) = n R T$, the parameter $a$ physically accounts for:",
    options: [
      "A):   The finite non-zero volume occupied by the gas molecules",
      "B):   The kinetic energy loss during inelastic wall collisions",
      "C):   The attractive intermolecular van der Waals forces pulling molecules inward",
      "D):   The rotational degrees of freedom of the molecules"
    ],
    correctAnswer: "C",
    explanation: "The constant $a$ represents the correction for mutual intermolecular attractive forces, which pull molecules toward the interior of the gas as they approach the container walls, reducing the observed wall pressure."
  },
  // Q24 - Moderate/Numerical - Key: D
  {
    id: "c11-phy-9-mcq-24",
    question: "What is the total translational kinetic energy of $1\\text{ mole}$ of any ideal gas at $27^{\\circ}\\text{C}$ ($300\\text{ K}$)? ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$)",
    options: [
      "A):   $1247\\text{ J}$",
      "B):   $1870\\text{ J}$",
      "C):   $2494\\text{ J}$",
      "D):   $3741\\text{ J}$"
    ],
    correctAnswer: "D",
    explanation: "For $1$ mole, translational kinetic energy is $E_{\\text{mole}} = \\frac{3}{2} R T = 1.5 \\times 8.314 \\times 300 = 3741.3\\text{ J} \\approx 3741\\text{ J}$."
  },
  // Q25 - Advance - Key: D
  {
    id: "c11-phy-9-mcq-25",
    question: "For a diatomic gas at very high temperatures where vibrational modes are fully active ($f = 7$), what are the molar heat capacity at constant pressure $C_p$ and the adiabatic ratio $\\gamma$?",
    options: [
      "A):   $C_p = \\frac{5}{2} R, \\quad \\gamma = 1.67$",
      "B):   $C_p = \\frac{7}{2} R, \\quad \\gamma = 1.40$",
      "C):   $C_p = 4 R, \\quad \\gamma = 1.33$",
      "D):   $C_p = \\frac{9}{2} R, \\quad \\gamma = \\frac{9}{7} \\approx 1.29$"
    ],
    correctAnswer: "D",
    explanation: "With active vibration ($f=7$), $C_v = \\frac{7}{2} R$. Using Mayer's relation: $C_p = C_v + R = \\frac{7}{2} R + R = \\frac{9}{2} R$. The adiabatic index is $\\gamma = \\frac{C_p}{C_v} = \\frac{9/2 R}{7/2 R} = \\frac{9}{7} \\approx 1.29$."
  }
];

const c11Phy9Mcqs = rawMcqs.map(mcq => ({
  id: mcq.id,
  question: sanitizeMath(mcq.question),
  options: mcq.options.map(opt => sanitizeMath(opt)),
  correctAnswer: mcq.correctAnswer,
  explanation: sanitizeMath(mcq.explanation)
}));

module.exports = { c11Phy9Mcqs };
