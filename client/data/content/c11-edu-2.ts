// Class 11 Education Unit 2: Aims of Education (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #00C6FF (Electric Cyan / Bright Blue Gradient)

const themeColor = "#00C6FF";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Edu2HtmlOverview = `
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
  <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">📖 Quick Glossary &amp; Core Aims of Education</h2>
    <p class="text-center" style="color: #80D8FF; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Unit 2: Aims of Education (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">1. Educational Aim:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A conscious, predetermined purpose or goal that guides, organizes, and terminates educational activities. Education without an aim is like a rudderless ship drifting in a storm.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">2. Individual Aim (Sir Percy Nunn):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Focuses on the maximum self-realization, creative freedom, and complete development of an individual's innate capacities and distinct personality.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">3. Social Aim (Socialization &amp; Citizenship):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Emphasizes the subordination or alignment of individual interests to societal welfare, cultivating civic responsibility, democratic cooperation, and social efficiency.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">4. Economic / Vocational Aim ("Bread &amp; Butter"):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Aims to equip the learner with practical skills, productive knowledge, and self-reliance to earn an honest livelihood and contribute to national economic growth.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid ${themeColor}; border-radius: 6px;">
        <b style="color: ${themeColor}; font-size: 16px; display: block; margin-bottom: 4px;">5. Moral &amp; Spiritual Aim (Character Building):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The highest ideal of education according to Herbart, Gandhi, and Vivekananda &mdash; transcending material pursuits to foster ethical purity, self-control, empathy, and spiritual illumination.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 2.1 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 30px;">2.1 Meaning and Significance of Aims in Education</h2>

  <p>Human action differs fundamentally from animal instinct because human action is conscious, purposeful, and directed towards predefined objectives. In the words of <b>John Dewey</b>, <i>"An aim is a foreseen end that gives direction to activity; it influences the steps taken to reach the end."</i> Education is a deliberate and continuous endeavor; without clearly formulated aims, educational practice becomes chaotic, random, and wasteful.</p>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(i) Meaning of Educational Aims</h3>
  <p>An educational aim is not a vague wish or a utopian dream. It represents a definite target that educators, policy-makers, and learners strive to achieve through systematic instruction and curriculum. It answers three fundamental questions:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Why educate?</b> &mdash; Formulates the philosophical justification and overarching purpose.</li>
    <li><b style="color: ${themeColor};">Whom to educate?</b> &mdash; Understands the learner's biological and psychological potential.</li>
    <li><b style="color: ${themeColor};">How and towards what to educate?</b> &mdash; Determines the curriculum, pedagogical methods, and evaluation criteria.</li>
  </ul>

  <!-- INTUITIVE ANALOGY BOX -->
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 18px; margin: 20px 0;">
    <h4 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 16px;">💡 Real-World Intuitive Analogy: Why Aims Are Essential</h4>
    <p style="margin: 0; color: #CBD5E1; font-size: 15px; line-height: 1.65;">
      Imagine a magnificent ship sailing into the high seas without a rudder, compass, or designated port of destination. The captain may burn immense fuel and hoist mighty sails, but the vessel will drift aimlessly and ultimately wreck against rocks. Similarly, an educational system without clear aims exhausts time, energy, and national resources without producing cultured or capable citizens.
    </p>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 24px;">(ii) Significance &amp; Importance of Aims in Education</h3>
  <p>The formulation of clear educational aims is universally acknowledged as indispensable for the following reasons:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">1. Provides Clear Direction to Teachers and Students:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Aims act as a lighthouse. They clarify to teachers what changes must be brought about in the child's behavior and motivate students by giving them a clear vision of their life goals.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">2. Determines the Structure of Curriculum:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        The subjects taught, textbooks written, and co-curricular activities planned directly derive from the chosen aims. If the aim is vocational self-reliance, technical crafts are emphasized; if the aim is moral excellence, ethics and philosophy take precedence.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">3. Guides the Selection of Teaching Methods:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Methods of teaching are tools to reach educational aims. Democratic aims require project methods and discussions, whereas authoritarian aims favor rote recitation.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">4. Serves as a Criterion for Evaluation and Assessment:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        An educational system cannot measure its success or diagnose its shortcomings without comparing student performance against pre-set educational benchmarks.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">5. Avoids Wastage of Energy, Time, and Public Resources:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Clearly articulated national aims prevent schools from pursuing conflicting or obsolete practices, ensuring optimal utilization of educational investments.
      </p>
    </div>
  </div>

  <!-- STANDALONE DIAGRAM 1: SIGNIFICANCE OF AIMS FLOWCHART -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 198, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 16px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 380 230" style="width: 100%; max-width: 400px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Central Hub -->
        <circle cx="190" cy="115" r="46" fill="#00C6FF" stroke="#0284C7" stroke-width="2.5" />
        <text x="190" y="110" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">EDUCATIONAL</text>
        <text x="190" y="126" fill="#FFFFFF" font-size="13" font-weight="bold" text-anchor="middle">AIMS</text>
        
        <!-- Top: Curriculum -->
        <rect x="120" y="12" width="140" height="32" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2" />
        <text x="190" y="33" fill="#15803D" font-size="12" font-weight="bold" text-anchor="middle">Determines Curriculum</text>
        <line x1="190" y1="44" x2="190" y2="69" stroke="#0F172A" stroke-width="1.8" stroke-dasharray="3 3" />

        <!-- Right: Methods -->
        <rect x="250" y="99" width="120" height="32" rx="6" fill="#FFF7ED" stroke="#EA580C" stroke-width="2" />
        <text x="310" y="120" fill="#C2410C" font-size="11" font-weight="bold" text-anchor="middle">Guides Methods</text>
        <line x1="236" y1="115" x2="250" y2="115" stroke="#0F172A" stroke-width="1.8" stroke-dasharray="3 3" />

        <!-- Bottom: Evaluation -->
        <rect x="120" y="185" width="140" height="32" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="2" />
        <text x="190" y="206" fill="#7E22CE" font-size="12" font-weight="bold" text-anchor="middle">Sets Evaluation</text>
        <line x1="190" y1="161" x2="190" y2="185" stroke="#0F172A" stroke-width="1.8" stroke-dasharray="3 3" />

        <!-- Left: Direction -->
        <rect x="10" y="99" width="120" height="32" rx="6" fill="#FFF1F2" stroke="#E11D48" stroke-width="2" />
        <text x="70" y="120" fill="#BE123C" font-size="11" font-weight="bold" text-anchor="middle">Gives Direction</text>
        <line x1="130" y1="115" x2="144" y2="115" stroke="#0F172A" stroke-width="1.8" stroke-dasharray="3 3" />
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 Significance of Aims: The central guiding nucleus governing curriculum, pedagogy, direction, and evaluation.
    </div>
  </div>

  <!-- SECTION 2.2 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">2.2 Individual Aims of Education</h2>

  <p>The <b>Individual Aim</b> of education posits that the individual human being is the ultimate reality and the supreme center of educational endeavor. The state, society, and institutions exist solely to serve, nourish, and fulfill the individual &mdash; not vice versa.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Proponents &amp; Philosophical Roots</h3>
  <p>The chief champion of the modern individual aim was the renowned British educator <b style="color: ${themeColor};">Sir Percy Nunn</b> (1870–1944). In his seminal work <i>'Education: Its Data and First Principles'</i>, Nunn asserted:</p>
  
  <blockquote style="margin: 12px 0; padding: 12px 16px; background: rgba(0,0,0,0.3); border-left: 4px solid ${themeColor}; color: #FFFFFF; font-size: 15px; font-style: italic; line-height: 1.6;">
    "Nothing good enters into the human world except in and through the free activities of individual men and women... Education should secure conditions for the most complete development of individuality to enable each person to make his unique contribution to the common good."
  </blockquote>

  <p>Earlier naturalistic philosophers like <b>Jean-Jacques Rousseau</b> and child-centric educators like <b>Pestalozzi</b> and <b>Froebel</b> had strongly paved the way for this viewpoint by demanding freedom for the child's natural instincts and individual rhythm.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Arguments in Favor of Individual Aim</h3>
  <div style="display: flex; flex-direction: column; gap: 10px; margin: 12px 0;">
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #66BB6A; border-radius: 4px;">
      <b style="color: #66BB6A;">1. Biological Argument:</b> Sir Percy Nunn argued that every living organism strives for self-preservation, unique variation, and self-expression. Evolution favors individual uniqueness.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #66BB6A; border-radius: 4px;">
      <b style="color: #66BB6A;">2. Psychological Argument:</b> Modern psychology proves that no two individuals are identical. Every learner possesses unique intellect, interests, aptitudes, and learning paces that must be respected.
    </div>
    <div style="background: rgba(15, 23, 42, 0.7); padding: 10px 14px; border-left: 3px solid #66BB6A; border-radius: 4px;">
      <b style="color: #66BB6A;">3. Democratic &amp; Spiritual Argument:</b> Democracy is rooted in the sacred inviolability and dignity of the individual. Spiritually, self-realization is an intensely personal inward journey.
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Criticisms and Dangers of Extreme Individualism</h3>
  <div style="background: rgba(255, 82, 82, 0.08); border-left: 4px solid #FF5252; padding: 12px 16px; border-radius: 6px; margin: 14px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.65;">
      <b style="color: #FF5252;">Exam Warning &bull; Pitfalls of Unchecked Individualism:</b><br>
      &bull; <b>Leads to Social Anarchy:</b> If individuals pursue unrestricted self-interest without social restraint, society collapses into chaos.<br>
      &bull; <b>Breeds Selfishness:</b> An isolated child becomes egocentric, lacking civic duty, empathy, and sacrifice for the collective.<br>
      &bull; <b>Philosophically Unrealistic:</b> Human personality cannot develop in total isolation; language, culture, and intellect are born through social interaction.
    </p>
  </div>

  <!-- SECTION 2.3 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">2.3 Social Aims of Education</h2>

  <p>The <b>Social Aim</b> of education stands in sharp contrast to the individual aim. It asserts that society or the state is the supreme reality, and the individual is merely a functioning cell within the vast social organism. The primary duty of education is to mold individuals into disciplined, law-abiding, cooperative, and useful citizens.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Two Forms of Social Aim</h3>
  <p>Educational historians divide the social aim into two distinctly opposing forms:</p>

  <div style="display: grid; grid-template-columns: 1fr; gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(255, 82, 82, 0.4); border-radius: 8px; padding: 14px;">
      <h4 style="color: #FF5252; margin: 0 0 6px 0; font-size: 16px;">⚔️ 1. Extreme Social Aim (State Absolutism / Totalitarianism)</h4>
      <p style="margin: 0; color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
        Historically seen in <b>Ancient Sparta</b> and 20th-century totalitarian regimes (Nazi Germany, Fascist Italy). The individual has no private rights; the child belongs to the state from birth. Education is reduced to strict military regimentation, propaganda, and unquestioning blind obedience.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1.2px solid rgba(0, 198, 255, 0.4); border-radius: 8px; padding: 14px;">
      <h4 style="color: ${themeColor}; margin: 0 0 6px 0; font-size: 16px;">🤝 2. Democratic Social Aim (Social Efficiency &amp; Co-operation)</h4>
      <p style="margin: 0; color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
        Advocated by American philosopher <b style="color: ${themeColor};">John Dewey</b> and sociologist <b>W. C. Bagley</b>. Education aims to cultivate <i>social efficiency</i> &mdash; economic competence, civic intelligence, active tolerance, and cooperative participation in community problem-solving without crushing individual identity.
      </p>
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Arguments in Favor of Social Aim</h3>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Aristotle's Axiom:</b> <i>"Man is by nature a social animal."</i> A person outside society is either a beast or a god.</li>
    <li><b style="color: ${themeColor};">Cultural Transmission:</b> Human heritage &mdash; language, science, art, and moral norms &mdash; is created and preserved collectively by society.</li>
    <li><b style="color: ${themeColor};">Security and Interdependence:</b> Modern civilized life is completely interdependent; individual survival is impossible without collective infrastructure.</li>
  </ul>

  <!-- STANDALONE DIAGRAM 2: SYNTHESIS MATRIX -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 198, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 16px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 440px;">
      <svg viewBox="0 0 380 200" style="width: 100%; max-width: 400px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Individual Circle -->
        <circle cx="130" cy="100" r="65" fill="rgba(0, 198, 255, 0.15)" stroke="#0284C7" stroke-width="2.5" />
        <text x="90" y="93" fill="#0369A1" font-size="12" font-weight="bold" text-anchor="middle">INDIVIDUAL</text>
        <text x="90" y="110" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Self-Realization</text>

        <!-- Social Circle -->
        <circle cx="250" cy="100" r="65" fill="rgba(34, 197, 94, 0.15)" stroke="#16A34A" stroke-width="2.5" />
        <text x="290" y="93" fill="#15803D" font-size="12" font-weight="bold" text-anchor="middle">SOCIAL</text>
        <text x="290" y="110" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">Social Welfare</text>

        <!-- Overlap / Synthesis -->
        <text x="190" y="90" fill="#B45309" font-size="11.5" font-weight="bold" text-anchor="middle">SYNTHESIS</text>
        <text x="190" y="106" fill="#0F172A" font-size="9.5" font-weight="bold" text-anchor="middle">Democratic</text>
        <text x="190" y="120" fill="#0F172A" font-size="9.5" font-weight="bold" text-anchor="middle">Citizenship</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Great Synthesis: Individual development and social efficiency are two complementary sides of the same educational coin.
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(iii) Synthesis of Individual and Social Aims</h3>
  <p>Modern educational thought completely rejects the artificial antagonism between individual and social aims. As <b>Sir Percy Nunn</b> admitted in his later clarification, <i>"Individuality develops in a social environment."</i> Similarly, <b>John Dewey</b> showed that a society is rich and progressive only when its individual members are creative, free, and self-reliant. Therefore, the true democratic aim of education is a <b>harmonious synthesis</b>: developing individuality in and through service to society.</p>

  <!-- SECTION 2.4 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">2.4 Economic / Vocational Aims of Education</h2>

  <p>Commonly referred to as the <b>"Bread and Butter Aim"</b> or the <b>Vocational Aim</b>, the economic aim emphasizes that education must prepare the child to earn a respectable livelihood, achieve economic self-reliance, and make a tangible contribution to the nation's material prosperity.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Why Economic / Vocational Aim is Vital</h3>
  <p>No education can claim to be practical or humane if its graduates remain helpless parasites unable to feed themselves or their families. As <b>Mahatma Gandhi</b> forcefully noted in 1937:</p>

  <blockquote style="margin: 12px 0; padding: 12px 16px; background: rgba(0,0,0,0.3); border-left: 4px solid ${themeColor}; color: #FFFFFF; font-size: 15px; font-style: italic; line-height: 1.6;">
    "True education ought to be for the boys and girls a kind of insurance against unemployment... It should be self-supporting."
  </blockquote>

  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: ${themeColor};">Eradication of Poverty:</b> In developing nations like India, academic degrees that do not lead to employment breed mass frustration and economic dependency.</li>
    <li><b style="color: ${themeColor};">Dignity of Labor:</b> Vocational education bridges the artificial gap between intellectual work and manual craft, teaching students to respect honest physical toil.</li>
    <li><b style="color: ${themeColor};">Psychological Fulfillment:</b> Economic independence builds self-confidence, emotional stability, and self-worth in young adults.</li>
  </ul>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Limitations of Purely Economic Aims</h3>
  <div style="background: rgba(255, 145, 0, 0.08); border-left: 4px solid #FF9100; padding: 12px 16px; border-radius: 6px; margin: 14px 0;">
    <p style="margin: 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.65;">
      <b>Pitfalls of an Exclusive "Bread &amp; Butter" Focus:</b><br>
      If education is treated solely as a bread-earning machine, it degrades into narrow trade apprenticeships. It reduces human beings to commercial cogs, neglecting artistic sensitivity, ethical values, literature, and spiritual depth. As the biblical adage reminds us: <i>"Man does not live by bread alone."</i>
    </p>
  </div>

  <!-- SECTION 2.5 -->
  <h2 style="color: ${themeColor}; border-bottom: 2px solid ${themeColor}; padding-bottom: 6px; margin-top: 35px;">2.5 Moral and Spiritual Aims of Education</h2>

  <p>The <b>Moral and Spiritual Aim</b> is universally regarded by great educational philosophers as the summit and crown of all educational endeavors. While economic education fills the stomach and intellectual training sharpens the mind, moral and spiritual education ennobles the soul and creates humane character.</p>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(i) Great Thinkers on Moral and Spiritual Aims</h3>

  <div style="display: flex; flex-direction: column; gap: 14px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">🇮🇳 Mahatma Gandhi:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <i>"The end of all knowledge must be the building up of character."</i> Gandhi considered moral training through personal example, non-violence (Ahimsa), truth (Satya), and self-purification as far more foundational than literacy.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">🧘 Swami Vivekananda:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <i>"We want that education by which character is formed, strength of mind is increased, the intellect is expanded, and by which one can stand on one's own feet."</i> Vivekananda insisted that secular scientific education without spiritual values leads to destruction.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">🇩🇪 J. F. Herbart (German Philosopher):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        <i>"The one and the whole work of education may be summed up in the concept of morality."</i> To Herbart, virtue is the supreme end of all pedagogical efforts.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: ${themeColor}; font-size: 16px;">🎓 Dr. S. Radhakrishnan:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Education must foster spiritual inwardness. An educational system that trains the intellect without transforming the heart creates dangerous, clever barbarians.
      </p>
    </div>
  </div>

  <h3 style="color: ${themeColor}; margin-top: 20px;">(ii) Supreme Need in Modern Society</h3>
  <p>In the 21st-century era of rapid technological breakthroughs, consumerism, and cyber alienation, moral and spiritual education is no longer a luxury &mdash; it is an urgent survival necessity. It safeguards youth against corruption, hatred, intolerance, and moral bankruptcy by nurturing empathy, honesty, ecological sensitivity, and universal brotherhood.</p>

  <!-- NEP 2020 POLICY CONNECT BOX -->
  <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid #00C6FF; border-radius: 8px; padding: 14px 18px; margin: 25px 0;">
    <h4 style="color: #00C6FF; margin: 0 0 6px 0; font-size: 16px;">🏛️ Modern Relevance: Connect with NEP 2020 on Aims</h4>
    <p style="margin: 0; color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
      The <b>National Education Policy (NEP 2020)</b> embodies the ultimate synthesis of all these aims:
      <br>&bull; <b>Individual Aim:</b> Emphasizes flexible choice, discovering unique talent, and holistic child-centered progress cards.
      <br>&bull; <b>Economic Aim:</b> Introduces vocational integration from Grade 6 with hands-on internships (bagless days).
      <br>&bull; <b>Moral/Social Aim:</b> Embeds constitutional values, Seva (selfless service), ethics, and universal human values (UHV) directly into the national curriculum framework.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                     TAB 2: GOLDEN 25 BOARD MASTER Q&A                      */
/* -------------------------------------------------------------------------- */

export const c11Edu2HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- SECTION A HEADER -->
  <div style="background: rgba(0, 198, 255, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION A: Very Short Answer Type Questions (VSAT &bull; 1 &amp; 2 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">12 Questions &bull; Word Limit: 20–30 Words &bull; Direct Recall &amp; Board Facts</span>
  </div>

  <!-- Q1 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q1: Define an "Aim in Education".</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      An <b style="color: ${themeColor};">educational aim</b> is a conscious, predetermined goal or foreseen end that guides, organizes, motivates, and directs all teaching-learning activities in a purposeful direction.
    </div>
  </div>

  <!-- Q2 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q2: Give one popular analogy showing the danger of aimless education.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Education without clear aims is like a <b style="color: ${themeColor};">ship sailing without a rudder or compass</b>, or an architect attempting to build a palace without an architectural blueprint.
    </div>
  </div>

  <!-- Q3 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q3: Who was the chief modern champion of the Individual Aim of Education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: ${themeColor};">Sir Percy Nunn</b> (1870–1944), an eminent British educational thinker who stated that nothing good enters the human world except through the free activity of individual men and women.
    </div>
  </div>

  <!-- Q4 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q4: What is the core essence of the Individual Aim of Education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The core essence is <b style="color: ${themeColor};">maximum self-realization</b> and autonomous development of the child's unique biological, intellectual, creative, and moral capacities without unnecessary external coercion.
    </div>
  </div>

  <!-- Q5 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q5: What is the Social Aim of Education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The <b style="color: ${themeColor};">Social Aim</b> regards society/state as paramount, asserting that education should socialize the child, cultivate civic loyalty, and prepare useful, cooperative, and productive citizens.
    </div>
  </div>

  <!-- Q6 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q6: Distinguish between the Extreme Social Aim and the Democratic Social Aim.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b style="color: ${themeColor};">Extreme Social Aim:</b> Subordinates the individual totally to the state (as in Sparta or Nazi Germany).<br>
      &bull; <b style="color: ${themeColor};">Democratic Social Aim:</b> Fosters social efficiency, cooperation, and civic responsibility while respecting individual liberty (Dewey).
    </div>
  </div>

  <!-- Q7 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q7: What is meant by the "Bread and Butter Aim" of Education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      The <b style="color: ${themeColor};">"Bread and Butter Aim"</b> (Vocational Aim) emphasizes equipping learners with practical knowledge and marketable skills to earn an independent, honest living and eliminate economic helplessness.
    </div>
  </div>

  <!-- Q8 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q8: State Mahatma Gandhi's viewpoint on the Economic / Vocational Aim.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Gandhiji insisted that education must serve as an <b style="color: ${themeColor};">insurance against unemployment</b>. Through his scheme of Basic Education (Nai Talim), he advocated learning through productive village crafts.
    </div>
  </div>

  <!-- Q9 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q9: What did J. F. Herbart state regarding the supreme aim of education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Herbart stated: <b style="color: ${themeColor};">"The one and the whole work of education may be summed up in the concept of morality."</b> He placed virtue as the supreme educational aim.
    </div>
  </div>

  <!-- Q10 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q10: What is the primary difference between Moral Aim and Spiritual Aim?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &bull; <b style="color: ${themeColor};">Moral Aim:</b> Focuses on ethical conduct, social honesty, empathy, and righteousness in everyday human relationships.<br>
      &bull; <b style="color: ${themeColor};">Spiritual Aim:</b> Focuses on inward self-transcendence, cosmic unity, soul-purification, and realization of universal truth.
    </div>
  </div>

  <!-- Q11 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q11: State one major criticism of an exclusive Bread and Butter Aim.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      An exclusive vocational focus degenerates education into mere machine training, leading to commercialism and neglecting cultural, emotional, artistic, and spiritual values.
    </div>
  </div>

  <!-- Q12 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
    <h3 style="color: ${themeColor}; font-size: 16px; margin: 0 0 8px 0;">Q12: How does NEP 2020 integrate the Economic Aim with schooling?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      NEP 2020 introduces <b style="color: ${themeColor};">vocational education from Grade 6</b>, including 10 days of bagless vocational internships with local artisans, carpenters, and potters.
    </div>
  </div>

  <!-- SECTION B HEADER -->
  <div style="background: rgba(0, 198, 255, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION B: Short Answer Type Questions (SAT &bull; 4 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">8 Questions &bull; Word Limit: 80–100 Words &bull; 4 to 5 Themed Bullet Points</span>
  </div>

  <!-- Q13 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q13: Explain four reasons why aims are necessary in education.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Aims serve as the foundational cornerstone of any educational system for four key reasons:
      <br>&bull; <b style="color: ${themeColor};">Clear Direction:</b> Aims provide purposeful guidance to teachers and students, preventing educational efforts from degenerating into random, uncoordinated tasks.
      <br>&bull; <b style="color: ${themeColor};">Curriculum Construction:</b> Aims determine the selection of subjects, textbooks, and co-curricular experiences suitable for national goals.
      <br>&bull; <b style="color: ${themeColor};">Pedagogical Guidance:</b> The choice of classroom teaching techniques (lecture vs. project method) is dictated by the intended outcome.
      <br>&bull; <b style="color: ${themeColor};">Benchmarking &amp; Assessment:</b> Aims provide an objective yardstick to evaluate student progress and measure institutional effectiveness.
    </div>
  </div>

  <!-- Q14 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q14: State four arguments in support of the Individual Aim of Education.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Advocates of the individual aim justify their position on the following grounds:
      <br>&bull; <b style="color: ${themeColor};">Biological Uniqueness:</b> As Sir Percy Nunn noted, nature never creates identical duplicates; every human being has a unique biological endowment.
      <br>&bull; <b style="color: ${themeColor};">Psychological Reality:</b> Children differ fundamentally in cognitive pace, emotional temperament, and special talents, requiring personalized nurture.
      <br>&bull; <b style="color: ${themeColor};">Source of All Human Progress:</b> All historic inventions, scientific discoveries, and philosophical masterpieces originated from creative individual minds, not collective mobs.
      <br>&bull; <b style="color: ${themeColor};">Democratic Dignity:</b> Democracy recognizes the sacred sovereignty and inviolable fundamental rights of every individual citizen.
    </div>
  </div>

  <!-- Q15 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q15: What are the primary criticisms against the Individual Aim of Education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Unrestricted individual aim suffers from severe theoretical and practical flaws:
      <br>&bull; <b style="color: ${themeColor};">Danger of Social Anarchy:</b> If every individual is permitted to act entirely according to personal whim, law, order, and societal harmony crumble.
      <br>&bull; <b style="color: ${themeColor};">Breeds Selfish Egocentrism:</b> An exclusively self-centered education fails to cultivate compassion, civic duty, and self-sacrifice for the common good.
      <br>&bull; <b style="color: ${themeColor};">Denies Social Reality:</b> Man cannot grow or survive in isolation; human speech, thought, and moral values are acquired exclusively through social interaction.
      <br>&bull; <b style="color: ${themeColor};">Ignores National Needs:</b> Over-individualized education neglects urgent national developmental requirements like defense, public health, and social unity.
    </div>
  </div>

  <!-- Q16 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q16: Describe the Social Aim of Education and state four arguments in its favor.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The social aim asserts that the welfare, continuity, and progress of society take precedence over isolated individuals:
      <br>&bull; <b style="color: ${themeColor};">Man is a Social Being:</b> As Aristotle established, human life is meaningful only within organized society; solitary isolation stunts development.
      <br>&bull; <b style="color: ${themeColor};">Preservation of Culture:</b> Language, traditions, legal codes, and science are social heritages that can only be preserved and transmitted through socialized education.
      <br>&bull; <b style="color: ${themeColor};">Interdependence and Security:</b> Modern civilization rests on economic division of labor, communal peace, and collective defense.
      <br>&bull; <b style="color: ${themeColor};">Prevention of Selfish Chaos:</b> Social education disciplines raw human impulses into responsible, cooperative, and patriotic citizenship.
    </div>
  </div>

  <!-- Q17 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q17: How did John Dewey and Sir Percy Nunn reconcile the Individual and Social Aims?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Modern educational philosophy resolves the dispute between individual and social aims through a constructive synthesis:
      <br>&bull; <b style="color: ${themeColor};">Complementary Poles:</b> Individual development and social efficiency are not mutually contradictory, but two sides of the exact same shield.
      <br>&bull; <b style="color: ${themeColor};">Nunn's Resolution:</b> Sir Percy Nunn admitted that an individual's true personality can unfold and find creative fulfillment only within a rich social medium.
      <br>&bull; <b style="color: ${themeColor};">Dewey's Democratic Ideal:</b> John Dewey proved that a democratic society thrives only when its individual citizens are intellectually free, creative, and socially responsive.
      <br>&bull; <b style="color: ${themeColor};">Educational Synthesis:</b> True education develops the individual to the fullest potential so that he or she can serve society most effectively.
    </div>
  </div>

  <!-- Q18 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q18: Explain the importance and limitations of the Economic / Vocational Aim.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      The vocational "bread and butter" aim carries immense practical merit along with certain risks:
      <br>&bull; <b style="color: ${themeColor};">Merit &bull; Eradication of Poverty:</b> Equips youth with self-supporting productive skills to secure gainful employment.
      <br>&bull; <b style="color: ${themeColor};">Merit &bull; Dignity of Manual Labor:</b> Destroys colonial snobbery against physical labor and elevates the status of craftsmen.
      <br>&bull; <b style="color: ${themeColor};">Limitation &bull; Risk of Commercialism:</b> An excessive focus on moneymaking reduces schools to trade workshops and treats students as mechanical tools.
      <br>&bull; <b style="color: ${themeColor};">Limitation &bull; Neglect of Higher Values:</b> Ignores aesthetic, literary, moral, and spiritual dimensions essential for a complete, cultured human life.
    </div>
  </div>

  <!-- Q19 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q19: Explain Mahatma Gandhi's concept of Moral and Character-Building Aim.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      Mahatma Gandhi placed character-building at the pinnacle of all learning:
      <br>&bull; <b style="color: ${themeColor};">Supreme Purpose:</b> Gandhi declared that the ultimate end of all knowledge must be the building up of moral character.
      <br>&bull; <b style="color: ${themeColor};">Literacy is Not Education:</b> He argued that mere intellectual knowledge of the alphabet without purity of personal life is useless and dangerous.
      <br>&bull; <b style="color: ${themeColor};">Foundational Virtues:</b> Education must cultivate Ahimsa (non-violence), Satya (truth), self-restraint (Brahmacharya), and fearless courage.
      <br>&bull; <b style="color: ${themeColor};">Teacher's Personal Example:</b> Gandhi maintained that moral education cannot be taught through dry textbooks, but through the living moral example of the teacher.
    </div>
  </div>

  <!-- Q20 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
    <h3 style="color: ${themeColor}; font-size: 16.5px; margin: 0 0 10px 0;">Q20: Why is the Moral and Spiritual Aim considered indispensable in 21st-century education?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      In our contemporary world, moral and spiritual education is crucial for four critical reasons:
      <br>&bull; <b style="color: ${themeColor};">Restraining Technological Power:</b> Science gives human beings enormous power; without moral conscience, technology becomes a tool of destruction and nuclear warfare.
      <br>&bull; <b style="color: ${themeColor};">Combating Consumerism:</b> Counters rampant materialism, greed, and superficial display by anchoring the youth in inner peace and contentment.
      <br>&bull; <b style="color: ${themeColor};">Fostering Social Harmony:</b> Cultivates empathy, mutual tolerance, and compassion across religious, cultural, and racial divides.
      <br>&bull; <b style="color: ${themeColor};">Mental Wellbeing:</b> Provides spiritual anchor and emotional resilience against the modern epidemics of anxiety, depression, and existential vacuum.
    </div>
  </div>

  <!-- SECTION C HEADER -->
  <div style="background: rgba(0, 198, 255, 0.15); border-left: 5px solid ${themeColor}; padding: 10px 16px; border-radius: 4px; margin: 30px 0 20px 0;">
    <h2 style="color: ${themeColor}; margin: 0; font-size: 18px; font-weight: bold;">
      SECTION C: Long Answer Type Questions (LAT &bull; 6 Marks)
    </h2>
    <span style="color: #CBD5E1; font-size: 13.5px;">5 Comprehensive Board Questions &bull; 3-Tier Answer Blueprint (Intro &rarr; Core Analysis &rarr; Conclusion)</span>
  </div>

  <!-- Q21 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q21: Discuss in detail the meaning and profound significance of aims in education.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      An aim is a consciously predetermined objective that guides, organizes, and gives direction to human activity. As John Dewey stated, an aim influences every sequential step taken toward an end. In education, aims represent the philosophical ideals and practical outcomes that a society seeks to realize in its children. Without clearly defined aims, educational effort becomes wasteful, contradictory, and completely rudderless.
      <br><br>
      <b style="color: ${themeColor};">2. Core Key Dimensions &amp; Significance:</b><br>
      &bull; <b>Defines Direction:</b> Aims act as a compass for educators, giving clear purpose to classroom instructions and motivating learners with tangible milestones.<br>
      &bull; <b>Determines Curriculum Content:</b> Curriculum is merely the path to reach an aim. When aims emphasize national industrialization, vocational subjects are prioritized; when aims focus on democratic citizenship, social sciences and constitutional ethics are highlighted.<br>
      &bull; <b>Guides Selection of Teaching Methods:</b> Aims govern pedagogy. A rote-memorization aim demands dictation, while an aim of critical inquiry necessitates problem-solving, laboratory experimentation, and seminars.<br>
      &bull; <b>Establishes Assessment Standards:</b> Aims provide the criterion benchmarks against which student achievements, school effectiveness, and educational reforms are empirically evaluated.<br>
      &bull; <b>Prevents Wastage of Resources:</b> Formulated aims prevent national expenditure, instructional hours, and youth energy from being squandered on outdated practices.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      In conclusion, aims are the living soul of education. A progressive educational system must constantly revise and align its aims with constitutional values, technological revolutions, and global demands to nurture dynamic, ethical, and productive citizens.
    </div>
  </div>

  <!-- Q22 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q22: Critically examine the Individual Aim of Education. State its merits, limitations, and modern relevance.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      The Individual Aim of education asserts that the child is the supreme center of the educational process. Advocated vigorously by Sir Percy Nunn, this view maintains that the state and educational institutions exist solely to secure conditions for the complete self-expression and autonomous growth of the individual.
      <br><br>
      <b style="color: ${themeColor};">2. Comprehensive Critical Analysis:</b><br>
      &bull; <b>Merits:</b>
      <br>&nbsp;&nbsp;&bull; <i>Respect for Psychological Differences:</i> Acknowledges that every child possesses unique cognitive, creative, and emotional endowments that must not be crushed by uniform standardization.
      <br>&nbsp;&nbsp;&bull; <i>Fosters Creative Inventions:</i> All civilizational breakthroughs &mdash; from Newton's physics to Tagore's poetry &mdash; were the products of free individual genius.
      <br>&nbsp;&nbsp;&bull; <i>Democratic Foundation:</i> Upholds human dignity and freedom against authoritarian state oppression.
      <br>&bull; <b>Limitations:</b>
      <br>&nbsp;&nbsp;&bull; <i>Risk of Social Chaos:</i> Unchecked individualism leads to selfishness, lawlessness, and disregard for the collective common good.
      <br>&nbsp;&nbsp;&bull; <i>Psychological Untruth:</i> Man cannot develop in a vacuum; without human society, language, moral codes, and culture could never exist.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Modern Relevance:</b><br>
      In our modern educational landscape, the individual aim is not interpreted as isolated selfishness, but as child-centered pedagogy. Modern curriculum frameworks (like NEP 2020) endorse the individual aim by providing multi-disciplinary flexibility, recognizing varied learning styles, and promoting creative self-actualization.
    </div>
  </div>

  <!-- Q23 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q23: What is the Social Aim of Education? Distinguish between its Extreme and Democratic forms, and evaluate its significance.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      The Social Aim of education posits that society is the supreme reality, and the individual is merely a functional component of the social order. It emphasizes that human beings are fundamentally social creatures whose abilities, culture, and survival depend entirely on collective social organization.
      <br><br>
      <b style="color: ${themeColor};">2. Core Comparison &amp; Critical Dimensions:</b><br>
      &bull; <b>Extreme Social Aim (Totalitarian Model):</b> In this model (Sparta, Fascist regimes), the state is absolute. The child belongs entirely to the state. Education is reduced to regimented training, blind obedience, and military conscription. Individual rights, creative dissent, and free speech are ruthlessly extinguished.
      <br>&bull; <b>Democratic Social Aim (John Dewey Model):</b> Here, education focuses on "Social Efficiency." It cultivates cooperative living, civic intelligence, active tolerance, and economic self-reliance. It does not crush individuality; rather, it enriches the individual so that he or she may contribute constructively to a democratic society.
      <br>&bull; <b>Key Significance:</b> The democratic social aim preserves cultural heritage, promotes communal peace, fosters democratic brotherhood, and ensures social progress through collective responsibility.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      Education must reject totalitarian indoctrination while actively championing democratic social responsibility. The school must function as a miniature community where children practice democracy, teamwork, and social justice.
    </div>
  </div>

  <!-- Q24 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q24: "Individual and Social aims are not conflicting, but complementary." Discuss this synthesis with arguments.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      For centuries, educational thinkers debated whether the development of the individual or the welfare of society should be the primary aim of education. However, mature educational philosophy regards this conflict as entirely artificial. As modern educational thinkers have demonstrated, individuality and society are reciprocal and inseparable.
      <br><br>
      <b style="color: ${themeColor};">2. Core Arguments Supporting the Synthesis:</b><br>
      &bull; <b>Society Exists for the Individual:</b> Society is not an abstract mechanical idol; it is an association of living individuals. A society can be free, cultured, and progressive only when its individual members are educated, ethical, and creative.
      <br>&bull; <b>Individual Realizes Self Only in Society:</b> As Sir Percy Nunn himself conceded, an isolated human being remains a helpless wild creature. It is only in the mirror of society &mdash; through language, community, and service &mdash; that an individual discovers personal identity and moral purpose.
      <br>&bull; <b>John Dewey's Pragmatic Reconciliation:</b> Dewey proved that the highest individual development occurs when a child actively participates in the cooperative life of the social community.
      <br>&bull; <b>The Concept of Socialized Individuality:</b> True education nurtures "socialized individuality" &mdash; an autonomous, self-reliant individual whose deepest creative satisfaction comes from serving others.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      In conclusion, individual and social aims are two sides of the same coin. Education must balance personal fulfillment with public duty, cultivating individuals who are fully developed within themselves and deeply dedicated to the common welfare of humanity.
    </div>
  </div>

  <!-- Q25 -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(0, 198, 255, 0.3); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
    <h3 style="color: ${themeColor}; font-size: 17px; margin: 0 0 12px 0;">Q25: Analyze the Economic and Moral/Spiritual Aims of Education. How does NEP 2020 synthesize both for balanced national growth?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      <b style="color: ${themeColor};">1. Introduction:</b><br>
      A complete education must attend to both the physical-economic survival of the human being and the ethical-spiritual illumination of the soul. The economic aim ensures self-sufficiency and national wealth, while the moral and spiritual aim elevates character, empathy, and social justice.
      <br><br>
      <b style="color: ${themeColor};">2. Comparative Analysis:</b><br>
      &bull; <b>The Economic Aim (Bread &amp; Butter):</b> Vital for banishing poverty, eradicating youth unemployment, and promoting national self-reliance. As Gandhiji emphasized in Basic Education, learning through productive craft ensures that education acts as an insurance against unemployment. However, when pursued in isolation, it degrades into hollow materialism.
      <br>&bull; <b>The Moral &amp; Spiritual Aim (Character Building):</b> Swami Vivekananda, Herbart, and Radhakrishnan asserted that intellectual power without ethical values creates clever monsters. Moral education trains the conscience in truth, justice, non-violence, and selfless compassion.
      <br>&bull; <b>The NEP 2020 Synthesis:</b>
      <br>&nbsp;&nbsp;&bull; <i>Vocational Integration:</i> NEP 2020 mandates vocational exposure from Grade 6 (10 bagless days, craft internships) to build productive skills.
      <br>&nbsp;&nbsp;&bull; <i>Value-Based Education:</i> Concurrently embeds Universal Human Values (UHV), constitutional ethics, Seva, and environmental empathy throughout the curriculum.
      <br><br>
      <b style="color: ${themeColor};">3. Conclusion &amp; Educational Implication:</b><br>
      Neither economic wealth without morality, nor moral philosophy without economic livelihood, can sustain a vibrant civilization. NEP 2020 provides a harmonious blueprint uniting vocational competence with spiritual nobility, preparing youth for both material success and enlightened citizenship.
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: 25 SMART INTERACTIVE MCQS                   */
/* -------------------------------------------------------------------------- */

export const c11Edu2Mcqs = [
  {
    "id": "c11-edu-2-mcq-1",
    "question": "Who among the following was the foremost champion of the Individual Aim of Education in modern times?",
    "options": [
      "A):   John Dewey",
      "B):   Sir Percy Nunn",
      "C):   Aristotle",
      "D):   W. C. Bagley"
    ],
    "correctAnswer": "b",
    "explanation": "Sir Percy Nunn famously championed the Individual Aim in his book 'Education: Its Data and First Principles'."
  },
  {
    "id": "c11-edu-2-mcq-2",
    "question": "Education without a clearly defined aim is most commonly compared to:",
    "options": [
      "A):   A ship sailing without a rudder or compass",
      "B):   A locomotive moving on high-speed tracks",
      "C):   A well-equipped library",
      "D):   An artist working with paints"
    ],
    "correctAnswer": "a",
    "explanation": "Aimless education drifts aimlessly like a rudderless ship in high seas and risks total wreck."
  },
  {
    "id": "c11-edu-2-mcq-3",
    "question": "The economic aim of education is popularly known by which of the following names?",
    "options": [
      "A):   Knowledge aim",
      "B):   Complete living aim",
      "C):   Bread and butter aim",
      "D):   Cultural aim"
    ],
    "correctAnswer": "c",
    "explanation": "The vocational or economic aim is popularly called the 'Bread and Butter aim' because it enables the learner to earn a livelihood."
  },
  {
    "id": "c11-edu-2-mcq-4",
    "question": "Which ancient Greek city-state practiced the extreme social aim of education where children belonged entirely to the state?",
    "options": [
      "A):   Athens",
      "B):   Thebes",
      "C):   Corinth",
      "D):   Sparta"
    ],
    "correctAnswer": "d",
    "explanation": "In ancient Sparta, extreme state absolutism prevailed, and children were trained solely for military discipline and state service."
  },
  {
    "id": "c11-edu-2-mcq-5",
    "question": "'Man is by nature a social animal.' This famous foundational philosophical statement was made by:",
    "options": [
      "A):   Rousseau",
      "B):   Aristotle",
      "C):   Sir Percy Nunn",
      "D):   Herbart"
    ],
    "correctAnswer": "b",
    "explanation": "Aristotle declared in his Politics that man is by nature a social animal, and anyone outside society is either a beast or a god."
  },
  {
    "id": "c11-edu-2-mcq-6",
    "question": "Which German philosopher declared that 'The one and the whole work of education may be summed up in the concept of morality'?",
    "options": [
      "A):   J. F. Herbart",
      "B):   Immanuel Kant",
      "C):   Froebel",
      "D):   Hegel"
    ],
    "correctAnswer": "a",
    "explanation": "J. F. Herbart considered moral character as the single, all-encompassing goal of education."
  },
  {
    "id": "c11-edu-2-mcq-7",
    "question": "Mahatma Gandhi's scheme of Basic Education (Nai Talim) strongly supported which practical educational aim?",
    "options": [
      "A):   Extreme militarism",
      "B):   Complete isolation from village life",
      "C):   Theoretical classical literature only",
      "D):   Vocational self-reliance through productive crafts"
    ],
    "correctAnswer": "d",
    "explanation": "Gandhiji emphasized productive manual crafts (like spinning and weaving) to make education self-supporting and employment-ready."
  },
  {
    "id": "c11-edu-2-mcq-8",
    "question": "The famous educational statement 'Nothing good enters into the human world except in and through the free activities of individual men and women' belongs to:",
    "options": [
      "A):   Plato",
      "B):   Karl Marx",
      "C):   Sir Percy Nunn",
      "D):   John Dewey"
    ],
    "correctAnswer": "c",
    "explanation": "This is Sir Percy Nunn's iconic quote forming the bedrock of the Individual Aim of Education."
  },
  {
    "id": "c11-edu-2-mcq-9",
    "question": "Which of the following is the chief danger of an unrestricted, extreme individual aim of education?",
    "options": [
      "A):   Excessive state discipline",
      "B):   Selfish egocentrism and social anarchy",
      "C):   Lack of individual creativity",
      "D):   Over-emphasis on national defense"
    ],
    "correctAnswer": "b",
    "explanation": "If every individual is permitted to act purely on personal whims without social restraint, it leads to selfishness and social anarchy."
  },
  {
    "id": "c11-edu-2-mcq-10",
    "question": "According to Swami Vivekananda, the primary goal of man-making education is:",
    "options": [
      "A):   Building character and expanding the intellect",
      "B):   Accumulating vast bookish information",
      "C):   Passing examination papers with high ranks",
      "D):   Learning foreign languages exclusively"
    ],
    "correctAnswer": "a",
    "explanation": "Vivekananda championed education by which character is formed, strength of mind is increased, and intellect is expanded."
  },
  {
    "id": "c11-edu-2-mcq-11",
    "question": "How do modern educational philosophers reconcile the individual and social aims of education?",
    "options": [
      "A):   By eliminating individual liberty entirely",
      "B):   By abolishing all schools and public institutions",
      "C):   By recognizing that individuality develops in and through the social environment",
      "D):   By declaring both aims completely irreconcilable"
    ],
    "correctAnswer": "c",
    "explanation": "Individual and social aims are complementary poles: an individual develops unique gifts only through social interaction, and society prospers through cultured individuals."
  },
  {
    "id": "c11-edu-2-mcq-12",
    "question": "John Dewey supported the 'Social Aim' of education primarily in which specific form?",
    "options": [
      "A):   Totalitarian state regimentation",
      "B):   Strict military training",
      "C):   Religious theological indoctrination",
      "D):   Democratic social efficiency and cooperative community living"
    ],
    "correctAnswer": "d",
    "explanation": "Dewey championed democratic social efficiency &mdash; preparing individuals to participate creatively and cooperatively in a democratic society."
  },
  {
    "id": "c11-edu-2-mcq-13",
    "question": "What is the primary risk of reducing education entirely to the 'Bread and Butter' (economic) aim?",
    "options": [
      "A):   Education degrades into narrow commercialism, neglecting moral, cultural, and spiritual values",
      "B):   Students become incapable of earning money",
      "C):   Schools close down due to lack of students",
      "D):   Physical health of students is ruined"
    ],
    "correctAnswer": "a",
    "explanation": "An exclusive vocational focus treats humans as mere commercial cogs and ignores artistic, cultural, and moral refinement."
  },
  {
    "id": "c11-edu-2-mcq-14",
    "question": "Why are clearly defined aims indispensable for the curriculum designer?",
    "options": [
      "A):   Because aims reduce the salary of school teachers",
      "B):   Because aims determine which subjects and experiences are included or omitted",
      "C):   Because aims mandate the color of school uniforms",
      "D):   Because aims eliminate the need for written examinations"
    ],
    "correctAnswer": "b",
    "explanation": "Curriculum is the vehicle designed to reach the educational aim; what is taught directly depends on what goal is intended."
  },
  {
    "id": "c11-edu-2-mcq-15",
    "question": "The psychological argument for the Individual Aim of Education is primarily grounded in:",
    "options": [
      "A):   The existence of uniform instincts in all humans",
      "B):   The superiority of urban schools over rural schools",
      "C):   The need for standardized board examinations",
      "D):   The reality of individual differences in intellect, interests, and learning paces"
    ],
    "correctAnswer": "d",
    "explanation": "Psychology reveals that no two children have identical intelligence or learning styles, demanding respect for individual uniqueness."
  },
  {
    "id": "c11-edu-2-mcq-16",
    "question": "Which of the following best represents the relationship between moral aim and spiritual aim in education?",
    "options": [
      "A):   Moral aim is only for adults, while spiritual aim is only for infants",
      "B):   They are totally contradictory and oppose each other",
      "C):   Moral aim governs external ethical conduct in society, while spiritual aim fosters inner transcendence and soul-awakening",
      "D):   Spiritual aim is solely focused on earning high income"
    ],
    "correctAnswer": "c",
    "explanation": "Moral education deals with ethical, righteous behavior in human relationships, while spiritual education deals with inner self-realization and universal peace."
  },
  {
    "id": "c11-edu-2-mcq-17",
    "question": "Dr. S. Radhakrishnan warned that training the intellect without educating the heart and spirit produces:",
    "options": [
      "A):   Saintly scholars",
      "B):   Clever barbarians and potential social menaces",
      "C):   Selfless social workers",
      "D):   Ideal democratic leaders"
    ],
    "correctAnswer": "b",
    "explanation": "Dr. Radhakrishnan famously warned that mere intellectual sharpness without ethical values produces 'clever barbarians'."
  },
  {
    "id": "c11-edu-2-mcq-18",
    "question": "National Education Policy (NEP 2020) connects with the vocational/economic aim of education by introducing:",
    "options": [
      "A):   Vocational exposure and 10 bagless days of hands-on skill internships from Grade 6",
      "B):   Heavy tuition fees for all school students",
      "C):   Immediate military drafting of all secondary students",
      "D):   Abolishing all practical laboratories"
    ],
    "correctAnswer": "a",
    "explanation": "NEP 2020 integrates vocational learning from Grade 6 with 10 bagless days of experiential learning with local crafts and artisans."
  },
  {
    "id": "c11-edu-2-mcq-19",
    "question": "Assertion (A): Educational aims can never remain static or fixed for all times.\nReason (R): Society continuously evolves with new economic, scientific, technological, and cultural paradigms.",
    "options": [
      "A):   (A) is false, but (R) is true",
      "B):   Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
      "C):   (A) is true, but (R) is false",
      "D):   Both (A) and (R) are true, and (R) is the correct explanation of (A)"
    ],
    "correctAnswer": "d",
    "explanation": "Educational aims are dynamic because education reflects changing societal needs, scientific discoveries, and global shifts."
  },
  {
    "id": "c11-edu-2-mcq-20",
    "question": "A totalitarian regime manipulates school curriculum to instill unquestioning loyalty to the dictator and suppresses dissenting thoughts. This represents:",
    "options": [
      "A):   The democratic individual aim",
      "B):   The spiritual aim of self-realization",
      "C):   The extreme social aim (State Absolutism)",
      "D):   Dewey's social efficiency model"
    ],
    "correctAnswer": "c",
    "explanation": "Extinguishing individual free thought and molding students as passive tools of the state is the hallmark of extreme social absolutism."
  },
  {
    "id": "c11-edu-2-mcq-21",
    "question": "Consider a student who excels brilliantly in computer engineering but uses his skills to steal confidential bank data. Which essential aim of education did his schooling fail to achieve?",
    "options": [
      "A):   The economic aim",
      "B):   The moral and character-building aim",
      "C):   The intellectual aim",
      "D):   The physical health aim"
    ],
    "correctAnswer": "b",
    "explanation": "The student possessed intellectual and technical skills, but lacked moral character and ethical conscience, demonstrating a failure of moral education."
  },
  {
    "id": "c11-edu-2-mcq-22",
    "question": "How does the 'Synthesis of Individual and Social Aims' manifest in a truly democratic classroom?",
    "options": [
      "A):   Students are forced into rigid silence and military marching",
      "B):   Every student is assigned the exact same identical assignment regardless of interest",
      "C):   The teacher lectures continuously without allowing students to ask questions",
      "D):   Each child is encouraged to discover personal strengths while learning teamwork, empathy, and mutual respect"
    ],
    "correctAnswer": "d",
    "explanation": "Democratic education respects individual uniqueness while fostering cooperative social skills, civic empathy, and collaborative teamwork."
  },
  {
    "id": "c11-edu-2-mcq-23",
    "question": "Which of the following aphorisms best encapsulates the spiritual aim of education in traditional Indian philosophy?",
    "options": [
      "A):   'Sa Vidya Ya Vimuktaye' (That is knowledge which liberates)",
      "B):   'Money makes the world go round'",
      "C):   'Might is right in all spheres'",
      "D):   'Eat, drink and be merry'"
    ],
    "correctAnswer": "a",
    "explanation": "'Sa Vidya Ya Vimuktaye' expresses the spiritual aim: true knowledge liberates the soul from ignorance, narrow desires, and mental bondage."
  },
  {
    "id": "c11-edu-2-mcq-24",
    "question": "Match List-I with List-II:\n(a) Sir Percy Nunn  — (1) Social Efficiency & Democracy\n(b) John Dewey      — (2) Individual Uniqueness\n(c) J. F. Herbart   — (3) Bread and Butter through Village Crafts\n(d) Mahatma Gandhi  — (4) Moral Character as Sole End",
    "options": [
      "A):   (a)-(4), (b)-(3), (c)-(2), (d)-(1)",
      "B):   (a)-(1), (b)-(2), (c)-(3), (d)-(4)",
      "C):   (a)-(2), (b)-(1), (c)-(4), (d)-(3)",
      "D):   (a)-(2), (b)-(4), (c)-(1), (d)-(3)"
    ],
    "correctAnswer": "c",
    "explanation": "Nunn: Individual Uniqueness; Dewey: Democratic Social Efficiency; Herbart: Moral Character; Gandhi: Productive Craft Self-reliance."
  },
  {
    "id": "c11-edu-2-mcq-25",
    "question": "Why is an exclusively intellectual education without moral and vocational components considered deeply deficient for developing countries?",
    "options": [
      "A):   It is too inexpensive to implement in public schools",
      "B):   It produces educated unemployed youth who lack practical skills and social empathy",
      "C):   It causes excessive physical fatigue",
      "D):   It eliminates the need for colleges"
    ],
    "correctAnswer": "b",
    "explanation": "Mere theoretical academic degrees without vocational skills lead to mass unemployment, and without moral grounding, produce social alienation and cynicism."
  }
];
