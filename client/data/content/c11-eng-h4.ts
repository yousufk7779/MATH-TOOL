// Class 11 English (Hornbill) - Chapter 4: Discovering Tut: The Saga Continues by A.R. Williams
// Standardized for JKBOSE & CBSE / NCERT Curriculum
// Gold Standard 3-Tab Architecture & Deep Prose Reference Guide
// Theme Color: #FF9800 (Egyptian Gold / Amber / Desert Sunset Theme)

const themeColor = "#FF9800";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11EngH4HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & KEY LITERARY CONCEPTS CARD -->
  <div style="background: rgba(255, 152, 0, 0.06); border: 1.5px solid #FF9800; border-radius: 12px; padding: 18px; margin-bottom: 25px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <h2 class="text-center" style="color: #FF9800; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">📖 Quick Glossary &amp; Essential Archaeological Snapshot</h2>
    <p class="text-center" style="color: #FFCC80; margin: 0 0 16px 0; font-size: 14.5px;">Hornbill Prose &bull; Chapter 4: Discovering Tut: The Saga Continues &bull; A.R. Williams</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF9800; border-radius: 6px;">
        <b style="color: #FF9800; font-size: 16px; display: block; margin-bottom: 4px;">1. Genre &amp; Form:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Non-fiction Forensic Journalism &amp; Archaeological Chronicle. First published in <i>National Geographic</i> magazine, documenting the high-tech CT scan of King Tutankhamun on January 5, 2005.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF9800; border-radius: 6px;">
        <b style="color: #FF9800; font-size: 16px; display: block; margin-bottom: 4px;">2. Central Scientific Conflict:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The evolution of archaeology &mdash; contrasting the destructive, treasure-hunting excavation methods of Howard Carter in 1922 with non-invasive, three-dimensional forensic radiology under Dr. Zahi Hawass in 2005.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF9800; border-radius: 6px;">
        <b style="color: #FF9800; font-size: 16px; display: block; margin-bottom: 4px;">3. Historical &amp; Dynastic Core:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The dramatic turmoil of the late 18th Dynasty: the religious rebellion of the heretic king Akhenaten (Aten worship), the mysterious interim rulers, and the brief 9-year restoration reign of the boy king Tutankhamun ending in premature death.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF9800; border-radius: 6px;">
        <b style="color: #FF9800; font-size: 16px; display: block; margin-bottom: 4px;">4. Key Motifs &amp; Ancient Symbols:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>The Solid Gold Coffin &amp; Mask</b> (the eternal resurrection of the sun god), <b>The Valley of the Kings</b> (sacred necropolis guarded by constellation Orion), <b>Canopic Chests &amp; Resins</b> (ritual preservation of the physical body), and <b>The Pharaoh's Curse</b> (superstitious awe vs. rational forensic science).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1.1: ABOUT THE AUTHOR & ARCHAEOLOGICAL CONTEXT -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">1.1 About the Author &amp; Modern Forensic Archaeology</h2>
  <p><b>A.R. Williams</b> is an eminent American researcher, journalist, and former senior writer for the prestigious <i>National Geographic</i> magazine. Specializing in world archaeology, ancient history, and indigenous cultures, Williams is celebrated for bridging the gap between rigorous academic science and captivating popular non-fiction. Her writing combines evocative sensory descriptions of historical locales with precise, objective scientific exposition.</p>
  
  <p>In <b>'Discovering Tut: The Saga Continues'</b>, Williams chronicles a historic turning point in Egyptology. On <b>January 5, 2005</b>, at precisely 6:00 PM, the world's most famous mummy &mdash; that of the teenage Egyptian pharaoh <b>Tutankhamun</b> &mdash; was carefully removed from his rock-cut tomb in the legendary <b>Valley of the Kings</b> (Thebes, modern Luxor) to undergo a state-of-the-art multi-slice Computed Tomography (CT) scan. Williams uses this forensic milestone to examine the profound paradigm shift in modern archaeology: shifting away from the romanticized treasure-hunting of the 19th and early 20th centuries toward microscopic forensic anthropology, digital reconstruction, and cultural demystification.</p>

  <!-- SECTION 1.2: CORE THEMATIC DIMENSIONS -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">1.2 Core Thematic Dimensions &amp; Conceptual Insights</h2>
  <p>The chapter explores profound intersections between history, mortality, imperial politics, and medical technology:</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(255, 152, 0, 0.08); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">(i) Paradigm Shift in Archaeology (Treasures vs. Forensic Truth):</b>
      <span style="display: block; color: #FFFFFF; margin-top: 4px;">In 1922, British archaeologist Howard Carter focused predominantly on discovering spectacular golden artifacts to dazzle the world and secure patrons. Modern archaeology under Dr. Zahi Hawass prioritizes biographical data: the health, diseases, lifestyle, and precise cause of death of historical figures using cutting-edge non-destructive diagnostic tools.</span>
    </div>
    <div style="background: rgba(255, 152, 0, 0.08); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">(ii) Dynastic Power, Radical Ideology &amp; Political Restitution:</b>
      <span style="display: block; color: #FFFFFF; margin-top: 4px;">Tutankhamun's life cannot be understood without the radical religious tyranny of his predecessor, Amenhotep IV (Akhenaten). Akhenaten plunged Egypt into chaos by abolishing the centuries-old cult of Amun, smashing idols, and enforcing the exclusive worship of Aten (the sun disc). King Tut's historic role was to restore orthodox stability, divine reconciliation, and the ancient religion.</span>
    </div>
    <div style="background: rgba(255, 152, 0, 0.08); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">(iii) Ancient Egyptian Eschatology &amp; The Concept of Afterlife:</b>
      <span style="display: block; color: #FFFFFF; margin-top: 4px;">To the ancient Egyptians, royal death was not an end but a magical transition into eternity. The pharaoh was considered a living god on earth (Horus) who transformed into Osiris (god of the underworld) upon death. The lavish golden furniture, board games, razors, food, and wine interred in Tut's tomb reflected an absolute conviction that the pharaoh would need physical sustenance and luxurious comfort in the eternal afterlife.</span>
    </div>
    <div style="background: rgba(255, 152, 0, 0.08); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">(iv) Science Demystifying the 'Pharaoh's Curse':</b>
      <span style="display: block; color: #FFFFFF; margin-top: 4px;">For decades, sensationalist newspapers perpetuated the mythical 'Curse of the Pharaoh' &mdash; that death or misfortune would strike anyone disturbing the king's sleep. When the million-dollar CT scanner's cooling fan jammed due to desert sand during the 2005 investigation, a nervous technician jokingly invoked the curse. However, practical engineering (spare plastic fans) quickly resolved the glitch, emphasizing that rational science easily dispels ancient superstitions.</span>
    </div>
  </div>

  <!-- SECTION 1.3: COMPREHENSIVE NARRATIVE LOG -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">1.3 Comprehensive Narrative &amp; Historical Investigation Log</h2>
  <p>The chronicle weaves back and forth between contemporary forensic science and ancient dynastic intrigue across five critical phases:</p>

  <h3 style="color: #FF9800; font-weight: bold; margin-top: 22px;">Phase 1: The Gathering Tempest &mdash; 6:00 PM, January 5, 2005</h3>
  <p>At 6:00 PM on January 5, 2005, the atmosphere in the Valley of the Kings was charged with eerie natural turbulence. Angry, high-velocity winds whipped up dark-bellied clouds that had been scudding across desert skies all day, veiling the stars in 'cascades of grey'. Eerie dust devils danced across the desiccated cliffs of the ancient royal cemetery, known in antiquity as <i>The Valley of the Kings</i>:</p>
  <ul style="margin: 8px 0 16px 20px; color: #E0E0E0; line-height: 1.8;">
    <li><b style="color: #FF9800;">Tourist Pilgrimage:</b> Tourists from around the globe queued patiently to descend 26 feet down into the rock-cut underground burial chamber (tomb KV62) to gaze upon the wall murals and King Tut's gilded face on the outer coffin lid.</li>
    <li><b style="color: #FF9800;">Zahi Hawass's Anxiety:</b> Dr. Zahi Hawass, Secretary General of Egypt's Supreme Council of Antiquities, openly expressed deep apprehension: <i>"The mummy is in very bad condition because of what Carter did in the 1920s,"</i> he explained, confessing he had been unable to sleep for days worrying about the delicate operation.</li>
  </ul>

  <h3 style="color: #FF9800; font-weight: bold; margin-top: 22px;">Phase 2: Howard Carter's 1922 Discovery &amp; The Disastrous Chiseling</h3>
  <p>To understand Hawass's anxiety, the narrative revisits <b>1922</b>, when British archaeologist <b>Howard Carter</b>, funded after years of futile searching by the wealthy British aristocrat <b>Lord Carnarvon</b>, finally discovered Tutankhamun's undisturbed tomb:</p>
  <ul style="margin: 8px 0 16px 20px; color: #E0E0E0; line-height: 1.8;">
    <li><b style="color: #FF9800;">The Fabulous Gold Treasure:</b> The tomb was packed with dazzling gold artifacts &mdash; collars, inlaid necklaces, bracelets, rings, amulets, sandals, and the world-famous iconic death mask of beaten solid gold. These treasures represented the richest royal collection ever uncovered.</li>
    <li><b style="color: #FF9800;">The Three Nested Coffins:</b> Carter breached three nested anthropoid coffins. In the first, he discovered a shroud adorned with willow and olive leaves, wild celery, lotus petals, and cornflowers &mdash; faded botanical evidence proving the burial had occurred in March or April.</li>
    <li><b style="color: #FF9800;">The Hardened Resins:</b> Reaching the innermost third coffin of solid gold, Carter encountered an insurmountable crisis: the ritual anointing resins poured during the funeral had hardened like cement, binding Tut's body irrevocably to the gold bottom.</li>
    <li><b style="color: #FF9800;">Desperate Measures:</b> Carter attempted to soften the resins by setting the golden coffin in the blazing desert sun, heating it to 149 degrees Fahrenheit (65 degrees Celsius), but nothing budged. Fearing that leaving the gold intact would invite thieves to ransack the tomb and decapitate the mummy, Carter took the fateful decision to chisel away the consolidated resins underneath the limbs and torso, permanently severing every major joint of the pharaoh's body. Once disassembled, Carter's workmen reassembled the remnants on a bed of sand in a wooden box, concealing the catastrophic damage.</li>
  </ul>

  <h3 style="color: #FF9800; font-weight: bold; margin-top: 22px;">Phase 3: The 1968 Anatomical Discovery &mdash; The Murder Mystery Intensifies</h3>
  <p>More than 40 years after Carter's excavation, in <b>1968</b>, an anatomy professor X-rayed the mummy and uncovered a startling diagnostic anomaly:</p>
  <div style="background: rgba(255, 152, 0, 0.12); border-left: 4px solid #FF9800; padding: 12px 18px; margin: 16px 0; border-radius: 4px;">
    <span style="color: #FFFFFF; font-size: 15.5px; line-height: 1.6;">
      Beneath the hardened resin encasing Tut's chest, <b>his breastbone (sternum) and front ribs were completely missing!</b> This revelation ignited fierce worldwide speculation: Had the young boy king been murdered through foul play, struck down in battle, or assassinated by rival courtiers?
    </span>
  </div>

  <h3 style="color: #FF9800; font-weight: bold; margin-top: 22px;">Phase 4: The 18th Dynasty Turmoil &mdash; Akhenaten's Heresy &amp; Tut's Restoration</h3>
  <p>The chapter delves deep into the fascinating political and religious backdrop of Tutankhamun's ancestry:</p>
  <ul style="margin: 8px 0 16px 20px; color: #E0E0E0; line-height: 1.8;">
    <li><b style="color: #FF9800;">Amenhotep III:</b> Tut's father or grandfather, who ruled for nearly 40 prosperous years during the zenith of the 18th Dynasty's imperial golden age.</li>
    <li><b style="color: #FF9800;">Amenhotep IV (Akhenaten &mdash; 'Servant of the Aten'):</b> Succeeded the throne and initiated one of the most bizarre and tumultuous epochs in ancient Egyptian history. He promoted the exclusive worship of the <b>Aten</b> (the sun disc), changed his name to Akhenaten, relocated the religious capital from sacred Thebes to the brand-new desert city of <b>Akhetaten</b> (modern Amarna), and shocked the empire by outlawing <b>Amun</b> &mdash; smashing his temples and defacing his idols. The famous Egyptologist Ray Johnson described this period as sheer madness: <i>"The family that had ruled for centuries was coming to an end, and then Akhenaten went a little wacky."</i></li>
    <li><b style="color: #FF9800;">Smenkhkare:</b> A mysterious, ephemeral ruler who reigned briefly after Akhenaten and exited leaving barely a trace.</li>
    <li><b style="color: #FF9800;">Tutankhaten ('Living Image of Aten') &rarr; Tutankhamun ('Living Image of Amun'):</b> A young boy took the throne. Recognizing the deep spiritual rupture in his kingdom, the boy pharaoh quickly reverted his name to Tutankhamun, reinstated the old gods, reopened the grand temples of Amun, and oversaw a comprehensive religious restoration. He ruled for approximately nine years and then died suddenly, mysteriously, and without an heir.</li>
  </ul>

  <h3 style="color: #FF9800; font-weight: bold; margin-top: 22px;">Phase 5: The Night of the CT Scan &mdash; Science Delivers the Truth</h3>
  <p>Returning to the momentous evening of January 5, 2005, the portable CT scanner &mdash; donated by the <b>National Geographic Society and Siemens</b> &mdash; was parked inside a large trailer near the tomb:</p>
  <ul style="margin: 8px 0 16px 20px; color: #E0E0E0; line-height: 1.8;">
    <li><b style="color: #FF9800;">The Hydraulic Lift:</b> Workmen hoisted the wooden box containing Tut's sand-bedded mummy from the subterranean tomb on a hydraulic lift, sliding it smoothly into the scanning chamber.</li>
    <li><b style="color: #FF9800;">The Glitch &amp; The Curse:</b> Twenty minutes into the scan, the million-dollar scanner abruptly halted. Fine desert sand carried by the winds had infiltrated the cooling fan mechanism. A nervous security guard joked, <i>"Curse of the Pharaoh!"</i> However, technicians quickly brought out two spare white plastic fans from a support trailer, plugged them in, and resumed the scan without data loss.</li>
    <li><b style="color: #FF9800;">Digital Miracle:</b> The CT machine recorded <b>1,700 digital X-ray slices in cross-section</b> at 0.62-millimeter thickness. On the computer monitors in the trailer, astonishing high-resolution imagery emerged: a grey, lifelike pixelated skull turned and tilted on the screen; neck vertebrae materialized with crystalline clarity like an anatomy textbook; followed by cross-sections of his hand, ribcage, and pelvis.</li>
    <li><b style="color: #FF9800;">Deliverance &amp; Peace:</b> The scan revealed no evidence of a fatal skull fracture, demonstrating that Tutankhamun had not suffered a violent blunt-force head trauma. Relieved of a monumental burden, Dr. Zahi Hawass smiled broadly: <i>"I didn't sleep a wink last night... but now I think I will go and sleep."</i></li>
    <li><b style="color: #FF9800;">The Final Guard:</b> As the team stepped out of the trailer into the chilly desert midnight, the fierce winds had completely ceased. Directly above the entrance to KV62, shining brightly in the silent, star-studded sky, stood <b>Orion</b> &mdash; the constellation the ancient Egyptians worshipped as the soul of <b>Osiris</b>, the god of the afterlife, watching protectively over the resting boy king.</li>
  </ul>

  <!-- SECTION 1.4: DETAILED CHARACTER SKETCHES -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">1.4 Detailed Psychological &amp; Historical Character Sketches</h2>

  <div style="display: flex; flex-direction: column; gap: 16px; margin: 18px 0;">
    <!-- TUTANKHAMUN -->
    <div style="background: rgba(0,0,0,0.3); border: 1.5px solid #FF9800; border-radius: 8px; padding: 16px;">
      <h3 style="color: #FF9800; margin-top: 0; font-size: 18px;">👑 1. King Tutankhamun (c. 1341&ndash;1323 BCE)</h3>
      <p style="margin: 6px 0; color: #F8FAFC;"><b style="color: #FF9800;">Tragic Boy Pharaoh:</b> Ascended Egypt's golden throne as a child of about nine or ten years. Despite his youth, he exhibited remarkable political and religious maturity by dismantling Akhenaten's oppressive religious reforms, restoring the worship of Amun, and shifting the capital back to Thebes.</p>
      <p style="margin: 6px 0; color: #F8FAFC;"><b style="color: #FF9800;">Enduring Mystery:</b> His sudden death at approximately 19 years of age brought the illustrious 18th Dynasty to an abrupt end. His intact tomb ensured that he became the ultimate global symbol of ancient Egyptian royal splendor.</p>
    </div>

    <!-- HOWARD CARTER -->
    <div style="background: rgba(0,0,0,0.3); border: 1.5px solid #FF9800; border-radius: 8px; padding: 16px;">
      <h3 style="color: #FF9800; margin-top: 0; font-size: 18px;">🔍 2. Howard Carter (1874&ndash;1939)</h3>
      <p style="margin: 6px 0; color: #F8FAFC;"><b style="color: #FF9800;">Tenacious British Archaeologist:</b> Spent decades working methodically in Egypt under the sponsorship of Lord Carnarvon. His meticulous recording, photography, and preservation of Tut's treasures in 1922 set new benchmarks for archival documentation.</p>
      <p style="margin: 6px 0; color: #F8FAFC;"><b style="color: #FF9800;">Controversial Methods:</b> Trapped by the physical limitations of early 20th-century archaeology, his decision to chisel the hardened resins and dismantle Tut's joints caused irreversible anatomical damage, earning fierce condemnation from later generations of Egyptologists.</p>
    </div>

    <!-- ZAHI HAWASS -->
    <div style="background: rgba(0,0,0,0.3); border: 1.5px solid #FF9800; border-radius: 8px; padding: 16px;">
      <h3 style="color: #FF9800; margin-top: 0; font-size: 18px;">🏛️ 3. Dr. Zahi Hawass</h3>
      <p style="margin: 6px 0; color: #FF9800;"><b style="color: #FF9800;">Passionate Custodian of Antiquities:</b> The charismatic Secretary General of Egypt's Supreme Council of Antiquities. Hawass revolutionized Egyptology by insisting that ancient Egyptian mummies be treated with profound ethical respect as sacred human remains rather than mere curiosities.</p>
      <p style="margin: 6px 0; color: #FF9800;"><b style="color: #FF9800;">Scientific Visionary:</b> Pioneered the systematic CT scanning and DNA analysis of hundreds of royal mummies to reconstruct ancient Egyptian genealogy and disease history.</p>
    </div>

    <!-- AKHENATEN -->
    <div style="background: rgba(0,0,0,0.3); border: 1.5px solid #FF9800; border-radius: 8px; padding: 16px;">
      <h3 style="color: #FF9800; margin-top: 0; font-size: 18px;">☀️ 4. Amenhotep IV / Akhenaten</h3>
      <p style="margin: 6px 0; color: #FF9800;"><b style="color: #FF9800;">The Revolutionary Heretic King:</b> One of history's first recorded monotheistic fanatics. His radical abolition of the traditional priesthood of Amun, iconoclasm, and relocation to Amarna alienated the military and populace, bringing Egypt's empire to the brink of collapse.</p>
    </div>
  </div>

  <!-- SECTION 1.5: LITERARY DEVICES TABLE -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">1.5 Poetic &amp; Literary Devices Master Table</h2>
  <p>Board exams frequently test figurative imagery, metaphorical contrasts, and rhetorical devices from this chapter:</p>

  <div class="table-container" style="overflow-x: auto; margin: 18px 0;">
    <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.35); font-size: 14.5px; border: 1px solid rgba(255, 152, 0, 0.4);">
      <thead>
        <tr style="background: #FF9800; color: #FFFFFF;">
          <th style="padding: 10px; border: 1px solid #F57C00; text-align: left; width: 22%;">Literary Device</th>
          <th style="padding: 10px; border: 1px solid #F57C00; text-align: left; width: 38%;">Quote / Textual Example</th>
          <th style="padding: 10px; border: 1px solid #F57C00; text-align: left; width: 40%;">Literary &amp; Thematic Significance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9800;">Metaphor</b></td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-style: italic;">"Dark-bellied clouds had scudded across the desert sky... veiling the stars in 'casket grey'."</td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Directly equates the overcast twilight sky to the grey satin lining of a funeral casket, setting a solemn, funerary mood.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9800;">Personification</b></td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-style: italic;">"Ghostly dust devils had whipped up... wind died down... the winter air lay cold and still, like death itself."</td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Endows the desert wind and dust spirals with restless, spectral qualities, personifying the necropolis as actively guarding the dead.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9800;">Simile</b></td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-style: italic;">"...the winter air lay cold and still, like death itself." / "neck vertebrae appeared as clearly as in an anatomy class."</td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Creates sharp visual and sensory comparisons, contrasting ancient mortality with modern medical clarity.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9800;">Situational Irony</b></td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-style: italic;">"The million-dollar CT scanner failed because of sand in a cooler fan &mdash; resolved by two cheap plastic fans."</td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Ironic contrast between ultra-sophisticated biomedical aerospace technology and a simple hardware malfunction solved with humble plastic fans.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9800;">Symbolism (Orion)</b></td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); font-style: italic;">"Above the tomb stood Orion &mdash; the soul of Osiris, watching over the boy king."</td>
          <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Symbolizes cosmic protection, divine blessing, and ancient Egypt's enduring spiritual eternity overlooking modern science.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 1.6: ARCHAEOLOGICAL GLOSSARY -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">1.6 Essential Archaeological &amp; Egyptology Glossary</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin: 16px 0;">
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #FF9800; padding: 10px 14px; border-radius: 4px;">
      <b style="color: #FF9800;">Pharaoh:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block;">The supreme monarch and religious ruler of ancient Egypt, revered as an earthly manifestation of the gods.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #FF9800; padding: 10px 14px; border-radius: 4px;">
      <b style="color: #FF9800;">CT Scan (Computed Tomography):</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block;">Medical diagnostic imaging capturing hundreds of narrow X-ray cross-sections to generate a three-dimensional virtual model.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #FF9800; padding: 10px 14px; border-radius: 4px;">
      <b style="color: #FF9800;">Sarcophagus:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block;">A heavy stone or outer wooden coffin adorned with sacred carvings, sculptures, and inscriptions.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #FF9800; padding: 10px 14px; border-radius: 4px;">
      <b style="color: #FF9800;">Ritual Resins:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block;">Aromatic tree saps, oils, and balms poured over mummies during ancient funeral ceremonies, which hardened rock-solid over millennia.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #FF9800; padding: 10px 14px; border-radius: 4px;">
      <b style="color: #FF9800;">Necropolis:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block;">A vast, ancient cemetery characterized by elaborate tomb monuments (literally 'City of the Dead').</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #FF9800; padding: 10px 14px; border-radius: 4px;">
      <b style="color: #FF9800;">Pall:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block;">A dark cloth spread over a coffin, hearse, or tomb; figuratively, a dark, gloomy cloud or oppressive atmosphere.</span>
    </div>
  </div>

  <!-- SECTION 1.7: STORY MILESTONES FLOW -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">1.7 Chronological Plot Milestones Flow</h2>
  <div style="background: rgba(255, 152, 0, 0.05); border: 1px dashed #FF9800; border-radius: 10px; padding: 16px; margin: 16px 0;">
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="color: #FFFFFF;"><b style="color: #FF9800;">Milestone 1:</b> 1323 BCE &bull; Sudden death of King Tut at age 19 &bull; Buried with gold treasures, botanical shrouds, and daily artifacts.</div>
      <div style="color: #FFFFFF;"><b style="color: #FF9800;">Milestone 2:</b> 1922 &bull; Howard Carter discovers intact tomb KV62 &bull; Hardened ritual resins &bull; Chiseling severing joints &bull; Reassembly on sand.</div>
      <div style="color: #FFFFFF;"><b style="color: #FF9800;">Milestone 3:</b> 1968 &bull; Anatomy professor X-rays mummy &bull; Discovers breastbone and front ribs missing beneath resin &bull; Mystery explodes.</div>
      <div style="color: #FFFFFF;"><b style="color: #FF9800;">Milestone 4:</b> Jan 5, 2005 (6:00 PM) &bull; Tut's mummy removed for first CT scan in history &bull; Eerie winds &bull; Fan failure &bull; Spare plastic fans.</div>
      <div style="color: #FFFFFF;"><b style="color: #FF9800;">Milestone 5:</b> Digital Resurrection &bull; 1,700 3D cross-sections show intact neck vertebrae and skull &bull; Dr. Hawass sleeps peacefully under Orion.</div>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: BOARD EXAM SOLUTIONS                       */
/* -------------------------------------------------------------------------- */

export const c11EngH4HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION HEADER -->
  <div style="background: rgba(255, 152, 0, 0.12); border-left: 5px solid #FF9800; padding: 12px 18px; border-radius: 4px; margin-bottom: 24px;">
    <h2 style="color: #FF9800; font-weight: bold; margin: 0; font-size: 20px;">
      BOARD EXAMINATION QUESTIONS &amp; ANSWERS &bull; DISCOVERING TUT: THE SAGA CONTINUES
    </h2>
    <span style="color: #FFCC80; font-size: 14px;">Section A: Extract Questions (1M) &bull; Section B: Short Answers (3M) &bull; Section C: Long Answers (6M) &bull; Section D: NCERT Official Solutions</span>
  </div>

  <!-- ========================================================================= -->
  <!-- SECTION A: EXTRACT-BASED QUESTIONS (1 MARK EACH)                           -->
  <!-- ========================================================================= -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 25px;">
    SECTION A: Extract-Based Objective Questions (1 Mark Each)
  </h2>

  <!-- EXTRACT 1 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 16px; margin: 18px 0;">
    <p style="font-style: italic; color: #F8FAFC; margin-top: 0; line-height: 1.6;">
      <b>Extract 1:</b> "He was just a teenager when he died. The last heir of a powerful family that had ruled Egypt and its empire for centuries, he was laid to rest laden with gold and eventually forgotten. Since the discovery of his tomb in 1922, the modern world has wondered about what happened to him, with murder being the most extreme possibility."
    </p>
    
    <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 10px;">
      <div>
        <b style="color: #FF9800;">Q1 (i): At what approximate age did the boy king Tutankhamun die?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> Tutankhamun died in his late teens, around 18 or 19 years of age.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q1 (ii): What dynastic position did Tut hold in ancient Egyptian history?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> He was the last royal heir of the illustrious 18th Dynasty that had ruled the Egyptian empire for centuries.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q1 (iii): In which year was Tutankhamun's tomb discovered, and by whom?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> His tomb was discovered in 1922 by the British archaeologist Howard Carter.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q1 (iv): What was considered the 'most extreme possibility' regarding Tut's mysterious demise?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> Murder or political assassination was considered the most extreme possibility.</span>
      </div>
    </div>
  </div>

  <!-- EXTRACT 2 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 16px; margin: 18px 0;">
    <p style="font-style: italic; color: #F8FAFC; margin-top: 0; line-height: 1.6;">
      <b>Extract 2:</b> "Carter really had little choice. If he hadn't cut the mummy free, thieves most certainly would have circumvented the guards and ripped it apart to remove the gold. In Tut's time the royals were fabulously wealthy, and they thought &mdash; or hoped &mdash; they could take their riches with them."
    </p>
    
    <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 10px;">
      <div>
        <b style="color: #FF9800;">Q2 (i): Why did Howard Carter believe he had 'little choice' but to chisel the mummy free?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> Because the ritual resins had cemented the mummy to the solid gold coffin, and leaving it intact would have invited thieves to ransack the tomb and destroy the mummy for its gold.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q2 (ii): What belief did the royals of ancient Egypt hold regarding their fabulous wealth?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> They believed they could take their material riches, precious jewelry, and daily luxuries into the eternal afterlife.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q2 (iii): What destructive method did Carter employ before resorting to chisels?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> He attempted to melt the hardened resins by placing the golden coffin in the blazing desert sun at 149 degrees Fahrenheit.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q2 (iv): What ethical criticism do modern Egyptologists level against Carter's actions?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> That in his haste to recover golden treasure, he permanently damaged and severed every major anatomical joint of the mummy.</span>
      </div>
    </div>
  </div>

  <!-- EXTRACT 3 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 16px; margin: 18px 0;">
    <p style="font-style: italic; color: #F8FAFC; margin-top: 0; line-height: 1.6;">
      <b>Extract 3:</b> "Amenhotep IV promoted the worship of the Aten, the sun disc, changed his name to Akhenaten, or 'servant of the Aten', and moved the religious capital from the old city of Thebes to the new city of Akhetaten, known now as Amarna. He further shocked the country by attacking Amun, a major god, smashing his images and closing his temples."
    </p>
    
    <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 10px;">
      <div>
        <b style="color: #FF9800;">Q3 (i): What deity did Amenhotep IV promote, and what name did he adopt?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> He promoted the worship of the Aten (the sun disc) and adopted the name <i>Akhenaten</i>, meaning 'servant of the Aten'.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q3 (ii): Where did Akhenaten relocate Egypt's religious capital?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> He moved the capital from ancient Thebes to the brand-new city of <i>Akhetaten</i> (modern Amarna).</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q3 (iii): How did Akhenaten shock the religious sentiments of the Egyptian population?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> By viciously attacking Amun (the supreme deity), smashing his idols, and shutting down his temples.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q3 (iv): How did Egyptologist Ray Johnson describe this period of Egyptian history?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> Ray Johnson described it as a horrific period where the ruling family was unraveling and <i>'Akhenaten went a little wacky'</i>.</span>
      </div>
    </div>
  </div>

  <!-- EXTRACT 4 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 16px; margin: 18px 0;">
    <p style="font-style: italic; color: #F8FAFC; margin-top: 0; line-height: 1.6;">
      <b>Extract 4:</b> "The million-dollar scanner had quit because of sand in a cooler fan. 'Curse of the pharaoh,' joked a guard nervously. Eventually the substitute fans worked well enough to finish the procedure. After checking that no data had been lost, the technicians turned Tut over to the workmen, who carried him back to his tomb."
    </p>
    
    <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 10px;">
      <div>
        <b style="color: #FF9800;">Q4 (i): Why did the sophisticated CT scanner suddenly quit during the scanning procedure?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> Because desert sand blown by the winter winds had infiltrated the cooling fan mechanism.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q4 (ii): What humorous yet nervous remark was made by a security guard when the machine stopped?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> The guard joked nervously, <i>"Curse of the pharaoh!"</i></span>
      </div>
      <div>
        <b style="color: #FF9800;">Q4 (iii): How was the technical glitch swiftly resolved by the engineers?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> They brought in two white plastic spare fans from a support trailer, plugged them in, and cooled the machine.</span>
      </div>
      <div>
        <b style="color: #FF9800;">Q4 (iv): How many digital cross-sectional X-ray images were captured by the CT scanner in total?</b><br>
        <span style="color: #FFFFFF;"><b>Answer:</b> Approximately 1,700 digital cross-sectional X-ray slices were recorded at 0.62-millimeter thickness.</span>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- SECTION B: SHORT ANSWER QUESTIONS (3 MARKS EACH | 40-50 WORDS)             -->
  <!-- ========================================================================= -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">
    SECTION B: Short Answer Questions (3 Marks Each | 40-50 Words)
  </h2>

  <!-- Q1 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q1: Describe the atmospheric and weather conditions in the Valley of the Kings on the evening of January 5, 2005.</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> The weather was ominous and turbulent. Blustery desert winds whipped up ghostly dust devils across the limestone cliffs. Dark-bellied clouds raced across the desert sky all day, veiling the stars in 'casket grey', creating a somber, supernatural atmosphere as Tut's mummy was moved.</p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q2: Why was Dr. Zahi Hawass anxious and unable to sleep prior to the CT scan?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Hawass was intensely worried because Tut's fragile mummy was in horrific physical condition due to Howard Carter's rough chiseling in 1922. The mummy's severed limbs and brittle bones made moving it for a high-precision CT scan an extremely high-risk operation.</p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q3: What discovery in the first coffin indicated the time of year when King Tut was buried?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> In the first coffin, Carter discovered a shroud adorned with wild celery, willow and olive leaves, lotus petals, and cornflowers. Because these specific botanical plants bloom exclusively in springtime in Egypt, it proved Tut was buried in March or April.</p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q4: Why were ritual resins used in mummification, and what problem did they pose to Carter?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Resins were poured as sacred anointing balms to preserve the royal corpse for eternity. Over 3,300 years, however, they had solidified like concrete, cementing Tut's mummy immovably to the solid gold bottom of the third coffin, resisting all attempts at melting.</p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q5: How did Howard Carter justify chiseling the mummy away from the golden coffin?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Carter argued that he had no alternative. Had he left the mummy intact, ruthless tomb robbers would have easily overwhelmed the guards, dismantled the tomb, and mutilated the royal corpse to rip off the priceless gold ornaments and solid gold coffin.</p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q6: What startling anatomical anomaly was discovered by an anatomy professor in 1968?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> In 1968, an anatomy professor X-rayed Tut's mummy and revealed that beneath the hardened chest resin, his breastbone (sternum) and front ribs were completely missing, fueling global speculation that Tut had suffered a fatal blow or been assassinated.</p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q7: How did archaeology change between the 1920s and the 21st century?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> In the 1920s, archaeology focused on collecting dazzling treasures and museum showpieces. Today, archaeology focuses on forensic facts &mdash; using non-invasive medical technology like CT scans and DNA mapping to reconstruct daily life, diseases, diet, and mysteries of death.</p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q8: What radical religious changes were enforced by Pharaoh Amenhotep IV (Akhenaten)?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Akhenaten abolished the centuries-old worship of Amun, smashed his statues, and closed his temples. He instituted the exclusive worship of the Aten (sun disc), renamed himself 'servant of the Aten', and relocated the royal capital to the new city of Akhetaten (Amarna).</p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q9: Why did the young king change his name from Tutankhaten to Tutankhamun?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> His original name Tutankhaten meant 'living image of Aten'. To reconcile with the orthodox priesthood and restore national harmony after Akhenaten's chaos, he changed his name to Tutankhamun ('living image of Amun') and revived the traditional religion.</p>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q10: What what everyday items and luxury goods were buried alongside King Tut, and why?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Tut was interred with board games, bronze razors, linen garments, cases of food, and wine. The ancient Egyptians believed the afterlife mirrored earthly existence and that the resurrected pharaoh would require physical sustenance and entertainment for eternity.</p>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q11: What technical glitch interrupted the CT scan on January 5, 2005, and how was it resolved?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Airborne desert sand clogged the scanner's cooling fan, prompting a guard to joke about the pharaoh's curse. The crisis was quickly averted when technicians deployed two spare white plastic fans from a support trailer, enabling the scan to finish smoothly.</p>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px; margin: 14px 0;">
    <b style="color: #FF9800; font-size: 16px;">Q12: What what key anatomical conclusions were drawn from the 2005 CT scan of King Tut?</b>
    <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> The CT scan generated 1,700 digital cross-sections demonstrating intact neck vertebrae, hand bones, and pelvic structure. It definitively proved that Tutankhamun had not suffered a crushing head blow or skull fracture, easing rumors of blunt-force assassination.</p>
  </div>

  <!-- ========================================================================= -->
  <!-- SECTION C: LONG ANSWER QUESTIONS (6 MARKS EACH | 120-150 WORDS)            -->
  <!-- ========================================================================= -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">
    SECTION C: Long Answer / Thematic Questions (6 Marks Each | 120-150 Words)
  </h2>

  <!-- LONG QUESTION 1 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 18px; margin: 18px 0;">
    <h3 style="color: #FF9800; margin-top: 0; font-size: 17px;">
      Q1: Compare and contrast Howard Carter's archaeological methods in 1922 with Dr. Zahi Hawass's scientific investigation in 2005.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75; font-size: 15.5px;">
      <p><b>1. Introduction:</b> The disparity between Howard Carter's 1922 excavation and Dr. Zahi Hawass's 2005 CT scanning reflects nearly a century of technological and ethical evolution in the field of archaeology.</p>
      
      <p><b>2. Core Thematic Analysis:</b>
      <br>&bull; <b style="color: #FF9800;">Carter's Treasure-Hunting Approach (1922):</b> Carter operated during an era when archaeology was synonymous with antiquities collection. When hardened ritual resins cemented the mummy to the solid gold coffin, Carter used sun-heat and eventually heavy chisels to sever every major joint. While his discovery yielded unmatched golden treasures, it caused catastrophic, irreversible damage to the biological corpse.
      <br>&bull; <b style="color: #FF9800;">Hawass's Forensic Science Approach (2005):</b> In contrast, Dr. Hawass treated Tut's mummy with reverent medical care as an invaluable human record. Utilizing a portable multi-slice CT scanner donated by Siemens, his team captured 1,700 cross-sectional digital X-rays without inflicting a scratch. His goal was not treasure, but reconstructing biological age, health, and causes of mortality.</p>
      
      <p><b>3. Concluding Takeaway:</b> Thus, modern archaeology has transformed from an invasive quest for royal gold into a respectful, high-tech forensic investigation of human history.</p>
    </div>
  </div>

  <!-- LONG QUESTION 2 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 18px; margin: 18px 0;">
    <h3 style="color: #FF9800; margin-top: 0; font-size: 17px;">
      Q2: Detail the religious and political turmoil triggered by Akhenaten and how King Tutankhamun restored balance to the Egyptian empire.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75; font-size: 15.5px;">
      <p><b>1. Introduction:</b> The late 18th Dynasty witnessed one of the most tumultuous upheavals in Egyptian antiquity, brought on by the fanaticism of Pharaoh Amenhotep IV, famously known as Akhenaten.</p>
      
      <p><b>2. Core Thematic Analysis:</b>
      <br>&bull; <b style="color: #FF9800;">Akhenaten's Heresy:</b> Upon taking power, Amenhotep IV outlawed Egypt's supreme deity, Amun. He smashed religious statues, closed temples, and enforced monotheistic worship of the Aten (sun disc). He renamed himself Akhenaten ('servant of the Aten') and moved the empire's capital from Thebes to the newly constructed desert city of Akhetaten (Amarna), alienating the powerful priesthood and throwing society into chaos.
      <br>&bull; <b style="color: #FF9800;">Tutankhamun's Restoration:</b> Following Akhenaten's demise and the brief rule of Smenkhkare, the boy pharaoh Tutankhaten ascended the throne. Demonstrating extraordinary wisdom, he renamed himself Tutankhamun ('living image of Amun'), reopened the desecrated temples, reinstated the traditional priesthood, and moved the administration back to sacred Thebes.</p>
      
      <p><b>3. Concluding Takeaway:</b> Though he died young, Tutankhamun's legacy lies in rescuing his nation from ideological extremism and restoring spiritual stability.</p>
    </div>
  </div>

  <!-- LONG QUESTION 3 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 18px; margin: 18px 0;">
    <h3 style="color: #FF9800; margin-top: 0; font-size: 17px;">
      Q3: Analyze the ancient Egyptian concept of life after death as evidenced by the treasures and artifacts interred in King Tut's tomb.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75; font-size: 15.5px;">
      <p><b>1. Introduction:</b> Ancient Egyptian civilization was profoundly shaped by its intricate eschatology &mdash; the firm philosophical conviction that physical death was merely a doorway to an eternal, tangible afterlife.</p>
      
      <p><b>2. Core Thematic Analysis:</b>
      <br>&bull; <b style="color: #FF9800;">The Imperative of Mummification:</b> Egyptians believed that the soul (the <i>Ka</i> and <i>Ba</i>) required an intact physical vessel to recognize and inhabit in the underworld. Hence, mummification was conducted with complex ritual resins and sacred amulets to grant the body incorruptibility.
      <br>&bull; <b style="color: #FF9800;">Provisions for Eternity:</b> Carter's team was astonished to find not only magnificent golden jewelry and the beaten gold death mask, but mundane everyday objects: board games, bronze razors, linen undergarments, and cases of food and wine. The royals genuinely believed the deceased pharaoh would awaken in the next world needing identical comforts, pleasures, and daily necessities as in life.</p>
      
      <p><b>3. Concluding Takeaway:</b> The dazzling artifacts of KV62 were not vanity exhibits, but sacred equipment designed to sustain an immortal pharaoh across eternity.</p>
    </div>
  </div>

  <!-- LONG QUESTION 4 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 18px; margin: 18px 0;">
    <h3 style="color: #FF9800; margin-top: 0; font-size: 17px;">
      Q4: How does the narrative explore the tension between ancient superstitious mythology ('The Pharaoh's Curse') and modern scientific inquiry?
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75; font-size: 15.5px;">
      <p><b>1. Introduction:</b> Ever since Lord Carnarvon's untimely death shortly after Carter's 1922 discovery, the global popular imagination has been obsessed with the myth of the 'Pharaoh's Curse' &mdash; that misfortune pursues those who disturb royal tombs.</p>
      
      <p><b>2. Core Thematic Analysis:</b>
      <br>&bull; <b style="color: #FF9800;">Atmospheric Superstition:</b> On January 5, 2005, the eerie desert winds, dancing dust devils, and dark-bellied clouds in the Valley of the Kings seemed to validate superstitious dread. When the multimillion-dollar CT scanner abruptly broke down, a nervous security guard blurted, <i>"Curse of the pharaoh!"</i>
      <br>&bull; <b style="color: #FF9800;">Rational Scientific Resolution:</b> Rather than succumbing to supernatural panic, the engineers diagnosed a simple physical cause: airborne sand in the cooling fans. Two ordinary replacement plastic fans quickly restored operations. Science dispelled the curse, producing 1,700 high-precision cross-sections that answered historical questions without harm.</p>
      
      <p><b>3. Concluding Takeaway:</b> The chapter eloquently demonstrates that scientific rationality, grounded in empirical technology and respect, replaces fear and superstition with enlightening truth.</p>
    </div>
  </div>

  <!-- LONG QUESTION 5 -->
  <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255, 152, 0, 0.35); border-radius: 8px; padding: 18px; margin: 18px 0;">
    <h3 style="color: #FF9800; margin-top: 0; font-size: 17px;">
      Q5: "The saga continues..." Explain the significance of the chapter's title. Why does King Tutankhamun continue to captivate the modern world?
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75; font-size: 15.5px;">
      <p><b>1. Introduction:</b> The title <i>'Discovering Tut: The Saga Continues'</i> emphasizes that understanding ancient history is not a closed book, but an ongoing, dynamic scientific investigation.</p>
      
      <p><b>2. Core Thematic Analysis:</b>
      <br>&bull; <b style="color: #FF9800;">Evolving Chapters of Discovery:</b> The saga began in antiquity with Tut's hurried burial in 1323 BCE; was reignited by Howard Carter's sensational discovery in 1922; deepened with the 1968 anatomy X-rays revealing missing ribs; and reached a modern diagnostic milestone with the 2005 CT scan. Each epoch reveals fresh answers while unveiling new enigmas.
      <br>&bull; <b style="color: #FF9800;">Universal Human Fascination:</b> Tutankhamun captivates humanity because he embodies the poignant vulnerability of youth intertwined with absolute imperial power, buried with golden splendor, and surrounded by unresolved mysteries of life, disease, and death.</p>
      
      <p><b>3. Concluding Takeaway:</b> As long as medical, genetic, and forensic technologies continue to advance, the saga of the boy king will continue to evolve and enthrall generations.</p>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- SECTION D: NCERT OFFICIAL TEXTBOOK EXERCISE SOLUTIONS                      -->
  <!-- ========================================================================= -->
  <h2 style="color: #FF9800; font-weight: bold; border-bottom: 2px solid #FF9800; padding-bottom: 6px; margin-top: 30px;">
    SECTION D: NCERT Official Textbook Exercise Solutions
  </h2>

  <h3 style="color: #FF9800; font-weight: bold; margin-top: 20px;">Understanding the Text</h3>

  <div style="display: flex; flex-direction: column; gap: 16px; margin: 16px 0;">
    <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">Q1: Give reasons for the following: (i) King Tut's body has been subjected to repeated scrutiny.</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> King Tut's body has undergone repeated scrutiny because he was the last royal scion of a powerful dynasty that ruled Egypt for centuries, and he died unexpectedly in his late teens under deeply mysterious circumstances. The fabulous wealth of his undisturbed tomb, combined with speculation regarding murder, has driven scientists and historians to examine his remains across successive decades using increasingly advanced diagnostic technologies.</p>
    </div>

    <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">Q1 (ii): Howard Carter's investigation was resented.</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Carter's investigation was resented because his methods were intrusive, destructive, and driven primarily by treasure acquisition. When the ritual resins hardened, Carter placed the coffin under the scorching sun and subsequently used heavy chisels to hack away the resins, permanently severing nearly every major joint of the mummy's body, irreparably damaging the irreplaceable biological artifact.</p>
    </div>

    <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">Q1 (iii): Carter had to chisel away the solidified resins to raise the king's remains.</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Carter had to resort to chiseling because the ritual anointing resins poured during the funeral rites had hardened into a rock-solid mass over 3,300 years, cementing Tut's mummy firmly to the bottom of the solid gold coffin. Heating the coffin to 149 degrees Fahrenheit in the desert sun failed to soften the resins, leaving chiseling as his only means to extract the mummy before thieves could desecrate it.</p>
    </div>

    <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">Q1 (iv): Tut's body was buried along with gilded treasures.</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Tut's body was buried with dazzling gilded treasures because ancient Egyptian royalty possessed unfathomable wealth and believed they could carry their material possessions into the afterlife. Furthermore, gold was regarded as the divine, incorruptible flesh of the gods, believed to guarantee eternal resurrection.</p>
    </div>

    <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">Q1 (v): The boy king changed his name from Tutankhaten to Tutankhamun.</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Tutankhaten ('living image of Aten') had been named in honor of the sun disc deity promoted by the heretic king Akhenaten. Upon ascending the throne, the boy king wished to repudiate Akhenaten's religious turmoil, reconcile with the traditional clergy, and revive the supreme god Amun, renaming himself Tutankhamun ('living image of Amun').</p>
    </div>
  </div>

  <h3 style="color: #FF9800; font-weight: bold; margin-top: 24px;">Talking About the Text</h3>

  <div style="display: flex; flex-direction: column; gap: 16px; margin: 16px 0;">
    <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">Q1: Scientific intervention is necessary to unearth buried mysteries. Discuss.</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> Scientific intervention is vital because traditional historical records are frequently distorted by political propaganda, royal censorship, or religious bias. Advanced non-invasive tools &mdash; such as computed tomography (CT), carbon-14 dating, isotopic bone analysis, and ancient DNA mapping &mdash; uncover unvarnished empirical truths regarding age, diet, genetic lineage, epidemics, and causes of death, enabling humanity to reconstruct genuine history without destroying ancient physical heritage.</p>
    </div>

    <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF9800; padding: 12px 16px; border-radius: 4px;">
      <b style="color: #FF9800; font-size: 16px;">Q2: Advanced technology gives us conclusive evidence of past events. Discuss.</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF;"><b>Answer:</b> While advanced technology provides unprecedented high-resolution data &mdash; such as ruling out skull fractures in King Tut and revealing missing ribcages &mdash; it does not always yield absolute, conclusive narrative certainty. Technology provides physical forensic facts (e.g., bone density, age estimates, fractures), but interpreting the psychological motives, political conspiracies, and exact circumstances surrounding those physical anomalies still requires nuanced historical scholarship, contextual evidence, and critical analysis.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: INTERACTIVE SMART QUIZ                     */
/* -------------------------------------------------------------------------- */

export const c11EngH4Mcqs = [
  // --- TIER 1: BASIC RECALL, DISCOVERY, DATES & DYNASTIC FACTS (Q1 to Q8) ---
  {
    id: "c11-eng-h4-mcq-1",
    question: "On which date was King Tutankhamun's mummy taken for the world's first CT scan of its kind?",
    options: [
      "A):   January 5, 2005",
      "B):   November 4, 1922",
      "C):   December 25, 1968",
      "D):   March 15, 2001"
    ],
    correctAnswer: "a",
    explanation: "At 6:00 PM on January 5, 2005, King Tut's mummy was removed from its tomb in the Valley of the Kings to undergo a CT scan."
  },
  {
    id: "c11-eng-h4-mcq-2",
    question: "In which year and by whom was King Tutankhamun's intact tomb originally discovered?",
    options: [
      "A):   1968 by an anatomy professor",
      "B):   1922 by British archaeologist Howard Carter",
      "C):   2005 by Dr. Zahi Hawass",
      "D):   1898 by Lord Carnarvon"
    ],
    correctAnswer: "b",
    explanation: "British archaeologist Howard Carter discovered King Tut's tomb (KV62) in 1922 after years of fruitless searching."
  },
  {
    id: "c11-eng-h4-mcq-3",
    question: "At approximately what age did King Tutankhamun pass away?",
    options: [
      "A):   Early childhood, around 9 years old",
      "B):   Middle age, around 40 years old",
      "C):   Late teens, around 18 or 19 years old",
      "D):   Old age, around 70 years old"
    ],
    correctAnswer: "c",
    explanation: "King Tutankhamun died mysteriously while still in his late teens, having ruled Egypt for approximately nine years."
  },
  {
    id: "c11-eng-h4-mcq-4",
    question: "What position did Dr. Zahi Hawass hold during the 2005 CT scan of King Tut?",
    options: [
      "A):   President of the National Geographic Society",
      "B):   Chief Radiology Technician at Siemens Medical",
      "C):   Professor of Anatomy at Cairo University",
      "D):   Secretary General of Egypt's Supreme Council of Antiquities"
    ],
    correctAnswer: "d",
    explanation: "Dr. Zahi Hawass was the Secretary General of Egypt's Supreme Council of Antiquities supervising the operation."
  },
  {
    id: "c11-eng-h4-mcq-5",
    question: "What floral evidence in the first coffin indicated that Tutankhamun had been buried in March or April?",
    options: [
      "A):   Dried roses and desert marigolds",
      "B):   Willow, olive leaves, wild celery, lotus petals, and cornflowers",
      "C):   Fresh jasmine and palm leaves",
      "D):   Cactus blossoms and dried wheat stalks"
    ],
    correctAnswer: "b",
    explanation: "Olive leaves, willow, wild celery, lotus petals, and cornflowers bloom in springtime in Egypt, establishing a March or April burial."
  },
  {
    id: "c11-eng-h4-mcq-6",
    question: "What ancient constellation shone directly above Tut's tomb entrance, known as the soul of Osiris?",
    options: [
      "A):   Ursa Major",
      "B):   Cassiopeia",
      "C):   Orion",
      "D):   The Southern Cross"
    ],
    correctAnswer: "c",
    explanation: "Orion &mdash; which ancient Egyptians revered as the soul of Osiris, god of the afterlife &mdash; stood directly over the tomb."
  },
  {
    id: "c11-eng-h4-mcq-7",
    question: "How deep underground was King Tut's rock-cut tomb carved in the Valley of the Kings?",
    options: [
      "A):   26 feet underground",
      "B):   50 feet underground",
      "C):   12 feet underground",
      "D):   100 feet underground"
    ],
    correctAnswer: "a",
    explanation: "Tut's tomb (KV62) was carved 26 feet underground into the limestone cliffs of the Valley of the Kings."
  },
  {
    id: "c11-eng-h4-mcq-8",
    question: "Which royal dynasty did King Tutankhamun belong to as its final ruling heir?",
    options: [
      "A):   The 4th Dynasty",
      "B):   The 12th Dynasty",
      "C):   The Ptolemaic Dynasty",
      "D):   The 18th Dynasty"
    ],
    correctAnswer: "d",
    explanation: "Tut was the last pharaoh of the powerful 18th Dynasty that had ruled Egypt and its empire for centuries."
  },

  // --- TIER 2: TECHNICAL, FORENSIC, CARTER'S METHODS & GLITCHES (Q9 to Q15) ---
  {
    id: "c11-eng-h4-mcq-9",
    question: "Why was Howard Carter unable to separate King Tut's mummy from the solid gold innermost coffin?",
    options: [
      "A):   The coffin was locked with an unbreakable bronze padlock",
      "B):   The mummy had swollen and wedged tightly against the sides",
      "C):   The ritual anointing resins had hardened like cement",
      "D):   The golden lid was welded shut by ancient priests"
    ],
    correctAnswer: "c",
    explanation: "Ritual resins poured during funeral rites had solidified over thousands of years, cementing the mummy to the bottom of the golden coffin."
  },
  {
    id: "c11-eng-h4-mcq-10",
    question: "To what temperature did Carter heat the golden coffin in the blazing desert sun in an attempt to soften the resins?",
    options: [
      "A):   149 degrees Fahrenheit (65 degrees Celsius)",
      "B):   100 degrees Fahrenheit",
      "C):   200 degrees Fahrenheit",
      "D):   120 degrees Fahrenheit"
    ],
    correctAnswer: "a",
    explanation: "Carter placed the coffin outside in blistering desert heat up to 149 degrees Fahrenheit (65 degrees Celsius), but the resins never budged."
  },
  {
    id: "c11-eng-h4-mcq-11",
    question: "What startling diagnostic fact did an anatomy professor discover about Tut's mummy in 1968?",
    options: [
      "A):   His breastbone (sternum) and front ribs were completely missing",
      "B):   Both of his legs were fractured at the knee",
      "C):   His skull contained a poison-tipped arrow head",
      "D):   He had an extra vertebrae in his spinal column"
    ],
    correctAnswer: "a",
    explanation: "In 1968, X-rays revealed that beneath the hardened chest resin, Tut's breastbone and front ribs were completely missing."
  },
  {
    id: "c11-eng-h4-mcq-12",
    question: "Who donated the portable multi-slice CT scanner used to examine King Tut in 2005?",
    options: [
      "A):   The British Museum and Oxford University",
      "B):   The Egyptian Ministry of Defence",
      "C):   The National Geographic Society and Siemens",
      "D):   The World Health Organization"
    ],
    correctAnswer: "c",
    explanation: "The sophisticated mobile CT scanner was manufactured and donated by the National Geographic Society and Siemens."
  },
  {
    id: "c11-eng-h4-mcq-13",
    question: "What caused the million-dollar CT scanner to abruptly quit during the scanning procedure?",
    options: [
      "A):   A severe power blackout across Luxor city",
      "B):   The digital hard drives ran out of storage space",
      "C):   The X-ray tube overheated and burned out",
      "D):   Airborne desert sand infiltrated the cooling fan mechanism"
    ],
    correctAnswer: "d",
    explanation: "Fine desert sand carried by the winds jammed the cooler fan mechanism, causing the scanner to halt temporarily."
  },
  {
    id: "c11-eng-h4-mcq-14",
    question: "How did the radiology technicians resolve the fan failure to successfully finish the scan?",
    options: [
      "A):   They poured ice water directly over the electronic circuits",
      "B):   They used two white plastic substitute fans from a support trailer",
      "C):   They waited until morning for the desert wind to subside",
      "D):   They hand-cranked the CT scanner mechanism manually"
    ],
    correctAnswer: "b",
    explanation: "Technicians brought in two white plastic spare fans from a trailer, plugged them in, and finished the procedure without data loss."
  },
  {
    id: "c11-eng-h4-mcq-15",
    question: "How many digital cross-sectional X-ray slices did the CT scanner generate of King Tut's body?",
    options: [
      "A):   500 slices",
      "B):   1,700 slices at 0.62-millimeter thickness",
      "C):   3,000 slices",
      "D):   10,000 slices"
    ],
    correctAnswer: "b",
    explanation: "The scanner recorded 1,700 digital cross-sectional X-ray images at 0.62-millimeter slices to construct a three-dimensional model."
  },

  // --- TIER 3: INFERENCE, AMARNA REVOLUTION, RELIGION & PHILOSOPHY (Q16 to Q20) ---
  {
    id: "c11-eng-h4-mcq-16",
    question: "Which deity did Pharaoh Amenhotep IV promote, leading to his controversial name change to Akhenaten?",
    options: [
      "A):   Osiris, god of the underworld",
      "B):   Anubis, the jackal-headed god of embalming",
      "C):   Horus, the falcon god",
      "D):   The Aten, the radiant sun disc"
    ],
    correctAnswer: "d",
    explanation: "Amenhotep IV enforced the exclusive worship of the Aten (the sun disc) and changed his own name to Akhenaten ('servant of the Aten')."
  },
  {
    id: "c11-eng-h4-mcq-17",
    question: "Where did Akhenaten move Egypt's religious capital from ancient Thebes?",
    options: [
      "A):   Alexandria",
      "B):   Memphis",
      "C):   Giza",
      "D):   Akhetaten (modern Amarna)"
    ],
    correctAnswer: "d",
    explanation: "Akhenaten shocked Egypt by moving the capital to the brand-new desert city of Akhetaten, known today as Amarna."
  },
  {
    id: "c11-eng-h4-mcq-18",
    question: "What what was the literal meaning of King Tut's restored name, 'Tutankhamun'?",
    options: [
      "A):   Living image of Amun",
      "B):   Servant of the sun disc",
      "C):   Son of Osiris",
      "D):   Conqueror of the Golden Empire"
    ],
    correctAnswer: "a",
    explanation: "Tutankhamun literally translates to 'Living Image of Amun', signifying the pharaoh's role as the earthly embodiment of supreme god Amun."
  },
  {
    id: "c11-eng-h4-mcq-19",
    question: "Which literary device is employed in the phrase: 'veiling the stars in casket grey'?",
    options: [
      "A):   Simile",
      "B):   Metaphor",
      "C):   Hyperbole",
      "D):   Oxymoron"
    ],
    correctAnswer: "b",
    explanation: "The direct figurative comparison of the gloomy twilight sky to the grey satin fabric of a burial casket is a evocative metaphor."
  },
  {
    id: "c11-eng-h4-mcq-20",
    question: "What what major forensic conclusion did the 2005 CT scan establish regarding King Tut's skull?",
    options: [
      "A):   There was a deep, fatal depression caused by a bronze battle-axe",
      "B):   The skull was completely crushed by Carter's chisels",
      "C):   There was no sign of a crushing blow or fatal cranial fracture",
      "D):   The skull was artificial, made of painted terracotta"
    ],
    correctAnswer: "c",
    explanation: "The high-resolution digital scans proved that Tut's skull was intact without signs of a fatal blunt-force cranial blow."
  }
];
