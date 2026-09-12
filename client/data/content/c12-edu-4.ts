// Class 12 Education Unit 4: Human Growth and Development (Official Syllabus - 10 Marks)
// Comprehensive Deep Reference Textbook & Golden 25 Board Examination Blueprint
// Theme Color: #8E2DE2 (Violet Purple matching Chapter 4)

const themeColor = "#8E2DE2";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c12Edu4HtmlOverview = `
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
  <div style="background: rgba(142, 45, 226, 0.08); border: 1.5px solid #8E2DE2; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #8E2DE2; font-weight: bold; margin: 0 0 6px 0; font-size: 20px; font-weight: bold;">🌱 Quick Glossary &amp; Core Developmental Concepts</h2>
    <p class="text-center" style="color: #D8B4FE; margin: 0 0 16px 0; font-size: 14.5px;">Essential Terminologies &bull; Class 12 Unit 4: Human Growth and Development (10 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">1. Growth vs. Development:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Growth</b> refers to quantitative, purely anatomical, and cellular increases in physical size (height, weight, body girth) that terminate at maturity. <b>Development</b> is a lifelong, qualitative and quantitative progressive sequence of functional, cognitive, emotional, and social transformations from conception to death (womb to tomb).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">2. Cephalocaudal vs. Proximodistal Sequences:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;"><b>Cephalocaudal</b> dictates that development proceeds from head to toe (controlling head before legs). <b>Proximodistal</b> dictates that development proceeds from the central bodily axis outwards to the peripheral extremities (controlling trunk and arms before fine finger coordination).</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">3. G. Stanley Hall's Formulation of Adolescence:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Formulated in 1904, characterizing adolescence as a turbulent developmental epoch of <i>"Storm and Stress"</i> (Sturm und Drang), marked by pubertal metamorphosis, emotional instability, identity confusion, and conflict with authority.</span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">4. Identity Crisis (Erik Erikson):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The fundamental psychosocial struggle of adolescence (Identity vs. Role Confusion) wherein the youth actively seeks to answer the existential question: <i>"Who am I, what are my beliefs, and what is my vocational destination?"</i></span>
      </div>
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #8E2DE2; border-radius: 6px;">
        <b style="color: #8E2DE2; font-size: 16px; display: block; margin-bottom: 4px;">5. Gang Age vs. Toy Age:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">Early Childhood (3–6 years) is the <b>Toy Age / Questioning Age</b> dominated by self-centered play, curiosity, and language acquisition. Later Childhood (6–12 years) is the <b>Gang Age</b> characterized by intense peer socialization, group loyalty, and team play.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 4.1 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 30px;">4.1 Growth and development: meaning and principles</h2>

  <p>Every educator and parent must understand that human beings do not arrive in the world as static, miniature adults. The human organism undergoes an astonishing journey of transformation across the lifespan. In educational psychology, the twin concepts of <b style="color: #8E2DE2;">Growth</b> and <b style="color: #8E2DE2;">Development</b> form the bedrock upon which curricula, teaching methodologies, and behavioral guidance systems are designed.</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 24px;">(i) Conceptual Meaning and Distinction</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #8E2DE2; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">1. Meaning of Growth:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Growth refers exclusively to structural, quantitative bodily changes. It is the cellular multiplication that manifests as measurable increases in physical height, weight, bodily circumference, bone density, and internal organ size. Growth is purely anatomical, visible, directly measurable using physical scales and measuring tapes, and naturally ceases when the organism attains biological maturity (around 18 to 22 years of age).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #8E2DE2; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">2. Meaning of Development:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Development is a far broader, all-encompassing concept. It refers to a progressive, coherent, and organized series of changes leading toward physical, intellectual, emotional, and social maturity. Development encompasses both quantitative changes (growth) and qualitative enhancements in functionality, motor dexterity, reasoning capacity, emotional poise, and social adaptability. Development begins at the moment of conception and continues uninterruptedly until the final breath (womb to tomb).
      </p>
    </div>
  </div>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 24px;">(ii) Fundamental Principles of Growth and Development</h3>
  <p>Human development is not accidental, random, or chaotic. Decades of observational and empirical child-study research have established seven universal scientific principles governing human ontogeny:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 16px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">1. Principle of Continuity:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Development is an unbroken, continuous process. No trait or behavioral capability appears overnight. When an infant utters their first intelligible word or takes their first unassisted step, it is the culmination of months of continuous neuromuscular and cognitive preparation.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">2. Principle of Sequential Direction (Cephalocaudal &amp; Proximodistal):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Development follows an orderly, predictable directional pathway:
        <br />&bull; <b style="color: #8E2DE2;">Cephalocaudal Trend (Head to Tail):</b> The head develops and comes under voluntary control first. The baby lifts its head, then learns to steady its trunk, then sits, crawls, and finally walks with its legs.
        <br />&bull; <b style="color: #8E2DE2;">Proximodistal Trend (Center to Periphery):</b> Control radiates from the central spinal axis outward. The infant controls large arm muscles before attaining fine motor control of fingers to hold a pen.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">3. Principle of Individual Differences:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Although the sequence of development is universal, every child progresses at their own unique pace and rhythm. One child walks at 10 months, while another normal child walks at 14 months. Forcing identical performance standards ignores biological uniqueness.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">4. Principle of General to Specific Responses:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        In both motor and emotional responses, the infant first reacts with the whole body. An infant crying in distress thrashes its entire arms and legs; later, the response narrows specifically to tear ducts and facial expressions. Similarly, gross grasping precedes refined pincer grasping.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">5. Principle of Interrelation and Integration:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Physical, cognitive, emotional, and social development are inextricably interlinked. A child who suffers from chronic physical malnutrition frequently exhibits delayed language milestones and social timidity. Growth in one domain stimulates or hampers all other domains.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">6. Principle of Predictability:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Because development follows an orderly sequence, psychologists and pediatricians can accurately forecast milestones (e.g., babbling by 6 months, two-word phrases by 2 years, formal abstract thinking by 12–14 years).
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">7. Principle of Interaction between Heredity and Environment:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        As Woodworth mathematically formulated: <b>Development = Heredity &times; Environment</b>. Heredity provides the biological blueprint, potential, and constitutional boundaries, while the socio-educational environment provides the nutrition, stimulation, and cultural training to realize that potential.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 1: DEVELOPMENTAL DIRECTIONS (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 240" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="240" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="24" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">THE DUAL LAWS OF DEVELOPMENTAL DIRECTION</text>

        <!-- Left Box: Cephalocaudal Trend -->
        <rect x="25" y="45" width="185" height="175" rx="8" fill="#FAF5FF" stroke="#8E2DE2" stroke-width="1.8" />
        <text x="117" y="68" font-size="11" font-weight="bold" fill="#6B21A8" text-anchor="middle">1. CEPHALOCAUDAL LAW</text>
        <text x="117" y="84" font-size="9" font-weight="bold" fill="#7E22CE" text-anchor="middle">(Head-to-Toe Progression)</text>

        <!-- Downward Arrow Diagram -->
        <circle cx="117" cy="110" r="14" fill="#E9D5FF" stroke="#8E2DE2" stroke-width="1.4" />
        <text x="117" y="114" font-size="8.5" font-weight="bold" fill="#581C87" text-anchor="middle">HEAD</text>

        <line x1="117" y1="128" x2="117" y2="175" stroke="#8E2DE2" stroke-width="2.5" />
        <polygon points="117,185 111,173 123,173" fill="#8E2DE2" />

        <text x="117" y="148" font-size="8.5" fill="#334155" text-anchor="middle">Trunk &amp; Torso</text>
        <text x="117" y="200" font-size="9" font-weight="bold" fill="#581C87" text-anchor="middle">LEGS &amp; FEET</text>

        <!-- Right Box: Proximodistal Trend -->
        <rect x="230" y="45" width="185" height="175" rx="8" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.8" />
        <text x="322" y="68" font-size="11" font-weight="bold" fill="#15803D" text-anchor="middle">2. PROXIMODISTAL LAW</text>
        <text x="322" y="84" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle">(Center-to-Periphery)</text>

        <!-- Outward Radiation Diagram -->
        <circle cx="322" cy="140" r="18" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5" />
        <text x="322" y="144" font-size="8" font-weight="bold" fill="#14532D" text-anchor="middle">SPINE</text>

        <!-- Left Arrow (Arm to Fingers) -->
        <line x1="300" y1="140" x2="255" y2="140" stroke="#16A34A" stroke-width="2.2" />
        <polygon points="248,140 258,135 258,145" fill="#16A34A" />
        <text x="268" y="128" font-size="7.5" fill="#334155" text-anchor="middle">Left Arm</text>

        <!-- Right Arrow (Arm to Fingers) -->
        <line x1="344" y1="140" x2="389" y2="140" stroke="#16A34A" stroke-width="2.2" />
        <polygon points="396,140 386,135 386,145" fill="#16A34A" />
        <text x="375" y="128" font-size="7.5" fill="#334155" text-anchor="middle">Right Arm</text>

        <text x="322" y="195" font-size="8.5" font-weight="bold" fill="#166534" text-anchor="middle">Trunk &rarr; Arms &rarr; Fine Fingers</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Two Cardinal Directions: Cephalocaudal governs vertical top-to-bottom motor mastery, while Proximodistal dictates horizontal outward precision from core to extremities.
    </div>
  </div>

  <!-- SECTION 4.2 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">4.2 Overview of stages of growth and development (infancy, childhood &amp; adolescence)</h2>

  <p>Human development is traditionally segmented into sequential stages, each possessing distinct physiological milestones, psychological crises, and educational needs:</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(i) Stage of Infancy (Birth to 2 / 3 Years)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #8E2DE2; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      <b style="color: #8E2DE2;">Core Developmental Features:</b> Infancy is characterized by the most explosive rate of physical growth and sensory-motor learning in the entire human lifespan.
    </p>
    <ul style="padding-left: 20px; line-height: 1.8; margin: 0; color: #FFFFFF;">
      <li><b style="color: #8E2DE2;">Rapid Neuromuscular Mastery:</b> Transitioning from involuntary primitive reflexes (sucking, grasping) to crawling, standing, and walking unassisted.</li>
      <li><b style="color: #8E2DE2;">Language Foundation:</b> Progression from reflexive crying and babbling to single words and two-word telegraphic utterances.</li>
      <li><b style="color: #8E2DE2;">Attachment &amp; Trust:</b> Complete biological dependence on maternal caregivers; establishing primary psychosocial trust (Erikson's <i>Trust vs. Mistrust</i>).</li>
    </ul>
  </div>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 24px;">(ii) Stage of Childhood (3 to 12 Years)</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">1. Early Childhood (3 to 6 Years &mdash; Toy Age / Pre-Gang Age):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Known as the <b>Toy Age</b> and <b>Questioning Age</b>. The child displays voracious curiosity, asking endless questions (<i>"Why? What? How?"</i>). Marked by egocentric thinking (Piaget's Pre-Operational stage), symbolic imaginative play, self-care skill acquisition (eating, dressing), and rapid vocabulary expansion.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">2. Later Childhood (6 to 12 Years &mdash; Elementary School / Gang Age):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Characterized as the <b>Gang Age</b> and <b>Play Age</b>. Physical growth stabilizes into steady, uniform progress. The child steps outside family confines into formal school, forming intense same-sex peer groups (gangs). They master concrete operational thinking, cooperative team games, industry and craftsmanship (Erikson's <i>Industry vs. Inferiority</i>), and rudimentary moral rules.
      </p>
    </div>
  </div>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 24px;">(iii) Stage of Adolescence (12/13 to 18/19 Years)</h3>
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #8E2DE2; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
    <p style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      Derived from the Latin verb <i>"adolescere"</i> (meaning to grow into maturity). Adolescence is the critical transitional bridge linking the sheltered dependence of childhood with the independent responsibilities of adulthood. It is marked by the pubertal growth spurt, reproductive sexual maturation, abstract formal-operational intellect, existential identity exploration, and intense emotional upheaval.
    </p>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 2: LIFE-SPAN DEVELOPMENTAL EPOCHS (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 220" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="220" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="22" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">STAGES OF HUMAN GROWTH AND DEVELOPMENT</text>

        <!-- Stage 1: Infancy -->
        <rect x="15" y="45" width="125" height="150" rx="6" fill="#FDF2F8" stroke="#DB2777" stroke-width="1.6" />
        <text x="77" y="65" font-size="10.5" font-weight="bold" fill="#BE185D" text-anchor="middle">1. INFANCY</text>
        <text x="77" y="80" font-size="8.5" font-weight="bold" fill="#9D174D" text-anchor="middle">(Birth to 2/3 Yrs)</text>
        <text x="77" y="105" font-size="8" fill="#334155" text-anchor="middle">&bull; Motor reflexes</text>
        <text x="77" y="122" font-size="8" fill="#334155" text-anchor="middle">&bull; Crawling to walking</text>
        <text x="77" y="139" font-size="8" fill="#334155" text-anchor="middle">&bull; Sensorimotor play</text>
        <text x="77" y="156" font-size="8" fill="#334155" text-anchor="middle">&bull; Total dependence</text>
        <text x="77" y="178" font-size="8.5" font-weight="bold" fill="#BE185D" text-anchor="middle">Trust vs. Mistrust</text>

        <!-- Stage 2: Childhood -->
        <rect x="155" y="45" width="130" height="150" rx="6" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.6" />
        <text x="220" y="65" font-size="10.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">2. CHILDHOOD</text>
        <text x="220" y="80" font-size="8.5" font-weight="bold" fill="#1E40AF" text-anchor="middle">(3 to 12 Years)</text>
        <text x="220" y="105" font-size="8" fill="#334155" text-anchor="middle">&bull; Toy Age (3–6 yrs)</text>
        <text x="220" y="122" font-size="8" fill="#334155" text-anchor="middle">&bull; Gang Age (6–12 yrs)</text>
        <text x="220" y="139" font-size="8" fill="#334155" text-anchor="middle">&bull; Concrete operations</text>
        <text x="220" y="156" font-size="8" fill="#334155" text-anchor="middle">&bull; School socialization</text>
        <text x="220" y="178" font-size="8.5" font-weight="bold" fill="#1D4ED8" text-anchor="middle">Industry vs. Inferiority</text>

        <!-- Stage 3: Adolescence -->
        <rect x="300" y="45" width="125" height="150" rx="6" fill="#FAF5FF" stroke="#8E2DE2" stroke-width="1.8" />
        <text x="362" y="65" font-size="10.5" font-weight="bold" fill="#6B21A8" text-anchor="middle">3. ADOLESCENCE</text>
        <text x="362" y="80" font-size="8.5" font-weight="bold" fill="#7E22CE" text-anchor="middle">(12 to 18/19 Yrs)</text>
        <text x="362" y="105" font-size="8" fill="#334155" text-anchor="middle">&bull; Pubertal growth spurt</text>
        <text x="362" y="122" font-size="8" fill="#334155" text-anchor="middle">&bull; Storm &amp; Stress</text>
        <text x="362" y="139" font-size="8" fill="#334155" text-anchor="middle">&bull; Abstract logic</text>
        <text x="362" y="156" font-size="8" fill="#334155" text-anchor="middle">&bull; Career preparation</text>
        <text x="362" y="178" font-size="8.5" font-weight="bold" fill="#6B21A8" text-anchor="middle">Identity vs. Confusion</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Lifespan Continuum: From sensorimotor foundation in Infancy, through peer socialization in Childhood, to the psychological and physiological identity forging of Adolescence.
    </div>
  </div>

  <!-- SECTION 4.3 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">4.3 Adolescence: characteristics, needs and problems</h2>

  <p>In 1904, the father of adolescent psychology, <b style="color: #8E2DE2;">G. Stanley Hall</b>, published his monumental work declaring adolescence as a period of <b>"Storm and Stress"</b> (<i>Sturm und Drang</i>). The adolescent stands on an emotional tightrope between childhood's past and adulthood's future:</p>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 20px;">(i) Salient Characteristics of Adolescence</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">1. Physiological Metamorphosis &amp; Puberty:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Triggered by pituitary and gonadal hormones (testosterone and estrogen). Adolescents experience a dramatic growth spurt, deepening of voice in boys, development of breasts and menarche in girls, and emergence of secondary sexual characteristics.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">2. Emotional Volatility and Mood Lability:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Adolescents swing dramatically from heights of ecstatic enthusiasm to depths of gloomy despondency without obvious external reasons. They are hypersensitive to criticism, fiercely proud, and prone to rapid mood swings.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">3. Emergence of Abstract Intellectual Operations:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        According to Jean Piaget, adolescents enter the <b>Formal Operational Stage</b>. They transcend concrete reality to reason hypothetically, grasp philosophical concepts (justice, liberty, morality), and question dogmatic adult beliefs.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">4. Peer Loyalty and Hero-Worship:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        The center of social gravity shifts from parents to the peer group. Adolescents adhere strictly to peer dress codes, slang, and values. They indulge in passionate <b>Hero-Worship</b>, idolizing movie stars, cricketers, or political icons.
      </p>
    </div>
  </div>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 24px;">(ii) Fundamental Needs of Adolescents</h3>
  <ul style="padding-left: 20px; line-height: 1.8; color: #FFFFFF;">
    <li><b style="color: #8E2DE2;">1. Physiological Needs:</b> High-protein balanced nutrition to fuel rapid bodily growth, adequate sleep, and sound scientific sex education to allay fears about pubertal bodily changes.</li>
    <li><b style="color: #8E2DE2;">2. Need for Autonomy and Independence:</b> Freedom from suffocating parental surveillance and the right to make personal choices regarding friendships, clothing, and hobbies.</li>
    <li><b style="color: #8E2DE2;">3. Need for Emotional Security and Acceptance:</b> Unconditional love and validation from family and teachers without constant nagging, humiliation, or comparison.</li>
    <li><b style="color: #8E2DE2;">4. Need for Peer Status and Belongingness:</b> Yearning to feel valued and accepted within their peer subculture without facing ostracism.</li>
    <li><b style="color: #8E2DE2;">5. Need for Vocational Guidance:</b> Clear direction regarding future career avenues matching their aptitudes to banish existential economic dread.</li>
  </ul>

  <h3 style="color: #8E2DE2; font-weight: bold; margin-top: 24px;">(iii) Major Problems and Pitfalls of Adolescents</h3>
  <div style="display: flex; flex-direction: column; gap: 12px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #EF4444; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-weight: bold; font-size: 16px;">⚡ 1. Identity Crisis &amp; Existential Ambiguity:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        No longer a child yet not recognized as a full adult. When expectations clash, the adolescent suffers role confusion, self-doubt, and profound existential alienation.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #EF4444; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-weight: bold; font-size: 16px;">⚡ 2. The 'Generation Gap' and Family Warfare:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Clashing worldviews between conservative parents and modern, digitally savvy youth. Constant battles over screen time, clothing, dating, and academic pressure.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #EF4444; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-weight: bold; font-size: 16px;">⚡ 3. Body Dysmorphia and Eating Disorders:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Exacerbated by unrealistic social media beauty standards. Severe dissatisfaction with body shape, skin tone, or facial features leading to anorexia, bulimia, and depression.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #EF4444; border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-weight: bold; font-size: 16px;">⚡ 4. Delinquency and Substance Dependency:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Vulnerability to peer pressure, drug experimentation (vaping, alcohol, cannabis), petty crimes, aggressive vandalism, and cyber addiction to escape overwhelming stress.
      </p>
    </div>
  </div>

  <!-- SECTION 4.4 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">4.4 Role of parents in dealing with problems of adolescents</h2>

  <p>The family home is the fundamental emotional shelter for the storm-tossed adolescent. To steer their children through the turbulent waves of puberty, parents must adopt enlightened, psychologically sound strategies:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">1. Adopting an Authoritative Rearing Style:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Parents must discard authoritarian dictatorship (harsh punishment) and permissive carelessness. Authoritative parenting combines high emotional warmth and active listening with firm, reasonable boundaries.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">2. Bridging the Generation Gap through Active Listening:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Instead of preaching moral lectures, parents should listen empathetically to the adolescent's perspective, acknowledging their feelings and respecting their need for privacy and self-expression.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">3. Eradicating Destructive Comparison:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Comparing the teenager to siblings, cousins, or topper classmates poisons self-worth and triggers bitter hostility. Parents must celebrate the child's unique talents and aptitudes unconditionally.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">4. Providing Scientific Sex Education &amp; Emotional Support:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        De-stigmatizing physical changes like menstruation and nocturnal emissions. Providing scientific biological explanations without awkward shame or superstitious taboos.
      </p>
    </div>
  </div>

  <!-- SECTION 4.5 -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">4.5 Role of teachers in dealing with problems of adolescents</h2>

  <p>The teacher occupies a sacred position in the adolescent's life &mdash; transitioning from a mechanical dispenser of textbooks into a <b>Friend, Philosopher, and Guide</b>. In modern schools, teachers play a decisive role in resolving adolescent crises:</p>

  <div style="display: flex; flex-direction: column; gap: 12px; margin: 14px 0;">
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">1. Eradication of Public Humiliation &amp; Sarcasm:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Adolescents have hyper-sensitive egos. Sarcastic ridicule in front of peers inflicts lifelong trauma. Teachers must correct mistakes privately with dignity, empathy, and positive reinforcement.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">2. Channeling Turbulent Energy through Sublimation:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Teachers must design rich co-curricular programs &mdash; sports, NCC, NSS, theatrical arts, debate societies, science fairs, and community social service &mdash; channeling aggressive and emotional drives into constructive achievements.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">3. Organizing Adolescent Education Programs (AEP):</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Implementing life skills education, substance abuse awareness, cyber safety, and sex education workshops to empower youth with facts and debunk dangerous internet myths.
      </p>
    </div>

    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(142, 45, 226, 0.3); border-radius: 8px; padding: 14px 16px;">
      <b style="color: #8E2DE2; font-size: 16px;">4. Career &amp; Vocational Counseling:</b>
      <p style="margin: 6px 0 0 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
        Helping students map their genuine cognitive aptitudes and interests to real-world careers, dismantling the blind stampede toward engineering or medical entrance tests.
      </p>
    </div>
  </div>

  <!-- STANDALONE CLEAN DIAGRAM 3: ADOLESCENT SUPPORT ECOSYSTEM (SCIENCE-STYLE WHITE BG) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(142, 45, 226, 0.4); border-radius: 10px; padding: 14px 16px; margin: 25px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFDF8; border-radius: 8px; padding: 14px; border: 1px solid rgba(255,255,255,0.2); margin: 0 auto; max-width: 480px;">
      <svg viewBox="0 0 440 230" style="width: 100%; max-width: 460px; height: auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="440" height="230" fill="#FFFDF8" rx="8" />

        <!-- Title -->
        <text x="220" y="24" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">THE ADOLESCENT HOLISTIC SUPPORT ECOSYSTEM</text>

        <!-- Center: The Adolescent -->
        <circle cx="220" cy="120" r="46" fill="#FAF5FF" stroke="#8E2DE2" stroke-width="2.5" />
        <text x="220" y="115" font-size="11" font-weight="bold" fill="#6B21A8" text-anchor="middle">ADOLESCENT</text>
        <text x="220" y="130" font-size="9" fill="#7E22CE" text-anchor="middle">Identity &bull; Needs</text>

        <!-- Pillar Left: Home & Parents -->
        <rect x="20" y="70" width="130" height="100" rx="8" fill="#FDF2F8" stroke="#DB2777" stroke-width="1.6" />
        <text x="85" y="92" font-size="10" font-weight="bold" fill="#BE185D" text-anchor="middle">PARENTAL PILLAR</text>
        <text x="85" y="110" font-size="8" fill="#334155" text-anchor="middle">&bull; Authoritative love</text>
        <text x="85" y="125" font-size="8" fill="#334155" text-anchor="middle">&bull; Active listening</text>
        <text x="85" y="140" font-size="8" fill="#334155" text-anchor="middle">&bull; Zero comparison</text>
        <text x="85" y="155" font-size="8" fill="#334155" text-anchor="middle">&bull; Emotional harbor</text>
        <line x1="150" y1="120" x2="174" y2="120" stroke="#DB2777" stroke-width="2" />

        <!-- Pillar Right: School & Teachers -->
        <rect x="290" y="70" width="130" height="100" rx="8" fill="#EFF6FF" stroke="#2563EB" stroke-width="1.6" />
        <text x="355" y="92" font-size="10" font-weight="bold" fill="#1D4ED8" text-anchor="middle">TEACHER PILLAR</text>
        <text x="355" y="110" font-size="8" fill="#334155" text-anchor="middle">&bull; Friend &amp; Mentor</text>
        <text x="355" y="125" font-size="8" fill="#334155" text-anchor="middle">&bull; Sublimation / Sports</text>
        <text x="355" y="140" font-size="8" fill="#334155" text-anchor="middle">&bull; Life skills (AEP)</text>
        <text x="355" y="155" font-size="8" fill="#334155" text-anchor="middle">&bull; Career guidance</text>
        <line x1="266" y1="120" x2="290" y2="120" stroke="#2563EB" stroke-width="2" />
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The Collaborative Support Matrix: The turbulent storms of adolescence are navigated safely when a secure home harbor unites with an inspiring, empathetic school guidance sanctuary.
    </div>
  </div>

  <!-- COMPARISON TABLE BOX -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid #8E2DE2; border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; font-weight: bold; margin: 0 0 12px 0;">
      📊 Master Comparative Matrix: Growth vs. Development
    </h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #F8FAFC;">
        <thead>
          <tr style="background: rgba(142, 45, 226, 0.25); border-bottom: 2px solid #8E2DE2;">
            <th style="padding: 10px; text-align: left;">Dimension</th>
            <th style="padding: 10px; text-align: left;">Growth</th>
            <th style="padding: 10px; text-align: left;">Development</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Nature &amp; Scope</td>
            <td style="padding: 10px;">Narrow; purely physical and cellular changes.</td>
            <td style="padding: 10px;">Comprehensive; covers physical, cognitive, emotional, and social dimensions.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Measurability</td>
            <td style="padding: 10px;">Quantitative; directly measurable in inches, kilograms, centimeters.</td>
            <td style="padding: 10px;">Both qualitative and quantitative; assessed through behavioral observation.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Time Span</td>
            <td style="padding: 10px;">Terminates with physical maturity (around 18–20 years).</td>
            <td style="padding: 10px;">Lifelong, continuous process from conception to grave (womb to tomb).</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Dependence</td>
            <td style="padding: 10px;">May or may not bring about functional development.</td>
            <td style="padding: 10px;">Can continue even when physical growth has completely ceased.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- POLICY CONNECT BOX: NEP 2020 & ADOLESCENT EDUCATION PROGRAM -->
  <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid #38EF7D; border-radius: 8px; padding: 14px 16px; margin: 20px 0;">
    <h4 style="color: #8E2DE2; font-weight: bold; margin: 0 0 6px 0; font-size: 16px; font-weight: bold;">
      🏛️ Educational Policy Connect: NEP 2020 &amp; Adolescent Life Skills (AEP)
    </h4>
    <p style="margin: 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      The <b>National Education Policy (NEP 2020)</b> mandates the integration of the <b>Adolescent Education Program (AEP)</b> and Social-Emotional Learning (SEL) across all secondary schools. NEP 2020 emphasizes providing adolescents with scientific sex education, mental health first-aid, stress management techniques, ethical digital citizenship, and vocational aptitude assessments to foster well-rounded, resilient young citizens.
    </p>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 2: Q & A (SOLUTIONS)                          */
/* -------------------------------------------------------------------------- */

export const c12Edu4HtmlSolutions = `
<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <div style="background: rgba(142, 45, 226, 0.08); border-left: 4px solid #8E2DE2; border-radius: 6px; padding: 14px 16px; margin-bottom: 24px;">
    <h3 style="color: #8E2DE2; font-weight: bold; margin: 0 0 6px 0; font-size: 18px; font-weight: bold;">🎯 Golden 25 Board Examination Q &amp; A Blueprint</h3>
    <p style="margin: 0; color: #CBD5E1; font-size: 14px;">
      Class 12 Unit 4: Human Growth and Development (10 Marks) &bull; Strictly 12 VSAT (1 &amp; 2 Marks), 8 SAT (4 Marks), and 5 LAT (6 Marks).
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER TYPE (1 & 2 MARKS) - 12 QUESTIONS          -->
  <!-- ======================================================================== -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 25px;">
    Section A: Very Short Answer Questions (1 &amp; 2 Marks)
  </h2>

  <!-- Q1 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q1: Distinguish between Growth and Development.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #8E2DE2;">Growth</b> is quantitative and limited to physical, structural bodily increases (height, weight) ending at maturity. <b style="color: #8E2DE2;">Development</b> is a qualitative and quantitative progressive, lifelong process encompassing physical, mental, emotional, and social functional enhancements from conception to death.
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q2: Explain the Cephalocaudal principle of development.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: #8E2DE2;">Cephalocaudal</b> principle states that development progresses vertically from head to toe. An infant gains neuromuscular control over its head and neck before its torso, and masters sitting before crawling or walking with its legs.
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q3: Explain the Proximodistal principle of development.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: #8E2DE2;">Proximodistal</b> principle states that development radiates outward from the central longitudinal axis of the body to the peripheral extremities. An infant gains control over its torso and arm muscles before developing fine finger coordination.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q4: Why did G. Stanley Hall describe adolescence as a period of "Storm and Stress"?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      <b style="color: #8E2DE2;">G. Stanley Hall</b> termed adolescence a period of <i>"Storm and Stress"</i> (Sturm und Drang) because it is characterized by intense pubertal hormonal upheavals, extreme emotional volatility, acute identity conflicts, and friction with parental and societal authority.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q5: Mention two key characteristics of the Infancy stage.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: #8E2DE2;">Explosive rate of physical and motor growth</b>, progressing from involuntary reflexes to independent walking; (2) <b style="color: #8E2DE2;">Total biological and emotional dependence</b> on caregivers (establishing primary psychosocial trust).
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q6: Why is Early Childhood often referred to as the 'Toy Age' or 'Questioning Age'?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      It is called the <b style="color: #8E2DE2;">Toy Age</b> because children spend the majority of their waking hours in imaginative play with toys, and the <b style="color: #8E2DE2;">Questioning Age</b> due to their insatiable curiosity about the surrounding environment (constantly asking <i>"Why?"</i> and <i>"What?"</i>).
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q7: Why is Later Childhood known as the 'Gang Age'?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      Later childhood (6–12 years) is termed the <b style="color: #8E2DE2;">Gang Age</b> because children form tightly-knit, same-sex peer groups or gangs, developing fierce loyalty to group rules, codes of conduct, and cooperative team sports.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q8: State two fundamental psychological needs of adolescents.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: #8E2DE2;">Need for Autonomy and Independence</b> from parental over-control; (2) <b style="color: #8E2DE2;">Need for Peer Status and Belongingness</b>, feeling accepted and respected within their peer subculture.
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q9: What is meant by 'Identity Crisis' according to Erik Erikson?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      According to <b style="color: #8E2DE2;">Erik Erikson</b>, an <b style="color: #8E2DE2;">Identity Crisis</b> is the psychological struggle of adolescence (<i>Identity vs. Role Confusion</i>) where youth must reconcile their childhood self-concept with impending adult expectations, vocational choices, and philosophical values.
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q10: What is the 'Generation Gap' in the context of adolescent problems?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      The <b style="color: #8E2DE2;">Generation Gap</b> refers to the sharp psychological, cultural, and ideological divide between conservative parents and modern adolescents regarding values, lifestyle, dress, career goals, and digital technology.
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q11: State two major roles of parents in easing adolescent stress.</h3>
    <p style="color: #FFFFFF; margin: 0;">
      (1) <b style="color: #8E2DE2;">Adopting an Authoritative parenting style</b> with high warmth and democratic communication; (2) <b style="color: #8E2DE2;">Completely eliminating toxic comparison</b> of the child with siblings or topper peers.
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin: 18px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q12: How can teachers channel the aggressive energy of adolescents through sublimation?</h3>
    <p style="color: #FFFFFF; margin: 0;">
      Teachers can channel raw aggressive adolescent drives into <b style="color: #8E2DE2;">competitive sports, martial arts, athletic leagues, NCC, NSS, and drama societies</b>, converting dangerous hostility into teamwork and disciplined excellence.
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER TYPE (4 MARKS) - 8 QUESTIONS                    -->
  <!-- ======================================================================== -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">
    Section B: Short Answer Questions (4 Marks)
  </h2>

  <!-- Q13 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q13: Differentiate systematically between Growth and Development across four fundamental parameters.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Growth and Development differ fundamentally across multiple dimensions:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #8E2DE2;">1. Scope:</b> Growth is limited to physical and anatomical changes (cellular multiplication), whereas Development is holistic, encompassing cognitive, emotional, social, and motor domains.</li>
        <li><b style="color: #8E2DE2;">2. Nature:</b> Growth is purely quantitative (measurable in kg, cm), while Development is both quantitative and qualitative (functional maturity and behavioral poise).</li>
        <li><b style="color: #8E2DE2;">3. Duration:</b> Growth ceases around 18–20 years of age with biological maturity, whereas Development continues uninterruptedly across the entire lifespan (womb to tomb).</li>
        <li><b style="color: #8E2DE2;">4. Interdependence:</b> Development can continue even after physical growth has halted; conversely, physical growth does not guarantee mature emotional development.</li>
      </ul>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q14: Explain the Principles of Continuity, Individual Differences, and General to Specific Responses.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      These core principles govern the universal trajectory of human development:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #8E2DE2;">1. Principle of Continuity:</b> Development is unbroken and cumulative. No milestone emerges abruptly; complex skills (like fluent speech) represent months of gradual continuous preparation.</li>
        <li><b style="color: #8E2DE2;">2. Principle of Individual Differences:</b> While the sequence of milestones is uniform, the tempo and rate of development vary uniquely for every child due to genetic and environmental interactions.</li>
        <li><b style="color: #8E2DE2;">3. General to Specific Responses:</b> The infant initially responds to environmental stimuli with total-body mass movements before mastering localized, refined motor responses (e.g., thrashing whole body before pointing a finger).</li>
      </ul>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q15: Describe the prominent physical, motor, and emotional characteristics of the Infancy stage.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Infancy (Birth to 2/3 years) lays the biological foundation for all future growth:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #8E2DE2;">1. Rapid Physical Metamorphosis:</b> The infant triples its birth weight in the first year and doubles its height by the third year, with rapid brain growth.</li>
        <li><b style="color: #8E2DE2;">2. Neuromuscular Motor Mastery:</b> Transitioning rapidly from involuntary primitive reflexes to head-holding, rolling over, sitting, crawling, and upright bipedal walking.</li>
        <li><b style="color: #8E2DE2;">3. Emotional Dependency &amp; Attachment:</b> Formation of primary attachment bonds with the mother; emotions are undifferentiated excitement that progressively splits into distress and delight.</li>
        <li><b style="color: #8E2DE2;">4. Sensorimotor Intelligence:</b> Exploring the external universe through direct sensory inputs and physical motor actions (Piaget's sensorimotor stage).</li>
      </ul>
    </div>
  </div>

  <!-- Q16 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q16: Compare the developmental characteristics of Early Childhood and Later Childhood.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Early and Later childhood represent distinctly contrasting developmental phases:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #8E2DE2;">1. Social Orientation:</b> Early Childhood (3–6 yrs) is egocentric and home-centered (Toy Age), whereas Later Childhood (6–12 yrs) is peer-centered and gang-oriented (Gang Age).</li>
        <li><b style="color: #8E2DE2;">2. Cognitive Development:</b> Early childhood thinking is intuitive, pre-logical, and symbolic, whereas later childhood displays concrete logical reasoning and classification skills.</li>
        <li><b style="color: #8E2DE2;">3. Physical Growth:</b> Early childhood features rapid bodily lengthening, whereas later childhood displays slow, steady, and stable physical growth.</li>
        <li><b style="color: #8E2DE2;">4. Play Patterns:</b> Early childhood centers on solitary and parallel play; later childhood revolves around cooperative, organized team sports with explicit rules.</li>
      </ul>
    </div>
  </div>

  <!-- Q17 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q17: Discuss four major problems faced by adolescents in contemporary society.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Modern adolescents face acute psychosocial and cultural challenges:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #8E2DE2;">1. Acute Identity Crisis:</b> Struggling to answer <i>"Who am I?"</i> amidst conflicting social expectations, leading to severe role confusion and self-doubt.</li>
        <li><b style="color: #8E2DE2;">2. Academic Overload &amp; Examination Terror:</b> Ruthless competition for board examination marks and competitive entrance tests triggering chronic anxiety and depression.</li>
        <li><b style="color: #8E2DE2;">3. Digital Satiation &amp; Body Dysmorphia:</b> Obsessive comparison on social media platforms leading to eating disorders and crippling body dissatisfaction.</li>
        <li><b style="color: #8E2DE2;">4. Substance Abuse &amp; Delinquent Vulnerability:</b> Susceptibility to toxic peer pressure involving vaping, alcohol, drugs, or antisocial conduct to escape distress.</li>
      </ul>
    </div>
  </div>

  <!-- Q18 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q18: Analyze the psychological and social needs of adolescents and their educational significance.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Meeting adolescent needs is essential for preventing delinquency and fostering growth:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #8E2DE2;">1. Need for Autonomy:</b> Adolescents need legitimate independence to make personal decisions; schools must provide democratic student councils and leadership roles.</li>
        <li><b style="color: #8E2DE2;">2. Need for Peer Recognition:</b> Adolescents yearn for status and belongingness; educators should organize group projects that foster positive peer cooperation.</li>
        <li><b style="color: #8E2DE2;">3. Need for Emotional Catharsis:</b> Adolescents need safe emotional outlets; providing creative arts, sports, and confidential counseling prevents emotional explosions.</li>
        <li><b style="color: #8E2DE2;">4. Need for Vocational Direction:</b> Systematic career counseling helps students align ambitions with realistic aptitudes, eliminating existential panic.</li>
      </ul>
    </div>
  </div>

  <!-- Q19 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q19: Explain the essential duties of parents in guiding adolescents through pubertal turbulence.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Parents serve as the primary emotional anchor during pubertal upheaval:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #8E2DE2;">1. Authoritative Parenting:</b> Balancing warmth, affection, and active open listening with firm, reasonable, and democratically negotiated guidelines.</li>
        <li><b style="color: #8E2DE2;">2. Empathy over Lectures:</b> Listening without interrupting or passing harsh moral judgment when the adolescent confides fears, heartbreaks, or doubts.</li>
        <li><b style="color: #8E2DE2;">3. Healthy Sexual Guidance:</b> Demystifying pubertal bodily changes (menstruation, voice deepening, nocturnal emissions) with scientific biological facts.</li>
        <li><b style="color: #8E2DE2;">4. Abolition of Sibling Comparison:</b> Respecting the adolescent's unique individuality without making degrading comparisons to high-achieving siblings.</li>
      </ul>
    </div>
  </div>

  <!-- Q20 -->
  <div style="margin: 20px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 16px; margin-bottom: 6px;">Q20: Discuss how teachers can act as counselors and mentors in solving adolescent behavioral issues.</h3>
    <div style="color: #FFFFFF; line-height: 1.7;">
      Teachers must transcend traditional authoritarian pedagogy to become transformative mentors:
      <ul style="padding-left: 20px; margin: 6px 0 0 0;">
        <li><b style="color: #8E2DE2;">1. Eradicating Public Sarcasm:</b> Rebuking adolescents privately with constructive empathy, as public humiliation triggers destructive rebellion or mutism.</li>
        <li><b style="color: #8E2DE2;">2. Facilitating Sublimation:</b> Channeling boundless physical and aggressive energy into athletic tournaments, debates, creative drama, and social service.</li>
        <li><b style="color: #8E2DE2;">3. Early Identification of Warning Signals:</b> Spotting signs of clinical depression, sudden academic drops, self-harm scars, or substance abuse for prompt referral.</li>
        <li><b style="color: #8E2DE2;">4. Organizing Adolescent Life Skills Programs:</b> Conducting interactive workshops on stress management, sex education, cyber safety, and career planning.</li>
      </ul>
    </div>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION C: LONG ANSWER TYPE (6 MARKS) - 5 QUESTIONS                     -->
  <!-- ======================================================================== -->
  <h2 style="color: #8E2DE2; font-weight: bold; border-bottom: 2px solid #8E2DE2; padding-bottom: 6px; margin-top: 35px;">
    Section C: Long Answer Questions (6 Marks)
  </h2>

  <!-- Q21 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q21: Comprehensive Exposition of the Principles of Growth and Development and their Vital Implications for Educators.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #8E2DE2;">I. Conceptual Introduction:</b><br />
      Human ontogeny is governed by universal, predictable laws. Growth represents quantitative anatomical enlargement, while Development encompasses lifelong qualitative functional progression from conception to death.</p>

      <p><b style="color: #8E2DE2;">II. Major Principles of Development:</b><br />
      (1) <b style="color: #8E2DE2;">Principle of Continuity:</b> Development is an unbroken, cumulative process where complex skills build continuously upon simpler precursors.<br />
      (2) <b style="color: #8E2DE2;">Principle of Sequential Direction:</b> Operates via Cephalocaudal (head-to-toe motor mastery) and Proximodistal (center-to-periphery coordination) sequences.<br />
      (3) <b style="color: #8E2DE2;">Principle of Individual Differences:</b> Each student matures at their own unique internal tempo based on hereditary endowment and environmental factors.<br />
      (4) <b style="color: #8E2DE2;">Principle of General to Specific Responses:</b> Mass, uncoordinated motor responses precede refined, localized precision.<br />
      (5) <b style="color: #8E2DE2;">Principle of Interrelation:</b> Physical, intellectual, emotional, and social development are deeply interdependent.<br />
      (6) <b style="color: #8E2DE2;">Principle of Interaction (Heredity &times; Environment):</b> Biological potential is realized only through supportive environmental stimulation.</p>

      <p><b style="color: #8E2DE2;">III. Pedagogical and Curricular Implications:</b><br />
      Educators must calibrate curriculum to developmental readiness rather than imposing adult standards prematurely. Recognizing individual differences prevents stigmatizing late bloomers, and recognizing interrelatedness demands a holistic educational approach.</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q22: Exhaustive Comparative Analysis of the Stages of Development (Infancy &rarr; Childhood &rarr; Adolescence).
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #8E2DE2;">I. Introduction:</b><br />
      Human life spans distinct developmental epochs, each characterized by specific physical milestones, cognitive structures, and psychosocial tasks.</p>

      <p><b style="color: #8E2DE2;">II. Comparative Analysis across Three Cardinal Epochs:</b><br />
      (1) <b style="color: #8E2DE2;">Infancy (Birth to 2/3 Years):</b> Characterized by explosive physical growth, sensorimotor cognitive operations, rapid reflex-to-voluntary motor transition, total biological dependency, and establishing Erikson's foundational crisis of <i>Trust vs. Mistrust</i>.<br />
      (2) <b style="color: #8E2DE2;">Childhood (3 to 12 Years):</b> Divided into <i>Early Childhood</i> (3–6 yrs; Toy Age, insatiable curiosity, pre-operational symbolic play) and <i>Later Childhood</i> (6–12 yrs; Gang Age, stable physical growth, concrete operational logic, elementary schooling, and <i>Industry vs. Inferiority</i>).<br />
      (3) <b style="color: #8E2DE2;">Adolescence (12 to 18/19 Years):</b> Pubertal metamorphosis, reproductive maturity, G. Stanley Hall's <i>Storm and Stress</i>, formal operational abstract reasoning, intense peer conformity, and Erikson's crisis of <i>Identity vs. Role Confusion</i>.</p>

      <p><b style="color: #8E2DE2;">III. Educational Synthesis:</b><br />
      Pedagogy must transition smoothly: sensory-motor play in infancy, activity-based discovery and group sports in childhood, and abstract debate, leadership, and vocational guidance in adolescence.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q23: Critical Examination of Adolescence: Complex Characteristics, Primary Needs, and Prevailing Psychosocial Problems.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #8E2DE2;">I. Nature of Adolescence:</b><br />
      Derived from <i>adolescere</i> (to mature), adolescence is the dramatic bridge between childhood dependency and adult autonomy. Hall termed it a period of <i>Storm and Stress</i> due to rapid pubertal and hormonal transformation.</p>

      <p><b style="color: #8E2DE2;">II. Key Developmental Characteristics &amp; Core Needs:</b><br />
      (1) <b style="color: #8E2DE2;">Characteristics:</b> Rapid physical growth spurt, sexual maturation, emotional lability, formal operational abstract reasoning, hero-worship, and fierce peer allegiance.<br />
      (2) <b style="color: #8E2DE2;">Vital Needs:</b> High-protein physical nutrition, need for emotional security, need for autonomy and self-direction, need for peer status, and need for clear vocational pathways.</p>

      <p><b style="color: #8E2DE2;">III. Severe Psychosocial Problems:</b><br />
      Adolescents face acute identity confusion, intergenerational friction (Generation Gap), academic exam terror, social-media-driven body dysmorphia, and vulnerability to substance abuse and juvenile delinquency.</p>

      <p><b style="color: #8E2DE2;">IV. Remedial Conclusion:</b><br />
      Adolescent turmoil is not an incurable pathology, but a developmental transition requiring empathetic adult mentorship, creative energy outlets, and non-judgmental guidance.</p>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q24: The Strategic and Collaborative Role of Parents and Teachers in Resolving the Crises of Adolescence.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #8E2DE2;">I. The Collaborative Adolescent Ecosystem:</b><br />
      Neither parents nor teachers can solve adolescent problems in isolation; a harmonious, collaborative partnership between home and school is essential.</p>

      <p><b style="color: #8E2DE2;">II. Strategic Measures for Parents:</b><br />
      (1) Practice <b style="color: #8E2DE2;">Authoritative Parenting</b> (high warmth + firm democratic guidelines).<br />
      (2) Bridge the <b style="color: #8E2DE2;">Generation Gap</b> through non-judgmental, active empathetic listening.<br />
      (3) Abolish toxic comparison and celebrate the child's unique aptitudes.<br />
      (4) Provide scientific, open biological education regarding pubertal bodily changes.</p>

      <p><b style="color: #8E2DE2;">III. Strategic Measures for Teachers &amp; Schools:</b><br />
      (1) Act as empathetic mentors, totally abolishing sarcasm, ridicule, and corporal punishment.<br />
      (2) Channel aggressive drives through <b style="color: #8E2DE2;">Sublimation</b> into sports, athletics, NCC, NSS, and arts.<br />
      (3) Implement the <b style="color: #8E2DE2;">Adolescent Education Program (AEP)</b> for life skills, cyber security, and substance abuse awareness.<br />
      (4) Provide professional vocational and aptitude counseling aligned with NEP 2020 mandates.</p>
    </div>
  </div>

  <!-- Q25 -->
  <div style="margin: 22px 0;">
    <h3 style="color: #8E2DE2; font-weight: bold; font-size: 17px; margin-bottom: 8px;">Q25: Real-World Adolescent Case Study: Diagnostic Evaluation and Comprehensive Remediation Blueprint.
    </h3>
    <div style="color: #FFFFFF; line-height: 1.75;">
      <p><b style="color: #8E2DE2;">Case Profile:</b><br />
      <i>Sneha, a 15-year-old Class 10 student, has experienced sudden emotional withdrawal over the past four months. She spends hours obsessively examining herself in mirrors, skips meals due to intense anxiety about gaining weight (body dysmorphia), and locks herself in her room. When her authoritarian father scolds her and demands 98% marks in board exams, Sneha suffers hysterical crying spells. Her school reports reveal falling grades, daydreaming, and frequent classroom conflicts with peers.</i></p>

      <p><b style="color: #8E2DE2;">I. Diagnostic Evaluation:</b><br />
      (1) <b style="color: #8E2DE2;">Primary Triggers:</b> Pubertal physical changes combined with severe authoritarian parental pressure and unrealistic academic expectations.<br />
      (2) <b style="color: #8E2DE2;">Psychological Crises:</b> Acute Identity vs. Role Confusion, Body Dysmorphia, and Intergenerational Conflict (Generation Gap).<br />
      (3) <b style="color: #8E2DE2;">Manifested Symptoms:</b> Food deprivation, emotional lability, scholastic decline, and cognitive daydreaming.</p>

      <p><b style="color: #8E2DE2;">II. Four-Tiered Psycho-Educational Remediation Blueprint:</b><br />
      (1) <b style="color: #8E2DE2;">Parental Re-Orientation:</b> Counsel the father to immediately cease authoritarian threats and grade ultimatums, adopting authoritative warmth and active listening.<br />
      (2) <b style="color: #8E2DE2;">Individual Cognitive Counseling:</b> School counselor helps Sneha dismantle irrational body image distortions, rebuild core self-esteem, and process pubertal maturation.<br />
      (3) <b style="color: #8E2DE2;">Sublimation through Creative Arts &amp; Sports:</b> Encourage Sneha to join the school drama society or badminton team to channel anxious energy into creative mastery.<br />
      (4) <b style="color: #8E2DE2;">Academic Restructuring:</b> Teachers provide supportive remedial micro-goals, celebrating effort rather than raw marks, restoring Sneha's academic confidence.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                          TAB 3: MCQS (INTERACTIVE)                         */
/* -------------------------------------------------------------------------- */

export const c12Edu4Mcqs = [
  {
    "id": "c12-edu-4-mcq-1",
    "question": "Who famously characterized adolescence as a period of 'Storm and Stress' (Sturm und Drang) in 1904?",
    "options": [
      "A):   Jean Piaget",
      "B):   G. Stanley Hall",
      "C):   Erik Erikson",
      "D):   John B. Watson"
    ],
    "correctAnswer": "b",
    "explanation": "G. Stanley Hall published his pioneering two-volume treatise in 1904, defining adolescence as a period of intense storm and stress."
  },
  {
    "id": "c12-edu-4-mcq-2",
    "question": "The principle of development stating that growth proceeds vertically from head to toe is known as:",
    "options": [
      "A):   Cephalocaudal Principle",
      "B):   Proximodistal Principle",
      "C):   Principle of Uniformity",
      "D):   Principle of Regression"
    ],
    "correctAnswer": "a",
    "explanation": "The Cephalocaudal trend dictates that developmental motor control progresses from head to tail (head before legs)."
  },
  {
    "id": "c12-edu-4-mcq-3",
    "question": "The principle of development stating that motor control radiates from the central bodily axis outward to the extremities is known as:",
    "options": [
      "A):   Cephalocaudal Trend",
      "B):   Principle of Continuity",
      "C):   Proximodistal Trend",
      "D):   Principle of Stagnation"
    ],
    "correctAnswer": "c",
    "explanation": "The Proximodistal sequence dictates outward progression from the central spinal cord to peripheral extremities like fingers."
  },
  {
    "id": "c12-edu-4-mcq-4",
    "question": "Which stage of human development is commonly referred to by psychologists as the 'Toy Age' and 'Questioning Age'?",
    "options": [
      "A):   Infancy",
      "B):   Later Childhood",
      "C):   Adolescence",
      "D):   Early Childhood"
    ],
    "correctAnswer": "d",
    "explanation": "Early Childhood (3 to 6 years) is designated the Toy Age due to self-centered play and the Questioning Age due to insatiable curiosity."
  },
  {
    "id": "c12-edu-4-mcq-5",
    "question": "Later Childhood (6 to 12 years) is known in educational psychology as the:",
    "options": [
      "A):   Toy Age",
      "B):   Gang Age",
      "C):   Age of Storm and Stress",
      "D):   Sensorimotor Stage"
    ],
    "correctAnswer": "b",
    "explanation": "Later Childhood is called the Gang Age because children form tightly-knit same-sex peer groups and exhibit deep peer loyalty."
  },
  {
    "id": "c12-edu-4-mcq-6",
    "question": "Which of the following describes the fundamental nature of Growth?",
    "options": [
      "A):   Purely quantitative physical and structural bodily enlargement",
      "B):   Lifelong qualitative transformation",
      "C):   Emotional self-regulation",
      "D):   Continuous from womb to tomb"
    ],
    "correctAnswer": "a",
    "explanation": "Growth refers specifically to quantitative structural increases in height, weight, and cellular dimensions ending at physical maturity."
  },
  {
    "id": "c12-edu-4-mcq-7",
    "question": "According to Erik Erikson, the central psychosocial crisis of adolescence is:",
    "options": [
      "A):   Trust vs. Mistrust",
      "B):   Autonomy vs. Shame",
      "C):   Industry vs. Inferiority",
      "D):   Identity vs. Role Confusion"
    ],
    "correctAnswer": "d",
    "explanation": "Erikson identified Identity vs. Role Confusion as the defining psychosocial developmental crisis of adolescence."
  },
  {
    "id": "c12-edu-4-mcq-8",
    "question": "The Latin root word 'adolescere' from which the term 'Adolescence' is derived means:",
    "options": [
      "A):   To remain a child",
      "B):   To obey authority",
      "C):   To grow into maturity",
      "D):   To escape from stress"
    ],
    "correctAnswer": "c",
    "explanation": "Adolescence comes from the Latin verb 'adolescere', which means 'to grow up' or 'to advance into maturity'."
  },
  {
    "id": "c12-edu-4-mcq-9",
    "question": "The relationship between Heredity (H) and Environment (E) in shaping Development (D) is mathematically expressed by Woodworth as:",
    "options": [
      "A):   D = H + E",
      "B):   D = H &times; E",
      "C):   D = H / E",
      "D):   D = H - E"
    ],
    "correctAnswer": "b",
    "explanation": "Robert S. Woodworth formulated that development is the multiplicative interaction of heredity and environment: D = H &times; E."
  },
  {
    "id": "c12-edu-4-mcq-10",
    "question": "At which stage does a human being experience the primary psychosocial crisis of 'Trust vs. Mistrust'?",
    "options": [
      "A):   Infancy",
      "B):   Early Childhood",
      "C):   Later Childhood",
      "D):   Adolescence"
    ],
    "correctAnswer": "a",
    "explanation": "Infancy is the stage where the baby develops foundational trust or mistrust toward the world depending on parental responsiveness."
  },
  {
    "id": "c12-edu-4-mcq-11",
    "question": "An infant first thrashes its whole body and limbs while crying, and only later learns to express distress through localized facial tears. This demonstrates the:",
    "options": [
      "A):   Principle of Cephalocaudal Development",
      "B):   Principle of Individual Differences",
      "C):   Principle of General to Specific Responses",
      "D):   Principle of Hereditary Stagnation"
    ],
    "correctAnswer": "c",
    "explanation": "The Principle of General to Specific Responses dictates that mass, undifferentiated bodily reactions precede refined, specific actions."
  },
  {
    "id": "c12-edu-4-mcq-12",
    "question": "A child learning to hold a heavy ball with both arms before learning to grip a slender fountain pen with its fingers is an example of:",
    "options": [
      "A):   Egocentrism",
      "B):   Cephalocaudal development",
      "C):   Sublimation",
      "D):   Proximodistal development"
    ],
    "correctAnswer": "d",
    "explanation": "Developing control over large central arm muscles before mastering fine finger dexterity demonstrates the Proximodistal principle."
  },
  {
    "id": "c12-edu-4-mcq-13",
    "question": "Which parenting style is proven by developmental psychologists to produce the most confident, emotionally stable, and resilient adolescents?",
    "options": [
      "A):   Authoritative (high warmth, open dialogue, and democratic boundaries)",
      "B):   Permissive (indulgent with zero guidelines)",
      "C):   Authoritarian (dictatorial and punitive)",
      "D):   Neglecting (indifferent and emotionally absent)"
    ],
    "correctAnswer": "a",
    "explanation": "Authoritative parenting balances warmth, empathy, and active listening with clear democratic rules, fostering optimal adolescent adjustment."
  },
  {
    "id": "c12-edu-4-mcq-14",
    "question": "Adolescents passionately idolizing cricket icons, movie stars, or historical revolutionaries and copying their hairstyles and mannerisms is known as:",
    "options": [
      "A):   Rationalization",
      "B):   Hero-Worship",
      "C):   Proximodistal fixation",
      "D):   Sensorimotor assimilation"
    ],
    "correctAnswer": "b",
    "explanation": "Hero-worship is a prominent psychological characteristic of adolescence, where youth seek ideals to emulate during identity formation."
  },
  {
    "id": "c12-edu-4-mcq-15",
    "question": "Why does physical growth in later childhood differ markedly from infancy and adolescence?",
    "options": [
      "A):   Because it stops completely",
      "B):   Because it follows a reverse cephalocaudal pattern",
      "C):   Because it is purely qualitative",
      "D):   Because it is slow, steady, and uniform compared to the rapid spurts of infancy and puberty"
    ],
    "correctAnswer": "d",
    "explanation": "Later childhood is a period of physical consolidation characterized by slow, steady, and uniform growth between the spurts of infancy and puberty."
  },
  {
    "id": "c12-edu-4-mcq-16",
    "question": "The ideological, psychological, and cultural divide between conservative parents and modern youth over lifestyle and values is termed:",
    "options": [
      "A):   Cognitive dissonance",
      "B):   The Gang Age",
      "C):   The Generation Gap",
      "D):   Cephalocaudal crisis"
    ],
    "correctAnswer": "c",
    "explanation": "The Generation Gap describes the communication and value gulf separating older parents from modern adolescents."
  },
  {
    "id": "c12-edu-4-mcq-17",
    "question": "Which of the following is an example of channeling adolescent aggressive energy through Sublimation in schools?",
    "options": [
      "A):   Giving harsh corporal punishment in morning assembly",
      "B):   Enrolling aggressive students into competitive boxing, athletic teams, and martial arts",
      "C):   Locking students in isolated detention rooms",
      "D):   Forbidding all physical activity to enforce book study"
    ],
    "correctAnswer": "b",
    "explanation": "Sublimation redirects raw physical and aggressive drives into socially valued avenues like martial arts, athletics, and sports."
  },
  {
    "id": "c12-edu-4-mcq-18",
    "question": "At which stage of development does abstract hypothetical deductive reasoning emerge according to Jean Piaget?",
    "options": [
      "A):   Formal operational (Adolescence)",
      "B):   Pre-operational (Early Childhood)",
      "C):   Concrete operational (Later Childhood)",
      "D):   Sensorimotor (Infancy)"
    ],
    "correctAnswer": "a",
    "explanation": "Piaget's Formal Operational stage begins in adolescence (around 11–15 years), enabling abstract, hypothetical, and philosophical thinking."
  },
  {
    "id": "c12-edu-4-mcq-19",
    "question": "A high school teacher notices that a 16-year-old boy has become intensely rebellious, skips school, and fights frequently after his father strictly banned him from choosing an arts career. What is the root cause of this rebellion?",
    "options": [
      "A):   Lack of sensory motor coordination",
      "B):   Fixation in the toy age",
      "C):   Cephalocaudal developmental delay",
      "D):   Suppression of the adolescent's need for autonomy and vocational self-expression by authoritarian parenting"
    ],
    "correctAnswer": "d",
    "explanation": "Authoritarian denial of legitimate adolescent autonomy and vocational aspirations inevitably provokes severe defiance and behavioral rebellion."
  },
  {
    "id": "c12-edu-4-mcq-20",
    "question": "Two healthy children in the same Grade 1 class show marked differences: one reads fluently while the other struggles with basic alphabets. Which developmental principle explains this?",
    "options": [
      "A):   Principle of Non-Continuity",
      "B):   Principle of Stagnant Growth",
      "C):   Principle of Individual Differences",
      "D):   Principle of Negative Reinforcement"
    ],
    "correctAnswer": "c",
    "explanation": "The Principle of Individual Differences establishes that children mature at unique internal rates despite following the same sequence."
  },
  {
    "id": "c12-edu-4-mcq-21",
    "question": "Under the National Education Policy (NEP 2020), what role does the Adolescent Education Program (AEP) play in secondary schools?",
    "options": [
      "A):   Conducting military drills exclusively",
      "B):   Providing life skills, scientific sex education, stress management, and substance abuse awareness",
      "C):   Enforcing rote memorization of textbooks",
      "D):   Abolishing all extracurricular activities"
    ],
    "correctAnswer": "b",
    "explanation": "The Adolescent Education Program (AEP) under NEP 2020 imparts crucial life skills, health education, and substance abuse awareness."
  },
  {
    "id": "c12-edu-4-mcq-22",
    "question": "A 15-year-old girl starves herself and engages in obsessive mirror-checking due to a distorted belief that her facial shape is ugly, despite normal appearance. This condition is diagnosed as:",
    "options": [
      "A):   Sensorimotor assimilation",
      "B):   Normal concrete operational logic",
      "C):   Healthy sublimation",
      "D):   Body Dysmorphic Disorder exacerbated by digital social media comparison"
    ],
    "correctAnswer": "d",
    "explanation": "Body Dysmorphic Disorder (BDD) involves obsessive preoccupation with perceived bodily defects, heavily amplified during adolescence."
  },
  {
    "id": "c12-edu-4-mcq-23",
    "question": "Why is publicly ridiculing or sarcastically shaming an adolescent student in the classroom considered destructive by educational psychologists?",
    "options": [
      "A):   Because adolescents have hyper-sensitive egos, and public humiliation shatters self-worth, triggering rebellion or mutism",
      "B):   Because it increases their test scores",
      "C):   Because it accelerates the cephalocaudal sequence",
      "D):   Because it converts development into growth"
    ],
    "correctAnswer": "a",
    "explanation": "Adolescents have fragile, emerging self-concepts; public humiliation causes deep narcissistic trauma, driving them into truancy or hostility."
  },
  {
    "id": "c12-edu-4-mcq-24",
    "question": "Which of the following correctly pairs the developmental stage with its primary psychosocial crisis formulated by Erik Erikson?",
    "options": [
      "A):   Infancy &mdash; Industry vs. Inferiority",
      "B):   Early Childhood &mdash; Identity vs. Role Confusion",
      "C):   Later Childhood &mdash; Industry vs. Inferiority",
      "D):   Adolescence &mdash; Trust vs. Mistrust"
    ],
    "correctAnswer": "c",
    "explanation": "Later Childhood (school age) corresponds to Erikson's crisis of Industry vs. Inferiority, where children master formal skills and social teamwork."
  },
  {
    "id": "c12-edu-4-mcq-25",
    "question": "Developmental psychologists argue that development is 'an integrated whole'. What does this imply for school curriculum planning?",
    "options": [
      "A):   Curriculum must focus exclusively on intellectual IQ tests",
      "B):   Schools must cater simultaneously to physical, intellectual, emotional, and social development of students",
      "C):   All students must be awarded identical marks",
      "D):   Physical sports should be removed to maximize study time"
    ],
    "correctAnswer": "b",
    "explanation": "Because development is integrated, a balanced curriculum must nurture physical health, cognitive intellect, emotional resilience, and social skills together."
  }
];
