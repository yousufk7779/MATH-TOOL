// Class 11 Education Unit 4: Sociological Foundations of Education (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #8E2DE2 (Violet Purple / Deep Violet Gradient)

const themeColor = "#8E2DE2";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Edu4HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & BASIC DEFINITIONS CARD -->
  <div style="background: rgba(142, 45, 226, 0.06); border: 1.5px solid #8E2DE2; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #8E2DE2; font-weight: bold; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">🏛️ Quick Glossary &amp; Core Sociological Terms</h2>
    <p class="text-center" style="color: #CE93D8; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Unit 4: Sociological Foundations of Education (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">1. Educational Sociology:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The specialized branch of applied sociology that investigates the dynamic interaction between education and society, treating the school as a social institution and education as the primary instrument of social progress.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">2. Culture (Colere):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Derived from Latin <i>'Colere'</i> (to cultivate or refine). E. B. Tylor defined it as that complex whole including knowledge, belief, art, morals, law, custom, and habits acquired by human beings as members of society.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">3. Material vs. Non-Material Culture:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Material culture</b> comprises concrete, tangible physical artifacts (tools, machines, buildings, technology). <b>Non-material culture</b> consists of abstract spiritual creations (values, beliefs, morals, language, customs).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">4. Cultural Lag (W. F. Ogburn):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The sociological strain that occurs when material culture (technology and industry) advances rapidly, while non-material culture (customs, laws, ethics) fails to keep pace, creating social instability.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">5. Social Change:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Significant, observable alterations over time in social structures, cultural institutions, interpersonal relationships, and value systems within a society.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 4.1 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 30px;">4.1 Educational Sociology: Meaning and Scope</h2>

  <p>Human beings are fundamentally social creatures who cannot survive or evolve in isolation. While educational psychology analyzes how the individual learner learns, <b>Educational Sociology</b> investigates the social environment, societal institutions, and cultural forces that shape the learner. The discipline of sociology was founded in 1839 by French thinker <b>Auguste Comte</b> (from Latin <i>Socius</i> meaning companion, and Greek <i>Logos</i> meaning science).</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 24px;">(i) Emergence and Meaning of Educational Sociology</h3>
  <p>The application of sociological principles to the field of education is known as Educational Sociology. <b style="color: #8E2DE2;">George Payne</b> is widely recognized as the <b>"Father of Educational Sociology"</b> following his groundbreaking 1928 publication, <i>'Principles of Educational Sociology'</i>.</p>

  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">George Payne's Definition:</b> <i>"By Educational Sociology we mean the science which describes and explains the institutions, social groups and social processes... in which and through which the individual gains and organizes his experiences."</i></li>
    <li><b style="color: #8E2DE2;">Emile Durkheim's Definition:</b> <i>"Education is the influence exercised by adult generations on those that are not yet ready for social life. Its object is to arouse and develop in the child those physical, intellectual and moral states which are required of him by society."</i></li>
    <li><b style="color: #8E2DE2;">A. K. C. Ottaway's Definition:</b> <i>"Educational Sociology is the scientific study of the relationship between education and society."</i></li>
  </ul>

  <!-- DISTINCTION BOX -->
  <div style="background: rgba(142, 45, 226, 0.08); border-left: 4px solid #8E2DE2; padding: 12px 16px; border-radius: 6px; margin: 16px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #8E2DE2; font-weight: bold;">Crucial Academic Distinction &bull; Educational Sociology vs. Sociology of Education:</b><br>
      &bull; <b style="color: #8E2DE2;">Educational Sociology:</b> A practical, applied, problem-solving discipline that utilizes sociological findings to reform schools, improve curricula, and eliminate social prejudices.<br>
      &bull; <b style="color: #8E2DE2;">Sociology of Education:</b> A purely theoretical, descriptive branch of general sociology that analyzes the educational system as a social institution alongside the family, church, and state.
    </p>
  </div>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 24px;">(ii) Scope of Educational Sociology</h3>
  <p>The scope of educational sociology covers every dimension where society and education intersect:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">1. Social Agencies of Education:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Examines the educational functions of the <b>Family (Home)</b>, <b>School</b>, <b>Community</b>, <b>State</b>, <b>Religious bodies</b>, and <b>Mass Media</b>.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">2. Social Interaction within the School:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Investigates teacher-pupil relationships, peer group dynamics, sociometric structures, student leadership, and classroom group morale.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">3. Social Stratification and Equal Opportunity:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Studies the impact of social class, caste, economic disparities, and gender biases on educational access, striving to promote universal equity.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">4. Socialization and Cultural Transmission:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Analyzes how schools transform raw biological infants into civilized, moral, and responsible cultural citizens who contribute to democratic progress.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: EDUCATIONAL SOCIOLOGY DYNAMICS (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Top Node: Society -->
        <circle cx="220" cy="40" r="32" fill="#FAF5FF" stroke="#8E2DE2" stroke-width="2.5" />
        <text x="220" y="38" fill="#8E2DE2" font-size="10" font-weight="bold" text-anchor="middle">SOCIETY</text>
        <text x="220" y="50" fill="#334155" font-size="9" text-anchor="middle">&amp; Culture</text>

        <!-- Bottom Left Node: School -->
        <circle cx="90" cy="165" r="32" fill="#FAF5FF" stroke="#8E2DE2" stroke-width="2.5" />
        <text x="90" y="163" fill="#8E2DE2" font-size="10" font-weight="bold" text-anchor="middle">SCHOOL</text>
        <text x="90" y="175" fill="#334155" font-size="9" text-anchor="middle">Institution</text>

        <!-- Bottom Right Node: Child/Individual -->
        <circle cx="350" cy="165" r="32" fill="#FAF5FF" stroke="#8E2DE2" stroke-width="2.5" />
        <text x="350" y="163" fill="#8E2DE2" font-size="10" font-weight="bold" text-anchor="middle">LEARNER</text>
        <text x="350" y="175" fill="#334155" font-size="9" text-anchor="middle">Socialized</text>

        <!-- Connecting Double-Headed Arrows -->
        <!-- Top to Left -->
        <line x1="195" y1="58" x2="115" y2="140" stroke="#8E2DE2" stroke-width="2" />
        <polygon points="112,133 115,140 120,137" fill="#8E2DE2" />
        <polygon points="190,61 195,58 198,65" fill="#8E2DE2" />

        <!-- Top to Right -->
        <line x1="245" y1="58" x2="325" y2="140" stroke="#8E2DE2" stroke-width="2" />
        <polygon points="320,137 325,140 328,133" fill="#8E2DE2" />
        <polygon points="242,65 245,58 250,61" fill="#8E2DE2" />

        <!-- Left to Right -->
        <line x1="125" y1="165" x2="315" y2="165" stroke="#8E2DE2" stroke-width="2" />
        <polygon points="310,161 318,165 310,169" fill="#8E2DE2" />
        <polygon points="130,161 122,165 130,169" fill="#8E2DE2" />

        <!-- Center Emblem -->
        <rect x="155" y="95" width="130" height="38" rx="6" fill="#8E2DE2" />
        <text x="220" y="112" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">EDUCATIONAL</text>
        <text x="220" y="125" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">SOCIOLOGY</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Sociological Triad: Tripartite dynamic interaction connecting Society, School, and Learner.
    </div>
  </div>

  <!-- SECTION 4.2 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">4.2 Culture: Meaning, Components, and Characteristics</h2>

  <p>Culture is the distinctive hallmark of human civilization. Animals possess biology, instincts, and habitats, but only human beings create, preserve, and transmit <b>Culture</b>. Etymologically, "culture" is derived from the Latin verb <b style="color: #8E2DE2;">Colere</b>, which means <i>'to cultivate'</i> or <i>'to till and refine'</i>.</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(i) Renowned Sociological Definitions of Culture</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">Edward Burnett Tylor (1871 Classic Definition):</b> <i>"Culture is that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society."</i></li>
    <li><b style="color: #8E2DE2;">MacIver and Page:</b> <i>"Culture is the expression of our nature in our modes of living and thinking, in our everyday intercourse, in art, in literature, in recreation and enjoyment."</i></li>
  </ul>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(ii) Components of Culture: Material vs. Non-Material Culture</h3>
  <p>Sociologist <b>William F. Ogburn</b> divided culture into two interrelated components:</p>

  <!-- STANDALONE CLEAN DIAGRAM 2: COMPONENTS OF CULTURE & CULTURAL LAG (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Material Culture Box (Left) -->
        <rect x="20" y="15" width="180" height="95" rx="6" fill="#F3E8FF" stroke="#8E2DE2" stroke-width="2" />
        <text x="110" y="38" fill="#8E2DE2" font-size="12" font-weight="bold" text-anchor="middle">MATERIAL CULTURE</text>
        <text x="110" y="56" fill="#475569" font-size="9.5" text-anchor="middle">&bull; Tools, Machines &amp; Computers</text>
        <text x="110" y="72" fill="#475569" font-size="9.5" text-anchor="middle">&bull; Buildings &amp; Infrastructure</text>
        <text x="110" y="88" fill="#475569" font-size="9.5" text-anchor="middle">&bull; Rapid Technological Progress</text>
        <text x="110" y="103" fill="#16A34A" font-size="9" font-weight="bold" text-anchor="middle">⚡ Fast Moving</text>

        <!-- Non-Material Culture Box (Right) -->
        <rect x="240" y="15" width="180" height="95" rx="6" fill="#F8FAFC" stroke="#64748B" stroke-width="2" />
        <text x="330" y="38" fill="#334155" font-size="11.5" font-weight="bold" text-anchor="middle">NON-MATERIAL CULTURE</text>
        <text x="330" y="56" fill="#475569" font-size="9.5" text-anchor="middle">&bull; Moral Values &amp; Philosophy</text>
        <text x="330" y="72" fill="#475569" font-size="9.5" text-anchor="middle">&bull; Customs, Laws &amp; Traditions</text>
        <text x="330" y="88" fill="#475569" font-size="9.5" text-anchor="middle">&bull; Slow to Adapt / Stagnant</text>
        <text x="330" y="103" fill="#DC2626" font-size="9" font-weight="bold" text-anchor="middle">⏳ Slow Moving</text>

        <!-- Ogburn's Cultural Lag Banner -->
        <rect x="20" y="130" width="400" height="75" rx="8" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.8" />
        <text x="220" y="152" fill="#DC2626" font-size="12" font-weight="bold" text-anchor="middle">⚠️ W. F. Ogburn's Concept of "Cultural Lag"</text>
        <text x="220" y="172" fill="#334155" font-size="10.5" text-anchor="middle">Material culture gallops forward while non-material ethics lag behind,</text>
        <text x="220" y="188" fill="#8E2DE2" font-size="10" font-weight="bold" text-anchor="middle">creating social unrest &rarr; Education bridges this critical gap!</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Two Faces of Culture and W. F. Ogburn's Theory of Cultural Lag.
    </div>
  </div>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(iii) Essential Characteristics of Culture</h3>
  <div style="display: flex; flex-direction: column; gap: 10px; margin: 12px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #8E2DE2; border-radius: 4px;">
      <b style="color: #8E2DE2;">1. Culture is Learned:</b> Culture is not inherited through biological genes. A human infant born in India but raised in England acquires British language, food habits, and culture.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #8E2DE2; border-radius: 4px;">
      <b style="color: #8E2DE2;">2. Culture is Social &amp; Shared:</b> It is never the exclusive property of a solitary individual; it belongs collectively to the social group.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #8E2DE2; border-radius: 4px;">
      <b style="color: #8E2DE2;">3. Culture is Transmissive:</b> It is passed down across successive generations through language, symbolic communication, and formal schooling.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #8E2DE2; border-radius: 4px;">
      <b style="color: #8E2DE2;">4. Culture is Dynamic &amp; Adaptive:</b> It is never static. It continuously absorbs fresh inventions, scientific discoveries, and intercultural influences.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #8E2DE2; border-radius: 4px;">
      <b style="color: #8E2DE2;">5. Culture is Super-Organic:</b> It outlives the mortal lifespan of individual creators, continuing across centuries.
    </div>
  </div>

  <!-- SECTION 4.3 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">4.3 Relationship Between Culture and Education</h2>

  <p>The relationship between culture and education is organic, symbiotic, and reciprocal. As educational sociologists famously observe: <i>"Education is both a child of culture and a creator of culture."</i> They nourish and determine one another through a continuous circular flow.</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(i) Impact of Culture on Education</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">Determines Aims of Education:</b> A democratic culture formulates educational aims centered on liberty, critical inquiry, and equality; a totalitarian culture demands blind obedience.</li>
    <li><b style="color: #8E2DE2;">Shapes Curriculum Content:</b> School subjects, literature, and history textbooks directly reflect the values, achievements, and ideals of the prevailing culture.</li>
    <li><b style="color: #8E2DE2;">Influences Methods of Teaching:</b> An authoritarian culture fosters rote dictation, whereas a progressive culture mandates dialogic, student-centered discussions.</li>
    <li><b style="color: #8E2DE2;">Defines the Teacher's Role:</b> In ancient Indian Gurukul culture, the Guru was revered as a spiritual father; in modern secular culture, the teacher acts as a democratic facilitator.</li>
  </ul>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(ii) Impact and Role of Education in Culture</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">1. Preservation of Cultural Heritage:</b> Without schools and universities, ancient literature, philosophies, music, and scientific discoveries would vanish with passing generations.</li>
    <li><b style="color: #8E2DE2;">2. Transmission of Culture:</b> Education acts as the bridge transmitting cultural wisdom from older adults to younger children.</li>
    <li><b style="color: #8E2DE2;">3. Refinement and Purification of Culture:</b> Education is not a blind mirror; it acts as a critical filter. It weeds out obsolete superstitions, caste discrimination, gender oppression, and dogma.</li>
    <li><b style="color: #8E2DE2;">4. Acculturation and Cultural Synthesis:</b> In diverse societies like India, education synthesizes diverse regional traditions with modern democratic and technological ideals.</li>
  </ul>

  <!-- SECTION 4.4 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">4.4 Social Change: Concept and Significance</h2>

  <p>Change is the eternal, immutable law of nature and society. No human society in history has ever remained permanently stationary. <b>Social Change</b> denotes any noticeable alteration, modification, or transformation in the social structure, social institutions, interpersonal relationships, customs, or behavioral patterns of a society over time.</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(i) Definitions of Social Change</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">MacIver and Page:</b> <i>"Social change is a change in social relationships."</i></li>
    <li><b style="color: #8E2DE2;">Kingsley Davis:</b> <i>"By social change is meant only such alterations as occur in the structure and functions of society."</i></li>
    <li><b style="color: #8E2DE2;">M. D. Jenson:</b> <i>"Social change describes variations in, or modifications of, any aspect of social processes, patterns or interaction."</i></li>
  </ul>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(ii) Factors Causing Social Change</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">Technological Factors:</b> Inventions such as the steam engine, electricity, smartphones, and Artificial Intelligence revolutionize work, transport, and communication.</li>
    <li><b style="color: #8E2DE2;">Economic Factors:</b> Industrialization, urbanization, global market integration, and division of labor transform rural societies into urban metropolises.</li>
    <li><b style="color: #8E2DE2;">Biological &amp; Demographic Factors:</b> Population explosions, migration, changing birth/death rates, and urbanization remodel social life.</li>
    <li><b style="color: #8E2DE2;">Ideological &amp; Political Factors:</b> Powerful revolutionary ideas &mdash; democracy, liberty, gender equality, socialism &mdash; topple feudal regimes.</li>
  </ul>

  <!-- SECTION 4.5 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">4.5 Social Change and Education</h2>

  <p>The relationship between social change and education is two-fold and dynamic: <b>Education is both an active agent (cause) of social change, and a receptive product (effect) of social change.</b></p>

  <!-- STANDALONE CLEAN DIAGRAM 3: DUAL ENGINE (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Box 1: Education -->
        <rect x="25" y="60" width="135" height="85" rx="8" fill="#F3E8FF" stroke="#8E2DE2" stroke-width="2.5" />
        <text x="92" y="92" fill="#8E2DE2" font-size="13" font-weight="bold" text-anchor="middle">EDUCATION</text>
        <text x="92" y="112" fill="#475569" font-size="9.5" text-anchor="middle">Ideas, Values, Skills,</text>
        <text x="92" y="127" fill="#475569" font-size="9.5" text-anchor="middle">Critical Mind</text>

        <!-- Box 2: Social Change -->
        <rect x="280" y="60" width="135" height="85" rx="8" fill="#F8FAFC" stroke="#0284C7" stroke-width="2.5" />
        <text x="347" y="92" fill="#0284C7" font-size="12" font-weight="bold" text-anchor="middle">SOCIAL CHANGE</text>
        <text x="347" y="112" fill="#475569" font-size="9.5" text-anchor="middle">Modernization, Law,</text>
        <text x="347" y="127" fill="#475569" font-size="9.5" text-anchor="middle">Technology, Equality</text>

        <!-- Forward Arrow: Education as Agent -->
        <path d="M 160 80 Q 220 50 280 80" fill="none" stroke="#8E2DE2" stroke-width="2.5" />
        <polygon points="274,74 282,81 275,86" fill="#8E2DE2" />
        <text x="220" y="52" fill="#8E2DE2" font-size="10" font-weight="bold" text-anchor="middle">1. Agent / Catalyst</text>

        <!-- Backward Arrow: Education as Product -->
        <path d="M 280 125 Q 220 155 160 125" fill="none" stroke="#0284C7" stroke-width="2.5" />
        <polygon points="167,119 158,124 165,131" fill="#0284C7" />
        <text x="220" y="170" fill="#0284C7" font-size="10" font-weight="bold" text-anchor="middle">2. Product / Response</text>

        <!-- Center Synthesis Text -->
        <rect x="140" y="92" width="160" height="24" rx="4" fill="#F1F5F9" />
        <text x="220" y="108" fill="#334155" font-size="9.5" font-weight="bold" text-anchor="middle">Reciprocal Two-Way Engine</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Two-Way Dynamic Engine: Education acts as an Agent of change, and evolves as a Product of change.
    </div>
  </div>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(i) Education as an Agent (Cause) of Social Change</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">Awakens Critical Consciousness:</b> Education dispels blind superstition, fatalism, and passive acceptance of social injustices.</li>
    <li><b style="color: #8E2DE2;">Spreads Democratic &amp; Constitutional Values:</b> In modern India, education has been the foremost weapon against the caste hierarchy, untouchability, child marriage, and the subjugation of women.</li>
    <li><b style="color: #8E2DE2;">Generates Scientific &amp; Technical Skills:</b> Universities produce doctors, engineers, agronomists, and IT innovators who power economic transformation.</li>
    <li><b style="color: #8E2DE2;">Stabilizes Social Change:</b> Rapid social change risks societal chaos. Education stabilizes change by anchoring youth in core ethical values while adapting to new realities.</li>
  </ul>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(ii) Education as a Product (Effect) of Social Change</h3>
  <p>When society undergoes technological, industrial, or political transformation, education is forced to remodel itself:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">From Gurukuls to Smart Classrooms:</b> Ancient agricultural societies needed oral recitation; the modern digital economy demands computer coding, digital literacy, and AI-driven platforms.</li>
    <li><b style="color: #8E2DE2;">Curricular Reforms:</b> Emerging social concerns (climate crisis, gender justice, cyber safety) compel boards to introduce environmental science and computer studies.</li>
  </ul>

  <!-- NEP 2020 POLICY CONNECT BOX -->
  <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid #8E2DE2; border-radius: 8px; padding: 14px 18px; margin: 25px 0;">
    <h4 style="color: #8E2DE2; font-weight: bold; margin: 0 0 6px 0; font-size: 16px;">🏛️ Modern Relevance: Sociological Vision of NEP 2020</h4>
    <p style="margin: 0; color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
      The <b>National Education Policy (NEP 2020)</b> acts as a powerful sociological catalyst for India:
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">Promoting Equity &amp; Inclusion:</b> Creates Special Education Zones (SEZs) and gender inclusion funds for Socio-Economically Disadvantaged Groups (SEDGs).
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">Cultural Synthesis:</b> Revives Indian languages, local art, and indigenous knowledge systems (IKS) alongside cutting-edge global 21st-century digital competencies.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                     TAB 2: GOLDEN 25 BOARD MASTER Q&A                      */
/* -------------------------------------------------------------------------- */

export const c11Edu4HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION A HEADER -->
  <div style="background: rgba(142, 45, 226, 0.15); border-left: 5px solid #8E2DE2; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
    <h2 style="color: #8E2DE2; font-weight: bold; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer Type Questions (VSAT &bull; 1 &amp; 2 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">12 Questions &bull; Word Limit: 20–30 Words &bull; Direct Recall &amp; Board Facts</span>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q1: What is the etymological origin of the word 'Sociology'?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      'Sociology' is derived from the Latin word <b style="color: #8E2DE2;">'Socius'</b> (meaning companion or society) and the Greek word <b style="color: #8E2DE2;">'Logos'</b> (meaning science or study). Auguste Comte coined the term in 1839.
    </div>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q2: Who is regarded as the "Father of Educational Sociology"?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #8E2DE2;">George Payne</b> is regarded as the Father of Educational Sociology after publishing his landmark 1928 book, <i>'Principles of Educational Sociology'</i>.
    </div>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q3: State Emile Durkheim's sociological definition of Education.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      According to <b style="color: #8E2DE2;">Emile Durkheim:</b>
      <br>Education is the methodical socialization of the younger generation by the adult generation to build qualities required by society.
    </div>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q4: What is the primary difference between Educational Sociology and Sociology of Education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b style="color: #8E2DE2;">Educational Sociology:</b> Practical, applied problem-solving discipline for schooling.<br>
      &bull; <b style="color: #8E2DE2;">Sociology of Education:</b> Theoretical, analytical study of education as a social institution.
    </div>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q5: What is the Latin origin of the word 'Culture'?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      'Culture' originates from the Latin verb <b style="color: #8E2DE2;">'Colere'</b>, which means <i>'to cultivate'</i>, <i>'to till the ground'</i>, or to refine human intellectual and moral faculties.
    </div>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q6: State E. B. Tylor's classic definition of Culture.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      According to <b style="color: #8E2DE2;">E. B. Tylor:</b>
      <br><i>"Culture is that complex whole which includes knowledge, belief, art, morals, law, custom, and any other capabilities and habits acquired by man as a member of society."</i>
    </div>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q7: Differentiate between Material and Non-Material Culture.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b style="color: #8E2DE2;">Material Culture:</b> Tangible, physical objects (buildings, tools, smartphones, vehicles).<br>
      &bull; <b style="color: #8E2DE2;">Non-Material Culture:</b> Intangible mental creations (values, beliefs, morals, language, laws).
    </div>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q8: Who coined the term "Cultural Lag" and what does it mean?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Coined by <b style="color: #8E2DE2;">William F. Ogburn</b>. It refers to the gap when material technology changes rapidly, but non-material values and customs lag behind.
    </div>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q9: Define "Social Change" according to MacIver and Page.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      According to <b style="color: #8E2DE2;">MacIver and Page:</b>
      <br><b style="color: #8E2DE2;">"Social change is a change in social relationships."</b> It refers to modifications in social structures and behavioral patterns.
    </div>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q10: Mention any two major technological factors that cause social change.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b style="color: #8E2DE2;">Internet and Mobile Communication:</b> Instant global connectivity.<br>
      &bull; <b style="color: #8E2DE2;">Industrial Automation &amp; AI:</b> Transformation of employment, labor, and urban lifestyles.
    </div>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q11: State two ways in which Education acts as an Agent of Social Change.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; By promoting scientific temper and breaking orthodox taboos (e.g. child marriage, caste discrimination).<br>
      &bull; By equipping youth with modern skills and democratic values to reform society.
    </div>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q12: How is Education a "Product" of Social Change?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      When society undergoes industrial, technological, or political changes, schools are compelled to adapt their curricula, teaching methods, and digital classrooms to match new social demands.
    </div>
  </div>

  <!-- SECTION B HEADER -->
  <div style="background: rgba(142, 45, 226, 0.15); border-left: 5px solid #8E2DE2; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: #8E2DE2; font-weight: bold; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION B: Short Answer Type Questions (SAT &bull; 4 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">8 Questions &bull; Word Limit: 80–100 Words &bull; 4 to 5 Themed Bullet Points</span>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q13: Explain the meaning and four major areas under the Scope of Educational Sociology.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Educational Sociology investigates how social forces influence school life and vice-versa:
      <br>&bull; <b style="color: #8E2DE2;">Social Agencies of Education:</b> Studies the educational responsibilities of family, school, peer groups, and mass media.
      <br>&bull; <b style="color: #8E2DE2;">Classroom Social Dynamics:</b> Investigates teacher-student relationships, sociometric groupings, and classroom morale.
      <br>&bull; <b style="color: #8E2DE2;">Social Stratification &amp; Equity:</b> Analyzes the obstacles posed by caste, gender, and economic poverty to educational access.
      <br>&bull; <b style="color: #8E2DE2;">Socialization Process:</b> Explains how the school transmits democratic values and converts raw human infants into cultured citizens.
    </div>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q14: Explain four essential characteristics of Culture.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Culture exhibits distinctive sociological attributes:
      <br>&bull; <b style="color: #8E2DE2;">Culture is Learned:</b> It is acquired socially after birth through experience, language, and imitation &mdash; not inherited through genes.
      <br>&bull; <b style="color: #8E2DE2;">Culture is Shared:</b> It is the collective common heritage of a social group, never private individual property.
      <br>&bull; <b style="color: #8E2DE2;">Culture is Transmissive:</b> It is handed down through generations via oral traditions, literature, and educational institutions.
      <br>&bull; <b style="color: #8E2DE2;">Culture is Dynamic &amp; Adaptive:</b> It evolves continuously by absorbing scientific discoveries and intercultural contacts.
    </div>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q15: Explain W. F. Ogburn's theory of "Cultural Lag" with a concrete modern example.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Cultural Lag explains sociological imbalance during historical transitions:
      <br>&bull; <b style="color: #8E2DE2;">Core Concept:</b> W. F. Ogburn observed that material culture (tools, technology) moves forward rapidly, while non-material culture (customs, laws, ethics) changes slowly.
      <br>&bull; <b style="color: #8E2DE2;">The Resulting Lag:</b> The gap between fast-moving technology and slow-moving ethics creates social disorganization.
      <br>&bull; <b style="color: #8E2DE2;">Modern Example:</b> Internet and smartphones spread instantly across society, but cyber ethics, privacy laws, and digital etiquette lagged behind, resulting in cybercrime and addiction.
      <br>&bull; <b style="color: #8E2DE2;">Role of Education:</b> Education bridges this lag by cultivating moral wisdom to responsibly utilize technological advancements.
    </div>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q16: How does Culture influence Education? State four distinct ways.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The prevailing cultural matrix shapes every facet of the educational system:
      <br>&bull; <b style="color: #8E2DE2;">Determines Educational Aims:</b> Democratic cultures prioritize personal liberty and equality; religious cultures emphasize spiritual virtues.
      <br>&bull; <b style="color: #8E2DE2;">Shapes Curriculum Content:</b> School textbooks, literature, and social sciences directly mirror the heritage and ideals of the society.
      <br>&bull; <b style="color: #8E2DE2;">Guides Teaching Methods:</b> Progressive cultures mandate dialogic inquiry and experiments; orthodox cultures promote rote memorization.
      <br>&bull; <b style="color: #8E2DE2;">Defines the Teacher's Role:</b> Determines whether the teacher acts as an authoritarian master or as an empathetic democratic guide.
    </div>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q17: Explain the role of Education in the Preservation and Refinement of Culture.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Education serves as the cultural guardian and filter for human civilization:
      <br>&bull; <b style="color: #8E2DE2;">Preservation of Heritage:</b> Archives, libraries, and universities conserve ancient philosophies, scientific lore, and classical literature.
      <br>&bull; <b style="color: #8E2DE2;">Transmission Across Generations:</b> Acts as the pipeline delivering accumulated societal knowledge to the younger generation.
      <br>&bull; <b style="color: #8E2DE2;">Critical Refinement:</b> Education evaluates traditional customs, discarding superstitions, caste prejudices, and gender subjugation.
      <br>&bull; <b style="color: #8E2DE2;">Cultural Innovation:</b> Stimulates original research, artistic expression, and intercultural synthesis.
    </div>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q18: State four major factors responsible for bringing about Social Change.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Social change is driven by multiple interrelated forces:
      <br>&bull; <b style="color: #8E2DE2;">Technological Inventions:</b> Electricity, automobiles, computers, and AI fundamentally alter communication and human lifestyles.
      <br>&bull; <b style="color: #8E2DE2;">Economic Industrialization:</b> Factory production and urbanization break joint families and rural agrarian structures.
      <br>&bull; <b style="color: #8E2DE2;">Ideological &amp; Political Movements:</b> Ideas of democracy, human rights, and feminism dismantle feudal hierarchies.
      <br>&bull; <b style="color: #8E2DE2;">Demographic &amp; Environmental Factors:</b> Population growth, migration, and climate shifts force institutional adaptations.
    </div>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q19: Explain how Education acts as an Instrument of Social Change in India.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      In developing nations like India, education spearheads social transformation:
      <br>&bull; <b style="color: #8E2DE2;">Eliminating Social Injustices:</b> Eradicates untouchability, child marriage, dowry evils, and gender subjugation.
      <br>&bull; <b style="color: #8E2DE2;">Instilling Constitutional Values:</b> Inculcates secularism, democracy, fundamental rights, and the rule of law.
      <br>&bull; <b style="color: #8E2DE2;">Promoting Social Mobility:</b> Enables disadvantaged rural youth to gain technical qualifications and enter high-income professions.
      <br>&bull; <b style="color: #8E2DE2;">Fostering Scientific Temper:</b> Replaces fatalistic superstitions with empirical inquiry and critical reasoning.
    </div>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q20: What are the primary obstacles and resistance to Social Change through Education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Educational social reform often confronts formidable barriers:
      <br>&bull; <b style="color: #8E2DE2;">Orthodox Traditions &amp; Dogma:</b> Deep-rooted religious fundamentalism and caste prejudices resist modern progressive ideas.
      <br>&bull; <b style="color: #8E2DE2;">Cultural Lag:</b> Emotional reluctance of communities to abandon outdated customs even when technology advances.
      <br>&bull; <b style="color: #8E2DE2;">Economic Poverty:</b> Impoverished families prioritize immediate child labor over long-term schooling.
      <br>&bull; <b style="color: #8E2DE2;">Systemic Institutional Inertia:</b> Rigid bureaucratic curricula and inadequate school funding slow reform implementation.
    </div>
  </div>

  <!-- SECTION C HEADER -->
  <div style="background: rgba(142, 45, 226, 0.15); border-left: 5px solid #8E2DE2; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: #8E2DE2; font-weight: bold; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION C: Long Answer Type Questions (LAT &bull; 6 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">5 Comprehensive Board Questions &bull; 3-Tier Answer Blueprint (Intro &rarr; Core Analysis &rarr; Conclusion)</span>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q21: Define Educational Sociology. Distinguish it from Sociology of Education, and elaborate its comprehensive scope.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #8E2DE2;">1. Introduction:</b><br>
      Educational Sociology is an applied branch of sociology that studies the relationship between educational institutions and the broader social structure. Founded conceptually by George Payne in 1928, it views education as a deliberate social process through which personality is developed and society is progressively reformed.
      <br><br>
      <b style="color: #8E2DE2;">2. Core Distinction &amp; Scope:</b><br>
      &bull; <b style="color: #8E2DE2; font-weight: bold;">Educational Sociology vs. Sociology of Education:</b>
      <br>&nbsp;&nbsp;&bull; <i>Educational Sociology:</i> Normative, practical, and action-oriented. It utilizes sociological findings directly to resolve school crises, design curricula, and eradicate social prejudices.
      <br>&nbsp;&nbsp;&bull; <i>Sociology of Education:</i> Descriptive, objective, and theoretical. It analyzes the educational system as one social institution among many (family, church, state).
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">Comprehensive Scope:</b>
      <br>&nbsp;&nbsp;&bull; <i>Social Agencies of Education:</i> Analyzes formal (school), informal (family), and non-formal (community media) educational bodies.
      <br>&nbsp;&nbsp;&bull; <i>Classroom Social Dynamics:</i> Investigates teacher authority, peer group socialization, and school organizational culture.
      <br>&nbsp;&nbsp;&bull; <i>Social Stratification &amp; Equal Opportunity:</i> Investigates how caste, social class, and gender disparities restrict educational access, seeking equitable solutions.
      <br><br>
      <b style="color: #8E2DE2;">3. Conclusion &amp; Educational Implication:</b><br>
      In conclusion, educational sociology prevents education from becoming an isolated ivory tower. It ensures that schools remain closely tied to communal needs, training youth to become socially efficient, responsible, and ethical democratic citizens.
    </div>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q22: Define Culture. Analyze its components and characteristics, and explain the concept of Cultural Lag with modern relevance.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #8E2DE2;">1. Introduction:</b><br>
      Derived from the Latin <i>Colere</i> (to cultivate or refine), culture represents the entire social heritage of humanity. As E. B. Tylor famously defined, culture is that complex whole including knowledge, belief, art, morals, law, custom, and habits acquired by human beings as members of organized society.
      <br><br>
      <b style="color: #8E2DE2;">2. Components, Characteristics, and Cultural Lag:</b><br>
      &bull; <b style="color: #8E2DE2; font-weight: bold;">Dual Components:</b>
      <br>&nbsp;&nbsp;&bull; <i>Material Culture:</i> Concrete physical artifacts (skyscrapers, machines, computers, transport systems).
      <br>&nbsp;&nbsp;&bull; <i>Non-Material Culture:</i> Abstract spiritual elements (moral codes, religious beliefs, legal systems, artistic tastes).
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">Key Characteristics:</b> Culture is learned (non-biological), shared, transmissive across generations, dynamic, and integrated.
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">W. F. Ogburn's Theory of Cultural Lag:</b>
      <br>&nbsp;&nbsp;&bull; Ogburn demonstrated that material technology gallops forward rapidly, while non-material customs, laws, and ethics adapt very slowly.
      <br>&nbsp;&nbsp;&bull; <i>Modern Case:</i> Rapid expansion of social media and smartphone technology (material) occurred in the absence of digital ethics, privacy laws, and mental health safeguards (non-material), resulting in cyberbullying and social alienation.
      <br><br>
      <b style="color: #8E2DE2;">3. Conclusion &amp; Role of Education:</b><br>
      Education is the vital social instrument that bridges cultural lag. It upgrades ethical awareness, critical thinking, and social values to keep pace with rapid technological revolutions.
    </div>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q23: Critically examine the symbiotic relationship between Culture and Education. How do they mutually shape each other?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #8E2DE2;">1. Introduction:</b><br>
      The relationship between culture and education is reciprocal, organic, and inseparable. As sociologists state, education is both a product and a creator of culture. Culture provides the soil and seeds for education, while education cultivates, transmits, and refines that very culture.
      <br><br>
      <b style="color: #8E2DE2;">2. Two-Way Mutual Interaction:</b><br>
      &bull; <b style="color: #8E2DE2; font-weight: bold;">A. Impact of Culture on Education:</b>
      <br>&nbsp;&nbsp;&bull; <i>Aims &amp; Ideals:</i> The cultural ethos determines educational objectives (e.g. democratic cultures emphasize freedom; religious cultures emphasize piety).
      <br>&nbsp;&nbsp;&bull; <i>Curriculum &amp; Texts:</i> Literature, history, and social sciences taught in schools directly reflect cultural heritage.
      <br>&nbsp;&nbsp;&bull; <i>Pedagogical Methods:</i> Democratic cultures foster experimental inquiry; dogmatic cultures enforce passive memorization.
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">B. Role of Education in Culture:</b>
      <br>&nbsp;&nbsp;&bull; <i>Preservation:</i> Preserves ancient philosophical texts, arts, and scientific discoveries from extinction.
      <br>&nbsp;&nbsp;&bull; <i>Transmission:</i> Passes down linguistic, moral, and vocational heritage from generation to generation.
      <br>&nbsp;&nbsp;&bull; <i>Purification &amp; Refinement:</i> Acts as a progressive filter, eradicating cruel social taboos (untouchability, child marriage, sati, superstition).
      <br>&nbsp;&nbsp;&bull; <i>Cultural Synthesis:</i> Harmonizes traditional roots with contemporary global science.
      <br><br>
      <b style="color: #8E2DE2;">3. Conclusion &amp; Educational Implication:</b><br>
      In conclusion, education without culture is soulless, and culture without education is stagnant. The school functions as a cultural laboratory where the wisdom of the past is harmonized with the scientific necessities of the future.
    </div>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q24: What is Social Change? Analyze its nature, characteristics, and the major factors responsible for social transformation.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #8E2DE2;">1. Introduction:</b><br>
      Social change is the universal, ongoing process whereby the structures, functions, institutions, and behavioral norms of a society undergo observable alteration over time. According to MacIver and Page, social change is essentially a change in social relationships and institutions.
      <br><br>
      <b style="color: #8E2DE2;">2. Nature and Driving Factors:</b><br>
      &bull; <b style="color: #8E2DE2; font-weight: bold;">Key Characteristics:</b> Social change is universal (occurs in all societies), continuous (never permanently halted), temporal (unfolds over time), and multi-causal.
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">Primary Driving Factors:</b>
      <br>&nbsp;&nbsp;&bull; <i>Technological &amp; Scientific Factors:</i> Electricity, automobiles, computers, and AI revolutionize employment, urban living, and interpersonal communication.
      <br>&nbsp;&nbsp;&bull; <i>Economic Industrialization:</i> The shift from agrarian feudalism to modern factory and service capitalism reshapes joint families into nuclear units.
      <br>&nbsp;&nbsp;&bull; <i>Ideological &amp; Political Revolutions:</i> Concepts of universal suffrage, human rights, and gender equality overturn ancient feudal orders.
      <br>&nbsp;&nbsp;&bull; <i>Demographic Movements:</i> Rapid population shifts, urban migration, and intercultural mixing demand new social structures.
      <br><br>
      <b style="color: #8E2DE2;">3. Conclusion &amp; Significance:</b><br>
      Social change is essential for civilizational vitality. Without it, societies stagnate into decadence. It enables humanity to overcome archaic injustices, respond to environmental challenges, and build progressive democratic orders.
    </div>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q25: "Education is both an Agent and a Product of Social Change." Discuss this dynamic two-way relationship with reference to modern Indian society and NEP 2020.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #8E2DE2;">1. Introduction:</b><br>
      Education and social change operate as a closed, dynamic circular engine. Education acts as the catalyst initiating social transformation, while social changes simultaneously compel educational systems to modernize their structures.
      <br><br>
      <b style="color: #8E2DE2;">2. In-Depth Comparative Analysis:</b><br>
      &bull; <b style="color: #8E2DE2; font-weight: bold;">Education as an Agent (Cause) of Social Change:</b>
      <br>&nbsp;&nbsp;&bull; <i>Awakens Critical Consciousness:</i> Destroys fatalistic acceptance of poverty and caste oppression.
      <br>&nbsp;&nbsp;&bull; <i>Promotes Equality:</i> Female education in India has revolutionized women's workforce participation and reduced maternal mortality.
      <br>&nbsp;&nbsp;&bull; <i>Drives Economic Modernization:</i> STEM education generates the engineers and innovators powering India's global IT leadership.
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">Education as a Product (Effect) of Social Change:</b>
      <br>&nbsp;&nbsp;&bull; The rise of the digital knowledge economy compelled schools to abandon chalk-and-talk methods for smart digital classrooms.
      <br>&nbsp;&nbsp;&bull; Modern social realities forced the inclusion of environmental education, computer science, and gender sensitivity into standard curricula.
      <br>&bull; <b style="color: #8E2DE2; font-weight: bold;">NEP 2020's Sociological Vision:</b>
      <br>&nbsp;&nbsp;&bull; NEP 2020 harnesses education as an instrument of social equity through Special Education Zones (SEZs) and gender inclusion funds, while updating curricula to meet 21st-century digital realities.
      <br><br>
      <b style="color: #8E2DE2;">3. Conclusion &amp; Educational Implication:</b><br>
      Education is neither a passive mirror of society nor an all-powerful dictator. It is an enlightened partner in social evolution, guiding democratic change and preserving cultural stability.
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: 25 SMART INTERACTIVE MCQS                   */
/* -------------------------------------------------------------------------- */

export const c11Edu4Mcqs = [
  {
    "id": "c11-edu-4-mcq-1",
    "question": "Who coined the term 'Sociology' in the year 1839 from Latin 'Socius' and Greek 'Logos'?",
    "options": [
      "A):   George Payne",
      "B):   Auguste Comte",
      "C):   Emile Durkheim",
      "D):   John Dewey"
    ],
    "correctAnswer": "b",
    "explanation": "Auguste Comte is recognized as the Father of Sociology and coined the term in 1839."
  },
  {
    "id": "c11-edu-4-mcq-2",
    "question": "Who is widely acknowledged as the 'Father of Educational Sociology' following his 1928 book 'Principles of Educational Sociology'?",
    "options": [
      "A):   George Payne",
      "B):   Wilhelm Wundt",
      "C):   Max Weber",
      "D):   Aristotle"
    ],
    "correctAnswer": "a",
    "explanation": "George Payne is known as the Father of Educational Sociology."
  },
  {
    "id": "c11-edu-4-mcq-3",
    "question": "The word 'Culture' is derived from the Latin verb 'Colere'. What does it mean?",
    "options": [
      "A):   To trade or sell",
      "B):   To fight or conquer",
      "C):   To cultivate or refine",
      "D):   To run or compete"
    ],
    "correctAnswer": "c",
    "explanation": "'Colere' is a Latin verb meaning to cultivate, till the ground, or refine human faculties."
  },
  {
    "id": "c11-edu-4-mcq-4",
    "question": "Who gave the classic 1871 definition: 'Culture is that complex whole which includes knowledge, belief, art, morals, law, custom...'?",
    "options": [
      "A):   B. F. Skinner",
      "B):   Karl Marx",
      "C):   John Locke",
      "D):   Edward Burnett Tylor"
    ],
    "correctAnswer": "d",
    "explanation": "E. B. Tylor formulated this foundational anthropological definition in 1871."
  },
  {
    "id": "c11-edu-4-mcq-5",
    "question": "Which of the following belongs to Material Culture?",
    "options": [
      "A):   Religious beliefs and moral values",
      "B):   Buildings, computers, and tools",
      "C):   Poetry and philosophical theories",
      "D):   Customs and wedding ceremonies"
    ],
    "correctAnswer": "b",
    "explanation": "Material culture consists of concrete, tangible physical artifacts created by humans."
  },
  {
    "id": "c11-edu-4-mcq-6",
    "question": "Who formulated the famous sociological concept of 'Cultural Lag'?",
    "options": [
      "A):   William F. Ogburn",
      "B):   Emile Durkheim",
      "C):   Sir Percy Nunn",
      "D):   Auguste Comte"
    ],
    "correctAnswer": "a",
    "explanation": "W. F. Ogburn introduced the concept of Cultural Lag in his 1922 book 'Social Change'."
  },
  {
    "id": "c11-edu-4-mcq-7",
    "question": "'Social change is a change in social relationships.' This concise definition was given by:",
    "options": [
      "A):   Plato",
      "B):   Gates and Taylor",
      "C):   Rousseau",
      "D):   MacIver and Page"
    ],
    "correctAnswer": "d",
    "explanation": "MacIver and Page famously defined social change as changes in social relationships."
  },
  {
    "id": "c11-edu-4-mcq-8",
    "question": "Which of the following is NOT an inherent characteristic of culture?",
    "options": [
      "A):   Culture is learned",
      "B):   Culture is shared socially",
      "C):   Culture is biologically inherited through genes",
      "D):   Culture is transmissive across generations"
    ],
    "correctAnswer": "c",
    "explanation": "Culture is never biologically inherited through genes; it is acquired socially through learning and socialization."
  },
  {
    "id": "c11-edu-4-mcq-9",
    "question": "Who defined Education as 'the socialization of the younger generation'?",
    "options": [
      "A):   Auguste Comte",
      "B):   Emile Durkheim",
      "C):   Sigmund Freud",
      "D):   Wilhelm Wundt"
    ],
    "correctAnswer": "b",
    "explanation": "French sociologist Emile Durkheim defined education as the methodical socialization of the young."
  },
  {
    "id": "c11-edu-4-mcq-10",
    "question": "Which of the following represents Non-Material Culture?",
    "options": [
      "A):   Moral values, language, and customs",
      "B):   Smartphones and tablets",
      "C):   Railways and bridges",
      "D):   School laboratory apparatus"
    ],
    "correctAnswer": "a",
    "explanation": "Non-material culture consists of intangible values, beliefs, customs, and language."
  },
  {
    "id": "c11-edu-4-mcq-11",
    "question": "How does Educational Sociology differ fundamentally from the Sociology of Education?",
    "options": [
      "A):   They are completely identical in every respect",
      "B):   Educational sociology is for animals while sociology of education is for humans",
      "C):   Educational sociology is practical and applied, whereas sociology of education is theoretical and descriptive",
      "D):   Sociology of education was invented in India only"
    ],
    "correctAnswer": "c",
    "explanation": "Educational sociology is applied and normative, while sociology of education is theoretical general sociology."
  },
  {
    "id": "c11-edu-4-mcq-12",
    "question": "According to W. F. Ogburn, what is the underlying cause of 'Cultural Lag'?",
    "options": [
      "A):   Governments abolish all technological inventions",
      "B):   People stop going to schools",
      "C):   Non-material culture moves faster than technology",
      "D):   Material culture (technology) advances rapidly, while non-material culture (customs and ethics) lags behind"
    ],
    "correctAnswer": "d",
    "explanation": "Cultural lag arises when material technology gallops forward faster than human ethical and legal customs can adapt."
  },
  {
    "id": "c11-edu-4-mcq-13",
    "question": "In what way does Culture directly dictate the educational curriculum of a nation?",
    "options": [
      "A):   School subjects, literature, and history directly reflect the values, ideals, and achievements of that culture",
      "B):   Culture forces schools to teach only foreign languages",
      "C):   Culture closes all schools during winter",
      "D):   Culture prohibits the study of science"
    ],
    "correctAnswer": "a",
    "explanation": "Curriculum is the vehicle for transmitting the prevailing cultural heritage, ideals, and knowledge of a society."
  },
  {
    "id": "c11-edu-4-mcq-14",
    "question": "How does Education serve as a 'critical filter' or 'refiner' of culture rather than a blind mirror?",
    "options": [
      "A):   By destroying all ancient historical libraries",
      "B):   By eliminating outdated superstitions, caste discrimination, and dogmas while preserving noble heritage",
      "C):   By forcing all students to adopt identical clothing",
      "D):   By rejecting all scientific research"
    ],
    "correctAnswer": "b",
    "explanation": "Education critically weeds out obsolete, harmful taboos (untouchability, child marriage) while conserving positive values."
  },
  {
    "id": "c11-edu-4-mcq-15",
    "question": "Why is Education described as an 'Agent of Social Change'?",
    "options": [
      "A):   Because it opposes all forms of modernization",
      "B):   Because it prevents people from talking to each other",
      "C):   Because it enforces ancient feudal caste systems",
      "D):   Because it creates new scientific values, dismantles social prejudices, and trains reformers"
    ],
    "correctAnswer": "d",
    "explanation": "Education awakens critical consciousness, equips youth with modern skills, and instills democratic ideals that reform society."
  },
  {
    "id": "c11-edu-4-mcq-16",
    "question": "Which of the following scenarios best demonstrates Education acting as a 'Product of Social Change'?",
    "options": [
      "A):   A school closing down permanently due to heavy rainfall",
      "B):   A teacher assigning homework from an ancient manuscript",
      "C):   Schools adopting computer coding and AI curricula following the global digital revolution",
      "D):   Students wearing traditional uniform"
    ],
    "correctAnswer": "c",
    "explanation": "When external technological revolution forces schools to overhaul their curricula and classrooms, education is reacting as a product of social change."
  },
  {
    "id": "c11-edu-4-mcq-17",
    "question": "What is meant by the 'Super-Organic' characteristic of culture?",
    "options": [
      "A):   Culture is composed entirely of organic chemicals",
      "B):   Culture outlives the physical lifespan of any individual human creator and persists across centuries",
      "C):   Culture exists only inside vegetables and crops",
      "D):   Culture can be seen through an optical microscope"
    ],
    "correctAnswer": "b",
    "explanation": "'Super-organic' means culture transcends individual biological lifespans and endures across generations as a social legacy."
  },
  {
    "id": "c11-edu-4-mcq-18",
    "question": "Which of the following is considered a major sociological barrier that resists social change through education?",
    "options": [
      "A):   Deep-seated traditional orthodoxy, caste prejudices, and fear of losing privilege",
      "B):   Abundance of modern science laboratories",
      "C):   High literacy rates among women",
      "D):   Prompt distribution of school scholarships"
    ],
    "correctAnswer": "a",
    "explanation": "Orthodoxy, fatalism, cultural inertia, and entrenched caste/gender prejudices resist progressive social transformation."
  },
  {
    "id": "c11-edu-4-mcq-19",
    "question": "Assertion (A): The invention of smartphones without corresponding digital etiquette and cyber-ethics education created rampant cyberbullying.\nReason (R): As W. F. Ogburn proved, material culture advances exponentially faster than non-material customs and laws, causing Cultural Lag.",
    "options": [
      "A):   (A) is false, but (R) is true",
      "B):   Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
      "C):   (A) is true, but (R) is false",
      "D):   Both (A) and (R) are true, and (R) is the correct explanation of (A)"
    ],
    "correctAnswer": "d",
    "explanation": "Smartphones (material) outpaced cyber ethics (non-material), causing a classic cultural lag that education must bridge."
  },
  {
    "id": "c11-edu-4-mcq-20",
    "question": "A village community previously restricted girls from studying past Grade 5. After the establishment of a local high school and awareness campaigns, girls now top state exams and enter universities. This illustrates:",
    "options": [
      "A):   Education acting merely as a passive preserver of orthodox tradition",
      "B):   The negative impact of extreme individualism",
      "C):   Education acting as a transformative agent of social change and gender justice",
      "D):   Totalitarian military indoctrination"
    ],
    "correctAnswer": "c",
    "explanation": "Breaking entrenched gender subjugation through schooling is a prime example of education driving progressive social change."
  },
  {
    "id": "c11-edu-4-mcq-21",
    "question": "How does the National Education Policy (NEP 2020) embody the sociological synthesis between Cultural Preservation and Modernization?",
    "options": [
      "A):   By banning all foreign science and technology textbooks",
      "B):   By reviving Indian Knowledge Systems (IKS) and mother-tongue instruction alongside cutting-edge global 21st-century digital competencies",
      "C):   By abolishing all historical monuments",
      "D):   By mandating ancient Gurukul forest living for all students"
    ],
    "correctAnswer": "b",
    "explanation": "NEP 2020 uniquely synthesizes rootedness in Indian cultural ethos with cutting-edge global digital skills."
  },
  {
    "id": "c11-edu-4-mcq-22",
    "question": "Match the Sociological Thinker with their core contribution:\n(a) George Payne      — (1) Defined Culture as that complex whole (1871)\n(b) E. B. Tylor       — (2) Formulated theory of Cultural Lag\n(c) W. F. Ogburn      — (3) Father of Educational Sociology (1928)\n(d) Emile Durkheim    — (4) Education is the socialization of the young",
    "options": [
      "A):   (a)-(3), (b)-(4), (c)-(1), (d)-(2)",
      "B):   (a)-(1), (b)-(2), (c)-(3), (d)-(4)",
      "C):   (a)-(4), (b)-(3), (c)-(2), (d)-(1)",
      "D):   (a)-(3), (b)-(1), (c)-(2), (d)-(4)"
    ],
    "correctAnswer": "d",
    "explanation": "Payne: Father of Ed. Sociology; Tylor: Complex Whole Culture; Ogburn: Cultural Lag; Durkheim: Socialization."
  },
  {
    "id": "c11-edu-4-mcq-23",
    "question": "Why can an educational system never be 'socially neutral'?",
    "options": [
      "A):   Because education inevitably reflects and promotes the values, power structures, and cultural ideals of the society it serves",
      "B):   Because all schools are built by the military",
      "C):   Because teachers are forbidden from voting",
      "D):   Because textbooks are written in code"
    ],
    "correctAnswer": "a",
    "explanation": "Education is intrinsically a social institution; its curriculum, language, and goals reflect societal power and cultural values."
  },
  {
    "id": "c11-edu-4-mcq-24",
    "question": "Which of the following is the most accurate description of the relationship between Education and Social Change?",
    "options": [
      "A):   It is a one-way street where only society changes education",
      "B):   Education and social change have zero connection or influence on each other",
      "C):   It is a reciprocal, two-way interaction where education initiates social changes and remodels itself in response to social transformations",
      "D):   Education only prevents changes from ever taking place"
    ],
    "correctAnswer": "c",
    "explanation": "Education and social change operate in a symbiotic, two-way loop: education causes change and is remodeled by change."
  },
  {
    "id": "c11-edu-4-mcq-25",
    "question": "When an educational system successfully stabilizes social change, what does it achieve?",
    "options": [
      "A):   It halts all scientific discoveries permanently",
      "B):   It prevents social dislocation and moral anarchy by anchoring youth in core ethical values while adapting smoothly to technological changes",
      "C):   It ensures that no student ever questions authority",
      "D):   It eliminates all competitive examinations"
    ],
    "correctAnswer": "b",
    "explanation": "Stabilizing social change means guiding society through transitions smoothly without suffering cultural breakdown or moral vacuum."
  }
];
