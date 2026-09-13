// Class 11 Political Science Chapter 3: System of Representational Democracy (Marks: 06)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #11998E (Emerald Mint Teal)

const themeColor = "#11998E";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol3HtmlOverview = `
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
  <div style="background: rgba(17, 153, 142, 0.06); border: 1.5px solid #11998E; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #11998E; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Electoral Definitions</h2>
    <p class="text-center" style="color: #80CBC4; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 3: System of Representational Democracy (6 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #11998E; border-radius: 6px;">
        <b style="color: #11998E; font-size: 16px; display: block; margin-bottom: 4px;">1. Representative Democracy:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A political system in which citizens do not govern directly, but elect delegates through periodic, free, and fair elections to formulate laws, govern public institutions, and hold the executive accountable on behalf of the people.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #11998E; border-radius: 6px;">
        <b style="color: #11998E; font-size: 16px; display: block; margin-bottom: 4px;">2. First-Past-the-Post (FPTP) System:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">An electoral mechanism (also known as the simple plurality system) where the country is divided into single-member geographical constituencies, and the candidate who secures the highest number of votes in a constituency is declared elected, regardless of whether they achieve an absolute majority (50% + 1).</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #11998E; border-radius: 6px;">
        <b style="color: #11998E; font-size: 16px; display: block; margin-bottom: 4px;">3. Proportional Representation (PR):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">An electoral system designed to allocate parliamentary seats to each political party in direct mathematical proportion to the percentage of total popular votes it secures across the nation or in multi-member constituencies.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #11998E; border-radius: 6px;">
        <b style="color: #11998E; font-size: 16px; display: block; margin-bottom: 4px;">4. Reserved Constituencies:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Specific electoral constituencies earmarked under Articles 330 and 332 in which all eligible citizens vote together (joint electorate), but only candidates belonging to historically disadvantaged Scheduled Castes (SC) or Scheduled Tribes (ST) can contest.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #11998E; border-radius: 6px;">
        <b style="color: #11998E; font-size: 16px; display: block; margin-bottom: 4px;">5. Universal Adult Franchise (Article 326):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The constitutional guarantee that every Indian citizen who is not less than 18 years of age has the unhindered right to vote without discrimination on grounds of religion, race, caste, sex, or property ownership.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #11998E; border-radius: 6px;">
        <b style="color: #11998E; font-size: 16px; display: block; margin-bottom: 4px;">6. Model Code of Conduct (MCC):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A set of consensus guidelines enforced by the Election Commission of India from the date election dates are announced until results are declared, regulating campaign ethics, prohibiting hate speech, and preventing ruling parties from misusing official state machinery.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: METHODS OF ELECTION -->
  <h2 style="color: #11998E; font-weight: bold; border-bottom: 2px solid #11998E; padding-bottom: 6px; margin-top: 25px;">1. Methods of Election: First-Past-The-Post (FPTP) vs Proportional Representation (PR)</h2>

  <p>In ancient Greek city-states like Athens, direct democracy was feasible because citizen assemblies could gather in a public square to debate and vote directly on municipal decrees. In a modern continental nation like India with over 1.4 billion citizens, direct citizen rule is physically impossible. Therefore, modern democracy is inherently <b style="color: #11998E;">Representative Democracy</b>. The crucial institutional question is: <i>How should citizens convert their individual paper or electronic ballots into legislative seats?</i> Worldwide, constitutional democracies rely on two primary methods of election.</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(i) The First-Past-The-Post (FPTP) / Plurality System</h3>
  <p>Under the FPTP system, the entire country is geographically divided into smaller single-member constituencies (for instance, India is divided into 543 Lok Sabha constituencies). Each constituency elects exactly one representative. Electors cast their vote for a specific candidate. In this race, the candidate who polls <b style="color: #11998E;">more votes than any other individual rival</b> is declared the winner.</p>
  <p>Crucially, the winning candidate does not need to secure an absolute majority (more than 50% of the total votes polled). Even if a candidate secures only 25% or 30% of the votes in a multi-cornered contest, they are declared elected if the second-place candidate polls 24% or 29%. The metaphor is drawn from horse racing: whichever horse crosses the post first wins the trophy, regardless of how narrowly it leads the rest of the pack.</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(ii) The Proportional Representation (PR) System</h3>
  <p>Under the Proportional Representation system, large multi-member constituencies are formed, or the entire nation is treated as a single undivided electoral constituency (such as in Israel or the Netherlands). Voters generally cast their ballots for a <b style="color: #11998E;">political party</b> rather than an individual candidate, or they rank candidates in order of preference.</p>
  <p>Parliamentary seats are distributed to each party in strict mathematical proportion to its total share of the popular vote. For example, if a party wins 30% of the national votes, it is allotted approximately 30% of the seats in parliament. PR operates through two major variants:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #11998E;">Party List System:</b> Each political party publishes a prioritized list of candidates before election day. If a party wins 20 seats based on its national percentage, the first 20 candidates on its list enter parliament.</li>
    <li><b style="color: #11998E;">Single Transferable Vote (STV) System:</b> Applied in India for electing members to the <b style="color: #11998E;">Rajya Sabha</b>, State Legislative Councils, and the offices of the <b style="color: #11998E;">President and Vice-President</b>. Voters indicate their 1st, 2nd, and 3rd preferences on the ballot. A candidate must secure a predetermined quota of votes (the <i>Droop Quota</i>) to win:
      <br>
      <span style="color: #80CBC4; font-family: monospace; font-size: 14px;">Quota = [Total Valid Votes Polled / (Number of Seats to be Filled + 1)] + 1</span>
      <br>
      If a candidate surpasses the quota on first-preference votes, their surplus votes are transferred to remaining candidates based on second preferences. If seats remain vacant, the lowest candidate is eliminated and their votes are redistributed until all seats are filled.
    </li>
  </ul>

  <!-- ULTRA HD 3D DIAGRAM 1: WHITE BG SVG -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 250" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="400" height="230" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="210" y="32" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A" text-anchor="middle">ELECTORAL SYSTEMS ARCHITECTURE: FPTP VS PR</text>
        
        <!-- FPTP Box (Left) -->
        <rect x="25" y="52" width="175" height="175" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
        <text x="112" y="74" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">FIRST-PAST-THE-POST (FPTP)</text>
        <line x1="35" y1="82" x2="190" y2="82" stroke="#A7F3D0" stroke-width="1.5"/>
        <text x="112" y="100" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Single-Member Constituencies</text>
        <text x="112" y="118" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Vote for Individual Candidate</text>
        <text x="112" y="136" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Plurality Wins (Highest Vote)</text>
        <text x="112" y="154" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Seats != Vote Share %</text>
        <text x="112" y="172" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Stable Government Majority</text>
        <rect x="40" y="190" width="145" height="25" rx="4" fill="#10B981"/>
        <text x="112" y="206" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Used in Lok Sabha &amp; Assemblies</text>

        <!-- PR Box (Right) -->
        <rect x="220" y="52" width="175" height="175" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
        <text x="307" y="74" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#1D4ED8" text-anchor="middle">PROPORTIONAL REP. (PR)</text>
        <line x1="230" y1="82" x2="385" y2="82" stroke="#BFDBFE" stroke-width="1.5"/>
        <text x="307" y="100" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Multi-Member / Nationwide</text>
        <text x="307" y="118" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Vote for Party List / Pref.</text>
        <text x="307" y="136" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Quota / Percentage Threshold</text>
        <text x="307" y="154" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Seats Strictly Match Vote %</text>
        <text x="307" y="172" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Coalitions / Multi-Party Gridlock</text>
        <rect x="235" y="190" width="145" height="25" rx="4" fill="#3B82F6"/>
        <text x="307" y="206" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Used in Rajya Sabha &amp; President</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 Structural comparison highlighting constituency scale, voting mechanics, and governance outcomes.
    </div>
  </div>

  <!-- SECTION 2: HOW METHODS AFFECT PARTIES AND POLITICS -->
  <h2 style="color: #11998E; font-weight: bold; border-bottom: 2px solid #11998E; padding-bottom: 6px; margin-top: 34px;">2. How Do Electoral Methods Affect Political Parties and Politics?</h2>

  <p>The choice of an electoral system is never purely technical; it fundamentally shapes the party system, cabinet stability, social cohesion, and the nature of political competition in a democracy.</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(i) The Impact of the FPTP System on Political Dynamics</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #11998E;">The "Bonus Seat" / Discrepancy Phenomenon:</b> Under FPTP, there is consistently a dramatic gap between a party’s popular vote share and its resulting legislative seat share. A party with a geographically widespread 30% to 40% vote share can win a sweeping parliamentary landslide (often 60% to 70% of the seats), while minor parties whose votes are scattered thin across all constituencies often end up with zero seats. For example, in the 1984 General Elections, the Congress party secured 48% of the popular vote but captured <b style="color: #11998E;">415 out of 543 seats (over 80%)</b>.</li>
    <li><b style="color: #11998E;">Discouragement of Extremist &amp; Factional Parties:</b> Because winning requires polling more votes than all rivals combined in a local constituency, candidates cannot afford to alienate large chunks of the local population. They are compelled to build broad social coalitions across castes, religions, and classes, moderating aggressive political extremism.</li>
    <li><b style="color: #11998E;">Promoting Executive Stability:</b> FPTP typically produces clear working parliamentary majorities, shielding cabinets from the constant blackmail and factional horse-trading typical of unstable multi-party coalitions.</li>
  </ul>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(ii) The Impact of the PR System on Political Dynamics</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #11998E;">Every Vote Counts:</b> PR eliminates "wasted votes". Minor ideological, regional, and identity-based parties secure legislative presence matching their exact voting strength.</li>
    <li><b style="color: #11998E;">Political Fragmentation &amp; Coalition Instability:</b> Because any party reaching a minimal threshold (e.g. 2% or 3%) enters parliament, PR fosters party proliferation. Single-party majorities become virtually impossible, leading to perpetual, fragile coalition governments where tiny extremist parties can hold the entire national cabinet hostage (as observed in Israel or Italy).</li>
    <li><b style="color: #11998E;">Dismantling Direct Constituency Link:</b> Under party list PR, voters vote for an impersonal party symbol, severing the personal bond between a local community and its representative. Citizens have no specific local MP to approach for grievance redressal.</li>
  </ul>

  <!-- SECTION 3: WHY FPTP WAS CHOSEN IN INDIA -->
  <h2 style="color: #11998E; font-weight: bold; border-bottom: 2px solid #11998E; padding-bottom: 6px; margin-top: 34px;">3. Why was the First-Past-The-Post System Chosen in India?</h2>

  <p>The framers of the Indian Constitution, led by Dr. B.R. Ambedkar and Jawaharlal Nehru, engaged in intense deliberations regarding the optimal electoral system for free India. Despite being acutely aware of the statistical distortion in FPTP, they unanimously adopted it for Lok Sabha and Vidhan Sabha elections due to four overriding imperatives:</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(i) Utmost Simplicity for a Mass Electorate</h3>
  <p>At independence in 1947, over 80% of India's population was illiterate. The PR system requires complex mathematical computations, preferential rankings, and understanding party lists. In contrast, FPTP was extraordinarily simple: each voter simply had to recognize a candidate's or party's symbol and stamp their choice. The concept that <i>"whoever gets the most votes in our area wins"</i> was immediately intelligible to rural voters.</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(ii) Clear Local Accountability &amp; Direct Representative Bond</h3>
  <p>In a diverse country with local grievances regarding irrigation, roads, schools, and police harassment, citizens needed a designated, physically identifiable local representative (their local MP or MLA) to whom they could take their complaints. Under the PR party list system, politicians are accountable only to centralized party bosses who determine their position on the list.</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(iii) Ensuring Governmental Stability in a Fragmented Nation</h3>
  <p>Having just survived the cataclysmic bloodbath of Partition and confronting the daunting challenge of integrating 565 princely states, India desperately needed stable, decisive governments. The framers correctly feared that adopting PR would freeze communal, caste, and linguistic cleavages into permanent miniature parties, plunging the infant republic into chronic political paralysis.</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(iv) Encouraging National Integration and Broad Social Coalitions</h3>
  <p>Under FPTP, a party that appeals strictly to a single caste or a single religious sect cannot win general elections because no single identity group constitutes a decisive majority in most constituencies. Parties were forced to build broad, syncretic "rainbow coalitions", uniting diverse communities under common developmental umbrellas.</p>

  <!-- SECTION 4: RESERVED SEATS -->
  <h2 style="color: #11998E; font-weight: bold; border-bottom: 2px solid #11998E; padding-bottom: 6px; margin-top: 34px;">4. Why is There a System of Reserved Constituencies?</h2>

  <p>In a purely competitive FPTP system, historical social dominance matters enormously. The framers realized that in deeply hierarchical Indian society, the upper castes and wealthy landowners would monopolize elections, leaving historically oppressed groups &mdash; the <b style="color: #11998E;">Scheduled Castes (Dalits)</b> and <b style="color: #11998E;">Scheduled Tribes (Adivasis)</b> &mdash; completely unrepresented.</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(i) Rejection of Separate Electorates vs Adoption of Joint Electorates</h3>
  <p>Under British rule, colonial statutes had introduced <b style="color: #11998E;">Separate Electorates</b>, where only Muslims could vote for Muslim candidates, only Sikhs for Sikh candidates, and so forth. The Constituent Assembly decisively abolished separate electorates, recognizing that they institutionalized religious separatism and directly caused Partition.</p>
  <p>Instead, the Constitution instituted <b style="color: #11998E;">Joint Electorates with Reserved Seats</b> under Articles 330 (for Lok Sabha) and 332 (for State Assemblies):</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li>In a reserved constituency, <b style="color: #11998E;">all eligible voters</b> of that area (Hindus, Muslims, Sikhs, upper castes, lower castes) cast their votes together.</li>
    <li>However, <b style="color: #11998E;">only a candidate belonging to the Scheduled Caste or Scheduled Tribe</b> is legally eligible to contest. This ensures that elected representatives do not cater merely to their own caste, but must win the confidence of all communities in the constituency.</li>
    <li><b style="color: #11998E;">Current Distribution in Lok Sabha:</b> Out of 543 elected seats, exactly <b style="color: #11998E;">84 seats are reserved for Scheduled Castes</b> and <b style="color: #11998E;">47 seats are reserved for Scheduled Tribes</b>.</li>
    <li><b style="color: #11998E;">The Delimitation Commission:</b> An independent statutory body headed by a retired Supreme Court judge, working alongside the Election Commission, decides the geographical boundaries and selects which specific constituencies are reserved based on census demographic density.</li>
    <li><b style="color: #11998E;">Historic Milestone &mdash; Women's Reservation (2023):</b> The <b style="color: #11998E;">106th Constitutional Amendment Act (Nari Shakti Vandan Adhiniyam)</b> was passed in 2023, constitutionally reserving <b style="color: #11998E;">one-third (33%)</b> of all seats in the Lok Sabha and State Legislative Assemblies for women.</li>
  </ul>

  <!-- SECTION 5: FREE AND FAIR ELECTIONS & THE ELECTION COMMISSION -->
  <h2 style="color: #11998E; font-weight: bold; border-bottom: 2px solid #11998E; padding-bottom: 6px; margin-top: 34px;">5. Ensuring Free and Fair Elections: The Role &amp; Powers of the Election Commission</h2>

  <p>Conducting elections in the world's largest democracy &mdash; involving nearly 970 million registered voters, 1 million polling stations, and over 15 million election personnel &mdash; is an enterprise of staggering magnitude. To insulate this process from executive manipulation, the Constitution created an autonomous constitutional titan: the <b style="color: #11998E;">Election Commission of India (ECI)</b> under <b style="color: #11998E;">Article 324</b>.</p>

  <!-- ULTRA HD 3D DIAGRAM 2: WHITE BG SVG -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 260" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="400" height="240" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="210" y="30" font-family="Arial, sans-serif" font-size="12.5" font-weight="bold" fill="#0F172A" text-anchor="middle">CONSTITUTIONAL POWERS OF ELECTION COMMISSION (ART 324)</text>
        
        <!-- Central Emblem -->
        <rect x="135" y="48" width="150" height="32" rx="6" fill="#ECFDF5" stroke="#11998E" stroke-width="2"/>
        <text x="210" y="68" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#065F46" text-anchor="middle">ARTICLE 324: ECI</text>

        <!-- 3 Pillars of Powers -->
        <!-- Administrative -->
        <rect x="25" y="95" width="115" height="135" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="82" y="115" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">ADMINISTRATIVE</text>
        <line x1="35" y1="122" x2="130" y2="122" stroke="#BFDBFE" stroke-width="1"/>
        <text x="82" y="138" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Electoral rolls prep</text>
        <text x="82" y="153" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Polling schedule</text>
        <text x="82" y="168" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; EVM &amp; VVPAT control</text>
        <text x="82" y="183" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Repolls &amp; Cancel</text>
        <text x="82" y="215" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#2563EB" text-anchor="middle">Full Logistics Command</text>

        <!-- Advisory -->
        <rect x="152" y="95" width="115" height="135" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.5"/>
        <text x="210" y="115" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">ADVISORY</text>
        <line x1="162" y1="122" x2="257" y2="122" stroke="#FECACA" stroke-width="1"/>
        <text x="210" y="138" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Disqualification</text>
        <text x="210" y="153" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">of sitting MPs (103)</text>
        <text x="210" y="168" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Disqualification</text>
        <text x="210" y="183" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">of MLAs (192)</text>
        <text x="210" y="215" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#DC2626" text-anchor="middle">Binding to President</text>

        <!-- Quasi-Judicial -->
        <rect x="280" y="95" width="115" height="135" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="337" y="115" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#B45309" text-anchor="middle">QUASI-JUDICIAL</text>
        <line x1="290" y1="122" x2="385" y2="122" stroke="#FDE68A" stroke-width="1"/>
        <text x="337" y="138" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Party recognition</text>
        <text x="337" y="153" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Symbol disputes</text>
        <text x="337" y="168" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Model Code enforcement</text>
        <text x="337" y="183" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Disqualify for corrupt</text>
        <text x="337" y="215" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#D97706" text-anchor="middle">Court-Like Authority</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The comprehensive constitutional spectrum of administrative, advisory, and quasi-judicial authority under Article 324.
    </div>
  </div>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(i) Composition and Structure of the Commission</h3>
  <p>Article 324 provides for a Chief Election Commissioner (CEC) and such number of other Election Commissioners as the President may from time to time fix. While initially a single-member body, it became a <b style="color: #11998E;">multi-member commission</b> in October 1993 consisting of the CEC and two Election Commissioners. All three enjoy equal power, receive the same salary and perks equivalent to a Supreme Court judge, and take decisions through consensus or majority vote.</p>

  <h3 style="color: #11998E; font-weight: bold; margin-top: 22px;">(ii) Constitutional Safeguards for Judicial Independence</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #11998E;">Security of Tenure:</b> The CEC cannot be removed at the whim of the executive or ruling political party. The CEC can only be removed from office through the rigorous impeachment procedure prescribed for a Judge of the Supreme Court &mdash; requiring a special majority in both Houses of Parliament on proven misbehavior or incapacity.</li>
    <li><b style="color: #11998E;">Protection of Service Conditions:</b> The conditions of service and tenure (6 years or until age 65, whichever is earlier) cannot be varied to their disadvantage after appointment.</li>
    <li><b style="color: #11998E;">Disciplinary Control Over Bureaucracy:</b> During election season, all central and state government employees, civil servants, and police forces assigned to election duty are placed under the direct disciplinary command and superintendence of the Election Commission, which can transfer or suspend officials who demonstrate partisan bias.</li>
  </ul>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10B981; border-radius: 6px; padding: 14px 16px; margin: 20px 0;">
    <b style="color: #10B981; font-size: 15px;">💡 High-Scoring Board Exam Tip (Evaluation Standard):</b>
    <p style="color: #CBD5E1; font-size: 14.5px; margin: 4px 0 0 0;">When explaining why India adopted the FPTP system, examiners reward structured four-dimensional answers: (1) <b>Administrative &amp; Cognitive Simplicity</b> for a newly enfranchised rural electorate, (2) <b>Direct Local Accountability</b> linking one MP/MLA to one local constituency, (3) <b>Executive Cabinet Stability</b> avoiding fragile fractional coalitions, and (4) <b>Social Integration</b> compelling political parties to build broad, cross-caste, syncretic coalitions rather than narrow sectarian vote banks.</p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 2: SOLUTIONS (Q & A)                           */
/* -------------------------------------------------------------------------- */

export const c11Pol3HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(17, 153, 142, 0.06); border: 1.5px solid #11998E; border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; text-align: center;">
    <h2 style="color: #11998E; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">Board Examination Master Q &amp; A Bank</h2>
    <p style="color: #80CBC4; margin: 0; font-size: 14px;">Class 11 Political Science &bull; Chapter 3: System of Representational Democracy (Official Board Weightage: 6 Marks)</p>
  </div>

  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS) -->
  <h2 style="color: #11998E; font-weight: bold; border-bottom: 2px solid #11998E; padding-bottom: 6px; margin-top: 25px;">SECTION A: Very Short Answer Questions (VSAT - 1 &amp; 2 Marks)</h2>

  <!-- Q1 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q1: What is meant by 'Representative Democracy'?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> Representative democracy is a form of government where sovereign citizens elect delegates (representatives) through periodic, free, and fair elections to make laws and govern public affairs on their behalf.</p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q2: What is the First-Past-The-Post (FPTP) electoral system?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The FPTP system is an electoral mechanism where each single-member constituency elects that candidate who secures the highest number of votes (a simple plurality), regardless of whether they poll an absolute majority (50% + 1).</p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q3: Name the electoral system used for electing members of the Lok Sabha and State Legislative Assemblies.</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The <b style="color: #11998E;">First-Past-The-Post (FPTP) system</b> is used for electing members to both the Lok Sabha and State Legislative Assemblies (Vidhan Sabhas).</p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q4: For which prominent constitutional elections in India is the Proportional Representation by Single Transferable Vote (PR-STV) system utilized?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The PR-STV system is utilized in India for electing the <b style="color: #11998E;">President</b>, the <b style="color: #11998E;">Vice-President</b>, and the members of the <b style="color: #11998E;">Rajya Sabha</b> and State Legislative Councils.</p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q5: Which Constitutional Article provides for an independent Election Commission of India?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> <b style="color: #11998E;">Article 324</b> vests the superintendence, direction, and control of elections in an independent Election Commission of India.</p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q6: How many seats in the Lok Sabha are currently reserved for Scheduled Castes (SC) and Scheduled Tribes (ST)?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> Out of 543 elected seats in the Lok Sabha, <b style="color: #11998E;">84 seats</b> are reserved for Scheduled Castes and <b style="color: #11998E;">47 seats</b> are reserved for Scheduled Tribes.</p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q7: Which Constitutional Amendment reduced the voting age from 21 to 18 years, and in which year?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The <b style="color: #11998E;">61st Constitutional Amendment Act, 1988</b> (enforced in 1989) amended Article 326 to reduce the voting age from 21 to 18 years.</p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q8: What is the Delimitation Commission, and what is its primary constitutional function?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The Delimitation Commission is a high-powered independent body appointed by the President to fix the territorial boundaries of electoral constituencies across the country based on the latest decennial census data.</p>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q9: What is the Model Code of Conduct (MCC)?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The Model Code of Conduct is a set of ethical and operational rules framed through political consensus and enforced by the Election Commission to regulate political campaigns, prevent corrupt practices, and ensure a level playing field.</p>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q10: What is the tenure and retirement age of the Chief Election Commissioner of India?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The Chief Election Commissioner holds office for a term of <b style="color: #11998E;">six years or until the age of 65 years</b>, whichever is earlier.</p>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q11: Which Constitutional Amendment Act provided 33% reservation for women in Lok Sabha and State Legislative Assemblies?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The <b style="color: #11998E;">106th Constitutional Amendment Act, 2023</b> (popularly known as the <i>Nari Shakti Vandan Adhiniyam</i>) provides 33% reservation for women in the Lok Sabha and State Assemblies.</p>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q12: How can the Chief Election Commissioner be removed from office?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Answer:</b> The CEC can only be removed from office in the same manner and on the same grounds as a Judge of the Supreme Court &mdash; by the President following an address supported by a special majority in both Houses of Parliament.</p>
  </div>

  <!-- SECTION B: SHORT ANSWER QUESTIONS (4 MARKS) -->
  <h2 style="color: #11998E; font-weight: bold; border-bottom: 2px solid #11998E; padding-bottom: 6px; margin-top: 34px;">SECTION B: Short Answer Questions (SAT - 4 Marks)</h2>

  <!-- Q13 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q13: Differentiate between the First-Past-The-Post (FPTP) system and the Proportional Representation (PR) system.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Answer:</b> FPTP and PR systems differ fundamentally across four major parameters:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #11998E;">1. Constituency Division:</b> In FPTP, the country is divided into small single-member geographical units; in PR, large multi-member constituencies or the entire country as one unit is formed.</li>
      <li><b style="color: #11998E;">2. Voter Choice:</b> In FPTP, electors vote directly for an individual candidate; in PR, electors generally vote for a political party list or rank multiple candidates.</li>
      <li><b style="color: #11998E;">3. Determination of Victory:</b> In FPTP, the candidate with the highest votes (plurality) wins even without 50% votes; in PR, a party receives seats strictly proportional to its share of popular votes.</li>
      <li><b style="color: #11998E;">4. Governance Stability:</b> FPTP usually produces stable, single-party executive majorities; PR often results in multi-party fragmented parliaments and fragile coalitions.</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q14: Explain the reasons why the framers of the Indian Constitution chose the FPTP system for Lok Sabha elections.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Answer:</b> The framers chose the FPTP system for four vital reasons:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #11998E;">1. Cognitive Simplicity:</b> In an infant democracy with over 80% illiteracy in 1950, FPTP was easily understood; voters simply stamped their favorite candidate's symbol.</li>
      <li><b style="color: #11998E;">2. Clear Local Accountability:</b> Each geographical area has one designated representative (MP/MLA) directly responsible to that local population for developmental grievances.</li>
      <li><b style="color: #11998E;">3. Cabinet Stability:</b> Post-partition India needed decisive, stable governments to maintain order and drive economic planning, which FPTP reliably delivered by manufacturing clear working majorities.</li>
      <li><b style="color: #11998E;">4. Fostering Social Cohesion:</b> Under FPTP, candidates must appeal to multiple castes and communities to build a winning coalition, discouraging divisive sectarian identity politics.</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q15: What has been the effect of the FPTP system on the Indian party system and general election outcomes?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Answer:</b> The FPTP system has produced profound political effects in India:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #11998E;">1. Disproportionate Seat Allocation:</b> Parties with a widespread 35%–45% vote share frequently win huge parliamentary majorities (e.g. Congress winning over 70% seats in the 1950s with ~45% vote share; BJP winning 303 seats in 2019 with ~37% vote share).</li>
      <li><b style="color: #11998E;">2. Elimination of Dispersed Minor Parties:</b> Parties whose votes are scattered evenly across the country without geographical concentration fail to secure seats despite millions of votes.</li>
      <li><b style="color: #11998E;">3. Rise of Strategic Coalitions:</b> Realizing that divided opposition votes benefit the frontrunner, regional parties have forged formidable pre-poll alliances (NDA, UPA, INDIA bloc) to consolidate anti-incumbency votes.</li>
      <li><b style="color: #11998E;">4. Anti-Incumbency Mechanism:</b> Because the winning threshold is a simple plurality, modest vote swings of 3–5% can trigger massive seat turnovers, making governments sensitive to public discontent.</li>
    </ul>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q16: Why was the colonial system of separate electorates rejected in independent India, and how does the reserved constituency system differ from it?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Answer:</b> The Constituent Assembly deliberately replaced separate electorates with reserved constituencies:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #11998E;">1. Rejection of Separate Electorates:</b> Under British rule, separate electorates allowed only voters of a specific religion/caste to vote for candidates of their own community. The framers recognized that this divide-and-rule mechanism institutionalized communal hostility and directly resulted in the partition of India.</li>
      <li><b style="color: #11998E;">2. Adoption of Joint Electorates:</b> In a reserved constituency under the Indian Constitution, all registered citizens &mdash; irrespective of religion, caste, or gender &mdash; vote together.</li>
      <li><b style="color: #11998E;">3. Restriction on Candidature:</b> Only the candidate contesting the seat must belong to a Scheduled Caste or Scheduled Tribe.</li>
      <li><b style="color: #11998E;">4. Democratic Outcome:</b> Because SC/ST candidates must seek votes from all community members, they are incentivized to represent the entire population rather than narrow caste interests, promoting national integration.</li>
    </ul>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q17: Explain the constitutional safeguards that guarantee the independence and impartiality of the Election Commission of India.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Answer:</b> The Constitution insulates the Election Commission of India through four major safeguards:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #11998E;">1. Security of Tenure:</b> Under Article 324, the Chief Election Commissioner cannot be dismissed by the government. The CEC can only be removed through parliamentary impeachment prescribed for Supreme Court judges.</li>
      <li><b style="color: #11998E;">2. Protection of Other Commissioners:</b> Election Commissioners cannot be removed from office except on the formal recommendation of the Chief Election Commissioner.</li>
      <li><b style="color: #11998E;">3. Inalterable Service Conditions:</b> The service conditions and salary of the CEC cannot be varied to their disadvantage after appointment.</li>
      <li><b style="color: #11998E;">4. Autonomous Operational Command:</b> The ECI has full disciplinary control over all civil servants, teachers, and police deployed on election duty, immune from executive ministry interference.</li>
    </ul>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q18: What are the key powers and administrative functions exercised by the Election Commission of India?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Answer:</b> The Election Commission exercises extensive administrative authority:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #11998E;">1. Revision of Electoral Rolls:</b> Prepares and updates voter lists before elections to eliminate duplicate or deceased voters and enroll newly eligible 18-year-old citizens.</li>
      <li><b style="color: #11998E;">2. Notification of Election Schedules:</b> Determines election phases, dates for filing nominations, scrutiny, withdrawal, and counting.</li>
      <li><b style="color: #11998E;">3. Recognition and Allotment of Symbols:</b> Recognizes National and State political parties and resolves disputes regarding party names and official election symbols.</li>
      <li><b style="color: #11998E;">4. Repolling and Cancellation Powers:</b> Has unchallengeable constitutional authority to cancel elections, order repolls, or withhold counting if booths are captured or violence compromises election integrity.</li>
    </ul>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q19: Explain the mechanism of the Single Transferable Vote (STV) system as practiced in Rajya Sabha elections.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Answer:</b> In Rajya Sabha elections, elected State MLAs choose members through the PR-STV system:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #11998E;">1. Preferential Ballot:</b> MLAs do not vote for just one person; they indicate their order of preference (1st, 2nd, 3rd) against candidate names.</li>
      <li><b style="color: #11998E;">2. Electoral Quota:</b> A candidate must secure a mathematical threshold of votes to be declared elected:
        <br><i>Quota = [Total Votes Polled / (Seats to be Filled + 1)] + 1</i></li>
      <li><b style="color: #11998E;">3. Counting First Preferences:</b> Any candidate whose 1st-preference votes meet or exceed the quota is immediately declared elected.</li>
      <li><b style="color: #11998E;">4. Transfer of Surplus &amp; Elimination:</b> Surplus votes of elected candidates are transferred to next preferences. If seats remain unfilled, candidates with the lowest votes are eliminated, transferring their votes until all seats are filled.</li>
    </ul>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q20: What are the constitutional provisions that guarantee Universal Adult Franchise and free participation in elections?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Answer:</b> The Indian Constitution provides four vital guarantees for universal political participation:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #11998E;">1. Universal Adult Suffrage (Article 326):</b> Every citizen aged 18 years and above has the right to vote without disqualification on grounds of property, educational qualifications, tax payment, or gender.</li>
      <li><b style="color: #11998E;">2. Single General Electoral Roll (Article 325):</b> For every constituency, there is only one electoral roll; no citizen can be excluded or put in a separate roll on grounds of religion, race, caste, or sex.</li>
      <li><b style="color: #11998E;">3. Secret Ballot Guarantee:</b> Under the Representation of the People Act 1951, voting secrecy is absolute; no voter can be coerced into revealing their choice.</li>
      <li><b style="color: #11998E;">4. Judicial Dispute Resolution (Article 329):</b> Election disputes and petitions can be challenged before High Courts and the Supreme Court through election petitions.</li>
    </ul>
  </div>

  <!-- SECTION C: LONG ANSWER QUESTIONS (6 MARKS) -->
  <h2 style="color: #11998E; font-weight: bold; border-bottom: 2px solid #11998E; padding-bottom: 6px; margin-top: 34px;">SECTION C: Long Answer Questions (LAT - 6 Marks)</h2>

  <!-- Q21 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q21: Compare and contrast the First-Past-The-Post (FPTP) system with the Proportional Representation (PR) system. Why did India adopt FPTP for parliamentary elections?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Introduction:</b> Converting popular voter preferences into legislative representation is the central function of an electoral system. Modern constitutional states rely primarily on two competing paradigms: the First-Past-The-Post (FPTP) plurality model and the Proportional Representation (PR) model:</p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0 0 8px 0;">
      <li><b style="color: #11998E;">1. Comparative Constituency Design:</b> In FPTP, the national territory is divided into small, geographically contiguous, single-member constituencies electing one representative. Under PR, the entire country is treated as one mega-constituency or divided into multi-member districts electing several candidates.</li>
      <li><b style="color: #11998E;">2. Voter Choice and Balloting:</b> In FPTP, the voter votes directly for a specific named candidate; in PR, the ballot is cast for a political party list or through numbered preferences for candidates across multiple parties.</li>
      <li><b style="color: #11998E;">3. Translating Votes to Seats:</b> FPTP allows a candidate with a simple plurality (more votes than the runner-up) to win, causing huge deviations between popular vote share and seat share. PR ensures mathematical parity: a party polling 35% of the national vote receives exactly 35% of the seats.</li>
      <li><b style="color: #11998E;">4. Rationale for India's Choice of FPTP:</b> The Constituent Assembly deliberately preferred FPTP for Lok Sabha elections due to:
        <br>&bull; <i>Simplicity:</i> Readily accessible to an electorate with low literacy levels in 1950.
        <br>&bull; <i>Local Accountability:</i> Ensuring every geographic constituency has a single identifiable MP/MLA for grievance redressal.
        <br>&bull; <i>Executive Stability:</i> Producing stable single-party or clear coalition majorities needed to navigate national developmental crises.
        <br>&bull; <i>Social Moderation:</i> Forcing political parties to build broad, cross-caste, multi-religious coalitions rather than catering strictly to narrow sectarian vote banks.
      </li>
    </ul>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Conclusion:</b> While PR excels in mathematical fairness, FPTP was the superior institutional choice for India because it reconciled democratic responsiveness with governmental stability and national emotional integration.</p>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q22: Examine the constitutional role, powers, and practical functioning of the Election Commission of India under Article 324 in safeguarding democratic integrity.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Introduction:</b> Article 324 establishes the Election Commission of India (ECI) as a permanent, autonomous constitutional body entrusted with the "superintendence, direction, and control" of parliamentary, assembly, presidential, and vice-presidential elections:</p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0 0 8px 0;">
      <li><b style="color: #11998E;">1. Administrative Powers:</b> The Commission determines election dates, prepares and revises computerized electoral rolls, designates polling stations, manages the deployment of Electronic Voting Machines (EVMs) and VVPAT units, and oversees millions of election polling personnel.</li>
      <li><b style="color: #11998E;">2. Enforcement of the Model Code of Conduct (MCC):</b> Upon the announcement of elections, the ECI enforces the MCC, curbing hate speech, banning the announcement of populist government schemes designed to bribe voters, and preventing ruling ministers from using state aircraft, official cars, and government bungalows for campaigning.</li>
      <li><b style="color: #11998E;">3. Quasi-Judicial and Disciplinary Powers:</b> The ECI functions as a court in settling disputes over party splits, recognizing national and state parties, and allotting election symbols. Furthermore, it possesses constitutional power to cancel elections, postpone polling, or order repolls in constituencies affected by booth capturing or corrupt practices.</li>
      <li><b style="color: #11998E;">4. Advisory Jurisdiction:</b> Under Articles 103 and 192, the President of India and State Governors are constitutionally bound to seek the opinion of the ECI regarding the post-election disqualification of sitting MPs and MLAs (e.g. holding offices of profit).</li>
    </ul>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Conclusion:</b> Through relentless institutional vigilance, non-partisan neutrality, and technological innovations (EVMs/VVPAT), the ECI has preserved India's status as a beacon of credible democratic elections in the Global South.</p>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q23: Discuss the necessity and constitutional mechanics of Reserved Constituencies in India. How has affirmative action in legislative representation evolved over time?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Introduction:</b> In a purely open FPTP election, historical caste dominance and socio-economic inequality would effectively prevent marginalized communities from winning legislative seats. To ensure meaningful democratic inclusion, the Constitution established affirmative action in legislative representation:</p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0 0 8px 0;">
      <li><b style="color: #11998E;">1. Rejection of Communal Electorates:</b> The framers decisively discarded the British colonial policy of separate electorates that had balkanized India. Instead, they adopted joint electorates with reserved seats under Articles 330 (Lok Sabha) and 332 (Vidhan Sabhas).</li>
      <li><b style="color: #11998E;">2. Operational Mechanics:</b> In a reserved constituency, only candidates belonging to the designated Scheduled Caste or Scheduled Tribe can contest. However, all registered citizens &mdash; regardless of caste or religion &mdash; cast their ballots together, compelling reserved candidates to address the developmental needs of the entire general constituency.</li>
      <li><b style="color: #11998E;">3. Role of the Delimitation Commission:</b> The Commission determines which specific seats are reserved. For Scheduled Tribes, constituencies with the highest concentration of tribal populations are reserved. For Scheduled Castes, reserved seats are rotated across different districts where SC populations are substantial to prevent permanent regional stagnation.</li>
      <li><b style="color: #11998E;">4. The Expansion to Women (106th Amendment, 2023):</b> While 33% reservation for women was introduced at the local Panchayati Raj level under the 73rd and 74th Amendments in 1992, the 106th Constitutional Amendment Act (Nari Shakti Vandan Adhiniyam) extended 33% reservation for women to the Lok Sabha and State Assemblies, representing a landmark evolution in inclusive gender representation.</li>
    </ul>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Conclusion:</b> Legislative reservations have transformed the Indian Parliament and State Assemblies from elite enclaves into inclusive mirrors of India's pluralistic demographic reality.</p>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q24: "Electoral systems in India have experienced significant challenges including money power, criminalization, and caste politics." Suggest comprehensive electoral reforms to address these issues.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Introduction:</b> Despite over seven decades of successful democratic transfers of power, Indian electoral politics grapples with deep-seated systemic distortions that threaten democratic sanctity:</p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0 0 8px 0;">
      <li><b style="color: #11998E;">1. Core Challenges Confronting Indian Elections:</b>
        <br>&bull; <i>Money Power &amp; Illicit Spending:</i> Skyrocketing election expenditures, corrupt cash distribution, and opaque political funding.
        <br>&bull; <i>Criminalization of Politics:</i> Political parties fielding candidates with serious pending criminal charges (murder, extortion, rape) due to their local 'winnability'.
        <br>&bull; <i>Casteist &amp; Communal Mobilization:</i> Polarizing election rhetoric appealing to sectarian religious and caste prejudices.
        <br>&bull; <i>Misuse of State Machinery:</i> Ruling parties exploiting state advertising, bureaucratic transfers, and government infrastructure.
      </li>
      <li><b style="color: #11998E;">2. Structural Electoral Reforms Recommended by Expert Committees (Tarkunde, Goswami, Indrajit Gupta):</b>
        <br>&bull; <i>De-criminalization of Candidature:</i> Barring individuals against whom courts have framed charges for heinous crimes from contesting elections.
        <br>&bull; <i>State Funding of Elections:</i> Providing state-funded financial assistance or campaign facilities (free airtime, fuel, printing) to recognized political parties to break the nexus between corporate black money and politicians.
        <br>&bull; <i>Statutory Backing for Model Code of Conduct:</i> Giving the MCC legal force with dedicated fast-track courts to penalize violations swiftly.
        <br>&bull; <i>Hybrid Electoral Model:</i> Introducing a combination of FPTP and PR (such as the German mixed-member model) to ensure fair representation to vote shares while retaining local MP accountability.
      </li>
    </ul>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Conclusion:</b> Implementing rigorous campaign finance transparency, institutional autonomy, and inner-party democracy is essential to preserve the vitality of Indian representational democracy.</p>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #11998E; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #11998E; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q25: Analyze how the introduction of Universal Adult Franchise without literacy or property qualifications in 1950 was an act of radical democratic faith.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #11998E;">Introduction:</b> When the Constituent Assembly enacted Article 326 granting Universal Adult Franchise to all Indian citizens, Western observers and conservative critics described it as "the biggest gamble in history" and "a dangerous leap in the dark":</p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0 0 8px 0;">
      <li><b style="color: #11998E;">1. Contrast with Western Democracies:</b> In established Western democracies (such as the UK, USA, and Switzerland), the right to vote was granted incrementally over centuries &mdash; first to wealthy property-owning men, then to educated men, and only after protracted struggles, to working-class men and women (e.g. Swiss women gained federal voting rights only in 1971).</li>
      <li><b style="color: #11998E;">2. Radical Democratic Leap in India:</b> In 1950, independent India enfranchised every adult man and woman simultaneously in a single constitutional stroke, despite prevailing mass poverty, 84% illiteracy, and deeply entrenched feudal and caste hierarchies.</li>
      <li><b style="color: #11998E;">3. Dr. Ambedkar's Democratic Philosophy:</b> The framers firmly believed that the wisdom to choose a government does not depend on formal educational degrees or wealth. The poor, illiterate peasant understands their daily struggles (bread, water, justice) as acutely as an educated urban elite.</li>
      <li><b style="color: #11998E;">4. Transformative Political Empowerment:</b> Over seven decades, the ballot paper and EVM have functioned as the greatest equalizer in Indian society. The marginalized have exercised their franchise with higher voter turnout than the urban elite, repeatedly punishing arrogant regimes and transforming the social composition of political power.</li>
    </ul>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #11998E;">Conclusion:</b> Universal Adult Franchise was not merely an electoral mechanism, but a profound social revolution that transformed millions of colonial subjects into sovereign democratic citizens.</p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: INTERACTIVE MCQS                            */
/* -------------------------------------------------------------------------- */

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const c11Pol3Mcqs: MCQ[] = [
  // Tier 1: Direct Recall (Easy)
  {
    id: "c11-pol-3-mcq-1",
    question: "Which electoral system is used in India for electing members to the Lok Sabha and State Legislative Assemblies?",
    options: [
      "A):   Proportional Representation by Party List",
      "B):   First-Past-The-Post (FPTP) System",
      "C):   Single Transferable Vote System",
      "D):   Alternative Vote System",
    ],
    correctAnswer: "b",
    explanation: "India utilizes the First-Past-The-Post (FPTP) / plurality system for general elections to the Lok Sabha and State Legislative Assemblies (Vidhan Sabhas).",
  },
  {
    id: "c11-pol-3-mcq-2",
    question: "Which Article of the Indian Constitution establishes the Election Commission of India as an autonomous constitutional body?",
    options: [
      "A):   Article 280",
      "B):   Article 324",
      "C):   Article 352",
      "D):   Article 368",
    ],
    correctAnswer: "b",
    explanation: "Article 324 vests the superintendence, direction, and control of all parliamentary, assembly, presidential, and vice-presidential elections in the Election Commission.",
  },
  {
    id: "c11-pol-3-mcq-3",
    question: "Which Constitutional Amendment lowered the voting age in India from 21 years to 18 years?",
    options: [
      "A):   42nd Amendment Act (1976)",
      "B):   44th Amendment Act (1978)",
      "C):   61st Amendment Act (1988)",
      "D):   73rd Amendment Act (1992)",
    ],
    correctAnswer: "c",
    explanation: "The 61st Constitutional Amendment Act of 1988 (implemented in 1989) amended Article 326 to reduce the minimum voting age from 21 to 18 years.",
  },
  {
    id: "c11-pol-3-mcq-4",
    question: "How many seats are currently reserved for Scheduled Castes (SC) in the Lok Sabha?",
    options: [
      "A):   47 seats",
      "B):   84 seats",
      "C):   100 seats",
      "D):   65 seats",
    ],
    correctAnswer: "b",
    explanation: "Out of 543 elected Lok Sabha constituencies, exactly 84 seats are reserved for Scheduled Castes (SC) and 47 seats are reserved for Scheduled Tribes (ST).",
  },
  {
    id: "c11-pol-3-mcq-5",
    question: "Which independent commission is entrusted with drawing and fixing the territorial boundaries of electoral constituencies across India?",
    options: [
      "A):   Planning Commission",
      "B):   Delimitation Commission",
      "C):   Finance Commission",
      "D):   Law Commission",
    ],
    correctAnswer: "b",
    explanation: "The Delimitation Commission, appointed under an Act of Parliament and headed by a retired Supreme Court judge, fixes and redraws constituency boundaries based on decennial census data.",
  },
  {
    id: "c11-pol-3-mcq-6",
    question: "Which electoral system is utilized in India for electing the President, Vice-President, and members of the Rajya Sabha?",
    options: [
      "A):   First-Past-The-Post System",
      "B):   Proportional Representation by Single Transferable Vote (PR-STV)",
      "C):   Direct Universal Adult Suffrage",
      "D):   Party List System",
    ],
    correctAnswer: "b",
    explanation: "The Proportional Representation by Single Transferable Vote (PR-STV) system is used for electing the President, Vice-President, and Rajya Sabha members.",
  },
  {
    id: "c11-pol-3-mcq-7",
    question: "Who heads the multi-member Election Commission of India?",
    options: [
      "A):   Chief Justice of India",
      "B):   Chief Election Commissioner (CEC)",
      "C):   Union Law Minister",
      "D):   Cabinet Secretary",
    ],
    correctAnswer: "b",
    explanation: "The Election Commission of India is headed by the Chief Election Commissioner (CEC), assisted by two Election Commissioners.",
  },
  {
    id: "c11-pol-3-mcq-8",
    question: "The 106th Constitutional Amendment Act (2023) provides what percentage of reservation for women in the Lok Sabha and State Legislative Assemblies?",
    options: [
      "A):   25%",
      "B):   33% (One-third)",
      "C):   50%",
      "D):   20%",
    ],
    correctAnswer: "b",
    explanation: "The 106th Amendment Act, known as the Nari Shakti Vandan Adhiniyam, provides 33% (one-third) reservation for women in Lok Sabha and State Assemblies.",
  },

  // Tier 2: Conceptual & Comparative (Moderate)
  {
    id: "c11-pol-3-mcq-9",
    question: "In a First-Past-The-Post (FPTP) election with four candidates polling 32%, 28%, 22%, and 18% of the total votes respectively, who is declared the winner?",
    options: [
      "A):   Nobody, because no candidate crossed the 50% absolute majority mark",
      "B):   The candidate who secured 32% of the votes",
      "C):   A re-election must be conducted between the top two candidates",
      "D):   The candidate who secured 28% of the votes",
    ],
    correctAnswer: "b",
    explanation: "Under the FPTP system, the candidate polling the highest number of votes (simple plurality) wins the constituency, even without securing an absolute majority (50% + 1).",
  },
  {
    id: "c11-pol-3-mcq-10",
    question: "What is the crucial difference between 'Separate Electorates' and 'Reserved Constituencies'?",
    options: [
      "A):   In separate electorates, only community members vote; in reserved constituencies, all citizens vote together for a candidate from the reserved community",
      "B):   Separate electorates are used for Lok Sabha, while reserved constituencies are used for Rajya Sabha",
      "C):   Reserved constituencies allow only upper caste candidates to contest",
      "D):   There is no legal or constitutional difference between the two",
    ],
    correctAnswer: "a",
    explanation: "In separate electorates (used under British colonial rule), only voters of a specific community vote for candidates of that faith. In reserved constituencies (joint electorate), all voters vote together, but only candidates belonging to SC/ST can contest.",
  },
  {
    id: "c11-pol-3-mcq-11",
    question: "Why did the Constituent Assembly prefer the FPTP system over Proportional Representation for Lok Sabha elections in India?",
    options: [
      "A):   Because FPTP was too complicated for British rulers to understand",
      "B):   Because FPTP offered simplicity, clear local representative accountability, and executive stability in a newly independent nation",
      "C):   Because the United Nations mandated the use of FPTP",
      "D):   Because Proportional Representation is illegal under international law",
    ],
    correctAnswer: "b",
    explanation: "The framers chose FPTP because it was simple for a newly enfranchised rural electorate, created a direct link between voters and their local MP/MLA, and produced stable governments.",
  },
  {
    id: "c11-pol-3-mcq-12",
    question: "What is the primary function of the Model Code of Conduct (MCC) enforced during general elections?",
    options: [
      "A):   To fix the price of food grains during elections",
      "B):   To maintain a level playing field, prevent hate speech, and prohibit ruling parties from misusing government machinery",
      "C):   To determine which citizens are eligible to run for Prime Minister",
      "D):   To force all citizens to vote for the ruling party",
    ],
    correctAnswer: "b",
    explanation: "The Model Code of Conduct ensures that elections are conducted fairly by preventing ruling parties from misusing official resources and prohibiting communal or corrupt campaign tactics.",
  },
  {
    id: "c11-pol-3-mcq-13",
    question: "The formula used to determine the quota of votes required for victory in the Rajya Sabha Single Transferable Vote election is known as:",
    options: [
      "A):   Hare Quota",
      "B):   Droop Quota",
      "C):   D'Hondt Method",
      "D):   Sainte-Laguë Method",
    ],
    correctAnswer: "b",
    explanation: "The quota formula: [Total Votes Polled / (Number of Seats to be filled + 1)] + 1, is known as the Droop Quota, ensuring mathematical certainty in candidate election.",
  },
  {
    id: "c11-pol-3-mcq-14",
    question: "Which Article of the Constitution guarantees that there shall be only ONE general electoral roll for every constituency and prohibits exclusion on grounds of religion, race, caste, or sex?",
    options: [
      "A):   Article 324",
      "B):   Article 325",
      "C):   Article 326",
      "D):   Article 328",
    ],
    correctAnswer: "b",
    explanation: "Article 325 mandates a single common electoral roll for every parliamentary and assembly constituency, prohibiting separate rolls based on religion, race, caste, or sex.",
  },
  {
    id: "c11-pol-3-mcq-15",
    question: "What happens to the surplus votes of a candidate who secures more than the required quota in a Single Transferable Vote (STV) election?",
    options: [
      "A):   The surplus votes are permanently discarded",
      "B):   The surplus votes are transferred to remaining candidates based on second preferences",
      "C):   The candidate is allowed to select another MP directly",
      "D):   The election is cancelled",
    ],
    correctAnswer: "b",
    explanation: "Under STV, surplus votes beyond the required quota are transferred to other contesting candidates in accordance with the subsequent preferences marked on the ballot papers.",
  },

  // Tier 3: Analytical & Multi-Statement (Advance)
  {
    id: "c11-pol-3-mcq-16",
    question: "Consider the following statements regarding the Election Commission of India (ECI):\n1. The CEC and the two Election Commissioners have equal decision-making powers.\n2. In case of difference of opinion, the matter is decided by majority vote.\n3. The Election Commissioners can be removed by the President at any time without any consultation.\nWhich of the statements given above are CORRECT?",
    options: [
      "A):   1 and 2 only",
      "B):   2 and 3 only",
      "C):   1 and 3 only",
      "D):   1, 2, and 3",
    ],
    correctAnswer: "a",
    explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect because an Election Commissioner can only be removed on the recommendation of the Chief Election Commissioner.",
  },
  {
    id: "c11-pol-3-mcq-17",
    question: "Which of the following is a recognized structural limitation or drawback of the First-Past-The-Post (FPTP) system?",
    options: [
      "A):   It always leads to fragmented coalition governments and endless re-elections",
      "B):   A political party can win a massive majority of parliamentary seats even with a minority of popular votes",
      "C):   Voters find it impossible to identify their local constituency representative",
      "D):   It completely bans the participation of independent candidates",
    ],
    correctAnswer: "b",
    explanation: "The major criticism of FPTP is the vote-seat distortion: a party winning 35–45% of popular votes often wins 60–70% of seats, leaving large segments of voters feeling unrepresented.",
  },
  {
    id: "c11-pol-3-mcq-18",
    question: "Assertion (A): The adoption of Universal Adult Franchise in India in 1950 was described by contemporary Western observers as a radical democratic experiment.\nReason (R): Most Western democracies had granted voting rights gradually over centuries, whereas India enfranchised its entire adult population simultaneously despite widespread poverty and illiteracy.",
    options: [
      "A):   Both A and R are true, and R is the correct explanation of A",
      "B):   Both A and R are true, but R is NOT the correct explanation of A",
      "C):   A is true, but R is false",
      "D):   A is false, but R is true",
    ],
    correctAnswer: "a",
    explanation: "Both statements are true. India bypassed property and literacy tests, granting universal voting rights in 1950, whereas Western nations took centuries to grant full suffrage to women and working classes.",
  },
  {
    id: "c11-pol-3-mcq-19",
    question: "Match List-I (Electoral System Feature) with List-II (Characteristics / Examples):\n(p) FPTP &mdash; (1) Israel and Netherlands list voting\n(q) PR-STV &mdash; (2) Single-member constituency with simple plurality\n(r) Reserved Constituency &mdash; (3) Rajya Sabha and Presidential election\n(s) Nationwide Party List &mdash; (4) Joint electorate with SC/ST candidatures\nChoose the correct code:",
    options: [
      "A):   p-2, q-3, r-4, s-1",
      "B):   p-1, q-2, r-3, s-4",
      "C):   p-2, q-4, r-3, s-1",
      "D):   p-3, q-2, r-4, s-1",
    ],
    correctAnswer: "a",
    explanation: "FPTP corresponds to single-member plurality (2), PR-STV is used in Rajya Sabha (3), Reserved Constituency uses joint electorate with SC/ST candidatures (4), and Nationwide Party List is used in Israel/Netherlands (1).",
  },
  {
    id: "c11-pol-3-mcq-20",
    question: "Which of the following bodies advises the President or Governor on the disqualification of sitting legislators on grounds other than the Tenth Schedule (Anti-Defection Law)?",
    options: [
      "A):   Supreme Court of India",
      "B):   Union Cabinet",
      "C):   Election Commission of India",
      "D):   Comptroller and Auditor General",
    ],
    correctAnswer: "c",
    explanation: "Under Articles 103 (for MPs) and 192 (for MLAs), the President or Governor must obtain the opinion of the Election Commission of India and act according to that opinion.",
  },
];
