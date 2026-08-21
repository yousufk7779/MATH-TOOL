const fs = require('fs');
const path = require('path');

const { getTheoryPart1 } = require('./c12_theory_part1.js');
const { getTheoryPart2 } = require('./c12_theory_part2.js');
const svgs = require('./build_all_9_large_svgs.js');

const { getSectionAVSAs } = require('./c12_solutions_part1.js');
const { getSectionBSAs, getSectionCLAs } = require('./c12_solutions_part2.js');

const themeColor = "#FF512F";

const fullOverviewHtml = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
  ${getTheoryPart1(svgs)}
  ${getTheoryPart2(svgs)}
</div>
`;

const fullSolutionsHtml = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
  <div style="background: rgba(255, 81, 47, 0.08); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 16px; margin-bottom: 25px; text-align: center;">
    <h2 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 21px; font-weight: bold; text-align: center !important;">
      Class 12 Physics Unit I: Electrostatics (09 Marks)
    </h2>
    <p style="color: #FFD700; margin: 0; font-size: 15px; font-weight: 500; text-align: center !important;">
      Comprehensive Master Solutions (100 Questions: 40 VSAs, 40 SAs, 20 LAs)
    </p>
  </div>

  ${getSectionAVSAs()}
  ${getSectionBSAs()}
  ${getSectionCLAs()}
</div>
`;

// 25 Interactive MCQs (60% Basic/Engaging + 40% Moderate/Advance)
// Distributed across A, B, C, D with explicit option labels A), B), C), D)
const mcqs = [
  {
    id: "c12-phy-1-mcq-1",
    question: "When a glass rod is rubbed with silk cloth, the glass rod becomes positively charged. What happens to the silk cloth?",
    options: [
      "A) It gains an equal amount of positive charge",
      "B) It acquires an equal amount of negative charge",
      "C) It remains completely neutral",
      "D) It loses all of its conduction electrons"
    ],
    correctAnswer: "b",
    explanation: "By the law of conservation of charge, electrons transferred from the glass rod to the silk cloth give the silk cloth an exactly equal amount of negative charge."
  },
  {
    id: "c12-phy-1-mcq-2",
    question: "What is the conventional direction of the Electric Dipole Moment vector (<b>p</b>)?",
    options: [
      "A) From negative charge (-q) to positive charge (+q)",
      "B) From positive charge (+q) to negative charge (-q)",
      "C) Radially outward in all directions",
      "D) Perpendicular to the dipole axis"
    ],
    correctAnswer: "a",
    explanation: "In electrostatics, the electric dipole moment vector <b>p</b> = q (2<b>a</b>) points along the axis from the negative charge (-q) to the positive charge (+q)."
  },
  {
    id: "c12-phy-1-mcq-3",
    question: "Which of the following values of electrostatic charge is physically possible on a body according to the quantization of charge?",
    options: [
      "A) 2.4 &times; 10<sup>-19</sup> C",
      "B) 4.0 &times; 10<sup>-19</sup> C",
      "C) 3.2 &times; 10<sup>-19</sup> C",
      "D) 0.8 &times; 10<sup>-19</sup> C"
    ],
    correctAnswer: "c",
    explanation: "By quantization of charge q = n e, total charge must be an integral multiple of e = 1.6 &times; 10<sup>-19</sup> C. Here, 3.2 &times; 10<sup>-19</sup> C = 2 &times; e (where n = 2)."
  },
  {
    id: "c12-phy-1-mcq-4",
    question: "Why can two electric field lines never intersect each other at any point?",
    options: [
      "A) Because field lines always remain straight",
      "B) Because like field lines strongly repel each other",
      "C) Because field lines are imaginary curves",
      "D) Because at the intersection, there would be two directions of net electric field"
    ],
    correctAnswer: "d",
    explanation: "If two lines cross, two tangents could be drawn at the intersection point, which would mean two different directions of resultant electric field at the exact same location, which is physically impossible."
  },
  {
    id: "c12-phy-1-mcq-5",
    question: "What is the SI unit of absolute electrical permittivity of free space (&epsilon;<sub>0</sub>)?",
    options: [
      "A) N m<sup>2</sup> C<sup>-2</sup>",
      "B) C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup> (or F m<sup>-1</sup>)",
      "C) N C<sup>-1</sup>",
      "D) Volt &times; meter (V m)"
    ],
    correctAnswer: "b",
    explanation: "From Coulomb's law &epsilon;<sub>0</sub> = q<sub>1</sub>q<sub>2</sub> / (4&pi; F r<sup>2</sup>), the SI unit is C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup>, also commonly expressed as Farad per meter (F m<sup>-1</sup>)."
  },
  {
    id: "c12-phy-1-mcq-6",
    question: "Which of the following physical quantities in electrostatics is a true vector quantity?",
    options: [
      "A) Electrostatic Potential",
      "B) Electric Flux",
      "C) Electric Dipole Moment",
      "D) Electrostatic Potential Energy"
    ],
    correctAnswer: "c",
    explanation: "Electric dipole moment <b>p</b> is a vector quantity (directed from -q to +q). Potential, electric flux, and electrostatic energy are all scalar quantities."
  },
  {
    id: "c12-phy-1-mcq-7",
    question: "Under electrostatic equilibrium, the net electric field intensity inside a hollow metallic conductor is:",
    options: [
      "A) Maximum at the center of the cavity",
      "B) Dependent on the shape of the conductor",
      "C) Strictly Zero",
      "D) Infinite"
    ],
    correctAnswer: "c",
    explanation: "Free electrons redistribute on the outer metallic surface until the induced internal field completely cancels the applied field, leaving E = 0 inside (Electrostatic Shielding)."
  },
  {
    id: "c12-phy-1-mcq-8",
    question: "The work done in moving a test charge of 5.0 &mu;C between two points on the same equipotential surface of potential 50 V is:",
    options: [
      "A) 250 &mu;J",
      "B) 50 &mu;J",
      "C) 10 &mu;J",
      "D) Zero"
    ],
    correctAnswer: "d",
    explanation: "On an equipotential surface, potential difference &Delta;V = 0. Therefore, work done W = q<sub>0</sub> &Delta;V = q<sub>0</sub> (0) = 0."
  },
  {
    id: "c12-phy-1-mcq-9",
    question: "The angle between electrostatic field lines and an equipotential surface is always:",
    options: [
      "A) 90&deg; (Perpendicular)",
      "B) 0&deg; (Parallel)",
      "C) 45&deg;",
      "D) 180&deg;"
    ],
    correctAnswer: "a",
    explanation: "Because work done along an equipotential surface is zero (dW = E dl cos &theta; = 0), cos &theta; = 0 &rArr; &theta; = 90&deg;. Field lines are always normal to equipotentials."
  },
  {
    id: "c12-phy-1-mcq-10",
    question: "One Farad (1 F) of electrical capacitance is equivalent to:",
    options: [
      "A) 1 Joule per Volt (1 J V<sup>-1</sup>)",
      "B) 1 Coulomb per Volt (1 C V<sup>-1</sup>)",
      "C) 1 Newton per Coulomb (1 N C<sup>-1</sup>)",
      "D) 1 Volt per Coulomb (1 V C<sup>-1</sup>)"
    ],
    correctAnswer: "b",
    explanation: "From definition C = Q / V, 1 Farad = 1 Coulomb / 1 Volt (1 F = 1 C V<sup>-1</sup>)."
  },
  {
    id: "c12-phy-1-mcq-11",
    question: "What is the value of the dielectric constant (relative permittivity K) for a perfect metallic conductor?",
    options: [
      "A) Zero",
      "B) 1.0",
      "C) 80",
      "D) Infinity (&infin;)"
    ],
    correctAnswer: "d",
    explanation: "Inside a metallic conductor in equilibrium, E = 0. Since E = E<sub>0</sub> / K &rArr; K = E<sub>0</sub> / 0 = &infin;."
  },
  {
    id: "c12-phy-1-mcq-12",
    question: "When two identical capacitors each of capacitance C are connected in parallel, their equivalent capacitance is:",
    options: [
      "A) C / 2",
      "B) 2 C",
      "C) C",
      "D) 4 C"
    ],
    correctAnswer: "b",
    explanation: "In parallel combination, equivalent capacitance is the direct algebraic sum: C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> = C + C = 2 C."
  },
  {
    id: "c12-phy-1-mcq-13",
    question: "When two identical capacitors each of capacitance C are connected in series, their equivalent capacitance is:",
    options: [
      "A) C / 2",
      "B) 2 C",
      "C) C",
      "D) C / 4"
    ],
    correctAnswer: "a",
    explanation: "In series combination, 1/C<sub>s</sub> = 1/C + 1/C = 2/C &rArr; C<sub>s</sub> = C / 2."
  },
  {
    id: "c12-phy-1-mcq-14",
    question: "The electric potential at any point on the equatorial line of an electric dipole is:",
    options: [
      "A) Zero",
      "B) p / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>)",
      "C) 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>)",
      "D) Infinite"
    ],
    correctAnswer: "a",
    explanation: "Every point on the equatorial line is equidistant from +q and -q. The positive potential V<sub>+</sub> exactly cancels the negative potential V<sub>-</sub>, resulting in net V<sub>eq</sub> = 0."
  },
  {
    id: "c12-phy-1-mcq-15",
    question: "Total outward electric flux emerging from a closed Gaussian surface enclosing an electric dipole is:",
    options: [
      "A) q / &epsilon;<sub>0</sub>",
      "B) 2q / &epsilon;<sub>0</sub>",
      "C) Zero",
      "D) p / &epsilon;<sub>0</sub>"
    ],
    correctAnswer: "c",
    explanation: "An electric dipole consists of equal and opposite charges (+q and -q). Net enclosed charge &Sigma;q = +q + (-q) = 0. By Gauss's Law, &Phi; = &Sigma;q / &epsilon;<sub>0</sub> = 0."
  },
  {
    id: "c12-phy-1-mcq-16",
    question: "Two point charges in vacuum repel each other with force F. When placed at the same distance in water (dielectric constant K = 80), the new force is:",
    options: [
      "A) 80 F",
      "B) F",
      "C) F / 80",
      "D) F / 1600"
    ],
    correctAnswer: "c",
    explanation: "In a dielectric medium of relative permittivity K, the electrostatic force is reduced by factor K: F<sub>med</sub> = F<sub>vac</sub> / K = F / 80."
  },
  {
    id: "c12-phy-1-mcq-17",
    question: "An electric dipole of moment <b>p</b> in a uniform electric field <b>E</b> experiences maximum torque when the angle &theta; between <b>p</b> and <b>E</b> is:",
    options: [
      "A) 0&deg;",
      "B) 45&deg;",
      "C) 90&deg;",
      "D) 180&deg;"
    ],
    correctAnswer: "c",
    explanation: "Torque &tau; = p E sin &theta;. Torque reaches its maximum value when sin &theta; = 1, which occurs at &theta; = 90&deg; (&tau;<sub>max</sub> = p E)."
  },
  {
    id: "c12-phy-1-mcq-18",
    question: "For a short electric dipole, the ratio of electric field intensity at an axial point to an equatorial point at the same distance r is:",
    options: [
      "A) 1 : 2",
      "B) 2 : 1",
      "C) 1 : 1",
      "D) 4 : 1"
    ],
    correctAnswer: "b",
    explanation: "E<sub>axial</sub> = 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>) and E<sub>eq</sub> = p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>). Taking their ratio gives E<sub>axial</sub> / E<sub>eq</sub> = 2 : 1."
  },
  {
    id: "c12-phy-1-mcq-19",
    question: "The electric field intensity due to an infinitely long straight wire of linear charge density &lambda; varies with radial distance r as:",
    options: [
      "A) E &prop; 1 / r<sup>2</sup>",
      "B) E &prop; 1 / r<sup>3</sup>",
      "C) Independent of r",
      "D) E &prop; 1 / r"
    ],
    correctAnswer: "d",
    explanation: "By Gauss's Law, field around an infinite wire is E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r), so electric field is inversely proportional to distance r (E &prop; 1/r)."
  },
  {
    id: "c12-phy-1-mcq-20",
    question: "A parallel plate capacitor is connected to a DC battery. When a dielectric slab of K = 3 is inserted between plates while the battery remains connected:",
    options: [
      "A) Potential difference V drops to V/3",
      "B) Capacitance C and Stored Energy U both increase by 3 times",
      "C) Stored charge Q remains unchanged",
      "D) Electric field E increases 3 times"
    ],
    correctAnswer: "b",
    explanation: "Because battery maintains constant voltage V = V<sub>0</sub>, capacitance becomes C' = 3 C<sub>0</sub>, charge increases to Q' = 3 Q<sub>0</sub>, and stored energy multiplies to U' = 1/2 C' V<sup>2</sup> = 3 U<sub>0</sub>."
  },
  {
    id: "c12-phy-1-mcq-21",
    question: "An isolated charged capacitor (battery disconnected) has stored energy U<sub>0</sub>. When a dielectric slab of constant K is inserted, the new stored energy is:",
    options: [
      "A) K U<sub>0</sub>",
      "B) U<sub>0</sub> / K",
      "C) U<sub>0</sub>",
      "D) K<sup>2</sup> U<sub>0</sub>"
    ],
    correctAnswer: "b",
    explanation: "With battery disconnected, charge Q remains constant. Stored energy U' = Q<sup>2</sup> / (2 C') = Q<sup>2</sup> / (2 K C<sub>0</sub>) = U<sub>0</sub> / K (decreases K times)."
  },
  {
    id: "c12-phy-1-mcq-22",
    question: "The electrostatic energy density (energy per unit volume) in a vacuum region with electric field E is given by:",
    options: [
      "A) 1/2 &epsilon;<sub>0</sub> E<sup>2</sup>",
      "B) &epsilon;<sub>0</sub> E<sup>2</sup>",
      "C) 1/2 &epsilon;<sub>0</sub><sup>2</sup> E",
      "D) E<sup>2</sup> / (2 &epsilon;<sub>0</sub>)"
    ],
    correctAnswer: "a",
    explanation: "Energy density u = U / Volume = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> [in Joules per cubic meter, J m<sup>-3</sup>]."
  },
  {
    id: "c12-phy-1-mcq-23",
    question: "The electric field intensity between two infinite parallel sheets carrying uniform surface charge densities +&sigma; and -&sigma; is:",
    options: [
      "A) &sigma; / (2 &epsilon;<sub>0</sub>)",
      "B) &sigma; / &epsilon;<sub>0</sub>",
      "C) 2 &sigma; / &epsilon;<sub>0</sub>",
      "D) Zero"
    ],
    correctAnswer: "b",
    explanation: "Between oppositely charged sheets, individual fields point in the same direction and add together: E = &sigma;/(2&epsilon;<sub>0</sub>) + &sigma;/(2&epsilon;<sub>0</sub>) = &sigma; / &epsilon;<sub>0</sub>."
  },
  {
    id: "c12-phy-1-mcq-24",
    question: "The work done in rotating an electric dipole of moment p in a uniform field E from stable equilibrium (&theta; = 0&deg;) to unstable equilibrium (&theta; = 180&deg;) is:",
    options: [
      "A) Zero",
      "B) p E",
      "C) -2 p E",
      "D) 2 p E"
    ],
    correctAnswer: "d",
    explanation: "Work done W = p E (cos 0&deg; - cos 180&deg;) = p E [1 - (-1)] = 2 p E."
  },
  {
    id: "c12-phy-1-mcq-25",
    question: "A thin metallic spherical shell of radius R carries total charge +Q. What is the electric field at distance r from center where r < R (inside the shell)?",
    options: [
      "A) Strictly Zero",
      "B) Q / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>)",
      "C) Q / (4&pi;&epsilon;<sub>0</sub> R<sup>2</sup>)",
      "D) Q / (4&pi;&epsilon;<sub>0</sub> r)"
    ],
    correctAnswer: "a",
    explanation: "All charge resides on the outer boundary. A Gaussian surface of radius r < R encloses zero charge, so E<sub>in</sub> = 0 everywhere inside."
  }
];

const c12Path = path.join(__dirname, '..', 'client', 'data', 'content', 'c12-phy-1.ts');

const finalTsCode = `// Class 12 Physics Unit I: Electrostatics (JKBOSE / NCERT Official Syllabus - 09 Marks)
// Comprehensive Deep Reference Book Standard (Pradeep's / S.L. Arora) with 5-Layer Topic Breakdown

export const c12Phy1HtmlOverview = ${JSON.stringify(fullOverviewHtml)};

export const c12Phy1HtmlSolutions = ${JSON.stringify(fullSolutionsHtml)};

export const c12Phy1Mcqs = ${JSON.stringify(mcqs, null, 2)};
`;

fs.writeFileSync(c12Path, finalTsCode, 'utf8');
console.log("Successfully rebuilt c12-phy-1.ts with randomized A/B/C/D MCQs, labels A)-D), 60/40 difficulty split, and 100 solutions!");
