// Class 12 Political Science Chapter 8: Nation-Building and Its Problems (Marks: 06)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Part B: Politics in India since Independence
// Primary Theme Color: #FF6D00 (Saffron Flame)

const themeColor = "#FF6D00";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Pol8HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & CORE DEFINITIONS CARD -->
  <div style="background: rgba(255, 109, 0, 0.06); border: 1.5px solid #FF6D00; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF6D00; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Geopolitical Definitions</h2>
    <p class="text-center" style="color: #FFE082; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 12 Chapter 8: Nation-Building and Its Problems (6 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">1. Nation-Building:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The multifaceted historical and political process of forging a unified national identity, establishing democratic political institutions, ensuring socio-economic justice, and welding diverse linguistic, religious, and regional communities into a coherent sovereign republic.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">2. Two-Nation Theory:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The ideological doctrine propounded by Muhammad Ali Jinnah and the All-India Muslim League asserting that Hindus and Muslims in British India constituted two separate, mutually incompatible nations rather than two religious communities, thereby demanding the creation of Pakistan.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">3. Instrument of Accession (IoA):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The standard legal treaty signed between the Dominion of India and the hereditary rulers of the 565 princely states, whereby the rulers formally agreed to accede their states to India, surrendering sovereign jurisdiction over Defence, External Affairs, and Communications.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">4. Operation Polo (September 1948):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The decisive military police action executed by the Indian Armed Forces under Home Minister Sardar Vallabhbhai Patel to liberate the princely state of Hyderabad from the tyrannical rule of Nizam Mir Osman Ali Khan and his fanatical paramilitary force, the Razakars.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">5. States Reorganisation Act (1956):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Historic legislation enacted by the Indian Parliament following the recommendations of the Justice Fazal Ali Commission, restructuring internal provincial boundaries along linguistic lines into 14 States and 6 Union Territories.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: NEHRU'S VISION AND THE THREE CHALLENGES -->
  <h2 style="color: #FF6D00; font-weight: bold; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 30px;">1. Nehru's Approach to Nation-Building &amp; The Three Grand Challenges</h2>

  <p>At the midnight stroke of August 14&ndash;15, 1947, independent India was born. Addressing a special midnight session of the Constituent Assembly, India&rsquo;s first Prime Minister, <b style="color: #FF6D00;">Jawaharlal Nehru</b>, delivered his immortal speech, famously remembered as the <b style="color: #FF6D00;">"Tryst with Destiny"</b>:</p>

  <!-- THINKER QUOTE BOX: TRYST WITH DESTINY -->
  <div style="background: rgba(255, 109, 0, 0.08); border-left: 5px solid #FF6D00; border-radius: 8px; padding: 16px 18px; margin: 20px 0;">
    <h4 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">🧠 Historic Words: "Tryst with Destiny"</h4>
    <p style="color: #FFFFFF; font-style: italic; margin: 0 0 8px 0; line-height: 1.6;">
      &ldquo;Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge, not wholly or in full measure, but very substantially. At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.&rdquo;
    </p>
    <span style="color: #FFE082; font-size: 14px; font-weight: 600;">&mdash; Jawaharlal Nehru, 14&ndash;15 August 1947</span>
  </div>

  <p>Yet, the dawn of Indian freedom was severely shadowed by the bloodbath of Partition. Independent India immediately confronted <b style="color: #FF6D00;">three monumental challenges</b> that determined the trajectory of modern Indian nationhood:</p>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(i) Challenge 1: Forging a United Nation Amidst Vast Diversity</h3>
  <p>India was a continental landmass home to hundreds of languages, distinct religions, ethnic identities, and geographic contrasts. The first immediate challenge was to shape a united country while accommodating its immense pluralism. Western political commentators predicted that India was merely a "geographical expression" bound to disintegrate into dozens of warring linguistic factions.</p>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(ii) Challenge 2: Establishing a Resilient Constitutional Democracy</h3>
  <p>The second challenge was to operationalize representative democracy based on the parliamentary system and <b style="color: #FF6D00;">Universal Adult Franchise</b>. Skeptics argued that democracy could not survive in an impoverished, largely illiterate society. India proved critics wrong by establishing free elections, fundamental rights, judicial independence, and multiparty political competition.</p>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(iii) Challenge 3: Ensuring Equitable Economic Development &amp; Welfare for All</h3>
  <p>The third challenge was to eliminate mass poverty and design an economic system that ensured the welfare of all citizens &mdash; especially disadvantaged castes, religious minorities, and Scheduled Tribes &mdash; through state-directed planning, land reforms, and social justice.</p>

  <!-- ULTRA HD CONCEPT DIAGRAM: THREE CHALLENGES OF NATION BUILDING (WHITE BACKGROUND) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 109, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 250" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="404" height="234" rx="10" fill="#FFFDF8" stroke="#FED7AA" stroke-width="2"/>
        <text x="210" y="30" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#9A3412" text-anchor="middle">THE TRIAD OF NATION-BUILDING CHALLENGES (1947)</text>
        
        <!-- Pillar 1: Unity -->
        <rect x="20" y="48" width="115" height="154" rx="6" fill="#FFF7ED" stroke="#EA580C" stroke-width="1.5"/>
        <rect x="20" y="48" width="115" height="26" rx="6" fill="#EA580C"/>
        <text x="77" y="66" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">NATIONAL UNITY</text>
        <text x="77" y="92" font-family="Arial, sans-serif" font-size="9" fill="#431407" text-anchor="middle">&bull; Plural Diversity</text>
        <text x="77" y="108" font-family="Arial, sans-serif" font-size="9" fill="#431407" text-anchor="middle">&bull; Linguistic Accommodation</text>
        <text x="77" y="124" font-family="Arial, sans-serif" font-size="9" fill="#431407" text-anchor="middle">&bull; 565 Princely States</text>
        <text x="77" y="140" font-family="Arial, sans-serif" font-size="9" fill="#431407" text-anchor="middle">&bull; Patel's Integration</text>
        <text x="77" y="162" font-family="Arial, sans-serif" font-size="8.5" fill="#9A3412; font-weight:bold;" text-anchor="middle">Avert Balkanization</text>
        <text x="77" y="180" font-family="Arial, sans-serif" font-size="8.5" fill="#431407" text-anchor="middle">Constitutional Secularism</text>

        <!-- Pillar 2: Democracy -->
        <rect x="152" y="48" width="115" height="154" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <rect x="152" y="48" width="115" height="26" rx="6" fill="#3B82F6"/>
        <text x="209" y="66" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">DEMOCRACY</text>
        <text x="209" y="92" font-family="Arial, sans-serif" font-size="9" fill="#1E3A8A" text-anchor="middle">&bull; Adult Franchise</text>
        <text x="209" y="108" font-family="Arial, sans-serif" font-size="9" fill="#1E3A8A" text-anchor="middle">&bull; Fundamental Rights</text>
        <text x="209" y="124" font-family="Arial, sans-serif" font-size="9" fill="#1E3A8A" text-anchor="middle">&bull; Free Elections</text>
        <text x="209" y="140" font-family="Arial, sans-serif" font-size="9" fill="#1E3A8A" text-anchor="middle">&bull; Independent Judiciary</text>
        <text x="209" y="162" font-family="Arial, sans-serif" font-size="8.5" fill="#1D4ED8; font-weight:bold;" text-anchor="middle">Rule of Law</text>
        <text x="209" y="180" font-family="Arial, sans-serif" font-size="8.5" fill="#1E3A8A" text-anchor="middle">Parliamentary System</text>

        <!-- Pillar 3: Economic Development -->
        <rect x="285" y="48" width="115" height="154" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.5"/>
        <rect x="285" y="48" width="115" height="26" rx="6" fill="#16A34A"/>
        <text x="342" y="66" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">DEVELOPMENT</text>
        <text x="342" y="92" font-family="Arial, sans-serif" font-size="9" fill="#14532D" text-anchor="middle">&bull; Eradicate Poverty</text>
        <text x="342" y="108" font-family="Arial, sans-serif" font-size="9" fill="#14532D" text-anchor="middle">&bull; Five Year Plans</text>
        <text x="342" y="124" font-family="Arial, sans-serif" font-size="9" fill="#14532D" text-anchor="middle">&bull; Land Reforms</text>
        <text x="342" y="140" font-family="Arial, sans-serif" font-size="9" fill="#14532D" text-anchor="middle">&bull; Welfare for SC/ST</text>
        <text x="342" y="162" font-family="Arial, sans-serif" font-size="8.5" fill="#15803D; font-weight:bold;" text-anchor="middle">Social Justice</text>
        <text x="342" y="180" font-family="Arial, sans-serif" font-size="8.5" fill="#14532D" text-anchor="middle">Mixed Economy Model</text>

        <!-- Bottom Banner -->
        <rect x="20" y="210" width="380" height="24" rx="4" fill="#C2410C"/>
        <text x="210" y="226" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">FOUNDATIONS OF THE REPUBLIC: SECULAR, DEMOCRATIC &amp; SOCIALIST</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The tripartite foundation of Indian nationhood: National Unity, Constitutional Democracy, and Socio-Economic Justice.
    </div>
  </div>

  <!-- SECTION 2: LEGACY OF PARTITION -->
  <h2 style="color: #FF6D00; font-weight: bold; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 30px;">2. Legacy of Partition: Refugee Resettlement &amp; Human Trauma</h2>

  <p>The creation of two independent dominions &mdash; India and Pakistan &mdash; was based on the religious majority principle under the British Mountbatten Plan of June 3, 1947. However, the operational execution of partition unleashed one of the deepest human tragedies in recorded history:</p>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(i) Difficulties in Executing Partition</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF6D00;">No Single Contiguous Muslim Belt:</b> Muslims were concentrated in the northwest and the east, necessitating the awkward creation of two disconnected wings: West Pakistan and East Pakistan (now Bangladesh), separated by thousands of kilometers of Indian territory.</li>
    <li><b style="color: #FF6D00;">Bifurcation of Punjab and Bengal:</b> In Punjab and Bengal, non-Muslims and Muslims were almost evenly distributed across districts. Consequently, these giant provinces had to be bifurcated through harrowing territorial division drawn by British boundary commissioner Sir Cyril Radcliffe.</li>
    <li><b style="color: #FF6D00;">Dissent Against Partition:</b> Not all Muslim-majority regions endorsed the Two-Nation Theory. In the North-West Frontier Province (NWFP), the legendary non-violent Pashtun leader <b style="color: #FF6D00;">Khan Abdul Ghaffar Khan ("Frontier Gandhi")</b> and his movement (Khudai Khidmatgars) vehemently opposed partition, but their voices were ignored.</li>
  </ul>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(ii) Consequences of Partition: A Division of Hearts</h3>
  <p>Partition was not merely a territorial drawing of lines; it was a violent disruption of lives:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF6D00;">Mass Casualties and Forced Migration:</b> An estimated 80 lakh people were forced to migrate across borders under deadly communal mob attacks. Between 5 to 10 lakh innocent human lives were extinguished.</li>
    <li><b style="color: #FF6D00;">Atrocities Against Women:</b> Thousands of women were abducted, sexually assaulted, and forced into marriages on both sides of the border. In countless families, women were killed by their own relatives under the guise of &ldquo;preserving family honor&rdquo;.</li>
    <li><b style="color: #FF6D00;">Division of Property and Government:</b> Partition divided tables, chairs, typewriters, police batons, musical instruments of police bands, railway coaches, and civil servants between the two new nations.</li>
    <li><b style="color: #FF6D00;">Challenge of Refugee Rehabilitation:</b> Tens of lakhs of destitute refugees flooded into Delhi, Punjab, and West Bengal. Giant transit camps (such as Kingsway Camp in Delhi) were erected, requiring immense financial and administrative resources to provide permanent shelter and agricultural land allotments.</li>
  </ul>

  <!-- SECTION 3: INTEGRATION OF PRINCELY STATES -->
  <h2 style="color: #FF6D00; font-weight: bold; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 30px;">3. Integration of Princely States: The Iron Will of Sardar Patel</h2>

  <p>British India was divided into British Indian Provinces (governed directly by the Crown) and <b style="color: #FF6D00;">565 Princely States</b> (ruled by hereditary monarchs under British paramountcy). Princely states covered one-third of the subcontinent&rsquo;s land area and one-fourth of its total population.</p>

  <p>When the British departed, paramountcy lapsed. The Indian Independence Act of 1947 declared that princely states were legally free to join either India or Pakistan, or remain independent sovereign states! Rulers of Travancore, Hyderabad, and Bhopal immediately declared their intention to stay independent, posing the grave danger of the <b style="color: #FF6D00;">"Balkanization of India"</b> into hundreds of hostile kingdoms.</p>

  <!-- THINKER QUOTE BOX: SARDAR PATEL -->
  <div style="background: rgba(255, 109, 0, 0.08); border-left: 5px solid #FF6D00; border-radius: 8px; padding: 16px 18px; margin: 20px 0;">
    <h4 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">🧠 Statesmanship: The Iron Man of India</h4>
    <p style="color: #FFFFFF; font-style: italic; margin: 0 0 8px 0; line-height: 1.6;">
      &ldquo;We are at a momentous hour in the history of India. By common endeavor, we can raise the country to a new greatness, while lack of unity will expose us to unexpected calamities.&rdquo;
    </p>
    <span style="color: #FFE082; font-size: 14px; font-weight: 600;">&mdash; Sardar Vallabhbhai Patel, Deputy PM &amp; Home Minister</span>
  </div>

  <p>Home Minister <b style="color: #FF6D00;">Sardar Vallabhbhai Patel</b>, ably assisted by civil servant V.P. Menon, executed a masterclass in diplomacy, appealing to the rulers&rsquo; patriotism while subtly displaying the military might of the Union. Almost all rulers signed the <b style="color: #FF6D00;">Instrument of Accession (IoA)</b> before August 15, 1947, conceding control over Defence, Foreign Affairs, and Communications.</p>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(i) Difficult Cases: Hyderabad, Manipur &amp; Junagadh</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF6D00;">Hyderabad:</b> The largest princely state, entirely surrounded by Indian territory. The ruler, <b style="color: #FF6D00;">Nizam Mir Osman Ali Khan</b>, entered into a Standstill Agreement in November 1947 while secretly negotiating for independence. Meanwhile, a massive peasant rebellion erupted against the Nizam's oppressive feudalism in Telangana. The Nizam unleashed his brutal sectarian paramilitary militia, the <b style="color: #FF6D00;">Razakars</b>, who committed murders, rapes, and looting. In September 1948, the Indian Army intervened under <b style="color: #FF6D00;">"Operation Polo"</b>; the Nizam surrendered, and Hyderabad formally acceded to India.</li>
    <li><b style="color: #FF6D00;">Manipur:</b> Maharaja Bodhachandra Singh bowed to public demand and held elections based on <b style="color: #FF6D00;">Universal Adult Franchise in June 1948</b> &mdash; making Manipur the very first part of India to hold elections based on adult franchise! Manipur became a constitutional monarchy. Subsequently, in September 1949, the Maharaja signed the Merger Agreement acceding fully to India.</li>
    <li><b style="color: #FF6D00;">Junagadh:</b> The Nawab of Junagadh (Gujarat) acceded to Pakistan despite a predominantly Hindu population. Following a popular uprising, the Nawab fled to Pakistan, and an overwhelming plebiscite confirmed Junagadh's accession to India.</li>
  </ul>

  <!-- SECTION 4: THE KASHMIR PROBLEM -->
  <h2 style="color: #FF6D00; font-weight: bold; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 30px;">4. The Kashmir Problem: Accession, Conflict &amp; Article 370</h2>

  <p>The princely state of Jammu &amp; Kashmir was ruled by Hindu monarch <b style="color: #FF6D00;">Maharaja Hari Singh</b>, while the majority population was Muslim. Hari Singh wished to remain independent and proposed a Standstill Agreement to both India and Pakistan:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF6D00;">Pakistani Tribal Invasion (October 1947):</b> In violation of the Standstill Agreement, Pakistan dispatched armed tribal raiders (Afridis and Pashtuns) backed by regular Pakistani army officers to capture Srinagar by force.</li>
    <li><b style="color: #FF6D00;">Signing of the Instrument of Accession (26 October 1947):</b> Facing imminent defeat, Maharaja Hari Singh urgently appealed for Indian military assistance. The Indian government affirmed that troops could only be deployed if Kashmir legally acceded to India. Hari Singh executed and signed the <b style="color: #FF6D00;">Instrument of Accession on October 26, 1947</b>.</li>
    <li><b style="color: #FF6D00;">Military Repulsion &amp; The National Conference:</b> Indian troops were swiftly airlifted to Srinagar, successfully saving the valley and expelling invaders. The popular anti-feudal leader, <b style="color: #FF6D00;">Sheikh Abdullah</b> of the National Conference, was installed as head of the emergency administration.</li>
    <li><b style="color: #FF6D00;">Ceasefire &amp; UN Mediation (1948&ndash;49):</b> Nehru referred the conflict to the UN Security Council. A ceasefire took effect on January 1, 1949, leaving roughly one-third of the territory under illegal Pakistani occupation (termed "Azad Kashmir" and Gilgit-Baltistan by Pakistan, and Pakistan-Occupied Kashmir / PoK by India).</li>
    <li><b style="color: #FF6D00;">Article 370:</b> Under the Indian Constitution, Jammu &amp; Kashmir was accorded temporary special autonomous status under Article 370, granting it its own state constitution and jurisdiction over internal governance.</li>
  </ul>

  <!-- SECTION 5: LINGUISTIC REORGANISATION AND LANGUAGE CONFLICTS -->
  <h2 style="color: #FF6D00; font-weight: bold; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 30px;">5. Organization &amp; Reorganization of States: Language Conflicts</h2>

  <p>During the anti-colonial freedom struggle, the Indian National Congress (at its 1920 Nagpur session) had committed to reorganizing provincial boundaries along linguistic lines. However, after the bloody trauma of Partition, national leaders (including Nehru and Patel) feared that drawing borders along languages would unleash regional chauvinism and tear the country apart.</p>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(i) The Vishalandhra Movement &amp; Creation of Andhra (1952)</h3>
  <p>In the Telugu-speaking areas of Madras Province, widespread agitation erupted demanding a separate Andhra state. Veteran freedom fighter <b style="color: #FF6D00;">Potti Sreeramulu</b> undertook an indefinite fast-unto-death, tragically dying after <b style="color: #FF6D00;">56 days of hunger strike</b> in December 1952. Violent street riots broke out across the region, forcing Prime Minister Nehru to announce the creation of <b style="color: #FF6D00;">Andhra State in December 1952</b> as India&rsquo;s first linguistic state.</p>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(ii) The States Reorganisation Commission (SRC, 1953)</h3>
  <p>The creation of Andhra sparked linguistic demands nationwide. In December 1953, the central government appointed the <b style="color: #FF6D00;">States Reorganisation Commission</b> comprising Justice Fazal Ali, H.N. Kunzru, and K.M. Panikkar. The commission concluded that linguistic state boundaries, far from weakening unity, would strengthen democratic administration. Based on its report, Parliament passed the landmark <b style="color: #FF6D00;">States Reorganisation Act (1956)</b>, establishing <b style="color: #FF6D00;">14 States and 6 Union Territories</b>.</p>

  <h3 style="color: #FF6D00; font-weight: bold; margin-top: 24px;">(iii) Political Conflicts Over Official Language</h3>
  <p>Under Article 343 of the Constitution, Hindi in Devanagari script was declared the official language of the Union, while English was allowed to continue for official purposes for a transition period of 15 years (expiring in 1965). As 1965 approached, non-Hindi speaking southern states &mdash; particularly Tamil Nadu led by the DMK &mdash; launched massive anti-Hindi agitations, fearing Hindi hegemony and disadvantage in government employment. In 1967, Parliament enacted an amendment to the Official Languages Act, ensuring that <b style="color: #FF6D00;">English would continue indefinitely</b> alongside Hindi as an associate official language, settling the crisis through pragmatic compromise.</p>

  <!-- BOARD EXAM SCORING STRATEGY BOX -->
  <div style="background: rgba(255, 109, 0, 0.08); border-left: 5px solid #FF6D00; border-radius: 8px; padding: 16px 18px; margin: 24px 0;">
    <h4 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16.5px;">💡 Board Exam Strategy: Perfect 6-Mark Presentation on Integration &amp; Linguistic States</h4>
    <p style="color: #E2E8F0; margin: 0 0 10px 0; line-height: 1.6;">
      When answering 6-mark questions on <b>"Integration of Princely States"</b> or <b>"Linguistic Reorganization"</b>, use this structured framework:
    </p>
    <ul style="margin: 0; padding-left: 20px; color: #FFFFFF; line-height: 1.7;">
      <li><b>1. Context &amp; Danger of Balkanization:</b> Mention the 565 princely states, lapse of paramountcy, and Patel's diplomacy.</li>
      <li><b>2. Specific Detailed Case Studies:</b> Dedicate distinct headings to Hyderabad (Nizam, Razakars, Operation Polo), Manipur (Universal Adult Franchise 1948), and Kashmir (Hari Singh, IoA 26 Oct 1947, Article 370).</li>
      <li><b>3. Linguistic Reorganisation:</b> Cite Potti Sreeramulu's 56-day fast, Andhra 1952, SRC 1953, and 1956 Act (14 states, 6 UTs). Conclude that linguistic federalism strengthened rather than weakened Indian national unity.</li>
    </ul>
  </div>

  <!-- MASTER REVISION CHRONOLOGICAL TIMELINE -->
  <h2 style="color: #FF6D00; font-weight: bold; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 35px;">6. Master Chronological Revision Timeline</h2>
  <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">June 3, 1947:</b> Mountbatten Plan announces the partition of British India.
    </div>
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">14–15 August 1947:</b> India attains independence; Nehru delivers his "Tryst with Destiny" speech.
    </div>
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">October 26, 1947:</b> Maharaja Hari Singh signs the Instrument of Accession of Jammu &amp; Kashmir to India.
    </div>
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">June 1948:</b> Manipur becomes the first part of India to hold elections based on Universal Adult Franchise.
    </div>
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">September 1948:</b> Indian Armed Forces launch "Operation Polo" to integrate Hyderabad.
    </div>
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">December 1952:</b> Potti Sreeramulu dies after a 56-day fast; Nehru announces creation of Andhra State.
    </div>
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">December 1953:</b> Government appoints the States Reorganisation Commission (Fazal Ali Commission).
    </div>
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">November 1, 1956:</b> States Reorganisation Act comes into force, establishing 14 States and 6 Union Territories.
    </div>
    <div style="background: rgba(0,0,0,0.2); padding: 10px 14px; border-left: 3px solid #FF6D00; border-radius: 4px;">
      <b style="color: #FF6D00;">1965–1967:</b> Anti-Hindi agitations in Tamil Nadu; Official Languages Act amended to retain English indefinitely.
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: SOLUTIONS (Q & A)                          */
/* -------------------------------------------------------------------------- */

export const c12Pol8HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION HEADER BANNER -->
  <div style="background: rgba(255, 109, 0, 0.08); border: 1.5px solid #FF6D00; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF6D00; margin: 0 0 6px 0; font-size: 21px; font-weight: bold;">
      Chapter 8: Golden 25 Board Master Q&amp;A
    </h2>
    <p class="text-center" style="color: #FFE082; margin: 0; font-size: 14.5px;">
      Official 6-Marks Blueprint &bull; Section A (12 VSAT) + Section B (8 SAT 4M) + Section C (5 LAT 6M)
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS)                      -->
  <!-- ======================================================================== -->
  <h2 style="color: #FF6D00; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 25px;">
    Section A: Very Short Answer Questions (1 &amp; 2 Marks) — Q1 to Q12
  </h2>

  <!-- Q1 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q1: What was the title of Jawaharlal Nehru's famous midnight address on 14–15 August 1947?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The famous address is known as the <b style="color: #FF6D00;">"Tryst with Destiny"</b> speech, delivered to the Constituent Assembly at midnight on 14&ndash;15 August 1947.</p>
  </div>

  <!-- Q2 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q2: State the three fundamental challenges of nation-building confronted by independent India in 1947.</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b></p>
    <ul style="margin: 6px 0 0 0; padding-left: 20px; line-height: 1.7;">
      <li>1. <b style="color: #FF6D00;">Shaping a united nation</b> accommodating immense linguistic and cultural diversities.</li>
      <li>2. <b style="color: #FF6D00;">Establishing constitutional democracy</b> based on universal adult franchise.</li>
      <li>3. <b style="color: #FF6D00;">Ensuring socio-economic development and eradication of poverty</b> for the entire society.</li>
    </ul>
  </div>

  <!-- Q3 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q3: What was the "Two-Nation Theory"? Who advanced it?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The <b style="color: #FF6D00;">Two-Nation Theory</b>, advanced by Muhammad Ali Jinnah and the Muslim League, claimed that Hindus and Muslims were not merely two religious communities, but two distinct nations entitled to separate homelands.</p>
  </div>

  <!-- Q4 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q4: Who was known as "Frontier Gandhi"? Did he support the Partition of India?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> <b style="color: #FF6D00;">Khan Abdul Ghaffar Khan</b>, the leader of the Khudai Khidmatgars in the North-West Frontier Province (NWFP), was known as Frontier Gandhi. He was staunchly opposed to the Two-Nation Theory and vehemently rejected Partition.</p>
  </div>

  <!-- Q5 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q5: How many princely states existed in British India on the eve of independence?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> There were <b style="color: #FF6D00;">565 Princely States</b> covering approximately one-third of the land area and one-fourth of the total population of undivided India.</p>
  </div>

  <!-- Q6 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q6: What was the "Instrument of Accession"?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The <b style="color: #FF6D00;">Instrument of Accession (IoA)</b> was the legal document signed by the rulers of princely states, by which they surrendered their jurisdiction over Defence, External Affairs, and Communications to the Dominion of India.</p>
  </div>

  <!-- Q7 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q7: Who was the ruler of Hyderabad in 1947, and what was his irregular paramilitary militia called?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The ruler was <b style="color: #FF6D00;">Nizam Mir Osman Ali Khan</b>, and his fanatical irregular sectarian militia was called the <b style="color: #FF6D00;">Razakars</b>.</p>
  </div>

  <!-- Q8 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q8: Which was the first part of India to hold elections based on Universal Adult Franchise?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The princely state of <b style="color: #FF6D00;">Manipur</b> held elections based on Universal Adult Franchise in <b style="color: #FF6D00;">June 1948</b> under Maharaja Bodhachandra Singh.</p>
  </div>

  <!-- Q9 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q9: On which date did Maharaja Hari Singh sign the Instrument of Accession of Jammu &amp; Kashmir?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> Maharaja Hari Singh signed the Instrument of Accession on <b style="color: #FF6D00;">October 26, 1947</b> following the Pakistani-sponsored tribal invasion.</p>
  </div>

  <!-- Q10 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q10: Name the Gandhian leader whose 56-day hunger strike led to the formation of Andhra State.</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> Veteran Gandhian freedom fighter <b style="color: #FF6D00;">Potti Sreeramulu</b>, who sacrificed his life in December 1952 after an indefinite hunger strike of 56 days.</p>
  </div>

  <!-- Q11 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q11: How many States and Union Territories were established under the States Reorganisation Act of 1956?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The States Reorganisation Act of 1956 created <b style="color: #FF6D00;">14 States and 6 Union Territories</b>.</p>
  </div>

  <!-- Q12 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q12: Which constitutional article designated Hindi in Devanagari script as the official language of the Union?</h3>
    <p style="margin: 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> <b style="color: #FF6D00;">Article 343</b> of the Constitution of India.</p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER QUESTIONS (4 MARKS)                               -->
  <!-- ======================================================================== -->
  <h2 style="color: #FF6D00; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 35px;">
    Section B: Short Answer Questions (4 Marks) — Q13 to Q20
  </h2>

  <!-- Q13 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q13: Explain the three fundamental challenges of nation-building confronted by independent India in 1947.</h3>
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> Independent India confronted three simultaneous historical challenges:</p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">1. Challenge of National Unity:</b> Welded a vast, continental landmass with hundreds of languages, religions, and regions into a united nation without erasing cultural diversity or allowing Balkanization.</li>
      <li><b style="color: #FF6D00;">2. Challenge of Establishing Democracy:</b> Operationalized representative parliamentary democracy based on Universal Adult Franchise in an impoverished and illiterate society, safeguarding fundamental rights and multi-party competition.</li>
      <li><b style="color: #FF6D00;">3. Challenge of Economic Development:</b> Designed planned socialist-inspired policies to eradicate deep poverty, modernize agriculture, build heavy industry, and protect marginalized groups (Dalits and Adivasis).</li>
      <li><b style="color: #FF6D00;">4. Historic Significance:</b> Overcoming these challenges preserved India as a secular, democratic, and integrated constitutional republic.</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q14: Describe the traumatic human consequences of the Partition of India in 1947.</h3>
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The partition of British India unleashed catastrophic human suffering:</p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">1. Colossal Human Displacement:</b> Around 80 lakh people were violently forced to migrate across unfamiliar borders as refugees, abandoning ancestral properties and belongings.</li>
      <li><b style="color: #FF6D00;">2. Massive Communal Bloodbath:</b> Widespread sectarian rioting claimed between 5 to 10 lakh innocent human lives in Punjab, Bengal, and Delhi.</li>
      <li><b style="color: #FF6D00;">3. Inhuman Violence Against Women:</b> Thousands of women on both sides were abducted, raped, subjected to forced conversions, or murdered by family members to preserve "honor".</li>
      <li><b style="color: #FF6D00;">4. Division of Hearts &amp; Assets:</b> Partition divided not just land, but families, friendships, civil servants, railway lines, and even police instruments and typewriters.</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q15: Analyze the pivotal role played by Sardar Vallabhbhai Patel in the integration of princely states into the Indian Union.</h3>
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> Sardar Patel demonstrated extraordinary statesmanship as Home Minister:</p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">1. Averting Balkanization:</b> The lapse of British paramountcy gave 565 princely rulers the option to stay independent. Patel moved swiftly to prevent the balkanization of India.</li>
      <li><b style="color: #FF6D00;">2. Tripartite Negotiating Strategy:</b> Patel combined patriotic appeals to rulers, reasonable autonomy guarantees, and the subtle display of Union coercive force.</li>
      <li><b style="color: #FF6D00;">3. The Instrument of Accession:</b> Persuaded almost all rulers to sign the IoA before August 15, 1947, conceding Defence, External Affairs, and Communications.</li>
      <li><b style="color: #FF6D00;">4. Resolving Stubborn Rulers:</b> Firmly handled recalcitrant rulers in Junagadh, Hyderabad, and Kashmir, earning the historic title of the <b style="color: #FF6D00;">"Iron Man of India"</b>.</li>
    </ul>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q16: How was the princely state of Hyderabad integrated into the Indian Union? Explain the role of the Razakars and Operation Polo.</h3>
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> Hyderabad&rsquo;s integration was achieved through decisive intervention:</p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">1. Nizam's Defiance:</b> Nizam Mir Osman Ali Khan, ruler of the largest state surrounded by Indian territory, refused to join India and signed a one-year Standstill Agreement in November 1947.</li>
      <li><b style="color: #FF6D00;">2. Peasant Rebellion:</b> Oppressed peasants in Telangana rose in open revolt against the Nizam's feudal exploitation, supported by women and communists.</li>
      <li><b style="color: #FF6D00;">3. Atrocities by the Razakars:</b> The Nizam unleashed his fanatical militia, the Razakars, who murdered, looted, and terrorized non-Muslim civilians.</li>
      <li><b style="color: #FF6D00;">4. Operation Polo (September 1948):</b> The Indian Army launched a swift police action on September 13, 1948. After five days of fighting, the Nizam surrendered, and Hyderabad formally acceded to India.</li>
    </ul>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q17: Trace the events leading to the accession of Jammu and Kashmir to the Indian Union in October 1947.</h3>
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The accession of Jammu &amp; Kashmir was dictated by emergency defense requirements:</p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">1. Maharaja's Independence Stance:</b> Maharaja Hari Singh proposed a Standstill Agreement to India and Pakistan, wishing to remain an independent sovereign buffer state.</li>
      <li><b style="color: #FF6D00;">2. Pakistani Tribal Aggression:</b> In late October 1947, Pakistan sent armed tribal raiders (Afridis) led by military officers to capture Srinagar by force.</li>
      <li><b style="color: #FF6D00;">3. Signing of Instrument of Accession:</b> In imminent danger of being overrun, Maharaja Hari Singh urgently requested Indian military assistance and signed the <b style="color: #FF6D00;">Instrument of Accession on October 26, 1947</b>.</li>
      <li><b style="color: #FF6D00;">4. Defense of Srinagar:</b> Indian troops were airlifted on October 27, driving invaders back. Sheikh Abdullah was appointed head of the emergency administration.</li>
    </ul>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q18: Describe the Vishalandhra Movement and the martyrdom of Potti Sreeramulu leading to the formation of Andhra State.</h3>
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The Vishalandhra Movement established the precedent for linguistic reorganization:</p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">1. Demand for Linguistic State:</b> Telugu-speaking citizens in the multilingual Madras Province agitated for a separate Andhra state.</li>
      <li><b style="color: #FF6D00;">2. Broad Public Agitation:</b> The movement united all political parties, including the Congress and Communists, demanding linguistic autonomy.</li>
      <li><b style="color: #FF6D00;">3. Sacrifice of Potti Sreeramulu:</b> Veteran Gandhian Potti Sreeramulu undertook an indefinite fast-unto-death, tragically dying on December 15, 1952 after 56 days of hunger strike.</li>
      <li><b style="color: #FF6D00;">4. Creation of Andhra (December 1952):</b> Widespread public riots and violence forced Prime Minister Nehru to concede the demand, making Andhra the first linguistic state in independent India.</li>
    </ul>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q19: What were the key recommendations of the States Reorganisation Commission (SRC) of 1953? How did linguistic reorganization strengthen Indian unity?</h3>
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The SRC established linguistic federalism as a cornerstone of Indian democracy:</p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">1. Appointment of SRC (1953):</b> Headed by Justice Fazal Ali, H.N. Kunzru, and K.M. Panikkar to examine the redrawing of state boundaries.</li>
      <li><b style="color: #FF6D00;">2. Core Recommendation:</b> Recommended redrawing internal boundaries along linguistic lines while preserving national unity and administrative efficiency.</li>
      <li><b style="color: #FF6D00;">3. Legislative Outcome:</b> Parliament enacted the States Reorganisation Act in 1956, creating 14 States and 6 Union Territories.</li>
      <li><b style="color: #FF6D00;">4. Strengthening Unity:</b> Accommodating regional language aspirations removed feelings of alienation, proving that linguistic states consolidated rather than fragmented Indian national unity.</li>
    </ul>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0; padding: 16px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 17px;">Q20: Examine the political conflict over the official language issue in India and how the controversy was resolved in 1967.</h3>
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">Answer:</b> The official language debate was resolved through bilingual federal accommodation:</p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">1. Constitutional Mandate (Article 343):</b> Declared Hindi in Devanagari script as the official language, permitting English as an associate language until 1965.</li>
      <li><b style="color: #FF6D00;">2. The 1965 Anti-Hindi Agitation:</b> As the 1965 deadline approached, massive student riots and protests erupted in Tamil Nadu (spearheaded by the DMK), opposing Hindi imposition.</li>
      <li><b style="color: #FF6D00;">3. Fears of Non-Hindi Regions:</b> Southern states feared Hindi dominance would disadvantage them in central civil service examinations and public administration.</li>
      <li><b style="color: #FF6D00;">4. The 1967 Compromise:</b> Parliament amended the Official Languages Act in 1967, ensuring that English would continue indefinitely alongside Hindi for official union business, diffusing the crisis.</li>
    </ul>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION C: LONG ANSWER QUESTIONS (6 MARKS)                                -->
  <!-- ======================================================================== -->
  <h2 style="color: #FF6D00; border-bottom: 2px solid #FF6D00; padding-bottom: 6px; margin-top: 35px;">
    Section C: Long Answer Questions (6 Marks) — Q21 to Q25
  </h2>

  <!-- Q21 -->
  <div style="margin: 20px 0; padding: 18px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 12px 0; font-size: 18px;">Q21: "The Partition of India was not merely a division of territory, but a violent division of hearts, communities, and administrative assets." Elucidate this statement by assessing the causes, human costs, and the mammoth challenge of refugee rehabilitation.</h3>
    
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">1. Introduction &amp; Ideological Causes:</b></p>
    <p style="margin: 0 0 14px 0; line-height: 1.6;">The Partition of British India in August 1947 was the tragic culmination of the Muslim League's Two-Nation Theory, British imperialist &ldquo;divide and rule&rdquo; policies, and escalating communal mistrust. The Mountbatten Plan of June 3, 1947 partitioned undivided India along religious majority lines, dividing Punjab in the west and Bengal in the east.</p>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">2. The Unprecedented Human Costs:</b></p>
    <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">Mass Casualties and Forced Migration:</b> Approximately 80 lakh people were violently displaced across borders. Communal frenzies claimed the lives of between 5 to 10 lakh innocent men, women, and children.</li>
      <li><b style="color: #FF6D00;">Atrocities on Women:</b> Thousands of women were abducted, subjected to horrific sexual violence, forced conversions, or murdered by family members under the guise of family honor.</li>
      <li><b style="color: #FF6D00;">Division of Administrative Assets:</b> Partition went beyond maps; it divided government bank reserves, civil servants, railway carriages, police typewriters, and band instruments.</li>
      <li><b style="color: #FF6D00;">Emotional Trauma:</b> Millions became homeless overnight in lands their ancestors had inhabited for centuries, creating permanent scars in collective memory.</li>
    </ul>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">3. The Challenge of Refugee Rehabilitation &amp; Conclusion:</b></p>
    <p style="margin: 0; line-height: 1.6;">The newly independent Indian government faced the mammoth challenge of feeding, housing, and rehabilitating tens of lakhs of destitute refugees pouring into Delhi, Punjab, and West Bengal. Giant tent townships were erected, and agricultural lands left behind by emigrants were redistributed. Despite these immense traumas, India demonstrated monumental resilience, upholding constitutional secularism and rejecting the communal logic that had driven partition.</p>
  </div>

  <!-- Q22 -->
  <div style="margin: 20px 0; padding: 18px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 12px 0; font-size: 18px;">Q22: Critically examine the process of integration of the princely states into the Indian Union. Discuss the distinct problems encountered and strategies adopted in the case of Hyderabad, Manipur, and Junagadh.</h3>
    
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">1. Introduction:</b></p>
    <p style="margin: 0 0 14px 0; line-height: 1.6;">On the eve of independence, 565 princely states enjoyed British paramountcy. When the British announced the lapse of paramountcy, rulers were legally given the option to join India, join Pakistan, or stay independent. This posed an existential threat of the balkanization of India. Sardar Vallabhbhai Patel and V.P. Menon orchestrated their integration through the Instrument of Accession.</p>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">2. Analysis of Distinct Problematic Cases:</b></p>
    <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">Hyderabad (Operation Polo):</b> Nizam Mir Osman Ali Khan wanted to retain sovereign status and unleashed his brutal private militia, the Razakars, to terrorize the population and crush the Telangana peasant uprising. In September 1948, the Indian government executed "Operation Polo" (a police action); the Nizam surrendered, and Hyderabad merged into India.</li>
      <li><b style="color: #FF6D00;">Manipur (Democratic Pioneering):</b> Maharaja Bodhachandra Singh held elections based on Universal Adult Franchise in June 1948, making Manipur the first constitutional monarchy with an elected legislature in India. In September 1949, Patel negotiated the Merger Agreement with the Maharaja, integrating Manipur into the Union.</li>
      <li><b style="color: #FF6D00;">Junagadh (Plebiscite):</b> The Nawab acceded to Pakistan against the wishes of his overwhelmingly Hindu subjects. A popular uprising forced the Nawab to flee, and a subsequent plebiscite confirmed Junagadh&rsquo;s accession to India.</li>
    </ul>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">3. Conclusion:</b></p>
    <p style="margin: 0; line-height: 1.6;">Patel's diplomatic genius, flexibility regarding internal autonomy, and resolute use of force when needed completed the geographic unification of India without sparking a widespread civil war, laying the foundation of a sovereign federal republic.</p>
  </div>

  <!-- Q23 -->
  <div style="margin: 20px 0; padding: 18px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 12px 0; font-size: 18px;">Q23: Trace the historical background, circumstances, and geopolitical aftermath of the accession of Jammu &amp; Kashmir to India in 1947. How did Article 370 reflect the state's unique constitutional status?</h3>
    
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">1. Historical Context:</b></p>
    <p style="margin: 0 0 14px 0; line-height: 1.6;">The princely state of Jammu &amp; Kashmir was ruled by Hindu Dogra monarch Maharaja Hari Singh, with a Muslim-majority population. The Maharaja offered a Standstill Agreement to India and Pakistan, seeking to maintain an independent status between the two dominions.</p>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">2. The Invasion and Accession:</b></p>
    <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">Pakistani Tribal Invasion:</b> In October 1947, armed Pakistani tribal raiders (Afridis) led by military commanders invaded the state, committing atrocities and advancing rapidly toward Srinagar.</li>
      <li><b style="color: #FF6D00;">Signing of the Instrument of Accession:</b> In imminent peril, Maharaja Hari Singh signed the official Instrument of Accession on <b style="color: #FF6D00;">October 26, 1947</b>, legally making Jammu &amp; Kashmir an integral part of the Dominion of India.</li>
      <li><b style="color: #FF6D00;">Indian Military Airlift:</b> Indian troops were airlifted to Srinagar on October 27, saving the valley and driving the invaders back. Sheikh Abdullah's National Conference actively rallied the Kashmiri populace to resist the Pakistani invaders.</li>
      <li><b style="color: #FF6D00;">Ceasefire and Division:</b> Following UN intervention, a ceasefire took effect on January 1, 1949, leaving one-third of the territory under illegal Pakistani occupation (PoK / Gilgit-Baltistan).</li>
    </ul>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">3. Article 370 and Constitutional Significance:</b></p>
    <p style="margin: 0; line-height: 1.6;">To accommodate the unique circumstances of accession and preserve internal autonomy, the Indian Constitution incorporated Article 370 as a temporary provision. It granted J&amp;K its own state constitution and required the concurrence of the state government to extend central laws, reflecting India&rsquo;s asymmetric federal accommodation.</p>
  </div>

  <!-- Q24 -->
  <div style="margin: 20px 0; padding: 18px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 12px 0; font-size: 18px;">Q24: Evaluate the demand for the linguistic reorganization of Indian states. Why were national leaders initially reluctant to create linguistic states, and how did linguistic federalism ultimately preserve national integration?</h3>
    
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">1. Background &amp; Initial Reluctance:</b></p>
    <p style="margin: 0 0 14px 0; line-height: 1.6;">Although the Congress had pledged at its 1920 Nagpur session to create linguistic provinces, national leaders (including Nehru and Patel) hesitated after 1947. Fresh from the trauma of Partition, they feared that redrawing boundaries based on language would unleash sub-national chauvinism, disrupt administrative focus, and tear the fragile new republic apart.</p>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">2. Popular Agitations and the States Reorganisation Act:</b></p>
    <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">The Andhra Movement:</b> The death of Potti Sreeramulu after a 56-day hunger strike in December 1952 triggered mass unrest, forcing the creation of Andhra State as the first linguistic province.</li>
      <li><b style="color: #FF6D00;">The States Reorganisation Commission (1953):</b> Headed by Justice Fazal Ali, the commission recommended redrawing state borders along linguistic boundaries to democratize governance.</li>
      <li><b style="color: #FF6D00;">The 1956 Act:</b> Parliament established 14 States and 6 Union Territories on November 1, 1956. Later, Bombay was divided into Maharashtra and Gujarat (1960), and Punjab into Punjab and Haryana (1966).</li>
    </ul>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">3. How Linguistic Federalism Preserved Unity:</b></p>
    <p style="margin: 0; line-height: 1.6;">Far from disintegrating the nation, linguistic reorganization democratized public administration, allowed citizens to interact with government in their mother tongues, and accommodated regional identities within the overarching framework of Indian unity, making Indian federalism resilient and cohesive.</p>
  </div>

  <!-- Q25 -->
  <div style="margin: 20px 0; padding: 18px; background: rgba(15, 23, 42, 0.6); border-radius: 8px; border-left: 4px solid #FF6D00;">
    <h3 style="color: #FF6D00; margin: 0 0 12px 0; font-size: 18px;">Q25: Assess Jawaharlal Nehru’s vision and approach to nation-building during the foundational years of independent India. How did his policies balance democratic federalism, secularism, and planned economic modernization?</h3>
    
    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">1. Introduction:</b></p>
    <p style="margin: 0 0 14px 0; line-height: 1.6;">As India’s founding Prime Minister from 1947 to 1964, Jawaharlal Nehru laid the philosophical, political, and economic foundations of modern India. His approach to nation-building was anchored in democratic constitutionalism, composite secularism, scientific temper, and state-directed industrial modernization.</p>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">2. Core Pillars of Nehru's Nation-Building:</b></p>
    <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.7;">
      <li><b style="color: #FF6D00;">Commitment to Constitutional Democracy:</b> Nehru nurtured parliamentary institutions, respected opposition dissent, upheld press freedom, and conducted the historic 1951&ndash;52 General Elections on universal adult franchise, disproving critics who claimed democracy was impossible in the global south.</li>
      <li><b style="color: #FF6D00;">Uncompromising Secularism:</b> Rejecting the communal logic of Pakistan as an Islamic state, Nehru insisted that India was a secular homeland where religious minorities (Muslims, Christians, Sikhs) enjoyed equal citizenship, legal protections, and cultural freedom.</li>
      <li><b style="color: #FF6D00;">Scientific Temper &amp; Modern Institutions:</b> Nehru founded India's premier scientific and educational institutions &mdash; the IITs, IIMs, AIIMS, and atomic/space commissions &mdash; describing mega-dams like Bhakra Nangal as the <i>"temples of modern India"</i>.</li>
      <li><b style="color: #FF6D00;">Planned Economic Development:</b> Through the Planning Commission and Five-Year Plans, Nehru established a mixed economy model that combined state-owned heavy industries with private enterprise.</li>
    </ul>

    <p style="margin: 0 0 10px 0; line-height: 1.6;"><b style="color: #FF6D00;">3. Conclusion:</b></p>
    <p style="margin: 0; line-height: 1.6;">Nehru's multi-faceted approach successfully navigated the volatile post-colonial era, preventing military dictatorships (which engulfed neighboring states) and cementing India as an enduring, pluralistic constitutional democracy.</p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS (INTERACTIVE QUIZ)                    */
/* -------------------------------------------------------------------------- */

export const c12Pol8Mcqs = [
  // Tier 1: Q1 to Q8 (Direct recall, events, dates, historical personalities)
  {
    id: "c12-pol-8-mcq-1",
    question: "What was the title of the historic speech delivered by Jawaharlal Nehru on the midnight of 14–15 August 1947?",
    options: [
      "A):   Tryst with Destiny",
      "B):   Quit India Speech",
      "C):   Discovery of India",
      "D):   The Light Has Gone Out",
    ],
    correctAnswer: "a",
    explanation: "Jawaharlal Nehru delivered his famous 'Tryst with Destiny' speech addressing the Constituent Assembly at midnight on 14-15 August 1947.",
  },
  {
    id: "c12-pol-8-mcq-2",
    question: "Which political party advanced the 'Two-Nation Theory' demanding the partition of British India?",
    options: [
      "A):   Indian National Congress",
      "B):   All-India Muslim League",
      "C):   Communist Party of India",
      "D):   Hindu Mahasabha",
    ],
    correctAnswer: "b",
    explanation: "The All-India Muslim League, led by Muhammad Ali Jinnah, advanced the Two-Nation Theory claiming Hindus and Muslims were separate nations.",
  },
  {
    id: "c12-pol-8-mcq-3",
    question: "Who was popularly known as 'Frontier Gandhi' for his non-violent struggle in the North-West Frontier Province (NWFP)?",
    options: [
      "A):   Maulana Abul Kalam Azad",
      "B):   Khan Abdul Ghaffar Khan",
      "C):   Liaquat Ali Khan",
      "D):   Sheikh Abdullah",
    ],
    correctAnswer: "b",
    explanation: "Khan Abdul Ghaffar Khan, founder of the Khudai Khidmatgars, was known as Frontier Gandhi and was a staunch opponent of Partition.",
  },
  {
    id: "c12-pol-8-mcq-4",
    question: "How many princely states existed in British India on the eve of independence in 1947?",
    options: [
      "A):   250 states",
      "B):   565 states",
      "C):   610 states",
      "D):   720 states",
    ],
    correctAnswer: "b",
    explanation: "There were 565 princely states covering roughly one-third of the territory and one-fourth of the population of British India.",
  },
  {
    id: "c12-pol-8-mcq-5",
    question: "What was the name of the standard legal treaty signed by princely rulers to formally join the Dominion of India?",
    options: [
      "A):   Standstill Agreement",
      "B):   Instrument of Accession",
      "C):   Poona Pact",
      "D):   Shimla Agreement",
    ],
    correctAnswer: "b",
    explanation: "The Instrument of Accession was the legal treaty signed by rulers to surrender Defence, Foreign Affairs, and Communications to India.",
  },
  {
    id: "c12-pol-8-mcq-6",
    question: "Which was the first part of India to hold elections based on Universal Adult Franchise in June 1948?",
    options: [
      "A):   Hyderabad",
      "B):   Manipur",
      "C):   Travancore",
      "D):   Mysore",
    ],
    correctAnswer: "b",
    explanation: "Under Maharaja Bodhachandra Singh, Manipur held elections based on Universal Adult Franchise in June 1948, becoming a constitutional monarchy.",
  },
  {
    id: "c12-pol-8-mcq-7",
    question: "What was the military code name for the police action executed by the Indian Armed Forces to integrate Hyderabad in September 1948?",
    options: [
      "A):   Operation Vijay",
      "B):   Operation Polo",
      "C):   Operation Blue Star",
      "D):   Operation Meghdoot",
    ],
    correctAnswer: "b",
    explanation: "The military police action launched on September 13, 1948 to integrate Hyderabad into India was codenamed 'Operation Polo'.",
  },
  {
    id: "c12-pol-8-mcq-8",
    question: "Which was the first state in independent India to be created on a linguistic basis in December 1952?",
    options: [
      "A):   Gujarat",
      "B):   Maharashtra",
      "C):   Andhra State",
      "D):   Karnataka",
    ],
    correctAnswer: "c",
    explanation: "Following the death of Potti Sreeramulu after a 56-day hunger strike, Andhra State was created in December 1952 as India's first linguistic state.",
  },

  // Tier 2: Q9 to Q15 (Concepts, partition complications, Kashmir accession, SRC)
  {
    id: "c12-pol-8-mcq-9",
    question: "Why was the geographic execution of Partition particularly complicated in British India?",
    options: [
      "A):   Because Muslims refused to live anywhere near rivers",
      "B):   Because there was no single contiguous belt of Muslim majority; populations were concentrated in the northwest and east",
      "C):   Because the British monarch forbade dividing provinces",
      "D):   Because the United Nations drew the boundary lines unilaterally",
    ],
    correctAnswer: "b",
    explanation: "Muslims were clustered in the northwest and east, necessitating the awkward creation of West Pakistan and East Pakistan separated by Indian territory.",
  },
  {
    id: "c12-pol-8-mcq-10",
    question: "What was the name of the irregular sectarian paramilitary force deployed by the Nizam of Hyderabad to terrorize citizens?",
    options: [
      "A):   Khudai Khidmatgars",
      "B):   Razakars",
      "C):   Mukti Bahini",
      "D):   Azad Hind Fauj",
    ],
    correctAnswer: "b",
    explanation: "The Razakars were the fanatical paramilitary militia unleashed by Nizam Mir Osman Ali Khan to crush dissent and commit atrocities on non-Muslims.",
  },
  {
    id: "c12-pol-8-mcq-11",
    question: "Under what circumstances did Maharaja Hari Singh sign the Instrument of Accession of Jammu & Kashmir on 26 October 1947?",
    options: [
      "A):   After winning a war against China",
      "B):   When Pakistani-sponsored tribal raiders invaded the valley and threatened to capture Srinagar",
      "C):   Following an order by the British Parliament in London",
      "D):   After holding a statewide public referendum",
    ],
    correctAnswer: "b",
    explanation: "Hari Singh signed the IoA on 26 October 1947 to secure urgent Indian military intervention after armed Pakistani tribal raiders invaded Kashmir.",
  },
  {
    id: "c12-pol-8-mcq-12",
    question: "Who headed the States Reorganisation Commission (SRC) appointed by the Government of India in December 1953?",
    options: [
      "A):   Sardar Vallabhbhai Patel",
      "B):   Justice Fazal Ali",
      "C):   Dr. B.R. Ambedkar",
      "D):   C. Rajagopalachari",
    ],
    correctAnswer: "b",
    explanation: "The States Reorganisation Commission was headed by former Supreme Court judge Justice Fazal Ali, along with members H.N. Kunzru and K.M. Panikkar.",
  },
  {
    id: "c12-pol-8-mcq-13",
    question: "How did the 1967 amendment to the Official Languages Act resolve the violent anti-Hindi agitations in South India?",
    options: [
      "A):   By declaring Sanskrit as the sole national language",
      "B):   By allowing English to continue indefinitely alongside Hindi for official union purposes",
      "C):   By abolishing Hindi from all Indian currency notes",
      "D):   By banning regional languages from parliamentary debates",
    ],
    correctAnswer: "b",
    explanation: "The 1967 amendment established that English would continue indefinitely alongside Hindi, ensuring non-Hindi states were not disadvantaged.",
  },
  {
    id: "c12-pol-8-mcq-14",
    question: "How did linguistic reorganization of states ultimately impact Indian national unity?",
    options: [
      "A):   It led to the immediate disintegration of the Indian Union",
      "B):   It consolidated national unity by accommodating regional linguistic identities within federal democracy",
      "C):   It caused the abolition of the Supreme Court of India",
      "D):   It led to military rule across southern India",
    ],
    correctAnswer: "b",
    explanation: "Linguistic states fulfilled democratic regional aspirations, removing alienation and strengthening national unity through cooperative federalism.",
  },
  {
    id: "c12-pol-8-mcq-15",
    question: "Which popular Kashmiri leader led the National Conference and headed the emergency government after accession to India?",
    options: [
      "A):   Sheikh Abdullah",
      "B):   Mirwaiz Umar Farooq",
      "C):   Karan Singh",
      "D):   Liaquat Ali Khan",
    ],
    correctAnswer: "a",
    explanation: "Sheikh Abdullah, the towering anti-feudal leader of the National Conference, mobilized Kashmiris against Pakistani invaders and headed the emergency administration.",
  },

  // Tier 3: Q16 to Q20 (Analytical, Assertion-Reason, comparative questions)
  {
    id: "c12-pol-8-mcq-16",
    question: "Assertion (A): National leaders were initially reluctant to reorganize Indian states along linguistic lines after 1947.\nReason (R): Fresh from the trauma of Partition, leaders feared linguistic reorganization would trigger regional chauvinism and disintegrate the nation.",
    options: [
      "A):   Both A and R are true, and R is the correct explanation of A",
      "B):   Both A and R are true, but R is not the correct explanation of A",
      "C):   A is true, but R is false",
      "D):   A is false, but R is true",
    ],
    correctAnswer: "a",
    explanation: "Both statements are correct. The fear of another partition made Nehru and Patel cautious about dividing provinces along language lines.",
  },
  {
    id: "c12-pol-8-mcq-17",
    question: "Consider the following statements regarding the integration of princely states:\n1. The ruler of Junagadh opted to accede to Pakistan despite a predominantly Hindu population.\n2. Manipur was integrated into India only after the Indian Army launched 'Operation Polo'.\nWhich of the statements is/are correct?",
    options: [
      "A):   1 only",
      "B):   2 only",
      "C):   Both 1 and 2",
      "D):   Neither 1 nor 2",
    ],
    correctAnswer: "a",
    explanation: "Statement 1 is correct. Statement 2 is false because Operation Polo was conducted in Hyderabad, whereas Manipur integrated via a Merger Agreement.",
  },
  {
    id: "c12-pol-8-mcq-18",
    question: "Which of the following constitutional provisions granted special autonomous status to Jammu & Kashmir in the original Indian Constitution?",
    options: [
      "A):   Article 356",
      "B):   Article 370",
      "C):   Article 352",
      "D):   Article 280",
    ],
    correctAnswer: "b",
    explanation: "Article 370 granted special autonomous status to Jammu & Kashmir, allowing it its own state constitution and limiting Parliament's legislative powers over the state.",
  },
  {
    id: "c12-pol-8-mcq-19",
    question: "Which of the following describes the nature of the division during Partition as emphasized by historians?",
    options: [
      "A):   A simple peaceful survey of agricultural farms",
      "B):   A violent 'division of hearts' dividing families, communities, civil services, and physical assets",
      "C):   A military alliance between India and Great Britain",
      "D):   An agreement solely affecting foreign exchange currency rates",
    ],
    correctAnswer: "b",
    explanation: "Partition was a profound trauma that divided families, communal ties, police instruments, civil servants, and social memories across generations.",
  },
  {
    id: "c12-pol-8-mcq-20",
    question: "Which of the following was NOT one of the 14 states established under the States Reorganisation Act of 1956?",
    options: [
      "A):   Kerala",
      "B):   Mysore",
      "C):   Telangana",
      "D):   Rajasthan",
    ],
    correctAnswer: "c",
    explanation: "Telangana was merged into Andhra Pradesh in 1956 and only became a separate state much later in June 2014; Kerala, Mysore, and Rajasthan were among the original 14 states in 1956.",
  },
];
