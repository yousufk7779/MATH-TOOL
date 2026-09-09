// scripts/c11_phy_9_solutions_part2.js
const { themeColor, frac } = require('./c11_phy_9_helpers');

const solutionsPart2 = `
<!-- SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS) (Q41 TO Q80) -->
<div style="margin-top: 35px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid ${themeColor};">
  <h2 style="color: ${themeColor}; font-size: 20px; margin: 0;">SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS)</h2>
  <p style="color: #94A3B8; font-size: 13px; margin: 4px 0 0 0;">Comprehensive board numericals, kinetic derivations, molecular speed ratios, equipartition calculations, and gas law deductions.</p>
</div>

<!-- Q41 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q41: Calculation of RMS Speed of Oxygen Molecules at STP</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Calculate the root mean square (rms) speed of oxygen molecules at standard temperature and pressure (STP: $0^{\\circ}\\text{C}$, $1.013 \\times 10^5\\text{ Pa}$). Density of oxygen at STP is $1.429\\text{ kg/m}^3$. Also verify using the molar mass formula ($M = 32\\text{ g/mol} = 0.032\\text{ kg/mol}$, $R = 8.314\\text{ J/mol}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Method 1 (From Pressure and Density):</b><br/>
    $$v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}} = \\sqrt{\\frac{3 \\times (1.013 \\times 10^5)}{1.429}} = \\sqrt{\\frac{303,900}{1.429}} = \\sqrt{212,666} \\approx 461.16\\text{ m/s}$$
    <b style="color: ${themeColor};">Method 2 (From Temperature and Molar Mass):</b><br/>
    $T = 273.15\\text{ K}$, $M = 0.032\\text{ kg/mol}$.
    $$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3 \\times 8.314 \\times 273.15}{0.032}} = \\sqrt{\\frac{6812.9}{0.032}} = \\sqrt{212,903} \\approx 461.41\\text{ m/s}$$
    Both methods yield consistent results: the rms speed of oxygen molecules at $0^{\\circ}\\text{C}$ is approximately <strong>$461.4\\text{ m/s}$</strong>.
  </div>
</div>

<!-- Q42 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q42: Temperature at Which Oxygen Molecules Escape Earth's Atmosphere</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> The escape velocity from the surface of the Earth is $11.2\\text{ km/s}$. At what temperature would the rms speed of oxygen molecules ($M = 0.032\\text{ kg/mol}$) equal this escape velocity? ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $v_{\\text{rms}} = v_e = 11.2\\text{ km/s} = 1.12 \\times 10^4\\text{ m/s}$, $M = 0.032\\text{ kg/mol}$.<br/>
    The formula for rms speed is:
    $$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\implies v_{\\text{rms}}^2 = \\frac{3RT}{M} \\implies T = \\frac{M \\cdot v_{\\text{rms}}^2}{3R}$$
    Substituting the given values:
    $$T = \\frac{0.032 \\times (1.12 \\times 10^4)^2}{3 \\times 8.314} = \\frac{0.032 \\times 1.2544 \\times 10^8}{24.942} = \\frac{4,014,080}{24.942} \\approx 160,936\\text{ K} \\approx 1.61 \\times 10^5\\text{ K}$$
    Oxygen molecules would need an extraordinarily high temperature of approximately <strong>$1.61 \\times 10^5\\text{ K}$</strong> for their rms speed to equal escape velocity. Because terrestrial temperatures are far lower ($\sim 300\\text{ K}$), Earth easily retains its oxygen-rich atmosphere.
  </div>
</div>

<!-- Q43 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q43: Translational Kinetic Energy of a Molecule and 1 Mole of Nitrogen at 27°C</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Calculate: (i) the average translational kinetic energy of a single molecule, and (ii) the total translational kinetic energy of 1.0 mole of nitrogen gas at $27^{\\circ}\\text{C}$. ($k_B = 1.38 \\times 10^{-23}\\text{ J/K}$, $R = 8.314\\text{ J/mol}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Temperature $T = 27 + 273.15 = 300.15\\text{ K}$.<br/>
    <strong>(i) Average Kinetic Energy per Molecule:</strong>
    $$\\overline{\\epsilon} = \\frac{3}{2} k_B T = \\frac{3}{2} \\times (1.38 \\times 10^{-23}) \\times 300.15 \\approx 6.21 \\times 10^{-21}\\text{ J}$$
    <strong>(ii) Total Translational Kinetic Energy per Mole:</strong>
    $$E_{\\text{mole}} = \\frac{3}{2} R T = \\frac{3}{2} \\times 8.314 \\times 300.15 \\approx 3743.2\\text{ J} = 3.74\\text{ kJ}$$
  </div>
</div>

<!-- Q44 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q44: Prove that Gas Pressure Equals Two-Thirds of Kinetic Energy Density</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Starting from the expression for the pressure exerted by an ideal gas, prove that the pressure is numerically equal to two-thirds of the translational kinetic energy per unit volume ($P = \\frac{2}{3} E$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. According to the kinetic theory of gases, the pressure exerted by an ideal gas of density $\\rho$ is:
    $$P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$$
    2. The mass of the gas is $M = \\rho V$. The total translational kinetic energy $E_k$ of the gas molecules is:
    $$E_k = \\frac{1}{2} M v_{\\text{rms}}^2 = \\frac{1}{2} (\\rho V) v_{\\text{rms}}^2$$
    3. The translational kinetic energy per unit volume (energy density $E$) is:
    $$E = \\frac{E_k}{V} = \\frac{1}{2} \\rho v_{\\text{rms}}^2 \\implies \\rho v_{\\text{rms}}^2 = 2E$$
    4. Substituting $\\rho v_{\\text{rms}}^2 = 2E$ into the pressure equation:
    $$P = \\frac{1}{3} (2E) \\implies \\mathbf{P = \\frac{2}{3} E}$$
    Hence, hydrostatic gas pressure is strictly equal to two-thirds of the translational kinetic energy per unit volume.
  </div>
</div>

<!-- Q45 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q45: Temperature at Which RMS Speed of H2 Equals that of O2 at 47°C</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> At what absolute temperature will the root mean square speed of hydrogen molecules ($\text{H}_2$, $M_1 = 2\\text{ g/mol}$) be equal to the rms speed of oxygen molecules ($\text{O}_2$, $M_2 = 32\\text{ g/mol}$) at $47^{\\circ}\\text{C}$?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $T_2 = 47 + 273 = 320\\text{ K}$ for oxygen, $M_1 = 2\\text{ g/mol}$, $M_2 = 32\\text{ g/mol}$.<br/>
    Equating the rms speeds:
    $$v_{\\text{rms}}(\\text{H}_2) = v_{\\text{rms}}(\\text{O}_2) \\implies \\sqrt{\\frac{3RT_1}{M_1}} = \\sqrt{\\frac{3RT_2}{M_2}}$$
    Squaring both sides and cancelling $3R$:
    $$\\frac{T_1}{M_1} = \\frac{T_2}{M_2} \\implies T_1 = T_2 \\left(\\frac{M_1}{M_2}\\right)$$
    Substituting the given values:
    $$T_1 = 320 \\times \\left(\\frac{2}{32}\\right) = 320 \\times \\frac{1}{16} = 20\\text{ K}$$
    Converting to Celsius:
    $$t_1 = 20 - 273.15 = -253.15^{\\circ}\\text{C}$$
    Hydrogen molecules at <strong>$20\\text{ K}$ ($-253.15^{\\circ}\\text{C}$)</strong> possess the identical rms speed as oxygen molecules at $47^{\\circ}\\text{C}$.
  </div>
</div>

<!-- Q46 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q46: Deduce Dalton's Law of Partial Pressures from Kinetic Theory</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Dalton's Law of Partial Pressures. Prove it mathematically using the kinetic theory formula for pressure.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statement:</b> The total pressure exerted by a non-reacting mixture of ideal gases enclosed in a container is equal to the sum of the partial pressures that each constituent gas would exert if it occupied the entire container alone at the same temperature:
    $$P = P_1 + P_2 + P_3 + \\dots$$
    <b style="color: ${themeColor};">Proof from Kinetic Theory:</b><br/>
    Consider a mixture of non-reacting gases in volume $V$ at temperature $T$. Let there be $N_1$ molecules of mass $m_1$, $N_2$ molecules of mass $m_2$, etc.<br/>
    The total pressure exerted on the container walls is:
    $$P = \\frac{1}{3} \\frac{N_1 m_1}{V} v_{\\text{rms}, 1}^2 + \\frac{1}{3} \\frac{N_2 m_2}{V} v_{\\text{rms}, 2}^2 + \\dots$$
    In thermal equilibrium, the average translational kinetic energy per molecule is identical for all gases:
    $$\\frac{1}{2} m_1 v_{\\text{rms}, 1}^2 = \\frac{1}{2} m_2 v_{\\text{rms}, 2}^2 = \\dots = \\frac{3}{2} k_B T$$
    Therefore, the pressure exerted by gas 1 alone would be $P_1 = \\frac{N_1 k_B T}{V}$, by gas 2 alone would be $P_2 = \\frac{N_2 k_B T}{V}$, and so forth.<br/>
    Total pressure:
    $$P = \\frac{(N_1 + N_2 + \\dots) k_B T}{V} = P_1 + P_2 + \\dots$$
    This proves Dalton's Law.
  </div>
</div>

<!-- Q47 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q47: Deduce Boyle's Law from Kinetic Theory of Gases</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using the kinetic formula for pressure, deduce Boyle's Law ($P V = \\text{constant}$ at constant temperature).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. According to the kinetic theory, the pressure of an ideal gas is:
    $$P = \\frac{1}{3} \\frac{m N}{V} v_{\\text{rms}}^2$$
    2. Multiplying both sides by volume $V$:
    $$P V = \\frac{1}{3} m N v_{\\text{rms}}^2 = \\frac{2}{3} N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right)$$
    3. The term $\\frac{1}{2} m v_{\\text{rms}}^2$ represents the average translational kinetic energy of a molecule, which depends exclusively on temperature:
    $$\\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T$$
    4. At a constant temperature ($T = \\text{constant}$), the average kinetic energy $\\frac{1}{2} m v_{\\text{rms}}^2$ is constant.<br/>
    5. For a given mass of gas, the total number of molecules $N$ is also constant. Therefore:
    $$P V = \\text{constant} \\implies P \\propto \\frac{1}{V}$$
    This is Boyle's Law.
  </div>
</div>

<!-- Q48 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q48: Deduce Charles's Law from Kinetic Theory of Gases</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using the kinetic theory of gases, deduce Charles's Law ($V \\propto T$ at constant pressure).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. From the kinetic theory:
    $$P V = \\frac{2}{3} N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right)$$
    2. Since $\\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T$:
    $$P V = \\frac{2}{3} N \\left( \\frac{3}{2} k_B T \\right) = N k_B T$$
    3. Solving for volume $V$:
    $$V = \\left( \\frac{N k_B}{P} \\right) T$$
    4. For a fixed mass of gas, $N$ and $k_B$ are constants. If the pressure $P$ is maintained constant:
    $$\\frac{N k_B}{P} = \\text{constant} \\implies V \\propto T \\quad \\text{or} \\quad \\frac{V}{T} = \\text{constant}$$
    This is Charles's Law.
  </div>
</div>

<!-- Q49 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q49: Deduce Avogadro's Law from Kinetic Theory of Gases</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Deduce Avogadro's Law ($N_1 = N_2$ for equal volumes at same $P$ and $T$) from the kinetic theory of gases.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Consider two different gases occupying equal volumes $V$ at the same pressure $P$ and temperature $T$.<br/>
    2. From the kinetic theory, pressure for gas 1 and gas 2:
    $$P = \\frac{1}{3} \\frac{m_1 N_1}{V} v_{\\text{rms}, 1}^2 \\quad \\text{and} \\quad P = \\frac{1}{3} \\frac{m_2 N_2}{V} v_{\\text{rms}, 2}^2$$
    Equating the two pressures:
    $$\\frac{1}{3} \\frac{m_1 N_1}{V} v_{\\text{rms}, 1}^2 = \\frac{1}{3} \\frac{m_2 N_2}{V} v_{\\text{rms}, 2}^2 \\implies m_1 N_1 v_{\\text{rms}, 1}^2 = m_2 N_2 v_{\\text{rms}, 2}^2 \\quad \\text{--- (1)}$$
    3. Since both gases are at the identical temperature $T$, their mean translational kinetic energies per molecule must be equal:
    $$\\frac{1}{2} m_1 v_{\\text{rms}, 1}^2 = \\frac{1}{2} m_2 v_{\\text{rms}, 2}^2 \\implies m_1 v_{\\text{rms}, 1}^2 = m_2 v_{\\text{rms}, 2}^2 \\quad \\text{--- (2)}$$
    4. Dividing Equation (1) by Equation (2):
    $$\\frac{m_1 N_1 v_{\\text{rms}, 1}^2}{m_1 v_{\\text{rms}, 1}^2} = \\frac{m_2 N_2 v_{\\text{rms}, 2}^2}{m_2 v_{\\text{rms}, 2}^2} \\implies \\mathbf{N_1 = N_2}$$
    Hence, equal volumes of all gases under identical conditions of temperature and pressure contain an equal number of molecules (Avogadro's Law).
  </div>
</div>

<!-- Q50 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q50: Deduce Graham's Law of Diffusion from Kinetic Theory</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Graham's Law of Diffusion. Deduce it from the kinetic theory expression for molecular speeds.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statement:</b> Under identical conditions of temperature and pressure, the rate of diffusion ($r$) of a gas is inversely proportional to the square root of its mass density $\\rho$ (or molar mass $M$):
    $$r \\propto \\frac{1}{\\sqrt{\\rho}} \\propto \\frac{1}{\\sqrt{M}}$$
    <b style="color: ${themeColor};">Deduction:</b><br/>
    1. The rate of diffusion $r$ of a gas through a porous membrane or narrow aperture is directly proportional to the root mean square velocity of its molecules:
    $$r \\propto v_{\\text{rms}}$$
    2. From the kinetic theory:
    $$P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 \\implies v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}}$$
    3. At constant pressure $P$:
    $$v_{\\text{rms}} \\propto \\frac{1}{\\sqrt{\\rho}} \\implies r \\propto \\frac{1}{\\sqrt{\\rho}}$$
    For two gases 1 and 2 at the same pressure:
    $$\\frac{r_1}{r_2} = \\frac{v_{\\text{rms}, 1}}{v_{\\text{rms}, 2}} = \\sqrt{\\frac{\\rho_2}{\\rho_1}} = \\sqrt{\\frac{M_2}{M_1}}$$
    This proves Graham's Law of Diffusion.
  </div>
</div>

<!-- Q51 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q51: Why Does the Moon Have No Atmosphere? Kinetic Explanation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain on the basis of the kinetic theory of gases why the Moon has no atmosphere.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Due to the Moon's relatively small mass and radius, its gravitational surface acceleration is only about one-sixth of Earth's ($g_{\\text{moon}} \\approx 1.63\\text{ m/s}^2$). Consequently, the escape velocity from the Moon's surface is very low:
    $$v_{e, \\text{moon}} = \\sqrt{2 g R_m} \\approx 2.38\\text{ km/s}$$
    2. During lunar daytime, the surface temperature reaches over $100^{\\circ}\\text{C}$ to $130^{\\circ}\\text{C}$ ($T \\approx 400\\text{ K}$).<br/>
    3. At this temperature, the rms speed of common atmospheric gas molecules (such as Hydrogen, Helium, Nitrogen, and Oxygen) is comparable to or exceeds the escape velocity ($v_{\\text{rms}}(\\text{H}_2) \\approx 2.2\\text{ km/s}$).<br/>
    4. By the Maxwellian tail of the velocity distribution, molecules in the high-speed fraction continuously exceeded $2.38\\text{ km/s}$ and escaped into space.<br/>
    5. Over astronomical time scales of millions of years, all gaseous molecules escaped, leaving the Moon devoid of any atmosphere.
  </div>
</div>

<!-- Q52 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q52: Work Done in Isothermal Compression of 2 Moles of Gas</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Two moles of an ideal gas at a constant temperature of $300\\text{ K}$ are compressed isothermally from an initial volume of $10.0\\text{ L}$ to a final volume of $2.0\\text{ L}$. Calculate: (i) the work done on the gas, and (ii) the heat released to the surroundings. ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$, $\\ln 5 \\approx 1.6094$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $n = 2\\text{ mol}$, $T = 300\\text{ K}$, $V_1 = 10.0\\text{ L}$, $V_2 = 2.0\\text{ L}$.<br/>
    <strong>(i) Work Done on the Gas ($W_{\\text{on}}$):</strong>
    $$W_{\\text{on}} = n R T \\ln\\left(\\frac{V_1}{V_2}\\right) = 2 \\times 8.314 \\times 300 \\times \\ln\\left(\\frac{10}{2}\\right) = 4988.4 \\times \\ln(5)$$
    $$W_{\\text{on}} = 4988.4 \\times 1.60944 \\approx 8028.5\\text{ J} \\approx 8.03\\text{ kJ}$$
    Work done by the gas is $W = -8028.5\\text{ J}$.<br/>
    <strong>(ii) Heat Released ($Q$):</strong>
    For an isothermal process, $\\Delta U = 0$. By the First Law:
    $$Q = W = -8028.5\\text{ J}$$
    The heat released to the external reservoir is <strong>$8028.5\\text{ J}$</strong>.
  </div>
</div>

<!-- Q53 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q53: Work Done in Adiabatic Compression Causing 100 K Temperature Rise</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> One mole of a diatomic gas ($\gamma = 1.40$) is compressed adiabatically, causing its temperature to rise by $100\\text{ K}$. Calculate the work done on the gas during compression. ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $n = 1\\text{ mol}$, $\\gamma = 1.40$, $T_2 - T_1 = 100\\text{ K}$.<br/>
    Work done <i>by</i> the gas in an adiabatic process is:
    $$W = \\frac{n R (T_1 - T_2)}{\\gamma - 1} = -\\frac{n R (T_2 - T_1)}{\\gamma - 1}$$
    Work done <i>on</i> the gas is $W_{\\text{on}} = -W$:
    $$W_{\\text{on}} = \\frac{n R (T_2 - T_1)}{\\gamma - 1} = \\frac{1 \\times 8.314 \\times 100}{1.40 - 1} = \\frac{831.4}{0.40} = 2078.5\\text{ J}$$
    The mechanical work done on the gas is <strong>$2078.5\\text{ J}$</strong> (which is entirely stored as an increase in internal energy: $\\Delta U = 2078.5\\text{ J}$).
  </div>
</div>

<!-- Q54 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q54: Why Sound Travels 4 Times Faster in Hydrogen Than in Oxygen</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Both Hydrogen ($\text{H}_2$) and Oxygen ($\text{O}_2$) are diatomic gases with $\gamma = 1.40$. Prove mathematically that sound travels 4 times faster in hydrogen than in oxygen at the same temperature.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    By Laplace's formula, the speed of sound in an ideal gas is:
    $$v_{\\text{sound}} = \\sqrt{\\frac{\\gamma R T}{M}}$$
    Since both gases have the identical $\\gamma = 1.40$ and are at the identical temperature $T$:
    $$v_{\\text{sound}} \\propto \\frac{1}{\\sqrt{M}}$$
    Taking the ratio for Hydrogen ($M_1 = 2\\text{ g/mol}$) and Oxygen ($M_2 = 32\\text{ g/mol}$):
    $$\\frac{v_{\\text{sound}}(\\text{H}_2)}{v_{\\text{sound}}(\\text{O}_2)} = \\sqrt{\\frac{M_{\\text{O}_2}}{M_{\\text{H}_2}}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$$
    $$\\mathbf{v_{\\text{sound}}(\\text{H}_2) = 4 \\times v_{\\text{sound}}(\\text{O}_2)}$$
    Because hydrogen molecules are 16 times lighter, they oscillate much faster, transmitting pressure disturbances 4 times more rapidly.
  </div>
</div>

<!-- Q55 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q55: Ratio of Sound Speed to RMS Speed in Diatomic Gas</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Find the exact numerical ratio of the speed of sound to the root mean square molecular speed in air (diatomic gas with $\gamma = 1.40$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Speed of sound:
    $$v_s = \\sqrt{\\frac{\\gamma R T}{M}}$$
    Root mean square speed:
    $$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}}$$
    Dividing the two equations:
    $$\\frac{v_s}{v_{\\text{rms}}} = \\frac{\\sqrt{\\gamma R T / M}}{\\sqrt{3 R T / M}} = \\sqrt{\\frac{\\gamma}{3}}$$
    Substituting $\\gamma = 1.40 = \\frac{7}{5}$:
    $$\\frac{v_s}{v_{\\text{rms}}} = \\sqrt{\\frac{1.40}{3}} = \\sqrt{0.4667} \\approx 0.683$$
    The speed of sound in air is approximately <strong>$68.3\\%$</strong> of the molecular rms speed.
  </div>
</div>

<!-- Q56 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q56: Why the Adiabatic Index $\gamma$ Decreases with Atomicity</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using the formula $\gamma = 1 + \\frac{2}{f}$, explain why the ratio of specific heats $\gamma$ decreases progressively as we move from monoatomic to diatomic and polyatomic gases.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. By the Law of Equipartition of Energy, the adiabatic ratio is:
    $$\\gamma = 1 + \\frac{2}{f}$$
    where $f$ is the number of degrees of freedom.<br/>
    2. As the atomicity of a molecule increases, more atoms join together, creating additional rotational axes and vibrational modes, so $f$ increases:<br/>
    &bull; Monoatomic ($f = 3$): $\\gamma = 1 + \\frac{2}{3} = \\frac{5}{3} \\approx 1.67$<br/>
    &bull; Diatomic ($f = 5$): $\\gamma = 1 + \\frac{2}{5} = \\frac{7}{5} = 1.40$<br/>
    &bull; Polyatomic non-linear ($f = 6$): $\\gamma = 1 + \\frac{2}{6} = \\frac{4}{3} \\approx 1.33$<br/>
    3. As $f \\to \\infty$, $\\frac{2}{f} \\to 0$, so $\\gamma \\to 1$. A greater fraction of supplied heat is absorbed into internal rotations and vibrations rather than doing external expansion work or raising pressure, causing $\\gamma$ to decrease.
  </div>
</div>

<!-- Q57 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q57: Equivalent $C_v, C_p$, and $\gamma$ for a Gas Mixture</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A gas mixture contains 1.0 mole of Helium (monoatomic, $C_{v1} = \\frac{3}{2}R$) and 1.0 mole of Oxygen (diatomic, $C_{v2} = \\frac{5}{2}R$). Calculate: (i) equivalent molar heat capacity $C_{v, \\text{mix}}$, (ii) equivalent $C_{p, \\text{mix}}$, and (iii) the adiabatic index $\\gamma_{\\text{mix}}$ of the mixture.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $n_1 = 1\\text{ mol}$, $n_2 = 1\\text{ mol}$, $n_{\\text{total}} = 2\\text{ mol}$.<br/>
    <strong>(i) Equivalent $C_{v, \\text{mix}}$:</strong>
    $$C_{v, \\text{mix}} = \\frac{n_1 C_{v1} + n_2 C_{v2}}{n_1 + n_2} = \\frac{1 \\times \\frac{3}{2}R + 1 \\times \\frac{5}{2}R}{1 + 1} = \\frac{4R}{2} = 2R$$
    <strong>(ii) Equivalent $C_{p, \\text{mix}}$:</strong>
    $$C_{p, \\text{mix}} = C_{v, \\text{mix}} + R = 2R + R = 3R$$
    <strong>(iii) Equivalent $\\gamma_{\\text{mix}}$:</strong>
    $$\\gamma_{\\text{mix}} = \\frac{C_{p, \\text{mix}}}{C_{v, \\text{mix}}} = \\frac{3R}{2R} = 1.50$$
  </div>
</div>

<!-- Q58 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q58: Calculation of Mean Free Path of Nitrogen at STP</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Calculate the mean free path of nitrogen molecules at STP ($T = 273\\text{ K}$, $P = 1.013 \\times 10^5\\text{ Pa}$). Take the effective molecular diameter of nitrogen as $d = 3.0 \\times 10^{-10}\\text{ m} = 0.30\\text{ nm}$ and $k_B = 1.38 \\times 10^{-23}\\text{ J/K}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    The formula for mean free path in terms of $P$ and $T$ is:
    $$\\lambda = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$$
    Substituting the given values:
    $$\\lambda = \\frac{(1.38 \\times 10^{-23}) \\times 273}{1.4142 \\times 3.1416 \\times (3.0 \\times 10^{-10})^2 \\times (1.013 \\times 10^5)}$$
    $$\\text{Denominator} = 1.4142 \\times 3.1416 \\times (9.0 \\times 10^{-20}) \\times (1.013 \\times 10^5) = 4.4429 \\times 9.0 \\times 10^{-20} \\times 1.013 \\times 10^5 \\approx 4.051 \\times 10^{-14}$$
    $$\\text{Numerator} = 3.7674 \\times 10^{-21}$$
    $$\\lambda = \\frac{3.7674 \\times 10^{-21}}{4.051 \\times 10^{-14}} \\approx 9.30 \\times 10^{-8}\\text{ m} = 93\\text{ nm}$$
    The mean free path of nitrogen at STP is approximately <strong>$93\\text{ nm}$</strong> (about 300 times its molecular diameter).
  </div>
</div>

<!-- Q59 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q59: Variation of Mean Free Path with Temperature, Pressure, and Density</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> From the formula $\\lambda = \\frac{k_B T}{\\sqrt{2}\\pi d^2 P} = \\frac{1}{\\sqrt{2}\\pi n d^2}$, explain how the mean free path varies with: (i) pressure at constant temperature, (ii) temperature at constant pressure, and (iii) temperature at constant volume.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <strong>(i) Pressure at Constant Temperature ($T = \\text{const}$):</strong>
    $$\\lambda \\propto \\frac{1}{P}$$
    Increasing pressure compresses the gas, crowding more molecules per unit volume ($n$ increases), so molecules collide more frequently and the mean free path decreases inversely.<br/><br/>
    <strong>(ii) Temperature at Constant Pressure ($P = \\text{const}$):</strong>
    $$\\lambda \\propto T$$
    Heating at constant pressure causes the gas to expand, decreasing number density $n$. Molecules travel farther between collisions, so $\\lambda$ increases linearly with $T$.<br/><br/>
    <strong>(iii) Temperature at Constant Volume ($V = \\text{const}$):</strong>
    $$\\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2} = \\text{constant}$$
    Because volume is fixed, number density $n = N/V$ is strictly constant. Raising temperature increases molecular speeds, but the physical spacing and collision frequency scale proportionally, leaving the mean free path <strong>completely independent of temperature</strong>!
  </div>
</div>

<!-- Q60 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q60: Effect of Doubling Absolute Temperature on Gas Properties</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> If the absolute temperature of an ideal gas enclosed in a rigid container is doubled ($T' = 2T$), determine the change in: (i) rms speed of molecules, (ii) average kinetic energy per molecule, and (iii) gas pressure.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <strong>(i) RMS Speed ($v_{\\text{rms}}$):</strong>
    Since $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\propto \\sqrt{T}$:
    $$v'_{\\text{rms}} = \\sqrt{2} \\, v_{\\text{rms}} \\approx 1.414 \\, v_{\\text{rms}}$$
    The rms speed increases by a factor of <strong>$\\sqrt{2} \\approx 1.414$ (increases by $41.4\\%$)</strong>.<br/><br/>
    <strong>(ii) Average Kinetic Energy ($\\overline{\\epsilon}$):</strong>
    Since $\\overline{\\epsilon} = \\frac{3}{2} k_B T \\propto T$:
    $$\\overline{\\epsilon}' = 2 \\, \\overline{\\epsilon}$$
    The average kinetic energy <strong>doubles (increases by $100\\%$)</strong>.<br/><br/>
    <strong>(iii) Gas Pressure ($P$):</strong>
    In a rigid container, volume is constant ($V = \\text{const}$). By Gay-Lussac's law, $P \\propto T$:
    $$P' = 2P$$
    The pressure strictly <strong>doubles</strong>.
  </div>
</div>

<!-- Q61 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q61: Effect of Doubling Pressure at Constant Temperature on RMS Speed</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> If the pressure of an ideal gas is doubled while maintaining its temperature constant, what happens to the root mean square speed of its molecules? Explain the common misconception.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    The rms speed <strong>remains completely unchanged</strong>.<br/>
    <b style="color: ${themeColor};">Explanation:</b><br/>
    - The rms speed formula is:
    $$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$$
    Since temperature $T$ and molar mass $M$ are constant, $v_{\\text{rms}}$ depends solely on temperature and is independent of pressure.<br/>
    - <b style="color: ${themeColor};">Common Exam Trap:</b> Looking at $v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}}$, a student might wrongly deduce that doubling $P$ doubles $v_{\\text{rms}}^2$. However, by Boyle's law at constant temperature, doubling pressure also doubles the density $\\rho$ by compressing the volume to half ($P' = 2P \\implies \\rho' = 2\\rho$). Thus:
    $$\\frac{P'}{\\rho'} = \\frac{2P}{2\\rho} = \\frac{P}{\\rho} = \\text{constant}$$
    Therefore, $v_{\\text{rms}}$ remains strictly unchanged.
  </div>
</div>

<!-- Q62 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q62: Derive Dulong and Petit's Law for Solids from Equipartition</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Dulong and Petit's Law for the molar heat capacity of metallic solids. Derive it using the Law of Equipartition of Energy.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Dulong and Petit's Law:</b> The molar specific heat capacity of all solid elements at normal room temperatures is constant and approximately equal to $3R \\approx 24.9\\text{ J/mol}\\cdot\\text{K} \\approx 6\\text{ cal/mol}\\cdot\\text{K}$.<br/><br/>
    <b style="color: ${themeColor};">Derivation:</b><br/>
    1. In a crystalline solid, each atom is bound to its lattice site and can oscillate about its equilibrium position in 3 independent dimensions ($x, y, z$).<br/>
    2. A harmonic oscillator in each dimension has two quadratic energy terms: kinetic energy ($\\frac{1}{2} m v_x^2$) and potential energy ($\\frac{1}{2} k x^2$).<br/>
    3. By the Law of Equipartition of Energy, each quadratic term contributes $\\frac{1}{2} k_B T$ of average energy.<br/>
    4. Average energy per atom in 1 dimension: $\\frac{1}{2} k_B T + \\frac{1}{2} k_B T = k_B T$.<br/>
    5. In 3 dimensions, total average vibrational energy per atom is:
    $$\\overline{\\epsilon} = 3 \\times k_B T = 3 k_B T$$
    6. For 1 mole of solid containing $N_A$ atoms, total internal energy is:
    $$U = N_A \\times (3 k_B T) = 3 (N_A k_B) T = 3 R T$$
    7. Molar heat capacity:
    $$\\mathbf{C = \\frac{dU}{dT} = 3 R \\approx 3 \\times 8.314 \\approx 24.94\\text{ J/mol}\\cdot\\text{K}}$$
  </div>
</div>

<!-- Q63 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q63: Why Specific Heat of Liquid Water is High ($\approx 9R$)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using the concept of degrees of freedom, explain why the molar heat capacity of water is approximately $9R$ ($\approx 75\\text{ J/mol}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. A water molecule ($\text{H}_2\text{O}$) consists of three atoms: two hydrogen atoms and one oxygen atom.<br/>
    2. In the liquid state, treating each atom as vibrating independently like an oscillator in a solid, each of the 3 atoms contributes $3 k_B T$ of energy ($1 k_B T$ per dimension: kinetic + potential).<br/>
    3. Total vibrational energy for all three atoms in one $\text{H}_2\text{O}$ molecule is:
    $$\\overline{\\epsilon} = 3 \\times (3 k_B T) = 9 k_B T$$
    4. For 1 mole of water ($N_A$ molecules):
    $$U = N_A \\times 9 k_B T = 9 R T$$
    5. Molar heat capacity:
    $$C = \\frac{dU}{dT} = 9 R \\approx 9 \\times 8.314 \\approx 74.8\\text{ J/mol}\\cdot\\text{K}$$
    Dividing by the molar mass of water ($M = 18\\text{ g/mol}$):
    $$c = \\frac{74.8\\text{ J/mol}\\cdot\\text{K}}{0.018\\text{ kg/mol}} \\approx 4184\\text{ J/kg}\\cdot\\text{K} = 1.0\\text{ cal/g}\\cdot^{\\circ}\\text{C}$$
    This explains water's exceptionally high heat capacity, which stabilizes maritime climates and planetary temperatures.
  </div>
</div>

<!-- Q64 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q64: Why Vibrational Degrees of Freedom are 'Frozen' at Room Temperature</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> According to classical equipartition, a diatomic gas should have $f = 7$, yet experimentally $\gamma = 1.40$ ($f = 5$) at room temperature. Explain this discrepancy using quantum energy levels.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <strong>Classical Failure:</strong> Classical physics assumes energy is continuous, predicting that all degrees of freedom (translational, rotational, vibrational) should contribute $\\frac{1}{2} k_B T$ equally at all temperatures.<br/>
    2. <strong>Quantum Reality:</strong> In quantum mechanics, energy levels are quantized with discrete spacing $\\Delta E = h\\nu$.<br/>
    &bull; Translational energy level spacings are tiny ($\sim 10^{-20}\\text{ eV}$), easily excited even near $0\\text{ K}$.<br/>
    &bull; Rotational energy level spacings are small ($\sim 10^{-3}\\text{ eV}$), fully excited at ordinary room temperatures ($\sim 300\\text{ K}$).<br/>
    &bull; Vibrational energy level spacings are comparatively enormous ($\sim 0.2\\text{ to }0.5\\text{ eV}$).<br/>
    3. At room temperature ($300\\text{ K}$), the average thermal collision energy ($k_B T \\approx 0.026\\text{ eV}$) is far too weak to jump the energy gap to the first excited vibrational quantum state.<br/>
    4. Consequently, vibrational modes remain <strong>'frozen out'</strong> in their ground state. Only at temperatures above $1000\\text{ K}$ does $k_B T \\approx h\\nu$, unfreezing the vibrational degrees of freedom so that $f$ rises to 7 and $\\gamma$ drops to $1.29$.
  </div>
</div>

<!-- Q65 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q65: Total Internal Energy of 4.0 g of Helium Gas at 300 K</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Calculate the total internal energy of 4.0 g of Helium gas at $300\\text{ K}$. (Molar mass of Helium $M = 4.0\\text{ g/mol}$, $R = 8.314\\text{ J/mol}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Number of moles: $n = \\frac{m}{M} = \\frac{4.0\\text{ g}}{4.0\\text{ g/mol}} = 1.0\\text{ mol}$.<br/>
    Helium is a monoatomic gas with $f = 3$ degrees of freedom.<br/>
    Total internal energy:
    $$U = \\frac{f}{2} n R T = \\frac{3}{2} \\times 1.0 \\times 8.314 \\times 300 = 1.5 \\times 2494.2 = 3741.3\\text{ J} = 3.74\\text{ kJ}$$
    The total internal energy is <strong>$3741.3\\text{ J}$</strong>.
  </div>
</div>

<!-- Q66 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q66: Calculation of Loschmidt Number at STP</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define the Loschmidt number ($n_0$). Calculate its numerical value from Avogadro's constant and the molar volume of an ideal gas at STP.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Definition:</b> The <b>Loschmidt number</b> ($n_0$) is the number of molecules contained in unit volume ($1\\text{ m}^3$) of an ideal gas at standard temperature and pressure (STP: $0^{\\circ}\\text{C}$, $1\\text{ atm}$).<br/><br/>
    <b style="color: ${themeColor};">Calculation:</b><br/>
    At STP, 1 mole of an ideal gas contains $N_A = 6.02214 \\times 10^{23}$ molecules and occupies $V_m = 22.414\\text{ liters} = 2.2414 \\times 10^{-2}\\text{ m}^3$.<br/>
    $$n_0 = \\frac{N_A}{V_m} = \\frac{6.02214 \\times 10^{23}\\text{ molecules}}{2.2414 \\times 10^{-2}\\text{ m}^3} \\approx 2.6868 \\times 10^{25}\\text{ molecules/m}^3$$
    In $1\\text{ cm}^3$ ($10^{-6}\\text{ m}^3$), there are $2.69 \\times 10^{19}$ molecules.
  </div>
</div>

<!-- Q67 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q67: Equilibrium Pressure of Two Connected Gas Vessels</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Two identical vessels of equal volume $V$ contain the same ideal gas. Vessel 1 is at pressure $P_1$ and temperature $T_1$, while vessel 2 is at pressure $P_2$ and temperature $T_2$. If the two vessels are connected by a narrow tube of negligible volume while maintaining their temperatures at $T_1$ and $T_2$, find the final common equilibrium pressure $P$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Initial number of moles in vessel 1 and vessel 2:
    $$n_1 = \\frac{P_1 V}{R T_1} \\quad \\text{and} \\quad n_2 = \\frac{P_2 V}{R T_2}$$
    Total number of moles:
    $$n_{\\text{total}} = n_1 + n_2 = \\frac{V}{R} \\left( \\frac{P_1}{T_1} + \\frac{P_2}{T_2} \\right)$$
    When connected, gas redistributes until a common equilibrium pressure $P$ is established. The final moles in vessel 1 and vessel 2 are:
    $$n_1' = \\frac{P V}{R T_1} \\quad \\text{and} \\quad n_2' = \\frac{P V}{R T_2}$$
    By conservation of total moles ($n_{\\text{total}} = n_1' + n_2'$):
    $$\\frac{V}{R} \\left( \\frac{P_1}{T_1} + \\frac{P_2}{T_2} \\right) = \\frac{P V}{R} \\left( \\frac{1}{T_1} + \\frac{1}{T_2} \\right)$$
    Dividing both sides by $V/R$:
    $$\\frac{P_1}{T_1} + \\frac{P_2}{T_2} = P \\left( \\frac{T_1 + T_2}{T_1 T_2} \\right) = P \\left( \\frac{1}{T_1} + \\frac{1}{T_2} \\right)$$
    $$\\frac{P_1 T_2 + P_2 T_1}{T_1 T_2} = P \\left( \\frac{T_1 + T_2}{T_1 T_2} \\right) \\implies \\mathbf{P = \\frac{P_1 T_2 + P_2 T_1}{T_1 + T_2}}$$
  </div>
</div>

<!-- Q68 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q68: Physical Significance and Dimensions of van der Waals Constants $a$ and $b$</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> In the van der Waals equation $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$, explain the physical significance of constants $a$ and $b$ and derive their dimensional formulas.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Constant $a$ (Intermolecular Attraction Correction):</b><br/>
    - Real gas molecules attract one another. A molecule near the wall experiences an inward net pull, reducing the force of impact on the wall. The term $a / V^2$ is the internal cohesive pressure correction.<br/>
    - By principle of homogeneity: $[a / V^2] = [P]$.
    $$[a] = [P] \\cdot [V^2] = [\\text{M}^1 \\text{L}^{-1} \\text{T}^{-2}] \\cdot [\\text{L}^6] = [\\mathbf{\\text{M}^1 \\text{L}^5 \\text{T}^{-2}}]$$
    SI Unit: $\\text{N}\\cdot\\text{m}^4/\\text{mol}^2$ (or $\\text{Pa}\\cdot\\text{m}^6/\\text{mol}^2$).<br/><br/>
    <b style="color: ${themeColor};">2. Constant $b$ (Co-Volume / Molecular Size Correction):</b><br/>
    - Real gas molecules have a finite volume, so the free volume available for molecular motion is $(V - b)$, where $b = 4 \\times (\\text{actual molecular volume})$.<br/>
    - By homogeneity: $[b] = [V] = [\\mathbf{\\text{M}^0 \\text{L}^3 \\text{T}^0}]$.<br/>
    SI Unit: $\\text{m}^3/\\text{mol}$.
  </div>
</div>

<!-- Q69 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q69: Ratio of Kinetic Energies for Equal Masses of Helium and Oxygen</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Two separate containers at the same temperature $T$ contain equal masses of Helium ($M_1 = 4\\text{ g/mol}$) and Oxygen ($M_2 = 32\\text{ g/mol}$). Determine: (i) the ratio of average translational kinetic energy per molecule, and (ii) the ratio of total translational kinetic energy of the gases.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <strong>(i) Average Kinetic Energy per Molecule:</strong>
    $$\\overline{\\epsilon} = \\frac{3}{2} k_B T$$
    Because temperature $T$ is identical, $\\overline{\\epsilon}$ is completely independent of molecular mass or gas identity:
    $$\\frac{\\overline{\\epsilon}_{\\text{He}}}{\\overline{\\epsilon}_{\\text{O}_2}} = \\mathbf{1 : 1}$$
    <strong>(ii) Total Translational Kinetic Energy:</strong>
    Total kinetic energy is $E_{\\text{total}} = n \\left(\\frac{3}{2} R T\\right) = \\frac{m_{\\text{mass}}}{M} \\left(\\frac{3}{2} R T\\right)$.<br/>
    Since masses $m_{\\text{mass}}$ are equal:
    $$\\frac{E_{\\text{total}}(\\text{He})}{E_{\\text{total}}(\\text{O}_2)} = \\frac{M_{\\text{O}_2}}{M_{\\text{He}}} = \\frac{32}{4} = 8$$
    The total translational kinetic energy of Helium is <strong>8 times greater</strong> than that of Oxygen because equal mass of Helium contains 8 times as many molecules ($n_{\\text{He}} = 8 n_{\\text{O}_2}$).
  </div>
</div>

<!-- Q70 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q70: Maxwell-Boltzmann Distribution: Temperature Effect on Speed Curve</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe how the Maxwell-Boltzmann molecular speed distribution curve changes when the temperature of a gas is raised from $T_1$ to $T_2$ ($T_2 > T_1$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    When the temperature increases from $T_1$ to $T_2$ ($T_2 > T_1$):<br/>
    1. <strong>Peak Shift to the Right:</strong> The most probable speed ($v_{\\text{mp}} = \\sqrt{2RT/M}$) increases proportional to $\\sqrt{T}$. The peak of the curve shifts toward higher speeds on the velocity axis.<br/>
    2. <strong>Flatter and Broader Curve:</strong> The peak height decreases. The distribution broadens out over a wider range of speeds because molecular speeds become more dispersed.<br/>
    3. <strong>Constant Total Area:</strong> The total area under the $P(v) - v$ curve represents the total number of molecules ($N = \\int_0^\\infty P(v) dv$), which remains strictly constant at all temperatures.<br/>
    4. <strong>Enlarged High-Speed Tail:</strong> The fraction of molecules possessing very high speeds (in the right-hand tail of the curve) increases exponentially, explaining the dramatic acceleration of chemical reaction rates with temperature.
  </div>
</div>

<!-- Q71 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q71: Mathematical Proof that $v_{\\text{rms}} > \\overline{v}$ (Cauchy-Schwarz Inequality)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Prove mathematically using variance and the definition of root mean square that for any distribution of non-identical molecular speeds, $v_{\\text{rms}}$ is always strictly greater than average speed $\\overline{v}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Consider the statistical variance ($\\sigma^2$) of the molecular speed distribution:
    $$\\sigma^2 = \\frac{1}{N} \\sum_{i=1}^N (v_i - \\overline{v})^2$$
    2. Since the square of any real number is strictly non-negative, $(v_i - \\overline{v})^2 \\ge 0$, and for any non-uniform distribution of speeds, $\\sigma^2 > 0$.<br/>
    3. Expanding the square:
    $$\\sigma^2 = \\frac{1}{N} \\sum_{i=1}^N (v_i^2 - 2 v_i \\overline{v} + \\overline{v}^2) = \\frac{1}{N} \\sum_{i=1}^N v_i^2 - 2 \\overline{v} \\left( \\frac{1}{N} \\sum_{i=1}^N v_i \\right) + \\overline{v}^2$$
    4. Since $\\frac{1}{N} \\sum v_i^2 = v_{\\text{rms}}^2$ and $\\frac{1}{N} \\sum v_i = \\overline{v}$:
    $$\\sigma^2 = v_{\\text{rms}}^2 - 2 \\overline{v}^2 + \\overline{v}^2 = v_{\\text{rms}}^2 - \\overline{v}^2$$
    5. Because $\\sigma^2 > 0$:
    $$v_{\\text{rms}}^2 - \\overline{v}^2 > 0 \\implies v_{\\text{rms}}^2 > \\overline{v}^2 \\implies \\mathbf{v_{\\text{rms}} > \\overline{v}}$$
    $v_{\\text{rms}}$ equals $\\overline{v}$ only in the hypothetical trivial case where all molecules travel at the exact same speed ($\sigma = 0$).
  </div>
</div>

<!-- Q72 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q72: Why a Bicycle Pump Cylinder Heats Up During Inflation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> When pumping air into a bicycle tyre using a hand pump, the lower barrel of the pump becomes noticeably hot. Explain why this heating occurs using the First Law of Thermodynamics.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Rapid pumping compresses air inside the cylinder very quickly. Because compression takes place in a fraction of a second, heat has virtually zero time to escape through the walls, making it an <strong>adiabatic compression</strong> ($dQ \\approx 0$).<br/>
    2. By the First Law of Thermodynamics ($dQ = dU + dW$):
    $$0 = dU + dW \\implies dU = -dW = dW_{\\text{on}}$$
    3. The muscular work performed by the person in pushing the pump piston down against air pressure goes directly into increasing the microscopic internal energy ($dU > 0$) of the compressed air molecules.<br/>
    4. By the kinetic interpretation of temperature ($dU = n C_v dT$), this increase in internal energy directly elevates the temperature of the air, which conducts into the lower metallic barrel of the pump, making it hot to the touch. (Friction of the piston washer contributes a small secondary fraction).
  </div>
</div>

<!-- Q73 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q73: Molecular Collision Frequency Calculation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> If the mean free path of a gas molecule is $\lambda = 1.0 \\times 10^{-7}\\text{ m}$ and its average speed is $\\overline{v} = 500\\text{ m/s}$, calculate: (i) the collision frequency ($Z$), and (ii) the mean time interval between two successive collisions (relaxation time $\tau$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $\\lambda = 1.0 \\times 10^{-7}\\text{ m}$, $\\overline{v} = 500\\text{ m/s}$.<br/>
    <strong>(i) Collision Frequency ($Z$):</strong> The number of collisions experienced by a molecule per second is:
    $$Z = \\frac{\\overline{v}}{\\lambda} = \\frac{500\\text{ m/s}}{1.0 \\times 10^{-7}\\text{ m}} = 5.0 \\times 10^9\\text{ collisions/second}$$
    A single gas molecule undergoes <strong>5 billion collisions every second</strong> at room temperature!<br/><br/>
    <strong>(ii) Relaxation Time ($\\tau$):</strong> The mean time between collisions is:
    $$\\tau = \\frac{1}{Z} = \\frac{1}{5.0 \\times 10^9} = 2.0 \\times 10^{-10}\\text{ s} = 0.20\\text{ nanoseconds}$$
  </div>
</div>

<!-- Q74 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q74: Brownian Motion: Experimental Proof of Kinetic Molecular Reality</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is Brownian motion? Explain how Robert Brown's observation and Albert Einstein's theoretical analysis established the conclusive physical reality of molecules.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Brownian Motion:</b> The continuous, irregular, rapid zig-zag motion of microscopic suspended particles (such as pollen grains or smoke particles) in a fluid medium visible under a microscope.<br/><br/>
    <b style="color: ${themeColor};">Physical Explanation (Einstein, 1905):</b><br/>
    1. A microscopic particle suspended in a fluid is constantly bombarded from all sides by invisible, rapidly moving fluid molecules.<br/>
    2. Because molecular motion is random, at any given instant, the number of molecular impacts on one side of the particle does not exactly balance those on the opposite side.<br/>
    3. This instantaneous imbalance creates a fluctuating net resultant force, kicking the particle in a random direction.<br/>
    4. In the next microsecond, an opposing collision imbalance kicks it elsewhere, producing an erratic random walk.<br/>
    5. Einstein derived the equation for the mean square displacement $\\overline{x^2} = \\frac{2 k_B T}{6\\pi\\eta r} t$, enabling Jean Perrin to measure Avogadro's number experimentally and confirming the atomic hypothesis beyond doubt.
  </div>
</div>

<!-- Q75 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q75: Ratio of RMS Speeds of Diatomic Gas at 27°C and 927°C</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> At what temperature will the rms speed of a gas be double its value at $27^{\\circ}\\text{C}$?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Initial temperature: $T_1 = 27 + 273 = 300\\text{ K}$.<br/>
    Let initial rms speed be $v_1$ and final rms speed be $v_2 = 2v_1$.<br/>
    Since $v_{\\text{rms}} \\propto \\sqrt{T}$:
    $$\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} \\implies 2 = \\sqrt{\\frac{T_2}{300}}$$
    Squaring both sides:
    $$4 = \\frac{T_2}{300} \\implies T_2 = 4 \\times 300 = 1200\\text{ K}$$
    Converting to Celsius:
    $$t_2 = 1200 - 273.15 = 926.85^{\\circ}\\text{C} \\approx 927^{\\circ}\\text{C}$$
    The absolute temperature must be <strong>$1200\\text{ K}$ ($927^{\\circ}\\text{C}$)</strong>.
  </div>
</div>

<!-- Q76 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q76: Rate of Leakage of Gas from a Vacuum Chamber</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> An evacuated glass vessel of volume $2.0\\text{ L}$ has a tiny pinhole leak allowing $1.0 \\times 10^{16}$ air molecules to enter per second. Assuming temperature remains constant at $300\\text{ K}$, how much time will it take for the internal pressure to reach $1.0 \\times 10^{-2}\\text{ Pa}$? ($k_B = 1.38 \\times 10^{-23}\\text{ J/K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Target pressure: $P = 1.0 \\times 10^{-2}\\text{ Pa}$. Volume: $V = 2.0\\text{ L} = 2.0 \\times 10^{-3}\\text{ m}^3$.<br/>
    Total molecules needed ($N$):
    $$P V = N k_B T \\implies N = \\frac{P V}{k_B T}$$
    $$N = \\frac{(1.0 \\times 10^{-2}) \\times (2.0 \\times 10^{-3})}{(1.38 \\times 10^{-23}) \\times 300} = \\frac{2.0 \\times 10^{-5}}{4.14 \\times 10^{-21}} \\approx 4.831 \\times 10^{15}\\text{ molecules}$$
    Leak rate: $R = 1.0 \\times 10^{16}\\text{ molecules/s}$.<br/>
    Time required:
    $$t = \\frac{N}{R} = \\frac{4.831 \\times 10^{15}}{1.0 \\times 10^{16}} = 0.483\\text{ seconds}$$
  </div>
</div>

<!-- Q77 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q77: Why Free Expansion of an Ideal Gas Involves No Temperature Change</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> When an ideal gas undergoes free expansion into a vacuum inside an insulated enclosure, explain why its temperature remains strictly constant, whereas a real gas cools down slightly.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. In free expansion into a vacuum, there is no opposing external pressure ($P_{\\text{ext}} = 0$), so external work done is zero ($W = 0$).<br/>
    2. Because the enclosure is thermally insulated, no heat enters or leaves ($Q = 0$).<br/>
    3. By the First Law of Thermodynamics:
    $$\\Delta U = Q - W = 0 - 0 = 0$$
    4. <b style="color: ${themeColor};">Ideal Gas:</b> Intermolecular attractive forces are zero ($U_p = 0$). Internal energy consists solely of kinetic energy: $U = n C_v T$. Since $\\Delta U = 0$, $\\Delta T = 0$: the temperature remains strictly unchanged.<br/>
    5. <b style="color: ${themeColor};">Real Gas:</b> Real molecules attract one another via van der Waals forces. As the gas expands and intermolecular distances increase, work must be done against these attractive forces, increasing intermolecular potential energy ($U_p$). Since total internal energy is conserved ($\Delta U = \\Delta U_k + \\Delta U_p = 0$), molecular kinetic energy $\\Delta U_k$ must decrease, resulting in a slight drop in temperature (Joule effect).
  </div>
</div>

<!-- Q78 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q78: Relation Between Average Kinetic Energy and Gas Pressure</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Show that the total translational kinetic energy ($E$) of all molecules in volume $V$ of a gas is given by $E = \\frac{3}{2} P V$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. By the kinetic theory of gases, the pressure exerted by $N$ molecules in volume $V$ is:
    $$P = \\frac{1}{3} \\frac{m N}{V} v_{\\text{rms}}^2$$
    2. Multiplying both sides by $V$:
    $$P V = \\frac{1}{3} m N v_{\\text{rms}}^2$$
    3. The total translational kinetic energy $E$ of all $N$ molecules is:
    $$E = N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right) = \\frac{1}{2} m N v_{\\text{rms}}^2$$
    4. Comparing the two expressions:
    $$P V = \\frac{2}{3} \\left( \\frac{1}{2} m N v_{\\text{rms}}^2 \\right) = \\frac{2}{3} E$$
    Multiplying both sides by $\\frac{3}{2}$:
    $$\\mathbf{E = \\frac{3}{2} P V}$$
    This proves that the total translational kinetic energy of a gas is directly proportional to the product of its pressure and volume.
  </div>
</div>

<!-- Q79 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q79: Link Between Microscopic Mass $m$ and Macroscopic Molar Mass $M$</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain how Avogadro's number provides the bridge between microscopic molecular quantities ($m, k_B$) and macroscopic thermodynamic quantities ($M, R$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Avogadro's constant ($N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$) is the universal scaling factor connecting microscopic atomic physics with macroscopic laboratory physics:<br/>
    1. <strong>Mass Scaling:</strong> The mass of an individual microscopic molecule $m$ is linked to the molar mass $M$ by:
    $$M = N_A \\cdot m \\iff m = \\frac{M}{N_A}$$
    2. <strong>Energy Scaling:</strong> Boltzmann's constant $k_B$ (energy per molecule per Kelvin) is linked to the Universal Gas Constant $R$ (energy per mole per Kelvin) by:
    $$R = N_A \\cdot k_B \\iff k_B = \\frac{R}{N_A}$$
    3. <strong>Equipartition Translation:</strong> An energy of $\\frac{1}{2} k_B T$ per molecule scales directly to $\\frac{1}{2} R T$ per mole. Thus, $N_A$ bridges the sub-microscopic world of atoms to the macroscopic world of pressure gauges and thermometers.
  </div>
</div>

<!-- Q80 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q80: Mean Free Path at Very Low Pressures (High Vacuum)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> In an ultra-high vacuum chamber, the pressure is reduced to $10^{-7}\\text{ Pa}$ at room temperature. If the mean free path becomes larger than the dimensions of the vacuum vessel itself, how do molecules collide?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. From $\\lambda = \\frac{k_B T}{\\sqrt{2}\\pi d^2 P}$, at $P = 10^{-7}\\text{ Pa}$, the mean free path expands to:
    $$\\lambda \\approx 100\\text{ km}$$
    2. When the calculated mean free path $\\lambda$ far exceeds the physical dimensions of the container (e.g., $L \\sim 0.5\\text{ m}$), intermolecular collisions become extraordinarily rare.<br/>
    3. Molecules travel in straight, uninterrupted trajectories across the container, colliding almost exclusively with the container walls.<br/>
    4. This regime is known as <strong>Knudsen flow (molecular flow)</strong>, where continuum gas dynamics ceases to apply, and transport properties (viscosity, thermal conduction) become directly proportional to pressure rather than independent of it.
  </div>
</div>
`;

module.exports = { solutionsPart2 };
