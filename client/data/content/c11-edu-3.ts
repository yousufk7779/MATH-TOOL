// Class 11 Education Unit 3: Psychological Foundations of Education (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #11998E (Mint Emerald / Vibrant Teal Gradient)

const themeColor = "#11998E";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Edu3HtmlOverview = `
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
  <div style="background: rgba(17, 153, 142, 0.06); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">🧠 Quick Glossary &amp; Core Psychological Terms</h2>
    <p class="text-center" style="color: #64FFDA; margin: 0 0 16px 0; font-size: 14.5px;">Essential Concepts &bull; Unit 3: Psychological Foundations of Education (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Psychology (Etymological Meaning):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Derived from two Greek words: <i>'Psyche'</i> (soul/mind) and <i>'Logos'</i> (study or science). Modern psychology is defined as the scientific study of human and animal behavior and mental processes.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Educational Psychology:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The specialized branch of applied psychology that investigates the learner, learning processes, teaching techniques, and educational environments to maximize pedagogical effectiveness.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Learning:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A relatively permanent modification of behavioral tendencies brought about through active experience, practice, instruction, and environmental interaction.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Motivation (Movere):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Derived from Latin <i>'Movere'</i> (to move). It is the internal driving force, condition, or catalyst that arouses, sustains, directs, and terminates goal-oriented behavior.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Intrinsic vs. Extrinsic Motivation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Intrinsic</b> comes from internal curiosity, genuine interest, and inherent self-satisfaction. <b>Extrinsic</b> is driven by external incentives such as marks, praise, rewards, trophies, or fear of punishment.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 3.1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">3.1 Meaning and Scope of Psychology</h2>

  <p>The relationship between psychology and education is organic and inseparable. If education is the process of modifying human behavior in desirable directions, psychology is the scientific study of that very behavior. Without an understanding of how human beings think, perceive, feel, remember, and develop, educational practice remains blind and mechanical.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Historical Evolution of the Definition of Psychology</h3>
  <p>The definition of psychology underwent four distinct historical stages before reaching its modern scientific status:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">1. Psychology as the Science of the Soul (Ancient Greek Stage):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Early philosophers like <b style="color: ${themeColor};">Plato and Aristotle</b> defined psychology as the study of the soul (from Greek <i>Psyche</i>). This definition was discarded because the soul is metaphysical, invisible, lacks physical location, and cannot be subjected to empirical laboratory observation or measurement.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">2. Psychology as the Science of the Mind (17th &amp; 18th Century):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Philosophers such as <b style="color: ${themeColor};">John Locke and Immanuel Kant</b> substituted 'soul' with 'mind'. However, this too was rejected because the mind remained subjective, abstract, and impossible to dissect or observe scientifically from the outside.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">3. Psychology as the Science of Consciousness (19th Century):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        In 1879, <b style="color: ${themeColor};">Wilhelm Wundt</b> founded the world's first psychological laboratory in Leipzig, Germany, and together with <b style="color: ${themeColor};">William James</b> defined psychology as the science of conscious experience. Sigmund Freud destroyed this definition by demonstrating that conscious experience represents merely the tiny visible tip of the mental iceberg, while the vast submerged portion consists of the <b>subconscious and unconscious mind</b>.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">4. Psychology as the Science of Behavior (20th Century to Present):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Pioneered by <b style="color: ${themeColor};">J. B. Watson (Father of Behaviorism)</b>, psychology finally established itself as an objective, positive science of observable, recordable, and measurable <b>behavior</b>. As psychologist <b>R. S. Woodworth</b> famously summarized in his iconic aphorism:
        <br><i>"First psychology lost its soul, then its mind, then its consciousness; it still has behavior of a sort."</i>
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: EVOLUTION OF PSYCHOLOGY (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Stage 1: Soul -->
        <rect x="15" y="25" width="85" height="50" rx="6" fill="#F0FDF4" stroke="#11998E" stroke-width="2" />
        <text x="57" y="47" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">STAGE 1</text>
        <text x="57" y="63" fill="#11998E" font-size="12" font-weight="bold" text-anchor="middle">Soul</text>

        <!-- Arrow 1 -->
        <line x1="100" y1="50" x2="122" y2="50" stroke="#0F172A" stroke-width="2" marker-end="url(#arrow)" />
        <polygon points="122,46 128,50 122,54" fill="#0F172A" />

        <!-- Stage 2: Mind -->
        <rect x="128" y="25" width="85" height="50" rx="6" fill="#F0FDF4" stroke="#11998E" stroke-width="2" />
        <text x="170" y="47" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">STAGE 2</text>
        <text x="170" y="63" fill="#11998E" font-size="12" font-weight="bold" text-anchor="middle">Mind</text>

        <!-- Arrow 2 -->
        <line x1="213" y1="50" x2="235" y2="50" stroke="#0F172A" stroke-width="2" />
        <polygon points="235,46 241,50 235,54" fill="#0F172A" />

        <!-- Stage 3: Consciousness -->
        <rect x="241" y="25" width="95" height="50" rx="6" fill="#F0FDF4" stroke="#11998E" stroke-width="2" />
        <text x="288" y="45" fill="#0F172A" font-size="10" font-weight="bold" text-anchor="middle">STAGE 3</text>
        <text x="288" y="61" fill="#11998E" font-size="10" font-weight="bold" text-anchor="middle">Consciousness</text>

        <!-- Arrow 3 -->
        <line x1="336" y1="50" x2="358" y2="50" stroke="#0F172A" stroke-width="2" />
        <polygon points="358,46 364,50 358,54" fill="#0F172A" />

        <!-- Stage 4: Behavior -->
        <rect x="364" y="20" width="65" height="60" rx="6" fill="#11998E" stroke="#0D736A" stroke-width="2" />
        <text x="396" y="43" fill="#FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">MODERN</text>
        <text x="396" y="59" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">Behavior</text>

        <!-- Woodworth Quote Banner Below -->
        <rect x="15" y="100" width="414" height="100" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5" />
        <text x="222" y="125" fill="#0D736A" font-size="13" font-weight="bold" text-anchor="middle">📜 R. S. Woodworth's Classic Historical Summary</text>
        <text x="222" y="150" fill="#334155" font-size="11.5" font-style="italic" text-anchor="middle">"First psychology lost its soul, then its mind,"</text>
        <text x="222" y="168" fill="#334155" font-size="11.5" font-style="italic" text-anchor="middle">"then its consciousness; it still has behavior of a sort."</text>
        <text x="222" y="188" fill="#11998E" font-size="10.5" font-weight="bold" text-anchor="middle">&bull; Modern Definition: Scientific Study of Observable Behavior &bull;</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The 4-Stage Evolution of Psychology from Metaphysical Soul to Objective Science of Behavior.
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Scope of Psychology as a Discipline</h3>
  <p>The scope of psychology is remarkably comprehensive, embracing diverse human and animal endeavors:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">General Psychology:</b> Formulates fundamental laws of sensation, perception, learning, memory, and emotion in normal adults.</li>
    <li><b style="color: ${themeColor};">Developmental Psychology:</b> Studies human behavioral progression from prenatal conception, infancy, childhood, adolescence to old age.</li>
    <li><b style="color: ${themeColor};">Abnormal Psychology:</b> Investigates mental deviations, neuroses, psychoses, phobias, and behavioral disorders.</li>
    <li><b style="color: ${themeColor};">Social Psychology:</b> Examines individual interaction within groups, mob psychology, leadership, prejudices, and propaganda.</li>
    <li><b style="color: ${themeColor};">Educational Psychology:</b> The vital branch focusing on learning behaviors, pedagogy, and classroom dynamics.</li>
  </ul>

  <!-- SECTION 3.2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">3.2 Meaning and Functions of Educational Psychology</h2>

  <p>Educational Psychology is that specialized, applied branch of psychology that takes the empirical principles discovered in general psychology and applies them directly to the concrete situations of teaching and learning. In the words of <b style="color: ${themeColor};">E. A. Peel</b>, <i>"Educational Psychology is the science of education."</i> According to <b style="color: ${themeColor};">B. F. Skinner</b>, <i>"Educational Psychology deals with teaching and learning."</i></p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Scope of Educational Psychology</h3>
  <p>The subject matter of educational psychology revolves around five foundational nuclei:</p>
  <ol style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">The Learner:</b> Understanding individual differences, innate capacities, intelligence quotient (IQ), emotional stability, and developmental stages.</li>
    <li><b style="color: ${themeColor};">The Learning Process:</b> How information is acquired, retained, transferred, and recalled (laws of learning, memory, forgetting, thinking).</li>
    <li><b style="color: ${themeColor};">The Learning Situation &amp; Environment:</b> Classroom climate, lighting, seating, psychological rapport, socio-emotional warmth, and discipline.</li>
    <li><b style="color: ${themeColor};">The Teaching Situation:</b> Formulating pedagogical methods, audiovisual techniques, and effective teacher-pupil communication.</li>
    <li><b style="color: ${themeColor};">Evaluation &amp; Assessment:</b> Designing valid, reliable psychological tests, diagnostic tools, and grading standards.</li>
  </ol>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Indispensable Functions &amp; Need for the Teacher</h3>
  <div style="background: rgba(17, 153, 142, 0.08); border-left: 4px solid ${themeColor}; padding: 14px 18px; border-radius: 6px; margin: 16px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b>Why Every Teacher Must Study Educational Psychology:</b><br>
      &bull; <b>To Understand Individual Differences:</b> Every student has a unique learning pace. Psychology prevents teachers from imposing uniform expectations on all learners.<br>
      &bull; <b>To Select Age-Appropriate Methods:</b> Primary children learn through play and concrete objects, whereas secondary students need abstract logic and problem-solving.<br>
      &bull; <b>To Eliminate Maladjustment:</b> Helps teachers identify the root emotional causes of classroom misbehavior, delinquency, and truancy rather than resorting to cruel corporal punishment.<br>
      &bull; <b>To Master Motivation:</b> Teaches teachers how to awaken internal curiosity and enthusiasm instead of ruling through fear and intimidation.
    </p>
  </div>

  <!-- SECTION 3.3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">3.3 Meaning and Characteristics of Learning</h2>

  <p>Learning is the central phenomenon of human life. From the moment of birth until the final breath, a human being is continually exposed to novel stimuli, acquires fresh experiences, and modifies behavior. In psychology, learning is not mere bookish memorization; it is the fundamental process through which an organism adjusts to its environment.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Standard Psychological Definitions of Learning</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Gates and Others:</b> <i>"Learning is the modification of behavior through experience and training."</i></li>
    <li><b style="color: ${themeColor};">B. F. Skinner:</b> <i>"Learning is a process of progressive behavior adaptation."</i></li>
    <li><b style="color: ${themeColor};">Crow and Crow:</b> <i>"Learning involves the acquisition of habits, knowledge, and attitudes."</i></li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Fundamental Characteristics of Learning</h3>
  <div style="display: flex; flex-direction: column; gap: 10px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">1. Learning is Continuous &amp; Lifelong:</b> It begins in the cradle and terminates only at the grave. No age is barred from learning.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">2. Learning Involves Modification of Behavior:</b> It alters tendencies across all three domains: Cognitive (thinking), Affective (feeling), and Psychomotor (acting).
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">3. Learning is Purposeful &amp; Goal-Directed:</b> Meaningful learning occurs when the individual has a conscious goal to reach; purposeless tasks yield minimal retention.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">4. Learning is Universal:</b> It is not restricted to human beings; all living creatures adapt through learning.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid ${themeColor}; border-radius: 4px;">
      <b style="color: ${themeColor};">5. Learning is Active:</b> The learner must actively participate mentally or physically. Passive listening without cognitive involvement does not produce learning.
    </div>
  </div>

  <!-- SECTION 3.4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">3.4 Factors Affecting Learning</h2>

  <p>The speed, depth, and permanence of learning are determined by the complex interplay of three major categories of factors:</p>

  <!-- STANDALONE CLEAN DIAGRAM 2: FACTORS AFFECTING LEARNING (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Central Hub -->
        <circle cx="220" cy="110" r="46" fill="#11998E" stroke="#0D736A" stroke-width="2.5" />
        <text x="220" y="105" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">LEARNING</text>
        <text x="220" y="122" fill="#E0F2FE" font-size="10" font-weight="bold" text-anchor="middle">EFFICIENCY</text>

        <!-- 1. Learner Factors (Left) -->
        <rect x="15" y="65" width="125" height="90" rx="6" fill="#F8FAFC" stroke="#0284C7" stroke-width="2" />
        <text x="77" y="86" fill="#0284C7" font-size="11" font-weight="bold" text-anchor="middle">1. Learner Factors</text>
        <text x="77" y="104" fill="#334155" font-size="9" text-anchor="middle">&bull; Maturation / Age</text>
        <text x="77" y="118" fill="#334155" font-size="9" text-anchor="middle">&bull; Motivation &amp; IQ</text>
        <text x="77" y="132" fill="#334155" font-size="9" text-anchor="middle">&bull; Health &amp; Fatigue</text>
        <line x1="140" y1="110" x2="174" y2="110" stroke="#0284C7" stroke-width="2" stroke-dasharray="3 3" />

        <!-- 2. Task/Material Factors (Top) -->
        <rect x="150" y="8" width="140" height="60" rx="6" fill="#F8FAFC" stroke="#D97706" stroke-width="2" />
        <text x="220" y="27" fill="#D97706" font-size="11" font-weight="bold" text-anchor="middle">2. Material Factors</text>
        <text x="220" y="44" fill="#334155" font-size="9" text-anchor="middle">&bull; Meaningfulness &amp; Length</text>
        <text x="220" y="58" fill="#334155" font-size="9" text-anchor="middle">&bull; Difficulty &amp; Structure</text>
        <line x1="220" y1="68" x2="220" y2="64" stroke="#D97706" stroke-width="2" stroke-dasharray="3 3" />

        <!-- 3. Method/Environment Factors (Right) -->
        <rect x="300" y="65" width="125" height="90" rx="6" fill="#F8FAFC" stroke="#16A34A" stroke-width="2" />
        <text x="362" y="86" fill="#16A34A" font-size="10.5" font-weight="bold" text-anchor="middle">3. Environmental</text>
        <text x="362" y="104" fill="#334155" font-size="9" text-anchor="middle">&bull; Spaced Repetition</text>
        <text x="362" y="118" fill="#334155" font-size="9" text-anchor="middle">&bull; Immediate Feedback</text>
        <text x="362" y="132" fill="#334155" font-size="9" text-anchor="middle">&bull; Classroom Climate</text>
        <line x1="266" y1="110" x2="300" y2="110" stroke="#16A34A" stroke-width="2" stroke-dasharray="3 3" />

        <!-- Bottom Caption -->
        <rect x="40" y="178" width="360" height="30" rx="4" fill="#F1F5F9" />
        <text x="220" y="198" fill="#475569" font-size="10.5" font-weight="bold" text-anchor="middle">💡 Tripartite Synthesis: Learner + Material + Environment</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The 3 Foundational Pillars Governing Student Learning Efficiency and Retention.
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Detailed Breakdown of Factors</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">1. Learner-Related Factors:</b>
      <br>&bull; <i>Maturation &amp; Readiness:</i> A child cannot learn abstract algebra at age 4 or walk before neuromotor maturation. As Thorndike stated in his Law of Readiness, learning occurs smoothly only when the nervous system is ready.
      <br>&bull; <i>Motivation &amp; Interest:</i> Without internal or external motive, attention wanders and comprehension drops.
      <br>&bull; <i>Physical Health &amp; Fatigue:</i> Malnutrition, eye strain, lack of sleep, or mental exhaustion sharply impede learning efficiency.
    </li>
    <li><b style="color: ${themeColor};">2. Material / Task Factors:</b>
      <br>&bull; <i>Meaningfulness:</i> Meaningful prose and logical associations are learned dozens of times faster than nonsense syllables (Ebbinghaus findings).
      <br>&bull; <i>Difficulty &amp; Length:</i> Overly long and complex material causes rapid fatigue and cognitive overload.
    </li>
    <li><b style="color: ${themeColor};">3. Environmental &amp; Methodological Factors:</b>
      <br>&bull; <i>Spaced vs. Massed Practice:</i> Distributed practice with intermittent rest breaks produces far superior long-term retention compared to last-minute cramming.
      <br>&bull; <i>Knowledge of Results (Feedback):</i> Immediate feedback acts as reinforcement, cementing correct responses and eliminating errors.
      <br>&bull; <i>Physical &amp; Emotional Climate:</i> Well-ventilated, well-lit classrooms with an empathetic, supportive teacher foster deep engagement.
    </li>
  </ul>

  <!-- SECTION 3.5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">3.5 Concept and Types of Motivation (Intrinsic and Extrinsic)</h2>

  <p>Motivation is the golden key to learning. In the famous words of <b style="color: ${themeColor};">B. F. Skinner</b>, <i>"Motivation in school learning is the superhighway to effective instruction."</i> Motivation represents that psychological tension or energy within an organism that drives it to act persistently until a desired goal is realized.</p>

  <!-- STANDALONE CLEAN DIAGRAM 3: MOTIVATION CYCLE (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(17, 153, 142, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Circular Flow Nodes -->
        <!-- 1. Need -->
        <rect x="25" y="20" width="85" height="38" rx="6" fill="#F0FDF4" stroke="#11998E" stroke-width="2" />
        <text x="67" y="44" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">1. NEED</text>

        <line x1="110" y1="39" x2="160" y2="39" stroke="#11998E" stroke-width="2" />
        <polygon points="160,35 168,39 160,43" fill="#11998E" />

        <!-- 2. Drive -->
        <rect x="168" y="20" width="95" height="38" rx="6" fill="#F0FDF4" stroke="#11998E" stroke-width="2" />
        <text x="215" y="44" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">2. DRIVE</text>

        <line x1="263" y1="39" x2="315" y2="39" stroke="#11998E" stroke-width="2" />
        <polygon points="315,35 323,39 315,43" fill="#11998E" />

        <!-- 3. Arousal -->
        <rect x="323" y="20" width="95" height="38" rx="6" fill="#F0FDF4" stroke="#11998E" stroke-width="2" />
        <text x="370" y="44" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">3. AROUSAL</text>

        <!-- Down to 4 -->
        <line x1="370" y1="58" x2="370" y2="100" stroke="#11998E" stroke-width="2" />
        <polygon points="366,100 370,108 374,100" fill="#11998E" />

        <!-- 4. Goal Directed Behavior -->
        <rect x="280" y="108" width="145" height="42" rx="6" fill="#11998E" stroke="#0D736A" stroke-width="2" />
        <text x="352" y="126" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">4. GOAL-DIRECTED</text>
        <text x="352" y="140" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">BEHAVIOR</text>

        <!-- Down to 5 -->
        <line x1="352" y1="150" x2="352" y2="175" stroke="#11998E" stroke-width="2" />
        <polygon points="348,175 352,183 356,175" fill="#11998E" />

        <!-- 5. Goal Attainment -->
        <rect x="180" y="165" width="130" height="38" rx="6" fill="#F0FDF4" stroke="#11998E" stroke-width="2" />
        <text x="245" y="189" fill="#0F172A" font-size="10.5" font-weight="bold" text-anchor="middle">5. GOAL ATTAINED</text>

        <!-- Return to 6 -->
        <line x1="180" y1="184" x2="135" y2="184" stroke="#11998E" stroke-width="2" />
        <polygon points="135,180 127,184 135,188" fill="#11998E" />

        <!-- 6. Reduction of Arousal -->
        <rect x="15" y="165" width="112" height="38" rx="6" fill="#F0FDF4" stroke="#11998E" stroke-width="2" />
        <text x="71" y="182" fill="#0F172A" font-size="9.5" font-weight="bold" text-anchor="middle">6. REDUCTION</text>
        <text x="71" y="195" fill="#0F172A" font-size="9" text-anchor="middle">of Tension</text>

        <!-- Loop back up to Need -->
        <path d="M 67 165 L 67 65" stroke="#11998E" stroke-width="2" stroke-dasharray="3 3" />
        <polygon points="63,65 67,58 71,65" fill="#11998E" />
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Cyclic Dynamics of Motivation: Need &rarr; Drive &rarr; Arousal &rarr; Action &rarr; Goal &rarr; Relief.
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) The Two Fundamental Types of Motivation</h3>

  <div style="display: grid; grid-template-columns: 1fr; gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(17, 153, 142, 0.4); border-radius: 8px; padding: 14px;">
      <h4 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 16px;">🔥 1. Intrinsic Motivation (Internal &bull; Natural Drive)</h4>
      <p style="margin: 0; color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
        Originates from within the individual. The learner engages in an activity purely for the joy, intellectual curiosity, self-expression, and inherent satisfaction it provides.
        <br>&bull; <i>Examples:</i> Reading a novel out of sheer interest, painting for personal joy, solving complex puzzles without expecting any prize.
        <br>&bull; <i>Pedagogical Value:</i> Highly stable, permanent, self-sustaining, and fosters genuine lifelong creativity.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 145, 0, 0.4); border-radius: 8px; padding: 14px;">
      <h4 style="color: #FF9100; margin: 0 0 6px 0; font-size: 16px;">🎁 2. Extrinsic Motivation (External &bull; Artificial Drive)</h4>
      <p style="margin: 0; color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
        Driven by factors external to the learning activity itself. The student performs the task not for its own sake, but as a means to achieve an external reward or avoid a penalty.
        <br>&bull; <i>Examples:</i> Studying solely to pass a board examination, win a scholarship medal, gain parental praise, or escape detention.
        <br>&bull; <i>Pedagogical Value:</i> Extremely useful for initiating tasks in reluctant students; however, if overused, it kills natural curiosity once the external reward is removed.
      </p>
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Classroom Techniques to Motivate Learners</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Praise vs. Blame:</b> Psychological experiments prove that judicious praise and constructive encouragement are far more effective than continuous sarcasm and blame.</li>
    <li><b style="color: ${themeColor};">Knowledge of Results:</b> When learners are shown their progress charts immediately, motivation increases significantly.</li>
    <li><b style="color: ${themeColor};">Novelty and Curiosity:</b> Monotonous classroom lectures destroy motivation; using audiovisual aids, field trips, and experiments reignites attention.</li>
    <li><b style="color: ${themeColor};">Cooperative Learning over Ruthless Competition:</b> Healthy group teamwork builds emotional security, whereas destructive competition creates anxiety and defeatism.</li>
  </ul>

  <!-- NEP 2020 POLICY CONNECT BOX -->
  <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid #11998E; border-radius: 8px; padding: 14px 18px; margin: 25px 0;">
    <h4 style="color: #11998E; margin: 0 0 6px 0; font-size: 16px;">🏛️ Modern Relevance: Psychological Shift in NEP 2020</h4>
    <p style="margin: 0; color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
      The <b>National Education Policy (NEP 2020)</b> transforms Indian classrooms by applying core educational psychology:
      <br>&bull; <b>Child-Centered Mental Health:</b> Replaces high-stakes exam anxiety with 360-degree holistic progress report cards covering cognitive, socio-emotional, and psychomotor development.
      <br>&bull; <b>Nurturing Intrinsic Motivation:</b> Eliminates rigid silos between arts, sciences, and vocational streams, allowing students to learn subjects driven by genuine passion and internal joy.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                     TAB 2: GOLDEN 25 BOARD MASTER Q&A                      */
/* -------------------------------------------------------------------------- */

export const c11Edu3HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION A HEADER -->
  <div style="background: rgba(17, 153, 142, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer Type Questions (VSAT &bull; 1 &amp; 2 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">12 Questions &bull; Word Limit: 20–30 Words &bull; Direct Recall &amp; Board Facts</span>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q1: What is the Greek etymological derivation of the word 'Psychology'?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The word <b style="color: ${themeColor};">'Psychology'</b> is derived from two Greek words: <b style="color: ${themeColor};">'Psyche'</b> (meaning soul or breath of life) and <b style="color: ${themeColor};">'Logos'</b> (meaning study, science, or discourse).
    </div>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q2: Who is regarded as the "Father of Behaviorism"?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: ${themeColor};">John B. Watson (J. B. Watson)</b> is regarded as the Father of Behaviorism. He defined psychology strictly as the positive science of observable behavior.
    </div>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q3: State R. S. Woodworth's famous statement summarizing the evolution of psychology.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Woodworth stated: <b style="color: ${themeColor};">"First psychology lost its soul, then its mind, then its consciousness; it still has behavior of a sort."</b>
    </div>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q4: Where and by whom was the world's first psychological laboratory established?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The first psychological laboratory was founded by <b style="color: ${themeColor};">Wilhelm Wundt</b> in the year <b style="color: ${themeColor};">1879</b> at Leipzig University in Germany.
    </div>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q5: Define Educational Psychology according to E. A. Peel.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      According to <b style="color: ${themeColor};">E. A. Peel:</b>
      <br><i>"Educational Psychology is the science of education."</i> It applies scientific psychological principles to instructional practices.
    </div>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q6: State the modern psychological definition of "Learning".</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      According to <b style="color: ${themeColor};">Gates and others:</b>
      <br><b style="color: ${themeColor};">"Learning is the modification of behavior through experience and training."</b> It produces progressive behavioral adaptations.
    </div>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q7: State two important characteristics of learning.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b>Lifelong &amp; Continuous:</b> Learning begins at birth and continues across the lifespan until death.
      <br>&bull; <b>Active Process:</b> Learning requires active cognitive and physical engagement by the learner.
    </div>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q8: How does maturation differ from learning?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: ${themeColor};">Maturation</b> is biological growth independent of environmental training (e.g. bird growing wings); whereas <b style="color: ${themeColor};">learning</b> depends directly on practice, experience, and effort.
    </div>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q9: What is the Latin origin of the word 'Motivation'?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Motivation originates from the Latin verb <b style="color: ${themeColor};">'Movere'</b>, which literally translates <i>'to move'</i> or to set into purposeful motion.
    </div>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q10: Give two clear differences between Intrinsic and Extrinsic Motivation.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b>Source:</b> Intrinsic motivation arises from within (curiosity/joy); extrinsic motivation arises from outside (grades/rewards).
      <br>&bull; <b>Durability:</b> Intrinsic motivation is enduring and self-sustaining; extrinsic motivation often ends when rewards stop.
    </div>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q11: Why is B. F. Skinner's quote on motivation famous?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Skinner proclaimed that <b style="color: ${themeColor};">"Motivation in school learning is the superhighway to effective instruction,"</b> highlighting that learning without motivation is virtually impossible.
    </div>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q12: Mention any two major learner-related factors that influence learning.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b style="color: ${themeColor};">Intellectual Ability (IQ) &amp; Readiness:</b> Mental capacity and developmental readiness.
      <br>&bull; <b style="color: ${themeColor};">Physical Health &amp; Fatigue:</b> Sensory vitality, nutrition, and freedom from exhaustion.
    </div>
  </div>

  <!-- SECTION B HEADER -->
  <div style="background: rgba(17, 153, 142, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION B: Short Answer Type Questions (SAT &bull; 4 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">8 Questions &bull; Word Limit: 80–100 Words &bull; 4 to 5 Themed Bullet Points</span>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q13: Trace the four historical stages in the evolution of the definition of Psychology.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Psychology progressed through four distinct conceptual phases:
      <br>&bull; <b style="color: ${themeColor};">1. Science of the Soul:</b> Aristotle and Plato studied the soul; discarded because soul is metaphysical and cannot be verified empirically.
      <br>&bull; <b style="color: ${themeColor};">2. Science of the Mind:</b> Locke and Kant replaced soul with mind; discarded because mind was abstract and subjective.
      <br>&bull; <b style="color: ${themeColor};">3. Science of Consciousness:</b> Wundt and William James analyzed conscious states; discarded because Freud proved that the unconscious mind controls behavior.
      <br>&bull; <b style="color: ${themeColor};">4. Science of Behavior:</b> J. B. Watson firmly established psychology as the positive science of observable, measurable behavior.
    </div>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q14: Explain four primary functions of Educational Psychology for a school teacher.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Educational psychology equips the teacher with vital pedagogical insights:
      <br>&bull; <b style="color: ${themeColor};">Understanding Individual Differences:</b> Identifies varied intellectual, emotional, and sensory needs among students to tailor instruction.
      <br>&bull; <b style="color: ${themeColor};">Selecting Appropriate Teaching Methods:</b> Guides whether to use concrete play methods or abstract analytical discussions based on developmental age.
      <br>&bull; <b style="color: ${themeColor};">Managing Classroom Discipline:</b> Teaches positive reinforcement and replaces harsh punitive corporal punishment with psychological understanding.
      <br>&bull; <b style="color: ${themeColor};">Handling Problem Children:</b> Diagnoses emotional causes behind truancy, aggression, stammering, and learning disabilities.
    </div>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q15: Describe the scope of Educational Psychology across its five main areas.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The scope of educational psychology encompasses five comprehensive components:
      <br>&bull; <b style="color: ${themeColor};">The Learner:</b> Studies innate abilities, developmental milestones, personality, and intelligence of the student.
      <br>&bull; <b style="color: ${themeColor};">The Learning Process:</b> Analyzes laws of learning, theories of conditioning, memory, retention, and transfer of learning.
      <br>&bull; <b style="color: ${themeColor};">The Learning Situation:</b> Investigates environmental conditions, lighting, noise, and emotional classroom atmosphere.
      <br>&bull; <b style="color: ${themeColor};">The Teaching Situation:</b> Focuses on instructional planning, motivational techniques, and teacher-pupil rapport.
      <br>&bull; <b style="color: ${themeColor};">Evaluation &amp; Measurement:</b> Develops standardized achievement tests, diagnostic tools, and grading criteria.
    </div>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q16: State and explain four essential characteristics of the Learning process.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The core characteristics of learning include:
      <br>&bull; <b style="color: ${themeColor};">Continuous &amp; Lifelong:</b> Operates from birth till death through endless interaction with the external world.
      <br>&bull; <b style="color: ${themeColor};">Modification of Behavior:</b> Replaces crude instincts with refined habits, cognitive knowledge, and motor competencies.
      <br>&bull; <b style="color: ${themeColor};">Active &amp; Purposive:</b> Real learning demands energetic cognitive participation toward a meaningful personal objective.
      <br>&bull; <b style="color: ${themeColor};">Adjustment to Environment:</b> Empowers the individual to overcome obstacles, solve daily crises, and adapt to novel societal settings.
    </div>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q17: Explain how Learner-Related factors affect the learning process.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Characteristics inherent to the learner determine learning capability:
      <br>&bull; <b style="color: ${themeColor};">Maturation &amp; Readiness:</b> Anatomical and neural readiness precedes complex learning (e.g. vocal cords maturing before speech).
      <br>&bull; <b style="color: ${themeColor};">Motivation &amp; Will to Learn:</b> High interest activates concentration, while apathy leads to rapid distraction.
      <br>&bull; <b style="color: ${themeColor};">Intelligence &amp; Aptitude:</b> High-IQ learners process abstract concepts rapidly, whereas slow learners require repetitive concrete illustrations.
      <br>&bull; <b style="color: ${themeColor};">Physical Health &amp; Fatigue:</b> Chronic illness, hunger, and physical exhaustion drastically reduce attention span and retention.
    </div>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q18: Explain how Environmental and Methodological factors influence learning.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      External conditions and pedagogical techniques powerfully impact learning outcomes:
      <br>&bull; <b style="color: ${themeColor};">Distributed vs. Massed Practice:</b> Spaced study sessions with brief rests yield far better retention than continuous cramming.
      <br>&bull; <b style="color: ${themeColor};">Immediate Knowledge of Results:</b> Instant feedback reinforces correct neural associations and prevents errors from solidifying.
      <br>&bull; <b style="color: ${themeColor};">Physical Comfort:</b> Adequate natural light, fresh ventilation, and low noise levels sustain mental freshness.
      <br>&bull; <b style="color: ${themeColor};">Teacher's Personality:</b> Warm, enthusiastic, and approachable teachers inspire confidence, whereas authoritarian hostility induces anxiety.
    </div>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q19: Describe the steps of the Motivation Cycle with a suitable example.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The motivation cycle follows a sequential, recurring psychological loop:
      <br>&bull; <b style="color: ${themeColor};">1. Need:</b> A physiological or psychological deficit occurs (e.g. hunger or desire to pass an exam).
      <br>&bull; <b style="color: ${themeColor};">2. Drive:</b> The deficit generates an internal state of bodily tension or urge to act.
      <br>&bull; <b style="color: ${themeColor};">3. Arousal:</b> Energy mobilization and heightened alertness occur.
      <br>&bull; <b style="color: ${themeColor};">4. Goal-Directed Behavior:</b> The organism executes targeted activities (e.g. searching for food or studying).
      <br>&bull; <b style="color: ${themeColor};">5. Goal Attainment &amp; Reduction:</b> The goal is achieved, the need is fulfilled, and psychological tension reduces.
    </div>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q20: Suggest four practical techniques to motivate uninspired students in the classroom.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Teachers can stimulate learning interest through effective psychological strategies:
      <br>&bull; <b style="color: ${themeColor};">Judicious Praise over Sarcasm:</b> Recognizing genuine effort boosts self-efficacy; public humiliation causes resentment.
      <br>&bull; <b style="color: ${themeColor};">Introduction of Novelty:</b> Utilizing interactive charts, digital media, and hands-on experiments breaks monotony.
      <br>&bull; <b style="color: ${themeColor};">Setting Realistic Short-Term Goals:</b> Breaking massive syllabi into bite-sized, achievable targets creates frequent feelings of success.
      <br>&bull; <b style="color: ${themeColor};">Relating Lessons to Real Life:</b> Linking theoretical topics to students' daily experiences demonstrates practical relevance and value.
    </div>
  </div>

  <!-- SECTION C HEADER -->
  <div style="background: rgba(17, 153, 142, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION C: Long Answer Type Questions (LAT &bull; 6 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">5 Comprehensive Board Questions &bull; 3-Tier Answer Blueprint (Intro &rarr; Core Analysis &rarr; Conclusion)</span>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q21: Define Psychology and critically discuss its historical evolution from the Science of the Soul to the Science of Behavior.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      Psychology is the positive and empirical science of human and animal behavior and cognitive processes. Etymologically derived from the Greek terms <i>Psyche</i> (soul) and <i>Logos</i> (study), it began as an abstract branch of philosophy and evolved over two millennia into an independent, experimental science.
      <br><br>
      <b style="color: ${themeColor};">2. Historical Evolution &amp; Critical Dimensions:</b><br>
      &bull; <b>Stage 1: Science of the Soul (Ancient Greek Period):</b> Plato and Aristotle formulated psychology as the study of the metaphysical soul. This view was rejected because the soul is unobservable, intangible, and lacks empirical, verifiable existence.
      <br>&bull; <b>Stage 2: Science of the Mind (17th–18th Century):</b> John Locke and European philosophers defined psychology as mental philosophy. However, the exact nature, structure, and boundaries of the mind remained subjective and unmeasurable.
      <br>&bull; <b>Stage 3: Science of Consciousness (19th Century):</b> With Wilhelm Wundt establishing the first psychological laboratory in 1879, psychology embraced experimental introspection to analyze conscious states. But Sigmund Freud revealed that conscious experience accounts for merely a tiny fraction of human mental life, while the vast subconscious and unconscious drives dominate behavior.
      <br>&bull; <b>Stage 4: Science of Behavior (20th Century to Present):</b> J. B. Watson introduced Behaviorism, arguing that objective science can study only observable actions, reactions, and measurable reflexes. Modern psychologists synthesized this with cognitive psychology to define psychology as the science of behavior and mental processes.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      As Woodworth brilliantly summarized, psychology shed its soul, mind, and consciousness to become the objective science of behavior. In education, this allows teachers to measure, evaluate, and modify students' observable academic and social habits through systematic pedagogy.
    </div>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q22: What is Educational Psychology? Elaborate its comprehensive scope and explain why it is indispensable for effective classroom teaching.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      Educational Psychology is an applied branch of psychology that utilizes psychological principles, theories, and research methodologies to optimize teaching and learning within educational institutions. According to Peel, it is the "science of education," serving as the scientific foundation for curriculum, instructional design, and classroom management.
      <br><br>
      <b style="color: ${themeColor};">2. Scope &amp; Foundational Pillars:</b><br>
      &bull; <b>The Learner:</b> Studies growth stages, biological maturation, individual intelligence differences, interests, aptitudes, and personality dynamics.
      <br>&bull; <b>The Learning Process:</b> Details how knowledge is assimilated, conditioning laws, retention mechanics, forgetting curves, and transfer of learning to real life.
      <br>&bull; <b>The Learning Environment:</b> Analyzes the psychological climate, seating patterns, sociometric groupings, and classroom physical conditions.
      <br>&bull; <b>The Teaching Situation:</b> Guides teachers in pedagogical techniques, instructional strategies, lesson structuring, and media integration.
      <br>&bull; <b>Evaluation &amp; Measurement:</b> Formulates psychological tests, aptitude assessments, and diagnostic metrics to identify learning gaps.
      <br><br>
      <b style="color: ${themeColor};">3. Indispensability for the Modern Teacher &amp; Conclusion:</b><br>
      Without educational psychology, teaching degenerates into blind guesswork. It enables the teacher to shift from rigid teacher-centered authoritarianism to empathetic child-centered pedagogy. It helps identify learning disabilities like dyslexia, prevents delinquency, and ensures that classroom instruction aligns harmoniously with child developmental stages.
    </div>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q23: Define Learning. Discuss its primary characteristics and analyze the role of Maturation in learning.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      Learning is defined by Gates as the "modification of behavior through experience and training." It represents the progressive process through which human beings acquire novel habits, factual knowledge, sensory-motor skills, and emotional attitudes, leading to enhanced adaptive capacity.
      <br><br>
      <b style="color: ${themeColor};">2. Fundamental Characteristics of Learning:</b><br>
      &bull; <b>Continuous &amp; Comprehensive:</b> An unending lifelong voyage encompassing cognitive, affective, and psychomotor domains.
      <br>&bull; <b>Goal-Oriented &amp; Purposive:</b> Efficiency peaks when the learner recognizes the purpose and value of the task.
      <br>&bull; <b>Active Engagement:</b> Learning is not a passive reception like pouring water into a jug; the learner must reconstruct experience mentally.
      <br>&bull; <b>Universal Adaptation:</b> Operates across all cultures, societies, and biological species.
      <br><br>
      <b style="color: ${themeColor};">3. The Critical Role of Maturation &amp; Conclusion:</b><br>
      Maturation is biological, internal growth and neurological ripening that unfolds naturally according to genetic clocks. Learning is entirely dependent on maturation. For instance, attempting to teach a 6-month-old child to write is futile because fine motor muscles and neural pathways have not matured. Maturation sets the physiological ceiling and readiness; learning builds competencies upon that biological foundation. Teaching before readiness produces frustration and failure.
    </div>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q24: Provide an exhaustive analysis of the Factors Affecting Learning (Learner, Material, and Environmental factors).</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      The learning process is never uniform; its velocity, depth, and permanence depend on a delicate interplay between internal biological attributes of the learner, the nature of the academic material, and the surrounding physical-social environment.
      <br><br>
      <b style="color: ${themeColor};">2. Detailed Tripartite Analysis:</b><br>
      &bull; <b>1. Learner-Related Factors:</b>
      <br>&nbsp;&nbsp;&bull; <i>Readiness &amp; Maturation:</i> Thorndike's Law of Readiness states that learning occurs smoothly when the organism is ready.
      <br>&nbsp;&nbsp;&bull; <i>Motivation &amp; Aspiration:</i> Internal drive focuses attention and sustains persistence in the face of academic difficulty.
      <br>&nbsp;&nbsp;&bull; <i>Physical &amp; Mental Health:</i> Sickness, malnutrition, sensory impairments, and anxiety severely restrict cognitive bandwidth.
      <br>&bull; <b>2. Material / Task Factors:</b>
      <br>&nbsp;&nbsp;&bull; <i>Meaningfulness:</i> Material connecting with existing cognitive schema is mastered exponentially faster than abstract lists.
      <br>&nbsp;&nbsp;&bull; <i>Organization &amp; Structure:</i> Content sequenced logically from simple-to-complex minimizes cognitive fatigue.
      <br>&bull; <b>3. Methodological &amp; Environmental Factors:</b>
      <br>&nbsp;&nbsp;&bull; <i>Practice Distribution:</i> Spaced learning outclasses massed cramming for long-term memory consolidation.
      <br>&nbsp;&nbsp;&bull; <i>Knowledge of Results:</i> Immediate corrective feedback reinforces correct behaviors and eliminates erroneous concepts.
      <br>&nbsp;&nbsp;&bull; <i>Classroom Climate:</i> Comfortable lighting, absence of distracting noise, and an emotionally supportive teacher foster optimal learning.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      Educators cannot simply blame students for poor performance. Effective schooling requires synchronizing all three dimensions &mdash; preparing the learner, organizing curriculum meaningfully, and cultivating an inspiring, threat-free classroom climate.
    </div>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(17, 153, 142, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q25: Define Motivation. Differentiate comprehensively between Intrinsic and Extrinsic Motivation, and describe classroom strategies to foster genuine learning desire.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      Derived from the Latin <i>Movere</i> (to move), motivation is the dynamic, energizing force that activates, directs, and sustains behavior toward a predefined goal. As B. F. Skinner noted, motivation in school is the superhighway to learning; without it, all instructional apparatus remains sterile.
      <br><br>
      <b style="color: ${themeColor};">2. Comprehensive Differentiation:</b><br>
      &bull; <b>Intrinsic Motivation (Internal Locus):</b>
      <br>&nbsp;&nbsp;&bull; <i>Nature:</i> The activity is its own reward; driven by innate curiosity, competence mastery, and creative joy.
      <br>&nbsp;&nbsp;&bull; <i>Persistence:</i> High durability; continues independently even without supervision or external prizes.
      <br>&nbsp;&nbsp;&bull; <i>Outcome:</i> Fosters deep conceptual learning, original thinking, and emotional fulfillment.
      <br>&bull; <b>Extrinsic Motivation (External Locus):</b>
      <br>&nbsp;&nbsp;&bull; <i>Nature:</i> Driven by artificial external stimuli like grades, money, gold medals, social approval, or threat of punishment.
      <br>&nbsp;&nbsp;&bull; <i>Persistence:</i> Fragile; ceases abruptly as soon as the external reward or threat is withdrawn.
      <br>&nbsp;&nbsp;&bull; <i>Outcome:</i> Encourages minimum-effort compliance and superficial memorization.
      <br><br>
      <b style="color: ${themeColor};">3. Strategic Classroom Applications &amp; Conclusion:</b><br>
      To transition students from fragile extrinsic incentives to enduring intrinsic motivation, teachers must:
      <br>&bull; Provide autonomy and choice in projects.
      <br>&bull; Deliver immediate, specific, and descriptive praise focused on effort rather than innate ability.
      <br>&bull; Stimulate natural curiosity through problem-solving and multimedia demonstrations.
      <br>&bull; Create collaborative learning environments where peer cooperation replaces destructive, high-anxiety competition.
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: 25 SMART INTERACTIVE MCQS                   */
/* -------------------------------------------------------------------------- */

export const c11Edu3Mcqs = [
  // TIER 1: EASY & DIRECT RECALL (Q1 to Q10)
  {
    id: "c11-edu-3-mcq-1",
    question: "The word 'Psychology' is derived from two Greek words, 'Psyche' and 'Logos'. What does 'Psyche' literally mean?",
    options: [
      "A):   Brain",
      "B):   Soul or Mind",
      "C):   Body",
      "D):   Behavior",
    ],
    correctAnswer: "b",
    explanation: "In ancient Greek, 'Psyche' means the soul, breath of life, or mind.",
  },
  {
    id: "c11-edu-3-mcq-2",
    question: "Who founded the world's first experimental psychology laboratory at Leipzig, Germany in 1879?",
    options: [
      "A):   Wilhelm Wundt",
      "B):   Sigmund Freud",
      "C):   John B. Watson",
      "D):   B. F. Skinner",
    ],
    correctAnswer: "a",
    explanation: "Wilhelm Wundt established the world's first psychological laboratory in 1879 at Leipzig.",
  },
  {
    id: "c11-edu-3-mcq-3",
    question: "Who is celebrated as the Father of Behaviorism in Psychology?",
    options: [
      "A):   E. L. Thorndike",
      "B):   John B. Watson",
      "C):   Jean Piaget",
      "D):   William James",
    ],
    correctAnswer: "b",
    explanation: "J. B. Watson founded Behaviorism, asserting that psychology must study observable behavior.",
  },
  {
    id: "c11-edu-3-mcq-4",
    question: "'First psychology lost its soul, then its mind, then its consciousness; it still has behavior of a sort.' This famous summary was given by:",
    options: [
      "A):   R. S. Woodworth",
      "B):   Ivan Pavlov",
      "C):   B. F. Skinner",
      "D):   Plato",
    ],
    correctAnswer: "a",
    explanation: "R. S. Woodworth famously summarized the four evolutionary stages of psychology.",
  },
  {
    id: "c11-edu-3-mcq-5",
    question: "'Learning is the modification of behavior through experience and training.' This standard definition is credited to:",
    options: [
      "A):   Gates and others",
      "B):   Aristotle",
      "C):   John Dewey",
      "D):   Herbart",
    ],
    correctAnswer: "a",
    explanation: "Gates and associates provided this widely cited textbook definition of learning.",
  },
  {
    id: "c11-edu-3-mcq-6",
    question: "The Latin root word of 'Motivation' is 'Movere'. What does it mean?",
    options: [
      "A):   To meditate",
      "B):   To move or set in motion",
      "C):   To remember",
      "D):   To judge",
    ],
    correctAnswer: "b",
    explanation: "'Movere' is a Latin verb meaning 'to move' or stimulate action.",
  },
  {
    id: "c11-edu-3-mcq-7",
    question: "Who termed Motivation in school learning as the 'superhighway to effective instruction'?",
    options: [
      "A):   B. F. Skinner",
      "B):   Wilhelm Wundt",
      "C):   Sigmund Freud",
      "D):   Pestalozzi",
    ],
    correctAnswer: "a",
    explanation: "B. F. Skinner famously called motivation the superhighway to learning.",
  },
  {
    id: "c11-edu-3-mcq-8",
    question: "Studying hard purely out of intense personal curiosity and joy of learning is an example of:",
    options: [
      "A):   Extrinsic motivation",
      "B):   Intrinsic motivation",
      "C):   Negative punishment",
      "D):   Conditioned reflex",
    ],
    correctAnswer: "b",
    explanation: "Intrinsic motivation comes from internal joy, self-expression, and curiosity without external rewards.",
  },
  {
    id: "c11-edu-3-mcq-9",
    question: "Which of the following is an example of Extrinsic Motivation?",
    options: [
      "A):   Playing music because you love the melody",
      "B):   Solving mathematical problems to win a cash prize",
      "C):   Reading history because it fascinates your imagination",
      "D):   Volunteering to help animals out of deep empathy",
    ],
    correctAnswer: "b",
    explanation: "Working to win cash prizes, medals, or marks is driven by external incentives (extrinsic).",
  },
  {
    id: "c11-edu-3-mcq-10",
    question: "Which thinker defined Educational Psychology concisely as 'the science of education'?",
    options: [
      "A):   E. A. Peel",
      "B):   Plato",
      "C):   J. B. Watson",
      "D):   Rousseau",
    ],
    correctAnswer: "a",
    explanation: "E. A. Peel concisely defined Educational Psychology as the science of education.",
  },

  // TIER 2: MODERATE & CONCEPTUAL (Q11 to Q18)
  {
    id: "c11-edu-3-mcq-11",
    question: "Why was the early definition of Psychology as the 'Science of the Soul' abandoned by modern science?",
    options: [
      "A):   Because the soul is an observable physical gland in the brain",
      "B):   Because the soul is metaphysical, invisible, and cannot be measured experimentally in a laboratory",
      "C):   Because the soul only exists in plant life",
      "D):   Because ancient Greeks banned science",
    ],
    correctAnswer: "b",
    explanation: "The soul is an abstract, metaphysical concept that cannot be observed, quantified, or tested empirically.",
  },
  {
    id: "c11-edu-3-mcq-12",
    question: "How does Maturation fundamentally differ from the process of Learning?",
    options: [
      "A):   Maturation is biological development determined by genetic clocks, whereas learning requires practice and experience",
      "B):   Maturation occurs only in schools while learning occurs in forests",
      "C):   Maturation ends at birth",
      "D):   Learning occurs without any brain activity",
    ],
    correctAnswer: "a",
    explanation: "Maturation is natural biological unfolding, whereas learning requires practice, stimulus, and conscious effort.",
  },
  {
    id: "c11-edu-3-mcq-13",
    question: "In psychology, the phenomenon where spaced study sessions with rest intervals yield superior retention over continuous cramming is known as:",
    options: [
      "A):   Massed practice effect",
      "B):   Distributed (spaced) practice effect",
      "C):   Subconscious blocking",
      "D):   Sensory extinction",
    ],
    correctAnswer: "b",
    explanation: "Distributed or spaced practice allows neural consolidation, producing far better long-term recall than cramming.",
  },
  {
    id: "c11-edu-3-mcq-14",
    question: "What happens in the 'Motivation Cycle' immediately after a 'Need' arises in an individual?",
    options: [
      "A):   The goal is achieved directly",
      "B):   A 'Drive' (internal physiological or psychological state of tension) is created",
      "C):   The organism immediately falls asleep",
      "D):   Arousal reduces to zero",
    ],
    correctAnswer: "b",
    explanation: "A Need leads directly to a Drive (internal state of tension) that urges the organism to act.",
  },
  {
    id: "c11-edu-3-mcq-15",
    question: "Which of the following is a major Material/Task factor that speeds up human learning?",
    options: [
      "A):   Making the learning material meaningful and logically organized",
      "B):   Using nonsense syllables without real-world connections",
      "C):   Increasing the syllabus length by tenfold",
      "D):   Excluding all diagrams and examples",
    ],
    correctAnswer: "a",
    explanation: "Meaningfulness and logical organization allow quick cognitive schema integration and rapid recall.",
  },
  {
    id: "c11-edu-3-mcq-16",
    question: "A teacher provides immediate feedback on a student's test answers. How does this affect the student's learning?",
    options: [
      "A):   It ruins memory completely",
      "B):   It reinforces correct associations and quickly eradicates conceptual errors",
      "C):   It causes permanent distraction",
      "D):   It eliminates the need for further study",
    ],
    correctAnswer: "b",
    explanation: "Immediate knowledge of results (feedback) acts as reinforcement, cementing correct responses.",
  },
  {
    id: "c11-edu-3-mcq-17",
    question: "Why can excessive reliance on Extrinsic Rewards (like chocolates or money) be harmful in the long run?",
    options: [
      "A):   It can undermine and extinguish natural intrinsic curiosity once the reward is discontinued",
      "B):   It makes textbooks disappear",
      "C):   It speeds up brain damage",
      "D):   It stops physical growth",
    ],
    correctAnswer: "a",
    explanation: "The 'overjustification effect' shows that excessive external rewards can reduce genuine internal love for learning.",
  },
  {
    id: "c11-edu-3-mcq-18",
    question: "According to E. L. Thorndike's 'Law of Readiness', learning is most efficient when:",
    options: [
      "A):   The learner's nervous system is biologically and emotionally prepared to act",
      "B):   The student is forced to study under threat of severe beating",
      "C):   The classroom lights are completely turned off",
      "D):   The teacher speaks in a foreign language",
    ],
    correctAnswer: "a",
    explanation: "When a conduction unit is ready to conduct, doing so is satisfying; forcing action before readiness produces frustration.",
  },

  // TIER 3: ADVANCE & ANALYTICAL (Q19 to Q25)
  {
    id: "c11-edu-3-mcq-19",
    question: "Assertion (A): Attempting to teach complex formal geometry proofs to a 3-year-old child will invariably fail.\nReason (R): Cognitive learning is strictly bounded by biological maturation and neural development.",
    options: [
      "A):   Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "B):   Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
      "C):   (A) is true, but (R) is false",
      "D):   (A) is false, but (R) is true",
    ],
    correctAnswer: "a",
    explanation: "Learning cannot precede biological maturation. Neural structures must mature before abstract geometry can be comprehended.",
  },
  {
    id: "c11-edu-3-mcq-20",
    question: "A student who is chronically terrified of his teacher's harsh verbal abuse frequently fails tests despite studying at home. This illustrates the negative impact of which factor on learning?",
    options: [
      "A):   The Task Meaningfulness factor",
      "B):   The Socio-Emotional Classroom Climate factor",
      "C):   The Maturation biological factor",
      "D):   The Distributed Practice factor",
    ],
    correctAnswer: "b",
    explanation: "Fear and high anxiety release stress hormones that paralyze working memory, demonstrating the critical role of emotional classroom climate.",
  },
  {
    id: "c11-edu-3-mcq-21",
    question: "An adolescent student practices coding daily for 5 hours without being told by anyone, losing track of time because of pure fascination with technology. This represents:",
    options: [
      "A):   Extrinsic motivation driven by social compliance",
      "B):   Intrinsic motivation driven by autonomy, mastery, and flow",
      "C):   Classical aversive conditioning",
      "D):   A state of severe maladjustment",
    ],
    correctAnswer: "b",
    explanation: "Engaging in deep task immersion out of pure fascination is the hallmark of intrinsic motivation and psychological 'flow'.",
  },
  {
    id: "c11-edu-3-mcq-22",
    question: "Match the Psychological Thinker with their core contribution:\n(a) Wilhelm Wundt  — (1) Father of Behaviorism\n(b) J. B. Watson     — (2) Founded first psychology lab in 1879\n(c) B. F. Skinner   — (3) Psychology lost soul, mind, consciousness\n(d) R. S. Woodworth — (4) Motivation as superhighway to learning",
    options: [
      "A):   (a)-(2), (b)-(1), (c)-(4), (d)-(3)",
      "B):   (a)-(1), (b)-(2), (c)-(3), (d)-(4)",
      "C):   (a)-(4), (b)-(3), (c)-(2), (d)-(1)",
      "D):   (a)-(2), (b)-(4), (c)-(1), (d)-(3)",
    ],
    correctAnswer: "a",
    explanation: "Wundt: 1st Lab 1879; Watson: Behaviorism; Skinner: Motivation Superhighway; Woodworth: Historical Aphorism.",
  },
  {
    id: "c11-edu-3-mcq-23",
    question: "How does the National Education Policy (NEP 2020) apply the principles of Educational Psychology in student evaluation?",
    options: [
      "A):   By imposing mandatory 10-hour daily written tests",
      "B):   By replacing high-stakes rote exams with a 360-degree holistic progress card covering cognitive, socio-emotional, and psychomotor domains",
      "C):   By ranking students from top to bottom on public notice boards",
      "D):   By eliminating all art, sports, and music classes",
    ],
    correctAnswer: "b",
    explanation: "NEP 2020 adopts psychological holistic assessment, evaluating cognitive, emotional, and psychomotor growth rather than rote marks alone.",
  },
  {
    id: "c11-edu-3-mcq-24",
    question: "Why is praise generally considered psychologically superior to reproof (blame) in motivating learners?",
    options: [
      "A):   Praise fosters self-efficacy and positive reinforcement, while constant reproof generates learned helplessness and resentment",
      "B):   Praise costs more money for the school administration",
      "C):   Reproof causes instantaneous hearing loss",
      "D):   There is no psychological difference between praise and blame",
    ],
    correctAnswer: "a",
    explanation: "Experimental studies by Hurlock and others prove that praise builds self-efficacy, while relentless blame breeds feelings of defeat.",
  },
  {
    id: "c11-edu-3-mcq-25",
    question: "Which of the following scenarios best exemplifies the ideal synthesis of Intrinsic and Extrinsic motivation in education?",
    options: [
      "A):   A child who is locked in a room until he memorizes 50 pages",
      "B):   A student who is initially attracted to robotics by a school competition (extrinsic), but develops a lifelong passion and inner mastery for engineering (intrinsic)",
      "C):   A student who only studies if given a candy for every answered question",
      "D):   A student who refuses to attend school because grades exist",
    ],
    correctAnswer: "b",
    explanation: "Extrinsic incentives can serve as a catalyst to introduce students to an activity, which then blooms into enduring intrinsic passion.",
  },
];
