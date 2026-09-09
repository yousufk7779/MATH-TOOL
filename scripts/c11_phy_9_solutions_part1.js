// scripts/c11_phy_9_solutions_part1.js
const { themeColor, frac } = require('./c11_phy_9_helpers');

function getSolutionsPart1() {
  return `
  <!-- SECTION A: VERY SHORT ANSWER (VSA) QUESTIONS (1 MARK EACH) -->
  <div style="background: rgba(66, 165, 245, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each) &bull; Q1 to Q40
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Fundamental definitions, equation of state, kinetic theory postulates, pressure formula, kinetic temperature, molecular speeds, degrees of freedom, equipartition, and mean free path.
    </p>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q1: State the equation of state of a perfect gas for $n$ moles.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$P V = n R T$$
      where $P$ is absolute pressure, $V$ is volume, $n$ is number of moles, $R$ is the Universal Gas Constant, and $T$ is absolute thermodynamic temperature.
    </p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q2: State the ideal gas equation in terms of Boltzmann's constant and total number of molecules.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$P V = N k_B T$$
      where $N$ is the total number of gas molecules and $k_B$ is Boltzmann's constant ($1.38 \\times 10^{-23}\\text{ J/K}$).
    </p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q3: State Boyle's Law in mathematical form.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At constant temperature ($T = \\text{constant}$):
      $$P V = \\text{constant} \\quad \\text{or} \\quad P_1 V_1 = P_2 V_2$$
    </p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q4: State Charles's Law in mathematical form.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At constant pressure ($P = \\text{constant}$):
      $$\\frac{V}{T} = \\text{constant} \\quad \\text{or} \\quad \\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$
    </p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q5: State Gay-Lussac's (Pressure-Temperature) Law.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At constant volume ($V = \\text{constant}$):
      $$\\frac{P}{T} = \\text{constant} \\quad \\text{or} \\quad \\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q6: What is the molar volume of an ideal gas at standard temperature and pressure (STP)?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At STP ($0^{\\circ}\\text{C} = 273.15\\text{ K}$, $1\\text{ atm} = 1.013 \\times 10^5\\text{ Pa}$), one mole of any ideal gas occupies a volume of:
      $$V_{\\text{molar}} = 22.414\\text{ liters} = 2.2414 \\times 10^{-2}\\text{ m}^3$$
    </p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q7: State the numerical value and SI units of the Universal Gas Constant ($R$).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1} \\approx 1.987\\text{ cal}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$$
    </p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q8: State the numerical value and SI units of Boltzmann's constant ($k_B$).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$k_B = 1.3806 \\times 10^{-23}\\text{ J/K}$$
    </p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q9: What is the relation connecting Universal Gas Constant $R$, Avogadro's number $N_A$, and Boltzmann's constant $k_B$?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$R = N_A \\cdot k_B \\quad \\text{or} \\quad k_B = \\frac{R}{N_A}$$
    </p>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q10: Write the formula for the work done in compressing an ideal gas isothermally.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Work done <i>on</i> the gas during isothermal compression from $V_1$ to $V_2$ ($V_2 < V_1$) is:
      $$W_{\\text{on}} = n R T \\ln\\left(\\frac{V_1}{V_2}\\right) = 2.303 n R T \\log_{10}\\left(\\frac{V_1}{V_2}\\right)$$
    </p>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q11: In which process—isothermal or adiabatic—is more work required to compress a gas to the same final volume?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Adiabatic compression</b> requires more work ($|W_{\\text{adia}}| > |W_{\\text{iso}}|$), because the adiabatic compression curve rises more steeply, generating an elevated resisting back-pressure as temperature rises.
    </p>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q12: State two fundamental postulates of the kinetic theory of gases regarding molecular size and forces.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      1. The actual physical volume of gas molecules is negligibly small compared to the total volume occupied by the gas.<br/>
      2. There are zero intermolecular forces of attraction or repulsion between molecules, except during collisions.
    </p>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q13: What type of collisions occur between gas molecules according to kinetic theory?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Collisions between gas molecules and with container walls are <b>perfectly elastic</b>, meaning both linear momentum and total kinetic energy are strictly conserved.
    </p>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q14: Define the pressure of a gas from the microscopic viewpoint of kinetic theory.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Gas pressure is the continuous, time-averaged normal force per unit surface area exerted on container walls due to the rate of momentum transfer by bombarding gas molecules undergoing elastic collisions.
    </p>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q15: State the formula for the pressure exerted by an ideal gas in terms of density and rms speed.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{1}{3} \\frac{m N}{V} v_{\\text{rms}}^2$$
    </p>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q16: How is the pressure of a gas related to its translational kinetic energy density ($E$)?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Pressure equals two-thirds of the translational kinetic energy per unit volume:
      $$P = \\frac{2}{3} E \\quad \\left(\\text{where } E = \\frac{1}{2} \\rho v_{\\text{rms}}^2\\right)$$
    </p>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q17: State the kinetic interpretation of absolute temperature.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Absolute thermodynamic temperature ($T$) is directly proportional to the mean translational kinetic energy of the gas molecules ($\\overline{\\epsilon} \\propto T$).
    </p>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q18: What is the average translational kinetic energy of a single gas molecule at temperature $T$?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$\\overline{\\epsilon} = \\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T$$
    </p>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q19: What is the total translational kinetic energy of one mole of an ideal gas at temperature $T$?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$E_{\\text{mole}} = \\frac{3}{2} N_A k_B T = \\frac{3}{2} R T$$
    </p>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q20: What happens to the molecular motion of an ideal gas at absolute zero ($0\\text{ K}$)?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At absolute zero ($T = 0\\text{ K}$), the mean translational kinetic energy drops to zero ($\\overline{\\epsilon} = 0$), and all classical molecular translational motion ceases completely ($v_{\\text{rms}} = 0$).
    </p>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q21: Define root mean square (rms) speed of gas molecules.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>root mean square speed</b> ($v_{\\text{rms}}$) is defined as the square root of the arithmetic mean of the squares of the speeds of all individual molecules in the gas:
      $$v_{\\text{rms}} = \\sqrt{\\overline{v^2}} = \\sqrt{\\frac{v_1^2 + v_2^2 + \\dots + v_N^2}{N}}$$
    </p>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q22: State the formula for $v_{\\text{rms}}$ in terms of temperature $T$ and molar mass $M$.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}} = \\sqrt{\\frac{3 k_B T}{m}}$$
    </p>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q23: State the formula for $v_{\\text{rms}}$ in terms of pressure $P$ and density $\rho$.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> From $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$:
      $$v_{\\text{rms}} = \\sqrt{\\frac{3 P}{\\rho}}$$
    </p>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q24: Between Hydrogen and Oxygen at the same temperature, which has higher rms speed and by what factor?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Hydrogen has a higher rms speed. Since $v_{\\text{rms}} \\propto 1/\\sqrt{M}$:
      $$\\frac{v_{\\text{rms}}(\\text{H}_2)}{v_{\\text{rms}}(\\text{O}_2)} = \\sqrt{\\frac{M_{\\text{O}_2}}{M_{\\text{H}_2}}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$$
      Hydrogen molecules move <b>4 times faster</b> than oxygen molecules at the same temperature.
    </p>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q25: Define the most probable speed ($v_{\\text{mp}}$) of gas molecules.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>most probable speed</b> ($v_{\\text{mp}}$) is the speed possessed by the maximum fraction of molecules in a gas at a given temperature:
      $$v_{\\text{mp}} = \\sqrt{\\frac{2 R T}{M}} = \\sqrt{\\frac{2 k_B T}{m}}$$
    </p>
  </div>

  <!-- Q26 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q26: Define the average (mean) speed ($\overline{v}$) of gas molecules.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>average speed</b> ($\\overline{v}$) is the simple arithmetic mean of the speeds of all the molecules in the gas:
      $$\\overline{v} = \\sqrt{\\frac{8 R T}{\\pi M}} = \\sqrt{\\frac{8 k_B T}{\\pi m}}$$
    </p>
  </div>

  <!-- Q27 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q27: Write the ratio between most probable speed, average speed, and rms speed.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$v_{\\text{mp}} : \\overline{v} : v_{\\text{rms}} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1 : 1.128 : 1.224$$
    </p>
  </div>

  <!-- Q28 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q28: Why is the speed of sound in a gas always less than the rms speed of its molecules?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Sound is a mechanical pressure wave transmitted through molecular collisions. Because $v_{\\text{sound}} = \\sqrt{\\gamma R T / M}$ and $v_{\\text{rms}} = \\sqrt{3 R T / M}$, their ratio is $v_{\\text{sound}} / v_{\\text{rms}} = \\sqrt{\\gamma / 3}$. Since $\\gamma < 3$ for all gases, sound cannot travel faster than the molecules carrying the disturbance.
    </p>
  </div>

  <!-- Q29 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q29: Define degrees of freedom of a dynamical system.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>degrees of freedom</b> ($f$) of a dynamical system is defined as the total number of independent coordinates or independent quadratic terms in the energy expression required to specify its position and dynamical configuration completely.
    </p>
  </div>

  <!-- Q30 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q30: How many degrees of freedom does a monoatomic gas molecule possess? Name them.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A monoatomic gas molecule possesses <b>$f = 3$ degrees of freedom</b>, all of which are translational along the mutually perpendicular $x, y,$ and $z$ axes ($f_t = 3, f_r = 0$).
    </p>
  </div>

  <!-- Q31 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q31: How many degrees of freedom does a rigid diatomic gas molecule possess at room temperature?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A rigid diatomic gas molecule possesses <b>$f = 5$ degrees of freedom</b> (3 translational + 2 rotational about axes perpendicular to the internuclear bond).
    </p>
  </div>

  <!-- Q32 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q32: How many degrees of freedom does a diatomic gas molecule possess at very high temperatures?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> At high temperatures ($> 1000\\text{ K}$), molecular vibration is excited, contributing 2 additional vibrational energy terms (kinetic + potential), giving <b>$f = 7$ degrees of freedom</b> (3 trans + 2 rot + 2 vib).
    </p>
  </div>

  <!-- Q33 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q33: How many degrees of freedom does a non-linear triatomic gas molecule possess?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A non-linear triatomic molecule (such as $\\text{H}_2\\text{O}$) possesses <b>$f = 6$ degrees of freedom</b> (3 translational + 3 rotational).
    </p>
  </div>

  <!-- Q34 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q34: State the Law of Equipartition of Energy.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> In any dynamical system in thermal equilibrium at absolute temperature $T$, the total internal thermal energy is distributed equally among all its active degrees of freedom, each degree of freedom contributing an average energy of $\\frac{1}{2} k_B T$ per molecule.
    </p>
  </div>

  <!-- Q35 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q35: What is the average energy associated with each degree of freedom per molecule at temperature $T$?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Exactly <b>$\\frac{1}{2} k_B T$</b> (or $\\frac{1}{2} R T$ per mole).
    </p>
  </div>

  <!-- Q36 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q36: State the theoretical values of $C_v, C_p$, and $\gamma$ for a monoatomic ideal gas.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For $f = 3$:
      $$C_v = \\frac{3}{2}R, \\quad C_p = \\frac{5}{2}R, \\quad \\gamma = \\frac{C_p}{C_v} = \\frac{5}{3} \\approx 1.67$$
    </p>
  </div>

  <!-- Q37 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q37: State the value of $\gamma$ for a rigid diatomic gas at room temperature.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For $f = 5$:
      $$\\gamma = 1 + \\frac{2}{f} = 1 + \\frac{2}{5} = \\frac{7}{5} = 1.40$$
    </p>
  </div>

  <!-- Q38 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q38: Define mean free path of a gas molecule.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>mean free path</b> ($\\lambda$) is the average straight-line distance traveled by a gas molecule between two consecutive collisions with other molecules.
    </p>
  </div>

  <!-- Q39 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q39: Write the formula for the mean free path ($\lambda$) in terms of molecular diameter and number density.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      $$\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}$$
      where $n$ is number of molecules per unit volume and $d$ is the effective molecular collision diameter.
    </p>
  </div>

  <!-- Q40 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(66, 165, 245, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q40: Define Avogadro's number and state its accepted numerical value.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Avogadro's number</b> ($N_A$) is the number of elementary carbon-12 atoms contained in exactly 12 grams of $^{12}\\text{C}$. Its value is:
      $$N_A = 6.02214 \\times 10^{23}\\text{ mol}^{-1}$$
    </p>
  </div>
  `;
}

module.exports = { getSolutionsPart1, solutionsPart1: getSolutionsPart1() };
