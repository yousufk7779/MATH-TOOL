const { themeColor, frac } = require('./c11_phy_1_helpers');

function getLaQuestions() {
  const qList = [
    {
      q: "Explain the Principle of Dimensional Homogeneity. Using this principle, derive the formula for the time period (T) of a simple pendulum, detailing every algebraic step and justifying why bob mass does not appear in the final relation.",
      sol: `<b>1. Principle of Dimensional Homogeneity:</b> The Principle of Dimensional Homogeneity states that any physically meaningful equation must possess identical dimensions across every term on both sides. Terms with dissimilar dimensions cannot be added, subtracted, or equated.<br><br>
      <b>2. Mathematical Derivation of Simple Pendulum Period (T):</b><br>
      Assume time period $T$ depends upon:<br>
      &bull; Mass of the bob $m$ raised to power $a$: $m^a$<br>
      &bull; Effective length of pendulum $l$ raised to power $b$: $l^b$<br>
      &bull; Acceleration due to gravity $g$ raised to power $c$: $g^c$<br>
      Therefore: <b>T = k &middot; m<sup>a</sup> &middot; l<sup>b</sup> &middot; g<sup>c</sup></b>, where $k$ is a dimensionless proportionality constant.<br><br>
      <b>Step 1 &bull; Dimensional Representation:</b><br>
      [LHS] = $[T] = [M^0 L^0 T^1]$<br>
      [RHS] = $[m]^a [l]^b [g]^c = [M]^a [L]^b [L T^{-2}]^c = [M^a L^{b+c} T^{-2c}]$.<br><br>
      <b>Step 2 &bull; Equating Exponents:</b><br>
      By Principle of Homogeneity, equate powers of base quantities:<br>
      &bull; For [M]: <b>a = 0</b><br>
      &bull; For [T]: $-2c = 1 \implies \mathbf{c = -${frac('1', '2')}}$<br>
      &bull; For [L]: $b + c = 0 \implies b = -c \implies \mathbf{b = +${frac('1', '2')}}$<br><br>
      <b>Step 3 &bull; Formula Assembly:</b><br>
      Substitute $a = 0, b = 1/2, c = -1/2$ back into the assumed relation:<br>
      $T = k \cdot m^0 \cdot l^{1/2} \cdot g^{-1/2} = k \sqrt{${frac('l', 'g')}}$.<br>
      Experimental calibration establishes $k = 2\pi$, yielding:
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        T = 2\pi \sqrt{${frac('l', 'g')}}
      </div>
      <b>Physical Justification:</b> Since the exponent of mass is identically zero ($a = 0$), the period of a simple pendulum is strictly independent of the mass or composition of the bob. This is because inertial mass ($m_i$ resisting acceleration) and gravitational mass ($m_g$ experiencing gravitational pull) are equivalent, causing both light and heavy bobs to accelerate at identical rates ($g$).`
    },
    {
      q: "Derive an expression for the Centripetal Force (F) acting on an object of mass m moving with uniform speed v in a circular path of radius r, utilizing dimensional analysis. Discuss the physical significance of each exponent.",
      sol: `<b>1. Hypothesis Setup:</b><br>
      Centripetal force $F$ keeps a body on a curved circular trajectory. We hypothesize that $F$ depends upon:<br>
      &bull; Mass of the body ($m$) to power $a$: $m^a$<br>
      &bull; Orbital velocity ($v$) to power $b$: $v^b$<br>
      &bull; Radius of curvature ($r$) to power $c$: $r^c$<br>
      Relationship: <b>F = k &middot; m<sup>a</sup> &middot; v<sup>b</sup> &middot; r<sup>c</sup></b>, where $k$ is a dimensionless constant.<br><br>
      <b>Step 1 &bull; Dimensions of Individual Parameters:</b><br>
      Force: $[F] = [M L T^{-2}]$<br>
      Mass: $[m] = [M]$<br>
      Velocity: $[v] = [L T^{-1}]$<br>
      Radius: $[r] = [L]$<br><br>
      <b>Step 2 &bull; Substitute Dimensions:</b><br>
      $[M^1 L^1 T^{-2}] = [M]^a [L T^{-1}]^b [L]^c = [M^a L^{(b+c)} T^{-b}]$.<br><br>
      <b>Step 3 &bull; Solve Linear Equations for Exponents:</b><br>
      &bull; Comparing power of [M]: $\mathbf{a = 1}$<br>
      &bull; Comparing power of [T]: $-b = -2 \implies \mathbf{b = 2}$<br>
      &bull; Comparing power of [L]: $b + c = 1 \implies 2 + c = 1 \implies \mathbf{c = -1}$<br><br>
      <b>Step 4 &bull; Synthesis of the Law:</b><br>
      Substitute exponents into the original equation:<br>
      $F = k \cdot m^1 \cdot v^2 \cdot r^{-1} = k ${frac('m v<sup>2</sup>', 'r')}$.<br>
      In SI units, absolute definition of force yields $k = 1$, giving:
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        F = ${frac('m v<sup>2</sup>', 'r')}
      </div>
      <b>Physical Significance of Exponents:</b><br>
      &bull; $a = 1$: Force scales linearly with mass (Newton's second law).<br>
      &bull; $b = 2$: Doubling vehicle speed quadruples the required inward centripetal force, explaining sharp turn skid hazards.<br>
      &bull; $c = -1$: Tighter curves (smaller $r$) require inversely greater centripetal force to avoid overturning.`
    },
    {
      q: "State Stokes' Law for viscous drag. Derive it by dimensional analysis, and explain the physical assumptions underlying this equation.",
      sol: `<b>1. Stokes' Law Statement:</b> When a smooth, rigid spherical body moves through a continuous, infinite, viscous fluid medium, the retarding viscous drag force $F$ experienced by the sphere is directly proportional to its radius ($r$), its velocity ($v$), and the dynamic viscosity (&eta;) of the fluid.<br><br>
      <b>2. Dimensional Derivation:</b><br>
      Assume: <b>F = k &middot; &eta;<sup>a</sup> &middot; r<sup>b</sup> &middot; v<sup>c</sup></b> (where $k$ is a dimensionless proportionality constant).<br>
      Dimensions of parameters:<br>
      &bull; Force $[F] = [M L T^{-2}]$<br>
      &bull; Viscosity $[\eta] = [M L^{-1} T^{-1}]$ (from $F = \eta A \frac{dv}{dx}$)<br>
      &bull; Radius $[r] = [L]$<br>
      &bull; Velocity $[v] = [L T^{-1}]$<br><br>
      Substitute into power relation:<br>
      $[M^1 L^1 T^{-2}] = [M L^{-1} T^{-1}]^a [L]^b [L T^{-1}]^c = [M^a L^{(-a + b + c)} T^{(-a - c)}]$.<br><br>
      Equating powers of base quantities:<br>
      &bull; For [M]: $\mathbf{a = 1}$<br>
      &bull; For [T]: $-a - c = -2 \implies -1 - c = -2 \implies \mathbf{c = 1}$<br>
      &bull; For [L]: $-a + b + c = 1 \implies -1 + b + 1 = 1 \implies \mathbf{b = 1}$<br><br>
      Substitute $a = 1, b = 1, c = 1$:<br>
      $F = k \cdot \eta \cdot r \cdot v$.<br>
      Sir George Gabriel Stokes proved analytically via hydrodynamic Navier-Stokes equations that $k = 6\pi$, yielding:
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        F = 6\pi \eta r v
      </div>
      <b>Physical Assumptions:</b><br>
      (1) The fluid medium is infinite in extent.<br>
      (2) The falling sphere is perfectly rigid, smooth, and spherical.<br>
      (3) Velocity of sphere is small (laminar streamline flow, no turbulent eddies, low Reynolds number $N_R < 1$).<br>
      (4) There is no slip between fluid and sphere surface.`
    },
    {
      q: "Deduce Poiseuille's formula for the rate of steady laminar volume flow (V) of a liquid through a narrow capillary tube of radius r and length l under a pressure head P, using dimensional analysis.",
      sol: `<b>1. Hypothesis:</b><br>
      Let volume of liquid flowing out per unit second ($V = \text{Volume}/\text{time}$, dimensions $[L^3 T^{-1}]$) depend on:<br>
      (1) Pressure gradient along tube: $P/l$ raised to power $a$<br>
      (2) Radius of capillary tube: $r$ raised to power $b$<br>
      (3) Coefficient of viscosity of liquid: &eta; raised to power $c$<br>
      Equation: <b>V = k &middot; (${frac('P', 'l')})<sup>a</sup> &middot; r<sup>b</sup> &middot; &eta;<sup>c</sup></b>.<br><br>
      <b>2. Dimensional Formulas:</b><br>
      &bull; Rate of volume flow: $[V] = [L^3 T^{-1}]$<br>
      &bull; Pressure per unit length: $[P/l] = \frac{[M L^{-1} T^{-2}]}{[L]} = [M L^{-2} T^{-2}]$<br>
      &bull; Radius: $[r] = [L]$<br>
      &bull; Viscosity: $[\eta] = [M L^{-1} T^{-1}]$<br><br>
      <b>3. Equate Dimensions:</b><br>
      $[M^0 L^3 T^{-1}] = [M L^{-2} T^{-2}]^a [L]^b [M L^{-1} T^{-1}]^c = [M^{(a + c)} L^{(-2a + b - c)} T^{(-2a - c)}]$.<br><br>
      Equate powers:<br>
      &bull; [M]: $a + c = 0 \implies c = -a$<br>
      &bull; [T]: $-2a - c = -1 \implies -2a - (-a) = -1 \implies -a = -1 \implies \mathbf{a = 1}$<br>
      Hence: $\mathbf{c = -1}$<br>
      &bull; [L]: $-2a + b - c = 3 \implies -2(1) + b - (-1) = 3 \implies -2 + b + 1 = 3 \implies b - 1 = 3 \implies \mathbf{b = 4}$<br><br>
      <b>4. Formula Synthesis:</b><br>
      Substitute $a = 1, b = 4, c = -1$:<br>
      $V = k (${frac('P', 'l')})^1 r^4 \eta^{-1} = k ${frac('P r<sup>4</sup>', '&eta; l')}$.<br>
      Analytical fluid dynamics proves $k = \pi / 8$, yielding <b>Poiseuille's Law</b>:
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        V = ${frac('&pi; P r<sup>4</sup>', '8 &eta; l')}
      </div>
      <b>Key Insight:</b> Flow rate scales with the <b>fourth power of radius ($r^4$)</b>, illustrating why minor constrictions in human blood vessels cause dramatic surges in blood pressure.`
    },
    {
      q: "Analyze the dimensional consistency of the Newton-Laplace equation for the speed of sound in a gas: v = √(γ P / ρ). Explain why Newton's isothermal assumption failed and how Laplace corrected it.",
      sol: `<b>1. Dimensional Verification:</b><br>
      LHS: Speed of sound $[v] = [L T^{-1}]$.<br>
      RHS: The adiabatic ratio &gamma; = C<sub>p</sub> / C<sub>v</sub> is a pure dimensionless number ([&gamma;] = [1]).<br>
      Dimensions of Pressure: $[P] = [M L^{-1} T^{-2}]$<br>
      Dimensions of Density: $[\rho] = [M L^{-3}]$<br>
      Ratio: $[P / \rho] = \frac{[M L^{-1} T^{-2}]}{[M L^{-3}]} = [M^{(1-1)} L^{(-1+3)} T^{-2}] = [L^2 T^{-2}]$.<br>
      Taking square root: $[(P / \rho)^{1/2}] = ([L^2 T^{-2}])^{1/2} = [L T^{-1}]$.<br>
      Since $[\text{LHS}] = [\text{RHS}] = [L T^{-1}]$, the equation is <b>dimensionally consistent</b>.<br><br>
      <b>2. Physical Historical Context:</b><br>
      &bull; <b>Newton's Assumption (Isothermal Propagation):</b> Newton assumed sound compressions and rarefactions occur slowly, allowing heat to exchange with surroundings, keeping temperature constant ($E = P$). This predicted $v = \sqrt{P/\rho} \approx 280 \text{ m s}^{-1}$ in air at STP, which was ~16% lower than experimental value ($331 \text{ m s}^{-1}$).<br>
      &bull; <b>Laplace's Correction (Adiabatic Propagation):</b> In 1816, Laplace recognized that sound vibrations occur with extreme rapidness and air is a poor conductor of heat. Therefore, compressions cause rapid heating and rarefactions cause rapid cooling with zero time for heat exchange (adiabatic process). The adiabatic bulk modulus is $E_s = \gamma P$.<br>
      &bull; This gave $v = \sqrt{\gamma P / \rho} = \sqrt{1.41 \times (1.013 \times 10^5) / 1.293} = \mathbf{331.3 \text{ m s}^{-1}}$, matching experimental observations perfectly.`
    },
    {
      q: "Explain how dimensional analysis is applied to convert a physical quantity from one system of units to another. Provide a step-by-step conversion of 100 Watt of electrical power into an arbitrary system whose base units are 10 kg, 100 m, and 1 minute.",
      sol: `<b>1. Principle of Unit Conversion:</b><br>
      Physical magnitude $Q = n_1 u_1 = n_2 u_2$ is invariant under system transitions.<br>
      If a quantity has dimensional formula $[M^a L^b T^c]$, its unit in System 1 is $u_1 = M_1^a L_1^b T_1^c$ and in System 2 is $u_2 = M_2^a L_2^b T_2^c$.<br>
      Master conversion formula:
      <div style="text-align: center; margin: 8px 0; font-size: 16px;">
        <b>n<sub>2</sub> = n<sub>1</sub> \left[${frac('M<sub>1</sub>', 'M<sub>2</sub>')}\right]<sup>a</sup> \left[${frac('L<sub>1</sub>', 'L<sub>2</sub>')}\right]<sup>b</sup> \left[${frac('T<sub>1</sub>', 'T<sub>2</sub>')}\right]<sup>c</sup></b>
      </div>
      <b>2. Conversion of P = 100 Watt:</b><br>
      Power = Work / Time $\implies [P] = [M L^2 T^{-3}] \implies a = 1, b = 2, c = -3$.<br><br>
      <b>System 1 (SI):</b><br>
      $n_1 = 100$<br>
      $M_1 = 1 \text{ kg}, L_1 = 1 \text{ m}, T_1 = 1 \text{ s}$<br><br>
      <b>System 2 (New Custom System):</b><br>
      $M_2 = 10 \text{ kg} \implies M_1 / M_2 = 1 / 10 = 10^{-1}$<br>
      $L_2 = 100 \text{ m} \implies L_1 / L_2 = 1 / 100 = 10^{-2}$<br>
      $T_2 = 1 \text{ min} = 60 \text{ s} \implies T_1 / T_2 = 1 / 60$<br><br>
      <b>Calculation:</b><br>
      $n_2 = 100 \times \left[${frac('1', '10')}\right]^1 \times \left[${frac('1', '100')}\right]^2 \times \left[${frac('1', '60')}\right]^{-3}$<br>
      $n_2 = 100 \times 10^{-1} \times (10^{-2})^2 \times (60)^3$<br>
      $n_2 = 10^2 \times 10^{-1} \times 10^{-4} \times 216,000$<br>
      $n_2 = 10^{-3} \times 2.16 \times 10^5 = 2.16 \times 10^2 = \mathbf{216}$.<br><br>
      <b>Result:</b> 100 Watt in the new system equals <b>216 new units of power</b>.`
    },
    {
      q: "Explain why van der Waals' gas equation requires correction terms for ideal gas behavior. State the equation and prove the dimensional formulas and SI units of van der Waals constants a and b.",
      sol: `<b>1. Physical Origin of Corrections:</b><br>
      The ideal gas equation $P V = n R T$ assumes:<br>
      (a) Gas molecules are point masses with negligible finite volume.<br>
      (b) Intermolecular forces between gas molecules are zero.<br>
      Johannes Diderik van der Waals corrected these assumptions for real gases:<br>
      &bull; <b>Volume Correction:</b> Real molecules have a finite incompressible core volume. The free available volume for motion is $(V - b)$, where $b$ represents effective molecular co-volume.<br>
      &bull; <b>Pressure Correction:</b> Interior molecules attract surface molecules inward, reducing impact force against container walls. Real observed pressure $P$ must be augmented by an internal cohesion pressure term ${frac('a', 'V<sup>2</sup>')}$.<br><br>
      <b>van der Waals Equation:</b>
      <div style="text-align: center; margin: 8px 0; font-size: 16px;">
        \left(P + ${frac('a', 'V<sup>2</sup>')}\right) (V - b) = R T \quad (\text{for 1 mole})
      </div>
      <b>2. Dimensional Proof by Homogeneity:</b><br>
      <b>For constant a:</b><br>
      Because ${frac('a', 'V<sup>2</sup>')}$ is added directly to pressure $P$, by Principle of Homogeneity:<br>
      $[P] = \left[${frac('a', 'V<sup>2</sup>')}\right] \implies [a] = [P] [V^2]$<br>
      $[a] = [M L^{-1} T^{-2}] \times ([L^3])^2 = [M L^{-1} T^{-2}] [L^6] = \mathbf{[M L^5 T^{-2}]}$.<br>
      <b>SI Unit of a:</b> $\text{N m}^4 = \text{kg m}^5 \text{s}^{-2} \text{mol}^{-2}$.<br><br>
      <b>For constant b:</b><br>
      Because $b$ is subtracted from molar volume $V$, it must have the dimensions of volume:<br>
      $[b] = [V] = \mathbf{[M^0 L^3 T^0]}$.<br>
      <b>SI Unit of b:</b> $\text{m}^3 \text{mol}^{-1}$.`
    },
    {
      q: "Define the four standard natural Planck Units (Planck Length, Planck Mass, Planck Time, Planck Temperature) derived from fundamental constants c, G, h, and k_B. Derive expressions for Planck Length and Planck Mass dimensionally.",
      sol: `<b>1. Concept of Natural Planck Units:</b><br>
      In 1899, Max Planck discovered that combinations of fundamental universal constants—speed of light $c$, gravitational constant $G$, reduced Planck's constant $\hbar$ (or $h$), and Boltzmann constant $k_B$—form natural, coordinate-independent units of measurement defining the fundamental quantum gravitational scale of nature.<br><br>
      <b>2. Derivation of Planck Length (l_p):</b><br>
      Let $l_p = c^a G^b h^c$. Dimensions:<br>
      $[c] = [L T^{-1}]$, $[G] = [M^{-1} L^3 T^{-2}]$, $[h] = [M L^2 T^{-1}]$.<br>
      $[M^0 L^1 T^0] = [L T^{-1}]^a [M^{-1} L^3 T^{-2}]^b [M L^2 T^{-1}]^c = [M^{(-b+c)} L^{(a+3b+2c)} T^{(-a-2b-c)}]$.<br>
      Equate powers:<br>
      (1) $-b + c = 0 \implies b = c$<br>
      (2) $-a - 2b - c = 0 \implies -a - 3b = 0 \implies a = -3b$<br>
      (3) $a + 3b + 2c = 1 \implies -3b + 3b + 2b = 1 \implies 2b = 1 \implies b = 1/2$.<br>
      Hence: $c = 1/2$, and $a = -3(1/2) = -3/2$.<br>
      <b>l<sub>p</sub> = \sqrt{${frac('h G', 'c<sup>3</sup>')}} \approx 1.616 \times 10^{-35} \text{ m}</b>.<br><br>
      <b>3. Derivation of Planck Mass (m_p):</b><br>
      Let $m_p = c^a G^b h^c$.<br>
      $[M^1 L^0 T^0] = [M^{(-b+c)} L^{(a+3b+2c)} T^{(-a-2b-c)}]$.<br>
      (1) $-b + c = 1 \implies c = b + 1$<br>
      (2) $-a - 2b - (b+1) = 0 \implies -a - 3b - 1 = 0 \implies a = -3b - 1$<br>
      (3) $a + 3b + 2c = 0 \implies (-3b - 1) + 3b + 2(b + 1) = 0 \implies -1 + 2b + 2 = 0 \implies 2b = -1 \implies b = -1/2$.<br>
      Then $c = -1/2 + 1 = 1/2$, and $a = -3(-1/2) - 1 = 3/2 - 1 = 1/2$.<br>
      <b>m<sub>p</sub> = \sqrt{${frac('h c', 'G')}} \approx 2.176 \times 10^{-8} \text{ kg}</b>.<br><br>
      <b>4. Planck Time & Planck Temperature:</b><br>
      &bull; Planck Time: $t_p = l_p / c = \sqrt{${frac('h G', 'c<sup>5</sup>')}} \approx 5.39 \times 10^{-44} \text{ s}$.<br>
      &bull; Planck Temperature: $T_p = m_p c^2 / k_B = \sqrt{${frac('h c<sup>5</sup>', 'G k_B<sup>2</sup>')}} \approx 1.417 \times 10^{32} \text{ K}$.`
    },
    {
      q: "Explain in detail the 2019 Historic Revision of the SI System enacted by the CGPM. Contrast the modern constant-based definitions with historical physical prototypes.",
      sol: `<b>1. The Historic Shift in Metrology (May 20, 2019):</b><br>
      From 1889 to 2019, the kilogram was defined by a physical cylinder of platinum-iridium kept in a triple-vault at the BIPM in S&egrave;vres, France (the <i>International Prototype of the Kilogram - IPK</i>, or "Le Grand K"). Periodic comparisons showed that copies had drifted by ~50 micrograms due to surface contamination and cleaning wear. Basing modern quantum civilization on a single physical artifact prone to microgram drift was unacceptable.<br><br>
      <b>2. The Seven Defining Constants of Nature:</b><br>
      On World Metrology Day (May 20, 2019), the 26th CGPM officially redefined the entire SI system by fixing the exact numerical values of 7 physical constants with <b>zero measurement uncertainty</b>:<br>
      &bull; Hyperfine transition frequency of Caesium-133: $\Delta\nu_{Cs} = 9,192,631,770 \text{ s}^{-1}$ (fixes <b>Second</b>).<br>
      &bull; Speed of light in vacuum: $c = 299,792,458 \text{ m s}^{-1}$ (fixes <b>Meter</b>).<br>
      &bull; Planck constant: $h = 6.62607015 \times 10^{-34} \text{ J s} = \text{kg m}^2 \text{s}^{-1}$ (fixes <b>Kilogram</b> via Kibble balance).<br>
      &bull; Elementary charge: $e = 1.602176634 \times 10^{-19} \text{ C} = \text{A s}$ (fixes <b>Ampere</b>).<br>
      &bull; Boltzmann constant: $k_B = 1.380649 \times 10^{-23} \text{ J K}^{-1}$ (fixes <b>Kelvin</b>).<br>
      &bull; Avogadro constant: $N_A = 6.02214076 \times 10^{23} \text{ mol}^{-1}$ (fixes <b>Mole</b>).<br>
      &bull; Luminous efficacy of 540 THz radiation: $K_{cd} = 683 \text{ lm W}^{-1}$ (fixes <b>Candela</b>).<br><br>
      <b>3. Scientific Advantages:</b><br>
      (a) Standard units are now permanent, immutable, and accessible anywhere in the universe without physical artifacts.<br>
      (b) Enables direct realization of base units at microscopic quantum scales (e.g. quantum Hall effect, Josephson effect).`
    },
    {
      q: "Explain the classification of physical quantities into Dimensional Variables, Dimensionless Variables, Dimensional Constants, and Dimensionless Constants with 3 examples and physical interpretations of each.",
      sol: `Physical quantities are classified systematically based on whether they vary or remain fixed, and whether they possess dimensions:<br><br>
      <b>1. Dimensional Variables:</b><br>
      Quantities that change in magnitude from one situation to another and possess non-zero dimensions.<br>
      &bull; <i>Velocity ($[L T^{-1}]$):</i> Varies with speed and direction.<br>
      &bull; <i>Acceleration ($[L T^{-2}]$):</i> Changes during non-uniform motion.<br>
      &bull; <i>Force ($[M L T^{-2}]$):</i> Varies according to mass and acceleration.<br><br>
      <b>2. Dimensionless Variables:</b><br>
      Quantities that take variable numerical values depending on experimental conditions, but represent pure dimensionless ratios $[M^0 L^0 T^0]$.<br>
      &bull; <i>Refractive Index (&mu; = c / v):</i> Ratio of two velocities, varies across media.<br>
      &bull; <i>Mechanical Strain (&Delta;L / L):</i> Ratio of elongation to original length, varies with stress.<br>
      &bull; <i>Specific Gravity (&rho;<sub>substance</sub> / &rho;<sub>water</sub>):</i> Ratio of densities.<br><br>
      <b>3. Dimensional Constants:</b><br>
      Universal or empirical parameters that hold constant numerical values throughout nature but carry physical dimensions.<br>
      &bull; <i>Universal Gravitational Constant G:</i> $6.674 \times 10^{-11} \text{ N m}^2 \text{kg}^{-2}$, dimensions $[M^{-1} L^3 T^{-2}]$.<br>
      &bull; <i>Planck's Constant h:</i> $6.626 \times 10^{-34} \text{ J s}$, dimensions $[M L^2 T^{-1}]$.<br>
      &bull; <i>Speed of light in vacuum c:</i> $2.998 \times 10^8 \text{ m s}^{-1}$, dimensions $[L T^{-1}]$.<br><br>
      <b>4. Dimensionless Constants:</b><br>
      Universal mathematical or geometric numbers that have invariant fixed values and zero physical dimensions $[M^0 L^0 T^0]$.<br>
      &bull; <i>Pi (&pi; &approx; 3.14159...):</i> Ratio of circle circumference to diameter.<br>
      &bull; <i>Euler's number (e &approx; 2.71828...):</i> Base of natural logarithms.<br>
      &bull; <i>Pure integers and rational numbers:</i> $1, 2, 1/2, 4\pi$, etc.`
    },
    {
      q: "Explain why dimensional analysis is powerless to derive the formula for the distance traveled by a projectile or vehicle with initial velocity: s = u t + ½ a t². Detail 4 other critical limitations of dimensional analysis.",
      sol: `<b>1. Inability on Multi-Term Additive Expressions:</b><br>
      Dimensional analysis operates through multiplicative power laws: $Q = k A^a B^b C^c$. In the equation $s = ut + ½ at^2$, there are two separate additive terms on the right side ($ut$ and $½ at^2$). Dimensional analysis cannot generate the plus sign (+), nor can it deduce multiple independent numerical factors (the factor 1 for $ut$ and the factor $½$ for $at^2$) simultaneously. It can only check if each individual term is dimensionally homogeneous with displacement $[L]$.<br><br>
      <b>2. Four Other Fundamental Limitations:</b><br>
      &bull; <b>Limitation 1 &bull; Proportionality Constants ($k$):</b> Dimensional analysis gives no information regarding whether $k = 1, 2\pi, 1/2$, or any other numerical coefficient. Constants must be found through experimental measurements or analytical calculus derivations.<br>
      &bull; <b>Limitation 2 &bull; Breakdown for More Than 3 Variables in Mechanics:</b> In classical mechanics, dimensional equations yield only 3 independent simultaneous equations (from powers of $M, L, T$). If a physical phenomenon depends upon 4 or more independent variables, we obtain an underdetermined system with infinitely many mathematical solutions.<br>
      &bull; <b>Limitation 3 &bull; Transcendental Functions:</b> Trigonometric ($\sin \theta, \cos \omega t$), exponential ($e^{-\lambda t}$), and logarithmic ($\ln x$) functions must have dimensionless arguments. Dimensional analysis cannot deduce formulas containing such mathematical functions.<br>
      &bull; <b>Limitation 4 &bull; Inability to Distinguish Scalars from Vectors:</b> Two fundamentally distinct physical quantities can have identical dimensions. For example, <b>Work</b> (scalar dot product $\vec{F} \cdot \vec{d}$) and <b>Torque</b> (vector cross product $\vec{r} \times \vec{F}$) both possess dimensions $[M L^2 T^{-2}]$. Dimensional analysis cannot tell whether a calculated quantity is scalar or vector.`
    },
    {
      q: "State the rules for significant figures in scientific notation. Explain why expressing measurements in standard scientific notation (N × 10ⁿ) eliminates all ambiguity regarding trailing zeros.",
      sol: `<b>1. Ambiguity of Trailing Zeros in Integers:</b><br>
      In numbers without decimal points, such as $45,000 \text{ m}$, it is impossible to discern whether the trailing zeros are significant measuring digits or merely placeholders indicating magnitude. Depending on instrument precision:<br>
      &bull; If measured to the nearest 1000 m, it has 2 significant figures.<br>
      &bull; If measured to the nearest 100 m, it has 3 significant figures.<br>
      &bull; If measured to the nearest 1 m, it has 5 significant figures.<br><br>
      <b>2. Scientific Notation Resolves All Ambiguity:</b><br>
      In standard scientific notation, every measurement is expressed in the form:<br>
      <div style="text-align: center; margin: 8px 0; font-size: 16px;"><b>N &times; 10<sup>n</sup></b></div>
      where $1 \le N < 10$ and $n$ is an integer exponent.<br>
      <b>Universal Rule:</b> All digits in the coefficient $N$ (including all trailing zeros after the decimal) are strictly significant. The exponential factor $10^n$ carries zero significant figures.<br><br>
      <b>Illustrative Breakdown:</b><br>
      &bull; $4.5 \times 10^4 \text{ m} \implies$ <b>2 significant figures</b> (least count 1000 m).<br>
      &bull; $4.50 \times 10^4 \text{ m} \implies$ <b>3 significant figures</b> (least count 100 m).<br>
      &bull; $4.500 \times 10^4 \text{ m} \implies$ <b>4 significant figures</b> (least count 10 m).<br>
      &bull; $4.5000 \times 10^4 \text{ m} \implies$ <b>5 significant figures</b> (least count 1 m).<br>
      Thus, scientific notation displays the exact precision and least count of the instrument unambiguously.`
    },
    {
      q: "Derive the dimensional formula for Coefficient of Thermal Conductivity (K) from the fundamental equation of heat conduction. Deduce its SI and CGS units and conversion factor.",
      sol: `<b>1. Governing Law of Heat Conduction:</b><br>
      By Fourier's Law of heat conduction, heat energy $Q$ flowing normally across a slab of cross-sectional area $A$, thickness $d$, with face temperatures $T_1$ and $T_2$ in time $t$ is:<br>
      <div style="text-align: center; margin: 8px 0;">
        Q = ${frac('K A (T<sub>1</sub> - T<sub>2</sub>) t', 'd')} \implies K = ${frac('Q d', 'A (T<sub>1</sub> - T<sub>2</sub>) t')}
      </div>
      <b>2. Dimensional Derivation:</b><br>
      &bull; Heat energy: $[Q] = [M L^2 T^{-2}]$<br>
      &bull; Thickness: $[d] = [L]$<br>
      &bull; Cross-sectional area: $[A] = [L^2]$<br>
      &bull; Temperature difference: $[T_1 - T_2] = [\Theta]$ (or $[K]$)<br>
      &bull; Time interval: $[t] = [T]$<br><br>
      Substitute into equation for K:<br>
      $[K] = \frac{[M L^2 T^{-2}][L]}{[L^2][\Theta][T]} = \frac{[M L^3 T^{-2}]}{[L^2 T \Theta]} = \mathbf{[M L T^{-3} \Theta^{-1}]}$.<br><br>
      <b>3. Units & Conversion Factor:</b><br>
      &bull; <b>SI Unit:</b> $\text{J s}^{-1} \text{m}^{-1} \text{K}^{-1} = \mathbf{\text{W m}^{-1} \text{K}^{-1}}$.<br>
      &bull; <b>CGS Unit:</b> $\text{cal s}^{-1} \text{cm}^{-1} \text{}^\circ\text{C}^{-1}$.<br>
      &bull; <b>Conversion Factor:</b><br>
      $1 \text{ cal s}^{-1} \text{cm}^{-1} \text{}^\circ\text{C}^{-1} = \frac{4.184 \text{ J}}{(1 \text{ s})(10^{-2} \text{ m})(1 \text{ K})} = 4.184 \times 10^2 \text{ W m}^{-1} \text{K}^{-1} = \mathbf{418.4 \text{ W m}^{-1} \text{K}^{-1}}$.`
    },
    {
      q: "Explain the concept of Least Count of an instrument. Contrast the least count, measurement resolution, and precision of a Meter Scale, Vernier Caliper, and Screw Gauge.",
      sol: `<b>1. Definition of Least Count (LC):</b><br>
      The Least Count of a measuring instrument is the smallest physical magnitude that can be measured directly, accurately, and reliably by the instrument without estimation.<br><br>
      <b>2. Detailed Instrument Comparison:</b><br>
      <div style="overflow-x: auto; margin: 12px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr style="border-bottom: 2px solid ${themeColor}; color: ${themeColor};">
              <th style="padding: 8px; text-align: left;">Instrument</th>
              <th style="padding: 8px; text-align: left;">Least Count (LC)</th>
              <th style="padding: 8px; text-align: left;">Significant Decimals (cm)</th>
              <th style="padding: 8px; text-align: left;">Precision Level</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 8px;"><b>Meter Scale</b></td>
              <td style="padding: 8px;">1 mm = 0.1 cm</td>
              <td style="padding: 8px;">1 decimal place (e.g. 5.4 cm)</td>
              <td style="padding: 8px;">Lowest precision</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 8px;"><b>Vernier Caliper</b></td>
              <td style="padding: 8px;">0.1 mm = 0.01 cm</td>
              <td style="padding: 8px;">2 decimal places (e.g. 5.42 cm)</td>
              <td style="padding: 8px;">Moderate precision</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><b>Screw Gauge / Spherometer</b></td>
              <td style="padding: 8px;">0.01 mm = 0.001 cm</td>
              <td style="padding: 8px;">3 decimal places (e.g. 5.426 cm)</td>
              <td style="padding: 8px;">Highest precision</td>
            </tr>
          </tbody>
        </table>
      </div>
      <b>Physical Takeaway:</b> An experimental measurement recorded as $5.400 \text{ cm}$ immediately communicates to any scientist that the instrument used had a least count of $0.001 \text{ cm}$ (Screw Gauge), whereas $5.4 \text{ cm}$ indicates a crude meter scale.`
    },
    {
      q: "Explain why solid angle is measured in steradians. Derive the relationship between the plane semi-vertical angle (θ) of a right circular cone and its subtended solid angle (Ω = 2π(1 - cos θ)).",
      sol: `<b>1. Physical Concept of Solid Angle:</b><br>
      While plane angle measures 2D divergence between two lines, solid angle measures 3D conical divergence radiating outwards from a point into spatial surroundings, defined as $\Omega = \int \frac{dA \cos \alpha}{r^2}$.<br><br>
      <b>2. Derivation for a Right Circular Cone of Semi-Vertical Angle &theta;:</b><br>
      Consider a sphere of radius $r$ centered at the apex of a cone. Take a thin spherical ring strip of angular radius $\phi$ and angular thickness $d\phi$ subtended on the spherical cap ($0 \le \phi \le \theta$):<br>
      &bull; Radius of circular ring: $y = r \sin \phi$<br>
      &bull; Width of circular ring: $r \, d\phi$<br>
      &bull; Surface area of ring strip: $dA = 2\pi y (r \, d\phi) = 2\pi (r \sin \phi) (r \, d\phi) = 2\pi r^2 \sin \phi \, d\phi$.<br><br>
      <b>3. Integration Over the Entire Cone:</b><br>
      Total solid angle $\Omega = \int \frac{dA}{r^2} = \int_0^\theta \frac{2\pi r^2 \sin \phi \, d\phi}{r^2} = 2\pi \int_0^\theta \sin \phi \, d\phi$.<br>
      $\Omega = 2\pi [-\cos \phi]_0^\theta = 2\pi (-\cos \theta - (-\cos 0)) = 2\pi (1 - \cos \theta)$.
      <div style="text-align: center; margin: 10px 0; color: #76FF03; font-size: 17px; font-weight: bold;">
        \Omega = 2\pi (1 - \cos \theta) \text{ steradians}
      </div>
      <b>Boundary Verification:</b><br>
      &bull; For a flat surface (hemisphere): $\theta = 90^\circ \implies \Omega = 2\pi(1 - 0) = 2\pi \text{ sr}$.<br>
      &bull; For a full closed sphere: $\theta = 180^\circ \implies \Omega = 2\pi(1 - (-1)) = 4\pi \text{ sr}$ (matches Gauss's law!).`
    },
    {
      q: "A physical quantity X is given by X = (a² b³ / (c √d)). If the percentage errors in the measurement of a, b, c, and d are 1%, 3%, 2%, and 4% respectively, calculate the maximum fractional and percentage error in X.",
      sol: `<b>1. Fractional Error Formula:</b><br>
      Given: $X = \frac{a^2 b^3}{c \sqrt{d}} = a^2 b^3 c^{-1} d^{-1/2}$.<br>
      Taking natural logarithm on both sides:<br>
      $\ln X = 2 \ln a + 3 \ln b - \ln c - \frac{1}{2} \ln d$.<br>
      Differentiating to find maximum relative uncertainty (all errors add in worst-case analysis):<br>
      <div style="text-align: center; margin: 8px 0;">
        ${frac('&Delta;X', 'X')} = 2 \left(${frac('&Delta;a', 'a')}\right) + 3 \left(${frac('&Delta;b', 'b')}\right) + 1 \left(${frac('&Delta;c', 'c')}\right) + ${frac('1', '2')} \left(${frac('&Delta;d', 'd')}\right)
      </div>
      <b>2. Percentage Error Calculation:</b><br>
      Multiply each term by 100%:<br>
      $\% \text{ error in } X = \left[ 2 \left(\frac{\Delta a}{a} \times 100\right) + 3 \left(\frac{\Delta b}{b} \times 100\right) + 1 \left(\frac{\Delta c}{c} \times 100\right) + \frac{1}{2} \left(\frac{\Delta d}{d} \times 100\right) \right]$<br>
      Substitute given percentage values:<br>
      $\% \text{ error in } X = [2(1\%) + 3(3\%) + 1(2\%) + \frac{1}{2}(4\%)]$<br>
      $\% \text{ error in } X = [2\% + 9\% + 2\% + 2\%] = \mathbf{15\%}$.<br><br>
      <b>Maximum Fractional Error:</b> $\frac{\Delta X}{X} = \frac{15}{100} = \mathbf{0.15}$.<br>
      <b>Maximum Percentage Error:</b> $\mathbf{\pm 15\%}$.`
    },
    {
      q: "Find the dimensional formula of Magnetic Field (B), Magnetic Flux (Φ_B), and Magnetic Dipole Moment (M).",
      sol: `<b>1. Magnetic Field (B):</b><br>
      From Lorentz force equation: $F = q v B \sin \theta \implies B = \frac{F}{q v}$.<br>
      Dimensions: $[B] = \frac{[M L T^{-2}]}{[A T][L T^{-1}]} = \frac{[M L T^{-2}]}{[A L]} = \mathbf{[M L^0 T^{-2} A^{-1}]}$.<br>
      SI Unit: <b>Tesla (T) = N A<sup>-1</sup> m<sup>-1</sup></b>.<br><br>
      <b>2. Magnetic Flux (&Phi;<sub>B</sub>):</b><br>
      $\Phi_B = \vec{B} \cdot \vec{A} \implies [\Phi_B] = [B][A] = [M L^0 T^{-2} A^{-1}][L^2] = \mathbf{[M L^2 T^{-2} A^{-1}]}$.<br>
      SI Unit: <b>Weber (Wb) = T m<sup>2</sup></b>.<br><br>
      <b>3. Magnetic Dipole Moment (M):</b><br>
      $M = I \times A \implies [M] = [I][A] = [A][L^2] = \mathbf{[M^0 L^2 T^0 A^1]}$.<br>
      SI Unit: <b>A m<sup>2</sup> = J T<sup>-1</sup></b>.`
    },
    {
      q: "Show dimensionally that the expressions for Energy Density of Electric Field (u_E = ½ ε₀ E²) and Magnetic Field (u_B = B² / (2 μ₀)) have identical dimensions of Pressure [M L⁻¹ T⁻²].",
      sol: `<b>1. Electric Energy Density ($u_E = ½ \varepsilon_0 E^2$):</b><br>
      Dimensions of $\varepsilon_0$: $[M^{-1} L^{-3} T^4 A^2]$<br>
      Dimensions of Electric Field $E = F/q$: $[M L T^{-3} A^{-1}]$<br>
      $[E^2] = [M^2 L^2 T^{-6} A^{-2}]$<br>
      $[u_E] = [\varepsilon_0][E^2] = [M^{-1} L^{-3} T^4 A^2] \times [M^2 L^2 T^{-6} A^{-2}] = [M^{(-1+2)} L^{(-3+2)} T^{(4-6)} A^{(2-2)}] = \mathbf{[M L^{-1} T^{-2}]}$.<br><br>
      <b>2. Magnetic Energy Density ($u_B = B^2 / (2 \mu_0)$):</b><br>
      Dimensions of $B$: $[M L^0 T^{-2} A^{-1}] \implies [B^2] = [M^2 L^0 T^{-4} A^{-2}]$<br>
      Dimensions of $\mu_0$: $[M L T^{-2} A^{-2}]$<br>
      $[u_B] = \frac{[B^2]}{[\mu_0]} = \frac{[M^2 L^0 T^{-4} A^{-2}]}{[M L T^{-2} A^{-2}]} = [M^{(2-1)} L^{(0-1)} T^{(-4 - (-2))} A^{(-2 - (-2))}] = \mathbf{[M L^{-1} T^{-2}]}$.<br><br>
      <b>Conclusion:</b> Both $u_E$ and $u_B$ have dimensions $[M L^{-1} T^{-2}]$, which is identically the dimensional formula of <b>Pressure</b> ($\text{Force}/\text{Area} = [M L T^{-2}]/[L^2] = [M L^{-1} T^{-2}]$) and <b>Energy per unit volume</b> ($\text{J}/\text{m}^3 = [M L^2 T^{-2}]/[L^3] = [M L^{-1} T^{-2}]$).`
    },
    {
      q: "Explain why dimensional analysis cannot distinguish between physical quantities that have identical dimensions, such as Work and Torque. Discuss the mathematical and physical nature of both quantities.",
      sol: `<b>1. Identical Dimensional Formulation:</b><br>
      &bull; <b>Work:</b> Work is defined as the scalar (dot) product of force and displacement vectors: $W = \vec{F} \cdot \vec{d} = F d \cos \theta$.<br>
      Dimensions: $[W] = [M L T^{-2}][L] = \mathbf{[M L^2 T^{-2}]}$.<br>
      &bull; <b>Torque:</b> Torque is defined as the vector (cross) product of position vector and force vector: $\vec{\tau} = \vec{r} \times \vec{F}$, with magnitude $\tau = r F \sin \theta$.<br>
      Dimensions: $[\tau] = [L][M L T^{-2}] = \mathbf{[M L^2 T^{-2}]}$.<br><br>
      <b>2. Why Dimensional Analysis Fails:</b><br>
      Dimensional analysis concerns itself solely with base physical quantities (Mass, Length, Time). It is fundamentally blind to spatial directionality, tensor rank, and vector characteristics:<br>
      (a) <b>Scalar vs Vector Nature:</b> Work is a true scalar (rank-0 tensor) representing energy transfer. Torque is an axial vector (pseudovector, rank-1 tensor) representing rotational moment.<br>
      (b) <b>Units Convention:</b> In the SI system, Work is designated in <b>Joules (J)</b>, while Torque is strictly designated in <b>Newton-meters (N m)</b> to prevent physical confusion. Dimensional analysis cannot detect this conceptual divergence.`
    },
    {
      q: "Provide an exhaustive master synthesis of Unit I: Physical World and Measurement (05 Marks), summarizing its core concepts, formulas, dimensional constants, and board exam focus areas.",
      sol: `<b>1. Comprehensive Chapter Summary:</b><br>
      &bull; <b>Foundations:</b> Physical quantities require both magnitude and unit: $Q = n_1 u_1 = n_2 u_2$, establishing $n \propto 1/u$.<br>
      &bull; <b>SI System:</b> Formalized by 14th CGPM in 1971 and redefined in 2019 using 7 defining physical constants ($c, h, e, k_B, N_A, \Delta\nu_{Cs}, K_{cd}$). Comprises 7 base units (m, kg, s, A, K, mol, cd) and 2 supplementary dimensionless units: Radian (rad, $[M^0 L^0 T^0]$) and Steradian (sr, $[M^0 L^0 T^0]$).<br>
      &bull; <b>Significant Figures:</b> Quantify experimental certainty. Governed by 6 core rules. In addition/subtraction, least decimal places govern; in multiplication/division, least significant figures govern.<br>
      &bull; <b>Dimensional Homogeneity:</b> Only terms with identical dimensions can be added, subtracted, or equated ($[A] = [B] = [C]$ for $A + B = C$).<br>
      &bull; <b>Three Core Applications:</b> (1) Checking consistency of equations, (2) Deducing physical relations among variables via power laws, (3) Converting units using $n_2 = n_1 [M_1/M_2]^a [L_1/L_2]^b [T_1/T_2]^c$.<br>
      &bull; <b>Core Limitations:</b> Inability to determine dimensionless constants ($k$), failure for transcendental functions, inability to handle equations with more than 3 variables in mechanics, and insensitivity to vector vs scalar distinctions.<br><br>
      <b>2. High-Yield Board Exam Topics:</b><br>
      (a) van der Waals constants $a$ and $b$ dimensions ($[a] = [M L^5 T^{-2}]$, $[b] = [L^3]$).<br>
      (b) Conversions of 1 J to $10^7$ Erg, 1 N to $10^5$ Dyne, and $G$ from SI to CGS.<br>
      (c) Derivations of simple pendulum $T = 2\pi\sqrt{l/g}$, Stokes' law $F = 6\pi\eta r v$, and centripetal force $F = m v^2 / r$.<br>
      (d) Dimensional constants like $h, G, \varepsilon_0, \mu_0$ and proof that $c = 1/\sqrt{\varepsilon_0 \mu_0}$.`
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 81}: ${item.q}</h3>
    <div style="background: rgba(255, 81, 47, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Comprehensive Derivation & Step-by-Step Theoretical Proof:</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getLaQuestions };
