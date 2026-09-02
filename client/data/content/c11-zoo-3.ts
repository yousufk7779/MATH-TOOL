// Class 11 Zoology Chapter 3: Cell Structure and Function
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Zoology | Class: 11 | Code: c11-zoo-3

export const c11Zoo3HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.12), rgba(194, 24, 91, 0.12)); border: 1.5px solid rgba(255, 0, 127, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #FF007F; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 3: Cell Structure and Function</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Cell Theory:</b> Schleiden &amp; Schwann (1838-39) and Rudolf Virchow (1855, <i>Omnis cellula-e cellula</i>): all living organisms are composed of cells arising from pre-existing cells.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Fluid Mosaic Model:</b> Singer &amp; Nicolson (1972) structure where a phospholipid bilayer provides a fluid matrix in which integral and peripheral proteins float laterally.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Endomembrane System:</b> A coordinated intracellular membranous network comprising ER, Golgi apparatus, Lysosomes, and Vacuoles.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">S Phase (Synthesis Phase):</b> The crucial period of interphase during which nuclear DNA amount exactly doubles (from 2C to 4C) and centrioles replicate in the cytoplasm.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Synapsis &amp; Crossing Over:</b> Pairing of homologous chromosomes in Zygotene forming a synaptonemal complex, followed by mutual exchange of genetic segments in Pachytene via recombinase.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Kinetochore:</b> Disc-shaped multi-protein complex located on either side of the primary centromere constriction that attaches spindle microtubules during metaphase.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Cell Theory and General Cell Organisation
  </h2>

  <!-- FIGURE 3.1 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 270" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="270" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">Prokaryotic vs Eukaryotic Cellular Architecture</text>
      <!-- Left: Prokaryote -->
      <g transform="translate(25, 40)">
        <rect width="215" height="215" rx="6" fill="rgba(255, 145, 0, 0.12)" stroke="#FF9100" stroke-width="1.2"/>
        <text x="107" y="22" fill="#FF9100" font-size="11" font-weight="bold" text-anchor="middle">Prokaryotic Cell (Bacterium)</text>
        <text x="107" y="38" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Size: 0.1 - 5.0 &mu;m &bull; No membrane-bound organelles</text>
        <line x1="20" y1="46" x2="195" y2="46" stroke="rgba(255,255,255,0.2)"/>
        <text x="25" y="66" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Envelope:</b> Glycocalyx + Wall + Membrane</text>
        <text x="25" y="86" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Genetic:</b> Naked circular nucleoid (no histones)</text>
        <text x="25" y="106" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Plasmids:</b> Small extrachromosomal DNA</text>
        <text x="25" y="126" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Ribosomes:</b> 70S (50S + 30S subunits)</text>
        <text x="25" y="146" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Mesosome:</b> Plasma membrane infolding</text>
        <text x="25" y="166" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Locomotion:</b> Flagellin protein flagella</text>
        <text x="107" y="195" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">Bacteria, Blue-green Algae, Mycoplasma</text>
      </g>
      <!-- Right: Eukaryote -->
      <g transform="translate(260, 40)">
        <rect width="215" height="215" rx="6" fill="rgba(255, 0, 127, 0.12)" stroke="#FF007F" stroke-width="1.2"/>
        <text x="107" y="22" fill="#FF007F" font-size="11" font-weight="bold" text-anchor="middle">Eukaryotic Cell (Animal / Plant)</text>
        <text x="107" y="38" fill="#CBD5E1" font-size="8.5" text-anchor="middle">Size: 10 - 100 &mu;m &bull; Extensive compartmentalization</text>
        <line x1="20" y1="46" x2="195" y2="46" stroke="rgba(255,255,255,0.2)"/>
        <text x="25" y="66" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">True Nucleus:</b> Double envelope + nuclear pores</text>
        <text x="25" y="86" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Chromatin:</b> Linear DNA wrapped on histones</text>
        <text x="25" y="106" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Ribosomes:</b> 80S (60S + 40S in cytosol)</text>
        <text x="25" y="126" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Organelles:</b> ER, Golgi, Lysosomes, Vacuoles</text>
        <text x="25" y="146" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Energy:</b> Mitochondria &amp; Plastids (Chloroplasts)</text>
        <text x="25" y="166" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Cytoskeleton:</b> Microtubules (9+2) &amp; filaments</text>
        <text x="107" y="195" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">Protists, Fungi, Plants, Animals</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.1: Architectural Comparison: Prokaryotic Cell (70S, Nucleoid, Plasmids, Mesosomes) vs Eukaryotic Cell (80S, True Nucleus, Organelles)
  </div>
</div>


  <p>
    The cell is the fundamental structural and functional unit of all living organisms. Anton van Leeuwenhoek first observed living cells; Robert Brown discovered the cell nucleus (1831). The classical Cell Theory formulated by Matthias Schleiden (1838) and Theodor Schwann (1839) was given its modern evolutionary foundation by <b>Rudolf Virchow (1855)</b> with the doctrine: <i>"Omnis cellula-e cellula"</i> (All living cells arise from pre-existing cells). Viruses, prions, and syncytial organisms (e.g., <i>Rhizopus</i>) are classic exceptions.
  </p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Prokaryotic vs Eukaryotic Cell Architecture</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Prokaryotes (Bacteria, Cyanobacteria, Mycoplasma / PPLO):</b>
        <br/>- Lack a true nuclear envelope; genomic DNA is a single, circular, naked double-stranded loop called the <b>Nucleoid / Genophore</b>, lacking basic histone proteins.
        <br/>- Many possess tiny extra-chromosomal autonomous circular DNA molecules called <b>Plasmids</b> that carry antibiotic resistance genes.
        <br/>- <b>Ribosomes are 70S</b> (composed of 50S and 30S subunits); often occur clustered along mRNA as <b>Polysomes / Polyribosomes</b>.
        <br/>- Lack all membrane-bound organelles (no ER, Golgi, mitochondria, or lysosomes).
      </li>
      <li><b style="color: #FF007F;">Eukaryotes (Protists, Fungi, Plants, Animals):</b>
        <br/>- Possess a true double-membraned nucleus enclosing linear DNA packed around octameric <b>Histone Proteins</b> into chromatin.
        <br/>- Cytosolic <b>Ribosomes are 80S</b> (60S and 40S subunits); organellar ribosomes in mitochondria/chloroplasts remain 70S.
        <br/>- Elaborate endomembrane networks and specialized energy transductors (Mitochondria and Plastids).
      </li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Prokaryotic Cell Envelope, Mesosomes &amp; Appendages</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      &bull; <b style="color: #FF007F;">The 3-Layered Cell Envelope:</b> Outermost <b>Glycocalyx</b> (loose slime layer or rigid capsule) + Middle rigid <b>Cell Wall</b> composed of <b>Peptidoglycan (Murein)</b> maintaining cell shape and preventing osmotic lysis (stained by Christian Gram: Gram-positive with thick peptidoglycan vs Gram-negative with outer lipopolysaccharide membrane) + Innermost selectively permeable <b>Plasma Membrane</b>.
      <br/>&bull; <b style="color: #FF007F;">Mesosomes:</b> Complex membranous infoldings of the plasma membrane in the form of vesicles, tubules, and lamellae. They dramatically increase surface area for respiratory electron transport, enzyme secretion, cell wall synthesis, and DNA replication during binary fission.
      <br/>&bull; <b style="color: #FF007F;">Appendages:</b> Bacterial <b>Flagella</b> (composed of flagellin protein; filament, hook, and basal body) for motility; tubular <b>Pili</b> (pilin protein) for bacterial conjugation; and bristly <b>Fimbriae</b> for attachment to rocks and host intestinal tissues.
    </p>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Cell Membrane and Cell Wall Architecture
  </h2>

  <!-- FIGURE 3.2 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 260" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="260" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">Fluid Mosaic Model of Plasma Membrane (Singer &amp; Nicolson, 1972)</text>
      <!-- Bilayer Diagram -->
      <g transform="translate(25, 45)">
        <rect width="450" height="190" rx="6" fill="rgba(255, 0, 127, 0.1)" stroke="rgba(255, 0, 127, 0.3)"/>
        <!-- Upper heads -->
        <g fill="#26C6DA">
          <circle cx="50" cy="55" r="8"/><circle cx="75" cy="55" r="8"/><circle cx="100" cy="55" r="8"/>
          <circle cx="125" cy="55" r="8"/><circle cx="275" cy="55" r="8"/><circle cx="300" cy="55" r="8"/>
          <circle cx="325" cy="55" r="8"/><circle cx="350" cy="55" r="8"/><circle cx="375" cy="55" r="8"/>
          <circle cx="400" cy="55" r="8"/>
        </g>
        <!-- Integral Protein -->
        <rect x="155" y="40" width="90" height="95" rx="10" fill="#FF007F" stroke="#FFFFFF" stroke-width="1.5"/>
        <text x="200" y="90" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Integral</text>
        <text x="200" y="104" fill="#FFFFFF" font-size="8.5" text-anchor="middle">Protein</text>
        <!-- Lower heads -->
        <g fill="#26C6DA">
          <circle cx="50" cy="120" r="8"/><circle cx="75" cy="120" r="8"/><circle cx="100" cy="120" r="8"/>
          <circle cx="125" cy="120" r="8"/><circle cx="275" cy="120" r="8"/><circle cx="300" cy="120" r="8"/>
          <circle cx="325" cy="120" r="8"/><circle cx="350" cy="120" r="8"/><circle cx="375" cy="120" r="8"/>
          <circle cx="400" cy="120" r="8"/>
        </g>
        <!-- Peripheral Protein -->
        <ellipse cx="90" cy="148" rx="35" ry="12" fill="#69F0AE"/>
        <text x="90" y="152" fill="#0F172A" font-size="8" font-weight="bold" text-anchor="middle">Peripheral Protein</text>
        <!-- Explanations -->
        <text x="250" y="165" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">
          Lipids enable quasi-fluid lateral mobility of embedded proteins &bull; Cholesterol buffers fluidity
        </text>
        <text x="250" y="178" fill="#CBD5E1" font-size="8" text-anchor="middle">
          Hydrophilic Phosphate Heads outside (polar) &bull; Hydrophobic Fatty Acid Tails inside (non-polar)
        </text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.2: Fluid Mosaic Model of Biological Membrane: Amphipathic Phospholipid Bilayer, Integral Channel Proteins, Peripheral Proteins &amp; Cholesterol
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Fluid Mosaic Model (Singer &amp; Nicolson, 1972)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      S.J. Singer and G.L. Nicolson proposed the universally accepted <b>Fluid Mosaic Model</b>:
      <br/>- The membrane is a <b>quasifluid lipid bilayer</b> composed mainly of amphipathic <b>Phospholipids</b> (predominantly <b>Phosphoglycerides / Lecithin</b>) with polar hydrophilic heads pointing outward toward aqueous environments and nonpolar hydrophobic saturated hydrocarbon tails sequestered inside.
      <br/>- <b style="color: #FF007F;">Membrane Proteins:</b> Constitute ~52% in human erythrocyte membranes (lipids ~40%):
        <br/>1. <i>Integral (Intrinsic) Proteins:</i> Deeply embedded or spanning the full thickness (transmembrane proteins) acting as transport channels or permeases.
        <br/>2. <i>Peripheral (Extrinsic) Proteins:</i> Loosely associated with polar surfaces, easily extracted (e.g., Spectrin).
      <br/>- <b style="color: #FF007F;">Fluidity:</b> Lipids undergo rapid lateral diffusion; fluidity enables cell growth, endocytosis, secretion, intercellular junctions, and division. <b>Cholesterol</b> molecules intercalated between phospholipids buffer membrane fluidity across temperature swings.
    </p>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Membrane Transport Mechanisms &amp; Cell Wall</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Passive Transport:</b> Solute movement along electrochemical concentration gradient without ATP expenditure: simple diffusion (neutral small molecules, O<sub>2</sub>, CO<sub>2</sub>), osmosis (water flow through aquaporins), and facilitated diffusion (via channel or carrier permeases).</li>
      <li><b style="color: #FF007F;">Active Transport:</b> Movement of solutes against concentration gradient requiring direct ATP hydrolysis (e.g., <b>Na<sup>+</sup>/K<sup>+</sup>-ATPase pump</b>: expels 3 Na<sup>+</sup> and imports 2 K<sup>+</sup> per ATP).</li>
      <li><b style="color: #FF007F;">Cell Wall:</b> Non-living, rigid protective outer layer in plants, fungi, and algae. Composed of cellulose microfibrils embedded in a matrix of hemicellulose, pectin, and lignin in plants; chitin in fungi; galactans, mannans, and CaCO<sub>3</sub> in algae. The <b>Middle Lamella</b> consists of cementing <b>Calcium and Magnesium Pectates</b>; adjacent plant cells are interconnected by cytoplasmic bridges called <b>Plasmodesmata</b>.</li>
    </ul>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. The Endomembrane System (ER, Golgi, Lysosomes, Vacuoles)
  </h2>

  <!-- FIGURE 3.3 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 260" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="260" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">The Endomembrane System: ER &rarr; Golgi &rarr; Lysosomes &rarr; Vacuoles</text>
      <!-- Flow Diagram -->
      <g transform="translate(20, 42)">
        <rect x="0" y="0" width="135" height="120" rx="6" fill="rgba(38, 198, 218, 0.12)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="67" y="20" fill="#26C6DA" font-size="10.5" font-weight="bold" text-anchor="middle">1. Endoplasmic Retic.</text>
        <text x="67" y="38" fill="#69F0AE" font-size="8.5" font-weight="bold" text-anchor="middle">&bull; RER (with Ribosomes):</text>
        <text x="67" y="52" fill="#CBD5E1" font-size="8" text-anchor="middle">Protein synthesis &amp; folding</text>
        <text x="67" y="72" fill="#FFB74D" font-size="8.5" font-weight="bold" text-anchor="middle">&bull; SER (no Ribosomes):</text>
        <text x="67" y="86" fill="#CBD5E1" font-size="8" text-anchor="middle">Lipid synthesis &amp; steroidal</text>
        <text x="67" y="100" fill="#CBD5E1" font-size="8" text-anchor="middle">hormones (detoxification)</text>

        <!-- Arrow -->
        <text x="148" y="65" fill="#FFE082" font-size="16" font-weight="bold">&rarr;</text>

        <rect x="165" y="0" width="150" height="120" rx="6" fill="rgba(255, 0, 127, 0.12)" stroke="#FF007F" stroke-width="1.2"/>
        <text x="240" y="20" fill="#FF007F" font-size="10.5" font-weight="bold" text-anchor="middle">2. Golgi Apparatus</text>
        <text x="240" y="38" fill="#FFFFFF" font-size="8.5" text-anchor="middle">Camillo Golgi (1898)</text>
        <text x="240" y="54" fill="#CBD5E1" font-size="8" text-anchor="middle">&bull; <b style="color: #FF007F;">Cis-Face:</b> Forming / receiving</text>
        <text x="240" y="70" fill="#CBD5E1" font-size="8" text-anchor="middle">&bull; <b style="color: #FF007F;">Trans-Face:</b> Maturing / shipping</text>
        <text x="240" y="88" fill="#69F0AE" font-size="8.5" font-weight="bold" text-anchor="middle">Glycosylation:</text>
        <text x="240" y="102" fill="#FFE082" font-size="7.5" text-anchor="middle">Forms Glycoproteins &amp; Glycolipids</text>

        <!-- Arrow -->
        <text x="328" y="65" fill="#FFE082" font-size="16" font-weight="bold">&rarr;</text>

        <rect x="345" y="0" width="115" height="120" rx="6" fill="rgba(255, 145, 0, 0.12)" stroke="#FF9100" stroke-width="1.2"/>
        <text x="402" y="20" fill="#FF9100" font-size="10.5" font-weight="bold" text-anchor="middle">3. Lysosomes</text>
        <text x="402" y="38" fill="#FFFFFF" font-size="8.5" text-anchor="middle">Acid Hydrolases</text>
        <text x="402" y="54" fill="#CBD5E1" font-size="8" text-anchor="middle">Active at pH ~5.0</text>
        <text x="402" y="70" fill="#CBD5E1" font-size="8" text-anchor="middle">Digests all biomolecules</text>
        <text x="402" y="88" fill="#FF8A65" font-size="8.5" font-weight="bold" text-anchor="middle">'Suicide Bags'</text>
        <text x="402" y="104" fill="#FFE082" font-size="7.5" text-anchor="middle">Vacuoles: Tonoplast</text>
      </g>
      <!-- Bottom coordination banner -->
      <g transform="translate(20, 175)">
        <rect width="460" height="70" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.2)"/>
        <text x="230" y="20" fill="#FFE082" font-size="9.5" font-weight="bold" text-anchor="middle">
          Why Endomembrane System? Coordinated Functional Secretory Vesicle Route
        </text>
        <text x="230" y="38" fill="#FFFFFF" font-size="8.5" text-anchor="middle">
          Mitochondria, Chloroplasts, and Peroxisomes are NOT part of the endomembrane system
        </text>
        <text x="230" y="52" fill="#CBD5E1" font-size="8" text-anchor="middle">
          because their functions are not coordinated with ER, Golgi, Lysosomes, and Vacuoles!
        </text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.3: Endomembrane System Architecture: ER Synthesis &rarr; Golgi Packaging &amp; Glycosylation &rarr; Lysosomal Acid Hydrolases &amp; Tonoplast Vacuoles
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Endoplasmic Reticulum &amp; Golgi Apparatus Organization</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Endoplasmic Reticulum (ER):</b> Interconnecting network of branching tubules and flattened cisternae dividing intracellular space into luminal and extraluminal compartments:
        <br/>- <b style="color: #FF007F;">Rough ER (RER):</b> Outer surface studded with 80S ribosomes (attached via ribophorins); actively synthesizes secretory and lysosomal proteins.
        <br/>- <b style="color: #FF007F;">Smooth ER (SER):</b> Lacks ribosomes; primary site for the synthesis of lipids, phospholipids, and steroidal hormones (e.g., testosterone, estrogen), and stores Ca<sup>2+</sup> in muscle sarcoplasmic reticulum.
      </li>
      <li><b style="color: #FF007F;">Golgi Apparatus (Camillo Golgi, 1898):</b> Stacks of curved, parallel, membrane-bound disc cisternae displaying distinct polarity:
        <br/>- <b style="color: #FF007F;">Cis-Face (Forming Face):</b> Convex face receiving transport vesicles budded from the ER.
        <br/>- <b style="color: #FF007F;">Trans-Face (Maturing Face):</b> Concave face that pinches off finished secretory vesicles and lysosomes.
        <br/>- <b style="color: #FF007F;">Primary Function:</b> Post-translational packaging and chemical modification: <b>Glycosylation</b> of proteins and lipids into <b>Glycoproteins</b> and <b>Glycolipids</b>.
      </li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Lysosomes (Suicide Bags) &amp; Vacuoles</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      &bull; <b style="color: #FF007F;">Lysosomes (Christian de Duve, 1955):</b> Single-membraned vesicular organelles formed by budding from the trans-Golgi face. Packed with over 50 varieties of <b>Hydrolytic Enzymes (Acid Hydrolases: lipases, proteases, nucleases, carbohydrases)</b> that function optimally at acidic <b>pH ~4.5 - 5.0</b> (maintained by membrane V-type H<sup>+</sup>-ATPase pumps). Autolysis of damaged cells earns them the title <b>'Suicide Bags'</b>.
      <br/>&bull; <b style="color: #FF007F;">Vacuoles:</b> Large central space in mature plant cells occupying up to 90% of cellular volume. Bound by a single semi-permeable membrane called the <b>Tonoplast</b> that actively pumps mineral ions and metabolic wastes against concentration gradients into the sap, maintaining high cellular turgor. In freshwater <i>Amoeba</i>, a <b>Contractile Vacuole</b> drives osmoregulation.
    </p>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Energy Transductors: Mitochondria and Plastids
  </h2>

  <!-- FIGURE 3.4 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 260" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="260" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">Mitochondrion Ultrastructure &amp; F0-F1 Oxysome Particles</text>
      <g transform="translate(25, 42)">
        <rect width="215" height="200" rx="6" fill="rgba(255, 61, 0, 0.12)" stroke="#FF3D00" stroke-width="1.2"/>
        <text x="107" y="20" fill="#FF3D00" font-size="11" font-weight="bold" text-anchor="middle">Double Membrane Anatomy</text>
        <text x="20" y="44" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Outer Membrane:</b> Smooth, porous</text>
        <text x="20" y="64" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Inner Membrane:</b> Infolded into <b>Cristae</b></text>
        <text x="20" y="80" fill="#CBD5E1" font-size="8">(increases surface area for ETS)</text>
        <text x="20" y="104" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Matrix:</b> Dense fluid containing:</text>
        <text x="30" y="120" fill="#69F0AE" font-size="8.5">- Circular naked DNA molecule</text>
        <text x="30" y="136" fill="#69F0AE" font-size="8.5">- 70S prokaryotic-type ribosomes</text>
        <text x="30" y="152" fill="#69F0AE" font-size="8.5">- Krebs cycle enzymes</text>
        <text x="107" y="180" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">Semi-Autonomous Organelle</text>
      </g>
      <g transform="translate(260, 42)">
        <rect width="215" height="200" rx="6" fill="rgba(0, 229, 255, 0.12)" stroke="#00E5FF" stroke-width="1.2"/>
        <text x="107" y="20" fill="#00E5FF" font-size="11" font-weight="bold" text-anchor="middle">F<sub>0</sub>-F<sub>1</sub> Complex (Oxysome)</text>
        <!-- Elementary Particle Sketch -->
        <circle cx="107" cy="70" r="18" fill="#FF007F"/>
        <text x="107" y="74" fill="#FFFFFF" font-size="8.5" font-weight="bold" text-anchor="middle">F<sub>1</sub> Head</text>
        <rect x="102" y="88" width="10" height="20" fill="#FFE082"/>
        <rect x="85" y="108" width="44" height="14" rx="3" fill="#26C6DA"/>
        <text x="107" y="118" fill="#0F172A" font-size="8" font-weight="bold" text-anchor="middle">F<sub>0</sub> Base</text>
        <text x="107" y="145" fill="#FFFFFF" font-size="8.5" text-anchor="middle"><b>F<sub>0</sub> Base:</b> Transmembrane proton pore</text>
        <text x="107" y="160" fill="#FFFFFF" font-size="8.5" text-anchor="middle"><b>F<sub>1</sub> Head:</b> Catalyzes ADP + Pi &rarr; ATP</text>
        <text x="107" y="185" fill="#69F0AE" font-size="8.5" font-weight="bold" text-anchor="middle">Site of ATP Synthesis (Powerhouse)</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.4: Mitochondrion Ultrastructure: Outer/Inner Membrane, Cristae, 70S Ribosomes, Circular DNA &amp; F<sub>0</sub>-F<sub>1</sub> ATP Synthase (Oxysomes)
  </div>
</div>


  <!-- FIGURE 3.5 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 260" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="260" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">Plastids Classification &amp; Chloroplast Fine Structure</text>
      <g transform="translate(25, 42)">
        <rect width="450" height="100" rx="6" fill="rgba(105, 240, 174, 0.12)" stroke="#69F0AE" stroke-width="1.2"/>
        <text x="225" y="20" fill="#69F0AE" font-size="11" font-weight="bold" text-anchor="middle">Plastid Classification Matrix (Schimper)</text>
        <g transform="translate(10, 30)">
          <rect width="135" height="58" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="67" y="16" fill="#69F0AE" font-size="9" font-weight="bold" text-anchor="middle">1. Chloroplasts</text>
          <text x="67" y="32" fill="#FFFFFF" font-size="8" text-anchor="middle">Chlorophyll a &amp; b</text>
          <text x="67" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Photosynthesis (Green)</text>
        </g>
        <g transform="translate(155, 30)">
          <rect width="135" height="58" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="67" y="16" fill="#FF9100" font-size="9" font-weight="bold" text-anchor="middle">2. Chromoplasts</text>
          <text x="67" y="32" fill="#FFFFFF" font-size="8" text-anchor="middle">Carotene &amp; Xanthophyll</text>
          <text x="67" y="46" fill="#CBD5E1" font-size="7.5" text-anchor="middle">Petals &amp; Fruits (Color)</text>
        </g>
        <g transform="translate(300, 30)">
          <rect width="140" height="58" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="70" y="16" fill="#26C6DA" font-size="9" font-weight="bold" text-anchor="middle">3. Leucoplasts</text>
          <text x="70" y="30" fill="#FFFFFF" font-size="7.5" text-anchor="middle">Amyloplast (Starch)</text>
          <text x="70" y="42" fill="#FFFFFF" font-size="7.5" text-anchor="middle">Elaioplast (Oil &amp; Fats)</text>
          <text x="70" y="54" fill="#FFFFFF" font-size="7.5" text-anchor="middle">Aleuroplast (Protein)</text>
        </g>
      </g>
      <g transform="translate(25, 152)">
        <rect width="450" height="95" rx="6" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.2)"/>
        <text x="225" y="20" fill="#FFE082" font-size="10.5" font-weight="bold" text-anchor="middle">Chloroplast Ultrastructure Compartments</text>
        <text x="30" y="40" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Thylakoids &amp; Grana:</b> Flattened disc sacs stacked like coins; site of <b>Light Reactions (ATP &amp; NADPH)</b></text>
        <text x="30" y="60" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Stroma:</b> Gel-like matrix containing <b>RuBisCO</b>, 70S ribosomes &amp; circular DNA; site of <b>Dark Reactions (Calvin Cycle)</b></text>
        <text x="30" y="80" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Stroma Lamellae:</b> Interconnecting membranous tubules connecting adjacent grana stacks</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.5: Plastid Classification (Chloroplast, Chromoplast, Leucoplast) &amp; Chloroplast Anatomy (Thylakoids, Grana Stacks, Stroma Lamellae &amp; Stroma)
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Mitochondria Ultrastructure &amp; Oxysomes</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Mitochondria ('Powerhouses of the Cell', Altman / Benda) are sausage-shaped double-membraned organelles:
      <br/>- <b style="color: #FF007F;">Outer Membrane:</b> Smooth, contains porin proteins making it freely permeable to small molecules.
      <br/>- <b style="color: #FF007F;">Inner Membrane:</b> Strictly impermeable to protons; folded into numerous tubular or shelf-like inward projections called <b>Cristae</b> that dramatically increase the surface area available for the Electron Transport System (ETS).
      <br/>- Studded along cristae are millions of pinhead-like <b>Oxysomes / Elementary Particles (F<sub>0</sub>-F<sub>1</sub> ATP Synthase Complexes)</b>: F<sub>0</sub> forms a transmembrane proton channel and F<sub>1</sub> headpiece catalyzes ATP synthesis via chemiosmosis.
      <br/>- <b style="color: #FF007F;">Matrix:</b> Aqueous interior containing soluble Krebs cycle enzymes, a single circular double-stranded naked DNA molecule, RNA molecules, and <b>70S ribosomes</b>, conferring <b>Semi-Autonomous</b> status (capable of independent binary fission).
    </p>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Plastids Classification &amp; Chloroplast Fine Structure</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Plastid Types:</b>
        <br/>1. <i>Chloroplasts:</i> Green plastids containing chlorophyll a, b and carotenoids for photosynthesis.
        <br/>2. <i>Chromoplasts:</i> Yellow, orange, or red plastids containing fat-soluble carotenoids (carotene, xanthophylls) that impart vibrant colors to flower petals and ripening fruits.
        <br/>3. <i>Leucoplasts:</i> Colorless storage plastids: <b>Amyloplasts</b> store starch (Potato tubers); <b>Elaioplasts</b> store oils and fats (Castor seeds); <b>Aleuroplasts</b> store proteins (Maize grains).
      </li>
      <li><b style="color: #FF007F;">Chloroplast Fine Structure:</b> Double-membraned semi-autonomous organelle with central <b>Stroma</b> containing circular DNA, 70S ribosomes, and Calvin cycle enzymes (RuBisCO). Embedded in stroma are <b>Thylakoids</b> (membrane-bound flattened sacs containing chlorophyll) stacked into columns like piles of coins called <b>Grana</b>, interconnected by <b>Stroma Lamellae (Frets)</b>.
      </li>
    </ul>
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Ribosomes, Cytoskeleton, Centrosome, Cilia &amp; Flagella
  </h2>

  <!-- FIGURE 3.6 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 250" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="250" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">Microtubule Architecture: Cilia / Flagella (9+2) vs Centriole (9+0)</text>
      <g transform="translate(25, 42)">
        <rect width="215" height="190" rx="6" fill="rgba(38, 198, 218, 0.12)" stroke="#26C6DA" stroke-width="1.2"/>
        <text x="107" y="22" fill="#26C6DA" font-size="11" font-weight="bold" text-anchor="middle">Cilia &amp; Flagella (9+2 Axoneme)</text>
        <circle cx="107" cy="85" r="45" fill="none" stroke="#26C6DA" stroke-width="2"/>
        <circle cx="102" cy="85" r="5" fill="#FF007F"/><circle cx="112" cy="85" r="5" fill="#FF007F"/>
        <text x="107" y="145" fill="#FFFFFF" font-size="9" text-anchor="middle"><b>9 Peripheral Doublets</b> + <b>2 Central Singlets</b></text>
        <text x="107" y="160" fill="#CBD5E1" font-size="8" text-anchor="middle">Interdoublet Nexin linkers &bull; Radial spokes</text>
        <text x="107" y="174" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">Dynein arms (ATP-driven sliding motility)</text>
      </g>
      <g transform="translate(260, 42)">
        <rect width="215" height="190" rx="6" fill="rgba(255, 145, 0, 0.12)" stroke="#FF9100" stroke-width="1.2"/>
        <text x="107" y="22" fill="#FF9100" font-size="11" font-weight="bold" text-anchor="middle">Centriole (9+0 Cartwheel)</text>
        <circle cx="107" cy="85" r="45" fill="none" stroke="#FF9100" stroke-width="2"/>
        <circle cx="107" cy="85" r="8" fill="#FF007F"/>
        <text x="107" y="89" fill="#FFFFFF" font-size="7.5" font-weight="bold" text-anchor="middle">Hub</text>
        <text x="107" y="145" fill="#FFFFFF" font-size="9" text-anchor="middle"><b>9 Peripheral Triplets</b> + <b>0 Central Microtubule</b></text>
        <text x="107" y="160" fill="#CBD5E1" font-size="8" text-anchor="middle">Radial spokes connect triplets to central hub</text>
        <text x="107" y="174" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">Forms Basal Body &amp; Mitotic Spindle Poles</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.6: Comparative Cytoskeletal Architecture: Cilia/Flagella 9+2 Axoneme with Dynein Arms vs Centriole 9+0 Cartwheel Structure
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Cilia &amp; Flagella 9+2 Axoneme Architecture</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Cilia (short, hair-like, oar-like rhythmic beaters) and Flagella (longer, whip-like undulating locomotory projections) share an identical internal core called the <b>Axoneme</b> enclosed by the plasma membrane:
      <br/>- Displays a classic <b>9 + 2 Microtubule Array</b>: <b>9 peripheral doublet microtubules</b> arranged in a circle surrounding <b>2 central singlet microtubules</b>.
      <br/>- Central singlets are enclosed in a central sheath connected to peripheral doublets by <b>9 radial spokes</b>.
      <br/>- Adjacent doublets are interconnected by proteinaceous <b>Nexin</b> linkers.
      <br/>- Projecting from each A-subfiber are motor arms composed of the ATPase enzyme <b>Dynein</b>, which hydrolyzes ATP to generate sliding forces that produce ciliary beating. Both arise from a basal body.
    </p>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Centriole 9+0 Cartwheel Structure</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The <b>Centrosome</b> is a non-membrane organelle containing two cylindrical structures called <b>Centrioles</b> lying mutually perpendicular to each other surrounded by amorphous pericentriolar material:
      <br/>- Displays a unique <b>9 + 0 Cartwheel Architecture</b>: <b>9 evenly spaced peripheral triplet microtubules</b> of tubulin protein surrounding a proteinaceous central rod called the <b>Hub</b> (central microtubules are completely absent: 0).
      <br/>- Radial spokes connect each triplet to the central hub.
      <br/>- Centrioles duplicate during the S-phase of interphase and form the <b>Basal Bodies</b> of cilia and flagella and the <b>Spindle Poles</b> that orchestrate chromosome segregation during animal cell division.
    </p>
  </div>

  <!-- SECTION 6 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    6. Nuclear Organisation and Chromatin Architecture
  </h2>

  <!-- FIGURE 3.7 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 260" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="260" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">Nucleus Architecture, Nucleosome &amp; Chromosome Types</text>
      <!-- Nucleus Components -->
      <g transform="translate(25, 42)">
        <rect width="215" height="195" rx="6" fill="rgba(224, 64, 251, 0.12)" stroke="#E040FB" stroke-width="1.2"/>
        <text x="107" y="20" fill="#E040FB" font-size="10.5" font-weight="bold" text-anchor="middle">Nucleus Components (Robert Brown, 1831)</text>
        <text x="20" y="44" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Double Envelope:</b> Perinuclear space (10-50 nm)</text>
        <text x="20" y="64" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Nuclear Pores:</b> Bidirectional RNA &amp; protein flow</text>
        <text x="20" y="84" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Nucleolus:</b> Non-membrane factory for <b>rRNA</b></text>
        <text x="20" y="104" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Chromatin (Flemming):</b> DNA + Basic Histones</text>
        <text x="20" y="124" fill="#69F0AE" font-size="8.5">&bull; <b style="color: #FF007F;">Euchromatin:</b> Loose, transcriptionally active</text>
        <text x="20" y="140" fill="#FF8A65" font-size="8.5">&bull; <b style="color: #FF007F;">Heterochromatin:</b> Dense, inactive, dark</text>
        <text x="107" y="175" fill="#FFE082" font-size="8.5" font-weight="bold" text-anchor="middle">Nucleosome: Octamer + 146 bp DNA</text>
      </g>
      <!-- Chromosome Morphology -->
      <g transform="translate(260, 42)">
        <rect width="215" height="195" rx="6" fill="rgba(0, 229, 255, 0.12)" stroke="#00E5FF" stroke-width="1.2"/>
        <text x="107" y="20" fill="#00E5FF" font-size="10.5" font-weight="bold" text-anchor="middle">4 Types based on Centromere Position</text>
        <g transform="translate(15, 34)">
          <text x="0" y="18" fill="#69F0AE" font-size="9" font-weight="bold">1. Metacentric:</text>
          <text x="0" y="30" fill="#CBD5E1" font-size="8">Middle centromere &rarr; Two equal arms (V-shaped)</text>
          <text x="0" y="52" fill="#26C6DA" font-size="9" font-weight="bold">2. Sub-metacentric:</text>
          <text x="0" y="64" fill="#CBD5E1" font-size="8">Slightly away from center &rarr; One short + one long (L-shaped)</text>
          <text x="0" y="86" fill="#FFD54F" font-size="9" font-weight="bold">3. Acrocentric:</text>
          <text x="0" y="98" fill="#CBD5E1" font-size="8">Close to end &rarr; Extremely short p-arm + long q-arm (J-shaped)</text>
          <text x="0" y="120" fill="#FF3D00" font-size="9" font-weight="bold">4. Telocentric:</text>
          <text x="0" y="132" fill="#CBD5E1" font-size="8">Terminal centromere at very tip (I-shaped)</text>
        </g>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.7: Nuclear Organization: Double Envelope, Pores, Nucleolus, Euchromatin vs Heterochromatin &amp; 4 Chromosome Morphologies
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Nuclear Envelope, Nucleolus &amp; Chromatin Packaging</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Nuclear Envelope:</b> Two parallel lipid membranes separated by an 11-50 nm <b>Perinuclear Space</b>. Perforated by octagonal <b>Nuclear Pores</b> formed by nucleoporin protein complexes facilitating controlled bidirectional transport of RNA and proteins. Outer membrane is continuous with the RER.</li>
      <li><b style="color: #FF007F;">Nucleolus:</b> Dense, spherical, non-membraned subnuclear factory specialized for the active transcription and assembly of <b>ribosomal RNA (rRNA)</b> and ribosomal subunit precursors.</li>
      <li><b style="color: #FF007F;">Chromatin Architecture:</b> Negatively charged DNA double helix winds around a positively charged octamer of basic <b>Histone Proteins</b> (two each of H2A, H2B, H3, H4) to form <b>Nucleosomes</b> ('beads-on-a-string' containing 146 bp of DNA sealed by H1 histone).
        <br/>- <i>Euchromatin:</i> Loosely packed, lightly staining, transcriptionally active chromatin.
        <br/>- <i>Heterochromatin:</i> Densely condensed, darkly staining, transcriptionally inert chromatin.
      </li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Chromosome Types &amp; Centromere Positions</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      During metaphase, chromosomes exhibit a primary constriction called the <b>Centromere</b> flanked by disc-shaped protein complexes called <b>Kinetochores</b>. Classified into four morphological types:
      <br/>1. <b style="color: #FF007F;">Metacentric:</b> Centromere is located exactly at the median midpoint, forming two equal arms (appears <b>V-shaped</b> at anaphase).
      <br/>2. <b style="color: #FF007F;">Sub-metacentric:</b> Centromere is placed slightly away from the center, producing one slightly shorter arm (p-arm) and one longer arm (q-arm) (appears <b>L-shaped</b> at anaphase).
      <br/>3. <b style="color: #FF007F;">Acrocentric:</b> Centromere is located close to one end, producing one extremely short minute p-arm and one very long q-arm (appears <b>J-shaped</b> at anaphase).
      <br/>4. <b style="color: #FF007F;">Telocentric:</b> Centromere is located at the absolute terminal tip of the chromosome (appears <b>I-shaped</b> at anaphase).
      <br/>- Some chromosomes possess non-staining secondary constrictions setting off small terminal knobs called <b>Satellites (SAT-Chromosomes)</b>.
    </p>
  </div>

  <!-- SECTION 7 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    7. Cell Cycle and Interphase Dynamics
  </h2>

  <!-- FIGURE 3.8 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 260" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="260" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">The Cell Cycle Wheel &amp; Interphase Phases (Howard &amp; Pelc, 1953)</text>
      <!-- Wheel Representation -->
      <g transform="translate(25, 42)">
        <rect width="220" height="195" rx="6" fill="rgba(0, 176, 155, 0.12)" stroke="#00B09B" stroke-width="1.2"/>
        <text x="110" y="22" fill="#00B09B" font-size="11" font-weight="bold" text-anchor="middle">Interphase (95% of Cycle Duration)</text>
        <text x="20" y="48" fill="#26C6DA" font-size="9.5" font-weight="bold">&bull; G<sub>1</sub> Phase (Gap 1):</text>
        <text x="30" y="62" fill="#CBD5E1" font-size="8">Active RNA &amp; protein synthesis; cell growth</text>
        <text x="20" y="86" fill="#69F0AE" font-size="9.5" font-weight="bold">&bull; S Phase (Synthesis):</text>
        <text x="30" y="100" fill="#FFE082" font-size="8.5" font-weight="bold">DNA doubles: 2C &rarr; 4C! (Chromosome number 2n unchanged)</text>
        <text x="30" y="114" fill="#CBD5E1" font-size="8">Centriole duplicates in cytoplasm</text>
        <text x="20" y="138" fill="#FFD54F" font-size="9.5" font-weight="bold">&bull; G<sub>2</sub> Phase (Gap 2):</text>
        <text x="30" y="152" fill="#CBD5E1" font-size="8">Tubulin synthesis for mitotic spindle assembly</text>
        <text x="110" y="180" fill="#FF8A65" font-size="8.5" font-weight="bold" text-anchor="middle">G<sub>0</sub> Phase: Quiescent metabolic arrest</text>
      </g>
      <!-- M Phase Breakdown -->
      <g transform="translate(260, 42)">
        <rect width="215" height="195" rx="6" fill="rgba(255, 0, 127, 0.12)" stroke="#FF007F" stroke-width="1.2"/>
        <text x="107" y="22" fill="#FF007F" font-size="11" font-weight="bold" text-anchor="middle">M Phase (Mitosis - 5% of Duration)</text>
        <text x="20" y="48" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Prophase:</b> Chromatin condenses, asters form</text>
        <text x="20" y="74" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Metaphase:</b> Chromosomes align at equatorial plate</text>
        <text x="30" y="88" fill="#FFE082" font-size="8.5">(Best stage to study morphology &amp; count number)</text>
        <text x="20" y="114" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Anaphase:</b> Centromeres split; chromatids separate</text>
        <text x="30" y="128" fill="#FFE082" font-size="8.5">(Best stage to study chromosome shape V, L, J, I)</text>
        <text x="20" y="154" fill="#FFFFFF" font-size="9">&bull; <b style="color: #FF007F;">Telophase:</b> Nuclear envelope reforms; decondensation</text>
        <text x="107" y="180" fill="#69F0AE" font-size="8.5" font-weight="bold" text-anchor="middle">Cytokinesis: Furrowing (Animals) / Cell plate (Plants)</text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.8: The Complete Cell Cycle Wheel: Interphase (G<sub>1</sub>, S DNA Duplication 2C&rarr;4C, G<sub>2</sub>), G<sub>0</sub> Quiescence &amp; M Phase Stages
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Interphase Stages (G1, S, G2) and G0 Phase</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      The cell cycle is the orderly sequence of events by which a cell duplicates its genome and divides into two daughter cells. A typical human cell cycle lasts ~24 hours, divided into <b>Interphase (~95% of duration, ~23 hours)</b> and <b>M Phase (Mitosis, ~1 hour)</b>:
      <br/>&bull; <b style="color: #FF007F;">1. G<sub>1</sub> Phase (Gap 1 / Post-mitotic gap):</b> Interval between mitosis and DNA replication. Cell is metabolically active and continuously grows, synthesizing RNA, ATP, and enzymes required for DNA synthesis.
      <br/>&bull; <b style="color: #FF007F;">2. S Phase (Synthesis Phase):</b> Period of genomic replication. <b>DNA amount doubles from 2C to 4C</b>. Crucially, the <b>chromosome number remains unchanged (2n &rarr; 2n)</b>! In animal cells, the <b>Centriole duplicates</b> in the cytoplasm during S-phase.
      <br/>&bull; <b style="color: #FF007F;">3. G<sub>2</sub> Phase (Gap 2 / Pre-mitotic gap):</b> Cell synthesizes proteins (e.g., <b>Tubulin</b> for the mitotic spindle) and undergoes final cytoplasmic growth preparing for mitosis.
      <br/>&bull; <b style="color: #FF007F;">4. G<sub>0</sub> Phase (Quiescent Stage):</b> Cells that exit the cycle and do not divide (e.g., adult Heart muscle cells and Neurons) enter an inactive G<sub>0</sub> stage. They remain metabolically active but do not proliferate unless called upon to repair injury.
    </p>
  </div>

  <!-- SECTION 8 -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    8. Mitosis &amp; Meiosis (Cell Division Stages)
  </h2>

  <!-- FIGURE 3.9 -->
  
<div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 10px; padding: 14px 16px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 500px;">
    <svg viewBox="0 0 500 260" style="width: 100%; max-width: 470px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="260" rx="8" fill="#0F172A"/>
      <text x="250" y="24" fill="#FF007F" font-size="13.5" font-weight="bold" text-anchor="middle">Meiosis I: 5 Sub-stages of Prophase I &amp; Crossing Over</text>
      <!-- 5 Stages Grid -->
      <g transform="translate(20, 42)">
        <rect width="460" height="195" rx="6" fill="rgba(255, 0, 127, 0.1)" stroke="rgba(255, 0, 127, 0.3)"/>
        <!-- 1 Leptotene -->
        <g transform="translate(15, 15)">
          <rect width="80" height="95" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="40" y="18" fill="#26C6DA" font-size="9" font-weight="bold" text-anchor="middle">1. Leptotene</text>
          <text x="40" y="36" fill="#FFFFFF" font-size="7.5" text-anchor="middle">Beaded bouquet</text>
          <text x="40" y="50" fill="#CBD5E1" font-size="7" text-anchor="middle">Chromatin</text>
          <text x="40" y="62" fill="#CBD5E1" font-size="7" text-anchor="middle">condenses into</text>
          <text x="40" y="74" fill="#CBD5E1" font-size="7" text-anchor="middle">slender threads</text>
        </g>
        <!-- 2 Zygotene -->
        <g transform="translate(105, 15)">
          <rect width="80" height="95" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="40" y="18" fill="#69F0AE" font-size="9" font-weight="bold" text-anchor="middle">2. Zygotene</text>
          <text x="40" y="36" fill="#FFFFFF" font-size="7.5" text-anchor="middle">Synapsis begins</text>
          <text x="40" y="50" fill="#FFE082" font-size="7" text-anchor="middle">Synaptonemal</text>
          <text x="40" y="62" fill="#FFE082" font-size="7" text-anchor="middle">Complex forms</text>
          <text x="40" y="76" fill="#CBD5E1" font-size="7" text-anchor="middle">Forms Bivalents</text>
        </g>
        <!-- 3 Pachytene -->
        <g transform="translate(195, 15)">
          <rect width="80" height="95" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="40" y="18" fill="#FF007F" font-size="9" font-weight="bold" text-anchor="middle">3. Pachytene</text>
          <text x="40" y="34" fill="#FFE082" font-size="7.5" font-weight="bold" text-anchor="middle">Crossing Over!</text>
          <text x="40" y="48" fill="#CBD5E1" font-size="7" text-anchor="middle">Recombinase</text>
          <text x="40" y="60" fill="#CBD5E1" font-size="7" text-anchor="middle">enzyme mediates</text>
          <text x="40" y="72" fill="#CBD5E1" font-size="7" text-anchor="middle">non-sister gene</text>
          <text x="40" y="84" fill="#CBD5E1" font-size="7" text-anchor="middle">exchange</text>
        </g>
        <!-- 4 Diplotene -->
        <g transform="translate(285, 15)">
          <rect width="80" height="95" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="40" y="18" fill="#FFD54F" font-size="9" font-weight="bold" text-anchor="middle">4. Diplotene</text>
          <text x="40" y="36" fill="#FFFFFF" font-size="7.5" text-anchor="middle">Desynapsis</text>
          <text x="40" y="50" fill="#FFE082" font-size="7" text-anchor="middle">X-shaped</text>
          <text x="40" y="62" fill="#FFE082" font-size="7.5" font-weight="bold" text-anchor="middle">Chiasmata</text>
          <text x="40" y="76" fill="#CBD5E1" font-size="7" text-anchor="middle">become visible</text>
        </g>
        <!-- 5 Diakinesis -->
        <g transform="translate(375, 15)">
          <rect width="75" height="95" rx="4" fill="rgba(15, 23, 42, 0.7)"/>
          <text x="37" y="18" fill="#FF3D00" font-size="9" font-weight="bold" text-anchor="middle">5. Diakinesis</text>
          <text x="37" y="36" fill="#FFFFFF" font-size="7" text-anchor="middle">Terminalization</text>
          <text x="37" y="50" fill="#CBD5E1" font-size="7" text-anchor="middle">Chiasmata shift</text>
          <text x="37" y="62" fill="#CBD5E1" font-size="7" text-anchor="middle">to chromosome</text>
          <text x="37" y="74" fill="#CBD5E1" font-size="7" text-anchor="middle">tips; envelope</text>
          <text x="37" y="86" fill="#CBD5E1" font-size="7" text-anchor="middle">breaks down</text>
        </g>
        <!-- Bottom Recombination Banner -->
        <text x="230" y="135" fill="#FFE082" font-size="9" font-weight="bold" text-anchor="middle">
          Pachytene Crossing Over generates Genetic Variations &rarr; Raw Material for Evolution!
        </text>
        <text x="230" y="152" fill="#FFFFFF" font-size="8.5" text-anchor="middle">
          Meiosis reduces chromosome number from 2n &rarr; n &bull; Yields 4 genetically distinct haploid gametes
        </text>
        <text x="230" y="168" fill="#CBD5E1" font-size="8" text-anchor="middle">
          Interkinesis (short pause between Meiosis I and II) lacks DNA replication!
        </text>
      </g>
    </svg>
  </div>
  <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
    💡 Figure 3.9: Prophase I Sub-stages: Leptotene, Zygotene Synapsis, Pachytene Crossing Over (Recombinase), Diplotene Chiasmata &amp; Diakinesis Terminalization
  </div>
</div>


  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Mitosis (Equational Division) &amp; Cytokinesis</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Occurs in somatic cells, maintaining exact diploid chromosome number (2n &rarr; 2n):
      <br/>1. <b style="color: #FF007F;">Prophase:</b> Chromatin condenses into distinct chromosomes; centrosomes migrate to opposite poles radiating asters; nucleolus and nuclear envelope disintegrate.
      <br/>2. <b style="color: #FF007F;">Metaphase:</b> Spindle fibers attach to kinetochores; chromosomes align at the equatorial plane (<b>Metaphasic Plate</b>). <b>Best stage to study chromosome morphology and count numbers!</b>
      <br/>3. <b style="color: #FF007F;">Anaphase:</b> Centromeres split simultaneously; sister chromatids separate into daughter chromosomes pulled toward opposite poles by shortening spindle fibers (displaying V, L, J, I shapes).
      <br/>4. <b style="color: #FF007F;">Telophase:</b> Chromosomes decondense; nuclear envelopes reform around daughter nuclei; nucleoli reappear.
      <br/>&bull; <b style="color: #FF007F;">Cytokinesis:</b> Cytoplasmic division. Animal cells divide by a peripheral <b>Cleavage Furrow</b> deepening centripetally; plant cells divide by centrifugal formation of a <b>Cell Plate</b> (derived from phragmoplast vesicles).
    </p>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Meiosis (Reductional Division) &amp; Prophase I Sub-stages</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Meiosis Principles:</b> Specialized division occurring in germ cells during gametogenesis; reduces chromosome number by half (2n &rarr; n), producing 4 genetically distinct haploid gametes. Involves two successive nuclear divisions (Meiosis I and Meiosis II) but only a single round of DNA replication.</li>
      <li><b style="color: #FF007F;">The 5 Sub-stages of Prophase I:</b>
        <br/>1. <b style="color: #FF007F;">Leptotene:</b> Chromatin condenses into long, slender, beaded threads ('Bouquet stage').
        <br/>2. <b style="color: #FF007F;">Zygotene:</b> Homologous chromosomes pair up side-by-side in a process called <b>Synapsis</b>, mediated by a proteinaceous zipper called the <b>Synaptonemal Complex</b>, forming paired <b>Bivalents / Tetrads</b>.
        <br/>3. <b style="color: #FF007F;">Pachytene:</b> Non-sister chromatids of homologous chromosomes undergo mutual physical exchange of genetic segments called <b>Crossing Over</b>, catalyzed by the enzyme complex <b>Recombinase</b>. Generates new genetic recombinations!
        <br/>4. <b style="color: #FF007F;">Diplotene:</b> Dissolution of the synaptonemal complex causes homologous chromosomes to pull apart, remaining held together only at the points of crossing over called X-shaped <b>Chiasmata</b>. In amphibian oocytes, diplotene can arrest for months/years (Dictyotene).
        <br/>5. <b style="color: #FF007F;">Diakinesis:</b> Chiasmata shift toward chromosome tips in a zipper-like motion called <b>Terminalization</b>; nucleolus dissolves; nuclear envelope breaks down.
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(136, 14, 79, 0.85)); border: 2px solid #FF007F; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #FF007F; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 3 Cell Structure &amp; Division Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(255, 0, 127, 0.25); color: #FF007F; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Organelle / Stage</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Ultrastructure &amp; Distinctive Formula</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Diagnostic Function &amp; Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Plasma Membrane:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Fluid Mosaic (Phospholipid Bilayer + Proteins)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Semi-permeable barrier; active Na<sup>+</sup>/K<sup>+</sup> pump</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Endomembrane:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">ER &rarr; Golgi &rarr; Lysosomes &rarr; Vacuoles</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">RER (protein), SER (lipids), Golgi (glycosylation)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Mitochondria:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Double membrane, Cristae, F<sub>0</sub>-F<sub>1</sub> Oxysomes</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cellular respiration (Krebs + ETS); 70S DNA; ATP</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Chloroplast:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Thylakoids, Grana, Stroma, Stroma lamellae</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Photosynthesis (Light in grana; Dark in stroma)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Cilia / Flagella:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">9 + 2 Axoneme with Dynein arms</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">ATP-driven sliding microtubule locomotion</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Centriole:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">9 + 0 Cartwheel array of triplets</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Basal body formation &amp; Mitotic spindle poles</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Interphase S Phase:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">DNA doubles: 2C &rarr; 4C (2n unchanged)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Nuclear DNA replication &amp; Centriole duplication</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Metaphase:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Equatorial metaphase plate alignment</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Best stage to count &amp; analyze morphology</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Pachytene (Meiosis):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Crossing over via Recombinase enzyme</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Genetic recombination &amp; evolutionary variation</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c11Zoo3HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(194, 24, 91, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Cell Theory, Organelle Ultrastructure, Membrane Dynamics, S-Phase DNA Kinetics &amp; Meiotic Stages</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Who formulated the classical Cell Theory?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Matthias Schleiden (1838) and Theodor Schwann (1839).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Who added the generalization 'Omnis cellula-e cellula' to the Cell Theory?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Rudolf Virchow (1855).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is the meaning of 'Omnis cellula-e cellula'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      All living cells arise from pre-existing living cells by division.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Name the smallest known living cellular organism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mycoplasma (PPLO), ~0.3 &mu;m in size.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What is the genetic material of prokaryotic cells called?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nucleoid (or Genophore / Prochromosome).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What are Plasmids?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Small, circular, self-replicating, extrachromosomal double-stranded DNA molecules found in bacteria.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Name the three layers of the bacterial cell envelope from outside to inside.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Glycocalyx (capsule/slime layer), Cell Wall, and Plasma Membrane.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What are Mesosomes in bacteria?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Internal invaginations of the plasma membrane into the cytoplasm in the form of vesicles, tubules, or lamellae.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What type of ribosomes are found in prokaryotes?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      70S ribosomes (composed of 50S and 30S subunits).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Who proposed the Fluid Mosaic Model of the cell membrane?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      S.J. Singer and G.L. Nicolson (1972).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What are the two major chemical constituents of the plasma membrane?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lipids (predominantly phosphoglycerides) and Proteins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Name the cementing layer found between adjacent plant cell walls.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Middle Lamella (composed of Calcium and Magnesium Pectates).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What are Plasmodesmata?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Microscopic cytoplasmic strands traversing plant cell walls that connect neighboring plant cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Which organelles constitute the Endomembrane System?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Endoplasmic Reticulum (ER), Golgi Apparatus, Lysosomes, and Vacuoles.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Why are Mitochondria and Chloroplasts not considered part of the endomembrane system?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because their functions are not coordinated with the ER, Golgi, lysosomes, and vacuoles.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: What is the primary function of Rough Endoplasmic Reticulum (RER)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Protein synthesis, folding, and secretion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: What is the primary function of Smooth Endoplasmic Reticulum (SER)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lipid synthesis, steroid hormone production, and detoxification.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Who discovered the Golgi Apparatus?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Camillo Golgi (1898).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What is the function of the cis-face and trans-face of the Golgi apparatus?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cis-face receives transport vesicles from ER; trans-face releases modified mature secretory vesicles.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: Why are Lysosomes called 'Suicide Bags' of the cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because if their membrane ruptures, their acidic hydrolytic enzymes digest the cell's own components.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What is the optimum pH for the activity of lysosomal enzymes?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Acidic pH ~4.5 - 5.0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Name the single semi-permeable membrane enclosing a plant vacuole.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Tonoplast.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Name the organelle known as the 'Powerhouse of the Cell'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mitochondrion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What are Cristae in mitochondria?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Infoldings of the inner mitochondrial membrane that increase surface area for the electron transport chain.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What are Oxysomes (F0-F1 particles)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Elementary ATP synthase complexes studded on mitochondrial cristae that catalyze ATP synthesis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Name the storage plastid that stores Starch.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Amyloplast (a type of Leucoplast).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Name the storage plastid that stores Oils and Fats.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Elaioplast.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is a Granum in a chloroplast?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A stack of disc-shaped thylakoid sacs resembling a pile of coins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: What type of ribosomes are found in the mitochondrial matrix and chloroplast stroma?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      70S ribosomes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Describe the axoneme microtubule arrangement in Cilia and Flagella.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      9 + 2 arrangement (9 peripheral doublets + 2 central singlets).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Describe the microtubule arrangement in a Centriole.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      9 + 0 arrangement (9 peripheral triplets + 0 central microtubules; Cartwheel structure).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: Who discovered the cell nucleus?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Robert Brown (1831).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Who coined the term 'Chromatin' for nuclear material?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Walther Flemming.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What is a Nucleosome?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A structural unit of chromatin comprising a histone octamer wrapped by ~146 bp of DNA.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: What is the centromere?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The primary constriction of a chromosome that holds sister chromatids together and attaches to spindle fibers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Name the disc-shaped protein structures on either side of the centromere.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kinetochores.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: In which stage of the cell cycle does DNA replication take place?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      S Phase (Synthesis Phase) of Interphase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What happens to the chromosome number during the S phase of the cell cycle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Chromosome number remains unchanged (2n &rarr; 2n), while DNA content doubles (2C &rarr; 4C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: In which stage of mitosis are chromosomes best studied for their morphology and number?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Metaphase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: In which sub-stage of Prophase I does Crossing Over take place?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pachytene.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(194, 24, 91, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Organelle Comparative Matrices, Cilia vs Centriole Symmetry, Chromosome Types &amp; Prophase I Sub-stages</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: State the modern Cell Theory and list two major exceptions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Postulates:</b><br/>(a) All living organisms are composed of cells and products of cells (Schleiden &amp; Schwann).<br/>(b) All cells arise from pre-existing living cells by division (Rudolf Virchow's <i>Omnis cellula-e cellula</i>).<br/>2. <b style="color: #FF007F;">Exceptions:</b><br/>&bull; <b style="color: #FF007F;">Viruses:</b> Acellular nucleoprotein particles lacking protoplasm and cellular machinery.<br/>&bull; <b style="color: #FF007F;">Coenocytic / Syncytial Organisms:</b> Multinucleated masses without cellular divisions (e.g., <i>Rhizopus</i>, <i>Vaucheria</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Explain the 3-layered Cell Envelope of a bacterium and its functions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Glycocalyx:</b> Outermost coat. If loose, called a <b>Slime Layer</b> (prevents desiccation); if thick and tough, called a <b>Capsule</b> (protects against host phagocytosis).<br/>2. <b style="color: #FF007F;">Cell Wall:</b> Middle rigid layer made of <b>Peptidoglycan (Murein)</b>. Provides structural rigidity and prevents osmotic bursting.<br/>3. <b style="color: #FF007F;">Plasma Membrane:</b> Innermost selectively permeable phospholipid bilayer regulating nutrient transport.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Describe the structure and functions of Mesosomes in bacteria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mesosomes are specialized invaginations of the bacterial plasma membrane into the cytoplasm:<br/>1. <b style="color: #FF007F;">Structure:</b> Folded into vesicles, tubules, and lamellae.<br/>2. <b style="color: #FF007F;">Functions:</b><br/>&bull; Dramatically increase surface area for <b>respiration</b> (contain respiratory enzymes functionally analogous to mitochondria).<br/>&bull; Assist in <b>cell wall synthesis</b> and enzymatic secretion.<br/>&bull; Aid in <b>DNA replication</b> and equal distribution of daughter chromosomes during binary fission.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain the Fluid Mosaic Model of Singer and Nicolson with its biomolecular features.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Lipid Bilayer:</b> Continuous quasi-fluid double layer of amphipathic phospholipids with hydrophilic heads pointing outward and hydrophobic fatty acid tails pointing inward.<br/>2. <b style="color: #FF007F;">Membrane Proteins:</b> Floating like 'icebergs in a sea of lipids':<br/>&bull; <i>Integral Proteins:</i> Embedded partially or completely (transmembrane channels).<br/>&bull; <i>Peripheral Proteins:</i> Loosely bound to the surface.<br/>3. <b style="color: #FF007F;">Fluidity &amp; Cholesterol:</b> Quasi-fluidity allows lateral protein movement; cholesterol intercalated among fatty acids stabilizes fluidity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Differentiate between Active Transport and Passive Transport across cell membranes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Energy Requirement:</b> Passive transport occurs spontaneously without ATP expenditure; Active transport strictly requires direct ATP hydrolysis.<br/>2. <b style="color: #FF007F;">Concentration Gradient:</b> Passive transport occurs <b>along</b> the gradient (high to low concentration); Active transport occurs <b>against</b> the gradient (low to high concentration).<br/>3. <b style="color: #FF007F;">Examples:</b> Passive: Simple diffusion of O<sub>2</sub>, osmosis of water via aquaporins; Active: Na<sup>+</sup>/K<sup>+</sup>-ATPase pump.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Differentiate between Rough Endoplasmic Reticulum (RER) and Smooth Endoplasmic Reticulum (SER).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Ribosomes:</b> RER bears 80S ribosomes bound to its cytosolic surface via ribophorins; SER completely lacks ribosomes.<br/>2. <b style="color: #FF007F;">Morphology:</b> RER is mainly composed of flattened, parallel <b>Cisternae</b>; SER is formed predominantly of tubular networks.<br/>3. <b style="color: #FF007F;">Function:</b> RER synthesizes and folds secretory and membrane proteins; SER synthesizes lipids, phospholipids, steroid hormones, and detoxifies drugs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Explain the structure and polarity of the Golgi Apparatus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Structure:</b> Consists of 4-8 parallel, curved, membrane-bound flattened sacs called <b>Cisternae</b> (0.5 to 1.0 &mu;m diameter).<br/>2. <b style="color: #FF007F;">Polarity:</b><br/>&bull; <b style="color: #FF007F;">Cis-Face (Convex / Forming Face):</b> Oriented toward the ER; receives transitional vesicles containing newly synthesized proteins.<br/>&bull; <b style="color: #FF007F;">Trans-Face (Concave / Maturing Face):</b> Oriented toward the plasma membrane; pinches off secretory vesicles and lysosomes.<br/>3. <b style="color: #FF007F;">Function:</b> Modifies proteins and lipids via <b>Glycosylation</b>, producing glycoproteins and glycolipids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain why Lysosomes are called polymorphic organelles. Name their 4 forms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lysosomes exhibit polymorphism because they change their internal morphology and enzymatic contents based on functional states:<br/>1. <b style="color: #FF007F;">Primary Lysosomes:</b> Newly budded vesicles from the Golgi containing inactive acid hydrolases.<br/>2. <b style="color: #FF007F;">Secondary Lysosomes (Heterophagosomes):</b> Formed by fusion of a primary lysosome with an endocytic phagosome; active digestion occurs.<br/>3. <b style="color: #FF007F;">Residual Bodies:</b> Vesicles containing undigested debris destined for exocytosis.<br/>4. <b style="color: #FF007F;">Autophagic Vacuoles (Autophagosomes):</b> Lysosomes that fuse with worn-out damaged cellular organelles (e.g., old mitochondria) for self-digestion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Why are Mitochondria and Chloroplasts termed 'Semi-Autonomous' organelles?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      They are called semi-autonomous because they have partial genetic independence from the nucleus:<br/>1. Possess their own <b>circular, double-stranded naked DNA</b>.<br/>2. Possess their own <b>70S ribosomes</b>, tRNAs, and aminoacyl-tRNA synthetases to synthesize some of their own structural proteins.<br/>3. Capable of self-replication by <b>binary fission</b>.<br/>However, they are not fully autonomous because the majority of their proteins are coded by nuclear genes and imported from the cytoplasm.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Describe the Ultrastructure of a Mitochondrion and state the role of Cristae.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Double Membrane:</b> Smooth outer membrane and inner membrane separated by an <b>Intermembrane Space</b>. The inner membrane is deeply infolded into finger-like or shelf-like <b>Cristae</b>.<br/>2. <b style="color: #FF007F;">Role of Cristae:</b> Dramatically multiplies the surface area available for housing thousands of ETS electron carriers and F<sub>0</sub>-F<sub>1</sub> ATP synthase complexes.<br/>3. <b style="color: #FF007F;">Matrix:</b> Contains Krebs cycle enzymes, 70S ribosomes, circular DNA, and divalent ions (Mg<sup>2+</sup>, Ca<sup>2+</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Differentiate between Chloroplast, Chromoplast, and Leucoplast in a comparative table.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Chloroplast:</b> Green plastid; contains Chlorophyll a, b and carotenoids; captures light energy for photosynthesis.<br/>2. <b style="color: #FF007F;">Chromoplast:</b> Yellow, orange, or red plastid; contains fat-soluble Carotene and Xanthophylls; imparts bright warning/attracting colors to flower petals and ripe fruits.<br/>3. <b style="color: #FF007F;">Leucoplast:</b> Colorless plastid lacking pigments; specialized for nutrient storage: Amyloplasts (starch), Elaioplasts (fats/oils), Aleuroplasts (proteins).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain the 9+2 Axoneme architecture of Cilia and Flagella.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Microtubule Arrangement:</b> Enclosed by plasma membrane, the central core (axoneme) displays <b>9 peripheral doublet microtubules</b> arranged in a ring around <b>2 central singlet microtubules</b>.<br/>2. <b style="color: #FF007F;">Internal Connections:</b> Central singlets are surrounded by a central sheath connected to peripheral doublets via <b>9 radial spokes</b>. Adjacent doublets are linked by <b>Nexin</b> proteins.<br/>3. <b style="color: #FF007F;">Dynein Motor Arms:</b> Peripheral doublets bear ATP-hydrolyzing dynein arms that walk along adjacent tubulin protofilaments, causing sliding and bending.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain the 9+0 Cartwheel structure of the Centriole.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Structure:</b> Cylindrical sub-organelle lacking a limiting membrane, displaying a <b>9 + 0 pattern</b>.<br/>2. <b style="color: #FF007F;">Microtubules:</b> Composed of <b>9 evenly spaced peripheral triplet microtubules</b> (each consisting of A, B, C sub-fibers) of tubulin. Central microtubules are completely absent (0).<br/>3. <b style="color: #FF007F;">Cartwheel Hub:</b> The central proteinaceous rod (Hub) is connected to the A-tubule of each peripheral triplet by 9 radial spokes, creating a cartwheel appearance.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Describe the structure of a Nucleosome and explain how DNA is packed in chromatin.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Histone Octamer:</b> Core particle consisting of two molecules each of four basic proteins: <b>H2A, H2B, H3, and H4</b> rich in positively charged lysine and arginine residues.<br/>2. <b style="color: #FF007F;">DNA Wrapping:</b> Negatively charged double-stranded DNA wraps around the octamer in ~1.65 turns, encompassing <b>146 base pairs</b> of DNA.<br/>3. <b style="color: #FF007F;">H1 Histone &amp; Linker:</b> An H1 histone binds at the entry/exit site, sealing the nucleosome. Successive nucleosomes linked by ~54 bp linker DNA form a 10-nm 'beads-on-a-string' fiber, which condenses into a 30-nm solenoid fiber and higher-order metaphase chromosomes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Differentiate between Euchromatin and Heterochromatin.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Packing Density:</b> Euchromatin is loosely packed and diffuse; Heterochromatin is densely and tightly packed.<br/>2. <b style="color: #FF007F;">Staining Reaction:</b> Euchromatin stains lightly with basic dyes (Feulgen/Acetocarmine); Heterochromatin stains darkly.<br/>3. <b style="color: #FF007F;">Transcriptional Activity:</b> Euchromatin is <b>genetically and transcriptionally active</b> (readily transcribed into mRNA); Heterochromatin is <b>transcriptionally inert / silent</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Classify Chromosomes into 4 types based on centromere position with anaphase shapes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Metacentric:</b> Centromere is median; gives two equal arms; appears <b>V-shaped</b> at anaphase.<br/>2. <b style="color: #FF007F;">Sub-metacentric:</b> Centromere is sub-median; gives one short (p) and one long (q) arm; appears <b>L-shaped</b> at anaphase.<br/>3. <b style="color: #FF007F;">Acrocentric:</b> Centromere is sub-terminal; gives an extremely short p-arm and very long q-arm; appears <b>J-shaped</b> at anaphase.<br/>4. <b style="color: #FF007F;">Telocentric:</b> Centromere is terminal at the absolute tip; appears <b>I-shaped</b> at anaphase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Explain what happens during the G1, S, and G2 phases of Interphase.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">G<sub>1</sub> Phase (Gap 1):</b> Cell grows in size; synthesizes RNA, proteins, and ATP; organelles duplicate; prepares for DNA replication.<br/>2. <b style="color: #FF007F;">S Phase (Synthesis):</b> Nuclear DNA replicates; <b>DNA content doubles from 2C to 4C</b>, while chromosome count remains 2n. Centrioles duplicate in the cytoplasm.<br/>3. <b style="color: #FF007F;">G<sub>2</sub> Phase (Gap 2):</b> Synthesis of spindle proteins (Tubulin); checks for DNA replication errors; completes cell growth for mitosis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain the significance of the G0 (Quiescent) Phase of the cell cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cells that do not actively divide in adult tissues (such as heart muscle cells and mature neurons) exit the cell cycle after G<sub>1</sub> and enter an inactive resting phase called the <b>G<sub>0</sub> Phase (Quiescent Stage)</b>. Cells in G<sub>0</sub> remain metabolically active and fully functional, performing specialized physiological tasks, but do not undergo DNA replication or mitosis unless stimulated by growth factors or injury repair signals.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain why Metaphase is considered the best stage to study chromosome morphology.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      During Metaphase, chromosome condensation reaches its absolute maximum, making chromosomes thickest, shortest, and distinctly visible under a light microscope. Furthermore, spindle fibers align all chromosomes neatly along the equatorial plane (<b>Metaphasic Plate</b>), allowing accurate counting of total chromosome number, measurement of arm lengths, and identification of centromere positions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Describe Anaphase of Mitosis and explain how sister chromatids separate.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. The centromere of each metaphase chromosome splits longitudinally, converting the two sister chromatids into independent <b>Daughter Chromosomes</b>.<br/>2. Kinetochore spindle microtubules depolymerize at their plus ends, exerting pulling tension.<br/>3. The daughter chromosomes are pulled toward opposite spindle poles with their centromeres leading and chromosomal arms trailing behind (displaying characteristic V, L, J, or I shapes).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Differentiate between Cytokinesis in Animal Cells and Plant Cells.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Animal Cells (Cleavage Furrow):</b> Cytokinesis occurs by constriction. A contractile ring of actin and myosin filaments under the plasma membrane produces a <b>Cleavage Furrow</b> that deepens <b>centripetally (from outside to center)</b> until the cell pinches into two.<br/>2. <b style="color: #FF007F;">Plant Cells (Cell Plate):</b> Rigid cell walls prevent furrowing. Golgi-derived vesicles assemble along the equator as a <b>Phragmoplast</b>, fusing <b>centrifugally (from center to outside)</b> to form the <b>Cell Plate</b>, which matures into the middle lamella.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Describe the 5 sub-stages of Prophase I of Meiosis with their diagnostic events.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Leptotene:</b> Chromatin condenses into long beaded chromosomes ('Bouquet stage').<br/>2. <b style="color: #FF007F;">Zygotene:</b> Pairing of homologous chromosomes (<b>Synapsis</b>) mediated by the <b>Synaptonemal Complex</b>, forming bivalents.<br/>3. <b style="color: #FF007F;">Pachytene:</b> <b>Crossing Over</b> between non-sister chromatids catalyzed by <b>Recombinase</b>.<br/>4. <b style="color: #FF007F;">Diplotene:</b> Dissolution of synaptonemal complex; homologous chromosomes separate but remain held at X-shaped <b>Chiasmata</b>.<br/>5. <b style="color: #FF007F;">Diakinesis:</b> <b>Terminalization</b> of chiasmata; nuclear envelope and nucleolus disappear.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain the mechanism and evolutionary significance of Crossing Over in Pachytene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Mechanism:</b> Occurs between non-sister chromatids of paired homologous chromosomes in Pachytene. Endonuclease cuts DNA strands; mutual physical exchange of corresponding homologous segments occurs, sealed by DNA ligase. The whole process is catalyzed by the multi-enzyme <b>Recombinase Complex</b>.<br/>2. <b style="color: #FF007F;">Significance:</b> Breaks ancestral parental gene linkages, generating novel combinations of maternal and paternal alleles (<b>Genetic Recombination</b>) that drive biological variations essential for natural selection and evolution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: What are Chiasmata? In which stage do they become visible and when do they terminalize?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Chiasmata (singular: Chiasma) are X-shaped cytological junction points where non-sister chromatids of homologous chromosomes cross over and remain temporarily attached.<br/>1. <b style="color: #FF007F;">Visibility:</b> They first become visible during <b>Diplotene</b> when the synaptonemal complex dissolves and homologous chromosomes pull apart.<br/>2. <b style="color: #FF007F;">Terminalization:</b> During <b>Diakinesis</b>, the chiasmata shift progressively toward the chromosome ends like a zipper opening, culminating in complete detachment at metaphase I.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Differentiate between Mitosis and Meiosis in four major characteristics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Site:</b> Mitosis occurs in somatic cells; Meiosis occurs exclusively in germ cells during gametogenesis.<br/>2. <b style="color: #FF007F;">Divisions:</b> Mitosis involves 1 nuclear division; Meiosis involves 2 successive nuclear divisions (Meiosis I &amp; II).<br/>3. <b style="color: #FF007F;">Chromosome Number:</b> Mitosis is equational (2n &rarr; 2n); Meiosis is reductional (2n &rarr; n).<br/>4. <b style="color: #FF007F;">Daughter Cells:</b> Mitosis yields 2 genetically identical diploid cells; Meiosis yields 4 genetically distinct haploid gametes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Differentiate between Anaphase I of Meiosis and Anaphase of Mitosis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Centromere Splitting:</b> In Anaphase of Mitosis, centromeres split longitudinally, separating sister chromatids; in <b>Anaphase I of Meiosis, centromeres DO NOT split</b>.<br/>2. <b style="color: #FF007F;">Units Separating:</b> In Mitosis, individual sister chromatids move to opposite poles; in Meiosis I, intact <b>homologous chromosomes (dyads with two chromatids)</b> separate and move to opposite poles, halving chromosome number.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the structure and role of Kinetochores in chromosome movement.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kinetochores are disc-shaped multi-protein trilaminar complexes assembled on the outer surface of each centromere. During metaphase, spindle microtubules (kinetochore fibers) attach specifically to kinetochores. During anaphase, molecular motor proteins (dynein and kinesin) at the kinetochore depolymerize tubulin subunits, generating tensile pulling forces that drag the chromosome toward the spindle pole.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: What is Interkinesis? How does it differ from Interphase?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Interkinesis is the brief transitional resting stage that occurs between Meiosis I and Meiosis II.<br/>&bull; <i>Difference from Interphase:</i> Unlike interphase, <b>NO DNA replication takes place during interkinesis</b> (there is no S-phase), ensuring that the haploid chromosome number established during Meiosis I is preserved when entering Meiosis II.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Describe the structure of Peroxisomes and state their biochemical functions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Peroxisomes (Microbodies) are single-membraned spherical organelles containing oxidative enzymes:<br/>1. <b style="color: #FF007F;">Hydrogen Peroxide Metabolism:</b> Contain oxidases that produce toxic H<sub>2</sub>O<sub>2</sub>, and <b>Catalase</b> that instantaneously decomposes it into harmless water and oxygen: 2H<sub>2</sub>O<sub>2</sub> &rarr; 2H<sub>2</sub>O + O<sub>2</sub>.<br/>2. <b style="color: #FF007F;">Metabolic Roles:</b> Perform &beta;-oxidation of very long chain fatty acids in animal cells and participate in the <b>C<sub>2</sub> Photorespiratory cycle</b> in plant leaf cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain why the Cell Wall is considered a dynamic, functional organelle rather than an inert shell.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Although historically viewed as a dead box, the plant cell wall is a dynamic, biochemically responsive structure:<br/>1. Regulates cellular morphogenesis, turgor pressure containment, and prevents osmotic lysis.<br/>2. Contains enzymes (pectinases, cellulases, expansins) that dynamically remodel walls during cell expansion and fruit ripening.<br/>3. Participates in cell-to-cell signaling and generates defense oligosaccharins during fungal pathogen attacks.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Describe the composition and functions of the Cytoskeleton in eukaryotic cells.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The cytoskeleton is a dynamic, microscopic intracellular network of protein filamentous polymers throughout the cytoplasm:<br/>1. <b style="color: #FF007F;">Microtubules:</b> Hollow cylinders (25 nm diameter) of &alpha;- and &beta;-tubulin; form spindle fibers, cilia, flagella, and centrioles.<br/>2. <b style="color: #FF007F;">Microfilaments:</b> Solid helical chains (7 nm diameter) of actin; drive amoeboid movement, cyclosis, and cleavage furrow formation.<br/>3. <b style="color: #FF007F;">Intermediate Filaments:</b> Tough ropelike fibers (10 nm diameter) of keratin and lamin; provide mechanical tensile strength.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain the origin of Organelles according to the Endosymbiotic Theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Formulated by Lynn Margulis, the theory posits that mitochondria and chloroplasts originated as free-living prokaryotic organisms that were engulfed by ancestral anaerobic eukaryotic cells ~1.5 billion years ago:<br/>&bull; <i>Mitochondria:</i> Evolved from engulfed aerobic proteobacteria.<br/>&bull; <i>Chloroplasts:</i> Evolved from engulfed photosynthetic cyanobacteria.<br/>&bull; <i>Evidence:</i> Both possess circular naked DNA, 70S ribosomes, binary fission reproduction, and double membranes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain the structure of a Ribosome and differentiate between 70S and 80S ribosomes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ribosomes are ribonucleoprotein complexes lacking a membrane, composed of rRNA and proteins (discovered by George Palade, 1953):<br/>1. <b style="color: #FF007F;">70S Ribosomes:</b> Present in prokaryotes, mitochondria, and chloroplasts. Composed of <b>50S large subunit</b> (23S + 5S rRNA) and <b>30S small subunit</b> (16S rRNA).<br/>2. <b style="color: #FF007F;">80S Ribosomes:</b> Present in eukaryotic cytoplasm. Composed of <b>60S large subunit</b> (28S + 5.8S + 5S rRNA) and <b>40S small subunit</b> (18S rRNA).<br/>('S' stands for Svedberg unit, a sedimentation coefficient measuring density and size).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain the phenomenon of Cyclosis (Cytoplasmic Streaming) and its mechanism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cyclosis is the active, streaming circular movement of the fluid cytoplasm within living cells (readily observed in <i>Amoeba</i>, <i>Elodea</i>, and <i>Tradescantia</i> stamen hairs). Driven by interactions between sliding <b>Actin microfilaments</b> in the cortex and <b>Myosin</b> motor proteins attached to organelles, hydrolyzing ATP to circulate nutrients, organelles, and metabolites uniformly throughout large cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Explain the term 'SAT-Chromosome' and define its Satellite.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A SAT-chromosome (Satellite chromosome) possesses a non-staining, secondary constriction at a specific locus in addition to the primary centromeric constriction. The small terminal chromosomal segment beyond the secondary constriction is called a <b>Satellite</b>. The secondary constriction functions as a <b>Nucleolar Organizer Region (NOR)</b> containing multiple gene copies coding for 18S and 28S ribosomal RNAs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: What is Polyteny and what are Giant Polytene Chromosomes?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Polyteny is a chromosomal condition where repeated rounds of DNA replication occur without any intervening nuclear or cell division (endoreduplication). The resulting giant <b>Polytene Chromosomes</b> (discovered by Balbiani in salivary glands of <i>Chironomus</i> larvae) contain thousands of parallel DNA strands displaying conspicuous transverse bands and puffed regions called <b>Balbiani Rings</b>, which are sites of intense RNA transcription.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain the concept of Cell Aging and the role of Telomeres.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Telomeres are repetitive, non-coding hexanucleotide DNA sequences (TTAGGG in humans) located at the terminal caps of linear eukaryotic chromosomes that protect chromosome ends from degradation. Because DNA polymerase cannot fully replicate the 3'-terminal ends of linear DNA (the 'end-replication problem'), telomeres shorten progressively with each cell division. When telomeres reach a critical minimum length, cells enter irreversible senescence and undergo apoptosis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain why Mitosis is called 'Equational Division' and Meiosis I 'Reductional Division'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Mitosis as Equational:</b> Centromeres split longitudinally; each daughter cell receives an exact duplicate set of chromosomes identical in number and genetic constitution to the parent cell (2n &rarr; 2n).<br/>2. <b style="color: #FF007F;">Meiosis I as Reductional:</b> Homologous chromosome pairs separate into different daughter cells without centromere splitting, halving the chromosome number from diploid to haploid (2n &rarr; n).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: What is Dictyotene? Where is it found in human physiology?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dictyotene is a prolonged, suspended resting state of the <b>Diplotene stage of Meiosis I</b>. In human female fetuses, primary oocytes enter Meiosis I during embryonic development and arrest in dictyotene around the fifth month of gestation. These oocytes remain suspended in this prolonged diplotene stage for decades until individual oocytes are activated during monthly menstrual cycles from puberty to menopause.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain the difference between Karyokinesis and Cytokinesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Karyokinesis:</b> The process of nuclear division involving the precise segregation of duplicated chromosomes into two daughter nuclei (comprises Prophase, Metaphase, Anaphase, Telophase).<br/>2. <b style="color: #FF007F;">Cytokinesis:</b> The subsequent division of the cytoplasmic contents, organelles, and plasma membrane into two distinct daughter cells (via cleavage furrow in animals or cell plate in plants).
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(194, 24, 91, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Complete Organellar Monographs, Mitotic Spindle Biophysics, Meiotic Recombination &amp; Master Synthesis Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss the Cell Theory in exhaustive historical and biological depth: Classical Formulation, Virchow's Modification, Modern Postulates, and Exceptions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Historical Discovery:</b> Robert Hooke (1665, dead cork cells) &bull; Anton van Leeuwenhoek (1674, living bacteria and protozoa) &bull; Robert Brown (1831, nucleus discovery).<br/><br/><b style="color: #FF007F;">2. Classical Formulation:</b><br/>&bull; Matthias Schleiden (1838, German botanist): Concluded all plant tissues consist of cells.<br/>&bull; Theodor Schwann (1839, British zoologist): Concluded all animal tissues are composed of cells, noting that plant cells are uniquely distinguished by an outer cell wall.<br/><br/><b style="color: #FF007F;">3. Virchow's Modernization:</b> Classical theory could not explain how new cells arise. <b>Rudolf Virchow (1855)</b> proposed: <i>'Omnis cellula-e cellula'</i> (All cells arise from pre-existing cells by division).<br/><br/><b style="color: #FF007F;">4. Modern Postulates:</b> All living organisms are composed of one or more cells; cell is the fundamental unit of life; genetic information is stored in DNA and passed from parent to daughter cells; metabolic energy flow occurs within cells.<br/><br/><b style="color: #FF007F;">5. Exceptions:</b> Viruses (acellular genetic packages without metabolic machinery) &bull; Viroids and Prions &bull; Coenocytic fungi/algae (<i>Rhizopus</i>, <i>Vaucheria</i> multinucleated tubes) &bull; Mature mammalian erythrocytes and sieve tube elements lacking nuclei.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Provide an Exhaustive Structural Comparison of Prokaryotic Cells vs Eukaryotic Cells across 12 Distinct Biochemical and Cytological Parameters.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Nuclear Structure:</b> Prokaryote has naked, un-enveloped nucleoid lacking histones; Eukaryote has true double-enveloped nucleus with linear DNA packed on basic histone octamers.<br/><b style="color: #FF007F;">2. DNA Topology:</b> Circular double-stranded DNA + plasmids in prokaryotes; linear chromosomal DNA in eukaryotes.<br/><b style="color: #FF007F;">3. Ribosomes:</b> 70S (50S + 30S) in prokaryotes; 80S (60S + 40S) in eukaryotic cytosol.<br/><b style="color: #FF007F;">4. Endomembrane System:</b> Completely absent in prokaryotes; elaborate ER, Golgi, lysosomes, and vacuoles in eukaryotes.<br/><b style="color: #FF007F;">5. Respiratory Site:</b> Mesosomal plasma membrane in prokaryotes; inner mitochondrial cristae in eukaryotes.<br/><b style="color: #FF007F;">6. Photosynthetic Site:</b> Chromaffin lamellae in prokaryotes; chloroplast thylakoids in eukaryotes.<br/><b style="color: #FF007F;">7. Cell Wall:</b> Peptidoglycan (murein) in prokaryotes; cellulose in plants, chitin in fungi; absent in animals.<br/><b style="color: #FF007F;">8. Cytoskeleton:</b> Absent in prokaryotes; intricate actin, tubulin, and intermediate filaments in eukaryotes.<br/><b style="color: #FF007F;">9. Flagellar Anatomy:</b> Single flagellin strand rotating 360&deg; in prokaryotes; complex 9+2 axoneme of tubulin with dynein arms in eukaryotes.<br/><b style="color: #FF007F;">10. Cell Division:</b> Binary fission / budding without mitotic spindle in prokaryotes; mitosis and meiosis with spindle in eukaryotes.<br/><b style="color: #FF007F;">11. Transcription &amp; Translation:</b> Coupled simultaneously in cytoplasm in prokaryotes; spatially separated (transcription in nucleus, translation in cytoplasm) in eukaryotes.<br/><b style="color: #FF007F;">12. Introns:</b> Rare or absent in prokaryotes; ubiquitous in eukaryotic genes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Discuss the Fluid Mosaic Model of Singer and Nicolson in exhaustive biophysical depth: Lipids, Proteins, Carbohydrates, and Membrane Permeability.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Historical Perspective:</b> Overthrew Danielli-Davson sandwich model. Proposed by S.J. Singer and G.L. Nicolson (1972) as the definitive membrane paradigm.<br/><br/><b style="color: #FF007F;">2. Lipid Matrix:</b> Amphipathic phosphoglycerides (lecithin, cephalin) self-assemble into a continuous bilayer. Hydrophilic zwitterionic phosphate heads orient outward toward extracellular fluid and cytosol; hydrophobic fatty acid tails orient inward, creating a non-polar core that prevents passive leakage of ions.<br/><br/><b style="color: #FF007F;">3. Fluidity Dynamics:</b> Saturated fatty acids increase rigidity; unsaturated cis-double-bond fatty acids introduce kinks that maintain fluidity. Intercalated <b>Cholesterol</b> functions as a bidirectional temperature buffer.<br/><br/><b style="color: #FF007F;">4. Membrane Proteins:</b><br/>&bull; <i>Integral (Intrinsic) Proteins:</i> Transmembrane helices (e.g., Glycophorin, Band 3) acting as channels, carriers, and receptors.<br/>&bull; <i>Peripheral (Extrinsic) Proteins:</i> Bound to polar heads via ionic bonds (e.g., Spectrin forming the RBC cytoskeleton).<br/><br/><b style="color: #FF007F;">5. Carbohydrates &amp; Glycocalyx:</b> Branched oligosaccharide chains attached to lipids (glycolipids) or proteins (glycoproteins) projecting outward, functioning in cell-cell recognition, tissue histocompatibility, and blood group antigens.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss the Endomembrane System in exhaustive detail: Functional Coordination, Traffic Flow from ER to Golgi, Lysosomes, and Vacuoles.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Definition:</b> Functional coordination of intracellular membranes whose functions are interrelated: Endoplasmic Reticulum &rarr; Golgi Apparatus &rarr; Lysosomes &rarr; Vacuoles.<br/><br/><b style="color: #FF007F;">2. Endoplasmic Reticulum (RER &amp; SER):</b> RER synthesizes nascent polypeptides; signal recognition particles (SRP) guide them into the ER lumen where chaperone proteins fold them. SER synthesizes membrane phospholipids, triglycerides, and steroid hormones.<br/><br/><b style="color: #FF007F;">3. Vesicular Trafficking to Golgi:</b> Transport vesicles coat with COP-II proteins, bud from ER, and fuse with the <b>Cis-Face (Forming Face)</b> of the Golgi apparatus.<br/><br/><b style="color: #FF007F;">4. Golgi Processing:</b> Inside Golgi cisternae, proteins undergo sequential enzymatic modification: trimming of mannoses, addition of complex sugars (<b>N- and O-glycosylation</b>), and phosphorylation (tagging with Mannose-6-phosphate for lysosomal targeting). Finished products are sorted at the <b>Trans-Face (Maturing Face)</b>.<br/><br/><b style="color: #FF007F;">5. Lysosomal &amp; Vacuolar Fates:</b> Hydrolytic enzymes packaged into clathrin-coated vesicles bud off to form <b>Primary Lysosomes</b>; other vesicles fuse with the cell membrane (exocytosis) or tonoplast of central vacuoles.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Discuss Mitochondria in exhaustive structural and evolutionary depth: Ultrastructure, F0-F1 Oxysomes, Matrix Chemistry, and Endosymbiotic Theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Morphology &amp; Outer Membrane:</b> Sausage-shaped (0.2-1.0 &mu;m diameter, 1-4 &mu;m length). Outer membrane possesses large transmembrane channels called <b>Porins</b> allowing passage of molecules &lt;5,000 Da.<br/><br/><b style="color: #FF007F;">2. Inner Membrane &amp; Cristae:</b> Highly specialized, cardiolipin-rich membrane strictly impermeable to ions. Infolded into <b>Cristae</b> that contain the electron transport chain (Complexes I, II, III, IV).<br/><br/><b>3. Oxysomes (F<sub>0</sub>-F<sub>1</sub> ATP Synthase):</b> Stalked elementary particles:<br/>&bull; <i>F<sub>0</sub> Subunit:</i> Hydrophobic proton channel embedded in inner membrane.<br/>&bull; <i>F<sub>1</sub> Subunit:</i> Spherical catalytic headpiece protruding into the matrix; rotates as protons pass through F<sub>0</sub>, synthesizing ATP.<br/><br/><b style="color: #FF007F;">4. Semi-Autonomous Genetics:</b> Matrix contains circular double-stranded naked DNA, 70S ribosomes, and tRNAs, replicating via binary fission.<br/><br/><b style="color: #FF007F;">5. Endosymbiotic Proof:</b> Lynn Margulis theory: Mitochondria arose from engulfed aerobic &alpha;-proteobacteria, corroborated by 70S ribosomes sensitive to chloramphenicol and prokaryotic DNA sequence homology.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss Chloroplast Ultrastructure in exhaustive detail: Envelopes, Stroma, Thylakoid Grana, Photosystems, and Comparison with Mitochondria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Envelope:</b> Double-membraned boundary enclosing a central gel matrix called <b>Stroma</b>.<br/><br/><b style="color: #FF007F;">2. Internal Membranous Architecture:</b><br/>&bull; <i>Thylakoids:</i> Flattened, disc-like sacs arranged like piles of coins called <b>Grana</b> (10-100 grana per chloroplast). Thylakoid membranes contain Photosystems I and II, cytochromes, and ATP synthase.<br/>&bull; <i>Stroma Lamellae (Frets):</i> Unstacked tubules connecting adjacent grana; lack PS II.<br/>&bull; <i>Lumen:</i> Internal space where water photolysis generates high proton concentrations (low pH) for chemiosmosis.<br/><br/><b style="color: #FF007F;">3. Stroma Enzymology:</b> Contains soluble enzymes of the Calvin cycle (<b>RuBisCO</b> constitutes up to 50% of leaf protein), circular DNA, RNA, and 70S ribosomes.<br/><br/><b style="color: #FF007F;">4. Chloroplast vs Mitochondrion:</b> In mitochondria, cristae infold from inner membrane; in chloroplasts, thylakoids form an independent internal membrane system. Mitochondria pump protons into intermembrane space; chloroplasts pump protons into thylakoid lumen.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Discuss the Cytoskeletal Network of Eukaryotic Cells: Microtubules, Microfilaments, and Intermediate Filaments in Structural Physiology.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Microtubules (25 nm diameter):</b> Hollow, rigid cylinders built of 13 protofilaments of &alpha;- and &beta;-tubulin heterodimers. Exhibit dynamic instability (GTP-cap driven growth and shrinkage). Function in spindle fiber chromosome movement, axonal transport (kinesin/dynein motors), and form the structural core of cilia, flagella (9+2), and centrioles (9+0).<br/><br/><b style="color: #FF007F;">2. Microfilaments (7 nm diameter):</b> Two stranded helical polymers of globular <b>G-actin</b> polymerizing into <b>F-actin</b>. Polar (+ and - ends). Mediate cellular crawling locomotion (amoeboid movement), cytoplasmic streaming (cyclosis), and constrict the cleavage furrow during animal cytokinesis.<br/><br/><b style="color: #FF007F;">3. Intermediate Filaments (10 nm diameter):</b> Tough, ropelike, non-polar fibers formed of fibrous proteins (Keratins, Vimentin, Desmin, Neurofilaments, Nuclear Lamins). Resist severe mechanical tensile stress, anchor the nucleus and organelles, and maintain overall mechanical integrity of animal tissues.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Discuss Nuclear Organization and Chromatin Architecture in exhaustive depth: Nuclear Envelope, Pores, Nucleolus, and Histone Packaging.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Nuclear Envelope &amp; Lamina:</b> Two lipid bilayers separated by a 10-50 nm perinuclear space. Inner membrane is lined by the <b>Nuclear Lamina</b> (mesh of lamin intermediate filaments) providing mechanical shape and anchoring chromatin.<br/><br/><b style="color: #FF007F;">2. Nuclear Pore Complex (NPC):</b> Octagonal macromolecular gates (~120 nm diameter) composed of ~30 nucleoporins. Regulate selective active transport of proteins (via importins/exportins recognizing NLS signals) and export of mature mRNA and ribosomal subunits.<br/><br/><b style="color: #FF007F;">3. Nucleolus:</b> Dense subnuclear factory containing fibrillar centers (rDNA transcription), dense fibrillar component (pre-rRNA processing), and granular component (ribosomal subunit assembly with imported ribosomal proteins).<br/><br/><b style="color: #FF007F;">4. Histone Packaging Hierarchy:</b> DNA wraps 1.65 times around histone octamer (H2A, H2B, H3, H4) &rarr; 10-nm nucleosome fiber ('beads-on-a-string') &rarr; H1 histone coils fiber into 30-nm solenoid &rarr; Non-histone chromosomal (NHC) proteins fold loops into 300-nm and 700-nm chromatids of metaphase chromosomes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Discuss the Interphase Stages of the Cell Cycle in exhaustive depth: G1, S, G2, Checkpoints, and Molecular Drivers (Cyclins and CDKs).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Cell Cycle Kinetics:</b> Typical eukaryotic division cycle: Interphase (95% duration) and M-Phase (5% duration).<br/><br/><b style="color: #FF007F;">2. Detailed Interphase Dynamics:</b><br/>&bull; <i>G<sub>1</sub> Phase:</i> Cell growth, RNA synthesis, nucleotide accumulation. Contains the critical <b>Restriction Point (R-point / G<sub>1</sub>/S Checkpoint)</b>: once passed, the cell is committed to complete division.<br/>&bull; <i>S Phase (Synthesis):</i> Exact replication of chromosomal DNA. <b>DNA content doubles from 2C to 4C</b>, while chromosome count remains constant (2n). Centrioles duplicate in cytoplasm; histones are synthesized.<br/>&bull; <i>G<sub>2</sub> Phase:</i> Synthesis of spindle tubulin, accumulation of ATP, replication of mitochondria/chloroplasts. G<sub>2</sub>/M Checkpoint assesses DNA integrity.<br/><br/><b>3. G<sub>0</sub> Phase (Quiescent State):</b> Reversible or permanent exit from cycle into metabolic specialization (neurons, myocytes).<br/><br/><b style="color: #FF007F;">4. Molecular Regulators:</b> Progression driven by catalytic <b>Cyclin-Dependent Kinases (CDKs)</b> activated by binding specific regulatory <b>Cyclin proteins</b> (e.g., MPF / Cyclin B-CDK1 drives entry into mitosis).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Provide an Exhaustive Stage-by-Stage Morphological Survey of Mitosis with Spindle Mechanics and Cytokinesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Prophase:</b> Progressive condensation of chromatin into visible sister chromatids joined at centromeres. Centrosomes move toward opposite poles, nucleating astral microtubules. Golgi, ER, nucleolus, and nuclear envelope disappear.<br/><br/><b style="color: #FF007F;">2. Prometaphase:</b> Spindle microtubules invade nuclear territory; kinetochore fibers capture chromosomes at kinetochores.<br/><br/><b style="color: #FF007F;">3. Metaphase:</b> Congression of chromosomes onto the equatorial plane (<b>Metaphasic Plate</b>). Spindle fibers from opposite poles attach to kinetochores of each sister chromatid. Maximum condensation stage (best for karyotyping).<br/><br/><b style="color: #FF007F;">4. Anaphase:</b> Synchronous cleavage of centromeric cohesin proteins; sister chromatids separate into daughter chromosomes, pulled to opposite poles by microtubule shortening (exhibiting V, L, J, I shapes).<br/><br/><b style="color: #FF007F;">5. Telophase:</b> Daughter chromosomes uncoil back into chromatin; nuclear envelope reassembles; nucleolus, ER, and Golgi reform.<br/><br/><b style="color: #FF007F;">6. Cytokinesis:</b> Animal cleavage furrow (centripetal actin-myosin contraction) vs Plant cell plate (centrifugal phragmoplast vesicle fusion).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Discuss Meiosis I in exhaustive cytological detail: The 5 Sub-stages of Prophase I, Recombinase Catalysis, and Reductional Segregation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Evolutionary Purpose:</b> Reduces chromosome number from diploid (2n) to haploid (n) while generating genetic diversity through reciprocal crossing over.<br/><br/><b style="color: #FF007F;">2. The 5 Sub-stages of Prophase I:</b><br/>&bull; <i>Leptotene:</i> Chromatin condenses into thin beaded threads; telomeres cluster at nuclear envelope ('Bouquet stage').<br/>&bull; <i>Zygotene:</i> Highly specific pairing of homologous chromosomes (<b>Synapsis</b>) anchored by a tripartite protein zipper called the <b>Synaptonemal Complex</b>, forming bivalents (tetrads).<br/>&bull; <i>Pachytene:</i> Stable bivalents undergo physical exchange of non-sister chromatid segments (<b>Crossing Over</b>), catalyzed by multi-enzyme <b>Recombinase</b> (endonuclease + exonuclease + ligase).<br/>&bull; <i>Diplotene:</i> Synaptonemal complex dissolves; paired homologs repel each other, held together only at X-shaped crossover points called <b>Chiasmata</b>.<br/>&bull; <i>Diakinesis:</i> Chiasmata slide toward the chromosome tips (<b>Terminalization</b>); nucleolus and nuclear envelope disintegrate.<br/><br/><b style="color: #FF007F;">3. Metaphase I &amp; Anaphase I:</b> Bivalents align at metaphase plate; spindle fibers pull <b>intact homologous chromosomes</b> (dyads) to opposite poles <b>without centromere division</b>, completing reductional segregation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Provide an Exhaustive Comparative Analysis of Mitosis vs Meiosis I and Meiosis II across 10 Cytogenetic Parameters.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Biological Context:</b> Mitosis in somatic cells (growth/repair); Meiosis I &amp; II in germ cells (gametogenesis).<br/><b style="color: #FF007F;">2. Cycles of Division:</b> 1 division in Mitosis; 2 divisions in Meiosis.<br/><b style="color: #FF007F;">3. Chromosome Count:</b> Equational in Mitosis (2n &rarr; 2n); Reductional in Meiosis I (2n &rarr; n); Equational in Meiosis II (n &rarr; n).<br/><b style="color: #FF007F;">4. Prophase Complexity:</b> Short single stage in Mitosis; prolonged, elaborate 5-stage Prophase I in Meiosis.<br/><b style="color: #FF007F;">5. Synapsis &amp; Synaptonemal Complex:</b> Absent in Mitosis; present in Zygotene of Meiosis I.<br/><b style="color: #FF007F;">6. Crossing Over:</b> Absent in Mitosis; universal in Pachytene of Meiosis I.<br/><b style="color: #FF007F;">7. Metaphase Alignment:</b> Individual chromosomes align on equator in Mitosis and Meiosis II; paired homologous bivalents align in Meiosis I.<br/><b style="color: #FF007F;">8. Centromere Cleavage:</b> Centromeres split at Anaphase of Mitosis and Anaphase II; <b>centromeres DO NOT split at Anaphase I</b>.<br/><b style="color: #FF007F;">9. Daughter Cell Number:</b> 2 daughter cells in Mitosis; 4 daughter cells in Meiosis.<br/><b style="color: #FF007F;">10. Genetic Identity:</b> Mitotic daughters are genetically identical clones; Meiotic gametes are genetically distinct recombinants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Discuss the Structure and Functions of Peroxisomes, Glyoxysomes, and Ribosomes in Eukaryotic Physiology.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Peroxisomes:</b> Single-membraned microbodies containing flavin oxidases and <b>Catalase</b>. Catalyze &beta;-oxidation of very long-chain fatty acids, synthesize plasmalogens (essential myelin lipids), and destroy toxic hydrogen peroxide: 2H<sub>2</sub>O<sub>2</sub> &rarr; 2H<sub>2</sub>O + O<sub>2</sub>.<br/><br/><b style="color: #FF007F;">2. Glyoxysomes:</b> Specialized plant microbodies found in germinating fatty seeds (Castor, Sunflower). Contain enzymes of the <b>Glyoxylate Cycle</b> that convert stored insoluble lipids into soluble carbohydrates (sucrose) before photosynthesis begins.<br/><br/><b style="color: #FF007F;">3. Ribosomes:</b> Dense ribonucleoprotein particles consisting of large and small subunits. Eukaryotic 80S ribosomes translate mRNA into polypeptides via peptidyl transferase ribozyme activity, coordinating tRNA anticodon decoding with growing peptide chains.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the Molecular Mechanisms of Spindle Assembly, Centromere Splitting, and Chromosome Motility in Anaphase.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Spindle Microtubule Types:</b> Astral microtubules (radiate to cell cortex, orienting spindle) &bull; Kinetochore microtubules (attach to kinetochore plates) &bull; Interpolar / Polar microtubules (overlap at equator).<br/><br/><b style="color: #FF007F;">2. Centromere Cleavage:</b> Sister chromatids are glued together by ring-shaped protein complexes called <b>Cohesin</b>. At the metaphase-to-anaphase transition, the Anaphase-Promoting Complex (APC/C) activates the protease <b>Separase</b>, which hydrolyzes cohesin, instantly releasing sister centromeres.<br/><br/><b style="color: #FF007F;">3. Motility Forces:</b><br/>&bull; <i>Anaphase A:</i> Shortening of kinetochore microtubules via minus-end depolymerization and kinetochore motor walking (pulls chromosomes toward poles).<br/>&bull; <i>Anaphase B:</i> Sliding apart of overlapping interpolar microtubules driven by plus-end kinesin motors, pushing spindle poles further apart.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Discuss Cilia and Flagella Motility Mechanics: The Sliding Microtubule Hypothesis and Dynein ATPase Activity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Structural Basis:</b> The 9+2 axoneme contains 9 peripheral doublets, each consisting of complete A-tubule (13 protofilaments) and partial B-tubule (10 protofilaments). Projecting from A-tubule toward the adjacent B-tubule are outer and inner <b>Dynein Arms</b>.<br/><br/><b style="color: #FF007F;">2. Sliding Microtubule Mechanism (Satir):</b><br/>&bull; Dynein is a massive AAA+ motor protein with ATPase activity.<br/>&bull; ATP hydrolysis triggers conformational power strokes where dynein heads walk along the adjacent B-tubule toward the minus end.<br/>&bull; Because doublets are anchored at the basal body and linked by elastic <b>Nexin cross-links</b>, the lateral sliding force is converted into <b>localized mechanical bending</b>.<br/>&bull; Alternating activation of dynein arms on opposite sides of the axoneme produces coordinated, rhythmic wave-like propagation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Discuss the Structure and Functions of the Plant Cell Wall: Primary Wall, Secondary Wall, Middle Lamella, and Plasmodesmata.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Middle Lamella:</b> First layer formed during cytokinesis from cell plate. Rich in amorphous <b>Calcium and Magnesium Pectates</b>; acts as intercellular glue cementing adjacent cells together. Pectin dissolution causes fruit softening during ripening.<br/><br/><b style="color: #FF007F;">2. Primary Cell Wall:</b> Thin, flexible, extensible layer formed inside middle lamella in young growing cells. Composed of cellulose microfibrils embedded in hemicellulose, pectin, and water. Capable of plastic expansion under turgor pressure.<br/><br/><b style="color: #FF007F;">3. Secondary Cell Wall:</b> Thick, rigid, multi-layered (S<sub>1</sub>, S<sub>2</sub>, S<sub>3</sub>) coat deposited inside primary wall after cell cessation of growth. Heavily impregnated with <b>Lignin</b>, suberin, or cutin (e.g., in tracheids, sclerenchyma fibers).<br/><br/><b style="color: #FF007F;">4. Plasmodesmata:</b> Trans-wall tubular cytoplasmic bridges lined by plasma membrane and traversed by a central <b>Desmotubule</b> (derived from ER), allowing symplastic intercellular transport of ions, sugars, and signaling macromolecules.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the Phenomenon of Programmed Cell Death (Apoptosis) and Autophagy in Cellular Turnover.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Apoptosis (Programmed Cell Death):</b> Genetically orchestrated cellular suicide eliminating damaged, infected, or unnecessary cells without triggering inflammatory tissue damage:<br/>&bull; <i>Mechanism:</i> Intrinsic mitochondrial pathway (release of Cytochrome c) activates initiator and executioner <b>Caspase proteases</b>, which cleave nuclear lamins, fragment DNA, and condense chromatin into apoptotic bodies engulfed by macrophages.<br/>&bull; <i>Physiological Roles:</i> Resorption of tadpole tail during frog metamorphosis; sculpting human digits by eliminating interdigital web tissue.<br/><br/><b style="color: #FF007F;">2. Autophagy:</b> Cellular housekeeping pathway (Nobel Prize to Yoshinori Ohsumi, 2016) where double-membraned <b>Autophagosomes</b> engulf damaged organelles and deliver them to lysosomes for degradation, recycling amino acids and lipids during nutrient starvation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the Karyotype and Idiogram: Construction, Clinical Significance, and Chromosomal Aberrations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Definitions:</b><br/>&bull; <i>Karyotype:</i> Complete photographic depiction of the chromosome complement of an individual cell, arranged in homologous pairs according to decreasing size, centromere position, and banding pattern.<br/>&bull; <i>Idiogram:</i> Diagrammatic idealized schematic representation of a standard karyotype.<br/><br/><b style="color: #FF007F;">2. Preparation:</b> Cultured lymphocytes are arrested at metaphase using <b>Colchicine</b> (which disrupts spindle microtubules), treated with hypotonic solution, fixed, and stained with Giemsa (G-banding).<br/><br/><b style="color: #FF007F;">3. Clinical Significance:</b> Detects numerical chromosomal aneuploidies (Down syndrome: Trisomy 21; Turner syndrome: 45,X0; Klinefelter syndrome: 47,XXY) and structural aberrations (Philadelphia chromosome: t(9;22) translocation in chronic myeloid leukemia).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Discuss the Molecular Biology of Cancer in Relation to Dysregulation of the Cell Cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. The Cancer Hallmark:</b> Cancer is characterized by uncontrolled, autonomous mitotic proliferation and evasion of programmed cell death (apoptosis).<br/><br/><b style="color: #FF007F;">2. Molecular Mechanisms:</b><br/>&bull; <i>Proto-Oncogenes to Oncogenes:</i> Gain-of-function mutations in growth signaling genes (e.g., <i>ras</i>, <i>myc</i>, <i>cyclin D</i>) create hyperactive proteins driving constant cell cycle entry.<br/>&bull; <i>Loss of Tumor Suppressor Genes:</i> Loss-of-function mutations in cell cycle checkpoint brakes. The <b>p53 protein ('Guardian of the Genome')</b> normally detects DNA damage and halts the cycle at G<sub>1</sub>/S or induces apoptosis; its mutation occurs in &gt;50% of human cancers.<br/>&bull; <i>Retinoblastoma (Rb) Protein:</i> Phosphorylation of Rb normally releases E2F to drive S-phase; constitutive inactivation causes continuous DNA replication.<br/>&bull; <i>Telomerase Activation:</i> Cancer cells reactivate telomerase, conferring replicative immortality.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an Exhaustive Master Synthesis Matrix correlating Cell Theory, Organelles, Membrane Dynamics, Nuclear Packaging, and Cell Division.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Cell Foundations:</b> Virchow's <i>Omnis cellula-e cellula</i> &bull; Prokaryote (70S, nucleoid, plasmids, mesosomes) vs Eukaryote (80S, true nucleus, compartmentalized organelles).<br/><br/><b style="color: #FF007F;">2. Membranes &amp; Trafficking:</b> Fluid Mosaic Model (phospholipid bilayer, lateral protein mobility, cholesterol) &bull; Endomembrane system: RER/SER &rarr; Golgi packaging &amp; glycosylation &rarr; Lysosomal acid hydrolases &rarr; Vacuolar tonoplast.<br/><br/><b style="color: #FF007F;">3. Bioenergetics:</b> Mitochondria (cristae, F<sub>0</sub>-F<sub>1</sub> oxysomes, Krebs matrix) &bull; Chloroplasts (grana thylakoids, stroma RuBisCO, light &amp; dark reactions).<br/><br/><b style="color: #FF007F;">4. Motility &amp; Nucleus:</b> 9+2 Cilia axoneme (dynein ATPase) vs 9+0 Centriole cartwheel &bull; Nucleus (double envelope, pores, nucleolus, euchromatin/heterochromatin) &bull; Nucleosome (octamer + 146 bp DNA) &bull; 4 chromosome types (metacentric, submetacentric, acrocentric, telocentric).<br/><br/><b style="color: #FF007F;">5. Cell Division Spectrum:</b> Cell cycle (G<sub>1</sub>, S DNA doubling 2C&rarr;4C, G<sub>2</sub>, G<sub>0</sub> arrest) &bull; Mitosis (equational, metaphase plate, anaphase centromere splitting) &bull; Meiosis (reductional, Prophase I: leptotene, zygotene synapsis, pachytene crossing over via recombinase, diplotene chiasmata, diakinesis terminalization).
    </div>
  </div>

</div>
`;

export const c11Zoo3Mcqs = [
  {
    "id": "c11-zoo-3-mcq-1",
    "question": "Who formulated the foundational doctrine 'Omnis cellula-e cellula'?",
    "options": [
      "A):   Robert Hooke",
      "B):   Rudolf Virchow (1855)",
      "C):   Schleiden and Schwann",
      "D):   Robert Brown"
    ],
    "correctAnswer": "b",
    "explanation": "Rudolf Virchow in 1855 modified the Cell Theory by adding the principle that all cells arise from pre-existing cells."
  },
  {
    "id": "c11-zoo-3-mcq-2",
    "question": "Which of the following cellular structures is unique to prokaryotic cells?",
    "options": [
      "A):   Nucleolus",
      "B):   Mesosome",
      "C):   Endoplasmic reticulum",
      "D):   80S Ribosome"
    ],
    "correctAnswer": "b",
    "explanation": "Mesosomes are specialized infoldings of the plasma membrane found exclusively in bacteria."
  },
  {
    "id": "c11-zoo-3-mcq-3",
    "question": "According to the Fluid Mosaic Model, the cell membrane is composed of:",
    "options": [
      "A):   A solid layer of proteins sandwiched between lipids",
      "B):   A quasi-fluid phospholipid bilayer with floating integral and peripheral proteins",
      "C):   A continuous carbohydrate sheet",
      "D):   Pure cellulose microfibrils"
    ],
    "correctAnswer": "b",
    "explanation": "Singer & Nicolson (1972) demonstrated that proteins float like a mosaic in a quasi-fluid lipid bilayer."
  },
  {
    "id": "c11-zoo-3-mcq-4",
    "question": "Which organelle is NOT considered part of the Endomembrane System?",
    "options": [
      "A):   Golgi apparatus",
      "B):   Mitochondrion",
      "C):   Lysosome",
      "D):   Endoplasmic reticulum"
    ],
    "correctAnswer": "b",
    "explanation": "Mitochondria (along with chloroplasts and peroxisomes) are not coordinated with ER-Golgi traffic."
  },
  {
    "id": "c11-zoo-3-mcq-5",
    "question": "Smooth Endoplasmic Reticulum (SER) is the major cellular site for the synthesis of:",
    "options": [
      "A):   Secretory proteins",
      "B):   Lipids, phospholipids, and steroid hormones",
      "C):   Ribosomal RNA",
      "D):   Starch"
    ],
    "correctAnswer": "b",
    "explanation": "SER synthesizes lipids and steroidal hormones, while RER synthesizes proteins."
  },
  {
    "id": "c11-zoo-3-mcq-6",
    "question": "The primary organelle responsible for post-translational packaging and glycosylation of glycoproteins is:",
    "options": [
      "A):   Golgi Apparatus",
      "B):   Lysosome",
      "C):   Peroxisome",
      "D):   Centrosome"
    ],
    "correctAnswer": "a",
    "explanation": "The Golgi apparatus modifies proteins by glycosylation, converting them into glycoproteins and glycolipids."
  },
  {
    "id": "c11-zoo-3-mcq-7",
    "question": "Hydrolytic enzymes present inside lysosomes function optimally at an:",
    "options": [
      "A):   Alkaline pH ~8.5",
      "B):   Acidic pH ~4.5 - 5.0",
      "C):   Neutral pH 7.0",
      "D):   Any pH"
    ],
    "correctAnswer": "b",
    "explanation": "Lysosomal acid hydrolases (lipases, proteases, nucleases) are active exclusively in an acidic microenvironment."
  },
  {
    "id": "c11-zoo-3-mcq-8",
    "question": "The single semi-permeable membrane enclosing the central vacuole in plant cells is called the:",
    "options": [
      "A):   Plasmalemma",
      "B):   Tonoplast",
      "C):   Pericardium",
      "D):   Mesenteron"
    ],
    "correctAnswer": "b",
    "explanation": "Tonoplast is the semi-permeable membrane bounding the plant cell vacuole, maintaining high turgor."
  },
  {
    "id": "c11-zoo-3-mcq-9",
    "question": "Infoldings of the inner mitochondrial membrane that increase surface area for the ETS are called:",
    "options": [
      "A):   Thylakoids",
      "B):   Cristae",
      "C):   Cisternae",
      "D):   Lamellae"
    ],
    "correctAnswer": "b",
    "explanation": "Cristae are inward projections of the inner mitochondrial membrane housing respiratory complexes."
  },
  {
    "id": "c11-zoo-3-mcq-10",
    "question": "Amyloplasts, Elaioplasts, and Aleuroplasts belong to which category of plastids?",
    "options": [
      "A):   Chromoplasts",
      "B):   Leucoplasts",
      "C):   Chloroplasts",
      "D):   Phaeoplasts"
    ],
    "correctAnswer": "b",
    "explanation": "Leucoplasts are non-pigmented nutrient storage plastids: Amyloplasts (starch), Elaioplasts (oil), Aleuroplasts (protein)."
  },
  {
    "id": "c11-zoo-3-mcq-11",
    "question": "The axoneme of eukaryotic Cilia and Flagella exhibits which microtubule pattern?",
    "options": [
      "A):   9 + 0 array of triplets",
      "B):   9 + 2 array (9 peripheral doublets + 2 central singlets)",
      "C):   7 + 2 array",
      "D):   9 + 3 array"
    ],
    "correctAnswer": "b",
    "explanation": "Cilia and flagella display a 9+2 arrangement of doublet microtubules around two central singlets."
  },
  {
    "id": "c11-zoo-3-mcq-12",
    "question": "The internal cartwheel structure of a Centriole exhibits which microtubule pattern?",
    "options": [
      "A):   9 + 2 array",
      "B):   9 + 0 array (9 peripheral triplets + 0 central microtubules)",
      "C):   8 + 1 array",
      "D):   Solid cylinder"
    ],
    "correctAnswer": "b",
    "explanation": "Centrioles possess a 9+0 cartwheel structure consisting of 9 peripheral triplets and a central hub."
  },
  {
    "id": "c11-zoo-3-mcq-13",
    "question": "The nucleolus is the active cellular site for the transcription and assembly of:",
    "options": [
      "A):   Messenger RNA (mRNA)",
      "B):   Ribosomal RNA (rRNA)",
      "C):   Transfer RNA (tRNA)",
      "D):   Glycogen"
    ],
    "correctAnswer": "b",
    "explanation": "The nucleolus is the specialized non-membraned nuclear sub-compartment dedicated to rRNA synthesis."
  },
  {
    "id": "c11-zoo-3-mcq-14",
    "question": "A basic structural unit of chromatin comprising ~146 bp of DNA wound around a histone octamer is a:",
    "options": [
      "A):   Centromere",
      "B):   Nucleosome",
      "C):   Kinetochore",
      "D):   Telomere"
    ],
    "correctAnswer": "b",
    "explanation": "Nucleosomes are the 'beads-on-a-string' repeating units of eukaryotic chromatin packaging."
  },
  {
    "id": "c11-zoo-3-mcq-15",
    "question": "A chromosome having its centromere located exactly at the median midpoint is termed:",
    "options": [
      "A):   Acrocentric",
      "B):   Metacentric (V-shaped at anaphase)",
      "C):   Telocentric",
      "D):   Sub-metacentric"
    ],
    "correctAnswer": "b",
    "explanation": "Metacentric chromosomes have a middle centromere with two equal arms, appearing V-shaped at anaphase."
  },
  {
    "id": "c11-zoo-3-mcq-16",
    "question": "During which phase of the cell cycle does DNA replication take place?",
    "options": [
      "A):   G<sub>1</sub> phase",
      "B):   S Phase (Synthesis phase)",
      "C):   G<sub>2</sub> phase",
      "D):   M phase"
    ],
    "correctAnswer": "b",
    "explanation": "During the S phase, nuclear DNA replication occurs and centrioles duplicate in the cytoplasm."
  },
  {
    "id": "c11-zoo-3-mcq-17",
    "question": "If a cell has 2C DNA and 2n chromosomes in G1, after S-phase its content becomes:",
    "options": [
      "A):   2C DNA and 4n chromosomes",
      "B):   4C DNA and 2n chromosomes",
      "C):   4C DNA and 4n chromosomes",
      "D):   1C DNA and n chromosomes"
    ],
    "correctAnswer": "b",
    "explanation": "In S-phase, DNA content doubles from 2C to 4C, but the chromosome number remains unchanged at 2n."
  },
  {
    "id": "c11-zoo-3-mcq-18",
    "question": "Cells in an adult animal that do not divide (e.g., heart muscle cells) enter a quiescent resting stage called:",
    "options": [
      "A):   G<sub>1</sub> phase",
      "B):   G<sub>0</sub> Phase",
      "C):   S phase",
      "D):   Telophase"
    ],
    "correctAnswer": "b",
    "explanation": "G<sub>0</sub> is the quiescent phase where differentiated cells remain metabolically active but do not divide."
  },
  {
    "id": "c11-zoo-3-mcq-19",
    "question": "The best stage to study chromosome morphology, banding, and count numbers under a light microscope is:",
    "options": [
      "A):   Prophase",
      "B):   Metaphase",
      "C):   Anaphase",
      "D):   Telophase"
    ],
    "correctAnswer": "b",
    "explanation": "At metaphase, chromosomes reach maximum condensation and align cleanly at the equatorial plate."
  },
  {
    "id": "c11-zoo-3-mcq-20",
    "question": "The stage of mitosis where centromeres split and sister chromatids separate toward opposite poles is:",
    "options": [
      "A):   Prophase",
      "B):   Metaphase",
      "C):   Anaphase",
      "D):   Telophase"
    ],
    "correctAnswer": "c",
    "explanation": "At anaphase, centromeres split simultaneously, allowing daughter chromosomes to migrate to poles."
  },
  {
    "id": "c11-zoo-3-mcq-21",
    "question": "Pairing of homologous chromosomes (Synapsis) mediated by the synaptonemal complex occurs in:",
    "options": [
      "A):   Leptotene",
      "B):   Zygotene",
      "C):   Pachytene",
      "D):   Diplotene"
    ],
    "correctAnswer": "b",
    "explanation": "Synapsis occurs during Zygotene of Prophase I, forming paired bivalents."
  },
  {
    "id": "c11-zoo-3-mcq-22",
    "question": "Crossing over, the reciprocal exchange of genetic segments between non-sister chromatids, occurs in:",
    "options": [
      "A):   Zygotene",
      "B):   Pachytene",
      "C):   Diplotene",
      "D):   Diakinesis"
    ],
    "correctAnswer": "b",
    "explanation": "Crossing over occurs during Pachytene, catalyzed by the enzyme recombinase."
  },
  {
    "id": "c11-zoo-3-mcq-23",
    "question": "X-shaped points of crossing over called Chiasmata first become visible during:",
    "options": [
      "A):   Zygotene",
      "B):   Pachytene",
      "C):   Diplotene",
      "D):   Diakinesis"
    ],
    "correctAnswer": "c",
    "explanation": "During Diplotene, dissolution of the synaptonemal complex makes X-shaped chiasmata clearly visible."
  },
  {
    "id": "c11-zoo-3-mcq-24",
    "question": "Terminalization of chiasmata is the hallmark event of which final sub-stage of Prophase I?",
    "options": [
      "A):   Leptotene",
      "B):   Pachytene",
      "C):   Diplotene",
      "D):   Diakinesis"
    ],
    "correctAnswer": "d",
    "explanation": "During Diakinesis, chiasmata slide toward the terminal ends of the chromosomes (terminalization)."
  },
  {
    "id": "c11-zoo-3-mcq-25",
    "question": "Anaphase I of Meiosis differs crucially from Anaphase of Mitosis because:",
    "options": [
      "A):   Chromosomes do not move",
      "B):   Centromeres do not divide, and intact homologous chromosomes separate",
      "C):   DNA replication occurs",
      "D):   Spindle fibers dissolve"
    ],
    "correctAnswer": "b",
    "explanation": "In Anaphase I, centromeres remain intact; homologous chromosome pairs separate to halve the chromosome number."
  }
];
