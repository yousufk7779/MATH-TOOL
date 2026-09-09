// scripts/c11_phy_8_solutions_part3.js
const { themeColor, frac } = require('./c11_phy_8_helpers');

const solutionsPart3 = `
<!-- SECTION C: LONG ANSWER (LA) QUESTIONS (5 MARKS) (Q81 TO Q100) -->
<div style="margin-top: 35px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid ${themeColor};">
  <h2 style="color: ${themeColor}; font-size: 20px; margin: 0;">SECTION C: LONG ANSWER (LA) QUESTIONS (5 MARKS)</h2>
  <p style="color: #94A3B8; font-size: 13px; margin: 4px 0 0 0;">Rigorous step-by-step mathematical proofs, full derivations, cycle efficiencies, Second Law formulations, and master synthesis for Unit VIII.</p>
</div>

<!-- Q81 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q81: State and Prove Zeroth Law of Thermodynamics and Define Temperature</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the Zeroth Law of Thermodynamics. Explain how it provides a logical foundation for the concept and measurement of temperature as a fundamental state variable.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statement:</b> The Zeroth Law of Thermodynamics states that if two thermodynamic systems, A and B, are each separately in thermal equilibrium with a third system C, then systems A and B are also in mutual thermal equilibrium with each other when brought into thermal contact.<br/><br/>
    <b style="color: ${themeColor};">Experimental Setup and Proof:</b><br/>
    1. Consider two systems A and B separated from each other by an insulating <strong>adiabatic wall</strong>, so that no heat can flow directly between A and B.<br/>
    2. Both systems A and B are placed in thermal contact with a third system C through a conducting <strong>diathermic wall</strong>.<br/>
    3. Heat flows freely between A and C, and between B and C, until system A attains thermal equilibrium with C, and system B separately attains thermal equilibrium with C.<br/>
    4. At this stage, all macroscopic variables ($P_A, V_A, P_B, V_B, P_C, V_C$) become perfectly steady.<br/>
    5. Now, replace the adiabatic wall between A and B with a diathermic wall, and replace the diathermic wall connecting to C with an adiabatic wall.<br/>
    6. It is observed experimentally that <strong>no further change occurs</strong> in the state variables of A or B, and zero net heat flows between them. This proves that systems A and B are already in mutual thermal equilibrium.<br/><br/>
    <b style="color: ${themeColor};">Establishment of Temperature as a State Property:</b><br/>
    - The Zeroth Law implies that there exists an intrinsic scalar state property common to all systems in thermal equilibrium. This property is defined as <strong>temperature</strong> ($T$).<br/>
    - System A in equilibrium with C means: $T_A = T_C$.<br/>
    - System B in equilibrium with C means: $T_B = T_C$.<br/>
    - By transitivity of equality: $T_A = T_B$.<br/>
    - This provides the operational basis for all thermometry: System C acts as a calibrated thermometer measuring whether two other bodies share the identical temperature.
  </div>
</div>

<!-- Q82 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q82: State First Law and Apply Systematically to Four Gas Processes</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the First Law of Thermodynamics in differential and integral forms. Apply it systematically to derive the governing formulas for heat, work, and internal energy changes in: (i) Isochoric, (ii) Isobaric, (iii) Isothermal, and (iv) Adiabatic processes.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statement:</b> The First Law of Thermodynamics states that heat energy $\\Delta Q$ supplied to a thermodynamic system equals the sum of the increase in its internal energy $\\Delta U$ and the external mechanical work done $\\Delta W$ by the system:
    $$\\Delta Q = \\Delta U + \\Delta W \\quad \\text{or in differential form:} \\quad dQ = dU + P dV$$
    <b style="color: ${themeColor};">1. Isochoric Process ($V = \\text{constant}$):</b><br/>
    - Since volume is constant, $dV = 0 \\implies W = \\int P dV = 0$.<br/>
    - The First Law simplifies to:
    $$dQ = dU = n C_v dT \\implies \\Delta Q = \\Delta U = n C_v \\Delta T$$
    All heat supplied goes entirely into raising the internal energy and temperature.<br/><br/>
    <b style="color: ${themeColor};">2. Isobaric Process ($P = \\text{constant}$):</b><br/>
    - External work done: $W = \\int_{V_1}^{V_2} P dV = P(V_2 - V_1) = n R \\Delta T$.<br/>
    - Internal energy change: $\\Delta U = n C_v \\Delta T$.<br/>
    - Total heat supplied:
    $$\\Delta Q = \\Delta U + W = n C_v \\Delta T + n R \\Delta T = n (C_v + R) \\Delta T = n C_p \\Delta T$$
    <b style="color: ${themeColor};">3. Isothermal Process ($T = \\text{constant}$):</b><br/>
    - For an ideal gas, internal energy depends solely on temperature: $\\Delta T = 0 \\implies \\Delta U = 0$.<br/>
    - The First Law simplifies to:
    $$\\Delta Q = W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$$
    All heat absorbed is completely converted into external expansion work.<br/><br/>
    <b style="color: ${themeColor};">4. Adiabatic Process ($dQ = 0$):</b><br/>
    - Zero heat enters or leaves the system: $\\Delta Q = 0$.<br/>
    - The First Law yields:
    $$0 = dU + dW \\implies dW = -dU \\quad \\text{or} \\quad W = -\\Delta U = -n C_v \\Delta T$$
    External work is performed purely at the expense of the gas's internal energy, causing cooling during expansion and heating during compression.
  </div>
</div>

<!-- Q83 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q83: Complete Calculus Derivation of Work Done in Isothermal Expansion</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using integral calculus, derive the complete mathematical expression for the work done by $n$ moles of an ideal gas during an isothermal expansion from volume $V_1$ to volume $V_2$ at absolute temperature $T$. Express the result in terms of both volume ratio and pressure ratio.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Step 1: System Definition and Ideal Gas Equation:</b><br/>
    Consider $n$ moles of an ideal gas enclosed in a cylinder fitted with a frictionless, movable piston. Let the cylinder have perfectly conducting (diathermic) base placed in thermal contact with a heat reservoir at constant absolute temperature $T$.<br/>
    At any intermediate state during expansion, the ideal gas equation of state is:
    $$P V = n R T \\implies P = \\frac{n R T}{V}$$
    <b style="color: ${themeColor};">Step 2: Infinitesimal Work:</b><br/>
    When the gas pushes the piston outward by an infinitesimal volume change $dV$, the elementary work performed by the gas is:
    $$dW = P \\, dV = \\left( \\frac{n R T}{V} \\right) dV$$
    <b style="color: ${themeColor};">Step 3: Integration Over Finite Expansion:</b><br/>
    To determine the total work performed as the volume increases from initial volume $V_1$ to final volume $V_2$:
    $$W = \\int_{V_1}^{V_2} dW = \\int_{V_1}^{V_2} \\frac{n R T}{V} \\, dV$$
    Because the temperature $T$ is strictly constant in an isothermal process, the factor $n R T$ is constant and can be taken outside the integral:
    $$W = n R T \\int_{V_1}^{V_2} \\frac{dV}{V} = n R T [\\ln V]_{V_1}^{V_2} = n R T (\\ln V_2 - \\ln V_1)$$
    $$\\mathbf{W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)}$$
    <b style="color: ${themeColor};">Step 4: Conversion to Base-10 Logarithm and Pressure Form:</b><br/>
    Converting natural logarithm to common logarithm ($\\ln x = 2.3026 \\log_{10} x$):
    $$\\mathbf{W = 2.303 \\, n R T \\log_{10}\\left(\\frac{V_2}{V_1}\\right)}$$
    Since temperature is constant, Boyle's law applies: $P_1 V_1 = P_2 V_2 \\implies \\frac{V_2}{V_1} = \\frac{P_1}{P_2}$.<br/>
    Substituting the pressure ratio:
    $$\\mathbf{W = 2.303 \\, n R T \\log_{10}\\left(\\frac{P_1}{P_2}\\right)}$$
    If $V_2 > V_1$ (expansion), $W > 0$ (positive work done BY the gas). If $V_2 < V_1$ (compression), $W < 0$ (work done ON the gas).
  </div>
</div>

<!-- Q84 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q84: Rigorous Derivation of Poisson's Relations for Adiabatic Processes</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Starting from the First Law of Thermodynamics, derive Poisson's relation $P V^\\gamma = \\text{constant}$ for an ideal gas undergoing a reversible adiabatic process. Hence deduce the corresponding relations: (i) $T V^{\\gamma - 1} = \\text{constant}$, and (ii) $P^{1 - \\gamma} T^\\gamma = \\text{constant}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Step 1: First Law for Adiabatic Process:</b><br/>
    For 1 mole of an ideal gas, the First Law in differential form is:
    $$dQ = dU + P \\, dV$$
    In an adiabatic process, zero heat exchange occurs across the boundary: $dQ = 0$.<br/>
    Since $dU = C_v \\, dT$, the equation becomes:
    $$C_v \\, dT + P \\, dV = 0 \\quad \\text{--- (Equation 1)}$$
    <b style="color: ${themeColor};">Step 2: Differentiating Ideal Gas Law:</b><br/>
    For 1 mole of an ideal gas, $P V = R T$. Differentiating both sides:
    $$P \\, dV + V \\, dP = R \\, dT \\implies dT = \\frac{P \\, dV + V \\, dP}{R}$$
    <b style="color: ${themeColor};">Step 3: Substituting into Equation 1:</b><br/>
    Substitute $dT$ into Equation 1:
    $$C_v \\left( \\frac{P \\, dV + V \\, dP}{R} \\right) + P \\, dV = 0$$
    Multiplying throughout by $R$:
    $$C_v P \\, dV + C_v V \\, dP + R P \\, dV = 0$$
    Grouping terms containing $P \\, dV$:
    $$(C_v + R) P \\, dV + C_v V \\, dP = 0$$
    By Mayer's relation, $C_v + R = C_p$:
    $$C_p P \\, dV + C_v V \\, dP = 0$$
    <b style="color: ${themeColor};">Step 4: Separating Variables and Integrating:</b><br/>
    Dividing throughout by $C_v P V$:
    $$\\frac{C_p}{C_v} \\frac{dV}{V} + \\frac{dP}{P} = 0$$
    Setting $\\gamma = C_p / C_v$:
    $$\\gamma \\frac{dV}{V} + \\frac{dP}{P} = 0$$
    Integrating both sides:
    $$\\gamma \\ln V + \\ln P = \\text{constant} \\implies \\ln(P V^\\gamma) = \\text{constant}$$
    $$\\mathbf{P V^\\gamma = \\text{constant}}$$
    <b style="color: ${themeColor};">Deductions:</b><br/>
    (i) Using $P = \\frac{R T}{V}$: $\\left(\\frac{R T}{V}\\right) V^\\gamma = \\text{const} \\implies \\mathbf{T V^{\\gamma - 1} = \\text{constant}}$.<br/>
    (ii) Using $V = \\frac{R T}{P}$: $P \\left(\\frac{R T}{P}\\right)^\\gamma = \\text{const} \\implies P^{1 - \\gamma} T^\\gamma = \\text{constant} \\implies \\mathbf{\\frac{T^\\gamma}{P^{\\gamma - 1}} = \\text{constant}}$.
  </div>
</div>

<!-- Q85 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q85: Derivation of Work Done in an Adiabatic Expansion of an Ideal Gas</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive the complete mathematical expression for the work done by $n$ moles of an ideal gas during an adiabatic expansion from state $(P_1, V_1, T_1)$ to state $(P_2, V_2, T_2)$. Express the final formula in terms of: (i) pressures and volumes, and (ii) initial and final temperatures.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Step 1: Work Integral Setup:</b><br/>
    Consider $n$ moles of an ideal gas expanding adiabatically from volume $V_1$ to $V_2$.<br/>
    The work done by the gas is:
    $$W = \\int_{V_1}^{V_2} P \\, dV$$
    <b style="color: ${themeColor};">Step 2: Expressing Pressure Using Poisson's Law:</b><br/>
    During a reversible adiabatic process:
    $$P V^\\gamma = K \\quad (\\text{constant}) \\implies P = K V^{-\\gamma}$$
    where $K = P_1 V_1^\\gamma = P_2 V_2^\\gamma$.<br/>
    <b style="color: ${themeColor};">Step 3: Evaluating the Integral:</b><br/>
    Substitute $P$ into the work integral:
    $$W = \\int_{V_1}^{V_2} K V^{-\\gamma} \\, dV = K \\left[ \\frac{V^{-\\gamma + 1}}{-\\gamma + 1} \\right]_{V_1}^{V_2} = \\frac{K}{1 - \\gamma} \\left[ V_2^{1-\\gamma} - V_1^{1-\\gamma} \\right]$$
    Distributing the constant $K$:
    $$W = \\frac{1}{1 - \\gamma} \\left[ K V_2^{1-\\gamma} - K V_1^{1-\\gamma} \\right]$$
    <b style="color: ${themeColor};">Step 4: Substituting $K = P_2 V_2^\\gamma$ and $K = P_1 V_1^\\gamma$:</b><br/>
    $$W = \\frac{1}{1 - \\gamma} \\left[ (P_2 V_2^\\gamma) V_2^{1-\\gamma} - (P_1 V_1^\\gamma) V_1^{1-\\gamma} \\right] = \\frac{P_2 V_2 - P_1 V_1}{1 - \\gamma}$$
    Multiplying numerator and denominator by $-1$:
    $$\\mathbf{W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}}$$
    <b style="color: ${themeColor};">Step 5: Expression in Terms of Temperatures:</b><br/>
    Using the ideal gas equation of state: $P_1 V_1 = n R T_1$ and $P_2 V_2 = n R T_2$:
    $$W = \\frac{n R T_1 - n R T_2}{\\gamma - 1} \\implies \\mathbf{W = \\frac{n R (T_1 - T_2)}{\\gamma - 1}}$$
    <b style="color: ${themeColor};">Physical Interpretation:</b><br/>
    - In an expansion ($V_2 > V_1$), work is done by the gas ($W > 0$), so $T_1 > T_2$: <strong>adiabatic expansion causes cooling</strong>.<br/>
    - In a compression ($V_2 < V_1$), work is done on the gas ($W < 0$), so $T_2 > T_1$: <strong>adiabatic compression causes heating</strong>.
  </div>
</div>

<!-- Q86 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q86: Mathematical Comparison of Isothermal vs Adiabatic Slopes on P-V Diagram</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Prove that on a $P-V$ diagram, the slope of an adiabatic curve is strictly $\gamma$ times the slope of an isothermal curve passing through the same point. Explain with a comparative graph sketch described in words what happens when a gas expands from the same initial state $(P_1, V_1)$ to the same final volume $V_2$ along both paths.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Mathematical Derivation:</b><br/>
    1. <strong>Slope of Isothermal Curve:</strong> For an isothermal process of an ideal gas:
    $$P V = \\text{constant}$$
    Differentiating both sides with respect to $V$:
    $$P + V \\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{\\text{iso}} = -\\frac{P}{V}$$
    2. <strong>Slope of Adiabatic Curve:</strong> For an adiabatic process:
    $$P V^\\gamma = \\text{constant}$$
    Differentiating both sides with respect to $V$:
    $$\\gamma P V^{\\gamma - 1} + V^\\gamma \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = 0$$
    Dividing throughout by $V^{\\gamma - 1}$:
    $$\\gamma P + V \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = 0 \\implies \\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = -\\gamma \\frac{P}{V}$$
    3. <strong>Comparison:</strong>
    $$\\mathbf{\\left(\\frac{dP}{dV}\\right)_{\\text{adia}} = \\gamma \\times \\left(\\frac{dP}{dV}\\right)_{\\text{iso}}}$$
    Because $\\gamma = C_p / C_v > 1$, the slope of the adiabatic curve is always <strong>steeper (more negative)</strong> than that of the isothermal curve.<br/><br/>
    <b style="color: ${themeColor};">Expansion from Common Initial State $(P_1, V_1)$ to Same Final Volume $V_2$:</b><br/>
    - As volume expands from $V_1$ to $V_2$, the steeper adiabatic curve drops much more sharply than the isothermal curve.<br/>
    - Hence, at final volume $V_2$, the final adiabatic pressure is significantly lower than final isothermal pressure ($P_{\\text{adia}} < P_{\\text{iso}}$).<br/>
    - The isothermal curve lies entirely above the adiabatic curve. Consequently, the area under the isothermal curve is larger, meaning:
    $$W_{\\text{iso}} > W_{\\text{adia}}$$
  </div>
</div>

<!-- Q87 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q87: Isothermal and Adiabatic Elasticities of an Ideal Gas and Laplace Correction</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define the bulk modulus of elasticity of a gas. Prove that: (i) the isothermal elasticity is $E_\\theta = P$, and (ii) the adiabatic elasticity is $E_\\phi = \\gamma P$. Hence prove that $\\frac{E_\\phi}{E_\\theta} = \\gamma$, and explain Laplace's correction to Newton's formula for the speed of sound.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Definition of Bulk Modulus:</b> Bulk modulus measures resistance to volumetric compression:
    $$E = -\\frac{\\Delta P}{\\Delta V / V} = -V \\frac{dP}{dV}$$
    <b style="color: ${themeColor};">Part (i): Isothermal Elasticity ($E_\\theta$):</b><br/>
    In an isothermal process, $P V = \\text{constant}$. Differentiating gives:
    $$P \\, dV + V \\, dP = 0 \\implies \\frac{dP}{dV} = -\\frac{P}{V}$$
    Substituting into the elasticity formula:
    $$E_\\theta = -V \\left(-\\frac{P}{V}\\right) \\implies \\mathbf{E_\\theta = P}$$
    The isothermal elasticity of an ideal gas equals its pressure.<br/><br/>
    <b style="color: ${themeColor};">Part (ii): Adiabatic Elasticity ($E_\\phi$):</b><br/>
    In an adiabatic process, $P V^\\gamma = \\text{constant}$. Differentiating gives:
    $$\\gamma P V^{\\gamma - 1} dV + V^\\gamma dP = 0 \\implies \\frac{dP}{dV} = -\\gamma \\frac{P}{V}$$
    Substituting into the elasticity formula:
    $$E_\\phi = -V \\left(-\\gamma \\frac{P}{V}\\right) \\implies \\mathbf{E_\\phi = \\gamma P}$$
    <b style="color: ${themeColor};">Ratio:</b>
    $$\\frac{E_\\phi}{E_\\theta} = \\frac{\\gamma P}{P} = \\gamma$$
    <b style="color: ${themeColor};">Laplace's Correction:</b> Newton assumed sound propagation was isothermal ($v = \\sqrt{E_\\theta / \\rho} = \\sqrt{P / \\rho} = 280\\text{ m/s}$ at STP, 16% below experiment). Laplace corrected this by establishing that acoustic compressions and rarefactions occur so rapidly and air conducts so poorly that the process is adiabatic:
    $$v = \\sqrt{\\frac{E_\\phi}{\\rho}} = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{1.41} \\times 280 \\approx 332\\text{ m/s}$$
    This matches experimental sound speed perfectly.
  </div>
</div>

<!-- Q88 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q88: Complete Theory of Reversible vs Irreversible Processes</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define reversible and irreversible processes. Discuss in detail the conditions necessary for reversibility, why perfect reversibility is an idealization, and why all natural spontaneous processes in the universe are irreversible.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Reversible Process:</b> A thermodynamic transformation that can be carried out in reverse direction such that every intermediate equilibrium state is retraced, returning both system and surroundings completely to their initial conditions with zero net entropy generation ($\Delta S_{\\text{universe}} = 0$).<br/><br/>
    <b style="color: ${themeColor};">Conditions for Reversibility:</b><br/>
    1. <strong>Quasi-Static Equilibrium:</strong> The transformation must proceed at an infinitesimally slow rate, passing through an unbroken succession of thermodynamic equilibrium states. Driving forces must be infinitesimally larger than opposing forces ($P_{\\text{sys}} = P_{\\text{ext}} \\pm dP$, $T_{\\text{sys}} = T_{\\text{surr}} \\pm dT$).<br/>
    2. <strong>Zero Dissipative Forces:</strong> There must be complete absence of all dissipative effects (internal and external friction, fluid viscosity, electrical resistance, inelastic deformation, chemical reactions).<br/><br/>
    <b style="color: ${themeColor};">Why Perfect Reversibility is an Idealization:</b><br/>
    - In reality, an infinitesimally slow process would take infinite time to execute, rendering its rate of doing work zero ($P = dW/dt = 0$).<br/>
    - Furthermore, frictional and viscous forces can be minimized but never eliminated entirely ($F_{\\text{friction}} > 0$).<br/><br/>
    <b style="color: ${themeColor};">Why Spontaneous Real Processes are Irreversible:</b><br/>
    - All natural processes occur spontaneously at finite rates driven by non-zero gradients (finite $\Delta P, \Delta T, \Delta \\mu$).<br/>
    - Friction and viscosity inevitably convert macroscopic organized kinetic energy into random thermal molecular motion.<br/>
    - By the Second Law of Thermodynamics, universal entropy always increases ($\Delta S_{\\text{universe}} > 0$). Reversing an irreversible process spontaneously would require a decrease in universal entropy, which is physically impossible.
  </div>
</div>

<!-- Q89 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q89: Construction and Four Operating Stages of the Carnot Heat Engine</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the idealized construction of a Carnot Heat Engine and trace its four operating stages on a $P-V$ indicator diagram.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Construction of Carnot Engine:</b><br/>
    1. <strong>Cylinder:</strong> A cylinder fitted with a frictionless, movable insulating piston. The cylindrical side walls are perfectly non-conducting (adiabatic), while the flat bottom base is perfectly conducting (diathermic).<br/>
    2. <strong>Working Substance:</strong> An ideal gas enclosed inside the cylinder.<br/>
    3. <strong>Hot Source:</strong> A heat reservoir maintained at a constant high temperature $T_1$ with infinite heat capacity.<br/>
    4. <strong>Cold Sink:</strong> A heat reservoir maintained at a constant low temperature $T_2$ ($T_2 < T_1$) with infinite heat capacity.<br/>
    5. <strong>Insulating Stand:</strong> A perfectly non-conducting base for executing adiabatic processes.<br/><br/>
    <b style="color: ${themeColor};">Four Operating Stages on P-V Diagram:</b><br/>
    - <b style="color: ${themeColor};">Stage 1: Reversible Isothermal Expansion ($A \\to B$ at $T_1$):</b> The cylinder base is placed on the source at $T_1$. The gas expands quasi-statically from $(P_1, V_1)$ to $(P_2, V_2)$, absorbing heat $Q_1$ from the source.<br/>
    - <b style="color: ${themeColor};">Stage 2: Reversible Adiabatic Expansion ($B \\to C$ from $T_1$ to $T_2$):</b> The cylinder is shifted to the insulating stand. The gas expands adiabatically from $(P_2, V_2)$ to $(P_3, V_3)$, doing work at the expense of its internal energy until its temperature falls to $T_2$.<br/>
    - <b style="color: ${themeColor};">Stage 3: Reversible Isothermal Compression ($C \\to D$ at $T_2$):</b> The cylinder is placed on the sink at $T_2$. The gas is compressed quasi-statically from $(P_3, V_3)$ to $(P_4, V_4)$, rejecting heat $Q_2$ to the sink.<br/>
    - <b style="color: ${themeColor};">Stage 4: Reversible Adiabatic Compression ($D \\to A$ from $T_2$ to $T_1$):</b> The cylinder is returned to the insulating stand. The gas is compressed adiabatically from $(P_4, V_4)$ back to the initial state $(P_1, V_1, T_1)$, completing the closed cycle.
  </div>
</div>

<!-- Q90 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q90: Rigorous Derivation of Carnot Engine Thermal Efficiency</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive mathematically the formula for the thermal efficiency of a Carnot heat engine ($\eta = 1 - \frac{T_2}{T_1}$) by calculating the work done in each of the four stages of the Carnot cycle.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Step 1: Work Done in Each Stage:</b><br/>
    Let $n$ moles of an ideal gas undergo the Carnot cycle:<br/>
    1. <strong>Isothermal Expansion ($A \\to B$ at $T_1$):</strong>
    $$W_1 = Q_1 = n R T_1 \\ln\\left(\\frac{V_2}{V_1}\\right)$$
    2. <strong>Adiabatic Expansion ($B \\to C$ from $T_1$ to $T_2$):</strong>
    $$W_2 = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$$
    3. <strong>Isothermal Compression ($C \\to D$ at $T_2$):</strong>
    $$W_3 = -Q_2 = n R T_2 \\ln\\left(\\frac{V_4}{V_3}\\right) = -n R T_2 \\ln\\left(\\frac{V_3}{V_4}\\right)$$
    4. <strong>Adiabatic Compression ($D \\to A$ from $T_2$ to $T_1$):</strong>
    $$W_4 = \\frac{n R (T_2 - T_1)}{\\gamma - 1} = -W_2$$
    <b style="color: ${themeColor};">Step 2: Total Net Work Done per Cycle:</b><br/>
    $$W_{\\text{net}} = W_1 + W_2 + W_3 + W_4 = W_1 + W_2 - Q_2 - W_2 = W_1 + W_3 = Q_1 - Q_2$$
    $$W_{\\text{net}} = n R T_1 \\ln\\left(\\frac{V_2}{V_1}\\right) - n R T_2 \\ln\\left(\\frac{V_3}{V_4}\\right)$$
    <b style="color: ${themeColor};">Step 3: Relation Between Volume Ratios:</b><br/>
    - For adiabatic stage $B \\to C$: $T_1 V_2^{\\gamma - 1} = T_2 V_3^{\\gamma - 1} \\implies \\frac{T_1}{T_2} = \\left(\\frac{V_3}{V_2}\\right)^{\\gamma - 1}$<br/>
    - For adiabatic stage $D \\to A$: $T_1 V_1^{\\gamma - 1} = T_2 V_4^{\\gamma - 1} \\implies \\frac{T_1}{T_2} = \\left(\\frac{V_4}{V_1}\\right)^{\\gamma - 1}$<br/>
    Equating the two ratios:
    $$\\left(\\frac{V_3}{V_2}\\right)^{\\gamma - 1} = \\left(\\frac{V_4}{V_1}\\right)^{\\gamma - 1} \\implies \\frac{V_3}{V_2} = \\frac{V_4}{V_1} \\implies \\frac{V_2}{V_1} = \\frac{V_3}{V_4}$$
    <b style="color: ${themeColor};">Step 4: Thermal Efficiency:</b><br/>
    Since $\\ln(V_2 / V_1) = \\ln(V_3 / V_4)$:
    $$\\frac{Q_2}{Q_1} = \\frac{n R T_2 \\ln(V_3 / V_4)}{n R T_1 \\ln(V_2 / V_1)} = \\frac{T_2}{T_1}$$
    Thermal efficiency $\\eta$:
    $$\\eta = \\frac{W_{\\text{net}}}{Q_1} = \\frac{Q_1 - Q_2}{Q_1} = 1 - \\frac{Q_2}{Q_1}$$
    $$\\mathbf{\\eta = 1 - \\frac{T_2}{T_1}}$$
  </div>
</div>

<!-- Q91 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q91: State and Prove Carnot's Theorem Using the Second Law</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Carnot's Theorem. Prove both parts of Carnot's Theorem rigorously using the Second Law of Thermodynamics.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statement of Carnot's Theorem:</b><br/>
    1. No heat engine operating between two given constant-temperature thermal reservoirs can have a greater efficiency than a reversible Carnot engine operating between the same two reservoirs ($\\eta_{\\text{irr}} \\le \\eta_{\\text{rev}}$).<br/>
    2. All reversible heat engines operating between the same two constant-temperature reservoirs have identical efficiency, regardless of the working substance.<br/><br/>
    <b style="color: ${themeColor};">Proof of Part 1 ($\\eta_I \\le \\eta_R$):</b><br/>
    1. Let an irreversible engine $I$ and a reversible engine $R$ operate between a hot source at $T_1$ and cold sink at $T_2$.<br/>
    2. Suppose, contrary to the theorem, that the irreversible engine is more efficient than the reversible engine: $\\eta_I > \\eta_R$.<br/>
    3. Let both engines perform the identical amount of mechanical work $W$ per cycle.<br/>
    4. By definition of efficiency:
    $$\\eta_I = \\frac{W}{Q_I} \\quad \\text{and} \\quad \\eta_R = \\frac{W}{Q_R}$$
    Since $\\eta_I > \\eta_R$, we must have:
    $$Q_I < Q_R$$
    5. The heat rejected by engine $I$ is $Q_I - W$, and by engine $R$ is $Q_R - W$.<br/>
    6. Since engine $R$ is completely reversible, run engine $R$ in reverse as a refrigerator driven by the work output $W$ of engine $I$.<br/>
    7. Look at the combined system $(I + R_{\\text{rev}})$:<br/>
    - At the cold sink ($T_2$): Heat absorbed by $R_{\\text{rev}}$ is $Q_R - W$, while heat rejected by $I$ is $Q_I - W$. Net heat absorbed from sink:
    $$(Q_R - W) - (Q_I - W) = Q_R - Q_I > 0$$
    - At the hot source ($T_1$): Heat rejected by $R_{\\text{rev}}$ is $Q_R$, while heat absorbed by $I$ is $Q_I$. Net heat delivered to source:
    $$Q_R - Q_I > 0$$
    - External work: The work produced by $I$ exactly powers $R_{\\text{rev}}$, so net external work is zero ($W_{\\text{ext}} = 0$).<br/>
    8. The net effect of the combined device is to transfer heat $Q_R - Q_I$ spontaneously from the cold sink to the hot source with zero net work input.<br/>
    9. This directly violates the <strong>Clausius statement</strong> of the Second Law. Hence, our initial assumption $\\eta_I > \\eta_R$ is false, proving:
    $$\\mathbf{\\eta_I \\le \\eta_R}$$
  </div>
</div>

<!-- Q92 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q92: Refrigerator Performance and Deduction of Relation Between COP and Efficiency</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the operation of an ideal Carnot refrigerator. Derive the formula for its Coefficient of Performance ($\\beta = \\frac{T_2}{T_1 - T_2}$) and prove that $\\beta = \\frac{1 - \\eta}{\\eta}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Carnot Refrigerator:</b> A Carnot refrigerator is a Carnot heat engine operated in reverse (counter-clockwise cycle on the $P-V$ diagram).<br/>
    - It absorbs heat $Q_2$ from a cold chamber at temperature $T_2$.<br/>
    - Mechanical work $W$ is performed on the working fluid by an external compressor.<br/>
    - Total heat $Q_1 = Q_2 + W$ is rejected to the warmer environment at temperature $T_1$.<br/><br/>
    <b style="color: ${themeColor};">Derivation of COP ($\\beta$):</b><br/>
    By definition of Coefficient of Performance:
    $$\\beta = \\frac{\\text{Heat Extracted}}{\\text{Work Input}} = \\frac{Q_2}{W} = \\frac{Q_2}{Q_1 - Q_2}$$
    Dividing numerator and denominator by $Q_2$:
    $$\\beta = \\frac{1}{\\frac{Q_1}{Q_2} - 1}$$
    For a reversible Carnot cycle, $\\frac{Q_1}{Q_2} = \\frac{T_1}{T_2}$. Substituting this gives:
    $$\\beta = \\frac{1}{\\frac{T_1}{T_2} - 1} = \\frac{1}{\\frac{T_1 - T_2}{T_2}} \\implies \\mathbf{\\beta = \\frac{T_2}{T_1 - T_2}}$$
    <b style="color: ${themeColor};">Deduction of $\\beta = \\frac{1 - \\eta}{\\eta}$:</b><br/>
    The thermal efficiency of a Carnot engine operating between $T_1$ and $T_2$ is:
    $$\\eta = \\frac{W}{Q_1} = \\frac{Q_1 - Q_2}{Q_1} = 1 - \\frac{Q_2}{Q_1} \\implies \\frac{Q_2}{Q_1} = 1 - \\eta$$
    Substituting $Q_2 = (1 - \\eta) Q_1$ and $W = \\eta Q_1$ into $\\beta = Q_2 / W$:
    $$\\beta = \\frac{(1 - \\eta) Q_1}{\\eta Q_1} \\implies \\mathbf{\\beta = \\frac{1 - \\eta}{\\eta}}$$
  </div>
</div>

<!-- Q93 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q93: Full Proof of Logical Equivalence of Kelvin-Planck and Clausius Statements</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State both the Kelvin-Planck and Clausius statements of the Second Law of Thermodynamics. Present a complete two-way rigorous proof showing that a violation of Kelvin-Planck implies a violation of Clausius, and vice-versa.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statements:</b><br/>
    - <strong>Kelvin-Planck:</strong> It is impossible to construct a cyclic heat engine that absorbs heat from a single reservoir and converts it completely into work with zero heat rejection.<br/>
    - <strong>Clausius:</strong> It is impossible to construct a cyclic machine whose sole effect is to transfer heat from a cooler body to a warmer body without external work input.<br/><br/>
    <b style="color: ${themeColor};">Proof Part 1: Violation of Clausius &rArr; Violation of Kelvin-Planck:</b><br/>
    1. Suppose a refrigerator $R$ violates Clausius: it transfers heat $Q_2$ from sink ($T_2$) to source ($T_1$) with $W = 0$.<br/>
    2. Couple $R$ with a normal heat engine $E$ operating between $T_1$ and $T_2$. Let $E$ absorb $Q_1$ from $T_1$, produce work $W = Q_1 - Q_2$, and reject $Q_2$ to $T_2$.<br/>
    3. The heat $Q_2$ rejected by $E$ is returned to the source by $R$. Thus, the sink at $T_2$ undergoes zero net heat exchange.<br/>
    4. The coupled unit $(R + E)$ extracts net heat $Q_{\\text{net}} = Q_1 - Q_2$ from a single reservoir at $T_1$ and delivers equivalent work $W = Q_1 - Q_2$ with zero rejection to the sink.<br/>
    5. This directly violates the Kelvin-Planck statement.<br/><br/>
    <b style="color: ${themeColor};">Proof Part 2: Violation of Kelvin-Planck &rArr; Violation of Clausius:</b><br/>
    1. Suppose an engine $E$ violates Kelvin-Planck: it absorbs heat $Q_1$ from source ($T_1$) and converts 100% of it into work $W = Q_1$ with zero rejection ($Q_2 = 0$).<br/>
    2. Direct this work $W = Q_1$ into a normal refrigerator $R$ that extracts heat $Q_2$ from sink ($T_2$) and delivers heat $Q_1' = Q_2 + W = Q_2 + Q_1$ to source ($T_1$).<br/>
    3. The coupled unit $(E + R)$ requires zero external work input ($W_{\\text{net}} = 0$).<br/>
    4. Net heat extracted from sink: $Q_2$. Net heat delivered to source: $(Q_2 + Q_1) - Q_1 = Q_2$.<br/>
    5. The coupled unit transfers heat $Q_2$ from cold to hot reservoir with zero work, directly violating the Clausius statement.<br/>
    Therefore, the Kelvin-Planck and Clausius statements are completely equivalent.
  </div>
</div>

<!-- Q94 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q94: Clausius Theorem, Entropy State Function, and General Gas Formula</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Clausius's Theorem for any reversible cyclic process. Define entropy as a state function and derive the general expression for the change in entropy ($\\Delta S$) of $n$ moles of an ideal gas when its temperature changes from $T_1$ to $T_2$ and volume changes from $V_1$ to $V_2$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Clausius's Theorem:</b> For any reversible cyclic process traversed by a thermodynamic system:
    $$\\oint \\frac{dQ_{\\text{rev}}}{T} = 0$$
    Since the line integral of $\\frac{dQ_{\\text{rev}}}{T}$ over any closed path is zero, the quantity $dS = \\frac{dQ_{\\text{rev}}}{T}$ is an exact differential of a state function called <strong>entropy</strong> ($S$).<br/><br/>
    <b style="color: ${themeColor};">Derivation for an Ideal Gas:</b><br/>
    1. By the First Law of Thermodynamics for $n$ moles of an ideal gas:
    $$dQ_{\\text{rev}} = dU + P \\, dV = n C_v \\, dT + P \\, dV$$
    2. Dividing throughout by absolute temperature $T$:
    $$dS = \\frac{dQ_{\\text{rev}}}{T} = n C_v \\frac{dT}{T} + \\frac{P}{T} dV$$
    3. From the ideal gas law $P V = n R T \\implies \\frac{P}{T} = \\frac{n R}{V}$:
    $$dS = n C_v \\frac{dT}{T} + n R \\frac{dV}{V}$$
    4. Integrating between initial state $(T_1, V_1)$ and final state $(T_2, V_2)$:
    $$\\Delta S = S_2 - S_1 = \\int_{T_1}^{T_2} n C_v \\frac{dT}{T} + \\int_{V_1}^{V_2} n R \\frac{dV}{V}$$
    $$\\mathbf{\\Delta S = n C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + n R \\ln\\left(\\frac{V_2}{V_1}\\right)}$$
    Alternatively, using $V = \\frac{n R T}{P}$ and $C_p = C_v + R$:
    $$\\mathbf{\\Delta S = n C_p \\ln\\left(\\frac{T_2}{T_1}\\right) - n R \\ln\\left(\\frac{P_2}{P_1}\\right)}$$
  </div>
</div>

<!-- Q95 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q95: Comprehensive Derivation of Mayer's Relation: $C_p - C_v = R$</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Provide a complete step-by-step thermodynamic derivation of Mayer's relation ($C_p - C_v = R$) for an ideal gas. Explain how this relation is modified when expressed in terms of principal specific heat capacities ($c_p - c_v$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Thermodynamic Derivation:</b><br/>
    1. Consider 1 mole of an ideal gas. Let its temperature be raised by an infinitesimal amount $dT$.<br/>
    2. <strong>At Constant Volume:</strong>
    $$dQ_v = C_v \\, dT$$
    By the First Law ($dQ = dU + P dV$), since $dV = 0$:
    $$dU = dQ_v = C_v \\, dT$$
    According to Joule's law of internal energy, the internal energy of an ideal gas depends solely on temperature. Therefore, $dU = C_v dT$ holds true for <i>any</i> process.<br/>
    3. <strong>At Constant Pressure:</strong>
    $$dQ_p = C_p \\, dT$$
    By the First Law:
    $$dQ_p = dU + dW = C_v \\, dT + P \\, dV$$
    Equating the two expressions for $dQ_p$:
    $$C_p \\, dT = C_v \\, dT + P \\, dV \\implies (C_p - C_v) dT = P \\, dV \\quad \\text{--- (1)}$$
    4. <strong>Using Ideal Gas Equation of State:</strong>
    For 1 mole of ideal gas:
    $$P V = R T$$
    Differentiating at constant pressure $P$:
    $$P \\, dV = R \\, dT$$
    5. <strong>Substituting into Equation 1:</strong>
    $$(C_p - C_v) dT = R \\, dT \\implies \\mathbf{C_p - C_v = R}$$
    <b style="color: ${themeColor};">Principal Specific Heat Capacities:</b><br/>
    If $c_p$ and $c_v$ represent specific heats per unit mass (per gram or per kg), and $M$ is the molar mass of the gas:
    $$C_p = M \\cdot c_p \\quad \\text{and} \\quad C_v = M \\cdot c_v$$
    Substituting into Mayer's relation:
    $$M c_p - M c_v = R \\implies \\mathbf{c_p - c_v = \\frac{R}{M} = r}$$
    where $r$ is the specific gas constant. If heat is expressed in calories, $c_p - c_v = \\frac{R}{M \\cdot J}$.
  </div>
</div>

<!-- Q96 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q96: Analysis of a Rectangular P-V Cyclic Process and Thermal Efficiency</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> An ideal monoatomic gas ($C_v = \\frac{3}{2}R$) undergoes a rectangular cycle on a $P-V$ indicator diagram with vertices $A(P_1, V_1) \\to B(P_2, V_1) \\to C(P_2, V_2) \\to D(P_1, V_2) \\to A(P_1, V_1)$, where $P_2 = 2P_1$ and $V_2 = 2V_1$. Calculate: (i) work done in each leg, (ii) net work done per cycle, (iii) total heat absorbed, and (iv) the thermal efficiency of the cycle.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    Given: $P_2 = 2P_1$, $V_2 = 2V_1$.<br/>
    <strong>(i) Work Done in Each Leg:</strong><br/>
    - $A \\to B$ (Isochoric heating at $V_1$): $W_{AB} = 0$.<br/>
    - $B \\to C$ (Isobaric expansion at $P_2 = 2P_1$):
    $$W_{BC} = P_2 (V_2 - V_1) = 2P_1 (2V_1 - V_1) = 2P_1 V_1$$
    - $C \\to D$ (Isochoric cooling at $V_2$): $W_{CD} = 0$.<br/>
    - $D \\to A$ (Isobaric compression at $P_1$):
    $$W_{DA} = P_1 (V_1 - V_2) = P_1 (V_1 - 2V_1) = -P_1 V_1$$
    <strong>(ii) Net Work Done:</strong>
    $$W_{\\text{net}} = W_{AB} + W_{BC} + W_{CD} + W_{DA} = 0 + 2P_1 V_1 + 0 - P_1 V_1 = P_1 V_1$$
    (Also equal to area of rectangle: $(P_2 - P_1)(V_2 - V_1) = P_1 V_1$).<br/><br/>
    <strong>(iii) Total Heat Absorbed ($Q_{\\text{in}}$):</strong><br/>
    Heat is absorbed during paths $A \\to B$ and $B \\to C$ where temperature rises:<br/>
    - Leg $A \\to B$:
    $$Q_{AB} = n C_v (T_B - T_A) = \\frac{3}{2}(P_2 V_1 - P_1 V_1) = \\frac{3}{2}(2P_1 V_1 - P_1 V_1) = \\frac{3}{2} P_1 V_1$$
    - Leg $B \\to C$:
    $$Q_{BC} = n C_p (T_C - T_B) = \\frac{5}{2}(P_2 V_2 - P_2 V_1) = \\frac{5}{2}(4P_1 V_1 - 2P_1 V_1) = 5 P_1 V_1$$
    Total heat absorbed:
    $$Q_{\\text{in}} = Q_{AB} + Q_{BC} = \\frac{3}{2} P_1 V_1 + 5 P_1 V_1 = \\frac{13}{2} P_1 V_1 = 6.5 P_1 V_1$$
    <strong>(iv) Thermal Efficiency ($\\eta$):</strong>
    $$\\eta = \\frac{W_{\\text{net}}}{Q_{\\text{in}}} = \\frac{P_1 V_1}{\\frac{13}{2} P_1 V_1} = \\frac{2}{13} \\approx 0.1538 = 15.38\\%$$
  </div>
</div>

<!-- Q97 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q97: Joule-Thomson Effect (Throttling) and Inversion Temperature</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is the Joule-Thomson effect (porous plug experiment)? Define a throttling process, explain why enthalpy remains constant, and discuss the concept of inversion temperature ($T_i$).</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Joule-Thomson Effect:</b> When a real gas under constant high pressure is forced to expand steadily through a porous plug (or narrow throttle orifice) into a region of constant lower pressure inside a thermally insulated pipe, a change in temperature of the gas is observed.<br/><br/>
    <b style="color: ${themeColor};">Constant Enthalpy (Isenthalpic Process):</b><br/>
    1. Let volume $V_1$ at pressure $P_1$ be pushed through the plug: Work done ON gas $= P_1 V_1$.<br/>
    2. The emerging gas expands to volume $V_2$ at pressure $P_2$: Work done BY gas $= P_2 V_2$.<br/>
    3. Net work done by gas: $W = P_2 V_2 - P_1 V_1$.<br/>
    4. Since the tube is thermally insulated ($Q = 0$), First Law gives:
    $$0 = \\Delta U + W = (U_2 - U_1) + (P_2 V_2 - P_1 V_1) \\implies U_1 + P_1 V_1 = U_2 + P_2 V_2$$
    Since <strong>enthalpy</strong> is defined as $H = U + P V$:
    $$\\mathbf{H_1 = H_2 \\implies H = \\text{constant}}$$
    <b style="color: ${themeColor};">Inversion Temperature ($T_i$):</b><br/>
    For a real van der Waals gas:
    $$\\Delta T = \\frac{1}{C_p} \\left( \\frac{2a}{R T} - b \\right) \\Delta P$$
    where $a$ represents intermolecular attraction and $b$ represents molecular volume.<br/>
    - If $T < T_i = \\frac{2a}{R b}$: The attractive term dominates; expansion does work against attraction, producing <strong>cooling</strong> ($\Delta T < 0$).<br/>
    - If $T > T_i$: Repulsive forces dominate, producing <strong>heating</strong> ($\Delta T > 0$).<br/>
    - At $T = T_i$: Zero temperature change occurs. (For air, $T_i \\approx 600^{\\circ}\\text{C}$; for hydrogen, $T_i \\approx -80^{\\circ}\\text{C}$; for helium, $T_i \\approx -240^{\\circ}\\text{C}$).
  </div>
</div>

<!-- Q98 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q98: Second Law, Universal Entropy Increase, and Thermal Death of Universe</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the Principle of Increase of Entropy. Prove that for any natural irreversible process occurring in an isolated system, the total entropy increases. Explain the cosmological concept known as the "Thermal Death of the Universe".</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Principle of Increase of Entropy:</b> In every spontaneous, irreversible physical or chemical process occurring in an isolated system, the total entropy of the system always increases. For any closed universe:
    $$\\mathbf{\\Delta S_{\\text{universe}} \\ge 0}$$
    (The equality holds strictly for idealized reversible processes; the inequality holds for all real irreversible processes).<br/><br/>
    <b style="color: ${themeColor};">Proof for Spontaneous Heat Conduction:</b><br/>
    1. Consider an isolated system containing two thermal bodies: Body 1 at temperature $T_1$ and Body 2 at temperature $T_2$, with $T_1 > T_2$.<br/>
    2. Heat $Q$ flows spontaneously from hot Body 1 to cold Body 2.<br/>
    3. Change in entropy of Body 1 (losing heat): $\\Delta S_1 = -\\frac{Q}{T_1}$.<br/>
    4. Change in entropy of Body 2 (gaining heat): $\\Delta S_2 = +\\frac{Q}{T_2}$.<br/>
    5. Net universal entropy change:
    $$\\Delta S_{\\text{total}} = \\Delta S_1 + \\Delta S_2 = Q \\left( \\frac{1}{T_2} - \\frac{1}{T_1} \\right) = Q \\left( \\frac{T_1 - T_2}{T_1 T_2} \\right)$$
    Since $T_1 > T_2$ and $Q > 0$, the quantity $\\Delta S_{\\text{total}}$ is strictly <strong>positive</strong>:
    $$\\Delta S_{\\text{total}} > 0$$
    <b style="color: ${themeColor};">Thermal Death of the Universe:</b><br/>
    - In every spontaneous event, high-grade organized energy is irreversibly degraded into low-grade dispersed thermal energy.<br/>
    - As universal entropy asymptotically approaches its absolute maximum, all temperature differences across galaxies and stars will equalize ($\Delta T \\to 0$).<br/>
    - At this state of maximum thermodynamic entropy, no heat engine can operate, no chemical reaction can proceed, and no physical work can be extracted: this theoretical ultimate state of thermodynamic standstill is termed the <strong>Thermal Death of the Universe</strong>.
  </div>
</div>

<!-- Q99 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q99: Thermodynamic Comparison: Otto Cycle (Petrol) vs Diesel Cycle</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Compare the ideal Otto cycle (spark-ignition four-stroke petrol engine) with the ideal Diesel cycle (compression-ignition diesel engine) in terms of heat addition mode, compression ratio ($r$), and thermal efficiency expressions.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="background: rgba(38, 198, 218, 0.15); border-bottom: 1.5px solid ${themeColor};">
            <th style="padding: 6px 8px; text-align: left; color: ${themeColor};">Feature</th>
            <th style="padding: 6px 8px; text-align: left; color: ${themeColor};">Otto Cycle (Petrol Engine)</th>
            <th style="padding: 6px 8px; text-align: left; color: ${themeColor};">Diesel Cycle (Diesel Engine)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 6px 8px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">1. Intake Charge</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Air-petrol vapor mixture from carburetor/injector.</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Pure atmospheric air only.</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 6px 8px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">2. Heat Addition Mode</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>Isochoric</strong> (constant volume combustion via spark).</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>Isobaric</strong> (constant pressure combustion via injection).</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">3. Compression Ratio ($r$)</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">$6:1$ to $10:1$ (limited by fuel knocking).</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">$15:1$ to $22:1$ (high compression ratio).</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 6px 8px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">4. Ignition Mechanism</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Electric spark plug ignites mixture.</td>
            <td style="padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.05);">Auto-ignition by hot adiabatically compressed air.</td>
          </tr>
          <tr>
            <td style="padding: 6px 8px; font-weight: bold;">5. Efficiency Formula</td>
            <td style="padding: 6px 8px;">$$\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma - 1}}$$</td>
            <td style="padding: 6px 8px;">$$\\eta_{\\text{Diesel}} = 1 - \\frac{1}{r^{\\gamma - 1}} \\left[ \\frac{r_c^\\gamma - 1}{\\gamma(r_c - 1)} \\right]$$ ($r_c = \\text{cut-off ratio}$).</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br/>
    <b>Practical Realization:</b> For the same compression ratio, Otto cycle is theoretically more efficient than Diesel cycle. However, in practice, diesel engines operate at vastly higher compression ratios ($r \\approx 20$ vs $r \\approx 8$), making real diesel engines significantly more fuel-efficient ($40\\%$ vs $28\\%$) than petrol engines.
  </div>
</div>

<!-- Q100 -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q100: Master Synthesis of Unit VIII: Thermodynamics (06 Marks)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Present a master executive synthesis of Unit VIII: Thermodynamics (06 Marks). Provide an exhaustive comparative matrix summarizing all five thermodynamic processes, state variables, work integrals, internal energy equations, slopes, and Second Law efficiency formulations.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Master Executive Matrix of Unit VIII: Thermodynamics:</b><br/><br/>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="background: rgba(38, 198, 218, 0.15); border-bottom: 2px solid ${themeColor};">
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Process</th>
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Defining Law</th>
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Work Done ($W$)</th>
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Heat Exchange ($Q$)</th>
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Slope ($dP/dV$) & Elasticity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Isochoric</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$V = \\text{const} \\implies dV = 0$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = 0$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$Q = \\Delta U = n C_v \\Delta T$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Slope $= \\infty$ (vertical line)</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Isobaric</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$P = \\text{const} \\implies dP = 0$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = P(V_2 - V_1) = n R \\Delta T$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$Q = n C_p \\Delta T = \\Delta U + W$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Slope $= 0$ (horizontal line)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Isothermal</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$T = \\text{const} \\implies PV = C$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = 2.303 n R T \\log_{10}(V_2 / V_1)$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$Q = W$ (since $\\Delta U = 0$)</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Slope $= -P/V$, $E_\\theta = P$</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Adiabatic</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$dQ = 0 \\implies PV^\\gamma = K$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$Q = 0 \\implies W = -\\Delta U$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Slope $= -\\gamma P/V$, $E_\\phi = \\gamma P$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Cyclic Process</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Closed loop ($1 \\to 2 \\to 1$)</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W_{\\text{net}} = \\text{Area of } P-V \\text{ loop}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$Q_{\\text{net}} = W_{\\text{net}}$ ($\\Delta U = 0$)</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Clockwise: Engine ($W > 0$)</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Carnot Engine</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">2 Isothermal + 2 Adiabatic</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W = Q_1 - Q_2$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\eta = 1 - \\frac{T_2}{T_1} = \\frac{W}{Q_1}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Max theoretical efficiency</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Refrigerator</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Reversed Carnot cycle</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$W_{\\text{in}} = Q_1 - Q_2$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\beta = \\frac{Q_2}{W} = \\frac{T_2}{T_1 - T_2}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\beta = \\frac{1 - \\eta}{\\eta}$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`;

module.exports = { solutionsPart3 };
