// Class 12 Zoology Chapter 4: Biotechnology and its Applications (Principles, Processes, Health, Transgenic Animals, Biosafety)
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Zoology | Class: 12 | Code: c12-zoo-4

export const c12Zoo4HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.12), rgba(0, 131, 143, 0.12)); border: 1.5px solid rgba(0, 176, 255, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 12px 0; font-size: 17.5px; font-weight: bold; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📖</span> Quick Glossary &amp; Biotechnological Definitions
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Restriction Endonuclease:</b> Bacterial enzyme that cuts both strands of duplex DNA at specific palindromic recognition sequences, acting as molecular scissors.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Insertional Inactivation:</b> Disruption of a marker gene (e.g., &beta;-galactosidase) upon insertion of foreign DNA, enabling selection of recombinant colonies.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Taq Polymerase:</b> Thermostable DNA polymerase isolated from <i>Thermus aquaticus</i> that remains active at 94-96&deg;C in PCR reactions.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Humulin:</b> Recombinant human insulin synthesized by expressing separate A and B chain cDNAs in <i>E. coli</i> and joining them with disulfide bonds (Eli Lilly, 1983).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Gene Therapy:</b> Medical procedure wherein normal functional genes are inserted into human cells/tissues to correct a congenital genetic defect (e.g., ADA deficiency).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00B0FF;">Rosie (Transgenic Cow):</b> First transgenic cow (1997) producing human protein-enriched milk (2.4 g/L) containing human &alpha;-lactalbumin.
      </div>
    </div>
  </div>

  <!-- SECTION 1: PRINCIPLES & PROCESSES -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Biotechnology: Principles, Tools &amp; Recombinant DNA Technology
  </h2>
  <p>
    The European Federation of Biotechnology (EFB) defines biotechnology as <i>'The integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services'</i>. Modern biotechnology rests on two core pillars: <b>Genetic Engineering</b> (altering DNA/RNA chemistry and introducing it into hosts) and <b>Bioprocess Engineering</b> (maintaining sterile ambient conditions for mass culture of desired cells in bioreactors).
  </p>

  <h3 style="color: #00B0FF; margin-top: 18px; font-size: 16.5px;">(i) Tools of Recombinant DNA Technology</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">1. Restriction Endonucleases (Molecular Scissors):</b> Enzymes discovered in bacteria that cleave foreign viral DNA. The first isolated was <i>Hind II</i>.
        <br/>&bull; <i>Palindromic Recognition Sequences:</i> Sequences reading identically on both complementary strands in the 5'  &rarr;  3' direction. Example: <i>EcoRI</i> recognizes 5'-GAATTC-3' and cuts between G and A, producing single-stranded overhangs termed <b>Sticky Ends</b>.
        <br/>&bull; <i>Nomenclature:</i> E.g., <i>EcoRI</i>: E = genus <i>Escherichia</i>, co = species <i>coli</i>, R = strain RY 13, I = first enzyme isolated from this strain.
      </li>
      <li><b style="color: #00B0FF;">2. DNA Ligase (Molecular Glue):</b> Enzyme that covalently joins compatible sticky ends by synthesizing phosphodiester bonds.</li>
      <li><b style="color: #00B0FF;">3. Cloning Vectors:</b> DNA vehicles used to deliver passenger genes into host cells. Essential features of a vector (e.g., <i>pBR322</i> plasmid):
        <br/>&bull; <i>Origin of Replication (ori):</i> Specific sequence where DNA replication initiates; controls copy number.
        <br/>&bull; <i>Selectable Markers:</i> Genes conferring resistance to antibiotics (e.g., amp<sup>R</sup>, tet<sup>R</sup>) that allow selection of transformants.
        <br/>&bull; <i>Cloning Sites:</i> Unique restriction sites (e.g., <i>BamHI</i> in tet<sup>R</sup> gene). Insertion of foreign gene at this site inactivates the gene (<b>Insertional Inactivation</b>).
        <br/>&bull; <i>Blue-White Screening:</i> Insertion of foreign DNA inside the &beta;-galactosidase gene (lacZ) prevents enzyme synthesis; recombinant colonies appear <b>white</b> in the presence of X-gal chromogenic substrate, while non-recombinants form <b>blue</b> colonies.
        <br/>&bull; <i>Vectors for Eukaryotes:</i> Disarmed <b>Ti plasmid of <i>Agrobacterium tumefaciens</i></b> for plant cells; disarmed <b>Retroviruses</b> for animal cells.
      </li>
      <li><b style="color: #00B0FF;">4. Competent Host Cells:</b>
        <br/>&bull; <i>Chemical Method:</i> Treating bacterial cells with divalent cations (Ca<sup>2+</sup>) followed by heat shock (42&deg;C) to facilitate plasmid uptake through membrane pores.
        <br/>&bull; <i>Micro-injection:</i> Direct mechanical injection of recombinant DNA into the nucleus of an animal cell.
        <br/>&bull; <i>Biolistics / Gene Gun:</i> Bombardment of plant cells with high-velocity microscopic tungsten or gold particles coated with DNA.
      </li>
    </ul>
  </div>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(ii) Processes of Recombinant DNA Technology</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">1. DNA Isolation:</b> Cell lysis using Lysozyme (bacteria), Cellulase (plants), or Chitinase (fungi). Digestion of RNA with Ribonuclease and proteins with Protease. Pure DNA precipitated by adding ice-cold ethanol (spooling).</li>
      <li><b style="color: #00B0FF;">2. Restriction Cleavage &amp; Gel Electrophoresis:</b> Cleaved DNA fragments separated on an agarose gel toward the positive anode. Stained with Ethidium Bromide (EtBr), visible as bright orange bands under UV transillumination. Desired band excised by <b>Elution</b>.</li>
      <li><b style="color: #00B0FF;">3. Polymerase Chain Reaction (PCR, Kary Mullis 1985):</b> In vitro enzymatic amplification of a specific DNA segment into billions of copies through repeated thermal cycles:
        <br/>&bull; <i>Denaturation (94-96&deg;C):</i> Thermal separation of duplex DNA into single strands.
        <br/>&bull; <i>Annealing (50-60&deg;C):</i> Binding of two sets of synthetic oligonucleotide primers to complementary 3' ends.
        <br/>&bull; <i>Extension (72&deg;C):</i> Synthesis of complementary DNA strands by <b>Taq Polymerase</b> (from thermophilic bacterium <i>Thermus aquaticus</i>) using dNTPs.
      </li>
      <li><b style="color: #00B0FF;">4. Bioreactor Fermentation:</b> Recombinant cells cultured in <b>Bioreactors (100-1000 liters)</b> providing optimal temperature, pH, substrate, oxygen, and agitator aeration (stirred-tank vs sparged bioreactor).</li>
      <li><b style="color: #00B0FF;">5. Downstream Processing:</b> Separation, purification, stabilization with preservatives, clinical safety trials, and quality control before marketing.</li>
    </ol>
  </div>

  <!-- SECTION 2: BIOTECHNOLOGY IN HEALTH -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Applications of Biotechnology in Health &amp; Medicine
  </h2>

  <h3 style="color: #00B0FF; margin-top: 18px; font-size: 16.5px;">(i) Genetically Engineered Human Insulin (Humulin)</h3>
  <p>
    Insulin regulates blood glucose levels. Previously, diabetic patients were treated with insulin extracted from slaughtered cattle and pigs, which provoked allergic immune reactions.
  </p>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">Proinsulin Structure:</b> Synthesized as an inactive pro-hormone consisting of three chains: <b>A-chain (21 amino acids)</b>, <b>B-chain (30 amino acids)</b>, and an extra connecting <b>C-peptide (33 amino acids)</b>. During post-translational processing, the C-peptide is cleaved off to yield mature, active insulin held by two inter-chain disulfide bridges.</li>
      <li><b style="color: #00B0FF;">Recombinant Production (Eli Lilly, 1983):</b> American company Eli Lilly chemically synthesized two separate DNA sequences coding for human insulin A and B chains. These cDNAs were inserted into plasmids of <i>Escherichia coli</i> to express chains A and B separately. The polypeptide chains were extracted, purified, and joined chemically by <b>disulfide bonds</b> to create mature, fully functional <b>Humulin</b>.</li>
    </ul>
  </div>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(ii) Gene Therapy (ADA Deficiency)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00B0FF;">Definition:</b> Clinical replacement or alteration of a defective mutated gene with a normal functional therapeutic gene to cure hereditary disease.</li>
    <li><b style="color: #00B0FF;">First Clinical Case (1990):</b> Administered by W. French Anderson to a 4-year-old girl suffering from <b>Adenosine Deaminase (ADA) Deficiency</b>, which causes Severe Combined Immunodeficiency (SCID) due to failure of T- and B-lymphocyte development.</li>
    <li><b style="color: #00B0FF;">Therapeutic Procedure:</b>
      <br/>1. Lymphocytes extracted from patient's peripheral blood are cultured in vitro.
      <br/>2. A functional ADA cDNA is inserted into a disarmed retroviral vector and introduced into patient's cultured lymphocytes.
      <br/>3. Genetically corrected lymphocytes are re-infused into patient.
      <br/>4. <i>Limitation:</i> Since lymphocytes have a finite lifespan, periodic transfusions are required.
      <br/>5. <i>Permanent Cure:</i> Introducing functional ADA cDNA into <b>bone marrow stem cells at early embryonic stages</b> cures the disease permanently.
    </li>
  </ul>

  <h3 style="color: #00B0FF; margin-top: 22px; font-size: 16.5px;">(iii) Stem Cell Technology &amp; Recombinant Vaccines</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00B0FF;">Stem Cell Technology:</b> Stem cells are undifferentiated biological cells possessing self-renewal capacity and potency to differentiate into specialized cell lineages.
      <br/>&bull; <i>Totipotent:</i> Zygote and early blastomeres up to 8-cell stage (can form entire organism and placenta).
      <br/>&bull; <i>Pluripotent:</i> Inner Cell Mass (ICM) of blastocyst (embryonic stem cells capable of giving rise to all three germ layers: ectoderm, mesoderm, endoderm).
      <br/>&bull; <i>Multipotent:</i> Adult stem cells (e.g., hematopoietic stem cells in bone marrow and umbilical cord blood).
      <br/>&bull; <i>Applications:</i> Regenerative medicine for myocardial infarction, Parkinson's disease, Alzheimer's, spinal cord injuries, and diabetes.
    </li>
    <li><b style="color: #00B0FF;">Vaccine Production:</b> Second-generation recombinant subunit vaccines synthesized by expressing viral antigens in microbes (e.g., Hepatitis B surface antigen produced in transgenic baker's yeast), eliminating hazards of whole live pathogens.</li>
  </ul>

  <!-- SECTION 3: TRANSGENIC ANIMALS -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Transgenic Animals: Production &amp; Scientific Applications
  </h2>
  <p>
    Animals that have had their DNA manipulated to possess and express a foreign gene (transgene) are known as <b>Transgenic Animals</b>. Over 95% of all existing transgenic animals are <b>transgenic mice</b>, followed by rats, rabbits, pigs, sheep, and cows.
  </p>

  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 176, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <h4 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 15.5px;">Five Major Scientific Objectives:</h4>
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00B0FF;">1. Normal Physiology &amp; Development:</b> Transgenic animals are engineered to study how specific genes are regulated and affect normal physiological functions (e.g., studying role of Insulin-like Growth Factor in bodily growth).</li>
      <li><b style="color: #00B0FF;">2. Study of Human Diseases:</b> Creating transgenic animal models to understand molecular pathogenesis and test novel gene therapies for incurable conditions like Cancer, Cystic Fibrosis, Rheumatoid Arthritis, and Alzheimer's disease.</li>
      <li><b style="color: #00B0FF;">3. Production of Valuable Biological Products:</b>
        <br/>&bull; <b style="color: #00B0FF;">Human &alpha;-1-Antitrypsin:</b> Synthesized in transgenic animals for the clinical management of <b>Emphysema</b>.
        <br/>&bull; <b style="color: #00B0FF;">Rosie (Transgenic Cow, 1997):</b> Produced milk enriched with human protein (2.4 g per liter) containing <b>human &alpha;-lactalbumin</b>, nutritionally superior and far more suitable for human infants than natural cow milk.
      </li>
      <li><b style="color: #00B0FF;">4. Vaccine Safety Testing:</b> Transgenic mice are engineered for batch testing of polio vaccine safety prior to human use, successfully replacing the use of primates/monkeys.</li>
      <li><b style="color: #00B0FF;">5. Chemical Safety Testing (Toxicity Testing):</b> Transgenic animals are engineered to carry genes that make them hypersensitive to toxic chemicals, enabling rapid detection of toxic effects in a shorter timeframe.</li>
    </ol>
  </div>

  <!-- SECTION 4: BIO-SAFETY & ETHICAL ISSUES -->
  <h2 style="color: #00B0FF; border-bottom: 2px solid #00B0FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Bio-safety Issues, Ethics, Patents &amp; Biopiracy
  </h2>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00B0FF;">Bio-safety Concerns:</b> The release of genetically modified organisms into the wild poses potential ecological hazards, such as horizontal gene transfer to wild relatives (creating pesticide-resistant 'superweeds'), disruption of natural food chains, unforeseen toxicity, and novel allergic reactions in human consumers.</li>
    <li><b style="color: #00B0FF;">GEAC (Genetic Engineering Appraisal Committee):</b> The apex statutory committee under the Ministry of Environment, Forest and Climate Change (MoEFCC), Government of India. It evaluates the biosafety of GM research and approves the commercial release of GM organisms into the environment.</li>
    <li><b style="color: #00B0FF;">Biopiracy &amp; Patent Controversies:</b> The commercial exploitation of biological resources and traditional indigenous knowledge by multinational corporations without authorization or benefit-sharing.
      <br/>&bull; <i>Basmati Rice Controversy:</i> In 1997, US company RiceTec obtained a patent on Basmati rice varieties crossing it with semi-dwarf lines. India legally contested and proved traditional prior art, compelling the US patent office to restrict patent claims.
      <br/>&bull; <i>Neem &amp; Turmeric:</i> US patents on wound healing by turmeric and antifungal properties of neem were revoked following legal challenges by CSIR India citing ancient Ayurvedic texts.
    </li>
  </ul>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(0, 78, 102, 0.85)); border: 2px solid #00B0FF; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #00B0FF; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Zoology Chapter 4: Applied Biotechnology Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(0, 176, 255, 0.25); color: #00B0FF; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Biotech Tool / Product</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Molecular Source / Mechanism</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Medical / Agronomic Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;"><i>EcoRI</i>:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>E. coli</i> RY 13 (5'-GAATTC-3')</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cuts DNA duplex to generate cohesive sticky ends</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">pBR322:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Standard plasmid cloning vector</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Selectable markers: amp<sup>R</sup> and tet<sup>R</sup>; insertional inactivation</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Taq Polymerase:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Thermus aquaticus</i></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Thermostable DNA synthesis in PCR at 72&deg;C</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Humulin:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Eli Lilly (1983) via <i>E. coli</i></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">A &amp; B chains synthesized separately; treats diabetes without allergy</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">ADA Gene Therapy:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Retroviral vector into lymphocytes</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cures SCID in 4-year-old girl (1990); embryonic stem cells cure permanently</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">&alpha;-1-Antitrypsin:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Transgenic animal expression</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Therapeutic human protein used for treating Emphysema</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">Rosie Cow:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Transgenic dairy cow (1997)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Milk enriched with human &alpha;-lactalbumin (2.4 g/L)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00B0FF;">GEAC:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Statutory body under MoEFCC</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Regulates safety and commercial environmental release of GMOs</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c12Zoo4HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.15), rgba(0, 131, 143, 0.15)); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #00B0FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Biotech Tools, PCR Steps, Insulin Chains &amp; Transgenic Facts</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define Biotechnology according to the EFB.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Name the two core principles of modern biotechnology.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Genetic Engineering. 2. Bioprocess / Chemical Engineering.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is the function of a Restriction Endonuclease?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      It cleaves duplex DNA at specific palindromic nucleotide recognition sequences.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Name the first restriction endonuclease to be discovered and characterized.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Hind II</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What are Sticky Ends in recombinant DNA technology?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Single-stranded overhangs produced when restriction enzymes cut DNA slightly away from the center of palindromic sites.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: State the recognition palindromic sequence of the enzyme <i>EcoRI</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      5'-GAATTC-3' (cuts between G and A).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: What is the role of DNA Ligase?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      It forms covalent phosphodiester bonds between adjacent nucleotides to seal recombinant DNA fragments.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What is an 'ori' (Origin of Replication) in a cloning vector?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A specific DNA sequence where replication starts and which controls vector copy number.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: What is meant by Insertional Inactivation?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The loss of function of a marker gene (e.g., tet<sup>R</sup> or lacZ) due to insertion of recombinant foreign DNA.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Why are antibiotic resistance genes used as Selectable Markers?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      They enable selection and distinction of transformed recombinant cells from non-transformed cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What is the substrate and color change in Blue-White screening?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      X-gal; non-recombinants produce active &beta;-galactosidase and turn blue, while recombinants form white colonies.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: Name the natural plant genetic engineer used as a cloning vector for dicot plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The <i>Ti</i> plasmid of <i>Agrobacterium tumefaciens</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: What is Biolistics or Gene Gun?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A direct gene transfer method where plant cells are bombarded with high-velocity micro-particles of gold or tungsten coated with DNA.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What method is used to directly inject foreign DNA into animal cell nuclei?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Micro-injection.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Which chemical is used to precipitate purified DNA during extraction?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ice-cold ethanol (spooling).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: What chemical stain is used to visualize DNA bands under UV transillumination?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ethidium Bromide (EtBr).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: What is Elution in agarose gel electrophoresis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The cutting out and extraction of separated DNA bands from the agarose gel slice.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Who invented the Polymerase Chain Reaction (PCR)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kary Mullis (1985).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Name the thermostable DNA polymerase used in PCR and state its source organism.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Taq Polymerase isolated from the bacterium <i>Thermus aquaticus</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What are the three sequential steps of a PCR thermal cycle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Denaturation (94&deg;C). 2. Annealing (50-60&deg;C). 3. Extension (72&deg;C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What is a Bioreactor?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A large vessel (100–1000 L) providing optimal physical and chemical conditions for mass biological culture of cells to produce desired products.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Differentiate between a simple stirred-tank and a sparged stirred-tank bioreactor.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In a sparged bioreactor, sterile air bubbles are sparged through the broth to dramatically increase oxygen transfer surface area.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What is Downstream Processing?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The series of post-fermentation separation, purification, and quality-control processes required before marketing a product.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: How many amino acid chains are present in mature active human insulin?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Two polypeptide chains: A-chain (21 amino acids) and B-chain (30 amino acids) joined by disulfide bonds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: What is C-peptide in human proinsulin?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An extra connecting peptide (33 amino acids) present in inactive proinsulin that is removed during maturation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Which pharmaceutical company first produced recombinant human insulin (Humulin) in 1983?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Eli Lilly (an American pharmaceutical company).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: In which organism were the A and B insulin cDNAs expressed by Eli Lilly?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Escherichia coli</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is Gene Therapy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The insertion of a normal, functional gene into an individual's cells to treat or correct a hereditary genetic defect.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: For which enzyme deficiency was the first clinical gene therapy performed in 1990?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Adenosine Deaminase (ADA) deficiency.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: Why was the 1990 ADA gene therapy not a permanent cure?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because mature lymphocytes have a finite lifespan and periodic infusions of genetically modified lymphocytes were required.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: How can ADA deficiency be cured permanently using gene therapy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      By introducing the functional ADA gene into bone marrow stem cells during early embryonic development.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What are Stem Cells?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Undifferentiated biological cells possessing self-renewal capacity and potency to differentiate into specialized cell types.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Differentiate between Totipotent and Pluripotent stem cells.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Totipotent cells (zygote) can form an entire organism including placenta; Pluripotent cells (ICM of blastocyst) can form all three embryonic germ layers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Define a Transgenic Animal.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An animal whose genome has been deliberately altered to carry and express an introduced foreign gene.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Which animal accounts for over 95% of all existing transgenic laboratory animals?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Transgenic mice.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Name the human protein produced by transgenic animals used in treating Emphysema.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Human &alpha;-1-antitrypsin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: What was special about 'Rosie', the first transgenic cow produced in 1997?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Her milk contained human &alpha;-lactalbumin (2.4 g/L), making it nutritionally superior and more balanced for human infants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: Which primates were previously used for testing polio vaccine safety that have now been replaced by transgenic mice?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Monkeys.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Expand GEAC.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Genetic Engineering Appraisal Committee.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: What is Biopiracy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The commercial exploitation of biological resources and traditional knowledge without proper authorization or compensatory benefit-sharing.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.15), rgba(0, 131, 143, 0.15)); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00B0FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; pBR322, Blue-White Screening, Gene Therapy &amp; Bioreactor Features</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain the mechanism of action of Restriction Endonucleases.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Restriction endonucleases inspect the length of DNA and bind to specific 4–8 bp palindromic recognition sequences. They cut each of the two strands of the double helix at specific points in the sugar-phosphate backbones, generating cohesive sticky ends that facilitate pairing with complementary foreign DNA.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Explain how <i>EcoRI</i> restriction enzyme was named.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">E:</b> Genus <i>Escherichia</i>. <b style="color: #00B0FF;">co:</b> Species <i>coli</i>. <b style="color: #00B0FF;">R:</b> Strain RY 13. <b style="color: #00B0FF;">I:</b> First restriction enzyme isolated from this strain.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: What is a Palindromic nucleotide sequence? Give an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A sequence in double-stranded DNA where the base reading is identical on both strands when read in the same polarity (5'  &rarr;  3'). Example for <i>EcoRI</i>: 5'-G A A T T C-3' paired with 3'-C T T A A G-5'.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Describe the features of the cloning plasmid vector <i>pBR322</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">ori:</b> Controls origin and high copy number replication. 2. <b style="color: #00B0FF;">Selectable Markers:</b> amp<sup>R</sup> and tet<sup>R</sup> genes. 3. <b style="color: #00B0FF;">Cloning Sites:</b> Unique restriction enzyme sites (<i>PstI</i> in amp<sup>R</sup>, <i>BamHI</i> in tet<sup>R</sup>). 4. <b style="color: #00B0FF;">rop:</b> Codes for proteins involved in plasmid replication.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain Insertional Inactivation using the &beta;-galactosidase (lacZ) gene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When foreign DNA is inserted into the coding sequence of the &beta;-galactosidase gene (lacZ), the gene is inactivated. Transformed host cells grown on chromogenic substrate X-gal fail to produce enzyme and form <b style="color: #00B0FF;">white recombinant colonies</b>, while intact plasmids form <b style="color: #00B0FF;">blue colonies</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: How are bacterial cells made competent to take up plasmid DNA?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bacterial cells are treated with a specific concentration of a divalent cation like Calcium (Ca<sup>2+</sup>), which alters the permeability of cell wall pores. Recombinant DNA is then introduced by incubating cells on ice, followed by a brief heat shock at 42&deg;C, and chilling back on ice.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Differentiate between Micro-injection and Biolistic gene gun methods.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">Micro-injection:</b> Recombinant DNA is directly injected into the nucleus of an animal cell using a fine glass micropipette under a microscope. <b style="color: #00B0FF;">Biolistics / Gene Gun:</b> Plant cells are bombarded with high-velocity micro-projectiles of gold or tungsten coated with DNA.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain the principle and steps of Agarose Gel Electrophoresis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      DNA fragments are negatively charged and migrate toward the positive anode under an electric field through an agarose matrix. Smaller fragments migrate faster and further. Bands are stained with Ethidium Bromide (EtBr) and fluoresce bright orange under UV transillumination.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain the three steps of Polymerase Chain Reaction (PCR) with temperature conditions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Denaturation (94-96&deg;C):</b> Hydrogen bonds break, separating duplex DNA into single strands. 2. <b style="color: #00B0FF;">Annealing (50-60&deg;C):</b> Synthetic primers pair with complementary sequences. 3. <b style="color: #00B0FF;">Extension (72&deg;C):</b> Taq polymerase synthesizes new DNA strands using dNTPs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Why is Taq Polymerase chosen for PCR reactions?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Taq polymerase is isolated from the thermophilic bacterium <i>Thermus aquaticus</i> living in hot springs. It remains stable and active at high denaturation temperatures (94-96&deg;C), eliminating the need to add fresh enzyme after each thermal cycle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Describe the components and working of a Stirred-Tank Bioreactor.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A stirred-tank bioreactor is a cylindrical stainless steel vessel with a curved base. Components: (1) Motor-driven agitator/impeller for uniform mixing. (2) Oxygen sparging delivery system. (3) Foam breaker. (4) Temperature and pH monitoring sensors. (5) Sterile sampling port.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain why Downstream Processing is necessary for commercial recombinant products.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Products synthesized in bioreactors contain cell debris, spent medium, and contaminants. Downstream processing separates and purifies the target protein, adds stabilizing preservatives, ensures strict sterility, and carries out clinical trials to ensure safety and efficacy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Describe the maturation of Human Insulin from Proinsulin.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Proinsulin consists of an A-chain (21 amino acids), a B-chain (30 amino acids), and a connecting C-peptide (33 amino acids). During maturation in the Golgi apparatus, endopeptidases cleave out the C-peptide, linking the A and B chains through two inter-chain disulfide bridges.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: How did Eli Lilly solve the challenge of producing mature human insulin in 1983?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Eli Lilly prepared two separate synthetic cDNA sequences encoding the human A and B insulin chains. These were cloned separately into <i>E. coli</i> plasmids. Chains A and B were extracted, purified, and joined chemically in vitro by forming disulfide bonds, producing active Humulin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: What is ADA deficiency and what are its clinical consequences?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Adenosine Deaminase (ADA) is an enzyme essential for purine metabolism. ADA deficiency is an autosomal recessive inborn error where toxic purine metabolites accumulate, killing developing T- and B-lymphocytes, leading to Severe Combined Immunodeficiency (SCID).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Describe the step-by-step procedure of the first clinical Gene Therapy (1990).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Lymphocytes extracted from blood of 4-year-old SCID patient. 2. Cultured in vitro. 3. Functional ADA cDNA inserted using a disarmed retroviral vector. 4. Transduced lymphocytes infused back into patient. 5. Repeated periodic transfusions required due to finite lymphocyte lifespan.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: What are the three main types of Stem Cells based on potency?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00B0FF;">Totipotent:</b> Zygote and 2–8 cell blastomeres capable of forming complete embryo and placenta. 2. <b style="color: #00B0FF;">Pluripotent:</b> Inner cell mass (ICM) capable of forming all three germ layers. 3. <b style="color: #00B0FF;">Multipotent:</b> Adult stem cells forming limited cell lineages.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain how Transgenic Animals assist in studying human diseases.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Transgenic animal models (especially transgenic mice) are engineered by introducing mutated human oncogenes or defective genes, enabling researchers to investigate disease progression and test novel drug therapies for Cancer, Cystic Fibrosis, and Alzheimer's.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: What is the medical significance of Human &alpha;-1-Antitrypsin produced in transgenic animals?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Human &alpha;-1-antitrypsin is a biological protein inhibitor that protects lung tissues from elastase enzyme degradation. It is synthesized by transgenic sheep and cows to treat hereditary <b style="color: #00B0FF;">Emphysema</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Describe the characteristics of Rosie, the first transgenic cow.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Created in 1997, Rosie produced human protein-enriched milk (2.4 g per liter) containing the human gene for <b style="color: #00B0FF;">&alpha;-lactalbumin</b>. The milk was nutritionally balanced for infants who could not be breastfed by mothers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: Why are transgenic mice preferred for Vaccine Safety Testing over monkeys?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Transgenic mice can be engineered with human cellular receptors for viruses (e.g., poliovirus). They reproduce rapidly, are ethically more acceptable, cost less, and provide reliable, standardized results, replacing the slaughter of primates.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Explain Chemical Safety (Toxicity) Testing using Transgenic Animals.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Transgenic animals are engineered to carry specific genes that make them more sensitive to toxic compounds than non-transgenic animals. When exposed to chemical agents, toxic symptoms manifest much faster, allowing rapid evaluation of safety and carcinogenicity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: What are the functions and statutory authority of GEAC in India?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Genetic Engineering Appraisal Committee (GEAC) under MoEFCC evaluates the safety of research involving GMOs, ensures biosafety protocols in laboratory experiments, and approves the environmental and commercial release of genetically modified crops and animals.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Explain the Basmati Rice patent controversy with RiceTec Inc.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In 1997, US company RiceTec was granted a US patent on Basmati rice lines, claiming invention of semi-dwarf hybrids. India legally challenged the patent using historical and trade records showing traditional ownership, forcing revocation of critical patent claims.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: How did CSIR India successfully contest the US patent on Turmeric (Haldi)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In 1995, a US patent was granted for the wound-healing properties of turmeric. CSIR India cited ancient Ayurvedic texts (Sanskrit literature) establishing prior art and traditional indigenous knowledge, leading to complete patent invalidation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: What are the major bio-safety hazards of releasing GMOs into the ecosystem?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Uncontrolled gene transfer to wild relatives producing herbicide-resistant 'superweeds'. 2. Accidental toxicity or allergenicity in human and animal food chains. 3. Extinction of non-target beneficial insect pollinators.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the role of Disarmed Pathogens as cloning vectors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pathogenic vectors (like <i>Agrobacterium tumefaciens</i> Ti plasmid or mammalian retroviruses) are genetically modified by removing their disease-causing virulence genes while retaining their natural gene-transfer machinery, allowing safe delivery of foreign genes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: What is DNA Spooling?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The physical collection of long, precipitated threads of pure genomic DNA onto a glass rod after adding chilled ethanol to cell extract.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain the significance of Multiple Cloning Sites (MCS) in plasmid vectors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A MCS (polylinker) contains closely spaced unique recognition sites for multiple restriction endonucleases, allowing flexibility in selecting restriction enzymes to clone passenger DNA without disrupting essential vector genes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Why is an alkaline lysis step used during plasmid extraction from bacteria?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Alkaline conditions (SDS + NaOH) denature both bacterial chromosomal DNA and plasmid DNA. Upon neutralization, small circular plasmids rapidly reanneal, whereas large chromosomal DNA aggregates with protein debris and is removed by centrifugation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Differentiate between First-generation and Second-generation vaccines.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">First-Generation:</b> Killed or attenuated live pathogens (e.g., BCG, Oral Polio); carries risk of reversion to virulence. <b style="color: #00B0FF;">Second-Generation:</b> Recombinant subunit proteins produced in microbes (e.g., Hepatitis B vaccine in yeast); 100% safe.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: What are the ethical concerns surrounding Animal Transgenesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Compromising animal welfare and causing unforeseen deformities or physiological stress. 2. Treating animals merely as biological factories (bioreactors). 3. Violating natural evolutionary species boundaries.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain the role of the <i>rop</i> gene in plasmid <i>pBR322</i>.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The <i>rop</i> (repressor of primer) gene encodes a regulatory protein that regulates plasmid copy number by modulating RNA I and RNA II primer interactions at the origin of replication.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Why are non-recombinant colonies blue in Blue-White screening?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Non-recombinant plasmids have an intact &beta;-galactosidase (lacZ) gene that cleaves the chromogenic substrate X-gal into an insoluble dark blue galactose derivative.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: What is the role of continuous culture in Bioreactors?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Continuous culture involves draining spent medium from one side while continuously adding fresh nutrient broth from the other, maintaining cells in their exponential log growth phase for maximum product yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: What are Embryonic Stem Cells and why are they controversial?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pluripotent cells derived from the inner cell mass of blastocysts. Controversy arises because harvesting them typically destroys the human pre-implantation embryo, raising profound ethical and moral objections.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: How does Gene Therapy for ADA deficiency differ from Enzyme Replacement Therapy (ERT)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">ERT:</b> Periodic injection of bovine ADA enzyme; does not cure the genetic defect and requires lifelong treatments. <b style="color: #00B0FF;">Gene Therapy:</b> Introduces functional human ADA cDNA into cells, producing native enzyme endogenously.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Why is <i>Thermus aquaticus</i> able to survive in boiling water?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Its proteins and DNA polymerases have high thermal stability due to dense hydrophobic cores, abundant salt bridges, and elevated GC-content, preventing thermal denaturation up to 95&deg;C.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: What is Patent Infringement in modern biotechnology?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The unauthorized manufacture, use, sale, or commercial exploitation of a patented biological process, gene sequence, or transgenic organism without obtaining a license from the patent holder.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: How does Biotechnology assist in forensic medicine?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Restriction endonuclease digestion and PCR amplification of hypervariable VNTR loci (DNA Fingerprinting) provide definitive identification of suspects and establishment of biological paternity.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.15), rgba(0, 131, 143, 0.15)); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00B0FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master rDNA Protocols, Humulin Engineering &amp; Transgenic Case Studies</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Describe the Tools of Recombinant DNA Technology: Restriction Endonucleases, Ligases, Vectors, and Competent Hosts.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Restriction Endonucleases:</b> Molecular scissors cutting palindromic sequences to yield sticky ends (e.g., <i>EcoRI</i> 5'-GAATTC-3').<br/><br/><b style="color: #00B0FF;">2. DNA Ligase:</b> Molecular glue sealing complementary sticky ends by forming phosphodiester bonds.<br/><br/><b style="color: #00B0FF;">3. Cloning Vectors:</b> Plasmids (<i>pBR322</i>) featuring <i>ori</i> (copy number), selectable markers (amp<sup>R</sup>, tet<sup>R</sup>), and cloning sites. Insertional inactivation enables recombinant selection.<br/><br/><b style="color: #00B0FF;">4. Competent Hosts:</b> Chemical competence (Ca<sup>2+</sup> and heat shock at 42&deg;C) or physical vectorless methods (Micro-injection in animals, Gene Gun in plants).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Explain the step-by-step Processes of Recombinant DNA Technology from DNA isolation to product marketing.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. DNA Isolation:</b> Enzymatic cell lysis &rarr; removal of RNA/protein &rarr; alcohol precipitation (spooling).<br/><b style="color: #00B0FF;">2. Cleavage &amp; Electrophoresis:</b> Restriction digestion &rarr; agarose gel electrophoresis &rarr; EtBr staining &rarr; UV band elution.<br/><b style="color: #00B0FF;">3. PCR Amplification:</b> Denaturation (94&deg;C), Annealing (55&deg;C), Extension (72&deg;C, Taq polymerase).<br/><b style="color: #00B0FF;">4. Ligation &amp; Transformation:</b> Vector + passenger DNA ligated &rarr; introduced into host.<br/><b style="color: #00B0FF;">5. Bioreactor Culture:</b> Stirred-tank bioreactors for large-scale biomass.<br/><b style="color: #00B0FF;">6. Downstream Processing:</b> Separation, purification, quality-control testing, and marketing.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Describe the Polymerase Chain Reaction (PCR): Principle, Reagents, Thermal Steps, and Diagnostic Applications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Principle &amp; Reagents:</b> In vitro enzymatic amplification of DNA (Kary Mullis, 1985). Requires template DNA, pair of oligonucleotide primers, dNTPs, and thermostable <b>Taq Polymerase</b> (<i>Thermus aquaticus</i>).<br/><br/><b style="color: #00B0FF;">2. Three Thermal Steps:</b><br/>&bull; <i>Denaturation (94-96&deg;C):</i> Separates dsDNA into single strands.<br/>&bull; <i>Annealing (50-60&deg;C):</i> Primers bind to 3' ends.<br/>&bull; <i>Extension (72&deg;C):</i> Taq polymerase synthesizes complementary strands.<br/><br/><b style="color: #00B0FF;">3. Kinetics:</b> 30 cycles yield >1 billion copies (2<sup>n</sup>).<br/><br/><b style="color: #00B0FF;">4. Applications:</b> Early detection of HIV, cancer gene mutations, forensic DNA profiling.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Explain Bioreactor Design: Comparison between Stirred-Tank and Sparged Bioreactors, and Downstream Processing.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Bioreactor Design:</b> Stainless steel vessel (100–1000 L) providing optimal temperature, pH, substrate, aeration, and agitation.<br/><br/><b style="color: #00B0FF;">2. Stirred-Tank vs Sparged:</b><br/>&bull; <i>Stirred-Tank:</i> Curved base; motor-driven flat-blade impeller for uniform mixing without settling.<br/>&bull; <i>Sparged Bioreactor:</i> Sterile air bubbles sparged through broth, dramatically increasing surface area for oxygen transfer.<br/><br/><b style="color: #00B0FF;">3. Downstream Processing:</b> Post-fermentation recovery, cell disruption, chromatographic purification, formulation with preservatives, and clinical safety trials.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Describe Genetically Engineered Human Insulin (Humulin): Proinsulin structure vs Mature insulin, and Eli Lilly's technology.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Proinsulin vs Insulin:</b> Proinsulin contains A-chain (21 aa), B-chain (30 aa), and C-peptide (33 aa). Active mature insulin lacks C-peptide; A and B chains are connected by two inter-chain disulfide bonds.<br/><br/><b style="color: #00B0FF;">2. Eli Lilly's Breakthrough (1983):</b><br/>&bull; Chemically synthesized cDNAs for human A and B chains.<br/>&bull; Cloned each cDNA separately into <i>pBR322</i> plasmids adjacent to &beta;-galactosidase promoter in <i>E. coli</i>.<br/>&bull; Expressed and purified A and B chains separately.<br/>&bull; Chemically joined A and B chains in vitro by establishing disulfide bonds.<br/><br/><b style="color: #00B0FF;">3. Benefit:</b> Eliminated allergic reactions caused by slaughtered animal insulin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Explain Gene Therapy: First clinical application for ADA Deficiency, Retroviral transduction, and Permanent Cure strategies.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Concept:</b> Curing hereditary diseases by inserting normal genes into defective cells.<br/><br/><b style="color: #00B0FF;">2. 1990 ADA Trial (W. French Anderson):</b> 4-year-old girl with SCID lacking Adenosine Deaminase. Lymphocytes collected &rarr; transduced with functional ADA cDNA via disarmed retroviral vector &rarr; reinfused into patient.<br/><br/><b style="color: #00B0FF;">3. Limitation:</b> Lymphocytes die; patient requires periodic lifetime transfusions.<br/><br/><b style="color: #00B0FF;">4. Permanent Cure:</b> Isolating bone marrow hematopoietic stem cells and transducing them with functional ADA gene during early embryonic development.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Discuss Stem Cell Technology: Cell types based on potency, Sources, and Applications in Regenerative Medicine.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Stem Cell Potency:</b><br/>&bull; <i>Totipotent:</i> Zygote and morula blastomeres.<br/>&bull; <i>Pluripotent:</i> Inner Cell Mass (ICM) of blastocysts.<br/>&bull; <i>Multipotent:</i> Adult hematopoietic bone marrow cells.<br/><br/><b style="color: #00B0FF;">2. Therapeutic Applications:</b><br/>&bull; Regeneration of heart muscle after myocardial infarction.<br/>&bull; Neural stem cell replacement for Parkinson's and Alzheimer's.<br/>&bull; Bone marrow transplantation for leukemias.<br/>&bull; Treatment of Type 1 diabetes with lab-grown pancreatic &beta;-islet cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Describe Transgenic Animals: Five major scientific reasons for creation with classic examples (Rosie, &alpha;-1-antitrypsin).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Normal Physiology:</b> Studying gene regulation and growth factors.<br/><b style="color: #00B0FF;">2. Disease Models:</b> Transgenic mice models for Cancer, Cystic Fibrosis, Alzheimer's.<br/><b style="color: #00B0FF;">3. Biological Products:</b><br/>&bull; Human &alpha;-1-antitrypsin for Emphysema.<br/>&bull; <b style="color: #00B0FF;">Rosie Cow (1997):</b> Milk with human &alpha;-lactalbumin (2.4 g/L) for infants.<br/><b style="color: #00B0FF;">4. Vaccine Testing:</b> Transgenic mice replace monkeys for polio vaccine batch testing.<br/><b style="color: #00B0FF;">5. Toxicity Testing:</b> Transgenic animals engineered with hypersensitivity for rapid chemical screening.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Discuss Bio-safety, Bioethics, and the Regulatory Role of GEAC in Indian Biotechnology.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Biosafety Concerns:</b> Ecological disruption (superweeds, horizontal transgene escape), allergenicity, and toxicity in GM food.<br/><br/><b style="color: #00B0FF;">2. GEAC Authority:</b> Apex committee under MoEFCC responsible for approving GM research proposals and regulating commercial environmental release of GMOs.<br/><br/><b style="color: #00B0FF;">3. Bioethics:</b> Establishing ethical boundaries regarding human germline gene editing, cloning, and commercial animal exploitation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Explain Biopiracy with detailed case studies of Basmati Rice, Neem, and Turmeric, and describe Indian patent protections.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Definition:</b> Exploitation of indigenous bioresources without authorization or benefit-sharing.<br/><br/><b style="color: #00B0FF;">2. Basmati Rice:</b> US company RiceTec granted patent in 1997; India contested using historical records, forcing revocation.<br/><br/><b style="color: #00B0FF;">3. Neem &amp; Turmeric:</b> Patents on wound healing (turmeric) and antifungal use (neem) revoked after CSIR submitted Ayurvedic prior art.<br/><br/><b style="color: #00B0FF;">4. Indian Countermeasures:</b> Traditional Knowledge Digital Library (TKDL) and Indian Patent Act amendments.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Construct a comprehensive comparative matrix between Recombinant Insulin (Humulin) and Slaughtered Animal Insulin.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Source:</b> Humulin from transgenic <i>E. coli</i>; Animal insulin from bovine/porcine pancreas.<br/><b style="color: #00B0FF;">2. Immunogenicity:</b> Humulin has zero allergic reactions; Animal insulin provoked severe immune hypersensitivity.<br/><b style="color: #00B0FF;">3. Purity:</b> Humulin is 100% pure human sequence; Animal insulin contained animal protein contaminants.<br/><b style="color: #00B0FF;">4. Ethics &amp; Scale:</b> Humulin avoids animal slaughter and has limitless industrial scalability.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Describe the construction of the First Recombinant DNA Molecule by Stanley Cohen and Herbert Boyer (1972).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Discovery:</b> Cohen and Boyer isolated an antibiotic resistance gene from a plasmid of <i>Salmonella typhimurium</i>.<br/><b style="color: #00B0FF;">2. Cleavage &amp; Ligation:</b> Cleaved plasmid with restriction enzyme and spliced resistance gene using DNA ligase into a vector plasmid.<br/><b style="color: #00B0FF;">3. Transformation:</b> Transferred recombinant plasmid into <i>E. coli</i>, which replicated and expressed antibiotic resistance, marking the birth of genetic engineering.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain Insertional Inactivation vs Antibiotic Selection in identifying Recombinant Plasmids.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Antibiotic Selection:</b> Replica plating on ampicillin and tetracycline plates; cells with insertion in tet<sup>R</sup> grow on ampicillin but die on tetracycline. Slow and cumbersome.<br/><br/><b style="color: #00B0FF;">2. Blue-White Screening (Insertional Inactivation):</b> Foreign DNA inserted into lacZ gene; recombinants cannot cleave X-gal and form white colonies directly on primary plates without replica plating, saving time and labor.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Describe the methodology and clinical applications of DNA Vaccines.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Principle:</b> Direct injection of genetically engineered plasmid DNA encoding a protective viral antigen into muscle tissue. Host cells take up plasmid, synthesize antigen, and display it to immune cells.<br/><br/><b style="color: #00B0FF;">2. Advantages:</b> Stimulates both humoral and cell-mediated immunity; highly stable at room temperature; no risk of reversion to virulence.<br/><br/><b style="color: #00B0FF;">3. Examples:</b> DNA vaccines against COVID-19 (ZyCoV-D), rabies, and influenza.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain Downstream Processing in Industrial Biotechnology with a flowchart.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Separation:</b> Filtration or centrifugation to remove microbial biomass.<br/><b style="color: #00B0FF;">2. Cell Disruption:</b> Homogenization or sonication for intracellular products.<br/><b style="color: #00B0FF;">3. Purification:</b> Fractional precipitation and multi-step column chromatography.<br/><b style="color: #00B0FF;">4. Formulation:</b> Addition of chemical stabilizers and preservatives.<br/><b style="color: #00B0FF;">5. Quality Testing:</b> Sterility testing, potency assays, and clinical trials.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Detail the production of Recombinant Hepatitis B Vaccine in Transgenic Yeast.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Cloning:</b> Gene encoding Hepatitis B surface antigen (HBsAg) isolated and cloned into an expression vector.<br/><b style="color: #00B0FF;">2. Host Expression:</b> Vector transformed into baker's yeast (<i>Saccharomyces cerevisiae</i>); cultured in bioreactors.<br/><b style="color: #00B0FF;">3. Harvesting:</b> Yeast cells express HBsAg, which self-assembles into virus-like particles (VLPs). Purified VLPs serve as a potent, non-infectious subunit vaccine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Discuss the ethical and ecological concerns regarding Genetically Modified Animals.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Ethical Concerns:</b> Inflicting physical pain and deformities on transgenic animals; violating species integrity; treating sentient organisms as industrial manufacturing units.<br/><br/><b style="color: #00B0FF;">2. Ecological Concerns:</b> Accidental release of transgenic animals (e.g., fast-growing GM salmon) into natural waters, outcompeting wild species and collapsing aquatic ecosystems.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Explain the concept and significance of Patenting Life Forms (Microorganisms and GMOs).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Historical Landmark:</b> In 1980, the US Supreme Court allowed the patenting of a genetically modified bacterium (<i>Pseudomonas putida</i> engineered by Ananda Chakrabarty for oil spill degradation).<br/><br/><b style="color: #00B0FF;">2. Criteria:</b> Invention must be novel, non-obvious, and have demonstrated industrial utility.<br/><br/><b style="color: #00B0FF;">3. Controversy:</b> Patenting naturally occurring gene sequences and native germplasm leads to corporate biopiracy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Describe the mechanism of Vectorless Gene Transfer methods: Electroporation and Chemical Transfection.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Electroporation:</b> Exposure of host cells to brief high-voltage electrical pulses, creating transient nanometer-sized pores in the plasma membrane through which recombinant DNA enters.<br/><br/><b style="color: #00B0FF;">2. Chemical Transfection (Lipofection):</b> Encapsulating recombinant DNA in artificial cationic lipid vesicles (liposomes) that fuse with the host plasma membrane, releasing DNA into cytoplasm.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00B0FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct a Master Flowchart and Summary Matrix integrating Recombinant DNA Technology, Medical Applications, Transgenic Models, and Biosafety.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00B0FF;">1. Principles &amp; Tools:</b> Restriction enzymes, Ligase, <i>pBR322</i>, Hosts, PCR (Taq polymerase) &rarr; Bioreactors &rarr; Downstream processing.<br/><b style="color: #00B0FF;">2. Medical Biotech:</b> Humulin (Eli Lilly A+B chains), ADA Gene Therapy (Retrovirus, SCID), Stem cells (Pluripotent ICM), Recombinant Hepatitis B vaccine.<br/><b style="color: #00B0FF;">3. Transgenic Animals:</b> Rosie Cow (&alpha;-lactalbumin), &alpha;-1-antitrypsin (Emphysema), Polio testing in mice.<br/><b style="color: #00B0FF;">4. Biosafety &amp; Ethics:</b> GEAC regulation, Patent laws, Biopiracy (Basmati, Neem, Turmeric).
    </div>
  </div>

</div>
`;

export const c12Zoo4Mcqs = [
  {
    "id": "c12-zoo-4-mcq-1",
    "question": "The restriction endonuclease enzyme <i>EcoRI</i> cleaves duplex DNA at which specific palindromic sequence?",
    "options": [
      "A):   5'\-AAGCTT-3'",
      "B):   5'\-GAATTC-3'",
      "C):   5'\-GGATCC-3'",
      "D):   5'\-CTGCAG-3'"
    ],
    "correctAnswer": "b",
    "explanation": "<i>EcoRI</i> recognizes the 6 bp palindrome 5'\-GAATTC-3' and cuts between G and A, generating cohesive sticky ends."
  },
  {
    "id": "c12-zoo-4-mcq-2",
    "question": "In the cloning vector <i>pBR322</i>, insertional inactivation of the <i>BamHI</i> site disrupts resistance to which antibiotic?",
    "options": [
      "A):   Ampicillin",
      "B):   Tetracycline",
      "C):   Kanamycin",
      "D):   Chloramphenicol"
    ],
    "correctAnswer": "b",
    "explanation": "The <i>BamHI</i> recognition site is situated inside the tetracycline resistance gene (tet<sup>R</sup>); inserting foreign DNA here inactivates tetracycline resistance."
  },
  {
    "id": "c12-zoo-4-mcq-3",
    "question": "In Blue-White screening of recombinant plasmids, recombinant colonies appear white because of insertional inactivation of:",
    "options": [
      "A):   The <i>ori</i> sequence",
      "B):   \&beta;-galactosidase gene (<i>lacZ</i>)",
      "C):   Ampicillin resistance gene",
      "D):   DNA ligase gene"
    ],
    "correctAnswer": "b",
    "explanation": "Insertion of foreign DNA into the <i>lacZ</i> gene prevents synthesis of functional \&beta;-galactosidase, so colonies cannot cleave X-gal and remain white."
  },
  {
    "id": "c12-zoo-4-mcq-4",
    "question": "Taq Polymerase used in PCR is isolated from which thermophilic bacterium?",
    "options": [
      "A):   <i>Bacillus thuringiensis</i>",
      "B):   <i>Thermus aquaticus</i>",
      "C):   <i>Escherichia coli</i>",
      "D):   <i>Agrobacterium tumefaciens</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Taq Polymerase is extracted from <i>Thermus aquaticus</i>, a thermophilic bacterium that thrives in hot springs."
  },
  {
    "id": "c12-zoo-4-mcq-5",
    "question": "In a PCR thermal cycle, the step where oligonucleotide primers bind to single-stranded DNA at 50–60°C is termed:",
    "options": [
      "A):   Denaturation",
      "B):   Annealing",
      "C):   Extension",
      "D):   Elution"
    ],
    "correctAnswer": "b",
    "explanation": "Annealing occurs at 50–60°C, allowing forward and reverse primers to hybridize with complementary sequences on template DNA."
  },
  {
    "id": "c12-zoo-4-mcq-6",
    "question": "During DNA isolation, what is added to precipitate purified genomic DNA as fine spooled threads?",
    "options": [
      "A):   Ethidium bromide",
      "B):   Ice-cold ethanol",
      "C):   Chloroform",
      "D):   Sulfuric acid"
    ],
    "correctAnswer": "b",
    "explanation": "Addition of chilled/ice-cold ethanol reduces the dielectric constant of the solution, causing pure DNA to precipitate out (spooling)."
  },
  {
    "id": "c12-zoo-4-mcq-7",
    "question": "The method of vectorless gene transfer where plant cells are bombarded with DNA-coated gold or tungsten particles is called:",
    "options": [
      "A):   Micro-injection",
      "B):   Biolistics / Gene Gun",
      "C):   Electroporation",
      "D):   Lipofection"
    ],
    "correctAnswer": "b",
    "explanation": "Biolistics (Gene Gun) shoots microscopic gold or tungsten micro-projectiles coated with recombinant DNA into plant cells."
  },
  {
    "id": "c12-zoo-4-mcq-8",
    "question": "Mature active human insulin differs structurally from proinsulin in that mature insulin:",
    "options": [
      "A):   Contains an extra C-peptide",
      "B):   Lacks the C-peptide",
      "C):   Has only one polypeptide chain",
      "D):   Lacks disulfide bonds"
    ],
    "correctAnswer": "b",
    "explanation": "Proinsulin contains an extra 33-amino acid C-peptide that is cleaved off during maturation to yield active insulin (A + B chains)."
  },
  {
    "id": "c12-zoo-4-mcq-9",
    "question": "How did Eli Lilly commercially produce human insulin (Humulin) in 1983?",
    "options": [
      "A):   Extracted from slaughterhouse pigs",
      "B):   Synthesized A and B chains separately in <i>E. coli</i> and joined them via disulfide bonds",
      "C):   Expressed whole proinsulin in human bone marrow",
      "D):   Extracted from transgenic sheep milk"
    ],
    "correctAnswer": "b",
    "explanation": "Eli Lilly produced A and B chains separately in transgenic <i>E. coli</i> and linked them chemically in vitro with disulfide bonds."
  },
  {
    "id": "c12-zoo-4-mcq-10",
    "question": "The first clinical gene therapy was conducted in 1990 on a 4-year-old girl to treat:",
    "options": [
      "A):   Cystic Fibrosis",
      "B):   Adenosine Deaminase (ADA) deficiency",
      "C):   Phenylketonuria",
      "D):   Thalassemia"
    ],
    "correctAnswer": "b",
    "explanation": "W. French Anderson administered gene therapy to a patient suffering from ADA-deficient Severe Combined Immunodeficiency (SCID)."
  },
  {
    "id": "c12-zoo-4-mcq-11",
    "question": "Which vector was utilized to deliver functional ADA cDNA into the patient's cultured lymphocytes in 1990?",
    "options": [
      "A):   Bacteriophage lambda",
      "B):   Disarmed Retrovirus",
      "C):   <i>Ti</i> plasmid",
      "D):   <i>pBR322</i>"
    ],
    "correctAnswer": "b",
    "explanation": "A disarmed retroviral vector was used to deliver functional human ADA cDNA into cultured patient lymphocytes."
  },
  {
    "id": "c12-zoo-4-mcq-12",
    "question": "Stem cells derived from the Inner Cell Mass (ICM) of a human blastocyst are:",
    "options": [
      "A):   Unipotent",
      "B):   Pluripotent",
      "C):   Oligopotent",
      "D):   Non-dividing"
    ],
    "correctAnswer": "b",
    "explanation": "Embryonic stem cells in the inner cell mass are pluripotent, capable of differentiating into all cell types of the three germ layers."
  },
  {
    "id": "c12-zoo-4-mcq-13",
    "question": "What percentage of all existing transgenic laboratory animals are transgenic mice?",
    "options": [
      "A):   50\%",
      "B):   75\%",
      "C):   Over 95\%",
      "D):   20\%"
    ],
    "correctAnswer": "c",
    "explanation": "Over 95% of all transgenic animals created for biomedical research are transgenic mice."
  },
  {
    "id": "c12-zoo-4-mcq-14",
    "question": "The biological human protein \&alpha;-1-antitrypsin produced in transgenic animals is used for the treatment of:",
    "options": [
      "A):   Cancer",
      "B):   Emphysema",
      "C):   Diabetes",
      "D):   SCID"
    ],
    "correctAnswer": "b",
    "explanation": "Human \&alpha;-1-antitrypsin is a protease inhibitor produced in transgenic animals to treat pulmonary emphysema."
  },
  {
    "id": "c12-zoo-4-mcq-15",
    "question": "Rosie, the first transgenic cow produced in 1997, produced milk enriched with which human protein?",
    "options": [
      "A):   Human Insulin",
      "B):   Human \&alpha;-lactalbumin (2.4\ g/L)",
      "C):   Human growth hormone",
      "D):   Hemoglobin"
    ],
    "correctAnswer": "b",
    "explanation": "Rosie's milk contained 2.4 grams per liter of human \&alpha;-lactalbumin, making it nutritionally superior for infants."
  },
  {
    "id": "c12-zoo-4-mcq-16",
    "question": "Transgenic mice have successfully replaced which animals for the batch testing of Polio vaccine safety?",
    "options": [
      "A):   Horses",
      "B):   Monkeys (Primates)",
      "C):   Dogs",
      "D):   Pigs"
    ],
    "correctAnswer": "b",
    "explanation": "Transgenic mice expressing human poliovirus receptors replaced monkeys for batch testing of polio vaccine safety."
  },
  {
    "id": "c12-zoo-4-mcq-17",
    "question": "In India, the apex statutory committee responsible for approving the safety and environmental release of GMOs is:",
    "options": [
      "A):   ICMR",
      "B):   GEAC (Genetic Engineering Appraisal Committee)",
      "C):   CSIR",
      "D):   Ministry of Health"
    ],
    "correctAnswer": "b",
    "explanation": "GEAC under MoEFCC regulates and evaluates the environmental and commercial safety of GMOs in India."
  },
  {
    "id": "c12-zoo-4-mcq-18",
    "question": "In 1997, an American company (RiceTec) was controversially granted a US patent on which Indian crop?",
    "options": [
      "A):   Golden Rice",
      "B):   Basmati Rice",
      "C):   Sharbati Sonora Wheat",
      "D):   Bt Cotton"
    ],
    "correctAnswer": "b",
    "explanation": "RiceTec obtained a patent on Basmati rice lines, which was revoked after India proved indigenous prior art."
  },
  {
    "id": "c12-zoo-4-mcq-19",
    "question": "The use of biological resources by multinational companies without proper authorization or compensation is termed:",
    "options": [
      "A):   Bioremediation",
      "B):   Biopiracy",
      "C):   Biofortification",
      "D):   Biosensing"
    ],
    "correctAnswer": "b",
    "explanation": "Biopiracy refers to the unauthorized commercial exploitation of indigenous biological resources and traditional knowledge."
  },
  {
    "id": "c12-zoo-4-mcq-20",
    "question": "Which enzyme is used to lyse the cell wall of fungi to isolate pure genomic DNA?",
    "options": [
      "A):   Lysozyme",
      "B):   Cellulase",
      "C):   Chitinase",
      "D):   Ribonuclease"
    ],
    "correctAnswer": "c",
    "explanation": "Chitinase hydrolyzes the chitin-rich cell wall of fungal hyphae to liberate intracellular contents."
  },
  {
    "id": "c12-zoo-4-mcq-21",
    "question": "In agarose gel electrophoresis, DNA fragments migrate toward the positive electrode because DNA is:",
    "options": [
      "A):   Positively charged due to histone basic proteins",
      "B):   Negatively charged due to phosphate groups",
      "C):   Neutral and hydrophobic",
      "D):   Zwitterionic"
    ],
    "correctAnswer": "b",
    "explanation": "DNA carries a net negative charge due to its sugar-phosphate backbone, so it migrates toward the positive anode."
  },
  {
    "id": "c12-zoo-4-mcq-22",
    "question": "Recombinant Hepatitis B vaccine is commercially produced by culturing transgenic cells of:",
    "options": [
      "A):   <i>Escherichia coli</i>",
      "B):   Yeast (<i>Saccharomyces cerevisiae</i>)",
      "C):   <i>Thermus aquaticus</i>",
      "D):   Transgenic sheep"
    ],
    "correctAnswer": "b",
    "explanation": "The Hepatitis B surface antigen (HBsAg) subunit vaccine is produced by recombinant baker's yeast."
  },
  {
    "id": "c12-zoo-4-mcq-23",
    "question": "In an agitated stirred-tank bioreactor, the primary function of the curved base and impeller is to:",
    "options": [
      "A):   Prevent light from entering",
      "B):   Facilitate thorough mixing and oxygen availability without dead corners",
      "C):   Cool down the broth by radiation",
      "D):   Filter out dead cells automatically"
    ],
    "correctAnswer": "b",
    "explanation": "The curved base and motor-driven impeller ensure uniform mixing and oxygen dispersion throughout the vessel."
  },
  {
    "id": "c12-zoo-4-mcq-24",
    "question": "The first recombinant DNA molecule was constructed in 1972 by Stanley Cohen and Herbert Boyer by splicing a gene from:",
    "options": [
      "A):   <i>Salmonella typhimurium</i>",
      "B):   <i>Bacillus subtilis</i>",
      "C):   <i>Drosophila melanogaster</i>",
      "D):   <i>Homo sapiens</i>"
    ],
    "correctAnswer": "a",
    "explanation": "Cohen and Boyer isolated an antibiotic resistance plasmid from <i>Salmonella typhimurium</i> and cloned it into <i>E. coli</i>."
  },
  {
    "id": "c12-zoo-4-mcq-25",
    "question": "In PCR, if a double-stranded DNA molecule is amplified through 30 thermal cycles, the number of copies generated is approximately:",
    "options": [
      "A):   30 copies",
      "B):   60 copies",
      "C):   Over 1 billion copies (2<sup>30</sup>)",
      "D):   10,000 copies"
    ],
    "correctAnswer": "c",
    "explanation": "Because amplification is exponential (2<sup>n</sup>), 30 cycles of PCR generate 2<sup>30</sup> \approx 1.07 \ &times;  10<sup>9</sup> (over 1 billion) copies."
  }
];
