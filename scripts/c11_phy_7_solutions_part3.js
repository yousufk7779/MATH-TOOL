// scripts/c11_phy_7_solutions_part3.js
const { themeColor, frac } = require('./c11_phy_7_helpers');

const solutionsPart3 = `
<!-- SECTION C: LONG ANSWER (LA) QUESTIONS (5 MARKS) (Q81 TO Q100) -->
<div style="margin-top: 35px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid ${themeColor};">
  <h2 style="color: ${themeColor}; font-size: 20px; margin: 0;">SECTION C: LONG ANSWER (LA) QUESTIONS (5 MARKS)</h2>
  <p style="color: #94A3B8; font-size: 13px; margin: 4px 0 0 0;">Rigorous step-by-step mathematical proofs, full derivations, comprehensive theoretical frameworks, and board exam derivations across Unit VII.</p>
</div>

<!-- SOLIDS LA DERIVATIONS (Q81 & Q82) -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q81: Complete Stress-Strain Curve for a Metallic Wire Under Tensile Load</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Draw a typical stress versus strain curve for a ductile metallic wire (e.g., mild steel) subjected to an increasing tensile load up to fracture. Clearly identify, mark, and explain the physical significance of all five critical regions and landmark points: (i) Proportional limit, (ii) Elastic limit / Yield point, (iii) Permanent set, (iv) Ultimate tensile strength, and (v) Fracture point.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    When a uniform metallic wire of length $L$ and area $A$ is subjected to gradually increasing tensile tension, the experimental relationship between tensile stress ($\\sigma = F/A$) and tensile strain ($\\epsilon = \\Delta L/L$) displays five characteristic stages:<br/><br/>
    <b style="color: ${themeColor};">1. Region OA (Linear Hooke's Law Region & Proportional Limit A):</b><br/>
    - From origin $O$ to point $A$, the stress-strain curve is a straight line passing through origin.<br/>
    - In this region, <strong>Hooke's Law is strictly obeyed</strong>: $\\text{Stress} \\propto \\text{Strain}$, and the slope of line $OA$ represents Young's modulus ($Y = \\sigma / \\epsilon$).<br/>
    - Point $A$ is called the <strong>Proportionality Limit</strong>. Maximum stress up to which stress remains strictly proportional to strain.<br/><br/>
    <b style="color: ${themeColor};">2. Region AB (Elastic Region & Yield Point B):</b><br/>
    - From $A$ to $B$, stress is no longer proportional to strain (curve bends slightly), but the material remains completely <strong>elastic</strong>.<br/>
    - If the deforming load is completely removed at or before point $B$, the wire retraces its path and returns exactly to its original length $L$ with zero permanent deformation.<br/>
    - Point $B$ is the <strong>Elastic Limit</strong> (or Upper Yield Point). The stress corresponding to point $B$ is termed the <strong>Yield Strength</strong> ($\\sigma_y$) of the metal.<br/><br/>
    <b style="color: ${themeColor};">3. Region BC (Plastic Deformation & Permanent Set):</b><br/>
    - If load is increased beyond $B$, strain increases much faster than stress.<br/>
    - If the deforming force is removed at point $C$, the wire does <strong>not</strong> retrace its path to origin $O$. Instead, it recovers along the parallel dotted line $CO'$, leaving a permanent residual elongation $OO'$ known as a <strong>permanent set</strong> (typically $0.1\\%$ to $0.2\\%$ plastic strain).<br/>
    - In this plastic regime, planes of metal atoms slip permanently over one another via dislocation movement.<br/><br/>
    <b style="color: ${themeColor};">4. Region CD (Strain Hardening & Ultimate Tensile Strength D):</b><br/>
    - Beyond $C$, the material undergoes extensive plastic flow. Atomic dislocations interact, requiring higher stress to produce further deformation (strain hardening).<br/>
    - Point $D$ represents the highest point on the curve, called the <strong>Ultimate Tensile Strength (UTS)</strong> ($\\sigma_u$). It is the maximum nominal stress the material can endure before localized thinning begins.<br/><br/>
    <b style="color: ${themeColor};">5. Region DE (Necking and Fracture Point E):</b><br/>
    - Beyond point $D$, localized cross-sectional thinning ("necking" or constriction) develops rapidly at a weak section.<br/>
    - Even if the external applied force is decreased, the local stress at the constriction spikes until the wire snaps cleanly at point $E$, the <strong>Fracture Point</strong> (Breaking Point).<br/>
    - If the plastic region $B$ to $E$ is wide, the material is <strong>ductile</strong>. If $E$ lies immediately next to $B$, the material is <strong>brittle</strong>.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q82: Calculus Derivation of Elastic Potential Energy and Energy Density</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using integral calculus, derive an expression for the elastic potential energy stored in a stretched wire of length $L$ and cross-sectional area $A$ when extended by an amount $\\Delta L$. Hence deduce that the energy stored per unit volume is equal to $\\frac{1}{2} \\times \\text{stress} \\times \\text{strain} = \\frac{1}{2} Y (\\text{strain})^{2}$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Step 1: Restoring Force at Intermediate Extension $x$:</b><br/>
    Consider a wire of original length $L$ and uniform cross-sectional area $A$ made of a material having Young's modulus $Y$.<br/>
    Let an external stretching force extend the wire by an intermediate elongation $x$ ($0 \\le x \\le \\Delta L$).<br/>
    Tensile strain at this state is $\\epsilon = \\frac{x}{L}$.<br/>
    By Hooke's Law, the internal restoring force $F$ is:
    $$Y = \\frac{F / A}{x / L} = \\frac{F \\cdot L}{A \\cdot x} \\implies F = \\frac{Y A}{L} x$$
    <b style="color: ${themeColor};">Step 2: Work Done for Additional Infinitesimal Extension $dx$:</b><br/>
    To increase the elongation by an infinitesimal amount $dx$ against this restoring force, the work done $dW$ is:
    $$dW = F \\cdot dx = \\left(\\frac{Y A}{L} x\\right) dx$$
    <b style="color: ${themeColor};">Step 3: Total Work Done (Elastic Potential Energy $U$):</b><br/>
    The total work done in stretching the wire from initial elongation $x = 0$ to final elongation $x = \\Delta L$ is obtained by integration:
    $$U = \\int_0^{\\Delta L} dW = \\int_0^{\\Delta L} \\left(\\frac{Y A}{L} x\\right) dx = \\frac{Y A}{L} \\left[ \\frac{x^{2}}{2} \\right]_0^{\\Delta L} = \\frac{1}{2} \\frac{Y A}{L} (\\Delta L)^{2}$$
    Rewriting the terms:
    $$U = \\frac{1}{2} \\left( \\frac{Y A \\Delta L}{L} \\right) \\Delta L = \\frac{1}{2} F_{\\text{final}} \\cdot \\Delta L$$
    $$\\mathbf{U = \\frac{1}{2} F \\cdot \\Delta L}$$
    <b style="color: ${themeColor};">Step 4: Energy Stored Per Unit Volume (Energy Density $u$):</b><br/>
    The total volume of the wire is $V = A \\cdot L$.<br/>
    Dividing total energy $U$ by volume $V$:
    $$u = \\frac{U}{V} = \\frac{\\frac{1}{2} F \\cdot \\Delta L}{A \\cdot L} = \\frac{1}{2} \\left( \\frac{F}{A} \\right) \\left( \\frac{\\Delta L}{L} \\right)$$
    Since $\\frac{F}{A} = \\text{Stress}$ and $\\frac{\\Delta L}{L} = \\text{Strain}$:
    $$\\mathbf{u = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}}$$
    Since $\\text{Stress} = Y \\times \\text{Strain}$, we also have:
    $$\\mathbf{u = \\frac{1}{2} Y (\\text{Strain})^{2} = \\frac{1}{2} \\frac{(\\text{Stress})^{2}}{Y}}$$
    This elastic potential energy represents the work done against interatomic electromagnetic forces and is completely recovered when the load is removed.
  </div>
</div>

<!-- FLUIDS LA DERIVATIONS (Q83 to Q93) -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q83: State and Prove Pascal's Law for Transmission of Fluid Pressure</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Pascal's law of transmission of fluid pressure. Prove it rigorously by considering the equilibrium of a tiny right-triangular prismatic fluid element at rest inside the fluid. Derive the mechanical advantage formula of a hydraulic lift.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statement:</b> Pascal's law states that whenever an external pressure is applied at any point of an enclosed, incompressible fluid at rest, this pressure is transmitted undiminished and equally in all directions throughout the fluid and to the walls of the containing vessel.<br/><br/>
    <b style="color: ${themeColor};">Proof (Prismatic Element):</b><br/>
    1. Consider an infinitesimal right-triangular prism-shaped fluid element of width $b$ perpendicular to the page, with rectangular faces $ABFE$ (area $A_a$), $CDEF$ (area $A_b$), and slanted face $ABCD$ (area $A_c$).<br/>
    2. Let the fluid pressures acting normally on these faces be $P_a, P_b, P_c$.<br/>
    3. The forces acting normal to the three faces are:
    $$F_a = P_a A_a, \\quad F_b = P_b A_b, \\quad F_c = P_c A_c$$
    4. By geometry, if angle of the wedge is $\\theta$:
    $$A_a = A_c \\sin\\theta, \\quad A_b = A_c \\cos\\theta$$
    5. Since the fluid element is in static equilibrium, net horizontal and net vertical forces must each be zero:<br/>
    - Horizontal equilibrium:
    $$F_a - F_c \\sin\\theta = 0 \\implies P_a A_a = P_c A_c \\sin\\theta$$
    Substituting $A_a = A_c \\sin\\theta$:
    $$P_a (A_c \\sin\\theta) = P_c A_c \\sin\\theta \\implies P_a = P_c$$
    - Vertical equilibrium (ignoring weight of infinitesimal element):
    $$F_b - F_c \\cos\\theta = 0 \\implies P_b A_b = P_c A_c \\cos\\theta$$
    Substituting $A_b = A_c \\cos\\theta$:
    $$P_b (A_c \\cos\\theta) = P_c A_c \\cos\\theta \\implies P_b = P_c$$
    6. Equating both results:
    $$P_a = P_b = P_c$$
    Since the orientation $\\theta$ of the prismatic element is completely arbitrary, pressure at any given point in a static fluid is <strong>isotropic (identical in all directions)</strong>.<br/><br/>
    <b style="color: ${themeColor};">Hydraulic Lift Mechanical Advantage:</b><br/>
    For two pistons of areas $A_1$ (small) and $A_2$ (large) connected by a fluid tube, an applied force $F_1$ generates pressure $P = F_1 / A_1$. Transmission of this pressure produces output force $F_2 = P A_2 = F_1 (A_2 / A_1)$.<br/>
    The mechanical advantage is:
    $$MA = \\frac{F_2}{F_1} = \\frac{A_2}{A_1} = \\left(\\frac{D_2}{D_1}\\right)^{2}$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q84: Variation of Fluid Pressure with Depth and Hydrostatic Paradox</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Derive an expression for the variation of hydrostatic pressure with depth $h$ in a static fluid of uniform density $\\rho$ under gravity. Clearly define gauge pressure versus absolute pressure, and resolve the famous "Hydrostatic Paradox".</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Derivation:</b><br/>
    1. Consider a static fluid of uniform density $\\rho$ in a container under gravity $g$.<br/>
    2. Imagine an imaginary vertical cylindrical fluid element of cross-sectional area $A$ and height $h$, with its top face at depth $y_1$ (pressure $P_1$) and bottom face at depth $y_2$ (pressure $P_2$), such that $y_2 - y_1 = h$.<br/>
    3. The forces acting on this vertical fluid cylinder are:<br/>
       - Downward force on top face: $F_1 = P_1 A$<br/>
       - Upward force on bottom face: $F_2 = P_2 A$<br/>
       - Downward gravitational weight of fluid: $W = m g = (\\rho \\cdot V) g = (\\rho A h) g$<br/>
       - Horizontal forces on the curved walls cancel each other symmetrically.<br/>
    4. Since the fluid element is in static equilibrium, the net vertical force is zero:
    $$\\sum F_y = 0 \\implies F_2 - F_1 - W = 0$$
    $$P_2 A - P_1 A - \\rho A h g = 0$$
    Dividing both sides by area $A$:
    $$P_2 - P_1 = \\rho g h$$
    5. If the top face is chosen at the open free liquid surface where pressure is atmospheric pressure ($P_1 = P_0$), then the absolute pressure $P$ at depth $h$ is:
    $$\\mathbf{P = P_0 + \\rho g h}$$
    <b style="color: ${themeColor};">Gauge Pressure:</b> The excess pressure above atmospheric pressure is called <strong>gauge pressure</strong>:
    $$P_g = P - P_0 = \\rho g h$$
    <b style="color: ${themeColor};">Hydrostatic Paradox:</b><br/>
    Consider vessels of completely different shapes (cylindrical, conical, flask-like) having identical bottom base areas $A$ and filled with liquid to the identical vertical depth $h$. Although the total weight of liquid in each vessel is vastly different, the liquid pressure at the base depends <strong>only on vertical depth $h$</strong> ($P = P_0 + \\rho g h$) and is independent of vessel shape or total liquid volume.<br/>
    Thus, the downward force exerted on the base ($F = P \\cdot A$) is identical in all vessels. The difference between the liquid weight and the bottom force is supported by the vertical components of the reaction forces exerted by the sloping container walls.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q85: Dimensional Derivation of Stokes' Law and Terminal Velocity</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using dimensional analysis, derive Stokes' Law for the viscous drag force on a smooth spherical body of radius $r$ moving with velocity $v$ through a fluid of coefficient of viscosity $\\eta$. Hence, derive the complete formula for the terminal velocity of the sphere falling through the fluid.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Part 1: Dimensional Derivation of Stokes' Law:</b><br/>
    Assume the viscous drag force $F_v$ depends on: (i) coefficient of viscosity $\\eta^a$, (ii) radius of sphere $r^b$, and (iii) velocity $v^c$:
    $$F_v = k \\eta^a r^b v^c$$
    Dimensions of the quantities:<br/>
    $[F_v] = [\\text{M}^{1} \\text{L}^{1} \\text{T}^{-2}]$<br/>
    $[\\eta] = [\\text{M}^{1} \\text{L}^{-1} \\text{T}^{-1}]$<br/>
    $[r] = [\\text{L}^{1}]$<br/>
    $[v] = [\\text{L}^{1} \\text{T}^{-1}]$<br/>
    Equating dimensions on both sides:
    $$[\\text{M}^{1} \\text{L}^{1} \\text{T}^{-2}] = [\\text{M}^{1} \\text{L}^{-1} \\text{T}^{-1}]^a [\\text{L}^{1}]^b [\\text{L}^{1} \\text{T}^{-1}]^c = [\\text{M}^a \\text{L}^{-a + b + c} \\text{T}^{-a - c}]$$
    Comparing exponents of fundamental units:<br/>
    For $\\text{M}$: $a = 1$<br/>
    For $\\text{T}$: $-a - c = -2 \\implies -1 - c = -2 \\implies c = 1$<br/>
    For $\\text{L}$: $-a + b + c = 1 \\implies -1 + b + 1 = 1 \\implies b = 1$<br/>
    Experimentally, Stokes determined the dimensionless proportionality constant $k = 6\\pi$.<br/>
    Therefore, <strong>Stokes' Law</strong> is:
    $$\\mathbf{F_v = 6\\pi \\eta r v}$$
    <b style="color: ${themeColor};">Part 2: Terminal Velocity Derivation:</b><br/>
    Consider a sphere of radius $r$ and density $\\rho$ falling vertically through an extensive fluid medium of density $\\sigma$ and viscosity $\\eta$.<br/>
    Three forces act on the sphere:<br/>
    1. Downward gravitational weight:
    $$W = m g = \\left(\\frac{4}{3}\\pi r^{3}\\rho\\right) g$$
    2. Upward buoyant force (Archimedes' principle):
    $$F_b = \\left(\\frac{4}{3}\\pi r^{3}\\sigma\\right) g$$
    3. Upward viscous retarding force:
    $$F_v = 6\\pi \\eta r v$$
    As velocity increases, $F_v$ increases until net force becomes zero ($\sum F = 0$), and the sphere attains a constant maximum velocity called <strong>terminal velocity</strong> ($v_t$):
    $$W = F_b + F_v$$
    $$\\frac{4}{3}\\pi r^{3}\\rho g = \\frac{4}{3}\\pi r^{3}\\sigma g + 6\\pi \\eta r v_t$$
    $$6\\pi \\eta r v_t = \\frac{4}{3}\\pi r^{3}(\\rho - \\sigma) g$$
    Dividing both sides by $6\\pi \\eta r$:
    $$\\mathbf{v_t = \\frac{2}{9} \\frac{r^{2}(\\rho - \\sigma)g}{\\eta}}$$
    Note: If $\\rho > \\sigma$ (lead shot in oil), $v_t > 0$ (sphere falls). If $\\rho < \\sigma$ (air bubble in water), $v_t < 0$ (bubble rises with terminal speed).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q86: State and Prove the Equation of Continuity for Steady Fluid Flow</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the Equation of Continuity for steady streamline flow of an incompressible fluid. Prove it from the principle of conservation of mass for flow through a non-uniform pipe. Discuss its physical implications.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statement:</b> For steady, streamline, non-viscous flow of an incompressible fluid through a pipe of varying cross-section, the product of cross-sectional area $A$ and fluid flow speed $v$ remains constant at every point along the streamline:
    $$A \\cdot v = \\text{constant} \\quad \\text{or} \\quad A_1 v_1 = A_2 v_2$$
    <b style="color: ${themeColor};">Proof:</b><br/>
    1. Consider an incompressible fluid of uniform density $\\rho$ undergoing steady streamline flow through a tube of non-uniform cross-section.<br/>
    2. Let cross-sectional area, fluid velocity, and density at section 1 be $A_1, v_1, \\rho_1$ and at section 2 be $A_2, v_2, \\rho_2$.<br/>
    3. In a small time interval $\\Delta t$:<br/>
       - Fluid entering section 1 travels a distance $\\Delta x_1 = v_1 \\Delta t$.<br/>
       - Volume of fluid entering: $\\Delta V_1 = A_1 \\Delta x_1 = A_1 v_1 \\Delta t$.<br/>
       - Mass of fluid entering: $\\Delta m_1 = \\rho_1 \\Delta V_1 = \\rho_1 A_1 v_1 \\Delta t$.<br/>
       - Similarly, mass of fluid leaving section 2: $\\Delta m_2 = \\rho_2 A_2 v_2 \\Delta t$.<br/>
    4. By the <strong>Law of Conservation of Mass</strong>, since fluid is neither created nor destroyed and the flow is steady (no accumulation of fluid inside the pipe):
    $$\\Delta m_1 = \\Delta m_2 \\implies \\rho_1 A_1 v_1 \\Delta t = \\rho_2 A_2 v_2 \\Delta t$$
    $$\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$$
    5. For an <strong>incompressible fluid</strong>, density remains constant everywhere ($\\rho_1 = \\rho_2 = \\rho$):
    $$A_1 v_1 = A_2 v_2 \\implies \\mathbf{A \\cdot v = \\text{constant}}$$
    <b style="color: ${themeColor};">Physical Implications:</b><br/>
    - Since $v \\propto 1/A$, fluid flows faster through narrow constrictions and slows down in broader regions.<br/>
    - When water emerges from a household tap, the stream accelerates downward under gravity ($v$ increases), causing its cross-sectional area $A$ to narrow continuously into a sharp tapering jet.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q87: State and Derive Bernoulli's Theorem by Work-Energy Theorem</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Bernoulli's theorem for an ideal fluid. State all simplifying assumptions made in its derivation. Prove Bernoulli's equation rigorously by applying the work-energy theorem to a fluid element flowing through an inclined pipe of non-uniform cross-section.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Statement:</b> For the steady, streamline, irrotational flow of an ideal (incompressible and non-viscous) fluid, the total mechanical energy per unit volume—comprising pressure energy, kinetic energy, and gravitational potential energy—remains constant at every point along a streamline:
    $$P + \\frac{1}{2}\\rho v^{2} + \\rho g h = \\text{constant}$$
    <b style="color: ${themeColor};">Assumptions:</b> (i) Incompressible fluid (constant density $\\rho$), (ii) Non-viscous (zero internal shear friction), (iii) Steady streamline flow, (iv) Irrotational flow.<br/><br/>
    <b style="color: ${themeColor};">Derivation:</b><br/>
    1. Consider fluid flowing through an inclined tube between section 1 (area $A_1$, height $h_1$, pressure $P_1$, speed $v_1$) and section 2 (area $A_2$, height $h_2$, pressure $P_2$, speed $v_2$).<br/>
    2. In time interval $\\Delta t$, mass $\\Delta m = \\rho \\Delta V = \\rho A_1 v_1 \\Delta t = \\rho A_2 v_2 \\Delta t$ enters at section 1 and leaves at section 2.<br/>
    3. <strong>Work done by pressure forces:</strong><br/>
       - At entrance: Force $F_1 = P_1 A_1$, displacement $\\Delta x_1 = v_1 \\Delta t$. Work done ON fluid:
       $$W_1 = F_1 \\Delta x_1 = P_1 A_1 v_1 \\Delta t = P_1 \\Delta V$$
       - At exit: Force $F_2 = P_2 A_2$ opposes flow, displacement $\\Delta x_2 = v_2 \\Delta t$. Work done BY fluid:
       $$W_2 = -P_2 A_2 v_2 \\Delta t = -P_2 \\Delta V$$
       - Net external work done on fluid element:
       $$W_{\\text{net}} = W_1 + W_2 = (P_1 - P_2)\\Delta V$$
    4. <strong>Change in Kinetic Energy:</strong>
    $$\\Delta K = \\frac{1}{2}\\Delta m v_2^{2} - \\frac{1}{2}\\Delta m v_1^{2} = \\frac{1}{2}(\\rho \\Delta V)(v_2^{2} - v_1^{2})$$
    5. <strong>Change in Potential Energy:</strong>
    $$\\Delta U = \\Delta m g h_2 - \\Delta m g h_1 = (\\rho \\Delta V) g (h_2 - h_1)$$
    6. By the <strong>Work-Energy Theorem</strong> ($W_{\\text{net}} = \\Delta K + \\Delta U$):
    $$(P_1 - P_2)\\Delta V = \\frac{1}{2}\\rho \\Delta V (v_2^{2} - v_1^{2}) + \\rho \\Delta V g (h_2 - h_1)$$
    Cancelling common volume factor $\\Delta V$:
    $$P_1 - P_2 = \\frac{1}{2}\\rho v_2^{2} - \\frac{1}{2}\\rho v_1^{2} + \\rho g h_2 - \\rho g h_1$$
    Rearranging terms with subscript 1 on left and subscript 2 on right:
    $$\\mathbf{P_1 + \\frac{1}{2}\\rho v_1^{2} + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^{2} + \\rho g h_2}$$
    Dividing throughout by $\\rho g$ yields the Head Form:
    $$\\frac{P}{\\rho g} + \\frac{v^{2}}{2g} + h = \\text{constant} \\quad (\\text{Pressure Head} + \\text{Velocity Head} + \\text{Datum Head})$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q88: Working Principle and Mathematical Derivation of the Venturimeter</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Describe the construction, working principle, and complete mathematical derivation of a Venturimeter used to measure the rate of flow of an incompressible liquid through a pipe.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Construction:</b> A Venturimeter consists of three parts inserted into a pipeline: (i) a short converging cone, (ii) a narrow cylindrical throat, and (iii) a gradual diverging cone. A differential manometer containing a manometric liquid of density $\\rho_m$ (or vertical piezometer tubes) connects the main inlet pipe to the throat.<br/><br/>
    <b style="color: ${themeColor};">Mathematical Derivation:</b><br/>
    Let cross-sectional area and fluid speed at inlet (1) be $A_1$ and $v_1$, and at throat (2) be $A_2$ and $v_2$. The pipe is horizontal ($h_1 = h_2$).<br/>
    1. By the <strong>Equation of Continuity</strong>:
    $$A_1 v_1 = A_2 v_2 \\implies v_2 = \\left(\\frac{A_1}{A_2}\\right) v_1$$
    2. By <strong>Bernoulli's Equation</strong> for a horizontal tube:
    $$P_1 + \\frac{1}{2}\\rho v_1^{2} = P_2 + \\frac{1}{2}\\rho v_2^{2}$$
    $$P_1 - P_2 = \\frac{1}{2}\\rho (v_2^{2} - v_1^{2})$$
    3. Substituting $v_2 = \\frac{A_1}{A_2} v_1$:
    $$P_1 - P_2 = \\frac{1}{2}\\rho \\left[ \\left(\\frac{A_1}{A_2}\\right)^{2} v_1^{2} - v_1^{2} \\right] = \\frac{1}{2}\\rho v_1^{2} \\left[ \\frac{A_1^{2} - A_2^{2}}{A_2^{2}} \\right]$$
    4. The pressure difference is measured by the height difference $h$ in the differential manometer:
    $$P_1 - P_2 = (\\rho_m - \\rho) g h \\quad (\\text{or } \\rho g h \\text{ if using fluid itself})$$
    Equating the pressure differences:
    $$\\rho g h = \\frac{1}{2}\\rho v_1^{2} \\left( \\frac{A_1^{2} - A_2^{2}}{A_2^{2}} \\right)$$
    Solving for $v_1$:
    $$v_1^{2} = \\frac{2gh A_2^{2}}{A_1^{2} - A_2^{2}} \\implies v_1 = A_2 \\sqrt{\\frac{2gh}{A_1^{2} - A_2^{2}}}$$
    5. The volume discharge rate $Q$ (volume of liquid flowing per second) is:
    $$\\mathbf{Q = A_1 v_1 = \\frac{A_1 A_2}{\\sqrt{A_1^{2} - A_2^{2}}} \\sqrt{2gh}}$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q89: Derive Torricelli's Law of Efflux and Calculate Horizontal Range</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State and derive Torricelli's Law of Efflux for a liquid escaping through a small orifice in a tank open to the atmosphere. Find: (i) speed of efflux, (ii) time of flight to hit the ground, and (iii) the condition for maximum horizontal range on the ground.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Derivation:</b><br/>
    1. Consider a large open tank filled with liquid of density $\\rho$ to a total height $H$. A small hole of area $a$ is punched at depth $h$ below the free surface (height from bottom is $y = H - h$).<br/>
    2. Let top free surface have area $A$ and speed $v_1$; orifice has area $a$ and efflux speed $v_2$. Both top surface and hole are open to atmospheric pressure $P_0$.<br/>
    3. By continuity, $v_1 = (a/A) v_2$. Since $A \\gg a$, $v_1 \\approx 0$.<br/>
    4. Applying Bernoulli's equation between top surface (height $H$) and orifice (height $H - h$):
    $$P_0 + \\frac{1}{2}\\rho v_1^{2} + \\rho g H = P_0 + \\frac{1}{2}\\rho v_2^{2} + \\rho g (H - h)$$
    Setting $v_1 \\approx 0$:
    $$\\rho g H = \\frac{1}{2}\\rho v_2^{2} + \\rho g H - \\rho g h \\implies \\frac{1}{2}\\rho v_2^{2} = \\rho g h$$
    $$\\mathbf{v_2 = \\sqrt{2gh}}$$
    This is <strong>Torricelli's Law</strong>: the velocity of efflux is identical to the velocity acquired by a freely falling body dropped from height $h$.<br/><br/>
    <b style="color: ${themeColor};">Horizontal Range ($R$):</b><br/>
    The emerging jet leaves horizontally with speed $v = \\sqrt{2gh}$ from a height $y = H - h$ above the ground.<br/>
    - Time of flight: $t = \\sqrt{\\frac{2y}{g}} = \\sqrt{\\frac{2(H - h)}{g}}$<br/>
    - Horizontal range:
    $$R = v \\cdot t = \\sqrt{2gh} \\times \\sqrt{\\frac{2(H - h)}{g}} = 2\\sqrt{h(H - h)}$$
    <b style="color: ${themeColor};">Condition for Maximum Range:</b><br/>
    To maximize $R$, differentiate $f(h) = h(H - h) = Hh - h^{2}$ with respect to $h$:
    $$\\frac{df}{dh} = H - 2h = 0 \\implies h = \\frac{H}{2}$$
    The horizontal range is maximum when the hole is punched at <strong>mid-depth ($h = H/2$)</strong>.<br/>
    Maximum horizontal range:
    $$R_{\\max} = 2\\sqrt{\\left(\\frac{H}{2}\\right)\\left(H - \\frac{H}{2}\\right)} = 2 \\times \\frac{H}{2} = H$$
    The maximum range equals the total liquid height $H$.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q90: Dynamic Lift on an Aerofoil and Magnus Effect: Full Comparative Derivation</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Provide a complete physical and mathematical explanation of: (i) Aerodynamic lift on an aeroplane wing (aerofoil), and (ii) Magnus effect on a spinning ball. Show how both phenomena are direct manifestations of Bernoulli's principle and circulation.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Part (i): Aerodynamic Lift on an Aerofoil:</b><br/>
    1. An aeroplane wing has an asymmetrical cross-section (aerofoil) with a curved upper surface and flat lower surface, inclined at a slight angle of attack $\\alpha$.<br/>
    2. As the wing moves forward through air, streamlines above the wing are crowded together, forcing air to accelerate over the curved crest ($v_1 > v_2$).<br/>
    3. According to Bernoulli's equation (neglecting small altitude difference $\\rho g h$ across wing thickness):
    $$P_1 + \\frac{1}{2}\\rho v_1^{2} = P_2 + \\frac{1}{2}\\rho v_2^{2}$$
    $$P_2 - P_1 = \\frac{1}{2}\\rho (v_1^{2} - v_2^{2})$$
    Since $v_1 > v_2$, the pressure below the wing ($P_2$) is significantly greater than pressure above ($P_1$).<br/>
    4. The net upward aerodynamic lifting force across wing area $A$ is:
    $$F_{\\text{lift}} = (P_2 - P_1) A = \\frac{1}{2}\\rho A (v_1^{2} - v_2^{2})$$
    When $F_{\\text{lift}}$ balances the aircraft's total weight $Mg$, stable flight is sustained.<br/><br/>
    <b style="color: ${themeColor};">Part (ii): Magnus Effect on a Spinning Ball:</b><br/>
    1. Consider a ball translating forward with velocity $v$ while spinning about a horizontal axis with angular velocity $\\omega$.<br/>
    2. Air has viscosity; hence a thin boundary layer of air is dragged into circular rotation (vorticity/circulation $\\Gamma$) along with the ball's surface.<br/>
    3. On the upper side of the ball, the rotational surface velocity opposes the oncoming air stream:
    $$v_{\\text{top}} = v - \\omega r$$
    4. On the bottom side, the rotational surface velocity is in the same direction as the oncoming air stream:
    $$v_{\\text{bottom}} = v + \\omega r$$
    5. By Bernoulli's principle:
    $$P_{\\text{top}} + \\frac{1}{2}\\rho (v - \\omega r)^{2} = P_{\\text{bottom}} + \\frac{1}{2}\\rho (v + \\omega r)^{2}$$
    $$P_{\\text{top}} - P_{\\text{bottom}} = \\frac{1}{2}\\rho [(v + \\omega r)^{2} - (v - \\omega r)^{2}] = 2\\rho v \\omega r$$
    6. Because $P_{\\text{top}} > P_{\\text{bottom}}$, an upward downward net transverse force acts on the ball (Kutta-Joukowski lift force $F = \\rho v \\Gamma$), making the ball dive sharply (topspin) or bend sideways (sidespin swing).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q91: Surface Energy and Surface Tension: Proof that $W = T \\Delta A$</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define surface tension and surface energy from molecular theory. Prove rigorously that surface tension is numerically and dimensionally equal to the surface energy per unit area ($W = T \\Delta A$) by considering a movable wire on a U-shaped rectangular wire frame supporting a liquid film.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Molecular Origin:</b> A molecule in the bulk of a liquid is attracted equally in all directions by neighboring molecules, resulting in zero net force. A molecule in the surface layer experiences a net inward attractive force toward the liquid interior. To bring a molecule from the interior to the surface against this inward force, work must be done. This work is stored as potential energy called <strong>surface energy</strong>.<br/><br/>
    <b style="color: ${themeColor};">Derivation ($W = T \\Delta A$):</b><br/>
    1. Consider a U-shaped horizontal metal wire frame supporting a thin soap film, with a frictionless movable cross-wire of length $l$ sliding along its arms.<br/>
    2. Because a liquid film has <strong>two free surfaces</strong> (top and bottom), surface tension exerts an inward contracting force on the movable wire given by:
    $$F = T \\times (2l)$$
    3. To displace the wire outward slowly by a small distance $\\Delta x$ at constant speed without accelerating, an equal external force $F_{\\text{ext}} = 2 T l$ must be applied.<br/>
    4. The work done by this external force is:
    $$W = F_{\\text{ext}} \\cdot \\Delta x = (2 T l) \\cdot \\Delta x = T \\cdot (2 l \\Delta x)$$
    5. Here, $l \\Delta x$ is the increase in area of one face of the film. Since the film has two faces, the total increase in surface area is:
    $$\\Delta A = 2 l \\Delta x$$
    6. Substituting $\\Delta A$ into the work equation:
    $$\\mathbf{W = T \\cdot \\Delta A} \\implies \\mathbf{T = \\frac{W}{\\Delta A}}$$
    <b style="color: ${themeColor};">Conclusion:</b> Surface tension $T$ equals the work done per unit increase in surface area, which is precisely the <strong>surface energy per unit area</strong>. Both have the same SI unit: $\\text{N/m} = \\text{J/m}^{2}$ and identical dimensional formula $[\\text{M}^{1} \\text{L}^{0} \\text{T}^{-2}]$.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q92: Rigorous Derivation of Excess Pressure Inside Drops and Bubbles</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Using the principle of virtual work (surface energy method), derive the mathematical expressions for the excess pressure inside: (i) a spherical liquid drop of radius $R$, and (ii) a spherical soap bubble of radius $R$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Part (i): Excess Pressure Inside a Spherical Liquid Drop:</b><br/>
    1. Consider a spherical liquid drop of radius $R$ and surface tension $T$. Let the internal pressure be $P_i$ and external atmospheric pressure be $P_o$. The excess pressure is $\\Delta P = P_i - P_o$.<br/>
    2. Imagine the drop expands radially by an infinitesimal virtual displacement $\\Delta R$ under this excess pressure.<br/>
    3. Work done by the excess pressure force during expansion:
    $$W = \\text{Force} \\times \\Delta R = (\\Delta P \\cdot A) \\Delta R = \\Delta P (4\\pi R^{2}) \\Delta R$$
    4. Initial surface area of drop: $A_1 = 4\\pi R^{2}$.<br/>
       Expanded surface area: $A_2 = 4\\pi (R + \\Delta R)^{2} = 4\\pi (R^{2} + 2R\\Delta R + \\Delta R^{2}) \\approx 4\\pi R^{2} + 8\\pi R \\Delta R$.<br/>
       Increase in surface area:
       $$\\Delta A = A_2 - A_1 = 8\\pi R \\Delta R$$
    5. Increase in surface energy of the drop:
    $$\\Delta U = T \\cdot \\Delta A = T (8\\pi R \\Delta R)$$
    6. By conservation of energy, work done equals the increase in surface energy ($W = \\Delta U$):
    $$\\Delta P (4\\pi R^{2}) \\Delta R = T (8\\pi R \\Delta R)$$
    $$\\mathbf{\\Delta P_{\\text{drop}} = \\frac{2T}{R}}$$
    <b style="color: ${themeColor};">Part (ii): Excess Pressure Inside a Spherical Soap Bubble:</b><br/>
    1. A soap bubble has <strong>two free surfaces</strong> (inner air-film interface and outer film-air interface).<br/>
    2. Total increase in surface area during expansion by $\\Delta R$:
    $$\\Delta A_{\\text{total}} = 2 \\times (8\\pi R \\Delta R) = 16\\pi R \\Delta R$$
    3. Increase in surface energy:
    $$\\Delta U = T \\cdot \\Delta A_{\\text{total}} = 16\\pi R T \\Delta R$$
    4. Equating work done $W = \\Delta P (4\\pi R^{2}) \\Delta R$ to $\\Delta U$:
    $$\\Delta P (4\\pi R^{2}) \\Delta R = 16\\pi R T \\Delta R$$
    $$\\mathbf{\\Delta P_{\\text{bubble}} = \\frac{4T}{R}}$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q93: Angle of Contact and Derivation of Capillary Ascent Formula (Ascent Formula)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> What is meant by angle of contact? Explain why the meniscus of water in glass is concave while that of mercury in glass is convex. Derive the capillary ascent formula ($h = \\frac{2T\\cos\\theta}{r\\rho g}$) using the balance of forces method.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Angle of Contact ($\\theta$):</b> The angle enclosed between the tangent drawn to the liquid surface at the point of contact and the solid surface inside the liquid is called the <strong>angle of contact</strong>.<br/>
    - If adhesive force ($F_a$) between liquid and solid exceeds cohesive force ($F_c / \\sqrt{2}$), the resultant force pulls toward the solid; the liquid wets the solid, forming a <strong>concave meniscus</strong> with an acute angle $\\theta < 90^{\\circ}$ (e.g., water in glass, $\\theta \\approx 0^{\\circ}$).<br/>
    - If cohesive force dominates ($F_c / \\sqrt{2} > F_a$), the liquid does not wet the solid, forming a <strong>convex meniscus</strong> with an obtuse angle $\\theta > 90^{\\circ}$ (e.g., mercury in glass, $\\theta \\approx 138^{\\circ}$).<br/><br/>
    <b style="color: ${themeColor};">Derivation of Capillary Ascent Formula:</b><br/>
    1. Consider a clean glass capillary tube of internal bore radius $r$ dipped vertically into water of density $\\rho$ and surface tension $T$. Water wets the glass ($\\theta < 90^{\\circ}$) and rises to equilibrium height $h$.<br/>
    2. At the line of contact along the inner circular circumference of the tube ($L = 2\\pi r$), surface tension $T$ acts tangential to the liquid meniscus at angle $\\theta$ to the vertical glass wall.<br/>
    3. Resolving surface tension force into components:<br/>
       - Horizontal radial components ($T \\sin\\theta$) act outward symmetrically in all directions around the circle and cancel each other completely.<br/>
       - Vertical upward components ($T \\cos\\theta$) add up along the entire circumference of length $2\\pi r$:
       $$F_{\\text{up}} = (T \\cos\\theta) \\times (2\\pi r) = 2\\pi r T \\cos\\theta$$
    4. This upward force supports the downward gravitational weight of the elevated liquid column of height $h$ (neglecting the tiny volume in the curved meniscus):
    $$W = m g = (\\text{Volume} \\times \\rho) g = (\\pi r^{2} h \\rho) g$$
    5. In static equilibrium, upward force equals downward weight:
    $$F_{\\text{up}} = W \\implies 2\\pi r T \\cos\\theta = \\pi r^{2} h \\rho g$$
    Dividing both sides by $\\pi r$:
    $$2 T \\cos\\theta = r h \\rho g$$
    $$\\mathbf{h = \\frac{2T\\cos\\theta}{r\\rho g}}$$
    This is the celebrated <strong>Ascent Formula</strong>. It proves Jurin's Law ($h \\propto 1/r$): liquid rises higher in narrower capillaries.
  </div>
</div>

<!-- THERMAL LA DERIVATIONS (Q94 to Q100) -->
<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q94: Thermal Expansion: Definitions and Exact Proof that $\\alpha : \\beta : \\gamma = 1 : 2 : 3$</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Define the coefficients of linear expansion ($\\alpha$), superficial expansion ($\\beta$), and cubical expansion ($\\gamma$) of an isotropic solid. Derive mathematically the exact relations connecting them, and prove that $\\alpha : \\beta : \\gamma = 1 : 2 : 3$.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Definitions:</b><br/>
    1. <strong>Coefficient of Linear Expansion ($\\alpha$):</strong> Fractional increase in length per degree rise in temperature:
    $$\\alpha = \\frac{\\Delta L}{L_0 \\Delta T} \\implies L = L_0 (1 + \\alpha \\Delta T)$$
    2. <strong>Coefficient of Superficial Expansion ($\\beta$):</strong> Fractional increase in area per degree rise in temperature:
    $$\\beta = \\frac{\\Delta A}{A_0 \\Delta T} \\implies A = A_0 (1 + \\beta \\Delta T)$$
    3. <strong>Coefficient of Cubical Expansion ($\\gamma$):</strong> Fractional increase in volume per degree rise in temperature:
    $$\\gamma = \\frac{\\Delta V}{V_0 \\Delta T} \\implies V = V_0 (1 + \\gamma \\Delta T)$$
    All three have the SI unit $\\text{K}^{-1}$ (or $^{\\circ}\\text{C}^{-1}$).<br/><br/>
    <b style="color: ${themeColor};">Proof of $\\beta = 2\\alpha$:</b><br/>
    Consider an isotropic square sheet of side $L_0$ and initial area $A_0 = L_0^{2}$.<br/>
    Upon heating by $\\Delta T$, new side is $L = L_0(1 + \\alpha \\Delta T)$.<br/>
    New area:
    $$A = L^{2} = L_0^{2}(1 + \\alpha \\Delta T)^{2} = A_0 (1 + 2\\alpha \\Delta T + \\alpha^{2}\\Delta T^{2})$$
    Since $\\alpha \\approx 10^{-5}\\text{ K}^{-1}$, the term $\\alpha^{2}\\Delta T^{2} \\ll 1$ and is neglected:
    $$A \\approx A_0 (1 + 2\\alpha \\Delta T)$$
    Comparing with $A = A_0 (1 + \\beta \\Delta T)$ gives:
    $$\\mathbf{\\beta = 2\\alpha}$$
    <b style="color: ${themeColor};">Proof of $\\gamma = 3\\alpha$:</b><br/>
    Consider a cube of side $L_0$ and initial volume $V_0 = L_0^{3}$.<br/>
    Upon heating by $\\Delta T$, new volume is:
    $$V = L^{3} = L_0^{3}(1 + \\alpha \\Delta T)^{3} = V_0 (1 + 3\\alpha \\Delta T + 3\\alpha^{2}\\Delta T^{2} + \\alpha^{3}\\Delta T^{3})$$
    Neglecting higher powers of $\\alpha$:
    $$V \\approx V_0 (1 + 3\\alpha \\Delta T)$$
    Comparing with $V = V_0 (1 + \\gamma \\Delta T)$ gives:
    $$\\mathbf{\\gamma = 3\\alpha}$$
    <b style="color: ${themeColor};">Conclusion:</b>
    $$\\alpha : \\beta : \\gamma = \\alpha : 2\\alpha : 3\\alpha = \\mathbf{1 : 2 : 3}$$
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q95: Anomalous Expansion of Water, Hope's Apparatus, and Aquatic Ecology</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Discuss the anomalous expansion of water between $0^{\\circ}\\text{C}$ and $4^{\\circ}\\text{C}$. Describe Hope's experiment and explain why ponds and lakes freeze from top to bottom during severe winters, preserving aquatic flora and fauna.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Anomalous Expansion:</b><br/>
    When water at $0^{\\circ}\\text{C}$ is heated, its volume contracts up to $4^{\\circ}\\text{C}$, reaching a minimum volume and a <strong>maximum density of $1000\\text{ kg/m}^{3}$ at $4^{\\circ}\\text{C}$</strong>. Above $4^{\\circ}\\text{C}$, water expands normally like other liquids.<br/><br/>
    <b style="color: ${themeColor};">Hope's Apparatus Demonstration:</b><br/>
    1. Hope's apparatus consists of a tall metal cylinder of water fitted with two thermometers: $T_1$ at the top and $T_2$ at the bottom. A central trough contains a freezing mixture of ice and salt.<br/>
    2. As water in the central region cools toward $4^{\\circ}\\text{C}$, its density increases. This heavy water sinks to the bottom, causing the lower thermometer $T_2$ to rapidly drop to $4^{\\circ}\\text{C}$.<br/>
    3. On further cooling below $4^{\\circ}\\text{C}$, the water becomes lighter (density decreases). This cold water floats to the top, causing the upper thermometer $T_1$ to fall to $0^{\\circ}\\text{C}$ and form ice at the surface, while the bottom thermometer $T_2$ remains steady at $4^{\\circ}\\text{C}$.<br/><br/>
    <b style="color: ${themeColor};">Preservation of Aquatic Life in Winter:</b><br/>
    1. In severe winter, atmospheric air above a lake cools toward $0^{\\circ}\\text{C}$.<br/>
    2. Surface water cools to $4^{\\circ}\\text{C}$, becomes maximally dense, and sinks to the lake bed. Convection continues until the entire lake water reaches $4^{\\circ}\\text{C}$.<br/>
    3. As surface water cools further from $4^{\\circ}\\text{C}$ to $0^{\\circ}\\text{C}$, it becomes less dense and stays at the surface.<br/>
    4. At $0^{\\circ}\\text{C}$, surface water freezes into a blanket of ice. Because ice and water are poor conductors of heat, the thick ice sheet insulates the underlying water from the freezing air.<br/>
    5. The bottom water remains stable at $4^{\\circ}\\text{C}$, allowing fish, plants, and aquatic ecosystems to survive comfortably beneath the frozen lake surface.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q96: Molar Specific Heat Capacities of Gases: Mayer's Relation ($C_p - C_v = R$)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Explain why the molar specific heat of a gas at constant pressure ($C_p$) is always greater than that at constant volume ($C_v$). Derive Mayer's relation ($C_p - C_v = R$) using the First Law of Thermodynamics for an ideal gas.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Physical Reason why $C_p > C_v$:</b><br/>
    - When 1 mole of gas is heated at <strong>constant volume</strong> ($C_v$), no mechanical expansion work is done ($W = P \\Delta V = 0$). All supplied heat energy is utilized solely to raise the internal thermal kinetic energy of the gas molecules ($\\Delta Q = \\Delta U$).<br/>
    - When 1 mole of gas is heated at <strong>constant pressure</strong> ($C_p$), the gas expands against external pressure. The supplied heat must not only increase the internal energy by $\\Delta U$ (to produce the same temperature rise $\\Delta T$), but must also supply external work ($W = P \\Delta V$) during expansion.<br/>
    - Therefore, more heat is required at constant pressure than at constant volume for the same temperature rise: $C_p > C_v$.<br/><br/>
    <b style="color: ${themeColor};">Derivation of Mayer's Relation:</b><br/>
    Consider 1 mole of an ideal gas.<br/>
    1. By the <strong>First Law of Thermodynamics</strong>:
    $$dQ = dU + dW = dU + P dV$$
    2. If the gas is heated at constant volume ($dV = 0$) through temperature rise $dT$:
    $$dQ_v = C_v dT \\implies dU = C_v dT$$
    Since internal energy of an ideal gas depends solely on temperature (Joule's law), $dU = C_v dT$ holds true for any process.<br/>
    3. If the same 1 mole of gas is heated at constant pressure ($P = \\text{constant}$) through the same temperature rise $dT$:
    $$dQ_p = C_p dT$$
    From First Law:
    $$C_p dT = dU + P dV = C_v dT + P dV$$
    $$(C_p - C_v) dT = P dV$$
    4. For 1 mole of an ideal gas, the equation of state is:
    $$P V = R T$$
    Differentiating at constant pressure $P$:
    $$P dV = R dT$$
    5. Substituting $P dV = R dT$ into the thermodynamic equation:
    $$(C_p - C_v) dT = R dT$$
    Dividing both sides by $dT$:
    $$\\mathbf{C_p - C_v = R}$$
    This is <strong>Mayer's Relation</strong>. If $c_p$ and $c_v$ are principal specific heats (per gram), $c_p - c_v = R/M = r$.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q97: Principle of Calorimetry and Method of Mixtures for Specific Heat</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State the Principle of Calorimetry. Describe the method of mixtures used in the laboratory to determine the specific heat capacity of a solid metal cylinder, including heat loss corrections and water equivalent.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Principle of Calorimetry:</b> When two or more bodies at different temperatures are placed in thermal contact inside an insulated system, heat flows from higher-temperature bodies to lower-temperature bodies until thermal equilibrium is attained. In the absence of chemical reactions and heat loss to surroundings:
    $$\\mathbf{\\text{Heat Lost by Hot Bodies} = \\text{Heat Gained by Cold Bodies}}$$
    <b style="color: ${themeColor};">Method of Mixtures:</b><br/>
    1. A solid metal piece of mass $m_s$ and unknown specific heat $c_s$ is heated in a hypsometer to a steady boiling temperature $T_1$ (e.g., $100^{\\circ}\\text{C}$).<br/>
    2. A copper calorimeter of mass $m_c$ and specific heat $c_c$ contains water of mass $m_w$ (specific heat $c_w$) at initial room temperature $T_2$.<br/>
    3. The hot solid is quickly transferred to the calorimeter, the mixture is gently stirred, and the final maximum equilibrium temperature $T$ is recorded.<br/>
    4. <strong>Heat Lost by Solid:</strong>
    $$Q_{\\text{lost}} = m_s c_s (T_1 - T)$$
    5. <strong>Heat Gained by Water and Calorimeter:</strong>
    $$Q_{\\text{gained}} = m_w c_w (T - T_2) + m_c c_c (T - T_2) = (m_w c_w + m_c c_c)(T - T_2)$$
    The term $W_e = m_c c_c / c_w$ is called the <strong>water equivalent</strong> of the calorimeter.<br/>
    6. Equating heat lost to heat gained:
    $$m_s c_s (T_1 - T) = (m_w c_w + m_c c_c)(T - T_2)$$
    $$\\mathbf{c_s = \\frac{(m_w c_w + m_c c_c)(T - T_2)}{m_s (T_1 - T)}}$$
    <b style="color: ${themeColor};">Radiation Correction:</b> Radiation losses during stirring are corrected using Regnault's cooling correction ($\Delta T_{\\text{corr}}$) to obtain exact results.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q98: Steady State Heat Conduction: Fourier's Law and Slabs in Series & Parallel</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State Fourier's Law of thermal conduction. Define coefficient of thermal conductivity and thermal resistance. Derive formulas for the equivalent thermal conductivity and interface temperatures for two slabs of thicknesses $d_1, d_2$ and conductivities $K_1, K_2$ placed: (i) in series, and (ii) in parallel.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Fourier's Law:</b> In steady state, the rate of heat flow $H = \\frac{dQ}{dt}$ conducted normally across a uniform slab of cross-sectional area $A$ and thickness $x$ between faces at temperatures $T_1$ and $T_2$ ($T_1 > T_2$) is:
    $$H = \\frac{dQ}{dt} = K A \\left(\\frac{T_1 - T_2}{x}\\right) = -K A \\frac{dT}{dx}$$
    where $K$ is the <strong>coefficient of thermal conductivity</strong> (SI unit: $\\text{W/m}\\cdot\\text{K}$).<br/>
    <b style="color: ${themeColor};">Thermal Resistance ($R_{\\text{th}}$):</b> In direct analogy with Ohm's Law ($I = \\frac{\\Delta V}{R_{\\text{elec}}}$):
    $$H = \\frac{T_1 - T_2}{R_{\\text{th}}} \\implies R_{\\text{th}} = \\frac{x}{K A}$$
    <b style="color: ${themeColor};">Part (i): Slabs in Series Thermal Contact:</b><br/>
    Two slabs of thicknesses $d_1, d_2$, conductivities $K_1, K_2$, and equal area $A$ are placed end-to-end.<br/>
    Total thermal resistance:
    $$R_{\\text{total}} = R_1 + R_2 \\implies \\frac{d_1 + d_2}{K_{\\text{eq}} A} = \\frac{d_1}{K_1 A} + \\frac{d_2}{K_2 A}$$
    $$\\mathbf{K_{\\text{eq}} = \\frac{d_1 + d_2}{\\frac{d_1}{K_1} + \\frac{d_2}{K_2}} = \\frac{(d_1 + d_2) K_1 K_2}{d_1 K_2 + d_2 K_1}}$$
    If $d_1 = d_2 = d$: $K_{\\text{eq}} = \\frac{2 K_1 K_2}{K_1 + K_2}$ (Harmonic Mean).<br/><br/>
    <b style="color: ${themeColor};">Part (ii): Slabs in Parallel Thermal Contact:</b><br/>
    Two slabs of areas $A_1, A_2$, conductivities $K_1, K_2$, and equal thickness $d$ are placed side-by-side between common temperature reservoirs $T_1$ and $T_2$:<br/>
    Total heat current $H = H_1 + H_2$:
    $$K_{\\text{eq}} (A_1 + A_2) \\frac{T_1 - T_2}{d} = K_1 A_1 \\frac{T_1 - T_2}{d} + K_2 A_2 \\frac{T_1 - T_2}{d}$$
    $$\\mathbf{K_{\\text{eq}} = \\frac{K_1 A_1 + K_2 A_2}{A_1 + A_2}}$$
    If $A_1 = A_2$: $K_{\\text{eq}} = \\frac{K_1 + K_2}{2}$ (Arithmetic Mean).
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q99: Blackbody Radiation, Wien's Displacement Law, and Stefan-Boltzmann Law</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> State and explain: (i) Stefan-Boltzmann Law of radiation, (ii) Wien's Displacement Law, and (iii) Newton's Law of Cooling as a linear approximation of Stefan's Law for small temperature differences.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">1. Stefan-Boltzmann Law:</b><br/>
    The total radiant energy emitted per second per unit surface area of a blackbody is directly proportional to the fourth power of its absolute thermodynamic temperature $T$:
    $$E = \\sigma T^{4}$$
    where $\\sigma = 5.67 \\times 10^{-8}\\text{ W/m}^{2}\\cdot\\text{K}^{4}$ is the Stefan-Boltzmann constant.<br/>
    For a body of emissivity $e$ ($0 < e < 1$) and surface area $A$ in surroundings at temperature $T_0$, the net rate of heat loss is:
    $$P_{\\text{net}} = e \\sigma A (T^{4} - T_0^{4})$$
    <b style="color: ${themeColor};">2. Wien's Displacement Law:</b><br/>
    The wavelength $\\lambda_{\\max}$ corresponding to the maximum emissive power of a blackbody is inversely proportional to its absolute temperature $T$:
    $$\\lambda_{\\max} \\cdot T = b = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$$
    As temperature increases, the peak of the emission curve shifts toward shorter wavelengths (from infrared into visible and ultraviolet).<br/><br/>
    <b style="color: ${themeColor};">3. Deduction of Newton's Law of Cooling from Stefan's Law:</b><br/>
    Let a body at temperature $T$ cool in surroundings at temperature $T_0$. Let the temperature difference be $\\Delta T = T - T_0 \\ll T_0$.<br/>
    Then $T = T_0 + \\Delta T = T_0 (1 + \\Delta T / T_0)$.<br/>
    By Stefan's Law, radiant heat loss rate is:
    $$P = e \\sigma A (T^{4} - T_0^{4}) = e \\sigma A \\left[ T_0^{4}\\left(1 + \\frac{\\Delta T}{T_0}\\right)^{4} - T_0^{4} \\right]$$
    Using binomial expansion for small $\\Delta T / T_0$:
    $$\\left(1 + \\frac{\\Delta T}{T_0}\\right)^{4} \\approx 1 + 4\\frac{\\Delta T}{T_0}$$
    Substituting into the equation:
    $$P \\approx e \\sigma A T_0^{4} \\left( 1 + 4\\frac{\\Delta T}{T_0} - 1 \\right) = (4 e \\sigma A T_0^{3}) \\Delta T$$
    Since rate of loss of heat is $P = -m c \\frac{dT}{dt}$:
    $$-m c \\frac{dT}{dt} = (4 e \\sigma A T_0^{3})(T - T_0) \\implies -\\frac{dT}{dt} = K (T - T_0)$$
    This proves <strong>Newton's Law of Cooling</strong>: for small temperature differences, the rate of cooling is directly proportional to the temperature excess over surroundings.
  </div>
</div>

<div style="margin-bottom: 24px;">
  <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 8px;">Q100: Master Synthesis of Unit VII: Properties of Bulk Matter (09 Marks)</h3>
  <p style="color: #E2E8F0; margin-bottom: 10px;"><strong>Question:</strong> Present a master executive synthesis of Unit VII: Properties of Bulk Matter (09 Marks). Provide a high-yield comparative matrix summarizing all fundamental governing laws, core formulas, SI units, and dimensional formulas across Solids, Fluids, and Thermal Physics.</p>
  <div style="background: rgba(255,255,255,0.03); padding: 12px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px; color: #CBD5E1; line-height: 1.6;">
    <strong>Answer:</strong><br/>
    <b style="color: ${themeColor};">Comprehensive Executive Matrix of Unit VII:</b><br/><br/>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px;">
        <thead>
          <tr style="background: rgba(255, 0, 127, 0.15); border-bottom: 2px solid ${themeColor};">
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Branch</th>
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Governing Law / Concept</th>
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Master Formula</th>
            <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">SI Unit & Dimensions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Solids</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Hooke's Law & Moduli ($Y, B, G$)</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$Y = \\frac{F L}{A \\Delta L},\\; B = -\\frac{\\Delta P}{\\Delta V/V},\\; G = \\frac{F}{A\\theta}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\text{N/m}^{2}\\text{ (Pa)}$, $[\\text{M}^{1} \\text{L}^{-1} \\text{T}^{-2}]$</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Solids</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Elastic Potential Energy Density</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$u = \\frac{1}{2} \\times \\text{stress} \\times \\text{strain} = \\frac{1}{2} Y \\epsilon^{2}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\text{J/m}^{3}\\text{ (Pa)}$, $[\\text{M}^{1} \\text{L}^{-1} \\text{T}^{-2}]$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Solids</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Poisson's Ratio ($\\sigma$)</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\sigma = -\\frac{\\Delta D / D}{\\Delta L / L}$ (Practical: $0.2 - 0.4$)</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Dimensionless, $[\\text{M}^{0} \\text{L}^{0} \\text{T}^{0}]$</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Fluids</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Hydrostatic Pressure at Depth</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$P = P_0 + \\rho g h$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\text{Pa (N/m}^{2}\\text{)}$, $[\\text{M}^{1} \\text{L}^{-1} \\text{T}^{-2}]$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Fluids</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Stokes' Law & Terminal Velocity</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$F_v = 6\\pi \\eta r v,\\; v_t = \\frac{2}{9}\\frac{r^{2}(\\rho-\\sigma)g}{\\eta}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\eta$: $\\text{Pa}\\cdot\\text{s}$, $[\\text{M}^{1} \\text{L}^{-1} \\text{T}^{-1}]$</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Fluids</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Continuity & Bernoulli's Theorem</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$A_1 v_1 = A_2 v_2,\\; P + \\frac{1}{2}\\rho v^{2} + \\rho g h = \\text{const}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\text{J/m}^{3}\\text{ (Pa)}$, $[\\text{M}^{1} \\text{L}^{-1} \\text{T}^{-2}]$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Fluids</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Surface Tension & Capillary Rise</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\Delta P_{\\text{drop}} = \\frac{2T}{R},\\; \\Delta P_{\\text{bubble}} = \\frac{4T}{R},\\; h = \\frac{2T\\cos\\theta}{r\\rho g}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$T$: $\\text{N/m}$, $[\\text{M}^{1} \\text{L}^{0} \\text{T}^{-2}]$</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Thermal</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Thermal Expansion Relations</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\beta = 2\\alpha,\\; \\gamma = 3\\alpha \\implies \\alpha : \\beta : \\gamma = 1 : 2 : 3$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\text{K}^{-1}$, $[\\text{K}^{-1}]$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Thermal</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Mayer's Formula & Calorimetry</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$C_p - C_v = R,\\; Q = m c \\Delta T + m L$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$c$: $\\text{J/kg}\\cdot\\text{K}$, $[\\text{L}^{2} \\text{T}^{-2} \\text{K}^{-1}]$</td>
          </tr>
          <tr style="background: rgba(255,255,255,0.02);">
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Thermal</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">Fourier Conduction & Radiation</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$H = \\frac{K A \\Delta T}{x},\\; \\lambda_{\\max} T = b,\\; E = \\sigma T^{4}$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$K$: $\\text{W/m}\\cdot\\text{K}$, $[\\text{M}^{1} \\text{L}^{1} \\text{T}^{-3} \\text{K}^{-1}]$</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`;

module.exports = { solutionsPart3 };
