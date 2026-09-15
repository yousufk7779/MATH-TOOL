// Class 11 English (Hornbill) - Chapter 10: Silk Road by Nick Middleton
// Standardized for JKBOSE & CBSE / NCERT Curriculum
// Gold Standard 3-Tab Architecture & Deep High-Altitude Travelogue Guide
// Theme Color: #8D6E63 (Earthy Brown / Himalayan Mountain Odyssey Theme)

const themeColor = "#8D6E63";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11EngH10HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & TRAVELOGUE SNAPSHOT CARD -->
  <div style="background: rgba(141, 110, 99, 0.08); border: 1.5px solid #8D6E63; border-radius: 12px; padding: 18px; margin-bottom: 25px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <h2 class="text-center" style="color: #8D6E63; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">📖 Quick Glossary &amp; Essential Travelogue Snapshot</h2>
    <p class="text-center" style="color: #D7CCC8; margin: 0 0 16px 0; font-size: 14.5px;">Hornbill Prose &bull; Chapter 10: Silk Road &bull; Nick Middleton</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8D6E63; border-radius: 6px;">
        <b style="color: #8D6E63; font-size: 16px; display: block; margin-bottom: 4px;">1. Form &amp; Genre:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">High-Altitude Travel Narrative &amp; Geographical Memoir. Chronicles an arduous, humorous, and culturally rich journey across the ancient Silk Road route on the Tibetan Plateau toward Mount Kailash to perform the sacred <i>Kora</i>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8D6E63; border-radius: 6px;">
        <b style="color: #8D6E63; font-size: 16px; display: block; margin-bottom: 4px;">2. Central Pilgrimage Quest:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Undertaking the sacred circumambulation (<b>Kora</b>) of <b>Mount Kailash</b> &mdash; revered equally in Hinduism, Buddhism, Jainism, and Bon &mdash; overcoming altitude sickness, extreme cold, and cultural disorientation.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8D6E63; border-radius: 6px;">
        <b style="color: #8D6E63; font-size: 16px; display: block; margin-bottom: 4px;">3. The Key Companions:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Tsetan</b> (experienced, resourceful Tibetan driver-mechanic), <b>Daniel</b> (translator en route to Lhasa), and <b>Norbu</b> (an English-speaking Tibetan scholar from the Chinese Academy of Social Sciences in Beijing).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8D6E63; border-radius: 6px;">
        <b style="color: #8D6E63; font-size: 16px; display: block; margin-bottom: 4px;">4. Stark Realism vs Romantic Myth:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Contrasts the mystical legends of <b>Lake Manasarovar</b> and Mount Kailash with the grim, garbage-strewn reality of <b>Hor</b> and the decrepit, windblown desolation of <b>Darchen</b>.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 2.1: ABOUT THE AUTHOR -->
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px; margin-top: 30px;">2.1 About the Author &mdash; Nick Middleton</h2>
  <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 16px; margin: 16px 0; border: 1px solid rgba(255,255,255,0.1);">
    <p><b>Nick Middleton</b> (born 1960) is an internationally acclaimed British physical geographer, Oxford University academic, Fellow of St Anne's College, environmental consultant, and intrepid explorer. He has authored over thirty authoritative volumes on geography, climate extremes, and natural disasters, including <i>Going to Extremes</i>, <i>Surviving Extremes</i>, and <i>Rivers: A Very Short Introduction</i>.</p>
    <p style="margin-top: 10px;">As a professional geographer, Middleton brings a keen scientific eye to his travel writing. Rather than romanticizing the mystical Orient with exotic stereotypes, he renders the harsh physical geography of Tibet &mdash; its atmospheric pressure differentials, permafrost, scree slopes, and biological adaptations &mdash; with self-deprecating British humor, clinical geographic accuracy, and deep human empathy.</p>
  </div>

  <!-- SECTION 2.2: DETAILED THEMATIC EXPOSITION -->
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px; margin-top: 30px;">2.2 Deep Geographical &amp; Narrative Analysis</h2>

  <h3 style="color: #8D6E63; margin-top: 20px;">(i) Departure from Ravu &amp; The Tibetan Plateau Landscape</h3>
  <p>The travelogue opens on a pristine dawn at <b>Ravu</b>, where Nick prepares to embark on the challenging trek toward Mount Kailash. His host, <b>Lhamo</b>, gifts him a long-sleeved sheepskin coat &mdash; the traditional heavy attire worn by Tibetan pastoral nomads (<i>drokbas</i>) &mdash; to protect against the sub-zero Himalayan winds. Accompanied by <b>Tsetan</b>, an expert Tibetan driver whose four-wheel-drive vehicle handles treacherous mountainous terrain, and <b>Daniel</b>, an English-speaking companion returning to Lhasa, they set off across the plateau.</p>
  <p style="margin-top: 10px;">As they ascend onto the rolling highlands, the geography unfolds with stark grandeur. Middleton observes wild herds of <b>Kyang</b> (Tibetan wild asses) galloping in synchronized formation across the arid grasslands, kicking up colossal plumes of golden dust. Solitary nomad families live in dark tents fashioned from woven yak hair, guarded by fearsome <b>Tibetan Mastiffs</b>.</p>
  <p style="margin-top: 10px;">These massive black dogs &mdash; revered in ancient history as guard dogs for imperial Chinese courts &mdash; display ferocious territorial aggression. Spotting the approaching vehicle, they charge headlong like explosive projectiles, barking thunderously with enormous jaws and running alongside the car for hundreds of meters before retreating into their pasture perimeter.</p>

  <h3 style="color: #8D6E63; margin-top: 20px;">(ii) The High Passes: Snowdrifts &amp; Engineering Improvisation</h3>
  <p>The journey climbs through sharp switchbacks and dizzying elevations. At <b>5,210 meters</b>, atmospheric pressure drops precipitously. The vehicle begins to labor; the thin air starves the engine of oxygen, and Middleton suffers from a throbbing high-altitude headache. The fuel tank hisses violently when Tsetan loosens the cap to release expanding pressurized vapors.</p>
  <p style="margin-top: 10px;">Suddenly, the road is completely barricaded by an impassable sheet of <b>frozen snow and ice</b> spanning a steep mountain curve. A sheer drop plunges into the valley below. Tsetan displays remarkable mountain ingenuity: instead of risking a slide down the abyss, he shovels handfuls of coarse dirt, dust, and gravel from the mountain slope across the glistening ice, creating a textured surface that provides traction for the tires. Slowly, with masterly precision, Tsetan steers the vehicle across the treacherous glaze.</p>
  <p style="margin-top: 10px;">They reach the summit of the pass at an altitude of <b>5,515 meters</b>. In accordance with ancient Buddhist tradition, the summit is marked by a sacred <b>cairn of rocks</b> adorned with tattered prayer flags and white silk scarves (*katas*). Tsetan and the passengers circumambulate the cairn in a clockwise direction to ensure safe passage before descending the perilous northern slopes.</p>

  <h3 style="color: #8D6E63; margin-top: 20px;">(iii) Hor: The Shattered Illusion of Lake Manasarovar</h3>
  <p>By late afternoon, the travelers arrive at <b>Hor</b>, an ancient settlement situated along the historic East-West trade route on the shores of sacred <b>Lake Manasarovar</b>. Here, Daniel bids farewell, hitching a ride on a passing commercial transport truck toward Lhasa.</p>
  <p style="margin-top: 10px;">Middleton presents a devastating, unvarnished contrast between mythic spiritual lore and grim ecological reality. Classical Hindu and Buddhist scriptures celebrate Lake Manasarovar as the supreme spiritual cradle of the four great sacred Asian rivers &mdash; the Indus, the Ganges, the Sutlej, and the Brahmaputra (though scientifically, only the Sutlej genuinely originates from the lake, while the headwaters of the others rise near Mount Kailash).</p>
  <p style="margin-top: 10px;">However, the town of <b>Hor</b> itself is an unspeakably grim, dust-choked eyesore. Devoid of vegetation, it sits amid years of uncollected urban debris &mdash; rusting metal cans, shattered glass bottles, and windblown plastic refuse littered haphazardly across the barren gravel. Middleton waits in Hor's lone, dilapidated cafe &mdash; a crude concrete room staffed by a Chinese youth who wipes tables with a grease-stained rag &mdash; while Tsetan repairs two punctured tires using water from a roadside bucket.</p>

  <h3 style="color: #8D6E63; margin-top: 20px;">(iv) Darchen &amp; The Nocturnal Respiratory Crisis</h3>
  <p>They reach <b>Darchen</b>, the traditional staging post for Mount Kailash pilgrims, around 10:30 p.m. Situated at an altitude of over 4,700 meters, Darchen proves bitterly cold, windy, and austere.</p>
  <p style="margin-top: 10px;">That night, Middleton suffers a terrifying medical emergency caused by acute <b>high-altitude pulmonary congestion</b>. His nasal passages are blocked; breathing through his mouth causes his throat to become raw, raspy, and parched. Most alarmingly, whenever he drifts toward sleep, his chest tightens and his subconscious breathing ceases (*sleep apnea* triggered by hypoxic atmospheric pressure), forcing him to gasp awake in terror. Fearing that falling asleep might prove fatal, the exhausted geographer spends the entire night sitting upright against his pillow, struggling for breath.</p>
  <p style="margin-top: 10px;">The next morning, Tsetan takes him to the <b>Darchen Medical College</b>. The facility resembles an austere monastery rather than a hospital. The Tibetan physician &mdash; dressed not in a sterile white lab coat, but in a thick traditional woolen tunic and a fur-trimmed cap &mdash; performs the classical Tibetan diagnostic ritual of feeling the pulses in Middleton's wrists. He diagnoses him with acute cold and high-altitude reaction, prescribing a 5-day regimen of traditional <b>Tibetan herbal medicine</b>: brown herbal pellets packaged in hand-folded paper packets that resemble cinnamon powder and pellets of dried dung. Middleton consumes them religiously in warm water; remarkably, the remedy relieves his sinuses, and that night, he sleeps peacefully like a log.</p>

  <h3 style="color: #8D6E63; margin-top: 20px;">(v) Desolation Turned to Camaraderie: Meeting Norbu</h3>
  <p>Once healthy, Middleton confronts a demoralizing reality: <b>Darchen is virtually deserted</b>. Having arrived early in the pilgrimage season, he finds no other travelers or international tourists. The dusty town is cluttered with heaps of garbage, barking stray dogs, and decrepit shanties. To make matters worse, Tsetan departs back to Lhasa, leaving Middleton isolated. The prospect of performing the solitary, 54-kilometer high-altitude <i>Kora</i> around Mount Kailash alone in sub-zero terrain feels overwhelming and hazardous.</p>
  <p style="margin-top: 10px;">While nursing his frustration over black tea in Darchen's only functional cafe, Middleton notices a man reading an English novel. Striking up a conversation, he meets <b>Norbu</b>, an ethnic Tibetan scholar employed at the <b>Chinese Academy of Social Sciences in Beijing</b>. Norbu has spent years writing academic research monographs on the religious significance of the Kailash <i>Kora</i> in Buddhist literature, yet had never actually set foot on the mountain to perform the physical ritual himself.</p>
  <p style="margin-top: 10px;">Neither Middleton nor Norbu fits the stereotype of the devout, self-abnegating ascetic. Norbu is rotund, out of shape, and comical, cheerfully declaring that his generous belly was not designed for the grueling ritual of prostrations across rocky scree: <i>"It's too much work!"</i> he laughs. Instead, the pragmatic scholar and the physical geographer form a delighted alliance: they decide to hire a pair of yaks to transport their luggage and undertake the sacred Kailash <i>Kora</i> together as intellectual companions, turning isolation into warm, humorous camaraderie.</p>

  <!-- SECTION 2.3: MASTER COMPARISON MATRIX -->
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px; margin-top: 35px;">2.3 Master Comparison Matrix: Sacred Myth vs Ground Reality</h2>

  <div style="overflow-x: auto; margin: 20px 0;" class="table-container">
    <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #8D6E63; font-size: 15px;">
      <thead>
        <tr style="background: rgba(141, 110, 99, 0.25); color: #8D6E63;">
          <th style="border: 1px solid #8D6E63; padding: 12px; text-align: left; width: 22%;">Aspect</th>
          <th style="border: 1px solid #8D6E63; padding: 12px; text-align: left; width: 38%;">The Sacred Myth / Romantic Expectation</th>
          <th style="border: 1px solid #8D6E63; padding: 12px; text-align: left; width: 40%;">The Physical Reality / Middleton's Observations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;"><b style="color: #8D6E63;">Lake Manasarovar</b></td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Holy freshwater lake praised by travelers (Sven Hedin, Ekai Kawaguchi) as celestial paradise; origin of 4 sacred rivers.</td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Scientifically, only the Sutlej flows out; its shore settlement of Hor is a grim, bleak, rubbish-strewn eyesore of rusted cans.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;"><b style="color: #8D6E63;">Town of Darchen</b></td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Bustling, vibrant spiritual base camp teeming with devout, prayerful pilgrims embarking on sacred circumambulation.</td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Desolate, wind-blasted, dusty outpost cluttered with trash and wild dogs; deserted due to arriving too early in the season.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;"><b style="color: #8D6E63;">Pilgrims (The Ideal)</b></td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Austere, ascetic, intensely pious spiritual seekers performing exhausting physical prostrations around the 54-km perimeter.</td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Norbu: an out-of-shape Beijing academic who dislikes prostrations because his belly is too large; Middleton: a skeptical, cold-afflicted geographer.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;"><b style="color: #8D6E63;">Medical Treatment</b></td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">High-tech clinical oxygen tanks or mystical spiritual healing chants.</td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Tibetan monastic doctor feeling wrist pulse; prescribing foul-looking brown pellets wrapped in newspaper that cure him completely.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 2.4: MASTER LITERARY & STYLISTIC DEVICES TABLE -->
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px; margin-top: 35px;">2.4 Master Literary &amp; Stylistic Devices Table</h2>

  <div style="overflow-x: auto; margin: 20px 0;" class="table-container">
    <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #8D6E63; font-size: 15px;">
      <thead>
        <tr style="background: rgba(141, 110, 99, 0.25); color: #8D6E63;">
          <th style="border: 1px solid #8D6E63; padding: 12px; text-align: left; width: 22%;">Literary Device</th>
          <th style="border: 1px solid #8D6E63; padding: 12px; text-align: left; width: 38%;">Textual Illustration</th>
          <th style="border: 1px solid #8D6E63; padding: 12px; text-align: left; width: 40%;">Narrative Purpose &amp; Critical Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;"><b style="color: #8D6E63;">Simile &amp; Metaphor</b></td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px; font-style: italic; color: #D7CCC8;">"running as fast as a bullet" (Tibetan mastiff) / "like a huge white lake" (snowdrifts)</td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Creates dynamic, vivid sensory impressions of speed, raw wildness, and sheer geographical scale across the barren landscape.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;"><b style="color: #8D6E63;">Self-Deprecating Humor</b></td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px; font-style: italic; color: #D7CCC8;">Middleton gasping awake afraid he'd die / Norbu laughing that his fat stomach was not built for prostrations.</td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Humanizes the perilous journey, deflating pretentious explorer heroics and establishing an engaging, relatable bond with the reader.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;"><b style="color: #8D6E63;">Dramatic Contrast</b></td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px; font-style: italic; color: #D7CCC8;">The pristine spiritual legends of Lake Manasarovar contrasted with Hor's filthy heaps of rubbish.</td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Exposes the harsh reality of human environmental neglect, puncturing romanticized oriental myths with journalistic honesty.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;"><b style="color: #8D6E63;">Sensory Imagery</b></td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px; font-style: italic; color: #D7CCC8;">"parched throat", "hissing petrol tank", "crunching gravel", "foul herbal pellets tasting like cinnamon"</td>
          <td style="border: 1px solid #8D6E63; padding: 10px 12px;">Evokes the tactile, olfactory, and auditory physical reality of extreme high-altitude travel with visceral immediacy.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 2.5: COMPREHENSIVE VOCABULARY GLOSSARY -->
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px; margin-top: 35px;">2.5 High-Frequency Board Vocabulary &amp; Regional Terminology</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 20px 0;">
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #8D6E63; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #8D6E63;">1. Kora:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">The sacred ritual circumambulation performed clockwise around a holy mountain (such as Mount Kailash) or Buddhist temple.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #8D6E63; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #8D6E63;">2. Drokba:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">Tibetan pastoral nomads who herd yaks and sheep across the high plains, living in yak-hair tents and wearing long sheepskin coats.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #8D6E63; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #8D6E63;">3. Kyang:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">The Tibetan wild ass (<i>Equus kiang</i>), celebrated for its speed, stamina, and synchronized herd galloping across high arid plateaus.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #8D6E63; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #8D6E63;">4. Cairn:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">A human-made mound of rough stones piled up as a high-altitude landmark or sacred Buddhist shrine draped with prayer flags.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #8D6E63; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #8D6E63;">5. Sleep Apnea:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">A potentially serious sleep disorder in which breathing repeatedly stops and starts, exacerbated here by acute hypoxic high altitude.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #8D6E63; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #8D6E63;">6. Prostration:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">The devotional act of casting oneself stretched face down on the ground in total reverence, performed by devout pilgrims circling Mount Kailash.</span>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: BOARD SOLUTIONS                           */
/* -------------------------------------------------------------------------- */

export const c11EngH10HtmlSolutions = `
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
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px;">Section A: Extract-Based Comprehension Questions (16 Marks &bull; 1 Mark Each)</h2>
  <p style="margin-bottom: 20px; color: #D7CCC8; font-size: 14.5px;">Read the following passages from Nick Middleton's travelogue and answer the accompanying questions accurately.</p>

  <!-- EXTRACT 1 -->
  <div style="background: rgba(141, 110, 99, 0.06); border: 1.5px solid #8D6E63; border-radius: 8px; padding: 16px; margin: 16px 0;">
    <b style="color: #8D6E63; font-size: 16px;">Passage Extract 1:</b>
    <p style="font-style: italic; color: #D7CCC8; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;As we passed these nomad tents, pitched in lonely isolation, there would almost certainly be a Tibetan mastiff standing guard. These big, black dogs would tilt their great big heads when they became aware of our approach and fix us in their sights. As we drew nearer, they would explode into action, speeding directly towards us, like a bullet from a gun and nearly as fast...&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #8D6E63; margin: 10px 0 4px 0; font-size: 15.5px;">Question 1.1:</h3>
      <p><b>Where were the Tibetan mastiffs stationed and what was their primary function?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> They were stationed outside isolated nomad tents, acting as fierce guard dogs to protect families, livestock, and property.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.2:</h3>
      <p><b>Identify the literary device used to describe the speed of the dogs.</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> A <b>simile</b> is used in the phrase: <i>"speeding directly towards us, like a bullet from a gun"</i>.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.3:</h3>
      <p><b>Why were Tibetan mastiffs prized in the imperial courts of China in ancient times?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> They were highly prized as ferocious hunting dogs and bodyguard animals due to their immense size, fearless courage, and powerful jaws.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.4:</h3>
      <p><b>How did the mastiffs behave once the car passed beyond their territory?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> After fiercely chasing the vehicle for a hundred meters or more, they would stop, bark a final warning, and trot back to their posts.</p>
    </div>
  </div>

  <!-- EXTRACT 2 -->
  <div style="background: rgba(141, 110, 99, 0.06); border: 1.5px solid #8D6E63; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #8D6E63; font-size: 16px;">Passage Extract 2:</b>
    <p style="font-style: italic; color: #D7CCC8; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;By late afternoon we had reached the small town of Hor, back on the main east-west highway that followed the old trade route from Lhasa to Kashmir. Daniel, who was returning to Lhasa, found a ride in a truck, so Tsetan and I bade him farewell outside the town's only cafe. Hor was a grim, miserable place. There was no vegetation whatsoever, just dust and rocks, liberally scattered with years of accumulated rubbish...&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #8D6E63; margin: 10px 0 4px 0; font-size: 15.5px;">Question 2.1:</h3>
      <p><b>What historic trade highway passed through the town of Hor?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> The historic East-West highway that traced the ancient trade route connecting <b>Lhasa to Kashmir</b>.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.2:</h3>
      <p><b>Why did Daniel depart from Nick and Tsetan at Hor?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> Daniel's mission was complete and he needed to return to his base in <b>Lhasa</b>, hitching a ride on a passing commercial truck.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.3:</h3>
      <p><b>How does the author describe the physical environment of Hor?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> Hor is described as a grim, miserable place completely devoid of vegetation, smothered in dust and rocks, and strewn with years of accumulated garbage.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.4:</h3>
      <p><b>Why was the grim reality of Hor deeply disappointing to travelers?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> Hor sits on the sacred shore of Lake Manasarovar; travelers expect spiritual splendor, but encounter filthy, depressing squalor.</p>
    </div>
  </div>

  <!-- EXTRACT 3 -->
  <div style="background: rgba(141, 110, 99, 0.06); border: 1.5px solid #8D6E63; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #8D6E63; font-size: 16px;">Passage Extract 3:</b>
    <p style="font-style: italic; color: #D7CCC8; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;The doctor wore a thick, woollen tunic and a fur hat. No white coat. When I explained my symptoms, he asked me a few questions while feeling the veins in my wrist. 'It's a cold,' he said through Tsetan. 'A cold and the effects of altitude. I'll give you something for it.' He gave me a five-day course of Tibetan medicine &mdash; a brownish powder in fifteen small packages...&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #8D6E63; margin: 10px 0 4px 0; font-size: 15.5px;">Question 3.1:</h3>
      <p><b>Where did this medical examination take place and what was unusual about the doctor's attire?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> It took place at the <b>Darchen Medical College</b>. The doctor wore a traditional thick woollen tunic and a fur cap instead of a modern white clinical coat.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.2:</h3>
      <p><b>What diagnostic procedure did the Tibetan doctor use to assess Middleton?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> He felt the pulses and veins in the author's wrist, practicing traditional Tibetan pulse diagnosis.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.3:</h3>
      <p><b>What was the doctor's diagnosis of Middleton's ailment?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> He diagnosed him with an acute common cold exacerbated by the severe physiological effects of high altitude.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.4:</h3>
      <p><b>How effective was the prescribed Tibetan herbal medicine?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> It was miraculously effective: it cleared his congested sinuses, enabling him to sleep deeply and peacefully that very night.</p>
    </div>
  </div>

  <!-- EXTRACT 4 -->
  <div style="background: rgba(141, 110, 99, 0.06); border: 1.5px solid #8D6E63; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #8D6E63; font-size: 16px;">Passage Extract 4:</b>
    <p style="font-style: italic; color: #D7CCC8; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;'I'm Norbu,' he said. 'I work in Beijing at the Chinese Academy of Social Sciences.' He was Tibetan, he told me, but worked in Beijing. He was there, he explained, to do the kora. My heart jumped. Norbu had been writing academic papers about the Kailash Kora and its importance in various Buddhist texts for years, but he had never actually done it himself...&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #8D6E63; margin: 10px 0 4px 0; font-size: 15.5px;">Question 4.1:</h3>
      <p><b>Who was Norbu and where was he employed?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> Norbu was an ethnic Tibetan academic employed in Beijing at the prestigious <b>Chinese Academy of Social Sciences</b>.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.2:</h3>
      <p><b>Why did Middleton's heart jump when Norbu revealed his plan?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> Middleton had been dreading doing the hazardous, solitary trek around Mount Kailash alone; finding an English-speaking companion brought immense relief.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.3:</h3>
      <p><b>What paradox characterized Norbu's academic relationship with Mount Kailash?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> He had written scholarly papers analyzing the Kailash Kora for years, yet had never actually undertaken the physical pilgrimage himself.</p>

      <h3 style="color: #8D6E63; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.4:</h3>
      <p><b>How did Norbu react to the idea of performing devotional prostrations during the Kora?</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> He laughed and rejected the idea, stating that his large belly and lack of fitness made prostrations impossible.</p>
    </div>
  </div>

  <!-- SECTION B: SHORT ANSWER QUESTIONS -->
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px; margin-top: 35px;">Section B: Short Answer Conceptual Questions (36 Marks &bull; 3 Marks Each &bull; 40&ndash;50 Words)</h2>

  <div style="margin-top: 16px;">
    <h3 style="color: #8D6E63; font-size: 16px;">Question 1: What parting gift did Lhamo give to Nick Middleton, and why was it necessary?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> Lhamo gave him a long-sleeved sheepskin coat (a traditional <i>drokba</i> coat). It was essential because the expedition was heading into sub-zero high-altitude altitudes near Mount Kailash, where freezing Himalayan gale-force winds would penetrate ordinary Western winter jackets.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 2: Describe the behavior of the Kyang observed across the Tibetan plateau.</h3>
    <p><b style="color: #8D6E63;">Answer:</b> The Kyang (Tibetan wild asses) grazed in large herds across the arid grasslands. Whenever the vehicle approached, they bounded away in synchronized formation, maneuvering with extraordinary agility and kicking up massive clouds of blinding dust across the plateau.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 3: How did the Tibetan mastiffs guard the nomad tents against intruders?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> The massive, black Tibetan mastiffs stood vigilant outside nomad encampments. Catching sight of the car, they charged like bullets, barking thunderously with enormous jaws and pursuing the speeding car fearlessly for over a hundred meters before relenting.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 4: What ingenious method did Tsetan use to cross the icy mountain snowdrift?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> A sheet of treacherous frozen snow blocked the narrow curve beside a sheer drop. Tsetan grabbed handfuls of dry soil, dust, and gravel from the hillside and threw it over the ice, providing essential tire traction that allowed the car to cross safely.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 5: What physical symptoms did Nick experience as the vehicle reached high altitude?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> As they climbed past 5,200 meters, low atmospheric pressure caused his sinuses to become painfully congested, resulting in a throbbing headache. He felt nauseous, chest-constricted, and parched, while the car's fuel tank hissed loudly from pressurized fumes.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 6: How did the party mark their arrival at the top of the pass at 5,515 meters?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> The summit was crowned by a traditional Buddhist cairn of rough stones draped with prayer flags and white silk scarves. In accordance with sacred Buddhist customs, Tsetan and the passengers completed a clockwise circumambulation around the cairn for safety.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 7: Why was Nick Middleton bitterly disappointed with the town of Hor?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> Hor, situated on sacred Lake Manasarovar, was expected to be an idyllic, spiritually inspiring sanctuary. Instead, it was a bleak, miserable, dust-choked settlement without a single blade of grass, filled with mounds of rusted metal cans and windblown plastic garbage.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 8: Describe Nick's terrifying nocturnal health crisis during his first night in Darchen.</h3>
    <p><b style="color: #8D6E63;">Answer:</b> Middleton suffered acute nocturnal sleep apnea due to high altitude and blocked nasal passages. Every time he drifted to sleep, his breathing stopped, jolting him awake in suffocating terror. Afraid that sleeping would cause his death, he sat awake the entire night.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 9: How did the Tibetan doctor diagnose and treat Middleton's illness in Darchen?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> The doctor felt the veins in his wrist, diagnosing a severe cold complicated by high altitude. He prescribed a five-day course of brown herbal powders and pellets wrapped in paper packets, which cleared his congestion and cured him overnight.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 10: Why did Darchen initially seem so bleak and depressing to Middleton once Tsetan left?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> He had arrived too early in the season, finding the town dusty, empty, and devoid of pilgrims or English speakers. With Tsetan returning to Lhasa, Middleton felt isolated, vulnerable, and daunted by the prospect of trekking around Mount Kailash alone.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 11: Who was Norbu, and why did he prove to be an ideal companion for Middleton?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> Norbu was an educated, English-speaking Tibetan scholar from the Chinese Academy of Social Sciences in Beijing. He was also seeking a companion to do the Kora. His secular outlook, academic background, and humorous pragmatism made him an ideal traveling partner.</p>

    <h3 style="color: #8D6E63; font-size: 16px; margin-top: 18px;">Question 12: How did Norbu's physical condition humorously shape their strategy for the Kora?</h3>
    <p><b style="color: #8D6E63;">Answer:</b> Norbu was stout, out of shape, and laughed that his large belly made traditional religious prostrations impossible. Instead, they decided to hire yaks to carry their heavy packs, opting for an unpretentious, sensible trek rather than an ascetic ordeal.</p>
  </div>

  <!-- SECTION C: LONG ANSWER QUESTIONS -->
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px; margin-top: 35px;">Section C: Long Answer Thematic / Analytical Questions (30 Marks &bull; 6 Marks Each &bull; 120&ndash;150 Words)</h2>

  <div style="margin-top: 16px;">
    <!-- LA 1 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #8D6E63; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #8D6E63; font-size: 16.5px; margin: 0 0 8px 0;">Question 13: Trace the physical challenges and atmospheric hazards faced by Nick Middleton during his high-altitude ascent. How does physical geography impact human physiology?</h3>
      <p><b style="color: #8D6E63;">1. Thematic Introduction:</b> As an Oxford physical geographer, Nick Middleton provides a vivid, medically accurate account of how extreme high altitude and dropping atmospheric pressure torment the human body during Himalayan exploration.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">2. Comprehensive Core Analysis:</b> As their vehicle climbed past 5,200 meters toward the 5,515-meter pass, the thinning atmosphere drastically reduced oxygen availability. The engine struggled and sputtered, while expanding fuel vapors hissed violently against the fuel cap. Middleton suffered from acute altitude sickness: pounding headaches, congested sinuses, and nausea. The crisis peaked at Darchen (4,700 meters), where severe nocturnal sleep apnea set in. Whenever his conscious control relaxed into sleep, his hypoxic brain failed to trigger automatic breathing, jolting him awake gasping for air. His throat became raw and parched from breathing frigid mouth air. Only the traditional pulse diagnosis and herbal remedy from the Tibetan doctor relieved his respiratory distress, proving that survival at high altitude requires physiological acclimatization and specialized pharmacology.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">3. Global Conclusion:</b> Middleton demonstrates that nature at extreme altitudes remains indifferent to human will; geography dictates the strict physical terms on which humanity can tread upon the roof of the world.</p>
    </div>

    <!-- LA 2 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #8D6E63; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #8D6E63; font-size: 16.5px; margin: 0 0 8px 0;">Question 14: Contrast the sacred, mystical reputation of Lake Manasarovar in classical scripture with Nick Middleton's unvarnished account of Hor. What environmental lesson does this juxtaposition convey?</h3>
      <p><b style="color: #8D6E63;">1. Thematic Introduction:</b> In one of the most powerful sections of <i>Silk Road</i>, Middleton creates a jarring juxtaposition between ancient religious mythology and modern environmental reality at Lake Manasarovar and the settlement of Hor.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">2. Comprehensive Core Analysis:</b> Classical Hindu, Buddhist, and Jain cosmologies venerate Lake Manasarovar as the supreme spiritual lake of divine contemplation and purity, heralded as the source of four sacred rivers. European travelers like Sven Hedin and Ekai Kawaguchi wrote ecstatic descriptions of its sublime beauty. However, when Middleton reaches Hor on the lake's shore, he confronts a desolate, miserable wasteland. There is not a single plant or tree; instead, decades of accumulated urban garbage &mdash; rusted tin cans, shattered glass bottles, and rotting plastic waste &mdash; lie scattered across the rocky dust. The lone cafe is a filthy concrete cell operated by a youth with a greasy rag. The stark contrast exposes the tragic gap between theoretical spiritual veneration and practical ecological stewardship.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">3. Global Conclusion:</b> Middleton delivers a stinging environmental indictment, reminding readers that without civic responsibility, human tourism and commerce inevitably defile even the holiest spiritual sanctuaries on Earth.</p>
    </div>

    <!-- LA 3 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #8D6E63; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #8D6E63; font-size: 16.5px; margin: 0 0 8px 0;">Question 15: Examine the character and indispensable role of Tsetan in the narrative. How does his mountain expertise embody the resilience and resourcefulness of Himalayan drivers?</h3>
      <p><b style="color: #8D6E63;">1. Thematic Introduction:</b> Throughout the hazardous expedition from Ravu to Darchen, Tsetan &mdash; the skilled Tibetan driver and guide &mdash; emerges as the unsung hero whose technical ingenuity, composure, and local wisdom guarantee the travelers' survival.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">2. Comprehensive Core Analysis:</b> Tsetan is far more than a chauffeur; he is a master of mountain survival. When a frozen sheet of snow blocks a narrow curve overlooking a sheer precipice, Tsetan remains calm. Instead of panicking, he throws dry dirt and gravel over the ice to create tire traction, steering the four-wheel drive across the glaze with millimeter precision. When tires puncture on the rough scree of Hor, he patches them efficiently using a bucket of water. When Middleton falls critically ill in Darchen, Tsetan acts as an empathetic caregiver, taking him directly to the Tibetan Medical College and translating between the Tibetan physician and the British author. Although a commercial driver who pragmatically remarks that a passenger's death would be bad for business, his genuine warmth and Buddhist equanimity make him an invaluable guardian.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">3. Global Conclusion:</b> Tsetan embodies the quiet fortitude and practical genius of Himalayan native guides, without whose expertise high-altitude expeditions would inevitably end in catastrophe.</p>
    </div>

    <!-- LA 4 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #8D6E63; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #8D6E63; font-size: 16.5px; margin: 0 0 8px 0;">Question 16: Analyze the accidental meeting between Nick Middleton and Norbu at Darchen. How does their partnership redefine the concept of a pilgrimage?</h3>
      <p><b style="color: #8D6E63;">1. Thematic Introduction:</b> The serendipitous meeting between Nick Middleton and Norbu in a dilapidated Darchen cafe transforms a bleak, solitary ordeal into a delightful, secular, and intellectually enriching partnership.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">2. Comprehensive Core Analysis:</b> After Tsetan's departure, Middleton was marooned in a deserted, garbage-strewn town, intimidated by the prospect of trekking around Kailash alone. Enter Norbu: an ethnic Tibetan scholar from the Chinese Academy of Social Sciences in Beijing. Norbu presents a delightful paradox: he has authored scholarly treatises on the Buddhist significance of the Kailash Kora for years, yet has never set foot on the mountain. Neither traveler conforms to the ascetic stereotype of the devout, self-mortifying pilgrim. Norbu is stout, out of shape, and laughs that his ample belly was not built for exhausting prostrations. Middleton is a skeptical Western geographer. Recognizing their mutual limitations, they reject rigid religious fanaticism and hire yaks to carry their luggage, embarking on the Kora as companions driven by genuine curiosity, mutual respect, and warm humor.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">3. Global Conclusion:</b> Their alliance proves that a pilgrimage need not be an austere, fanatical trial; it can be an authentic human celebration of shared endeavor, intellectual fellowship, and cross-cultural friendship.</p>
    </div>

    <!-- LA 5 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #8D6E63; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #8D6E63; font-size: 16.5px; margin: 0 0 8px 0;">Question 17: How does Nick Middleton employ British self-deprecating humor and realistic travelogue conventions to dismantle romanticized Western perceptions of Tibet?</h3>
      <p><b style="color: #8D6E63;">1. Thematic Introduction:</b> In <i>Silk Road</i>, Nick Middleton deliberately breaks away from the mystical 'Shangri-La' tradition of Western travel writing, utilizing dry, self-deprecating British wit and rigorous geographical realism to depict contemporary Tibet as it truly exists.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">2. Comprehensive Core Analysis:</b> 19th-century Western literature frequently portrayed Tibet as an ethereal, magical realm inhabited exclusively by serene lamas and enlightened sages. Middleton shatters this romantic caricature. He depicts Hor as a miserable dump of rusted cans, and Darchen as a dusty shantytown full of stray dogs and windblown debris. Rather than casting himself as a heroic, stoic adventurer, Middleton pokes fun at his own frailties: he suffers from blocked nostrils, pants for breath, is terrified of dying in his sleep, and takes herbal pellets that look like dung. Furthermore, his partnership with Norbu &mdash; who prefers hiring yaks over prostrating his large belly &mdash; injects refreshing comic realism into a traditionally solemn rite. This unpretentious honesty does not diminish the awe of Mount Kailash, but grounds it in authentic human reality.</p>
      <p style="margin-top: 8px;"><b style="color: #8D6E63;">3. Global Conclusion:</b> By stripping away mystical pretension, Middleton offers a richer, more enduring tribute to Tibet &mdash; honoring its rugged geography, cultural pragmatism, and vibrant humanity with unvarnished truth.</p>
    </div>
  </div>

  <!-- SECTION D: NCERT OFFICIAL TEXTBOOK EXERCISE SOLUTIONS -->
  <h2 style="color: #8D6E63; font-weight: bold; border-bottom: 2px solid #8D6E63; padding-bottom: 6px; margin-top: 35px;">Section D: Complete Official NCERT Textbook Exercise Solutions</h2>

  <div style="margin-top: 16px;">
    <h3 style="color: #8D6E63; font-size: 16.5px;">I. Understanding the Text</h3>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #8D6E63; border-radius: 4px;">
      <p><b>Q1: Give reasons for the following:</b></p>
      <p style="margin-top: 6px;">
        <b>(i) As a farewell gift, Lhamo gave the author a long-sleeved sheepskin coat.</b><br/>
        <b style="color: #8D6E63;">Answer:</b> The author was heading toward Mount Kailash to perform the Kora at extreme high altitude. Lhamo, knowing the bitterly cold winds and sub-zero weather of the Tibetan highlands, gifted him a traditional <i>drokba</i> sheepskin coat for essential warmth.
      </p>
      <p style="margin-top: 8px;">
        <b>(ii) Tsetan was eager to have other passengers with him in the car.</b><br/>
        <b style="color: #8D6E63;">Answer:</b> Traveling through isolated high-altitude mountain passes with sheer precipices and snowdrifts is dangerous. Having passengers ensured shared costs, mutual assistance in emergencies, and companionship on lonely roads.
      </p>
      <p style="margin-top: 8px;">
        <b>(iii) The author’s experience at Hor was in stark contrast to earlier accounts of the place.</b><br/>
        <b style="color: #8D6E63;">Answer:</b> Previous travelers like Ekai Kawaguchi and Sven Hedin were moved to tears by the sacred, pristine beauty of Lake Manasarovar. In contrast, Middleton found Hor to be a grim, miserable, dust-blown town without vegetation, choked with years of accumulated garbage and rusted tin cans.
      </p>
      <p style="margin-top: 8px;">
        <b>(iv) The author was disappointed with Darchen.</b><br/>
        <b style="color: #8D6E63;">Answer:</b> The author arrived early in the pilgrimage season and found Darchen virtually deserted, dusty, and cluttered with garbage. There were no other pilgrims or English-speaking companions to do the Kora with, making him feel isolated and vulnerable.
      </p>
      <p style="margin-top: 8px;">
        <b>(v) The author could not sleep on his first night in Darchen.</b><br/>
        <b style="color: #8D6E63;">Answer:</b> He suffered from severe high-altitude nasal congestion and sleep apnea. His nostrils were blocked, and every time he drifted toward sleep, his chest constricted and breathing stopped, waking him up in suffocating terror.
      </p>
      <p style="margin-top: 8px;">
        <b>(vi) The author’s meeting with Norbu was a stroke of good luck.</b><br/>
        <b style="color: #8D6E63;">Answer:</b> Middleton was feeling lonely, dejected, and worried about doing the Kora alone. Meeting Norbu &mdash; an English-speaking Tibetan scholar from Beijing who also wanted to do the Kora &mdash; provided the ideal partner with whom he could share expenses, hire yaks, and complete the trek.
      </p>
    </div>

    <h3 style="color: #8D6E63; font-size: 16.5px; margin-top: 25px;">II. Talking About the Text</h3>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #8D6E63; border-radius: 4px;">
      <p><b>Discuss: The sensitive behaviour of hill-folk.</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> The hill-folk in the narrative &mdash; such as Lhamo, Tsetan, and the Tibetan physician &mdash; display remarkable warmth, generosity, and quiet empathy. Lhamo gives a warm sheepskin coat to a departing guest; Tsetan navigates perilous snowdrifts with supreme care, nurses Nick patiently through his medical crisis, and ensures he receives proper care before leaving. The Tibetan doctor treats him gently and effectively. Despite living in extreme, impoverished conditions, the mountain people exhibit deep compassion, honesty, and hospitality toward outsiders.</p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #8D6E63; border-radius: 4px;">
      <p><b>Discuss: The reasons why people undertake such arduous journeys like the Kailash Kora.</b></p>
      <p><b style="color: #8D6E63;">Answer:</b> People undertake challenging pilgrimages like the Kailash Kora for a mixture of profound spiritual faith, cultural tradition, personal challenge, and intellectual curiosity. For believers, circumambulating sacred Mount Kailash cleanses a lifetime of sins and leads toward spiritual liberation. For adventurers and geographers like Middleton, it offers the ultimate test of human endurance against extreme natural elements, while providing deep cross-cultural communion and transformative awe in the presence of untouched nature.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: INTERACTIVE MCQS                           */
/* -------------------------------------------------------------------------- */

export const c11EngH10Mcqs = [
  {
    "id": "c11-eng-h10-m1",
    "question": "What gift did Lhamo give to Nick Middleton as he departed from Ravu?",
    "options": [
      "A):   A long-sleeved sheepskin coat",
      "B):   A brass prayer wheel",
      "C):   A silver Tibetan amulet",
      "D):   A woolen balaclava cap"
    ],
    "correctAnswer": "a",
    "explanation": "Textual Fact: Lhamo gifted Nick a long-sleeved sheepskin coat (drokba coat) to protect him against sub-zero mountain winds."
  },
  {
    "id": "c11-eng-h10-m2",
    "question": "Who was the driver hired to drive Nick Middleton across the Tibetan plateau?",
    "options": [
      "A):   Norbu",
      "B):   Tsetan",
      "C):   Daniel",
      "D):   Khan Sahib"
    ],
    "correctAnswer": "b",
    "explanation": "Textual Fact: Tsetan was the experienced, resourceful Tibetan driver who drove his four-wheel-drive vehicle."
  },
  {
    "id": "c11-eng-h10-m3",
    "question": "What is the local Tibetan name for the wild ass observed galloping across the plains?",
    "options": [
      "A):   Drokba",
      "B):   Yak",
      "C):   Kyang",
      "D):   Kora"
    ],
    "correctAnswer": "c",
    "explanation": "Textual Fact: The Tibetan wild asses are called 'Kyang', celebrated for galloping across the arid pastures in coordinated herds."
  },
  {
    "id": "c11-eng-h10-m4",
    "question": "Which aggressive guard animal protected the isolated nomad tents on the plateau?",
    "options": [
      "A):   Snow leopards",
      "B):   Tibetan wolves",
      "C):   Himalayan brown bears",
      "D):   Tibetan mastiffs"
    ],
    "correctAnswer": "d",
    "explanation": "Textual Fact: Tibetan mastiffs were enormous, ferocious black dogs stationed as guards outside nomad encampments."
  },
  {
    "id": "c11-eng-h10-m5",
    "question": "At what high altitude was the summit of the mountain pass marked by a stone cairn?",
    "options": [
      "A):   5,515 meters",
      "B):   4,700 meters",
      "C):   5,210 meters",
      "D):   6,100 meters"
    ],
    "correctAnswer": "a",
    "explanation": "Textual Fact: The summit of the high mountain pass reached an elevation of 5,515 meters, marked by a cairn of rocks."
  },
  {
    "id": "c11-eng-h10-m6",
    "question": "On the shore of which sacred lake is the town of Hor located?",
    "options": [
      "A):   Lake Baikal",
      "B):   Lake Manasarovar",
      "C):   Pangong Tso",
      "D):   Dal Lake"
    ],
    "correctAnswer": "b",
    "explanation": "Textual Fact: Hor was located on the shore of Lake Manasarovar along the historic Lhasa-Kashmir trade route."
  },
  {
    "id": "c11-eng-h10-m7",
    "question": "What medical symptom caused Nick Middleton to spend his first night awake in Darchen?",
    "options": [
      "A):   Severe food poisoning and fever",
      "B):   A fractured ankle suffered on the scree",
      "C):   Acute nocturnal breathing blockage (sleep apnea) due to altitude and cold",
      "D):   Total temporary blindness from solar glare"
    ],
    "correctAnswer": "c",
    "explanation": "Medical Fact: Blocked nasal passages and low atmospheric pressure caused sleep apnea, jolting him awake gasping for air whenever he dozed off."
  },
  {
    "id": "c11-eng-h10-m8",
    "question": "Where did Norbu work as an academic researcher?",
    "options": [
      "A):   Oxford University in England",
      "B):   Tibet University in Lhasa",
      "C):   Jawaharlal Nehru University in New Delhi",
      "D):   Chinese Academy of Social Sciences in Beijing"
    ],
    "correctAnswer": "d",
    "explanation": "Textual Fact: Norbu was an ethnic Tibetan academic working in Beijing at the Chinese Academy of Social Sciences."
  },
  {
    "id": "c11-eng-h10-m9",
    "question": "How did Tsetan successfully negotiate the vehicle across the frozen snowdrift?",
    "options": [
      "A):   By throwing dry dirt and gravel over the ice to provide wheel traction",
      "B):   By pouring boiling water from the radiator over the snow to melt it",
      "C):   By waiting five hours for the afternoon sun to dissolve the ice layer",
      "D):   By strapping metal spiked chains around all four tires"
    ],
    "correctAnswer": "a",
    "explanation": "Mountain Ingenuity: Tsetan scooped up handfuls of dirt and gravel from the slope and spread it across the ice to prevent the car from skidding."
  },
  {
    "id": "c11-eng-h10-m10",
    "question": "Why was the town of Hor such a bitter disappointment to the author?",
    "options": [
      "A):   It was a bleak, miserable town devoid of vegetation, strewn with years of accumulated garbage and rusted cans",
      "B):   The Chinese authorities confiscated his passport and expedition notes",
      "C):   The local monks refused to admit foreign travelers into the monastery",
      "D):   A flash flood had washed away all bridges connecting Hor to Darchen"
    ],
    "correctAnswer": "a",
    "explanation": "Environmental Reality: Despite Lake Manasarovar's holy reputation, Hor was a depressing, filthy town covered in windblown rubbish and rusted tin cans."
  },
  {
    "id": "c11-eng-h10-m11",
    "question": "What river is scientifically known to actually issue directly from Lake Manasarovar?",
    "options": [
      "A):   The Indus",
      "B):   The Ganges",
      "C):   The Brahmaputra",
      "D):   The Sutlej"
    ],
    "correctAnswer": "d",
    "explanation": "Geographical Fact: While myth claims four great rivers flow from the lake, only the Sutlej actually emerges directly from Lake Manasarovar."
  },
  {
    "id": "c11-eng-h10-m12",
    "question": "What was unusual about the doctor at the Darchen Medical College?",
    "options": [
      "A):   He wore a thick woolen tunic and a fur hat instead of a traditional white medical coat",
      "B):   He was an American tourist who had retired to study herbal medicine",
      "C):   He used an electric electrocardiogram machine powered by solar cells",
      "D):   He spoke fluent French but could not understand any Tibetan dialect"
    ],
    "correctAnswer": "a",
    "explanation": "Textual Detail: The Tibetan doctor wore a traditional warm woollen tunic and fur cap, examining Nick by feeling the pulses in his wrist."
  },
  {
    "id": "c11-eng-h10-m13",
    "question": "Why did the prospect of doing the Kora alone terrify Nick Middleton initially in Darchen?",
    "options": [
      "A):   He had lost all his money and credit cards in the Hor cafe",
      "B):   He had arrived too early in the season, finding the town empty of pilgrims, while his driver Tsetan had departed",
      "C):   The mountain was completely cordoned off by local security police",
      "D):   He had never read any travel books or route maps about Mount Kailash"
    ],
    "correctAnswer": "b",
    "explanation": "Isolation & Anxiety: Darchen was deserted because he was early; with no other pilgrims and Tsetan gone, trekking 54 km at high altitude alone was perilous."
  },
  {
    "id": "c11-eng-h10-m14",
    "question": "Why did Norbu refuse to perform the traditional prostrations around Mount Kailash?",
    "options": [
      "A):   His religious doctrine strictly forbade physical genuflection on rocky soil",
      "B):   He was recovering from a broken wrist suffered in a bicycle accident",
      "C):   He was corpulent, out of shape, and his large belly made prostrations physically exhausting",
      "D):   He believed prostrations were banned by the municipal government of Beijing"
    ],
    "correctAnswer": "c",
    "explanation": "Humorous Honesty: Norbu laughed that his ample tummy was not built for arduous physical prostrations around the 54-km perimeter."
  },
  {
    "id": "c11-eng-h10-m15",
    "question": "How did Nick and Norbu decide to transport their luggage during the Kailash Kora?",
    "options": [
      "A):   They carried their heavy backpacks on their own shoulders",
      "B):   They hired a local motorized four-wheel-drive jeep",
      "C):   They hired a pair of yaks to carry their bags",
      "D):   They sent their luggage ahead by helicopter courier service"
    ],
    "correctAnswer": "c",
    "explanation": "Practical Decision: Realizing their physical limitations, they sensibly decided to hire yaks to carry their heavy luggage during the trek."
  },
  {
    "id": "c11-eng-h10-m16",
    "question": "What core thematic dichotomy does Nick Middleton explore throughout 'Silk Road'?",
    "options": [
      "A):   The unbridgeable philosophical conflict between Buddhism and Christianity",
      "B):   The contrast between romanticized spiritual mythology and the harsh, unvarnished physical reality of Tibetan travel",
      "C):   The superiority of British automobile engineering over Japanese vehicles",
      "D):   The economic competition between silk production and sheep farming"
    ],
    "correctAnswer": "b",
    "explanation": "Thematic Thesis: Middleton balances the sacred myths of Kailash/Manasarovar with the realistic hardships of trash, altitude sickness, and austere towns."
  },
  {
    "id": "c11-eng-h10-m17",
    "question": "What makes Nick Middleton's narrative voice distinctive compared to traditional Victorian explorer memoirs?",
    "options": [
      "A):   He claims divine visions and performs religious rituals without skepticism",
      "B):   He maintains an aggressive colonial superiority over all local Asian people",
      "C):   He writes purely in mathematical equations and meteorological charts",
      "D):   He displays dry, self-deprecating British humor, openly admitting his physical frailties and fears"
    ],
    "correctAnswer": "d",
    "explanation": "Literary Voice: Middleton's self-deprecating wit humanizes the perilous trek, making his anxieties, illnesses, and humor deeply relatable."
  },
  {
    "id": "c11-eng-h10-m18",
    "question": "How does Tsetan's attitude toward Middleton's possible death reveal the pragmatic mindset of Himalayan drivers?",
    "options": [
      "A):   He would have celebrated because he could seize all the passenger's luggage",
      "B):   He was terrified of criminal prosecution and execution by international tribunals",
      "C):   As a devout Buddhist, he believed death led to heaven, but as a businessman, a dead passenger was bad for business",
      "D):   He refused to transport sick passengers without a signed legal waiver"
    ],
    "correctAnswer": "c",
    "explanation": "Pragmatic Philosophy: Tsetan cheerfully remarked that while Buddhist belief welcomed death, having a client die on his watch would be terrible for his business reputation."
  },
  {
    "id": "c11-eng-h10-m19",
    "question": "What cultural significance did circumambulating the cairn in a clockwise direction hold?",
    "options": [
      "A):   It was a solar ritual to prevent car batteries from discharging in the frost",
      "B):   It was an athletic warm-up exercise to prevent muscle cramps at high altitude",
      "C):   It was a legal requirement enforced by Chinese border security outposts",
      "D):   It was a traditional Buddhist practice to show reverence and invoke protective blessings for safe passage across mountain passes"
    ],
    "correctAnswer": "d",
    "explanation": "Spiritual Tradition: In Tibetan Buddhist tradition, circumambulating shrines and cairns clockwise (*kora*) invokes sacred harmony and safe travel."
  },
  {
    "id": "c11-eng-h10-m20",
    "question": "How does the partnership between Nick and Norbu redefine the modern concept of a pilgrimage?",
    "options": [
      "A):   It shows that only professional athletes should attempt to travel in the Himalayas",
      "B):   It proves that a pilgrimage can be an authentic intellectual and secular human journey rooted in mutual friendship and curiosity",
      "C):   It demonstrates that Western tourists should always finance Asian scholars",
      "D):   It proves that religious texts have zero relevance to geographical exploration"
    ],
    "correctAnswer": "b",
    "explanation": "Modern Pilgrimage: Middleton and Norbu show that a pilgrimage does not require fanatical asceticism; it can be an authentic journey of human connection and mutual discovery."
  }
];
