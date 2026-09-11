// Class 12 Education Unit 6: Inclusive Education (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #FDC830 (Golden Amber / Warm Gold matching Chapter 6)

const themeColor = "#FDC830";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Edu6HtmlOverview = `
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
  <div style="background: rgba(253, 200, 48, 0.08); border: 1.5px solid \${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: \${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">🌟 Quick Glossary &amp; Core Inclusive Education Concepts</h2>
    <p class="text-center" style="color: #FDE68A; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Class 12 Unit 6: Inclusive Education (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Exceptional Child (Samuel A. Kirk):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A child who deviates significantly from the average or normal peer in physical, mental, emotional, or social characteristics to such an extent that specialized educational modifications and services are required to realize their full potential.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Positive vs. Negative Deviations:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Positive Deviations</b> include children who deviate above the norm (Gifted, Talented, High Creative Genius; IQ 130–140+). <b>Negative Deviations</b> include children who deviate below the norm or suffer functional sensory, cognitive, or physical deficits (Learning Disabled, Visually Impaired, Orthopedically Impaired).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Learning Disability (LD):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A heterogeneous group of neurological disorders affecting the brain's ability to receive, process, store, and communicate information, creating a stark discrepancy between normal intelligence and academic performance (Dyslexia, Dyscalculia, Dysgraphia).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Individualized Education Plan (IEP):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A customized, legally mandated written instructional blueprint drafted by a multidisciplinary team outlining a special-needs student's present performance, annual learning goals, accommodations, and progress metrics.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid \${themeColor}; border-radius: 6px;">
        <b style="color: \${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. RPWD Act, 2016:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Landmark legislation enacted by the Parliament of India in 2016 expanding recognized disability categories from 7 to <b>21</b>, guaranteeing free education from ages 6 to 18, and reserving 5% of seats in higher education for persons with benchmark disabilities.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 6.1 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 30px;">6.1 Exceptionality: concept of positive and negative deviations</h2>

  <p>In every human society and classroom, individual differences are a universal biological and psychological reality. When we plot traits like intelligence, sensory sharpness, or physical agility across a population, they follow the famous mathematical <b>Gaussian Normal Probability Curve (Bell Curve)</b>. Approximately 68% of children fall within the broad average range (IQ 90 to 110). However, at the extreme wings of this distribution stand children whose characteristics diverge markedly from the statistical average. These children are known in educational psychology as <b style="color: \${themeColor};">Exceptional Children</b>.</p>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(i) Definition of Exceptionality</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 18px 0;">
    <p style="margin: 0 0 10px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">1. Samuel A. Kirk (Father of Special Education):</b> <i>"The exceptional child is that child who deviates from the average or normal child in mental, physical, or social characteristics to such an extent that he requires a modification of school practices, or special educational services or supplementary instruction to develop to his maximum capacity."</i>
    </p>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">2. Crow and Crow:</b> <i>"The term exceptional child is applied to a child who deviates physically, intellectually, or socially so markedly from normal growth and development that he cannot be adequately educated in regular classes without special assistance."</i>
    </p>
  </div>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(ii) The Spectrum of Deviations: Positive vs. Negative Deviations</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Positive Deviations (The Super-Normal / Gifted &amp; Creative):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Positive deviations represent children who diverge significantly <b>above the normal statistical mean</b>. They possess extraordinary intellectual capacity (IQ 130–140+), exceptional creative imagination, superior leadership talents, or prodigal abilities in mathematics, science, or fine arts. Without enriched curriculum, they experience acute classroom boredom and behavioral frustration.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Negative Deviations (The Sub-Normal / Impaired &amp; Learning Disabled):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Negative deviations encompass children who diverge <b>below the normal mean</b> or suffer from organic physical, sensory, or neurological deficits. This category includes children with Specific Learning Disabilities (Dyslexia, Dyscalculia), intellectual disabilities (slow learners), sensory impairments (blind, deaf), orthopedically handicapped, and emotionally disturbed children who require specialized therapeutic and pedagogical accommodations.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: THE BELL CURVE OF EXCEPTIONALITY (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">THE NORMAL PROBABILITY CURVE &amp; EXCEPTIONALITY</text>

        <!-- Base Axis -->
        <line x1="30" y1="185" x2="410" y2="185" stroke="#334155" stroke-width="2" />

        <!-- Bell Curve Path -->
        <path d="M 35 183 Q 120 180 170 100 Q 220 30 270 100 Q 320 180 405 183" fill="rgba(253, 200, 48, 0.12)" stroke="#D97706" stroke-width="3" />

        <!-- Center Line: Average (IQ 90-110) -->
        <line x1="220" y1="30" x2="220" y2="185" stroke="#D97706" stroke-width="1.8" stroke-dasharray="3,3" />
        <rect x="160" y="75" width="120" height="34" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.2" />
        <text x="220" y="90" font-size="9.5" font-weight="bold" fill="#92400E" text-anchor="middle">AVERAGE POPULATION</text>
        <text x="220" y="103" font-size="8" fill="#78350F" text-anchor="middle">(~68% &bull; Normal Range)</text>

        <!-- Left Wing: Negative Deviations -->
        <rect x="25" y="125" width="115" height="46" rx="4" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.2" />
        <text x="82" y="141" font-size="8.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">NEGATIVE DEVIATIONS</text>
        <text x="82" y="154" font-size="7.5" fill="#991B1B" text-anchor="middle">Learning Disabilities</text>
        <text x="82" y="165" font-size="7.5" fill="#991B1B" text-anchor="middle">Sensory &bull; Physical Impairments</text>

        <!-- Right Wing: Positive Deviations -->
        <rect x="300" y="125" width="115" height="46" rx="4" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.2" />
        <text x="357" y="141" font-size="8.5" font-weight="bold" fill="#15803D" text-anchor="middle">POSITIVE DEVIATIONS</text>
        <text x="357" y="154" font-size="7.5" fill="#166534" text-anchor="middle">Gifted &bull; Creative Prodigies</text>
        <text x="357" y="165" font-size="7.5" fill="#166534" text-anchor="middle">IQ 130–140+ Talents</text>

        <!-- IQ Markings -->
        <text x="82" y="202" font-size="8.5" fill="#64748B" text-anchor="middle">IQ &lt; 70-85</text>
        <text x="220" y="202" font-size="9" font-weight="bold" fill="#0F172A" text-anchor="middle">IQ 90 - 110 (Mean)</text>
        <text x="357" y="202" font-size="8.5" fill="#64748B" text-anchor="middle">IQ 130 - 140+</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Continuum of Exceptionality: Children deviating substantially to the left (negative deviations) or to the right (positive deviations) require individualized modifications in regular classrooms.
    </div>
  </div>

  <!-- SECTION 6.2 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">6.2 Categories of exceptional children</h2>

  <p>The official syllabus mandates deep, focused examination of two prominent categories of exceptional learners: <b>Gifted Children</b> and children with <b>Learning Disabilities (LD)</b>:</p>

  <!-- CATEGORY 1: GIFTED CHILDREN -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(i) Gifted Children &mdash; Meaning and Educational Planning</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Renzulli's Formulation:</b> Gifted children are those who display consistently superior cognitive functioning, extraordinary speed of learning, high creative originality, and intense task commitment. In Lewis Terman's Stanford-Binet classification, children with an <b>IQ of 140 and above</b> are designated as gifted. Joseph Renzulli's <i>Three-Ring Conception</i> defines giftedness as the confluence of: (1) Above-average intellectual ability, (2) High creativity, and (3) High task commitment.
    </p>
    <p style="margin: 8px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: \${themeColor};">Salient Characteristics:</b>
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 4px 0 10px 0; color: #FFFFFF;">
      <li><b style="color: \${themeColor};">Rapid Information Processing:</b> Grasps abstract mathematical and linguistic principles with minimal drill or explanation.</li>
      <li><b style="color: \${themeColor};">Voracious Curiosity &amp; Breadth of Interest:</b> Asks probing existential and scientific questions far ahead of their chronological age.</li>
      <li><b style="color: \${themeColor};">Divergent &amp; Non-Linear Thinking:</b> Generates novel, unorthodox solutions to open-ended problems.</li>
      <li><b style="color: \${themeColor};">Perfectionism &amp; Vulnerability to Boredom:</b> Becomes deeply restless, frustrated, or disruptive if forced to undergo monotonous repetitive blackboard exercises.</li>
    </ul>

    <p style="margin: 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      <b style="color: \${themeColor};">Educational Planning for Gifted Children:</b>
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 4px 0 0 0; color: #FFFFFF;">
      <li><b style="color: \${themeColor};">1. Enrichment Programmes (Universally Recommended):</b> Keeping the child in the regular heterogeneous classroom with peers of their chronological age, but providing advanced, challenging supplementary assignments, independent research projects, creative writing opportunities, and science olympiad mentoring.</li>
      <li><b style="color: \${themeColor};">2. Acceleration (Grade Skipping):</b> Advancing the child by one or two grades ahead of their chronological age. While intellectually stimulating, it risks severe emotional and social maladjustment due to physical and emotional immaturity among older classmates.</li>
      <li><b style="color: \${themeColor};">3. Ability Grouping / Cluster Grouping:</b> Grouping gifted learners together for specialized honors seminars or advanced laboratory hours while integrating them for social and sports activities.</li>
    </ul>
  </div>

  <!-- CATEGORY 2: LEARNING DISABILITY (LD) -->
  <h3 style="color: \${themeColor}; margin-top: 24px;">(ii) Learning Disability &mdash; Concept, Types and Educational Planning (IEP)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid \${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: \${themeColor};">Concept &amp; Nature:</b> The term <i>Learning Disability</i> was introduced in 1963 by <b>Dr. Samuel A. Kirk</b>. It refers to a neurological disorder that affects one or more of the basic psychological processes involved in understanding or using language (spoken or written). Crucially, a child with LD possesses <b>normal or above-average general intelligence</b>, and their difficulties are NOT the result of visual handicaps, hearing loss, motor disabilities, or mental retardation. There is a glaring discrepancy between their high cognitive potential and their low academic achievement.
    </p>

    <h4 style="color: \${themeColor}; margin: 12px 0 6px 0; font-size: 15px;">Prominent Types of Specific Learning Disabilities:</h4>
    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #38EF7D;">1. Dyslexia (Reading Disability):</b> Severe difficulty in phonological decoding, word recognition, spelling, and reading fluency. The student frequently reverses letters (confusing 'b' and 'd', 'p' and 'q') or words (reading 'was' as 'saw').
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #00C6FF;">2. Dyscalculia (Mathematical Disability):</b> Severe difficulty in understanding numerical quantities, mathematical symbols (+, &minus;, &times;), spatial math concepts, calculating time, and recalling multiplication tables.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #F87171;">3. Dysgraphia (Writing Disability):</b> Severe impairment in fine motor coordination and spatial letter formation, resulting in illegible handwriting, inconsistent letter spacing, extreme physical hand cramps, and difficulty putting coherent thoughts onto paper.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 6px;">
        <b style="color: #A78BFA;">4. Dyspraxia (Motor Coordination Disability):</b> Developmental coordination disorder affecting gross and fine motor planning &mdash; causing clumsiness, difficulty in balancing, running, tying shoelaces, or buttoning shirts.
      </div>
    </div>

    <h4 style="color: \${themeColor}; margin: 12px 0 6px 0; font-size: 15px;">Educational Planning &mdash; Individualized Education Plan (IEP):</h4>
    <p style="margin: 0 0 6px 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      An <b style="color: \${themeColor};">Individualized Education Plan (IEP)</b> is a formal, personalized pedagogical blueprint collaboratively designed by a multidisciplinary team (class teacher, special educator, school psychologist, speech pathologist, and parents) tailored specifically to a student's diagnostic profile.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li><b style="color: \${themeColor};">Key Components of an IEP:</b>
        <br />&bull; <i>Present Level of Educational Performance (PLEP)</i>: Clear baseline diagnostic data.
        <br />&bull; <i>Measurable Annual Goals &amp; Short-term Objectives</i>: Specific realistic targets broken into incremental benchmarks.
        <br />&bull; <i>Specific Educational Accommodations</i>: Extra time during examinations (typically 20 minutes per hour), provision of a reader or scribe, oral testing alternatives, calculators, and assistive text-to-speech software.
        <br />&bull; <i>Least Restrictive Environment (LRE) Mandate</i>: Ensuring the child spends maximum possible time in the regular mainstream classroom with peers.
      </li>
    </ul>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 2: CORE TYPES OF LEARNING DISABILITIES (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">MAJOR SPECIFIC LEARNING DISABILITIES (SLD)</text>

        <!-- Dyslexia -->
        <rect x="15" y="42" width="195" height="75" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.6" />
        <text x="112" y="62" font-size="11" font-weight="bold" fill="#1D4ED8" text-anchor="middle">1. DYSLEXIA</text>
        <text x="112" y="78" font-size="8.5" fill="#1E40AF" text-anchor="middle">&bull; Reading &amp; Phonological Decoding</text>
        <text x="112" y="92" font-size="8.5" fill="#334155" text-anchor="middle">Letter reversals (b &harr; d, saw &harr; was)</text>
        <text x="112" y="106" font-size="8" fill="#475569" text-anchor="middle">Remedy: Multisensory phonics training</text>

        <!-- Dysgraphia -->
        <rect x="230" y="42" width="195" height="75" rx="6" fill="#FDF2F8" stroke="#DB2777" stroke-width="1.6" />
        <text x="327" y="62" font-size="11" font-weight="bold" fill="#BE185D" text-anchor="middle">2. DYSGRAPHIA</text>
        <text x="327" y="78" font-size="8.5" fill="#9D174D" text-anchor="middle">&bull; Writing &amp; Fine-Motor Coordination</text>
        <text x="327" y="92" font-size="8.5" fill="#334155" text-anchor="middle">Illegible handwriting &bull; Cramped grip</text>
        <text x="327" y="106" font-size="8" fill="#475569" text-anchor="middle">Remedy: Oral testing, typing, pencil grips</text>

        <!-- Dyscalculia -->
        <rect x="15" y="132" width="195" height="75" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="1.6" />
        <text x="112" y="152" font-size="11" font-weight="bold" fill="#B45309" text-anchor="middle">3. DYSCALCULIA</text>
        <text x="112" y="168" font-size="8.5" fill="#92400E" text-anchor="middle">&bull; Arithmetic &amp; Numerical Reasoning</text>
        <text x="112" y="182" font-size="8.5" fill="#334155" text-anchor="middle">Inability to compute time &bull; Tables</text>
        <text x="112" y="196" font-size="8" fill="#475569" text-anchor="middle">Remedy: Abacus, concrete math manipulatives</text>

        <!-- Dyspraxia -->
        <rect x="230" y="132" width="195" height="75" rx="6" fill="#FAF5FF" stroke="#8E2DE2" stroke-width="1.6" />
        <text x="327" y="152" font-size="11" font-weight="bold" fill="#6B21A8" text-anchor="middle">4. DYSPRAXIA</text>
        <text x="327" y="168" font-size="8.5" fill="#7E22CE" text-anchor="middle">&bull; Motor Planning &amp; Balance</text>
        <text x="327" y="182" font-size="8.5" fill="#334155" text-anchor="middle">Clumsiness &bull; Tying shoes &bull; Ball skills</text>
        <text x="327" y="196" font-size="8" fill="#475569" text-anchor="middle">Remedy: Occupational therapy &amp; gross motor drills</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Matrix of Learning Disabilities: Neurological variations in cognitive processing requiring targeted IEP accommodations, assistive technologies, and specialized multisensory pedagogies.
    </div>
  </div>

  <!-- SECTION 6.3 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">6.3 Inclusive education: concept, need and importance</h2>

  <p>For centuries, children with physical and cognitive disabilities were ostracized, segregated in isolated asylums, or relegated to special schools far from mainstream society. In 1994, the historic <b>UNESCO World Conference at Salamanca, Spain</b> proclaimed the revolutionary doctrine of <b style="color: \${themeColor};">Inclusive Education</b>:</p>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(i) Meaning of Inclusive Education</h3>
  <p>Inclusive Education is not merely about enrolling disabled children into a physical classroom. It is a fundamental philosophical restructuring of the entire educational system. <b>Inclusion asserts that the school environment must transform to accommodate the diverse needs of all learners, rather than expecting the child to fit into a rigid, standardized mold.</b> It welcomes children of all abilities, genders, ethnicities, and socio-economic backgrounds into shared neighborhood schools.</p>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(ii) Evolutionary Paradigm: Segregation &rarr; Integration &rarr; Inclusion</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #F87171; font-size: 16px;">1. Segregation (Old Historical Model):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Disabled children were deemed "abnormal" and locked away in separate, specialized residential institutions. This fostered intense social stigma, isolation, and psychological inferiority.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.4); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Integration / Mainstreaming (Transitional Model):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Disabled children were admitted into regular schools, but the burden of adapting was placed entirely on the child. The school curriculum, infrastructure, and teaching methods remained rigid; if the child failed to keep up, they were blamed and expelled.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #34D399; font-size: 16px;">3. Inclusion (Modern Universal Paradigm):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        The regular school and curriculum flexibly transform to celebrate and support human diversity. The system provides ramps, accessible bathrooms, multi-sensory teaching, peer tutoring, and personalized IEP accommodations for every unique child.
      </p>
    </div>
  </div>

  <h3 style="color: \${themeColor}; margin-top: 24px;">(iii) Need and Importance of Inclusive Education</h3>
  <ul style="padding-left: 20px; line-height: 1.8; color: #FFFFFF;">
    <li><b style="color: \${themeColor};">1. Upholding Human Rights &amp; Constitutional Mandates:</b> Education is a fundamental human right (Article 21A of the Indian Constitution and RTE Act 2009). Segregation is a violation of fundamental human dignity.</li>
    <li><b style="color: \${themeColor};">2. Psychosocial Growth for All Children:</b> Disabled children develop confidence, self-worth, and real-world social competence. Simultaneously, general classmates develop empathy, compassion, altruism, and freedom from prejudice.</li>
    <li><b style="color: \${themeColor};">3. Economic &amp; National Viability:</b> Building segregated special institutions in every village is economically impossible. Integrating special educators into regular neighborhood schools is cost-effective and democratic.</li>
  </ul>

  <!-- SECTION 6.4 -->
  <h2 style="color: \${themeColor}; border-bottom: 2px solid \${themeColor}; padding-bottom: 6px; margin-top: 35px;">6.4 An overview of RPWD Act, 2016</h2>

  <p>The <b style="color: \${themeColor};">Rights of Persons with Disabilities (RPWD) Act, 2016</b> was passed by the Parliament of India in December 2016, replacing the archaic PWD Act of 1995. This legislation harmonizes Indian national law with the <i>United Nations Convention on the Rights of Persons with Disabilities (UNCRPD)</i>, moving away from a medical/charity model to a rights-based empowerment framework:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">1. Dramatic Expansion of Recognized Disabilities (from 7 to 21):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        The 2016 Act expanded legal disability categories from 7 to <b>21 conditions</b>. For the first time, <b style="color: \${themeColor};">Specific Learning Disabilities (Dyslexia, Dysgraphia, Dyscalculia)</b>, <b>Autism Spectrum Disorder (ASD)</b>, <b>Cerebral Palsy</b>, <b>Multiple Sclerosis</b>, <b>Parkinson's Disease</b>, <b>Acid Attack Victims</b>, <b>Dwarfism</b>, and blood disorders (Thalassemia, Hemophilia, Sickle Cell Disease) received comprehensive statutory protection.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">2. Revolutionary Educational Mandates (Chapter III):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Every child with a <i>benchmark disability</i> (having not less than 40% of a certified disability) between the ages of <b>6 and 18 years</b> has the absolute statutory right to <b>free education</b> in a barrier-free neighborhood school. Government-funded institutions must provide accessible infrastructure, assistive technologies, teaching materials in Braille and Indian Sign Language, and specialized resource educators.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">3. Enhanced Reservation Quotas:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        &bull; Reservation in higher education institutions was increased from 3% to <b>5%</b>.
        <br />&bull; Reservation in government employment vacancies was increased from 3% to <b>4%</b>.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(253, 200, 48, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: \${themeColor}; font-size: 16px;">4. Severe Punitive Penalties for Discrimination:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        The Act criminalizes discrimination, public insult, and atrocities committed against disabled individuals, imposing strict penal fines and imprisonment terms ranging from 6 months up to 5 years.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 3: PARADIGMS OF EDUCATION (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(253, 200, 48, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="220" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">EVOLUTIONARY PARADIGMS OF SPECIAL &amp; INCLUSIVE EDUCATION</text>

        <!-- Stage 1: Segregation -->
        <rect x="15" y="45" width="125" height="150" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.6" />
        <text x="77" y="65" font-size="10.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">1. SEGREGATION</text>
        <text x="77" y="80" font-size="8.5" fill="#991B1B" text-anchor="middle">(Special Schools)</text>
        <text x="77" y="105" font-size="8" fill="#334155" text-anchor="middle">&bull; Isolated institutions</text>
        <text x="77" y="122" font-size="8" fill="#334155" text-anchor="middle">&bull; Social stigma</text>
        <text x="77" y="139" font-size="8" fill="#334155" text-anchor="middle">&bull; High isolation</text>
        <text x="77" y="156" font-size="8" fill="#334155" text-anchor="middle">&bull; Medical model</text>
        <rect x="25" y="168" width="105" height="20" rx="4" fill="#FEE2E2" />
        <text x="77" y="182" font-size="8" font-weight="bold" fill="#7F1D1D" text-anchor="middle">Excluded from Society</text>

        <!-- Stage 2: Integration -->
        <rect x="155" y="45" width="130" height="150" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="1.6" />
        <text x="220" y="65" font-size="10.5" font-weight="bold" fill="#B45309" text-anchor="middle">2. INTEGRATION</text>
        <text x="220" y="80" font-size="8.5" fill="#92400E" text-anchor="middle">(Mainstreaming)</text>
        <text x="220" y="105" font-size="8" fill="#334155" text-anchor="middle">&bull; Admitted to regular</text>
        <text x="220" y="122" font-size="8" fill="#334155" text-anchor="middle">&bull; Child must adapt</text>
        <text x="220" y="139" font-size="8" fill="#334155" text-anchor="middle">&bull; Rigid curriculum</text>
        <text x="220" y="156" font-size="8" fill="#334155" text-anchor="middle">&bull; Sinks or swims</text>
        <rect x="165" y="168" width="110" height="20" rx="4" fill="#FDE68A" />
        <text x="220" y="182" font-size="8" font-weight="bold" fill="#78350F" text-anchor="middle">Conditional Placement</text>

        <!-- Stage 3: Inclusion -->
        <rect x="300" y="45" width="125" height="150" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8" />
        <text x="362" y="65" font-size="10.5" font-weight="bold" fill="#15803D" text-anchor="middle">3. INCLUSION</text>
        <text x="362" y="80" font-size="8.5" fill="#166534" text-anchor="middle">(Universal Design)</text>
        <text x="362" y="105" font-size="8" fill="#334155" text-anchor="middle">&bull; School transforms</text>
        <text x="362" y="122" font-size="8" fill="#334155" text-anchor="middle">&bull; Barrier-free access</text>
        <text x="362" y="139" font-size="8" fill="#334155" text-anchor="middle">&bull; Individualized IEP</text>
        <text x="362" y="156" font-size="8" fill="#334155" text-anchor="middle">&bull; Celebrates diversity</text>
        <rect x="310" y="168" width="105" height="20" rx="4" fill="#DCFCE7" />
        <text x="362" y="182" font-size="8" font-weight="bold" fill="#14532D" text-anchor="middle">Education for ALL</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Great Paradigm Shift: From isolating segregation, through conditional integration, to transformative inclusion where the school and curriculum adapt to every child.
    </div>
  </div>

  <!-- COMPARISON TABLE BOX -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid \${themeColor}; border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; font-weight: bold; margin: 0 0 12px 0;">
      📊 Master Comparative Matrix: Special vs. Integrated vs. Inclusive Education
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #F8FAFC;">
        <thead>
          <tr style="background: rgba(253, 200, 48, 0.25); border-bottom: 2px solid \${themeColor};">
            <th style="padding: 10px; text-align: left;">Dimension</th>
            <th style="padding: 10px; text-align: left;">Special Education</th>
            <th style="padding: 10px; text-align: left;">Integrated Education</th>
            <th style="padding: 10px; text-align: left;">Inclusive Education</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Target Group</td>
            <td style="padding: 10px;">Only children with severe certified disabilities.</td>
            <td style="padding: 10px;">Mild to moderate disabled students.</td>
            <td style="padding: 10px;">ALL learners (gifted, disabled, marginalized, general).</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Location</td>
            <td style="padding: 10px;">Segregated special schools.</td>
            <td style="padding: 10px;">Regular school with separate resource room.</td>
            <td style="padding: 10px;">Same regular classroom in neighborhood school.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Core Philosophy</td>
            <td style="padding: 10px;">Charity and medical model.</td>
            <td style="padding: 10px;">Child must adjust to the school.</td>
            <td style="padding: 10px;">School must adapt to the child (Rights model).</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: \${themeColor};">Curriculum</td>
            <td style="padding: 10px;">Specialized, segregated curriculum.</td>
            <td style="padding: 10px;">Rigid standardized regular curriculum.</td>
            <td style="padding: 10px;">Flexible, differentiated curriculum with IEP accommodations.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- POLICY CONNECT BOX: NEP 2020 & SEDGs -->
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #38EF7D; border-radius: 8px; padding: 14px 16px; margin: 20px 0;">
    <h4 style="color: #38EF7D; margin: 0 0 6px 0; font-size: 16px; font-weight: bold;">
      🏛️ Educational Policy Connect: NEP 2020 on SEDGs and Inclusive Classrooms
    </h4>
    <p style="margin: 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      The <b>National Education Policy (NEP 2020)</b> dedicates an entire foundational chapter to <b>Socio-Economically Disadvantaged Groups (SEDGs)</b> and Children with Special Needs (Divyang). NEP 2020 mandates universal barrier-free infrastructure in all schools, specialized training for regular teachers in identification of learning disabilities, assistive technology integration, recruitment of special educators, and home-based education options for children with severe multiple disabilities.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: Q & A (SOLUTIONS)                          */
/* -------------------------------------------------------------------------- */

export const c12Edu6HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(253, 200, 48, 0.08); border-left: 4px solid \${themeColor}; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
    <h3 style="color: \${themeColor}; margin: 0 0 6px 0; font-size: 18px; font-weight: bold;">🎯 Golden 25 Board Examination Q &amp; A Blueprint</h3>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">
      Class 12 Unit 6: Inclusive Education (10 Marks) &bull; Strictly 12 VSAT (1 &amp; 2 Marks), 8 SAT (4 Marks), and 5 LAT (6 Marks).
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
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q1: Define an 'Exceptional Child' according to Samuel A. Kirk.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      According to <b style="color: \${themeColor};">Samuel A. Kirk</b>, an exceptional child is one who deviates from the average or normal child in mental, physical, or social characteristics to such an extent that he requires a modification of school practices, special services, or supplementary instruction to develop to his maximum capacity.
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q2: Distinguish between positive and negative deviations with one example of each.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Positive Deviations</b> diverge above the normal statistical mean in ability (e.g., <b style="color: \${themeColor};">Gifted and Creative Prodigies</b> with IQ 140+). <b style="color: \${themeColor};">Negative Deviations</b> diverge below the normal mean or possess functional deficits (e.g., <b style="color: \${themeColor};">Dyslexic or Visually Impaired children</b>).
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q3: Who is a 'Gifted Child'? What is Lewis Terman's IQ threshold for giftedness?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      A <b style="color: \${themeColor};">Gifted Child</b> possesses consistently superior cognitive capability, rapid learning rate, and high creativity. According to <b style="color: \${themeColor};">Lewis Terman</b>, a child with an <b style="color: \${themeColor};">IQ of 140 and above</b> is classified as gifted.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q4: What is meant by 'Enrichment' in the educational planning of gifted children?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Enrichment</b> means keeping the gifted child in the regular classroom with chronological peers while providing deeper, more challenging, creative learning assignments and independent research projects to prevent boredom.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q5: Define Learning Disability (LD). Who coined this term?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      A <b style="color: \${themeColor};">Learning Disability</b> is a neurological disorder that affects the brain's processing of language and academic skills despite normal intelligence. The term was coined by <b style="color: \${themeColor};">Dr. Samuel A. Kirk</b> in 1963.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q6: What is Dyslexia?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Dyslexia</b> is a specific learning disability characterized by severe difficulty in reading, word recognition, phonological decoding, and spelling (often confusing letters like 'b' and 'd').
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q7: What is Dyscalculia?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Dyscalculia</b> is a specific learning disability involving severe difficulty in comprehending mathematical concepts, numerical symbols, mental arithmetic, and calculating time.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q8: What is Dysgraphia?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Dysgraphia</b> is a specific learning disability affecting writing ability, resulting in extremely distorted, illegible handwriting, inconsistent letter sizing, cramped hand grip, and difficulty translating thoughts to paper.
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q9: What does IEP stand for? Name its two primary components.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      IEP stands for <b style="color: \${themeColor};">Individualized Education Plan</b>. Two core components are: (1) <b style="color: \${themeColor};">Present Level of Educational Performance (PLEP)</b>; (2) <b style="color: \${themeColor};">Measurable Annual Learning Goals and Accommodations</b>.
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q10: Define Inclusive Education.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: \${themeColor};">Inclusive Education</b> is a philosophy and system where all children &mdash; irrespective of physical, intellectual, socio-economic, or linguistic differences &mdash; learn together in regular neighborhood classrooms through modified teaching practices.
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q11: In which year was the RPWD Act passed by the Indian Parliament, and how many disability categories does it recognize?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: \${themeColor};">RPWD Act</b> was passed in <b style="color: \${themeColor};">December 2016</b>, expanding the recognized disability categories from 7 to <b style="color: \${themeColor};">21 conditions</b>.
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin: 18px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q12: State the educational reservation percentage mandated in higher education under the RPWD Act 2016.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The RPWD Act 2016 mandates a minimum of <b style="color: \${themeColor};">5% reservation of seats</b> in all government and government-aided higher educational institutions for persons with benchmark disabilities.
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
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q13: Explain the concept of exceptionality through the normal probability curve (positive vs. negative deviations).</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Exceptionality is scientifically understood through the normal distribution (bell curve):
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. The Statistical Norm:</b> The vast majority (~68%) cluster around the center (IQ 90–110), representing the average child who thrives under standard curriculum.</li>
        <li><b style="color: \${themeColor};">2. Positive Deviations:</b> The right tail of the curve represents children with superior traits (IQ 130–140+; Gifted, Talented, Creative Genius) who learn faster and require enrichment.</li>
        <li><b style="color: \${themeColor};">3. Negative Deviations:</b> The left tail represents children with deficits (IQ &lt; 70 or sensory/neurological handicaps) who need special accommodations.</li>
        <li><b style="color: \${themeColor};">4. Educational Need:</b> Both positive and negative deviations require individualized educational modifications, as both fail under a one-size-fits-all curriculum.</li>
      </ul>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q14: Describe four prominent intellectual and behavioral characteristics of gifted children.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Gifted students exhibit distinct cognitive and emotional hallmarks:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Rapid Cognitive Mastery:</b> They learn new concepts at extraordinary speed, retaining vast amounts of information with minimal repetition.</li>
        <li><b style="color: \${themeColor};">2. Divergent &amp; Abstract Thinking:</b> They excel in abstract reasoning, seeing hidden connections, and proposing creative solutions to complex problems.</li>
        <li><b style="color: \${themeColor};">3. Insatiable Curiosity:</b> They demonstrate an intense passion for learning, asking profound, probing questions far beyond their syllabus.</li>
        <li><b style="color: \${themeColor};">4. High Task Commitment &amp; Perfectionism:</b> When intrigued by a topic, they display relentless focus (Renzulli's task commitment), though monotonous drills cause severe restlessness.</li>
      </ul>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q15: Discuss the educational strategies suitable for gifted students (Acceleration vs. Enrichment).</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Educators employ two primary administrative strategies for gifted children:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Acceleration (Double Promotion):</b> Skipping grades or early admission to higher classes. While keeping them intellectually challenged, it risks emotional and social alienation from physically older peers.</li>
        <li><b style="color: \${themeColor};">2. Enrichment (Pedagogical Broadening):</b> Keeping the child in their natural age-grade while providing deeper, advanced curriculum materials, independent research, and creative projects.</li>
        <li><b style="color: \${themeColor};">3. Cluster &amp; Ability Grouping:</b> Grouping gifted peers for honors seminars while maintaining regular social integration for physical sports and arts.</li>
        <li><b style="color: \${themeColor};">4. Expert Consensus:</b> Enrichment is universally preferred because it safeguards socio-emotional maturity while nurturing intellectual gifts.</li>
      </ul>
    </div>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q16: Explain four major types of Specific Learning Disabilities commonly observed in schools.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Learning disabilities are neurological variations in cognitive processing:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Dyslexia:</b> Impairment in reading and phonological decoding, causing letter inversions (b/d, p/q) and slow, halting reading comprehension.</li>
        <li><b style="color: \${themeColor};">2. Dysgraphia:</b> Impairment in handwriting and fine motor coordination, resulting in cramped writing posture, illegible scripts, and disorganized paper layout.</li>
        <li><b style="color: \${themeColor};">3. Dyscalculia:</b> Impairment in mathematical operations, recognizing math symbols, calculating time, and remembering number facts.</li>
        <li><b style="color: \${themeColor};">4. Dyspraxia:</b> Developmental coordination disorder affecting motor planning, resulting in physical clumsiness and difficulty in balancing or tying shoelaces.</li>
      </ul>
    </div>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q17: Describe the meaning, purpose, and multidisciplinary structure of an Individualized Education Plan (IEP).</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      The IEP is the cornerstone of special needs education:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Definition &amp; Purpose:</b> A personalized, written educational contract designed to meet the unique learning needs of a child with disabilities, ensuring measurable academic progress.</li>
        <li><b style="color: \${themeColor};">2. Multidisciplinary Team:</b> Collaboratively created by the regular teacher, special educator, school psychologist, speech/occupational therapist, and the child's parents.</li>
        <li><b style="color: \${themeColor};">3. Core Contents:</b> Baseline performance data (PLEP), SMART annual goals, specialized instructional materials, and testing accommodations (extra time, scribes).</li>
        <li><b style="color: \${themeColor};">4. Periodic Review:</b> Mandates quarterly evaluation and annual formal revision to adapt to the child's evolving mastery.</li>
      </ul>
    </div>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q18: Analyze the social, psychological, and constitutional need for Inclusive Education.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Inclusive education is an imperative on multiple fronts:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Constitutional Justice:</b> Article 21A, the RTE Act 2009, and the RPWD Act 2016 guarantee equal, non-discriminatory educational access for all children.</li>
        <li><b style="color: \${themeColor};">2. Eradication of Psychological Stigma:</b> Segregation breeds crippling inferiority complexes; inclusion builds self-esteem and social belongingness.</li>
        <li><b style="color: \${themeColor};">3. Fostering Empathy in General Peers:</b> Typical children who learn alongside disabled peers develop genuine empathy, compassion, and respect for diversity.</li>
        <li><b style="color: \${themeColor};">4. National Democratic Integration:</b> An inclusive school prepares children for an inclusive, democratic adult society.</li>
      </ul>
    </div>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q19: Trace the evolutionary transition from Segregation to Integration to Inclusion.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Special education has evolved through three distinct paradigms:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Segregation (19th &amp; early 20th Century):</b> Disabled children were placed in isolated special institutions, based on a charity/medical model viewing them as broken.</li>
        <li><b style="color: \${themeColor};">2. Integration (Late 20th Century):</b> Disabled children entered regular schools, but the burden of fitting into a rigid system fell on the child. If they failed, they were removed.</li>
        <li><b style="color: \${themeColor};">3. Inclusion (Post-Salamanca 1994 to Present):</b> The entire regular school transforms its curriculum, physical architecture, and pedagogy to welcome and support every unique learner.</li>
      </ul>
    </div>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0;">
    <h3 style="color: \${themeColor}; font-size: 16px; margin-bottom: 6px;">Q20: Highlight four key educational provisions of the Rights of Persons with Disabilities (RPWD) Act, 2016.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Chapter III of the RPWD Act 2016 outlines transformative educational mandates:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: \${themeColor};">1. Free Education from 6 to 18 Years:</b> Guarantees free schooling in appropriate neighborhood schools for children with benchmark disabilities.</li>
        <li><b style="color: \${themeColor};">2. Barrier-Free Accessibility:</b> Mandates accessible school campuses, ramps, modified toilets, and transport facilities.</li>
        <li><b style="color: \${themeColor};">3. Provision of Assistive Materials:</b> Mandates free provision of textbooks, learning materials in Braille, audio formats, and Indian Sign Language.</li>
        <li><b style="color: \${themeColor};">4. 5% Higher Education Quota:</b> Reserves a minimum of 5% seats in all government higher education institutions for students with benchmark disabilities.</li>
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
      Q21: Comprehensive Exposition of Exceptional Children: Concept of Positive and Negative Deviations, Identification, and Classroom Provisions.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Concept of Exceptionality:</b><br />
      An exceptional child deviates from average peers in physical, intellectual, emotional, or social traits to such a degree that regular school programs must be modified (Samuel A. Kirk). Grounded in the Gaussian Normal Curve, exceptionality encompasses both positive deviations (above the mean) and negative deviations (below the mean).</p>

      <p><b style="color: \${themeColor};">II. Detailed Analysis of Deviations:</b><br />
      (1) <b style="color: \${themeColor};">Positive Deviations (Gifted &amp; Creative):</b> Children with IQ 130–140+, insatiable curiosity, and divergent problem-solving skills. They require enrichment programs, creative projects, and honors curricula to prevent disengagement.<br />
      (2) <b style="color: \${themeColor};">Negative Deviations (Disabilities &amp; Deficits):</b> Children with Learning Disabilities (Dyslexia, Dyscalculia), sensory impairments (blindness, deafness), and orthopedically impaired children who require barrier-free architecture, assistive technologies, and personalized IEP accommodations.</p>

      <p><b style="color: \${themeColor};">III. Pedagogical Conclusion:</b><br />
      Exceptionality is not an incurable handicap; it is a manifestation of human neuro-diversity. The modern teacher must celebrate this diversity through differentiated instructional design.</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q22: Critical Analysis of Learning Disabilities: Neurological Basis, Detailed Typology, and Step-by-Step IEP Formulation.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Meaning &amp; Neurological Nature:</b><br />
      Coined by Dr. Samuel Kirk in 1963, a Learning Disability (LD) is a neurodevelopmental disorder affecting how the brain receives, stores, and processes information. Crucially, children with LD possess normal or superior IQ; their academic failure is caused by intrinsic processing deficits, not intellectual subnormality or sensory handicaps.</p>

      <p><b style="color: \${themeColor};">II. The Four Core Typologies:</b><br />
      (1) <b style="color: \${themeColor};">Dyslexia:</b> Reading/decoding deficits, letter inversions (b/d, p/q), word reversals.<br />
      (2) <b style="color: \${themeColor};">Dysgraphia:</b> Motor-writing deficits, cramped pencil grip, illegible handwriting.<br />
      (3) <b style="color: \${themeColor};">Dyscalculia:</b> Arithmetic reasoning deficits, inability to comprehend numbers and time.<br />
      (4) <b style="color: \${themeColor};">Dyspraxia:</b> Motor planning impairment causing physical clumsiness.</p>

      <p><b style="color: \${themeColor};">III. Step-by-Step IEP Formulation:</b><br />
      (1) Comprehensive diagnostic assessment by a multidisciplinary team $\to$ (2) Documenting the Present Level of Educational Performance (PLEP) $\to$ (3) Establishing SMART annual academic and behavioral goals $\to$ (4) Designing specific accommodations (extra test time, scribes, oral exams, assistive text-to-speech) $\to$ (5) Quarterly progress tracking and annual revision.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q23: Inclusive Education as a Global Paradigm: Concept, Need, Importance, and Systemic Barriers in Indian Schools.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. The Inclusive Philosophy:</b><br />
      Formalized at the 1994 UNESCO Salamanca Conference, Inclusive Education asserts that all children &mdash; regardless of physical, cognitive, or social conditions &mdash; have the right to learn in shared mainstream classrooms. It shifts the paradigm: the school must adapt to the child, rather than the child adapting to the school.</p>

      <p><b style="color: \${themeColor};">II. Threefold Need and Importance:</b><br />
      (1) <b style="color: \${themeColor};">Constitutional &amp; Legal:</b> Enforces Right to Education (Article 21A) and the RPWD Act 2016.<br />
      (2) <b style="color: \${themeColor};">Psychosocial:</b> Eliminates social segregation, builds self-worth in disabled youth, and nurtures empathy and altruism in typical classmates.<br />
      (3) <b style="color: \${themeColor};">Economic:</b> Utilizing regular neighborhood schools with roving special educators is vastly more cost-effective than isolated special schools.</p>

      <p><b style="color: \${themeColor};">III. Systemic Barriers in Indian Schools:</b><br />
      Infrastructural hurdles (lack of ramps and accessible toilets), massive teacher shortages, absence of special educators, rigid exam-centric pedagogy, and social prejudice. NEP 2020 actively addresses these gaps.</p>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q24: Exhaustive Overview of the Rights of Persons with Disabilities (RPWD) Act, 2016.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">I. Legislative Background:</b><br />
      Enacted in December 2016 to fulfill India's commitments under the UNCRPD, replacing the PWD Act 1995. It shifts from a patronizing charity approach to an enforceable, rights-based empowerment model.</p>

      <p><b style="color: \${themeColor};">II. Landmark Provisions:</b><br />
      (1) <b style="color: \${themeColor};">Expansion to 21 Disability Categories:</b> Includes Specific Learning Disabilities, Autism Spectrum Disorder, Cerebral Palsy, Multiple Sclerosis, Dwarfism, Acid Attack Victims, and blood disorders (Thalassemia, Hemophilia).<br />
      (2) <b style="color: \${themeColor};">Educational Rights (Chapter III):</b> Free, barrier-free education for children with benchmark disabilities (40%+) from ages 6 to 18; provision of accessible learning materials in Braille and sign language.<br />
      (3) <b style="color: \${themeColor};">Reservation Quotas:</b> 5% reservation in higher education institutions and 4% reservation in government jobs.<br />
      (4) <b style="color: \${themeColor};">Penal Provisions:</b> Imposes fines and imprisonment (up to 5 years) for discrimination, humiliation, or atrocities against persons with disabilities.</p>
    </div>
  </div>

  <!-- Q25 -->
  <div style="margin: 22px 0;">
    <h3 style="color: \${themeColor}; font-size: 17px; margin-bottom: 8px;">
      Q25: Real-World Classroom Inclusion Case Study: Diagnostic Evaluation and 4-Tier Inclusive Remediation Blueprint.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: \${themeColor};">Case Profile:</b><br />
      <i>Rohan, a 10-year-old Grade 5 student, is verbally articulate, highly imaginative in storytelling, and excels in mental science quizzes. However, during English reading, he stumbles, confuses 'b' with 'd', and reads 'saw' as 'was'. His handwriting is messy, and he was recently labeled 'lazy and careless' by his language teacher, leading to teasing from classmates. Rohan now feigns morning illness to avoid school.</i></p>

      <p><b style="color: \${themeColor};">I. Diagnostic Evaluation:</b><br />
      (1) <b style="color: \${themeColor};">Condition:</b> Classic symptoms of <b>Developmental Dyslexia</b> (specific phonological reading deficit with normal/above-normal verbal IQ).<br />
      (2) <b style="color: \${themeColor};">Secondary Psychological Injury:</b> Severe school anxiety, avoidance behaviors, and loss of self-esteem triggered by teacher labeling and peer bullying.</p>

      <p><b style="color: \${themeColor};">II. Four-Tier Inclusive Remediation Blueprint:</b><br />
      (1) <b style="color: \${themeColor};">Sensitization &amp; Peer Anti-Bullying:</b> The school counselor conducts a sensitivity session, immediately eradicating derogatory labels and establishing a peer-buddy system.<br />
      (2) <b style="color: \${themeColor};">Multisensory Phonics Training:</b> Special educator deploys Orton-Gillingham multisensory techniques (tracing sand-letters while vocalizing sounds, color-coded vowels).<br />
      (3) <b style="color: \${themeColor};">Formal IEP Accommodations:</b> Providing 20 minutes extra time per hour in exams, permitting oral examination alternatives, and using assistive text-to-speech software.<br />
      (4) <b style="color: \${themeColor};">Celebrating Strengths:</b> Giving Rohan leadership in science debates and creative drama, restoring his self-worth and joy in schooling.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS (INTERACTIVE)                         */
/* -------------------------------------------------------------------------- */

export const c12Edu6Mcqs = [
  // TIER 1: EASY RECALL & DEFINITIONS (Q1 to Q10)
  {
    id: "c12-edu-6-mcq-1",
    question: "Who is universally recognized in educational psychology as the 'Father of Special Education'?",
    options: [
      "A):   Samuel A. Kirk",
      "B):   Jean Piaget",
      "C):   Sigmund Freud",
      "D):   B. F. Skinner",
    ],
    correctAnswer: "a",
    explanation: "Dr. Samuel A. Kirk is widely acclaimed as the father of special education and coined the term 'Learning Disability' in 1963.",
  },
  {
    id: "c12-edu-6-mcq-2",
    question: "According to Lewis Terman's Stanford-Binet intelligence scale, what is the minimum IQ required to be classified as 'Gifted'?",
    options: [
      "A):   IQ 90",
      "B):   IQ 110",
      "C):   IQ 140",
      "D):   IQ 70",
    ],
    correctAnswer: "c",
    explanation: "In Terman's classic classification, children with an IQ of 140 and above are classified as Gifted / Genius.",
  },
  {
    id: "c12-edu-6-mcq-3",
    question: "Which of the following is categorized as a 'Positive Deviation' on the normal distribution curve?",
    options: [
      "A):   Dyslexic child",
      "B):   Gifted and creative prodigy",
      "C):   Slow learner",
      "D):   Hearing impaired child",
    ],
    correctAnswer: "b",
    explanation: "Positive deviations represent children who deviate above the statistical norm in intelligence, talent, or creativity.",
  },
  {
    id: "c12-edu-6-mcq-4",
    question: "A specific learning disability characterized primarily by severe difficulty in reading and word recognition is called:",
    options: [
      "A):   Dyscalculia",
      "B):   Dysgraphia",
      "C):   Dyslexia",
      "D):   Dyspraxia",
    ],
    correctAnswer: "c",
    explanation: "Dyslexia is a neurodevelopmental reading disability affecting phonological decoding and fluent word recognition.",
  },
  {
    id: "c12-edu-6-mcq-5",
    question: "A severe learning disability involving difficulty in understanding numerical quantities and arithmetic operations is called:",
    options: [
      "A):   Dysgraphia",
      "B):   Dyscalculia",
      "C):   Dyslexia",
      "D):   Aphasia",
    ],
    correctAnswer: "b",
    explanation: "Dyscalculia is a specific mathematical learning disability affecting number comprehension and arithmetic calculation.",
  },
  {
    id: "c12-edu-6-mcq-6",
    question: "What does the educational acronym IEP stand for?",
    options: [
      "A):   Integrated Elementary Pedagogy",
      "B):   Individualized Education Plan",
      "C):   Institutional Evaluation Program",
      "D):   International Educational Policy",
    ],
    correctAnswer: "b",
    explanation: "IEP stands for Individualized Education Plan, a legally mandated tailored instructional plan for students with special needs.",
  },
  {
    id: "c12-edu-6-mcq-7",
    question: "In which year was the landmark Rights of Persons with Disabilities (RPWD) Act passed by the Parliament of India?",
    options: [
      "A):   1995",
      "B):   2009",
      "C):   2016",
      "D):   2020",
    ],
    correctAnswer: "c",
    explanation: "The RPWD Act was passed in December 2016, replacing the earlier PWD Act of 1995.",
  },
  {
    id: "c12-edu-6-mcq-8",
    question: "How many disability categories are officially recognized under the RPWD Act, 2016?",
    options: [
      "A):   7 categories",
      "B):   14 categories",
      "C):   21 categories",
      "D):   28 categories",
    ],
    correctAnswer: "c",
    explanation: "The RPWD Act 2016 significantly expanded the recognized categories of disability from 7 to 21 conditions.",
  },
  {
    id: "c12-edu-6-mcq-9",
    question: "Under the RPWD Act 2016, children with benchmark disabilities have the statutory right to free education up to the age of:",
    options: [
      "A):   14 years",
      "B):   18 years",
      "C):   21 years",
      "D):   10 years",
    ],
    correctAnswer: "b",
    explanation: "Unlike the general RTE Act (up to 14 years), the RPWD Act 2016 extends free education for children with benchmark disabilities up to 18 years.",
  },
  {
    id: "c12-edu-6-mcq-10",
    question: "The historic 1994 World Conference that proclaimed the global mandate for Inclusive Education was held under UNESCO auspices at:",
    options: [
      "A):   Geneva, Switzerland",
      "B):   Salamanca, Spain",
      "C):   Paris, France",
      "D):   New York, USA",
    ],
    correctAnswer: "b",
    explanation: "The UNESCO World Conference on Special Needs Education was held in Salamanca, Spain in 1994, issuing the historic Salamanca Statement.",
  },

  // TIER 2: MODERATE CONCEPT APPLICATIONS (Q11 to Q18)
  {
    id: "c12-edu-6-mcq-11",
    question: "A 9-year-old student with normal intelligence consistently reverses letters while writing, turning 'b' into 'd' and 'saw' into 'was'. This student displays classic signs of:",
    options: [
      "A):   Mental Retardation",
      "B):   Dyslexia",
      "C):   Hearing Impairment",
      "D):   Giftedness",
    ],
    correctAnswer: "b",
    explanation: "Letter reversals, phonetic confusion, and word inversions are hallmark diagnostic indicators of Dyslexia in school children.",
  },
  {
    id: "c12-edu-6-mcq-12",
    question: "Why is 'Enrichment' widely preferred over 'Acceleration' (grade skipping) for gifted students by modern educational psychologists?",
    options: [
      "A):   Because acceleration is illegal",
      "B):   Because enrichment keeps gifted children with their chronological age peers, preventing social and emotional maladjustment",
      "C):   Because gifted children have low intelligence",
      "D):   Because enrichment requires no teachers",
    ],
    correctAnswer: "b",
    explanation: "Acceleration can cause severe socio-emotional friction when a young child is placed with older peers; enrichment nurtures intellect safely within age cohort.",
  },
  {
    id: "c12-edu-6-mcq-13",
    question: "Which of the following is a primary characteristic of a child with a Specific Learning Disability (LD)?",
    options: [
      "A):   Low general intelligence (IQ below 70)",
      "B):   Severe discrepancy between normal/above-normal intelligence and actual academic performance",
      "C):   Severe sensory blindness",
      "D):   Total inability to speak",
    ],
    correctAnswer: "b",
    explanation: "A child with LD possesses normal or superior IQ, but displays an unexpected, acute discrepancy in specific academic processing areas.",
  },
  {
    id: "c12-edu-6-mcq-14",
    question: "What is the key philosophical difference between 'Integrated Education' and 'Inclusive Education'?",
    options: [
      "A):   In integrated education the child must adapt to the school, whereas in inclusive education the school and curriculum adapt to the child",
      "B):   Integrated education is only for gifted children",
      "C):   Inclusive education is conducted exclusively online",
      "D):   Integrated education requires no exams",
    ],
    correctAnswer: "a",
    explanation: "Integration demands that the child fit into an unmodified system; Inclusion transforms the school, curriculum, and pedagogy to accommodate every unique child.",
  },
  {
    id: "c12-edu-6-mcq-15",
    question: "A student who exhibits extremely distorted, cramped handwriting and finds it agonizing to copy notes from the blackboard is experiencing:",
    options: [
      "A):   Dysgraphia",
      "B):   Dyscalculia",
      "C):   Autism",
      "D):   Down Syndrome",
    ],
    correctAnswer: "a",
    explanation: "Dysgraphia is a specific learning disability affecting fine motor mechanics and spatial layout of written expression.",
  },
  {
    id: "c12-edu-6-mcq-16",
    question: "According to Joseph Renzulli's Three-Ring Conception, Giftedness is the intersection of which three components?",
    options: [
      "A):   Wealth, Health, and Luck",
      "B):   Above-Average Ability, High Creativity, and High Task Commitment",
      "C):   Memory, Obedience, and Discipline",
      "D):   Speed, Height, and Strength",
    ],
    correctAnswer: "b",
    explanation: "Renzulli's model defines giftedness as the interaction of above-average ability, high creativity, and high task commitment.",
  },
  {
    id: "c12-edu-6-mcq-17",
    question: "What percentage of seats is reserved for persons with benchmark disabilities in government higher educational institutions under the RPWD Act 2016?",
    options: [
      "A):   3%",
      "B):   4%",
      "C):   5%",
      "D):   10%",
    ],
    correctAnswer: "c",
    explanation: "The RPWD Act 2016 increased higher education reservation from 3% to 5% for individuals with benchmark disabilities.",
  },
  {
    id: "c12-edu-6-mcq-18",
    question: "Which of the following is a mandated accommodation in an Individualized Education Plan (IEP) for a dyslexic student during board examinations?",
    options: [
      "A):   Giving zero marks for spelling errors and providing extra compensatory examination time",
      "B):   Expelling the student from the examination center",
      "C):   Doubling the syllabus for the student",
      "D):   Forbidding the use of oral questions",
    ],
    correctAnswer: "a",
    explanation: "Board regulations mandate providing compensatory time (typically 20 mins/hour), ignoring spelling errors in non-language subjects, and allowing scribes/readers.",
  },

  // TIER 3: ADVANCED ANALYTICAL & CASE-BASED SCENARIOS (Q19 to Q25)
  {
    id: "c12-edu-6-mcq-19",
    question: "A teacher observes that a Grade 6 child is outstanding at verbal discussions, but when asked to solve 34 &minus; 18 on paper, the child cannot comprehend the minus sign or borrowing concept. This child should be evaluated for:",
    options: [
      "A):   Dyscalculia",
      "B):   Dysgraphia",
      "C):   Emotional Maladjustment",
      "D):   Conduct Disorder",
    ],
    correctAnswer: "a",
    explanation: "Severe, isolated inability to process arithmetic symbols and mathematical borrowing despite normal verbal reasoning indicates Dyscalculia.",
  },
  {
    id: "c12-edu-6-mcq-20",
    question: "Why does the National Education Policy (NEP 2020) emphasize the 'Least Restrictive Environment' (LRE) for children with special needs?",
    options: [
      "A):   To minimize school construction costs",
      "B):   To ensure that special-needs children are educated to the maximum extent possible alongside their non-disabled peers",
      "C):   To remove teachers from classrooms",
      "D):   To convert schools into hospitals",
    ],
    correctAnswer: "b",
    explanation: "The LRE mandate ensures that children with disabilities are educated alongside general peers rather than being segregated unnecessarily.",
  },
  {
    id: "c12-edu-6-mcq-21",
    question: "A regular classroom contains a gifted student, a dyslexic student, a hearing-impaired student with a hearing aid, and average learners. How should the teacher design the lesson?",
    options: [
      "A):   Lecture continuously at high speed to challenge the gifted child",
      "B):   Apply Universal Design for Learning (UDL) with differentiated multi-sensory materials, visual aids, and peer collaboration",
      "C):   Ask the disabled students to sit in the library during class",
      "D):   Teach strictly from one textbook without variation",
    ],
    correctAnswer: "b",
    explanation: "Universal Design for Learning (UDL) provides multiple means of representation, expression, and engagement to accommodate all diverse learners simultaneously.",
  },
  {
    id: "c12-edu-6-mcq-22",
    question: "Which of the following conditions was newly included as a recognized disability under the RPWD Act, 2016 for the first time in India?",
    options: [
      "A):   Blindness",
      "B):   Specific Learning Disabilities and Autism Spectrum Disorder",
      "C):   Locomotor Disability",
      "D):   Leprosy Cured",
    ],
    correctAnswer: "b",
    explanation: "The RPWD Act 2016 officially recognized Specific Learning Disabilities (SLD) and Autism Spectrum Disorder (ASD) for statutory protection for the first time.",
  },
  {
    id: "c12-edu-6-mcq-23",
    question: "An adolescent with cerebral palsy wishes to join a mainstream government school, but the principal denies admission citing the lack of wheelchair ramps. Under the RPWD Act 2016, this denial is:",
    options: [
      "A):   Completely lawful and encouraged",
      "B):   A punishable illegal act of discrimination carrying penal fines and imprisonment",
      "C):   An optional decision left to the principal's mood",
      "D):   Permitted if the student pays double tuition fee",
    ],
    correctAnswer: "b",
    explanation: "Denying admission to a disabled student is a direct violation of Chapter III of the RPWD Act 2016, punishable by law.",
  },
  {
    id: "c12-edu-6-mcq-24",
    question: "What is the primary role of general non-disabled peers in an inclusive educational classroom?",
    options: [
      "A):   To ignore students with disabilities completely",
      "B):   To act as peer buddies, collaborative learning partners, and agents of empathy and inclusion",
      "C):   To report disabled classmates to the principal",
      "D):   To take tests on behalf of special-needs students",
    ],
    correctAnswer: "b",
    explanation: "Peer tutoring and peer buddy systems build collaborative academic support and nurture compassionate social attitudes.",
  },
  {
    id: "c12-edu-6-mcq-25",
    question: "Why is a multidisciplinary team necessary when drafting an Individualized Education Plan (IEP)?",
    options: [
      "A):   Because no single professional possesses the complete medical, psychological, and pedagogical expertise required to assess and support a child's diverse needs",
      "B):   Because government rules require minimum ten signatures on every paper",
      "C):   To increase the fee paid by parents",
      "D):   To delay the implementation of special education",
    ],
    correctAnswer: "a",
    explanation: "An effective IEP integrates insights from educators, psychologists, therapists, and parents to address all cognitive, sensory, and emotional dimensions.",
  },
];
