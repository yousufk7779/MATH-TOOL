// scripts/c11_phy_8_mcqs.js

const mcqs = [
  // Q1: B
  {
    id: "c11-phy-8-mcq-1",
    question: "Which fundamental physical state variable is defined and conceptually established by the Zeroth Law of Thermodynamics?",
    options: [
      "A):   Internal energy",
      "B):   Temperature",
      "C):   Entropy",
      "D):   Pressure"
    ],
    correctAnswer: "B",
    explanation: "The Zeroth Law states that two systems in thermal equilibrium with a third system are in mutual thermal equilibrium with each other, establishing temperature as the universal state property governing thermal equilibrium."
  },

  // Q2: C
  {
    id: "c11-phy-8-mcq-2",
    question: "Which of the following statements correctly characterizes an isolated thermodynamic system?",
    options: [
      "A):   It exchanges energy but cannot exchange matter with surroundings",
      "B):   It exchanges matter but cannot exchange energy with surroundings",
      "C):   It can exchange neither energy nor matter with its surroundings",
      "D):   It freely exchanges both energy and matter across its boundary"
    ],
    correctAnswer: "C",
    explanation: "An isolated system is enclosed by a rigid, adiabatic, impermeable boundary, completely preventing the exchange of both matter and energy (heat or work) with the external surroundings."
  },

  // Q3: A
  {
    id: "c11-phy-8-mcq-3",
    question: "What is the external mechanical work done by an ideal gas during an isochoric heating process?",
    options: [
      "A):   Strictly zero (W = 0)",
      "B):   W = P ΔV",
      "C):   W = n R T ln(V<sub>2</sub> / V<sub>1</sub>)",
      "D):   W = n C<sub>p</sub> ΔT"
    ],
    correctAnswer: "A",
    explanation: "In an isochoric process, volume remains strictly constant (dV = 0). Since thermodynamic work is W = ∫ P dV, no boundary displacement occurs, so W = 0."
  },

  // Q4: D
  {
    id: "c11-phy-8-mcq-4",
    question: "The First Law of Thermodynamics is the macroscopic mathematical formulation of which universal physical law?",
    options: [
      "A):   Law of Conservation of Linear Momentum",
      "B):   Law of Conservation of Angular Momentum",
      "C):   Newton's Third Law of Motion",
      "D):   Law of Conservation of Energy"
    ],
    correctAnswer: "D",
    explanation: "The First Law (ΔQ = ΔU + ΔW) asserts that energy supplied as heat is conserved by increasing internal energy and performing external mechanical work, embodying the Law of Conservation of Energy."
  },

  // Q5: B
  {
    id: "c11-phy-8-mcq-5",
    question: "For an isothermal expansion of an ideal gas, what is the change in its internal energy (ΔU)?",
    options: [
      "A):   ΔU > 0",
      "B):   ΔU = 0",
      "C):   ΔU < 0",
      "D):   ΔU = W / 2"
    ],
    correctAnswer: "B",
    explanation: "According to Joule's law, the internal energy of an ideal gas depends exclusively on temperature (U = n C_v T). In an isothermal process, ΔT = 0, which implies ΔU = 0."
  },

  // Q6: A
  {
    id: "c11-phy-8-mcq-6",
    question: "When an ideal gas undergoes a rapid, reversible adiabatic expansion, what happens to its absolute temperature?",
    options: [
      "A):   The temperature decreases (the gas cools down)",
      "B):   The temperature increases (the gas heats up)",
      "C):   The temperature remains strictly constant",
      "D):   The temperature drops to absolute zero"
    ],
    correctAnswer: "A",
    explanation: "In an adiabatic expansion, dQ = 0. By the First Law, dW = -dU. Since the gas performs positive work (dW > 0), its internal energy must decrease (dU < 0), resulting in a temperature drop (cooling)."
  },

  // Q7: C
  {
    id: "c11-phy-8-mcq-7",
    question: "On a Pressure-Volume (P-V) indicator diagram, how does the slope of an adiabatic curve compare to the slope of an isothermal curve passing through the identical state point?",
    options: [
      "A):   Both slopes are identical",
      "B):   Isothermal curve is γ times steeper than adiabatic curve",
      "C):   Adiabatic curve is γ times steeper than isothermal curve",
      "D):   Adiabatic slope is positive while isothermal slope is negative"
    ],
    correctAnswer: "C",
    explanation: "Differentiating P V = const gives (dP/dV)_iso = -P/V, whereas differentiating P V<sup>γ</sup> = const gives (dP/dV)_adia = -γ(P/V). Thus, (dP/dV)_adia = γ × (dP/dV)_iso. Since γ > 1, the adiabatic slope is γ times steeper."
  },

  // Q8: D
  {
    id: "c11-phy-8-mcq-8",
    question: "What is the numerical value of the isothermal bulk modulus of elasticity (E<sub>θ</sub>) of an ideal gas at pressure P?",
    options: [
      "A):   Zero",
      "B):   γ P",
      "C):   P / γ",
      "D):   P"
    ],
    correctAnswer: "D",
    explanation: "Isothermal bulk modulus is E_θ = -V (dP/dV)_iso. Substituting (dP/dV)_iso = -P/V gives E_θ = -V (-P/V) = P. It is numerically equal to the gas pressure."
  },

  // Q9: B
  {
    id: "c11-phy-8-mcq-9",
    question: "Which of the following physical impossibilities is explicitly stated by the Kelvin-Planck statement of the Second Law of Thermodynamics?",
    options: [
      "A):   Spontaneous heat transfer from colder to hotter bodies",
      "B):   A cyclic heat engine converting 100% of absorbed heat into work without rejecting heat to a cold sink",
      "C):   Creation of energy from nothing in a mechanical cycle",
      "D):   Reversible expansion of an ideal gas"
    ],
    correctAnswer: "B",
    explanation: "The Kelvin-Planck statement asserts that it is impossible to construct a cyclic heat engine operating on a single reservoir that converts all absorbed heat into work with zero heat rejection to a sink (η < 100% always)."
  },

  // Q10: A
  {
    id: "c11-phy-8-mcq-10",
    question: "A closed thermodynamic cycle is traversed in a clockwise direction on a P-V indicator diagram. The net mechanical work done per cycle is:",
    options: [
      "A):   Positive (work output by the system)",
      "B):   Negative (work consumed by the system)",
      "C):   Zero",
      "D):   Infinite"
    ],
    correctAnswer: "A",
    explanation: "In a clockwise cycle, the upper expansion path occurs at higher pressures than the lower compression path. The positive expansion area exceeds the negative compression area, yielding positive net work output (Heat Engine)."
  },

  // Q11: D
  {
    id: "c11-phy-8-mcq-11",
    question: "What is the maximum theoretical efficiency (η) of a reversible Carnot engine operating between a source at temperature T<sub>1</sub> and a sink at temperature T<sub>2</sub>?",
    options: [
      "A):   T<sub>2</sub> / T<sub>1</sub>",
      "B):   1 - (T<sub>1</sub> / T<sub>2</sub>)",
      "C):   (T<sub>1</sub> - T<sub>2</sub>) / T<sub>2</sub>",
      "D):   1 - (T<sub>2</sub> / T<sub>1</sub>)"
    ],
    correctAnswer: "D",
    explanation: "Carnot efficiency is given by η = W / Q_1 = 1 - (Q_2 / Q_1). For a reversible cycle, Q_2 / Q_1 = T_2 / T_1, which yields η = 1 - (T_2 / T_1) = (T_1 - T_2) / T_1."
  },

  // Q12: C
  {
    id: "c11-phy-8-mcq-12",
    question: "What is the SI unit and dimensional formula of entropy (S)?",
    options: [
      "A):   Joule (J) and [M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup>]",
      "B):   Watt per Kelvin (W/K) and [M<sup>1</sup> L<sup>2</sup> T<sup>-3</sup> K<sup>-1</sup>]",
      "C):   Joule per Kelvin (J/K) and [M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup> K<sup>-1</sup>]",
      "D):   Dimensionless and [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]"
    ],
    correctAnswer: "C",
    explanation: "From dS = dQ_rev / T, the SI unit of entropy is Joule per Kelvin (J/K or J·K<sup>-1</sup>), with dimensional formula [M<sup>1</sup> L<sup>2</sup> T<sup>-2</sup> K<sup>-1</sup>]."
  },

  // Q13: A
  {
    id: "c11-phy-8-mcq-13",
    question: "In any natural spontaneous irreversible process occurring within an isolated universe, the total entropy of the universe:",
    options: [
      "A):   Always increases (ΔS<sub>universe</sub> > 0)",
      "B):   Always decreases (ΔS<sub>universe</sub> < 0)",
      "C):   Remains strictly zero (ΔS<sub>universe</sub> = 0)",
      "D):   Oscillates between positive and negative values"
    ],
    correctAnswer: "A",
    explanation: "The Principle of Increase of Entropy (Second Law) states that all spontaneous natural processes are irreversible and generate entropy, meaning ΔS_universe > 0 continuously (defining the arrow of time)."
  },

  // Q14: B
  {
    id: "c11-phy-8-mcq-14",
    question: "What is the theoretical value of the adiabatic ratio (γ = C<sub>p</sub> / C<sub>v</sub>) for a monoatomic ideal gas such as Helium or Argon?",
    options: [
      "A):   1.40 (7/5)",
      "B):   1.67 (5/3)",
      "C):   1.33 (4/3)",
      "D):   1.28 (9/7)"
    ],
    correctAnswer: "B",
    explanation: "For a monoatomic gas with 3 translational degrees of freedom: C_v = (3/2)R and C_p = C_v + R = (5/2)R. Thus, γ = C_p / C_v = (5/2) / (3/2) = 5/3 ≈ 1.67."
  },

  // Q15: D
  {
    id: "c11-phy-8-mcq-15",
    question: "If the door of an operational domestic refrigerator is left wide open in a closed, thermally insulated room, the temperature of the room will:",
    options: [
      "A):   Drop steadily until the room freezes",
      "B):   Remain completely unchanged",
      "C):   First decrease, then stay constant",
      "D):   Gradually increase over time"
    ],
    correctAnswer: "D",
    explanation: "The refrigerator rejects heat Q_1 = Q_2 + W into the room, where W is the electrical work input. Because Q_1 > Q_2, more heat is released from the condenser into the room than is extracted from the room air, gradually warming the room."
  },

  // Q16: C
  {
    id: "c11-phy-8-mcq-16",
    question: "One mole of an ideal gas at temperature 300 K expands isothermally to double its original volume. What is the work done by the gas? (R = 8.314 J/mol·K, ln 2 ≈ 0.693).",
    options: [
      "A):   831 J",
      "B):   1247 J",
      "C):   1729 J",
      "D):   2494 J"
    ],
    correctAnswer: "C",
    explanation: "Work done in isothermal expansion is W = n R T ln(V_2 / V_1) = 1 × 8.314 × 300 × ln(2) = 2494.2 × 0.69315 ≈ 1728.9 J ≈ 1729 J."
  },

  // Q17: A
  {
    id: "c11-phy-8-mcq-17",
    question: "An ideal gas with γ = 1.4 is compressed adiabatically to 1/32 of its initial volume. What is the ratio of final to initial absolute temperature (T<sub>2</sub> / T<sub>1</sub>)?",
    options: [
      "A):   4.0",
      "B):   2.0",
      "C):   8.0",
      "D):   16.0"
    ],
    correctAnswer: "A",
    explanation: "From Poisson's relation T V<sup>γ-1</sup> = const: T_2 / T_1 = (V_1 / V_2)<sup>γ-1</sup> = (32)<sup>1.4 - 1</sup> = (32)<sup>0.4</sup> = (2<sup>5</sup>)<sup>0.4</sup> = 2<sup>2</sup> = 4.0."
  },

  // Q18: B
  {
    id: "c11-phy-8-mcq-18",
    question: "A reversible Carnot heat engine operates between a heat source at 600 K and a cold sink at 300 K. What is its thermal efficiency?",
    options: [
      "A):   25%",
      "B):   50%",
      "C):   75%",
      "D):   100%"
    ],
    correctAnswer: "B",
    explanation: "Carnot efficiency is η = 1 - (T_2 / T_1) = 1 - (300 / 600) = 1 - 0.5 = 0.50 = 50%."
  },

  // Q19: D
  {
    id: "c11-phy-8-mcq-19",
    question: "A Carnot refrigerator operates between a cold freezing chamber at -23°C (250 K) and ambient surroundings at 27°C (300 K). What is its theoretical Coefficient of Performance (COP)?",
    options: [
      "A):   1.2",
      "B):   2.5",
      "C):   4.0",
      "D):   5.0"
    ],
    correctAnswer: "D",
    explanation: "COP of a Carnot refrigerator is β = T_2 / (T_1 - T_2) = 250 / (300 - 250) = 250 / 50 = 5.0."
  },

  // Q20: C
  {
    id: "c11-phy-8-mcq-20",
    question: "An ideal gas expands isobarically at a constant pressure of 2.0 × 10<sup>5</sup> Pa, increasing its volume by 0.005 m<sup>3</sup>. If 1500 J of heat is supplied during the process, what is the change in its internal energy (ΔU)?",
    options: [
      "A):   1500 J",
      "B):   1000 J",
      "C):   500 J",
      "D):   -500 J"
    ],
    correctAnswer: "C",
    explanation: "Work done is W = P ΔV = (2.0 × 10<sup>5</sup> Pa) × (0.005 m<sup>3</sup>) = 1000 J. From the First Law: ΔU = ΔQ - W = 1500 J - 1000 J = +500 J."
  },

  // Q21: A
  {
    id: "c11-phy-8-mcq-21",
    question: "Which of the following equations correctly expresses the relationship between the Coefficient of Performance (β) of a refrigerator and the efficiency (η) of a heat engine operating between the same temperature reservoirs?",
    options: [
      "A):   β = (1 - η) / η",
      "B):   β = η / (1 - η)",
      "C):   β = 1 - η",
      "D):   β = 1 / η"
    ],
    correctAnswer: "A",
    explanation: "Since η = W / Q_1 = 1 - (Q_2 / Q_1) ⟹ Q_2 / Q_1 = 1 - η, and β = Q_2 / W = Q_2 / (Q_1 - Q_2) = (Q_2 / Q_1) / [1 - (Q_2 / Q_1)] = (1 - η) / η."
  },

  // Q22: D
  {
    id: "c11-phy-8-mcq-22",
    question: "Two moles of an ideal gas (γ = 1.5) undergo an adiabatic expansion such that its temperature falls by 50 K. What is the work done by the gas? (R = 8.314 J/mol·K).",
    options: [
      "A):   415.7 J",
      "B):   831.4 J",
      "C):   1247.1 J",
      "D):   1662.8 J"
    ],
    correctAnswer: "D",
    explanation: "Adiabatic work is W = n R (T_1 - T_2) / (γ - 1) = [2 × 8.314 × 50] / (1.5 - 1) = [831.4] / 0.5 = 1662.8 J."
  },

  // Q23: B
  {
    id: "c11-phy-8-mcq-23",
    question: "A cyclic heat engine absorbs 800 J of heat from a high-temperature source and performs 200 J of net mechanical work in one cycle. What quantity of heat is rejected to the cold sink?",
    options: [
      "A):   800 J",
      "B):   600 J",
      "C):   400 J",
      "D):   200 J"
    ],
    correctAnswer: "B",
    explanation: "Over a complete cycle, ΔU = 0. Therefore, W = Q_1 - Q_2 ⟹ Q_2 = Q_1 - W = 800 J - 200 J = 600 J."
  },

  // Q24: C
  {
    id: "c11-phy-8-mcq-24",
    question: "When 100 g of liquid water at 0°C is frozen into ice at 0°C (L<sub>f</sub> = 336 J/g), what is the change in entropy of the water?",
    options: [
      "A):   +123 J/K",
      "B):   0 J/K",
      "C):   -123 J/K",
      "D):   -336 J/K"
    ],
    correctAnswer: "C",
    explanation: "Heat released during freezing is Q = -m L_f = -100 g × 336 J/g = -33,600 J. At T = 273.15 K: ΔS = Q / T = -33,600 / 273.15 ≈ -123.0 J/K."
  },

  // Q25: D
  {
    id: "c11-phy-8-mcq-25",
    question: "A Carnot heat engine operates with a thermal efficiency of 40% when its cold sink is maintained at 300 K. What is the absolute temperature of its heat source?",
    options: [
      "A):   400 K",
      "B):   450 K",
      "C):   480 K",
      "D):   500 K"
    ],
    correctAnswer: "D",
    explanation: "From η = 1 - (T_2 / T_1): 0.40 = 1 - (300 / T_1) ⟹ 300 / T_1 = 0.60 ⟹ T_1 = 300 / 0.60 = 500 K (or 227°C)."
  }
];

module.exports = { mcqs };
