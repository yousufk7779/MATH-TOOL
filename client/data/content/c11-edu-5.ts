// Class 11 Education Unit 5: Guidance and Counseling (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #FF8A65 (Deep Coral / Warm Sunset Gradient)

const themeColor = "#FF8A65";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Edu5HtmlOverview = `
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
  <div style="background: rgba(255, 138, 101, 0.06); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">🧭 Quick Glossary &amp; Core Guidance Concepts</h2>
    <p class="text-center" style="color: #FFCCBC; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Unit 5: Guidance and Counseling (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Guidance:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A continuous, personalized assistance provided by a competent person to help an individual discover, understand, and develop their latent potential, make intelligent life choices, and achieve self-direction.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Counseling:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The intimate, confidential, face-to-face specialized core of guidance where a professionally trained counselor assists a client (counselee) in resolving deep-seated emotional conflicts, maladjustments, or decision paralysis.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Educational Guidance:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Assistance rendered to students regarding school adjustment, selection of curricula, study habits, overcoming academic difficulties, and preparing for higher education.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Vocational Guidance:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Assistance given to an individual to choose, prepare for, enter upon, and progress successfully in an occupation suited to their unique aptitudes and interests.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Carl Rogers' Client-Centered Approach:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A non-directive counseling philosophy emphasizing unconditional positive regard, genuine empathy, and the counselee's inherent capacity for self-healing and personal growth.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 5.1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">5.1 Meaning and Principles of Guidance</h2>

  <p>In our modern complex, fast-changing, and hyper-competitive society, human life is full of bewildering dilemmas. Adolescents and young students face a maze of academic choices, career paths, and emotional tensions. Guidance is that compass which helps the individual navigate life's stormy seas with clarity and self-confidence.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Standard Definitions of Guidance</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Arthur J. Jones:</b> <i>"Guidance involves personal help given by someone; it is designed to assist a person to decide where he wants to go, what he wants to do, or how he can best accomplish his purpose."</i></li>
    <li><b style="color: ${themeColor};">Crow and Crow:</b> <i>"Guidance is assistance made available by personally qualified and adequately trained men or women to an individual of any age to help him manage his own life activities, develop his own point of view, make his own decisions, and carry his own burdens."</i></li>
    <li><b style="color: ${themeColor};">Ruth Strang:</b> <i>"Guidance is a process of helping every individual, through his own efforts, to discover and develop his potentialities for his personal happiness and social usefulness."</i></li>
  </ul>

  <!-- PRINCIPLES OF GUIDANCE -->
  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Universal Principles of Guidance</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">1. Guidance is a Continuous, Lifelong Process:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        It is not an emergency medicine administered once during crisis; it begins in early childhood and continues through adolescence, adulthood, and retirement.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">2. Respect for Individual Differences:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        No two human beings possess identical abilities, temperaments, or interests. Guidance treats every individual as a unique personality, rejecting assembly-line standardized formulas.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">3. Guidance is for All, Not Only Problem Cases:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        A major misconception is that guidance is only for maladjusted or failed students. Guidance is developmental and preventive &mdash; gifted, average, and slow learners all require guidance.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">4. Guidance Leads to Self-Direction (Not Imposition):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        The guide never dictates, commands, or imposes decisions on the individual. The ultimate objective is to empower the individual to make their own responsible choices independently.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: THREE PILLARS (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Central Hub: Guidance -->
        <circle cx="220" cy="110" r="48" fill="#FF8A65" stroke="#E64A19" stroke-width="2.5" />
        <text x="220" y="105" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">TOTAL</text>
        <text x="220" y="122" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">GUIDANCE</text>

        <!-- Pillar 1: Educational (Top Left) -->
        <rect x="20" y="20" width="135" height="65" rx="6" fill="#FFF7ED" stroke="#EA580C" stroke-width="2" />
        <text x="87" y="42" fill="#EA580C" font-size="11" font-weight="bold" text-anchor="middle">1. EDUCATIONAL</text>
        <text x="87" y="58" fill="#475569" font-size="9" text-anchor="middle">&bull; Course Selection</text>
        <text x="87" y="72" fill="#475569" font-size="9" text-anchor="middle">&bull; Study Skills &amp; Exams</text>
        <line x1="155" y1="65" x2="185" y2="85" stroke="#EA580C" stroke-width="2" />

        <!-- Pillar 2: Vocational (Top Right) -->
        <rect x="285" y="20" width="135" height="65" rx="6" fill="#FFF7ED" stroke="#0284C7" stroke-width="2" />
        <text x="352" y="42" fill="#0284C7" font-size="11" font-weight="bold" text-anchor="middle">2. VOCATIONAL</text>
        <text x="352" y="58" fill="#475569" font-size="9" text-anchor="middle">&bull; Career Exploration</text>
        <text x="352" y="72" fill="#475569" font-size="9" text-anchor="middle">&bull; Job Market Readiness</text>
        <line x1="285" y1="65" x2="255" y2="85" stroke="#0284C7" stroke-width="2" />

        <!-- Pillar 3: Personal/Social (Bottom Center) -->
        <rect x="145" y="150" width="150" height="58" rx="6" fill="#FFF7ED" stroke="#16A34A" stroke-width="2" />
        <text x="220" y="172" fill="#16A34A" font-size="11" font-weight="bold" text-anchor="middle">3. PERSONAL / SOCIAL</text>
        <text x="220" y="188" fill="#475569" font-size="9" text-anchor="middle">&bull; Emotional Adjustment &amp; Peers</text>
        <line x1="220" y1="150" x2="220" y2="158" stroke="#16A34A" stroke-width="2" />
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Three Foundational Pillars of Guidance: Educational, Vocational, and Personal-Social.
    </div>
  </div>

  <!-- SECTION 5.2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">5.2 Purpose of Guidance for Children and Adolescents</h2>

  <p>Human development reaches its most volatile, tumultuous phase during adolescence &mdash; famously characterized by psychologist <b>G. Stanley Hall</b> as a period of <i>"Storm and Stress"</i> (Sturm und Drang). Children and teenagers undergo rapid physiological, hormonal, cognitive, and social transformations that require specialized guidance.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Why Guidance is Vital for Children</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Transition from Home to School:</b> Helps tender toddlers overcome separation anxiety and adjust to unfamiliar classroom routines.</li>
    <li><b style="color: ${themeColor};">Early Detection of Learning Deficits:</b> Identifies speech difficulties, hearing impairments, dyslexia, and ADHD before they cause permanent academic trauma.</li>
    <li><b style="color: ${themeColor};">Fostering Social Socialization:</b> Teaches sharing, cooperation, empathy, and emotional self-control in peer groups.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Purpose of Guidance for Adolescents</h3>
  <div style="display: flex; flex-direction: column; gap: 10px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">1. Coping with Physical &amp; Hormonal Changes:</b> Adolescents experience sudden growth spurts, sexual maturation, and bodily consciousness. Guidance dispels anxiety and misinformation.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">2. Resolving Identity Crisis &amp; Emotional Turbulence:</b> As Erik Erikson noted, teenagers battle "Identity vs. Role Confusion." Guidance provides emotional grounding and healthy self-esteem.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">3. Overcoming Peer Pressure &amp; Substance Abuse:</b> Shields youth from destructive temptations (smoking, drugs, alcoholism, cyber delinquency, aggressive gangs).
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">4. Career &amp; Stream Decision-Making:</b> Helps Class 10 and 12 students choose academic streams (Arts, Science, Commerce, Vocational) aligned with real aptitudes rather than parental coercion.
    </div>
  </div>

  <!-- SECTION 5.3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">5.3 Counseling: Meaning, Scope, and Importance</h2>

  <p>If guidance is the broad comprehensive umbrella, <b>Counseling is the specialized, beating heart of guidance</b>. All counseling is guidance, but not all guidance is counseling. Counseling is an individualized, confidential, face-to-face therapeutic dialogue between a trained professional counselor and a client facing psychological distress.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Definitions of Counseling</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Carl Rogers:</b> <i>"Counseling is a continuous series of direct contacts with the individual which aims to assist him in changing his attitudes and conduct."</i></li>
    <li><b style="color: ${themeColor};">Wrenn:</b> <i>"Counseling is a personal and dynamic relationship between two individuals &mdash; an approach to problem-solving where the client is helped to grow towards self-reliance."</i></li>
    <li><b style="color: ${themeColor};">Gustad:</b> <i>"Counseling is a learning-oriented process carried on in a simple, one-to-one social environment."</i></li>
  </ul>

  <!-- STANDALONE CLEAN DIAGRAM 2: GUIDANCE VS COUNSELING (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer Circle: Guidance -->
        <circle cx="220" cy="110" r="95" fill="#FFF7ED" stroke="#FF8A65" stroke-width="2.5" stroke-dasharray="4 4" />
        <text x="220" y="42" fill="#EA580C" font-size="13" font-weight="bold" text-anchor="middle">GUIDANCE (Broad Umbrella Concept)</text>
        <text x="220" y="58" fill="#475569" font-size="10" text-anchor="middle">Preventive &bull; Group or Individual &bull; Any Qualified Person</text>

        <!-- Inner Circle: Counseling -->
        <circle cx="220" cy="125" r="54" fill="#FF8A65" stroke="#C2410C" stroke-width="2.5" />
        <text x="220" y="118" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">COUNSELING</text>
        <text x="220" y="134" fill="#FFFFFF" font-size="9.5" text-anchor="middle">(The Specialized Core)</text>
        <text x="220" y="148" fill="#FFFFFF" font-size="8.5" text-anchor="middle">Face-to-Face &bull; Confidential</text>
        <text x="220" y="160" fill="#FFFFFF" font-size="8.5" text-anchor="middle">Trained Professional Only</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Structural Hierarchy: Counseling is the specialized, confidential nucleus residing within the broad guidance universe.
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Three Major Types/Approaches to Counseling</h3>
  <div style="display: flex; flex-direction: column; gap: 10px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #FF8A65; border-radius: 4px;">
      <b style="color: #FF8A65;">1. Directive (Counselor-Centered) Counseling &mdash; E. G. Williamson:</b> The counselor plays an active, leading role: analyzes test data, diagnoses the problem, and directly prescribes the solution.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #FF8A65; border-radius: 4px;">
      <b style="color: #FF8A65;">2. Non-Directive (Client-Centered) Counseling &mdash; Carl Rogers:</b> The client is supreme. The counselor never advises or judges; creates a warm, empathetic atmosphere where the client discovers their own solutions.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #FF8A65; border-radius: 4px;">
      <b style="color: #FF8A65;">3. Eclectic Counseling &mdash; F. C. Thorne:</b> A pragmatic synthesis that balances directive and non-directive methods according to the specific needs of the client.
    </div>
  </div>

  <!-- SECTION 5.4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">5.4 Role of the Teacher in Guidance and Counseling</h2>

  <p>The classroom teacher is the frontline sentinel of guidance. While specialized counselors handle deep psychopathology, it is the daily teacher who observes the student's moods, struggles, tears, and breakthroughs. Without the active cooperation of teachers, no school guidance program can survive.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Multifaceted Functions of the Teacher as a Guide</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Primary Observer &amp; Talent Scout:</b> Identifies hidden creative sparks, unusual aptitudes, or sudden declines in performance.</li>
    <li><b style="color: ${themeColor};">Creating a Warm Classroom Climate:</b> Builds an emotionally safe, non-judgmental atmosphere where students are not mocked for mistakes.</li>
    <li><b style="color: ${themeColor};">Diagnosing Learning Impediments:</b> Pinpoints specific academic bottlenecks (dyscalculia, reading deficits, exam panic) and provides remedial instruction.</li>
    <li><b style="color: ${themeColor};">Referral Agent:</b> Acts as the vital bridge recognizing severe emotional distress (depression, suicidal ideation) and referring the child to the professional counselor.</li>
  </ul>

  <!-- SECTION 5.5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">5.5 Role of Other Stakeholders in Guidance and Counseling</h2>

  <p>Guidance is not the isolated monopoly of the school; it is a collective community ecosystem. Effective guidance requires seamless harmony among multiple key stakeholders:</p>

  <!-- STANDALONE CLEAN DIAGRAM 3: STAKEHOLDER ECOSYSTEM (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Center Child -->
        <circle cx="220" cy="110" r="38" fill="#FF8A65" stroke="#C2410C" stroke-width="2.5" />
        <text x="220" y="107" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">THE</text>
        <text x="220" y="122" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">CHILD</text>

        <!-- 1. Parents (Top) -->
        <rect x="155" y="12" width="130" height="42" rx="6" fill="#F8FAFC" stroke="#0284C7" stroke-width="2" />
        <text x="220" y="32" fill="#0284C7" font-size="10.5" font-weight="bold" text-anchor="middle">👨‍👩‍👧 PARENTS</text>
        <text x="220" y="46" fill="#475569" font-size="8.5" text-anchor="middle">Emotional Anchor &amp; Home</text>
        <line x1="220" y1="54" x2="220" y2="72" stroke="#0284C7" stroke-width="2" />

        <!-- 2. Teachers (Right) -->
        <rect x="295" y="89" width="130" height="42" rx="6" fill="#F8FAFC" stroke="#16A34A" stroke-width="2" />
        <text x="360" y="109" fill="#16A34A" font-size="10.5" font-weight="bold" text-anchor="middle">🧑‍🏫 TEACHERS</text>
        <text x="360" y="123" fill="#475569" font-size="8.5" text-anchor="middle">Daily Academic Support</text>
        <line x1="295" y1="110" x2="258" y2="110" stroke="#16A34A" stroke-width="2" />

        <!-- 3. Counselors (Bottom) -->
        <rect x="155" y="165" width="130" height="42" rx="6" fill="#F8FAFC" stroke="#EA580C" stroke-width="2" />
        <text x="220" y="185" fill="#EA580C" font-size="10.5" font-weight="bold" text-anchor="middle">🧠 COUNSELOR</text>
        <text x="220" y="199" fill="#475569" font-size="8.5" text-anchor="middle">Specialized Diagnosis</text>
        <line x1="220" y1="165" x2="220" y2="148" stroke="#EA580C" stroke-width="2" />

        <!-- 4. Community/Peers (Left) -->
        <rect x="15" y="89" width="130" height="42" rx="6" fill="#F8FAFC" stroke="#7C3AED" stroke-width="2" />
        <text x="80" y="109" fill="#7C3AED" font-size="10.5" font-weight="bold" text-anchor="middle">🤝 PEERS &amp; COMM.</text>
        <text x="80" y="123" fill="#475569" font-size="8.5" text-anchor="middle">Socialization &amp; Identity</text>
        <line x1="145" y1="110" x2="182" y2="110" stroke="#7C3AED" stroke-width="2" />
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Collaborative Support Ecosystem: Interlocking harmony between Parents, Teachers, Counselors, and Peers.
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Detailed Roles of Stakeholders</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">1. Parents &amp; Family:</b> The primary psychological foundation. Parents must avoid imposing unfulfilled personal ambitions on their children, eliminate harsh comparison with siblings, and provide affectionate acceptance.</li>
    <li><b style="color: ${themeColor};">2. School Administration (Principal):</b> Allocates physical counseling rooms, ensures confidentiality, organizes career exhibitions, and funds psychological testing batteries.</li>
    <li><b style="color: ${themeColor};">3. Peer Groups:</b> Well-guided peer counseling programs allow teenagers to share anxieties with empathetic friends without fear of adult reprimand.</li>
    <li><b style="color: ${themeColor};">4. Community &amp; Health Agencies:</b> Medical clinics, mental health NGOs, and youth employment exchanges provide real-world vocational internships and clinical psychiatric care.</li>
  </ul>

  <!-- SECTION 5.6 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">5.6 Role of Professional Counselors in Schools</h2>

  <p>In modern education, the <b>Professional School Counselor</b> is an indispensable specialist holding postgraduate credentials in psychology and counseling. Unlike regular teachers who assess and grade students, the professional counselor never grades or judges; they maintain strict professional confidentiality.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Key Professional Responsibilities</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Administering Standardized Psychological Tests:</b> Conducts valid assessments of Intelligence (IQ), Differential Aptitude Tests (DAT), interest inventories, and personality scales.</li>
    <li><b style="color: ${themeColor};">Individual Therapeutic Counseling:</b> Conducts private, confidential therapeutic sessions for trauma, grief, cyber addiction, acute depression, and severe family conflict.</li>
    <li><b style="color: ${themeColor};">Crisis Intervention:</b> Manages emergency situations such as bullying, panic attacks, self-harm risks, and school violence.</li>
    <li><b style="color: ${themeColor};">Organizing Career Information Bureaus:</b> Maintains career libraries, bulletin boards, and invites university representatives and industry experts.</li>
    <li><b style="color: ${themeColor};">Parent &amp; Teacher Consultations:</b> Advises parents and teachers on constructive behavioral management strategies without breaching client privacy.</li>
  </ul>

  <!-- NEP 2020 POLICY CONNECT BOX -->
  <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid #FF8A65; border-radius: 8px; padding: 14px 18px; margin: 25px 0;">
    <h4 style="color: #FF8A65; margin: 0 0 6px 0; font-size: 16px;">🏛️ Modern Relevance: NEP 2020 &amp; 'MANODARPAN' Initiative</h4>
    <p style="margin: 0; color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
      The <b>National Education Policy (NEP 2020)</b> explicitly mandates that every school complex must have access to trained professional counselors and social workers. To counter student mental distress and exam stress, the Government of India launched the <b>'MANODARPAN'</b> initiative under the Ministry of Education, providing national toll-free psychological counseling and mental health support.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                     TAB 2: GOLDEN 25 BOARD MASTER Q&A                      */
/* -------------------------------------------------------------------------- */

export const c11Edu5HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION A HEADER -->
  <div style="background: rgba(255, 138, 101, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer Type Questions (VSAT &bull; 1 &amp; 2 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">12 Questions &bull; Word Limit: 20–30 Words &bull; Direct Recall &amp; Board Facts</span>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q1: Define Guidance according to Arthur J. Jones.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      According to <b style="color: ${themeColor};">Arthur J. Jones:</b>
      <br>Guidance is personal help given to an individual to assist them in deciding where they want to go, what they want to do, and how to best accomplish their purpose.
    </div>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q2: What are the three foundational pillars or types of Guidance?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The three foundational types of guidance are:
      <br>&bull; <b style="color: ${themeColor};">Educational Guidance</b>
      <br>&bull; <b style="color: ${themeColor};">Vocational Guidance</b>
      <br>&bull; <b style="color: ${themeColor};">Personal &amp; Social Guidance</b>
    </div>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q3: State the core principle regarding the continuity of Guidance.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Guidance is a <b style="color: ${themeColor};">continuous, lifelong process</b>. It is not an isolated one-time emergency event; it starts in childhood and extends through life.
    </div>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q4: How did G. Stanley Hall describe the period of Adolescence?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Psychologist G. Stanley Hall famously termed adolescence as a period of <b style="color: ${themeColor};">"Storm and Stress"</b> (<i>Sturm und Drang</i>), marked by rapid biological, hormonal, and emotional turbulence.
    </div>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q5: Define Counseling according to Carl Rogers.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      According to <b style="color: ${themeColor};">Carl Rogers:</b>
      <br>Counseling is a continuous series of direct, face-to-face contacts with the individual that aims to assist the client in changing attitudes and conduct.
    </div>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q6: State two primary differences between Guidance and Counseling.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b>Scope:</b> Guidance is a broad umbrella service; counseling is its specialized, intimate core.<br>
      &bull; <b>Setting:</b> Guidance can be given to large groups; counseling is strictly confidential, face-to-face, and one-on-one.
    </div>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q7: Who developed the "Client-Centered" or Non-Directive approach to Counseling?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Eminent American psychologist <b style="color: ${themeColor};">Carl Rogers</b> developed the Client-Centered (Non-Directive) approach, emphasizing unconditional positive regard and client self-discovery.
    </div>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q8: What is Directive Counseling and who was its chief proponent?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Pioneered by <b style="color: ${themeColor};">E. G. Williamson</b>. In Directive Counseling, the counselor is counselor-centered: actively analyzing data, diagnosing the problem, and prescribing solutions.
    </div>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q9: What is Eclectic Counseling?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Formulated by <b style="color: ${themeColor};">F. C. Thorne</b>, Eclectic Counseling is a flexible synthesis that judiciously combines directive and non-directive techniques to match the unique client.
    </div>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q10: State the primary role of the classroom teacher as a "Referral Agent".</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The teacher identifies early signs of severe psychological distress (trauma, depression, self-harm) and refers the student to the professional school counselor.
    </div>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q11: What is the 'MANODARPAN' initiative launched by the Ministry of Education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      An initiative under NEP 2020 providing a national toll-free helpline, psychosocial counseling, and mental health resources for students, teachers, and parents.
    </div>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q12: State one ethical duty of a professional counselor regarding student information.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Maintaining <b style="color: ${themeColor};">strict professional confidentiality</b> &mdash; never disclosing personal counseling disclosures to peers, other teachers, or public records without consent.
    </div>
  </div>

  <!-- SECTION B HEADER -->
  <div style="background: rgba(255, 138, 101, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION B: Short Answer Type Questions (SAT &bull; 4 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">8 Questions &bull; Word Limit: 80–100 Words &bull; 4 to 5 Themed Bullet Points</span>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q13: State and explain four core principles of an effective Guidance program.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Guidance rests on foundational psychological principles:
      <br>&bull; <b style="color: ${themeColor};">Universal Service for All:</b> Guidance is not restricted to problem children; it caters to average, gifted, and slow learners alike.
      <br>&bull; <b style="color: ${themeColor};">Continuous and Developmental:</b> It operates across all educational and developmental stages from infancy to old age.
      <br>&bull; <b style="color: ${themeColor};">Promotes Self-Direction:</b> Guidance does not make decisions for the individual; it trains the person to make autonomous choices.
      <br>&bull; <b style="color: ${themeColor};">Respect for Individual Uniqueness:</b> Programs are tailored to the distinct aptitudes, abilities, and interests of each learner.
    </div>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q14: Explain the primary objectives and purpose of Guidance for Adolescents.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Adolescents require targeted guidance to navigate intense developmental changes:
      <br>&bull; <b style="color: ${themeColor};">Coping with Bodily Growth:</b> Provides scientific counseling regarding puberty, hormonal surges, and bodily changes.
      <br>&bull; <b style="color: ${themeColor};">Resolving Identity Crisis:</b> Helps adolescents resolve role confusion and establish a coherent self-concept and self-esteem.
      <br>&bull; <b style="color: ${themeColor};">Resisting Harmful Peer Pressures:</b> Fortifies moral resilience against smoking, substance abuse, and cyber deviance.
      <br>&bull; <b style="color: ${themeColor};">Stream and Career Choice:</b> Guides the realistic selection of academic streams (Arts, Science, Vocational) based on aptitude.
    </div>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q15: Compare Directive Counseling and Non-Directive Counseling across four points.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      These two approaches represent contrasting counseling philosophies:
      <br>&bull; <b style="color: ${themeColor};">Proponents:</b> Directive was founded by E. G. Williamson; Non-Directive was developed by Carl Rogers.
      <br>&bull; <b style="color: ${themeColor};">Center of Process:</b> Directive is counselor-centered; Non-Directive is client-centered.
      <br>&bull; <b style="color: ${themeColor};">Role of Counselor:</b> In Directive, the counselor diagnoses and prescribes; in Non-Directive, the counselor facilitates self-discovery without advising.
      <br>&bull; <b style="color: ${themeColor};">Focus:</b> Directive focuses on the objective problem; Non-Directive focuses on the emotional growth of the individual.
    </div>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q16: Describe four key functions of the Classroom Teacher in Guidance and Counseling.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The teacher acts as the frontline observer and mentor in the school:
      <br>&bull; <b style="color: ${themeColor};">Continuous Behavioral Observation:</b> Detects sudden academic drops, withdrawal, anxiety, or aggression in students.
      <br>&bull; <b style="color: ${themeColor};">Providing Remedial Instruction:</b> Diagnoses learning bottlenecks in specific subjects and provides study skills guidance.
      <br>&bull; <b style="color: ${themeColor};">Maintaining Anecdotal Records:</b> Keeps cumulative objective records of student talents, attendance, and social behaviors.
      <br>&bull; <b style="color: ${themeColor};">Referral to Specialists:</b> Connects severely distressed or traumatized students with professional school counselors.
    </div>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q17: Explain the vital role of Parents in the school Guidance program.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Parents form the foundational emotional anchor in a child's development:
      <br>&bull; <b style="color: ${themeColor};">Providing Emotional Security:</b> Offers unconditional love and acceptance, shielding the child from external anxieties.
      <br>&bull; <b style="color: ${themeColor};">Avoiding Unrealistic Pressure:</b> Refrains from imposing parental unfulfilled ambitions or making destructive sibling comparisons.
      <br>&bull; <b style="color: ${themeColor};">Sharing Developmental History:</b> Supplies counselors with background insights regarding home environment, childhood illnesses, and trauma.
      <br>&bull; <b style="color: ${themeColor};">Reinforcing Guidance at Home:</b> Partners with teachers to implement consistent behavioral and study routines.
    </div>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q18: What are the primary functions of a Professional School Counselor?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      A certified school counselor carries specialized clinical responsibilities:
      <br>&bull; <b style="color: ${themeColor};">Psychological Assessment:</b> Administers standardized IQ tests, aptitude batteries (DAT), and personality scales.
      <br>&bull; <b style="color: ${themeColor};">Individual Confidential Therapy:</b> Conducts private therapeutic sessions for anxiety, grief, depression, and trauma.
      <br>&bull; <b style="color: ${themeColor};">Crisis Intervention:</b> Manages emergencies like bullying, panic attacks, and self-harm risks.
      <br>&bull; <b style="color: ${themeColor};">Career Bureau Management:</b> Coordinates career exhibitions, university visits, and vocational counseling.
    </div>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q19: Explain the concept and significance of Vocational Guidance.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Vocational guidance aligns human abilities with occupational avenues:
      <br>&bull; <b style="color: ${themeColor};">Core Purpose:</b> Assists an individual to choose, prepare for, enter into, and succeed in a suitable occupation.
      <br>&bull; <b style="color: ${themeColor};">Prevents Career Mismatch:</b> Stops students from entering fields where they lack aptitude, preventing future frustration.
      <br>&bull; <b style="color: ${themeColor};">Dignity of Labor:</b> Highlights diverse technical and craft careers alongside traditional white-collar professions.
      <br>&bull; <b style="color: ${themeColor};">National Economic Growth:</b> Optimizes human resource allocation by fitting the right person to the right job.
    </div>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q20: How does Peer Group influence act as both a challenge and an asset in Guidance?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Peer relations exert powerful dual impacts on adolescent behavior:
      <br>&bull; <b style="color: ${themeColor};">As a Challenge:</b> Negative peer pressure can draw vulnerable teenagers into smoking, bullying, truancy, and drug experimentation.
      <br>&bull; <b style="color: ${themeColor};">As a Challenge:</b> Fear of peer rejection often forces students to conceal emotional pain and academic struggles.
      <br>&bull; <b style="color: ${themeColor};">As an Asset:</b> Positive peer groups provide emotional belonging, shared identity, and mutual academic support.
      <br>&bull; <b style="color: ${themeColor};">Peer Counseling:</b> Trained peer mentors often reach troubled students far more quickly than adult authority figures.
    </div>
  </div>

  <!-- SECTION C HEADER -->
  <div style="background: rgba(255, 138, 101, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION C: Long Answer Type Questions (LAT &bull; 6 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">5 Comprehensive Board Questions &bull; 3-Tier Answer Blueprint (Intro &rarr; Core Analysis &rarr; Conclusion)</span>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q21: Define Guidance. Elaborate its foundational principles and discuss the three major types of Guidance.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      Guidance is a continuous, personalized developmental process of assisting an individual to understand their innate potential, make intelligent educational and life decisions, and achieve mature self-direction. As Arthur J. Jones stated, guidance helps a person decide where to go, what to do, and how to best accomplish personal goals.
      <br><br>
      <b style="color: ${themeColor};">2. Foundational Principles &amp; Major Types:</b><br>
      &bull; <b>Universal Principles:</b> Guidance is continuous across the lifespan, addresses all students (not just problem cases), respects individual uniqueness, and never imposes decisions.
      <br>&bull; <b>Three Major Types of Guidance:</b>
      <br>&nbsp;&nbsp;&bull; <i>1. Educational Guidance:</i> Assists learners in curriculum selection, cultivating effective study habits, time management, overcoming test anxiety, and planning for higher studies.
      <br>&nbsp;&nbsp;&bull; <i>2. Vocational Guidance:</i> Helps individuals explore career pathways, understand job market trends, assess their own aptitudes (DAT), and achieve job satisfaction.
      <br>&nbsp;&nbsp;&bull; <i>3. Personal &amp; Social Guidance:</i> Assists individuals in solving emotional conflicts, peer friction, familial maladjustments, and developing healthy social relationships.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      Guidance is an indispensable organ of modern education. By integrating educational, vocational, and personal guidance into the school framework, educators nurture balanced, self-directed citizens equipped for 21st-century life.
    </div>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q22: Why is Guidance especially vital during Adolescence? Analyze the major physical, emotional, and career crises faced by teenagers.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      Adolescence (ages 12–18) represents the critical transitional bridge between childhood and adulthood. Coined by G. Stanley Hall as a period of "Storm and Stress," teenagers undergo volcanic biological and psychological metamorphoses that necessitate empathetic guidance.
      <br><br>
      <b style="color: ${themeColor};">2. Analysis of Adolescent Crises:</b><br>
      &bull; <b>Physical &amp; Hormonal Transformations:</b> Rapid puberty growth spurts, voice alterations, and sexual maturation often induce severe bodily self-consciousness, shame, and anxiety if unguided.
      <br>&bull; <b>Identity Crisis &amp; Emotional Turbulence:</b> Erikson's "Identity vs. Role Confusion" manifests intensely. Mood swings, rebellion against parental authority, and existential insecurity require non-judgmental counseling.
      <br>&bull; <b>Peer Pressure &amp; Risk-Taking:</b> Desperate desire for peer acceptance often leads to smoking, alcohol, drug experimentation, aggression, and cyber delinquency.
      <br>&bull; <b>Academic &amp; Career Decision Paralysis:</b> Choosing between competitive streams after Class 10 creates immense exam stress, parental pressure, and fear of failure.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      Without guidance, the emotional storms of adolescence can lead to clinical depression, delinquency, or academic dropout. Empathetic guidance channels adolescent energy toward constructive creative, athletic, and vocational fulfillment.
    </div>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q23: Define Counseling. Distinguish it comprehensively from Guidance and evaluate Directive, Non-Directive, and Eclectic counseling.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      Counseling is the intimate, specialized core of guidance. Carl Rogers defined it as a continuous series of direct, face-to-face contacts with an individual aiming to facilitate changes in attitude and behavior within a confidential therapeutic setting.
      <br><br>
      <b style="color: ${themeColor};">2. Comprehensive Distinction &amp; Three Approaches:</b><br>
      &bull; <b>Guidance vs. Counseling:</b> Guidance is a broad preventive umbrella addressing academic, career, and social choices, often administered in groups. Counseling is a specific, remedial, one-on-one confidential therapeutic intervention for deep emotional conflicts.
      <br>&bull; <b>Three Major Approaches:</b>
      <br>&nbsp;&nbsp;&bull; <i>Directive Counseling (Williamson):</i> Counselor-centered. The counselor assesses data, diagnoses the problem, and actively prescribes remedies. Efficient for intellectual and informational problems, but fosters client dependency.
      <br>&nbsp;&nbsp;&bull; <i>Non-Directive Counseling (Rogers):</i> Client-centered. Emphasizes unconditional positive regard and active listening. The counselor does not advise; the client explores feelings and self-actualizes solutions.
      <br>&nbsp;&nbsp;&bull; <i>Eclectic Counseling (Thorne):</i> Pragmatic synthesis selecting techniques from both directive and non-directive methods according to the evolving needs of the client.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      No single counseling method fits every student. A competent school counselor masterfully practices eclectic counseling, applying directive clarity during informational crises and non-directive empathy during emotional trauma.
    </div>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q24: Discuss the indispensable role of the Classroom Teacher in Guidance and Counseling. How do teachers and professional counselors collaborate?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      While professional counselors provide specialized clinical therapy, the classroom teacher is the daily guardian and frontline observer of the child. A guidance program disconnected from classroom teachers is ineffective and sterile.
      <br><br>
      <b style="color: ${themeColor};">2. Multifaceted Teacher Functions &amp; Collaboration:</b><br>
      &bull; <b>Primary Observer:</b> Notices subtle behavioral red flags &mdash; sudden silence, chronic absenteeism, drop in grades, and social withdrawal.
      <br>&bull; <b>Curriculum &amp; Study Guide:</b> Instructs students in time management, note-taking, memory techniques, and overcoming specific subject difficulties.
      <br>&bull; <b>Creating an Empathetic Classroom Culture:</b> Eliminates bullying and sarcastic humiliation, creating an emotionally safe learning space.
      <br>&bull; <b>Teacher-Counselor Synergy:</b>
      <br>&nbsp;&nbsp;&bull; <i>Referral:</i> The teacher identifies severe trauma and refers the student to the counselor.
      <br>&nbsp;&nbsp;&bull; <i>Consultation:</i> The counselor shares non-confidential pedagogical strategies with the teacher to support the student's classroom reintegration.
      <br>&nbsp;&nbsp;&bull; <i>Follow-up:</i> The teacher monitors daily behavioral progress following therapy.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      Teachers and counselors are two hands of the same healing body. Collaboration between them ensures that academic instruction and psychological wellness proceed hand-in-hand.
    </div>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q25: "Guidance is a collaborative multi-stakeholder ecosystem." Discuss the roles of Parents, School Administration, and Community, with reference to NEP 2020 and MANODARPAN.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      No child grows up inside a school building alone; human development occurs across home, school, and neighborhood environments. Comprehensive guidance demands an integrated partnership among parents, school administrators, professional counselors, and community health agencies.
      <br><br>
      <b style="color: ${themeColor};">2. Multi-Stakeholder Ecosystem Analysis:</b><br>
      &bull; <b>Parents &amp; Families:</b> Provide unconditional emotional warmth. Parents must cease projecting unfulfilled ambitions onto their children and collaborate transparently with school counselors.
      <br>&bull; <b>School Administration &amp; Principals:</b> Provide infrastructure &mdash; soundproof counseling rooms, testing inventories, career libraries, and organizing orientation seminars.
      <br>&bull; <b>Community &amp; Mental Health Agencies:</b> Medical clinics, psychiatric hospitals, child welfare NGOs, and vocational industries provide specialized clinical care and vocational internship exposure.
      <br>&bull; <b>NEP 2020 &amp; MANODARPAN Initiative:</b>
      <br>&nbsp;&nbsp;&bull; NEP 2020 mandates trained counselors in school complexes and emphasizes socio-emotional wellbeing.
      <br>&nbsp;&nbsp;&bull; The Ministry of Education's <i>MANODARPAN</i> initiative operationalized national psychosocial support, toll-free counseling tele-helplines, and mental health advisories during academic stress and pandemic crises.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      When home, school, and community unite in a caring guidance network, the child develops resilience, academic clarity, and psychological health, realizing their highest human potential.
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: 25 SMART INTERACTIVE MCQS                   */
/* -------------------------------------------------------------------------- */

export const c11Edu5Mcqs = [
  {
    "id": "c11-edu-5-mcq-1",
    "question": "Who defined Guidance as 'personal help given by someone to assist a person to decide where he wants to go and what he wants to do'?",
    "options": [
      "A):   Wilhelm Wundt",
      "B):   Arthur J. Jones",
      "C):   Auguste Comte",
      "D):   John B. Watson"
    ],
    "correctAnswer": "b",
    "explanation": "Arthur J. Jones provided this standard definition in 'Principles of Guidance'."
  },
  {
    "id": "c11-edu-5-mcq-2",
    "question": "What are the three universally recognized major types of Guidance?",
    "options": [
      "A):   Educational, Vocational, and Personal-Social",
      "B):   Military, Commercial, and Religious",
      "C):   Primary, Secondary, and Higher",
      "D):   Chemical, Biological, and Physical"
    ],
    "correctAnswer": "a",
    "explanation": "Educational, Vocational, and Personal-Social guidance form the three pillars of guidance services."
  },
  {
    "id": "c11-edu-5-mcq-3",
    "question": "Which psychologist famously described Adolescence as a period of 'Storm and Stress' (Sturm und Drang)?",
    "options": [
      "A):   Carl Rogers",
      "B):   Jean Piaget",
      "C):   G. Stanley Hall",
      "D):   B. F. Skinner"
    ],
    "correctAnswer": "c",
    "explanation": "G. Stanley Hall famously identified adolescence as a period of profound storm and stress."
  },
  {
    "id": "c11-edu-5-mcq-4",
    "question": "Who is the founder of the 'Client-Centered' (Non-Directive) approach to Counseling?",
    "options": [
      "A):   Sigmund Freud",
      "B):   E. G. Williamson",
      "C):   F. C. Thorne",
      "D):   Carl Rogers"
    ],
    "correctAnswer": "d",
    "explanation": "Carl Rogers revolutionized counseling with his non-directive, client-centered humanistic therapy."
  },
  {
    "id": "c11-edu-5-mcq-5",
    "question": "Directive Counseling (Counselor-Centered Counseling) was primarily formulated by:",
    "options": [
      "A):   Carl Rogers",
      "B):   E. G. Williamson",
      "C):   George Payne",
      "D):   Auguste Comte"
    ],
    "correctAnswer": "b",
    "explanation": "E. G. Williamson of Minnesota formulated the directive (counselor-centered) counseling model."
  },
  {
    "id": "c11-edu-5-mcq-6",
    "question": "The synthesis approach that combines elements of both Directive and Non-Directive counseling is known as:",
    "options": [
      "A):   Eclectic Counseling",
      "B):   Aversive Therapy",
      "C):   Authoritarian Guidance",
      "D):   Hypnotic Counseling"
    ],
    "correctAnswer": "a",
    "explanation": "Eclectic Counseling, developed by F. C. Thorne, selects the best methods from directive and non-directive models."
  },
  {
    "id": "c11-edu-5-mcq-7",
    "question": "Which type of guidance specifically assists students in choosing school subjects, improving study habits, and preparing for board examinations?",
    "options": [
      "A):   Marital Guidance",
      "B):   Vocational Guidance",
      "C):   Clinical Guidance",
      "D):   Educational Guidance"
    ],
    "correctAnswer": "d",
    "explanation": "Educational guidance deals with curriculum selection, study skills, and school adjustment."
  },
  {
    "id": "c11-edu-5-mcq-8",
    "question": "Assisting an individual to choose, prepare for, and enter into an occupation suited to their aptitude is known as:",
    "options": [
      "A):   Moral Indoctrination",
      "B):   Personal Counseling",
      "C):   Vocational Guidance",
      "D):   Social Service"
    ],
    "correctAnswer": "c",
    "explanation": "Vocational guidance helps an individual navigate occupational choice and career readiness."
  },
  {
    "id": "c11-edu-5-mcq-9",
    "question": "What is the national initiative launched by the Ministry of Education for psychosocial support and mental health of students?",
    "options": [
      "A):   DIKSHA",
      "B):   MANODARPAN",
      "C):   SWAYAM",
      "D):   NISHTHA"
    ],
    "correctAnswer": "b",
    "explanation": "MANODARPAN is the national platform providing psychological and mental health counseling to students."
  },
  {
    "id": "c11-edu-5-mcq-10",
    "question": "A cardinal ethical rule of professional school counseling is:",
    "options": [
      "A):   Strict professional confidentiality of personal disclosures",
      "B):   Publishing student counseling notes on school notice boards",
      "C):   Giving corporal punishment to stressed students",
      "D):   Grading students with marks after therapy"
    ],
    "correctAnswer": "a",
    "explanation": "Confidentiality is the sacred ethical cornerstone of the professional counselor-client relationship."
  },
  {
    "id": "c11-edu-5-mcq-11",
    "question": "Which of the following best describes the structural relationship between Guidance and Counseling?",
    "options": [
      "A):   Guidance is only for elderly people, while counseling is only for infants",
      "B):   Guidance and counseling are completely opposite and unrelated fields",
      "C):   Guidance is the broad comprehensive umbrella, while Counseling is its intimate, specialized core",
      "D):   Counseling is for animals, while guidance is for machines"
    ],
    "correctAnswer": "c",
    "explanation": "All counseling is guidance, but counseling represents the specialized, one-on-one core of the broad guidance umbrella."
  },
  {
    "id": "c11-edu-5-mcq-12",
    "question": "Why should a guidance counselor NEVER impose a decision upon a student?",
    "options": [
      "A):   Because decisions do not matter in education",
      "B):   Because counselors are forbidden by law from speaking to students",
      "C):   Because students always know everything automatically",
      "D):   Because the ultimate goal of guidance is to cultivate autonomous self-direction and decision-making capacity in the student"
    ],
    "correctAnswer": "d",
    "explanation": "Guidance is not imposition; it empowers the individual to understand themselves and make self-directed choices."
  },
  {
    "id": "c11-edu-5-mcq-13",
    "question": "In Carl Rogers' Client-Centered Therapy, what is meant by 'Unconditional Positive Regard'?",
    "options": [
      "A):   Accepting and respecting the client as a worthy human being without judgment, conditions, or moral condemnation",
      "B):   Always agreeing with everything the client says, even if illegal",
      "C):   Giving financial prizes to the client after each session",
      "D):   Never allowing the client to talk"
    ],
    "correctAnswer": "a",
    "explanation": "Unconditional positive regard means providing total warmth, non-judgmental acceptance, and respect to the client."
  },
  {
    "id": "c11-edu-5-mcq-14",
    "question": "What is the primary role of a Classroom Teacher in relation to the Professional School Counselor?",
    "options": [
      "A):   Conducting deep clinical psychotherapy in the classroom",
      "B):   Acting as a sensitive frontline observer and referral agent who spots distress and connects the child with the counselor",
      "C):   Refusing to talk to the school counselor",
      "D):   Punishing students who visit the counseling room"
    ],
    "correctAnswer": "b",
    "explanation": "The teacher observes student behavior daily and acts as the vital referral agent connecting troubled students to counselors."
  },
  {
    "id": "c11-edu-5-mcq-15",
    "question": "According to developmental psychologist Erik Erikson, which major psycho-social crisis characterizes the adolescent stage?",
    "options": [
      "A):   Autonomy vs. Shame",
      "B):   Trust vs. Mistrust",
      "C):   Integrity vs. Despair",
      "D):   Identity vs. Role Confusion"
    ],
    "correctAnswer": "d",
    "explanation": "Erikson identified 'Identity vs. Role Confusion' as the defining psychological struggle of adolescence."
  },
  {
    "id": "c11-edu-5-mcq-16",
    "question": "Why is the common belief that 'Guidance is only for problematic, delinquent, or failing students' fundamentally flawed?",
    "options": [
      "A):   Because delinquent students are expelled immediately",
      "B):   Because schools do not have failing students",
      "C):   Because guidance is a universal developmental service that helps gifted, average, and slow learners maximize their potential",
      "D):   Because only teachers need guidance"
    ],
    "correctAnswer": "c",
    "explanation": "Guidance is developmental and preventive for all normal individuals, not merely a remedial patch for problem cases."
  },
  {
    "id": "c11-edu-5-mcq-17",
    "question": "A high school student is paralyzed with indecision between choosing Science and Arts streams after Class 10. Which type of guidance does the student urgently require?",
    "options": [
      "A):   Medical Surgical Guidance",
      "B):   Educational and Vocational Guidance",
      "C):   Legal Criminal Guidance",
      "D):   Retirement Guidance"
    ],
    "correctAnswer": "b",
    "explanation": "Selecting academic streams and mapping them to future careers requires educational and vocational guidance."
  },
  {
    "id": "c11-edu-5-mcq-18",
    "question": "How can parents most constructively contribute to their adolescent child's career decision-making?",
    "options": [
      "A):   By supporting the child's genuine aptitudes and interests rather than projecting unfulfilled parental ambitions",
      "B):   By forcing the child to pursue medical entrance exams against their will",
      "C):   By locking the child in a room with study guides",
      "D):   By constantly comparing the child with high-scoring neighborhood children"
    ],
    "correctAnswer": "a",
    "explanation": "Constructive parenting respects the child's unique aptitudes rather than imposing unfulfilled parental dreams."
  },
  {
    "id": "c11-edu-5-mcq-19",
    "question": "Assertion (A): Confidentiality in school counseling cannot be violated except in cases involving imminent danger of self-harm or violence.\nReason (R): Trust is the fundamental bedrock of the counseling relationship, without which clients will conceal critical emotional pain.",
    "options": [
      "A):   (A) is false, but (R) is true",
      "B):   Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
      "C):   (A) is true, but (R) is false",
      "D):   Both (A) and (R) are true, and (R) is the correct explanation of (A)"
    ],
    "correctAnswer": "d",
    "explanation": "Confidentiality builds therapeutic trust; breaking it is only permissible ethically when life safety is at imminent risk."
  },
  {
    "id": "c11-edu-5-mcq-20",
    "question": "A Class 11 student begins skipping school, shows sudden weight loss, and displays razor cuts on their wrists. What is the immediate ethical obligation of the classroom teacher?",
    "options": [
      "A):   Ignore the situation because it is outside the academic syllabus",
      "B):   Scold the student publicly in front of the entire assembly",
      "C):   Immediately report the critical safety concern to the professional school counselor and principal for crisis intervention",
      "D):   Give the student failing marks in the upcoming exam"
    ],
    "correctAnswer": "c",
    "explanation": "Signs of self-harm require prompt, confidential referral to the professional school counselor and crisis intervention."
  },
  {
    "id": "c11-edu-5-mcq-21",
    "question": "Compare the counselor's stance in Williamson's Directive counseling versus Rogers' Non-Directive counseling. What is the fundamental difference?",
    "options": [
      "A):   Williamson does not use language while Rogers uses sign language",
      "B):   Williamson acts as an authoritative diagnostic expert prescribing solutions, whereas Rogers acts as an empathetic facilitator empowering client self-discovery",
      "C):   Rogers orders the client what to do while Williamson listens silently",
      "D):   There is zero philosophical difference between them"
    ],
    "correctAnswer": "b",
    "explanation": "Directive is counselor-led diagnosis and prescription; non-directive is client-led self-realization and growth."
  },
  {
    "id": "c11-edu-5-mcq-22",
    "question": "Match the Counseling Pioneer with their foundational concept:\n(a) Carl Rogers       — (1) Eclectic Counseling Synthesis\n(b) E. G. Williamson  — (2) Period of Storm and Stress\n(c) F. C. Thorne      — (3) Client-Centered Therapy & Unconditional Regard\n(d) G. Stanley Hall   — (4) Directive Counselor-Centered Model",
    "options": [
      "A):   (a)-(3), (b)-(1), (c)-(4), (d)-(2)",
      "B):   (a)-(1), (b)-(2), (c)-(3), (d)-(4)",
      "C):   (a)-(4), (b)-(3), (c)-(2), (d)-(1)",
      "D):   (a)-(3), (b)-(4), (c)-(1), (d)-(2)"
    ],
    "correctAnswer": "d",
    "explanation": "Rogers: Client-Centered; Williamson: Directive; Thorne: Eclectic; Hall: Storm & Stress."
  },
  {
    "id": "c11-edu-5-mcq-23",
    "question": "How does the National Education Policy (NEP 2020) mandate the institutionalization of school counseling?",
    "options": [
      "A):   By requiring school complexes to have access to certified professional counselors and social workers to foster socio-emotional wellbeing",
      "B):   By banning students from expressing emotional feelings in school",
      "C):   By replacing teachers with automated machines",
      "D):   By abolishing all career counseling exhibitions"
    ],
    "correctAnswer": "a",
    "explanation": "NEP 2020 explicitly incorporates trained professional counselors and social workers within school complexes."
  },
  {
    "id": "c11-edu-5-mcq-24",
    "question": "Why is peer counseling emerging as an extraordinarily potent tool in modern adolescent guidance programs?",
    "options": [
      "A):   Because peer counselors are paid government salaries",
      "B):   Because peer counseling eliminates the need for adult school principals",
      "C):   Because teenagers frequently confide in empathetic peers more readily and without fear of adult judgment than with authority figures",
      "D):   Because teenagers never have any emotional problems"
    ],
    "correctAnswer": "c",
    "explanation": "Adolescents relate strongly to peers; trained peer mentors bridge the gap to adult counselors without generating fear."
  },
  {
    "id": "c11-edu-5-mcq-25",
    "question": "A student excels exceptionally in spatial reasoning and fine-motor design (DAT scores), but their parents demand they study corporate law. Which guidance service can resolve this familial conflict constructively?",
    "options": [
      "A):   Expelling the student from the school immediately",
      "B):   A collaborative vocational and family counseling session presenting objective aptitude test results and career mapping",
      "C):   Fining the parents heavily",
      "D):   Ignoring the student's test scores completely"
    ],
    "correctAnswer": "b",
    "explanation": "Collaborative counseling using standardized aptitude data and career mapping helps parents and students reach an informed, harmonious decision."
  }
];
