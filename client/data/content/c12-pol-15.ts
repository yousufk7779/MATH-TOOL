// Class 12 Political Science Chapter 15: Recent Developments in Indian Politics (Marks: 07)
// Official State Board / NCERT Curriculum Blueprint — Category C: 7-Marks Unit (Golden 25 Model)
// Part B: Politics in India since Independence
// Primary Theme Color: #00C853 (Vibrant Green)

const themeColor = "#00C853";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Pol15HtmlOverview = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- QUICK GLOSSARY & CORE DEFINITIONS CARD -->
  <div style="background: rgba(0, 200, 83, 0.06); border: 1.5px solid #00C853; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #00C853; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Coalition Era Terminology</h2>
    <p class="text-center" style="color: #69F0AE; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 12 Chapter 15: Recent Developments in Indian Politics (7 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00C853; border-radius: 6px;">
        <b style="color: #00C853; font-size: 16px; display: block; margin-bottom: 4px;">1. Coalition Era (1989–2014):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The quarter-century epoch in Indian parliamentary democracy characterized by the end of single-party majority rule, wherein national governments at the Centre could only be established and sustained through multi-party pre-poll or post-poll coalitions relying heavily on regional political parties.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00C853; border-radius: 6px;">
        <b style="color: #00C853; font-size: 16px; display: block; margin-bottom: 4px;">2. Mandal Commission (BP Mandal):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The Second Backward Classes Commission appointed in 1979 under B.P. Mandal, whose recommendation to provide 27% reservation in central government jobs and higher education institutions for Other Backward Classes (OBCs) was implemented in August 1990 by Prime Minister V.P. Singh, transforming Indian social politics.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00C853; border-radius: 6px;">
        <b style="color: #00C853; font-size: 16px; display: block; margin-bottom: 4px;">3. Second Democratic Upsurge:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The famous theoretical formulation conceptualized by political scientist Yogendra Yadav describing the dramatic surge in voter turnout, political consciousness, and direct legislative representation of marginalized social groups—specifically OBCs, Dalits, and rural intermediate peasant castes—during the 1990s.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00C853; border-radius: 6px;">
        <b style="color: #00C853; font-size: 16px; display: block; margin-bottom: 4px;">4. National Democratic Alliance (NDA):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The center-right national political coalition formed in May 1998 under the leadership of the Bharatiya Janata Party (BJP) and Prime Minister Atal Bihari Vajpayee, which governed India from 1998 to 2004, becoming the first non-Congress coalition to complete a full five-year constitutional term.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00C853; border-radius: 6px;">
        <b style="color: #00C853; font-size: 16px; display: block; margin-bottom: 4px;">5. United Progressive Alliance (UPA):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The center-left governing coalition formed following the 2004 Lok Sabha elections, led by the Indian National Congress under Sonia Gandhi, with Dr. Manmohan Singh as Prime Minister, supported from outside by the Left Front, which enacted major rights-based welfare legislations (MGNREGA, RTI, RTE).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: CONTEXT OF THE 1990S: THE FIVE MAJOR DEVELOPMENTS -->
  <h2 style="color: #00C853; border-bottom: 2px solid #00C853; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">1. Context of the 1990s: The Five Major Defining Developments</h2>

  <p>
    The decade of the 1990s was a momentous transitional period that fundamentally reconstituted the institutional, economic, and ideological landscape of the Indian republic. Following the historic general election of 1989, five converging, seismic developments ended the Nehruvian consensus and inaugurated a new political order:
  </p>

  <div style="background: rgba(0, 200, 83, 0.05); border-left: 4px solid #00C853; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00C853; margin: 0 0 8px 0; font-size: 17px;">(i) The Five Structural Transformations of the 1990s</h3>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. The End of the 'Congress System':</b> In the November 1989 Lok Sabha elections, Rajiv Gandhi's Congress was defeated, falling from 415 seats (won in 1984) to 197 seats. This definitively brought down the curtain on single-party dominance and launched the era of multi-party coalitions.</li>
      <li><b style="color: #00C853;">2. The 'Mandal Issue' &amp; Rise of OBC Politics:</b> In August 1990, Prime Minister V.P. Singh announced the implementation of the Mandal Commission's recommendations, providing 27% job quotas for Other Backward Classes (OBCs) in central public employment, triggering massive youth protests across northern India and crystallizing OBC electoral consciousness.</li>
      <li><b style="color: #00C853;">3. The New Economic Policy (1991):</b> Confronting a severe balance of payments crisis with foreign exchange reserves depleted to barely two weeks of imports, the P.V. Narasimha Rao government, with Finance Minister Dr. Manmohan Singh, initiated radical economic reforms—Liberalization, Privatization, and Globalization (LPG)—dismantling the Nehruvian License-Permit Raj.</li>
      <li><b style="color: #00C853;">4. The Ayodhya Dispute &amp; Rise of Hindutva:</b> The demolition of the 16th-century Babri Masjid in Ayodhya on 6 December 1992 by kar sevaks unleashed countrywide communal riots, accelerating the political ascent of the Bharatiya Janata Party (BJP) and bringing cultural nationalism and secularism into sharp political debate.</li>
      <li><b style="color: #00C853;">5. Assassination of Rajiv Gandhi (May 1991):</b> During an election rally in Sriperumbudur (Tamil Nadu), former Prime Minister Rajiv Gandhi was assassinated by an LTTE suicide bomber. In the ensuing sympathy wave, Congress emerged as the single largest party and formed a minority government under P.V. Narasimha Rao.</li>
    </ul>
  </div>

  <!-- SECTION 2: PARTICIPATORY UPSURGE & RISE OF JD, BSP AND BJP -->
  <h2 style="color: #00C853; border-bottom: 2px solid #00C853; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">2. Participatory Upsurge &amp; Rise of the Janata Dal, BSP and BJP</h2>

  <p>
    The 1990s witnessed what political sociologists term the <b style="color: #00C853;">"Second Democratic Upsurge"</b>. Unlike Western democracies where voter turnout is highest among affluent, educated elites, India experienced a dramatic paradox: voter participation and political engagement rose significantly among the rural poor, Dalits, Adivasis, and Other Backward Classes (OBCs).
  </p>

  <div style="background: rgba(0, 200, 83, 0.05); border-left: 4px solid #00C853; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00C853; margin: 0 0 8px 0; font-size: 17px;">(i) The Rise of Janata Dal &amp; Backward Caste Mobilization</h3>
    <p style="margin: 0; color: #FFFFFF;">
      Formed in October 1988 through the merger of the Jan Morcha, Janata Party, and Lok Dal under <b style="color: #00C853;">Vishwanath Pratap Singh (V.P. Singh)</b>, the Janata Dal became the primary vehicle for social justice politics. By implementing the Mandal Commission report, it forged a formidable electoral coalition of intermediate peasant castes (Yadavs, Kurmis) and minorities in northern India, giving birth to powerful regional leaders like Lalu Prasad Yadav, Nitish Kumar, and Mulayam Singh Yadav.
    </p>
  </div>

  <div style="background: rgba(0, 200, 83, 0.05); border-left: 4px solid #00C853; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00C853; margin: 0 0 8px 0; font-size: 17px;">(ii) The Bahujan Samaj Party (BSP) &amp; Dalit Assertion</h3>
    <p style="margin: 0; color: #FFFFFF;">
      Founded on Ambedkar Jayanti (14 April 1984) by visionary organizer <b style="color: #00C853;">Kanshi Ram</b>, the <b style="color: #00C853;">Bahujan Samaj Party (BSP)</b> rejected patronizing upper-caste politics, asserting that the *Bahujan* (Scheduled Castes, Scheduled Tribes, OBCs, and religious minorities, comprising 85% of India's population) must become rulers rather than petitioning subjects.
    </p>
    <p style="margin: 8px 0 0 0; color: #FFFFFF;">
      Under the leadership of <b style="color: #00C853;">Mayawati</b>, the BSP broke through in Uttar Pradesh, with Mayawati becoming the first Dalit woman Chief Minister of an Indian state in June 1995, proving that Dalits could capture state power independently through democratic mobilization.
    </p>
  </div>

  <div style="background: rgba(0, 200, 83, 0.05); border-left: 4px solid #00C853; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00C853; margin: 0 0 8px 0; font-size: 17px;">(iii) Ascent of the Bharatiya Janata Party (BJP)</h3>
    <p style="margin: 0; color: #FFFFFF;">
      Following the collapse of the Janata Party, the <b style="color: #00C853;">Bharatiya Janata Party (BJP)</b> was founded in April 1980 under Atal Bihari Vajpayee. While it won only 2 Lok Sabha seats in 1984, the party expanded rapidly in the late 1980s by adopting a resolute platform of <b style="color: #00C853;">Hindutva (Cultural Nationalism)</b>, championed by V.D. Savarkar's philosophy and mobilized through L.K. Advani's Somnath-to-Ayodhya *Rath Yatra* in 1990. The BJP emerged as the single largest party in 1996 (161 seats), 1998 (182 seats), and 1999.
    </p>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM CARD (WHITE BACKGROUND) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 200, 83, 0.4); border-radius: 10px; padding: 14px 16px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 540px;">
      <svg viewBox="0 0 520 280" style="width: 100%; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="520" height="280" fill="#FFFFFF"/>
        
        <!-- Header Banner -->
        <rect x="20" y="12" width="480" height="34" rx="6" fill="#00C853"/>
        <text x="260" y="34" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">THE EVOLUTION OF COALITION GOVERNMENTS (1989–2014)</text>

        <!-- Node 1: National Front & United Front -->
        <rect x="20" y="60" width="150" height="135" rx="6" fill="#E8F5E9" stroke="#81C784" stroke-width="2"/>
        <text x="95" y="82" fill="#1B5E20" font-size="11.5" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">NF &amp; UF Eras</text>
        <line x1="30" y1="92" x2="160" y2="92" stroke="#81C784" stroke-width="1"/>
        <text x="28" y="110" fill="#2E7D32" font-size="9.5" font-family="Arial, sans-serif">• National Front (1989)</text>
        <text x="28" y="126" fill="#2E7D32" font-size="9.5" font-family="Arial, sans-serif">• V.P. Singh (Mandal)</text>
        <text x="28" y="142" fill="#2E7D32" font-size="9.5" font-family="Arial, sans-serif">• BJP &amp; Left Backing</text>
        <text x="28" y="158" fill="#2E7D32" font-size="9.5" font-family="Arial, sans-serif">• United Front (1996)</text>
        <text x="28" y="174" fill="#2E7D32" font-size="9.5" font-family="Arial, sans-serif">• Deve Gowda / Gujral</text>

        <!-- Node 2: NDA Governments -->
        <rect x="185" y="60" width="150" height="135" rx="6" fill="#FFF3E0" stroke="#FFB74D" stroke-width="2"/>
        <text x="260" y="82" fill="#E65100" font-size="11.5" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">NDA Regime</text>
        <line x1="195" y1="92" x2="325" y2="92" stroke="#FFB74D" stroke-width="1"/>
        <text x="193" y="110" fill="#EF6C00" font-size="9.5" font-family="Arial, sans-serif">• Vajpayee Leadership</text>
        <text x="193" y="126" fill="#EF6C00" font-size="9.5" font-family="Arial, sans-serif">• 1998 (13 Months)</text>
        <text x="193" y="142" fill="#EF6C00" font-size="9.5" font-family="Arial, sans-serif">• 1999–2004 (Full Term)</text>
        <text x="193" y="158" fill="#EF6C00" font-size="9.5" font-family="Arial, sans-serif">• Pokhran-II Tests (1998)</text>
        <text x="193" y="174" fill="#EF6C00" font-size="9.5" font-family="Arial, sans-serif">• Kargil Victory (1999)</text>

        <!-- Node 3: UPA Governments -->
        <rect x="350" y="60" width="150" height="135" rx="6" fill="#E3F2FD" stroke="#64B5F6" stroke-width="2"/>
        <text x="425" y="82" fill="#0D47A1" font-size="11.5" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">UPA Regime</text>
        <line x1="360" y1="92" x2="490" y2="92" stroke="#64B5F6" stroke-width="1"/>
        <text x="358" y="110" fill="#1565C0" font-size="9.5" font-family="Arial, sans-serif">• Dr. Manmohan Singh</text>
        <text x="358" y="126" fill="#1565C0" font-size="9.5" font-family="Arial, sans-serif">• 2004 &amp; 2009 Mandates</text>
        <text x="358" y="142" fill="#1565C0" font-size="9.5" font-family="Arial, sans-serif">• Common Min. Program</text>
        <text x="358" y="158" fill="#1565C0" font-size="9.5" font-family="Arial, sans-serif">• MGNREGA &amp; RTI Act</text>
        <text x="358" y="174" fill="#1565C0" font-size="9.5" font-family="Arial, sans-serif">• High GDP Growth</text>

        <!-- Connecting Flow Lines -->
        <path d="M 170 125 L 183 125" stroke="#00C853" stroke-width="2"/>
        <path d="M 335 125 L 348 125" stroke="#00C853" stroke-width="2"/>

        <!-- Bottom Synthesis Bar -->
        <rect x="20" y="208" width="480" height="60" rx="6" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="260" y="228" fill="#0F172A" font-size="11.5" font-weight="bold" text-anchor="middle" font-family="Arial, sans-serif">THE POST-1990S DEMOCRATIC CONSENSUS</text>
        <text x="260" y="246" fill="#475569" font-size="10" text-anchor="middle" font-family="Arial, sans-serif">Broad agreement on New Economic Policies &bull; Irreversible political empowerment of OBCs</text>
        <text x="260" y="260" fill="#475569" font-size="10" text-anchor="middle" font-family="Arial, sans-serif">Decisive role of regional parties &bull; Shift from ideological dogma to pragmatic governance</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The structural transition of national governance from fragile minority regimes (NF/UF) to stable programmatic coalitions (NDA and UPA), institutionalizing federal power-sharing.
    </div>
  </div>

  <!-- SECTION 3: THE COALITION ERA: UF, NDA AND UPA -->
  <h2 style="color: #00C853; border-bottom: 2px solid #00C853; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">3. The Era of Coalitions: UF, NDA and UPA Governments</h2>

  <div style="background: rgba(0, 200, 83, 0.05); border-left: 4px solid #00C853; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00C853; margin: 0 0 8px 0; font-size: 17px;">(i) The National Front (1989) &amp; The United Front (1996–1998)</h3>
    <p style="margin: 0; color: #FFFFFF;">
      • <b style="color: #00C853;">The National Front (1989–1990):</b> Formed by the Janata Dal and regional parties (DMK, TDP, AGP) under Prime Minister V.P. Singh, it presented the extraordinary spectacle of being supported from outside simultaneously by two bitter ideological rivals: the right-wing <b style="color: #00C853;">BJP</b> and the <b style="color: #00C853;">Left Front</b>, purely to keep Congress out of power. It collapsed in November 1990 when the BJP withdrew support following L.K. Advani's arrest in Bihar during his Rath Yatra.
      <br/>• <b style="color: #00C853;">The United Front (1996–1998):</b> In 1996, after Atal Bihari Vajpayee's 13-day BJP government resigned for failing to prove a majority, a 13-party coalition of regional parties and the Janata Dal formed the United Front under Prime Minister <b style="color: #00C853;">H.D. Deve Gowda</b>, followed by <b style="color: #00C853;">I.K. Gujral</b>, sustained by outside support from the Congress. It collapsed when Congress withdrew support over the Jain Commission's interim report on Rajiv Gandhi's assassination.
    </p>
  </div>

  <div style="background: rgba(0, 200, 83, 0.05); border-left: 4px solid #00C853; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00C853; margin: 0 0 8px 0; font-size: 17px;">(ii) The National Democratic Alliance (NDA: 1998–2004)</h3>
    <p style="margin: 0; color: #FFFFFF;">
      Led by the pragmatic statesmanship of <b style="color: #00C853;">Atal Bihari Vajpayee</b>, the BJP formed the National Democratic Alliance (NDA) with major regional parties (AIADMK, Trinamool Congress, BJD, Samata Party, Shiromani Akali Dal).
      <br/>• The 1998 government lasted 13 months, falling by just 1 vote in April 1999 when AIADMK withdrew support.
      <br/>• Following the military victory in the <b style="color: #00C853;">Kargil War (1999)</b>, the NDA returned with a decisive majority in October 1999, governing until 2004. To maintain coalition harmony, the BJP shelved its core contentious ideological demands (abrogation of Article 370, Uniform Civil Code, and Ram Mandir construction), adopting the common National Agenda for Governance.
    </p>
  </div>

  <div style="background: rgba(0, 200, 83, 0.05); border-left: 4px solid #00C853; padding: 14px 18px; margin: 18px 0; border-radius: 4px;">
    <h3 style="color: #00C853; margin: 0 0 8px 0; font-size: 17px;">(iii) Elections of 2004 &amp; The United Progressive Alliance (UPA)</h3>
    <p style="margin: 0; color: #FFFFFF;">
      In the May 2004 elections, the NDA's "India Shining" campaign failed to resonate with the rural electorate. In a surprise verdict, the Congress under Sonia Gandhi emerged as the single-largest party (145 seats) and stitched together the <b style="color: #00C853;">United Progressive Alliance (UPA)</b> with regional allies (DMK, RJD, NCP, PMK), supported from outside by the Left Front (59 MPs).
      <br/>• Sonia Gandhi renounced the prime ministership, nominating renowned economist <b style="color: #00C853;">Dr. Manmohan Singh</b> as Prime Minister.
      <br/>• The UPA enacted transformative, rights-based welfare legislations: <b style="color: #00C853;">MGNREGA (2005)</b> guaranteeing 100 days of rural wage employment, the <b style="color: #00C853;">Right to Information (RTI) Act (2005)</b>, and the <b style="color: #00C853;">Right to Education (RTE) Act (2009)</b>, securing re-election with an increased mandate in 2009 (UPA-II).
    </p>
  </div>

  <!-- SECTION 4: THE GROWING CONSENSUS IN CONTEMPORARY POLITICS -->
  <h2 style="color: #00C853; border-bottom: 2px solid #00C853; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">4. The Emerging Multi-Party Consensus in Indian Politics</h2>

  <p>
    Despite bitter electoral rivalries and fierce rhetorical battles, political scientists note that a remarkable, broad-based <b style="color: #00C853;">national consensus</b> has crystallized across all major political parties on four core pillars:
  </p>

  <ul style="color: #FFFFFF; line-height: 1.8; margin-left: 20px;">
    <li><b style="color: #00C853;">1. Consensus on New Economic Policies:</b> While political parties may criticize economic liberalization in opposition, all ruling parties (Congress, BJP, regional coalitions) embrace privatization, foreign direct investment (FDI), and fiscal reforms once in power.</li>
    <li><b style="color: #00C853;">2. Acceptance of Social and Political Claims of OBCs:</b> All political parties unanimously accept reservation in public employment and higher education for Other Backward Classes, actively courting intermediate castes for electoral viability.</li>
    <li><b style="color: #00C853;">3. Indispensable Role of Regional Parties:</b> The distinction between "national" and "regional" state-level parties has blurred; regional parties have become indispensable stakeholders in national cabinet decision-making and federal policy formulation.</li>
    <li><b style="color: #00C853;">4. Pragmatic Coalition Governance over Ideological Dogma:</b> Coalition politics has forced national parties to compromise rigid ideological agendas in favor of pragmatic governance and common minimum programs.</li>
  </ul>

  <!-- SPECIALIZED BOXES: THINKER QUOTE & EXAM TIP BOX -->
  <div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0;">
    <div style="background: rgba(0, 200, 83, 0.08); border-left: 4px solid #00C853; padding: 16px; border-radius: 6px;">
      <h4 style="color: #00C853; margin: 0 0 6px 0; font-size: 16px;">🧠 Scholarly Formulation: Yogendra Yadav's Three Upsurges</h4>
      <p style="color: #E2E8F0; margin: 0; font-size: 14.5px; line-height: 1.6;">
        Yogendra Yadav identifies the 1990s as the <b style="color: #00C853;">"Second Democratic Upsurge"</b>—the entry and electoral assertion of lower castes and OBCs into the corridors of power. This deepened Indian democracy from a formal constitutional structure into a genuine participatory reality.
      </p>
    </div>

    <div style="background: rgba(253, 200, 48, 0.08); border-left: 4px solid #FDC830; padding: 16px; border-radius: 6px;">
      <h4 style="color: #FDC830; margin: 0 0 6px 0; font-size: 16px;">💡 Board Exam Strategy (7 Marks Mastery)</h4>
      <p style="color: #E2E8F0; margin: 0; font-size: 14.5px; line-height: 1.6;">
        As the highest weightage chapter (7 Marks) in Part B, examiners frequently ask 6-mark questions on: (i) The <b>Five Major Trends of the 1990s</b>; (ii) The <b>Emerging Consensus in Indian Politics</b>; or (iii) A comparative analysis of <b>NDA vs UPA coalition models</b>. Ensure structured 3-tier presentation with exact years and legislative landmarks (Mandal 1990, LPG 1991, MGNREGA 2005).
      </p>
    </div>
  </div>

  <!-- CHRONOLOGICAL TIMELINE -->
  <h2 style="color: #00C853; border-bottom: 2px solid #00C853; padding-bottom: 8px; margin-top: 30px; font-size: 21px;">5. Chronological Revision Timeline (1989–2014)</h2>
  
  <div style="overflow-x: auto; margin-top: 14px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14.5px;">
      <thead>
        <tr style="background: rgba(0, 200, 83, 0.2); color: #00C853;">
          <th style="padding: 10px 14px; border: 1px solid rgba(0, 200, 83, 0.3); text-align: left;">Year</th>
          <th style="padding: 10px 14px; border: 1px solid rgba(0, 200, 83, 0.3); text-align: left;">Political Landmark</th>
          <th style="padding: 10px 14px; border: 1px solid rgba(0, 200, 83, 0.3); text-align: left;">Historical &amp; Electoral Significance</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">Nov 1989</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Defeat of Congress &amp; 9th Lok Sabha</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">End of one-party majority rule; National Front formed under V.P. Singh.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.04);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">August 1990</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Implementation of Mandal Report</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">27% central job quotas granted to OBCs; triggers widespread mobilization.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">May 1991</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Assassination of Rajiv Gandhi</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">LTTE suicide attack; Congress forms minority government under Rao.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.04);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">July 1991</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Adoption of New Economic Policy</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">LPG structural reforms launched by Rao and Dr. Manmohan Singh.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">6 Dec 1992</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Demolition of Babri Masjid</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Triggered nationwide communal clashes; BJP dismissals under Art 356.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.04);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">1996–1998</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">United Front Governments</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Coalition under Deve Gowda and I.K. Gujral backed by Congress from outside.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">1999–2004</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">NDA Government (Full Term)</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Vajpayee leads first non-Congress coalition to complete full 5-year term.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.04);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">May 2004</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">Elections &amp; Formation of UPA-I</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Dr. Manmohan Singh becomes Prime Minister; enactment of MGNREGA &amp; RTI.</td>
        </tr>
        <tr style="background: rgba(255,255,255,0.02);">
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #00C853; font-weight: bold;">May 2009</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">UPA-II Reelection</td>
          <td style="padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); color: #CBD5E1;">Congress increases seat tally to 206, consolidating coalition rule.</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: SOLUTIONS (Q & A)                          */
/* -------------------------------------------------------------------------- */

export const c12Pol15HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION A: VERY SHORT ANSWER (VSAT) QUESTIONS (1 & 2 MARKS) -->
  <div style="background: rgba(0, 200, 83, 0.08); border-left: 5px solid #00C853; padding: 14px 18px; margin-bottom: 24px; border-radius: 4px;">
    <h2 style="color: #00C853; margin: 0 0 6px 0; font-size: 20px;">Section A: Very Short Answer Questions (1 &amp; 2 Marks)</h2>
    <p style="margin: 0; color: #69F0AE; font-size: 14.5px;">Direct Recall, Alliances &amp; Definitional Accuracy &bull; Exactly 12 Questions (Q1 to Q12)</p>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q1: Which year is regarded as the watershed marking the end of the 'Congress System' in India?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> The year <b style="color: #00C853;">1989</b> (the Ninth General Elections) is regarded as the watershed marking the decisive end of the 'Congress System' and single-party dominance at the Centre.
    </p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q2: Who headed the Second Backward Classes Commission appointed in 1979?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> The Second Backward Classes Commission was headed by <b style="color: #00C853;">Bindeshwari Prasad Mandal (B.P. Mandal)</b>, popularly known as the Mandal Commission.
    </p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q3: What percentage of reservation did the Mandal Commission recommend for Other Backward Classes (OBCs)?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> The Mandal Commission recommended <b style="color: #00C853;">27% reservation</b> for Other Backward Classes (OBCs) in central government jobs, public sector undertakings, and educational institutions.
    </p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q4: Who was the Prime Minister who implemented the recommendations of the Mandal Commission in August 1990?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> Prime Minister <b style="color: #00C853;">Vishwanath Pratap Singh (V.P. Singh)</b>, heading the National Front government, implemented the Mandal Commission report on 7 August 1990.
    </p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q5: Name the Prime Minister and Finance Minister who initiated the New Economic Policy in 1991.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> The New Economic Policy (LPG) was initiated by Prime Minister <b style="color: #00C853;">P.V. Narasimha Rao</b> and Union Finance Minister <b style="color: #00C853;">Dr. Manmohan Singh</b> in July 1991.
    </p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q6: On what date was the Babri Masjid in Ayodhya demolished?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> The Babri Masjid in Ayodhya was demolished on <b style="color: #00C853;">6 December 1992</b> by thousands of kar sevaks organized by Vishva Hindu Parishad and affiliated organizations.
    </p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q7: Who founded the Bahujan Samaj Party (BSP) and in which year?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> The Bahujan Samaj Party (BSP) was founded by <b style="color: #00C853;">Kanshi Ram</b> on <b style="color: #00C853;">14 April 1984</b> (Ambedkar Jayanti).
    </p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q8: Name the two Prime Ministers who headed the United Front governments between 1996 and 1998.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> The United Front governments were headed by <b style="color: #00C853;">H.D. Deve Gowda</b> (1996–1997) and <b style="color: #00C853;">Inder Kumar Gujral</b> (1997–1998).
    </p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q9: What does the term 'Second Democratic Upsurge' signify in Indian politics?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> Coined by political scientist Yogendra Yadav, it refers to the massive increase in political awareness, participation, and legislative representation of Other Backward Classes (OBCs) and Dalits during the 1990s.
    </p>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q10: Which was the first non-Congress coalition government to complete a full five-year term at the Centre?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> The <b style="color: #00C853;">National Democratic Alliance (NDA)</b> government led by Prime Minister Atal Bihari Vajpayee, which governed from October 1999 to May 2004, was the first to complete a full term.
    </p>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q11: Mention any two landmark rights-based welfare legislations passed by the UPA-I government.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> Two landmark legislations were: (i) The <b style="color: #00C853;">Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), 2005</b>, and (ii) The <b style="color: #00C853;">Right to Information (RTI) Act, 2005</b>.
    </p>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #00C853; margin: 0 0 10px 0; font-size: 17px;">Q12: In which landmark judgment of 1992 did the Supreme Court uphold the 27% OBC reservation?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #00C853;">Answer:</b> In the landmark <b style="color: #00C853;">Indra Sawhney vs Union of India case (1992)</b>, the Supreme Court upheld the constitutional validity of 27% reservation for OBCs, subject to the exclusion of the "creamy layer".
    </p>
  </div>

  <!-- SECTION B: SHORT ANSWER (SAT) QUESTIONS (4 MARKS) -->
  <div style="background: rgba(0, 200, 83, 0.08); border-left: 5px solid #00C853; padding: 14px 18px; margin: 30px 0 24px 0; border-radius: 4px;">
    <h2 style="color: #00C853; margin: 0 0 6px 0; font-size: 20px;">Section B: Short Answer Questions (4 Marks)</h2>
    <p style="margin: 0; color: #69F0AE; font-size: 14.5px;">Structured, Analytical Point-Wise Explanations &bull; Exactly 8 Questions (Q13 to Q20)</p>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q13: Explain the recommendations of the Mandal Commission and why its implementation caused nationwide turmoil in 1990.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">Answer:</b> Appointed in 1979 under B.P. Mandal, the Commission's findings transformed Indian politics:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. Identification of OBCs:</b> The Commission identified 3,743 castes comprising roughly 52% of the Indian population as socially and educationally backward classes.</li>
      <li><b style="color: #00C853;">2. Core Recommendation:</b> It recommended a 27% quota for OBCs in all central government jobs, public enterprises, and central universities to ensure equitable representation.</li>
      <li><b style="color: #00C853;">3. V.P. Singh's Implementation:</b> On 7 August 1990, Prime Minister V.P. Singh announced the implementation of job quotas, bypassing extensive parliamentary debate.</li>
      <li><b style="color: #00C853;">4. Nationwide Agitations:</b> Massive anti-reservation student protests erupted across northern India, featuring violent road blockades, hunger strikes, and self-immolation bids by upper-caste youth fearing loss of public employment opportunities.</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q14: Analyze the political and economic circumstances leading to the adoption of the New Economic Policy in 1991.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">Answer:</b> The 1991 economic structural overhaul was precipitated by an unprecedented balance of payments crisis:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. Depleted Foreign Exchange Reserves:</b> By June 1991, India's foreign exchange reserves had plunged to less than $1 billion, barely sufficient to finance two weeks of essential imports.</li>
      <li><b style="color: #00C853;">2. The 1990 Gulf War Shock:</b> Iraq's invasion of Kuwait disrupted crude oil supplies, skyrocketing India's oil import bill and cutting off crucial remittances from Indian workers in the Gulf.</li>
      <li><b style="color: #00C853;">3. Pledging Gold Reserves:</b> The government was forced to physically airlift national gold reserves to London and Zurich as collateral to secure emergency loans from the IMF and World Bank.</li>
      <li><b style="color: #00C853;">4. The LPG Shift:</b> Under IMF-World Bank structural adjustment conditions, Prime Minister Narasimha Rao and Dr. Manmohan Singh abandoned the socialist command model in favor of Liberalization, Privatization, and Globalization (LPG).</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q15: Describe the rise of the Bahujan Samaj Party (BSP) and its contribution to Dalit empowerment.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">Answer:</b> Founded by Kanshi Ram in 1984, the BSP radically transformed subaltern politics:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. The Concept of 'Bahujan':</b> The BSP united Scheduled Castes, Scheduled Tribes, OBCs, and religious minorities under the banner of the "Bahujan" (majority 85%), rejecting upper-caste hegemony.</li>
      <li><b style="color: #00C853;">2. Assertion of Political Power:</b> Kanshi Ram declared that political power is the "master key" through which all social and economic disabilities can be unlocked.</li>
      <li><b style="color: #00C853;">3. Mayawati's Historic Breakthrough:</b> Under Mayawati, the BSP formed the government in Uttar Pradesh in 1995, with Mayawati becoming the first Dalit woman Chief Minister, later winning an absolute majority in 2007 through a broad Dalit-Brahmin social coalition.</li>
      <li><b style="color: #00C853;">4. Symbolic &amp; Dignity Revolution:</b> Installing statues of Dr. B.R. Ambedkar, constructing Dalit memorial parks, and naming universities after subaltern icons fostered unprecedented pride and political self-respect among marginalized communities.</li>
    </ul>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q16: Trace the factors behind the political ascent of the Bharatiya Janata Party (BJP) during the 1990s.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">Answer:</b> The BJP grew from a 2-seat party in 1984 to the ruling party of India in 1998 through several strategic shifts:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. Hindutva &amp; Cultural Nationalism:</b> Moving away from Gandhian socialism, the BJP embraced Hindutva, articulating the cultural and civilizational identity of India based on V.D. Savarkar's concepts.</li>
      <li><b style="color: #00C853;">2. The Ram Janmabhoomi Movement:</b> L.K. Advani's 1990 Somnath-to-Ayodhya Rath Yatra galvanized Hindu religious sentiment across northern and western India, expanding the party's mass voter base.</li>
      <li><b style="color: #00C853;">3. Critique of "Pseudo-Secularism":</b> The BJP effectively campaigned against the Congress's handling of the Shah Bano case (1985), characterizing it as minority appeasement and pseudo-secularism.</li>
      <li><b style="color: #00C853;">4. Vajpayee's Moderate Leadership &amp; Coalitions:</b> Atal Bihari Vajpayee's towering, moderate stature enabled the BJP to forge alliances with diverse regional parties, creating the NDA in 1998.</li>
    </ul>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q17: Explain the unique political paradox of the National Front government of 1989.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">Answer:</b> The 1989 National Front government under V.P. Singh was an extraordinary coalition experiment:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. Minority Government of Janata Dal:</b> The National Front comprised the Janata Dal and regional allies (DMK, TDP, AGP), holding only 143 seats in the Lok Sabha.</li>
      <li><b style="color: #00C853;">2. Outside Support from Ideological Rivals:</b> The government was supported simultaneously from outside by two diametrically opposed ideological forces: the right-wing <b style="color: #00C853;">BJP (85 seats)</b> and the communist <b style="color: #00C853;">Left Front (52 seats)</b>.</li>
      <li><b style="color: #00C853;">3. Single Unifying Goal:</b> Both the BJP and the Left agreed to prop up V.P. Singh solely to prevent Rajiv Gandhi's Congress from returning to power.</li>
      <li><b style="color: #00C853;">4. Inherent Instability:</b> The arrangement was inherently unstable; when Lalu Prasad Yadav arrested L.K. Advani in Bihar during his Rath Yatra in October 1990, the BJP withdrew support, causing the government to collapse.</li>
    </ul>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q18: How did the NDA under Atal Bihari Vajpayee manage coalition governance between 1998 and 2004?</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">Answer:</b> The National Democratic Alliance established a successful model of pragmatic coalition management:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. Shelving Controversial Ideological Issues:</b> To accommodate diverse regional partners, the BJP agreed to keep its core ideological demands (abrogation of Article 370, Uniform Civil Code, Ram Temple) on the backburner.</li>
      <li><b style="color: #00C853;">2. Common National Agenda:</b> Governance was conducted strictly according to a negotiated "National Agenda for Governance" agreed upon by all coalition partners.</li>
      <li><b style="color: #00C853;">3. Coalition Coordination Committees:</b> Regular consultations were institutionalized through coordination committees headed by George Fernandes to defuse alliance frictions.</li>
      <li><b style="color: #00C853;">4. National Security &amp; Economic Performance:</b> The NDA capitalized on major national milestones—Pokhran-II nuclear tests (1998), military success in the Kargil War (1999), and highway infrastructure development (Golden Quadrilateral).</li>
    </ul>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q19: Analyze the unexpected political outcome of the 2004 Lok Sabha elections and the formation of the UPA.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">Answer:</b> The 2004 general elections produced one of the most stunning political reversals in Indian history:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. Failure of "India Shining":</b> The NDA's high-decibel campaign failed to resonate with rural voters and small farmers who had not benefited from urban economic growth.</li>
      <li><b style="color: #00C853;">2. Congress's Strategic Coalition:</b> Congress under Sonia Gandhi actively forged pre-poll alliances with potent regional parties (DMK in Tamil Nadu, RJD in Bihar, NCP in Maharashtra), securing 145 seats against the BJP's 138.</li>
      <li><b style="color: #00C853;">3. Outside Left Support:</b> The Left Front recorded its highest-ever tally of 59 seats and agreed to support the Congress-led United Progressive Alliance (UPA) from outside to keep the BJP out of power.</li>
      <li><b style="color: #00C853;">4. Renunciation by Sonia Gandhi:</b> Sonia Gandhi declined the prime ministership, appointing eminent economist Dr. Manmohan Singh, establishing an innovative dual-leadership model of party and government.</li>
    </ul>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q20: Explain the four core pillars of the emerging consensus in contemporary Indian politics.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">Answer:</b> In the post-1990s era, all major political parties converge on four fundamental principles:
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">1. Agreement on Economic Reforms:</b> Despite rhetorical criticisms, all parties (Congress, BJP, regional parties) support liberalization, privatization, and global trade integration when in government.</li>
      <li><b style="color: #00C853;">2. Acceptance of Social &amp; Political Claims of OBCs:</b> Unanimous acceptance of reservation quotas and political representation for Other Backward Classes in education and employment.</li>
      <li><b style="color: #00C853;">3. Acceptance of the Crucial Role of Regional Parties:</b> State-level regional parties are recognized as legitimate and indispensable partners in national governance.</li>
      <li><b style="color: #00C853;">4. Pragmatism over Ideology:</b> Political alliances are built on pragmatic electoral arithmetic and shared power-sharing arrangements rather than rigid ideological purity.</li>
    </ul>
  </div>

  <!-- SECTION C: LONG ANSWER (LAT) QUESTIONS (6 MARKS) -->
  <div style="background: rgba(0, 200, 83, 0.08); border-left: 5px solid #00C853; padding: 14px 18px; margin: 30px 0 24px 0; border-radius: 4px;">
    <h2 style="color: #00C853; margin: 0 0 6px 0; font-size: 20px;">Section C: Long Answer Questions (6 Marks)</h2>
    <p style="margin: 0; color: #69F0AE; font-size: 14.5px;">Comprehensive 3-Tier Answers with Themed Dimensions &bull; Exactly 5 Questions (Q21 to Q25)</p>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 24px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q21: Detailed examination of the five major developments that fundamentally transformed Indian politics during the 1990s.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">1. Introduction &amp; Background:</b><br/>
      The decade of the 1990s was a watershed in modern Indian political history. The stable era of single-party Congress hegemony gave way to a fluid, highly competitive, and pluralist multi-party democracy shaped by intense social assertions, economic restructuring, and ideological polarization. Five critical developments defined this historic transformation.
    </p>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">2. Core Thematic Dimensions:</b>
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">The Defeat of Congress (1989):</b> The Ninth General Election brought an end to Congress majority rule. The Congress party fell from 415 seats in 1984 to 197 seats in 1989, initiating a 25-year era of multi-party coalition governments at the Centre.</li>
      <li><b style="color: #00C853;">The Rise of the 'Mandal Issue':</b> Prime Minister V.P. Singh's implementation of the Mandal Commission recommendations in August 1990 granting 27% job quotas to OBCs triggered massive political mobilization, turning intermediate castes into the arbiters of political power.</li>
      <li><b style="color: #00C853;">Structural Economic Overhaul (1991):</b> Confronting severe bankruptcy, the Narasimha Rao government dismantled the socialistic "License-Permit Raj" and introduced Liberalization, Privatization, and Globalization (LPG), fundamentally altering India's developmental path.</li>
      <li><b style="color: #00C853;">Ayodhya Dispute &amp; Rise of Hindutva:</b> The demolition of the Babri Masjid on 6 December 1992 and the surrounding Ram Janmabhoomi movement brought cultural nationalism to center-stage, transforming the BJP into a preeminent national contender.</li>
      <li><b style="color: #00C853;">Assassination of Rajiv Gandhi (1991):</b> Rajiv Gandhi's assassination by the LTTE led to the end of the Nehru-Gandhi family's direct prime ministerial monopoly during the 1990s, opening space for veteran regional leaders and coalition managers.</li>
    </ul>
    <p style="color: #FFFFFF; margin: 10px 0 0 0;">
      <b style="color: #00C853;">3. Conclusion &amp; Strategic Relevance:</b><br/>
      These five developments permanently deepened Indian democracy, decentralizing political power away from New Delhi to state capitals and transforming the Indian state into a vibrant, federal coalition democracy.
    </p>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 24px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q22: Analyze the phenomenon of the 'Second Democratic Upsurge' in the 1990s with reference to the rise of the Janata Dal, the BSP, and OBC political empowerment.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">1. Introduction &amp; Background:</b><br/>
      In Western political philosophy, democratic voting participation is traditionally highest among the affluent, educated upper classes. The Indian political experience of the 1990s reversed this orthodoxy through what political scientist Yogendra Yadav termed the <b style="color: #00C853;">"Second Democratic Upsurge"</b>—a profound participatory explosion of Other Backward Classes (OBCs), Dalits, and rural intermediate peasant castes into the electoral arena.
    </p>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">2. Core Thematic Dimensions:</b>
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">Shift in Voter Demographics:</b> During the 1990s, voter turnout among lower castes, rural women, and illiterate citizens surpassed that of the urban educated upper-caste elites, radically democratizing the political franchise.</li>
      <li><b style="color: #00C853;">Mandalization &amp; The Janata Dal:</b> The implementation of the Mandal report by V.P. Singh in 1990 gave institutional reality to backward caste consciousness. The Janata Dal emerged as the vanguard of social justice, elevating agrarian leaders like Lalu Prasad Yadav, Mulayam Singh Yadav, and Sharad Yadav.</li>
      <li><b style="color: #00C853;">Rise of the Bahujan Samaj Party (BSP):</b> Kanshi Ram and Mayawati mobilized the Dalits not as recipients of welfare patronage, but as self-conscious political rulers. Mayawati's four tenures as Chief Minister of Uttar Pradesh shattered centuries of feudal caste dominance.</li>
      <li><b style="color: #00C853;">Electoral Defeat of Upper-Caste Hegemony:</b> Traditional national parties (Congress and early BJP) were forced to recalibrate their leadership profiles, nominating backward-caste candidates to remain electorally competitive.</li>
      <li><b style="color: #00C853;">Deepening of Grassroots Representation:</b> The 73rd and 74th Constitutional Amendments (1992) constitutionally mandated reservations for women and backward castes in Panchayati Raj institutions, embedding the upsurge at the village level.</li>
    </ul>
    <p style="color: #FFFFFF; margin: 10px 0 0 0;">
      <b style="color: #00C853;">3. Conclusion &amp; Strategic Relevance:</b><br/>
      The Second Democratic Upsurge transformed India from an elite-led constitutional democracy into a genuinely inclusive, subaltern participatory republic where no government can rule without the active consent of the backward classes.
    </p>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 24px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q23: Trace the trajectory of Coalition Politics in India from the fragile National Front and United Front to the institutionalized NDA and UPA models.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">1. Introduction &amp; Background:</b><br/>
      The demise of the one-party dominance of Congress in 1989 inaugurated the <b style="color: #00C853;">Coalition Era (1989–2014)</b> in Indian politics. Initially regarded as an aberration marked by extreme political instability and frequent mid-term elections, coalition governance evolved over two decades into a mature, stable, and institutionalized art of federal power-sharing.
    </p>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">2. Core Thematic Dimensions:</b>
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">The Fragile Phase (National Front: 1989–1990):</b> V.P. Singh's minority government survived on the contradictory outside support of the BJP and Left Front, collapsing within 11 months over the Ayodhya Rath Yatra dispute.</li>
      <li><b style="color: #00C853;">The United Front Experiments (1996–1998):</b> A loose coalition of 13 regional parties governed under Deve Gowda and I.K. Gujral with outside support from Congress. Constant friction and unpredictable outside support led to multiple government collapses within two years.</li>
      <li><b style="color: #00C853;">The NDA Model (1998–2004):</b> Under Atal Bihari Vajpayee, the BJP successfully institutionalized coalition governance. By shelving divisive ideological issues and adopting a common "National Agenda for Governance", the NDA completed a full five-year term (1999–2004).</li>
      <li><b style="color: #00C853;">The UPA Model (2004–2014):</b> The Congress adapted to the coalition reality under Sonia Gandhi, stitching together the UPA with regional parties (DMK, RJD, NCP). Backed by the Left Front on a "National Common Minimum Programme", Dr. Manmohan Singh governed for two consecutive terms (2004–2014).</li>
      <li><b style="color: #00C853;">Empowerment of Regional Parties:</b> In both NDA and UPA, regional parties (TDP, DMK, Trinamool, Akali Dal) exercised decisive influence over central policymaking, ending New Delhi's arbitrary federal overreach.</li>
    </ul>
    <p style="color: #FFFFFF; margin: 10px 0 0 0;">
      <b style="color: #00C853;">3. Conclusion &amp; Strategic Relevance:</b><br/>
      The evolution of coalitions demonstrated the institutional resilience of Indian democracy. Far from causing national paralysis, coalitions compelled national parties to respect federal diversity, negotiate consensus, and share executive power equitably across states.
    </p>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 24px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q24: Discuss the 2004 General Elections, the emergence of the United Progressive Alliance (UPA), and its key rights-based policy achievements.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">1. Introduction &amp; Background:</b><br/>
      The Fourteenth General Elections held in April–May 2004 produced a stunning verdict that confounded all opinion polls and political predictions. Defying the NDA's aggressive "India Shining" campaign, the Indian electorate delivered a decisive mandate for rural rejuvenation, leading to the formation of the <b style="color: #00C853;">United Progressive Alliance (UPA)</b> under Dr. Manmohan Singh.
    </p>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">2. Core Thematic Dimensions:</b>
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">The Rejection of "India Shining":</b> While economic growth had surged in IT and urban services under the NDA, rural distress, agrarian stagnation, and unemployment created massive anti-incumbency across the countryside.</li>
      <li><b style="color: #00C853;">Sonia Gandhi's Strategic Pre-Poll Alliances:</b> Congress recognized the indispensability of regional allies, forging pre-poll tie-ups with the DMK in Tamil Nadu, RJD in Bihar, and TRS in Andhra Pradesh, emerging as the single largest party with 145 seats.</li>
      <li><b style="color: #00C853;">Dr. Manmohan Singh's Leadership:</b> In an act of political renunciation, Congress President Sonia Gandhi declined the prime ministership, elevating respected technocrat-economist Dr. Manmohan Singh to head the UPA government.</li>
      <li><b style="color: #00C853;">The National Common Minimum Programme (NCMP):</b> Drafted with the support of the Left Front, the NCMP focused on human development, healthcare, and rights-based welfare schemes.</li>
      <li><b style="color: #00C853;">Transformative Rights-Based Legislations:</b> The UPA enacted historic statutory rights: <b style="color: #00C853;">MGNREGA (2005)</b> guaranteeing 100 days of rural wage employment; the <b style="color: #00C853;">Right to Information (RTI) Act (2005)</b> empowering citizens against administrative corruption; and the <b style="color: #00C853;">Right to Education (RTE) Act (2009)</b> making schooling a fundamental right.</li>
    </ul>
    <p style="color: #FFFFFF; margin: 10px 0 0 0;">
      <b style="color: #00C853;">3. Conclusion &amp; Strategic Relevance:</b><br/>
      The UPA-I government demonstrated that economic growth and social welfare can be synergized in a coalition framework, winning a resounding renewal of mandate in the 2009 general elections.
    </p>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 18px; margin-bottom: 24px;">
    <h3 style="color: #00C853; margin: 0 0 12px 0; font-size: 18px;">Q25: Critically examine the nature and dimensions of the emerging consensus in contemporary Indian politics in the 21st century.</h3>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">1. Introduction &amp; Background:</b><br/>
      To a casual observer, 21st-century Indian politics appears intensely fractured, dominated by sharp ideological confrontations between secularism and cultural nationalism, bitter electoral mudslinging, and shifting regional alignments. However, beneath this tempestuous surface, political scientists observe the solid consolidation of a profound, cross-party <b style="color: #00C853;">national consensus</b> on four foundational pillars of state policy.
    </p>
    <p style="color: #FFFFFF; margin: 0 0 10px 0;">
      <b style="color: #00C853;">2. Core Thematic Dimensions:</b>
    </p>
    <ul style="color: #FFFFFF; margin: 0; line-height: 1.8; padding-left: 20px;">
      <li><b style="color: #00C853;">Consensus on New Economic Policies:</b> All political parties—whether center-left (Congress), right-wing (BJP), or regional entities (TMC, BJD, DMK)—agree on the fundamental necessity of economic liberalization, foreign investment, digital infrastructure, and fiscal prudence once in power, despite rhetorical opposition when out of office.</li>
      <li><b style="color: #00C853;">Consensus on Affirmative Action for OBCs:</b> The bitter anti-reservation protests of 1990 have vanished. Today, every political party unconditionally supports reservation for Other Backward Classes in education and public employment, actively competing to champion backward-caste welfare.</li>
      <li><b style="color: #00C853;">Consensus on the Role of Regional Parties:</b> Regional parties are no longer viewed with suspicion as parochial or anti-national. They are universally acknowledged as vital pillars of cooperative federalism and legitimate stakeholders in national decision-making.</li>
      <li><b style="color: #00C853;">Pragmatic Governance over Dogmatic Ideology:</b> The rigid ideological purity of early post-independence parties has been superseded by flexible, pragmatic governance based on delivery of public services, digital welfare transfers, and infrastructure building.</li>
    </ul>
    <p style="color: #FFFFFF; margin: 10px 0 0 0;">
      <b style="color: #00C853;">3. Conclusion &amp; Strategic Relevance:</b><br/>
      This emerging consensus demonstrates the political maturity of the world's largest democracy. While electoral competition remains fierce, broad cross-party agreement on core economic, social, and federal frameworks ensures national continuity, economic stability, and irreversible social justice.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: INTERACTIVE MCQS (20)                       */
/* -------------------------------------------------------------------------- */

export const c12Pol15Mcqs = [
  {
    "id": "c12-pol-15-mcq-1",
    "question": "In which year did the Ninth General Elections take place, marking the decisive end of the 'Congress System' at the Centre?",
    "options": [
      "A):   1989",
      "B):   1984",
      "C):   1991",
      "D):   1996"
    ],
    "correctAnswer": "A",
    "explanation": "The November 1989 general elections marked the end of single-party Congress dominance and launched the coalition era."
  },
  {
    "id": "c12-pol-15-mcq-2",
    "question": "Who was the Chairman of the Second Backward Classes Commission appointed in 1979?",
    "options": [
      "A):   Kaka Kalelkar",
      "B):   B.P. Mandal",
      "C):   Chaudhary Charan Singh",
      "D):   Kanshi Ram"
    ],
    "correctAnswer": "B",
    "explanation": "Bindeshwari Prasad Mandal (B.P. Mandal) headed the Second Backward Classes Commission, popularly called the Mandal Commission."
  },
  {
    "id": "c12-pol-15-mcq-3",
    "question": "What percentage of reservation was recommended by the Mandal Commission for Other Backward Classes (OBCs) in central government jobs?",
    "options": [
      "A):   15%",
      "B):   33%",
      "C):   27%",
      "D):   50%"
    ],
    "correctAnswer": "C",
    "explanation": "The Mandal Commission recommended 27% reservation in central government jobs and educational institutions for OBCs."
  },
  {
    "id": "c12-pol-15-mcq-4",
    "question": "Who was the Prime Minister of India who announced the implementation of the Mandal Commission recommendations in August 1990?",
    "options": [
      "A):   Rajiv Gandhi",
      "B):   P.V. Narasimha Rao",
      "C):   Chandra Shekhar",
      "D):   V.P. Singh"
    ],
    "correctAnswer": "D",
    "explanation": "Prime Minister V.P. Singh of the National Front government announced the implementation of the Mandal report on 7 August 1990."
  },
  {
    "id": "c12-pol-15-mcq-5",
    "question": "The New Economic Policy of Liberalization, Privatization, and Globalization (LPG) was initiated in India in which year?",
    "options": [
      "A):   1991",
      "B):   1989",
      "C):   1996",
      "D):   1998"
    ],
    "correctAnswer": "A",
    "explanation": "The New Economic Policy was launched in July 1991 under Prime Minister P.V. Narasimha Rao and Finance Minister Dr. Manmohan Singh."
  },
  {
    "id": "c12-pol-15-mcq-6",
    "question": "Who was the founder of the Bahujan Samaj Party (BSP) established in April 1984?",
    "options": [
      "A):   Mayawati",
      "B):   Kanshi Ram",
      "C):   B.P. Mandal",
      "D):   Ram Vilas Paswan"
    ],
    "correctAnswer": "B",
    "explanation": "Kanshi Ram founded the Bahujan Samaj Party on 14 April 1984 to organize and politically empower the Bahujan masses."
  },
  {
    "id": "c12-pol-15-mcq-7",
    "question": "The National Democratic Alliance (NDA) government formed in 1998 was headed by which Prime Minister?",
    "options": [
      "A):   H.D. Deve Gowda",
      "B):   L.K. Advani",
      "C):   Atal Bihari Vajpayee",
      "D):   I.K. Gujral"
    ],
    "correctAnswer": "C",
    "explanation": "Atal Bihari Vajpayee was the leader and Prime Minister of the National Democratic Alliance (NDA) government."
  },
  {
    "id": "c12-pol-15-mcq-8",
    "question": "In which year was the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) passed by the UPA-I government?",
    "options": [
      "A):   1999",
      "B):   2014",
      "C):   2009",
      "D):   2005"
    ],
    "correctAnswer": "D",
    "explanation": "MGNREGA was enacted in 2005 by the UPA-I government to guarantee 100 days of wage employment annually to rural households."
  },
  {
    "id": "c12-pol-15-mcq-9",
    "question": "Why was the 1989 National Front government described as an extraordinary political experiment?",
    "options": [
      "A):   It was a minority government supported from outside simultaneously by two ideological adversaries: the BJP and the Left Front",
      "B):   It was supported by all 542 members of the Lok Sabha unanimously",
      "C):   It was governed directly by the Supreme Court of India",
      "D):   It abolished all political parties in India for two years"
    ],
    "correctAnswer": "A",
    "explanation": "The National Front under V.P. Singh was uniquely supported from outside by both the right-wing BJP and the Left Front to keep Congress out."
  },
  {
    "id": "c12-pol-15-mcq-10",
    "question": "What does the term 'Second Democratic Upsurge' refer to in the context of Indian democracy in the 1990s?",
    "options": [
      "A):   The privatization of public sector enterprises",
      "B):   The dramatic increase in voter turnout and political representation of OBCs and Dalits",
      "C):   The rise of student protests in Gujarat and Bihar",
      "D):   The introduction of electronic voting machines (EVMs)"
    ],
    "correctAnswer": "B",
    "explanation": "Coined by Yogendra Yadav, the Second Democratic Upsurge refers to the political awakening and legislative rise of lower castes and OBCs in the 1990s."
  },
  {
    "id": "c12-pol-15-mcq-11",
    "question": "In which landmark 1992 case did the Supreme Court uphold the constitutional validity of 27% OBC reservation while introducing the 'creamy layer' rule?",
    "options": [
      "A):   Kesavananda Bharati Case",
      "B):   Golaknath Case",
      "C):   Indra Sawhney Case",
      "D):   Minerva Mills Case"
    ],
    "correctAnswer": "C",
    "explanation": "In Indra Sawhney vs Union of India (1992), the Supreme Court upheld 27% OBC reservations with the exclusion of the affluent creamy layer."
  },
  {
    "id": "c12-pol-15-mcq-12",
    "question": "Which campaign by the NDA government in 2004 failed to connect with the rural electorate, leading to its unexpected defeat?",
    "options": [
      "A):   Garibi Hatao",
      "B):   Total Revolution",
      "C):   Jai Jawan, Jai Kisan",
      "D):   India Shining"
    ],
    "correctAnswer": "D",
    "explanation": "The 'India Shining' slogan was perceived as highlighting urban prosperity while ignoring agrarian distress, contributing to the NDA's 2004 defeat."
  },
  {
    "id": "c12-pol-15-mcq-13",
    "question": "What immediate step did the BJP take in October 1990 that caused the collapse of the V.P. Singh-led National Front government?",
    "options": [
      "A):   It withdrew outside support after party leader L.K. Advani was arrested in Bihar during his Rath Yatra",
      "B):   It voted in favor of the Congress party's budget",
      "C):   It merged with the Janata Dal",
      "D):   It signed the Tashkent Agreement"
    ],
    "correctAnswer": "A",
    "explanation": "When L.K. Advani's Rath Yatra was stopped and he was arrested in Bihar by the Lalu Prasad Yadav government, the BJP withdrew outside support."
  },
  {
    "id": "c12-pol-15-mcq-14",
    "question": "Which of the following was NOT part of the emerging consensus in Indian politics since the 1990s?",
    "options": [
      "A):   Agreement on the broad contours of the New Economic Policies",
      "B):   Complete abolition of all regional parties to create a two-party system",
      "C):   Acceptance of the social and political claims of Other Backward Classes",
      "D):   Pragmatic governance through multi-party coalitions"
    ],
    "correctAnswer": "B",
    "explanation": "Abolishing regional parties was never part of the consensus; in fact, the consensus celebrates regional parties as indispensable federal partners."
  },
  {
    "id": "c12-pol-15-mcq-15",
    "question": "Who became the first Dalit woman Chief Minister of an Indian state in June 1995?",
    "options": [
      "A):   Mamata Banerjee",
      "B):   Jayalalithaa",
      "C):   Mayawati",
      "D):   Sushma Swaraj"
    ],
    "correctAnswer": "C",
    "explanation": "Mayawati of the Bahujan Samaj Party made history by taking oath as Chief Minister of Uttar Pradesh in June 1995."
  },
  {
    "id": "c12-pol-15-mcq-16",
    "question": "Assertion (A): The 1990s marked the irreversible democratization and decentralization of Indian politics.\nReason (R): Regional parties emerged as central kingmakers, and voter participation rose sharply among lower castes and rural communities.",
    "options": [
      "A):   (A) is false, but (R) is true",
      "B):   Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "C):   (A) is true, but (R) is false",
      "D):   Both (A) and (R) are true, and (R) is the correct explanation of (A)"
    ],
    "correctAnswer": "D",
    "explanation": "Indian democracy democratized deeply because the entry of regional parties and subaltern voter mobilization ended one-party centralized rule."
  },
  {
    "id": "c12-pol-15-mcq-17",
    "question": "Assertion (A): Coalition governments at the Centre between 1989 and 2014 caused permanent policy paralysis in India.\nReason (R): Both the NDA and UPA coalition governments completed full five-year terms and enacted major structural reforms.",
    "options": [
      "A):   (A) is false, but (R) is true",
      "B):   Both (A) and (R) are true",
      "C):   (A) is true, but (R) is false",
      "D):   Both (A) and (R) are false"
    ],
    "correctAnswer": "A",
    "explanation": "(A) is false because coalitions did not cause paralysis; (R) is true because NDA (1999–2004) and UPA (2004–2014) delivered full terms and major reforms (LPG, MGNREGA, RTI)."
  },
  {
    "id": "c12-pol-15-mcq-18",
    "question": "Match List-I (Coalition / Front) with List-II (Period / Lead Party):\n1. National Front — (i) BJP (1998–2004)\n2. United Front — (ii) Congress (2004–2014)\n3. NDA — (iii) Janata Dal (1989–1990)\n4. UPA — (iv) Janata Dal & Regional Parties (1996–1998)\nSelect the correct combination:",
    "options": [
      "A):   1-(iv), 2-(iii), 3-(i), 4-(ii)",
      "B):   1-(iii), 2-(iv), 3-(i), 4-(ii)",
      "C):   1-(iii), 2-(i), 3-(iv), 4-(ii)",
      "D):   1-(ii), 2-(iv), 3-(iii), 4-(i)"
    ],
    "correctAnswer": "B",
    "explanation": "National Front was in 1989–90; United Front in 1996–98; NDA in 1998–2004; UPA in 2004–2014."
  },
  {
    "id": "c12-pol-15-mcq-19",
    "question": "Arrange the following events in chronological sequence:\n1. Demolition of Babri Masjid in Ayodhya\n2. Implementation of the Mandal Commission report\n3. Formation of the United Progressive Alliance (UPA-I)\n4. Enactment of the New Economic Policy (LPG)",
    "options": [
      "A):   2 — 1 — 4 — 3",
      "B):   4 — 2 — 1 — 3",
      "C):   2 — 4 — 1 — 3",
      "D):   1 — 2 — 4 — 3"
    ],
    "correctAnswer": "C",
    "explanation": "Mandal Report (Aug 1990) → New Economic Policy (July 1991) → Babri Masjid Demolition (Dec 1992) → UPA-I formation (May 2004)."
  },
  {
    "id": "c12-pol-15-mcq-20",
    "question": "Which of the following was NOT one of the core elements of the New Economic Policy adopted in 1991?",
    "options": [
      "A):   Dismantling of the industrial licensing regime (Liberalization)",
      "B):   Disinvestment of government shares in public sector enterprises (Privatization)",
      "C):   Reduction of import tariffs and encouragement of Foreign Direct Investment (Globalization)",
      "D):   Complete nationalization of all private foreign trade and commercial banks"
    ],
    "correctAnswer": "D",
    "explanation": "The 1991 reforms favored privatization and open trade; nationalization of banks was an old policy from 1969, not 1991."
  }
];
