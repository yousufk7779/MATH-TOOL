const themeColor = "#FF512F";

function frac(num, den) {
  return `<span style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.88em; line-height: 1; margin: 0 3px;">
    <span style="border-bottom: 1.5px solid currentColor; padding: 0 2px; display: inline-block;">${num}</span>
    <span style="padding: 0 2px; display: inline-block;">${den}</span>
  </span>`;
}

function eqBox(eqText) {
  return `<div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 81, 47, 0.35); border-radius: 8px; padding: 12px 16px; text-align: center; margin: 16px 0; font-size: 16.5px; color: #FFFFFF; white-space: nowrap; overflow-x: auto;">${eqText}</div>`;
}

function defBox(title, defContent) {
  return `
  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4.5px solid ${themeColor}; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: ${themeColor}; font-size: 16.5px; display: block; margin-bottom: 6px;">📌 DEFINITION: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${defContent}</div>
  </div>`;
}

function stepDerivationBox(title, stepsHtml) {
  return `
  <div style="background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 12px; padding: 18px; margin: 22px 0;">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 17.5px; margin-bottom: 12px; border-bottom: 1px dashed rgba(255, 81, 47, 0.4); padding-bottom: 6px;">
      📐 STEP-BY-STEP MATHEMATICAL DERIVATION: ${title}
    </div>
    <div style="color: #F1F5F9; line-height: 1.75; font-size: 15.5px;">
      ${stepsHtml}
    </div>
  </div>`;
}

function examTrapBox(title, content) {
  return `
  <div style="background: rgba(255, 193, 7, 0.08); border-left: 4.5px solid #FFC107; padding: 14px 18px; border-radius: 8px; margin: 18px 0;">
    <b style="color: #FFD54F; font-size: 16.5px; display: block; margin-bottom: 6px;">⚠️ BOARD EXAM FOCUS & COMMON TRAPS: ${title}</b>
    <div style="color: #FFFFFF; font-size: 15.5px; line-height: 1.65;">${content}</div>
  </div>`;
}

function solvedExampleBox(num, qText, solHtml) {
  return `
  <div style="background: rgba(0, 229, 255, 0.05); border: 1.2px solid rgba(0, 229, 255, 0.3); border-radius: 10px; padding: 16px; margin: 20px 0;">
    <b style="color: #00E5FF; font-size: 16.5px; display: block; margin-bottom: 6px;">📝 SOLVED BOARD EXAMPLE ${num}:</b>
    <div style="color: #FFFFFF; font-weight: 500; font-size: 15.5px; margin-bottom: 10px;">${qText}</div>
    <div style="background: rgba(0,0,0,0.3); border-left: 3px solid #00E5FF; padding: 10px 14px; border-radius: 4px; color: #E0E0E0; font-size: 15px; line-height: 1.6;">
      <b style="color: #00E5FF;">Step-by-Step Solution:</b><br>${solHtml}
    </div>
  </div>`;
}

function svg3DCardWrapper(title, caption, svgContent) {
  return `
  <div style="background: #0B0F19; border: 1.8px solid ${themeColor}; border-radius: 16px; padding: 20px; margin: 28px 0; box-shadow: 0 10px 30px rgba(255, 81, 47, 0.25);">
    <div style="color: ${themeColor}; font-weight: bold; font-size: 18px; margin-bottom: 16px; text-align: center; letter-spacing: 0.5px;">
      📍 ${title}
    </div>
    <div style="width: 100%; max-width: 960px; margin: 0 auto; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
      ${svgContent}
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; text-align: center; margin-top: 14px; line-height: 1.5; font-weight: 500;">
      💡 ${caption}
    </div>
  </div>`;
}

function getTheoryPart1(svgs) {
  return `
  <!-- QUICK GLOSSARY CARD -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary & Basic Definitions</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Essential Core Terms for JKBOSE / NCERT Unit I: Electrostatics (09 Marks)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>1. Electric Charge (q):</b>
        <span style="color: #FFFFFF;">Fundamental scalar property of subatomic particles that causes electrostatic attraction or repulsion [Coulomb C, Dimensions: [A T]].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>2. Coulomb's Law:</b>
        <span style="color: #FFFFFF;">Fundamental inverse-square law of electrostatic force F = [1/(4&pi;&epsilon;<sub>0</sub>)] (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>) acting along the line of centers.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>3. Electric Field (<b>E</b>):</b>
        <span style="color: #FFFFFF;">Force experienced per unit positive infinitesimal test charge: <b>E</b> = <b>F</b> / q<sub>0</sub> [N C<sup>-1</sup> or V m<sup>-1</sup>, Dimensions: [M L T<sup>-3</sup> A<sup>-1</sup>]].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>4. Electric Dipole Moment (<b>p</b>):</b>
        <span style="color: #FFFFFF;">Vector <b>p</b> = q (2<b>a</b>) directed from -q to +q [Coulomb-meter C m, Dimensions: [L T A]]. Torque: <b>&tau;</b> = <b>p</b> &times; <b>E</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>5. Electric Flux (&Phi;<sub>E</sub>):</b>
        <span style="color: #FFFFFF;">Total field lines passing normally through a surface: &Phi;<sub>E</sub> = &int;&int; <b>E</b> &sdot; d<b>A</b> [N m<sup>2</sup> C<sup>-1</sup> or V m, Dimensions: [M L<sup>3</sup> T<sup>-3</sup> A<sup>-1</sup>]].</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>6. Gauss's Law:</b>
        <span style="color: #FFFFFF;">Total outward flux through any closed 3D Gaussian surface equals &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">1. Electric Charges, Conductors, Insulators &amp; Quantization of Charge</h2>
  
  <p>Electrostatics is the fundamental branch of electromagnetism that investigates the behavior, interactions, forces, fields, and potentials associated with stationary electric charges at rest. In classical physics, matter is composed of atoms containing positively charged protons (+e) within a dense nucleus and negatively charged electrons (-e) bound in surrounding orbitals. When the exact balance between protons and electrons is disrupted, macroscopic physical bodies acquire a net electric charge.</p>

  ${defBox("Electric Charge (q)", "Electric charge is an intrinsic scalar physical property of elementary subatomic particles of matter that causes them to experience an attractive or repulsive electromagnetic force when placed in electromagnetic fields. SI Unit: Coulomb (C). Dimensional Formula: [M<sup>0</sup> L<sup>0</sup> T<sup>1</sup> A<sup>1</sup>] = [A T].")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Fundamental Classification of Materials</h3>
  <p>Materials in nature are broadly categorized based on the mobility of their electric charge carriers:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Conductors:</b> Substances that contain abundant mobile free valence electrons (approximately 10<sup>28</sup> to 10<sup>29</sup> free electrons per m<sup>3</sup>) that can drift easily through the metal crystal lattice under the influence of an electric field (e.g. Copper, Silver, Aluminium, Human Body, Earth). When charge is transferred to a conductor, it instantly spreads across its entire outer surface.</li>
    <li><b>Insulators (Dielectrics):</b> Substances in which all electrons are tightly bound to parent atomic nuclei by strong valence forces, leaving virtually zero free electrons for conduction (e.g. Glass, Mica, Quartz, Ebonite, Dry Wood, Plastics). When charge is given to an insulator, it remains strictly localized at the point of application.</li>
    <li><b>Semiconductors:</b> Materials whose electrical conductivity lies intermediate between conductors and insulators (e.g. Silicon, Germanium).</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Physical Methods of Charging</h3>
  <p>A body can be charged electrically through three distinct physical mechanisms:</p>
  <ol style="margin-left: 20px; line-height: 1.8;">
    <li><b>Charging by Friction:</b> When two suitable dielectric materials are rubbed together, frictional thermal energy overcomes the work function of electrons in one body, transferring electrons to the other. The material with lower work function loses electrons and becomes positively charged (e.g., Glass rod rubbed with silk &rarr; Glass becomes positive, silk becomes negative).</li>
    <li><b>Charging by Conduction:</b> When an uncharged conducting body is brought into direct physical contact with a charged conductor, mobile electrons flow between them until they reach electrostatic equilibrium. Both bodies acquire like charges.</li>
    <li><b>Charging by Electrostatic Induction:</b> The process of charging a neutral conductor without any physical contact with a charged body. When a positively charged rod is brought near an insulated neutral sphere, free electrons are attracted toward the near face (leaving bound negative charge) while the far face is left with excess positive charge. When the far face is connected to Earth (earthing), electrons from Earth neutralize the positive charges. Removing the rod results in a uniformly distributed negative charge across the conductor.</li>
  </ol>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Principle of Quantization of Charge</h3>
  <p>Experimental studies conducted by Robert Millikan in his famous Oil Drop Experiment established that electric charge is not continuous, but exists in discrete packets or quanta.</p>
  
  ${defBox("Quantization of Charge", "The Principle of Quantization of Charge states that the total electric charge (q) possessed by any physical body is always an integral multiple of the basic elementary quantum of charge carried by a single electron or proton (e = 1.602 &times; 10<sup>-19</sup> C).")}
  
  ${eqBox("<b>q = &plusmn; n e &nbsp;|&nbsp; n &isin; {1, 2, 3, ...} &nbsp;|&nbsp; e = 1.602176 &times; 10<sup>-19</sup> C</b>")}

  ${examTrapBox("Why is Quantization Ignored at Macroscopic Scale?", "At the macroscopic level (e.g. microcoulombs or coulombs), the magnitude of charge involved is immense. For example, 1 &mu;C contains n = q/e = 10<sup>-6</sup> / (1.6 &times; 10<sup>-19</sup>) &approx; 6.25 &times; 10<sup>12</sup> electrons. At such enormous numbers, the addition or subtraction of a few million electrons is undetectable, making charge appear perfectly continuous (like fluid flow), and quantization is practically ignored in everyday macroscopic circuits.")}

  ${solvedExampleBox(1, "A polythene piece rubbed with wool is found to have a negative charge of 3.2 &times; 10<sup>-7</sup> C. (a) Estimate the number of electrons transferred from wool to polythene. (b) Is there a transfer of mass from wool to polythene?",
  "<b>(a) Number of Electrons:</b><br>Using quantization formula q = n e:<br>n = q / e = (3.2 &times; 10<sup>-7</sup> C) / (1.602 &times; 10<sup>-19</sup> C) = <b>2.0 &times; 10<sup>12</sup> electrons</b>.<br><br><b>(b) Mass Transfer:</b><br>Yes, since electrons have mass (m<sub>e</sub> = 9.11 &times; 10<sup>-31</sup> kg), transfer of electrons transfers mass:<br>&Delta;m = n &times; m<sub>e</sub> = (2.0 &times; 10<sup>12</sup>) &times; (9.11 &times; 10<sup>-31</sup> kg) = <b>1.82 &times; 10<sup>-18</sup> kg</b>.<br>This mass increase is extremely tiny and practically undetectable, but theoretically real.")}

  <!-- SECTION 2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2. Law of Conservation of Charge</h2>

  <p>The Law of Conservation of Charge is one of the most fundamental universal conservation laws in modern physics, holding strictly across all microscopic, quantum, macroscopic, and astrophysical scales without exception.</p>

  ${defBox("Law of Conservation of Charge", "The Law of Conservation of Charge states that the total algebraic sum of positive and negative electric charges in an electrically isolated physical system remains strictly constant over time, regardless of any physical, chemical, or high-energy nuclear processes occurring within the system.")}

  <p>Charge can neither be created nor destroyed in isolation; it can only be transferred from one body to another or created in equal and opposite pairs. Key universal demonstrations include:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Pair Production:</b> A high-energy gamma-ray photon (&gamma;) interacting with a heavy nucleus converts into an electron (e<sup>-</sup>) and a positron (e<sup>+</sup>):<br>
    <span style="color: #76FF03; font-family: monospace; font-size: 16px;">&gamma; (q = 0) &rarr; e<sup>-</sup> (-e) + e<sup>+</sup> (+e) &nbsp; [Net Initial = 0, Net Final = 0]</span></li>
    <li><b>Electron-Positron Annihilation:</b> An electron and positron collide and annihilate each other, converting into two pure gamma photons:<br>
    <span style="color: #76FF03; font-family: monospace; font-size: 16px;">e<sup>-</sup> (-e) + e<sup>+</sup> (+e) &rarr; 2 &gamma; (q = 0) &nbsp; [Net Initial = 0, Net Final = 0]</span></li>
    <li><b>Radioactive Alpha Decay:</b> Decay of Uranium-238 nucleus into Thorium-234 and an alpha particle:<br>
    <span style="color: #76FF03; font-family: monospace; font-size: 16px;"><sup>238</sup><sub>92</sub>U (+92e) &rarr; <sup>234</sup><sub>90</sub>Th (+90e) + <sup>4</sup><sub>2</sub>He (+2e) &nbsp; [Initial = +92e, Final = +92e]</span></li>
  </ul>

  <!-- SECTION 3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3. Coulomb's Law, Superposition Principle &amp; Continuous Charge Distribution</h2>

  <p>In 1785, French physicist Charles-Augustin de Coulomb quantified the electrostatic force between two stationary electric charges using a sensitive torsion balance.</p>

  ${defBox("Coulomb's Law", "Coulomb's Law states that the electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the scalar product of the magnitudes of the charges and inversely proportional to the square of the distance separating them, acting along the straight line joining the centers of the two charges.")}

  ${eqBox("<b>Scalar Form: F = " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " " + frac("|q<sub>1</sub> q<sub>2</sub>|", "r<sup>2</sup>") + " &nbsp;|&nbsp; " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " = 8.98755 &times; 10<sup>9</sup> N m<sup>2</sup> C<sup>-2</sup> &approx; 9 &times; 10<sup>9</sup> N m<sup>2</sup> C<sup>-2</sup></b>")}

  <p>Here <b>&epsilon;<sub>0</sub> = 8.8541878 &times; 10<sup>-12</sup> C<sup>2</sup> N<sup>-1</sup> m<sup>-2</sup> (or F m<sup>-1</sup>)</b> is the <i>absolute electrical permittivity of free space</i>. Its dimensional formula is <b>[M<sup>-1</sup> L<sup>-3</sup> T<sup>4</sup> A<sup>2</sup>]</b>.</p>

  ${stepDerivationBox("Vector Form of Coulomb's Law & Newton's Third Law", `
  <b>1. Setup:</b> Let position vectors of two point charges q<sub>1</sub> and q<sub>2</sub> with respect to origin O be <b>r</b><sub>1</sub> and <b>r</b><sub>2</sub>.<br>
  Position vector of q<sub>2</sub> with respect to q<sub>1</sub> is <b>r</b><sub>21</sub> = <b>r</b><sub>2</sub> - <b>r</b><sub>1</sub>, with unit vector <b>r̂</b><sub>21</sub> = <b>r</b><sub>21</sub> / |<b>r</b><sub>21</sub>|.<br>
  Position vector of q<sub>1</sub> with respect to q<sub>2</sub> is <b>r</b><sub>12</sub> = <b>r</b><sub>1</sub> - <b>r</b><sub>2</sub> = -<b>r</b><sub>21</sub>, with unit vector <b>r̂</b><sub>12</sub> = -<b>r̂</b><sub>21</sub>.<br><br>
  <b>2. Force Exerted on q<sub>2</sub> by q<sub>1</sub>:</b><br>
  <b>F</b><sub>21</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>2</sub>) / |<b>r</b><sub>21</sub>|<sup>2</sup> ] <b>r̂</b><sub>21</sub><br><br>
  <b>3. Force Exerted on q<sub>1</sub> by q<sub>2</sub>:</b><br>
  <b>F</b><sub>12</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>2</sub>) / |<b>r</b><sub>12</sub>|<sup>2</sup> ] <b>r̂</b><sub>12</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>2</sub>) / |<b>r</b><sub>21</sub>|<sup>2</sup> ] (-<b>r̂</b><sub>21</sub>) = -<b>F</b><sub>21</sub><br><br>
  <b>Conclusion:</b> <b>F</b><sub>12</sub> = -<b>F</b><sub>21</sub>.<br>
  This proves that electrostatic forces between two charges are equal in magnitude, opposite in direction, and collinear, obeying <b>Newton's Third Law of Motion</b>.
  `)}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Dielectric Constant / Relative Permittivity (K or &epsilon;<sub>r</sub>)</h3>
  <p>When the two charges are placed in a material medium of absolute permittivity &epsilon; instead of vacuum, the force decreases due to polarization of the surrounding molecules:</p>
  ${eqBox("<b>F<sub>med</sub> = " + frac("1", "4&pi; &epsilon;") + " " + frac("q<sub>1</sub> q<sub>2</sub>", "r<sup>2</sup>") + " = " + frac("F<sub>vac</sub>", "K") + " &nbsp;|&nbsp; K = &epsilon;<sub>r</sub> = " + frac("&epsilon;", "&epsilon;<sub>0</sub>") + " = " + frac("F<sub>vac</sub>", "F<sub>med</sub>") + "</b>")}
  <p>Dielectric constant K is a dimensionless quantity. For vacuum K = 1, for dry air K &approx; 1.00054, for pure water K = 80.4, and for perfect conductors/metals <b>K = &infin;</b>.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Principle of Superposition &amp; Continuous Charge Distributions</h3>
  <p>When multiple point charges interact, the net electrostatic force acting on any given test charge q<sub>0</sub> is the vector sum of individual forces exerted on it by all other charges independently:</p>
  ${eqBox("<b>F<sub>net</sub> = F<sub>1</sub> + F<sub>2</sub> + F<sub>3</sub> + ... + F<sub>N</sub> = " + frac("q<sub>0</sub>", "4&pi;&epsilon;<sub>0</sub>") + " &Sigma;<sub>i=1</sub><sup>N</sup> " + frac("q<sub>i</sub>", "r<sub>i0</sub><sup>2</sup>") + " r̂<sub>i0</sub></b>")}

  <p>For macroscopic objects where charges are continuously distributed:</p>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>Linear Charge Density (&lambda;):</b> Charge per unit length along a thin wire: &lambda; = dq / dl [C m<sup>-1</sup>]. Force: <b>F</b> = [q<sub>0</sub> / (4&pi;&epsilon;<sub>0</sub>)] &int; [&lambda; dl / r<sup>2</sup>] <b>r̂</b>.</li>
    <li><b>Surface Charge Density (&sigma;):</b> Charge per unit surface area: &sigma; = dq / dA [C m<sup>-2</sup>]. Force: <b>F</b> = [q<sub>0</sub> / (4&pi;&epsilon;<sub>0</sub>)] &int;&int; [&sigma; dA / r<sup>2</sup>] <b>r̂</b>.</li>
    <li><b>Volume Charge Density (&rho;):</b> Charge per unit 3D volume: &rho; = dq / dV [C m<sup>-3</sup>]. Force: <b>F</b> = [q<sub>0</sub> / (4&pi;&epsilon;<sub>0</sub>)] &int;&int;&int; [&rho; dV / r<sup>2</sup>] <b>r̂</b>.</li>
  </ul>

  ${svg3DCardWrapper("1. COULOMB'S LAW & SUPERPOSITION PRINCIPLE", "Fig 1.1: Vector form of Coulomb's Law (F<sub>12</sub> = -F<sub>21</sub>) & Fig 1.2: Superposition Principle showing vector addition of forces on charge q<sub>0</sub>.", svgs.svg1_coulomb)}

  <!-- SECTION 4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">4. Electric Field, Field Lines &amp; Dipole Fields (Axial &amp; Equatorial)</h2>

  <p>The concept of an Electric Field was introduced by Michael Faraday to explain action-at-a-distance. A source charge Q modifies the surrounding space by establishing an electrostatic field <b>E</b>. When a test charge q<sub>0</sub> enters this region, it experiences an electrostatic force <b>F</b> = q<sub>0</sub> <b>E</b>.</p>

  ${defBox("Electric Field Intensity (<b>E</b>)", "Electric Field Intensity at any point in space is defined as the electrostatic force experienced per unit infinitesimal positive test charge placed at that point: <b>E</b> = lim<sub>q<sub>0</sub> &rarr; 0</sub> (<b>F</b> / q<sub>0</sub>). SI Unit: N C<sup>-1</sup> or V m<sup>-1</sup>. Dimensional Formula: [M L T<sup>-3</sup> A<sup>-1</sup>].")}

  <p>For an isolated source charge Q in vacuum at distance r:</p>
  ${eqBox("<b>E = " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " " + frac("Q", "r<sup>2</sup>") + " r̂ &nbsp; (Radially outwards if Q &gt; 0, radially inwards if Q &lt; 0)</b>")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Properties of Electric Field Lines</h3>
  <ol style="margin-left: 20px; line-height: 1.8;">
    <li><b>Origin and Termination:</b> Field lines originate continuously from positive charges and terminate perpendicularly on negative charges (or extend to infinity).</li>
    <li><b>Direction of Field:</b> The tangent drawn to an electric field line at any point indicates the direction of resultant electric field vector <b>E</b> at that point.</li>
    <li><b>Non-Intersection Rule:</b> Two electric field lines can NEVER intersect each other. If they did, two tangents could be drawn at the intersection point, implying two distinct directions of electric field at a single point, which is physically impossible.</li>
    <li><b>No Closed Loops:</b> Electric field lines never form closed loops. This fundamental property reflects the conservative nature of the electrostatic field (work done along closed loop &oint; <b>E</b> &sdot; d<b>l</b> = 0).</li>
    <li><b>Lateral Repulsion & Longitudinal Contraction:</b> Field lines tend to contract longitudinally (explaining attraction between unlike charges) and exert lateral pressure on each other (explaining repulsion between like charges).</li>
  </ol>

  ${svg3DCardWrapper("2. ELECTRIC FIELD PATTERNS", "Field line geometry for Isolated +q (radially outward), Isolated -q (radially inward), Electric Dipole (+ to -), and Like Charges (+ and +, displaying central Neutral Point N).", svgs.svg2_field_lines)}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Electric Dipole &amp; Dipole Moment</h3>
  ${defBox("Electric Dipole & Dipole Moment (<b>p</b>)", "An Electric Dipole is a pair of equal and opposite point charges (+q and -q) separated by a small distance 2a. The Electric Dipole Moment vector <b>p</b> is defined as the product of charge magnitude q and separation vector 2<b>a</b>: <b>p</b> = q (2<b>a</b>). Its SI unit is Coulomb-meter (C m) and it points from negative charge (-q) to positive charge (+q).")}

  ${stepDerivationBox("Electric Field on Axial Line (End-on Position)", `
  <b>1. Setup:</b> Consider an electric dipole consisting of charges -q at point A and +q at point B separated by distance 2a. Center of dipole is O.<br>
  Let P be an axial point on the axis line at distance r from center O.<br>
  Distance of P from +q is BP = (r - a).<br>
  Distance of P from -q is AP = (r + a).<br><br>
  <b>2. Individual Electric Fields at P:</b><br>
  - Field due to +q: E<sub>+</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / (r - a)<sup>2</sup> ] (directed along BP away from dipole).<br>
  - Field due to -q: E<sub>-</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / (r + a)<sup>2</sup> ] (directed along PA towards dipole).<br><br>
  <b>3. Net Axial Field:</b><br>
  Since E<sub>+</sub> &gt; E<sub>-</sub>, resultant field points along direction of dipole moment <b>p</b>:<br>
  E<sub>axial</sub> = E<sub>+</sub> - E<sub>-</sub> = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ 1 / (r - a)<sup>2</sup> - 1 / (r + a)<sup>2</sup> ]<br>
  E<sub>axial</sub> = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ (r + a)<sup>2</sup> - (r - a)<sup>2</sup> ] / [ (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ]<br>
  E<sub>axial</sub> = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ 4 a r ] / [ (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ] = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ 2 (q &times; 2a) r ] / [ (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ]<br><br>
  Substitute dipole moment p = q (2a):<br>
  <b>E<sub>axial</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ 2 p r / (r<sup>2</sup> - a<sup>2</sup>)<sup>2</sup> ]</b><br><br>
  <b>4. Short Dipole Approximation (r &gt;&gt; a):</b><br>
  Neglecting a<sup>2</sup> compared to r<sup>2</sup>:<br>
  <b>E<sub>axial</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ 2 p / r<sup>3</sup> ] &nbsp; (Strictly Parallel to <b>p</b>)</b>
  `)}

  ${stepDerivationBox("Electric Field on Equatorial Line (Broadside-on Position)", `
  <b>1. Setup:</b> Consider dipole -q at A and +q at B separated by 2a with center O. Let Q be a point on the perpendicular bisector at distance r from O.<br>
  Distance of Q from each charge: AQ = BQ = &radic;(r<sup>2</sup> + a<sup>2</sup>).<br><br>
  <b>2. Individual Field Magnitudes:</b><br>
  E<sub>+</sub> = E<sub>-</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / (r<sup>2</sup> + a<sup>2</sup>) ].<br><br>
  <b>3. Resolution into Components:</b><br>
  - Vertical components E<sub>+</sub> sin &theta; (upward) and E<sub>-</sub> sin &theta; (downward) are equal and opposite, hence cancel out completely.<br>
  - Horizontal components E<sub>+</sub> cos &theta; and E<sub>-</sub> cos &theta; act in the SAME direction (opposite to <b>p</b>):<br>
  E<sub>eq</sub> = E<sub>+</sub> cos &theta; + E<sub>-</sub> cos &theta; = 2 E<sub>+</sub> cos &theta;<br><br>
  From right triangle &Delta;OBQ: cos &theta; = Base / Hypotenuse = a / &radic;(r<sup>2</sup> + a<sup>2</sup>).<br>
  E<sub>eq</sub> = 2 [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q / (r<sup>2</sup> + a<sup>2</sup>) ] [ a / (r<sup>2</sup> + a<sup>2</sup>)<sup>1/2</sup> ]<br>
  E<sub>eq</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q &times; 2a) / (r<sup>2</sup> + a<sup>2</sup>)<sup>3/2</sup> ] = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ p / (r<sup>2</sup> + a<sup>2</sup>)<sup>3/2</sup> ]<br><br>
  <b>4. Short Dipole Approximation (r &gt;&gt; a):</b><br>
  <b>E<sub>eq</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ p / r<sup>3</sup> ] &nbsp; (Strictly Anti-parallel to <b>p</b>)</b><br><br>
  <b>5. Comparison Ratio:</b><br>
  <b>E<sub>axial</sub> / E<sub>eq</sub> = 2 : 1</b> (At identical distance r from short dipole).
  `)}

  ${svg3DCardWrapper("3. ELECTRIC DIPOLE FIELDS (AXIAL & EQUATORIAL)", "Fig 3.1: Axial Field E<sub>axial</sub> (parallel to <b>p</b>) & Fig 3.2: Equatorial Field resolution showing cancellation of sin components and addition of cos components (anti-parallel to <b>p</b>).", svgs.svg3_dipole)}

  <!-- SECTION 5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5. Torque on a Dipole in Uniform Electric Field &amp; Electric Flux</h2>

  ${stepDerivationBox("Torque on Electric Dipole in Uniform Field", `
  <b>1. Setup:</b> Consider an electric dipole of moment <b>p</b> placed in a uniform electric field <b>E</b> at an angle &theta;.<br>
  - Force on +q: <b>F</b><sub>+</sub> = +q <b>E</b> (along <b>E</b>).<br>
  - Force on -q: <b>F</b><sub>-</sub> = -q <b>E</b> (opposite to <b>E</b>).<br>
  Net translational force: <b>F</b><sub>net</sub> = +q<b>E</b> + (-q<b>E</b>) = 0.<br><br>
  <b>2. Calculation of Couple (Torque):</b><br>
  Since the two forces are equal, opposite, and act along different lines of action, they constitute a couple.<br>
  Perpendicular lever arm distance between action lines = 2a sin &theta;.<br>
  Torque magnitude &tau; = Force &times; Perpendicular distance = (q E) &times; (2a sin &theta;) = (q &times; 2a) E sin &theta;.<br>
  <b>&tau; = p E sin &theta; &nbsp;|&nbsp; In Vector Form: <b>&tau;</b> = <b>p</b> &times; <b>E</b></b><br><br>
  <b>3. Equilibrium Conditions:</b><br>
  - <b>Stable Equilibrium (&theta; = 0&deg;):</b> Torque &tau; = 0, Potential Energy U = -pE (minimum). Dipole aligns parallel to <b>E</b>.<br>
  - <b>Unstable Equilibrium (&theta; = 180&deg;):</b> Torque &tau; = 0, Potential Energy U = +pE (maximum). Dipole aligned anti-parallel to <b>E</b>.<br>
  - <b>Maximum Torque (&theta; = 90&deg;):</b> &tau;<sub>max</sub> = p E.
  `)}

  ${defBox("Electric Flux (&Phi;<sub>E</sub>)", "Electric Flux through an elementary surface area dA in an electric field is the scalar dot product of electric field <b>E</b> and area vector d<b>A</b>: d&Phi;<sub>E</sub> = <b>E</b> &sdot; d<b>A</b> = E dA cos &theta;. Total flux through surface A is: &Phi;<sub>E</sub> = &int;&int; <b>E</b> &sdot; d<b>A</b>. SI Unit: N m<sup>2</sup> C<sup>-1</sup> or Volt meter (V m).")}

  ${svg3DCardWrapper("4. TORQUE ON DIPOLE & ELECTRIC FLUX", "Fig 4.1: Torque couple acting on dipole (<b>&tau;</b> = <b>p</b> &times; <b>E</b>) & Fig 4.2: Electric Flux &Phi;<sub>E</sub> through 3D area patch dA.", svgs.svg4_torque_flux)}

  <!-- SECTION 6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">6. Gauss's Theorem &amp; Its 3 Core Applications</h2>

  ${defBox("Gauss's Theorem", "Gauss's Theorem states that the total outward electric flux &Phi;<sub>E</sub> through any closed 3D Gaussian surface in free space is equal to 1/&epsilon;<sub>0</sub> times the net algebraic electric charge enclosed inside the surface: &oint; <b>E</b> &sdot; d<b>A</b> = q<sub>enclosed</sub> / &epsilon;<sub>0</sub>.")}

  ${stepDerivationBox("Application 1: Infinitely Long Straight Uniformly Charged Wire", `
  <b>1. Setup:</b> Consider an infinitely long thin wire carrying uniform linear charge density &lambda; = dq/dl.<br>
  By cylindrical symmetry, electric field <b>E</b> is directed radially outwards.<br>
  Construct a coaxial cylindrical Gaussian surface of radius r and length L.<br>
  Enclosed charge: q<sub>enclosed</sub> = &lambda; L.<br><br>
  <b>2. Flux through 3 Surface Segments:</b><br>
  - Top Flat End (S<sub>1</sub>): <b>E</b> &perp; d<b>A</b> &rArr; &Phi;<sub>1</sub> = &int; E dA cos 90&deg; = 0.<br>
  - Bottom Flat End (S<sub>2</sub>): <b>E</b> &perp; d<b>A</b> &rArr; &Phi;<sub>2</sub> = &int; E dA cos 90&deg; = 0.<br>
  - Curved Cylindrical Surface (S<sub>3</sub>): <b>E</b> || d<b>A</b> &rArr; &Phi;<sub>3</sub> = &int; E dA cos 0&deg; = E &int; dA = E (2&pi; r L).<br><br>
  <b>3. Applying Gauss's Law:</b><br>
  &Phi;<sub>total</sub> = 0 + 0 + E (2&pi; r L) = q<sub>enclosed</sub> / &epsilon;<sub>0</sub><br>
  E (2&pi; r L) = &lambda; L / &epsilon;<sub>0</sub><br>
  <b>E = " + frac("&lambda;", "2&pi; &epsilon;<sub>0</sub> r") + " &nbsp; (E &prop; 1 / r)</b>
  `)}

  ${stepDerivationBox("Application 2: Uniformly Charged Infinite Plane Sheet", `
  <b>1. Setup:</b> Consider an infinite thin non-conducting plane sheet with uniform surface charge density &sigma; = dq/dA.<br>
  Electric field lines emerge perpendicularly outwards from both sides.<br>
  Construct a cylindrical pillbox Gaussian surface of cross-sectional area A piercing normally through the sheet.<br>
  Enclosed charge: q<sub>enclosed</sub> = &sigma; A.<br><br>
  <b>2. Flux Calculation:</b><br>
  - Curved Surface: <b>E</b> || surface &rArr; &Phi;<sub>curved</sub> = 0.<br>
  - Left Flat Cap: <b>E</b> || d<b>A</b> &rArr; &Phi;<sub>left</sub> = E A.<br>
  - Right Flat Cap: <b>E</b> || d<b>A</b> &rArr; &Phi;<sub>right</sub> = E A.<br>
  Total Flux &Phi;<sub>total</sub> = E A + E A = 2 E A.<br><br>
  <b>3. Applying Gauss's Law:</b><br>
  2 E A = &sigma; A / &epsilon;<sub>0</sub> &rArr; <b>E = " + frac("&sigma;", "2 &epsilon;<sub>0</sub>") + " &nbsp; (Uniform, completely independent of distance r)</b><br><br>
  <b>Case of Two Oppositely Charged Sheets (+&sigma; and -&sigma;):</b><br>
  - Between the sheets: E<sub>net</sub> = &sigma;/(2&epsilon;<sub>0</sub>) + &sigma;/(2&epsilon;<sub>0</sub>) = <b>&sigma; / &epsilon;<sub>0</sub></b>.<br>
  - Outside the sheets: E<sub>net</sub> = &sigma;/(2&epsilon;<sub>0</sub>) - &sigma;/(2&epsilon;<sub>0</sub>) = <b>0</b>.
  `)}

  ${stepDerivationBox("Application 3: Uniformly Charged Thin Spherical Shell (Radius R, Charge Q)", `
  <b>1. Case I: Outside the Shell (r &ge; R):</b><br>
  Construct a concentric spherical Gaussian surface of radius r &ge; R.<br>
  By spherical symmetry, <b>E</b> is uniform and radial: &Phi; = &oint; <b>E</b> &sdot; d<b>A</b> = E (4&pi; r<sup>2</sup>).<br>
  Enclosed charge q<sub>enclosed</sub> = Q.<br>
  By Gauss's Law: E (4&pi; r<sup>2</sup>) = Q / &epsilon;<sub>0</sub> &rArr; <b>E<sub>out</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ Q / r<sup>2</sup> ]</b>.<br>
  (For points outside, the entire charge behaves as if concentrated at the center).<br><br>
  <b>2. Case II: At the Surface (r = R):</b><br>
  <b>E<sub>surface</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ Q / R<sup>2</sup> ] = &sigma; / &epsilon;<sub>0</sub></b>.<br><br>
  <b>3. Case III: Inside the Shell (r &lt; R):</b><br>
  Construct a concentric spherical Gaussian surface of radius r &lt; R.<br>
  Since all charges reside exclusively on the outer surface of the shell, enclosed charge is strictly zero (q<sub>enclosed</sub> = 0).<br>
  By Gauss's Law: E (4&pi; r<sup>2</sup>) = 0 / &epsilon;<sub>0</sub> &rArr; <b>E<sub>in</sub> = 0</b>.<br>
  This fundamental result is the basis of <b>Electrostatic Shielding</b>.
  `)}

  ${svg3DCardWrapper("5. GAUSS'S THEOREM: 3 CORE APPLICATIONS", "Fig 5.1: Infinitely Long Wire E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r), Fig 5.2: Infinite Plane Sheet E = &sigma; / (2&epsilon;<sub>0</sub>), & Fig 5.3: Spherical Shell E<sub>out</sub> vs E<sub>in</sub> = 0.", svgs.svg5_gauss_all)}
`;
}

module.exports = { getTheoryPart1 };
