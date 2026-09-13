// Class 12 Political Science Chapter 10: Politics of Planned Development (Marks: 02)
// Official State Board / NCERT Curriculum Blueprint — Category A: 2-Marks Unit
// Part B: Politics in India since Independence
// Primary Theme Color: #00BFA5 (Deep Aqua)

const themeColor = "#00BFA5";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Pol10HtmlOverview = `
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
  <div style="background: rgba(0, 191, 165, 0.06); border: 1.5px solid #00BFA5; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #00BFA5; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Economic Planning Definitions</h2>
    <p class="text-center" style="color: #64FFDA; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 12 Chapter 10: Politics of Planned Development (2 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">1. Economic Planning:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The deliberate, centralized state process of mobilizing, allocating, and coordinating national economic resources through predefined targets and time-bound frameworks to achieve rapid economic growth, poverty alleviation, and social justice.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">2. The Bombay Plan (1944):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A pioneering joint proposal drafted in 1944 by leading Indian industrialists (including J.R.D. Tata and G.D. Birla) advocating that the post-independence state must undertake massive public sector investments in heavy industry and basic infrastructure because private capital was insufficient.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">3. Mixed Economy Model:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The unique Indian development framework combining elements of both Western capitalism (private enterprise in agriculture, consumer goods, and commerce) and Soviet socialism (state ownership of key basic infrastructure, heavy machinery, defense, and public utilities).</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">4. Plan Holiday (1966–1969):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The temporary three-year suspension of Five-Year Plans during which three successive Annual Plans were executed due to severe foreign exchange crisis, devastating consecutive monsoonal droughts, and the financial drainage caused by the 1962 and 1965 wars.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">5. Green Revolution:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The intensive agrarian modernization drive initiated in the mid-1960s utilizing High Yielding Variety (HYV) seeds, chemical fertilizers, regulated irrigation, and price guarantees (MSP), transforming India from a chronic food-importing nation into a self-sufficient grain producer.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: FIVE-YEAR PLANS & MODELS OF DEVELOPMENT -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">1. Ideas of Development &amp; The Five-Year Plans</h2>

  <p>
    At the dawn of independence in August 1947, the foundational task before the Indian leadership was not merely political consolidation, but economic regeneration. Colonial rule had left the country in a state of chronic underdevelopment, characterized by stagnant agricultural productivity, negligible industrial capability, crippling illiteracy, and severe mass poverty. The concept of "development" itself was fiercely contested. In the Western world, development was equated with industrialization, modernization, urbanization, and the triumph of capitalist market economies. In the socialist bloc, led by the Soviet Union, development meant state ownership of resources, centralized economic planning, the abolition of private landlordism, and heavy industrial mobilization.
  </p>

  <p>
    Remarkably, despite ideological divergences across the political spectrum, there was a near-universal national consensus that economic development in independent India could not be surrendered to the unregulated forces of the free market. The government had to play an active, decisive, and steering role.
  </p>

  <div style="background: rgba(0, 191, 165, 0.05); border-left: 4px solid #00BFA5; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 17px;">(i) The Planning Commission &amp; Soviet Inspiration</h3>
    <p style="margin: 0; color: #FFFFFF;">
      In March 1950, the Government of India established the <b style="color: #00BFA5;">Planning Commission</b> through a simple executive cabinet resolution, rather than a constitutional amendment or statutory act of Parliament. Operating as an extra-constitutional, advisory body with the Prime Minister as its ex-officio Chairman, the Planning Commission was tasked with assessing national resources and drafting time-bound development roadmaps. Drawing inspiration from the Soviet Union's centralized planning apparatus (Gosplan), India adopted the mechanism of <b style="color: #00BFA5;">Five-Year Plans (FYPs)</b>. The national budget was bifurcated into:
    </p>
    <ul style="color: #E2E8F0; margin: 8px 0 0 20px; line-height: 1.7;">
      <li><b style="color: #00BFA5;">Non-Plan Budget:</b> Allocated for routine annual expenditures on government administration, law enforcement, and defense.</li>
      <li><b style="color: #00BFA5;">Plan Budget:</b> Spent on five-year developmental priorities fixed by the Planning Commission.</li>
    </ul>
  </div>

  <div style="background: rgba(0, 191, 165, 0.05); border-left: 4px solid #00BFA5; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 17px;">(ii) The First Five-Year Plan (1951–1956): Agrarian Rejuvenation</h3>
    <p style="margin: 0; color: #FFFFFF;">
      Drafted under the intellectual stewardship of young economist <b style="color: #00BFA5;">K.N. Raj</b>, the First Plan was rooted in the philosophy that India must "hasten slowly" for the first two decades to prevent spiraling inflation and fiscal collapse. Recognizing that the partition had severely disrupted the agricultural hinterland (giving major fertile irrigated tracts to West Pakistan), the First Plan prioritized the <b style="color: #00BFA5;">agrarian sector</b>:
    </p>
    <ul style="color: #E2E8F0; margin: 8px 0 0 20px; line-height: 1.7;">
      <li><b style="color: #00BFA5;">Massive Irrigation &amp; Power Projects:</b> Huge capital investments were directed toward colossal multipurpose river valley projects, notably the Bhakra Nangal Dam and the Hirakud Dam.</li>
      <li><b style="color: #00BFA5;">Land Reforms:</b> The abolition of the parasitic Zamindari intermediary system was aggressively pushed, seeking to place land ownership directly in the hands of the tillers.</li>
      <li><b style="color: #00BFA5;">National Savings:</b> Emphasized increasing the national domestic savings rate to finance future capital formation.</li>
    </ul>
  </div>

  <div style="background: rgba(0, 191, 165, 0.05); border-left: 4px solid #00BFA5; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 17px;">(iii) The Second Five-Year Plan (1956–1961): Heavy Industrialization &amp; The Mahalanobis Model</h3>
    <p style="margin: 0; color: #FFFFFF;">
      The Second Five-Year Plan marked a dramatic structural departure from the agrarian caution of the First Plan. Formulated by the renowned statistician and Indian Statistical Institute founder <b style="color: #00BFA5;">P.C. Mahalanobis</b>, this plan championed rapid, state-led <b style="color: #00BFA5;">heavy industrialization</b>:
    </p>
    <ul style="color: #E2E8F0; margin: 8px 0 0 20px; line-height: 1.7;">
      <li><b style="color: #00BFA5;">Avadi Resolution (1955):</b> The Indian National Congress formally declared the establishment of a "Socialistic Pattern of Society" as its fundamental socioeconomic goal.</li>
      <li><b style="color: #00BFA5;">Basic &amp; Capital Goods:</b> The state made monumental investments in steel manufacturing (Bhilai, Rourkela, Durgapur), heavy electricals (BHEL), railways, oil refining, and mining.</li>
      <li><b style="color: #00BFA5;">Protectionist Tariffs:</b> Imposed high import duties and import substitution regimes to insulate infant domestic private and public industries from foreign competition.</li>
      <li><b style="color: #00BFA5;">License-Permit Raj:</b> Industrial Development and Regulation Act mandated government permits and licenses for setting up or expanding manufacturing units.</li>
    </ul>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM CARD (WHITE BACKGROUND) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 191, 165, 0.4); border-radius: 10px; padding: 14px 16px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 540px;">
      <svg viewBox="0 0 520 280" style="width: 100%; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="520" height="280" fill="#FFFFFF"/>
        
        <!-- Header Banner -->
        <rect x="20" y="12" width="480" height="34" rx="6" fill="#00BFA5"/>
        <text x="260" y="34" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">INDIAN PLANNED DEVELOPMENT FRAMEWORK</text>

        <!-- Box 1: First FYP -->
        <rect x="20" y="60" width="150" height="135" rx="6" fill="#E0F2F1" stroke="#00BFA5" stroke-width="2"/>
        <text x="95" y="82" fill="#00796B" font-size="12" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">1st Five-Year Plan</text>
        <text x="95" y="98" fill="#004D40" font-size="10.5" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">(1951–1956)</text>
        <line x1="30" y1="106" x2="160" y2="106" stroke="#00BFA5" stroke-width="1"/>
        <text x="28" y="122" fill="#004D40" font-size="9.5" font-family="Arial, sans-serif">• Architect: K.N. Raj</text>
        <text x="28" y="137" fill="#004D40" font-size="9.5" font-family="Arial, sans-serif">• Focus: Agriculture</text>
        <text x="28" y="152" fill="#004D40" font-size="9.5" font-family="Arial, sans-serif">• Bhakra / Hirakud</text>
        <text x="28" y="167" fill="#004D40" font-size="9.5" font-family="Arial, sans-serif">• Land Reforms</text>
        <text x="28" y="182" fill="#004D40" font-size="9.5" font-family="Arial, sans-serif">• "Hasten Slowly"</text>

        <!-- Box 2: Second FYP -->
        <rect x="185" y="60" width="150" height="135" rx="6" fill="#E0F7FA" stroke="#0097A7" stroke-width="2"/>
        <text x="260" y="82" fill="#00838F" font-size="12" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">2nd Five-Year Plan</text>
        <text x="260" y="98" fill="#006064" font-size="10.5" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">(1956–1961)</text>
        <line x1="195" y1="106" x2="325" y2="106" stroke="#0097A7" stroke-width="1"/>
        <text x="193" y="122" fill="#006064" font-size="9.5" font-family="Arial, sans-serif">• P.C. Mahalanobis</text>
        <text x="193" y="137" fill="#006064" font-size="9.5" font-family="Arial, sans-serif">• Heavy Industry</text>
        <text x="193" y="152" fill="#006064" font-size="9.5" font-family="Arial, sans-serif">• Steel &amp; Electricity</text>
        <text x="193" y="167" fill="#006064" font-size="9.5" font-family="Arial, sans-serif">• Avadi Resolution</text>
        <text x="193" y="182" fill="#006064" font-size="9.5" font-family="Arial, sans-serif">• Import Substitution</text>

        <!-- Box 3: Green Revolution -->
        <rect x="350" y="60" width="150" height="135" rx="6" fill="#F1F8E9" stroke="#558B2F" stroke-width="2"/>
        <text x="425" y="82" fill="#33691E" font-size="12" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">Green Revolution</text>
        <text x="425" y="98" fill="#1B5E20" font-size="10.5" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">(Mid-1960s Onward)</text>
        <line x1="360" y1="106" x2="490" y2="106" stroke="#558B2F" stroke-width="1"/>
        <text x="358" y="122" fill="#1B5E20" font-size="9.5" font-family="Arial, sans-serif">• High-Yield Seeds</text>
        <text x="358" y="137" fill="#1B5E20" font-size="9.5" font-family="Arial, sans-serif">• Punjab / Haryana</text>
        <text x="358" y="152" fill="#1B5E20" font-size="9.5" font-family="Arial, sans-serif">• Food Sovereignty</text>
        <text x="358" y="167" fill="#1B5E20" font-size="9.5" font-family="Arial, sans-serif">• Rise of Kulak Class</text>
        <text x="358" y="182" fill="#1B5E20" font-size="9.5" font-family="Arial, sans-serif">• Agrarian Politics</text>

        <!-- Connecting Arrows -->
        <path d="M 170 125 L 183 125" stroke="#00796B" stroke-width="2" marker-end="url(#arrow)"/>
        <path d="M 335 125 L 348 125" stroke="#00796B" stroke-width="2"/>

        <!-- Bottom Synthesis Bar -->
        <rect x="20" y="208" width="480" height="60" rx="6" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1.5"/>
        <text x="260" y="228" fill="#0F172A" font-size="11.5" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">THE MIXED ECONOMY COMPROMISE</text>
        <text x="260" y="246" fill="#475569" font-size="10" text-anchor="middle" font-family="Arial, sans-serif">Public Sector: Infrastructure, Steel, Mining, Power, Defense &bull; Heavy State Capital</text>
        <text x="260" y="260" fill="#475569" font-size="10" text-anchor="middle" font-family="Arial, sans-serif">Private Sector: Agriculture, Consumer Goods, Small-Scale Trade &amp; Business</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The structural transition of Indian economic planning from First Plan agrarian consolidation to Second Plan heavy industrialization and subsequent Green Revolution food sovereignty.
    </div>
  </div>

  <!-- SECTION 2: EXPANSION OF STATE SECTOR & NEW ECONOMIC INTERESTS -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">2. Expansion of the State Sector &amp; Rise of New Economic Interests</h2>

  <p>
    The adoption of the mixed economy model led to an unprecedented expansion of the <b style="color: #00BFA5;">Public Sector</b>. The state became the supreme entrepreneur, regulator, banker, and employer of last resort. It established the core foundations of modern infrastructure that the private sector had neither the capital nor the risk appetite to build:
  </p>

  <ul style="color: #FFFFFF; line-height: 1.8; margin-left: 20px;">
    <li><b style="color: #00BFA5;">Commanding Heights of the Economy:</b> The state reserved strategic sectors like coal mining, telecommunications, steel production, atomic energy, and heavy engineering exclusively for public sector undertakings (PSUs).</li>
    <li><b style="color: #00BFA5;">Protection of Private Capital:</b> Paradoxically, while the state expanded, it also heavily shielded private domestic industrialists from foreign competition through stringent import tariffs, quotas, and licensing. This enabled large industrial houses (Tatas, Birlas) to accumulate immense wealth and capture domestic markets without fear of global multinational competition.</li>
    <li><b style="color: #00BFA5;">The Rise of the Urban Middle Class:</b> The massive bureaucratic apparatus required to administer state regulations, plan targets, and public enterprises created an enormous, salaried urban middle class comprising civil servants, engineers, managers, clerks, and educators. This class gained immense social prestige and economic stability.</li>
    <li><b style="color: #00BFA5;">Rise of Middle Peasants (Kulaks):</b> Land reforms effectively dismantled the absentee Zamindars. Although land ceilings were largely circumvented, tenants who secured occupancy rights, combined with affluent farmers in irrigated regions, coalesced into a powerful new political interest group representing agrarian capitalism.</li>
  </ul>

  <!-- SECTION 3: FAMINE, CRISIS & SUSPENSION OF FIVE-YEAR PLANS -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">3. The Food Crisis, Bihar Famine &amp; The Plan Holiday (1966–1969)</h2>

  <p>
    The mid-1960s brought India to the brink of catastrophic economic collapse. The heavy industry bias of the Second and Third Plans had starved the agrarian sector of critical capital. Simultaneously, India was struck by a devastating series of geopolitical and ecological shocks:
  </p>

  <div style="background: rgba(0, 191, 165, 0.05); border-left: 4px solid #00BFA5; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 17px;">(i) The Bihar Famine (1965–1967)</h3>
    <p style="margin: 0; color: #FFFFFF;">
      Two successive monsoon failures in 1965 and 1966 triggered acute agricultural droughts across Northern India, turning acute in Bihar. Foodgrain production plunged by nearly 20% nationally, while in Bihar, output dropped to less than half of normal levels. Nine districts faced full-scale famine conditions. Calorie intake in many rural pockets crashed below 1,000 calories per day, causing rampant malnutrition, starvation deaths, and diseases.
    </p>
    <p style="margin: 8px 0 0 0; color: #FFFFFF;">
      The crisis was exacerbated by the policy of <b style="color: #00BFA5;">"Zoning"</b>, under which state governments prohibited the inter-state trade of foodgrains. Food-deficit states like Bihar could not buy grain from surplus regions like Punjab, driving local grain prices up by over 400%. The Indian government was forced to plead for food assistance from the United States under the <b style="color: #00BFA5;">PL-480 (Public Law 480)</b> program. The US used this "ship-to-mouth" dependency to pressure India into devaluing the rupee and diluting its independent foreign policy stance on the Vietnam War.
    </p>
  </div>

  <div style="background: rgba(0, 191, 165, 0.05); border-left: 4px solid #00BFA5; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 17px;">(ii) Suspension of Five-Year Plans (Plan Holiday: 1966–1969)</h3>
    <p style="margin: 0; color: #FFFFFF;">
      The twin wars with China (1962) and Pakistan (1965) diverted scarce national resources into defense spending. Combined with drought, foreign exchange shortages, and inflationary pressures, the government was unable to mobilize capital for the Fourth Five-Year Plan. Consequently, formal five-year planning was temporarily suspended for three years (1966–1969), known in economic history as the <b style="color: #00BFA5;">"Plan Holiday"</b>. In its place, three separate Annual Plans were executed with an emergency focus on agriculture and immediate food production.
    </p>
  </div>

  <!-- SECTION 4: GREEN REVOLUTION & POLITICAL FALLOUTS -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">4. The Green Revolution &amp; Its Political Fallouts</h2>

  <p>
    Confronted with the national humiliation of food dependency and American geopolitical arm-twisting, Prime Minister Lal Bahadur Shastri and subsequently Indira Gandhi, with Agriculture Minister C. Subramaniam and agricultural scientist <b style="color: #00BFA5;">Dr. M.S. Swaminathan</b>, radically overhauled agrarian policy. Instead of dispersing resources thinly across backward agrarian regions, the government adopted the strategy of betting on the strong: directing high-technology agricultural packages to areas that already possessed assured irrigation and resourceful farmers.
  </p>

  <div style="background: rgba(0, 191, 165, 0.05); border-left: 4px solid #00BFA5; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 17px;">(i) Core Technological Components</h3>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00BFA5;">High Yielding Variety (HYV) Seeds:</b> Introduction of semi-dwarf Mexican wheat varieties (developed by Nobel Laureate Norman Borlaug) and Philippine rice strains.</li>
      <li><b style="color: #00BFA5;">Chemical Inputs &amp; Subsidies:</b> Massive application of synthetic nitrogenous fertilizers, chemical pesticides, and highly subsidized electricity for tube-wells.</li>
      <li><b style="color: #00BFA5;">Price Guarantees &amp; Procurement:</b> Establishment of the Agricultural Prices Commission (now CACP) and the <b style="color: #00BFA5;">Food Corporation of India (FCI)</b> in 1965 to purchase surplus grain at guaranteed Minimum Support Prices (MSP) and build national buffer stocks.</li>
    </ul>
  </div>

  <div style="background: rgba(0, 191, 165, 0.05); border-left: 4px solid #00BFA5; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 17px;">(ii) Deep Political &amp; Socio-Economic Fallouts</h3>
    <p style="margin: 0 0 10px 0; color: #FFFFFF;">
      While the Green Revolution achieved its primary objective of making India self-sufficient in foodgrains and ending reliance on foreign food aid, it unleashed profound structural contradictions:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00BFA5;">Widened Inter-Regional Disparities:</b> The benefits were disproportionately concentrated in <b style="color: #00BFA5;">Punjab, Haryana, and Western Uttar Pradesh</b>, leaving Eastern India (Bihar, Odisha, West Bengal) and drylands in chronic agrarian stagnation.</li>
      <li><b style="color: #00BFA5;">Intensified Intra-Rural Inequality:</b> Prosperous landlords and rich peasants reaped vast commercial profits, whereas small and marginal farmers, unable to afford expensive inputs and tubewell borewells, sank into debt. In many areas, tenants were evicted as commercial farming became lucrative.</li>
      <li><b style="color: #00BFA5;">Rise of Agrarian Political Parties:</b> The enriched middle peasantry (Other Backward Classes and dominant peasant castes like Jats, Yadavs, Kurmis, Marathas) translated their newfound economic clout into electoral power. They deserted the urban-elite-led Congress and founded powerful regional peasant parties, such as the <b style="color: #00BFA5;">Bharatiya Kranti Dal (BKD)</b> led by Chaudhary Charan Singh in Uttar Pradesh, Akali Dal in Punjab, and later the Lok Dal.</li>
      <li><b style="color: #00BFA5;">Militant Mobilization &amp; Naxalite Resurgence:</b> The sharpening polarization between rich landowners and landless Dalit/Adivasi laborers fueled left-wing radicalism, contributing directly to the emergence of the <b style="color: #00BFA5;">Naxalite movement</b> in 1967 starting from Naxalbari (West Bengal) under Charu Majumdar.</li>
    </ul>
  </div>

  <!-- SPECIALIZED BOXES: THINKER QUOTE & BOARD EXAM TIP -->
  <div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0;">
    <div style="background: rgba(0, 191, 165, 0.08); border-left: 4px solid #00BFA5; padding: 16px; border-radius: 6px;">
      <h4 style="color: #00BFA5; margin: 0 0 6px 0; font-size: 16px;">🧠 Alternative Vision: J.C. Kumarappa &amp; Economy of Permanence</h4>
      <p style="color: #E2E8F0; margin: 0; font-size: 14.5px; line-height: 1.6;">
        Gandhian economist <b style="color: #00BFA5;">J.C. Kumarappa</b> proposed an alternative development blueprint focusing on rural industrialization, ecological harmony, and village self-reliance. He cautioned that mimicry of Western and Soviet heavy industrial centralization would inevitably lead to ecological devastation, urban slums, and the exploitation of rural labor.
      </p>
    </div>

    <div style="background: rgba(253, 200, 48, 0.08); border-left: 4px solid #FDC830; padding: 16px; border-radius: 6px;">
      <h4 style="color: #FDC830; margin: 0 0 6px 0; font-size: 16px;">💡 Board Exam Strategy (2 Marks Mastery)</h4>
      <p style="color: #E2E8F0; margin: 0; font-size: 14.5px; line-height: 1.6;">
        In 2-mark questions, examiners evaluate precise identification of key architects (K.N. Raj vs P.C. Mahalanobis), dates (1951 vs 1956), and direct contrasting points. When asked about the Green Revolution's political fallout, always highlight the <b>emergence of middle peasant political mobilization (Charan Singh / BKD)</b> and <b>widening inter-regional inequality</b>.
      </p>
    </div>
  </div>

  <!-- CHRONOLOGICAL TIMELINE -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">5. Key Historical Milestones: Indian Planning &amp; Agriculture</h2>
  
  <div style="overflow-x: auto; margin-top: 14px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14.5px;">
      <thead>
        <tr style="background: rgba(0, 191, 165, 0.2); color: #00BFA5;">
          <th style="padding: 10px 14px; border: 1px solid rgba(0, 191, 165, 0.3); text-align: left;">Year</th>
          <th style="padding: 10px 14px; border: 1px solid rgba(0, 191, 165, 0.3); text-align: left;">Event / Milestone</th>
          <th style="padding: 10px 14px; border: 1px solid rgba(0, 191, 165, 0.3); text-align: left;">Historical &amp; Economic Significance</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">1944</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">The Bombay Plan</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Industrialists advocate state-led infrastructure building and planning.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.04);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">March 1950</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Planning Commission Formed</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Established via cabinet resolution; Nehru acts as ex-officio chairman.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">1951–1956</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">First Five-Year Plan</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Focus on agriculture, river valley dams (Bhakra, Hirakud) and land reforms.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.04);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">1955</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Avadi Congress Session</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Congress commits to a "Socialistic Pattern of Society" as national vision.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">1956–1961</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Second Five-Year Plan</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Mahalanobis model pushes heavy industrialization and import tariffs.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.04);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">1965–1967</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Bihar Famine &amp; Food Crisis</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Severe drought, "zoning" failures, and humiliating US PL-480 grain dependency.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">1966–1969</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Plan Holiday</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Suspension of Five-Year Plans; execution of three emergency Annual Plans.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.04);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">1967</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Green Revolution Initiated</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Adoption of HYV seeds, chemical fertilizers, and guaranteed MSP procurement.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00BFA5; font-weight: bold;">1 Jan 2015</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">NITI Aayog Replaces Planning Commission</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Shift from top-down centralized five-year planning to cooperative federalism.</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: SOLUTIONS (Q & A)                          */
/* -------------------------------------------------------------------------- */

export const c12Pol10HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION A: VERY SHORT ANSWER (VSAT) QUESTIONS (1 & 2 MARKS) -->
  <div style="background: rgba(0, 191, 165, 0.08); border-left: 5px solid #00BFA5; padding: 14px 18px; margin-bottom: 24px; border-radius: 4px;">
    <h2 style="color: #00BFA5; margin: 0 0 6px 0; font-size: 20px;">Section A: Very Short Answer Questions (1 &amp; 2 Marks)</h2>
    <p style="margin: 0; color: #64FFDA; font-size: 14.5px;">Direct Recall, Definitional Precision &bull; Exactly 8 Questions (Q1 to Q8)</p>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 17px;">Q1: What was the 'Bombay Plan' of 1944?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00BFA5;">Answer:</b> The <b style="color: #00BFA5;">Bombay Plan</b> was a historic economic manifesto drafted in 1944 by a group of leading Indian industrialists (including J.R.D. Tata, G.D. Birla, and Purshotamdas Thakurdas). It explicitly recommended that the post-independence Indian state must make massive public investments in basic infrastructure, power, transport, and heavy capital-goods industries, as private domestic capital was severely inadequate to undertake such massive long-gestation ventures.
    </p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 17px;">Q2: Differentiate between the primary focus of the First Five-Year Plan and the Second Five-Year Plan.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00BFA5;">Answer:</b>
    </p>
    <ul style="color: #FFFFFF; margin: 6px 0 0 20px; line-height: 1.7;">
      <li><b style="color: #00BFA5;">First Five-Year Plan (1951–1956):</b> Drafted by K.N. Raj, it concentrated predominantly on <b style="color: #00BFA5;">agriculture, irrigation, and massive dams</b> (such as Bhakra Nangal) to overcome post-partition food shortages and control inflation.</li>
      <li><b style="color: #00BFA5;">Second Five-Year Plan (1956–1961):</b> Formulated by P.C. Mahalanobis, it shifted the focus decisively to <b style="color: #00BFA5;">rapid heavy industrialization</b>, basic capital goods (steel, electricity, heavy machinery), and state-led public sector expansion.</li>
    </ul>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 17px;">Q3: Why is the Indian economic model referred to as a 'Mixed Economy'?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00BFA5;">Answer:</b> India's economic model is termed a <b style="color: #00BFA5;">Mixed Economy</b> because it rejected both unbridled Western capitalism and complete Soviet state socialism. Instead, it synthesised both: the <b style="color: #00BFA5;">State (Public Sector)</b> controlled the "commanding heights" of the economy (heavy industry, railways, mining, defense, and power), while the <b style="color: #00BFA5;">Private Sector</b> was permitted to own and operate agriculture, consumer goods manufacturing, retail trade, and commerce.
    </p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 17px;">Q4: What was the 'Plan Holiday' and why was it declared?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00BFA5;">Answer:</b> The <b style="color: #00BFA5;">Plan Holiday</b> was the temporary three-year suspension of Five-Year Plans between <b style="color: #00BFA5;">1966 and 1969</b>, during which three Annual Plans were implemented. It was necessitated by a devastating economic crisis caused by two consecutive monsoon failures (1965 and 1966), widespread famine in Bihar, severe foreign exchange depletion, and resource diversion toward defense expenditures following the 1962 Sino-Indian War and the 1965 Indo-Pak War.
    </p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 17px;">Q5: What was the policy of 'Zoning' during the food crisis of the 1960s?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00BFA5;">Answer:</b> <b style="color: #00BFA5;">Zoning</b> was a government trade regulation that created trade barriers between states by prohibiting the free inter-state transit and commercial movement of foodgrains by private traders. Consequently, food-deficient states like Bihar suffered severe food shortages and skyrocketing grain prices, while neighboring surplus states could not export their excess harvest, dramatically worsening famine conditions.
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 17px;">Q6: State two positive and two negative impacts of the Green Revolution.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00BFA5;">Answer:</b>
    </p>
    <ul style="color: #FFFFFF; margin: 6px 0 0 20px; line-height: 1.7;">
      <li><b style="color: #00BFA5;">Positive Impacts:</b> (i) Achieved national food self-sufficiency, ending humiliating reliance on US PL-480 grain imports; (ii) Created substantial national buffer stocks managed by the Food Corporation of India (FCI).</li>
      <li><b style="color: #00BFA5;">Negative Impacts:</b> (i) Widened inter-regional disparities, heavily favoring Punjab, Haryana, and Western UP over Eastern India; (ii) Sharpened rural class polarization between rich capitalist farmers and impoverished landless laborers.</li>
    </ul>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 17px;">Q7: How did the Green Revolution lead to the rise of new political forces in North India?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00BFA5;">Answer:</b> The Green Revolution enriched middle peasants and dominant agrarian castes (such as Jats, Yadavs, and Kurmis). Having acquired substantial economic prosperity, these middle-caste agrarian elites demanded political representation and price concessions, deserting the upper-caste-dominated Congress. Under leaders like <b style="color: #00BFA5;">Chaudhary Charan Singh</b>, they formed powerful regional peasant-based parties like the <b style="color: #00BFA5;">Bharatiya Kranti Dal (BKD)</b> and Lok Dal, reshaping the electoral landscape of Northern India.
    </p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 17px;">Q8: Name the institution that replaced the Planning Commission and state when it was established.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00BFA5;">Answer:</b> The Planning Commission was replaced by the <b style="color: #00BFA5;">NITI Aayog</b> (National Institution for Transforming India) on <b style="color: #00BFA5;">1 January 2015</b>. It was created to foster "Cooperative Federalism" and replace the traditional top-down, command-oriented Five-Year Plan model with a strategic, bottom-up policy think-tank framework.
    </p>
  </div>

  <!-- SECTION B: SHORT ANSWER (SA) QUESTIONS (2 & 3 MARKS) -->
  <div style="background: rgba(0, 191, 165, 0.08); border-left: 5px solid #00BFA5; padding: 14px 18px; margin: 30px 0 24px 0; border-radius: 4px;">
    <h2 style="color: #00BFA5; margin: 0 0 6px 0; font-size: 20px;">Section B: Short Answer Questions (2 &amp; 3 Marks)</h2>
    <p style="margin: 0; color: #64FFDA; font-size: 14.5px;">Conceptual Analysis &amp; Thematic Comparisons &bull; Exactly 2 Questions (Q9 to Q10)</p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00BFA5; margin: 0 0 12px 0; font-size: 18px;">Q9: Explain the major points of debate between the 'Agriculture vs Industry' development strategies in independent India.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00BFA5;">Answer:</b> The debate over whether to prioritize agriculture or industry was the central ideological cleavage in Indian economic planning:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00BFA5;">The Agrarian Argument:</b> Proponents like Gandhian economist J.C. Kumarappa and peasant leader Chaudhary Charan Singh argued that since over 70% of India's population depended directly on rural livelihoods, neglecting agriculture in favor of urban-centric heavy industry would drain capital from villages, create rural impoverishment, and fail to generate mass employment. They demanded maximum public capital allocation for minor irrigation, cottage industries, and land rejuvenation.</li>
      <li><b style="color: #00BFA5;">The Heavy Industrialization Argument:</b> Nehru and Mahalanobis argued that agrarian prosperity was impossible without modern industry. Modern agriculture requires steel for tractors, electricity for tubewells, chemical fertilizers, and transport networks to carry produce to markets. They contended that only rapid, heavy capital-goods industrialization could break the vicious cycle of colonial underdevelopment, create modern productive employment, and establish national sovereign defense capabilities.</li>
    </ul>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00BFA5; margin: 0 0 12px 0; font-size: 18px;">Q10: Critically examine how the expansion of the public sector impacted the rise of new economic interests in India.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00BFA5;">Answer:</b> The massive expansion of the state-controlled public sector under the Five-Year Plans had complex, multi-layered socioeconomic consequences:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00BFA5;">Sheltered Private Corporate Monopolies:</b> While the state proclaimed a socialist pattern, its heavy investments in basic infrastructure (roads, rail, steel, power) and protectionist import tariffs shielded domestic private industrialists (like Tatas and Birlas) from multinational competition, allowing private conglomerates to earn super-normal profits under the License-Permit Raj.</li>
      <li><b style="color: #00BFA5;">Growth of a Bureaucratic Middle Class:</b> The vast regulatory state created a large, influential urban middle class composed of civil servants, public managers, engineers, and clerical staff whose livelihoods and privileges were directly guaranteed by state expenditures.</li>
      <li><b style="color: #00BFA5;">Empowerment of Commercial Agrarian Elite:</b> State investment in subsidized fertilizers, power, and procurement enabled middle and rich peasants to emerge as a dominant economic bloc, leaving landless agricultural laborers and marginalized forest-dwellers with minimal benefits.</li>
    </ul>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: INTERACTIVE MCQS (15)                       */
/* -------------------------------------------------------------------------- */

export const c12Pol10Mcqs = [
  {
    "id": "c12-pol-10-mcq-1",
    "question": "When was the Planning Commission of India established?",
    "options": [
      "A):   March 1950",
      "B):   January 1950",
      "C):   August 1947",
      "D):   November 1951"
    ],
    "correctAnswer": "A",
    "explanation": "The Planning Commission of India was established in March 1950 by an executive cabinet resolution of the Government of India."
  },
  {
    "id": "c12-pol-10-mcq-2",
    "question": "Who among the following was the young economist associated with drafting the First Five-Year Plan?",
    "options": [
      "A):   P.C. Mahalanobis",
      "B):   K.N. Raj",
      "C):   Amartya Sen",
      "D):   Chaudhary Charan Singh"
    ],
    "correctAnswer": "B",
    "explanation": "Economist K.N. Raj was one of the key young architects who drafted the First Five-Year Plan, arguing that India should 'hasten slowly' in its initial two decades."
  },
  {
    "id": "c12-pol-10-mcq-3",
    "question": "The 'Bombay Plan' was drafted in 1944 by which of the following groups?",
    "options": [
      "A):   Socialist Party executives",
      "B):   Peasant trade union leaders",
      "C):   Leading Indian industrialists",
      "D):   British colonial administrators"
    ],
    "correctAnswer": "C",
    "explanation": "The Bombay Plan was a joint proposal drafted in 1944 by leading Indian industrialists (including J.R.D. Tata and G.D. Birla) advocating that the state must undertake massive investment in basic industries."
  },
  {
    "id": "c12-pol-10-mcq-4",
    "question": "At which session did the Indian National Congress pass the historic resolution declaring a 'Socialistic Pattern of Society' as its goal?",
    "options": [
      "A):   Nagpur Session (1959)",
      "B):   Haripura Session (1938)",
      "C):   Lahore Session (1929)",
      "D):   Avadi Session (1955)"
    ],
    "correctAnswer": "D",
    "explanation": "The Congress passed the resolution declaring the goal of establishing a 'Socialistic Pattern of Society' at its Avadi Session near Madras in 1955."
  },
  {
    "id": "c12-pol-10-mcq-5",
    "question": "The period from 1966 to 1969 in Indian economic planning is officially known as:",
    "options": [
      "A):   Plan Holiday",
      "B):   Rolling Plan",
      "C):   Emergency Plan Period",
      "D):   Green Revolution Era"
    ],
    "correctAnswer": "A",
    "explanation": "The three-year suspension of Five-Year Plans between 1966 and 1969, caused by wars, foreign exchange scarcity, and severe drought, is termed the 'Plan Holiday'."
  },
  {
    "id": "c12-pol-10-mcq-6",
    "question": "On which date was NITI Aayog officially constituted to replace the Planning Commission?",
    "options": [
      "A):   15 August 2014",
      "B):   1 January 2015",
      "C):   26 January 2015",
      "D):   1 April 2017"
    ],
    "correctAnswer": "B",
    "explanation": "NITI Aayog (National Institution for Transforming India) was officially formed on 1 January 2015 via a Union Cabinet resolution."
  },
  {
    "id": "c12-pol-10-mcq-7",
    "question": "Which of the following sectors was the primary focus of the Second Five-Year Plan?",
    "options": [
      "A):   Agriculture and Minor Irrigation",
      "B):   Information Technology and Services",
      "C):   Rapid Heavy Industrialization",
      "D):   Handicrafts and Rural Weaving"
    ],
    "correctAnswer": "C",
    "explanation": "Formulated by P.C. Mahalanobis, the Second Five-Year Plan (1956–1961) placed its overwhelming emphasis on rapid heavy industrialization and basic capital goods like steel, power, and machinery."
  },
  {
    "id": "c12-pol-10-mcq-8",
    "question": "What was the purpose of the 'Zoning' policy enforced by state governments during the 1960s food crisis?",
    "options": [
      "A):   Demarcating agricultural land from industrial zones",
      "B):   Reserving reserved constituencies for peasant representatives",
      "C):   Designating forest conservation boundaries",
      "D):   Restricting the trade and transit of foodgrains across state boundaries"
    ],
    "correctAnswer": "D",
    "explanation": "Zoning prohibited the commercial movement of foodgrains across state borders, preventing deficit states like Bihar from procuring grain from surplus states like Punjab."
  },
  {
    "id": "c12-pol-10-mcq-9",
    "question": "Under which foreign aid agreement did India import massive quantities of wheat from the United States during the mid-1960s?",
    "options": [
      "A):   Public Law 480 (PL-480)",
      "B):   Marshall Plan",
      "C):   Colombo Plan",
      "D):   Bretton Woods Agreement"
    ],
    "correctAnswer": "A",
    "explanation": "India imported foodgrains from the United States under the PL-480 (Public Law 480) program, which created severe political vulnerability and dependency."
  },
  {
    "id": "c12-pol-10-mcq-10",
    "question": "Which political leader strongly championed the cause of agriculture over industry and later founded the Bharatiya Kranti Dal (BKD)?",
    "options": [
      "A):   Jawaharlal Nehru",
      "B):   Chaudhary Charan Singh",
      "C):   Morarji Desai",
      "D):   C. Rajagopalachari"
    ],
    "correctAnswer": "B",
    "explanation": "Chaudhary Charan Singh broke away from Congress to advocate aggressively for peasant interests and rural agriculture, founding the Bharatiya Kranti Dal (BKD) in UP."
  },
  {
    "id": "c12-pol-10-mcq-11",
    "question": "Who authored the influential book 'Economy of Permanence', advocating a village-centered, ecologically sustainable economic model?",
    "options": [
      "A):   Mahatma Gandhi",
      "B):   P.C. Mahalanobis",
      "C):   J.C. Kumarappa",
      "D):   Dr. B.R. Ambedkar"
    ],
    "correctAnswer": "C",
    "explanation": "Gandhian economist J.C. Kumarappa authored 'Economy of Permanence', proposing an alternative development model based on village industries and ecological balance."
  },
  {
    "id": "c12-pol-10-mcq-12",
    "question": "Which of the following regions reaped the maximum initial benefits of the Green Revolution in India?",
    "options": [
      "A):   Bihar, Odisha, and Eastern Uttar Pradesh",
      "B):   Rajasthan, Gujarat, and Madhya Pradesh",
      "C):   Kerala, Tamil Nadu, and Karnataka",
      "D):   Punjab, Haryana, and Western Uttar Pradesh"
    ],
    "correctAnswer": "D",
    "explanation": "The Green Revolution was intentionally concentrated in regions with assured irrigation and resourceful farmers, predominantly Punjab, Haryana, and Western UP."
  },
  {
    "id": "c12-pol-10-mcq-13",
    "question": "Assertion (A): The Green Revolution ended India's chronic dependence on external food aid.\nReason (R): The Green Revolution significantly reduced inter-regional disparities between eastern and northwestern states of India.",
    "options": [
      "A):   (A) is true, but (R) is false",
      "B):   Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "C):   Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "D):   (A) is false, but (R) is true"
    ],
    "correctAnswer": "A",
    "explanation": "(A) is true because India became self-sufficient in foodgrains and built buffer stocks. (R) is false because the Green Revolution widened, rather than reduced, disparities between rich northwestern states and impoverished eastern states."
  },
  {
    "id": "c12-pol-10-mcq-14",
    "question": "Which of the following was NOT a direct consequence of the expansion of the public sector under Indian planning?",
    "options": [
      "A):   Establishment of core infrastructure like steel, dams, and railways",
      "B):   Complete elimination of all private sector businesses and land ownership",
      "C):   Expansion of an urban salaried administrative middle class",
      "D):   Protection of private domestic industrialists from foreign competition"
    ],
    "correctAnswer": "B",
    "explanation": "Under the Mixed Economy model, private businesses, small-scale enterprises, and private farming land were never eliminated; they operated alongside the public sector."
  },
  {
    "id": "c12-pol-10-mcq-15",
    "question": "Consider the following events:\n1. Establishment of NITI Aayog\n2. The Bombay Plan\n3. Launch of the First Five-Year Plan\n4. Declaration of the Plan Holiday\nWhat is the correct chronological sequence?",
    "options": [
      "A):   2 — 4 — 3 — 1",
      "B):   3 — 2 — 4 — 1",
      "C):   2 — 3 — 4 — 1",
      "D):   1 — 2 — 3 — 4"
    ],
    "correctAnswer": "C",
    "explanation": "The correct sequence is: Bombay Plan (1944) → First FYP (1951) → Plan Holiday (1966) → NITI Aayog (2015)."
  }
];
