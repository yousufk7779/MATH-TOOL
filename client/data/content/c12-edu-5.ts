// Class 12 Education Unit 5: Educational Technology (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #FF8A65 (Deep Orange / Coral Amber matching Chapter 5)

const themeColor = "#FF8A65";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Edu5HtmlOverview = `
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
  <div style="background: rgba(255, 138, 101, 0.08); border: 1.5px solid \${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: \${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">💻 Quick Glossary &amp; Core Educational Technology Concepts</h2>
    <p class="text-center" style="color: #FFCCBC; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Class 12 Unit 5: Educational Technology (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Educational Technology (G.O.M. Leith):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The application of scientific knowledge, technological processes, and learning psychology to optimize the efficiency, effectiveness, and reach of the teaching-learning enterprise.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Hardware vs. Software Approaches (A.A. Lumsdaine):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Hardware (ET-1 / Technology in Education)</b> involves physical machines, electronics, and audiovisual devices (smartboards, projectors, computers). <b>Software (ET-2 / Technology of Education)</b> involves psychological learning principles, instructional designs, behavioral objectives, and pedagogic content.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Information &amp; Communication Technology (ICT):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The convergence of computing, telecommunications, high-speed internet, and multimedia technologies that enables digital storage, interactive transmission, and universal democratization of educational resources.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Blended Learning:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A modern pedagogical model that thoughtfully fuses traditional face-to-face physical classroom interaction with structured online digital learning activities and independent self-pacing.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Flipped Classroom / Flipped Learning:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">An inverted instructional strategy where direct lecture delivery is shifted outside the classroom (via pre-recorded videos at home), while classroom time is liberated for interactive problem-solving, debates, and higher-order critical analysis.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 5.1 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 30px;">5.1 Educational Technology- meaning and principles</h2>

  <p>Human civilisation has entered the knowledge age, driven by an unprecedented explosion of information, telecommunications, and digital science. In this dynamic landscape, education can no longer remain tethered to medieval chalk-and-talk methods. <b style="color: \${themeColor};">Educational Technology (ET)</b> represents the systematic marriage between the science of learning and the art of teaching, revolutionising how knowledge is organized, communicated, and internalized.</p>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(i) Etymological Origin &amp; Authoritative Definitions</h3>
  <p>Etymologically, the word <i>Technology</i> originates from two Greek words: <b>"Techne"</b> (meaning art, craft, or skill) and <b>"Logos"</b> (meaning science, discourse, or systematic study). Thus, educational technology is the scientific study and practical application of techniques to optimize educational endeavors.</p>

  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 18px 0;">
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">1. G. O. M. Leith:</b> <i>"Educational technology is the application of scientific knowledge and learning conditions to improve the effectiveness and efficiency of teaching and training."</i>
    </p>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">2. Robert A. Cox:</b> <i>"Educational technology is the application of scientific process to man's learning conditions."</i>
    </p>
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">3. Dr. Shiv K. Mitra:</b> <i>"Educational technology can be conceived as an application of modern skills and techniques to the requirements of education and training."</i>
    </p>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">4. AECT (USA):</b> <i>"Educational technology is the study and ethical practice of facilitating learning and improving performance by creating, using, and managing appropriate technological processes and resources."</i>
    </p>
  </div>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(ii) Technology in Education vs. Technology of Education</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Technology in Education (Hardware View):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Refers to the physical incorporation of engineering equipment, machines, and gadgets &mdash; such as televisions, computers, LCD projectors, smartboards, and tape recorders &mdash; into school classrooms. It mechanizes transmission but does not fundamentally redesign the learning psychology.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Technology of Education (Software View):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Refers to the deep application of psychological theories, behavioral analysis, instructional algorithms, formative feedback loops, and curriculum taxonomy (e.g., Skinner's operant conditioning and Bloom's taxonomy) to reorganize the learner's mind. It is the invisible intellectual engine of teaching.
      </p>
    </div>
  </div>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(iii) Fundamental Principles of Educational Technology</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Principle of Goal-Orientation (Behavioral Objectives):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Technology must never be used as empty entertainment. Every technological tool must be purposefully aligned to explicit, measurable behavioral learning objectives.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Principle of Active Learner Participation:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Effective technology transforms students from passive spectators into active agents. True educational technology demands interactive quizzes, simulation manipulation, and creative content creation.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">3. Principle of Immediate Reinforcement &amp; Feedback:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Rooted in B.F. Skinner's reinforcement psychology. Learning is dramatically accelerated when students receive instantaneous feedback on their answers, correcting misconceptions before they calcify.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">4. Principle of Individualized Pacing:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Recognizing the law of individual differences, educational technology permits learners to pause, rewind, accelerate, and replay instructional content according to their personal cognitive tempo.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">5. Principle of Multi-Sensory Appeal:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        As Edgar Dale's <i>Cone of Experience</i> establishes, retention increases dramatically when visual, auditory, and kinesthetic pathways are simultaneously stimulated through multimedia and digital graphics.
      </p>
    </div>
  </div>

  <!-- SECTION 5.2 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">5.2 Hardware &amp; software approaches to educational technology</h2>

  <p>In 1964, eminent psychologist <b style="color: \${themeColor};">Arthur A. Lumsdaine</b> pioneered the classic binary classification of educational technology into the <b>Hardware Approach (ET-1)</b> and the <b>Software Approach (ET-2)</b>:</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #38EF7D; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #38EF7D; font-size: 16px;">🖥️ 1. The Hardware Approach (ET-1):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <b style="color: #38EF7D;">Philosophical Roots:</b> Rooted firmly in physical sciences and electrical/mechanical engineering.
        <br /><b style="color: #38EF7D;">Operational Nature:</b> Focuses on the production, maintenance, and deployment of physical hardware machines. Includes radio, educational television, audio recorders, film projectors, LCD projectors, computers, digital tablets, and interactive flat panels.
        <br /><b style="color: #38EF7D;">Pedagogical Function:</b> Acts as the mechanical delivery carrier. It enables mass dissemination of instruction across vast geographic distances, overcoming teacher shortages and bringing world-class laboratories onto classroom screens.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #00C6FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00C6FF; font-size: 16px;">🧠 2. The Software Approach (ET-2):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <b style="color: #00C6FF;">Philosophical Roots:</b> Rooted deeply in behavioral sciences, learning psychology, psycholinguistics, and pedagogy.
        <br /><b style="color: #00C6FF;">Operational Nature:</b> Focuses on the intangible content and instructional architecture: programmed learning materials, lesson plans, instructional software programs, behavioral objectives, evaluation rubrics, and pedagogic simulations.
        <br /><b style="color: #00C6FF;">Pedagogical Function:</b> Focuses on modifying student behavior, engineering cognitive comprehension, and systematically guiding thought processes toward mastery learning.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: HARDWARE VS SOFTWARE INTERDEPENDENCE (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="24" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">LUMSDAINE'S DUAL WINGS OF EDUCATIONAL TECHNOLOGY</text>

        <!-- Left Box: Hardware Approach -->
        <rect x="20" y="50" width="180" height="150" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8" />
        <text x="110" y="72" font-size="11" font-weight="bold" fill="#15803D" text-anchor="middle">HARDWARE (ET-1)</text>
        <text x="110" y="88" font-size="8.5" font-weight="bold" fill="#166534" text-anchor="middle">&bull; Physical Sciences &amp; Engineering</text>
        <text x="110" y="112" font-size="8.5" fill="#334155" text-anchor="middle">Smartboards &bull; Computers</text>
        <text x="110" y="128" font-size="8.5" fill="#334155" text-anchor="middle">Projectors &bull; Tablets</text>
        <text x="110" y="148" font-size="8.5" fill="#475569" text-anchor="middle">The Physical Carrier / Vehicle</text>
        <rect x="35" y="162" width="150" height="24" rx="4" fill="#DCFCE7" />
        <text x="110" y="178" font-size="9" font-weight="bold" fill="#14532D" text-anchor="middle">"Technology in Education"</text>

        <!-- Interconnecting Bi-directional Bridge -->
        <circle cx="220" cy="125" r="16" fill="#FFF7ED" stroke="#EA580C" stroke-width="2" />
        <text x="220" y="129" font-size="11" font-weight="bold" fill="#EA580C" text-anchor="middle">&hArr;</text>

        <!-- Right Box: Software Approach -->
        <rect x="240" y="50" width="180" height="150" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.8" />
        <text x="330" y="72" font-size="11" font-weight="bold" fill="#1D4ED8" text-anchor="middle">SOFTWARE (ET-2)</text>
        <text x="330" y="88" font-size="8.5" font-weight="bold" fill="#1E40AF" text-anchor="middle">&bull; Behavioral Sciences &amp; Psychology</text>
        <text x="330" y="112" font-size="8.5" fill="#334155" text-anchor="middle">Programmed Lessons &bull; Apps</text>
        <text x="330" y="128" font-size="8.5" fill="#334155" text-anchor="middle">Learning Algorithms &bull; Rubrics</text>
        <text x="330" y="148" font-size="8.5" fill="#475569" text-anchor="middle">The Intellectual Soul / Content</text>
        <rect x="255" y="162" width="150" height="24" rx="4" fill="#DBEAFE" />
        <text x="330" y="178" font-size="9" font-weight="bold" fill="#1E3A8A" text-anchor="middle">"Technology of Education"</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Inseparable Symbiosis: Hardware is the physical body (machinery) while Software is the living soul (pedagogy). One without the other is pedagogically impotent.
    </div>
  </div>

  <!-- SECTION 5.3 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">5.3 Role of ICT in learning-teaching</h2>

  <p><b style="color: \${themeColor};">Information and Communication Technology (ICT)</b> refers to an integrated technological infrastructure comprising computing hardware, telecommunications, broadband connectivity, digital software, and multimedia networks. In 21st-century education, ICT has transformed from an auxiliary visual aid into the central neurological system of education:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Universal Democratization and Borderless Access:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        ICT shatters geographic, economic, and institutional boundaries. A rural student in Kashmir or Kerala can access identical high-caliber lectures, digital textbooks on NCERT e-Pathshala, and MOOCs on SWAYAM as a student in a metropolitan premier academy.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Multi-Sensory Cognitive Simulation &amp; Virtual Labs:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Abstract, microscopic, or hazardous concepts (such as atomic nuclear fission, cellular DNA replication, or planetary orbital mechanics) are brought to life through 3D animations, interactive simulations (PhET), and virtual reality laboratories.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">3. Individualized Learning and Cognitive Autonomy:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Adaptive learning software adjusts question difficulty dynamically based on student performance. Advanced learners accelerate ahead, while struggling students receive diagnostic hints and remedial practice without social stigma.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 138, 101, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">4. Automated Assessment &amp; Instant Pedagogical Analytics:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        ICT automates testing through smart online quizzes, producing instant granular learning analytics. Teachers immediately identify which specific subtopic baffled the class, enabling precise remedial intervention.
      </p>
    </div>
  </div>

  <!-- SECTION 5.4 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">5.4 Concept of modern learning models: Online learning, Blended Learning, Flipped Learning</h2>

  <p>The digital revolution has spawned innovative instructional architectures that transcend the limitations of the conventional physical classroom. Three modern paradigms dominate contemporary pedagogy:</p>

  <!-- MODEL 1: ONLINE LEARNING -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(i) Online Learning (E-Learning / Virtual Education)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Delivery:</b> Online learning is a fully web-mediated educational format where instruction, content delivery, student-teacher interaction, and assessment occur entirely across digital networks without requiring physical co-presence.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li><b style="color: \${themeColor};">Synchronous Online Learning:</b> Real-time live interaction where educators and students convene concurrently via video conferencing tools (Zoom, Google Meet, Microsoft Teams), participating in live polls and instant chats.</li>
      <li><b style="color: \${themeColor};">Asynchronous Online Learning:</b> Flexible, self-paced learning where instructional materials (recorded video lectures, readings, discussion forums) are accessed at the student's convenience without concurrent live login.</li>
    </ul>
  </div>

  <!-- MODEL 2: BLENDED LEARNING -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(ii) Blended Learning (Hybrid Learning Model)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Philosophy:</b> Blended Learning is the optimal pedagogical synthesis combining the best attributes of traditional face-to-face classroom teaching with structured online digital instruction. It does not simply layer technology on top of traditional classes; it redesigns the instructional ecosystem.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li><b style="color: \${themeColor};">The Best of Both Worlds:</b> Preserves the human warmth, social camaraderie, and immediate teacher mentorship of brick-and-mortar schools, while incorporating the flexibility, rich multimedia animations, and individualized pacing of digital e-learning.</li>
      <li><b style="color: \${themeColor};">Popular Operational Models:</b> <i>Station Rotation Model</i> (students rotate between teacher-led small groups and digital stations); <i>Flex Model</i> (online platform serves as primary spine while teachers provide targeted breakout interventions).</li>
    </ul>
  </div>

  <!-- MODEL 3: FLIPPED LEARNING -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(iii) Flipped Learning (The Flipped Classroom Model)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Pedagogical Inversion:</b> Pioneered by high school chemistry teachers Jonathan Bergmann and Aaron Sams (2007), the <b style="color: \${themeColor};">Flipped Classroom</b> radically inverts traditional instructional chronology:
    </p>
    <div style="display: flex; flex-direction: column; gap: 10px; margin: 10px 0;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #38EF7D;">1. At Home (Before Class):</b> The direct lecture &mdash; traditionally delivered by the teacher standing at the board &mdash; is recorded into short 10-15 minute videos. Students watch these video lessons at home at their own pace, taking notes, pausing, and rewinding as needed.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #00C6FF;">2. In School (During Class):</b> The classroom &mdash; previously reserved for silent passive listening &mdash; becomes a vibrant workshop. Students spend class time solving complex problems, conducting lab experiments, debating case studies, and engaging in collaborative projects with personalized guidance from the teacher.
      </div>
    </div>
    <p style="margin: 8px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: \${themeColor};">Alignment with Bloom's Revised Taxonomy:</b> In a traditional class, lower-order cognitive tasks (Remembering, Understanding) happen in class with the teacher, while higher-order tasks (Applying, Analyzing, Evaluating) are sent home as frustrating homework. The Flipped Classroom flips this: lower-order tasks happen independently at home, while higher-order tasks happen in school under expert teacher guidance!
    </p>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 2: THE FLIPPED CLASSROOM INVERSION (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 138, 101, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">THE FLIPPED CLASSROOM PEDAGOGICAL INVERSION</text>

        <!-- Traditional Model Box -->
        <rect x="20" y="45" width="185" height="160" rx="8" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.6" />
        <text x="112" y="66" font-size="10.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">TRADITIONAL CLASS</text>

        <rect x="30" y="80" width="165" height="48" rx="4" fill="#FEE2E2" />
        <text x="112" y="98" font-size="9.5" font-weight="bold" fill="#991B1B" text-anchor="middle">IN CLASS (Teacher-Centric)</text>
        <text x="112" y="114" font-size="8.5" fill="#7F1D1D" text-anchor="middle">Passive Lectures &bull; Notes</text>

        <rect x="30" y="140" width="165" height="48" rx="4" fill="#FEE2E2" />
        <text x="112" y="158" font-size="9.5" font-weight="bold" fill="#991B1B" text-anchor="middle">AT HOME (Alone)</text>
        <text x="112" y="174" font-size="8.5" fill="#7F1D1D" text-anchor="middle">Difficult Homework &bull; Frustration</text>

        <!-- Inversion Indicator -->
        <circle cx="220" cy="125" r="16" fill="#FFF7ED" stroke="#EA580C" stroke-width="2" />
        <text x="220" y="130" font-size="12" font-weight="bold" fill="#EA580C" text-anchor="middle">&#8646;</text>

        <!-- Flipped Model Box -->
        <rect x="235" y="45" width="185" height="160" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8" />
        <text x="327" y="66" font-size="10.5" font-weight="bold" fill="#15803D" text-anchor="middle">FLIPPED CLASSROOM</text>

        <rect x="245" y="80" width="165" height="48" rx="4" fill="#DCFCE7" />
        <text x="327" y="98" font-size="9.5" font-weight="bold" fill="#166534" text-anchor="middle">AT HOME (Self-Paced)</text>
        <text x="327" y="114" font-size="8.5" fill="#14532D" text-anchor="middle">Watch Video Lessons &bull; Rewind</text>

        <rect x="245" y="140" width="165" height="48" rx="4" fill="#DCFCE7" />
        <text x="327" y="158" font-size="9.5" font-weight="bold" fill="#166534" text-anchor="middle">IN CLASS (Collaborative)</text>
        <text x="327" y="174" font-size="8.5" fill="#14532D" text-anchor="middle">Problem-Solving &bull; Teacher Guidance</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Pedagogical Flip: Direct instruction shifts to home self-pacing, transforming school into an active laboratory for higher-order application, collaboration, and expert mentoring.
    </div>
  </div>

  <!-- COMPARISON TABLE BOX -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid \${themeColor}; border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; font-weight: bold; margin: 0 0 12px 0;">
      📊 Master Comparative Matrix: Modern Learning Models
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #F8FAFC;">
        <thead>
          <tr style="background: rgba(255, 138, 101, 0.25); border-bottom: 2px solid \${themeColor};">
            <th style="padding: 10px; text-align: left;">Dimension</th>
            <th style="padding: 10px; text-align: left;">Online Learning</th>
            <th style="padding: 10px; text-align: left;">Blended Learning</th>
            <th style="padding: 10px; text-align: left;">Flipped Classroom</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Primary Location</td>
            <td style="padding: 10px;">100% remote digital environment.</td>
            <td style="padding: 10px;">Both physical classroom and digital space.</td>
            <td style="padding: 10px;">Home (video lectures) + School (hands-on).</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Classroom Role</td>
            <td style="padding: 10px;">Virtual webinars and LMS platforms.</td>
            <td style="padding: 10px;">Interactive station rotation and face-to-face instruction.</td>
            <td style="padding: 10px;">Dynamic problem-solving, debates, and peer work.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Teacher's Function</td>
            <td style="padding: 10px;">Online moderator, course designer, webinar host.</td>
            <td style="padding: 10px;">Blended facilitator combining high-touch with high-tech.</td>
            <td style="padding: 10px;">Personal coach guiding complex applications in real time.</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Chief Advantage</td>
            <td style="padding: 10px;">Total geographical freedom and borderless reach.</td>
            <td style="padding: 10px;">Harmonious balance of social warmth and digital flexibility.</td>
            <td style="padding: 10px;">Maximizes active student learning and individualized pacing.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- POLICY CONNECT BOX: NEP 2020 DIGITAL ARCHITECTURE -->
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #38EF7D; border-radius: 8px; padding: 14px 16px; margin: 20px 0;">
    <h4 style="color: #38EF7D; margin: 0 0 6px 0; font-size: 16px; font-weight: bold;">
      🏛️ Educational Policy Connect: NEP 2020 on Digital Technology &amp; NETF
    </h4>
    <p style="margin: 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      The <b>National Education Policy (NEP 2020)</b> envisions India as a global knowledge superpower through the aggressive integration of technology. NEP 2020 mandates the establishment of the <b>National Educational Technology Forum (NETF)</b> to steer technological innovations, expands indigenous digital platforms like <b>DIKSHA</b> (One Nation One Digital Platform) and <b>SWAYAM</b> (free MOOCs), and strongly advocates for Blended Learning and Flipped Classrooms to eradicate the digital divide.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: Q & A (SOLUTIONS)                          */
/* -------------------------------------------------------------------------- */

export const c12Edu5HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(255, 138, 101, 0.08); border-left: 4px solid \${themeColor}; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
    <h3 style="color: \${themeColor}; margin: 0 0 6px 0; font-size: 18px; font-weight: bold;">🎯 Golden 25 Board Examination Q &amp; A Blueprint</h3>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">
      Class 12 Unit 5: Educational Technology (10 Marks) &bull; Strictly 12 VSAT (1 &amp; 2 Marks), 8 SAT (4 Marks), and 5 LAT (6 Marks).
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
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q1: Define Educational Technology according to G. O. M. Leith.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      According to <b style="color: \${themeColor};">G. O. M. Leith</b>, <i>"Educational technology is the application of scientific knowledge and learning conditions to improve the effectiveness and efficiency of teaching and training."</i>
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q2: What are the Greek root words of 'Technology'?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      Technology is derived from the Greek words <b style="color: \${themeColor};">"Techne"</b> (meaning art, skill, or craft) and <b style="color: \${themeColor};">"Logos"</b> (meaning science, discourse, or systematic study).
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q3: Distinguish between 'Technology in Education' and 'Technology of Education'.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Technology in Education</b> refers to using physical machinery and gadgets (smartboards, projectors), while <b style="color: \${themeColor};">Technology of Education</b> refers to applying psychological learning principles, instructional designs, and behavioral objectives.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q4: Who classified Educational Technology into Hardware and Software approaches?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The eminent psychologist and educational technologist <b style="color: \${themeColor};">Arthur A. Lumsdaine</b> (1964) classified educational technology into Hardware (ET-1) and Software (ET-2) approaches.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q5: What is the Hardware Approach (ET-1)? Give two examples.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: \${themeColor};">Hardware Approach</b> is based on physical sciences and mechanical/electronic engineering that mechanizes information transmission. Examples: (1) <b style="color: \${themeColor};">LCD Projectors</b>; (2) <b style="color: \${themeColor};">Interactive Smartboards</b>.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q6: What is the Software Approach (ET-2)? Give two examples.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: \${themeColor};">Software Approach</b> is rooted in behavioral sciences and learning psychology, focusing on modifying student behavior. Examples: (1) <b style="color: \${themeColor};">Programmed Learning Modules</b>; (2) <b style="color: \${themeColor};">Formative Assessment Rubrics</b>.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q7: State what ICT stands for in modern education.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      ICT stands for <b style="color: \${themeColor};">Information and Communication Technology</b>, representing the unified convergence of computing, telecommunications, internet, and multimedia technologies.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q8: State two vital advantages of ICT in the teaching-learning process.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: \${themeColor};">Universal Democratization:</b> Providing borderless access to quality digital textbooks and lectures; (2) <b style="color: \${themeColor};">Multi-Sensory Engagement:</b> Rendering abstract concepts visible via 3D interactive simulations.
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q9: Differentiate between Synchronous and Asynchronous online learning.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Synchronous</b> learning occurs in real time with live concurrent interaction (e.g., live Zoom lectures), whereas <b style="color: \${themeColor};">Asynchronous</b> learning is self-paced where learners access pre-recorded materials and discussion forums at their own time.
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q10: What is meant by Blended Learning?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Blended Learning</b> (or Hybrid Learning) is a pedagogical approach that integrates traditional face-to-face classroom teaching with structured online digital educational instruction.
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q11: Explain the core concept of a 'Flipped Classroom'.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      A <b style="color: \${themeColor};">Flipped Classroom</b> inverts traditional schooling: students watch instructional video lectures at home at their own pace, while classroom hours are dedicated to active problem-solving and discussions under teacher mentorship.
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q12: State two major principles of Educational Technology.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: \${themeColor};">Principle of Purposefulness:</b> Direct alignment with clear behavioral learning objectives; (2) <b style="color: \${themeColor};">Principle of Individualized Pacing:</b> Enabling learners to progress according to their unique cognitive speed.
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
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q13: Explain four fundamental principles of Educational Technology.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Educational Technology is governed by core scientific principles:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Principle of Goal-Orientation:</b> Technology is a means, not an end; it must serve specific behavioral objectives (cognitive, affective, psychomotor).</li>
        <li><b style="color: \${themeColor};">2. Principle of Active Learner Response:</b> Students learn best by doing; interactive quizzes, simulations, and feedback loops prevent passive boredom.</li>
        <li><b style="color: \${themeColor};">3. Principle of Immediate Reinforcement:</b> Immediate knowledge of test results reinforces correct neural pathways and extinguishes misconceptions.</li>
        <li><b style="color: \${themeColor};">4. Principle of Individualized Pacing:</b> Accommodating individual differences by allowing students to pause, rewind, and re-examine complex concepts.</li>
      </ul>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q14: Compare Hardware and Software approaches across four distinct parameters.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Hardware and Software approaches differ fundamentally across key dimensions:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Theoretical Origin:</b> Hardware originates from physical sciences and engineering, whereas Software stems from behavioral psychology and linguistics.</li>
        <li><b style="color: \${themeColor};">2. Primary Focus:</b> Hardware emphasizes machines, electronics, and devices; Software emphasizes learning content, instructional strategies, and behavioral modification.</li>
        <li><b style="color: \${themeColor};">3. Pedagogical Role:</b> Hardware serves as the physical carrier of information; Software serves as the educational message and cognitive organizer.</li>
        <li><b style="color: \${themeColor};">4. Nomenclature:</b> Hardware is known as <i>Technology in Education</i>; Software is known as <i>Technology of Education</i>.</li>
      </ul>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q15: Discuss how Hardware and Software approaches are mutually interdependent.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Hardware and Software represent the two indivisible sides of the same educational coin:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. The Metaphor of Body and Soul:</b> Hardware represents the physical body (machinery), while software represents the living soul (instructional content).</li>
        <li><b style="color: \${themeColor};">2. Hardware without Software:</b> A high-end interactive flat panel or computer lab without high-quality pedagogic software is an inert, useless collection of metal and silicon.</li>
        <li><b style="color: \${themeColor};">3. Software without Hardware:</b> A brilliantly designed digital curriculum or 3D simulation cannot reach students without electronic hardware to display and run it.</li>
        <li><b style="color: \${themeColor};">4. Symbiotic Synergy:</b> Maximum learning efficiency is attained only when advanced hardware perfectly transmits scientifically designed psychological software.</li>
      </ul>
    </div>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q16: Describe the role of ICT in democratizing education and catering to individualized learning.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      ICT has radically democratized global educational opportunities:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Eradicating Geographic Barriers:</b> Students in remote, disadvantaged rural regions access identical curriculum materials through national digital repositories (DIKSHA, e-Pathshala).</li>
        <li><b style="color: \${themeColor};">2. Self-Paced Progression:</b> Unlike rigid traditional classrooms, ICT allows learners to control learning tempo, speeding ahead or repeating challenging lessons.</li>
        <li><b style="color: \${themeColor};">3. Multi-Sensory Accommodation:</b> Visual learners benefit from infographics, auditory learners from podcasts, and kinesthetic learners from interactive digital simulations.</li>
        <li><b style="color: \${themeColor};">4. Inclusive Education for CWSN:</b> Screen readers, text-to-speech software, and braille digital devices empower children with special needs.</li>
      </ul>
    </div>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q17: Analyze the benefits and challenges of Online Learning in the Indian context.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Online learning represents immense promise alongside real infrastructural hurdles:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Chief Benefits:</b> Complete spatial flexibility, access to top-tier university professors via MOOCs (SWAYAM), paperless digital archives, and cost-effective upskilling.</li>
        <li><b style="color: \${themeColor};">2. The Digital Divide:</b> Disparities in smartphone ownership, erratic rural electricity, and lack of high-speed broadband exclude millions of marginalized children.</li>
        <li><b style="color: \${themeColor};">3. Lack of Social Interaction:</b> Deprives youth of peer camaraderie, physical sports, and emotional bonding, risking social isolation.</li>
        <li><b style="color: \${themeColor};">4. Screen Fatigue &amp; Discipline:</b> Prolonged screen exposure causes ocular strain, and asynchronous modules require immense personal self-discipline.</li>
      </ul>
    </div>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q18: Explain Blended Learning and how it combines the strengths of traditional and digital schooling.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Blended Learning harmonizes conventional warmth with digital efficacy:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Conceptual Synthesis:</b> It strategically blends physical face-to-face instruction with online self-directed learning, avoiding the extremes of pure chalk-and-talk or isolated screen time.</li>
        <li><b style="color: \${themeColor};">2. Retaining Human Mentorship:</b> Preserves the irreplaceable moral guidance, emotional warmth, laboratory work, and collaborative sports of the brick-and-mortar school.</li>
        <li><b style="color: \${themeColor};">3. Harnessing Digital Flexibility:</b> Integrates cloud-based assignments, diagnostic quizzes, and animated simulations that students can explore at their own pace.</li>
        <li><b style="color: \${themeColor};">4. Enhanced Teacher Productivity:</b> Frees educators from repetitive lecturing, allowing them to focus on small-group mentoring and remedial assistance.</li>
      </ul>
    </div>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q19: Illustrate the operational mechanism of a Flipped Classroom (Before-Class vs. In-Class activities).</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      The Flipped Classroom inverts traditional pedagogical workflow:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Before-Class Phase (At Home):</b> Students independently watch short, structured digital video lectures (10–15 mins) and complete self-check quizzes, acquiring foundational knowledge.</li>
        <li><b style="color: \${themeColor};">2. In-Class Phase (In School):</b> Instead of listening passively, students engage in debates, hands-on scientific experiments, case studies, and advanced problem-solving in groups.</li>
        <li><b style="color: \${themeColor};">3. The Teacher's Role:</b> Shifts from a formal lecturer into an active coach circulating the room, clarifying doubts, and offering real-time scaffolding.</li>
        <li><b style="color: \${themeColor};">4. Elimination of Homework Frustration:</b> Difficult cognitive applications are completed in the classroom with teacher support, rather than at home in solitary distress.</li>
      </ul>
    </div>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q20: Discuss how ICT transforms the teacher's role from an authoritarian lecturer to a facilitator.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      In an ICT-enabled classroom, the teacher undergoes a radical pedagogical transformation:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. From Information Dispenser to Learning Architect:</b> The teacher is no longer the sole custodian of facts (which are readily available online), but the curator and designer of learning experiences.</li>
        <li><b style="color: \${themeColor};">2. Facilitator of Critical Thinking:</b> Guiding students to evaluate, filter, and critically synthesize internet information rather than memorizing raw textbooks.</li>
        <li><b style="color: \${themeColor};">3. Diagnostician &amp; Mentor:</b> Using digital analytics to identify student learning gaps and providing individualized emotional and academic guidance.</li>
        <li><b style="color: \${themeColor};">4. Life-Skills Coach:</b> Fostering cyber ethics, digital safety, collaborative teamwork, and creative problem-solving skills.</li>
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
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">Q21: Comprehensive Exposition of Educational Technology: Meaning, Scope, Principles, and Difference between Technology in and of Education.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Conceptual Meaning &amp; Scope:</b><br />
      Derived from <i>techne</i> (craft/art) and <i>logos</i> (science), Educational Technology is the systematic application of scientific processes, psychological laws of learning, and technological resources to maximize teaching efficiency (Leith). It encompasses hardware machinery, instructional software, behavioral design, and evaluation systems.</p>

      <p><b style="color: \${themeColor};">II. Fundamental Principles of Educational Technology:</b><br />
      (1) <b style="color: \${themeColor};">Goal-Orientation:</b> Direct linkage with explicit behavioral objectives.<br />
      (2) <b style="color: \${themeColor};">Active Learner Response:</b> Interactive problem-solving rather than passive viewing.<br />
      (3) <b style="color: \${themeColor};">Immediate Feedback:</b> Prompt reinforcement accelerating retention.<br />
      (4) <b style="color: \${themeColor};">Individualized Pacing:</b> Accommodating diverse cognitive speeds.<br />
      (5) <b style="color: \${themeColor};">Multi-Sensory Stimulation:</b> Engaging sight, sound, and touch.</p>

      <p><b style="color: \${themeColor};">III. Technology IN vs. Technology OF Education:</b><br />
      <i>Technology IN Education</i> refers to the introduction of hardware devices (projectors, smartboards, TV) into classrooms, mechanizing information transmission. <i>Technology OF Education</i> refers to the psychological re-engineering of the instructional process (learning theories, task analysis, programmed instruction, behavioral evaluation). True educational technology integrates both.</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">Q22: Detailed Classification and Comparative Analysis of Hardware and Software Approaches to Educational Technology.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Introduction &amp; Lumsdaine's Framework:</b><br />
      In 1964, Arthur A. Lumsdaine categorized educational technology into Hardware (ET-1) and Software (ET-2) approaches, representing the physical and intellectual dimensions of instructional design.</p>

      <p><b style="color: \${themeColor};">II. Comparative Breakdown across Core Dimensions:</b><br />
      (1) <b style="color: \${themeColor};">Disciplinary Roots:</b> Hardware originates in physical sciences and electrical engineering; Software originates in behavioral psychology and psycholinguistics.<br />
      (2) <b style="color: \${themeColor};">Core Instruments:</b> Hardware comprises computers, LCD projectors, interactive screens, and radio; Software comprises programmed learning texts, instructional apps, curriculum algorithms, and evaluation tools.<br />
      (3) <b style="color: \${themeColor};">Pedagogical Function:</b> Hardware delivers information across mass audiences; Software alters student cognitive structures and shapes behavioral modification.<br />
      (4) <b style="color: \${themeColor};">Cost &amp; Maintenance:</b> Hardware requires heavy capital expenditure and physical maintenance; Software demands cognitive expertise and continuous curriculum revision.</p>

      <p><b style="color: \${themeColor};">III. Inseparable Symbiosis:</b><br />
      Neither approach can succeed alone. Hardware is the vehicle; Software is the driver and cargo. Meaningful education occurs only when high-tech hardware delivers high-touch, psychologically sound software.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">Q23: The Revolutionary Role of ICT in Modern Teaching-Learning and NEP 2020 Digital Initiatives.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Conceptual Convergence of ICT:</b><br />
      Information and Communication Technology (ICT) represents the convergence of computers, cloud computing, digital multimedia, and broadband networks, transforming traditional passive classrooms into interactive discovery centers.</p>

      <p><b style="color: \${themeColor};">II. Major Pillars of ICT Transformation:</b><br />
      (1) <b style="color: \${themeColor};">Universal Access &amp; Equity:</b> Eradicates rural-urban educational disparities by delivering high-caliber open educational resources (OER) to every connected device.<br />
      (2) <b style="color: \${themeColor};">Interactive Multi-Sensory Simulations:</b> Complex scientific phenomena (molecular geometry, astrophysics) become visually tangible through virtual laboratories and 3D simulations.<br />
      (3) <b style="color: \${themeColor};">Continuous Diagnostic Analytics:</b> Real-time digital assessments provide instant feedback, pin-pointing learning gaps.<br />
      (4) <b style="color: \${themeColor};">Administrative &amp; Pedagogical Efficiency:</b> Automates grading, student tracking, and digital lesson repositories.</p>

      <p><b style="color: \${themeColor};">III. Alignment with NEP 2020:</b><br />
      NEP 2020 champions digital architecture through the <i>National Educational Technology Forum (NETF)</i>, expands national platforms like <i>DIKSHA</i> and <i>SWAYAM</i>, and mandates digital literacy as a core 21st-century foundational competence.</p>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">Q24: Critical Examination of Modern Learning Models: Online Learning, Blended Learning, and Flipped Classrooms.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. The Paradigm Shift in Educational Delivery:</b><br />
      Contemporary pedagogy has evolved beyond the rigid temporal and physical confines of the four-walled classroom, developing three prominent instructional models.</p>

      <p><b style="color: \${themeColor};">II. Analytical Evaluation of the Three Models:</b><br />
      (1) <b style="color: \${themeColor};">Online Learning:</b> 100% web-based delivery (synchronous live classes and asynchronous modules). Offers unmatched geographic freedom and self-pacing, but faces challenges of student isolation, screen fatigue, and the digital divide.<br />
      (2) <b style="color: \${themeColor};">Blended Learning:</b> Harmonious hybrid of face-to-face classroom teaching with digital e-learning. Retains vital social-emotional bonding, peer interaction, and sports while providing personalized digital resources and flexible scheduling.<br />
      (3) <b style="color: \${themeColor};">Flipped Classroom:</b> Chronological inversion of teaching. Direct instruction occurs at home via video lessons, while classroom time is liberated for interactive debate, problem-solving, and laboratory exploration under teacher scaffolding.</p>

      <p><b style="color: \${themeColor};">III. Synthesis for Future Schools:</b><br />
      The future of education is not purely virtual, nor purely traditional; it lies in Blended and Flipped designs that leverage high-tech digital tools to foster high-touch human wisdom.</p>
    </div>
  </div>

  <!-- Q25 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">Q25: Real-World Pedagogical Case Study: Implementation of a Flipped Blended Learning Model in a Senior Secondary School.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">Case Context:</b><br />
      <i>Greenwood Senior Secondary School reports severe student disengagement in Class 12. Students complain of dry, boring 45-minute lectures where teachers simply read textbooks. Homework completion rates are below 40%, and students experience immense anxiety when solving complex numerical problems alone at home. The Principal decides to transition the school to a Flipped Blended Learning model.</i></p>

      <p><b style="color: \${themeColor};">I. Diagnostic Identification:</b><br />
      (1) Misallocation of precious classroom hours to lower-order cognitive tasks (passive listening).<br />
      (2) Abandonment of students during higher-order tasks (homework problem-solving) when they most need teacher scaffolding.<br />
      (3) Complete lack of multi-sensory ICT stimulation.</p>

      <p><b style="color: \${themeColor};">II. Four-Stage Implementation Blueprint:</b><br />
      (1) <b style="color: \${themeColor};">Stage 1 &mdash; Digital Content Curation (At Home):</b> Teachers curate and record 10-to-12-minute engaging video modules integrated with DIKSHA animations. Students watch these at home at their own pace, accompanied by 3 quick check-in questions.<br />
      (2) <b style="color: \${themeColor};">Stage 2 &mdash; Classroom Re-Engineering (In School):</b> Lectures are eliminated. The classroom is arranged into collaborative pods. Class begins with a 5-minute quiz to identify misconceptions, followed by 35 minutes of active problem-solving, debates, and lab experiments.<br />
      (3) <b style="color: \${themeColor};">Stage 3 &mdash; Teacher as Personal Coach:</b> The teacher circulates among student groups, providing personalized scaffolding, guiding struggling learners, and challenging gifted students with advanced cases.<br />
      (4) <b style="color: \${themeColor};">Stage 4 &mdash; Digital Equity &amp; Parent Alignment:</b> School computer labs are kept open after hours for students without home internet, and parents are briefed on supporting self-paced video viewing rather than forcing traditional rote homework.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS (INTERACTIVE)                         */
/* -------------------------------------------------------------------------- */

export const c12Edu5Mcqs = [
  {
    "id": "c12-edu-5-mcq-1",
    "question": "The Greek root word 'Techne' from which 'Technology' is derived means:",
    "options": [
      "A):   Science or discourse",
      "B):   Art, skill, or craft",
      "C):   Machine or motor",
      "D):   Computer or screen"
    ],
    "correctAnswer": "b",
    "explanation": "Technology comes from the Greek 'Techne' (art, craft, or skill) and 'Logos' (science, study, or discourse)."
  },
  {
    "id": "c12-edu-5-mcq-2",
    "question": "Who classified Educational Technology into Hardware (ET-1) and Software (ET-2) approaches in 1964?",
    "options": [
      "A):   Arthur A. Lumsdaine",
      "B):   B. F. Skinner",
      "C):   Jean Piaget",
      "D):   John Dewey"
    ],
    "correctAnswer": "a",
    "explanation": "Arthur A. Lumsdaine pioneered the classic categorization of educational technology into Hardware and Software approaches in 1964."
  },
  {
    "id": "c12-edu-5-mcq-3",
    "question": "The Hardware approach to educational technology (ET-1) is firmly rooted in:",
    "options": [
      "A):   Behavioral psychology",
      "B):   Sociology and anthropology",
      "C):   Physical sciences and engineering",
      "D):   Linguistics and grammar"
    ],
    "correctAnswer": "c",
    "explanation": "The Hardware approach originates in physical sciences and electrical/mechanical engineering, focusing on equipment and transmission devices."
  },
  {
    "id": "c12-edu-5-mcq-4",
    "question": "The Software approach to educational technology (ET-2) is rooted in:",
    "options": [
      "A):   Astronomy",
      "B):   Mechanical and civil engineering",
      "C):   Thermodynamics",
      "D):   Behavioral sciences and psychology of learning"
    ],
    "correctAnswer": "d",
    "explanation": "The Software approach is grounded in behavioral sciences, learning theories, and pedagogical instructional design."
  },
  {
    "id": "c12-edu-5-mcq-5",
    "question": "Which of the following is designated as 'Technology of Education'?",
    "options": [
      "A):   Hardware Approach (ET-1)",
      "B):   Software Approach (ET-2)",
      "C):   Television Broadcasting",
      "D):   LCD Projector Manufacturing"
    ],
    "correctAnswer": "b",
    "explanation": "The Software approach represents the 'Technology of Education' because it re-engineers instructional psychology and learning processes."
  },
  {
    "id": "c12-edu-5-mcq-6",
    "question": "What does the acronym ICT stand for in modern educational pedagogy?",
    "options": [
      "A):   Information and Communication Technology",
      "B):   Integrated Classroom Teaching",
      "C):   Instructional Computer Training",
      "D):   Internal Cognitive Testing"
    ],
    "correctAnswer": "a",
    "explanation": "ICT stands for Information and Communication Technology, denoting the convergence of computing, internet, and multimedia."
  },
  {
    "id": "c12-edu-5-mcq-7",
    "question": "A live Zoom or Google Meet classroom session where teacher and students interact in real time is an example of:",
    "options": [
      "A):   Traditional Chalk-and-Talk",
      "B):   Asynchronous Online Learning",
      "C):   Pure Hardware Maintenance",
      "D):   Synchronous Online Learning"
    ],
    "correctAnswer": "d",
    "explanation": "Synchronous learning occurs concurrently in real time, enabling immediate live interaction, question-answer, and chat."
  },
  {
    "id": "c12-edu-5-mcq-8",
    "question": "A pedagogical model that strategically integrates traditional face-to-face classroom teaching with digital online instruction is called:",
    "options": [
      "A):   Rote Learning",
      "B):   Mechanical Learning",
      "C):   Blended Learning",
      "D):   Isolated Distance Education"
    ],
    "correctAnswer": "c",
    "explanation": "Blended Learning (or Hybrid Learning) thoughtfully fuses physical face-to-face instruction with online digital learning."
  },
  {
    "id": "c12-edu-5-mcq-9",
    "question": "Who were the pioneering high school educators who developed the 'Flipped Classroom' model in 2007?",
    "options": [
      "A):   Wilhelm Wundt and William James",
      "B):   Jonathan Bergmann and Aaron Sams",
      "C):   Ivan Pavlov and B. F. Skinner",
      "D):   Sigmund Freud and Carl Jung"
    ],
    "correctAnswer": "b",
    "explanation": "Jonathan Bergmann and Aaron Sams, two Colorado chemistry teachers, pioneered the modern Flipped Classroom approach in 2007."
  },
  {
    "id": "c12-edu-5-mcq-10",
    "question": "In a Flipped Classroom, where does the direct instructional lecture primarily take place?",
    "options": [
      "A):   At home via pre-recorded video lessons at the student's own pace",
      "B):   In the school auditorium under strict silence",
      "C):   During end-of-term examination halls",
      "D):   Exclusively on the playground"
    ],
    "correctAnswer": "a",
    "explanation": "In a flipped model, direct lecture delivery is shifted outside the classroom to the home, watched at the student's own pace."
  },
  {
    "id": "c12-edu-5-mcq-11",
    "question": "Which of the following belongs strictly to the Software Approach (ET-2) of educational technology?",
    "options": [
      "A):   Overhead LCD projector",
      "B):   Interactive flat screen television",
      "C):   Programmed instructional learning material based on Skinner's operant conditioning",
      "D):   Digital tablet hardware"
    ],
    "correctAnswer": "c",
    "explanation": "Programmed instructional learning modules are psychological, software-based pedagogical designs (ET-2), whereas screens and projectors are hardware (ET-1)."
  },
  {
    "id": "c12-edu-5-mcq-12",
    "question": "Why is the Software approach considered superior in modifying student learning behavior compared to the Hardware approach alone?",
    "options": [
      "A):   Because hardware is cheaper than software",
      "B):   Because hardware cannot be plugged into electricity",
      "C):   Because software does not require any human intervention",
      "D):   Because software is based directly on learning theories and psychological principles of behavior modification"
    ],
    "correctAnswer": "d",
    "explanation": "The Software approach directly harnesses psychological principles (reinforcement, sequencing, active response) to reshape cognitive structures."
  },
  {
    "id": "c12-edu-5-mcq-13",
    "question": "A student watching pre-recorded chemistry video lectures at midnight, pausing to take notes, and submitting assignments on a portal is practicing:",
    "options": [
      "A):   Asynchronous Online Learning",
      "B):   Synchronous Online Learning",
      "C):   Traditional Lecture Method",
      "D):   Physical Rote Memorization"
    ],
    "correctAnswer": "a",
    "explanation": "Asynchronous learning allows students to access instructional content and complete tasks at their own schedule without live concurrent meetings."
  },
  {
    "id": "c12-edu-5-mcq-14",
    "question": "How does the Flipped Classroom model align with Bloom's Revised Taxonomy?",
    "options": [
      "A):   All higher-order tasks are permanently eliminated",
      "B):   Lower-order cognitive tasks (Remembering, Understanding) happen at home, while higher-order tasks (Applying, Analyzing) happen in school with teacher guidance",
      "C):   Students only engage in remembering facts during school hours",
      "D):   Evaluation is shifted completely to parents"
    ],
    "correctAnswer": "b",
    "explanation": "Flipped classrooms flip Bloom's hierarchy: basic remembering occurs at home via video lectures, while complex application and analysis happen in class under teacher coaching."
  },
  {
    "id": "c12-edu-5-mcq-15",
    "question": "A biology teacher uses an interactive 3D virtual simulation to demonstrate the beating human heart instead of merely drawing a static chalk diagram. Which principle of ET is utilized?",
    "options": [
      "A):   Principle of Corporal Restraint",
      "B):   Principle of Rote Drill",
      "C):   Principle of Negative Reinforcement",
      "D):   Principle of Multi-Sensory Appeal and Visualization"
    ],
    "correctAnswer": "d",
    "explanation": "Interactive 3D simulations engage multiple sensory modalities, enhancing conceptual retention according to Edgar Dale's Cone of Experience."
  },
  {
    "id": "c12-edu-5-mcq-16",
    "question": "Why is a modern computer lab without high-quality instructional software considered pedagogically incomplete?",
    "options": [
      "A):   Because students prefer chalkboards over keyboards",
      "B):   Because computers cannot function without air conditioning",
      "C):   Because hardware is the physical carrier, but software is the intellectual instructional content (body without soul)",
      "D):   Because hardware operates only in synchronous mode"
    ],
    "correctAnswer": "c",
    "explanation": "Hardware (machines) cannot teach by itself; it requires software (curated pedagogic content and learning design) to create educational value."
  },
  {
    "id": "c12-edu-5-mcq-17",
    "question": "Which of the following represents a major limitation of 100% purely Online Learning compared to Blended Learning?",
    "options": [
      "A):   Inability to use digital video",
      "B):   Absence of face-to-face social-emotional interaction and peer socialization",
      "C):   Lack of digital textbooks",
      "D):   Inability to review recorded lessons"
    ],
    "correctAnswer": "b",
    "explanation": "Pure online learning often deprives students of physical peer camaraderie, face-to-face emotional bonding, and hands-on laboratory experiences."
  },
  {
    "id": "c12-edu-5-mcq-18",
    "question": "Under the guidelines of the National Education Policy (NEP 2020), what is the key mandate of the National Educational Technology Forum (NETF)?",
    "options": [
      "A):   To provide an autonomous platform for the free exchange of ideas on the use of technology to enhance learning and planning",
      "B):   To manufacture computer monitors",
      "C):   To enforce pencil-and-paper examinations exclusively",
      "D):   To ban smartphones across universities"
    ],
    "correctAnswer": "a",
    "explanation": "NEP 2020 establishes the NETF as an autonomous forum to steer educational technology policy, research, and deployment across India."
  },
  {
    "id": "c12-edu-5-mcq-19",
    "question": "A high school adopts the 'Station Rotation' model: for 20 minutes students engage with digital software, then rotate to small-group teacher instruction, then to collaborative peer projects. This is an example of:",
    "options": [
      "A):   Authoritarian Pedagogy",
      "B):   Pure Correspondence Course",
      "C):   Hardware-Only Approach",
      "D):   Blended Learning"
    ],
    "correctAnswer": "d",
    "explanation": "The Station Rotation model is one of the classic, highly effective implementations of Blended Learning in modern schools."
  },
  {
    "id": "c12-edu-5-mcq-20",
    "question": "During homework, a student often felt helpless and gave up on difficult math problems. After her school flipped the classroom, she solves problems in class where her teacher gives immediate guidance. What pedagogical problem was resolved?",
    "options": [
      "A):   Elimination of physical school buildings",
      "B):   Complete elimination of all assessments",
      "C):   Providing teacher scaffolding during the high-cognitive-load application stage rather than leaving the student stranded at home",
      "D):   Conversion of mathematics into biological science"
    ],
    "correctAnswer": "c",
    "explanation": "Flipping shifts teacher presence to when students need help most &mdash; during challenging application and problem-solving."
  },
  {
    "id": "c12-edu-5-mcq-21",
    "question": "Which of the following best exemplifies the 'Principle of Immediate Reinforcement' in educational technology?",
    "options": [
      "A):   Receiving annual exam results four months after testing",
      "B):   An online quiz that provides immediate feedback, explains why an option is wrong, and unlocks the next concept",
      "C):   Listening to a two-hour uninterrupted monologue lecture",
      "D):   Copying definitions from a blackboard without understanding"
    ],
    "correctAnswer": "b",
    "explanation": "Immediate automated feedback informs the learner of correctness instantaneously, reinforcing learning according to Skinnerian principles."
  },
  {
    "id": "c12-edu-5-mcq-22",
    "question": "A school in a remote district faces a severe shortage of qualified physics teachers. Which ICT initiative under the Government of India provides free digital video lectures and MOOC courses to bridge this gap?",
    "options": [
      "A):   Private television soap operas",
      "B):   Commercial gaming apps",
      "C):   Social media chatrooms",
      "D):   SWAYAM and PM e-VIDYA"
    ],
    "correctAnswer": "d",
    "explanation": "SWAYAM and PM e-VIDYA are government initiatives providing high-quality digital educational broadcasting and online courses nationwide."
  },
  {
    "id": "c12-edu-5-mcq-23",
    "question": "Why does the Flipped Classroom model promote active learning over traditional classroom lecturing?",
    "options": [
      "A):   Because classroom time is transformed from passive listening into dynamic discussions, peer collaboration, and problem-solving",
      "B):   Because students sleep during class hours",
      "C):   Because teachers no longer need to prepare lesson plans",
      "D):   Because examinations are permanently abolished"
    ],
    "correctAnswer": "a",
    "explanation": "Flipping liberates class time from monologues, dedicating it to active intellectual engagement, experiments, and collaborative debate."
  },
  {
    "id": "c12-edu-5-mcq-24",
    "question": "In an educational technology systems approach, what are the three interdependent operational components?",
    "options": [
      "A):   Chalk, Duster, Blackboard",
      "B):   Teacher, Desk, Chair",
      "C):   Input, Process, Output",
      "D):   Electricity, Wire, Plug"
    ],
    "correctAnswer": "c",
    "explanation": "The Systems Approach (ET-3) conceptualizes educational institutions through Input (students/resources), Process (instruction), and Output (achieved learning)."
  },
  {
    "id": "c12-edu-5-mcq-25",
    "question": "How does the role of the teacher change when modern learning models (Blended, Flipped, Online) are implemented effectively?",
    "options": [
      "A):   The teacher is completely replaced by artificial intelligence robots",
      "B):   The teacher transitions from a 'Sage on the Stage' (authoritarian lecturer) to a 'Guide on the Side' (facilitator, mentor, and learning architect)",
      "C):   The teacher is restricted to clerical administrative duties only",
      "D):   The teacher's authority over grades increases drastically"
    ],
    "correctAnswer": "b",
    "explanation": "Modern learning models transform the teacher into an empathetic facilitator, coach, and curator of learning experiences."
  }
];
