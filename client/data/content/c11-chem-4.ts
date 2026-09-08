// Class 11 Chemistry Chapter 4: Chemical Bonding & Molecular Structure
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Chemistry | Class: 11 | Code: c11-chem-4

export const c11Chem4HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(67, 160, 71, 0.12), rgba(46, 125, 50, 0.12)); border: 1.5px solid rgba(67, 160, 71, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #43A047; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #43A047; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 4: Chemical Bonding &amp; Molecular Structure</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #43A047;">Chemical Bond:</b> The attractive force that holds constituent atoms, ions, or radicals together in a stable chemical entity.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #43A047;">Lattice Enthalpy (&Delta;<sub>lattice</sub>H):</b> The energy required to completely separate one mole of a solid ionic crystalline compound into gaseous constituent ions.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #43A047;">Dipole Moment (&mu;):</b> Product of the magnitude of electric charge (q) and the separation distance (d) between centers of positive and negative charges (&mu; = q &times; d).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #43A047;">Hybridization:</b> Intermixing of atomic orbitals of slightly different energies to produce equivalent sets of hybrid orbitals with identical shape, energy, and directional properties.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #43A047;">Bond Order (BO):</b> Half of the difference between the number of bonding electrons (N<sub>b</sub>) and antibonding electrons (N<sub>a</sub>): BO = <sup>1</sup>/<sub>2</sub> (N<sub>b</sub> - N<sub>a</sub>).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #43A047;">Hydrogen Bond:</b> Attractive dipole-dipole electrostatic interaction between a covalently bonded hydrogen atom and an intensely electronegative small atom (F, O, N).
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #43A047; border-bottom: 2px solid #43A047; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Valence Electrons, Ionic Bond, Covalent Bond, Bond Parameters
  </h2>

<p>
    Except for noble gases possessing stable ns<sup>2</sup> np<sup>6</sup> electronic octets, isolated atoms have incomplete valence shells and higher potential energies. Chemical bonding lowers total systemic potential energy, driving atoms toward thermodynamic stability through electron transfer (ionic bonding) or electron sharing (covalent bonding).
  </p>

  <h3 style="color: #43A047; margin-top: 18px; font-size: 16.5px;">(i) Octet Rule &amp; Kossel-Lewis Approach to Chemical Bonding</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      In 1916, W. Kossel and G.N. Lewis independently postulated that atoms combine either by mutual transfer or sharing of valence electrons to attain a stable outer shell of eight electrons (duplet for H and He), mirroring noble gas configurations.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin-top: 8px;">
      <li><b style="color: #43A047;">Lewis Symbols:</b> Valence electrons represented as dots surrounding the elemental symbol (e.g., &bull;Li, :Be&bull;, :N&bull;&bull;).</li>
      <li><b style="color: #43A047;">Limitations of Octet Rule:</b>
        <br/>1. <i>Incomplete Octet (Electron-Deficient Species):</i> Central atom has fewer than 8 electrons (e.g., LiCl, BeH<sub>2</sub>, BF<sub>3</sub>, AlCl<sub>3</sub>).
        <br/>2. <i>Odd-Electron Molecules:</i> Molecules with unpaired odd electrons where octet cannot be satisfied for all atoms (e.g., Nitric oxide NO, Nitrogen dioxide NO<sub>2</sub>).
        <br/>3. <i>Expanded Octet (Hypervalent Molecules):</i> Elements of Period 3 and beyond utilize vacant d-orbitals to accommodate 10, 12, or more valence electrons (e.g., PCl<sub>5</sub> with 10e<sup>-</sup>, SF<sub>6</sub> with 12e<sup>-</sup>, IF<sub>7</sub> with 14e<sup>-</sup>, H<sub>2</sub>SO<sub>4</sub>).
        <br/>4. Fails to explain the shape, bond angles, and relative thermodynamic stabilities of molecules, or why noble gases form compounds (e.g., XeF<sub>2</sub>, XeF<sub>4</sub>).
      </li>
    </ul>
  </div>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(ii) Ionic (Electrovalent) Bond Formation &amp; Lattice Enthalpy</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      An <b>Ionic Bond</b> is formed by complete transfer of one or more valence electrons from an electropositive metal atom to an electronegative non-metal atom, generating oppositely charged ions held by non-directional electrostatic Coulombic forces.
      <br/>&bull; <b style="color: #43A047;">Favourable Conditions for Ionic Bond Formation:</b>
      <br/>1. Low Ionization Enthalpy (&Delta;<sub>i</sub>H) of the metal (e.g., Cs, K, Na).
      <br/>2. High negative Electron Gain Enthalpy (&Delta;<sub>eg</sub>H) of the non-metal (e.g., Cl, F, O).
      <br/>3. High Lattice Enthalpy (&Delta;<sub>lattice</sub>H) of the resulting crystal.
      <br/>&bull; <b style="color: #43A047;">Born-Haber Cycle:</b> Thermochemical cycle relating lattice enthalpy to enthalpy of formation using Hess's Law:
      <br/><b>&Delta;<sub>f</sub>H&deg; = &Delta;<sub>sub</sub>H + <sup>1</sup>/<sub>2</sub> &Delta;<sub>diss</sub>H + &Delta;<sub>i</sub>H + &Delta;<sub>eg</sub>H - &Delta;<sub>lattice</sub>H</b>.
    </p>
  </div>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(iii) Covalent Bond &amp; Fundamental Bond Parameters</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #43A047;">1. Bond Length:</b> The equilibrium internuclear distance between two bonded atoms in a molecule. Measured via X-ray diffraction and rotational spectroscopy. Decreases with increasing bond multiplicity: <b>C&equiv;C (120 pm) &lt; C=C (134 pm) &lt; C-C (154 pm)</b>.</li>
    <li><b style="color: #43A047;">2. Bond Angle:</b> The angle between orbitals containing bonding electron pairs around the central atom (e.g., H-C-H in CH<sub>4</sub> is 109.5&deg;, H-N-H in NH<sub>3</sub> is 107&deg;, H-O-H in H<sub>2</sub>O is 104.5&deg;).</li>
    <li><b style="color: #43A047;">3. Bond Enthalpy (&Delta;<sub>bond</sub>H):</b> Amount of energy required to break one mole of a specific bond in gaseous state. Increases with bond multiplicity: <b>C&equiv;C (839 kJ/mol) &gt; C=C (614 kJ/mol) &gt; C-C (348 kJ/mol)</b>.</li>
    <li><b style="color: #43A047;">4. Bond Order:</b> Number of chemical bonds between a pair of atoms. Isoelectronic molecules share identical bond orders (e.g., N<sub>2</sub>, CO, NO<sup>+</sup> all have 14 electrons and Bond Order = 3).
      <br/>&bull; <i>General Correlation:</i> <b>Bond Order &prop; Bond Enthalpy &prop; 1 / Bond Length</b>.
    </li>
  </ul>

  <!-- SECTION 2 -->
  <h2 style="color: #43A047; border-bottom: 2px solid #43A047; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Lewis Structure, Polar Character of Covalent Bond, Covalent Character of Ionic Bond
  </h2>

<h3 style="color: #43A047; margin-top: 18px; font-size: 16.5px;">(i) Writing Formal Charge &amp; Lewis Dot Structures</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The <b>Formal Charge (FC)</b> of an atom in a Lewis structure is the electrical charge difference between the free valence electrons and those assigned in the bonded structure:
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        FC = V - L - <span style="display:inline-flex; flex-direction:column; vertical-align:middle; text-align:center; font-size:0.9em; line-height:1; margin:0 4px;"><span style="border-bottom:1.5px solid currentColor; padding:0 2px;">1</span><span style="padding:0 2px;">2</span></span> S &nbsp;|&nbsp; where V = valence e<sup>-</sup>, L = lone pair e<sup>-</sup>, S = shared bonding e<sup>-</sup>
      </span>
      <br/><i>Example for Ozone (O<sub>3</sub>):</i>
      <br/>&bull; Central atom O(1): FC = 6 - 2 - <sup>1</sup>/<sub>2</sub>(6) = <b>+1</b>.
      <br/>&bull; Double-bonded end O(2): FC = 6 - 4 - <sup>1</sup>/<sub>2</sub>(4) = <b>0</b>.
      <br/>&bull; Single-bonded end O(3): FC = 6 - 6 - <sup>1</sup>/<sub>2</sub>(2) = <b>-1</b>.
    </p>
  </div>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(ii) Polar Covalent Bonds &amp; Dipole Moment (&mu;)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      When two atoms of differing electronegativity share electrons, the bonding pair shifts toward the more electronegative atom, inducing a partial negative charge (&delta;<sup>-</sup>) and leaving a partial positive charge (&delta;<sup>+</sup>) (e.g., H<sup>&delta;+</sup> - Cl<sup>&delta;-</sup>).
      <br/>&bull; <b style="color: #43A047;">Dipole Moment Equation:</b>
      <br/><b>&mu; = q &times; d</b> (Expressed in Debye units: 1 D = 3.33564 &times; 10<sup>-30</sup> C m).
      <br/>&bull; Dipole moment is a vector quantity pointing from positive pole to negative pole (or central atom toward lone pair).
      <br/>&bull; <i>Symmetrical Cancellation:</i> Highly symmetrical molecules have <b>&mu; = 0</b> despite polar bonds (e.g., BeF<sub>2</sub>, BF<sub>3</sub>, CCl<sub>4</sub>, CO<sub>2</sub>).
      <br/>&bull; <b style="color: #43A047;">NH<sub>3</sub> vs NF<sub>3</sub> Dipole Moment Paradox:</b> Both molecules are trigonal pyramidal with one lone pair. However, &mu; of NH<sub>3</sub> is <b>1.47 D</b>, while &mu; of NF<sub>3</sub> is only <b>0.24 D</b>. In NH<sub>3</sub>, N is more electronegative than H, so the three N-H bond dipoles point upward in the same direction as the lone pair dipole, reinforcing each other. In NF<sub>3</sub>, F is more electronegative than N, so the three N-F bond dipoles point downward, opposing and largely canceling the lone pair dipole.
    </p>
  </div>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(iii) Covalent Character in Ionic Bonds: Fajans' Rules</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #43A047;">Principle:</b> No chemical bond is 100% ionic. A small cation attracts the electron cloud of a large anion, pulling electron density into the internuclear region and polarizing the anion to impart partial covalent character.</li>
    <li><b style="color: #43A047;">Fajans' Rules Favoring Covalent Character:</b>
      <br/>1. <i>Small Cation Size:</i> High charge density increases polarizing power (e.g., LiCl is covalent; NaCl is ionic).
      <br/>2. <i>Large Anion Size:</i> Outer electrons are loosely held, making the electron cloud easily polarizable (e.g., for AgX: AgI &gt; AgBr &gt; AgCl &gt; AgF in covalency).
      <br/>3. <i>High Charge on Cation or Anion:</i> Higher electrostatic attraction (e.g., SnCl<sub>4</sub> has higher covalent character and lower melting point than SnCl<sub>2</sub>).
      <br/>4. <i>Pseudo-Noble Gas Configuration:</i> Cations with outer (n - 1)d<sup>10</sup> ns<sup>0</sup> configuration have greater polarizing power than cations with noble gas (n - 1)s<sup>2</sup> (n - 1)p<sup>6</sup> configuration because d-electrons shield poorly (e.g., CuCl is more covalent than NaCl).
    </li>
  </ul>

  <!-- SECTION 3 -->
  <h2 style="color: #43A047; border-bottom: 2px solid #43A047; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Valence Shell Electron Pair Repulsion (VSEPR) Theory
  </h2>

<h3 style="color: #43A047; margin-top: 18px; font-size: 16.5px;">(i) Fundamental Postulates &amp; Repulsion Hierarchy</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Formulated by Sidgwick, Powell, Nyholm, and Gillespie: electron pairs in the valence shell of a central atom repel one another and adopt spatial orientations that maximize distance, minimizing repulsive energy.
      <br/>&bull; <b style="color: #43A047;">Repulsion Hierarchy:</b>
      <br/><span style="display:inline-block; margin: 4px 0; font-weight:bold; color: #FFFFFF;">
        Lone Pair - Lone Pair (lp - lp) &gt; Lone Pair - Bond Pair (lp - bp) &gt; Bond Pair - Bond Pair (bp - bp)
      </span>
      <br/>Because a lone pair is localized on a single nucleus, it occupies greater orbital space and exerts stronger repulsive forces than a localized bond pair shared between two nuclei.
    </p>
  </div>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(ii) Geometry of Molecules with Only Bonding Pairs</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #43A047;">AB<sub>2</sub>:</b> 2 bond pairs &rArr; <b>Linear</b> (180&deg;) &bull; Examples: BeCl<sub>2</sub>, HgCl<sub>2</sub>, CO<sub>2</sub>.</li>
    <li><b style="color: #43A047;">AB<sub>3</sub>:</b> 3 bond pairs &rArr; <b>Trigonal Planar</b> (120&deg;) &bull; Examples: BF<sub>3</sub>, BCl<sub>3</sub>, SO<sub>3</sub>.</li>
    <li><b style="color: #43A047;">AB<sub>4</sub>:</b> 4 bond pairs &rArr; <b>Tetrahedral</b> (109.5&deg;) &bull; Examples: CH<sub>4</sub>, SiF<sub>4</sub>, NH<sub>4</sub><sup>+</sup>.</li>
    <li><b style="color: #43A047;">AB<sub>5</sub>:</b> 5 bond pairs &rArr; <b>Trigonal Bipyramidal</b> (Equatorial 120&deg;, Axial 90&deg;) &bull; Examples: PCl<sub>5</sub>, PF<sub>5</sub>. (Axial bonds are longer and weaker due to greater repulsion from 3 equatorial pairs).</li>
    <li><b style="color: #43A047;">AB<sub>6</sub>:</b> 6 bond pairs &rArr; <b>Octahedral</b> (90&deg;) &bull; Examples: SF<sub>6</sub>, [AlF<sub>6</sub>]<sup>3-</sup>.</li>
    <li><b style="color: #43A047;">AB<sub>7</sub>:</b> 7 bond pairs &rArr; <b>Pentagonal Bipyramidal</b> (72&deg; &amp; 90&deg;) &bull; Examples: IF<sub>7</sub>.</li>
  </ul>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(iii) Shapes of Molecules Containing Lone Pairs</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #43A047;">AB<sub>2</sub>E (2 bp, 1 lp):</b> <b>Bent / V-shaped</b> (&lt; 120&deg;, ~119.5&deg;) &bull; Examples: SO<sub>2</sub>, O<sub>3</sub>.</li>
      <li><b style="color: #43A047;">AB<sub>3</sub>E (3 bp, 1 lp):</b> <b>Trigonal Pyramidal</b> (&lt; 109.5&deg;, 107&deg;) &bull; Examples: NH<sub>3</sub>, PCl<sub>3</sub>.</li>
      <li><b style="color: #43A047;">AB<sub>2</sub>E<sub>2</sub> (2 bp, 2 lp):</b> <b>Bent / Angular</b> (&lt; 109.5&deg;, 104.5&deg;) &bull; Examples: H<sub>2</sub>O, H<sub>2</sub>S, OF<sub>2</sub>.</li>
      <li><b style="color: #43A047;">AB<sub>4</sub>E (4 bp, 1 lp):</b> <b>See-Saw</b> &bull; Examples: SF<sub>4</sub> (lone pair occupies equatorial position to minimize 90&deg; repulsions).</li>
      <li><b style="color: #43A047;">AB<sub>3</sub>E<sub>2</sub> (3 bp, 2 lp):</b> <b>T-Shaped</b> &bull; Examples: ClF<sub>3</sub>, BrF<sub>3</sub> (both lone pairs occupy equatorial positions).</li>
      <li><b style="color: #43A047;">AB<sub>2</sub>E<sub>3</sub> (2 bp, 3 lp):</b> <b>Linear</b> (180&deg;) &bull; Examples: XeF<sub>2</sub>, I<sub>3</sub><sup>-</sup> (all 3 lone pairs in equatorial plane).</li>
      <li><b style="color: #43A047;">AB<sub>5</sub>E (5 bp, 1 lp):</b> <b>Square Pyramidal</b> &bull; Examples: BrF<sub>5</sub>, IF<sub>5</sub>.</li>
      <li><b style="color: #43A047;">AB<sub>4</sub>E<sub>2</sub> (4 bp, 2 lp):</b> <b>Square Planar</b> (90&deg;) &bull; Examples: XeF<sub>4</sub> (lone pairs opposite at trans axial positions).</li>
    </ul>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #43A047; border-bottom: 2px solid #43A047; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Valence Bond Theory, Hybridization Involving s, p and d Orbitals and Shapes of Some Simple Molecules
  </h2>

  <h3 style="color: #43A047; margin-top: 18px; font-size: 16.5px;">(i) Valence Bond Theory (VBT) &amp; Orbital Overlap</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Developed by Heitler and London (1927) and extended by Linus Pauling: a covalent bond forms by the overlapping of half-filled atomic orbitals containing electrons with antiparallel spins. Greater orbital overlap yields a stronger, shorter chemical bond.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin-top: 8px;">
      <li><b style="color: #43A047;">Sigma (&sigma;) Bond:</b> Formed by coaxial (end-to-end / head-on) overlap of atomic orbitals along the internuclear axis (s-s, s-p, or axial p-p). Maximum electron density is localized symmetrically along the internuclear axis. Strong bond with free rotation.</li>
      <li><b style="color: #43A047;">Pi (&pi;) Bond:</b> Formed by lateral (sideways) overlap of two parallel p-orbitals perpendicular to the internuclear axis. Electron density forms two sausage-shaped clouds above and below the internuclear plane. Weaker bond due to lesser overlap; restricts free rotation.</li>
    </ul>
  </div>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(ii) Concept of Hybridization</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Pauling introduced hybridization to explain the equivalent bond lengths, bond energies, and directional geometries of polyatomic molecules (e.g., explaining why CH<sub>4</sub> has 4 identical C-H bonds rather than three 2p-1s bonds and one 2s-1s bond).
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin-top: 8px;">
      <li><b style="color: #43A047;">1. sp Hybridization:</b> 1 s + 1 p &rArr; two collinear hybrid orbitals at <b>180&deg; (Linear)</b>. 50% s-character &bull; Examples: BeF<sub>2</sub>, BeCl<sub>2</sub>, HC&equiv;CH.</li>
      <li><b style="color: #43A047;">2. sp<sup>2</sup> Hybridization:</b> 1 s + 2 p &rArr; three planar hybrid orbitals at <b>120&deg; (Trigonal Planar)</b>. 33.3% s-character &bull; Examples: BF<sub>3</sub>, BCl<sub>3</sub>, H<sub>2</sub>C=CH<sub>2</sub>.</li>
      <li><b style="color: #43A047;">3. sp<sup>3</sup> Hybridization:</b> 1 s + 3 p &rArr; four tetrahedral hybrid orbitals directed toward corners of a regular tetrahedron at <b>109.5&deg;</b>. 25% s-character &bull; Examples: CH<sub>4</sub>, CCl<sub>4</sub>, NH<sub>3</sub> (distorted 107&deg;), H<sub>2</sub>O (distorted 104.5&deg;).</li>
      <li><b style="color: #43A047;">4. sp<sup>3</sup>d Hybridization:</b> 1 s + 3 p + 1 d<sub>z<sup>2</sup></sub> &rArr; five hybrid orbitals directed toward corners of a <b>Trigonal Bipyramid</b> (3 equatorial at 120&deg;, 2 axial at 90&deg;) &bull; Example: PCl<sub>5</sub>. Axial P-Cl bonds (240 pm) are longer than equatorial P-Cl bonds (202 pm) due to greater repulsive strain.</li>
      <li><b style="color: #43A047;">5. sp<sup>3</sup>d<sup>2</sup> Hybridization:</b> 1 s + 3 p + 2 d (d<sub>x<sup>2</sup>-y<sup>2</sup></sub>, d<sub>z<sup>2</sup></sub>) &rArr; six equivalent hybrid orbitals directed toward corners of an <b>Octahedron</b> at 90&deg; &bull; Example: SF<sub>6</sub>.</li>
      <li><b style="color: #43A047;">Calculation Formula for Hybridization State:</b>
        <br/><b>Steric Number = <sup>1</sup>/<sub>2</sub> [V + M - C + A]</b> (where V = valence e<sup>-</sup> on central atom, M = monovalent atoms attached, C = cation charge, A = anion charge).
      </li>
    </ul>
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: #43A047; border-bottom: 2px solid #43A047; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Molecular Orbital Theory of Homonuclear Diatomic Molecules (Qualitative Idea Only), Hydrogen Bond
  </h2>

  <h3 style="color: #43A047; margin-top: 18px; font-size: 16.5px;">(i) Molecular Orbital Theory (MOT) &amp; LCAO Principle</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Developed by F. Hund and R.S. Mulliken (1932): atomic orbitals lose their individual identities in a molecule, merging into polycentric <b>Molecular Orbitals</b> spanning across all nuclei.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin-top: 8px;">
      <li><b style="color: #43A047;">Linear Combination of Atomic Orbitals (LCAO):</b>
        <br/>1. <i>Bonding Molecular Orbital (&psi;<sub>B</sub> = &psi;<sub>A</sub> + &psi;<sub>B</sub>):</i> Constructive wave interference. Electron density builds up between nuclei, lowering systemic energy below parent AOs. Stabilizes molecule.
        <br/>2. <i>Antibonding Molecular Orbital (&psi;<sub>A</sub>* = &psi;<sub>A</sub> - &psi;<sub>B</sub>):</i> Destructive wave interference. Produces a nodal plane (&psi;<sup>2</sup> = 0) between nuclei where electron density is zero; higher energy than parent AOs. Destabilizes molecule.
      </li>
      <li><b style="color: #43A047;">Bond Order &amp; Magnetic Character:</b>
        <br/><b>Bond Order = <sup>1</sup>/<sub>2</sub> (N<sub>b</sub> - N<sub>a</sub>)</b>
        <br/>&bull; BO &gt; 0 &rArr; Molecule is stable and exists.
        <br/>&bull; BO &le; 0 &rArr; Molecule is unstable and cannot exist (e.g., He<sub>2</sub> has N<sub>b</sub>=2, N<sub>a</sub>=2 &rArr; BO = 0).
        <br/>&bull; <i>Paramagnetism:</i> Presence of one or more <b>unpaired electrons</b> in MOs (e.g., O<sub>2</sub> has two unpaired electrons in &pi;*2p<sub>x</sub> and &pi;*2p<sub>y</sub>; paramagnetic).
        <br/>&bull; <i>Diamagnetism:</i> All electrons are completely paired.
      </li>
    </ul>
  </div>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(ii) MO Energy Level Diagrams &amp; Bond Order of Homonuclear Diatomics</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #43A047;">For Molecules with Total Electrons &le; 14 (Li<sub>2</sub>, Be<sub>2</sub>, B<sub>2</sub>, C<sub>2</sub>, N<sub>2</sub>) - sp Mixing Occurs:</b>
        <br/>&sigma;1s &lt; &sigma;*1s &lt; &sigma;2s &lt; &sigma;*2s &lt; <b>(&pi;2p<sub>x</sub> = &pi;2p<sub>y</sub>) &lt; &sigma;2p<sub>z</sub></b> &lt; (&pi;*2p<sub>x</sub> = &pi;*2p<sub>y</sub>) &lt; &sigma;*2p<sub>z</sub>
        <br/>&bull; <i>For N<sub>2</sub> (14e<sup>-</sup>):</i> BO = (10 - 4)/2 = <b>3.0</b> (Diamagnetic).
      </li>
      <li><b style="color: #43A047;">For Molecules with Total Electrons &gt; 14 (O<sub>2</sub>, F<sub>2</sub>, Ne<sub>2</sub>) - No sp Mixing:</b>
        <br/>&sigma;1s &lt; &sigma;*1s &lt; &sigma;2s &lt; &sigma;*2s &lt; <b>&sigma;2p<sub>z</sub> &lt; (&pi;2p<sub>x</sub> = &pi;2p<sub>y</sub>)</b> &lt; (&pi;*2p<sub>x</sub> = &pi;*2p<sub>y</sub>) &lt; &sigma;*2p<sub>z</sub>
        <br/>&bull; <i>For O<sub>2</sub> (16e<sup>-</sup>):</i> BO = (10 - 6)/2 = <b>2.0</b> (Two unpaired electrons in &pi;*2p; explains O<sub>2</sub> <b>paramagnetism</b>, which Lewis and VBT failed to explain).
      </li>
    </ul>
  </div>

  <h3 style="color: #43A047; margin-top: 22px; font-size: 16.5px;">(iii) Hydrogen Bonding (Types &amp; Physical Consequences)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      An attractive electrostatic bridge formed between a hydrogen atom covalently bonded to a strongly electronegative small atom (F, O, N) and another electronegative atom with a lone pair.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin-top: 8px;">
      <li><b style="color: #43A047;">1. Intermolecular Hydrogen Bonding:</b> Occurs between separate molecules of the same or different substances (e.g., H<sub>2</sub>O, HF, NH<sub>3</sub>, C<sub>2</sub>H<sub>5</sub>OH). Causes molecular association, giving water an anomalously high boiling point (100&deg;C) compared to H<sub>2</sub>S (-60&deg;C).</li>
      <li><b style="color: #43A047;">2. Intramolecular Hydrogen Bonding (Chelation):</b> Occurs within the same single molecule between a hydrogen atom and an electronegative atom located close by (e.g., <b>o-Nitrophenol</b>, Salicylaldehyde). Prevents intermolecular association, resulting in lower boiling points and steam-volatility compared to p-nitrophenol.</li>
      <li><b style="color: #43A047;">Anomalous Properties of Water &amp; Density of Ice:</b> In ice, each water molecule is tetrahedrally hydrogen-bonded to 4 neighbouring water molecules, forming a rigid, highly porous 3D open-cage crystal lattice. When ice melts at 0&deg;C, the cage collapses, packing molecules closer. Consequently, <b>liquid water is denser than solid ice</b>, and water reaches maximum density at <b>3.98&deg;C (4&deg;C)</b>.</li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(27, 94, 32, 0.85)); border: 2px solid #43A047; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #43A047; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 4 Formula Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(67, 160, 71, 0.25); color: #43A047; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Bond Parameter / Law</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Formula / Mathematical Expression</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Geometry / Key Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #43A047;">Formal Charge (FC):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">FC = V - L - <sup>1</sup>/<sub>2</sub> S</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">V = valence e<sup>-</sup>, L = lone e<sup>-</sup>, S = shared e<sup>-</sup></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #43A047;">Dipole Moment (&mu;):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&mu; = q &times; d</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">1 Debye = 3.336 &times; 10<sup>-30</sup> C m</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #43A047;">Steric Number:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">SN = <sup>1</sup>/<sub>2</sub> [V + M - C + A]</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">SN=2 (sp), 3 (sp<sup>2</sup>), 4 (sp<sup>3</sup>), 5 (sp<sup>3</sup>d), 6 (sp<sup>3</sup>d<sup>2</sup>)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #43A047;">Bond Order (BO):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">BO = <sup>1</sup>/<sub>2</sub> (N<sub>b</sub> - N<sub>a</sub>)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">BO &prop; Bond Energy &prop; 1 / Bond Length</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #43A047;">Magnetic Nature:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">&mu;<sub>s</sub> = &radic;[n(n + 2)] BM</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Unpaired electrons &rArr; Paramagnetic (O<sub>2</sub>, B<sub>2</sub>)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #43A047;">% Ionic Character:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">16(&Delta;&chi;) + 3.5(&Delta;&chi;)<sup>2</sup></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Hannay-Smith Equation (&Delta;&chi; = &chi;<sub>A</sub> - &chi;<sub>B</sub>)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Chem4HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(67, 160, 71, 0.15), rgba(46, 125, 50, 0.15)); border: 1.5px solid rgba(67, 160, 71, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #43A047; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Octet Violations, VSEPR Geometries, Hybridization Types &amp; MOT Definitions</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define Octet Rule.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Atoms transfer or share valence electrons to attain a stable valence octet of eight electrons.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Give two examples of electron-deficient molecules that violate the octet rule.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      BF<sub>3</sub> and BeCl<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: Give two examples of hypervalent molecules with expanded octets.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      PCl<sub>5</sub> (10 electrons) and SF<sub>6</sub> (12 electrons).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Define Lattice Enthalpy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The energy required to completely separate one mole of a solid ionic crystalline compound into gaseous constituent ions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Define Bond Length.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The equilibrium distance between the nuclei of two bonded atoms in a molecule.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: How does bond length vary with bond multiplicity?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bond length decreases as bond multiplicity increases: C-C (154 pm) &gt; C=C (134 pm) &gt; C&equiv;C (120 pm).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Define Bond Enthalpy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The amount of energy required to break one mole of chemical bonds of a specific type in the gaseous state.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Define Bond Angle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The internal angle between orbitals containing bonding electron pairs around the central atom.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Define Bond Order in Lewis theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The number of chemical bonds shared between a pair of atoms in a molecule.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Write the formula for calculating Formal Charge on an atom in a Lewis structure.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Formal Charge FC = V - L - <sup>1</sup>/<sub>2</sub> S.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Define Dipole Moment (&mu;) and state its SI units.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Product of the magnitude of electric charge (q) and distance (d): &mu; = q &times; d. SI unit: Coulomb-meter (C m).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: What is the Debye (D) in SI units?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1 D = 3.33564 &times; 10<sup>-30</sup> C m.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: Why is the net dipole moment of CO<sub>2</sub> zero?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because CO<sub>2</sub> has a linear geometry (O=C=O) where two equal and opposite C=O bond dipoles cancel completely.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Why is BF<sub>3</sub> non-polar despite containing polar B-F bonds?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because BF<sub>3</sub> is symmetrical trigonal planar (120&deg;); the vector sum of the three B-F bond dipoles is zero.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: State Fajans' rule regarding cation size.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Smaller cations possess greater polarizing power, imparting higher covalent character to ionic bonds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: State Fajans' rule regarding anion size.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Larger anions are more easily polarizable, leading to greater covalent character.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: State the repulsion order of electron pairs according to VSEPR theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lone pair - Lone pair &gt; Lone pair - Bond pair &gt; Bond pair - Bond pair.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: What is the geometry and bond angle of Methane (CH<sub>4</sub>)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Tetrahedral geometry with bond angle 109.5&deg;.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What is the shape of Ammonia (NH<sub>3</sub>) according to VSEPR theory?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Trigonal pyramidal (bond angle 107&deg; due to 1 lone pair).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What is the shape of Water (H<sub>2</sub>O) according to VSEPR theory?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bent / V-shaped (bond angle 104.5&deg; due to 2 lone pairs).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What is the shape of PCl<sub>5</sub> molecule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Trigonal bipyramidal.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: What is the shape of SF<sub>6</sub> molecule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Regular octahedral.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What is the shape of ClF<sub>3</sub> according to VSEPR?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      T-shaped (3 bond pairs, 2 lone pairs in equatorial positions).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What is the shape of XeF<sub>4</sub> molecule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Square planar (4 bond pairs, 2 lone pairs at trans axial positions).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What is the shape of SF<sub>4</sub> molecule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      See-saw (4 bond pairs, 1 lone pair in equatorial position).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Define a Sigma (&sigma;) bond.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A covalent bond formed by head-on (coaxial) overlap of atomic orbitals along the internuclear axis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Define a Pi (&pi;) bond.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A covalent bond formed by sideways (lateral) overlap of parallel p-orbitals perpendicular to the internuclear axis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Which bond is stronger: Sigma (&sigma;) or Pi (&pi;), and why?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sigma bond is stronger because coaxial overlap is significantly greater than lateral overlap.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Define Hybridization.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The phenomenon of intermixing atomic orbitals of slightly differing energies to produce equivalent sets of hybrid orbitals.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What is the hybridization of Carbon in Ethyne (C<sub>2</sub>H<sub>2</sub>)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp hybridization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: What is the hybridization of Carbon in Ethene (C<sub>2</sub>H<sub>4</sub>)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>2</sup> hybridization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is the hybridization of Carbon in Methane (CH<sub>4</sub>)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>3</sup> hybridization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: What is the hybridization of Phosphorus in PCl<sub>5</sub>?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>3</sup>d hybridization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What is the hybridization of Sulfur in SF<sub>6</sub>?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      sp<sup>3</sup>d<sup>2</sup> hybridization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: State the condition for formation of Molecular Orbitals by LCAO.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Combining atomic orbitals must have comparable energies, identical symmetry about the molecular axis, and maximum overlap.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Write the formula for calculating Bond Order in MOT.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bond Order = <sup>1</sup>/<sub>2</sub> (N<sub>b</sub> - N<sub>a</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Why is Oxygen (O<sub>2</sub>) paramagnetic?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because its Molecular Orbital configuration contains two unpaired electrons in degenerate &pi;*2p<sub>x</sub> and &pi;*2p<sub>y</sub> antibonding orbitals.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is the bond order of N<sub>2</sub> molecule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bond Order = (10 - 4) / 2 = 3.0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Define Hydrogen Bond.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An attractive electrostatic force between a hydrogen atom covalently bonded to F, O, or N, and another electronegative atom.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Why does H<sub>2</sub>O have a higher boiling point than H<sub>2</sub>S?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because water molecules form extensive intermolecular hydrogen bonds, whereas H<sub>2</sub>S forms only weak dipole-dipole attractions.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(67, 160, 71, 0.15), rgba(46, 125, 50, 0.15)); border: 1.5px solid rgba(67, 160, 71, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #43A047; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Dipole Paradoxes, Fajans Applications, VBT Overlap &amp; Hydrogen Bonding</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain the formation of an Ionic Bond with Calcium Oxide (CaO) as an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Calcium (Z = 20, [Ar] 4s<sup>2</sup>) transfers two valence electrons to Oxygen (Z = 8, 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>). Ca forms Ca<sup>2+</sup> ([Ar]) and O forms O<sup>2-</sup> ([Ne]). The resulting Ca<sup>2+</sup> and O<sup>2-</sup> ions are held by strong electrostatic Coulombic forces in a crystalline cubic lattice: <b>Ca &rarr; Ca<sup>2+</sup> + 2e<sup>-</sup></b>, <b>O + 2e<sup>-</sup> &rarr; O<sup>2-</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Explain Lattice Enthalpy and describe how Born-Haber Cycle is used to determine it for NaCl.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lattice enthalpy is the energy required to dissociate one mole of solid crystal into isolated gaseous ions: NaCl<sub>(s)</sub> &rarr; Na<sup>+</sup><sub>(g)</sub> + Cl<sup>-</sup><sub>(g)</sub>. The Born-Haber cycle uses Hess's law to relate it to measurable quantities: <b>&Delta;<sub>f</sub>H&deg; = &Delta;<sub>sub</sub>H(Na) + &Delta;<sub>i</sub>H(Na) + <sup>1</sup>/<sub>2</sub> &Delta;<sub>diss</sub>H(Cl<sub>2</sub>) + &Delta;<sub>eg</sub>H(Cl) - &Delta;<sub>lattice</sub>H</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Calculate the Formal Charge on each atom in the Carbonate ion (CO<sub>3</sub><sup>2-</sup>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the Lewis structure of CO<sub>3</sub><sup>2-</sup>, carbon forms one double bond to O and two single bonds to O<sup>-</sup>.<br/>&bull; Carbon: FC = 4 - 0 - <sup>1</sup>/<sub>2</sub>(8) = <b>0</b>.<br/>&bull; Double-bonded Oxygen: FC = 6 - 4 - <sup>1</sup>/<sub>2</sub>(4) = <b>0</b>.<br/>&bull; Each Single-bonded Oxygen: FC = 6 - 6 - <sup>1</sup>/<sub>2</sub>(2) = <b>-1</b>.<br/>Total charge = 0 + 0 + (-1) + (-1) = -2.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain why the dipole moment of NH<sub>3</sub> (1.47 D) is much greater than that of NF<sub>3</sub> (0.24 D).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Both NH<sub>3</sub> and NF<sub>3</sub> have trigonal pyramidal geometries with one lone pair. In NH<sub>3</sub>, N is more electronegative than H; the three N-H bond dipoles point upward in the same direction as the lone pair dipole, reinforcing each other. In NF<sub>3</sub>, F is more electronegative than N; the three N-F bond dipoles point downward, opposing and largely canceling the lone pair dipole.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain Fajans' Rules and predict which has higher covalent character: (a) LiCl or NaCl, (b) SnCl<sub>2</sub> or SnCl<sub>4</sub>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fajans' rules state that smaller cations and higher charges polarize anions more effectively, increasing covalency.<br/>(a) <b style="color: #43A047;">LiCl &gt; NaCl:</b> Li<sup>+</sup> is much smaller than Na<sup>+</sup>, giving it higher polarizing power and greater covalent character.<br/>(b) <b style="color: #43A047;">SnCl<sub>4</sub> &gt; SnCl<sub>2</sub>:</b> Sn<sup>4+</sup> has a higher charge and smaller radius than Sn<sup>2+</sup>, polarizing Cl<sup>-</sup> ions more strongly.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Why are axial bonds longer than equatorial bonds in PCl<sub>5</sub>?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In trigonal bipyramidal PCl<sub>5</sub>, each axial P-Cl bond pair experiences repulsion from three equatorial bond pairs at 90&deg; angles. Equatorial bond pairs experience repulsion from only two axial pairs at 90&deg;. To minimize this greater electrostatic repulsion, the axial bond pairs move farther away from the central P atom, making axial bonds (240 pm) longer and weaker than equatorial bonds (202 pm).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Using VSEPR theory, predict the shape and bond angle of: (a) SO<sub>2</sub>, (b) ClF<sub>3</sub>, (c) XeF<sub>2</sub>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #43A047;">SO<sub>2</sub>:</b> 2 bond pairs + 1 lone pair (AB<sub>2</sub>E) &rArr; <b>Bent / Angular</b> (~119.5&deg;).<br/>(b) <b style="color: #43A047;">ClF<sub>3</sub>:</b> 3 bond pairs + 2 lone pairs (AB<sub>3</sub>E<sub>2</sub>) &rArr; <b>T-shaped</b> (lone pairs in equatorial positions).<br/>(c) <b style="color: #43A047;">XeF<sub>2</sub>:</b> 2 bond pairs + 3 lone pairs (AB<sub>2</sub>E<sub>3</sub>) &rArr; <b>Linear</b> (180&deg;, all 3 lone pairs in equatorial plane).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Differentiate between a Sigma (&sigma;) bond and a Pi (&pi;) bond in four key respects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #43A047;">Overlap Mode:</b> &sigma; bond forms by coaxial (end-to-end) overlap; &pi; bond forms by lateral (sideways) overlap.<br/>2. <b style="color: #43A047;">Strength:</b> &sigma; bond is stronger due to greater overlap; &pi; bond is weaker.<br/>3. <b style="color: #43A047;">Rotation:</b> Free rotation around a &sigma; bond is possible; rotation around a &pi; bond is restricted.<br/>4. <b style="color: #43A047;">Existence:</b> &sigma; bond can exist independently; a &pi; bond exists only in conjunction with a &sigma; bond.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain the hybridization and bonding in Ethene (C<sub>2</sub>H<sub>4</sub>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Each carbon atom is sp<sup>2</sup> hybridized, forming 3 planar hybrid orbitals at 120&deg;. Two sp<sup>2</sup> orbitals overlap with 1s of H to form two C-H &sigma;-bonds. The third sp<sup>2</sup> orbital overlaps coaxially with the other carbon to form a C-C &sigma;-bond. The unhybridized 2p<sub>z</sub> orbital on each carbon overlaps laterally above and below the molecular plane to form one C-C &pi;-bond, producing a planar molecule with 5 &sigma; and 1 &pi; bonds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain the hybridization and bonding in Ethyne (C<sub>2</sub>H<sub>2</sub>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Each carbon is sp hybridized, forming 2 linear hybrid orbitals at 180&deg;. One sp orbital forms a C-H &sigma;-bond with 1s of H; the other forms a C-C &sigma;-bond with the neighbouring carbon. Two unhybridized 2p orbitals (2p<sub>y</sub> and 2p<sub>z</sub>) on each carbon overlap laterally to form two mutually perpendicular &pi;-bonds, resulting in a linear molecule with a C&equiv;C triple bond (1 &sigma; + 2 &pi;).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Describe the hybridization of Phosphorus in PCl<sub>5</sub> and explain its thermal decomposition.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Phosphorus (3s<sup>2</sup> 3p<sup>3</sup>) promotes one 3s electron to 3d, undergoing sp<sup>3</sup>d hybridization to yield 5 hybrid orbitals with trigonal bipyramidal geometry. Because the two axial P-Cl bonds are longer and weaker than the three equatorial bonds, PCl<sub>5</sub> decomposes readily upon heating into PCl<sub>3</sub> and Cl<sub>2</sub> gas: <b>PCl<sub>5(s)</sub> &rarr; PCl<sub>3(l)</sub> + Cl<sub>2(g)</sub></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain why the bond angles in CH<sub>4</sub>, NH<sub>3</sub>, and H<sub>2</sub>O are 109.5°, 107°, and 104.5° respectively, though all are sp<sup>3</sup> hybridized.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      All three central atoms have steric number 4 with sp<sup>3</sup> hybridization. In CH<sub>4</sub>, there are 4 bond pairs and 0 lone pairs; regular tetrahedral angle is 109.5&deg;. In NH<sub>3</sub>, 1 lone pair exerts stronger lp-bp repulsion, compressing bond angle to 107&deg;. In H<sub>2</sub>O, 2 lone pairs exert strong lp-lp and lp-bp repulsions, compressing the H-O-H bond angle further to 104.5&deg;.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain the formation of Bonding and Antibonding Molecular Orbitals according to LCAO.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When atomic orbital wave functions &psi;<sub>A</sub> and &psi;<sub>B</sub> overlap:<br/>&bull; <b style="color: #43A047;">Bonding MO (&psi;<sub>B</sub> = &psi;<sub>A</sub> + &psi;<sub>B</sub>):</b> Constructive interference increases electron probability density between nuclei, lowering systemic potential energy and forming a stable bond.<br/>&bull; <b style="color: #43A047;">Antibonding MO (&psi;<sub>A</sub>* = &psi;<sub>A</sub> - &psi;<sub>B</sub>):</b> Destructive interference creates a nodal plane between nuclei where electron density is zero; nuclear repulsion raises energy above the parent AOs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Write the MO electronic configuration of O<sub>2</sub> and determine its Bond Order and Magnetic Nature.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      O<sub>2</sub> (16 electrons): &sigma;1s<sup>2</sup> &sigma;*1s<sup>2</sup> &sigma;2s<sup>2</sup> &sigma;*2s<sup>2</sup> &sigma;2p<sub>z</sub><sup>2</sup> (&pi;2p<sub>x</sub><sup>2</sup> = &pi;2p<sub>y</sub><sup>2</sup>) (&pi;*2p<sub>x</sub><sup>1</sup> = &pi;*2p<sub>y</sub><sup>1</sup>).<br/>&bull; N<sub>b</sub> = 10, N<sub>a</sub> = 6.<br/>&bull; Bond Order = (10 - 6) / 2 = <b>2.0</b>.<br/>&bull; Contains two unpaired electrons in degenerate &pi;* antibonding orbitals, so O<sub>2</sub> is <b>paramagnetic</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Compare the bond orders and relative stabilities of O<sub>2</sub>, O<sub>2</sub><sup>+</sup>, O<sub>2</sub><sup>-</sup>, and O<sub>2</sub><sup>2-</sup>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &bull; O<sub>2</sub><sup>+</sup> (15e<sup>-</sup>): BO = (10 - 5)/2 = <b>2.5</b>.<br/>&bull; O<sub>2</sub> (16e<sup>-</sup>): BO = (10 - 6)/2 = <b>2.0</b>.<br/>&bull; O<sub>2</sub><sup>-</sup> (17e<sup>-</sup>): BO = (10 - 7)/2 = <b>1.5</b>.<br/>&bull; O<sub>2</sub><sup>2-</sup> (18e<sup>-</sup>): BO = (10 - 8)/2 = <b>1.0</b>.<br/>Stability and Bond Energy order: <b>O<sub>2</sub><sup>+</sup> &gt; O<sub>2</sub> &gt; O<sub>2</sub><sup>-</sup> &gt; O<sub>2</sub><sup>2-</sup></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Explain why He<sub>2</sub> molecule does not exist based on Molecular Orbital Theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      He<sub>2</sub> has 4 electrons: MO configuration is &sigma;1s<sup>2</sup> &sigma;*1s<sup>2</sup>. Here N<sub>b</sub> = 2 and N<sub>a</sub> = 2.<br/>Bond Order = <sup>1</sup>/<sub>2</sub> (N<sub>b</sub> - N<sub>a</sub>) = <sup>1</sup>/<sub>2</sub> (2 - 2) = <b>0</b>. A bond order of zero signifies no net bonding attraction, so He<sub>2</sub> cannot exist.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Differentiate between Intermolecular and Intramolecular Hydrogen Bonding with suitable examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">Intermolecular:</b> Occurs between separate molecules of the same or different compounds (e.g., H<sub>2</sub>O, HF, NH<sub>3</sub>). Causes molecular association, elevating boiling points. <b style="color: #43A047;">Intramolecular:</b> Occurs within the same single molecule between a hydrogen atom and a nearby electronegative atom (e.g., o-nitrophenol, salicylaldehyde). Prevents intermolecular association, lowering boiling points and increasing steam-volatility.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain why o-Nitrophenol is steam-volatile while p-Nitrophenol is not.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      o-Nitrophenol forms <b>intramolecular hydrogen bonding</b> (chelation) between its -OH and -NO<sub>2</sub> groups on the same benzene ring; this prevents association with other molecules, giving it a lower boiling point and steam-volatility. p-Nitrophenol cannot form intramolecular H-bonds due to steric distance; it forms extensive <b>intermolecular hydrogen bonds</b> linking separate molecules into large networks, resulting in a higher boiling point and non-volatility.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Why does ice float on water, and at what temperature is the density of water maximum?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In solid ice, water molecules form a rigid, highly open 3D tetrahedral cage lattice with extensive empty voids. When ice melts at 0&deg;C, the cage lattice collapses and water molecules pack closer together in the liquid state. Consequently, liquid water is denser than ice, allowing ice to float. Water reaches maximum density at <b>3.98&deg;C (4&deg;C)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain Resonance and draw the resonating structures of Carbon Dioxide (CO<sub>2</sub>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When a single Lewis structure cannot adequately account for all properties of a molecule, the actual structure is represented as a resonance hybrid of two or more contributing canonical structures. For CO<sub>2</sub>: <b>:O&#773;=C=O&#773;: &harr; :O&equiv;C-O&#776;<sup>-</sup> &harr; <sup>-</sup>:O&#776;-C&equiv;O:</b>. The hybrid possesses equal C-O bond lengths (115 pm) intermediate between double and triple bonds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Draw the Lewis resonance structures of Ozone (O<sub>3</sub>) and calculate the average bond order.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ozone resonates between two equivalent structures: <b>O=O<sup>+</sup>-O<sup>-</sup> &harr; <sup>-</sup>O-O<sup>+</sup>=O</b>. In the resonance hybrid, each bond has one &sigma; bond and half a &pi; bond: <b>Average Bond Order = (2 + 1) / 2 = 1.5</b>. Both O-O bond lengths are identical (128 pm), intermediate between single (148 pm) and double (121 pm) bonds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Explain why BF<sub>3</sub> is a Lewis acid and how its octet is completed in adduction with NH<sub>3</sub>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In BF<sub>3</sub>, Boron is surrounded by only 6 valence electrons (3 bond pairs), leaving an incomplete octet and an empty 2p orbital. It acts as an electron-pair acceptor (Lewis acid). When mixed with Ammonia (:NH<sub>3</sub>) which has a lone pair, Nitrogen donates its lone pair into Boron's empty 2p orbital, forming a stable coordinate (dative) bond adduct: <b>F<sub>3</sub>B &larr; :NH<sub>3</sub></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain the difference between bonding and antibonding molecular orbitals in terms of probability density &psi;<sup>2</sup>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      For bonding MO (&psi;<sub>B</sub> = &psi;<sub>A</sub> + &psi;<sub>B</sub>), &psi;<sub>B</sub><sup>2</sup> = &psi;<sub>A</sub><sup>2</sup> + &psi;<sub>B</sub><sup>2</sup> + 2&psi;<sub>A</sub>&psi;<sub>B</sub>. The cross term 2&psi;<sub>A</sub>&psi;<sub>B</sub> increases electron probability density between the nuclei, shielding nuclear repulsion. For antibonding MO (&psi;<sub>A</sub>* = &psi;<sub>A</sub> - &psi;<sub>B</sub>), &psi;<sub>A</sub>*<sup>2</sup> = &psi;<sub>A</sub><sup>2</sup> + &psi;<sub>B</sub><sup>2</sup> - 2&psi;<sub>A</sub>&psi;<sub>B</sub>. The negative cross term depletes electron density between nuclei, creating a nodal plane.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Calculate the dipole moment of a hypothetical molecule with 0.2 unit electronic charge separated by 1.0 &Aring;.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      q = 0.2 &times; (1.602 &times; 10<sup>-19</sup> C) = 3.204 &times; 10<sup>-20</sup> C.<br/>d = 1.0 &Aring; = 1.0 &times; 10<sup>-10</sup> m.<br/>&mu; = q &times; d = (3.204 &times; 10<sup>-20</sup>) &times; (1.0 &times; 10<sup>-10</sup>) = 3.204 &times; 10<sup>-30</sup> C m.<br/>In Debye: &mu; = (3.204 &times; 10<sup>-30</sup>) / (3.336 &times; 10<sup>-30</sup>) = <b>0.96 D</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain why the bond angle in H<sub>2</sub>S (92.1°) is much smaller than in H<sub>2</sub>O (104.5°).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      According to Bent's rule and Drago's rule, Oxygen in H<sub>2</sub>O is small and highly electronegative, utilizing sp<sup>3</sup> hybrid orbitals (104.5&deg;). In H<sub>2</sub>S, Sulfur is larger and less electronegative; the S-H bonding pairs occupy almost pure 3p orbitals directed at 90&deg; to minimize hybridization energy, while the lone pair resides in an almost unhybridized 3s orbital, giving an angle of 92.1&deg;.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: State the conditions required for maximum overlapping of atomic orbitals.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Combining orbitals must have comparable energies.<br/>2. Combining orbitals must possess identical symmetry with respect to the internuclear axis (e.g., 2p<sub>z</sub> overlaps with 2p<sub>z</sub> along the z-axis).<br/>3. The orbitals must come sufficiently close together with proper spatial orientation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain why N<sub>2</sub> has a higher bond dissociation enthalpy than O<sub>2</sub>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In N<sub>2</sub>, the Bond Order is <b>3.0</b> (one &sigma; and two &pi; bonds) with all 10 valence electrons in bonding MOs (&sigma;1s<sup>2</sup> &sigma;*1s<sup>2</sup> &sigma;2s<sup>2</sup> &sigma;*2s<sup>2</sup> &pi;2p<sup>4</sup> &sigma;2p<sup>2</sup>), yielding &Delta;H = 945 kJ/mol. In O<sub>2</sub>, the Bond Order is only <b>2.0</b> with two antibonding electrons in &pi;*2p, yielding &Delta;H = 498 kJ/mol.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Draw the Lewis structure of Nitric Acid (HNO<sub>3</sub>) and determine formal charges on all atoms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Structure: H-O-N(=O)(&rarr;O).<br/>&bull; Hydrogen: FC = 0.<br/>&bull; Hydroxyl Oxygen: FC = 6 - 4 - <sup>1</sup>/<sub>2</sub>(4) = <b>0</b>.<br/>&bull; Central Nitrogen: FC = 5 - 0 - <sup>1</sup>/<sub>2</sub>(8) = <b>+1</b>.<br/>&bull; Double-bonded Oxygen: FC = 6 - 4 - <sup>1</sup>/<sub>2</sub>(4) = <b>0</b>.<br/>&bull; Single-bonded (coordinate) Oxygen: FC = 6 - 6 - <sup>1</sup>/<sub>2</sub>(2) = <b>-1</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Why is AgCl insoluble in water while NaCl is readily soluble?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Na<sup>+</sup> has a stable noble gas configuration (2s<sup>2</sup> 2p<sup>6</sup>) with low polarizing power, forming a purely ionic lattice in NaCl that hydrates easily. Ag<sup>+</sup> has a pseudo-noble gas configuration (4d<sup>10</sup> 5s<sup>0</sup>) with high polarizing power, strongly polarizing Cl<sup>-</sup> according to Fajans' rules to impart substantial covalent character, drastically reducing its solubility in polar water.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain the term 'Isoelectronic' and write three ions isoelectronic with CO.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Isoelectronic species have identical total electron counts. Carbon Monoxide (CO) has 6 + 8 = <b>14 electrons</b>. Isoelectronic ions include: <b>N<sub>2</sub> (14e<sup>-</sup>), CN<sup>-</sup> (6 + 7 + 1 = 14e<sup>-</sup>), and NO<sup>+</sup> (7 + 8 - 1 = 14e<sup>-</sup>)</b>. All share identical Bond Order = 3.0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain why Nitrogen cannot form NCl<sub>5</sub>, but Phosphorus readily forms PCl<sub>5</sub>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nitrogen belongs to Period 2 (n = 2) with valence configuration 2s<sup>2</sup> 2p<sup>3</sup>; it has no vacant d-orbitals and cannot expand its octet beyond 4 electron pairs. Phosphorus belongs to Period 3 (n = 3) and possesses accessible vacant 3d orbitals, allowing it to unpair 3s electrons and undergo sp<sup>3</sup>d hybridization to form PCl<sub>5</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain the geometry of SF<sub>4</sub> using VSEPR theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sulfur has 6 valence electrons; in SF<sub>4</sub>, it forms 4 bond pairs and has 1 lone pair (steric number 5, sp<sup>3</sup>d). VSEPR geometry is trigonal bipyramidal. The lone pair occupies an equatorial position to minimize 90&deg; repulsions (experiencing only two 90&deg; repulsions instead of three if placed axially), producing a <b>See-Saw shape</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain the geometry of XeF<sub>2</sub> using VSEPR theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Xenon has 8 valence electrons; in XeF<sub>2</sub>, it forms 2 bond pairs and has 3 lone pairs (steric number 5). All three lone pairs occupy equatorial positions at 120&deg; to cancel repulsions completely, leaving the two Fluorine atoms at axial positions at 180&deg;, yielding a strictly <b>Linear shape</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain why the dipole moment of trans-1,2-dichloroethene is zero, but cis-1,2-dichloroethene has a non-zero dipole moment.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the trans-isomer, the two polar C-Cl bond dipoles point in opposite directions at 180&deg;, and the two C-H dipoles also point in opposite directions, canceling out completely (&mu; = 0 D). In the cis-isomer, both C-Cl dipoles lie on the same side of the double bond, reinforcing each other vectorially to produce a net dipole moment (&mu; = 1.90 D).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Explain the concept of Resonance Energy with Benzene as an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Resonance energy is the difference in energy between the actual resonance hybrid and the most stable canonical Lewis structure. For Benzene (C<sub>6</sub>H<sub>6</sub>), theoretical heat of hydrogenation of cyclohexatriene is -358.5 kJ/mol, while experimental heat of hydrogenation of benzene is only -208 kJ/mol. The difference of <b>150.5 kJ/mol (36 kcal/mol)</b> represents resonance stabilization energy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Why is HF a liquid at room temperature while HCl is a gas?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fluorine is the most electronegative element with a tiny atomic radius. HF forms strong, extensive <b>intermolecular hydrogen bonds</b> (F-H&bull;&bull;&bull;F-H) associating molecules into zigzag liquid chains. In HCl, Chlorine is larger and less electronegative, forming only weak van der Waals forces that cannot prevent it from existing as a gas.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Arrange the following in order of increasing bond angle: H<sub>2</sub>O, H<sub>2</sub>S, H<sub>2</sub>Se, H<sub>2</sub>Te.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      As the central atom size increases and electronegativity decreases from O to Te, bonding pairs move farther from the central nucleus, reducing bp-bp repulsion: <b>H<sub>2</sub>Te (90&deg;) &lt; H<sub>2</sub>Se (91&deg;) &lt; H<sub>2</sub>S (92.1&deg;) &lt; H<sub>2</sub>O (104.5&deg;)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain why BeH<sub>2</sub> molecule has a zero dipole moment.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Beryllium in BeH<sub>2</sub> is sp hybridized with a linear geometry (H-Be-H bond angle 180&deg;). The two equal Be-H bond dipoles pull in directly opposite directions along the same line, resulting in a net dipole moment &mu; = 0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain the term 'Polarizability' of an anion in Fajans' rules.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Polarizability is the ease with which the electron cloud of an anion can be distorted from spherical symmetry by the electric field of an adjacent cation. Larger anions with more diffuse valence clouds (e.g., I<sup>-</sup> vs F<sup>-</sup>) are more easily polarized, increasing shared electron density and covalent character.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: What is the total number of sigma and pi bonds in: (a) Benzene (C<sub>6</sub>H<sub>6</sub>), (b) Toluene (C<sub>7</sub>H<sub>8</sub>)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (a) <b style="color: #43A047;">Benzene:</b> 6 C-C &sigma; + 6 C-H &sigma; = <b>12 &sigma; bonds</b>, and <b>3 &pi; bonds</b>.<br/>(b) <b style="color: #43A047;">Toluene:</b> 12 &sigma; (ring) + 3 &sigma; (methyl C-H) + 1 &sigma; (ring-methyl C-C) = <b>15 &sigma; bonds</b>, and <b>3 &pi; bonds</b>.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(67, 160, 71, 0.15), rgba(46, 125, 50, 0.15)); border: 1.5px solid rgba(67, 160, 71, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #43A047; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master VSEPR Derivations, Full MO Energy Diagrams &amp; Comprehensive Theory Proofs</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss VSEPR Theory comprehensively: Postulates, Repulsion Hierarchy, and Complete Derivation of Molecular Shapes for SN = 2, 3, 4, 5, 6, 7.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Core Postulates:</b> Valence shell electron pairs repel one another and adopt spatial arrangements minimizing repulsion. Repulsion hierarchy: <b>lp - lp &gt; lp - bp &gt; bp - bp</b>.<br/><br/><b style="color: #43A047;">2. Geometries without Lone Pairs:</b> SN=2 Linear (180&deg;, BeCl<sub>2</sub>); SN=3 Trigonal Planar (120&deg;, BF<sub>3</sub>); SN=4 Tetrahedral (109.5&deg;, CH<sub>4</sub>); SN=5 Trigonal Bipyramidal (equatorial 120&deg;, axial 90&deg;, PCl<sub>5</sub>); SN=6 Octahedral (90&deg;, SF<sub>6</sub>); SN=7 Pentagonal Bipyramidal (72&deg;, 90&deg;, IF<sub>7</sub>).<br/><br/><b style="color: #43A047;">3. Shapes with Lone Pairs:</b><br/>&bull; SN=4: AB<sub>3</sub>E Pyramidal (107&deg;, NH<sub>3</sub>); AB<sub>2</sub>E<sub>2</sub> Bent (104.5&deg;, H<sub>2</sub>O).<br/>&bull; SN=5: AB<sub>4</sub>E See-Saw (SF<sub>4</sub>, lp equatorial); AB<sub>3</sub>E<sub>2</sub> T-shaped (ClF<sub>3</sub>); AB<sub>2</sub>E<sub>3</sub> Linear (XeF<sub>2</sub>).<br/>&bull; SN=6: AB<sub>5</sub>E Square Pyramidal (BrF<sub>5</sub>); AB<sub>4</sub>E<sub>2</sub> Square Planar (XeF<sub>4</sub>, lp trans).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Explain Valence Bond Theory (VBT) and Orbital Overlap: Heitler-London Treatment, Potential Energy Diagram of H2, and Sigma vs Pi Overlap.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Heitler-London Treatment:</b> When two isolated H atoms approach from infinity, attractive forces (between nucleus of one and electron of other) and repulsive forces (between nuclei and between electrons) operate.<br/><br/><b style="color: #43A047;">2. Potential Energy Curve:</b> As internuclear distance decreases, attractive forces dominate and potential energy decreases to a minimum (-435.8 kJ/mol) at equilibrium bond distance r<sub>0</sub> = 74 pm. At distances &lt; 74 pm, nuclear repulsion dominates and potential energy rises sharply.<br/><br/><b style="color: #43A047;">3. Sigma (&sigma;) Overlap:</b> Coaxial overlap along internuclear axis (s-s, s-p, p-p). Symmetrical around bond axis with free rotation.<br/><br/><b style="color: #43A047;">4. Pi (&pi;) Overlap:</b> Lateral overlap of parallel p-orbitals. Produces nodal plane along internuclear axis with restricted rotation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Discuss Hybridization in complete depth: Principles, Types (sp, sp2, sp3, sp3d, sp3d2), and Shapes of C2H2, C2H4, CH4, PCl5, and SF6.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Principles:</b> Atomic orbitals of same atom with similar energies mix to produce equivalent hybrid orbitals with maximum directional symmetry.<br/><br/><b style="color: #43A047;">2. Types &amp; Examples:</b><br/>&bull; <i>sp (Linear 180&deg;):</i> BeCl<sub>2</sub>, C<sub>2</sub>H<sub>2</sub> (each C has 1 &sigma; and 2 &pi; bonds).<br/>&bull; <i>sp<sup>2</sup> (Trigonal Planar 120&deg;):</i> BF<sub>3</sub>, C<sub>2</sub>H<sub>4</sub> (each C forms 3 &sigma; and 1 &pi; bond).<br/>&bull; <i>sp<sup>3</sup> (Tetrahedral 109.5&deg;):</i> CH<sub>4</sub> (4 equivalent C-H &sigma; bonds).<br/>&bull; <i>sp<sup>3</sup>d (Trigonal Bipyramidal):</i> PCl<sub>5</sub> (3 equatorial 120&deg; bonds, 2 longer axial 90&deg; bonds).<br/>&bull; <i>sp<sup>3</sup>d<sup>2</sup> (Octahedral 90&deg;):</i> SF<sub>6</sub> (6 equivalent S-F bonds).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Explain Molecular Orbital Theory (MOT) in full detail: Postulates, LCAO Method, Bonding vs Antibonding MOs, and Symmetry Rules.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Postulates:</b> Electrons reside in polycentric molecular orbitals formed by linear combination of atomic orbitals. Total MOs formed = Total combining AOs.<br/><br/><b style="color: #43A047;">2. LCAO Principles:</b> Wave functions combine as &psi;<sub>MO</sub> = c<sub>A</sub>&psi;<sub>A</sub> &plusmn; c<sub>B</sub>&psi;<sub>B</sub>.<br/>&bull; <i>Bonding MO (&psi;<sub>B</sub> = &psi;<sub>A</sub> + &psi;<sub>B</sub>):</i> Constructive interference increases electron probability between nuclei, lowering energy.<br/>&bull; <i>Antibonding MO (&psi;<sub>A</sub>* = &psi;<sub>A</sub> - &psi;<sub>B</sub>):</i> Destructive interference creates a nodal plane between nuclei, raising energy.<br/><br/><b style="color: #43A047;">3. Symmetry Rules:</b> Only AOs with same symmetry about internuclear axis can combine (e.g., 2s with 2s; 2p<sub>z</sub> with 2p<sub>z</sub> form &sigma; MOs; 2p<sub>x</sub> and 2p<sub>y</sub> form &pi; MOs).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Construct and compare the Molecular Orbital Diagrams for N2 and O2: Electronic configurations, Bond Orders, and Magnetic Properties.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. N<sub>2</sub> (14e<sup>-</sup>, with sp-mixing):</b><br/>Configuration: &sigma;1s<sup>2</sup> &sigma;*1s<sup>2</sup> &sigma;2s<sup>2</sup> &sigma;*2s<sup>2</sup> (&pi;2p<sub>x</sub><sup>2</sup> = &pi;2p<sub>y</sub><sup>2</sup>) &sigma;2p<sub>z</sub><sup>2</sup>.<br/>Bond Order = <sup>1</sup>/<sub>2</sub> (10 - 4) = <b>3.0 (Triple bond)</b>. All electrons paired &rArr; <b>Diamagnetic</b>.<br/><br/><b>2. O<sub>2</sub> (16e<sup>-</sup>, without sp-mixing):</b><br/>Configuration: &sigma;1s<sup>2</sup> &sigma;*1s<sup>2</sup> &sigma;2s<sup>2</sup> &sigma;*2s<sup>2</sup> &sigma;2p<sub>z</sub><sup>2</sup> (&pi;2p<sub>x</sub><sup>2</sup> = &pi;2p<sub>y</sub><sup>2</sup>) (&pi;*2p<sub>x</sub><sup>1</sup> = &pi;*2p<sub>y</sub><sup>1</sup>).<br/>Bond Order = <sup>1</sup>/<sub>2</sub> (10 - 6) = <b>2.0 (Double bond)</b>. Contains two unpaired electrons in &pi;* degenerate orbitals &rArr; <b>Paramagnetic</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss Hydrogen Bonding in exhaustive detail: Conditions, Types (Inter vs Intra), Physical Consequences on boiling points, solubility, and ice structure.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Requirements:</b> Hydrogen atom bonded to small, highly electronegative atom (F, O, N) with lone pairs.<br/><br/><b style="color: #43A047;">2. Types:</b><br/>&bull; <i>Intermolecular:</i> Between separate molecules (H<sub>2</sub>O, HF, NH<sub>3</sub>), elevating boiling points and viscosities.<br/>&bull; <i>Intramolecular:</i> Within same molecule (o-nitrophenol), lowering boiling point and enhancing volatility.<br/><br/><b style="color: #43A047;">3. Physical Consequences:</b><br/>&bull; <i>Water vs H<sub>2</sub>S:</i> H<sub>2</sub>O is liquid at room temp (bp 100&deg;C); H<sub>2</sub>S is gas (bp -60&deg;C).<br/>&bull; <i>Ice Density:</i> Tetrahedral open-cage lattice creates empty voids. Upon melting at 0&deg;C, cage collapses, increasing density (maximum at 4&deg;C), allowing aquatic life survival.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain Fajans' Rules in comprehensive depth: Factors governing polarization, percentage covalent character, and effects on melting points and solubilities.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Factors:</b><br/>&bull; <i>Cation Size:</i> Smaller cation &rArr; higher polarizing power (LiCl &gt; NaCl).<br/>&bull; <i>Anion Size:</i> Larger anion &rArr; higher polarizability (AgI &gt; AgBr &gt; AgCl &gt; AgF).<br/>&bull; <i>Charge:</i> Higher ionic charges increase polarization (SnCl<sub>4</sub> &gt; SnCl<sub>2</sub>, AlCl<sub>3</sub> &gt; MgCl<sub>2</sub> &gt; NaCl).<br/>&bull; <i>Electronic Configuration:</i> Cations with pseudo-noble gas core ((n-1)d<sup>10</sup>ns<sup>0</sup>) polarize more effectively than noble gas cores (CuCl &gt; NaCl).<br/><br/><b style="color: #43A047;">2. Physical Manifestations:</b> Covalency lowers melting points and decreases solubility in polar solvents like water.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Explain Dipole Moment (&mu;) in polyatomic molecules: Vector addition, symmetrical cancellation, and determination of cis-trans isomerism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Vector Nature:</b> Net dipole moment &mu;<sub>net</sub> = &radic;[&mu;<sub>1</sub><sup>2</sup> + &mu;<sub>2</sub><sup>2</sup> + 2&mu;<sub>1</sub>&mu;<sub>2</sub> cos &theta;].<br/><br/><b style="color: #43A047;">2. Symmetrical Cancellation:</b> Highly symmetrical structures (linear BeF<sub>2</sub>, trigonal planar BF<sub>3</sub>, tetrahedral CCl<sub>4</sub>) have individual bond moments that cancel vectorially, giving &mu;<sub>net</sub> = 0 D.<br/><br/><b style="color: #43A047;">3. Cis-Trans Distinction:</b> In trans-1,2-dichloroethene, opposing bond vectors cancel (&mu; = 0 D); in cis-isomer, dipoles reinforce (&mu; = 1.90 D). Provides definitive spectroscopic identification of geometrical isomers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Analyze the Molecular Orbital configurations and relative stabilities of all species of the Nitrogen system: N2, N2+, N2-, N2(2-).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. N<sub>2</sub> (14e<sup>-</sup>):</b> BO = (10 - 4)/2 = <b>3.0</b> (Diamagnetic). Highest bond energy (945 kJ/mol).<br/><b>2. N<sub>2</sub><sup>+</sup> (13e<sup>-</sup>):</b> BO = (9 - 4)/2 = <b>2.5</b> (Paramagnetic, 1 unpaired e<sup>-</sup> in &sigma;2p<sub>z</sub>).<br/><b>3. N<sub>2</sub><sup>-</sup> (15e<sup>-</sup>):</b> BO = (10 - 5)/2 = <b>2.5</b> (Paramagnetic, 1 unpaired e<sup>-</sup> in &pi;*2p).<br/><b>4. N<sub>2</sub><sup>2-</sup> (16e<sup>-</sup>):</b> BO = (10 - 6)/2 = <b>2.0</b> (Paramagnetic, 2 unpaired e<sup>-</sup> in &pi;*2p).<br/>Stability order: <b>N<sub>2</sub> &gt; N<sub>2</sub><sup>+</sup> &gt; N<sub>2</sub><sup>-</sup> &gt; N<sub>2</sub><sup>2-</sup></b> (N<sub>2</sub><sup>+</sup> is slightly more stable than N<sub>2</sub><sup>-</sup> because N<sub>2</sub><sup>-</sup> has an extra destabilizing antibonding electron).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Explain the concept of Resonance: Conditions, Resonance Hybrid, Stability, and complete canonical structures of CO3(2-), NO3(-), and SO4(2-).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Definition:</b> Phenomenon where two or more non-equivalent Lewis structures combine to represent a molecule.<br/><br/><b style="color: #43A047;">2. Canonical Structures:</b><br/>&bull; <i>CO<sub>3</sub><sup>2-</sup>:</i> Three equivalent canonical structures where C=O double bond alternates among three oxygen atoms. All C-O bonds are identical (129 pm, BO = 1.33).<br/>&bull; <i>NO<sub>3</sub><sup>-</sup>:</i> Three equivalent structures with identical N-O bonds (BO = 1.33).<br/>&bull; <i>SO<sub>4</sub><sup>2-</sup>:</i> Six equivalent structures with expanded sulfur octet, yielding average S-O bond order of 1.5.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Discuss the Electronic Structures and Geometries of Noble Gas Fluorides and Oxides: XeF2, XeF4, XeF6, XeOF4, XeO3.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. XeF<sub>2</sub>:</b> Steric No = 5 (2 bp, 3 lp) &rArr; sp<sup>3</sup>d hybridization; <b>Linear geometry</b> (180&deg;).<br/><b>2. XeF<sub>4</sub>:</b> Steric No = 6 (4 bp, 2 lp) &rArr; sp<sup>3</sup>d<sup>2</sup> hybridization; <b>Square Planar geometry</b> (90&deg;).<br/><b>3. XeF<sub>6</sub>:</b> Steric No = 7 (6 bp, 1 lp) &rArr; sp<sup>3</sup>d<sup>3</sup> hybridization; <b>Distorted Octahedral geometry</b>.<br/><b>4. XeOF<sub>4</sub>:</b> Steric No = 6 (5 bp, 1 lp) &rArr; sp<sup>3</sup>d<sup>2</sup> hybridization; <b>Square Pyramidal geometry</b>.<br/><b>5. XeO<sub>3</sub>:</b> Steric No = 4 (3 bp, 1 lp) &rArr; sp<sup>3</sup> hybridization; <b>Trigonal Pyramidal geometry</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Compare Valence Bond Theory (VBT) and Molecular Orbital Theory (MOT) in an exhaustive comparative matrix.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Electrons:</b> VBT treats electrons as localized in atomic orbitals; MOT treats electrons as delocalized in polycentric molecular orbitals.<br/><b style="color: #43A047;">2. Overlap:</b> VBT involves overlap of valence AOs; MOT combines all AOs of comparable energy via LCAO.<br/><b style="color: #43A047;">3. Paramagnetism:</b> VBT cannot explain the paramagnetism of O<sub>2</sub> (predicts all paired electrons); MOT naturally explains O<sub>2</sub> paramagnetism via unpaired &pi;* electrons.<br/><b style="color: #43A047;">4. Resonating Concepts:</b> VBT requires resonance to explain bond equivalency; MOT explains fractional bond orders directly without resonance.<br/><b style="color: #43A047;">5. Bond Existence:</b> VBT cannot explain one-electron bonds (H<sub>2</sub><sup>+</sup>); MOT easily predicts stability of H<sub>2</sub><sup>+</sup> (BO = 0.5).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain the bonding and structure of Diborane (B2H6): 3-Center 2-Electron (3c-2e) Banana Bonds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Diborane has 12 valence electrons, insufficient for 7 regular 2c-2e bonds. Each boron is sp<sup>3</sup> hybridized. Four terminal B-H bonds are conventional 2-center 2-electron &sigma;-bonds lying in one plane. The two central bridging hydrogen atoms lie above and below the plane. Each bridge bond involves overlap of one sp<sup>3</sup> hybrid orbital from each Boron and the 1s orbital of Hydrogen, forming a <b>3-center 2-electron (3c-2e) Banana Bond</b>. Reduces electron deficiency.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the anomalous properties of second-period fluorides and hydrides due to Hydrogen Bonding.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hydrogen fluoride (HF) exhibits anomalous behavior compared to HCl, HBr, and HI due to intense hydrogen bonding: (1) Liquid at room temperature (bp 19.5&deg;C vs -85&deg;C for HCl). (2) Weak acid in dilute aqueous solution due to high H-F bond enthalpy and strong H-bonding. (3) Forms stable bifluoride salts like KHF<sub>2</sub> containing the symmetrical [F-H&bull;&bull;&bull;F]<sup>-</sup> linear ion, which no other halogen can form.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain the Variation of Bond Order, Bond Length, and Bond Energy across the Homonuclear Diatomic Series of Period 2: Li2 to F2.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Using MOT configurations:<br/>&bull; Li<sub>2</sub> (6e<sup>-</sup>): BO = 1, BL = 267 pm, BE = 110 kJ/mol.<br/>&bull; Be<sub>2</sub> (8e<sup>-</sup>): BO = 0 (Does not exist).<br/>&bull; B<sub>2</sub> (10e<sup>-</sup>): BO = 1, BL = 159 pm, BE = 290 kJ/mol.<br/>&bull; C<sub>2</sub> (12e<sup>-</sup>): BO = 2, BL = 124 pm, BE = 602 kJ/mol (two &pi; bonds).<br/>&bull; N<sub>2</sub> (14e<sup>-</sup>): BO = 3, BL = 110 pm, BE = 945 kJ/mol (maximum stability).<br/>&bull; O<sub>2</sub> (16e<sup>-</sup>): BO = 2, BL = 121 pm, BE = 498 kJ/mol.<br/>&bull; F<sub>2</sub> (18e<sup>-</sup>): BO = 1, BL = 142 pm, BE = 155 kJ/mol.<br/>Proves: <b>Higher Bond Order &rArr; Shorter Bond Length &amp; Higher Bond Energy</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Explain the hybridization and shapes of Phosphorus Halides: PCl3, PCl5, and the solid-state structure of PCl5.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. PCl<sub>3</sub>:</b> Phosphorus is sp<sup>3</sup> hybridized with 3 bond pairs and 1 lone pair &rArr; <b>Trigonal Pyramidal</b> (bond angle ~100&deg;).<br/><b>2. PCl<sub>5(g)</sub>:</b> Phosphorus is sp<sup>3</sup>d hybridized with 5 bond pairs &rArr; <b>Trigonal Bipyramidal</b> (axial bonds longer than equatorial).<br/><b>3. PCl<sub>5(s)</sub> in Solid State:</b> Exists as an ionic crystal lattice composed of tetrahedral cations and octahedral anions: <b>[PCl<sub>4</sub>]<sup>+</sup> [PCl<sub>6</sub>]<sup>-</sup></b>. [PCl<sub>4</sub>]<sup>+</sup> is sp<sup>3</sup> tetrahedral; [PCl<sub>6</sub>]<sup>-</sup> is sp<sup>3</sup>d<sup>2</sup> octahedral.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Discuss the concept of Metallic Bonding: Electron Sea Model vs Band Theory of Conductors, Semiconductors, and Insulators.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Electron Sea Model (Drude-Lorentz):</b> Metal consists of fixed positive kernels (cations) immersed in a sea of delocalized, mobile valence electrons. Explains electrical conductivity, thermal conductivity, metallic lustre, and malleability.<br/><br/><b style="color: #43A047;">2. Band Theory:</b> Molecular orbitals merge into continuous energy bands.<br/>&bull; <i>Conductors:</i> Valence band and conduction band overlap or conduction band is partially filled; electrons flow freely.<br/>&bull; <i>Insulators:</i> Large forbidden energy gap (&Delta;E &gt; 3 eV) between valence and conduction band; electrons cannot cross.<br/>&bull; <i>Semiconductors:</i> Small band gap (&Delta;E &lt; 1.5 eV); thermal energy promotes electrons, increasing conductivity with temperature.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain Bent's Rule and its application in predicting molecular geometries and bond angles.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Formulated by Henry Bent: <i>'More electronegative substituents prefer hybrid orbitals having less s-character (more p-character), whereas more electropositive substituents and lone pairs prefer hybrid orbitals having more s-character.'</i><br/>&bull; <b style="color: #43A047;">Application in PCl<sub>3</sub>F<sub>2</sub>:</b> More electronegative Fluorine atoms occupy the axial positions (sp<sup>3</sup>d axial orbitals have pure p-d character with 0% s-character), while less electronegative Chlorine atoms occupy equatorial positions (sp<sup>2</sup> with 33.3% s-character).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the formation of Coordinate (Dative) Covalent Bonds with complete examples: NH4(+), H3O(+), and coordination complexes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A coordinate bond is a covalent bond in which the shared electron pair is contributed entirely by one of the bonding atoms (the donor, which possesses a lone pair) and accepted by an atom with an empty orbital (the acceptor).<br/>1. <b>Ammonium ion (NH<sub>4</sub><sup>+</sup>):</b> NH<sub>3</sub> donates its nitrogen lone pair to an empty 1s orbital of H<sup>+</sup>: <b>H<sub>3</sub>N: &rarr; H<sup>+</sup></b>.<br/>2. <b>Hydronium ion (H<sub>3</sub>O<sup>+</sup>):</b> H<sub>2</sub>O donates an oxygen lone pair to H<sup>+</sup>: <b>H<sub>2</sub>O: &rarr; H<sup>+</sup></b>.<br/>Once formed, coordinate bonds are identical in length, energy, and polarity to regular covalent bonds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #43A047; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an exhaustive Master Synthesis Matrix correlating Lewis Theory, VSEPR Geometry, Hybridization, and MOT Configurations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #43A047;">1. Lewis Theory:</b> Octet rule, valence dot structures, formal charges (FC = V - L - <sup>1</sup>/<sub>2</sub>S), and covalent parameters.<br/><br/><b style="color: #43A047;">2. VSEPR Theory:</b> Repulsion hierarchy (lp-lp &gt; lp-bp &gt; bp-bp) determines 3D shapes: Linear (AB<sub>2</sub>), Trigonal Planar (AB<sub>3</sub>), Tetrahedral (AB<sub>4</sub>), Pyramidal (AB<sub>3</sub>E), Bent (AB<sub>2</sub>E<sub>2</sub>), Trigonal Bipyramidal (AB<sub>5</sub>), See-Saw (AB<sub>4</sub>E), T-shaped (AB<sub>3</sub>E<sub>2</sub>), Octahedral (AB<sub>6</sub>), Square Planar (AB<sub>4</sub>E<sub>2</sub>).<br/><br/><b style="color: #43A047;">3. Hybridization:</b> Steric Number = <sup>1</sup>/<sub>2</sub>[V + M - C + A] &rArr; sp (180&deg;), sp<sup>2</sup> (120&deg;), sp<sup>3</sup> (109.5&deg;), sp<sup>3</sup>d (90&deg;/120&deg;), sp<sup>3</sup>d<sup>2</sup> (90&deg;).<br/><br/><b style="color: #43A047;">4. MOT:</b> LCAO forms bonding and antibonding orbitals; Bond Order = <sup>1</sup>/<sub>2</sub>(N<sub>b</sub> - N<sub>a</sub>); explains bond stability and paramagnetism (O<sub>2</sub>, B<sub>2</sub>).<br/><br/><b style="color: #43A047;">5. Secondary Forces:</b> Intermolecular and intramolecular Hydrogen bonding dictate anomalous physical constants of water, ice, and biomolecules.
    </div>
  </div>

</div>
`;

export const c11Chem4Mcqs = [
  {
    "id": "c11-chem-4-mcq-1",
    "question": "Which of the following molecules has an incomplete octet on the central atom?",
    "options": [
      "A):   CH<sub>4</sub>",
      "B):   BF<sub>3</sub>",
      "C):   NH<sub>3</sub>",
      "D):   H<sub>2</sub>O"
    ],
    "correctAnswer": "b",
    "explanation": "In BF<sub>3</sub>, Boron is surrounded by only 6 valence electrons (3 bond pairs), violating the octet rule as an electron-deficient species."
  },
  {
    "id": "c11-chem-4-mcq-2",
    "question": "The formal charge on the central Oxygen atom in an Ozone molecule (O<sub>3</sub>) is:",
    "options": [
      "A):   0",
      "B):   +1",
      "C):   -1",
      "D):   +2"
    ],
    "correctAnswer": "b",
    "explanation": "For central O: FC = 6 - 2 - 1/2(6) = +1."
  },
  {
    "id": "c11-chem-4-mcq-3",
    "question": "Which of the following molecules possesses a permanent non-zero dipole moment?",
    "options": [
      "A):   CO<sub>2</sub>",
      "B):   BF<sub>3</sub>",
      "C):   NF<sub>3</sub>",
      "D):   CCl<sub>4</sub>"
    ],
    "correctAnswer": "c",
    "explanation": "NF<sub>3</sub> has an asymmetric trigonal pyramidal geometry with one lone pair, giving it a net dipole moment of 0.24 D."
  },
  {
    "id": "c11-chem-4-mcq-4",
    "question": "According to Fajans' rules, covalent character in an ionic bond is favored by:",
    "options": [
      "A):   Large cation and small anion",
      "B):   Small cation and large anion",
      "C):   Low charge on both ions",
      "D):   Noble gas configuration on cation"
    ],
    "correctAnswer": "b",
    "explanation": "A small cation has high polarizing power and a large anion is easily polarizable, leading to high covalent character."
  },
  {
    "id": "c11-chem-4-mcq-5",
    "question": "What is the molecular geometry of Sulfur Tetrafluoride (SF<sub>4</sub>) according to VSEPR theory?",
    "options": [
      "A):   Tetrahedral",
      "B):   Square planar",
      "C):   See-saw",
      "D):   Trigonal bipyramidal"
    ],
    "correctAnswer": "c",
    "explanation": "SF<sub>4</sub> has 4 bond pairs and 1 lone pair (AB<sub>4</sub>E), which adopts a See-Saw shape with the lone pair at an equatorial position."
  },
  {
    "id": "c11-chem-4-mcq-6",
    "question": "The hybridization of Xenon in Xenon Tetrafluoride (XeF<sub>4</sub>) is:",
    "options": [
      "A):   sp<sup>3</sup>",
      "B):   sp<sup>3</sup>d",
      "C):   sp<sup>3</sup>d<sup>2</sup>",
      "D):   dsp<sup>2</sup>"
    ],
    "correctAnswer": "c",
    "explanation": "XeF<sub>4</sub> has 4 bond pairs and 2 lone pairs (Steric Number = 6 &rArr; sp<sup>3</sup>d<sup>2</sup> hybridization) with a square planar geometry."
  },
  {
    "id": "c11-chem-4-mcq-7",
    "question": "Why are the axial bonds longer and weaker than equatorial bonds in PCl<sub>5</sub>?",
    "options": [
      "A):   Axial bonds have greater s-character",
      "B):   Axial bond pairs experience greater repulsion from equatorial pairs at 90°",
      "C):   Equatorial bonds are ionic",
      "D):   Phosphorus has an odd electron"
    ],
    "correctAnswer": "b",
    "explanation": "Axial bond pairs suffer electrostatic repulsion from 3 equatorial pairs at 90&deg;, forcing them outward to longer bond lengths (240 pm vs 202 pm)."
  },
  {
    "id": "c11-chem-4-mcq-8",
    "question": "According to Molecular Orbital Theory, which of the following diatomic species is paramagnetic?",
    "options": [
      "A):   N<sub>2</sub>",
      "B):   O<sub>2</sub>",
      "C):   C<sub>2</sub>",
      "D):   Li<sub>2</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "O<sub>2</sub> has two unpaired electrons in degenerate &pi;*2p<sub>x</sub> and &pi;*2p<sub>y</sub> antibonding orbitals, making it paramagnetic."
  },
  {
    "id": "c11-chem-4-mcq-9",
    "question": "What is the Bond Order of the Peroxide ion (O<sub>2</sub><sup>2-</sup>)?",
    "options": [
      "A):   1.0",
      "B):   1.5",
      "C):   2.0",
      "D):   2.5"
    ],
    "correctAnswer": "a",
    "explanation": "O<sub>2</sub><sup>2-</sup> has 18 electrons: BO = 1/2 (N<sub>b</sub> - N<sub>a</sub>) = 1/2 (10 - 8) = 1.0."
  },
  {
    "id": "c11-chem-4-mcq-10",
    "question": "Which of the following compounds exhibits intramolecular hydrogen bonding?",
    "options": [
      "A):   p-Nitrophenol",
      "B):   o-Nitrophenol",
      "C):   Water",
      "D):   Ethanol"
    ],
    "correctAnswer": "b",
    "explanation": "o-Nitrophenol forms an intramolecular hydrogen bond (chelate ring) between its adjacent -OH and -NO<sub>2</sub> groups."
  },
  {
    "id": "c11-chem-4-mcq-11",
    "question": "The shape of the Triiodide ion (I<sub>3</sub><sup>-</sup>) is:",
    "options": [
      "A):   Bent",
      "B):   Linear",
      "C):   T-shaped",
      "D):   Trigonal planar"
    ],
    "correctAnswer": "b",
    "explanation": "Central Iodine has 2 bond pairs and 3 lone pairs (sp<sup>3</sup>d); the 3 lone pairs occupy equatorial positions, leaving a Linear geometry (180&deg;)."
  },
  {
    "id": "c11-chem-4-mcq-12",
    "question": "What is the hybridization of the central atom in Chlorine Trifluoride (ClF<sub>3</sub>)?",
    "options": [
      "A):   sp<sup>3</sup>",
      "B):   sp<sup>3</sup>d",
      "C):   sp<sup>3</sup>d<sup>2</sup>",
      "D):   sp<sup>2</sup>"
    ],
    "correctAnswer": "b",
    "explanation": "ClF<sub>3</sub> has 3 bond pairs and 2 lone pairs (Steric Number = 5 &rArr; sp<sup>3</sup>d hybridization) with a T-shaped geometry."
  },
  {
    "id": "c11-chem-4-mcq-13",
    "question": "The correct order of bond angles in CH<sub>4</sub>, NH<sub>3</sub>, and H<sub>2</sub>O is:",
    "options": [
      "A):   CH<sub>4</sub> &gt; NH<sub>3</sub> &gt; H<sub>2</sub>O",
      "B):   H<sub>2</sub>O &gt; NH<sub>3</sub> &gt; CH<sub>4</sub>",
      "C):   NH<sub>3</sub> &gt; CH<sub>4</sub> &gt; H<sub>2</sub>O",
      "D):   CH<sub>4</sub> = NH<sub>3</sub> = H<sub>2</sub>O"
    ],
    "correctAnswer": "a",
    "explanation": "Bond angles decrease with increasing lone pairs due to lone pair-bond pair repulsion: CH<sub>4</sub> (109.5&deg;) &gt; NH<sub>3</sub> (107&deg;) &gt; H<sub>2</sub>O (104.5&deg;)."
  },
  {
    "id": "c11-chem-4-mcq-14",
    "question": "Which of the following diatomic species has a Bond Order equal to 3.0?",
    "options": [
      "A):   O<sub>2</sub>",
      "B):   N<sub>2</sub>",
      "C):   F<sub>2</sub>",
      "D):   B<sub>2</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "N<sub>2</sub> (14 electrons) has BO = 1/2 (10 - 4) = 3.0, representing a strong N&equiv;N triple bond."
  },
  {
    "id": "c11-chem-4-mcq-15",
    "question": "Why is ice less dense than liquid water at 0°C?",
    "options": [
      "A):   Water molecules ionize in ice",
      "B):   Ice forms an open 3D cage-like lattice with empty voids due to hydrogen bonding",
      "C):   Ice has covalent bonds between molecules",
      "D):   Ice contains dissolved air bubbles"
    ],
    "correctAnswer": "b",
    "explanation": "In ice, each water molecule is tetrahedrally hydrogen-bonded to 4 others in an open-cage structure containing large voids, making ice less dense than water."
  },
  {
    "id": "c11-chem-4-mcq-16",
    "question": "The percentage of s-character in an sp<sup>2</sup> hybrid orbital is:",
    "options": [
      "A):   50%",
      "B):   33.3%",
      "C):   25%",
      "D):   20%"
    ],
    "correctAnswer": "b",
    "explanation": "sp<sup>2</sup> hybridization mixes one s and two p orbitals; s-character = 1 / (1 + 2) = 1/3 = 33.3%."
  },
  {
    "id": "c11-chem-4-mcq-17",
    "question": "The total number of sigma (&sigma;) and pi (&pi;) bonds in an Ethyne molecule (HC&equiv;CH) is:",
    "options": [
      "A):   2 &sigma; and 2 &pi;",
      "B):   3 &sigma; and 2 &pi;",
      "C):   2 &sigma; and 3 &pi;",
      "D):   4 &sigma; and 1 &pi;"
    ],
    "correctAnswer": "b",
    "explanation": "Ethyne has two C-H &sigma;-bonds, one C-C &sigma;-bond, and two C-C &pi;-bonds (total 3 &sigma; and 2 &pi; bonds)."
  },
  {
    "id": "c11-chem-4-mcq-18",
    "question": "Which of the following molecules has a square planar geometry?",
    "options": [
      "A):   CCl<sub>4</sub>",
      "B):   XeF<sub>4</sub>",
      "C):   SF<sub>4</sub>",
      "D):   SiF<sub>4</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "XeF<sub>4</sub> has 4 bonding pairs and 2 lone pairs at trans positions, producing a square planar shape."
  },
  {
    "id": "c11-chem-4-mcq-19",
    "question": "According to MOT, the bond order of Helium molecule (He<sub>2</sub>) is:",
    "options": [
      "A):   1",
      "B):   0.5",
      "C):   0",
      "D):   2"
    ],
    "correctAnswer": "c",
    "explanation": "He<sub>2</sub> has configuration &sigma;1s<sup>2</sup> &sigma;*1s<sup>2</sup>; BO = 1/2 (2 - 2) = 0, so He<sub>2</sub> cannot exist."
  },
  {
    "id": "c11-chem-4-mcq-20",
    "question": "Which of the following compounds has the highest lattice enthalpy?",
    "options": [
      "A):   NaCl",
      "B):   KCl",
      "C):   MgO",
      "D):   CaO"
    ],
    "correctAnswer": "c",
    "explanation": "Lattice enthalpy is proportional to (q<sub>1</sub> &times; q<sub>2</sub>) / r. Mg<sup>2+</sup> and O<sup>2-</sup> have divalent charges (+2 and -2) and smaller radii than Ca<sup>2+</sup>, maximizing lattice enthalpy."
  },
  {
    "id": "c11-chem-4-mcq-21",
    "question": "Which of the following pairs of elements forms the strongest hydrogen bond?",
    "options": [
      "A):   H and Cl",
      "B):   H and F",
      "C):   H and O",
      "D):   H and N"
    ],
    "correctAnswer": "b",
    "explanation": "Fluorine is the most electronegative and smallest atom, forming the strongest H-bond (F-H&bull;&bull;&bull;F, ~40 kJ/mol)."
  },
  {
    "id": "c11-chem-4-mcq-22",
    "question": "The bond order of Superoxide ion (O<sub>2</sub><sup>-</sup>) is:",
    "options": [
      "A):   2.5",
      "B):   2.0",
      "C):   1.5",
      "D):   1.0"
    ],
    "correctAnswer": "c",
    "explanation": "O<sub>2</sub><sup>-</sup> has 17 electrons: BO = 1/2 (10 - 7) = 1.5."
  },
  {
    "id": "c11-chem-4-mcq-23",
    "question": "The geometry of Phosphorus Trichloride (PCl<sub>3</sub>) is:",
    "options": [
      "A):   Trigonal planar",
      "B):   Trigonal pyramidal",
      "C):   T-shaped",
      "D):   Tetrahedral"
    ],
    "correctAnswer": "b",
    "explanation": "PCl<sub>3</sub> has 3 bond pairs and 1 lone pair on Phosphorus (sp<sup>3</sup>), forming a trigonal pyramidal shape."
  },
  {
    "id": "c11-chem-4-mcq-24",
    "question": "Which of the following has a linear molecular shape?",
    "options": [
      "A):   SO<sub>2</sub>",
      "B):   NO<sub>2</sub>",
      "C):   BeCl<sub>2</sub>",
      "D):   H<sub>2</sub>O"
    ],
    "correctAnswer": "c",
    "explanation": "Beryllium in BeCl<sub>2</sub> is sp hybridized with 2 bond pairs and no lone pairs, forming a 180&deg; linear shape."
  },
  {
    "id": "c11-chem-4-mcq-25",
    "question": "In solid state, PCl<sub>5</sub> exists as:",
    "options": [
      "A):   Discrete PCl<sub>5</sub> covalent molecules",
      "B):   [PCl<sub>4</sub>]<sup>+</sup> and [PCl<sub>6</sub>]<sup>-</sup> ions",
      "C):   PCl<sub>3</sub> and Cl<sub>2</sub> molecules",
      "D):   Polymeric P<sub>2</sub>Cl<sub>10</sub>"
    ],
    "correctAnswer": "b",
    "explanation": "Solid PCl<sub>5</sub> is an ionic crystal composed of tetrahedral [PCl<sub>4</sub>]<sup>+</sup> cations and octahedral [PCl<sub>6</sub>]<sup>-</sup> anions."
  }
];
