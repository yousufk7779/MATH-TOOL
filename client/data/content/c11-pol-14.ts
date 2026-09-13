// Class 11 Political Science Chapter 14: Social Justice (Marks: 06)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #7C4DFF (Deep Indigo / Radiant Purple)

const themeColor = "#7C4DFF";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol14HtmlOverview = `
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
  <div style="background: rgba(124, 77, 255, 0.06); border: 1.5px solid #7C4DFF; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #7C4DFF; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Concepts of Justice</h2>
    <p class="text-center" style="color: #B388FF; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 14: Social Justice (6 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #7C4DFF; border-radius: 6px;">
        <b style="color: #7C4DFF; font-size: 16px; display: block; margin-bottom: 4px;">1. Justice (Suum Cuique Tribuere):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The moral and political virtue concerned with &lsquo;giving each person their due&rsquo; &mdash; ensuring fair distribution of resources, opportunities, rights, and burdens across society while upholding human dignity.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #7C4DFF; border-radius: 6px;">
        <b style="color: #7C4DFF; font-size: 16px; display: block; margin-bottom: 4px;">2. Distributive Justice:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The philosophical principle governing the fair, ethical, and equitable allocation of societal benefits (wealth, public offices, healthcare, education) and burdens (taxes, civic duties) among members of a community.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #7C4DFF; border-radius: 6px;">
        <b style="color: #7C4DFF; font-size: 16px; display: block; margin-bottom: 4px;">3. Veil of Ignorance (John Rawls):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A celebrated thought experiment in which rational individuals choose principles of justice without knowing their own future caste, religion, wealth, gender, or innate physical/intellectual talents, inevitably opting for fair protections for the least advantaged.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #7C4DFF; border-radius: 6px;">
        <b style="color: #7C4DFF; font-size: 16px; display: block; margin-bottom: 4px;">4. Proportionate Justice:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The principle that social rewards and compensation must correspond proportionately to the scale of human effort, specialized training, difficulty, risk, and social responsibility involved in an occupation.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WHAT IS JUSTICE? IS IT ALL ABOUT FAIRNESS? -->
  <h2 style="color: #7C4DFF; border-bottom: 2px solid #7C4DFF; padding-bottom: 8px; margin-top: 30px; font-size: 20px;">1. What is Justice? Is Justice All About Fairness?</h2>

  <p>Across ancient civilizations, thinkers sought to define the supreme moral ideal of <b style="color: #7C4DFF;">Justice</b>:</p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #7C4DFF;">Ancient Greece (Plato):</b> In <i>The Republic</i>, Plato explored dialogues between Socrates and his companions on the meaning of justice. Rejecting the crude definition that justice is <i>&ldquo;might is right&rdquo;</i> (Thrasymachus) or simply <i>&ldquo;speaking truth and paying debts&rdquo;</i> (Cephalus), Plato established that justice is the supreme virtue of social harmony, wherein every individual and class performs the social function best suited to their natural soul-aptitude (producers, soldiers, philosopher-rulers) without encroaching upon others.</li>
    <li><b style="color: #7C4DFF;">Ancient India:</b> Justice was conceptualized through <b style="color: #7C4DFF;">Dharma</b> &mdash; a cosmic, ethical, and social order upholding righteousness, societal duty, and moral rectitude. The ruler&rsquo;s primary duty was <i>Dharmaniti</i> (upholding justice and protecting the vulnerable).</li>
    <li><b style="color: #7C4DFF;">China (Confucius):</b> Justice was seen as kings rewarding virtue and penalizing wrongdoing to maintain righteous social equilibrium.</li>
  </ul>

  <!-- THINKER QUOTE BOX: PLATO -->
  <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #7C4DFF; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-style: italic; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &ldquo;Justice in the life and conduct of the state is possible only as first it resides in the hearts and souls of the citizens... Justice is having and doing what is one&rsquo;s own, and not encroaching upon the sphere of others.&rdquo;
    </p>
    <p style="margin: 6px 0 0 0; text-align: right; color: #7C4DFF; font-weight: bold; font-size: 14px;">
      &mdash; Plato, <i>The Republic</i> (c. 375 BCE)
    </p>
  </div>

  <p><b style="color: #7C4DFF;">Is Justice All About Fairness?</b></p>
  <p>In modern political philosophy, justice is fundamentally anchored in <b style="color: #7C4DFF;">Fairness</b>. As political theorist John Rawls famously framed it, justice is <i>&ldquo;Justice as Fairness&rdquo;</i>. Fairness embodies impartiality, the absence of bias, transparency, reciprocal respect, and treating human beings not according to arbitrary royal whims, caste privileges, or wealth, but according to rational and ethical standards of moral desert.</p>

  <!-- SECTION 2: THREE PRINCIPLES OF JUSTICE -->
  <h2 style="color: #7C4DFF; border-bottom: 2px solid #7C4DFF; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">2. The Three Cardinal Principles of Justice</h2>

  <p>To determine what is fair in a complex society, political theorists identify three distinct, complementary principles of justice:</p>

  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #7C4DFF;">1. Equal Treatment for Equals (Principle of Moral Equality):</b>
      <br/>Because all human beings share equal moral worth as human beings, they are entitled to fundamental civil and political equality. This principle demands:
      <br/>&bull; Equal voting rights (&lsquo;one person, one vote&rsquo;).
      <br/>&bull; Equal civil liberties (freedom of speech, religion, and movement).
      <br/>&bull; Equality before the law &mdash; if two individuals commit the same crime, they must receive the identical legal penalty regardless of their caste, wealth, or political connections.
    </li>
    <li><b style="color: #7C4DFF;">2. Proportionate Justice (Principle of Merit and Effort):</b>
      <br/>While all human beings are equal in moral worth, treating everyone identically in every single sphere produces gross injustice. If all students receive 90% marks regardless of their answers, or if an architect who spent years studying and designing a bridge receives the identical wage as an untrained casual worker, effort and excellence are killed.
      <br/><b style="color: #B388FF;">Rule of Proportion:</b> Justice requires that rewards, wages, and honors must be proportionate to the <b style="color: #7C4DFF;">scale of effort, training, skill, social responsibility, and physical risk</b> involved in an occupation (e.g., deep-sea miners, surgeons, judges, and high-altitude soldiers).
    </li>
    <li><b style="color: #7C4DFF;">3. Recognition of Special Needs (Distribution Based on Need):</b>
      <br/>A truly just society cannot stop at equal treatment and proportionate reward. It must recognize that certain individuals &mdash; due to severe physical disabilities, age, illness, or centuries of historic social marginalization (like caste untouchability) &mdash; cannot compete on equal terms.
      <br/><b style="color: #B388FF;">Compensatory Justice:</b> Justice demands special provisions, wheelchair ramps, reserved quotas, pensions, and free healthcare to empower vulnerable citizens to live dignified lives.
    </li>
  </ul>

  <!-- SECTION 3: JOHN RAWLS' THEORY OF JUSTICE -->
  <h2 style="color: #7C4DFF; border-bottom: 2px solid #7C4DFF; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">3. John Rawls: The &lsquo;Veil of Ignorance&rsquo; and Distributive Justice</h2>

  <p>How can society agree on fair principles of justice when everyone is biased by their own personal wealth, religion, and social position? Rich industrialists favor low taxes; poor workers favor high welfare spending. Upper castes favor meritocracy alone; marginalized castes demand reservations.</p>

  <p>In his landmark 1971 masterpiece <b style="color: #7C4DFF;">A Theory of Justice</b>, American philosopher <b style="color: #7C4DFF;">John Rawls</b> solved this dilemma with a legendary thought experiment:</p>

  <!-- THINKER QUOTE BOX: RAWLS -->
  <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #7C4DFF; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-style: italic; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &ldquo;Justice is the first virtue of social institutions, as truth is of systems of thought... The principles of justice are chosen behind a veil of ignorance. This ensures that no one is advantaged or disadvantaged in the choice of principles by the outcome of natural chance or the contingency of social circumstances.&rdquo;
    </p>
    <p style="margin: 6px 0 0 0; text-align: right; color: #7C4DFF; font-weight: bold; font-size: 14px;">
      &mdash; John Rawls, <i>A Theory of Justice</i> (1971)
    </p>
  </div>

  <p><b style="color: #7C4DFF;">The &lsquo;Veil of Ignorance&rsquo; Mechanism:</b></p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li>Imagine rational people coming together in an &lsquo;Original Position&rsquo; to draft the basic rules of a future society.</li>
    <li>They are placed behind a <b style="color: #7C4DFF;">&lsquo;Veil of Ignorance&rsquo;</b>: they know general facts about economics and human psychology, but <b style="color: #7C4DFF;">know nothing about their own personal identity</b>. They do not know whether they will be born rich or poor, male or female, upper caste or Dalit, Hindu or Muslim, able-bodied or disabled, brilliant or intellectually challenged.</li>
    <li><b style="color: #B388FF;">What will rational individuals choose?</b> They will NOT gamble. A rational person will assume the worst-case scenario (&ldquo;What if I turn out to be the poorest, disabled person born into the most discriminated community?&rdquo;). Therefore, they will choose the <b style="color: #7C4DFF;">Maximin Strategy</b> &mdash; designing a society where the worst-off position is as safe, dignified, and well-provided for as possible.</li>
  </ul>

  <!-- STANDALONE CLEAN DIAGRAM CARD (WHITE BACKGROUND, ZERO DUPLICATE TOP TITLES) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(124, 77, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 540px;">
      <svg viewBox="0 0 520 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
        <!-- Card Background -->
        <rect width="520" height="340" fill="#FFFFFF" rx="8"/>
        
        <!-- Header Banner -->
        <rect x="15" y="10" width="490" height="42" rx="6" fill="#7C4DFF"/>
        <text x="260" y="30" fill="#FFFFFF" font-size="14.5" font-weight="bold" text-anchor="middle">JOHN RAWLS' VEIL OF IGNORANCE &amp; THREE PILLARS OF JUSTICE</text>
        <text x="260" y="45" fill="#EDE7F6" font-size="11" font-weight="600" text-anchor="middle">Distributive Justice as Fairness &bull; The Maximin Decision Framework</text>

        <!-- Central Top Card: The Veil of Ignorance -->
        <rect x="15" y="62" width="490" height="72" rx="6" fill="#EDE7F6" stroke="#512DA8" stroke-width="1.5"/>
        <text x="260" y="82" fill="#311B92" font-size="12" font-weight="bold" text-anchor="middle">🎭 THE ORIGINAL POSITION BEHIND THE VEIL OF IGNORANCE</text>
        <text x="260" y="99" fill="#4527A0" font-size="10.5" text-anchor="middle">You do not know: Your Wealth, Caste, Religion, Gender, or Talents in the future society.</text>
        <text x="260" y="115" fill="#5E35B1" font-size="10" font-style="italic" text-anchor="middle">&rarr; Rational self-interest dictates choosing MAXIMIN: Protecting the LEAST ADVANTAGED person.</text>

        <!-- Column 1: Equal Treatment -->
        <rect x="15" y="146" width="155" height="175" rx="6" fill="#EDE7F6" stroke="#512DA8" stroke-width="1.5"/>
        <rect x="15" y="146" width="155" height="26" rx="6" fill="#512DA8"/>
        <text x="92" y="164" fill="#FFFFFF" font-size="10.5" font-weight="bold" text-anchor="middle">1. EQUAL TREATMENT</text>
        <text x="23" y="188" fill="#311B92" font-size="10" font-weight="bold">&bull; Equal Moral Worth</text>
        <text x="23" y="206" fill="#311B92" font-size="9.5">&bull; Universal basic liberties</text>
        <text x="23" y="224" fill="#311B92" font-size="9.5">&bull; Right to vote &amp; speak</text>
        <text x="23" y="242" fill="#311B92" font-size="9.5">&bull; Equality before law</text>
        <text x="23" y="260" fill="#311B92" font-size="9.5">&bull; Same penalty for crimes</text>
        <text x="92" y="295" fill="#311B92" font-size="9" font-weight="bold" text-anchor="middle">[Moral Base Floor]</text>

        <!-- Column 2: Proportionate Justice -->
        <rect x="182" y="146" width="155" height="175" rx="6" fill="#E8EAF6" stroke="#303F9F" stroke-width="1.5"/>
        <rect x="182" y="146" width="155" height="26" rx="6" fill="#303F9F"/>
        <text x="259" y="164" fill="#FFFFFF" font-size="10.5" font-weight="bold" text-anchor="middle">2. PROPORTIONATE</text>
        <text x="190" y="188" fill="#1A237E" font-size="10" font-weight="bold">&bull; Reward to Effort</text>
        <text x="190" y="206" fill="#1A237E" font-size="9.5">&bull; Skill &amp; specialized study</text>
        <text x="190" y="224" fill="#1A237E" font-size="9.5">&bull; Physical hazard &amp; risk</text>
        <text x="190" y="242" fill="#1A237E" font-size="9.5">&bull; Social responsibility</text>
        <text x="190" y="260" fill="#1A237E" font-size="9.5">&bull; Fair merit incentives</text>
        <text x="259" y="295" fill="#1A237E" font-size="9" font-weight="bold" text-anchor="middle">[Merit &amp; Reward]</text>

        <!-- Column 3: Special Needs -->
        <rect x="350" y="146" width="155" height="175" rx="6" fill="#FCE4EC" stroke="#C2185B" stroke-width="1.5"/>
        <rect x="350" y="146" width="155" height="26" rx="6" fill="#C2185B"/>
        <text x="427" y="164" fill="#FFFFFF" font-size="10.5" font-weight="bold" text-anchor="middle">3. SPECIAL NEEDS</text>
        <text x="358" y="188" fill="#880E4F" font-size="10" font-weight="bold">&bull; Compensatory Aid</text>
        <text x="358" y="206" fill="#880E4F" font-size="9.5">&bull; Quotas &amp; reservations</text>
        <text x="358" y="224" fill="#880E4F" font-size="9.5">&bull; Wheelchair ramps</text>
        <text x="358" y="242" fill="#880E4F" font-size="9.5">&bull; Old-age &amp; sick pensions</text>
        <text x="358" y="260" fill="#880E4F" font-size="9.5">&bull; Remedying caste scars</text>
        <text x="427" y="295" fill="#880E4F" font-size="9" font-weight="bold" text-anchor="middle">[Human Compassion]</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The normative architecture of Social Justice: Rawls' Veil of Ignorance ensuring the Maximin rule, harmonized through Equal Treatment, Proportionate Merit, and Recognition of Special Needs.
    </div>
  </div>

  <p><b style="color: #7C4DFF;">Rawls&rsquo; Two Principles of Justice:</b></p>
  <ol style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #7C4DFF;">First Principle (Equal Basic Liberties):</b> Each person has an equal right to the most extensive scheme of equal basic liberties (speech, conscience, voting, assembly) compatible with a similar scheme for others.</li>
    <li><b style="color: #7C4DFF;">Second Principle (The Difference Principle):</b> Social and economic inequalities are permissible ONLY IF they satisfy two conditions:
      <br/>(a) They are attached to positions and offices open to all under conditions of <b style="color: #7C4DFF;">fair equality of opportunity</b>.
      <br/>(b) They work to the <b style="color: #7C4DFF;">greatest benefit of the least-advantaged members</b> of society (The Difference Principle).
    </li>
  </ol>

  <!-- SECTION 4: DIFFERENT FORMS OF INJUSTICE & HOW TO SECURE JUSTICE -->
  <h2 style="color: #7C4DFF; border-bottom: 2px solid #7C4DFF; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">4. Different Forms of Injustice &amp; How Justice Can Be Secured</h2>

  <p>Injustice manifests in society through four distinct expressions:</p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #7C4DFF;">(i) Legal Injustice:</b> Discriminatory statutes, arbitrary police harassment, denial of bail, and an expensive judicial system where the wealthy purchase justice while the poor languish as undertrials.</li>
    <li><b style="color: #7C4DFF;">(ii) Social Injustice:</b> Entrenched caste untouchability, racial segregation, patriarchal violence, female infanticide, and denial of human dignity based on birth.</li>
    <li><b style="color: #7C4DFF;">(iii) Economic Injustice:</b> Extreme polarization of wealth, starvation wages, bonded labor, and absence of basic healthcare and housing.</li>
    <li><b style="color: #7C4DFF;">(iv) Structural Injustice:</b> Invisible institutional barriers that systematically prevent historically marginalized groups from entering halls of power, regardless of individual talent.</li>
  </ul>

  <p><b style="color: #7C4DFF;">How Can Social Justice Be Secured in India?</b></p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #7C4DFF;">1. Just Distribution of Essential Social Goods:</b> The State must guarantee a basic social floor &mdash; free, high-quality primary and secondary education, clean drinking water, nutrition (mid-day meals, PDS food grains), and universal healthcare.</li>
    <li><b style="color: #7C4DFF;">2. Affirmative Action &amp; Quotas:</b> Implementation of the <b style="color: #7C4DFF;">Mandal Commission (1980/1990)</b> recommendations granting 27% reservations to Other Backward Classes (OBCs), alongside SC/ST reservations, to ensure marginalized communities hold administrative decision-making posts.</li>
    <li><b style="color: #7C4DFF;">3. Structural Land &amp; Economic Reforms:</b> Abolition of zamindari, redistribution of agricultural land to landless Dalit tillers, and enforcement of minimum wages.</li>
    <li><b style="color: #7C4DFF;">4. Dr. Rammanohar Lohia&rsquo;s Theory of Special Opportunities (Vishesh Avsar):</b> Socialist leader Lohia argued that mere formal equality in India cements the stranglehold of the top 10% upper castes. He championed <i>Vishesh Avsar</i> &mdash; granting at least 60% leadership positions in politics, administration, and armed forces to backward classes, Dalits, Adivasis, women, and religious minorities.</li>
  </ul>

  <!-- COMPARISON TABLE BOX -->
  <div style="background: rgba(0,0,0,0.25); border: 1.5px solid #7C4DFF; border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 class="text-center" style="color: #7C4DFF; margin: 0 0 12px 0; font-size: 18px;">⚖️ Ideological Debate: Free Market vs. Welfare State on Social Justice</h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #FFFFFF;">
        <thead>
          <tr style="background: rgba(124, 77, 255, 0.2); border-bottom: 2px solid #7C4DFF;">
            <th style="padding: 10px; text-align: left; width: 50%; color: #B388FF;">Free Market Advocates (Laissez-Faire)</th>
            <th style="padding: 10px; text-align: left; width: 50%; color: #00E676;">Welfare State Advocates (Social Justice)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #B388FF;">Market Efficiency:</b> Markets allocate resources fairly based on demand, talent, and consumer choice.</td>
            <td style="padding: 10px;"><b style="color: #00E676;">Market Blindness:</b> Markets serve only those with purchasing power; they ignore the sick, destitute, and poor.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #B388FF;">Opposition to Welfare:</b> High taxes and subsidies distort market incentives and breed bureaucratic corruption.</td>
            <td style="padding: 10px;"><b style="color: #00E676;">Public Provision:</b> Essential goods (schools, hospitals) cannot be left to private profit; state must provide them free.</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><b style="color: #B388FF;">Trickle-Down:</b> Wealth created by capitalists eventually trickles down to benefit the entire economy.</td>
            <td style="padding: 10px;"><b style="color: #00E676;">Active Redistribution:</b> Wealth accumulates at the top; without state redistribution, democracy becomes plutocracy.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(124, 77, 255, 0.08); border-left: 4px solid #7C4DFF; padding: 14px 16px; margin: 25px 0; border-radius: 0 8px 8px 0;">
    <b style="color: #7C4DFF; font-size: 16px; display: block; margin-bottom: 4px;">🎯 Board Exam Golden Tip (6-Mark Essay Strategy):</b>
    <span style="color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">When answering <i>&ldquo;What is social justice? Explain John Rawls' theory of the Veil of Ignorance&rdquo;</i>: (1) Define justice as giving each person their due, (2) Explain the 3 principles (Equal treatment, Proportionate justice, Special needs), (3) Detail John Rawls' Veil of Ignorance thought experiment and Maximin rule, (4) State Rawls' two principles of justice, and (5) Conclude with Indian applications like the Mandal Commission and Lohia's <i>Vishesh Avsar</i>.</span>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: rgba(0,0,0,0.4); border: 1.5px solid #7C4DFF; border-radius: 12px; padding: 18px; margin-top: 30px;">
    <h3 class="text-center" style="color: #7C4DFF; margin: 0 0 14px 0; font-size: 19px;">⚡ Master Revision Thinkers, Theories &amp; Principles Cheat Sheet</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(124, 77, 255, 0.2);">
        <b style="color: #7C4DFF;">Plato:</b> <i>The Republic</i>; defined justice as harmony of the soul and state.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(124, 77, 255, 0.2);">
        <b style="color: #7C4DFF;">John Rawls:</b> <i>A Theory of Justice</i> (1971); Justice as Fairness &amp; the Veil of Ignorance.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(124, 77, 255, 0.2);">
        <b style="color: #7C4DFF;">Difference Principle:</b> Inequalities justified only if they benefit the least advantaged.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(124, 77, 255, 0.2);">
        <b style="color: #7C4DFF;">Proportionate Justice:</b> Rewards should correspond to effort, risk, and specialized training.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(124, 77, 255, 0.2);">
        <b style="color: #7C4DFF;">Special Needs Principle:</b> Providing affirmative accommodations to the vulnerable.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(124, 77, 255, 0.2);">
        <b style="color: #7C4DFF;">Dr. Rammanohar Lohia:</b> <i>Vishesh Avsar</i> (Special Opportunities) for 60% backward classes.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(124, 77, 255, 0.2);">
        <b style="color: #7C4DFF;">Mandal Commission (1980):</b> 27% reservations for Other Backward Classes (OBCs).
      </div>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 2: SOLUTIONS (EXACT 25 Q&A)                    */
/* -------------------------------------------------------------------------- */

export const c11Pol14HtmlSolutions = `
<style>
  p, li, div:not(.table-container):not(.table-responsive):not(.pt-scroll-wrapper):not(.mcq-option) {
    text-align: justify !important;
  }
  h1, h2, h3, h4, h5, h6 { text-align: left; }
  .text-center { text-align: center !important; }
  .text-left { text-align: left !important; }
</style>

<div style="padding: 12px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">

  <!-- ======================================================================== -->
  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS) — 12 QUESTIONS      -->
  <!-- ======================================================================== -->
  <div style="background: rgba(124, 77, 255, 0.08); border-left: 5px solid #7C4DFF; padding: 12px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #7C4DFF; margin: 0; font-size: 18px;">SECTION A: Very Short Answer Questions (1 &amp; 2 Marks) &mdash; Exactly 12 Questions</h2>
    <span style="color: #B388FF; font-size: 13.5px;">Direct Recall, Definitional Precision &amp; 1-to-2 Sentence Answers</span>
  </div>

  <!-- Q1 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q1: What is the core classical definition of Justice?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Justice is the moral and political principle of &lsquo;giving each person their due&rsquo; (<i>suum cuique tribuere</i>), ensuring fairness in the distribution of rights, goods, and burdens.
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q2: How did Plato define Justice in &lsquo;The Republic&rsquo;?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Plato defined justice as social harmony wherein each individual and class performs the specific task for which they are naturally best suited without meddling in the affairs of others.
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q3: Is justice all about fairness? Explain briefly.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Yes, in modern political philosophy, justice is fundamentally about fairness &mdash; demanding impartiality, non-arbitrary rules, reciprocity, and treating individuals according to moral desert rather than birth privileges.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q4: What is the principle of &lsquo;Equal Treatment for Equals&rsquo;?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> It affirms that since all human beings share equal moral worth, they must receive equal civil rights, equal franchise, and identical legal penalties for the same crime regardless of caste or wealth.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q5: What is &lsquo;Proportionate Justice&rsquo;?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Proportionate justice is the principle that compensation and social rewards should correspond proportionately to the scale of human effort, skill, training, risk, and responsibility in an occupation.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q6: Why must a just society recognize the &lsquo;Special Needs&rsquo; of certain citizens?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Because individuals with physical disabilities, severe illnesses, or historical caste oppression cannot compete equally; justice demands affirmative compensatory support to enable them to live with dignity.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q7: What is John Rawls&rsquo; hypothetical &lsquo;Veil of Ignorance&rsquo;?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> A thought experiment where individuals choose principles of justice without knowing their own future wealth, caste, gender, religion, or natural abilities, ensuring completely impartial decision-making.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q8: State the &lsquo;Difference Principle&rsquo; formulated by John Rawls.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Rawls stated that socio-economic inequalities are permissible only if they work to the greatest benefit of the least-advantaged members of society.
    </p>
  </div>

  <!-- Q9 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q9: What was the key recommendation of the Mandal Commission (1980)?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> The Mandal Commission recommended a 27% reservation in central government jobs and educational institutions for Other Backward Classes (OBCs) to ensure social justice.
    </p>
  </div>

  <!-- Q10 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q10: What did Dr. Rammanohar Lohia mean by &lsquo;Vishesh Avsar&rsquo; (Special Opportunities)?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Lohia advocated reserving at least 60% of all top leadership and administrative positions for backward classes, Dalits, Adivasis, women, and minorities to dismantle upper-caste hegemony.
    </p>
  </div>

  <!-- Q11 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q11: Name two forms of Structural Injustice.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Generational caste-based exclusion from education and systemic economic monopolies locking marginalized communities into low-wage, servile labor.
    </p>
  </div>

  <!-- Q12 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 8px 0; font-size: 16px;">Q12: What is the primary critique of unbridled Free Markets from the standpoint of Social Justice?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #7C4DFF;">Answer:</b> Free markets cater only to those with purchasing power, completely neglecting the destitute, disabled, and impoverished who cannot afford essential healthcare and education.
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER QUESTIONS (4 MARKS) — 8 QUESTIONS                -->
  <!-- ======================================================================== -->
  <div style="background: rgba(124, 77, 255, 0.08); border-left: 5px solid #7C4DFF; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #7C4DFF; margin: 0; font-size: 18px;">SECTION B: Short Answer Questions (4 Marks) &mdash; Exactly 8 Questions</h2>
    <span style="color: #B388FF; font-size: 13.5px;">80&ndash;100 Words &bull; Point-wise Analytical &amp; Philosophical Evaluation</span>
  </div>

  <!-- Q13 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px;">Q13: &ldquo;Is justice all about fairness?&rdquo; Explain how fairness forms the core foundation of social justice.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Fairness is the moral soul of justice:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #7C4DFF;">Impartiality:</b> Fairness requires that societal rules must not be skewed in favor of royal birth, aristocratic lineage, or corporate wealth.</li>
        <li><b style="color: #7C4DFF;">Reciprocity:</b> It ensures that what is demanded of one citizen is equally expected of all others under the rule of law.</li>
        <li><b style="color: #7C4DFF;">Leveling Starting Lines:</b> Fairness insists that accidents of birth (being born poor or in a marginalized caste) should not dictate an individual&rsquo;s destiny.</li>
        <li><b style="color: #7C4DFF;">Moral Desert:</b> It rewards individuals based on their genuine character, effort, and contribution rather than nepotism.</li>
      </ol>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px;">Q14: Explain the three principles of justice: Equal Treatment, Proportionate Justice, and Special Needs.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      A just society harmonizes three complementary principles:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #7C4DFF;">1. Equal Treatment for Equals:</b> Universal basic rights, equal voting franchise, and identical criminal penalties for all citizens regardless of status.</li>
        <li><b style="color: #7C4DFF;">2. Proportionate Justice:</b> Rewarding individuals proportionately to the scale of training, effort, danger, and social responsibility of their labor.</li>
        <li><b style="color: #7C4DFF;">3. Recognition of Special Needs:</b> Granting special compensatory support, quotas, and healthcare to vulnerable, disabled, and historically oppressed groups.</li>
      </ul>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px;">Q15: How does John Rawls use the &lsquo;Veil of Ignorance&rsquo; to arrive at fair principles of justice?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Rawls constructs an ingenious thought experiment:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #7C4DFF;">Impartial Condition:</b> Individuals choose social rules without knowing their future identity &mdash; whether they will be rich, poor, talented, disabled, male, female, or belonging to a minority.</li>
        <li><b style="color: #7C4DFF;">The Maximin Choice:</b> Because anyone could end up in the worst-off position, rational self-interest dictates choosing rules that maximize the minimum condition (Maximin).</li>
        <li><b style="color: #7C4DFF;">Fair Outcomes:</b> This guarantees universal basic civil liberties and ensures economic inequalities benefit the least advantaged.</li>
      </ol>
    </div>
  </div>

  <!-- Q16 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px;">Q16: What are the different forms of injustice prevalent in society?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Injustice operates through four major structural channels:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #7C4DFF;">Legal Injustice:</b> Biased laws, lack of affordable legal representation, and police brutality against the poor.</li>
        <li><b style="color: #7C4DFF;">Social Injustice:</b> Caste untouchability, female infanticide, racial prejudice, and religious persecution.</li>
        <li><b style="color: #7C4DFF;">Economic Injustice:</b> Grotesque wealth disparities, starvation wages, and monopolization of public resources by a tiny corporate elite.</li>
        <li><b style="color: #7C4DFF;">Structural Injustice:</b> Institutionalized denial of educational access that keeps marginalized groups permanently subordinated.</li>
      </ul>
    </div>
  </div>

  <!-- Q17 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px;">Q17: Explain the relationship between Justice and Equality.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Justice and Equality are deeply interlinked, yet distinct:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #7C4DFF;">Equality as Baseline of Justice:</b> A society cannot be just if it treats citizens as unequal in moral worth or denies them equal fundamental rights.</li>
        <li><b style="color: #7C4DFF;">Justice Beyond Mere Sameness:</b> Justice recognizes that identical treatment in all circumstances is unjust. Rewarding a hardworking surgeon the same as a truant worker violates proportionate justice.</li>
        <li><b style="color: #7C4DFF;">Synthesis:</b> Justice uses equality as its moral floor, while using proportionate merit and compensatory special needs to achieve fairness.</li>
      </ol>
    </div>
  </div>

  <!-- Q18 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px;">Q18: How can Social Justice be secured in India through state action?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      The Indian State employs multiple constitutional strategies to secure social justice:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #7C4DFF;">Constitutional Safeguards:</b> Abolition of Untouchability (Article 17) and prohibition of discrimination (Article 15).</li>
        <li><b style="color: #7C4DFF;">Affirmative Action:</b> Reservations in higher education and public employment for SCs, STs, and OBCs (Articles 15(4) &amp; 16(4)).</li>
        <li><b style="color: #7C4DFF;">Basic Needs Provision:</b> National Food Security Act, free primary education (Article 21A), and rural employment guarantees (MGNREGA).</li>
        <li><b style="color: #7C4DFF;">Agrarian Land Reforms:</b> Tenancy security and land ceilings to redistribute assets to landless laborers.</li>
      </ul>
    </div>
  </div>

  <!-- Q19 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px;">Q19: Discuss Dr. Rammanohar Lohia&rsquo;s vision of Social Justice and &lsquo;Vishesh Avsar&rsquo;.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Socialist leader Dr. Rammanohar Lohia made pioneering contributions:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #7C4DFF;">Critique of Formal Merit:</b> Lohia pointed out that merit in India was monopolized by high-caste elites with centuries of educational advantages.</li>
        <li><b style="color: #7C4DFF;">Concept of Vishesh Avsar:</b> He argued that formal equality freezes caste dominance; hence, 60% of all leadership positions in politics and bureaucracy must be reserved for backward classes, Dalits, women, and minorities.</li>
        <li><b style="color: #7C4DFF;">Sapta Kranti:</b> Lohia integrated caste annihilation with gender equality, civil liberties, and economic redistribution in his vision of Seven Revolutions.</li>
      </ol>
    </div>
  </div>

  <!-- Q20 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 10px 0; font-size: 16.5px;">Q20: Contrast the Free Market model with the Welfare State model on securing Social Justice.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      The two models offer competing mechanisms for distribution:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #7C4DFF;">Free Market Model:</b> Advocates argue that unregulated markets reward efficiency, talent, and consumer choice. However, markets leave the poor and destitute to perish because they lack purchasing power.</li>
        <li><b style="color: #7C4DFF;">Welfare State Model:</b> Holds that essential goods &mdash; healthcare, education, clean drinking water &mdash; are fundamental human rights that cannot be commodified. The state intervenes through taxation and public distribution to guarantee human dignity.</li>
      </ul>
    </div>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION C: LONG ANSWER QUESTIONS (6 MARKS) — 5 QUESTIONS                 -->
  <!-- ======================================================================== -->
  <div style="background: rgba(124, 77, 255, 0.08); border-left: 5px solid #7C4DFF; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #7C4DFF; margin: 0; font-size: 18px;">SECTION C: Long Answer Essay Questions (6 Marks) &mdash; Exactly 5 Questions</h2>
    <span style="color: #B388FF; font-size: 13.5px;">120&ndash;150 Words &bull; Structured 3-Tier Answers (Intro &rarr; Core Analysis &rarr; Conclusion)</span>
  </div>

  <!-- Q21 -->
  <div style="margin-bottom: 28px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 12px 0; font-size: 17px;">Q21: &ldquo;Justice is all about fairness.&rdquo; Explain John Rawls&rsquo; theory of Justice with special reference to the &lsquo;Veil of Ignorance&rsquo;.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75;">
      <p><b style="color: #7C4DFF;">Introduction:</b> In his 1971 classic <i>A Theory of Justice</i>, John Rawls revitalized political philosophy by defining justice as fairness, derived through an impartial social contract.</p>

      <p><b style="color: #7C4DFF;">1. The Veil of Ignorance Thought Experiment:</b>
      <br/>Rawls imagines individuals in an &lsquo;Original Position&rsquo; behind a &lsquo;Veil of Ignorance&rsquo;. They are stripped of all knowledge about their personal identities &mdash; wealth, caste, race, gender, or innate intelligence. Because no one knows where they will end up, they cannot rig rules in their own favor.</p>

      <p><b style="color: #7C4DFF;">2. The Maximin Strategy:</b>
      <br/>Under profound uncertainty, rational individuals avoid gambling and choose the &lsquo;Maximin&rsquo; rule &mdash; maximizing the position of the least advantaged person, ensuring that if they turn out to be the poorest or most vulnerable, their life remains dignified.</p>

      <p><b style="color: #7C4DFF;">3. Rawls&rsquo; Two Principles:</b>
      <br/>&bull; <b style="color: #7C4DFF;">Equal Basic Liberties:</b> Maximum scheme of basic freedoms for all citizens.
      <br/>&bull; <b style="color: #7C4DFF;">The Difference Principle:</b> Economic inequalities are justified only if they attach to offices open to all under fair opportunity, and work to the greatest benefit of the worst-off members of society.</p>

      <p><b style="color: #7C4DFF;">Conclusion:</b> Rawls proved that a commitment to fairness naturally generates an egalitarian welfare state that protects human dignity.</p>
    </div>
  </div>

  <!-- Q22 -->
  <div style="margin-bottom: 28px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 12px 0; font-size: 17px;">Q22: Analyze the three principles of justice &mdash; Equal Treatment, Proportionate Justice, and Special Needs. How do they resolve conflicting claims?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75;">
      <p><b style="color: #7C4DFF;">Introduction:</b> A just society must reconcile diverse, competing human claims. Political theory identifies three fundamental principles that must be harmonized.</p>

      <p><b style="color: #7C4DFF;">1. Equal Treatment for Equals:</b>
      <br/>Grounds justice in universal human dignity. All citizens receive identical fundamental civil liberties, universal adult franchise, and equality before the law. Discrimination based on caste, race, or gender is completely barred.</p>

      <p><b style="color: #7C4DFF;">2. Proportionate Justice (Merit and Hazard):</b>
      <br/>Recognizes that equal treatment in every situation is unfair. A surgeon who undergoes 15 years of grueling study, or a miner facing toxic underground danger, deserves greater compensation than unskilled, low-risk labor. Reward must match effort, skill, and danger.</p>

      <p><b style="color: #7C4DFF;">3. Recognition of Special Needs:</b>
      <br/>Compensates for natural or social disabilities. Disabled individuals, impoverished elders, and historically oppressed castes require affirmative aid, reservations, and welfare benefits to participate as equals.</p>

      <p><b style="color: #7C4DFF;">Conclusion:</b> Justice is the harmonious synthesis of these three: moral equality as the foundation, proportionate rewards for genuine merit, and compassionate priority for special human needs.</p>
    </div>
  </div>

  <!-- Q23 -->
  <div style="margin-bottom: 28px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 12px 0; font-size: 17px;">Q23: What are the major forms of injustice in India? In which ways has the Indian Constitution sought to secure Social Justice?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75;">
      <p><b style="color: #7C4DFF;">Introduction:</b> India inherited severe structural injustices rooted in feudalism, colonial exploitation, and the rigid caste hierarchy.</p>

      <p><b style="color: #7C4DFF;">1. Major Forms of Injustice:</b>
      <br/>&bull; <b style="color: #7C4DFF;">Caste Oppression:</b> Untouchability, manual scavenging, and violence against Dalits and Adivasis.
      <br/>&bull; <b style="color: #7C4DFF;">Gender Injustice:</b> Female infanticide, dowry deaths, domestic violence, and exclusion from property ownership.
      <br/>&bull; <b style="color: #7C4DFF;">Economic Polarization:</b> Landlessness among agricultural laborers and exploitation by money-lenders.</p>

      <p><b style="color: #7C4DFF;">2. Constitutional Mechanisms Securing Justice:</b>
      <br/>&bull; <b style="color: #7C4DFF;">Fundamental Rights:</b> Article 14 (Equality), Article 15 (Anti-discrimination), Article 17 (Abolition of Untouchability), and Article 23 (Banning forced labor).
      <br/>&bull; <b style="color: #7C4DFF;">Affirmative Action (Articles 15(4) &amp; 16(4)):</b> Reservations in education and public jobs for SCs, STs, and OBCs.
      <br/>&bull; <b style="color: #7C4DFF;">Directive Principles (Part IV):</b> Articles 38 and 39 direct the State to minimize income inequalities and ensure public control over material resources.</p>

      <p><b style="color: #7C4DFF;">Conclusion:</b> The Constitution is a transformative charter of social justice, replacing centuries-old feudal hierarchies with democratic egalitarianism.</p>
    </div>
  </div>

  <!-- Q24 -->
  <div style="margin-bottom: 28px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 12px 0; font-size: 17px;">Q24: Discuss the debate between Free Market Capitalism and the Welfare State on the distribution of social goods.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75;">
      <p><b style="color: #7C4DFF;">Introduction:</b> The mechanism through which wealth and essential goods should be distributed remains a central battleground in political theory.</p>

      <p><b style="color: #7C4DFF;">1. The Free Market Argument:</b>
      <br/>Advocates of free markets (like Friedrich Hayek and Milton Friedman) argue that competitive markets are the most efficient allocators of resources:
      <br/>&bull; Individuals are rewarded according to their productivity and consumer demand.
      <br/>&bull; State planning leads to corruption, red tape, and loss of individual freedom.</p>

      <p><b style="color: #7C4DFF;">2. The Welfare State Critique:</b>
      <br/>Social justice advocates counter that unbridled markets are blind to human suffering:
      <br/>&bull; Markets operate solely on purchasing power; the impoverished cannot buy medicine or schooling.
      <br/>&bull; Leaving vital goods to private profit causes extreme monopolistic inequality, disenfranchising the poor.</p>

      <p><b style="color: #7C4DFF;">3. The Democratic Synthesis:</b>
      <br/>Most modern democracies adopt a mixed economy where markets generate wealth, while the State guarantees a basic social floor through progressive taxation, public schools, hospitals, and food security.</p>

      <p><b style="color: #7C4DFF;">Conclusion:</b> Pure market competition without a robust welfare floor is incompatible with social justice.</p>
    </div>
  </div>

  <!-- Q25 -->
  <div style="margin-bottom: 28px; background: rgba(255,255,255,0.02); padding: 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #7C4DFF; margin: 0 0 12px 0; font-size: 17px;">Q25: Analyze the contributions of Dr. B.R. Ambedkar and Dr. Rammanohar Lohia to the theory and practice of Social Justice in India.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.75;">
      <p><b style="color: #7C4DFF;">Introduction:</b> Dr. B.R. Ambedkar and Dr. Rammanohar Lohia provided profound indigenous frameworks for social justice, targeting the unique evil of India&rsquo;s caste hierarchy.</p>

      <p><b style="color: #7C4DFF;">1. Dr. B.R. Ambedkar&rsquo;s Contribution:</b>
      <br/>&bull; Exposed caste as an unnatural &lsquo;division of labourers&rsquo; graded hierarchically.
      <br/>&bull; Built the constitutional architecture of social democracy &mdash; enshrining Article 17, affirmative action, and fundamental rights.
      <br/>&bull; Emphasized that political democracy is a farce without social and economic equality, urging Dalits to <i>&ldquo;Educate, Agitate, Organise&rdquo;</i>.</p>

      <p><b style="color: #7C4DFF;">2. Dr. Rammanohar Lohia&rsquo;s Contribution:</b>
      <br/>&bull; Formulated the theory of <i>Vishesh Avsar</i> (Special Opportunities), recognizing that formal merit in India favored the top 10% upper castes.
      <br/>&bull; Demanded 60% reservations for backward classes, Dalits, Adivasis, women, and religious minorities.
      <br/>&bull; Integrated caste struggle with anti-English language movements and economic decentralization.</p>

      <p><b style="color: #7C4DFF;">Conclusion:</b> Both thinkers revolutionized Indian democracy, ensuring that social justice became the central driving force of Indian constitutional politics.</p>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: INTERACTIVE MCQS (20 MCQS)                  */
/* -------------------------------------------------------------------------- */

export const c11Pol14Mcqs = [
  // --- TIER 1: EASY / RECALL (Q1 to Q8) ---
  {
    id: "c11-pol-14-mcq-1",
    question: "Who authored the famous philosophical text 'A Theory of Justice' in 1971?",
    options: [
      "A):   Robert Nozick",
      "B):   John Rawls",
      "C):   Immanuel Kant",
      "D):   Friedrich Hayek"
    ],
    correctAnswer: "B",
    explanation: "American political philosopher John Rawls authored 'A Theory of Justice' in 1971, which redefined modern distributive justice as fairness."
  },
  {
    id: "c11-pol-14-mcq-2",
    question: "Which ancient Greek philosopher wrote 'The Republic' and analyzed justice as social harmony?",
    options: [
      "A):   Plato",
      "B):   Aristotle",
      "C):   Socrates",
      "D):   Thucydides"
    ],
    correctAnswer: "A",
    explanation: "Plato wrote 'The Republic', exploring the nature of justice in the individual soul and the ideal city-state."
  },
  {
    id: "c11-pol-14-mcq-3",
    question: "The thought experiment formulated by John Rawls where individuals choose rules of justice without knowing their social status is called:",
    options: [
      "A):   State of Nature",
      "B):   Veil of Ignorance",
      "C):   Social Contract",
      "D):   Categorical Imperative"
    ],
    correctAnswer: "B",
    explanation: "The 'Veil of Ignorance' is Rawls' thought experiment where individuals in the Original Position choose principles of justice without knowing their own future identity."
  },
  {
    id: "c11-pol-14-mcq-4",
    question: "Which principle of justice requires that rewards and wages should correspond to the scale of effort, skill, training, and risk?",
    options: [
      "A):   Equal Treatment for Equals",
      "B):   Proportionate Justice",
      "C):   Recognition of Special Needs",
      "D):   Natural Justice"
    ],
    correctAnswer: "B",
    explanation: "Proportionate justice demands that compensation and rewards be proportional to the effort, specialized training, and risk involved in an occupation."
  },
  {
    id: "c11-pol-14-mcq-5",
    question: "The Mandal Commission was established in India to identify and recommend reservations for which group?",
    options: [
      "A):   Religious minorities",
      "B):   Other Backward Classes (OBCs)",
      "C):   Non-Resident Indians",
      "D):   Armed forces veterans"
    ],
    correctAnswer: "B",
    explanation: "The Second Backward Classes Commission (Mandal Commission) was appointed in 1979 under B.P. Mandal to identify socially and educationally backward classes (OBCs)."
  },
  {
    id: "c11-pol-14-mcq-6",
    question: "Which Indian socialist leader formulated the concept of 'Vishesh Avsar' (Special Opportunities) for backward classes, women, and minorities?",
    options: [
      "A):   Dr. Rammanohar Lohia",
      "B):   Jayaprakash Narayan",
      "C):   Acharya Narendra Deva",
      "D):   E.M.S. Namboodiripad"
    ],
    correctAnswer: "A",
    explanation: "Dr. Rammanohar Lohia pioneered the doctrine of 'Vishesh Avsar' (Special Opportunities), demanding 60% reservations for marginalized social groups."
  },
  {
    id: "c11-pol-14-mcq-7",
    question: "In ancient Indian philosophy, justice and righteous moral conduct were most closely associated with the concept of:",
    options: [
      "A):   Artha",
      "B):   Dharma",
      "C):   Kama",
      "D):   Moksha"
    ],
    correctAnswer: "B",
    explanation: "In ancient Indian thought, Dharma embodied cosmic justice, moral righteousness, societal duty, and ethical governance."
  },
  {
    id: "c11-pol-14-mcq-8",
    question: "What percentage of reservation was recommended by the Mandal Commission for Other Backward Classes (OBCs) in central government jobs?",
    options: [
      "A):   10 percent",
      "B):   15 percent",
      "C):   27 percent",
      "D):   33 percent"
    ],
    correctAnswer: "C",
    explanation: "The Mandal Commission recommended 27% reservation for OBCs, which was accepted and implemented by Prime Minister V.P. Singh's government in 1990."
  },

  // --- TIER 2: MODERATE / CONCEPTUAL (Q9 to Q15) ---
  {
    id: "c11-pol-14-mcq-9",
    question: "Why would rational individuals behind John Rawls' 'Veil of Ignorance' choose the Maximin strategy?",
    options: [
      "A):   Because they are all naturally greedy",
      "B):   Because not knowing their future identity, they rationally fear ending up in the worst-off position and want that position to be as well-off as possible",
      "C):   Because the government forces them to do so",
      "D):   Because they want to eliminate all laws"
    ],
    correctAnswer: "B",
    explanation: "Under total uncertainty behind the Veil of Ignorance, a rational person assumes the worst-case scenario and chooses principles that protect the most vulnerable."
  },
  {
    id: "c11-pol-14-mcq-10",
    question: "John Rawls' 'Difference Principle' allows social and economic inequalities ONLY IF:",
    options: [
      "A):   They benefit only the ruling monarch",
      "B):   They work to the greatest benefit of the least advantaged members of society",
      "C):   They are approved by a military council",
      "D):   They eliminate all private businesses"
    ],
    correctAnswer: "B",
    explanation: "Rawls' Difference Principle permits inequalities (like higher salaries for doctors) only if such incentives end up improving the condition of the least advantaged."
  },
  {
    id: "c11-pol-14-mcq-11",
    question: "Providing free braille textbooks to visually impaired students is an example of which principle of justice?",
    options: [
      "A):   Proportionate Justice",
      "B):   Recognition of Special Needs",
      "C):   Laissez-faire competition",
      "D):   Retributive justice"
    ],
    correctAnswer: "B",
    explanation: "Providing assistive braille books recognizes the special physical needs of visually impaired students to enable them to participate equally."
  },
  {
    id: "c11-pol-14-mcq-12",
    question: "What is the primary argument of Free Market advocates regarding justice?",
    options: [
      "A):   All prices should be fixed by religious priests",
      "B):   Free competition and voluntary exchange in the market naturally reward efficiency, talent, and consumer satisfaction",
      "C):   The state should own all factories and farms",
      "D):   Wages should be completely abolished"
    ],
    correctAnswer: "B",
    explanation: "Free-market proponents argue that open market exchange without state intervention is fair because it rewards individual productivity and talent."
  },
  {
    id: "c11-pol-14-mcq-13",
    question: "Which of the following represents an example of 'Structural Injustice'?",
    options: [
      "A):   A student catching a seasonal cold before an exam",
      "B):   Generations of landless Dalit families being denied education and trapped in hereditary manual scavenging due to caste barriers",
      "C):   An athlete twisting an ankle during a race",
      "D):   A private company closing down due to bankruptcy"
    ],
    correctAnswer: "B",
    explanation: "Structural injustice refers to institutionalized, systemic societal barriers (like hereditary caste oppression) that block marginalized groups over generations."
  },
  {
    id: "c11-pol-14-mcq-14",
    question: "In Plato's 'The Republic', who argued that 'Justice is the interest of the stronger'?",
    options: [
      "A):   Socrates",
      "B):   Thrasymachus",
      "C):   Glaucon",
      "D):   Polemarchus"
    ],
    correctAnswer: "B",
    explanation: "The Sophist Thrasymachus cynically argued that justice is nothing other than the advantage of the stronger ('might makes right'), which Socrates refuted."
  },
  {
    id: "c11-pol-14-mcq-15",
    question: "Why is a Welfare State considered essential for achieving social justice in a developing nation like India?",
    options: [
      "A):   Because it abolishes the parliament",
      "B):   Because it guarantees essential goods (food, primary education, healthcare) as basic human rights, protecting those who cannot afford market prices",
      "C):   Because it stops all technological innovation",
      "D):   Because it bans international trade"
    ],
    correctAnswer: "B",
    explanation: "A welfare state intervenes to ensure that life-saving goods like basic food, health, and schooling are provided to all citizens, regardless of poverty."
  },

  // --- TIER 3: ADVANCE / ANALYTICAL (Q16 to Q20) ---
  {
    id: "c11-pol-14-mcq-16",
    question: "How did John Rawls reconcile individual liberty with socio-economic redistribution?",
    options: [
      "A):   By giving absolute priority to basic civil liberties while requiring economic inequalities to benefit the worst-off",
      "B):   By completely banning all freedom of speech",
      "C):   By establishing a military dictatorship",
      "D):   By forcing all citizens to have identical incomes"
    ],
    correctAnswer: "A",
    explanation: "Rawls established the 'lexical priority' of equal basic liberties (First Principle) over economic redistribution (Second Principle), harmonizing liberty with welfare."
  },
  {
    id: "c11-pol-14-mcq-17",
    question: "Which of the following scenarios demonstrates a conflict between 'Equal Treatment for Equals' and 'Recognition of Special Needs'?",
    options: [
      "A):   Charging everyone the same toll fee on a public expressway",
      "B):   Fixing a single common examination cut-off mark for candidates from elite urban schools and candidates from remote rural tribal schools",
      "C):   Arresting a criminal caught stealing property",
      "D):   Providing equal voting rights to all adult citizens"
    ],
    correctAnswer: "B",
    explanation: "A single common cut-off treats unequals equally, ignoring the special developmental deficits of rural tribal students and causing injustice."
  },
  {
    id: "c11-pol-14-mcq-18",
    question: "What is meant by the Latin legal maxim 'Suum Cuique Tribuere'?",
    options: [
      "A):   To the victor belong the spoils",
      "B):   To render to each person their due",
      "C):   Let the buyer beware",
      "D):   Law is the command of the sovereign"
    ],
    correctAnswer: "B",
    explanation: "'Suum Cuique Tribuere' is the foundational Roman jurisprudence definition of justice, meaning 'to render to each person that which is their due'."
  },
  {
    id: "c11-pol-14-mcq-19",
    question: "How did Dr. B.R. Ambedkar view the relationship between political justice and social justice in the Constituent Assembly?",
    options: [
      "A):   He believed political justice was sufficient and social justice was unnecessary",
      "B):   He warned that political justice ('one man, one vote') would crumble if social justice ('one man, one value') was not established",
      "C):   He opposed universal adult franchise",
      "D):   He argued that justice belongs only to upper castes"
    ],
    correctAnswer: "B",
    explanation: "Dr. Ambedkar warned that granting political equality without dismantling social and economic caste inequality would produce an unsustainable contradiction."
  },
  {
    id: "c11-pol-14-mcq-20",
    question: "Why did Dr. Rammanohar Lohia argue that formal competitive meritocracy in India reinforces caste inequality?",
    options: [
      "A):   Because he hated all examinations",
      "B):   Because thousands of years of accumulated cultural, educational, and social capital gave high castes an overwhelming unfair advantage in competitive exams",
      "C):   Because competitive exams are conducted only in Latin",
      "D):   Because he wanted to abolish all universities"
    ],
    correctAnswer: "B",
    explanation: "Lohia argued that historical caste privilege endowed upper castes with familial education and resources, turning so-called 'neutral merit' into hereditary privilege."
  }
];
