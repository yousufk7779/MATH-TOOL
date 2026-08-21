const fs = require('fs');
const path = require('path');

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

// 25 Interactive Quiz MCQs array for the MCQs Tab
const mcqs = [
  {
    id: "c12-phy-1-mcq-1",
    question: "A polythene piece rubbed with wool is found to have a negative charge of 3.2 &times; 10<sup>-7</sup> C. The number of electrons transferred from wool to polythene is:",
    options: [
      "2.0 &times; 10<sup>12</sup> electrons",
      "1.6 &times; 10<sup>19</sup> electrons",
      "3.2 &times; 10<sup>12</sup> electrons",
      "6.25 &times; 10<sup>18</sup> electrons"
    ],
    correctAnswer: "a",
    explanation: "By quantization of charge q = n e &rArr; n = q / e = (3.2 &times; 10<sup>-7</sup> C) / (1.602 &times; 10<sup>-19</sup> C) = 2.0 &times; 10<sup>12</sup> electrons."
  },
  {
    id: "c12-phy-1-mcq-2",
    question: "When the distance between two stationary point charges is doubled, the electrostatic force between them becomes:",
    options: [
      "One-fourth (F / 4)",
      "Double (2 F)",
      "Half (F / 2)",
      "Four times (4 F)"
    ],
    correctAnswer: "a",
    explanation: "According to Coulomb's Inverse Square Law, F &prop; 1/r<sup>2</sup>. If r' = 2r, then F' = F / (2)<sup>2</sup> = F / 4."
  },
  {
    id: "c12-phy-1-mcq-3",
    question: "The SI unit of absolute electrical permittivity of free space (&epsilon;<sub>0</sub>) is:",
    options: [
      "C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup> (or F m<sup>-1</sup>)",
      "N m<sup>2</sup> C<sup>-2</sup>",
      "N C<sup>-1</sup>",
      "Volt meter (V m)"
    ],
    correctAnswer: "a",
    explanation: "From Coulomb's law &epsilon;<sub>0</sub> = q<sub>1</sub>q<sub>2</sub> / (4&pi; F r<sup>2</sup>), SI unit is C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup>, also equivalent to Farad per meter (F m<sup>-1</sup>)."
  },
  {
    id: "c12-phy-1-mcq-4",
    question: "Two point charges placed in air repel each other with force F. When placed in water (dielectric constant K = 80) at the same distance, the force becomes:",
    options: [
      "F / 80",
      "80 F",
      "F",
      "F / 1600"
    ],
    correctAnswer: "a",
    explanation: "Electrostatic force in a dielectric medium of relative permittivity K is reduced by factor K: F<sub>med</sub> = F<sub>air</sub> / K = F / 80."
  },
  {
    id: "c12-phy-1-mcq-5",
    question: "An electric dipole of dipole moment <b>p</b> placed in a uniform electric field <b>E</b> experiences maximum torque when the angle between <b>p</b> and <b>E</b> is:",
    options: [
      "90&deg;",
      "0&deg;",
      "180&deg;",
      "45&deg;"
    ],
    correctAnswer: "a",
    explanation: "Torque on a dipole is given by &tau; = p E sin &theta;. Torque is maximum when sin &theta; = 1, which occurs at &theta; = 90&deg; (&tau;<sub>max</sub> = p E)."
  },
  {
    id: "c12-phy-1-mcq-6",
    question: "The electric field intensity due to an infinitely long straight uniformly charged wire of linear charge density &lambda; at distance r varies as:",
    options: [
      "E &prop; 1 / r",
      "E &prop; 1 / r<sup>2</sup>",
      "E &prop; 1 / r<sup>3</sup>",
      "Independent of r"
    ],
    correctAnswer: "a",
    explanation: "By Gauss's Theorem, field of an infinite straight wire is E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r), so E is inversely proportional to distance r (E &prop; 1/r)."
  },
  {
    id: "c12-phy-1-mcq-7",
    question: "Total electric flux emerging through a closed Gaussian surface enclosing an electric dipole of moment <b>p</b> is:",
    options: [
      "Zero",
      "q / &epsilon;<sub>0</sub>",
      "2q / &epsilon;<sub>0</sub>",
      "p / &epsilon;<sub>0</sub>"
    ],
    correctAnswer: "a",
    explanation: "An electric dipole consists of equal and opposite charges (+q and -q). Net enclosed charge &Sigma;q = +q + (-q) = 0. By Gauss's Law &Phi; = &Sigma;q / &epsilon;<sub>0</sub> = 0."
  },
  {
    id: "c12-phy-1-mcq-8",
    question: "Electric field intensity at any point inside a uniformly charged thin spherical shell of radius R is strictly:",
    options: [
      "Zero",
      "1 / (4&pi;&epsilon;<sub>0</sub>) &times; (Q / R<sup>2</sup>)",
      "1 / (4&pi;&epsilon;<sub>0</sub>) &times; (Q / r<sup>2</sup>)",
      "Infinite"
    ],
    correctAnswer: "a",
    explanation: "Since all charges reside exclusively on the outer boundary of the shell, a Gaussian surface constructed inside encloses zero charge (q<sub>enclosed</sub> = 0), making E<sub>in</sub> = 0 everywhere inside."
  },
  {
    id: "c12-phy-1-mcq-9",
    question: "The electric potential at any point on the equatorial plane of an electric dipole is:",
    options: [
      "Zero",
      "p / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>)",
      "2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>)",
      "Infinite"
    ],
    correctAnswer: "a",
    explanation: "Every point on the equatorial plane is equidistant from +q and -q. The positive potential V<sub>+</sub> exactly cancels the negative potential V<sub>-</sub>, resulting in net V<sub>eq</sub> = 0."
  },
  {
    id: "c12-phy-1-mcq-10",
    question: "The electrostatic energy stored in a capacitor of capacitance C charged to potential difference V is:",
    options: [
      "1/2 C V<sup>2</sup>",
      "C V",
      "1/2 C<sup>2</sup> V",
      "2 C V<sup>2</sup>"
    ],
    correctAnswer: "a",
    explanation: "The work done in charging a capacitor is stored as potential energy: U = 1/2 C V<sup>2</sup> = Q<sup>2</sup> / (2C) = 1/2 Q V."
  },
  {
    id: "c12-phy-1-mcq-11",
    question: "The angle between electric field lines and an equipotential surface at any point is always:",
    options: [
      "90&deg; (Perpendicular)",
      "0&deg; (Parallel)",
      "45&deg;",
      "180&deg;"
    ],
    correctAnswer: "a",
    explanation: "Since work done dW = <b>E</b> &sdot; d<b>l</b> = E dl cos &theta; = 0 on an equipotential surface, cos &theta; = 0 &rArr; &theta; = 90&deg;."
  },
  {
    id: "c12-phy-1-mcq-12",
    question: "When a dielectric slab of dielectric constant K = 4 is inserted between the plates of an isolated charged capacitor (battery disconnected):",
    options: [
      "Capacitance increases 4 times, Potential decreases to V/4",
      "Capacitance increases 4 times, Potential remains constant",
      "Capacitance decreases, Potential increases 4 times",
      "Both Capacitance and Potential remain constant"
    ],
    correctAnswer: "a",
    explanation: "With battery disconnected, charge Q remains constant. Capacitance multiplies to C' = K C<sub>0</sub> = 4 C<sub>0</sub>. Potential drops to V' = Q / C' = V<sub>0</sub> / 4."
  },
  {
    id: "c12-phy-1-mcq-13",
    question: "For a short electric dipole, the ratio of electric field intensity at an axial point to that at an equatorial point at the same distance r is:",
    options: [
      "2 : 1",
      "1 : 2",
      "1 : 1",
      "4 : 1"
    ],
    correctAnswer: "a",
    explanation: "E<sub>axial</sub> = 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>) and E<sub>eq</sub> = p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>). Thus, E<sub>axial</sub> / E<sub>eq</sub> = 2 : 1."
  },
  {
    id: "c12-phy-1-mcq-14",
    question: "Two identical capacitors each of capacitance C are connected in parallel. Their equivalent capacitance is:",
    options: [
      "2 C",
      "C / 2",
      "C",
      "4 C"
    ],
    correctAnswer: "a",
    explanation: "In parallel combination, equivalent capacitance is the direct sum: C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> = C + C = 2 C."
  },
  {
    id: "c12-phy-1-mcq-15",
    question: "Two identical capacitors each of capacitance C are connected in series. Their equivalent capacitance is:",
    options: [
      "C / 2",
      "2 C",
      "C",
      "C / 4"
    ],
    correctAnswer: "a",
    explanation: "In series combination, 1/C<sub>s</sub> = 1/C + 1/C = 2/C &rArr; C<sub>s</sub> = C / 2."
  },
  {
    id: "c12-phy-1-mcq-16",
    question: "The electric field intensity between two infinite parallel sheets carrying uniform surface charge densities +&sigma; and -&sigma; is:",
    options: [
      "&sigma; / &epsilon;<sub>0</sub>",
      "&sigma; / (2 &epsilon;<sub>0</sub>)",
      "Zero",
      "2 &sigma; / &epsilon;<sub>0</sub>"
    ],
    correctAnswer: "a",
    explanation: "Between oppositely charged sheets, individual fields add in the same direction: E = &sigma;/(2&epsilon;<sub>0</sub>) + &sigma;/(2&epsilon;<sub>0</sub>) = &sigma; / &epsilon;<sub>0</sub>."
  },
  {
    id: "c12-phy-1-mcq-17",
    question: "The dimensional formula of electrical capacitance (C) is:",
    options: [
      "[M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> A<sup>2</sup>]",
      "[M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>]",
      "[M L T<sup>-3</sup> A<sup>-1</sup>]",
      "[M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]"
    ],
    correctAnswer: "a",
    explanation: "C = Q / V = [A T] / [M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>] = [M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> A<sup>2</sup>]."
  },
  {
    id: "c12-phy-1-mcq-18",
    question: "The work done in rotating an electric dipole of moment p in a uniform electric field E from stable equilibrium (&theta; = 0&deg;) to unstable equilibrium (&theta; = 180&deg;) is:",
    options: [
      "2 p E",
      "p E",
      "Zero",
      "-2 p E"
    ],
    correctAnswer: "a",
    explanation: "W = p E (cos 0&deg; - cos 180&deg;) = p E [1 - (-1)] = 2 p E."
  },
  {
    id: "c12-phy-1-mcq-19",
    question: "What is the value of the dielectric constant (relative permittivity K) for a perfect metallic conductor?",
    options: [
      "Infinity (&infin;)",
      "Zero",
      "1",
      "80"
    ],
    correctAnswer: "a",
    explanation: "Inside a conductor in electrostatic equilibrium, induced charges completely cancel the external field (E<sub>net</sub> = 0). Since E = E<sub>0</sub>/K &rArr; K = E<sub>0</sub>/0 = &infin;."
  },
  {
    id: "c12-phy-1-mcq-20",
    question: "Electrostatic shielding is based on the physical fact that:",
    options: [
      "Electric field inside a hollow metallic conductor is strictly zero",
      "Electric field inside an insulator is infinite",
      "Conductors cannot hold electric charge",
      "Magnetic fields cancel electric fields"
    ],
    correctAnswer: "a",
    explanation: "Free electrons redistribute on the outer surface of a metal shell until E = 0 in the entire hollow cavity, shielding interior objects from external electrical forces."
  },
  {
    id: "c12-phy-1-mcq-21",
    question: "The electrostatic energy density (energy per unit volume) in a region of electric field E in vacuum is given by:",
    options: [
      "1/2 &epsilon;<sub>0</sub> E<sup>2</sup>",
      "&epsilon;<sub>0</sub> E<sup>2</sup>",
      "1/2 &epsilon;<sub>0</sub><sup>2</sup> E",
      "E<sup>2</sup> / (2 &epsilon;<sub>0</sub>)"
    ],
    correctAnswer: "a",
    explanation: "Energy density u = U / Volume = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> [in Joules per cubic meter J m<sup>-3</sup>]."
  },
  {
    id: "c12-phy-1-mcq-22",
    question: "When two capacitors C<sub>1</sub> and C<sub>2</sub> charged to potentials V<sub>1</sub> and V<sub>2</sub> are connected in parallel, the common potential is:",
    options: [
      "(C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>)",
      "(V<sub>1</sub> + V<sub>2</sub>) / 2",
      "(C<sub>1</sub> V<sub>1</sub> - C<sub>2</sub> V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>)",
      "(C<sub>1</sub> + C<sub>2</sub>) / (V<sub>1</sub> + V<sub>2</sub>)"
    ],
    correctAnswer: "a",
    explanation: "By conservation of charge, Common Potential V = Total Charge / Total Capacitance = (C<sub>1</sub>V<sub>1</sub> + C<sub>2</sub>V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>)."
  },
  {
    id: "c12-phy-1-mcq-23",
    question: "The direction of the Electric Dipole Moment vector <b>p</b> is conventionally defined as:",
    options: [
      "From negative charge (-q) to positive charge (+q)",
      "From positive charge (+q) to negative charge (-q)",
      "Radially outward in all directions",
      "Perpendicular to the line joining the charges"
    ],
    correctAnswer: "a",
    explanation: "By physics convention, the dipole moment vector <b>p</b> = q (2<b>a</b>) points along the dipole axis from the negative charge (-q) to the positive charge (+q)."
  },
  {
    id: "c12-phy-1-mcq-24",
    question: "Which of the following physical quantities is a true vector quantity?",
    options: [
      "Electric Dipole Moment",
      "Electric Potential",
      "Electric Flux",
      "Electrostatic Potential Energy"
    ],
    correctAnswer: "a",
    explanation: "Electric dipole moment <b>p</b> is a vector (directed -q to +q). Potential, flux, and potential energy are all scalar physical quantities."
  },
  {
    id: "c12-phy-1-mcq-25",
    question: "When a positive point charge +Q is brought near an isolated uncharged conducting sphere, the net charge on the sphere becomes:",
    options: [
      "Zero (remains neutral)",
      "Positive (+Q)",
      "Negative (-Q)",
      "Infinite"
    ],
    correctAnswer: "a",
    explanation: "The positive charge induces separation of charges (- on near side, + on far side), but no charge is added or removed, so total net charge remains strictly zero."
  }
];

console.log("25 MCQs generated successfully.");
