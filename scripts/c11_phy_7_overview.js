const {
  themeColor,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_7_helpers');

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
  <div style="background: rgba(255, 0, 127, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h1 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 24px; font-weight: bold; text-align: center !important;">
      Unit VII: Properties of Bulk Matter (09 Marks)
    </h1>
    <p style="color: #CBD5E1; margin: 0; font-size: 15px; text-align: center !important;">
      Comprehensive Reference Textbook Guide &bull; JKBOSE / CBSE Official Syllabus Alignment
    </p>
  </div>

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 10px; padding: 16px; margin-bottom: 25px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold;">
      ⚡ Quick Glossary & Fundamental Material Coefficients
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Young&apos;s Modulus (Y):</b> Ratio of longitudinal stress to longitudinal strain within elastic limit; $Y = \\frac{F L}{A \\Delta L}$. SI Unit: <b>N/m<sup>2</sup> (Pa)</b> &bull; Dimensions: <b>[M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Coefficient of Viscosity (&eta;):</b> Tangential viscous force per unit area per unit velocity gradient; $\\eta = \\frac{F}{A(dv/dx)}$. SI Unit: <b>Pa s (Poiseuille)</b> &bull; Dimensions: <b>[M<sup>1</sup> L<sup>-1</sup> T<sup>-1</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 12px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Surface Tension (T):</b> Force per unit length acting perpendicular to an imaginary line drawn on a liquid surface; $T = F/L = W/\\Delta A$. SI Unit: <b>N/m (or J/m<sup>2</sup>)</b> &bull; Dimensions: <b>[M<sup>1</sup> L<sup>0</sup> T<sup>-2</sup>]</b>.
      </div>
      <div style="background: rgba(0,0,0,0.25); border-left: 3px solid ${themeColor}; border-radius: 4px;">
        <b style="color: ${themeColor};">Thermal Conductivity (K):</b> Heat energy conducted per second across unit area per unit temperature gradient; $K = \\frac{Q d}{A \\Delta T t}$. SI Unit: <b>W m<sup>-1</sup> K<sup>-1</sup></b> &bull; Dimensions: <b>[M<sup>1</sup> L<sup>1</sup> T<sup>-3</sup> K<sup>-1</sup>]</b>.
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- PART 1: MECHANICAL PROPERTIES OF SOLIDS   -->
  <!-- ========================================== -->
  <div style="background: rgba(255, 0, 127, 0.08); border-left: 4px solid ${themeColor}; padding: 10px 16px; margin: 30px 0 15px 0; border-radius: 0 6px 6px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 20px; font-weight: bold;">
      PART 1: Mechanical Properties of Solids
    </h2>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    1. Elasticity, Stress, Strain & Hooke&apos;s Law
  </h3>
  <p>
    In a microscopic solid lattice, constituent atoms or molecules occupy stable equilibrium positions where interatomic attractive and repulsive forces precisely balance. When an external deforming force is applied, atoms are displaced from their equilibrium sites, eliciting internal restoring forces. Upon removal of the deforming load, these internal forces restore the original lattice geometry. The property by virtue of which a material regains its original shape and size after deforming forces are removed is termed <b>Elasticity</b>.
  </p>

  <p>
    <b style="color: ${themeColor};">(i) Stress and Its Classifications:</b><br/>
    Stress is defined as the internal restoring force developed per unit cross-sectional area of the deformed body: $\\text{Stress} = F_{\\text{res}} / A$.
    <br/>&bull; <b>Longitudinal Stress:</b> Deforming force acts normal to the cross-sectional area, causing a change in length (Tensile stress causes elongation; Compressive stress causes shortening).
    <br/>&bull; <b>Volume (Hydraulic) Stress:</b> A uniform external pressure acts perpendicular to every point on the surface of a body submerged in a fluid, altering volume without altering geometric shape: $\\sigma_v = \\Delta P$.
    <br/>&bull; <b>Shearing (Tangential) Stress:</b> Deforming force is applied parallel to the surface, causing angular deformation (shear) without volume alteration: $\\tau = F_{\\parallel} / A$.
  </p>

  <p>
    <b style="color: ${themeColor};">(ii) Strain and Its Classifications:</b><br/>
    Strain is the dimensionless fractional deformation produced in the body: $\\text{Strain} = \\frac{\\text{Change in dimension}}{\\text{Original dimension}}$.
    <br/>&bull; <b>Longitudinal Strain:</b> $\\epsilon = \\frac{\\Delta L}{L}$.
    <br/>&bull; <b>Volume Strain:</b> $\\theta_v = \\frac{\\Delta V}{V}$.
    <br/>&bull; <b>Shear Strain:</b> $\\theta = \\frac{\\Delta x}{L} = \\tan\\theta \\approx \\theta$ (in radians).
  </p>

  ${defBox(
    "Hooke's Law",
    "Within the proportional elastic limit of a material, the stress developed is directly proportional to the strain produced: $\\text{Stress} = E &times; \\text{Strain}$, where E is the Modulus of Elasticity of the material.",
    "N/m<sup>2</sup> (Pascal, Pa)",
    "[M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]"
  )}

  <p>
    <b style="color: ${themeColor};">(iii) Stress-Strain Curve for a Metallic Wire:</b><br/>
    When a uniform metallic wire (such as structural steel) is subjected to progressively increasing tensile loads, its deformation traces a characteristic path:
    <br/>1. <b>Region OA (Proportionality Limit):</b> Stress is strictly linear with strain, obeying Hooke&apos;s law exactly. Slope equals Young&apos;s modulus $Y$.
    <br/>2. <b>Region AB (Elastic Limit / Yield Point B):</b> The curve bends slightly. Hooke&apos;s law is no longer strictly obeyed, but upon removing the load, the wire returns completely along BO to its original length. The stress corresponding to point B is the <b>Yield Strength</b> ($\sigma_y$).
    <br/>3. <b>Region BC (Plastic Deformation & Permanent Set):</b> Beyond point B, even a small increase in stress induces large elongation. If unloaded at point C, the wire does not retrace BO; it contracts along the dashed line, leaving a <b>permanent strain (permanent set)</b>.
    <br/>4. <b>Point D (Ultimate Tensile Strength):</b> The maximum stress the material can sustain without necking. Beyond D, localized thinning (&apos;necking&apos;) occurs.
    <br/>5. <b>Point E (Fracture / Breaking Point):</b> The wire ruptures. Materials with a wide plastic region between B and E are <b>ductile</b> (copper, mild steel); materials where fracture occurs immediately beyond the elastic limit are <b>brittle</b> (glass, cast iron); substances showing large elastic strains without a distinct plastic range are <b>elastomers</b> (rubber, aortic tissue).
  </p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    2. Elastic Moduli, Poisson&apos;s Ratio & Elastic Potential Energy
  </h3>
  <p>
    <b style="color: ${themeColor};">(i) Young&apos;s Modulus (Y):</b> Longitudinal stress divided by longitudinal strain:
    $$Y = \\frac{F / A}{\\Delta L / L} = \\frac{F L}{A \\Delta L} = \\frac{M g L}{\\pi r^2 \\Delta L}$$
    <br/><b style="color: ${themeColor};">(ii) Bulk Modulus (B):</b> Volume stress divided by volumetric strain:
    $$B = -\\frac{\\Delta P}{\\Delta V / V} = -V \\frac{\\Delta P}{\\Delta V}$$
    The negative sign ensures $B$ is positive, since an increase in pressure produces a decrease in volume. The reciprocal of Bulk Modulus is termed <b>Compressibility</b>: $k = 1/B$.
    <br/><b style="color: ${themeColor};">(iii) Shear Modulus of Rigidity (&eta;):</b> Tangential stress divided by shearing strain:
    $$\\eta = \\frac{F_{\\parallel} / A}{\\theta}$$
    <br/><b style="color: ${themeColor};">(iv) Poisson&apos;s Ratio (&sigma;):</b> When a wire elongates, its lateral diameter contracts. Poisson&apos;s ratio is the ratio of lateral strain to longitudinal strain:
    $$\\sigma = \\frac{\\text{Lateral Strain}}{\\text{Longitudinal Strain}} = -\\frac{\\Delta d / d}{\\Delta L / L}$$
    Theoretical limits for isotropic solids: $-1 \\le \\sigma \\le 0.5$ (practical values for metals lie between $0.25$ and $0.35$; for incompressible rubber, $\\sigma \\approx 0.5$).
  </p>

  ${stepDerivationBox(
    "Derivation of Elastic Potential Energy in a Stretched Wire",
    [
      {
        name: "Work Done in Infinitesimal Elongation",
        content: "When a wire of original length $L$ and area $A$ is stretched by extension $x$, the restoring tension is: $$F = \\frac{Y A}{L} x$$ Work done by the stretching force in producing an additional extension $dx$: $$dW = F\\,dx = \\left(\\frac{Y A}{L} x\\right) dx$$"
      },
      {
        name: "Integration for Total Elongation \\Delta L",
        content: "$$W = \\int_0^{\\Delta L} \\frac{Y A}{L} x\\,dx = \\frac{Y A}{L} \\left[ \\frac{x^2}{2} \\right]_0^{\\Delta L} = \\frac{1}{2} \\frac{Y A (\\Delta L)^2}{L}$$"
      },
      {
        name: "Total Elastic Potential Energy Formula",
        content: "Rewriting as $W = \\frac{1}{2} \\left(\\frac{Y A \\Delta L}{L}\\right) \\Delta L = \\frac{1}{2} F \\Delta L$: $$U = \\frac{1}{2} &times; \\text{Stretching Force} &times; \\text{Extension}$$"
      },
      {
        name: "Energy Density (Energy per Unit Volume)",
        content: "Volume of wire is $V = A L$. Dividing total energy by volume: $$u = \\frac{U}{A L} = \\frac{1}{2}\\left(\\frac{F}{A}\\right)\\left(\\frac{\\Delta L}{L}\\right) = \\frac{1}{2} &times; \\text{Stress} &times; \\text{Strain} = \\frac{1}{2} Y (\\text{Strain})^2$$"
      }
    ]
  )}

  <!-- ========================================== -->
  <!-- PART 2: MECHANICAL PROPERTIES OF FLUIDS   -->
  <!-- ========================================== -->
  <div style="background: rgba(255, 0, 127, 0.08); border-left: 4px solid ${themeColor}; padding: 10px 16px; margin: 30px 0 15px 0; border-radius: 0 6px 6px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 20px; font-weight: bold;">
      PART 2: Mechanical Properties of Fluids
    </h2>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    3. Fluid Pressure, Pascal&apos;s Law & Hydraulic Machines
  </h3>
  <p>
    A fluid (liquid or gas) cannot sustain static shearing stress; it yields and flows under the slightest tangential force. Hence, a static fluid exerts forces exclusively perpendicular (normal) to any surface in contact with it. Fluid pressure at a point is $P = dF_{\\perp} / dA$.
  </p>

  <p>
    <b style="color: ${themeColor};">(i) Variation of Pressure with Depth (Fluid Column):</b><br/>
    For a static fluid of uniform density $\rho$ under uniform gravity $g$, pressure increases linearly with depth $h$ beneath the free surface:
    $$P = P_0 + \\rho g h$$
    where $P_0$ is the atmospheric pressure at the open surface ($1.013 &times; 10^5\\text{ Pa}$). The excess pressure above atmospheric pressure, $P - P_0 = \\rho g h$, is known as <b>gauge pressure</b>.
  </p>

  ${defBox(
    "Pascal's Law",
    "Pressure applied to an enclosed, incompressible fluid at rest is transmitted undiminished in all directions to every portion of the fluid and to the walls of the containing vessel.",
    "Pascal (Pa)",
    "[M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]"
  )}

  <p>
    <b style="color: ${themeColor};">(ii) Applications of Pascal&apos;s Law:</b><br/>
    &bull; <b>Hydraulic Lift:</b> Two connected cylinders of cross-sectional areas $A_1$ and $A_2$ ($A_1 \\ll A_2$) are fitted with movable pistons. When a small effort force $F_1$ is applied on the smaller piston, the transmitted pressure is $P = F_1 / A_1$. This pressure acts on the large piston, generating an upward lifting force:
    $$F_2 = P A_2 = F_1\\left(\\frac{A_2}{A_1}\\right)$$
    Since $A_2 / A_1 \\gg 1$, a modest manual force lifts a heavy automobile.
    <br/>&bull; <b>Hydraulic Brakes:</b> Depressing the brake pedal forces master cylinder fluid through hydraulic lines into slave cylinders at each wheel, driving brake pads against the wheels with amplified, equalized pressure.
  </p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    4. Viscosity, Stokes&apos; Law & Terminal Velocity
  </h3>
  <p>
    When a fluid flows over a solid surface, parallel fluid layers slide over one another with a velocity gradient $dv/dx$. Internal frictional resistance opposing the relative motion between adjacent fluid layers is termed <b>Viscosity</b>. By Newton&apos;s Law of Viscosity:
    $$F = -\\eta A \\frac{dv}{dx}$$
  </p>

  ${defBox(
    "Stokes' Law",
    "The viscous retarding drag force experienced by a smooth spherical body of radius r moving with instantaneous velocity v through an infinite, stationary viscous fluid of viscosity &eta; is given by: $F_v = 6\\pi \\eta r v$.",
    "Newton (N)",
    "[M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>]"
  )}

  ${stepDerivationBox(
    "Derivation of Terminal Velocity of a Falling Sphere",
    [
      {
        name: "Forces Acting on Falling Sphere",
        content: "Consider a sphere of radius $r$ and material density $\\rho$ falling through a fluid of density $\\sigma$ and viscosity $\\eta$.<br/>1. Downward Weight: $W = m g = \\frac{4}{3}\\pi r^3 \\rho g$<br/>2. Upward Buoyant Force: $F_b = \\frac{4}{3}\\pi r^3 \\sigma g$<br/>3. Upward Viscous Drag (Stokes): $F_v = 6\\pi \\eta r v$"
      },
      {
        name: "Dynamic Force Equilibrium at Terminal Speed",
        content: "As speed $v$ increases, viscous drag grows until the net downward driving force is completely balanced by the total upward forces: $$W = F_b + F_v$$ $$\\frac{4}{3}\\pi r^3 \\rho g = \\frac{4}{3}\\pi r^3 \\sigma g + 6\\pi \\eta r v_t$$"
      },
      {
        name: "Solving for Terminal Velocity v_t",
        content: "$$6\\pi \\eta r v_t = \\frac{4}{3}\\pi r^3 (\\rho - \\sigma) g$$ $$v_t = \\frac{4\\pi r^3 (\\rho - \\sigma) g}{3 &times; 6\\pi \\eta r} = \\frac{2}{9}\\frac{r^2 (\\rho - \\sigma) g}{\\eta}$$"
      },
      {
        name: "Key Physical Insights",
        content: "&bull; Terminal speed is proportional to the square of the radius ($v_t \\propto r^2$); larger raindrops plunge much faster than mist droplets.<br/>&bull; If $\\rho < \\sigma$ (e.g. air bubbles in water), $v_t$ is negative, causing the bubble to accelerate upwards."
      }
    ]
  )}

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    5. Streamline Flow, Reynolds Number & Bernoulli&apos;s Theorem
  </h3>
  <p>
    <b style="color: ${themeColor};">(i) Streamline vs Turbulent Flow:</b><br/>
    &bull; <b>Streamline (Laminar) Flow:</b> Fluid particles follow identical, steady streamlines such that every particle passing a given point possesses the exact same velocity in magnitude and direction. Streamlines never intersect.
    <br/>&bull; <b>Turbulent Flow:</b> When flow speed surpasses a threshold (critical velocity $v_c$), fluid motion becomes chaotic, unsteady, and characterized by vortices and eddies.
    <br/>The flow regime is governed by the dimensionless <b>Reynolds Number ($R_e$)</b>:
    $$R_e = \\frac{\\rho v d}{\\eta}$$
    If $R_e &lt; 2000$, flow is steady laminar; if $R_e &gt; 3000$, flow is turbulent; between $2000$ and $3000$, flow is unsteady.
  </p>

  <p>
    <b style="color: ${themeColor};">(ii) Equation of Continuity:</b><br/>
    For an incompressible, non-viscous fluid in streamline flow through a pipe of varying cross-section, mass flow rate is conserved:
    $$A_1 v_1 = A_2 v_2 = \\text{constant}$$
    Narrower cross-sections require proportionately higher fluid speeds ($v \\propto 1/A$).
  </p>

  ${defBox(
    "Bernoulli's Principle",
    "For the streamline flow of an ideal (incompressible, non-viscous, irrotational) fluid, the total mechanical energy per unit volume—comprising static pressure, kinetic energy, and gravitational potential energy—remains constant throughout the flow: $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$.",
    "Pascal (Pa)",
    "[M<sup>1</sup> L<sup>-1</sup> T<sup>-2</sup>]"
  )}

  <p>
    <b style="color: ${themeColor};">(iii) Applications of Bernoulli&apos;s Theorem:</b><br/>
    &bull; <b>Venturimeter:</b> Measures rate of fluid flow through pipes by registering the pressure drop $\\Delta P$ across a constricted throat: $Q = A_1 A_2 \\sqrt{\\frac{2(P_1 - P_2)}{\\rho (A_1^2 - A_2^2)}}$.
    <br/>&bull; <b>Torricelli&apos;s Law of Efflux:</b> Speed of liquid spurting through an orifice at depth $h$ beneath the free surface of an open tank equals free-fall speed: $v = \\sqrt{2gh}$.
    <br/>&bull; <b>Dynamic Aerodynamic Lift:</b> An aircraft wing (aerofoil) is curved on top and flat below. Air streamlines crowd and travel faster above the top surface ($v_{\\text{top}} &gt; v_{\\text{bottom}}$). By Bernoulli&apos;s law, pressure above the wing drops ($P_{\\text{top}} &lt; P_{\\text{bottom}}$), generating an upward dynamic lift force.
  </p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    6. Surface Tension, Surface Energy, Excess Pressure & Capillarity
  </h3>
  <p>
    <b style="color: ${themeColor};">(i) Molecular Theory of Surface Tension:</b><br/>
    A molecule deep inside a liquid experiences equal cohesive attractions in all directions, yielding zero net force. In contrast, a molecule at the surface boundary experiences inward cohesive pull from below with negligible attraction from air molecules above. Consequently, surface molecules possess surplus potential energy (<b>Surface Energy</b>). Liquids naturally contract to minimize surface area, causing the free surface to behave like a stretched elastic membrane under tension.
    <br/><b>Relation between Surface Tension and Surface Energy:</b>
    $$W = T \\Delta A$$
    Work done in increasing surface area by $\Delta A$ equals $T \Delta A$. Hence, Surface Tension equals Surface Energy per unit area ($1\\text{ N/m} = 1\\text{ J/m}^2$).
  </p>

  <p>
    <b style="color: ${themeColor};">(ii) Angle of Contact (&theta;):</b><br/>
    The angle between the solid surface and the tangent drawn to the liquid meniscus at the point of contact, measured inside the liquid.
    <br/>&bull; $\\theta &lt; 90^\\circ$ (Acute): Liquid wets solid; concave meniscus (pure water on clean glass, $\\theta \\approx 0^\\circ$).
    <br/>&bull; $\\theta &gt; 90^\\circ$ (Obtuse): Liquid does not wet solid; convex meniscus (mercury on glass, $\\theta \\approx 135^\\circ$).
  </p>

  <p>
    <b style="color: ${themeColor};">(iii) Excess Pressure across Curved Interfaces:</b><br/>
    The pressure on the concave side of a curved liquid surface is always greater than on the convex side.
    <br/>&bull; <b>Inside a Liquid Drop / Air Bubble in Liquid (1 surface):</b> $\\Delta P = P_{\\text{in}} - P_{\\text{out}} = \\frac{2T}{R}$.
    <br/>&bull; <b>Inside a Soap Bubble in Air (2 liquid-gas interfaces):</b> $\\Delta P = P_{\\text{in}} - P_{\\text{out}} = \\frac{4T}{R}$.
  </p>

  ${stepDerivationBox(
    "Derivation of Capillary Ascent Formula (Jurin's Law)",
    [
      {
        name: "Meniscus Geometry & Pressure Deficit",
        content: "When a narrow glass capillary tube of internal radius $r$ is dipped in a wetting liquid ($\theta < 90^\circ$), a concave hemispherical meniscus forms with radius of curvature $R = \\frac{r}{\\cos\\theta}$. The pressure immediately beneath the concave surface is less than atmospheric pressure $P_0$ by: $$\\Delta P = \\frac{2T}{R} = \\frac{2T \\cos\\theta}{r}$$"
      },
      {
        name: "Hydrostatic Column Balance",
        content: "To equalize pressure with the external flat surface at atmospheric pressure $P_0$, the liquid rises along the tube to a height $h$ until the hydrostatic pressure of the column balances the pressure deficit: $$\\rho g h = \\Delta P = \\frac{2T \\cos\\theta}{r}$$"
      },
      {
        name: "Ascent Formula & Jurin's Law",
        content: "$$h = \\frac{2T \\cos\\theta}{r \\rho g}$$ For a given liquid and tube, $h r = \\text{constant}$ (Jurin&apos;s Law); narrower capillaries produce dramatically higher capillary ascent."
      }
    ]
  )}

  <!-- ========================================== -->
  <!-- PART 3: THERMAL PROPERTIES OF MATTER      -->
  <!-- ========================================== -->
  <div style="background: rgba(255, 0, 127, 0.08); border-left: 4px solid ${themeColor}; padding: 10px 16px; margin: 30px 0 15px 0; border-radius: 0 6px 6px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 20px; font-weight: bold;">
      PART 3: Thermal Properties of Matter
    </h2>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    7. Thermal Expansion & Anomalous Expansion of Water
  </h3>
  <p>
    Heating increases the average vibrational amplitude of atoms around their lattice equilibrium positions, expanding material bulk dimensions.
    <br/>&bull; <b>Coefficient of Linear Expansion (&alpha;):</b> $\\Delta L = L_0 \\alpha \\Delta T \\implies \\alpha = \\frac{\\Delta L}{L_0 \\Delta T}$ (K<sup>-1</sup>).
    <br/>&bull; <b>Coefficient of Area (Superficial) Expansion (&beta;):</b> $\\Delta A = A_0 \\beta \\Delta T \\implies \\beta = 2\\alpha$.
    <br/>&bull; <b>Coefficient of Volume (Cubical) Expansion (&gamma;):</b> $\\Delta V = V_0 \\gamma \\Delta T \\implies \\gamma = 3\\alpha$.
    <br/>Relationship for isotropic solids:
    $$\\alpha : \\beta : \\gamma = 1 : 2 : 3$$
  </p>

  <p>
    <b style="color: ${themeColor};">Anomalous Expansion of Water:</b><br/>
    Almost all liquids expand uniformly on heating. Water behaves uniquely: when heated from $0^\circ\text{C}$ to $4^\circ\text{C}$, water contracts, its volume decreasing to a minimum and its density reaching a peak maximum of $1000\text{ kg/m}^3$ at $4^\circ\text{C}$ ($\gamma &lt; 0$). Beyond $4^\circ\text{C}$, water expands normally.
    <br/><b>Ecological Importance:</b> In severe winters, surface water cools to $4^\circ\text{C}$, becomes densest, and sinks to the bottom. Once the entire lake reaches $4^\circ\text{C}$, further surface cooling makes surface water lighter ($0^\circ\text{C}$ to $3^\circ\text{C}$), which freezes into ice at the surface. Because ice is an exceptional thermal insulator, the underlying deep water stays liquid at $4^\circ\text{C}$, preserving aquatic life through freezing winters.
  </p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    8. Specific Heat Capacity, Calorimetry & Latent Heat
  </h3>
  <p>
    <b style="color: ${themeColor};">(i) Specific Heat Capacity (s):</b> Heat energy required to raise the temperature of unit mass of a substance by $1^\circ\text{C}$ (or $1\text{ K}$): $Q = m s \\Delta T \\implies s = \\frac{Q}{m \\Delta T}$ (J kg<sup>-1</sup> K<sup>-1</sup>).
    <br/><b style="color: ${themeColor};">(ii) Molar Specific Heat Capacities of Gases:</b>
    <br/>&bull; Specific heat at constant volume: $C_v = \\left(\\frac{dQ}{dT}\\right)_v$.
    <br/>&bull; Specific heat at constant pressure: $C_p = \\left(\\frac{dQ}{dT}\\right)_p$.
    <br/><b>Mayer&apos;s Relation:</b> $C_p - C_v = R$.
    <br/><b style="color: ${themeColor};">(iii) Principle of Calorimetry:</b> In an insulated system:
    $$\\text{Heat Lost by Hot Bodies} = \\text{Heat Gained by Cold Bodies}$$
    <br/><b style="color: ${themeColor};">(iv) Latent Heat (L):</b> Heat energy absorbed or released during a phase change at constant temperature: $Q = m L$.
    <br/>&bull; <b>Latent Heat of Fusion ($L_f$):</b> For ice at $0^\circ\text{C}$, $L_f \\approx 3.33 &times; 10^5\\text{ J/kg} = 80\\text{ cal/g}$.
    <br/>&bull; <b>Latent Heat of Vaporization ($L_v$):</b> For water at $100^\circ\text{C}$, $L_v \\approx 2.26 &times; 10^6\\text{ J/kg} = 540\\text{ cal/g}$. (Steam at $100^\circ\text{C}$ inflicts far more severe burns than boiling water at $100^\circ\text{C}$ due to this stored latent enthalpy).
  </p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">
    9. Heat Transfer, Thermal Conductivity & Radiation Laws
  </h3>
  <p>
    Heat transfers via three distinct modes:
    <br/>1. <b>Conduction:</b> Transfer of heat through adjacent molecular collisions without gross bodily movement of matter. By Fourier&apos;s Law across a slab of area $A$, thickness $d$, and temperature difference $\Delta T$:
    $$\\frac{dQ}{dt} = K A \\frac{\\Delta T}{d}$$
    where $K$ is the <b>thermal conductivity</b> of the material.
    <br/>2. <b>Convection:</b> Transfer of heat through actual macroscopic bulk circulation of fluid packets driven by gravity and density variations (natural convection drives land and sea breezes; forced convection circulates blood pumped by the heart).
    <br/>3. <b>Radiation:</b> Transfer of thermal energy via electromagnetic waves (infrared), requiring no material medium (solar energy traveling through vacuum).
  </p>

  <p>
    <b style="color: ${themeColor};">Blackbody Radiation & Spectral Emission:</b><br/>
    A perfect blackbody absorbs 100% of incident radiation across all wavelengths. When heated, it emits continuous blackbody thermal radiation.
  </p>

  ${defBox(
    "Wien's Displacement Law",
    "The wavelength &lambda;<sub>max</sub> corresponding to the peak emission intensity of a blackbody is inversely proportional to its absolute temperature T: $\\lambda_{\\max} T = b$, where b is Wien's constant ($2.898 &times; 10^{-3}\\text{ m K}$).",
    "m K",
    "[M<sup>0</sup> L<sup>1</sup> T<sup>0</sup> K<sup>1</sup>]"
  )}

  ${defBox(
    "Stefan-Boltzmann Law",
    "The total thermal radiation energy emitted per second per unit surface area of a perfect blackbody is directly proportional to the fourth power of its absolute temperature: $E = \\sigma T^4$, where &sigma; is Stefan's constant ($5.67 &times; 10^{-8}\\text{ W m}^{-2}\\text{ K}^{-4}$).",
    "W/m<sup>2</sup>",
    "[M<sup>1</sup> L<sup>0</sup> T<sup>-3</sup> K<sup>-4</sup>]"
  )}

  <p>
    For a real body with surface emissivity $e$ ($0 &lt; e &lt; 1$) at temperature $T$ inside surroundings at temperature $T_0$, the net rate of heat loss by radiation is:
    $$\\frac{dQ}{dt} = e \\sigma A (T^4 - T_0^4)$$
  </p>

  <!-- MASTER FORMULA CHEAT SHEET -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 2px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-align: center !important;">
      📋 Master Revision Formula Cheat Sheet &bull; Unit VII: Properties of Bulk Matter
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 13.5px; color: #E2E8F0;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Solids & Elastic Moduli:</b><br/>
        $Y = \\frac{FL}{A\\Delta L}$ &bull; $B = -V\\frac{\\Delta P}{\\Delta V}$ &bull; $\\eta = \\frac{F}{A\\theta}$<br/>
        Poisson: $\\sigma = -\\frac{\\Delta d/d}{\\Delta L/L}$ &bull; Energy density: $u = \\frac{1}{2}\\sigma\\epsilon$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Fluid Statics & Pascal&apos;s Law:</b><br/>
        $P = P_0 + \\rho g h$ &bull; $\\text{Gauge} = \\rho g h$<br/>
        Hydraulic lift: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Viscosity & Stokes&apos; Law:</b><br/>
        $F = -\\eta A\\frac{dv}{dx}$ &bull; Drag: $F_v = 6\\pi\\eta r v$<br/>
        Terminal velocity: $v_t = \\frac{2}{9}\\frac{r^2(\\rho - \\sigma)g}{\\eta}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Fluid Dynamics & Flow:</b><br/>
        Continuity: $A_1 v_1 = A_2 v_2$ &bull; Reynolds: $R_e = \\frac{\\rho v d}{\\eta}$<br/>
        Bernoulli: $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Surface Tension & Capillarity:</b><br/>
        Energy: $W = T\\Delta A$ &bull; Drop: $\\Delta P = \\frac{2T}{R}$ &bull; Bubble: $\\Delta P = \\frac{4T}{R}$<br/>
        Ascent: $h = \\frac{2T\\cos\\theta}{r\\rho g}$ (Jurin: $hr = \\text{const}$)
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Thermal Expansion & Calorimetry:</b><br/>
        $\\alpha : \\beta : \\gamma = 1 : 2 : 3$ &bull; $Q = m s\\Delta T$<br/>
        $Q = m L$ &bull; Mayer: $C_p - C_v = R$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Heat Transfer & Conduction:</b><br/>
        Fourier: $\\frac{dQ}{dt} = K A\\frac{\\Delta T}{d}$ &bull; Resistance: $R_{\\text{th}} = \\frac{d}{KA}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Thermal Radiation Laws:</b><br/>
        Wien: $\\lambda_{\\max} T = b$ ($2.898 &times; 10^{-3}\\text{ m K}$)<br/>
        Stefan: $E = \\sigma T^4$ &bull; Net: $\\frac{dQ}{dt} = e\\sigma A(T^4 - T_0^4)$
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
