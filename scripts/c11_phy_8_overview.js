// scripts/c11_phy_8_overview.js
const {
  themeColor,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_8_helpers');

function buildOverview() {
  return `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- CHAPTER TITLE BANNER -->
  <div style="background: rgba(38, 198, 218, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h1 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 24px; font-weight: bold; text-align: center !important;">
      Unit VIII: Thermodynamics (06 Marks)
    </h1>
    <p style="margin: 0; color: #94A3B8; font-size: 14px; text-align: center !important;">
      Official JKBOSE / CBSE / NCERT Core Reference Standard &bull; Thermal Equilibrium, Zeroth Law, Heat, Work, Internal Energy, First Law, Second Law, Isothermal & Adiabatic Gas Processes, Reversible & Cyclic Transformations
    </p>
  </div>

  <!-- QUICK GLOSSARY CARD -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(38, 198, 218, 0.3); border-radius: 10px; padding: 16px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 12px; font-size: 16px; display: flex; align-items: center; gap: 8px;">
      <span>📑</span> Quick Glossary & Core Thermodynamic Variables
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; font-size: 13.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Thermodynamic System:</b> An assembly of a macroscopic number of particles confined within a real or imaginary boundary.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Thermal Equilibrium:</b> State where two or more systems in contact share the identical temperature and zero net heat exchange occurs.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">State Variables ($P, V, T, n$):</b> Macroscopic measurable quantities specifying the exact equilibrium state of the thermodynamic system.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Internal Energy ($U$):</b> Sum of molecular kinetic and intermolecular potential energies; a path-independent state function ($dU = n C_v dT$).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Thermodynamic Work ($W$):</b> Mechanical energy transferred across system boundaries due to macroscopic boundary movement ($W = \\int P dV$).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">First Law of Thermodynamics:</b> Energy conservation principle stating that added heat equals change in internal energy plus work done ($\Delta Q = \Delta U + \Delta W$).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Adiabatic Process:</b> Process carried out without any heat exchange with surroundings ($\Delta Q = 0$, $P V^\\gamma = \\text{const}$).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Second Law of Thermodynamics:</b> Dictates direction of spontaneous thermal processes; complete conversion of heat to work without rejection is impossible.
      </div>
    </div>
  </div>

  <!-- SECTION 1: THERMAL EQUILIBRIUM AND DEFINITION OF TEMPERATURE -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(38, 198, 218, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Thermal Equilibrium and Definition of Temperature
  </h2>

  <p>
    Thermodynamics is the branch of physical science that investigates the relationships between heat, mechanical work, temperature, and energy transformations in macroscopic physical systems. While mechanics focuses on individual particles or rigid bodies characterized by coordinates, velocities, and external forces, thermodynamics deals with bulk matter containing astronomical numbers of atoms ($10^{23}$ or more). Its laws are macroscopic, empirical generalizations that remain universally valid irrespective of microscopic models of atomic structure.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Thermodynamic Systems, Surroundings, and Boundaries:
  </h3>
  <p>
    A <b style="color: ${themeColor};">thermodynamic system</b> is defined as any specified collection of matter enclosed within well-defined real or hypothetical boundaries that is selected for physical investigation. Everything outside the system boundary capable of exchanging energy or matter with the system is designated as the <b style="color: ${themeColor};">surroundings</b>. The nature of the boundary wall governs the permissible interactions:
  </p>
  <ul>
    <li>
      <b style="color: ${themeColor};">Diathermic Wall (Conducting Wall):</b> A boundary that freely permits thermal energy (heat) exchange between the system and its surroundings without allowing any transfer of matter (e.g., a thin sheet of copper or aluminium).
    </li>
    <li>
      <b style="color: ${themeColor};">Adiabatic Wall (Insulating Wall):</b> A boundary that completely prevents any heat transfer between the system and its surroundings ($dQ = 0$), realized practically by vacuum jackets, thick fiberglass, or polished Dewar flask linings.
    </li>
    <li>
      <b style="color: ${themeColor};">Open, Closed, and Isolated Systems:</b> An <i>open system</i> exchanges both matter and energy with surroundings (e.g., boiling water in an open beaker); a <i>closed system</i> exchanges energy but no matter (e.g., gas sealed inside a cylinder fitted with a movable piston); an <i>isolated system</i> exchanges neither matter nor energy (e.g., hot liquid in an ideally insulated, sealed vacuum flask).
    </li>
  </ul>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Concept of Thermal Equilibrium:
  </h3>
  <p>
    A thermodynamic system is said to be in complete <b style="color: ${themeColor};">thermodynamic equilibrium</b> only when it simultaneously satisfies three distinct equilibrium criteria:
  </p>
  <ul>
    <li>
      <b style="color: ${themeColor};">Mechanical Equilibrium:</b> There are no unbalanced forces acting within the system or between the system and its surroundings. The macroscopic pressure $P$ is uniform throughout.
    </li>
    <li>
      <b style="color: ${themeColor};">Chemical Equilibrium:</b> There are no spontaneous chemical reactions occurring within the system, and no net diffusion of matter takes place across different regions.
    </li>
    <li>
      <b style="color: ${themeColor};">Thermal Equilibrium:</b> When two systems with diathermic boundaries are placed in contact, thermal energy spontaneously transfers from the higher-temperature body to the lower-temperature body. When all macroscopic properties (pressure, volume, density) cease to change over time and the net rate of heat transfer between them drops to zero, the two systems have achieved <b>thermal equilibrium</b>.
    </li>
  </ul>

  ${defBox(
    "Zeroth Law of Thermodynamics",
    "If two thermodynamic systems, A and B, are each separately in thermal equilibrium with a third system C, then systems A and B are also in mutual thermal equilibrium with each other when placed in thermal contact."
  )}

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iii) The Zeroth Law of Thermodynamics & Definition of Temperature:
  </h3>
  <p>
    Formulated by Ralph H. Fowler in 1931, the Zeroth Law was recognized after the First and Second Laws had already gained international acceptance. However, because it establishes the foundational basis for the concept of temperature itself—without which neither the First nor Second Law can be stated logically—it was named the "Zeroth Law."
  </p>
  <p>
    The Zeroth Law asserts that there exists a scalar physical state variable called <b style="color: ${themeColor};">temperature</b> ($T$), which characterizes the thermal state of every thermodynamic system in equilibrium. If two systems are in thermal equilibrium, their temperatures are identical ($T_A = T_B$). Conversely, if their temperatures differ ($T_A \\ne T_B$), they cannot be in thermal equilibrium, and heat will spontaneously flow across a diathermic interface until thermal equilibrium is established.
  </p>

  ${analogyBox(
    "Transitive Equality of Temperature",
    "Imagine three people, Alice (A), Bob (B), and Charlie (C). Charlie carries a calibrated ruler (thermometer). If Charlie measures Alice and finds her height to be 170 cm, and then measures Bob and finds his height to be 170 cm, we know with absolute certainty that Alice and Bob are of identical height, even if Alice and Bob have never stood next to each other. The Zeroth Law operates identically: System C acts as a calibrated thermometer establishing thermal equality between A and B."
  )}

  ${examTrapBox(
    "Confusing Heat and Temperature",
    "Temperature is an intensive scalar state property that determines the direction of spontaneous heat transfer. Heat is energy in transit across a boundary driven by a temperature gradient. A system possesses temperature and internal energy, but a system NEVER 'contains' heat. Once heat crosses the boundary, it is assimilated into the internal energy of the system."
  )}

  <!-- SECTION 2: HEAT, WORK, AND INTERNAL ENERGY -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(38, 198, 218, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    2. Heat, Work, and Internal Energy
  </h2>

  <p>
    In thermodynamics, energy exchange between a system and its environment occurs through two fundamentally distinct physical mechanisms: microscopic thermal agitation (Heat) and macroscopic coordinated boundary displacement (Work). Both represent energy in transit, not intrinsic properties of a system.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Heat (Q) as Energy in Transit:
  </h3>
  <p>
    <b style="color: ${themeColor};">Heat</b> ($Q$) is non-mechanical energy transferred between a system and its surroundings exclusively as a consequence of a temperature difference across a diathermic boundary. Microscopically, it involves the disordered, random collisions of molecules at the boundary. Heat is measured in Joules (J) or calories ($1\\text{ cal} = 4.186\\text{ J}$). By universal sign convention in physics:
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Heat absorbed by the system:</b> $\\Delta Q > 0$ (positive).</li>
    <li><b style="color: ${themeColor};">Heat released by the system:</b> $\\Delta Q < 0$ (negative).</li>
  </ul>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Thermodynamic Work (W = ∫ P dV):
  </h3>
  <p>
    <b style="color: ${themeColor};">Thermodynamic Work</b> ($W$) is the energy transferred between a system and its surroundings by macroscopic forces causing observable displacements of the system's boundary.
  </p>

  ${stepDerivationBox(
    "Work Done by an Expanding Gas",
    [
      {
        name: "Force Exerted on Piston",
        desc: "Consider a gas enclosed in a cylinder of cross-sectional area $A$ fitted with a frictionless, movable piston. The gas exerts a normal outward force $F = P \\cdot A$ on the piston, where $P$ is the internal pressure."
      },
      {
        name: "Infinitesimal Work Done",
        desc: "When the gas expands quasi-statically, pushing the piston outward by an infinitesimal displacement $dx$, the work done by the gas is: $$dW = F \\cdot dx = (P \\cdot A) dx$$"
      },
      {
        name: "Volume Change Relation",
        desc: "The product of piston area and displacement represents the increase in volume: $A \\cdot dx = dV$. Therefore: $$dW = P \\cdot dV$$"
      },
      {
        name: "Finite Expansion Integral",
        desc: "For a finite expansion from initial volume $V_1$ to final volume $V_2$, the total work done is: $$W = \\int_{V_1}^{V_2} P \\, dV$$"
      }
    ]
  )}

  <p>
    <b style="color: ${themeColor};">Sign Convention for Work:</b>
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Expansion ($V_2 > V_1$, $dV > 0$):</b> Work is done BY the system on surroundings; $W > 0$ (positive in physics).</li>
    <li><b style="color: ${themeColor};">Compression ($V_2 < V_1$, $dV < 0$):</b> Work is done ON the system by surroundings; $W < 0$ (negative in physics).</li>
  </ul>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iii) Work as Area Under the P-V Indicator Diagram:
  </h3>
  <p>
    On a Pressure-Volume ($P-V$) coordinate plane (also called an <i>indicator diagram</i>), any quasi-static thermodynamic path is represented by a continuous curve. The integral $W = \\int_{V_1}^{V_2} P dV$ is geometrically equal to the <b>area under the curve projected onto the volume axis</b> between limits $V_1$ and $V_2$. Because the area under different paths connecting the same initial and final states is different, thermodynamic work is strictly a <b style="color: ${themeColor};">path-dependent function</b>, not a state function.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iv) Internal Energy (U) as an Intrinsic State Function:
  </h3>
  <p>
    The <b style="color: ${themeColor};">internal energy</b> ($U$) of a thermodynamic system is the total macroscopic energy contained within the system due to the microscopic motion and spatial configuration of its constituent molecules. It comprises:
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Microscopic Kinetic Energy ($U_k$):</b> Translational, rotational, and vibrational kinetic energies of molecules, which depend solely on temperature.</li>
    <li><b style="color: ${themeColor};">Microscopic Potential Energy ($U_p$):</b> Intermolecular potential energy arising from attractive and repulsive van der Waals forces between molecules, which depends on volume and intermolecular spacing.</li>
  </ul>
  <p>
    For an <b style="color: ${themeColor};">ideal gas</b>, intermolecular attractive forces are zero ($U_p = 0$). Hence, the internal energy of an ideal gas depends <b>strictly on temperature alone</b> (Joule's Law of Internal Energy):
    $$U = U(T) = n C_v T \\implies dU = n C_v dT$$
    Internal energy is a true <b>state function</b>: its change $\\Delta U = U_2 - U_1$ depends purely on initial and final equilibrium states, completely independent of the intermediate path traversed. In any cyclic process, $\\oint dU = 0$.
  </p>

  ${analogyBox(
    "Bank Account Analogy for Internal Energy",
    "Think of Internal Energy ($U$) as your total bank account balance (a state variable). Heat ($Q$) represents cash deposited or transferred in, while Work ($W$) represents debit card payments or cash withdrawn. The change in your bank balance $\\Delta U$ equals (Deposits - Withdrawals) = $\\Delta Q - \\Delta W$. You can alter your balance through infinite combinations of deposits and withdrawals, but at any given moment, your balance depends only on your current financial state, not how you accumulated it."
  )}

  <!-- SECTION 3: FIRST LAW OF THERMODYNAMICS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(38, 198, 218, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    3. First Law of Thermodynamics
  </h2>

  ${defBox(
    "First Law of Thermodynamics",
    "When a quantity of heat energy $\\Delta Q$ is supplied to a thermodynamic system, a portion of it is utilized to increase the internal energy of the system by $\\Delta U$, while the remaining balance is expended as external mechanical work $\\Delta W$ performed by the system on its surroundings: $$\\Delta Q = \\Delta U + \\Delta W \\quad \\text{or} \\quad dQ = dU + P dV$$"
  )}

  <p>
    The First Law is the universal Law of Conservation of Energy adapted to thermodynamic transformations involving heat and mechanical work. It asserts that energy can neither be created nor destroyed; it can merely be converted between thermal, internal, and mechanical forms.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Applications of the First Law to Standard Thermodynamic Processes:
  </h3>
  <div style="overflow-x: auto; margin: 15px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(38, 198, 218, 0.15); border-bottom: 2px solid ${themeColor};">
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Process</th>
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Defining Condition</th>
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Work Done ($W$)</th>
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Internal Energy Change ($\\Delta U$)</th>
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">First Law Formulation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Isochoric (Isovolumetric)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$V = \\text{constant} \\implies dV = 0$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = 0$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta U = n C_v \\Delta T$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta Q = \\Delta U$ (all heat goes to internal energy)</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Isobaric</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$P = \\text{constant}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = P(V_2 - V_1) = n R \\Delta T$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta U = n C_v \\Delta T$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta Q = n C_p \\Delta T = \\Delta U + W$</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Isothermal</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$T = \\text{constant} \\implies \\Delta T = 0$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = n R T \\ln(V_2 / V_1)$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta U = 0$ (for ideal gas)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta Q = W$ (all heat converted to work)</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Adiabatic</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$dQ = 0$ (thermal insulation)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta U = -W$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = -\\Delta U$ (work done at expense of internal energy)</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Cyclic Process</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">System returns to initial state</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W_{\\text{net}} = \\text{Area of } P-V \\text{ loop}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta U = 0$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta Q_{\\text{net}} = W_{\\text{net}}$</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Free Expansion</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Expansion into vacuum in insulated box</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = 0$ (no opposing pressure)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta U = 0 \\implies T_1 = T_2$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$Q = 0, W = 0, \\Delta U = 0$ (uncontrolled, irreversible)</td>
        </tr>
      </tbody>
    </table>
  </div>

  ${solvedExampleBox(
    "1",
    "A gas expands from an initial volume of 2.0 L to a final volume of 5.0 L at a constant pressure of $2.0 \\times 10^5\\text{ N/m}^2$. During this process, 800 J of heat energy is supplied to the gas. Determine: (i) the work done by the gas, and (ii) the change in internal energy.",
    "<strong>(i) Work Done:</strong> For an isobaric process, $W = P \\Delta V = P(V_2 - V_1)$.<br/>Here, $V_1 = 2.0\\text{ L} = 2.0 \\times 10^{-3}\\text{ m}^3$, $V_2 = 5.0\\text{ L} = 5.0 \\times 10^{-3}\\text{ m}^3$, $P = 2.0 \\times 10^5\\text{ N/m}^2$.<br/>$$W = (2.0 \\times 10^5) \\times (5.0 \\times 10^{-3} - 2.0 \\times 10^{-3}) = (2.0 \\times 10^5) \\times (3.0 \\times 10^{-3}) = 600\\text{ J}$$<br/><strong>(ii) Change in Internal Energy:</strong> By the First Law of Thermodynamics: $$\\Delta Q = \\Delta U + W \\implies \\Delta U = \\Delta Q - W$$<br/>Given $\\Delta Q = +800\\text{ J}$: $$\\Delta U = 800 - 600 = +200\\text{ J}$$<br/>The internal energy increases by <strong>200 J</strong>."
  )}

  <!-- SECTION 4: GASEOUS STATE OF MATTER AND CHANGES OF CONDITION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(38, 198, 218, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    4. Gaseous State of Matter: Isothermal, Adiabatic, Reversible, Irreversible, and Cyclic Processes
  </h2>

  <p>
    The gaseous state is the simplest thermodynamic state because molecules are far apart and intermolecular potentials can be approximated as zero under normal temperatures and pressures. Changes in the gaseous state are analyzed through specific paths governed by the ideal gas equation of state:
    $$P V = n R T$$
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Isothermal Process (Boyle's Law Path):
  </h3>
  <p>
    An <b style="color: ${themeColor};">isothermal process</b> is a thermodynamic transformation carried out at a constant temperature ($T = \\text{constant}$). For an ideal gas:
    $$P V = \\text{constant} \\implies P_1 V_1 = P_2 V_2$$
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Physical Conditions:</b> (1) The walls of the container must be perfectly diathermic (highly conducting). (2) The process must proceed infinitesimally slowly (quasi-static) to allow continuous thermal equilibrium with the heat bath.</li>
  </ul>

  ${stepDerivationBox(
    "Work Done in an Isothermal Expansion",
    [
      {
        name: "Setup from Ideal Gas Law",
        desc: "From $P V = n R T$, express pressure as a function of volume: $$P = \\frac{n R T}{V}$$"
      },
      {
        name: "Integral for Work Done",
        desc: "Substitute $P$ into the work formula: $$W = \\int_{V_1}^{V_2} P \\, dV = \\int_{V_1}^{V_2} \\frac{n R T}{V} \\, dV$$"
      },
      {
        name: "Integration at Constant Temperature",
        desc: "Since $T$ is constant, factor out $nRT$: $$W = n R T \\int_{V_1}^{V_2} \\frac{dV}{V} = n R T [\\ln V]_{V_1}^{V_2} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$"
      },
      {
        name: "Logarithmic and Pressure Forms",
        desc: "Converting to common base-10 logarithm: $$W = 2.303 \\, n R T \\log_{10}\\left(\\frac{V_2}{V_1}\\right)$$ Since $P_1 V_1 = P_2 V_2 \\implies \\frac{V_2}{V_1} = \\frac{P_1}{P_2}$: $$W = 2.303 \\, n R T \\log_{10}\\left(\\frac{P_1}{P_2}\\right)$$"
      }
    ]
  )}

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Adiabatic Process (Poisson's Relations):
  </h3>
  <p>
    An <b style="color: ${themeColor};">adiabatic process</b> is a thermodynamic transformation in which absolutely no heat enters or leaves the system ($dQ = 0$).
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Physical Conditions:</b> (1) The container walls and piston must be perfectly insulating (adiabatic). (2) The process must occur extremely rapidly so that heat has no time to flow across the boundary (e.g., sudden bursting of a bicycle tyre, propagation of sound waves in air).</li>
  </ul>
  <p>
    For a quasi-static adiabatic change of an ideal gas, the state variables satisfy <b style="color: ${themeColor};">Poisson's Relations</b>:
    $$P V^\\gamma = \\text{constant}$$
    $$T V^{\\gamma - 1} = \\text{constant}$$
    $$P^{1-\\gamma} T^\\gamma = \\text{constant}$$
    where $\\gamma = C_p / C_v$ is the adiabatic ratio of specific heats (e.g., $\\gamma \\approx 1.67$ for monoatomic gases, $\\gamma \\approx 1.40$ for diatomic gases).
  </p>

  ${stepDerivationBox(
    "Work Done in an Adiabatic Expansion",
    [
      {
        name: "Poisson's Law Setup",
        desc: "Let $P V^\\gamma = K$ (constant), so $P = K V^{-\\gamma}$. Initial state: $P_1 V_1^\\gamma = K$; final state: $P_2 V_2^\\gamma = K$."
      },
      {
        name: "Evaluate the Work Integral",
        desc: "Substitute $P$ into $W = \\int_{V_1}^{V_2} P dV$: $$W = \\int_{V_1}^{V_2} K V^{-\\gamma} dV = K \\left[ \\frac{V^{-\\gamma + 1}}{-\\gamma + 1} \\right]_{V_1}^{V_2} = \\frac{K}{1 - \\gamma} [V_2^{1-\\gamma} - V_1^{1-\\gamma}]$$"
      },
      {
        name: "Substitute Constant K = P1 V1^γ = P2 V2^γ",
        desc: "$$W = \\frac{1}{1 - \\gamma} [K V_2^{1-\\gamma} - K V_1^{1-\\gamma}] = \\frac{1}{1 - \\gamma} [P_2 V_2^\\gamma V_2^{1-\\gamma} - P_1 V_1^\\gamma V_1^{1-\\gamma}] = \\frac{P_2 V_2 - P_1 V_1}{1 - \\gamma}$$"
      },
      {
        name: "Final Formula in Terms of Pressures and Temperatures",
        desc: "Reversing the denominator sign: $$W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$$ Since $P_1 V_1 = n R T_1$ and $P_2 V_2 = n R T_2$: $$W = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$$"
      }
    ]
  )}

  <p>
    <b style="color: ${themeColor};">Important Consequence:</b> In an adiabatic expansion ($V_2 > V_1$), work is done by the gas ($W > 0$), so $T_1 > T_2$: <b>adiabatic expansion causes cooling</b>. In adiabatic compression ($W < 0$), $T_2 > T_1$: <b>adiabatic compression causes heating</b> (as in a diesel engine cylinder ignition).
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iii) Comparison of Slopes: Isothermal vs Adiabatic on P-V Plane:
  </h3>
  <p>
    The slope of a thermodynamic curve on a $P-V$ indicator diagram is given by the derivative $\\frac{dP}{dV}$.
  </p>
  <ul>
    <li>
      <b style="color: ${themeColor};">Isothermal Slope:</b> Differentiating $P V = C$ gives $P dV + V dP = 0$:
      $$\\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -\\frac{P}{V}$$
    </li>
    <li>
      <b style="color: ${themeColor};">Adiabatic Slope:</b> Differentiating $P V^\\gamma = C$ gives $V^\\gamma dP + \\gamma P V^{\\gamma - 1} dV = 0$:
      $$\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = -\\gamma \\frac{P}{V} = \\gamma \\times \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}$$
    </li>
  </ul>
  <p>
    Because $\\gamma > 1$ for all gases, the <b>adiabatic curve is strictly $\\gamma$ times steeper than the isothermal curve</b> passing through the same state point ($P, V$).
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iv) Isothermal vs Adiabatic Elasticity of a Gas:
  </h3>
  <p>
    Volume elasticity is defined as $E = -\\frac{dP}{dV/V} = -V \\frac{dP}{dV}$.
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Isothermal Elasticity ($E_\\theta$):</b> $E_\\theta = -V \\left(-\\frac{P}{V}\\right) = P$. (Isothermal elasticity equals pressure).</li>
    <li><b style="color: ${themeColor};">Adiabatic Elasticity ($E_\\phi$):</b> $E_\\phi = -V \\left(-\\gamma \\frac{P}{V}\\right) = \\gamma P$. (Adiabatic elasticity equals $\\gamma P$).</li>
    <li><b style="color: ${themeColor};">Ratio of Elasticities:</b> $\\frac{E_\\phi}{E_\\theta} = \\frac{\\gamma P}{P} = \\gamma = \\frac{C_p}{C_v}$.</li>
  </ul>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (v) Reversible and Irreversible Processes:
  </h3>
  <ul>
    <li>
      <b style="color: ${themeColor};">Reversible Process:</b> A process that can be reversed in direction such that both the system and its surroundings return precisely to their initial states, leaving no trace or net change in the universe.
      <br/><i>Conditions for Reversibility:</i> (1) The process must be strictly <b>quasi-static</b> (infinitesimally slow, passing through a continuous sequence of equilibrium states). (2) All dissipative forces like friction, viscosity, electrical resistance, and inelastic collisions must be completely absent.
    </li>
    <li>
      <b style="color: ${themeColor};">Irreversible Process:</b> Any process that cannot be retraced back without leaving permanent alterations in the surroundings. All real natural spontaneous processes are irreversible (e.g., free expansion of gas, heat conduction across a finite $\\Delta T$, combustion, radioactive decay, chemical reactions).
    </li>
  </ul>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (vi) Cyclic Processes and Heat Engines:
  </h3>
  <p>
    A <b style="color: ${themeColor};">cyclic process</b> consists of a closed sequence of thermodynamic operations at the end of which the working substance returns to its identical initial thermodynamic state ($P_1, V_1, T_1$). Since internal energy is a state function, the net internal energy change over any complete cycle is strictly zero:
    $$\\Delta U_{\\text{cycle}} = 0 \\implies Q_{\\text{net}} = W_{\\text{net}}$$
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Clockwise Cycle on P-V diagram:</b> Represents a <b>Heat Engine</b>. Net work done is positive ($W > 0$). Heat is converted into mechanical work.</li>
    <li><b style="color: ${themeColor};">Counter-Clockwise Cycle on P-V diagram:</b> Represents a <b>Refrigerator or Heat Pump</b>. Net work done is negative ($W < 0$), meaning external mechanical work is consumed to pump heat from a cold reservoir to a hot reservoir.</li>
  </ul>

  <!-- SECTION 5: SECOND LAW OF THERMODYNAMICS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(38, 198, 218, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    5. Second Law of Thermodynamics
  </h2>

  <p>
    While the First Law guarantees conservation of energy, it places no restriction on the direction of energy conversion. For example, the First Law does not forbid a warm cup of coffee from spontaneously absorbing heat from the cooler room air and becoming hotter, nor does it forbid a rolling wheel from spontaneously converting its thermal energy back into mechanical kinetic energy to speed up. The <b style="color: ${themeColor};">Second Law of Thermodynamics</b> specifies the permissible natural direction of spontaneous physical processes.
  </p>

  ${defBox(
    "Kelvin-Planck Statement (Heat Engines)",
    "It is impossible to construct a thermodynamic engine operating in a cyclic process whose sole effect is to extract heat from a single thermal reservoir and convert that heat completely into an equivalent amount of mechanical work with 100% efficiency. Every heat engine must inevitably reject a fraction of heat ($Q_2 > 0$) to a colder sink."
  )}

  ${defBox(
    "Clausius Statement (Refrigerators)",
    "It is impossible to construct a cyclic device whose sole effect is to transfer heat from a body at a lower temperature to a body at a higher temperature without receiving external mechanical work from an outside agency."
  )}

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Equivalence of Kelvin-Planck and Clausius Statements:
  </h3>
  <p>
    Although phrased differently, the Kelvin-Planck and Clausius statements are completely equivalent. A violation of one statement leads directly to a violation of the other:
  </p>
  <ul>
    <li>
      <b>If Clausius were false:</b> Suppose a refrigerator transfers heat $Q_2$ from cold sink ($T_2$) to hot source ($T_1$) with zero external work ($W = 0$). Couple this refrigerator to a standard heat engine that extracts $Q_1$ from source, produces work $W = Q_1 - Q_2$, and rejects $Q_2$ to sink. The net result is that heat $Q_2$ returned to source cancels the heat rejected, meaning the combined engine extracts net heat $Q_1 - Q_2$ from a single reservoir and converts it 100% into work $W$, directly violating the Kelvin-Planck statement!
    </li>
    <li>
      <b>If Kelvin-Planck were false:</b> Suppose a heat engine extracts heat $Q_1$ from a single reservoir at $T_1$ and converts it 100% into work $W = Q_1$ with zero rejection ($Q_2 = 0$). Use this work $W$ to drive a normal refrigerator that extracts heat $Q_c$ from a cold sink at $T_2$ and discharges $Q_c + W$ to the hot reservoir. The net effect of the coupled unit is the transfer of heat $Q_c$ from the cold body to the hot body with zero net external input, directly violating the Clausius statement!
    </li>
  </ul>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Carnot Engine and Carnot's Theorem:
  </h3>
  <p>
    In 1824, French engineer Sadi Carnot conceived an idealized, perfectly reversible heat engine operating in a four-stage closed cycle between a hot source at temperature $T_1$ and a cold sink at temperature $T_2$:
  </p>
  <ol>
    <li><b style="color: ${themeColor};">Process 1-2 (Reversible Isothermal Expansion at $T_1$):</b> Working substance absorbs heat $Q_1$ from source at $T_1$; $W_1 = n R T_1 \\ln(V_2 / V_1)$.</li>
    <li><b style="color: ${themeColor};">Process 2-3 (Reversible Adiabatic Expansion):</b> Gas expands adiabatically from $T_1$ to $T_2$; $W_2 = \\frac{n R(T_1 - T_2)}{\\gamma - 1}$.</li>
    <li><b style="color: ${themeColor};">Process 3-4 (Reversible Isothermal Compression at $T_2$):</b> Working substance rejects heat $Q_2$ to sink at $T_2$; $W_3 = n R T_2 \\ln(V_4 / V_3) < 0$.</li>
    <li><b style="color: ${themeColor};">Process 4-1 (Reversible Adiabatic Compression):</b> Gas is compressed adiabatically from $T_2$ back to initial temperature $T_1$; $W_4 = \\frac{n R(T_2 - T_1)}{\\gamma - 1} = -W_2$.</li>
  </ol>
  <p>
    The thermal efficiency $\\eta$ of any heat engine is:
    $$\\eta = \\frac{\\text{Net Work Done}}{\\text{Heat Input}} = \\frac{W}{Q_1} = \\frac{Q_1 - Q_2}{Q_1} = 1 - \\frac{Q_2}{Q_1}$$
    For the ideal reversible Carnot cycle, $\\frac{Q_2}{Q_1} = \\frac{T_2}{T_1}$, yielding the maximum theoretical <b style="color: ${themeColor};">Carnot Efficiency</b>:
    $$\\eta_{\\text{Carnot}} = 1 - \\frac{T_2}{T_1}$$
  </p>

  ${defBox(
    "Carnot's Theorem",
    "1. No heat engine operating between two given constant temperature thermal reservoirs can be more efficient than a perfectly reversible Carnot engine operating between the same two reservoirs.<br/>2. All reversible engines operating between the same two thermal reservoirs have identical thermal efficiency, regardless of the nature or type of working substance employed."
  )}

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iii) Concept of Entropy and Arrow of Time:
  </h3>
  <p>
    Introduced by Rudolf Clausius, <b style="color: ${themeColor};">entropy</b> ($S$) is a thermodynamic state variable measuring microscopic molecular randomness or disorder in a system. For any reversible infinitesimal transformation:
    $$dS = \\frac{dQ_{\\text{rev}}}{T}$$
    For any spontaneous irreversible process occurring in an isolated system (such as our universe):
    $$\\Delta S_{\\text{isolated}} > 0$$
    The entropy of the universe continuously increases with time ($\Delta S \\ge 0$). This defines the irreversible <i>arrow of time</i>: natural events proceed spontaneously only in the direction that maximizes total universal entropy.
  </p>

  <!-- SECTION 6: MASTER REVISION FORMULA CHEAT SHEET -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(38, 198, 218, 0.4); padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    6. Master Revision Formula Cheat Sheet
  </h2>

  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid ${themeColor}; border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35);">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 16px; text-align: center;">
      ⚡ Master Revision Formula Cheat Sheet &bull; Unit VIII: Thermodynamics
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 13px;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">First Law of Thermodynamics:</b><br/>
        $\\Delta Q = \\Delta U + \\Delta W$<br/>
        $dQ = dU + P dV$<br/>
        Internal energy: $dU = n C_v dT$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Thermodynamic Work Done:</b><br/>
        General: $W = \\int_{V_1}^{V_2} P \\, dV$<br/>
        Isochoric ($dV = 0$): $W = 0$<br/>
        Isobaric ($P = \\text{const}$): $W = P(V_2 - V_1) = n R \\Delta T$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Isothermal Process ($T = \\text{const}$):</b><br/>
        $P_1 V_1 = P_2 V_2$ &bull; $\\Delta U = 0$<br/>
        $W_{\\text{iso}} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = 2.303 n R T \\log_{10}\\left(\\frac{V_2}{V_1}\\right)$<br/>
        Slope: $\\frac{dP}{dV} = -\\frac{P}{V}$ &bull; Elasticity: $E_\\theta = P$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Adiabatic Process ($dQ = 0$):</b><br/>
        $P V^\\gamma = \\text{const}$ &bull; $T V^{\\gamma-1} = \\text{const}$<br/>
        $W_{\\text{adia}} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$<br/>
        Slope: $\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = -\\gamma \\frac{P}{V} = \\gamma \\times \\text{Slope}_{\\text{iso}}$<br/>
        Elasticity: $E_\\phi = \\gamma P$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Heat Engine & Carnot Efficiency:</b><br/>
        $\\eta = \\frac{W}{Q_1} = 1 - \\frac{Q_2}{Q_1}$<br/>
        Carnot: $\\eta_C = 1 - \\frac{T_2}{T_1}$ ($T$ in Kelvin!)<br/>
        Work per cycle: $W = Q_1 - Q_2$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Refrigerator & Heat Pump:</b><br/>
        Coefficient of Performance (COP): $\\beta = \\frac{Q_2}{W} = \\frac{Q_2}{Q_1 - Q_2}$<br/>
        Carnot COP: $\\beta_C = \\frac{T_2}{T_1 - T_2}$<br/>
        Relation to efficiency: $\\beta = \\frac{1 - \\eta}{\\eta}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Specific Heat & Mayer's Relation:</b><br/>
        $C_p - C_v = R$ &bull; $\\gamma = \\frac{C_p}{C_v}$<br/>
        $C_v = \\frac{R}{\\gamma - 1}$ &bull; $C_p = \\frac{\\gamma R}{\\gamma - 1}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Entropy & Disorder:</b><br/>
        $dS = \\frac{dQ_{\\text{rev}}}{T}$ &bull; $\\Delta S_{\\text{cycle, rev}} = 0$<br/>
        Second Law: $\\Delta S_{\\text{universe}} \\ge 0$ (Arrow of Time)
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
