const {
  themeColor,
  frac,
  defBox,
  analogyBox,
  stepDerivationBox,
  examTrapBox,
  solvedExampleBox
} = require('./c11_phy_1_helpers');

function buildOverview() {
  return `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: #CBD5E1; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts & Foundational Terms &bull; Unit I: Physical World and Measurement</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">1. Physical Quantity:</b>
        <span style="color: #FFFFFF;">Any measurable parameter of nature or matter that can be quantified numerically and described by physical laws (e.g. Mass, Length, Time, Force).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">2. Standard Unit of Measurement:</b>
        <span style="color: #FFFFFF;">An internationally chosen, invariant, reproducible reference standard of known magnitude used to express physical quantities quantitatively.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">3. Fundamental (Base) Units:</b>
        <span style="color: #FFFFFF;">Seven mutually independent primary units (Length, Mass, Time, Current, Temp, Amount of Substance, Luminous Intensity) forming the bedrock of SI.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">4. Derived Units:</b>
        <span style="color: #FFFFFF;">Secondary units derived algebraically from combinations of base units (e.g., Velocity m s<sup>-1</sup>, Force kg m s<sup>-2</sup> = N, Pressure Pa).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">5. Significant Figures:</b>
        <span style="color: #FFFFFF;">The count of meaningful digits in an experimentally measured quantity that are reliably certain, plus the single terminal digit that contains uncertainty.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">6. Dimensions of a Quantity:</b>
        <span style="color: #FFFFFF;">The powers (exponents) to which the fundamental base units [M], [L], [T], [I], [&theta;], [N], [J] must be raised to represent that physical quantity.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">7. Principle of Homogeneity:</b>
        <span style="color: #FFFFFF;">Fundamental law asserting that in any physically valid equation, every additive, subtractive, or equated term must possess identical dimensions.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">8. Supplementary Units:</b>
        <span style="color: #FFFFFF;">Radian (rad) for plane angle (ds/r) and Steradian (sr) for solid angle (dA/r<sup>2</sup>), which are dimensionless physical quantities [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>].</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: NEED FOR MEASUREMENT -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    1. Need for Measurement in Physics
  </h2>

  <p>Physics is the quantitative empirical science dedicated to deciphering the fundamental principles governing matter, energy, space, and time. Human physiological senses—such as sight, touch, and hearing—are subjective, qualitative, and notoriously vulnerable to optical illusions and physiological biases. For example, judging the temperature of lukewarm water by touching it with cold versus warm hands yields contradictory sensory reports. As Lord Kelvin famously remarked: <i>"When you can measure what you are speaking about, and express it in numbers, you know something about it; but when you cannot measure it, when you cannot express it in numbers, your knowledge is of a meager and unsatisfactory kind."</i></p>

  ${defBox(
    "Physical Quantity (Q)",
    "A property of an object, material, or natural phenomenon that can be measured using an appropriate scientific instrument and quantified in terms of a numerical value and a unit.",
    "Dependent on chosen standard (e.g., kg, m, s)",
    "[M<sup>a</sup> L<sup>b</sup> T<sup>c</sup> ...]"
  )}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) The Fundamental Equation of Measurement</h3>
  <p>Every scientific measurement expresses the magnitude of a physical quantity $Q$ as the mathematical product of a pure numerical value $n$ (magnitude) and a chosen standard reference unit $u$:</p>

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">
    <b>Q = n &times; u &nbsp; &rArr; &nbsp; n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub> = \text{Constant} &nbsp; &rArr; &nbsp; n &prop; ${frac('1', 'u')}</b>
  </div>

  <p>This inverse relationship reveals that if a smaller unit of measurement is adopted, the corresponding numerical magnitude increases proportionally. For example, a length of 5 meters ($n_1 = 5, u_1 = \text{m}$) translates to 500 centimeters ($n_2 = 500, u_2 = \text{cm}$). The intrinsic physical magnitude of the measured object remains invariant under changes in coordinate system or unit scale.</p>

  ${analogyBox(
    "Currency Exchange & Invariance of Magnitude",
    "Measuring a length in meters versus centimeters is directly analogous to paying for an item in 100-rupee notes versus 1-rupee coins. The total monetary value remains invariant (Q = Constant); only the count of units (n) scales inversely with the size of the currency unit (u)."
  )}

  <!-- SECTION 2: UNITS OF MEASUREMENT -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    2. Units of Measurement
  </h2>

  <p>To communicate measurements globally and verify natural laws reproducibly across international laboratories, the scientific community establishes standard reference definitions termed <b>units</b>.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Essential Characteristics of an Ideal Standard Unit</h3>
  <p>For a reference quantity to serve as an acceptable scientific standard, it must fulfill rigorous metrological criteria:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">1. Invariability & Constancy:</b> The standard unit must never alter its magnitude with fluctuations in ambient temperature, atmospheric pressure, geographical location, gravitational potential, or passage of historical time.</li>
    <li><b style="color: ${themeColor};">2. Universal Reproducibility:</b> Scientists worldwide must be able to reproduce or replicate the unit in standard calibration laboratories without requiring physical access to a fragile single prototype.</li>
    <li><b style="color: ${themeColor};">3. Indestructibility:</b> It must not degrade, oxidize, wear out, or corrode over centuries.</li>
    <li><b style="color: ${themeColor};">4. Convenient Size:</b> Its physical dimension should be of appropriate scale so that everyday practical laboratory measurements do not produce unwieldy, astronomically large or infinitesimally small numerical values.</li>
    <li><b style="color: ${themeColor};">5. Unambiguous Precision:</b> The physical phenomenon or atomic property defining the unit must be mathematically and experimentally distinct, leaving zero margin for subjective interpretation.</li>
  </ul>

  <!-- SECTION 3: SYSTEMS OF UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    3. Systems of Units
  </h2>

  <p>Prior to international standardization, different nations and scientific communities relied upon divergent regional systems of units:</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Historical Metric & Imperial Systems</h3>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">1. CGS System (Centimeter-Gram-Second):</b> Originated in France (Gaussian system). Measures length in centimeters (cm), mass in grams (g), and time in seconds (s). Standard unit of force is Dyne (10<sup>-5</sup> N), and work is Erg (10<sup>-7</sup> J).</li>
    <li><b style="color: ${themeColor};">2. FPS System (Foot-Pound-Second):</b> British Imperial system. Measures length in feet (ft), mass in pounds (lb), and time in seconds (s). Lacks decimal coherence and requires complex conversion factors (e.g., 1 foot = 12 inches, 1 yard = 3 feet).</li>
    <li><b style="color: ${themeColor};">3. MKS System (Meter-Kilogram-Second):</b> Formulated by Giovanni Giorgi in 1901. Measures length in meters (m), mass in kilograms (kg), and time in seconds (s). This system provided the direct mechanical foundation for the modern SI system.</li>
  </ul>

  <!-- SECTION 4: SI UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    4. The International System of Units (Syst&egrave;me International d'Unit&eacute;s - SI)
  </h2>

  <p>In 1971, the 14th General Conference on Weights and Measures (CGPM - <i>Conf&eacute;rence G&eacute;n&eacute;rale des Poids et Mesures</i>) formalized the <b>SI System</b> to establish an international scientific lingua franca. In 2019, the CGPM enacted a historic revision of the SI system, redefining all base units by permanently locking in the exact numerical values of fundamental physical constants ($c, h, e, k_B, N_A, \Delta\nu_{Cs}, K_{cd}$), severing all reliance on physical manufactured artifacts like the platinum-iridium kilogram prototype in S&egrave;vres, France.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) The 7 Fundamental SI Base Quantities & Exact Modern Definitions</h3>
  <div style="margin-left: 10px; line-height: 1.85;">
    <p><b style="color: ${themeColor};">1. Length &bull; Meter (m):</b> The path distance traveled by electromagnetic radiation (light) in vacuum during a time interval of exactly ${frac('1', '299,792,458')} of a second, fixing speed of light $c = 299,792,458 \text{ m s}^{-1}$.</p>
    <p><b style="color: ${themeColor};">2. Mass &bull; Kilogram (kg):</b> Defined by setting the Planck constant $h$ to exactly $6.62607015 \times 10^{-34} \text{ J s} = \text{kg m}^2 \text{s}^{-1}$, measured via the Kibble balance.</p>
    <p><b style="color: ${themeColor};">3. Time &bull; Second (s):</b> Defined by taking the fixed unperturbed ground-state hyperfine transition frequency of the Caesium-133 atom ($\Delta\nu_{Cs}$) to be exactly $9,192,631,770 \text{ Hz}$.</p>
    <p><b style="color: ${themeColor};">4. Electric Current &bull; Ampere (A):</b> Defined by fixing the elementary charge $e = 1.602176634 \times 10^{-19} \text{ C}$, where $1 \text{ A} = 1 \text{ C s}^{-1}$.</p>
    <p><b style="color: ${themeColor};">5. Thermodynamic Temperature &bull; Kelvin (K):</b> Defined by fixing the Boltzmann constant $k_B = 1.380649 \times 10^{-23} \text{ J K}^{-1} = \text{kg m}^2 \text{s}^{-2} \text{K}^{-1}$.</p>
    <p><b style="color: ${themeColor};">6. Amount of Substance &bull; Mole (mol):</b> One mole contains exactly $6.02214076 \times 10^{23}$ elementary entities (Avogadro constant $N_A$).</p>
    <p><b style="color: ${themeColor};">7. Luminous Intensity &bull; Candela (cd):</b> The luminous intensity, in a given direction, of a monochromatic radiation source of frequency $540 \times 10^{12} \text{ Hz}$ that has a radiant intensity in that direction of ${frac('1', '683')} \text{ W sr}^{-1}$.</p>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Supplementary Dimensionless Quantities: Radian & Steradian</h3>
  <p>In addition to the 7 base units, SI incorporates two geometric supplementary quantities:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Plane Angle &bull; Radian (rad):</b> The angle subtended at the center of a circular arc of length equal to its radius:
      <div style="text-align: center; margin: 8px 0;"><b>d&theta; = ${frac('ds', 'r')} \text{ rad} &nbsp;&bull;&nbsp; 2\pi \text{ rad} = 360^\circ</b></div>
      Because it is the ratio of two lengths ($[L] / [L]$), radian has unit 'rad' but is <b>dimensionless</b>: $[M^0 L^0 T^0]$.
    </li>
    <li><b style="color: ${themeColor};">Solid Angle &bull; Steradian (sr):</b> The 3D conical solid angle subtended at the center of a sphere of radius $r$ by a surface area $dA = r^2$:
      <div style="text-align: center; margin: 8px 0;"><b>d&Omega; = ${frac('dA', 'r<sup>2</sup>')} \text{ sr} &nbsp;&bull;&nbsp; \Omega_{\text{sphere}} = ${frac('4\pi r<sup>2</sup>', 'r<sup>2</sup>')} = 4\pi \text{ sr}</b></div>
      Because it is the ratio of area to radius squared ($[L^2] / [L^2]$), steradian has unit 'sr' but is <b>dimensionless</b>: $[M^0 L^0 T^0]$.
    </li>
  </ul>

  ${examTrapBox(
    "Dimensionless Quantities Can Possess Units!",
    "A frequent board exam question asks: <i>'Can a physical quantity possess a unit but have no dimensions?'</i> The answer is an emphatic <b>YES</b>! Plane angle (radian) and Solid angle (steradian) have internationally recognized SI units, but their dimensional formulas are strictly $[M^0 L^0 T^0]$."
  )}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Core Advantages of the SI System</h3>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">1. Coherent System:</b> All derived units are obtained solely by simple algebraic multiplication or division of base units without introducing awkward arbitrary numerical constants (e.g. $1 \text{ N} = 1 \text{ kg} \times 1 \text{ m s}^{-2}$).</li>
    <li><b style="color: ${themeColor};">2. Rational System:</b> SI assigns only one unique unit to any given physical quantity across all scientific disciplines. In SI, mechanical work, kinetic energy, gravitational potential energy, electric energy, and heat energy are all measured uniformly in <b>Joules (J)</b>, whereas older systems used calories, ergs, and foot-pounds.</li>
    <li><b style="color: ${themeColor};">3. Absolute Metric System:</b> Decimal-based multiplication/division using powers of 10 ($10^{-3}, 10^{-6}, 10^3, 10^6$) eliminates complex fractions. It is independent of local acceleration due to gravity $g$.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iv) Practical Astronomical & Microscopic Units</h3>
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <ul style="margin-left: 15px; line-height: 1.85;">
      <li><b style="color: ${themeColor};">Astronomical Unit (AU):</b> Mean orbital distance between Earth and Sun: $1 \text{ AU} = 1.496 \times 10^{11} \text{ m}$.</li>
      <li><b style="color: ${themeColor};">Light Year (ly):</b> Distance light travels in vacuum in 1 Julian year (365.25 days): $1 \text{ ly} = c \times t = (3 \times 10^8) \times (365.25 \times 86400) = 9.46 \times 10^{15} \text{ m}$.</li>
      <li><b style="color: ${themeColor};">Parsec (pc):</b> Distance at which an astronomical arc of 1 AU subtends a parallax angle of 1 arcsecond ($1''$): $1 \text{ pc} = {frac('1 \text{ AU}', '1 \text{ arcsec}')} = 3.08 \times 10^{16} \text{ m} \approx 3.26 \text{ ly}$.</li>
      <li><b style="color: ${themeColor};">Fermi (Femtometer, fm):</b> Nuclear scale unit: $1 \text{ fm} = 10^{-15} \text{ m}$.</li>
      <li><b style="color: ${themeColor};">Angstrom (&Aring;):</b> Atomic scale unit: $1 \text{ \AA} = 10^{-10} \text{ m} = 0.1 \text{ nm}$.</li>
      <li><b style="color: ${themeColor};">Chandrasekhar Limit (CSL):</b> Practical astronomical unit of stellar mass: $1 \text{ CSL} = 1.4 \times M_{\text{Sun}} \approx 2.8 \times 10^{30} \text{ kg}$.</li>
      <li><b style="color: ${themeColor};">Shake:</b> High-speed nuclear decay time unit: $1 \text{ shake} = 10^{-8} \text{ s}$.</li>
    </ul>
  </div>

  <!-- SECTION 5: FUNDAMENTAL AND DERIVED UNITS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    5. Fundamental and Derived Quantities
  </h2>

  <p>In physics, every observed phenomenon is parameterized through either independent foundational variables or composite derived quantities:</p>

  <div style="overflow-x: auto; margin: 18px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.9); font-size: 14.5px;">
      <thead>
        <tr style="border-bottom: 2px solid ${themeColor};">
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Parameter</th>
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Fundamental Quantities</th>
          <th style="padding: 10px; text-align: left; color: ${themeColor};">Derived Quantities</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Operational Nature</td>
          <td style="padding: 10px;">Completely independent of all other physical quantities. Cannot be simplified further.</td>
          <td style="padding: 10px;">Expressed as mathematical products, quotients, or powers of base quantities.</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Total Number in SI</td>
          <td style="padding: 10px;">Strictly limited to 7 base quantities + 2 supplementary.</td>
          <td style="padding: 10px;">Infinite (covers all mechanics, optics, thermodynamics, electromagnetism, and modern physics).</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #FFFFFF;">Examples</td>
          <td style="padding: 10px;">Length (m), Mass (kg), Time (s), Current (A), Temperature (K), Substance (mol), Intensity (cd).</td>
          <td style="padding: 10px;">Force (N = kg m s<sup>-2</sup>), Energy (J = kg m<sup>2</sup> s<sup>-2</sup>), Electric Potential (V = kg m<sup>2</sup> s<sup>-3</sup> A<sup>-1</sup>).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 6: SIGNIFICANT FIGURES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    6. Significant Figures & Rules of Scientific Rounding
  </h2>

  <p>Experimental science deals with measurements recorded via instruments of finite least count. <b>Significant figures</b> in an experimental measurement communicate both the magnitude and the precision of the measuring instrument. Significant figures include all digits that are known with experimental certainty plus one final estimated digit that contains inherent uncertainty.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) The 6 Universal Rules for Determining Significant Figures</h3>
  <ol style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">Rule 1 &bull; All Non-Zero Digits are Significant:</b> In the measured length $178.46 \text{ cm}$, all 5 digits are non-zero &rArr; <b>5 significant figures</b>.</li>
    <li><b style="color: ${themeColor};">Rule 2 &bull; All Trapped Zeros Between Non-Zero Digits are Significant:</b> Zeros situated between non-zero digits are always significant regardless of decimal position (e.g. $4007 \text{ kg}$ has <b>4 sig figs</b>; $3.0004 \text{ s}$ has <b>5 sig figs</b>).</li>
    <li><b style="color: ${themeColor};">Rule 3 &bull; Leading (Initial) Zeros are NEVER Significant:</b> Zeros appearing before the first non-zero digit merely fix the position of the decimal point (e.g. $0.0035 \text{ m}$ has only <b>2 sig figs</b>: 3 and 5; $0.000804 \text{ g}$ has <b>3 sig figs</b>: 8, 0, 4).</li>
    <li><b style="color: ${themeColor};">Rule 4 &bull; Trailing Zeros in Numbers With a Decimal are ALWAYS Significant:</b> Zeros at the end of a decimal number reflect measuring instrument precision (e.g. $4.500 \text{ cm}$ has <b>4 sig figs</b>; $0.07000 \text{ V}$ has <b>4 sig figs</b>).</li>
    <li><b style="color: ${themeColor};">Rule 5 &bull; Trailing Zeros in Numbers WITHOUT a Decimal are Ambiguous:</b> In integers like $4500$, trailing zeros are generally not considered significant unless clarified by a decimal ($4500.$ has 4) or expressed in scientific notation ($4.5 \times 10^3$ has 2; $4.500 \times 10^3$ has 4).</li>
    <li><b style="color: ${themeColor};">Rule 6 &bull; Exact Numbers & Mathematical Constants Have Infinite (&infin;) Significant Figures:</b> Exact integers (e.g., 2 in $2\pi r$, 10 test tubes, speed of light defined as exact) possess infinite precision: $2.000000...$.</li>
  </ol>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Standard Rules for Rounding Off Measurements</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li>If the digit to be dropped is less than 5, the preceding digit is left unchanged ($7.84$ rounds to $7.8$).</li>
    <li>If the digit to be dropped is greater than 5, the preceding digit is increased by 1 ($7.86$ rounds to $7.9$).</li>
    <li>If the digit to be dropped is 5 followed by non-zero digits, the preceding digit is increased by 1 ($14.251$ rounds to $14.3$).</li>
    <li><b style="color: ${themeColor};">The Even-Odd Rule (Preceding a Terminal 5):</b> If the digit to be dropped is simply 5 or 5 followed by zeros:
      <br>&bull; If the preceding digit is <b>EVEN</b>, it is left unchanged ($6.450 \to 6.4$).
      <br>&bull; If the preceding digit is <b>ODD</b>, it is rounded up by 1 to make it even ($6.350 \to 6.4$).
    </li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Rules for Arithmetic Operations with Significant Figures</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">Addition and Subtraction:</b> The final result cannot be more precise than the least precise measurement. The final answer must be rounded off to the <b>least number of decimal places</b> present in any term.
      <br><i>Example:</i> $4.327 \text{ g} + 2.1 \text{ g} + 0.05 \text{ g} = 6.477 \text{ g} \to \mathbf{6.5 \text{ g}}$ (governed by $2.1$ with 1 decimal place).
    </li>
    <li><b style="color: ${themeColor};">Multiplication and Division:</b> The final calculated product or quotient must be rounded off to contain only as many significant figures as are present in the measurement with the <b>least number of significant figures</b>.
      <br><i>Example:</i> Mass $= 4.237 \text{ g}$ (4 sig figs), Volume $= 2.5 \text{ cm}^3$ (2 sig figs).
      <br>Density $= {frac('4.237', '2.5')} = 1.6948 \text{ g cm}^{-3} \to \mathbf{1.7 \text{ g cm}^{-3}}$ (rounded to 2 sig figs).
    </li>
  </ul>

  <!-- SECTION 7: DIMENSIONS OF PHYSICAL QUANTITIES -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    7. Dimensions of Physical Quantities & Dimensional Formulas
  </h2>

  <p>The <b>dimensions</b> of any physical quantity are the powers to which base quantities must be raised to represent that physical quantity. The symbolic notation enclosed within brackets $[M^a L^b T^c I^d \Theta^e N^f J^g]$ is designated as the <b>dimensional formula</b>.</p>

  ${defBox(
    "Dimensional Formula",
    "An algebraic expression showing which fundamental base quantities and to what powers (exponents) enter into the derived unit of a given physical quantity.",
    "None (Pure algebraic exponent representation)",
    "[M<sup>a</sup> L<sup>b</sup> T<sup>c</sup> I<sup>d</sup> &Theta;<sup>e</sup> N<sup>f</sup> J<sup>g</sup>]"
  )}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Master Dimensional Table of Core Physical Quantities</h3>
  <div style="overflow-x: auto; margin: 18px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.9); font-size: 14px;">
      <thead>
        <tr style="border-bottom: 2px solid ${themeColor};">
          <th style="padding: 9px; text-align: left; color: ${themeColor};">Physical Quantity</th>
          <th style="padding: 9px; text-align: left; color: ${themeColor};">Governing Relationship</th>
          <th style="padding: 9px; text-align: left; color: ${themeColor};">Dimensional Formula</th>
          <th style="padding: 9px; text-align: left; color: ${themeColor};">SI Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Velocity / Speed ($v$)</td>
          <td style="padding: 8px;">Distance / Time</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M<sup>0</sup> L T<sup>-1</sup>]</td>
          <td style="padding: 8px;">m s<sup>-1</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Acceleration ($a$)</td>
          <td style="padding: 8px;">Velocity / Time</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M<sup>0</sup> L T<sup>-2</sup>]</td>
          <td style="padding: 8px;">m s<sup>-2</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Force / Weight ($F$)</td>
          <td style="padding: 8px;">Mass &times; Acceleration</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M L T<sup>-2</sup>]</td>
          <td style="padding: 8px;">Newton (N)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Work / Energy / Heat / Torque</td>
          <td style="padding: 8px;">Force &times; Distance</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M L<sup>2</sup> T<sup>-2</sup>]</td>
          <td style="padding: 8px;">Joule (J) / N m</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Power ($P$)</td>
          <td style="padding: 8px;">Work / Time</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M L<sup>2</sup> T<sup>-3</sup>]</td>
          <td style="padding: 8px;">Watt (W)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Pressure / Stress / Elastic Modulus ($Y, B, \eta$)</td>
          <td style="padding: 8px;">Force / Area</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M L<sup>-1</sup> T<sup>-2</sup>]</td>
          <td style="padding: 8px;">Pascal (Pa) / N m<sup>-2</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Linear Momentum / Impulse ($p, J$)</td>
          <td style="padding: 8px;">Mass &times; Velocity / Force &times; Time</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M L T<sup>-1</sup>]</td>
          <td style="padding: 8px;">kg m s<sup>-1</sup> / N s</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Universal Gravitational Constant ($G$)</td>
          <td style="padding: 8px;">$F r^2 / (m_1 m_2)$</td>
          <td style="padding: 8px; font-family: monospace; color: #76FF03;">[M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]</td>
          <td style="padding: 8px;">N m<sup>2</sup> kg<sup>-2</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Planck's Constant ($h$) & Angular Momentum ($L$)</td>
          <td style="padding: 8px;">$E / \nu$ / $m v r$</td>
          <td style="padding: 8px; font-family: monospace; color: #76FF03;">[M L<sup>2</sup> T<sup>-1</sup>]</td>
          <td style="padding: 8px;">J s / kg m<sup>2</sup> s<sup>-1</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Surface Tension ($T$) & Spring Constant ($k$)</td>
          <td style="padding: 8px;">Force / Length</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M L<sup>0</sup> T<sup>-2</sup>]</td>
          <td style="padding: 8px;">N m<sup>-1</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Coefficient of Viscosity ($\eta$)</td>
          <td style="padding: 8px;">$F / [A (dv/dx)]$ (Stokes' Law)</td>
          <td style="padding: 8px; font-family: monospace; color: #76FF03;">[M L<sup>-1</sup> T<sup>-1</sup>]</td>
          <td style="padding: 8px;">Pa s / Poiseuille (Pl)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Thermal Conductivity ($K$)</td>
          <td style="padding: 8px;">$Q d / [A (T_1 - T_2) t]$</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M L T<sup>-3</sup> &Theta;<sup>-1</sup>]</td>
          <td style="padding: 8px;">W m<sup>-1</sup> K<sup>-1</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Specific Heat Capacity ($s, c$)</td>
          <td style="padding: 8px;">$Q / (m \Delta T)$</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M<sup>0</sup> L<sup>2</sup> T<sup>-2</sup> &Theta;<sup>-1</sup>]</td>
          <td style="padding: 8px;">J kg<sup>-1</sup> K<sup>-1</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Latent Heat ($L$)</td>
          <td style="padding: 8px;">$Q / m$</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M<sup>0</sup> L<sup>2</sup> T<sup>-2</sup>]</td>
          <td style="padding: 8px;">J kg<sup>-1</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Universal Gas Constant ($R$) & Boltzmann Constant ($k_B$)</td>
          <td style="padding: 8px;">$P V / (n T)$ / $P V / (N T)$</td>
          <td style="padding: 8px; font-family: monospace; color: #76FF03;">[M L<sup>2</sup> T<sup>-2</sup> &Theta;<sup>-1</sup>]</td>
          <td style="padding: 8px;">J mol<sup>-1</sup> K<sup>-1</sup> / J K<sup>-1</sup></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Electric Charge ($q$)</td>
          <td style="padding: 8px;">Current &times; Time ($I \times t$)</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M<sup>0</sup> L<sup>0</sup> T A]</td>
          <td style="padding: 8px;">Coulomb (C)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Electric Potential / EMF ($V$)</td>
          <td style="padding: 8px;">Work / Charge ($W / q$)</td>
          <td style="padding: 8px; font-family: monospace; color: #00E5FF;">[M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>]</td>
          <td style="padding: 8px;">Volt (V)</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
          <td style="padding: 8px;">Permittivity of Free Space ($\varepsilon_0$)</td>
          <td style="padding: 8px;">$q_1 q_2 / (4\pi F r^2)$</td>
          <td style="padding: 8px; font-family: monospace; color: #76FF03;">[M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]</td>
          <td style="padding: 8px;">C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup> / F m<sup>-1</sup></td>
        </tr>
        <tr>
          <td style="padding: 8px;">Permeability of Free Space ($\mu_0$)</td>
          <td style="padding: 8px;">$2\pi r F / (I_1 I_2 L)$</td>
          <td style="padding: 8px; font-family: monospace; color: #76FF03;">[M L T<sup>-2</sup> A<sup>-2</sup>]</td>
          <td style="padding: 8px;">T m A<sup>-1</sup> / H m<sup>-1</sup></td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Classification: Dimensional/Dimensionless Quantities</h3>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">1. Dimensional Variables:</b> Physical quantities that vary in magnitude and possess specific dimensions (e.g. Velocity $[L T^{-1}]$, Acceleration $[L T^{-2}]$, Force $[M L T^{-2}]$).</li>
    <li><b style="color: ${themeColor};">2. Dimensionless Variables:</b> Physical parameters that take variable values but possess zero dimensions $[M^0 L^0 T^0]$ (e.g. Specific gravity, Strain $\Delta L / L$, Refractive index $\mu$, Angle $\theta$).</li>
    <li><b style="color: ${themeColor};">3. Dimensional Constants:</b> Universal or empirical constants having fixed numerical values that carry dimensions (e.g. Universal Gravitational Constant $G$, Planck constant $h$, Speed of light in vacuum $c$, Boltzmann constant $k_B$).</li>
    <li><b style="color: ${themeColor};">4. Dimensionless Constants:</b> Pure numerical constants possessing fixed values and zero dimensions (e.g. $\pi = 3.14159...$, Euler's number $e = 2.718...$, pure numbers $1, 2, {frac('1', '2')}$).</li>
  </ul>

  <!-- SECTION 8: DIMENSIONAL ANALYSIS AND APPLICATIONS -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    8. Dimensional Analysis and Its Three Core Applications
  </h2>

  <p>Dimensional analysis represents one of the most powerful algebraic techniques in theoretical physics, founded upon the foundational <b>Principle of Dimensional Homogeneity</b>.</p>

  ${defBox(
    "Principle of Dimensional Homogeneity",
    "A physical equation is dimensionally correct if and only if the dimensions of all individual terms on both sides of the equation (separated by +, -, or =) are strictly identical. One can only add, subtract, or equate terms that possess identical dimensions.",
    "None",
    "For A + B = C - D &rArr; [A] = [B] = [C] = [D]"
  )}

  <h3 style="color: ${themeColor}; margin-top: 22px;">Application 1: Checking the Correctness / Consistency of Equations</h3>
  <p>To verify if an equation is dimensionally consistent, we evaluate the dimensional formula of each additive term on the Left Hand Side (LHS) and Right Hand Side (RHS). If any term disagrees, the equation is unphysical and incorrect.</p>

  ${stepDerivationBox(
    "Checking Kinematic Equation s = u t + ½ a t²",
    [
      {
        name: "LHS Dimensional Evaluation",
        content: `Displacement term on LHS: $[\text{LHS}] = [s] = [L] = [M^0 L^1 T^0]$.`
      },
      {
        name: "RHS First Term (u t) Evaluation",
        content: `Initial velocity times time: $[u \cdot t] = [L T^{-1}] \times [T] = [L T^{(-1+1)}] = [L] = [M^0 L^1 T^0]$.`
      },
      {
        name: "RHS Second Term (½ a t²) Evaluation",
        content: `The numerical factor ½ is a pure dimensionless constant $[½] = [1]$.
          <br>$[a \cdot t^2] = [L T^{-2}] \times [T^2] = [L T^{(-2+2)}] = [L] = [M^0 L^1 T^0]$.`
      },
      {
        name: "Conclusion by Principle of Homogeneity",
        content: `Since $[\text{LHS}] = [u \cdot t] = [½ a t^2] = [L]$, every term has identical dimensions of length. Therefore, the equation is <b>dimensionally consistent and valid</b>.`
      }
    ]
  )}

  <h3 style="color: ${themeColor}; margin-top: 22px;">Application 2: Deducing Relations Among Physical Quantities</h3>
  <p>If we know the physical parameters upon which a certain quantity depends, we express the relationship as a power law with unknown exponents ($a, b, c$) and apply dimensional homogeneity to solve for the exponents.</p>

  ${stepDerivationBox(
    "Deriving Formula for Time Period of Simple Pendulum (T = 2π √(l/g))",
    [
      {
        name: "Hypothesis Formulation",
        content: `Assume time period $T$ of a simple pendulum depends upon:
          <br>(1) Mass of bob $m$ raised to power $a$: $m^a$
          <br>(2) Effective length of pendulum $l$ raised to power $b$: $l^b$
          <br>(3) Acceleration due to gravity $g$ raised to power $c$: $g^c$
          <br>Hence: <b>T = k &middot; m<sup>a</sup> &middot; l<sup>b</sup> &middot; g<sup>c</sup></b>, where $k$ is a dimensionless constant.`
      },
      {
        name: "Substitute Dimensional Formulas",
        content: `LHS: $[T] = [M^0 L^0 T^1]$
          <br>RHS: $[k] [m]^a [l]^b [g]^c = [1] [M]^a [L]^b [L T^{-2}]^c = [M^a L^{(b+c)} T^{-2c}]$.
          <br>Equating LHS and RHS: <b>[M<sup>0</sup> L<sup>0</sup> T<sup>1</sup>] = [M<sup>a</sup> L<sup>b+c</sup> T<sup>-2c</sup>]</b>.`
      },
      {
        name: "Equate Exponents of Fundamental Quantities",
        content: `&bull; For mass [M]: $a = 0$ (Time period is independent of bob mass!)
          <br>&bull; For time [T]: $-2c = 1 \implies c = -${frac('1', '2')}$
          <br>&bull; For length [L]: $b + c = 0 \implies b = -c = +${frac('1', '2')}$.`
      },
      {
        name: "Assemble Final Mathematical Relationship",
        content: `Substitute exponents back into formula:
          <br>$T = k \cdot m^0 \cdot l^{1/2} \cdot g^{-1/2} = k \sqrt{${frac('l', 'g')}}$.
          <br>Experimental measurement establishes $k = 2\pi$, yielding the celebrated formula:
          <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 17px; font-weight: bold;">T = 2\pi \sqrt{${frac('l', 'g')}}</div>`
      }
    ]
  )}

  ${stepDerivationBox(
    "Deriving Centripetal Force (F = m v² / r)",
    [
      {
        name: "Formulate Power Law Dependence",
        content: `Centripetal force $F$ of a body moving in a circular path depends on:
          <br>Mass $m^a$, orbital velocity $v^b$, and orbit radius $r^c$.
          <br>Equation: <b>F = k &middot; m<sup>a</sup> &middot; v<sup>b</sup> &middot; r<sup>c</sup></b> (where $k$ is a dimensionless constant).`
      },
      {
        name: "Substitute Dimensions & Group Terms",
        content: `LHS: $[F] = [M L T^{-2}]$
          <br>RHS: $[M]^a [L T^{-1}]^b [L]^c = [M^a L^{(b+c)} T^{-b}]$.
          <br>Equating dimensions: <b>[M<sup>1</sup> L<sup>1</sup> T<sup>-2</sup>] = [M<sup>a</sup> L<sup>b+c</sup> T<sup>-b</sup>]</b>.`
      },
      {
        name: "Solve System of Linear Equations",
        content: `&bull; Comparing power of [M]: $a = 1$
          <br>&bull; Comparing power of [T]: $-b = -2 \implies b = 2$
          <br>&bull; Comparing power of [L]: $b + c = 1 \implies 2 + c = 1 \implies c = -1$.`
      },
      {
        name: "Final Formula Assembly",
        content: `Substitute $a=1, b=2, c=-1$:
          <br>$F = k \cdot m^1 \cdot v^2 \cdot r^{-1} = k ${frac('m v<sup>2</sup>', 'r')}$.
          <br>In SI units, experimentation confirms $k = 1$, yielding:
          <div style="text-align: center; margin: 8px 0; color: #76FF03; font-size: 17px; font-weight: bold;">F = ${frac('m v<sup>2</sup>', 'r')}</div>`
      }
    ]
  )}

  <h3 style="color: ${themeColor}; margin-top: 22px;">Application 3: Conversion of a Physical Unit From One System to Another</h3>
  <p>Based on the universal invariance of physical magnitude ($Q = n_1 u_1 = n_2 u_2$), if a quantity has dimensions $[M^a L^b T^c]$, its numerical value $n_2$ in a second system with base units $(M_2, L_2, T_2)$ relates to $n_1$ in the first system $(M_1, L_1, T_1)$ by:</p>

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">
    <b>n<sub>2</sub> = n<sub>1</sub> &times; \left[${frac('M<sub>1</sub>', 'M<sub>2</sub>')}\right]<sup>a</sup> &times; \left[${frac('L<sub>1</sub>', 'L<sub>2</sub>')}\right]<sup>b</sup> &times; \left[${frac('T<sub>1</sub>', 'T<sub>2</sub>')}\right]<sup>c</sup></b>
  </div>

  ${solvedExampleBox(
    1,
    "Convert 1 Joule of energy from the SI system into Ergs in the CGS system using dimensional analysis.",
    `Energy dimensional formula is $[E] = [M L^2 T^{-2}] \implies a = 1, b = 2, c = -2$.
    <br>&bull; <b>System 1 (SI):</b> $n_1 = 1, M_1 = 1 \text{ kg} = 1000 \text{ g}, L_1 = 1 \text{ m} = 100 \text{ cm}, T_1 = 1 \text{ s}$.
    <br>&bull; <b>System 2 (CGS):</b> $n_2 = ?, M_2 = 1 \text{ g}, L_2 = 1 \text{ cm}, T_2 = 1 \text{ s}$.
    <br>Apply unit conversion master relation:
    <br>$n_2 = 1 \times \left[${frac('1000 \text{ g}', '1 \text{ g}')}\right]^1 \times \left[${frac('100 \text{ cm}', '1 \text{ cm}')}\right]^2 \times \left[${frac('1 \text{ s}', '1 \text{ s}')}\right]^{-2}$
    <br>$n_2 = 1 \times (10^3)^1 \times (10^2)^2 \times (1)^{-2} = 10^3 \times 10^4 \times 1 = \mathbf{10^7}$.
    <br>Therefore: <span style="color: #76FF03; font-weight: bold;">1 Joule = 10<sup>7</sup> Erg</span>.`
  )}

  ${solvedExampleBox(
    2,
    "Convert 1 Newton of force from SI into Dyne in CGS units.",
    `Force dimensional formula is $[F] = [M L T^{-2}] \implies a = 1, b = 1, c = -2$.
    <br>&bull; <b>System 1 (SI):</b> $n_1 = 1, M_1 = 1 \text{ kg} = 1000 \text{ g}, L_1 = 1 \text{ m} = 100 \text{ cm}, T_1 = 1 \text{ s}$.
    <br>&bull; <b>System 2 (CGS):</b> $n_2 = ?, M_2 = 1 \text{ g}, L_2 = 1 \text{ cm}, T_2 = 1 \text{ s}$.
    <br>$n_2 = 1 \times \left[${frac('1000 \text{ g}', '1 \text{ g}')}\right]^1 \times \left[${frac('100 \text{ cm}', '1 \text{ cm}')}\right]^1 \times \left[${frac('1 \text{ s}', '1 \text{ s}')}\right]^{-2}$
    <br>$n_2 = 1 \times 10^3 \times 10^2 \times 1 = \mathbf{10^5}$.
    <br>Therefore: <span style="color: #76FF03; font-weight: bold;">1 Newton = 10<sup>5</sup> Dyne</span>.`
  )}

  <h3 style="color: ${themeColor}; margin-top: 22px;">(iv) Critical Limitations of Dimensional Analysis</h3>
  <p>Despite its mathematical power, dimensional analysis possesses strict operational limitations that students must master for board examinations:</p>
  <ul style="margin-left: 20px; line-height: 1.85;">
    <li><b style="color: ${themeColor};">1. Inability to Determine Dimensionless Constants:</b> Dimensional analysis cannot evaluate the numerical value of dimensionless proportionality constants ($k$, $2\pi$, $½$). These can only be established through physical experimentation or rigorous calculus derivations.</li>
    <li><b style="color: ${themeColor};">2. Breakdown Beyond Three Variables in Mechanics:</b> In mechanics, we only have 3 base equations corresponding to $[M]$, $[L]$, and $[T]$. If a physical quantity depends upon more than three independent physical quantities, we obtain more unknowns than equations, rendering the system insoluble via dimensional analysis alone.</li>
    <li><b style="color: ${themeColor};">3. Inapplicable to Transcendental Functions:</b> Trigonometric ($\sin \theta, \cos \omega t$), logarithmic ($\ln x$), and exponential ($e^{-kx}$) functions are pure dimensionless quantities. If an equation incorporates these functions, dimensional analysis cannot derive the relationship.</li>
    <li><b style="color: ${themeColor};">4. Insensitivity to Directionality (Scalar vs Vector Ambiguity):</b> Two radically different physical concepts may share identical dimensions. For example, <b>Work</b> (a scalar) and <b>Torque</b> (a rotational vector) both possess dimensional formula $[M L^2 T^{-2}]$. Dimensional analysis cannot distinguish whether a quantity is scalar or vector.</li>
    <li><b style="color: ${themeColor};">5. Failure on Multi-Term Additive Equations:</b> Dimensional analysis cannot derive formulas containing additive terms on one side, such as $s = ut + ½ at^2$ or $v^2 = u^2 + 2as$. It can only test their dimensional consistency.</li>
  </ul>

  <!-- MASTER REVISION FORMULA CHEAT SHEET -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Master Revision Formula Cheat Sheet</h2>
    <p class="text-center" style="color: #CBD5E1; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Quick Reference Formulas & Constants &bull; Unit I: Units and Measurements</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Fundamental Measurement Invariance:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $Q = n_1 u_1 = n_2 u_2$<br>
          $n \propto ${frac('1', 'u')}$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Supplementary Angles:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Plane Angle: $d\theta = ${frac('ds', 'r')} \text{ rad}$<br>
          Solid Angle: $d\Omega = ${frac('dA', 'r<sup>2</sup>')} \text{ sr}$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Unit Conversion Master Equation:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $n_2 = n_1 \left[${frac('M_1', 'M_2')}\right]^a \left[${frac('L_1', 'L_2')}\right]^b \left[${frac('T_1', 'T_2')}\right]^c$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Standard Unit Factors:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          $1 \text{ J} = 10^7 \text{ Erg}$ &nbsp;|&nbsp; $1 \text{ N} = 10^5 \text{ Dyne}$<br>
          $1 \text{ AU} = 1.496 \times 10^{11} \text{ m}$<br>
          $1 \text{ ly} = 9.46 \times 10^{15} \text{ m}$ &nbsp;|&nbsp; $1 \text{ pc} = 3.08 \times 10^{16} \text{ m}$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Critical Dimensional Constants:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Gravitational $G = [M^{-1} L^3 T^{-2}]$<br>
          Planck $h = [M L^2 T^{-1}]$<br>
          Permittivity $\varepsilon_0 = [M^{-1} L^{-3} T^4 A^2]$<br>
          Permeability $\mu_0 = [M L T^{-2} A^{-2}]$
        </span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; display: block; margin-bottom: 4px;">&bull; Identical Dimensional Pairs:</b>
        <span style="color: #FFFFFF; line-height: 1.6; display: block;">
          Work &bull; Energy &bull; Torque: $[M L^2 T^{-2}]$<br>
          Impulse &bull; Momentum: $[M L T^{-1}]$<br>
          Pressure &bull; Stress &bull; Modulus: $[M L^{-1} T^{-2}]$<br>
          Surface Tension &bull; Spring Const: $[M T^{-2}]$
        </span>
      </div>
    </div>
  </div>

</div>`;
}

module.exports = { buildOverview };
