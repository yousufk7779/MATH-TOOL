// Class 11 Political Science Chapter 8: Local Government (Marks: 04)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #FF6D00 (Vibrant Tangerine / Deep Amber Orange)

const themeColor = "#FF6D00";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol8HtmlOverview = `
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
  <div style="background: rgba(255, 109, 0, 0.06); border: 1.5px solid #FF6D00; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF6D00; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Local Governance Definitions</h2>
    <p class="text-center" style="color: #FFE082; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 8: Local Government (4 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">1. Democratic Decentralization:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The constitutional devolution of decision-making authority, administrative functions, and financial resources from central and state governments to democratically elected grassroots bodies (Panchayats and Municipalities) to empower local communities.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">2. Gram Sabha (Article 243A):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The foundational bedrock of direct participatory democracy in rural India, comprising all adult residents registered as electors in the electoral rolls of a village within the Panchayat area.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">3. 73rd Constitutional Amendment Act, 1992:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The landmark constitutional enactment that inserted <b style="color: #FF6D00;">Part IX</b> and the <b style="color: #FF6D00;">Eleventh Schedule</b> (29 functional subjects), according permanent constitutional status and mandatory institutional architecture to Rural Local Governments (Panchayati Raj Institutions).</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">4. 74th Constitutional Amendment Act, 1992:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The constitutional enactment that inserted <b style="color: #FF6D00;">Part IX-A</b> and the <b style="color: #FF6D00;">Twelfth Schedule</b> (18 functional subjects), according constitutional sanctity to Urban Local Governments (Nagar Panchayats, Municipal Councils, and Municipal Corporations).</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF6D00; border-radius: 6px;">
        <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">5. State Election Commission (Article 243K / 243ZA):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">An independent constitutional authority vested with the superintendence, direction, and conduct of all elections to rural Panchayats and urban Municipalities, completely autonomous of the Election Commission of India.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WHY DO WE NEED DECENTRALIZATION OF POWERS? -->
  <h2 style="color: #FF6D00; border-bottom: 2px solid #FF6D00; padding-bottom: 8px; margin-top: 30px; font-size: 20px;">1. Why Do We Need Decentralization of Powers? Conceptual Rationale</h2>

  <p>Local government is governance at the lowest administrative rung &mdash; the village, town, or city &mdash; conducted by people&rsquo;s locally elected representatives who understand the ground realities of the neighborhood. The principle of <b style="color: #FF6D00;">Democratic Decentralization</b> rests on the premise that genuine democracy cannot function effectively if power remains concentrated exclusively in national or state secretariats (New Delhi or State capitals).</p>

  <p>The foundational rationales necessitating decentralization include:</p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #FF6D00;">(i) Superior Local Knowledge of Issues:</b> Local residents possess intimate, first-hand knowledge of their daily community problems &mdash; such as rural drinking water, village sanitation, broken culverts, stray cattle, primary school teacher absenteeism, and local dispute settlement &mdash; far superior to remote bureaucrats sitting in distant state capitals.</li>
    <li><b style="color: #FF6D00;">(ii) Direct Accountability and Quick Redressal:</b> In local governments, the distance between the governed and the governors shrinks to zero. Elected representatives live in the same village or municipal ward, making them directly accessible, accountable, and subject to daily social scrutiny by their neighbors.</li>
    <li><b style="color: #FF6D00;">(iii) Deepening Democratic Participation:</b> Merely casting a vote once every five years in parliamentary or assembly elections produces passive citizens. Decentralization enables ordinary citizens to actively participate in planning, budgeting, executing, and auditing civic projects, converting representative democracy into <b style="color: #FF6D00;">participatory democracy</b>.</li>
    <li><b style="color: #FF6D00;">(iv) Decongestion of Higher Government Tiers:</b> Transferring local civic, sanitation, and developmental burdens to Panchayats and Municipalities frees Union and State governments to focus their administrative energies on strategic national priorities like defense, macroeconomic stability, foreign relations, and state-wide infrastructure.</li>
    <li><b style="color: #FF6D00;">(v) Social Justice &amp; Empowerment of Marginalized Sections:</b> Local governance serves as the primary training nursery for grassroots leadership, breaking entrenched patriarchal and caste oligarchies by constitutionally mandating political representation for Women, Scheduled Castes (SCs), and Scheduled Tribes (STs).</li>
  </ul>

  <!-- THINKER QUOTE BOX -->
  <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #FF6D00; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-style: italic; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &ldquo;Independence must begin at the bottom. Thus, every village will be a republic or Panchayat having full powers... In this structure composed of innumerable villages, there will be ever-widening, never-ascending circles. Life will not be a pyramid with the apex sustained by the bottom. But it will be an oceanic circle whose centre will be the individual.&rdquo;
    </p>
    <p style="margin: 6px 0 0 0; text-align: right; color: #FF6D00; font-weight: bold; font-size: 14px;">
      &mdash; Mahatma Gandhi on &lsquo;Gram Swaraj&rsquo; (Harijan, July 28, 1946)
    </p>
  </div>

  <!-- SECTION 2: STATUS OF LOCAL GOVERNMENT IN THE CONSTITUTION -->
  <h2 style="color: #FF6D00; border-bottom: 2px solid #FF6D00; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">2. Historical Status &amp; Constitutional Evolution of Local Governments</h2>

  <p>The constitutional journey of local self-government in post-independence India was marked by intense ideological debates and decades of legislative stagnation before finally attaining constitutional sanctity in 1992.</p>

  <p><b style="color: #FF6D00;">The Constituent Assembly Debate: Gandhi vs. Ambedkar</b></p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF6D00;">Gandhian Ideology:</b> Followers of Mahatma Gandhi passionately argued that self-sufficient village republics (<b style="color: #FF6D00;">Gram Swaraj</b>) should form the core constitutional foundation of free India, with national governance built upwards from village panchayats.</li>
    <li><b style="color: #FF6D00;">Dr. B.R. Ambedkar&rsquo;s Skepticism:</b> As Chairman of the Drafting Committee, Dr. Ambedkar strongly opposed placing excessive power in village panchayats at that historical juncture. He famously characterized the Indian village as <i>&ldquo;a sink of localism, a den of ignorance, narrow-mindedness and communalism&rdquo;</i>, fearing that upper-caste feudal landlords and money-lenders would ruthlessly tyrannize oppressed Scheduled Castes in the absence of central administrative protection.</li>
    <li><b style="color: #FF6D00;">The Compromise in Article 40:</b> As a compromise, local self-government was relegated to Part IV of the Constitution under the non-justiciable Directive Principles of State Policy. <b style="color: #FF6D00;">Article 40</b> declared: <i>&ldquo;The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government.&rdquo;</i> Being non-enforceable, local bodies remained at the mercy of state politics.</li>
  </ul>

  <p><b style="color: #FF6D00;">Post-Independence Committees &amp; Decay of Pre-1992 Panchayats:</b></p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF6D00;">Balwant Rai Mehta Committee (1957):</b> Recommended a 3-tier Panchayati Raj system (Gram Panchayat, Panchayat Samiti, Zila Parishad). Rajasthan became the first state to inaugurate Panchayati Raj at Nagaur on October 2, 1959, followed by Andhra Pradesh.</li>
    <li><b style="color: #FF6D00;">Ashok Mehta Committee (1977):</b> Suggested a 2-tier system (Mandal Panchayat and Zila Parishad) and official political party participation.</li>
    <li><b style="color: #FF6D00;">G.V.K. Rao Committee (1985):</b> Highlighted bureaucratic strangulation, labeling pre-1992 Panchayats as <i>&ldquo;grass without roots&rdquo;</i>.</li>
    <li><b style="color: #FF6D00;">L.M. Singhvi Committee (1986):</b> Emphatically recommended that Panchayats must receive constitutional recognition, protection, and guaranteed regular elections.</li>
  </ul>

  <!-- SECTION 3: BASIC FEATURES OF RURAL & URBAN LOCAL GOVERNMENTS -->
  <h2 style="color: #FF6D00; border-bottom: 2px solid #FF6D00; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">3. Basic Features of Rural &amp; Urban Local Governments (73rd &amp; 74th Amendments)</h2>

  <p>Enacted under Prime Minister P.V. Narasimha Rao in 1992 (coming into force on <b style="color: #FF6D00;">April 24, 1993</b> for rural and <b style="color: #FF6D00;">June 1, 1993</b> for urban bodies), the 73rd and 74th Amendments created a uniform, constitutionally protected third tier of Indian federalism.</p>

  <!-- STANDALONE CLEAN DIAGRAM CARD (WHITE BACKGROUND, ZERO DUPLICATE TOP TITLES) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 109, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 540px;">
      <svg viewBox="0 0 520 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
        <!-- Card Background -->
        <rect width="520" height="340" fill="#FFFFFF" rx="8"/>
        
        <!-- Header Banner -->
        <rect x="15" y="10" width="490" height="42" rx="6" fill="#FF6D00"/>
        <text x="260" y="30" fill="#FFFFFF" font-size="14.5" font-weight="bold" text-anchor="middle">THE THIRD TIER: ARCHITECTURE OF LOCAL SELF-GOVERNMENT</text>
        <text x="260" y="45" fill="#FFE0B2" font-size="11" font-weight="600" text-anchor="middle">73rd &amp; 74th Constitutional Amendment Acts, 1992</text>

        <!-- Left Column: Rural Local Governance (73rd) -->
        <rect x="15" y="62" width="235" height="198" rx="6" fill="#FFF3E0" stroke="#FF6D00" stroke-width="1.5"/>
        <rect x="15" y="62" width="235" height="28" rx="6" fill="#E65100"/>
        <text x="132" y="81" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">RURAL: PANCHAYATI RAJ (PART IX)</text>

        <!-- Rural Tier 3: Zila Parishad -->
        <rect x="25" y="98" width="215" height="36" rx="4" fill="#FFE0B2" stroke="#FB8C00" stroke-width="1"/>
        <text x="132" y="115" fill="#BF360C" font-size="11" font-weight="bold" text-anchor="middle">District Tier: Zila Parishad</text>
        <text x="132" y="128" fill="#5D4037" font-size="9.5" text-anchor="middle">Headed by Zila Adhyaksha / District Collector</text>

        <!-- Rural Tier 2: Panchayat Samiti -->
        <rect x="25" y="140" width="215" height="36" rx="4" fill="#FFE0B2" stroke="#FB8C00" stroke-width="1"/>
        <text x="132" y="157" fill="#BF360C" font-size="11" font-weight="bold" text-anchor="middle">Block / Intermediate: Panchayat Samiti</text>
        <text x="132" y="170" fill="#5D4037" font-size="9.5" text-anchor="middle">Headed by Block Pramukh / BDO coordination</text>

        <!-- Rural Tier 1: Gram Panchayat -->
        <rect x="25" y="182" width="215" height="36" rx="4" fill="#FFE0B2" stroke="#FB8C00" stroke-width="1"/>
        <text x="132" y="199" fill="#BF360C" font-size="11" font-weight="bold" text-anchor="middle">Village Tier: Gram Panchayat</text>
        <text x="132" y="212" fill="#5D4037" font-size="9.5" text-anchor="middle">Directly elected Sarpanch / Ward Panchs</text>

        <!-- Foundation: Gram Sabha -->
        <rect x="25" y="224" width="215" height="28" rx="4" fill="#FFCC80"/>
        <text x="132" y="242" fill="#D84315" font-size="10.5" font-weight="bold" text-anchor="middle">Foundation: Gram Sabha (All Voters)</text>

        <!-- Right Column: Urban Local Governance (74th) -->
        <rect x="270" y="62" width="235" height="198" rx="6" fill="#E0F7FA" stroke="#00838F" stroke-width="1.5"/>
        <rect x="270" y="62" width="235" height="28" rx="6" fill="#00838F"/>
        <text x="387" y="81" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">URBAN: MUNICIPALITIES (PART IX-A)</text>

        <!-- Urban Tier 3: Municipal Corporation -->
        <rect x="280" y="98" width="215" height="36" rx="4" fill="#B2EBF2" stroke="#0097A7" stroke-width="1"/>
        <text x="387" y="115" fill="#006064" font-size="11" font-weight="bold" text-anchor="middle">Large Urban: Municipal Corporation</text>
        <text x="387" y="128" fill="#004D40" font-size="9.5" text-anchor="middle">Mahanagar Palika &bull; Mayor &amp; Commissioner</text>

        <!-- Urban Tier 2: Municipal Council -->
        <rect x="280" y="140" width="215" height="36" rx="4" fill="#B2EBF2" stroke="#0097A7" stroke-width="1"/>
        <text x="387" y="157" fill="#006064" font-size="11" font-weight="bold" text-anchor="middle">Smaller Urban: Municipal Council</text>
        <text x="387" y="170" fill="#004D40" font-size="9.5" text-anchor="middle">Nagar Palika Parishad &bull; President / Council</text>

        <!-- Urban Tier 1: Nagar Panchayat -->
        <rect x="280" y="182" width="215" height="36" rx="4" fill="#B2EBF2" stroke="#0097A7" stroke-width="1"/>
        <text x="387" y="199" fill="#006064" font-size="11" font-weight="bold" text-anchor="middle">Transitional: Nagar Panchayat</text>
        <text x="387" y="212" fill="#004D40" font-size="9.5" text-anchor="middle">Rural-to-Urban Semi-Towns</text>

        <!-- Foundation: Ward Committees -->
        <rect x="280" y="224" width="215" height="28" rx="4" fill="#80DEEA"/>
        <text x="387" y="242" fill="#006064" font-size="10.5" font-weight="bold" text-anchor="middle">Foundation: Wards Committees (3L+ Pop)</text>

        <!-- Bottom Twin Constitutional Pillars -->
        <rect x="15" y="268" width="235" height="60" rx="6" fill="#FBE9E7" stroke="#D84315" stroke-width="1.5"/>
        <text x="132" y="290" fill="#BF360C" font-size="11" font-weight="bold" text-anchor="middle">⚡ STATE ELECTION COMMISSION (Art. 243K)</text>
        <text x="132" y="307" fill="#4E342E" font-size="9.5" text-anchor="middle">Autonomous regular conduct of elections</text>
        <text x="132" y="320" fill="#4E342E" font-size="9.5" text-anchor="middle">Mandatory elections within 6 months of dissolution</text>

        <rect x="270" y="268" width="235" height="60" rx="6" fill="#E8F5E9" stroke="#2E7D32" stroke-width="1.5"/>
        <text x="387" y="290" fill="#1B5E20" font-size="11" font-weight="bold" text-anchor="middle">💰 STATE FINANCE COMMISSION (Art. 243I)</text>
        <text x="387" y="307" fill="#1B5E20" font-size="9.5" text-anchor="middle">Constituted every 5 years by the Governor</text>
        <text x="387" y="320" fill="#1B5E20" font-size="9.5" text-anchor="middle">Recommends devolution of state tax revenues</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The constitutional architecture of rural (Panchayati Raj) and urban (Nagarpalika) governance under the 73rd and 74th Amendments, backed by the independent twin constitutional pillars.
    </div>
  </div>

  <p><b style="color: #FF6D00;">Cardinal Features of the 73rd Amendment (Rural Governance):</b></p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #FF6D00;">(i) Three-Tier Uniform Hierarchy (Article 243B):</b> Gram Panchayat at village level, Panchayat Samiti at intermediate block level, and Zila Parishad at district level. (States with population below 20 lakhs may dispense with the intermediate tier).</li>
    <li><b style="color: #FF6D00;">(ii) Mandatory Fixed 5-Year Tenure (Article 243E):</b> Every Panchayat enjoys a guaranteed term of 5 years. If dissolved prematurely, elections must be mandatorily conducted within <b style="color: #FF6D00;">6 months</b>.</li>
    <li><b style="color: #FF6D00;">(iii) Groundbreaking Reservation for Women &amp; Marginalized Castes (Article 243D):</b>
      <br/>&bull; SC and ST reservations in direct proportion to their population in the Panchayat area.
      <br/>&bull; Not less than <b style="color: #FF6D00;">one-third (33%)</b> of total seats reserved for women (including the number of seats reserved for SC/ST women).
      <br/>&bull; Not less than 1/3rd of offices of Chairpersons (Sarpanch, Pramukh, Zila Adhyaksha) reserved for women. (Many progressive states like Bihar, Madhya Pradesh, Uttarakhand, and Himachal Pradesh have elevated women&rsquo;s reservation to <b style="color: #FF6D00;">50%</b>).
    </li>
    <li><b style="color: #FF6D00;">(iv) Eleventh Schedule:</b> 29 functional subjects (e.g., agriculture, minor irrigation, animal husbandry, rural housing, drinking water, rural electrification, poverty alleviation, and primary education) earmarked for devolution to Panchayats.</li>
  </ul>

  <p><b style="color: #FF6D00;">Cardinal Features of the 74th Amendment (Urban Governance):</b></p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #FF6D00;">(i) Three Categories of Municipalities (Article 243Q):</b>
      <br/>&bull; <b style="color: #FF6D00;">Nagar Panchayat:</b> For transitional areas transforming from rural to urban settlements.
      <br/>&bull; <b style="color: #FF6D00;">Municipal Council (Nagar Palika):</b> For smaller urban centers.
      <br/>&bull; <b style="color: #FF6D00;">Municipal Corporation (Mahanagar Palika):</b> For large metropolitan cities (administered politically by an elected Mayor and executive administration by a state-appointed Municipal Commissioner).
    </li>
    <li><b style="color: #FF6D00;">(ii) Wards Committees (Article 243S):</b> Mandatorily formed in municipalities having a population of three lakhs or more to bridge the distance between citizens and municipal councils.</li>
    <li><b style="color: #FF6D00;">(iii) Twelfth Schedule:</b> 18 municipal functional subjects (e.g., urban planning, fire services, water supply, public health, slum improvement, and solid waste management).</li>
  </ul>

  <!-- COMPARISON TABLE BOX -->
  <div style="background: rgba(0,0,0,0.25); border: 1.5px solid #FF6D00; border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 class="text-center" style="color: #FF6D00; margin: 0 0 12px 0; font-size: 18px;">⚖️ Master Comparison: 73rd vs. 74th Constitutional Amendment Acts</h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #FFFFFF;">
        <thead>
          <tr style="background: rgba(255, 109, 0, 0.2); border-bottom: 2px solid #FF6D00;">
            <th style="padding: 10px; text-align: left; width: 25%; color: #FF6D00;">Feature</th>
            <th style="padding: 10px; text-align: left; width: 37%; color: #FFAB00;">73rd Amendment (Rural)</th>
            <th style="padding: 10px; text-align: left; width: 38%; color: #00E5FF;">74th Amendment (Urban)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #FF6D00;">Part &amp; Articles:</b></td>
            <td style="padding: 10px;">Part IX (Articles 243 to 243-O)</td>
            <td style="padding: 10px;">Part IX-A (Articles 243-P to 243-ZG)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #FF6D00;">Schedule &amp; Subjects:</b></td>
            <td style="padding: 10px;">Eleventh Schedule (<b style="color: #FFAB00;">29 Subjects</b>)</td>
            <td style="padding: 10px;">Twelfth Schedule (<b style="color: #00E5FF;">18 Subjects</b>)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #FF6D00;">Three-Tier Bodies:</b></td>
            <td style="padding: 10px;">Gram Panchayat, Panchayat Samiti, Zila Parishad</td>
            <td style="padding: 10px;">Nagar Panchayat, Municipal Council, Municipal Corporation</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #FF6D00;">Base Deliberative Body:</b></td>
            <td style="padding: 10px;">Gram Sabha (All adult voters)</td>
            <td style="padding: 10px;">Wards Committees (In cities with &gt;3 lakh pop)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #FF6D00;">Electoral Body:</b></td>
            <td style="padding: 10px;">State Election Commission (Art. 243K)</td>
            <td style="padding: 10px;">State Election Commission (Art. 243ZA)</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><b style="color: #FF6D00;">Financial Review:</b></td>
            <td style="padding: 10px;">State Finance Commission (Art. 243I)</td>
            <td style="padding: 10px;">State Finance Commission (Art. 243Y)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- SECTION 4: IMPACT OF GIVING CONSTITUTIONAL STATUS -->
  <h2 style="color: #FF6D00; border-bottom: 2px solid #FF6D00; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">4. Transformative Effects &amp; Challenges of Constitutional Status</h2>

  <p>The grant of constitutional status fundamentally altered the landscape of Indian democracy, producing far-reaching socio-political transformations alongside unresolved administrative bottlenecks:</p>

  <p><b style="color: #FF6D00;">1. Massive Democratic Deepening:</b></p>
  <p>With over <b style="color: #FF6D00;">2.5 lakh Gram Panchayats</b>, 6,600 Panchayat Samitis, and 600+ Zila Parishads, India elect over <b style="color: #FF6D00;">32 lakh grassroots representatives</b> &mdash; creating the largest organized democratic exercise anywhere in human history. Local issues are debated and resolved in public assemblies rather than behind closed bureaucratic doors.</p>

  <p><b style="color: #FF6D00;">2. Unprecedented Women&rsquo;s Political Empowerment:</b></p>
  <p>The mandatory 33% (and in many states 50%) reservation for women brought over <b style="color: #FF6D00;">14 lakh elected women leaders</b> into formal governance. Rural women transformed from silent domestic homemakers into active decision-makers managing village budgets, water resources, school mid-day meals, and sanitation drives. While the phenomenon of <i>&lsquo;Sarpanch Pati&rsquo;</i> (husbands acting on behalf of elected wives) initially posed hurdles, subsequent terms have witnessed women asserting independent authority and negotiating directly with block officials.</p>

  <p><b style="color: #FF6D00;">3. Social Justice for Dalits and Adivasis:</b></p>
  <p>Mandatory proportional representation for SCs and STs, coupled with reserved Chairperson posts, forced traditionally dominant landed elites to sit as equals alongside Dalit and tribal representatives, cracking centuries-old feudal caste hierarchies.</p>

  <p><b style="color: #FF6D00;">4. Extension to Tribal Areas: The PESA Act, 1996:</b></p>
  <p>The 73rd Amendment did not automatically apply to Fifth Schedule tribal areas. Parliament enacted the <b style="color: #FF6D00;">Panchayats (Extension to Scheduled Areas) Act (PESA), 1996</b>, vesting unprecedented authority in tribal Gram Sabhas to manage community resources, preserve tribal traditions, control minor forest produce, regulate moneylending, and approve land acquisition.</p>

  <p><b style="color: #FF6D00;">5. Enduring Structural Bottlenecks &mdash; The &lsquo;3 Fs&rsquo; Deficit:</b></p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF6D00;">Lack of Funds:</b> State governments remain notoriously reluctant to grant substantial tax-levying autonomy to local bodies. Panchayats depend on tied central/state scheme funds for over 80&ndash;90% of their budgets, severely curbing their fiscal independence.</li>
    <li><b style="color: #FF6D00;">Lack of Functions:</b> Many states have only transferred functions on paper without issuing executive notifications or transferring actual decision-making jurisdiction.</li>
    <li><b style="color: #FF6D00;">Lack of Functionaries:</b> Local bodies suffer from acute shortages of technical staff, junior engineers, accountants, and data operators. As a result, unelected state-appointed bureaucrats (like Block Development Officers and Panchayat Secretaries) continue to dominate elected Sarpanches.</li>
  </ul>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(255, 109, 0, 0.08); border-left: 4px solid #FF6D00; padding: 14px 16px; margin: 25px 0; border-radius: 0 8px 8px 0;">
    <b style="color: #FF6D00; font-size: 16px; display: block; margin-bottom: 4px;">🎯 Board Exam Golden Tip (4-Mark Scoring Strategy):</b>
    <span style="color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">When answering questions on the 73rd Amendment, always explicitly mention: (1) <b>Article 243</b>, Part IX, and 11th Schedule (29 subjects), (2) The 3 tiers (Gram, Block, District), (3) Mandatory 1/3rd women reservation (mentioning 50% in states like Bihar/MP), (4) Fixed 5-year tenure with elections within 6 months, and (5) State Election Commission &amp; State Finance Commission. Mentioning the &lsquo;3 Fs&rsquo; (Funds, Functions, Functionaries) guarantees full marks in critical evaluation questions!</span>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: rgba(0,0,0,0.4); border: 1.5px solid #FF6D00; border-radius: 12px; padding: 18px; margin-top: 30px;">
    <h3 class="text-center" style="color: #FF6D00; margin: 0 0 14px 0; font-size: 19px;">⚡ Master Revision Articles &amp; Milestone Timeline Cheat Sheet</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 109, 0, 0.2);">
        <b style="color: #FF6D00;">Article 40:</b> DPSP provision directing state to organize village panchayats.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 109, 0, 0.2);">
        <b style="color: #FF6D00;">Article 243A:</b> Constitutional recognition and functions of the Gram Sabha.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 109, 0, 0.2);">
        <b style="color: #FF6D00;">Article 243B &amp; 243Q:</b> Constitution of three-tier Panchayats and Municipalities.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 109, 0, 0.2);">
        <b style="color: #FF6D00;">Article 243D &amp; 243T:</b> Mandatory reservation for SCs, STs, and Women (minimum 1/3rd).
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 109, 0, 0.2);">
        <b style="color: #FF6D00;">Article 243E &amp; 243U:</b> Fixed 5-year tenure; mandatory re-election within 6 months.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 109, 0, 0.2);">
        <b style="color: #FF6D00;">Article 243K &amp; 243ZA:</b> State Election Commission for conducting local elections.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 109, 0, 0.2);">
        <b style="color: #FF6D00;">Article 243I &amp; 243Y:</b> State Finance Commission constituted every 5 years by Governor.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 109, 0, 0.2);">
        <b style="color: #FF6D00;">April 24, 1993:</b> 73rd Amendment effective date (Celebrated as National Panchayati Raj Day).
      </div>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 2: SOLUTIONS (EXACT 15 Q&A)                    */
/* -------------------------------------------------------------------------- */

export const c11Pol8HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS) — 8 QUESTIONS       -->
  <!-- ======================================================================== -->
  <div style="background: rgba(255, 109, 0, 0.08); border-left: 5px solid #FF6D00; padding: 12px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #FF6D00; margin: 0; font-size: 18px;">SECTION A: Very Short Answer Questions (1 &amp; 2 Marks) &mdash; Exactly 8 Questions</h2>
    <span style="color: #FFE082; font-size: 13.5px;">Direct Recall, Definitional Precision &amp; 1-to-2 Sentence Answers</span>
  </div>

  <!-- Q1 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">Q1: What is meant by Democratic Decentralization?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #FF6D00;">Answer:</b> Democratic decentralization is the constitutional devolution of administrative power, decision-making responsibility, and financial resources from central and state governments to democratically elected local self-governments (Panchayats and Municipalities).
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">Q2: What was the constitutional status of local government in India prior to 1992?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #FF6D00;">Answer:</b> Prior to 1992, local self-government was only mentioned in <b style="color: #FF6D00;">Article 40</b> under the non-justiciable Directive Principles of State Policy (Part IV), leaving the creation, powers, and elections of local bodies entirely to the discretion of individual State legislatures.
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">Q3: What is the Gram Sabha and what constitutes its membership?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #FF6D00;">Answer:</b> Under <b style="color: #FF6D00;">Article 243A</b>, the Gram Sabha is the grassroots body of direct democracy in rural areas consisting of all persons registered as voters in the electoral rolls of a village comprised within the Panchayat area.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">Q4: Name the three tiers of Panchayati Raj established under the 73rd Amendment Act.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #FF6D00;">Answer:</b> The three tiers are: (i) <b style="color: #FF6D00;">Gram Panchayat</b> at the village level, (ii) <b style="color: #FF6D00;">Panchayat Samiti</b> (Intermediate Panchayat) at the block level, and (iii) <b style="color: #FF6D00;">Zila Parishad</b> at the district level.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">Q5: What is the mandatory constitutional quota reserved for women in local self-governments?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #FF6D00;">Answer:</b> Under Articles 243D and 243T, not less than <b style="color: #FF6D00;">one-third (33%)</b> of the total number of seats and chairperson offices must be mandatorily reserved for women across both rural and urban local bodies.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">Q6: What are the three types of Urban Local Bodies established by the 74th Amendment Act?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #FF6D00;">Answer:</b> Under Article 243Q, the three urban local bodies are: (i) <b style="color: #FF6D00;">Nagar Panchayat</b> for transitional areas, (ii) <b style="color: #FF6D00;">Municipal Council</b> for smaller urban areas, and (iii) <b style="color: #FF6D00;">Municipal Corporation</b> for larger urban agglomerations.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">Q7: What is the primary constitutional role of the State Finance Commission (Article 243I)?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #FF6D00;">Answer:</b> Constituted every five years by the Governor, the State Finance Commission reviews the financial position of local bodies and recommends principles for sharing state taxes and distributing grants-in-aid to Panchayats and Municipalities.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 8px 0; font-size: 16px;">Q8: What is the core purpose of the PESA Act of 1996?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #FF6D00;">Answer:</b> The <b style="color: #FF6D00;">Panchayats (Extension to Scheduled Areas) Act, 1996 (PESA)</b> extends the 73rd Amendment provisions to Fifth Schedule tribal areas, empowering tribal Gram Sabhas to manage community resources, preserve customs, and prevent land alienation.
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER QUESTIONS (4 MARKS) — 7 QUESTIONS                -->
  <!-- ======================================================================== -->
  <div style="background: rgba(255, 109, 0, 0.08); border-left: 5px solid #FF6D00; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #FF6D00; margin: 0; font-size: 18px;">SECTION B: Short Answer Questions (4 Marks) &mdash; Exactly 7 Questions</h2>
    <span style="color: #FFE082; font-size: 13.5px;">80&ndash;100 Words &bull; Point-wise Analytical &amp; Constitutional Evaluation</span>
  </div>

  <!-- Q9 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 16.5px;">Q9: Why do we need decentralization of power in a democratic polity? State four principal arguments.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Decentralization is vital for deepening democracy and administrative efficiency:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #FF6D00;">Effective Problem Solving:</b> Local residents understand issues like sanitation, primary education, and drinking water best and can formulate realistic, low-cost solutions.</li>
        <li><b style="color: #FF6D00;">Direct Accountability:</b> Elected ward members and sarpanches live amidst their electors, making them directly accountable through social scrutiny.</li>
        <li><b style="color: #FF6D00;">Deepening Participatory Democracy:</b> It converts ordinary citizens from passive recipients of government charity into active partners in decision-making and project execution.</li>
        <li><b style="color: #FF6D00;">Administrative Decongestion:</b> Devolving civic responsibilities frees State and Central governments to concentrate on macro-policy, economic growth, and state-wide development.</li>
      </ol>
    </div>
  </div>

  <!-- Q10 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 16.5px;">Q10: Contrast the conflicting perspectives of Mahatma Gandhi and Dr. B.R. Ambedkar regarding village panchayats.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      The Constituent Assembly witnessed a profound ideological debate over village self-governance:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #FF6D00;">Mahatma Gandhi&rsquo;s Perspective (Gram Swaraj):</b> Gandhi viewed Indian villages as self-sustaining moral republics. He advocated bottom-up decentralization, where sovereign power radiates outward in &lsquo;oceanic circles&rsquo;, making village panchayats the core unit of free India&rsquo;s governance.</li>
        <li><b style="color: #FF6D00;">Dr. B.R. Ambedkar&rsquo;s Perspective:</b> Ambedkar fiercely opposed village-centric governance at that historical time. He termed the village <i>&ldquo;a sink of localism, a den of ignorance, narrow-mindedness and communalism&rdquo;</i>, fearing that upper-caste feudal elites would brutally oppress Scheduled Castes without strong central constitutional protection.</li>
        <li><b style="color: #FF6D00;">Outcome:</b> As a compromise, panchayats were placed in the non-justiciable Directive Principles under Article 40 until 1992.</li>
      </ul>
    </div>
  </div>

  <!-- Q11 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 16.5px;">Q11: Explain the salient features of the 73rd Constitutional Amendment Act, 1992 for rural local bodies.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      The 73rd Amendment transformed rural governance through four revolutionary structural mandates:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #FF6D00;">Constitutional Recognition &amp; Part IX:</b> Inserted Articles 243 to 243-O and the Eleventh Schedule (29 functional subjects).</li>
        <li><b style="color: #FF6D00;">Three-Tier Structure &amp; Gram Sabha:</b> Created Gram Panchayats (village), Panchayat Samitis (block), and Zila Parishads (district), with the Gram Sabha as the deliberative assembly of all voters.</li>
        <li><b style="color: #FF6D00;">Fixed 5-Year Tenure &amp; SEC:</b> Mandated a continuous 5-year term, with elections conducted by an independent State Election Commission within 6 months of dissolution.</li>
        <li><b style="color: #FF6D00;">Affirmative Action (Article 243D):</b> Mandated proportional reservation for SCs and STs, and at least 33% reservation for women across seats and chairperson offices.</li>
      </ol>
    </div>
  </div>

  <!-- Q12 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 16.5px;">Q12: Describe the three-tier institutional structure of Urban Local Governments under the 74th Amendment Act.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      The 74th Amendment introduced Part IX-A and the Twelfth Schedule (18 subjects), structuring urban bodies under Article 243Q:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #FF6D00;">Nagar Panchayat:</b> Formed for semi-urban transitional areas transforming from rural villages into small towns.</li>
        <li><b style="color: #FF6D00;">Municipal Council (Nagar Palika Parishad):</b> Administered in smaller urban areas, headed politically by an elected President/Chairperson.</li>
        <li><b style="color: #FF6D00;">Municipal Corporation (Mahanagar Palika):</b> Established for large metropolitan agglomerations (e.g., Mumbai, Delhi, Bengaluru). It features a dual executive &mdash; an elected political Mayor and an IAS-cadre Municipal Commissioner appointed by the State Government.</li>
        <li><b style="color: #FF6D00;">Wards Committees (Article 243S):</b> Established in cities with over 3 lakh population for decentralized citizen engagement.</li>
      </ul>
    </div>
  </div>

  <!-- Q13 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 16.5px;">Q13: How has mandatory reservation under the 73rd and 74th Amendments impacted Women&rsquo;s Empowerment in India?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Mandatory reservation under Articles 243D and 243T triggered a silent grassroots revolution:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #FF6D00;">Massive Numerical Representation:</b> Over 14 lakh elected women now serve as ward members, sarpanches, and mayors, constituting over 44% of total local representatives nationwide.</li>
        <li><b style="color: #FF6D00;">Pioneering States:</b> More than 20 states (including Bihar, Madhya Pradesh, Maharashtra, and Rajasthan) have voluntarily elevated women&rsquo;s reservation to <b style="color: #FF6D00;">50%</b>.</li>
        <li><b style="color: #FF6D00;">Transformation of Priorities:</b> Women leaders prioritize primary healthcare, drinking water accessibility, village schools, girl-child education, and anti-liquor campaigns.</li>
        <li><b style="color: #FF6D00;">Dismantling Patriarchal Proxies:</b> While the phenomenon of &lsquo;Sarpanch Pati&rsquo; existed initially, experienced women leaders are increasingly asserting independent administrative authority.</li>
      </ol>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 16.5px;">Q14: Explain the &lsquo;3 Fs&rsquo; (Funds, Functions, Functionaries) deficit hindering local governments in India.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Despite constitutional status, local bodies face acute structural incapacities known as the &lsquo;3 Fs&rsquo; challenge:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #FF6D00;">1. Lack of Funds:</b> Local bodies have very limited taxation autonomy (yielding under 1-2% of national revenues). They rely overwhelmingly on central/state conditional grants, severely curbing their fiscal independence.</li>
        <li><b style="color: #FF6D00;">2. Lack of Functions:</b> While 29 and 18 subjects were listed in the 11th and 12th Schedules, most State governments have hesitated to transfer real operational jurisdiction and executive decision-making power.</li>
        <li><b style="color: #FF6D00;">3. Lack of Functionaries:</b> Panchayats and municipalities suffer from severe shortages of accountants, technical engineers, and digital staff, remaining subordinate to state-appointed bureaucrats (BDOs and secretaries).</li>
      </ul>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #FF6D00; margin: 0 0 10px 0; font-size: 16.5px;">Q15: What has been the overall transformative impact of conferring constitutional status upon Local Governments?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Giving constitutional status under the 73rd and 74th Amendments produced monumental systemic changes:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #FF6D00;">Unbreakable Democratic Continuity:</b> Arbitrary supersession by state governments was permanently banned; elections must be held every 5 years under independent State Election Commissions.</li>
        <li><b style="color: #FF6D00;">Grassroots Political Leadership:</b> Over 32 lakh local representatives were created, providing a broad democratic nursery for grooming future state and national leaders.</li>
        <li><b style="color: #FF6D00;">Inclusion of Oppressed Social Strata:</b> Mandatory SC, ST, and Women representation altered centuries of rural feudal domination, ensuring social equity in village decision-making.</li>
        <li><b style="color: #FF6D00;">Participatory Planning:</b> Bodies like District Planning Committees (Article 243ZD) and Gram Sabhas institutionalized bottom-up development planning.</li>
      </ol>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: INTERACTIVE MCQS (20 MCQS)                  */
/* -------------------------------------------------------------------------- */

export const c11Pol8Mcqs = [
  // --- TIER 1: EASY / RECALL (Q1 to Q8) ---
  {
    id: "c11-pol-8-mcq-1",
    question: "Which Article of the Directive Principles of State Policy initially directed the State to organize village panchayats?",
    options: [
      "A):   Article 38",
      "B):   Article 40",
      "C):   Article 45",
      "D):   Article 50"
    ],
    correctAnswer: "B",
    explanation: "Article 40 in Part IV directs: 'The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government.'"
  },
  {
    id: "c11-pol-8-mcq-2",
    question: "Which Constitutional Amendment Act accorded constitutional status to Rural Local Governments (Panchayati Raj)?",
    options: [
      "A):   42nd Amendment Act, 1976",
      "B):   73rd Amendment Act, 1992",
      "C):   74th Amendment Act, 1992",
      "D):   86th Amendment Act, 2002"
    ],
    correctAnswer: "B",
    explanation: "The 73rd Constitutional Amendment Act, 1992 added Part IX and the Eleventh Schedule, establishing constitutional status for Panchayati Raj Institutions."
  },
  {
    id: "c11-pol-8-mcq-3",
    question: "How many functional subjects are listed in the Eleventh Schedule for Panchayats?",
    options: [
      "A):   18 subjects",
      "B):   21 subjects",
      "C):   29 subjects",
      "D):   33 subjects"
    ],
    correctAnswer: "C",
    explanation: "The Eleventh Schedule (Article 243G) contains 29 functional subjects devolved to Panchayati Raj Institutions."
  },
  {
    id: "c11-pol-8-mcq-4",
    question: "What is the minimum constitutional reservation mandated for women in Panchayats and Municipalities?",
    options: [
      "A):   25 percent",
      "B):   One-third (33 percent)",
      "C):   50 percent",
      "D):   10 percent"
    ],
    correctAnswer: "B",
    explanation: "Articles 243D and 243T mandate that not less than one-third (33%) of total seats and chairperson positions must be reserved for women."
  },
  {
    id: "c11-pol-8-mcq-5",
    question: "What is the fixed constitutional tenure of Panchayats and Municipalities under the 73rd and 74th Amendments?",
    options: [
      "A):   3 years",
      "B):   4 years",
      "C):   5 years",
      "D):   6 years"
    ],
    correctAnswer: "C",
    explanation: "Articles 243E and 243U guarantee a fixed 5-year tenure from the date of the first meeting, and elections must be held within 6 months if dissolved early."
  },
  {
    id: "c11-pol-8-mcq-6",
    question: "Which state in India was the very first to inaugurate Panchayati Raj on October 2, 1959?",
    options: [
      "A):   Andhra Pradesh",
      "B):   Rajasthan",
      "C):   Gujarat",
      "D):   Uttar Pradesh"
    ],
    correctAnswer: "B",
    explanation: "Prime Minister Jawaharlal Nehru inaugurated India's first Panchayati Raj system at Nagaur, Rajasthan on Gandhi Jayanti (October 2, 1959)."
  },
  {
    id: "c11-pol-8-mcq-7",
    question: "Under the 73rd Amendment, who constitutes the membership of the Gram Sabha (Article 243A)?",
    options: [
      "A):   Only village elders and land owners",
      "B):   All adult residents registered as electors in the village electoral rolls",
      "C):   Elected members of the Gram Panchayat only",
      "D):   The village Sarpanch and government officials"
    ],
    correctAnswer: "B",
    explanation: "Article 243A defines the Gram Sabha as a body consisting of all persons registered in the electoral rolls relating to a village comprised within the area of the Panchayat."
  },
  {
    id: "c11-pol-8-mcq-8",
    question: "Which committee first strongly recommended constitutional recognition and protection for Panchayati Raj Institutions in 1986?",
    options: [
      "A):   Balwant Rai Mehta Committee",
      "B):   Ashok Mehta Committee",
      "C):   L.M. Singhvi Committee",
      "D):   Sarkaria Commission"
    ],
    correctAnswer: "C",
    explanation: "The L.M. Singhvi Committee (1986) appointed by Rajiv Gandhi's government was the first to decisively recommend constitutional status for Panchayats."
  },

  // --- TIER 2: MODERATE / CONCEPTUAL (Q9 to Q15) ---
  {
    id: "c11-pol-8-mcq-9",
    question: "Which Constitutional Amendment Act governs Urban Local Governments (Nagarpalikas / Municipalities)?",
    options: [
      "A):   71st Amendment Act",
      "B):   72nd Amendment Act",
      "C):   74th Amendment Act, 1992",
      "D):   77th Amendment Act"
    ],
    correctAnswer: "C",
    explanation: "The 74th Constitutional Amendment Act, 1992 inserted Part IX-A and the Twelfth Schedule (18 subjects), granting constitutional status to urban local bodies."
  },
  {
    id: "c11-pol-8-mcq-10",
    question: "Under Article 243B, which state category is exempted from establishing the intermediate (block) tier of Panchayats?",
    options: [
      "A):   States with a tribal population above 50%",
      "B):   States having a population not exceeding twenty lakhs",
      "C):   States having a total geographical area under 10,000 sq km",
      "D):   Hilly and border states"
    ],
    correctAnswer: "B",
    explanation: "Article 243B(2) provides that Panchayats at the intermediate level may not be constituted in a State having a population not exceeding twenty lakhs."
  },
  {
    id: "c11-pol-8-mcq-11",
    question: "Who conducts the elections to Panchayati Raj Institutions and Urban Municipalities?",
    options: [
      "A):   Election Commission of India",
      "B):   State Election Commission",
      "C):   District Magistrate / Collector",
      "D):   Union Ministry of Panchayati Raj"
    ],
    correctAnswer: "B",
    explanation: "Under Articles 243K and 243ZA, the State Election Commission (an independent constitutional authority) conducts and supervises all local body elections."
  },
  {
    id: "c11-pol-8-mcq-12",
    question: "What is the executive head structure of a Municipal Corporation (Mahanagar Palika)?",
    options: [
      "A):   The Mayor exercises absolute executive power",
      "B):   An IAS-cadre Municipal Commissioner appointed by the State exercises executive authority, while the elected Mayor is the political head",
      "C):   The Governor directly runs the municipal administration",
      "D):   The local Member of Parliament acts as municipal chief executive"
    ],
    correctAnswer: "B",
    explanation: "In a Municipal Corporation, the elected Mayor is the decorative/political head, whereas the executive administration is headed by an IAS-cadre Municipal Commissioner appointed by the State."
  },
  {
    id: "c11-pol-8-mcq-13",
    question: "Which of the following is celebrated nationwide as 'National Panchayati Raj Day' to mark the enforcement of the 73rd Amendment?",
    options: [
      "A):   January 26",
      "B):   April 24",
      "C):   June 1",
      "D):   October 2"
    ],
    correctAnswer: "B",
    explanation: "April 24 is celebrated annually as National Panchayati Raj Day because the 73rd Constitutional Amendment came into official effect on April 24, 1993."
  },
  {
    id: "c11-pol-8-mcq-14",
    question: "The Balwant Rai Mehta Committee (1957) originally recommended which institutional structure for rural local governance?",
    options: [
      "A):   Two-tier system",
      "B):   Three-tier system",
      "C):   Single-tier village council",
      "D):   Four-tier administrative pyramid"
    ],
    correctAnswer: "B",
    explanation: "The Balwant Rai Mehta Committee recommended a 3-tier structure: Gram Panchayat (village), Panchayat Samiti (block), and Zila Parishad (district)."
  },
  {
    id: "c11-pol-8-mcq-15",
    question: "Under Article 243S, Wards Committees are mandatorily constituted in municipalities having a population of:",
    options: [
      "A):   Fifty thousand or more",
      "B):   One lakh or more",
      "C):   Three lakhs or more",
      "D):   Ten lakhs or more"
    ],
    correctAnswer: "C",
    explanation: "Article 243S mandates the constitution of Wards Committees in all municipalities having a population of three lakhs (3,00,000) or more."
  },

  // --- TIER 3: ADVANCE / ANALYTICAL (Q16 to Q20) ---
  {
    id: "c11-pol-8-mcq-16",
    question: "What was Dr. B.R. Ambedkar's primary constitutional apprehension regarding village panchayats during the Constituent Assembly debates?",
    options: [
      "A):   He believed villages were too expensive to administer",
      "B):   He feared upper-caste feudal elites would use village dominance to oppress Scheduled Castes without central safeguards",
      "C):   He thought villages lacked adequate agricultural land",
      "D):   He wanted all governance to be controlled solely by the military"
    ],
    correctAnswer: "B",
    explanation: "Dr. Ambedkar feared that entrenched feudal caste hierarchies in Indian villages would perpetuate caste oppression against Dalits if local bodies were endowed with unmonitored power."
  },
  {
    id: "c11-pol-8-mcq-17",
    question: "Which landmark Act was passed in 1996 to extend the provisions of Part IX of the Constitution to Fifth Schedule tribal areas?",
    options: [
      "A):   Forest Rights Act (FRA)",
      "B):   Panchayats (Extension to Scheduled Areas) Act (PESA)",
      "C):   Right to Fair Compensation in Land Acquisition Act",
      "D):   Tribal Advisory Council Act"
    ],
    correctAnswer: "B",
    explanation: "The PESA Act of 1996 extended Panchayati Raj to Fifth Schedule tribal areas across 10 states, granting Gram Sabhas special powers over minor forest produce, land alienation, and customary dispute resolution."
  },
  {
    id: "c11-pol-8-mcq-18",
    question: "Which constitutional body is established under Article 243ZD to consolidate developmental plans prepared by Panchayats and Municipalities at the district level?",
    options: [
      "A):   State Planning Board",
      "B):   District Planning Committee (DPC)",
      "C):   Zila Vikas Board",
      "D):   Regional Development Authority"
    ],
    correctAnswer: "B",
    explanation: "Article 243ZD mandates the creation of a District Planning Committee (DPC) in every district to consolidate draft plans prepared by Panchayats and Municipalities into a unified district development plan."
  },
  {
    id: "c11-pol-8-mcq-19",
    question: "What is meant by the '3 Fs' challenge widely cited as the major handicap of local self-governments in contemporary India?",
    options: [
      "A):   Farming, Forests, and Fisheries",
      "B):   Funds, Functions, and Functionaries",
      "C):   Freedom, Fairness, and Flexibility",
      "D):   Franchise, Federalism, and Fraternity"
    ],
    correctAnswer: "B",
    explanation: "The '3 Fs' deficit refers to the inadequacy of Funds (lack of revenue powers), Functions (failure of states to genuinely devolve 29/18 subjects), and Functionaries (scarcity of dedicated administrative/technical staff)."
  },
  {
    id: "c11-pol-8-mcq-20",
    question: "The term 'Sarpanch Pati' in the context of Panchayati Raj refers to:",
    options: [
      "A):   A legally recognized deputy to the village Sarpanch",
      "B):   The patriarchal practice where male relatives/husbands exercise de facto authority on behalf of elected female representatives",
      "C):   A specialized government auditor for village welfare schemes",
      "D):   A traditional title bestowed upon the seniormost panchayat member"
    ],
    correctAnswer: "B",
    explanation: "'Sarpanch Pati' describes the informal patriarchal dynamic where husbands or male family members attempt to wield real decision-making power on behalf of elected women sarpanches, though this practice is declining with increasing female literacy and experience."
  }
];
