const { themeColor, frac } = require('./c11_phy_1_helpers');

function getVsaQuestions() {
  const qList = [
    {
      q: "Define a physical quantity with two examples.",
      sol: "A physical quantity is any characteristic or property of an object, substance, or phenomenon that can be measured using an appropriate scientific instrument and quantified in terms of a numerical value and a unit. <b>Examples:</b> Mass (kg), Velocity (m s<sup>-1</sup>)."
    },
    {
      q: "State the fundamental equation of physical measurement.",
      sol: "The fundamental equation of measurement is <b>Q = n &times; u</b>, where <i>Q</i> is the physical quantity, <i>n</i> is the numerical magnitude, and <i>u</i> is the chosen standard unit. Since <i>Q</i> is constant, <b>n<sub>1</sub> u<sub>1</sub> = n<sub>2</sub> u<sub>2</sub> &rArr; n &prop; " + frac('1', 'u') + "</b>."
    },
    {
      q: "Why is a standard unit required in scientific measurement?",
      sol: "A standard unit is required to provide an invariable, reproducible, and universally accepted reference of known magnitude, eliminating subjective human sensory errors and ensuring consistent scientific communication worldwide."
    },
    {
      q: "Name the three historical metric/imperial systems of units.",
      sol: "The three historical systems are: (1) <b>CGS System</b> (centimeter, gram, second), (2) <b>FPS System</b> (foot, pound, second), and (3) <b>MKS System</b> (meter, kilogram, second)."
    },
    {
      q: "What does the abbreviation 'SI' stand for, and in which year was it adopted?",
      sol: "The abbreviation 'SI' stands for <b>Syst&egrave;me International d'Unit&eacute;s</b> (International System of Units). It was formally adopted in <b>1971</b> by the 14th General Conference on Weights and Measures (CGPM)."
    },
    {
      q: "List all seven fundamental base quantities in the SI system.",
      sol: "The seven fundamental base quantities are: (1) Length (meter, m), (2) Mass (kilogram, kg), (3) Time (second, s), (4) Electric Current (ampere, A), (5) Thermodynamic Temperature (kelvin, K), (6) Amount of Substance (mole, mol), and (7) Luminous Intensity (candela, cd)."
    },
    {
      q: "Define fundamental (base) units.",
      sol: "Fundamental units are the basic, mutually independent physical units that cannot be expressed in terms of any other units, nor can they be derived from each other. They form the primary foundation of a system of units."
    },
    {
      q: "Define derived units with two examples.",
      sol: "Derived units are units of measurement expressed algebraically as products, quotients, or powers of fundamental base units. <b>Examples:</b> Velocity (m s<sup>-1</sup>), Force (Newton, 1 N = 1 kg m s<sup>-2</sup>)."
    },
    {
      q: "Name the two supplementary units of the SI system along with their symbols.",
      sol: "The two supplementary units are: (1) <b>Radian (rad)</b> for plane angle, and (2) <b>Steradian (sr)</b> for solid angle."
    },
    {
      q: "Can a physical quantity have a unit but no dimensions? Give an example.",
      sol: "<b>Yes.</b> Both <b>plane angle</b> (measured in radians, rad) and <b>solid angle</b> (measured in steradians, sr) possess recognized SI units, but their dimensional formulas are strictly dimensionless: [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]."
    },
    {
      q: "Can a physical quantity have dimensions but no unit? Explain.",
      sol: "<b>No.</b> Any physical quantity that possesses non-zero dimensions must inevitably be expressible in terms of fundamental base units, and therefore it must have a unit."
    },
    {
      q: "Define one radian (1 rad).",
      sol: "One radian is the plane angle subtended at the center of a circle by a circular arc whose length is exactly equal to the radius of the circle: &theta; = " + frac('s', 'r') + " = " + frac('r', 'r') + " = 1 rad."
    },
    {
      q: "Define one steradian (1 sr).",
      sol: "One steradian is the solid angle subtended at the center of a sphere by a spherical surface patch whose area is equal to the square of the sphere's radius: &Omega; = " + frac('A', 'r<sup>2</sup>') + " = " + frac('r<sup>2</sup>', 'r<sup>2</sup>') + " = 1 sr."
    },
    {
      q: "What is the total solid angle subtended by a complete sphere at its center?",
      sol: "The total surface area of a sphere is A = 4&pi; r<sup>2</sup>. Therefore, the total solid angle subtended at the center is &Omega;<sub>total</sub> = " + frac('4&pi; r<sup>2</sup>', 'r<sup>2</sup>') + " = <b>4&pi; steradians (4&pi; sr)</b>."
    },
    {
      q: "Why is the SI system called a 'coherent' system of units?",
      sol: "The SI system is called coherent because all derived units can be obtained purely by algebraic multiplication and division of the base and supplementary units without introducing any arbitrary numerical conversion factors."
    },
    {
      q: "Why is the SI system termed a 'rational' system of units?",
      sol: "The SI system is rational because it assigns only one unique unit to any given physical quantity across all scientific disciplines. For example, all forms of energy (mechanical, heat, chemical, electrical) are expressed exclusively in <b>Joules (J)</b>."
    },
    {
      q: "Define one Astronomical Unit (AU) and state its value in meters.",
      sol: "One Astronomical Unit (AU) is the mean orbital distance between the center of the Earth and the center of the Sun. Its value is <b>1 AU = 1.496 &times; 10<sup>11</sup> m</b>."
    },
    {
      q: "Define one Light Year (ly) and state its value in meters.",
      sol: "One Light Year (ly) is the total distance traversed by light in vacuum in one Julian year (365.25 days). Its value is: 1 ly = c &times; t = (3 &times; 10<sup>8</sup> m s<sup>-1</sup>) &times; (365.25 &times; 86400 s) = <b>9.46 &times; 10<sup>15</sup> m</b>."
    },
    {
      q: "Define one Parsec (pc) and state its relation to light years.",
      sol: "One Parsec (parallactic second) is the distance at which an astronomical baseline of 1 AU subtends a parallax angle of 1 arcsecond (1''). Its value is <b>1 pc = 3.08 &times; 10<sup>16</sup> m &approx; 3.26 light years</b>."
    },
    {
      q: "Arrange the astronomical distance units AU, light year, and parsec in increasing order.",
      sol: "In increasing order of magnitude: <b>1 AU &lt; 1 Light Year &lt; 1 Parsec</b> (1.496 &times; 10<sup>11</sup> m &lt; 9.46 &times; 10<sup>15</sup> m &lt; 3.08 &times; 10<sup>16</sup> m)."
    },
    {
      q: "Define one Fermi (Femtometer) and state where it is used.",
      sol: "One Fermi is defined as <b>1 fm = 10<sup>-15</sup> m</b>. It is universally used in nuclear physics to measure the radii and cross-sections of atomic nuclei."
    },
    {
      q: "Define one Angstrom (Å) and write its value in meters and nanometers.",
      sol: "One Angstrom is defined as <b>1 &Aring; = 10<sup>-10</sup> m = 0.1 nm</b>. It is commonly employed to express atomic radii, chemical bond lengths, and wavelengths of visible light."
    },
    {
      q: "What is the Chandrasekhar Limit (CSL)? State its numerical value.",
      sol: "The Chandrasekhar Limit is the practical largest unit of mass in astrophysics, representing the maximum stable mass of a white dwarf star: <b>1 CSL = 1.4 &times; M<sub>Sun</sub> &approx; 2.8 &times; 10<sup>30</sup> kg</b>."
    },
    {
      q: "What is meant by 'significant figures' in experimental measurement?",
      sol: "Significant figures are the total number of digits in an experimental measurement that are known reliably and with certainty, plus the first single terminal digit that carries experimental uncertainty."
    },
    {
      q: "State the number of significant figures in 0.000450 m.",
      sol: "There are <b>3 significant figures</b> (4, 5, 0). The initial leading zeros (0.000) merely indicate the decimal position and are non-significant, while the terminal trailing zero after the decimal is significant."
    },
    {
      q: "State the number of significant figures in 3.080 × 10¹¹ m.",
      sol: "There are <b>4 significant figures</b> (3, 0, 8, 0). The exponential power of 10 does not influence the count of significant figures."
    },
    {
      q: "Round off 7.835 to 3 significant figures.",
      sol: "By the even-odd rule, the digit to drop is 5 preceded by the odd digit 3. Therefore, 3 is increased by 1 to make it even: <b>7.84</b>."
    },
    {
      q: "Round off 12.6450 to 4 significant figures.",
      sol: "The digit to drop is 5 followed by zeros, preceded by the even digit 4. By the even-odd rule, the even digit remains unchanged: <b>12.64</b>."
    },
    {
      q: "State the governing rule for significant figures in addition and subtraction.",
      sol: "The final sum or difference must be rounded off to retain only as many <b>decimal places</b> as are present in the measurement with the least number of decimal places."
    },
    {
      q: "State the governing rule for significant figures in multiplication and division.",
      sol: "The final product or quotient must be rounded off to retain only as many <b>significant figures</b> as are present in the original measurement with the least number of significant figures."
    },
    {
      q: "Define the dimensions of a physical quantity.",
      sol: "The dimensions of a physical quantity are the powers (or exponents) to which the fundamental base units [M], [L], [T], etc., must be raised to represent derived units of that physical quantity."
    },
    {
      q: "What is a dimensional equation? Give an example.",
      sol: "A dimensional equation is an algebraic equation equating a physical quantity to its dimensional formula. <b>Example:</b> Force equation: <b>[F] = [M L T<sup>-2</sup>]</b>."
    },
    {
      q: "Write the dimensional formula and SI unit of Universal Gravitational Constant (G).",
      sol: "From F = G " + frac('m<sub>1</sub> m<sub>2</sub>', 'r<sup>2</sup>') + ", G = " + frac('F r<sup>2</sup>', 'm<sub>1</sub> m<sub>2</sub>') + ". Dimensional formula: <b>[M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]</b>. SI unit: <b>N m<sup>2</sup> kg<sup>-2</sup></b>."
    },
    {
      q: "Write the dimensional formula and SI unit of Planck's Constant (h).",
      sol: "From E = h &nu;, h = " + frac('E', '&nu;') + " = " + frac('[M L<sup>2</sup> T<sup>-2</sup>]', '[T<sup>-1</sup>]') + ". Dimensional formula: <b>[M L<sup>2</sup> T<sup>-1</sup>]</b>. SI unit: <b>J s</b>."
    },
    {
      q: "Which physical quantity has the same dimensions as Planck's constant?",
      sol: "<b>Angular Momentum (L = m v r)</b> has the dimensional formula [M][L T<sup>-1</sup>][L] = <b>[M L<sup>2</sup> T<sup>-1</sup>]</b>, which is strictly identical to Planck's constant (h)."
    },
    {
      q: "Name two pairs of physical quantities that share identical dimensions.",
      sol: "(1) <b>Work and Torque:</b> Both possess dimensions <b>[M L<sup>2</sup> T<sup>-2</sup>]</b>.<br>(2) <b>Impulse and Linear Momentum:</b> Both possess dimensions <b>[M L T<sup>-1</sup>]</b>."
    },
    {
      q: "Define a dimensional constant and give two examples.",
      sol: "A dimensional constant is a physical constant that has a fixed numerical value and also carries dimensions. <b>Examples:</b> Universal Gravitational Constant G ([M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]), Planck's constant h ([M L<sup>2</sup> T<sup>-1</sup>])."
    },
    {
      q: "Define a dimensionless variable and give two examples.",
      sol: "A dimensionless variable is a physical parameter that can take variable numerical values but possesses zero dimensions ([M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]). <b>Examples:</b> Strain (" + frac('&Delta;L', 'L') + "), Refractive index (&mu;)."
    },
    {
      q: "State the Principle of Dimensional Homogeneity.",
      sol: "The Principle of Dimensional Homogeneity states that an equation is dimensionally correct if and only if the dimensions of each and every term on both sides of the equation (separated by +, -, or =) are strictly identical."
    },
    {
      q: "State two limitations of dimensional analysis.",
      sol: "(1) It cannot determine the numerical value of dimensionless proportionality constants (e.g. 2&pi;, &frac12;).<br>(2) It fails when a physical quantity depends on trigonometric, logarithmic, or exponential functions."
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 1}: ${item.q}</h3>
    <div style="background: rgba(255, 81, 47, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Physical Reasoning:</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getVsaQuestions };
