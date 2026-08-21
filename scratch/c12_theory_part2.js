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

function getTheoryPart2(svgs) {
  return `
  <!-- SECTION 7 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">7. Electric Potential &amp; Potential Difference</h2>

  <p>Just as a mass in a gravitational field possesses gravitational potential energy due to conservative gravitational forces, stationary charges in an electrostatic field possess electrostatic potential energy. Electric potential is the scalar energy counterpart to the vector electric field <b>E</b>.</p>

  ${defBox("Electric Potential (V)", "Electric Potential V at a point in an electrostatic field is defined as the work done by an external agent per unit positive infinitesimal test charge in slowly bringing it from infinity to that point against electrostatic forces without acceleration: V = W<sub>&infin;&rarr;P</sub> / q<sub>0</sub>. SI Unit: Volt (V = J C<sup>-1</sup>). Dimensional Formula: [M L<sup>2</sup> T<sup>-3</sup> A<sup>-1</sup>].")}

  ${defBox("Electric Potential Difference (&Delta;V)", "Electric Potential Difference between two points A and B is defined as the work done per unit positive test charge in carrying it from point A to point B: V<sub>B</sub> - V<sub>A</sub> = W<sub>A&rarr;B</sub> / q<sub>0</sub> = -&int;<sub>A</sub><sup>B</sup> <b>E</b> &sdot; d<b>l</b>.")}

  ${stepDerivationBox("Relation between Electric Field E and Potential Gradient dV/dr", `
  <b>1. Setup:</b> Consider two closely situated equipotential surfaces A and B separated by small perpendicular distance dr, having potentials V and (V - dV).<br><br>
  <b>2. Work Done:</b> Small work done dW in moving unit positive test charge (+1 C) from surface B to A against electric field <b>E</b> is:<br>
  dW = <b>F</b> &sdot; d<b>r</b> = (q<sub>0</sub> E) dr cos 180&deg; = -(1) E dr = -E dr.<br><br>
  <b>3. Equating with Potential Difference:</b><br>
  By definition: dW = V<sub>A</sub> - V<sub>B</sub> = V - (V - dV) = dV.<br>
  Therefore: -E dr = dV &rArr; <b>E = - (dV / dr)</b>.<br><br>
  <b>Physical Interpretation of Negative Sign:</b><br>
  1. The electric field vector <b>E</b> always points in the direction of steepest rate of decrease in electrostatic potential.<br>
  2. The magnitude of electric field equals the spatial rate of change of potential (potential gradient).
  `)}

  <!-- SECTION 8 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">8. Potential due to a Point Charge, Dipole &amp; System of Charges</h2>

  ${stepDerivationBox("Electric Potential due to an Isolated Point Charge Q", `
  <b>1. Setup:</b> Consider an isolated positive point charge +Q at origin O in vacuum. We calculate potential V at point P at distance r from O.<br>
  Let a unit test charge (+1 C) be at intermediate point A at distance x from O.<br>
  Electrostatic repulsive force on +1 C is: F = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ Q / x<sup>2</sup> ] (directed along OA away from O).<br><br>
  <b>2. Small Work Done:</b> Work dW in moving test charge through displacement dx towards O against force F is:<br>
  dW = <b>F</b> &sdot; d<b>x</b> = F dx cos 180&deg; = -F dx = - [ Q / (4&pi;&epsilon;<sub>0</sub> x<sup>2</sup>) ] dx.<br><br>
  <b>3. Total Work Done from &infin; to r:</b><br>
  V = W = &int;<sub>&infin;</sub><sup>r</sup> - [ Q / (4&pi;&epsilon;<sub>0</sub> x<sup>2</sup>) ] dx = - [ Q / (4&pi;&epsilon;<sub>0</sub>) ] [ -1/x ]<sub>&infin;</sub><sup>r</sup> = [ Q / (4&pi;&epsilon;<sub>0</sub>) ] [ 1/r - 1/&infin; ]<br><br>
  <b>V = " + frac("1", "4&pi; &epsilon;<sub>0</sub>") + " " + frac("Q", "r") + " &nbsp; (V &prop; 1 / r)</b>
  `)}

  ${stepDerivationBox("Electric Potential due to an Electric Dipole at General Point (r, &theta;)", `
  <b>1. Setup:</b> Consider dipole charges -q at A and +q at B separated by 2a with center O. Let P be a point with polar coordinates (r, &theta;), where r &gt;&gt; a.<br>
  Distances of P from +q and -q are r<sub>1</sub> &approx; r - a cos &theta; and r<sub>2</sub> &approx; r + a cos &theta;.<br><br>
  <b>2. Algebraic Potential Sum:</b><br>
  V = V<sub>+</sub> + V<sub>-</sub> = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ 1 / r<sub>1</sub> - 1 / r<sub>2</sub> ] = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ 1 / (r - a cos &theta;) - 1 / (r + a cos &theta;) ]<br>
  V = [ q / (4&pi;&epsilon;<sub>0</sub>) ] [ (2 a cos &theta;) / (r<sup>2</sup> - a<sup>2</sup> cos<sup>2</sup> &theta;) ]<br><br>
  Substitute dipole moment p = q (2a) and neglect a<sup>2</sup> cos<sup>2</sup> &theta; for r &gt;&gt; a:<br>
  <b>V = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (p cos &theta;) / r<sup>2</sup> ]</b><br><br>
  <b>3. Special Cases:</b><br>
  - <b>Axial Line (&theta; = 0&deg;):</b> cos 0&deg; = 1 &rArr; <b>V<sub>axial</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ p / r<sup>2</sup> ]</b>.<br>
  - <b>Equatorial Line (&theta; = 90&deg;):</b> cos 90&deg; = 0 &rArr; <b>V<sub>eq</sub> = 0</b>. (Zero potential at all equatorial points).
  `)}

  <!-- SECTION 9 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">9. Equipotential Surfaces &amp; Electrostatic Potential Energy</h2>

  ${defBox("Equipotential Surface", "An Equipotential Surface is any continuous locus of spatial points where the electrostatic potential has the exact same uniform constant value throughout (V = constant).")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Fundamental Properties of Equipotential Surfaces</h3>
  <ol style="margin-left: 20px; line-height: 1.8;">
    <li><b>Zero Work Done:</b> The work done in moving any test charge q<sub>0</sub> between any two points A and B on an equipotential surface is strictly zero: W = q<sub>0</sub> (V<sub>B</sub> - V<sub>A</sub>) = q<sub>0</sub> (0) = 0.</li>
    <li><b>Normal Electric Field Lines:</b> Since dW = <b>E</b> &sdot; d<b>l</b> = E dl cos &theta; = 0, cos &theta; = 0 &rArr; &theta; = 90&deg;. Electric field lines are ALWAYS strictly perpendicular to equipotential surfaces at every point.</li>
    <li><b>Non-Intersection Principle:</b> Two equipotential surfaces can NEVER intersect. If they did, two different potential values would exist at the line of intersection, which is physically impossible.</li>
    <li><b>Surface Spacing &amp; Field Strength:</b> From E = -dV/dr &rArr; dr = -dV/E. For a constant potential step dV, the spacing dr between adjacent equipotentials is inversely proportional to electric field strength (surfaces are crowded in strong field regions).</li>
  </ol>

  ${stepDerivationBox("Electrostatic Potential Energy of System of Charges", `
  <b>1. System of Two Point Charges:</b><br>
  - Work in bringing q<sub>1</sub> to <b>r</b><sub>1</sub> in empty space: W<sub>1</sub> = 0.<br>
  - Potential at <b>r</b><sub>2</sub> due to q<sub>1</sub> is V<sub>1</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ q<sub>1</sub> / r<sub>12</sub> ].<br>
  - Work in bringing q<sub>2</sub>: W<sub>2</sub> = q<sub>2</sub> V<sub>1</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>2</sub>) / r<sub>12</sub> ].<br>
  <b>U = W<sub>1</sub> + W<sub>2</sub> = [ 1 / (4&pi;&epsilon;<sub>0</sub>) ] [ (q<sub>1</sub> q<sub>2</sub>) / r<sub>12</sub> ]</b><br><br>
  <b>2. Electric Dipole in External Field E:</b><br>
  Work done in rotating dipole from &theta;<sub>0</sub> = 90&deg; (reference zero energy) to &theta;:<br>
  U = &int;<sub>90&deg;</sub><sup>&theta;</sup> &tau; d&theta; = &int;<sub>90&deg;</sub><sup>&theta;</sup> p E sin &theta; d&theta; = p E [-cos &theta;]<sub>90&deg;</sub><sup>&theta;</sup> = -p E cos &theta;.<br>
  <b>U = - p E cos &theta; = - <b>p</b> &sdot; <b>E</b></b>
  `)}

  ${svg3DCardWrapper("6. EQUIPOTENTIAL SURFACES & POTENTIAL", "Fig 6.1: Concentric spherical equipotentials for isolated charge +q & Fig 6.2: Equidistant parallel equipotential planes in a uniform field (E = -dV/dr).", svgs.svg6_potential_equipotential)}

  <!-- SECTION 10 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">10. Conductors, Insulators, Free &amp; Bound Charges</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Free Charges vs Bound Charges Inside Conductors</h3>
  <p>In metallic conductors (e.g. Copper, Silver), valence electrons easily detach from parent atoms, creating a sea of <b>free charges</b> (free electrons) that drift freely under electric forces. The remaining heavy positive atomic nuclei and core electrons remain rigidly locked in the crystal lattice, forming <b>bound charges</b> that cannot move.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) 6 Electrostatic Properties of Conductors</h3>
  <ul style="margin-left: 20px; line-height: 1.8;">
    <li><b>1. Electric Field Inside Conductor is Zero (E<sub>in</sub> = 0):</b> When placed in external field <b>E</b><sub>0</sub>, free electrons drift to the surface, establishing an induced internal field <b>E</b><sub>ind</sub> that exactly cancels <b>E</b><sub>0</sub> until <b>E</b><sub>net</sub> = 0.</li>
    <li><b>2. Electric Field at Surface is Strictly Normal (E = &sigma;/&epsilon;<sub>0</sub>):</b> If a tangential component existed, surface electrons would experience force and flow, violating electrostatic equilibrium.</li>
    <li><b>3. Static Charge Resides Entirely on Outer Surface:</b> By Gauss's Law, enclosing any interior volume yields &Phi; = &oint; <b>E</b> &sdot; d<b>A</b> = 0 &rArr; q<sub>enclosed</sub> = 0.</li>
    <li><b>4. Potential is Constant Throughout Volume:</b> Since E = -dV/dr = 0 everywhere inside, V is constant and equal to surface potential.</li>
    <li><b>5. Electrostatic Shielding:</b> The electric field inside any hollow metallic cavity is strictly zero (E = 0), regardless of external charge or field. Delicate electronic instruments and coaxial cables use this principle to shield against external noise.</li>
    <li><b>6. Action of Points (Corona Discharge):</b> At sharp edges and pointed tips, radius of curvature r is very small, resulting in huge surface charge density (&sigma; &prop; 1/r) and extremely strong localized electric fields that ionize surrounding air.</li>
  </ul>

  ${svg3DCardWrapper("7. CONDUCTORS IN EQUILIBRIUM & SHIELDING", "Fig 7.1: Conductor in external field showing E<sub>net</sub> = 0 inside & Fig 7.2: Electrostatic Shielding in a hollow metallic cavity (Faraday Cage).", svgs.svg7_conductor_shielding)}

  <!-- SECTION 11 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">11. Dielectrics &amp; Electric Polarization</h2>

  ${defBox("Dielectrics & Electric Polarization (<b>P</b>)", "Dielectrics are non-conducting insulating substances that transmit electrical effects without conducting. Electric Polarization <b>P</b> is defined as the induced dipole moment per unit volume inside a dielectric under an external electric field: <b>P</b> = &chi;<sub>e</sub> &epsilon;<sub>0</sub> <b>E</b>, where &chi;<sub>e</sub> is the electric susceptibility of the dielectric medium. SI Unit: C m<sup>-2</sup>.")}

  <p><b>Mechanism of Field Reduction:</b> When a dielectric slab is placed in an external field <b>E</b><sub>0</sub>, atomic dipoles align, creating induced bound surface charges (+&sigma;<sub>p</sub> on one face and -&sigma;<sub>p</sub> on the other). These bound charges generate an internal opposing field <b>E</b><sub>p</sub> = &sigma;<sub>p</sub> / &epsilon;<sub>0</sub>.</p>
  ${eqBox("<b>Net Electric Field: E = E<sub>0</sub> - E<sub>p</sub> = " + frac("E<sub>0</sub>", "K") + " &nbsp;|&nbsp; K = 1 + &chi;<sub>e</sub> &gt; 1</b>")}

  <!-- SECTION 12 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">12. Capacitors, Capacitance &amp; Parallel Plate Capacitor (With &amp; Without Dielectric)</h2>

  ${defBox("Capacitor & Capacitance (C)", "A Capacitor is an arrangement of two conducting plates separated by an insulating dielectric medium designed to store electrostatic charge and electrical potential energy. Capacitance C is defined as the ratio of stored charge Q on either plate to the resulting potential difference V between them: C = Q / V. SI Unit: Farad (1 F = 1 C V<sup>-1</sup>). Dimensional Formula: [M<sup>-1</sup> L<sup>-2</sup> T<sup>4</sup> A<sup>2</sup>].")}

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Working Principle of a Capacitor (Step-by-Step Mechanism)</h3>
  <p>How does a capacitor store large charges at relatively low potential? Consider the step-wise physical mechanism:</p>
  <ol style="margin-left: 20px; line-height: 1.8;">
    <li><b>Step 1 (Isolated Plate A):</b> Give positive charge +Q to an insulated metal plate A. Its potential rises to a maximum value V<sub>1</sub>. Its capacity to hold more charge is limited because adding more charge raises its potential further, causing charge leakage into surrounding air.</li>
    <li><b>Step 2 (Bringing Uncharged Plate B Close):</b> Place an uncharged conducting plate B near plate A. Due to electrostatic induction, negative bound charge -Q is induced on the near face of B, and positive free charge +Q is induced on the far face of B. The negative charge on B attempts to reduce the potential of A, while the positive charge on B attempts to increase it. Because negative charge is closer to A, the net potential of A drops slightly.</li>
    <li><b>Step 3 (Earthing Plate B):</b> Connect the outer face of plate B to ground (Earth). Free positive electrons flow from Earth into plate B, completely neutralizing the positive charge on the outer face. The negative charge remains tightly bound by plate A's positive field. This bound negative charge drastically lowers the potential of plate A to a new low value V' &lt;&lt; V<sub>1</sub>.</li>
    <li><b>Conclusion:</b> Since C = Q / V', as potential V' drops dramatically for the same charge Q, the capacitance C multiplies enormously! Thus, <b>a capacitor stores large amounts of charge and energy by reducing potential through an earthed secondary plate</b>.</li>
  </ol>

  ${svg3DCardWrapper("8. WORKING PRINCIPLE OF A CAPACITOR", "Fig 8: Step 1 (Isolated Plate A) &rarr; Step 2 (Plate B Induction) &rarr; Step 3 (Earthing Plate B) showing dramatic potential drop and huge capacitance multiplication.", svgs.svg8_capacitor_principle)}

  ${stepDerivationBox("Derivation 1: Parallel Plate Capacitor in Vacuum", `
  <b>1. Setup:</b> Consider two parallel conducting plates P<sub>1</sub> and P<sub>2</sub> each of area A separated by small distance d in vacuum, carrying charges +Q and -Q.<br>
  Surface charge density: &sigma; = Q / A.<br><br>
  <b>2. Electric Field Between Plates:</b><br>
  By Gauss's Law, field due to +plate is &sigma;/(2&epsilon;<sub>0</sub>) (away) and -plate is &sigma;/(2&epsilon;<sub>0</sub>) (towards).<br>
  E<sub>0</sub> = &sigma;/(2&epsilon;<sub>0</sub>) + &sigma;/(2&epsilon;<sub>0</sub>) = &sigma; / &epsilon;<sub>0</sub> = Q / (&epsilon;<sub>0</sub> A).<br><br>
  <b>3. Potential Difference & Capacitance:</b><br>
  Potential difference V<sub>0</sub> = E<sub>0</sub> &times; d = [ Q / (&epsilon;<sub>0</sub> A) ] &times; d.<br>
  <b>C<sub>0</sub> = " + frac("Q", "V<sub>0</sub>") + " = " + frac("&epsilon;<sub>0</sub> A", "d") + "</b>
  `)}

  ${examTrapBox("Fringing Effect (Edge Effect) of Electric Field", "Near the edges of capacitor plates, electric field lines bulge outwards into curved fringing patterns due to electrostatic repulsion between like charges at boundaries. This non-uniformity is called the Fringing Effect. When plate dimensions are much larger than separation distance (d &lt;&lt; &radic;A), the fringing field at edges is negligible compared to the uniform central field, and formula C = &epsilon;<sub>0</sub>A/d is highly accurate.")}

  ${stepDerivationBox("Derivation 2: Parallel Plate Capacitor with Dielectric Slab of Thickness t (t < d)", `
  <b>1. Setup:</b> A dielectric slab of thickness t and dielectric constant K is placed between plates of separation d.<br>
  - Electric field in vacuum region of thickness (d - t): E<sub>0</sub> = Q / (&epsilon;<sub>0</sub> A).<br>
  - Electric field inside dielectric slab of thickness t: E<sub>m</sub> = E<sub>0</sub> / K = Q / (K &epsilon;<sub>0</sub> A).<br><br>
  <b>2. Total Potential Difference V:</b><br>
  V = E<sub>0</sub> (d - t) + E<sub>m</sub> t = E<sub>0</sub> (d - t) + (E<sub>0</sub> / K) t = E<sub>0</sub> [ (d - t) + (t / K) ]<br>
  V = [ Q / (&epsilon;<sub>0</sub> A) ] [ d - t + (t / K) ].<br><br>
  <b>3. Capacitance:</b><br>
  <b>C = " + frac("Q", "V") + " = " + frac("&epsilon;<sub>0</sub> A", "d - t + (t / K)") + "</b><br><br>
  <b>Special Case (Completely Filled, t = d):</b><br>
  C = &epsilon;<sub>0</sub> A / (d/K) = <b>K (" + frac("&epsilon;<sub>0</sub> A", "d") + ") = K C<sub>0</sub></b>. (Capacitance increases K times).
  `)}

  ${stepDerivationBox("Derivation 3: Parallel Plate Capacitor with Conducting (Metallic) Slab of Thickness t (t < d)", `
  <b>1. Setup:</b> A metallic conducting slab of thickness t is inserted between plates.<br>
  Inside a conductor, electrostatic field is strictly zero: E<sub>in</sub> = 0.<br>
  Electric field E<sub>0</sub> exists only in the air space of thickness (d - t).<br><br>
  <b>2. Potential Difference & Capacitance:</b><br>
  V = E<sub>0</sub> (d - t) = [ Q / (&epsilon;<sub>0</sub> A) ] (d - t).<br>
  <b>C = " + frac("Q", "V") + " = " + frac("&epsilon;<sub>0</sub> A", "d - t") + " = C<sub>0</sub> " + frac("d", "d - t") + " &gt; C<sub>0</sub></b>
  `)}

  <h3 style="color: ${themeColor}; margin-top: 25px;">(ii) Board Exam Master Comparison Matrix: Dielectric Slab Insertion</h3>
  <p>When a dielectric slab of constant K is inserted into a capacitor, the outcome depends critically on whether the DC charging battery remains connected or is disconnected:</p>

  <div style="overflow-x: auto; margin: 18px 0;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px; background: rgba(0,0,0,0.3); border: 1.5px solid ${themeColor}; border-radius: 8px;">
      <thead>
        <tr style="background: rgba(255, 81, 47, 0.25); color: #FFFFFF; border-bottom: 2px solid ${themeColor};">
          <th style="padding: 12px 14px; border: 1px solid rgba(255,255,255,0.15);">Physical Parameter</th>
          <th style="padding: 12px 14px; border: 1px solid rgba(255,255,255,0.15);">Case A: Battery Remains CONNECTED</th>
          <th style="padding: 12px 14px; border: 1px solid rgba(255,255,255,0.15);">Case B: Battery is DISCONNECTED</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFD700; font-weight: bold;">1. Potential Difference (V)</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #76FF03;"><b>Remains Constant (V = V<sub>0</sub>)</b></td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FF512F;"><b>Decreases (V' = V<sub>0</sub> / K)</b></td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFD700; font-weight: bold;">2. Capacitance (C)</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #76FF03;"><b>Increases (C' = K C<sub>0</sub>)</b></td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #76FF03;"><b>Increases (C' = K C<sub>0</sub>)</b></td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFD700; font-weight: bold;">3. Stored Charge (Q)</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #76FF03;"><b>Increases (Q' = K Q<sub>0</sub>)</b></td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00E5FF;"><b>Remains Constant (Q = Q<sub>0</sub>)</b></td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFD700; font-weight: bold;">4. Electric Field (E)</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #76FF03;"><b>Remains Constant (E = E<sub>0</sub>)</b></td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FF512F;"><b>Decreases (E' = E<sub>0</sub> / K)</b></td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFD700; font-weight: bold;">5. Stored Energy (U)</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #76FF03;"><b>Increases (U' = K U<sub>0</sub>)</b></td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FF512F;"><b>Decreases (U' = U<sub>0</sub> / K)</b></td>
        </tr>
      </tbody>
    </table>
  </div>

  ${solvedExampleBox(2, "A parallel plate capacitor with air between plates has a capacitance of 8 pF. What will be the capacitance if distance between plates is reduced by half, and space between them is filled with a substance of dielectric constant K = 6?",
  "Given initial capacitance C<sub>0</sub> = &epsilon;<sub>0</sub> A / d = 8 pF.<br>New separation d' = d / 2 and dielectric constant K = 6.<br>New capacitance C' = K &epsilon;<sub>0</sub> A / d' = K &epsilon;<sub>0</sub> A / (d/2) = 2 K (&epsilon;<sub>0</sub> A / d) = 2 K C<sub>0</sub>.<br>C' = 2 &times; 6 &times; 8 pF = <b>96 pF</b>.")}

  <!-- SECTION 13 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">13. Combinations of Capacitors (Series &amp; Parallel) &amp; Energy Stored</h2>

  ${stepDerivationBox("Series Combination of Capacitors", `
  <b>1. Setup:</b> Connect three capacitors C<sub>1</sub>, C<sub>2</sub>, C<sub>3</sub> in series across total potential difference V.<br>
  In series, the SAME charge Q flows through each capacitor, while applied voltage divides: V = V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub>.<br><br>
  <b>2. Derivation:</b><br>
  V<sub>1</sub> = Q / C<sub>1</sub>, V<sub>2</sub> = Q / C<sub>2</sub>, V<sub>3</sub> = Q / C<sub>3</sub>.<br>
  Let equivalent capacitance be C<sub>s</sub>, so V = Q / C<sub>s</sub>.<br>
  Q / C<sub>s</sub> = Q / C<sub>1</sub> + Q / C<sub>2</sub> + Q / C<sub>3</sub>.<br>
  <b>1 / C<sub>s</sub> = 1 / C<sub>1</sub> + 1 / C<sub>2</sub> + 1 / C<sub>3</sub></b><br>
  (Equivalent series capacitance is ALWAYS smaller than the smallest individual capacitor).
  `)}

  ${stepDerivationBox("Parallel Combination of Capacitors", `
  <b>1. Setup:</b> Connect three capacitors C<sub>1</sub>, C<sub>2</sub>, C<sub>3</sub> in parallel across common potential difference V.<br>
  Potential difference V across each capacitor is identical, while total charge divides: Q = Q<sub>1</sub> + Q<sub>2</sub> + Q<sub>3</sub>.<br><br>
  <b>2. Derivation:</b><br>
  Q<sub>1</sub> = C<sub>1</sub> V, Q<sub>2</sub> = C<sub>2</sub> V, Q<sub>3</sub> = C<sub>3</sub> V.<br>
  Let equivalent capacitance be C<sub>p</sub>, so Q = C<sub>p</sub> V.<br>
  C<sub>p</sub> V = C<sub>1</sub> V + C<sub>2</sub> V + C<sub>3</sub> V.<br>
  <b>C<sub>p</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub></b><br>
  (Equivalent parallel capacitance is the direct algebraic sum of individual capacitances).
  `)}

  ${stepDerivationBox("Energy Stored in a Capacitor & Energy Density", `
  <b>1. Energy Derivation:</b><br>
  Let instantaneous charge be q and potential be v = q / C. Small work dW in adding charge dq is: dW = v dq = (q/C) dq.<br>
  Total work done in charging from q = 0 to Q:<br>
  W = &int;<sub>0</sub><sup>Q</sup> (q/C) dq = (1/C) [ q<sup>2</sup> / 2 ]<sub>0</sub><sup>Q</sup> = Q<sup>2</sup> / (2C).<br>
  <b>U = " + frac("1", "2") + " C V<sup>2</sup> = " + frac("Q<sup>2</sup>", "2 C") + " = " + frac("1", "2") + " Q V</b><br><br>
  <b>2. Electrostatic Energy Density (u):</b><br>
  Substitute C = &epsilon;<sub>0</sub> A / d and V = E d:<br>
  U = 1/2 (&epsilon;<sub>0</sub> A / d) (E d)<sup>2</sup> = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> (A d) = 1/2 &epsilon;<sub>0</sub> E<sup>2</sup> &times; Volume.<br>
  <b>u = U / Volume = " + frac("1", "2") + " &epsilon;<sub>0</sub> E<sup>2</sup> [J m<sup>-3</sup>]</b>
  `)}

  ${stepDerivationBox("Loss of Electrostatic Energy on Sharing Charges between Two Capacitors", `
  <b>1. System Description:</b> Let two capacitors C<sub>1</sub> and C<sub>2</sub> charged to initial potentials V<sub>1</sub> and V<sub>2</sub> be connected in parallel.<br>
  Initial Stored Energy: U<sub>i</sub> = 1/2 C<sub>1</sub> V<sub>1</sub><sup>2</sup> + 1/2 C<sub>2</sub> V<sub>2</sub><sup>2</sup>.<br><br>
  <b>2. Common Potential V:</b> Total Charge / Total Capacitance = (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>) / (C<sub>1</sub> + C<sub>2</sub>).<br>
  Final Stored Energy: U<sub>f</sub> = 1/2 (C<sub>1</sub> + C<sub>2</sub>) V<sup>2</sup> = 1/2 (C<sub>1</sub> V<sub>1</sub> + C<sub>2</sub> V<sub>2</sub>)<sup>2</sup> / (C<sub>1</sub> + C<sub>2</sub>).<br><br>
  <b>3. Energy Loss (&Delta;U):</b><br>
  &Delta;U = U<sub>i</sub> - U<sub>f</sub> = <b>" + frac("C<sub>1</sub> C<sub>2</sub> (V<sub>1</sub> - V<sub>2</sub>)<sup>2</sup>", "2 (C<sub>1</sub> + C<sub>2</sub>)") + " &ge; 0</b>.<br>
  This positive energy loss is dissipated as thermal heat in connecting wires and electromagnetic radiation.
  `)}

  ${svg3DCardWrapper("9. CAPACITORS & COMBINATIONS", "Fig 9.1: Parallel plate capacitor with dielectric slab C = &epsilon;<sub>0</sub>A / (d - t + t/K) & Fig 9.2: Series (1/C<sub>s</sub> = &Sigma; 1/C<sub>i</sub>) and Parallel (C<sub>p</sub> = &Sigma; C<sub>i</sub>) circuits.", svgs.svg9_capacitors_combinations)}

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: rgba(255, 81, 47, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-top: 35px; margin-bottom: 15px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">⚡ Master Revision Cheat Sheet</h2>
    <p class="text-center" style="color: ${themeColor}; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Summary Formulae for JKBOSE / NCERT Unit I: Electrostatics (09 Marks)</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Forces &amp; Fields:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">F = [1 / (4&pi;&epsilon;<sub>0</sub>)] (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>)<br>E<sub>axial</sub> = 2p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>)<br>E<sub>eq</sub> = p / (4&pi;&epsilon;<sub>0</sub> r<sup>3</sup>)<br><b>&tau;</b> = <b>p</b> &times; <b>E</b></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Gauss's Law Applications:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">Wire: E = &lambda; / (2&pi;&epsilon;<sub>0</sub> r)<br>Sheet: E = &sigma; / (2&epsilon;<sub>0</sub>)<br>Shell: E<sub>out</sub> = Q / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>), E<sub>in</sub> = 0</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Potential &amp; Energy:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">V = Q / (4&pi;&epsilon;<sub>0</sub> r)<br>V<sub>dipole</sub> = p cos &theta; / (4&pi;&epsilon;<sub>0</sub> r<sup>2</sup>)<br>U = q<sub>1</sub> q<sub>2</sub> / (4&pi;&epsilon;<sub>0</sub> r)<br>U<sub>dipole</sub> = -<b>p</b> &sdot; <b>E</b></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 12px 14px; border-left: 3.5px solid ${themeColor}; border-radius: 6px;">
        <b style='color: ${themeColor}; display: block; margin-bottom: 4px;'>• Capacitance &amp; Dielectrics:</b>
        <span style="color: #FFFFFF; line-height: 1.65; display: block;">C<sub>0</sub> = &epsilon;<sub>0</sub> A / d, C = K C<sub>0</sub><br>1/C<sub>s</sub> = &Sigma; 1/C<sub>i</sub><br>C<sub>p</sub> = &Sigma; C<sub>i</sub><br>U = 1/2 C V<sup>2</sup> = Q<sup>2</sup> / (2C)</span>
      </div>
    </div>
  </div>
`;
}

module.exports = { getTheoryPart2 };
