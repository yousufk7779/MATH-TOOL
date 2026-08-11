// Class 11 Chemistry Chapter 3 - Classification of Elements & Periodicity in Properties
// High-Level Reference Book Content (PW / Vedantu / RD Sharma / Unacademy Standard)

export const c11Chem3HtmlOverview = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS (SINGLE FRAME CONTAINER) -->
  <div style="background: rgba(0, 176, 155, 0.05); border: 1.5px solid #00b09b; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 style="color: #00b09b; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary & Basic Definitions</h2>
    <p style="color: #80cbc4; margin: 0 0 16px 0; font-size: 14.5px; text-align: center;">Key Fundamental Terms & Concepts for Chapter 3: Classification of Elements & Periodicity</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">1. Periodicity:</span> The repetition of similar physical and chemical properties of elements at regular intervals when arranged by atomic number.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">2. Modern Periodic Law:</span> The physical and chemical properties of elements are periodic functions of their atomic numbers (Z).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">3. Atomic Radius:</span> Distance from center of nucleus to outermost shell containing electrons (~10⁻¹⁰ m).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">4. Covalent Radius:</span> Half of internuclear distance between two identical single-bonded covalent atoms (r_cov = d / 2).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">5. Metallic Radius:</span> Half of internuclear distance between two adjacent metal ions in a metallic lattice.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">6. van der Waals Radius:</span> Half of internuclear distance between two non-bonded adjacent identical atoms in solid state.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">7. Ionic Radius:</span> Effective distance from nucleus of an ion up to which it exerts influence on its electron cloud.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">8. Isoelectronic Species:</span> Atoms or ions possessing exact same total number of electrons (e.g., N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">9. Ionization Enthalpy (Δ_i H):</span> Energy required to remove most loosely bound electron from isolated gaseous atom in ground state.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">10. Electron Gain Enthalpy (Δ_eg H):</span> Enthalpy change when an electron is added to neutral isolated gaseous atom to form anion.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">11. Electronegativity (χ):</span> Relative tendency of an atom in a covalent bond to attract shared electron pair towards itself.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">12. Effective Nuclear Charge (Z_eff):</span> Net positive nuclear charge experienced by valence electron (Z_eff = Z - σ).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">13. Shielding / Screening Effect:</span> Reduction in nuclear attraction on outer electrons due to repulsions by inner shell electrons.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">14. Representative Elements:</span> Elements belonging to s-block and p-block (Groups 1, 2 and 13 to 17).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">15. Transition Elements:</span> d-Block elements (Groups 3 to 12) possessing partially filled d-orbitals in elemental or ionic state.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">16. Inner Transition Elements:</span> f-Block elements (Lanthanoids 4f & Actinoids 5f) placed separately at bottom of periodic table.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">17. Diagonal Relationship:</span> Similarity in chemical properties of second-period element with element diagonally below to right in third period (Li-Mg, Be-Al, B-Si).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">18. Valency:</span> Combining capacity of an element, equal to valence electrons or (8 - valence electrons).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">19. Amphoteric Oxide:</span> Oxide exhibiting both acidic and basic character (e.g., Al₂O₃, ZnO, BeO).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #00b09b; border-radius: 6px;">
        <span style="color: #00b09b; font-weight: bold;">20. Noble Gas Radii:</span> Abnormally large van der Waals radii exhibited by unbonded monoatomic Group 18 inert gases.
      </div>
    </div>
  </div>


  <!-- EXACT SYLLABUS HEADING 1 -->
  <h2 style="color: #00b09b; margin-top: 10px; font-size: 20px; font-weight: bold;">1. Significance of Classification</h2>
  
  <p>With the discovery of over 118 elements, studying the physical and chemical behavior of each element individually became extremely difficult. Classification organizes elements into logical groups and periods based on recurring periodic properties, enabling scientists to predict properties of undiscovered elements and systematically understand chemical reactions.</p>


  <!-- EXACT SYLLABUS HEADING 2 -->
  <h2 style="color: #00b09b; margin-top: 30px; font-size: 20px; font-weight: bold;">2. Brief History of the Development of Periodic Table</h2>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">1. Dobereiner's Law of Triads (Johann Dobereiner, 1829)</h3>
  <p>Arranged chemically similar elements in groups of three called <b>Triads</b>. The atomic mass of the middle element was approximately equal to the arithmetic mean of the atomic masses of the other two elements:</p>
  <ul style="padding-left: 20px;">
    <li><b>Lithium (7.0), Sodium (23.0), Potassium (39.0):</b> Mean = (7 + 39)/2 = <b>23.0</b>.</li>
    <li><b>Calcium (40.0), Strontium (87.6), Barium (137.0):</b> Mean = (40 + 137)/2 = <b>88.5</b>.</li>
    <li><b>Chlorine (35.5), Bromine (80.0), Iodine (127.0):</b> Mean = (35.5 + 127)/2 = <b>81.25</b>.</li>
  </ul>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">2. Newlands' Law of Octaves (John Newlands, 1865)</h3>
  <p>Arranged elements in increasing order of atomic masses and observed that <b>every eighth element had properties similar to the first element</b>, analogous to musical octaves (sa, re, ga, ma, pa, dha, ni, sa).</p>
  <div style="background: rgba(0, 176, 155, 0.08); border-left: 4px solid #00b09b; padding: 12px 16px; border-radius: 6px; margin: 12px 0;">
    <p style="margin: 0;"><span style="color: #00b09b; font-weight: bold;">⚠️ Limitations of Law of Octaves:</span> Applicable only up to Calcium (Z = 20). Failed to accommodate heavier elements and newly discovered noble gases.</p>
  </div>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">3. Lothar Meyer's Atomic Volume Curve (1869)</h3>
  <p>Plotted atomic volume (<span style="display:inline-block; text-align:center; vertical-align:-0.4em;"><span style="border-bottom:1.5px solid currentColor; display:block; padding:0 4px;">Atomic Mass</span><span style="display:block; padding:0 4px;">Density</span></span>$) against atomic mass. Observed that elements with similar properties occupied similar positions on the curve:</p>
  <ul style="padding-left: 20px;">
    <li>Alkali metals (Li, Na, K, Rb, Cs) occupied the <b>peaks</b>.</li>
    <li>Alkaline earth metals (Be, Mg, Ca, Sr, Ba) occupied <b>descending slopes</b>.</li>
    <li>Halogens (F, Cl, Br, I) occupied <b>ascending slopes</b>.</li>
    <li>Transition metals occupied <b>troughs (valleys)</b>.</li>
  </ul>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">4. Mendeleev's Periodic Law and Table (Dmitri Mendeleev, 1869)</h3>
  <div style="background: rgba(0, 176, 155, 0.08); border-left: 4px solid #00b09b; padding: 12px 16px; border-radius: 6px; margin: 12px 0;">
    <p style="margin: 0; font-weight: bold; color: #FFF; font-size: 16px;">"The physical and chemical properties of elements are periodic functions of their atomic masses."</p>
  </div>
  <p>Mendeleev arranged 63 known elements into 8 vertical groups and 7 horizontal periods based on formulas of hydrides and oxides (R₂O, RO, R₂O₃, etc.).</p>
  
  <h4 style="color: #00b09b; margin-top: 14px; font-size: 16px;">Successes & Predictions of Mendeleev:</h4>
  <ul style="padding-left: 20px;">
    <li>Left vacant gaps for undiscovered elements and accurately predicted their properties:
      <ul>
        <li><b>Eka-Aluminium:</b> Discovered later as <b>Gallium (Ga)</b>.</li>
        <li><b>Eka-Silicon:</b> Discovered later as <b>Germanium (Ge)</b>.</li>
        <li><b>Eka-Boron:</b> Discovered later as <b>Scandium (Sc)</b>.</li>
      </ul>
    </li>
  </ul>

  <div style="background: rgba(0, 176, 155, 0.08); border-left: 4px solid #00b09b; padding: 12px 16px; border-radius: 6px; margin: 15px 0;">
    <p style="margin: 0;"><span style="color: #00b09b; font-weight: bold; font-size: 16px;">⚠️ Limitations of Mendeleev's Periodic Table:</span><br>
    1. <b>Anomalous Pairs of Elements:</b> Placed elements of higher atomic mass before lower mass elements (e.g., Argon 39.9 before Potassium 39.1; Cobalt 58.9 before Nickel 58.7; Tellurium 127.6 before Iodine 126.9).<br>
    2. <b>Position of Hydrogen:</b> Could not assign a fixed unique position to Hydrogen (resembles Group 1 alkali metals and Group 17 halogens).<br>
    3. <b>Position of Isotopes:</b> Isotopes having different atomic masses had no separate places.<br>
    4. Grouped chemically dissimilar elements together (e.g., Cu, Ag, Au in Group I with alkali metals).</p>
  </div>


  <!-- EXACT SYLLABUS HEADING 3 -->
  <h2 style="color: #00b09b; margin-top: 30px; font-size: 20px; font-weight: bold;">3. Modern Periodic Law and the Present Form of the Periodic Table</h2>

  <!-- EMBED 2D CRYSTAL-CLEAR HTML PERIODIC TABLE CHART -->
  
  <div style="display: block; width: 100%; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 25px 0; border: 1.5px solid #00b09b; border-radius: 12px; background: #0A111E; padding: 16px;">
    <h3 style="color: #00b09b; margin: 0 0 4px 0; font-weight: bold; text-align: center; font-size: 18px;">✨ Modern Periodic Table (High-Definition 2D Vector View)</h3>
    <p style="color: #80cbc4; text-align: center; font-size: 13px; margin: 0 0 16px 0;">Scroll horizontally to view all 18 Groups & 118 Elements clearly with crisp text</p>

    <!-- BLOCK LEGEND -->
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 16px; font-size: 13px;">
      <span style="background: rgba(0, 230, 118, 0.2); border: 1px solid #00E676; color: #00E676; padding: 3px 10px; border-radius: 4px; font-weight: bold;">s-Block (Groups 1-2)</span>
      <span style="background: rgba(255, 179, 0, 0.2); border: 1px solid #FFB300; color: #FFB300; padding: 3px 10px; border-radius: 4px; font-weight: bold;">d-Block (Groups 3-12)</span>
      <span style="background: rgba(0, 176, 255, 0.2); border: 1px solid #00B0FF; color: #00B0FF; padding: 3px 10px; border-radius: 4px; font-weight: bold;">p-Block (Groups 13-18)</span>
      <span style="background: rgba(224, 64, 251, 0.2); border: 1px solid #E040FB; color: #E040FB; padding: 3px 10px; border-radius: 4px; font-weight: bold;">f-Block (Lanthanoids & Actinoids)</span>
    </div>

    <!-- MAIN GRID (18 Groups x 7 Rows) -->
    <div style="display: grid; grid-template-columns: repeat(18, minmax(54px, 1fr)); gap: 4px; min-width: 1000px;">
  
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">1</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">H</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Hydrogen</span>
        </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">2</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">He</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Helium</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">3</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Li</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Lithium</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">4</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Be</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Beryllium</span>
        </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">5</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">B</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Boron</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">6</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">C</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Carbon</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">7</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">N</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Nitrogen</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">8</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">O</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Oxygen</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">9</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">F</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Fluorine</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">10</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Ne</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Neon</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">11</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Na</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Sodium</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">12</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Mg</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Magnesium</span>
        </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">13</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Al</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Aluminium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">14</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Si</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Silicon</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">15</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">P</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Phosphorus</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">16</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">S</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Sulfur</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">17</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Cl</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Chlorine</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">18</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Ar</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Argon</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">19</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">K</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Potassium</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">20</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Ca</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Calcium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">21</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Sc</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Scandium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">22</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Ti</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Titanium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">23</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">V</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Vanadium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">24</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Cr</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Chromium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">25</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Mn</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Manganese</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">26</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Fe</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Iron</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">27</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Co</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Cobalt</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">28</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Ni</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Nickel</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">29</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Cu</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Copper</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">30</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Zn</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Zinc</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">31</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Ga</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Gallium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">32</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Ge</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Germanium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">33</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">As</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Arsenic</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">34</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Se</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Selenium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">35</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Br</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Bromine</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">36</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Kr</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Krypton</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">37</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Rb</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Rubidium</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">38</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Sr</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Strontium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">39</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Y</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Yttrium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">40</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Zr</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Zirconium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">41</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Nb</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Niobium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">42</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Mo</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Molybdenum</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">43</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Tc</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Technetium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">44</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Ru</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Ruthenium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">45</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Rh</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Rhodium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">46</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Pd</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Palladium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">47</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Ag</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Silver</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">48</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Cd</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Cadmium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">49</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">In</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Indium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">50</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Sn</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Tin</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">51</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Sb</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Antimony</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">52</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Te</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Tellurium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">53</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">I</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Iodine</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">54</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Xe</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Xenon</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">55</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Cs</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Cesium</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">56</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Ba</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Barium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">57-71</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">La-Lu</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Lanthanoids</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">72</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Hf</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Hafnium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">73</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Ta</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Tantalum</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">74</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">W</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Tungsten</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">75</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Re</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Rhenium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">76</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Os</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Osmium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">77</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Ir</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Iridium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">78</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Pt</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Platinum</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">79</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Au</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Gold</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">80</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Hg</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Mercury</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">81</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Tl</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Thallium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">82</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Pb</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Lead</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">83</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Bi</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Bismuth</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">84</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Po</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Polonium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">85</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">At</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Astatine</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">86</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Rn</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Radon</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">87</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Fr</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Francium</span>
        </div>
        <div style="background: rgba(0, 230, 118, 0.18); border: 1px solid #00E676; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">88</span>
          <span style="font-size: 14px; font-weight: bold; color: #00E676; line-height: 1.1; margin: 2px 0;">Ra</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Radium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">89-103</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Ac-Lr</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Actinoids</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">104</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Rf</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Rutherfordium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">105</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Db</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Dubnium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">106</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Sg</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Seaborgium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">107</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Bh</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Bohrium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">108</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Hs</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Hassium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">109</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Mt</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Meitnerium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">110</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Ds</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Darmstadtium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">111</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Rg</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Roentgenium</span>
        </div>
        <div style="background: rgba(255, 179, 0, 0.18); border: 1px solid #FFB300; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">112</span>
          <span style="font-size: 14px; font-weight: bold; color: #FFB300; line-height: 1.1; margin: 2px 0;">Cn</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Copernicium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">113</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Nh</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Nihonium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">114</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Fl</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Flerovium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">115</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Mc</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Moscovium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">116</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Lv</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Livermorium</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">117</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Ts</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Tennessine</span>
        </div>
        <div style="background: rgba(0, 176, 255, 0.18); border: 1px solid #00B0FF; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">118</span>
          <span style="font-size: 14px; font-weight: bold; color: #00B0FF; line-height: 1.1; margin: 2px 0;">Og</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Oganesson</span>
        </div>
    </div>

    <!-- LANTHANOIDS & ACTINOIDS SEPARATE BOTTOM GRID -->
    <div style="margin-top: 20px; min-width: 1000px;">
      <p style="color: #E040FB; font-weight: bold; font-size: 13px; margin: 0 0 6px 0; text-align: center;">f-Block: Lanthanoid Series (4f Orbital Filled - Z = 57 to 71)</p>
      <div style="display: grid; grid-template-columns: repeat(15, minmax(54px, 1fr)); gap: 4px;">
  
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">57</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">La</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Lanthanum</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">58</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Ce</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Cerium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">59</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Pr</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Praseodymium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">60</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Nd</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Neodymium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">61</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Pm</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Promethium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">62</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Sm</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Samarium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">63</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Eu</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Europium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">64</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Gd</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Gadolinium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">65</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Tb</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Terbium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">66</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Dy</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Dysprosium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">67</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Ho</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Holmium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">68</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Er</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Erbium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">69</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Tm</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Thulium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">70</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Yb</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Ytterbium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">71</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Lu</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Lutetium</span>
        </div>
      </div>

      <p style="color: #E040FB; font-weight: bold; font-size: 13px; margin: 12px 0 6px 0; text-align: center;">f-Block: Actinoid Series (5f Orbital Filled - Z = 89 to 103)</p>
      <div style="display: grid; grid-template-columns: repeat(15, minmax(54px, 1fr)); gap: 4px;">
  
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">89</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Ac</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Actinium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">90</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Th</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Thorium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">91</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Pa</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Protactinium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">92</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">U</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Uranium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">93</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Np</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Neptunium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">94</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Pu</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Plutonium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">95</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Am</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Americium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">96</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Cm</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Curium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">97</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Bk</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Berkelium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">98</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Cf</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Californium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">99</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Es</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Einsteinium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">100</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Fm</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Fermium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">101</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Md</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Mendelevium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">102</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">No</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Nobelium</span>
        </div>
        <div style="background: rgba(224, 64, 251, 0.18); border: 1px solid #E040FB; border-radius: 6px; padding: 4px 2px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 52px;">
          <span style="font-size: 10px; color: #BBB; line-height: 1;">103</span>
          <span style="font-size: 14px; font-weight: bold; color: #E040FB; line-height: 1.1; margin: 2px 0;">Lr</span>
          <span style="font-size: 9px; color: #DDD; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; line-height: 1;">Lawrencium</span>
        </div>
      </div>
    </div>

  </div>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Modern Periodic Law (Henry Moseley, 1913)</h3>
  <p>Moseley subjected various elements to high-energy electron bombardment and measured the frequency (ν) of characteristic X-rays emitted. He discovered that a plot of <b>√ν versus Atomic Number (Z)</b> yielded a straight line, proving that <b>Atomic Number is a more fundamental property than Atomic Mass</b>:</p>

  <div style="background: rgba(0, 176, 155, 0.08); border-left: 4px solid #00b09b; padding: 12px 16px; border-radius: 6px; margin: 15px 0;">
    <p style="margin: 0; font-weight: bold; color: #FFF; font-size: 16px;">"The physical and chemical properties of elements are periodic functions of their atomic numbers (Z)."</p>
  </div>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Present Form (Long Form) of the Periodic Table</h3>
  <ul style="padding-left: 20px;">
    <li>Based on electronic configuration of elements. Consists of <b>7 horizontal periods</b> and <b>18 vertical groups</b> (IUPAC 1 to 18).</li>
    <li><b>Division into 4 Blocks based on valence orbital filled:</b>
      <ul>
        <li><b>s-Block (Groups 1 & 2):</b> General configuration ns¹⁻². Highly reactive metals with low ionization energy.</li>
        <li><b>p-Block (Groups 13 to 18):</b> General configuration ns² np¹⁻⁶. Includes metals, non-metals, metalloids, halogens, and noble gases (ns² np⁶).</li>
        <li><b>d-Block (Groups 3 to 12 - Transition Elements):</b> General configuration (n-1)d¹⁻¹⁰ ns¹⁻². Form colored ions, variable oxidation states, paramagnetic complexes, and act as catalysts.</li>
        <li><b>f-Block (Inner Transition Elements):</b> Placed at bottom in two series: <b>Lanthanoids (4f¹⁻¹⁴ 5d⁰⁻¹ 6s²)</b> and <b>Actinoids (5f¹⁻¹⁴ 6d⁰⁻¹ 7s²)</b>.</li>
      </ul>
    </li>
  </ul>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">IUPAC Nomenclature for Elements with Z &gt; 100</h3>
  <p>To avoid ownership disputes, IUPAC adopted a systematic naming scheme based on Latin numerical roots for digits 0-9:</p>
  
  <!-- SCROLLABLE TABLE FOR IUPAC DIGITS WITH GUARANTEED HORIZONTAL SCROLL -->
  <div style="display: block; width: 100%; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 16px 0; border: 1.5px solid rgba(0, 176, 155, 0.4); border-radius: 8px; background: rgba(0,0,0,0.3);">
    <table style="display: table; min-width: 750px; width: max-content; border-collapse: collapse; font-size: 14px; white-space: nowrap;">
      <thead>
        <tr style="background: rgba(0, 176, 155, 0.35); color: #FFF;">
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Digit</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">0</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">1</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">2</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">3</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">4</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">5</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">6</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">7</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">8</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">9</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); font-weight: bold; white-space: nowrap; color: #00b09b;">Root</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">nil</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">un</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">bi</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">tri</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">quad</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">pent</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">hex</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">sept</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">oct</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">enn</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p><i>Examples:</i><br>
  • Z = 101: Un + nil + un + ium = <b>Unnilunium (Unu)</b> [Mendelevium, Md]<br>
  • Z = 104: Un + nil + quad + ium = <b>Unnilquadium (Unq)</b> [Rutherfordium, Rf]<br>
  • Z = 118: Un + un + oct + ium = <b>Ununoctium (Uuo)</b> [Oganesson, Og]</p>


  <!-- EXACT SYLLABUS HEADING 4 -->
  <h2 style="color: #00b09b; margin-top: 30px; font-size: 20px; font-weight: bold;">4. Periodic Trends in Properties of Elements</h2>
  
  <p>Periodic trends in atomic properties arise due to systematic variation in electronic configuration, effective nuclear charge (Z_eff = Z - σ), and atomic size as we move across periods or down groups in the periodic table.</p>


  <!-- EXACT SYLLABUS HEADING 5 -->
  <h2 style="color: #00b09b; margin-top: 30px; font-size: 20px; font-weight: bold;">5. Atomic Radii, Ionic Radii and Inert Gas Radii</h2>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Types of Atomic Radii:</h3>
  <ul style="padding-left: 20px;">
    <li><b>1. Covalent Radius (r_cov):</b> Half of internuclear distance between two covalently bonded identical atoms (r_cov = d / 2). (e.g. Cl₂ d = 198 pm ⇒ r_cov = 99 pm).</li>
    <li><b>2. Metallic Radius (r_met):</b> Half of internuclear distance between two adjacent metal ions in a metallic crystal lattice. (e.g. Cu d = 256 pm ⇒ r_met = 128 pm).</li>
    <li><b>3. van der Waals Radius (r_vdw):</b> Half of internuclear distance between two non-bonded adjacent identical atoms belonging to neighboring molecules in solid state.</li>
    <li><b>Comparison of Radii Magnitude:</b>
      <div style="background: rgba(0, 176, 155, 0.1); padding: 8px 12px; border-radius: 6px; text-align: center; font-weight: bold; color: #FFF; margin: 8px 0;">
        van der Waals Radius &gt; Metallic Radius &gt; Covalent Radius
      </div>
    </li>
  </ul>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Inert Gas Radii Anomaly</h3>
  <p>Noble gases (Group 18) do not form covalent bonds under normal conditions. Their atomic radii are measured as <b>van der Waals radii</b>, which are structurally larger than covalent radii. Hence, noble gases exhibit abnormally large atomic radii compared to preceding halogens in the same period!</p>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Ionic Radii & Isoelectronic Series Trend</h3>
  <ul style="padding-left: 20px;">
    <li><b>Cation Radius &lt; Parent Atom Radius:</b> Removal of electrons reduces electron-electron repulsion and increases effective nuclear charge Z_eff (r_Na⁺ = 102 pm &lt; r_Na = 186 pm).</li>
    <li><b>Anion Radius &gt; Parent Atom Radius:</b> Addition of electrons increases inter-electronic repulsion and expands electron cloud (r_F⁻ = 133 pm &gt; r_F = 64 pm).</li>
    <li><b>Isoelectronic Series Radii Trend:</b> For species with same number of electrons (10 e⁻):
      <div style="background: rgba(0, 176, 155, 0.1); padding: 8px 12px; border-radius: 6px; text-align: center; font-weight: bold; color: #FFF; margin: 8px 0;">
        N³⁻ (171 pm) &gt; O²⁻ (140 pm) &gt; F⁻ (133 pm) &gt; Na⁺ (102 pm) &gt; Mg²⁺ (72 pm) &gt; Al³⁺ (53 pm)
      </div>
      <i>Rule:</i> Higher positive nuclear charge Z pulls electrons tighter, resulting in smaller ionic radius.
    </li>
  </ul>


  <!-- EXACT SYLLABUS HEADING 6 -->
  <h2 style="color: #00b09b; margin-top: 30px; font-size: 20px; font-weight: bold;">6. Ionization Enthalpy</h2>

  <p>Ionization Enthalpy (Δ_i H) is the minimum energy required to remove the most loosely bound electron from an isolated neutral gaseous atom in its ground state:</p>
  <div style="background: rgba(0, 176, 155, 0.1); padding: 8px 12px; border-radius: 6px; text-align: center; font-weight: bold; color: #FFF;">
    M_((g)) + Δ_i H → M⁺_((g)) + e⁻ &nbsp;&nbsp;&nbsp;&nbsp; (Successive IE: Δ_i H₃ &gt; Δ_i H₂ &gt; Δ_i H₁)
  </div>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">5 Controlling Factors of Ionization Enthalpy:</h3>
  <ol style="padding-left: 20px;">
    <li><b>Atomic Size:</b> Larger atomic size ⇒ weaker nuclear pull ⇒ lower Δ_i H.</li>
    <li><b>Nuclear Charge (Z):</b> Higher nuclear charge ⇒ stronger attraction ⇒ higher Δ_i H.</li>
    <li><b>Shielding / Screening Effect (σ):</b> Greater inner-shell shielding ⇒ lower Δ_i H.</li>
    <li><b>Penetration Effect of Orbitals:</b> Electrons in s-orbitals penetrate closer to nucleus than p, d, f (s &gt; p &gt; d &gt; f) ⇒ higher Δ_i H.</li>
    <li><b>Electronic Configuration Stability:</b> Half-filled (p³, d⁵) and completely filled (s², p⁶, d¹⁰) subshells possess extra stability ⇒ abnormally high Δ_i H.</li>
  </ol>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Important Periodic Anomalies Explained:</h3>
  <div style="background: rgba(0, 176, 155, 0.08); border-left: 4px solid #00b09b; padding: 12px 16px; border-radius: 6px; margin: 15px 0;">
    <p style="margin: 0;"><b>1. Beryllium vs Boron:</b> Δ_i H₁(Be = 899 kJ/mol) &gt; Δ_i H₁(B = 801 kJ/mol).<br>
    <i>Reason:</i> Be has stable fully-filled 1s² 2s² configuration and electron is removed from penetrating 2s subshell, whereas B (1s² 2s² 2p¹) has electron in higher energy 2p subshell.<br><br>
    <b>2. Nitrogen vs Oxygen:</b> Δ_i H₁(N = 1402 kJ/mol) &gt; Δ_i H₁(O = 1314 kJ/mol).<br>
    <i>Reason:</i> Nitrogen has extra stable half-filled subshell (2p_x¹ 2p_y¹ 2p_z¹), whereas Oxygen (2p_x² 2p_y¹ 2p_z¹) experiences electron-electron pairing repulsion in 2p_x lobe.</p>
  </div>


  <!-- EXACT SYLLABUS HEADING 7 -->
  <h2 style="color: #00b09b; margin-top: 30px; font-size: 20px; font-weight: bold;">7. Electron Gain Enthalpy</h2>

  <p>Electron Gain Enthalpy (Δ_eg H) is the enthalpy change accompanying the addition of an electron to an isolated neutral gaseous atom to form a univalent negative ion:</p>
  <div style="background: rgba(0, 176, 155, 0.1); padding: 8px 12px; border-radius: 6px; text-align: center; font-weight: bold; color: #FFF;">
    X_((g)) + e⁻ → X⁻_((g)) + Δ_eg H
  </div>
  <p>If energy is released, Δ_eg H is <b>negative (exothermic)</b> (e.g. Halogens). If energy is absorbed, Δ_eg H is <b>positive (endothermic)</b> (e.g. Noble gases, Be, Mg, N).</p>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">2nd Electron Gain Enthalpy is Always Positive!</h3>
  <p>Adding a second electron to a negative ion (O⁻ + e⁻ → O²⁻) requires overcoming strong electrostatic repulsion between negative charge and incoming electron. Hence, <b>2nd Electron Gain Enthalpy is always endothermic (Δ_eg H₂ = +780 kJ/mol for Oxygen)</b>.</p>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Chlorine vs Fluorine Anomaly Explained:</h3>
  <div style="background: rgba(0, 176, 155, 0.08); border-left: 4px solid #00b09b; padding: 12px 16px; border-radius: 6px; margin: 15px 0;">
    <p style="margin: 0; font-weight: bold; color: #FFF; font-size: 16px;">"Chlorine has a MORE negative Electron Gain Enthalpy (-349 kJ/mol) than Fluorine (-328 kJ/mol)."</p>
    <p style="margin: 6px 0 0 0;"><i>Reason:</i> Fluorine's 2p subshell is extremely compact in size. Adding an electron to Fluorine's small n=2 shell causes high electron density and strong inter-electronic repulsions, which reduces net energy released compared to Chlorine's larger 3p subshell.</p>
  </div>


  <!-- EXACT SYLLABUS HEADING 8 -->
  <h2 style="color: #00b09b; margin-top: 30px; font-size: 20px; font-weight: bold;">8. Electronegativity</h2>

  <p>Electronegativity (χ) is the relative tendency of a bonded atom in a covalent molecule to attract the shared pair of electrons toward itself.</p>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Pauling Scale of Electronegativity (Linus Pauling, 1932)</h3>
  <p>Fluorine is assigned the maximum arbitrary value of <b>4.0</b>. Electronegativity difference between two bonded atoms A and B is given by:</p>
  <div style="background: rgba(0, 176, 155, 0.1); padding: 8px 12px; border-radius: 6px; text-align: center; font-weight: bold; color: #FFF;">
    χ_A - χ_B = 0.208 √(Δ) &nbsp;&nbsp;&nbsp;&nbsp; (where Δ = E_(A-B) - √(E_(A-A) · E_(B-B)) in kcal/mol)
  </div>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Comparison: Electronegativity vs Electron Gain Enthalpy</h3>
  
  <!-- SCROLLABLE TABLE FOR ELECTRONEGATIVITY COMPARISON WITH GUARANTEED HORIZONTAL SCROLL -->
  <div style="display: block; width: 100%; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 16px 0; border: 1.5px solid rgba(0, 176, 155, 0.4); border-radius: 8px; background: rgba(0,0,0,0.3);">
    <table style="display: table; min-width: 750px; width: max-content; border-collapse: collapse; font-size: 14px; white-space: nowrap;">
      <thead>
        <tr style="background: rgba(0, 176, 155, 0.35); color: #FFF;">
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Property</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Electronegativity (χ)</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Electron Gain Enthalpy (Δ_eg H)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); font-weight: bold; white-space: nowrap; color: #00b09b;">Definition</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">Tendency to attract shared electron pair in covalent bond</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">Energy change when adding electron to isolated gas atom</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); font-weight: bold; white-space: nowrap; color: #00b09b;">State of Atom</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">Bonded state in a molecule</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">Isolated gaseous atom</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); font-weight: bold; white-space: nowrap; color: #00b09b;">Units</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">Dimensionless (relative scale)</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">kJ/mol or eV/atom</td>
        </tr>
      </tbody>
    </table>
  </div>


  <!-- EXACT SYLLABUS HEADING 9 -->
  <h2 style="color: #00b09b; margin-top: 30px; font-size: 20px; font-weight: bold;">9. Valency and Periodic Trends in Chemical Reactivity</h2>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Valency Trends Across Period 3:</h3>
  <p>Valency equals number of valence electrons (Groups 1-4) or (8 - valence electrons) (Groups 15-18):</p>
  
  <!-- SCROLLABLE TABLE FOR VALENCY WITH GUARANTEED HORIZONTAL SCROLL -->
  <div style="display: block; width: 100%; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 16px 0; border: 1.5px solid rgba(0, 176, 155, 0.4); border-radius: 8px; background: rgba(0,0,0,0.3);">
    <table style="display: table; min-width: 750px; width: max-content; border-collapse: collapse; font-size: 14px; white-space: nowrap;">
      <thead>
        <tr style="background: rgba(0, 176, 155, 0.35); color: #FFF;">
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Element</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Na</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Mg</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Al</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Si</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">P</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">S</th>
          <th style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.3); white-space: nowrap;">Cl</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); font-weight: bold; white-space: nowrap; color: #00b09b;">Oxide Formula</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">Na₂O</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">MgO</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">Al₂O₃</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">SiO₂</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">P₄O₁₀</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">SO₃</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); white-space: nowrap;">Cl₂O₇</td>
        </tr>
        <tr>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); font-weight: bold; white-space: nowrap; color: #00b09b;">Nature</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); color:#FF5252; white-space: nowrap;">Basic</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); color:#FF5252; white-space: nowrap;">Basic</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); color:#FFD54F; white-space: nowrap;">Amphoteric</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); color:#66BB6A; white-space: nowrap;">Weak Acidic</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); color:#66BB6A; white-space: nowrap;">Acidic</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); color:#66BB6A; white-space: nowrap;">Acidic</td>
          <td style="padding: 10px 16px; border: 1px solid rgba(0, 176, 155, 0.2); color:#66BB6A; white-space: nowrap;">Strong Acidic</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: #00b09b; margin-top: 18px; font-size: 18px;">Anomalous Behavior of 2nd Period Elements & Diagonal Relationship</h3>
  <ul style="padding-left: 20px;">
    <li>First element of each group (Li, Be, B, C, N, O, F) differs significantly from rest of its group due to <b>extremely small size</b>, <b>high electronegativity</b>, and <b>absence of vacant d-orbitals</b> (maximum covalency = 4).</li>
    <li><b>Diagonal Relationship:</b> Li resembles Mg, Be resembles Al, B resembles Si due to similar charge-to-radius ratio (φ = Charge / Radius).</li>
  </ul>

  <!-- BOTTOM FEATURE: MASTER FORMULA CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 155, 0.15), rgba(0, 200, 83, 0.15)); border: 1.5px solid #00b09b; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #00b09b; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Periodic Trends Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b>Atomic Radii:</b> Decreases across period (→), Increases down group (↓).</li>
      <li><b>Ionization Enthalpy (Δ_i H):</b> Increases across period (→), Decreases down group (↓).</li>
      <li><b>Electron Gain Enthalpy (Δ_eg H):</b> Becomes more negative across period (→), Less negative down group (↓).</li>
      <li><b>Electronegativity (χ):</b> Increases across period (→), Decreases down group (↓).</li>
      <li><b>Metallic Character:</b> Decreases across period (→), Increases down group (↓).</li>
      <li><b>Isoelectronic Radii Order:</b> N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺.</li>
      <li><b>Exceptions:</b> IE(Be) &gt; IE(B) &nbsp;|&nbsp; IE(N) &gt; IE(O) &nbsp;|&nbsp; EA(Cl) &gt; EA(F).</li>
    </ul>
  </div>

</div>
`;

export const c11Chem3HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- SECTION A: OBJECTIVE & MCQS (25 Questions) -->
  <div style="background: rgba(0, 176, 155, 0.12); border: 1.5px solid #00b09b; border-radius: 10px; padding: 14px; margin-bottom: 20px;">
    <h2 style="color: #00b09b; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION A: Objective & Multiple Choice Questions (Q1 to Q25)</h2>
    <p style="color: #80cbc4; margin: 0; font-size: 14px;">25 Expected MCQs • 1 Mark Each</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q1. Modern Periodic Law states that properties of elements are periodic functions of their:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Atomic Mass &nbsp;&nbsp;&nbsp;&nbsp; (B) Atomic Number<br>
      (C) Mass Number &nbsp;&nbsp;&nbsp;&nbsp; (D) Density
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) Atomic Number</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Henry Moseley proved that atomic number Z is the fundamental basis of periodic law.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q2. Which element has the highest electronegativity on Pauling scale?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Fluorine (F) &nbsp;&nbsp;&nbsp;&nbsp; (B) Chlorine (Cl)<br>
      (C) Oxygen (O) &nbsp;&nbsp;&nbsp;&nbsp; (D) Cesium (Cs)
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (A) Fluorine (F)</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Fluorine is the most electronegative element with a Pauling value of 4.0.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q3. Correct order of increasing atomic radius for F, Cl, Br, I is:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) F < Cl < Br < I &nbsp;&nbsp;&nbsp;&nbsp; (B) I < Br < Cl < F<br>
      (C) Cl < F < Br < I &nbsp;&nbsp;&nbsp;&nbsp; (D) F < Br < Cl < I
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (A) F < Cl < Br < I</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Atomic radius increases down a group due to addition of new electron shells.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q4. Which of the following has the highest first ionization enthalpy?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Beryllium (Be) &nbsp;&nbsp;&nbsp;&nbsp; (B) Boron (B)<br>
      (C) Carbon (C) &nbsp;&nbsp;&nbsp;&nbsp; (D) Nitrogen (N)
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (D) Nitrogen (N)</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Nitrogen has a stable half-filled 2p³ configuration giving it abnormally high first IE (1402 kJ/mol).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q5. Which is the correct order of ionic radii for isoelectronic species N³⁻, O²⁻, F⁻, Na⁺?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Na⁺ < F⁻ < O²⁻ < N³⁻ &nbsp;&nbsp;&nbsp;&nbsp; (B) N³⁻ < O²⁻ < F⁻ < Na⁺<br>
      (C) F⁻ < Na⁺ < O²⁻ < N³⁻ &nbsp;&nbsp;&nbsp;&nbsp; (D) Na⁺ < N³⁻ < O²⁻ < F⁻
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (A) Na⁺ < F⁻ < O²⁻ < N³⁻</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> For isoelectronic species, higher positive nuclear charge contracts radius: Na⁺ (102pm) < F⁻ (133pm) < O²⁻ (140pm) < N³⁻ (171pm).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q6. Chlorine has more negative electron gain enthalpy than Fluorine because:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) F has larger size &nbsp;&nbsp;&nbsp;&nbsp; (B) F has smaller size causing high electron repulsions<br>
      (C) Cl is a gas &nbsp;&nbsp;&nbsp;&nbsp; (D) Cl has lower atomic mass
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) F has smaller size causing high electron repulsions</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Fluorine's compact 2p shell has high electron density, creating strong repulsions upon electron addition.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q7. The element with IUPAC name Unnilquadium (Unq) has atomic number Z = </span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 101 &nbsp;&nbsp;&nbsp;&nbsp; (B) 104<br>
      (C) 114 &nbsp;&nbsp;&nbsp;&nbsp; (D) 140
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) 104</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Un (1) + nil (0) + quad (4) + ium = 104 (Rutherfordium).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q8. Which group of elements are known as Chalcogens?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Group 15 &nbsp;&nbsp;&nbsp;&nbsp; (B) Group 16<br>
      (C) Group 17 &nbsp;&nbsp;&nbsp;&nbsp; (D) Group 18
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) Group 16</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Group 16 (O, S, Se, Te, Po) elements are called Chalcogens (ore formers).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q9. The general electronic configuration of d-block transition elements is:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) ns¹⁻² &nbsp;&nbsp;&nbsp;&nbsp; (B) (n-1)d¹⁻¹⁰ ns¹⁻²<br>
      (C) ns² np¹⁻⁶ &nbsp;&nbsp;&nbsp;&nbsp; (D) (n-2)f¹⁻¹⁴ ns²
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) (n-1)d¹⁻¹⁰ ns¹⁻²</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> d-Block elements fill the inner (n-1)d orbital.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q10. Which pair of elements exhibits a Diagonal Relationship?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Li and Mg &nbsp;&nbsp;&nbsp;&nbsp; (B) Na and K<br>
      (C) Be and B &nbsp;&nbsp;&nbsp;&nbsp; (D) B and C
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (A) Li and Mg</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Lithium and Magnesium show diagonal similarity due to similar charge/radius ratio.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q11. Which oxide is Amphoteric in nature?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Na₂O &nbsp;&nbsp;&nbsp;&nbsp; (B) MgO<br>
      (C) Al₂O₃ &nbsp;&nbsp;&nbsp;&nbsp; (D) SO₃
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (C) Al₂O₃</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Aluminium oxide (Al₂O₃) reacts with both acids and bases.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q12. Why is 1st IE of Beryllium greater than Boron?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Be has 2p electron &nbsp;&nbsp;&nbsp;&nbsp; (B) Be has stable fully-filled 2s² configuration<br>
      (C) B has larger nuclear charge &nbsp;&nbsp;&nbsp;&nbsp; (D) B is a non-metal
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) Be has stable fully-filled 2s² configuration</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Be (1s² 2s²) holds electrons tightly in filled 2s orbital.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q13. Second electron gain enthalpy of Oxygen is:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Highly negative &nbsp;&nbsp;&nbsp;&nbsp; (B) Zero<br>
      (C) Positive (Endothermic) &nbsp;&nbsp;&nbsp;&nbsp; (D) Same as first
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (C) Positive (Endothermic)</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Adding a 2nd electron to negative O⁻ requires overcoming strong electrostatic repulsion (+780 kJ/mol).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q14. Which block contains metals, non-metals, and metalloids?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) s-block &nbsp;&nbsp;&nbsp;&nbsp; (B) p-block<br>
      (C) d-block &nbsp;&nbsp;&nbsp;&nbsp; (D) f-block
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) p-block</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> p-Block is the only block housing all three types of elements.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q15. Atomic radii of Noble Gases are measured as:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Covalent Radii &nbsp;&nbsp;&nbsp;&nbsp; (B) Metallic Radii<br>
      (C) van der Waals Radii &nbsp;&nbsp;&nbsp;&nbsp; (D) Ionic Radii
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (C) van der Waals Radii</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Noble gases exist as unbonded monoatomic gases, so their radii are van der Waals radii (abnormally large).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q16. Screening / Shielding effect of inner orbitals decreases in order:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) s > p > d > f &nbsp;&nbsp;&nbsp;&nbsp; (B) f > d > p > s<br>
      (C) p > s > d > f &nbsp;&nbsp;&nbsp;&nbsp; (D) s = p = d = f
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (A) s > p > d > f</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> s-orbitals penetrate closest to nucleus providing maximum shielding effect.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q17. Element with ground state electronic configuration [Kr] 4d¹⁰ 5s² 5p⁴ belongs to period and group:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Period 4, Group 14 &nbsp;&nbsp;&nbsp;&nbsp; (B) Period 5, Group 16<br>
      (C) Period 5, Group 14 &nbsp;&nbsp;&nbsp;&nbsp; (D) Period 4, Group 16
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) Period 5, Group 16</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Principal quantum number n = 5 (Period 5), Group = 10 + 2 + 4 = 16 (Tellurium).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q18. Which of the following elements has the lowest first ionization enthalpy?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Sodium (Na) &nbsp;&nbsp;&nbsp;&nbsp; (B) Potassium (K)<br>
      (C) Rubidium (Rb) &nbsp;&nbsp;&nbsp;&nbsp; (D) Cesium (Cs)
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (D) Cesium (Cs)</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Cesium has the largest atomic size in Group 1, holding its 6s electron most weakly.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q19. Maximum covalency exhibited by 2nd period elements (Li to F) is:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 2 &nbsp;&nbsp;&nbsp;&nbsp; (B) 4<br>
      (C) 6 &nbsp;&nbsp;&nbsp;&nbsp; (D) 8
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) 4</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> 2nd period elements lack vacant d-orbitals, restricting maximum valence orbitals to 4 (2s, 2p_x, 2p_y, 2p_z).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q20. Eka-Aluminium predicted by Mendeleev turned out to be:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Gallium (Ga) &nbsp;&nbsp;&nbsp;&nbsp; (B) Germanium (Ge)<br>
      (C) Scandium (Sc) &nbsp;&nbsp;&nbsp;&nbsp; (D) Indium (In)
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (A) Gallium (Ga)</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Mendeleev's Eka-Aluminium was discovered as Gallium (Z = 31).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q21. Which of the following is NOT an isoelectronic species with Neon (10 e⁻)?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) O²⁻ &nbsp;&nbsp;&nbsp;&nbsp; (B) F⁻<br>
      (C) Na⁺ &nbsp;&nbsp;&nbsp;&nbsp; (D) Cl⁻
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (D) Cl⁻</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Cl⁻ contains 18 electrons (Isoelectronic with Argon, not Neon).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q22. Acidic strength of oxides of 3rd period elements increases in order:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Na₂O < MgO < Al₂O₃ < SiO₂ < P₄O₁₀ < SO₃ < Cl₂O₇ &nbsp;&nbsp;&nbsp;&nbsp; (B) Cl₂O₇ < SO₃ < P₄O₁₀ < SiO₂ < Al₂O₃ < MgO < Na₂O<br>
      (C) Na₂O < Al₂O₃ < MgO < SiO₂ < SO₃ < P₄O₁₀ < Cl₂O₇ &nbsp;&nbsp;&nbsp;&nbsp; (D) SO₃ < Cl₂O₇ < P₄O₁₀ < SiO₂ < Al₂O₃ < MgO < Na₂O
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (A) Na₂O < MgO < Al₂O₃ < SiO₂ < P₄O₁₀ < SO₃ < Cl₂O₇</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Non-metallic character increases across period, increasing oxide acidity.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q23. Effective nuclear charge (Z_eff) across a period:</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Decreases &nbsp;&nbsp;&nbsp;&nbsp; (B) Increases<br>
      (C) Remains constant &nbsp;&nbsp;&nbsp;&nbsp; (D) First decreases then increases
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) Increases</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Protons increase by 1 per step while electrons fill same shell, increasing Z_eff = Z - σ.</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q24. Which element has highest electron gain enthalpy (most negative)?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) Fluorine &nbsp;&nbsp;&nbsp;&nbsp; (B) Chlorine<br>
      (C) Bromine &nbsp;&nbsp;&nbsp;&nbsp; (D) Oxygen
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) Chlorine</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Chlorine has Δ_eg H = -349 kJ/mol (highest negative EA in periodic table).</span>
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 8px 0;"><span style="color: #00b09b; font-weight: bold;">Q25. Actinoids consist of how many f-block elements?</span></p>
    <div style="font-size: 14.5px; color: #DDD; margin-bottom: 8px;">
      (A) 10 &nbsp;&nbsp;&nbsp;&nbsp; (B) 14<br>
      (C) 18 &nbsp;&nbsp;&nbsp;&nbsp; (D) 32
    </div>
    <div style="background: rgba(0, 176, 155, 0.15); border-left: 3.5px solid #00b09b; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
      <span style="color: #00b09b; font-weight: bold;">✓ Answer: (B) 14</span><br>
      <span style="font-size: 14px; color: #EEE;"><b>Explanation:</b> Actinoid series consists of 14 elements (Th Z=90 to Lr Z=103) filling 5f subshell.</span>
    </div>
  </div>
  <!-- SECTION B: VERY SHORT ANSWER QUESTIONS (Q26 to Q55) -->
  <div style="background: rgba(0, 176, 155, 0.12); border: 1.5px solid #00b09b; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #00b09b; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION B: Very Short Answer Questions (Q26 to Q55)</h2>
    <p style="color: #80cbc4; margin: 0; font-size: 14px;">30 Expected VSA Questions • 2 Marks Each</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q26. State Modern Periodic Law.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Properties of elements are periodic functions of their <b>atomic numbers (Z)</b>. (Moseley, 1913).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q27. Define Covalent Radius.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Half of the internuclear distance between two identical covalently bonded single atoms: r_cov = d / 2.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q28. Define Ionization Enthalpy (Δ_i H).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Minimum energy required to remove the most loosely bound electron from an isolated neutral gaseous atom in ground state.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q29. Define Electron Gain Enthalpy (Δ_eg H).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Enthalpy change accompanying addition of an electron to a neutral isolated gaseous atom to form a negative ion.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q30. Define Electronegativity (χ).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Relative tendency of an atom in a covalent bond to attract shared electron pair towards itself.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q31. Why cation is smaller than parent atom?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Removal of electron reduces electron repulsions and increases effective nuclear charge (Z_eff), pulling remaining electrons closer.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q32. Why anion is larger than parent atom?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Addition of electron increases inter-electronic repulsions, expanding electron cloud without change in nuclear charge.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q33. State 2 reasons why 1st IE of Nitrogen is higher than Oxygen.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>(i)</b> Nitrogen has extra stable half-filled 2p³ configuration.<br><b>(ii)</b> Oxygen experiences electron pairing repulsion in 2p_x lobe.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q34. Why Chlorine has higher negative EA than Fluorine?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Fluorine's compact 2p subshell has high electron density, creating strong repulsions upon electron addition.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q35. What is Diagonal Relationship? Give 2 examples.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Similarity in properties of 2nd period elements with elements diagonally below to right in 3rd period (Li-Mg, Be-Al).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q36. Write IUPAC name and symbol for Z = 118.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Name: <b>Ununoctium (Uuo)</b> [Official name: Oganesson, Og].
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q37. Define Isoelectronic species with 2 examples.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Species containing exact same total number of electrons (e.g. Na⁺, F⁻, Mg²⁺, O²⁻ all contain 10 electrons).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q38. Arrange N³⁻, O²⁻, F⁻, Na⁺ in increasing ionic radii order.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>Na⁺ (102pm) < F⁻ (133pm) < O²⁻ (140pm) < N³⁻ (171pm)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q39. Why noble gases have abnormally large atomic radii?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Because noble gases do not form covalent bonds; their radii are measured as <b>van der Waals radii</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q40. Write general electronic configuration of d-block elements.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>(n-1)d¹⁻¹⁰ ns¹⁻²</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q41. Write general electronic configuration of f-block elements.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>(n-2)f¹⁻¹⁴ (n-1)d⁰⁻¹ ns²</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q42. Why 2nd electron gain enthalpy of Oxygen is positive?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Adding 2nd electron to negative O⁻ ion requires overcoming strong electrostatic repulsion (+780 kJ/mol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q43. Explain why 1st IE of Beryllium is higher than Boron.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Be has stable fully-filled 1s² 2s² configuration and electron is removed from penetrating 2s subshell.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q44. What are Chalcogens and Halogens? State their groups.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>Chalcogens</b> = Group 16 (O, S, Se, Te, Po). <b>Halogens</b> = Group 17 (F, Cl, Br, I, At).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q45. Write IUPAC name for Z = 105.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Name: <b>Unnilpentium (Unp)</b> [Dubnium, Db].
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q46. What is Screening Effect?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Reduction in nuclear attraction on outer electrons caused by repulsions from inner shell electrons.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q47. How does Atomic Radius vary across a period and down a group?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>Across Period (→):</b> Decreases due to increasing Z_eff.<br><b>Down Group (↓):</b> Increases due to addition of new shells.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q48. Why maximum covalency of 2nd period elements is 4?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Because 2nd period elements have only 4 valence orbitals (2s, 2p_x, 2p_y, 2p_z) and lack vacant d-orbitals.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q49. Differentiate between Metals and Non-metals based on Electronegativity.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>Metals</b> have low electronegativity (electropositive). <b>Non-metals</b> have high electronegativity.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q50. What is an Amphoteric Oxide? Give 2 examples.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      An oxide reacting with both acids and bases (e.g. <b>Al₂O₃, ZnO, BeO</b>).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q51. State Mendeleev's Periodic Law.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Properties of elements are periodic functions of their <b>atomic masses</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q52. What was Eka-Silicon predicted by Mendeleev?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>Germanium (Ge)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q53. Why 2nd Ionization Enthalpy is always greater than 1st?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      Removing electron from positive cation M⁺ requires overcoming strong nuclear attraction on smaller ion.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q54. Which element in periodic table has highest first IE?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>Helium (He)</b> (2372 kJ/mol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q55. Which element in periodic table has lowest electronegativity?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Answer:</span><br>
      <b>Cesium (Cs) / Francium (Fr)</b> (0.7 on Pauling scale).
    </div>
  </div>
  <!-- SECTION C: SHORT ANSWER QUESTIONS (Q56 to Q85) -->
  <div style="background: rgba(0, 176, 155, 0.12); border: 1.5px solid #00b09b; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #00b09b; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION C: Short Answer Questions (Q56 to Q85)</h2>
    <p style="color: #80cbc4; margin: 0; font-size: 14px;">30 Expected SA Questions • 3 Marks Each</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q56. Explain 5 factors affecting Ionization Enthalpy of elements.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      <b>(i)</b> Atomic Size (Inverse), <b>(ii)</b> Nuclear Charge Z_eff (Direct), <b>(iii)</b> Shielding Effect (Inverse), <b>(iv)</b> Penetration Effect (s>p>d>f), <b>(v)</b> Stable Electronic Configurations (Half/Fully Filled).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q57. Explain why Fluorine has lower negative EA than Chlorine despite higher electronegativity.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Fluorine's 2p subshell is small and compact. Adding an electron causes severe inter-electronic repulsions, releasing less net energy (-328 kJ/mol) than Chlorine's larger 3p subshell (-349 kJ/mol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q58. Describe 4 main blocks (s, p, d, f) of modern periodic table with general configurations.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      • <b>s-block:</b> Groups 1-2, ns¹⁻², active metals.<br>• <b>p-block:</b> Groups 13-18, ns² np¹⁻⁶, metals/non-metals/gas.<br>• <b>d-block:</b> Groups 3-12, (n-1)d¹⁻¹⁰ ns¹⁻², transition metals.<br>• <b>f-block:</b> Lanthanoids & Actinoids, (n-2)f¹⁻¹⁴ (n-1)d⁰⁻¹ ns².
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q59. Explain ionic radii trend among isoelectronic species: Mg²⁺, Na⁺, F⁻, O²⁻, N³⁻.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      All contain 10 electrons. Nuclear charge Z increases from N (7) to Mg (12). Higher Z exerts stronger pull per electron: N³⁻ (171pm) > O²⁻ (140pm) > F⁻ (133pm) > Na⁺ (102pm) > Mg²⁺ (72pm).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q60. Explain anomalous behavior of Lithium compared to other alkali metals.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Li has small size, high polarising power, and high IE. Forms covalent compounds (LiCl), nitride (Li₃N), and oxide (Li₂O) instead of peroxides.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q61. Write IUPAC names and official names for elements Z = 101, 104, 107, 111, 115, 118.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      • <b>(i)</b> 101: Unnilunium (Mendelevium)<br>• <b>(ii)</b> 104: Unnilquadium (Rutherfordium)<br>• <b>(iii)</b> 107: Unnilseptium (Bohrium)<br>• <b>(iv)</b> 111: Unununium (Roentgenium)<br>• <b>(v)</b> 115: Ununpentium (Moscovium)<br>• <b>(vi)</b> 118: Ununoctium (Oganesson).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q62. Differentiate between Electronegativity and Electron Gain Enthalpy.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      <b>Electronegativity</b> is tendency of bonded atom to attract shared electron pair in molecule (dimensionless scale). <b>Electron Gain Enthalpy</b> is energy change when adding electron to isolated gas atom (kJ/mol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q63. Explain variation of Oxidation States across Period 3 oxides (Na₂O to Cl₂O₇).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Oxidation state increases from +1 to +7: Na(+1), Mg(+2), Al(+3), Si(+4), P(+5), S(+6), Cl(+7). Oxide nature transitions from Strongly Basic → Amphoteric → Strongly Acidic.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q64. Explain Diagonal Relationship between Beryllium and Aluminium.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Be and Al show similar ionic charge-to-radius ratio (polarising power φ). Both form amphoteric oxides (BeO, Al₂O₃), polymeric hydrides, and soluble fluoro-complexes.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q65. Explain why 1st IE of Na is less than Mg, but 2nd IE of Na is much greater than Mg.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      • <b>1st IE:</b> Na (3s¹) removes 3s electron easily vs Mg (3s²).<br>• <b>2nd IE:</b> Na⁺ ([Ne] 2p⁶) removes electron from stable noble gas octet (4562 kJ/mol), whereas Mg⁺ (3s¹) removes valence electron (1451 kJ/mol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q66. Explain Moseley's Experiment and its significance in modifying Periodic Law.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Moseley plotted √ν of characteristic X-rays vs Z yielding straight line. Proved atomic number Z (number of nuclear protons) governs elemental properties, resolving Mendeleev's anomalous mass pairs.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q67. Compare Covalent Radius, Metallic Radius, and van der Waals Radius magnitude.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      <b>van der Waals Radius > Metallic Radius > Covalent Radius</b>.<br>van der Waals involves weak non-bonded forces; Metallic involves packed metallic lattice; Covalent involves overlapping atomic orbitals.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q68. Why 2nd period elements cannot expand their octet beyond 4 pairs?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      2nd period elements (N, O, F) lack vacant 2d subshell (only 2s, 2p exist). 3rd period elements (P, S, Cl) have vacant 3d orbitals and expand octet (e.g. PF₅, SF₆).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q69. State Pauling scale of electronegativity and formula for AB molecule.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Pauling set F = 4.0. Formula: χ_A - χ_B = 0.208 √(E_(A-B) - √(E_(A-A) · E_(B-B))) in kcal/mol.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q70. Explain why Inert Gases have positive Electron Gain Enthalpy.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Noble gases have completely filled stable octet ns² np⁶. Incoming electron must enter higher principal energy shell (n+1)s, absorbing energy.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q71. Write ground state configuration and identify group/period for Z = 29 (Cu) and Z = 24 (Cr).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      • <b>(i)</b> Cr (Z=24): [Ar] 3d⁵ 4s¹ (Period 4, Group 6)<br>• <b>(ii)</b> Cu (Z=29): [Ar] 3d¹⁰ 4s¹ (Period 4, Group 11).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q72. Explain trend of Metallic Character across period and down group.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      <b>Across Period (→):</b> Decreases as Z_eff increases and IE increases.<br><b>Down Group (↓):</b> Increases as atomic size increases and IE decreases.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q73. Calculate Z_eff for valence electron in Sodium (Z = 11) using Slater's basic principle.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Inner 10 electrons shield nucleus. Z_eff = Z - σ = 11 - 8.8 = <b>+2.2</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q74. Differentiate Lanthanoids and Actinoids.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      <b>Lanthanoids (4f):</b> Fill 4f subshell (Ce to Lu), non-radioactive (except Pm), +3 main OS.<br><b>Actinoids (5f):</b> Fill 5f subshell (Th to Lr), radioactive, variable OS (+3 to +7).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q75. Why first IE of Oxygen is lower than Nitrogen despite higher atomic number?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Nitrogen has stable half-filled 2p³ subshell. Oxygen (2p⁴) has electron pairing in 2p_x lobe causing inter-electronic repulsion.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q76. Explain how atomic radius affects Ionization Enthalpy and Electronegativity.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Larger atomic radius increases electron distance from nucleus, reducing nuclear attraction ⇒ lowers Ionization Enthalpy and lowers Electronegativity.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q77. Arrange oxides Na₂O, Al₂O₃, SO₃, Cl₂O₇ in increasing order of Acidic Character.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      <b>Na₂O (Basic) < Al₂O₃ (Amphoteric) < SO₃ (Acidic) < Cl₂O₇ (Strongly Acidic)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q78. Explain why Alkali Metals are strong Reducing Agents.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Alkali metals (Group 1) have low ionization enthalpies and readily lose single valence electron ns¹ to form stable M⁺ cations.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q79. Explain why Halogens are strong Oxidizing Agents.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Halogens (Group 17) have high electron affinity and high electronegativity, readily accepting 1 electron to complete stable octet ns² np⁶.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q80. Why Potassium (Z=19) is placed after Argon (Z=18) in Modern Periodic Table?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Because Potassium Z=19 has higher atomic number than Argon Z=18, resolving Mendeleev's mass anomaly (Ar mass 39.9 > K mass 39.1).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q81. What is Valency of Group 15, 16, 17 elements in hydrides?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Valency = (8 - Group valence e⁻): Group 15 (NH₃) = <b>3</b>; Group 16 (H₂O) = <b>2</b>; Group 17 (HF) = <b>1</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q82. Explain Screening Effect and Penetration Effect in multi-electron atoms.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      <b>Screening Effect:</b> Inner electrons repel outer electrons, shielding them from nucleus.<br><b>Penetration Effect:</b> s-orbitals are closer to nucleus (s>p>d>f), experiencing higher nuclear pull.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q83. Why 1st IE of Transition Metals increases very slowly across period?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Because added d-electrons enter inner (n-1)d orbital, shielding outer ns² electrons and counteracting increased nuclear charge Z.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q84. State Mendeleev's 4 major achievements.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      <b>(i)</b> Systematic classification, <b>(ii)</b> Correction of atomic masses (Be, In), <b>(iii)</b> Prediction of undiscovered elements (Ga, Ge, Sc), <b>(iv)</b> Vacant gaps.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><span style="color: #00b09b; font-weight: bold;">Q85. Write valence shell configuration for elements in Period 4, Group 17.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); border-left: 3px solid #00b09b; padding: 10px 12px; border-radius: 4px;">
      <span style="color: #80cbc4; font-weight: bold;">Detailed Solution:</span><br>
      Group 17, Period 4 is Bromine (Br, Z=35): <b>4s² 4p⁵</b>.
    </div>
  </div>
  <!-- SECTION D: LONG ANSWER & HOTS QUESTIONS (Q86 to Q100) -->
  <div style="background: rgba(0, 176, 155, 0.12); border: 1.5px solid #00b09b; border-radius: 10px; padding: 14px; margin-top: 30px; margin-bottom: 20px;">
    <h2 style="color: #00b09b; margin: 0 0 6px 0; font-size: 19px; font-weight: bold;">SECTION D: Long Answer & HOTS Questions (Q86 to Q100)</h2>
    <p style="color: #80cbc4; margin: 0; font-size: 14px;">15 Advanced HOTS Questions • 5 Marks Each</p>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q86 (HOTS - 5 Marks): Comprehensive Ionization Enthalpy & Anomalies Analysis</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Define 1st, 2nd, and 3rd Ionization Enthalpies and state why IE₃ > IE₂ > IE₁.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Ionization Enthalpy is energy required to remove electron. IE₃ > IE₂ > IE₁ because removing successive electrons from increasingly positive cations requires overcoming stronger electrostatic attraction.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Explain with configuration data: (a) IE₁ of Be > B, (b) IE₁ of N > O, (c) IE₂ of Na is huge compared to Mg.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      <b>(a) Be vs B:</b> Be (1s² 2s²) has stable fully-filled 2s orbital vs B (2p¹).<br><b>(b) N vs O:</b> N (2p³) has stable half-filled 2p subshell vs O (2p⁴) with pairing repulsion.<br><b>(c) 2nd IE Na vs Mg:</b> Na⁺ ([Ne] 2p⁶) breaks noble gas octet (4562 kJ/mol) vs Mg⁺ (3s¹ → 1451 kJ/mol).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q87 (HOTS - 5 Marks): Electron Gain Enthalpy Trends & Fluorine-Chlorine Anomaly</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Define Electron Gain Enthalpy and differentiate exothermic vs endothermic EA.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Enthalpy change when adding electron to gas atom. Exothermic (Δ_eg H < 0) for non-metals gaining electrons; Endothermic (Δ_eg H > 0) for noble gases and filled shells.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Explain why: (a) EA of Cl > F, (b) EA of S > O, (c) 2nd EA of Oxygen is positive (+780 kJ/mol).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      <b>(a) Cl > F:</b> Fluorine's small 2p shell has high electron density causing inter-electronic repulsions.<br><b>(b) S > O:</b> Oxygen's 2p shell is compact with strong repulsions vs Sulfur's 3p.<br><b>(c) 2nd EA of O:</b> Adding electron to negative O⁻ requires overcoming strong electrostatic repulsion.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q88 (HOTS - 5 Marks): Modern Periodic Table Blocks & IUPAC Nomenclature</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Outline classification of elements into s, p, d, f blocks with general configurations.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      s-block (ns¹⁻²), p-block (ns² np¹⁻⁶), d-block ((n-1)d¹⁻¹⁰ ns¹⁻²), f-block ((n-2)f¹⁻¹⁴ (n-1)d⁰⁻¹ ns²).
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Write IUPAC systematic names and symbols for elements with atomic numbers Z = 102, 108, 112, 117, 120.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      • <b>(a)</b> 102: Unnilbium (Unb)<br>• <b>(b)</b> 108: Unniloctium (Uno)<br>• <b>(c)</b> 112: Ununbium (Uub) [Copernicium]<br>• <b>(d)</b> 117: Ununseptium (Uus) [Tennessine]<br>• <b>(e)</b> 120: Unbinilium (Ubn).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q89 (HOTS - 5 Marks): Atomic & Ionic Radii Trends & Isoelectronic Series</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Define Covalent, Metallic, and van der Waals Radii and compare their relative sizes.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      van der Waals Radius > Metallic Radius > Covalent Radius. Covalent involves orbital overlap; Metallic involves crystal lattice; van der Waals involves non-bonded gas contact.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Arrange species in increasing order of size and justify: (a) Fe, Fe²⁺, Fe³⁺, (b) Cl, Cl⁻, (c) O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      <b>(a) Fe³⁺ < Fe²⁺ < Fe:</b> Higher positive charge contracts ion.<br><b>(b) Cl < Cl⁻:</b> Anion expansion due to electron repulsions.<br><b>(c) Al³⁺ (53pm) < Mg²⁺ (72pm) < Na⁺ (102pm) < F⁻ (133pm) < O²⁻ (140pm):</b> Isoelectronic series (10e⁻), size decreases as nuclear charge Z increases.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q90 (HOTS - 5 Marks): Mendeleev's Periodic Table vs Modern Periodic Table</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) State Mendeleev's Periodic Law and 3 major drawbacks of his table.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Properties depend on atomic mass. Drawbacks: Anomalous mass pairs (Ar-K, Co-Ni), Position of Hydrogen, Position of Isotopes.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) How did Henry Moseley's Modern Periodic Law resolve all drawbacks of Mendeleev's table?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      Moseley arranged elements by Atomic Number Z. (1) Ar (Z=18) naturally precedes K (Z=19). (2) Isotopes have same Z, belonging to same position. (3) Cobalt (Z=27) precedes Nickel (Z=28).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q91 (HOTS - 5 Marks): Electronegativity Scales & Periodic Reactivity Trends</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Define Electronegativity and compare Pauling vs Mulliken scale.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Relative electron attracting power in covalent bond. Pauling scale (arbitrary F=4.0); Mulliken scale (χ_M = (IE + EA)/2 in eV).
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Explain how Electronegativity correlates with: (a) Metallic & Non-metallic character, (b) Nature of oxides across Period 3.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      High electronegativity → Non-metals forming acidic oxides (Cl₂O₇, SO₃). Low electronegativity → Metals forming basic oxides (Na₂O, MgO). Intermediate → Amphoteric (Al₂O₃).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q92 (HOTS - 5 Marks): Anomalous Behavior of Second Period Elements & Diagonal Relationships</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) List 4 causes for anomalous behavior of 2nd period elements (Li, Be, B, C, N, O, F).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      1. Extremely small atomic size, 2. High electronegativity & IE, 3. High charge/radius ratio, 4. Absence of vacant d-orbitals.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Explain Diagonal Relationship of Be and Al with 4 chemical similarities.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      Be and Al have similar polarising power φ. Similarities: (1) Both form amphoteric oxides (BeO, Al₂O₃), (2) Both render passive by conc. HNO₃, (3) Both form covalent chloridess (BeCl₂, AlCl₃), (4) Both form fluoro-complexes [BeF₄]²⁻ and [AlF₆]³⁻.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q93 (HOTS - 5 Marks): Effective Nuclear Charge & Slater's Rule Analysis</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Define Effective Nuclear Charge Z_eff and Shielding Effect σ.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Z_eff = Z - σ. Shielding effect is inner electron repulsion shielding valence electrons from nuclear pull.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Explain trend of Z_eff across Period 2 (Li to Ne) and why atomic radius decreases.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      Across Period 2, Z increases by 1 per element while added electrons enter same 2p shell. Shielding σ increases weakly, so Z_eff increases from +1.3 (Li) to +5.85 (Ne), pulling electrons tighter and shrinking atomic radius.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q94 (HOTS - 5 Marks): Valency & Chemical Formula Prediction across Periodic Table</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Define Valency and explain its trend across Period 3 with respect to Oxygen and Hydrogen.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Valency with Hydrogen increases 1 to 4 then decreases 3 to 1 (NaH, MgH₂, AlH₃, SiH₄, PH₃, H₂S, HCl). Valency with Oxygen increases 1 to 7 (Na₂O to Cl₂O₇).
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Predict formulas of compounds formed between: (a) Element Z=11 and Z=17, (b) Element Z=12 and Z=7, (c) Element Z=13 and Z=8.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      <b>(a)</b> Na (Z=11, valency 1) + Cl (Z=17, valency 1) → <b>NaCl</b>.<br><b>(b)</b> Mg (Z=12, valency 2) + N (Z=7, valency 3) → <b>Mg₃N₂</b>.<br><b>(c)</b> Al (Z=13, valency 3) + O (Z=8, valency 2) → <b>Al₂O₃</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q95 (HOTS - 5 Marks): Successive Ionization Enthalpies & Group Prediction</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) An element X has IE1 = 738 kJ/mol, IE2 = 1451 kJ/mol, IE3 = 7730 kJ/mol. Identify its valence electrons and group.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Huge jump occurs at IE3 (from 1451 to 7730 kJ/mol), indicating 2 valence electrons. Element belongs to <b>Group 2 (Alkaline Earth Metals, e.g. Magnesium)</b>.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Explain why 3rd IE of Manganese (Z=25) is unusually high compared to Iron (Z=26).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      Mn²⁺ has stable half-filled 3d⁵ subshell ([Ar] 3d⁵). Removing 3rd electron breaks stable 3d⁵ state. Fe²⁺ ([Ar] 3d⁶) readily loses 3rd electron to achieve stable 3d⁵ state.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q96 (HOTS - 5 Marks): Periodicity in Oxides and Hydrides of Representative Elements</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Compare nature of hydrides of Group 1, Group 14, and Group 17.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Group 1 hydrides (NaH) = Saline/Ionic solids. Group 14 (CH₄, SiH₄) = Covalent neutral/electron-precise. Group 17 (HF, HCl) = Covalent acidic gases.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Write balanced equations showing amphoteric nature of Aluminium Oxide (Al₂O₃).</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      Acid reaction: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O.<br>Base reaction: Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄] (Sodium Aluminate).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q97 (HOTS - 5 Marks): Noble Gas Radii & Inertness Periodic Analysis</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Explain electronic basis for inertness of Group 18 Noble Gases.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Noble gases possess completely filled octet ns² np⁶ (duplet 1s² for He), conferring maximum thermodynamic stability, high IE, and positive EA.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Why atomic radius of Neon is larger than Fluorine in 2nd Period data tables?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      Fluorine radius is measured as covalent radius (r_cov = 64 pm). Neon radius is measured as non-bonded van der Waals radius (r_vdw = 160 pm), which is structurally larger.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q98 (HOTS - 5 Marks): Transition Elements (d-Block) vs Representative Elements</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) State 4 characteristic properties of d-block transition elements.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      1. Variable oxidation states, 2. Formation of colored ions/complexes, 3. Paramagnetic behavior, 4. Catalytic activity.
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Why Zn, Cd, Hg are not considered true transition elements?</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      Zinc (3d¹⁰ 4s²), Cadmium (4d¹⁰ 5s²), and Mercury (5d¹⁰ 6s²) have completely filled d-subshells in both elemental ground state and common ionic states.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q99 (HOTS - 5 Marks): Periodic Trends Summary & Electronic Basis</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Summarize periodic trends across Period 3 (Na to Cl) for: (a) Atomic size, (b) Ionization Enthalpy, (c) Electronegativity.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      Na to Cl: Atomic size decreases; Ionization Enthalpy increases (with Be/B and N/O exceptions); Electronegativity increases from 0.9 (Na) to 3.0 (Cl).
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) Predict position (Period & Group) for element with outer configuration: (a) 3s² 3p⁴, (b) 3d¹⁰ 4s¹, (c) 4f⁷ 5d⁰ 6s².</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      <b>(a) 3s² 3p⁴:</b> Period 3, Group = 10+2+4 = <b>Group 16 (Sulfur)</b>.<br><b>(b) 3d¹⁰ 4s¹:</b> Period 4, Group = 10+1 = <b>Group 11 (Copper)</b>.<br><b>(c) 4f⁷ 5d⁰ 6s²:</b> Period 6, <b>f-Block Lanthanoid (Europium, Eu)</b>.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(0, 176, 155, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><span style="color: #00b09b; font-weight: bold;">Q100 (HOTS - 5 Marks): Comprehensive Master Periodic Properties Integration</span></p>
    
    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(i) Summarize 4 fundamental pillars governing all periodic property variations.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 8px 12px; border-left: 3px solid #00b09b; margin-bottom: 10px;">
      1. Principal quantum number n (number of shells), 2. Effective nuclear charge Z_eff, 3. Shielding effect σ, 4. Subshell electronic stability (half/fully filled).
    </div>

    <p style="margin: 8px 0 4px 0;"><span style="color: #00b09b; font-weight: bold;">(ii) An element X has atomic number Z = 17. Write: (a) Electronic configuration, (b) Period & Group, (c) Block, (d) Nature of oxide, (e) Valency.</span></p>
    <div style="background: rgba(0, 176, 155, 0.05); padding: 10px 12px; border-left: 3px solid #00b09b;">
      <b>(a) Configuration:</b> 1s² 2s² 2p⁶ 3s² 3p⁵ ([Ne] 3s² 3p⁵).<br><b>(b) Period:</b> 3; Group: <b>17 (Halogens)</b>.<br><b>(c) Block:</b> p-Block.<br><b>(d) Oxide:</b> Cl₂O₇ is <b>Strongly Acidic</b>.<br><b>(e) Valency:</b> 8 - 7 = <b>1</b>.
    </div>
  </div>
</div>
`;
