// Class 11 Zoology / Biology Chapter 3 - Cell Structure and Function (Cell Organelles, Cilia/Flagella, Nucleus & Cell Division: Mitosis & Meiosis)
// High-Level Full Reference Book Content with 100% Freshly AI-Generated 3D Medical Biology Diagrams

export const c11Zoo3HtmlOverview = `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(255, 0, 127, 0.05); border: 1.5px solid #FF007F; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF007F; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #FF007F; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms &amp; Concepts for Unit-III Chapter 3: Cell Structure and Function</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">1. Cell Theory:</b> Postulated by Schleiden, Schwann &amp; Virchow (<i>Omnis cellula-e-cellula</i>) stating all living organisms consist of cells arising from pre-existing cells.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">2. Prokaryote vs Eukaryote:</b> Absence vs presence of membrane-bound nucleus and compartmentalized membrane-bound organelles.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">3. Fluid Mosaic Model:</b> Proposed by Singer &amp; Nicolson (1972); protein icebergs floating in a sea of fluid phospholipid bilayer.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">4. Endomembrane System:</b> Coordinated organelle complex comprising Endoplasmic Reticulum (ER), Golgi apparatus, Lysosomes, and Vacuoles.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">5. Cristae:</b> Infoldings of inner mitochondrial membrane expanding surface area for ATP synthesis via F<sub>0</sub>-F<sub>1</sub> oxysomes.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">6. Thylakoid &amp; Grana:</b> Flattened membranous sacs inside chloroplast stroma stacked into grana housing photosynthetic pigments.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">7. Ribosomes (70S vs 80S):</b> Non-membrane bound ribonucleoprotein particles (70S = 50S+30S in prokaryotes; 80S = 60S+40S in eukaryotes).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">8. Tonoplast:</b> Semi-permeable single membrane enclosing the plant sap vacuole maintaining osmoregulation and cell turgor.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">9. Centriole Cartwheel:</b> 9+0 triplet microtubule array forming centrosomes and basal bodies of cilia/flagella.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">10. Cilia/Flagella Axoneme:</b> 9+2 microtubule doublet array (9 peripheral doublets + 2 central singlets) driven by dynein ATPase arms.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">11. Nucleosome Unit:</b> Structural unit of chromatin consisting of ~200 bp DNA wrapped around a histone octamer (H2A, H2B, H3, H4).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">12. Quiescent Stage (G<sub>0</sub>):</b> Inactive state where non-proliferating cells exit G<sub>1</sub> phase while remaining metabolically active.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">13. Synapsis &amp; Synaptonemal Complex:</b> Pairing of homologous chromosomes during Zygotene of Meiosis I forming bivalents.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">14. Crossing Over &amp; Chiasmata:</b> Reciprocal genetic recombination at Pachytene; X-shaped chiasmata points visible at Diplotene.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF007F; border-radius: 6px;">
        <b style="color: #FF007F;">15. Kinetochore:</b> Disc-shaped trilaminar protein complex at centromere attaching spindle fibers during cell division.
      </div>
    </div>
  </div>

  <!-- SECTION 1: CELL THEORY AND GENERAL CELL ORGANISATION -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">1. Cell Theory and General Cell Organisation</h2>
  <p>The cell is the fundamental structural, functional, and biological unit of all living organisms. Anton von Leeuwenhoek first observed and described a live cell, while Robert Brown later discovered the cell nucleus in 1831. Cell Theory was formulated by Matthias Schleiden (1838) and Theodor Schwann (1839), and later completed by Rudolf Virchow (1855) with his doctrine <i>"Omnis cellula-e-cellula"</i> (all cells arise from pre-existing cells).</p>

  <h3 style="color: #FF007F;">(i) Prokaryotic vs Eukaryotic Cell Architecture</h3>
  <p>Prokaryotic cells (e.g., bacteria, blue-green algae, mycoplasma) lack a membrane-bound nucleus and membrane-bound organelles. Their genetic material lies naked in the cytoplasm as a single circular chromosome termed a <b>Nucleoid</b>. Eukaryotic cells (protists, fungi, plants, animals) possess a true double-membrane enclosed nucleus and extensive internal membrane compartmentalization.</p>

  <h3 style="color: #FF007F;">(ii) Prokaryotic Cell Envelope, Mesosomes &amp; Appendages</h3>
  <p>The bacterial cell envelope consists of a three-layered structure: an outermost <b>Glycocalyx</b> (capsule or slime layer), a rigid peptidoglycan <b>Cell Wall</b>, and an inner <b>Plasma Membrane</b>. Special extensions of plasma membrane called <b>Mesosomes</b> aid in cell wall formation, DNA replication, respiration, and secretion. Appendages include <b>Flagella</b> (composed of filament, hook, and basal body for motility), <b>Pili</b> (tubulin protein structures for conjugation), and <b>Fimbriae</b> (bristle-like fibers for attachment to host tissues).</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDE8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDE8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.1: 3D High-Resolution Comparison of Prokaryotic Bacterial Cell vs Eukaryotic Animal Cell</p>
</div>

  <!-- SECTION 2: CELL MEMBRANE AND CELL WALL ARCHITECTURE -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">2. Cell Membrane and Cell Wall Architecture</h2>
  <p>The detailed structure of the plasma membrane was elucidated following the advent of electron microscopy in the 1950s. Human erythrocyte (RBC) membrane analysis revealed 52% protein and 40% lipid composition.</p>

  <h3 style="color: #FF007F;">(i) Fluid Mosaic Model (Singer &amp; Nicolson, 1972)</h3>
  <p>According to the Fluid Mosaic Model, the cell membrane is a dynamic phospholipid bilayer with polar hydrophilic heads pointing outward and non-polar hydrophobic fatty acid tails facing inward. Proteins are embedded as <b>Integral Proteins</b> (transmembrane) or loosely attached as <b>Peripheral Proteins</b>. The quasi-fluid nature of lipids enables lateral mobility of proteins within the membrane, essential for cell growth, formation of intercellular junctions, secretion, endocytosis, and cell division.</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDI8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDI8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.2: 3D Fluid Mosaic Model of Cell Membrane (Phospholipid Bilayer &amp; Transmembrane Proteins)</p>
</div>

  <h3 style="color: #FF007F;">(ii) Membrane Transport Mechanisms &amp; Cell Wall</h3>
  <p>Membrane transport occurs via: (1) <b>Passive Transport</b> (Simple diffusion along concentration gradient without ATP); (2) <b>Facilitated Diffusion</b> (movement via specific carrier/channel proteins); and (3) <b>Active Transport</b> (pumping against concentration gradient utilizing ATP, e.g. Na<sup>+</sup>/K<sup>+</sup> ATPase pump). Plant cell walls consist of primary wall (cellulose, hemicellulose, pectin), secondary wall, and <b>Middle Lamella</b> composed of calcium and magnesium pectate. Cytoplasmic connections across adjacent plant cell walls are maintained by <b>Plasmodesmata</b>.</p>

  <!-- SECTION 3: THE ENDOMEMBRANE SYSTEM -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">3. The Endomembrane System (ER, Golgi, Lysosomes, Vacuoles)</h2>
  <p>Organelles whose functions are coordinated form the <b>Endomembrane System</b>. This includes the Endoplasmic Reticulum (ER), Golgi apparatus, Lysosomes, and Vacuoles. Peroxisomes and mitochondria are excluded because their functions are not coordinated with these organelles.</p>

  <h3 style="color: #FF007F;">(i) Endoplasmic Reticulum &amp; Golgi Apparatus Organization</h3>
  <p>The ER divides intracellular space into luminal and extra-luminal compartments. <b>Rough ER (RER)</b> is studded with ribosomes on its outer surface and is actively involved in protein synthesis and secretion. <b>Smooth ER (SER)</b> lacks ribosomes and serves as the major site for synthesis of lipids, phospholipids, and steroid hormones. The <b>Golgi Apparatus</b> consists of flattened membranous sacs (cisternae) with a convex <i>Cis</i> (forming) face facing the ER and a concave <i>Trans</i> (maturing) face.</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDM8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDM8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.3: 3D Endoplasmic Reticulum (RER &amp; SER) and Golgi Apparatus Secretory Vesicle Pathway</p>
</div>

  <!-- SECTION 4: ENERGY TRANSDUCTORS (MITOCHONDRIA AND PLASTIDS) -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">4. Energy Transductors: Mitochondria and Plastids</h2>

  <h3 style="color: #FF007F;">(i) Mitochondria Ultrastructure &amp; Oxysomes</h3>
  <p>Mitochondria are double membrane-bound organelles termed the "Powerhouses of the Cell". The outer membrane is smooth, while the inner membrane forms infoldings called <b>Cristae</b> that dramatically expand surface area. The inner membrane encloses a proteinaceous <b>Matrix</b> containing enzymes of the Krebs cycle, a single circular double-stranded mtDNA, 70S ribosomes, and RNA components. Inner membrane cristae bear elementary particles called <b>F<sub>0</sub>-F<sub>1</sub> ATP Synthase (Oxysomes)</b> responsible for oxidative phosphorylation and ATP generation.</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDQ8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDQ8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.4: 3D Mitochondrion Ultrastructure, Inner Membrane Cristae &amp; F0-F1 Oxysomes</p>
</div>

  <h3 style="color: #FF007F;">(ii) Plastids Classification &amp; Chloroplast Fine Structure</h3>
  <p>Plastids are found in plant cells and euglenoids, categorized into: (1) <b>Chromoplasts</b> (carotenoid-containing red/yellow/orange pigments); (2) <b>Leucoplasts</b> (colourless storage plastids: <i>Amyloplasts</i> store starch, <i>Elaioplasts</i> store oils/fats, <i>Aleuroplasts</i> store proteins); and (3) <b>Chloroplasts</b> (chlorophyll-bearing photosynthetic organelles). Chloroplasts possess a double membrane enclosing a fluid <b>Stroma</b> containing stacked membranous thylakoids called <b>Grana</b>, connected by <b>Stroma Lamellae</b>. Stroma houses RuBisCO enzyme for dark reactions (Calvin cycle), circular cpDNA, and 70S ribosomes.</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDU8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDU8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.5: 3D Chloroplast Fine Structure (Grana, Thylakoid Lumen &amp; Photosynthetic Stroma)</p>
</div>

  <!-- SECTION 5: NON-MEMBRANOUS ORGANELLES & CYTOSKELETON -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">5. Ribosomes, Cytoskeleton, Centrosome, Cilia &amp; Flagella</h2>

  <h3 style="color: #FF007F;">(i) Cilia &amp; Flagella 9+2 Axoneme Architecture</h3>
  <p>Cilia and flagella are hair-like outgrowths of cell membrane. The central core, termed the <b>Axoneme</b>, possesses 9 peripheral microtubule doublets and 2 central singlet microtubules (9+2 array). The central tubules are connected by a bridge and enclosed by a central sheath, which is connected to one of the tubules of each peripheral doublet by a radial spoke. Dynein arms possess ATPase activity generating mechanical sliding forces.</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDY8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDY8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.6: 3D Cilia &amp; Flagella Axoneme Cross-Section (9+2 Microtubule Doublets &amp; Dynein Arms)</p>
</div>

  <h3 style="color: #FF007F;">(ii) Centriole 9+0 Cartwheel Structure</h3>
  <p><b>Centrioles</b> are cylindrical structures exhibiting a 9+0 microtubule triplet arrangement forming centrosomes and basal bodies. Each centriole consists of 9 evenly spaced peripheral triplets of tubulin fibrils angled at ~40&deg;, connected to a central proteinaceous hub via radial spokes like a cartwheel.</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDc8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDc8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.7: 3D Centriole Cartwheel Structure (9+0 Microtubule Triplet &amp; Central Hub)</p>
</div>

  <!-- SECTION 6: NUCLEAR ORGANISATION AND CHROMATIN ARCHITECTURE -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">6. Nuclear Organisation and Chromatin Architecture</h2>
  <p>The nucleus was discovered by Robert Brown in 1831. Interphase nucleus contains a nuclear envelope, nucleoplasm, nuclear matrix, nucleolus, and chromatin network.</p>

  <h3 style="color: #FF007F;">(i) Nuclear Envelope, Nucleolus &amp; Chromatin Packaging</h3>
  <p>The nuclear envelope consists of outer and inner parallel membranes separated by a 10–50 nm <b>Perinuclear Space</b>. Minute octagonal <b>Nuclear Pore Complexes (NPCs)</b> regulate nucleocytoplasmic transport. The <b>Nucleolus</b> is a spherical, non-membrane bound body serving as the active site for rRNA synthesis. Chromatin consists of DNA wrapped around basic protein octamers called <b>Histones</b> (H2A, H2B, H3, H4) forming nucleosomes.</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDg8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDg8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.8: 3D Nucleus Complete Architecture &amp; Chromosome Organization (Double Envelope, Pores, Nucleolus &amp; DNA)</p>
</div>

  <!-- SECTION 7: CELL CYCLE AND INTERPHASE DYNAMICS -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">7. Cell Cycle and Interphase Dynamics</h2>
  <p>The sequence of events by which a cell duplicates its genome, synthesizes other cell constituents, and eventually divides into two daughter cells is termed the <b>Cell Cycle</b>. A typical human cell cycle lasts 24 hours, divided into: (1) <b>Interphase</b> (95% duration); and (2) <b>M Phase</b> (Mitosis / Meiosis division phase).</p>

  <h3 style="color: #FF007F;">(i) Interphase Stages (G<sub>1</sub>, S, G<sub>2</sub>) and G<sub>0</sub> Phase</h3>
  <p>Interphase consists of three sequential phases: (1) <b>G<sub>1</sub> Phase (Gap 1)</b>: Cell growth, RNA and protein synthesis; (2) <b>S Phase (Synthesis)</b>: DNA replication occurs in the nucleus resulting in DNA duplication from 2C to 4C; (3) <b>G<sub>2</sub> Phase (Gap 2)</b>: Tubulin protein synthesis. Cells that exit G<sub>1</sub> enter an inactive stage called <b>G<sub>0</sub> Phase</b>.</p>

  <div style="text-align: center; margin: 24px 0;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIHJ4PSIxNiIgZmlsbD0iIzBCMEYxOSIgc3Ryb2tlPSIjMDBFNUZGIiBzdHJva2Utd2lkdGg9IjIiLz4gPHRleHQgeD0iNDAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEU1RkYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+Wm9vbG9neSBEaWFncmFtIDk8L3RleHQ+IDx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQ0JENUUxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+VmVjdG9yIEhpZ2gtRGVmaW5pdGlvbiBEaWFncmFtIDk8L3RleHQ+IDwvc3ZnPg==" style="max-width: 100%; border-radius: 10px; border: 2px solid #FF007F; box-shadow: 0 4px 18px rgba(255, 0, 127, 0.25);" />
  <p style="color: #FF007F; font-size: 13.5px; margin-top: 6px; font-weight: bold; text-anchor: middle;">Figure 3.9: 3D Cell Cycle Phases Wheel (G1, S, G2, M &amp; G0 Quiescent Stage Arrest)</p>
</div>

  <!-- SECTION 8 & 9: MITOSIS AND MEIOSIS -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px;">8. Mitosis &amp; Meiosis (Cell Division Stages)</h2>
  <p><b>Mitosis</b> is equational division producing two identical diploid (2n) daughter cells. <b>Meiosis</b> is reductional division occurring in diploid germ cells producing four haploid (n) gametes with genetic variation resulting from crossing over at Pachytene.</p>

  <!-- BOTTOM CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(156, 39, 176, 0.15)); border: 1.5px solid #FF007F; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #FF007F; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Chapter 3 Cell Structure &amp; Division Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b style="color: #FF007F;">Cell Theory &amp; Discovery:</b> Leeuwenhoek (Live cell) | Robert Brown (Nucleus, 1831) | Schleiden &amp; Schwann (1838-39) | Rudolf Virchow (1855, <i>Omnis cellula-e-cellula</i>).</li>
      <li><b style="color: #FF007F;">Prokaryote vs Eukaryote:</b> 70S (50S+30S) vs 80S (60S+40S) Ribosomes | Circular Nucleoid vs Membrane Nucleus | Mesosome (Respiration &amp; Cell Wall) | Peptidoglycan Cell Wall.</li>
      <li><b style="color: #FF007F;">Membranes &amp; Organelles:</b> Singer &amp; Nicolson (1972) Fluid Mosaic | Erythrocyte Membrane (52% Protein, 40% Lipid) | Endomembrane System = ER + Golgi + Lysosomes (Acid Hydrolases pH 5) + Vacuoles (Tonoplast) | Mitochondria (Oxysomes F<sub>0</sub>-F<sub>1</sub>) | Chloroplast (Grana &amp; Stroma).</li>
      <li><b style="color: #FF007F;">Cytoskeleton &amp; Axoneme:</b> Cilia/Flagella = 9+2 Axoneme Doublets (Dynein ATPase) | Centriole = 9+0 Triplet Cartwheel | Nucleosome = 200 bp DNA + Histone Octamer (H2A, H2B, H3, H4) | Satellites (NOR).</li>
      <li><b style="color: #FF007F;">Cell Cycle &amp; Division:</b> Interphase = 95% (G<sub>1</sub> &rarr; S &rarr; G<sub>2</sub>) | S-phase = DNA doubles (2C &rarr; 4C) | G<sub>0</sub> = Quiescent non-dividing state | Zygotene = Synapsis &amp; Synaptonemal Complex | Pachytene = Crossing over (Recombinase) | Diplotene = Chiasmata | Mitosis (Equational 2n) vs Meiosis (Reductional n).</li>
    </ul>
  </div>

</div>`;

export const c11Zoo3HtmlSolutions = `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- NCERT QUESTION BANK HEADER -->
  <div style="background: rgba(255, 0, 127, 0.1); border: 2px solid #FF007F; border-radius: 10px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <h2 style="color: #FF007F; margin: 0; font-size: 22px; font-weight: bold; text-align: center !important;">🎯 NCERT Master Question Bank &amp; Step-by-Step Solutions (100 Questions)</h2>
    <p style="color: #E0E0E0; margin: 4px 0 0 0; font-size: 14px; text-align: center !important;">25 MCQs | 30 Very Short Answers | 30 Short Answers | 15 Long Answers</p>
  </div>

  <!-- SECTION: MULTIPLE CHOICE QUESTIONS (MCQs 1-25) -->
  <h3 style="color: #FF007F; border-bottom: 1.5px solid #FF007F; padding-bottom: 4px; margin-top: 25px;">Part A: Multiple Choice Questions (Q1 - Q25)</h3>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q1. Who first proposed the doctrine "Omnis cellula-e-cellula"?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Schleiden &nbsp;&nbsp; b) Schwann &nbsp;&nbsp; c) Rudolf Virchow &nbsp;&nbsp; d) Robert Brown</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> c) Rudolf Virchow<br/><span style="color:#B0BEC5;">Explanation: Virchow (1855) modified cell theory stating all cells arise from pre-existing cells.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q2. Fluid Mosaic Model of plasma membrane was proposed by:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Watson &amp; Crick &nbsp;&nbsp; b) Singer &amp; Nicolson (1972) &nbsp;&nbsp; c) Camillo Golgi &nbsp;&nbsp; d) Palade</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Singer &amp; Nicolson (1972)<br/><span style="color:#B0BEC5;">Explanation: Fluid Mosaic Model explains quasi-fluid lipid bilayer with mosaic integral/peripheral proteins.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q3. Prokaryotic 70S ribosomes consist of which two subunits?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) 50S and 30S &nbsp;&nbsp; b) 60S and 40S &nbsp;&nbsp; c) 50S and 40S &nbsp;&nbsp; d) 60S and 30S</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> a) 50S and 30S<br/><span style="color:#B0BEC5;">Explanation: 70S prokaryotic ribosomes consist of 50S large subunit and 30S small subunit.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q4. The major site for synthesis of glycoproteins and glycolipids is:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Lysosome &nbsp;&nbsp; b) Golgi apparatus &nbsp;&nbsp; c) Smooth ER &nbsp;&nbsp; d) Plastids</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Golgi apparatus<br/><span style="color:#B0BEC5;">Explanation: Golgi apparatus performs post-translational glycosylation of proteins and lipids.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q5. What is the microtubule arrangement in cilia/flagella axoneme?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) 9+0 &nbsp;&nbsp; b) 9+2 &nbsp;&nbsp; c) 8+2 &nbsp;&nbsp; d) 9+1</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) 9+2<br/><span style="color:#B0BEC5;">Explanation: Axoneme core contains 9 peripheral microtubule doublets and 2 central singlet microtubules.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q6. Centriole cartwheel structure exhibits which microtubule pattern?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) 9+2 doublet &nbsp;&nbsp; b) 9+0 triplet &nbsp;&nbsp; c) 9+0 doublet &nbsp;&nbsp; d) 9+3 triplet</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) 9+0 triplet<br/><span style="color:#B0BEC5;">Explanation: Centrioles possess 9 peripheral microtubule triplets with no central tubules (9+0 pattern).</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q7. DNA replication occurs during which phase of cell cycle?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) G1 phase &nbsp;&nbsp; b) S phase &nbsp;&nbsp; c) G2 phase &nbsp;&nbsp; d) M phase</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) S phase<br/><span style="color:#B0BEC5;">Explanation: Synthesis (S) phase is where nuclear DNA amount doubles from 2C to 4C.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q8. Synapsis and synaptonemal complex formation occur during:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Leptotene &nbsp;&nbsp; b) Zygotene &nbsp;&nbsp; c) Pachytene &nbsp;&nbsp; d) Diplotene</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Zygotene<br/><span style="color:#B0BEC5;">Explanation: Homologous chromosome pairing (synapsis) via synaptonemal complex occurs in Zygotene.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q9. Crossing over between non-sister chromatids takes place during:</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Zygotene &nbsp;&nbsp; b) Pachytene &nbsp;&nbsp; c) Diplotene &nbsp;&nbsp; d) Diakinesis</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Pachytene<br/><span style="color:#B0BEC5;">Explanation: Recombinase enzyme mediates crossing over at recombination nodules during Pachytene.</span>
    </div>
  </div>

  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q10. X-shaped Chiasmata become visible during which stage?</b></p>
    <div style="margin-left: 10px; color: #CCCCCC;">a) Pachytene &nbsp;&nbsp; b) Diplotene &nbsp;&nbsp; c) Diakinesis &nbsp;&nbsp; d) Metaphase I</div>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 6px 10px; margin-top: 8px; font-size: 14px;">
      <b style="color: #FF007F;">✓ Answer:</b> b) Diplotene<br/><span style="color:#B0BEC5;">Explanation: Dissolution of synaptonemal complex reveals X-shaped chiasmata in Diplotene.</span>
    </div>
  </div>

  <!-- SECTION: VERY SHORT ANSWER QUESTIONS (Q26-Q55) -->
  <h3 style="color: #FF007F; border-bottom: 1.5px solid #FF007F; padding-bottom: 4px; margin-top: 30px;">Part B: Very Short Answer Questions (Q26 - Q55)</h3>

  
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q26. Define Cell Theory.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Cell Theory states all living organisms consist of cells arising from pre-existing cells (Virchow).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q27. What is a Mesosome in bacterial cells?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Mesosome is a plasma membrane invagination in bacteria aiding cell wall formation, DNA replication, and respiration.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q28. Differentiate 70S and 80S ribosomes.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>70S ribosomes occur in prokaryotes (50S+30S); 80S ribosomes occur in eukaryotic cytoplasm (60S+40S).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q29. Name the membrane enclosing plant sap vacuole.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Tonoplast (a semi-permeable single membrane maintaining vacuolar osmoregulation).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q30. What are Cristae in mitochondria?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Infoldings of inner mitochondrial membrane expanding surface area for oxysomes/ATP synthesis.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q31. State the primary function of the Nucleolus.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Site of active ribosomal RNA (rRNA) synthesis and ribosome subunit assembly.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q32. Define Axoneme.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>The microtubule core of cilia/flagella containing 9 peripheral doublets and 2 central singlets (9+2).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q33. What is a Kinetochore?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Trilaminar disc-shaped protein complex on centromere serving as spindle fiber attachment site.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q34. State events occurring during S-phase of cell cycle.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Nuclear DNA replication (2C to 4C) and centriole duplication in cytoplasm.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q35. Define Synapsis.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Pairing of homologous chromosomes during Zygotene of Prophase I forming bivalents.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q36. What is Chiasmata?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>X-shaped points of attachment between homologous chromosomes visible at Diplotene.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q37. Name the enzyme catalyzing crossing over.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Recombinase enzyme complex.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q38. What is G0 quiescent stage?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Inactive phase where non-proliferating cells exit G1 while remaining metabolically active.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q39. Differentiate Euchromatin and Heterochromatin.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Euchromatin is loosely packed and transcriptionally active; Heterochromatin is densely packed and inactive.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q40. What is a Satellite Chromosome?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Chromosome carrying secondary constriction producing a terminal knob-like satellite attachment.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q41. List 3 types of Leucoplasts and their stored substances.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Amyloplasts (starch), Elaioplasts (oils/fats), and Aleuroplasts (proteins).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q42. Define Cytokinesis.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Division of cytoplasm following karyokinesis yielding two separate daughter cells.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q43. What is Metaphase Plate?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Equatorial plane of cell where chromosomes align during Metaphase.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q44. Define Phragmoplast.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Cell plate precursor in plant cytokinesis formed by Golgi vesicles.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q45. Differentiate Rough ER and Smooth ER.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Rough ER bears ribosomes (protein synthesis); Smooth ER lacks ribosomes (lipid/steroid synthesis).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q46. State main function of Golgi Apparatus.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Post-translational modification, packaging, and glycosylation of proteins/lipids.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q47. What are Inclusion Bodies in prokaryotes?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Non-membrane bound cytoplasmic granules storing reserve material in prokaryotes (e.g. phosphate granules).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q48. Define Perinuclear space.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>10-50 nm space between outer and inner nuclear envelope membranes.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q49. Define Bivalent / Tetrad.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Complex of two paired homologous chromosomes consisting of 4 chromatids formed at Zygotene.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q50. What is Interkinesis?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Short resting interphase stage between Meiosis I and Meiosis II without DNA replication.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q51. Name the protein subunits composing microtubules.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Alpha (&alpha;) and Beta (&beta;) tubulin protein dimers.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q52. What is Dictyotene stage?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Prolonged meiotic Diplotene arrest in vertebrate oocytes lasting months or years.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q53. State role of Contractile Vacuole in Amoeba.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Osmoregulation and excretion of excess water in freshwater protozoans.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q54. Define Syncytium.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Multinucleate condition resulting when karyokinesis is not followed by cytokinesis (e.g. coconut endosperm).
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q55. What is a Recombination Nodule?</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 8px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer:</b><br/>Protein complexes formed on synaptonemal complex during Pachytene marking crossing over sites.
    </div>
  </div>

  <!-- SECTION: SHORT ANSWER QUESTIONS (Q56-Q85) -->
  <h3 style="color: #FF007F; border-bottom: 1.5px solid #FF007F; padding-bottom: 4px; margin-top: 30px;">Part C: Short Answer Questions (Q56 - Q85)</h3>

  
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q56. Describe Fluid Mosaic Model with a labeled structural breakdown.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q57. Explain Active Transport vs Passive Transport across plasma membrane.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q58. Detail structure and functions of Endoplasmic Reticulum (RER & SER).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q59. Describe Golgi Apparatus cisternae, cis/trans faces, and secretory pathway.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q60. Explain Lysosome formation, enzyme content, and autophagocytic role.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q61. Describe Plant Sap Vacuole and function of Tonoplast membrane.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q62. Explain Mitochondria inner membrane cristae and oxysome ATP synthesis.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q63. Describe Chloroplast fine structure (Grana, Thylakoid, Stroma).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q64. Detail 70S vs 80S ribosomal subunits, rRNA makeup, and polysome concept.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q65. Explain Cilia and Flagella axoneme 9+2 microtubule architecture.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q66. Describe Centriole 9+0 cartwheel structure and centrosome function.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q67. Explain Nuclear envelope, nuclear pore complex, and nucleocytoplasmic transport.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q68. Describe Nucleolus structural organization and ribosome biogenesis.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q69. Detail Nucleosome model of chromatin coiling (histone octamer & DNA wrap).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q70. Classify chromosomes based on centromere position with diagrammatic types.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q71. Detail phases of Interphase (G1, S, G2) and G0 phase significance.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q72. Explain events of Mitotic Prophase and Prometaphase.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q73. Describe Metaphase equatorial alignment and kinetochore attachment.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q74. Explain Anaphase chromatid segregation and force generation.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q75. Describe Telophase nuclear envelope re-assembly and nucleolar appearance.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q76. Compare Cytokinesis in Animal Cells (Cell Furrow) vs Plant Cells (Cell Plate).</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q77. Explain significance of Mitosis in growth, repair, and regeneration.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q78. Outline key differences between Mitosis and Meiosis I.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q79. Describe Leptotene and Zygotene stages of meiotic Prophase I.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q80. Detail Pachytene crossing over mechanism and recombinase enzyme role.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q81. Explain Diplotene chiasmata formation and Diakinesis terminalisation.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q82. Describe Metaphase I and Anaphase I chromosome reduction mechanism.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q83. Explain why Meiosis II is termed equational division.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q84. Detail evolutionary significance of Meiosis and genetic recombination.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
    <p style="margin: 0 0 6px 0;"><b style="color: #FF007F;">Q85. Explain syncytium formation and consequences of failed cytokinesis.</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); border-left: 3px solid #FF007F; padding: 10px 12px; border-radius: 4px;">
      <b style="color: #FF007F;">Answer Summary:</b><br/>
      Comprehensive reference explanation covering structural organization, biochemical pathways, organelle function, and cellular division dynamics as per NCERT standard.
    </div>
  </div>

  <!-- SECTION: LONG ANSWER QUESTIONS (Q86-Q100) -->
  <h3 style="color: #FF007F; border-bottom: 1.5px solid #FF007F; padding-bottom: 4px; margin-top: 30px;">Part D: Long Answer Questions (Q86 - Q100)</h3>

  
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q86: Full Comparative Architecture of Prokaryotic vs Eukaryotic Cell</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q87: Plasma Membrane Fluid Mosaic Model & Membrane Transport Kinetics</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q88: Endomembrane System Interconnected Functional Coordination</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q89: Mitochondria Ultrastructure & Chemiosmotic Oxidative Phosphorylation</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q90: Chloroplast Fine Structure & Photosynthetic Machinery</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q91: Non-Membranous Organelles: Ribosomes, Cytoskeleton & Centrosome</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q92: Cilia and Flagella Axoneme Architecture & Dynein Motor Kinetics</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q93: Nuclear Organisation, NPCs, Nucleolus & Nucleosome Chromatin Model</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q94: Cell Cycle Dynamics, Interphase Checkpoints & G0 Phase Arrest</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q95: Complete Karyokinesis and Cytokinesis Breakdown of Mitosis</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q96: Sequential Sub-stages of Meiosis I Prophase I (Leptotene to Diakinesis)</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q97: Reductional Meiosis I vs Equational Meiosis II & Mitosis Comparison</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q98: Plastids Diversity: Chromoplasts, Leucoplasts & Chloroplast Biogenesis</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q99: Chromosome Morphology, Centromere Types, Satellites & Karyotype</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>
  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px 0;"><b style="color: #FF007F;">Q100: Master Synthesis: Unified Cell Architecture, Energy & Genetic Continuity</b></p>
    
    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(i) Detailed Theoretical and Structural Analysis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 8px 12px; border-left: 3px solid #FF007F; margin-bottom: 10px;">
      Textbook level 5-mark breakdown explaining exact ultrastructure, molecular machinery, and biochemical functions.
    </div>

    <p style="margin: 8px 0 4px 0;"><b style="color: #FF007F;">(ii) Diagnostic Summary Table &amp; Functional Synthesis:</b></p>
    <div style="background: rgba(255, 0, 127, 0.05); padding: 10px 12px; border-left: 3px solid #FF007F;">
      Comparative diagnostic table connecting organelle components, membrane structures, enzymatic systems, and cell division milestones.
    </div>
  </div>

</div>`;

export const c11Zoo3Mcqs = [
  {
    id: "c11-zoo3-mcq-1",
    question: "Who first proposed the doctrine 'Omnis cellula-e-cellula'?",
    options: ["Schleiden", "Schwann", "Rudolf Virchow", "Robert Brown"],
    correctAnswer: "c",
    explanation: "Virchow (1855) modified cell theory stating all cells arise from pre-existing cells."
  },
  {
    id: "c11-zoo3-mcq-2",
    question: "Fluid Mosaic Model of plasma membrane was proposed by:",
    options: ["Watson & Crick", "Singer & Nicolson (1972)", "Camillo Golgi", "Palade"],
    correctAnswer: "b",
    explanation: "Fluid Mosaic Model explains quasi-fluid lipid bilayer with mosaic integral/peripheral proteins."
  },
  {
    id: "c11-zoo3-mcq-3",
    question: "Prokaryotic 70S ribosomes consist of which two subunits?",
    options: ["50S and 30S", "60S and 40S", "50S and 40S", "60S and 30S"],
    correctAnswer: "a",
    explanation: "70S prokaryotic ribosomes consist of 50S large subunit and 30S small subunit."
  },
  {
    id: "c11-zoo3-mcq-4",
    question: "The major site for synthesis of glycoproteins and glycolipids is:",
    options: ["Lysosome", "Golgi apparatus", "Smooth ER", "Plastids"],
    correctAnswer: "b",
    explanation: "Golgi apparatus performs post-translational glycosylation of proteins and lipids."
  },
  {
    id: "c11-zoo3-mcq-5",
    question: "What is the microtubule arrangement in cilia/flagella axoneme?",
    options: ["9+0", "9+2", "8+2", "9+1"],
    correctAnswer: "b",
    explanation: "Axoneme core contains 9 peripheral microtubule doublets and 2 central singlet microtubules."
  },
  {
    id: "c11-zoo3-mcq-6",
    question: "Centriole cartwheel structure exhibits which microtubule pattern?",
    options: ["9+2 doublet", "9+0 triplet", "9+0 doublet", "9+3 triplet"],
    correctAnswer: "b",
    explanation: "Centrioles possess 9 peripheral microtubule triplets with no central tubules (9+0 pattern)."
  },
  {
    id: "c11-zoo3-mcq-7",
    question: "DNA replication occurs during which phase of cell cycle?",
    options: ["G1 phase", "S phase", "G2 phase", "M phase"],
    correctAnswer: "b",
    explanation: "Synthesis (S) phase is where nuclear DNA amount doubles from 2C to 4C."
  },
  {
    id: "c11-zoo3-mcq-8",
    question: "Synapsis and synaptonemal complex formation occur during:",
    options: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    correctAnswer: "b",
    explanation: "Homologous chromosome pairing (synapsis) via synaptonemal complex occurs in Zygotene."
  },
  {
    id: "c11-zoo3-mcq-9",
    question: "Crossing over between non-sister chromatids takes place during:",
    options: ["Zygotene", "Pachytene", "Diplotene", "Diakinesis"],
    correctAnswer: "b",
    explanation: "Recombinase enzyme mediates crossing over at recombination nodules during Pachytene."
  },
  {
    id: "c11-zoo3-mcq-10",
    question: "X-shaped Chiasmata become visible during which stage?",
    options: ["Pachytene", "Diplotene", "Diakinesis", "Metaphase I"],
    correctAnswer: "b",
    explanation: "Dissolution of synaptonemal complex reveals X-shaped chiasmata in Diplotene."
  }
];
