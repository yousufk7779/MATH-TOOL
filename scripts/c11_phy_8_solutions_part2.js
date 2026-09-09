// scripts/c11_phy_8_solutions_part2.js
const { themeColor, frac } = require('./c11_phy_8_helpers');

const solutionsPart2 = `
<!-- SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS) (Q41 TO Q80) -->
<div style="margin-top: 35px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid ${themeColor};">
  <h2 style="color: ${themeColor}; font-size: 20px; margin: 0;">SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS)</h2>
  <p style="color: #94A3B8; font-size: 13px; margin: 4px 0 0 0;">Comprehensive board numericals, conceptual reasoning, process comparisons, engine cycles, and thermodynamic proofs.</p>
</div>

<!-- Q41 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q41: Why is $C_p$ Greater Than $C_v$? Provide Physical Reasoning</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain physically why the molar heat capacity of a gas at constant pressure ($C_p$) is always strictly greater than that at constant volume ($C_v$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. When 1 mole of gas is heated at <strong>constant volume</strong> ($C_v$), the volume remains fixed ($dV = 0$). Hence, external mechanical work done by the gas is zero ($W = P dV = 0$). By the First Law of Thermodynamics ($dQ = dU + dW$), all supplied heat is utilized exclusively to raise the microscopic internal energy ($dU$) and temperature of the gas molecules.<br/>
    2. In contrast, when 1 mole of gas is heated at <strong>constant pressure</strong> ($C_p$), the gas must expand against the external atmospheric pressure. Therefore, the heat supplied must accomplish two distinct tasks simultaneously:<br/>
    &bull; Increase the internal energy by the same amount $dU$ to raise the temperature by $dT$.<br/>
    &bull; Perform external mechanical work ($dW = P dV$) as the piston moves outward.<br/>
    3. Consequently, more heat energy must be supplied at constant pressure than at constant volume for the identical $1\\text{ K}$ temperature rise:
    $$C_p = C_v + P \\frac{dV}{dT} = C_v + R \\implies C_p > C_v$$
  </div>
</div>

<!-- Q42 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q42: Calculation of Work Done and Heat Supplied in Isobaric Expansion</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Two moles of an ideal diatomic gas ($\gamma = 1.40$) at a pressure of $1.5 \\times 10^5\\text{ Pa}$ and temperature 300 K are heated isobarically until the volume doubles. Calculate: (i) final temperature, (ii) work done by the gas, and (iii) heat supplied. ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $n = 2\\text{ mol}$, $P = 1.5 \\times 10^5\\text{ Pa}$, $T_1 = 300\\text{ K}$, $V_2 = 2 V_1$.<br/>
    <strong>(i) Final Temperature:</strong> At constant pressure, by Charles's Law:
    $$\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies T_2 = T_1 \\left(\\frac{V_2}{V_1}\\right) = 300 \\times 2 = 600\\text{ K}$$
    <strong>(ii) Work Done:</strong>
    $$W = P(V_2 - V_1) = n R (T_2 - T_1) = 2 \\times 8.314 \\times (600 - 300) = 2 \\times 8.314 \\times 300 = 4988.4\\text{ J}$$
    <strong>(iii) Heat Supplied:</strong> For a diatomic gas, $C_p = \\frac{7}{2}R$:
    $$Q = n C_p \\Delta T = 2 \\times \\left(\\frac{7}{2} \\times 8.314\\right) \\times 300 = 7 \\times 8.314 \\times 300 = 17,459.4\\text{ J}$$
    Change in internal energy: $\\Delta U = Q - W = 17,459.4 - 4988.4 = 12,471\\text{ J}$.
  </div>
</div>

<!-- Q43 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q43: Work Done and Internal Energy Change in Isothermal Expansion</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> One mole of an ideal gas at $27^{\\circ}\\text{C}$ expands isothermally from an initial pressure of $4.0\\text{ atm}$ to a final pressure of $1.0\\text{ atm}$. Calculate: (i) the work done by the gas, (ii) the change in internal energy, and (iii) the heat absorbed from the surroundings. ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$, $\\ln 4 \\approx 1.386$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $n = 1\\text{ mol}$, $T = 27 + 273 = 300\\text{ K}$, $P_1 = 4.0\\text{ atm}$, $P_2 = 1.0\\text{ atm}$.<br/>
    <strong>(i) Work Done:</strong>
    $$W = n R T \\ln\\left(\\frac{P_1}{P_2}\\right) = 1 \\times 8.314 \\times 300 \\times \\ln(4) = 2494.2 \\times 1.3863 \\approx 3457.7\\text{ J}$$
    <strong>(ii) Change in Internal Energy:</strong>
    Since the process is isothermal and the gas is ideal, temperature is constant ($\Delta T = 0$):
    $$\\Delta U = 0$$
    <strong>(iii) Heat Absorbed:</strong>
    By the First Law of Thermodynamics ($\Delta Q = \\Delta U + W$):
    $$\\Delta Q = 0 + 3457.7\\text{ J} = +3457.7\\text{ J}$$
    All 3457.7 J of heat absorbed from the thermal reservoir is completely converted into mechanical expansion work.
  </div>
</div>

<!-- Q44 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q44: Calculation of Temperature Change in Adiabatic Compression</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Air at initial temperature $27^{\\circ}\\text{C}$ and normal atmospheric pressure is suddenly compressed adiabatically to one-eighth ($1/8$) of its original volume. Calculate the resulting final temperature of the air. Take $\\gamma = 1.40$ for air ($2^{0.4} \\approx 1.3195$, $8^{0.4} = (2^3)^{0.4} = 2^{1.2} \\approx 2.297$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $T_1 = 27 + 273 = 300\\text{ K}$, $V_2 = \\frac{1}{8} V_1$, $\\gamma = 1.40$.<br/>
    For a reversible adiabatic process, by Poisson's temperature-volume relation:
    $$T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1} \\implies T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}$$
    Substitute the given values:
    $$T_2 = 300 \\times \\left(\\frac{V_1}{\\frac{1}{8}V_1}\\right)^{1.40 - 1} = 300 \\times (8)^{0.40}$$
    Since $8^{0.40} = (2^3)^{0.40} = 2^{1.20} \\approx 2.2974$:
    $$T_2 = 300 \\times 2.2974 \\approx 689.2\\text{ K}$$
    Converting to Celsius:
    $$t_2 = 689.2 - 273.15 \\approx 416^{\\circ}\\text{C}$$
    The air temperature rises dramatically to <strong>$416^{\\circ}\\text{C}$</strong>, which is the foundational operating mechanism for auto-ignition in diesel engine cylinders.
  </div>
</div>

<!-- Q45 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q45: Calculation of Work Done in Adiabatic Expansion of Gas</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Two moles of an ideal gas ($\gamma = 1.5$) initially at a temperature of $300\\text{ K}$ expand adiabatically until its temperature drops to $240\\text{ K}$. Calculate the work done by the gas during this expansion. ($R = 8.314\\text{ J/mol}\\cdot\\text{K}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $n = 2\\text{ mol}$, $\\gamma = 1.5$, $T_1 = 300\\text{ K}$, $T_2 = 240\\text{ K}$, $R = 8.314\\text{ J/mol}\\cdot\\text{K}$.<br/>
    The formula for work done in an adiabatic process is:
    $$W = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$$
    Substituting the given values:
    $$W = \\frac{2 \\times 8.314 \\times (300 - 240)}{1.5 - 1} = \\frac{2 \\times 8.314 \\times 60}{0.5} = \\frac{997.68}{0.5} = 1995.36\\text{ J}$$
    The work done by the expanding gas is <strong>$1995.36\\text{ J}$</strong> (performed entirely at the expense of its internal energy, $\\Delta U = -1995.36\\text{ J}$).
  </div>
</div>

<!-- Q46 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q46: Adiabatic Relation Between Pressure and Temperature</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive the Poisson relation connecting pressure ($P$) and absolute temperature ($T$) in an adiabatic process. If the pressure of an ideal gas ($\gamma = 1.5$) is increased by a factor of 8 adiabatically, by what factor does its absolute temperature increase?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Derivation:</b><br/>
    From the ideal gas equation $P V = n R T \\implies V = \\frac{n R T}{P}$.<br/>
    Substituting $V$ into the adiabatic relation $P V^\\gamma = \\text{constant}$:
    $$P \\left(\\frac{n R T}{P}\\right)^\\gamma = \\text{constant} \\implies P \\cdot P^{-\\gamma} \\cdot T^\\gamma = \\text{constant}$$
    $$P^{1 - \\gamma} T^\\gamma = \\text{constant} \\quad \\text{or} \\quad \\frac{T^\\gamma}{P^{\\gamma - 1}} = \\text{constant}$$
    <b style="color: ${themeColor};">Calculation:</b><br/>
    Given $P_2 / P_1 = 8$ and $\\gamma = 1.5$ (so $\\gamma - 1 = 0.5$):
    $$T_2 = T_1 \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma - 1}{\\gamma}} = T_1 (8)^{\\frac{0.5}{1.5}} = T_1 (8)^{1/3} = T_1 \\times 2$$
    Hence, the absolute temperature increases by a factor of <strong>2 (doubles)</strong>.
  </div>
</div>

<!-- Q47 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q47: Four Key Differences Between Isothermal and Adiabatic Processes</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Construct a clear comparative table presenting four fundamental distinctions between an isothermal process and an adiabatic process.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="background: rgba(38, 198, 218, 0.15); border-bottom: 1.5px solid ${themeColor};">
            <th style="padding: 6px 8px; text-align: left; color: ${themeColor};">Feature</th>
            <th style="padding: 6px 8px; text-align: left; color: ${themeColor};">Isothermal Process</th>
            <th style="padding: 6px 8px; text-align: left; color: ${themeColor};">Adiabatic Process</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 6px 8px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">1. Constant Quantity</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Temperature remains constant ($T = \\text{const}$, $\\Delta T = 0$).</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Heat content remains constant ($dQ = 0$).</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 6px 8px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">2. Boundary Walls</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Perfectly conducting (diathermic) walls.</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Perfectly insulating (adiabatic) walls.</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">3. Speed of Process</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Must proceed extremely slowly (quasi-static).</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Occurs very suddenly / rapidly.</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 6px 8px; font-weight: bold;">4. Governing Law & Slope</td>
            <td style="padding: 6px 8px;">$PV = \\text{const}$, Slope $= -P/V$.</td>
            <td style="padding: 6px 8px;">$PV^\\gamma = \\text{const}$, Slope $= -\\gamma P/V$ ($\gamma$ times steeper).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- Q48 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q48: Why Must Isothermal Changes be Slow While Adiabatic Changes Rapid?</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain the physical necessity of slow execution for isothermal processes and rapid execution for adiabatic processes.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <strong>Isothermal Process:</strong> When a gas is compressed, work is converted into thermal energy. If the compression occurs rapidly, this heat remains trapped inside the gas, causing its temperature to rise. To maintain a strictly constant temperature, the process must proceed infinitesimally slowly so that excess heat has sufficient time to conduct through the diathermic cylinder walls into the external reservoir.<br/>
    2. <strong>Adiabatic Process:</strong> Heat conduction requires a finite duration of time. If a process occurs very slowly, heat will inevitably leak across the container walls due to temperature differences with the surroundings. To ensure that zero heat exchange occurs ($dQ = 0$), the transformation must take place almost instantaneously (e.g., sound wave propagation, tyre explosion), leaving no time for thermal conduction.
  </div>
</div>

<!-- Q49 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q49: Mathematical Proof that Adiabatic Curve is $\gamma$ Times Steeper</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Prove mathematically that on a $P-V$ indicator diagram, the slope of an adiabatic curve passing through any point is strictly $\gamma$ times the slope of an isothermal curve passing through the identical state point.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Slope of Isothermal Curve:</b><br/>
    For an isothermal process of an ideal gas:
    $$P V = C \\quad (\\text{constant})$$
    Differentiating both sides with respect to $V$:
    $$P \\frac{dV}{dV} + V \\frac{dP}{dV} = 0 \\implies P + V \\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = 0$$
    $$\\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -\\frac{P}{V} \\quad \\text{--- (Equation 1)}$$
    <b style="color: ${themeColor};">2. Slope of Adiabatic Curve:</b><br/>
    For an adiabatic process of an ideal gas:
    $$P V^\\gamma = K \\quad (\\text{constant})$$
    Differentiating both sides with respect to $V$:
    $$P \\left(\\gamma V^{\\gamma - 1}\\right) + V^\\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = 0$$
    Dividing throughout by $V^{\\gamma - 1}$:
    $$\\gamma P + V \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = -\\gamma \\frac{P}{V} \\quad \\text{--- (Equation 2)}$$
    <b style="color: ${themeColor};">3. Ratio of Slopes:</b><br/>
    Dividing Equation 2 by Equation 1:
    $$\\frac{\\left(\\frac{dP}{dV}\\right)_{\\text{adia}}}{\\left(\\frac{dP}{dV}\\right)_{\\text{iso}}} = \\frac{-\\gamma \\frac{P}{V}}{-\\frac{P}{V}} = \\gamma$$
    $$\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = \\gamma \\times \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}$$
    Since $\\gamma > 1$ for all gases, the adiabatic curve is always steeper than the isothermal curve.
  </div>
</div>

<!-- Q50 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q50: Proof that Isothermal Elasticity of a Gas Equals Pressure ($E_\theta = P$)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define bulk modulus of volume elasticity. Prove that the isothermal elasticity ($E_\\theta$) of an ideal gas is numerically equal to its hydrostatic pressure ($P$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Definition:</b> Bulk modulus of elasticity is defined as the ratio of volumetric stress to volumetric strain:
    $$E = -\\frac{\\Delta P}{\\Delta V / V} = -V \\frac{dP}{dV}$$
    For an isothermal change, the temperature remains constant ($T = \\text{constant}$). The gas obeys Boyle's law:
    $$P V = C$$
    Differentiating both sides:
    $$P \\, dV + V \\, dP = 0 \\implies V \\, dP = -P \\, dV$$
    Dividing by $dV$:
    $$\\frac{dP}{dV} = -\\frac{P}{V} \\implies -V \\left(\\frac{dP}{dV}\\right) = P$$
    By definition of isothermal elasticity $E_\\theta$:
    $$E_\\theta = -V \\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = P$$
    Hence, the isothermal elasticity of an ideal gas is <strong>strictly equal to its pressure $P$</strong>.
  </div>
</div>

<!-- Q51 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q51: Proof that Adiabatic Elasticity of a Gas Equals $\gamma P$ ($E_\phi = \gamma P$)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Prove that the adiabatic elasticity ($E_\\phi$) of an ideal gas is equal to $\\gamma$ times its pressure ($E_\\phi = \\gamma P$). Hence deduce the ratio of adiabatic to isothermal elasticity.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    For an adiabatic process, the gas satisfies Poisson's equation:
    $$P V^\\gamma = K \\quad (\\text{constant})$$
    Differentiating both sides with respect to volume $V$:
    $$\\frac{d}{dV}(P V^\\gamma) = 0 \\implies P \\left(\\gamma V^{\\gamma - 1}\\right) + V^\\gamma \\left(\\frac{dP}{dV}\\right) = 0$$
    Dividing by $V^{\\gamma - 1}$:
    $$\\gamma P + V \\left(\\frac{dP}{dV}\\right) = 0 \\implies -V \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = \\gamma P$$
    By definition of adiabatic elasticity $E_\\phi$:
    $$E_\\phi = -V \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = \\gamma P$$
    <b style="color: ${themeColor};">Ratio of Elasticities:</b>
    $$\\frac{E_\\phi}{E_\\theta} = \\frac{\\gamma P}{P} = \\gamma = \\frac{C_p}{C_v}$$
    This ratio explains Laplace's correction to Newton's formula for the speed of sound in gases ($v = \\sqrt{E_\\phi / \\rho} = \\sqrt{\\gamma P / \\rho}$).
  </div>
</div>

<!-- Q52 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q52: Work Done in a Triangular P-V Cyclic Process</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> An ideal gas undergoes a cyclic process represented on a $P-V$ diagram as a right triangle ABC traced clockwise. State A is at $(V_1 = 1.0\\text{ m}^3, P_1 = 1.0 \\times 10^5\\text{ Pa})$, state B is at $(V_2 = 4.0\\text{ m}^3, P_1 = 1.0 \\times 10^5\\text{ Pa})$, and state C is at $(V_1 = 1.0\\text{ m}^3, P_2 = 4.0 \\times 10^5\\text{ Pa})$. Calculate the net work done by the gas in one complete cycle.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    In any cyclic process, the net work done equals the geometric area enclosed by the cycle on the $P-V$ indicator diagram.<br/>
    For the right triangle ABC:<br/>
    Base length (along volume axis):
    $$\\Delta V = V_2 - V_1 = 4.0 - 1.0 = 3.0\\text{ m}^3$$
    Height (along pressure axis):
    $$\\Delta P = P_2 - P_1 = (4.0 - 1.0) \\times 10^5 = 3.0 \\times 10^5\\text{ Pa}$$
    Area of the triangle:
    $$\\text{Area} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times 3.0 \\times (3.0 \\times 10^5) = 4.5 \\times 10^5\\text{ J}$$
    Since the cycle is traced in a <strong>clockwise direction</strong>, the expansion work at higher pressures exceeds the compression work at lower pressures. Hence, the net work is positive:
    $$W_{\\text{net}} = +4.5 \\times 10^5\\text{ J} = 450\\text{ kJ}$$
  </div>
</div>

<!-- Q53 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q53: Clockwise vs Counter-Clockwise Indicator Diagrams</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Why is the net work done positive in a clockwise thermodynamic cycle and negative in a counter-clockwise cycle on a $P-V$ diagram?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <strong>Clockwise Cycle (Heat Engine):</strong><br/>
    - In the upper path of the cycle, the gas expands ($V$ increases from $V_1$ to $V_2$) at higher pressures, so work done by the gas ($W_{\\text{exp}} > 0$) equals the large area under the upper curve.<br/>
    - In the lower path, the gas is compressed ($V$ decreases from $V_2$ to $V_1$) at lower pressures, so work done on the gas ($W_{\\text{comp}} < 0$) equals the smaller area under the lower curve.<br/>
    - Net work $W_{\\text{net}} = W_{\\text{exp}} - |W_{\\text{comp}}| > 0$ (positive net work output; device functions as a heat engine).<br/><br/>
    2. <strong>Counter-Clockwise Cycle (Refrigerator / Heat Pump):</strong><br/>
    - Here, compression occurs along the upper path at higher pressures, requiring large work input ($|W_{\\text{comp}}|$ is large).<br/>
    - Expansion occurs along the lower path at lower pressures ($W_{\\text{exp}}$ is small).<br/>
    - Net work $W_{\\text{net}} < 0$ (negative net work; external mechanical work must be continuously supplied to operate the refrigerator).
  </div>
</div>

<!-- Q54 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q54: Why Heat Engines Cannot Achieve 100% Efficiency</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Based on the Kelvin-Planck statement of the Second Law of Thermodynamics, explain why a heat engine operating between two thermal reservoirs cannot have a thermal efficiency of 100%.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Thermal efficiency of a heat engine is defined as:
    $$\\eta = \\frac{W}{Q_1} = \\frac{Q_1 - Q_2}{Q_1} = 1 - \\frac{Q_2}{Q_1}$$
    2. For efficiency $\\eta = 100\\%$ ($1.0$), the heat rejected to the sink must be strictly zero ($Q_2 = 0$). This would mean all heat absorbed from the hot source is converted 100% into useful mechanical work ($W = Q_1$).<br/>
    3. However, the <strong>Kelvin-Planck statement</strong> explicitly forbids this: no cyclic engine can extract heat from a single thermal reservoir and convert all of it into mechanical work without rejecting a portion of heat to a lower-temperature sink.<br/>
    4. For a cyclic process to continue indefinitely, the working substance must be returned to its initial low-temperature thermodynamic state, which requires rejecting heat to a cold sink ($Q_2 > 0$). Therefore, $\\eta < 100\\%$ always.
  </div>
</div>

<!-- Q55 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q55: Four Stages of the Carnot Cycle Described in Detail</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Enumerate and describe the four successive reversible thermodynamic operations that constitute a complete Carnot cycle.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    The Carnot cycle consists of four reversible operations executed on an ideal working gas inside a cylinder with conducting base and insulating walls:<br/>
    1. <b style="color: ${themeColor};">Reversible Isothermal Expansion (1 &rarr; 2):</b> Cylinder base is placed on a hot source at temperature $T_1$. Gas expands quasi-statically from $(P_1, V_1)$ to $(P_2, V_2)$ absorbing heat $Q_1 = n R T_1 \\ln(V_2 / V_1)$.<br/>
    2. <b style="color: ${themeColor};">Reversible Adiabatic Expansion (2 &rarr; 3):</b> Cylinder base is placed on a perfectly insulating stand. Gas expands adiabatically from $(P_2, V_2)$ to $(P_3, V_3)$, doing work at the expense of its internal energy until temperature drops to $T_2$.<br/>
    3. <b style="color: ${themeColor};">Reversible Isothermal Compression (3 &rarr; 4):</b> Cylinder is placed on a cold sink at temperature $T_2$. Gas is compressed isothermally from $(P_3, V_3)$ to $(P_4, V_4)$, rejecting heat $Q_2 = n R T_2 \\ln(V_3 / V_4)$ to the sink.<br/>
    4. <b style="color: ${themeColor};">Reversible Adiabatic Compression (4 &rarr; 1):</b> Cylinder is returned to the insulating stand and compressed adiabatically from $(P_4, V_4)$ back to the initial state $(P_1, V_1, T_1)$, restoring the gas for the next cycle.
  </div>
</div>

<!-- Q56 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q56: Calculation of Carnot Engine Efficiency and Heat Rejected</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A Carnot heat engine operates between a source at $500^{\\circ}\\text{C}$ and a sink at $100^{\\circ}\\text{C}$. If it absorbs $2.0 \\times 10^4\\text{ J}$ of heat from the source per cycle, calculate: (i) the Carnot thermal efficiency, (ii) the mechanical work output per cycle, and (iii) the heat rejected to the sink.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: Source temperature $T_1 = 500 + 273.15 = 773.15\\text{ K}$.<br/>
    Sink temperature $T_2 = 100 + 273.15 = 373.15\\text{ K}$.<br/>
    Heat absorbed $Q_1 = 2.0 \\times 10^4\\text{ J}$.<br/>
    <strong>(i) Thermal Efficiency:</strong>
    $$\\eta = 1 - \\frac{T_2}{T_1} = 1 - \\frac{373.15}{773.15} = 1 - 0.4826 = 0.5174 = 51.74\\%$$
    <strong>(ii) Work Output:</strong>
    $$W = \\eta \\cdot Q_1 = 0.5174 \\times (2.0 \\times 10^4) = 10,348\\text{ J} = 10.35\\text{ kJ}$$
    <strong>(iii) Heat Rejected to Sink:</strong>
    $$Q_2 = Q_1 - W = 20,000 - 10,348 = 9652\\text{ J} = 9.65\\text{ kJ}$$
  </div>
</div>

<!-- Q57 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q57: Can a Carnot Engine Operate at 100% Efficiency?</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What are the two theoretical conditions under which the efficiency of a Carnot engine could become 100%? Explain why neither condition is physically achievable.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    The efficiency of a Carnot engine is $\\eta = 1 - \\frac{T_2}{T_1}$. For $\\eta = 1$ ($100\\%$):<br/>
    1. <b style="color: ${themeColor};">Condition 1: Sink at Absolute Zero ($T_2 = 0\\text{ K}$):</b><br/>
    If the sink were at $0\\text{ K}$, $\\eta = 1 - 0 = 100\\%$. However, by the <strong>Third Law of Thermodynamics</strong> (Nernst Heat Theorem), absolute zero ($0\\text{ K}$) cannot be attained by any finite number of physical processes. Hence, this condition is physically unreachable.<br/>
    2. <b style="color: ${themeColor};">Condition 2: Source at Infinite Temperature ($T_1 = \\infty$):</b><br/>
    If the source temperature were infinite, $T_2 / \\infty = 0$, yielding $\\eta = 100\\%$. This is physically impossible because infinite temperature cannot exist in any finite material apparatus.<br/>
    Therefore, 100% efficiency is fundamentally forbidden in the physical universe.
  </div>
</div>

<!-- Q58 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q58: Working Principle and Coefficient of Performance (COP) of a Refrigerator</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain the working principle of a domestic refrigerator. Define its Coefficient of Performance ($\\beta$ or $\\text{COP}$) and derive its relationship with the thermal efficiency ($\\eta$) of a heat engine.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Working Principle:</b> A refrigerator is essentially a heat engine running in reverse. A working volatile refrigerant (such as Freon or HFC) extracts heat $Q_2$ from the cold interior storage compartment (cold reservoir at $T_2$). External electrical work $W$ is performed on the refrigerant by a compressor motor, and the total heat $Q_1 = Q_2 + W$ is discharged to the warm surrounding room air (hot reservoir at $T_1$).<br/><br/>
    <b style="color: ${themeColor};">Coefficient of Performance (COP, $\\beta$):</b><br/>
    $$\\beta = \\frac{\\text{Heat Extracted from Cold Chamber}}{\\text{Work Done by Compressor}} = \\frac{Q_2}{W} = \\frac{Q_2}{Q_1 - Q_2}$$
    For an ideal Carnot refrigerator operating between $T_1$ and $T_2$:
    $$\\beta_C = \\frac{T_2}{T_1 - T_2}$$
    <b style="color: ${themeColor};">Relation to Thermal Efficiency $\\eta$:</b><br/>
    Since $\\eta = \\frac{W}{Q_1} = \\frac{Q_1 - Q_2}{Q_1} = 1 - \\frac{Q_2}{Q_1}$, we have $\\frac{Q_2}{Q_1} = 1 - \\eta$.
    $$\\beta = \\frac{Q_2}{Q_1 - Q_2} = \\frac{Q_2 / Q_1}{1 - Q_2 / Q_1} = \\frac{1 - \\eta}{\\eta}$$
  </div>
</div>

<!-- Q59 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q59: Calculation of Coefficient of Performance of a Refrigerator</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A refrigerator maintains its food compartment at $-10^{\\circ}\\text{C}$ in a room whose temperature is $30^{\\circ}\\text{C}$. Assuming an ideal Carnot cycle: (i) calculate its Coefficient of Performance, and (ii) determine the electrical work needed to freeze 1.0 kg of water at $0^{\\circ}\\text{C}$ into ice at $0^{\\circ}\\text{C}$. ($L_f = 3.36 \\times 10^5\\text{ J/kg}$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Cold reservoir: $T_2 = -10 + 273 = 263\\text{ K}$.<br/>
    Hot reservoir: $T_1 = 30 + 273 = 303\\text{ K}$.<br/>
    <strong>(i) Coefficient of Performance:</strong>
    $$\\beta = \\frac{T_2}{T_1 - T_2} = \\frac{263}{303 - 263} = \\frac{263}{40} = 6.575$$
    <strong>(ii) Work Required to Freeze Water:</strong><br/>
    Heat to remove from water:
    $$Q_2 = m L_f = 1.0 \\times (3.36 \\times 10^5) = 3.36 \\times 10^5\\text{ J}$$
    Work required by the compressor:
    $$W = \\frac{Q_2}{\\beta} = \\frac{3.36 \\times 10^5}{6.575} \\approx 51,100\\text{ J} = 51.1\\text{ kJ}$$
  </div>
</div>

<!-- Q60 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q60: What Happens if a Refrigerator Door is Left Open in a Closed Room?</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A person decides to cool a closed room on a hot summer day by leaving the door of an operational electric refrigerator wide open. Will the room cool down, heat up, or stay at the same temperature? Explain the thermodynamics.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    The room will <strong>heat up (become warmer)</strong>, not cooler.<br/>
    <b style="color: ${themeColor};">Reason:</b><br/>
    1. A refrigerator extracts heat $Q_2$ from inside its cabinet and discharges heat $Q_1$ from its condenser coils at the rear into the surrounding room.<br/>
    2. By the First Law of Thermodynamics:
    $$Q_1 = Q_2 + W$$
    where $W$ is the electrical work consumed by the electric motor driving the compressor.<br/>
    3. When the refrigerator door is open, the interior cabinet and the room form a single thermodynamic system. The heat extracted $Q_2$ is taken from the room air itself.<br/>
    4. The heat rejected back into the room is $Q_1 = Q_2 + W$, which is strictly greater than the extracted heat $Q_2$ by the electrical energy $W$.<br/>
    5. The electrical energy consumed is dissipated entirely into the room as additional thermal energy. Therefore, leaving the door open turns the refrigerator into an inefficient room heater.
  </div>
</div>

<!-- Q61 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q61: Show that Violation of Clausius Statement Violates Kelvin-Planck</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Demonstrate logically that if the Clausius statement of the Second Law were false, the Kelvin-Planck statement would also be violated.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Assume the <strong>Clausius statement is false</strong>. Then it is possible to construct a refrigerator $R$ that transfers a quantity of heat $Q_2$ from a cold sink at $T_2$ to a hot source at $T_1$ with zero external work input ($W = 0$).<br/>
    2. Now couple this hypothetical refrigerator with a standard heat engine $E$ operating between the same two reservoirs. Let the engine extract heat $Q_1$ from the source at $T_1$, produce work $W = Q_1 - Q_2$, and reject heat $Q_2$ to the sink at $T_2$.<br/>
    3. Look at the combined system $(R + E)$:<br/>
    &bull; At the cold sink ($T_2$): The heat rejected by the engine ($Q_2$) is fully extracted by the refrigerator ($Q_2$), resulting in <strong>zero net heat exchange</strong> with the sink.<br/>
    &bull; At the hot source ($T_1$): Net heat extracted is $Q_{\\text{net}} = Q_1 - Q_2$.<br/>
    &bull; Total work produced: $W = Q_1 - Q_2 = Q_{\\text{net}}$.<br/>
    4. Thus, the combined system acts as a single cyclic heat engine whose sole result is to extract heat $Q_1 - Q_2$ from a single reservoir at $T_1$ and convert 100% of it into work $W$ with zero rejection.<br/>
    5. This directly violates the <strong>Kelvin-Planck statement</strong>. Hence, the two statements are logically equivalent.
  </div>
</div>

<!-- Q62 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q62: Show that Violation of Kelvin-Planck Statement Violates Clausius</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Demonstrate logically that if the Kelvin-Planck statement were false, the Clausius statement would also be violated.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Assume the <strong>Kelvin-Planck statement is false</strong>. Then it is possible to construct a heat engine $E$ that extracts heat $Q_1$ from a single source at $T_1$ and converts 100% of it into work $W = Q_1$ with zero heat rejected to any sink ($Q_2 = 0$).<br/>
    2. Now use this work output $W$ to drive a normal refrigerator $R$ operating between a cold reservoir at $T_2$ and the hot reservoir at $T_1$. Let the refrigerator extract heat $Q_2$ from the cold reservoir.<br/>
    3. The refrigerator discharges total heat $Q_1' = Q_2 + W = Q_2 + Q_1$ to the hot source at $T_1$.<br/>
    4. Consider the combined engine-refrigerator unit $(E + R)$:<br/>
    &bull; Work required: The work output from $E$ powers $R$, so net external work is zero ($W_{\\text{ext}} = 0$).<br/>
    &bull; Cold reservoir ($T_2$): Net heat extracted is $Q_2$.<br/>
    &bull; Hot reservoir ($T_1$): Heat delivered is $Q_1' - Q_1 = (Q_2 + Q_1) - Q_1 = Q_2$.<br/>
    5. The net effect of the combined device is the spontaneous transfer of heat $Q_2$ from a colder body ($T_2$) to a hotter body ($T_1$) with zero net external work input.<br/>
    6. This directly violates the <strong>Clausius statement</strong>.
  </div>
</div>

<!-- Q63 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q63: What is a Reversible Process? State Two Conditions for Reversibility</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define a reversible process in thermodynamics. State the two essential conditions required for a process to be strictly reversible.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Definition:</b> A thermodynamic process is <b>reversible</b> if it can be retraced backward in such a manner that both the system and its surroundings return precisely to their original initial states, leaving no net change or footprint anywhere in the universe.<br/><br/>
    <b style="color: ${themeColor};">Two Essential Conditions:</b><br/>
    1. <strong>Strictly Quasi-Static:</strong> The process must proceed at an infinitesimally slow rate so that at every intermediate stage, the system passes through a succession of equilibrium states with negligible departures from mechanical and thermal balance ($P_{\\text{int}} \\approx P_{\\text{ext}}$, $T_{\\text{sys}} \\approx T_{\\text{surr}}$).<br/>
    2. <strong>Complete Absence of Dissipative Forces:</strong> There must be no dissipative effects such as friction, viscosity, electrical resistance, turbulence, inelastic collisions, or chemical reactions that convert mechanical or organized energy into disorganized heat.
  </div>
</div>

<!-- Q64 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q64: Three Common Examples of Irreversible Processes Explained</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Give three real-world examples of irreversible processes and explain why each cannot be reversed naturally.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <b style="color: ${themeColor};">Heat Conduction Across a Finite Temperature Difference:</b> Heat spontaneously flows from a hot coffee cup to cooler room air. To re-concentrate the dispersed thermal energy from the millions of air molecules back into the coffee cup without external work violates the Second Law ($\Delta S_{\\text{universe}} > 0$).<br/>
    2. <b style="color: ${themeColor};">Mechanical Motion Overcoming Friction:</b> When a sliding wooden block stops on a rough floor, kinetic energy is converted into random vibrational thermal energy of floor atoms. The random thermal jiggling of atoms cannot spontaneously coordinate in one direction to propel the block forward again.<br/>
    3. <b style="color: ${themeColor};">Diffusion of Two Gases:</b> When partitions separating two different gases are removed, they spontaneously intermingle to maximize molecular randomness (entropy). Unmixing them requires external work and cannot occur spontaneously.
  </div>
</div>

<!-- Q65 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q65: Why Free Expansion of a Gas into Vacuum is Strictly Irreversible</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> A gas expands freely into an evacuated chamber inside an insulated vessel. Even though $Q = 0$, $W = 0$, and $\\Delta U = 0$, explain why free expansion is a classic irreversible process.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. In free expansion, the gas rushes rapidly and turbulently into a vacuum. The process is completely <strong>non-quasi-static</strong>; the system is far from mechanical and thermodynamic equilibrium during expansion.<br/>
    2. State variables like pressure and temperature are undefined during the chaotic expansion.<br/>
    3. Although the initial and final temperatures are identical ($T_1 = T_2$ for an ideal gas since $\Delta U = 0$), the volume increases ($V_2 > V_1$).<br/>
    4. To compress the gas back to its initial volume $V_1$, external mechanical work must be performed on the gas ($W_{\\text{comp}} = n R T \\ln(V_2 / V_1)$), which would generate heat that must be rejected to surroundings, leaving permanent changes in the surroundings.<br/>
    5. The entropy of the isolated gas increases by $\\Delta S = n R \\ln(V_2 / V_1) > 0$. Hence, free expansion is completely irreversible.
  </div>
</div>

<!-- Q66 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q66: Perpetual Motion Machines of the First and Second Kind (PMM1 and PMM2)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define and distinguish between a Perpetual Motion Machine of the First Kind (PMM1) and a Perpetual Motion Machine of the Second Kind (PMM2). Which thermodynamic law rules out each machine?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Perpetual Motion Machine of the First Kind (PMM1):</b><br/>
    - A hypothetical machine that produces mechanical continuous work output without consuming any input energy or fuel whatsoever (creating energy from nothing).<br/>
    - It is ruled out by the <strong>First Law of Thermodynamics</strong> (Law of Conservation of Energy, $\Delta Q = \\Delta U + W$; with $\Delta Q = 0$ and $\Delta U = 0$, $W$ must be zero).<br/><br/>
    <b style="color: ${themeColor};">2. Perpetual Motion Machine of the Second Kind (PMM2):</b><br/>
    - A hypothetical machine that extracts heat continuously from a single thermal reservoir (such as the vast thermal energy of ocean water or atmospheric air) and converts it 100% into useful mechanical work without rejecting any heat to a colder sink.<br/>
    - PMM2 does <i>not</i> violate the First Law (energy is conserved). However, it is strictly forbidden by the <strong>Second Law of Thermodynamics</strong> (Kelvin-Planck statement).
  </div>
</div>

<!-- Q67 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q67: Physical Definition and SI Unit of Entropy</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define the thermodynamic property known as entropy ($S$). State its SI unit and mathematical formula for an infinitesimal reversible process.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Definition:</b> <b>Entropy</b> ($S$) is a macroscopic thermodynamic state property that quantitatively measures the degree of microscopic molecular disorder, randomness, or thermal energy unavailability within a system.<br/>
    <b style="color: ${themeColor};">Mathematical Formulation:</b> For an infinitesimal reversible addition of heat $dQ_{\\text{rev}}$ to a system at absolute thermodynamic temperature $T$:
    $$dS = \\frac{dQ_{\\text{rev}}}{T}$$
    For a finite reversible process between states 1 and 2:
    $$\\Delta S = S_2 - S_1 = \\int_1^2 \\frac{dQ_{\\text{rev}}}{T}$$
    <b style="color: ${themeColor};">SI Unit:</b> The SI unit of entropy is <strong>Joule per Kelvin ($\\text{J/K}$ or $\\text{J}\\cdot\\text{K}^{-1}$)</strong>.<br/>
    Dimensional formula: $[\\text{M}^1 \\text{L}^2 \\text{T}^{-2} \\text{K}^{-1}]$.
  </div>
</div>

<!-- Q68 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q68: Calculation of Entropy Change During Melting of Ice</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Calculate the change in entropy when 50 g of ice at $0^{\\circ}\\text{C}$ is completely melted into water at $0^{\\circ}\\text{C}$. Latent heat of fusion of ice is $3.36 \\times 10^5\\text{ J/kg}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: Mass of ice $m = 50\\text{ g} = 0.050\\text{ kg}$.<br/>
    Latent heat of fusion $L_f = 3.36 \\times 10^5\\text{ J/kg}$.<br/>
    Temperature $T = 0 + 273.15 = 273.15\\text{ K}$ (melting is an isothermal process).<br/>
    Heat absorbed during melting:
    $$Q = m L_f = 0.050 \\times (3.36 \\times 10^5) = 16,800\\text{ J}$$
    Change in entropy of ice:
    $$\\Delta S = \\frac{Q}{T} = \\frac{16,800\\text{ J}}{273.15\\text{ K}} \\approx +61.5\\text{ J/K}$$
    The entropy increases by <strong>$+61.5\\text{ J/K}$</strong>, reflecting the transition from an ordered solid crystal lattice to disordered liquid water.
  </div>
</div>

<!-- Q69 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q69: Calculation of Entropy Change During Vaporization of Water</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Determine the change in entropy when 100 g of boiling water at $100^{\\circ}\\text{C}$ is converted into steam at $100^{\\circ}\\text{C}$. Latent heat of vaporization of water is $2.26 \\times 10^6\\text{ J/kg}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $m = 100\\text{ g} = 0.10\\text{ kg}$, $L_v = 2.26 \\times 10^6\\text{ J/kg}$.<br/>
    Temperature $T = 100 + 273.15 = 373.15\\text{ K}$.<br/>
    Heat absorbed during vaporization:
    $$Q = m L_v = 0.10 \\times (2.26 \\times 10^6) = 2.26 \\times 10^5\\text{ J}$$
    Change in entropy:
    $$\\Delta S = \\frac{Q}{T} = \\frac{2.26 \\times 10^5\\text{ J}}{373.15\\text{ K}} \\approx +605.65\\text{ J/K}$$
    The massive increase in entropy ($+605.65\\text{ J/K}$) reflects the enormous increase in molecular randomness when liquid water transforms into free gas.
  </div>
</div>

<!-- Q70 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q70: Why Carnot Engine Efficiency is Independent of Working Substance</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Carnot's Theorem. Explain why the thermal efficiency of a Carnot engine depends exclusively on the temperatures of the source and sink and not on the chemical or physical nature of the working substance.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Carnot's Theorem:</b> All reversible engines operating between the same two thermal reservoirs at constant temperatures $T_1$ and $T_2$ have identical thermal efficiency, irrespective of the working substance.<br/>
    <b style="color: ${themeColor};">Reason:</b><br/>
    1. If an engine $A$ using substance $X$ had higher efficiency than an engine $B$ using substance $Y$ ($\eta_A > \eta_B$), engine $A$ could be coupled to drive engine $B$ in reverse as a refrigerator.<br/>
    2. The coupled combination would transfer net heat from the colder reservoir to the hotter reservoir with zero external work input, directly violating the <strong>Clausius statement</strong> of the Second Law.<br/>
    3. Therefore, no reversible engine can have a higher efficiency than any other between the same reservoirs.<br/>
    4. Consequently, efficiency $\\eta_C = 1 - \\frac{T_2}{T_1}$ is a universal thermodynamic function depending exclusively on source and sink temperatures.
  </div>
</div>

<!-- Q71 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q71: Comparison of Work Done in Isothermal vs Adiabatic Expansion</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> An ideal gas at a given initial state $(P_1, V_1)$ expands to a final volume $V_2$ along two different paths: (a) isothermally, and (b) adiabatically. Compare the final pressures and the total work done in both processes with conceptual justification.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <b style="color: ${themeColor};">Final Pressure:</b><br/>
    - Isothermal: $P_{\\text{iso}} = P_1 \\left(\\frac{V_1}{V_2}\\right)$<br/>
    - Adiabatic: $P_{\\text{adia}} = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma$<br/>
    Since $V_2 > V_1$ (expansion) and $\\gamma > 1$, $\\left(\\frac{V_1}{V_2}\\right)^\\gamma < \\frac{V_1}{V_2}$. Therefore:
    $$P_{\\text{adia}} < P_{\\text{iso}}$$
    The final pressure is significantly lower in adiabatic expansion because cooling accompanies expansion.<br/><br/>
    2. <b style="color: ${themeColor};">Work Done:</b><br/>
    - On a $P-V$ diagram, the isothermal curve lies entirely <strong>above</strong> the steeper adiabatic curve throughout the expansion from $V_1$ to $V_2$.<br/>
    - Since work done equals the area under the $P-V$ curve:
    $$W_{\\text{iso}} > W_{\\text{adia}}$$
    More work is performed during isothermal expansion because heat supplied by the reservoir sustains higher gas pressures.
  </div>
</div>

<!-- Q72 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q72: Comparison of Work Done in Isothermal vs Adiabatic Compression</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> An ideal gas at an initial state $(P_1, V_1)$ is compressed to a final volume $V_2$ ($V_2 < V_1$) along: (a) an isothermal path, and (b) an adiabatic path. In which process is more work required? Explain.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. In compression, $V_2 < V_1$, so $\\frac{V_1}{V_2} > 1$.<br/>
    Since $\\gamma > 1$, $\\left(\\frac{V_1}{V_2}\\right)^\\gamma > \\frac{V_1}{V_2}$. Therefore:
    $$P_{\\text{adia}} = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma > P_{\\text{iso}} = P_1 \\left(\\frac{V_1}{V_2}\\right)$$
    2. The adiabatic curve rises much more steeply and lies entirely <strong>above</strong> the isothermal curve during compression from $V_1$ to $V_2$.<br/>
    3. The area under the adiabatic compression curve is substantially greater than the area under the isothermal compression curve.<br/>
    4. Therefore, the magnitude of work done on the gas is greater in adiabatic compression:
    $$|W_{\\text{adia}}| > |W_{\\text{iso}}|$$
    More work must be performed because compression work raises the temperature of the gas, producing a higher resisting back-pressure.
  </div>
</div>

<!-- Q73 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q73: Diesel Engine Compression Ignition Explained by Thermodynamics</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Why does a diesel engine operate without an electric spark plug, whereas a petrol engine requires one? Explain the thermodynamic mechanism involved.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. A diesel engine utilizes a very high <strong>compression ratio</strong> ($r = V_1 / V_2 \\approx 15:1\\text{ to }22:1$), compared to only $8:1\\text{ to }10:1$ in petrol engines.<br/>
    2. During the compression stroke, pure air is drawn into the cylinder and compressed extremely rapidly. Because the compression occurs so quickly with negligible heat transfer to cylinder walls, it is an <strong>adiabatic compression</strong>.<br/>
    3. By Poisson's temperature-volume relation:
    $$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = T_1 (r)^{\\gamma - 1}$$
    With $r = 18$ and $\\gamma = 1.4$, $T_2 \\approx 300 \\times (18)^{0.4} \\approx 300 \\times 3.18 = 954\\text{ K} \\approx 680^{\\circ}\\text{C}$.<br/>
    4. This temperature vastly exceeds the auto-ignition temperature of diesel fuel ($\approx 210^{\\circ}\\text{C}$). When diesel is finely atomized into the cylinder at top dead center, it ignites spontaneously without needing any spark plug (compression ignition).
  </div>
</div>

<!-- Q74 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q74: Mayer's Relation: Derivation from the First Law</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Starting from the First Law of Thermodynamics and the definition of molar heat capacities, prove Mayer's Relation: $C_p - C_v = R$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Consider 1 mole of an ideal gas. By the First Law of Thermodynamics:
    $$dQ = dU + P \\, dV$$
    2. For a process at constant volume ($dV = 0$):
    $$dQ_v = C_v \\, dT \\implies dU = C_v \\, dT$$
    By Joule's law, internal energy of an ideal gas depends solely on temperature, so $dU = C_v dT$ for any thermodynamic process.<br/>
    3. For a process at constant pressure:
    $$dQ_p = C_p \\, dT$$
    Substituting $dQ_p$ and $dU$ into the First Law:
    $$C_p \\, dT = C_v \\, dT + P \\, dV \\implies (C_p - C_v) dT = P \\, dV$$
    4. The ideal gas equation for 1 mole is $P V = R T$. Differentiating at constant pressure $P$:
    $$P \\, dV = R \\, dT$$
    5. Substituting $P \\, dV = R \\, dT$ into the expression:
    $$(C_p - C_v) dT = R \\, dT \\implies \\mathbf{C_p - C_v = R}$$
  </div>
</div>

<!-- Q75 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q75: Calculation of Work and Efficiency of a 3-Step Gas Cycle</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> One mole of a monoatomic ideal gas undergoes a cycle consisting of: (1) Isochoric heating from $(P_0, V_0)$ to $(2P_0, V_0)$, (2) Isobaric expansion from $(2P_0, V_0)$ to $(2P_0, 2V_0)$, and (3) Linear path on $P-V$ diagram returning to $(P_0, V_0)$. Find the net work done in terms of $P_0$ and $V_0$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Plotting the coordinates on the $P-V$ plane:<br/>
    State 1: $(V_0, P_0)$<br/>
    State 2: $(V_0, 2P_0)$<br/>
    State 3: $(2V_0, 2P_0)$<br/>
    The three paths form a right-angled triangle with vertices $(V_0, P_0)$, $(V_0, 2P_0)$, and $(2V_0, 2P_0)$.<br/>
    - Base of triangle: $\\Delta V = 2V_0 - V_0 = V_0$<br/>
    - Height of triangle: $\\Delta P = 2P_0 - P_0 = P_0$<br/>
    The net work done over one cycle is the geometric area enclosed by the triangle:
    $$W_{\\text{net}} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Height} = \\frac{1}{2} \\times V_0 \\times P_0 = \\frac{1}{2} P_0 V_0$$
    Since the vertices are traversed in a <strong>clockwise direction</strong> $(1 \\to 2 \\to 3 \\to 1)$, the net work done is <strong>$+\\frac{1}{2} P_0 V_0$</strong>.
  </div>
</div>

<!-- Q76 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q76: First Law Explanation of Latent Heat in Phase Transitions</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain how the First Law of Thermodynamics accounts for the latent heat absorbed during the boiling of liquid water into steam at $100^{\\circ}\\text{C}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. During boiling, heat supplied equals the latent heat of vaporization: $\\Delta Q = m L_v$. The temperature remains constant at $100^{\\circ}\\text{C}$, so molecular kinetic energy remains constant.<br/>
    2. However, $1\\text{ g}$ of liquid water at $100^{\\circ}\\text{C}$ occupies $V_1 = 1\\text{ cm}^3 = 10^{-6}\\text{ m}^3$, whereas $1\\text{ g}$ of steam at $100^{\\circ}\\text{C}$ and $1\\text{ atm}$ occupies $V_2 = 1671\\text{ cm}^3 = 1.671 \\times 10^{-3}\\text{ m}^3$.<br/>
    3. External work done by the expanding steam against atmospheric pressure ($P_0 = 1.013 \\times 10^5\\text{ Pa}$) is:
    $$W = P_0 (V_2 - V_1) = (1.013 \\times 10^5) \\times (1.671 \\times 10^{-3} - 10^{-6}) \\approx 169.2\\text{ J}$$
    4. By the First Law of Thermodynamics:
    $$\\Delta U = \\Delta Q - W = m L_v - W = 2260\\text{ J} - 169.2\\text{ J} \\approx 2090.8\\text{ J}$$
    5. Hence, out of 2260 J of latent heat absorbed, approximately 169 J is spent on external expansion work against atmospheric pressure, while the dominant 2091 J is stored as increased <strong>intermolecular potential energy</strong> (internal energy) to pull water molecules apart against hydrogen bonding.
  </div>
</div>

<!-- Q77 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q77: Thermodynamic Temperature Scale and Absolute Zero</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define the thermodynamic (Kelvin) temperature scale based on the Carnot cycle. What is the physical significance of absolute zero ($0\\text{ K}$)?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. Lord Kelvin defined the absolute thermodynamic temperature scale using the heat exchange ratio of a reversible Carnot engine:
    $$\\frac{T_1}{T_2} = \\frac{Q_1}{Q_2}$$
    Because this ratio depends solely on temperatures and is completely independent of the properties of any thermometric substance (mercury, gas, alcohol), it provides an absolute standard.<br/>
    2. <b style="color: ${themeColor};">Physical Significance of Absolute Zero ($0\\text{ K}$):</b><br/>
    - If the cold sink temperature is $T_2 = 0\\text{ K}$, then $Q_2 = 0$. Absolute zero is the temperature of a sink at which a Carnot engine would reject zero heat, converting 100% of absorbed heat into work.<br/>
    - Microscopically, at $0\\text{ K}$, all classical translational and rotational kinetic motion of molecules ceases completely, and the system reaches its minimum possible quantum ground-state energy.
  </div>
</div>

<!-- Q78 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q78: When Does a Real Gas Obey Ideal Gas Laws?</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Under what specific physical conditions of temperature and pressure does a real gas behave like an ideal gas? Explain the microscopic reasons.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    A real gas closely obeys the ideal gas equation of state ($P V = n R T$) under conditions of <strong>low pressure and high temperature</strong>.<br/>
    <b style="color: ${themeColor};">Microscopic Reasons:</b><br/>
    1. <strong>Low Pressure:</strong> At low pressures, gas volume is very large. Consequently, the actual volume occupied by the gas molecules themselves is negligibly small compared to the total volume of the container ($b \\ll V$), fulfilling the ideal gas postulate of point particles.<br/>
    2. <strong>High Temperature:</strong> At high temperatures, molecules have high thermal kinetic energies ($E_k \\propto T$). The attractive intermolecular forces (van der Waals forces) become negligible compared to the high kinetic energy of colliding molecules, satisfying the ideal gas postulate of non-interacting particles ($a / V^2 \\approx 0$).
  </div>
</div>

<!-- Q79 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q79: Carnot Engine Operating in Reverse as Heat Pump</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is a heat pump? How does its coefficient of performance ($\\text{COP}_{\\text{HP}}$) differ from that of a refrigerator ($\\text{COP}_{\\text{ref}}$)? Prove that $\\text{COP}_{\\text{HP}} = \\text{COP}_{\\text{ref}} + 1$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. A <strong>heat pump</strong> is a cyclic thermodynamic device that absorbs heat $Q_2$ from a cold outdoor environment ($T_2$), consumes work $W$, and discharges heat $Q_1$ into an indoor living space ($T_1$) to keep it warm during winter.<br/>
    2. The objective of a refrigerator is cooling (maximizing heat extracted $Q_2$):
    $$\\text{COP}_{\\text{ref}} = \\beta = \\frac{Q_2}{W}$$
    3. The objective of a heat pump is heating (maximizing heat delivered $Q_1$):
    $$\\text{COP}_{\\text{HP}} = \\frac{Q_1}{W}$$
    4. By the First Law, $Q_1 = Q_2 + W$:
    $$\\text{COP}_{\\text{HP}} = \\frac{Q_2 + W}{W} = \\frac{Q_2}{W} + 1 = \\text{COP}_{\\text{ref}} + 1$$
    Thus, the coefficient of performance of a heat pump is always strictly <strong>1 unit greater</strong> than that of a refrigerator operating between the same temperature limits.
  </div>
</div>

<!-- Q80 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q80: Why Can Sound Propagation in Air be Modeled as an Adiabatic Process?</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Why did Laplace modify Newton's formula for the velocity of sound in a gas by treating acoustic compressions and rarefactions as adiabatic rather than isothermal?</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    1. <strong>Newton's Assumption:</strong> Newton assumed sound propagation was isothermal because any heat generated during compression was assumed to dissipate immediately to adjacent rarefactions.<br/>
    2. <strong>Laplace's Realization:</strong> Laplace corrected this by pointing out that:<br/>
    &bull; Sound waves in air travel at high audible frequencies (e.g., hundreds of cycles per second). Compressions and rarefactions occur extremely rapidly.<br/>
    &bull; Air is a remarkably poor conductor of heat ($K_{\\text{air}}$ is very small).<br/>
    3. Consequently, there is virtually zero time for heat to conduct from compressed regions to rarefied regions during a single acoustic cycle ($dQ = 0$).<br/>
    4. Therefore, sound wave propagation is strictly an <strong>adiabatic process</strong> governed by adiabatic elasticity ($E_\\phi = \\gamma P$):
    $$v = \\sqrt{\\frac{E_\\phi}{\\rho}} = \\sqrt{\\frac{\\gamma P}{\\rho}}$$
    This eliminated the 16% discrepancy in Newton's formula and matched experimental sound velocity ($332\\text{ m/s}$ at STP).
  </div>
</div>
`;

module.exports = { solutionsPart2 };
