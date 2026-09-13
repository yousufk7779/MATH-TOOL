// Class 11 Political Science Chapter 4: Executive in a Parliamentary System (Marks: 04)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #8E2DE2 (Royal Violet)

const themeColor = "#8E2DE2";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol4HtmlOverview = `
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
    <h2 class="text-center" style="color: #8E2DE2; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Executive Definitions</h2>
    <p class="text-center" style="color: #CE93D8; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 4: Executive in a Parliamentary System (4 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">1. Executive:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The organ of government responsible for the execution, enforcement, and administration of laws enacted by the legislature, as well as the formulation and implementation of public policies.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">2. Parliamentary Executive:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A constitutional system where the executive branch emerges directly from, is politically embedded within, and is held continuously accountable to the legislature (as in India, the UK, Canada, and Germany).</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">3. Nominal (De Jure) vs Real (De Facto) Executive:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">In India, the President is the formal constitutional (nominal) head of state in whose name all executive acts are executed, while the Prime Minister and Council of Ministers constitute the real executive exercising substantive governing authority.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">4. Collective Responsibility (Article 75(3)):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The cornerstone convention of cabinet government mandating that the Council of Ministers is collectively answerable to the Lok Sabha; if a vote of no-confidence is passed, the entire ministry must resign together.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">5. Discretionary Powers of the President:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Exceptional constitutional situations where the President acts on their independent judgment without or contrary to ministerial advice &mdash; such as selecting a Prime Minister in a hung parliament, returning advice for reconsideration, or exercising pocket veto.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">6. Permanent Executive (Civil Services):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The permanent administrative apparatus of career civil servants (IAS, IPS, Central Services) selected through open competitive examinations who provide administrative continuity, technical expertise, and non-partisan implementation of government policies.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WHY PARLIAMENTARY SYSTEM WAS CHOSEN -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 25px;">1. Why Was the Parliamentary System Chosen Over Other Forms of Government?</h2>

  <p>In political science, the executive branch is structured across three fundamental institutional designs worldwide:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">Presidential Executive (e.g. United States, Brazil):</b> The President is both Head of State and Head of Government. The President is directly elected by the people for a fixed term, is not accountable to the legislature for daily governance, does not need legislative confidence to survive, and cannot be easily removed except through exceptional impeachment for treason or high crimes.</li>
    <li><b style="color: #8E2DE2;">Semi-Presidential Executive (e.g. France, Russia, Sri Lanka):</b> Features both an executive President directly elected by the public with vast sovereign powers, and a Prime Minister and cabinet who are responsible to parliament for day-to-day administration.</li>
    <li><b style="color: #8E2DE2;">Parliamentary Executive (e.g. India, United Kingdom, Canada, Germany):</b> Features a clear institutional bifurcation between the <b style="color: #8E2DE2;">Head of State</b> (a ceremonial President or constitutional Monarch) and the <b style="color: #8E2DE2;">Head of Government</b> (the Prime Minister). Real executive authority is exercised by the Prime Minister and the Council of Ministers, who are drawn from the legislature and depend entirely upon majority confidence in the elected lower house.</li>
  </ul>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 22px;">(i) Rationale of the Constituent Assembly for Choosing the Parliamentary Model</h3>
  <p>During the framing of the Constitution, advocates of a Presidential executive argued that a developing nation required the iron stability and decisive command of an American-style President. However, <b style="color: #8E2DE2;">Dr. B.R. Ambedkar</b> and <b style="color: #8E2DE2;">Pandit Jawaharlal Nehru</b> firmly rejected this proposal on three profound grounds:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">1. Prioritizing Daily Accountability Over Mere Stability:</b> Dr. Ambedkar famously observed that a democratic executive must satisfy two conditions: it must be a <i>stable</i> executive and it must be a <i>responsible</i> executive. In the American presidential system, stability is high because the President serves a fixed 4-year term, but accountability is periodic &mdash; assessed only once every four years. In contrast, the parliamentary system provides continuous daily assessment through parliamentary questions, calling-attention notices, debates, censure motions, and no-confidence votes. For an infant republic with deep socio-economic inequalities, continuous parliamentary oversight was indispensable to prevent executive despotism.</li>
    <li><b style="color: #8E2DE2;">2. Long Historical Familiarity:</b> Since the enactment of the Government of India Acts of 1919 and 1935, Indian political leaders and civil servants had developed deep institutional familiarity with the norms and procedures of cabinet governance. Uprooting this established tradition in favor of an unfamiliar presidential model would have caused massive administrative disorientation.</li>
    <li><b style="color: #8E2DE2;">3. Danger of Dictatorship in a Pluralist Society:</b> Concentrating all supreme executive authority in a single directly elected individual was deemed extraordinarily dangerous for a multi-ethnic, multi-religious, and multilingual nation like India. A presidential system fosters personality cults and can easily degenerate into authoritarian rule, as witnessed across numerous post-colonial nations in Africa and Latin America. Cabinet governance, by contrast, distributes power collectively across a team of ministers representing diverse states, castes, and communities.</li>
    <li><b style="color: #8E2DE2;">4. Avoiding Executive-Legislative Deadlocks:</b> In presidential regimes, when the President belongs to one political party and the legislative majority belongs to an opposing party (a divided government), governance frequently grinds to a complete halt due to budgetary shutdowns and legislative vetoes. The parliamentary system eliminates this deadlock because the executive is by definition the leadership of the legislative majority.</li>
  </ul>

  <!-- ULTRA HD 3D DIAGRAM 1: WHITE BG SVG -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 250" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="400" height="230" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="210" y="30" font-family="Arial, sans-serif" font-size="12.5" font-weight="bold" fill="#0F172A" text-anchor="middle">PARLIAMENTARY EXECUTIVE: DUAL ARCHITECTURE</text>
        
        <!-- Nominal Head Box (Left) -->
        <rect x="25" y="50" width="175" height="135" rx="8" fill="#FDF4FF" stroke="#A855F7" stroke-width="2"/>
        <text x="112" y="70" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#7E22CE" text-anchor="middle">NOMINAL HEAD (DE JURE)</text>
        <text x="112" y="85" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#8E2DE2" text-anchor="middle">PRESIDENT OF INDIA</text>
        <line x1="35" y1="92" x2="190" y2="92" stroke="#E9D5FF" stroke-width="1.5"/>
        <text x="112" y="108" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Head of State (Unity Symbol)</text>
        <text x="112" y="123" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Acts on "Aid &amp; Advice" (Art 74)</text>
        <text x="112" y="138" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Supreme Commander of Forces</text>
        <text x="112" y="153" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Moral Arbiter in Hung Parl.</text>
        <text x="112" y="172" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#9333EA" text-anchor="middle">Reign, Not Rule</text>

        <!-- Real Head Box (Right) -->
        <rect x="220" y="50" width="175" height="135" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
        <text x="307" y="70" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">REAL HEAD (DE FACTO)</text>
        <text x="307" y="85" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#2563EB" text-anchor="middle">PRIME MINISTER &amp; CABINET</text>
        <line x1="230" y1="92" x2="385" y2="92" stroke="#BFDBFE" stroke-width="1.5"/>
        <text x="307" y="108" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Head of Government</text>
        <text x="307" y="123" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Exercises Actual Executive Power</text>
        <text x="307" y="138" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Formulates National Policies</text>
        <text x="307" y="153" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Accountable to Lok Sabha</text>
        <text x="307" y="172" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#1D4ED8" text-anchor="middle">Rule, Command &amp; Govern</text>

        <!-- Base Accountability Banner -->
        <rect x="25" y="195" width="370" height="32" rx="6" fill="#1E293B"/>
        <text x="210" y="215" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#F8FAFC" text-anchor="middle">COLLECTIVE RESPONSIBILITY TO LOK SABHA (ARTICLE 75(3))</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The structural bifurcation between the constitutional Head of State and the political Head of Government.
    </div>
  </div>

  <!-- SECTION 2: WHY CONSTITUTIONAL HEAD IS NEEDED -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 34px;">2. Why Does the Parliamentary System Need a Constitutional Head?</h2>

  <p>In a parliamentary democracy, the Prime Minister and cabinet ministers are partisan political actors belonging to a specific political party. Why then did the Constitution create a separate, ceremonial office of the <b style="color: #8E2DE2;">President of India</b>?</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 22px;">(i) Distinct Separation of the State from the Government</h3>
  <p>Political theory draws a vital distinction between the <b style="color: #8E2DE2;">State</b> and the <b style="color: #8E2DE2;">Government</b>. The Government is temporary; it changes with each general election or floor test. The State, by contrast, is the permanent, sovereign embodiment of the entire nation. The President represents the permanent sovereign State, standing above the daily, bitter cut-and-thrust of party politics as an impartial, non-partisan symbol of national dignity and continuity.</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 22px;">(ii) Institutional Safety Anchor During Crises and Hung Parliaments</h3>
  <p>If there were no constitutional head, who would appoint the Prime Minister when no political party secures a clear majority in a general election? Who would ensure that a defeated Prime Minister whose government has lost a no-confidence motion actually vacates office? The President serves as the essential <b style="color: #8E2DE2;">Constitutional Safety Valve</b> &mdash; an impartial umpire who ensures that executive power is peacefully transferred in accordance with the Constitution.</p>

  <!-- SECTION 3: POWERS OF THE PRESIDENT -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 34px;">3. Formal and Real Powers of the President of India (Articles 52–78)</h2>

  <p>The constitutional position of the President of India is modeled on the British Crown &mdash; a constitutional head who reigns but does not govern. Under <b style="color: #8E2DE2;">Article 53</b>, the executive power of the Union is vested in the President. However, this power is qualified by <b style="color: #8E2DE2;">Article 74(1)</b>, which mandates:</p>
  <p style="font-style: italic; color: #CE93D8; padding-left: 15px; border-left: 3px solid #8E2DE2;">
    "There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice."
  </p>
  <p>By the 42nd Amendment (1976), ministerial advice was made strictly binding. The 44th Amendment (1978) introduced a democratic check: the President may require the Council of Ministers to <b style="color: #8E2DE2;">reconsider such advice once</b>; but if the Cabinet returns the advice unaltered, the President is constitutionally bound to sign it.</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 22px;">(i) Genuine Discretionary Powers of the President</h3>
  <p>Although the President is normally bound by ministerial advice, there are critical constitutional moments where the President must exercise independent judgment:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">1. Appointment of the Prime Minister in a Hung Parliament:</b> When no party or pre-poll alliance wins a clear majority in the Lok Sabha, or when a Prime Minister dies suddenly in office without an obvious successor, the President uses personal discretion to invite the leader who, in their assessment, is most likely to command a working majority.</li>
    <li><b style="color: #8E2DE2;">2. Power of Reconsideration (Article 74):</b> The President can send back a Cabinet proposal or ordinance for reconsideration, asking ministers to re-evaluate potential constitutional violations or public interest ramifications. Even if the Cabinet re-submits it, the President’s hesitation acts as a major public moral restraint.</li>
    <li><b style="color: #8E2DE2;">3. Veto Powers Over Legislation (Article 111):</b>
      <br>&bull; <b style="color: #8E2DE2;">Suspensive Veto:</b> The President can return a non-Money Bill to Parliament for reconsideration. (If Parliament passes it again with or without amendments, the President must assent).
      <br>&bull; <b style="color: #8E2DE2;">Pocket Veto:</b> Unlike the US President who must return a bill within 10 days, the Indian Constitution prescribes no time limit for the President to give assent. By simply keeping a bill pending indefinitely on their desk without signing or returning it, the President can effectively kill it. A famous example occurred in 1986 when <b style="color: #8E2DE2;">President Giani Zail Singh</b> exercised a pocket veto over the controversial <i>Indian Post Office (Amendment) Bill</i>, which allowed government interception of private postal mail.
    </li>
    <li><b style="color: #8E2DE2;">4. Dismissal of a Defeated Government / Dissolution of Lok Sabha:</b> If a Council of Ministers that has lost its legislative majority advises the President to dissolve the Lok Sabha, the President is not bound to accept that advice if an alternative stable government can be formed.</li>
  </ul>

  <!-- SECTION 4: ELECTION & POWERS OF PM AND COUNCIL OF MINISTERS -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 34px;">4. Election &amp; Powers of the Prime Minister, Chief Ministers, and Council of Ministers</h2>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 22px;">(i) How Are the Prime Minister and Chief Ministers Elected?</h3>
  <p>Neither the Prime Minister nor State Chief Ministers are directly elected by the public as executives. Under <b style="color: #8E2DE2;">Article 75</b> (for the Union) and <b style="color: #8E2DE2;">Article 164</b> (for States):</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li>The President appoints the Prime Minister. By constitutional convention, the President must appoint the recognized leader of the political party or pre-poll alliance that commands a numerical majority in the elected Lok Sabha.</li>
    <li>The Prime Minister may belong to either House of Parliament (e.g. Indira Gandhi in 1966, Deve Gowda in 1996, and Dr. Manmohan Singh in 2004 were Rajya Sabha members). If a non-MP is appointed Prime Minister or Minister, they must get elected to either House within <b style="color: #8E2DE2;">six months</b>, or vacate office.</li>
    <li>Chief Ministers are similarly appointed by the State Governor as the majority leader in the Legislative Assembly.</li>
  </ul>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 22px;">(ii) Powers and Centrality of the Prime Minister</h3>
  <p>The Prime Minister is described in constitutional theory as the <i>"Keystone of the Cabinet Arch"</i> (Sir Ivor Jennings). The powers of the Prime Minister include:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">Formation and Reshuffling of the Ministry:</b> The President appoints other ministers only on the binding recommendation of the Prime Minister, who determines ministerial portfolios and can demand a minister's resignation at any time. The death or resignation of the Prime Minister automatically dissolves the entire Council of Ministers.</li>
    <li><b style="color: #8E2DE2;">Presiding Over the Cabinet:</b> The PM determines the cabinet agenda, summons meetings, guides deliberations, and harmonizes conflicting ministerial policies.</li>
    <li><b style="color: #8E2DE2;">Sole Link Between President and Cabinet (Article 78):</b> It is the constitutional duty of the Prime Minister to communicate to the President all decisions of the Council of Ministers relating to the administration of the Union and proposals for legislation.</li>
    <li><b style="color: #8E2DE2;">Leader of the Nation:</b> The Prime Minister is the primary national spokesperson, chief architect of foreign relations, and commander-in-chief of national policymaking during domestic and international emergencies.</li>
  </ul>

  <!-- SECTION 5: POWERS OF THE GOVERNOR -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 34px;">5. What Are the Powers of the Governor? (The Dual Role Dilemma)</h2>

  <p>At the state level, the executive structure closely mirrors the Union: the <b style="color: #8E2DE2;">Governor</b> is the constitutional head, and the Chief Minister and Council of Ministers constitute the real executive under <b style="color: #8E2DE2;">Articles 153 to 164</b>. However, the constitutional position of the Governor carries a unique institutional tension unknown to the President of India.</p>

  <!-- ULTRA HD 3D DIAGRAM 2: WHITE BG SVG -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 420 250" style="width: 100%; height: auto; max-width: 400px; display: block;" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="400" height="230" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <text x="210" y="30" font-family="Arial, sans-serif" font-size="12.5" font-weight="bold" fill="#0F172A" text-anchor="middle">THE GOVERNOR'S DUAL CONSTITUTIONAL ROLE (ART 153-164)</text>
        
        <!-- Central Emblem -->
        <rect x="135" y="48" width="150" height="30" rx="6" fill="#F5F3FF" stroke="#8E2DE2" stroke-width="2"/>
        <text x="210" y="68" font-family="Arial, sans-serif" font-size="10.5" font-weight="bold" fill="#6B21A8" text-anchor="middle">GOVERNOR OF STATE</text>

        <!-- Role 1: Constitutional Head -->
        <rect x="25" y="92" width="175" height="135" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="112" y="112" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">CONSTITUTIONAL HEAD</text>
        <line x1="35" y1="120" x2="190" y2="120" stroke="#BFDBFE" stroke-width="1"/>
        <text x="112" y="136" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Nominal head of State Govt</text>
        <text x="112" y="151" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Acts on Aid &amp; Advice of CM</text>
        <text x="112" y="166" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Appoints Chief Minister</text>
        <text x="112" y="181" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Summons State Assembly</text>
        <text x="112" y="210" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#2563EB" text-anchor="middle">Symbol of State Democracy</text>

        <!-- Role 2: Agent of Centre -->
        <rect x="220" y="92" width="175" height="135" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.5"/>
        <text x="307" y="112" font-family="Arial, sans-serif" font-size="9.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">REPRESENTATIVE OF CENTRE</text>
        <line x1="230" y1="120" x2="385" y2="120" stroke="#FECACA" stroke-width="1"/>
        <text x="307" y="136" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Appointed by President</text>
        <text x="307" y="151" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Serves at President's Pleasure</text>
        <text x="307" y="166" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Reserving Bills (Art 200/201)</text>
        <text x="307" y="181" font-family="Arial, sans-serif" font-size="8" fill="#1E293B" text-anchor="middle">&bull; Recommends Art 356 Rule</text>
        <text x="307" y="210" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#DC2626" text-anchor="middle">Federal Sentinel / Pivot</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The delicate constitutional dualism of the Governor bridging State autonomy with national federal integrity.
    </div>
  </div>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 22px;">(i) The Governor's Dual Constitutional Role</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">1. Constitutional Head of the State:</b> The Governor acts on the mandatory aid and advice of the State Council of Ministers headed by the Chief Minister (Article 163).</li>
    <li><b style="color: #8E2DE2;">2. Representative / Agent of the Union Government:</b> The Governor is not elected by the people of the state; they are appointed directly by the President (on the advice of the Union Cabinet) and hold office <b style="color: #8E2DE2;">"during the pleasure of the President"</b> (Article 156), meaning they can be removed or transferred by the Centre at will without judicial cause.</li>
  </ul>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 22px;">(ii) Specific Discretionary Powers of the Governor</h3>
  <p>Unlike the President, whose discretion is mostly implicit or situational, <b style="color: #8E2DE2;">Article 163(2)</b> explicitly recognizes that the Governor possesses discretionary powers where ministerial advice is not binding:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #8E2DE2;">Reservation of State Bills for Presidential Assent (Articles 200 &amp; 201):</b> The Governor can withhold assent to a bill passed by the state legislature and reserve it for the consideration of the President (compulsory if the bill endangers the constitutional position of the High Court).</li>
    <li><b style="color: #8E2DE2;">Recommending President's Rule (Article 356):</b> The Governor submits a confidential report to the President recommending that the government of the state cannot be carried on in accordance with the provisions of the Constitution. This has historically been a major source of bitter Centre-State conflict.</li>
    <li><b style="color: #8E2DE2;">Appointment of Chief Minister in a Hung Assembly:</b> Selecting which coalition leader to invite and fixing the mandatory deadline for a floor test.</li>
  </ul>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid #10B981; border-radius: 6px; padding: 14px 16px; margin: 20px 0;">
    <b style="color: #10B981; font-size: 15px;">💡 Board Exam Presentation Tip (Scoring Full 4/4 Marks):</b>
    <p style="color: #CBD5E1; font-size: 14.5px; margin: 4px 0 0 0;">When asked to compare the President and the Governor, always emphasize two constitutional contrasts:<br>
    <b>1. Mode of Tenure:</b> The President is elected by an electoral college and can only be removed via parliamentary impeachment (Article 61); the Governor is appointed by the Centre and holds office at the pleasure of the President.<br>
    <b>2. Explicit Discretion:</b> While Article 74 does not mention presidential discretion explicitly, Article 163(2) explicitly grants the Governor constitutional discretion whose validity cannot be questioned.</p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 2: SOLUTIONS (Q & A)                           */
/* -------------------------------------------------------------------------- */

export const c11Pol4HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(142, 45, 226, 0.06); border: 1.5px solid #8E2DE2; border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; text-align: center;">
    <h2 style="color: #8E2DE2; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">Board Examination Master Q &amp; A Bank</h2>
    <p style="color: #CE93D8; margin: 0; font-size: 14px;">Class 11 Political Science &bull; Chapter 4: Executive in a Parliamentary System (Official Board Weightage: 4 Marks)</p>
  </div>

  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS) -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 25px;">SECTION A: Very Short Answer Questions (VSAT - 1 &amp; 2 Marks)</h2>

  <!-- Q1 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q1: What is meant by the 'Executive' organ of government?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #8E2DE2;">Answer:</b> The executive is the branch of government responsible for implementing, administering, and enforcing the laws enacted by the legislature, as well as formulating national public policies.</p>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q2: Differentiate between the Nominal Head and the Real Head in a parliamentary system.</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #8E2DE2;">Answer:</b> The <b style="color: #8E2DE2;">Nominal Head</b> (the President) is the ceremonial head of state in whose name all executive acts are conducted, while the <b style="color: #8E2DE2;">Real Head</b> (the Prime Minister) exercises actual governing authority alongside the Cabinet.</p>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q3: What does the principle of 'Collective Responsibility' under Article 75(3) imply?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #8E2DE2;">Answer:</b> It implies that the entire Council of Ministers is collectively answerable to the Lok Sabha; if a vote of no-confidence is passed, all ministers (including those from Rajya Sabha) must resign together.</p>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q4: How did the 44th Constitutional Amendment Act (1978) modify the President's obligation regarding ministerial advice?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #8E2DE2;">Answer:</b> It enabled the President to send back ministerial advice to the Council of Ministers <b style="color: #8E2DE2;">once for reconsideration</b>. However, if the Council re-submits the advice, the President is bound to accept it.</p>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q5: What is a 'Pocket Veto' exercised by the President of India?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #8E2DE2;">Answer:</b> Because the Constitution sets no time limit for presidential assent, the President can exercise a pocket veto by keeping a non-money bill indefinitely pending without giving or refusing assent.</p>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q6: Under what constitutional circumstance can a non-member of Parliament be appointed as Prime Minister?</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #8E2DE2;">Answer:</b> A non-MP can be appointed Prime Minister or minister, but they must become an elected member of either the Lok Sabha or Rajya Sabha within <b style="color: #8E2DE2;">six consecutive months</b>, otherwise they cease to hold office.</p>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q7: State the dual constitutional role of the Governor of an Indian State.</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #8E2DE2;">Answer:</b> The Governor acts in a dual capacity: (1) as the <b style="color: #8E2DE2;">Constitutional Head of the State</b> acting on ministerial advice, and (2) as the <b style="color: #8E2DE2;">Representative/Agent of the Central Government</b> appointed by the President.</p>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q8: Distinguish between the Political Executive and the Permanent Executive.</h3>
    <p style="color: #FFFFFF; margin: 0;"><b style="color: #8E2DE2;">Answer:</b> The <b style="color: #8E2DE2;">Political Executive</b> consists of elected ministers who hold office temporarily based on electoral mandates, whereas the <b style="color: #8E2DE2;">Permanent Executive</b> comprises appointed career civil servants who serve until retirement age.</p>
  </div>

  <!-- SECTION B: SHORT ANSWER QUESTIONS (4 MARKS) -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 34px;">SECTION B: Short Answer Questions (SAT - 4 Marks)</h2>

  <!-- Q9 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q9: Explain why the Constituent Assembly chose the Parliamentary form of government over the Presidential model for India.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #8E2DE2;">Answer:</b> India adopted the Parliamentary system due to four compelling considerations:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #8E2DE2;">1. Continuous Accountability Over Stability:</b> Dr. Ambedkar explained that the presidential model offers stability but only periodic accountability; the parliamentary system offers continuous daily accountability through parliamentary debates and questions.</li>
      <li><b style="color: #8E2DE2;">2. Long Institutional Experience:</b> Indian leaders had accumulated decades of practical experience operating legislative councils and provincial cabinets under the 1919 and 1935 Acts.</li>
      <li><b style="color: #8E2DE2;">3. Prevention of Authoritarianism:</b> Concentrating total executive authority in a single directly elected President carried the severe risk of personality cults and dictatorship in a deeply divided, newly independent country.</li>
      <li><b style="color: #8E2DE2;">4. Avoiding Legislative-Executive Deadlocks:</b> Parliamentary executive avoids the chronic administrative paralysis seen in the US when the presidency and congress are controlled by rival political parties.</li>
    </ul>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q10: Why does a parliamentary system require a separate Constitutional Head of State?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #8E2DE2;">Answer:</b> The parliamentary system requires a constitutional head for four critical functions:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #8E2DE2;">1. Distinguishing State from Government:</b> The government is partisan and changes after elections; the constitutional head represents the permanent, sovereign State standing above party rivalries.</li>
      <li><b style="color: #8E2DE2;">2. Non-Partisan Arbiter in Hung Parliaments:</b> When no party wins a clear majority, the constitutional head exercises impartial discretion to invite the leader most capable of commanding a majority.</li>
      <li><b style="color: #8E2DE2;">3. Umpire of Democratic Rules:</b> The President ensures that outgoing governments defeated on floor tests peacefully transfer power and do not unconstitutionally cling to office.</li>
      <li><b style="color: #8E2DE2;">4. Moral Safety Valve:</b> Possesses the power to advise, encourage, and warn the cabinet, asking it to reconsider unconstitutional or rushed policies under Article 74.</li>
    </ul>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q11: Discuss the discretionary powers exercised by the President of India under the Constitution.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #8E2DE2;">Answer:</b> Although generally bound by ministerial advice, the President exercises real independent discretion in four situations:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #8E2DE2;">1. Appointment of the Prime Minister:</b> In a hung parliament where no single party or pre-poll alliance commands a majority, the President uses personal judgment to appoint the prospective leader.</li>
      <li><b style="color: #8E2DE2;">2. Returning Advice for Reconsideration:</b> Under Article 74, the President can send back a cabinet decision or ordinance once for reconsideration.</li>
      <li><b style="color: #8E2DE2;">3. Exercise of Pocket Veto:</b> The President can withhold assent indefinitely on non-money bills, as demonstrated by President Zail Singh regarding the Postal Bill in 1986.</li>
      <li><b style="color: #8E2DE2;">4. Rejecting Dissolution Advice:</b> If a defeated Council of Ministers that has lost legislative confidence recommends dissolving the Lok Sabha, the President can reject it if an alternative government can be formed.</li>
    </ul>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q12: How are the Prime Minister and State Chief Ministers appointed according to constitutional conventions?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #8E2DE2;">Answer:</b> Appointments of Prime Minister and Chief Ministers follow well-defined conventions:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #8E2DE2;">1. Majority Principle:</b> Under Article 75 (for PM) and Article 164 (for CM), the President or Governor must appoint the recognized leader of the majority party in the elected lower house.</li>
      <li><b style="color: #8E2DE2;">2. Coalition Scenarios:</b> If no party wins a clear majority, the head of state invites the leader of the largest pre-poll alliance, post-poll coalition, or single largest party, mandating a floor test within a specified time.</li>
      <li><b style="color: #8E2DE2;">3. Membership Requirement:</b> The appointee may belong to either House of Parliament or the State Legislature.</li>
      <li><b style="color: #8E2DE2;">4. Six-Month Grace Period:</b> If a non-legislator is appointed, they must be elected to either house within six consecutive months or relinquish office.</li>
    </ul>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q13: Why is the Prime Minister described as the "Keystone of the Cabinet Arch"? Explain four major powers.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #8E2DE2;">Answer:</b> The Prime Minister is the central pivot of the parliamentary system, exercising four supreme powers:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #8E2DE2;">1. Creation and Shuffling of Ministry:</b> The President appoints other ministers only on the advice of the PM. The PM allocates and reshuffles portfolios and can dismiss any minister at will.</li>
      <li><b style="color: #8E2DE2;">2. Leadership of the Cabinet:</b> The PM summons cabinet meetings, determines the legislative agenda, presides over discussions, and coordinates conflicting departmental policies.</li>
      <li><b style="color: #8E2DE2;">3. Chief Link to the President (Article 78):</b> The PM communicates all cabinet decisions and legislative proposals to the President.</li>
      <li><b style="color: #8E2DE2;">4. National Leader:</b> As the leader of the Lok Sabha and chief national spokesperson, the PM represents India globally and shapes national domestic and foreign policies.</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q14: Explain the discretionary powers of the State Governor under Article 163 and why they cause Centre-State friction.</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #8E2DE2;">Answer:</b> The Governor's discretionary powers under Article 163 frequently ignite federal tensions:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #8E2DE2;">1. Reserving State Bills (Articles 200 &amp; 201):</b> The Governor can withhold assent and reserve bills passed by the state legislature for presidential consideration, occasionally stalling state welfare laws.</li>
      <li><b style="color: #8E2DE2;">2. Recommending President's Rule (Article 356):</b> The Governor sends confidential reports recommending the dismissal of elected state governments, historically abused by ruling central parties.</li>
      <li><b style="color: #8E2DE2;">3. Hung Assembly Discretion:</b> In hung assembly scenarios, governors have faced allegations of partisan bias when inviting alliance leaders or fixing floor test deadlines.</li>
      <li><b style="color: #8E2DE2;">4. Holding Office at Centre's Pleasure:</b> Because the Governor can be dismissed at will by the Union Government (Article 156), governors often act as partisan agents of the ruling central party.</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(0,0,0,0.25); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q15: What role does the Permanent Executive (Civil Services) play in supporting the Political Executive?</h3>
    <p style="color: #FFFFFF; margin: 0 0 8px 0;"><b style="color: #8E2DE2;">Answer:</b> The Permanent Executive (bureaucracy) performs four indispensable administrative functions:</p>
    <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
      <li><b style="color: #8E2DE2;">1. Policy Formulation Assistance:</b> Civil servants provide expert technical advice, historical precedent, and administrative data to ministers during drafting of laws.</li>
      <li><b style="color: #8E2DE2;">2. Administrative Continuity:</b> While political cabinets change frequently after elections, career bureaucrats ensure that day-to-day administration and public services run uninterrupted.</li>
      <li><b style="color: #8E2DE2;">3. Implementation of Welfare Schemes:</b> Field officers (District Magistrates, Commissioners) supervise the ground-level execution of health, education, infrastructure, and disaster relief programs.</li>
      <li><b style="color: #8E2DE2;">4. Non-Partisan Neutrality:</b> Civil servants are constitutionally expected to execute laws neutrally, irrespective of which political party forms the elected government.</li>
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

export const c11Pol4Mcqs: MCQ[] = [
  // Tier 1: Direct Recall (Easy)
  {
    id: "c11-pol-4-mcq-1",
    question: "Under which Article of the Constitution is the executive power of the Union vested in the President of India?",
    options: [
      "A):   Article 52",
      "B):   Article 53",
      "C):   Article 74",
      "D):   Article 75",
    ],
    correctAnswer: "b",
    explanation: "Article 53 states that the executive power of the Union shall be vested in the President and exercised either directly or through subordinate officers.",
  },
  {
    id: "c11-pol-4-mcq-2",
    question: "Which Article mandates that there shall be a Council of Ministers with the Prime Minister at the head to 'aid and advise' the President?",
    options: [
      "A):   Article 74(1)",
      "B):   Article 75(3)",
      "C):   Article 78",
      "D):   Article 76",
    ],
    correctAnswer: "a",
    explanation: "Article 74(1) establishes that there shall be a Council of Ministers headed by the Prime Minister to aid and advise the President, whose advice is binding.",
  },
  {
    id: "c11-pol-4-mcq-3",
    question: "According to Article 75(3), to which House of Parliament is the Council of Ministers collectively responsible?",
    options: [
      "A):   Rajya Sabha only",
      "B):   Lok Sabha only",
      "C):   Both Houses of Parliament jointly",
      "D):   The Supreme Court of India",
    ],
    correctAnswer: "b",
    explanation: "Article 75(3) specifically provides that the Council of Ministers shall be collectively responsible to the House of the People (Lok Sabha).",
  },
  {
    id: "c11-pol-4-mcq-4",
    question: "Which Constitutional Amendment enabled the President to send back ministerial advice once for reconsideration?",
    options: [
      "A):   42nd Amendment Act (1976)",
      "B):   44th Amendment Act (1978)",
      "C):   52nd Amendment Act (1985)",
      "D):   86th Amendment Act (2002)",
    ],
    correctAnswer: "b",
    explanation: "The 44th Amendment Act (1978) amended Article 74, enabling the President to require the Council of Ministers to reconsider its advice once.",
  },
  {
    id: "c11-pol-4-mcq-5",
    question: "What is the maximum period for which a person who is not a member of Parliament can remain a Union Minister or Prime Minister?",
    options: [
      "A):   3 months",
      "B):   6 months",
      "C):   1 year",
      "D):   5 years",
    ],
    correctAnswer: "b",
    explanation: "Under Article 75(5), a minister who for any period of six consecutive months is not a member of either House of Parliament ceases to be a minister.",
  },
  {
    id: "c11-pol-4-mcq-6",
    question: "Who among the following Presidents famously exercised a 'Pocket Veto' on the Indian Post Office (Amendment) Bill in 1986?",
    options: [
      "A):   Dr. Rajendra Prasad",
      "B):   Dr. S. Radhakrishnan",
      "C):   Giani Zail Singh",
      "D):   Dr. A.P.J. Abdul Kalam",
    ],
    correctAnswer: "c",
    explanation: "President Giani Zail Singh exercised a pocket veto in 1986 by keeping the Indian Post Office (Amendment) Bill indefinitely on his desk without signing or returning it.",
  },
  {
    id: "c11-pol-4-mcq-7",
    question: "Under which Article is it the constitutional duty of the Prime Minister to furnish administrative information to the President?",
    options: [
      "A):   Article 74",
      "B):   Article 75",
      "C):   Article 78",
      "D):   Article 80",
    ],
    correctAnswer: "c",
    explanation: "Article 78 defines the duties of the Prime Minister to communicate to the President all decisions of the Council of Ministers and legislative proposals.",
  },
  {
    id: "c11-pol-4-mcq-8",
    question: "How long does a State Governor hold office under Article 156 of the Indian Constitution?",
    options: [
      "A):   A fixed term of 6 years without removal",
      "B):   During the pleasure of the President",
      "C):   Until the Chief Minister stays in power",
      "D):   Until the age of 70 years",
    ],
    correctAnswer: "b",
    explanation: "Article 156(1) states that the Governor shall hold office during the pleasure of the President, meaning they can be recalled or removed by the Centre at any time.",
  },

  // Tier 2: Conceptual & Comparative (Moderate)
  {
    id: "c11-pol-4-mcq-9",
    question: "Why did Dr. B.R. Ambedkar advocate a Parliamentary executive over a Presidential executive for independent India?",
    options: [
      "A):   Because the presidential system is illegal under international law",
      "B):   Because the parliamentary system provides daily assessment and continuous accountability to the legislature",
      "C):   Because British officers forced India to adopt it",
      "D):   Because presidential systems do not have any courts",
    ],
    correctAnswer: "b",
    explanation: "Dr. Ambedkar highlighted that while the presidential system offers stability, the parliamentary system offers more daily assessment and continuous accountability to the legislature.",
  },
  {
    id: "c11-pol-4-mcq-10",
    question: "What occurs automatically if the Prime Minister of India resigns or passes away while in office?",
    options: [
      "A):   The senior-most minister automatically becomes Prime Minister",
      "B):   The entire Council of Ministers stands dissolved automatically",
      "C):   The President takes over direct permanent governing power",
      "D):   General elections must be declared within 24 hours",
    ],
    correctAnswer: "b",
    explanation: "Because the Prime Minister is the keystone of the cabinet arch, their resignation or demise automatically dissolves the entire Council of Ministers.",
  },
  {
    id: "c11-pol-4-mcq-11",
    question: "Which of the following describes a 'Semi-Presidential' executive system?",
    options: [
      "A):   An executive where the monarch has total dictatorial powers",
      "B):   A system with both a directly elected President with significant powers and a Prime Minister responsible to parliament (e.g. France)",
      "C):   A system where elections are held every 10 years",
      "D):   A system where only civil servants make policies",
    ],
    correctAnswer: "b",
    explanation: "In a semi-presidential system (like France or Russia), there is a directly elected President alongside a Prime Minister and cabinet who are responsible to parliament.",
  },
  {
    id: "c11-pol-4-mcq-12",
    question: "Under Article 200, which of the following actions can a Governor take on a bill passed by the state legislature?",
    options: [
      "A):   Give assent, withhold assent, return for reconsideration, or reserve it for the President",
      "B):   Dismiss the legislature immediately",
      "C):   Send the bill to the United Nations",
      "D):   Enact the bill as a central law directly",
    ],
    correctAnswer: "a",
    explanation: "Under Article 200, the Governor may assent to the bill, withhold assent, return it for reconsideration (if not a Money Bill), or reserve it for the President's consideration.",
  },
  {
    id: "c11-pol-4-mcq-13",
    question: "In which of the following situations does the President of India exercise real independent discretion?",
    options: [
      "A):   In declaring war without consulting the cabinet",
      "B):   In appointing the Prime Minister when no single party commands a clear majority in a hung parliament",
      "C):   In rejecting a Money Bill passed by Parliament",
      "D):   In appointing Supreme Court judges without any consultation",
    ],
    correctAnswer: "b",
    explanation: "In a hung parliament with no clear majority, the President exercises genuine discretion to select the leader most likely to command majority confidence.",
  },
  {
    id: "c11-pol-4-mcq-14",
    question: "Which constitutional principle requires all ministers to publicly support all cabinet decisions or resign if they disagree?",
    options: [
      "A):   Separation of Powers",
      "B):   Cabinet Solidarity and Collective Responsibility",
      "C):   Judicial Immunity",
      "D):   Federal Primacy",
    ],
    correctAnswer: "b",
    explanation: "Collective responsibility requires cabinet solidarity: every minister must defend cabinet decisions publicly; if a minister disagrees, they are obligated to resign.",
  },
  {
    id: "c11-pol-4-mcq-15",
    question: "Who among the following served as Prime Minister of India while being a member of the Rajya Sabha at the time of appointment?",
    options: [
      "A):   Lal Bahadur Shastri",
      "B):   Dr. Manmohan Singh",
      "C):   Atal Bihari Vajpayee",
      "D):   Rajiv Gandhi",
    ],
    correctAnswer: "b",
    explanation: "Dr. Manmohan Singh (in 2004 and 2009) and Indira Gandhi (in 1966) were members of the Rajya Sabha when appointed Prime Minister.",
  },

  // Tier 3: Analytical & Multi-Statement (Advance)
  {
    id: "c11-pol-4-mcq-16",
    question: "Consider the following statements regarding the Governor of a State:\n1. The Governor is elected by the members of the State Legislative Assembly.\n2. The Governor holds office during the pleasure of the President.\n3. The Governor has explicit discretionary powers under Article 163.\nWhich of the statements given above are CORRECT?",
    options: [
      "A):   1 and 2 only",
      "B):   2 and 3 only",
      "C):   1 and 3 only",
      "D):   1, 2, and 3",
    ],
    correctAnswer: "b",
    explanation: "Statement 1 is incorrect because the Governor is appointed by the President, not elected by MLAs. Statements 2 and 3 are correct under Articles 156 and 163.",
  },
  {
    id: "c11-pol-4-mcq-17",
    question: "Which of the following is a key feature distinguishing the Permanent Executive from the Political Executive?",
    options: [
      "A):   Permanent executives are directly elected by voters in general elections",
      "B):   Permanent executives provide expert administrative continuity and serve until retirement regardless of political change",
      "C):   Permanent executives formulate all political party manifestos",
      "D):   Permanent executives must resign whenever a new Prime Minister takes office",
    ],
    correctAnswer: "b",
    explanation: "The Permanent Executive (civil services) is appointed through competitive merit examinations and remains in office across political changes, ensuring administrative continuity.",
  },
  {
    id: "c11-pol-4-mcq-18",
    question: "Assertion (A): The President of India cannot dismiss a Prime Minister who commands the confidence of the Lok Sabha.\nReason (R): Under Article 74, the President is constitutionally bound to act in accordance with the aid and advice of the Council of Ministers headed by the Prime Minister.",
    options: [
      "A):   Both A and R are true, and R is the correct explanation of A",
      "B):   Both A and R are true, but R is NOT the correct explanation of A",
      "C):   A is true, but R is false",
      "D):   A is false, but R is true",
    ],
    correctAnswer: "a",
    explanation: "Both statements are true. As long as the Prime Minister enjoys majority support in the Lok Sabha, their advice binds the President, and they cannot be arbitrarily dismissed.",
  },
  {
    id: "c11-pol-4-mcq-19",
    question: "Match List-I (Executive Type) with List-II (Country Example):\n(p) Presidential Executive &mdash; (1) France / Russia\n(q) Parliamentary Executive &mdash; (2) United States of America\n(r) Semi-Presidential Executive &mdash; (3) India / United Kingdom\nChoose the correct code:",
    options: [
      "A):   p-2, q-3, r-1",
      "B):   p-1, q-2, r-3",
      "C):   p-3, q-2, r-1",
      "D):   p-2, q-1, r-3",
    ],
    correctAnswer: "a",
    explanation: "Presidential is USA (2), Parliamentary is India/UK (3), and Semi-Presidential is France/Russia (1).",
  },
  {
    id: "c11-pol-4-mcq-20",
    question: "Which landmark judgment of the Supreme Court held that the power to impose President's Rule under Article 356 is subject to judicial review and the floor test is the only valid method to determine legislative majority?",
    options: [
      "A):   Kesavananda Bharati Case (1973)",
      "B):   S.R. Bommai v. Union of India (1994)",
      "C):   Minerva Mills Case (1980)",
      "D):   Golaknath Case (1967)",
    ],
    correctAnswer: "b",
    explanation: "In S.R. Bommai v. Union of India (1994), the Supreme Court ruled that Article 356 is subject to judicial review and that the floor of the Assembly is the sole forum to test majority support.",
  },
];
