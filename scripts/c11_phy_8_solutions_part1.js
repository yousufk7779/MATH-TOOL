// scripts/c11_phy_8_solutions_part1.js
const { themeColor, frac } = require('./c11_phy_8_helpers');

function getSolutionsPart1() {
  return `
  <!-- SECTION A: VERY SHORT ANSWER (VSA) QUESTIONS (1 MARK EACH) -->
  <div style="background: rgba(38, 198, 218, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each) &bull; Q1 to Q40
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Fundamental definitions, thermal equilibrium, Zeroth Law, work, heat, internal energy, First Law processes, adiabatic relations, and Second Law statements.
    </p>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q1: Define thermodynamics.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Thermodynamics</b> is the branch of physics that studies the macroscopic relationships between heat, work, temperature, and energy transformations in macroscopic physical systems.
    </p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q2: What is meant by a thermodynamic system and surroundings?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A <b>thermodynamic system</b> is any specified collection of macroscopic matter enclosed by a defined boundary chosen for study. Everything outside this boundary capable of exchanging energy or matter with the system is called the <b>surroundings</b>.
    </p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q3: Distinguish between an open, closed, and isolated system.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> An <b>open system</b> exchanges both matter and energy with surroundings; a <b>closed system</b> exchanges energy but no matter; an <b>isolated system</b> exchanges neither matter nor energy with its surroundings.
    </p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q4: Define a diathermic wall and an adiabatic wall.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A <b>diathermic wall</b> is a thermally conducting boundary that freely permits heat transfer between systems. An <b>adiabatic wall</b> is a thermally insulating boundary that completely prevents heat exchange ($dQ = 0$).
    </p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q5: What is meant by thermal equilibrium between two systems?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Two thermodynamic systems are in <b>thermal equilibrium</b> when they are separated by a diathermic boundary, their macroscopic properties cease to change over time, and there is zero net heat exchange between them.
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q6: State the Zeroth Law of Thermodynamics.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> If two thermodynamic systems A and B are each separately in thermal equilibrium with a third system C, then systems A and B are also in mutual thermal equilibrium with each other.
    </p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q7: What physical state variable is defined by the Zeroth Law of Thermodynamics?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The Zeroth Law establishes the scientific concept and definition of <b>temperature</b> as the fundamental scalar state property that determines whether systems are in thermal equilibrium.
    </p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q8: Define internal energy of a thermodynamic system.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Internal energy</b> ($U$) is the total energy stored within a system, consisting of the sum of microscopic kinetic energies of molecular random motion and microscopic intermolecular potential energies.
    </p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q9: Why is the internal energy of an ideal gas a function of temperature alone?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For an ideal gas, intermolecular attractive forces are assumed to be zero, so intermolecular potential energy is zero ($U_p = 0$). Hence, internal energy consists solely of molecular kinetic energy, which depends strictly on temperature ($U = n C_v T$).
    </p>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q10: What is the microscopic origin of internal energy in a real gas?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> In a real gas, internal energy arises from both the <b>molecular kinetic energy</b> (translational, rotational, vibrational) and the <b>intermolecular potential energy</b> due to van der Waals attractive and repulsive forces.
    </p>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q11: Distinguish between state functions and path functions with examples.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A <b>state function</b> depends solely on the current equilibrium state of the system, not on the path taken (e.g., $P, V, T, U$). A <b>path function</b> depends on the specific path or process followed (e.g., Heat $Q$ and Work $W$).
    </p>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q12: Why are heat (Q) and work (W) called path functions?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Because the numerical values of heat exchanged and work performed during a transformation between two fixed states depend directly on the intermediate thermodynamic trajectory followed on the $P-V$ diagram.
    </p>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q13: State the mathematical formula for thermodynamic work done by an expanding gas.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For quasi-static expansion from initial volume $V_1$ to final volume $V_2$:
      $$W = \\int_{V_1}^{V_2} P \\, dV$$
    </p>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q14: State the universal sign convention for heat absorbed and released by a system.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Heat absorbed (gained) by the system is taken as <b>positive</b> ($+\\Delta Q$), whereas heat released (rejected) by the system is taken as <b>negative</b> ($-\\Delta Q$).
    </p>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q15: State the sign convention for work done in physics.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Work done <b>by</b> the system on surroundings during expansion ($dV > 0$) is <b>positive</b> ($+W$); work done <b>on</b> the system by surroundings during compression ($dV < 0$) is <b>negative</b> ($-W$).
    </p>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q16: State the First Law of Thermodynamics in mathematical form.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$\\Delta Q = \\Delta U + \\Delta W \\quad \\text{or in differential form:} \\quad dQ = dU + P dV$$
    </p>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q17: What fundamental physical principle does the First Law of Thermodynamics embody?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The First Law of Thermodynamics is the macroscopic statement of the universal <b>Law of Conservation of Energy</b> applied to thermal and mechanical systems.
    </p>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q18: What is an isochoric process? State the First Law equation for an isochoric process.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> An <b>isochoric process</b> is one that takes place at constant volume ($V = \\text{constant}$, $dV = 0$). Since $W = \\int P dV = 0$, the First Law simplifies to:
      $$\\Delta Q = \\Delta U = n C_v \\Delta T$$
    </p>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q19: What is the work done by a gas during an isochoric heating process?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The work done is strictly <b>zero ($W = 0$)</b> because there is no displacement of the boundary walls ($dV = 0$).
    </p>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q20: What is an isobaric process? Write the formula for work done in an isobaric expansion.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> An <b>isobaric process</b> occurs at constant pressure ($P = \\text{constant}$). The work done is:
      $$W = P(V_2 - V_1) = P \\Delta V = n R \\Delta T$$
    </p>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q21: What is an isothermal process? Write its equation of state for an ideal gas.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> An <b>isothermal process</b> occurs at constant temperature ($T = \\text{constant}$). For an ideal gas:
      $$P V = \\text{constant} \\quad (\\text{Boyle's Law})$$
    </p>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q22: What is the change in internal energy (ΔU) of an ideal gas in an isothermal process?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Since the internal energy of an ideal gas depends solely on temperature, $\\Delta T = 0$ implies that:
      $$\\Delta U = 0$$
    </p>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q23: What is the First Law equation for an isothermal expansion of an ideal gas?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Since $\\Delta U = 0$, the First Law gives:
      $$\\Delta Q = W$$
      All heat absorbed from the surroundings is completely converted into external mechanical work.
    </p>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q24: What is an adiabatic process? Write the First Law equation for an adiabatic process.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> An <b>adiabatic process</b> occurs with zero heat exchange ($dQ = 0$). From the First Law ($dQ = dU + dW$):
      $$dU = -dW \\quad \\text{or} \\quad W = -\\Delta U$$
    </p>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q25: During an adiabatic expansion, does the gas cool down or heat up? Give a reason.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The gas <b>cools down</b>. Because $W > 0$ and no external heat enters ($Q = 0$), work is done entirely at the expense of its internal energy ($W = -\\Delta U$), causing internal energy and temperature to drop.
    </p>
  </div>

  <!-- Q26 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q26: Why does an inflated bicycle tyre valve feel cool when air suddenly escapes?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The sudden escape of compressed air is a rapid <b>adiabatic expansion</b>. The air does work pushing against surrounding atmospheric air at the expense of its internal energy, resulting in a noticeable drop in temperature.
    </p>
  </div>

  <!-- Q27 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q27: What is free expansion of a gas? State the work done and heat exchanged.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Free expansion</b> is the unrestrained expansion of a gas into an evacuated vacuum chamber inside an insulated enclosure. Here $W = 0$ (no opposing external pressure), $Q = 0$, and $\\Delta U = 0$.
    </p>
  </div>

  <!-- Q28 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q28: What is a cyclic process? State the net change in internal energy over a complete cycle.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A <b>cyclic process</b> is a sequence of transformations that returns the system to its initial thermodynamic state. Because internal energy is a state function, the net change over a cycle is strictly <b>$\\Delta U_{\\text{cycle}} = 0$</b>.
    </p>
  </div>

  <!-- Q29 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q29: What does the area enclosed by a cyclic loop on a P-V indicator diagram represent?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The enclosed area represents the <b>net mechanical work done</b> ($W_{\\text{net}}$) by or on the system per cycle, which also equals the net heat exchanged ($Q_{\\text{net}}$).
    </p>
  </div>

  <!-- Q30 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q30: State Poisson's equation relating pressure and volume for an adiabatic process.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$P V^\\gamma = \\text{constant} \\quad \\text{where } \\gamma = \\frac{C_p}{C_v}$$
    </p>
  </div>

  <!-- Q31 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q31: State Poisson's equation relating temperature and volume for an adiabatic process.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$T V^{\\gamma - 1} = \\text{constant}$$
    </p>
  </div>

  <!-- Q32 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q32: What is the ratio of molar heat capacities (γ = Cp / Cv) for a monoatomic ideal gas?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For a monoatomic ideal gas (such as He, Ne, Ar), $C_v = \\frac{3}{2}R$ and $C_p = \\frac{5}{2}R$. Therefore:
      $$\\gamma = \\frac{C_p}{C_v} = \\frac{5}{3} \\approx 1.67$$
    </p>
  </div>

  <!-- Q33 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q33: State the formula for the slope of an isothermal curve on a P-V diagram.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Differentiating $P V = \\text{constant}$ gives:
      $$\\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -\\frac{P}{V}$$
    </p>
  </div>

  <!-- Q34 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q34: State the formula for the slope of an adiabatic curve on a P-V diagram.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Differentiating $P V^\\gamma = \\text{constant}$ gives:
      $$\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = -\\gamma \\frac{P}{V}$$
    </p>
  </div>

  <!-- Q35 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q35: How many times steeper is an adiabatic curve compared to an isothermal curve on a P-V diagram?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> An adiabatic curve is strictly <b>$\\gamma$ times steeper</b> than an isothermal curve at any common intersection point on the $P-V$ diagram.
    </p>
  </div>

  <!-- Q36 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q36: Define isothermal elasticity of a gas and state its value.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Isothermal elasticity</b> is the bulk modulus measured under constant temperature:
      $$E_\\theta = -V \\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -V \\left(-\\frac{P}{V}\\right) = P$$
      It is numerically equal to the gas pressure $P$.
    </p>
  </div>

  <!-- Q37 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q37: Define adiabatic elasticity of a gas and state its value.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Adiabatic elasticity</b> is the bulk modulus measured under adiabatic conditions:
      $$E_\\phi = -V \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = -V \\left(-\\gamma \\frac{P}{V}\\right) = \\gamma P$$
    </p>
  </div>

  <!-- Q38 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q38: State the Kelvin-Planck statement of the Second Law of Thermodynamics.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> It is impossible to construct a heat engine operating in a cycle that absorbs heat from a single thermal reservoir and converts 100% of it into mechanical work without rejecting any heat to a cold sink.
    </p>
  </div>

  <!-- Q39 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q39: State the Clausius statement of the Second Law of Thermodynamics.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> It is impossible to construct a cyclic machine whose sole effect is to transfer heat from a colder body to a hotter body without requiring an external supply of mechanical work.
    </p>
  </div>

  <!-- Q40 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(38, 198, 218, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q40: What is meant by a quasi-static process?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A <b>quasi-static process</b> is an idealized process carried out infinitesimally slowly such that the system remains in thermodynamic equilibrium at every intermediate instant throughout the transformation.
    </p>
  </div>
  `;
}

module.exports = { getSolutionsPart1, solutionsPart1: getSolutionsPart1() };
