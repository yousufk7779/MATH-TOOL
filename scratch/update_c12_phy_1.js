const fs = require('fs');
const path = require('path');

const uploadDir = 'C:/Users/hp/.gemini/antigravity-ide/brain/9f9e7c9c-926d-4ac8-848d-cc38f6dc763d/.user_uploaded';
const targetFile = 'd:/All NCERT SOLUTIONS11/client/data/content/c12-phy-1.ts';

const imgFiles = [
  'media_1787931194024.jpg', // 1. Electric Charge
  'media_1787931194233.jpg', // 2. Conservation of Charge
  'media_1787931194282.jpg', // 3. Coulomb's Law (Two Point Charges)
  'media_1787931194374.jpg', // 4. Forces Between Multiple Charges
  'media_1787931194405.jpg', // 5. Superposition Principle
  'media_1787931216701.jpg', // 6. Continuous Charge Distribution
  'media_1787931216753.jpg', // 7. Electric Field Due to a Point Charge
  'media_1787931216838.jpg', // 8. Electric Field Lines
  'media_1787931216872.jpg', // 9. Electric Dipole
  'media_1787931216927.jpg', // 10. Electric Field Due to a Dipole (Axial Line)
  'media_1787931373468.jpg', // 11. Electric Field Due to a Dipole (Equatorial Line)
  'media_1787931373712.jpg', // 12. Torque on a Dipole in Uniform Electric Field
  'media_1787931373746.jpg', // 13. Electric Flux
  'media_1787931373783.jpg', // 14. Gauss's Theorem
  'media_1787931373846.jpg', // 15. Field Due to Infinitely Long Straight Wire
  'media_1787931403254.jpg', // 16. Uniformly Charged Infinite Plane Sheet
  'media_1787931403292.jpg', // 17. Uniformly Charged Thin Spherical Shell
  'media_1787931403365.jpg', // 18. Uniformly Charged Solid Sphere
  'media_1787931403401.jpg', // 19. Conductor (Electrostatic Equilibrium)
  'media_1787931403458.jpg'  // 20. Capacitor (Parallel Plate)
];

const b64 = imgFiles.map(f => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(uploadDir, f)).toString('base64'));

function makeCard(num, title, b64Img, caption) {
  return `  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 10px; padding: 14px 16px; margin: 18px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="color: #FF512F; font-size: 15.5px; font-weight: bold; margin-bottom: 10px; text-align: left;">📸 Diagram ${num}: ${title}</div>
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 420px;">
      <img src="${b64Img}" style="width: 100%; max-width: 380px; height: auto; display: block; border-radius: 6px;" alt="${title}" />
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

// Read current c12-phy-1.ts
const originalCode = fs.readFileSync(targetFile, 'utf8');

// Extract solutions and mcqs
const solutionsIndex = originalCode.indexOf('export const c12Phy1HtmlSolutions');
const solutionsAndMcqs = originalCode.slice(solutionsIndex);

const c12Phy1Overview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
  
  <!-- QUICK GLOSSARY CARD -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid #FF512F; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF512F; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #FF512F; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Concepts &amp; Key Definitions &bull; Unit I: Electrostatics</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid #FF512F; border-radius: 6px;">
        <b style='color: #FF512F; display: block; margin-bottom: 4px;'>1. Electric Charge (q):</b>
        <span style="color: #FFFFFF;">Fundamental scalar property of subatomic particles causing electrostatic attraction or repulsion [Coulomb C, Dimensions: [A T]].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid #FF512F; border-radius: 6px;">
        <b style='color: #FF512F; display: block; margin-bottom: 4px;'>2. Coulomb's Law:</b>
        <span style="color: #FFFFFF;">Inverse-square law of electrostatic force F = [1/(4&pi;&epsilon;<sub>0</sub>)] (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>) acting along line of centers.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid #FF512F; border-radius: 6px;">
        <b style='color: #FF512F; display: block; margin-bottom: 4px;'>3. Electric Field (<b>E</b>):</b>
        <span style="color: #FFFFFF;">Force experienced per unit positive infinitesimal test charge: <b>E</b> = <b>F</b> / q<sub>0</sub> [N C<sup>-1</sup> or V m<sup>-1</sup>, Dimensions: [M L T<sup>-3</sup> A<sup>-1</sup>]].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid #FF512F; border-radius: 6px;">
        <b style='color: #FF512F; display: block; margin-bottom: 4px;'>4. Electric Dipole Moment (<b>p</b>):</b>
        <span style="color: #FFFFFF;">Vector <b>p</b> = q (2<b>a</b>) directed from -q to +q [Coulomb-meter C m, Dimensions: [L T A]]. Torque: <b>&tau;</b> = <b>p</b> &times; <b>E</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid #FF512F; border-radius: 6px;">
        <b style='color: #FF512F; display: block; margin-bottom: 4px;'>5. Electric Flux (&Phi;<sub>E</sub>):</b>
        <span style="color: #FFFFFF;">Total field lines passing normally through a surface: &Phi;<sub>E</sub> = &int;&int; <b>E</b> &sdot; d<b>A</b> [N m<sup>2</sup> C<sup>-1</sup> or V m, Dimensions: [M L<sup>3</sup> T<sup>-3</sup> A<sup>-1</sup>]].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid #FF512F; border-radius: 6px;">
        <b style='color: #FF512F; display: block; margin-bottom: 4px;'>6. Gauss's Law:</b>
        <span style="color: #FFFFFF;">Total outward flux through any closed 3D Gaussian surface equals &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 25px;">1. Electric Charges, Conductors, Insulators &amp; Quantization of Charge</h2>
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 81, 47, 0.4); border-left: 5px solid #FF512F; border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <div style="color: #FF512F; font-size: 16px; font-weight: bold; margin-bottom: 4px;">📖 DEFINITION: Electric Charge (q)</div>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6; margin-bottom: 8px;">Intrinsic property of elementary particles that gives rise to electrostatic forces between them.</div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 13.5px; background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 6px;">
      <span style="color: #94A3B8;"><b>SI Unit:</b> <span style="color: #FFFFFF;">Coulomb (C) = A s</span></span>
      <span style="color: #94A3B8;"><b>Dimension:</b> <span style="color: #FFFFFF;">[M<sup>0</sup> L<sup>0</sup> T<sup>1</sup> A<sup>1</sup>]</span></span>
    </div>
  </div>
  <div style="background: rgba(30, 41, 59, 0.7); border: 1.2px dashed #38BDF8; border-radius: 8px; padding: 12px 16px; margin: 14px 0;">
    <div style="color: #38BDF8; font-size: 15px; font-weight: bold; margin-bottom: 4px;">💡 REAL-WORLD INTUITION: Quantization of Electric Charge</div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.6;">Charge comes in discrete packets of elementary charge e = 1.6 &times; 10<sup>-19</sup> C, just like money comes in integer multiples of coins (q = &plusmn; n e). You can have 100 electrons or 101 electrons, but never 100.5 electrons!</div>
  </div>
  
  <p>Electrostatics is the fundamental branch of electromagnetism that investigates the behavior, interactions, forces, fields, and potentials associated with stationary electric charges at rest. In classical physics, matter is composed of atoms containing positively charged protons (+e) within a dense nucleus and negatively charged electrons (-e) bound in surrounding orbitals. When the exact balance between protons and electrons is disrupted, macroscopic physical bodies acquire a net electric charge.</p>

  ${makeCard(1, 'Electric Charge (Positive & Negative Charge)', b64[0], 'Electric charge is the fundamental intrinsic scalar property of matter occurring as positive (+q) and negative (-q) charges.')}

  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid #FF512F; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF512F; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: Electric Charge (q)</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">Electric charge is an intrinsic scalar physical property of elementary subatomic particles of matter that causes them to experience an attractive or repulsive electromagnetic force when placed in electromagnetic fields. SI Unit: Coulomb (C). Dimensional Formula: [M<sup>0</sup> L<sup>0</sup> T<sup>1</sup> A<sup>1</sup>] = [A T].</div>
  </div>

  <h3 style="color: #FF512F; margin-top: 20px;">(i) Fundamental Classification of Materials</h3>
  <p>Materials in nature are broadly categorized based on the mobility of their electric charge carriers:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Conductors:</b> Substances that contain abundant mobile free valence electrons (approximately 10<sup>28</sup> to 10<sup>29</sup> free electrons per m<sup>3</sup>) that can drift easily through the metal crystal lattice under the influence of an electric field (e.g. Copper, Silver, Aluminium, Human Body, Earth). When charge is transferred to a conductor, it instantly spreads across its entire outer surface.</li>
    <li><b>Insulators (Dielectrics):</b> Substances in which all electrons are tightly bound to parent atomic nuclei by strong valence forces, leaving virtually zero free electrons for conduction (e.g. Glass, Mica, Quartz, Ebonite, Dry Wood, Plastics). When charge is given to an insulator, it remains strictly localized at the point of application.</li>
    <li><b>Semiconductors:</b> Materials whose electrical conductivity lies intermediate between conductors and insulators (e.g. Silicon, Germanium).</li>
  </ul>

  <h3 style="color: #FF512F; margin-top: 20px;">(ii) Physical Methods of Charging</h3>
  <p>A body can be charged electrically through three distinct physical mechanisms:</p>
  <ol style="margin-left: 20px; line-height: 1.8;">
    <li><b>Charging by Friction:</b> When two suitable dielectric materials are rubbed together, frictional thermal energy overcomes the work function of electrons in one body, transferring electrons to the other. The material with lower work function loses electrons and becomes positively charged.</li>
    <li><b>Charging by Conduction:</b> When an uncharged conducting body is brought into direct physical contact with a charged conductor, mobile electrons flow between them until they reach electrostatic equilibrium.</li>
    <li><b>Charging by Electrostatic Induction:</b> The process of charging a neutral conductor without any physical contact with a charged body.</li>
  </ol>

  <h3 style="color: #FF512F; margin-top: 20px;">(iii) Principle of Quantization of Charge</h3>
  <p>Experimental studies conducted by Robert Millikan in his famous Oil Drop Experiment established that electric charge is not continuous, but exists in discrete packets or quanta.</p>
  
  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid #FF512F; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF512F; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: Quantization of Charge</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">The Principle of Quantization of Charge states that the total electric charge (q) possessed by any physical body is always an integral multiple of the basic elementary quantum of charge carried by a single electron or proton (e = 1.602 &times; 10<sup>-19</sup> C).</div>
  </div>
  
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>q = &plusmn; n e &nbsp;|&nbsp; n &isin; {1, 2, 3, ...} &nbsp;|&nbsp; e = 1.602176 &times; 10<sup>-19</sup> C</b></div>

  <!-- SECTION 2 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">2. Law of Conservation of Charge</h2>

  <p>The Law of Conservation of Charge is one of the most fundamental universal conservation laws in modern physics, holding strictly across all microscopic, quantum, macroscopic, and astrophysical scales without exception.</p>

  ${makeCard(2, 'Conservation of Charge', b64[1], 'Total charge inside an isolated physical system remains strictly constant over time.')}

  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid #FF512F; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF512F; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: Law of Conservation of Charge</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">The Law of Conservation of Charge states that the total algebraic sum of positive and negative electric charges in an electrically isolated physical system remains strictly constant over time, regardless of any physical, chemical, or nuclear processes occurring within the system.</div>
  </div>

  <p>Charge can neither be created nor destroyed in isolation; it can only be transferred from one body to another or created in equal and opposite pairs:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Pair Production:</b> &gamma; (q = 0) &rarr; e<sup>-</sup> (-e) + e<sup>+</sup> (+e) &nbsp; [Net Initial = 0, Net Final = 0]</li>
    <li><b>Electron-Positron Annihilation:</b> e<sup>-</sup> (-e) + e<sup>+</sup> (+e) &rarr; 2 &gamma; (q = 0) &nbsp; [Net Initial = 0, Net Final = 0]</li>
    <li><b>Radioactive Alpha Decay:</b> <sup>238</sup><sub>92</sub>U (+92e) &rarr; <sup>234</sup><sub>90</sub>Th (+90e) + <sup>4</sup><sub>2</sub>He (+2e) &nbsp; [Initial = +92e, Final = +92e]</li>
  </ul>

  <!-- SECTION 3 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">3. Coulomb's Law, Superposition Principle &amp; Continuous Charge Distribution</h2>
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 81, 47, 0.4); border-left: 5px solid #FF512F; border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
    <div style="color: #FF512F; font-size: 16px; font-weight: bold; margin-bottom: 4px;">📖 DEFINITION: Coulomb's Law (F)</div>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6; margin-bottom: 8px;">Electrostatic force between two stationary point charges: <b>F = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span><span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span></span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">|q<sub>1</sub> q<sub>2</sub>|</span><span style="padding: 0 2px; display: inline-block;">r<sup>2</sup></span></span></b> acting along the line joining the centers.</div>
  </div>

  ${makeCard(3, "Coulomb's Law (Two Point Charges)", b64[2], "Electrostatic force F = [1/(4πε₀)] (q₁ q₂ / r²) acting along the line joining the two stationary point charges.")}

  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid #FF512F; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FF512F; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: Coulomb's Law</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">Coulomb's Law states that the electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the scalar product of the magnitudes of the charges and inversely proportional to the square of the distance separating them, acting along the straight line joining the centers of the two charges.</div>
  </div>

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>Scalar Form: F = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span>
    <span style="padding: 0 2px; display: inline-block;">4&pi; &epsilon;<sub>0</sub></span>
  </span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">|q<sub>1</sub> q<sub>2</sub>|</span>
    <span style="padding: 0 2px; display: inline-block;">r<sup>2</sup></span>
  </span> &nbsp;|&nbsp; 1/(4&pi;&epsilon;<sub>0</sub>) &approx; 9 &times; 10<sup>9</sup> N m<sup>2</sup> C<sup>-2</sup></b></div>

  <h3 style="color: #FF512F; margin-top: 20px;">(i) Principle of Superposition of Electrostatic Forces</h3>
  <p>When multiple point charges interact, the net electrostatic force acting on any given test charge is the vector sum of individual forces exerted on it by all other charges independently:</p>
  
  ${makeCard(4, 'Forces Between Multiple Charges (Vector Superposition)', b64[3], 'Net force on any charge is the vector sum of individual forces due to all other charges: F_net = F₁₂ + F₁₃ + ... + F₁ₙ.')}

  <p>Similarly, for electric fields produced by multiple charges, the net electric field at any point is the vector sum of fields produced by each charge independently:</p>

  ${makeCard(5, 'Superposition Principle for Electric Field', b64[4], 'Net electric field E at a point is the vector sum of electric fields due to all individual source charges: E = E₁ + E₂ + E₃.')}

  <h3 style="color: #FF512F; margin-top: 20px;">(ii) Continuous Charge Distributions</h3>
  <p>For macroscopic charged objects where discrete atomic charges blend into smooth distributions:</p>

  ${makeCard(6, 'Continuous Charge Distribution (Line, Surface & Volume)', b64[5], 'Continuous charge distributions: Line charge (λ = dq/dl), Surface charge (σ = dq/dA), and Volume charge (ρ = dq/dV).')}

  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Linear Charge Density (&lambda;):</b> Charge per unit length along a line: &lambda; = dq / dl [C m<sup>-1</sup>].</li>
    <li><b>Surface Charge Density (&sigma;):</b> Charge per unit surface area: &sigma; = dq / dA [C m<sup>-2</sup>].</li>
    <li><b>Volume Charge Density (&rho;):</b> Charge per unit 3D volume: &rho; = dq / dV [C m<sup>-3</sup>].</li>
  </ul>

  <!-- SECTION 4 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">4. Electric Field, Field Lines &amp; Dipole Fields (Axial &amp; Equatorial)</h2>
  
  <p>Electric Field Intensity at any point in space is defined as the electrostatic force experienced per unit infinitesimal positive test charge placed at that point: <b>E</b> = <b>F</b> / q<sub>0</sub>.</p>

  ${makeCard(7, 'Electric Field Due to a Point Charge', b64[6], 'Electric field at distance r from a point charge: E = [1/(4πε₀)] (q / r²) (directed radially outward for +q, radially inward for -q).')}

  <h3 style="color: #FF512F; margin-top: 20px;">(i) Properties of Electric Field Lines</h3>
  <p>Electric field lines provide an intuitive geometric representation of electrostatic fields:</p>

  ${makeCard(8, 'Electric Field Lines (Due to +q and -q)', b64[7], 'Field lines originate from positive charge and terminate perpendicularly on negative charge.')}

  <ol style="margin-left: 20px; line-height: 1.8;">
    <li>Field lines originate continuously from positive charges and terminate on negative charges.</li>
    <li>Tangent to a field line at any point gives the direction of electric field <b>E</b> at that point.</li>
    <li>Two electric field lines can NEVER intersect each other (otherwise two directions would exist at a single point).</li>
    <li>Electric field lines never form closed loops due to conservative nature of electrostatic fields.</li>
  </ol>

  <h3 style="color: #FF512F; margin-top: 20px;">(ii) Electric Dipole &amp; Dipole Moment</h3>
  <p>An electric dipole is a system of two equal and opposite point charges (+q and -q) separated by a small distance 2a.</p>

  ${makeCard(9, 'Electric Dipole and Dipole Moment Vector', b64[8], 'Electric dipole moment vector p = q(2a)n̂ directed from negative charge (-q) to positive charge (+q).')}

  <h3 style="color: #FF512F; margin-top: 20px;">(iii) Electric Field on Axial Line of a Dipole (End-On Position)</h3>
  <p>For an observation point P on the dipole axis at distance r from the dipole center (r &gt;&gt; a):</p>

  ${makeCard(10, 'Electric Field Due to a Dipole (Axial Line)', b64[9], 'On the axial line for r >> a: E_axial = [1/(4πε₀)] (2p / r³) along the direction of dipole moment p.')}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>E<sub>axial</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span>
    <span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span>
  </span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">2 p</span>
    <span style="padding: 0 2px; display: inline-block;">r<sup>3</sup></span>
  </span> &nbsp; (For r &gt;&gt; a, along direction of p)</b></div>

  <h3 style="color: #FF512F; margin-top: 20px;">(iv) Electric Field on Equatorial Line of a Dipole (Broadside-On Position)</h3>
  <p>For an observation point P on the equatorial perpendicular bisector at distance r from the dipole center (r &gt;&gt; a):</p>

  ${makeCard(11, 'Electric Field Due to a Dipole (Equatorial Line)', b64[10], 'On the equatorial line for r >> a: E_equatorial = [1/(4πε₀)] (p / r³) directed anti-parallel to dipole moment p.')}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>E<sub>equatorial</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span>
    <span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span>
  </span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">p</span>
    <span style="padding: 0 2px; display: inline-block;">r<sup>3</sup></span>
  </span> &nbsp; (For r &gt;&gt; a, opposite to p) &nbsp;⇒&nbsp; E<sub>axial</sub> = 2 E<sub>equatorial</sub></b></div>

  <!-- SECTION 5 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">5. Torque on a Dipole in Uniform Electric Field &amp; Electric Flux</h2>

  <p>When an electric dipole is placed at an angle &theta; in a uniform electrostatic field <b>E</b>, equal and opposite forces &plusmn;q<b>E</b> form a couple that produces a torque:</p>

  ${makeCard(12, 'Torque on a Dipole in Uniform Electric Field', b64[11], 'Torque experienced by an electric dipole in uniform field: τ = p × E = p E sin θ, acting to align the dipole with the field.')}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>&tau; = p &times; E &nbsp;⇒&nbsp; &tau; = p E sin &theta; &nbsp;|&nbsp; Potential Energy: U = - p &sdot; E = - p E cos &theta;</b></div>

  <h3 style="color: #FF512F; margin-top: 20px;">(i) Electric Flux (&Phi;<sub>E</sub>)</h3>
  <p>Electric flux is a scalar measure of the total number of electric field lines passing normally through a given area element <b>A</b>:</p>

  ${makeCard(13, 'Electric Flux Through a Plane Area Element', b64[12], 'Electric flux through area A: Φ_E = E · A = E A cos θ, where θ is the angle between electric field E and area normal vector n̂.')}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>&Phi;<sub>E</sub> = &int;&int; <b>E</b> &sdot; d<b>A</b> = E A cos &theta; &nbsp; [SI Unit: N m<sup>2</sup> C<sup>-1</sup> = V m]</b></div>

  <!-- SECTION 6 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">6. Gauss's Theorem &amp; Its Applications</h2>

  <p>Gauss's Theorem states that the total outward electric flux through any closed Gaussian surface enclosing net charge q<sub>enc</sub> is equal to q<sub>enc</sub> / &epsilon;<sub>0</sub>.</p>

  ${makeCard(14, "Gauss's Theorem for a Closed Gaussian Surface", b64[13], "Total electric flux through any closed Gaussian surface: ∮_S E · dA = q_enc / ε₀.")}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>&oint;<sub>S</sub> <b>E</b> &sdot; d<b>A</b> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">q<sub>enc</sub></span>
    <span style="padding: 0 2px; display: inline-block;">&epsilon;<sub>0</sub></span>
  </span></b></div>

  <h3 style="color: #FF512F; margin-top: 20px;">(i) Application 1: Infinitely Long Straight Uniformly Charged Wire</h3>
  <p>Constructing a cylindrical Gaussian surface of radius r and length l coaxial with the wire of linear charge density &lambda;:</p>

  ${makeCard(15, 'Field Due to an Infinitely Long Straight Wire', b64[14], 'Electric field at distance r from an infinitely long wire of linear charge density λ: E = λ / (2πε₀ r).')}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>E = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&lambda;</span>
    <span style="padding: 0 2px; display: inline-block;">2&pi; &epsilon;<sub>0</sub> r</span>
  </span> &nbsp; (Radially outwards if &lambda; &gt; 0)</b></div>

  <h3 style="color: #FF512F; margin-top: 20px;">(ii) Application 2: Uniformly Charged Infinite Plane Sheet</h3>
  <p>Constructing a pillbox cylindrical Gaussian surface piercing the infinite plane sheet of surface charge density &sigma;:</p>

  ${makeCard(16, 'Uniformly Charged Infinite Plane Sheet', b64[15], 'Electric field on each side of an infinite sheet of surface charge density σ: E = σ / (2ε₀), independent of distance r.')}

  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>E = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&sigma;</span>
    <span style="padding: 0 2px; display: inline-block;">2 &epsilon;<sub>0</sub></span>
  </span> &nbsp; (Uniform on each side, directed normally outward if &sigma; &gt; 0)</b></div>

  <h3 style="color: #FF512F; margin-top: 20px;">(iii) Application 3: Uniformly Charged Thin Spherical Shell</h3>
  <p>For a thin spherical conducting shell of radius R carrying total charge Q = 4&pi;R<sup>2</sup>&sigma;:</p>

  ${makeCard(17, 'Uniformly Charged Thin Spherical Shell', b64[16], 'Electric field: E = 0 inside (r < R), and E = [1/(4πε₀)] (Q / r²) on or outside the shell (r ≥ R).')}

  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Inside the shell (r &lt; R):</b> E = 0 (since q<sub>enc</sub> = 0).</li>
    <li><b>On the surface (r = R):</b> E<sub>surface</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] (Q / R<sup>2</sup>) = &sigma; / &epsilon;<sub>0</sub>.</li>
    <li><b>Outside the shell (r &gt; R):</b> E<sub>out</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] (Q / r<sup>2</sup>).</li>
  </ul>

  <h3 style="color: #FF512F; margin-top: 20px;">(iv) Uniformly Charged Non-Conducting Solid Sphere</h3>
  <p>For a uniformly charged non-conducting solid dielectric sphere of radius R carrying total charge Q with uniform volume charge density &rho; = Q / [(4/3)&pi;R<sup>3</sup>]:</p>

  ${makeCard(18, 'Uniformly Charged Solid Sphere', b64[17], 'Inside solid sphere (r < R): E = [1/(4πε₀)] (Q r / R³); Outside solid sphere (r ≥ R): E = [1/(4πε₀)] (Q / r²).')}

  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Inside the solid sphere (r &lt; R):</b> E<sub>in</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] (Q r / R<sup>3</sup>) = (&rho; r) / (3&epsilon;<sub>0</sub>) &nbsp; [Linear growth with r from center where E=0].</li>
    <li><b>On the surface (r = R):</b> E<sub>surface</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] (Q / R<sup>2</sup>).</li>
    <li><b>Outside the solid sphere (r &gt; R):</b> E<sub>out</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] (Q / r<sup>2</sup>).</li>
  </ul>

  <!-- SECTION 7 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">7. Electric Potential &amp; Potential Difference</h2>
  
  <p>Electric potential V at a point in an electrostatic field is defined as the work done per unit positive charge in bringing it from infinity to that point without acceleration: V = W / q<sub>0</sub>. SI Unit: Volt (V) = J C<sup>-1</sup>.</p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>V(r) = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span>
    <span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span>
  </span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">q</span>
    <span style="padding: 0 2px; display: inline-block;">r</span>
  </span> &nbsp;|&nbsp; <b>E</b> = - &nabla;V = - <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">dV</span>
    <span style="padding: 0 2px; display: inline-block;">dr</span>
  </span> r̂</b></div>

  <!-- SECTION 8 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">8. Potential due to a Point Charge, Dipole &amp; System of Charges</h2>
  <p>For an electric dipole, the potential at distance r at angle &theta; with the dipole moment vector is given by:</p>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>V(r, &theta;) = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">1</span>
    <span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub></span>
  </span> <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">p cos &theta;</span>
    <span style="padding: 0 2px; display: inline-block;">r<sup>2</sup></span>
  </span> &nbsp;|&nbsp; Axial (&theta;=0&deg;): V = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">p</span>
    <span style="padding: 0 2px; display: inline-block;">4&pi;&epsilon;<sub>0</sub> r<sup>2</sup></span>
  </span> &nbsp;|&nbsp; Equatorial (&theta;=90&deg;): V = 0</b></div>

  <!-- SECTION 9 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">9. Equipotential Surfaces &amp; Electrostatic Potential Energy</h2>
  <p>An equipotential surface is a surface on which the electric potential is constant everywhere (V = constant). No work is done in moving any charge along an equipotential surface (dW = q dV = 0), and electric field lines are always perpendicular to equipotential surfaces.</p>

  <!-- SECTION 10 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">10. Conductors, Insulators, Free &amp; Bound Charges</h2>

  <p>When a conductor is placed in an electrostatic field, free electrons redistribute until the internal electric field is completely neutralized.</p>

  ${makeCard(19, 'Conductor (Electrostatic Equilibrium)', b64[18], 'Charge resides on the surface only. Electric field inside a conductor in electrostatic equilibrium is zero (E = 0).')}

  <ul style="margin-left: 20px; line-height: 1.8;">
    <li>Inside a conductor in electrostatic equilibrium, net electric field is strictly zero: <b>E<sub>inside</sub> = 0</b>.</li>
    <li>Just outside the surface of a charged conductor, electric field is normal to surface: <b>E = (&sigma; / &epsilon;<sub>0</sub>) n̂</b>.</li>
    <li>Entire volume and surface of a conductor is an equipotential region: <b>V = constant</b>.</li>
    <li>All excess electrostatic charge resides entirely on the outermost surface.</li>
    <li><b>Electrostatic Shielding:</b> The electric field inside any cavity within a conductor remains strictly zero, protecting delicate electronic instruments from external electric fields.</li>
  </ul>

  <!-- SECTION 11 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">11. Dielectrics &amp; Electric Polarization</h2>
  <p>Dielectrics are non-conducting insulating materials with no free charge carriers. When placed in an external electric field <b>E</b><sub>0</sub>, atomic dipoles align, creating an induced polarization electric field <b>E</b><sub>p</sub> opposing <b>E</b><sub>0</sub>, reducing net internal field to <b>E = E<sub>0</sub> / K</b>.</p>

  <!-- SECTION 12 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">12. Capacitors, Capacitance &amp; Parallel Plate Capacitor (With &amp; Without Dielectric)</h2>

  <p>A capacitor is an electrical component designed to store electric charge and electrostatic potential energy. Capacitance C = Q / V measures the charge stored per unit potential difference. SI Unit: Farad (F) = C V<sup>-1</sup>.</p>

  ${makeCard(20, 'Capacitor (Parallel Plate with & without Dielectric)', b64[19], 'Capacitance without dielectric: C = ε₀ A / d; Capacitance with dielectric: C = ε A / d = K ε₀ A / d.')}

  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Without Dielectric (Vacuum):</b> C<sub>0</sub> = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&epsilon;<sub>0</sub> A</span><span style="padding: 0 2px; display: inline-block;">d</span></span>.</li>
    <li><b>With Dielectric of Permittivity &epsilon; (Constant K):</b> C = <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&epsilon; A</span><span style="padding: 0 2px; display: inline-block;">d</span></span> = K <span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;"><span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">&epsilon;<sub>0</sub> A</span><span style="padding: 0 2px; display: inline-block;">d</span></span> = K C<sub>0</sub>.</li>
  </ul>

  <!-- SECTION 13 -->
  <h2 style="color: #FF512F; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 30px;">13. Combinations of Capacitors (Series &amp; Parallel) &amp; Energy Stored</h2>
  <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;"><b>Series: 1/C<sub>s</sub> = 1/C<sub>1</sub> + 1/C<sub>2</sub> + ... + 1/C<sub>n</sub> &nbsp;|&nbsp; Parallel: C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + ... + C<sub>n</sub> &nbsp;|&nbsp; Energy: U = 1/2 C V<sup>2</sup> = Q<sup>2</sup> / (2 C) = 1/2 Q V</b></div>

</div>
`;

// Escape quotes for TS string
function escapeTs(str) {
  return JSON.stringify(str);
}

const newFileContent = `// Class 12 Physics Unit I: Electrostatics
// Comprehensive Gold Standard Reference Textbook (Pradeep's / S.L. Arora Standard) + 20 Official Topic Diagrams + 100 Pure Theory/Numerical Solutions + 25 Interactive MCQs

export const c12Phy1HtmlOverview = ${escapeTs(c12Phy1Overview)};

${solutionsAndMcqs}
`;

fs.writeFileSync(targetFile, newFileContent, 'utf8');
console.log('Successfully generated new c12-phy-1.ts! File size:', newFileContent.length);
