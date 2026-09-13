// Class 11 Political Science Chapter 1: Making of the Constitution (Marks: 03)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #FF512F (Sunset Crimson)

const themeColor = "#FF512F";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol1HtmlOverview = `
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
  <div style="background: rgba(255, 81, 47, 0.06); border: 1.5px solid #FF512F; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FF512F; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Constitutional Definitions</h2>
    <p class="text-center" style="color: #FFAB91; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 1: Making of the Constitution (3 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF512F; border-radius: 6px;">
        <b style="color: #FF512F; font-size: 16px; display: block; margin-bottom: 4px;">1. Constitution:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The fundamental legal document of a sovereign nation that establishes the basic principles, institutional architecture, decision-making powers, procedural limitations on state authority, and basic rights and aspirations of its citizens.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF512F; border-radius: 6px;">
        <b style="color: #FF512F; font-size: 16px; display: block; margin-bottom: 4px;">2. Constituent Assembly:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A representative body of elected and nominated delegates assembled specifically for the historic task of drafting, deliberating upon, and adopting a national constitution. The Indian Constituent Assembly was constituted in 1946 under the British Cabinet Mission Plan.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF512F; border-radius: 6px;">
        <b style="color: #FF512F; font-size: 16px; display: block; margin-bottom: 4px;">3. Promulgation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The formal proclamation, enactment, and putting into legal operation of a constitution or statute by an authorized body. The legitimacy of promulgation depends on whether it reflects popular consensus or is imposed arbitrarily by an authoritarian ruler.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF512F; border-radius: 6px;">
        <b style="color: #FF512F; font-size: 16px; display: block; margin-bottom: 4px;">4. Objectives Resolution:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A historic charter moved by Pandit Jawaharlal Nehru on 13 December 1946 in the Constituent Assembly outlining the philosophical ideals, sovereign aspirations, fundamental rights, and welfare objectives that later formed the Preamble of the Indian Constitution.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF512F; border-radius: 6px;">
        <b style="color: #FF512F; font-size: 16px; display: block; margin-bottom: 4px;">5. Deliberation &amp; Public Reason:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A democratic decision-making process wherein constitutional provisions are justified through reasoned arguments, objective public interest, and mutual accommodation rather than sectarian bargaining or partisan majoritarian vote counts.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FF512F; border-radius: 6px;">
        <b style="color: #FF512F; font-size: 16px; display: block; margin-bottom: 4px;">6. Syncretic / Borrowed Document:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A constitutional architecture that integrates best democratic practices from worldwide constitutions (UK, USA, Ireland, Canada, France) while adapting them meticulously to domestic cultural, historical, and socio-economic realities.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WHY DO WE NEED A CONSTITUTION & WHAT DOES IT DO -->
  <h2 style="color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 25px;">1. Why Do We Need a Constitution? &amp; What Does a Constitution Do?</h2>

  <p>Human society is inherently characterized by extraordinary diversity. In any large nation like India, individuals belong to diverse religious communities (Hindu, Muslim, Sikh, Christian, Jain, Buddhist), speak different languages, follow distinct cultural customs, pursue varied professions, and hold conflicting opinions regarding property, taxation, education, and moral values. In such a plural society, intense friction and perpetual instability would arise if there were no authoritative, universally binding framework to coordinate human behavior. A constitution serves as this supreme bedrock.</p>

  <h3 style="color: #FF512F; font-weight: bold; margin-top: 22px;">(i) The Five Cardinal Functions of a Constitution</h3>
  <p>According to political theory and constitutional jurisprudence, a democratic constitution fulfills five vital functions:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF512F;">First Function &mdash; Coordination and Assurance:</b> The primary function of a constitution is to provide a set of basic rules that allow minimal coordination and peaceful coexistence amongst members of a society. These rules are not mere ethical suggestions; they are legally enforceable. Every citizen obeys them because the state guarantees that fellow citizens are equally bound by them.</li>
    <li><b style="color: #FF512F;">Second Function &mdash; Specification of Decision-Making Powers:</b> A constitution specifies who has the authority to make decisions for society. It decides how the government will be organized. In a monarchy, the monarch decides; in a military dictatorship, an armed ruler decides; but in a constitutional democracy, the constitution allocates authority to elected bodies (e.g., Parliament) and details how representatives are chosen.</li>
    <li><b style="color: #FF512F;">Third Function &mdash; Limitations on Government Powers:</b> Even a legitimately elected government can turn tyrannical if unchecked. Therefore, a vital function is to set limits on what a government can impose on its citizens. These limits are fundamental in the sense that government can never trespass them. This is primarily achieved through enforceable <b style="color: #FF512F;">Fundamental Rights</b>, freedom from arbitrary arrest, freedom of speech, and procedural due process.</li>
    <li><b style="color: #FF512F;">Fourth Function &mdash; Fulfilling Aspirations &amp; Goals of Society:</b> Twentieth-century constitutions, especially those emerging from post-colonial struggles like India's, do not merely limit the state; they empower the state to eradicate entrenched social evils. The Indian Constitution provides positive mandates to eliminate untouchability, establish caste equality, alleviate poverty, and build a welfare state through the <b style="color: #FF512F;">Directive Principles of State Policy (DPSP)</b>.</li>
    <li><b style="color: #FF512F;">Fifth Function &mdash; Expressing the Fundamental Identity of a People:</b> A constitution establishes both a <b style="color: #FF512F;">Political Identity</b> (citizens agree to be governed by a shared constitutional framework) and a <b style="color: #FF512F;">Moral Identity</b> (it sets authoritative boundaries on what one may or may not do as a state or citizen), uniting diverse groups under a single sovereign nation.</li>
  </ul>

  <!-- ULTRA HD 3D DIAGRAM 1: WHITE BG SVG -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 250" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="400" height="230" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="210" y="32" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#0F172A" text-anchor="middle">THE CORE ARCHITECTURE OF A DEMOCRATIC CONSTITUTION</text>
        
        <!-- Center Emblem / Pillar -->
        <rect x="145" y="50" width="130" height="32" rx="6" fill="#FFF1F2" stroke="#FF512F" stroke-width="2"/>
        <text x="210" y="70" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FF512F" text-anchor="middle">SUPREME CONSTITUTION</text>

        <!-- 4 Pillars -->
        <rect x="25" y="95" width="85" height="90" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="67" y="115" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#1D4ED8" text-anchor="middle">PILLAR 1</text>
        <text x="67" y="135" font-family="Arial, sans-serif" font-size="9" fill="#1E293B" text-anchor="middle">Basic Rules &amp;</text>
        <text x="67" y="150" font-family="Arial, sans-serif" font-size="9" fill="#1E293B" text-anchor="middle">Coordination</text>
        <text x="67" y="172" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#2563EB" text-anchor="middle">Assurance</text>

        <rect x="120" y="95" width="85" height="90" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.5"/>
        <text x="162" y="115" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#7E22CE" text-anchor="middle">PILLAR 2</text>
        <text x="162" y="135" font-family="Arial, sans-serif" font-size="9" fill="#1E293B" text-anchor="middle">Authority &amp;</text>
        <text x="162" y="150" font-family="Arial, sans-serif" font-size="9" fill="#1E293B" text-anchor="middle">Decision Power</text>
        <text x="162" y="172" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#9333EA" text-anchor="middle">Institutions</text>

        <rect x="215" y="95" width="85" height="90" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.5"/>
        <text x="257" y="115" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#B91C1C" text-anchor="middle">PILLAR 3</text>
        <text x="257" y="135" font-family="Arial, sans-serif" font-size="9" fill="#1E293B" text-anchor="middle">Limits on State</text>
        <text x="257" y="150" font-family="Arial, sans-serif" font-size="9" fill="#1E293B" text-anchor="middle">Authority</text>
        <text x="257" y="172" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#DC2626" text-anchor="middle">Fund. Rights</text>

        <rect x="310" y="95" width="85" height="90" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
        <text x="352" y="115" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">PILLAR 4</text>
        <text x="352" y="135" font-family="Arial, sans-serif" font-size="9" fill="#1E293B" text-anchor="middle">Societal Goals &amp;</text>
        <text x="352" y="150" font-family="Arial, sans-serif" font-size="9" fill="#1E293B" text-anchor="middle">Aspirations</text>
        <text x="352" y="172" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#059669" text-anchor="middle">Social Justice</text>

        <!-- Base Foundation -->
        <rect x="25" y="195" width="370" height="32" rx="6" fill="#1E293B"/>
        <text x="210" y="215" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#F8FAFC" text-anchor="middle">FOUNDATION: RULE OF LAW &amp; NATIONAL IDENTITY</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 Institutional pillars of constitutional governance harmonizing state power with individual liberties.
    </div>
  </div>

  <h3 style="color: #FF512F; font-weight: bold; margin-top: 24px;">(ii) Factors Determining the Authority &amp; Effectiveness of a Constitution</h3>
  <p>Many countries across Asia, Africa, and Latin America drafted constitutions that remained mere dead letters on paper, frequently torn up by military generals or autocratic rulers. Why did the Indian Constitution survive and flourish while others crumbled? Political scientists identify three determining factors:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF512F;">1. Mode of Promulgation:</b> A constitution created by military diktats or unrepresentative despots lacks legitimacy. The Indian Constitution was crafted by leaders who had led a colossal popular national freedom movement. Although the Constituent Assembly was not directly elected on universal franchise, it commanded unparalleled moral authority because its leaders enjoyed the unquestioned trust of millions of citizens.</li>
    <li><b style="color: #FF512F;">2. Substantive Provisions &amp; Reasons to Abide:</b> A successful constitution ensures that no single group, minority, or community feels systematically subjugated. If a constitution completely excludes a section of society, that section has no reason to obey it. The Indian Constitution guaranteed equal civic rights, linguistic freedoms, religious liberty, and constitutional safeguards to all minorities.</li>
    <li><b style="color: #FF512F;">3. Balanced Institutional Design (Checks and Balances):</b> The Indian Constitution avoided concentrating all authority in a single body. Power was fragmented horizontally between the <b style="color: #FF512F;">Legislature, Executive, and Judiciary</b>, alongside autonomous watchdog institutions like the <b style="color: #FF512F;">Election Commission of India</b> and the <b style="color: #FF512F;">Comptroller and Auditor General (CAG)</b>. If one branch attempts to subvert the constitution, others check it. Furthermore, it struck a masterly balance between <b style="color: #FF512F;">flexibility and rigidity</b> (Article 368).</li>
  </ul>

  <!-- SECTION 2: WHO MADE OUR CONSTITUTION -->
  <h2 style="color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 34px;">2. Who Made Our Constitution? The Constituent Assembly (1946–1949)</h2>

  <p>The Constitution of India was framed by a dedicated body called the <b style="color: #FF512F;">Constituent Assembly</b> between December 1946 and November 1949. Its creation was governed by the formula proposed by the British <b style="color: #FF512F;">Cabinet Mission Plan (May 1946)</b>.</p>

  <h3 style="color: #FF512F; font-weight: bold; margin-top: 22px;">(i) Composition &amp; Election Mechanism under the Cabinet Mission Plan</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FF512F;">Proportional Allocation:</b> Seats were allotted to each province and princely state roughly in proportion to their population (in the ratio of 1 seat per 1 million people).</li>
    <li><b style="color: #FF512F;">Initial Strength:</b> The undivided Assembly had an original total strength of <b style="color: #FF512F;">389 members</b>: 292 members elected from British Indian Provincial Legislative Assemblies, 93 members nominated by the rulers of Princely States, and 4 members from Chief Commissioner Provinces (Delhi, Ajmer-Merwara, Coorg, and British Baluchistan).</li>
    <li><b style="color: #FF512F;">Indirect Election:</b> Members were elected by the members of the Provincial Legislative Assemblies established under the Government of India Act 1935 through proportional representation by means of the <b style="color: #FF512F;">Single Transferable Vote (STV)</b>.</li>
    <li><b style="color: #FF512F;">Communal Quotas:</b> In British provinces, seats were distributed among three recognized communities &mdash; Muslims, Sikhs, and General &mdash; strictly in proportion to their population numbers.</li>
  </ul>

  <!-- THINKER QUOTE BOX -->
  <div style="background: rgba(255, 81, 47, 0.08); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 20px 0;">
    <b style="color: #FF512F; font-size: 15px;">🧠 Historic Words &mdash; Dr. B.R. Ambedkar (25 November 1949):</b>
    <p style="color: #CBD5E1; font-size: 14.5px; margin: 6px 0 0 0; font-style: italic;">
      "However good a Constitution may be, if those who are implementing it are not good, it will prove to be bad. However bad a Constitution may be, if those implementing it are good, it will prove to be good... On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality and in social and economic life we will have inequality."
    </p>
  </div>

  <h3 style="color: #FF512F; font-weight: bold; margin-top: 22px;">(ii) Principle of Deliberation &amp; The Culture of Public Reason</h3>
  <p>The Constituent Assembly was remarkable not because it represented every social faction through direct franchise, but because of the <b style="color: #FF512F;">extraordinary quality of its debates</b>. The members did not view constitutional clauses as bargaining chips for their narrow sectional or caste interests. Instead, every issue was argued on the anvil of <b style="color: #FF512F;">Public Reason</b> &mdash; offering justifications that any rational citizen could accept.</p>
  <p>The Assembly worked through 8 major specialized committees. The most pivotal was the <b style="color: #FF512F;">Drafting Committee</b>, appointed on 29 August 1947 under the brilliant chairmanship of <b style="color: #FF512F;">Dr. B.R. Ambedkar</b>. Pandit Nehru chaired the Union Powers and Union Constitution Committees; Sardar Vallabhbhai Patel chaired the Provincial Constitution Committee and the Advisory Committee on Fundamental Rights, Minorities, and Tribal Areas; and Dr. Rajendra Prasad presided over the Rules of Procedure and Steering Committees.</p>
  <p>Significantly, nearly every clause was debated across 11 extensive sessions covering <b style="color: #FF512F;">166 working days</b>. The only major provision that was passed without a single dissenting voice or debate was the introduction of <b style="color: #FF512F;">Universal Adult Franchise</b> &mdash; granting every adult citizen the right to vote irrespective of religion, caste, gender, or wealth.</p>

  <!-- KEY CONSTITUTIONAL MILESTONES BOX -->
  <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid #FF512F; border-radius: 8px; padding: 14px 16px; margin: 20px 0;">
    <h4 style="color: #FF512F; font-size: 16px; font-weight: 700; margin: 0 0 10px 0;">📜 Key Constitutional Milestones &amp; Timelines</h4>
    <ul style="color: #CBD5E1; font-size: 14.5px; line-height: 1.8; margin: 0; padding-left: 20px;">
      <li><b style="color: #FF512F;">9 December 1946:</b> First meeting of the Constituent Assembly. Dr. Sachchidananda Sinha served as the temporary interim President.</li>
      <li><b style="color: #FF512F;">11 December 1946:</b> Dr. Rajendra Prasad was elected permanent President; H.C. Mukherjee was elected Vice-President; Sir B.N. Rau was appointed Constitutional Advisor.</li>
      <li><b style="color: #FF512F;">13 December 1946:</b> Pandit Jawaharlal Nehru introduced the historic <i>Objectives Resolution</i> (unanimously adopted on 22 January 1947).</li>
      <li><b style="color: #FF512F;">29 August 1947:</b> Appointment of the 7-member Drafting Committee under Dr. B.R. Ambedkar.</li>
      <li><b style="color: #FF512F;">26 November 1949:</b> Constitution of India was adopted, enacted, and signed by 284 members present (celebrated nationwide as <i>Samvidhan Divas / Constitution Day</i>).</li>
      <li><b style="color: #FF512F;">26 January 1950:</b> Constitution came into legal effect (Republic Day), commemorating the 1930 declaration of <i>Purna Swaraj</i> at the Lahore Congress Session.</li>
      <li><b style="color: #FF512F;">Total Duration:</b> Exactly <b>2 years, 11 months, and 18 days</b>.</li>
    </ul>
  </div>

  <!-- SECTION 3: IMPACT OF PARTITION -->
  <h2 style="color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 34px;">3. How Did the Partition of India Affect the Working of the Constituent Assembly?</h2>

  <p>The catastrophic Partition of India on 14–15 August 1947 profoundly altered the geopolitical landscape, the social ethos, and the constitutional philosophy of the Constituent Assembly. Its effects unfolded across four decisive dimensions:</p>

  <h3 style="color: #FF512F; font-weight: bold; margin-top: 22px;">(i) Reduction in Numerical Membership</h3>
  <p>Following the creation of Pakistan under the Mountbatten Plan (3 June 1947), members representing the territories that went to Pakistan (East Bengal, West Punjab, Sindh, NWFP, and British Baluchistan) ceased to be members of the Indian Constituent Assembly. The membership consequently shrank from <b style="color: #FF512F;">389 to 299 members</b>. Of these, 229 represented British Indian provinces and 70 represented Indian Princely States. When the final Constitution was signed on 26 November 1949, exactly <b style="color: #FF512F;">284 members</b> were physically present to append their signatures.</p>

  <h3 style="color: #FF512F; font-weight: bold; margin-top: 22px;">(ii) Decisive Shift from a Weak Centre to a Strong Federal Union</h3>
  <p>Prior to partition, the Cabinet Mission Plan had envisaged an extremely weak, minimalist central government possessing jurisdiction over only three subjects &mdash; Foreign Affairs, Defense, and Communications &mdash; with vast residuary powers given to provinces and groups. This cumbersome federal scheme was a concession aimed at appeasing the Muslim League and averting partition.</p>
  <p>Once partition became an irreversible reality, the framers were liberated from this artificial constraint. Witnessing the horrific communal bloodbath, refugee exodus, and potential balkanization (threat of 565 princely states declaring independence), leaders like Nehru, Patel, and Ambedkar realized that an unstable, weak centre would lead to national disintegration. Consequently, they re-engineered the Indian Constitution into a <b style="color: #FF512F;">Federation with a Centralizing Tilt (Quasi-Federal Union)</b> with vast Union emergency powers, unified judiciary, and all-India civil services.</p>

  <h3 style="color: #FF512F; font-weight: bold; margin-top: 22px;">(iii) Decisive Rejection of Separate Electorates</h3>
  <p>British colonial rulers had introduced <b style="color: #FF512F;">Separate Electorates</b> via the Morley-Minto Reforms (1909) and the Government of India Act (1919/1935), whereby voters of a specific religious group voted only for candidates of their own faith. The framers identified separate electorates as the primary institutional poison that had engineered communal distrust and culminated in the tragedy of Partition.</p>
  <p>Consequently, the Constituent Assembly decisively abolished separate electorates. It replaced them with <b style="color: #FF512F;">Joint Electorates with Reserved Seats</b> for historically disadvantaged Scheduled Castes (SCs) and Scheduled Tribes (STs), ensuring civic equality and national emotional integration without institutionalizing religious separatism.</p>

  <h3 style="color: #FF512F; font-weight: bold; margin-top: 22px;">(iv) Accelerated Commitment to Secularism &amp; Social Revolution</h3>
  <p>Despite Pakistan declaring itself an Islamic state amidst communal carnage, the leaders of the Indian Constituent Assembly demonstrated exemplary moral courage by resolving that India would not be a Hindu mirror image of Pakistan. They enshrined uncompromised <b style="color: #FF512F;">Secularism</b> and guaranteed equal fundamental rights (Articles 14, 15, 25–28) and minority educational/cultural protections (Articles 29–30). Partition also heightened the urgency for land reforms, poverty alleviation, and state-led economic modernization to heal national trauma.</p>

  <!-- EXAM TRAP BOX -->
  <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid #EF4444; border-radius: 6px; padding: 14px 16px; margin: 20px 0;">
    <b style="color: #EF4444; font-size: 15px;">⚠️ Board Examination Trap Alert:</b>
    <p style="color: #CBD5E1; font-size: 14.5px; margin: 4px 0 0 0;">Examiners frequently ask: <i>"Why did the Indian framers abandon the weak federal structure envisioned under the Cabinet Mission Plan?"</i> Do not merely write "because of partition." The official board rubric expects you to explain that a weak Centre was originally accepted only to accommodate the Muslim League; once partition occurred, a <b>Strong Union Centre</b> became indispensable to crush centrifugal secessionist tendencies, integrate 565 princely states, and manage immense refugee resettlement.</p>
  </div>

  <!-- SECTION 4: SOURCES OF THE CONSTITUTION -->
  <h2 style="color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 34px;">4. Major Sources of the Indian Constitution: A Syncretic Masterpiece</h2>

  <p>Critics frequently label the Indian Constitution as a "bag of borrowings", a "patchwork quilt", or a "carbon copy of the 1935 Act". However, as Dr. B.R. Ambedkar famously retorted in the Constituent Assembly:</p>
  <p style="font-style: italic; color: #FFAB91; padding-left: 15px; border-left: 3px solid #FF512F;">
    "As to the accusation that the Draft Constitution has reproduced a good part of the provisions of the Government of India Act, 1935, I make no apologies. There is nothing to be ashamed of in borrowing. It involves no plagiarism. Nobody holds any patent rights in the fundamental ideas of a Constitution."
  </p>
  <p>The framers did not blindly transplant foreign provisions; they scrupulously analyzed each principle and re-calibrated it to suit India's unique socio-political realities.</p>

  <!-- ULTRA HD 3D DIAGRAM 2: WHITE BG SVG -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 81, 47, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 260" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="400" height="240" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="210" y="30" font-family="Arial, sans-serif" font-size="12.5" font-weight="bold" fill="#0F172A" text-anchor="middle">THE GLOBAL TAPESTRY: MAJOR SOURCES OF INDIAN CONSTITUTION</text>
        
        <!-- Center Emblem -->
        <circle cx="210" cy="130" r="42" fill="#FFF1F2" stroke="#FF512F" stroke-width="2.5"/>
        <text x="210" y="125" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FF512F" text-anchor="middle">CONSTITUTION</text>
        <text x="210" y="138" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FF512F" text-anchor="middle">OF INDIA</text>
        <text x="210" y="150" font-family="Arial, sans-serif" font-size="8" fill="#64748B" text-anchor="middle">(1950)</text>

        <!-- Surrounding Sources -->
        <!-- UK (Top Left) -->
        <rect x="25" y="48" width="105" height="48" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="77" y="65" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">BRITISH (UK)</text>
        <text x="77" y="78" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Parliamentary, FPTP,</text>
        <text x="77" y="89" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Rule of Law, Speaker</text>

        <!-- USA (Top Right) -->
        <rect x="290" y="48" width="105" height="48" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.5"/>
        <text x="342" y="65" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">UNITED STATES</text>
        <text x="342" y="78" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Fund. Rights, Judicial</text>
        <text x="342" y="89" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Review, Preamble</text>

        <!-- GOI 1935 (Bottom Center) -->
        <rect x="145" y="195" width="130" height="45" rx="6" fill="#F1F5F9" stroke="#475569" stroke-width="1.5"/>
        <text x="210" y="212" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#0F172A" text-anchor="middle">GOVT OF INDIA 1935</text>
        <text x="210" y="225" font-family="Arial, sans-serif" font-size="8" fill="#334155" text-anchor="middle">Federal Scheme, Governors,</text>
        <text x="210" y="235" font-family="Arial, sans-serif" font-size="8" fill="#334155" text-anchor="middle">Judiciary, Emergency powers</text>

        <!-- Ireland (Mid Left) -->
        <rect x="20" y="115" width="105" height="42" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
        <text x="72" y="132" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">IRELAND</text>
        <text x="72" y="145" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Directive Principles (DPSP)</text>

        <!-- Canada (Mid Right) -->
        <rect x="295" y="115" width="105" height="42" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.5"/>
        <text x="347" y="132" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#7E22CE" text-anchor="middle">CANADA</text>
        <text x="347" y="145" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">Strong Centre &amp; Residuary</text>

        <!-- France & Australia (Bottom Left & Right) -->
        <rect x="25" y="180" width="105" height="40" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="77" y="196" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">FRANCE</text>
        <text x="77" y="210" font-family="Arial, sans-serif" font-size="7.5" fill="#1E293B" text-anchor="middle">Liberty, Equality, Fraternity</text>

        <rect x="290" y="180" width="105" height="40" rx="6" fill="#ECFEFF" stroke="#06B6D4" stroke-width="1.5"/>
        <text x="342" y="196" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#0E7490" text-anchor="middle">AUSTRALIA</text>
        <text x="342" y="210" font-family="Arial, sans-serif" font-size="7.5" fill="#1E293B" text-anchor="middle">Concurrent List &amp; Trade</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The borrowed architectural matrix reflecting syncretic wisdom adapted to Indian constitutional democracy.
    </div>
  </div>

  <!-- COMPARISON TABLE: BORROWED FEATURES MATRIX -->
  <h3 style="color: #FF512F; font-weight: bold; margin-top: 24px;">(i) Comprehensive Master Comparison of Constitutional Sources</h3>
  <div style="overflow-x: auto; margin: 16px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #F1F5F9; border: 1px solid rgba(255, 81, 47, 0.3);">
      <thead>
        <tr style="background: rgba(255, 81, 47, 0.2); border-bottom: 2px solid #FF512F;">
          <th style="padding: 10px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.1);">Source / Country</th>
          <th style="padding: 10px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.1);">Key Features Borrowed</th>
          <th style="padding: 10px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.1);">Significance in Indian Governance</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: rgba(15, 23, 42, 0.6); border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
          <td style="padding: 10px; font-weight: bold; color: #FF512F; border: 1px solid rgba(255, 255, 255, 0.1);">Government of India Act 1935</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">&bull; Federal Scheme<br>&bull; Office of Governor<br>&bull; Structure of Judiciary<br>&bull; Public Service Commissions<br>&bull; Emergency Provisions &amp; Administrative details</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Provided approximately 60-70% of the institutional, bureaucratic, and administrative backbone of the Constitution.</td>
        </tr>
        <tr style="background: rgba(30, 41, 59, 0.6); border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
          <td style="padding: 10px; font-weight: bold; color: #38BDF8; border: 1px solid rgba(255, 255, 255, 0.1);">British Constitution (UK)</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">&bull; First-Past-the-Post (FPTP) Electoral System<br>&bull; Parliamentary Form of Government<br>&bull; Idea of the Rule of Law<br>&bull; Institution of Speaker &amp; Law-making procedure<br>&bull; Cabinet System &amp; Single Citizenship</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Ensured familiar democratic accountability; executive is directly responsible to the popularly elected Lok Sabha.</td>
        </tr>
        <tr style="background: rgba(15, 23, 42, 0.6); border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
          <td style="padding: 10px; font-weight: bold; color: #EF4444; border: 1px solid rgba(255, 255, 255, 0.1);">United States Constitution</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">&bull; Charter of Fundamental Rights (Bill of Rights)<br>&bull; Power of Judicial Review &amp; Independent Judiciary<br>&bull; Preamble Concept<br>&bull; Impeachment of President &amp; Removal of Judges</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Provides essential checks on legislative/executive excesses and safeguards fundamental individual freedoms.</td>
        </tr>
        <tr style="background: rgba(30, 41, 59, 0.6); border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
          <td style="padding: 10px; font-weight: bold; color: #10B981; border: 1px solid rgba(255, 255, 255, 0.1);">Irish Constitution (Ireland)</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">&bull; Directive Principles of State Policy (DPSP)<br>&bull; Method of Presidential Election<br>&bull; Nomination of 12 members to Rajya Sabha</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Steers the state toward social revolution, economic equality, and international peace.</td>
        </tr>
        <tr style="background: rgba(15, 23, 42, 0.6); border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
          <td style="padding: 10px; font-weight: bold; color: #A855F7; border: 1px solid rgba(255, 255, 255, 0.1);">Canadian Constitution</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">&bull; Quasi-federal Federation with a Strong Centre<br>&bull; Vesting of Residuary Powers in the Centre<br>&bull; Appointment of State Governors by Centre<br>&bull; Advisory Jurisdiction of Supreme Court (Art 143)</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Preserves Indian national integrity against centrifugal, secessionist, and regionalist threats.</td>
        </tr>
        <tr style="background: rgba(30, 41, 59, 0.6); border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
          <td style="padding: 10px; font-weight: bold; color: #F59E0B; border: 1px solid rgba(255, 255, 255, 0.1);">French Constitution</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">&bull; Principles of Liberty, Equality, and Fraternity<br>&bull; Idea of a Republic (Elected Head of State)</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Forms the philosophical trinitarian bedrock of the Preamble and republican citizenship.</td>
        </tr>
        <tr style="background: rgba(15, 23, 42, 0.6); border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
          <td style="padding: 10px; font-weight: bold; color: #06B6D4; border: 1px solid rgba(255, 255, 255, 0.1);">Australian Constitution</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">&bull; Concurrent List<br>&bull; Freedom of Trade, Commerce, and Intercourse<br>&bull; Joint Sitting of both Houses of Parliament</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Enables harmonious legislative cooperation and resolves parliamentary deadlocks.</td>
        </tr>
        <tr style="background: rgba(30, 41, 59, 0.6);">
          <td style="padding: 10px; font-weight: bold; color: #E11D48; border: 1px solid rgba(255, 255, 255, 0.1);">South Africa &amp; USSR &amp; Germany</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">&bull; Amendment Procedure of Constitution (South Africa)<br>&bull; Fundamental Duties (USSR - 42nd Amendment)<br>&bull; Suspension of Fundamental Rights during Emergency (Weimar Germany)</td>
          <td style="padding: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">Ensures constitutional adaptability, civic responsibility, and national crisis response.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10B981; border-radius: 6px; padding: 14px 16px; margin: 20px 0;">
    <b style="color: #10B981; font-size: 15px;">💡 Board Exam Presentation Tip (To Score Full 3/3 Marks):</b>
    <p style="color: #CBD5E1; font-size: 14.5px; margin: 4px 0 0 0;">Whenever asked: <i>"Is the Indian Constitution a mere bag of borrowings?"</i>, always divide your answer into three clear bullet points:<br>
    <b>1. Affirmation:</b> Acknowledge that framers borrowed structural (GOI Act 1935), philosophical (USA &amp; Ireland), and political (UK) provisions.<br>
    <b>2. Modification:</b> Emphasize that they removed foreign flaws (e.g. avoided the absolute rigidity of the US amendment process and modified UK parliamentary supremacy by adding judicial review).<br>
    <b>3. Contextualization:</b> Conclude with Dr. Ambedkar's argument that adapting proven democratic institutions to Indian conditions is a testament to constitutional statesmanship, not plagiarism.</p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 2: SOLUTIONS (Q & A)                           */
/* -------------------------------------------------------------------------- */

export const c11Pol1HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(255, 81, 47, 0.06); border: 1.5px solid #FF512F; border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; text-align: center;">
    <h2 style="color: #FF512F; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">Board Examination Master Q &amp; A Bank</h2>
    <p style="color: #FFAB91; margin: 0; font-size: 14px;">Class 11 Political Science &bull; Chapter 1: Making of the Constitution (Official Board Weightage: 3 Marks)</p>
  </div>

  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS) -->
  <h2 style="color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 25px;">SECTION A: Very Short Answer Questions (VSAT - 1 &amp; 2 Marks)</h2>

  <!-- Q1 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q1: What is meant by a 'Constitution'?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF512F;">Answer:</b> A constitution is a supreme legal document of a country that lays down the fundamental principles, the institutional structure, powers and limitations of government organs, and guarantees basic rights and duties to its citizens, establishing the rule of law.</p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q2: What is the primary function of a constitution regarding coordination in society?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF512F;">Answer:</b> The first and primary function of a constitution is to provide a set of basic, publicly known, and legally enforceable rules that allow minimal coordination, mutual assurance, and peaceful coexistence among members of a highly diverse society.</p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q3: Who was the permanent President of the Constituent Assembly and who headed the Drafting Committee?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF512F;">Answer:</b> <b style="color: #FF512F;">Dr. Rajendra Prasad</b> was elected as the permanent President of the Constituent Assembly (on 11 December 1946), while <b style="color: #FF512F;">Dr. B.R. Ambedkar</b> served as the Chairman of the pivotal Drafting Committee (appointed on 29 August 1947).</p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q4: On what date was the Objectives Resolution moved in the Constituent Assembly, and by whom?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF512F;">Answer:</b> The historic Objectives Resolution was moved by <b style="color: #FF512F;">Pandit Jawaharlal Nehru</b> on <b style="color: #FF512F;">13 December 1946</b>. It was unanimously adopted by the Assembly on 22 January 1947, defining the ideals that inspired the Preamble.</p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q5: Exactly how much time did the Constituent Assembly take to complete the framing of the Constitution?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF512F;">Answer:</b> The Constituent Assembly took exactly <b style="color: #FF512F;">2 years, 11 months, and 18 days</b> to complete the framing of the Constitution, holding 11 plenary sessions over 166 working days between 9 December 1946 and 26 November 1949.</p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q6: Name two major constitutional features borrowed from the British Constitution.</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF512F;">Answer:</b> Two major features borrowed from the British Constitution are: (1) <b style="color: #FF512F;">Parliamentary form of government</b> (with a Cabinet responsible to the lower house) and (2) <b style="color: #FF512F;">First-Past-the-Post (FPTP) electoral system</b> alongside the concept of the Rule of Law.</p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q7: Name two fundamental features borrowed from the Constitution of the United States.</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF512F;">Answer:</b> Two fundamental features borrowed from the United States Constitution are: (1) The charter of legally enforceable <b style="color: #FF512F;">Fundamental Rights</b> and (2) The power of <b style="color: #FF512F;">Judicial Review</b> along with the independence of the Judiciary.</p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q8: Why was 26th January chosen as the date for the commencement of the Indian Constitution?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #FF512F;">Answer:</b> The Constitution was formally brought into force on 26 January 1950 to commemorate the historic pledge of <b style="color: #FF512F;">Purna Swaraj (Complete Independence)</b> first declared by the Indian National Congress at its Lahore Session on 26 January 1930.</p>
  </div>

  <!-- SECTION B: SHORT ANSWER QUESTIONS (3 & 4 MARKS) -->
  <h2 style="color: #FF512F; font-weight: bold; border-bottom: 2px solid #FF512F; padding-bottom: 6px; margin-top: 34px;">SECTION B: Short Answer Questions (SAT - 3 &amp; 4 Marks)</h2>

  <!-- Q9 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q9: Explain any three essential functions performed by a constitution in a modern democratic state.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF512F;">Answer:</b> In a modern democratic state, a constitution performs three indispensable functions:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF512F;">1. Providing Basic Rules for Social Coordination:</b> It sets minimal, publicly known, and legally binding norms that enable individuals belonging to diverse ethnic, religious, and linguistic backgrounds to live together peacefully with mutual assurance that the law protects them equally.</li>
      <li><b style="color: #FF512F;">2. Allocating Decision-Making Power:</b> It clearly demarcates who exercises sovereign authority to enact laws, how the legislature and executive are formed, and how public authority is structured to prevent dictatorial takeovers.</li>
      <li><b style="color: #FF512F;">3. Setting Limits on State Authority:</b> It prevents elected governments from acting tyrannically by guaranteeing inalienable Fundamental Rights (freedom of speech, liberty, equality before law) that the state can never arbitrarily trespass.</li>
    </ul>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q10: How was the Constituent Assembly of India constituted according to the Cabinet Mission Plan of 1946?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF512F;">Answer:</b> The Constituent Assembly was constituted under the framework of the British Cabinet Mission Plan (May 1946) through the following structural principles:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF512F;">1. Proportional Seat Allocation:</b> Seats were allotted to British provinces and princely states in proportion to their respective populations (roughly 1 seat per 1 million people), giving an initial total strength of 389 members.</li>
      <li><b style="color: #FF512F;">2. Indirect Election:</b> The 292 provincial members were elected indirectly by the members of the Provincial Legislative Assemblies (constituted under the 1935 Act) through proportional representation by means of the single transferable vote.</li>
      <li><b style="color: #FF512F;">3. Communal Distribution &amp; Princely Representation:</b> Seats in British provinces were divided among Muslims, Sikhs, and General categories in proportion to their numbers. The 93 seats for princely states were filled via consultation with their rulers.</li>
    </ul>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q11: "The Indian Constitution was an embodiment of public reason and rigorous deliberation rather than partisan bargaining." Justify this statement.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF512F;">Answer:</b> The Constituent Assembly distinguished itself through an extraordinary commitment to democratic deliberation and public reason:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF512F;">1. Transcendence of Sectional Interests:</b> Members did not advance arguments solely to protect their narrow caste, religious, or regional constituencies; instead, every clause was defended on universal grounds of national interest, equity, and democratic justice.</li>
      <li><b style="color: #FF512F;">2. Vibrant Internal Debate:</b> Although the Congress Party held over 82% of the seats, it was a diverse umbrella movement encompassing socialists, capitalists, conservatives, and radical reformers. Heated discussions occurred on whether India should have a centralized or decentralized federation, the status of Hindi, and property rights.</li>
      <li><b style="color: #FF512F;">3. Consensus Building:</b> Decisions were arrived at through painstaking persuasion, accommodation, and consensus rather than steamrolling minorities through mechanical majority votes. The only clause passed without controversy was Universal Adult Franchise.</li>
    </ul>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q12: Explain how the Partition of India in 1947 affected the composition, political perspective, and working of the Constituent Assembly.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF512F;">Answer:</b> The Partition of August 1947 impacted the Constituent Assembly across three profound dimensions:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF512F;">1. Reduction in Membership:</b> With the secession of territories forming Pakistan, the total strength of the Assembly dropped from 389 to 299 members (229 from provinces and 70 from princely states). Exactly 284 members signed the final document on 26 November 1949.</li>
      <li><b style="color: #FF512F;">2. Re-engineering toward a Powerful Union Centre:</b> The Cabinet Mission’s weak centre model (originally adopted to accommodate the Muslim League) was discarded. In the face of catastrophic communal violence, refugee crisis, and integration challenges of 565 princely states, the framers deliberately constructed a strong central government to prevent further Balkanization.</li>
      <li><b style="color: #FF512F;">3. Elimination of Separate Electorates:</b> The colonial device of separate electorates &mdash; which had fostered religious polarization &mdash; was decisively rejected and replaced with joint electorates, combined with reserved seats for SCs and STs, cementing a secular, unified democratic polity.</li>
    </ul>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q13: Describe the major features borrowed from the Government of India Act 1935 and explain its significance as the structural framework of the Indian Constitution.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF512F;">Answer:</b> The Government of India Act 1935 served as the administrative and structural blueprint of the Constitution:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF512F;">1. Key Features Borrowed:</b> The Federal Scheme (division of legislative powers into Union, State, and Concurrent Lists), the Office of the Governor, the organizational hierarchy of the Judiciary, Public Service Commissions (UPSC), and comprehensive Emergency Provisions.</li>
      <li><b style="color: #FF512F;">2. Administrative Continuity:</b> Over 60% of the constitutional text and detailed administrative apparatus was drawn from this Act. This ensured that newly independent India did not experience bureaucratic breakdown during the perilous transition from British rule to sovereign democracy.</li>
      <li><b style="color: #FF512F;">3. Democratic Infusion:</b> While borrowing the structural machinery, the framers completely replaced the colonial purpose with popular sovereignty, universal franchise, and fundamental human rights.</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q14: "The Indian Constitution is called a borrowed document, but it was not a blind copy." Critically evaluate this statement.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF512F;">Answer:</b> Although the Indian Constitution integrates provisions from several world constitutions, it was never an uncritical reproduction:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF512F;">1. Ransacking the World's Constitutions:</b> As Dr. Ambedkar asserted, the framers gathered the finest democratic provisions &mdash; Parliamentary system from the UK, Fundamental Rights and Judicial Review from the USA, DPSPs from Ireland, and a Strong Federal Union from Canada &mdash; avoiding the need to "reinvent the wheel."</li>
      <li><b style="color: #FF512F;">2. Remedying Foreign Flaws:</b> The framers consciously discarded problematic aspects of foreign models. For instance, they rejected the absolute parliamentary sovereignty of Britain by establishing a written constitution and judicial review, and avoided the extreme rigidity of the US amendment process by designing a flexible-yet-rigid amendment formula (Article 368).</li>
      <li><b style="color: #FF512F;">3. Domestic Contextualization:</b> Foreign concepts were molded to address Indian social realities &mdash; such as introducing special affirmative action (caste reservations) and minority protection provisions unseen in Western constitutions.</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #FF512F; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #FF512F; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q15: What was the historical significance of the Objectives Resolution passed by the Constituent Assembly in shaping the Preamble and constitutional philosophy?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #FF512F;">Answer:</b> Moved by Jawaharlal Nehru on 13 December 1946, the Objectives Resolution was the ideological compass of the Constitution:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #FF512F;">1. Philosophical Foundations:</b> It proclaimed India as an Independent Sovereign Republic and affirmed that all power and authority of sovereign India are derived directly from the people.</li>
      <li><b style="color: #FF512F;">2. Guarantee of Core Values:</b> It pledged to secure to all citizens Justice (social, economic, and political), Equality of status and opportunity, and fundamental freedoms of thought, expression, belief, faith, and worship.</li>
      <li><b style="color: #FF512F;">3. Blueprint for the Preamble:</b> The ideals expressed in the Objectives Resolution were distilled word-for-word into the <b style="color: #FF512F;">Preamble</b> of the Constitution, providing an enduring standard against which any constitutional amendment or legislative law is judged today.</li>
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

export const c11Pol1Mcqs: MCQ[] = [
  // Tier 1: Direct Recall (Easy)
  {
    id: "c11-pol-1-mcq-1",
    question: "When did the Constituent Assembly of India hold its very first meeting?",
    options: [
      "A):   15 August 1947",
      "B):   9 December 1946",
      "C):   26 November 1949",
      "D):   26 January 1950",
    ],
    correctAnswer: "b",
    explanation: "The Constituent Assembly met for the first time on 9 December 1946 in the Constitution Hall (now Central Hall of Parliament, New Delhi), with Dr. Sachchidananda Sinha serving as temporary Chairman.",
  },
  {
    id: "c11-pol-1-mcq-2",
    question: "Who among the following was elected as the permanent President of the Constituent Assembly on 11 December 1946?",
    options: [
      "A):   Dr. B.R. Ambedkar",
      "B):   Pandit Jawaharlal Nehru",
      "C):   Dr. Rajendra Prasad",
      "D):   Sardar Vallabhbhai Patel",
    ],
    correctAnswer: "c",
    explanation: "Dr. Rajendra Prasad was elected as the permanent President of the Constituent Assembly on 11 December 1946, while Dr. B.R. Ambedkar chaired the Drafting Committee.",
  },
  {
    id: "c11-pol-1-mcq-3",
    question: "Who was appointed as the Chairman of the Drafting Committee of the Constituent Assembly on 29 August 1947?",
    options: [
      "A):   Dr. B.R. Ambedkar",
      "B):   Sir B.N. Rau",
      "C):   K.M. Munshi",
      "D):   Alladi Krishnaswamy Iyer",
    ],
    correctAnswer: "a",
    explanation: "Dr. B.R. Ambedkar was appointed Chairman of the 7-member Drafting Committee, earning him the title of the 'Chief Architect of the Indian Constitution'.",
  },
  {
    id: "c11-pol-1-mcq-4",
    question: "The historic 'Objectives Resolution' which outlined the foundational ideals of the Indian Constitution was moved by:",
    options: [
      "A):   Mahatma Gandhi",
      "B):   Pandit Jawaharlal Nehru",
      "C):   Dr. B.R. Ambedkar",
      "D):   Maulana Abul Kalam Azad",
    ],
    correctAnswer: "b",
    explanation: "Pandit Jawaharlal Nehru introduced the historic Objectives Resolution in the Constituent Assembly on 13 December 1946, which later inspired the Preamble.",
  },
  {
    id: "c11-pol-1-mcq-5",
    question: "The Directive Principles of State Policy (DPSP) in the Indian Constitution were borrowed from which country's constitution?",
    options: [
      "A):   United States",
      "B):   Ireland",
      "C):   United Kingdom",
      "D):   Canada",
    ],
    correctAnswer: "b",
    explanation: "The Directive Principles of State Policy (Part IV of the Constitution) were borrowed from the Irish Constitution (which had adopted them from the Spanish Constitution).",
  },
  {
    id: "c11-pol-1-mcq-6",
    question: "Which of the following constitutional provisions was passed by the Constituent Assembly without virtually any debate or opposition?",
    options: [
      "A):   Federal power distribution",
      "B):   Universal Adult Franchise",
      "C):   National language status of Hindi",
      "D):   Right to Property",
    ],
    correctAnswer: "b",
    explanation: "Universal Adult Franchise (granting every adult citizen the right to vote irrespective of gender, caste, or wealth) was the only major provision enacted without debate.",
  },
  {
    id: "c11-pol-1-mcq-7",
    question: "How many members actually signed the Constitution of India when it was adopted on 26 November 1949?",
    options: [
      "A):   389 members",
      "B):   299 members",
      "C):   284 members",
      "D):   250 members",
    ],
    correctAnswer: "c",
    explanation: "Out of the post-partition membership of 299, exactly 284 members were physically present in the Assembly on 26 November 1949 to sign the original handwritten Constitution.",
  },
  {
    id: "c11-pol-1-mcq-8",
    question: "The power of Judicial Review and the charter of Fundamental Rights were borrowed primarily from the constitution of:",
    options: [
      "A):   Great Britain",
      "B):   Canada",
      "C):   United States",
      "D):   Australia",
    ],
    correctAnswer: "c",
    explanation: "The concept of an independent judiciary armed with Judicial Review and the enforceable Bill of Fundamental Rights were borrowed from the United States Constitution.",
  },

  // Tier 2: Conceptual & Comparative (Moderate)
  {
    id: "c11-pol-1-mcq-9",
    question: "What was the initial total strength of the Constituent Assembly under the Cabinet Mission Plan before the partition of India?",
    options: [
      "A):   299 members",
      "B):   389 members",
      "C):   420 members",
      "D):   350 members",
    ],
    correctAnswer: "b",
    explanation: "Under the Cabinet Mission Plan of 1946, the initial strength was 389 (292 elected from British provinces, 93 nominated by princely states, and 4 from Chief Commissioner provinces).",
  },
  {
    id: "c11-pol-1-mcq-10",
    question: "Why did the members of the Constituent Assembly abandon the concept of a weak centre with limited powers after August 1947?",
    options: [
      "A):   British rulers ordered them to change it",
      "B):   Partition highlighted the grave danger of national fragmentation, requiring a powerful Union Centre",
      "C):   The Supreme Court demanded a unitary constitution",
      "D):   Princely states refused to join a federation",
    ],
    correctAnswer: "b",
    explanation: "The horrors of Partition and the risk of balkanization with 565 princely states proved that only a strong Union Centre could safeguard national sovereignty and maintain law and order.",
  },
  {
    id: "c11-pol-1-mcq-11",
    question: "The concept of a 'Quasi-Federal' system (a federation with a strong centralizing tilt and residuary powers with the Centre) was adapted from:",
    options: [
      "A):   Canada",
      "B):   United States",
      "C):   Australia",
      "D):   South Africa",
    ],
    correctAnswer: "a",
    explanation: "The Indian federal framework &mdash; a union of states with a strong Centre and residuary powers vested in the national parliament &mdash; was inspired by the Canadian model.",
  },
  {
    id: "c11-pol-1-mcq-12",
    question: "Which of the following bodies served as the constitutional advisor to the Constituent Assembly?",
    options: [
      "A):   Dr. B.R. Ambedkar",
      "B):   Sir B.N. Rau",
      "C):   H.V.R. Iengar",
      "D):   S.N. Mukherjee",
    ],
    correctAnswer: "b",
    explanation: "Sir Benegal Narsing Rau (B.N. Rau), an eminent jurist who later served on the International Court of Justice, was appointed as the Constitutional Advisor to the Assembly.",
  },
  {
    id: "c11-pol-1-mcq-13",
    question: "The electoral mechanism used to elect members of the Constituent Assembly from the Provincial Legislative Assemblies was:",
    options: [
      "A):   Direct election through adult suffrage",
      "B):   Proportional representation by means of the single transferable vote",
      "C):   First-Past-the-Post system by general voters",
      "D):   Nomination by the Viceroy of India",
    ],
    correctAnswer: "b",
    explanation: "Provincial legislators elected the Assembly members through proportional representation by means of the single transferable vote (STV), ensuring representation across communities.",
  },
  {
    id: "c11-pol-1-mcq-14",
    question: "The ideals of 'Liberty, Equality, and Fraternity' enshrined in the Preamble of the Indian Constitution were inspired by:",
    options: [
      "A):   The American Revolution (1776)",
      "B):   The Russian Bolshevik Revolution (1917)",
      "C):   The French Revolution (1789)",
      "D):   The Irish Independence Movement (1922)",
    ],
    correctAnswer: "c",
    explanation: "The trinitarian ideals of Liberty, Equality, and Fraternity emerged from the French Revolution of 1789 and were adopted into the Preamble as core moral values.",
  },
  {
    id: "c11-pol-1-mcq-15",
    question: "The major structural and administrative framework of the Constitution, comprising nearly 60-70% of its provisions, was drawn from:",
    options: [
      "A):   Government of India Act 1935",
      "B):   Indian Independence Act 1947",
      "C):   Nehru Report of 1928",
      "D):   Government of India Act 1919",
    ],
    correctAnswer: "a",
    explanation: "The Government of India Act 1935 provided the administrative machinery, federal lists, office of governor, emergency provisions, and judicial structure.",
  },

  // Tier 3: Analytical & Multi-Statement (Advance)
  {
    id: "c11-pol-1-mcq-16",
    question: "Which of the following is NOT one of the core functions of a constitution in a democratic society?",
    options: [
      "A):   Providing basic rules to allow minimal coordination among citizens",
      "B):   Specifying who has the power to take decisions in society",
      "C):   Ensuring that a single political party remains permanently in power to avoid chaos",
      "D):   Limiting what a government can impose upon its citizens",
    ],
    correctAnswer: "c",
    explanation: "A democratic constitution never guarantees permanent power to any party. Instead, it limits government power, ensures periodic free elections, and guarantees fundamental rights.",
  },
  {
    id: "c11-pol-1-mcq-17",
    question: "Consider the following statements regarding the Constituent Assembly of India:\n1. It was directly elected by all adult citizens of British India.\n2. Following the partition of India, its membership was reduced to 299.\n3. The Muslim League boycotted the initial meetings of the Assembly.\nWhich of the statements given above are CORRECT?",
    options: [
      "A):   1 and 2 only",
      "B):   2 and 3 only",
      "C):   1 and 3 only",
      "D):   1, 2, and 3",
    ],
    correctAnswer: "b",
    explanation: "Statement 1 is incorrect because the Assembly was indirectly elected by provincial legislators elected under the 1935 Act, not by direct universal adult suffrage. Statements 2 and 3 are correct.",
  },
  {
    id: "c11-pol-1-mcq-18",
    question: "Why did the Constituent Assembly decide to abolish separate electorates which had existed under British rule since 1909?",
    options: [
      "A):   To deny political representation to minority groups",
      "B):   Because separate electorates had fostered communal polarization that culminated in Partition",
      "C):   Because the United Nations passed a resolution banning them",
      "D):   Because the British government requested their removal",
    ],
    correctAnswer: "b",
    explanation: "The framers recognized that separate electorates were a divide-and-rule colonial instrument that fragmented the nation along religious lines, making joint electorates essential for national unity.",
  },
  {
    id: "c11-pol-1-mcq-19",
    question: "Match List-I (Source) with List-II (Borrowed Feature):\n(p) Australia &mdash; (1) Concurrent List &amp; Joint Sitting\n(q) South Africa &mdash; (2) Constitutional Amendment Procedure\n(r) Ireland &mdash; (3) Directive Principles of State Policy\n(s) United Kingdom &mdash; (4) Parliamentary Executive &amp; FPTP\nChoose the correct code:",
    options: [
      "A):   p-1, q-2, r-3, s-4",
      "B):   p-2, q-1, r-4, s-3",
      "C):   p-4, q-3, r-2, s-1",
      "D):   p-1, q-3, r-2, s-4",
    ],
    correctAnswer: "a",
    explanation: "All matches are correctly aligned: Australia (Concurrent List), South Africa (Amendment Procedure), Ireland (DPSPs), and UK (Parliamentary Executive & FPTP).",
  },
  {
    id: "c11-pol-1-mcq-20",
    question: "Assertion (A): The Indian Constitution is characterized as a living document rather than a rigid, unchangeable artifact.\nReason (R): It balances rigidity and flexibility under Article 368, enabling adaptation to evolving socio-economic conditions while preserving its basic structure.",
    options: [
      "A):   Both A and R are true, and R is the correct explanation of A",
      "B):   Both A and R are true, but R is NOT the correct explanation of A",
      "C):   A is true, but R is false",
      "D):   A is false, but R is true",
    ],
    correctAnswer: "a",
    explanation: "Both statements are correct. The Constitution is a living document because its balanced amendment design under Article 368 allows it to grow and adapt to contemporary needs without subverting fundamental democratic ideals.",
  },
];
