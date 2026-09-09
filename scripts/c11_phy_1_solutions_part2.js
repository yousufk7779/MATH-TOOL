const { themeColor, frac } = require('./c11_phy_1_helpers');

function getSaQuestions() {
  const qList = [
    {
      q: "Distinguish between fundamental and derived units with two distinct points and examples.",
      sol: "<b>1. Definition:</b> Fundamental units are independent and cannot be defined or derived from any other unit (e.g. meter for length, kilogram for mass). Derived units are expressed algebraically as products or quotients of fundamental units (e.g. m s<sup>-1</sup> for velocity, N for force).<br><b>2. Mutability & Count:</b> In the SI system, there are strictly 7 fundamental base units. In contrast, the number of derived units is virtually limitless, spanning all disciplines of science."
    },
    {
      q: "Explain why plane angle is a dimensionless quantity despite having a well-defined unit.",
      sol: "Plane angle &theta; is defined geometrically as the ratio of arc length (s) to radius (r):<br><div style='text-align:center;margin:6px 0;'>&theta; = " + frac('s', 'r') + "</div>Both arc length $s$ and radius $r$ possess the dimensional formula of length [L]. Therefore:<br><div style='text-align:center;margin:6px 0;'>[&theta;] = " + frac('[L]', '[L]') + " = [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]</div>Because all base dimensions cancel to zero powers, the quantity is completely dimensionless. However, to distinguish angular orientation from pure linear numbers, the SI assigns it the supplementary unit <b>radian (rad)</b>."
    },
    {
      q: "Differentiate between accuracy and precision in scientific measurement.",
      sol: "<b>Accuracy</b> refers to how close a measured value is to the true, accepted standard value of the physical quantity. It depends primarily on the minimization of systematic errors.<br><b>Precision</b> refers to the degree of agreement or reproducibility among multiple repeated independent measurements of the same quantity under identical conditions. It depends directly on the least count and resolution of the measuring instrument, irrespective of how close the values are to the true value."
    },
    {
      q: "A rectangular plate has length l = (16.2 ± 0.1) cm and breadth b = (10.1 ± 0.1) cm. Find its area and percentage uncertainty.",
      sol: "<b>Area:</b> A = l &times; b = 16.2 &times; 10.1 = <b>163.62 cm<sup>2</sup></b>.<br>Fractional uncertainty: " + frac('&Delta;A', 'A') + " = " + frac('&Delta;l', 'l') + " + " + frac('&Delta;b', 'b') + " = " + frac('0.1', '16.2') + " + " + frac('0.1', '10.1') + " = 0.00617 + 0.00990 = 0.01607.<br>Absolute uncertainty: &Delta;A = 0.01607 &times; 163.62 = <b>2.63 cm<sup>2</sup></b> &approx; 3 cm<sup>2</sup>.<br>Percentage uncertainty = 0.01607 &times; 100% = <b>1.61%</b>.<br>Rounding to significant figures: <b>Area = (164 &plusmn; 3) cm<sup>2</sup></b>."
    },
    {
      q: "Calculate the volume of a sphere of radius r = 2.14 cm, expressing the answer to appropriate significant figures.",
      sol: "Volume of a sphere: V = " + frac('4', '3') + " &pi; r<sup>3</sup>.<br>Substitute r = 2.14 cm: V = " + frac('4', '3') + " &times; 3.14159 &times; (2.14)<sup>3</sup> = " + frac('4', '3') + " &times; 3.14159 &times; 9.80034 = <b>41.088 cm<sup>3</sup></b>.<br>Since the measured radius 2.14 cm has <b>3 significant figures</b>, the calculated volume must be rounded to 3 significant figures:<br><b>V = 41.1 cm<sup>3</sup></b>."
    },
    {
      q: "Perform the arithmetic operation 436.32 g + 227.2 g + 0.301 g and express the result with proper significant figures.",
      sol: "Add the terms algebraically: 436.32 + 227.2 + 0.301 = <b>663.821 g</b>.<br>Rule for addition: The result must retain only as many decimal places as the term with the fewest decimal places.<br>&bull; 436.32 has 2 decimal places.<br>&bull; 227.2 has <b>1 decimal place</b> (least precise).<br>&bull; 0.301 has 3 decimal places.<br>Rounding 663.821 to 1 decimal place gives: <b>663.8 g</b>."
    },
    {
      q: "Mass of a substance is 5.74 g and its volume is 1.2 cm³. Calculate its density with proper significant figures.",
      sol: "Density &rho; = " + frac('Mass', 'Volume') + " = " + frac('5.74 g', '1.2 cm<sup>3</sup>') + " = 4.78333... g cm<sup>-3</sup>.<br>Rule for division: The result must have the same number of significant figures as the least precise quantity.<br>&bull; Mass (5.74 g) has 3 significant figures.<br>&bull; Volume (1.2 cm<sup>3</sup>) has <b>2 significant figures</b>.<br>Rounding to 2 significant figures: <b>Density = 4.8 g cm<sup>-3</sup></b>."
    },
    {
      q: "Convert 1 Newton of force into CGS unit Dyne using dimensional analysis.",
      sol: "Dimensional formula of Force: [F] = [M L T<sup>-2</sup>] &rArr; a = 1, b = 1, c = -2.<br>Formula: n<sub>2</sub> = n<sub>1</sub> [" + frac('M<sub>1</sub>', 'M<sub>2</sub>') + "]<sup>a</sup> [" + frac('L<sub>1</sub>', 'L<sub>2</sub>') + "]<sup>b</sup> [" + frac('T<sub>1</sub>', 'T<sub>2</sub>') + "]<sup>c</sup>.<br>Here SI (System 1): M<sub>1</sub> = 1 kg = 1000 g, L<sub>1</sub> = 1 m = 100 cm, T<sub>1</sub> = 1 s, n<sub>1</sub> = 1.<br>CGS (System 2): M<sub>2</sub> = 1 g, L<sub>2</sub> = 1 cm, T<sub>2</sub> = 1 s.<br>n<sub>2</sub> = 1 &times; [" + frac('1000 g', '1 g') + "]<sup>1</sup> &times; [" + frac('100 cm', '1 cm') + "]<sup>1</sup> &times; [" + frac('1 s', '1 s') + "]<sup>-2</sup> = 10<sup>3</sup> &times; 10<sup>2</sup> &times; 1 = <b>10<sup>5</sup></b>.<br>Thus: <b>1 Newton = 10<sup>5</sup> Dyne</b>."
    },
    {
      q: "Convert 1 Joule of energy into CGS unit Erg using dimensional analysis.",
      sol: "Dimensional formula of Energy: [E] = [M L<sup>2</sup> T<sup>-2</sup>] &rArr; a = 1, b = 2, c = -2.<br>n<sub>2</sub> = n<sub>1</sub> [" + frac('M<sub>1</sub>', 'M<sub>2</sub>') + "]<sup>a</sup> [" + frac('L<sub>1</sub>', 'L<sub>2</sub>') + "]<sup>b</sup> [" + frac('T<sub>1</sub>', 'T<sub>2</sub>') + "]<sup>c</sup>.<br>SI: M<sub>1</sub> = 1 kg = 10<sup>3</sup> g, L<sub>1</sub> = 1 m = 10<sup>2</sup> cm, T<sub>1</sub> = 1 s, n<sub>1</sub> = 1.<br>CGS: M<sub>2</sub> = 1 g, L<sub>2</sub> = 1 cm, T<sub>2</sub> = 1 s.<br>n<sub>2</sub> = 1 &times; (10<sup>3</sup>)<sup>1</sup> &times; (10<sup>2</sup>)<sup>2</sup> &times; (1)<sup>-2</sup> = 10<sup>3</sup> &times; 10<sup>4</sup> = <b>10<sup>7</sup></b>.<br>Therefore: <b>1 Joule = 10<sup>7</sup> Erg</b>."
    },
    {
      q: "The value of Universal Gravitational Constant is G = 6.67 × 10⁻¹¹ N m² kg⁻² in SI. Convert it into CGS units.",
      sol: "Dimensions of G: [G] = [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>] &rArr; a = -1, b = 3, c = -2.<br>Formula: n<sub>2</sub> = n<sub>1</sub> [" + frac('M<sub>1</sub>', 'M<sub>2</sub>') + "]<sup>-1</sup> [" + frac('L<sub>1</sub>', 'L<sub>2</sub>') + "]<sup>3</sup> [" + frac('T<sub>1</sub>', 'T<sub>2</sub>') + "]<sup>-2</sup>.<br>n<sub>2</sub> = 6.67 &times; 10<sup>-11</sup> &times; (10<sup>3</sup>)<sup>-1</sup> &times; (10<sup>2</sup>)<sup>3</sup> &times; (1)<sup>-2</sup><br>n<sub>2</sub> = 6.67 &times; 10<sup>-11</sup> &times; 10<sup>-3</sup> &times; 10<sup>6</sup> = <b>6.67 &times; 10<sup>-8</sup> dyn cm<sup>2</sup> g<sup>-2</sup></b>."
    },
    {
      q: "In van der Waals' gas equation (P + a/V²)(V - b) = RT, determine the dimensional formulas and SI units of constants a and b.",
      sol: "By the Principle of Dimensional Homogeneity:<br>1. The term " + frac('a', 'V<sup>2</sup>') + " is added to pressure P, so it must have the same dimensions as pressure:<br>[" + frac('a', 'V<sup>2</sup>') + "] = [P] &rArr; [a] = [P][V<sup>2</sup>] = [M L<sup>-1</sup> T<sup>-2</sup>][(L<sup>3</sup>)<sup>2</sup>] = [M L<sup>-1</sup> T<sup>-2</sup>][L<sup>6</sup>] = <b>[M L<sup>5</sup> T<sup>-2</sup>]</b>.<br>SI unit of a: <b>N m<sup>4</sup> = kg m<sup>5</sup> s<sup>-2</sup></b>.<br>2. The term b is subtracted from volume V, so it must have dimensions of volume:<br>[b] = [V] = <b>[M<sup>0</sup> L<sup>3</sup> T<sup>0</sup>]</b>.<br>SI unit of b: <b>m<sup>3</sup></b>."
    },
    {
      q: "In the relation F = a√x + b t², where F is force, x is distance, and t is time, find the dimensional formulas of a and b.",
      sol: "By Principle of Homogeneity, each term on RHS must equal the dimensions of Force [F] = [M L T<sup>-2</sup>]:<br>1. [a &radic;x] = [F] &rArr; [a][L<sup>1/2</sup>] = [M L T<sup>-2</sup>] &rArr; [a] = [M L<sup>(1 - 1/2)</sup> T<sup>-2</sup>] = <b>[M L<sup>1/2</sup> T<sup>-2</sup>]</b>.<br>2. [b t<sup>2</sup>] = [F] &rArr; [b][T<sup>2</sup>] = [M L T<sup>-2</sup>] &rArr; [b] = [M L T<sup>-2 - 2</sup>] = <b>[M L T<sup>-4</sup>]</b>."
    },
    {
      q: "Check the dimensional consistency of the third equation of motion: v² - u² = 2 a s.",
      sol: "1. LHS: [v<sup>2</sup>] = ([L T<sup>-1</sup>])<sup>2</sup> = [L<sup>2</sup> T<sup>-2</sup>].<br>[u<sup>2</sup>] = ([L T<sup>-1</sup>])<sup>2</sup> = [L<sup>2</sup> T<sup>-2</sup>].<br>Difference of two identical velocity squares: [LHS] = [L<sup>2</sup> T<sup>-2</sup>].<br>2. RHS: The numerical factor 2 is dimensionless ([2] = [1]).<br>[2 a s] = [a][s] = [L T<sup>-2</sup>][L] = [L<sup>2</sup> T<sup>-2</sup>].<br>Since [LHS] = [RHS] = [L<sup>2</sup> T<sup>-2</sup>], the equation is <b>dimensionally correct and consistent</b>."
    },
    {
      q: "Check the dimensional validity of the expression for escape velocity: v_e = √(2 G M / R).",
      sol: "1. LHS: [v<sub>e</sub>] = [L T<sup>-1</sup>].<br>2. RHS: Factor 2 is dimensionless. Dimensions inside square root:<br>[" + frac('G M', 'R') + "] = " + frac('[M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>][M]', '[L]') + " = [L<sup>2</sup> T<sup>-2</sup>].<br>Taking square root: [&radic;(2GM/R)] = ([L<sup>2</sup> T<sup>-2</sup>])<sup>1/2</sup> = [L T<sup>-1</sup>].<br>Since [LHS] = [RHS] = [L T<sup>-1</sup>], the formula is <b>dimensionally consistent</b>."
    },
    {
      q: "Find the dimensions of (a / b) in the equation P = (a - t²) / (b x), where P is pressure, x is distance, and t is time.",
      sol: "1. In the numerator (a - t<sup>2</sup>), a is subtracted from t<sup>2</sup>, so by homogeneity: [a] = [t<sup>2</sup>] = <b>[T<sup>2</sup>]</b>.<br>2. Now [P] = " + frac('[a - t<sup>2</sup>]', '[b x]') + " = " + frac('[T<sup>2</sup>]', '[b][L]') + ".<br>Since [P] = [M L<sup>-1</sup> T<sup>-2</sup>]:<br>[M L<sup>-1</sup> T<sup>-2</sup>] = " + frac('[T<sup>2</sup>]', '[b][L]') + " &rArr; [b] = " + frac('[T<sup>2</sup>]', '[M L<sup>-1</sup> T<sup>-2</sup>][L]') + " = " + frac('[T<sup>2</sup>]', '[M T<sup>-2</sup>]') + " = <b>[M<sup>-1</sup> T<sup>4</sup>]</b>.<br>3. Ratio [" + frac('a', 'b') + "] = " + frac('[T<sup>2</sup>]', '[M<sup>-1</sup> T<sup>4</sup>]') + " = <b>[M L<sup>0</sup> T<sup>-2</sup>]</b>."
    },
    {
      q: "Explain why dimensional analysis cannot derive the exact formula s = u t + ½ a t².",
      sol: "Dimensional analysis uses the power-law product approach (Q = k A<sup>a</sup> B<sup>b</sup> C<sup>c</sup>). It assumes that the dependent quantity is a single product term of variables. It cannot determine the plus (+) or minus (-) signs separating independent additive components, nor can it determine multiple independent numerical coefficients (1 for ut and &frac12; for at<sup>2</sup>). It can only verify the consistency of each term individually."
    },
    {
      q: "If Planck's constant (h), speed of light in vacuum (c), and Newton's gravitational constant (G) are chosen as fundamental quantities, find the dimensions of Length.",
      sol: "Let Length L &prop; h<sup>a</sup> c<sup>b</sup> G<sup>c</sup>.<br>Substitute dimensions: [L] = [M L<sup>2</sup> T<sup>-1</sup>]<sup>a</sup> [L T<sup>-1</sup>]<sup>b</sup> [M<sup>-1</sup> L<sup>3</sup> T<sup>-2</sup>]<sup>c</sup><br>[M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>] = [M<sup>(a - c)</sup> L<sup>(2a + b + 3c)</sup> T<sup>(-a - b - 2c)</sup>].<br>Equating powers:<br>1. a - c = 0 &rArr; a = c.<br>2. -a - b - 2c = 0 &rArr; -3a - b = 0 &rArr; b = -3a.<br>3. 2a + b + 3c = 1 &rArr; 2a - 3a + 3a = 1 &rArr; 2a = 1 &rArr; a = " + frac('1', '2') + ", c = " + frac('1', '2') + ", b = -" + frac('3', '2') + ".<br>Therefore: <b>Length = [h<sup>1/2</sup> G<sup>1/2</sup> c<sup>-3/2</sup>] = &radic;(h G / c<sup>3</sup>)</b> (Planck length &approx; 1.6 &times; 10<sup>-35</sup> m)."
    },
    {
      q: "Using the same fundamental set (h, c, G), find the dimensions of Mass.",
      sol: "Let Mass M &prop; h<sup>a</sup> c<sup>b</sup> G<sup>c</sup>.<br>[M<sup>1</sup> L<sup>0</sup> T<sup>0</sup>] = [M<sup>(a - c)</sup> L<sup>(2a + b + 3c)</sup> T<sup>(-a - b - 2c)</sup>].<br>1. a - c = 1 &rArr; c = a - 1.<br>2. -a - b - 2(a - 1) = 0 &rArr; -3a - b + 2 = 0 &rArr; b = 2 - 3a.<br>3. 2a + (2 - 3a) + 3(a - 1) = 0 &rArr; 2a - 1 = 0 &rArr; a = " + frac('1', '2') + ".<br>Then c = &frac12; - 1 = -" + frac('1', '2') + ", and b = 2 - 3(&frac12;) = +" + frac('1', '2') + ".<br>Therefore: <b>Mass = [h<sup>1/2</sup> c<sup>1/2</sup> G<sup>-1/2</sup>] = &radic;(h c / G)</b> (Planck mass &approx; 2.18 &times; 10<sup>-8</sup> kg)."
    },
    {
      q: "Using the same fundamental set (h, c, G), find the dimensions of Time.",
      sol: "Time t = " + frac('Length', 'c') + " = " + frac('&radic;(h G / c<sup>3</sup>)', 'c') + " = <b>&radic;(h G / c<sup>5</sup>) = [h<sup>1/2</sup> G<sup>1/2</sup> c<sup>-5/2</sup>]</b> (Planck time &approx; 5.39 &times; 10<sup>-44</sup> s)."
    },
    {
      q: "Deduce by dimensional analysis an expression for the viscous drag force F acting on a spherical ball of radius r moving with velocity v through a fluid of viscosity η.",
      sol: "Assume F = k &eta;<sup>a</sup> r<sup>b</sup> v<sup>c</sup>.<br>Substitute dimensions: [M L T<sup>-2</sup>] = [M L<sup>-1</sup> T<sup>-1</sup>]<sup>a</sup> [L]<sup>b</sup> [L T<sup>-1</sup>]<sup>c</sup> = [M<sup>a</sup> L<sup>(-a + b + c)</sup> T<sup>(-a - c)</sup>].<br>Equating powers:<br>&bull; [M]: a = 1.<br>&bull; [T]: -a - c = -2 &rArr; -1 - c = -2 &rArr; c = 1.<br>&bull; [L]: -a + b + c = 1 &rArr; -1 + b + 1 = 1 &rArr; b = 1.<br>Substitute a = 1, b = 1, c = 1: <b>F = k &eta; r v</b>. Experimentally k = 6&pi;, yielding Stokes' Law: <b>F = 6&pi; &eta; r v</b>."
    },
    {
      q: "Deduce an expression for the frequency (ν) of vibration of a stretched string depending on its length (l), tension (T), and mass per unit length (m).",
      sol: "Let &nu; = k l<sup>a</sup> T<sup>b</sup> m<sup>c</sup>.<br>Dimensions: [&nu;] = [T<sup>-1</sup>], [l] = [L], [Tension T] = [Force] = [M L T<sup>-2</sup>], [m] = Mass/Length = [M L<sup>-1</sup>].<br>[M<sup>0</sup> L<sup>0</sup> T<sup>-1</sup>] = [L]<sup>a</sup> [M L T<sup>-2</sup>]<sup>b</sup> [M L<sup>-1</sup>]<sup>c</sup> = [M<sup>(b + c)</sup> L<sup>(a + b - c)</sup> T<sup>-2b</sup>].<br>1. -2b = -1 &rArr; b = " + frac('1', '2') + ".<br>2. b + c = 0 &rArr; c = -b = -" + frac('1', '2') + ".<br>3. a + b - c = 0 &rArr; a + &frac12; - (-&frac12;) = 0 &rArr; a + 1 = 0 &rArr; a = -1.<br>Thus: &nu; = k l<sup>-1</sup> T<sup>1/2</sup> m<sup>-1/2</sup> = <b>" + frac('k', 'l') + " &radic;(" + frac('T', 'm') + ")</b>."
    },
    {
      q: "A calorie is a unit of heat equal to 4.2 J, where 1 J = 1 kg m² s⁻². If a new unit of mass is α kg, unit of length is β m, and unit of time is γ s, find the magnitude of calorie in the new system.",
      sol: "Energy dimensions: [M L<sup>2</sup> T<sup>-2</sup>] &rArr; a = 1, b = 2, c = -2.<br>n<sub>1</sub> = 4.2.<br>SI: M<sub>1</sub> = 1 kg, L<sub>1</sub> = 1 m, T<sub>1</sub> = 1 s.<br>New system: M<sub>2</sub> = &alpha; kg, L<sub>2</sub> = &beta; m, T<sub>2</sub> = &gamma; s.<br>Formula: n<sub>2</sub> = n<sub>1</sub> [" + frac('M<sub>1</sub>', 'M<sub>2</sub>') + "]<sup>a</sup> [" + frac('L<sub>1</sub>', 'L<sub>2</sub>') + "]<sup>b</sup> [" + frac('T<sub>1</sub>', 'T<sub>2</sub>') + "]<sup>c</sup><br>n<sub>2</sub> = 4.2 &times; [" + frac('1 kg', '&alpha; kg') + "]<sup>1</sup> &times; [" + frac('1 m', '&beta; m') + "]<sup>2</sup> &times; [" + frac('1 s', '&gamma; s') + "]<sup>-2</sup><br><b>n<sub>2</sub> = 4.2 &alpha;<sup>-1</sup> &beta;<sup>-2</sup> &gamma;<sup>2</sup></b>."
    },
    {
      q: "Find the dimensions of Linear Mass Density, Surface Mass Density, and Volumetric Mass Density.",
      sol: "1. <b>Linear Mass Density (&lambda; = M / L):</b> [" + frac('M', 'L') + "] = <b>[M L<sup>-1</sup> T<sup>0</sup>]</b>.<br>2. <b>Surface Mass Density (&sigma; = M / A):</b> [" + frac('M', 'L<sup>2</sup>') + "] = <b>[M L<sup>-2</sup> T<sup>0</sup>]</b>.<br>3. <b>Volumetric Mass Density (&rho; = M / V):</b> [" + frac('M', 'L<sup>3</sup>') + "] = <b>[M L<sup>-3</sup> T<sup>0</sup>]</b>."
    },
    {
      q: "Write the dimensional formula and SI unit of Electric Permittivity of Free Space (ε₀).",
      sol: "From Coulomb's Law F = " + frac('1', '4&pi;&epsilon;<sub>0</sub>') + " " + frac('q<sub>1</sub> q<sub>2</sub>', 'r<sup>2</sup>') + " &rArr; &epsilon;<sub>0</sub> = " + frac('q<sup>2</sup>', '4&pi; F r<sup>2</sup>') + ".<br>Dimensions: [&epsilon;<sub>0</sub>] = " + frac('([A T])<sup>2</sup>', '[M L T<sup>-2</sup>][L<sup>2</sup>]') + " = " + frac('[A<sup>2</sup> T<sup>2</sup>]', '[M L<sup>3</sup> T<sup>-2</sup>]') + " = <b>[M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]</b>.<br>SI unit: <b>C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup> or Farad per meter (F m<sup>-1</sup>)</b>."
    },
    {
      q: "Write the dimensional formula and SI unit of Magnetic Permeability of Free Space (μ₀).",
      sol: "From Biot-Savart Law or force per unit length between parallel currents: " + frac('dF', 'dL') + " = " + frac('&mu;<sub>0</sub> I<sub>1</sub> I<sub>2</sub>', '2&pi; r') + " &rArr; &mu;<sub>0</sub> = " + frac('2&pi; r (dF/dL)', 'I<sup>2</sup>') + ".<br>Dimensions: [&mu;<sub>0</sub>] = " + frac('[L] [M L T<sup>-2</sup> / L]', '[A<sup>2</sup>]') + " = " + frac('[M L T<sup>-2</sup>]', '[A<sup>2</sup>]') + " = <b>[M L T<sup>-2</sup> A<sup>-2</sup>]</b>.<br>SI unit: <b>Tesla-meter per Ampere (T m A<sup>-1</sup>) or Henry per meter (H m<sup>-1</sup>)</b>."
    },
    {
      q: "Show that the product (ε₀ μ₀) has dimensions [L⁻² T²] and relates to the speed of light.",
      sol: "Multiply their dimensional formulas:<br>[&epsilon;<sub>0</sub> &mu;<sub>0</sub>] = [M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>] &times; [M L T<sup>-2</sup> A<sup>-2</sup>] = [M<sup>(-1+1)} L<sup>(-3+1)} T<sup>(4-2)} A<sup>(2-2)}] = <b>[L<sup>-2</sup> T<sup>2</sup>]</b>.<br>Since speed of light c has dimensions [L T<sup>-1</sup>], c<sup>2</sup> has dimensions [L<sup>2</sup> T<sup>-2</sup>].<br>Therefore: [" + frac('1', '&epsilon;<sub>0</sub> &mu;<sub>0</sub>') + "] = [L<sup>2</sup> T<sup>-2</sup>] = [c<sup>2</sup>] &rArr; <b>c = " + frac('1', '&radic;(&epsilon;<sub>0</sub> &mu;<sub>0</sub>)') + "</b>."
    },
    {
      q: "Find the dimensions of Resistance (R) and Capacitance (C), and show that RC has dimensions of Time.",
      sol: "1. <b>Resistance R = V / I:</b> [V] = [M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>] &rArr; [R] = <b>[M L<sup>2</sup> T<sup>-3</sup> A<sup>-2</sup>]</b>.<br>2. <b>Capacitance C = Q / V:</b> [Q] = [A T] &rArr; [C] = " + frac('[A T]', '[M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>]') + " = <b>[M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> A<sup>2</sup>]</b>.<br>3. <b>Product RC (Capacitive Time Constant):</b><br>[RC] = [M L<sup>2</sup> T<sup>-3</sup> A<sup>-2</sup>] &times; [M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> A<sup>2</sup>] = [M<sup>0</sup> L<sup>0</sup> T<sup>(-3+4)} A<sup>0</sup>] = <b>[T]</b>. Hence RC represents time."
    },
    {
      q: "Find the dimensions of Inductance (L), and show that L/R has dimensions of Time.",
      sol: "1. Self-induced EMF &epsilon; = -L " + frac('dI', 'dt') + " &rArr; [L] = " + frac('[&epsilon;][dt]', '[dI]') + " = " + frac('[M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>][T]', '[A]') + " = <b>[M L<sup>2</sup> T<sup>-2</sup> A<sup>-2</sup>]</b>.<br>2. Ratio L / R (Inductive Time Constant):<br>[" + frac('L', 'R') + "] = " + frac('[M L<sup>2</sup> T<sup>-2</sup> A<sup>-2</sup>]', '[M L<sup>2</sup> T<sup>-3</sup> A<sup>-2</sup>]') + " = [T<sup>-2 - (-3)} ] = <b>[T]</b>. Hence L/R has the dimension of time."
    },
    {
      q: "Show that √(L C) has dimensions of Time.",
      sol: "[LC] = [L][C] = [M L<sup>2</sup> T<sup>-2</sup> A<sup>-2</sup>] &times; [M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> A<sup>2</sup>] = [T<sup>2</sup>].<br>Taking the square root: [&radic;(LC)] = ([T<sup>2</sup>])<sup>1/2</sup> = <b>[T]</b>. This represents the resonant period of an LC circuit (T = 2&pi;&radic;(LC))."
    },
    {
      q: "The velocity of sound in a gas depends on its pressure (P) and density (ρ). Derive the formula for sound velocity dimensionally.",
      sol: "Assume v = k P<sup>a</sup> &rho;<sup>b</sup>.<br>[L T<sup>-1</sup>] = [M L<sup>-1</sup> T<sup>-2</sup>]<sup>a</sup> [M L<sup>-3</sup>]<sup>b</sup> = [M<sup>(a + b)</sup> L<sup>(-a - 3b)</sup> T<sup>-2a</sup>].<br>1. -2a = -1 &rArr; a = " + frac('1', '2') + ".<br>2. a + b = 0 &rArr; b = -a = -" + frac('1', '2') + ".<br>3. Check length: -a - 3b = -&frac12; - 3(-&frac12;) = -&frac12; + 1.5 = 1 (Verified).<br>Therefore: v = k P<sup>1/2</sup> &rho;<sup>-1/2</sup> = <b>k &radic;(" + frac('P', '&rho;') + ")</b> (Newton-Laplace formula: v = &radic;(&gamma;P/&rho;))."
    },
    {
      q: "A body of mass m is suspended from a spring of force constant k. Deduce its frequency of oscillation dimensionally.",
      sol: "Frequency &nu; depends on mass m and spring constant k (Force/length = [M T<sup>-2</sup>]).<br>Let &nu; = c m<sup>a</sup> k<sup>b</sup>.<br>[T<sup>-1</sup>] = [M]<sup>a</sup> [M T<sup>-2</sup>]<sup>b</sup> = [M<sup>(a + b)</sup> T<sup>-2b</sup>].<br>1. -2b = -1 &rArr; b = " + frac('1', '2') + ".<br>2. a + b = 0 &rArr; a = -b = -" + frac('1', '2') + ".<br>Thus: &nu; = c m<sup>-1/2</sup> k<sup>1/2</sup> = <b>c &radic;(" + frac('k', 'm') + ")</b>. (Exact solution: &nu; = " + frac('1', '2&pi;') + " &radic;(k/m))."
    },
    {
      q: "The critical velocity v_c of a liquid flowing through a tube depends on viscosity η, density ρ, and tube diameter D. Derive the relationship.",
      sol: "Let v<sub>c</sub> = k &eta;<sup>a</sup> &rho;<sup>b</sup> D<sup>c</sup>.<br>[L T<sup>-1</sup>] = [M L<sup>-1</sup> T<sup>-1</sup>]<sup>a</sup> [M L<sup>-3</sup>]<sup>b</sup> [L]<sup>c</sup> = [M<sup>(a + b)</sup> L<sup>(-a - 3b + c)</sup> T<sup>-a</sup>].<br>1. -a = -1 &rArr; a = 1.<br>2. a + b = 0 &rArr; b = -1.<br>3. -a - 3b + c = 1 &rArr; -1 - 3(-1) + c = 1 &rArr; -1 + 3 + c = 1 &rArr; c = -1.<br>Therefore: v<sub>c</sub> = k " + frac('&eta;', '&rho; D') + " = <b>" + frac('N<sub>R</sub> &eta;', '&rho; D') + "</b>, where N<sub>R</sub> is Reynolds' number."
    },
    {
      q: "State whether the following statement is true or false with reasoning: 'A dimensionally correct equation is always physically correct.'",
      sol: "<b>FALSE.</b> An equation may be dimensionally homogeneous but physically wrong due to missing dimensionless constants or erroneous coefficients. For instance, the equation s = 2 u t + 7 a t<sup>2</sup> is perfectly dimensionally consistent ([L] = [L] = [L]), but it is physically incorrect because the true physical coefficients are 1 and &frac12;."
    },
    {
      q: "State whether the following statement is true or false with reasoning: 'A physically correct equation is always dimensionally correct.'",
      sol: "<b>TRUE.</b> All genuine, valid physical laws describe real relations among measurable physical attributes. By the Principle of Dimensional Homogeneity, terms representing different physical dimensions cannot be added or equated. Therefore, every physically valid equation must strictly be dimensionally homogeneous."
    },
    {
      q: "If displacement of a particle is given by y = A sin(ω t - k x), find the dimensional formulas of ω and k.",
      sol: "The argument of a trigonometric function is an angle &theta;, which is strictly <b>dimensionless</b> ([M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>] = [1]).<br>1. [&omega; t] = [1] &rArr; [&omega;] = " + frac('1', '[t]') + " = <b>[T<sup>-1</sup>]</b> (SI unit: rad s<sup>-1</sup>).<br>2. [k x] = [1] &rArr; [k] = " + frac('1', '[x]') + " = <b>[L<sup>-1</sup>]</b> (Propagation constant, SI unit: rad m<sup>-1</sup>)."
    },
    {
      q: "In the equation y = A sin(ω t) + B cos(k x), state the dimensions of A and B if y is in meters.",
      sol: "Since the trigonometric terms sin(&omega;t) and cos(kx) are dimensionless pure numbers ([1]), the terms A and B must directly share the dimensions of displacement y:<br><b>[A] = [B] = [y] = [L] = [M<sup>0</sup> L<sup>1</sup> T<sup>0</sup>]</b>."
    },
    {
      q: "Find the dimensional formula of Thermal Conductivity (K).",
      sol: "Rate of heat conduction: " + frac('Q', 't') + " = " + frac('K A (T<sub>1</sub> - T<sub>2</sub>)', 'd') + " &rArr; K = " + frac('Q d', 'A (T<sub>1</sub> - T<sub>2</sub>) t') + ".<br>Dimensions: [K] = " + frac('[M L<sup>2</sup> T<sup>-2</sup>][L]', '[L<sup>2</sup>][&Theta;][T]') + " = " + frac('[M L<sup>3</sup> T<sup>-2</sup>]', '[L<sup>2</sup> T &Theta;]') + " = <b>[M L T<sup>-3</sup> &Theta;<sup>-1</sup>]</b>.<br>SI unit: <b>W m<sup>-1</sup> K<sup>-1</sup></b>."
    },
    {
      q: "Find the dimensional formula of Stefan's Constant (σ).",
      sol: "From Stefan-Boltzmann Law: E = &sigma; T<sup>4</sup>, where E is radiant energy emitted per unit area per unit second: [E] = " + frac('[Energy]', '[Area][Time]') + " = " + frac('[M L<sup>2</sup> T<sup>-2</sup>]', '[L<sup>2</sup>][T]') + " = [M T<sup>-3</sup>].<br>&sigma; = " + frac('E', 'T<sup>4</sup>') + " &rArr; [&sigma;] = " + frac('[M T<sup>-3</sup>]', '[&Theta;<sup>4</sup>]') + " = <b>[M L<sup>0</sup> T<sup>-3</sup> &Theta;<sup>-4</sup>]</b>.<br>SI unit: <b>W m<sup>-2</sup> K<sup>-4</sup></b>."
    },
    {
      q: "Find the dimensional formula of Wien's Displacement Constant (b).",
      sol: "From Wien's Displacement Law: &lambda;<sub>max</sub> &times; T = b.<br>Dimensions: [b] = [&lambda;<sub>max</sub>][T] = <b>[M<sup>0</sup> L<sup>1</sup> T<sup>0</sup> &Theta;<sup>1</sup>] = [L &Theta;]</b>.<br>SI unit: <b>meter-Kelvin (m K)</b>. Value &approx; 2.898 &times; 10<sup>-3</sup> m K."
    },
    {
      q: "Find the dimensional formula of Solar Constant (S).",
      sol: "Solar constant S is the solar radiant energy received normally per unit area per second at the outer boundary of Earth's atmosphere:<br>[S] = " + frac('[Energy]', '[Area][Time]') + " = " + frac('[M L<sup>2</sup> T<sup>-2</sup>]', '[L<sup>2</sup>][T]') + " = <b>[M L<sup>0</sup> T<sup>-3</sup>]</b>.<br>SI unit: <b>W m<sup>-2</sup> or J s<sup>-1</sup> m<sup>-2</sup></b>."
    }
  ];

  return qList.map((item, idx) => `
  <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${idx + 41}: ${item.q}</h3>
    <div style="background: rgba(255, 81, 47, 0.05); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; line-height: 1.6; font-size: 15px;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 Solution & Step-by-Step Mathematical Proof:</b>
      ${item.sol}
    </div>
  </div>`).join('\n');
}

module.exports = { getSaQuestions };
