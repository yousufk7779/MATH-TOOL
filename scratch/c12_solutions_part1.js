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

// 40 VSAs (Q1 to Q40)
function getSectionAVSAs() {
  const vsas = [
    {
      q: "Define one Coulomb (1 C) of electric charge using Coulomb's Law.",
      a: "One Coulomb is defined as that quantity of electrostatic charge which, when placed in vacuum at a distance of 1 meter from an equal and identical stationary charge, experiences a mutual electrostatic repulsive force of 8.98755 &times; 10<sup>9</sup> N (approx 9 &times; 10<sup>9</sup> N)."
    },
    {
      q: "State the Principle of Conservation of Electric Charge.",
      a: "The total electric charge of an isolated physical system remains strictly constant over time, regardless of any physical, chemical, or nuclear transformations occurring within the system. Charges can neither be created nor destroyed, but only transferred from one body to another."
    },
    {
      q: "What is meant by Quantization of Electric Charge? Write its mathematical relation.",
      a: "Quantization of charge states that the total electric charge (q) carried by any freely existing body is always an integral multiple of the elementary basic unit of charge (e = 1.602 &times; 10<sup>-19</sup> C): <b>q = &plusmn; n e</b>, where n = 1, 2, 3, ..."
    },
    {
      q: "Why can the quantization of electric charge be ignored when dealing with macroscopic (large-scale) charges?",
      a: "At the macroscopic level, charges involved are on the order of microcoulombs or coulombs (involving ~10<sup>13</sup> to 10<sup>19</sup> electrons). Adding or removing a few electrons causes such an infinitesimally small change that charge appears completely smooth and continuous."
    },
    {
      q: "What is the physical cause of quantization of electric charge?",
      a: "The physical cause of quantization is that during electrification by friction, conduction, or induction, only integral numbers of whole electrons are transferred from one body to another; fractions of electrons cannot be transferred."
    },
    {
      q: "State Coulomb's Law in electrostatics.",
      a: "Coulomb's Law states that the electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the product of magnitudes of the charges and inversely proportional to the square of the distance between them: F = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ |q<sub>1</sub> q<sub>2</sub>| / r<sup>2</sup> ]."
    },
    {
      q: "Write the SI unit and dimensional formula of absolute electrical permittivity (&epsilon;<sub>0</sub>).",
      a: "SI Unit: <b>C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup></b> (or Farad per meter, F m<sup>-1</sup>). Dimensional Formula: <b>[M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]</b>."
    },
    {
      q: "Define Relative Permittivity (Dielectric Constant K) of a medium.",
      a: "The Relative Permittivity (K or &epsilon;<sub>r</sub>) is defined as the ratio of absolute permittivity of the medium (&epsilon;) to the absolute permittivity of free space (&epsilon;<sub>0</sub>), or the ratio of electrostatic force between two charges in vacuum (F<sub>vac</sub>) to the force in that medium (F<sub>med</sub>): K = &epsilon; / &epsilon;<sub>0</sub> = F<sub>vac</sub> / F<sub>med</sub>."
    },
    {
      q: "What is the value of the dielectric constant for vacuum, dry air, and a perfect metallic conductor?",
      a: "For vacuum: K = 1.0 (exact). For dry air: K &approx; 1.00054 &approx; 1. For a perfect metallic conductor: K = &infin; (infinite)."
    },
    {
      q: "State the Principle of Superposition of electrostatic forces.",
      a: "When multiple stationary charges interact, the net electrostatic force acting on any given charge is the vector sum of all individual forces exerted on it by all other charges taken one at a time, each pairwise force being unaffected by the presence of other charges: <b>F</b><sub>net</sub> = &Sigma; <b>F</b><sub>i</sub>."
    },
    {
      q: "Define Linear Charge Density (&lambda;) and state its SI unit.",
      a: "Linear charge density &lambda; is defined as the charge per unit length along a one-dimensional line or wire: &lambda; = dq / dl. SI Unit: <b>Coulomb per meter (C m<sup>-1</sup>)</b>."
    },
    {
      q: "Define Surface Charge Density (&sigma;) and state its SI unit.",
      a: "Surface charge density &sigma; is defined as the charge per unit surface area over a two-dimensional sheet or surface: &sigma; = dq / dA. SI Unit: <b>Coulomb per square meter (C m<sup>-2</sup>)</b>."
    },
    {
      q: "Define Volume Charge Density (&rho;) and state its SI unit.",
      a: "Volume charge density &rho; is defined as the charge per unit volume throughout a three-dimensional region: &rho; = dq / dV. SI Unit: <b>Coulomb per cubic meter (C m<sup>-3</sup>)</b>."
    },
    {
      q: "Define Electric Field Intensity (<b>E</b>) at a point and state its SI unit.",
      a: "Electric field intensity <b>E</b> at a point is defined as the electrostatic force experienced per unit positive infinitesimal test charge placed at that point: <b>E</b> = lim<sub>q0&rarr;0</sub> (<b>F</b> / q<sub>0</sub>). SI Unit: <b>Newton per Coulomb (N C<sup>-1</sup>)</b> or <b>Volt per meter (V m<sup>-1</sup>)</b>."
    },
    {
      q: "Why can two electric field lines never cross (intersect) each other at any point?",
      a: "If two field lines were to intersect at a point, two distinct tangents could be drawn at the intersection point, representing two different directions of the net electric field at the exact same spatial location, which is physically impossible."
    },
    {
      q: "Why do electrostatic field lines not form continuous closed loops?",
      a: "Electrostatic field lines originate on positive charges and terminate on negative charges. Because electrostatic forces are conservative (&oint; <b>E</b> &sdot; d<b>l</b> = 0), field lines cannot loop back onto the same charge."
    },
    {
      q: "Define an Electric Dipole and Electric Dipole Moment vector (<b>p</b>).",
      a: "An electric dipole consists of a pair of equal and opposite point charges (+q and -q) separated by a small distance 2a. Dipole moment is a vector <b>p</b> = q (2<b>a</b>), directed along the axis from -q to +q. SI Unit: <b>Coulomb meter (C m)</b>."
    },
    {
      q: "What is the net electric charge on an electric dipole?",
      a: "The net electric charge on an electric dipole is strictly zero: Q<sub>net</sub> = (+q) + (-q) = 0. However, because the charges are spatially separated, its electric field is non-zero."
    },
    {
      q: "State the formula for torque acting on an electric dipole in a uniform electric field.",
      a: "Torque vector: <b>&tau;</b> = <b>p</b> &times; <b>E</b>, and magnitude &tau; = p E sin &theta;, where &theta; is the angle between dipole moment <b>p</b> and electric field <b>E</b>."
    },
    {
      q: "Under what conditions is an electric dipole in stable and unstable equilibrium in a uniform field?",
      a: "Stable Equilibrium occurs at &theta; = 0&deg; (<b>p</b> parallel to <b>E</b>, minimum potential energy U = -pE). Unstable Equilibrium occurs at &theta; = 180&deg; (<b>p</b> antiparallel to <b>E</b>, maximum potential energy U = +pE)."
    },
    {
      q: "Define Electric Flux (&Phi;<sub>E</sub>) and write its SI unit.",
      a: "Electric flux &Phi;<sub>E</sub> represents the total number of electric field lines passing normally through a given surface area: &Phi;<sub>E</sub> = &int; <b>E</b> &sdot; d<b>A</b>. SI Unit: <b>N m<sup>2</sup> C<sup>-1</sup></b> or <b>Volt meter (V m)</b>."
    },
    {
      q: "State Gauss's Theorem in electrostatics.",
      a: "Gauss's Theorem states that the total outward electric flux &Phi;<sub>E</sub> through any closed Gaussian surface in vacuum is equal to (1/&epsilon;<sub>0</sub>) times the net electrostatic charge enclosed within that surface: &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>."
    },
    {
      q: "What is the electric field intensity inside a uniformly charged thin spherical shell?",
      a: "The electric field intensity at any point inside a uniformly charged spherical shell is strictly zero (E<sub>in</sub> = 0), because a Gaussian surface inside encloses zero charge."
    },
    {
      q: "What is the electric field intensity just outside the surface of a charged conductor?",
      a: "Electric field at the surface of a conductor is strictly normal to the surface with magnitude: E = &sigma; / &epsilon;<sub>0</sub>, where &sigma; is the local surface charge density."
    },
    {
      q: "Define Electric Potential (V) at a point and state its SI unit.",
      a: "Electric potential V at a point is the work done by an external agent per unit positive test charge in bringing it slowly from infinity to that point against electrostatic forces: V = W / q<sub>0</sub>. SI Unit: <b>Volt (1 V = 1 J C<sup>-1</sup>)</b>."
    },
    {
      q: "Define Electric Potential Difference between two points in an electric field.",
      a: "Potential difference V<sub>B</sub> - V<sub>A</sub> between two points A and B is the work done per unit positive test charge in carrying it from A to B: V<sub>B</sub> - V<sub>A</sub> = W<sub>A&rarr;B</sub> / q<sub>0</sub> = -&int;<sub>A</sub><sup>B</sup> <b>E</b> &sdot; d<b>l</b>."
    },
    {
      q: "Write the relation between electric field intensity E and potential gradient dV/dr.",
      a: "<b>E = - (dV / dr)</b>. Electric field magnitude equals the spatial rate of decrease of potential with distance."
    },
    {
      q: "What is the physical significance of the negative sign in E = -dV/dr?",
      a: "The negative sign signifies that the direction of the electric field vector <b>E</b> always points along the direction of steepest decrease in electrostatic potential."
    },
    {
      q: "Define an Equipotential Surface and give one example.",
      a: "An equipotential surface is any surface over which the electrostatic potential has the exact same constant value at every point (V = constant). Example: Concentric spheres around an isolated point charge."
    },
    {
      q: "Why is the work done in moving a test charge on an equipotential surface zero?",
      a: "Work done W = q<sub>0</sub> (V<sub>B</sub> - V<sub>A</sub>). Since V<sub>A</sub> = V<sub>B</sub> on an equipotential surface, W = q<sub>0</sub> (0) = 0."
    },
    {
      q: "What is the angle between electric field lines and an equipotential surface?",
      a: "The angle is always <b>90&deg; (perpendicular)</b> at every point, because dW = E dl cos &theta; = 0 &rArr; cos &theta; = 0 &rArr; &theta; = 90&deg;."
    },
    {
      q: "What is the shape of equipotential surfaces for an isolated point charge?",
      a: "They form a family of <b>concentric spherical shells</b> centered at the point charge."
    },
    {
      q: "What is the shape of equipotential surfaces for a uniform electric field along the z-axis?",
      a: "They are a family of <b>equidistant parallel planes</b> perpendicular to the z-axis (parallel to the x-y plane)."
    },
    {
      q: "Define Electrostatic Shielding and name one practical application.",
      a: "Electrostatic shielding is the phenomenon of isolating a region of space from external electrostatic fields using a hollow metallic enclosure (where E = 0 inside). Practical application: Protecting delicate electronic components with Faraday cages and coaxial cables."
    },
    {
      q: "Why does the electrostatic field inside a conductor vanish under static equilibrium?",
      a: "When an external field is applied, mobile free electrons quickly drift to the surface, creating an induced internal field that grows until it exactly cancels the external field, resulting in net zero field (E<sub>net</sub> = 0)."
    },
    {
      q: "Define Capacitance (C) of a conductor and state its SI unit.",
      a: "Capacitance C is defined as the ratio of stored electric charge Q to the resulting change in electrical potential V: C = Q / V. SI Unit: <b>Farad (1 F = 1 C V<sup>-1</sup>)</b>."
    },
    {
      q: "Define one Farad (1 F) of capacitance.",
      a: "A conductor has a capacitance of one Farad if an electric charge of one Coulomb raises its electrical potential by one Volt (1 F = 1 C V<sup>-1</sup>)."
    },
    {
      q: "What is the physical meaning of Dielectric Polarization (<b>P</b>)?",
      a: "Dielectric polarization <b>P</b> is defined as the induced dipole moment per unit volume inside an insulating dielectric medium when subjected to an external electric field: <b>P</b> = &chi;<sub>e</sub> &epsilon;<sub>0</sub> <b>E</b> (SI unit: C m<sup>-2</sup>)."
    },
    {
      q: "What is the Dielectric Strength of an insulating medium?",
      a: "Dielectric strength is the maximum electric field that an insulating material can withstand without undergoing dielectric breakdown and becoming electrically conducting (for dry air &approx; 3 &times; 10<sup>6</sup> V m<sup>-1</sup>)."
    },
    {
      q: "State the formula for electrostatic energy density (u) in an electric field.",
      a: "<b>u = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup></b> (in Joules per cubic meter, J m<sup>-3</sup>). In a dielectric medium of constant K, u = 1/2 K &epsilon;<sub>0</sub> E<sup>2</sup>."
    }
  ];

  let html = `<h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">Section A: Very Short Answer (VSA) Questions (1 Mark each)</h2>`;
  vsas.forEach((item, idx) => {
    html += qBox(idx + 1, item.q, "Solution & Explanation", item.a);
  });
  return html;
}

module.exports = { getSectionAVSAs };
