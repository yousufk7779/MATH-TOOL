// Class 11 Botany Chapter 4: Plant Physiology
// Complete Official Syllabus Coverage & Zero Diagrams
// Subject: Botany | Class: 11 | Code: c11-bot-4

export const c11Bot4HtmlOverview = `<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- Quick Glossary Card with Chapter Subtitle -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.12), rgba(0, 151, 167, 0.12)); border: 1.5px solid rgba(0, 229, 255, 0.35); border-radius: 12px; padding: 18px 20px; margin-bottom: 26px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 20px; font-weight: bold; text-align: center;">📖 Quick Glossary &amp; Basic Definitions</h2>
    <p style="color: #00E5FF; margin: 0 0 16px 0; font-size: 14.5px; text-align: center; font-weight: 500;">Essential Core Concepts &amp; Key Definitions &bull; Chapter 4: Plant Physiology</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Glycolysis (EMP Pathway):</b> Sequence of 10 cytosolic enzymatic reactions converting 1 molecule of glucose into 2 molecules of pyruvic acid with a net gain of 2 ATP and 2 NADH.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Chemiosmotic Hypothesis:</b> Peter Mitchell's (1961) mechanism showing that ATP synthesis in mitochondria and chloroplasts is driven by an electrochemical proton gradient across membranes.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Photophosphorylation:</b> The light-driven synthesis of ATP from ADP and inorganic phosphate in chloroplast thylakoids (Cyclic vs Non-Cyclic Z-scheme).
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Kranz Anatomy:</b> Specialized leaf anatomy in C<sub>4</sub> plants characterized by large bundle sheath cells containing agranal chloroplasts surrounded by mesophyll cells.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Photorespiration (C<sub>2</sub> Cycle):</b> A wasteful light-induced respiratory process occurring in C<sub>3</sub> plants when RuBisCO binds O<sub>2</sub> instead of CO<sub>2</sub>, releasing CO<sub>2</sub> with zero ATP production.
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
        <b style="color: #00E5FF;">Plant Growth Regulators (PGRs):</b> Small organic signaling molecules (Auxins, Gibberellins, Cytokinins, Ethylene, Abscisic Acid) that regulate growth, differentiation, and stress responses.
      </div>
    </div>
  </div>

  <!-- SECTION 1 -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 30px; font-size: 20px;">
    Respiration: Cellular respiration; Glycolysis, Kreb’s cycle and Electron transport system (along with ATP energetics); Chemiosmotic hypothesis; Aerobic and Anaerobic respirations; Amphibolic pathways; Respiratory quotient
  </h2>

  

  <p>
    Cellular respiration is an enzyme-mediated catabolic exergonic process in which energy-rich organic substrates (primarily glucose) are oxidized to release metabolic energy trapped as ATP (Adenosine Triphosphate), the universal energy currency of living cells.
  </p>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Cellular Respiration Overview, Aerobic vs Anaerobic Respiration &amp; Glycolysis (EMP Pathway)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Aerobic vs Anaerobic Respiration:</b>
        <br/>- <i>Aerobic:</i> Complete oxidation of glucose in the presence of O<sub>2</sub> yielding CO<sub>2</sub>, H<sub>2</sub>O, and <b>36-38 ATP</b>.
        <br/>- <i>Anaerobic (Fermentation):</i> Incomplete oxidation in absence of O<sub>2</sub>; alcoholic fermentation in yeast yields Ethanol + CO<sub>2</sub> and <b>2 ATP</b>; lactic acid fermentation in muscle/bacteria yields Lactic acid and 2 ATP.
      </li>
      <li><b style="color: #00E5FF;">Glycolysis (EMP Pathway - Embden, Meyerhof, Parnas, 1930):</b>
        <br/>Occurs in the <b>Cytosol</b>; independent of oxygen; universal to all living cells:
        <br/>1. Glucose &rarr; Glucose-6-phosphate (Hexokinase, uses 1 ATP).
        <br/>2. Fructose-6-phosphate &rarr; Fructose-1,6-bisphosphate (Phosphofructokinase / PFK - <b>Pacemaker enzyme</b>, uses 1 ATP).
        <br/>3. Cleavage into Glyceraldehyde-3-phosphate (PGAL) and DHAP.
        <br/>4. Oxidation: 2 PGAL &rarr; 2 1,3-Bisphosphoglycerate + <b>2 NADH + 2 H<sup>+</sup></b>.
        <br/>5. Substrate-level phosphorylation yields <b>4 ATP</b>.
        <br/>&bull; Net Yield: <b>2 Pyruvate (3C) + 2 ATP (net) + 2 NADH</b>.
      </li>
    </ul>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Krebs Cycle (Citric Acid Cycle / TCA Cycle) &amp; Link Reaction</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #00E5FF;">1. Link Reaction (Gate Reaction):</b> Pyruvate enters mitochondrial matrix and undergoes oxidative decarboxylation catalyzed by <i>Pyruvate Dehydrogenase complex</i>:
      <br/><b>2 Pyruvate + 2 CoA + 2 NAD<sup>+</sup> &rarr; 2 Acetyl-CoA (2C) + 2 CO<sub>2</sub> + 2 NADH + 2 H<sup>+</sup></b>.
      <br/><b style="color: #00E5FF;">2. Krebs Cycle (Sir Hans Krebs, 1937):</b>
      <br/>Acetyl-CoA (2C) condenses with Oxaloacetate (OAA, 4C) to form Citrate (6C). Through a cyclic series of oxidations in the mitochondrial matrix:
      <br/>- 2 Decarboxylations release 2 CO<sub>2</sub> per turn (4 CO<sub>2</sub> per glucose).
      <br/>- 3 Dehydrogenations reduce NAD<sup>+</sup> &rarr; <b>3 NADH</b> (at Isocitrate, &alpha;-Ketoglutarate, and Malate steps).
      <br/>- 1 Dehydrogenation reduces FAD &rarr; <b>1 FADH<sub>2</sub></b> (at Succinate to Fumarate step via Succinate Dehydrogenase).
      <br/>- 1 Substrate-level phosphorylation yields <b>1 GTP / ATP</b> (at Succinyl-CoA to Succinate).
      <br/>&bull; Total per Glucose (2 turns): <b>6 NADH + 2 FADH<sub>2</sub> + 2 ATP + 4 CO<sub>2</sub></b>.
    </p>
  </div>

  


  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iii) Electron Transport System (ETS), Oxidative Phosphorylation &amp; Chemiosmotic Hypothesis</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Located on the <b>Inner Mitochondrial Membrane</b>:
      <br/>&bull; <b style="color: #00E5FF;">Complex I (NADH Dehydrogenase):</b> Transfers electrons from NADH to Ubiquinone (UQ), pumping 4 H<sup>+</sup> into intermembrane space.
      <br/>&bull; <b style="color: #00E5FF;">Complex II (Succinate Dehydrogenase):</b> Transfers electrons from FADH<sub>2</sub> to UQ (no protons pumped).
      <br/>&bull; <b>Complex III (Cytochrome bc<sub>1</sub>):</b> Transfers electrons from ubiquinol to mobile peripheral protein <b>Cytochrome c</b>, pumping 4 H<sup>+</sup>.
      <br/>&bull; <b style="color: #00E5FF;">Complex IV (Cytochrome c Oxidase):</b> Contains Cytochrome a, a<sub>3</sub> and two copper centers (Cu<sub>A</sub>, Cu<sub>B</sub>); delivers electrons to the terminal electron acceptor <b>Oxygen (O<sub>2</sub>)</b> to form water, pumping 2 H<sup>+</sup>.
      <br/>&bull; <b style="color: #00E5FF;">Chemiosmotic ATP Synthesis:</b> Pumping protons creates a high electrochemical proton gradient in the intermembrane space. Protons flow back into the matrix down their gradient through <b>Complex V (F<sub>0</sub>-F<sub>1</sub> ATP Synthase)</b>: 2 H<sup>+</sup> through F<sub>0</sub> channel activates catalytic rotation of F<sub>1</sub> headpiece to synthesize 1 ATP.
    </p>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iv) ATP Energetics, Amphibolic Pathway &amp; Respiratory Quotient (RQ)</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Theoretical ATP Yield per Glucose:</b> 10 NADH (&times;3 = 30 ATP) + 2 FADH<sub>2</sub> (&times;2 = 4 ATP) + 4 Substrate ATP = <b>38 ATP</b> (or 36 ATP via glycerol-phosphate shuttle in some eukaryotic cells).</li>
      <li><b style="color: #00E5FF;">Amphibolic Pathway:</b> Respiration is not purely catabolic; its intermediates serve as precursors for anabolic syntheses: Acetyl-CoA is drawn off to synthesize fatty acids/terpenes; Succinyl-CoA synthesizes chlorophyll and cytochromes; &alpha;-Ketoglutarate and OAA synthesize amino acids. Hence, respiration is truly <b>Amphibolic</b> (both catabolic and anabolic).</li>
      <li><b style="color: #00E5FF;">Respiratory Quotient (RQ = Volume of CO<sub>2</sub> evolved / Volume of O<sub>2</sub> consumed):</b>
        <br/>- Carbohydrates (Glucose): <b>RQ = 1.0</b> (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O).
        <br/>- Fats (Tripalmitin): <b>RQ = 0.7</b> (2 C<sub>51</sub>H<sub>98</sub>O<sub>6</sub> + 145 O<sub>2</sub> &rarr; 102 CO<sub>2</sub> + 98 H<sub>2</sub>O; 102/145 &approx; 0.7).
        <br/>- Proteins: <b>RQ &approx; 0.9</b>.
        <br/>- Organic Acids (Malic acid): <b>RQ &gt; 1.0 (1.33)</b>.
        <br/>- Anaerobic Respiration: <b>RQ = &infin; (Infinity)</b> (CO<sub>2</sub> evolved without O<sub>2</sub> consumption).
      </li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    Photosynthesis: Historical background; Site of Photosynthesis; Photosynthetic pigments; Mechanism of Photosynthesis – Light dependent phase (Light reaction), Photosystems; Cyclic and non-cyclic photophosphorylations; Light independent (biosynthetic) phase – Calvin (C3) cycle and Hatch &amp; Slack (C4) cycle; Factors affecting photosynthesis; Photorespiration.
  </h2>

  

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Historical Background, Site of Photosynthesis &amp; Photosynthetic Pigments</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Pioneers:</b> Joseph Priestley (1770, bell jar experiment showing plants restore air); Jan Ingenhousz (1779, sunlight is essential); Julius von Sachs (1854, glucose is produced and stored as starch); T.W. Engelmann (1888, first action spectrum of photosynthesis using <i>Cladophora</i> and aerobic bacteria); <b>Cornelius van Niel (1931)</b> demonstrated that O<sub>2</sub> evolved comes from <b>water (H<sub>2</sub>O)</b>, not from CO<sub>2</sub>, later confirmed by Ruben and Kamen (1941) using radioisotope <sup>18</sup>O.</li>
      <li><b style="color: #00E5FF;">Chloroplast Architecture &amp; Pigments:</b>
        <br/>- Grana thylakoids (site of Light Reactions) + Stroma (site of Dark Reactions / Calvin cycle).
        <br/>- <b style="color: #00E5FF;">Chlorophyll a:</b> Bright/blue-green primary reaction center pigment.
        <br/>- <b style="color: #00E5FF;">Accessory Pigments:</b> Chlorophyll b (yellow-green), Xanthophylls (yellow), Carotenoids (yellow-orange); protect chlorophyll a from <b>photo-oxidation</b> and broaden the absorption spectrum.
      </li>
    </ul>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Mechanism of Photosynthesis: Light-Dependent Phase, Photosystems (PS I &amp; PS II), Cyclic &amp; Non-Cyclic Photophosphorylation</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      1. <b style="color: #00E5FF;">Non-Cyclic Photophosphorylation (Z-Scheme):</b>
        <br/>&bull; <b style="color: #00E5FF;">Photolysis of Water (Hill Reaction):</b> 2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + 4e<sup>-</sup> + O<sub>2</sub> (catalyzed by Oxygen Evolving Complex requiring Mn<sup>2+</sup> and Cl<sup>-</sup> on inner lumen face of PS II).
        <br/>&bull; PS II (P680) absorbs 680 nm light; excited electrons pass to Pheophytin &rarr; Plastoquinone (PQ) &rarr; Cytochrome b<sub>6</sub>f complex (pumping H<sup>+</sup> into thylakoid lumen) &rarr; Plastocyanin (PC) &rarr; PS I (P700).
        <br/>&bull; PS I absorbs 700 nm light; excited electrons pass to Ferredoxin &rarr; Ferredoxin-NADP<sup>+</sup> Reductase (FNR) to form <b>NADPH</b> on stroma side.
        <br/>&bull; Produces both <b>ATP and NADPH</b> (Assimilatory Power) along with O<sub>2</sub>.
      <br/>2. <b style="color: #00E5FF;">Cyclic Photophosphorylation:</b>
        <br/>Occurs in stroma lamellae (which lack PS II and NADP reductase). Excited electrons from PS I (P700) circulate back through Cytochrome b<sub>6</sub>f complex, generating <b>ATP only (no NADPH, no O<sub>2</sub>)</b>.
    </p>
  </div>

  

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iii) Light-Independent Phase: Calvin (C3) Cycle, Hatch &amp; Slack (C4) Cycle &amp; Photorespiration</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Calvin Cycle (C<sub>3</sub> Pathway - Melvin Calvin, Nobel Prize 1961):</b>
        <br/>Occurs in stroma of all photosynthetic plants; 3 stages:
        <br/>1. <i>Carboxylation:</i> Primary CO<sub>2</sub> acceptor <b>RuBP (Ribulose-1,5-bisphosphate, 5C)</b> combines with CO<sub>2</sub> via <b>RuBisCO</b> to yield 2 molecules of <b>3-PGA (3-Phosphoglycerate, 3C)</b>.
        <br/>2. <i>Reduction:</i> Uses 2 ATP + 2 NADPH per CO<sub>2</sub> to form Triose phosphate (G3P).
        <br/>3. <i>Regeneration:</i> Uses 1 ATP to regenerate RuBP.
        <br/>&bull; Net for 1 Glucose (6 CO<sub>2</sub>): <b>6 CO<sub>2</sub> + 18 ATP + 12 NADPH &rarr; 1 Glucose + 18 ADP + 12 NADP<sup>+</sup></b>.
      </li>
      <li><b style="color: #00E5FF;">Hatch &amp; Slack Pathway (C<sub>4</sub> Pathway):</b>
        <br/>Adapted to tropical high-temperature regimes (Maize, Sugarcane, Sorghum); exhibits <b>Kranz Anatomy</b>:
        <br/>- Mesophyll cells: Primary CO<sub>2</sub> acceptor is <b>PEP (Phosphoenolpyruvate, 3C)</b> catalyzed by <b>PEPcase</b> (lacks RuBisCO; immune to O<sub>2</sub>). Forms 4C <b>Oxaloacetate (OAA)</b>, reduced to Malate.
        <br/>- Bundle Sheath cells: Malate transported in and decarboxylated to release high concentrations of CO<sub>2</sub> around RuBisCO, ensuring 100% efficiency of the Calvin cycle.
      </li>
    </ul>
  </div>

  


  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(iv) Factors Affecting Photosynthesis</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      <b style="color: #00E5FF;">Blackman's Law of Limiting Factors (F.F. Blackman, 1905):</b> If a chemical process is affected by more than one factor, its rate is determined by the factor which is nearest to its minimal value (limiting factor).
      <br/>- <b style="color: #00E5FF;">Light:</b> Linear rate increase at low intensities; light saturation occurs at 10% of full sunlight; high intensities cause photo-oxidation of chlorophyll.
      <br/>- <b style="color: #00E5FF;">Carbon Dioxide Concentration:</b> Major limiting factor in nature (atmospheric level ~0.04% / 400 ppm); C<sub>4</sub> plants saturate at 360 ppm; C<sub>3</sub> plants saturate at 450 ppm (exploited in greenhouse enrichment of tomatoes/bell peppers).
      <br/>- <b style="color: #00E5FF;">Temperature:</b> Enzymatic reactions are temperature-sensitive; C<sub>4</sub> optimum is 30-40&deg;C; C<sub>3</sub> optimum is 20-25&deg;C.
    </p>
  </div>

  <!-- SECTION 3 -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    Plant Growth and Development: Characteristics of plant growth; phases of growth, growth rate, growth curve; conditions of growth; differentiation, dedifferentiation and redifferentiation
  </h2>

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Characteristics of Plant Growth, Growth Phases &amp; Growth Rates</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">Open Form of Growth:</b> Plant growth is unique because meristems continuously add new cells throughout life (indeterminate growth).</li>
      <li><b style="color: #00E5FF;">Phases of Growth:</b> Meristematic phase (rapid division) &rarr; Elongation phase (vacuolation, cell enlargement) &rarr; Maturation phase (thickened secondary walls, functional specialization).</li>
      <li><b style="color: #00E5FF;">Growth Rates:</b>
        <br/>- <i>Arithmetic Growth:</i> Following mitotic division, only one daughter cell continues to divide while the other differentiates (e.g., root elongation at constant rate): <b>L<sub>t</sub> = L<sub>0</sub> + rt</b> (Linear straight-line graph).
        <br/>- <i>Geometric Growth:</i> Both daughter cells retain the ability to divide, leading to exponential increase: <b>W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup></b> (r = relative growth rate / efficiency index).
      </li>
    </ul>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Growth Curves, Growth Conditions, Differentiation, Dedifferentiation and Redifferentiation</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      &bull; <b style="color: #00E5FF;">Sigmoid (S-shaped) Growth Curve:</b> Characteristic of living organisms growing in natural environments. Displays: <b>Lag Phase</b> (slow initial start) &rarr; <b>Log / Exponential Phase</b> (rapid geometric increase) &rarr; <b>Stationary Phase</b> (nutrient limitation slows growth).
      <br/>&bull; <b style="color: #00E5FF;">Differentiation:</b> Meristematic cells undergo structural maturation to perform specific tasks (e.g., tracheary elements lose protoplasts and deposit lignocellulosic secondary walls).
      <br/>&bull; <b style="color: #00E5FF;">Dedifferentiation:</b> Living differentiated permanent cells regain the capacity of mitotic division under certain conditions (e.g., formation of interfascicular cambium and cork cambium from fully differentiated parenchyma).
      <br/>&bull; <b style="color: #00E5FF;">Redifferentiation:</b> Dedifferentiated meristematic tissues lose division capacity once again to form mature secondary tissues (e.g., secondary xylem, secondary phloem, cork).
    </p>
  </div>

  <!-- SECTION 4 -->
  <h2 style="color: #00E5FF; border-bottom: 2px solid #00E5FF; padding-bottom: 6px; margin-top: 35px; font-size: 20px;">
    Sequence of developmental process in a plant cell; Plant growth regulators; Discovery and physiological effects of Auxins, Gibberellins, Cytokinins, Ethylene and Abscissic Acid
  </h2>

  

  <h3 style="color: #00E5FF; margin-top: 18px; font-size: 16.5px;">(i) Sequence of Developmental Process in a Plant Cell &amp; PGR Classification</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <p style="margin: 0; line-height: 1.8;">
      Development is the sum of growth and differentiation:
      <br/><span style="font-weight: bold; color: #FFFFFF;">
        Meristematic Cell &rarr; Plasmatic Growth &rarr; Cell Division &rarr; Cell Expansion &rarr; Differentiation &rarr; Maturation &rarr; Senescence &rarr; Death.
      </span>
      <br/>- <b style="color: #00E5FF;">Plasticity:</b> Plants follow different pathways in response to environment to form different structures (e.g., <b>Heterophylly</b> in Cotton, Coriander, and <i>Ranunculus</i> / Buttercup where submerged leaves are dissected and aerial leaves are lobed).
    </p>
  </div>

  <h3 style="color: #00E5FF; margin-top: 22px; font-size: 16.5px;">(ii) Discovery, Physiological Effects &amp; Applications of 5 Master PGRs</h3>
  <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(0, 229, 255, 0.25); border-radius: 10px; padding: 14px 18px; margin: 16px 0;">
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: #00E5FF;">1. Auxins (Charles &amp; Francis Darwin, F.W. Went 1928):</b>
        <br/>- Natural: Indole-3-acetic acid (IAA), IBA. Synthetic: NAA, 2,4-D.
        <br/>- <b style="color: #00E5FF;">Apical Dominance:</b> Growing apical bud inhibits lateral axillary buds; decapitation promotes bushy branching (tea plantations).
        <br/>- Initiates rooting in stem cuttings; promotes parthenocarpy in tomatoes; <b>2,4-D acts as selective weedicide</b> killing broad-leaved dicot weeds.
      </li>
      <li><b style="color: #00E5FF;">2. Gibberellins (E. Kurosawa 1926, Bakanae / Foolish Seedling disease):</b>
        <br/>- Over 100 GAs known; GA<sub>3</sub> is most studied.
        <br/>- Causes <b>Bolting</b> (internode elongation prior to flowering) in rosette plants (Cabbage, Beet).
        <br/>- Increases length of grape stalks; extends sugarcane stems (yield +20 tonnes/acre); speeds up malting in brewing.
      </li>
      <li><b style="color: #00E5FF;">3. Cytokinins (Skoog &amp; Miller 1955, Kinetin):</b>
        <br/>- Discovered from autoclaved herring sperm DNA; natural form is <b>Zeatin</b> (from corn kernels).
        <br/>- Promotes cell division; overcomes apical dominance; delays leaf senescence (<b>Richmond-Lang Effect</b>).
      </li>
      <li><b style="color: #00E5FF;">4. Ethylene (Cousins 1910):</b>
        <br/>- Only gaseous hormone; synthesized in ripening fruits and senescent organs.
        <br/>- Promotes <b>Fruit Ripening</b> (triggers respiratory climacteric burst); breaks seed/bud dormancy; commercially applied as <b>Ethephon</b>.
      </li>
      <li><b style="color: #00E5FF;">5. Abscisic Acid (ABA - Stress Hormone):</b>
        <br/>- General plant growth inhibitor; induces <b>Stomatal Closure</b> during drought stress by stimulating K<sup>+</sup> efflux from guard cells; promotes seed dormancy and winter bud rest.
      </li>
    </ul>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(0, 96, 100, 0.85)); border: 2px solid #00E5FF; border-radius: 12px; padding: 20px; margin-top: 35px; box-shadow: 0 6px 25px rgba(0,0,0,0.4);">
    <h3 style="color: #00E5FF; margin: 0 0 14px 0; font-size: 18px; text-align: center; font-weight: bold;">
      ⚡ Master Chapter 4 Plant Physiology Cheat Sheet
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px;">
        <thead>
          <tr style="background: rgba(0, 229, 255, 0.25); color: #00E5FF; font-weight: bold;">
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Physiological Pathway / Hormone</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Cellular Site &amp; Primary Substrates</th>
            <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Key Products &amp; Physiological Milestone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Glycolysis (EMP):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cytosol (Glucose &rarr; 2 Pyruvate)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">2 Pyruvate + 2 ATP (net) + 2 NADH</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Krebs Cycle (TCA):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Mitochondrial Matrix (2 Acetyl-CoA + OAA)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">6 NADH + 2 FADH<sub>2</sub> + 2 ATP + 4 CO<sub>2</sub></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">ETS &amp; Chemiosmosis:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Inner Mitochondrial Membrane (Complex I-V)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">34 ATP via proton motive force down F<sub>0</sub>-F<sub>1</sub></td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Light Reactions (Z-Scheme):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Grana Thylakoids (PS II P680 + PS I P700)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">ATP + NADPH + O<sub>2</sub> (Photolysis of H<sub>2</sub>O)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Calvin (C3) Cycle:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Chloroplast Stroma (RuBP + CO<sub>2</sub> via RuBisCO)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">1 Glucose (uses 18 ATP + 12 NADPH per 6 CO<sub>2</sub>)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Hatch &amp; Slack (C4):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Mesophyll (PEPcase) + Bundle Sheath (RuBisCO)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Zero photorespiration; high water-use efficiency</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Photorespiration (C2):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Chloroplast &rarr; Peroxisome &rarr; Mitochondria</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Wastes 25% carbon; NO ATP or NADPH produced</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Auxins:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Shoot Apices (IAA, IBA, NAA, 2,4-D)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Apical dominance, root initiation, 2,4-D weedicide</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Gibberellins (GA):</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Young leaves &amp; seeds (GA<sub>3</sub>)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Bolting in rosette plants, sugarcane stem lengthening</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Cytokinins:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Root tips &amp; developing seeds (Kinetin, Zeatin)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Cell division, delay senescence (Richmond-Lang)</td>
          </tr>
          <tr>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);"><b style="color: #00E5FF;">Ethylene &amp; ABA:</b></td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Ripening tissues (Ethylene); Stressed leaves (ABA)</td>
            <td style="padding: 7px 10px; border: 1px solid rgba(255,255,255,0.1);">Fruit ripening (climacteric); Stomatal closure &amp; dormancy</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>`;

export const c11Bot4HtmlSolutions = `<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9; line-height: 1.7; font-size: 15px; padding: 4px 6px;">

  <!-- SECTION A -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 151, 167, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION A: Very Short Answer (VSA) Questions (1 Mark Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q1 to Q40 &bull; Respiration Energetics, Photosystems, Calvin Cycle Inputs, Growth Kinetics &amp; 5 Master PGRs</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q1: Define Cellular Respiration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      An enzyme-mediated catabolic exergonic process where organic food substrates are oxidized to release metabolic energy trapped as ATP.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q2: Where does Glycolysis take place inside the cell?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the Cytoplasm (Cytosol).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q3: What is the net yield of ATP in Glycolysis per molecule of glucose?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      2 ATP molecules.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q4: Name the end product of Glycolysis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Pyruvic acid (Pyruvate).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q5: Name the pacemaker enzyme of Glycolysis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Phosphofructokinase (PFK).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q6: What is the connecting link between Glycolysis and Krebs cycle?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Acetyl-CoA.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q7: Where does the Krebs Cycle occur in eukaryotic cells?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the Mitochondrial Matrix.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q8: Name the first stable compound formed in the Krebs Cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Citric acid (Citrate, 6C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q9: Name the enzyme of Krebs cycle located in the inner mitochondrial membrane rather than matrix.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Succinate Dehydrogenase (Complex II of ETS).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q10: What is the terminal electron acceptor in Aerobic Respiration?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Molecular Oxygen (O<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q11: Who proposed the Chemiosmotic Hypothesis of ATP synthesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Peter Mitchell (1961, Nobel Prize 1978).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q12: How many ATP molecules are theoretically produced from the complete oxidation of one glucose molecule?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      36 to 38 ATP.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q13: Define Respiratory Quotient (RQ).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The ratio of the volume of CO<sub>2</sub> evolved to the volume of O<sub>2</sub> consumed in respiration (RQ = CO<sub>2</sub> / O<sub>2</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q14: What is the RQ value for Glucose (Carbohydrates)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1.0.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q15: What is the RQ value for Fats (Tripalmitin)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      0.7.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q16: What is the RQ value in Anaerobic respiration?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Infinity (&infin;), because CO<sub>2</sub> is produced without consuming any O<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q17: Why is the respiratory pathway called an Amphibolic pathway?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Because its intermediates are utilized in both catabolic (breakdown) and anabolic (synthetic) reactions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q18: Who proved that oxygen released during photosynthesis comes from water (H2O)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cornelius van Niel (1931), confirmed by Ruben and Kamen using <sup>18</sup>O.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q19: Name the primary reaction center pigment of Photosystem I and Photosystem II.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      P700 for PS I and P680 for PS II.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q20: What is the site of the Light Reactions of photosynthesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Thylakoid membranes (Grana) of chloroplasts.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q21: What mineral ions are required for the Photolysis of water in PS II?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Manganese (Mn<sup>2+</sup>) and Chloride (Cl<sup>-</sup>) ions.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q22: What are the products of the Light Reactions (Assimilatory Power)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ATP, NADPH, and O<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q23: Where does Cyclic Photophosphorylation take place?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In the Stroma Lamellae (which lack PS II and NADP reductase).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q24: Name the primary CO2 acceptor molecule in C3 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      RuBP (Ribulose-1,5-bisphosphate, 5C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q25: Name the primary CO2 acceptor molecule in C4 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      PEP (Phosphoenolpyruvate, 3C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q26: Name the first stable product of the Calvin (C3) Cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      3-PGA (3-Phosphoglyceric acid, 3C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q27: Name the first stable product of the Hatch & Slack (C4) Pathway.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      OAA (Oxaloacetic acid, 4C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q28: What is Kranz Anatomy?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Specialized leaf anatomy in C<sub>4</sub> plants with large bundle sheath cells containing agranal chloroplasts surrounded by mesophyll cells.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q29: Name two C4 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Maize (<i>Zea mays</i>) and Sugarcane (<i>Saccharum officinarum</i>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q30: What is Photorespiration (C2 cycle)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      A wasteful light-induced respiratory process where RuBisCO fixes O<sub>2</sub> instead of CO<sub>2</sub>, releasing CO<sub>2</sub> without ATP yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q31: State Blackman's Law of Limiting Factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      When a process is conditioned by several factors, its rate is limited by the pace of the slowest factor nearest to its minimum.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q32: What is the mathematical expression for Arithmetic Growth?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      L<sub>t</sub> = L<sub>0</sub> + rt.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q33: What is the mathematical expression for Geometric Growth?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q34: What shape of growth curve is obtained in natural environments?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Sigmoid (S-shaped) growth curve.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q35: Define Plasticity in plants with an example.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The ability of a plant to alter its morphology in response to environment (e.g., Heterophylly in Cotton and Buttercup).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q36: Name the hormone responsible for Apical Dominance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Auxin (IAA).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q37: Name the synthetic auxin widely used as a selective weedicide for broad-leaved dicot weeds.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      2,4-D (2,4-Dichlorophenoxyacetic acid).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q38: Which plant hormone causes 'Bolting' (rapid stem elongation) in rosette plants like cabbage?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Gibberellin (GA<sub>3</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q39: Which hormone delays leaf senescence (Richmond-Lang Effect)?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cytokinin.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q40: Name the only gaseous plant hormone that promotes fruit ripening.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ethylene.
    </div>
  </div>

  <!-- SECTION B -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 151, 167, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION B: Short Answer (SA) Questions (2 &amp; 3 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q41 to Q80 &bull; Krebs Cycle Reactions, Chemiosmotic ATP Generation, C3 vs C4 Pathways, Photorespiration &amp; Hormone Actions</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q41: Explain the three phases of Glycolysis (EMP Pathway) with net ATP accounting.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Phosphorylation / Energy-Investment Phase:</b> Glucose is phosphorylated twice (using 2 ATP) to form Fructose-1,6-bisphosphate.<br/>2. <b style="color: #00E5FF;">Cleavage Phase:</b> Fructose-1,6-bisphosphate is cleaved into two 3-carbon triose isomers: PGAL and DHAP.<br/>3. <b style="color: #00E5FF;">Energy-Generation Phase:</b> Both PGAL molecules are oxidized, producing <b>2 NADH + 2 H<sup>+</sup></b> and generating <b>4 ATP</b> via substrate-level phosphorylation.<br/>&bull; Net Yield: <b>4 ATP (gross) - 2 ATP (invested) = 2 ATP (net) + 2 NADH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q42: Describe the Link Reaction (Oxidative Decarboxylation of Pyruvate).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Occurs in the mitochondrial matrix connecting glycolysis with the citric acid cycle. Catalyzed by the multi-enzyme <i>Pyruvate Dehydrogenase complex</i> requiring TPP, lipoic acid, CoA, Mg<sup>2+</sup>, and NAD<sup>+</sup>:<br/><b>2 Pyruvate (3C) + 2 CoA + 2 NAD<sup>+</sup> &rarr; 2 Acetyl-CoA (2C) + 2 CO<sub>2</sub> + 2 NADH + 2 H<sup>+</sup></b>.<br/>The 2-carbon Acetyl-CoA directly fuels the Krebs cycle, while the 2 NADH generate 6 ATP in the electron transport chain.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q43: Explain the Krebs Cycle and list the decarboxylation and dehydrogenation steps.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Decarboxylation Steps (Loss of CO<sub>2</sub>):</b><br/>(a) Oxalosuccinate &rarr; &alpha;-Ketoglutarate + CO<sub>2</sub>.<br/>(b) &alpha;-Ketoglutarate &rarr; Succinyl-CoA + CO<sub>2</sub>.<br/>2. <b style="color: #00E5FF;">Dehydrogenation Steps (Formation of Reduced Coenzymes):</b><br/>(a) Isocitrate &rarr; Oxalosuccinate (+ 1 NADH).<br/>(b) &alpha;-Ketoglutarate &rarr; Succinyl-CoA (+ 1 NADH).<br/>(c) Succinate &rarr; Fumarate (+ <b>1 FADH<sub>2</sub></b> via Succinate Dehydrogenase).<br/>(d) Malate &rarr; Oxaloacetate (+ 1 NADH).<br/>Per turn yields: <b>3 NADH + 1 FADH<sub>2</sub> + 1 ATP/GTP + 2 CO<sub>2</sub></b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q44: Explain the Chemiosmotic Hypothesis of ATP generation in Mitochondria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Proposed by Peter Mitchell (1961):<br/>1. As electrons flow through ETS Complexes I, III, and IV, free energy drives active pumping of protons (H<sup>+</sup>) from the matrix into the <b>Intermembrane Space</b>.<br/>2. This generates a steep <b>Electrochemical Proton Gradient (&Delta;&mu;H<sup>+</sup>)</b> and proton motive force across the impermeable inner membrane.<br/>3. Protons re-enter the matrix down their gradient through the transmembrane channel of <b>F<sub>0</sub></b> in ATP Synthase.<br/>4. The proton flow drives rotational conformational changes in the <b>F<sub>1</sub> catalytic headpiece</b>, synthesizing ATP from ADP + Pi.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q45: Explain why the respiratory pathway is regarded as Amphibolic rather than purely Catabolic.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Respiration involves the catabolic breakdown of carbohydrates, fats, and proteins to release energy. However, its organic intermediates are routinely withdrawn to serve as crucial starting building blocks for anabolic biosynthetic pathways:<br/>- <i>Acetyl-CoA:</i> Precursor for the synthesis of fatty acids, cutin, and carotenoids.<br/>- <i>Succinyl-CoA:</i> Precursor for chlorophyll and cytochrome porphyrin rings.<br/>- <i>Oxaloacetate &amp; &alpha;-Ketoglutarate:</i> Precursors for amino acid syntheses.<br/>Because it serves both breakdown and synthetic roles, it is strictly <b>Amphibolic</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q46: Differentiate between Cyclic and Non-Cyclic Photophosphorylation in four major aspects.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Photosystems Involved:</b> Non-cyclic uses both PS II (P680) and PS I (P700); Cyclic uses <b>only PS I</b>.<br/>2. <b style="color: #00E5FF;">Photolysis of Water:</b> Non-cyclic involves water splitting and O<sub>2</sub> evolution; Cyclic does not split water or evolve O<sub>2</sub>.<br/>3. <b style="color: #00E5FF;">End Products:</b> Non-cyclic produces both <b>ATP and NADPH</b>; Cyclic produces <b>ATP only</b>.<br/>4. <b style="color: #00E5FF;">Electron Flow:</b> Non-cyclic is unidirectional (Z-scheme); Cyclic circulates electrons back to PS I.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q47: Describe the Z-scheme of Light Reactions in photosynthesis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. Photons hit PS II (P680); excited electrons are captured by primary acceptor Pheophytin.<br/>2. Electrons pass down an electron transport chain: Plastoquinone (PQ) &rarr; Cytochrome b<sub>6</sub>f &rarr; Plastocyanin (PC), pumping H<sup>+</sup> into thylakoid lumen to generate ATP.<br/>3. The electron-deficient PS II oxidizes water via the Oxygen Evolving Complex, releasing O<sub>2</sub> and 4 H<sup>+</sup>.<br/>4. Plastocyanin delivers electrons to PS I (P700). PS I absorbs light and ejects electrons to Ferredoxin (Fd), which reduces NADP<sup>+</sup> to <b>NADPH</b> via FNR.<br/>5. Plotted on redox potential scale, the energy trajectory forms a characteristic <b>'Z' pattern</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q48: Explain the three phases of the Calvin Cycle (C3 Pathway).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Carboxylation:</b> Fixation of CO<sub>2</sub> into a stable organic intermediate. RuBP (5C) reacts with CO<sub>2</sub> catalyzed by <b>RuBisCO</b> to produce two molecules of 3-PGA (3C).<br/>2. <b style="color: #00E5FF;">Reduction:</b> A series of reactions using <b>2 ATP and 2 NADPH per CO<sub>2</sub></b> to reduce 3-PGA into Triose phosphate (G3P) for glucose synthesis.<br/>3. <b style="color: #00E5FF;">Regeneration:</b> Continuous cycle requires regeneration of the CO<sub>2</sub> acceptor RuBP, consuming <b>1 ATP per CO<sub>2</sub></b>.<br/>Total per CO<sub>2</sub>: <b>3 ATP + 2 NADPH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q49: Explain Kranz Anatomy and its significance in C4 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Kranz ('wreath') anatomy is a specialized dual-cell leaf architecture in C<sub>4</sub> plants (Maize, Sugarcane):<br/>1. Large, thick-walled <b>Bundle Sheath Cells</b> form concentric rings around vascular bundles. They possess agranal chloroplasts rich in RuBisCO but lack PS II (preventing internal O<sub>2</sub> evolution).<br/>2. Surrounding <b>Mesophyll Cells</b> possess normal granal chloroplasts rich in <b>PEPcase</b> but lack RuBisCO.<br/><b style="color: #00E5FF;">Significance:</b> PEPcase traps CO<sub>2</sub> efficiently without binding O<sub>2</sub>. Malate delivers high CO<sub>2</sub> directly into bundle sheath cells around RuBisCO, <b>completely suppressing photorespiration</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q50: Explain Photorespiration (C2 Cycle) and why it is absent in C4 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      RuBisCO possesses bifunctional catalytic activity (Carboxylase and Oxygenase). In C<sub>3</sub> plants under high temperature and high O<sub>2</sub>:low CO<sub>2</sub> ratios, RuBisCO binds O<sub>2</sub>, producing 1 molecule of 3-PGA (3C) and 1 molecule of <b>Phosphoglycolate (2C)</b>. Phosphoglycolate undergoes metabolic recycling through <b>Chloroplast &rarr; Peroxisome &rarr; Mitochondria</b>, releasing CO<sub>2</sub> and wasting 25% of fixed carbon with <b>zero ATP or NADPH generation</b>.<br/>In C<sub>4</sub> plants, photorespiration is absent because Kranz anatomy pumps high CO<sub>2</sub> around RuBisCO, ensuring it operates exclusively as a carboxylase.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q51: Differentiate between C3 Plants and C4 Plants in four fundamental characteristics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Kranz Anatomy:</b> Absent in C<sub>3</sub> plants; present in C<sub>4</sub> plants.<br/>2. <b style="color: #00E5FF;">Primary CO<sub>2</sub> Acceptor:</b> RuBP (5C) in C<sub>3</sub>; PEP (3C) in C<sub>4</sub>.<br/>3. <b style="color: #00E5FF;">First Stable Product:</b> 3-PGA (3C) in C<sub>3</sub>; Oxaloacetate (4C) in C<sub>4</sub>.<br/>4. <b style="color: #00E5FF;">Photorespiration:</b> High in C<sub>3</sub> (reduces productivity); completely absent in C<sub>4</sub> (higher photosynthetic yield).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q52: Explain the factors affecting Photosynthesis according to Blackman's Law of Limiting Factors.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Light:</b> Light intensity increases rate linearly at low levels; light saturation occurs at ~10% of full sunlight. High light intensity causes photo-oxidation of chlorophyll.<br/>2. <b style="color: #00E5FF;">Carbon Dioxide:</b> Major limiting factor in nature (current level 0.04% / 400 ppm). Increasing CO<sub>2</sub> up to 0.05% increases photosynthetic productivity (utilized in greenhouse crops).<br/>3. <b style="color: #00E5FF;">Temperature:</b> Enzymatic dark reactions are temperature-dependent. C<sub>4</sub> plants have higher optimum (30-40&deg;C); C<sub>3</sub> plants have lower optimum (20-25&deg;C).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q53: Explain Arithmetic Growth vs Geometric Growth with mathematical formulas and graphical curves.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Arithmetic Growth:</b> One daughter cell divides while the other differentiates. Formula: <b>L<sub>t</sub> = L<sub>0</sub> + rt</b> (where L<sub>t</sub> = length at time t, r = growth rate). Yields a <b>linear straight-line graph</b> (e.g., root elongation).<br/>2. <b style="color: #00E5FF;">Geometric Growth:</b> Both daughter cells retain mitotic division ability. Formula: <b>W<sub>1</sub> = W<sub>0</sub> e<sup>rt</sup></b> (where W<sub>1</sub> = final weight, r = relative growth rate). Yields a classic <b>Sigmoid (S-shaped) curve</b> with lag, log, and stationary phases.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q54: Define Differentiation, Dedifferentiation, and Redifferentiation with botanical examples.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Differentiation:</b> Meristematic cells undergo biochemical maturation to perform specialized tasks (e.g., parenchyma cells losing division to become tracheids with lignified walls).<br/>2. <b style="color: #00E5FF;">Dedifferentiation:</b> Differentiated permanent cells regain active mitotic division capacity under specific signals (e.g., cortical parenchyma becoming <b>cork cambium</b> or medullary rays forming <b>interfascicular cambium</b>).<br/>3. <b style="color: #00E5FF;">Redifferentiation:</b> Meristematic cells produced by dedifferentiation lose division capacity once again to form permanent secondary tissues (e.g., secondary xylem, cork).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q55: Describe the discovery and physiological effects of Auxins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Discovery:</b> Charles and Francis Darwin observed canary grass coleoptile phototropism; F.W. Went (1928) isolated Auxin from oat (<i>Avena</i>) coleoptile tips using agar blocks.<br/>2. <b style="color: #00E5FF;">Physiological Effects:</b><br/>&bull; Promotes <b>Apical Dominance</b> (suppresses lateral buds).<br/>&bull; Initiates rooting in woody stem cuttings in horticulture.<br/>&bull; Induces parthenocarpy in tomatoes.<br/>&bull; Synthetic 2,4-D acts as a selective herbicide killing dicot weeds.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q56: Describe the discovery and physiological effects of Gibberellins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Discovery:</b> E. Kurosawa (1926) identified active substance from fungus <i>Gibberella fujikuroi</i> causing 'Bakanae' (foolish seedling) disease in rice.<br/>2. <b style="color: #00E5FF;">Physiological Effects:</b><br/>&bull; Causes <b>Bolting</b> (rapid internode elongation prior to flowering) in rosette plants (cabbage, beet).<br/>&bull; Lengthens stalks of seedless grapes and extends sugarcane stems.<br/>&bull; Accelerates &alpha;-amylase production during barley malting in brewing.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q57: Describe the discovery and physiological effects of Cytokinins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Discovery:</b> Skoog and Miller (1955) identified Kinetin (modified adenine) from autoclaved herring sperm DNA; Letham isolated natural Zeatin from corn endosperm.<br/>2. <b style="color: #00E5FF;">Physiological Effects:</b><br/>&bull; Promotes active <b>Cell Division (Cytokinesis)</b> in tissue culture alongside auxin.<br/>&bull; Overcomes apical dominance, stimulating lateral bud growth.<br/>&bull; Delays leaf senescence by mobilizing nutrients (<b>Richmond-Lang Effect</b>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q58: Describe the physiological effects and agricultural applications of Ethylene.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Ethylene is the only natural gaseous plant hormone:<br/>1. <b style="color: #00E5FF;">Fruit Ripening:</b> Promotes rapid ripening accompanied by a respiratory burst (climacteric) in bananas, apples, and tomatoes.<br/>2. <b style="color: #00E5FF;">Abscission &amp; Senescence:</b> Accelerates leaf, flower, and fruit abscission.<br/>3. <b style="color: #00E5FF;">Agricultural Use (Ethephon):</b> Aqueous Ethephon releases ethylene inside plant tissues, promoting uniform fruit ripening and female flower induction in cucumbers.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q59: Explain why Abscisic Acid (ABA) is called the 'Stress Hormone'.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      ABA is synthesized rapidly in response to environmental stresses (drought, salinity, extreme cold):<br/>1. <b style="color: #00E5FF;">Stomatal Closure:</b> During water deficit, ABA signals guard cells to rapidly efflux K<sup>+</sup> and Cl<sup>-</sup> ions, leading to endosmotic water loss and instant stomatal closure to prevent dehydration.<br/>2. <b style="color: #00E5FF;">Seed Dormancy:</b> Inhibits precocious seed germination and induces seed dormancy, ensuring seeds survive harsh winter conditions before germinating in spring.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q60: Explain the concept of Photoperiodism and classify plants based on photoperiodic responses.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Photoperiodism is the physiological response of plants to the relative lengths of light (day) and dark (night) periods regarding flowering (Garner &amp; Allard, 1920):<br/>1. <b style="color: #00E5FF;">Short Day Plants (SDPs):</b> Flower when day length is shorter than a critical photoperiod (require uninterrupted long nights; e.g., Soybean, Tobacco, Chrysanthemum).<br/>2. <b style="color: #00E5FF;">Long Day Plants (LDPs):</b> Flower when day length exceeds a critical photoperiod (e.g., Wheat, Radish, Spinach).<br/>3. <b style="color: #00E5FF;">Day Neutral Plants (DNPs):</b> Flowering is independent of photoperiod (e.g., Tomato, Sunflower, Maize).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q61: What is Vernalization? Explain its agricultural significance.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Vernalization is the quantitative or qualitative promotion of flowering by a period of low-temperature (chilling at 1-6&deg;C) treatment during seed germination or early seedling growth.<br/><b style="color: #00E5FF;">Significance:</b><br/>1. Prevents precocious reproductive development late in the growing season until winter has passed.<br/>2. Enables winter varieties of crops (e.g., winter wheat) to be converted into spring varieties, shortening vegetative period and increasing crop yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q62: Explain the mechanism of ATP synthesis by F0-F1 particles in mitochondria and chloroplasts.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The F<sub>0</sub>-F<sub>1</sub> ATP Synthase consists of:<br/>1. <b style="color: #00E5FF;">F<sub>0</sub> Subunit:</b> Hydrophobic transmembrane proton channel embedded in the membrane.<br/>2. <b style="color: #00E5FF;">F<sub>1</sub> Subunit:</b> Hydrophilic spherical headpiece protruding into the matrix/stroma containing catalytic sites for ATP synthesis.<br/><i>Mechanism:</i> Protons driven by electrochemical gradient flow through F<sub>0</sub>, rotating the central &gamma;-stalk. This mechanical rotation induces conformational cycles in the three &alpha;&beta; dimers of F<sub>1</sub> (Open &rarr; Loose &rarr; Tight), synthesizing ATP from ADP + Pi.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q63: Explain the physiological role of Water in photosynthesis and cellular respiration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">In Photosynthesis:</b> Water serves as the universal electron and proton donor; photolysis of H<sub>2</sub>O in PS II replaces electrons lost by P680 and evolves O<sub>2</sub>.<br/>2. <b style="color: #00E5FF;">In Respiration:</b> Water is the ultimate byproduct formed when oxygen accepts terminal electrons and protons in Complex IV; water is also consumed in Krebs cycle hydration steps (e.g., fumarate to malate).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q64: Differentiate between Aerobic Respiration and Fermentation in three major points.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Oxygen Requirement:</b> Aerobic requires continuous O<sub>2</sub>; Fermentation occurs in the strict absence of O<sub>2</sub>.<br/>2. <b style="color: #00E5FF;">Oxidation Degree:</b> Aerobic completely oxidizes glucose into inorganic CO<sub>2</sub> and H<sub>2</sub>O; Fermentation incompletely degrades glucose into organic ethanol or lactic acid.<br/>3. <b style="color: #00E5FF;">Energy Yield:</b> Aerobic yields 36-38 ATP per glucose (~40% efficiency); Fermentation yields only <b>2 ATP per glucose (&lt;7% efficiency)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q65: Explain why RuBisCO is described as the most abundant enzyme on Earth.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase) constitutes <b>up to 40-50% of total soluble protein in green leaves</b>. It is universally present in all photosynthetic autotrophs (algae, C<sub>3</sub>, C<sub>4</sub>, CAM plants, cyanobacteria) and catalyzes the primary carbon fixation reaction responsible for almost all biological life on Earth.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q66: What is Plastochron? Explain its developmental significance in plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Plastochron is the time interval between the initiation of two successive leaf primordia at the shoot apical meristem. It serves as an objective morphological time unit measuring plant developmental stages independent of chronological calendar time.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q67: Explain the role of Phycobilins in photosynthetic light harvesting.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Phycobilins (Phycocyanin, Phycoerythrin, Allophycocyanin) are water-soluble accessory photosynthetic bile pigments organized into complexes called <b>Phycobilisomes</b> on thylakoids of Red Algae and Cyanobacteria. They absorb green, yellow, and orange light wavelengths not absorbed by chlorophyll a and transfer excitation energy with &gt;90% quantum efficiency to chlorophyll a.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q68: Explain the difference between Absolute Growth Rate and Relative Growth Rate.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Absolute Growth Rate (AGR):</b> The measurement and comparison of total growth per unit time: AGR = (L<sub>2</sub> - L<sub>1</sub>) / (t<sub>2</sub> - t<sub>1</sub>).<br/>2. <b style="color: #00E5FF;">Relative Growth Rate (RGR):</b> The growth per unit time expressed per unit of initial parameter (efficiency index): RGR = (ln W<sub>2</sub> - ln W<sub>1</sub>) / (t<sub>2</sub> - t<sub>1</sub>).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q69: What is the role of Manganese and Chlorine in Photosynthesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Manganese (Mn<sup>2+</sup>) and Chlorine (Cl<sup>-</sup>) are essential inorganic cofactors of the <b>Oxygen Evolving Complex (Water-Splitting Complex)</b> associated with Photosystem II. Four manganese ions undergo cyclical oxidations (S-states S<sub>0</sub> to S<sub>4</sub>) to catalyze the 4-electron photolysis: 2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + 4e<sup>-</sup> + O<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q70: Explain the term 'Respiratory Climacteric' during fruit ripening.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Respiratory climacteric is a sharp, dramatic spike in cellular respiration rate (accompanied by huge oxygen uptake and ethylene release) that occurs during the ripening of climacteric fruits (e.g., Apple, Banana, Mango, Tomato), triggering color changes, starch breakdown to sugars, and fruit softening.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q71: Explain how high temperatures affect Photosynthesis in C3 plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In C<sub>3</sub> plants, elevated temperatures (&gt;30&deg;C):<br/>1. Decrease the solubility of CO<sub>2</sub> in water relative to O<sub>2</sub>.<br/>2. Alter the active site conformation of RuBisCO, significantly increasing its affinity for O<sub>2</sub> (oxygenase activity).<br/>3. Drastically increases the rate of wasteful <b>Photorespiration</b>, dropping net carbon assimilation by 30-50%.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q72: Explain the difference between Substrate-Level Phosphorylation and Oxidative Phosphorylation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Substrate-Level Phosphorylation:</b> Direct enzymatic transfer of a high-energy phosphate group from a phosphorylated metabolic intermediate to ADP to synthesize ATP (occurs in Glycolysis and Krebs cycle without ETS).<br/>2. <b style="color: #00E5FF;">Oxidative Phosphorylation:</b> Synthesis of ATP from ADP + Pi driven by an electrochemical proton gradient generated during electron transfer to O<sub>2</sub> in the ETS.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q73: Explain the role of Potassium (K+) ions in stomatal movements.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      According to Levitt's active K<sup>+</sup> transport hypothesis, light induces active extrusion of H<sup>+</sup> ions from guard cells. Potassium (K<sup>+</sup>) and Cl<sup>-</sup> ions rapidly flow into the guard cells to balance internal malate anions. This substantial osmotic ion accumulation lowers water potential, drawing water in by endosmosis, causing the guard cells to become turgid and the stomatal pore to open.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q74: Explain why the ETS is located in the inner mitochondrial membrane rather than the outer membrane.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The inner mitochondrial membrane is extensively folded into <b>Cristae</b> to increase surface area for thousands of electron transport complexes and F<sub>0</sub>-F<sub>1</sub> ATP synthases. Crucially, the inner membrane is <b>strictly impermeable to protons (H<sup>+</sup>)</b>, allowing the maintenance of a high electrochemical proton gradient; the outer membrane contains large porins and is freely permeable.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q75: What is the Compensation Point in Photosynthesis?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      The compensation point is the specific light intensity or CO<sub>2</sub> concentration at which the rate of photosynthetic carbon fixation exactly equals the rate of respiratory carbon release (Net gas exchange = 0).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q76: Explain the role of Auxin in Herbicidal weed control (2,4-D).</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Synthetic auxins like 2,4-D (2,4-Dichlorophenoxyacetic acid) are widely used as selective herbicides in monocot cereal crops (wheat, rice). Because dicotyledonous broad-leaved weeds absorb and translocate 2,4-D rapidly, it triggers uncontrolled, abnormal cellular proliferation, vascular occlusion, and rapid death of the weeds without harming monocot grass crops.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q77: What is Decapitation? Why is it practiced in tea plantations and hedge making?</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Decapitation is the mechanical removal of the shoot apical bud. Removing the shoot apex eliminates the primary source of <b>Auxin</b>, releasing lateral axillary buds from apical dominance. Lateral buds sprout profusely into dense, bushy branches, vastly increasing harvestable tea leaf yield.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q78: Explain the difference between Short Day Plants and Long Day Plants.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Short Day Plants (SDPs):</b> Flower only when the light period is shorter than a critical duration and the dark period is longer than a critical uninterrupted duration (e.g., Soybean, Chrysanthemum).<br/>2. <b style="color: #00E5FF;">Long Day Plants (LDPs):</b> Flower only when exposed to light periods exceeding a critical duration (e.g., Spinach, Wheat, Radish).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q79: Explain the role of Cytochrome c in cellular respiration and apoptosis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Cytochrome c is a small, water-soluble mobile peripheral hemeprotein loosely attached to the outer surface of the inner mitochondrial membrane. It shuttles single electrons between Complex III (Cyt bc<sub>1</sub>) and Complex IV (Cyt c oxidase). In damaged or stressed cells, its release from mitochondria into the cytosol triggers programmed cell death (apoptosis).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q80: Explain why anaerobic respiration yields very little energy compared to aerobic respiration.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      In anaerobic respiration (fermentation), glucose is only partially degraded into organic compounds (ethanol or lactate) where most chemical bond energy remains trapped. Furthermore, electrons from NADH are discarded onto pyruvate derivatives rather than flowing through the ETS to generate ATP via chemiosmosis, yielding only 2 ATP per glucose.
    </div>
  </div>

  <!-- SECTION C -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 151, 167, 0.15)); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 12px; padding: 16px 20px; margin: 35px 0 24px 0;">
    <h2 style="color: #00E5FF; margin: 0 0 6px 0; font-size: 18.5px; font-weight: bold;">
      SECTION C: Long Answer (LA) Questions (5 Marks Each)
    </h2>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">Questions Q81 to Q100 &bull; Complete Biochemical Reaction Proofs, Z-Scheme Details, 38-ATP Energetics &amp; Master Plant Physiology Synthesis Matrix</p>
  </div>
  
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q81: Discuss Glycolysis (EMP Pathway) in complete biochemical depth: All 10 Enzymatic Steps, Regulatory Pacemaker Reactions, and Energetics.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Historical Discovery:</b> Gustav Embden, Otto Meyerhof, and Jakub Parnas (1930). Universal cytosolic sequence degrading 1 glucose (6C) into 2 pyruvates (3C).<br/><br/><b style="color: #00E5FF;">2. The 10 Enzymatic Reactions:</b><br/>&bull; <i>Step 1:</i> Glucose + ATP &rarr; Glucose-6-phosphate + ADP (Hexokinase).<br/>&bull; <i>Step 2:</i> Glucose-6-P &hArr; Fructose-6-P (Phosphoglucoisomerase).<br/>&bull; <i>Step 3:</i> Fructose-6-P + ATP &rarr; Fructose-1,6-bisphosphate + ADP (<b>Phosphofructokinase - PFK, Master Pacemaker Enzyme</b>).<br/>&bull; <i>Step 4:</i> Fructose-1,6-BP &hArr; Glyceraldehyde-3-P (PGAL) + DHAP (Aldolase).<br/>&bull; <i>Step 5:</i> DHAP &hArr; PGAL (Triose phosphate isomerase).<br/>&bull; <i>Step 6:</i> 2 PGAL + 2 NAD<sup>+</sup> + 2 Pi &rarr; 2 1,3-Bisphosphoglycerate + <b>2 NADH + 2 H<sup>+</sup></b> (G3P Dehydrogenase).<br/>&bull; <i>Step 7:</i> 2 1,3-BPG + 2 ADP &rarr; 2 3-Phosphoglycerate + <b>2 ATP</b> (Phosphoglycerate kinase).<br/>&bull; <i>Step 8:</i> 2 3-PGA &hArr; 2 2-Phosphoglycerate (Phosphoglyceromutase).<br/>&bull; <i>Step 9:</i> 2 2-PGA &hArr; 2 Phosphoenolpyruvate (PEP) + 2 H<sub>2</sub>O (Enolase).<br/>&bull; <i>Step 10:</i> 2 PEP + 2 ADP &rarr; 2 Pyruvate + <b>2 ATP</b> (Pyruvate kinase).<br/><br/><b style="color: #00E5FF;">3. Net Energetics:</b> 4 ATP produced - 2 ATP consumed = <b>2 ATP (net) + 2 NADH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q82: Detail the Krebs Cycle (Citric Acid Cycle / TCA Cycle) in exhaustive depth: Biochemical Reactions, Decarboxylations, Dehydrogenations, and ATP Yield.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Principles:</b> Sir Hans Krebs (1937). Cyclic sequence in the mitochondrial matrix completely oxidizing Acetyl-CoA into CO<sub>2</sub>.<br/><br/><b style="color: #00E5FF;">2. Step-by-Step Cycle:</b><br/>&bull; <i>Condensation:</i> Acetyl-CoA (2C) + Oxaloacetate (4C) + H<sub>2</sub>O &rarr; Citrate (6C) + CoA (Citrate synthase).<br/>&bull; <i>Isomerization:</i> Citrate &hArr; cis-Aconitate &hArr; Isocitrate (Aconitase).<br/>&bull; <i>First Oxidation &amp; Decarboxylation:</i> Isocitrate + NAD<sup>+</sup> &rarr; &alpha;-Ketoglutarate (5C) + <b>CO<sub>2</sub> + NADH</b> (Isocitrate dehydrogenase).<br/>&bull; <i>Second Oxidation &amp; Decarboxylation:</i> &alpha;-Ketoglutarate + CoA + NAD<sup>+</sup> &rarr; Succinyl-CoA (4C) + <b>CO<sub>2</sub> + NADH</b> (&alpha;-Ketoglutarate dehydrogenase).<br/>&bull; <i>Substrate Phosphorylation:</i> Succinyl-CoA + GDP + Pi &rarr; Succinate + <b>GTP/ATP</b> + CoA (Succinate thiokinase).<br/>&bull; <i>Third Oxidation:</i> Succinate + FAD &rarr; Fumarate + <b>FADH<sub>2</sub></b> (Succinate dehydrogenase / Complex II).<br/>&bull; <i>Hydration:</i> Fumarate + H<sub>2</sub>O &rarr; Malate (Fumarase).<br/>&bull; <i>Fourth Oxidation:</i> Malate + NAD<sup>+</sup> &rarr; Oxaloacetate + <b>NADH</b> (Malate dehydrogenase).<br/><br/><b style="color: #00E5FF;">3. Cycle Total per Glucose:</b> 6 NADH + 2 FADH<sub>2</sub> + 2 ATP + 4 CO<sub>2</sub>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q83: Discuss the Mitochondrial Electron Transport System (ETS) and Oxidative Phosphorylation: Complexes I to V, Redox Reactions, and Chemiosmosis.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Complex Architecture of Inner Mitochondrial Membrane:</b><br/>&bull; <i>Complex I (NADH:Ubiquinone Oxidoreductase):</i> Contains FMN and 8 Fe-S clusters; transfers electrons from NADH to ubiquinone (UQ), pumping <b>4 H<sup>+</sup></b> into the intermembrane space.<br/>&bull; <i>Complex II (Succinate Dehydrogenase):</i> Contains FAD and Fe-S centers; oxidizes succinate to fumarate and transfers electrons to UQ; no protons pumped.<br/>&bull; <i>Complex III (Cytochrome bc<sub>1</sub> Complex):</i> Contains Cyt b, Cyt c<sub>1</sub>, and Rieske Fe-S center; transfers electrons from ubiquinol to mobile Cytochrome c via the Q-cycle, pumping <b>4 H<sup>+</sup></b>.<br/>&bull; <i>Complex IV (Cytochrome c Oxidase):</i> Contains Cytochromes a, a<sub>3</sub> and copper centers (Cu<sub>A</sub>, Cu<sub>B</sub>); delivers 4 electrons to reduce terminal O<sub>2</sub> to 2 H<sub>2</sub>O, pumping <b>2 H<sup>+</sup></b>.<br/><br/><b>2. Complex V (F<sub>0</sub>-F<sub>1</sub> ATP Synthase):</b> Proton motive force drives H<sup>+</sup> influx through F<sub>0</sub> channel, rotating F<sub>1</sub> headpiece to synthesize ATP (2 H<sup>+</sup> per ATP). Total yield: 1 NADH &rarr; 3 ATP; 1 FADH<sub>2</sub> &rarr; 2 ATP.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q84: Discuss the Light Reactions of Photosynthesis: Z-Scheme, Photosystems (PS I and PS II), Photolysis of Water, and ATP/NADPH Generation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Photosystem Architecture:</b> Located in thylakoid membranes; comprise Light Harvesting Complexes (LHC) surrounding reaction centers: PS II (P680) and PS I (P700).<br/><br/><b style="color: #00E5FF;">2. Photolysis of Water:</b> Oxygen Evolving Complex (Mn<sub>4</sub>CaO<sub>5</sub> cluster) on lumen face of PS II catalyzes: 2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + 4e<sup>-</sup> + O<sub>2</sub>.<br/><br/><b style="color: #00E5FF;">3. Non-Cyclic Electron Transport (Z-Scheme):</b><br/>Excited P680 &rarr; Pheophytin &rarr; Plastoquinone (PQ) &rarr; Cytochrome b<sub>6</sub>f (pumps H<sup>+</sup> into thylakoid lumen) &rarr; Plastocyanin (PC) &rarr; P700 (PS I). P700 absorbs 700 nm light &rarr; A<sub>0</sub> &rarr; Phylloquinone (A<sub>1</sub>) &rarr; Fe-S &rarr; Ferredoxin (Fd) &rarr; FNR enzyme reduces NADP<sup>+</sup> to <b>NADPH</b> in stroma.<br/><br/><b style="color: #00E5FF;">4. Photophosphorylation:</b> Proton accumulation inside thylakoid lumen creates steep &Delta;pH; proton efflux through CF<sub>0</sub>-CF<sub>1</sub> ATP synthase generates ATP in stroma.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q85: Discuss the Calvin Cycle (C3 Pathway) in complete depth: Carboxylation, Reduction, Regeneration, Stoichiometry, and RuBisCO Properties.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Discovery &amp; Nature:</b> Melvin Calvin (1961 Nobel Prize) using <sup>14</sup>C in <i>Chlorella</i>. Fundamental cyclic enzymatic pathway in stroma synthesizing hexose sugars.<br/><br/><b style="color: #00E5FF;">2. The Three Phases:</b><br/>&bull; <i>Carboxylation:</i> 6 RuBP (5C) + 6 CO<sub>2</sub> + 6 H<sub>2</sub>O &rarr; 12 3-PGA (3C). Catalyzed by <b>RuBisCO</b> (Ribulose-1,5-bisphosphate carboxylase/oxygenase), the world's most abundant enzyme.<br/>&bull; <i>Reduction:</i> 12 3-PGA + 12 ATP &rarr; 12 1,3-BPG; 12 1,3-BPG + 12 NADPH &rarr; 12 G3P (Triose phosphate) + 12 NADP<sup>+</sup> + 12 Pi.<br/>2 molecules of G3P exit the cycle to synthesize <b>1 Glucose molecule (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>)</b>.<br/>&bull; <i>Regeneration:</i> 10 molecules of G3P undergo complex sugar reshuffling using 6 ATP to regenerate 6 molecules of RuBP.<br/><br/><b style="color: #00E5FF;">3. Cycle Energetics:</b> Synthesis of 1 Glucose requires <b>6 CO<sub>2</sub> + 18 ATP + 12 NADPH</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q86: Provide an Exhaustive Comparison of C3 Pathway, C4 Pathway, and CAM Pathway in Plants: Anatomy, Enzymes, Water Efficiency, and Ecology.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b>1. C<sub>3</sub> Pathway:</b> Standard Calvin cycle; mesophyll only; RuBP primary acceptor via RuBisCO; photorespiration high (up to 30-40% carbon loss); temperature optimum 20-25&deg;C; Wheat, Rice, Potato.<br/><br/><b>2. C<sub>4</sub> Pathway (Hatch &amp; Slack):</b> Spatial separation of carbon fixation; <b>Kranz Anatomy</b> (mesophyll + bundle sheath); PEP primary acceptor via PEPcase; initial product OAA (4C); zero photorespiration; high water-use efficiency; temperature optimum 30-40&deg;C; Maize, Sugarcane.<br/><br/><b style="color: #00E5FF;">3. CAM Pathway (Crassulacean Acid Metabolism):</b> Temporal separation of carbon fixation in desert succulents (Cactus, Pineapple); stomata open at night (scotoactive) fixing CO<sub>2</sub> via PEPcase into malic acid stored in large vacuoles; stomata close during daytime to prevent desiccation while light reactions supply ATP/NADPH for Calvin cycle.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q87: Discuss Photorespiration (C2 Cycle) in complete depth: Causes, Organellar Shuttling (Chloroplast, Peroxisome, Mitochondria), and Evolutionary Wastefulness.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Molecular Basis:</b> RuBisCO active site cannot strictly discriminate between CO<sub>2</sub> and O<sub>2</sub>. When O<sub>2</sub> levels rise or temperature increases, RuBisCO oxygenates RuBP: <b>RuBP (5C) + O<sub>2</sub> &rarr; 3-PGA (3C) + 2-Phosphoglycolate (2C)</b>.<br/><br/><b style="color: #00E5FF;">2. The 3-Organelle Shuttling:</b><br/>&bull; <i>Chloroplast:</i> Phosphoglycolate is dephosphorylated to Glycolate, which exits into peroxisome.<br/>&bull; <i>Peroxisome:</i> Glycolate is oxidized by Glycolate Oxidase to Glyoxylate (producing toxic H<sub>2</sub>O<sub>2</sub>, degraded by catalase). Glyoxylate is transaminated to <b>Glycine</b>.<br/>&bull; <i>Mitochondria:</i> Two Glycine molecules (2 &times; 2C) combine to form one <b>Serine (3C) + CO<sub>2</sub> + NH<sub>3</sub></b>.<br/>&bull; Serine returns to peroxisome &rarr; Hydroxypyruvate &rarr; Glycerate &rarr; enters chloroplast &rarr; phosphorylated to 3-PGA consuming 1 ATP.<br/><br/><b style="color: #00E5FF;">3. Wastefulness:</b> Releases 25% of previously fixed CO<sub>2</sub> with <b>zero ATP or NADPH yield</b>; pure metabolic burden.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q88: Explain the Discovery, Chemical Nature, Physiological Effects, and Commercial Applications of Auxins and Gibberellins.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Auxins (IAA, NAA, 2,4-D):</b><br/>&bull; Discovered by Darwin and F.W. Went (1928, <i>Avena</i> curvature test).<br/>&bull; Induces <b>Apical Dominance</b> by suppressing axillary buds; maintains dormancy.<br/>&bull; Initiates rooting in stem cuttings in nurseries.<br/>&bull; Induces parthenocarpy in tomatoes.<br/>&bull; 2,4-D used as selective weedicide to clear dicot weeds in cereal crops.<br/><br/><b>2. Gibberellins (GA<sub>3</sub>):</b><br/>&bull; Discovered by Kurosawa (1926) from <i>Gibberella fujikuroi</i> causing foolish seedling disease.<br/>&bull; Causes <b>Bolting</b> (rapid internode elongation) in cabbage, beet, and carrots.<br/>&bull; Increases length of grape stalks and sugarcane stems (boosts yield +20 tonnes/acre).<br/>&bull; Induces &alpha;-amylase synthesis in germinating barley grains during industrial brewing.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q89: Explain the Discovery, Chemical Nature, Physiological Effects, and Commercial Applications of Cytokinins, Ethylene, and Abscisic Acid.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Cytokinins (Kinetin, Zeatin):</b><br/>&bull; Discovered by Skoog and Miller (1955). Promotes cytokinesis, overcomes apical dominance, delays leaf senescence (<b>Richmond-Lang Effect</b>), and drives organogenesis in plant tissue culture (High cytokinin/auxin ratio &rarr; shoot regeneration).<br/><br/><b>2. Ethylene (C<sub>2</sub>H<sub>4</sub>):</b><br/>&bull; Gaseous hormone (Cousins, 1910). Triggers <b>Fruit Ripening</b> and respiratory climacteric burst; breaks seed dormancy; commercial aqueous <b>Ethephon</b> used to ripen fruits uniformly and promote female flowering in cucurbits.<br/><br/><b style="color: #00E5FF;">3. Abscisic Acid (ABA - Stress Hormone):</b><br/>&bull; Inhibitor-B / Dormin. Induces rapid <b>Stomatal Closure</b> during drought stress; maintains seed dormancy and prevents precocious germination.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q90: Discuss Plant Growth Curves, Growth Rates, and the Concepts of Plasticity and Heterophylly with diagrams.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Growth Kinetics:</b> Growth displays an S-shaped <b>Sigmoid Curve</b> featuring:<br/>&bull; <i>Lag Phase:</i> Initial slow establishment.<br/>&bull; <i>Log / Exponential Phase:</i> Rapid geometric cell division and tissue expansion.<br/>&bull; <i>Stationary Phase:</i> Deceleration due to limited nutrients and space.<br/><br/><b style="color: #00E5FF;">2. Plasticity:</b> The ability of an individual plant to develop distinct structural forms in response to different environmental stimuli.<br/><br/><b style="color: #00E5FF;">3. Heterophylly:</b> Presence of more than one leaf shape on the same plant:<br/>&bull; <i>Developmental Heterophylly:</i> Juvenile leaves differ from mature leaves in Cotton, Coriander, and Eucalyptus.<br/>&bull; <i>Environmental Heterophylly:</i> In <i>Ranunculus tripartitus</i> (Buttercup), submerged leaves are highly dissected, narrow ribbons (minimizing water drag), while aerial leaves are broad, flat, and floating (maximizing light capture).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q91: Detail the ATP Balance Sheet for Complete Aerobic Oxidation of One Molecule of Glucose in a Plant Cell.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Glycolysis (Cytoplasm):</b><br/>&bull; Substrate phosphorylation: 4 ATP gross - 2 ATP invested = <b>2 ATP (net)</b>.<br/>&bull; 2 NADH produced &rarr; via ETS yields <b>6 ATP</b> (or 4 ATP if glycerol-phosphate shuttle is used).<br/><br/><b style="color: #00E5FF;">2. Link Reaction (Mitochondrial Matrix):</b><br/>&bull; 2 Pyruvate &rarr; 2 Acetyl-CoA + 2 CO<sub>2</sub> + 2 NADH &rarr; via ETS yields <b>6 ATP</b>.<br/><br/><b style="color: #00E5FF;">3. Krebs Cycle (Mitochondrial Matrix, 2 turns):</b><br/>&bull; Substrate phosphorylation: 2 GTP / <b>2 ATP</b>.<br/>&bull; 6 NADH &rarr; via ETS yields <b>18 ATP</b>.<br/>&bull; 2 FADH<sub>2</sub> &rarr; via ETS yields <b>4 ATP</b>.<br/><br/><b style="color: #00E5FF;">4. Grand Total:</b> 2 + 6 + 6 + 2 + 18 + 4 = <b>38 ATP</b> (or 36 ATP in some eukaryotic tissues).
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q92: Discuss the Factors Affecting Cellular Respiration in Plants: Internal and External Parameters.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Temperature:</b> Follows van 't Hoff's rule (Q<sub>10</sub> &approx; 2 between 0&deg;C and 30&deg;C); optimum is 30-35&deg;C; temperatures &gt;45&deg;C denature respiratory enzymes.<br/><b style="color: #00E5FF;">2. Oxygen Concentration:</b> Essential for aerobic respiration; below critical concentration (extinction point ~2%), plants switch to anaerobic fermentation (<b>Pasteur Effect</b>).<br/><b style="color: #00E5FF;">3. Carbon Dioxide Concentration:</b> High CO<sub>2</sub> inhibits respiration; utilized industrially in controlled-atmosphere storage to preserve apples and pears for months.<br/><b style="color: #00E5FF;">4. Protoplasmic Hydration:</b> Dry seeds with 10% water respire at near-zero dormant rates; water imbibition activates enzymes, surging respiration 1000-fold.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q93: Explain the Chemiosmotic Mechanism of ATP Synthesis in Chloroplasts and Contrast it with Mitochondria.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Proton Gradient in Chloroplast:</b><br/>Protons accumulate in the <b>Thylakoid Lumen</b> (creating low pH ~4.5) via three mechanisms:<br/>(a) Photolysis of water releases 4 H<sup>+</sup> directly into the lumen.<br/>(b) Plastoquinone (PQ) pumps protons from stroma into lumen across Cytochrome b<sub>6</sub>f.<br/>(c) NADP reductase removes protons from the stroma to form NADPH.<br/><br/><b style="color: #00E5FF;">2. ATP Generation:</b> Protons flow back into the <b>Stroma</b> through CF<sub>0</sub>-CF<sub>1</sub> ATP Synthase, generating ATP on the stroma side for the Calvin cycle.<br/><br/><b style="color: #00E5FF;">3. Mitochondria vs Chloroplast:</b> In mitochondria, protons are pumped <i>outward</i> into the intermembrane space and flow <i>inward</i> to matrix; in chloroplasts, protons are pumped <i>inward</i> into thylakoid lumen and flow <i>outward</i> to stroma.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q94: Discuss the Synthesis of Sucrose and Starch from Triose Phosphates following the Calvin Cycle.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Glyceraldehyde-3-phosphate (G3P) and DHAP exported from chloroplast to cytosol via a Pi-translocator:<br/>1. <b style="color: #00E5FF;">Sucrose Synthesis (Cytoplasm):</b> G3P + DHAP &rarr; Fructose-1,6-bisphosphate &rarr; Fructose-6-P &rarr; Glucose-1-P. Reacts with UTP to form UDP-Glucose. UDP-Glucose + Fructose-6-P &rarr; Sucrose-phosphate &rarr; <b>Sucrose (major translocated sugar in phloem)</b>.<br/>2. <b style="color: #00E5FF;">Starch Synthesis (Chloroplast Stroma):</b> During active daytime photosynthesis, triose phosphates remain in stroma: G3P &rarr; Glucose-1-P. Reacts with ATP to form ADP-Glucose. Starch synthase polymerizes ADP-Glucose into <b>Insoluble Starch granules (transient daylight storage)</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q95: Explain the Phenomenon of Apical Dominance in Plants: Physiological Basis and Hormonal Interactions.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Apical dominance is the phenomenon whereby the presence of an active terminal apical shoot bud inhibits the outgrowth of lateral axillary buds:<br/>1. <b style="color: #00E5FF;">Auxin Role:</b> Synthesized in the apical bud and transported basipetally in polar fashion. High auxin levels in the stem induce biosynthesis of Strigolactones, which suppress axillary bud growth.<br/>2. <b style="color: #00E5FF;">Cytokinin Antagonism:</b> Cytokinins synthesized in roots move acropetally and directly promote axillary bud cell division. High cytokinin levels overcome apical dominance.<br/>3. <b style="color: #00E5FF;">Decapitation:</b> Removing the terminal shoot bud eliminates the auxin source, altering the auxin/cytokinin ratio and triggering bushy lateral branching.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q96: Discuss the Physiological Mechanism of Stomatal Opening and Closing: Complete K+ Flux and Proton Pump Model.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Stomatal Opening (Daytime / Light):</b><br/>&bull; Blue light activates electrogenic <b>H<sup>+</sup>-ATPase proton pumps</b> on guard cell plasma membranes.<br/>&bull; Protons (H<sup>+</sup>) are actively pumped out into subsidiary cells, creating an electrical membrane potential (-120 mV).<br/>&bull; Voltage-gated inward potassium channels open; <b>K<sup>+</sup> and Cl<sup>-</sup> ions flood into guard cells</b>.<br/>&bull; Starch is metabolized to PEP, which fixes CO<sub>2</sub> via PEPcase into Malate<sup>2-</sup>.<br/>&bull; Potassium malate accumulation severely depresses osmotic potential (&Psi;<sub>s</sub>) and water potential (&Psi;<sub>w</sub>).<br/>&bull; Water enters guard cells by endosmosis; guard cells swell turgidly, pulling stomatal pore open.<br/><br/><b style="color: #00E5FF;">2. Stomatal Closing (Darkness / Water Stress):</b><br/>&bull; In darkness or drought, <b>ABA</b> binds guard cell receptors, activating Ca<sup>2+</sup> influx.<br/>&bull; Depolarization opens outward K<sup>+</sup> channels; K<sup>+</sup>, Cl<sup>-</sup>, and malate exit rapidly.<br/>&bull; Water leaves guard cells by exosmosis; guard cells become flaccid, closing the pore.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q97: Explain the Phenomenon of Senescence in Plants: Types, Hormonal Regulation, and Programmed Cell Death.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      Senescence is the genetically programmed, developmental deterioration of plant organs leading to death:<br/>1. <b style="color: #00E5FF;">Types:</b> Overall senescence (annuals like wheat), Top senescence (perennial grasses dying to underground rhizomes), Deciduous leaf senescence (autumn leaf drop), Sequential senescence (older leaves at base die sequentially).<br/>2. <b style="color: #00E5FF;">Biochemical Changes:</b> Rapid degradation of chlorophyll (yellowing / chlorosis), breakdown of proteins into amino acids, nucleic acid degradation, and mobilization of nitrogen and phosphorus to young seeds.<br/>3. <b style="color: #00E5FF;">Hormonal Control:</b> Accelerated by <b>Ethylene and Abscisic Acid</b>; delayed by <b>Cytokinins and Auxins</b>.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q98: Discuss the Ecological and Agricultural Significance of C4 Photosynthesis in Global Climate Adaptation.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Heat &amp; Drought Resilience:</b> C<sub>4</sub> plants operate at maximum photosynthetic efficiency between 30&deg;C and 45&deg;C where C<sub>3</sub> plants suffer severe photorespiratory collapse.<br/>2. <b style="color: #00E5FF;">Water-Use Efficiency:</b> Because PEPcase fixes CO<sub>2</sub> rapidly even at low internal concentrations, C<sub>4</sub> plants keep stomata partially closed, losing only ~250-300 g of water per g of CO<sub>2</sub> fixed (compared to 500-800 g in C<sub>3</sub> plants).<br/>3. <b style="color: #00E5FF;">Nitrogen-Use Efficiency:</b> C<sub>4</sub> plants require 30-50% less RuBisCO protein than C<sub>3</sub> plants, allowing higher photosynthetic yields in nitrogen-deficient tropical soils.<br/>4. <b style="color: #00E5FF;">Genetic Engineering:</b> Major international initiatives are transferring C<sub>4</sub> genes (PEPcase, PPDK, Kranz anatomy) into C<sub>3</sub> Rice to boost global grain yields by 50%.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q99: Explain the Practical Applications of Plant Growth Regulators in Modern Agriculture and Horticulture.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      1. <b style="color: #00E5FF;">Auxins (IBA, 2,4-D):</b> Clonal propagation via stem cutting rooting; broadleaf weed eradication; induction of seedless tomatoes.<br/>2. <b style="color: #00E5FF;">Gibberellins (GA<sub>3</sub>):</b> Extending grape pedicels (prevents fungal mold); increasing sugarcane tonnage; breaking seed dormancy; malting barley in brewing.<br/>3. <b style="color: #00E5FF;">Cytokinins:</b> Micropropagation organogenesis in plant tissue culture; prolonging shelf-life of green vegetables and cut flowers.<br/>4. <b style="color: #00E5FF;">Ethylene (Ethephon):</b> Synchronized fruit ripening in bananas, citrus, and pineapples; promoting female flowering in cucurbits.<br/>5. <b style="color: #00E5FF;">Abscisic Acid:</b> Antitranspirant spray to protect nursery seedlings during transplanting.
    </div>
  </div>
  <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.25);">
    <h3 style="color: #00E5FF; margin: 0 0 10px 0; font-size: 16.5px; font-weight: bold;">Q100: Construct an Exhaustive Master Synthesis Matrix correlating Cellular Respiration, Photosynthesis, Plant Growth, and Plant Growth Regulators.</h3>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #00E5FF;">1. Cellular Respiration:</b> Glycolysis (cytoplasm, 2 ATP net, 2 NADH) &rarr; Link Reaction (matrix, 2 Acetyl-CoA, 2 NADH) &rarr; Krebs Cycle (matrix, 6 NADH, 2 FADH<sub>2</sub>, 2 ATP) &rarr; ETS &amp; Chemiosmosis (inner membrane Complexes I-V, 34 ATP via proton motive force down F<sub>0</sub>-F<sub>1</sub>). Amphibolic pathway; RQ values (Glucose=1.0, Fats=0.7, Anaerobic=&infin;).<br/><br/><b style="color: #00E5FF;">2. Photosynthesis:</b> Light Reactions (Thylakoids: PS II P680 photolysis of H<sub>2</sub>O &rarr; Z-scheme electron transport &rarr; PS I P700 &rarr; ATP + NADPH) &bull; Dark Reactions (Stroma: C<sub>3</sub> Calvin cycle with RuBisCO vs C<sub>4</sub> Hatch-Slack with Kranz anatomy and PEPcase; C<sub>2</sub> Photorespiration waste).<br/><br/><b style="color: #00E5FF;">3. Growth &amp; Development:</b> Arithmetic (L<sub>t</sub>=L<sub>0</sub>+rt) vs Geometric (W<sub>1</sub>=W<sub>0</sub>e<sup>rt</sup>); Sigmoid growth curve; Differentiation &hArr; Dedifferentiation &hArr; Redifferentiation; Plasticity &amp; Heterophylly.<br/><br/><b style="color: #00E5FF;">4. Master PGR Spectrum:</b> Promoters (Auxin: apical dominance &amp; rooting; Gibberellin: bolting &amp; stem extension; Cytokinin: cell division &amp; anti-senescence) vs Inhibitors (Ethylene: fruit ripening climacteric; ABA: stomatal closure stress response).
    </div>
  </div>

</div>`;

export const c11Bot4Mcqs = [
  {
    "id": "c11-bot-4-mcq-1",
    "question": "Where does the biochemical sequence of Glycolysis (EMP pathway) take place within the cell?",
    "options": [
      "A):   Cytoplasm (Cytosol)",
      "B):   Mitochondrial matrix",
      "C):   Inner mitochondrial membrane",
      "D):   Peroxisome"
    ],
    "correctAnswer": "a",
    "explanation": "Glycolysis takes place in the cytoplasm (cytosol) of all living cells and is independent of molecular oxygen."
  },
  {
    "id": "c11-bot-4-mcq-2",
    "question": "Which of the following glycolytic enzymes acts as the primary 'Pacemaker' or rate-limiting enzyme?",
    "options": [
      "A):   Hexokinase",
      "B):   Phosphofructokinase (PFK)",
      "C):   Enolase",
      "D):   Pyruvate kinase"
    ],
    "correctAnswer": "b",
    "explanation": "Phosphofructokinase (PFK) catalyzes the irreversible conversion of Fructose-6-phosphate to Fructose-1,6-bisphosphate."
  },
  {
    "id": "c11-bot-4-mcq-3",
    "question": "What is the net yield of ATP molecules produced directly by substrate-level phosphorylation in Glycolysis per glucose?",
    "options": [
      "A):   4 ATP",
      "B):   1 ATP",
      "C):   2 ATP",
      "D):   36 ATP"
    ],
    "correctAnswer": "c",
    "explanation": "Glycolysis generates 4 gross ATP while consuming 2 ATP initially, resulting in a net yield of 2 ATP per glucose molecule."
  },
  {
    "id": "c11-bot-4-mcq-4",
    "question": "In the Link Reaction connecting glycolysis to the Krebs cycle, pyruvate is converted into Acetyl-CoA by:",
    "options": [
      "A):   Reductive amination",
      "B):   Hydrolytic cleavage",
      "C):   Substrate-level phosphorylation",
      "D):   Oxidative Decarboxylation"
    ],
    "correctAnswer": "d",
    "explanation": "Pyruvate undergoes oxidative decarboxylation via the pyruvate dehydrogenase complex to yield Acetyl-CoA, NADH, and CO2."
  },
  {
    "id": "c11-bot-4-mcq-5",
    "question": "During the Krebs cycle, the conversion of Succinate to Fumarate is coupled to the reduction of:",
    "options": [
      "A):   FAD to FADH2",
      "B):   NAD+ to NADH",
      "C):   NADP+ to NADPH",
      "D):   GDP to GTP"
    ],
    "correctAnswer": "a",
    "explanation": "Succinate dehydrogenase catalyzes the oxidation of succinate to fumarate while reducing FAD directly to FADH2."
  },
  {
    "id": "c11-bot-4-mcq-6",
    "question": "In the mitochondrial electron transport system (ETS), the terminal electron acceptor that forms water is:",
    "options": [
      "A):   Cytochrome c",
      "B):   Molecular Oxygen (O2)",
      "C):   Ubiquinone",
      "D):   NAD+"
    ],
    "correctAnswer": "b",
    "explanation": "Molecular oxygen acts as the final electron and proton acceptor at Complex IV (Cytochrome c oxidase) to produce water."
  },
  {
    "id": "c11-bot-4-mcq-7",
    "question": "According to Peter Mitchell's Chemiosmotic Hypothesis, ATP synthesis is directly energized by:",
    "options": [
      "A):   Direct transfer of phosphate from glucose",
      "B):   Hydrolysis of GTP in the matrix",
      "C):   An electrochemical proton gradient across the inner mitochondrial membrane",
      "D):   Binding of oxygen to Complex I"
    ],
    "correctAnswer": "c",
    "explanation": "Proton extrusion creates an electrochemical proton gradient; passage of protons back via F0-F1 ATP synthase drives ATP production."
  },
  {
    "id": "c11-bot-4-mcq-8",
    "question": "What is the Respiratory Quotient (RQ) when Tripalmitin (a representative fat) is utilized as the respiratory substrate?",
    "options": [
      "A):   1.0",
      "B):   0.9",
      "C):   1.4",
      "D):   0.7"
    ],
    "correctAnswer": "d",
    "explanation": "Fats require more oxygen for complete combustion than the volume of CO2 released; for Tripalmitin, RQ = 102 CO2 / 145 O2 = 0.7."
  },
  {
    "id": "c11-bot-4-mcq-9",
    "question": "Why is the respiratory pathway universally characterized as an 'Amphibolic Pathway'?",
    "options": [
      "A):   It involves both catabolic breakdown of substrates and anabolic synthesis of biomolecules from intermediates",
      "B):   It operates only in amphibious plant species",
      "C):   It uses equal amounts of oxygen and carbon dioxide",
      "D):   It proceeds identically in light and darkness"
    ],
    "correctAnswer": "a",
    "explanation": "Respiration is amphibolic because its catabolic breakdown intermediates serve as vital precursors for anabolic biosynthesis."
  },
  {
    "id": "c11-bot-4-mcq-10",
    "question": "Who demonstrated that the green parts of plants release oxygen only in the presence of sunlight?",
    "options": [
      "A):   Joseph Priestley",
      "B):   Jan Ingenhousz",
      "C):   Julius von Sachs",
      "D):   T.W. Engelmann"
    ],
    "correctAnswer": "b",
    "explanation": "Jan Ingenhousz (1779) placed aquatic plants in light and dark, proving that oxygen bubbles form only around illuminated green parts."
  },
  {
    "id": "c11-bot-4-mcq-11",
    "question": "Photolysis of water (water-splitting complex) during the light reactions of photosynthesis is physically associated with:",
    "options": [
      "A):   Photosystem I on stroma lamellae",
      "B):   CF0-CF1 ATP Synthase",
      "C):   Photosystem II on the inner lumen side of the thylakoid membrane",
      "D):   RuBisCO in the stroma"
    ],
    "correctAnswer": "c",
    "explanation": "The oxygen-evolving complex (OEC) with Mn, Ca, and Cl ions is located on the inner lumenal face of PSII."
  },
  {
    "id": "c11-bot-4-mcq-12",
    "question": "Which of the following products is formed EXCLUSIVELY in Non-Cyclic Photophosphorylation (Z-scheme) and NOT in Cyclic Photophosphorylation?",
    "options": [
      "A):   ATP only",
      "B):   Both NADPH and Oxygen (O2)",
      "C):   Glyceraldehyde-3-phosphate",
      "D):   Glucose"
    ],
    "correctAnswer": "b",
    "explanation": "Cyclic photophosphorylation generates ATP alone; non-cyclic photophosphorylation produces ATP, NADPH, and releases O2."
  },
  {
    "id": "c11-bot-4-mcq-13",
    "question": "The primary carbon dioxide acceptor molecule in the Calvin (C3) cycle is:",
    "options": [
      "A):   Phosphoenolpyruvate (PEP)",
      "B):   Oxaloacetic acid (OAA)",
      "C):   Ribulose-1,5-bisphosphate (RuBP)",
      "D):   3-Phosphoglyceric acid (3-PGA)"
    ],
    "correctAnswer": "c",
    "explanation": "In the C3 cycle, the 5-carbon ketose sugar Ribulose-1,5-bisphosphate (RuBP) accepts CO2 catalyzed by RuBisCO."
  },
  {
    "id": "c11-bot-4-mcq-14",
    "question": "For the synthesis of ONE molecule of Glucose through the Calvin cycle, how many ATP and NADPH molecules are consumed?",
    "options": [
      "A):   12 ATP and 12 NADPH",
      "B):   30 ATP and 12 NADPH",
      "C):   38 ATP and 10 NADPH",
      "D):   18 ATP and 12 NADPH"
    ],
    "correctAnswer": "d",
    "explanation": "Each turn of the C3 cycle uses 3 ATP and 2 NADPH; 6 turns to fix 1 glucose consume 18 ATP and 12 NADPH."
  },
  {
    "id": "c11-bot-4-mcq-15",
    "question": "Kranz Anatomy, featuring large bundle sheath cells with agranal chloroplasts, is characteristic of:",
    "options": [
      "A):   C4 plants like Maize and Sugarcane",
      "B):   C3 plants like Rice and Wheat",
      "C):   CAM plants like Pineapple",
      "D):   Hydrophytes like Hydrilla"
    ],
    "correctAnswer": "a",
    "explanation": "Kranz ('wreath') anatomy is the hallmark anatomical specialization of C4 plants (e.g., Maize, Sugarcane, Sorghum)."
  },
  {
    "id": "c11-bot-4-mcq-16",
    "question": "Photorespiration (C2 cycle) occurs when the active site of RuBisCO binds oxygen instead of carbon dioxide at:",
    "options": [
      "A):   Low temperature and high CO2 levels",
      "B):   High O2 concentration, low CO2 concentration, and high temperature",
      "C):   Total darkness",
      "D):   High humidity and low light"
    ],
    "correctAnswer": "b",
    "explanation": "Under high O2, low CO2, and elevated temperatures, RuBisCO acts as an oxygenase, initiating the wasteful C2 photorespiratory cycle."
  },
  {
    "id": "c11-bot-4-mcq-17",
    "question": "According to Blackman's Law of Limiting Factors (1905), the rate of a physiological process is determined by the factor that is:",
    "options": [
      "A):   Present in maximum abundance",
      "B):   Completely unaffected by temperature",
      "C):   Nearest to its minimal value",
      "D):   Optically active"
    ],
    "correctAnswer": "c",
    "explanation": "Blackman stated that when a process is governed by multiple factors, its rate is limited by the pace of the slowest factor nearest to its minimum."
  },
  {
    "id": "c11-bot-4-mcq-18",
    "question": "A typical S-shaped (Sigmoid) growth curve displayed by whole plants and organ populations comprises the phases:",
    "options": [
      "A):   Lag Phase -> Log (Exponential) Phase -> Stationary Phase",
      "B):   Log Phase -> Lag Phase -> Linear Phase",
      "C):   Stationary Phase -> Lag Phase -> Decline Phase",
      "D):   Linear Phase -> Arithmetic Phase -> Maturation Phase"
    ],
    "correctAnswer": "a",
    "explanation": "The geometric sigmoid curve comprises an initial slow Lag Phase, a rapid exponential Log Phase, and a plateaued Stationary Phase."
  },
  {
    "id": "c11-bot-4-mcq-19",
    "question": "The formation of interfascicular cambium and cork cambium (phellogen) from fully differentiated living parenchyma cells is an example of:",
    "options": [
      "A):   Differentiation",
      "B):   Redifferentiation",
      "C):   Dedifferentiation",
      "D):   Senescence"
    ],
    "correctAnswer": "c",
    "explanation": "Dedifferentiation occurs when living permanent differentiated cells regain their capacity to divide under specific stimuli."
  },
  {
    "id": "c11-bot-4-mcq-20",
    "question": "Heterophylly in Buttercup (Ranunculus), where submerged leaves are highly dissected and aerial leaves are lobed, demonstrates:",
    "options": [
      "A):   Dendrochronology",
      "B):   Vernalization",
      "C):   Photoperiodism",
      "D):   Plasticity"
    ],
    "correctAnswer": "d",
    "explanation": "Plasticity is the capacity of plants to form distinct structural pathways in response to environmental conditions (e.g., heterophylly)."
  },
  {
    "id": "c11-bot-4-mcq-21",
    "question": "Which plant growth regulator was first isolated from human urine and oat (Avena sativa) coleoptile tips by F.W. Went?",
    "options": [
      "A):   Auxin (IAA)",
      "B):   Gibberellin",
      "C):   Cytokinin",
      "D):   Abscisic acid"
    ],
    "correctAnswer": "a",
    "explanation": "Auxin (Indole-3-acetic acid / IAA) was isolated from human urine and by F.W. Went from oat coleoptile tips using agar blocks."
  },
  {
    "id": "c11-bot-4-mcq-22",
    "question": "The agricultural practice of applying Gibberellins (GA3) to biennial rosette plants like cabbage to induce internodal elongation prior to flowering is termed:",
    "options": [
      "A):   Apical dominance",
      "B):   Bolting",
      "C):   Etiolation",
      "D):   Abscission"
    ],
    "correctAnswer": "b",
    "explanation": "Bolting is the rapid internodal stem elongation just prior to flowering stimulated by gibberellic acid in rosette plants."
  },
  {
    "id": "c11-bot-4-mcq-23",
    "question": "Cytokinins delay the senescence of detached green leaves and maintain chlorophyll retention through a phenomenon known as the:",
    "options": [
      "A):   Kranz effect",
      "B):   Pasteur effect",
      "C):   Richmond-Lang effect",
      "D):   Emerson enhancement effect"
    ],
    "correctAnswer": "c",
    "explanation": "The Richmond-Lang effect refers to the delayed senescence and nutrient mobilization in leaves induced by cytokinins."
  },
  {
    "id": "c11-bot-4-mcq-24",
    "question": "The only natural Gaseous Plant Growth Regulator, which accelerates commercial fruit ripening and promotes triple response in seedlings, is:",
    "options": [
      "A):   Abscisic Acid",
      "B):   Kinetin",
      "C):   Indole butyric acid",
      "D):   Ethylene"
    ],
    "correctAnswer": "d",
    "explanation": "Ethylene (C2H4) is a volatile hydrocarbon gas that promotes fruit ripening, leaf epinasty, and the classic seedling triple response."
  },
  {
    "id": "c11-bot-4-mcq-25",
    "question": "Which plant hormone acts as a 'Stress Hormone' by triggering rapid stomatal closure during severe soil and atmospheric drought?",
    "options": [
      "A):   Gibberellin (GA3)",
      "B):   Abscisic Acid (ABA)",
      "C):   Cytokinin",
      "D):   Auxin"
    ],
    "correctAnswer": "b",
    "explanation": "Abscisic Acid (ABA) is the master stress hormone; it binds guard cell receptors to cause potassium ion efflux, closing stomata."
  }
];
