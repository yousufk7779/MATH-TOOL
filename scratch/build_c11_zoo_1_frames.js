const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../client/data/content/c11-zoo-1.ts');

const themeColor = "#FF3D00"; // Deep Bright Orange / Coral Red for Chapter 1

function createFrame(frameNum, title, targets) {
  return `<div style="background: rgba(255, 61, 0, 0.06); border: 2px solid ${themeColor}; border-radius: 12px; padding: 22px; margin: 24px 0; text-align: center; box-shadow: 0 4px 18px rgba(255, 61, 0, 0.2);">
  <div style="color: ${themeColor}; font-size: 28px; margin-bottom: 6px;">🖼️</div>
  <div style="color: ${themeColor}; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">[ 3D DIAGRAM FRAME #${frameNum}: ${title} ]</div>
  <p style="color: #E0E0E0; font-size: 13.5px; margin: 6px 0 0 0;"><b style="color: ${themeColor};">Visual Targets:</b> ${targets}</p>
</div>`;
}

console.log("Updating c11-zoo-1.ts with theme-colored blank image frames...");

const overviewHTML = `<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS -->
  <div style="background: rgba(255, 61, 0, 0.05); border: 1.5px solid #FF3D00; border-radius: 12px; padding: 16px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF3D00; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center !important;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p class="text-center" style="color: #FF3D00; margin: 0 0 16px 0; font-size: 14.5px; text-align: center !important;">Key Fundamental Terms &amp; Concepts for Unit-I Chapter 1: Diversity in Living World &amp; Animal Kingdom</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">1. Animal Kingdom:</b> Multicellular, eukaryotic, heterotrophic organisms lacking cell walls and chlorophyll.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">2. Radial Symmetry:</b> Body symmetry where any plane passing through central axis divides body into two equal halves (Cnidaria, Ctenophora).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">3. Bilateral Symmetry:</b> Body symmetry where body can be divided into identical left and right halves in only one plane (Platyhelminthes to Chordata).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">4. Diploblastic &amp; Triploblastic:</b> Embryos with 2 germ layers (Ectoderm + Endoderm) or 3 germ layers (Ectoderm + Mesoderm + Endoderm).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">5. Coelom:</b> Mesoderm-lined fluid-filled body cavity located between body wall and alimentary canal.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">6. Pseudocoelom:</b> Body cavity not lined by mesoderm; mesoderm exists as scattered pouches (Aschelminthes).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">7. Notochord:</b> Mesodermally derived flexible supporting rod located on dorsal side during embryonic development.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">8. Non-Chordates:</b> Animals lacking a notochord throughout life cycle (Porifera to Hemichordata).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">9. Chordates:</b> Animals possessing notochord, dorsal hollow nerve cord, and paired pharyngeal gill slits.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">10. In-Situ Conservation:</b> Protection and management of endangered species within natural habitats (National Parks, Sanctuaries, Biosphere Reserves).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">11. Dachigam National Park:</b> Famous national park in Srinagar (J&amp;K) providing exclusive refuge to critically endangered Hangul (Kashmir Stag).
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">12. Hemis High Altitude NP:</b> India's largest national park located in Ladakh, famous as Snow Leopard Capital of the World.
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 8px 12px; border-left: 3px solid #FF3D00; border-radius: 6px;">
        <b style="color: #FF3D00;">13. Biosphere Reserve Zones:</b> Core Zone (strictly protected), Buffer Zone (research/education), Transition Zone (sustainable human activity).
      </div>
    </div>
  </div>

  <!-- SECTION 1: FUNDAMENTAL BODY PLAN & SYMMETRY -->
  <h2 style="color: #FF3D00; margin-top: 10px; font-size: 20px; font-weight: bold;">1. Fundamental Body Plan &amp; Basis of Classification</h2>
  <p>The Animal Kingdom (Metazoa) encompasses immense structural and functional diversity comprising over 1.5 million described species. Animals are classified based on fundamental body architectural parameters including <b>Levels of Organization</b>, <b>Body Symmetry</b>, <b>Embryonic Germ Layers</b>, <b>Coelom (Body Cavity)</b>, <b>Segmentation (Metamerism)</b>, and <b>Notochord Presence</b>.</p>

  <h3 style="color: #FF3D00; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Levels of Organization, Body Symmetry, Germ Layers &amp; Coelom Types</h3>
  <p>• <b style="color: #FF3D00;">Levels of Organization:</b> Cellular Level (Porifera), Tissue Level (Cnidaria, Ctenophora), Organ Level (Platyhelminthes), Organ-System Level (Aschelminthes to Chordata).<br>
  • <b style="color: #FF3D00;">Body Symmetry:</b> Asymmetrical (Sponges), Radial Symmetry (Cnidaria, Ctenophora, Adult Echinoderms), Bilateral Symmetry (Platyhelminthes to Chordata).<br>
  • <b style="color: #FF3D00;">Embryonic Germ Layers:</b> Diploblastic (Ectoderm + Endoderm with Mesoglea) vs Triploblastic (Ectoderm + Mesoderm + Endoderm).<br>
  • <b style="color: #FF3D00;">Coelom Types:</b> Acoelomate (Platyhelminthes), Pseudocoelomate (Aschelminthes), Eucoelomate / True Coelomate (Annelida to Chordata).</p>

  ${createFrame(1, "FUNDAMENTAL BODY PLAN & SYMMETRY", "Radial vs Bilateral Symmetry • Diploblastic vs Triploblastic Germ Layers • Coelom Types (Acoelomate, Pseudocoelomate, Eucoelomate)")}

  <!-- SECTION 2: CHORDATES VS NON-CHORDATES -->
  <h2 style="color: #FF3D00; margin-top: 30px; font-size: 20px; font-weight: bold;">2. Phylum Chordata Architecture &amp; Non-Chordate Comparison</h2>
  <p>Animals are broadly divided into Non-Chordates (Porifera to Hemichordata lacking a notochord) and Chordates (animals possessing a notochord, dorsal hollow nerve cord, and paired pharyngeal gill slits).</p>

  <h3 style="color: #FF3D00; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Basic Chordate Body Plan &amp; Diagnostic Differences</h3>
  <p>The primary hallmarks of Phylum Chordata include a longitudinal supporting <b>Notochord</b> located dorsal to the digestive tract, a single, dorsal, hollow <b>Nerve Cord</b>, paired <b>Pharyngeal Gill Slits</b> for respiration, and a muscular <b>Post-Anal Tail</b>. In Vertebrates, the embryonic notochord is replaced by a cartilaginous or bony <b>Vertebral Column</b>.</p>

  ${createFrame(2, "BASIC CHORDATE BODY PLAN", "Labeled 3D diagram of Notochord, Dorsal Hollow Nerve Cord, Pharyngeal Gill Slits &amp; Post-Anal Tail vs Non-Chordate Plan")}

  <!-- SECTION 3: REPRESENTATIVE ORGANISMS -->
  <h2 style="color: #FF3D00; margin-top: 30px; font-size: 20px; font-weight: bold;">3. Representative Organisms &amp; Phyla Characteristics</h2>
  <p>Each animal phylum and vertebrate class displays unique anatomical adaptations and morphological diagnostic features.</p>

  <h3 style="color: #FF3D00; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Key Phyla Representatives &amp; Morphological Identification</h3>
  <p>• <b>Porifera:</b> <i>Sycon</i> / <i>Spongilla</i> (Ostia, Spongocoel, Osculum Canal System).<br>
  • <b>Cnidaria:</b> <i>Hydra</i> / <i>Aurelia</i> (Cnidoblasts, Polyp &amp; Medusa dimorphism).<br>
  • <b>Platyhelminthes &amp; Aschelminthes:</b> <i>Taenia</i> (Tapeworm hooks/suckers) &amp; <i>Ascaris</i> (Male vs Female sexual dimorphism).<br>
  • <b>Annelida &amp; Arthropoda:</b> <i>Earthworm</i> / <i>Nereis</i> (Metameric segments) &amp; <i>Prawn</i> / <i>Butterfly</i> (Chitinous exoskeleton &amp; jointed appendages).<br>
  • <b>Mollusca &amp; Echinodermata:</b> <i>Pila</i> / <i>Starfish</i> (Calcareous shell &amp; Water vascular system).<br>
  • <b>Osteichthyes vs Chondrichthyes:</b> Bony fish (operculum, terminal mouth) vs Cartilaginous fish (placoid scales, ventral mouth).</p>

  ${createFrame(3, "REPRESENTATIVE ORGANISMS FLASHCARDS", "Sycon/Spongilla (Canal System) • Hydra/Aurelia (Polyp/Medusa) • Taenia &amp; Ascaris • Earthworm &amp; Prawn • Starfish &amp; Bony vs Cartilaginous Fish")}

  <!-- SECTION 4: CONSERVATION & BIOSPHERE RESERVE ZONES -->
  <h2 style="color: #FF3D00; margin-top: 30px; font-size: 20px; font-weight: bold;">4. Biodiversity Conservation &amp; Biosphere Reserve Zoning</h2>
  <p>In-situ conservation protects endangered flora and fauna within their natural ecosystems through National Parks, Wildlife Sanctuaries, and UNESCO Biosphere Reserves.</p>

  <h3 style="color: #FF3D00; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Structure of a Biosphere Reserve (Concentric Zoning)</h3>
  <p>A Biosphere Reserve is divided into 3 functional concentric circular zones: (1) <b>Core Zone</b> (legally protected undisturbed ecosystem for wildlife); (2) <b>Buffer Zone</b> (surrounds core, open for research, environmental education &amp; tourism); and (3) <b>Transition / Manipulation Zone</b> (outermost area where local communities engage in sustainable agriculture &amp; forestry).</p>

  ${createFrame(4, "STRUCTURE OF A BIOSPHERE RESERVE", "3 Concentric Circular Zones: Core Zone (Strict Protection), Buffer Zone (Research/Tourism) &amp; Transition/Manipulation Zone")}

  <!-- SECTION 5: CLASSIFICATION FLOWCHARTS -->
  <h2 style="color: #FF3D00; margin-top: 30px; font-size: 20px; font-weight: bold;">5. Animal Kingdom &amp; Chordata Classification Hierarchy Flowcharts</h2>
  <p>Systematic classification tree summarizing animal diversity from cellular sponges to mammals.</p>

  <h3 style="color: #FF3D00; margin-top: 20px; font-size: 18px; font-weight: bold;">(i) Classification Tree &amp; Taxonomic Hierarchy</h3>
  <p>• <b>Animal Kingdom Tree:</b> Multicellular ➔ Cellular vs Tissue/Organ ➔ Radial vs Bilateral ➔ Acoelomate, Pseudocoelomate, Eucoelomate ➔ 11 Phyla.<br>
  • <b>Chordata Sub-Tree:</b> Urochordata, Cephalochordata, Vertebrata ➔ Agnatha (Cyclostomata) vs Gnathostomata (Pisces: Chondrichthyes/Osteichthyes &amp; Tetrapoda: Amphibia, Reptilia, Aves, Mammalia).</p>

  ${createFrame(5, "ANIMAL KINGDOM &amp; CHORDATA CLASSIFICATION FLOWCHARTS", "Animal Kingdom Classification Tree (Levels, Symmetry, Coelom, Phyla) &amp; Chordata Sub-Tree (Vertebrata Classes)")}

  <!-- BOTTOM CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(255, 61, 0, 0.15), rgba(255, 152, 0, 0.15)); border: 1.5px solid #FF3D00; border-radius: 10px; padding: 16px; margin-top: 25px;">
    <h3 style="color: #FF3D00; font-weight: bold; margin: 0 0 8px 0; font-size: 18px; text-align: center;">⚡ Master Chapter 1 Diversity in Living World &amp; Animal Kingdom Cheat Sheet</h3>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.8; font-size: 14.5px;">
      <li><b style="color: #FF3D00;">Symmetry:</b> Asymmetrical (Porifera) | Radial (Cnidaria, Ctenophora, Adult Echinoderms) | Bilateral (Platyhelminthes to Chordata).</li>
      <li><b style="color: #FF3D00;">Germ Layers:</b> Diploblastic (Cnidaria, Ctenophora with Mesoglea) | Triploblastic (Platyhelminthes to Chordata).</li>
      <li><b style="color: #FF3D00;">Coelom:</b> Acoelomate (Platyhelminthes) | Pseudocoelomate (Aschelminthes) | Eucoelomate (Annelida to Chordata).</li>
      <li><b style="color: #FF3D00;">Key Features:</b> Choanocytes (Porifera) | Cnidocytes (Cnidaria) | Flame Cells (Platyhelminthes) | Nephridia (Annelida) | Malpighian Tubules (Arthropoda) | Radula (Mollusca) | Water Vascular System (Echinodermata).</li>
      <li><b style="color: #FF3D00;">Chordates:</b> Notochord + Dorsal Nerve Cord + Pharyngeal Gill Slits | 7 Vertebrate Classes: Cyclostomata, Chondrichthyes, Osteichthyes, Amphibia, Reptilia, Aves, Mammalia.</li>
      <li><b style="color: #FF3D00;">Biosphere Reserves:</b> Core Zone (Strict Protection) | Buffer Zone (Research) | Transition Zone (Sustainable Use).</li>
    </ul>
  </div>

</div>`;

// Keep solutions intact or format as needed
let content = fs.readFileSync(targetFile, 'utf8');

// Replace c11Zoo1HtmlOverview string
content = content.replace(/export const c11Zoo1HtmlOverview = `[\s\S]*?`;/, `export const c11Zoo1HtmlOverview = \`${overviewHTML}\`;`);

fs.writeFileSync(targetFile, content, 'utf8');
console.log("Successfully updated c11-zoo-1.ts with theme-colored blank image frames!");
