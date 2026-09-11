// Class 12 Education Unit 2: Mental Health and Wellbeing (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #00C6FF (Electric Cyan / Vivid Cyan Blue matching Chapter 2)

const themeColor = "#00C6FF";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Edu2HtmlOverview = `
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
  <div style="background: rgba(0, 198, 255, 0.06); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">🧠 Quick Glossary &amp; Core Mental Health Concepts</h2>
    <p class="text-center" style="color: #80E5FF; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Class 12 Unit 2: Mental Health and Wellbeing (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Mental Health (WHO Definition):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A state of holistic mental wellbeing that enables people to realize their abilities, cope with the normal stresses of life, learn and work productively, and contribute fruitfully to their community.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Mental Hygiene:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The applied scientific discipline consisting of practical measures and environmental conditions designed to preserve mental health, prevent mental disorders, and facilitate psychiatric adjustment (pioneered by Clifford Beers).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Eustress vs. Distress:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">As formulated by endocrinologist Hans Selye, <b>Eustress</b> is positive, constructive, motivating stress that enhances performance, whereas <b>Distress</b> is destructive, unmanageable negative stress that triggers physical and psychological exhaustion.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Body Dysmorphic Disorder (BDD):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A severe psychological condition characterized by an obsessive, distressing preoccupation with perceived minor or non-existent flaws in one's physical appearance, heavily exacerbated by digital social media filters.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Authoritative Parenting:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A balanced child-rearing style characterized by high emotional warmth, active open communication, and firm but reasonable behavioral boundaries, universally recognized as the optimal parenting style for adolescent mental health.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 2.1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2.1 Mental health: definition and meaning</h2>

  <p>For centuries, human society held a deeply flawed, negative view of health &mdash; regarding health merely as the mechanical absence of physical disease or visible bodily infection. However, modern educational psychology and medical science have established that the human mind and body form an indissoluble psycho-somatic unity. A student may possess perfect twenty-twenty vision and muscular strength, but if they are paralyzed by chronic examination anxiety, consumed by feelings of worthlessness, or unable to form meaningful friendships, they cannot be considered healthy. <b>Mental health is the essential foundation upon which all learning, intellectual achievement, emotional happiness, and social productivity are constructed.</b></p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Authoritative Definitions of Mental Health</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 18px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: ${themeColor};">1. World Health Organization (WHO):</b> <i>"Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community. It is an integral component of health and well-being that underpins our individual and collective abilities to make decisions, build relationships and shape the world we live in."</i>
    </p>
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: ${themeColor};">2. Karl Menninger:</b> <i>"Mental health is the adjustment of human beings to the world and to each other with a maximum of effectiveness and happiness &mdash; not just efficiency, or just contentment &mdash; but both. It means having an even temper, an alert intelligence, socially considerate behavior, and a happy disposition."</i>
    </p>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: ${themeColor};">3. J.A. Hadfield:</b> <i>"Mental health is the full and harmonious functioning of the whole personality."</i>
    </p>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Core Characteristics of a Mentally Healthy Individual</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">1. Realistic Self-Insight and Self-Acceptance:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        A mentally healthy student possesses an accurate understanding of their own strengths, aptitudes, and personal limitations. They accept themselves without debilitating inferiority complexes or grandiose egotism.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">2. Emotional Equilibrium and Self-Regulation:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        They experience normal human emotions &mdash; joy, sorrow, anger, fear &mdash; but are not enslaved by them. They possess frustration tolerance and do not collapse into hysterical outbursts or violent aggression when faced with disappointment.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">3. Warm and Satisfying Interpersonal Relationships:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        They have the capacity to trust others, give and receive genuine affection, respect boundaries, and cooperate generously with peers without feeling threatened.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">4. Purposeful Living and Social Adaptability:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        They pursue clear, meaningful goals, possess self-direction, adapt flexibly to changing environmental demands, and find genuine satisfaction in social service and community life.
      </p>
    </div>
  </div>

  <!-- SECTION 2.2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">2.2 Factors impacting mental health: stress, relationship disorders, dysmorphia, substance abuse</h2>

  <p>Adolescence is universally acknowledged by psychologists as a period of profound physical metamorphosis, hormonal turbulence, and emotional vulnerability (G. Stanley Hall famously characterized it as a period of <i>"Storm and Stress"</i>). In our modern hyper-competitive, digitally saturated environment, four major pathological factors exert a devastating impact on young people's psychological equilibrium:</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Chronic Psychological Stress</h3>
  <p>Unlike transient, healthy challenges, <b>chronic, unrelenting stress</b> floods the developing brain with toxic levels of cortisol and adrenaline. Academic overload, board examination terror, relentless parental comparison, and unrealistic perfectionism induce cognitive paralysis, chronic sleep deprivation, migraines, and clinical anxiety disorders.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Relationship Disorders &amp; Interpersonal Trauma</h3>
  <p>Human beings are biologically wired for connection. When adolescents experience relational breakdowns &mdash; such as parental divorce, constant domestic conflict, severe emotional neglect, toxic peer cliques, bullying, or painful romantic betrayals &mdash; they suffer from profound attachment trauma. This manifests as chronic mistrust, severe social anxiety, emotional withdrawal, or borderline personality maladjustments.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Body Dysmorphic Disorder (Dysmorphia / BDD)</h3>
  <p>In our contemporary era of Instagram, TikTok, and algorithmically curated photo-filtering apps, body image dissatisfaction has evolved into a clinical epidemic. <b style="color: ${themeColor};">Body Dysmorphia</b> is a psychiatric disorder where an adolescent becomes obsessively fixated on perceived minor or imaginary physical defects (e.g., skin blemishes, body weight, facial symmetry, height). This leads to compulsive mirror-checking, extreme social withdrawal, severe depression, and fatal eating disorders like <i>Anorexia Nervosa</i> and <i>Bulimia</i>.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iv) Substance Abuse &amp; Chemical Dependency</h3>
  <p>When adolescents lack emotional coping skills and face overwhelming distress, they frequently turn to chemical self-medication. What begins as curiosity, peer pressure, or an escape from anxiety &mdash; vaping, tobacco, alcohol, cannabis, synthetic opioids, or prescription tranquilizers &mdash; rapidly alters the neural reward pathways of the prefrontal cortex, leading to devastating chemical dependency, cognitive decline, emotional volatility, academic collapse, and antisocial criminality.</p>

  <!-- SECTION 2.3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">2.3 Causes of poor mental health: personal, social and hereditary</h2>

  <p>Mental health disorders do not arise from a single isolated cause; they result from a complex, multi-factorial interplay of biological, social, and psychological determinants (the <b>Bio-Psycho-Social Model</b>):</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">1. Personal and Psychological Causes:</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: ${themeColor};">Cognitive Distortions:</b> Habits of catastrophizing minor failures, all-or-nothing thinking, and extreme self-blame.</li>
        <li><b style="color: ${themeColor};">Physical Ill-Health &amp; Biochemical Imbalances:</b> Chronic illnesses, severe nutritional deficiencies, and neurotransmitter dysregulations (such as depleted serotonin, dopamine, or GABA levels in the brain).</li>
        <li><b style="color: ${themeColor};">Unresolved Childhood Trauma:</b> Repressed memories of physical, emotional, or sexual abuse that fester in the unconscious mind.</li>
      </ul>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">2. Social and Environmental Causes:</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: ${themeColor};">Dysfunctional Home Atmosphere:</b> Broken homes, constant domestic warfare between parents, alcoholism in the family, or authoritarian parenting.</li>
        <li><b style="color: ${themeColor};">School-Related Stressors:</b> Vicious classroom bullying, public humiliation by insensitive teachers, cut-throat grade rankings, and lack of recreational sports.</li>
        <li><b style="color: ${themeColor};">Socio-Economic Deprivation &amp; Digital Overload:</b> Severe poverty, social discrimination, unemployment fear, and toxic digital social media culture.</li>
      </ul>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">3. Hereditary and Genetic Causes:</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: ${themeColor};">Genetic Vulnerability:</b> Twin and family studies demonstrate that predispositions to clinical depression, bipolar affective disorder, schizophrenia, and anxiety disorders have strong genetic linkages.</li>
        <li><b style="color: ${themeColor};">Inborn Temperament:</b> Neurobiological differences in sensory reactivity and nervous system fragility inherited at birth.</li>
      </ul>
    </div>
  </div>

  <!-- SECTION 2.4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">2.4 Stress in children and adolescents: meaning, causes, types and management</h2>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Meaning of Stress and Hans Selye's Formulation</h3>
  <p>The concept of biological stress was pioneered by the Austrian-Canadian endocrinologist <b style="color: ${themeColor};">Hans Selye</b>, who defined stress as: <i>"The non-specific response of the body to any demand made upon it."</i> Any physical, emotional, or environmental stimulus that disrupts the body's internal physiological equilibrium (homeostasis) is termed a <b>Stressor</b>.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) The Two Fundamental Faces of Stress: Eustress vs. Distress</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #34D399; font-size: 16px;">🌱 1. Eustress (Positive, Constructive Stress):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        From the Greek prefix <i>eu-</i> (meaning 'good' or 'well'). Eustress is optimal, motivating arousal that sparks enthusiasm, heightens focus, sharpens cognitive faculties, and inspires a student to prepare diligently for an upcoming competition or examination. Under the <b>Yerkes-Dodson Law</b>, performance increases with physiological or mental arousal up to an optimal peak point.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #F87171; font-size: 16px;">⚡ 2. Distress (Negative, Destructive Stress):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        From the Latin <i>distringere</i> (meaning 'to draw apart' or 'hinder'). When stress exceeds an individual's coping capacity and becomes chronic or excessive, it transforms into Distress. It causes emotional paralysis, memory blackouts during exams, chronic insomnia, depression, and immune suppression.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: YERKES-DODSON CURVE (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 198, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 240" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="240" fill="#FFFDF8" rx="8" />

        <!-- Axes -->
        <line x1="45" y1="200" x2="410" y2="200" stroke="#334155" stroke-width="2.5" />
        <line x1="45" y1="25" x2="45" y2="200" stroke="#334155" stroke-width="2.5" />

        <!-- Axis Labels -->
        <text x="227" y="226" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">Arousal / Stress Level &rarr;</text>
        <text x="18" y="115" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle" transform="rotate(-90 18 115)">Performance &rarr;</text>

        <!-- Yerkes-Dodson Bell Curve -->
        <path d="M 55 195 Q 120 180 180 70 Q 225 35 270 70 Q 330 180 395 195" fill="rgba(0, 198, 255, 0.12)" stroke="#0284C7" stroke-width="3" />

        <!-- Peak Zone: Optimal Performance -->
        <circle cx="225" cy="35" r="5" fill="#10B981" stroke="#FFFFFF" stroke-width="2" />
        <line x1="225" y1="35" x2="225" y2="200" stroke="#10B981" stroke-width="1.8" stroke-dasharray="3,3" />
        <text x="225" y="24" font-size="10.5" font-weight="bold" fill="#059669" text-anchor="middle">OPTIMAL PERFORMANCE</text>

        <!-- Low Stress Zone -->
        <text x="100" y="160" font-size="9.5" font-weight="bold" fill="#64748B" text-anchor="middle">Under-arousal</text>
        <text x="100" y="174" font-size="8.5" fill="#475569" text-anchor="middle">(Boredom / Inaction)</text>

        <!-- EUSTRESS Zone -->
        <rect x="145" y="105" width="70" height="24" rx="4" fill="#DCFCE7" stroke="#10B981" stroke-width="1.2" />
        <text x="180" y="121" font-size="10" font-weight="bold" fill="#15803D" text-anchor="middle">EUSTRESS</text>

        <!-- DISTRESS Zone -->
        <rect x="275" y="105" width="70" height="24" rx="4" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.2" />
        <text x="310" y="121" font-size="10" font-weight="bold" fill="#B91C1C" text-anchor="middle">DISTRESS</text>

        <!-- High Stress Zone -->
        <text x="360" y="160" font-size="9.5" font-weight="bold" fill="#DC2626" text-anchor="middle">Overload &amp; Burnout</text>
        <text x="360" y="174" font-size="8.5" fill="#991B1B" text-anchor="middle">(Anxiety / Exhaustion)</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Yerkes-Dodson Law of Stress: Moderate stress (Eustress) stimulates peak academic performance, but excessive, prolonged stress (Distress) triggers cognitive collapse and burnout.
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(iii) Multi-Tiered Stress Management Strategies</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">1. Cognitive Restructuring:</b> Challenging irrational catastrophizing thoughts (e.g., replacing *"If I don't score 95%, my life is ruined"* with *"A test score is a feedback on my preparation, not a measure of my human worth"*).</li>
    <li><b style="color: ${themeColor};">2. Physiological Regulation:</b> Daily 30 minutes of aerobic exercise, diaphragmatic deep breathing (Pranayama), progressive muscle relaxation, and enforcing strict 8-hour sleep hygiene.</li>
    <li><b style="color: ${themeColor};">3. Time &amp; Task Management:</b> Breaking monolithic textbooks into manageable micro-goals (Pomodoro technique), eliminating digital multitasking during study hours.</li>
    <li><b style="color: ${themeColor};">4. Creative Emotional Catharsis:</b> Channeling stress into art, music, journaling, sports, and confiding in trusted counselors or friends.</li>
  </ul>

  <!-- SECTION 2.5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">2.5 Role of parents and teachers in the achievement of sound mental health</h2>

  <p>Children spend the overwhelming majority of their formative developmental years shuttling between two primary ecosystems &mdash; the <b>Home</b> and the <b>School</b>. The mental health of an adolescent is directly shaped by the emotional climate created by parents and teachers:</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) The Crucial Role of Parents</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">1. Adopting an Authoritative Parenting Style:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Psychological research proves that Authoritative parenting (high emotional warmth combined with clear, democratic boundaries) produces resilient, confident children, whereas Authoritarian parenting (harsh criticism, coldness) breeds crippling anxiety and rebellion.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">2. Complete Elimination of Toxic Comparison:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Comparing a child's marks to siblings, cousins, or neighbors kills self-esteem and triggers corrosive sibling rivalry. Parents must unconditionally accept and celebrate the child's unique talents and individuality.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">3. Providing a Non-Judgmental Emotional Safety Valve:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Creating an open communication channel where the teenager feels completely safe to confess academic struggles, emotional heartbreaks, or mistakes without fear of violent rage or contempt.
      </p>
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) The Vital Role of Teachers &amp; School Environment</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">1. Cultivating an Anxiety-Free, Joyful Classroom:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Eradicating corporal punishment, sarcastic ridicule, and public humiliation. Fostering a growth mindset where mistakes are treated as natural learning opportunities.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">2. Early Detection of Warning Signals:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Trained teachers serve as frontline mental health guardians, spotting early red flags: sudden drops in academic performance, chronic lethargy, social withdrawal, self-harm scars, or uncharacteristic aggressive outbursts.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">3. Institutionalizing Guidance Cells &amp; Peer Support:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Providing accessible, confidential counseling services and establishing anti-bullying squads to guarantee emotional and physical safety for all students.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 2: COLLABORATIVE SUPPORT PYRAMID (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 198, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="24" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">HOLISTIC ADOLESCENT MENTAL HEALTH ECOSYSTEM</text>

        <!-- Base: School & Community (Bottom) -->
        <polygon points="40,210 400,210 360,150 80,150" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.8" />
        <text x="220" y="176" font-size="11.5" font-weight="bold" fill="#0369A1" text-anchor="middle">3. SCHOOL &amp; TEACHER SANCTUARY</text>
        <text x="220" y="194" font-size="9" fill="#475569" text-anchor="middle">Anti-bullying &bull; Joyful Classrooms &bull; Professional Counseling Cells</text>

        <!-- Middle: Parent & Family -->
        <polygon points="80,150 360,150 315,95 125,95" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.8" />
        <text x="220" y="122" font-size="11.5" font-weight="bold" fill="#0284C7" text-anchor="middle">2. HOME &amp; PARENTAL HARBOR</text>
        <text x="220" y="138" font-size="9" fill="#334155" text-anchor="middle">Unconditional Acceptance &bull; Active Listening &bull; Zero Comparison</text>

        <!-- Apex: The Resilient Adolescent -->
        <polygon points="125,95 315,95 220,40" fill="#00C6FF" stroke="#0284C7" stroke-width="2" />
        <text x="220" y="68" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">1. RESILIENT YOUTH</text>
        <text x="220" y="82" font-size="8.5" fill="#F0F9FF" text-anchor="middle">Self-Acceptance &bull; Coping Skills</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Collaborative Support Pyramid: Sound adolescent mental health rests upon the unshakeable foundation of a compassionate school, fortified by an emotionally secure home harbor.
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: Q & A (SOLUTIONS)                          */
/* -------------------------------------------------------------------------- */

export const c12Edu2HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(0, 198, 255, 0.08); border-left: 4px solid ${themeColor}; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
    <h3 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 18px; font-weight: bold;">🎯 Golden 25 Board Examination Q &amp; A Blueprint</h3>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">
      Class 12 Unit 2: Mental Health and Wellbeing (10 Marks) &bull; Strictly 12 VSAT (1 &amp; 2 Marks), 8 SAT (4 Marks), and 5 LAT (6 Marks).
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER TYPE (1 & 2 MARKS) - 12 QUESTIONS          -->
  <!-- ======================================================================== -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 25px;">
    Section A: Very Short Answer Questions (1 &amp; 2 Marks)
  </h2>

  <!-- Q1 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q1: Define Mental Health according to the World Health Organization (WHO).</h3>
    <p style="color: #FFFFFF; margin: 0;">
      According to the <b style="color: ${themeColor};">WHO</b>, mental health is a state of mental wellbeing that enables individuals to realize their abilities, cope with the normal stresses of life, learn and work productively, and contribute fruitfully to their community.
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q2: Who pioneered the modern 'Mental Hygiene' movement?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The Mental Hygiene movement was pioneered by <b style="color: ${themeColor};">Clifford Beers</b> in the United States following the publication of his autobiographical book <i>"A Mind That Found Itself"</i> (1908).
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q3: Differentiate between Eustress and Distress.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: ${themeColor};">Eustress</b> is positive, constructive stress that motivates, focuses energy, and enhances performance. <b style="color: ${themeColor};">Distress</b> is negative, debilitating stress that exceeds coping capacity and causes physical, emotional, and mental breakdown.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q4: What is Body Dysmorphic Disorder (Dysmorphia)?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: ${themeColor};">Body Dysmorphic Disorder (BDD)</b> is an obsessive mental health condition where an individual obsessively worries over perceived minor or non-existent flaws in their physical appearance, leading to severe anxiety and social avoidance.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q5: State two personal causes of poor mental health in students.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: ${themeColor};">Low self-esteem</b> and persistent negative self-talk; (2) <b style="color: ${themeColor};">Unrealistic perfectionism</b> where a student views anything less than 100% as a catastrophic failure.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q6: State two social causes of poor mental health originating from the school environment.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) Chronic <b style="color: ${themeColor};">peer bullying and cyber-harassment</b>; (2) Public <b style="color: ${themeColor};">humiliation or harsh sarcasm</b> by insensitive educators in front of classmates.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q7: Name two hereditary or genetic factors linked to mental health vulnerability.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) Family genetic predisposition to <b style="color: ${themeColor};">bipolar and depressive disorders</b>; (2) Inborn <b style="color: ${themeColor};">neurobiological hypersensitivity</b> to environmental stressors.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q8: State the Yerkes-Dodson Law in relation to stress and academic performance.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: ${themeColor};">Yerkes-Dodson Law</b> dictates an inverted-U relationship: performance increases with physiological or mental arousal (Eustress) up to an optimal peak, beyond which further stress (Distress) causes severe performance deterioration.
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q9: What is substance abuse? Give two examples commonly observed among youth.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: ${themeColor};">Substance abuse</b> is the harmful, compulsive, and hazardous use of psychoactive substances for mood alteration or anxiety escape. Common examples include nicotine/vaping and alcohol consumption.
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q10: Mention two early behavioral warning signs of depression in an adolescent student.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) Sudden <b style="color: ${themeColor};">withdrawal from friends and social activities</b>; (2) Drastic, unexplained <b style="color: ${themeColor};">drop in academic grades</b> accompanied by chronic fatigue and lethargy.
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q11: How does social media contribute to body dysmorphia among teenagers?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      By exposing impressionable adolescents to heavily edited, artificial beauty standards and constant upward social comparison, creating deep feelings of physical inadequacy and body dissatisfaction.
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin: 18px 0;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin-bottom: 6px;">Q12: State two physiological techniques for immediate stress reduction during examinations.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: ${themeColor};">Diaphragmatic deep breathing</b> (4-7-8 breathing) to activate the parasympathetic nervous system; (2) <b style="color: ${themeColor};">Progressive muscle relaxation</b> to release physical tension from the neck and shoulders.
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER TYPE (4 MARKS) - 8 QUESTIONS                     -->
  <!-- ======================================================================== -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    Section B: Short Answer Questions (4 Marks)
  </h2>

  <!-- Q13 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q13: Explain four major characteristics of a mentally healthy individual.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Accurate Self-Perception and Acceptance:</b> Possesses realistic knowledge of one's abilities, weaknesses, and emotional triggers without self-hatred.</li>
      <li><b style="color: ${themeColor};">2. Emotional Stability and Resilience:</b> Remains composed during adversity, possesses healthy frustration tolerance, and bounces back from setbacks.</li>
      <li><b style="color: ${themeColor};">3. Satisfying Social Adjustment:</b> Capable of forming deep, empathetic, and trusting friendships while respecting personal boundaries.</li>
      <li><b style="color: ${themeColor};">4. Purposeful Self-Direction:</b> Sets clear, achievable goals, makes independent decisions, and works productively for community welfare.</li>
    </ul>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q14: Discuss how chronic stress and relationship disorders negatively affect adolescent wellbeing.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Cognitive Impairment:</b> Sustained high cortisol levels shrink hippocampal synapses, crippling working memory, focus, and analytical problem-solving.</li>
      <li><b style="color: ${themeColor};">2. Psychosomatic Ailments:</b> Unrelieved stress causes chronic tension headaches, gastrointestinal upset, insomnia, and compromised immune resistance.</li>
      <li><b style="color: ${themeColor};">3. Attachment and Trust Breakdown:</b> Relational betrayal or domestic trauma produces emotional numbness, attachment disorders, and fear of intimacy.</li>
      <li><b style="color: ${themeColor};">4. Vulnerability to Depressive Illness:</b> Persistent relationship friction and chronic stress generate feelings of helplessness and clinical depression.</li>
    </ul>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q15: Analyze the impact of body dysmorphia and social media comparison on teenagers.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Obsessive Preoccupation with Flaws:</b> Teenagers spend hours agonizing over minor skin blemishes, facial features, or body weight in mirrors.</li>
      <li><b style="color: ${themeColor};">2. Severe Social Avoidance:</b> Sufferers refuse to attend school, attend family functions, or appear in photographs due to intense appearance shame.</li>
      <li><b style="color: ${themeColor};">3. Trigger for Deadly Eating Disorders:</b> Fixation on achieving unrealistic digital aesthetics triggers Anorexia Nervosa and Bulimia.</li>
      <li><b style="color: ${themeColor};">4. Severe Depression and Self-Harm:</b> Body dysmorphia is statistically linked to high rates of severe adolescent depression and self-harming ideation.</li>
    </ul>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q16: Explain the hereditary and environmental causes of poor mental health.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Genetic Predisposition:</b> Offspring of parents with clinical depression or bipolar disorders inherit genetic susceptibilities in brain neurochemistry.</li>
      <li><b style="color: ${themeColor};">2. Neurobiological Vulnerability:</b> Inherited variations in serotonin receptors and autonomic nervous system reactivity make certain children easily distressed.</li>
      <li><b style="color: ${themeColor};">3. Dysfunctional Family Environment:</b> Severe parental conflict, neglect, domestic violence, and emotional coldness undermine psychological security.</li>
      <li><b style="color: ${themeColor};">4. Toxic Academic Atmosphere:</b> Excessive academic pressure, lack of leisure, and school bullying trigger latent vulnerabilities into active illness.</li>
    </ul>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q17: Distinguish between acute stress and chronic stress with four points of difference.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Duration:</b> Acute stress is short-lived (e.g., giving an oral speech); chronic stress persists continuously over months (e.g., toxic family home).</li>
      <li><b style="color: ${themeColor};">2. Physiological Recovery:</b> In acute stress, the body returns quickly to homeostasis; in chronic stress, the fight-or-flight system is perpetually activated.</li>
      <li><b style="color: ${themeColor};">3. Health Consequences:</b> Acute stress is manageable and rarely causes organic harm; chronic stress causes hypertension, depression, and immune burnout.</li>
      <li><b style="color: ${themeColor};">4. Performance Impact:</b> Acute stress can enhance momentary focus; chronic stress permanently impairs cognitive memory and executive functioning.</li>
    </ul>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q18: Describe four effective cognitive and behavioral stress management techniques for students.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Cognitive Restructuring:</b> Replacing catastrophic, irrational thoughts (*"I will fail and ruin my future"*) with realistic, empowering affirmations.</li>
      <li><b style="color: ${themeColor};">2. Structured Time Management:</b> Using the Pomodoro technique (25 min study + 5 min rest) and breaking bulky syllabi into small, achievable steps.</li>
      <li><b style="color: ${themeColor};">3. Mindfulness Meditation and Pranayama:</b> Daily 15-minute conscious breath regulation to quiet the sympathetic nervous system and center focus.</li>
      <li><b style="color: ${themeColor};">4. Regular Aerobic Exercise:</b> Physical sports and brisk walking release endorphins that naturally neutralize cortisol and elevate mood.</li>
    </ul>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q19: Explain four concrete roles parents should play to safeguard their child's mental health.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Unconditional Emotional Acceptance:</b> Reassuring the child that parental love is not contingent on board exam marks or class ranks.</li>
      <li><b style="color: ${themeColor};">2. Active, Empathetic Listening:</b> Setting aside undivided daily time to listen to the teenager's feelings without lecturing, mocking, or judging.</li>
      <li><b style="color: ${themeColor};">3. Avoiding Harmful Comparison:</b> Strictly refusing to compare the student with classmates, cousins, or siblings, respecting individual pacing.</li>
      <li><b style="color: ${themeColor};">4. Promoting Healthy Lifestyle Balance:</b> Enforcing regular sleep hours, nutritious meals, screen-time boundaries, and time for physical play.</li>
    </ul>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0; background: rgba(15, 23, 42, 0.7); border-radius: 8px; padding: 14px 16px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin-bottom: 8px;">Q20: Discuss four proactive steps teachers can implement to foster a mentally healthy classroom.</h3>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0;">
      <li><b style="color: ${themeColor};">1. Creating a Fear-Free Learning Space:</b> Banning all sarcasm, ridicule, and corporal punishment, making mistakes a natural part of inquiry.</li>
      <li><b style="color: ${themeColor};">2. Spotting Early Warning Signs:</b> Vigilantly identifying students exhibiting sudden withdrawal, extreme fatigue, or falling grades and offering gentle support.</li>
      <li><b style="color: ${themeColor};">3. Integrating Life Skills &amp; Peer Collaboration:</b> Using group discussions and collaborative projects to build communication, empathy, and mutual respect.</li>
      <li><b style="color: ${themeColor};">4. Facilitating Professional Guidance:</b> Connecting struggling students with the school guidance counselor without attaching social stigma.</li>
    </ul>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION C: LONG ANSWER TYPE (6 MARKS) - 5 QUESTIONS                      -->
  <!-- ======================================================================== -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">
    Section C: Long Answer Questions (6 Marks)
  </h2>

  <!-- Q21 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q21: What is Mental Health? Discuss in detail its meaning, positive criteria, and the critical importance of mental hygiene in school education.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p><b style="color: ${themeColor};">1. Introduction &amp; Concept:</b><br/>
      Mental health is not merely the clinical absence of psychosis or depression; it is a positive state of dynamic psychological wellbeing, emotional harmony, and social adaptability. As Karl Menninger affirmed, it is the adjustment of human beings to the world and to each other with a maximum of effectiveness and happiness.</p>

      <p><b style="color: ${themeColor};">2. Core Positive Criteria of Mental Health:</b></p>
      <ul style="padding-left: 20px;">
        <li><b style="color: ${themeColor};">(a) Realistic Self-Acceptance:</b> Objective awareness of personal strengths and limitations without toxic inferiority.</li>
        <li><b style="color: ${themeColor};">(b) Emotional Self-Regulation:</b> Freedom from overwhelming anxieties, constructive handling of anger, and resilience during crises.</li>
        <li><b style="color: ${themeColor};">(c) Social Empathy &amp; Trust:</b> Capacity to form enduring, respectful relationships and engage in collaborative teamwork.</li>
        <li><b style="color: ${themeColor};">(d) Meaningful Productivity:</b> Channeling mental faculties toward productive learning, career goals, and civic contribution.</li>
      </ul>

      <p><b style="color: ${themeColor};">3. Role of Mental Hygiene in Schools:</b><br/>
      Mental hygiene fulfills three vital functions: (1) <i>Preventive</i> (eliminating school stressors and bullying); (2) <i>Preservative</i> (maintaining students' emotional balance through counseling and sports); and (3) <i>Curative</i> (providing therapeutic intervention for students suffering from severe maladjustment).</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q22: Critically examine the various factors impacting adolescent mental health (stress, relationship disorders, dysmorphia, and substance abuse) in the contemporary digital era.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p><b style="color: ${themeColor};">1. Introduction:</b><br/>
      Adolescence is a delicate developmental bridge between childhood and adulthood. In our contemporary digital era, adolescents face unprecedented psychological pressures that destabilize mental wellbeing.</p>

      <p><b style="color: ${themeColor};">2. Analysis of the Four Critical Factors:</b></p>
      <ul style="padding-left: 20px;">
        <li><b style="color: ${themeColor};">(a) Academic Stress &amp; Burnout:</b> Hyper-competitive exam coaching culture, parental perfectionism, and fear of failure subject teenagers to chronic cognitive overload, leading to insomnia, anxiety, and depressive episodes.</li>
        <li><b style="color: ${themeColor};">(b) Relationship Disorders:</b> Fragmented family structures, parental conflict, and superficial digital connections rob adolescents of genuine emotional anchors, inducing chronic loneliness and attachment trauma.</li>
        <li><b style="color: ${themeColor};">(c) Body Dysmorphia &amp; Digital Comparison:</b> Filter-driven social media platforms promote impossible aesthetic ideals, causing adolescents to obsessively despise their physical bodies, triggering eating disorders and self-loathing.</li>
        <li><b style="color: ${themeColor};">(d) Substance Abuse:</b> Vaping, alcohol, and pharmaceutical drug misuse often begin as maladaptive escapes from mental pain, but quickly cause neurological damage, addiction, and personal destruction.</li>
      </ul>

      <p><b style="color: ${themeColor};">3. Conclusion:</b><br/>
      Combating these challenges requires a concerted multi-agency intervention combining school mental health curricula, digital literacy, parental guidance, and youth counseling cells.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q23: Define Stress. Explain in detail the causes, types (Eustress vs Distress), physiological effects, and multi-dimensional management strategies for school students.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p><b style="color: ${themeColor};">1. Definition &amp; Types:</b><br/>
      Hans Selye defined stress as the non-specific physiological and psychological response of the body to any demand. It is divided into: (1) <b>Eustress</b> (beneficial, motivating stress that optimizes performance under the Yerkes-Dodson Law); and (2) <b>Distress</b> (destructive, unmanageable overload causing physical and mental breakdown).</p>

      <p><b style="color: ${themeColor};">2. Causes of Adolescent Stress:</b><br/>
      Board exam terrors, parental expectations, peer pressure, physiological pubertal transitions, identity confusion, and digital social media competition.</p>

      <p><b style="color: ${themeColor};">3. Physiological &amp; Psychological Effects:</b><br/>
      Chronic stress elevates cortisol and adrenaline, causing headaches, digestive disorders, weakened immunity, sleep disturbances, memory impairment, and emotional volatility.</p>

      <p><b style="color: ${themeColor};">4. Multi-Dimensional Management Strategies:</b></p>
      <ul style="padding-left: 20px;">
        <li><b style="color: ${themeColor};">(a) Cognitive:</b> Cognitive reframing, positive self-talk, and realistic goal setting.</li>
        <li><b style="color: ${themeColor};">(b) Behavioral:</b> Pomodoro study intervals, disciplined sleep schedules, and prioritizing tasks.</li>
        <li><b style="color: ${themeColor};">(c) Physiological:</b> Aerobic sports, diaphragmatic Pranayama, and progressive muscle relaxation.</li>
        <li><b style="color: ${themeColor};">(d) Emotional:</b> Seeking counseling, peer sharing, and creative artistic expression.</li>
      </ul>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px;">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q24: Discuss the comprehensive role of the home, school, parents, and teachers in the prevention of mental health disorders and the achievement of sound emotional wellbeing.</h3>
    <div style="line-height: 1.8; color: #FFFFFF;">
      <p><b style="color: ${themeColor};">1. The Home &amp; Parents as the Primary Emotional Sanctuary:</b><br/>
      Home must be a secure emotional harbor where the child receives unconditional love independent of marks. Parents must adopt authoritative parenting (warmth + firm guidance), eliminate toxic comparisons with peers, listen actively without judgment, and protect family harmony from domestic strife.</p>

      <p><b style="color: ${themeColor};">2. The School &amp; Teachers as the Social Shield:</b><br/>
      Teachers spend maximum daytime hours with adolescents and serve as frontline guardians:</p>
      <ul style="padding-left: 20px;">
        <li><b style="color: ${themeColor};">(a) Anxiety-Free Classroom Culture:</b> Eradicating humiliation, sarcasm, and corporal punishment; treating mistakes as natural learning steps.</li>
        <li><b style="color: ${themeColor};">(b) Early Screening:</b> Identifying subtle behavioral shifts (withdrawal, sudden grade drops, uncharacteristic lethargy) and initiating gentle support.</li>
        <li><b style="color: ${themeColor};">(c) Institutional Counseling:</b> Establishing dedicated, confidential school guidance cells and mental health clubs.</li>
        <li><b style="color: ${themeColor};">(d) Holistic Life Skills:</b> Promoting the WHO 10 core life skills (stress management, empathy, critical thinking) through co-curricular activities.</li>
      </ul>

      <p><b style="color: ${themeColor};">3. Conclusion:</b><br/>
      When parents and teachers forge a harmonious, collaborative partnership, students develop resilient psychological shields to thrive in an unpredictable world.</p>
    </div>
  </div>

  <!-- Q25: COMPREHENSIVE CASE STUDY (6 MARKS) -->
  <div style="margin: 24px 0; background: rgba(15, 23, 42, 0.75); border-radius: 10px; padding: 18px 20px; border-left: 4px solid ${themeColor};">
    <h3 style="color: ${themeColor}; font-size: 18px; margin-bottom: 12px;">Q25: [Board Examination Case Study] Read the real-world adolescent psychological case scenario below and answer all sub-questions:</h3>
    
    <div style="background: rgba(0,0,0,0.3); padding: 14px 16px; border-radius: 6px; font-style: italic; color: #E2E8F0; line-height: 1.7; margin-bottom: 14px;">
      "Aarav, a 17-year-old Class 12 student, was historically a consistent academic performer. However, six months prior to the board examinations, his parents enrolled him in intensive weekend coaching while simultaneously comparing his scores to his elder brother, who had secured admission to a premier engineering institute. Aarav began experiencing chronic insomnia, frequent panic attacks before mock tests, and severe loss of appetite.
      <br/><br/>
      His class teacher observed that Aarav had stopped playing basketball during lunch, looked pale, and had uncharacteristically failed his mid-term physics assessment. When questioned privately, Aarav broke down in tears, confessing that he felt like a total family failure, despised looking in the mirror because of sudden acne breakouts, and was experiencing constant feelings of worthlessness."
    </div>

    <div style="line-height: 1.8; color: #FFFFFF;">
      <p><b style="color: ${themeColor};">(a) Identify the primary stressors and psychological disorders affecting Aarav. (1.5 Marks)</b><br/>
      Aarav is suffering from <b>severe academic burnout and panic disorder</b> triggered by intense chronic distress (academic overload + parental comparison), exacerbated by <b>emerging body dysmorphia</b> (distress over acne) and low self-worth.</p>

      <p><b style="color: ${themeColor};">(b) What mistakes did the parents commit from a mental health perspective? (1.5 Marks)</b><br/>
      The parents engaged in: (1) Toxic sibling comparison, undermining Aarav's unique identity; (2) Imposing extreme academic overload without leisure or recovery; and (3) Creating an conditional emotional environment where love was tied strictly to competitive marks.</p>

      <p><b style="color: ${themeColor};">(c) Outline the immediate steps the school teacher and counselor must take. (1.5 Marks)</b><br/>
      (1) Provide immediate empathetic reassurance, validating Aarav's feelings without judgment; (2) Convene a sensitive counseling conference with the parents to educate them on the dangers of burnout and comparison; (3) Facilitate regular counseling sessions focused on cognitive reframing and relaxation techniques.</p>

      <p><b style="color: ${themeColor};">(d) Formulate a 3-point remedial mental health recovery plan for Aarav. (1.5 Marks)</b><br/>
      1. <i>Academic De-escalation:</i> Reducing unnecessary coaching hours and focusing on a balanced, realistic study timetable with mandatory leisure.<br/>
      2. <i>Restoring Physical Wellbeing:</i> Resuming basketball for physical endorphin release and enforcing strict 8-hour sleep hygiene.<br/>
      3. <i>Cognitive Restructuring:</i> Helping Aarav decouple his human self-worth from examination marks and cultivating self-compassion.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS INTERACTIVE QUIZ                      */
/* -------------------------------------------------------------------------- */

export const c12Edu2Mcqs = [
  // Tier 1: Basic Recall & Definitions (Q1 to Q10)
  {
    id: "c12-edu-2-mcq-1",
    question: "According to the World Health Organization (WHO), health is defined as:",
    options: [
      "A):   The mere absence of physical disease or infirmity",
      "B):   A state of complete physical, mental, and social wellbeing",
      "C):   Possessing muscular bodily strength only",
      "D):   Scoring top ranks in academic examinations"
    ],
    correctAnswer: "B",
    explanation: "The WHO famously defines health as a state of complete physical, mental, and social wellbeing, and not merely the absence of disease."
  },
  {
    id: "c12-edu-2-mcq-2",
    question: "Who is celebrated as the pioneer of the modern Mental Hygiene movement?",
    options: [
      "A):   Clifford Beers",
      "B):   Sigmund Freud",
      "C):   Hans Selye",
      "D):   John B. Watson"
    ],
    correctAnswer: "A",
    explanation: "Clifford Beers founded the Mental Hygiene movement in 1908 following the publication of his autobiographical book 'A Mind That Found Itself'."
  },
  {
    id: "c12-edu-2-mcq-3",
    question: "The concept of biological stress and the distinction between Eustress and Distress was pioneered by:",
    options: [
      "A):   Jean Piaget",
      "B):   Hans Selye",
      "C):   Ivan Pavlov",
      "D):   Carl Jung"
    ],
    correctAnswer: "B",
    explanation: "Austrian-Canadian endocrinologist Hans Selye is universally recognized as the Father of Stress Research."
  },
  {
    id: "c12-edu-2-mcq-4",
    question: "Positive, constructive stress that enhances motivation and performance is termed:",
    options: [
      "A):   Distress",
      "B):   Eustress",
      "C):   Hypostress",
      "D):   Catatonia"
    ],
    correctAnswer: "B",
    explanation: "Eustress (derived from Greek 'eu' meaning good) is positive stress that enhances focus, vitality, and optimal performance."
  },
  {
    id: "c12-edu-2-mcq-5",
    question: "An obsessive mental health preoccupation with perceived minor or imaginary flaws in physical appearance is known as:",
    options: [
      "A):   Schizophrenia",
      "B):   Body Dysmorphic Disorder (BDD)",
      "C):   Dyslexia",
      "D):   Amnesia"
    ],
    correctAnswer: "B",
    explanation: "Body Dysmorphic Disorder (BDD) involves an obsessive fixation on imagined or minor physical appearance defects."
  },
  {
    id: "c12-edu-2-mcq-6",
    question: "Which psychologist famously described adolescence as a developmental period of 'Storm and Stress'?",
    options: [
      "A):   G. Stanley Hall",
      "B):   Erik Erikson",
      "C):   Edward Thorndike",
      "D):   B.F. Skinner"
    ],
    correctAnswer: "A",
    explanation: "G. Stanley Hall coined the classic phrase 'Storm and Stress' (Sturm und Drang) to describe adolescent emotional volatility."
  },
  {
    id: "c12-edu-2-mcq-7",
    question: "The Yerkes-Dodson Law dictates that the relationship between stress/arousal and performance follows a:",
    options: [
      "A):   Linear upward straight line",
      "B):   Inverted-U shaped curve",
      "C):   Flat horizontal line",
      "D):   Continuous downward line"
    ],
    correctAnswer: "B",
    explanation: "The Yerkes-Dodson law demonstrates an inverted-U curve: performance rises with arousal up to an optimal point, then drops during excessive stress."
  },
  {
    id: "c12-edu-2-mcq-8",
    question: "Which of the following is an internal personal cause of poor mental health?",
    options: [
      "A):   Extreme perfectionism and low self-esteem",
      "B):   Clean drinking water",
      "C):   Recreational public parks",
      "D):   Supportive teachers"
    ],
    correctAnswer: "A",
    explanation: "Internal cognitive distortions, irrational perfectionism, and poor self-concept are primary personal determinants of mental distress."
  },
  {
    id: "c12-edu-2-mcq-9",
    question: "Which parenting style is proven by developmental psychologists to produce the highest emotional resilience in children?",
    options: [
      "A):   Authoritarian (Harsh, rigid)",
      "B):   Authoritative (Warm, democratic boundaries)",
      "C):   Permissive (No rules, neglectful)",
      "D):   Detached"
    ],
    correctAnswer: "B",
    explanation: "Authoritative parenting combines high warmth, active dialogue, and clear reasonable boundaries, nurturing sound mental health."
  },
  {
    id: "c12-edu-2-mcq-10",
    question: "Harmful, unmanageable negative stress that causes physical and psychological breakdown is termed:",
    options: [
      "A):   Eustress",
      "B):   Distress",
      "C):   Homeostasis",
      "D):   Catharsis"
    ],
    correctAnswer: "B",
    explanation: "Distress occurs when stress overwhelms an individual's coping capacity, resulting in emotional and physiological collapse."
  },

  // Tier 2: Conceptual & Pedagogical Questions (Q11 to Q18)
  {
    id: "c12-edu-2-mcq-11",
    question: "Why does toxic comparison between siblings or classmates severely damage adolescent mental health?",
    options: [
      "A):   It improves mathematical reasoning",
      "B):   It destroys self-esteem, breeds inferiority complexes, and triggers deep resentment",
      "C):   It reduces physical fatigue",
      "D):   It guarantees admission to top colleges"
    ],
    correctAnswer: "B",
    explanation: "Comparison invalidates the child's unique self-worth, fostering feelings of inadequacy, jealousy, and chronic anxiety."
  },
  {
    id: "c12-edu-2-mcq-12",
    question: "Which of the following represents an effective physiological technique to alleviate examination panic?",
    options: [
      "A):   Drinking excessive caffeine energy drinks",
      "B):   Diaphragmatic deep breathing (Pranayama) and muscle relaxation",
      "C):   Staying awake all night before the exam",
      "D):   Skipping meals completely"
    ],
    correctAnswer: "B",
    explanation: "Deep diaphragmatic breathing stimulates the vagus nerve and activates the calming parasympathetic nervous system."
  },
  {
    id: "c12-edu-2-mcq-13",
    question: "The primary biological hormone released by the adrenal glands during chronic distress is:",
    options: [
      "A):   Insulin",
      "B):   Cortisol",
      "C):   Thyroxine",
      "D):   Melatonin"
    ],
    correctAnswer: "B",
    explanation: "Cortisol is the primary stress hormone; prolonged high levels damage hippocampal memory circuits and depress immunity."
  },
  {
    id: "c12-edu-2-mcq-14",
    question: "When a student challenges negative thoughts like 'I will fail completely' with 'I have prepared well and will do my best', they are practicing:",
    options: [
      "A):   Substance abuse",
      "B):   Cognitive restructuring (reframing)",
      "C):   Body dysmorphia",
      "D):   Catastrophizing"
    ],
    correctAnswer: "B",
    explanation: "Cognitive restructuring is a therapeutic technique of identifying and replacing irrational, self-defeating thoughts with realistic affirmations."
  },
  {
    id: "c12-edu-2-mcq-15",
    question: "Which of the following is an observable behavioral red flag indicating that a student may be in severe psychological distress?",
    options: [
      "A):   Active participation in classroom sports",
      "B):   Sudden, prolonged social isolation, extreme lethargy, and declining academic performance",
      "C):   Submitting homework on time consistently",
      "D):   Asking insightful scientific questions"
    ],
    correctAnswer: "B",
    explanation: "Abrupt withdrawal from peer social circles, uncharacteristic fatigue, and sudden grade collapse are classic clinical warning signs."
  },
  {
    id: "c12-edu-2-mcq-16",
    question: "What is the three-fold mission of Mental Hygiene in educational institutions?",
    options: [
      "A):   Examining, Grading, and Punishing",
      "B):   Preventive, Preservative, and Curative",
      "C):   Taxation, Accounting, and Auditing",
      "D):   Drilling, Memorizing, and Competing"
    ],
    correctAnswer: "B",
    explanation: "Mental hygiene operates through three phases: Preventive (stopping disorders), Preservative (maintaining wellness), and Curative (therapy)."
  },
  {
    id: "c12-edu-2-mcq-17",
    question: "Adolescent substance abuse is particularly hazardous to brain development because it damages the:",
    options: [
      "A):   Prefrontal cortex responsible for decision-making and impulse control",
      "B):   Inner ear balance bones",
      "C):   Eye retinas only",
      "D):   Fingernails and hair"
    ],
    correctAnswer: "A",
    explanation: "The adolescent prefrontal cortex is still maturing until age 25; psychoactive substances disrupt neural circuits for executive judgment."
  },
  {
    id: "c12-edu-2-mcq-18",
    question: "How can secondary school teachers actively support student mental health without acting as certified psychiatrists?",
    options: [
      "A):   By prescribing pharmaceutical medications directly to students",
      "B):   By creating a supportive, anxiety-free classroom and referring distressed pupils to the school counselor",
      "C):   By expelling any student who looks sad",
      "D):   By increasing homework loads during examination weeks"
    ],
    correctAnswer: "B",
    explanation: "Teachers serve as compassionate frontline guardians &mdash; creating safe, empathetic classrooms and connecting students with counselors."
  },

  // Tier 3: Analytical & Case-Based Application Questions (Q19 to Q25)
  {
    id: "c12-edu-2-mcq-19",
    question: "A high-school student spends 3 hours every morning applying filters to selfies, crying over perceived facial asymmetry, and avoiding school. They are exhibiting symptoms of:",
    options: [
      "A):   Normal adolescent grooming",
      "B):   Body Dysmorphic Disorder (BDD)",
      "C):   Superior artistic aptitude",
      "D):   Healthy Eustress"
    ],
    correctAnswer: "B",
    explanation: "Obsessive, distressing preoccupation with imagined facial flaws and avoiding school due to appearance shame are hallmark criteria of BDD."
  },
  {
    id: "c12-edu-2-mcq-20",
    question: "Under the Yerkes-Dodson principle, if a student feels zero arousal or concern before an exam, their performance is likely to be:",
    options: [
      "A):   Exceptionally brilliant",
      "B):   Poor due to under-arousal, lack of motivation, and careless complacency",
      "C):   Completely unaffected",
      "D):   Ranked number one in the state"
    ],
    correctAnswer: "B",
    explanation: "Insufficient arousal results in lethargy, lack of preparation, and subpar performance under the Yerkes-Dodson curve."
  },
  {
    id: "c12-edu-2-mcq-21",
    question: "In family dynamics, an Authoritarian parent who yells 'You must score 98% or you will bring shame on this family' is inducing:",
    options: [
      "A):   Healthy self-actualization",
      "B):   Destructive chronic distress, fear of failure, and emotional alienation",
      "C):   High creative innovation",
      "D):   Positive Eustress"
    ],
    correctAnswer: "B",
    explanation: "Authoritarian conditional pressure creates paralyzing anxiety, depression, and deep emotional disconnect between parent and child."
  },
  {
    id: "c12-edu-2-mcq-22",
    question: "Why is physical sports and aerobic exercise considered a premier mental health intervention in schools?",
    options: [
      "A):   It prevents students from opening textbooks",
      "B):   It stimulates the natural release of mood-elevating endorphins and lowers circulating cortisol levels",
      "C):   It replaces the need for healthy sleep",
      "D):   It eliminates the need for teachers"
    ],
    correctAnswer: "B",
    explanation: "Aerobic exercise triggers endorphin and BDNF release in the brain while metabolizing physical stress chemicals."
  },
  {
    id: "c12-edu-2-mcq-23",
    question: "When a school establishes a confidential 'Peer Support Club' where trained student leaders listen to peers experiencing loneliness, they are addressing:",
    options: [
      "A):   Relationship disorders and social isolation",
      "B):   School bus transportation routing",
      "C):   Building masonry repairs",
      "D):   Teacher salary accounting"
    ],
    correctAnswer: "A",
    explanation: "Peer support cells combat the root causes of adolescent relationship disorders, loneliness, and feelings of social alienation."
  },
  {
    id: "c12-edu-2-mcq-24",
    question: "If an adolescent student uses alcohol on weekends to 'shut off anxious thoughts about board exams', they are engaging in:",
    options: [
      "A):   Adaptive relaxation training",
      "B):   Maladaptive chemical self-medication leading toward substance dependence",
      "C):   Cognitive problem-solving",
      "D):   Mindfulness meditation"
    ],
    correctAnswer: "B",
    explanation: "Using psychoactive depressants to escape emotional distress is maladaptive self-medication, a major risk factor for substance addiction."
  },
  {
    id: "c12-edu-2-mcq-25",
    question: "The most effective long-term strategy for schools to ensure sound student mental health is:",
    options: [
      "A):   Cancelling all exams and grades permanently",
      "B):   A collaborative ecosystem integrating life-skills education, supportive parenting, and anti-bullying counseling cells",
      "C):   Isolating struggling students in separate locked rooms",
      "D):   Relying exclusively on annual written examinations"
    ],
    correctAnswer: "B",
    explanation: "A holistic, multi-tier ecosystem involving supportive homes, positive classrooms, life skills, and counseling ensures lasting mental health."
  }
];
