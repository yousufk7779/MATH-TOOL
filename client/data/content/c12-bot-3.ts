// Class 12 Botany Chapter 3: Biology and Human Welfare (Tissue Culture, Microbes & Agricultural Biotechnology)
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Botany | Class: 12 | Code: c12-bot-3

export const c12Bot3HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.12), rgba(123, 31, 162, 0.12)); border: 1.5px solid rgba(224, 64, 251, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 12px 0; font-size: 17.5px; font-weight: bold; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📖</span> Quick Glossary &amp; Applied Botanical Terms
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Cellular Totipotency:</b> Inherent genetic capacity of a single isolated plant cell/explant to regenerate into a complete, fertile plant under sterile in vitro conditions.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Somaclones:</b> Plants produced through micropropagation that are genetically identical to each other and to the original parent plant.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">BOD (Biochemical Oxygen Demand):</b> Amount of dissolved oxygen required by aerobic microbes to oxidize the organic matter in one liter of wastewater.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Mycorrhiza:</b> Mutualistic symbiotic association between fungal hyphae (e.g., <i>Glomus</i>) and roots of higher plants that enhances phosphorus absorption.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Bt Toxin:</b> Crystalline insecticidal endotoxin protein synthesized by <i>Bacillus thuringiensis</i>, activated in the alkaline pH of the insect midgut.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #E040FB;">Biopiracy:</b> Unauthorized commercial exploitation of biological resources and traditional indigenous knowledge without authorization or equitable benefit sharing.
      </div>
    </div>
  </div>

  <!-- SECTION 1: TISSUE CULTURE -->
  <h2 style="color: #E040FB; border-bottom: 2px solid #E040FB; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Plant Tissue Culture &amp; Cellular Totipotency
  </h2>
  <p>
    Plant tissue culture is an <i>in vitro</i> technique wherein isolated plant cells, tissues, or organs are cultivated aseptically in defined nutrient media under controlled physical conditions (temperature 25 &plusmn; 2&deg;C, 16-hour photoperiod, relative humidity 50-60%). The foundational concept was pioneered by <b>Gottlieb Haberlandt (1902)</b>, known as the <i>Father of Plant Tissue Culture</i>, and demonstrated experimentally by <b>F.C. Steward (1958)</b> using carrot root phloem explants.
  </p>

  <h3 style="color: #E040FB; margin-top: 18px; font-size: 16.5px;">(i) Cellular Totipotency &amp; Explant Concept</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #E040FB;">Cellular Totipotency:</b> The intrinsic genetic capacity of a living, nucleated plant cell to de-differentiate, re-differentiate, and regenerate an entire multicellular organism.</li>
    <li><b style="color: #E040FB;">Explant:</b> Any excised portion of a plant body (e.g., shoot tip, leaf disc, node, root apex, anther, embryo) used to initiate an <i>in vitro</i> culture.</li>
  </ul>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(ii) Methodology of Plant Tissue Culture</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #E040FB;">1. Nutrient Medium Preparation:</b> The most widely used medium is <b>MS Medium (Murashige and Skoog, 1962)</b> containing:
        <br/>&bull; Carbon source: Sucrose (2-3%) for energy.
        <br/>&bull; Inorganic salts: Macronutrients (N, P, K, Ca, Mg, S) and micronutrients (Fe, Mn, Zn, B, Cu, Mo).
        <br/>&bull; Organic additives: Vitamins (thiamine, nicotinic acid, pyridoxine), amino acids (glycine), and inositol.
        <br/>&bull; Phytohormones (Growth Regulators): Precise ratios of <b>Auxins</b> (NAA, 2,4-D for root/callus induction) and <b>Cytokinins</b> (BAP, Kinetin for shoot regeneration).
        <br/>&bull; Gelling agent: Agar-agar (0.8%) for semi-solid media; adjusted to pH  5.6-5.8.
      </li>
      <li><b style="color: #E040FB;">2. Sterilization Protocols:</b>
        <br/>&bull; <i>Culture Vessels &amp; Media:</i> Autoclaved at 121&deg;C at 15 psi pressure for 15–20 minutes.
        <br/>&bull; <i>Explant Surface Sterilization:</i> Disinfected with 0.1% Mercuric chloride  (HgCl_2) or sodium hypochlorite followed by multiple sterile distilled water rinses.
        <br/>&bull; <i>Inoculation:</i> Carried out inside a <b>Laminar Air Flow Chamber</b> equipped with HEPA filters and UV germicidal lamps.
      </li>
      <li><b style="color: #E040FB;">3. Callus Induction &amp; Morphogenesis:</b>
        <br/>&bull; <i>Callus:</i> Unorganized, proliferating mass of undifferentiated parenchymatous cells formed on auxin-rich media.
        <br/>&bull; <i>Organogenesis:</i> High cytokinin-to-auxin ratio induces shoot differentiation; high auxin-to-cytokinin ratio induces root differentiation.
        <br/>&bull; <i>Somatic Embryogenesis:</i> Bipolar embryos (embryoids) develop directly from somatic callus cells.
      </li>
      <li><b style="color: #E040FB;">4. Hardening &amp; Acclimatization:</b> Gradual transfer of delicate <i>in vitro</i> regenerated plantlets from sterile humid growth chambers to green houses, and finally into field soil.
      </li>
    </ol>
  </div>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(iii) Applications of Plant Tissue Culture</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #E040FB;">Micropropagation:</b> Rapid mass vegetative propagation of thousands of true-to-type plants in a short duration and small space (e.g., Banana, Tomato, Apple, Orchids). Progeny are <b>somaclones</b>.</li>
    <li><b style="color: #E040FB;">Meristem Culture (Virus-free Plants):</b> Apical and axillary shoot meristems are free from viral infections due to rapid cell division exceeding viral replication rates and high auxin titers. Culturing meristems produces 100% virus-free stocks from infected plants (e.g., Potato, Sugarcane, Cassava).</li>
    <li><b style="color: #E040FB;">Somatic Hybridization (Protoplast Fusion):</b> Isolation of naked plant protoplasts using enzymes (<b>Cellulase and Pectinase</b>), followed by chemically induced fusion using <b>Polyethylene Glycol (PEG)</b> or electrofusion. Example: <b>Pomato</b> (somatic hybrid of Potato and Tomato).</li>
    <li><b style="color: #E040FB;">Androgenesis (Anther/Pollen Culture):</b> Culturing haploid microspores produces haploid and double-haploid homozygous lines for crop breeding (Guha and Maheshwari, 1964 in <i>Datura innoxia</i>).</li>
    <li><b style="color: #E040FB;">Somaclonal Variations:</b> Genetic or epigenetic variations arising in cell cultures used for selecting disease or salinity-resistant crop varieties.</li>
  </ul>

  <!-- SECTION 2: MICROBES IN HUMAN WELFARE -->
  <h2 style="color: #E040FB; border-bottom: 2px solid #E040FB; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Microbes in Human Welfare
  </h2>

  <h3 style="color: #E040FB; margin-top: 18px; font-size: 16.5px;">(i) Microbes in Household Food Processing</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #E040FB; margin: 0 0 8px 0; font-size: 15.5px;">🥛 Curd Production (LAB)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        <i>Lactobacillus</i> and other Lactic Acid Bacteria (LAB) grow in milk, fermenting lactose into lactic acid, which coagulates and partially digests milk casein protein. LAB increases nutritional quality by enhancing <b>Vitamin B_{12}</b> and checks growth of harmful enteric pathogens in the human stomach.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #E040FB; margin: 0 0 8px 0; font-size: 15.5px;">🍞 Bakery &amp; Fermented Foods</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        <b>Baker's Yeast (<i>Saccharomyces cerevisiae</i>):</b> Ferments sugars in dough, releasing CO_2 gas that gives bread its porous, spongy texture.
        <br/><b style="color: #E040FB;">Dosa &amp; Idli:</b> Batter fermented by bacteria, causing puffing-up due to CO_2.
        <br/><b style="color: #E040FB;">Toddy:</b> Traditional South Indian beverage prepared by fermenting palm sap.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #E040FB; margin: 0 0 8px 0; font-size: 15.5px;">🧀 Cheese Ripening</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        <b style="color: #E040FB;">Swiss Cheese:</b> Large characteristic holes formed by large amounts of CO_2 produced by <i>Propionibacterium freudenreichii / shermanii</i>.
        <br/><b style="color: #E040FB;">Roquefort Cheese:</b> Ripened by the fungus <i>Penicillium roqueforti</i> for distinctive flavor.
        <br/><b style="color: #E040FB;">Camembert Cheese:</b> Ripened by <i>Penicillium camemberti</i>.
      </p>
    </div>
  </div>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(ii) Microbes in Industrial Products &amp; Pharmaceuticals</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #E040FB;">Fermented Beverages:</b> Brewer's yeast (<i>Saccharomyces cerevisiae</i>) ferments malted cereals and fruit juices into ethanol. Non-distilled beverages: Wine and Beer (lower alcohol 3-12%); Distilled beverages: Whisky, Brandy, Rum (higher alcohol 40-50%).</li>
    <li><b style="color: #E040FB;">Antibiotics:</b> Chemical substances produced by microbes that inhibit or destroy pathogenic bacteria.
      <br/>&bull; <i>Penicillin:</i> First discovered by <b>Alexander Fleming (1928)</b> from <i>Penicillium notatum</i> inhibiting <i>Staphylococcus</i>. Full therapeutic potential established by <b>Ernst Chain and Howard Florey</b> during World War II (Nobel Prize 1945).
    </li>
    <li><b style="color: #E040FB;">Organic Acids &amp; Microbial Sources:</b>
      <br/>&bull; <i>Citric acid:</i> Fungus <i>Aspergillus niger</i>.
      <br/>&bull; <i>Acetic acid:</i> Bacterium <i>Acetobacter aceti</i>.
      <br/>&bull; <i>Butyric acid:</i> Bacterium <i>Clostridium butyricum</i>.
      <br/>&bull; <i>Lactic acid:</i> Bacterium <i>Lactobacillus</i>.
    </li>
    <li><b style="color: #E040FB;">Commercial Enzymes:</b>
      <br/>&bull; <i>Lipases:</i> Used in detergent formulations to remove oily stains.
      <br/>&bull; <i>Pectinases &amp; Proteases:</i> Used for clarifying bottled commercial fruit juices.
      <br/>&bull; <i>Streptokinase:</i> Produced by <i>Streptococcus</i>; modified by genetic engineering as a <b>clot buster</b> to dissolve intravascular blood clots in myocardial infarction patients.
    </li>
    <li><b style="color: #E040FB;">Bioactive Molecules:</b>
      <br/>&bull; <i>Cyclosporin A:</i> Produced by the fungus <i>Trichoderma polysporum</i>; used as a potent <b>immunosuppressive agent</b> in organ transplant patients.
      <br/>&bull; <i>Statins:</i> Produced by the yeast <i>Monascus purpureus</i>; acts as a <b>blood cholesterol-lowering agent</b> by competitively inhibiting the enzyme HMG-CoA reductase.
    </li>
  </ul>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(iii) Microbes in Sewage Treatment (STPs)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(224, 64, 251, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #E040FB;">1. Primary Treatment (Physical Separation):</b>
        <br/>&bull; Sequential filtration removes large floating debris.
        <br/>&bull; Primary sedimentation in settling tanks removes grit (soil and small pebbles). Settled solids form <i>primary sludge</i>, while supernatant forms <i>primary effluent</i>.
      </li>
      <li><b style="color: #E040FB;">2. Secondary Treatment (Biological Aerobic Digestion):</b>
        <br/>&bull; Primary effluent is pumped into large aeration tanks with continuous mechanical agitation and air pumping.
        <br/>&bull; Aerobic microbes proliferate into <b>flocs</b> (masses of bacteria intertwined with fungal filaments).
        <br/>&bull; Flocs consume organic pollutants, causing a steep decline in <b>BOD (Biochemical Oxygen Demand)</b>.
        <br/>&bull; Effluent passes into a settling tank where flocs settle as <b>activated sludge</b>.
      </li>
      <li><b style="color: #E040FB;">3. Anaerobic Sludge Digestion:</b>
        <br/>&bull; A small part of activated sludge is pumped back as inoculum; major part is pumped into <b>anaerobic sludge digesters</b>.
        <br/>&bull; Anaerobic methanogenic bacteria digest organic sludge, producing <b>Biogas</b> (Methane CH_4, CO_2, H_2S). The treated effluent is released into rivers.
      </li>
    </ol>
  </div>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(iv) Biogas Production &amp; Bio-control Agents</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #E040FB;">Biogas Generation:</b> Methanogenic bacteria like <i>Methanobacterium</i> grow anaerobically on cellulosic material in the rumen of cattle (gobar) and STPs to produce inflammable biogas (50-70% Methane, 30-40%  CO_2). Technology developed in India by <b>KVIC</b> (Khadi and Village Industries Commission) and <b>IARI</b> (Indian Agricultural Research Institute).</li>
    <li><b style="color: #E040FB;">Biocontrol Agents:</b>
      <br/>&bull; <i>Ladybird Beetle:</i> Controls aphids.
      <br/>&bull; <i>Dragonflies:</i> Control mosquito larvae.
      <br/>&bull; <i>Bacillus thuringiensis (Bt):</i> Dry spores mixed with water are sprayed on crops; larvae of lepidopteran pests ingest spores, activating Cry toxin in alkaline midgut, creating perforations and killing larvae.
      <br/>&bull; <i>Trichoderma:</i> Free-living root fungus effective against multiple fungal soil-borne plant pathogens.
      <br/>&bull; <i>Baculoviruses (Nucleopolyhedrovirus - NPV):</i> Narrow-spectrum, species-specific pathogens of arthropods that do not harm non-target organisms, mammals, birds, or beneficial pollinator insects (vital in IPM programs).
    </li>
    <li><b style="color: #E040FB;">Bio-fertilizers:</b> Organisms that enrich soil nutrient quality:
      <br/>&bull; <i>Free-living N_2 fixers:</i> <i>Azotobacter</i>, <i>Azospirillum</i>.
      <br/>&bull; <i>Symbiotic N_2 fixers:</i> <i>Rhizobium</i> in legume root nodules.
      <br/>&bull; <i>Mycorrhiza (Glomus):</i> Absorbs phosphorus from soil and transfers it to plant, confers root pathogen resistance, salinity, and drought tolerance.
      <br/>&bull; <i>Cyanobacteria (Blue-Green Algae):</i> <i>Anabaena</i>, <i>Nostoc</i>, <i>Oscillatoria</i>; <i>Anabaena azollae</i> associated with water fern <i>Azolla</i> serves as prime biofertilizer in paddy fields.
    </li>
  </ul>

  <!-- SECTION 3: BIOTECHNOLOGY IN AGRICULTURE -->
  <h2 style="color: #E040FB; border-bottom: 2px solid #E040FB; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Applications of Biotechnology in Agriculture
  </h2>

  <h3 style="color: #E040FB; margin-top: 18px; font-size: 16.5px;">(i) Genetically Modified Organisms (GMOs) &amp; Transgenic Crops</h3>
  <p>
    Plants, bacteria, fungi, and animals whose genes have been altered by recombinant DNA technology are termed <b>Genetically Modified Organisms (GMOs)</b>. Key agronomic advantages include:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #E040FB;">Increased Abiotic Stress Tolerance:</b> Enhanced resistance to drought, cold, salinity, and extreme temperatures.</li>
    <li><b style="color: #E040FB;">Reduced Dependence on Chemical Pesticides:</b> Development of pest-resistant transgenic crop lines.</li>
    <li><b style="color: #E040FB;">Reduced Post-Harvest Losses:</b> Prolonged shelf life (e.g., Flavr Savr tomato with antisense polygalacturonase gene).</li>
    <li><b style="color: #E040FB;">Enhanced Nutritional Quality:</b> <b>Golden Rice</b> (transgenic rice genetically engineered with daffodil &beta;-carotene biosynthesis genes to synthesize provitamin A to alleviate blindness).</li>
  </ul>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(ii) Bt Crops (Bt Cotton)</h3>
  <p>
    <i>Bacillus thuringiensis</i> produces crystalline protein inclusions containing insecticidal protoxin proteins during sporulation (<b>Cry proteins</b>).
  </p>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1.5px solid rgba(224, 64, 251, 0.3); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <h4 style="color: #E040FB; margin: 0 0 10px 0; font-size: 15.5px;">Mechanism of Action:</h4>
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li>Bt toxin exists as an inactive crystalline <b>protoxin</b> inside the bacterium and does not harm the bacterium.</li>
      <li>When an insect larva ingests the transgenic plant tissue, the <b>alkaline pH of the insect midgut</b> solubilizes the crystals, converting protoxin into active toxin.</li>
      <li>Activated toxin binds to specific receptors on the surface of <b>midgut epithelial cells</b>, creating pores that cause cell swelling, lysis, and death of the insect.</li>
      <li><b style="color: #E040FB;">Specific Cry Genes:</b>
        <br/>&bull; <b style="color: #E040FB;"><i>cryIAc</i> and <i>cryIIAb</i>:</b> Control Cotton Bollworms.
        <br/>&bull; <b style="color: #E040FB;"><i>cryIAb</i>:</b> Controls Corn Borer.
      </li>
    </ol>
  </div>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(iii) Pest-Resistant Plants via RNA Interference (RNAi)</h3>
  <p>
    The root-knot nematode <i>Meloidogyne incognita</i> infects the roots of tobacco plants, severely reducing crop yield. This was countered using <b>RNA Interference (RNAi)</b>:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #E040FB;">Mechanism of RNAi:</b> RNAi is a cellular gene-silencing defense mechanism in all eukaryotes where specific mRNA translation is silenced by complementary double-stranded RNA (dsRNA).</li>
    <li><b style="color: #E040FB;">Transgenic Construction:</b> Nematode-specific genes were introduced into tobacco using <i>Agrobacterium tumefaciens</i> vectors such that they produce both sense and anti-sense RNA strands in host cells.</li>
    <li><b style="color: #E040FB;">Silencing:</b> The two complementary RNAs pair to form double-stranded RNA (dsRNA), which initiates RNAi, cleaving the specific nematode mRNA. When the nematode feeds on the transgenic host, it cannot express vital proteins and dies.</li>
  </ul>

  <h3 style="color: #E040FB; margin-top: 22px; font-size: 16.5px;">(iv) Biopiracy, Patents &amp; Ethical Issues</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #E040FB;">Biopiracy:</b> Use of bioresources by commercial organizations without proper authorization from countries or indigenous communities, and without compensatory payment.
      <br/><b style="color: #E040FB;">Famous Case Studies:</b>
      <br/>1. <i>Basmati Rice:</i> In 1997, a US company (RiceTec) obtained a patent on Basmati rice through the US Patent and Trademark Office by crossing Basmati with semi-dwarf varieties, claiming it as an invention. India successfully contested the patent based on traditional indigenous heritage.
      <br/>2. <i>Neem &amp; Turmeric:</i> Patents granted in the US for antifungal properties of neem and wound-healing properties of turmeric were revoked following legal challenges by CSIR India.
    </li>
    <li><b style="color: #E040FB;">GEAC (Genetic Engineering Appraisal Committee):</b> Statutory body under the Ministry of Environment, Forest and Climate Change (MoEFCC), Government of India, that evaluates safety of GM research and approves commercial release of GMOs.</li>
    <li><b style="color: #E040FB;">Indian Patent Bill Amendments:</b> Formulated to address emergency provisions, research exemptions, and prevent biopiracy.</li>
  </ul>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(74, 4, 78, 0.85)); border: 2px solid #E040FB; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #E040FB; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Botany Chapter 3: Applied Biotechnology &amp; Microbes Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(224, 64, 251, 0.25); color: #E040FB; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Organism / Product</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Microbial Source / Scientific Agent</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Industrial / Agronomic Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Curd / Lactic Acid:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Lactobacillus</i> / LAB</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Ferments lactose &rarr; lactic acid; enriches Vitamin B<sub>12</sub></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Swiss Cheese:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Propionibacterium shermanii</i></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Propionic acid fermentation with large CO<sub>2</sub> gas holes</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Cyclosporin A:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Trichoderma polysporum</i> (fungus)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Immunosuppressant drug for organ transplant surgery</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Statins:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Monascus purpureus</i> (yeast)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Competitively inhibits HMG-CoA reductase &rarr; lowers blood cholesterol</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Clot Buster:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Streptococcus</i> (Streptokinase)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Dissolves intravascular thrombi in heart attack patients</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Bt Cotton Bollworm Control:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Bacillus thuringiensis</i> (<i>cryIAc, cryIIAb</i>)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cry endotoxin forms midgut epithelial pores upon ingestion</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Corn Borer Control:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Bacillus thuringiensis</i> (<i>cryIAb</i>)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Specific endotoxin targeting corn borers</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">RNA Interference (RNAi):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Meloidogyne incognita</i> dsRNA</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Silences nematode specific mRNA, protecting tobacco roots</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">Golden Rice:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Daffodil &beta;-carotene genes</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Provitamin A enriched to combat night blindness</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #E040FB;">NPV Biocontrol:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Baculovirus</i> (Nucleopolyhedrovirus)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Narrow-spectrum insecticidal agent preserving non-target organisms</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c12Bot3HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.15), rgba(123, 31, 162, 0.15)); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Definitions, Microbial Sources, Enzymes &amp; Key Concepts</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define cellular totipotency.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">Cellular Totipotency:</b> The inherent genetic ability of a living plant cell/explant to regenerate into a whole new fertile plant under in vitro conditions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Who is known as the Father of Plant Tissue Culture?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Gottlieb Haberlandt (1902).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is an explant in plant tissue culture?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Any excised plant organ, tissue, or cell used to initiate an in vitro sterile tissue culture.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Name the most widely used synthetic culture medium in plant tissue culture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Murashige and Skoog (MS) medium.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What is a callus in plant tissue culture?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An unorganized, proliferating mass of undifferentiated parenchymatous cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is micropropagation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The rapid in vitro mass propagation of thousands of plants from explants in a short time.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Define somaclones.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Plants produced through tissue culture that are genetically identical to each other and to the parent plant.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Which plant part is best suited to obtain virus-free plants from an infected plant?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The apical and axillary shoot meristems.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Why are apical meristems free from virus infections?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Due to rapid cell division exceeding virus multiplication and high endogenous auxin concentrations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What is somatic hybridization?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The process of fusing isolated naked protoplasts from two different plant varieties to produce hybrid plants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Name the chemical used as a fusogen in protoplast fusion.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Polyethylene Glycol (PEG) or sodium nitrate.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Give an example of a somatic hybrid plant.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pomato (somatic hybrid of Potato and Tomato).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What enzymes are used to isolate naked protoplasts from plant cells?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cellulase and Pectinase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Which bacterium converts milk into curd?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Lactobacillus</i> / Lactic Acid Bacteria (LAB).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: State two beneficial roles of LAB in curd.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Coagulates milk protein and increases Vitamin B<sub>12</sub> content. 2. Checks growth of disease-causing microbes in the stomach.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: What causes the puffed-up appearance of dosa and idli dough?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Production of carbon dioxide (CO<sub>2</sub>) gas during bacterial fermentation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Name the microbe known as Baker's / Brewer's yeast.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Saccharomyces cerevisiae</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Name the bacterium responsible for the large holes in Swiss cheese.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Propionibacterium freudenreichii / shermanii</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Which fungus is used for ripening Roquefort cheese?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Penicillium roqueforti</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: Name two alcoholic beverages produced without distillation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Wine and Beer.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Name two alcoholic beverages produced by distillation of fermented broth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Whisky and Brandy (also Rum).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Who discovered the first antibiotic Penicillin and from which organism?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Alexander Fleming (1928) from the fungus <i>Penicillium notatum</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Which scientists established the full therapeutic potential of Penicillin?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ernst Chain and Howard Florey.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: Name the microbial source of Citric acid.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The fungus <i>Aspergillus niger</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Name the microbial source of Acetic acid.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The bacterium <i>Acetobacter aceti</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: What is the source and medical use of Streptokinase?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Produced by <i>Streptococcus</i>; used as a 'clot buster' to dissolve blood clots in myocardial infarction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Name the microbial source and use of Cyclosporin A.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Produced by <i>Trichoderma polysporum</i>; used as an immunosuppressive agent in organ transplantation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Name the microbial source and function of Statins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Produced by <i>Monascus purpureus</i>; lowers blood cholesterol by competitively inhibiting HMG-CoA reductase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Define Biochemical Oxygen Demand (BOD).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The amount of dissolved oxygen required by aerobic microbes to oxidize all organic matter in one liter of water.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What are 'flocs' in sewage treatment?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mesh-like masses of aerobic bacteria associated with fungal filaments formed during secondary sewage treatment.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: What is the relationship between BOD and the polluting potential of wastewater?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Higher the BOD, higher is the organic matter content and greater the polluting potential.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is activated sludge?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The sedimented mass of microbial flocs settled in the settling tank after secondary biological treatment.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Name the principal component of Biogas.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Methane (CH<sub>4</sub>, 50–70%).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Name a methanogenic bacterium found in anaerobic sludge and cattle rumen.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Methanobacterium</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: What is a Bio-control agent? Give one example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Use of biological predators to control plant pests/diseases, e.g., Ladybird beetles controlling aphids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Which genus of Baculovirus is used as narrow-spectrum biocontrol agents?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Nucleopolyhedrovirus</i> (NPV).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Name the free-living soil fungus used as a biocontrol agent against root pathogens.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Trichoderma</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: Give two examples of free-living nitrogen-fixing bacteria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Azotobacter</i> and <i>Azospirillum</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Name the symbiotic nitrogen-fixing cyanobacterium associated with the water fern <i>Azolla</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Anabaena azollae</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: What is Biopiracy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The unauthorized use of bio-resources and traditional indigenous knowledge without proper authorization or compensation.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.15), rgba(123, 31, 162, 0.15)); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Biocontrol Pathways, STP Stages, Bt Mechanisms &amp; Short Notes</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain the composition and role of MS medium in plant tissue culture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">MS Medium Composition:</b> Contains sucrose (2-3%) as carbon/energy source, inorganic macro- and micronutrients, vitamins (thiamine, pyridoxine), amino acids (glycine), and growth regulators (auxins and cytokinins) at pH  5.6-5.8. Auxins promote root/callus formation, while cytokinins induce shoot regeneration.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Describe the step-by-step procedure of Somatic Hybridization.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Isolation of Protoplasts:</b> Plant cells treated with cellulase and pectinase to digest cell walls. 2. <b style="color: #E040FB;">Protoplast Fusion:</b> Naked protoplasts from two varieties mixed in the presence of Polyethylene Glycol (PEG) or electric current. 3. <b style="color: #E040FB;">Regeneration:</b> Fused hybrid protoplasts regenerate cell wall and develop into a somatic hybrid (e.g., Pomato).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: What is Micropropagation? State its two main advantages.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">Micropropagation:</b> In vitro mass propagation of plants from explants. Advantages: (1) Rapid production of thousands of somaclonal disease-free plants in a small space irrespective of seasons. (2) Propagation of rare, endangered, or recalcitrant seed plants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: How does meristem culture help in recovering healthy plants from virus-infected stock?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The shoot apical meristem is free of viral pathogens because meristematic cells divide faster than viral replication and have a dense vascular-free zone. Culturing these apical meristems on nutrient media produces 100% virus-free plants (e.g., Potato, Sugarcane).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Describe the beneficial role of Lactic Acid Bacteria (LAB) in milk.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      LAB ferments milk lactose into lactic acid at suitable temperatures. Lactic acid coagulates and partially digests milk casein protein, converting milk to curd. LAB enhances nutrition by synthesizing Vitamin B<sub>12</sub> and suppresses pathogenic gut bacteria.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Differentiate between Distilled and Non-distilled alcoholic beverages with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">Non-Distilled Beverages:</b> Produced directly by fermenting malt/fruit juices without distillation, retaining lower alcohol content (3-12%, e.g., Beer, Wine). <b style="color: #E040FB;">Distilled Beverages:</b> Fermented broth is distilled to concentrate alcohol (40-50%, e.g., Whisky, Brandy, Rum).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Explain the discovery of Penicillin by Alexander Fleming.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In 1928, Alexander Fleming observed that a mold contaminant <i>Penicillium notatum</i> growing on unwashed culture plates inhibited the growth of <i>Staphylococcus</i> bacteria around it. He isolated the antibacterial chemical and named it Penicillin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: List four organic acids produced by microbes along with their microbial sources.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #E040FB;">Citric Acid:</b> <i>Aspergillus niger</i> (fungus). 2. <b style="color: #E040FB;">Acetic Acid:</b> <i>Acetobacter aceti</i> (bacterium). 3. <b style="color: #E040FB;">Butyric Acid:</b> <i>Clostridium butyricum</i> (bacterium). 4. <b style="color: #E040FB;">Lactic Acid:</b> <i>Lactobacillus</i> (bacterium).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain the medical significance of Cyclosporin A and Statins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">Cyclosporin A:</b> Derived from <i>Trichoderma polysporum</i>; acts as an immunosuppressant to prevent organ rejection in transplant patients. <b style="color: #E040FB;">Statins:</b> Derived from <i>Monascus purpureus</i>; lowers blood cholesterol by competitively inhibiting HMG-CoA reductase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: What is Streptokinase and how is it used clinically?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Streptokinase is an enzyme produced by the bacterium <i>Streptococcus</i> and modified by genetic engineering. It functions as a 'clot buster' by activating plasminogen to dissolve intravascular blood clots in patients with acute myocardial infarction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain Primary Treatment of municipal sewage wastewater.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Primary treatment is physical separation: (1) <b style="color: #E040FB;">Sequential Filtration:</b> Removes large floating solid debris using mesh screens. (2) <b style="color: #E040FB;">Sedimentation:</b> Heavy particles (grit, sand, pebbles) settle in settling tanks as primary sludge; the supernatant liquid forms primary effluent.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Describe the role of Aeration Tanks and 'Flocs' in Secondary Sewage Treatment.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Primary effluent is vigorously agitated and aerated in large aeration tanks. Aerobic microbes grow into 'flocs' (bacteria intertwined with fungal filaments) that digest organic pollutants, drastically reducing BOD. The effluent is then transferred to settling tanks.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: What is Activated Sludge? Explain its dual fate in sewage treatment plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Activated sludge is the sedimented microbial flocs from the secondary settling tank. (1) A small portion is pumped back into aeration tanks as microbial inoculum. (2) The major portion is transferred to anaerobic sludge digesters to generate biogas and fertilizer.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Describe the structure and working of a typical Biogas Plant (KVIC model).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Consists of a 10–15 ft deep concrete digester tank, an inlet for cattle dung-water slurry (gobar), a floating gas holder, and an outlet for spent slurry. Methanogenic bacteria anaerobically digest slurry, generating biogas (methane) tapped through an outlet pipe.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: How does <i>Bacillus thuringiensis</i> act as an effective Biopesticide?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Bacillus thuringiensis</i> produces crystalline Cry protoxin. When ingested by insect larvae (e.g., caterpillars), the alkaline gut pH solubilizes the crystal into active toxin. The toxin binds midgut epithelial cells, forming pores that lead to cell lysis and death.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Explain the role of Baculoviruses (NPV) in Integrated Pest Management (IPM).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Baculoviruses of the genus <i>Nucleopolyhedrovirus</i> (NPV) are narrow-spectrum, species-specific pathogens of insects. They kill specific insect pests without harming non-target organisms (mammals, birds, fish, pollinating bees), making them ideal for ecologically sensitive IPM.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: How do Mycorrhizal fungi act as Biofertilizers for crop plants?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Fungi belonging to the genus <i>Glomus</i> form mutualistic symbiotic associations (mycorrhiza) with plant roots. Hyphae absorb phosphorus from soil and transfer it to the plant, confer resistance to root pathogens, and enhance tolerance to salinity and drought.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Describe the role of Cyanobacteria as Biofertilizers in paddy fields.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cyanobacteria (e.g., <i>Nostoc</i>, <i>Anabaena</i>, <i>Oscillatoria</i>) fix atmospheric nitrogen into organic forms via specialized heterocyst cells. In paddy fields, <i>Anabaena azollae</i> associated with water fern <i>Azolla</i> significantly increases soil nitrogen and fertility.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: What are Genetically Modified Organisms (GMOs)? State two major advantages in agriculture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">GMOs:</b> Organisms whose genes have been altered using recombinant DNA technology. Advantages: (1) Creation of pest-resistant and herbicide-tolerant crops. (2) Enhanced nutritional value (e.g., Vitamin A enriched Golden Rice).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the mechanism of pest resistance in Bt Cotton.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bt Cotton contains the <i>cryIAc</i> and <i>cryIIAb</i> genes from <i>Bacillus thuringiensis</i>. When cotton bollworms ingest cotton tissue, the inactive Cry protein is activated in their alkaline midgut, creating pores in epithelial cells, resulting in larval death.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Why does the Bt toxin not kill the bacterium <i>Bacillus thuringiensis</i> itself?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Inside the bacterium, the Bt toxin exists as an inactive, crystallized <b>protoxin</b>. It requires an alkaline pH (	ext{pH} > 8.5), which is absent in the bacterium but present in the insect midgut, to become active.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Which specific Cry genes control Cotton Bollworms and Corn Borer respectively?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">Cotton Bollworms:</b> Controlled by <i>cryIAc</i> and <i>cryIIAb</i> genes. <b style="color: #E040FB;">Corn Borer:</b> Controlled by the <i>cryIAb</i> gene.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain the concept of RNA Interference (RNAi) in protecting tobacco plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The nematode <i>Meloidogyne incognita</i> infects tobacco roots. Nematode-specific genes introduced via <i>Agrobacterium</i> produce both sense and antisense RNA in host cells, forming dsRNA that triggers RNAi, silencing specific nematode mRNA and preventing infestation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: What is Golden Rice and what is its nutritional significance?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Golden Rice is a genetically modified variety of <i>Oryza sativa</i> engineered with daffodil genes to synthesize &beta;-carotene (provitamin A) in the grain endosperm, developed to eradicate night blindness and Vitamin A deficiency.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain the Flavr Savr tomato and its commercial benefit.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Flavr Savr tomato is a transgenic tomato with an antisense gene that inhibits the enzyme polygalacturonase (which degrades pectin in cell walls). This delays fruit softening, prolongs shelf life, and enhances flavor during transport.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: What is Biopiracy? Explain with the Basmati rice controversy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Biopiracy is unauthorized patenting/commercialization of bioresources. In 1997, US company RiceTec patented Basmati rice lines derived from Indian traditional germplasm. India legally challenged and successfully forced revocation of major patent claims.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the role of GEAC in India.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The <b style="color: #E040FB;">Genetic Engineering Appraisal Committee (GEAC)</b> is a statutory committee under MoEFCC responsible for approving the release of genetically modified organisms into the environment and ensuring biosafety in GM research.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Differentiate between Chemical Fertilizers and Biofertilizers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">Chemical Fertilizers:</b> Synthetic, expensive, cause soil acidification and water pollution (eutrophication). <b style="color: #E040FB;">Biofertilizers:</b> Natural microbes (Rhizobium, Cyanobacteria, Mycorrhiza) that sustainably enrich soil nitrogen/phosphorus without pollution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain how <i>Trichoderma</i> acts as a biocontrol agent in the rhizosphere.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Trichoderma</i> is a free-living root fungus that secretes antifungal chitinases and glucanases, colonizes root surfaces, and competitively excludes pathogenic soil fungi (e.g., <i>Rhizoctonia</i>, <i>Fusarium</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: What are Somaclonal Variations and how are they useful in agriculture?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Somaclonal variations are genetic/epigenetic mutations arising in cells during in vitro tissue culture. They provide novel genetic diversity useful for selecting disease-resistant, drought-tolerant, and high-yielding crop somaclones.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain Anther Culture (Androgenesis) and its breeding importance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Anther culture involves cultivating immature anthers containing haploid microspores to regenerate haploid plantlets. Colchicine treatment doubles chromosomes to produce 100% homozygous diploid lines in a single generation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Why is PEG (Polyethylene Glycol) added during protoplast fusion?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      PEG acts as a chemical fusogen that alters the electrostatic surface charge of naked protoplast plasma membranes, facilitating tight membrane contact and cytoplasmic fusion.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: How does Ganga Action Plan utilize modern sewage treatment technology?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ganga Action Plan (initiated by MoEF) commissioned large-scale Sewage Treatment Plants (STPs) along riverbanks to treat millions of liters of municipal sewage biologically before discharge into the Ganga.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain the enzymatic clarification of fruit juices.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Freshly squeezed commercial juices are cloudy due to suspended pectin and protein fibers. Industrial treatment with <b style="color: #E040FB;">Pectinases and Proteases</b> hydrolyzes these fibers, yielding clear, sparkling bottled juices.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Why is Biogas preferred over traditional firewood as a rural fuel?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Biogas burns with a clean, smokeless blue flame with high calorific value, produces no ash, prevents indoor air pollution, and the spent slurry provides rich organic manure for agriculture.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: What is the role of <i>Azospirillum</i> in maize and wheat cultivation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Azospirillum</i> is a free-living/associative rhizosphere bacterium that fixes atmospheric nitrogen and secretes growth-promoting gibberellins/auxins, boosting crop yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Describe the wound-healing patent controversy of Turmeric (Haldi).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In 1995, a US patent on the wound-healing properties of turmeric was granted to US researchers. CSIR India submitted ancient Ayurvedic Sanskrit texts proving prior art, leading to complete revocation of the patent.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: What are the ethical concerns regarding Transgenic Animals and Plants?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Unforeseen ecological risks (superweeds, gene flow to wild relatives). 2. Monopolistic control of food supply by multinational corporations through terminator seed patents. 3. Violation of animal welfare.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain the significance of Autoclaving in plant tissue culture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Autoclaving utilizes saturated steam at 121&deg;C and 15 psi for 20 minutes to achieve absolute sterilization by denaturing proteins and destroying all bacteria, fungi, and bacterial endospores.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: How does <i>Propionibacterium shermanii</i> impart flavor to Swiss cheese?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      During fermentation, it consumes lactic acid and converts it into propionic acid (which gives Swiss cheese its characteristic nutty flavor) and large volumes of CO_2 gas (forming the holes).
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.15), rgba(123, 31, 162, 0.15)); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #E040FB; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master Industrial Processes, STP Flowcharts &amp; Transgenic Mechanisms</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Describe Plant Tissue Culture in detail: Principles, MS Medium composition, Sterilization, and Morphogenesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Principles &amp; Totipotency:</b> Cellular totipotency (Haberlandt, 1902; Steward, 1958) is the capacity of an explant cell to regenerate an entire plant under sterile in vitro conditions.<br/><br/><b style="color: #E040FB;">2. MS Medium Composition (Murashige &amp; Skoog, 1962):</b> Contains sucrose (2-3%), macronutrients (N, P, K, Ca, Mg), micronutrients (Fe, B, Zn, Cu), vitamins (thiamine, pyridoxine), amino acids (glycine), inositol, and agar-agar (0.8%) at pH  5.6-5.8.<br/><br/><b style="color: #E040FB;">3. Sterilization Protocols:</b> Culture vessels autoclaved (121&deg;C, 15 psi, 20 min); explants surface-sterilized with 0.1%  HgCl_2; inoculations conducted in Laminar Air Flow hoods.<br/><br/><b style="color: #E040FB;">4. Morphogenesis:</b> Callus formed on auxin-rich media. High cytokinin/auxin ratio induces caulogenesis (shoots); high auxin/cytokinin ratio induces rhizogenesis (roots). Somatic embryogenesis produces bipolar embryoids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Discuss the major applications of Plant Tissue Culture: Micropropagation, Meristem Culture, Somatic Hybridization, and Androgenesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Micropropagation:</b> Rapid mass vegetative multiplication of somaclones (e.g., Banana, Tomato, Orchids) in small space throughout the year.<br/><br/><b style="color: #E040FB;">2. Meristem Culture:</b> Apical and axillary shoot meristems are devoid of viruses due to rapid cell division and high auxin content. Culturing meristems produces 100% virus-free stocks from infected plants (Potato, Sugarcane).<br/><br/><b style="color: #E040FB;">3. Somatic Hybridization:</b> Protoplasts isolated with cellulase and pectinase are fused using PEG (Polyethylene Glycol) to create inter-specific/inter-generic hybrids like <b>Pomato</b>.<br/><br/><b style="color: #E040FB;">4. Androgenesis (Anther/Pollen Culture):</b> Immature microspores cultured in vitro produce haploid lines. Chromosome doubling via colchicine produces homozygous double-haploid lines in a single generation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Explain the role of Microbes in Household Food Processing: Curd, Bread, Cheese, and Traditional Fermented Foods.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Curd Production:</b> Lactic Acid Bacteria (LAB / <i>Lactobacillus</i>) ferment milk lactose into lactic acid, coagulating milk casein protein. LAB enriches curd with Vitamin B<sub>12</sub> and inhibits pathogenic gut microbes.<br/><br/><b style="color: #E040FB;">2. Bread &amp; Bakery:</b> Baker's Yeast (<i>Saccharomyces cerevisiae</i>) ferments glucose, releasing CO_2 that causes dough to rise and creates porous, spongy bread.<br/><br/><b style="color: #E040FB;">3. Cheese Varieties:</b><br/>&bull; <i>Swiss Cheese:</i> Large holes formed by CO_2 produced by <i>Propionibacterium shermanii</i>.<br/>&bull; <i>Roquefort Cheese:</i> Ripened by fungus <i>Penicillium roqueforti</i>.<br/>&bull; <i>Camembert Cheese:</i> Ripened by <i>Penicillium camemberti</i>.<br/><br/><b style="color: #E040FB;">4. Other Foods:</b> Dosa/Idli fermented by bacteria; palm sap fermented into Toddy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss the industrial production of Antibiotics, Organic Acids, Enzymes, and Bioactive Molecules by Microbes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Antibiotics:</b> Alexander Fleming (1928) discovered Penicillin from <i>Penicillium notatum</i> against <i>Staphylococcus</i>; Florey and Chain established mass therapeutic production for WWII soldiers.<br/><br/><b style="color: #E040FB;">2. Organic Acids:</b> Citric acid (<i>Aspergillus niger</i>), Acetic acid (<i>Acetobacter aceti</i>), Butyric acid (<i>Clostridium butyricum</i>), Lactic acid (<i>Lactobacillus</i>).<br/><br/><b style="color: #E040FB;">3. Commercial Enzymes:</b> Lipases (detergent stain removers), Pectinases &amp; Proteases (clarifying bottled fruit juices), Streptokinase (<i>Streptococcus</i> clot buster).<br/><br/><b style="color: #E040FB;">4. Bioactive Molecules:</b><br/>&bull; <i>Cyclosporin A:</i> From <i>Trichoderma polysporum</i>; immunosuppressive drug in organ transplantation.<br/>&bull; <i>Statins:</i> From <i>Monascus purpureus</i>; blood cholesterol-lowering agent inhibiting HMG-CoA reductase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Explain the step-by-step mechanism of Sewage Treatment in Municipal STPs (Primary, Secondary, and Tertiary).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Primary Treatment (Physical):</b> Sequential filtration removes floating solid trash; sedimentation in settling tanks removes grit and pebbles. Settled solid is primary sludge; supernatant is primary effluent.<br/><br/><b style="color: #E040FB;">2. Secondary Treatment (Biological Aerobic):</b> Primary effluent pumped into large aeration tanks. Aerobic microbes form <b>flocs</b> (bacteria + fungal mesh) that digest organic pollutants, sharply lowering <b>BOD</b>. Effluent passes to secondary settling tank where flocs settle as <b>activated sludge</b>.<br/><br/><b style="color: #E040FB;">3. Anaerobic Sludge Digestion:</b> Activated sludge pumped to anaerobic digesters where methanogenic bacteria produce <b>Biogas</b> (Methane, CO_2, H_2S). Effluent is released into rivers (Ganga/Yamuna Action Plans).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Describe Biogas Generation: Microbial ecology, Biogas plant design (KVIC model), and Advantages.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Methanogenesis:</b> Methanogenic bacteria (<i>Methanobacterium</i>) grow anaerobically on cellulosic plant/cattle waste, producing biogas (50-70% Methane, 30-40%  CO_2, H_2, H_2S).<br/><br/><b style="color: #E040FB;">2. Biogas Plant Construction (KVIC/IARI):</b><br/>&bull; 10–15 ft deep concrete digester tank.<br/>&bull; Inlet tank for gobar-water slurry.<br/>&bull; Floating gas holder drum that rises as gas is generated.<br/>&bull; Outlet for spent slurry used as rich biofertilizer.<br/><br/><b style="color: #E040FB;">3. Advantages:</b> Clean, smokeless blue flame; high calorific value; eliminates firewood cutting and indoor smoke; provides pathogen-free organic manure.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain the concept of Biocontrol Agents and detailed mechanisms of <i>Bacillus thuringiensis</i>, <i>Trichoderma</i>, and Baculoviruses.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Biocontrol Concept:</b> Controlling plant pests using natural predators/parasites rather than toxic chemical pesticides.<br/><br/><b>2. <i>Bacillus thuringiensis</i> (Bt):</b> Produces crystalline Cry protoxin. Ingested by insect larvae &rarr; alkaline midgut pH dissolves crystals &rarr; active toxin binds epithelial receptors &rarr; forms membrane pores &rarr; cell lysis and larval death.<br/><br/><b>3. <i>Trichoderma</i>:</b> Free-living soil fungus that suppresses root pathogens by producing antifungal enzymes (chitinases) and competitive exclusion.<br/><br/><b style="color: #E040FB;">4. Baculoviruses (NPV):</b> Species-specific, narrow-spectrum insect pathogens ideal for Integrated Pest Management (IPM) without harming non-target organisms.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Discuss Biofertilizers: Nitrogen-fixing bacteria, Cyanobacteria, and Mycorrhizal fungi with their agronomic significance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Free-living N_2 Fixers:</b> <i>Azotobacter</i> and <i>Azospirillum</i> fix atmospheric nitrogen in soil and secrete plant growth hormones.<br/><br/><b style="color: #E040FB;">2. Symbiotic N_2 Fixers:</b> <i>Rhizobium</i> in legume root nodules converts atmospheric N_2 to nitrates.<br/><br/><b>3. Mycorrhiza (<i>Glomus</i>):</b> Symbiotic fungal association with roots; hyphae absorb phosphorus, confer root pathogen resistance, and increase drought/salinity tolerance.<br/><br/><b style="color: #E040FB;">4. Cyanobacteria:</b> <i>Anabaena</i>, <i>Nostoc</i>, <i>Oscillatoria</i>; <i>Anabaena azollae</i> in symbiosis with <i>Azolla</i> water fern serves as premier nitrogen biofertilizer in paddy fields.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain the development and mechanism of Bt Cotton in controlling Cotton Bollworms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Rationale:</b> Cotton bollworms (<i>Helicoverpa armigera</i>) cause severe damage to cotton bolls.<br/><br/><b style="color: #E040FB;">2. Genetic Engineering:</b> Isolated <i>cryIAc</i> and <i>cryIIAb</i> genes from <i>Bacillus thuringiensis</i> cloned into cotton genome using <i>Agrobacterium</i> vectors.<br/><br/><b style="color: #E040FB;">3. In Planta Expression:</b> Cotton plants synthesize inactive Cry protoxin.<br/><br/><b style="color: #E040FB;">4. Insecticidal Action:</b> Bollworm ingests cotton tissue &rarr; midgut alkaline pH activates toxin &rarr; binds epithelial cell membranes &rarr; pore formation &rarr; osmotic lysis &rarr; gut paralysis and death.<br/><br/><b style="color: #E040FB;">5. Benefits:</b> Reduces chemical pesticide spray by 80%, increases cotton yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Describe the application of RNA Interference (RNAi) in developing Nematode-Resistant Tobacco Plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Nematode Problem:</b> <i>Meloidogyne incognita</i> infects tobacco roots, forming root-knots and stunting plant growth.<br/><br/><b style="color: #E040FB;">2. RNAi Concept:</b> Cellular defense in eukaryotes where dsRNA triggers sequence-specific degradation of complementary target mRNA.<br/><br/><b style="color: #E040FB;">3. Methodology:</b> Nematode-specific genes inserted into tobacco genome via <i>Agrobacterium</i> vectors to produce both sense and antisense RNA.<br/><br/><b style="color: #E040FB;">4. Silencing:</b> Sense and antisense RNAs form double-stranded RNA (dsRNA) &rarr; cleaved into siRNAs by Dicer &rarr; incorporated into RISC complex &rarr; cleaves nematode mRNA. Ingested dsRNA silences essential nematode genes, killing the parasite.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Discuss Golden Rice, Flavr Savr Tomato, and other transgenic agricultural advancements.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Golden Rice:</b> Genetically engineered <i>Oryza sativa</i> containing phytoene synthase and carotene desaturase genes from daffodil (<i>Narcissus</i>); synthesizes &beta;-carotene in endosperm to combat Vitamin A deficiency and childhood blindness.<br/><br/><b style="color: #E040FB;">2. Flavr Savr Tomato:</b> Antisense RNA technology blocks polygalacturonase enzyme, delaying cell-wall breakdown and fruit softening, enhancing shelf life.<br/><br/><b style="color: #E040FB;">3. Herbicide-Tolerant Crops:</b> RoundUp Ready crops with bacterial EPSPS gene resisting glyphosate.<br/><br/><b style="color: #E040FB;">4. Abiotic Stress Resistance:</b> Transgenic crops engineered with osmoprotectant genes (proline/trehalose) resisting drought and salinity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Explain Biopiracy with case studies of Basmati Rice, Neem, and Turmeric, and discuss Indian Patent Laws.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Definition:</b> Exploitation of biological resources and traditional indigenous knowledge by multinational corporations without authorization or benefit-sharing.<br/><br/><b style="color: #E040FB;">2. Basmati Rice:</b> In 1997, US company RiceTec patented Basmati-derived rice lines. India challenged the patent using historical documentation, forcing revocation of critical patent claims.<br/><br/><b style="color: #E040FB;">3. Neem &amp; Turmeric:</b> US/European patents on antifungal neem extracts and wound-healing turmeric were successfully invalidated by CSIR India citing ancient Ayurvedic literature.<br/><br/><b style="color: #E040FB;">4. Protection &amp; Laws:</b> Indian Patent Act amendments, Traditional Knowledge Digital Library (TKDL), and National Biodiversity Authority (NBA).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain the role and responsibilities of GEAC (Genetic Engineering Appraisal Committee) and ethical issues of GMOs.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Role of GEAC:</b> Statutory body under MoEFCC responsible for reviewing safety of GM research and approving large-scale environmental and commercial release of GM crops (e.g., Bt Cotton, Bt Brinjal, GM Mustard).<br/><br/><b style="color: #E040FB;">2. Ethical Concerns:</b><br/>&bull; Ecological disruption (uncontrolled transgene flow to wild relatives, evolution of superweeds).<br/>&bull; Impact on non-target beneficial insects.<br/>&bull; Monopolistic control of seed market by corporate patent holders through terminator seed technology.<br/>&bull; Unintended allergenic effects in human consumers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Construct a comprehensive comparative matrix between Chemical Pesticides and Microbial Biopesticides.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Specificity:</b> Chemical pesticides are broad-spectrum, killing beneficial pollinators and predators; Biopesticides (Bt, NPV) are highly target-specific.<br/><b style="color: #E040FB;">2. Environmental Impact:</b> Chemicals cause bioaccumulation, soil toxicity, and water pollution; Biopesticides are biodegradable and eco-friendly.<br/><b style="color: #E040FB;">3. Pest Resistance:</b> Inset pests rapidly evolve resistance to chemicals; Resistance development against biocontrols is significantly slower.<br/><b style="color: #E040FB;">4. Cost &amp; Safety:</b> Chemicals pose acute toxicity hazards to farmers and consumers; Biopesticides are non-toxic to humans and wildlife.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain the production, harvesting, and therapeutic significance of Somatic Embryogenesis vs Organogenesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Organogenesis:</b> Unipolar shoot or root organ primordia develop from callus. Requires high cytokinin-to-auxin ratio for shoots, followed by auxin media for rooting.<br/><br/><b style="color: #E040FB;">2. Somatic Embryogenesis:</b> Bipolar embryos (possessing both shoot and root poles) differentiate directly from somatic cells in a single developmental step without vascular connection to callus.<br/><br/><b style="color: #E040FB;">3. Synthetic Seeds:</b> Somatic embryos encapsulated in calcium alginate hydrogel beads can be stored and sown directly as synthetic seeds in fields.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Describe how Microbes solve Energy and Environmental Pollution crises simultaneously.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Biogas Energy:</b> Anaerobic methanogenesis converts agricultural and cattle manure into renewable, clean fuel, replacing fossil fuels and preventing deforestation.<br/><br/><b style="color: #E040FB;">2. Wastewater Treatment:</b> Aerobic and anaerobic microbial consortia in STPs digest millions of liters of toxic sewage, reducing BOD and restoring river ecosystems.<br/><br/><b style="color: #E040FB;">3. Solid Waste Composting:</b> Microbes convert biodegradable urban waste into nutrient-rich organic compost.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Detail the production of Single Cell Protein (SCP) using Microbes (<i>Spirulina</i>, <i>Methylophilus</i>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Concept:</b> Biomass of single or multicellular microorganisms used as protein-rich food/feed supplements.<br/><br/><b>2. <i>Spirulina</i>:</b> Blue-green alga cultivated easily on potato-processing wastewater, molasses, animal manure; rich in proteins (60-70%), vitamins, and minerals; reduces environmental pollution.<br/><br/><b>3. <i>Methylophilus methylotrophus</i>:</b> Bacterium with high growth rate; 250 g of biomass can produce 25 tonnes of protein per day due to high protein synthesis rate, providing an alternative to meat.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain the mechanism of Action of Statins and Cyclosporin A with biochemical pathways.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. Statins (<i>Monascus purpureus</i>):</b> Competitively inhibit <b>HMG-CoA reductase</b>, the rate-limiting enzyme in hepatic cholesterol biosynthesis. Lowers serum LDL cholesterol, preventing atherosclerosis and heart attacks.<br/><br/><b>2. Cyclosporin A (<i>Trichoderma polysporum</i>):</b> Inhibits <b>calcineurin phosphatase</b>, blocking transcription of interleukin-2 (IL-2) in T-lymphocytes. Suppresses cell-mediated immune response, preventing rejection of transplanted kidneys and hearts.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Discuss the historical milestones in Antibiotic discovery and the modern threat of Antimicrobial Resistance (AMR).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Discovery:</b> Alexander Fleming (1928, Penicillin), Chain &amp; Florey (1940, therapeutic purification), Waksman (1943, Streptomycin from <i>Streptomyces</i>).<br/><br/><b style="color: #E040FB;">2. Judicious Use &amp; AMR Threat:</b> Overuse and incomplete courses of antibiotics select for resistant bacterial strains (Superbugs e.g., MRSA, MDR-TB) via R-plasmids.<br/><br/><b style="color: #E040FB;">3. Prevention:</b> Strict medical prescription, avoiding antibiotics for viral colds, and development of novel narrow-spectrum antimicrobials.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct a Master Flowchart and Summary Table connecting Tissue Culture, Microbial Biotechnology, and Transgenic Agriculture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #E040FB;">1. Tissue Culture:</b> Micropropagation &rarr; Somaclones &rarr; Meristem culture (Virus-free) &rarr; Protoplast fusion (Pomato).<br/><b style="color: #E040FB;">2. Industrial Microbes:</b> LAB (Curd), <i>Saccharomyces</i> (Bread/Beer), <i>Penicillium</i> (Penicillin), <i>Streptococcus</i> (Clot buster), <i>Trichoderma</i> (Cyclosporin A), <i>Monascus</i> (Statins).<br/><b style="color: #E040FB;">3. Environmental Biotechnology:</b> STPs (Primary &rarr; Secondary Flocs &rarr; Anaerobic Digester &rarr; Biogas).<br/><b style="color: #E040FB;">4. Transgenic Agriculture:</b> Bt Cotton (<i>cryIAc, cryIIAb</i> bollworm control), RNAi Tobacco (<i>Meloidogyne</i> control), Golden Rice (Vitamin A).<br/><b style="color: #E040FB;">5. Biosafety &amp; Ethics:</b> GEAC regulation, Patent laws, Biopiracy prevention.
    </div>
  </div>

</div>
`;

export const c12Bot3Mcqs = [
  {
    "id": "c12-bot-3-mcq-1",
    "question": "The inherent genetic capacity of a single plant cell to regenerate into a whole complete plant is termed:",
    "options": [
      "A):   Pleiotropy",
      "B):   Cellular Totipotency",
      "C):   Parthenogenesis",
      "D):   Apomixis"
    ],
    "correctAnswer": "b",
    "explanation": "Cellular totipotency is the intrinsic capability of a plant cell to divide, differentiate, and regenerate an entire plant under sterile in vitro conditions."
  },
  {
    "id": "c12-bot-3-mcq-2",
    "question": "Which plant part is cultivated to produce 100% virus-free plants from a virus-infected stock?",
    "options": [
      "A):   Shoot apical meristem",
      "B):   Leaf lamina",
      "C):   Pollen grain",
      "D):   Secondary xylem"
    ],
    "correctAnswer": "a",
    "explanation": "Apical and axillary shoot meristems are free from viruses due to rapid cell division and high auxin concentration, making meristem culture ideal for obtaining virus-free plants."
  },
  {
    "id": "c12-bot-3-mcq-3",
    "question": "The chemical agent commonly used to induce fusion of naked plant protoplasts in somatic hybridization is:",
    "options": [
      "A):   Colchicine",
      "B):   Sodium chloride",
      "C):   Polyethylene Glycol (PEG)",
      "D):   Agar-agar"
    ],
    "correctAnswer": "c",
    "explanation": "Polyethylene Glycol (PEG) acts as a chemical fusogen that facilitates protoplast membrane fusion during somatic hybridization."
  },
  {
    "id": "c12-bot-3-mcq-4",
    "question": "Lactic Acid Bacteria (LAB) improve the nutritional value of milk upon converting it to curd by increasing the content of:",
    "options": [
      "A):   Vitamin C",
      "B):   Vitamin D",
      "C):   Vitamin B12",
      "D):   Vitamin A"
    ],
    "correctAnswer": "c",
    "explanation": "LAB ferments lactose into lactic acid, coagulating milk protein while significantly enhancing Vitamin B12 content."
  },
  {
    "id": "c12-bot-3-mcq-5",
    "question": "The large holes in Swiss cheese are produced due to the release of large volumes of CO2 by:",
    "options": [
      "A):   <i>Propionibacterium shermanii</i>",
      "B):   <i>Penicillium roqueforti</i>",
      "C):   <i>Saccharomyces cerevisiae</i>",
      "D):   <i>Lactobacillus</i>"
    ],
    "correctAnswer": "a",
    "explanation": "<i>Propionibacterium freudenreichii / shermanii</i> produces large amounts of carbon dioxide gas during ripening, creating characteristic large holes in Swiss cheese."
  },
  {
    "id": "c12-bot-3-mcq-6",
    "question": "The first commercially discovered antibiotic Penicillin was isolated by Alexander Fleming from:",
    "options": [
      "A):   <i>Streptomyces griseus</i>",
      "B):   <i>Penicillium notatum</i>",
      "C):   <i>Aspergillus niger</i>",
      "D):   <i>Bacillus subtilis</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Alexander Fleming discovered penicillin in 1928 as an antibacterial secretion from the mold <i>Penicillium notatum</i>."
  },
  {
    "id": "c12-bot-3-mcq-7",
    "question": "Citric acid is commercially produced through microbial fermentation using the fungus:",
    "options": [
      "A):   <i>Acetobacter aceti</i>",
      "B):   <i>Clostridium butyricum</i>",
      "C):   <i>Aspergillus niger</i>",
      "D):   <i>Trichoderma polysporum</i>"
    ],
    "correctAnswer": "c",
    "explanation": "The fungus <i>Aspergillus niger</i> is utilized for the industrial production of citric acid."
  },
  {
    "id": "c12-bot-3-mcq-8",
    "question": "Which enzyme is modified by genetic engineering and used clinically as a 'clot buster' for heart attack patients?",
    "options": [
      "A):   Lipase",
      "B):   Pectinase",
      "C):   DNA Polymerase",
      "D):   Streptokinase"
    ],
    "correctAnswer": "d",
    "explanation": "Streptokinase produced by <i>Streptococcus</i> bacteria dissolves intravascular blood clots in myocardial infarction patients."
  },
  {
    "id": "c12-bot-3-mcq-9",
    "question": "The bioactive immunosuppressive drug Cyclosporin A is produced by which microbial fungus?",
    "options": [
      "A):   <i>Trichoderma polysporum</i>",
      "B):   <i>Monascus purpureus</i>",
      "C):   <i>Penicillium chrysogenum</i>",
      "D):   <i>Neurospora crassa</i>"
    ],
    "correctAnswer": "a",
    "explanation": "Cyclosporin A is an immunosuppressive drug obtained from the fungus <i>Trichoderma polysporum</i> used to prevent organ rejection."
  },
  {
    "id": "c12-bot-3-mcq-10",
    "question": "Statins, which lower blood cholesterol by competitively inhibiting HMG-CoA reductase, are extracted from the yeast:",
    "options": [
      "A):   <i>Saccharomyces cerevisiae</i>",
      "B):   <i>Monascus purpureus</i>",
      "C):   <i>Candida albicans</i>",
      "D):   <i>Methanobacterium</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Statins are produced by the yeast <i>Monascus purpureus</i> and act as competitive inhibitors of the cholesterol-synthesizing enzyme HMG-CoA reductase."
  },
  {
    "id": "c12-bot-3-mcq-11",
    "question": "During secondary sewage treatment, 'flocs' are structurally composed of:",
    "options": [
      "A):   Anaerobic bacteria and viruses",
      "B):   Aerobic bacteria intertwined with fungal filaments",
      "C):   Methanogenic bacteria and algae",
      "D):   Cyanobacteria and protozoans"
    ],
    "correctAnswer": "b",
    "explanation": "Flocs are mesh-like colonies of aerobic bacteria associated with fungal filaments that rapidly digest organic pollutants in aeration tanks."
  },
  {
    "id": "c12-bot-3-mcq-12",
    "question": "A high value of Biochemical Oxygen Demand (BOD) in a water sample indicates:",
    "options": [
      "A):   Water is pure and highly potable",
      "B):   Water is heavily polluted with organic matter",
      "C):   Water has high dissolved oxygen concentration",
      "D):   Water contains zero microbial activity"
    ],
    "correctAnswer": "b",
    "explanation": "High BOD means that microbes require high amounts of oxygen to decompose excessive organic matter, indicating severe water pollution."
  },
  {
    "id": "c12-bot-3-mcq-13",
    "question": "The inflammable gas generated in anaerobic sludge digesters and cattle rumen mainly consists of:",
    "options": [
      "A):   50-70\% Methane + CO_2",
      "B):   90\% Nitrogen + Oxygen",
      "C):   100\% Hydrogen sulfide",
      "D):   Carbon monoxide + Helium"
    ],
    "correctAnswer": "a",
    "explanation": "Biogas generated by methanogens contains 50–70% Methane (CH_4), 30–40% CO_2, and traces of H_2 and H_2S."
  },
  {
    "id": "c12-bot-3-mcq-14",
    "question": "Which insect predator is widely used as a biological control agent against crop aphids?",
    "options": [
      "A):   Dragonfly",
      "B):   Ladybird beetle",
      "C):   Pronuba moth",
      "D):   Silkworm"
    ],
    "correctAnswer": "b",
    "explanation": "Ladybird beetles with distinctive red and black markings are voracious predators of destructive agricultural aphids."
  },
  {
    "id": "c12-bot-3-mcq-15",
    "question": "Baculoviruses belonging to the genus <i>Nucleopolyhedrovirus</i> (NPV) are prized in biocontrol because they are:",
    "options": [
      "A):   Broad-spectrum agents killing all insects and birds",
      "B):   Species-specific and narrow-spectrum with no harm to non-target organisms",
      "C):   Chemical pesticides toxic to mammals",
      "D):   Soil-borne root rot fungi"
    ],
    "correctAnswer": "b",
    "explanation": "Baculoviruses are narrow-spectrum, species-specific pathogens that kill target arthropods without harming beneficial insects, birds, fish, or mammals."
  },
  {
    "id": "c12-bot-3-mcq-16",
    "question": "Mycorrhizal associations formed by the fungal genus <i>Glomus</i> assist host plants predominantly in absorbing:",
    "options": [
      "A):   Nitrogen",
      "B):   Phosphorus",
      "C):   Potassium",
      "D):   Calcium"
    ],
    "correctAnswer": "b",
    "explanation": "Mycorrhizal fungi absorb phosphorus from soil and transfer it to the host plant while providing resistance against root-borne pathogens."
  },
  {
    "id": "c12-bot-3-mcq-17",
    "question": "Which symbiotic cyanobacterium associated with the aquatic water fern <i>Azolla</i> serves as a prime biofertilizer in paddy fields?",
    "options": [
      "A):   <i>Anabaena azollae</i>",
      "B):   <i>Rhizobium leguminosarum</i>",
      "C):   <i>Azotobacter</i>",
      "D):   <i>Frankia</i>"
    ],
    "correctAnswer": "a",
    "explanation": "<i>Anabaena azollae</i> fixes atmospheric nitrogen within the cavities of <i>Azolla</i> fronds, widely boosting soil nitrogen in rice fields."
  },
  {
    "id": "c12-bot-3-mcq-18",
    "question": "The Bt toxin protein produced by <i>Bacillus thuringiensis</i> is converted from inactive protoxin to active toxin inside the insect gut due to:",
    "options": [
      "A):   Acidic pH of insect stomach",
      "B):   Alkaline pH of insect midgut",
      "C):   High body temperature of insect",
      "D):   Presence of salivary amylase"
    ],
    "correctAnswer": "b",
    "explanation": "The alkaline pH (pH > 8.5) in the insect midgut solubilizes Cry protein crystals, activating the toxin to bind epithelial receptors and form lethal pores."
  },
  {
    "id": "c12-bot-3-mcq-19",
    "question": "The specific genes that encode toxins to control Cotton Bollworms in transgenic Bt Cotton are:",
    "options": [
      "A):   <i>cryIAb</i> only",
      "B):   <i>cryIAc</i> and <i>cryIIAb</i>",
      "C):   <i>lacZ</i> and <i>lacY</i>",
      "D):   <i>pBR322</i> and <i>Ti</i> gene"
    ],
    "correctAnswer": "b",
    "explanation": "The <i>cryIAc</i> and <i>cryIIAb</i> genes control cotton bollworms, while <i>cryIAb</i> controls corn borer."
  },
  {
    "id": "c12-bot-3-mcq-20",
    "question": "In RNA interference (RNAi), cellular defense involves silencing of specific mRNA initiated by:",
    "options": [
      "A):   Single-stranded DNA",
      "B):   Double-stranded RNA (dsRNA)",
      "C):   tRNA molecules",
      "D):   Lipopolysaccharides"
    ],
    "correctAnswer": "b",
    "explanation": "RNAi is triggered by double-stranded RNA (dsRNA), which is processed into siRNAs to guide the RISC complex to cleave and silence complementary mRNA."
  },
  {
    "id": "c12-bot-3-mcq-21",
    "question": "Golden Rice is a genetically modified crop engineered to synthesize high levels of:",
    "options": [
      "A):   Vitamin C",
      "B):   Iron and Zinc",
      "C):   Provitamin A (\&beta;-carotene)",
      "D):   Essential amino acid Lysine"
    ],
    "correctAnswer": "c",
    "explanation": "Golden Rice is genetically engineered with daffodil genes to produce \&beta;-carotene (provitamin A) in the grain endosperm to prevent night blindness."
  },
  {
    "id": "c12-bot-3-mcq-22",
    "question": "The root-knot nematode that severely infests tobacco roots and was countered using RNAi technology is:",
    "options": [
      "A):   <i>Wuchereria bancrofti</i>",
      "B):   <i>Ascaris lumbricoides</i>",
      "C):   <i>Meloidogyne incognita</i>",
      "D):   <i>Ancylostoma duodenale</i>"
    ],
    "correctAnswer": "c",
    "explanation": "<i>Meloidogyne incognita</i> infects roots of tobacco plants, and was controlled by introducing nematode-specific dsRNA-producing genes via <i>Agrobacterium</i>."
  },
  {
    "id": "c12-bot-3-mcq-23",
    "question": "In India, the apex statutory committee responsible for approving the environmental release of genetically modified organisms is:",
    "options": [
      "A):   ICAR",
      "B):   CSIR",
      "C):   GEAC (Genetic Engineering Appraisal Committee)",
      "D):   WHO"
    ],
    "correctAnswer": "c",
    "explanation": "The Genetic Engineering Appraisal Committee (GEAC) under MoEFCC evaluates the safety and commercial release of GM crops in India."
  },
  {
    "id": "c12-bot-3-mcq-24",
    "question": "In 1997, a patent on Indian Basmati rice was controversially granted by the US Patent Office to the American company:",
    "options": [
      "A):   Monsanto",
      "B):   RiceTec Inc.",
      "C):   DuPont",
      "D):   Bayer CropScience"
    ],
    "correctAnswer": "b",
    "explanation": "RiceTec Inc. obtained a US patent on Basmati rice lines, which was challenged and invalidated after India proved traditional geographical heritage."
  },
  {
    "id": "c12-bot-3-mcq-25",
    "question": "Which of the following organic acids is produced by an aerobic bacterium?",
    "options": [
      "A):   Citric acid",
      "B):   Acetic acid",
      "C):   Lactic acid",
      "D):   Butyric acid"
    ],
    "correctAnswer": "b",
    "explanation": "Acetic acid is produced by the aerobic bacterium <i>Acetobacter aceti</i>."
  }
];
