// Class 12 Education Unit 3: Adjustment and Maladjustment (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #11998E (Mint Emerald / Sea Green matching Chapter 3)

const themeColor = "#11998E";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Edu3HtmlOverview = `
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
  <div style="background: rgba(17, 153, 142, 0.07); border: 1.5px solid \${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: \${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">⚖️ Quick Glossary &amp; Core Adjustment Concepts</h2>
    <p class="text-center" style="color: #6EE7B7; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Class 12 Unit 3: Adjustment and Maladjustment (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Adjustment (Shaffer's Definition):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The dynamic, continuous process by which an organism maintains a harmonious balance between its internal personal needs and the external environmental demands and obstacles.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Maladjustment:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The chronic failure or inability of an individual to establish harmony between personal drives and social demands, culminating in psychological conflict, emotional breakdown, and maladaptive behaviors.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Defense Mechanisms (Ego Defenses):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Unconscious psychological tactics first conceptualized by Sigmund Freud and expanded by Anna Freud, utilized by the Ego to protect itself from overwhelming anxiety, guilt, and emotional woundedness.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Rationalization (Sour Grapes &amp; Sweet Lemon):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A cognitive distortion where an individual invents socially plausible excuses to justify personal failures or reconcile undesirable outcomes, shielding their self-esteem from harsh reality.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Sublimation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The highest and most mature defense mechanism, whereby primitive, socially unacceptable impulses (such as aggression or sexual libido) are transformed into socially elevated, creative, and culturally commendable endeavors.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 3.1 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 30px;">3.1 Concept and Meaning of Adjustment and Maladjustment</h2>

  <p>Every living organism enters a world fraught with biological challenges, physical barriers, and environmental complexities. From the moment of birth to the final breath, life is an unbroken chain of adaptations. In educational psychology, the concept of <b style="color: \${themeColor};">Adjustment</b> is derived from the Latin roots <i>"ad"</i> (meaning toward) and <i>"juxtare"</i> (meaning to bring close or fit together). It represents the art of living in harmony with oneself, with fellow human beings, and with the surrounding physical and social universe.</p>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(i) Authoritative Definitions of Adjustment</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 18px 0;">
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">1. L. S. Shaffer:</b> <i>"Adjustment is the process by which a living organism maintains a balance between its needs and the circumstances that influence the satisfaction of these needs."</i>
    </p>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">2. Gates and Others:</b> <i>"Adjustment is a continual process in which a person varies his behaviour to produce a more harmonious relationship between himself and his environment."</i>
    </p>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">3. Boring, Langfeld, and Weld:</b> <i>"Adjustment is the process of finding and adopting modes of behavior suitable to the environment or to the changes in the environment."</i>
    </p>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">4. B. F. Skinner:</b> <i>"Adjustment is an achievement in which an individual has harmonized his desires with the demands of society."</i>
    </p>
  </div>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(ii) Dual Perspectives: Adjustment as an Achievement vs. Adjustment as a Process</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Adjustment as an Achievement (Static Outcome):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Viewed as an achievement, adjustment refers to how effectively an individual has conquered life challenges and attained a state of inner peace, psychological balance, high efficiency, and social contentment. It answers the evaluative question: <i>"How well-adjusted is this student in their academic and social setting?"</i>
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Adjustment as a Process (Dynamic Adaptation):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Viewed as a process, adjustment is an ongoing, lifelong cycle. An individual experiences a biological or psychological <b style="color: \${themeColor};">Need</b>, encounters an environmental <b style="color: \${themeColor};">Barrier</b>, exhibits <b style="color: \${themeColor};">Varied Behaviors</b> to circumvent the hurdle, and ultimately achieves the <b style="color: \${themeColor};">Goal</b>, restoring dynamic equilibrium.
      </p>
    </div>
  </div>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(iii) Meaning and Pathology of Maladjustment</h3>
  <p>When an individual is chronically incapable of coping with environmental friction, resolving internal motivational conflicts, or satisfying fundamental biological and emotional needs, the resulting state is termed <b style="color: \${themeColor};">Maladjustment</b>. A maladjusted individual lives in a continuous state of psychological disharmony &mdash; besieged by unmanageable frustration, paralyzing inferiority complexes, social alienation, and behavioral aberrations. While the adjusted person seeks constructive solutions to life's roadblocks, the maladjusted person retreats into destructive habits, irrational hostility, or complete withdrawal.</p>

  <!-- STANDALONE CLEAN DIAGRAM 1: THE DYNAMIC PROCESS OF ADJUSTMENT (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="24" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">SHAFFER'S DYNAMIC CYCLE OF ADJUSTMENT</text>

        <!-- Step 1: Need / Motive -->
        <rect x="20" y="55" width="85" height="42" rx="6" fill="#CCFBF1" stroke="#0D9488" stroke-width="1.6" />
        <text x="62" y="73" font-size="10" font-weight="bold" fill="#115E59" text-anchor="middle">1. NEED</text>
        <text x="62" y="87" font-size="8" fill="#0F766E" text-anchor="middle">(Drive / Tension)</text>

        <!-- Arrow 1 -->
        <line x1="105" y1="76" x2="135" y2="76" stroke="#0F766E" stroke-width="2" />

        <!-- Step 2: Barrier / Obstacle -->
        <rect x="140" y="55" width="95" height="42" rx="6" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.6" />
        <text x="187" y="73" font-size="10" font-weight="bold" fill="#991B1B" text-anchor="middle">2. BARRIER</text>
        <text x="187" y="87" font-size="8" fill="#B91C1C" text-anchor="middle">(Obstacle / Friction)</text>

        <!-- Arrow 2 -->
        <line x1="235" y1="76" x2="265" y2="76" stroke="#0F766E" stroke-width="2" />

        <!-- Step 3: Varied Responses -->
        <rect x="270" y="55" width="145" height="42" rx="6" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.6" />
        <text x="342" y="73" font-size="10" font-weight="bold" fill="#0369A1" text-anchor="middle">3. VARIED RESPONSES</text>
        <text x="342" y="87" font-size="8" fill="#0284C7" text-anchor="middle">(Trial &amp; Error / Strategy)</text>

        <!-- Branching Paths -->
        <!-- Path A: Direct Success (Down to Left) -->
        <path d="M 342 97 L 342 140 L 145 140 L 145 160" fill="none" stroke="#059669" stroke-width="2" />
        <rect x="75" y="160" width="140" height="46" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.6" />
        <text x="145" y="178" font-size="10" font-weight="bold" fill="#15803D" text-anchor="middle">PATH A: ADJUSTMENT</text>
        <text x="145" y="194" font-size="8" fill="#166534" text-anchor="middle">Goal Reached &bull; Tension Relieved</text>

        <!-- Path B: Failure / Chronic Block (Down to Right) -->
        <path d="M 380 97 L 380 140 L 320 140 L 320 160" fill="none" stroke="#DC2626" stroke-width="2" />
        <rect x="245" y="160" width="150" height="46" rx="6" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.6" />
        <text x="320" y="178" font-size="10" font-weight="bold" fill="#991B1B" text-anchor="middle">PATH B: MALADJUSTMENT</text>
        <text x="320" y="194" font-size="8" fill="#B91C1C" text-anchor="middle">Frustration &bull; Defense Mechanisms</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Adjustment Cycle: When a drive encounters a barrier, varied problem-solving responses either restore harmony (Adjustment) or lead to chronic tension, escapism, and neurotic friction (Maladjustment).
    </div>
  </div>

  <!-- SECTION 3.2 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">3.2 Characteristics of a Well-Adjusted Person</h2>

  <p>A well-adjusted individual is not someone who never faces problems, sorrows, or failures; rather, they are distinguished by their <b>psychological resilience, emotional equilibrium, and constructive coping skills</b>. In educational psychology, an adolescent who exhibits sound adjustment possesses six hallmark characteristics:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Accurate Self-Knowledge and Unconditional Self-Acceptance:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        The well-adjusted person knows both their shining virtues and their genuine limitations. They do not live in the delusion of grandiose perfection, nor do they torture themselves with self-loathing or crippling inferiority complexes.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Emotional Maturity and High Frustration Tolerance:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        They express emotions in socially appropriate manners. When faced with temporary defeat or delayed gratification, they remain composed, analyzing the causes of failure rather than exploding in violent tantrums or falling into despair.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">3. Warm and Altruistic Social Relationships:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        They possess genuine empathy and respect for the rights of fellow students. They can form intimate, loyal friendships, collaborate productively in peer teams, and celebrate the accomplishments of peers without bitter jealousy.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">4. Realistic Level of Aspiration:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Their educational and career ambitions align closely with their actual intellectual aptitudes and physical capabilities. They set goals that are challenging yet attainable, avoiding both the paralysis of over-ambition and the stagnation of under-achievement.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">5. Adaptability and Openness to Change:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        They do not rigidly cling to obsolete routines when the environment transforms. Whether transitioning from secondary school to university or facing unforeseen family upheavals, they adjust flexibly to new social configurations.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">6. Integrated Philosophy of Life:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        They possess an internal moral compass, core values of honesty and justice, and a meaningful life purpose that anchors them during severe existential storms and moral dilemmas.
      </p>
    </div>
  </div>

  <!-- SECTION 3.3 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">3.3 Causes of Maladjustment: Subjective, Objective, and Social</h2>

  <p>Maladjustment in students does not appear in a vacuum. It is the cumulative outcome of three interacting categories of stressors: <b>Subjective (internal psychological and physical)</b>, <b>Objective (external material and environmental)</b>, and <b>Social (interpersonal, familial, and institutional)</b> determinants:</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Subjective (Internal / Personal) Causes:</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: \${themeColor};">Physical Deformities and Sensory Defects:</b> Chronic illnesses, severe physical handicaps, speech impediments (stammering), obesity, or perceived facial flaws frequently foster a devastating sense of physical inferiority.</li>
        <li><b style="color: \${themeColor};">Disparity in Level of Aspiration:</b> When an adolescent's goals far exceed their innate intellectual or creative capacity, every examination produces crushing frustration, guilt, and bitter despair.</li>
        <li><b style="color: \${themeColor};">Extreme Cognitive Rigidity &amp; Emotional Immaturity:</b> Inability to tolerate ambiguity, black-and-white thinking, and hypersensitivity to constructive feedback.</li>
        <li><b style="color: \${themeColor};">Unconscious Emotional Conflicts:</b> Repressed guilt, forbidden desires, and deep unresolved childhood psychic trauma lingering in the unconscious mind.</li>
      </ul>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Objective (External / Physical &amp; Material) Causes:</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: \${themeColor};">Severe Socio-Economic Deprivation:</b> Extreme poverty, chronic malnutrition, lack of adequate clothing, textbook scarcity, and congested squalid housing disrupt a student's normal cognitive and physical development.</li>
        <li><b style="color: \${themeColor};">Inadequate School Infrastructure:</b> Overcrowded, suffocating classrooms lacking basic ventilation, unhygienic sanitation, and absence of playgrounds or sports facilities.</li>
        <li><b style="color: \${themeColor};">Environmental Crises and Displacement:</b> Natural disasters, regional conflicts, loss of family livelihood, or sudden forced migrations destroying familiar support systems.</li>
      </ul>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">3. Social (Cultural &amp; Relational) Causes:</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: \${themeColor};">Dysfunctional Home Climate:</b> Domestic violence, parental divorce, alcoholism, sibling favoritism, constant parental comparison, and excessively authoritarian or neglectful parenting.</li>
        <li><b style="color: \${themeColor};">Toxic School Environment:</b> Sarcastic ridicule by educators, cruel classroom bullying, corporal punishment, and cut-throat grading systems that label underperforming students as "worthless".</li>
        <li><b style="color: \${themeColor};">Cultural Conflicts &amp; Delinquent Peer Subcultures:</b> Clashing values between traditional home expectations and modern lifestyle trends, coupled with seduction into antisocial adolescent gangs.</li>
      </ul>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 2: TRI-DIMENSIONAL ETIOLOGY OF MALADJUSTMENT (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 240" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="240" fill="#FFFDF8" rx="8" />

        <!-- Center Hub: Maladjustment -->
        <circle cx="220" cy="120" r="48" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5" />
        <text x="220" y="116" font-size="11" font-weight="bold" fill="#991B1B" text-anchor="middle">MALADJUSTED</text>
        <text x="220" y="130" font-size="10" font-weight="bold" fill="#991B1B" text-anchor="middle">BEHAVIOR</text>

        <!-- Node 1: Subjective Causes (Top) -->
        <rect x="145" y="12" width="150" height="42" rx="6" fill="#CCFBF1" stroke="#0D9488" stroke-width="1.8" />
        <text x="220" y="28" font-size="10" font-weight="bold" fill="#115E59" text-anchor="middle">1. SUBJECTIVE CAUSES</text>
        <text x="220" y="42" font-size="8" fill="#0F766E" text-anchor="middle">Physical &bull; Aspiration &bull; Guilt</text>
        <line x1="220" y1="54" x2="220" y2="72" stroke="#0D9488" stroke-width="2" />

        <!-- Node 2: Objective Causes (Bottom Left) -->
        <rect x="20" y="175" width="160" height="42" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="1.8" />
        <text x="100" y="191" font-size="10" font-weight="bold" fill="#B45309" text-anchor="middle">2. OBJECTIVE CAUSES</text>
        <text x="100" y="205" font-size="8" fill="#92400E" text-anchor="middle">Poverty &bull; Facilities &bull; Crises</text>
        <line x1="135" y1="175" x2="182" y2="148" stroke="#D97706" stroke-width="2" />

        <!-- Node 3: Social Causes (Bottom Right) -->
        <rect x="260" y="175" width="160" height="42" rx="6" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.8" />
        <text x="340" y="191" font-size="10" font-weight="bold" fill="#0369A1" text-anchor="middle">3. SOCIAL CAUSES</text>
        <text x="340" y="205" font-size="8" fill="#0284C7" text-anchor="middle">Broken Homes &bull; Bullying &bull; Peers</text>
        <line x1="305" y1="175" x2="258" y2="148" stroke="#0284C7" stroke-width="2" />
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Tri-Dimensional Etiology of Maladjustment: Subjective vulnerability, objective deprivation, and social friction intersect to rupture an adolescent's psychological equilibrium.
    </div>
  </div>

  <!-- SECTION 3.4 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">3.4 Symptoms of Maladjustment</h2>

  <p>Maladjustment in children and youth rarely manifests as a single isolated act. Instead, it expresses itself through a comprehensive constellation of emotional, behavioral, physical, and cognitive symptoms:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Emotional Symptoms:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Chronic state of restlessness, irrational phobias, intense anxiety, frequent bouts of melancholy and tearfulness, explosive temper tantrums, pervasive jealousy, and deep-seated guilt or persecutory feelings.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Behavioral and Antisocial Symptoms:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Truancy (chronic unauthorized bunking of classes), compulsive lying, stealing from parents and classmates, defiance of authority, aggressive bullying of younger peers, vandalism of school property, and early initiation into smoking and drug abuse.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">3. Physical and Psychosomatic Symptoms:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Nervous motor habits including chronic nail-biting, thumb-sucking, facial tics, stuttering/stammering during speech, frequent morning headaches, gastrointestinal stomach aches before exams, chronic insomnia, and bed-wetting (enuresis).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">4. Scholastic and Cognitive Symptoms:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Severe decline in academic grades despite adequate intelligence, complete inability to concentrate in lectures, extreme indecisiveness, thought blocking, and persistent excessive daydreaming during study sessions.
      </p>
    </div>
  </div>

  <!-- SECTION 3.5 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">3.5 Defense Mechanisms to Curb Maladjustment</h2>

  <p>When an individual's conscious problem-solving strategies fail to resolve frustration or overcome barriers, intense psychological anxiety threatens the integrity of the conscious self. To shield the <b style="color: \${themeColor};">Ego</b> from humiliation, guilt, and emotional disintegration, the human psyche activates unconscious psychological maneuvers termed <b style="color: \${themeColor};">Defense Mechanisms</b> (or Mental Mechanisms). While direct methods tackle the actual barrier, defense mechanisms operate by distorting or disguising reality. As prescribed in the official syllabus, four major defense mechanisms are examined in detail:</p>

  <!-- MECHANISM 1: RATIONALIZATION -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(i) Rationalization with Examples</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Mechanism:</b> Rationalization is a cognitive defense mechanism where an individual invents socially acceptable, logical-sounding excuses to justify an ego-deflating failure, unacceptable desire, or embarrassing blunder, completely disguising the real, unflattering truth.
    </p>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      Psychologists distinguish between two classic variations of rationalization:
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li>
        <b style="color: \${themeColor};">1. The 'Sour Grapes' Mechanism:</b> Derived from Aesop's fable where the fox, unable to jump high enough to reach the tempting grapes, walked away declaring that <i>"the grapes are sour anyway."</i><br />
        <span style="color: #CBD5E1;"><i>Real-Life Example:</i> A student who works tirelessly to gain admission into a premier medical college but fails the entrance test declares: <i>"Medical education in that institute is highly overrated, stressful, and corrupt; I chose not to join it because it ruins one's health."</i></span>
      </li>
      <li>
        <b style="color: \${themeColor};">2. The 'Sweet Lemon' Mechanism:</b> When an individual is forced to accept an inferior, disappointing, or painful outcome, they convince themselves and others that it is the best possible blessing in disguise.<br />
        <span style="color: #CBD5E1;"><i>Real-Life Example:</i> A teacher who is denied a promotion to a prestigious city school and transferred to a remote village proclaims: <i>"I never wanted that city job; rural air is pure, villagers are holy, and living in solitude is the true path to enlightenment."</i></span>
      </li>
    </ul>
  </div>

  <!-- MECHANISM 2: SUBLIMATION -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(ii) Sublimation with Examples</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Mechanism:</b> Sigmund Freud considered <b style="color: \${themeColor};">Sublimation</b> the highest, most mature, and universally constructive defense mechanism. It is the process of redirecting socially unacceptable, primitive, or destructive impulses (such as uninhibited aggression, hostility, or intense sexual libido) into culturally elevated, socially valuable, and intellectually creative activities.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li>
        <b style="color: \${themeColor};">Real-Life Example 1 (Aggression &rarr; Sports/Martial Arts):</b> An adolescent boy with violent aggressive tendencies and frequent physical street fights is enrolled in boxing, martial arts, or military training. His dangerous aggression is transformed into disciplined championship athletic glory.
      </li>
      <li>
        <b style="color: \${themeColor};">Real-Life Example 2 (Libidinal/Emotional Frustration &rarr; Literary Genius):</b> An individual who suffers painful unrequited love or severe emotional rejection channels their yearning into writing timeless romantic poetry, painting masterpieces, or composing symphonies (legendarily seen in the life of poet-saint Goswami Tulsidas).
      </li>
    </ul>
  </div>

  <!-- MECHANISM 3: ESCAPISM -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(iii) Escapism with Examples</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Mechanism:</b> <b style="color: \${themeColor};">Escapism</b> is the habitual psychological practice of seeking distraction, relief, and mental flight from unpleasant, stressful, or threatening real-world responsibilities through activities that provide immediate temporary gratification while evading the core problem.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li>
        <b style="color: \${themeColor};">Real-Life Example 1 (Digital Bingeing):</b> A Class 12 student facing an overwhelming syllabus and upcoming board examinations spends 8 to 10 consecutive hours binge-watching digital web series or endlessly scrolling reels to avoid the severe anxiety of opening their physics textbook.
      </li>
      <li>
        <b style="color: \${themeColor};">Real-Life Example 2 (Sleep / Chemical Flight):</b> An individual caught in toxic domestic arguments retreats to their bedroom and sleeps for 14 hours a day, or turns to alcohol and sedatives to numb conscious awareness of their problems.
      </li>
    </ul>
  </div>

  <!-- MECHANISM 4: FANTASY AND DAYDREAMING -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(iv) Fantasy and Daydreaming with Examples</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Mechanism:</b> <b style="color: \${themeColor};">Fantasy and Daydreaming</b> involves retreating into an imaginary internal dreamworld created by the mind, where all unfulfilled desires, romantic ambitions, power urges, and social triumphs are effortlessly and instantly gratified without facing real-world risks or labor.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li>
        <b style="color: \${themeColor};">The 'Conquering Hero' Fantasy:</b> A shy, physically frail student who is routinely overlooked in school spends class hours daydreaming that they are a world-famous military general or Olympic gold medalist being wildly cheered by thousands of spectators.
      </li>
      <li>
        <b style="color: \${themeColor};">The 'Suffering Hero' (Martyr) Fantasy:</b> An adolescent who feels neglected by parents imagines falling terminally ill or dying tragically, visualizing their remorseful parents weeping uncontrollably at their bedside and begging for forgiveness.
      </li>
      <li>
        <b style="color: \${themeColor};">Educational Valuation:</b> While modest daydreaming can foster poetic imagination and harmless creative relaxation, chronic indulgence detaches the adolescent from reality, produces scholastic bankruptcy, and leads toward schizoid withdrawal.
      </li>
    </ul>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 3: SPECTRUM OF DEFENSE MECHANISMS (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">THE FOUR CORE DEFENSE MECHANISMS</text>

        <!-- Box 1: Rationalization -->
        <rect x="15" y="42" width="195" height="75" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.6" />
        <text x="112" y="60" font-size="10.5" font-weight="bold" fill="#15803D" text-anchor="middle">1. RATIONALIZATION</text>
        <text x="112" y="76" font-size="8.5" fill="#166534" text-anchor="middle">&bull; Cognitive Justification &amp; Excuses</text>
        <text x="112" y="90" font-size="8.5" fill="#334155" text-anchor="middle">&bull; Sour Grapes &bull; Sweet Lemon</text>
        <text x="112" y="104" font-size="8" fill="#475569" text-anchor="middle">Protects self-esteem from failure</text>

        <!-- Box 2: Sublimation -->
        <rect x="230" y="42" width="195" height="75" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.6" />
        <text x="327" y="60" font-size="10.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">2. SUBLIMATION</text>
        <text x="327" y="76" font-size="8.5" fill="#1E40AF" text-anchor="middle">&bull; Constructive Energy Channeling</text>
        <text x="327" y="90" font-size="8.5" fill="#334155" text-anchor="middle">&bull; Aggression &rarr; Boxing / Art</text>
        <text x="327" y="104" font-size="8" fill="#475569" text-anchor="middle">Highest mature defense mechanism</text>

        <!-- Box 3: Escapism -->
        <rect x="15" y="132" width="195" height="75" rx="6" fill="#FEF2F2" stroke="#DC2626" stroke-width="1.6" />
        <text x="112" y="150" font-size="10.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">3. ESCAPISM</text>
        <text x="112" y="166" font-size="8.5" fill="#991B1B" text-anchor="middle">&bull; Flight from Reality &amp; Duties</text>
        <text x="112" y="180" font-size="8.5" fill="#334155" text-anchor="middle">&bull; Binge Scrolling &bull; Excessive Sleep</text>
        <text x="112" y="194" font-size="8" fill="#475569" text-anchor="middle">Avoids core anxiety temporarily</text>

        <!-- Box 4: Fantasy & Daydreaming -->
        <rect x="230" y="132" width="195" height="75" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.6" />
        <text x="327" y="150" font-size="10.5" font-weight="bold" fill="#7E22CE" text-anchor="middle">4. FANTASY &amp; DAYDREAMING</text>
        <text x="327" y="166" font-size="8.5" fill="#6B21A8" text-anchor="middle">&bull; Imaginary Wish-Fulfillment</text>
        <text x="327" y="180" font-size="8.5" fill="#334155" text-anchor="middle">&bull; Conquering &amp; Suffering Hero</text>
        <text x="327" y="194" font-size="8" fill="#475569" text-anchor="middle">Instant gratification without effort</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Spectrum of Defense Mechanisms: From constructive transformation (Sublimation) to cognitive justification (Rationalization) and evasive flights from duty (Escapism and Daydreaming).
    </div>
  </div>

  <!-- COMPARISON TABLE BOX -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid \${themeColor}; border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; font-weight: bold; margin: 0 0 12px 0;">
      📊 Master Comparative Matrix: Direct Methods vs. Indirect (Defense) Mechanisms
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #F8FAFC;">
        <thead>
          <tr style="background: rgba(17, 153, 142, 0.25); border-bottom: 2px solid \${themeColor};">
            <th style="padding: 10px; text-align: left;">Dimension</th>
            <th style="padding: 10px; text-align: left;">Direct Coping Methods</th>
            <th style="padding: 10px; text-align: left;">Indirect (Defense) Mechanisms</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Conscious Awareness</td>
            <td style="padding: 10px;">Conscious, deliberate, and rational.</td>
            <td style="padding: 10px;">Largely unconscious and automatic.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Target of Action</td>
            <td style="padding: 10px;">Attacks the actual problem or barrier directly.</td>
            <td style="padding: 10px;">Attacks the internal anxiety by disguising reality.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Common Techniques</td>
            <td style="padding: 10px;">Increasing effort, changing techniques, compromising.</td>
            <td style="padding: 10px;">Rationalization, Sublimation, Escapism, Fantasy.</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Permanent Solution</td>
            <td style="padding: 10px;">Provides authentic, lasting adjustment and growth.</td>
            <td style="padding: 10px;">Provides temporary relief; chronic use breeds maladjustment.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- POLICY CONNECT BOX: NEP 2020 & COUNSELING IN SCHOOLS -->
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #38EF7D; border-radius: 8px; padding: 14px 16px; margin: 20px 0;">
    <h4 style="color: #38EF7D; margin: 0 0 6px 0; font-size: 16px; font-weight: bold;">
      🏛️ Educational Policy Connect: NEP 2020 on Student Adjustment &amp; Mental Wellbeing
    </h4>
    <p style="margin: 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      The <b>National Education Policy (NEP 2020)</b> places mandatory emphasis on establishing dedicated Guidance and Counseling cells in every secondary school. NEP 2020 advocates for Social-Emotional Learning (SEL), peer mentoring groups, eradication of corporal punishment, and training teachers as compassionate counselors to identify early signs of school maladjustment (truancy, aggression, withdrawal) and provide non-stigmatizing psycho-social support.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: Q & A (SOLUTIONS)                          */
/* -------------------------------------------------------------------------- */

export const c12Edu3HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(17, 153, 142, 0.08); border-left: 4px solid \${themeColor}; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
    <h3 style="color: \${themeColor}; margin: 0 0 6px 0; font-size: 18px; font-weight: bold;">🎯 Golden 25 Board Examination Q &amp; A Blueprint</h3>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">
      Class 12 Unit 3: Adjustment and Maladjustment (10 Marks) &bull; Strictly 12 VSAT (1 &amp; 2 Marks), 8 SAT (4 Marks), and 5 LAT (6 Marks).
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER TYPE (1 & 2 MARKS) - 12 QUESTIONS          -->
  <!-- ======================================================================== -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 25px;">
    Section A: Very Short Answer Questions (1 &amp; 2 Marks)
  </h2>

  <!-- Q1 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q1: Define Adjustment according to L. S. Shaffer.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      According to <b style="color: \${themeColor};">L. S. Shaffer</b>, <i>"Adjustment is the process by which a living organism maintains a balance between its needs and the circumstances that influence the satisfaction of these needs."</i>
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q2: What is meant by Maladjustment?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Maladjustment</b> is the chronic inability or failure of an individual to adapt to their environment or resolve internal conflicts, resulting in persistent emotional friction, psychological distress, and antisocial or abnormal behavior.
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q3: Differentiate between adjustment as a 'process' and adjustment as an 'achievement'.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      As a <b style="color: \${themeColor};">Process</b>, adjustment is an ongoing, lifelong cycle of coping with emerging needs and barriers. As an <b style="color: \${themeColor};">Achievement</b>, it is the actual state of efficiency, contentment, and psychological harmony attained by an individual at any given time.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q4: State two subjective causes of maladjustment in school children.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: \${themeColor};">Physical sensory handicaps or speech defects</b> producing deep inferiority feelings; (2) <b style="color: \${themeColor};">Unrealistic level of aspiration</b> far exceeding innate intellectual capabilities.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q5: State two objective causes of maladjustment.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) Extreme <b style="color: \${themeColor};">socio-economic destitution</b> and lack of basic learning materials; (2) <b style="color: \${themeColor};">Overcrowded, suffocating classrooms</b> lacking ventilation and recreational spaces.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q6: State two social causes of maladjustment originating from the family.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: \${themeColor};">Broken homes or bitter parental discord</b> creating chronic emotional insecurity; (2) <b style="color: \${themeColor};">Authoritarian parenting</b> marked by harsh corporal punishment and unfair sibling comparison.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q7: Mention two psychosomatic or physical symptoms of maladjustment in students.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) Habitual <b style="color: \${themeColor};">nail-biting, thumb-sucking, and facial tics</b>; (2) Psychosomatic <b style="color: \${themeColor};">morning headaches and stomach aches</b> occurring specifically on examination days.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q8: What are Defense Mechanisms? Who introduced this concept?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Defense Mechanisms</b> are unconscious psychological strategies used by the Ego to protect itself against overwhelming anxiety, guilt, and threats to self-esteem. The concept was pioneered by <b style="color: \${themeColor};">Sigmund Freud</b> and systematically expanded by his daughter <b style="color: \${themeColor};">Anna Freud</b>.
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q9: Define Rationalization.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Rationalization</b> is a defense mechanism whereby an individual devises plausible, socially acceptable explanations or excuses to justify an embarrassing failure or unacceptable behavior, thereby protecting their personal pride.
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q10: Distinguish between 'Sour Grapes' and 'Sweet Lemon' rationalization.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      In <b style="color: \${themeColor};">Sour Grapes</b>, an individual claims an unattainable goal was defective or undesirable anyway (e.g., <i>"I didn't want that scholarship, it involves too much headache"</i>). In <b style="color: \${themeColor};">Sweet Lemon</b>, an individual claims an unwanted, inferior situation they are forced to endure is wonderful (e.g., <i>"Failing this exam is great because it gave me extra free time"</i>).
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q11: Why is Sublimation considered the most healthy and mature defense mechanism?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      Unlike other defense mechanisms that distort reality or evade duty, <b style="color: \${themeColor};">Sublimation</b> channels destructive, unacceptable impulses (such as raw aggression) into socially admired, productive, and culturally enriching avenues (like competitive sports, literature, or art).
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q12: How does Fantasy/Daydreaming differ from Escapism?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Escapism</b> involves taking actual physical or behavioral flight from stressful tasks (e.g., excessive sleeping, bingeing social media), whereas <b style="color: \${themeColor};">Fantasy/Daydreaming</b> involves retreating into an internal mental universe of imaginary triumphs where unfulfilled desires are instantly gratified.
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER TYPE (4 MARKS) - 8 QUESTIONS                    -->
  <!-- ======================================================================== -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">
    Section B: Short Answer Questions (4 Marks)
  </h2>

  <!-- Q13 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q13: Explain four major characteristics of a well-adjusted person.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      A well-adjusted individual displays distinctive emotional and cognitive traits:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Accurate Self-Insight:</b> They hold a realistic assessment of their strengths and limitations, accepting themselves without destructive delusions of grandeur or inferiority.</li>
        <li><b style="color: \${themeColor};">2. Emotional Balance:</b> They maintain high frustration tolerance and emotional poise, responding to setbacks with rational problem-solving rather than childish rage.</li>
        <li><b style="color: \${themeColor};">3. Warm Social Relationships:</b> They can form intimate, empathetic friendships, cooperate harmoniously in teams, and respect the dignity of others.</li>
        <li><b style="color: \${themeColor};">4. Realistic Level of Aspiration:</b> They set academic and vocational goals that are challenging yet attainable, precisely calibrated to their abilities.</li>
      </ul>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q14: Describe how dysfunctional parental attitudes contribute to child maladjustment.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      The family home is the child's primary psychological sanctuary. When parents exhibit pathological rearing behaviors, severe maladjustment ensues:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Authoritarian Harshness:</b> Constant corporal punishment, verbal belittling, and rigid rules breed either rebellious defiance or timid, chronic anxiety.</li>
        <li><b style="color: \${themeColor};">2. Toxic Sibling Comparison:</b> Repeatedly praising one child while humiliating another fosters deep feelings of inadequacy, jealousy, and sibling hostility.</li>
        <li><b style="color: \${themeColor};">3. Over-Protection:</b> Sheltering a child from every minor difficulty prevents them from developing self-reliance and coping resilience.</li>
        <li><b style="color: \${themeColor};">4. Marital Warfare:</b> Constant domestic fighting or domestic violence destroys the child's foundational sense of physical and emotional security.</li>
      </ul>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q15: Discuss the symptoms of maladjustment classified under emotional, behavioral, and academic domains.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Maladjustment manifests across multiple interconnected life domains:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Emotional Domain:</b> Pervasive anxiety, extreme emotional lability, irrational phobias, depressive despondency, and persistent feelings of guilt and isolation.</li>
        <li><b style="color: \${themeColor};">2. Behavioral Domain:</b> Antisocial acts such as habitual lying, shoplifting or stealing from peers, bullying younger students, truancy, and vandalism.</li>
        <li><b style="color: \${themeColor};">3. Somatic/Physical Domain:</b> Motor tics, stammering, nail-biting, chronic fatigue, headaches, and insomnia prior to tests.</li>
        <li><b style="color: \${themeColor};">4. Academic Domain:</b> Unexplained precipitous drops in school marks, lack of classroom attention, procrastination, and excessive daydreaming.</li>
      </ul>
    </div>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q16: Explain the mechanism of Rationalization with two distinct real-life illustrations.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Rationalization is an unconscious defense mechanism where socially plausible excuses are fabricated to justify an ego-deflating failure:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. The Psychological Function:</b> It protects the student's fragile ego and self-esteem from the painful admission of personal incompetence, laziness, or intellectual defeat.</li>
        <li><b style="color: \${themeColor};">2. Illustration 1 (Examination Failure):</b> A student who neglected their studies all semester and failed a mathematics paper claims: <i>"The teacher deliberately set an out-of-syllabus paper because she holds a personal grudge against me."</i></li>
        <li><b style="color: \${themeColor};">3. Illustration 2 (Sports Rejection):</b> An athlete dropped from the school football team declares: <i>"Football is a barbaric game that leads to knee fractures anyway; I am glad I can now focus on pure academics."</i> (Sour Grapes).</li>
      </ul>
    </div>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q17: Analyze Sublimation as a positive coping strategy with suitable educational examples.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Sublimation stands out as the most socially and culturally beneficial defense mechanism:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Constructive Redirection:</b> Rather than repressing instinctual energy (which leads to neurosis), sublimation channels raw emotional and biological drives into creative, productive outlets.</li>
        <li><b style="color: \${themeColor};">2. Educational Example 1 (Aggression &rarr; Athletics):</b> An adolescent with high aggressive energy is encouraged to join rugby, track, or boxing, converting anti-social hostility into athletic teamwork and sportsmanship.</li>
        <li><b style="color: \${themeColor};">3. Educational Example 2 (Anxiety &rarr; Creative Arts):</b> A student troubled by deep emotional turmoil expresses their inner pain through painting, creative writing, or drama, producing profound works of art.</li>
      </ul>
    </div>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q18: Examine the psychological dangers of chronic Escapism and Daydreaming among adolescents.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      While occasional fantasy offers innocent relaxation, chronic escapism carries grave risks:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Severe Academic Bankruptcy:</b> Substituting real study with 8-hour digital scrolling or classroom daydreaming leads directly to examination failure and school drop-out.</li>
        <li><b style="color: \${themeColor};">2. Detachment from Objective Reality:</b> The adolescent begins to prefer the effortless, flattering world of fantasy over real-world effort, eroding their problem-solving muscle.</li>
        <li><b style="color: \${themeColor};">3. Deepening Inferiority:</b> Every time the student returns from their fantasy to the unchanged, unmastered reality, their sense of helplessness and self-disgust intensifies.</li>
        <li><b style="color: \${themeColor};">4. Risk of Schizoid Withdrawal:</b> Prolonged chronic daydreaming can blossom into clinical detachment, severe social alienation, and depressive withdrawal.</li>
      </ul>
    </div>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q19: Differentiate between Direct Problem-Solving Methods and Indirect Defense Mechanisms.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Adjustment methods fall into two distinctly contrasting operational categories:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Operational Level:</b> Direct methods are fully conscious, intentional, and logical, whereas defense mechanisms operate unconsciously and automatically.</li>
        <li><b style="color: \${themeColor};">2. Problem Target:</b> Direct methods attack the real environmental barrier (e.g., doubling study hours to pass), whereas defense mechanisms attack only the internal feeling of anxiety.</li>
        <li><b style="color: \${themeColor};">3. Handling of Reality:</b> Direct methods respect objective facts, whereas defense mechanisms distort, deny, or evade reality.</li>
        <li><b style="color: \${themeColor};">4. Ultimate Outcome:</b> Direct methods achieve genuine permanent adjustment; defense mechanisms provide temporary relief but chronic reliance results in maladjustment.</li>
      </ul>
    </div>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q20: How can an authoritarian school environment foster maladjustment among students?</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      A school should be a nourishing emotional ecosystem. An authoritarian school breeds maladjustment through:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Sarcastic Ridicule &amp; Public Shaming:</b> Teachers who humiliate struggling students in front of their peers shatter self-esteem, driving victims into truancy or mutism.</li>
        <li><b style="color: \${themeColor};">2. Rigid, Examination-Centric Pedagogy:</b> Obsession with rote memorization without room for creative play or athletic expression produces chronic exam terror.</li>
        <li><b style="color: \${themeColor};">3. Lack of Counseling &amp; Anti-Bullying Oversight:</b> Turning a blind eye to classroom bullying leaves vulnerable students defenseless, provoking severe anxiety disorders.</li>
        <li><b style="color: \${themeColor};">4. Suppression of Student Autonomy:</b> Dictatorial discipline prevents pupils from developing mature decision-making and democratic social skills.</li>
      </ul>
    </div>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION C: LONG ANSWER TYPE (6 MARKS) - 5 QUESTIONS                     -->
  <!-- ======================================================================== -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">
    Section C: Long Answer Questions (6 Marks)
  </h2>

  <!-- Q21 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q21: Comprehensive Analysis of the Concept of Adjustment and the Complete Profile of a Well-Adjusted Personality.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Conceptual Foundations &amp; Definition:</b><br />
      Adjustment is the continuous psycho-biological process through which an individual orchestrates harmony between their internal needs and external environmental circumstances (L. S. Shaffer). It functions simultaneously as a dynamic process of coping and as an evaluative state of personal achievement and happiness.</p>

      <p><b style="color: \${themeColor};">II. The Six Pillars of a Well-Adjusted Personality:</b><br />
      (1) <b style="color: \${themeColor};">Accurate Self-Insight:</b> Clear awareness of personal strengths, flaws, and emotional triggers without self-deception.<br />
      (2) <b style="color: \${themeColor};">Emotional Poise:</b> High frustration tolerance, resilience in the face of temporary defeat, and freedom from violent emotional extremes.<br />
      (3) <b style="color: \${themeColor};">Warm Social Adaptability:</b> Capacity for empathy, genuine cooperative team spirit, and respect for divergent viewpoints.<br />
      (4) <b style="color: \${themeColor};">Congruent Level of Aspiration:</b> Alignment between goals and innate abilities, preventing chronic frustration.<br />
      (5) <b style="color: \${themeColor};">Flexibility in Novel Situations:</b> Readiness to adapt habits when life circumstances change.<br />
      (6) <b style="color: \${themeColor};">Guiding Moral Compass:</b> An integrated philosophy of life providing existential meaning, integrity, and resilience.</p>

      <p><b style="color: \${themeColor};">III. Educational Implications:</b><br />
      Schools must not measure student success solely by marks. Educators must deliberately cultivate emotional stability, self-insight, and social adaptability through cooperative group projects, sports, and holistic guidance.</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q22: Detailed Classification and Analytical Exposition of the Causes of Maladjustment.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Introduction:</b><br />
      Maladjustment does not originate from a single cause; it is the cumulative product of subjective, objective, and social stressors acting upon an individual's developing personality.</p>

      <p><b style="color: \${themeColor};">II. Three Interacting Dimensions of Causation:</b><br />
      (1) <b style="color: \${themeColor};">Subjective (Personal) Causes:</b> Severe physical deformities, sensory impairments, speech disorders (stammering), emotional instability, and an exaggerated level of aspiration that inevitably triggers crushing failure.<br />
      (2) <b style="color: \${themeColor};">Objective (Physical &amp; Material) Causes:</b> Destitution, severe poverty, lack of basic learning infrastructure, squalid living conditions, and sudden environmental crises or displacement that deprive a child of basic survival stability.<br />
      (3) <b style="color: \${themeColor};">Social (Relational &amp; Institutional) Causes:</b> Broken homes, domestic abuse, authoritarian child-rearing, sibling favoritism, ruthless classroom bullying, sarcastic educators, and delinquent peer subcultures.</p>

      <p><b style="color: \${themeColor};">III. Preventive Educational Interventions:</b><br />
      Remedying maladjustment requires a collaborative approach: removing physical and financial barriers, establishing compassionate school environments, and offering professional counseling to bridge subjective and social divides.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q23: Exhaustive Examination of the Four Defense Mechanisms: Rationalization, Sublimation, Escapism, and Fantasy.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. The Freudian Concept of Ego-Defense:</b><br />
      First formulated by Sigmund Freud, defense mechanisms are unconscious psychological strategies employed by the Ego to protect against debilitating anxiety and loss of self-worth when conscious coping is thwarted.</p>

      <p><b style="color: \${themeColor};">II. Detailed Analysis of the Four Prescribed Mechanisms:</b><br />
      (1) <b style="color: \${themeColor};">Rationalization:</b> Fabricating plausible, socially acceptable justifications for failure. Manifests as <i>Sour Grapes</i> (devaluing unattainable goals) or <i>Sweet Lemon</i> (overvaluing forced, poor outcomes).<br />
      (2) <b style="color: \${themeColor};">Sublimation:</b> The most mature mechanism, redirecting primitive aggressive or sexual drives into noble, creative, and socially commendable channels (e.g., athletics, painting, social work).<br />
      (3) <b style="color: \${themeColor};">Escapism:</b> Behavioral avoidance of uncomfortable tasks through excessive sleeping, digital binge-scrolling, or substance use, offering temporary relief while worsening the root problem.<br />
      (4) <b style="color: \${themeColor};">Fantasy &amp; Daydreaming:</b> Withdrawing into an imaginary world of instant wish-fulfillment (e.g., the 'Conquering Hero' or 'Suffering Martyr' fantasies). Chronic reliance paralyzes real-world initiative.</p>

      <p><b style="color: \${themeColor};">III. Pedagogical Guidance:</b><br />
      Teachers must recognize defense mechanisms not as moral flaws, but as cries for help. Educators should gently redirect students away from rationalization and escapism toward sublimation and direct problem-solving.</p>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q24: The Strategic Role of the Teacher and School Guidance Cell in Detecting and Remedying Maladjustment.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. The Teacher as Frontline Mental Health Guardian:</b><br />
      Teachers spend several hours daily observing student behaviors and are ideally positioned to identify early warning signals: sudden academic decline, chronic nail-biting, social withdrawal, aggressive outbursts, or frequent class truancy.</p>

      <p><b style="color: \${themeColor};">II. Strategic Measures for Schools:</b><br />
      (1) <b style="color: \${themeColor};">Eradicating Humiliation:</b> Total abolition of sarcasm, public shaming, and corporal punishment, replacing them with praise and constructive feedback.<br />
      (2) <b style="color: \${themeColor};">Establishing Guidance &amp; Counseling Cells:</b> Appointing qualified school counselors who provide confidential, non-judgmental therapy and emotional guidance.<br />
      (3) <b style="color: \${themeColor};">Diversified Co-Curricular Programs:</b> Organizing sports, debates, drama, music, and art to provide constructive channels for sublimation.<br />
      (4) <b style="color: \${themeColor};">Active Parent-Teacher Partnerships:</b> Conducting regular, supportive parent-teacher dialogues to align home and school environments and eliminate toxic sibling comparisons.</p>

      <p><b style="color: \${themeColor};">III. Alignment with NEP 2020:</b><br />
      NEP 2020 explicitly mandates student mental wellbeing and socio-emotional learning (SEL) as foundational pillars of the Indian school curriculum.</p>
    </div>
  </div>

  <!-- Q25 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q25: Real-World Adolescent Case Study: Diagnostic Evaluation and Educational Remediation Strategy.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">Case Profile:</b><br />
      <i>Aarav, a 16-year-old Class 12 student, was previously an average performer. Over the past six months, his grades have plummeted. He frequently skips classes (truancy), spends 8 hours daily on mobile gaming (escapism), and is regularly caught lost in trance-like daydreaming during lectures. When confronted about failing his pre-board test, he boasted that "marks do not reflect true genius; Steve Jobs and Einstein were also school failures" (rationalization). At home, his father constantly compares him to his older brother who is an IIT gold medalist.</i></p>

      <p><b style="color: \${themeColor};">I. Diagnostic Clinical Breakdown:</b><br />
      (1) <b style="color: \${themeColor};">Primary Stressor:</b> Severe domestic pressure and toxic comparison with his high-achieving brother.<br />
      (2) <b style="color: \${themeColor};">Manifested Symptoms:</b> Behavioral truancy, scholastic decline, and cognitive attention deficits.<br />
      (3) <b style="color: \${themeColor};">Active Defense Mechanisms:</b> Escapism (digital gaming), Fantasy (daydreaming), and Rationalization (sweet lemon comparison with historical dropouts).</p>

      <p><b style="color: \${themeColor};">II. Four-Step Psycho-Educational Remediation Strategy:</b><br />
      (1) <b style="color: \${themeColor};">Parental Counseling:</b> Sensitize Aarav's parents to immediately cease comparing him to his brother, adopting an authoritative parenting style with unconditional acceptance.<br />
      (2) <b style="color: \${themeColor};">Individual Counseling:</b> Help Aarav dismantle his rationalizations, confront his fear of failure, and rebuild self-worth.<br />
      (3) <b style="color: \${themeColor};">Direct Problem-Solving:</b> Break his syllabus into manageable daily study goals, applying structured time management to replace mobile escapism.<br />
      (4) <b style="color: \${themeColor};">Sublimation through Extracurriculars:</b> Encourage Aarav to channel his energy into school sports or technical clubs to experience genuine real-world achievement.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS (INTERACTIVE)                         */
/* -------------------------------------------------------------------------- */

export const c12Edu3Mcqs = [
  // TIER 1: EASY RECALL & DEFINITIONS (Q1 to Q10)
  {
    id: "c12-edu-3-mcq-1",
    question: "Who defined adjustment as 'the process by which a living organism maintains a balance between its needs and the circumstances that influence the satisfaction of these needs'?",
    options: [
      "A):   L. S. Shaffer",
      "B):   B. F. Skinner",
      "C):   Sigmund Freud",
      "D):   John Dewey",
    ],
    correctAnswer: "a",
    explanation: "L. S. Shaffer provided this classic, standard psychological definition of adjustment focusing on the balance between personal needs and environmental circumstances.",
  },
  {
    id: "c12-edu-3-mcq-2",
    question: "The Latin word root 'juxtare' from which the term 'Adjustment' is derived means:",
    options: [
      "A):   To control strictly",
      "B):   To bring close or fit together",
      "C):   To separate completely",
      "D):   To escape from friction",
    ],
    correctAnswer: "b",
    explanation: "Adjustment comes from the Latin 'ad' (toward) and 'juxtare' (to bring close or fit together), denoting harmonious relationship with the environment.",
  },
  {
    id: "c12-edu-3-mcq-3",
    question: "Who originally formulated the concept of Defense Mechanisms in psychological theory?",
    options: [
      "A):   Ivan Pavlov",
      "B):   Carl Rogers",
      "C):   Sigmund Freud",
      "D):   Jean Piaget",
    ],
    correctAnswer: "c",
    explanation: "Sigmund Freud pioneered the psychoanalytic concept of Defense Mechanisms as unconscious tactics used by the Ego to protect against anxiety.",
  },
  {
    id: "c12-edu-3-mcq-4",
    question: "A fox failing to reach the juicy grapes and walking away declaring that 'the grapes are sour' is a classic example of:",
    options: [
      "A):   Sublimation",
      "B):   Escapism",
      "C):   Fantasy",
      "D):   Rationalization",
    ],
    correctAnswer: "d",
    explanation: "This is the classic 'Sour Grapes' variety of Rationalization, where an unattainable goal is devalued to protect self-esteem.",
  },
  {
    id: "c12-edu-3-mcq-5",
    question: "Which of the following defense mechanisms is regarded by psychologists as the most healthy, mature, and constructive?",
    options: [
      "A):   Sublimation",
      "B):   Rationalization",
      "C):   Escapism",
      "D):   Daydreaming",
    ],
    correctAnswer: "a",
    explanation: "Sublimation is universally considered the most constructive defense mechanism because it redirects primitive, unacceptable drives into socially commendable, productive channels.",
  },
  {
    id: "c12-edu-3-mcq-6",
    question: "Which of the following is considered an objective cause of maladjustment in students?",
    options: [
      "A):   Severe poverty and lack of basic learning infrastructure",
      "B):   Personal feeling of guilt",
      "C):   Inferiority complex",
      "D):   Unrealistic level of aspiration",
    ],
    correctAnswer: "a",
    explanation: "Poverty, destitution, and lack of school infrastructure are objective (external, material) causes of maladjustment.",
  },
  {
    id: "c12-edu-3-mcq-7",
    question: "A student who invents plausible, socially acceptable reasons to justify failing an examination is using which defense mechanism?",
    options: [
      "A):   Sublimation",
      "B):   Rationalization",
      "C):   Projection",
      "D):   Regression",
    ],
    correctAnswer: "b",
    explanation: "Rationalization involves inventing plausible, logical-sounding excuses to justify failure and shield the ego from humiliation.",
  },
  {
    id: "c12-edu-3-mcq-8",
    question: "Chronic nail-biting, thumb-sucking, and facial tics in a school student are categorized as:",
    options: [
      "A):   Psychosomatic and physical symptoms of maladjustment",
      "B):   Cognitive intellectual brilliance",
      "C):   Normal developmental achievements",
      "D):   Indicators of authoritative parenting",
    ],
    correctAnswer: "a",
    explanation: "Motor habits like nail-biting, thumb-sucking, and nervous tics are physical and psychosomatic manifestations of unresolved inner tension and maladjustment.",
  },
  {
    id: "c12-edu-3-mcq-9",
    question: "The defense mechanism in which an individual escapes from harsh reality into an imaginary world of instant wish-fulfillment is called:",
    options: [
      "A):   Sublimation",
      "B):   Fantasy / Daydreaming",
      "C):   Sweet Lemon",
      "D):   Direct problem solving",
    ],
    correctAnswer: "b",
    explanation: "Fantasy and Daydreaming allow an individual to mentally construct a world where all frustrated desires are effortlessly satisfied without real-world effort.",
  },
  {
    id: "c12-edu-3-mcq-10",
    question: "Which of the following is a primary characteristic of a well-adjusted individual?",
    options: [
      "A):   Extremely low frustration tolerance",
      "B):   Persistent hostility toward peers",
      "C):   Realistic self-knowledge and high frustration tolerance",
      "D):   Chronic dependence on defense mechanisms",
    ],
    correctAnswer: "c",
    explanation: "Realistic self-insight, self-acceptance, emotional balance, and high frustration tolerance are hallmarks of sound personal adjustment.",
  },

  // TIER 2: MODERATE CONCEPT APPLICATIONS (Q11 to Q18)
  {
    id: "c12-edu-3-mcq-11",
    question: "An aggressive teenager who channels his violent impulses into professional boxing and wins a national medal has demonstrated:",
    options: [
      "A):   Escapism",
      "B):   Sublimation",
      "C):   Rationalization",
      "D):   Fantasy",
    ],
    correctAnswer: "b",
    explanation: "Channeling aggressive, violent energy into disciplined sports like boxing or martial arts is a textbook example of Sublimation.",
  },
  {
    id: "c12-edu-3-mcq-12",
    question: "A poor clerk who claims that 'wealth is the root of all evil and poverty keeps the soul pure' is employing which specific form of rationalization?",
    options: [
      "A):   Sour Grapes",
      "B):   Sweet Lemon",
      "C):   Sublimation",
      "D):   Conquering Hero Fantasy",
    ],
    correctAnswer: "b",
    explanation: "Convincing oneself that an undesirable, impoverished situation forced upon them is actually sweet, noble, and desirable is the 'Sweet Lemon' mechanism.",
  },
  {
    id: "c12-edu-3-mcq-13",
    question: "Which of the following is a social cause of student maladjustment?",
    options: [
      "A):   Endocrine gland disorder",
      "B):   Sensory blindness",
      "C):   Toxic peer bullying and domestic marital warfare",
      "D):   Inborn mental handicap",
    ],
    correctAnswer: "c",
    explanation: "Domestic conflict, family breakdown, and peer bullying originate in interpersonal and cultural environments, making them social causes.",
  },
  {
    id: "c12-edu-3-mcq-14",
    question: "A student who avoids studying for difficult pre-board exams by binge-watching web series for 10 hours daily is exhibiting:",
    options: [
      "A):   Escapism",
      "B):   Sublimation",
      "C):   Direct problem solving",
      "D):   Accurate self-insight",
    ],
    correctAnswer: "a",
    explanation: "Escapism involves seeking temporary behavioral distraction and flight from stressful duties and responsibilities.",
  },
  {
    id: "c12-edu-3-mcq-15",
    question: "What distinguishes direct methods of coping from defense mechanisms?",
    options: [
      "A):   Direct methods operate unconsciously, while defense mechanisms are conscious",
      "B):   Direct methods attack the actual problem, while defense mechanisms distort reality to reduce anxiety",
      "C):   Direct methods always lead to neurosis",
      "D):   Direct methods are exclusively used by children",
    ],
    correctAnswer: "b",
    explanation: "Direct coping methods consciously address the objective barrier, whereas defense mechanisms unconsciously protect the ego by distorting reality.",
  },
  {
    id: "c12-edu-3-mcq-16",
    question: "In Shaffer's Cycle of Adjustment, what immediately follows the emergence of an unsatisfied Need or Drive?",
    options: [
      "A):   Sublimation",
      "B):   Encountering an Obstacle / Barrier",
      "C):   Instant relief",
      "D):   Complete maladjustment",
    ],
    correctAnswer: "b",
    explanation: "In Shaffer's model, a drive or need motivates action, but when it encounters a barrier or obstacle, varied coping behaviors are provoked.",
  },
  {
    id: "c12-edu-3-mcq-17",
    question: "A shy adolescent who imagines himself as an Olympic champion being applauded by millions is indulging in the:",
    options: [
      "A):   Suffering Hero Fantasy",
      "B):   Conquering Hero Fantasy",
      "C):   Sour Grapes Rationalization",
      "D):   Sweet Lemon Rationalization",
    ],
    correctAnswer: "b",
    explanation: "The 'Conquering Hero' fantasy involves daydreaming about extraordinary triumphs, glory, and public acclaim to compensate for feelings of weakness.",
  },
  {
    id: "c12-edu-3-mcq-18",
    question: "Which of the following parenting styles is most strongly associated with raising well-adjusted, confident adolescents?",
    options: [
      "A):   Authoritarian (rigid and harsh)",
      "B):   Permissive (negligent and zero rules)",
      "C):   Authoritative (warm, communicative, and firm boundaries)",
      "D):   Rejecting-neglecting",
    ],
    correctAnswer: "c",
    explanation: "Authoritative parenting provides high emotional warmth combined with clear democratic guidelines, fostering sound adolescent adjustment.",
  },

  // TIER 3: ADVANCED ANALYTICAL & CASE-BASED SCENARIOS (Q19 to Q25)
  {
    id: "c12-edu-3-mcq-19",
    question: "Rohan fails to qualify for the school cricket team. He asserts: 'The cricket pitch was poorly prepared and the coach is biased toward his relatives.' Which mechanism is Rohan utilizing?",
    options: [
      "A):   Rationalization",
      "B):   Sublimation",
      "C):   Escapism",
      "D):   Regression",
    ],
    correctAnswer: "a",
    explanation: "Rohan is fabricating external excuses (biased coach, bad pitch) to explain away his failure, which is a clear case of Rationalization.",
  },
  {
    id: "c12-edu-3-mcq-20",
    question: "When an adolescent continuously sets an unrealistically high Level of Aspiration that far exceeds their intellectual capacity, what is the most probable psychological consequence?",
    options: [
      "A):   Enhanced emotional poise",
      "B):   Chronic frustration, acute anxiety, and maladjustment",
      "C):   Elimination of defense mechanisms",
      "D):   Automatic attainment of sublimation",
    ],
    correctAnswer: "b",
    explanation: "A severe disparity between aspiration and ability inevitably causes repeated failure, leading to chronic frustration, guilt, and maladjustment.",
  },
  {
    id: "c12-edu-3-mcq-21",
    question: "A teacher observes that a 15-year-old student has started bunking classes (truancy), displaying unprovoked aggression, and biting his nails. These behaviors collectively signal:",
    options: [
      "A):   Superior scholastic readiness",
      "B):   A syndrome of underlying adolescent maladjustment",
      "C):   Positive development of sublimation",
      "D):   Successful completion of the adjustment cycle",
    ],
    correctAnswer: "b",
    explanation: "Truancy, aggression, and nail-biting are classic behavioral and physical symptoms of adolescent emotional maladjustment requiring prompt intervention.",
  },
  {
    id: "c12-edu-3-mcq-22",
    question: "Under the guidelines of the National Education Policy (NEP 2020), what institutional mechanism is strongly recommended in schools to curb student maladjustment?",
    options: [
      "A):   Strict corporal punishment squads",
      "B):   Dedicated School Guidance and Counseling Cells with trained counselors",
      "C):   Public posting of failure lists on notice boards",
      "D):   Immediate expulsion of all underperforming students",
    ],
    correctAnswer: "b",
    explanation: "NEP 2020 mandates setting up accessible Guidance and Counseling cells in schools to provide socio-emotional support and prevent maladjustment.",
  },
  {
    id: "c12-edu-3-mcq-23",
    question: "An adolescent girl experiencing intense heartbreak and emotional rejection writes a bestselling, deeply moving novel. Psychologically, this transformation is an example of:",
    options: [
      "A):   Sour Grapes Rationalization",
      "B):   Sublimation of emotional distress into creative literature",
      "C):   Escapism through daydreaming",
      "D):   Sweet Lemon Mechanism",
    ],
    correctAnswer: "b",
    explanation: "Channeling painful emotional turbulence into literary or artistic masterpieces is a sublime example of Sublimation.",
  },
  {
    id: "c12-edu-3-mcq-24",
    question: "Which of the following describes the 'Suffering Hero' (or Martyr) fantasy?",
    options: [
      "A):   Imagining conquering enemy armies in battle",
      "B):   Daydreaming about tragic illness or death to make guilt-ridden parents weep and repent",
      "C):   Pretending that hard work is unnecessary",
      "D):   Channeling anger into painting",
    ],
    correctAnswer: "b",
    explanation: "In the 'Suffering Hero' fantasy, the adolescent imagines suffering injury or tragic death so that neglectful parents or friends will feel overwhelming remorse.",
  },
  {
    id: "c12-edu-3-mcq-25",
    question: "Why does chronic reliance on defense mechanisms like escapism and rationalization ultimately exacerbate maladjustment instead of curing it?",
    options: [
      "A):   Because they resolve environmental barriers too quickly",
      "B):   Because they only reduce subjective anxiety temporarily while leaving the underlying objective problem unsolved",
      "C):   Because they convert all unconscious thoughts into conscious ones",
      "D):   Because they require excessive physical exercise",
    ],
    correctAnswer: "b",
    explanation: "Defense mechanisms mask anxiety without resolving the objective root cause; thus the real problem accumulates, deepening chronic maladjustment.",
  },
];
