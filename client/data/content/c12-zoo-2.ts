// Class 12 Zoology Chapter 2: Genetics and Evolution (Sex Determination, Disorders, HGP, DNA Fingerprinting & Evolution)
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Zoology | Class: 12 | Code: c12-zoo-2

export const c12Zoo2HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.12), rgba(81, 45, 168, 0.12)); border: 1.5px solid rgba(124, 77, 255, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 12px 0; font-size: 17.5px; font-weight: bold; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📖</span> Quick Glossary &amp; Evolutionary Genetics Terms
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #7C4DFF;">Haplodiploidy:</b> Sex determination mechanism in honey bees where unfertilized eggs develop into haploid males (drones, n=16) and fertilized eggs into diploid females (2n=32).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #7C4DFF;">Criss-Cross Inheritance:</b> Transmission of an X-linked recessive gene from an affected father to his grandson through his carrier daughter.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #7C4DFF;">Aneuploidy:</b> Gain or loss of one or more individual chromosomes due to non-disjunction during meiosis (e.g., Trisomy 21 in Down's syndrome).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #7C4DFF;">VNTRs (Minisatellites):</b> Variable Number of Tandem Repeats; short hypervariable repetitive DNA sequences utilized in DNA fingerprinting.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #7C4DFF;">Homologous Organs:</b> Structures sharing common anatomical origin and basic plan but adapted for divergent functions (Divergent Evolution).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #7C4DFF;">Genetic Drift:</b> Random, non-directional fluctuations in allele frequencies in small isolated populations due to chance alone (Sewall Wright Effect).
      </div>
    </div>
  </div>

  <!-- SECTION 1: SEX DETERMINATION & GENETICS -->
  <h2 style="color: #7C4DFF; border-bottom: 2px solid #7C4DFF; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Sex Determination, Linkage &amp; Sex-Linked Inheritance
  </h2>

  <h3 style="color: #7C4DFF; margin-top: 18px; font-size: 16.5px;">(i) Sex Determination Mechanisms</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 15.5px;">👨‍🦱 1. XX-XY Type (Humans &amp; Drosophila)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        <b style="color: #7C4DFF;">Male Heterogamety:</b> Males possess 44 autosomes + XY, producing two types of sperms (50% with X, 50% with Y). Females are homogametic (44 + XX), producing only X-bearing ova.
        <br/>&bull; The Y-chromosome carries the <b>SRY gene</b> (Sex-determining Region Y) encoding Testis-Determining Factor (TDF).
        <br/>&bull; The genetic sex of the child is strictly determined by the father's sperm at fertilization.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 15.5px;">🦅 2. ZZ-ZW Type (Birds &amp; Reptiles)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        <b style="color: #7C4DFF;">Female Heterogamety:</b> Females possess ZW sex chromosomes, producing two types of eggs (50% with Z, 50% with W). Males are homogametic (ZZ), producing only Z-bearing sperms.
        <br/>&bull; Here, the maternal ovum determines the sex of the offspring.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 15.5px;">🐝 3. Haplodiploidy (Honey Bees)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Governed by ploidy level:
        <br/>&bull; <b style="color: #7C4DFF;">Males (Drones, n=16):</b> Develop by parthenogenesis from unfertilized haploid eggs; produce sperms by mitosis; have no father and no sons, but have a grandfather and grandsons.
        <br/>&bull; <b style="color: #7C4DFF;">Females (Queen/Workers, 2n=32):</b> Develop from fertilized diploid eggs.
      </p>
    </div>
  </div>

  <h3 style="color: #7C4DFF; margin-top: 22px; font-size: 16.5px;">(ii) Linkage, Recombination &amp; Chromosome Mapping</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #7C4DFF;">Linkage (T.H. Morgan, 1910):</b> Physical association of two or more genes located on the same chromosome that tend to be inherited together during meiosis. Morgan crossed yellow-bodied, white-eyed females with wild brown-bodied, red-eyed males in <i>Drosophila melanogaster</i> and observed <b>98.7% parental combinations and only 1.3% recombinants</b>.</li>
    <li><b style="color: #7C4DFF;">Crossing Over &amp; Genetic Mapping:</b> Exchange of genetic segments between non-sister chromatids of homologous chromosomes during Pachytene of Meiosis I. Morgan's student <b>Alfred Sturtevant</b> utilized recombination frequencies as a measure of distance between genes, where <b>1% recombination = 1 Map Unit (cM / centiMorgan)</b>.</li>
  </ul>

  <h3 style="color: #7C4DFF; margin-top: 22px; font-size: 16.5px;">(iii) Sex-Linked Inheritance: Haemophilia &amp; Colour Blindness</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #7C4DFF;">Criss-Cross Pattern:</b> X-linked recessive traits show transmission from carrier mother (X<sup>C</sup> X<sup>c</sup>) to son (X<sup>c</sup> Y), and from affected father (X<sup>c</sup> Y) to carrier daughter (X<sup>C</sup> X<sup>c</sup>), who then transmits it to her sons (X<sup>c</sup> Y). Males are hemizygous (XY) and express the disease if they inherit a single mutant X-chromosome.</li>
      <li><b style="color: #7C4DFF;">Haemophilia ("Royal Disease"):</b> X-linked recessive bleeding disorder where blood clotting is defective due to deficiency of clotting <b>Factor VIII</b> (Haemophilia A) or <b>Factor IX</b> (Haemophilia B). Even a minor cut leads to non-stop fatal bleeding. Queen Victoria was a famous carrier.</li>
      <li><b style="color: #7C4DFF;">Colour Blindness:</b> X-linked recessive defect resulting in failure to discriminate between red and green colors due to mutation in cone photoreceptor pigments. Affects <b>~8% of males and only ~0.4% of females</b> because females require mutant alleles on both X chromosomes (X<sup>c</sup> X<sup>c</sup>) to be color blind.</li>
    </ul>
  </div>

  <!-- SECTION 2: HUMAN GENETIC DISORDERS -->
  <h2 style="color: #7C4DFF; border-bottom: 2px solid #7C4DFF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Mendelian &amp; Chromosomal Disorders in Humans
  </h2>

  <h3 style="color: #7C4DFF; margin-top: 18px; font-size: 16.5px;">(i) Mendelian Disorders: Thalassemia vs Sickle Cell Anemia</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 15.5px;">🩸 Thalassemia (Quantitative Defect)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Autosomal recessive blood disorder caused by mutation/deletion of globin genes, resulting in <b>reduced synthesis rate</b> of normal globin chains, leading to microcytic hypochromic anemia.
        <br/>&bull; <b style="color: #7C4DFF;">&alpha;-Thalassemia:</b> Governed by 4 closely linked genes (HBA1 and HBA2) on chromosome 16.
        <br/>&bull; <b style="color: #7C4DFF;">&beta;-Thalassemia:</b> Governed by a single HBB gene on chromosome 11.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 15.5px;">🔬 Sickle Cell Anemia (Qualitative Defect)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Autosomal recessive disorder caused by a single <b>point mutation (GAG  &rarr;  GUG)</b> in the 6th codon of the &beta;-globin gene, substituting <b>Glutamic acid with Valine</b>.
        <br/>&bull; Under low oxygen tension, mutant Hb<sup>S</sup> polymerizes into fibrous crystals, distorting biconcave RBCs into rigid sickle-like shapes, causing vaso-occlusive crises.
      </p>
    </div>
  </div>

  <h3 style="color: #7C4DFF; margin-top: 22px; font-size: 16.5px;">(ii) Chromosomal Disorders (Aneuploidy)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #7C4DFF;">1. Down's Syndrome (Trisomy 21, Langdon Down 1866):</b> Karyotype: <b>47, XX/XY, +21</b>. Cause: Non-disjunction of chromosome 21 during maternal oogenesis. Symptoms: Short stature, small round head, furrowed tongue, partially open mouth, broad flat palm with single transverse <b>simian crease</b>, congenital heart defects, and physical/mental retardation.</li>
      <li><b style="color: #7C4DFF;">2. Turner's Syndrome (Monosomy X):</b> Karyotype: <b>45, X0</b>. Cause: Absence of one X-chromosome in females. Symptoms: Sterile females with rudimentary streak ovaries, short stature, webbed neck, broad shield-shaped chest, underdeveloped breasts, and lack of secondary sexual characteristics.</li>
      <li><b style="color: #7C4DFF;">3. Klinefelter's Syndrome (Sex Chromosome Trisomy):</b> Karyotype: <b>47, XXY</b>. Cause: Extra X-chromosome in males. Symptoms: Overall masculine body habitus with feminine development, notably breast enlargement (<b>Gynaecomastia</b>), tall stature with long limbs, small testes, azoospermia, and sterility.</li>
    </ul>
  </div>

  <!-- SECTION 3: HGP & DNA FINGERPRINTING -->
  <h2 style="color: #7C4DFF; border-bottom: 2px solid #7C4DFF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Human Genome Project (HGP) &amp; DNA Fingerprinting
  </h2>

  <h3 style="color: #7C4DFF; margin-top: 18px; font-size: 16.5px;">(i) Human Genome Project (HGP, 1990–2003)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #7C4DFF;">Mega-Project Scope:</b> 13-year international initiative coordinated by US DOE and NIH to sequence all <b>3  &times;  10<sup>9</sup> base pairs</b> of the human genome. Pioneered the discipline of <b>Bioinformatics</b>.</li>
    <li><b style="color: #7C4DFF;">Methodologies:</b>
      <br/>&bull; <i>Expressed Sequence Tags (ESTs):</i> Identifying all genes expressed as RNA.
      <br/>&bull; <i>Sequence Annotation:</i> Blindly sequencing the entire genomic DNA (coding and non-coding) using <b>BAC (Bacterial Artificial Chromosomes)</b> and <b>YAC (Yeast Artificial Chromosomes)</b> cloning vectors, sequenced via automated DNA sequencers based on <b>Frederick Sanger's dideoxy method</b>.
    </li>
    <li><b style="color: #7C4DFF;">Salient Features of Human Genome:</b>
      <br/>1. Human genome contains <b>3164.7 million base pairs</b>.
      <br/>2. Average gene contains 3,000 bases; largest human gene is <b>Dystrophin (2.4 million bp)</b>.
      <br/>3. Total gene count is estimated at <b>~30,000 genes</b> (99.9% nucleotide bases are identical in all humans).
      <br/>4. Less than <b>2% of genome codes for proteins</b>; repeated sequences make up large portions.
      <br/>5. Chromosome 1 has the most genes (<b>2,968 genes</b>); the Y chromosome has the fewest (<b>231 genes</b>).
      <br/>6. Scientists identified ~1.4 million locations of <b>SNPs (Single Nucleotide Polymorphisms)</b>.
    </li>
  </ul>

  <h3 style="color: #7C4DFF; margin-top: 22px; font-size: 16.5px;">(ii) DNA Fingerprinting (Alec Jeffreys, 1984)</h3>
  <p>
    DNA Fingerprinting utilizes <b>Variable Number of Tandem Repeats (VNTRs)</b> belonging to minisatellite repetitive non-coding DNA exhibiting high degree of allelic polymorphism inherited from parents.
  </p>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <h4 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 15.5px;">Methodology Steps:</h4>
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #7C4DFF;">1. DNA Extraction:</b> High molecular weight DNA isolated from blood, semen, saliva, or hair roots.</li>
      <li><b style="color: #7C4DFF;">2. Restriction Digestion:</b> DNA cleaved into specific fragments by restriction endonucleases.</li>
      <li><b style="color: #7C4DFF;">3. Agarose Gel Electrophoresis:</b> Fragments separated according to size based on electric charge.</li>
      <li><b style="color: #7C4DFF;">4. Southern Blotting:</b> Separated DNA bands transferred onto a synthetic nitrocellulose or nylon membrane.</li>
      <li><b style="color: #7C4DFF;">5. Hybridization:</b> Membrane hybridized with radiolabeled (<sup>32</sup>P) VNTR probe.</li>
      <li><b style="color: #7C4DFF;">6. Autoradiography:</b> Membrane exposed to X-ray film to generate a unique pattern of dark barcode-like bands (DNA profile).</li>
    </ol>
  </div>

  <!-- SECTION 4: EVOLUTION -->
  <h2 style="color: #7C4DFF; border-bottom: 2px solid #7C4DFF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Origin of Life, Theories &amp; Mechanisms of Evolution
  </h2>

  <h3 style="color: #7C4DFF; margin-top: 18px; font-size: 16.5px;">(i) Origin of Life &amp; Urey-Miller Experiment (1953)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #7C4DFF;">Oparin-Haldane Chemical Theory:</b> Life originated abiogenetically from non-living organic molecules in a reducing primitive Earth atmosphere (CH_4, NH_3, H_2O, H_2, devoid of free O_2).</li>
    <li><b style="color: #7C4DFF;">Urey-Miller Experiment (1953):</b> Stanley Miller and Harold Urey created primitive Earth conditions in a closed glass apparatus, subjecting a gaseous mixture of CH_4, NH_3, H_2, and water vapor (2 : 2 : 1 ratio) to electric spark discharge (75,000 volts) at <b>800&deg;C</b>. After one week, they detected formation of simple amino acids: <b>Glycine, Alanine, and Aspartic acid</b>, proving the biochemical origin of life.</li>
  </ul>

  <h3 style="color: #7C4DFF; margin-top: 22px; font-size: 16.5px;">(ii) Evidences for Biological Evolution</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 15.5px;">🦴 Homologous Organs (Divergent Evolution)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Structures having the same fundamental anatomical structure and embryological origin, adapted for different functions.
        <br/>&bull; <i>Examples:</i> Forelimbs of Human, Cheetah, Whale, and Bat (humerus, radius, ulna, carpals, digits).
        <br/>&bull; <i>Plants:</i> Thorns of <i>Bougainvillea</i> and Tendrils of <i>Cucurbita</i> (both are modified axillary buds).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 15.5px;">🦋 Analogous Organs (Convergent Evolution)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Structures having different anatomical origins but performing similar functions due to adaptation to similar ecological niches.
        <br/>&bull; <i>Examples:</i> Wings of Birds (modified forelimbs) and Wings of Butterfly (chitinous folds).
        <br/>&bull; Eye of Octopus and Eye of Mammals; Flippers of Penguins and Dolphins; Sweet potato (root) and Potato (stem).
      </p>
    </div>
  </div>

  <h3 style="color: #7C4DFF; margin-top: 22px; font-size: 16.5px;">(iii) Natural Selection, Industrial Melanism &amp; Types of Selection</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #7C4DFF;">Industrial Melanism (<i>Biston betularia</i>):</b> In pre-industrial England (1850s), white-winged moths camouflaged against lichen-covered tree trunks, while dark melanic moths were predated by birds. Post-industrialization (1920s), soot covered tree trunks and killed lichens; melanic moths survived better due to camouflage, whereas white moths were preyed upon, shifting the population (Directional Natural Selection).</li>
    <li><b style="color: #7C4DFF;">Types of Natural Selection:</b>
      <br/>1. <b style="color: #7C4DFF;">Stabilizing Selection:</b> Favors intermediate average phenotypes; peak gets narrower and higher (e.g., human infant birth weight ~3 kg).
      <br/>2. <b style="color: #7C4DFF;">Directional Selection:</b> Favors one extreme phenotype; peak shifts in one direction (e.g., DDT resistance in mosquitoes).
      <br/>3. <b style="color: #7C4DFF;">Disruptive Selection:</b> Favors both extreme phenotypes over intermediate; creates two distinct peaks.
    </li>
  </ul>

  <h3 style="color: #7C4DFF; margin-top: 22px; font-size: 16.5px;">(iv) Hardy-Weinberg Principle &amp; Adaptive Radiation</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #7C4DFF;">Hardy-Weinberg Principle:</b> Allele frequencies in a large, randomly mating, non-evolving population remain constant from generation to generation:
      p + q = 1  &rArr;  p<sup>2</sup> + 2pq + q<sup>2</sup> = 1
      Where p = Frequency of dominant allele A, q = Frequency of recessive allele a, p<sup>2</sup> = Frequency of AA, 2pq = Frequency of Aa, q<sup>2</sup> = Frequency of aa.
      <br/><b style="color: #7C4DFF;">5 Factors Disrupting Equilibrium:</b> (1) Gene Migration / Gene Flow, (2) Genetic Drift (Founder effect / Bottleneck), (3) Mutation, (4) Genetic Recombination, (5) Natural Selection.
    </li>
    <li><b style="color: #7C4DFF;">Adaptive Radiation:</b> Evolutionary process wherein ancestral species radiate into different ecological niches, developing diverse morphological adaptations (e.g., <b>Darwin's Finches</b> in Galapagos Islands diversifying beak structures; Australian Marsupials).</li>
  </ul>

  <h3 style="color: #7C4DFF; margin-top: 22px; font-size: 16.5px;">(v) Human Evolution (Chronological Sequence)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(124, 77, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #7C4DFF;">1. <i>Dryopithecus</i> &amp; <i>Ramapithecus</i> (15 mya):</b> Hairy primates walking like gorillas/chimpanzees. <i>Dryopithecus</i> was more ape-like; <i>Ramapithecus</i> was more man-like.</li>
      <li><b style="color: #7C4DFF;">2. <i>Australopithecus</i> (2–3 mya):</b> Lived in East African grasslands; hunted with stone weapons; ate fruits; brain capacity <b>450-600 cc</b>.</li>
      <li><b style="color: #7C4DFF;">3. <i>Homo habilis</i> ("Handy Man", 2 mya):</b> First hominid human ancestor; made crude stone tools; did not eat meat; brain capacity <b>650-800 cc</b>.</li>
      <li><b style="color: #7C4DFF;">4. <i>Homo erectus</i> ("Java Man", 1.5 mya):</b> Erect posture; ate meat; used fire; brain capacity <b>900 cc</b>.</li>
      <li><b style="color: #7C4DFF;">5. <i>Homo neanderthalensis</i> (100,000–40,000 years ago):</b> Lived in Near East and Central Asia; used animal hides to protect bodies; buried their dead; cranial capacity <b>1400 cc</b>.</li>
      <li><b style="color: #7C4DFF;">6. <i>Homo sapiens</i> (Modern Man, 75,000–10,000 years ago):</b> Arose in Africa during the ice age; developed prehistoric cave art (Bhimbetka, 18,000 yrs ago); agriculture developed ~10,000 yrs ago; cranial capacity <b>1350-1450 cc</b>.</li>
    </ol>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(45, 12, 85, 0.85)); border: 2px solid #7C4DFF; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #7C4DFF; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Zoology Chapter 2: Genetics &amp; Evolution Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(124, 77, 255, 0.25); color: #7C4DFF; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Concept / Hominid Stage</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Genetic / Anatomical Formula</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Diagnostic Key Facts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #7C4DFF;">Down's Syndrome:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">47, XX/XY, +21</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Trisomy 21; Simian palm crease, furrowed tongue</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #7C4DFF;">Turner's Syndrome:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">45, X0</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Monosomy X; sterile female, webbed neck, streak ovaries</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #7C4DFF;">Klinefelter's Syndrome:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">47, XXY</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Extra X in male; Gynaecomastia, azoospermia, sterile</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #7C4DFF;">Sickle Cell Anemia:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">GAG  &rarr;  GUG (Glu &rarr; Val)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Point mutation at 6th codon of &beta;-globin; sickle RBCs</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #7C4DFF;">Hardy-Weinberg Law:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">p<sup>2</sup> + 2pq + q<sup>2</sup> = 1</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Genetic equilibrium maintained in absence of drift/mutation</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #7C4DFF;"><i>Homo habilis</i>:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">650 - 800 cc</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">First tool maker ("Handy man"); non-meat eater</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #7C4DFF;"><i>Homo erectus</i>:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">900 cc</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Java man; 1.5 mya; meat eater; erect posture</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #7C4DFF;">Neanderthal Man:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">1400 cc</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Near East/Central Asia; buried dead; used animal hides</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c12Zoo2HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.15), rgba(81, 45, 168, 0.15)); border: 1.5px solid rgba(124, 77, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #7C4DFF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Genetic Terms, Karyotypes, HGP Metrics &amp; Fossil Ancestors</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: What type of sex determination occurs in human beings?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      XX-XY type (male heterogamety).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Which specific gene on the Y-chromosome determines male maleness in humans?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The <i>SRY</i> gene (Sex-determining Region Y) producing TDF (Testis-Determining Factor).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What type of sex determination is found in birds?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ZZ-ZW type (female heterogamety: females are ZW, males are ZZ).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Explain the ploidy level of male drones in honey bees.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Drones are haploid (n=16) because they develop parthenogenetically from unfertilized eggs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Define Linkage.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The physical association of two or more genes located on the same chromosome that tend to be inherited together.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: Who coined the term 'Linkage' and demonstrated it in <i>Drosophila</i>?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Thomas Hunt Morgan (1910).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: What is 1 map unit (centiMorgan / cM) in genetic mapping?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The genetic distance between two gene loci that yields 1% recombination frequency.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What is Criss-Cross Inheritance?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The inheritance pattern of an X-linked recessive trait from an affected father to his grandson through his carrier daughter.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Name the clotting factor deficient in Haemophilia A.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Clotting Factor VIII (Anti-hemophilic factor).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Why are human males more frequently affected by red-green colour blindness than females?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because males have only one X chromosome (hemizygous, X<sup>c</sup> Y) and express the disease with a single mutant allele, whereas females require two (X<sup>c</sup> X<sup>c</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Differentiate between Thalassemia and Sickle Cell Anemia.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Thalassemia is a quantitative disorder (reduced synthesis of normal globin chains), whereas Sickle cell anemia is a qualitative disorder (synthesis of defective mutant &beta;-globin).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Which chromosome carries the &alpha;-globin genes in humans?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Chromosome 16 (HBA1 and HBA2 genes).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What point mutation occurs in the &beta;-globin gene in Sickle Cell Anemia?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A transversion of GAG  &rarr;  GUG at the 6th codon substituting Glutamic acid with Valine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Define Aneuploidy.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The condition of having an abnormal number of chromosomes due to non-disjunction during meiosis (e.g., 2n+1 or 2n-1).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: What is the karyotype and chromosomal cause of Down's Syndrome?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      47, XX/XY, +21 caused by Trisomy (non-disjunction) of chromosome 21.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: State two diagnostic phenotypic features of Down's syndrome.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Furrowed tongue with partially open mouth and a single transverse simian crease on a broad palm.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: What is the chromosomal karyotype of Turner's Syndrome?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      45, X0 (Monosomy of X chromosome).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Name the sex chromosome disorder characterized by Gynaecomastia in sterile males.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Klinefelter's Syndrome (47, XXY).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: When was the Human Genome Project (HGP) launched and when was it completed?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Launched in 1990 and completed in 2003 (13-year mega-project).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What were the two primary cloning vectors used in the Human Genome Project?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      BAC (Bacterial Artificial Chromosome) and YAC (Yeast Artificial Chromosome).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What is the total estimated number of genes in the human genome?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Approximately 30,000 genes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Which human chromosome has the highest number of genes and which has the fewest?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Chromosome 1 has the most (2,968 genes); the Y chromosome has the fewest (231 genes).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What is the largest known human gene?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dystrophin gene on the X-chromosome spanning 2.4 million base pairs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What are VNTRs in DNA Fingerprinting?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Variable Number of Tandem Repeats; minisatellite repetitive DNA sequences (0.1–20 kb) exhibiting high allelic polymorphism.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Who developed the technique of DNA Fingerprinting?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sir Alec Jeffreys (1984); Lalji Singh pioneered it in India.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: What did the Urey-Miller experiment simulate and what did it synthesize?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Simulated primitive reducing Earth conditions (CH_4, NH_3, H_2, H_2O at 800&deg;C); synthesized amino acids (Glycine, Alanine, Aspartic acid).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Define Homologous Organs with one plant example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Organs sharing common anatomical origin but performing different functions (e.g., Thorns of <i>Bougainvillea</i> and Tendrils of <i>Cucurbita</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Define Analogous Organs with one animal example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Organs with different anatomical origins performing similar functions (e.g., Wings of birds and Wings of butterfly).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: What type of evolution is indicated by Homologous Organs?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Divergent Evolution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What type of evolution is indicated by Analogous Organs?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Convergent Evolution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Explain Industrial Melanism in the peppered moth (<i>Biston betularia</i>).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pre-industrial white moths survived on light lichens; post-industrial soot favored dark melanic moths due to camouflage from predatory birds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is Hugo de Vries' Mutation Theory of evolution?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Evolution occurs through sudden, discontinuous, random single-step large mutations called <b>Saltation</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Name the three types of Natural Selection curves.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Stabilizing selection, Directional selection, and Disruptive selection.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Write the binomial expansion equation for the Hardy-Weinberg Principle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      p<sup>2</sup> + 2pq + q<sup>2</sup> = 1 (where p + q = 1).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: What is Genetic Drift (Sewall Wright Effect)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Random changes in allele frequencies in a small population occurring purely by chance.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: What is the Founder Effect?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When a small migrant group establishes a new population with an allele frequency significantly different from the parent population.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Define Adaptive Radiation with one classic example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Evolutionary divergence of an ancestral species radiating into different ecological niches (e.g., Darwin's Finches in Galapagos).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: Name the first tool-making human ancestor and its cranial capacity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Homo habilis</i> ('Handy Man') with a cranial capacity of 650–800 cc.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: What was the cranial capacity of <i>Homo erectus</i> (Java Man)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Approximately 900 cc.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Which extinct human species had a brain capacity of 1400 cc and buried their dead?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Neanderthal Man (<i>Homo neanderthalensis</i>).
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.15), rgba(81, 45, 168, 0.15)); border: 1.5px solid rgba(124, 77, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #7C4DFF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Pedigree Crosses, HGP Features, Hardy-Weinberg &amp; Selection Models</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain Sex Determination in Honey Bees (Haplodiploidy).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sex is determined by chromosome set number: Queen and female workers develop from fertilized diploid eggs (2n=32); male drones develop by parthenogenesis from unfertilized haploid eggs (n=16) and produce sperms by mitosis. Drones have no father and cannot have sons, but have a grandfather and grandsons.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Describe Thomas Hunt Morgan's linkage experiment in <i>Drosophila</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Morgan crossed yellow-bodied, white-eyed females (yw) with wild brown-bodied, red-eyed males (y<sup>+</sup> w<sup>+</sup>). The F_2 generation showed 98.7% parental combinations and only 1.3% recombinants because the genes for body and eye color were closely linked on the X chromosome.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: How did Alfred Sturtevant construct the first Genetic Map?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sturtevant recognized that the frequency of crossing-over (recombination) between two linked gene pairs is proportional to the physical distance separating them on the chromosome (1% recombination = 1 Map Unit or cM), allowing linear genetic mapping.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain the inheritance of Haemophilia when a normal man marries a carrier woman.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mother is carrier (X<sup>H</sup> X<sup>h</sup>) and father is normal (X<sup>H</sup> Y). Offspring genotypes: 25% normal female (X<sup>H</sup> X<sup>H</sup>), 25% carrier female (X<sup>H</sup> X<sup>h</sup>), 25% normal male (X<sup>H</sup> Y), and 25% haemophilic male (X<sup>h</sup> Y). 50% of the sons will suffer from haemophilia.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Describe the molecular pathology of Sickle Cell Anemia.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sickle cell anemia is caused by a point mutation converting GAG  &rarr;  GUG at the 6th codon of the &beta;-globin gene, replacing polar Glutamic acid with non-polar Valine. Under low oxygen tension, mutant Hb<sup>S</sup> polymerizes into fibrous insoluble polymers, turning RBCs sickle-shaped and causing hemolytic anemia.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Differentiate between &alpha;-Thalassemia and &beta;-Thalassemia.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">&alpha;-Thalassemia:</b> Caused by deletion/mutation of HBA1 and HBA2 genes on chromosome 16, reducing &alpha;-globin chain synthesis. <b style="color: #7C4DFF;">&beta;-Thalassemia:</b> Caused by mutation of single HBB gene on chromosome 11, reducing &beta;-globin chain synthesis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Explain Down's Syndrome: Etiology, Karyotype, and clinical features.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Etiology:</b> Trisomy 21 (47, XX/XY, +21) due to meiotic non-disjunction. <b style="color: #7C4DFF;">Features:</b> Short stature, round face, furrowed tongue, partially open mouth, broad palm with single simian crease, cardiac malformations, and mental retardation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Describe Turner's Syndrome and Klinefelter's Syndrome.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Turner's (45, X0):</b> Monosomy X; sterile females, short stature, webbed neck, rudimentary streak ovaries. <b style="color: #7C4DFF;">Klinefelter's (47, XXY):</b> Sex chromosome trisomy in males; overall masculine habitus with gynaecomastia (breast development), small testes, and azoospermia.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Differentiate between Expressed Sequence Tags (ESTs) and Sequence Annotation in HGP.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">ESTs:</b> A gene-centric approach focused strictly on sequencing expressed functional genes (mRNAs). <b style="color: #7C4DFF;">Sequence Annotation:</b> A blind whole-genome shotgun sequencing approach sequencing all coding and non-coding regions, followed by computational functional assignment.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: State four major discoveries / salient features of the Human Genome Project.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Total size is 3164.7 million base pairs containing ~30,000 genes. 2. Less than 2% of genome codes for functional proteins. 3. Chromosome 1 has 2,968 genes; Y chromosome has 231 genes. 4. Over 1.4 million Single Nucleotide Polymorphism (SNP) locations exist.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Explain the role of VNTRs in DNA Fingerprinting.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      VNTRs (Variable Number of Tandem Repeats) are short nucleotide sequences (10–60 bp) repeated tandemly a variable number of times at specific chromosomal loci. Because VNTR copy number varies widely between individuals (high polymorphism) and is inherited mendelianly, it forms a unique DNA profile.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Describe the step-by-step procedure of DNA Fingerprinting.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Isolation of genomic DNA from biological sample. 2. Cleavage of DNA using restriction endonucleases. 3. Separation of fragments by agarose gel electrophoresis. 4. Southern blotting onto nylon membrane. 5. Hybridization with <sup>32</sup>P-labeled VNTR probe. 6. Detection of banding pattern via autoradiography.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Describe the Urey-Miller Experiment (1953) with apparatus details.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Miller and Urey passed continuous electric spark discharges (75,000 V) through a spark chamber containing CH_4, NH_3, H_2, and water vapor (2:2:1 ratio) at 800&deg;C to simulate lightning in a reducing primitive atmosphere. After a week, condensed fluid contained simple amino acids: Glycine, Alanine, and Aspartic acid.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Differentiate between Homologous and Analogous organs with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Homology (Divergent Evolution):</b> Same anatomical origin, different functions (e.g., Forelimbs of Human, Cheetah, Whale, Bat; Thorn of <i>Bougainvillea</i> and Tendril of <i>Cucurbita</i>). <b style="color: #7C4DFF;">Analogy (Convergent Evolution):</b> Different origin, similar function (e.g., Wings of bird and insect; Eye of octopus and mammal).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Explain Industrial Melanism as an example of Natural Selection in action.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In pre-industrial England, tree trunks were covered with white lichens; white moths camouflaged well while dark melanic mutants were predated. Post-industrialization, coal soot blackened trunks and killed lichens; melanic moths camouflaged better and survived, while white moths declined (Directional Selection).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Compare Darwin's Continuous Variations with Hugo de Vries' Mutation Theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Darwinian Variations:</b> Small, gradual, directional, continuous variations acting over long geological timescales. <b style="color: #7C4DFF;">De Vries' Mutations:</b> Sudden, large, random, directionless, discontinuous single-step mutations (termed <b>Saltation</b>) creating new species in one step.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Describe the three types of Natural Selection with graphical trends.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #7C4DFF;">Stabilizing:</b> Favors mean trait values (peak narrows; e.g., human birth weight). 2. <b style="color: #7C4DFF;">Directional:</b> Favors one extreme trait value (peak shifts; e.g., industrial melanism). 3. <b style="color: #7C4DFF;">Disruptive:</b> Favors both extreme trait values over the mean (two peaks form).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: State the Hardy-Weinberg Principle and list five factors disrupting it.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Allele frequencies in a large random-mating population remain constant over generations (p<sup>2</sup> + 2pq + q<sup>2</sup> = 1). Factors disrupting equilibrium: (1) Gene flow / migration, (2) Genetic drift, (3) Mutation, (4) Genetic recombination, (5) Natural selection.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain Genetic Drift, Founder Effect, and Bottleneck Effect.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Genetic Drift:</b> Random change in allele frequencies in small populations by chance. <b style="color: #7C4DFF;">Founder Effect:</b> When a small colonizing group carries a non-representative sample of genes to form a new population. <b style="color: #7C4DFF;">Bottleneck:</b> Dramatic reduction in population size due to natural disaster, drastically altering gene pool.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Describe Adaptive Radiation using Darwin's Finches as a model.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An ancestral seed-eating finch reached the isolated Galapagos archipelago. In the absence of competitors, descendants radiated into diverse ecological niches, evolving varied beak shapes adapted for insectivorous, cactus-feeding, fruit-eating, and vegetarian diets.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain Convergent Evolution using Australian Marsupials and Placental Mammals.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When different ancestral lineages evolve similar morphological adaptations due to identical ecological niches in geographically isolated regions. For example, Placental Wolf and Tasmanian Wolf; Anteater and Numbat; Flying Squirrel and Flying Phalanger.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Describe the chronological evolutionary lineage from <i>Dryopithecus</i> to <i>Homo sapiens</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Dryopithecus</i> (15 mya, ape-like) &rarr; <i>Ramapithecus</i> (15 mya, man-like) &rarr; <i>Australopithecus</i> (2–3 mya, 500 cc) &rarr; <i>Homo habilis</i> (2 mya, 650–800 cc, tool maker) &rarr; <i>Homo erectus</i> (1.5 mya, 900 cc, fire/meat) &rarr; <i>Homo neanderthalensis</i> (100,000–40,000 yrs, 1400 cc) &rarr; <i>Homo sapiens</i> (modern man).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: What is the significance of the <i>SRY</i> gene on the human Y chromosome?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The <i>SRY</i> (Sex-determining Region Y) gene encodes Testis-Determining Factor (TDF), a master transcription factor that directs the undifferentiated bipotential fetal gonads to develop into testes, driving male sexual differentiation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Explain why father to son transmission of Haemophilia does not occur.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Haemophilia is an X-linked recessive disorder. A father contributes only his Y chromosome to his sons; the son receives his single X chromosome exclusively from his mother. Therefore, an affected father cannot pass haemophilia to his sons.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: What is a Simian Crease and with which genetic disorder is it associated?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A single deep transverse crease running across the palm (instead of the normal two creases), characteristically diagnostic of <b style="color: #7C4DFF;">Down's Syndrome (Trisomy 21)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the concept of Single Nucleotide Polymorphisms (SNPs) in human genetics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      SNPs ('snips') are single base-pair variations in genomic DNA occurring in at least 1% of the population. HGP identified ~1.4 million SNP locations, which serve as molecular markers for tracing human ancestry and locating disease genes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: What is Southern Blotting in DNA Fingerprinting?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The capillary or vacuum transfer of electrophoretically separated DNA restriction fragments from an agarose gel onto a solid nylon or nitrocellulose membrane for hybridization probing.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Describe the Oparin-Haldane Hypothesis of Abiogenesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Oparin (Russia) and Haldane (England) proposed that the first forms of life originated spontaneously from pre-existing non-living organic molecules ('Primordial Soup') under reducing atmospheric conditions driven by solar UV and lightning energy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: What are Coacervates and Proteinoid Microspheres?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Prebiotic non-living colloidal droplets of macromolecules (proteins, polysaccharides, lipids) capable of maintaining an internal chemical environment distinct from surrounding water, considered precursors of the first cellular protobionts.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: How does Embryological evidence support biological evolution?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Early vertebrate embryos (fish, salamander, bird, human) possess similar structural features like pharyngeal gill slits and a post-anal tail, reflecting common evolutionary ancestry ('Ontogeny recapitulates phylogeny').
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain Anthropogenic Evidence for evolution with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Evolution driven by human actions: (1) Rapid selection of DDT-resistant mosquito strains within months of pesticide use. (2) Selection of multi-drug resistant bacterial 'superbugs' due to excessive antibiotic usage.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: What is Saltation according to Hugo de Vries?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Saltation is a single-step, large, discontinuous mutation that causes instant speciation, contrasting with Darwinian slow, gradual continuous evolutionary variations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain how Stabilizing Selection maintains optimal birth weight in human newborns.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Infants with very low birth weight (< 2 kg) have high neonatal mortality due to prematurity; infants with very high birth weight (> 4.5 kg) face delivery trauma and maternal complications. Natural selection favors the intermediate birth weight (~3 kg).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Describe the characteristics of <i>Homo habilis</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lived in East Africa ~2 million years ago; brain capacity 650–800 cc; made crude chipped stone tools ('Handy Man'); bipedal locomotion; herbivorous diet (did not eat meat).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Describe the physical and cultural characteristics of Neanderthal Man.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lived 100,000–40,000 years ago in Europe and Central Asia; brain capacity 1400 cc; stocky heavy-boned body adapted for ice-age cold; used animal hides for clothing; engaged in ceremonial burial of dead.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: What is the significance of the Bhimbetka rock shelters in human history?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Located in Madhya Pradesh, India, containing prehistoric rock cave paintings created by early <i>Homo sapiens</i> approximately 18,000 years ago, depicting hunting scenes and community life.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Explain why Queen Victoria's pedigree was crucial in studying Haemophilia.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Queen Victoria was a heterozygous carrier (X<sup>H</sup> X<sup>h</sup>) who passed the mutant allele to several offspring, spreading haemophilia through intermarriage across the royal families of England, Russia, Spain, and Germany.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: What is the biological difference between Monozygotic and Dizygotic twins in DNA fingerprinting?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Monozygotic (identical) twins originate from a single fertilized zygote and share 100% identical DNA fingerprints. Dizygotic (fraternal) twins arise from two separate fertilizations and have distinct DNA fingerprints.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: How does Gel Electrophoresis separate cleaved DNA fragments?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      DNA molecules are negatively charged due to phosphate groups. When placed in an agarose gel under an electric field, DNA fragments migrate towards the positive anode at rates inversely proportional to their molecular size/length.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: What is the Evolutionary fitness concept according to Charles Darwin?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Darwinian fitness refers specifically to <b>Reproductive Fitness</b>: the relative capacity of an organism to survive in its environment, adapt, reproduce, and leave fertile offspring in future generations.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.15), rgba(81, 45, 168, 0.15)); border: 1.5px solid rgba(124, 77, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #7C4DFF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master Genetic Disorders, HGP Shotgun, Miller-Urey &amp; Human Lineage</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Describe Sex Determination mechanisms in Humans, Birds, and Honey Bees with genetic crosses and chromosomal sets.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Humans (XX-XY):</b> Male heterogamety (44+XY); sperms carry either X or Y (50:50). Female homogamety (44+XX). Y-linked <i>SRY</i> gene determines maleness.<br/><br/><b style="color: #7C4DFF;">2. Birds (ZZ-ZW):</b> Female heterogamety (2n+ZW) produces Z-bearing and W-bearing eggs. Male homogamety (2n+ZZ). Ovum determines sex.<br/><br/><b style="color: #7C4DFF;">3. Honey Bees (Haplodiploidy):</b> Females are diploid (2n=32) from fertilized eggs; males (drones) are haploid (n=16) from unfertilized eggs via parthenogenesis. Drones produce sperms by mitosis; they have no father and cannot have sons, but have a grandfather and grandsons.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Explain T.H. Morgan's experiments on Linkage and Crossing Over in <i>Drosophila</i> and Sturtevant's Chromosome Mapping.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Morgan's Crosses:</b> Crossed yellow-bodied, white-eyed females (yw) with wild brown-bodied, red-eyed males (y<sup>+</sup> w<sup>+</sup>). The F_2 generation deviated from Mendelian 9:3:3:1, yielding 98.7% parental types and only 1.3% recombinants because genes were tightly linked on the X chromosome.<br/><br/><b style="color: #7C4DFF;">2. Physical Basis:</b> Linked genes on same chromosome tend to stay together; non-parental recombinants arise from physical crossing-over between non-sister chromatids during Pachytene of Meiosis I.<br/><br/><b style="color: #7C4DFF;">3. Chromosome Mapping:</b> Alfred Sturtevant showed recombination frequency is directly proportional to distance between genes (1% recombination = 1 cM), allowing construction of linear genetic chromosome maps.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Describe the inheritance pattern, molecular causes, and pedigrees of Haemophilia and Colour Blindness.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Pattern:</b> X-linked recessive, criss-cross inheritance (father &rarr; carrier daughter &rarr; grandson). Males (XY) are hemizygous and manifest the trait with 1 mutant allele.<br/><br/><b style="color: #7C4DFF;">2. Haemophilia ('Royal Disease'):</b> Defective blood clotting due to deficiency of Factor VIII (Haemophilia A) or Factor IX (Haemophilia B). Queen Victoria was a carrier, transmitting it to Russian and Spanish royalty.<br/><br/><b style="color: #7C4DFF;">3. Colour Blindness:</b> Defect in red/green cone photopigments. Affects ~8% males vs ~0.4% females because females require two mutant alleles (X<sup>c</sup> X<sup>c</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Compare Mendelian Blood Disorders: Thalassemia (&alpha; and &beta;) vs Sickle Cell Anemia in detail.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Thalassemia (Quantitative):</b> Reduced rate of synthesis of normal globin chains. (a) &alpha;-Thalassemia: mutation in 4 genes (HBA1, HBA2) on chromosome 16. (b) &beta;-Thalassemia: mutation in HBB gene on chromosome 11. Leads to excess free chains, causing premature RBC hemolysis.<br/><br/><b style="color: #7C4DFF;">2. Sickle Cell Anemia (Qualitative):</b> Single point mutation (GAG  &rarr;  GUG) at 6th codon of &beta;-globin gene, substituting Glutamic acid with Valine. Mutant Hb<sup>S</sup> polymerizes under hypoxia, turning RBCs rigid and sickle-shaped.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Explain Chromosomal Aneuploidy Disorders in humans: Down's, Turner's, and Klinefelter's syndromes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Down's Syndrome (47, XX/XY, +21):</b> Trisomy 21 (Langdon Down 1866). Short stature, furrowed tongue, partially open mouth, broad palm with simian crease, cardiac defects, mental retardation.<br/><br/><b style="color: #7C4DFF;">2. Turner's Syndrome (45, X0):</b> Monosomy X in females. Sterile, streak rudimentary ovaries, webbed neck, shield chest, lack of secondary sexual characteristics.<br/><br/><b style="color: #7C4DFF;">3. Klinefelter's Syndrome (47, XXY):</b> Extra X in males. Tall stature, masculine habitus with feminine breast development (Gynaecomastia), azoospermia, sterile.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss the Human Genome Project (HGP): Goals, Methodologies (ESTs vs Annotation), and Salient Features.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Goals &amp; Scope:</b> 13-year mega-project (1990–2003) sequencing 3  &times;  10<sup>9</sup> bp human genome; birth of Bioinformatics.<br/><br/><b style="color: #7C4DFF;">2. Methodologies:</b> ESTs (sequencing expressed RNAs) vs Sequence Annotation (shotgun sequencing entire genome using BAC/YAC vectors and Sanger automated sequencers).<br/><br/><b style="color: #7C4DFF;">3. Salient Features:</b> 3164.7 million bp, ~30,000 genes; average gene 3000 bases; Dystrophin largest (2.4 million bp); <2% codes for proteins; Chromosome 1 has 2968 genes (most), Y has 231 genes (least); 1.4 million SNP locations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Describe DNA Fingerprinting: Molecular basis (VNTRs), Step-by-step Southern Blot methodology, and Applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Molecular Basis:</b> Minisatellite VNTRs (0.1–20 kb) in non-coding satellite DNA exhibit high allelic polymorphism inherited from parents.<br/><br/><b style="color: #7C4DFF;">2. Southern Blot Methodology:</b> DNA extraction &rarr; Restriction digestion &rarr; Agarose gel electrophoresis &rarr; Southern blot transfer to nylon membrane &rarr; Hybridization with <sup>32</sup>P-labeled VNTR probe &rarr; Autoradiography (X-ray band profile).<br/><br/><b style="color: #7C4DFF;">3. Applications:</b> Forensic crime investigations, paternity disputes, immigration verification, evolutionary pedigree analysis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Explain the Origin of Life: Oparin-Haldane Chemical Evolution and experimental validation by Urey-Miller (1953).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Oparin-Haldane Hypothesis:</b> Life originated from non-living inorganic matter in a reducing primitive Earth atmosphere devoid of free oxygen (CH_4, NH_3, H_2O, H_2).<br/><br/><b style="color: #7C4DFF;">2. Urey-Miller Experiment (1953):</b> Spark discharge chamber subjected CH_4, NH_3, H_2, H_2O (2:2:1) to electric discharge at 800&deg;C for 1 week. Condensate contained simple amino acids (Glycine, Alanine, Aspartic acid), experimentally proving biochemical abiogenesis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Discuss Evidences for Evolution: Homology vs Analogy, Industrial Melanism, and Embryological observations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Homology (Divergent Evolution):</b> Same origin, different function (Forelimbs of human, whale, bat; <i>Bougainvillea</i> thorn and <i>Cucurbita</i> tendril).<br/><b style="color: #7C4DFF;">2. Analogy (Convergent Evolution):</b> Different origin, same function (Bird wing vs Butterfly wing; Octopus eye vs Mammal eye).<br/><b>3. Industrial Melanism (<i>Biston betularia</i>):</b> Shift from light to dark melanic moths post-industrialization due to soot camouflage (Directional selection).<br/><b style="color: #7C4DFF;">4. Embryology:</b> Gill slits and post-anal tails in vertebrate embryos.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Explain the Modern Synthetic Theory of Evolution (Neo-Darwinism) and contrast it with Lamarckism and Mutation Theory.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Modern Synthetic Theory:</b> Integrates Mendelian genetics and Darwinian natural selection. Key evolutionary forces: Gene mutations, chromosomal aberrations, genetic recombination, genetic drift, natural selection, and reproductive isolation.<br/><br/><b style="color: #7C4DFF;">2. Comparison:</b> Lamarckism (inheritance of acquired characters via use/disuse - disproved); De Vries Mutation Theory (single-step large saltatory mutations); Darwinism (gradual continuous variations guided by natural selection).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Describe the Hardy-Weinberg Principle: Mathematical derivation, Assumptions, and 5 evolutionary disrupting factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Mathematical Derivation:</b> In an ideal population with two alleles A (p) and a (q), p + q = 1. Zygotic frequencies in next generation: (p+q)<sup>2</sup> = p<sup>2</sup> + 2pq + q<sup>2</sup> = 1 (p<sup>2</sup> = AA, 2pq = Aa, q<sup>2</sup> = aa).<br/><br/><b style="color: #7C4DFF;">2. Assumptions:</b> Large population size, random mating, no migration, no mutation, no natural selection.<br/><br/><b style="color: #7C4DFF;">3. Disrupting Forces:</b> (1) Gene migration / flow, (2) Genetic drift, (3) Mutation, (4) Genetic recombination, (5) Natural selection.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Explain Adaptive Radiation in Darwin's Finches and Australian Marsupials, and discuss Convergent Evolution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Darwin's Finches:</b> Common ancestral seed-eating finch diversified on Galapagos Islands into varied beak shapes (insectivorous, vegetarian, cactus-feeding) occupying separate feeding niches.<br/><br/><b style="color: #7C4DFF;">2. Australian Marsupials:</b> Ancestral marsupial radiated into diverse forms (Tasmanian wolf, Sugar glider, Kangaroo, Bandicoot) within isolated Australia.<br/><br/><b style="color: #7C4DFF;">3. Parallel Convergent Evolution:</b> Marsupial radiation mirrors placental mammal radiation (e.g., Placental Wolf &amp; Tasmanian Wolf; Anteater &amp; Numbat).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Detail the chronological stages of Human Evolution from <i>Dryopithecus</i> to modern <i>Homo sapiens</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. <i>Dryopithecus</i> &amp; <i>Ramapithecus</i> (15 mya):</b> Hairy primates; <i>Dryopithecus</i> ape-like, <i>Ramapithecus</i> man-like.<br/><b>2. <i>Australopithecus</i> (2–3 mya):</b> East Africa, fruit-eaters, stone tools, brain 450–600 cc.<br/><b>3. <i>Homo habilis</i> (2 mya):</b> 'Handy man', tool maker, non-meat eater, brain 650–800 cc.<br/><b>4. <i>Homo erectus</i> (1.5 mya):</b> Java man, erect posture, meat eater, used fire, brain 900 cc.<br/><b>5. <i>Homo neanderthalensis</i> (100k–40k yrs):</b> Cave dwellers, used hides, buried dead, brain 1400 cc.<br/><b>6. <i>Homo sapiens</i> (75k–10k yrs):</b> Modern humans, cave art (Bhimbetka), agriculture, brain 1350–1450 cc.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Construct a comprehensive comparative matrix between Mendelian Disorders and Chromosomal Disorders.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Etiology:</b> Mendelian disorders result from point mutations in single genes; Chromosomal disorders result from numerical (aneuploidy) or structural alterations of chromosomes.<br/><b style="color: #7C4DFF;">2. Inheritance:</b> Mendelian disorders follow strict Mendelian ratios and pedigree patterns; Chromosomal disorders are non-inheritable accidents of non-disjunction.<br/><b style="color: #7C4DFF;">3. Diagnosis:</b> Mendelian diagnosed by DNA sequencing/biochemical assays; Chromosomal diagnosed by karyotyping (Amniocentesis).<br/><b style="color: #7C4DFF;">4. Examples:</b> Mendelian: Thalassemia, Haemophilia, Sickle cell; Chromosomal: Down's, Turner's, Klinefelter's.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain the genetic and evolutionary significance of Genetic Polymorphism in DNA Fingerprinting.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Satellite DNA:</b> Tandemly repeated non-coding DNA separated as satellite peaks during density gradient centrifugation.<br/><b style="color: #7C4DFF;">2. Polymorphism:</b> Mutations in non-coding DNA accumulate across generations without affecting survival, generating hypervariable VNTR lengths.<br/><b style="color: #7C4DFF;">3. Individuality:</b> High probability that two unrelated individuals will not have identical VNTR band profiles, forming the bedrock of forensic identification.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Describe the types of Natural Selection: Stabilizing, Directional, and Disruptive with ecological examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Stabilizing:</b> Eliminates extreme variants; favors intermediate phenotype (e.g., human birth weight ~3 kg).<br/><b style="color: #7C4DFF;">2. Directional:</b> Favors one extreme phenotype; shifts population mean (e.g., Industrial melanism, antibiotic resistance in bacteria, DDT resistance in mosquitoes).<br/><b style="color: #7C4DFF;">3. Disruptive:</b> Favors both extreme phenotypes over intermediate; splits population into two morphological groups (e.g., beak sizes in seed-cracker birds).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the Genetic Basis of Sex Determination in Grasshoppers (XX-XO type).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Mechanism:</b> Male heterogamety of the XX-XO type.<br/><b style="color: #7C4DFF;">2. Chromosome Sets:</b> Females have two X-chromosomes (2n+XX), producing all X-bearing ova. Males have only one X-chromosome (2n+X0), producing 50% X-bearing sperms and 50% sperms without sex chromosomes (O-bearing).<br/><b style="color: #7C4DFF;">3. Outcome:</b> Fertilization by X-sperm yields female (XX); fertilization by O-sperm yields male (X0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Describe the Biochemical Evidences for Evolution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Universal Genetic Code:</b> Triplet codons encode identical amino acids from bacteria to humans.<br/><b style="color: #7C4DFF;">2. Common Metabolic Pathways:</b> Glycolysis, Krebs cycle, and ATP energy currency are universal.<br/><b style="color: #7C4DFF;">3. Protein Homology:</b> Cytochrome c and Hemoglobin amino acid sequences show progressive divergence matching phylogenetic distance (e.g., Chimpanzee hemoglobin is identical to human hemoglobin).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the significance of the Miller-Urey experiment in disproving Spontaneous Generation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Miller-Urey experiment demonstrated that complex organic biomolecules (amino acids, sugars) could arise purely by abiotic chemical reactions under primitive atmospheric conditions, replacing mythical spontaneous generation with scientifically grounded chemical abiogenesis followed by biological evolution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct a Master Flowchart and Summary Matrix integrating Sex Determination, Human Disorders, HGP, and Biological Evolution.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #7C4DFF;">1. Sex Determination:</b> XX-XY (Humans), ZZ-ZW (Birds), Haplodiploidy (Bees).<br/><b style="color: #7C4DFF;">2. Genetic Disorders:</b> Mendelian (Thalassemia, Sickle cell, Haemophilia, Colour blindness) vs Chromosomal (Down's 47,+21, Turner's 45,X0, Klinefelter's 47,XXY).<br/><b style="color: #7C4DFF;">3. Molecular Tools:</b> HGP (3164.7 Mb, 30k genes) &amp; DNA Fingerprinting (VNTRs, Southern blotting).<br/><b style="color: #7C4DFF;">4. Evolution:</b> Chemical origin (Miller-Urey) &rarr; Evidences (Homology, Analogy, Melanism) &rarr; Mechanisms (Mutations, Selection, Hardy-Weinberg) &rarr; Human Lineage (<i>Dryopithecus</i> &rarr; <i>Homo sapiens</i>).
    </div>
  </div>

</div>
`;

export const c12Zoo2Mcqs = [
  {
    "id": "c12-zoo-2-mcq-1",
    "question": "In the ZZ-ZW sex determination system found in birds, the sex of the offspring is determined by the:",
    "options": [
      "A):   Male sperm",
      "B):   Maternal ovum",
      "C):   Incubation temperature",
      "D):   Number of autosomes"
    ],
    "correctAnswer": "b",
    "explanation": "Female birds are heterogametic (ZW) and produce two types of eggs (50% Z and 50% W), thereby determining the offspring's sex."
  },
  {
    "id": "c12-zoo-2-mcq-2",
    "question": "In honey bees, male drones are produced through:",
    "options": [
      "A):   Fertilization of diploid eggs",
      "B):   Parthenogenesis from unfertilized haploid eggs",
      "C):   Somatic hybridization",
      "D):   Mitotic cleavage of sperm"
    ],
    "correctAnswer": "b",
    "explanation": "Drones develop through haplodiploid parthenogenesis from unfertilized eggs, possessing n=16 chromosomes."
  },
  {
    "id": "c12-zoo-2-mcq-3",
    "question": "T.H. Morgan observed a very low recombination frequency (1.3%) in <i>Drosophila</i> for body color and eye color because the two genes were:",
    "options": [
      "A):   Located on different chromosomes",
      "B):   Tightly linked on the X chromosome",
      "C):   Subject to independent assortment",
      "D):   Sex-limited on the Y chromosome"
    ],
    "correctAnswer": "b",
    "explanation": "Tight linkage between the yellow-body and white-eye genes on the X chromosome minimized crossing over, yielding 98.7% parental types."
  },
  {
    "id": "c12-zoo-2-mcq-4",
    "question": "Haemophilia is transmitted in families through which classical inheritance mode?",
    "options": [
      "A):   Autosomal dominant",
      "B):   X-linked recessive (Criss-cross inheritance)",
      "C):   Y-linked holandric",
      "D):   Mitochondrial maternal"
    ],
    "correctAnswer": "b",
    "explanation": "Haemophilia is an X-linked recessive trait transmitted from carrier mothers to affected sons in a criss-cross pattern."
  },
  {
    "id": "c12-zoo-2-mcq-5",
    "question": "In Sickle Cell Anemia, the single base-pair point mutation in the 6th codon of the \&beta;-globin gene replaces:",
    "options": [
      "A):   Valine with Glutamic acid",
      "B):   Glutamic acid with Valine",
      "C):   Lysine with Glycine",
      "D):   Alanine with Aspartic acid"
    ],
    "correctAnswer": "b",
    "explanation": "A GAG \ &rarr;  GUG mutation replaces hydrophilic Glutamic acid with hydrophobic Valine at the 6th position of the \&beta;-globin chain."
  },
  {
    "id": "c12-zoo-2-mcq-6",
    "question": "The chromosomal karyotype diagnostic of Down's Syndrome is:",
    "options": [
      "A):   45, X0",
      "B):   47, XXY",
      "C):   47, XX/XY, +21",
      "D):   47, +18"
    ],
    "correctAnswer": "c",
    "explanation": "Down's syndrome is caused by Trisomy of autosome 21 (47, XX/XY, +21) due to meiotic non-disjunction."
  },
  {
    "id": "c12-zoo-2-mcq-7",
    "question": "A sterile human female exhibiting short stature, webbed neck, and rudimentary streak ovaries has the karyotype:",
    "options": [
      "A):   45, X0 (Turner's syndrome)",
      "B):   47, XXY (Klinefelter's syndrome)",
      "C):   47, XXX (Superfemale)",
      "D):   46, XY (Normal male)"
    ],
    "correctAnswer": "a",
    "explanation": "Turner's syndrome is caused by Monosomy X (45, X0), resulting in sterile females with underdeveloped secondary sexual characteristics."
  },
  {
    "id": "c12-zoo-2-mcq-8",
    "question": "Klinefelter's Syndrome (47, XXY) in males is characteristically marked by:",
    "options": [
      "A):   Complete lack of facial hair only",
      "B):   Gynaecomastia (breast enlargement) and sterility",
      "C):   Abnormal clotting time",
      "D):   Absence of testes"
    ],
    "correctAnswer": "b",
    "explanation": "Males with Klinefelter's syndrome possess an extra X chromosome (47, XXY), exhibiting gynaecomastia, tall stature, and azoospermia."
  },
  {
    "id": "c12-zoo-2-mcq-9",
    "question": "According to the Human Genome Project, what percentage of the human genome codes for functional proteins?",
    "options": [
      "A):   50\%",
      "B):   25\%",
      "C):   Less than 2\%",
      "D):   98\%"
    ],
    "correctAnswer": "c",
    "explanation": "Less than 2% of the human genome codes for proteins; the vast majority comprises repetitive non-coding regulatory sequences."
  },
  {
    "id": "c12-zoo-2-mcq-10",
    "question": "The largest known gene in the human genome is:",
    "options": [
      "A):   Insulin gene",
      "B):   Dystrophin gene",
      "C):   \&beta;-globin gene",
      "D):   p53 tumor suppressor"
    ],
    "correctAnswer": "b",
    "explanation": "The Dystrophin gene located on the human X-chromosome spans approximately 2.4 million base pairs."
  },
  {
    "id": "c12-zoo-2-mcq-11",
    "question": "In DNA Fingerprinting, the hypervariable repetitive DNA sequences that serve as molecular markers are:",
    "options": [
      "A):   ESTs",
      "B):   VNTRs (Minisatellites)",
      "C):   Exons",
      "D):   tRNA genes"
    ],
    "correctAnswer": "b",
    "explanation": "Variable Number of Tandem Repeats (VNTRs) exhibit high degree of allelic polymorphism, generating unique DNA band profiles."
  },
  {
    "id": "c12-zoo-2-mcq-12",
    "question": "In the landmark Urey-Miller experiment (1953), which gaseous mixture was subjected to spark discharges at 800°C?",
    "options": [
      "A):   CO_2, O_2, N_2, H_2O",
      "B):   CH_4, NH_3, H_2, H_2O",
      "C):   SO_2, NO_2, CH_4, O_2",
      "D):   CO, NH_3, Cl_2, H_2"
    ],
    "correctAnswer": "b",
    "explanation": "Miller and Urey used CH_4, NH_3, H_2, and water vapor in a reducing atmosphere, synthesizing simple amino acids."
  },
  {
    "id": "c12-zoo-2-mcq-13",
    "question": "The forelimbs of a human, cheetah, whale, and bat share a similar skeletal plan but perform different functions. These are:",
    "options": [
      "A):   Analogous organs",
      "B):   Homologous organs",
      "C):   Vestigial structures",
      "D):   Atavistic traits"
    ],
    "correctAnswer": "b",
    "explanation": "Homologous organs share common anatomical origin and basic architecture, reflecting divergent evolution."
  },
  {
    "id": "c12-zoo-2-mcq-14",
    "question": "The eye of an octopus and the eye of a mammal represent an example of:",
    "options": [
      "A):   Divergent evolution",
      "B):   Convergent evolution (Analogous organs)",
      "C):   Homologous evolution",
      "D):   Adaptive radiation"
    ],
    "correctAnswer": "b",
    "explanation": "Octopus and mammalian eyes evolved independently from different origins to perform similar visual functions (Convergent Evolution)."
  },
  {
    "id": "c12-zoo-2-mcq-15",
    "question": "The shift from white-winged to dark melanic peppered moths in industrial England is a classic example of:",
    "options": [
      "A):   Stabilizing selection",
      "B):   Directional natural selection",
      "C):   Disruptive selection",
      "D):   Artificial breeding"
    ],
    "correctAnswer": "b",
    "explanation": "Industrial melanism demonstrates directional natural selection favoring soot-camouflaged melanic moths."
  },
  {
    "id": "c12-zoo-2-mcq-16",
    "question": "Hugo de Vries based his Mutation Theory on experiments conducted on the plant:",
    "options": [
      "A):   <i>Pisum sativum</i>",
      "B):   <i>Oenothera lamarckiana</i> (Evening Primrose)",
      "C):   <i>Mirabilis jalapa</i>",
      "D):   <i>Drosophila melanogaster</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Hugo de Vries studied the evening primrose (<i>Oenothera lamarckiana</i>) and proposed that evolution occurs via discontinuous mutations."
  },
  {
    "id": "c12-zoo-2-mcq-17",
    "question": "In a population in Hardy-Weinberg equilibrium, the frequency of heterozygous individuals (Aa) is represented by:",
    "options": [
      "A):   p<sup>2</sup>",
      "B):   2pq",
      "C):   q<sup>2</sup>",
      "D):   p + q"
    ],
    "correctAnswer": "b",
    "explanation": "In the Hardy-Weinberg equation (p<sup>2</sup> + 2pq + q<sup>2</sup> = 1), the term 2pq represents the frequency of heterozygous genotype Aa."
  },
  {
    "id": "c12-zoo-2-mcq-18",
    "question": "The Sewall Wright Effect is another term for which evolutionary phenomenon?",
    "options": [
      "A):   Natural selection",
      "B):   Genetic Drift",
      "C):   Gene flow",
      "D):   Adaptive radiation"
    ],
    "correctAnswer": "b",
    "explanation": "Genetic drift (random fluctuation in allele frequency in small populations) is also known as the Sewall Wright Effect."
  },
  {
    "id": "c12-zoo-2-mcq-19",
    "question": "The diverse beak shapes evolved by finches in the Galapagos Islands to exploit different food niches illustrate:",
    "options": [
      "A):   Convergent evolution",
      "B):   Adaptive Radiation",
      "C):   Stabilizing selection",
      "D):   Industrial melanism"
    ],
    "correctAnswer": "b",
    "explanation": "Darwin's finches radiating from an ancestral seed-eating finch into diverse feeding niches represent classical Adaptive Radiation."
  },
  {
    "id": "c12-zoo-2-mcq-20",
    "question": "The first hominid human ancestor who made chipped stone tools and had a brain capacity of 650–800 cc was:",
    "options": [
      "A):   <i>Australopithecus</i>",
      "B):   <i>Homo habilis</i>",
      "C):   <i>Homo erectus</i>",
      "D):   <i>Ramapithecus</i>"
    ],
    "correctAnswer": "b",
    "explanation": "<i>Homo habilis</i> ('Handy Man') was the first tool-maker with a cranial capacity of 650–800 cc and did not eat meat."
  },
  {
    "id": "c12-zoo-2-mcq-21",
    "question": "<i>Homo erectus</i> (Java Man) fossils discovered in 1891 showed a cranial capacity of approximately:",
    "options": [
      "A):   500\ cc",
      "B):   900\ cc",
      "C):   1400\ cc",
      "D):   1600\ cc"
    ],
    "correctAnswer": "b",
    "explanation": "<i>Homo erectus</i> lived about 1.5 million years ago and possessed a cranial capacity of ~900 cc."
  },
  {
    "id": "c12-zoo-2-mcq-22",
    "question": "Which extinct human ancestor lived in the Near East and Central Asia, used animal hides for clothing, and buried their dead?",
    "options": [
      "A):   <i>Homo habilis</i>",
      "B):   Neanderthal Man (<i>Homo neanderthalensis</i>)",
      "C):   <i>Australopithecus</i>",
      "D):   <i>Dryopithecus</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Neanderthal man had a brain capacity of 1400 cc, used hides, and practiced ceremonial burial of the dead."
  },
  {
    "id": "c12-zoo-2-mcq-23",
    "question": "Modern <i>Homo sapiens</i> arose in Africa during the ice age approximately:",
    "options": [
      "A):   15 million years ago",
      "B):   75,000 to 10,000 years ago",
      "C):   1.5 million years ago",
      "D):   500,000 years ago"
    ],
    "correctAnswer": "b",
    "explanation": "Modern humans (<i>Homo sapiens</i>) evolved in Africa between 75,000 and 10,000 years ago during the last ice age."
  },
  {
    "id": "c12-zoo-2-mcq-24",
    "question": "Which of the following represents a quantitative genetic disorder rather than a qualitative one?",
    "options": [
      "A):   Sickle cell anemia",
      "B):   Thalassemia",
      "C):   Phenylketonuria",
      "D):   Cystic fibrosis"
    ],
    "correctAnswer": "b",
    "explanation": "Thalassemia is quantitative (decreased synthesis of normal globin chains), whereas sickle cell anemia is qualitative (defective mutant globin)."
  },
  {
    "id": "c12-zoo-2-mcq-25",
    "question": "Prehistoric cave art created by early <i>Homo sapiens</i> approximately 18,000 years ago is found in India at:",
    "options": [
      "A):   Ajanta Caves",
      "B):   Bhimbetka rock shelters",
      "C):   Ellora Caves",
      "D):   Elephanta Caves"
    ],
    "correctAnswer": "b",
    "explanation": "The Bhimbetka rock shelters in Raisen district, Madhya Pradesh, showcase prehistoric cave paintings dating back ~18,000 years."
  }
];
