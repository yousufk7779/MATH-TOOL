// Class 11 Political Science Chapter 16: Citizenship (Marks: 04)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #FFAB00 (Amber Gold / Warm Honey)

const themeColor = "#FFAB00";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol16HtmlOverview = `
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
  <div style="background: rgba(255, 171, 0, 0.06); border: 1.5px solid #FFAB00; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FFAB00; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Concepts of Citizenship</h2>
    <p class="text-center" style="color: #FFE082; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 16: Citizenship (4 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFAB00; border-radius: 6px;">
        <b style="color: #FFAB00; font-size: 16px; display: block; margin-bottom: 4px;">1. Citizen &amp; Citizenship:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Citizenship is full and equal membership in a sovereign political community. A citizen is an individual entitled to all civil, political, and socio-economic rights guaranteed by the state, owing corresponding allegiance and civic obligations to the nation.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFAB00; border-radius: 6px;">
        <b style="color: #FFAB00; font-size: 16px; display: block; margin-bottom: 4px;">2. Citizen vs. Alien:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A citizen enjoys complete political rights (voting, contesting elections, holding public office) and constitutional protection. An alien (foreign national) possesses basic civil protections (life and personal liberty under Article 21 in India) but is strictly barred from voting, contesting elections, or occupying constitutional offices.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFAB00; border-radius: 6px;">
        <b style="color: #FFAB00; font-size: 16px; display: block; margin-bottom: 4px;">3. Stateless Persons &amp; Refugees:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Individuals who do not possess legal citizenship in any sovereign state, often displaced by war, ethnic cleansing, famine, or state collapse, deprived of what political philosopher Hannah Arendt termed <i>&lsquo;the right to have rights&rsquo;</i>.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FFAB00; border-radius: 6px;">
        <b style="color: #FFAB00; font-size: 16px; display: block; margin-bottom: 4px;">4. Global Citizenship:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A cosmopolitan moral and political ideal suggesting that in an interconnected world, individuals have ethical duties and human solidarity toward all humanity across national borders to address global crises (climate change, pandemics, war, and displacement).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WHO IS A CITIZEN? WHAT IS CITIZENSHIP? -->
  <h2 style="color: #FFAB00; border-bottom: 2px solid #FFAB00; padding-bottom: 8px; margin-top: 30px; font-size: 20px;">1. Who is a Citizen? Full and Equal Membership in a Political Community</h2>

  <p>In everyday language, we often identify people as residents of a city, town, or neighborhood. But in political theory, <b style="color: #FFAB00;">Citizenship</b> is far more than mere geographic residence. It defines a profound legal, political, and ethical relationship between the individual and a sovereign state.</p>

  <p>Citizenship signifies <b style="color: #FFAB00;">Full and Equal Membership</b> of a political community. It implies that:</p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #FFAB00;">Full Membership:</b> The citizen is not a subject or second-class inhabitant. They possess the complete bundle of civil liberties (speech, movement, assembly), political rights (universal adult franchise, right to hold public office), and social protections guaranteed by the constitution.</li>
    <li><b style="color: #FFAB00;">Equal Membership:</b> No citizen can be subjected to state discrimination based on religion, race, caste, sex, or place of birth (enshrined in Article 15 of the Indian Constitution). A billionaire industrialist and an impoverished street vendor stand as legal equals at the voting booth &mdash; &lsquo;one person, one vote, one value&rsquo;.</li>
  </ul>

  <!-- THINKER QUOTE BOX: T.H. MARSHALL -->
  <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-style: italic; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &ldquo;Citizenship is a status bestowed on those who are full members of a community. All who possess the status are equal with respect to the rights and duties with which the status is endowed.&rdquo;
    </p>
    <p style="margin: 6px 0 0 0; text-align: right; color: #FFAB00; font-weight: bold; font-size: 14px;">
      &mdash; T.H. Marshall, <i>Citizenship and Social Class</i> (1950)
    </p>
  </div>

  <p><b style="color: #FFAB00;">T.H. Marshall&rsquo;s Three Stages of Citizenship:</b></p>
  <p>British sociologist T.H. Marshall traced the historical evolution of modern citizenship through three distinct generational stages:</p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #FFAB00;">(i) Civil Rights (18th Century):</b> Rights necessary for individual freedom &mdash; liberty of the person, freedom of speech, thought and faith, right to own property, and right to justice through independent courts.</li>
    <li><b style="color: #FFAB00;">(ii) Political Rights (19th Century):</b> Right to participate in the exercise of political power, either as an elector or as an elected representative via universal franchise.</li>
    <li><b style="color: #FFAB00;">(iii) Social Rights (20th Century):</b> The right to a minimum standard of economic welfare, social security, public healthcare, and free education, enabling every citizen to live the life of a civilized human being.</li>
  </ul>

  <!-- ULTRA HD VECTOR SVG DIAGRAM: T.H. MARSHALL'S CITIZENSHIP TRIAD -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 171, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 650px;">
      <svg viewBox="0 0 650 320" style="width: 100%; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="320" fill="#FFFFFF"/>
        
        <!-- Header Banner -->
        <rect x="25" y="15" width="600" height="42" rx="8" fill="#FFAB00"/>
        <text x="325" y="42" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="17" font-weight="bold">THE THREE PILLARS OF MODERN CITIZENSHIP (T.H. MARSHALL)</text>
        
        <!-- Pillar 1: Civil Rights -->
        <rect x="35" y="75" width="180" height="225" rx="8" fill="#FFFDE7" stroke="#FFAB00" stroke-width="2"/>
        <rect x="35" y="75" width="180" height="36" rx="8" fill="#FF8F00"/>
        <text x="125" y="99" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">⚖️ CIVIL RIGHTS</text>
        <text x="45" y="130" fill="#E65100" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">18th Century Focus</text>
        <text x="45" y="155" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Liberty of Person</text>
        <text x="45" y="180" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Free Speech &amp; Faith</text>
        <text x="45" y="205" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Property &amp; Contracts</text>
        <text x="45" y="230" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Courts of Law</text>
        <rect x="45" y="255" width="160" height="32" rx="4" fill="#FFF8E1" stroke="#FFC107"/>
        <text x="125" y="275" text-anchor="middle" fill="#E65100" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Individual Liberty</text>

        <!-- Pillar 2: Political Rights -->
        <rect x="235" y="75" width="180" height="225" rx="8" fill="#FFF8E1" stroke="#FFAB00" stroke-width="2"/>
        <rect x="235" y="75" width="180" height="36" rx="8" fill="#FF6F00"/>
        <text x="325" y="99" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">🗳️ POLITICAL RIGHTS</text>
        <text x="245" y="130" fill="#E65100" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">19th Century Focus</text>
        <text x="245" y="155" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Universal Franchise</text>
        <text x="245" y="180" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Right to Contest Office</text>
        <text x="245" y="205" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Political Parties</text>
        <text x="245" y="230" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Parliamentary Rule</text>
        <rect x="245" y="255" width="160" height="32" rx="4" fill="#FFE082" stroke="#FFA000"/>
        <text x="325" y="275" text-anchor="middle" fill="#E65100" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Democratic Power</text>

        <!-- Pillar 3: Social Rights -->
        <rect x="435" y="75" width="180" height="225" rx="8" fill="#FFFDE7" stroke="#FFAB00" stroke-width="2"/>
        <rect x="435" y="75" width="180" height="36" rx="8" fill="#E65100"/>
        <text x="525" y="99" text-anchor="middle" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">🌾 SOCIAL RIGHTS</text>
        <text x="445" y="130" fill="#BF360C" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">20th Century Focus</text>
        <text x="445" y="155" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Minimum Economic Security</text>
        <text x="445" y="180" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Free Primary Education</text>
        <text x="445" y="205" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Public Healthcare</text>
        <text x="445" y="230" fill="#5D4037" font-family="system-ui, sans-serif" font-size="11.5">• Social Welfare Net</text>
        <rect x="445" y="255" width="160" height="32" rx="4" fill="#FFCC80" stroke="#FB8C00"/>
        <text x="525" y="275" text-anchor="middle" fill="#BF360C" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Human Well-Being</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 Marshallian Model: Citizenship expanded from individual civil protections (18th c.) to voting power (19th c.) and welfare guarantees (20th c.).
    </div>
  </div>

  <!-- SECTION 2: RELEVANT GROUNDS FOR INCLUSION AND EXCLUSION -->
  <h2 style="color: #FFAB00; border-bottom: 2px solid #FFAB00; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">2. Relevant Grounds for Inclusion and Exclusion</h2>

  <p>Every political community defines who belongs inside its borders and who remains outside. Throughout history, the boundaries of citizenship have been fiercely contested:</p>

  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #FFAB00;">(A) Grounds of Inclusion (Acquisition of Citizenship):</b>
      <br/>Modern sovereign nations grant citizenship primarily through four established legal doctrines:
      <br/>&bull; <b style="color: #FFAB00;">Jus Sanguinis (Right of Blood / Descent):</b> Citizenship inherited through one or both citizen parents, regardless of where the child is born.
      <br/>&bull; <b style="color: #FFAB00;">Jus Soli (Right of the Soil / Birthplace):</b> Citizenship granted to any child born within the physical territory of the state (practiced prominently in the USA).
      <br/>&bull; <b style="color: #FFAB00;">Naturalization &amp; Registration:</b> Legal process whereby a foreign resident acquires citizenship after fulfilling statutory conditions (e.g., continuous lawful residency, passing language tests, renouncing former allegiance, and demonstrating good moral character).
      <br/>&bull; <b style="color: #FFAB00;">Incorporation of Territory:</b> When a new territory becomes part of a country (e.g., Goa or Pondicherry joining India), its residents automatically become citizens.
    </li>
    <li><b style="color: #FFAB00;">(B) Historical and Modern Grounds of Exclusion:</b>
      <br/>Historically, citizenship was deeply exclusionary:
      <br/>&bull; <i>Ancient Greece:</i> Only adult male property owners were citizens; women, slaves, and resident foreigners (metics) were entirely excluded.
      <br/>&bull; <i>Racial &amp; Colonial Apartheid:</i> In South Africa under Apartheid, the Black majority was stripped of citizenship and forced into segregated &lsquo;Bantustans&rsquo;.
      <br/>&bull; <i>Gender Exclusion:</i> In Western democracies, women were denied the right to vote until the 20th century (USA granted women suffrage in 1920, UK in 1928, Switzerland only in 1971).
      <br/>&bull; <i>Modern Legitimate Exclusions:</i> Foreign nationals (aliens) without lawful residence, persons engaging in treason or espionage, and illegal immigrants who enter without valid visas.
    </li>
  </ul>

  <!-- SECTION 3: HOW ARE NEW CLAIMS TO CITIZENSHIP NEGOTIATED? -->
  <h2 style="color: #FFAB00; border-bottom: 2px solid #FFAB00; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">3. How are New Claims to Citizenship Negotiated?</h2>

  <p>Citizenship is not a static legal certificate; it is a dynamic, continuously evolving arena of struggle. Disadvantaged and marginalized groups constantly struggle to convert paper rights into <b style="color: #FFAB00;">Substantive Equality</b>:</p>

  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #FFAB00;">1. The Plight of Slum Dwellers and Urban Street Vendors:</b>
      <br/>In rapidly growing cities like Mumbai, Delhi, and Kolkata, millions of rural migrants work as construction laborers, domestic maids, rickshaw pullers, and street hawkers. While they provide indispensable low-cost labor that keeps cities running, they are treated as &lsquo;encroachers&rsquo; living in unauthorized slums without clean water, sanitation, or electricity, facing frequent demolition drives.
      <br/>In the historic <b style="color: #FFAB00;">Olga Tellis v. Bombay Municipal Corporation (1985)</b> case, the Supreme Court of India ruled that the <i>Right to Livelihood is an integral part of the Right to Life (Article 21)</i>, recognizing that evicting pavement dwellers without alternative rehabilitation deprives them of their basic citizenship existence.
    </li>
    <li><b style="color: #FFAB00;">2. &lsquo;Sons of the Soil&rsquo; vs. Internal Migrants:</b>
      <br/>Article 19(1)(d) and (e) of the Indian Constitution gives every citizen the fundamental right to move freely throughout India and reside/settle in any part. However, localist regional movements frequently promote the <b style="color: #FFAB00;">&lsquo;Sons of the Soil&rsquo;</b> ideology, demanding that local jobs, housing, and college seats be reserved exclusively for native speakers (e.g., agitations targeting migrant workers from Bihar and Uttar Pradesh in Mumbai or Assam).
      <br/>This creates a sharp conflict between the <b style="color: #FFAB00;">Universal Right to Free Internal Migration</b> and local demands for economic protection.
    </li>
    <li><b style="color: #FFAB00;">3. Struggles of Marginalized Social Groups:</b>
      <br/>Dalits, tribal communities, women, sexual minorities, and persons with disabilities have waged protracted civil rights struggles to demand not merely formal legal equality, but affirmative policies, reservations, anti-discrimination laws, and dignity in public spaces.
    </li>
  </ul>

  <!-- SECTION 4: CITIZENS AND THE NATION -->
  <h2 style="color: #FFAB00; border-bottom: 2px solid #FFAB00; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">4. Citizens and the Nation: Ethno-Cultural vs. Democratic Civic Citizenship</h2>

  <p>How do modern nation-states define the bond between the citizen and the nation? Political scientists identify two opposing models:</p>

  <!-- COMPARISON TABLE BOX: ETHNIC VS CIVIC -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 171, 0, 0.4); border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 12px 0; font-size: 17px; font-weight: 700;">🏛️ Master Comparison: Ethno-Cultural vs. Democratic Civic Model</h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14.5px; line-height: 1.6;">
        <thead>
          <tr style="background: rgba(255, 171, 0, 0.2); color: #FFAB00; border-bottom: 2px solid #FFAB00;">
            <th style="padding: 10px; text-align: left;">Feature</th>
            <th style="padding: 10px; text-align: left;">Ethno-Cultural Model</th>
            <th style="padding: 10px; text-align: left;">Democratic Civic Model (India)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px; color: #FFAB00; font-weight: 600;">Basis of Membership</td>
            <td style="padding: 10px; color: #CBD5E1;">Shared ancestral blood, race, language, or single dominant religion.</td>
            <td style="padding: 10px; color: #FFFFFF;">Shared constitutional values, democratic allegiance, and equal rights.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px; color: #FFAB00; font-weight: 600;">Treatment of Minorities</td>
            <td style="padding: 10px; color: #CBD5E1;">Minorities are treated as second-class citizens or forced to assimilate.</td>
            <td style="padding: 10px; color: #FFFFFF;">Linguistic and religious minorities enjoy special constitutional safeguards (Arts 29&ndash;30).</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px; color: #FFAB00; font-weight: 600;">Historical Examples</td>
            <td style="padding: 10px; color: #CBD5E1;">Pre-war Germany, Israel (Law of Return for Jewish diaspora).</td>
            <td style="padding: 10px; color: #FFFFFF;">Independent India, United States, Canada, post-war South Africa.</td>
          </tr>
          <tr>
            <td style="padding: 10px; color: #FFAB00; font-weight: 600;">Indian Constitutional Model</td>
            <td style="padding: 10px; color: #CBD5E1;">Explicitly rejected by the Constituent Assembly.</td>
            <td style="padding: 10px; color: #FFFFFF;">Adopted <b style="color: #FFAB00;">Single Citizenship</b> (Part II, Articles 5&ndash;11) uniting a vast multi-religious, pluralistic society.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- SECTION 5: CAN WE HAVE A GLOBAL CITIZENSHIP? -->
  <h2 style="color: #FFAB00; border-bottom: 2px solid #FFAB00; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">5. Can We Have a Global Citizenship?</h2>

  <p>In the 21st century, technological advancement, global trade, international migration, satellite communication, and the internet have interconnected humanity as never before. This raises the vital theoretical question: <b style="color: #FFAB00;">Can We Have a Global Citizenship?</b></p>

  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #FFAB00;">(A) The Arguments FOR Global Citizenship (Cosmopolitan Vision):</b>
      <br/>&bull; <b>Border-Crossing Crises:</b> Critical challenges facing humanity do not respect national borders &mdash; global warming, ocean pollution, pandemics (COVID-19), international financial shocks, and terrorism cannot be solved by any single nation-state in isolation.
      <br/>&bull; <b>Global Solidarity &amp; Humanitarianism:</b> Natural disasters (tsunamis, earthquakes) and refugee crises evoke worldwide empathy and immediate transnational aid, proving that moral sympathy transcends national boundaries.
      <br/>&bull; <b>Universal Human Rights:</b> International charters (UDHR) uphold the principle that human dignity is universal and prior to state sovereignty.
    </li>
    <li><b style="color: #FFAB00;">(B) The Constraints and Limitations (Why Legal Global Citizenship is Not Yet Possible):</b>
      <br/>&bull; <b>Absence of a Global Sovereign Government:</b> Citizenship is a legal status backed by state power, law enforcement, and courts. There is no world government, global parliament, or global police force that can guarantee and enforce rights across sovereign borders.
      <br/>&bull; <b>Sovereign State Borders &amp; Passports:</b> The world remains strictly divided into sovereign nation-states. Borders, immigration visas, and passports strictly regulate who may enter, work, and vote.
      <br/>&bull; <b>Vulnerability of Stateless Persons:</b> As seen with Syrian, Afghan, or Rohingya refugees, when people lose their national citizenship, no global body can ensure their basic right to work, travel, or vote.
    </li>
    <li><b style="color: #FFAB00;">Conclusion:</b> While a formal, legal &lsquo;World Passport&rsquo; and global state remain distant dreams, <b style="color: #FFAB00;">Global Citizenship functions as an essential moral and civic compass</b> &mdash; urging individuals to see themselves as citizens of their own country and simultaneously as stewards of the planetary community.</li>
  </ul>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(255, 171, 0, 0.08); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 25px 0; border-radius: 0 8px 8px 0;">
    <h4 style="color: #FFAB00; margin: 0 0 6px 0; font-size: 16px; font-weight: bold;">🎯 Board Exam Tip: Answering the Global Citizenship Question (4 Marks)</h4>
    <p style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6; margin: 0;">
      When asked <i>&ldquo;Can we have a global citizenship?&rdquo;</i>, structure your answer into two clear dimensions: <b>(1) Moral and Practical Necessity</b> (interconnected challenges like climate change, pandemics, and refugee crises) and <b>(2) Institutional Limitations</b> (absence of a world government, persistent state sovereignty, border controls). Conclude that it exists as an ethical vision rather than a formal legal reality.
    </p>
  </div>

  <!-- SUMMARY TABLE & MASTER REVISION FORMULA CHEAT SHEET -->
  <div style="background: rgba(255, 171, 0, 0.06); border: 1.5px solid #FFAB00; border-radius: 12px; padding: 18px; margin-top: 35px;">
    <h3 class="text-center" style="color: #FFAB00; font-weight: bold; margin: 0 0 8px 0; font-size: 19px;">⚡ Master Revision Formula &amp; Core Summary</h3>
    <p class="text-center" style="color: #FFE082; margin: 0 0 16px 0; font-size: 14px;">Essential Quick-Recall Points for Board Exams (Chapter 16)</p>

    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14.5px;">
      <div style="background: rgba(0,0,0,0.25); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #FFAB00;">Citizenship Definition:</b> <span style="color: #FFFFFF;">Full and equal membership in a sovereign political community (T.H. Marshall).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #FFAB00;">Indian Constitutional Scheme:</b> <span style="color: #FFFFFF;">Part II (Articles 5 to 11); strictly establishes <b>Single Citizenship</b> across the Union of India.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #FFAB00;">Legal Modes of Acquisition:</b> <span style="color: #FFFFFF;">Birth (Jus Soli), Descent (Jus Sanguinis), Registration, Naturalization, and Incorporation of Territory.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #FFAB00;">Key Judicial Precedent:</b> <span style="color: #FFFFFF;"><i>Olga Tellis (1985)</i> &mdash; Right to Livelihood is protected under Right to Life for urban slum dwellers.</span>
      </div>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: SOLUTIONS (15 Q&As)                        */
/* -------------------------------------------------------------------------- */

export const c11Pol16HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- CHAPTER TITLE BANNER -->
  <div style="background: rgba(255, 171, 0, 0.08); border: 1.5px solid #FFAB00; border-radius: 10px; padding: 16px; margin-bottom: 25px; text-align: center;">
    <h2 style="color: #FFAB00; font-size: 21px; font-weight: 800; margin: 0 0 6px 0;">Class 11 Chapter 16: Citizenship (नागरिकता)</h2>
    <p style="color: #FFE082; font-size: 14.5px; margin: 0; font-weight: 500;">
      Official Board Target Master Solutions &bull; Total 15 Questions (8 VSAT + 7 SAT) strictly aligned with 4 Marks Board Weightage
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS) — EXACTLY 8 Qs     -->
  <!-- ======================================================================== -->
  <h2 style="color: #FFAB00; border-bottom: 2px solid #FFAB00; padding-bottom: 8px; margin-top: 25px; font-size: 19px;">
    SECTION A: Very Short Answer Questions (VSAT - 1 &amp; 2 Marks) — Q1 to Q8
  </h2>

  <!-- Q1 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q1: What is meant by &lsquo;Citizenship&rsquo; in political theory?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Citizenship is defined as <b>full and equal membership of a sovereign political community</b>. It endows individuals with civil, political, and socio-economic rights and requires allegiance and civic duties toward the state.
    </p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q2: Differentiate between a Citizen and an Alien.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      A <b>Citizen</b> enjoys full political rights (voting, contesting elections, holding public offices) and owes permanent allegiance to the state. An <b>Alien</b> (foreign national) is protected by basic civil laws and personal liberty (Article 21) but cannot vote, hold constitutional office, or participate in governance.
    </p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q3: Distinguish between &lsquo;Jus Soli&rsquo; and &lsquo;Jus Sanguinis&rsquo;.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b>1. Jus Soli (Right of Soil):</b> Citizenship granted to an individual based on their place of birth within the territory of the state.
      <br/><b>2. Jus Sanguinis (Right of Blood):</b> Citizenship granted by virtue of descent, where citizenship is inherited through citizen parents.
    </p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q4: What was the constitutional significance of the Olga Tellis case (1985)?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      In <i>Olga Tellis v. Bombay Municipal Corporation (1985)</i>, the Supreme Court held that the <b>Right to Livelihood is an integral part of the Right to Life (Article 21)</b>, establishing that evicting pavement dwellers without rehabilitation violates their fundamental right to life.
    </p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q5: What is meant by the &lsquo;Sons of the Soil&rsquo; doctrine?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      &lsquo;Sons of the Soil&rsquo; is a regionalist ideology asserting that local resources, employment, educational seats, and land in a state must belong primarily to the indigenous native linguistic residents rather than internal migrants from other states.
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q6: Why did India adopt &lsquo;Single Citizenship&rsquo; instead of dual citizenship?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The makers of the Indian Constitution adopted single citizenship (Article 9) to foster national unity, prevent narrow provincialism, and ensure that every citizen enjoys equal rights across all states of the Indian Union.
    </p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q7: Who are Stateless Persons?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Stateless persons are individuals who are not recognized as citizens by any sovereign state under its laws, leaving them without passports, legal identity, political protection, or basic rights (e.g., Rohingya refugees).
    </p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q8: Define the concept of &lsquo;Global Citizenship&rsquo; in brief.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Global citizenship is a moral and philosophical ideal asserting that people belong to a shared global community and bear ethical responsibilities to address borderless planetary challenges like climate change, pandemics, and human rights abuses.
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER QUESTIONS (SAT - 4 MARKS) — EXACTLY 7 Qs         -->
  <!-- ======================================================================== -->
  <h2 style="color: #FFAB00; border-bottom: 2px solid #FFAB00; padding-bottom: 8px; margin-top: 35px; font-size: 19px;">
    SECTION B: Short Answer Questions (SAT - 4 Marks) — Q9 to Q15
  </h2>

  <!-- Q9 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q9: Explain T.H. Marshall&rsquo;s theory of the three generational stages of citizenship.</h3>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      In <i>Citizenship and Social Class (1950)</i>, British sociologist T.H. Marshall demonstrated that modern citizenship evolved through three cumulative stages:
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #E0E0E0; font-size: 14.5px;">
      <li><b style="color: #FFAB00;">1. Civil Citizenship (18th Century):</b> Comprises rights necessary for personal liberty &mdash; freedom of speech, freedom of thought and religion, the right to own private property, and the right to obtain justice through independent courts.</li>
      <li><b style="color: #FFAB00;">2. Political Citizenship (19th Century):</b> Comprises the right to participate in the exercise of sovereign political authority &mdash; either as an elector through the universal adult franchise or as an elected representative in parliament.</li>
      <li><b style="color: #FFAB00;">3. Social Citizenship (20th Century):</b> Comprises the right to a minimum standard of economic welfare, public healthcare, social security against unemployment, and free public education, ensuring that economic inequality does not nullify political equality.</li>
    </ul>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q10: Discuss the relevant legal grounds for INCLUSION and EXCLUSION from citizenship.</h3>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Sovereign states define clear legal criteria to determine who belongs to the political community:
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #E0E0E0; font-size: 14.5px;">
      <li><b style="color: #FFAB00;">1. Grounds for Inclusion:</b>
        <br/>&bull; <i>Birth and Descent:</i> Jus Soli (birth on national soil) and Jus Sanguinis (birth to citizen parents).
        <br/>&bull; <i>Naturalization and Registration:</i> Lawful long-term residence, passing language and civics tests, and swearing allegiance.
        <br/>&bull; <i>Territorial Incorporation:</i> When foreign territory is annexed or merged into the state.
      </li>
      <li><b style="color: #FFAB00;">2. Grounds for Exclusion:</b>
        <br/>&bull; <i>Foreign Nationals (Aliens):</i> Individuals retaining loyalty to another state cannot enjoy political franchise.
        <br/>&bull; <i>Illegal Migration:</i> Entry without valid documentation or overstaying visas violates immigration laws.
        <br/>&bull; <i>Treason or Voluntary Expatriation:</i> Acquiring foreign citizenship (in single citizenship nations like India) or engaging in anti-national espionage results in loss of citizenship.
      </li>
    </ul>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q11: How do urban slum dwellers and pavement hawkers negotiate their claims to citizenship?</h3>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Rural-to-urban migrants constitute the backbone of city economies but face systematic marginalization:
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #E0E0E0; font-size: 14.5px;">
      <li><b style="color: #FFAB00;">1. Indispensable Economic Role:</b> Slum dwellers work as domestic helpers, street vendors, sanitation staff, and factory workers, providing cheap essential services.</li>
      <li><b style="color: #FFAB00;">2. Denial of Basic Rights:</b> They are frequently branded as illegal squatters, denied municipal water, sanitation, and electricity, and subjected to arbitrary bulldozing of their homes without notice.</li>
      <li><b style="color: #FFAB00;">3. Mobilization and Judicial Assertion:</b> Through collective unions, slum dwellers assert their citizenship. In <i>Olga Tellis (1985)</i>, the Supreme Court recognized that evictions without rehabilitation destroy the Right to Livelihood under Article 21, linking urban shelter directly to democratic citizenship.</li>
    </ul>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q12: Examine the tension between the &lsquo;Sons of the Soil&rsquo; demand and the constitutional Right to Free Movement.</h3>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The clash between regional chauvinism and pan-Indian citizenship is a recurring political challenge:
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #E0E0E0; font-size: 14.5px;">
      <li><b style="color: #FFAB00;">1. Constitutional Freedom:</b> Article 19(1)(d) and (e) guarantees all Indian citizens the fundamental right to move freely, reside, work, and settle in any part of the country. A single national citizenship exists across India.</li>
      <li><b style="color: #FFAB00;">2. &lsquo;Sons of the Soil&rsquo; Grievance:</b> Local populations argue that large inflows of migrant laborers cause cultural displacement, depress local wage rates, strain public infrastructure, and deprive local youth of state jobs and college admissions.</li>
      <li><b style="color: #FFAB00;">3. Democratic Resolution:</b> While the state can adopt affirmative measures for backward local regions (e.g., Article 371), violent discrimination or bans against migrant citizens violate the basic structure of Indian federal unity.</li>
    </ul>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q13: Differentiate between Ethno-Cultural Nationalism and Democratic Civic Citizenship.</h3>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      These two competing models define national identity and belonging in fundamentally distinct ways:
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #E0E0E0; font-size: 14.5px;">
      <li><b style="color: #FFAB00;">1. Ethno-Cultural Nationalism:</b> Bases citizenship on shared ancestral descent, racial lineage, or a single dominant religion. Minorities are treated as second-class citizens or pressured into total cultural assimilation (e.g., historical pre-war European states).</li>
      <li><b style="color: #FFAB00;">2. Democratic Civic Model:</b> Bases citizenship on shared adherence to constitutional values, the rule of law, and equal rights regardless of private religion, language, or race.</li>
      <li><b style="color: #FFAB00;">3. The Indian Choice:</b> India deliberately rejected ethno-religious nationalism at independence, establishing a secular, pluralistic constitutional democracy that accommodates multi-lingual, multi-religious diversity through equal citizenship and minority rights (Articles 29 &amp; 30).</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q14: What is the concept of &lsquo;Differentiated Citizenship&rsquo; advocated by modern theorists?</h3>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Political theorists like Iris Marion Young argue that identical treatment of unequals perpetuates discrimination:
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #E0E0E0; font-size: 14.5px;">
      <li><b style="color: #FFAB00;">1. Critique of Blind Universalism:</b> Granting formal identical rights to historically oppressed groups (such as Scheduled Castes, indigenous tribes, or disabled persons) fails to overcome centuries of accumulated social deprivation.</li>
      <li><b style="color: #FFAB00;">2. Group-Differentiated Rights:</b> Differentiated citizenship advocates special institutional measures &mdash; reserved legislative seats, educational quotas, language exemptions, and self-governing tribal councils (e.g., Fifth and Sixth Schedules in India).</li>
      <li><b style="color: #FFAB00;">3. Objective:</b> The goal is not privilege, but enabling disadvantaged groups to achieve genuine substantive equality with the rest of society.</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(255,255,255,0.03); border-left: 4px solid #FFAB00; padding: 14px 16px; margin: 18px 0; border-radius: 0 8px 8px 0;">
    <h3 style="color: #FFAB00; margin: 0 0 8px 0; font-size: 16px;">Q15: &lsquo;Can we have a Global Citizenship?&rsquo; Analyze the possibilities and limitations.</h3>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The idea of global citizenship is increasingly debated in our interconnected world:
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #E0E0E0; font-size: 14.5px;">
      <li><b style="color: #FFAB00;">1. Possibilities (The Cosmopolitan Argument):</b> Transnational crises like climate change, pandemics, financial contagion, and terrorism cannot be solved by individual nation-states. Modern communications and global human rights movements generate cross-border solidarity and humanitarian empathy.</li>
      <li><b style="color: #FFAB00;">2. Limitations (Institutional Constraints):</b> Real citizenship requires a sovereign state equipped with law enforcement and courts to guarantee rights. There is no world government or global police. Sovereign states strictly police their borders, issue national passports, and restrict immigration.</li>
      <li><b style="color: #FFAB00;">3. Plight of Refugees:</b> The millions of stateless refugees who lack national passports have no global agency to enforce their basic right to work or vote, proving that legal rights remain tied to national citizenship.</li>
      <li><b style="color: #FFAB00;">4. Conclusion:</b> Global citizenship cannot replace national citizenship legally, but it provides a vital ethical framework urging humans to act as responsible custodians of our shared planet.</li>
    </ul>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS (20 QUESTIONS)                        */
/* -------------------------------------------------------------------------- */

export const c11Pol16Mcqs = [
  {
    id: "c11-pol-16-mcq-1",
    question: "Which British sociologist formulated the influential theory that citizenship developed through Civil, Political, and Social rights?",
    options: [
      "A):   Karl Marx",
      "B):   T.H. Marshall",
      "C):   Max Weber",
      "D):   Anthony Giddens"
    ],
    correctAnswer: "B",
    explanation: "T.H. Marshall in his 1950 seminal work 'Citizenship and Social Class' traced the expansion of rights across the 18th, 19th, and 20th centuries."
  },
  {
    id: "c11-pol-16-mcq-2",
    question: "What does 'Full and Equal Membership' of a political community imply for citizenship?",
    options: [
      "A):   Only billionaires have the right to vote",
      "B):   All citizens enjoy equal constitutional rights without discrimination based on caste, religion, or gender",
      "C):   Citizens are forced to speak only one language",
      "D):   Foreign tourists have the right to contest parliamentary elections"
    ],
    correctAnswer: "B",
    explanation: "Full and equal membership ensures that every citizen stands as a political equal before the law, with identical rights and civic entitlements."
  },
  {
    id: "c11-pol-16-mcq-3",
    question: "Which of the following rights is strictly RESERVED for Indian citizens and NOT available to foreigners (aliens)?",
    options: [
      "A):   Right to life and personal liberty (Article 21)",
      "B):   Right to vote in Lok Sabha and Vidhan Sabha elections",
      "C):   Protection against double jeopardy (Article 20)",
      "D):   Freedom of conscience and religion (Article 25)"
    ],
    correctAnswer: "B",
    explanation: "Political rights such as voting in legislative elections and contesting public office are strictly reserved for citizens under the Indian Constitution."
  },
  {
    id: "c11-pol-16-mcq-4",
    question: "The legal doctrine of 'Jus Soli' grants citizenship on the basis of which criteria?",
    options: [
      "A):   The ancestral bloodline of the parents",
      "B):   The place of birth within the national territory of the state",
      "C):   The amount of taxes paid by the applicant",
      "D):   The university degrees held by the individual"
    ],
    correctAnswer: "B",
    explanation: "'Jus Soli' (Right of Soil) grants citizenship automatically to any child born on the physical territory of the state."
  },
  {
    id: "c11-pol-16-mcq-5",
    question: "The legal doctrine of 'Jus Sanguinis' grants citizenship on the basis of:",
    options: [
      "A):   Blood relation / descent from citizen parents",
      "B):   Purchasing agricultural land",
      "C):   Marrying a foreign diplomat",
      "D):   Continuous residence in a hotel"
    ],
    correctAnswer: "A",
    explanation: "'Jus Sanguinis' (Right of Blood) confers citizenship through ancestral lineage or the citizenship of one's parents."
  },
  {
    id: "c11-pol-16-mcq-6",
    question: "In which landmark 1985 judgment did the Supreme Court of India rule that the Right to Livelihood is an integral part of the Right to Life for pavement dwellers?",
    options: [
      "A):   Kesavananda Bharati v. State of Kerala",
      "B):   Olga Tellis v. Bombay Municipal Corporation",
      "C):   Maneka Gandhi v. Union of India",
      "D):   Golaknath v. State of Punjab"
    ],
    correctAnswer: "B",
    explanation: "In the Olga Tellis case (1985), the Supreme Court ruled that pavement and slum dwellers cannot be evicted without alternative rehabilitation as it destroys their livelihood."
  },
  {
    id: "c11-pol-16-mcq-7",
    question: "What type of citizenship does the Constitution of India establish for all its citizens?",
    options: [
      "A):   Dual citizenship (separate state and national citizenship)",
      "B):   Single citizenship for the entire Union of India",
      "C):   Triple citizenship",
      "D):   No official citizenship"
    ],
    correctAnswer: "B",
    explanation: "Unlike the United States (which has federal and state citizenship), India established a Single Citizenship to foster national integration."
  },
  {
    id: "c11-pol-16-mcq-8",
    question: "Which articles of the Indian Constitution deal with Citizenship at the commencement of the Constitution?",
    options: [
      "A):   Articles 1 to 4",
      "B):   Articles 5 to 11 (Part II)",
      "C):   Articles 12 to 35 (Part III)",
      "D):   Articles 36 to 51 (Part IV)"
    ],
    correctAnswer: "B",
    explanation: "Part II (Articles 5 through 11) of the Indian Constitution governs citizenship provisions and empowers Parliament to regulate citizenship by law."
  },
  {
    id: "c11-pol-16-mcq-9",
    question: "What was the system of institutionalized racial segregation and denial of citizenship rights to the Black majority in South Africa called?",
    options: [
      "A):   Apartheid",
      "B):   Holocaust",
      "C):   Feudalism",
      "D):   Fascism"
    ],
    correctAnswer: "A",
    explanation: "Apartheid (1948–1994) in South Africa stripped the Black majority of citizenship rights and forced them into segregated homelands (Bantustans)."
  },
  {
    id: "c11-pol-16-mcq-10",
    question: "Which political philosopher described stateless refugees as being deprived of 'the right to have rights'?",
    options: [
      "A):   Hannah Arendt",
      "B):   Jean-Jacques Rousseau",
      "C):   Niccolo Machiavelli",
      "D):   John Stuart Mill"
    ],
    correctAnswer: "A",
    explanation: "Hannah Arendt in 'The Origins of Totalitarianism' observed that when people lose national citizenship, they are deprived of 'the right to have rights'."
  },
  {
    id: "c11-pol-16-mcq-11",
    question: "Which fundamental right under the Indian Constitution guarantees the freedom to move freely and reside anywhere in India, contradicting the 'Sons of the Soil' ideology?",
    options: [
      "A):   Article 19(1)(d) and (e)",
      "B):   Article 25",
      "C):   Article 30",
      "D):   Article 17"
    ],
    correctAnswer: "A",
    explanation: "Article 19(1)(d) and (e) guarantees the right of every citizen to move freely throughout India and reside/settle in any part of its territory."
  },
  {
    id: "c11-pol-16-mcq-12",
    question: "What is the primary characteristic of an 'Ethno-Cultural' model of citizenship?",
    options: [
      "A):   Citizenship is granted only on passing an engineering examination",
      "B):   Citizenship is defined strictly by shared ancestral blood, race, or a single dominant religion",
      "C):   Citizenship is open equally to all human beings without border controls",
      "D):   Citizenship changes every five years"
    ],
    correctAnswer: "B",
    explanation: "Ethno-cultural citizenship defines belonging based on blood, common ethnicity, or religion, frequently excluding or marginalizing minorities."
  },
  {
    id: "c11-pol-16-mcq-13",
    question: "Why was the 'Democratic Civic' model of citizenship adopted by the makers of the Indian Constitution?",
    options: [
      "A):   Because India was a homogeneous society with only one religion and language",
      "B):   To unite a diverse, pluralistic, multi-religious, and multi-linguistic society under equal constitutional rights",
      "C):   Because the British forced them to adopt it",
      "D):   To ban all regional languages"
    ],
    correctAnswer: "B",
    explanation: "India chose the civic democratic model so that members of all religious, linguistic, and cultural communities enjoy equal citizenship under the Constitution."
  },
  {
    id: "c11-pol-16-mcq-14",
    question: "What is 'Differentiated Citizenship' as proposed by political theorist Iris Marion Young?",
    options: [
      "A):   Granting special group rights and affirmative measures to historically disadvantaged minorities to achieve substantive equality",
      "B):   Depriving poor people of the right to vote",
      "C):   Issuing different colored passports based on wealth",
      "D):   Abolishing all courts"
    ],
    correctAnswer: "A",
    explanation: "Differentiated citizenship argues that identical treatment of unequals perpetuates injustice; disadvantaged groups require special protections to attain real equality."
  },
  {
    id: "c11-pol-16-mcq-15",
    question: "Which of the following is a primary argument IN FAVOR of Global Citizenship?",
    options: [
      "A):   All countries have identical tax rates",
      "B):   Crucial planetary crises like climate change, pandemics, and environmental degradation cross national boundaries and require global solidarity",
      "C):   Every person speaks the same language",
      "D):   Nation-states have ceased to exist"
    ],
    correctAnswer: "B",
    explanation: "Global challenges like global warming, pandemics, and refugee crises cannot be solved by nation-states in isolation and demand transnational cooperation."
  },
  {
    id: "c11-pol-16-mcq-16",
    question: "What is the MAIN obstacle preventing formal, legal Global Citizenship today?",
    options: [
      "A):   There is no internet in most countries",
      "B):   The absence of a sovereign world government, global courts, and international enforcement mechanisms to guarantee rights",
      "C):   Nobody wants to travel abroad",
      "D):   The United Nations has been abolished"
    ],
    correctAnswer: "B",
    explanation: "Real citizenship requires an enforcing state authority. Without a world government or global police, legal global citizenship cannot exist."
  },
  {
    id: "c11-pol-16-mcq-17",
    question: "In ancient Athens (Greece), who among the following were EXCLUDED from citizenship?",
    options: [
      "A):   Women, slaves, and resident foreigners (metics)",
      "B):   Soldiers and poets",
      "C):   Philosophers alone",
      "D):   No one was excluded"
    ],
    correctAnswer: "A",
    explanation: "Athenian democracy was limited to free adult male property owners; women, slaves, and metics (foreigners) had zero citizenship rights."
  },
  {
    id: "c11-pol-16-mcq-18",
    question: "Which country was the first to grant voting rights (suffrage) to all adult women in 1893?",
    options: [
      "A):   United States",
      "B):   United Kingdom",
      "C):   New Zealand",
      "D):   Switzerland"
    ],
    correctAnswer: "C",
    explanation: "New Zealand became the first self-governing country in the world to grant all adult women the right to vote in parliamentary elections in 1893."
  },
  {
    id: "c11-pol-16-mcq-19",
    question: "What happens if an Indian citizen voluntarily acquires the citizenship of another foreign country?",
    options: [
      "A):   They automatically lose their Indian citizenship under Article 9",
      "B):   They become the President of India",
      "C):   They retain both citizenships permanently",
      "D):   They receive a monthly pension from the UN"
    ],
    correctAnswer: "A",
    explanation: "Under Article 9 of the Indian Constitution, an Indian citizen who voluntarily acquires citizenship of a foreign country ceases to be a citizen of India."
  },
  {
    id: "c11-pol-16-mcq-20",
    question: "How does Global Citizenship best function in the contemporary international order?",
    options: [
      "A):   As an official legal passport replacing national identity",
      "B):   As an ethical and moral compass urging individuals to act with global responsibility alongside national citizenship",
      "C):   As a scheme to abolish national armies immediately",
      "D):   As a system of international taxation"
    ],
    correctAnswer: "B",
    explanation: "Global citizenship functions as an ethical framework promoting humanitarian empathy, planetary stewardship, and peace alongside national citizenship."
  }
];
