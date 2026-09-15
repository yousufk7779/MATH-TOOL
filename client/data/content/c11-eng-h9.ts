// Class 11 English (Hornbill) - Chapter 9: The Adventure by Jayant Narlikar
// Standardized for JKBOSE & CBSE / NCERT Curriculum
// Gold Standard 3-Tab Architecture & Deep Sci-Fi Reference Guide
// Theme Color: #3F51B5 (Indigo / Science Fiction & Parallel Realities Theme)

const themeColor = "#3F51B5";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11EngH9HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & SCI-FI SNAPSHOT CARD -->
  <div style="background: rgba(63, 81, 181, 0.07); border: 1.5px solid #3F51B5; border-radius: 12px; padding: 18px; margin-bottom: 25px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <h2 class="text-center" style="color: #3F51B5; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">📖 Quick Glossary &amp; Essential Conceptual Snapshot</h2>
    <p class="text-center" style="color: #9FA8DA; margin: 0 0 16px 0; font-size: 14.5px;">Hornbill Prose &bull; Chapter 9: The Adventure &bull; Prof. Jayant Narlikar</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #3F51B5; border-radius: 6px;">
        <b style="color: #3F51B5; font-size: 16px; display: block; margin-bottom: 4px;">1. Form &amp; Genre:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Science Fiction &amp; Alternate History (Counterfactual Historiography). Blends theoretical physics (quantum transitions and bifurcation theory) with speculative Indian history regarding the Battle of Panipat.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #3F51B5; border-radius: 6px;">
        <b style="color: #3F51B5; font-size: 16px; display: block; margin-bottom: 4px;">2. Central Scientific Premise:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A fusion of <b>Catastrophe Theory</b> (small variations causing radical divergences in outcomes) and the <b>Many-Worlds Interpretation of Quantum Mechanics</b> (the multiverse coexisting in parallel reality branches).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #3F51B5; border-radius: 6px;">
        <b style="color: #3F51B5; font-size: 16px; display: block; margin-bottom: 4px;">3. The Historical Bifurcation Point:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>The Third Battle of Panipat (1761)</b>. In our reality, Vishwasrao died from a bullet shot, leading to Maratha collapse and British conquest. In the parallel reality, the bullet narrowly missed Vishwasrao's ear, inspiring the Marathas to crush Abdali's forces and establish self-reliant, democratic Indian supremacy.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #3F51B5; border-radius: 6px;">
        <b style="color: #3F51B5; font-size: 16px; display: block; margin-bottom: 4px;">4. The Tangible Proof:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The torn page of the <i>Bhausahebanchi Bakhar</i> preserved in Professor Gaitonde's pocket serves as indisputable physical evidence of his consciousness making a quantum transition into a parallel dimension.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 2.1: ABOUT THE AUTHOR -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px; margin-top: 30px;">2.1 About the Author &mdash; Prof. Jayant Vishnu Narlikar</h2>
  <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 16px; margin: 16px 0; border: 1px solid rgba(255,255,255,0.1);">
    <p><b>Professor Jayant Vishnu Narlikar</b> (born 1938) is an internationally celebrated Indian astrophysicist, cosmologist, mathematician, and author. A distinguished Cambridge alumnus and collaborator with Sir Fred Hoyle &mdash; with whom he formulated the renowned <i>Hoyle-Narlikar Theory of Conformal Gravity</i> &mdash; Narlikar has served as the founder-director of the Inter-University Centre for Astronomy and Astrophysics (IUCAA) in Pune and was honored with the Padma Vibhushan.</p>
    <p style="margin-top: 10px;">Beyond his groundbreaking contributions to cosmology, Narlikar is a master of science fiction in both Marathi and English. In <i>The Adventure</i>, he demonstrates how advanced quantum physical concepts can illuminate the philosophical mystery of human history, challenging classical linear determinism with the mind-bending reality of multiple coexisting timelines.</p>
  </div>

  <!-- SECTION 2.2: DETAILED THEMATIC EXPOSITION -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px; margin-top: 30px;">2.2 Deep Thematic Analysis &mdash; Parallel Realities &amp; The Multiverse</h2>

  <h3 style="color: #3F51B5; margin-top: 20px;">(i) The Collision &amp; The Consciousness Leap</h3>
  <p>The narrative centers around <b>Professor Gangadharpant Gaitonde</b>, a distinguished historian from Pune who has authored five monumental volumes on Indian history and is on the verge of delivering his landmark <b>1,000th presidential address</b> at a public seminar on the Battle of Panipat.</p>
  <p style="margin-top: 10px;">While traveling on the Pune-Bombay highway, Gaitonde's car collides with a truck. At the precise instant of impact, his mind was intensely occupied with a speculative historical question: <i>What would have happened if the Marathas had won the Third Battle of Panipat instead of losing to Ahmad Shah Abdali?</i> Gaitonde falls into a 60-hour clinical coma. However, his active consciousness undergoes a <b>quantum catastrophic transition</b>, projecting him into an alternate reality where that exact counterfactual condition has materialized.</p>

  <h3 style="color: #3F51B5; margin-top: 20px;">(ii) The Alternate Reality: The Jijamata Express &amp; Victorian Bombay</h3>
  <p>Gaitonde regains awareness aboard the <i>Jijamata Express</i>, traveling from Pune to Bombay. He is astonished by unfamiliar landmarks. At <b>Sarhad</b>, the train stops for border inspection: Anglo-Indian customs officials in British uniforms board the train, checking transit permits under the fluttering Union Jack. Greater Bombay, he discovers, is a British enclave leased until the year 2001 (analogous to Hong Kong under British lease from China).</p>
  <p style="margin-top: 10px;">Arriving at Victoria Terminus, Gaitonde finds a spotless station with staff including Anglo-Indians, Parsees, and British officers. Walking along Hornby Road, he observes British commercial icons &mdash; <i>Boots</i>, <i>Woolworth</i>, and the headquarters of the <b>East India Company</b>. The East India Company had not been dissolved in 1858 as in our world; instead, it remained a commercial corporation operating under diplomatic treaties with an independent, sovereign Indian administration.</p>

  <h3 style="color: #3F51B5; margin-top: 20px;">(iii) The Town Hall Library &amp; The Alternate Panipat Record</h3>
  <p>Seeking to resolve his profound disorientation, Gaitonde enters the <b>Town Hall Library (Asiatic Society)</b>. He pulls out his own five published volumes of <i>History of India</i>. Volumes 1 to 4 match his known historical memory exactly. However, <b>Volume 5</b> contains an astonishing, unrecorded historical narrative:</p>
  <ul style="list-style-type: none; padding-left: 0; margin-top: 10px;">
    <li style="margin-bottom: 10px; background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #3F51B5; border-radius: 4px;">
      <b style="color: #3F51B5;">&bull; The Fatal Bullet Divergence:</b> In our reality, Vishwasrao was struck and killed by a stray bullet in the head during the height of battle, causing the Maratha forces to panic and disintegrate. In the alternate reality, <i>"the bullet brushed past his ear, missing him by a hair's breadth"</i>.
    </li>
    <li style="margin-bottom: 10px; background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #3F51B5; border-radius: 4px;">
      <b style="color: #3F51B5;">&bull; The Maratha Counter-Offensive:</b> Galvanized by Vishwasrao's miraculous survival, the Marathas launched a ferocious counterattack led by Bhausaheb (Sadashivrao Bhau), routing Abdali's Afghan troops and pursuing them beyond the Indus to Kabul.
    </li>
    <li style="margin-bottom: 10px; background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #3F51B5; border-radius: 4px;">
      <b style="color: #3F51B5;">&bull; Modernization &amp; Democracy:</b> The victorious Peshwas maintained the Mughal Emperor in Delhi merely as a symbolic figurehead, while real administrative power was held by the Peshwas. Vishwasrao and his brother Madhavrao modernized the military, established industrial science centers, embraced Western technology, and gradually guided India into a sovereign, democratic federation where the Peshwas answered to a constitutional parliament.
    </li>
  </ul>
  <p style="margin-top: 10px;">While reading an original Marathi chronicle, the <b>Bhausahebanchi Bakhar</b>, Gaitonde discovers the precise moment of Vishwasrao's escape. Subconsciously, he tears out the page and slips it into his pocket alongside his research notes.</p>

  <h3 style="color: #3F51B5; margin-top: 20px;">(iv) The Azad Maidan Uproar: The Clash Over the Presidential Chair</h3>
  <p>Leaving the library, Gaitonde walks to <b>Azad Maidan</b>, where a massive public meeting is in progress. A speaker is addressing the gathering, but the <b>presidential chair on the dais stands empty</b>. To Gaitonde, a veteran of 999 public speeches, an unoccupied presidential chair is an intolerable violation of parliamentary decorum.</p>
  <p style="margin-top: 10px;">Gaitonde instinctively climbs onto the platform and sits in the chair. The audience erupts in fury. In this alternate India, public meetings had evolved beyond the archaic custom of having a formal, decorative chairperson presiding over speakers &mdash; audiences wanted to hear only the speakers directly. The crowd boos, hurls tomatoes, eggs, and footwear at Gaitonde, and eventually storms the stage to physically eject him. In the violent scuffle, Gaitonde is knocked unconscious.</p>

  <h3 style="color: #3F51B5; margin-top: 20px;">(v) Return to Reality &amp; Rajendra Deshpande's Scientific Explanation</h3>
  <p>Gaitonde awakens in a Pune hospital bed in his original, familiar world (where Marathas lost Panipat). He recounts his bizarre 60-hour journey to his friend <b>Rajendra Deshpande</b>, a mathematical physicist. Initially, Rajendra dismisses Gaitonde's account as a vivid coma-induced hallucination. However, Gaitonde produces the <b>torn page of the Bhausahebanchi Bakhar</b> from his pocket. The text on the paper clearly states that Vishwasrao escaped the bullet, whereas the Bakhar in this world states that Vishwasrao fell dead. The physical artifact cannot be explained away as a hallucination!</p>
  <p style="margin-top: 10px;">Rajendra then provides a brilliant scientific synthesis combining two cutting-edge theories:</p>
  <div style="background: rgba(63, 81, 181, 0.12); border-left: 4px solid #3F51B5; padding: 14px 18px; margin: 16px 0; border-radius: 6px;">
    <h4 style="color: #3F51B5; margin: 0 0 6px 0; font-size: 16px;">1. Catastrophe Theory (René Thom)</h4>
    <p style="margin: 0; color: #E8EAF6; font-size: 15px; line-height: 1.6;">
      In complex non-linear dynamical systems, a microscopic variation at a critical bifurcation point can cause a colossal macroscopic divergence in outcome. In history, the Battle of Panipat was evenly balanced; the stray bullet that killed Vishwasrao broke Maratha morale. In the alternate reality, that same bullet missed by a millimeter, causing the catastrophic tipping point to swing toward total Maratha triumph.
    </p>
    <h4 style="color: #3F51B5; margin: 14px 0 6px 0; font-size: 16px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">2. Quantum Multiverse &amp; The Many-Worlds Interpretation (Hugh Everett)</h4>
    <p style="margin: 0; color: #E8EAF6; font-size: 15px; line-height: 1.6;">
      Classical physics assumed a single deterministic universe. Quantum mechanics revealed that reality exists in superpositions of probability. An electron does not have a single predetermined orbit; it can make a quantum leap between energy levels. Similarly, the multiverse branches into multiple parallel worlds where every possible outcome of history actually happens. World 'A' (Marathas lost) and World 'B' (Marathas won) both exist simultaneously. When Gaitonde was struck by the truck, his intense contemplation of Panipat acted as a quantum trigger, causing his consciousness to transition temporarily from World 'A' to World 'B'.
    </p>
  </div>

  <!-- SECTION 2.3: MASTER COMPARISON MATRIX -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px; margin-top: 35px;">2.3 Master Comparison Matrix: Reality A (Actual History) vs Reality B (Alternate History)</h2>

  <div style="overflow-x: auto; margin: 20px 0;" class="table-container">
    <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #3F51B5; font-size: 15px;">
      <thead>
        <tr style="background: rgba(63, 81, 181, 0.25); color: #3F51B5;">
          <th style="border: 1px solid #3F51B5; padding: 12px; text-align: left; width: 20%;">Historical Dimension</th>
          <th style="border: 1px solid #3F51B5; padding: 12px; text-align: left; width: 40%;">Reality A (Our World / Actual History)</th>
          <th style="border: 1px solid #3F51B5; padding: 12px; text-align: left; width: 40%;">Reality B (Gaitonde's Alternate World)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Panipat Outcome (1761)</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Vishwasrao killed by a stray bullet; Marathas panicked, suffered massacre; Abdali won.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Bullet missed Vishwasrao's ear; Maratha morale surged; Abdali routed and chased to Kabul.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">British East India Co.</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Expanded political hegemony; colonized entire subcontinent; dissolved in 1858 under Crown rule.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Confined strictly to commercial enclaves (Bombay, Calcutta, Madras) under Maratha treaty leases.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Status of Bombay</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Financial capital of sovereign Republic of India; fully decolonized in 1947.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">British-administered outpost leased until 2001 (similar to Hong Kong), surrounded by customs at Sarhad.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Governance of India</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Post-colonial parliamentary democracy established in 1947 through independence movement.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Self-reliant, technological federation; Peshwas evolved into constitutional prime ministers; titular Mughal Emperor.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Public Meetings Culture</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Traditional protocol where a chairperson presides from the central chair on the dais.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Evolved beyond presidential formalities; empty chair on stage; audience demands direct interaction with speakers.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 2.4: MASTER LITERARY & SCIENTIFIC DEVICES TABLE -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px; margin-top: 35px;">2.4 Master Literary, Rhetorical &amp; Scientific Devices Table</h2>

  <div style="overflow-x: auto; margin: 20px 0;" class="table-container">
    <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #3F51B5; font-size: 15px;">
      <thead>
        <tr style="background: rgba(63, 81, 181, 0.25); color: #3F51B5;">
          <th style="border: 1px solid #3F51B5; padding: 12px; text-align: left; width: 22%;">Literary Device</th>
          <th style="border: 1px solid #3F51B5; padding: 12px; text-align: left; width: 38%;">Textual Illustration</th>
          <th style="border: 1px solid #3F51B5; padding: 12px; text-align: left; width: 40%;">Narrative Purpose &amp; Critical Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Alternate History</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px; font-style: italic; color: #E8EAF6;">Maratha victory at Panipat leading to technological, democratic Indian federation.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Enables counterfactual speculation, allowing the author to interrogate the precarious contingency of historic triumphs and defeats.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Dramatic Irony</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px; font-style: italic; color: #E8EAF6;">Gaitonde reading his own textbook (Volume 5) and encountering facts he never wrote.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Creates disorienting tension as the historian becomes an alien spectator to his own academic scholarship in a foreign reality.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Physical Motif / Token</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px; font-style: italic; color: #E8EAF6;">The torn page from the <i>Bhausahebanchi Bakhar</i> in Gaitonde's coat pocket.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Acts as an empirical bridge between dimensions, preventing the story from being dismissed as a mere psychological dream or hallucination.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Symbolism</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px; font-style: italic; color: #E8EAF6;">The empty presidential chair at Azad Maidan.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Symbolizes democratic rejection of hollow authoritarian figureheads, clashing with Gaitonde's outdated obsession with ceremonial prestige.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;"><b style="color: #3F51B5;">Scientific Exposition</b></td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px; font-style: italic; color: #E8EAF6;">Rajendra's explanation of Catastrophe Theory and Quantum Many-Worlds Hypothesis.</td>
          <td style="border: 1px solid #3F51B5; padding: 10px 12px;">Grounds a supernatural fantasy within rigorous theoretical physics, bridging humanistic history with hard mathematical science.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 2.5: COMPREHENSIVE VOCABULARY GLOSSARY -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px; margin-top: 35px;">2.5 High-Frequency Board Vocabulary &amp; Terminology</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 20px 0;">
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #3F51B5; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #3F51B5;">1. Bakhar:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">A traditional Marathi historical narrative, chronicle, or biography recounting medieval and Maratha military campaigns.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #3F51B5; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #3F51B5;">2. Catastrophe Theory:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">Mathematical theory developed by René Thom studying systems where small, gradual continuous inputs trigger sudden, dramatic discontinuous shifts.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #3F51B5; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #3F51B5;">3. Bifurcation Point:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">A critical juncture in a dynamical system where the trajectory branches into two or more fundamentally different pathways.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #3F51B5; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #3F51B5;">4. Determinism:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">The classical philosophical doctrine that all events, including moral choices, are completely determined by previously existing causes.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #3F51B5; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #3F51B5;">5. Quantum Transition:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">An abrupt, non-continuous shift of a physical or mental state from one quantum probability state to another across parallel reality branches.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #3F51B5; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #3F51B5;">6. Enclave:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">A portion of territory surrounded by a larger territory whose inhabitants are culturally, politically, or legally distinct.</span>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: BOARD SOLUTIONS                           */
/* -------------------------------------------------------------------------- */

export const c11EngH9HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION A: EXTRACT-BASED QUESTIONS -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px;">Section A: Extract-Based Comprehension Questions (16 Marks &bull; 1 Mark Each)</h2>
  <p style="margin-bottom: 20px; color: #9FA8DA; font-size: 14.5px;">Read the following passages from Jayant Narlikar's sci-fi story and answer the questions with textual fidelity.</p>

  <!-- EXTRACT 1 -->
  <div style="background: rgba(63, 81, 181, 0.06); border: 1.5px solid #3F51B5; border-radius: 8px; padding: 16px; margin: 16px 0;">
    <b style="color: #3F51B5; font-size: 16px;">Passage Extract 1:</b>
    <p style="font-style: italic; color: #E8EAF6; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;The train stopped beyond the long tunnel at a small station called Sarhad. An Anglo-Indian in uniform went through the train checking permits. 'This is where the British Raj begins, you're going into British territory,' Khan Sahib whispered. Gangadharpant nodded. He had not expected to find an Anglo-Indian checking permits on a train journey from Pune to Bombay...&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #3F51B5; margin: 10px 0 4px 0; font-size: 15.5px;">Question 1.1:</h3>
      <p><b>What station marked the entry into British territory in the alternate reality?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> The small frontier station named <b>Sarhad</b> marked the border where passengers entered British territory.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.2:</h3>
      <p><b>Who was Khan Sahib and what was his purpose on the train?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> Khan Sahib was a fellow passenger on the <i>Jijamata Express</i>, traveling to Bombay on business to expand his cloth trading enterprise.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.3:</h3>
      <p><b>Why was Gangadharpant surprised to see an Anglo-Indian officer checking permits?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> In Gaitonde's known reality, India was a unified sovereign nation where no permits or customs checkpoints existed between Pune and Bombay.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.4:</h3>
      <p><b>What was the geopolitical status of Bombay in this alternate timeline?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> Bombay was an isolated British commercial outpost leased from the Marathas until the year 2001, similar to British Hong Kong in China.</p>
    </div>
  </div>

  <!-- EXTRACT 2 -->
  <div style="background: rgba(63, 81, 181, 0.06); border: 1.5px solid #3F51B5; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #3F51B5; font-size: 16px;">Passage Extract 2:</b>
    <p style="font-style: italic; color: #E8EAF6; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;He took out the fifth volume and started reading from the beginning. The page he came to was the crucial one. The description of the Battle of Panipat was familiar up to the point when the two armies clashed. Then came the unexpected sentence: 'And then Vishwasrao guided his horse to the melees where the elite troops were fighting, and a bullet brushed past his ear. By the grace of God, he was saved.'&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #3F51B5; margin: 10px 0 4px 0; font-size: 15.5px;">Question 2.1:</h3>
      <p><b>Where was Gangadharpant when he read this crucial historical account?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> He was sitting in the <b>Town Hall Library (Asiatic Society)</b> in Bombay reading the fifth volume of his own historical series.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.2:</h3>
      <p><b>What was the miraculous event described regarding Vishwasrao?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> A stray bullet merely brushed past Vishwasrao's ear, sparing his life by a hair's breadth rather than killing him.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.3:</h3>
      <p><b>How did this event contradict the history known to Gaitonde in his original world?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> In actual history, the bullet killed Vishwasrao instantly, demoralizing the Maratha troops and handing decisive victory to Ahmad Shah Abdali.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.4:</h3>
      <p><b>What was the immediate psychological effect of Vishwasrao's survival on the Maratha army?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> It infused the Maratha warriors with fierce inspiration, turning the tide into a crushing rout of the Afghan forces.</p>
    </div>
  </div>

  <!-- EXTRACT 3 -->
  <div style="background: rgba(63, 81, 181, 0.06); border: 1.5px solid #3F51B5; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #3F51B5; font-size: 16px;">Passage Extract 3:</b>
    <p style="font-style: italic; color: #E8EAF6; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;Gaitonde moved towards the presidential chair. The chair was unoccupied. He sat down on it. A loud gasp escaped the audience. The speaker stopped mid-sentence. 'Get down from that chair!' several voices shouted. 'The chair must remain unoccupied,' the speaker protested. 'A meeting in this city does not have a chairman.' Gaitonde could not accept such an anomaly...&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #3F51B5; margin: 10px 0 4px 0; font-size: 15.5px;">Question 3.1:</h3>
      <p><b>Where did this confrontation occur, and what event was taking place?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> It occurred at <b>Azad Maidan</b> in Bombay, where a public lecture on the Panipat campaign was in progress.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.2:</h3>
      <p><b>Why did Gangadharpant insist on occupying the presidential chair?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> As a veteran of 999 presidential speeches, Gaitonde believed that a public meeting without a presiding chairperson was an intolerable parliamentary anomaly.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.3:</h3>
      <p><b>Why did the audience fiercely object to Gaitonde sitting on the chair?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> In this alternate society, public audiences had discarded the archaic custom of having a formal chairman, preferring to hear speakers directly without decorative figureheads.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.4:</h3>
      <p><b>What violent action did the crowd take against Gangadharpant?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> The crowd pelted him with tomatoes, eggs, and footwear, stormed the dais, and physically shoved him off the stage, knocking him unconscious.</p>
    </div>
  </div>

  <!-- EXTRACT 4 -->
  <div style="background: rgba(63, 81, 181, 0.06); border: 1.5px solid #3F51B5; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #3F51B5; font-size: 16px;">Passage Extract 4:</b>
    <p style="font-style: italic; color: #E8EAF6; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;Rajendra produced two scientific concepts to explain the phenomenon. One was catastrophe theory. The other was the lack of determinism in quantum theory. 'You see, Professor Gaitonde, an electron can make a jump from one energy level to another. In fact, it does not exist in any fixed position until it is observed. Could it be that your mind made a similar jump between two alternative worlds?'&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #3F51B5; margin: 10px 0 4px 0; font-size: 15.5px;">Question 4.1:</h3>
      <p><b>Name the two scientific theories invoked by Rajendra Deshpande.</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> Rajendra invoked <b>Catastrophe Theory</b> and the <b>lack of determinism in Quantum Theory</b> (Many-Worlds Interpretation).</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.2:</h3>
      <p><b>How does Catastrophe Theory apply to the Third Battle of Panipat?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> It explains how a microscopic change at a critical tipping point &mdash; whether a bullet killed or missed Vishwasrao &mdash; triggered a colossal divergence in the geopolitical history of India.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.3:</h3>
      <p><b>What quantum behavior did Rajendra compare to Gaitonde's mental transition?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> He compared it to an electron making a quantum leap between energy orbits, suggesting Gaitonde's consciousness jumped between two parallel reality branches.</p>

      <h3 style="color: #3F51B5; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.4:</h3>
      <p><b>What physical proof prevented Rajendra from dismissing Gaitonde's story as a dream?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> The torn page from the <i>Bhausahebanchi Bakhar</i> produced from Gaitonde's coat pocket, explicitly recording Vishwasrao's survival.</p>
    </div>
  </div>

  <!-- SECTION B: SHORT ANSWER QUESTIONS -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px; margin-top: 35px;">Section B: Short Answer Conceptual Questions (36 Marks &bull; 3 Marks Each &bull; 40&ndash;50 Words)</h2>

  <div style="margin-top: 16px;">
    <h3 style="color: #3F51B5; font-size: 16px;">Question 1: What was Professor Gaitonde planning to do before the car accident occurred?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> Professor Gaitonde was traveling to Bombay to consult library archives regarding the Battle of Panipat and prepare his landmark 1,000th presidential address. During the drive, his mind was deeply engaged in analyzing the historical consequences if the Marathas had won Panipat.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 2: What unusual sights greeted Professor Gaitonde at the Victoria Terminus station?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> Victoria Terminus was spotlessly clean and staffed by a mixture of Anglo-Indians and Parsees. The carriages bore the insignia of the 'Greater Bombay Metropolitan Railway' and flew the Union Jack, revealing Bombay to be under British administrative control.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 3: Why was the presence of the East India Company building in Bombay shocking to Gaitonde?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> In Gaitonde's known history, the East India Company had lost its administrative charter and dissolved following the Revolt of 1857. In this alternate world, it still flourished as a powerful mercantile corporation operating under diplomatic treaties with an independent Maratha government.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 4: What historical revelation in Volume 5 of 'History of India' stunned Professor Gaitonde?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> Volume 5 revealed that Vishwasrao was not killed at Panipat; the bullet merely grazed his ear. Inspiring his troops, the Marathas routed Abdali, drove the Afghans across the Indus, established sovereign Indian supremacy, and industrialized the nation under a constitutional Peshwa democracy.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 5: How did the alternate Indian state handle the Mughal Emperor in Delhi?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> The victorious Marathas preserved the Mughal Emperor on the throne of Delhi merely as a symbolic figurehead to appease Muslim sentiments. Real political, legislative, and military control was exercised by the Peshwas through a modern constitutional parliament.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 6: How did the torn page of the Bhausahebanchi Bakhar end up in Gaitonde's pocket?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> While reading the rare manuscript in the Town Hall Library, Gaitonde discovered the passage describing Vishwasrao's miraculous survival. In an involuntary, absent-minded reflex, he tore out the page and stuffed it into his pocket alongside his notes before the library closed.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 7: Why did the audience at Azad Maidan violently attack Professor Gaitonde?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> The audience was modern and pragmatic, having abolished the custom of having a decorative chairperson on stage. When Gaitonde stubbornly sat on the unoccupied presidential chair and refused to step down, the enraged crowd pelted him with projectiles and stormed the stage.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 8: What happened to Gaitonde after he was thrown off the stage at Azad Maidan?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> Gaitonde was overwhelmed by the mob and knocked unconscious. When he opened his eyes, the alternate world had vanished; he found himself lying in a hospital bed in Pune in his familiar, original world, recovering from his highway accident.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 9: How did Rajendra Deshpande initially react to Gaitonde's narrative?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> Rajendra initially diagnosed the experience as an elaborate hallucination triggered by severe head trauma. He believed Gaitonde's intense pre-accident thoughts on Panipat had simply combined with his coma to produce a vivid, delusional dream.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 10: How did the torn page of the Bakhar dismantle Rajendra's hallucination theory?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> Gaitonde produced the actual physical paper from his pocket. The printed text explicitly stated that the bullet missed Vishwasrao. Comparing it with the standard Bakhar in their world &mdash; which recorded Vishwasrao's death &mdash; proved the artifact originated from an alternate physical universe.</p>

    <h3 style="color: #3F51B5; margin-top: 18px;">Question 11: Explain the concept of 'Catastrophe Theory' as applied by Rajendra Deshpande.</h3>
    <p><b style="color: #3F51B5;">Answer:</b> Catastrophe Theory studies sudden, dramatic shifts in non-linear systems resulting from tiny changes in initial conditions. At Panipat, where opposing armies were evenly balanced, a single bullet missing or hitting Vishwasrao served as the tipping point that radically altered the course of Indian history.</p>

    <h3 style="color: #3F51B5; font-size: 16px; margin-top: 18px;">Question 12: Why did Professor Gaitonde resolve never to preside over another public meeting?</h3>
    <p><b style="color: #3F51B5;">Answer:</b> Deeply shaken by the violent hostility of the crowd at Azad Maidan and humbled by his confrontation with parallel realities, Gaitonde withdrew his acceptance to chair his 1,000th meeting, realizing that historical vanity was trivial compared to cosmic reality.</p>
  </div>

  <!-- SECTION C: LONG ANSWER QUESTIONS -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px; margin-top: 35px;">Section C: Long Answer Thematic / Analytical Questions (30 Marks &bull; 6 Marks Each &bull; 120&ndash;150 Words)</h2>

  <div style="margin-top: 16px;">
    <!-- LA 1 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #3F51B5; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #3F51B5; font-size: 16.5px; margin: 0 0 8px 0;">Question 13: Describe the alternate reality experienced by Professor Gaitonde in Bombay. How did it differ politically, socially, and economically from the India we know?</h3>
      <p><b style="color: #3F51B5;">1. Thematic Introduction:</b> In Jayant Narlikar's <i>The Adventure</i>, Professor Gangadharpant Gaitonde is projected into an alternate timeline where Indian history diverged following a Maratha triumph at the Third Battle of Panipat in 1761.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">2. Comprehensive Core Analysis:</b> Politically, India was never colonized by the British Empire. Instead, the Peshwas defeated Abdali, established indigenous hegemony across India, and relegated the Mughal ruler to a ceremonial figurehead in Delhi. Over time, the Marathas embraced scientific enlightenment and constitutional democracy, transforming India into a self-reliant technological federation. Economically, the East India Company was never permitted to conquer territory; it was strictly confined to commercial trading outposts like Greater Bombay under long-term leases (expiring in 2001, mirroring Hong Kong). Socially, Bombay was an Anglo-Indian enclave with customs checkpoints at Sarhad, Union Jack flags, and British shops along Hornby Road, while the rest of India enjoyed sovereign pride, technological prowess, and democratic institutions free from colonial trauma.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">3. Global Conclusion:</b> Gaitonde witnessed an India that modernized on its own terms &mdash; an enlightened federation where traditional culture hybridized with Western technology without undergoing foreign subjugation.</p>
    </div>

    <!-- LA 2 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #3F51B5; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #3F51B5; font-size: 16.5px; margin: 0 0 8px 0;">Question 14: Analyze the turning point of the Third Battle of Panipat as recorded in the Bhausahebanchi Bakhar. How does a single microscopic event create a massive macroscopic historical divergence?</h3>
      <p><b style="color: #3F51B5;">1. Thematic Introduction:</b> The core historical hinge of the narrative revolves around the fatal hour of the Third Battle of Panipat (14 January 1761), explored through contrasting versions of the Marathi historical chronicle, the <i>Bhausahebanchi Bakhar</i>.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">2. Comprehensive Core Analysis:</b> In our actual historical reality, the Peshwa heir, young Vishwasrao, was struck in the head by a stray Afghan bullet. The sight of their fallen prince triggered catastrophic panic throughout the Maratha ranks. Bhausaheb charged frantically into the fray and vanished, leading to the total collapse of the army. This defeat fatally broke Maratha imperial momentum, leaving India fragmented and opening the doorway for British imperial conquest. However, in the alternate Bakhar discovered by Gaitonde, the bullet missed Vishwasrao by a millimeter, merely grazing his ear. Inspiring his troops by his survival, Vishwasrao led a blistering counterattack that shattered Abdali's forces. This microscopic deviation &mdash; a bullet's trajectory altered by a fraction of an inch &mdash; altered the fate of an entire subcontinent for two centuries.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">3. Global Conclusion:</b> This dramatic episode illustrates the terrifying contingency of human history, demonstrating that vast empires and global destinies often pivot upon infinitesimal physical accidents.</p>
    </div>

    <!-- LA 3 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #3F51B5; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #3F51B5; font-size: 16.5px; margin: 0 0 8px 0;">Question 15: Explain the scientific synthesis offered by Rajendra Deshpande to resolve Professor Gaitonde's experience. How do Catastrophe Theory and Quantum Mechanics account for parallel universes?</h3>
      <p><b style="color: #3F51B5;">1. Thematic Introduction:</b> Prof. Jayant Narlikar brilliantly resolves the apparent impossibility of Gaitonde's journey by having the physicist Rajendra Deshpande construct an empirical bridge between theoretical physics and historical reality.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">2. Comprehensive Core Analysis:</b> Rajendra invokes two pillars of modern science. First, <b>Catastrophe Theory</b>, which models non-linear systems where gradual changes culminate in sudden, radical shifts at critical bifurcation points. The Battle of Panipat was a historical bifurcation point: two evenly matched armies where a single bullet's path swung the outcome between total ruin and total triumph. Second, <b>Quantum Theory and the Many-Worlds Interpretation</b>. Unlike classical physics which assumes a single deterministic universe, subatomic physics proves that matter exists in probability superpositions. An electron can make a quantum leap between discrete orbits without traversing the intervening space. Similarly, the multiverse branches into countless coexisting parallel worlds. World A (our history) and World B (alternate Panipat) exist simultaneously. At the moment of collision, Gaitonde's intense mental focus on Panipat acted as a quantum trigger, causing his consciousness to transition across reality branches.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">3. Global Conclusion:</b> Rajendra proves that Gaitonde was neither insane nor dreaming; he had physically and mentally experienced an alternate branch of quantum reality, validated by the torn Bakhar page in his pocket.</p>
    </div>

    <!-- LA 4 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #3F51B5; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #3F51B5; font-size: 16.5px; margin: 0 0 8px 0;">Question 16: Critically examine the symbolism of the empty presidential chair at Azad Maidan and the subsequent riot. What cultural and philosophical conflict does this incident highlight?</h3>
      <p><b style="color: #3F51B5;">1. Thematic Introduction:</b> The climactic confrontation at Azad Maidan, where Professor Gaitonde is pelted with tomatoes and evicted from the dais, serves as a powerful satirical and philosophical climax to his alternate reality adventure.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">2. Comprehensive Core Analysis:</b> To Professor Gaitonde &mdash; who took immense pride in his 999 presidential addresses &mdash; a public meeting without an official chairman seated in the central chair was an intolerable parliamentary anomaly. However, in this alternate, self-reliant India, democratic culture had evolved past decorative feudal rituals. Audiences had abolished the ceremonial role of the chairman, recognizing that verbose presidential introductions wasted time and placed a false figurehead above the speaker. When Gaitonde insisted on sitting in the chair, the crowd reacted with visceral outrage. The empty chair symbolized mature democratic empowerment: the gathering belonged to the public and the speaker, not to an arrogant, self-important dignitary. Gaitonde's stubborn clinging to the chair precipitated a riot, demonstrating that political progress requires dismantling ceremonial vanity.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">3. Global Conclusion:</b> The Azad Maidan clash punctured Gaitonde's academic ego, teaching him that history does not exist to glorify individuals, prompting his ultimate refusal to chair his 1,000th meeting.</p>
    </div>

    <!-- LA 5 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #3F51B5; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #3F51B5; font-size: 16.5px; margin: 0 0 8px 0;">Question 17: 'The Adventure' is an extraordinary fusion of scientific inquiry, historical speculation, and human drama. Discuss how Jayant Narlikar achieves this balance in the narrative.</h3>
      <p><b style="color: #3F51B5;">1. Thematic Introduction:</b> In <i>The Adventure</i>, Prof. Jayant Narlikar transcends traditional science fiction conventions by harmonizing hard physics, counterfactual historiography, and engaging character psychology into a seamless narrative.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">2. Comprehensive Core Analysis:</b> The story succeeds because each narrative layer reinforces the other. The historical speculation is rigorously researched: Narlikar reimagines the post-Panipat subcontinent with plausible institutional logic (Peshwa modernization, commercial treaties with the East India Company, retention of Bombay as an enclave). The human drama remains grounded in Gaitonde's authentic bewilderment as a distinguished scholar encountering his own altered textbooks. Finally, the science is not treated as magical hand-waving, but as a rigorous philosophical dialogue between Gaitonde and Rajendra Deshpande. By grounding quantum indeterminacy and catastrophe theory in the physical evidence of the torn Bakhar page, Narlikar elevates speculative fiction to serious epistemological inquiry.</p>
      <p style="margin-top: 8px;"><b style="color: #3F51B5;">3. Global Conclusion:</b> Narlikar demonstrates that science fiction can serve as a profound intellectual laboratory, expanding human consciousness by showing that reality is vastly richer and more complex than our single lived history.</p>
    </div>
  </div>

  <!-- SECTION D: NCERT OFFICIAL TEXTBOOK EXERCISE SOLUTIONS -->
  <h2 style="color: #3F51B5; font-weight: bold; border-bottom: 2px solid #3F51B5; padding-bottom: 6px; margin-top: 35px;">Section D: Complete Official NCERT Textbook Exercise Solutions</h2>

  <div style="margin-top: 16px;">
    <h3 style="color: #3F51B5; font-size: 16.5px;">I. Understanding the Text</h3>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #3F51B5; border-radius: 4px;">
      <p><b>Q1: Notice these expressions in the text. Infer their meaning from the context:</b></p>
      <p style="margin-top: 6px;">
        1. <b style="color: #3F51B5;">Blow-by-blow account:</b> A highly detailed, sequential record describing every single event or action as it happened.<br/>
        2. <b style="color: #3F51B5;">Morale booster:</b> Something that increases confidence, enthusiasm, and courage in individuals or a group (e.g., Vishwasrao surviving the bullet).<br/>
        3. <b style="color: #3F51B5;">Relegated to:</b> Assigned to an inferior, lower, or less important rank or position (e.g., Mughal Emperor relegated to a figurehead).<br/>
        4. <b style="color: #3F51B5;">Political acumen:</b> Shrewd, sharp insight and keen judgment in handling political affairs and statecraft.<br/>
        5. <b style="color: #3F51B5;">De facto:</b> Existing in actual fact or reality, whether legally or officially recognized or not.
      </p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #3F51B5; border-radius: 4px;">
      <p><b>Q2: 'You have neither been to the past nor the future. You were in the present experiencing a different world.' Explain this statement made by Rajendra to Professor Gaitonde.</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> Rajendra clarifies that Gaitonde did not engage in time travel. He did not travel backward to 1761 nor forward into a future century. Instead, he remained in the contemporary present (the 20th century), but his consciousness made a quantum leap into an <b>alternate branch of the multiverse</b>. In that parallel world, history had taken a different path after 1761 due to the Maratha victory at Panipat. Therefore, Gaitonde experienced an alternate present coexisting alongside our own present reality.</p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #3F51B5; border-radius: 4px;">
      <p><b>Q3: What was the significance of the Catastrophe Theory in the context of the story?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> Catastrophe Theory demonstrates that in complex, non-linear systems, a tiny variation in initial conditions can cause a monumental shift in the overall state of the system. In the Third Battle of Panipat, the opposing armies of the Marathas and Abdali were evenly matched. The death of Vishwasrao was the catastrophic tipping point that crushed Maratha morale. Conversely, in the alternate world, the bullet missing Vishwasrao was the tiny variation that swung the catastrophe toward total Maratha victory and an uncolonized India.</p>
    </div>

    <h3 style="color: #3F51B5; font-size: 16.5px; margin-top: 25px;">II. Talking About the Text</h3>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #3F51B5; border-radius: 4px;">
      <p><b>Discuss: 'A single event may change the course of the history of a nation.'</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> History is frequently shaped by critical, unpredictable contingency points rather than rigid determinism. The trajectory of a single stray bullet at Panipat in 1761 decided whether the Marathas or the British would rule the subcontinent. Similar historical turning points &mdash; such as the assassination of Archduke Franz Ferdinand sparking World War I, or Cleopatra's fleet at Actium &mdash; confirm that microscopic events at pivotal bifurcations can redirect the entire future destiny of nations and civilizations.</p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #3F51B5; border-radius: 4px;">
      <p><b>Discuss: Why did Professor Gaitonde decide that he would never preside over meetings again?</b></p>
      <p><b style="color: #3F51B5;">Answer:</b> Gaitonde's humiliating experience at Azad Maidan &mdash; where the audience violently rejected the traditional ceremonial role of the chairman &mdash; delivered an indelible shock to his self-esteem. Furthermore, his mind-bending encounter with parallel universes made him realize the triviality of human vanity and academic credentials. He realized that presiding over meetings was a superficial, outdated formality, leading him to politely decline his 1,000th presidential engagement.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: INTERACTIVE MCQS                           */
/* -------------------------------------------------------------------------- */

export const c11EngH9Mcqs = [
  {
    "id": "c11-eng-h9-m1",
    "question": "What is the profession of Gangadharpant Gaitonde in the story 'The Adventure'?",
    "options": [
      "A):   Professor of History",
      "B):   Astrophysicist and Cosmologist",
      "C):   British Customs Officer",
      "D):   High Court Advocate"
    ],
    "correctAnswer": "a",
    "explanation": "Textual Fact: Gangadharpant Gaitonde was an eminent Professor of History from Pune who had authored five volumes on Indian history."
  },
  {
    "id": "c11-eng-h9-m2",
    "question": "What milestone lecture was Professor Gaitonde preparing to deliver in Bombay?",
    "options": [
      "A):   His 100th presidential address",
      "B):   His 1,000th presidential address",
      "C):   His inaugural university lecture",
      "D):   His retirement valedictory speech"
    ],
    "correctAnswer": "b",
    "explanation": "Textual Fact: Gaitonde was scheduled to deliver his landmark 1,000th presidential address at a seminar on the Battle of Panipat."
  },
  {
    "id": "c11-eng-h9-m3",
    "question": "Which train carried Professor Gaitonde from Pune to Bombay in the alternate reality?",
    "options": [
      "A):   Deccan Queen",
      "B):   Frontier Mail",
      "C):   Jijamata Express",
      "D):   Flying Ranee"
    ],
    "correctAnswer": "c",
    "explanation": "Textual Fact: Gaitonde traveled on the Jijamata Express, which was faster than the Deccan Queen and stopped at Karjat, Kalyan, and Sarhad."
  },
  {
    "id": "c11-eng-h9-m4",
    "question": "At which border station did Anglo-Indian officers board the train to check permits?",
    "options": [
      "A):   Lonavala",
      "B):   Khandala",
      "C):   Dadar",
      "D):   Sarhad"
    ],
    "correctAnswer": "d",
    "explanation": "Textual Fact: The train stopped at a small border outpost station called Sarhad, where permits were checked before entering British Bombay."
  },
  {
    "id": "c11-eng-h9-m5",
    "question": "In which year did the historic Third Battle of Panipat take place?",
    "options": [
      "A):   1761",
      "B):   1857",
      "C):   1526",
      "D):   1757"
    ],
    "correctAnswer": "a",
    "explanation": "Historical Fact: The Third Battle of Panipat between the Marathas and Ahmad Shah Abdali was fought on 14 January 1761."
  },
  {
    "id": "c11-eng-h9-m6",
    "question": "In the alternate reality, what happened to Vishwasrao during the Battle of Panipat?",
    "options": [
      "A):   He was taken prisoner by Ahmad Shah Abdali",
      "B):   A bullet brushed past his ear, missing him by a hair's breadth",
      "C):   He fell from his elephant into the Yamuna river",
      "D):   He signed a surrender treaty with the Afghan generals"
    ],
    "correctAnswer": "b",
    "explanation": "Key Turning Point: The alternate Bakhar records that the bullet brushed past Vishwasrao's ear, saving his life and rallying the Maratha troops."
  },
  {
    "id": "c11-eng-h9-m7",
    "question": "What historical document did Professor Gaitonde consult at the Town Hall Library in Bombay?",
    "options": [
      "A):   Baburnama",
      "B):   Ain-i-Akbari",
      "C):   Akbarnama",
      "D):   Bhausahebanchi Bakhar"
    ],
    "correctAnswer": "d",
    "explanation": "Textual Fact: Gaitonde consulted the rare Marathi chronicle Bhausahebanchi Bakhar in the Town Hall Library."
  },
  {
    "id": "c11-eng-h9-m8",
    "question": "Who was the mathematical physicist with whom Gaitonde discussed his experience in Pune?",
    "options": [
      "A):   Khan Sahib",
      "B):   Edgar Woolard",
      "C):   Vinay Gaitonde",
      "D):   Rajendra Deshpande"
    ],
    "correctAnswer": "d",
    "explanation": "Textual Fact: Rajendra Deshpande was a friend and mathematical physicist who explained the phenomenon using Catastrophe Theory and Quantum Mechanics."
  },
  {
    "id": "c11-eng-h9-m9",
    "question": "What physical proof did Professor Gaitonde possess to validate his journey to the alternate world?",
    "options": [
      "A):   A torn page of the Bhausahebanchi Bakhar preserved in his pocket",
      "B):   A silver coin minted by the East India Company in 1990",
      "C):   A transit permit issued by the British customs at Sarhad",
      "D):   A photograph of the presidential chair at Azad Maidan"
    ],
    "correctAnswer": "a",
    "explanation": "Empirical Evidence: Gaitonde produced the torn page of the Bhausahebanchi Bakhar from his pocket, explicitly recording Vishwasrao's survival."
  },
  {
    "id": "c11-eng-h9-m10",
    "question": "Why did the audience at Azad Maidan violently object to Gaitonde sitting on the presidential chair?",
    "options": [
      "A):   The chair was officially reserved for the visiting British Governor",
      "B):   The audience had abolished the custom of having a formal chairman presiding over meetings",
      "C):   The chair had been painted wet with fresh varnish that morning",
      "D):   Gaitonde was dressed in modern Western clothing instead of traditional attire"
    ],
    "correctAnswer": "b",
    "explanation": "Cultural Shift: In the alternate India, public meetings had discarded ceremonial chairmen, preferring to hear speakers directly without decorative figures."
  },
  {
    "id": "c11-eng-h9-m11",
    "question": "According to Rajendra Deshpande, how does Catastrophe Theory explain the outcome of Panipat?",
    "options": [
      "A):   A major earthquake struck Panipat, swallowing both opposing armies simultaneously",
      "B):   Abdali's food supplies were contaminated by an unexpected fungal infection",
      "C):   The Maratha artillery exploded due to substandard gunpowder imports",
      "D):   A small initial variation &mdash; the bullet missing or hitting Vishwasrao &mdash; triggered a colossal divergence in national history"
    ],
    "correctAnswer": "d",
    "explanation": "Catastrophe Theory: In a finely balanced battle, a microscopic shift at the tipping point caused a monumental divergence in macroscopic historical reality."
  },
  {
    "id": "c11-eng-h9-m12",
    "question": "What status did the East India Company hold in the alternate reality discovered by Gaitonde?",
    "options": [
      "A):   It was a commercial trading corporation operating under leases and treaties with sovereign Marathas",
      "B):   It ruled the entire Indian subcontinent with absolute imperial power from Delhi",
      "C):   It had been completely expelled and outlawed from Asian maritime waters",
      "D):   It was owned and operated exclusively by the Peshwa royal family"
    ],
    "correctAnswer": "a",
    "explanation": "Alternate Reality Fact: The East India Company was confined to commercial trading outposts like Bombay under strict treaties with the Maratha rulers."
  },
  {
    "id": "c11-eng-h9-m13",
    "question": "What quantum mechanical principle did Rajendra compare to Professor Gaitonde's mental transition?",
    "options": [
      "A):   Nuclear fission of heavy radioactive isotopes",
      "B):   An electron making an abrupt quantum leap between different energy levels without traversing intermediate space",
      "C):   Thermodynamic entropy causing irreversible cooling of cosmic nebulae",
      "D):   Gravitational lensing bending starlight around supermassive black holes"
    ],
    "correctAnswer": "b",
    "explanation": "Quantum Mechanics: Rajendra likened Gaitonde's transition to an electron making a quantum leap between discrete probability states in the multiverse."
  },
  {
    "id": "c11-eng-h9-m14",
    "question": "How was the Mughal Emperor treated in the alternate post-Panipat India?",
    "options": [
      "A):   He was executed and the dynasty was extinguished",
      "B):   He ruled as an absolute monarch over all of South Asia",
      "C):   He was maintained as a titular, ceremonial figurehead to appease Muslim sentiments",
      "D):   He was exiled to Rangoon under British military escort"
    ],
    "correctAnswer": "c",
    "explanation": "Political Statecraft: The victorious Peshwas kept the Mughal Emperor on the throne in Delhi as a titular figurehead, while real authority lay with the Marathas."
  },
  {
    "id": "c11-eng-h9-m15",
    "question": "What happened to Professor Gaitonde right before his quantum transition into the alternate world?",
    "options": [
      "A):   He drank a chemical potion in his university chemistry laboratory",
      "B):   He was meditating under a sacred banyan tree in Pune",
      "C):   He was hypnotized by a wandering ascetic on the banks of the Mula-Mutha river",
      "D):   His car collided with a truck on the highway while he was contemplating the Battle of Panipat"
    ],
    "correctAnswer": "d",
    "explanation": "Inciting Incident: Gaitonde was involved in a highway collision with a truck while thinking deeply about what would have happened if Marathas won Panipat."
  },
  {
    "id": "c11-eng-h9-m16",
    "question": "What core philosophical challenge does 'The Adventure' present to classical historical determinism?",
    "options": [
      "A):   History does not follow a single predetermined track, but branches into multiple possible realities based on critical bifurcations",
      "B):   Historical events are written exclusively by victorious military generals who fabricate all evidence",
      "C):   Ancient manuscripts are completely unreliable and should be replaced by computer algorithms",
      "D):   Human civilization is destined to collapse into global ice age within a century"
    ],
    "correctAnswer": "a",
    "explanation": "Philosophical Thesis: Narlikar demonstrates through quantum theory that historical reality is non-deterministic and can branch into multiple parallel timelines."
  },
  {
    "id": "c11-eng-h9-m17",
    "question": "Why did Professor Gaitonde ultimately decide to decline presiding over his 1,000th meeting?",
    "options": [
      "A):   He was fired from his professorship by the university vice-chancellor",
      "B):   He lost his academic notes and could not remember the names of the Maratha generals",
      "C):   His traumatic encounter with the hostile crowd and parallel worlds stripped him of ceremonial vanity",
      "D):   He decided to permanently emigrate to the United Kingdom to teach at Oxford"
    ],
    "correctAnswer": "c",
    "explanation": "Psychological Resolution: The Azad Maidan humiliation and his cosmic awakening stripped Gaitonde of vanity, making ceremonial chairmanships feel utterly meaningless."
  },
  {
    "id": "c11-eng-h9-m18",
    "question": "According to the Many-Worlds Interpretation, what is the status of the alternate world Gaitonde visited?",
    "options": [
      "A):   It was a purely fictional illusion existing only inside Gaitonde's damaged brain cells",
      "B):   It was a temporary digital simulation created by future time-travelers",
      "C):   It exists as a real, tangible physical universe coexisting simultaneously in the multiverse",
      "D):   It was an ancient memory from Gaitonde's previous biological reincarnation"
    ],
    "correctAnswer": "c",
    "explanation": "Multiverse Concept: Under the Many-Worlds theory, every quantum possibility branches into an equally real physical universe coexisting across the multiverse."
  },
  {
    "id": "c11-eng-h9-m19",
    "question": "What was the symbolic significance of the empty presidential chair at Azad Maidan?",
    "options": [
      "A):   It signified that the speaker had died moments before the lecture commenced",
      "B):   It indicated that the hall was under strict police surveillance for tax evasion",
      "C):   It symbolized a democratic society that has outgrown authoritarian figureheads in favor of direct communication",
      "D):   It showed that the meeting was strictly reserved for school children"
    ],
    "correctAnswer": "c",
    "explanation": "Democratic Symbolism: An empty chair symbolized a mature, egalitarian public that values direct ideas from speakers rather than hollow ceremonial dignitaries."
  },
  {
    "id": "c11-eng-h9-m20",
    "question": "How does the story 'The Adventure' uniquely bridge the humanities and the physical sciences?",
    "options": [
      "A):   It recommends that all history textbooks be written by quantum physicists rather than historians",
      "B):   It demonstrates that historical counterfactuals can be rigorously modeled through non-linear mathematics and quantum mechanics",
      "C):   It argues that scientific laboratories should be funded entirely through historical museum ticket sales",
      "D):   It asserts that mathematical formulas have no relevance to human consciousness or society"
    ],
    "correctAnswer": "b",
    "explanation": "Interdisciplinary Synthesis: Narlikar brilliantly uses Catastrophe Theory and Quantum Mechanics to provide a scientific framework for historical alternate realities."
  }
];
