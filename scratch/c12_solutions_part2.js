const themeColor = "#FF512F";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function qBox(qNum, qTitle, solLabel, solHtml) {
  return `
  <div style="background: rgba(0,0,0,0.25); border: 1.2px solid rgba(255, 81, 47, 0.25); border-radius: 10px; padding: 16px; margin: 18px 0;">
    <h3 style="color: ${themeColor}; margin: 0 0 10px 0; font-size: 17px; font-weight: bold; line-height: 1.5;">Q${qNum}: ${qTitle}</h3>
    <div style="background: rgba(0,0,0,0.3); border-left: 3.5px solid ${themeColor}; padding: 12px 14px; border-radius: 4px; color: #E0E0E0; font-size: 15.5px; line-height: 1.7;">
      <b style="color: ${themeColor}; display: block; margin-bottom: 6px;">💡 ${solLabel}:</b>
      ${solHtml}
    </div>
  </div>`;
}

// 40 SAs (Q41 to Q80)
function getSectionBSAs() {
  const sas = [
    {
      q: "Calculate the total number of electrons constituting 1 Coulomb of negative charge.",
      a: "Given charge q = 1.0 C and elementary charge e = 1.602 &times; 10<sup>-19</sup> C.<br>By quantization of charge q = n e &rArr; n = q / e = 1.0 / (1.602 &times; 10<sup>-19</sup>) = <b>6.242 &times; 10<sup>18</sup> electrons</b>."
    },
    {
      q: "Two point charges +2 &mu;C and +6 &mu;C repel each other with force 12 N. If a charge of -4 &mu;C is added to each, what will be the new force between them at the same distance?",
      a: "Initial charges: q<sub>1</sub> = +2 &mu;C, q<sub>2</sub> = +6 &mu;C &rArr; F<sub>1</sub> = k (2)(6)/r<sup>2</sup> = 12 k/r<sup>2</sup> = 12 N &rArr; k/r<sup>2</sup> = 1.<br>After adding -4 &mu;C to each: q<sub>1</sub>' = 2 - 4 = -2 &mu;C, q<sub>2</sub>' = 6 - 4 = +2 &mu;C.<br>New force F<sub>2</sub> = k |(-2)(+2)|/r<sup>2</sup> = 4 (k/r<sup>2</sup>) = 4 &times; 1 = <b>4.0 N (Attractive)</b>."
    },
    {
      q: "Derive the vector form of Coulomb's Law and show that it obeys Newton's Third Law of Motion.",
      a: "Let charges q<sub>1</sub> and q<sub>2</sub> be at positions <b>r</b><sub>1</sub> and <b>r</b><sub>2</sub>.<br>Displacement vector from 1 to 2: <b>r</b><sub>21</sub> = <b>r</b><sub>2</sub> - <b>r</b><sub>1</sub> with unit vector <b>r&#770;</b><sub>21</sub>.<br>Force on q<sub>2</sub> due to q<sub>1</sub> is: <b>F</b><sub>21</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>2</sub>) / r<sub>21</sub><sup>2</sup> ] <b>r&#770;</b><sub>21</sub>.<br>Similarly, force on q<sub>1</sub> due to q<sub>2</sub> is: <b>F</b><sub>12</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>2</sub>) / r<sub>12</sub><sup>2</sup> ] <b>r&#770;</b><sub>12</sub>.<br>Since <b>r&#770;</b><sub>12</sub> = -<b>r&#770;</b><sub>21</sub>, we get: <b><b>F</b><sub>12</sub> = - <b>F</b><sub>21</sub></b> (equal in magnitude and opposite in direction)."
    },
    {
      q: "Three point charges +q, +2q, and -3q are placed at the vertices of an equilateral triangle of side l. Calculate the net electrostatic potential energy of the system.",
      a: "Total potential energy is the sum of pairwise interaction energies:<br>U = U<sub>12</sub> + U<sub>23</sub> + U<sub>31</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub> l) ] [ (q)(2q) + (2q)(-3q) + (-3q)(q) ]<br>U = [ 1 / (4&pi;&epsilon;<sub>0</sub> l) ] [ 2q<sup>2</sup> - 6q<sup>2</sup> - 3q<sup>2</sup> ] = <b>- " + frac("7 q<sup>2</sup>", "4&pi;&epsilon;<sub>0</sub> l") + "</b>."
    },
    {
      q: "Derive the relation E = - dV/dr between electric field intensity and electric potential gradient.",
      a: "1. Let two equipotential surfaces A and B be separated by small distance dr with potentials V and (V - dV).<br>2. Work done in moving unit test charge (+1 C) from B to A against electric field <b>E</b> is: dW = <b>F</b> &sdot; d<b>r</b> = E dr cos 180&deg; = -E dr.<br>3. By definition of potential difference: dW = V<sub>A</sub> - V<sub>B</sub> = V - (V - dV) = dV.<br>4. Therefore: -E dr = dV &rArr; <b>E = - (dV / dr)</b>."
    },
    {
      q: "Calculate the electric potential at a point P located 9.0 cm away from an isolated point charge of +4.0 &mu;C in vacuum. Hence, find the work done in bringing a test charge of 2.0 &times; 10<sup>-9</sup> C from infinity to point P.",
      a: "1. Potential V<sub>P</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ Q / r ] = (9.0 &times; 10<sup>9</sup>) &times; [ (4.0 &times; 10<sup>-6</sup>) / (0.09) ] = <b>4.0 &times; 10<sup>5</sup> V</b>.<br>2. Work Done W = q<sub>0</sub> V<sub>P</sub> = (2.0 &times; 10<sup>-9</sup> C) &times; (4.0 &times; 10<sup>5</sup> V) = <b>8.0 &times; 10<sup>-4</sup> J</b>."
    },
    {
      q: "An electric dipole consists of charges &plusmn; 2.0 &mu;C separated by 2.0 cm. Calculate its dipole moment and the torque experienced when placed at 30&deg; in a uniform electric field of 10<sup>5</sup> N C<sup>-1</sup>.",
      a: "1. Dipole Moment p = q &times; (2a) = (2.0 &times; 10<sup>-6</sup> C) &times; (0.02 m) = <b>4.0 &times; 10<sup>-8</sup> C m</b>.<br>2. Torque &tau; = p E sin 30&deg; = (4.0 &times; 10<sup>-8</sup>) &times; (10<sup>5</sup>) &times; (0.5) = <b>2.0 &times; 10<sup>-3</sup> N m</b>."
    },
    {
      q: "State four essential properties of equipotential surfaces.",
      a: "1. <b>Zero Work Done:</b> Work in moving any test charge on an equipotential surface is strictly zero.<br>2. <b>Normal Field Lines:</b> Electric field lines are always perpendicular to equipotential surfaces at all points.<br>3. <b>Non-Intersection:</b> No two equipotential surfaces can ever intersect.<br>4. <b>Field Strength Indicator:</b> Equipotential surfaces are closely spaced in strong field regions and widely separated in weak field regions (dr = -dV/E)."
    },
    {
      q: "A cube of side L has a charge q placed at its geometric center. What is the electric flux through each face of the cube?",
      a: "By Gauss's Law, total outward flux through the entire closed cube of 6 identical faces is &Phi;<sub>total</sub> = q / &epsilon;<sub>0</sub>.<br>By cubic symmetry, flux is equally distributed through all 6 faces: <b>&Phi;<sub>face</sub> = " + frac("q", "6 &epsilon;<sub>0</sub>") + "</b>."
    },
    {
      q: "A point charge q is placed at one corner of a cube of edge a. Calculate the electric flux passing through the entire cube.",
      a: "By symmetry, placing 8 identical cubes around the corner encloses the charge q completely at the center of a larger cube of edge 2a.<br>Total flux through the 8-cube system is q/&epsilon;<sub>0</sub>.<br>Therefore, the flux passing through one cube is: <b>&Phi; = " + frac("q", "8 &epsilon;<sub>0</sub>") + "</b>."
    },
    {
      q: "An infinite line charge produces an electric field of magnitude 9.0 &times; 10<sup>4</sup> N C<sup>-1</sup> at a distance of 2.0 cm. Calculate the linear charge density &lambda;.",
      a: "Formula: E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r) = [ 2 / (4&pi;&epsilon;<sub>0</sub>) ] [ &lambda; / r ].<br>9.0 &times; 10<sup>4</sup> = (2 &times; 9.0 &times; 10<sup>9</sup> &times; &lambda;) / (0.02) = 9.0 &times; 10<sup>11</sup> &times; &lambda;.<br>&lambda; = (9.0 &times; 10<sup>4</sup>) / (9.0 &times; 10<sup>11</sup>) = <b>1.0 &times; 10<sup>-7</sup> C m<sup>-1</sup> (0.1 &mu;C m<sup>-1</sup>)</b>."
    },
    {
      q: "Show that the electric field between two oppositely charged infinite parallel plane sheets is &sigma;/&epsilon;<sub>0</sub> and outside is zero.",
      a: "Let sheet 1 have +&sigma; and sheet 2 have -&sigma;.<br>- <b>Region Between Sheets:</b> E<sub>1</sub> = &sigma;/(2&epsilon;<sub>0</sub>) (away from sheet 1) and E<sub>2</sub> = &sigma;/(2&epsilon;<sub>0</sub>) (towards sheet 2). Both point in the same direction: <b>E<sub>net</sub> = &sigma;/(2&epsilon;<sub>0</sub>) + &sigma;/(2&epsilon;<sub>0</sub>) = &sigma; / &epsilon;<sub>0</sub></b>.<br>- <b>Outer Regions:</b> E<sub>1</sub> and E<sub>2</sub> point in opposite directions with equal magnitude: <b>E<sub>net</sub> = &sigma;/(2&epsilon;<sub>0</sub>) - &sigma;/(2&epsilon;<sub>0</sub>) = 0</b>."
    },
    {
      q: "Explain the 3-step working principle of a capacitor and how earthing plate B multiplies capacitance.",
      a: "1. <b>Step 1 (Isolated Plate A):</b> Charge +Q raises potential of A to maximum V<sub>1</sub>.<br>2. <b>Step 2 (Plate B Added):</b> Induction creates -Q on inner face and +Q on outer face of B. Closer negative charge lowers A's potential slightly.<br>3. <b>Step 3 (Earthing Plate B):</b> Outer +Q flows to Earth, while bound -Q drastically lowers A's potential to V' &lt;&lt; V<sub>1</sub>.<br>Since C = Q / V', a huge potential drop multiplies capacitance C enormously."
    },
    {
      q: "A 900 pF capacitor is charged by a 100 V battery. How much electrostatic energy is stored by the capacitor?",
      a: "Given C = 900 &times; 10<sup>-12</sup> F and V = 100 V.<br>Stored Energy U = 1/2 C V<sup>2</sup> = 0.5 &times; (900 &times; 10<sup>-12</sup>) &times; (100)<sup>2</sup> = 0.5 &times; (900 &times; 10<sup>-12</sup>) &times; 10<sup>4</sup> = <b>4.5 &times; 10<sup>-6</sup> J (4.5 &mu;J)</b>."
    },
    {
      q: "Two capacitors of capacitances 6 &mu;F and 12 &mu;F are connected in series across a 120 V battery. Find equivalent capacitance and voltage across each.",
      a: "1. 1/C<sub>s</sub> = 1/6 + 1/12 = 3/12 = 1/4 &rArr; <b>C<sub>s</sub> = 4 &mu;F</b>.<br>2. Total Charge Q = C<sub>s</sub> V = (4 &mu;F) &times; 120 V = 480 &mu;C.<br>3. Voltage across 6 &mu;F: V<sub>1</sub> = Q / C<sub>1</sub> = 480 / 6 = <b>80 V</b>.<br>4. Voltage across 12 &mu;F: V<sub>2</sub> = Q / C<sub>2</sub> = 480 / 12 = <b>40 V</b> (Note: 80 + 40 = 120 V)."
    },
    {
      q: "Derive an expression for the equivalent capacitance of three capacitors C<sub>1</sub>, C<sub>2</sub>, and C<sub>3</sub> connected in series.",
      a: "In series, the same charge Q flows through each capacitor, while applied voltage divides: V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub>.<br>Using V<sub>i</sub> = Q / C<sub>i</sub> and V = Q / C<sub>s</sub>:<br>Q / C<sub>s</sub> = Q / C<sub>1</sub> + Q / C<sub>2</sub> + Q / C<sub>3</sub> &rArr; <b>1 / C<sub>s</sub> = 1 / C<sub>1</sub> + 1 / C<sub>2</sub> + 1 / C<sub>3</sub></b>."
    },
    {
      q: "Derive an expression for the equivalent capacitance of three capacitors C<sub>1</sub>, C<sub>2</sub>, and C<sub>3</sub> connected in parallel.",
      a: "In parallel, potential difference V across each capacitor is identical, while total charge divides: Q = Q<sub>1</sub> + Q<sub>2</sub> + Q<sub>3</sub>.<br>Using Q<sub>i</sub> = C<sub>i</sub> V and Q = C<sub>p</sub> V:<br>C<sub>p</sub> V = C<sub>1</sub> V + C<sub>2</sub> V + C<sub>3</sub> V &rArr; <b>C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub></b>."
    },
    {
      q: "Explain why the electric field inside a dielectric slab decreases when placed in an external uniform field.",
      a: "When a dielectric is placed in external field <b>E</b><sub>0</sub>, molecular dipoles align along the field, creating bound surface charges (+&sigma;<sub>p</sub> on one face and -&sigma;<sub>p</sub> on opposite face). These bound charges set up an internal opposing polarization field <b>E</b><sub>p</sub>. The net field becomes: <b>E<sub>net</sub> = E<sub>0</sub> - E<sub>p</sub> = E<sub>0</sub> / K &lt; E<sub>0</sub></b>."
    },
    {
      q: "Distinguish between Polar and Non-Polar Dielectrics with two examples each.",
      a: "1. <b>Polar Dielectrics:</b> Centers of positive and negative charges do not coincide in the absence of an external field; possess permanent intrinsic dipole moments (e.g. H<sub>2</sub>O, HCl, NH<sub>3</sub>).<br>2. <b>Non-Polar Dielectrics:</b> Centers of positive and negative charges coincide in the ground state; have zero intrinsic dipole moment and acquire induced dipoles only in an applied external field (e.g. O<sub>2</sub>, N<sub>2</sub>, CO<sub>2</sub>, H<sub>2</sub>)."
    },
    {
      q: "A parallel plate capacitor with air has capacitance 8 pF. What is the new capacitance if plate separation is halved and space filled with dielectric of K = 6?",
      a: "Initial C<sub>0</sub> = &epsilon;<sub>0</sub> A / d = 8 pF.<br>New separation d' = d / 2 and dielectric constant K = 6.<br>New capacitance C' = K &epsilon;<sub>0</sub> A / d' = K &epsilon;<sub>0</sub> A / (d/2) = 2 K (&epsilon;<sub>0</sub> A / d) = 2 K C<sub>0</sub>.<br>C' = 2 &times; 6 &times; 8 pF = <b>96 pF</b>."
    },
    {
      q: "Derive an expression for the torque acting on an electric dipole placed in a uniform electric field.",
      a: "Consider dipole of charges &plusmn;q separated by 2a in uniform field <b>E</b> at angle &theta;.<br>Forces on charges: <b>F</b><sub>+</sub> = +q<b>E</b> and <b>F</b><sub>-</sub> = -q<b>E</b> (net translational force = 0).<br>These equal and opposite parallel forces form a couple with perpendicular lever arm = 2a sin &theta;.<br>Torque &tau; = Force &times; Lever arm = (q E) &times; (2a sin &theta;) = (q 2a) E sin &theta; = <b>p E sin &theta;</b>.<br>In vector form: <b><b>&tau;</b> = <b>p</b> &times; <b>E</b></b>."
    },
    {
      q: "Derive an expression for the work done in rotating an electric dipole from &theta;<sub>1</sub> to &theta;<sub>2</sub> in a uniform electric field.",
      a: "Work done dW in small angular rotation d&theta; against restoring torque is: dW = &tau; d&theta; = p E sin &theta; d&theta;.<br>Total work in rotating from &theta;<sub>1</sub> to &theta;<sub>2</sub>:<br>W = &int;<sub>&theta;1</sub><sup>&theta;2</sup> p E sin &theta; d&theta; = p E [ -cos &theta; ]<sub>&theta;1</sub><sup>&theta;2</sup> = <b>p E (cos &theta;<sub>1</sub> - cos &theta;<sub>2</sub>)</b>."
    },
    {
      q: "Calculate the electrostatic energy density in a region of space where a uniform electric field of magnitude 10<sup>5</sup> V m<sup>-1</sup> exists in vacuum.",
      a: "Energy density u = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> = 0.5 &times; (8.854 &times; 10<sup>-12</sup> F m<sup>-1</sup>) &times; (10<sup>5</sup> V m<sup>-1</sup>)<sup>2</sup><br>u = 0.5 &times; (8.854 &times; 10<sup>-12</sup>) &times; 10<sup>10</sup> = 4.427 &times; 10<sup>-2</sup> J m<sup>-3</sup> = <b>0.0443 J m<sup>-3</sup></b>."
    },
    {
      q: "Two metallic spheres of radii r<sub>1</sub> and r<sub>2</sub> are charged to the same potential V. Find the ratio of their surface charge densities.",
      a: "Potential of sphere: V = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / r ] = constant.<br>Charge q = 4&pi;&epsilon;<sub>0</sub> r V.<br>Surface charge density &sigma; = q / (4&pi; r<sup>2</sup>) = (4&pi;&epsilon;<sub>0</sub> r V) / (4&pi; r<sup>2</sup>) = (&epsilon;<sub>0</sub> V) / r &rArr; &sigma; &prop; 1 / r.<br>Therefore: <b>&sigma;<sub>1</sub> / &sigma;<sub>2</sub> = r<sub>2</sub> / r<sub>1</sub></b>."
    },
    {
      q: "What is the Fringing Effect (Edge Effect) in a parallel plate capacitor, and when can it be neglected?",
      a: "Near plate edges, electrostatic repulsion between like boundary charges causes field lines to bow outward in curved trajectories; this non-uniformity is called the Fringing Effect. When plate dimensions are much larger than plate separation (d &lt;&lt; &radic;A), the edge region is negligible compared to the uniform central area, and standard formula C = &epsilon;<sub>0</sub>A/d is accurate."
    },
    {
      q: "Explain why the capacitance of a capacitor increases when a conducting (metallic) slab of thickness t (t < d) is inserted.",
      a: "Inside a conductor, electrostatic field is zero (E<sub>in</sub> = 0). Thus, the effective electric field exists only over the air thickness (d - t).<br>Potential difference drops to: V = E<sub>0</sub> (d - t) = [ Q / (&epsilon;<sub>0</sub> A) ] (d - t).<br>Capacitance becomes: <b>C = " + frac("&epsilon;<sub>0</sub> A", "d - t") + " = C<sub>0</sub> " + frac("d", "d - t") + " &gt; C<sub>0</sub></b>."
    },
    {
      q: "A dielectric slab is inserted into a capacitor while the charging battery remains CONNECTED. How do C, V, Q, E, and U change?",
      a: "1. <b>Potential (V):</b> Remains constant (V = V<sub>0</sub>) because battery maintains voltage.<br>2. <b>Capacitance (C):</b> Increases K times (C' = K C<sub>0</sub>).<br>3. <b>Stored Charge (Q):</b> Increases K times (Q' = K Q<sub>0</sub>).<br>4. <b>Electric Field (E):</b> Remains constant (E = V/d = E<sub>0</sub>).<br>5. <b>Stored Energy (U):</b> Increases K times (U' = 1/2 C' V<sup>2</sup> = K U<sub>0</sub>)."
    },
    {
      q: "A dielectric slab is inserted into a capacitor after the charging battery is DISCONNECTED. How do C, V, Q, E, and U change?",
      a: "1. <b>Stored Charge (Q):</b> Remains strictly constant (Q = Q<sub>0</sub>) as charge cannot escape.<br>2. <b>Capacitance (C):</b> Increases K times (C' = K C<sub>0</sub>).<br>3. <b>Potential (V):</b> Decreases K times (V' = V<sub>0</sub> / K).<br>4. <b>Electric Field (E):</b> Decreases K times (E' = E<sub>0</sub> / K).<br>5. <b>Stored Energy (U):</b> Decreases K times (U' = Q<sup>2</sup> / (2C') = U<sub>0</sub> / K)."
    },
    {
      q: "Derive the formula for electric field at an axial point of a short electric dipole.",
      a: "Let P be at distance r on axis: E<sub>+</sub> = [1/(4&pi;&epsilon;<sub>0</sub>)] [q / (r - a)<sup>2</sup>], E<sub>-</sub> = [1/(4&pi;&epsilon;<sub>0</sub>)] [q / (r + a)<sup>2</sup>].<br>E<sub>axial</sub> = E<sub>+</sub> - E<sub>-</sub> = [q / (4&pi;&epsilon;<sub>0</sub>)] [ (4 a r) / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ] = [1 / (4&pi;&epsilon;<sub>0</sub>)] [ (2 p r) / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ].<br>For short dipole (r &gt;&gt; a): <b>E<sub>axial</sub> = " + frac("2 p", "4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>") + "</b> (directed parallel to <b>p</b>)."
    },
    {
      q: "Derive the formula for electric field at an equatorial point of a short electric dipole.",
      a: "Let Q be at distance r on perpendicular bisector: Distance from each charge is &radic;(r<sup>2</sup> + a<sup>2</sup>).<br>Magnitudes E<sub>+</sub> = E<sub>-</sub> = [1/(4&pi;&epsilon;<sub>0</sub>)] [q / (r<sup>2</sup> + a<sup>2</sup>)].<br>Vertical components E sin &theta; cancel out, while horizontal components add:<br>E<sub>eq</sub> = 2 E cos &theta; = 2 [q / (4&pi;&epsilon;<sub>0</sub> (r<sup>2</sup> + a<sup>2</sup>))] [a / &radic;(r<sup>2</sup> + a<sup>2</sup>)] = [p / (4&pi;&epsilon;<sub>0</sub> (r<sup>2</sup> + a<sup>2</sup>)<sup>3/2</sup>)].<br>For short dipole (r &gt;&gt; a): <b>E<sub>eq</sub> = " + frac("p", "4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>") + "</b> (directed antiparallel to <b>p</b>)."
    },
    {
      q: "Prove that the electric field at an axial point is twice the electric field at an equatorial point for a short dipole at the same distance.",
      a: "From axial derivation: E<sub>axial</sub> = 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>).<br>From equatorial derivation: E<sub>eq</sub> = p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>).<br>Taking ratio: <b>E<sub>axial</sub> / E<sub>eq</sub> = [ 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>) ] / [ p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>) ] = 2 : 1</b>."
    },
    {
      q: "A spherical conductor of radius 12 cm has a charge of 1.6 &times; 10<sup>-7</sup> C distributed uniformly on its surface. Calculate the electric field at: (a) r = 6 cm, (b) r = 12 cm, (c) r = 18 cm.",
      a: "(a) <b>Inside (r = 6 cm &lt; R):</b> E = 0 (charge inside is zero).<br>(b) <b>At Surface (r = 12 cm = 0.12 m):</b> E = [1/(4&pi;&epsilon;<sub>0</sub>)] [q / R<sup>2</sup>] = (9 &times; 10<sup>9</sup> &times; 1.6 &times; 10<sup>-7</sup>) / (0.12)<sup>2</sup> = <b>1.0 &times; 10<sup>5</sup> N C<sup>-1</sup></b>.<br>(c) <b>Outside (r = 18 cm = 0.18 m):</b> E = (9 &times; 10<sup>9</sup> &times; 1.6 &times; 10<sup>-7</sup>) / (0.18)<sup>2</sup> = <b>4.44 &times; 10<sup>4</sup> N C<sup>-1</sup></b>."
    },
    {
      q: "Explain the phenomenon of Corona Discharge (Action of Points) and give one practical application.",
      a: "At sharp, pointed edges of a charged conductor, radius of curvature r is extremely small, resulting in huge surface charge density (&sigma; &prop; 1/r). The resulting intense electric field ionizes surrounding air particles, causing charges to spray outward into air; this is Corona Discharge. Application: Used in Lightning Arresters (conductors) to safely discharge clouds to Ground."
    },
    {
      q: "Calculate the equivalent capacitance of a bridge network containing five capacitors each of 10 &mu;F arranged in a Wheatstone bridge configuration.",
      a: "In a bridge with capacitors C<sub>1</sub>, C<sub>2</sub> in top branches and C<sub>3</sub>, C<sub>4</sub> in bottom branches with central capacitor C<sub>5</sub>:<br>Bridge balance condition: C<sub>1</sub>/C<sub>2</sub> = C<sub>3</sub>/C<sub>4</sub> (10/10 = 10/10 = 1).<br>Because potential at central nodes is equal, no charge flows through central C<sub>5</sub> (it can be removed).<br>Top series branch: C<sub>top</sub> = (10 &times; 10)/(10 + 10) = 5 &mu;F.<br>Bottom series branch: C<sub>bot</sub> = (10 &times; 10)/(10 + 10) = 5 &mu;F.<br>Equivalent parallel combination: C<sub>eq</sub> = C<sub>top</sub> + C<sub>bot</sub> = 5 + 5 = <b>10 &mu;F</b>."
    },
    {
      q: "Derive the formula for common potential V and loss of electrostatic energy when two charged capacitors share charge in parallel.",
      a: "Let capacitors C<sub>1</sub>, C<sub>2</sub> be charged to potentials V<sub>1</sub>, V<sub>2</sub>.<br>1. <b>Common Potential:</b> Total Charge / Total Capacitance &rArr; <b>V = (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>)</b>.<br>2. <b>Energy Loss:</b> &Delta;U = U<sub>initial</sub> - U<sub>final</sub> = <b>" + frac("C<sub>1</sub> C<sub>2</sub> (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup>", "2 (C<sub>1</sub> + C<sub>2</sub>)") + " &ge; 0</b>.<br>This energy is dissipated as thermal heat in connecting wires and spark radiation."
    },
    {
      q: "Can electric potential be zero at a point where the electric field is non-zero? Explain with an example.",
      a: "<b>Yes.</b> At any point on the equatorial plane of an electric dipole, the electric potential is strictly zero (V = V<sub>+</sub> + V<sub>-</sub> = 0), while the electric field is non-zero (E<sub>eq</sub> = p / [4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>] &ne; 0)."
    },
    {
      q: "Can electric field be zero at a point where the electric potential is non-zero? Explain with an example.",
      a: "<b>Yes.</b> At any point inside a uniformly charged conducting spherical shell, the electric field is strictly zero (E = 0), while the electric potential is constant and non-zero (V = Q / [4&pi;&epsilon;<sub>0</sub> R] &ne; 0)."
    },
    {
      q: "Explain why a bird sitting on a bare high-voltage power line does not receive an electric shock.",
      a: "A bird's two feet rest on the exact same high-voltage conductor wire, meaning both feet are at the same electrical potential. Because the potential difference (&Delta;V = V<sub>1</sub> - V<sub>2</sub> = 0) across its body is zero, no electric current flows through the bird, and it experiences no shock."
    },
    {
      q: "Explain why it is safer to remain inside a closed metal car during a thunderstorm with lightning.",
      a: "The metal body of a car acts as a closed conducting enclosure (Faraday Cage). When lightning strikes the vehicle, electrostatic charges remain exclusively on the exterior metal surface and flow safely to the ground, while the interior electric field remains strictly zero (E = 0), shielding occupants from harm."
    },
    {
      q: "How does the presence of a dielectric medium affect the capacitance, electric field, and stored energy of an isolated charged capacitor?",
      a: "For an isolated capacitor (constant charge Q):<br>1. Capacitance multiplies: C = K C<sub>0</sub> (increases K times).<br>2. Electric field reduces: E = E<sub>0</sub> / K (decreases K times).<br>3. Stored energy reduces: U = Q<sup>2</sup> / (2 K C<sub>0</sub>) = U<sub>0</sub> / K (decreases K times)."
    }
  ];

  let html = `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">Section B: Short Answer (SA) Questions (2 &amp; 3 Marks each)</h2>`;
  sas.forEach((item, idx) => {
    html += qBox(idx + 41, item.q, "Solution & Step-by-Step Derivation", item.a);
  });
  return html;
}

// 20 LAs (Q81 to Q100)
function getSectionCLAs() {
  const las = [
    {
      q: "Derive an expression for the electric field intensity on the axial line of an electric dipole. Hence, deduce the formula for a short dipole.",
      a: `
      <b>1. Theoretical Setup:</b> Consider an electric dipole with charges -q at A and +q at B separated by 2a. Let P be a point on the axial line at distance r from the dipole center O.<br>
      Distance of P from +q is (r - a), and from -q is (r + a).<br><br>
      <b>2. Individual Electric Fields:</b><br>
      - Due to +q: E<sub>+</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / (r - a)<sup>2</sup> ] (directed away from +q, along OP).<br>
      - Due to -q: E<sub>-</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / (r + a)<sup>2</sup> ] (directed towards -q, along PO).<br><br>
      <b>3. Net Resultant Field:</b><br>
      E<sub>axial</sub> = E<sub>+</sub> - E<sub>-</sub> = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ 1 / (r - a)<sup>2</sup> - 1 / (r + a)<sup>2</sup> ]<br>
      E<sub>axial</sub> = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ ( (r+a)<sup>2</sup> - (r-a)<sup>2</sup> ) / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ] = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ (4 a r) / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ]<br><br>
      Substitute dipole moment p = q (2a):<br>
      <b>E<sub>axial</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (2 p r) / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ]</b><br><br>
      <b>4. Short Dipole Approximation (r &gt;&gt; a):</b> Neglecting a<sup>2</sup> in comparison to r<sup>2</sup>:<br>
      <b>E<sub>axial</sub> = " + frac("2 p", "4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>") + " &nbsp; (Directed parallel to <b>p</b>)</b>
      `
    },
    {
      q: "Derive an expression for the electric field intensity on the equatorial line of an electric dipole. Hence, deduce the formula for a short dipole.",
      a: `
      <b>1. Setup:</b> Consider dipole charges -q at A and +q at B separated by 2a with center O. Let Q be a point on the perpendicular bisector (equatorial line) at distance r from O.<br>
      Distance of Q from each charge is d = &radic;(r<sup>2</sup> + a<sup>2</sup>).<br><br>
      <b>2. Field Magnitudes:</b><br>
      E<sub>+</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / (r<sup>2</sup> + a<sup>2</sup>) ] (along BQ away).<br>
      E<sub>-</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / (r<sup>2</sup> + a<sup>2</sup>) ] (along QA towards).<br><br>
      <b>3. Component Resolution:</b><br>
      - Vertical components E<sub>+</sub> sin &theta; and E<sub>-</sub> sin &theta; are equal and opposite, cancelling out completely.<br>
      - Horizontal components E<sub>+</sub> cos &theta; and E<sub>-</sub> cos &theta; act in the same direction (parallel to dipole axis, opposite to <b>p</b>) and add together:<br>
      E<sub>eq</sub> = 2 E<sub>+</sub> cos &theta; = 2 [ q / (4&pi;&epsilon;<sub>0</sub> (r<sup>2</sup> + a<sup>2</sup>)) ] [ a / &radic;(r<sup>2</sup> + a<sup>2</sup>) ]<br>
      <b>E<sub>eq</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ p / (r<sup>2</sup> + a<sup>2</sup>)<sup>3/2</sup> ]</b><br><br>
      <b>4. Short Dipole Approximation (r &gt;&gt; a):</b><br>
      <b>E<sub>eq</sub> = " + frac("p", "4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>") + " &nbsp; (Directed antiparallel to <b>p</b>)</b>
      `
    },
    {
      q: "State Gauss's Theorem in electrostatics. Prove Gauss's Theorem for a spherical surface enclosing a point charge in vacuum.",
      a: `
      <b>1. Statement:</b> Gauss's Theorem states that the total outward electric flux through any closed Gaussian surface enclosing net charge q is: &oint; <b>E</b> &sdot; d<b>A</b> = q / &epsilon;<sub>0</sub>.<br><br>
      <b>2. Proof:</b> Consider a point charge +q at the center O of a spherical Gaussian surface of radius r in vacuum.<br>
      - Electric field at every point on the sphere is radial and normal: E = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / r<sup>2</sup> ].<br>
      - Angle between <b>E</b> and area vector d<b>A</b> is &theta; = 0&deg; everywhere.<br>
      - Flux d&Phi; = <b>E</b> &sdot; d<b>A</b> = E dA cos 0&deg; = E dA.<br>
      - Total flux &Phi; = &oint; E dA = E &oint; dA = [ q / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>) ] &times; (4&pi; r<sup>2</sup>) = <b>q / &epsilon;<sub>0</sub></b>.<br>
      Hence, Gauss's Theorem is proved.
      `
    },
    {
      q: "Using Gauss's Law, derive an expression for the electric field intensity due to an infinitely long straight uniformly charged wire of linear charge density &lambda;.",
      a: `
      <b>1. Gaussian Surface:</b> Construct a coaxial cylindrical Gaussian surface of radius r and length l around the wire carrying linear charge density &lambda;.<br>
      Enclosed charge: q<sub>enclosed</sub> = &lambda; l.<br><br>
      <b>2. Flux Calculation:</b><br>
      - Top and bottom circular end caps: <b>E</b> is parallel to surface &rArr; <b>E</b> &perp; d<b>A</b> &rArr; &Phi;<sub>ends</sub> = 0.<br>
      - Curved cylindrical surface: <b>E</b> is radial and normal to d<b>A</b> &rArr; &Phi;<sub>curved</sub> = &int; E dA = E (2&pi; r l).<br>
      - Total Flux: &Phi; = E (2&pi; r l).<br><br>
      <b>3. Applying Gauss's Law:</b><br>
      E (2&pi; r l) = (&lambda; l) / &epsilon;<sub>0</sub> &rArr; <b>E = " + frac("&lambda;", "2&pi;&epsilon;<sub>0</sub> r") + "</b> (E &prop; 1/r).
      `
    },
    {
      q: "Using Gauss's Law, derive an expression for the electric field intensity due to a uniformly charged infinite plane sheet of surface charge density &sigma;.",
      a: `
      <b>1. Gaussian Surface:</b> Construct a closed cylindrical pillbox of cross-sectional area A extending perpendicular to the sheet, with end faces at equal distance r on both sides.<br>
      Enclosed charge: q<sub>enclosed</sub> = &sigma; A.<br><br>
      <b>2. Flux Calculation:</b><br>
      - Curved cylindrical surface: <b>E</b> is parallel to curved wall &rArr; &Phi;<sub>curved</sub> = 0.<br>
      - Two flat circular end faces: <b>E</b> is parallel to normal vector d<b>A</b> &rArr; &Phi;<sub>ends</sub> = E A + E A = 2 E A.<br><br>
      <b>3. Applying Gauss's Law:</b><br>
      2 E A = (&sigma; A) / &epsilon;<sub>0</sub> &rArr; <b>E = " + frac("&sigma;", "2 &epsilon;<sub>0</sub>") + "</b>.<br>
      (The field is uniform and independent of distance r from the sheet).
      `
    },
    {
      q: "Using Gauss's Law, derive expressions for the electric field intensity due to a uniformly charged thin spherical shell of radius R at points outside, at surface, and inside.",
      a: `
      Let total charge on shell of radius R be Q, with surface charge density &sigma; = Q / (4&pi; R<sup>2</sup>).<br><br>
      <b>1. Outside the Shell (r &ge; R):</b><br>
      Spherical Gaussian surface of radius r encloses total charge Q.<br>
      &oint; <b>E</b> &sdot; d<b>A</b> = E (4&pi; r<sup>2</sup>) = Q / &epsilon;<sub>0</sub> &rArr; <b>E<sub>out</sub> = " + frac("1", "4&pi;&epsilon;<sub>0</sub>") + " " + frac("Q", "r<sup>2</sup>") + "</b>.<br><br>
      <b>2. At the Surface (r = R):</b><br>
      <b>E<sub>surface</sub> = " + frac("1", "4&pi;&epsilon;<sub>0</sub>") + " " + frac("Q", "R<sup>2</sup>") + " = " + frac("&sigma;", "&epsilon;<sub>0</sub>") + "</b>.<br><br>
      <b>3. Inside the Shell (r < R):</b><br>
      Gaussian surface of radius r encloses zero charge (q<sub>enclosed</sub> = 0).<br>
      E (4&pi; r<sup>2</sup>) = 0 &rArr; <b>E<sub>in</sub> = 0</b>.<br>
      (Electric field is strictly zero everywhere inside a charged spherical shell).
      `
    },
    {
      q: "Derive an expression for the electrostatic potential at distance r from an isolated positive point charge Q in vacuum.",
      a: `
      <b>1. Theoretical Setup:</b> Let point charge +Q be at origin O. We calculate potential V at point P at distance r from O.<br>
      Let a unit positive test charge (+1 C) be at intermediate distance x from O.<br>
      Electrostatic repulsive force on +1 C is: F = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ Q / x<sup>2</sup> ].<br><br>
      <b>2. Small Work Done:</b> Work dW in moving test charge through displacement dx towards O against force F is:<br>
      dW = -F dx = - [ Q / (4&pi;&epsilon;<sub>0</sub> x<sup>2</sup>) ] dx.<br><br>
      <b>3. Integration from &infin; to r:</b><br>
      V = W = &int;<sub>&infin;</sub><sup>r</sup> - [ Q / (4&pi;&epsilon;<sub>0</sub> x<sup>2</sup>) ] dx = - [ Q / (4&pi;&epsilon;<sub>0</sub>) ] [ -1/x ]<sub>&infin;</sub><sup>r</sup> = [ Q / (4&pi;&epsilon;<sub>0</sub>) ] [ 1/r - 1/&infin; ]<br><br>
      <b>V = " + frac("1", "4&pi;&epsilon;<sub>0</sub>") + " " + frac("Q", "r") + "</b> (Potential decreases hyperbolically V &prop; 1/r).
      `
    },
    {
      q: "Derive an expression for the electrostatic potential at any general point (r, &theta;) due to a short electric dipole. Deduce axial and equatorial cases.",
      a: `
      <b>1. Setup:</b> Consider dipole charges -q at A and +q at B separated by 2a with center O. Let P be at polar coordinates (r, &theta;), where r &gt;&gt; a.<br>
      Distances from +q and -q are r<sub>1</sub> &approx; r - a cos &theta; and r<sub>2</sub> &approx; r + a cos &theta;.<br><br>
      <b>2. Algebraic Potential Sum:</b><br>
      V = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ 1/r<sub>1</sub> - 1/r<sub>2</sub> ] = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ 1/(r - a cos &theta;) - 1/(r + a cos &theta;) ]<br>
      V = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ (2 a cos &theta;) / (r<sup>2</sup> - a<sup>2</sup> cos<sup>2</sup> &theta;) ]<br><br>
      Substitute dipole moment p = q (2a) and neglect a<sup>2</sup> for r &gt;&gt; a:<br>
      <b>V = " + frac("1", "4&pi;&epsilon;<sub>0</sub>") + " " + frac("p cos &theta;", "r<sup>2</sup>") + "</b><br><br>
      <b>Special Cases:</b><br>
      - <b>Axial Line (&theta; = 0&deg;):</b> cos 0&deg; = 1 &rArr; <b>V<sub>axial</sub> = p / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>)</b>.<br>
      - <b>Equatorial Line (&theta; = 90&deg;):</b> cos 90&deg; = 0 &rArr; <b>V<sub>eq</sub> = 0</b>.
      `
    },
    {
      q: "Derive an expression for the capacitance of a parallel plate capacitor with a dielectric slab of thickness t (t < d) inserted between its plates.",
      a: `
      <b>1. Setup:</b> Consider plates of area A separated by distance d in vacuum carrying charges &plusmn;Q. A dielectric slab of thickness t and dielectric constant K is placed between plates.<br>
      - Electric field in vacuum region of thickness (d - t): E<sub>0</sub> = Q / (&epsilon;<sub>0</sub> A).<br>
      - Electric field inside dielectric slab of thickness t: E<sub>m</sub> = E<sub>0</sub> / K = Q / (K &epsilon;<sub>0</sub> A).<br><br>
      <b>2. Potential Difference:</b><br>
      V = E<sub>0</sub> (d - t) + E<sub>m</sub> t = E<sub>0</sub> (d - t) + (E<sub>0</sub> / K) t = E<sub>0</sub> [ (d - t) + t / K ]<br>
      V = [ Q / (&epsilon;<sub>0</sub> A) ] [ d - t + t / K ].<br><br>
      <b>3. Capacitance:</b><br>
      <b>C = " + frac("Q", "V") + " = " + frac("&epsilon;<sub>0</sub> A", "d - t + (t / K)") + "</b><br><br>
      <b>Completely Filled Slab (t = d):</b><br>
      C = &epsilon;<sub>0</sub> A / (d / K) = <b>K (" + frac("&epsilon;<sub>0</sub> A", "d") + ") = K C<sub>0</sub></b>.
      `
    },
    {
      q: "Derive an expression for the capacitance of a parallel plate capacitor with a conducting metallic slab of thickness t (t < d).",
      a: `
      <b>1. Setup:</b> A conducting slab of thickness t is inserted between plates of separation d.<br>
      Inside a conductor, electrostatic field is zero (E<sub>in</sub> = 0).<br>
      The external electric field E<sub>0</sub> exists only in the air region of thickness (d - t).<br><br>
      <b>2. Potential Difference:</b><br>
      V = E<sub>0</sub> (d - t) = [ Q / (&epsilon;<sub>0</sub> A) ] (d - t).<br><br>
      <b>3. Capacitance:</b><br>
      <b>C = " + frac("Q", "V") + " = " + frac("&epsilon;<sub>0</sub> A", "d - t") + " = C<sub>0</sub> " + frac("d", "d - t") + " &gt; C<sub>0</sub></b>.<br>
      As t &rarr; d, separation (d - t) &rarr; 0 and C &rarr; &infin;.
      `
    },
    {
      q: "Derive an expression for the electrostatic energy stored in a charged capacitor. Hence, deduce the formula for energy density.",
      a: `
      <b>1. Energy Stored:</b><br>
      Let instantaneous charge on plates be q and potential difference be v = q / C.<br>
      Small work done in adding charge dq: dW = v dq = (q / C) dq.<br>
      Total work in charging from q = 0 to Q:<br>
      W = &int;<sub>0</sub><sup>Q</sup> (q / C) dq = (1 / C) [ q<sup>2</sup> / 2 ]<sub>0</sub><sup>Q</sup> = Q<sup>2</sup> / (2 C).<br>
      <b>U = " + frac("1", "2") + " C V<sup>2</sup> = " + frac("Q<sup>2</sup>", "2 C") + " = " + frac("1", "2") + " Q V</b><br><br>
      <b>2. Energy Density (u):</b><br>
      Substitute C = &epsilon;<sub>0</sub> A / d and V = E d:<br>
      U = 1/2 (&epsilon;<sub>0</sub> A / d) (E d)<sup>2</sup> = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> (A d) = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> &times; Volume.<br>
      <b>u = " + frac("U", "Volume") + " = " + frac("1", "2") + " &epsilon;<sub>0</sub> E<sup>2</sup> [J m<sup>-3</sup>]</b>.
      `
    },
    {
      q: "Explain the loss of electrostatic energy when two charged capacitors are connected in parallel. Derive the expression for energy loss.",
      a: `
      <b>1. Initial State:</b> Capacitors C<sub>1</sub>, C<sub>2</sub> charged to potentials V<sub>1</sub>, V<sub>2</sub>.<br>
      Initial Stored Energy: U<sub>i</sub> = 1/2 C<sub>1</sub> V<sub>1</sub><sup>2</sup> + 1/2 C<sub>2</sub> V<sub>2</sub><sup>2</sup>.<br><br>
      <b>2. Final State:</b> Connected in parallel, reaching common potential V = (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>).<br>
      Final Stored Energy: U<sub>f</sub> = 1/2 (C<sub>1</sub> + C<sub>2</sub>) V<sup>2</sup> = 1/2 (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>)<sup>2</sup> / (C<sub>1</sub> + C<sub>2</sub>).<br><br>
      <b>3. Energy Loss (&Delta;U):</b><br>
      &Delta;U = U<sub>i</sub> - U<sub>f</sub> = 1/2 [ C<sub>1</sub> V<sub>1</sub><sup>2</sup> + C<sub>2</sub> V<sub>2</sub><sup>2</sup> - (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>)<sup>2</sup> / (C<sub>1</sub> + C<sub>2</sub>) ]<br>
      <b>&Delta;U = " + frac("C<sub>1</sub> C<sub>2</sub> (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup>", "2 (C<sub>1</sub> + C<sub>2</sub>)") + " &ge; 0</b>.<br>
      Since (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup> &gt; 0, &Delta;U is always positive; this energy is dissipated as thermal heat in connecting wires and spark radiation.
      `
    },
    {
      q: "Explain with physical explanations the behavior of a conductor placed in an electrostatic field, detailing 6 fundamental properties.",
      a: `
      <b>1. Net Electric Field Inside is Strictly Zero (E<sub>in</sub> = 0):</b> Mobile free electrons drift under external field <b>E</b><sub>0</sub> to the surface, creating an opposing internal induced field <b>E</b><sub>ind</sub> that exactly cancels <b>E</b><sub>0</sub>.<br>
      <b>2. Electric Field at Surface is Strictly Normal (E = &sigma;/&epsilon;<sub>0</sub>):</b> Any tangential field component would cause surface currents, violating electrostatic equilibrium.<br>
      <b>3. Excess Static Charge Resides Exclusively on Outer Surface:</b> By Gauss's Law, constructing a Gaussian surface inside the conductor where E = 0 yields q<sub>enclosed</sub> = 0.<br>
      <b>4. Electrostatic Potential is Constant Throughout Volume:</b> Since E = -dV/dr = 0 everywhere inside, potential V is uniform and equals surface potential.<br>
      <b>5. Electric Field Inside Cavity is Zero (Electrostatic Shielding):</b> Any hollow cavity within a conductor is completely shielded from external electrostatic fields (Faraday Cage).<br>
      <b>6. Action of Points (Corona Discharge):</b> At sharp pointed tips, small radius of curvature r results in very large surface charge density (&sigma; &prop; 1/r) and huge localized fields that ionize air.
      `
    },
    {
      q: "Derive an expression for the electrostatic potential energy of a system of three point charges q<sub>1</sub>, q<sub>2</sub>, and q<sub>3</sub> placed at positions r<sub>1</sub>, r<sub>2</sub>, and r<sub>3</sub>.",
      a: `
      <b>1. Bringing q<sub>1</sub> to r<sub>1</sub>:</b> In empty space with no pre-existing electric field, work done W<sub>1</sub> = 0.<br>
      <b>2. Bringing q<sub>2</sub> to r<sub>2</sub>:</b> Potential at r<sub>2</sub> due to q<sub>1</sub> is V<sub>1</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q<sub>1</sub> / r<sub>12</sub> ].<br>
      Work done W<sub>2</sub> = q<sub>2</sub> V<sub>1</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>2</sub>) / r<sub>12</sub> ].<br>
      <b>3. Bringing q<sub>3</sub> to r<sub>3</sub>:</b> Potential at r<sub>3</sub> due to both q<sub>1</sub> and q<sub>2</sub> is V<sub>12</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q<sub>1</sub> / r<sub>13</sub> + q<sub>2</sub> / r<sub>23</sub> ].<br>
      Work done W<sub>3</sub> = q<sub>3</sub> V<sub>12</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>3</sub>) / r<sub>13</sub> + (q<sub>2</sub> q<sub>3</sub>) / r<sub>23</sub> ].<br><br>
      <b>4. Total Potential Energy U:</b><br>
      U = W<sub>1</sub> + W<sub>2</sub> + W<sub>3</sub> = <b>" + frac("1", "4&pi;&epsilon;<sub>0</sub>") + " [ " + frac("q<sub>1</sub> q<sub>2</sub>", "r<sub>12</sub>") + " + " + frac("q<sub>2</sub> q<sub>3</sub>", "r<sub>23</sub>") + " + " + frac("q<sub>3</sub> q<sub>1</sub>", "r<sub>31</sub>") + " ]</b>
      `
    },
    {
      q: "Derive an expression for torque on an electric dipole in a uniform electric field, work done in rotating it through angle &theta;, and potential energy U = -p &sdot; E.",
      a: `
      <b>1. Torque:</b> Forces on charges &plusmn;q are &plusmn;q<b>E</b> with perpendicular lever arm 2a sin &theta;.<br>
      Torque &tau; = (q E) (2a sin &theta;) = <b>p E sin &theta;</b> &rArr; <b><b>&tau;</b> = <b>p</b> &times; <b>E</b></b>.<br><br>
      <b>2. Work Done in Rotation:</b><br>
      Work dW in small rotation d&theta; is dW = &tau; d&theta; = p E sin &theta; d&theta;.<br>
      Total work in rotating from &theta;<sub>1</sub> to &theta;<sub>2</sub>: W = &int;<sub>&theta;1</sub><sup>&theta;2</sup> p E sin &theta; d&theta; = <b>p E (cos &theta;<sub>1</sub> - cos &theta;<sub>2</sub>)</b>.<br><br>
      <b>3. Potential Energy:</b> Taking reference zero energy at &theta;<sub>0</sub> = 90&deg; (where dipole is perpendicular to field):<br>
      U(&theta;) = &int;<sub>90&deg;</sub><sup>&theta;</sup> p E sin &theta; d&theta; = p E [ -cos &theta; ]<sub>90&deg;</sub><sup>&theta;</sup> = -p E cos &theta;.<br>
      <b>U = - p E cos &theta; = - <b>p</b> &sdot; <b>E</b></b>
      `
    },
    {
      q: "Discuss in detail the effect of introducing a dielectric slab of constant K into a parallel plate capacitor under two cases: (a) Battery remains connected, (b) Battery is disconnected.",
      a: `
      <b>Case (a): Battery Remains CONNECTED to Capacitor:</b><br>
      - <b>Potential (V):</b> Maintained constant by battery: V = V<sub>0</sub>.<br>
      - <b>Capacitance (C):</b> Increases by factor K: C' = K C<sub>0</sub>.<br>
      - <b>Charge (Q):</b> Battery supplies extra charge: Q' = C' V = K C<sub>0</sub> V<sub>0</sub> = K Q<sub>0</sub> (increases K times).<br>
      - <b>Electric Field (E):</b> E = V / d = V<sub>0</sub> / d = E<sub>0</sub> (remains constant).<br>
      - <b>Stored Energy (U):</b> U' = 1/2 C' V<sup>2</sup> = 1/2 (K C<sub>0</sub>) V<sub>0</sub><sup>2</sup> = K U<sub>0</sub> (increases K times).<br><br>
      <b>Case (b): Battery is DISCONNECTED before inserting slab:</b><br>
      - <b>Charge (Q):</b> Charge is trapped on plates: Q = Q<sub>0</sub> (remains constant).<br>
      - <b>Capacitance (C):</b> Increases by factor K: C' = K C<sub>0</sub>.<br>
      - <b>Potential (V):</b> Drops due to polarization: V' = Q / C' = Q<sub>0</sub> / (K C<sub>0</sub>) = V<sub>0</sub> / K (decreases K times).<br>
      - <b>Electric Field (E):</b> E' = V' / d = E<sub>0</sub> / K (decreases K times).<br>
      - <b>Stored Energy (U):</b> U' = Q<sup>2</sup> / (2 C') = Q<sub>0</sub><sup>2</sup> / (2 K C<sub>0</sub>) = U<sub>0</sub> / K (decreases K times).
      `
    },
    {
      q: "Describe the principle, construction, and step-by-step mathematical derivation of capacitance for a parallel plate capacitor in vacuum.",
      a: `
      <b>1. Construction:</b> Two identical parallel conducting plates P<sub>1</sub> and P<sub>2</sub> each of area A separated by distance d in vacuum carrying charges +Q and -Q.<br>
      Surface charge density: &sigma; = Q / A.<br><br>
      <b>2. Electric Field Between Plates:</b><br>
      By Gauss's Law, field due to +plate is &sigma;/(2&epsilon;<sub>0</sub>) (away) and -plate is &sigma;/(2&epsilon;<sub>0</sub>) (towards).<br>
      Total uniform field between plates: E<sub>0</sub> = &sigma;/(2&epsilon;<sub>0</sub>) + &sigma;/(2&epsilon;<sub>0</sub>) = &sigma; / &epsilon;<sub>0</sub> = Q / (&epsilon;<sub>0</sub> A).<br><br>
      <b>3. Potential Difference & Capacitance:</b><br>
      Potential difference V<sub>0</sub> = E<sub>0</sub> &times; d = [ Q / (&epsilon;<sub>0</sub> A) ] &times; d.<br>
      <b>C<sub>0</sub> = " + frac("Q", "V<sub>0</sub>") + " = " + frac("&epsilon;<sub>0</sub> A", "d") + "</b>.
      `
    },
    {
      q: "Derive expressions for equivalent capacitance of three capacitors in: (a) Series combination, (b) Parallel combination.",
      a: `
      <b>(a) Series Combination:</b><br>
      - In series, identical charge Q flows on all capacitors: Q<sub>1</sub> = Q<sub>2</sub> = Q<sub>3</sub> = Q.<br>
      - Applied voltage divides: V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub> = Q/C<sub>1</sub> + Q/C<sub>2</sub> + Q/C<sub>3</sub>.<br>
      - Let equivalent capacitance be C<sub>s</sub>, so V = Q/C<sub>s</sub>.<br>
      - Q/C<sub>s</sub> = Q [ 1/C<sub>1</sub> + 1/C<sub>2</sub> + 1/C<sub>3</sub> ] &rArr; <b>1 / C<sub>s</sub> = 1 / C<sub>1</sub> + 1 / C<sub>2</sub> + 1 / C<sub>3</sub></b>.<br><br>
      <b>(b) Parallel Combination:</b><br>
      - In parallel, potential difference V across each capacitor is identical: V<sub>1</sub> = V<sub>2</sub> = V<sub>3</sub> = V.<br>
      - Total charge divides: Q = Q<sub>1</sub> + Q<sub>2</sub> + Q<sub>3</sub> = C<sub>1</sub> V + C<sub>2</sub> V + C<sub>3</sub> V.<br>
      - Let equivalent capacitance be C<sub>p</sub>, so Q = C<sub>p</sub> V.<br>
      - C<sub>p</sub> V = (C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub>) V &rArr; <b>C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub></b>.
      `
    },
    {
      q: "Define Equipotential Surfaces. Explain their 4 core properties with proofs and state shapes for standard charge distributions.",
      a: `
      <b>1. Definition:</b> An equipotential surface is the locus of all points in an electrostatic field having the exact same potential (V = constant).<br><br>
      <b>2. Core Properties & Proofs:</b><br>
      - <b>Work Done is Zero:</b> W = q<sub>0</sub> (V<sub>B</sub> - V<sub>A</sub>) = q<sub>0</sub>(0) = 0.<br>
      - <b>Field Lines are Perpendicular:</b> dW = E dl cos &theta; = 0 &rArr; cos &theta; = 0 &rArr; &theta; = 90&deg;.<br>
      - <b>Surfaces Never Intersect:</b> Intersection would give two distinct potentials at the same spatial point.<br>
      - <b>Surface Spacing:</b> E = -dV/dr &rArr; dr = -dV/E (closer in strong field regions).<br><br>
      <b>3. Geometric Shapes:</b><br>
      - <b>Isolated Point Charge:</b> Concentric spheres centered at charge.<br>
      - <b>Uniform Electric Field:</b> Equidistant parallel planes perpendicular to field lines.<br>
      - <b>Line Charge:</b> Coaxial cylindrical surfaces around the wire.
      `
    },
    {
      q: "Provide an exhaustive master synthesis of JKBOSE / NCERT Unit I: Electrostatics (09 Marks) summarizing core laws, mathematical equations, and board exam focus areas.",
      a: `
      <b>1. Fundamental Electrostatic Laws:</b><br>
      - <b>Quantization:</b> q = &plusmn; n e &nbsp;|&nbsp; <b>Coulomb's Law:</b> F = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup> ].<br>
      - <b>Gauss's Law:</b> &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>.<br><br>
      <b>2. Core Field & Potential Equations:</b><br>
      - Wire: E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r) &nbsp;|&nbsp; Sheet: E = &sigma; / (2&epsilon;<sub>0</sub>) &nbsp;|&nbsp; Shell: E<sub>out</sub> = Q / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>), E<sub>in</sub> = 0.<br>
      - Point Charge Potential: V = Q / (4&pi;&epsilon;<sub>0</sub> r) &nbsp;|&nbsp; Gradient: E = -dV/dr.<br>
      - Dipole: E<sub>axial</sub> = 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>), E<sub>eq</sub> = p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>), &tau; = <b>p</b> &times; <b>E</b>, U = -<b>p</b> &sdot; <b>E</b>.<br><br>
      <b>3. Capacitance & Energy:</b><br>
      - Parallel Plate: C<sub>0</sub> = &epsilon;<sub>0</sub> A / d &nbsp;|&nbsp; Slab: C = &epsilon;<sub>0</sub> A / [ d - t + t/K ].<br>
      - Combinations: 1/C<sub>s</sub> = &Sigma; 1/C<sub>i</sub>, C<sub>p</sub> = &Sigma; C<sub>i</sub>.<br>
      - Stored Energy: U = 1/2 C V<sup>2</sup> = Q<sup>2</sup> / (2C) &nbsp;|&nbsp; Density: u = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup>.<br>
      - Energy Loss on Sharing: &Delta;U = [ C<sub>1</sub> C<sub>2</sub> (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup> ] / [ 2 (C<sub>1</sub> + C<sub>2</sub>) ].
      `
    }
  ];

  let html = `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">Section C: Long Answer (LA) Questions (5 Marks each)</h2>`;
  las.forEach((item, idx) => {
    html += qBox(idx + 81, item.q, "Detailed Derivation & Theoretical Proof", item.a);
  });
  return html;
}

module.exports = { getSectionBSAs, getSectionCLAs };
