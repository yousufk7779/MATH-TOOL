// Class 11 Political Science Chapter 5: Legislature at the Central and State Level (Marks: 04)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #FF8A65 (Coral Flame / Deep Orange)

const themeColor = "#FF8A65";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol5HtmlOverview = `
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
  <div style="background: rgba(255, 138, 101, 0.06); border: 1.5px solid #FF8A65; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF8A65; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Legislative Definitions</h2>
    <p class="text-center" style="color: #FFCCBC; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 5: Legislature at the Central and State Level (4 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF8A65; border-radius: 6px;">
        <b style="color: #FF8A65; font-size: 16px; display: block; margin-bottom: 4px;">1. Bicameralism:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A legislative structure consisting of two distinct houses &mdash; in India, the Lok Sabha (House of the People) and the Rajya Sabha (Council of States) at the Centre, designed to balance popular democratic representation with federal state representation and deliberate revision.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF8A65; border-radius: 6px;">
        <b style="color: #FF8A65; font-size: 16px; display: block; margin-bottom: 4px;">2. Money Bill (Article 110):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A specialized financial bill dealing exclusively with taxation, government borrowing, or expenditure from the Consolidated Fund of India, certified solely by the Speaker of the Lok Sabha, which cannot be introduced in or rejected by the Rajya Sabha.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF8A65; border-radius: 6px;">
        <b style="color: #FF8A65; font-size: 16px; display: block; margin-bottom: 4px;">3. Question Hour &amp; Zero Hour:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The primary daily devices of parliamentary accountability. Question Hour is the first hour of a parliamentary sitting dedicated to holding ministers accountable through oral and written questions; Zero Hour (an Indian parliamentary innovation) starts immediately after, allowing MPs to raise urgent matters of public importance without prior notice.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF8A65; border-radius: 6px;">
        <b style="color: #FF8A65; font-size: 16px; display: block; margin-bottom: 4px;">4. No-Confidence Motion:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A powerful legislative motion moved exclusively in the Lok Sabha expressing want of confidence in the Council of Ministers. If passed by a simple majority, the entire Government must immediately tender its resignation.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF8A65; border-radius: 6px;">
        <b style="color: #FF8A65; font-size: 16px; display: block; margin-bottom: 4px;">5. Anti-Defection Law (Tenth Schedule):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A constitutional mechanism added by the 52nd Amendment Act (1985) and strengthened by the 91st Amendment Act (2003) to disqualify legislators who switch parties after election or defy their party whip, curbing political opportunism and corrupt floor-crossing.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF8A65; border-radius: 6px;">
        <b style="color: #FF8A65; font-size: 16px; display: block; margin-bottom: 4px;">6. Joint Sitting (Article 108):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">An extraordinary joint session of both Houses of Parliament summoned by the President and presided over by the Speaker of the Lok Sabha to resolve a legislative deadlock between the Lok Sabha and Rajya Sabha on an ordinary bill.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WHY PARLIAMENT HAS TWO HOUSES -->
  <h2 style="color: #FF8A65; font-weight: bold; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 25px;">1. Why Does the Parliament of India Have Two Houses? (The Need for Bicameralism)</h2>

  <p>The legislature is not merely a law-making factory; it is the open forum of national debate, public deliberation, and financial scrutiny in a democracy. Under <b style="color: #FF8A65;">Article 79</b> of the Indian Constitution, the Parliament of the Union consists of the <b style="color: #FF8A65;">President</b> and two distinct Houses: the <b style="color: #FF8A65;">Council of States (Rajya Sabha)</b> and the <b style="color: #FF8A65;">House of the People (Lok Sabha)</b>. The framers deliberately rejected a unicameral legislature in favor of a bicameral parliament due to three compelling reasons:</p>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(i) Representation of Federal States and Regional Diversity</h3>
  <p>India is a colossal federation comprising 28 States and 8 Union Territories with immense linguistic, cultural, and geographic diversity. While the Lok Sabha represents the individual citizens of India on the basis of population numbers, the <b style="color: #FF8A65;">Rajya Sabha represents the States as constituent federal units</b>. It ensures that national laws and policies cannot be unilaterally imposed on smaller or peripheral states without their representatives participating in the legislative process.</p>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(ii) Check on Hasty, Passionate, or Ill-Conceived Legislation</h3>
  <p>A directly elected lower house like the Lok Sabha is vulnerable to shifting public passions, populist pressures, and political demagoguery. A temporary emotional majority in the lower house could easily enact hasty, ill-conceived legislation. The Rajya Sabha acts as a <b style="color: #FF8A65;">revising chamber</b> &mdash; an experienced second forum where every bill is subjected to a second, dispassionate round of intellectual scrutiny and calm debate.</p>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(iii) Inclusion of Distinguished National Experts</h3>
  <p>The President of India nominates <b style="color: #FF8A65;">12 eminent members</b> to the Rajya Sabha from the fields of literature, science, art, and social service (e.g. scientists, artists, social workers, economists). These distinguished personalities possess invaluable expertise to enrich national legislation but might be unwilling or unable to contest rough-and-tumble direct electoral campaigns.</p>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(iv) Bicameralism at the State Level</h3>
  <p>The Constitution also provides for bicameral legislatures in states having a <b style="color: #FF8A65;">Legislative Assembly (Vidhan Sabha)</b> and a <b style="color: #FF8A65;">Legislative Council (Vidhan Parishad)</b>. Currently, only six Indian states have a bicameral legislature: <b style="color: #FF8A65;">Uttar Pradesh, Bihar, Maharashtra, Karnataka, Andhra Pradesh, and Telangana</b>. Under Article 169, Parliament can create or abolish a Legislative Council if the State Assembly passes a resolution by a special majority.</p>

  <!-- SECTION 2: HOW PARLIAMENT AND ASSEMBLIES ARE CONSTITUTED -->
  <h2 style="color: #FF8A65; font-weight: bold; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 34px;">2. How Are the Parliament and State Assemblies Constituted?</h2>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(i) Composition of the Lok Sabha (Article 81)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">Maximum Strength:</b> Originally 552 members (530 from States, 20 from UTs, and 2 Anglo-Indian nominees). Following the 104th Amendment (2019) which abolished Anglo-Indian nominations, the current statutory strength is <b style="color: #FF8A65;">543 elected members</b>.</li>
    <li><b style="color: #FF8A65;">Election Mode:</b> Direct election by the people from single-member territorial constituencies using Universal Adult Franchise and the First-Past-The-Post system.</li>
    <li><b style="color: #FF8A65;">Tenure:</b> Normal term is <b style="color: #FF8A65;">5 years</b>, but it can be dissolved earlier by the President on the advice of the Prime Minister, or extended by 1 year at a time during a National Emergency.</li>
    <li><b style="color: #FF8A65;">Presiding Officer:</b> The Lok Sabha elects its own <b style="color: #FF8A65;">Speaker</b> and Deputy Speaker from among its members.</li>
  </ul>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(ii) Composition of the Rajya Sabha (Article 80)</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">Strength:</b> Maximum permissible strength is 250 members. Currently, it has <b style="color: #FF8A65;">245 members</b>: 233 representing States and Union Territories (Delhi, Puducherry, J&amp;K), and 12 nominated by the President.</li>
    <li><b style="color: #FF8A65;">Election Mode:</b> Indirect election by the elected members of State Legislative Assemblies (MLAs) using Proportional Representation by means of the Single Transferable Vote (STV). Seats are allotted to states based on population (e.g. UP has 31 seats; small northeastern states have 1 seat each).</li>
    <li><b style="color: #FF8A65;">Permanent Body:</b> The Rajya Sabha is a permanent chamber and is <b style="color: #FF8A65;">not subject to dissolution</b>. One-third of its members retire every second year, giving each member a full tenure of <b style="color: #FF8A65;">6 years</b>.</li>
    <li><b style="color: #FF8A65;">Presiding Officer:</b> The <b style="color: #FF8A65;">Vice-President of India</b> is the ex-officio Chairman of the Rajya Sabha (Article 64). The House elects a Deputy Chairman from amongst its members.</li>
  </ul>

  <!-- ULTRA HD 3D DIAGRAM 1: WHITE BG SVG -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 250" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="400" height="230" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="210" y="30" font-family="Arial, sans-serif" font-size="12.5" font-weight="bold" fill="#0F172A" text-anchor="middle">PARLIAMENTARY ARCHITECTURE: LOK SABHA VS RAJYA SABHA</text>
        
        <!-- Lok Sabha Box (Left) -->
        <rect x="25" y="50" width="175" height="135" rx="8" fill="#FFF7ED" stroke="#FF8A65" stroke-width="2"/>
        <text x="112" y="70" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#C2410C" text-anchor="middle">LOK SABHA (HOUSE OF PEOPLE)</text>
        <line x1="35" y1="78" x2="190" y2="78" stroke="#FED7AA" stroke-width="1.5"/>
        <text x="112" y="96" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; 543 Members (Direct FPTP)</text>
        <text x="112" y="112" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; 5-Year Term (Dissoluble)</text>
        <text x="112" y="128" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#EA580C" text-anchor="middle">&bull; Exclusive: Money Bills (Art 110)</text>
        <text x="112" y="144" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#EA580C" text-anchor="middle">&bull; Exclusive: No-Confidence Motion</text>
        <text x="112" y="160" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Budget Voting &amp; Demands</text>
        <text x="112" y="176" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#9A3412" text-anchor="middle">Popular Sovereign Will</text>

        <!-- Rajya Sabha Box (Right) -->
        <rect x="220" y="50" width="175" height="135" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
        <text x="307" y="70" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">RAJYA SABHA (COUNCIL OF STATES)</text>
        <line x1="230" y1="78" x2="385" y2="78" stroke="#BFDBFE" stroke-width="1.5"/>
        <text x="307" y="96" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; 245 Members (233 State + 12 Nom)</text>
        <text x="307" y="112" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; Permanent Body (6-Yr Term)</text>
        <text x="307" y="128" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#2563EB" text-anchor="middle">&bull; Special: State List Law (Art 249)</text>
        <text x="307" y="144" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#2563EB" text-anchor="middle">&bull; Special: All-India Services (Art 312)</text>
        <text x="307" y="160" font-family="Arial, sans-serif" font-size="8.5" fill="#1E293B" text-anchor="middle">&bull; 14-Day Delay on Money Bills</text>
        <text x="307" y="176" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#1E40AF" text-anchor="middle">Federal Safeguard &amp; Continuity</text>

        <!-- Base Co-Equal Powers Banner -->
        <rect x="25" y="195" width="370" height="32" rx="6" fill="#1E293B"/>
        <text x="210" y="215" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#F8FAFC" text-anchor="middle">CO-EQUAL: CONST. AMENDMENTS (ART 368) &amp; IMPEACHMENT</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The bicameral balance: popular democratic supremacy of Lok Sabha balanced with federal vigilance of Rajya Sabha.
    </div>
  </div>

  <!-- SECTION 3: POWERS OF RAJYA SABHA AND LOK SABHA -->
  <h2 style="color: #FF8A65; font-weight: bold; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 34px;">3. Powers of the Rajya Sabha and Lok Sabha: A Comparative Analysis</h2>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(i) Exclusive Powers of the Lok Sabha</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">Money Bills and Financial Primacy (Articles 109 &amp; 110):</b> Money Bills can ONLY be introduced in the Lok Sabha on the recommendation of the President. When passed by the Lok Sabha, it is transmitted to the Rajya Sabha, which has only <b style="color: #FF8A65;">14 days</b> to consider it. The Rajya Sabha cannot reject or amend a Money Bill; it can only make recommendations, which the Lok Sabha is completely free to accept or reject. If the Rajya Sabha does not return the bill within 14 days, it is deemed passed by both Houses.</li>
    <li><b style="color: #FF8A65;">Executive Accountability:</b> Under Article 75(3), the Council of Ministers is collectively responsible strictly to the Lok Sabha. A <b style="color: #FF8A65;">Motion of No-Confidence</b> or Adjournment Motion can only be introduced and voted upon in the Lok Sabha. The Rajya Sabha can criticize ministers, but it cannot topple a government.</li>
    <li><b style="color: #FF8A65;">Joint Sitting Numerical Superiority (Article 108):</b> In case of a deadlock on an ordinary bill, the President summons a Joint Sitting. Because the Lok Sabha has more than double the membership of the Rajya Sabha (543 vs 245) and the session is presided over by the Lok Sabha Speaker, the Lok Sabha's will invariably prevails.</li>
  </ul>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(ii) Special Constitutional Powers of the Rajya Sabha</h3>
  <p>As the defender of federalism, the Rajya Sabha enjoys two exclusive powers that the Lok Sabha does not possess:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">Article 249:</b> The Rajya Sabha can pass a resolution by a <b style="color: #FF8A65;">two-thirds majority of members present and voting</b> declaring that it is necessary in the national interest for Parliament to make laws with respect to any matter enumerated in the <b style="color: #FF8A65;">State List</b>. Parliament then acquires the power to make laws on that state subject for one year.</li>
    <li><b style="color: #FF8A65;">Article 312:</b> The Rajya Sabha can pass a resolution by a two-thirds majority authorizing the creation of one or more new <b style="color: #FF8A65;">All-India Services</b> (such as the Indian Forest Service created in 1966) common to both the Union and the States.</li>
    <li><b style="color: #FF8A65;">Continuity During National Crises:</b> If a National Emergency proclamation needs parliamentary approval when the Lok Sabha is dissolved, the Rajya Sabha alone meets to approve the proclamation until a new Lok Sabha is constituted.</li>
  </ul>

  <!-- SECTION 4: HOW LAWS ARE PASSED -->
  <h2 style="color: #FF8A65; font-weight: bold; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 34px;">4. How Are Laws Passed in Parliament? (The Legislative Procedure)</h2>

  <p>Every legislative proposal is brought before Parliament in the form of a <b style="color: #FF8A65;">Bill</b>. An ordinary bill passes through five rigorous stages before transforming into an Act of Parliament:</p>

  <!-- ULTRA HD 3D DIAGRAM 2: WHITE BG SVG -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 250" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="400" height="230" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="210" y="28" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">FIVE STAGES: HOW A BILL BECOMES AN ACT</text>
        
        <!-- Step 1 -->
        <rect x="25" y="45" width="115" height="42" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="82" y="62" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#1D4ED8" text-anchor="middle">1. FIRST READING</text>
        <text x="82" y="76" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Introduction &amp; Gazette</text>

        <!-- Arrow 1 -->
        <path d="M 142 66 L 158 66" stroke="#64748B" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Step 2 -->
        <rect x="162" y="45" width="115" height="42" rx="6" fill="#FFF7ED" stroke="#FF8A65" stroke-width="1.5"/>
        <text x="219" y="62" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#EA580C" text-anchor="middle">2. SECOND READING</text>
        <text x="219" y="76" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Debate &amp; Standing Comm.</text>

        <!-- Arrow 2 -->
        <path d="M 279 66 L 295 66" stroke="#64748B" stroke-width="2"/>

        <!-- Step 3 -->
        <rect x="298" y="45" width="100" height="42" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.5"/>
        <text x="348" y="62" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#7E22CE" text-anchor="middle">3. THIRD READING</text>
        <text x="348" y="76" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Final Clause Voting</text>

        <!-- Arrow Down to Step 4 -->
        <path d="M 348 90 L 348 115" stroke="#64748B" stroke-width="2"/>

        <!-- Step 4 -->
        <rect x="160" y="115" width="238" height="45" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
        <text x="279" y="132" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">4. PASSAGE IN SECOND HOUSE</text>
        <text x="279" y="148" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Approve / Amend / 6 Months Deadlock (Joint Sitting)</text>

        <!-- Arrow Left to Step 5 -->
        <path d="M 279 162 L 279 180" stroke="#64748B" stroke-width="2"/>

        <!-- Step 5 (Bottom Center) -->
        <rect x="110" y="180" width="200" height="48" rx="6" fill="#1E293B"/>
        <text x="210" y="200" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FF8A65" text-anchor="middle">5. PRESIDENTIAL ASSENT (ART 111)</text>
        <text x="210" y="216" font-family="Arial, sans-serif" font-size="8" fill="#F8FAFC" text-anchor="middle">Assent &rarr; BECOMES LAW (AN ACT)</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The multi-tier legislative scrutiny converting a public policy bill into statutory law of the land.
    </div>
  </div>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(i) The Five Crucial Stages</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">1. First Reading:</b> Introduction of the Bill in either House by a Minister (Government Bill) or a private member (Private Member's Bill), followed by its formal publication in the Official Gazette. No debate occurs at this stage.</li>
    <li><b style="color: #FF8A65;">2. Second Reading (The Critical Stage):</b> Divided into three substages:
      <br>&bull; <i>General Discussion:</i> Principle and broad provisions are debated.
      <br>&bull; <i>Committee Stage:</i> The bill is typically referred to a specialized <b style="color: #FF8A65;">Departmentally Related Standing Committee</b> or Select Committee. Committees examine expert evidence, listen to citizen stakeholders, and scrutinize every clause non-politically behind closed doors.
      <br>&bull; <i>Consideration Stage:</i> The House debates the committee's report and votes on every single clause and proposed amendment individually.
    </li>
    <li><b style="color: #FF8A65;">3. Third Reading:</b> The debate is strictly restricted to either accepting or rejecting the bill in its entirety; no detailed amendments are permitted. A simple majority of members present and voting passes the bill.</li>
    <li><b style="color: #FF8A65;">4. In the Second House:</b> The bill undergoes the exact same three readings in the other House. If approved without amendments, it goes to the President. If the Second House rejects the bill, sits on it for over 6 months, or passes unacceptable amendments, a deadlock occurs, resolvable via a <b style="color: #FF8A65;">Joint Sitting under Article 108</b>.</li>
    <li><b style="color: #FF8A65;">5. Assent of the President (Article 111):</b> The bill becomes an Act of Parliament upon receiving presidential assent.</li>
  </ul>

  <!-- SECTION 5: HOW EXECUTIVE IS MADE ACCOUNTABLE -->
  <h2 style="color: #FF8A65; font-weight: bold; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 34px;">5. How is the Executive Made Accountable by the Legislature?</h2>

  <p>Parliamentary democracy survives on continuous oversight. Parliament utilizes four major instruments to scrutinize, cross-examine, and hold the political executive accountable:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">1. Deliberation and Interpellation:</b>
      <br>&bull; <b style="color: #FF8A65;">Question Hour:</b> Held every working day at the beginning of the sitting. MPs grill ministers with <i>Starred Questions</i> (requiring oral answers and allowing sharp follow-up supplementary questions) and <i>Unstarred Questions</i> (written answers).
      <br>&bull; <b style="color: #FF8A65;">Zero Hour:</b> Originating informally in India in 1962, it allows MPs to raise burning scandals or urgent crises without 10-day prior notice.
      <br>&bull; <b style="color: #FF8A65;">Half-an-Hour Discussions &amp; Calling Attention Motions:</b> Used to extract factual explanations on matters of grave public anxiety.
    </li>
    <li><b style="color: #FF8A65;">2. Legislative Approval or Rejection:</b> A bill cannot become law without parliamentary approval. Even if a ruling party commands a Lok Sabha majority, intense opposition scrutiny often forces governments to modify or withdraw contentious legislation.</li>
    <li><b style="color: #FF8A65;">3. Financial Control:</b> The executive cannot collect a single rupee in taxes or spend public funds without parliamentary sanction. During budget sessions, MPs move <b style="color: #FF8A65;">Cut Motions</b> (Policy Cut, Economy Cut, Token Cut). Furthermore, the <b style="color: #FF8A65;">Public Accounts Committee (PAC)</b>, headed by an opposition leader, audits executive spending based on reports submitted by the Comptroller and Auditor General (CAG).</li>
    <li><b style="color: #FF8A65;">4. No-Confidence Motion:</b> The ultimate constitutional weapon. Under Rule 198 of the Lok Sabha Rules, any MP supported by 50 colleagues can move a motion of no-confidence. If passed, the government falls immediately.</li>
  </ul>

  <!-- SECTION 6: CONSTITUTIONAL MEANS TO PREVENT DEFECTION -->
  <h2 style="color: #FF8A65; font-weight: bold; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 34px;">6. Constitutional Means to Prevent Defection: The Tenth Schedule</h2>

  <p>In the late 1960s, Indian democracy was plagued by the notorious culture of <b style="color: #FF8A65;">"Aaya Ram, Gaya Ram"</b> &mdash; where legislators frequently defected from one party to another overnight in exchange for cash bribes, lucrative cabinet portfolios, or political patronage, causing chronic instability in state governments.</p>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(i) The 52nd Constitutional Amendment Act, 1985 (Tenth Schedule)</h3>
  <p>To eliminate this political corruption, Parliament enacted the <b style="color: #FF8A65;">Anti-Defection Law</b>, inserting the <b style="color: #FF8A65;">Tenth Schedule</b> into the Constitution. A legislator (MP or MLA) is disqualified from legislative membership on the following grounds:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF8A65;">1. Voluntarily Giving Up Party Membership:</b> If an elected member formally resigns or publicly acts against the political party on whose ticket they were elected.</li>
    <li><b style="color: #FF8A65;">2. Defying the Party Whip:</b> If a member votes or abstains from voting in the House contrary to the written direction (whip) issued by their political party without obtaining prior permission within 15 days.</li>
    <li><b style="color: #FF8A65;">3. Independent Members Joining a Party:</b> If an independently elected member joins any political party after winning the election.</li>
    <li><b style="color: #FF8A65;">4. Nominated Members Joining After 6 Months:</b> If a nominated member joins a political party after the expiry of six months from taking their seat.</li>
  </ul>

  <h3 style="color: #FF8A65; font-weight: bold; margin-top: 22px;">(ii) Strengthening the Law: The 91st Amendment Act, 2003</h3>
  <p>The original 1985 law contained a massive loophole: it exempted collective defections if <b style="color: #FF8A65;">one-third of members</b> split together. Corrupt party bosses exploited this by engineering wholesale defections. The <b style="color: #FF8A65;">91st Amendment Act (2003)</b> plugged these loopholes decisively:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li>It completely deleted the "one-third split" defense. Now, defectors are protected only if <b style="color: #FF8A65;">two-thirds of members</b> agree to merge with another political party.</li>
    <li>A disqualified defector is legally barred from being appointed as a Minister or holding any remunerative political post until they contest and win a fresh election.</li>
    <li>It capped the total size of the Council of Ministers (at both Union and State levels) at <b style="color: #FF8A65;">15% of the total membership</b> of the Lok Sabha / State Assembly, stopping the practice of handing out dozens of jumbo ministerial berths to buy political loyalty.</li>
    <li><b style="color: #FF8A65;">Deciding Authority &amp; Judicial Review:</b> Disqualification petitions are decided by the Speaker or Chairman of the House. In the landmark <b style="color: #FF8A65;">Kihoto Hollohan case (1992)</b>, the Supreme Court held that the Speaker acts as a tribunal under the Tenth Schedule, and their decision is fully subject to <b style="color: #FF8A65;">Judicial Review</b> to prevent partisan abuse.</li>
  </ul>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10B981; border-radius: 6px; padding: 14px 16px; margin: 20px 0;">
    <b style="color: #10B981; font-size: 15px;">💡 High-Scoring Board Exam Tip (Evaluation Standard):</b>
    <p style="color: #CBD5E1; font-size: 14.5px; margin: 4px 0 0 0;">When asked: <i>"What are the constitutional means to prevent defection?"</i>, always structure your answer into three distinct components: (1) <b>The 52nd Amendment (1985)</b> introducing the Tenth Schedule with its 4 grounds of disqualification, (2) <b>The 91st Amendment (2003)</b> which removed the 1/3rd split loophole and capped cabinet size to 15%, and (3) <b>The Kihoto Hollohan Ruling (1992)</b> placing the Speaker's disqualification order under judicial review.</p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 2: SOLUTIONS (Q & A)                           */
/* -------------------------------------------------------------------------- */

export const c11Pol5HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(255, 138, 101, 0.06); border: 1.5px solid #FF8A65; border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; text-align: center;">
    <h2 style="color: #FF8A65; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">Board Examination Master Q &amp; A Bank</h2>
    <p style="color: #FFCCBC; margin: 0; font-size: 14px;">Class 11 Political Science &bull; Chapter 5: Legislature at the Central and State Level (Official Board Weightage: 4 Marks)</p>
  </div>

  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS) -->
  <h2 style="color: #FF8A65; font-weight: bold; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 25px;">SECTION A: Very Short Answer Questions (VSAT - 1 &amp; 2 Marks)</h2>

  <!-- Q1 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q1: What is meant by a 'Bicameral Legislature'?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF8A65;">Answer:</b> A bicameral legislature is a legislative body consisting of two separate chambers or houses &mdash; in India, the Lok Sabha (lower house) and the Rajya Sabha (upper house) at the national level.</p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q2: What is the current elected strength of the Lok Sabha and the Rajya Sabha?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF8A65;">Answer:</b> The Lok Sabha currently consists of <b style="color: #FF8A65;">543 directly elected members</b>. The Rajya Sabha has <b style="color: #FF8A65;">245 members</b> (233 elected representatives of States and UTs plus 12 nominated by the President).</p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q3: Name the six Indian States that possess a bicameral legislature.</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF8A65;">Answer:</b> The six Indian states with bicameral legislatures (having both Vidhan Sabha and Vidhan Parishad) are: <b style="color: #FF8A65;">Uttar Pradesh, Bihar, Maharashtra, Karnataka, Andhra Pradesh, and Telangana</b>.</p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q4: For how many days can the Rajya Sabha delay a Money Bill?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF8A65;">Answer:</b> The Rajya Sabha can withhold or delay a Money Bill for a maximum period of <b style="color: #FF8A65;">14 days</b>; after this period, the bill is deemed passed automatically in the form passed by the Lok Sabha.</p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q5: State any one exclusive federal power possessed by the Rajya Sabha under the Constitution.</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF8A65;">Answer:</b> Under <b style="color: #FF8A65;">Article 249</b>, the Rajya Sabha by a 2/3rd majority resolution can authorize Parliament to enact laws on any subject in the State List in the national interest.</p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q6: Who presides over a Joint Sitting of Parliament summoned under Article 108?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF8A65;">Answer:</b> A Joint Sitting of Parliament is presided over by the <b style="color: #FF8A65;">Speaker of the Lok Sabha</b> (or in the Speaker's absence, the Deputy Speaker).</p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q7: Which Constitutional Amendment added the Tenth Schedule (Anti-Defection Law) to the Constitution?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF8A65;">Answer:</b> The Anti-Defection Law was introduced by the <b style="color: #FF8A65;">52nd Constitutional Amendment Act, 1985</b>, adding the Tenth Schedule to the Constitution.</p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q8: What ceiling was imposed on the size of the Council of Ministers by the 91st Amendment Act (2003)?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF8A65;">Answer:</b> The 91st Amendment capped the total number of ministers (including the Prime Minister or Chief Minister) at <b style="color: #FF8A65;">15% of the total membership</b> of the Lok Sabha or State Legislative Assembly.</p>
  </div>

  <!-- SECTION B: SHORT ANSWER QUESTIONS (4 MARKS) -->
  <h2 style="color: #FF8A65; font-weight: bold; border-bottom: 2px solid #FF8A65; padding-bottom: 6px; margin-top: 34px;">SECTION B: Short Answer Questions (SAT - 4 Marks)</h2>

  <!-- Q9 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q9: Explain why the Indian Parliament was established with two Houses (Bicameralism).</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF8A65;">Answer:</b> The Indian Parliament was structured with two Houses due to three primary reasons:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF8A65;">1. Representation of Federal States:</b> In a large, culturally diverse federation, the Rajya Sabha represents the interests of States as federal units, preventing smaller states from being sidelined by populous states.</li>
      <li><b style="color: #FF8A65;">2. Check on Hasty Legislation:</b> The Rajya Sabha acts as a revising chamber, ensuring that populist or hasty laws passed under emotional public pressure in the Lok Sabha are thoroughly re-examined.</li>
      <li><b style="color: #FF8A65;">3. Inclusion of Eminent Experts:</b> Twelve nominated members in the Rajya Sabha bring invaluable expertise in arts, sciences, and social services without having to face electoral politics.</li>
      <li><b style="color: #FF8A65;">4. Institutional Continuity:</b> Because the Rajya Sabha is a permanent body, it provides parliamentary continuity when the Lok Sabha is dissolved during national crises.</li>
    </ul>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q10: Contrast the powers and position of the Lok Sabha with the Rajya Sabha regarding Money Bills and financial matters.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF8A65;">Answer:</b> The Constitution gives overwhelming financial supremacy to the Lok Sabha:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF8A65;">1. Exclusive Introduction:</b> Under Article 109, a Money Bill can ONLY be introduced in the Lok Sabha upon the recommendation of the President; it cannot originate in the Rajya Sabha.</li>
      <li><b style="color: #FF8A65;">2. Sole Authority of the Speaker:</b> The Speaker of the Lok Sabha has the final, non-justiciable authority to certify whether a bill is a Money Bill (Article 110).</li>
      <li><b style="color: #FF8A65;">3. Strict 14-Day Limit:</b> The Rajya Sabha has only 14 days to review a Money Bill. It cannot reject or amend it; it can only suggest recommendations.</li>
      <li><b style="color: #FF8A65;">4. Rejection of Recommendations:</b> The Lok Sabha has sole discretion to accept or reject any recommendation of the Rajya Sabha. If rejected, the bill passes in the Lok Sabha's original form.</li>
    </ul>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q11: Explain the special constitutional powers possessed exclusively by the Rajya Sabha under Articles 249 and 312.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF8A65;">Answer:</b> As the representative of the federal states, the Rajya Sabha exercises two exclusive powers:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF8A65;">1. Legislating on State List Subjects (Article 249):</b> If the Rajya Sabha passes a resolution supported by not less than two-thirds of members present and voting declaring that it is necessary in the national interest, Parliament acquires the power to make laws on a State List subject for one year.</li>
      <li><b style="color: #FF8A65;">2. Creation of All-India Services (Article 312):</b> The Rajya Sabha alone can initiate the creation of new All-India Services (such as IAS or IPS) common to both the Centre and the States by passing a 2/3rd majority resolution.</li>
      <li><b style="color: #FF8A65;">3. Safeguarding Federal Autonomy:</b> These powers ensure that the Centre cannot encroach upon state powers or impose all-India bureaucracies without the collective consent of the states' representatives.</li>
      <li><b style="color: #FF8A65;">4. Emergency Approval:</b> If the Lok Sabha is dissolved, the Rajya Sabha alone has the constitutional power to ratify national emergency proclamations.</li>
    </ul>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q12: Describe the five stages through which an ordinary bill passes to become an Act of Parliament.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF8A65;">Answer:</b> An ordinary bill becomes an Act of Parliament through five formal stages:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF8A65;">1. First Reading:</b> Introduction of the bill in either House by a minister or private member, followed by official publication in the Gazette.</li>
      <li><b style="color: #FF8A65;">2. Second Reading:</b> Involves general debate, clause-by-clause scrutiny by Departmentally Related Standing Committees, and individual voting on amendments.</li>
      <li><b style="color: #FF8A65;">3. Third Reading:</b> Final debate where the bill is voted upon as a whole; passed by a simple majority.</li>
      <li><b style="color: #FF8A65;">4. Passage in Second House:</b> The bill undergoes identical readings in the second House. In case of unresolved deadlock, a Joint Sitting under Article 108 is summoned.</li>
      <li><b style="color: #FF8A65;">5. Presidential Assent (Article 111):</b> The bill becomes an enforceable Act upon receiving the assent of the President.</li>
    </ul>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q13: Explain the parliamentary devices through which the legislature enforces daily accountability on the executive.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF8A65;">Answer:</b> Parliament exercises continuous vigilance over ministers through four primary devices:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF8A65;">1. Question Hour:</b> The first hour of each sitting where MPs cross-examine ministers through Starred Questions (oral answers with follow-up queries) and Unstarred Questions (written).</li>
      <li><b style="color: #FF8A65;">2. Zero Hour:</b> An informal hour immediately following Question Hour where MPs raise pressing national crises and scandals without prior notice.</li>
      <li><b style="color: #FF8A65;">3. Financial Control and PAC:</b> MPs move Cut Motions during budget debates. Post-expenditure audits by the CAG are rigorously examined by the Public Accounts Committee (PAC).</li>
      <li><b style="color: #FF8A65;">4. No-Confidence Motion:</b> Moved in the Lok Sabha by 50 MPs; if passed by a simple majority, the Prime Minister and the entire Cabinet must immediately resign.</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q14: What are the grounds for disqualification under the Tenth Schedule (Anti-Defection Law)?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF8A65;">Answer:</b> Under the Tenth Schedule (52nd Amendment, 1985), an MP or MLA is disqualified on four grounds:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF8A65;">1. Voluntary Resignation:</b> If an elected member voluntarily gives up membership of the political party on whose ticket they were elected.</li>
      <li><b style="color: #FF8A65;">2. Voting Against Party Whip:</b> If a member votes or abstains from voting in the House contrary to the party's official whip without prior permission.</li>
      <li><b style="color: #FF8A65;">3. Independent Members Joining a Party:</b> If an independently elected member joins any political party after election.</li>
      <li><b style="color: #FF8A65;">4. Nominated Members:</b> If a nominated member joins any political party after the expiry of six months from taking their legislative seat.</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF8A65; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF8A65; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q15: How did the 91st Constitutional Amendment Act (2003) plug the loopholes in the Anti-Defection Law?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF8A65;">Answer:</b> The 91st Amendment Act of 2003 strengthened the Anti-Defection Law in three decisive ways:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF8A65;">1. Abolition of 1/3rd Split Defense:</b> Deleted the loophole that permitted collective defections if one-third of a party's legislators split; now, defection is protected only if <b style="color: #FF8A65;">two-thirds of members</b> merge with another party.</li>
      <li><b style="color: #FF8A65;">2. Bar on Ministerial Posts:</b> A disqualified defector is legally prohibited from being appointed as a minister or holding any remunerative political post until they get re-elected.</li>
      <li><b style="color: #FF8A65;">3. Ceiling on Cabinet Size:</b> Capped the total number of ministers at <b style="color: #FF8A65;">15% of the total strength</b> of the Lok Sabha or State Assembly, stopping the corrupt practice of offering jumbo ministries to defectors.</li>
      <li><b style="color: #FF8A65;">4. Judicial Review of Speaker's Decision:</b> Under the <i>Kihoto Hollohan</i> ruling, the Speaker's disqualification order was confirmed to be subject to judicial review by High Courts and the Supreme Court.</li>
    </ul>
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

export const c11Pol5Mcqs = [
  {
    "id": "c11-pol-5-mcq-1",
    "question": "Under Article 79 of the Indian Constitution, the Parliament of the Union consists of:",
    "options": [
      "A):   The President, Lok Sabha, and Rajya Sabha",
      "B):   Lok Sabha and Rajya Sabha only",
      "C):   Prime Minister, Lok Sabha, and Rajya Sabha",
      "D):   Lok Sabha, Rajya Sabha, and the Supreme Court"
    ],
    "correctAnswer": "A",
    "explanation": "Article 79 states that Parliament consists of the President and two Houses known respectively as the Council of States (Rajya Sabha) and the House of the People (Lok Sabha)."
  },
  {
    "id": "c11-pol-5-mcq-2",
    "question": "How many members are nominated by the President to the Rajya Sabha for their expertise in literature, science, art, and social service?",
    "options": [
      "A):   2 members",
      "B):   12 members",
      "C):   10 members",
      "D):   15 members"
    ],
    "correctAnswer": "B",
    "explanation": "Under Article 80(1)(a), the President nominates 12 members to the Rajya Sabha from among persons having special knowledge or practical experience in literature, science, art, and social service."
  },
  {
    "id": "c11-pol-5-mcq-3",
    "question": "Who among the following is the ex-officio Chairman of the Rajya Sabha?",
    "options": [
      "A):   The Prime Minister",
      "B):   The Chief Justice of India",
      "C):   The Vice-President of India",
      "D):   The Speaker of Lok Sabha"
    ],
    "correctAnswer": "C",
    "explanation": "Article 64 provides that the Vice-President of India is the ex-officio Chairman of the Council of States (Rajya Sabha)."
  },
  {
    "id": "c11-pol-5-mcq-4",
    "question": "What is the maximum period for which the Rajya Sabha can detain or delay a Money Bill passed by the Lok Sabha?",
    "options": [
      "A):   6 months",
      "B):   1 month",
      "C):   3 months",
      "D):   14 days"
    ],
    "correctAnswer": "D",
    "explanation": "Under Article 109, the Rajya Sabha must return a Money Bill within 14 days, with or without recommendations. Otherwise, it is deemed to have been passed by both Houses."
  },
  {
    "id": "c11-pol-5-mcq-5",
    "question": "Which of the following motions can be moved ONLY in the Lok Sabha to test the survival of the Government?",
    "options": [
      "A):   No-Confidence Motion",
      "B):   Calling Attention Motion",
      "C):   Privilege Motion",
      "D):   Adjournment Motion"
    ],
    "correctAnswer": "A",
    "explanation": "Because the Council of Ministers is collectively responsible strictly to the Lok Sabha (Article 75(3)), a No-Confidence Motion can only be introduced and voted upon in the Lok Sabha."
  },
  {
    "id": "c11-pol-5-mcq-6",
    "question": "Which Constitutional Schedule contains the provisions relating to the disqualification of legislators on grounds of defection?",
    "options": [
      "A):   Seventh Schedule",
      "B):   Tenth Schedule",
      "C):   Ninth Schedule",
      "D):   Eighth Schedule"
    ],
    "correctAnswer": "B",
    "explanation": "The Tenth Schedule, added by the 52nd Constitutional Amendment Act of 1985, contains the Anti-Defection Law."
  },
  {
    "id": "c11-pol-5-mcq-7",
    "question": "Who presides over a Joint Sitting of both Houses of Parliament summoned under Article 108?",
    "options": [
      "A):   The President of India",
      "B):   The Chairman of Rajya Sabha",
      "C):   The Speaker of Lok Sabha",
      "D):   The Union Law Minister"
    ],
    "correctAnswer": "C",
    "explanation": "Under Article 118(4), a Joint Sitting of Parliament is presided over by the Speaker of the Lok Sabha."
  },
  {
    "id": "c11-pol-5-mcq-8",
    "question": "Under the 91st Constitutional Amendment Act (2003), what is the maximum permissible size of the Council of Ministers?",
    "options": [
      "A):   10% of total Lok Sabha / Assembly members",
      "B):   50 ministers at the Centre",
      "C):   20% of total Lok Sabha / Assembly members",
      "D):   15% of total Lok Sabha / Assembly members"
    ],
    "correctAnswer": "D",
    "explanation": "The 91st Amendment capped the size of the Council of Ministers at 15% of the total strength of the Lok Sabha (or State Assembly)."
  },
  {
    "id": "c11-pol-5-mcq-9",
    "question": "Under Article 249, the Rajya Sabha can authorize Parliament to legislate on a State List subject by passing a resolution with what majority?",
    "options": [
      "A):   Two-thirds majority of members present and voting",
      "B):   Simple majority of total membership",
      "C):   Absolute majority of total membership",
      "D):   Unanimous consent of all states"
    ],
    "correctAnswer": "A",
    "explanation": "Article 249 requires a resolution supported by not less than two-thirds of members present and voting in the Rajya Sabha to empower Parliament to legislate on a State List subject for one year."
  },
  {
    "id": "c11-pol-5-mcq-10",
    "question": "Why can there NEVER be a Joint Sitting of Parliament in case of a deadlock over a Constitutional Amendment Bill?",
    "options": [
      "A):   Because the Supreme Court forbids it",
      "B):   Because Article 368 requires that a Constitutional Amendment Bill must be passed by each House separately by special majority",
      "C):   Because the President cannot summon MPs for amendment discussions",
      "D):   Because Rajya Sabha has no power to vote on constitutional amendments"
    ],
    "correctAnswer": "B",
    "explanation": "Article 368 mandates that every Constitutional Amendment Bill must be passed by each House separately by a special majority (2/3rd present and voting + majority of total membership); no joint sitting is permissible."
  },
  {
    "id": "c11-pol-5-mcq-11",
    "question": "What is 'Zero Hour' in Indian parliamentary proceedings?",
    "options": [
      "A):   The time when parliament takes a lunch recess",
      "B):   The hour when the budget is presented",
      "C):   An informal procedural device starting at 12 noon where MPs raise matters of urgent public importance without prior notice",
      "D):   The hour when the Prime Minister addresses the nation"
    ],
    "correctAnswer": "C",
    "explanation": "Zero Hour is an Indian parliamentary innovation starting around 12:00 noon where MPs raise urgent issues without the standard 10-day advance notice required for regular questions."
  },
  {
    "id": "c11-pol-5-mcq-12",
    "question": "Under the Tenth Schedule, who is the constitutional authority empowered to decide questions of disqualification of an MP on grounds of defection?",
    "options": [
      "A):   The Supreme Court of India directly",
      "B):   The Election Commission of India",
      "C):   The President of India",
      "D):   The Speaker of Lok Sabha or Chairman of Rajya Sabha"
    ],
    "correctAnswer": "D",
    "explanation": "Disqualification petitions under the Tenth Schedule are decided by the Speaker (in Lok Sabha) or the Chairman (in Rajya Sabha)."
  },
  {
    "id": "c11-pol-5-mcq-13",
    "question": "Which landmark judgment of the Supreme Court affirmed that the decision of the Speaker under the Tenth Schedule is subject to Judicial Review?",
    "options": [
      "A):   Kihoto Hollohan v. Zachillhu (1992)",
      "B):   Kesavananda Bharati Case (1973)",
      "C):   Minerva Mills Case (1980)",
      "D):   Golaknath Case (1967)"
    ],
    "correctAnswer": "A",
    "explanation": "In Kihoto Hollohan v. Zachillhu (1992), the Supreme Court ruled that while deciding defection petitions, the Speaker functions as a tribunal, making the order subject to judicial review."
  },
  {
    "id": "c11-pol-5-mcq-14",
    "question": "Which of the following committees of Parliament conducts a post-mortem audit on government expenditure based on the CAG report?",
    "options": [
      "A):   Estimates Committee",
      "B):   Public Accounts Committee (PAC)",
      "C):   Committee on Public Undertakings",
      "D):   Rules Committee"
    ],
    "correctAnswer": "B",
    "explanation": "The Public Accounts Committee (PAC), traditionally headed by a prominent opposition leader, scrutinizes the appropriation accounts and the CAG audit report."
  },
  {
    "id": "c11-pol-5-mcq-15",
    "question": "Under Article 312 of the Constitution, which House of Parliament has the exclusive power to initiate the creation of new All-India Services?",
    "options": [
      "A):   Lok Sabha alone",
      "B):   Both Houses jointly",
      "C):   Rajya Sabha alone",
      "D):   State Legislative Assemblies"
    ],
    "correctAnswer": "C",
    "explanation": "Under Article 312, only the Rajya Sabha can initiate the creation of new All-India Services by passing a resolution supported by a 2/3rd majority of members present and voting."
  },
  {
    "id": "c11-pol-5-mcq-16",
    "question": "Consider the following statements regarding the legislative procedure for an ordinary bill:\n1. An ordinary bill can be introduced in either House of Parliament.\n2. A deadlocked ordinary bill can be resolved through a Joint Sitting under Article 108.\n3. The President can exercise a suspensive veto on an ordinary bill by returning it for reconsideration.\nWhich of the statements given above are CORRECT?",
    "options": [
      "A):   1 and 2 only",
      "B):   2 and 3 only",
      "C):   1 and 3 only",
      "D):   1, 2, and 3"
    ],
    "correctAnswer": "D",
    "explanation": "All three statements are correct. An ordinary bill can originate in either house, deadlocks can trigger a joint sitting, and the President has suspensive veto power under Article 111."
  },
  {
    "id": "c11-pol-5-mcq-17",
    "question": "Which of the following exceptions was REMOVED from the Tenth Schedule by the 91st Constitutional Amendment Act (2003)?",
    "options": [
      "A):   The exemption granted to a defection if one-third of the party members split together",
      "B):   The exemption granted to a Speaker when elected to the chair",
      "C):   The exemption granted to a two-thirds merger with another party",
      "D):   The exemption for independent members"
    ],
    "correctAnswer": "A",
    "explanation": "The 91st Amendment deleted paragraph 3 of the Tenth Schedule, which had previously exempted a split of one-third of legislators from disqualification."
  },
  {
    "id": "c11-pol-5-mcq-18",
    "question": "Assertion (A): The Lok Sabha exercises ultimate supremacy over the Rajya Sabha in financial and budgetary matters.\nReason (R): Money Bills can only originate in the Lok Sabha, and the Rajya Sabha has no power to amend or reject them, holding only a 14-day delaying capacity.",
    "options": [
      "A):   Both A and R are true, but R is NOT the correct explanation of A",
      "B):   Both A and R are true, and R is the correct explanation of A",
      "C):   A is true, but R is false",
      "D):   A is false, but R is true"
    ],
    "correctAnswer": "B",
    "explanation": "Both statements are true and R correctly explains A. The Lok Sabha represents the direct sovereign will of taxpayers, giving it financial supremacy under Articles 109 and 110."
  },
  {
    "id": "c11-pol-5-mcq-19",
    "question": "Match List-I (Parliamentary Term) with List-II (Description):\n(p) Starred Question &mdash; (1) Requires written answer, no follow-ups\n(q) Unstarred Question &mdash; (2) Oral answer given, allows supplementary questions\n(r) Quorum &mdash; (3) Minimum 1/10th members required to conduct business\n(s) Guillotine &mdash; (4) Putting all pending budget demands to vote without debate\nChoose the correct code:",
    "options": [
      "A):   p-2, q-3, r-1, s-4",
      "B):   p-1, q-2, r-4, s-3",
      "C):   p-2, q-1, r-3, s-4",
      "D):   p-4, q-1, r-3, s-2"
    ],
    "correctAnswer": "C",
    "explanation": "Starred question requires oral answers with follow-ups (2), Unstarred question requires written answers (1), Quorum is 1/10th (3), and Guillotine wraps up budget debate on deadline (4)."
  },
  {
    "id": "c11-pol-5-mcq-20",
    "question": "Which of the following occurs if a member of a State Legislative Assembly votes contrary to the party whip on a legislative bill without prior permission?",
    "options": [
      "A):   The member is immediately sent to prison for contempt of court",
      "B):   The Governor dissolves the assembly automatically",
      "C):   The member's vote is invalidated, but they keep their legislative seat",
      "D):   The member is disqualified from membership under the Tenth Schedule, subject to condonation by the party within 15 days"
    ],
    "correctAnswer": "D",
    "explanation": "Defying a party whip on a vote invites disqualification under paragraph 2(1)(b) of the Tenth Schedule, unless condoned by the political party within 15 days."
  }
];
