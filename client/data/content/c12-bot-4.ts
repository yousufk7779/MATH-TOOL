// Class 12 Botany Chapter 4: Ecology and Environment (Populations, Ecosystems & Biodiversity Conservation)
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Botany | Class: 12 | Code: c12-bot-4

export const c12Bot4HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.12), rgba(0, 131, 143, 0.12)); border: 1.5px solid rgba(0, 229, 255, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 12px 0; font-size: 17.5px; font-weight: bold; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📖</span> Quick Glossary &amp; Ecological Fundamentals
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Carrying Capacity (K):</b> Maximum population size of a species that a given habitat can sustainably support indefinitely with available resources.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Net Primary Productivity (NPP):</b> Rate of organic biomass accumulation by autotrophs remaining after accounting for respiratory losses (NPP = GPP - R).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Ten Percent Law:</b> Thermodynamic principle stating that only approximately 10% of energy entering any trophic level is transferred to the next higher level.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Biodiversity Hotspot:</b> Biogeographical region characterized by exceptional levels of species richness, high degree of endemism, and severe habitat loss.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Evil Quartet:</b> The four major anthropogenic drivers of global biodiversity extinction: Habitat Loss/Fragmentation, Over-exploitation, Alien Invasions, and Co-extinctions.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Sacred Groves:</b> Tracts of undisturbed natural forests protected by indigenous tribal communities through cultural and religious traditions.
      </div>
    </div>
  </div>

  <!-- SECTION 1: POPULATIONS -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Populations: Attributes, Growth Models &amp; Population Interactions
  </h2>
  <p>
    In ecology, a <b>population</b> is defined as an assemblage of interbreeding individuals of the same biological species inhabiting a defined geographic area, utilizing shared environmental resources, and functioning as a demographic and evolutionary unit.
  </p>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Population Attributes</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E5FF;">Birth Rate (Natality):</b> Number of new individuals added to a population per unit time per unit initial population (expressed as per capita births, e.g., 8 new lotus plants in a pond of 20 = 0.4 offspring per lotus per year).</li>
    <li><b style="color: #00E5FF;">Death Rate (Mortality):</b> Number of deaths per unit population per unit time (per capita deaths).</li>
    <li><b style="color: #00E5FF;">Sex Ratio:</b> The proportion of male to female individuals in a population (e.g., 60% females and 40% males).</li>
    <li><b style="color: #00E5FF;">Age Pyramids:</b> Graphical representation showing proportion of individuals in three ecological age groups (Pre-reproductive, Reproductive, Post-reproductive):
      <br/>&bull; <i>Triangular / Expanding Pyramid:</i> Broad base with large pre-reproductive population (rapidly growing population).
      <br/>&bull; <i>Bell-shaped / Stable Pyramid:</i> Pre-reproductive and reproductive age groups are nearly equal (stable population).
      <br/>&bull; <i>Urn-shaped / Declining Pyramid:</i> Narrow base with small pre-reproductive population (diminishing population).
    </li>
  </ul>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Population Growth Models</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E5FF; margin: 0 0 8px 0; font-size: 15.5px;">📈 1. Exponential Growth (J-Shaped Curve)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Occurs when resources (food and space) are unlimited in the habitat. Population grows geometrically without upper ceiling.
        <br/><b style="color: #00E5FF;">Differential Equation:</b> (dN / dt) = rN
        <br/><b style="color: #00E5FF;">Integral Form:</b> N_t = N_0 e<sup>rt</sup>
        <br/>Where N = Population density, r = Intrinsic rate of natural increase, N_0 = Initial population, N_t = Population at time t.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E5FF; margin: 0 0 8px 0; font-size: 15.5px;">📊 2. Logistic Growth (S-Shaped / Sigmoid Curve)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Real-world model (Verhulst-Pearl Logistic Growth) where resources are finite. Exhibits Lag phase &rarr; Acceleration phase &rarr; Deceleration phase &rarr; Asymptote when reaching carrying capacity (K).
        <br/><b style="color: #00E5FF;">Verhulst-Pearl Equation:</b> (dN / dt) = rN[(K - N) / K]
        <br/>Where K = Carrying capacity, [(K - N) / K] = Environmental resistance.
      </p>
    </div>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iii) Population Interactions (Interspecific Dynamics)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">1. Mutualism (+/+):</b> Obligate, mutually beneficial interaction:
        <br/>&bull; <i>Lichens:</i> Mutualistic association between an alga (phycobiont) and a fungus (mycobiont).
        <br/>&bull; <i>Mycorrhizae:</i> Fungi (<i>Glomus</i>) and roots of higher plants.
        <br/>&bull; <i>Plant-Pollinator Mutualisms:</i> <i>Yucca</i> and <i>Pronuba</i> moth; Fig and <i>Blastophaga</i> wasp.
        <br/>&bull; <i>Sexual Deceit (Pseudocopulation):</i> The Mediterranean orchid <i>Ophrys</i> mimics the female bee <i>Colpa aurea</i> in color, shape, and scent to ensure pollination.
      </li>
      <li><b style="color: #00E5FF;">2. Competition (-/-):</b> Interaction where both competing species suffer reduced fitness for limiting resources:
        <br/>&bull; <i>Gause's Competitive Exclusion Principle:</i> Two closely related species competing for the exact same limiting resource cannot coexist indefinitely; the competitively inferior species will be eliminated.
        <br/>&bull; <i>Resource Partitioning (MacArthur, 1958):</i> Five species of warblers coexisted on the same spruce tree by foraging at different heights and times.
        <br/>&bull; <i>Interference Competition:</i> Abingdon tortoise in Galapagos became extinct within a decade after goats were introduced due to greater browsing efficiency.
      </li>
      <li><b style="color: #00E5FF;">3. Predation (+/-):</b> Predator captures and feeds on prey; acts as conduit for energy transfer, keeps prey populations under check, and maintains community species diversity (e.g., Removal of keystone predator starfish <i>Pisaster</i> from intertidal rocky shores caused extinction of >10 invertebrate species). Biological control: <i>Cactoblastis</i> moth controlled invasive prickly pear cactus in Australia.</li>
      <li><b style="color: #00E5FF;">4. Parasitism (+/-):</b> Parasite derives nutrition and shelter at the expense of host. Ectoparasites (lice on humans, ticks on dogs, <i>Cuscuta</i> on hedge plants) vs Endoparasites (liver fluke, plasmodium). <b style="color: #00E5FF;">Brood Parasitism:</b> Cuckoo (Koel) lays eggs in Crow's nest.</li>
      <li><b style="color: #00E5FF;">5. Commensalism (+/0):</b> One species benefits, the other is unaffected: Orchid epiphyte growing on mango tree; Barnacles on whale back; Cattle egret and grazing livestock; Clownfish nestled in stinging tentacles of sea anemone.</li>
      <li><b style="color: #00E5FF;">6. Amensalism (-/0):</b> One species is harmed, the other is unaffected: <i>Penicillium</i> secreting penicillin that inhibits <i>Staphylococcus</i> bacteria; Black walnut tree (<i>Juglans nigra</i>) secreting juglone that stunts surrounding plants (allelopathy).</li>
    </ul>
  </div>

  <!-- SECTION 2: ECOSYSTEMS -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Ecosystems: Structure, Productivity, Decomposition &amp; Energy Flow
  </h2>
  <p>
    An <b>ecosystem</b> is a self-sustaining functional unit of the biosphere where living organisms interact among themselves and with the surrounding physical abiotic environment. <b>Stratification</b> is the vertical distribution of different species occupying distinct strata (e.g., emergent canopy trees occupy top vertical layer, shrubs intermediate layer, herbs and grasses the basal layer).
  </p>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Ecosystem Productivity &amp; Energetics</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E5FF;">Primary Productivity:</b> Rate at which solar radiant energy is converted into organic biomass by photosynthetic autotrophs per unit area over a time interval (expressed as g m<sup>-2</sup> yr<sup>-1</sup> or kcal m<sup>-2</sup> yr<sup>-1</sup>).
      <br/>&bull; <b style="color: #00E5FF;">Gross Primary Productivity (GPP):</b> Total rate of synthesis of organic matter during photosynthesis.
      <br/>&bull; <b style="color: #00E5FF;">Net Primary Productivity (NPP):</b> Biomass available to heterotrophic consumers after autotrophic respiratory losses (R):
      NPP = GPP - R
    </li>
    <li><b style="color: #00E5FF;">Global Biosphere Productivity:</b> Total annual net primary productivity of the entire biosphere is approximately <b>170 billion tons (dry weight)</b>. Oceans contribute only <b>55 billion tons (~32%)</b> despite covering 70% of the Earth's surface due to light limitation and low nutrient availability.</li>
  </ul>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Decomposition: Mechanism &amp; Influencing Factors</h3>
  <p>
    Decomposition is the enzymatic breakdown of complex organic matter (detritus: dead plant remains, leaves, bark, animal excreta) into inorganic nutrients (CO_2, H_2O, minerals) carried out in 5 sequential steps:
  </p>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">1. Fragmentation:</b> Detritivores (e.g., earthworms) physically break down large detritus particles into smaller fragments.</li>
      <li><b style="color: #00E5FF;">2. Leaching:</b> Water-soluble inorganic nutrients percolate downward into soil horizons and precipitate as unavailable salts.</li>
      <li><b style="color: #00E5FF;">3. Catabolism:</b> Bacterial and fungal extracellular enzymes degrade detritus into simpler inorganic substances.</li>
      <li><b style="color: #00E5FF;">4. Humification:</b> Accumulation of dark, amorphous, colloidal organic substance called <b>humus</b>, which is highly resistant to microbial decay and acts as a reservoir of nutrients.</li>
      <li><b style="color: #00E5FF;">5. Mineralization:</b> Humus is degraded by specific microbes, releasing inorganic mineral nutrients back into the soil.</li>
    </ol>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iii) Energy Flow &amp; Ecological Pyramids</h3>
  <p>
    Of incident solar radiation, less than 50% constitutes <b>Photosynthetically Active Radiation (PAR)</b>. Plants capture only <b>2-10% of PAR</b> to sustain the living world. Energy flows unidirectionally through trophic levels in accordance with Lindeman's <b>10% Law (1942)</b> (only 10% of energy is transferred to the next higher level; 90% is lost as metabolic heat).
  </p>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E5FF; margin: 0 0 8px 0; font-size: 15.5px;">1. Pyramid of Numbers</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        &bull; <i>Upright:</i> In grassland and pond ecosystems (producers outnumber herbivores and carnivores).
        <br/>&bull; <i>Inverted / Spindle:</i> In a tree parasitic ecosystem (single large tree supports many herbivorous birds, which host thousands of parasitic lice).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E5FF; margin: 0 0 8px 0; font-size: 15.5px;">2. Pyramid of Biomass</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        &bull; <i>Upright:</i> In terrestrial ecosystems (forest, grassland).
        <br/>&bull; <i>Inverted:</i> In sea/ocean ecosystems because standing crop biomass of microscopic phytoplankton is small compared to large predatory fishes.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E5FF; margin: 0 0 8px 0; font-size: 15.5px;">3. Pyramid of Energy</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        <b>ALWAYS strictly upright</b> in all ecosystems. Energy is continuously dissipated as metabolic heat at each trophic step in accordance with the Second Law of Thermodynamics and can never be inverted.
      </p>
    </div>
  </div>

  <!-- SECTION 3: BIODIVERSITY AND CONSERVATION -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Biodiversity &amp; Its Conservation Strategies
  </h2>
  <p>
    Sociobiologist <b>Edward Wilson</b> popularized the term <b>Biodiversity</b> to describe the totality of genes, species, and ecosystems in a region.
  </p>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Levels &amp; Patterns of Biodiversity</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E5FF;">Levels of Biodiversity:</b>
      <br/>1. <i>Genetic Diversity:</i> Variation of genes within a species (e.g., medicinal plant <i>Rauwolfia vomitoria</i> produces different potencies of alkaloid reserpine; India has >50,000 strains of rice and >1,000 varieties of mango).
      <br/>2. <i>Species Diversity:</i> Variety of species in a region (Western Ghats have greater amphibian diversity than Eastern Ghats).
      <br/>3. <i>Ecological Diversity:</i> Diversity of ecosystems (India possesses greater ecosystem diversity with deserts, rainforests, coral reefs, mangroves than Scandinavian countries like Norway).
    </li>
    <li><b style="color: #00E5FF;">Global Biodiversity Metrics (Robert May):</b> Estimated total global species richness is <b>7 million species</b>. Over 70% of recorded species are animals, >22% are plants/fungi, and insects constitute >70% of all animal species. India represents 2.4% of world land area but harbors <b>8.1% of global species diversity</b>, making it one of the 12 mega-diversity nations.</li>
    <li><b style="color: #00E5FF;">Species-Area Relationship (Alexander von Humboldt):</b> German naturalist observed that within a region, species richness increases with increasing explored area up to a limit:
      S = C A<sup>z</sup>  &rArr;  log S = log C + z log A
      Where S = Species richness, A = Area, C = Y-intercept, z = Regression coefficient (z = 0.1 - 0.2 for small regions; z = 0.6 - 1.2 for whole continents, e.g., frugivorous birds in tropical forests z = 1.15).
    </li>
  </ul>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Loss of Biodiversity: The "Evil Quartet"</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1.5px solid rgba(224, 64, 251, 0.3); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">1. Habitat Loss &amp; Fragmentation (Primary Cause):</b> Tropical rainforests once covering 14% of land now cover <6%. The Amazon Rainforest ("Lungs of the planet") is being cleared for soybean farming and cattle ranching.</li>
      <li><b style="color: #00E5FF;">2. Over-Exploitation:</b> Excessive hunting/harvesting drove Steller's sea cow and Passenger pigeon to extinction.</li>
      <li><b style="color: #00E5FF;">3. Alien Species Invasions:</b>
        <br/>&bull; Introduction of Nile Perch into Lake Victoria (East Africa) led to extinction of >200 endemic species of cichlid fish.
        <br/>&bull; Invasive weeds: Water Hyacinth (<i>Eichhornia</i>, "Terror of Bengal"), <i>Lantana</i>, <i>Parthenium</i> (Carrot grass).
        <br/>&bull; Illegal introduction of African catfish <i>Clarias gariepinus</i> threatens native catfishes in rivers.
      </li>
      <li><b style="color: #00E5FF;">4. Co-extinctions:</b> Extinction of host fish species leads to obligatory extinction of its specific parasite assemblage; extinction of plant-pollinator mutualisms.</li>
    </ol>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iii) Biodiversity Conservation Strategies</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E5FF; margin: 0 0 8px 0; font-size: 15.5px;">🌿 In-situ Conservation (On-site)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Protecting species within their natural habitats:
        <br/>&bull; <b style="color: #00E5FF;">Biodiversity Hotspots:</b> 36 global hotspots; 3 cover India (Western Ghats-Sri Lanka, Indo-Burma, Himalaya).
        <br/>&bull; <b style="color: #00E5FF;">Biosphere Reserves:</b> 18 in India (MAB program; Core, Buffer, Transition zones).
        <br/>&bull; <b style="color: #00E5FF;">National Parks:</b> 106 in India (strictly protected for wildlife, no human interference).
        <br/>&bull; <b style="color: #00E5FF;">Wildlife Sanctuaries:</b> 573 in India.
        <br/>&bull; <b style="color: #00E5FF;">Sacred Groves:</b> Khasi &amp; Jaintia Hills (Meghalaya), Aravalli Hills (Rajasthan), Western Ghats.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E5FF; margin: 0 0 8px 0; font-size: 15.5px;">🏛️ Ex-situ Conservation (Off-site)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Threatened species are taken out of natural habitats and placed in human-care facilities:
        <br/>&bull; <b>Zoological Parks &amp; Botanical Gardens</b>
        <br/>&bull; <b>Wildlife Safari Parks</b>
        <br/>&bull; <b style="color: #00E5FF;">Cryopreservation:</b> Storage of gametes in liquid nitrogen at -196&deg;C.
        <br/>&bull; <b>Seed Banks &amp; Gene Banks</b>
        <br/>&bull; <b>In Vitro Tissue Culture propagation</b>
      </p>
    </div>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(4, 78, 92, 0.85)); border: 2px solid #00E5FF; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #00E5FF; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Botany Chapter 4: Ecology &amp; Biodiversity Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(0, 229, 255, 0.25); color: #00E5FF; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Ecological Parameter</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Mathematical Model / Concept</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Ecological Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Exponential Growth:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">(dN / dt) = rN  &rArr;  N_t = N_0 e<sup>rt</sup></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Unlimited resources; J-shaped population curve</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Logistic Growth:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">(dN / dt) = rN[(K - N) / K]</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Realistic S-shaped curve with carrying capacity (K)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Primary Productivity:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">NPP = GPP - R</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Biosphere NPP = 170 billion tons (Oceans = 55 billion tons)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Energy Transfer Law:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Lindeman's 10% Law (1942)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Only 10% energy transferred; Energy Pyramid always upright</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Species-Area Curve:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">log S = log C + z log A</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Alexander von Humboldt; Rectangular hyperbola</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Rivet Popper Hypothesis:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Paul Ehrlich</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Extinction of keystone species threatens ecosystem integrity</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Global Biodiversity:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Robert May estimate</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">~7 million species; India shares 8.1% global diversity</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Indian Hotspots:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">3 Hotspots</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Western Ghats-Sri Lanka, Indo-Burma, Himalaya</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c12Bot4HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 131, 143, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Definitions, Ecological Terms, Equations &amp; Key Facts</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define a biological population.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Population:</b> A group of interbreeding individuals of the same species inhabiting a specific geographic area at a given time.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: What is meant by Carrying Capacity (K)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The maximum population density of a species that a habitat can sustain indefinitely with available resources.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: Write the differential equation for Verhulst-Pearl Logistic Growth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      dN/dt = rN((K-N)/K).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: What is an Age Pyramid?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A graphical histogram showing the proportion of individuals in pre-reproductive, reproductive, and post-reproductive age groups.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Define Mutualism with one botanical example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An obligate interspecific interaction where both species benefit, e.g., mycorrhizal association between fungi (<i>Glomus</i>) and plant roots.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is sexual deceit in <i>Ophrys</i> orchid?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The orchid flower mimics the female bee in appearance and scent, attracting male bees for pseudocopulation to effect pollination.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: State Gause's Competitive Exclusion Principle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Two species competing for the exact same limiting resource cannot coexist indefinitely; the inferior competitor is eliminated.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What is Brood Parasitism? Give an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A form of parasitism where the parasite lays eggs in the host's nest (e.g., Cuckoo laying eggs in a Crow's nest).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Define Commensalism with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An interaction where one species benefits while the other is neither harmed nor benefited (e.g., Orchid epiphyte on a mango tree).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Define Amensalism with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An interaction where one species is harmed while the other is unaffected (e.g., <i>Penicillium</i> inhibiting bacterial growth).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What is Stratification in an ecosystem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The vertical distribution of different species occupying distinct vertical tiers/levels in a community (e.g., canopy trees, shrubs, herbs).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Distinguish between Gross Primary Productivity (GPP) and Net Primary Productivity (NPP).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      GPP is the total rate of photosynthetic biomass production; NPP is the net biomass remaining after autotrophic respiration (NPP = GPP - R).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What is the total annual net primary productivity of the whole biosphere?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Approximately 170 billion tons (dry weight) of organic matter.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Why do oceans contribute only 55 billion tons of productivity despite covering 70% of Earth?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Due to light limitation at depth and deficiency of essential mineral nutrients (nitrogen and phosphorus) in vast open waters.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Name the five sequential steps of Decomposition.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fragmentation &rarr; Leaching &rarr; Catabolism &rarr; Humification &rarr; Mineralization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: What is Humus and why is it resistant to microbial degradation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A dark amorphous, colloidal organic substance formed during humification; it resists decay due to its high lignin/tannin content and acidic nature.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: What percentage of Photosynthetically Active Radiation (PAR) is captured by autotrophs?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      2% to 10% of PAR.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: State Lindeman's 10% Law of energy transfer.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Only approximately 10% of energy available at any trophic level is transferred to the next higher trophic level.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Why is the Pyramid of Energy ALWAYS strictly upright?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because energy is irreversibly lost as metabolic heat at each trophic step in accordance with the Second Law of Thermodynamics.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: Give an example of an inverted Pyramid of Biomass.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An aquatic/oceanic ecosystem, where a small standing crop of phytoplankton supports a larger biomass of zooplankton and predatory fish.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Who popularized the term 'Biodiversity'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sociobiologist Edward Wilson.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Name the three hierarchical levels of Biodiversity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Genetic diversity. 2. Species diversity. 3. Ecological (ecosystem) diversity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Give an example of Genetic Diversity in plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The medicinal plant <i>Rauwolfia vomitoria</i> showing genetic variations in the potency and concentration of the active chemical reserpine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What is Robert May's global species estimate?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Approximately 7 million species.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What percentage of global land area is occupied by India and what is its global species share?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      India occupies 2.4% of world land area but harbors 8.1% of global biodiversity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Write the mathematical equation of Alexander von Humboldt's Species-Area Relationship.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      S = C A<sup>z</sup> (or log S = log C + z log A).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: What does the regression coefficient (z) represent in the Species-Area equation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The slope of the line representing the rate of species accumulation with increasing area.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is Paul Ehrlich's 'Rivet Popper Hypothesis'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An analogy comparing an ecosystem to an airplane, where species represent rivets; loss of key species (keystone rivets) leads to ecosystem collapse.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: List the 'Evil Quartet' causes of biodiversity extinction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Habitat Loss and Fragmentation. 2. Over-exploitation. 3. Alien Species Invasions. 4. Co-extinctions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Why is the Amazon Rainforest called the 'Lungs of the Planet'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because it produces approximately 20% of total atmospheric oxygen through photosynthesis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Name two invasive exotic weed species in India.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Water Hyacinth (<i>Eichhornia crassipes</i>) and Carrot grass (<i>Parthenium hysterophorus</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is a Biodiversity Hotspot?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A biogeographical region with exceptionally high species richness, high endemism, and high threat of habitat destruction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: How many biodiversity hotspots exist globally and how many cover India?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      36 global hotspots exist; 3 cover India (Western Ghats-Sri Lanka, Indo-Burma, and Himalaya).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Define Endemic Species.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Species that are restricted strictly to a particular geographic region and found nowhere else on Earth.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Differentiate between In-situ and Ex-situ conservation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In-situ is on-site conservation in natural habitats (National parks, Sanctuaries); Ex-situ is off-site conservation in artificial facilities (Botanical gardens, Seed banks).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What are Sacred Groves? Give one example in India.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Forest patches conserved by tribal communities due to religious beliefs (e.g., Khasi and Jaintia Hills in Meghalaya).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: What is Cryopreservation in ex-situ conservation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Preservation of viable gametes, embryos, and tissues at -196&deg;C in liquid nitrogen.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is a Ramsar Site?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A wetland designated to be of international importance under the Ramsar Convention on Wetlands.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Which international summit adopted the Convention on Biological Diversity (CBD) in 1992?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Earth Summit held in Rio de Janeiro (1992).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: What is the Red Data Book?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The official catalogue of endangered, threatened, and extinct species published by the IUCN.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 131, 143, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Interactions, Pyramids, Decomposition &amp; In-situ/Ex-situ Strategies</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain Birth rate, Death rate, and Sex ratio with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Birth Rate (Natality):</b> Per capita births in a population per unit time (e.g., if 8 new plants are born in a pond of 20, birth rate is 8/20 = 0.4 per lotus/year). <b style="color: #00E5FF;">Death Rate:</b> Per capita deaths (e.g., 4 fruit flies die in a laboratory population of 40 in a week, death rate = 4/40 = 0.1/fly/week). <b style="color: #00E5FF;">Sex Ratio:</b> Percentage of males and females in a population.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Describe the three types of Age Pyramids with diagrams/characteristics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Expanding Pyramid (Triangular):</b> Large proportion of pre-reproductive individuals; population is growing rapidly. 2. <b style="color: #00E5FF;">Stable Pyramid (Bell-shaped):</b> Pre-reproductive and reproductive age groups are nearly equal; population size remains constant. 3. <b style="color: #00E5FF;">Declining Pyramid (Urn-shaped):</b> Pre-reproductive population is smaller than reproductive group; population is shrinking.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Differentiate between Exponential and Logistic Population Growth models.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Exponential Growth (dN/dt = rN):</b> Occurs under unlimited resources, yielding a J-shaped curve without carrying capacity. <b style="color: #00E5FF;">Logistic Growth (dN/dt = rN[(K-N)/K]):</b> Occurs under limiting resources, yielding a realistic S-shaped (sigmoid) curve reaching asymptote at carrying capacity (K).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain Mutualism in Lichens, Mycorrhizae, and the Fig-Wasp relationship.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Lichens:</b> Alga (phycobiont) prepares food; fungus (mycobiont) absorbs water/minerals and provides shelter. 2. <b style="color: #00E5FF;">Mycorrhizae:</b> Fungus absorbs phosphorus from soil; plant supplies carbohydrates. 3. <b style="color: #00E5FF;">Fig and Wasp:</b> Female wasp oviposits inside fig inflorescence and pollinates fig flowers; developing wasp larvae feed on a fraction of fig seeds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain Gause's Competitive Exclusion Principle and Resource Partitioning.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Competitive Exclusion:</b> Gause stated that two species competing for identical limiting resources cannot coexist; the inferior competitor is eliminated. <b style="color: #00E5FF;">Resource Partitioning (MacArthur):</b> Coexistence achieved by dividing resources through different feeding times or foraging zones (e.g., 5 species of warblers on a spruce tree).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Describe the ecological importance of Predation in community stability.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Acts as conduit for energy transfer across trophic levels. 2. Prevents prey population explosion (e.g., <i>Cactoblastis</i> moth controlling invasive prickly pear cactus). 3. Maintains species diversity by preventing dominant prey species from monopolizing resources (e.g., <i>Pisaster</i> starfish keystone predator).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Explain Brood Parasitism and Parasitic Adaptations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Brood Parasitism:</b> Cuckoo lays eggs in Crow's nest; parasite eggs mimic host eggs in color and size to escape detection. <b style="color: #00E5FF;">Parasitic Adaptations:</b> Loss of unnecessary sense organs, development of adhesive suckers/hooks, loss of digestive system, and immense reproductive capacity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Differentiate between Commensalism and Amensalism with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Commensalism (+/0):</b> One species benefits, the other is unaffected (e.g., Epiphytic orchid on mango tree, Cattle egret and grazing cattle). <b style="color: #00E5FF;">Amensalism (-/0):</b> One species is inhibited/killed, the other is unaffected (e.g., <i>Penicillium</i> producing penicillin inhibiting bacterial growth).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain Stratification in a terrestrial forest ecosystem.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Stratification is the vertical layering of vegetation: (1) <b style="color: #00E5FF;">Top Canopy Layer:</b> Tall dominant emergent forest trees receiving maximum sunlight. (2) <b style="color: #00E5FF;">Understory / Shrub Layer:</b> Intermediate woody shrubs. (3) <b style="color: #00E5FF;">Ground Layer:</b> Shade-tolerant herbs, ferns, and grasses.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain why Net Primary Productivity (NPP) is always less than Gross Primary Productivity (GPP).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      GPP is the total chemical energy synthesized during photosynthesis. Plants utilize a significant fraction of this energy for their own cellular respiration, growth, and metabolic maintenance (R). Therefore, NPP = GPP - R, meaning NPP is the leftover biomass accessible to consumers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Describe the five steps of Decomposition of organic detritus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Fragmentation:</b> Detritivores break detritus into smaller bits. 2. <b style="color: #00E5FF;">Leaching:</b> Water-soluble nutrients wash down into soil. 3. <b style="color: #00E5FF;">Catabolism:</b> Fungal/bacterial enzymes break complex compounds. 4. <b style="color: #00E5FF;">Humification:</b> Formation of dark colloidal humus. 5. <b style="color: #00E5FF;">Mineralization:</b> Release of inorganic ions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain the factors influencing the rate of decomposition.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Chemical Composition:</b> Detritus rich in lignin and chitin decomposes very slowly; detritus rich in nitrogen and water-soluble sugars decomposes rapidly. 2. <b style="color: #00E5FF;">Climatic Factors:</b> Warm temperature (>25&deg;C) and moist environment accelerate decomposition; low temperature and anaerobiosis inhibit it.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Differentiate between Grazing Food Chain (GFC) and Detritus Food Chain (DFC).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">GFC:</b> Starts from living green photosynthetic plants &rarr; Herbivores &rarr; Carnivores; depends directly on solar radiation. Major energy pathway in aquatic ecosystems. <b style="color: #00E5FF;">DFC:</b> Starts from dead organic matter (detritus) &rarr; Decomposers (bacteria/fungi) &rarr; Detritivores; major energy pathway in terrestrial ecosystems.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Explain why the Pyramid of Biomass in oceans is inverted.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In ocean ecosystems, phytoplankton have a very short lifespan and high turnover rate, meaning their standing crop biomass at any single moment is small. However, they reproduce rapidly to support a much larger standing biomass of long-lived zooplankton and predatory fish, making the biomass pyramid inverted.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: State two limitations of Ecological Pyramids.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Assumes a simple linear food chain and does not accommodate complex real-world food webs. 2. Excludes saprophytes and decomposers entirely, even though they play a vital role in ecosystem functioning.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Describe Genetic Diversity, Species Diversity, and Ecological Diversity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Genetic Diversity:</b> Gene variations within a single species (e.g., 50,000 rice varieties in India). <b style="color: #00E5FF;">Species Diversity:</b> Richness of species in a habitat (Western Ghats have more amphibian species than Eastern Ghats). <b style="color: #00E5FF;">Ecological Diversity:</b> Ecosystem richness (India has deserts, rainforests, mangroves, coral reefs).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Explain the Latitudinal Gradient in Biodiversity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Species diversity is highest in the tropics (23.5&deg;N to 23.5&deg;S) and declines towards the poles. Reasons: (1) Tropics remained undisturbed by glaciations for millions of years. (2) Tropical environments are less seasonal, more constant and predictable. (3) Higher solar energy availability promotes greater productivity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain Alexander von Humboldt's Species-Area Relationship.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Humboldt observed that species richness (S) increases with increasing area (A) as a rectangular hyperbola (S = C A<sup>z</sup>). On a logarithmic scale, it is a straight line: log S = log C + z log A. The slope z ranges from 0.1 to 0.2 for small local regions, and 0.6 to 1.2 across entire continents.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain David Tilman's findings on Ecosystem Stability and Diversity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      David Tilman's outdoor ecological plots showed that plots with higher species diversity exhibited significantly less year-to-year variation in total biomass and had higher overall productivity, proving that species diversity is essential for ecosystem stability.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain Paul Ehrlich's Rivet Popper Hypothesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ehrlich compared an ecosystem to an airplane and species to rivets. Popping a few rivets (species extinctions) may not immediately crash the plane, but removing critical rivets on the wings (keystone species) leads to catastrophic structural failure and ecosystem collapse.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain Habitat Loss and Fragmentation as a major cause of biodiversity loss.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Destruction of forests for agriculture, urbanization, and industry breaks continuous habitats into small isolated fragments. Migratory animals and large mammals requiring large home ranges cannot survive, leading to population crashes (e.g., Amazon rainforest clearance for cattle).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: How do Alien Species Invasions lead to species extinction? Give two examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Exotic species introduced into new habitats become invasive because they lack natural predators, outcompeting native species: (1) Nile perch introduced into Lake Victoria wiped out >200 species of native cichlid fish. (2) African catfish <i>Clarias gariepinus</i> threatens indigenous river catfishes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: What is Co-extinction? Explain with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When a species becomes extinct, the obligate plant or animal species associated with it also becomes extinct. For example, when a host fish becomes extinct, all its unique parasitic species go extinct; extinction of a specific pollinator causes extinction of its mutualistic plant.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: What criteria define a Biodiversity Hotspot? Name the hotspots covering India.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Criteria: (1) Extremely high species richness. (2) High degree of endemism (species found nowhere else). (3) Accelerated habitat destruction (>70% habitat lost). Hotspots covering India: Western Ghats-Sri Lanka, Indo-Burma, and Himalaya.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Differentiate between National Parks and Wildlife Sanctuaries.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">National Park (106 in India):</b> Strictly reserved for wildlife conservation; human activities (grazing, timber harvesting, private land ownership) are completely prohibited. <b style="color: #00E5FF;">Wildlife Sanctuary (573 in India):</b> Protection of wild fauna; limited human activities (grazing, collection of minor forest produce) are permitted without harming animals.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Describe the zoning of a Biosphere Reserve (MAB programme).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A biosphere reserve consists of three concentric zones: (1) <b style="color: #00E5FF;">Core Zone:</b> Strictly protected natural area with zero human disturbance. (2) <b style="color: #00E5FF;">Buffer Zone:</b> Surrounds core; limited research, education, and ecotourism allowed. (3) <b style="color: #00E5FF;">Transition Zone:</b> Outer area where sustainable human settlements, agriculture, and forestry occur.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: What are Sacred Groves and what is their conservation significance?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sacred groves are pristine forest patches conserved by tribal and rural communities due to religious reverence. They act as last natural refuges for rare, threatened, and endemic plant and animal species (e.g., Khasi and Jaintia Hills in Meghalaya).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain Ex-situ conservation methods: Cryopreservation and Seed Banks.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Cryopreservation:</b> Storage of gametes, shoot tips, and embryos in liquid nitrogen at -196&deg;C indefinitely in a viable state. <b style="color: #00E5FF;">Seed Banks:</b> Dehydrated seeds stored in cold vaults under controlled conditions for long-term genetic preservation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: What are the IUCN Red List categories?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      IUCN categorizes species based on extinction risk: Extinct (EX), Extinct in the Wild (EW), Critically Endangered (CR), Endangered (EN), Vulnerable (VU), Near Threatened (NT), and Least Concern (LC).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: What were the commitments made at the Earth Summit (1992) and World Summit (2002)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Earth Summit (Rio, 1992):</b> Adopted the Convention on Biological Diversity (CBD) for conservation and sustainable use of biodiversity. <b style="color: #00E5FF;">World Summit (Johannesburg, 2002):</b> 190 countries pledged to achieve significant reduction in biodiversity loss rate by 2010.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain the concept of Keystone Species with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A keystone species has a disproportionately large impact on community structure relative to its abundance. Example: <i>Pisaster</i> starfish in rocky intertidal communities controls mussel populations, maintaining invertebrate species diversity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Why are tropical regions richer in biodiversity than temperate regions?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Undisturbed evolutionary history without Pleistocene glaciations. 2. Warm, constant, predictable climate favoring niche specialization. 3. Greater solar radiation driving higher primary productivity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: What is the significance of the z-value in the Species-Area Relationship?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The z-value measures the slope of the regression line. For local areas, z = 0.1-0.2 regardless of taxon. For large continents, the slope is much steeper (z = 0.6-1.2), indicating rapid addition of new species across expansive geographical regions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain the ecological significance of Decomposers in nutrient cycling.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Decomposers (bacteria and fungi) secrete extracellular enzymes to mineralize dead organic detritus, releasing essential inorganic elements (C, N, P, K) back into soil and atmosphere, closing the biogeochemical nutrient loop.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Describe the chemical defenses evolved by plants against herbivores.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Plants synthesize secondary metabolites that deter or poison herbivores: (1) Nicotine, caffeine, quinine, strychnine, opium. (2) Cardiac glycosides produced by <i>Calotropis</i> (toxic to grazing cattle). (3) Spines and thorns in <i>Acacia</i> and <i>Cactus</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: What is Resource Partitioning and how does it promote coexistence?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Competing species evolve behavioral or physiological differences in resource utilization (e.g., different feeding times or foraging niches), minimizing niche overlap and allowing long-term ecological coexistence instead of competitive exclusion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain the difference between Ectoparasites and Endoparasites with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">Ectoparasites:</b> Live on the external surface of the host (e.g., Head lice on humans, Ticks on dogs, Marine copepods on fish). <b style="color: #00E5FF;">Endoparasites:</b> Live inside host organs/tissues (e.g., <i>Plasmodium</i> in RBCs, Liver fluke in bile ducts).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: How did introduction of goats lead to the extinction of the Abingdon tortoise?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Goats introduced into the Galapagos Islands had much greater browsing efficiency than the slow-moving Abingdon tortoise (<i>Geochelone nigra abingdoni</i>), depleting vegetation and causing tortoise starvation and extinction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: What is the ecological role of <i>Cactoblastis cactorum</i> in Australia?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Prickly pear cactus (<i>Opuntia</i>) invaded millions of hectares of rangeland in Australia in the 1920s. The cactus-feeding moth <i>Cactoblastis cactorum</i> was introduced from its native habitat, successfully controlling the weed via biological control.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Why are saprophytes not given a specific trophic level in ecological pyramids?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Saprophytes feed on dead organic matter across all trophic levels simultaneously, so they cannot be accommodated in simple hierarchical trophic tiers.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 131, 143, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master Ecological Models, Global Biodiversity &amp; Conservation Blueprints</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Describe Population Attributes in detail: Natality, Mortality, Sex Ratio, and Age Pyramids with their ecological significance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Natality &amp; Mortality:</b> Natality is the per capita birth rate; Mortality is the per capita death rate in a population per unit time.<br/><br/><b style="color: #00E5FF;">2. Sex Ratio:</b> Proportion of males to females in a population, critical for reproductive demographics.<br/><br/><b style="color: #00E5FF;">3. Age Pyramids:</b> Graphical models plotting percentage of individuals across pre-reproductive, reproductive, and post-reproductive tiers:<br/>&bull; <i>Expanding (Triangular):</i> Broad base; rapid growth.<br/>&bull; <i>Stable (Bell-shaped):</i> Constant population; pre-reproductive and reproductive groups are balanced.<br/>&bull; <i>Declining (Urn-shaped):</i> Narrow base; shrinking population.<br/><br/><b style="color: #00E5FF;">4. Ecological Value:</b> Predicts future population trends, resource demands, and management strategies for endangered or invasive species.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Explain Exponential and Logistic Population Growth models with mathematical equations, graphs, and carrying capacity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Exponential Growth (dN/dt = rN):</b> Unlimited resources result in geometric growth without resistance. Integral equation: N_t = N_0 e<sup>rt</sup>. Forms a J-shaped curve.<br/><br/><b style="color: #00E5FF;">2. Verhulst-Pearl Logistic Growth:</b> Resources are finite. Growth exhibits Lag phase &rarr; Acceleration phase &rarr; Deceleration phase &rarr; Asymptote (K).<br/>(dN / dt) = rN[(K - N) / K]<br/>Where N = Population density, r = Intrinsic rate of natural increase, K = Carrying capacity.<br/><br/><b style="color: #00E5FF;">3. Significance:</b> Logistic growth is the realistic ecological model governing natural populations under environmental resistance.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Discuss all types of Interspecific Population Interactions with biological examples: Mutualism, Competition, Predation, Parasitism, Commensalism, Amensalism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Mutualism (+/+):</b> Lichens, Mycorrhizae, Fig-Wasp, <i>Ophrys</i> pseudocopulation.<br/><b style="color: #00E5FF;">2. Competition (-/-):</b> Gause's exclusion principle; MacArthur's resource partitioning among warbler birds.<br/><b style="color: #00E5FF;">3. Predation (+/-):</b> <i>Pisaster</i> keystone predator; <i>Cactoblastis</i> controlling <i>Opuntia</i>.<br/><b style="color: #00E5FF;">4. Parasitism (+/-):</b> Ectoparasites (lice, ticks, <i>Cuscuta</i>); Endoparasites (liver fluke); Brood parasitism in Cuckoo.<br/><b style="color: #00E5FF;">5. Commensalism (+/0):</b> Epiphytic orchid on mango tree; Cattle egret and livestock.<br/><b style="color: #00E5FF;">6. Amensalism (-/0):</b> <i>Penicillium</i> inhibiting bacteria; Black walnut juglone allelopathy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Explain Ecosystem Productivity: GPP, NPP, Secondary Productivity, and factors controlling primary productivity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. GPP &amp; NPP:</b> Gross Primary Productivity is total solar energy fixed photosynthetically. Net Primary Productivity is biomass left for heterotrophs: NPP = GPP - R.<br/><br/><b style="color: #00E5FF;">2. Global Biosphere Productivity:</b> Biosphere NPP = 170 billion tons/yr. Terrestrial ecosystems produce 115 billion tons (68%); Oceans produce 55 billion tons (32%) due to light and nutrient limitation.<br/><br/><b style="color: #00E5FF;">3. Secondary Productivity:</b> Rate of new organic biomass synthesis by heterotrophs (consumers).<br/><br/><b style="color: #00E5FF;">4. Controlling Factors:</b> Sunlight intensity, temperature, moisture availability, soil nutrients, and photosynthetic capacity of native plants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Describe the process of Decomposition of organic detritus in detail with all 5 steps and controlling factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Fragmentation:</b> Detritivores (earthworms) break detritus into small pieces.<br/><b style="color: #00E5FF;">2. Leaching:</b> Water-soluble inorganic nutrients sink into soil horizons.<br/><b style="color: #00E5FF;">3. Catabolism:</b> Fungal and bacterial enzymes degrade detritus into simpler inorganic substances.<br/><b style="color: #00E5FF;">4. Humification:</b> Formation of dark, amorphous, colloidal humus that acts as a nutrient reservoir.<br/><b style="color: #00E5FF;">5. Mineralization:</b> Humus is slowly broken down by microbes, releasing CO_2, H_2O, and mineral ions.<br/><br/><b style="color: #00E5FF;">6. Influencing Factors:</b> Temperature (>25&deg;C speeds up), moisture, and chemical composition (lignin/chitin slows down; nitrogen/sugars accelerates).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Explain Energy Flow in an ecosystem: Lindeman's 10% Law, GFC, DFC, and Ecological Pyramids.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Solar Influx:</b> <50% of sunlight is PAR; autotrophs capture only 2-10% of PAR.<br/><br/><b style="color: #00E5FF;">2. Lindeman's 10% Law (1942):</b> Only 10% of energy is transferred from one trophic level to the next; 90% is lost as metabolic heat.<br/><br/><b style="color: #00E5FF;">3. Food Chains:</b> Grazing Food Chain (GFC, plant &rarr; herbivore &rarr; carnivore) vs Detritus Food Chain (DFC, dead detritus &rarr; decomposers).<br/><br/><b style="color: #00E5FF;">4. Ecological Pyramids:</b><br/>&bull; Pyramid of Numbers: Upright in grassland; inverted in single tree parasite chain.<br/>&bull; Pyramid of Biomass: Upright in forest; inverted in sea.<br/>&bull; Pyramid of Energy: ALWAYS upright due to thermodynamics.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Describe the levels of Biodiversity and Robert May's global species diversity estimates.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Levels of Biodiversity (Edward Wilson):</b><br/>&bull; <i>Genetic Diversity:</i> Allelic variations within species (e.g., <i>Rauwolfia</i> reserpine potency, 50,000 rice varieties).<br/>&bull; <i>Species Diversity:</i> Species richness in a region (Western Ghats amphibians).<br/>&bull; <i>Ecological Diversity:</i> Ecosystem varieties (India's deserts, rainforests, mangroves).<br/><br/><b style="color: #00E5FF;">2. Global Metrics (Robert May):</b> Estimated total global species = 7 million. Recorded species: >70% animals, >22% plants/fungi, insects constitute >70% of all animals. India has 2.4% land area but 8.1% global biodiversity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Explain the Patterns of Biodiversity: Latitudinal Gradients and Alexander von Humboldt's Species-Area Relationship.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Latitudinal Gradient:</b> Species diversity decreases from equator to poles. Tropics are richest because: (a) Millions of years of undisturbed evolution without glaciations. (b) Constant, predictable climate. (c) Abundant solar energy promoting high productivity.<br/><br/><b style="color: #00E5FF;">2. Species-Area Relationship:</b> Humboldt showed species richness increases with area as a rectangular hyperbola (S = C A<sup>z</sup>), or linearly on log scale: log S = log C + z log A. Slope z = 0.1-0.2 for small regions, z = 0.6-1.2 for entire continents.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Discuss the causes of Biodiversity Loss with detailed analysis of the 'Evil Quartet'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Habitat Loss &amp; Fragmentation (Main Cause):</b> Amazon rainforest cleared for soybean and cattle; fragmented habitats isolate migratory populations.<br/><br/><b style="color: #00E5FF;">2. Over-Exploitation:</b> Excessive human exploitation led to extinction of Steller's sea cow and Passenger pigeon.<br/><br/><b style="color: #00E5FF;">3. Alien Species Invasions:</b> Nile perch in Lake Victoria (wiped out 200 cichlid fish); Water hyacinth (<i>Eichhornia</i>); African catfish (<i>Clarias gariepinus</i>).<br/><br/><b style="color: #00E5FF;">4. Co-extinctions:</b> Extinction of host fish wipes out dependent parasites; loss of plant-pollinator mutualisms.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Compare In-situ and Ex-situ Biodiversity Conservation strategies with Indian and global examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. In-situ Conservation (On-site):</b><br/>&bull; <i>Biodiversity Hotspots:</i> 36 global hotspots (Western Ghats, Himalaya, Indo-Burma in India).<br/>&bull; <i>Biosphere Reserves:</i> 18 in India (Core, Buffer, Transition zones under UNESCO MAB).<br/>&bull; <i>National Parks &amp; Sanctuaries:</i> 106 National Parks and 573 Sanctuaries.<br/>&bull; <i>Sacred Groves:</i> Khasi and Jaintia Hills in Meghalaya.<br/><br/><b style="color: #00E5FF;">2. Ex-situ Conservation (Off-site):</b><br/>&bull; Zoological parks, Botanical gardens, Wildlife safari parks.<br/>&bull; Cryopreservation of gametes at -196&deg;C in liquid nitrogen.<br/>&bull; Seed banks and gene banks for long-term genetic preservation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain the Rivet Popper Hypothesis and David Tilman's experiments on Ecosystem Stability.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Tilman's Experiments:</b> Plots with greater species richness showed less annual variation in total biomass and had higher productivity, proving diversity creates ecological stability.<br/><br/><b style="color: #00E5FF;">2. Rivet Popper Analogy (Paul Ehrlich):</b> Airplane = Ecosystem; Rivets = Species; Flight safety = Ecosystem functioning. Popping rivets on seats causes minor damage, but popping rivets on wings (keystone species) leads to catastrophic crash and ecosystem collapse.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Describe the structure, functioning, and energy flow of a typical Pond Ecosystem.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Abiotic Components:</b> Water, dissolved oxygen, light penetration, soil minerals.<br/><b style="color: #00E5FF;">2. Biotic Components:</b><br/>&bull; <i>Producers:</i> Phytoplankton, submerged plants (<i>Hydrilla</i>), floating plants (<i>Pistia</i>).<br/>&bull; <i>Primary Consumers:</i> Zooplankton, tadpoles, small herbivorous mollusks.<br/>&bull; <i>Secondary Consumers:</i> Small fish, aquatic beetles.<br/>&bull; <i>Tertiary Consumers:</i> Large predatory fish, water birds.<br/>&bull; <i>Decomposers:</i> Bottom-dwelling bacteria and fungi.<br/><b style="color: #00E5FF;">3. Energy Flow:</b> Unidirectional solar capture &rarr; autotrophs &rarr; consumers &rarr; decomposers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Construct a comprehensive comparative matrix between National Parks, Wildlife Sanctuaries, and Biosphere Reserves.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. National Parks (106):</b> Highest protection; boundary fixed by legislation; no human activity (grazing, timber harvesting) permitted; focus on entire ecosystem.<br/><b style="color: #00E5FF;">2. Wildlife Sanctuaries (573):</b> Moderate protection; boundaries not strictly demarcated; limited human rights allowed without harming fauna; focus on single species or animal group.<br/><b style="color: #00E5FF;">3. Biosphere Reserves (18):</b> Multi-purpose protected areas under UNESCO MAB; divided into Core (no human access), Buffer (research/education), and Transition zones (sustainable human settlement and farming).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the phenomenon of Biological Magnification (Biomagnification) with the classic DDT in aquatic food chains.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Definition:</b> Progressive increase in concentration of non-biodegradable toxic substances at successive trophic levels.<br/><br/><b style="color: #00E5FF;">2. Mechanism (DDT):</b> DDT is fat-soluble and not metabolized or excreted.<br/>&bull; Water: 0.000003 ppm (0.003 ppb)<br/>&bull; Phytoplankton &rarr; Zooplankton: 0.04 ppm<br/>&bull; Small Fish: 0.5 ppm<br/>&bull; Large Fish: 2 ppm<br/>&bull; Fish-eating Birds (Top Predator): 25 ppm (>10<sup>7</sup>-fold concentration).<br/><br/><b style="color: #00E5FF;">3. Impact:</b> High DDT inhibits calcium deposition in birds, causing premature eggshell thinning and population decline.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain Eutrophication: Natural vs Cultural (Accelerated) Eutrophication and its ecological consequences.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Natural Eutrophication:</b> Slow, natural nutrient enrichment of a lake over centuries, converting a young oligotrophic lake into a shallow, fertile marsh.<br/><br/><b style="color: #00E5FF;">2. Cultural/Accelerated Eutrophication:</b> Rapid nutrient loading (phosphates and nitrates) from municipal sewage and agricultural runoff.<br/><br/><b style="color: #00E5FF;">3. Consequences:</b> Massive algal blooms (scum) &rarr; block sunlight &rarr; oxygen depletion (hypoxia) &rarr; death of fish &rarr; foul odor and lake death.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Discuss Global Warming, Greenhouse Effect, and International Treaties for Climate Mitigation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Greenhouse Gases:</b> CO_2 (60%), CH_4 (20%), CFCs (14%), N_2O (6%) trap infrared radiation, raising Earth's average temperature from -18&deg;C to +15&deg;C.<br/><br/><b style="color: #00E5FF;">2. Consequences:</b> Melting polar ice caps, sea level rise, extreme weather events (El Niño effect).<br/><br/><b style="color: #00E5FF;">3. International Treaties:</b> Kyoto Protocol (1997) and Paris Agreement (2015) for cutting greenhouse gas emissions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain Ozone Depletion in the Stratosphere, the Ozone Hole over Antarctica, and the Montreal Protocol.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Good vs Bad Ozone:</b> Bad ozone in troposphere causes smog; Good ozone in stratosphere shields Earth from lethal UV-B radiation.<br/><br/><b style="color: #00E5FF;">2. Mechanism of Depletion:</b> Chlorofluorocarbons (CFCs) released into stratosphere are split by UV rays, releasing Chlorine free radicals that catalytically degrade ozone (O_3  &rarr;  O_2).<br/><br/><b style="color: #00E5FF;">3. Ozone Hole:</b> Severe seasonal depletion discovered over Antarctica.<br/><br/><b style="color: #00E5FF;">4. Montreal Protocol (1987):</b> Landmark international treaty banning production of CFCs and ozone-depleting substances.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Describe Solid Waste Management and the concept of Ecological Sanitation (EcoSan toilets).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Solid Waste Categories:</b> Biodegradable (composting), Recyclable (plastics, glass), Non-biodegradable (landfills).<br/><br/><b style="color: #00E5FF;">2. Electronic Waste (e-waste):</b> Recycled for precious metals (gold, copper) under strict safety protocols.<br/><br/><b style="color: #00E5FF;">3. EcoSan Toilets:</b> Sustainable closed-loop dry composting sanitation system that uses zero water and converts human excreta into natural organic fertilizer (utilized in Kerala and Sri Lanka).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the Joint Forest Management (JFM) concept and Chipko Movement in India.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Chipko Movement (1974):</b> Garhwal Himalayan villagers (led by women) hugged forest trees to prevent commercial logging by contractors.<br/><br/><b style="color: #00E5FF;">2. Joint Forest Management (JFM, 1980s):</b> Government of India initiative partnering with local rural communities to protect and manage degraded forests in return for non-timber forest produce (fruits, gums, medicinal herbs).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct a Master Flowchart integrating Population Dynamics, Ecosystem Functioning, and Biodiversity Conservation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Populations:</b> Natality, Mortality, Age Pyramids &rarr; Logistic Growth (dN/dt = rN[(K-N)/K]) &rarr; Interactions (Mutualism, Competition, Predation, Parasitism).<br/><b style="color: #00E5FF;">2. Ecosystems:</b> GPP/NPP &rarr; Decomposition (Flocs, Humus) &rarr; 10% Energy flow &rarr; Upright/Inverted Pyramids.<br/><b style="color: #00E5FF;">3. Biodiversity:</b> Latitudinal gradients, Species-Area curve &rarr; Evil Quartet threats &rarr; In-situ (Hotspots, National Parks) &amp; Ex-situ (Cryopreservation, Seed banks) conservation.
    </div>
  </div>

</div>
`;

export const c12Bot4Mcqs = [
  {
    "id": "c12-bot-4-mcq-1",
    "question": "The differential equation representing the Verhulst-Pearl Logistic Population Growth model is:",
    "options": [
      "A):   dN/dt = rN",
      "B):   dN/dt = rN((K-N)/K)",
      "C):   N_t = N_0 e<sup>rt</sup>",
      "D):   dN/dt = r/K"
    ],
    "correctAnswer": "b",
    "explanation": "Verhulst-Pearl logistic growth accounts for carrying capacity (K) with environmental resistance ((K-N)/K), producing an S-shaped sigmoid curve."
  },
  {
    "id": "c12-bot-4-mcq-2",
    "question": "Gause's Competitive Exclusion Principle states that:",
    "options": [
      "A):   Larger organisms always outcompete smaller organisms",
      "B):   Two species competing for the same limiting resources cannot coexist indefinitely",
      "C):   Species always divide resources peacefully",
      "D):   Predation prevents competition among prey"
    ],
    "correctAnswer": "b",
    "explanation": "Gause's principle states that two species with identical niche requirements for a limiting resource cannot coexist; the competitively inferior species is excluded."
  },
  {
    "id": "c12-bot-4-mcq-3",
    "question": "The mutualistic interaction between the Mediterranean orchid <i>Ophrys</i> and male bees involving 'pseudocopulation' is an example of:",
    "options": [
      "A):   Sexual Deceit",
      "B):   Commensalism",
      "C):   Brood Parasitism",
      "D):   Amensalism"
    ],
    "correctAnswer": "a",
    "explanation": "<i>Ophrys</i> employs sexual deceit where its petal mimics the female bee in appearance and scent, attracting male bees that effect pollination during pseudocopulation."
  },
  {
    "id": "c12-bot-4-mcq-4",
    "question": "An interaction where one species benefits while the other is unaffected (+/0) is termed:",
    "options": [
      "A):   Mutualism",
      "B):   Parasitism",
      "C):   Commensalism",
      "D):   Amensalism"
    ],
    "correctAnswer": "c",
    "explanation": "Commensalism is a (+/0) interaction (e.g., an orchid growing as an epiphyte on a mango tree branch)."
  },
  {
    "id": "c12-bot-4-mcq-5",
    "question": "The relationship between Gross Primary Productivity (GPP) and Net Primary Productivity (NPP) is expressed as:",
    "options": [
      "A):   NPP = GPP + R",
      "B):   NPP = GPP - R",
      "C):   GPP = NPP - R",
      "D):   NPP = GPP / R"
    ],
    "correctAnswer": "b",
    "explanation": "Net Primary Productivity is the organic biomass remaining after autotrophic respiratory losses (R), so NPP = GPP - R."
  },
  {
    "id": "c12-bot-4-mcq-6",
    "question": "What is the total annual Net Primary Productivity of the entire biosphere and the share contributed by oceans?",
    "options": [
      "A):   170 billion tons total, 55 billion tons by oceans",
      "B):   100 billion tons total, 70 billion tons by oceans",
      "C):   55 billion tons total, 170 billion tons by oceans",
      "D):   250 billion tons total, 100 billion tons by oceans"
    ],
    "correctAnswer": "a",
    "explanation": "Total biosphere NPP is ~170 billion tons (dry weight), of which oceans contribute 55 billion tons despite covering 70% of Earth's surface."
  },
  {
    "id": "c12-bot-4-mcq-7",
    "question": "During decomposition, the process by which water-soluble inorganic nutrients percolate into the soil horizon is called:",
    "options": [
      "A):   Fragmentation",
      "B):   Catabolism",
      "C):   Leaching",
      "D):   Humification"
    ],
    "correctAnswer": "c",
    "explanation": "Leaching is the downward movement of water-soluble inorganic nutrients into the soil horizon where they precipitate as unavailable salts."
  },
  {
    "id": "c12-bot-4-mcq-8",
    "question": "In an aquatic (oceanic) ecosystem, the Pyramid of Biomass is characteristically:",
    "options": [
      "A):   Always Upright",
      "B):   Inverted",
      "C):   Spindle-shaped",
      "D):   Bell-shaped"
    ],
    "correctAnswer": "b",
    "explanation": "The pyramid of biomass in oceans is inverted because the standing crop biomass of microscopic phytoplankton is small compared to large predatory fishes."
  },
  {
    "id": "c12-bot-4-mcq-9",
    "question": "Which ecological pyramid is ALWAYS strictly upright in all ecosystems without exception?",
    "options": [
      "A):   Pyramid of Energy",
      "B):   Pyramid of Biomass",
      "C):   Pyramid of Numbers",
      "D):   Pyramid of Nutrients"
    ],
    "correctAnswer": "a",
    "explanation": "The pyramid of energy is always upright because energy is lost as metabolic heat at each trophic transfer in accordance with the Second Law of Thermodynamics."
  },
  {
    "id": "c12-bot-4-mcq-10",
    "question": "According to Robert May's global estimate, what is the total number of species currently existing on Earth?",
    "options": [
      "A):   1.7 million",
      "B):   20 million",
      "C):   7 million",
      "D):   50 million"
    ],
    "correctAnswer": "c",
    "explanation": "Robert May estimated the total global species richness to be approximately 7 million species."
  },
  {
    "id": "c12-bot-4-mcq-11",
    "question": "India possesses what percentage of the world's land area and harbors what percentage of global species diversity?",
    "options": [
      "A):   Land = 2.4%, Species = 8.1%",
      "B):   Land = 8.1%, Species = 2.4%",
      "C):   Land = 5.0%, Species = 12%",
      "D):   Land = 1.0%, Species = 10%"
    ],
    "correctAnswer": "a",
    "explanation": "India occupies 2.4% of the world's land area but contributes an impressive 8.1% of global species diversity, ranking among the 12 mega-diversity nations."
  },
  {
    "id": "c12-bot-4-mcq-12",
    "question": "In Alexander von Humboldt's Species-Area Relationship equation (\log S = \log C + z \log A), what is the value of z for entire continents?",
    "options": [
      "A):   0.1 - 0.2",
      "B):   0.6 - 1.2",
      "C):   1.5 - 2.0",
      "D):   0.01 - 0.05"
    ],
    "correctAnswer": "b",
    "explanation": "For very large areas like entire continents, the regression slope z is significantly steeper, ranging between 0.6 and 1.2."
  },
  {
    "id": "c12-bot-4-mcq-13",
    "question": "Who proposed the 'Rivet Popper Hypothesis' comparing ecosystems to airplanes and species to rivets?",
    "options": [
      "A):   Edward Wilson",
      "B):   Paul Ehrlich",
      "C):   David Tilman",
      "D):   Robert MacArthur"
    ],
    "correctAnswer": "b",
    "explanation": "Stanford ecologist Paul Ehrlich proposed the Rivet Popper Hypothesis to illustrate how loss of key species threatens overall ecosystem integrity."
  },
  {
    "id": "c12-bot-4-mcq-14",
    "question": "Which of the following is considered the primary, most significant cause of global biodiversity loss?",
    "options": [
      "A):   Alien species invasions",
      "B):   Co-extinction",
      "C):   Habitat loss and fragmentation",
      "D):   Over-exploitation"
    ],
    "correctAnswer": "c",
    "explanation": "Habitat loss and fragmentation (e.g., clearance of Amazon rainforest for soybean and cattle) is the single most destructive driver of species extinction."
  },
  {
    "id": "c12-bot-4-mcq-15",
    "question": "The introduction of the Nile Perch into Lake Victoria (East Africa) led to the extinction of over 200 species of:",
    "options": [
      "A):   Cichlid fish",
      "B):   Catfish",
      "C):   Amphibians",
      "D):   Water lilies"
    ],
    "correctAnswer": "a",
    "explanation": "The predatory Nile perch caused the mass extinction of more than 200 endemic cichlid fish species in Lake Victoria."
  },
  {
    "id": "c12-bot-4-mcq-16",
    "question": "Which of the following is an In-situ (on-site) method of biodiversity conservation?",
    "options": [
      "A):   Zoological Park",
      "B):   Botanical Garden",
      "C):   National Park",
      "D):   Cryopreservation bank"
    ],
    "correctAnswer": "c",
    "explanation": "National Parks, Sanctuaries, and Biosphere Reserves conserve species within their natural ecosystems (In-situ)."
  },
  {
    "id": "c12-bot-4-mcq-17",
    "question": "How many Biodiversity Hotspots exist globally and how many cover regions of India?",
    "options": [
      "A):   36 globally, 3 in India",
      "B):   25 globally, 2 in India",
      "C):   50 globally, 10 in India",
      "D):   18 globally, 4 in India"
    ],
    "correctAnswer": "a",
    "explanation": "There are 36 global biodiversity hotspots, of which 3 cover India (Western Ghats-Sri Lanka, Indo-Burma, Himalaya)."
  },
  {
    "id": "c12-bot-4-mcq-18",
    "question": "The Khasi and Jaintia Hills in Meghalaya are famous examples of which In-situ conservation practice?",
    "options": [
      "A):   Biosphere Reserve",
      "B):   Sacred Groves",
      "C):   Wildlife Safari Park",
      "D):   Botanical Garden"
    ],
    "correctAnswer": "b",
    "explanation": "Sacred groves in Meghalaya are undisturbed forest patches protected by indigenous tribal communities due to religious beliefs."
  },
  {
    "id": "c12-bot-4-mcq-19",
    "question": "Cryopreservation preserves living tissues, gametes, and embryos at what temperature in liquid nitrogen?",
    "options": [
      "A):   0\&deg;C",
      "B):   -20\&deg;C",
      "C):   -80\&deg;C",
      "D):   -196\&deg;C"
    ],
    "correctAnswer": "d",
    "explanation": "Cryopreservation maintains tissues and gametes at -196&deg;C in liquid nitrogen, suspending all metabolic and enzymatic activity."
  },
  {
    "id": "c12-bot-4-mcq-20",
    "question": "The historic 'Earth Summit' on Conservation of Biological Diversity (CBD) was held in 1992 at:",
    "options": [
      "A):   Johannesburg",
      "B):   Rio de Janeiro",
      "C):   Kyoto",
      "D):   Montreal"
    ],
    "correctAnswer": "b",
    "explanation": "The landmark Earth Summit (United Nations Conference on Environment and Development) was held in Rio de Janeiro in 1992."
  },
  {
    "id": "c12-bot-4-mcq-21",
    "question": "In an ecosystem food chain, what percentage of energy is transferred from one trophic level to the next according to Lindeman's law?",
    "options": [
      "A):   1\%",
      "B):   5\%",
      "C):   10\%",
      "D):   50\%"
    ],
    "correctAnswer": "c",
    "explanation": "Lindeman's 10% law states that only ~10% of energy is transferred to the next trophic level, with 90% lost as metabolic heat."
  },
  {
    "id": "c12-bot-4-mcq-22",
    "question": "An age pyramid with a narrow base and smaller pre-reproductive population than reproductive population indicates a:",
    "options": [
      "A):   Rapidly expanding population",
      "B):   Stable population",
      "C):   Declining population",
      "D):   Fluctuating population"
    ],
    "correctAnswer": "c",
    "explanation": "An urn-shaped age pyramid with a constricted base indicates a declining population because fewer young individuals enter reproductive age."
  },
  {
    "id": "c12-bot-4-mcq-23",
    "question": "The concentration of toxic non-biodegradable chemicals like DDT increasing at successive trophic levels is called:",
    "options": [
      "A):   Eutrophication",
      "B):   Biomagnification",
      "C):   Biodilution",
      "D):   Bioremediation"
    ],
    "correctAnswer": "b",
    "explanation": "Biomagnification refers to the progressive increase in concentration of non-metabolizable toxicants (like DDT) along food chain trophic levels."
  },
  {
    "id": "c12-bot-4-mcq-24",
    "question": "The Red Data Book containing catalogues of threatened and endangered species is maintained by:",
    "options": [
      "A):   WWF",
      "B):   IUCN",
      "C):   UNEP",
      "D):   UNESCO"
    ],
    "correctAnswer": "b",
    "explanation": "The International Union for Conservation of Nature (IUCN) maintains and publishes the Red Data Book."
  },
  {
    "id": "c12-bot-4-mcq-25",
    "question": "Which of the following ecosystems is characterized by the highest Net Primary Productivity per unit area?",
    "options": [
      "A):   Desert",
      "B):   Open Ocean",
      "C):   Tropical Rainforest",
      "D):   Tundra"
    ],
    "correctAnswer": "c",
    "explanation": "Tropical rainforests have optimal temperature, abundant moisture, and high solar radiation year-round, yielding the highest NPP per unit area."
  }
];
