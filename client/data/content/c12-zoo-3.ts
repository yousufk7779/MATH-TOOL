// Class 12 Zoology Chapter 3: Biology in Human Welfare (Health & Disease, Immunology, Pathogens, Cancer, AIDS, Drug Abuse)
// Gold Standard Reference Textbook & 3-Tab Architecture
// Subject: Zoology | Class: 12 | Code: c12-zoo-3

export const c12Zoo3HtmlOverview = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.12), rgba(194, 24, 91, 0.12)); border: 1.5px solid rgba(255, 0, 127, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 12px 0; font-size: 17.5px; font-weight: bold; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📖</span> Quick Glossary &amp; Immunological Terms
    </h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Innate Immunity:</b> Non-specific defense mechanism present from birth, comprising physical, physiological, cellular, and cytokine barriers.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Interferons:</b> Glycoproteins secreted by virus-infected cells that protect neighboring uninfected cells from viral replication (cytokine barrier).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Metastasis:</b> The most dreaded malignant property of cancer cells wherein neoplastic cells detach from primary tumors and initiate secondary tumors at distant sites.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Haemozoin:</b> Toxic dark brown crystalline byproduct released when malarial parasites rupture erythrocytes, responsible for recurrent chills and fever.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">MALT:</b> Mucosa-Associated Lymphoid Tissue lining major respiratory, digestive, and urogenital tracts, constituting ~50% of lymphoid tissue in the human body.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #FF007F;">Withdrawal Syndrome:</b> A set of unpleasant physical and psychological symptoms (shakiness, anxiety, sweating, nausea) occurring upon sudden cessation of regular drug or alcohol intake.
      </div>
    </div>
  </div>

  <!-- SECTION 1: BASIC CONCEPTS OF IMMUNOLOGY -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    1. Basic Concepts of Immunology: Innate, Acquired, Vaccines &amp; Disorders
  </h2>
  <p>
    <b>Health</b> is defined by the WHO as a state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity. <b>Immunity</b> is the overall defense mechanism of the host to resist and neutralize pathogenic infections.
  </p>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Innate Immunity (Non-Specific Inborn Defense)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">Physical Barriers:</b> Skin (keratinized stratum corneum acts as an impervious anatomical barrier); Mucus coating of epithelium lining respiratory, gastrointestinal, and urogenital tracts traps microbes.</li>
      <li><b style="color: #FF007F;">Physiological Barriers:</b> Gastric acid (HCl in stomach), lysozyme enzyme in saliva and tears, acidic vaginal pH that inhibit microbial proliferation.</li>
      <li><b style="color: #FF007F;">Cellular Barriers:</b> Leukocytes such as Polymorphonuclear Neutrophils (PMNL), Monocytes, Natural Killer (NK) lymphocytes in blood, and tissue Macrophages that phagocytose and destroy invading pathogens.</li>
      <li><b style="color: #FF007F;">Cytokine Barriers:</b> <b>Interferons</b> produced by virus-infected cells that diffuse to adjacent uninfected cells, stimulating antiviral protein synthesis to block viral replication.</li>
    </ul>
  </div>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) Acquired Immunity (Specific Adaptive Defense)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF007F;">Characteristics:</b> Pathogen-specificity, discrimination between self and non-self, diversity, and <b>Immunological Memory</b>. Primary response is slow and of low intensity; secondary (anamnestic) response is rapid, heightened, and intense.</li>
    <li><b style="color: #FF007F;">Humoral (Antibody-Mediated) Immune Response (AMIR):</b> Mediated by <b>B-lymphocytes</b>, which differentiate into plasma cells that secrete circulating antibody proteins into blood and lymph.</li>
    <li><b style="color: #FF007F;">Cell-Mediated Immunity (CMI):</b> Mediated by <b>T-lymphocytes</b> (T_H helper cells, T_C cytotoxic cells). CMI is responsible for destroying intracellular pathogens and mediating <b>Graft Rejection</b> in organ transplantation. Immunosuppressants (e.g., Cyclosporin A) are mandatory for transplant recipients.</li>
    <li><b style="color: #FF007F;">Structure of an Antibody (H_2L_2):</b> A Y-shaped glycoprotein composed of four polypeptide chains held together by disulfide bonds: two identical long <b>Heavy (H) chains</b> and two identical short <b>Light (L) chains</b>. Each arm bears an antigen-binding site (Fab fragment) exhibiting variable amino acid sequences. Five immunoglobulin classes exist: <b>IgG</b> (most abundant, crosses placenta), <b>IgA</b> (secretory, in colostrum/saliva), <b>IgM</b> (pentameric, first produced in primary response), <b>IgE</b> (mediates allergic reactions), and <b>IgD</b>.</li>
    <li><b style="color: #FF007F;">Active vs. Passive Immunity:</b>
      <br/>&bull; <i>Active Immunity:</i> Host produces antibodies in response to live or attenuated antigen; slow but long-lasting with memory (e.g., natural infection or vaccination).
      <br/>&bull; <i>Passive Immunity:</i> Preformed readymade antibodies administered directly into body; provides immediate fast protection but temporary without memory (e.g., Colostrum IgA to newborn, Anti-tetanus serum, Anti-venom).
    </li>
  </ul>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(iii) Allergies &amp; Autoimmunity</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF007F;">Allergies:</b> Exaggerated hypersensitivity immune response to non-toxic environmental antigens called <b>Allergens</b> (pollen, dust mites, animal dander). Mediated by <b>IgE antibodies</b>. Allergens bind IgE on the surface of <b>Mast Cells</b>, triggering rapid release of inflammatory chemicals like <b>Histamine and Serotonin</b>. Symptoms include sneezing, watery eyes, runny nose, and wheezing. Controlled with antihistamines, adrenaline, and corticosteroids.</li>
    <li><b style="color: #FF007F;">Autoimmunity:</b> Failure of immunological self-tolerance wherein the immune system generates autoantibodies against body cells and tissues, causing chronic destruction. Classic examples include <b>Rheumatoid Arthritis</b> (autoimmune attack on synovial joints), <b>Myasthenia Gravis</b>, and <b>Type 1 Diabetes</b>.</li>
  </ul>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(iv) Lymphoid Organs</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #FF007F; margin: 0 0 8px 0; font-size: 15.5px;">🏛️ Primary Lymphoid Organs</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Sites where immature lymphocytes differentiate into antigen-sensitive cells:
        <br/>&bull; <b style="color: #FF007F;">Bone Marrow:</b> Primary hematopoietic organ where all blood cells, including B- and T-lymphocytes, are produced, and B-cells mature.
        <br/>&bull; <b style="color: #FF007F;">Thymus:</b> Lobed organ near heart where T-lymphocytes mature and undergo thymic education; atrophies with age.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 16px;">
      <h4 style="color: #FF007F; margin: 0 0 8px 0; font-size: 15.5px;">🛡️ Secondary Lymphoid Organs</h4>
      <p style="margin: 0; font-size: 14px; line-height: 1.6;">
        Sites where mature lymphocytes encounter antigens and proliferate:
        <br/>&bull; <b style="color: #FF007F;">Spleen:</b> Filters blood-borne pathogens, erythrocyte graveyard.
        <br/>&bull; <b style="color: #FF007F;">Lymph Nodes:</b> Trap microorganisms from lymph fluid.
        <br/>&bull; <b style="color: #FF007F;">Tonsils &amp; Peyer's Patches:</b> Gut immunity.
        <br/>&bull; <b style="color: #FF007F;">MALT:</b> Mucosa-Associated Lymphoid Tissue accounts for <b>~50% of total lymphoid tissue</b>.
      </p>
    </div>
  </div>

  <!-- SECTION 2: HUMAN PATHOGENS & DISEASES -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    2. Pathogens &amp; Common Human Infectious Diseases
  </h2>

  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ol style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">1. Typhoid:</b> Pathogen: <i>Salmonella typhi</i> (bacterium). Transmission: Ingestion of contaminated food and drinking water. Symptoms: Sustained high fever (39-40&deg;C), weakness, abdominal pain, constipation, loss of appetite, headache; intestinal ulceration and perforation in severe cases. Confirmatory test: <b>Widal Test</b>. Classic carrier: Mary Mallon ("Typhoid Mary").</li>
      <li><b style="color: #FF007F;">2. Pneumonia:</b> Pathogen: <i>Streptococcus pneumoniae</i> and <i>Haemophilus influenzae</i> (bacteria). Transmission: Inhaling aerosol droplets released by infected person. Symptoms: Alveoli get filled with inflammatory fluid, causing severe respiratory distress, fever, chills, cough; fingernails/lips turn grey to bluish in severe hypoxia.</li>
      <li><b style="color: #FF007F;">3. Common Cold:</b> Pathogen: <i>Rhino viruses</i>. Transmission: Aerosols from cough/sneeze or contaminated objects. Symptoms: Nasal congestion, profuse discharge, sore throat, cough, headache, hoarseness lasting 3–7 days. <i>Crucial:</i> Infects nose and upper airway, <b>never infects lungs</b>.</li>
      <li><b style="color: #FF007F;">4. Malaria:</b> Pathogen: <i>Plasmodium</i> protozoans (<i>P. vivax, P. malariae, P. falciparum</i> - malignant fatal malaria). Vector: Female <i>Anopheles</i> mosquito.
        <br/>&bull; <i>Life Cycle:</i> Sporozoites injected by mosquito enter human blood &rarr; liver cells (asexual schizogony) &rarr; infect RBCs &rarr; RBC lysis releases toxic <b>Haemozoin</b> crystals causing recurring fever and chills every 3–4 days &rarr; gametocytes formed in human RBCs &rarr; sucked up by mosquito &rarr; fertilization in mosquito stomach &rarr; sporozoites migrate to salivary glands. Control: Biological control using larvivorous <i>Gambusia</i> fish, insecticide spraying.
      </li>
      <li><b style="color: #FF007F;">5. Amoebiasis (Amoebic Dysentery):</b> Pathogen: <i>Entamoeba histolytica</i> (protozoan). Transmission: Houseflies act as mechanical carriers contaminating drinking water/food with fecal cysts. Symptoms: Constipation alternating with loose stools containing excessive mucus and blood clots, abdominal cramps.</li>
      <li><b style="color: #FF007F;">6. Ascariasis:</b> Pathogen: <i>Ascaris lumbricoides</i> (giant intestinal roundworm nematode). Transmission: Ingesting water, unwashed vegetables, fruits contaminated with fecal eggs. Symptoms: Internal hemorrhage, abdominal pain, muscular fatigue, fever, anemia, intestinal blockage.</li>
      <li><b style="color: #FF007F;">7. Filariasis / Elephantiasis:</b> Pathogen: Filarial worms <i>Wuchereria bancrofti</i> and <i>Wuchereria malayi</i>. Vector: Female <i>Culex</i> mosquito. Symptoms: Chronic inflammation and severe deformation of the lymphatic vessels of the lower extremities and external genital organs.</li>
      <li><b style="color: #FF007F;">8. Ringworm:</b> Pathogens: Fungi of genera <i>Microsporum</i>, <i>Trichophyton</i>, and <i>Epidermophyton</i>. Transmission: Contact with infected towels, clothing, combs, or soil. Symptoms: Dry, scaly, circular lesions with intense itching on skin, scalp, and nails; warm moisture accelerates fungal growth in groin and skin folds.</li>
      <li><b style="color: #FF007F;">9. Dengue Fever:</b> Pathogen: Dengue virus (Flavivirus). Vector: Female <i>Aedes aegypti</i> mosquito. Symptoms: High fever, excruciating headache, retro-orbital pain, severe joint and muscle pain ("breakbone fever"), thrombocytopenia (steep drop in blood platelet count).</li>
      <li><b style="color: #FF007F;">10. Hepatitis:</b> Pathogen: Hepatitis viruses (Hepatitis A, B, C). Hepatitis B is an enveloped DNA virus spread by blood transfusion, unsterile syringes, and sexual contact. Causes acute liver inflammation, jaundice, liver cirrhosis, and hepatocellular carcinoma. Recombinant vaccine produced in yeast.</li>
    </ol>
  </div>

  <!-- SECTION 3: CANCER & HIV/AIDS -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    3. Cancer &amp; HIV/AIDS
  </h2>

  <h3 style="color: #FF007F; margin-top: 18px; font-size: 16.5px;">(i) Cancer Biology: Characteristics, Carcinogens &amp; Therapies</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF007F;">Hallmarks of Cancer Cells:</b> Loss of <b>Contact Inhibition</b> (normal cells stop dividing upon contacting neighboring cells, whereas cancer cells divide uncontrolled to form tumors).</li>
    <li><b style="color: #FF007F;">Tumor Classification:</b>
      <br/>&bull; <i>Benign Tumors:</i> Remain confined to original anatomical site; do not spread; cause minor damage.
      <br/>&bull; <i>Malignant Tumors:</i> Invasive neoplastic mass displaying rapid proliferation and infiltration into surrounding tissues. Neoplastic cells enter blood/lymph vessels and migrate to distant organs, initiating secondary tumors (<b>Metastasis</b>, the defining pathological feature of cancer).
    </li>
    <li><b style="color: #FF007F;">Carcinogens (Cancer-Inducing Agents):</b>
      <br/>&bull; <i>Physical:</i> Ionizing radiation (X-rays, gamma rays) and non-ionizing radiation (UV-B rays causing thymine dimers).
      <br/>&bull; <i>Chemical:</i> Chemical mutagens, notably chemical carcinogens in tobacco smoke causing lung cancer.
      <br/>&bull; <i>Biological:</i> Oncogenic viruses possessing viral oncogenes (v-onc); activation of cellular proto-oncogenes (c-onc) into active oncogenes.
    </li>
    <li><b style="color: #FF007F;">Diagnosis:</b> Biopsy &amp; histopathology, bone marrow aspiration (leukemia), X-rays, Computed Tomography (CT), Magnetic Resonance Imaging (MRI), and monoclonal antibody probes.</li>
    <li><b style="color: #FF007F;">Treatment:</b> Surgical excision, targeted Radiotherapy, Chemotherapy (e.g., Vincristine, Vinblastine - side effects include alopecia and anemia), and Immunotherapy with biological response modifiers like <b>&alpha;-interferon</b> to stimulate immune-mediated tumor destruction.</li>
  </ul>

  <h3 style="color: #FF007F; margin-top: 22px; font-size: 16.5px;">(ii) HIV &amp; AIDS</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF007F;">Etiology:</b> AIDS is caused by the <b>Human Immunodeficiency Virus (HIV)</b>, an enveloped retrovirus enclosing two identical single-stranded RNA genomes and reverse transcriptase enzymes.</li>
    <li><b style="color: #FF007F;">Transmission Routes:</b> Sexual contact with infected person, contaminated blood transfusions, sharing unsterilized hypodermic needles, and trans-placental transmission from mother to fetus. Not spread by mere touch or aerosol contact.</li>
    <li><b style="color: #FF007F;">Replication Cycle &amp; Pathology:</b>
      <br/>1. HIV enters <b>Macrophages</b> (acting as "HIV factories") &rarr; viral RNA reverse-transcribes into viral DNA via reverse transcriptase &rarr; viral DNA integrates into host genome &rarr; produces new viral particles.
      <br/>2. Concurrently, HIV attacks <b>Helper T-lymphocytes (T_H / CD_4<sup>+</sup> cells)</b>, replicates and lyses them, leading to progressive depletion of CD_4<sup>+</sup> count.
      <br/>3. When CD_4<sup>+</sup> count drops critically (<200 cells/muL), the patient develops bouts of opportunistic infections (<i>Mycobacterium tuberculosis</i>, <i>Toxoplasma</i>, cytomegalovirus, fungi).
    </li>
    <li><b style="color: #FF007F;">Diagnostic Test:</b> <b>ELISA (Enzyme-Linked Immunosorbent Assay)</b> screening test; confirmed by <b>Western Blot test</b>. Treatment with Antiretroviral Therapy (ART) only prolongs survival.</li>
  </ul>

  <!-- SECTION 4: ADOLESCENCE & SUBSTANCE ABUSE -->
  <h2 style="color: #FF007F; border-bottom: 2px solid #FF007F; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    4. Adolescence: Drug and Alcohol Abuse
  </h2>
  <p>
    Adolescence (ages 12–18) is a vulnerable developmental transition characterized by experimentation, peer pressure, stress, and vulnerability to chemical substance abuse.
  </p>

  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 0, 127, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #FF007F;">1. Opioids:</b> Bind specific opioid receptors in the CNS and gastrointestinal tract.
        <br/>&bull; <b style="color: #FF007F;">Heroin (Smack / Diacetylmorphine):</b> White, odorless, bitter crystalline drug produced by acetylation of morphine extracted from the latex of the opium poppy (<i>Papaver somniferum</i>). Administered by snorting or injection; acts as a potent CNS depressant, slowing down respiratory and cardiac function.
      </li>
      <li><b style="color: #FF007F;">2. Cannabinoids:</b> Interact with cannabinoid receptors located principally in the brain. Obtained from the flowering tops, leaves, and resin of the hemp plant (<i>Cannabis sativa</i>). Preparations: <b>Marijuana, Hashish, Charas, Ganja, Bhang</b>. Ingested or inhaled; produce cardiovascular stimulation, altered sensory perception.</li>
      <li><b style="color: #FF007F;">3. Coca Alkaloids / Cocaine (Coke / Crack):</b> Extracted from the South American shrub <i>Erythroxylum coca</i>. Blocks the reuptake of the neurotransmitter <b>Dopamine</b> in the central nervous system. Induces intense euphoria, heightened energy, and alertness; excessive doses trigger paranoid psychosis and hallucinations. Other hallucinogenic plants: <i>Atropa belladonna</i>, <i>Datura</i>, and synthetic <b>LSD</b> (lysergic acid diethylamide from fungus <i>Claviceps purpurea</i>).</li>
      <li><b style="color: #FF007F;">4. Tobacco &amp; Alcohol Abuse:</b>
        <br/>&bull; <i>Tobacco:</i> Contains alkaloid <b>Nicotine</b>, which stimulates adrenal glands to release adrenaline and noradrenaline, elevating blood pressure and heart rate; smoking causes lung, bladder, and throat cancer, coronary heart disease, emphysema, and bronchitis.
        <br/>&bull; <i>Alcohol:</i> Chronic consumption leads to fatty liver, <b>Liver Cirrhosis</b>, cerebellar ataxia, gastrointestinal ulceration, and amnesia.
      </li>
      <li><b style="color: #FF007F;">5. Addiction, Dependence &amp; Prevention:</b>
        <br/>&bull; <i>Addiction:</i> Psychological attachment to euphoria.
        <br/>&bull; <i>Dependence:</i> Body's physiological adaptation manifested by <b>Withdrawal Syndrome</b> (sweating, trembling, nausea, violent anxiety) when substance is withheld.
        <br/>&bull; <i>Prevention &amp; Control:</i> Avoid undue peer pressure, education and counseling, seeking help from parents and peers, identifying warning signs (unexplained drop in academic performance, social isolation, stealing), and professional rehabilitation.
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(74, 4, 38, 0.85)); border: 2px solid #FF007F; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #FF007F; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Zoology Chapter 3: Human Health, Immunology &amp; Pathology Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(255, 0, 127, 0.25); color: #FF007F; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Disease / Substance</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Causative Agent / Source</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Diagnostic Signs / Target Organs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Typhoid:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Salmonella typhi</i> (Bacterium)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Widal test; sustained 39–40&deg;C fever; intestinal perforation</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Pneumonia:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Streptococcus pneumoniae</i></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Fluid in pulmonary alveoli; grey/bluish nails in hypoxia</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Malaria:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Plasmodium falciparum</i> / <i>Anopheles</i></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Haemozoin release; recurring fever-chills every 3–4 days</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Amoebiasis:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Entamoeba histolytica</i> (Protozoan)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Mucous &amp; blood in stools; large intestine lesions</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Filariasis:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Wuchereria bancrofti</i> / <i>Culex</i></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Chronic elephantiasis swelling of lower limb lymphatics</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Ringworm:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Microsporum</i>, <i>Trichophyton</i></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Dry scaly circular itchy lesions on skin and scalp</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">AIDS:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">HIV (Retrovirus)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">ELISA test; progressive destruction of CD4<sup>+</sup> T<sub>H</sub> cells</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Heroin (Smack):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Papaver somniferum</i> (Acetylation)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Diacetylmorphine; binds opioid receptors; CNS depressant</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #FF007F;">Cocaine:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><i>Erythroxylum coca</i></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Blocks Dopamine reuptake; CNS stimulant; euphoria</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;

export const c12Zoo3HtmlSolutions = `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(194, 24, 91, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Definitions, Pathogens, Vectors, Antibodies &amp; Diagnostic Tests</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define Health according to the World Health Organization (WHO).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Health is a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Name the four categories of Innate Immunity barriers.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Physical barriers. 2. Physiological barriers. 3. Cellular barriers. 4. Cytokine barriers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What are Interferons and what is their immunological function?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Interferons are glycoproteins secreted by virus-infected cells that protect uninfected neighboring cells from viral attack.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Which type of immune response is responsible for the rejection of transplanted organs?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cell-Mediated Immunity (CMI) mediated by T-lymphocytes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: What is the molecular formula representing the basic structure of an antibody?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      H<sub>2</sub>L<sub>2</sub> (two heavy chains and two light chains).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: Which antibody class is predominantly present in human Colostrum?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Secretory IgA antibodies.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Which antibody is produced during allergic hypersensitivity reactions?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      IgE antibodies.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: What are the chemical mediators released by mast cells during an allergic attack?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Histamine and Serotonin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Give one clinical example of an autoimmune disorder.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Rheumatoid Arthritis (or Myasthenia Gravis).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: Name the two Primary Lymphoid Organs in humans.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Bone Marrow and Thymus.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: What percentage of total lymphoid tissue in the human body is constituted by MALT?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Approximately 50% of lymphoid tissue.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: What is the principle upon which the concept of Vaccination is based?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The principle of Immunological Memory of the acquired immune system.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: Give an example of a vaccine produced using recombinant DNA technology in yeast.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Hepatitis B vaccine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: Name the causative bacterium of Typhoid fever.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Salmonella typhi</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: Which clinical laboratory test is used to confirm Typhoid?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The Widal Test.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: Who was 'Typhoid Mary'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Mary Mallon, a cook who was an asymptomatic carrier of <i>Salmonella typhi</i> and spread the disease for years.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Name two bacteria that cause bacterial Pneumonia in humans.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Streptococcus pneumoniae</i> and <i>Haemophilus influenzae</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Why does the Common Cold virus not affect the lungs?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because Rhino viruses infect only the nasal mucosa and upper respiratory passage, not the pulmonary alveoli.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Name the toxic chemical released upon the rupture of RBCs responsible for malarial chills and fever.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Haemozoin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: Which species of <i>Plasmodium</i> causes malignant, fatal malaria?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Plasmodium falciparum</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: Which biological control fish is introduced in ponds to feed on mosquito larvae?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Gambusia</i> (Mosquito fish).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: Name the pathogen causing Amoebic Dysentery (Amoebiasis).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Entamoeba histolytica</i> (a protozoan parasite).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: What is the mechanical carrier of <i>Entamoeba histolytica</i>?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The common housefly (<i>Musca domestica</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: Name the pathogen that causes Ascariasis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Ascaris lumbricoides</i> (the common roundworm).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Which mosquito vector transmits Filariasis / Elephantiasis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Female <i>Culex</i> mosquito.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Name two parasitic nematodes that cause Filariasis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Wuchereria bancrofti</i> and <i>Wuchereria malayi</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Name three genera of fungi responsible for causing Ringworm.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Microsporum</i>, <i>Trichophyton</i>, and <i>Epidermophyton</i>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: Which mosquito vector transmits Dengue fever?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Female <i>Aedes aegypti</i> mosquito.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: What is the defining pathological hallmark of malignant cancer cells?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Metastasis (secondary spread of neoplastic cells to distant organs via blood).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What cellular phenomenon is lost in cancer cells?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Contact Inhibition.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: Name two physical carcinogens that cause DNA damage.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      X-rays and Ultraviolet (UV) radiation.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: Which biological response modifier is administered to activate a cancer patient's immune system?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      &alpha;-Interferon.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: Expand the acronyms AIDS, HIV, and ELISA.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      AIDS: Acquired Immuno Deficiency Syndrome; HIV: Human Immunodeficiency Virus; ELISA: Enzyme-Linked Immunosorbent Assay.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: Which specific immune cells are targeted and progressively destroyed by HIV?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Helper T-lymphocytes (T<sub>H</sub> / CD4<sup>+</sup> cells).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Which cells act as the 'HIV factory' in the human body?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Macrophages.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: From which plant and plant part is Morphine / Opium extracted?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      From the dried latex of the unripe seed capsule of the opium poppy (<i>Papaver somniferum</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: What is the chemical name of the street drug 'Smack' or 'Heroin'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Diacetylmorphine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: From which plant are natural Cannabinoids harvested?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <i>Cannabis sativa</i> (the hemp plant).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Cocaine interferes with the reuptake and transport of which neurotransmitter?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Dopamine.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Define Withdrawal Syndrome in drug-dependent individuals.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The manifestation of unpleasant physical and psychological symptoms (anxiety, tremors, sweating, nausea) when regular drug use is abruptly halted.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(194, 24, 91, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Malarial Cycles, Antibodies, Cancer Hallmarks &amp; Drug Actions</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Differentiate between Innate Immunity and Acquired Immunity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Innate Immunity:</b> Inborn non-specific defense present from birth; acts via physical/physiological barriers; no immunological memory. <b style="color: #FF007F;">Acquired Immunity:</b> Pathogen-specific adaptive defense developed after birth; mediated by B and T lymphocytes; possesses high memory and discrimination between self and non-self.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Explain the four barriers of Innate Immunity with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Physical:</b> Skin and mucus coating of tracts. 2. <b style="color: #FF007F;">Physiological:</b> Gastric acid (HCl) and tears/saliva lysozyme. 3. <b style="color: #FF007F;">Cellular:</b> Phagocytic neutrophils (PMNL), monocytes, and tissue macrophages. 4. <b style="color: #FF007F;">Cytokine:</b> Interferons secreted by virus-infected cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Describe the structure of an Antibody molecule with a labeled diagram description.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An antibody molecule has a Y-shaped structure (H_2L_2) consisting of two identical Heavy (H) chains and two identical Light (L) chains joined by inter-chain disulfide bridges. Each arm bears an antigen-binding site (Fab fragment) with hypervariable amino acid sequences, while the stem represents the constant Fc region.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Differentiate between Humoral Immunity and Cell-Mediated Immunity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Humoral Immunity (AMIR):</b> Mediated by B-lymphocytes producing circulating antibodies in blood/lymph; defends against extracellular bacteria and toxins. <b style="color: #FF007F;">Cell-Mediated Immunity (CMI):</b> Mediated by T-lymphocytes; attacks intracellular pathogens (viruses, fungi, parasites) and rejects allografts/transplanted organs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain why tissue matching and immunosuppressive drugs are necessary in organ transplants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cell-Mediated Immunity (CMI) recognizes foreign human leukocyte antigens (HLA) on the donor organ as 'non-self' and attacks it. Strict HLA/blood tissue typing minimizes mismatch, while immunosuppressive drugs (e.g., Cyclosporin A) suppress T-cell activation, preventing graft rejection.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Differentiate between Active and Passive Immunity with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Active Immunity:</b> Host's own immune system manufactures antibodies after encountering live/attenuated antigens (e.g., natural recovery from measles, BCG vaccine); slow onset but long-lasting memory. <b style="color: #FF007F;">Passive Immunity:</b> Direct administration of ready-made preformed antibodies (e.g., Colostrum IgA, Anti-tetanus serum); immediate effect but temporary without memory.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: What is an Allergy? Explain the mechanism of an allergic reaction.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An allergy is an exaggerated IgE-mediated immune hypersensitivity to harmless environmental allergens (pollen, dust mites). Allergens bind to specific IgE antibodies attached to the surface of tissue mast cells, triggering degranulation and release of histamine and serotonin, producing vasodilation, sneezing, and wheezing.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain Autoimmunity with the example of Rheumatoid Arthritis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Autoimmunity occurs when the immune system loses immunological self-tolerance, wrongly recognizing body's own tissues as foreign and launching an attack. In Rheumatoid Arthritis, autoantibodies attack the synovial membranes of joints, causing chronic inflammation, cartilage erosion, and severe pain.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Differentiate between Primary and Secondary Lymphoid Organs with examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Primary Lymphoid Organs:</b> Sites where immature lymphocytes originate and mature into antigen-committed cells (Bone Marrow and Thymus). <b style="color: #FF007F;">Secondary Lymphoid Organs:</b> Sites where mature lymphocytes trap antigens and proliferate into effector cells (Spleen, Lymph nodes, Tonsils, MALT).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain the symptoms and mode of transmission of Typhoid fever.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Pathogen:</b> <i>Salmonella typhi</i> ingested via food/water contaminated with fecal matter. <b style="color: #FF007F;">Symptoms:</b> Sustained high fever (39-40&deg;C), severe weakness, stomach pain, headache, constipation, loss of appetite. In severe untreated cases, intestinal ulceration and perforation lead to death.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: How does Pneumonia differ from Common Cold in symptoms and site of infection?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Pneumonia:</b> Caused by <i>Streptococcus pneumoniae</i>; infects pulmonary alveoli, filling them with fluid; causes severe breathing difficulty, cough, fever, chills, and bluish lips/nails. <b style="color: #FF007F;">Common Cold:</b> Caused by Rhino viruses; infects only nasal mucosa and upper respiratory passage (never lungs); causes nasal discharge and sore throat.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Describe the complete Life Cycle of <i>Plasmodium</i> in Human Host.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Mosquito injects infectious <b>sporozoites</b> with saliva into bloodstream. 2. Sporozoites reach liver cells and undergo asexual reproduction (schizogony), rupturing hepatocytes. 3. Released merozoites infect RBCs, multiplying and rupturing them to release toxic <b>Haemozoin</b> crystals (causing fever and chills). 4. Some merozoites differentiate into sexual gametocytes in RBCs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Describe the Life Cycle of <i>Plasmodium</i> in the Mosquito Vector.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Female <i>Anopheles</i> mosquito ingests male and female gametocytes during blood meal. 2. Gametocytes fertilize in the mosquito's midgut to form a motile ookinete. 3. Ookinete encysts as an oocyst on gut wall, undergoing sporogony to produce thousands of sporozoites. 4. Sporozoites migrate to the mosquito's salivary glands ready for transmission.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Describe the symptoms and transmission of Amoebiasis (Amoebic Dysentery).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Pathogen:</b> <i>Entamoeba histolytica</i> protozoan invading large intestine mucosa. <b style="color: #FF007F;">Transmission:</b> Houseflies mechanically transfer fecal cysts to food and water. <b style="color: #FF007F;">Symptoms:</b> Abdominal cramps, constipation alternating with loose stools containing copious mucus and dark blood clots.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Explain the cause, symptoms, and transmission of Ascariasis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Pathogen:</b> <i>Ascaris lumbricoides</i>. <b style="color: #FF007F;">Transmission:</b> Ingestion of soil, unwashed vegetables, or water contaminated with embryonated eggs excreted in human feces. <b style="color: #FF007F;">Symptoms:</b> Internal bleeding, muscular cramps, anemia, fever, and physical blockage of the intestinal lumen.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Describe the symptoms and vector of Elephantiasis (Filariasis).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Pathogen:</b> Filarial nematodes <i>Wuchereria bancrofti</i> and <i>W. malayi</i> transmitted by female <i>Culex</i> mosquitoes. <b style="color: #FF007F;">Symptoms:</b> Worms live in lymphatic vessels, causing chronic persistent inflammation and severe gross enlargement (elephantiasis) of lower limbs and scrotum.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: What is Ringworm? How is it transmitted and what are its symptoms?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Pathogens:</b> Fungi of genera <i>Microsporum</i>, <i>Trichophyton</i>, and <i>Epidermophyton</i>. <b style="color: #FF007F;">Transmission:</b> Contact with infected towels, combs, clothing, or soil. <b style="color: #FF007F;">Symptoms:</b> Appearance of dry, scaly, circular lesions with intense itching on skin, nails, and scalp, exacerbated by warm moisture in body folds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Explain Dengue fever: Vector, causative virus, and complications.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Pathogen &amp; Vector:</b> Dengue flavivirus transmitted by female <i>Aedes aegypti</i> mosquito. <b style="color: #FF007F;">Symptoms:</b> High fever, severe headache, retro-orbital pain, severe bone and joint pain ('breakbone fever'). Complication includes Dengue Hemorrhagic Fever with catastrophic thrombocytopenia (drop in platelets).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Differentiate between Benign Tumors and Malignant Tumors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Benign Tumors:</b> Remain localized at original site; encapsulated; slow-growing; do not invade adjacent tissues; no metastasis; generally harmless. <b style="color: #FF007F;">Malignant Tumors:</b> Unencapsulated; rapidly proliferating neoplastic cells; invade and destroy adjacent tissues; enter blood/lymph to form secondary tumors (Metastasis); highly lethal.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: What is Metastasis and why is it considered the most dangerous property of Cancer?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Metastasis is the process by which malignant neoplastic cells detach from primary tumors, circulate via bloodstream or lymphatic vessels, lodge in distant tissues, and proliferate into secondary malignant tumors, making localized surgical removal or irradiation ineffective.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: List three physical, chemical, and biological carcinogens.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Physical:</b> X-rays, gamma rays, and UV radiation. 2. <b style="color: #FF007F;">Chemical:</b> Carcinogens in tobacco smoke (polycyclic hydrocarbons), coal tar, arsenic. 3. <b style="color: #FF007F;">Biological:</b> Oncogenic viruses (HPV, Hepatitis B) carrying viral oncogenes, and cellular proto-oncogenes (c-onc).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Explain the role of Computed Tomography (CT) and MRI in cancer diagnosis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">CT Scan:</b> Utilizes X-rays to generate detailed three-dimensional cross-sectional anatomical slices of internal body organs to locate tumors. <b style="color: #FF007F;">MRI:</b> Employs powerful magnetic fields and non-ionizing radiofrequency waves to accurately visualize pathological and physiological changes in soft tissues without radiation hazards.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Describe the structure of the Human Immunodeficiency Virus (HIV).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      HIV is a spherical retrovirus consisting of a central proteinaceous core housing two identical single-stranded RNA molecules and reverse transcriptase enzymes. The core is enclosed within a capsid and an outer host-derived lipid bilayer envelope studded with viral glycoprotein spikes (gp120 and gp41).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Why are Macrophages referred to as 'HIV Factories'?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When HIV infects macrophages, its viral RNA is reverse-transcribed into viral DNA, which integrates into the macrophage genome. The macrophage continues to transcribe and assemble new viral progeny indefinitely without immediately dying, continuously churning out HIV into the bloodstream.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain how HIV infection leads to progressive immunodeficiency in AIDS patients.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      HIV targets and infects CD_4<sup>+</sup> Helper T-lymphocytes (T_H), replicates inside them, and lyses host cells. As CD_4<sup>+</sup> cell counts fall progressively from normal (>1000/muL) to below 200/muL, the patient loses cell-mediated immunity, becoming defenseless against opportunistic pathogens (<i>Mycobacterium</i>, fungi, <i>Toxoplasma</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: Explain the modes of transmission and prevention of HIV.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Transmission:</b> Unprotected sexual intercourse, transfusion of contaminated blood, sharing unsterilized needles, and trans-placental transmission from infected mother to fetus. <b style="color: #FF007F;">Prevention:</b> Using condoms consistently, screening blood bank donations, using single-use disposable syringes, and public awareness.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: What is the source, chemical nature, and physiological action of Heroin (Smack)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Source:</b> Diacetylmorphine synthesized by acetylation of morphine extracted from opium poppy (<i>Papaver somniferum</i>). <b style="color: #FF007F;">Action:</b> Binds opioid receptors in CNS and digestive tract; acts as a powerful depressant that slows down respiratory rate and bodily functions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Describe the source, mode of intake, and effects of Cannabinoids.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Source:</b> Inflorescences, leaves, and resins of <i>Cannabis sativa</i> (hemp plant). <b style="color: #FF007F;">Intake:</b> Inhalation (smoking) or oral ingestion (Bhang, Ganja, Charas). <b style="color: #FF007F;">Effects:</b> Interacts with brain cannabinoid receptors, causing cardiovascular stimulation, tachycardia, altered perception, and euphoria.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: Explain the mechanism of action of Cocaine on the Central Nervous System.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cocaine (extracted from South American shrub <i>Erythroxylum coca</i>) blocks the reuptake transporter of the neurotransmitter <b style="color: #FF007F;">Dopamine</b> at neural synapses. Excessive accumulated dopamine continuously stimulates brain pleasure centers, producing intense euphoria and energy; high doses induce vivid hallucinations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: What are Hallucinogens? Name two plants that possess hallucinogenic properties.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hallucinogens are psychoactive drugs that alter sensory perception, thoughts, and emotions, inducing illusions and hallucinations. Examples: <i>Atropa belladonna</i> (deadly nightshade) and <i>Datura</i> (contain belladonna alkaloids). Another potent hallucinogen is LSD (from fungus <i>Claviceps purpurea</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Describe the harmful consequences of Tobacco smoking on human health.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Nicotine stimulates adrenal glands to release adrenaline, raising blood pressure and heart rate. 2. Carbon monoxide (CO) in smoke binds hemoglobin, reducing oxygen carrying capacity. 3. Carcinogens cause lung, throat, and oral cancers. 4. Smoke destroys alveolar walls, causing irreversible <b>Emphysema</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Differentiate between Drug Addiction and Drug Dependence.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">Addiction:</b> Psychological attachment to the euphoria and temporary well-being associated with taking drugs. <b style="color: #FF007F;">Dependence:</b> Physiological adaptation of the body to the drug, wherein sudden discontinuation triggers severe, agonizing <b>Withdrawal Symptoms</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain Withdrawal Syndrome and its clinical manifestations.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Withdrawal syndrome is the cluster of painful physical and psychological symptoms that emerge when regular intake of a dependent substance is abruptly stopped. Manifestations include severe tremors, shakiness, profuse sweating, nausea, vomiting, tachycardia, violent anxiety, and insomnia.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: List warning signs of drug or alcohol abuse in adolescents.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Unexplained drop in academic performance. 2. Unexplained absence from school/college. 3. Loss of interest in hobbies and hygiene. 4. Social isolation, depression, hostility, and rebellious behavior. 5. Stealing money from home to purchase drugs.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: What preventive measures can protect adolescents from drug and alcohol abuse?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #FF007F;">Avoid Undue Peer Pressure:</b> Respecting individual limits without imposing unreasonable expectations. 2. <b style="color: #FF007F;">Education and Counseling:</b> Instilling healthy coping mechanisms for stress. 3. <b style="color: #FF007F;">Seeking Help from Parents/Peers:</b> Open communication. 4. <b style="color: #FF007F;">Medical Rehabilitation:</b> Specialized de-addiction therapy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain the medical importance of Hepatitis B vaccine.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Hepatitis B causes severe chronic liver disease, cirrhosis, and liver cancer. The recombinant Hepatitis B surface antigen (HBsAg) vaccine produced in transgenic yeast provides safe, highly effective lifelong active immunity without using live human pathogens.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: Why are virus-infected cells able to protect non-infected cells through Interferons?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Virus-infected cells produce and release <b>Interferons</b> (cytokines). Interferons bind to membrane receptors on neighboring uninfected cells, activating cellular genes that synthesize antiviral enzymes (e.g., protein kinase R and 2'-5' oligoadenylate synthetase), which inhibit viral protein synthesis and degrade viral mRNA upon infection.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain the role of ELISA in disease diagnosis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ELISA (Enzyme-Linked Immunosorbent Assay) is a biochemical assay based on antigen-antibody interaction. An enzyme-linked antibody detects the presence of specific antigens (e.g., HIV p24 antigen) or specific host antibodies against pathogens in patient serum, generating a colorimetric signal.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: What is Contact Inhibition and how is it altered in malignant neoplasia?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Contact inhibition is a normal biological mechanism where physical contact between adjacent cells arrests further cellular division and proliferation. In cancer cells, contact inhibition is completely lost, causing cells to continue dividing uncontrollably over one another, forming multi-layered neoplastic tumors.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: How does regular exercise and a balanced diet boost the immune system?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Regular physical exercise promotes cardiovascular circulation, enabling immune cells and cytokines to circulate efficiently throughout lymphoid tissues, while a balanced diet provides essential micronutrients (Zinc, Vitamins C, D, A) required for antibody synthesis, phagocytosis, and antioxidant defense.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(194, 24, 91, 0.15)); border: 1.5px solid rgba(255, 0, 127, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #FF007F; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Master Immune Pathways, Full Malaria Life Cycle, HIV Replication &amp; Oncology</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Describe Innate Immunity vs Acquired Immunity in detail: Classification, Cellular components, and Biological significance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Innate Immunity:</b> Inborn, non-specific defense acting via: (a) Physical barriers (skin, mucus membranes); (b) Physiological barriers (stomach HCl, lysozyme in tears/saliva); (c) Cellular barriers (neutrophils/PMNL, monocytes, macrophages, NK cells); (d) Cytokine barriers (interferons).<br/><br/><b style="color: #FF007F;">2. Acquired Immunity:</b> Adaptive, pathogen-specific defense with immunological memory: (a) Humoral Immunity (B-cells producing circulating H_2L_2 antibodies); (b) Cell-Mediated Immunity (T-lymphocytes attacking intracellular pathogens and rejecting organ grafts).<br/><br/><b style="color: #FF007F;">3. Primary vs Secondary Response:</b> Primary is sluggish and low intensity; secondary is rapid, heightened, and intense due to memory B and T cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Describe the structure of an Antibody (H_2L_2) and compare the five Immunoglobulin classes (IgG, IgA, IgM, IgE, IgD).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Structure:</b> Y-shaped glycoprotein consisting of two identical Heavy (H) chains and two identical Light (L) chains connected by interchain disulfide bonds. Each arm bears an antigen-binding site (Fab fragment) with hypervariable complementarity-determining regions (CDRs); stem is constant Fc region.<br/><br/><b style="color: #FF007F;">2. Classes:</b><br/>&bull; <i>IgG:</i> Most abundant (80%); only antibody that crosses human placenta.<br/>&bull; <i>IgA:</i> Secretory dimer in colostrum, saliva, tears; protects mucosal surfaces.<br/>&bull; <i>IgM:</i> Pentamer; first antibody synthesized in primary response.<br/>&bull; <i>IgE:</i> Mediates allergic hypersensitivity and defense against helminths.<br/>&bull; <i>IgD:</i> Antigen receptor on B-lymphocyte surfaces.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Discuss Human Pathogenic Bacteria: Detailed etiology, pathology, transmission, and diagnosis of Typhoid and Pneumonia.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Typhoid Fever:</b> Pathogen: <i>Salmonella typhi</i>. Ingestion of contaminated food/water. Pathogen penetrates intestinal mucosa into bloodstream. Symptoms: Sustained fever (39-40&deg;C), severe weakness, stomach pain, constipation, headache; intestinal perforation and fatal peritonitis. Diagnosis: <b>Widal agglutination test</b>.<br/><br/><b style="color: #FF007F;">2. Bacterial Pneumonia:</b> Pathogens: <i>Streptococcus pneumoniae</i> and <i>Haemophilus influenzae</i>. Inhaling airborne droplets. Alveoli fill with fluid and cellular debris, causing severe respiratory compromise, fever, chills, productive cough, and cyanosis (bluish nail beds).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Explain the Complete Life Cycle of <i>Plasmodium</i> (Malarial Parasite) in Human and Mosquito hosts with diagnostic stages.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Human Phase (Asexual):</b> Inoculated sporozoites enter bloodstream &rarr; invade liver hepatocytes &rarr; asexual schizogony &rarr; merozoites released into blood &rarr; infect erythrocytes &rarr; erythrocytic schizogony &rarr; RBC lysis releases toxic <b>Haemozoin</b> crystals (triggering paroxysms of chills and fever every 3–4 days) &rarr; gametocytogenesis produces male/female gametocytes.<br/><br/><b style="color: #FF007F;">2. Mosquito Phase (Sexual):</b> Female <i>Anopheles</i> ingests gametocytes &rarr; fertilization in midgut lumen &rarr; motile ookinete &rarr; oocyst on outer stomach wall &rarr; sporogony yields thousands of sporozoites &rarr; sporozoites migrate to salivary glands ready for transmission.<br/><br/><b style="color: #FF007F;">3. Control:</b> Insecticide spraying, bed nets, larvivorous <i>Gambusia</i> fish.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Describe Nematode and Protozoan Human Diseases: Ascariasis, Filariasis, and Amoebiasis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Ascariasis:</b> Pathogen: <i>Ascaris lumbricoides</i>. Ingestion of embryonated eggs in contaminated soil/vegetables. Symptoms: Abdominal pain, intestinal bleeding, anemia, stunted growth, and physical obstruction of bowel.<br/><br/><b style="color: #FF007F;">2. Filariasis (Elephantiasis):</b> Pathogens: <i>Wuchereria bancrofti</i> and <i>W. malayi</i> transmitted by female <i>Culex</i> mosquitoes. Adult worms dwell in lymphatic vessels, provoking chronic granulomatous inflammation, lymphatic blockage, and massive deformities of lower limbs and scrotum.<br/><br/><b style="color: #FF007F;">3. Amoebiasis:</b> Pathogen: <i>Entamoeba histolytica</i>. Transmitted by houseflies carrying fecal cysts. Amoebae ulcerate large intestine, causing severe cramps and stools with mucous and blood.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Discuss Cancer: Hallmarks, Benign vs Malignant tumors, Carcinogenic agents, Diagnosis, and Multimodal Treatment.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Characteristics:</b> Loss of contact inhibition, autonomous cell division, lack of differentiation, sustained angiogenesis.<br/><br/><b style="color: #FF007F;">2. Benign vs Malignant:</b> Benign remain localized; Malignant invade tissues and spread via blood/lymph to form secondary tumors (<b>Metastasis</b>).<br/><br/><b style="color: #FF007F;">3. Carcinogens:</b> Physical (X-rays, UV), Chemical (tobacco smoke mutagens), Biological (oncogenic viruses, mutated proto-oncogenes).<br/><br/><b style="color: #FF007F;">4. Diagnosis:</b> Histopathology &amp; biopsy, radiography, CT, MRI, monoclonal antibody markers.<br/><br/><b style="color: #FF007F;">5. Treatment:</b> Surgical excision, targeted radiation therapy, chemotherapy (vincristine), and immunotherapy with &alpha;-interferon.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Explain HIV &amp; AIDS: Viral structure, Reverse transcription replication cycle in T<sub>H</sub> cells, Clinical stages, and Diagnosis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Structure:</b> Enveloped retrovirus with two identical ssRNA genomes, reverse transcriptase, and gp120 spikes.<br/><br/><b style="color: #FF007F;">2. Replication Cycle:</b> HIV enters macrophage/T<sub>H</sub> cell &rarr; viral reverse transcriptase converts RNA to DNA &rarr; integrase integrates viral DNA into host genome &rarr; host transcribes viral mRNA &rarr; assembly of new virions. Macrophages act as 'HIV factory'; CD_4<sup>+</sup> Helper T-cells are progressively destroyed.<br/><br/><b style="color: #FF007F;">3. Clinical Stages:</b> Asymptomatic phase (few months to 10 years) &rarr; symptomatic phase &rarr; full-blown AIDS (CD_4<sup>+</sup> < 200/muL) marked by opportunistic fatal infections (TB, candidiasis, <i>Pneumocystis</i>).<br/><br/><b style="color: #FF007F;">4. Diagnosis:</b> ELISA screening confirmed by Western Blot.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Discuss Commonly Abused Drugs: Opioids, Cannabinoids, and Coca Alkaloids with sources, mechanisms, and body impacts.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Opioids (Heroin / Diacetylmorphine):</b> Extracted from opium poppy (<i>Papaver somniferum</i>). Binds CNS and intestinal opioid receptors; powerful depressant slowing respiration.<br/><br/><b style="color: #FF007F;">2. Cannabinoids (Bhang, Ganja, Charas, Marijuana):</b> From <i>Cannabis sativa</i>. Ingested or inhaled; binds brain cannabinoid receptors, causing cardiovascular stimulation and cognitive alteration.<br/><br/><b style="color: #FF007F;">3. Coca Alkaloids (Cocaine):</b> Extracted from <i>Erythroxylum coca</i>. Blocks dopamine reuptake; stimulates CNS, producing euphoria; excessive doses cause paranoia and hallucinations.<br/><br/><b style="color: #FF007F;">4. Hallucinogens:</b> <i>Datura</i>, <i>Atropa belladonna</i>, LSD.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain Drug Addiction and Dependence in Adolescents: Causes, Withdrawal syndrome, Warning signs, and Prevention.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Adolescence Vulnerability:</b> Period of transition (12–18 yrs) marked by curiosity, peer pressure, experimentation, and stress.<br/><br/><b style="color: #FF007F;">2. Addiction &amp; Dependence:</b> Addiction is psychological craving; Dependence is physiological adaptation triggering violent <b>Withdrawal Syndrome</b> (sweating, tremors, vomiting, anxiety) upon discontinuation.<br/><br/><b style="color: #FF007F;">3. Warning Signs:</b> Academic decline, absenteeism, social isolation, aggression, stealing money.<br/><br/><b style="color: #FF007F;">4. Prevention &amp; Control:</b> Avoiding undue peer pressure, parental guidance, counseling, recognizing red flags, and professional medical de-addiction therapy.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Construct a comprehensive comparative matrix between Active Immunity and Passive Immunity.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Exposure:</b> Active requires direct exposure to live/attenuated antigen; Passive involves transfer of ready-made preformed antibodies.<br/><b style="color: #FF007F;">2. Speed:</b> Active takes days to weeks to develop; Passive provides instant immediate protection.<br/><b style="color: #FF007F;">3. Duration:</b> Active confers long-lasting immunity; Passive lasts only weeks to months.<br/><b style="color: #FF007F;">4. Memory:</b> Active generates robust immunological memory B/T cells; Passive leaves zero memory.<br/><b style="color: #FF007F;">5. Examples:</b> Active: Natural infection recovery, vaccines (Polio, MMR); Passive: Colostrum IgA, Anti-rabies serum, Anti-tetanus serum.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Explain the difference between Primary and Secondary Immune Responses with graphical kinetics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Primary Response:</b> First encounter with a novel pathogen. Characterized by a long lag phase (several days), low antibody titer, predominance of IgM antibodies, and slow elimination of antigen.<br/><br/><b style="color: #FF007F;">2. Secondary (Anamnestic) Response:</b> Subsequent encounter with the same pathogen. Characterized by virtually zero lag phase, massive rapid synthesis of high-affinity IgG antibodies driven by memory B and T cells, neutralizing the pathogen before disease symptoms develop.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Detail the structure and immunological functions of the Spleen and Lymph Nodes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Spleen:</b> Large bean-shaped secondary lymphoid organ containing red pulp (erythrocyte storage and breakdown) and white pulp (rich in B and T lymphocytes). Acts as a biological filter trapping blood-borne microorganisms.<br/><br/><b style="color: #FF007F;">2. Lymph Nodes:</b> Small solid encapsulated nodules located along lymphatic vessels. Act as filters trapping microorganisms and foreign antigens present in interstitial lymph fluid, activating resident T and B lymphocytes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain the biological basis of Allergies and Anaphylactic Shock.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Mechanism:</b> In sensitized individuals, allergens stimulate B-cells to switch to IgE synthesis. IgE antibodies bind Fc receptors on tissue mast cells and basophils. Subsequent allergen exposure cross-links bound IgE, triggering explosive degranulation and release of histamine, serotonin, and leukotrienes.<br/><br/><b style="color: #FF007F;">2. Anaphylaxis:</b> Systemic massive vasodilation and bronchial constriction leading to precipitous blood pressure crash and asphyxiation, treated urgently with intramuscular adrenaline.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Describe Dengue and Hepatitis: Etiology, Modes of transmission, Pathology, and Preventive strategies.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Dengue:</b> Flavivirus transmitted by <i>Aedes aegypti</i>. High fever, bone-breaking arthralgia, retro-orbital headache; hemorrhagic dengue causes thrombocytopenia. Prevention: Vector control, eliminating standing water.<br/><br/><b style="color: #FF007F;">2. Hepatitis B:</b> Enveloped DNA virus spread via blood, contaminated needles, and sexual contact. Replicates in hepatocytes, causing chronic hepatitis, cirrhosis, and hepatoma. Prevention: Recombinant HBsAg vaccine, screening blood donations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain the mechanism of Action of Carcinogens on Proto-oncogenes and Tumor Suppressor Genes.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Proto-oncogenes (c-onc):</b> Normal cellular genes that regulate cell growth and division. Mutations (point mutation, translocation, amplification) convert them into hyperactive <b>Oncogenes</b>, driving continuous uninhibited proliferation.<br/><br/><b style="color: #FF007F;">2. Tumor Suppressor Genes (e.g., p53, Rb):</b> Normal genes that encode checkpoint proteins that arrest cell division or induce apoptosis upon DNA damage. Inactivation of tumor suppressors allows mutated cells to divide unchecked.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Describe the role of NACO and Non-Governmental Organizations in combating the AIDS epidemic in India.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. NACO (National AIDS Control Organisation):</b> Formulates national policies, promotes condom distribution, mandates screening of blood donations, provides free Anti-Retroviral Therapy (ART) clinics.<br/><br/><b style="color: #FF007F;">2. NGOs:</b> Conduct grassroots educational campaigns, destigmatize HIV/AIDS, provide palliative care, needle-exchange programs for intravenous drug users, and counseling for high-risk populations.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the mechanism of action of Antiretroviral Drugs used in HIV treatment.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Reverse Transcriptase Inhibitors (NRTIs &amp; NNRTIs):</b> Inhibit the viral enzyme reverse transcriptase (e.g., Zidovudine / AZT), blocking the conversion of viral RNA into viral DNA.<br/><b style="color: #FF007F;">2. Protease Inhibitors:</b> Inhibit HIV protease required for cleaving viral polyproteins into functional mature virions.<br/><b style="color: #FF007F;">3. Integrase Inhibitors:</b> Prevent integration of viral DNA into host chromosomes.<br/><b style="color: #FF007F;">4. Combination ART (HAART):</b> Combines multiple drugs to suppress viral replication and prevent emergence of drug-resistant mutants.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Describe the harmful effects of Alcohol abuse on the Human Liver, Brain, and Society.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Liver:</b> Alcoholic fatty liver &rarr; alcoholic hepatitis &rarr; irreversible <b>Liver Cirrhosis</b> (fibrosis of hepatic parenchyma), leading to hepatic failure.<br/><b style="color: #FF007F;">2. Nervous System:</b> Cerebellar ataxia, loss of motor coordination, peripheral neuropathy, Wernicke-Korsakoff amnesic syndrome.<br/><b style="color: #FF007F;">3. Social Impact:</b> Domestic violence, loss of employment, financial ruin, traffic accidents due to impaired reflexes.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain how Recombinant DNA Technology revolutionized Vaccine production with specific examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Advantages:</b> Recombinant vaccines produce pure, non-infectious subunit antigen proteins in host microbes without handling pathogenic viruses, eliminating risk of reversion to virulence.<br/><br/><b style="color: #FF007F;">2. Examples:</b> Recombinant Hepatitis B vaccine produced by expressing HBsAg surface antigen in transgenic baker's yeast (<i>Saccharomyces cerevisiae</i>); HPV vaccine produced via virus-like particles in yeast/insect cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #FF007F; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct a Master Flowchart and Summary Matrix integrating Immune Defenses, Major Infectious Pathogens, Cancer, AIDS, and Drug Categories.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF007F;">1. Immunity:</b> Innate (Barriers) vs Acquired (Humoral H_2L_2 &amp; CMI graft rejection) &rarr; Lymphoid organs (Bone marrow, Thymus &rarr; Spleen, Nodes, MALT).<br/><b style="color: #FF007F;">2. Pathogens:</b> Bacterial (Typhoid Widal, Pneumonia alveoli), Viral (Cold, Dengue, Hepatitis B), Protozoan (Malaria Haemozoin, Amoebiasis), Helminthic (Ascariasis, Filariasis), Fungal (Ringworm).<br/><b style="color: #FF007F;">3. Chronic Diseases:</b> Cancer (Loss of contact inhibition, Metastasis, &alpha;-interferon) &amp; AIDS (HIV retrovirus, CD_4<sup>+</sup> depletion, ELISA).<br/><b style="color: #FF007F;">4. Substance Abuse:</b> Opioids (Heroin depressant), Cannabinoids (Cardiovascular), Cocaine (Dopamine blocker), Tobacco (Nicotine, Emphysema), Alcohol (Cirrhosis).
    </div>
  </div>

</div>
`;

export const c12Zoo3Mcqs = [
  {
    "id": "c12-zoo-3-mcq-1",
    "question": "Interferons, which protect uninfected cells from viral replication, belong to which innate immune barrier?",
    "options": [
      "A):   Physical barrier",
      "B):   Physiological barrier",
      "C):   Cytokine barrier",
      "D):   Cellular barrier"
    ],
    "correctAnswer": "c",
    "explanation": "Interferons are cytokine proteins secreted by virus-infected cells that confer antiviral resistance to surrounding cells."
  },
  {
    "id": "c12-zoo-3-mcq-2",
    "question": "Graft rejection following allogeneic organ transplantation is primarily mediated by:",
    "options": [
      "A):   Humoral immunity",
      "B):   Cell-Mediated Immunity (CMI)",
      "C):   Innate physical barriers",
      "D):   IgE antibodies"
    ],
    "correctAnswer": "b",
    "explanation": "T-lymphocytes mediating Cell-Mediated Immunity recognize donor foreign antigens (HLA) and destroy allografts."
  },
  {
    "id": "c12-zoo-3-mcq-3",
    "question": "The immunoglobulin class that is a dimer and predominantly found in human Colostrum and saliva is:",
    "options": [
      "A):   IgG",
      "B):   IgA",
      "C):   IgE",
      "D):   IgM"
    ],
    "correctAnswer": "b",
    "explanation": "Secretory IgA is present in breast colostrum, tears, and saliva, providing mucosal passive immunity to newborns."
  },
  {
    "id": "c12-zoo-3-mcq-4",
    "question": "Allergic hypersensitivity reactions are mediated by which antibody class and which inflammatory chemicals from mast cells?",
    "options": [
      "A):   IgG and Pepsin",
      "B):   IgE and Histamine/Serotonin",
      "C):   IgM and Renin",
      "D):   IgA and Interferon"
    ],
    "correctAnswer": "b",
    "explanation": "IgE antibodies bind to mast cells, stimulating the release of histamine and serotonin during allergic responses."
  },
  {
    "id": "c12-zoo-3-mcq-5",
    "question": "Which lymphoid tissue lines the respiratory, digestive, and urogenital tracts and accounts for ~50% of lymphoid tissue in the body?",
    "options": [
      "A):   Spleen",
      "B):   Thymus",
      "C):   MALT (Mucosa-Associated Lymphoid Tissue)",
      "D):   Tonsils"
    ],
    "correctAnswer": "c",
    "explanation": "MALT is located within major mucosal linings and constitutes about 50% of the lymphoid tissue in the human body."
  },
  {
    "id": "c12-zoo-3-mcq-6",
    "question": "The diagnostic agglutination test used to confirm Typhoid fever in clinical practice is the:",
    "options": [
      "A):   ELISA test",
      "B):   Widal test",
      "C):   Western Blot",
      "D):   Schick test"
    ],
    "correctAnswer": "b",
    "explanation": "The Widal test detects agglutinating antibodies against <i>Salmonella typhi</i> O and H antigens in patient serum."
  },
  {
    "id": "c12-zoo-3-mcq-7",
    "question": "Bacterial Pneumonia is caused by <i>Streptococcus pneumoniae</i> and:",
    "options": [
      "A):   <i>Salmonella typhi</i>",
      "B):   <i>Haemophilus influenzae</i>",
      "C):   <i>Entamoeba histolytica</i>",
      "D):   <i>Wuchereria bancrofti</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Bacterial pneumonia is predominantly caused by <i>Streptococcus pneumoniae</i> and <i>Haemophilus influenzae</i>."
  },
  {
    "id": "c12-zoo-3-mcq-8",
    "question": "The Common Cold differs clinically from Pneumonia because Rhino viruses:",
    "options": [
      "A):   Infect the pulmonary alveoli",
      "B):   Infect the nose and upper respiratory tract, but NOT the lungs",
      "C):   Are transmitted only by mosquitoes",
      "D):   Can be cured with penicillin"
    ],
    "correctAnswer": "b",
    "explanation": "Rhino viruses infect the nasal mucosa and upper respiratory tract, whereas pneumonia infects the alveoli of the lungs."
  },
  {
    "id": "c12-zoo-3-mcq-9",
    "question": "In Malaria, the toxic crystalline substance released upon the cyclical rupture of red blood cells is:",
    "options": [
      "A):   Hirudin",
      "B):   Haemozoin",
      "C):   Bilirubin",
      "D):   Histamine"
    ],
    "correctAnswer": "b",
    "explanation": "Haemozoin is a dark toxic pigment produced from hemoglobin degradation that triggers chills and periodic fever spikes."
  },
  {
    "id": "c12-zoo-3-mcq-10",
    "question": "The infectious stage of <i>Plasmodium</i> that is injected into the human bloodstream by the female <i>Anopheles</i> mosquito is the:",
    "options": [
      "A):   Merozoite",
      "B):   Trophozoite",
      "C):   Sporozoite",
      "D):   Gametocyte"
    ],
    "correctAnswer": "c",
    "explanation": "The female <i>Anopheles</i> mosquito inoculates infectious needle-like sporozoites into human blood with its saliva."
  },
  {
    "id": "c12-zoo-3-mcq-11",
    "question": "Which larvivorous biological control fish is introduced into freshwater bodies to feed on mosquito larvae?",
    "options": [
      "A):   <i>Catla catla</i>",
      "B):   <i>Gambusia</i>",
      "C):   <i>Clarias</i>",
      "D):   <i>Rohu</i>"
    ],
    "correctAnswer": "b",
    "explanation": "<i>Gambusia</i> (mosquito fish) feeds voraciously on mosquito larvae, aiding in biological vector control."
  },
  {
    "id": "c12-zoo-3-mcq-12",
    "question": "Amoebic Dysentery (Amoebiasis) in humans is caused by which parasitic protozoan?",
    "options": [
      "A):   <i>Ascaris lumbricoides</i>",
      "B):   <i>Entamoeba histolytica</i>",
      "C):   <i>Plasmodium vivax</i>",
      "D):   <i>Trichomonas vaginalis</i>"
    ],
    "correctAnswer": "b",
    "explanation": "<i>Entamoeba histolytica</i> infects the human large intestine, producing ulcerations and bloody mucus-laden stools."
  },
  {
    "id": "c12-zoo-3-mcq-13",
    "question": "Elephantiasis (Filariasis), marked by chronic gross inflammation of the lower limbs, is transmitted by the bite of female:",
    "options": [
      "A):   <i>Aedes</i> mosquito",
      "B):   <i>Anopheles</i> mosquito",
      "C):   <i>Culex</i> mosquito",
      "D):   Housefly"
    ],
    "correctAnswer": "c",
    "explanation": "Female <i>Culex</i> mosquitoes serve as biological vectors for the filarial worms <i>Wuchereria bancrofti</i> and <i>W. malayi</i>."
  },
  {
    "id": "c12-zoo-3-mcq-14",
    "question": "Ringworm is a contagious human skin disease caused by fungi belonging to the genera:",
    "options": [
      "A):   <i>Puccinia</i> and <i>Ustilago</i>",
      "B):   <i>Microsporum</i>, <i>Trichophyton</i>, and <i>Epidermophyton</i>",
      "C):   <i>Rhizopus</i> and <i>Mucor</i>",
      "D):   <i>Agaricus</i> and <i>Penicillium</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Dermatophyte fungi of genera <i>Microsporum</i>, <i>Trichophyton</i>, and <i>Epidermophyton</i> cause ringworm lesions."
  },
  {
    "id": "c12-zoo-3-mcq-15",
    "question": "Dengue fever is caused by a flavivirus transmitted to humans by which mosquito vector?",
    "options": [
      "A):   <i>Anopheles stephensi</i>",
      "B):   <i>Aedes aegypti</i>",
      "C):   <i>Culex pipiens</i>",
      "D):   Tsetse fly"
    ],
    "correctAnswer": "b",
    "explanation": "The female <i>Aedes aegypti</i> (tiger mosquito) transmits the Dengue virus."
  },
  {
    "id": "c12-zoo-3-mcq-16",
    "question": "The migration of malignant cancer cells to distant sites through the bloodstream to form secondary tumors is termed:",
    "options": [
      "A):   Contact inhibition",
      "B):   Metastasis",
      "C):   Infiltration",
      "D):   Transformation"
    ],
    "correctAnswer": "b",
    "explanation": "Metastasis is the most dreaded characteristic of malignant tumors, spreading neoplastic cells throughout the body."
  },
  {
    "id": "c12-zoo-3-mcq-17",
    "question": "Which biological response modifier is clinically administered to cancer patients to activate their immune system?",
    "options": [
      "A):   Histamine",
      "B):   \&alpha;-Interferon",
      "C):   Morphine",
      "D):   Penicillin"
    ],
    "correctAnswer": "b",
    "explanation": "\&alpha;-Interferon stimulates the patient's immune system (NK cells and cytotoxic T-cells) to attack tumor cells."
  },
  {
    "id": "c12-zoo-3-mcq-18",
    "question": "During HIV replication inside the human body, which cells act as continuous 'HIV factories'?",
    "options": [
      "A):   B-lymphocytes",
      "B):   Macrophages",
      "C):   Erythrocytes",
      "D):   Neutrophils"
    ],
    "correctAnswer": "b",
    "explanation": "Macrophages continuously transcribe and produce HIV progeny without immediately dying, acting as HIV factories."
  },
  {
    "id": "c12-zoo-3-mcq-19",
    "question": "The clinical diagnosis of full-blown AIDS is established when the peripheral blood count of which cells drops critically?",
    "options": [
      "A):   Platelets below 100,000",
      "B):   Helper T-lymphocytes (CD4<sup>+</sup> cells) below 200/μL",
      "C):   Neutrophils below 1000",
      "D):   Erythrocytes below 2 million"
    ],
    "correctAnswer": "b",
    "explanation": "HIV selectively destroys CD4<sup>+</sup> Helper T-cells; a drop below 200/μL triggers profound opportunistic infections."
  },
  {
    "id": "c12-zoo-3-mcq-20",
    "question": "The primary initial screening test widely employed for detecting HIV infection is:",
    "options": [
      "A):   Widal test",
      "B):   ELISA",
      "C):   PCR amplification only",
      "D):   Southern blot"
    ],
    "correctAnswer": "b",
    "explanation": "ELISA (Enzyme-Linked Immunosorbent Assay) is the gold standard initial screening test for HIV antibodies."
  },
  {
    "id": "c12-zoo-3-mcq-21",
    "question": "Heroin (Smack) is chemically synthesized by the acetylation of:",
    "options": [
      "A):   Cocaine",
      "B):   Morphine",
      "C):   Nicotine",
      "D):   Cannabinol"
    ],
    "correctAnswer": "b",
    "explanation": "Heroin is diacetylmorphine, obtained by the chemical acetylation of natural morphine from the opium poppy."
  },
  {
    "id": "c12-zoo-3-mcq-22",
    "question": "Cocaine is an alkaloid extracted from the leaves of the South American plant:",
    "options": [
      "A):   <i>Papaver somniferum</i>",
      "B):   <i>Erythroxylum coca</i>",
      "C):   <i>Cannabis sativa</i>",
      "D):   <i>Atropa belladonna</i>"
    ],
    "correctAnswer": "b",
    "explanation": "Cocaine is extracted from <i>Erythroxylum coca</i> and interferes with dopamine neurotransmitter transport."
  },
  {
    "id": "c12-zoo-3-mcq-23",
    "question": "Cannabinoids primarily interact with specific cannabinoid receptors located in the:",
    "options": [
      "A):   Cardiovascular vessels only",
      "B):   Brain",
      "C):   Liver",
      "D):   Kidney tubules"
    ],
    "correctAnswer": "b",
    "explanation": "Cannabinoids bind to cannabinoid receptors in the central nervous system (principally the brain), affecting mood and perception."
  },
  {
    "id": "c12-zoo-3-mcq-24",
    "question": "Which alkaloid present in tobacco stimulates the adrenal glands to release adrenaline and noradrenaline?",
    "options": [
      "A):   Morphine",
      "B):   Nicotine",
      "C):   Caffeine",
      "D):   Reserpine"
    ],
    "correctAnswer": "b",
    "explanation": "Nicotine stimulates the adrenal medulla to secrete adrenaline and noradrenaline, raising blood pressure and heart rate."
  },
  {
    "id": "c12-zoo-3-mcq-25",
    "question": "Chronic excessive consumption of alcohol damages liver architecture, resulting in the disease termed:",
    "options": [
      "A):   Pneumonia",
      "B):   Liver Cirrhosis",
      "C):   Thalassemia",
      "D):   Rheumatoid arthritis"
    ],
    "correctAnswer": "b",
    "explanation": "Chronic alcohol abuse leads to progressive accumulation of fat, necrosis, and fibrosis of hepatic parenchyma (Liver Cirrhosis)."
  }
];
