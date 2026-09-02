// Class 12 Botany Chapter 1: Reproduction in Flowering Plants
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Botany | Class: 12 | Code: c12-bot-1

export const c12Bot1HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.12), rgba(17, 153, 142, 0.12)); border: 1.5px solid rgba(0, 230, 118, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 12px 0; font-size: 17.5px; font-weight: bold; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📖</span> Quick Glossary &amp; Essential Terminology
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Sporopollenin:</b> Most resistant organic material known; forms the outer layer (exine) of pollen grains; withstands high temperatures, strong acids, alkalis, and enzymatic degradation.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Tapetum (2n/polyploid):</b> Innermost multinucleated nutritive layer of the anther wall that nourishes developing microspores and synthesizes Ubisch bodies &amp; pollenkitt.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Filiform Apparatus:</b> Finger-like special cellular thickenings at the micropylar tip of synergids that guide the chemical entry of pollen tube into the embryo sac.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Double Fertilization:</b> Characteristic phenomenon of angiosperms where syngamy (male gamete + egg &rarr; 2n zygote) and triple fusion (male gamete + 2 polar nuclei &rarr; 3n PEN) occur simultaneously.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Scutellum:</b> Single, thin, shield-shaped cotyledon situated laterally on the embryonal axis in monocotyledonous seeds (grasses).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E676;">Apomixis:</b> Form of asexual reproduction that mimics sexual reproduction by producing viable seeds without fertilization and meiosis.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Flower Structure &amp; Morphological Adaptations
  </h2>
  <p>
    Flowers represent the supreme reproductive organ of angiosperms. Morphologically, a flower is a modified, condensed vegetative shoot characterized by determinate growth where the apical meristem ceases vegetative elongation to produce specialized floral appendages arranged in concentric whorls upon a swollen stem apex termed the <b>thalamus (receptacle)</b>.
  </p>
  <p>
    A complete, typical angiospermic flower comprises four concentric whorls:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">(i) Calyx (Non-essential/Accessory whorl):</b> Outermost whorl composed of sepals. Usually green, foliaceous, and functions primarily to protect delicate inner floral organs during the critical bud stage.</li>
    <li><b style="color: #00E676;">(ii) Corolla (Non-essential/Accessory whorl):</b> Second whorl composed of petals. Frequently brightly pigmented and fragrant to visually attract biotic pollinating agents.</li>
    <li><b style="color: #00E676;">(iii) Androecium (Essential/Reproductive whorl):</b> Male reproductive system consisting of a collective group of stamens (microsporophylls).</li>
    <li><b style="color: #00E676;">(iv) Gynoecium / Pistil (Essential/Reproductive whorl):</b> Innermost female reproductive organ consisting of one or more carpels (megasporophylls).</li>
  </ul>

  <!-- SECTION 2 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Development of Male Gametophyte (Microsporogenesis &amp; Microgametogenesis)
  </h2>
  
  <h3 style="color: #00E676; margin-top: 18px; font-size: 16.5px;">(i) Structure of Stamen and Microsporangium (Anther)</h3>
  <p>
    A typical stamen exhibits two morphologically distinct regions: a slender, proximal stalk termed the <b>filament</b> (attached at its proximal end to the thalamus or petal) and a terminal, fertile, usually bilobed structure known as the <b>anther</b>. A characteristic angiospermic anther is <b>bilobed and dithecous</b> (each lobe possessing two distinct microsporangia/thecae separated by a longitudinal groove), making the mature anther <b>tetrasporangiate</b> (four microsporangia located at the corners).
  </p>
  
  <p>
    In a transverse section, a young developing microsporangium appears nearly circular and is delimited by four distinct concentric wall layers:
  </p>

  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <h4 style="color: #00E676; margin: 0 0 10px 0; font-size: 15.5px;">Microsporangial Wall Layers (From Exterior to Interior):</h4>
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E676;">Epidermis:</b> Outermost single layer of protective, tangentially flattened cells.</li>
      <li><b style="color: #00E676;">Endothecium:</b> Sub-epidermal layer possessing characteristic radial fibrous thickenings composed of &alpha;-cellulose. These cells are hygroscopic; upon maturity and moisture loss, they develop differential mechanical tension that causes anther dehiscence along the <i>stomium</i> (line of dehiscence).</li>
      <li><b style="color: #00E676;">Middle Layers:</b> 1 to 3 ephemeral cellular layers located beneath the endothecium. They store starch and nutrients, which are crushed and consumed by the actively expanding tapetum and sporogenous tissue.</li>
      <li><b style="color: #00E676;">Tapetum:</b> Innermost physiological wall layer in direct contact with developing sporogenous cells. Characterized by dense cytoplasm, prominent polyploid or multinucleate condition (due to endomitosis), and high metabolic activity. Functions include:
        <ul style="margin-top: 4px;">
          <li>Providing nourishing metabolites to developing microspores.</li>
          <li>Secreting callase enzyme to dissolve callose wall enclosing microspore tetrads.</li>
          <li>Synthesizing <i>Ubisch bodies</i> (pro-sporopollenin granules) essential for exine construction.</li>
          <li>Producing <i>pollenkitt</i> (an oily, carotenoid-rich sticky layer in entomophilous species).</li>
        </ul>
      </li>
    </ol>
  </div>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(ii) Microsporogenesis</h3>
  <p>
    At the core of each microsporangium lies homogeneous <b>sporogenous tissue</b>. As the anther expands, each diploid sporogenous cell differentiates into a potential <b>Pollen Mother Cell (PMC)</b> or <b>Microspore Mother Cell (MMC)</b> (2n). The MMC undergoes meiosis (reduction division) to generate a cluster of four haploid microspores termed a <b>microspore tetrad</b> (usually arranged in a tetrahedral or isobilateral geometry). As the anther matures and dehydrates, the callose wall is enzymatically digested, releasing individual microspores that develop into mature <b>pollen grains</b>.
  </p>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(iii) Pollen Grain Architecture &amp; Male Gametogenesis</h3>
  <p>
    The pollen grain represents the highly reduced, immature male gametophyte. It is typically spherical, measuring 25 to 50 &mu;m in diameter, surrounded by a two-layered wall termed the <b>sporoderm</b>:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Exine (Outer hard wall):</b> Composed of <b>sporopollenin</b>, an extremely resistant biopolymer of oxidative carotenoids. It is impervious to enzymatic breakdown, strong acids, concentrated alkalis, and extreme temperatures, allowing fossilization of pollen grains. Prominent aperture regions where sporopollenin is absent are called <b>germ pores</b> (1 in monocots, 3 in dicots), through which the pollen tube emerges.</li>
    <li><b style="color: #00E676;">Intine (Inner delicate wall):</b> Thin, continuous layer composed of <b>cellulose and pectin</b>.</li>
  </ul>

  <p>
    <b style="color: #00E676;">Development of Male Gametes:</b> The haploid nucleus of the microspore undergoes an asymmetric mitotic division, yielding two unequal cells:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Vegetative Cell (Tube Cell):</b> Large, containing abundant cytoplasmic food reserves and an irregularly shaped nucleus. It directs metabolic growth and subsequent elongation of the pollen tube.</li>
    <li><b style="color: #00E676;">Generative Cell:</b> Small, spindle-shaped cell with dense cytoplasm and a prominent nucleus that floats within the cytoplasm of the vegetative cell.</li>
  </ul>

  <div style="background: rgba(0, 230, 118, 0.08); border-left: 4px solid #00E676; padding: 12px 16px; margin: 16px 0; border-radius: 0 8px 8px 0;">
    <b style="color: #00E676;">Shedding Stages:</b> In over <b>60% of angiosperms</b>, pollen grains are shed at the <b>2-celled stage</b> (vegetative cell + generative cell). In the remaining ~40%, the generative cell undergoes an additional mitotic division to form two non-motile male gametes prior to shedding (<b>3-celled stage</b>).
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Development of Female Gametophyte (Megasporogenesis &amp; Megagametogenesis)
  </h2>

  <h3 style="color: #00E676; margin-top: 18px; font-size: 16.5px;">(i) Structure of Megasporangium (Typical Anatropous Ovule)</h3>
  <p>
    The gynoecium consists of one (monocarpellary) or multiple (multicarpellary) carpels, which may be free (<b>apocarpous</b>, e.g., <i>Michelia</i>) or fused (<b>syncarpous</b>, e.g., <i>Papaver</i>). Each carpel comprises three functional segments: the terminal receptive <b>stigma</b>, the elongated conduit <b>style</b>, and the basal swollen <b>ovary</b> containing one or more ovules attached to an internal cushion called the <b>placenta</b>.
  </p>
  <p>
    A standard angiospermic ovule is <b>anatropous</b> (inverted by 180&deg; so that the micropyle lies close to the funicle base). Its key anatomical parts include:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Funicle (Funiculus):</b> Stalk by which the ovule is attached to the placenta.</li>
    <li><b style="color: #00E676;">Hilum:</b> Junction point where the body of the ovule fuses with the funicle.</li>
    <li><b style="color: #00E676;">Integuments:</b> One (unitegmic) or two (bitegmic) protective cellular envelopes encircling the central nucellus, except at the apex where a narrow pore called the <b>micropyle</b> is left.</li>
    <li><b style="color: #00E676;">Chalaza:</b> Basal region opposite the micropylar end, representing the structural origin of integuments.</li>
    <li><b style="color: #00E676;">Nucellus:</b> Central parenchymatous mass of nutritive tissue enclosing the embryo sac.</li>
  </ul>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(ii) Megasporogenesis &amp; Monosporic Embryo Sac Development</h3>
  <p>
    A single hypodermal cell in the micropylar region of the nucellus differentiates into a prominent <b>Megaspore Mother Cell (MMC)</b> (2n). The MMC undergoes meiosis to produce a linear tetrad of four haploid megaspores. In the vast majority of angiosperms (<b>Polygonum type / monosporic development</b>):
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li>The <b>three megaspores situated toward the micropylar end degenerate</b> and are absorbed as nutrition.</li>
    <li>Only the single <b>chalazal megaspore remains functional (n)</b>.</li>
  </ul>

  <p>
    <b style="color: #00E676;">Megagametogenesis (Embryo Sac Formation):</b>
    The functional megaspore nucleus undergoes <b>three sequential, strictly free-nuclear mitotic divisions</b>:
  </p>
  <ol style="padding-left: 20px; line-height: 1.8;">
    <li>1st Mitosis &rarr; 2 nuclei, which migrate toward opposite poles (1 micropylar, 1 chalazal).</li>
    <li>2nd Mitosis &rarr; 4 nuclei (2 at each pole).</li>
    <li>3rd Mitosis &rarr; 8 nuclei (4 at micropylar pole, 4 at chalazal pole).</li>
  </ol>
  <p>
    Following nuclear division, cytokinesis occurs and cell walls are laid down, resulting in the mature <b>7-celled, 8-nucleate female gametophyte (Embryo Sac)</b>:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Egg Apparatus (3 cells at micropylar end):</b> Comprises one central <b>haploid egg cell (female gamete)</b> and two flanking <b>synergids</b>. The synergids bear prominent finger-like cytoplasmic thickenings termed the <b>filiform apparatus</b>, which secretes chemotropic substances to guide the pollen tube tip into the embryo sac.</li>
    <li><b style="color: #00E676;">Antipodal Cells (3 cells at chalazal end):</b> Three haploid vegetative cells that provide early nourishment and subsequently degenerate.</li>
    <li><b style="color: #00E676;">Central Cell (1 massive binucleate cell):</b> Largest cell containing two haploid <b>polar nuclei</b> that eventually fuse to form a diploid secondary nucleus before fertilization.</li>
  </ul>

  <!-- SECTION 4 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Pollination: Mechanisms, Ecological Types &amp; Agencies
  </h2>
  <p>
    Pollination is the physical transfer of pollen grains from the dehiscing anther of a stamen to the receptive stigma of a pistil. Depending on the genetic source of pollen, pollination is classified into three categories:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">1. Autogamy (Self-Pollination):</b> Transfer of pollen from anther to stigma of the <i>same flower</i>. Requires perfect synchrony in pollen release and stigma receptivity, as well as close proximity between anther and stigma.
      <br/><b style="color: #00E676;">Chasmogamous vs Cleistogamous Flowers:</b> Plants like <i>Viola</i> (common pansy), <i>Oxalis</i>, and <i>Commelina</i> produce two flower types:
      <ul style="margin-top: 4px;">
        <li><i>Chasmogamous flowers:</i> Exposed anthers and stigmas; open normally like typical flowers.</li>
        <li><i>Cleistogamous flowers:</i> Never open at all. Anthers dehisce directly over the stigma inside the closed flower bud, ensuring 100% assured seed set even in the total absence of pollinators, without genetic variation.</li>
      </ul>
    </li>
    <li><b style="color: #00E676;">2. Geitonogamy:</b> Transfer of pollen grains from the anther of one flower to the stigma of <i>another flower on the same plant</i>. Functionally it is cross-pollination (requires a pollinating agent), but genetically it is equivalent to autogamy because pollen comes from the same genetic individual.</li>
    <li><b style="color: #00E676;">3. Xenogamy (Allogamy / Cross-Pollination):</b> Transfer of pollen from anther to the stigma of a <i>flower on a genetically distinct plant of the same species</i>. This is the only type of pollination that introduces novel genetic variations and recombination into the progeny.</li>
  </ul>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">Pollinating Agencies &amp; Co-evolutionary Adaptations</h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E676; margin: 0 0 8px 0; font-size: 15.5px;">💨 Anemophily (Wind Pollination)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Flowers are inconspicuous, non-scented, and lack nectar. Pollen grains are lightweight, dry, non-sticky, and produced in enormous quantities. Stamens are well-exposed on long filaments. Stigmas are large, branched, and feathery to efficiently catch airborne pollen. Usually single ovule per ovary (e.g., Grasses, Corn cob with prominent tassels representing styles and stigmas).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E676; margin: 0 0 8px 0; font-size: 15.5px;">💧 Hydrophily (Water Pollination)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Rare, limited to ~30 monocotyledonous genera. 
        <br/><b style="color: #00E676;">Epihydrophily (Surface):</b> In <i>Vallisneria</i>, female flowers reach the water surface by long coiled stalks; detached male flowers release buoyant pollen onto the water surface.
        <br/><b style="color: #00E676;">Hypohydrophily (Submerged):</b> In <i>Zostera</i> (sea grass), long ribbon-like pollen grains lack exine and are covered by mucilage to prevent wetting as they drift beneath the surface.
        <br/><i>Note: Aquatic plants like Water Hyacinth and Water Lily are pollinated by insects or wind above water level!</i>
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E676; margin: 0 0 8px 0; font-size: 15.5px;">🐝 Entomophily &amp; Biotic Pollination</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Bees account for ~80% of biotic pollination. Flowers are large, brightly colored, fragrant, and rich in nectar/pollen rewards. Sticky pollen grains are coated with <i>pollenkitt</i>.
        <br/><b style="color: #00E676;">Obligate Mutualism:</b> <i>Yucca</i> plant and <i>Pronuba</i> moth cannot complete their life cycles without each other; the moth deposits eggs in the ovarian locule while pollinating the flower, and moth larvae consume a fraction of developing seeds.
      </p>
    </div>
  </div>

  <!-- SECTION 5 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Outbreeding Devices (Contrivances to Prevent Inbreeding Depression)
  </h2>
  <p>
    Continuous self-pollination leads to <b>inbreeding depression</b>, manifested by reduced fertility, loss of hybrid vigor, and expression of deleterious recessive alleles. Angiosperms have evolved five major outbreeding adaptations to promote cross-pollination:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">(i) Dichogamy (Temporal Separation):</b> Pollen release and stigma receptivity are non-synchronized.
      <br/>&bull; <i>Protandry:</i> Anthers dehisce and shed pollen before stigma matures (e.g., Sunflower, <i>Salvia</i>).
      <br/>&bull; <i>Protogyny:</i> Stigma becomes receptive before anthers mature (e.g., <i>Mirabilis</i>, <i>Aristolochia</i>).
    </li>
    <li><b style="color: #00E676;">(ii) Herkogamy (Spatial Barrier):</b> Morphological separation between anther and stigma prevents self-pollination (e.g., in <i>Calotropis</i>, pollen grains form aggregated masses called <i>pollinia</i> requiring specialized insect mechanics).</li>
    <li><b style="color: #00E676;">(iii) Heterostyly:</b> Styles and stamens are placed at different heights in different flowers of the same species (e.g., <i>Primula</i> with pin-eyed long styled and thrum-eyed short styled flowers).</li>
    <li><b style="color: #00E676;">(iv) Self-Incompatibility (Genetic Checkpoint):</b> Genetically controlled physiological mechanism (mediated by multiple <i>S-alleles</i>) that inhibits pollen germination or pollen tube growth in the pistil if pollen arrives from the same flower or other flowers of the same plant.</li>
    <li><b style="color: #00E676;">(v) Dicliny / Unisexuality:</b>
      <br/>&bull; <i>Monoecious species (e.g., Castor, Maize):</i> Male and female flowers on same plant; prevents autogamy but allows geitonogamy.
      <br/>&bull; <i>Dioecious species (e.g., Papaya, Date Palm):</i> Male and female flowers on separate individual plants; completely prevents both autogamy and geitonogamy.
    </li>
  </ul>

  <!-- SECTION 6 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    6. Pollen-Pistil Interaction &amp; Artificial Hybridization
  </h2>
  <p>
    Pollen-pistil interaction comprises a dynamic, biochemical dialogue starting from pollen deposition on the stigma up to the entry of the pollen tube into the ovule:
  </p>
  <ol style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Pollen Recognition:</b> Pistil evaluates compatibility via specific protein-ligand interactions. If compatible, the stigma hydrates the pollen grain; if incompatible, callose deposition blocks hydration.</li>
    <li><b style="color: #00E676;">Pollen Tube Germination:</b> The intine emerges through a germ pore, forming a pollen tube. The tube grows through the transmitting tissue of the style via chemotropic guidance (calcium-boron-inositol gradients) and pectinase/cellulase digestion.</li>
    <li><b style="color: #00E676;">Entry into Ovule:</b>
      <br/>&bull; <i>Porogamy:</i> Tube enters through the micropyle (most common in angiosperms).
      <br/>&bull; <i>Chalazogamy:</i> Tube enters through the chalaza (e.g., <i>Casuarina</i>).
      <br/>&bull; <i>Mesogamy:</i> Tube enters through the integuments (e.g., <i>Cucurbita</i>).
    </li>
    <li><b style="color: #00E676;">Entry into Embryo Sac:</b> Pollen tube penetrates into one of the degenerating synergids guided by the <b>filiform apparatus</b>, ruptures at its sub-terminal pore, and discharges both male gametes into the cytoplasm of the synergid.</li>
  </ol>

  <div style="background: rgba(15, 23, 42, 0.7); border: 1.5px solid rgba(0, 230, 118, 0.3); border-radius: 10px; padding: 14px 18px; margin: 18px 0;">
    <h4 style="color: #00E676; margin: 0 0 8px 0; font-size: 16px;">🌱 Artificial Hybridization Protocol</h4>
    <p style="margin: 0; font-size: 14px; line-height: 1.6;">
      Key technique in crop improvement to combine desired agronomic traits:
      <br/>1. <b style="color: #00E676;">Emasculation:</b> Surgical excision of anthers from bisexual female parent flower buds using sterile forceps before anthesis. (Not required if female parent produces unisexual female flowers).
      <br/>2. <b style="color: #00E676;">Bagging:</b> Emasculated flowers are immediately sealed with butter-paper bags to prevent contamination from airborne unwanted pollen.
      <br/>3. <b style="color: #00E676;">Dusting &amp; Re-bagging:</b> When the stigma becomes receptive, mature pollen from selected male parent is dusted over the stigma, followed by re-bagging and tagging for fruit set.
    </p>
  </div>

  <!-- SECTION 7 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    7. Double Fertilization &amp; Triple Fusion
  </h2>
  <p>
    Discovered independently by <b>S.G. Nawaschin (1898)</b> in <i>Lilium</i> and <i>Fritillaria</i>, double fertilization is a unique diagnostic hallmark of all angiosperms involving two distinct nuclear fusion events:
  </p>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 18px 0;">
    <div style="background: rgba(0, 230, 118, 0.08); border: 1.5px solid rgba(0, 230, 118, 0.35); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E676; margin: 0 0 8px 0; font-size: 16px;">1. Syngamy (Generative Fertilization)</h4>
      <p style="margin: 0; font-size: 14.5px; line-height: 1.6;">
        One haploid male gamete (n) fuses with the haploid egg nucleus (n) to produce a <b>diploid zygote (2n)</b>. The zygote subsequently develops into the <b>embryo</b>.
      </p>
    </div>

    <div style="background: rgba(0, 230, 118, 0.08); border: 1.5px solid rgba(0, 230, 118, 0.35); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E676; margin: 0 0 8px 0; font-size: 16px;">2. Triple Fusion (Vegetative Fertilization)</h4>
      <p style="margin: 0; font-size: 14.5px; line-height: 1.6;">
        The second haploid male gamete (n) migrates to the central cell and fuses with the two haploid polar nuclei (n + n) to form a <b>triploid Primary Endosperm Nucleus (PEN, 3n)</b>. The central cell transforms into the <b>Primary Endosperm Cell (PEC)</b>.
      </p>
    </div>
  </div>

  <!-- SECTION 8 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    8. Post-Fertilization Events (Endosperm, Embryogeny, Seed &amp; Fruit)
  </h2>

  <h3 style="color: #00E676; margin-top: 18px; font-size: 16.5px;">(i) Endosperm Development &amp; Types</h3>
  <p>
    Endosperm development always precedes embryo development as an evolutionary adaptation to ensure immediate nutritional supply for the developing proembryo. Based on developmental cytology, endosperm is categorized into three types:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Free Nuclear Endosperm (Most Common):</b> PEN undergoes repeated mitotic divisions without immediate cytokinesis, producing thousands of free nuclei in the central vacuole. Later, peripheral cellularization commences. <i>Example: Tender coconut water represents free-nuclear endosperm (thousands of nuclei), whereas the surrounding white kernel is cellular endosperm.</i></li>
    <li><b style="color: #00E676;">Cellular Endosperm:</b> Every nuclear division is followed immediately by cytokinesis and cell-plate formation (e.g., <i>Datura</i>, <i>Petunia</i>).</li>
    <li><b style="color: #00E676;">Helobial Endosperm:</b> Intermediate type where the first division forms one large and one small chamber, followed by free-nuclear divisions in the micropylar chamber (common in order Helobiales).</li>
  </ul>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(ii) Embryogeny (Development of Embryo)</h3>
  <p>
    The zygote remains quiescent until a minimal amount of endosperm is formed. Embryogeny passes through distinct stereotypic developmental stages: <b>Zygote &rarr; Proembryo &rarr; Globular Stage &rarr; Heart-shaped Stage &rarr; Torpedo Stage &rarr; Mature Embryo</b>.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E676; margin: 0 0 8px 0; font-size: 15.5px;">Dicotyledonous Embryo</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Consists of an <b>embryonal axis (tigellum)</b> and <b>two cotyledons</b>.
        <br/>&bull; <b style="color: #00E676;">Epicotyl:</b> Portion of axis above the level of cotyledons, terminating in the <b>plumule</b> (stem tip).
        <br/>&bull; <b style="color: #00E676;">Hypocotyl:</b> Cylindrical portion below cotyledons, terminating in the <b>radicle</b> (root tip covered by a root cap).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 230, 118, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #00E676; margin: 0 0 8px 0; font-size: 15.5px;">Monocotyledonous Embryo (Grasses)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Possesses only one single lateral cotyledon termed the <b>Scutellum</b>.
        <br/>&bull; <b style="color: #00E676;">Coleoptile:</b> Conical protective foliar sheath enclosing the shoot apex and leaf primordia.
        <br/>&bull; <b style="color: #00E676;">Coleorhiza:</b> Undifferentiated protective sheath enclosing the radicle and root cap.
        <br/>&bull; <b style="color: #00E676;">Epiblast:</b> Reduced remnant of the second cotyledon.
      </p>
    </div>
  </div>

  <h3 style="color: #00E676; margin-top: 22px; font-size: 16.5px;">(iii) Seed &amp; Fruit Formation</h3>
  <p>
    Following fertilization, the ovule matures into a <b>seed</b>, while the ovary matures into a <b>fruit</b>:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Seed Coat:</b> Outer integument becomes the tough <b>testa</b>; inner integument becomes the thin <b>tegmen</b>. Micropyle persists as a tiny pore facilitating O<sub>2</sub> and water uptake during germination.</li>
    <li><b style="color: #00E676;">Perisperm:</b> In most seeds, the nucellus is completely digested. In certain seeds (e.g., <i>Black Pepper</i>, <i>Beet</i>), residual, persistent nucellus is termed <b>perisperm</b> (2n).</li>
    <li><b style="color: #00E676;">Albuminous vs Non-Albuminous Seeds:</b>
      <br/>&bull; <i>Non-Albuminous / Exalbuminous:</i> Endosperm completely consumed during embryogeny; food stored in cotyledons (e.g., Pea, Groundnut, Gram, Bean).
      <br/>&bull; <i>Albuminous / Endospermic:</i> Endosperm persists in mature seed to nourish seedling (e.g., Castor, Maize, Wheat, Barley, Sunflower, Coconut).
    </li>
    <li><b style="color: #00E676;">Fruit Types:</b>
      <br/>&bull; <i>True Fruits:</i> Develop exclusively from the mature ovary (e.g., Mango, Tomato).
      <br/>&bull; <i>False Fruits (Pseudocarps):</i> Floral parts other than the ovary (especially thalamus) contribute to fruit flesh (e.g., Apple, Strawberry, Cashew).
      <br/>&bull; <i>Parthenocarpic Fruits:</i> Fruits developed without fertilization; naturally seedless (e.g., Banana); can be induced with auxins and gibberellins.
    </li>
    <li><b style="color: #00E676;">Seed Dormancy &amp; Viability:</b> Dormancy is a period of suspended metabolic activity enabling survival in hostile conditions. Record seed viability:
      <br/>&bull; <i>Lupinus arcticus</i> (Arctic Tundra): Seeds germinated after ~10,000 years of dormancy.
      <br/>&bull; <i>Phoenix dactylifera</i> (Date Palm from King Herod's palace near Dead Sea): Viable after ~2,000 years.
    </li>
  </ul>

  <!-- SECTION 9 -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    9. Special Modes: Apomixis, Parthenocarpy &amp; Polyembryony
  </h2>
  
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00E676;">Apomixis:</b> Reproduction mechanism wherein seeds are formed without syngamy and meiosis. In species of <i>Asteraceae</i> and grasses, diploid maternal cells (such as nucellar cells or unreduced megaspore mother cells) develop directly into embryos.
      <br/><b style="color: #00E676;">Agricultural Significance:</b> Hybrid crops exhibit superior yield and disease resistance, but farmers must buy costly hybrid seeds every year because sexual reproduction segregates hybrid vigor in subsequent generations. If hybrid traits are converted to apomixis, hybrid vigor does not segregate, allowing farmers to reuse their own seeds indefinitely.
    </li>
    <li><b style="color: #00E676;">Polyembryony:</b> Occurrence of more than one embryo in a single seed (first observed by Antonie van Leeuwenhoek in 1719 in <i>Citrus</i> seeds).
      <br/><b style="color: #00E676;">Mechanisms:</b> (a) Cleavage of proembryo, (b) Development of multiple embryos from synergids/antipodals, or (c) <b>Adventive Embryony</b> where diploid nucellar/integument cells surrounding the embryo sac divide and protrude into the embryo sac (e.g., <i>Citrus</i>, <i>Mango</i>).
    </li>
    <li><b style="color: #00E676;">Parthenocarpy:</b> Development of fruit without fertilization, resulting in seedless fruits (e.g., Banana, seedless grapes, seeded watermelons treated with plant hormones).
    </li>
  </ul>

  <!-- SECTION 10: MASTER COMPARISON MATRICES -->
  <h2 style="color: #00E676; border-bottom: 2px solid #00E676; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    10. Master Comparative Biology Matrices
  </h2>

  <h3 style="color: #00E676; margin-top: 16px; font-size: 16px;">Matrix 1: Microsporogenesis vs. Megasporogenesis</h3>
  <div style="overflow-x: auto; margin: 14px 0; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15);">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.6); text-align: left; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(0, 230, 118, 0.15); color: #00E676;">
          <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Feature</th>
          <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Microsporogenesis</th>
          <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Megasporogenesis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);"><b>Site of Occurrence</b></td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Inside Microsporangium (Pollen sac of anther)</td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Inside Megasporangium (Nucellus of ovule)</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);"><b>Precursor Cell</b></td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Microspore Mother Cell (PMC / MMC, 2n)</td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Megaspore Mother Cell (MMC, 2n)</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);"><b>Functional Yield</b></td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">All 4 microspores in the tetrad are functional (100% yield)</td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Only 1 chalazal megaspore is functional (3 degenerate, 25% yield)</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);"><b>End Product</b></td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Pollen Grains (Male Gametophyte)</td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Embryo Sac (Female Gametophyte)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 style="color: #00E676; margin-top: 18px; font-size: 16px;">Matrix 2: Albuminous (Endospermic) vs. Non-Albuminous (Exalbuminous) Seeds</h3>
  <div style="overflow-x: auto; margin: 14px 0; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15);">
    <table style="width: 100%; border-collapse: collapse; background: rgba(15, 23, 42, 0.6); text-align: left; font-size: 13.5px;">
      <thead>
        <tr style="background: rgba(0, 230, 118, 0.15); color: #00E676;">
          <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Feature</th>
          <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Albuminous (Endospermic)</th>
          <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Non-Albuminous (Exalbuminous)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);"><b>Fate of Endosperm</b></td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Persists as a distinct storage tissue in mature seed</td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Completely consumed by embryo before seed matures</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);"><b>Primary Food Storage</b></td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Triploid Endosperm tissue (3n)</td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Fleshy Diploid Cotyledons (2n)</td>
        </tr>
        <tr>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);"><b>Representative Plants</b></td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Castor, Maize, Wheat, Barley, Sunflower, Onion</td>
          <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Pea, Groundnut, Gram, Bean, Mustard</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- MASTER REVISION CHEAT SHEET & PLOIDY TRACKER -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(6, 78, 59, 0.85)); border: 2px solid #00E676; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #00E676; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Botany Chapter 1: Reproduction Cheat Sheet &amp; Ploidy Tracker
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(0, 230, 118, 0.25); color: #00E676; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Tissue / Cell Entity</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Ploidy Level</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Function / Developmental Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Epidermis, Endothecium, Middle Layer</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #60A5FA;">Diploid (2n)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Protection &amp; hygroscopic dehiscence of anther via endothecial &alpha;-cellulose bands</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Tapetum</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #F59E0B;">Polyploid / Multinucleate</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Nourishment, callase enzyme secretion, Ubisch bodies (sporopollenin) &amp; pollenkitt</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Microspore Mother Cell (PMC) &amp; MMC</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #60A5FA;">Diploid (2n)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Undergo meiosis to produce haploid microspores and megaspores</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Microspore / Pollen Grain / Male Gamete</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #34D399;">Haploid (n)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Carries genetic payload for syngamy and triple fusion</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Egg Cell, Synergids, Antipodal Cells</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #34D399;">Haploid (n)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Synergid filiform apparatus guides pollen tube; egg cell fuses with male gamete</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Central Cell (unfused polar nuclei)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #A78BFA;">Binucleate (n + n)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Forms diploid secondary nucleus (2n) prior to triple fusion</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Primary Endosperm Nucleus (PEN)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #F472B6;">Triploid (3n)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Divides mitotically to establish nutritive endosperm tissue</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Zygote &amp; Embryo</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #60A5FA;">Diploid (2n)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Develops into next sporophytic generation (plumule, radicle, cotyledons)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Nucellus, Perisperm, Testa, Tegmen</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1); color: #60A5FA;">Diploid (2n)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Maternal protective and nutritive tissues (perisperm in black pepper/beet)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c12Bot1HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.15), rgba(17, 153, 142, 0.15)); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #00E676; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Definitions, Terminology, Ploidy Levels &amp; Fundamental Biological Facts</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: What is the morphological nature of a flower in angiosperms?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A flower is a modified and condensed determinate vegetative shoot specialized for sexual reproduction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Name the four concentric whorls of a typical flower.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The four whorls are Calyx (sepals), Corolla (petals), Androecium (stamens), and Gynoecium (carpels/pistil).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is meant by a dithecous and tetrasporangiate anther?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dithecous means the anther has two lobes (each containing two thecae), and tetrasporangiate means it bears four microsporangia (pollen sacs).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Name the four microsporangial wall layers in order from outside to inside.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Epidermis &rarr; Endothecium &rarr; Middle layers &rarr; Tapetum.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Which anther wall layer possesses radial fibrous thickenings of &alpha;-cellulose?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Endothecium.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: State two essential biological functions of the tapetum.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Provides nourishment to developing microspores. 2. Synthesizes Ubisch bodies (sporopollenin precursors) and secretes callase enzyme.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Why is tapetal tissue multinucleated or polyploid?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Due to endomitosis and free nuclear mitotic divisions without cytokinesis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What is the chemical composition of sporopollenin?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      It is an extremely resistant fatty biopolymer derived from oxidative polymerization of carotenoids and carotenoid esters.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Why are pollen grains exceptionally well-preserved as fossils?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Due to the presence of chemically inert sporopollenin in the exine, which resists high temperatures, strong acids, alkalis, and enzymes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What is a germ pore in a pollen grain?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A localized circular aperture in the exine where sporopollenin is absent, allowing the emergence of the pollen tube.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What is the chemical nature of intine?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The intine is a thin, continuous inner layer composed of cellulose and pectin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: At what cellular stage are pollen grains shed in over 60% of angiosperms?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      At the 2-celled stage (one large vegetative cell and one small generative cell).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What is the ploidy level of the vegetative cell and generative cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Both are haploid (n).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Name the invasive weed responsible for severe pollen allergy and respiratory asthma in India.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Parthenium hysterophorus</i> (Carrot grass).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: What is cryopreservation of pollen grains?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Storage of pollen grains in liquid nitrogen at -196&deg;C for long-term preservation in pollen banks.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Distinguish between syncarpous and apocarpous gynoecium with one example each.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Syncarpous has fused carpels (e.g., <i>Papaver</i>), whereas apocarpous has free, unfused carpels (e.g., <i>Michelia</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: What is an anatropous ovule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An inverted ovule rotated by 180&deg; such that the micropyle lies close to the funicle base (most common ovule in ~82% angiosperms).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Define the term 'Hilum' in an ovule.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hilum is the point of attachment where the main body of the ovule fuses with the stalk (funicle).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: What is monosporic embryo sac development?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Development of the female gametophyte (embryo sac) from a single functional megaspore (Polygonum type).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: How many cells and nuclei are present in a typical mature angiosperm embryo sac?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      7 cells and 8 nuclei.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Name the components of the egg apparatus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      One central egg cell (female gamete) and two lateral synergids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: What is the primary function of the filiform apparatus?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      To guide the chemical entry of the pollen tube into one of the synergids.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Define Autogamy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Transfer of pollen grains from the anther to the stigma of the same flower.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What are cleistogamous flowers?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Inter-fertile bisexual flowers that never open, ensuring 100% self-pollination even in the absence of pollinators (e.g., <i>Viola</i>, <i>Oxalis</i>, <i>Commelina</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Why is geitonogamy considered functionally cross-pollination but genetically self-pollination?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Functionally it requires a pollinating agent to transfer pollen to another flower, but genetically pollen originates from the same parent plant.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Mention two characteristic adaptations of wind-pollinated (anemophilous) flowers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Pollen grains are light, dry, and non-sticky. 2. Stigmas are large, branched, and feathery with well-exposed stamens.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Why do flowers of <i>Vallisneria</i> possess long coiled pedicels?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      To bring the female flower to the surface of the water where pollen grains released on the water surface can reach the stigma (Epihydrophily).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Are water hyacinth and water lily pollinated by water? Explain.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      No; their flowers emerge above water level and are pollinated by insects or wind.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: What is 'pollenkitt'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An oily, sticky, carotenoid-rich layer on the surface of entomophilous pollen grains that aids in insect adhesion and UV protection.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Define Protandry and give an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Condition where anthers mature and shed pollen before the stigma becomes receptive in a bisexual flower (e.g., Sunflower, <i>Salvia</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: What is Self-Incompatibility?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A genetically controlled mechanism (mediated by S-alleles) preventing self-pollen from fertilizing ovules by inhibiting germination or tube growth in the pistil.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: Define Emasculation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The surgical removal of stamens/anthers from the flower bud of a bisexual female parent before anthesis during artificial hybridization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Who discovered Double Fertilization in angiosperms and in which plants?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      S.G. Nawaschin in 1898 in <i>Lilium</i> and <i>Fritillaria</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What is the ploidy of Primary Endosperm Nucleus (PEN)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Triploid (3n), formed by the fusion of 1 haploid male gamete (n) and 2 haploid polar nuclei (2n).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Why does endosperm development precede embryo development?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      To ensure an assured nutritional reserve for the growth and differentiation of the developing proembryo.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What does the tender coconut water represent cytologically?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Free-nuclear endosperm containing thousands of free floating nuclei.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Give two examples of non-albuminous (exalbuminous) seeds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pea and Groundnut (also Gram and Bean).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is Perisperm? Give two examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Persistent, residual nucellus in a mature seed; examples include <i>Black pepper</i> and <i>Beet</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: What is Scutellum?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The single shield-shaped cotyledon found laterally in the embryo of monocotyledonous plants (grasses).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Define Apomixis and mention its major agricultural benefit.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Formation of seeds without fertilization. Its benefit is that hybrid vigor does not segregate, allowing farmers to reuse hybrid seeds annually.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.15), rgba(17, 153, 142, 0.15)); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E676; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Mechanisms, Cytological Differences, Conceptual Reasoning &amp; Short Notes</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Describe the structural organization of a mature pollen grain.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A mature pollen grain is a spherical microgametophyte (25-50 &mu;m) bounded by a two-layered sporoderm: (1) <b style="color: #00E676;">Exine:</b> Hard, sculptured outer layer made of resistant sporopollenin, interrupted by germ pores. (2) <b style="color: #00E676;">Intine:</b> Thin, smooth, inner pectocellulosic layer. Internally it contains a large vegetative cell with abundant food reserves and a spindle-shaped generative cell floating in its cytoplasm.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Differentiate between the vegetative cell and generative cell of a pollen grain.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Vegetative Cell:</b> Larger in size, possesses abundant food reserves (starch/lipids), has an irregular prominent nucleus, and directs pollen tube growth. <b style="color: #00E676;">Generative Cell:</b> Smaller, spindle-shaped with dense cytoplasm and a compact nucleus; floats inside the vegetative cell and mitotically divides into two non-motile male gametes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain why the tapetum is regarded as the most physiologically active anther layer.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The tapetum: (1) Transports nourishment to developing microspores. (2) Synthesizes pro-sporopollenin and forms Ubisch bodies for exine building. (3) Secretes callase to release microspores from tetrads. (4) Produces pollenkitt for insect attraction and protection against UV radiation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Trace the sequence of events during microsporogenesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Diploid sporogenous cells in the microsporangium differentiate into microspore mother cells (PMCs, 2n). Each PMC undergoes Meiosis I and Meiosis II to form a haploid microspore tetrad enclosed in callose. Tapetal callase dissolves callose, releasing 4 separate haploid microspores (n) which expand and develop sporoderm into mature pollen grains.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Describe the structure of a typical anatropous ovule with a neat labeled explanation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An anatropous ovule consists of: (1) <b style="color: #00E676;">Funicle:</b> Stalk attaching ovule to placenta. (2) <b style="color: #00E676;">Hilum:</b> Junction between funicle and ovule body. (3) <b style="color: #00E676;">Integuments:</b> 1 or 2 protective layers surrounding nucellus. (4) <b style="color: #00E676;">Micropyle:</b> Small apical pore for pollen tube entry. (5) <b style="color: #00E676;">Chalaza:</b> Basal region opposite micropyle. (6) <b style="color: #00E676;">Nucellus:</b> Nutritive central mass. (7) <b style="color: #00E676;">Embryo Sac:</b> 7-celled, 8-nucleate female gametophyte.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: How does a functional megaspore develop into a 7-celled, 8-nucleate embryo sac?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The functional chalazal megaspore (n) undergoes 3 sequential free-nuclear mitotic divisions: 1st division produces 2 nuclei that move to opposite poles; 2nd division creates 4 nuclei; 3rd division yields 8 nuclei (4 micropylar, 4 chalazal). Wall formation groups 3 micropylar nuclei into the egg apparatus (1 egg + 2 synergids), 3 chalazal nuclei into antipodals, and 2 polar nuclei in the large central cell.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Explain the structure and function of the Egg Apparatus.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The egg apparatus is located at the micropylar end of the embryo sac and consists of: (1) <b style="color: #00E676;">One central Egg cell (n):</b> The female gamete that fuses with a male gamete during syngamy to form the diploid zygote. (2) <b style="color: #00E676;">Two flanking Synergids (n):</b> Possess filiform apparatus (cellular finger-like thickenings) at the micropylar tip that secrete chemotropic signals to guide the pollen tube and facilitate gamete discharge.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Compare Chasmogamous and Cleistogamous flowers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Chasmogamous Flowers:</b> Open at maturity, exposing anthers and stigmas; facilitate cross-pollination but depend on external pollinating agencies. <b style="color: #00E676;">Cleistogamous Flowers:</b> Never open; anthers dehisce directly onto stigmas inside closed buds; guarantee 100% self-pollination (autogamy) without pollinators, but lack genetic variation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Describe pollination in <i>Vallisneria</i> (Epihydrophily).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Vallisneria</i> is a submerged dioecious freshwater plant. The female flower reaches the water surface by an elongated coiled stalk. Mature male flowers detach and float freely on the water surface. When floating male flowers contact the receptive female flower, pollen grains are transferred passively by surface water currents, completing pollination.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: How do flowers adapt to ensure Entomophily (Insect pollination)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Entomophilous flowers are: (1) Large, brightly colored (yellow, purple, blue) or clustered into dense inflorescences. (2) Scented and fragrant. (3) Offer floral rewards (rich nectar and edible pollen). (4) Pollen grains and stigmas are sticky and covered with pollenkitt to readily adhere to the insect body.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain the mutualistic relationship between <i>Yucca</i> and the <i>Pronuba</i> moth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The <i>Yucca</i> plant and <i>Pronuba</i> moth exhibit obligate mutualism: the moth lays its eggs inside the locule of the ovary and simultaneously deposits pollen on the stigma to ensure fertilization. The developing moth larvae feed on a portion of the seeds. Neither organism can complete its life cycle without the other.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: What are pollen/nectar robbers? Explain with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Floral visitors that consume nectar or pollen without effecting pollination (by piercing the base of the corolla tube) are called nectar/pollen robbers. Examples include certain carpenter bees and bumblebees visiting long-tubed flowers like <i>Aquilegia</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain Dichogamy as an outbreeding device with its two subtypes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dichogamy is temporal separation of maturation of male and female organs in a bisexual flower: (1) <b style="color: #00E676;">Protandry:</b> Anthers mature and shed pollen before stigma becomes receptive (e.g., Sunflower, <i>Salvia</i>). (2) <b style="color: #00E676;">Protogyny:</b> Stigma becomes receptive before anthers dehisce (e.g., <i>Mirabilis</i>, <i>Aristolochia</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: How does Self-Incompatibility prevent inbreeding depression genetically?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Self-incompatibility is governed by multiple S-alleles (S1, S2, S3...). If a pollen grain carrying an allele (e.g., S1) lands on a stigma of a pistil possessing the same allele (S1S2), biochemical recognition triggers callose blockage, preventing pollen germination or retarding pollen tube growth in the style, ensuring only cross-pollen fertilizes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Distinguish between Monoecious and Dioecious plants regarding autogamy and geitonogamy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Monoecious Plants (e.g., Maize, Castor):</b> Bear separate male and female flowers on the same plant; this prevents autogamy but allows geitonogamy. <b style="color: #00E676;">Dioecious Plants (e.g., Papaya, Date palm):</b> Bear male and female flowers on separate individual plants; this prevents both autogamy and geitonogamy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Detail the steps involved in Artificial Hybridization.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      (1) <b style="color: #00E676;">Emasculation:</b> Removal of anthers from bisexual flower buds of female parent before anthesis. (2) <b style="color: #00E676;">Bagging:</b> Covering the emasculated flower with butter paper bags to prevent contamination. (3) <b style="color: #00E676;">Pollination:</b> Dusting desired mature pollen onto the receptive stigma. (4) <b style="color: #00E676;">Re-bagging &amp; Tagging:</b> Sealing the flower until fruit develops.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Explain the chemotropic guidance of the pollen tube through the pistil.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The pollen tube is guided by chemotropic gradients of calcium ions, boron, and inositol secreted along the transmitting tissue of the style. At the ovular micropyle, the filiform apparatus of the synergids secretes attractant peptides (LUREs) that direct the tube precisely into one synergid.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Differentiate between Porogamy, Chalazogamy, and Mesogamy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Porogamy:</b> Pollen tube enters the ovule through the micropyle (most common). <b style="color: #00E676;">Chalazogamy:</b> Pollen tube enters through the chalaza (e.g., <i>Casuarina</i>). <b style="color: #00E676;">Mesogamy:</b> Pollen tube penetrates through the integuments or funicle (e.g., <i>Cucurbita</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: What is Double Fertilization? Why is it unique to angiosperms?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Double fertilization involves two simultaneous fusions: (1) Syngamy (male gamete [n] + egg [n] &rarr; diploid zygote [2n]), and (2) Triple Fusion (male gamete [n] + 2 polar nuclei [n+n] &rarr; triploid PEN [3n]). It is exclusive to angiosperms and ensures that nutritive endosperm is produced only when fertilization is successful.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the development and morphological nature of Free-Nuclear Endosperm.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Primary Endosperm Nucleus (PEN, 3n) undergoes rapid, repeated mitotic free-nuclear divisions without immediate cell-wall formation, creating a multinucleated liquid endosperm around a central vacuole. Cellularization begins later from the periphery toward the center. Example: Tender coconut water.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Compare Endosperm of Angiosperms with that of Gymnosperms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Angiosperm Endosperm:</b> Formed after fertilization via triple fusion; it is triploid (3n) and highly specialized for embryo nutrition. <b style="color: #00E676;">Gymnosperm Endosperm:</b> Represents the haploid female gametophyte formed before fertilization; it is haploid (n).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Differentiate between Albuminous and Exalbuminous seeds with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Albuminous (Endospermic):</b> Endosperm is retained in the mature seed to nourish the germinating seedling (e.g., Castor, Maize, Wheat, Sunflower). <b style="color: #00E676;">Exalbuminous (Non-endospermic):</b> Endosperm is completely consumed by the developing embryo; food is stored in fleshy cotyledons (e.g., Pea, Gram, Groundnut, Bean).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Describe the structural parts of a mature dicot embryo.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A mature dicot embryo consists of: (1) <b style="color: #00E676;">Embryonal Axis (Tigellum):</b> Longitudinal axis. (2) <b style="color: #00E676;">Two Cotyledons:</b> Lateral fleshy food-storing seed leaves. (3) <b style="color: #00E676;">Epicotyl:</b> Axis portion above cotyledonary node terminating in plumule. (4) <b style="color: #00E676;">Hypocotyl:</b> Axis portion below cotyledons terminating in radicle covered by root cap.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Describe the specialized structures of a grass (monocot) embryo.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A monocot grass embryo consists of: (1) <b style="color: #00E676;">Scutellum:</b> Single shield-shaped lateral cotyledon that absorbs nutrients from endosperm. (2) <b style="color: #00E676;">Coleoptile:</b> Protective foliar sheath enclosing shoot apex (plumule). (3) <b style="color: #00E676;">Coleorhiza:</b> Undifferentiated sheath enclosing the radicle and root cap. (4) <b style="color: #00E676;">Epiblast:</b> Reduced remnant of second cotyledon.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Differentiate between Perisperm and Pericarp.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Perisperm:</b> Persistent, residual nucellar tissue in the seed; it is diploid (2n) maternal storage tissue (e.g., Black pepper, Beet). <b style="color: #00E676;">Pericarp:</b> The wall of the fruit developed from the ovarian wall after fertilization; differentiated into epicarp, mesocarp, and endocarp.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Differentiate between True fruits, False fruits, and Parthenocarpic fruits.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">True Fruit:</b> Develops solely from the ovary (e.g., Mango, Tomato). <b style="color: #00E676;">False Fruit (Pseudocarp):</b> Develops from ovary along with other floral parts like thalamus (e.g., Apple, Strawberry). <b style="color: #00E676;">Parthenocarpic Fruit:</b> Develops without fertilization and is seedless (e.g., Banana).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: What is Seed Dormancy and what is its survival significance?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Seed dormancy is a state of suspended metabolic activity and low hydration (10-15% moisture) in mature seeds. It enables seeds to withstand adverse seasonal conditions (freezing, drought) and facilitates seed dispersal across space and time.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Mention the record viability periods of <i>Lupinus arcticus</i> and <i>Phoenix dactylifera</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Lupinus arcticus</i> seeds excavated from Arctic tundra germinated after ~10,000 years of dormancy. <i>Phoenix dactylifera</i> (Date palm) seeds recovered from King Herod's palace near the Dead Sea remained viable for ~2,000 years.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Define Apomixis and explain its genetic mechanism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Apomixis is asexual reproduction mimicking sexual reproduction without meiosis and syngamy. In recurrent apomixis, an unreduced diploid megaspore mother cell develops directly into an embryo sac without meiosis, producing diploid clonal seeds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: What is Adventive Polyembryony? Give two examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Formation of multiple embryos by direct mitotic budding of maternal diploid nucellar or integumentary cells into the embryo sac (e.g., <i>Citrus</i>, <i>Mango</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Why are hybrid seed companies interested in transferring apomixis to crop plants?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hybrid crops have superior yield, but their seeds segregate in F2 generations, forcing farmers to buy expensive hybrid seeds every season. Apomictic hybrids would maintain hybrid vigor indefinitely without segregation, saving huge costs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: What is the ploidy of cells of nucellus, MMC, functional megaspore, and endosperm?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Nucellus: Diploid (2n); MMC: Diploid (2n); Functional Megaspore: Haploid (n); Endosperm: Triploid (3n).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain why apple is called a false fruit and which part of the flower is edible.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Apple develops largely from the fleshy, enlarged thalamus enclosing the core (ovary). The edible sweet fleshy portion is the thalamus, making it a false fruit (pseudocarp).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: How does cleistogamy ensure seed set even without pollinators?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In cleistogamous flowers, anthers dehisce directly over the stigma inside permanently closed flower buds; pollen transfer occurs without needing wind, water, or insects, ensuring guaranteed fertilization.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: What are the functions of Coleoptile and Coleorhiza in grass seeds?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">Coleoptile:</b> Protects the delicate emergent plumule (shoot apex) during soil penetration. <b style="color: #00E676;">Coleorhiza:</b> Protects the primary root (radicle) and root cap during germination.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: What is the role of the suspensor during dicot embryogenesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The suspensor is a 6 to 10-celled column developed from the basal cell that mechanically pushes the developing proembryo deep into the nutritive endosperm tissue.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain the morphological nature of the hard shell and edible meat of coconut.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The hard shell is the stony <b>endocarp</b> of the drupe fruit. The edible white meat is the <b>cellular endosperm</b> (3n), and the coconut water is the <b>free-nuclear endosperm</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: What is geitonogamy? Why is it considered genetically self-pollination?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Geitonogamy is the transfer of pollen from one flower to another on the same plant. Because both flowers originate from the same zygote and share identical genotypes, no genetic recombination occurs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: State two advantages of seed formation for angiosperms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Seeds protect the vulnerable embryo and provide nutrition during germination. 2. Seed dormancy and dispersal adaptations enable colonization of new habitats and survival through adverse seasons.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: What is the significance of the triple fusion event in angiosperms?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Triple fusion creates the triploid (3n) primary endosperm nucleus, which proliferates into a specialized, highly nutritious tissue required for the survival and development of the embryo.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.15), rgba(17, 153, 142, 0.15)); border: 1.5px solid rgba(0, 230, 118, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E676; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Comprehensive Developmental Pathways, Outbreeding Devices &amp; Master Matrices</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Describe the microsporangium wall layers, microsporogenesis, and the development of the male gametophyte in detail.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Microsporangium Anatomy:</b> A typical anther is bilobed, dithecous, and tetrasporangiate. The four microsporangial wall layers are: (a) <i>Epidermis:</i> Outermost protective layer. (b) <i>Endothecium:</i> Sub-epidermal layer with &alpha;-cellulosic fibrous bands that facilitates dehiscence. (c) <i>Middle Layers:</i> 1-3 ephemeral layers providing nutrition. (d) <i>Tapetum:</i> Multinucleate nutritive layer secreting callase, Ubisch bodies, and pollenkitt.<br/><br/><b style="color: #00E676;">2. Microsporogenesis:</b> Diploid sporogenous cells differentiate into Microspore Mother Cells (PMCs, 2n). Each PMC undergoes Meiosis I and II to form a microspore tetrad. Callase enzyme dissolves callose, liberating four haploid microspores (n).<br/><br/><b style="color: #00E676;">3. Male Gametogenesis:</b> The microspore develops a thick exine (sporopollenin) and intine (pectocellulose). Its nucleus undergoes asymmetric mitosis to produce a large <b>vegetative cell</b> (rich in food) and a small <b>generative cell</b> (spindle-shaped). In ~60% angiosperms, pollen sheds at this 2-celled stage; in ~40%, the generative cell divides again into 2 male gametes (3-celled stage).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Explain the organization of a typical anatropous ovule and trace the development of the 7-celled, 8-nucleate female gametophyte.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Ovule Structure:</b> An anatropous ovule consists of Funicle (stalk), Hilum (attachment scar), Integuments (protective envelopes), Micropyle (apical opening), Chalaza (basal region), and Nucellus (nutritive tissue enclosing embryo sac).<br/><br/><b style="color: #00E676;">2. Megasporogenesis:</b> A single hypodermal cell of the nucellus at the micropylar end differentiates into a diploid Megaspore Mother Cell (MMC, 2n). MMC undergoes meiosis, producing a linear tetrad of four haploid megaspores. The three micropylar megaspores degenerate, leaving one functional chalazal megaspore (n).<br/><br/><b style="color: #00E676;">3. Monosporic Female Gametophyte (Polygonum Type):</b> The functional megaspore undergoes three sequential free-nuclear mitotic divisions, generating 8 nuclei. Wall formation results in: (a) <b style="color: #00E676;">Egg Apparatus (3 cells at micropyle):</b> 1 egg cell + 2 synergids with filiform apparatus. (b) <b style="color: #00E676;">Antipodals (3 cells at chalaza):</b> Nutritive function. (c) <b style="color: #00E676;">Central Cell (1 cell):</b> Large binucleate cell with 2 polar nuclei.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Classify pollination types based on source of pollen and discuss abiotic pollinating agencies with adaptations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Classification of Pollination:</b><br/>&bull; <i>Autogamy:</i> Transfer within the same flower (e.g., Cleistogamous flowers of <i>Viola</i>).<br/>&bull; <i>Geitonogamy:</i> Transfer between different flowers on the same plant (genetically self, ecologically cross).<br/>&bull; <i>Xenogamy:</i> Transfer between flowers of different plants (true cross-pollination introducing genetic variation).<br/><br/><b style="color: #00E676;">2. Abiotic Agencies &amp; Adaptations:</b><br/>&bull; <b style="color: #00E676;">Anemophily (Wind):</b> Pollen is small, dry, lightweight, and produced in huge numbers. Stamens are long and well-exposed. Stigmas are large, feathery (e.g., Grasses, Corn cob tassels). Flowers lack scent and nectar.<br/>&bull; <b style="color: #00E676;">Hydrophily (Water):</b> Limited to ~30 monocot genera. <i>Epihydrophily</i> in <i>Vallisneria</i> (female flowers float on surface via coiled stalks; pollen drifts on surface). <i>Hypohydrophily</i> in <i>Zostera</i> (ribbon-like pollen lacking exine floats submerged).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss biotic pollination (Entomophily), floral rewards, and specialized plant-pollinator mutualisms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Entomophily Adaptations:</b> Flowers are large, brightly colored, fragrant, and produce nectar. Pollen grains are sticky with <i>pollenkitt</i>.<br/><br/><b style="color: #00E676;">2. Floral Rewards:</b> Nectar (sugar source), edible pollen, and safe egg-laying sites (e.g., <i>Amorphophallus</i> with 6-foot tall inflorescence).<br/><br/><b style="color: #00E676;">3. Specialized Mutualisms:</b><br/>&bull; <b style="color: #00E676;">Yucca &amp; Pronuba moth:</b> The moth deposits eggs in the ovarian locule while pollinating the stigma; moth larvae feed on a portion of developing seeds. Both organisms are obligate mutualists.<br/>&bull; <b style="color: #00E676;">Fig &amp; Blastophaga wasp:</b> Female wasp enters the syconium inflorescence, lays eggs in gall flowers, and pollinates fertile flowers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Explain the five outbreeding devices evolved by angiosperms to prevent inbreeding depression.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Dichogamy (Temporal Separation):</b> Non-synchronous maturation of anther and stigma. Includes <i>Protandry</i> (anthers mature first, e.g., Sunflower) and <i>Protogyny</i> (stigma matures first, e.g., <i>Mirabilis</i>).<br/><b style="color: #00E676;">2. Herkogamy (Spatial Barrier):</b> Physical separation of sex organs (e.g., pollinia in <i>Calotropis</i>).<br/><b style="color: #00E676;">3. Heterostyly (Morphological Divergence):</b> Different lengths of styles and stamens (e.g., pin and thrum flowers in <i>Primula</i>).<br/><b style="color: #00E676;">4. Self-Incompatibility:</b> Genetic checkpoint mediated by multiple S-alleles that inhibits self-pollen germination or tube growth in the style.<br/><b style="color: #00E676;">5. Unisexuality (Dicliny):</b> Production of unisexual flowers. Monoecy (e.g., Maize) prevents autogamy; Dioecy (e.g., Papaya) prevents both autogamy and geitonogamy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Describe the biochemical dialogue during Pollen-Pistil Interaction from landing to fertilization.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Stigmatic Recognition:</b> Chemical interaction between pollen wall proteins and stigmatic papillae determinants. Compatible pollen is hydrated; incompatible pollen is blocked by callose deposition.<br/><b style="color: #00E676;">2. Pollen Tube Growth:</b> Intine emerges through a germ pore. Pollen tube grows through the transmitting tissue of the style via chemotropism (Ca<sup>2+</sup>, boron, inositol gradients) and enzyme secretion (pectinases).<br/><b style="color: #00E676;">3. Entry into Ovule:</b> Most commonly via micropyle (<i>Porogamy</i>).<br/><b style="color: #00E676;">4. Entry into Embryo Sac:</b> Filiform apparatus of synergids secretes attractants (LURE peptides) guiding the pollen tube into one synergid. The tube tip ruptures, releasing two haploid male gametes into the synergid cytoplasm.<br/><b style="color: #00E676;">5. Double Fertilization:</b> One male gamete fuses with the egg (Syngamy &rarr; 2n Zygote); the second fuses with 2 polar nuclei (Triple Fusion &rarr; 3n PEN).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain Double Fertilization and Triple Fusion with their biological significance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Discovery:</b> Discovered by S.G. Nawaschin in 1898 in <i>Lilium</i> and <i>Fritillaria</i>.<br/><br/><b style="color: #00E676;">2. Events:</b><br/>&bull; <b style="color: #00E676;">Syngamy:</b> Male Gamete (n) + Egg Cell (n) &rarr; Diploid Zygote (2n), which develops into the Embryo.<br/>&bull; <b style="color: #00E676;">Triple Fusion:</b> Second Male Gamete (n) + 2 Polar Nuclei (n + n) &rarr; Triploid Primary Endosperm Nucleus (PEN, 3n), which forms nutritive Endosperm.<br/><br/><b style="color: #00E676;">3. Significance:</b> (a) Combines paternal and maternal genomes, restoring diploidy and generating genetic variation. (b) Ensures nutritive endosperm is formed only when fertilization occurs, preventing wasteful nutrient allocation. (c) Triploid endosperm has higher physiological efficiency to nourish the embryo.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Detail the three types of endosperm development in angiosperms with suitable examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Free-Nuclear Endosperm (Most Common):</b> PEN undergoes repeated mitotic divisions without cytokinesis, creating a multinucleated coenocytic tissue surrounding a large central vacuole. Later, cell wall formation progresses from the periphery inwards. Example: Tender coconut liquid water (free nuclei) and white flesh (cellular).<br/><br/><b style="color: #00E676;">2. Cellular Endosperm:</b> Every mitotic nuclear division of PEN is immediately followed by cytokinesis, resulting in a cellular tissue from the start. Examples: <i>Datura</i>, <i>Petunia</i>, <i>Magnolia</i>.<br/><br/><b style="color: #00E676;">3. Helobial Endosperm:</b> PEN division is followed by transverse cytokinesis, forming a large micropylar chamber and a small chalazal chamber. Micropylar chamber undergoes free-nuclear divisions while chalazal chamber remains few-nucleated. Common in monocot order Helobiales.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Trace the stages of dicot embryogeny from zygote to mature embryo with diagrams/structural descriptions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Stages of Embryogeny:</b><br/>&bull; <b style="color: #00E676;">Zygote (2n):</b> Divides transversely into a basal suspensor cell and an apical embryonal cell.<br/>&bull; <b style="color: #00E676;">Proembryo:</b> Basal cell divides to form a 6-10 celled suspensor (its top cell forms the haustorium and lowest forms hypophysis). Apical cell divides longitudinally and transversely forming an octant.<br/>&bull; <b style="color: #00E676;">Globular Stage:</b> Mitotic divisions form a spherical mass of cells showing protoderm, ground meristem, and procambium.<br/>&bull; <b style="color: #00E676;">Heart-shaped Stage:</b> Localized cell divisions initiate two cotyledonary lobes.<br/>&bull; <b style="color: #00E676;">Torpedo Stage &amp; Mature Embryo:</b> Cotyledons elongate; embryonal axis differentiates into epicotyl terminating in plumule and hypocotyl terminating in radicle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Compare the anatomy of a Dicotyledonous Embryo and a Monocotyledonous (Grass) Embryo.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Dicot Embryo:</b> Possesses an embryonal axis (tigellum) with <b>two large lateral cotyledons</b> that store food. Portion above cotyledons is the <b>epicotyl</b> (terminating in plumule); portion below is the <b>hypocotyl</b> (terminating in radicle with root cap).<br/><br/><b style="color: #00E676;">2. Monocot Grass Embryo:</b> Possesses only <b>one terminal/lateral cotyledon</b> called the <b>Scutellum</b>, which is thin and shield-shaped, specialized for nutrient absorption from endosperm. The shoot apex and leaf primordia are enclosed in a protective foliar sheath called the <b>Coleoptile</b>. The radicle and root cap are enclosed in a solid sheath called the <b>Coleorhiza</b>. The remnant of the second cotyledon is the <b>Epiblast</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Describe the transformation of flower parts into fruit and seed components post-fertilization.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Post-fertilization floral transformations:<br/>&bull; <b>Ovary</b> &rarr; <b>Fruit</b><br/>&bull; <b>Ovary wall</b> &rarr; <b>Pericarp</b> (Epicarp + Mesocarp + Endocarp)<br/>&bull; <b>Ovule</b> &rarr; <b>Seed</b><br/>&bull; <b>Outer Integument</b> &rarr; <b>Testa</b> (tough outer seed coat)<br/>&bull; <b>Inner Integument</b> &rarr; <b>Tegmen</b> (thin inner seed coat)<br/>&bull; <b>Nucellus</b> &rarr; Mostly consumed (or persistent as <b>Perisperm</b> in black pepper)<br/>&bull; <b>Egg + Male Gamete (Syngamy)</b> &rarr; <b>Zygote &rarr; Embryo</b><br/>&bull; <b>Secondary Nucleus + Male Gamete</b> &rarr; <b>Endosperm (3n)</b><br/>&bull; <b>Micropyle</b> &rarr; <b>Micropyle of seed</b> (allows O<sub>2</sub> and H<sub>2</sub>O entry)<br/>&bull; <b>Funicle</b> &rarr; <b>Seed Stalk</b><br/>&bull; <b>Sepals, Petals, Stamens, Style, Stigma</b> &rarr; Wither and fall off.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Discuss the structural differences, food storage, and examples of Endospermic vs Non-Endospermic seeds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Endospermic (Albuminous) Seeds:</b> Endosperm tissue persists in the mature seed because the embryo does not consume all of it during development. Food is stored predominantly in the triploid endosperm (3n). Cotyledons are thin, papery, or shield-like (scutellum). Examples: Castor, Maize, Wheat, Barley, Sunflower, Onion.<br/><br/><b style="color: #00E676;">2. Non-Endospermic (Exalbuminous) Seeds:</b> Endosperm is completely consumed by the developing embryo before seed maturation. Food is stored in fleshy, thick cotyledons (2n). Examples: Pea, Gram, Groundnut, Bean, Mustard.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain Apomixis, its mechanisms, and its revolutionary potential in modern agriculture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Definition:</b> Apomixis is asexual reproduction without fertilization and meiosis, forming viable clonal seeds.<br/><br/><b style="color: #00E676;">2. Mechanisms:</b> (a) <i>Apospory:</i> Diploid nucellar cell forms embryo sac directly. (b) <i>Diplospory:</i> Megaspore mother cell forms diploid embryo sac without meiosis. (c) <i>Adventive Embryony:</i> Nucellar or integumentary cells divide and bud into the embryo sac (e.g., <i>Citrus</i>).<br/><br/><b style="color: #00E676;">3. Agricultural Importance:</b> Commercial hybrid seeds have high yield due to heterosis, but sexual reproduction in F2 causes segregation of desired traits. If apomixis is genetically engineered into hybrid crops, seeds produced by farmers will be genetically identical clones, preserving hybrid vigor indefinitely without repurchasing expensive hybrid seeds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: What is Polyembryony? Explain its causes, types, and practical applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Definition:</b> Presence of more than one embryo inside a single seed (discovered by Leeuwenhoek in 1719).<br/><br/><b style="color: #00E676;">2. Causes &amp; Types:</b><br/>&bull; <i>Cleavage Polyembryony:</i> Zygote or early proembryo divides into multiple separate embryos.<br/>&bull; <i>Simple Polyembryony:</i> Fertilization of multiple embryo sacs within the same ovule.<br/>&bull; <i>Adventive Polyembryony:</i> Maternal diploid cells of the nucellus or integuments bud into the embryo sac (e.g., <i>Citrus</i>, <i>Mango</i>).<br/><br/><b style="color: #00E676;">3. Applications:</b> Produces uniform, disease-free, vigorous rootstocks in horticulture.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Describe Parthenocarpy, its types (natural vs induced), and economic importance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Definition:</b> Development of a fruit without fertilization, resulting in seedless fruits.<br/><br/><b style="color: #00E676;">2. Types:</b><br/>&bull; <i>Natural/Genetic Parthenocarpy:</i> Genetically fixed (e.g., cultivated Banana, Pineapple, seedless grapes).<br/>&bull; <i>Induced Parthenocarpy:</i> Induced by spraying low concentrations of synthetic auxins (NAA, 2,4-D) or gibberellins (GA3) on unpollinated flowers (e.g., Seedless Tomatoes, Watermelons, Cucumbers).<br/><br/><b style="color: #00E676;">3. Economic Importance:</b> Seedless fruits are highly prized by consumers and the food processing industry (jams, juices, canning).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Explain why seed and fruit formation are of immense evolutionary and agricultural significance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Evolutionary Significance:</b><br/>&bull; Seeds encapsulate the fragile sporophytic embryo within tough protective coats (testa/tegmen).<br/>&bull; Adaptations for dormancy allow seeds to survive winter/drought.<br/>&bull; Diverse fruit dispersal mechanisms (wind, water, animals) spread species over vast geographical zones.<br/>&bull; Genetic variations introduced during sexual reproduction drive natural selection and speciation.<br/><br/><b style="color: #00E676;">2. Agricultural Significance:</b> Seeds are dehydrated and dormant, allowing long-term storage as food grains throughout the year, forming the cornerstone of human civilization and global agriculture.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Trace the complete development of male and female gametophytes from PMC and MMC, highlighting similarities and differences.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Microgametogenesis:</b> PMC (2n) &rarr; Meiosis &rarr; 4 Microspores (all functional) &rarr; Mitosis &rarr; 2-celled Pollen Grain (Vegetative + Generative cell) &rarr; Mitosis of Generative cell &rarr; 2 Male Gametes.<br/><br/><b style="color: #00E676;">2. Megagametogenesis:</b> MMC (2n) &rarr; Meiosis &rarr; 4 Megaspores (3 degenerate, 1 functional chalazal) &rarr; 3 Free-nuclear Mitoses &rarr; 8-nucleate, 7-celled Embryo Sac (Egg apparatus, Antipodals, Central cell).<br/><br/><b style="color: #00E676;">3. Differences:</b> Microsporogenesis yields 4 functional gametophytes (100%), whereas megasporogenesis yields 1 functional gametophyte (25%). Pollen grain has 2-3 cells at maturity, while embryo sac has 7 cells and 8 nuclei.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain the concept of Inbreeding Depression and how outbreeding devices maintain genetic vigor.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Inbreeding Depression:</b> Continuous self-pollination leads to homozygosity, unmasking deleterious recessive mutations and reducing fertility, growth, and yield.<br/><br/><b style="color: #00E676;">2. Outbreeding Devices:</b> Mechanisms like Dichogamy (protandry/protogyny), Herkogamy, Heterostyly, Self-incompatibility, and Dioecy enforce cross-pollination (xenogamy). Xenogamy shuffles alleles between genetically distinct parents, maintaining heterozygosity, genetic polymorphism, and high hybrid vigor (heterosis).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Provide a comprehensive comparative analysis between Anemophilous, Entomophilous, and Hydrophilous flowers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Anemophilous (Wind):</b> Flowers are small, drab, non-scented, lack nectar; pollen is light, smooth, dry, and produced in millions; stamens have long versatile filaments; stigmas are large, feathery (e.g., Grasses).<br/><b style="color: #00E676;">2. Entomophilous (Insect):</b> Flowers are large, brightly colored, fragrant, produce nectar; pollen is sticky, heavy, coated with pollenkitt; stigmas are sticky (e.g., <i>Salvia</i>, Rose).<br/><b style="color: #00E676;">3. Hydrophilous (Water):</b> Flowers are small, inconspicuous, non-scented; pollen lacks exine, is ribbon-like and covered by mucilaginous sheath; stigmas are long and sticky (e.g., <i>Vallisneria</i>, <i>Zostera</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E676; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct a comprehensive Ploidy and Cytogenetic Tracker for all reproductive, embryological, and seed tissues in Angiosperms.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E676;">1. Haploid (n):</b> Microspore, Vegetative cell, Generative cell, Male gametes, Functional megaspore, Egg cell, Synergids, Antipodals, Polar nuclei (individually).<br/><br/><b style="color: #00E676;">2. Diploid (2n):</b> Sepal, Petal, Stamen filament, Anther epidermis, Endothecium, Middle layers, Sporogenous cell, PMC, MMC, Nucellus, Integuments, Testa, Tegmen, Funicle, Hilum, Perisperm, Zygote, Dicot/Monocot Embryo, Scutellum, Plumule, Radicle, Coleoptile, Coleorhiza.<br/><br/><b style="color: #00E676;">3. Triploid (3n):</b> Primary Endosperm Nucleus (PEN), Primary Endosperm Cell (PEC), Endosperm tissue.<br/><br/><b style="color: #00E676;">4. Polyploid / Multinucleate:</b> Tapetum cells (due to endomitosis), fused central cell before triple fusion (2n).
    </div>
  </div>

</div>
`;

export const c12Bot1Mcqs = [
  {
    "id": "c12-bot-1-mcq-1",
    "question": "The innermost nutritive wall layer of a microsporangium that nourishes developing microspores is:",
    "options": [
      "A):   Endothecium",
      "B):   Tapetum",
      "C):   Middle layer",
      "D):   Epidermis"
    ],
    "correctAnswer": "b",
    "explanation": "The tapetum is the innermost multinucleated physiological layer of the anther wall that provides nutrition, secretes callase, and synthesizes sporopollenin precursors (Ubisch bodies)."
  },
  {
    "id": "c12-bot-1-mcq-2",
    "question": "Exine of pollen grains is composed of an extraordinarily resistant biopolymer called:",
    "options": [
      "A):   Sporopollenin",
      "B):   Cellulose",
      "C):   Pectin",
      "D):   Lignin"
    ],
    "correctAnswer": "a",
    "explanation": "Sporopollenin is the most resistant known biological polymer, impervious to high temperatures, concentrated acids, strong alkalis, and enzymatic degradation."
  },
  {
    "id": "c12-bot-1-mcq-3",
    "question": "In over 60% of angiosperms, pollen grains are shed from the anther at the:",
    "options": [
      "A):   1-celled stage",
      "B):   3-celled stage",
      "C):   2-celled stage",
      "D):   4-celled stage"
    ],
    "correctAnswer": "c",
    "explanation": "In >60% of flowering plants, pollen is shed at the 2-celled stage consisting of one large vegetative cell and one smaller generative cell."
  },
  {
    "id": "c12-bot-1-mcq-4",
    "question": "The finger-like cellular thickenings present at the micropylar tip of synergids are termed:",
    "options": [
      "A):   Obturator",
      "B):   Caruncle",
      "C):   Aril",
      "D):   Filiform apparatus"
    ],
    "correctAnswer": "d",
    "explanation": "The filiform apparatus consists of prominent finger-like projections of synergid walls that secrete chemotropic peptides (LUREs) to guide the pollen tube into the embryo sac."
  },
  {
    "id": "c12-bot-1-mcq-5",
    "question": "A typical mature Polygonum-type angiosperm embryo sac is structurally:",
    "options": [
      "A):   8-celled and 7-nucleate",
      "B):   7-celled and 8-nucleate",
      "C):   8-celled and 8-nucleate",
      "D):   7-celled and 7-nucleate"
    ],
    "correctAnswer": "b",
    "explanation": "The mature embryo sac contains 7 cells (3 egg apparatus cells + 3 antipodal cells + 1 large central cell) and 8 nuclei (3+3+2)."
  },
  {
    "id": "c12-bot-1-mcq-6",
    "question": "Flowers that never open at all and ensure 100% self-pollination are known as:",
    "options": [
      "A):   Cleistogamous flowers",
      "B):   Chasmogamous flowers",
      "C):   Dichogamous flowers",
      "D):   Herkogamous flowers"
    ],
    "correctAnswer": "a",
    "explanation": "Cleistogamous flowers (e.g., in <i>Viola</i>, <i>Oxalis</i>, <i>Commelina</i>) remain permanently closed, guaranteeing autogamy even in the total absence of pollinators."
  },
  {
    "id": "c12-bot-1-mcq-7",
    "question": "Transfer of pollen from an anther of one flower to the stigma of another flower on the same plant is termed:",
    "options": [
      "A):   Autogamy",
      "B):   Xenogamy",
      "C):   Geitonogamy",
      "D):   Cleistogamy"
    ],
    "correctAnswer": "c",
    "explanation": "Geitonogamy is ecologically cross-pollination (requires a pollinator) but genetically self-pollination because pollen originates from the same plant genotype."
  },
  {
    "id": "c12-bot-1-mcq-8",
    "question": "Which of the following is a characteristic adaptation of wind-pollinated (anemophilous) flowers?",
    "options": [
      "A):   Brightly colored fragrant petals",
      "B):   Large, sticky pollen coated with pollenkitt",
      "C):   Abundant nectar glands",
      "D):   Feathery stigmas and lightweight non-sticky pollen"
    ],
    "correctAnswer": "d",
    "explanation": "Wind-pollinated flowers have exposed stamens, light dry non-sticky pollen, and large feathery stigmas to efficiently trap airborne pollen grains."
  },
  {
    "id": "c12-bot-1-mcq-9",
    "question": "Pollination on the surface of water in <i>Vallisneria</i> is termed:",
    "options": [
      "A):   Epihydrophily",
      "B):   Hypohydrophily",
      "C):   Entomophily",
      "D):   Ornithophily"
    ],
    "correctAnswer": "a",
    "explanation": "In <i>Vallisneria</i>, female flowers float to the surface via long stalks to meet detached floating male flowers (Epihydrophily)."
  },
  {
    "id": "c12-bot-1-mcq-10",
    "question": "The mutualistic obligate relationship for pollination and oviposition occurs between:",
    "options": [
      "A):   <i>Ficus</i> and Honeybee",
      "B):   <i>Yucca</i> and <i>Pronuba</i> moth",
      "C):   <i>Ophrys</i> and Butterfly",
      "D):   <i>Salvia</i> and Ant"
    ],
    "correctAnswer": "b",
    "explanation": "The <i>Pronuba</i> moth deposits eggs inside the ovary locule of <i>Yucca</i> while pollinating it; both species depend strictly on each other to complete their life cycles."
  },
  {
    "id": "c12-bot-1-mcq-11",
    "question": "Maturation of anthers and shedding of pollen prior to stigma receptivity in a bisexual flower is called:",
    "options": [
      "A):   Protandry",
      "B):   Protogyny",
      "C):   Herkogamy",
      "D):   Heterostyly"
    ],
    "correctAnswer": "a",
    "explanation": "Protandry is an outbreeding mechanism where anthers mature and dehisce before the stigma of the same flower becomes receptive (e.g., Sunflower, <i>Salvia</i>)."
  },
  {
    "id": "c12-bot-1-mcq-12",
    "question": "Double fertilization in angiosperms involves which two nuclear events?",
    "options": [
      "A):   Syngamy and Triple Fusion",
      "B):   Syngamy and Apomixis",
      "C):   Parthenogenesis and Syngamy",
      "D):   Triple Fusion and Parthenocarpy"
    ],
    "correctAnswer": "a",
    "explanation": "Double fertilization consists of Syngamy (male gamete [n] + egg [n] &rarr; zygote [2n]) and Triple Fusion (male gamete [n] + 2 polar nuclei [n+n] &rarr; PEN [3n])."
  },
  {
    "id": "c12-bot-1-mcq-13",
    "question": "The liquid portion of tender coconut represents which type of endosperm?",
    "options": [
      "A):   Cellular endosperm",
      "B):   Helobial endosperm",
      "C):   Free-nuclear endosperm",
      "D):   Perispermic endosperm"
    ],
    "correctAnswer": "c",
    "explanation": "Coconut water consists of thousands of free nuclei floating in a central liquid vacuole, representing free-nuclear endosperm."
  },
  {
    "id": "c12-bot-1-mcq-14",
    "question": "The single shield-shaped lateral cotyledon in a grass embryo is called:",
    "options": [
      "A):   Coleoptile",
      "B):   Coleorhiza",
      "C):   Epiblast",
      "D):   Scutellum"
    ],
    "correctAnswer": "d",
    "explanation": "The Scutellum is the specialized single lateral cotyledon of monocot/grass embryos that absorbs nutrients from the adjacent endosperm."
  },
  {
    "id": "c12-bot-1-mcq-15",
    "question": "Persistent residual nucellus found in mature seeds of black pepper and beet is termed:",
    "options": [
      "A):   Pericarp",
      "B):   Perisperm",
      "C):   Endocarp",
      "D):   Tegmen"
    ],
    "correctAnswer": "b",
    "explanation": "Perisperm is the diploid persistent nucellar tissue that remains in certain mature seeds like black pepper and beet."
  },
  {
    "id": "c12-bot-1-mcq-16",
    "question": "If the diploid chromosome number of an angiosperm is 2n = 24, how many chromosomes are present in its endosperm and antipodal cells?",
    "options": [
      "A):   Endosperm = 24, Antipodals = 12",
      "B):   Endosperm = 36, Antipodals = 12",
      "C):   Endosperm = 36, Antipodals = 24",
      "D):   Endosperm = 48, Antipodals = 12"
    ],
    "correctAnswer": "b",
    "explanation": "Since n = 12: Endosperm is triploid (3n = 36) and Antipodal cells are haploid (n = 12)."
  },
  {
    "id": "c12-bot-1-mcq-17",
    "question": "How many meiotic divisions are required to produce 100 viable seeds in a typical flowering plant?",
    "options": [
      "A):   100",
      "B):   200",
      "C):   125",
      "D):   50"
    ],
    "correctAnswer": "c",
    "explanation": "100 seeds require 100 pollen grains (100/4 = 25 meiotic divisions in PMCs) and 100 functional megaspores (100 meiotic divisions in MMCs). Total meiotic divisions = 25 + 100 = 125."
  },
  {
    "id": "c12-bot-1-mcq-18",
    "question": "Which of the following plants produces both chasmogamous and cleistogamous flowers?",
    "options": [
      "A):   <i>Viola</i> (Pansy)",
      "B):   <i>Vallisneria</i>",
      "C):   <i>Zostera</i>",
      "D):   <i>Parthenium</i>"
    ],
    "correctAnswer": "a",
    "explanation": "<i>Viola</i> (common pansy), <i>Oxalis</i>, and <i>Commelina</i> produce both open chasmogamous flowers and closed cleistogamous flowers."
  },
  {
    "id": "c12-bot-1-mcq-19",
    "question": "Adventive polyembryony in <i>Citrus</i> and <i>Mango</i> arises due to mitotic division of:",
    "options": [
      "A):   Synergid cells",
      "B):   Antipodal cells",
      "C):   Nucellar or integument cells",
      "D):   Secondary endosperm nucleus"
    ],
    "correctAnswer": "c",
    "explanation": "In adventive polyembryony, maternal diploid cells from the nucellus or integuments divide and protrude into the embryo sac, developing into embryos."
  },
  {
    "id": "c12-bot-1-mcq-20",
    "question": "An example of a false fruit (pseudocarp) where the thalamus contributes to the edible portion is:",
    "options": [
      "A):   Mango",
      "B):   Tomato",
      "C):   Apple",
      "D):   Banana"
    ],
    "correctAnswer": "c",
    "explanation": "In apple (also strawberry and cashew), the edible fleshy portion is derived from the enlarged thalamus surrounding the ovary, making it a false fruit."
  },
  {
    "id": "c12-bot-1-mcq-21",
    "question": "In artificial hybridization, emasculation is NOT required when:",
    "options": [
      "A):   The female parent bears unisexual female flowers",
      "B):   The female parent bears bisexual flowers",
      "C):   The male parent is self-incompatible",
      "D):   Pollination is carried out by wind"
    ],
    "correctAnswer": "a",
    "explanation": "If the female parent produces unisexual female flowers (pistillate), there are no anthers to remove, so emasculation is unnecessary."
  },
  {
    "id": "c12-bot-1-mcq-22",
    "question": "The oldest seed tested to have germinated after an estimated 10,000 years of dormancy belongs to:",
    "options": [
      "A):   <i>Phoenix dactylifera</i>",
      "B):   <i>Lupinus arcticus</i>",
      "C):   <i>Nelumbo nucifera</i>",
      "D):   <i>Victoria amazonica</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Seeds of <i>Lupinus arcticus</i> (Arctic lupine) excavated from Arctic tundra germinated and flowered after approximately 10,000 years of dormancy."
  },
  {
    "id": "c12-bot-1-mcq-23",
    "question": "Entry of the pollen tube through the chalazal end of the ovule is called:",
    "options": [
      "A):   Porogamy",
      "B):   Mesogamy",
      "C):   Chalazogamy",
      "D):   Syngamy"
    ],
    "correctAnswer": "c",
    "explanation": "Entry of the pollen tube via the chalaza is called Chalazogamy (e.g., in <i>Casuarina</i>, <i>Betula</i>)."
  },
  {
    "id": "c12-bot-1-mcq-24",
    "question": "What is the ploidy level of aleurone layer and scutellum in a maize seed?",
    "options": [
      "A):   Aleurone layer = 3n, Scutellum = 2n",
      "B):   Aleurone layer = 2n, Scutellum = 3n",
      "C):   Aleurone layer = n, Scutellum = 2n",
      "D):   Aleurone layer = 3n, Scutellum = 3n"
    ],
    "correctAnswer": "a",
    "explanation": "The aleurone layer is the protein-rich outer layer of the triploid endosperm (3n), whereas the scutellum is the cotyledon of the diploid embryo (2n)."
  },
  {
    "id": "c12-bot-1-mcq-25",
    "question": "Apomixis is biologically defined as:",
    "options": [
      "A):   Development of fruit without fertilization",
      "B):   Development of seeds without fertilization",
      "C):   Fusion of two dissimilar gametes",
      "D):   Formation of multiple embryos from cleavage of zygote"
    ],
    "correctAnswer": "b",
    "explanation": "Apomixis is a form of asexual reproduction that produces viable seeds without meiosis and syngamy."
  }
];
