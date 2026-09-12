// Class 11 Education Unit 6: National Educational Policy 2020 and the Curriculum Frameworks (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #FDC830 (Golden Amber / Warm Gold Gradient)

const themeColor = "#FDC830";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Edu6HtmlOverview = `
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
  <div style="background: rgba(253, 200, 48, 0.07); border: 1.5px solid #FDC830; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #FDC830; font-weight: bold; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">📜 Quick Glossary &amp; Core NEP 2020 Architecture</h2>
    <p class="text-center" style="color: #FFE082; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Unit 6: National Educational Policy 2020 (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FDC830; border-radius: 6px;">
        <b style="color: #FDC830; font-size: 16px; display: block; margin-bottom: 4px;">1. NEP 2020 (National Education Policy 2020):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Approved by the Union Cabinet on July 29, 2020 (drafted under Dr. K. Kasturirangan), replacing the 34-year-old NPE 1986. It envisions an India-centered education system that transforms the nation sustainably into an equitable knowledge society.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FDC830; border-radius: 6px;">
        <b style="color: #FDC830; font-size: 16px; display: block; margin-bottom: 4px;">2. 5+3+3+4 Pedagogical Structure:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The revolutionary stage design replacing the old 10+2 system, reorganizing schooling into Foundational (5 years, ages 3–8), Preparatory (3 years, ages 8–11), Middle (3 years, ages 11–14), and Secondary (4 years, ages 14–18).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FDC830; border-radius: 6px;">
        <b style="color: #FDC830; font-size: 16px; display: block; margin-bottom: 4px;">3. FLN (Foundational Literacy and Numeracy):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The highest national priority of NEP 2020 &mdash; achieving universal foundational literacy and basic arithmetic skills for all children by Grade 3 through the NIPUN Bharat Mission.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FDC830; border-radius: 6px;">
        <b style="color: #FDC830; font-size: 16px; display: block; margin-bottom: 4px;">4. Five Guiding Pillars:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The foundational bedrock of NEP 2020: <b>Access</b>, <b>Equity</b>, <b>Quality</b>, <b>Affordability</b>, and <b>Accountability</b>.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #FDC830; border-radius: 6px;">
        <b style="color: #FDC830; font-size: 16px; display: block; margin-bottom: 4px;">5. NCF-FS &amp; NCF-SE:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">National Curriculum Framework for Foundational Stage (2022, rooted in the <i>Panchakosha</i> model of early child development) and National Curriculum Framework for School Education (2023, institutionalizing multidisciplinary competency-based education).</span>
      </div>
    </div>
  </div>

  <!-- SECTION 6.1 -->
  <h2 style="color: #FDC830; font-weight: bold; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 30px;">6.1 Stage Design: Aims and Significance (5+3+3+4 Structure)</h2>

  <p>For over three decades, Indian school education operated under the rigid <b>10+2 system</b>, which completely ignored early childhood care and education (ages 3 to 6) in the formal school structure. The National Education Policy (NEP 2020) completely dismantled this outdated system, introducing an integrated, developmentally responsive <b>5+3+3+4 curricular and pedagogical design</b> covering ages 3 to 18.</p>

  <!-- STANDALONE CLEAN DIAGRAM 1: 5+3+3+4 STAGE DESIGN (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 490px;">
      <svg viewBox="0 0 450 230" style="width: 100%; max-width: 470px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Stage 4: Secondary (Top) -->
        <rect x="30" y="10" width="390" height="44" rx="6" fill="#FFFBEB" stroke="#D97706" stroke-width="2" />
        <text x="225" y="27" fill="#B45309" font-size="11.5" font-weight="bold" text-anchor="middle">4. SECONDARY STAGE &bull; 4 YEARS (Ages 14–18 &bull; Grades 9 to 12)</text>
        <text x="225" y="42" fill="#475569" font-size="9" text-anchor="middle">Multidisciplinary Study &bull; Deep Critical Thinking &bull; No Rigid Stream Silos</text>

        <!-- Stage 3: Middle -->
        <rect x="55" y="62" width="340" height="44" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="2" />
        <text x="225" y="79" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">3. MIDDLE STAGE &bull; 3 YEARS (Ages 11–14 &bull; Grades 6 to 8)</text>
        <text x="225" y="94" fill="#475569" font-size="9" text-anchor="middle">Experiential Learning &bull; Sciences, Math, Humanities &bull; 10 Bagless Vocational Days</text>

        <!-- Stage 2: Preparatory -->
        <rect x="80" y="114" width="290" height="44" rx="6" fill="#FDE68A" stroke="#B45309" stroke-width="2" />
        <text x="225" y="131" fill="#92400E" font-size="10.5" font-weight="bold" text-anchor="middle">2. PREPARATORY STAGE &bull; 3 YEARS (Ages 8–11 &bull; Grades 3 to 5)</text>
        <text x="225" y="146" fill="#475569" font-size="9" text-anchor="middle">Play, Discovery &amp; Activity-based &bull; Structured Reading, Writing &amp; Arithmetic</text>

        <!-- Stage 1: Foundational (Bottom Base) -->
        <rect x="105" y="166" width="240" height="52" rx="6" fill="#F59E0B" stroke="#78350F" stroke-width="2" />
        <text x="225" y="186" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">1. FOUNDATIONAL STAGE &bull; 5 YEARS</text>
        <text x="225" y="200" fill="#FEF3C7" font-size="9.5" text-anchor="middle">Ages 3–8 &bull; 3 Yrs Anganwadi/Balvatika + Grades 1 &amp; 2</text>
        <text x="225" y="211" fill="#FEF3C7" font-size="8.5" text-anchor="middle">Play-based ECCE &bull; Mother Tongue &bull; Foundational Literacy</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Pedagogical Pyramid: The 5+3+3+4 Curricular Structure replacing the old 10+2 system.
    </div>
  </div>

  <h3 style="color: #FDC830; font-weight: bold; margin-top: 24px;">(i) Detailed Breakdown of the Four Stages</h3>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FDC830; font-size: 16px;">1. Foundational Stage (5 Years &bull; Ages 3–8):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        &bull; <b style="color: #FDC830; font-weight: bold;">Composition:</b> 3 years of preschool (Anganwadi / Balvatika) for ages 3–6, plus 2 years of formal primary school (Grades 1 and 2) for ages 6–8.
        <br>&bull; <b style="color: #FDC830; font-weight: bold;">Aims &amp; Pedagogy:</b> Flexible, multilevel, play/activity-based learning. Over 85% of a child's cumulative brain development occurs prior to age 6. Focuses on <b>ECCE (Early Childhood Care and Education)</b>, ethical behavior, motor skills, and learning through the <b>home language / mother tongue</b>.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FDC830; font-size: 16px;">2. Preparatory Stage (3 Years &bull; Ages 8–11 &bull; Grades 3 to 5):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        &bull; <b style="color: #FDC830; font-weight: bold;">Aims &amp; Pedagogy:</b> Builds upon play-based foundations while introducing structured textbooks and interactive classroom discussions.
        <br>&bull; <b style="color: #FDC830; font-weight: bold;">Key Focus:</b> Consolidating reading, writing, speaking, basic arithmetic, art, physical education, and environmental studies (EVS).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FDC830; font-size: 16px;">3. Middle Stage (3 Years &bull; Ages 11–14 &bull; Grades 6 to 8):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        &bull; <b style="color: #FDC830; font-weight: bold;">Aims &amp; Pedagogy:</b> Introduction of specialized subject teachers for Sciences, Mathematics, Social Sciences, Arts, and Humanities.
        <br>&bull; <b style="color: #FDC830; font-weight: bold;">Revolutionary Shift:</b> Introduction of <b>vocational education and coding</b> from Grade 6, including <b>10 bagless days</b> of hands-on internships with local artisans, potters, electricians, and carpenters.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #FDC830; font-size: 16px;">4. Secondary Stage (4 Years &bull; Ages 14–18 &bull; Grades 9 to 12):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        &bull; <b style="color: #FDC830; font-weight: bold;">Composition:</b> 2 phases (Grades 9 &amp; 10; Grades 11 &amp; 12).
        <br>&bull; <b style="color: #FDC830; font-weight: bold;">Aims &amp; Pedagogy:</b> Eliminates rigid separation between Arts, Science, Commerce, and vocational streams. A student can choose Physics alongside History or Music. Focuses on critical thinking, deep conceptual understanding, and modular board exams twice a year to eliminate high-stakes exam anxiety.
      </p>
    </div>
  </div>

  <!-- SECTION 6.2 -->
  <h2 style="color: #FDC830; font-weight: bold; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 35px;">6.2 Guiding Pillars of NEP 2020</h2>

  <p>NEP 2020 is built upon five foundational guiding pillars designed to transform India into an inclusive, vibrant global knowledge superpower:</p>

  <!-- STANDALONE CLEAN DIAGRAM 2: 5 GUIDING PILLARS (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Top Entablature -->
        <rect x="20" y="15" width="400" height="32" rx="4" fill="#D97706" />
        <text x="220" y="36" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">🏛️ FIVE GUIDING PILLARS OF NEP 2020</text>

        <!-- 5 Pillars -->
        <!-- Pillar 1: Access -->
        <rect x="30" y="55" width="68" height="115" rx="4" fill="#FFFBEB" stroke="#D97706" stroke-width="1.8" />
        <text x="64" y="80" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">ACCESS</text>
        <text x="64" y="105" fill="#475569" font-size="8" text-anchor="middle">Universal</text>
        <text x="64" y="120" fill="#475569" font-size="8" text-anchor="middle">Enrolment</text>
        <text x="64" y="135" fill="#475569" font-size="8" text-anchor="middle">100% GER</text>
        <text x="64" y="150" fill="#475569" font-size="8" text-anchor="middle">by 2030</text>

        <!-- Pillar 2: Equity -->
        <rect x="110" y="55" width="68" height="115" rx="4" fill="#FFFBEB" stroke="#D97706" stroke-width="1.8" />
        <text x="144" y="80" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">EQUITY</text>
        <text x="144" y="105" fill="#475569" font-size="8" text-anchor="middle">SEZ Zones</text>
        <text x="144" y="120" fill="#475569" font-size="8" text-anchor="middle">Inclusion</text>
        <text x="144" y="135" fill="#475569" font-size="8" text-anchor="middle">Funds for</text>
        <text x="144" y="150" fill="#475569" font-size="8" text-anchor="middle">SEDGs</text>

        <!-- Pillar 3: Quality -->
        <rect x="190" y="55" width="68" height="115" rx="4" fill="#FFFBEB" stroke="#D97706" stroke-width="1.8" />
        <text x="224" y="80" fill="#B45309" font-size="10.5" font-weight="bold" text-anchor="middle">QUALITY</text>
        <text x="224" y="105" fill="#475569" font-size="8" text-anchor="middle">Competency</text>
        <text x="224" y="120" fill="#475569" font-size="8" text-anchor="middle">Curriculum</text>
        <text x="224" y="135" fill="#475569" font-size="8" text-anchor="middle">Teacher</text>
        <text x="224" y="150" fill="#475569" font-size="8" text-anchor="middle">Training</text>

        <!-- Pillar 4: Affordability -->
        <rect x="270" y="55" width="68" height="115" rx="4" fill="#FFFBEB" stroke="#D97706" stroke-width="1.8" />
        <text x="304" y="78" fill="#B45309" font-size="9.5" font-weight="bold" text-anchor="middle">AFFORD-</text>
        <text x="304" y="90" fill="#B45309" font-size="9.5" font-weight="bold" text-anchor="middle">ABILITY</text>
        <text x="304" y="110" fill="#475569" font-size="8" text-anchor="middle">Scholarships</text>
        <text x="304" y="125" fill="#475569" font-size="8" text-anchor="middle">6% of GDP</text>
        <text x="304" y="140" fill="#475569" font-size="8" text-anchor="middle">Fee Cap on</text>
        <text x="304" y="155" fill="#475569" font-size="8" text-anchor="middle">Private Inst.</text>

        <!-- Pillar 5: Accountability -->
        <rect x="350" y="55" width="68" height="115" rx="4" fill="#FFFBEB" stroke="#D97706" stroke-width="1.8" />
        <text x="384" y="78" fill="#B45309" font-size="9" font-weight="bold" text-anchor="middle">ACCOUNT-</text>
        <text x="384" y="90" fill="#B45309" font-size="9" font-weight="bold" text-anchor="middle">ABILITY</text>
        <text x="384" y="110" fill="#475569" font-size="8" text-anchor="middle">SSSA Board</text>
        <text x="384" y="125" fill="#475569" font-size="8" text-anchor="middle">PARAKH</text>
        <text x="384" y="140" fill="#475569" font-size="8" text-anchor="middle">Transparent</text>
        <text x="384" y="155" fill="#475569" font-size="8" text-anchor="middle">Governance</text>

        <!-- Foundation Base -->
        <rect x="20" y="178" width="400" height="28" rx="4" fill="#78350F" />
        <text x="220" y="196" fill="#FDE68A" font-size="10" font-weight="bold" text-anchor="middle">VIBRANT, EQUITABLE &amp; INCLUSIVE INDIAN KNOWLEDGE SOCIETY</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Architectural Edifice: Access, Equity, Quality, Affordability, and Accountability.
    </div>
  </div>

  <h3 style="color: #FDC830; font-weight: bold; margin-top: 20px;">(i) Detailed Examination of the 5 Pillars</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FDC830;">1. Access:</b> Universal schooling from age 3 to 18; tracking dropped-out children; achieving <b>100% Gross Enrolment Ratio (GER)</b> in school education by 2030.</li>
    <li><b style="color: #FDC830;">2. Equity:</b> Bridging the socio-economic divide through Special Education Zones (SEZs) for tribal and backward areas, and a dedicated <b>Gender Inclusion Fund</b> for girls and transgender students.</li>
    <li><b style="color: #FDC830;">3. Quality:</b> Overhauling rote learning with experiential pedagogy; upgrading teacher education through mandatory 4-year integrated B.Ed. degrees and 50 hours of continuous professional development (CPD) annually.</li>
    <li><b style="color: #FDC830;">4. Affordability:</b> Ensuring that quality education is never denied due to poverty; expanding merit-cum-means scholarships and raising public education expenditure to <b>6% of GDP</b>.</li>
    <li><b style="color: #FDC830;">5. Accountability:</b> Setting up an independent regulatory body, <b>SSSA (State School Standards Authority)</b>, transparent public disclosure of school standards, and student assessment reform via <b>PARAKH</b>.</li>
  </ul>

  <!-- SECTION 6.3 -->
  <h2 style="color: #FDC830; font-weight: bold; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 35px;">6.3 National Curriculum Framework for the Foundational Stage (NCF-FS): An Overview</h2>

  <p>Released in October 2022 by the National Steering Committee headed by <b>Dr. K. Kasturirangan</b>, the <b>NCF-FS</b> represents independent India's first-ever comprehensive curriculum framework dedicated exclusively to early childhood education (ages 3 to 8).</p>

  <!-- STANDALONE CLEAN DIAGRAM 3: PANCHAKOSHA (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Concentric Panchakosha Rings -->
        <circle cx="220" cy="110" r="95" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5" />
        <circle cx="220" cy="110" r="76" fill="#FDE68A" stroke="#B45309" stroke-width="1.5" />
        <circle cx="220" cy="110" r="57" fill="#FCD34D" stroke="#92400E" stroke-width="1.5" />
        <circle cx="220" cy="110" r="38" fill="#FBBF24" stroke="#78350F" stroke-width="1.5" />
        <circle cx="220" cy="110" r="20" fill="#F59E0B" />

        <text x="220" y="32" fill="#78350F" font-size="9" font-weight="bold" text-anchor="middle">5. ANANDAMAYA KOSHA (Bliss &amp; Aesthetic Spiritual Joy)</text>
        <text x="220" y="52" fill="#92400E" font-size="8.5" font-weight="bold" text-anchor="middle">4. VIJNANAMAYA KOSHA (Intellectual &amp; Cognitive)</text>
        <text x="220" y="70" fill="#B45309" font-size="8.5" font-weight="bold" text-anchor="middle">3. MANOMAYA KOSHA (Mental &amp; Emotional)</text>
        <text x="220" y="88" fill="#78350F" font-size="8" font-weight="bold" text-anchor="middle">2. PRANAMAYA (Vital Life Energy)</text>
        <text x="220" y="113" fill="#FFFFFF" font-size="8" font-weight="bold" text-anchor="middle">1. ANNAMAYA</text>
        <text x="220" y="122" fill="#FFFFFF" font-size="7.5" text-anchor="middle">(Physical)</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Panchakosha Model of NCF-FS: Ancient Indian Five-Fold Sheaths of Early Child Development.
    </div>
  </div>

  <h3 style="color: #FDC830; font-weight: bold; margin-top: 20px;">(i) Salient Features of NCF-FS</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FDC830;">The Panchakosha Framework:</b> Grounds holistic development across five Indian dimensions: <b>Annamaya</b> (physical body/nutrition), <b>Pranamaya</b> (vital life energy/breathing), <b>Manomaya</b> (emotional wellbeing), <b>Vijnanamaya</b> (intellectual/cognitive faculties), and <b>Anandamaya</b> (aesthetic joy and moral bliss).</li>
    <li><b style="color: #FDC830;">Play as the Core Pedagogy:</b> Rejects rote memorization, formal printed textbooks, and written exams for ages 3 to 6. Learning occurs through toys, clay modeling, picture books, puppet shows, and local folk songs.</li>
    <li><b style="color: #FDC830;">'Jaadui Pitara' (Magic Box):</b> Play-based indigenous learning kits launched by the Government of India containing puzzles, wooden toys, flashcards, and storytelling cards in regional languages.</li>
    <li><b style="color: #FDC830;">Primary Medium of Instruction:</b> Mandates that early learning must occur in the child's <b>Mother Tongue / Home Language</b> to maximize cognitive fluency and comfort.</li>
  </ul>

  <!-- SECTION 6.4 -->
  <h2 style="color: #FDC830; font-weight: bold; border-bottom: 2px solid #FDC830; padding-bottom: 6px; margin-top: 35px;">6.4 National Curriculum Framework for School Education (NCF-SE): An Overview</h2>

  <p>Released in 2023, the <b>NCF-SE</b> translates the vision of NEP 2020 into concrete classroom reality across all four school stages, transforming the instructional paradigm from textbook-centric rote learning to <b>competency-based mastery</b>.</p>

  <h3 style="color: #FDC830; font-weight: bold; margin-top: 20px;">(i) Key Transformations Introduced by NCF-SE</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #FDC830;">Competency-Based Education (CBE):</b> Learning goals are framed as clear learning outcomes and real-world competencies rather than chapters to be memorized.</li>
    <li><b style="color: #FDC830;">Multidisciplinary Flexibility in Secondary Stage:</b> Secondary education (Grades 9 to 12) removes rigid barriers between academic and vocational streams. Students design personalized curricular pathways combining subjects like Mathematics with Visual Arts, or Economics with Computer Science.</li>
    <li><b style="color: #FDC830;">Three-Language Formula with Indigenous Roots:</b> Students learn three languages in school, with at least two languages native to India, fostering linguistic diversity and national integration.</li>
    <li><b style="color: #FDC830;">Board Examination Reforms:</b> Board examinations will be conducted at least <b>twice a year</b>, testing core conceptual competencies rather than memorized coaching tips, giving students the opportunity to retain their best score.</li>
    <li><b style="color: #FDC830;">Holistic Progress Card (HPC):</b> Assessment shifts from one-time marks to a 360-degree multidimensional progress card incorporating self-assessment, peer-assessment, and teacher-evaluation.</li>
  </ul>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                     TAB 2: GOLDEN 25 BOARD MASTER Q&A                      */
/* -------------------------------------------------------------------------- */

export const c11Edu6HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION A HEADER -->
  <div style="background: rgba(253, 200, 48, 0.15); border-left: 5px solid #FDC830; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
    <h2 style="color: #FDC830; font-weight: bold; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer Type Questions (VSAT &bull; 1 &amp; 2 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">12 Questions &bull; Word Limit: 20–30 Words &bull; Direct Recall &amp; Board Facts</span>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q1: On which date was the National Education Policy (NEP 2020) approved, and who headed the drafting committee?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      NEP 2020 was approved on <b style="color: #FDC830;">July 29, 2020</b>. The Committee for the Draft National Education Policy was headed by eminent scientist <b style="color: #FDC830;">Dr. K. Kasturirangan</b>.
    </div>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q2: What is the new pedagogical and curricular structure introduced by NEP 2020 in place of the 10+2 system?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      NEP 2020 introduced the <b style="color: #FDC830;">5+3+3+4</b> structure (Foundational 5 years, Preparatory 3 years, Middle 3 years, and Secondary 4 years).
    </div>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q3: What are the age groups and classes covered in the Foundational Stage?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      It covers <b style="color: #FDC830;">ages 3 to 8</b> comprising 3 years of preschool (Anganwadi / Balvatika) and 2 years of primary school (Grades 1 and 2).
    </div>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q4: What are the Five Guiding Pillars of NEP 2020?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The five guiding pillars are: <b style="color: #FDC830;">Access</b>, <b style="color: #FDC830;">Equity</b>, <b style="color: #FDC830;">Quality</b>, <b style="color: #FDC830;">Affordability</b>, and <b style="color: #FDC830;">Accountability</b>.
    </div>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q5: What is the full form and primary objective of FLN?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #FDC830;">Foundational Literacy and Numeracy</b>. Its goal is ensuring every child achieves foundational reading, writing, and basic math skills by Grade 3 under NIPUN Bharat.
    </div>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q6: What is meant by "10 Bagless Days" in the Middle Stage?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Students in Grades 6–8 participate in 10 bagless days of hands-on vocational internships with local artisans, potters, carpenters, and electricians.
    </div>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q7: What is the Indian philosophical concept behind the NCF for the Foundational Stage?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The <b style="color: #FDC830;">Panchakosha</b> concept (Annamaya, Pranamaya, Manomaya, Vijnanamaya, and Anandamaya Koshas) for holistic child development.
    </div>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q8: What is 'Jaadui Pitara' launched under NCF-FS?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      A play-based learning-teaching material kit containing indigenous toys, puzzles, flashcards, and picture books for children aged 3 to 8.
    </div>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q9: What is the recommended medium of instruction up to Grade 5 in NEP 2020?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The <b style="color: #FDC830;">Mother Tongue / Home Language / Local Language</b> to ensure natural cognitive comprehension and emotional comfort.
    </div>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q10: What is PARAKH under NEP 2020?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      A national assessment center set up under NCERT for Performance Assessment, Review, and Analysis of Knowledge for Holistic Development.
    </div>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q11: What major reform does NEP 2020 introduce for Board Examinations?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Board exams will be held <b style="color: #FDC830;">at least twice a year</b> in a modular format testing core competencies rather than rote memory, allowing students to improve scores.
    </div>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">Q12: What is the target public education expenditure recommended by NEP 2020?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Raising public investment in education to at least <b style="color: #FDC830;">6% of India's Gross Domestic Product (GDP)</b>.
    </div>
  </div>

  <!-- SECTION B HEADER -->
  <div style="background: rgba(253, 200, 48, 0.15); border-left: 5px solid #FDC830; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: #FDC830; font-weight: bold; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION B: Short Answer Type Questions (SAT &bull; 4 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">8 Questions &bull; Word Limit: 80–100 Words &bull; 4 to 5 Themed Bullet Points</span>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q13: Explain the features and significance of the Foundational Stage in the 5+3+3+4 design.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The Foundational Stage establishes the cognitive bedrock for life:
      <br>&bull; <b style="color: #FDC830;">Scope:</b> Encompasses 5 years (ages 3 to 8), uniting 3 years of preschool (Balvatika) with Grades 1 and 2.
      <br>&bull; <b style="color: #FDC830;">Brain Development:</b> Harnesses the critical window when over 85% of cumulative human brain development occurs.
      <br>&bull; <b style="color: #FDC830;">Play-Based Pedagogy:</b> Forbids rote memorization and formal exams, utilizing toys, songs, and storytelling.
      <br>&bull; <b style="color: #FDC830;">Mother Tongue Priority:</b> Instruction is imparted in the home language to ensure natural emotional and cognitive ease.
    </div>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q14: Describe the Preparatory and Middle stages of NEP 2020.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      These stages transition learners toward structured intellectual inquiry:
      <br>&bull; <b style="color: #FDC830;">Preparatory Stage (Grades 3–5 &bull; Ages 8–11):</b> Introduces interactive textbooks, basic reading, writing, mathematical arithmetic, physical education, and art.
      <br>&bull; <b style="color: #FDC830;">Middle Stage (Grades 6–8 &bull; Ages 11–14):</b> Introduces subject specialists for abstract science and social science concepts.
      <br>&bull; <b style="color: #FDC830;">Experiential Learning:</b> Hands-on scientific experiments replace passive textbook dictations.
      <br>&bull; <b style="color: #FDC830;">Vocational Exposure:</b> Mandates 10 bagless days of vocational internships with local artisans.
    </div>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q15: How does the Secondary Stage in NEP 2020 break the rigid separation of streams?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The 4-year Secondary Stage (Grades 9 to 12) revolutionizes student choice:
      <br>&bull; <b style="color: #FDC830;">No Hard Separation:</b> Abolishes artificial silos separating Arts, Science, Commerce, and vocational courses.
      <br>&bull; <b style="color: #FDC830;">Personalized Curricular Choice:</b> A student can combine Chemistry with History, or Biology with Music and Economics.
      <br>&bull; <b style="color: #FDC830;">Critical Thinking:</b> Deepens analytical capabilities, problem-solving, and philosophical inquiry.
      <br>&bull; <b style="color: #FDC830;">Modular Board Exams:</b> Reduces coaching reliance by testing core concepts twice a year.
    </div>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q16: Explain the "Access" and "Equity" pillars of NEP 2020.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Access and Equity ensure universal educational democratization:
      <br>&bull; <b style="color: #FDC830;">100% GER by 2030:</b> Commits to universal enrolment from pre-school through secondary school, tracking dropouts.
      <br>&bull; <b style="color: #FDC830;">Open Schooling Expansion:</b> Strengthens NIOS and state open schools for non-formal learners.
      <br>&bull; <b style="color: #FDC830;">Special Education Zones (SEZs):</b> Targeted infrastructure development in regions with high tribal or backward populations.
      <br>&bull; <b style="color: #FDC830;">Gender Inclusion Fund:</b> Dedicated funds to ensure girls and transgender students receive quality education and sanitation.
    </div>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q17: Explain the "Quality", "Affordability", and "Accountability" pillars of NEP 2020.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      These pillars anchor institutional excellence and governance:
      <br>&bull; <b style="color: #FDC830;">Quality:</b> Overhauls teacher education (4-year integrated B.Ed.) and mandates 50 hours of annual continuous professional development (CPD).
      <br>&bull; <b style="color: #FDC830;">Affordability:</b> Protects students from commercial exploitation by capping private fees and targeting 6% of GDP public spending.
      <br>&bull; <b style="color: #FDC830;">Accountability:</b> Establishes the independent State School Standards Authority (SSSA) for transparent public disclosure.
      <br>&bull; <b style="color: #FDC830;">Assessment Standardization:</b> Creates PARAKH to guide state and central examination boards.
    </div>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q18: Explain the Five Sheaths of the Panchakosha model in NCF-FS.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The Panchakosha model addresses the multidimensional development of the child:
      <br>&bull; <b style="color: #FDC830;">Annamaya Kosha (Physical Body):</b> Balanced nutrition, physical hygiene, gross and fine motor skills.
      <br>&bull; <b style="color: #FDC830;">Pranamaya Kosha (Vital Life Force):</b> Breathing exercises, stamina, sensory alertness, and physical endurance.
      <br>&bull; <b style="color: #FDC830;">Manomaya Kosha (Mind &amp; Emotions):</b> Emotional security, empathy, social bonding, and artistic appreciation.
      <br>&bull; <b style="color: #FDC830;">Vijnanamaya &amp; Anandamaya:</b> Cognitive intellect, curiosity (Vijnana), and experiential bliss and ethical integrity (Ananda).
    </div>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q19: What is the Three-Language Formula adopted in NCF-SE 2023?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The Three-Language Formula balances linguistic heritage and global communication:
      <br>&bull; <b style="color: #FDC830;">Three Languages:</b> Students learn three languages in school to foster multilingual cognitive agility.
      <br>&bull; <b style="color: #FDC830;">Two Native Indian Languages:</b> At least two of the three languages must be native to India (e.g. Hindi, Sanskrit, Tamil, Bengali, Urdu).
      <br>&bull; <b style="color: #FDC830;">Cultural Continuity:</b> Strengthens national integration while preserving local regional mother tongues.
      <br>&bull; <b style="color: #FDC830;">Flexibility:</b> Permits students to change one or more languages in Grade 6 or 7 if proficiency is demonstrated.
    </div>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 16.5px; margin: 0 0 10px 0;">Q20: Describe the 360-Degree Holistic Progress Card (HPC) introduced by NCF-SE.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The Holistic Progress Card replaces single-score report cards:
      <br>&bull; <b style="color: #FDC830;">Multidimensional Evaluation:</b> Measures cognitive, affective, and psychomotor progress simultaneously.
      <br>&bull; <b style="color: #FDC830;">Three-Tier Assessment:</b> Integrates self-assessment, peer-assessment, and teacher-evaluation.
      <br>&bull; <b style="color: #FDC830;">Competency-Based:</b> Details unique strengths, critical thinking, creativity, and collaborative teamwork.
      <br>&bull; <b style="color: #FDC830;">Parent Partnership:</b> Provides actionable developmental insights to parents rather than rank humiliation.
    </div>
  </div>

  <!-- SECTION C HEADER -->
  <div style="background: rgba(253, 200, 48, 0.15); border-left: 5px solid #FDC830; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: #FDC830; font-weight: bold; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION C: Long Answer Type Questions (LAT &bull; 6 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">5 Comprehensive Board Questions &bull; 3-Tier Answer Blueprint (Intro &rarr; Core Analysis &rarr; Conclusion)</span>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q21: Critically examine the 5+3+3+4 Pedagogical Structure of NEP 2020. Compare it with the old 10+2 system and explain its developmental significance.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #FDC830;">1. Introduction:</b><br>
      The National Education Policy (NEP 2020) replaced the 34-year-old rigid 10+2 structure with an internationally acclaimed 5+3+3+4 design covering ages 3 to 18. This structural reform directly aligns educational stages with human developmental psychology.
      <br><br>
      <b style="color: #FDC830;">2. Stage-by-Stage Comparative Analysis:</b><br>
      &bull; <b style="color: #FDC830; font-weight: bold;">Foundational Stage (5 Years &bull; Ages 3–8):</b> Unlike the 10+2 system which ignored ages 3–6, this stage formalizes Early Childhood Care and Education (ECCE) through Anganwadis and Balvatikas, focusing on play, mother-tongue learning, and Foundational Literacy and Numeracy (FLN).
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Preparatory Stage (3 Years &bull; Ages 8–11):</b> Smoothly transitions children from free play to interactive discovery-based classroom learning of reading, writing, art, and arithmetic.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Middle Stage (3 Years &bull; Ages 11–14):</b> Introduces subject specialists and hands-on scientific experiential learning, coupled with 10 bagless days of vocational internships.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Secondary Stage (4 Years &bull; Ages 14–18):</b> Replaces the rigid streams (Arts, Science, Commerce) of the 10+2 system with multidisciplinary flexibility, deep critical thinking, and twice-a-year modular board exams.
      <br><br>
      <b style="color: #FDC830;">3. Conclusion &amp; Developmental Significance:</b><br>
      The 5+3+3+4 structure ensures that educational transitions mirror neurodevelopmental milestones. It rescues early childhood from academic neglect and secondary education from coaching-centered rote examination trauma.
    </div>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q22: Discuss in detail the Five Guiding Pillars of NEP 2020. How do they collectively ensure inclusive national development?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #FDC830;">1. Introduction:</b><br>
      NEP 2020 is founded upon five monumental guiding pillars: Access, Equity, Quality, Affordability, and Accountability. These principles serve as the constitutional and moral compass guiding India's educational renaissance.
      <br><br>
      <b style="color: #FDC830;">2. Comprehensive Pillar Analysis:</b><br>
      &bull; <b style="color: #FDC830; font-weight: bold;">Access:</b> Guarantees universal educational access from pre-primary to Grade 12; establishes community learning centers to achieve 100% Gross Enrolment Ratio (GER) by 2030.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Equity:</b> Eliminates historical marginalization by instituting Special Education Zones (SEZs) and a dedicated Gender Inclusion Fund for girls and transgender students.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Quality:</b> Shifts the instructional paradigm to competency-based learning, mandates 50 hours of teacher CPD annually, and implements a 4-year integrated B.Ed. standard.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Affordability:</b> Expands scholarships and caps private school fees, striving to increase public education investment to 6% of GDP.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Accountability:</b> Establishes independent regulation through the State School Standards Authority (SSSA) and standardized evaluation via PARAKH.
      <br><br>
      <b style="color: #FDC830;">3. Conclusion &amp; National Implication:</b><br>
      These five pillars form an integrated architectural edifice. By combining universal access and equity with rigorous quality and ethical accountability, NEP 2020 lays the foundation for an equitable, vibrant, and self-reliant knowledge economy.
    </div>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q23: Elaborate the National Curriculum Framework for the Foundational Stage (NCF-FS 2022). Explain its Panchakosha philosophy and play-based pedagogy.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #FDC830;">1. Introduction:</b><br>
      Released in October 2022 by the National Steering Committee headed by Dr. K. Kasturirangan, NCF-FS is India's first integrated curriculum framework for early childhood (ages 3–8), institutionalizing the principle that early play is the foundation of all future learning.
      <br><br>
      <b style="color: #FDC830;">2. Core Pillars &amp; Panchakosha Model:</b><br>
      &bull; <b style="color: #FDC830; font-weight: bold;">The Panchakosha Philosophy:</b> Grounded in ancient Indian wisdom, NCF-FS cultivates all five human sheaths:
      <br>&nbsp;&nbsp;&bull; <i>Annamaya:</i> Physical vitality, fine/gross motor skills, and nutritious habits.
      <br>&nbsp;&nbsp;&bull; <i>Pranamaya:</i> Vital energy, sensory awareness, and breathing exercises.
      <br>&nbsp;&nbsp;&bull; <i>Manomaya:</i> Emotional resilience, positive feelings, and empathy.
      <br>&nbsp;&nbsp;&bull; <i>Vijnanamaya:</i> Cognitive intellect, curiosity, and logical inquiry.
      <br>&nbsp;&nbsp;&bull; <i>Anandamaya:</i> Aesthetic appreciation, spiritual wonder, and ethical harmony.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Play-Based Learning &amp; Jaadui Pitara:</b> Formal textbooks and written examinations are prohibited for ages 3–6. Children learn through native toys, puzzles, flashcards, clay modeling, and storytelling kits.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Home Language Priority:</b> Mandates instruction in the mother tongue to facilitate rapid cognitive assimilation.
      <br><br>
      <b style="color: #FDC830;">3. Conclusion &amp; Educational Implication:</b><br>
      NCF-FS transforms early childhood education from a stressful drill of memorizing alphabets into an enchanting, joyful journey of discovery, laying an unbreakable foundation for lifelong learning.
    </div>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q24: Provide an overview of the National Curriculum Framework for School Education (NCF-SE 2023). Discuss its major curricular and assessment reforms.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #FDC830;">1. Introduction:</b><br>
      Released in 2023, the NCF-SE translates the transformative vision of NEP 2020 into day-to-day school practice across all four stages, moving from textbook-centric rote learning to competency-based educational excellence.
      <br><br>
      <b style="color: #FDC830;">2. Major Curricular &amp; Assessment Transformations:</b><br>
      &bull; <b style="color: #FDC830; font-weight: bold;">Competency-Based Education (CBE):</b> Syllabi are designed around observable, real-world competencies and critical thinking rather than rote reproduction of facts.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Multidisciplinary Flexibility in Grades 9–12:</b> Secondary students freely choose subjects across disciplines, pairing STEM subjects with humanities, performing arts, or vocational crafts.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Three-Language Formula with Indian Roots:</b> Mandates learning three languages, with at least two indigenous Indian languages, fostering multilingual cognitive agility.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Reforming Board Examinations:</b> Conducts board exams twice a year in a modular format testing conceptual mastery, eliminating catastrophic one-day exam trauma.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">360-Degree Holistic Progress Card (HPC):</b> Evaluates cognitive, emotional, and social skills using self, peer, and teacher evaluations.
      <br><br>
      <b style="color: #FDC830;">3. Conclusion &amp; Educational Implication:</b><br>
      NCF-SE marks a decisive farewell to archaic colonial memorization. It fosters well-rounded, creative, and critical thinkers equipped to thrive in a globalized knowledge century.
    </div>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.35); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: #FDC830; font-weight: bold; font-size: 17px; margin: 0 0 12px 0;">Q25: "NEP 2020 bridges ancient Indian ethos with modern 21st-century competencies." Analyze this synthesis in terms of language, vocationalization, and global standards.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: #FDC830;">1. Introduction:</b><br>
      NEP 2020 is distinguished by its unique philosophical synthesis: deeply anchored in India's rich cultural, philosophical, and linguistic heritage (Indian Knowledge Systems), while fearlessly embracing 21st-century digital competencies and global educational standards.
      <br><br>
      <b style="color: #FDC830;">2. Synthesis Across Key Dimensions:</b><br>
      &bull; <b style="color: #FDC830; font-weight: bold;">Multilingualism &amp; Indian Languages:</b> Revives Indian linguistic heritage by promoting mother-tongue instruction in early years and the three-language formula, while simultaneously preparing students for global communication in English.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Vocational Integration (Nai Talim Revived):</b> Echoes Mahatma Gandhi's Basic Education by introducing hands-on vocational exposure (10 bagless days) from Grade 6, while modernizing it with contemporary digital coding and AI.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Holistic Values &amp; Global Competencies:</b> Combines ancient holistic wisdom (Panchakosha model of NCF-FS) with critical analytical inquiry, scientific temper, and digital literacy.
      <br>&bull; <b style="color: #FDC830; font-weight: bold;">Global Benchmarking:</b> Integrates Sustainable Development Goals (SDG 4: Quality Education) and creates international credit mobility frameworks to attract global universities.
      <br><br>
      <b style="color: #FDC830;">3. Conclusion &amp; Educational Implication:</b><br>
      NEP 2020 rejects the false dilemma between tradition and modernity. By cultivating roots in Indian culture while giving wings to global scientific aspirations, it prepares youth to become enlightened, confident global citizens.
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: 25 SMART INTERACTIVE MCQS                   */
/* -------------------------------------------------------------------------- */

export const c11Edu6Mcqs = [
  {
    "id": "c11-edu-6-mcq-1",
    "question": "Who was the Chairman of the Committee that drafted the National Education Policy 2020?",
    "options": [
      "A):   Dr. Yash Pal",
      "B):   Dr. K. Kasturirangan",
      "C):   Dr. D. S. Kothari",
      "D):   Prof. Yashwant Sinha"
    ],
    "correctAnswer": "b",
    "explanation": "Former ISRO chief Dr. K. Kasturirangan chaired the Committee for the Draft National Education Policy 2020."
  },
  {
    "id": "c11-edu-6-mcq-2",
    "question": "What is the new pedagogical and curricular structure introduced by NEP 2020?",
    "options": [
      "A):   5+3+3+4",
      "B):   10+2+3",
      "C):   8+4",
      "D):   5+4+3+2"
    ],
    "correctAnswer": "a",
    "explanation": "NEP 2020 restructured Indian schooling into the 5+3+3+4 framework."
  },
  {
    "id": "c11-edu-6-mcq-3",
    "question": "In the 5+3+3+4 design, how many years are dedicated to the Foundational Stage?",
    "options": [
      "A):   2 Years (Ages 4 to 6)",
      "B):   3 Years (Ages 6 to 9)",
      "C):   5 Years (Ages 3 to 8)",
      "D):   4 Years (Ages 14 to 18)"
    ],
    "correctAnswer": "c",
    "explanation": "The Foundational Stage spans 5 years (3 years preschool/Balvatika + Grades 1 & 2)."
  },
  {
    "id": "c11-edu-6-mcq-4",
    "question": "Which of the following is NOT one of the Five Guiding Pillars of NEP 2020?",
    "options": [
      "A):   Accountability",
      "B):   Access",
      "C):   Equity",
      "D):   Commercialization"
    ],
    "correctAnswer": "d",
    "explanation": "The 5 pillars are Access, Equity, Quality, Affordability, and Accountability. Commercialization is strictly opposed."
  },
  {
    "id": "c11-edu-6-mcq-5",
    "question": "What is the full form of 'FLN', which is considered an urgent national mission under NEP 2020?",
    "options": [
      "A):   Formal Learning Network",
      "B):   Foundational Literacy and Numeracy",
      "C):   Federal Language Norm",
      "D):   Financial Literacy Network"
    ],
    "correctAnswer": "b",
    "explanation": "FLN stands for Foundational Literacy and Numeracy, targeted under the NIPUN Bharat mission."
  },
  {
    "id": "c11-edu-6-mcq-6",
    "question": "From which grade does NEP 2020 introduce vocational education and coding with 10 bagless days of internships?",
    "options": [
      "A):   Grade 6",
      "B):   Grade 1",
      "C):   Grade 9",
      "D):   Grade 11"
    ],
    "correctAnswer": "a",
    "explanation": "Vocational crafts and coding exposure begin in Grade 6 in the Middle Stage."
  },
  {
    "id": "c11-edu-6-mcq-7",
    "question": "The NCF for the Foundational Stage (NCF-FS 2022) bases early childhood development on which ancient Indian concept?",
    "options": [
      "A):   Triguna",
      "B):   Ashtanga",
      "C):   Navaratna",
      "D):   Panchakosha"
    ],
    "correctAnswer": "d",
    "explanation": "NCF-FS 2022 is anchored in the Panchakosha model (the five sheaths of human development)."
  },
  {
    "id": "c11-edu-6-mcq-8",
    "question": "What is 'Jaadui Pitara' launched by the Ministry of Education under NCF-FS?",
    "options": [
      "A):   A military recruitment uniform",
      "B):   A digital bank account",
      "C):   A play-based learning-teaching material kit with toys, flashcards, and puzzles for ages 3–8",
      "D):   A sports stadium"
    ],
    "correctAnswer": "c",
    "explanation": "Jaadui Pitara is an indigenous play-based learning kit containing toys, puppets, and puzzles."
  },
  {
    "id": "c11-edu-6-mcq-9",
    "question": "What is the national target set by NEP 2020 for public expenditure on education as a percentage of GDP?",
    "options": [
      "A):   1% of GDP",
      "B):   6% of GDP",
      "C):   15% of GDP",
      "D):   25% of GDP"
    ],
    "correctAnswer": "b",
    "explanation": "NEP 2020 targets increasing public investment in education to 6% of GDP."
  },
  {
    "id": "c11-edu-6-mcq-10",
    "question": "What is PARAKH, set up under NEP 2020?",
    "options": [
      "A):   A National Assessment Center for holistic student evaluation and board standardization",
      "B):   A student loan agency",
      "C):   A sports tournament committee",
      "D):   A foreign university campus"
    ],
    "correctAnswer": "a",
    "explanation": "PARAKH is the national assessment center established to standardize evaluation norms across Indian boards."
  },
  {
    "id": "c11-edu-6-mcq-11",
    "question": "How does the Foundational Stage of NEP 2020 remedy the major deficiency of the former 10+2 system?",
    "options": [
      "A):   By making boarding school compulsory for toddlers",
      "B):   By abolishing all preschools",
      "C):   By formally incorporating Early Childhood Care and Education (ECCE for ages 3 to 6) into the school structure",
      "D):   By mandating 6-hour daily written exams for 4-year-olds"
    ],
    "correctAnswer": "c",
    "explanation": "The old 10+2 system began formal schooling at age 6, ignoring the critical brain development window of ages 3–6."
  },
  {
    "id": "c11-edu-6-mcq-12",
    "question": "In the Secondary Stage (Grades 9 to 12), what is the most revolutionary curricular change introduced by NEP 2020?",
    "options": [
      "A):   Restricting secondary schooling to boys only",
      "B):   Forcing all students to study only Physics",
      "C):   Banning students from learning languages",
      "D):   Elimination of rigid separations between Arts, Science, Commerce, and vocational streams"
    ],
    "correctAnswer": "d",
    "explanation": "NEP 2020 allows multidisciplinary subject choice, enabling students to combine sciences with arts or vocational skills."
  },
  {
    "id": "c11-edu-6-mcq-13",
    "question": "Under the 'Equity' pillar of NEP 2020, what are 'SEZs'?",
    "options": [
      "A):   Special Education Zones created in areas with significant disadvantaged populations",
      "B):   Special Economic Zones for tax evasion",
      "C):   Space Exploration Zones",
      "D):   Sport Entertainment Zones"
    ],
    "correctAnswer": "a",
    "explanation": "Special Education Zones (SEZs) target infrastructure and quality educational resources to marginalized regions."
  },
  {
    "id": "c11-edu-6-mcq-14",
    "question": "Why does NEP 2020 strongly advocate the Mother Tongue / Home Language as the medium of instruction up to Grade 5?",
    "options": [
      "A):   Because English books are prohibited in India",
      "B):   Because young children learn, comprehend, and express abstract concepts most effortlessly in their mother tongue",
      "C):   Because teachers do not know other languages",
      "D):   Because foreign languages damage physical health"
    ],
    "correctAnswer": "b",
    "explanation": "Cognitive science establishes that foundational concepts are assimilated most naturally in the child's home language."
  },
  {
    "id": "c11-edu-6-mcq-15",
    "question": "In the Panchakosha model of NCF-FS, which sheath relates to mental and emotional wellbeing?",
    "options": [
      "A):   Vijnanamaya Kosha",
      "B):   Annamaya Kosha",
      "C):   Pranamaya Kosha",
      "D):   Manomaya Kosha"
    ],
    "correctAnswer": "d",
    "explanation": "Manomaya Kosha governs emotional stability, feelings, empathy, and mental health."
  },
  {
    "id": "c11-edu-6-mcq-16",
    "question": "How does the NCF-SE 2023 propose to alleviate high-stakes examination anxiety for Class 10 and 12 students?",
    "options": [
      "A):   By holding exams secretly at midnight",
      "B):   By permanently eliminating all evaluation and granting diplomas to everyone without study",
      "C):   By offering Board Examinations at least twice a year in modular formats testing core competencies",
      "D):   By doubling the length of question papers"
    ],
    "correctAnswer": "c",
    "explanation": "Holding board exams twice a year in modular formats allows students to improve their scores and reduces exam trauma."
  },
  {
    "id": "c11-edu-6-mcq-17",
    "question": "What is the primary function of the State School Standards Authority (SSSA) established under the 'Accountability' pillar?",
    "options": [
      "A):   Manufacturing school buses",
      "B):   Setting transparent minimum standards and public disclosures for both public and private schools",
      "C):   Running commercial retail shops",
      "D):   Administering university entrance tests"
    ],
    "correctAnswer": "b",
    "explanation": "The SSSA provides independent, transparent accreditation and quality monitoring for all schools in a state."
  },
  {
    "id": "c11-edu-6-mcq-18",
    "question": "In the Three-Language Formula outlined in NCF-SE 2023, what is the mandatory requirement regarding the languages chosen?",
    "options": [
      "A):   At least two of the three languages must be native to India",
      "B):   All three languages must be foreign languages",
      "C):   Only ancient Latin is permitted",
      "D):   Students cannot learn any Indian language"
    ],
    "correctAnswer": "a",
    "explanation": "NCF-SE requires that at least two of the three languages studied must be native Indian languages."
  },
  {
    "id": "c11-edu-6-mcq-19",
    "question": "Assertion (A): Over 85% of cumulative brain development occurs prior to age 6, making the Foundational Stage biologically crucial.\nReason (R): NEP 2020 formalizes ECCE through play-based Anganwadis and Balvatikas to nurture neural growth during this formative window.",
    "options": [
      "A):   (A) is false, but (R) is true",
      "B):   Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
      "C):   (A) is true, but (R) is false",
      "D):   Both (A) and (R) are true, and (R) is the correct explanation of (A)"
    ],
    "correctAnswer": "d",
    "explanation": "Neuroscientific research confirms that the early brain develops fastest before age 6, directly justifying NEP's Foundational Stage."
  },
  {
    "id": "c11-edu-6-mcq-20",
    "question": "A school replaces traditional numerical report cards with a 360-degree Holistic Progress Card (HPC) including self-evaluation, peer feedback, and project competencies. This represents a shift towards:",
    "options": [
      "A):   The narrow view of education",
      "B):   A return to colonial rote memorization",
      "C):   Competency-based, formative assessment advocated by NCF-SE",
      "D):   Totalitarian military discipline"
    ],
    "correctAnswer": "c",
    "explanation": "The 360-degree HPC embodies formative, competency-based assessment evaluating the whole child."
  },
  {
    "id": "c11-edu-6-mcq-21",
    "question": "How does NEP 2020 synthesize Mahatma Gandhi's 'Nai Talim' (Basic Education) with 21st-century technological realities?",
    "options": [
      "A):   By abolishing all computers in schools",
      "B):   By reviving hands-on craft learning through 10 bagless internship days while integrating modern coding and AI from Grade 6",
      "C):   By rejecting all agricultural education",
      "D):   By forcing students to study only British history"
    ],
    "correctAnswer": "b",
    "explanation": "NEP 2020 bridges Gandhi's dignity of manual craft with modern digital coding and experiential learning."
  },
  {
    "id": "c11-edu-6-mcq-22",
    "question": "Match the NEP 2020 Term with its correct function:\n(a) PARAKH    — (1) Indigenous play kit for ages 3–8\n(b) SSSA      — (2) Holistic Early Childhood Sheaths\n(c) Jaadui Pitara — (3) National Assessment Center\n(d) Panchakosha — (4) State School Standards Authority",
    "options": [
      "A):   (a)-(3), (b)-(1), (c)-(4), (d)-(2)",
      "B):   (a)-(1), (b)-(2), (c)-(3), (d)-(4)",
      "C):   (a)-(4), (b)-(3), (c)-(2), (d)-(1)",
      "D):   (a)-(3), (b)-(4), (c)-(1), (d)-(2)"
    ],
    "correctAnswer": "d",
    "explanation": "PARAKH: Assessment Center; SSSA: State Standards Authority; Jaadui Pitara: Play Kit; Panchakosha: 5 Sheaths."
  },
  {
    "id": "c11-edu-6-mcq-23",
    "question": "Why does NCF-FS explicitly prohibit formal written examinations and heavy printed textbooks for children aged 3 to 6?",
    "options": [
      "A):   Because premature rote testing induces stress and stunts creative, sensory, and socio-emotional play-based development",
      "B):   Because printing presses ran out of paper",
      "C):   Because teachers do not know how to grade tests",
      "D):   Because written exams are illegal for everyone in India"
    ],
    "correctAnswer": "a",
    "explanation": "Early childhood requires joyful play, sensory exploration, and dialogue; premature written testing causes severe cognitive harm."
  },
  {
    "id": "c11-edu-6-mcq-24",
    "question": "Under the 'Quality' pillar of NEP 2020, what is the mandatory requirement for in-service teachers regarding continuous professional development (CPD)?",
    "options": [
      "A):   Writing a 500-page book every month",
      "B):   Zero hours of training",
      "C):   At least 50 hours of continuous professional development per year",
      "D):   Teaching without salary for two years"
    ],
    "correctAnswer": "c",
    "explanation": "NEP 2020 mandates at least 50 hours of continuous professional development annually for every teacher and headmaster."
  },
  {
    "id": "c11-edu-6-mcq-25",
    "question": "Which of the following best summarizes the ultimate philosophical vision of NEP 2020?",
    "options": [
      "A):   Adopting 19th-century colonial British schooling across all states",
      "B):   Creating an India-centered education system that transforms the nation into a vibrant, equitable, and sustainable global knowledge superpower",
      "C):   Eliminating all schools and relying exclusively on private tutoring",
      "D):   Restricting secondary and higher education to wealthy elites"
    ],
    "correctAnswer": "b",
    "explanation": "NEP 2020 envisions an India-centered educational system transforming the nation into a global knowledge superpower."
  }
];
