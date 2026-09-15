// Class 11 English (Hornbill) - Chapter 7: The Ailing Planet: The Green Movement's Role by Nani Palkhivala
// Standardized for JKBOSE & CBSE / NCERT Curriculum
// Gold Standard 3-Tab Architecture & Deep Environmental Prose Guide
// Theme Color: #4CAF50 (Forest Green / Green Movement & Ecology Theme)

const themeColor = "#4CAF50";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11EngH7HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & CONCEPTUAL SNAPSHOT CARD -->
  <div style="background: rgba(76, 175, 80, 0.07); border: 1.5px solid #4CAF50; border-radius: 12px; padding: 18px; margin-bottom: 25px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <h2 class="text-center" style="color: #4CAF50; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">📖 Quick Glossary &amp; Essential Conceptual Snapshot</h2>
    <p class="text-center" style="color: #A5D6A7; margin: 0 0 16px 0; font-size: 14.5px;">Hornbill Prose &bull; Chapter 7: The Ailing Planet: The Green Movement's Role &bull; Nani Palkhivala</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #4CAF50; border-radius: 6px;">
        <b style="color: #4CAF50; font-size: 16px; display: block; margin-bottom: 4px;">1. Form &amp; Provenance:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Persuasive Environmental Prose &amp; Socio-Economic Critique. Originally written by the legendary jurist Nani Palkhivala and published as a landmark article in <i>The Indian Express</i> on <b>24 November 1994</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #4CAF50; border-radius: 6px;">
        <b style="color: #4CAF50; font-size: 16px; display: block; margin-bottom: 4px;">2. The Core Paradigm Shift:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A revolutionary transition from a <b>mechanistic view</b> of the world (treating Earth as an inanimate machine to be relentlessly exploited) to a <b>holistic and ecological view</b> (recognizing Earth as an integrated living organism possessing metabolic needs and vital life-support systems).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #4CAF50; border-radius: 6px;">
        <b style="color: #4CAF50; font-size: 16px; display: block; margin-bottom: 4px;">3. Sustainable Development:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Popularized by the <b>World Commission on Environment and Development (Brundtland Commission, 1987)</b>: <i>"Development that meets the needs of the present without compromising the ability of future generations to meet their needs"</i> &mdash; stripping the natural world of resources without stripping our children of their future.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #4CAF50; border-radius: 6px;">
        <b style="color: #4CAF50; font-size: 16px; display: block; margin-bottom: 4px;">4. Lester Brown's Four Biological Systems:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Fisheries</b>, <b>Forests</b>, <b>Grasslands</b>, and <b>Croplands</b>. These form the biological foundation of the entire global economic system, providing human food supplies and virtually all industrial raw materials except minerals and petroleum synthetics.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #4CAF50; border-radius: 6px;">
        <b style="color: #4CAF50; font-size: 16px; display: block; margin-bottom: 4px;">5. The Lusaka Mirror Lesson:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">At the zoo in <b>Lusaka, Zambia</b>, a cage labeled <i>"The world's most dangerous animal"</i> contains only a mirror reflecting human beings. It symbolizes humanity's overdue awakening: transitioning from arrogant domination over nature to an egalitarian partnership with millions of other living species.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #4CAF50; border-radius: 6px;">
        <b style="color: #4CAF50; font-size: 16px; display: block; margin-bottom: 4px;">6. Generational Stewardship Dictum:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Margaret Thatcher: <i>"No generation has a freehold on this earth. All we have is a life tenancy &mdash; with a full repairing lease."</i> Lester Brown: <i>"We have not inherited this earth from our forefathers; we have borrowed it from our children."</i></span>
      </div>
    </div>
  </div>

  <!-- SECTION 2.1: ABOUT THE AUTHOR -->
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px; margin-top: 30px;">2.1 About the Author &mdash; Nani Palkhivala (1920&ndash;2002)</h2>
  <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 16px; margin: 16px 0; border: 1px solid rgba(255,255,255,0.1);">
    <p><b>Nanabhoy ("Nani") Ardeshir Palkhivala</b> was one of modern India's greatest constitutional jurists, economists, statesmen, and public intellectuals. Renowned internationally for his defense of civil liberties and the foundational democratic architecture of the Indian Constitution &mdash; most notably his monumental role in arguing the historic <i>Kesavananda Bharati</i> case (1973), which established the inviolable 'Basic Structure Doctrine' of the Constitution &mdash; Palkhivala was also an ardent advocate of sustainable human development, fiscal prudence, and ecological balance.</p>
    <p style="margin-top: 10px;">Beyond the courtroom, Palkhivala's annual post-budget public addresses in Mumbai drew crowds exceeding one hundred thousand people, filling entire cricket stadiums with citizens eager to absorb his lucid, principled deconstruction of national economic policy. In his article <i>The Ailing Planet: The Green Movement's Role</i>, published in <i>The Indian Express</i> on 24 November 1994, Palkhivala focused his razor-sharp legal acumen and profound moral vision on the planetary environmental emergency. He warned that humanity was hurtling toward ecological insolvency through reckless overpopulation, resource plunder, and legal apathy, delivering a clarion call for global ethical stewardship.</p>
  </div>

  <!-- SECTION 2.2: DETAILED THEMATIC EXPOSITION -->
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px; margin-top: 30px;">2.2 Deep Thematic Analysis &mdash; A Comprehensive Prose Guide</h2>

  <h3 style="color: #4CAF50; margin-top: 20px;">(i) The Dawn of the Green Movement &amp; The Copernican Shift</h3>
  <p>The essay commences by chronicling the unparalleled velocity with which the <b>Green Movement</b> captured the global imagination. Founded in <b>1972</b> with the establishment of the world's first national Green Party in New Zealand, the movement heralded a fundamental reorientation of human consciousness.</p>
  <p style="margin-top: 10px;">Palkhivala likens this psychological evolution to the monumental revolution initiated by <b>Nicolaus Copernicus</b> in the sixteenth century. Just as Copernicus shattered geocentric arrogance by demonstrating that the Earth and celestial bodies revolve around the Sun, the Green Movement dismantled the anthropocentric delusion that humanity is the absolute owner of nature. It initiated a shift from a <b>mechanistic worldview</b> &mdash; which regarded nature as a lifeless machine composed of interchangeable parts to be mined, harvested, and subjugated &mdash; to a <b>holistic and ecological worldview</b>, which views the biosphere as an interconnected living tapestry where every component is symbiotically interdependent.</p>

  <h3 style="color: #4CAF50; margin-top: 20px;">(ii) The Earth as an Ailing Patient: Diagnostic Reality</h3>
  <p>Central to Palkhivala's thesis is the powerful biological metaphor of the <b>Earth as a living organism</b> &mdash; an enormous entity of which human beings are metabolic parts. Like any complex organism, the Earth possesses its own metabolic needs, vital processes, circulatory systems, and self-regulating mechanisms. However, the planetary clinical charts reveal that the Earth is a <b>patient in declining health</b>.</p>
  <p style="margin-top: 10px;">Widespread symptoms of environmental sickness &mdash; receding glaciers, advancing deserts, depleting ozone layers, acidified oceans, and degraded topsoil &mdash; testify to chronic systemic neglect. Palkhivala argues that humanity is now compelled to recognize its moral obligation as <b>trustees of the planet</b>. We are not autocratic masters empowered to exhaust its lifeblood, but custodians entrusted with the solemn responsibility of convalescing an ailing patient and bequeathing a healthy, viable planet to posterity.</p>

  <h3 style="color: #4CAF50; margin-top: 20px;">(iii) The Concept of Sustainable Development &amp; The Lusaka Mirror</h3>
  <p>In 1987, the <b>World Commission on Environment and Development (Brundtland Commission)</b> formally popularized the seminal concept of <b>Sustainable Development</b>. The commission defined it as <i>"development that meets the needs of the present without compromising the ability of future generations to meet their needs."</i> This doctrine explicitly forbids the present generation from recklessly consuming non-renewable capital or decimating biological capital for transient, short-term economic gains.</p>
  <p style="margin-top: 10px;">To illustrate the moral transformation required, Palkhivala highlights a celebrated exhibit at the <b>zoo in Lusaka, Zambia</b>. Visitors encountering a cage labeled <i>"The world's most dangerous animal"</i> find no predatory beast behind the bars; instead, they confront a <b>mirror</b> reflecting their own image. This poignant, satiric exhibit crystallizes humanity's destructive footprint: man is the supreme predator responsible for deforestation, toxic contamination, climate distortion, and mass extinction.</p>
  <p style="margin-top: 10px;">Fortunately, the global community has begun to realize that survival depends on abandoning a hierarchy of <b>domination</b> in favor of a network of <b>partnership</b>. Scientists estimate that roughly <b>1.4 million living species</b> have been cataloged by biologists, while an estimated three to one hundred million undiscovered species continue to languish unnamed in ecological darkness.</p>

  <h3 style="color: #4CAF50; margin-top: 20px;">(iv) Lester Brown's Four Principal Biological Systems</h3>
  <p>Drawing upon the groundbreaking work of renowned environmentalist <b>Mr. Lester R. Brown</b> in his authoritative treatise <i>The Global Economic Prospect</i>, Palkhivala delineates the four principal biological systems that underpin the biosphere:</p>
  <ul style="list-style-type: none; padding-left: 0; margin-top: 10px;">
    <li style="margin-bottom: 12px; background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <b style="color: #4CAF50;">1. Fisheries:</b> Provide vital protein supplies to billions across the globe, particularly in developing coastal regions.
    </li>
    <li style="margin-bottom: 12px; background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <b style="color: #4CAF50;">2. Forests:</b> Act as planetary lungs, carbon sinks, and climate regulators, preserving biodiversity and recharging groundwater tables.
    </li>
    <li style="margin-bottom: 12px; background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <b style="color: #4CAF50;">3. Grasslands:</b> Support domestic livestock and wild herbivores, preventing soil erosion across vast savannahs and prairies.
    </li>
    <li style="margin-bottom: 12px; background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <b style="color: #4CAF50;">4. Croplands:</b> Produce virtually all human agricultural grain, legumes, and vegetable sustenance.
    </li>
  </ul>
  <p style="margin-top: 10px;">These four systems provide not only human food supplies but virtually all raw materials for global commerce, excluding minerals and petroleum-derived synthetics. However, human claims on these systems have reached <b>unsustainable, predatory levels</b>. Overfishing has become ubiquitous due to an insatiable protein demand; commercial clear-cutting has decimated tropical forests; overgrazing has converted fertile grasslands into desolate wastelands; and intensive chemical farming has exhausted fertile croplands.</p>

  <h3 style="color: #4CAF50; margin-top: 20px;">(v) Forest Depletion &amp; The Indian Constitutional Paradox</h3>
  <p>Palkhivala quotes the timeless adage: <i>"Forests precede mankind; deserts follow them."</i> Human history bears tragic testimony to civilizations that collapsed once their protective forest canopy was leveled. Tropical forests &mdash; famously dubbed the <b>"powerhouse of evolution"</b> &mdash; are being obliterated at an alarming rate of forty to fifty million acres per annum. Moreover, burning dung for fuel deprives agricultural soils of indispensable natural organic manure.</p>
  <p style="margin-top: 10px;">In impoverished countries, the desperation for cooking fuel has created a bizarre economic paradox captured in the tragic local proverb: <b>"What goes under the pot now costs more than what goes inside it."</b> The firewood required to cook a simple meal has become costlier than the grains boiling in the pot.</p>
  <p style="margin-top: 10px;">Focusing his critique on India, Palkhivala laments that <b>Article 48A</b> of the Indian Constitution expressly stipulates that <i>"the State shall endeavour to protect and improve the environment and to safeguard the forests and wild life of the country."</i> Yet, with devastating judicial insight, Palkhivala observes that <b>laws in India are neither respected nor enforced</b> &mdash; just as constitutional provisions against untouchability, bonded labor, and child labor remain dead letters on parchment. A study conducted by Parliament's Estimates Committee highlighted that India was losing forests at the catastrophic rate of <b>3.7 million acres a year</b>, with actual satellite imagery revealing that real forest cover was less than one-eighth of official government claims.</p>

  <h3 style="color: #4CAF50; margin-top: 20px;">(vi) The Population Explosion: The Root Distorting Factor</h3>
  <p>Palkhivala identifies the relentless, exponential growth of the human population as the primary driver sabotaging all social, economic, and environmental advancement. He provides staggering historical metrics:</p>
  <ul style="list-style-type: none; padding-left: 0; margin-top: 10px;">
    <li style="margin-bottom: 8px; background: rgba(0,0,0,0.2); padding: 8px 12px; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <b style="color: #4CAF50;">&bull; Year 1800:</b> It took mankind over one million years to reach the first billion.
    </li>
    <li style="margin-bottom: 8px; background: rgba(0,0,0,0.2); padding: 8px 12px; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <b style="color: #4CAF50;">&bull; Year 1900:</b> A second billion was added in just one single century.
    </li>
    <li style="margin-bottom: 8px; background: rgba(0,0,0,0.2); padding: 8px 12px; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <b style="color: #4CAF50;">&bull; 20th Century:</b> Added an astronomical 3.7 billion, pushing world population past 5.7 billion by 1994 (and over 8 billion today).
    </li>
  </ul>
  <p style="margin-top: 10px;">Every four days, the world population swells by one million people. In India, the population in 1994 stood at 920 million &mdash; surpassing the combined populations of Africa and South America. Palkhivala exposes the vicious trap of poverty: impoverished families mistakenly believe that more children translate to more earning hands, whereas in truth, more children merely mean more unemployed mouths to feed.</p>
  <p style="margin-top: 10px;">Palkhivala propounds the famous axiom: <b>"Development is the best contraceptive."</b> True socio-economic progress &mdash; marked by rising incomes, female literacy, and improved healthcare &mdash; naturally causes fertility rates to decline. However, development cannot occur if population growth continually dilutes economic gains. Humanity faces an inescapable binary choice: either enforce <b>voluntary family planning</b> through mass awareness or submit to the perpetuation of endemic poverty, famine, and ecological collapse.</p>

  <h3 style="color: #4CAF50; margin-top: 20px;">(vii) The Emerging "Era of Responsibility" &amp; Planetary Stewardship</h3>
  <p>The essay concludes on an invigorating, transformative note. Amidst existential peril, Palkhivala discerns the dawn of an <b>"Era of Responsibility"</b> &mdash; a holistic awakening where environmental concern transcends national boundaries and narrowly conceived self-interest. The issue is no longer merely the survival of individual nations, but the survival of the biosphere itself.</p>
  <p style="margin-top: 10px;">In this new epoch, industry plays a pivotal leadership role. Palkhivala commends the visionary declaration of <b>Mr. Edgar S. Woolard</b>, Chairman of the multinational chemical giant Du Pont, who appointed himself his company's <b>"Chief Environmental Officer"</b>, asserting that corporate survival demanded leading the charge in environmental performance.</p>
  <p style="margin-top: 10px;">Finally, Palkhivala leaves the reader with two timeless, resounding aphorisms that summarize humanity's ethical charter on Earth:</p>
  <div style="background: rgba(76, 175, 80, 0.12); border-left: 4px solid #4CAF50; padding: 14px 18px; margin: 16px 0; border-radius: 6px;">
    <p style="margin: 0 0 10px 0; font-style: italic; color: #E8F5E9;">
      &ldquo;No generation has a freehold on this earth. All we have is a life tenancy &mdash; with a full repairing lease.&rdquo;
    </p>
    <div style="text-align: right; color: #A5D6A7; font-weight: bold; font-size: 14px;">&mdash; Margaret Thatcher, Prime Minister of the United Kingdom</div>
    <p style="margin: 14px 0 10px 0; font-style: italic; color: #E8F5E9; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
      &ldquo;We have not inherited this earth from our forefathers; we have borrowed it from our children.&rdquo;
    </p>
    <div style="text-align: right; color: #A5D6A7; font-weight: bold; font-size: 14px;">&mdash; Lester R. Brown, Founder of the Worldwatch Institute</div>
  </div>

  <!-- SECTION 2.3: RHETORICAL & LITERARY DEVICES TABLE -->
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px; margin-top: 35px;">2.3 Master Rhetorical, Literary &amp; Stylistic Devices Table</h2>
  <p>Nani Palkhivala employs masterly rhetorical prose, blending legal precision, vivid biological metaphors, and epigrammatic force. The key literary devices are systematized below:</p>

  <div style="overflow-x: auto; margin: 20px 0;" class="table-container">
    <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #4CAF50; font-size: 15px;">
      <thead>
        <tr style="background: rgba(76, 175, 80, 0.25); color: #4CAF50;">
          <th style="border: 1px solid #4CAF50; padding: 12px; text-align: left; width: 22%;">Literary Device</th>
          <th style="border: 1px solid #4CAF50; padding: 12px; text-align: left; width: 38%;">Textual Illustration</th>
          <th style="border: 1px solid #4CAF50; padding: 12px; text-align: left; width: 40%;">Rhetorical Purpose &amp; Critical Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;"><b style="color: #4CAF50;">Extended Metaphor</b></td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px; font-style: italic; color: #E8F5E9;">"The Earth is like a patient in declining health..." / "Powerhouse of evolution"</td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;">Transposes complex environmental degradation into an urgent medical diagnosis, compelling readers to see themselves as responsible caregivers rather than detached bystanders.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;"><b style="color: #4CAF50;">Satire &amp; Dramatic Irony</b></td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px; font-style: italic; color: #E8F5E9;">The cage at Lusaka Zoo labeled "The world's most dangerous animal" holding a mirror.</td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;">Subverts reader expectation brilliantly, confronting humanity with its own catastrophic destructive power through sudden, humbling visual self-recognition.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;"><b style="color: #4CAF50;">Epigram &amp; Aphorism</b></td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px; font-style: italic; color: #E8F5E9;">"Forests precede mankind; deserts follow them." / "Development is the best contraceptive."</td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;">Condenses monumental historical and demographic truths into unforgettable, punchy proverbs that linger in the reader's memory and stimulate ethical introspection.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;"><b style="color: #4CAF50;">Paradox</b></td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px; font-style: italic; color: #E8F5E9;">"What goes under the pot now costs more than what goes inside it." / Laws exist on paper but are ignored in practice.</td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;">Exposes the tragic absurdity of economic poverty where cooking fuel is scarcer and more expensive than basic food grains, highlighting resource collapse.</td>
        </tr>
        <tr>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;"><b style="color: #4CAF50;">Historical Analogy</b></td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px; font-style: italic; color: #E8F5E9;">Comparing the Green Movement to the Copernican revolution of the 16th century.</td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;">Elevates ecological consciousness from a passing political trend to a historic paradigm shift in human cosmology and philosophical awareness.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;"><b style="color: #4CAF50;">Legal &amp; Tenancy Idiom</b></td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px; font-style: italic; color: #E8F5E9;">"Freehold" vs "Life tenancy with a full repairing lease" / "Borrowed from our children".</td>
          <td style="border: 1px solid #4CAF50; padding: 10px 12px;">Applies property law concepts to ethics, demonstrating that humans do not possess permanent ownership over Earth, but merely lease it with a binding obligation to keep it in repair.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION 2.4: MILESTONES & ANALYTICAL PROGRESSION -->
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px; margin-top: 35px;">2.4 Thematic Evolution &amp; Milestone Timeline Flow</h2>
  <div style="background: rgba(0,0,0,0.25); border-radius: 10px; padding: 20px; border: 1px solid rgba(76, 175, 80, 0.3); margin: 20px 0;">
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <span style="background: #4CAF50; color: #000; font-weight: bold; border-radius: 50%; min-width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px;">1</span>
        <div>
          <b style="color: #4CAF50; font-size: 15.5px;">1972 &mdash; Birth of the Green Movement:</b>
          <p style="margin: 3px 0 0 0; font-size: 14.5px; color: #CBD5E1;">New Zealand founds the world's first national Green Party, triggering a Copernican shift toward holistic ecological awareness.</p>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <span style="background: #4CAF50; color: #000; font-weight: bold; border-radius: 50%; min-width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px;">2</span>
        <div>
          <b style="color: #4CAF50; font-size: 15.5px;">1987 &mdash; Brundtland Commission Report:</b>
          <p style="margin: 3px 0 0 0; font-size: 14.5px; color: #CBD5E1;">Formalizes 'Sustainable Development' &mdash; balancing present human survival with preservation of future generations' resource base.</p>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <span style="background: #4CAF50; color: #000; font-weight: bold; border-radius: 50%; min-width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px;">3</span>
        <div>
          <b style="color: #4CAF50; font-size: 15.5px;">Lester Brown's Biological Audit:</b>
          <p style="margin: 3px 0 0 0; font-size: 14.5px; color: #CBD5E1;">Reveals catastrophic over-exploitation across the four foundation systems: fisheries, forests, grasslands, and croplands.</p>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <span style="background: #4CAF50; color: #000; font-weight: bold; border-radius: 50%; min-width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px;">4</span>
        <div>
          <b style="color: #4CAF50; font-size: 15.5px;">The Demographic Explosion:</b>
          <p style="margin: 3px 0 0 0; font-size: 14.5px; color: #CBD5E1;">Exponential human multiplication dilutes all progress; population control emerges as an absolute prerequisite for planetary survival.</p>
        </div>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <span style="background: #4CAF50; color: #000; font-weight: bold; border-radius: 50%; min-width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px;">5</span>
        <div>
          <b style="color: #4CAF50; font-size: 15.5px;">The Emerging Era of Responsibility:</b>
          <p style="margin: 3px 0 0 0; font-size: 14.5px; color: #CBD5E1;">Adopting Margaret Thatcher's 'repairing lease' and Lester Brown's 'borrowed from our children' principle as humanity's guiding compass.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 2.5: COMPREHENSIVE VOCABULARY GLOSSARY -->
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px; margin-top: 35px;">2.5 High-Frequency Board Vocabulary &amp; Terminology</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 20px 0;">
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #4CAF50; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4CAF50;">1. Holistic:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">Characterized by the belief that the parts of any whole are intimately interconnected and cannot be understood independently.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #4CAF50; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4CAF50;">2. Mechanistic View:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">The outdated philosophical theory that the universe, nature, and living creatures function purely like physical machines without intrinsic rights.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #4CAF50; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4CAF50;">3. Inter Alia:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">Latin legal phrase meaning <i>"among other things"</i>; used frequently in formal judicial and legislative documents.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #4CAF50; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4CAF50;">4. Decimated:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">Severely damaged, drastically reduced in number, or virtually destroyed through excessive exploitation.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #4CAF50; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4CAF50;">5. Ignominious Darkness:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">Humiliating, shameful obscurity; refers to millions of unnamed living species facing extinction before being discovered.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #4CAF50; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4CAF50;">6. Transcending Concern:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">An overriding, universal priority that rises above parochial political boundaries, concerning the very survival of the biosphere.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #4CAF50; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4CAF50;">7. Freehold:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">Permanent, absolute, and unconditional tenure of land or property with unrestricted freedom of disposal.</span>
    </div>
    <div style="background: rgba(0,0,0,0.25); border-left: 3px solid #4CAF50; padding: 12px 14px; border-radius: 6px;">
      <b style="color: #4CAF50;">8. Life Tenancy:</b>
      <span style="color: #CBD5E1; font-size: 14.5px; display: block; margin-top: 3px;">The right to occupy, cultivate, or enjoy an estate for the duration of one's lifetime without holding absolute title of ownership.</span>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: BOARD SOLUTIONS                           */
/* -------------------------------------------------------------------------- */

export const c11EngH7HtmlSolutions = `
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
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px;">Section A: Extract-Based Comprehension Questions (16 Marks &bull; 1 Mark Each)</h2>
  <p style="margin-bottom: 20px; color: #A5D6A7; font-size: 14.5px;">Read the following extracts from Nani Palkhivala's landmark text and answer the questions that follow with precision and textual fidelity.</p>

  <!-- EXTRACT 1 -->
  <div style="background: rgba(76, 175, 80, 0.06); border: 1.5px solid #4CAF50; border-radius: 8px; padding: 16px; margin: 16px 0;">
    <b style="color: #4CAF50; font-size: 16px;">Passage Extract 1:</b>
    <p style="font-style: italic; color: #E8F5E9; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;One cannot recall any movement in world history which has gripped the imagination of the entire human race so completely and so rapidly as the Green Movement which started nearly twenty-five years ago. In 1972 the world’s first nationwide Green party was founded in New Zealand. Since then, the movement has not looked back. We have shifted &mdash; one hopes, irrevocably &mdash; from the mechanistic view to a holistic and ecological view of the world. It is a shift in human perceptions as revolutionary as that introduced by Copernicus who taught mankind in the sixteenth century that the earth and the other planets revolved round the sun.&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #4CAF50; margin: 10px 0 4px 0; font-size: 15.5px;">Question 1.1:</h3>
      <p><b>When and where was the world's first nationwide Green Party established?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> The world's first nationwide Green Party was founded in <b>New Zealand in 1972</b>, marking the formal historical inception of the global political Green Movement.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.2:</h3>
      <p><b>What fundamental shift in human perception does the author highlight?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> The author highlights an irrevocable shift from a <b>mechanistic view</b> of nature (treating Earth as an inanimate, exploitable machine) to a <b>holistic and ecological view</b> (recognizing Earth as an integrated, living organic system).</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.3:</h3>
      <p><b>Why does Palkhivala compare this psychological shift to the Copernican revolution?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> Just as Nicolaus Copernicus radically overturned geocentric delusions in the sixteenth century by demonstrating that planets orbit the Sun, the Green Movement radically dismantled anthropocentric arrogance by showing that humans are not the masters of creation but interdependent participants in a wider cosmic ecosystem.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 1.4:</h3>
      <p><b>What is meant by the adverb 'irrevocably' in this passage?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> 'Irrevocably' signifies in a manner that is permanent, irreversible, and unalterable &mdash; conveying the author's hope that humanity can never again return to its past ignorance regarding environmental limits.</p>
    </div>
  </div>

  <!-- EXTRACT 2 -->
  <div style="background: rgba(76, 175, 80, 0.06); border: 1.5px solid #4CAF50; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #4CAF50; font-size: 16px;">Passage Extract 2:</b>
    <p style="font-style: italic; color: #E8F5E9; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;In the zoo at Lusaka, Zambia, there is a cage where the notice reads, 'The world’s most dangerous animal'. Inside the cage there is no animal but a mirror where you see yourself. Thanks to the efforts of a number of agencies in different countries, a new awareness has now dawned upon the most dangerous animal in the world. He has realised the wisdom of shifting from a system based on domination to one based on partnership. Scientists have catalogued about 1.4 million living species with which mankind shares the earth...&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #4CAF50; margin: 10px 0 4px 0; font-size: 15.5px;">Question 2.1:</h3>
      <p><b>What confronting spectacle awaits visitors inside the cage at the zoo in Lusaka, Zambia?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> Visitors find no wild beast inside the cage; instead, they face a <b>mirror</b> reflecting their own reflection beneath the notice <i>"The world's most dangerous animal"</i>.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.2:</h3>
      <p><b>Why is man identified as 'the world's most dangerous animal'?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> Man is deemed the most dangerous animal because human industrial activities, toxic emissions, deforestation, weaponization, and overconsumption threaten the total collapse of the biosphere and the annihilation of millions of other co-existing species.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.3:</h3>
      <p><b>What crucial philosophical realization has recently dawned upon humanity?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> Humanity has begun to grasp the urgent ecological imperative of shifting from an arrogant relationship based on <b>domination and subjugation</b> to one anchored in <b>mutual partnership and co-existence</b>.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 2.4:</h3>
      <p><b>How many living species have been scientifically catalogued, and what is the status of the uncatalogued ones?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> Approximately <b>1.4 million living species</b> have been catalogued, while an estimated three to one hundred million species remain unclassified, languishing in <i>"ignominious darkness"</i>.</p>
    </div>
  </div>

  <!-- EXTRACT 3 -->
  <div style="background: rgba(76, 175, 80, 0.06); border: 1.5px solid #4CAF50; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #4CAF50; font-size: 16px;">Passage Extract 3:</b>
    <p style="font-style: italic; color: #E8F5E9; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;Mr Lester R. Brown in his thoughtful book, The Global Economic Prospect, points out that the earth’s principal biological systems are four &mdash; fisheries, forests, grasslands, and croplands &mdash; and they form the foundation of the global economic system. In addition to supplying our food, these four systems provide virtually all the raw materials for industry except minerals and petroleum-derived synthetics. In large areas of the world, human claims on these systems are reaching an unsustainable level, a point where their productivity is being impaired.&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #4CAF50; margin: 10px 0 4px 0; font-size: 15.5px;">Question 3.1:</h3>
      <p><b>Name the four principal biological systems enumerated by Lester R. Brown.</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> The four principal biological systems are <b>fisheries</b>, <b>forests</b>, <b>grasslands</b>, and <b>croplands</b>.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.2:</h3>
      <p><b>What dual vital function do these four systems perform in human society?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> They furnish virtually all human food sustenance and supply almost all industrial raw materials, excluding minerals and synthetic petrochemical derivatives.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.3:</h3>
      <p><b>What catastrophic development occurs when human claims on these systems reach an 'unsustainable level'?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> Their biological productivity collapses: fisheries are decimated by overharvesting, forests shrink under the axe, fertile grasslands deteriorate into barren wastelands, and over-cropped soils become degraded and sterile.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 3.4:</h3>
      <p><b>In which influential treatise did Lester R. Brown articulate this biological analysis?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> Lester R. Brown articulated this foundational framework in his seminal book, <i><b>The Global Economic Prospect</b></i>.</p>
    </div>
  </div>

  <!-- EXTRACT 4 -->
  <div style="background: rgba(76, 175, 80, 0.06); border: 1.5px solid #4CAF50; border-radius: 8px; padding: 16px; margin: 24px 0;">
    <b style="color: #4CAF50; font-size: 16px;">Passage Extract 4:</b>
    <p style="font-style: italic; color: #E8F5E9; margin: 8px 0 12px 0; line-height: 1.65;">
      &ldquo;The growth of world population is one of the strongest factors distorting the future of human society. It took mankind more than a million years to reach the first billion. That was the world population around the year 1800. By the year 1900, a second billion was added, and the twentieth century has added another 3.7 billion. The present world population is estimated at 5.7 billion. Every four days the world population increases by one million. Fertility falls as incomes rise, education spreads, and health improves. Thus, development is the best contraceptive.&rdquo;
    </p>

    <div style="margin-top: 14px;">
      <h3 style="color: #4CAF50; margin: 10px 0 4px 0; font-size: 15.5px;">Question 4.1:</h3>
      <p><b>How long did it take the human race to reach its first billion, and around what year was this reached?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> It took mankind <b>more than one million years</b> from its origin to reach the first billion, a threshold achieved around the year <b>1800</b>.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.2:</h3>
      <p><b>How much population was added during the twentieth century alone?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> The twentieth century alone added an astronomical <b>3.7 billion people</b>, causing the global count to surpass 5.7 billion by 1994.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.3:</h3>
      <p><b>Explain the aphorism: 'Development is the best contraceptive'.</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> As societal development progresses &mdash; bringing higher family incomes, female literacy, and better healthcare &mdash; birth rates decline naturally without coercion, because families experience economic security and lower infant mortality.</p>

      <h3 style="color: #4CAF50; margin: 14px 0 4px 0; font-size: 15.5px;">Question 4.4:</h3>
      <p><b>At what rate was the global human population expanding at the time of this essay?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> The global population was expanding by approximately <b>one million people every four days</b>.</p>
    </div>
  </div>

  <!-- SECTION B: SHORT ANSWER QUESTIONS -->
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px; margin-top: 35px;">Section B: Short Answer Conceptual Questions (36 Marks &bull; 3 Marks Each &bull; 40&ndash;50 Words)</h2>

  <div style="margin-top: 16px;">
    <h3 style="color: #4CAF50; font-size: 16px;">Question 1: Why does Nani Palkhivala refer to the Earth as an 'ailing planet'?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> Palkhivala views the Earth as a living organic body whose vital systems are suffering acute deterioration. Widespread deforestation, receding freshwater aquifers, shrinking fisheries, expanding deserts, and climate disruptions are clinical symptoms indicating that the Earth is a patient whose physiological health has been catastrophically damaged by human excess.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 2: What was the revolutionary shift in human perception introduced by the Green Movement?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> Initiated in 1972, the Green Movement transformed human consciousness from a mechanistic worldview (viewing Earth as a dead machine to be exploited) to a holistic, ecological worldview. It taught mankind that our planet is an integrated living organism requiring medical care, ethical custody, and symbiotic balance.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 3: How did the Brundtland Commission define 'sustainable development' in 1987?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> The Brundtland Commission defined sustainable development as progress that fulfills the needs of the present generation without compromising or destroying the ability of future generations to meet their own needs. It strictly forbids exhausting the planet's ecological capital for transient, short-term economic gains.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 4: What is the significance of the mirror inside the cage at the zoo in Lusaka, Zambia?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> The cage bears the notice <i>"The world's most dangerous animal"</i>, but houses a mirror reflecting the visitor's face. It delivers a brilliant, humbling psychological lesson, alerting human beings that their reckless environmental plunder makes them the ultimate threat to the survival of Earth's biosphere.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 5: Why is the transition from 'domination' to 'partnership' critical for humanity?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> Humanity shares the Earth with 1.4 million recorded species and millions more undiscovered. An attitude of tyrannical domination leads to mass habitat destruction and systemic extinction. Only through egalitarian partnership and biological coexistence can the complex ecological web supporting human civilization remain intact.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 6: Name the four principal biological systems described by Lester R. Brown and explain their economic role.</h3>
    <p><b style="color: #4CAF50;">Answer:</b> The four systems are fisheries, forests, grasslands, and croplands. They constitute the cornerstone of the global economy, supplying the entirety of human food requirements and virtually all raw materials for worldwide manufacturing, barring minerals and synthetic petroleum-based chemical compounds.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 7: Explain the paradox: 'What goes under the pot now costs more than what goes inside it'.</h3>
    <p><b style="color: #4CAF50;">Answer:</b> This poignant observation captures the grave firewood crisis in underdeveloped nations. Massive local deforestation has made cooking fuel so scarce and expensive that the firewood burning under the cooking pot frequently costs more than the modest grain or vegetables simmering inside it.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 8: What does the historical proverb 'Forests precede mankind; deserts follow them' signify?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> The proverb emphasizes that lush forests flourished across the globe long before human civilization emerged. However, wherever humans settled, relentless clear-cutting, overgrazing, and soil depletion stripped the green canopy, leaving barren, man-made deserts in their wake as grim monuments to environmental greed.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 9: What does Article 48A of the Indian Constitution state, and what is its tragic ground reality?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> Article 48A directs the State to protect and enhance the natural environment, forests, and wildlife of the nation. Yet, Palkhivala laments that in India, constitutional laws are neither respected nor enforced; forest mafias plunder 3.7 million acres annually while authorities turn a blind eye.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 10: Why does the author identify world population explosion as the greatest distorting factor of human future?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> Adding one million people every four days exhausts finite natural resources, dilutes economic development, and aggravates poverty. No technological or agricultural breakthrough can sustain unchecked human breeding; uncontrolled population growth directly guarantees planetary ecological insolvency and mass deprivation.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 11: How does 'development' serve as the most effective contraceptive?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> Historical demographics prove that as societies develop &mdash; raising incomes, expanding female literacy, and improving public healthcare &mdash; birth rates plummet naturally. Educated parents understand that smaller families ensure higher quality of life, eliminating the desperate reliance on numerous children as unpaid laborers.</p>

    <h3 style="color: #4CAF50; font-size: 16px; margin-top: 18px;">Question 12: How did Mr. Edgar S. Woolard redefine the environmental role of industrial leaders?</h3>
    <p><b style="color: #4CAF50;">Answer:</b> As Chairman of Du Pont, Edgar S. Woolard famously declared himself the corporation's <i>"Chief Environmental Officer"</i>. He asserted that modern corporate survival requires business executives to be foremost environmental stewards, integrating aggressive ecological safeguards directly into everyday industrial enterprise.</p>
  </div>

  <!-- SECTION C: LONG ANSWER QUESTIONS -->
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px; margin-top: 35px;">Section C: Long Answer Thematic / Analytical Questions (30 Marks &bull; 6 Marks Each &bull; 120&ndash;150 Words)</h2>

  <div style="margin-top: 16px;">
    <!-- LA 1 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #4CAF50; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #4CAF50; font-size: 16.5px; margin: 0 0 8px 0;">Question 13: Trace the evolutionary paradigm shift from a mechanistic worldview to a holistic and ecological perspective. How does this redefine humanity's place in the cosmos?</h3>
      <p><b style="color: #4CAF50;">1. Thematic Introduction:</b> In his penetrating essay, Nani Palkhivala chronicles a profound psychological revolution in modern human civilization &mdash; the transition from Cartesian mechanistic exploitation to holistic ecological awareness, comparing its seismic cultural impact to the Copernican revolution of the sixteenth century.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">2. Comprehensive Core Analysis:</b> For centuries, the prevailing industrial mindset viewed the Earth as an inanimate, mechanical contraption designed solely for human consumption. Nature was perceived as an inventory of timber, ores, and waters to be conquered and looted. However, the Green Movement established in 1972 demolished this dangerous arrogance. Science and ethics now recognize the Earth as a massive, sentient living organism with its own metabolic needs, respiratory cycles, and delicate circulatory equilibria. Humans are not autocratic masters sitting outside the biosphere, but metabolic cells functioning within its living fabric. When we poison rivers or strip forests, we afflict the very organism keeping us alive.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">3. Global Conclusion:</b> This shift redefines human status from predatory conqueror to humble trustee. We are morally summoned to act not as plunderers with freehold rights, but as responsible stewards bound to nurse an ailing planet back to vibrant health.</p>
    </div>

    <!-- LA 2 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #4CAF50; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #4CAF50; font-size: 16.5px; margin: 0 0 8px 0;">Question 14: Examine Lester R. Brown's analysis of the four principal biological systems. What catastrophic ecological and economic consequences unfold when their sustainable thresholds are breached?</h3>
      <p><b style="color: #4CAF50;">1. Thematic Introduction:</b> Drawing from Lester R. Brown's monumental treatise <i>The Global Economic Prospect</i>, Nani Palkhivala elucidates the four biological foundation pillars &mdash; fisheries, forests, grasslands, and croplands &mdash; that support all human economic activity and sustenance.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">2. Comprehensive Core Analysis:</b> These four systems supply humanity's entire food basket and nearly all industrial raw materials, excluding minerals and synthetic chemicals. However, overpopulation and excessive commercial greed have driven human demands past the regenerative carrying capacity of these systems. The disastrous fallout is evident across four fronts:
      <br/>&bull; <i>Fisheries:</i> Unchecked global protein demand has caused catastrophic overfishing, threatening marine food chains with irreversible collapse.
      <br/>&bull; <i>Forests:</i> Commercial logging and acute firewood demand consume forty to fifty million acres of tropical forests annually, causing mass extinction of species.
      <br/>&bull; <i>Grasslands:</i> Overgrazing has stripped fragile topsoil, turning magnificent pasturelands into bleak, dust-blown deserts.
      <br/>&bull; <i>Croplands:</i> Intensive chemical farming and loss of organic manure have exhausted soil fertility, threatening widespread famines.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">3. Global Conclusion:</b> Breaching these biological thresholds transforms renewable resources into non-renewable wastelands. Overstepping planetary boundaries inevitably precipitates economic depression, resource wars, and catastrophic ecological collapse.</p>
    </div>

    <!-- LA 3 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #4CAF50; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #4CAF50; font-size: 16.5px; margin: 0 0 8px 0;">Question 15: Critically evaluate Nani Palkhivala's assertion: 'Laws are neither respected nor enforced in India'. Contextualize this in light of environmental degradation, Article 48A, and institutional inertia.</h3>
      <p><b style="color: #4CAF50;">1. Thematic Introduction:</b> As one of India's preeminent constitutional jurists, Nani Palkhivala exposes a harrowing dichotomy: while India possesses an enlightened, progressive constitutional framework on paper, its ground implementation is crippled by widespread lawlessness and institutional inertia.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">2. Comprehensive Core Analysis:</b> Palkhivala points out that Article 48A of the Indian Constitution explicitly mandates that the State shall endeavor to safeguard and enrich the nation's environment, forests, and wildlife. However, like noble constitutional clauses prohibiting untouchability, child labor, and caste discrimination, environmental statutes remain virtually dead letters. Timber mafias, corrupt bureaucrats, and reckless industrial polluters operate with near-total impunity. A parliamentary Estimates Committee report revealed that India was losing forests at the alarming rate of 3.7 million acres annually. Shockingly, satellite data revealed that vast areas officially classified as 'forest land' were completely denuded wastelands, exposing the fraudulent paperwork masking environmental devastation.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">3. Global Conclusion:</b> Palkhivala warns that legislative eloquence without rigorous enforcement is a dangerous illusion. Environmental preservation demands vigilant civil society oversight, judicial teeth, administrative accountability, and genuine public reverence for the rule of law.</p>
    </div>

    <!-- LA 4 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #4CAF50; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #4CAF50; font-size: 16.5px; margin: 0 0 8px 0;">Question 16: Analyze the nexus between uncontrolled population explosion, pervasive poverty, and environmental degradation. Why does the author argue that humanity faces a choice between population control and perpetuation of misery?</h3>
      <p><b style="color: #4CAF50;">1. Thematic Introduction:</b> Nani Palkhivala identifies runaway demographic growth as the supreme distorting force undermining all social progress, contending that unchecked population growth traps underdeveloped nations in an escalating cycle of poverty and ecological ruin.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">2. Comprehensive Core Analysis:</b> It took over one million years for humanity to reach one billion by 1800; yet in the twentieth century alone, 3.7 billion were added. In India, a population of 920 million in 1994 exceeded the entire populace of Africa and South America combined. Impoverished families erroneously believe that producing more children provides more working hands, but each child is another mouth that must consume food, fuel, and shelter. This demographic deluge rapidly strips surrounding forests for firewood, overfarms fragile croplands, and swamps public infrastructure. Palkhivala asserts that <i>"development is the best contraceptive"</i> &mdash; education and economic prosperity naturally depress fertility rates. However, development cannot take root if runaway births continually consume all fiscal resources.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">3. Global Conclusion:</b> Humanity cannot rely on coercive tyranny, but must enact voluntary family planning as a patriotic, ethical imperative. Failing to curb numbers guarantees the tragic perpetuation of mass squalor, famine, and environmental collapse.</p>
    </div>

    <!-- LA 5 -->
    <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #4CAF50; padding: 14px 16px; margin-bottom: 22px; border-radius: 4px;">
      <h3 style="color: #4CAF50; font-size: 16.5px; margin: 0 0 8px 0;">Question 17: Discuss the philosophical significance of the quotes by Margaret Thatcher and Lester Brown regarding generational stewardship. How do these aphorisms encapsulate the spirit of the 'Era of Responsibility'?</h3>
      <p><b style="color: #4CAF50;">1. Thematic Introduction:</b> Palkhivala crystallizes the core moral thesis of his essay by invoking two historic pronouncements: Margaret Thatcher's legal metaphor of 'life tenancy with a repairing lease' and Lester Brown's resonant insight that we have 'borrowed Earth from our children'.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">2. Comprehensive Core Analysis:</b> Thatcher brilliantly applies legal property concepts to global ethics. A 'freehold' gives the owner absolute license to use, damage, or sell property as they please. Humans, however, possess only a 'life tenancy' &mdash; temporary residency accompanied by a strictly binding 'full repairing lease'. We are legally and morally obligated to maintain the estate in pristine condition during our stay. Lester Brown carries this ethical vision even further: our ancestors did not leave us an outright inheritance to squander; rather, we have borrowed the biosphere's capital from future generations. To pass on an exhausted planet of barren soils, dried aquifers, and toxic air is an unconscionable breach of intergenerational trust.</p>
      <p style="margin-top: 8px;"><b style="color: #4CAF50;">3. Global Conclusion:</b> These profound aphorisms encapsulate the <i>"Era of Responsibility"</i>. They demand that corporate industry, sovereign governments, and individual citizens operate as conscientious trustees, ensuring humanity leaves behind a thriving, beautiful planet.</p>
    </div>
  </div>

  <!-- SECTION D: NCERT OFFICIAL TEXTBOOK EXERCISE SOLUTIONS -->
  <h2 style="color: #4CAF50; font-weight: bold; border-bottom: 2px solid #4CAF50; padding-bottom: 6px; margin-top: 35px;">Section D: Complete Official NCERT Textbook Exercise Solutions</h2>

  <div style="margin-top: 16px;">
    <h3 style="color: #4CAF50; font-size: 16.5px;">I. Understanding the Text</h3>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <p><b>Q1: Locate the lines in the text that support the title 'The Ailing Planet'.</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> The title is powerfully substantiated by the following explicit lines in the text:
      <br/>1. <i>"The earth’s vital signs reveal a patient in declining health."</i>
      <br/>2. <i>"Are we to leave our successors a scorched planet of advancing deserts, impoverished landscapes and an ailing environment?"</i>
      <br/>3. <i>"...the environment has deteriorated so badly that it is 'critical' in many of the eighty-eight countries investigated."</i>
      <br/>These textual statements establish that our planet's living biological machinery is undergoing severe physiological breakdown due to unsustainable human exploitation.</p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <p><b>Q2: What does the notice 'The world’s most dangerous animal' at a cage in the zoo at Lusaka, Zambia, signify?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> The notice hangs over a cage containing a mirror where the visitor sees their own reflection. It signifies that humanity &mdash; through nuclear proliferation, industrial toxicity, deforestation, and overconsumption &mdash; constitutes the most predatory and catastrophic force on Earth, far outstripping the ferocity of any wild carnivore. It symbolizes the urgent psychological necessity of renouncing human domination in favor of partnership with other co-existing species.</p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <p><b>Q3: How are the earth’s principal biological systems being depleted?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> As identified by Lester R. Brown, the four systems &mdash; fisheries, forests, grasslands, and croplands &mdash; are being pushed past their carrying capacity:
      <br/>&bull; <i>Fisheries</i> are devastated by relentless commercial overfishing driven by global protein hunger.
      <br/>&bull; <i>Forests</i> are decimated at the rate of 40 to 50 million acres a year for timber and firewood.
      <br/>&bull; <i>Grasslands</i> are transformed into bleak deserts due to unchecked cattle overgrazing.
      <br/>&bull; <i>Croplands</i> are starved of organic nutrients because cattle dung is burned for domestic fuel, leading to progressive soil exhaustion.</p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <p><b>Q4: Why does the author agree that the growth of world population is one of the strongest factors distorting the future of human society?</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> The author underscores that unchecked demographic expansion relentlessly devours natural resources, negating the gains of technological and economic advancement. Adding one million people every four days directly fuels unemployment, slum proliferation, deforestation, and food insecurity. Palkhivala stresses that true human survival hinges upon voluntary population control, as continuous growth locks billions into inescapable misery.</p>
    </div>

    <h3 style="color: #4CAF50; font-size: 16.5px; margin-top: 25px;">II. Talking About the Text</h3>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <p><b>Discuss: 'Laws are neither respected nor enforced in India.'</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> India possesses an exemplary constitutional framework, including Article 48A dedicated to environmental and wildlife preservation. However, widespread corruption, bureaucratic apathy, and weak law enforcement ensure that illegal logging, industrial dumping, and poaching flourish unchecked. Just as social reform laws against caste untouchability or child labor struggle against societal inertia, environmental regulations remain largely unenforced paper decrees. Without civic empowerment, stringent judicial monitoring, and swift punitive penalties, statutory laws fail to protect the nation's fragile ecology.</p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <p><b>Discuss: 'We have not inherited this earth from our forefathers; we have borrowed it from our children.'</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> This profound indigenous wisdom, cited by Lester Brown, fundamentally reorients environmental morality. If Earth were an unconditional inheritance, we might argue an entitlement to consume it as we see fit. But treating it as a sacred loan borrowed from our children introduces a binding moral duty to return it unpolluted, fertile, and intact. It forbids us from mortgaging our descendants' future for short-term consumer comforts, demanding that we adopt sustainable lifestyles and act as faithful intergenerational trustees.</p>
    </div>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <p><b>Discuss: The problems of overpopulation that directly affect our everyday life.</b></p>
      <p><b style="color: #4CAF50;">Answer:</b> Overpopulation is experienced daily through overwhelming overcrowding in public transit, severe traffic gridlock, perennial drinking water shortages, expanding toxic landfills, soaring living costs, and rampant air and noise pollution. It strains healthcare systems, creates intense competition for school and university admissions, and exacerbates chronic urban unemployment, visibly degrading individual quality of life and public mental well-being.</p>
    </div>

    <h3 style="color: #4CAF50; font-size: 16.5px; margin-top: 25px;">III. Thinking About Language</h3>

    <div style="background: rgba(0,0,0,0.2); padding: 12px 14px; margin: 12px 0; border-left: 3px solid #4CAF50; border-radius: 4px;">
      <p><b>Explain the meanings of the following contextual expressions from the text:</b></p>
      <p style="margin-top: 6px;">
        1. <b style="color: #4CAF50;">A holistic and ecological view:</b> An all-embracing perspective viewing Earth as an integrated, interdependent living organism rather than a collection of separate exploitable parts.<br/>
        2. <b style="color: #4CAF50;">Sustainable development:</b> Economic progress that meets current human needs without draining natural capital or compromising future generations' ability to survive.<br/>
        3. <b style="color: #4CAF50;">Powerhouse of evolution:</b> Tropical forests whose immense biodiversity acts as the prime incubator for the genetic development and emergence of new living species.<br/>
        4. <b style="color: #4CAF50;">Ignominious darkness:</b> Humiliating, unheralded oblivion, referring to millions of undiscovered biological species perishing into extinction before science can classify them.<br/>
        5. <b style="color: #4CAF50;">Inter alia:</b> A Latin legal term signifying <i>"among other things"</i>.<br/>
        6. <b style="color: #4CAF50;">Transcending concern:</b> A universal, overriding priority that crosses all political and national frontiers, concerning the literal survival of the human species.
      </p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: INTERACTIVE MCQS                           */
/* -------------------------------------------------------------------------- */

export const c11EngH7Mcqs = [
  {
    "id": "c11-eng-h7-m1",
    "question": "When and where was the world's first nationwide Green Party founded?",
    "options": [
      "A):   In New Zealand in 1972",
      "B):   In Sweden in 1980",
      "C):   In the United Kingdom in 1975",
      "D):   In Canada in 1968"
    ],
    "correctAnswer": "a",
    "explanation": "Textual Fact: The world's first nationwide Green Party was founded in New Zealand in the year 1972, initiating the global Green Movement."
  },
  {
    "id": "c11-eng-h7-m2",
    "question": "Which sixteenth-century astronomer is credited with teaching mankind that the planets revolve around the sun?",
    "options": [
      "A):   Galileo Galilei",
      "B):   Nicolaus Copernicus",
      "C):   Johannes Kepler",
      "D):   Isaac Newton"
    ],
    "correctAnswer": "b",
    "explanation": "Textual Reference: Nani Palkhivala compares the holistic shift to the revolutionary revelation introduced by Copernicus in the sixteenth century."
  },
  {
    "id": "c11-eng-h7-m3",
    "question": "Which international commission popularized the seminal concept of 'Sustainable Development' in 1987?",
    "options": [
      "A):   The Club of Rome",
      "B):   The United Nations Environment Programme",
      "C):   The World Commission on Environment and Development (Brundtland Commission)",
      "D):   The World Wildlife Fund"
    ],
    "correctAnswer": "c",
    "explanation": "Textual Fact: In 1987, the World Commission on Environment and Development (popularly known as the Brundtland Commission) formally defined and popularized 'Sustainable Development'."
  },
  {
    "id": "c11-eng-h7-m4",
    "question": "What does a visitor confront inside the cage labeled 'The world's most dangerous animal' at the zoo in Lusaka, Zambia?",
    "options": [
      "A):   A poisonous black mamba",
      "B):   A ferocious African lion",
      "C):   A skull of an extinct species",
      "D):   A mirror reflecting the visitor's own image"
    ],
    "correctAnswer": "d",
    "explanation": "Textual Fact: Inside the cage in the Lusaka zoo, there is no animal but a mirror where the visitor sees their own reflection."
  },
  {
    "id": "c11-eng-h7-m5",
    "question": "Who authored the influential environmental book titled 'The Global Economic Prospect'?",
    "options": [
      "A):   Mr. Lester R. Brown",
      "B):   Nani Palkhivala",
      "C):   Edgar S. Woolard",
      "D):   L.K. Jha"
    ],
    "correctAnswer": "a",
    "explanation": "Textual Reference: Mr. Lester R. Brown pointed out the Earth's four biological systems in his thoughtful book 'The Global Economic Prospect'."
  },
  {
    "id": "c11-eng-h7-m6",
    "question": "Which of the following constitutes one of the earth's four principal biological systems identified by Lester Brown?",
    "options": [
      "A):   Atmospheric jet streams",
      "B):   Fisheries, forests, grasslands, and croplands",
      "C):   Petroleum reservoirs and mineral ores",
      "D):   Glacial ice caps and mountain valleys"
    ],
    "correctAnswer": "b",
    "explanation": "Textual Definition: The four principal biological systems that form the foundation of the global economic system are fisheries, forests, grasslands, and croplands."
  },
  {
    "id": "c11-eng-h7-m7",
    "question": "Approximately around what year did the world's human population reach its first one billion milestone?",
    "options": [
      "A):   Around 1700",
      "B):   Around 1850",
      "C):   Around 1800",
      "D):   Around 1920"
    ],
    "correctAnswer": "c",
    "explanation": "Textual Fact: It took mankind more than a million years to reach the first billion, a milestone reached around the year 1800."
  },
  {
    "id": "c11-eng-h7-m8",
    "question": "Which article of the Constitution of India provides that the State shall endeavour to protect and improve the environment?",
    "options": [
      "A):   Article 21",
      "B):   Article 51A",
      "C):   Article 370",
      "D):   Article 48A"
    ],
    "correctAnswer": "d",
    "explanation": "Constitutional Fact: Article 48A of the Constitution of India explicitly directs the State to protect and improve the environment and safeguard forests and wildlife."
  },
  {
    "id": "c11-eng-h7-m9",
    "question": "What does the historical adage 'Forests precede mankind; deserts follow them' imply?",
    "options": [
      "A):   Human settlements invariably clear forests, ultimately leaving barren deserts due to ecological overexploitation",
      "B):   Deserts naturally transform into forests over centuries of human agriculture",
      "C):   Mankind originated in deep deserts before discovering tropical forests",
      "D):   Forests and deserts expand at identical biological rates across all continents"
    ],
    "correctAnswer": "a",
    "explanation": "Textual Interpretation: The proverb warns that luxuriant forests existed long before humans, but human presence through reckless deforestation turns once-fertile habitats into sterile deserts."
  },
  {
    "id": "c11-eng-h7-m10",
    "question": "Why does the author state that 'what goes under the pot now costs more than what goes inside it'?",
    "options": [
      "A):   Cooking gas and electricity have been heavily taxed by global governments",
      "B):   Acute local deforestation has made cooking firewood more expensive than the food grains being cooked",
      "C):   Ceramic and iron cooking pots are handcrafted by specialized artisans",
      "D):   Food prices have dropped dramatically because of international grain subsidies"
    ],
    "correctAnswer": "b",
    "explanation": "Contextual Irony: In impoverished areas, firewood has become so scarce due to forest destruction that buying fuel to cook a meal costs more than the actual food cooked."
  },
  {
    "id": "c11-eng-h7-m11",
    "question": "Why are tropical forests referred to as the 'powerhouse of evolution'?",
    "options": [
      "A):   They generate high-voltage geothermal energy from underlying volcanic fissures",
      "B):   They contain millions of animal species that have remained static for eons",
      "C):   They supply the world with the majority of its petroleum and coal deposits",
      "D):   Their extraordinarily rich biodiversity fosters the origin, adaptation, and evolution of diverse living species"
    ],
    "correctAnswer": "d",
    "explanation": "Textual Meaning: Dr. Myers called tropical forests the 'powerhouse of evolution' because their vast biodiversity drives the emergence and evolutionary advancement of planetary life."
  },
  {
    "id": "c11-eng-h7-m12",
    "question": "What does Palkhivala mean when he asserts that 'development is the best contraceptive'?",
    "options": [
      "A):   Economic development, rising incomes, and female education naturally cause birth rates to decline",
      "B):   Modern hospitals distribute synthetic contraceptives free of cost to rural clinics",
      "C):   Industrial mechanization replaces all human labor with robotic equipment",
      "D):   Governments must legally sterilize citizens who work in agricultural fields"
    ],
    "correctAnswer": "a",
    "explanation": "Socio-Demographic Truth: As incomes rise, female literacy spreads, and healthcare improves, parents naturally opt for smaller families, proving development to be the most humane birth-control driver."
  },
  {
    "id": "c11-eng-h7-m13",
    "question": "What did Mr. Edgar S. Woolard, Chairman of Du Pont, boldly announce as his executive role?",
    "options": [
      "A):   Chief Financial Strategist",
      "B):   Global Commercial Ambassador",
      "C):   Chief Environmental Officer",
      "D):   Supreme Corporate Director"
    ],
    "correctAnswer": "c",
    "explanation": "Textual Detail: Mr. Edgar S. Woolard declared: 'Our continued existence as a leading manufacturer requires that we excel in environmental performance,' appointing himself 'Chief Environmental Officer'."
  },
  {
    "id": "c11-eng-h7-m14",
    "question": "According to Margaret Thatcher, what kind of tenancy do human beings hold on planet Earth?",
    "options": [
      "A):   An unrestricted freehold with absolute property rights of disposal",
      "B):   A seasonal rental agreement with no structural responsibilities",
      "C):   A life tenancy with a full repairing lease",
      "D):   An ancestral perpetual lease requiring no maintenance"
    ],
    "correctAnswer": "c",
    "explanation": "Textual Quote: Margaret Thatcher memorably stated: 'No generation has a freehold on this earth. All we have is a life tenancy — with a full repairing lease.'"
  },
  {
    "id": "c11-eng-h7-m15",
    "question": "What is the status of the estimated millions of living species that have not yet been catalogued by scientists?",
    "options": [
      "A):   They flourish abundantly in artificial laboratories across developed nations",
      "B):   They have all migrated into outer space through meteorological shifts",
      "C):   They are permanently protected by international maritime treaties",
      "D):   They languish unnamed in ignominious darkness and face silent extinction"
    ],
    "correctAnswer": "d",
    "explanation": "Textual Phrase: Between three to a hundred million uncatalogued species 'languish unnamed in ignominious darkness' and face extinction before even being recorded."
  },
  {
    "id": "c11-eng-h7-m16",
    "question": "What does the author identify as the primary reason why environmental laws fail to arrest ecological damage in India?",
    "options": [
      "A):   In India, statutory laws are neither respected nor enforced, rendering constitutional guarantees ineffective",
      "B):   The Indian Constitution contains no provisions regarding natural forestry or wildlife",
      "C):   India's scientific agencies lack modern satellite surveillance equipment",
      "D):   The parliament has never debated environmental preservation"
    ],
    "correctAnswer": "a",
    "explanation": "Textual & Judicial Critique: Palkhivala points out the painful reality that 'laws are neither respected nor enforced in India,' leaving Article 48A unenforced on the ground."
  },
  {
    "id": "c11-eng-h7-m17",
    "question": "How does burning dried dung for domestic cooking fuel directly harm the agricultural croplands?",
    "options": [
      "A):   It generates acid rain that immediately burns all standing wheat crops",
      "B):   It robs the soil of an indispensable natural organic manure that replenishes its fertility",
      "C):   It attracts harmful fungal pests to surrounding agricultural farms",
      "D):   It triggers flash floods by melting mountain glaciers"
    ],
    "correctAnswer": "b",
    "explanation": "Textual Fact: Burning dung deprives the agricultural soil of an important natural organic fertilizer, contributing to the progressive exhaustion of croplands."
  },
  {
    "id": "c11-eng-h7-m18",
    "question": "What profound philosophical shift in human ethics is encapsulated in the aphorism 'We have borrowed it from our children'?",
    "options": [
      "A):   Children are legally responsible for repaying sovereign public national debts",
      "B):   Ancestors had no legal standing to draft civil constitutions for their successors",
      "C):   Economic loans must be repaid before any individual reaches adulthood",
      "D):   Earth is not an ancestral possession to be squandered, but a borrowed trust to be preserved for future generations"
    ],
    "correctAnswer": "d",
    "explanation": "Ethical Philosophy: Lester Brown's aphorism emphasizes intergenerational stewardship — Earth is not our property to plunder, but a sacred loan held in trust for our descendants."
  },
  {
    "id": "c11-eng-h7-m19",
    "question": "What vicious dilemma does overpopulation impose upon impoverished households?",
    "options": [
      "A):   Families migrate constantly between rural and urban sectors every winter",
      "B):   Parents are forced to pay high school fees for vocational trade courses",
      "C):   Families produce more children believing they are extra earning hands, whereas they only add unemployed mouths to feed",
      "D):   Governments deny subsidized food grains to families with fewer than five siblings"
    ],
    "correctAnswer": "c",
    "explanation": "Analytical Insight: Palkhivala reveals the tragic fallacy where impoverished parents believe more children bring more wealth, whereas 'more children does not mean more workers, merely more people without work'."
  },
  {
    "id": "c11-eng-h7-m20",
    "question": "What defines the overarching character of the emerging 'Era of Responsibility' described in the conclusion?",
    "options": [
      "A):   Strict military control over natural resources by the United Nations Security Council",
      "B):   A holistic awakening where environmental concern transcends national boundaries and focuses on the survival of the biosphere",
      "C):   The total elimination of all private commercial industries across the world",
      "D):   The migration of coastal human populations to mountainous heartlands"
    ],
    "correctAnswer": "b",
    "explanation": "Philosophical Synthesis: The 'Era of Responsibility' is a holistic worldview where concern is no longer just the survival of individual countries, but the transcendent survival of the entire living planet."
  }
];
