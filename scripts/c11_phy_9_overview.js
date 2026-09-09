// scripts/c11_phy_9_overview.js
const {
  themeColor,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_9_helpers');

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
  <div style="background: rgba(66, 165, 245, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px; text-align: center;">
    <h1 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 24px; font-weight: bold; text-align: center !important;">
      Unit IX: Behaviour of Perfect Gases and Kinetic Theory of Gases (06 Marks)
    </h1>
    <p style="margin: 0; color: #94A3B8; font-size: 14px; text-align: center !important;">
      Official JKBOSE / CBSE / NCERT Core Reference Standard &bull; Equation of State, Work in Gas Compression, Postulates of Kinetic Theory, Microscopic Pressure Derivation, Kinetic Temperature, RMS Speed, Degrees of Freedom, Law of Equipartition, Molar Specific Heats, Mean Free Path, and Avogadro's Number
    </p>
  </div>

  <!-- QUICK GLOSSARY CARD -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(66, 165, 245, 0.3); border-radius: 10px; padding: 16px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
    <h3 style="color: ${themeColor}; margin-top: 0; margin-bottom: 12px; font-size: 16px; display: flex; align-items: center; gap: 8px;">
      <span>📑</span> Quick Glossary & Fundamental Kinetic Quantities
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; font-size: 13.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Ideal (Perfect) Gas:</b> A theoretical gas consisting of point-like, non-interacting molecules undergoing perfectly elastic collisions ($P V = n R T$).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Gas Pressure ($P$):</b> Macroscopic force per unit area exerted on container walls due to continuous elastic collision momentum transfer ($P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">RMS Speed ($v_{\\text{rms}}$):</b> Square root of the mean squared molecular speeds; $v_{\\text{rms}} = \\sqrt{3 k_B T / m} = \\sqrt{3 R T / M}$.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Kinetic Temperature:</b> Absolute temperature $T$ is directly proportional to the average translational kinetic energy per molecule ($\\overline{\\epsilon} = \\frac{3}{2} k_B T$).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Degrees of Freedom ($f$):</b> Number of independent coordinate directions or quadratic velocity components needed to specify the energy state of a molecule.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Law of Equipartition:</b> In thermal equilibrium, total energy is shared equally among all active degrees of freedom, each contributing $\\frac{1}{2} k_B T$ per molecule.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Mean Free Path ($\lambda$):</b> The average straight-line distance traveled by a gas molecule between two consecutive collisions ($\\lambda = \\frac{1}{\\sqrt{2}\\pi n d^2}$).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 10px; border-radius: 6px; border-left: 2px solid ${themeColor};">
        <b style="color: ${themeColor};">Avogadro's Number ($N_A$):</b> Number of elementary constituent particles contained in exactly 1 mole of substance ($N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$).
      </div>
    </div>
  </div>

  <!-- SECTION 1: EQUATION OF STATE OF A PERFECT GAS AND WORK IN COMPRESSION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(66, 165, 245, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Equation of State of a Perfect Gas and Work Done in Compressing a Gas
  </h2>

  <p>
    The macroscopic behavior of gases is characterized by four primary state variables: pressure ($P$), volume ($V$), absolute thermodynamic temperature ($T$), and the amount of substance in moles ($n$). In classical physics, an idealized gas whose behavior can be completely described by a simple mathematical relationship at all temperatures and pressures is termed a <b style="color: ${themeColor};">perfect gas (ideal gas)</b>.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Empirical Gas Laws:
  </h3>
  <ul>
    <li>
      <b style="color: ${themeColor};">Boyle's Law (Robert Boyle, 1662):</b> At a constant temperature ($T = \\text{const}$), the volume of a fixed mass of gas is inversely proportional to its pressure:
      $$V \\propto \\frac{1}{P} \\implies P V = \\text{constant} \\quad (P_1 V_1 = P_2 V_2)$$
    </li>
    <li>
      <b style="color: ${themeColor};">Charles's Law (Jacques Charles, 1787):</b> At a constant pressure ($P = \\text{const}$), the volume of a fixed mass of gas is directly proportional to its absolute thermodynamic temperature:
      $$V \\propto T \\implies \\frac{V}{T} = \\text{constant} \\quad \\left(\\frac{V_1}{T_1} = \\frac{V_2}{T_2}\\right)$$
    </li>
    <li>
      <b style="color: ${themeColor};">Gay-Lussac's Law (Regnault's Law):</b> At a constant volume ($V = \\text{const}$), the pressure of a given mass of gas is directly proportional to its absolute temperature:
      $$P \\propto T \\implies \\frac{P}{T} = \\text{constant} \\quad \\left(\\frac{P_1}{T_1} = \\frac{P_2}{T_2}\\right)$$
    </li>
    <li>
      <b style="color: ${themeColor};">Avogadro's Law (Amedeo Avogadro, 1811):</b> Equal volumes of all ideal gases under identical conditions of temperature and pressure contain an equal number of molecules ($V \\propto n$). At standard temperature and pressure (STP: $0^{\\circ}\\text{C} = 273.15\\text{ K}$, $1\\text{ atm} = 1.013 \\times 10^5\\text{ Pa}$), one mole of any ideal gas occupies a molar volume of <b>$22.414\\text{ liters} = 2.24 \\times 10^{-2}\\text{ m}^3$</b>.
    </li>
  </ul>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Universal Ideal Gas Equation of State:
  </h3>
  <p>
    Combining the empirical laws yields the unified <b style="color: ${themeColor};">Equation of State of a Perfect Gas</b>:
    $$P V = n R T$$
    where $R$ is the <b>Universal Gas Constant</b> ($R = 8.314\\text{ J/mol}\\cdot\\text{K} = 1.987\\text{ cal/mol}\\cdot\\text{K}$).<br/>
    If $N$ represents the total number of molecules and $N_A$ is Avogadro's number ($n = N / N_A$):
    $$P V = \\frac{N}{N_A} R T = N \\left(\\frac{R}{N_A}\\right) T = N k_B T$$
    where $k_B$ is the <b>Boltzmann Constant</b>:
    $$k_B = \\frac{R}{N_A} = \\frac{8.314}{6.022 \\times 10^{23}} = 1.3806 \\times 10^{-23}\\text{ J/K}$$
    If $\\rho = M_{\\text{total}} / V = (n M) / V$ is the mass density of the gas:
    $$P = \\frac{\\rho R T}{M} \\implies \\frac{P}{\\rho T} = \\frac{R}{M} = \\text{constant}$$
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iii) Work Done in Compressing a Gas:
  </h3>
  <p>
    When an external force pushes a piston inward, reducing the gas volume from initial volume $V_1$ to final volume $V_2$ ($V_2 < V_1$), mechanical work is done <i>on</i> the gas. By general definition:
    $$W = \\int_{V_1}^{V_2} P \\, dV$$
    Because $dV < 0$, work done by the gas is negative ($W < 0$). The work done <i>on</i> the gas by external agency is $W_{\\text{on}} = -W = \\int_{V_2}^{V_1} P dV > 0$.
  </p>
  <ul>
    <li>
      <b style="color: ${themeColor};">Isothermal Compression ($T = \\text{constant}$):</b>
      $$W_{\\text{iso}} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = -n R T \\ln\\left(\\frac{V_1}{V_2}\\right) = -2.303 n R T \\log_{10}\\left(\\frac{V_1}{V_2}\\right)$$
      All heat produced during compression is conducted away through diathermic walls into the reservoir ($Q = W_{\\text{iso}} < 0$).
    </li>
    <li>
      <b style="color: ${themeColor};">Adiabatic Compression ($dQ = 0$):</b>
      $$W_{\\text{adia}} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{n R (T_1 - T_2)}{\\gamma - 1} < 0$$
      Since no heat escapes, all compression work increases the internal energy of the gas ($W_{\\text{on}} = \\Delta U > 0$), producing a steep rise in gas temperature ($T_2 > T_1$).
    </li>
    <li>
      <b style="color: ${themeColor};">Comparison:</b> On a $P-V$ diagram, the adiabatic compression curve rises much more steeply than the isothermal curve. Consequently, <b>more work is required to compress a gas adiabatically than isothermally</b> to the same final volume ($|W_{\\text{adia}}| > |W_{\\text{iso}}|$).
    </li>
  </ul>

  ${defBox(
    "van der Waals Equation for Real Gases",
    "Real gases deviate from the ideal equation at high pressures and low temperatures due to finite molecular volume and intermolecular attractions: $$\\left( P + \\frac{a n^2}{V^2} \\right) (V - n b) = n R T$$ where $a$ corrects for intermolecular attractive forces and $b$ corrects for the effective co-volume occupied by the molecules themselves."
  )}

  <!-- SECTION 2: KINETIC THEORY OF GASES AND PRESSURE DERIVATION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(66, 165, 245, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    2. Kinetic Theory of Gases: Assumptions, Concept of Pressure, and Derivation
  </h2>

  <p>
    The Kinetic Theory of Gases connects the microscopic dynamical motions of individual molecules to the macroscopic thermodynamic properties ($P, V, T$) of bulk matter using the laws of Newtonian mechanics and statistical averages.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Basic Assumptions (Postulates) of the Kinetic Theory:
  </h3>
  <ol>
    <li><b style="color: ${themeColor};">Point Masses:</b> A gas consists of an enormous number of identical, tiny, hard, spherical particles called molecules. The actual physical volume occupied by all the gas molecules is negligible compared to the total volume of the container.</li>
    <li><b style="color: ${themeColor};">Ceaseless Random Motion:</b> Molecules are in continuous, chaotic, random motion in all possible directions with all possible velocities ranging from zero to infinity.</li>
    <li><b style="color: ${themeColor};">Zero Intermolecular Forces:</b> There are no intermolecular forces of attraction or repulsion between molecules or between molecules and walls, except during the instant of physical collision. All internal energy is purely kinetic.</li>
    <li><b style="color: ${themeColor};">Perfect Elasticity:</b> Collisions of molecules with one another and with container walls are perfectly elastic. Total kinetic energy and linear momentum are conserved during every collision.</li>
    <li><b style="color: ${themeColor};">Negligible Collision Duration:</b> The time spent during a physical collision is negligible compared to the time interval between two successive collisions.</li>
    <li><b style="color: ${themeColor};">Straight-Line Trajectories:</b> Between collisions, molecules travel in straight lines at constant speed in accordance with Newton's First Law.</li>
    <li><b style="color: ${themeColor};">Negligible Gravity Effect:</b> Because molecular speeds are very high (hundreds of m/s) and molecular masses are tiny ($10^{-26}\\text{ kg}$), the effect of gravity on molecular trajectories is negligible.</li>
  </ol>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Physical Concept of Gas Pressure:
  </h3>
  <p>
    Gas pressure is not an intrinsic static force. Rather, it is a <b>dynamic statistical phenomenon</b>. When billions of rapidly moving gas molecules bombard the internal walls of the container, they undergo elastic collisions and bounce back, reversing their normal momentum. By Newton's Second and Third Laws, this continuous transfer of momentum exerts a steady average outward normal force on the walls. The time-averaged normal force exerted per unit surface area constitutes the macroscopic <b style="color: ${themeColor};">gas pressure</b>.
  </p>

  ${stepDerivationBox(
    "Mathematical Derivation of Gas Pressure (P = 1/3 ρ v_rms^2)",
    [
      {
        name: "Box Geometry and Velocity Components",
        desc: "Consider $N$ identical gas molecules, each of mass $m$, enclosed in a cubical box of side $L$ (Volume $V = L^3$). Let a molecule move with velocity $\\vec{v} = (v_x, v_y, v_z)$, such that $v^2 = v_x^2 + v_y^2 + v_z^2$."
      },
      {
        name: "Momentum Change Per Wall Collision",
        desc: "When the molecule collides elastically with a face of area $A = L^2$ perpendicular to the x-axis, its y and z components remain unchanged, while its x-component reverses ($v_x \\to -v_x$). The change in momentum of the molecule is: $$\\Delta p_x = (-m v_x) - (m v_x) = -2 m v_x$$ By Newton's Third Law, the momentum imparted to the wall is $+2 m v_x$."
      },
      {
        name: "Collision Frequency and Single Molecule Force",
        desc: "After bouncing off the right wall, the molecule travels a distance $2L$ (back and forth across the box) before colliding with the same wall again. The time interval between collisions with this wall is $\\Delta t = \\frac{2L}{v_x}$. The average force exerted on the wall by this single molecule is: $$F_i = \\frac{\\Delta p}{\\Delta t} = \\frac{2 m v_{ix}}{2L / v_{ix}} = \\frac{m v_{ix}^2}{L}$$"
      },
      {
        name: "Total Force and Isotropic Symmetry",
        desc: "The total force exerted on the wall by all $N$ molecules is: $$F_x = \\sum_{i=1}^N \\frac{m v_{ix}^2}{L} = \\frac{m}{L} N \\overline{v_x^2}$$ Because molecular motion is completely isotropic (equal probability of motion in x, y, and z directions): $$\\overline{v_x^2} = \\overline{v_y^2} = \\overline{v_z^2} = \\frac{1}{3} \\overline{v^2} = \\frac{1}{3} v_{\\text{rms}}^2$$"
      },
      {
        name: "Final Pressure Expression",
        desc: "Pressure is total force divided by wall area $A = L^2$: $$P = \\frac{F_x}{L^2} = \\frac{m N \\overline{v^2}}{3 L^3} = \\frac{1}{3} \\frac{m N}{V} v_{\\text{rms}}^2$$ Since total gas mass is $M = m N$ and density is $\\rho = M / V$: $$\\mathbf{P = \\frac{1}{3} \\rho v_{\\text{rms}}^2}$$"
      }
    ]
  )}

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iii) Relation Between Pressure and Kinetic Energy Density:
  </h3>
  <p>
    The total translational kinetic energy of $N$ molecules enclosed in volume $V$ is:
    $$E_k = N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right) = \\frac{1}{2} M v_{\\text{rms}}^2$$
    The translational kinetic energy per unit volume (energy density $E$) is:
    $$E = \\frac{E_k}{V} = \\frac{1}{2} \\rho v_{\\text{rms}}^2$$
    Comparing this with $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$:
    $$P = \\frac{2}{3} \\left( \\frac{1}{2} \\rho v_{\\text{rms}}^2 \\right) \\implies \\mathbf{P = \\frac{2}{3} E}$$
    Thus, <b>the hydrostatic pressure exerted by an ideal gas is numerically equal to two-thirds of its translational kinetic energy density</b>.
  </p>

  <!-- SECTION 3: KINETIC INTERPRETATION OF TEMPERATURE AND MOLECULAR SPEEDS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(66, 165, 245, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    3. Kinetic Interpretation of Temperature and RMS Speed of Gas Molecules
  </h2>

  <p>
    One of the greatest achievements of the kinetic theory is providing an objective, microscopic mechanical definition for temperature.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Kinetic Interpretation of Temperature:
  </h3>
  <p>
    Multiply both sides of the pressure equation by volume $V$:
    $$P V = \\frac{1}{3} m N v_{\\text{rms}}^2 = \\frac{2}{3} N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right)$$
    From the ideal gas equation of state, $P V = N k_B T$. Equating the two expressions:
    $$N k_B T = \\frac{2}{3} N \\left( \\frac{1}{2} m v_{\\text{rms}}^2 \\right)$$
    $$\\mathbf{\\overline{\\epsilon} = \\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T}$$
    For one mole of gas containing $N_A$ molecules ($N_A k_B = R$):
    $$\\mathbf{E_{\\text{mole}} = \\frac{3}{2} R T}$$
  </p>

  ${defBox(
    "Kinetic Definition of Absolute Temperature",
    "Absolute thermodynamic temperature ($T$) is a direct macroscopic measure of the mean translational kinetic energy of the constituent molecules of an ideal gas: $$\\overline{\\epsilon} \\propto T$$ At absolute zero ($T = 0\\text{ K}$), the mean kinetic energy drops to zero and all classical molecular translational motion ceases completely ($v_{\\text{rms}} = 0$)."
  )}

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Root Mean Square (RMS) Speed of Gas Molecules:
  </h3>
  <p>
    From $\\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T$, solving for $v_{\\text{rms}}$ yields:
    $$\\mathbf{v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}} = \\sqrt{\\frac{3 P}{\\rho}}}$$
    where $M = m N_A$ is the molar mass of the gas.<br/>
    From this expression:
    $$v_{\\text{rms}} \\propto \\sqrt{T} \\quad \\text{and} \\quad v_{\\text{rms}} \\propto \\frac{1}{\\sqrt{M}}$$
    Lighter gas molecules move with vastly higher speeds than heavier molecules at the identical temperature (e.g., at $300\\text{ K}$, $v_{\\text{rms}} \\approx 1930\\text{ m/s}$ for $\\text{H}_2$, while $v_{\\text{rms}} \\approx 483\\text{ m/s}$ for $\\text{O}_2$).
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iii) Comparison of Molecular Speeds (Maxwell-Boltzmann Distribution):
  </h3>
  <p>
    Molecules in a gas do not all travel at the identical speed; they obey Maxwell's speed distribution law. Three characteristic speeds are defined:
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Most Probable Speed ($v_{\\text{mp}}$):</b> Speed possessed by the maximum number of molecules:
      $$v_{\\text{mp}} = \\sqrt{\\frac{2 R T}{M}} = \\sqrt{\\frac{2 k_B T}{m}} \\approx 1.414 \\sqrt{\\frac{R T}{M}}$$
    </li>
    <li><b style="color: ${themeColor};">Average (Mean) Speed ($\\overline{v}$):</b> Arithmetic mean of all molecular speeds:
      $$\\overline{v} = \\sqrt{\\frac{8 R T}{\\pi M}} = \\sqrt{\\frac{8 k_B T}{\\pi m}} \\approx 1.596 \\sqrt{\\frac{R T}{M}} \\approx 0.921 \\, v_{\\text{rms}}$$
    </li>
    <li><b style="color: ${themeColor};">Root Mean Square Speed ($v_{\\text{rms}}$):</b>
      $$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}} = \\sqrt{\\frac{3 k_B T}{m}} \\approx 1.732 \\sqrt{\\frac{R T}{M}}$$
    </li>
  </ul>
  <p>
    <b style="color: ${themeColor};">Ratio of Characteristic Speeds:</b>
    $$v_{\\text{mp}} : \\overline{v} : v_{\\text{rms}} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1 : 1.128 : 1.224$$
    $$v_{\\text{mp}} < \\overline{v} < v_{\\text{rms}}$$
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iv) Comparison Between RMS Speed and Speed of Sound:
  </h3>
  <p>
    The speed of sound in an ideal gas is given by Laplace's formula:
    $$v_{\\text{sound}} = \\sqrt{\\frac{\\gamma R T}{M}}$$
    Taking the ratio of sound speed to molecular RMS speed:
    $$\\frac{v_{\\text{sound}}}{v_{\\text{rms}}} = \\frac{\\sqrt{\\gamma R T / M}}{\\sqrt{3 R T / M}} = \\sqrt{\\frac{\\gamma}{3}}$$
    Because $\\gamma < 3$ for all known gases (for air, $\\gamma = 1.40$, so $\\sqrt{1.4 / 3} \\approx 0.68$):
    $$v_{\\text{sound}} < v_{\\text{rms}}$$
    Sound is a mechanical disturbance propagated through successive collisions between gas molecules. A disturbance cannot propagate faster than the molecules carrying the momentum themselves.
  </p>

  <!-- SECTION 4: DEGREES OF FREEDOM AND LAW OF EQUIPARTITION -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(66, 165, 245, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    4. Degrees of Freedom, Law of Equipartition of Energy, and Specific Heats
  </h2>

  <p>
    To calculate how heat energy is partitioned within complex polyatomic molecules, Boltzmann and Maxwell developed the theory of degrees of freedom and equipartition of energy.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Degrees of Freedom ($f$):
  </h3>
  <p>
    The <b style="color: ${themeColor};">degrees of freedom</b> ($f$) of a dynamical system is defined as the total number of independent coordinates or independent quadratic terms in the energy expression required to completely specify the position, orientation, and motion of all molecules in space:
    $$f = 3N - k$$
    where $N$ is the number of atoms in the molecule and $k$ is the number of rigid structural constraints between them.
  </p>
  <ul>
    <li><b style="color: ${themeColor};">Monoatomic Gas (He, Ne, Ar):</b> A single point mass atom. It has 3 independent translational coordinates ($x, y, z$). Moment of inertia about its own center is negligibly small ($I \\approx 0$). Thus, <b>$f = 3$</b> (all translational: $f_t = 3, f_r = 0$).</li>
    <li><b style="color: ${themeColor};">Diatomic Gas (O$_2$, N$_2$, H$_2$, CO):</b> Two atoms connected by a fixed interatomic bond distance ($k = 1$). $f = 3(2) - 1 = 5$. It has 3 translational coordinates plus 2 independent rotational axes perpendicular to the internuclear axis. (Rotation about the line of centers has negligible moment of inertia). At moderate temperatures: <b>$f = 5$</b> ($f_t = 3, f_r = 2$). At very high temperatures ($> 1000\\text{ K}$), molecular bond vibration adds 2 vibrational terms (1 vibrational kinetic + 1 vibrational potential), giving <b>$f = 7$</b>.</li>
    <li><b style="color: ${themeColor};">Triatomic / Polyatomic Non-Linear Gas (H$_2$O, CH$_4$):</b> Three or more atoms not arranged in a straight line ($k = 3$). $f = 3(3) - 3 = 6$. It possesses 3 translational and 3 independent rotational degrees of freedom: <b>$f = 6$</b> ($f_t = 3, f_r = 3$).</li>
  </ul>

  ${defBox(
    "Law of Equipartition of Energy",
    "For any dynamical system in complete thermal equilibrium at absolute temperature $T$, the total internal thermal energy is distributed equally among all its independent degrees of freedom, and the mean kinetic energy associated with each active degree of freedom per molecule is exactly: $$\\overline{E}_f = \\frac{1}{2} k_B T$$"
  )}

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Application to Molar Specific Heat Capacities of Gases:
  </h3>
  <p>
    For 1 mole of an ideal gas having $f$ degrees of freedom, each molecule possesses an average energy $\\overline{\\epsilon} = f \\times \\left(\\frac{1}{2} k_B T\\right)$.<br/>
    Total internal energy per mole ($N_A k_B = R$):
    $$U = N_A \\times \\left( \\frac{f}{2} k_B T \\right) = \\frac{f}{2} R T$$
    The molar heat capacity at constant volume ($C_v$) is:
    $$C_v = \\frac{dU}{dT} = \\frac{f}{2} R$$
    By Mayer's relation ($C_p = C_v + R$):
    $$C_p = \\frac{f}{2} R + R = \\left( \\frac{f}{2} + 1 \\right) R$$
    The adiabatic ratio of specific heats ($\\gamma$) is:
    $$\\gamma = \\frac{C_p}{C_v} = \\frac{\\left(\\frac{f}{2} + 1\\right) R}{\\frac{f}{2} R} = 1 + \\frac{2}{f}$$
  </p>

  <div style="overflow-x: auto; margin: 15px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(66, 165, 245, 0.15); border-bottom: 2px solid ${themeColor};">
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Gas Atomicity</th>
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">Degrees of Freedom ($f$)</th>
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">$C_v = \\frac{f}{2}R$</th>
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">$C_p = C_v + R$</th>
          <th style="padding: 8px; text-align: left; color: ${themeColor}; border: 1px solid rgba(255,255,255,0.1);">$\\gamma = 1 + \\frac{2}{f}$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Monoatomic (He, Ne, Ar)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$f = 3$ (trans)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{3}{2} R \\approx 12.47\\text{ J/mol K}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{5}{2} R \\approx 20.78\\text{ J/mol K}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{5}{3} \\approx 1.67$</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Diatomic (rigid: O$_2$, N$_2$)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$f = 5$ (3 trans + 2 rot)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{5}{2} R \\approx 20.78\\text{ J/mol K}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{7}{2} R \\approx 29.10\\text{ J/mol K}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{7}{5} = 1.40$</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Diatomic (non-rigid / vibrating)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$f = 7$ (3 trans + 2 rot + 2 vib)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{7}{2} R \\approx 29.10\\text{ J/mol K}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{9}{2} R \\approx 37.41\\text{ J/mol K}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{9}{7} \\approx 1.29$</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold; color: #F1F5F9;">Polyatomic Non-linear (H$_2$O)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$f = 6$ (3 trans + 3 rot)</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$3 R \\approx 24.94\\text{ J/mol K}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$4 R \\approx 33.26\\text{ J/mol K}$</td>
          <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1);">$\\frac{4}{3} \\approx 1.33$</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 5: MEAN FREE PATH AND AVOGADRO'S NUMBER -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(66, 165, 245, 0.4); padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    5. Mean Free Path and Avogadro's Number
  </h2>

  <p>
    Although gas molecules travel at colossal speeds (several hundreds of meters per second), the odor of perfume or smoke does not diffuse instantaneously across a room. This is because molecules collide trillions of times per second with neighboring air molecules, resulting in an erratic, zig-zag Brownian path.
  </p>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (i) Concept of Mean Free Path ($\lambda$):
  </h3>
  <p>
    The straight-line path traversed by a gas molecule between any two successive collisions with other molecules is called a <b>free path</b>. Because individual free paths vary randomly from collision to collision, the statistical average of these distances over a very large number of collisions is called the <b style="color: ${themeColor};">Mean Free Path</b> ($\\lambda$).
  </p>

  ${stepDerivationBox(
    "Derivation of Mean Free Path Formula",
    [
      {
        name: "Collision Cross-Section Cylinder",
        desc: "Consider spherical molecules of diameter $d$. A collision occurs whenever the centers of two molecules approach within a distance $d$. If we imagine one molecule traveling with average speed $\\overline{v}$ for time $t$ while assuming all other molecules are momentarily stationary, it sweeps out an imaginary collision cylinder of radius $d$, cross-sectional area $\\sigma = \\pi d^2$, and length $\\overline{v} t$."
      },
      {
        name: "Number of Collisions Swept",
        desc: "The volume of this cylinder is $V_{\\text{cyl}} = \\pi d^2 \\overline{v} t$. If $n = N/V$ is the number of molecules per unit volume (number density), the total number of collisions experienced in time $t$ is: $$N_{\\text{coll}} = n \\cdot V_{\\text{cyl}} = n \\pi d^2 \\overline{v} t$$"
      },
      {
        name: "Mean Free Path Definition",
        desc: "The mean free path is total distance divided by number of collisions: $$\\lambda = \\frac{\\text{Total Distance}}{\\text{Number of Collisions}} = \\frac{\\overline{v} t}{n \\pi d^2 \\overline{v} t} = \\frac{1}{\\pi n d^2}$$"
      },
      {
        name: "Clausius-Maxwell Relative Speed Correction",
        desc: "In reality, all target molecules are also moving randomly with Maxwellian velocity distributions. The relative speed of collision is $\\overline{v}_{\\text{rel}} = \\sqrt{2} \\overline{v}$. Incorporating this factor yields the exact formula: $$\\mathbf{\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}}$$"
      }
    ]
  )}

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (ii) Expression in Terms of Pressure and Temperature:
  </h3>
  <p>
    From the ideal gas law, $P = n k_B T \\implies n = \\frac{P}{k_B T}$. Substituting $n$ into the mean free path equation:
    $$\\mathbf{\\lambda = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}}$$
    From this fundamental relation:
  </p>
  <ul>
    <li><b style="color: ${themeColor};">At constant pressure:</b> $\\lambda \\propto T$ (increasing temperature expands gas, reducing density $n$, so molecules travel farther between collisions).</li>
    <li><b style="color: ${themeColor};">At constant temperature:</b> $\\lambda \\propto \\frac{1}{P}$ (compressing gas crowds molecules closer together, shortening the mean free path).</li>
    <li><b style="color: ${themeColor};">At constant volume ($n = \\text{const}$):</b> $\\lambda$ is independent of temperature and pressure!</li>
  </ul>

  <h3 style="color: ${themeColor}; font-size: 17px; margin-top: 18px;">
    (iii) Avogadro's Number ($N_A$) and Loschmidt Number ($n_0$):
  </h3>
  <p>
    <b style="color: ${themeColor};">Avogadro's Constant:</b> $N_A$ is the number of constituent carbon-12 atoms in exactly 12 grams of $^{12}\\text{C}$:
    $$N_A = 6.02214 \\times 10^{23}\\text{ mol}^{-1}$$
    <b style="color: ${themeColor};">Loschmidt Number ($n_0$):</b> The number of gas molecules present per cubic meter ($1\\text{ m}^3$) of an ideal gas at standard temperature and pressure (STP: $0^{\\circ}\\text{C}$, $1\\text{ atm}$):
    $$n_0 = \\frac{N_A}{V_{\\text{molar}}} = \\frac{6.022 \\times 10^{23}}{2.2414 \\times 10^{-2}\\text{ m}^3} \\approx \\mathbf{2.687 \\times 10^{25}\\text{ molecules/m}^3}$$
  </p>

  <!-- SECTION 6: MASTER REVISION FORMULA CHEAT SHEET -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid rgba(66, 165, 245, 0.4); padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    6. Master Revision Formula Cheat Sheet
  </h2>

  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid ${themeColor}; border-radius: 10px; padding: 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35);">
    <h3 style="color: ${themeColor}; margin: 0 0 12px 0; font-size: 16px; text-align: center;">
      ⚡ Master Revision Formula Cheat Sheet &bull; Unit IX: Kinetic Theory of Gases
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 13px;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Gas Equation of State:</b><br/>
        $P V = n R T = N k_B T$<br/>
        $P = \\frac{\\rho R T}{M}$ &bull; $R = N_A k_B = 8.314\\text{ J/mol K}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Microscopic Gas Pressure:</b><br/>
        $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{1}{3} \\frac{m N}{V} v_{\\text{rms}}^2$<br/>
        Energy density: $P = \\frac{2}{3} E$ ($E = \\frac{1}{2} \\rho v_{\\text{rms}}^2$)
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Kinetic Temperature:</b><br/>
        Per molecule: $\\overline{\\epsilon} = \\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T$<br/>
        Per mole: $E_k = \\frac{3}{2} R T$ &bull; $v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Molecular Speed Ratios:</b><br/>
        $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$ &bull; $\\overline{v} = \\sqrt{\\frac{8RT}{\\pi M}}$ &bull; $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$<br/>
        $v_{\\text{mp}} : \\overline{v} : v_{\\text{rms}} = \\sqrt{2} : \\sqrt{8/\\pi} : \\sqrt{3} \\approx 1 : 1.128 : 1.224$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Equipartition & Specific Heats:</b><br/>
        Internal energy: $U = \\frac{f}{2} R T$<br/>
        $C_v = \\frac{f}{2} R$ &bull; $C_p = \\left(\\frac{f}{2} + 1\\right) R$ &bull; $\\gamma = 1 + \\frac{2}{f}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Mean Free Path ($\lambda$):</b><br/>
        $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2} = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$<br/>
        At STP: $\\lambda \\approx 10^{-7}\\text{ m} = 100\\text{ nm}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Fundamental Constants:</b><br/>
        $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$ &bull; $k_B = 1.38 \\times 10^{-23}\\text{ J/K}$<br/>
        Loschmidt: $n_0 = 2.687 \\times 10^{25}\\text{ m}^{-3}$
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; border-left: 3px solid ${themeColor};">
        <b style="color: ${themeColor};">Dulong-Petit Law for Solids:</b><br/>
        $3$ vibrational DOF per atom &bull; $U = 3 N_A k_B T = 3 R T$<br/>
        Molar heat capacity: $C = 3 R \\approx 24.9\\text{ J/mol K}$
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
