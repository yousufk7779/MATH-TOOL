// Class 12 Education Unit 8: Education and the Contemporary World (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #29B6F6 (Sky Royal Blue matching Chapter 8)

const themeColor = "#29B6F6";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Edu8HtmlOverview = `
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
  <div style="background: rgba(41, 182, 246, 0.08); border: 1.5px solid \${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: \${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">🌍 Quick Glossary &amp; Contemporary Educational Concepts</h2>
    <p class="text-center" style="color: #81D4FA; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Class 12 Unit 8: Education and the Contemporary World (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. UNESCO Four Pillars of Education (Jacques Delors, 1996):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The foundational UNESCO blueprint titled <i>"Learning: The Treasure Within"</i> establishing the four pillars of lifelong learning: (1) Learning to Know, (2) Learning to Do, (3) Learning to Live Together, and (4) Learning to Be.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. 21st Century Skills (NEP 2020 Framework):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A tripartite matrix of future-ready student competencies comprising: <b>Learning Skills (The 4 Cs: Critical Thinking, Creativity, Collaboration, Communication)</b>, <b>Literacy Skills (IMT: Information, Media, Technology)</b>, and <b>Life Skills (FLIPS: Flexibility, Leadership, Initiative, Productivity, Social-Emotional)</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Vocational Education (VET / TVET):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Practical craft, industrial, technical, and artisanal training that prepares youth for employment and self-reliance. NEP 2020 eliminates the hard separation between academic and vocational streams, targeting 50% student exposure by 2025.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Sustainable Development (Brundtland Report, 1987):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Development that meets the socio-economic needs of the present generation without compromising the ability of future generations to meet their own needs, balancing Economic, Social, and Environmental imperatives.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Sustainable Development Goal 4 (SDG 4 - Quality Education):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The global target under the UN 2030 Agenda to: <i>"Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."</i></span>
      </div>
    </div>
  </div>

  <!-- SECTION 8.1 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 30px;">8.1 Pillars of education (UNESCO): Learning to know, Learning to do, Learning to live together, Learning to be</h2>

  <p>At the close of the twentieth century, facing rapid globalization, technological disruption, and rising ethnic conflicts, the United Nations Educational, Scientific and Cultural Organization (UNESCO) established the International Commission on Education for the Twenty-first Century, presided over by former European Commission President <b style="color: \${themeColor};">Jacques Delors</b>. In 1996, the commission published its historic report titled <b>"Learning: The Treasure Within"</b>, proposing a holistic vision of education resting upon four fundamental pillars:</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #38EF7D; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #38EF7D; font-size: 16px;">📚 1. Learning to Know (Apprendre &agrave; conna&icirc;tre):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <b style="color: #38EF7D;">Essence:</b> This pillar implies acquiring not merely a catalogue of memorized facts, but mastering the instruments of knowledge and understanding. It means <b>"Learning how to learn"</b> throughout life.
        <br /><b style="color: #38EF7D;">Key Competencies:</b> Developing intense powers of concentration, critical evaluation, intellectual curiosity, and scientific skepticism. It combines a broad general education with the opportunity to work in-depth on selected specialized disciplines.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #00C6FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00C6FF; font-size: 16px;">🛠️ 2. Learning to Do (Apprendre &agrave; faire):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <b style="color: #00C6FF;">Essence:</b> Transcends traditional manual vocational training to acquire <b>personal competence</b> that enables individuals to deal with unforeseen situations, work productively in teams, and adapt to rapidly evolving labor markets.
        <br /><b style="color: #00C6FF;">Key Competencies:</b> Practical problem-solving, digital dexterity, entrepreneurial initiative, leadership, conflict management, and converting theoretical knowledge into tangible community productivity.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FDC830; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FDC830; font-size: 16px;">🤝 3. Learning to Live Together (Apprendre &agrave; vivre ensemble):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <b style="color: #FDC830;">Essence:</b> The supreme, most critical pillar for modern human survival. Education must eradicate prejudice, violence, tribalism, and xenophobia by cultivating deep empathy, respect for pluralism, and awareness of global human interdependence.
        <br /><b style="color: #FDC830;">Key Competencies:</b> Engaging in joint cooperative community projects, appreciating cultural and religious diversity, mastering peaceful conflict resolution, and developing an authentic sense of global citizenship.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF007F; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF007F; font-size: 16px;">🧘 4. Learning to Be (Apprendre &agrave; &ecirc;tre):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <b style="color: #FF007F;">Essence:</b> Rooted in Edgar Faure's 1972 UNESCO report. It demands the complete, holistic development of the whole human being &mdash; mind, body, heart, aesthetic imagination, moral integrity, and spiritual depth.
        <br /><b style="color: #FF007F;">Key Competencies:</b> Developing independent, critical judgment, personal responsibility, ethical integrity, self-actualization, and emotional poise to act with autonomy in complex moral crises.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: UNESCO FOUR PILLARS OF EDUCATION (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(41, 182, 246, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title / Roof: Complete Human Flourishing -->
        <polygon points="30,55 410,55 220,20" fill="#E0F2FE" stroke="#0284C7" stroke-width="2" />
        <text x="220" y="44" font-size="11.5" font-weight="bold" fill="#0369A1" text-anchor="middle">COMPLETE HOLISTIC HUMAN DEVELOPMENT</text>

        <!-- Pillar 1: Learning to Know -->
        <rect x="35" y="62" width="85" height="120" rx="4" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.6" />
        <text x="77" y="85" font-size="9.5" font-weight="bold" fill="#15803D" text-anchor="middle">1. KNOW</text>
        <text x="77" y="105" font-size="8" fill="#166534" text-anchor="middle">&bull; Intellect</text>
        <text x="77" y="122" font-size="8" fill="#166534" text-anchor="middle">&bull; Learn to Learn</text>
        <text x="77" y="139" font-size="8" fill="#166534" text-anchor="middle">&bull; Curiosity</text>
        <text x="77" y="156" font-size="8" fill="#166534" text-anchor="middle">&bull; Concentration</text>

        <!-- Pillar 2: Learning to Do -->
        <rect x="130" y="62" width="85" height="120" rx="4" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.6" />
        <text x="172" y="85" font-size="9.5" font-weight="bold" fill="#0369A1" text-anchor="middle">2. DO</text>
        <text x="172" y="105" font-size="8" fill="#0284C7" text-anchor="middle">&bull; Vocational</text>
        <text x="172" y="122" font-size="8" fill="#0284C7" text-anchor="middle">&bull; Competence</text>
        <text x="172" y="139" font-size="8" fill="#0284C7" text-anchor="middle">&bull; Teamwork</text>
        <text x="172" y="156" font-size="8" fill="#0284C7" text-anchor="middle">&bull; Problem Solve</text>

        <!-- Pillar 3: Learning to Live Together -->
        <rect x="225" y="62" width="85" height="120" rx="4" fill="#FEF3C7" stroke="#D97706" stroke-width="1.6" />
        <text x="267" y="85" font-size="9.5" font-weight="bold" fill="#B45309" text-anchor="middle">3. TOGETHER</text>
        <text x="267" y="105" font-size="8" fill="#92400E" text-anchor="middle">&bull; Empathy</text>
        <text x="267" y="122" font-size="8" fill="#92400E" text-anchor="middle">&bull; Tolerance</text>
        <text x="267" y="139" font-size="8" fill="#92400E" text-anchor="middle">&bull; Peace</text>
        <text x="267" y="156" font-size="8" fill="#92400E" text-anchor="middle">&bull; Global Citizen</text>

        <!-- Pillar 4: Learning to Be -->
        <rect x="320" y="62" width="85" height="120" rx="4" fill="#FCE7F3" stroke="#DB2777" stroke-width="1.6" />
        <text x="362" y="85" font-size="9.5" font-weight="bold" fill="#BE185D" text-anchor="middle">4. BE</text>
        <text x="362" y="105" font-size="8" fill="#9D174D" text-anchor="middle">&bull; Self-hood</text>
        <text x="362" y="122" font-size="8" fill="#9D174D" text-anchor="middle">&bull; Ethics</text>
        <text x="362" y="139" font-size="8" fill="#9D174D" text-anchor="middle">&bull; Autonomy</text>
        <text x="362" y="156" font-size="8" fill="#9D174D" text-anchor="middle">&bull; Imagination</text>

        <!-- Foundation Base -->
        <rect x="20" y="185" width="400" height="30" rx="4" fill="#334155" />
        <text x="220" y="205" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">THE DELORS COMMISSION (UNESCO 1996): LEARNING THE TREASURE WITHIN</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Four UNESCO Pillars of Education: The edifice of lifelong learning rests upon intellectual curiosity (Know), occupational competence (Do), social solidarity (Live Together), and personal spiritual integrity (Be).
    </div>
  </div>

  <!-- SECTION 8.2 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">8.2 21st century skills in students as per NEP 2020</h2>

  <p>The <b>National Education Policy (NEP 2020)</b> emphatically states that the aim of education is not merely cognitive memorization of textbooks, but building character and equipping students with key <b>21st-Century Skills</b>. In an era where artificial intelligence and automation are displacing repetitive manual labor, students require flexible higher-order competencies categorized into three core domains:</p>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 18px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #38EF7D; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #38EF7D; font-size: 16px;">🧠 1. Learning and Innovation Skills (The Famous "4 Cs"):</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: #38EF7D;">Critical Thinking:</b> The ability to analyze claims objectively, evaluate conflicting evidence, distinguish facts from propaganda, and solve complex real-world challenges.</li>
        <li><b style="color: #38EF7D;">Creativity &amp; Innovation:</b> The capacity to think out-of-the-box, formulate original artistic or scientific ideas, embrace failure as a learning step, and refine concepts.</li>
        <li><b style="color: #38EF7D;">Collaboration:</b> The willingness to work harmoniously in diverse, multi-talented teams, compromising flexibly to achieve a collective community goal.</li>
        <li><b style="color: #38EF7D;">Communication:</b> Expressing complex thoughts clearly, articulately, and persuasively across oral, written, and digital multimedia mediums.</li>
      </ul>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #00C6FF; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #00C6FF; font-size: 16px;">💻 2. Literacy Skills (IMT Framework):</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: #00C6FF;">Information Literacy:</b> Navigating the ocean of big data to locate reliable facts, evaluating source credibility, and filtering noise.</li>
        <li><b style="color: #00C6FF;">Media Literacy:</b> Discerning media bias, identifying algorithmically manipulated "deepfakes", and understanding how digital media shapes public opinion.</li>
        <li><b style="color: #00C6FF;">Technology (ICT) Literacy:</b> Understanding computing concepts, coding, cyber security ethics, and working comfortably with artificial intelligence tools.</li>
      </ul>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FF8A65; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FF8A65; font-size: 16px;">🚀 3. Life and Career Skills (FLIPS Framework):</b>
      <ul style="padding-left: 20px; line-height: 1.8; margin: 6px 0 0 0; color: #FFFFFF;">
        <li><b style="color: #FF8A65;">Flexibility &amp; Adaptability:</b> Navigating fluid circumstances and pivoting strategies when plans fail.</li>
        <li><b style="color: #FF8A65;">Leadership &amp; Responsibility:</b> Inspiring peers with integrity and taking ethical ownership of team outcomes.</li>
        <li><b style="color: #FF8A65;">Initiative &amp; Self-Direction:</b> Operating autonomously without constant supervision or hand-holding.</li>
        <li><b style="color: #FF8A65;">Social &amp; Cross-Cultural Competence:</b> Empathizing with people of divergent backgrounds, genders, and socioeconomic statuses.</li>
      </ul>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 2: 21ST CENTURY SKILLS TRIAD (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(41, 182, 246, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="220" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">NEP 2020: THE 21ST CENTURY STUDENT SKILLS MATRIX</text>

        <!-- Box 1: Learning Skills (The 4 Cs) -->
        <rect x="15" y="45" width="125" height="150" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.6" />
        <text x="77" y="65" font-size="10" font-weight="bold" fill="#15803D" text-anchor="middle">LEARNING (4 Cs)</text>
        <text x="77" y="90" font-size="8.5" fill="#166534" text-anchor="middle">&bull; Critical Thinking</text>
        <text x="77" y="110" font-size="8.5" fill="#166534" text-anchor="middle">&bull; Creativity</text>
        <text x="77" y="130" font-size="8.5" fill="#166534" text-anchor="middle">&bull; Collaboration</text>
        <text x="77" y="150" font-size="8.5" fill="#166534" text-anchor="middle">&bull; Communication</text>
        <rect x="25" y="168" width="105" height="20" rx="4" fill="#DCFCE7" />
        <text x="77" y="182" font-size="8" font-weight="bold" fill="#14532D" text-anchor="middle">Cognitive Agility</text>

        <!-- Box 2: Literacy Skills (IMT) -->
        <rect x="155" y="45" width="130" height="150" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.6" />
        <text x="220" y="65" font-size="10" font-weight="bold" fill="#1D4ED8" text-anchor="middle">LITERACY (IMT)</text>
        <text x="220" y="90" font-size="8.5" fill="#1E40AF" text-anchor="middle">&bull; Information</text>
        <text x="220" y="110" font-size="8.5" fill="#1E40AF" text-anchor="middle">&bull; Media Discernment</text>
        <text x="220" y="130" font-size="8.5" fill="#1E40AF" text-anchor="middle">&bull; Tech &amp; Coding</text>
        <text x="220" y="150" font-size="8.5" fill="#1E40AF" text-anchor="middle">&bull; Cyber Ethics</text>
        <rect x="165" y="168" width="110" height="20" rx="4" fill="#DBEAFE" />
        <text x="220" y="182" font-size="8" font-weight="bold" fill="#1E3A8A" text-anchor="middle">Digital Mastery</text>

        <!-- Box 3: Life Skills (FLIPS) -->
        <rect x="300" y="45" width="125" height="150" rx="6" fill="#FFF7ED" stroke="#EA580C" stroke-width="1.6" />
        <text x="362" y="65" font-size="10" font-weight="bold" fill="#C2410C" text-anchor="middle">LIFE SKILLS (FLIPS)</text>
        <text x="362" y="90" font-size="8.5" fill="#9A3412" text-anchor="middle">&bull; Flexibility</text>
        <text x="362" y="110" font-size="8.5" fill="#9A3412" text-anchor="middle">&bull; Leadership</text>
        <text x="362" y="130" font-size="8.5" fill="#9A3412" text-anchor="middle">&bull; Initiative</text>
        <text x="362" y="150" font-size="8.5" fill="#9A3412" text-anchor="middle">&bull; Social-Emotional</text>
        <rect x="310" y="168" width="105" height="20" rx="4" fill="#FFEDD5" />
        <text x="362" y="182" font-size="8" font-weight="bold" fill="#7C2D12" text-anchor="middle">Adaptive Character</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The 21st-Century Competency Triad: Modern youth require cognitive innovation (The 4 Cs), digital data evaluation (IMT), and adaptive resilience (FLIPS) to thrive in the automated future.
    </div>
  </div>

  <!-- SECTION 8.3 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">8.3 Vocational Education: meaning and significance with reference to NEP 2020</h2>

  <p>In traditional Indian education, a deep-seated, colonial prejudice separated "intellectual book learning" from "manual vocational work". Vocational education was heavily stigmatized as an inferior stream intended exclusively for academic dropouts. The <b style="color: \${themeColor};">National Education Policy (NEP 2020)</b> introduces a revolutionary dismantling of these obsolete hierarchies:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. The 50% National Target by 2025:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        NEP 2020 mandates that by <b>2025, at least 50% of learners</b> through the school and higher education system shall have structured exposure to vocational education. This directly counters youth unemployment and closes India's acute industrial skills gap.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Early Exposure: The '10-Day Bagless Period' (Grades 6–8):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Every child in middle school participates in a joyful 10-day bagless internship, working alongside local artisanal masters: carpenters, potters, horticulturists, electricians, and weavers. This restores <b>Dignity of Labor</b> (<i>Lokvidya</i>) from childhood.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">3. Eradication of Hard Separations (Multidisciplinary Mobility):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Rigid walls between Arts, Science, and Vocational tracks are permanently demolished. A student can choose Physics alongside Carpentry, or History alongside Graphic Design.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(41, 182, 246, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">4. Credit Mobility via NSQF &amp; Academic Bank of Credits (ABC):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Vocational courses are aligned with the <i>National Skills Qualifications Framework (NSQF)</i>. Credits earned in vocational training are stored digitally in the <i>Academic Bank of Credits (ABC)</i>, allowing seamless lateral mobility between vocational diplomas and formal university degree programs.
      </p>
    </div>
  </div>

  <!-- SECTION 8.4 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">8.4 Understanding Sustainable Development and Sustainable Development Goals (SDGs)</h2>

  <h3 style="color: \${themeColor}; margin-top: 20px;">(i) The Concept of Sustainable Development</h3>
  <p>First articulated authoritatively in 1987 by the United Nations World Commission on Environment and Development (chaired by Gro Harlem Brundtland) in the report <b>"Our Common Future"</b>:</p>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Brundtland Definition:</b> <i>"Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."</i>
    </p>
  </div>
  <p>Sustainable development rests upon three indivisible pillars: <b>Economic Viability</b> (eradicating poverty), <b>Social Equity</b> (gender equality, justice, health), and <b>Environmental Protection</b> (preventing climate catastrophe, preserving biodiversity).</p>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(ii) The United Nations 2030 Agenda &amp; The 17 SDGs</h3>
  <p>In September 2015, all 193 member states of the United Nations unanimously adopted the <b>2030 Agenda for Sustainable Development</b>, comprising <b>17 Sustainable Development Goals (SDGs)</b> with 169 specific targets to be achieved by 2030:</p>

  <div style="display: flex; flex-direction: column; gap: 10px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #FDC830; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FDC830; font-size: 16px;">🎯 SDG 4: Quality Education (The Central Engine):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <b>"Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."</b>
        <br /><b style="color: #FDC830;">Target 4.7 (Education for Sustainable Development - ESD):</b> Mandates that by 2030, all learners acquire knowledge and skills needed to promote sustainable development, human rights, gender equality, peace, non-violence, global citizenship, and appreciation of cultural diversity.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 3: THE FIVE PS OF SUSTAINABLE DEVELOPMENT (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(41, 182, 246, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="220" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">THE UNITED NATIONS 2030 AGENDA: THE 5 Ps OF SUSTAINABILITY</text>

        <!-- Center Circle: SDG 4 Quality Education (The Catalyst) -->
        <circle cx="220" cy="115" r="42" fill="#E0F2FE" stroke="#0284C7" stroke-width="2.2" />
        <text x="220" y="108" font-size="10" font-weight="bold" fill="#0369A1" text-anchor="middle">SDG 4</text>
        <text x="220" y="122" font-size="8.5" font-weight="bold" fill="#0284C7" text-anchor="middle">QUALITY</text>
        <text x="220" y="133" font-size="7.5" fill="#0369A1" text-anchor="middle">EDUCATION</text>

        <!-- Node 1: PEOPLE (Top Left) -->
        <rect x="25" y="45" width="105" height="38" rx="6" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.4" />
        <text x="77" y="60" font-size="9" font-weight="bold" fill="#B91C1C" text-anchor="middle">1. PEOPLE</text>
        <text x="77" y="73" font-size="7.5" fill="#991B1B" text-anchor="middle">End Poverty &amp; Hunger</text>
        <line x1="125" y1="75" x2="180" y2="100" stroke="#EF4444" stroke-width="1.5" />

        <!-- Node 2: PLANET (Top Right) -->
        <rect x="310" y="45" width="105" height="38" rx="6" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.4" />
        <text x="362" y="60" font-size="9" font-weight="bold" fill="#15803D" text-anchor="middle">2. PLANET</text>
        <text x="362" y="73" font-size="7.5" fill="#166534" text-anchor="middle">Climate &amp; Ecosystems</text>
        <line x1="315" y1="75" x2="260" y2="100" stroke="#16A34A" stroke-width="1.5" />

        <!-- Node 3: PROSPERITY (Bottom Left) -->
        <rect x="25" y="150" width="105" height="38" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="1.4" />
        <text x="77" y="165" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">3. PROSPERITY</text>
        <text x="77" y="178" font-size="7.5" fill="#92400E" text-anchor="middle">Decent Work &amp; Wealth</text>
        <line x1="125" y1="155" x2="180" y2="130" stroke="#D97706" stroke-width="1.5" />

        <!-- Node 4: PEACE & PARTNERSHIP (Bottom Right) -->
        <rect x="310" y="150" width="105" height="38" rx="6" fill="#FAF5FF" stroke="#8E2DE2" stroke-width="1.4" />
        <text x="362" y="165" font-size="8.5" font-weight="bold" fill="#6B21A8" text-anchor="middle">4. PEACE &amp; PARTNERSHIP</text>
        <text x="362" y="178" font-size="7.5" fill="#7E22CE" text-anchor="middle">Justice &amp; Global Goals</text>
        <line x1="315" y1="155" x2="260" y2="130" stroke="#8E2DE2" stroke-width="1.5" />
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The 2030 Global Framework: Education (SDG 4) functions as the central catalyst uniting the 5 Ps of Sustainable Development: People, Planet, Prosperity, Peace, and Partnership.
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: Q & A (SOLUTIONS)                          */
/* -------------------------------------------------------------------------- */

export const c12Edu8HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(41, 182, 246, 0.08); border-left: 4px solid \${themeColor}; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
    <h3 style="color: \${themeColor}; margin: 0 0 6px 0; font-size: 18px; font-weight: bold;">🎯 Golden 25 Board Examination Q &amp; A Blueprint</h3>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">
      Class 12 Unit 8: Education and the Contemporary World (Passage-Based &bull; 10 Marks) &bull; Strictly 12 VSAT (1 &amp; 2 Marks), 8 SAT (4 Marks), and 5 LAT (6 Marks).
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
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q1: Who chaired the 1996 UNESCO Commission that formulated the Four Pillars of Education? What was the report's title?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The commission was chaired by <b style="color: \${themeColor};">Jacques Delors</b> (former President of the European Commission), and the historic report was titled <b style="color: \${themeColor};">"Learning: The Treasure Within"</b>.
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q2: Name the Four Pillars of Education recognized by UNESCO.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: \${themeColor};">Learning to Know</b>; (2) <b style="color: \${themeColor};">Learning to Do</b>; (3) <b style="color: \${themeColor};">Learning to Live Together</b>; (4) <b style="color: \${themeColor};">Learning to Be</b>.
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q3: What is the primary objective of 'Learning to Live Together'?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      To develop empathy, understanding of others, appreciation of cultural diversity, peaceful conflict resolution, and working on joint cooperative projects to foster global human fraternity.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q4: What does 'Learning to Be' signify in human development?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The complete, harmonious development of the total human personality &mdash; mind, body, spirit, aesthetic sensibility, moral responsibility, and autonomous personal judgment (first articulated in the 1972 Faure Report).
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q5: Name the '4 Cs' of 21st century learning skills under NEP 2020.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: \${themeColor};">Critical Thinking</b>; (2) <b style="color: \${themeColor};">Creativity</b>; (3) <b style="color: \${themeColor};">Collaboration</b>; (4) <b style="color: \${themeColor};">Communication</b>.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q6: Define Vocational Education.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Vocational Education</b> is practical skill-based training that prepares individuals with technical, commercial, agricultural, or artisanal skills for gainful employment or entrepreneurial self-reliance.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q7: What national target does NEP 2020 set for vocational education by 2025?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      NEP 2020 mandates that by <b style="color: \${themeColor};">2025, at least 50% of learners</b> in the school and higher education system shall have structured exposure to vocational education.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q8: What is the '10-day bagless period' introduced in NEP 2020 for Grades 6–8?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      A dedicated 10-day experiential learning period where middle school students visit and intern with local craftspersons (carpenters, potters, electric workers) to appreciate the <b style="color: \${themeColor};">Dignity of Labor (Lokvidya)</b>.
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q9: Define Sustainable Development according to the Brundtland Commission (1987).</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <i>"Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."</i>
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q10: How many Sustainable Development Goals (SDGs) were adopted by the United Nations under the 2030 Agenda?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The United Nations adopted <b style="color: \${themeColor};">17 Sustainable Development Goals (SDGs)</b> containing 169 specific targets in September 2015.
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q11: What is the specific title and objective of SDG 4?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">SDG 4: Quality Education</b> &mdash; <i>"Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all."</i>
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q12: How does NEP 2020 eliminate the traditional hard separation between academic and vocational streams?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      By permitting students to freely choose vocational subjects alongside sciences, arts, or commerce without rigid track restrictions, supported by credit transfer via the <b style="color: \${themeColor};">Academic Bank of Credits (ABC)</b>.
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
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q13: Explain 'Learning to Know' and 'Learning to Do' with their modern educational significance.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      These two pillars establish the intellectual and practical foundations of human learning:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Learning to Know:</b> Focuses on mastering the instruments of learning &mdash; concentration, memory, and critical thinking &mdash; enabling individuals to learn how to learn continuously throughout their lives.</li>
        <li><b style="color: \${themeColor};">2. Intellectual Independence:</b> It safeguards learners from becoming obsolete in an economy where information doubles every few months.</li>
        <li><b style="color: \${themeColor};">3. Learning to Do:</b> Transcends narrow mechanical training into personal competence, problem-solving, digital skill, and teamwork.</li>
        <li><b style="color: \${themeColor};">4. Practical Application:</b> Bridges the gap between book theory and real-world employment, preparing youth to handle unpredictable challenges.</li>
      </ul>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q14: Discuss 'Learning to Live Together' as the essential antidote to global conflicts and prejudice.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Jacques Delors highlighted this pillar as the cornerstone of 21st-century human survival:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Eradicating Otherness:</b> Prejudices thrive in ignorance; by teaching human commonality and shared biological origins, schools dismantle tribalism.</li>
        <li><b style="color: \${themeColor};">2. Collaborative Common Projects:</b> Working together on school social service, environmental cleanup, and drama fosters mutual trust that transcends religious or caste lines.</li>
        <li><b style="color: \${themeColor};">3. Peaceful Conflict Resolution:</b> Teaching non-violent negotiation, active listening, and democratic debate rather than aggressive hostility.</li>
        <li><b style="color: \${themeColor};">4. Global Citizenship:</b> Nurturing an awareness that climate change, pandemics, and war threaten all humans equally, requiring global cooperation.</li>
      </ul>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q15: Analyze the 4 Cs (Critical Thinking, Creativity, Collaboration, Communication) as foundational student skills in NEP 2020.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      The 4 Cs constitute the core cognitive engine of the modern learner:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Critical Thinking:</b> Training students to question dogmas, analyze data, and reject misinformation rather than memorizing textbooks.</li>
        <li><b style="color: \${themeColor};">2. Creativity:</b> Fostering divergent thinking, inventive problem-solving, and artistic imagination to thrive alongside artificial intelligence.</li>
        <li><b style="color: \${themeColor};">3. Collaboration:</b> Developing team synergy, emotional intelligence, and respect for divergent viewpoints in multidisciplinary teams.</li>
        <li><b style="color: \${themeColor};">4. Communication:</b> Cultivating articulate oral, written, and digital presentation skills to express ideas persuasively.</li>
      </ul>
    </div>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q16: Describe the Information, Media, and Technology (IMT) literacy skills required by 21st-century learners.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      In an era of digital saturation, IMT literacies protect cognitive autonomy:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Information Literacy:</b> The ability to locate, filter, evaluate, and ethically utilize digital information while discarding biased noise.</li>
        <li><b style="color: \${themeColor};">2. Media Literacy:</b> Understanding how media messages are constructed, identifying hidden commercial or political motives, and detecting deepfakes.</li>
        <li><b style="color: \${themeColor};">3. Technology (ICT) Literacy:</b> Comfort with coding, data handling, algorithmic tools, and practicing responsible cyber security ethics.</li>
        <li><b style="color: \${themeColor};">4. Educational Impact:</b> Transforms pupils from gullible digital consumers into empowered creators and ethical digital citizens.</li>
      </ul>
    </div>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q17: Discuss why vocational education suffered historical social stigma in India and how NEP 2020 resolves it.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      NEP 2020 radically re-engineers the status of vocational training:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. The Historical Stigma:</b> Colonial education prioritized desk-bound clerical degrees; vocational courses were viewed as dead-end dumping grounds for weak students.</li>
        <li><b style="color: \${themeColor};">2. Early Middle School Integration:</b> Introducing 10 bagless days in Grades 6–8 normalizes carpentry, pottery, and gardening as honored crafts (Lokvidya).</li>
        <li><b style="color: \${themeColor};">3. Abolition of Hard Silos:</b> Vocational tracks are merged into regular school curriculum; students can combine academic and vocational electives freely.</li>
        <li><b style="color: \${themeColor};">4. Parity of Esteem:</b> Aligning skills with NSQF and university degrees ensures equal academic dignity and employment value.</li>
      </ul>
    </div>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q18: Explain the educational significance of the National Skills Qualifications Framework (NSQF) and the Academic Bank of Credits (ABC).</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      These structural mechanisms create seamless mobility between schooling and industry:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. NSQF Alignment:</b> Standardizes skill levels from basic craft certificates to advanced master degrees, ensuring industry parity.</li>
        <li><b style="color: \${themeColor};">2. Academic Bank of Credits (ABC):</b> A secure digital credit repository where credits earned through vocational courses are deposited.</li>
        <li><b style="color: \${themeColor};">3. Flexible Entry and Exit:</b> A student who leaves after a 1-year vocational certificate can re-enter university years later without repeating courses.</li>
        <li><b style="color: \${themeColor};">4. Lifelong Learning:</b> Enables workers to upskill continuously while holding full-time jobs.</li>
      </ul>
    </div>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q19: Explain the Three Pillars of Sustainable Development (Economic, Social, Environmental).</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      True sustainability requires a harmonious balance across three dimensions:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Economic Pillar:</b> Fostering sustainable, green economic growth, decent employment, innovation, and eradicating extreme poverty.</li>
        <li><b style="color: \${themeColor};">2. Social Pillar:</b> Guaranteeing social justice, human rights, gender equality, universal healthcare, and inclusive quality education.</li>
        <li><b style="color: \${themeColor};">3. Environmental Pillar:</b> Protecting planetary ecosystems, combating climate change, preserving clean water, and transitioning to renewable green energy.</li>
        <li><b style="color: \${themeColor};">4. Interdependence:</b> Economic progress that destroys the environment or ignores social equity inevitably collapses.</li>
      </ul>
    </div>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q20: Highlight the key targets of SDG 4 (Quality Education) with special emphasis on Target 4.7.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      SDG 4 provides the global blueprint for inclusive, transformative education:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Universal Free Schooling:</b> Free, equitable, and quality primary and secondary education leading to relevant learning outcomes.</li>
        <li><b style="color: \${themeColor};">2. Equal Access to Tertiary &amp; Vocational:</b> Affordable, non-discriminatory technical and university education for youth.</li>
        <li><b style="color: \${themeColor};">3. Target 4.7 (Education for Sustainable Development):</b> Mandates that all learners acquire skills for sustainable lifestyles, human rights, gender equality, peace, global citizenship, and appreciation of cultural diversity.</li>
        <li><b style="color: \${themeColor};">4. Inclusive Infrastructure:</b> Building safe, non-violent, disability-sensitive, and gender-inclusive learning spaces.</li>
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
      Q21: Comprehensive Exposition of the UNESCO Four Pillars of Education (Jacques Delors Report) and their Relevance to Contemporary Reform.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. The Historic Delors Report (1996):</b><br />
      Presented by Jacques Delors, <i>"Learning: The Treasure Within"</i> asserted that education must be conceived as a continuous lifelong journey engaging the intellect, vocational hand, social heart, and autonomous spirit.</p>

      <p><b style="color: \${themeColor};">II. Detailed Exposition of the Four Pillars:</b><br />
      (1) <b style="color: \${themeColor};">Learning to Know:</b> Mastering the tools of understanding, critical inquiry, concentration, and learning how to learn continuously.<br />
      (2) <b style="color: \${themeColor};">Learning to Do:</b> Developing practical occupational competence, digital skills, adaptability, and teamwork to handle fluid work environments.<br />
      (3) <b style="color: \${themeColor};">Learning to Live Together:</b> Developing deep empathy, appreciation of cultural pluralism, peaceful conflict resolution, and working on collective human projects to banish war and hatred.<br />
      (4) <b style="color: \${themeColor};">Learning to Be:</b> The holistic flourishing of the individual personality &mdash; intellect, aesthetics, physical health, moral integrity, and autonomous decision-making.</p>

      <p><b style="color: \${themeColor};">III. Relevance to 21st Century Schooling:</b><br />
      In an era dominated by artificial intelligence and social polarization, rote knowledge is automated away. The four pillars provide the ultimate human-centric compass for educational renewal.</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q22: Critical Analysis of 21st Century Skills: Pedagogical Strategies for Cultivating Learning, Literacy, and Life Skills under NEP 2020.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. The 21st Century Imperative:</b><br />
      NEP 2020 shifts pedagogy away from memorization toward cultivating foundational competencies essential for navigating the knowledge society.</p>

      <p><b style="color: \${themeColor};">II. Threefold Skill Matrix &amp; Classroom Strategies:</b><br />
      (1) <b style="color: \${themeColor};">Learning Skills (The 4 Cs):</b> Cultivated through inquiry-based discovery, problem-solving mathematical puzzles, collaborative debate clubs, and multi-media presentations.<br />
      (2) <b style="color: \${themeColor};">Literacy Skills (IMT):</b> Fostered through digital research projects, evaluating online source credibility, detecting media bias, coding workshops, and cyber hygiene drills.<br />
      (3) <b style="color: \${themeColor};">Life Skills (FLIPS):</b> Nurtured through student councils, community service (NSS/NCC), sports leadership, and socio-emotional resilience training.</p>

      <p><b style="color: \${themeColor};">III. Systemic Curriculum Realignment:</b><br />
      NEP 2020 replaces monolithic examinations with competency-based assessments, measuring student ability to apply these skills in real-world scenarios.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q23: Exhaustive Analysis of Vocational Education under NEP 2020: Integration, Lokvidya, and National Economic Transformation.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Re-Imagining Vocational Education:</b><br />
      NEP 2020 dismantles the colonial dichotomy that glorified clerical degrees while denigrating manual craft, setting an ambitious target of 50% student vocational exposure by 2025.</p>

      <p><b style="color: \${themeColor};">II. Strategic Structural Innovations:</b><br />
      (1) <b style="color: \${themeColor};">Middle School Apprenticeships (Grades 6–8):</b> 10-day bagless periods where students intern with local artisans, instilling early respect for the Dignity of Labor.<br />
      (2) <b style="color: \${themeColor};">Eradication of Hard Silos:</b> High school students choose vocational subjects alongside science or humanities without academic penalty.<br />
      (3) <b style="color: \${themeColor};">NSQF &amp; Academic Bank of Credits:</b> Seamless digital credit transfer enabling students to move effortlessly between vocational certificates and university degrees.<br />
      (4) <b style="color: \${themeColor};">Integration of Traditional Indian Crafts (Lokvidya):</b> Incorporating indigenous artisanal wisdom into formal technical curricula.</p>

      <p><b style="color: \${themeColor};">III. National Economic Dividend:</b><br />
      Bridging the gap between educational credentials and employability transforms India into a self-reliant global skills hub.</p>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q24: Sustainable Development Goals (SDGs) and Education: The Pivotal Role of SDG 4 in Achieving the 2030 Global Agenda.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. The 2030 Agenda for Sustainable Development:</b><br />
      Adopted in 2015 by 193 UN member nations, the 17 SDGs represent a comprehensive universal plan of action balancing People, Planet, Prosperity, Peace, and Partnership.</p>

      <p><b style="color: \${themeColor};">II. SDG 4 as the Foundational Keystone:</b><br />
      Quality education is not an isolated objective; it is the essential catalyst without which none of the other 16 goals can be realized:<br />
      &bull; <i>Poverty &amp; Hunger (SDG 1 &amp; 2):</i> Education empowers youth with skills to escape generational poverty.<br />
      &bull; <i>Gender Equality (SDG 5):</i> Educating girls drastically reduces child marriage, maternal mortality, and economic disempowerment.<br />
      &bull; <i>Climate Action (SDG 13):</i> Education builds climate literacy, green innovation, and conservation consciousness.</p>

      <p><b style="color: \${themeColor};">III. Target 4.7 &amp; Global Citizenship:</b><br />
      Target 4.7 mandates Education for Sustainable Development (ESD), ensuring youth graduate as responsible global citizens dedicated to social justice, peace, and ecological preservation.</p>
    </div>
  </div>

  <!-- Q25 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q25: Board Examination Passage-Based Master Case Study: Integrating 21st-Century Competencies and Sustainable Development under NEP 2020.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <div style="background: rgba(0,0,0,0.3); border-left: 4px solid \${themeColor}; padding: 12px 16px; border-radius: 6px; margin-bottom: 12px;">
        <b style="color: \${themeColor}; font-size: 15px;">Read the Following Evaluative Passage Carefully:</b>
        <p style="margin: 6px 0 0 0; color: #E2E8F0; font-size: 14px; font-style: italic;">
          "The 21st-century landscape is marked by profound ecological distress, explosive advances in artificial intelligence, and fluid labor markets. In response, the National Education Policy (NEP 2020) envisions a holistic curriculum rooted in the UNESCO Four Pillars of Education. A pilot school in an eco-fragile mountain region implemented a revolutionary curriculum: students in Grade 9 spend 15% of instructional time in solar energy installation and local organic horticulture (vocational exposure), analyze environmental pollution data using digital spreadsheets (information &amp; tech literacy), collaborate in teams to design community water purification systems (critical thinking &amp; collaboration), and present their findings to village councils (communication &amp; citizenship). Credits earned are deposited into their Academic Bank of Credits (ABC), guaranteeing parity with traditional physics and biology courses."
        </p>
      </div>

      <p><b style="color: \${themeColor};">Answer the Following Structured Analytical Questions:</b></p>

      <p><b style="color: \${themeColor};">(a) Identify the 21st-century skills demonstrated by the students in the passage:</b><br />
      (1) <i>Critical Thinking:</i> Designing community water purification solutions based on raw environmental data.<br />
      (2) <i>Collaboration &amp; Communication:</i> Working in cooperative student teams and presenting project proposals persuasively to local village councils.<br />
      (3) <i>Information &amp; Technology Literacy:</i> Utilizing digital spreadsheets to analyze ecological pollution metrics.</p>

      <p><b style="color: \${themeColor};">(b) How does this program exemplify the integration of Vocational Education and NEP 2020 principles?</b><br />
      It eliminates the artificial divide between academic sciences and vocational craft by granting full academic credit for solar energy and organic farming via the <i>Academic Bank of Credits (ABC)</i>, upholding the Dignity of Labor.</p>

      <p><b style="color: \${themeColor};">(c) Relate this case study to the UNESCO Pillars and SDG 4:</b><br />
      It directly fulfills <i>Learning to Do</i> (practical green technology skills), <i>Learning to Live Together</i> (serving the village community), and directly accomplishes <b>SDG Target 4.7 (Education for Sustainable Development)</b> by linking environmental conservation with quality schooling.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS (INTERACTIVE)                         */
/* -------------------------------------------------------------------------- */

export const c12Edu8Mcqs = [
  // TIER 1: EASY RECALL & DEFINITIONS (Q1 to Q10)
  {
    id: "c12-edu-8-mcq-1",
    question: "What was the title of the historic 1996 UNESCO report on the Four Pillars of Education chaired by Jacques Delors?",
    options: [
      "A):   Learning to Be",
      "B):   Learning: The Treasure Within",
      "C):   Education for All",
      "D):   The Global Classroom",
    ],
    correctAnswer: "b",
    explanation: "The Delors Commission UNESCO report was titled 'Learning: The Treasure Within' (1996).",
  },
  {
    id: "c12-edu-8-mcq-2",
    question: "Which UNESCO pillar of education emphasizes learning how to learn, concentration, and critical intellectual inquiry?",
    options: [
      "A):   Learning to Do",
      "B):   Learning to Know",
      "C):   Learning to Live Together",
      "D):   Learning to Be",
    ],
    correctAnswer: "b",
    explanation: "Learning to Know involves mastering the instruments of knowledge, developing concentration, and learning how to learn throughout life.",
  },
  {
    id: "c12-edu-8-mcq-3",
    question: "Which UNESCO pillar of education focuses on cultivating empathy, eliminating prejudice, and peaceful conflict resolution?",
    options: [
      "A):   Learning to Know",
      "B):   Learning to Do",
      "C):   Learning to Live Together",
      "D):   Learning to Be",
    ],
    correctAnswer: "c",
    explanation: "Learning to Live Together is designed to foster social solidarity, mutual understanding, and global peace.",
  },
  {
    id: "c12-edu-8-mcq-4",
    question: "Which of the following represents the '4 Cs' of 21st-century learning skills under NEP 2020?",
    options: [
      "A):   Chalk, Chart, Computer, Calculator",
      "B):   Critical Thinking, Creativity, Collaboration, Communication",
      "C):   Control, Command, Calculation, Correction",
      "D):   Caste, Culture, Community, Class",
    ],
    correctAnswer: "b",
    explanation: "The 4 Cs are Critical Thinking, Creativity, Collaboration, and Communication.",
  },
  {
    id: "c12-edu-8-mcq-5",
    question: "By which year does NEP 2020 aim for at least 50% of learners to have exposure to vocational education?",
    options: [
      "A):   2022",
      "B):   2025",
      "C):   2030",
      "D):   2035",
    ],
    correctAnswer: "b",
    explanation: "NEP 2020 specifically targets that at least 50% of learners shall receive vocational exposure by 2025.",
  },
  {
    id: "c12-edu-8-mcq-6",
    question: "The '10-day bagless period' introduced in NEP 2020 for middle school students (Grades 6–8) is aimed at:",
    options: [
      "A):   Playing commercial video games",
      "B):   Vocational sampling and interning with local craftspersons to appreciate the Dignity of Labor (Lokvidya)",
      "C):   Extending summer holidays",
      "D):   Complete cancellation of all studies",
    ],
    correctAnswer: "b",
    explanation: "The 10-day bagless period provides hands-on vocational exposure to local artisans (pottery, carpentry, gardening), fostering respect for manual work.",
  },
  {
    id: "c12-edu-8-mcq-7",
    question: "The definition of Sustainable Development was first officially formulated in 1987 in which landmark report?",
    options: [
      "A):   The Delors Report",
      "B):   The Brundtland Commission Report ('Our Common Future')",
      "C):   The Kothari Commission Report",
      "D):   The Hunter Commission Report",
    ],
    correctAnswer: "b",
    explanation: "The Brundtland Commission report 'Our Common Future' (1987) gave the classic definition of sustainable development.",
  },
  {
    id: "c12-edu-8-mcq-8",
    question: "How many Sustainable Development Goals (SDGs) are formulated in the United Nations 2030 Agenda?",
    options: [
      "A):   10 Goals",
      "B):   15 Goals",
      "C):   17 Goals",
      "D):   21 Goals",
    ],
    correctAnswer: "c",
    explanation: "The UN 2030 Agenda features exactly 17 Sustainable Development Goals with 169 targets.",
  },
  {
    id: "c12-edu-8-mcq-9",
    question: "Which specific Sustainable Development Goal is exclusively dedicated to 'Quality Education'?",
    options: [
      "A):   SDG 1",
      "B):   SDG 3",
      "C):   SDG 4",
      "D):   SDG 13",
    ],
    correctAnswer: "c",
    explanation: "SDG 4 is dedicated to ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all.",
  },
  {
    id: "c12-edu-8-mcq-10",
    question: "What is the primary function of the Academic Bank of Credits (ABC) established under NEP 2020?",
    options: [
      "A):   To lend cash money to students",
      "B):   To digitally store academic and vocational credits earned by students, facilitating flexible multi-entry and multi-exit pathways",
      "C):   To collect school tuition fees online",
      "D):   To issue government passports",
    ],
    correctAnswer: "b",
    explanation: "The ABC is a digital credit repository allowing students to accumulate, transfer, and redeem credits between academic and vocational streams.",
  },

  // TIER 2: MODERATE CONCEPT APPLICATIONS (Q11 to Q18)
  {
    id: "c12-edu-8-mcq-11",
    question: "A high school student uses critical thinking to evaluate whether an internet news story about climate change is authentic or a fabricated deepfake. Which literacy skill is demonstrated?",
    options: [
      "A):   Physical motor dexterity",
      "B):   Media and Information Literacy",
      "C):   Traditional rote memorization",
      "D):   Operant conditioning",
    ],
    correctAnswer: "b",
    explanation: "Evaluating online source credibility and detecting manipulated media falls under Media and Information Literacy.",
  },
  {
    id: "c12-edu-8-mcq-12",
    question: "Why did vocational education fail to achieve mass popularity in India under previous educational policies?",
    options: [
      "A):   Because India had no industries",
      "B):   Because it was treated as an inferior dead-end stream separated from mainstream academic degrees (social stigma)",
      "C):   Because students hated practical work",
      "D):   Because textbooks were too expensive",
    ],
    correctAnswer: "b",
    explanation: "Vocational education historically suffered from acute social stigma, seen as a dumping ground without lateral mobility to higher university degrees.",
  },
  {
    id: "c12-edu-8-mcq-13",
    question: "Under the Three Pillars of Sustainability, economic growth must be accompanied by which other two essential dimensions?",
    options: [
      "A):   Military power and space travel",
      "B):   Social equity and environmental protection",
      "C):   Tax increases and price inflation",
      "D):   Paper exams and physical chalkboards",
    ],
    correctAnswer: "b",
    explanation: "Sustainable development requires the three interdependent pillars: Economic Viability, Social Equity, and Environmental Protection.",
  },
  {
    id: "c12-edu-8-mcq-14",
    question: "Which UNESCO pillar emphasizes the complete flourishing of the human being &mdash; spiritual, aesthetic, moral, and physical?",
    options: [
      "A):   Learning to Know",
      "B):   Learning to Do",
      "C):   Learning to Be",
      "D):   Learning to Live Together",
    ],
    correctAnswer: "c",
    explanation: "Learning to Be focuses on the holistic development of the whole person &mdash; mind, body, spirit, aesthetic imagination, and ethics.",
  },
  {
    id: "c12-edu-8-mcq-15",
    question: "Under NEP 2020, if a student studies Physics, Mathematics, and Carpentry simultaneously in Class 12, which principle is realized?",
    options: [
      "A):   Rigid streaming",
      "B):   Eradication of hard separations between academic and vocational streams",
      "C):   Compulsory rote memorization",
      "D):   Segregation model",
    ],
    correctAnswer: "b",
    explanation: "NEP 2020 eliminates the rigid boundaries between arts, science, and vocational education, allowing multi-disciplinary combinations.",
  },
  {
    id: "c12-edu-8-mcq-16",
    question: "Target 4.7 of SDG 4 explicitly mandates that all learners acquire knowledge and skills for:",
    options: [
      "A):   Stock market speculation",
      "B):   Education for Sustainable Development (ESD), human rights, gender equality, and global citizenship",
      "C):   Military combat readiness",
      "D):   Manufacturing plastic toys",
    ],
    correctAnswer: "b",
    explanation: "Target 4.7 focuses on Education for Sustainable Development (ESD), global citizenship, peace, and human rights.",
  },
  {
    id: "c12-edu-8-mcq-17",
    question: "In the 21st-century FLIPS framework for life and career skills, what does 'F' stand for?",
    options: [
      "A):   Finance",
      "B):   Flexibility and Adaptability",
      "C):   Fitness",
      "D):   Formality",
    ],
    correctAnswer: "b",
    explanation: "In FLIPS, F stands for Flexibility & Adaptability, L for Leadership, I for Initiative, P for Productivity, and S for Social skills.",
  },
  {
    id: "c12-edu-8-mcq-18",
    question: "How does the National Skills Qualifications Framework (NSQF) facilitate student vocational advancement?",
    options: [
      "A):   By banning all degrees",
      "B):   By standardizing competency levels from basic craft certificates to postgraduate diplomas, enabling national equivalence",
      "C):   By enforcing identical salaries for all jobs",
      "D):   By eliminating mathematics from schools",
    ],
    correctAnswer: "b",
    explanation: "NSQF organizes qualifications across a series of levels of knowledge, skills, and aptitude, ensuring seamless industry recognition.",
  },

  // TIER 3: ADVANCED ANALYTICAL & CASE-BASED SCENARIOS (Q19 to Q25)
  {
    id: "c12-edu-8-mcq-19",
    question: "A classroom project where Hindu, Muslim, Christian, and Sikh students collaboratively restore a local polluted river while studying environmental science exemplifies which two UNESCO pillars simultaneously?",
    options: [
      "A):   Learning to Know and Learning to Live Together",
      "B):   Learning to Disagree and Learning to Divide",
      "C):   Learning to Test and Learning to Grade",
      "D):   Learning to Memorize and Learning to Recite",
    ],
    correctAnswer: "a",
    explanation: "Acquiring ecological understanding represents Learning to Know, while working harmoniously across diverse religious groups embodies Learning to Live Together.",
  },
  {
    id: "c12-edu-8-mcq-20",
    question: "Why is 'Collaboration' considered an essential 21st-century skill that cannot be easily replaced by artificial intelligence?",
    options: [
      "A):   Because computers cannot count numbers",
      "B):   Because human collaboration relies on empathy, shared emotional resonance, cultural nuance, and interpersonal negotiation",
      "C):   Because collaboration takes place only without electricity",
      "D):   Because AI is banned in all workplaces",
    ],
    correctAnswer: "b",
    explanation: "Interpersonal collaboration requires emotional intelligence, empathy, and social negotiation &mdash; distinctly human traits.",
  },
  {
    id: "c12-edu-8-mcq-21",
    question: "How does the incorporation of 'Lokvidya' (traditional Indian vocational crafts) in NEP 2020 contribute to national development?",
    options: [
      "A):   By eliminating modern computers from schools",
      "B):   By preserving indigenous artisanal heritage, instilling dignity of labor, and driving rural economic self-reliance",
      "C):   By replacing university professors with machine tools",
      "D):   By banning foreign trade",
    ],
    correctAnswer: "b",
    explanation: "Lokvidya recognizes indigenous artisanal knowledge, honoring traditional craftspeople and fostering rural entrepreneurship.",
  },
  {
    id: "c12-edu-8-mcq-22",
    question: "A country achieves rapid industrial GDP growth by cutting down 90% of its pristine forests and contaminating drinking water. Under sustainable development principles, this growth is:",
    options: [
      "A):   Highly sustainable and praiseworthy",
      "B):   Unsustainable and catastrophic, because it compromises the survival and resource needs of future generations",
      "C):   An example of circular economy",
      "D):   Approved by Brundtland Commission",
    ],
    correctAnswer: "b",
    explanation: "Economic growth that destroys ecological foundations directly violates the fundamental principle of intergenerational equity.",
  },
  {
    id: "c12-edu-8-mcq-23",
    question: "Under NEP 2020, how does the integration of vocational education from middle school help reduce the dropout rate in secondary schools?",
    options: [
      "A):   By making examinations optional",
      "B):   By providing practical, employment-relevant skills that make education meaningful and economically valuable for marginalized youth",
      "C):   By paying students monthly cash wages during class",
      "D):   By abolishing all attendance rules",
    ],
    correctAnswer: "b",
    explanation: "Practical vocational skills provide immediate economic relevance, motivating students from low-income families to remain in school.",
  },
  {
    id: "c12-edu-8-mcq-24",
    question: "Which of the following describes the core philosophical vision uniting Jacques Delors' Four Pillars, NEP 2020, and the UN SDGs?",
    options: [
      "A):   Transforming humans into mechanical industrial cogs",
      "B):   A holistic, humanistic, and sustainable vision that nurtures intellect, ethics, social peace, and ecological harmony",
      "C):   Restricting education to wealthy urban elites exclusively",
      "D):   Standardizing all global cultures into a single language",
    ],
    correctAnswer: "b",
    explanation: "All three frameworks champion holistic human development, ethical citizenship, peaceful co-existence, and ecological sustainability.",
  },
  {
    id: "c12-edu-8-mcq-25",
    question: "In a passage-based board question, a student is presented with a scenario where youth use drones to monitor agricultural crop health. This scenario synthesizes:",
    options: [
      "A):   Only 19th-century rote drill",
      "B):   Vocational skill, technology literacy, and sustainable agricultural development (SDG 2 &amp; SDG 4)",
      "C):   Pure leisure without educational value",
      "D):   A violation of school discipline",
    ],
    correctAnswer: "b",
    explanation: "Deploying drone technology in agriculture perfectly synthesizes modern vocational training, tech literacy, and sustainable development.",
  },
];
