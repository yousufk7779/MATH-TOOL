// Class 12 Botany Chapter 2: Genetics (Heredity, Variations & Molecular Basis)
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Botany | Class: 12 | Code: c12-bot-2

export const c12Bot2HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.12), rgba(255, 61, 0, 0.12)); border: 1.5px solid rgba(255, 145, 0, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 12px 0; font-size: 17.5px; font-weight: bold; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📖</span> Quick Glossary &amp; Essential Genetic Principles
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Allele:</b> Alternative, contrasting form of a gene located at the identical locus on a pair of homologous chromosomes.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Test Cross:</b> Cross of an individual of dominant phenotype with its homozygous recessive parent (determines unknown genotype; 1:1 or 1:1:1:1 ratio).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Pleiotropy:</b> Genetic phenomenon wherein a single gene influences multiple, seemingly unrelated phenotypic traits (e.g., Phenylketonuria, Starch branching in peas).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Nucleosome:</b> Basic structural unit of eukaryotic chromatin consisting of 200 bp of negatively charged DNA wrapped around an octamer of positively charged basic histone proteins.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Okazaki Fragments:</b> Short, discontinuously synthesized DNA segments formed on the lagging template strand (5'  &rarr;  3' synthesis), covalently sealed by DNA Ligase.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF9100;">Operon:</b> Coordinated unit of prokaryotic gene expression consisting of structural genes, operator, promoter, and regulator gene under single promoter control.
      </div>
    </div>
  </div>

  <!-- PART 1: HEREDITY AND VARIATION -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Mendelian Inheritance &amp; Laws of Heredity
  </h2>
  <p>
    Genetics is the branch of biological science dealing with the principles of <b>heredity</b> (transmission of phenotypic characters from parents to offspring) and <b>variation</b> (the structural, physiological, or developmental differences exhibited by individuals of the same species). <b>Gregor Johann Mendel (1822–1884)</b>, acknowledged as the <i>Father of Genetics</i>, conducted pioneering quantitative hybridization experiments on the garden pea (<i>Pisum sativum</i>) between 1856 and 1863, formulating the foundational laws of inheritance.
  </p>

  <h3 style="color: #FF9100; margin-top: 18px; font-size: 16.5px;">(i) Why Mendel Selected Garden Pea (<i>Pisum sativum</i>)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF9100;">Distinct Contrasting Traits:</b> Possesses clear-cut, easily distinguishable alternative characters (7 pairs studied: Stem height, Flower color, Flower position, Pod shape, Pod color, Seed shape, Seed color).</li>
    <li><b style="color: #FF9100;">Naturally Self-Pollinating:</b> Flowers are cleistogamous/chasmogamous and self-fertilizing, maintaining pure breeding homozygous lines across generations.</li>
    <li><b style="color: #FF9100;">Easy Cross-Pollination:</b> Artificial hybridization can be performed with high fidelity through simple emasculation and bagging.</li>
    <li><b style="color: #FF9100;">Short Life Span &amp; High Fecundity:</b> Pea is an annual herb that produces abundant progeny seeds in a single growing season, enabling robust statistical analysis.</li>
  </ul>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(ii) Mendel's Fundamental Principles &amp; Crosses</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF9100;">1. Law of Dominance:</b> Characters are governed by discrete structural units termed <i>factors</i> (genes) that occur in pairs. In a dissimilar heterozygous pair (Tt), one factor masks the expression of the other; the expressed allele is termed <b>dominant</b> (T), and the unexpressed allele is termed <b>recessive</b> (t).</li>
      <li><b style="color: #FF9100;">2. Law of Segregation (Purity of Gametes):</b> Allelic pairs remain associated in a diploid individual without blending or contamination; during gametogenesis (meiosis), the two alleles segregate cleanly such that each gamete receives only one allele with 50% probability. This law has no universal exceptions in natural organisms.</li>
      <li><b style="color: #FF9100;">3. Law of Independent Assortment:</b> In a dihybrid cross (RrYy), when two pairs of contrasting traits are combined in a hybrid, the segregation and assortment of one pair of alleles is completely independent of the assortment of the other pair during meiosis, producing the classical <b>9 : 3 : 3 : 1</b> phenotypic ratio in the F_2 generation.</li>
    </ol>
  </div>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(iii) Monohybrid vs. Dihybrid Cross Metrics</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF9100;">Monohybrid Cross (Tt  &times;  Tt):</b> Phenotypic ratio = <b>3 : 1</b> (3 Tall : 1 Dwarf); Genotypic ratio = <b>1 : 2 : 1</b> (1\,TT : 2\,Tt : 1\,tt).</li>
    <li><b style="color: #FF9100;">Dihybrid Cross (RrYy  &times;  RrYy):</b> Phenotypic ratio = <b>9 : 3 : 3 : 1</b> (9 Round-Yellow : 3 Round-Green : 3 Wrinkled-Yellow : 1 Wrinkled-Green); Genotypic ratio consists of 9 distinct genotypes (1:2:1:2:4:2:1:2:1).</li>
    <li><b style="color: #FF9100;">Monohybrid Test Cross (Tt  &times;  tt):</b> Phenotypic &amp; Genotypic ratio = <b>1 : 1</b>.</li>
    <li><b style="color: #FF9100;">Dihybrid Test Cross (RrYy  &times;  rryy):</b> Phenotypic &amp; Genotypic ratio = <b>1 : 1 : 1 : 1</b>.</li>
  </ul>

  <!-- SECTION 2: DEVIATIONS FROM MENDELISM -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Deviations from Mendelism (Non-Mendelian Genetics)
  </h2>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #FF9100; margin: 0 0 8px 0; font-size: 15.5px;">🌸 Incomplete Dominance (Partial Dominance)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Neither allele is completely dominant over the other; the heterozygous F_1 hybrid displays an intermediate blend phenotype between the two homozygous parents.
        <br/><b style="color: #FF9100;">Classic Examples:</b> Flower color in <i>Mirabilis jalapa</i> (4 o'clock plant) and <i>Antirrhinum majus</i> (Snapdragon / Dog flower).
        <br/><b style="color: #FF9100;">F_2 Ratio:</b> Phenotypic ratio = Genotypic ratio = <b>1 Red (RR) : 2 Pink (Rr) : 1 White (rr)</b> (1 : 2 : 1).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #FF9100; margin: 0 0 8px 0; font-size: 15.5px;">🩸 Co-Dominance &amp; Multiple Allelism</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Both alleles in a heterozygote express themselves fully and simultaneously without blending.
        <br/><b style="color: #FF9100;">ABO Blood Group System in Humans:</b> Governed by gene I located on chromosome 9, possessing three multiple alleles (I<sup>A</sup>, I<sup>B</sup>, i).
        <br/>&bull; I<sup>A</sup> and I<sup>B</sup> synthesize slightly different surface sugar polymers (antigens A and B); both are completely dominant over recessive i.
        <br/>&bull; When I<sup>A</sup> and I<sup>B</sup> are present together (I<sup>A</sup> I<sup>B</sup>), both antigens are synthesized on RBC membranes, producing <b>AB blood type</b> (Co-dominance).
        <br/>&bull; Total genotypes possible = (n(n+1) / 2) = (3  &times;  4 / 2) = 6 genotypes yielding <b>4 blood group phenotypes</b> (A, B, AB, O).
      </p>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #FF9100; margin: 0 0 8px 0; font-size: 15.5px;">🧬 Pleiotropy</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        A single genetic locus regulates multiple phenotypic characteristics simultaneously.
        <br/><b style="color: #FF9100;">Examples:</b>
        <br/>1. <b style="color: #FF9100;">Phenylketonuria (PKU):</b> Mutation in the gene encoding phenylalanine hydroxylase leads to mental retardation, decreased pigmentation of hair, and abnormal skin pigmentation.
        <br/>2. <b style="color: #FF9100;">Starch Synthesis in Pea Seeds:</b> Gene B controls both starch grain size and seed shape (BB produces large starch grains &amp; round seeds; Bb intermediate size &amp; round seeds; bb small grains &amp; wrinkled seeds).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #FF9100; margin: 0 0 8px 0; font-size: 15.5px;">📊 Polygenic Inheritance (Quantitative Traits)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Traits governed by three or more independent non-allelic genes whose effects are additive and cumulative, producing a continuous bell-shaped distribution curve in the population.
        <br/><b style="color: #FF9100;">Examples:</b> Human skin pigmentation (controlled by 3 genes A, B, C where AABBCC is very dark and aabbcc is very light), human height, and kernel color in wheat.
      </p>
    </div>
  </div>

  <!-- SECTION 3: CHROMOSOMAL THEORY & LINKAGE -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Chromosomal Theory of Inheritance &amp; Gene Linkage
  </h2>

  <h3 style="color: #FF9100; margin-top: 18px; font-size: 16.5px;">(i) Sutton &amp; Boveri's Chromosomal Theory (1902)</h3>
  <p>
    <b>Walter Sutton</b> and <b>Theodore Boveri</b> noted that the behavior of chromosomes during meiosis parallels the behavior of Mendelian factors (genes). They postulated:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li>Chromosomes, like Mendelian factors, exist in pairs in diploid cells.</li>
    <li>Homologous chromosomes segregate during Anaphase I of meiosis, cleanly separating the paired alleles.</li>
    <li>Non-homologous chromosomes assort independently at Metaphase I, providing the physical cytological mechanism for Mendel's Law of Independent Assortment.</li>
  </ul>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(ii) Morgan's Linkage Experiments in <i>Drosophila melanogaster</i></h3>
  <p>
    <b>Thomas Hunt Morgan</b> established the experimental proof of the Chromosomal Theory using the fruit fly (<i>Drosophila melanogaster</i>), which possesses: (a) simple 2-week life cycle, (b) single mating yielding hundreds of progeny, (c) clear sexual dimorphism (females larger than males), and (d) only 4 pairs of easily distinguishable chromosomes.
  </p>
  <p>
    Morgan discovered <b>Linkage</b>: the physical association of genes located on the same chromosome that tend to be inherited together as a unit. Genes situated closely together exhibit <b>complete linkage</b> (low recombination, high parental progeny e.g., yellow body and white eye in <i>Drosophila</i> showed 98.7% parental and only 1.3% recombinant types), whereas distantly located genes exhibit higher crossing-over (e.g., white eye and miniature wing showed 62.8% parental and 37.2% recombinants).
  </p>
  <p>
    <b>Alfred Sturtevant</b>, a student of Morgan, utilized recombination frequency as a measure of genetic distance: <b>1\%  recombination = 1 Map Unit = 1 centiMorgan (cM)</b>, establishing the first genetic chromosome maps.
  </p>

  <!-- PART 2: MOLECULAR BASIS OF INHERITANCE -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 40px; font-size: 20px;">
    4. Search for the Genetic Material: Experimental Proofs
  </h2>

  <div style="background: rgba(15, 23, 42, 0.7); border: 1.5px solid rgba(255, 145, 0, 0.3); border-radius: 10px; padding: 16px 20px; margin: 18px 0;">
    <h4 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16px;">🔬 Landmark Experiments Establishing DNA as Genetic Material</h4>
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF9100;">Griffith's Transforming Principle (1928):</b> Frederick Griffith worked with <i>Streptococcus pneumoniae</i>. Smooth virulent strain (S, smooth polysaccharide coat) killed mice; Rough non-virulent strain (R) did not. When heat-killed S was injected with live R, mice died and live S bacteria were recovered, proving that a chemical substance ("transforming principle") transferred from dead S to live R, transforming it into virulent S.</li>
      <li><b style="color: #FF9100;">Avery, MacLeod &amp; McCarty Biochemical Characterization (1944):</b> Purified proteins, RNA, and DNA from heat-killed S cells. Proteases and RNases did not affect transformation; only <b>DNase</b> (deoxyribonuclease) destroyed transforming ability, proving that DNA is the transforming substance.</li>
      <li><b style="color: #FF9100;">Hershey-Chase Blender Experiment (1952 - Unequivocal Proof):</b> Alfred Hershey and Martha Chase worked with Bacteriophage T_2 and <i>E. coli</i>. They labeled phage DNA with radioactive phosphorus (<sup>32</sup>P) and phage protein coat with radioactive sulfur (<sup>35</sup>S). After infection, blending, and centrifugation:
        <br/>&bull; Radioactivity <sup>32</sup>P was detected inside the bacterial pellet (DNA entered host cell).
        <br/>&bull; Radioactivity <sup>35</sup>S remained in the supernatant (protein coat did not enter).
        <br/>&bull; This unequivocally proved that <b>DNA is the genetic material</b>.
      </li>
    </ol>
  </div>

  <!-- SECTION 5: STRUCTURE OF DNA & RNA -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    5. Structure of DNA, RNA &amp; Chromatin Packaging
  </h2>

  <h3 style="color: #FF9100; margin-top: 18px; font-size: 16.5px;">(i) Watson-Crick B-DNA Double Helix Model (1953)</h3>
  <p>
    Based on X-ray diffraction data by Rosalind Franklin and Maurice Wilkins, <b>James Watson and Francis Crick</b> proposed the double helical structure of DNA:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF9100;">Two Polynucleotide Chains:</b> Anti-parallel polarity (5'  &rarr;  3' on one strand, 3'  &rarr;  5' on the other). Backbone consists of alternating deoxyribose sugar and phosphate groups linked by 3'-5' phosphodiester bonds; nitrogenous bases project inwardly.</li>
    <li><b style="color: #FF9100;">Complementary Base Pairing:</b> Adenine pairs specifically with Thymine (A = T) via <b>2 hydrogen bonds</b>; Guanine pairs with Cytosine (G &equiv; C) via <b>3 hydrogen bonds</b>.</li>
    <li><b style="color: #FF9100;">Helical Dimensions:</b> Right-handed double helix with pitch of <b>3.4 nm (34 &Aring;)</b> containing approximately <b>10 base pairs per turn</b>, with an inter-base distance of <b>0.34 nm (3.4 &Aring;)</b>.</li>
    <li><b style="color: #FF9100;">Chargaff's Base Equivalence Rules:</b> In double-stranded DNA: [A] = [T], [G] = [C], hence Purines = Pyrimidines ([A+G] = [T+C]); Base ratio (A+T / G+C) is species-specific.</li>
  </ul>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(ii) DNA Packaging &amp; The Nucleosome Model</h3>
  <p>
    In human diploid cells, total DNA length is approximately 2.2 meters (6.6  &times;  10<sup>9</sup> bp  &times;  0.34  &times;  10<sup>-9</sup> m), packaged into a microscopic nucleus (~10<sup>-6</sup> m) via specialized packaging hierarchy:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF9100;">Histone Octamer:</b> Core composed of 8 basic protein subunits (2 molecules each of H_2A, H_2B, H_3, H_4), rich in positively charged basic amino acids (<b>Lysine and Arginine</b>).</li>
    <li><b style="color: #FF9100;">Nucleosome Core:</b> Negatively charged DNA (~200 bp, 1.75 turns) wraps tightly around the positively charged histone octamer. H_1 histone seals the DNA entry/exit points.</li>
    <li><b style="color: #FF9100;">Chromatin Hierarchy:</b> "Beads-on-a-string" nucleosome chain (10 nm) &rarr; Solenoid chromatin fiber (30 nm) &rarr; Loops anchored by Non-Histone Chromosomal (NHC) proteins &rarr; Chromosome (1400 nm).</li>
    <li><b style="color: #FF9100;">Euchromatin vs Heterochromatin:</b>
      <br/>&bull; <i>Euchromatin:</i> Loosely packed, lightly stained, transcriptionally active chromatin.
      <br/>&bull; <i>Heterochromatin:</i> Densely packed, darkly stained, transcriptionally silent chromatin.
    </li>
  </ul>

  <!-- SECTION 6: DNA REPLICATION -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    6. DNA Replication Mechanism &amp; Experimental Verification
  </h2>
  
  <h3 style="color: #FF9100; margin-top: 18px; font-size: 16.5px;">(i) Semiconservative Replication Proof (Meselson &amp; Stahl, 1958)</h3>
  <p>
    <b>Matthew Meselson and Franklin Stahl</b> cultured <i>E. coli</i> in medium containing heavy isotope <sup>15</sup>NH_4Cl for many generations until all DNA was heavy (<sup>15</sup>N-<sup>15</sup>N). When shifted to normal <sup>14</sup>NH_4Cl medium:
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF9100;">Generation 1 (20 min):</b> Centrifugation in CsCl density gradient showed 100% <b>hybrid intermediate density DNA (<sup>15</sup>N-<sup>14</sup>N)</b>.</li>
    <li><b style="color: #FF9100;">Generation 2 (40 min):</b> Showed equal proportions (50% : 50%) of <b>hybrid DNA (<sup>15</sup>N-<sup>14</sup>N)</b> and <b>light DNA (<sup>14</sup>N-<sup>14</sup>N)</b>, proving semiconservative replication.</li>
  </ul>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(ii) Replication Machinery &amp; Enzymes</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 145, 0, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF9100;">Helicase:</b> Unwinds the double helix at the Origin of Replication (Ori) by breaking hydrogen bonds, creating the replication fork.</li>
      <li><b style="color: #FF9100;">Topoisomerase (DNA Gyrase):</b> Relieves supercoiling and torsional strain ahead of the replication fork.</li>
      <li><b style="color: #FF9100;">RNA Primase:</b> Synthesizes short complementary RNA primers (5'  &rarr;  3') to provide a free 3'-OH group required for DNA polymerase initiation.</li>
      <li><b style="color: #FF9100;">DNA-dependent DNA Polymerase III:</b> Catalyzes highly accurate deoxynucleotide polymerization strictly in the <b>5'  &rarr;  3' direction</b> with proofreading (3'  &rarr;  5' exonuclease) activity.</li>
      <li><b style="color: #FF9100;">Leading Strand vs Lagging Strand:</b>
        <br/>&bull; <i>Leading Strand:</i> Synthesized continuously in 5'  &rarr;  3' direction towards the replication fork (template 3'  &rarr;  5').
        <br/>&bull; <i>Lagging Strand:</i> Synthesized discontinuously as short <b>Okazaki fragments</b> away from the fork (template 5'  &rarr;  3').
      </li>
      <li><b style="color: #FF9100;">DNA Polymerase I &amp; DNA Ligase:</b> DNA Pol I removes RNA primers and fills gaps; DNA Ligase covalently seals nicks by forming phosphodiester bonds.</li>
    </ul>
  </div>

  <!-- SECTION 7: TRANSCRIPTION, GENETIC CODE & TRANSLATION -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    7. Protein Biosynthesis: Transcription, Genetic Code &amp; Translation
  </h2>

  <h3 style="color: #FF9100; margin-top: 18px; font-size: 16.5px;">(i) Transcription (DNA &rarr; RNA)</h3>
  <p>
    Transcription is the process of copying genetic information from one strand of DNA into RNA catalyzed by <b>DNA-dependent RNA Polymerase</b>.
  </p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF9100;">Transcription Unit:</b> Comprises: (1) <i>Promoter</i> (upstream binding site for RNA Pol, e.g., TATA box), (2) <i>Structural Gene</i>, and (3) <i>Terminator</i> (downstream site signaling release).</li>
    <li><b style="color: #FF9100;">Strand Polarity:</b> The 3'  &rarr;  5' strand acts as the <b>template strand</b>; the 5'  &rarr;  3' strand is termed the <b>coding strand</b> (identical to RNA transcript except T in DNA is replaced by U in RNA).</li>
    <li><b style="color: #FF9100;">Prokaryotic vs Eukaryotic Transcription:</b>
      <br/>&bull; <i>Prokaryotes:</i> A single RNA polymerase transcribes all RNAs. Coupled transcription and translation occur in the cytoplasm.
      <br/>&bull; <i>Eukaryotes:</i> RNA Pol I (synthesizes 28S, 18S, 5.8S rRNA), RNA Pol II (synthesizes hnRNA/mRNA precursor), RNA Pol III (synthesizes tRNA, 5S rRNA, snRNA).
    </li>
    <li><b style="color: #FF9100;">Post-Transcriptional Processing of hnRNA:</b>
      <br/>1. <b style="color: #FF9100;">Splicing:</b> Non-coding intervening sequences (<b>introns</b>) are excised and coding sequences (<b>exons</b>) are ligated together by spliceosomes.
      <br/>2. <b style="color: #FF9100;">Capping:</b> Addition of unusual nucleotide <b>7-methylguanosine triphosphate (m<sup>7Gppp</sup>)</b> to the 5'-end of hnRNA.
      <br/>3. <b style="color: #FF9100;">Tailing (Polyadenylation):</b> Addition of a poly-A tail of 200–300 adenylate residues to the 3'-end in a template-independent manner.
    </li>
  </ul>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(ii) Genetic Code Features</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF9100;">Triplet Nature:</b> 64 codons total; 61 code for 20 amino acids, 3 are non-sense / stop codons (<b>UAA [Ochre], UAG [Amber], UGA [Opal]</b>).</li>
    <li><b style="color: #FF9100;">Unambiguous &amp; Specific:</b> One particular codon codes for only one specific amino acid.</li>
    <li><b style="color: #FF9100;">Degenerate:</b> Most amino acids are specified by more than one codon (e.g., Leucine, Serine coded by 6 codons).</li>
    <li><b style="color: #FF9100;">Universal:</b> From bacteria to humans, UUU codes for Phenylalanine (minor exceptions in mitochondria).</li>
    <li><b style="color: #FF9100;">Commaless &amp; Non-overlapping:</b> Read continuously in groups of three without punctuation.</li>
    <li><b style="color: #FF9100;">Dual Function of AUG:</b> Acts as the <b>initiator codon</b> and codes for the amino acid <b>Methionine (Met)</b>.</li>
  </ul>

  <h3 style="color: #FF9100; margin-top: 22px; font-size: 16.5px;">(iii) Translation (mRNA &rarr; Polypeptide)</h3>
  <p>
    Translation is the polymerisation of amino acids into a polypeptide chain guided by mRNA sequences on ribosomes:
  </p>
  <ol style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF9100;">1. Aminoacylation of tRNA (Charging):</b> Amino acid is activated by ATP and covalently linked to its cognate tRNA at the 3'-CCA acceptor arm catalyzed by <i>aminoacyl-tRNA synthetase</i>.</li>
    <li><b style="color: #FF9100;">2. Initiation:</b> Small ribosomal subunit binds to mRNA at Shine-Dalgarno sequence/5' cap; initiator tRNA (fMet-tRNA in prokaryotes, Met-tRNA in eukaryotes) pairs with AUG codon at the <b>P-site</b> (peptidyl site); large ribosomal subunit joins.</li>
    <li><b style="color: #FF9100;">3. Elongation:</b> Next aminoacyl-tRNA enters the <b>A-site</b> (aminoacyl site). Peptide bond is formed between P-site amino acid and A-site amino acid catalyzed by the ribozyme <b>peptidyl transferase</b> (23S rRNA in bacteria / 28S rRNA in eukaryotes). Ribosome translocates 5'  &rarr;  3' by one codon.</li>
    <li><b style="color: #FF9100;">4. Termination:</b> When a stop codon (UAA, UAG, UGA) reaches the A-site, release factors bind, hydrolyzing the ester bond and releasing the complete polypeptide chain.</li>
  </ol>

  <!-- SECTION 8: LAC OPERON -->
  <h2 style="color: #FF9100; border-bottom: 2px solid #FF9100; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    8. Gene Regulation: The <i>lac</i> Operon Model (Jacob &amp; Monod, 1961)
  </h2>
  <p>
    <b>François Jacob and Jacques Monod</b> elucidated the genetic regulation of lactose catabolism in <i>E. coli</i>, establishing the paradigm of transcriptional regulation in prokaryotes:
  </p>
  
  <div style="background: rgba(15, 23, 42, 0.7); border: 1.5px solid rgba(255, 145, 0, 0.3); border-radius: 10px; padding: 16px 20px; margin: 18px 0;">
    <h4 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16px;">Components of the <i>lac</i> Operon</h4>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF9100;">Regulator Gene (i gene):</b> Synthesizes active <b>repressor protein</b> constitutively.</li>
      <li><b style="color: #FF9100;">Promoter Gene (P):</b> Binding site for DNA-dependent RNA Polymerase.</li>
      <li><b style="color: #FF9100;">Operator Gene (O):</b> Regulatory sequence between promoter and structural genes where repressor binds.</li>
      <li><b style="color: #FF9100;">Structural Genes (z, y, a):</b>
        <br/>&bull; <b style="color: #FF9100;">Gene z:</b> Codes for <b>&beta;-galactosidase</b> (hydrolyzes lactose into glucose and galactose).
        <br/>&bull; <b style="color: #FF9100;">Gene y:</b> Codes for <b>&beta;-galactoside permease</b> (increases bacterial membrane permeability to lactose).
        <br/>&bull; <b style="color: #FF9100;">Gene a:</b> Codes for <b>&beta;-galactoside transacetylase</b> (transfers acetyl group to &beta;-galactosides).
      </li>
      <li><b style="color: #FF9100;">Inducer:</b> <b>Lactose / Allolactose</b> acts as the physiological inducer.</li>
    </ul>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(239, 68, 68, 0.08); border: 1.5px solid rgba(239, 68, 68, 0.35); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #F87171; margin: 0 0 8px 0; font-size: 15.5px;">🚫 In Absence of Lactose (Operon OFF)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        The repressor protein synthesized by the i gene binds tightly to the operator (O) region, physically blocking RNA polymerase from transcribing structural genes z, y, a. No enzymes synthesized.
      </p>
    </div>

    <div style="background: rgba(0, 230, 118, 0.08); border: 1.5px solid rgba(0, 230, 118, 0.35); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #4ADE80; margin: 0 0 8px 0; font-size: 15.5px;">✅ In Presence of Lactose (Operon ON)</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Lactose (allolactose) binds to the allosteric site of the repressor protein, causing conformational change that inactivates it. The inactive repressor cannot bind to the operator; RNA polymerase transcribes z, y, a, producing the enzymes for lactose utilization.
      </p>
    </div>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(124, 45, 18, 0.85)); border: 2px solid #FF9100; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #FF9100; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Botany Chapter 2: Genetics &amp; Molecular Biology Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(255, 145, 0, 0.25); color: #FF9100; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Concept / Discovery</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Scientist &amp; Year</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Numerical Ratio / Biological Principle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Monohybrid Cross:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Gregor Mendel (1865)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Phenotypic 3:1, Genotypic 1:2:1, Test cross 1:1</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Dihybrid Cross:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Gregor Mendel (1865)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Phenotypic 9:3:3:1, Test cross 1:1:1:1</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Incomplete Dominance:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Carl Correns (1903)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Phenotypic = Genotypic = 1:2:1 (Snapdragon, <i>Mirabilis</i>)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">ABO Blood Groups:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Karl Landsteiner (1900)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">3 Alleles (I<sup>A</sup>, I<sup>B</sup>, i), 6 Genotypes, 4 Phenotypes, Co-dominance</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Chromosomal Theory:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Sutton &amp; Boveri (1902)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Genes reside on chromosomes; segregation during Anaphase I</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Linkage &amp; Gene Mapping:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">T.H. Morgan &amp; Sturtevant</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">1\% Recombination = 1 Map unit (cM)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">DNA Genetic Material Proof:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Hershey &amp; Chase (1952)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><sup>32</sup>P (DNA inside cell) vs <sup>35</sup>S (Protein coat outside)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">DNA Double Helix:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Watson &amp; Crick (1953)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Pitch 3.4 nm, 10 bp/turn, A=T (2 H-bonds), G&equiv; C (3 H-bonds)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">Semiconservative Replication:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Meselson &amp; Stahl (1958)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><sup>15</sup>N / <sup>14</sup>N isotope density gradient in CsCl</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF9100;">lac Operon:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Jacob &amp; Monod (1961)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Negative inducible regulation; z, y, a structural genes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c12Bot2HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.15), rgba(255, 61, 0, 0.15)); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Definitions, Laws, Ratios &amp; Core Genetic Facts</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define heredity and variation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Heredity:</b> The transmission of genetic characters from parents to offspring. <b style="color: #FF9100;">Variation:</b> Structural, physiological, or developmental differences shown by individuals of the same species.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Who is acknowledged as the Father of Genetics?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Gregor Johann Mendel.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: Write the scientific name of the garden pea plant studied by Mendel.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Pisum sativum</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: State Mendel's Law of Segregation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Allele pairs remain distinct in an individual and segregate during gamete formation so that each gamete carries only one allele.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What is a Test Cross and what is its primary utility?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A cross between an individual showing dominant phenotype with homozygous recessive parent, used to determine unknown dominant genotype.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the phenotypic and genotypic ratio of a monohybrid test cross?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Both phenotypic and genotypic ratios are 1 : 1.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: What is the dihybrid test cross ratio?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1 : 1 : 1 : 1.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Give two examples of plants exhibiting Incomplete Dominance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Mirabilis jalapa</i> (Four O'clock plant) and <i>Antirrhinum majus</i> (Snapdragon).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What is the F_2 phenotypic and genotypic ratio in Incomplete Dominance?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Both phenotypic and genotypic ratios are identical: 1 : 2 : 1 (1 Red : 2 Pink : 1 White).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Define Co-dominance with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Phenomenon where both alleles of a heterozygote express equally without blending, e.g., AB blood group in humans (I<sup>A</sup> I<sup>B</sup>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: How many alleles and genotypes govern the ABO blood group system in humans?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      3 multiple alleles (I<sup>A</sup>, I<sup>B</sup>, i) and 6 genotypes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Define Pleiotropy with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Condition where a single gene controls multiple phenotypic traits (e.g., Phenylketonuria in humans, Starch grain size/seed shape in peas).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What is Polygenic Inheritance?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Inheritance of quantitative traits controlled by three or more pairs of non-allelic additive genes (e.g., Human skin color, Height).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Who proposed the Chromosomal Theory of Inheritance?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Walter Sutton and Theodore Boveri (1902).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Name the experimental organism used by T.H. Morgan in genetics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Drosophila melanogaster</i> (Fruit fly).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: What is Linkage?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Physical association of genes on the same chromosome that tend to be inherited together.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Define Recombination Frequency.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The proportion of recombinant progeny resulting from crossing-over between linked genes during meiosis.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: What is the relationship between map units and recombination frequency?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1% recombination frequency equals 1 map unit (1 centiMorgan / cM).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Who constructed the first genetic map of chromosomes?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Alfred Sturtevant (student of T.H. Morgan).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What did Frederick Griffith discover in 1928?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The phenomenon of bacterial transformation in <i>Streptococcus pneumoniae</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Which enzyme destroyed the transforming principle in Avery, MacLeod, and McCarty's experiment?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Deoxyribonuclease (DNase).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Name the radioactive isotopes used by Hershey and Chase in their 1952 experiment.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Radioactive Phosphorus (<sup>32</sup>P) for DNA and Radioactive Sulfur (<sup>35</sup>S) for protein coat.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Who proposed the Double Helix Model of DNA?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      James Watson and Francis Crick in 1953.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: What type of bond links adjacent nucleotides in a polynucleotide strand?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      3'-5' phosphodiester bond.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: How many hydrogen bonds exist between Adenine and Thymine, and between Guanine and Cytosine?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A=T has 2 hydrogen bonds; G&equiv; C has 3 hydrogen bonds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: State Chargaff's rule.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In double-stranded DNA, the ratio of Adenine to Thymine and Guanine to Cytosine is equal (A=T and G=C, so Purines = Pyrimidines).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: What is the pitch and diameter of B-DNA?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pitch is 3.4 nm (34 &Aring;) containing ~10 bp per turn; diameter is 2.0 nm (20 &Aring;).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is a nucleosome?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A structural unit of chromatin consisting of ~200 bp of DNA wrapped around a histone octamer.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Which basic amino acids are abundantly found in histone proteins?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lysine and Arginine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Distinguish between Euchromatin and Heterochromatin.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Euchromatin is loosely packed, light-staining, and transcriptionally active; Heterochromatin is densely packed, dark-staining, and transcriptionally inactive.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Who experimentally proved Semiconservative DNA replication in <i>E. coli</i>?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Matthew Meselson and Franklin Stahl (1958) using <sup>15</sup>N isotope.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is an Okazaki fragment?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A short, discontinuously synthesized segment of DNA formed on the lagging strand during DNA replication.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Which enzyme joins Okazaki fragments together?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      DNA Ligase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Define Central Dogma.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Unidirectional flow of genetic information: DNA  &rarr; Transcription &rarr;  mRNA  &rarr; Translation &rarr;  Protein.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Name the three stop codons (nonsense codons).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      UAA (Ochre), UAG (Amber), and UGA (Opal).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Which codon serves as the initiation codon and what amino acid does it code for?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      AUG, coding for Methionine (Met).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: What are the three structural genes of the <i>lac</i> operon?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Gene z (&beta;-galactosidase), gene y (permease), and gene a (transacetylase).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: What is the inducer in the <i>lac</i> operon?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Lactose (allolactose).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Why is genetic code called degenerate?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because most amino acids are specified by more than one triplet codon.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Which RNA molecule possesses an anticodon loop and an amino acid acceptor arm?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Transfer RNA (tRNA / adapter molecule).
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.15), rgba(255, 61, 0, 0.15)); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Crosses, Enzymatic Mechanisms &amp; Experimental Proofs</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain Mendel's Law of Dominance with a monohybrid cross example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Law of Dominance:</b> In a monohybrid cross between homozygous tall (TT) and dwarf (tt) pea plants, all F_1 progeny are tall (Tt) because the tall allele (T) masks the dwarf allele (t). When F_1 self-pollinate, the dwarf trait reappears in F_2 in 3:1 ratio, showing recessive alleles remain intact.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Describe Incomplete Dominance in <i>Antirrhinum majus</i> (Snapdragon).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When true-breeding red-flowered (RR) snapdragon is crossed with white-flowered (rr), the F_1 hybrid is pink (Rr) due to partial enzyme synthesis. In F_2, selfing produces 1 Red (RR) : 2 Pink (Rr) : 1 White (rr). Here, phenotypic ratio = genotypic ratio = 1 : 2 : 1.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the genetic basis of the ABO Blood Group system in humans.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ABO blood groups are governed by gene I with three multiple alleles: I<sup>A</sup>, I<sup>B</sup>, i. I<sup>A</sup> and I<sup>B</sup> are codominant with each other and dominant over i. Six genotypes produce four phenotypes: I<sup>A</sup> I<sup>A</sup>, I<sup>A</sup> i &rarr; Type A; I<sup>B</sup> I<sup>B</sup>, I<sup>B</sup> i &rarr; Type B; I<sup>A</sup> I<sup>B</sup> &rarr; Type AB; ii &rarr; Type O.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Differentiate between Monohybrid Test Cross and Dihybrid Test Cross.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Monohybrid Test Cross (Tt  &times;  tt):</b> Yields a 1 : 1 ratio (50% Tall : 50% Dwarf), testing one gene locus. <b style="color: #FF9100;">Dihybrid Test Cross (RrYy  &times;  rryy):</b> Yields a 1 : 1 : 1 : 1 ratio, proving independent assortment of two distinct gene pairs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain Pleiotropy with reference to Phenylketonuria and Starch synthesis in peas.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. PKU:</b> Single mutation in phenylalanine hydroxylase gene causes mental retardation, reduced hair and skin pigmentation. <b style="color: #FF9100;">2. Pea Seeds:</b> Gene B controls starch grain size (incomplete dominance: BB large, Bb intermediate, bb small) and seed shape (complete dominance: BB, Bb round, bb wrinkled).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: What is Polygenic Inheritance? Explain with human skin color.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Polygenic inheritance involves traits governed by multiple additive genes (e.g., A, B, C for human skin color). AABBCC produces maximum melanin (very dark), aabbcc minimal melanin (very light), and AaBbCc intermediate mulatto, generating a continuous bell-shaped phenotypic distribution.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: State the key postulates of Sutton and Boveri's Chromosomal Theory of Inheritance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Chromosomes and genes occur in pairs in diploid cells. 2. Homologous chromosomes segregate during meiosis (Anaphase I) so gametes receive one of each pair. 3. Independent assortment of non-homologous chromosomes accounts for Mendelian independent assortment.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Why is <i>Drosophila melanogaster</i> a model organism for genetic studies?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Simple 2-week life cycle. 2. Produces hundreds of offspring per single mating. 3. Clear sexual dimorphism. 4. Low chromosome number (2n=8) with distinct giant polytene chromosomes. 5. Inexpensive cultivation on synthetic cornmeal agar.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain the concept of Linkage and Recombination discovered by Morgan.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Morgan crossed yellow-bodied, white-eyed females with wild brown-bodied, red-eyed males in <i>Drosophila</i>. Genes on the X-chromosome did not assort independently: parental types were 98.7% and recombinants only 1.3% due to tight physical linkage. Recombination occurs via crossing-over.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Describe Griffith's bacterial transformation experiment.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Griffith injected mice with: (1) Virulent S-strain &rarr; Mice died. (2) Non-virulent R-strain &rarr; Mice lived. (3) Heat-killed S-strain &rarr; Mice lived. (4) Heat-killed S + Live R &rarr; Mice died; living S-strain bacteria were recovered, proving genetic transformation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: How did Avery, MacLeod, and McCarty prove DNA is the transforming principle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      They treated heat-killed S-cell extracts with Protease (destroys proteins), RNase (destroys RNA), and DNase (destroys DNA). Transformation of R-cells occurred with protease and RNase, but DNase completely abolished transformation, confirming DNA is the genetic material.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Describe the Hershey-Chase blender experiment and its conclusion.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bacteriophage T_2 labeled with <sup>32</sup>P (DNA) and <sup>35</sup>S (Protein) infected <i>E. coli</i>. After agitation in a blender and centrifugation, <sup>32</sup>P was detected in bacterial pellets, while <sup>35</sup>S remained in supernatant, proving viral DNA enters host cells to direct reproduction.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: List the salient features of the B-DNA Double Helix Model.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Two polynucleotide chains with antiparallel polarity (5'  &rarr;  3' and 3'  &rarr;  5'). 2. Sugar-phosphate backbone with bases facing inside. 3. Complementary base pairing (A=T, G&equiv; C). 4. Right-handed helix with pitch 3.4 nm and ~10 bp/turn.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: State and explain Chargaff's rules with a numerical example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Chargaff established that in double-stranded DNA: [A]=[T] and [G]=[C], therefore [A+G]=[T+C]. If a DNA molecule contains 20% Cytosine, then G=20\%, and A+T = 100 - (20+20) = 60\%, so A=30\% and T=30\%.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Explain the structure of a Nucleosome.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A nucleosome consists of a positively charged histone octamer (two molecules each of H_2A, H_2B, H_3, H_4) wrapped by ~200 bp of negatively charged DNA in 1.75 turns. H_1 linker histone seals the DNA at entry/exit points, forming the basic 'beads-on-a-string' chromatin unit.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Describe Meselson and Stahl's experiment proving semiconservative replication.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>E. coli</i> grown in <sup>15</sup>N (heavy) was shifted to <sup>14</sup>N (light). Generation 1 (20 min) showed 100% hybrid DNA (<sup>15</sup>N-<sup>14</sup>N) in CsCl density gradient. Generation 2 (40 min) showed 50% hybrid and 50% light DNA, confirming semiconservative replication.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Explain the role of Helicase, Primase, and DNA Ligase in DNA replication.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Helicase:</b> Unwinds the double helix at the replication fork by breaking hydrogen bonds. <b style="color: #FF9100;">Primase:</b> Synthesizes RNA primers for DNA Polymerase initiation. <b style="color: #FF9100;">DNA Ligase:</b> Covalently seals Okazaki fragments on the lagging strand.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Differentiate between Leading strand and Lagging strand during replication.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Leading Strand:</b> Synthesized continuously in 5'  &rarr;  3' direction towards the replication fork using 3'  &rarr;  5' template. <b style="color: #FF9100;">Lagging Strand:</b> Synthesized discontinuously away from fork as Okazaki fragments, requiring multiple primers and DNA ligase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain the structure of a transcription unit.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A transcription unit comprises: (1) <b style="color: #FF9100;">Promoter:</b> Upstream DNA sequence where RNA Polymerase binds. (2) <b style="color: #FF9100;">Structural Gene:</b> DNA region transcribed into RNA (3'  &rarr;  5' template strand). (3) <b style="color: #FF9100;">Terminator:</b> Downstream sequence signaling transcription cessation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Differentiate between Template strand and Coding strand in transcription.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Template Strand (3'  &rarr;  5'):</b> Directs complementary RNA synthesis. <b style="color: #FF9100;">Coding Strand (5'  &rarr;  3'):</b> Does not transcribe; its sequence is identical to the RNA transcript (except Thymine is replaced by Uracil).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Explain the post-transcriptional modifications of eukaryotic hnRNA.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">Splicing:</b> Introns (non-coding) are removed and exons (coding) are ligated by spliceosomes. 2. <b style="color: #FF9100;">Capping:</b> 7-methylguanosine triphosphate added to 5'-end. 3. <b style="color: #FF9100;">Tailing:</b> 200–300 poly-A residues added to 3'-end.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Name the three RNA Polymerases in eukaryotes and their specific transcripts.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF9100;">RNA Pol I:</b> Transcribes 28S, 18S, and 5.8S rRNA. 2. <b style="color: #FF9100;">RNA Pol II:</b> Transcribes precursor of mRNA (hnRNA). 3. <b style="color: #FF9100;">RNA Pol III:</b> Transcribes tRNA, 5S rRNA, and snRNA.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain why the genetic code is universal and unambiguous.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Universal:</b> The same triplet codon specifies the same amino acid in almost all organisms (e.g., UUU codes for Phenylalanine from bacteria to humans). <b style="color: #FF9100;">Unambiguous:</b> Each individual codon codes for only one particular amino acid.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Explain the dual function of the codon AUG.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      AUG functions as: (1) The universal <b style="color: #FF9100;">initiator codon</b> that signals the start of translation. (2) Codes for the amino acid <b style="color: #FF9100;">Methionine (Met)</b> in eukaryotes and formyl-methionine in prokaryotes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Describe the cloverleaf model of tRNA.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      tRNA (adapter molecule) exhibits a cloverleaf 2D structure with: (1) <b style="color: #FF9100;">Anticodon Loop:</b> Pairs with complementary mRNA codon. (2) <b style="color: #FF9100;">Amino Acid Acceptor Stem:</b> 3'-CCA end where amino acid attaches. (3) DHU and Tpsi C loops for enzyme and ribosome binding.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the process of Aminoacylation (Charging) of tRNA.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Amino acid is activated by reacting with ATP in the presence of aminoacyl-tRNA synthetase, forming aminoacyl-AMP-enzyme complex. The activated amino acid is then transferred to the 3'-OH CCA end of its specific tRNA, releasing AMP and enzyme.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Describe the role of the Ribosome during protein synthesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The ribosome acts as the cellular protein factory: (1) Small subunit binds mRNA. (2) Large subunit provides A (aminoacyl), P (peptidyl), and E (exit) sites. (3) Catalyzes peptide bond formation via 23S rRNA (prokaryotes) / 28S rRNA (eukaryotes) acting as peptidyl transferase ribozyme.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain the functions of the structural genes z, y, and a in the <i>lac</i> operon.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Gene z:</b> Codes for &beta;-galactosidase (hydrolyzes lactose into glucose and galactose). <b style="color: #FF9100;">Gene y:</b> Codes for permease (increases membrane permeability to lactose). <b style="color: #FF9100;">Gene a:</b> Codes for transacetylase (transfers acetyl group).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: How does lactose act as an inducer in the <i>lac</i> operon?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When lactose is present, allolactose binds to the repressor protein, causing an allosteric conformational change that inactivates the repressor. The inactive repressor detaches from the operator, allowing RNA polymerase to transcribe z, y, a structural genes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Why is <i>lac</i> operon regulation termed negative inducible control?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      It is <b style="color: #FF9100;">negative</b> because gene expression is normally blocked by a repressor protein, and <b style="color: #FF9100;">inducible</b> because the presence of the substrate (lactose inducer) turns on transcription by inactivating the repressor.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: What is meant by the degenerate nature of the genetic code?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Degeneracy means that a single amino acid can be coded by more than one codon (e.g., Leucine and Arginine are coded by 6 different codons), minimizing the detrimental effects of point mutations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain the difference between Back Cross and Test Cross.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Back Cross:</b> Cross of F_1 hybrid with either dominant (TT) or recessive (tt) parent. <b style="color: #FF9100;">Test Cross:</b> Cross of F_1 hybrid strictly with the homozygous recessive parent (tt), used to test zygosity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: What is the significance of the H_1 histone protein?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      H_1 histone binds to the linker DNA where DNA enters and exits the nucleosome core, stabilizing the 30 nm solenoid chromatin fiber.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Why is RNA less stable and more reactive than DNA?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. RNA has a 2'-OH group on ribose sugar making it chemically labile. 2. Uracil in RNA is less stable than Thymine (5-methyluracil). 3. Single-stranded RNA lacks the double-helix repair mechanism.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: Explain the Central Dogma Reverse (Teminism).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Discovered by Howard Temin and David Baltimore in retroviruses: genetic information flows in reverse from RNA to DNA catalyzed by the enzyme <b style="color: #FF9100;">Reverse Transcriptase</b> (RNA-dependent DNA polymerase).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: What is the difference between monocistronic and polycistronic structural genes?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Monocistronic (Eukaryotes):</b> Transcribes mRNA that codes for a single polypeptide. <b style="color: #FF9100;">Polycistronic (Prokaryotes):</b> Transcribes a single mRNA that codes for multiple related enzymes (e.g., <i>lac</i> operon z, y, a).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: What are UTRs (Untranslated Regions) in mRNA?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      UTRs are non-coding sequences located on mRNA before start codon (5'-UTR) and after stop codon (3'-UTR) essential for efficient translation and mRNA stability.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: What will be the blood groups of children if mother is heterozygous A and father is heterozygous B?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mother (I<sup>A</sup> i)  &times;  Father (I<sup>B</sup> i) produces four genotypes (I<sup>A</sup> I<sup>B</sup>, I<sup>A</sup> i, I<sup>B</sup> i, ii), so children can have all four blood groups: <b style="color: #FF9100;">AB, A, B, and O</b> in equal 25% probability.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain why crossing-over does not occur between completely linked genes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Completely linked genes are located extremely close to each other on the same chromosome with negligible distance between them, preventing chiasma formation and crossing-over.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Define Introns and Exons in eukaryotic genes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">Exons:</b> Coding, expressed sequences that appear in mature processed mRNA. <b style="color: #FF9100;">Introns:</b> Non-coding intervening sequences spliced out during post-transcriptional processing.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.15), rgba(255, 61, 0, 0.15)); border: 1.5px solid rgba(255, 145, 0, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF9100; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master Genetic Derivations, Molecular Mechanisms &amp; Operon Models</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: State and explain Mendel's Law of Independent Assortment with a complete dihybrid cross in pea plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Law Statement:</b> When two pairs of contrasting traits are combined in a hybrid, the segregation of one pair of characters is independent of the other pair during gametogenesis.<br/><br/><b style="color: #FF9100;">2. Dihybrid Cross:</b> Pure breeding Round-Yellow seed (RRYY)  &times;  Wrinkled-Green seed (rryy).<br/>&bull; Gametes: RY and ry.<br/>&bull; F_1 Generation: All RrYy (Round Yellow seeds).<br/>&bull; F_1 Gametes: Four types in equal ratio (RY, Ry, rY, ry).<br/><br/><b style="color: #FF9100;">3. F_2 Phenotypic Ratio (Punnett Square):</b><br/>&bull; Round Yellow: 9<br/>&bull; Round Green: 3<br/>&bull; Wrinkled Yellow: 3<br/>&bull; Wrinkled Green: 1<br/><b>Ratio = 9 : 3 : 3 : 1.</b><br/><br/><b style="color: #FF9100;">4. Significance:</b> Proves seed shape and seed color genes assort independently without linkage on separate chromosomes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Discuss deviations from Mendelian genetics: Incomplete Dominance, Co-dominance, and Pleiotropy with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Incomplete Dominance:</b> Heterozygote displays intermediate blend phenotype (e.g., <i>Antirrhinum</i> flower color: RR Red  &times;  rr White &rarr; Rr Pink; F_2 ratio is 1:2:1).<br/><br/><b style="color: #FF9100;">2. Co-dominance:</b> Both alleles express fully without blending (e.g., Human ABO blood group I<sup>A</sup> I<sup>B</sup> produces both A and B antigens on RBC membranes).<br/><br/><b style="color: #FF9100;">3. Multiple Allelism:</b> Presence of >2 alleles for a gene in a population (I<sup>A</sup>, I<sup>B</sup>, i on chromosome 9 producing 6 genotypes and 4 blood groups).<br/><br/><b style="color: #FF9100;">4. Pleiotropy:</b> Single gene controls multiple phenotypic traits (e.g., PKU mutation in phenylalanine hydroxylase causes mental retardation and pigmentation loss; Starch branching gene B in peas controls starch size and seed shape).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Describe the Chromosomal Theory of Inheritance and detail Morgan's experiments on linkage in <i>Drosophila</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Sutton-Boveri Chromosomal Theory:</b> Chromosomes exist in pairs; segregate during Anaphase I; non-homologous chromosomes assort independently.<br/><br/><b>2. Morgan's <i>Drosophila</i> Crosses:</b><br/>&bull; <i>Cross A:</i> Yellow body, white eye (yw)  &times;  Wild brown body, red eye (y<sup>+w</sup><sup>+</sup>) &rarr; 98.7% Parental, 1.3% Recombinant (Tight Linkage).<br/>&bull; <i>Cross B:</i> White eye, miniature wing (wm)  &times;  Wild (w<sup>+m</sup><sup>+</sup>) &rarr; 62.8% Parental, 37.2% Recombinant (Loose Linkage).<br/><br/><b style="color: #FF9100;">3. Conclusions:</b> Linked genes on the same chromosome deviate from 9:3:3:1 ratio; physical distance determines recombination frequency, forming the foundation of chromosome mapping (Sturtevant).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Describe Griffith's, Avery-MacLeod-McCarty's, and Hershey-Chase's experiments proving DNA is the genetic material.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Griffith (1928):</b> Heat-killed S + live R killed mice; live S recovered, discovering the Transforming Principle.<br/><br/><b style="color: #FF9100;">2. Avery, MacLeod, McCarty (1944):</b> Biochemical purification showed proteases and RNases did not halt transformation, while pure DNase destroyed it, proving DNA is the transforming substance.<br/><br/><b style="color: #FF9100;">3. Hershey-Chase (1952 - Unequivocal Proof):</b> Bacteriophage T_2 with <sup>32</sup>P (DNA) and <sup>35</sup>S (Protein). After infection and blending of <i>E. coli</i>, <sup>32</sup>P entered host cells while <sup>35</sup>S remained outside, proving DNA is the hereditary material.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Explain Watson and Crick's Double Helix model of DNA and Chargaff's Equimolar Rules in detail.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Structural Parameters of B-DNA:</b><br/>&bull; Two polynucleotide chains with antiparallel polarity (5'  &rarr;  3' and 3'  &rarr;  5').<br/>&bull; Sugar-phosphate backbone linked by 3'-5' phosphodiester bonds.<br/>&bull; Nitrogenous bases pair complementarily inside: A=T (2 H-bonds) and G&equiv; C (3 H-bonds).<br/>&bull; Pitch = 3.4 nm (34 &Aring;), 10 bp per helical turn; distance between base pairs = 0.34 nm (3.4 &Aring;); diameter = 2.0 nm.<br/><br/><b style="color: #FF9100;">2. Chargaff's Rules:</b> In dsDNA, [A]=[T], [G]=[C], Purines (A+G) = Pyrimidines (T+C). (A+T / G+C) is variable and species-specific.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Describe the packaging of DNA in eukaryotic chromosomes from DNA helix to metaphase chromosome.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Nucleosome Core:</b> 200 bp of negatively charged DNA wraps 1.75 turns around a positively charged histone octamer (2  &times;  [H_2A, H_2B, H_3, H_4] rich in lysine/arginine). H_1 histone seals entry/exit.<br/><br/><b style="color: #FF9100;">2. Solenoid Fiber:</b> 'Beads-on-a-string' nucleosome chain (10 nm) coils into a 30 nm solenoid chromatin fiber (6 nucleosomes per turn).<br/><br/><b style="color: #FF9100;">3. Radial Loops &amp; Scaffold:</b> 30 nm fiber loops onto a Non-Histone Chromosomal (NHC) protein scaffold (300 nm).<br/><br/><b style="color: #FF9100;">4. Condensed Chromosome:</b> Loops condense into chromatids (700 nm) and metaphase chromosome (1400 nm).<br/><br/><b style="color: #FF9100;">5. Functional Chromatin:</b> Euchromatin (active, open) vs Heterochromatin (silent, compact).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain Meselson and Stahl's experiment proving Semiconservative DNA Replication.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Experimental Setup:</b> <i>E. coli</i> cultured in <sup>15</sup>NH_4Cl medium for multiple generations until DNA was uniformly heavy (<sup>15</sup>N). Shifted to normal <sup>14</sup>NH_4Cl medium.<br/><br/><b style="color: #FF9100;">2. Density Gradient Analysis in CsCl:</b><br/>&bull; <i>Generation 0:</i> 100% Heavy DNA (<sup>15</sup>N-<sup>15</sup>N).<br/>&bull; <i>Generation 1 (20 min / 1 cycle):</i> 100% Hybrid DNA (<sup>15</sup>N-<sup>14</sup>N), disproving conservative replication.<br/>&bull; <i>Generation 2 (40 min / 2 cycles):</i> 50% Hybrid DNA (<sup>15</sup>N-<sup>14</sup>N) and 50% Light DNA (<sup>14</sup>N-<sup>14</sup>N), confirming semiconservative replication.<br/><br/><b style="color: #FF9100;">3. Significance:</b> Taylor confirmed semiconservative replication in eukaryotes (<i>Vicia faba</i>) using tritiated thymidine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Describe the step-by-step mechanism of DNA replication with all associated enzymes and replication fork dynamics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Initiation:</b> Helicase unwinds DNA at Ori; Topoisomerase (Gyrase) relieves torsional strain; SSB proteins stabilize single strands.<br/><br/><b style="color: #FF9100;">2. Priming:</b> RNA Primase synthesizes 10-nt RNA primers (5'  &rarr;  3') on single-stranded templates.<br/><br/><b style="color: #FF9100;">3. Elongation:</b> DNA Polymerase III adds dNTPs in 5'  &rarr;  3' direction.<br/>&bull; <i>Leading Strand:</i> Synthesized continuously towards the fork.<br/>&bull; <i>Lagging Strand:</i> Synthesized discontinuously as Okazaki fragments away from the fork.<br/><br/><b style="color: #FF9100;">4. Primer Removal &amp; Ligation:</b> DNA Polymerase I removes RNA primers with 5'  &rarr;  3' exonuclease and fills gaps; DNA Ligase forms phosphodiester bonds to join Okazaki fragments.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain the process of Transcription in prokaryotes and eukaryotes, including post-transcriptional processing.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Transcription Unit:</b> Promoter (TATA box), Structural gene, Terminator. Template strand is 3'  &rarr;  5'; coding strand is 5'  &rarr;  3'.<br/><br/><b style="color: #FF9100;">2. Prokaryotic Transcription:</b> Single RNA Polymerase + sigma (sigma) initiation factor &rarr; Elongation &rarr; rho (rho) termination factor.<br/><br/><b style="color: #FF9100;">3. Eukaryotic Transcription &amp; Polymerases:</b> RNA Pol I (rRNA), RNA Pol II (hnRNA), RNA Pol III (tRNA, 5S rRNA).<br/><br/><b style="color: #FF9100;">4. Processing of hnRNA:</b> (a) <i>Splicing:</i> Introns excised and exons ligated by spliceosomes. (b) <i>Capping:</i> 7-methylguanosine added to 5'-end. (c) <i>Tailing:</i> 200–300 poly-A residues added to 3'-end.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Describe the properties of the Genetic Code and explain the structure and adapter role of tRNA.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Genetic Code Properties:</b> (a) Triplet (64 codons: 61 coding + 3 stop UAA, UAG, UGA). (b) Unambiguous &amp; specific. (c) Degenerate (multiple codons per amino acid). (d) Universal. (e) Commaless. (f) Initiator codon AUG (Methionine).<br/><br/><b style="color: #FF9100;">2. tRNA Structure &amp; Role:</b><br/>&bull; <i>Cloverleaf 2D Structure:</i> Anticodon loop pairs complementarily with mRNA codon; 3'-CCA acceptor arm binds specific amino acid.<br/>&bull; <i>Adapter Function:</i> Acts as the physical molecular adapter converting nucleotide sequence of mRNA into amino acid sequence of proteins.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Trace the complete mechanism of Translation (Protein Synthesis) in detail.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Charging of tRNA:</b> Amino acid + ATP &rarr; Aminoacyl-AMP + tRNA &rarr; Aminoacyl-tRNA + AMP.<br/><br/><b style="color: #FF9100;">2. Initiation:</b> Small ribosomal subunit binds mRNA at 5'-cap; initiator tRNA (Met-tRNA) binds AUG at P-site; large subunit associates.<br/><br/><b style="color: #FF9100;">3. Elongation:</b> Next aminoacyl-tRNA binds at A-site. Peptidyl transferase (23S/28S rRNA ribozyme) forms peptide bond. Ribosome translocates 5'  &rarr;  3' by one codon.<br/><br/><b style="color: #FF9100;">4. Termination:</b> Stop codon (UAA, UAG, UGA) reaches A-site; release factors bind, releasing the completed polypeptide.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Describe the regulation of gene expression in the <i>lac</i> Operon in the absence and presence of lactose.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. Structure of <i>lac</i> Operon:</b> i gene (repressor), Promoter (P), Operator (O), structural genes z (&beta;-galactosidase), y (permease), a (transacetylase).<br/><br/><b style="color: #FF9100;">2. Absence of Lactose (Operon OFF):</b> Repressor protein binds operator (O), blocking RNA polymerase from transcribing z, y, a.<br/><br/><b style="color: #FF9100;">3. Presence of Lactose (Operon ON):</b> Lactose (allolactose) binds repressor, causing allosteric inactivation. RNA polymerase transcribes z, y, a, producing enzymes to metabolize lactose into glucose and galactose.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Differentiate between Monohybrid and Dihybrid crosses, complete dominance, incomplete dominance, and codominance with ratios.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Complete Dominance:</b> Monohybrid F_2 = 3:1 (phenotype), 1:2:1 (genotype); Dihybrid F_2 = 9:3:3:1.<br/><br/><b style="color: #FF9100;">2. Incomplete Dominance:</b> F_2 Phenotypic = Genotypic = 1:2:1 (e.g., Snapdragon flower color: 1 Red : 2 Pink : 1 White).<br/><br/><b style="color: #FF9100;">3. Codominance:</b> Both alleles fully expressed in heterozygote (e.g., I<sup>A</sup> I<sup>B</sup> produces AB blood group; F_2 = 1:2:1).<br/><br/><b style="color: #FF9100;">4. Test Cross Ratios:</b> Monohybrid test cross = 1:1; Dihybrid test cross = 1:1:1:1.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Explain the experimental evidence of Linkage vs Crossing-over and how chromosome maps are constructed.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Linkage vs Crossing-over:</b> Linked genes on the same chromosome tend to stay together; crossing-over at Pachytene of Meiosis I breaks linkage, generating recombinant gametes.<br/><br/><b style="color: #FF9100;">2. Chromosome Mapping (Sturtevant):</b> Recombination frequency is directly proportional to physical distance between genes (1\% recombination = 1 cM).<br/><br/><b style="color: #FF9100;">3. Example:</b> If recombination between A and B is 5% and B and C is 3%, gene order is determined by comparing three-point test crosses.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Compare DNA and RNA structurally, chemically, and functionally.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Sugar &amp; Bases:</b> DNA contains 2-deoxyribose and Thymine; RNA contains ribose (with 2'-OH) and Uracil.<br/><br/><b style="color: #FF9100;">2. Structure &amp; Stability:</b> DNA is double-stranded, highly stable, and repairable; RNA is single-stranded, chemically reactive, and unstable.<br/><br/><b style="color: #FF9100;">3. Function:</b> DNA is the primary long-term genetic repository; RNA functions as messenger (mRNA), adapter (tRNA), structural/catalytic (rRNA, ribozymes).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Explain the role of all enzymes and proteins involved in DNA replication and RNA transcription.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Replication Enzymes:</b> Helicase (unwinds), Topoisomerase/Gyrase (relieves tension), SSB (stabilizes), Primase (RNA primer), DNA Pol III (elongates), DNA Pol I (primer removal &amp; gap fill), DNA Ligase (seals nicks).<br/><br/><b style="color: #FF9100;">2. Transcription Enzymes:</b> DNA-dependent RNA Polymerase (binds promoter, initiates with sigma factor, elongates, terminates with rho factor in prokaryotes; RNA Pol I, II, III in eukaryotes), Spliceosome (snRNPs for splicing).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain how the genetic code was deciphered and discuss its universal characteristics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Deciphering Genetic Code:</b> George Gamow suggested triplet code (4<sup>3</sup>=64); Har Gobind Khorana synthesized defined RNA copolymers; Marshall Nirenberg used cell-free translation (poly-U &rarr; polyphenylalanine); Severo Ochoa enzyme synthesized template-independent RNA.<br/><br/><b style="color: #FF9100;">2. Salient Features:</b> Triplet, unambiguous, degenerate, commaless, universal, non-overlapping, with AUG initiator codon and 3 stop codons.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain Polygenic Inheritance and Pleiotropy with detailed genetic crosses and examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Polygenic Inheritance:</b> Quantitative traits controlled by multiple additive genes (e.g., Skin color A, B, C). F_2 phenotypic distribution forms a 1 : 6 : 15 : 20 : 15 : 6 : 1 bell curve.<br/><br/><b style="color: #FF9100;">2. Pleiotropy:</b> Single gene produces multiple phenotypic effects. In PKU, defective phenylalanine hydroxylase leads to elevated phenylalanine, causing mental retardation, light hair, and reduced melanin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Describe the Hershey-Chase experiment and state why it provided unequivocal proof for DNA as genetic material.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Rationale:</b> Phage T_2 consists solely of DNA and protein. DNA contains Phosphorus but no Sulfur; Protein contains Sulfur but no Phosphorus.<br/><br/><b style="color: #FF9100;">2. Execution:</b> <sup>32</sup>P-DNA phage and <sup>35</sup>S-protein phage infected <i>E. coli</i> &rarr; Blending &rarr; Centrifugation.<br/><br/><b style="color: #FF9100;">3. Observation:</b> <sup>32</sup>P was inside bacterial cells; <sup>35</sup>S was in supernatant ghost coats.<br/><br/><b style="color: #FF9100;">4. Conclusion:</b> Confirmed unequivocally that DNA is the genetic material transmitted to progeny.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF9100; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Discuss the biological significance of gene regulation in prokaryotes and eukaryotes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF9100;">1. Energy Conservation:</b> Prevents wasteful synthesis of enzymes when substrates are absent (e.g., <i>lac</i> operon shut down in absence of lactose).<br/><br/><b style="color: #FF9100;">2. Cellular Differentiation (Eukaryotes):</b> Differential gene expression allows identical genome to produce specialized cells (muscle, nerve, liver).<br/><br/><b style="color: #FF9100;">3. Environmental Adaptation:</b> Regulates physiological response to stress, nutrient availability, and developmental cues.
    </div>
  </div>

</div>
`;

export const c12Bot2Mcqs = [
  {
    "id": "c12-bot-2-mcq-1",
    "question": "The phenotypic ratio of a Mendelian dihybrid cross in the F_2 generation is:",
    "options": [
      "A):   3 : 1",
      "B):   9 : 3 : 3 : 1",
      "C):   1 : 2 : 1",
      "D):   1 : 1 : 1 : 1"
    ],
    "correctAnswer": "b",
    "explanation": "In a dihybrid cross (RrYy \ &times;  RrYy), independent assortment of two gene pairs yields a 9 : 3 : 3 : 1 phenotypic ratio in F_2."
  },
  {
    "id": "c12-bot-2-mcq-2",
    "question": "A cross between an F_1 hybrid and its homozygous recessive parent is termed:",
    "options": [
      "A):   Test cross",
      "B):   Reciprocal cross",
      "C):   Monohybrid cross",
      "D):   Back cross"
    ],
    "correctAnswer": "a",
    "explanation": "A test cross involves crossing an individual showing a dominant phenotype with its homozygous recessive parent to determine whether it is homozygous or heterozygous."
  },
  {
    "id": "c12-bot-2-mcq-3",
    "question": "In <i>Antirrhinum majus</i> (Snapdragon), a cross between red (RR) and white (rr) flowers yields pink (Rr) flowers due to:",
    "options": [
      "A):   Co-dominance",
      "B):   Complete dominance",
      "C):   Incomplete dominance",
      "D):   Pleiotropy"
    ],
    "correctAnswer": "c",
    "explanation": "Incomplete dominance occurs when the dominant allele does not completely mask the recessive allele, producing an intermediate pink phenotype in the heterozygote."
  },
  {
    "id": "c12-bot-2-mcq-4",
    "question": "Human ABO blood groups exhibit multiple allelism and co-dominance governed by how many alleles and genotypes?",
    "options": [
      "A):   2 alleles and 4 genotypes",
      "B):   3 alleles and 4 genotypes",
      "C):   4 alleles and 6 genotypes",
      "D):   3 alleles and 6 genotypes"
    ],
    "correctAnswer": "d",
    "explanation": "The ABO system is controlled by 3 alleles (I<sup>A</sup>, I<sup>B</sup>, i), giving rise to 6 genotypes (I<sup>A</sup> I<sup>A</sup>, I<sup>A</sup> i, I<sup>B</sup> I<sup>B</sup>, I<sup>B</sup> i, I<sup>A</sup> I<sup>B</sup>, ii) and 4 phenotypes (A, B, AB, O)."
  },
  {
    "id": "c12-bot-2-mcq-5",
    "question": "A single gene influencing multiple phenotypic traits is known as a:",
    "options": [
      "A):   Polygenic gene",
      "B):   Pleiotropic gene",
      "C):   Complementary gene",
      "D):   Epistatic gene"
    ],
    "correctAnswer": "b",
    "explanation": "Pleiotropy refers to a single genetic locus influencing multiple, seemingly unrelated phenotypic traits (e.g., Phenylketonuria)."
  },
  {
    "id": "c12-bot-2-mcq-6",
    "question": "Who provided experimental verification of the Chromosomal Theory of Inheritance using <i>Drosophila</i>?",
    "options": [
      "A):   T.H. Morgan",
      "B):   Gregor Mendel",
      "C):   Walter Sutton",
      "D):   Theodore Boveri"
    ],
    "correctAnswer": "a",
    "explanation": "Thomas Hunt Morgan provided experimental proof of the Chromosomal Theory and discovered sex-linkage and crossing-over using <i>Drosophila melanogaster</i>."
  },
  {
    "id": "c12-bot-2-mcq-7",
    "question": "One map unit (1 centiMorgan) represents what percentage of recombination frequency between linked genes?",
    "options": [
      "A):   10%",
      "B):   50%",
      "C):   1%",
      "D):   0.1%"
    ],
    "correctAnswer": "c",
    "explanation": "Alfred Sturtevant defined 1 map unit (1 cM) as 1% recombination frequency between two linked genes on a chromosome."
  },
  {
    "id": "c12-bot-2-mcq-8",
    "question": "In Griffith's experiment, mice died when injected with a mixture of:",
    "options": [
      "A):   Live R-strain and live S-strain",
      "B):   Heat-killed R-strain and live S-strain",
      "C):   Heat-killed S-strain and heat-killed R-strain",
      "D):   Heat-killed S-strain and live R-strain"
    ],
    "correctAnswer": "d",
    "explanation": "Heat-killed virulent S-strain transformed live non-virulent R-strain into live virulent S-strain, killing the mice."
  },
  {
    "id": "c12-bot-2-mcq-9",
    "question": "Avery, MacLeod, and McCarty proved that the transforming principle was DNA because transformation was abolished by:",
    "options": [
      "A):   DNase",
      "B):   RNase",
      "C):   Protease",
      "D):   Lipase"
    ],
    "correctAnswer": "a",
    "explanation": "Only treatment with the enzyme deoxyribonuclease (DNase) destroyed transforming activity, proving DNA is the transforming substance."
  },
  {
    "id": "c12-bot-2-mcq-10",
    "question": "In the Hershey-Chase experiment, what was used to label bacteriophage DNA and protein coats respectively?",
    "options": [
      "A):   <sup>35</sup>S for DNA and <sup>32</sup>P for protein",
      "B):   <sup>32</sup>P for DNA and <sup>35</sup>S for protein",
      "C):   <sup>15</sup>N for DNA and <sup>14</sup>N for protein",
      "D):   <sup>14</sup>C for DNA and <sup>3</sup>H for protein"
    ],
    "correctAnswer": "b",
    "explanation": "Phosphorus (<sup>32</sup>P) is present in DNA but absent in proteins; Sulfur (<sup>35</sup>S) is present in proteins (cysteine/methionine) but absent in DNA."
  },
  {
    "id": "c12-bot-2-mcq-11",
    "question": "According to Chargaff's rules, if a double-stranded DNA contains 20% Adenine, the percentage of Cytosine is:",
    "options": [
      "A):   30%",
      "B):   20%",
      "C):   40%",
      "D):   60%"
    ],
    "correctAnswer": "a",
    "explanation": "If A = 20\\%, then T = 20\\%. Remaining G+C = 100 - 40 = 60\\%. Since G=C, Cytosine is 60/2 = 30\\%."
  },
  {
    "id": "c12-bot-2-mcq-12",
    "question": "The pitch and number of base pairs per turn in a typical B-DNA double helix are:",
    "options": [
      "A):   3.4 nm and 10 bp",
      "B):   0.34 nm and 10 bp",
      "C):   2.0 nm and 20 bp",
      "D):   34 nm and 100 bp"
    ],
    "correctAnswer": "a",
    "explanation": "B-DNA has a pitch of 3.4 nm (34 &Aring;) containing ~10 base pairs per turn, with an inter-base pair distance of 0.34 nm."
  },
  {
    "id": "c12-bot-2-mcq-13",
    "question": "A nucleosome core particle consists of DNA wrapped around an octamer of basic proteins composed of:",
    "options": [
      "A):   H_1, H_2A, H_2B, H_3",
      "B):   H_1 only",
      "C):   Two molecules each of H_2A, H_2B, H_3, H_4",
      "D):   Two molecules each of H_1, H_2A, H_3, H_4"
    ],
    "correctAnswer": "c",
    "explanation": "The histone octamer comprises two molecules each of the core histones H_2A, H_2B, H_3, and H_4."
  },
  {
    "id": "c12-bot-2-mcq-14",
    "question": "Meselson and Stahl proved semiconservative replication of DNA using which heavy isotope and separation method?",
    "options": [
      "A):   <sup>32</sup>P and Agarose gel electrophoresis",
      "B):   <sup>35</sup>S and SDS-PAGE",
      "C):   <sup>14</sup>C and Paper chromatography",
      "D):   <sup>15</sup>N and CsCl density gradient centrifugation"
    ],
    "correctAnswer": "d",
    "explanation": "Meselson and Stahl cultured <i>E. coli</i> in <sup>15</sup>NH_4Cl and separated heavy, hybrid, and light DNA using CsCl density gradient centrifugation."
  },
  {
    "id": "c12-bot-2-mcq-15",
    "question": "During DNA replication, the enzyme that covalently joins Okazaki fragments on the lagging strand is:",
    "options": [
      "A):   DNA Helicase",
      "B):   DNA Ligase",
      "C):   DNA Topoisomerase",
      "D):   RNA Primase"
    ],
    "correctAnswer": "b",
    "explanation": "DNA Ligase catalyzes phosphodiester bond formation between adjacent Okazaki fragments on the lagging strand."
  },
  {
    "id": "c12-bot-2-mcq-16",
    "question": "In eukaryotic transcription, RNA Polymerase II is responsible for synthesizing:",
    "options": [
      "A):   tRNA and 5S rRNA",
      "B):   28S and 18S rRNA",
      "C):   hnRNA (Precursor of mRNA)",
      "D):   snRNA"
    ],
    "correctAnswer": "c",
    "explanation": "RNA Polymerase II synthesizes heterogeneous nuclear RNA (hnRNA), which is processed into mature mRNA."
  },
  {
    "id": "c12-bot-2-mcq-17",
    "question": "Which of the following is NOT a stop codon (nonsense codon)?",
    "options": [
      "A):   UAA",
      "B):   UAG",
      "C):   UGA",
      "D):   AUG"
    ],
    "correctAnswer": "d",
    "explanation": "AUG is the initiator codon (coding for Methionine). UAA, UAG, and UGA are the three stop codons."
  },
  {
    "id": "c12-bot-2-mcq-18",
    "question": "The chemical modification occurring at the 5'-end of eukaryotic hnRNA during capping is:",
    "options": [
      "A):   Polyadenylation",
      "B):   Addition of 7-methylguanosine triphosphate",
      "C):   Attachment of CCA trinucleotide",
      "D):   Phosphorylation of cytosine"
    ],
    "correctAnswer": "b",
    "explanation": "Capping involves adding an unusual nucleotide, 7-methylguanosine triphosphate (m<sup>7Gppp</sup>), to the 5'-end of hnRNA."
  },
  {
    "id": "c12-bot-2-mcq-19",
    "question": "In the <i>lac</i> operon of <i>E. coli</i>, the z gene encodes for which enzyme?",
    "options": [
      "A):   \&beta;-galactosidase",
      "B):   Permease",
      "C):   Transacetylase",
      "D):   RNA Polymerase"
    ],
    "correctAnswer": "a",
    "explanation": "The z gene codes for \&beta;-galactosidase, which cleaves lactose into glucose and galactose."
  },
  {
    "id": "c12-bot-2-mcq-20",
    "question": "In the <i>lac</i> operon, the repressor protein synthesized by the i gene binds directly to the:",
    "options": [
      "A):   Promoter gene",
      "B):   Structural gene z",
      "C):   Operator gene",
      "D):   Inducer gene"
    ],
    "correctAnswer": "c",
    "explanation": "The active repressor binds to the operator (O) region, preventing RNA Polymerase from transcribing structural genes z, y, a."
  },
  {
    "id": "c12-bot-2-mcq-21",
    "question": "If the sequence of coding strand of DNA is 5'\-ATGCATGC-3', the sequence of the corresponding mRNA transcript is:",
    "options": [
      "A):   5'\-UACGUACG-3'",
      "B):   5'\-AUGCAUGC-3'",
      "C):   3'\-UACGUACG-5'",
      "D):   3'\-AUGCAUGC-5'"
    ],
    "correctAnswer": "b",
    "explanation": "The mRNA sequence is identical to the coding strand in the 5' \ &rarr;  3' direction, with Thymine (T) replaced by Uracil (U): 5'\-AUGCAUGC-3'."
  },
  {
    "id": "c12-bot-2-mcq-22",
    "question": "The catalytic RNA (ribozyme) that forms peptide bonds during translation in prokaryotes is:",
    "options": [
      "A):   23S rRNA",
      "B):   16S rRNA",
      "C):   5S rRNA",
      "D):   28S rRNA"
    ],
    "correctAnswer": "a",
    "explanation": "In prokaryotes, 23S rRNA in the 50S large ribosomal subunit acts as the peptidyl transferase ribozyme (in eukaryotes, it is 28S rRNA)."
  },
  {
    "id": "c12-bot-2-mcq-23",
    "question": "What will be the genotypic ratio in F_2 generation of a monohybrid cross?",
    "options": [
      "A):   3 : 1",
      "B):   9 : 3 : 3 : 1",
      "C):   1 : 2 : 1",
      "D):   1 : 1"
    ],
    "correctAnswer": "c",
    "explanation": "Monohybrid F_2 genotypic ratio is 1 : 2 : 1 (1\\,TT : 2\\,Tt : 1\\,tt)."
  },
  {
    "id": "c12-bot-2-mcq-24",
    "question": "Which amino acid is coded by only a single codon (AUG)?",
    "options": [
      "A):   Valine",
      "B):   Leucine",
      "C):   Phenylalanine",
      "D):   Methionine"
    ],
    "correctAnswer": "d",
    "explanation": "Methionine (AUG) and Tryptophan (UGG) are the only two amino acids specified by single codons."
  },
  {
    "id": "c12-bot-2-mcq-25",
    "question": "Reverse Transcription (flow of genetic information from RNA to DNA) was discovered by:",
    "options": [
      "A):   Watson and Crick",
      "B):   Jacob and Monod",
      "C):   Temin and Baltimore",
      "D):   Hershey and Chase"
    ],
    "correctAnswer": "c",
    "explanation": "Howard Temin and David Baltimore discovered reverse transcription (Teminism) in retroviruses catalyzed by reverse transcriptase."
  }
];
