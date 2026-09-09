const { themeColor } = require('./c11_phy_7_helpers');

function getSolutionsPart1() {
  return `
  <!-- SECTION A: VERY SHORT ANSWER (VSA) QUESTIONS (1 MARK EACH) -->
  <div style="background: rgba(255, 0, 127, 0.08); border-left: 4px solid ${themeColor}; padding: 12px 16px; margin: 25px 0 15px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each) &bull; Q1 to Q40
    </h3>
    <p style="color: #CBD5E1; margin: 5px 0 0 0; font-size: 13px;">
      Fundamental definitions, elasticity coefficients, fluid laws, surface tension, and thermal quantities across Solids, Fluids, and Thermal physics.
    </p>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q1: Define the elasticity of a solid body.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Elasticity</b> is the property of a material body by virtue of which it tends to restore its original shape and size after the removal of external deforming forces.
    </p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q2: State Hooke&apos;s Law of elasticity.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Within the proportional elastic limit of a material, the internal restoring <b>stress</b> developed is directly proportional to the <b>strain</b> produced:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\text{Stress} \\propto \\text{Strain} \\implies \\frac{\\text{Stress}}{\\text{Strain}} = E \\quad (\\text{Modulus of Elasticity})$
    </div>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q3: Define stress. State its SI unit and dimensional formula.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Stress</b> is the internal restoring force per unit cross-sectional area developed inside a deformed body: $\\sigma = F_{\\text{res}} / A$.
      <br/>&bull; <b>SI Unit:</b> Newton per square-metre (<b>N/m<sup>2</sup></b> or <b>Pascal, Pa</b>)
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]</b>
    </p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q4: Define strain. Why is strain a dimensionless physical quantity?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Strain</b> is the fractional change in dimension produced in a body: $\\text{Strain} = \\Delta L / L$ (or $\\Delta V / V$). Because it represents the ratio of two identical physical dimensions, it has no units and is purely dimensionless ([M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]).
    </p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q5: Between steel and rubber, which is more elastic in physics? Justify.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Steel is more elastic than rubber.</b> For a given applied stretching stress, steel produces a far smaller strain than rubber. Consequently, Young&apos;s modulus of steel is vastly greater ($Y_{\\text{steel}} \\gg Y_{\\text{rubber}}$), which means steel offers far greater resistance to deformation.
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q6: State the SI unit and dimensional formula of Young&apos;s Modulus.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> Pascal (<b>Pa</b>) or <b>N/m<sup>2</sup></b>
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]</b> (identical to stress and pressure)
    </p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q7: Define Bulk Modulus of elasticity.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Bulk Modulus</b> ($B$) is the ratio of hydraulic (volume) stress to the corresponding volumetric strain within the elastic limit:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $B = -\\frac{\\Delta P}{\\Delta V / V} = -V \\frac{\\Delta P}{\\Delta V}$
    </div>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q8: Define compressibility of a material.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Compressibility</b> ($k$) is defined as the reciprocal of the Bulk Modulus: $k = 1/B$.
      <br/>&bull; <b>SI Unit:</b> <b>m<sup>2</sup>/N</b> or <b>Pa<sup>-1</sup></b> &bull; Dimensions: <b>[M<sup>-1</sup> L<sup>1</sup> T<sup>2</sup>]</b>.
    </p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q9: Define Shear Modulus of Rigidity (&eta;).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Shear Modulus</b> is the ratio of tangential (shearing) stress to shearing strain: $\\eta = \\frac{F / A}{\\theta}$ (N/m<sup>2</sup>). Liquids and gases have $\\eta = 0$ because they cannot support static shear.
    </p>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q10: Define Poisson&apos;s ratio (&sigma;) and state its formula.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Within the elastic limit, <b>Poisson&apos;s ratio</b> is the ratio of lateral strain to longitudinal strain:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\sigma = \\frac{\\text{Lateral Strain}}{\\text{Longitudinal Strain}} = -\\frac{\\Delta d / d}{\\Delta L / L}$
    </div>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q11: State the theoretical and practical limits of Poisson&apos;s ratio.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>Theoretical Limits:</b> $-1 \\le \\sigma \\le +0.5$
      <br/>&bull; <b>Practical Limits:</b> $0 \\le \\sigma \\le 0.5$ (metals typically range from $0.25$ to $0.35$; rubber is $\\approx 0.5$).
    </p>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q12: Write the expression for the elastic potential energy density in a stretched wire.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Energy density (energy per unit volume) is:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $u = \\frac{1}{2} &times; \\text{Stress} &times; \\text{Strain} = \\frac{1}{2} Y (\\text{Strain})^2 = \\frac{\\text{Stress}^2}{2Y}$
    </div>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q13: What are elastomers? Give an everyday biological example.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> <b>Elastomers</b> are materials that can be subjected to very large elastic strains (hundreds of percent) without undergoing plastic deformation, exhibiting non-linear stress-strain response. <i>Example:</i> <b>Vulcanized rubber</b> and the <b>elastic tissue of the human aorta</b>.
    </p>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q14: Define fluid pressure. State its SI unit and dimensional formula.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Fluid pressure is the normal thrust force exerted per unit surface area by a fluid at rest: $P = F_{\\perp} / A$.
      <br/>&bull; <b>SI Unit:</b> Pascal (<b>Pa</b>) or <b>N/m<sup>2</sup></b>
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]</b>
    </p>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q15: State Pascal&apos;s Law for transmission of fluid pressure.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Pressure applied to an enclosed, incompressible fluid at rest is transmitted <b>undiminished in all directions</b> to every point of the fluid and to the walls of the containing vessel.
    </p>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q16: Name two common engineering machines based on Pascal&apos;s Law.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>1. <b>Hydraulic Lift</b> (used in automobile repair workshops).
      <br/>2. <b>Hydraulic Brakes</b> (used in motor vehicles).
    </p>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q17: What is the hydrostatic paradox?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The liquid pressure at the base of a container depends exclusively on the liquid column height $h$ and density $\rho$ ($P = \rho g h$), and is completely independent of the shape, volume, or cross-sectional area of the containing vessel.
    </p>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q18: Define the coefficient of viscosity (&eta;) of a fluid.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>coefficient of viscosity</b> is the tangential viscous drag force acting per unit surface area between two parallel fluid layers moving with a unit velocity gradient ($dv/dx = 1\\text{ s}^{-1}$):
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\eta = \\frac{F}{A(dv/dx)}$
    </div>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q19: State the SI unit and dimensional formula of the coefficient of viscosity.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>SI Unit:</b> Pascal-second (<b>Pa s</b> or <b>kg m<sup>-1</sup> s<sup>-1</sup></b> or <b>Poiseuille, Pl</b>; 1 Pl = 10 Poise)
      <br/>&bull; <b>Dimensional Formula:</b> <b>[M<sup>1</sup> L<sup>-1</sup> T<sup>-1</sup>]</b>
    </p>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q20: State Stokes&apos; Law for the viscous drag on a spherical particle.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The backward retarding viscous force $F_v$ experienced by a spherical body of radius $r$ moving with instantaneous velocity $v$ in a fluid of viscosity $\eta$ is:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $F_v = 6\\pi \\eta r v$
    </div>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q21: Define terminal velocity.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The maximum constant velocity attained by a body falling through a viscous fluid when the net downward gravitational force is completely balanced by the sum of upward buoyant and viscous drag forces.
    </p>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q22: How does the terminal velocity of a falling spherical raindrop depend upon its radius r?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Terminal velocity is directly proportional to the <b>square of the radius</b>:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $v_t \\propto r^2 \\quad \\left(v_t = \\frac{2}{9}\\frac{r^2(\\rho - \\sigma)g}{\\eta}\\right)$
    </div>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q23: Distinguish in one sentence between streamline flow and turbulent flow.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> In <b>streamline flow</b>, each fluid particle follows a smooth, orderly trajectory identical to preceding particles, whereas in <b>turbulent flow</b>, motion is disorderly, chaotic, and accompanied by churning eddies and vortices.
    </p>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q24: Define critical velocity of fluid flow.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The limiting threshold speed below which the flow of a fluid remains steady and streamline, and above which it becomes disordered and turbulent: $v_c = \\frac{R_e \\eta}{\\rho d}$.
    </p>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q25: State the physical significance of Reynolds number (R<sub>e</sub>).</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Reynolds number ($R_e = \\rho v d / \\eta$) represents the ratio of inertial forces to viscous forces in a flowing fluid; it predicts whether flow is laminar ($R_e &lt; 2000$) or turbulent ($R_e &gt; 3000$).
    </p>
  </div>

  <!-- Q26 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q26: State the Equation of Continuity for steady fluid flow.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For an incompressible, non-viscous fluid in streamline flow, the mass flow rate remains constant across every cross-section:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $A_1 v_1 = A_2 v_2 = \\text{constant}$
    </div>
  </div>

  <!-- Q27 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q27: State Bernoulli&apos;s Principle in mathematical form.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> For an ideal fluid in streamline motion, total mechanical energy per unit volume is conserved:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$
    </div>
  </div>

  <!-- Q28 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q28: Which fundamental conservation principle forms the basis of Bernoulli&apos;s theorem?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The <b>Law of Conservation of Energy</b> applied to flowing fluids (Work-Energy Theorem per unit volume).
    </p>
  </div>

  <!-- Q29 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q29: Define Surface Tension of a liquid. State its SI unit.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The tangential force acting per unit length along an imaginary line drawn on the free surface of a liquid: $T = F / L$.
      <br/>&bull; <b>SI Unit:</b> <b>N/m</b> (or <b>J/m<sup>2</sup></b>) &bull; Dimensions: <b>[M<sup>1</sup> L<sup>0</sup> T<sup>-2</sup>]</b>.
    </p>
  </div>

  <!-- Q30 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q30: State the relationship between surface tension and surface energy.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The work done in increasing the free surface area by $\Delta A$ equals surface tension times area change:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $W = T \\Delta A \\implies T = \\frac{W}{\\Delta A} = \\text{Surface Energy per unit area}$
    </div>
  </div>

  <!-- Q31 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q31: Why do freely falling liquid drops and soap bubbles assume spherical shapes?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> Because of surface tension, liquids naturally contract to minimize their surface area and surface energy. For a given volume, a <b>sphere</b> possesses the absolute minimum surface area.
    </p>
  </div>

  <!-- Q32 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q32: Write the formula for excess pressure inside a spherical liquid drop of radius R.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A drop has only <b>one</b> liquid-air interface:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\Delta P = P_{\\text{in}} - P_{\\text{out}} = \\frac{2T}{R}$
    </div>
  </div>

  <!-- Q33 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q33: Write the formula for excess pressure inside a soap bubble of radius R in air.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> A hollow soap bubble has <b>two</b> liquid-air interfaces (inner and outer surfaces):
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\Delta P = P_{\\text{in}} - P_{\\text{out}} = \\frac{4T}{R}$
    </div>
  </div>

  <!-- Q34 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q34: What is the angle of contact? State its value for pure water in contact with clean glass.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The angle between the solid surface and the tangent drawn to the liquid meniscus at the contact line, measured inside the liquid. For pure water and clean glass, $\\theta \\approx 0^\\circ$.
    </p>
  </div>

  <!-- Q35 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q35: State Jurin&apos;s Law of capillary ascent.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The height $h$ to which a liquid rises in a capillary tube is inversely proportional to the tube radius $r$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $h \\propto \\frac{1}{r} \\implies h r = \\text{constant} = \\frac{2T\\cos\\theta}{\\rho g}$
    </div>
  </div>

  <!-- Q36 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q36: State the relation between linear (&alpha;), superficial (&beta;), and cubical (&gamma;) thermal expansion coefficients for an isotropic solid.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $\\alpha : \\beta : \\gamma = 1 : 2 : 3 \\implies \\beta = 2\\alpha, \\quad \\gamma = 3\\alpha$
    </div>
  </div>

  <!-- Q37 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q37: What is the anomalous expansion of water? At what temperature is its density maximum?</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> When water is heated from $0^\circ\text{C}$ to $4^\circ\text{C}$, it anomalous contracts rather than expands, reaching its <b>maximum density ($1000\\text{ kg/m}^3$) at 4&deg;C</b>.
    </p>
  </div>

  <!-- Q38 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q38: State Mayer&apos;s Relation connecting molar heat capacities of an ideal gas.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The difference between molar specific heat at constant pressure ($C_p$) and constant volume ($C_v$) equals the universal gas constant $R$:
    </p>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      $C_p - C_v = R$
    </div>
  </div>

  <!-- Q39 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q39: Define latent heat of vaporization. State its numerical value for water.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> The quantity of heat energy required to convert unit mass of liquid into vapour at its boiling point without any change in temperature:
      $$L_v \\approx 2.26 &times; 10^6\\text{ J/kg} = 540\\text{ cal/g}$$
    </p>
  </div>

  <!-- Q40 -->
  <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 8px; font-size: 15px;">Q40: State Wien&apos;s Displacement Law and Stefan-Boltzmann Law in mathematical form.</h3>
    <p style="margin: 0; color: #E2E8F0;">
      <b style="color: ${themeColor};">Answer:</b> 
      <br/>&bull; <b>Wien&apos;s Displacement Law:</b> $\\lambda_{\\max} T = b = 2.898 &times; 10^{-3}\\text{ m K}$
      <br/>&bull; <b>Stefan-Boltzmann Law:</b> $E = \\sigma T^4$ &bull; ($\sigma = 5.67 &times; 10^{-8}\\text{ W m}^{-2}\\text{ K}^{-4}$)
    </p>
  </div>
`;
}

module.exports = { getSolutionsPart1, solutionsPart1: getSolutionsPart1() };
