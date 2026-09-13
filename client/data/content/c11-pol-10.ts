// Class 11 Political Science Chapter 10: Constitution as a Living Document (Marks: 02)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #00BFA5 (Deep Aqua / Emerald Teal)

const themeColor = "#00BFA5";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol10HtmlOverview = `
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
  <div style="background: rgba(0, 191, 165, 0.06); border: 1.5px solid #00BFA5; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #00BFA5; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Constitutional Evolution Definitions</h2>
    <p class="text-center" style="color: #A7FFEB; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 10: Constitution as a Living Document (2 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">1. Living Document:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A constitutional doctrine recognizing that a written constitution is not a static, petrified relic, but an organic, evolving instrument that continuously breathes, adapts, and responds to changing socio-economic realities, democratic values, and generational challenges through formal amendments and judicial interpretations.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">2. Article 368 (Amending Power):</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The constitutional provision in Part XX detailing the constituent power and special procedural mechanisms through which the Union Parliament can amend the Constitution, balancing institutional rigidity with practical flexibility.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">3. Basic Structure Doctrine:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The landmark judicial principle established in the <i>Kesavananda Bharati (1973)</i> case ruling that while Parliament possesses broad constituent powers to amend the Constitution under Article 368, it cannot alter, damage, or emasculate its foundational identity and core pillars (such as democracy, secularism, rule of law, and federalism).</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #00BFA5; border-radius: 6px;">
        <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">4. Judicial Innovation &amp; Organic Interpretation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The process whereby courts expand the substantive scope of constitutional rights (e.g., expanding Article 21 &lsquo;Right to Life&rsquo; to include Right to Clean Environment, Right to Privacy, and Right to Livelihood) without altering the physical statutory text.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WHY IS THE CONSTITUTION CALLED A LIVING DOCUMENT? -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 30px; font-size: 20px;">1. Why is the Constitution Described as a &lsquo;Living Document&rsquo;?</h2>

  <p>Nearly eight decades after its adoption in 1949, the Constitution of India continues to serve as the supreme framework of governance for more than 1.4 billion people. While many post-colonial constitutions drafted across Asia, Africa, and Latin America collapsed into military dictatorships, civil wars, or were repeatedly torn up and rewritten, the Indian Constitution has endured and flourished.</p>

  <p>The secret of this extraordinary longevity lies in its character as a <b style="color: #00BFA5;">&ldquo;Living Document&rdquo;</b>. A constitution that is too rigid breaks under the pressure of unforeseen historical crises; a constitution that is too flexible becomes the plaything of temporary parliamentary majorities. The framers deliberately engineered a masterly synthesis of <b style="color: #00BFA5;">Flexibility and Rigidity</b>.</p>

  <!-- THINKER QUOTE BOX -->
  <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #00BFA5; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-style: italic; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &ldquo;The Constitution is not a static document. It has been set in a mould which is flexible enough to meet the changing circumstances of a growing nation... While we want this Constitution to be as solid and permanent as we can make it, there is no permanence in constitutions. There should be a certain flexibility. If you make anything rigid and permanent, you stop the nation&rsquo;s growth, the growth of a living, vital, organic people.&rdquo;
    </p>
    <p style="margin: 6px 0 0 0; text-align: right; color: #00BFA5; font-weight: bold; font-size: 14px;">
      &mdash; Jawaharlal Nehru, Constituent Assembly Debates (November 8, 1948)
    </p>
  </div>

  <p>The Constitution changes, evolves, and adapts through two parallel constitutional engines:</p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #00BFA5;">(i) Formal Constitutional Amendments (Article 368):</b> Explicit statutory alterations passed by Parliament to reflect new political compacts, administrative necessities, or economic models.</li>
    <li><b style="color: #00BFA5;">(ii) Dynamic Judicial Interpretation:</b> Progressive rulings by the Supreme Court that infuse new meaning into constitutional phrases without altering a single word of the written text.</li>
  </ul>

  <!-- SECTION 2: HOW HAS THE CONSTITUTION CHANGED SINCE ITS INCEPTION? -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">2. How Has the Constitution Changed Since Its Inception?</h2>

  <p>Since its inception on January 26, 1950, the Constitution has undergone more than <b style="color: #00BFA5;">105 formal amendments</b>. The amending mechanisms provided under <b style="color: #00BFA5;">Article 368</b> fall into three distinct procedural categories:</p>

  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #00BFA5;">1. Amendment by Simple Majority of Parliament:</b> Certain provisions can be amended by an ordinary law of Parliament (a simple majority of members present and voting) like ordinary legislation &mdash; such as creation/reorganization of new states (Articles 2 &amp; 3), citizenship, official languages, and salaries of judges. Technically, these are not deemed to be amendments under Article 368.</li>
    <li><b style="color: #00BFA5;">2. Amendment by Special Majority of Parliament (Article 368):</b> Required for the vast majority of constitutional provisions (including Fundamental Rights and Directive Principles). This requires:
      <br/>&bull; A majority of the <b style="color: #00BFA5;">total membership</b> of each House (i.e., &gt;50% of total seats), and
      <br/>&bull; A majority of not less than <b style="color: #00BFA5;">two-thirds (2/3rd)</b> of the members present and voting in each House separately.
    </li>
    <li><b style="color: #00BFA5;">3. Special Majority + Ratification by at Least 50% State Legislatures:</b> Required for altering federal architecture &mdash; such as the election of the President, executive powers of Union/States, Seventh Schedule legislative lists, Supreme Court/High Court jurisdictions, representation of states in Parliament, and Article 368 itself.</li>
  </ul>

  <!-- STANDALONE CLEAN DIAGRAM CARD (WHITE BACKGROUND, ZERO DUPLICATE TOP TITLES) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 191, 165, 0.4); border-radius: 10px; padding: 14px 16px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 540px;">
      <svg viewBox="0 0 520 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
        <!-- Card Background -->
        <rect width="520" height="330" fill="#FFFFFF" rx="8"/>
        
        <!-- Header Banner -->
        <rect x="15" y="10" width="490" height="42" rx="6" fill="#00BFA5"/>
        <text x="260" y="30" fill="#00363A" font-size="14.5" font-weight="bold" text-anchor="middle">THE TRI-PARTITE AMENDMENT MATRIX &amp; BASIC STRUCTURE SHIELD</text>
        <text x="260" y="45" fill="#004D40" font-size="11" font-weight="600" text-anchor="middle">Article 368 Procedure &bull; Balancing Rigidity with Flexibility</text>

        <!-- Column 1: Simple Majority -->
        <rect x="15" y="64" width="155" height="175" rx="6" fill="#E0F2F1" stroke="#00897B" stroke-width="1.5"/>
        <rect x="15" y="64" width="155" height="26" rx="6" fill="#00897B"/>
        <text x="92" y="82" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">SIMPLE MAJORITY</text>
        <text x="23" y="105" fill="#004D40" font-size="10" font-weight="bold">&bull; Outside Art. 368</text>
        <text x="23" y="122" fill="#004D40" font-size="10">&bull; 50% Present &amp; Voting</text>
        <text x="23" y="140" fill="#004D40" font-size="10">&bull; Creation of States (Art 3)</text>
        <text x="23" y="158" fill="#004D40" font-size="10">&bull; Citizenship rules</text>
        <text x="23" y="176" fill="#004D40" font-size="10">&bull; Official Languages</text>
        <text x="23" y="194" fill="#004D40" font-size="10">&bull; Legislative Councils</text>
        <text x="92" y="224" fill="#00695C" font-size="9.5" font-weight="bold" text-anchor="middle">[High Flexibility]</text>

        <!-- Column 2: Special Majority -->
        <rect x="182" y="64" width="155" height="175" rx="6" fill="#E8F5E9" stroke="#2E7D32" stroke-width="1.5"/>
        <rect x="182" y="64" width="155" height="26" rx="6" fill="#2E7D32"/>
        <text x="259" y="82" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">SPECIAL MAJORITY</text>
        <text x="190" y="105" fill="#1B5E20" font-size="10" font-weight="bold">&bull; Under Article 368</text>
        <text x="190" y="122" fill="#1B5E20" font-size="10">&bull; &gt;50% Total Strength</text>
        <text x="190" y="140" fill="#1B5E20" font-size="10">&bull; 2/3rd Present &amp; Voting</text>
        <text x="190" y="158" fill="#1B5E20" font-size="10">&bull; Fundamental Rights</text>
        <text x="190" y="176" fill="#1B5E20" font-size="10">&bull; Directive Principles</text>
        <text x="190" y="194" fill="#1B5E20" font-size="10">&bull; Most other clauses</text>
        <text x="259" y="224" fill="#1B5E20" font-size="9.5" font-weight="bold" text-anchor="middle">[Moderate Rigidity]</text>

        <!-- Column 3: Federal Special Majority -->
        <rect x="350" y="64" width="155" height="175" rx="6" fill="#FFF3E0" stroke="#EF6C00" stroke-width="1.5"/>
        <rect x="350" y="64" width="155" height="26" rx="6" fill="#EF6C00"/>
        <text x="427" y="82" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">FEDERAL SPECIAL</text>
        <text x="358" y="105" fill="#E65100" font-size="10" font-weight="bold">&bull; Art. 368 + States</text>
        <text x="358" y="122" fill="#E65100" font-size="10">&bull; 2/3rd Special Majority</text>
        <text x="358" y="140" fill="#E65100" font-size="10">&bull; + &ge;50% State Ratification</text>
        <text x="358" y="158" fill="#E65100" font-size="10">&bull; Election of President</text>
        <text x="358" y="176" fill="#E65100" font-size="10">&bull; 7th Sched. Division</text>
        <text x="358" y="194" fill="#E65100" font-size="10">&bull; Supreme Court / HCs</text>
        <text x="427" y="224" fill="#BF360C" font-size="9.5" font-weight="bold" text-anchor="middle">[High Rigidity]</text>

        <!-- Bottom Shield: Basic Structure Doctrine -->
        <rect x="15" y="250" width="490" height="68" rx="6" fill="#FCE4EC" stroke="#C2185B" stroke-width="1.5"/>
        <text x="260" y="272" fill="#880E4F" font-size="12" font-weight="bold" text-anchor="middle">🛡️ THE INVIOLABLE BASIC STRUCTURE SHIELD (KESAVANANDA BHARATI, 1973)</text>
        <text x="260" y="291" fill="#AD1457" font-size="10.5" text-anchor="middle">Parliament's constituent power is extensive but NOT absolute. It cannot destroy the core identity:</text>
        <text x="260" y="307" fill="#C2185B" font-size="10" font-weight="bold" text-anchor="middle">Democracy &bull; Secularism &bull; Federalism &bull; Separation of Powers &bull; Judicial Review &bull; Rule of Law</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The tri-partite amending architecture under Article 368, protected against majoritarian overreach by the judicial Basic Structure Doctrine.
    </div>
  </div>

  <p><b style="color: #00BFA5;">Key Historical Waves of Constitutional Amendments:</b></p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #00BFA5;">First Amendment (1951):</b> Created the Ninth Schedule to shield agrarian land reform laws from judicial review; inserted reasonable restrictions on freedom of speech (Art. 19(2)); enabled special educational provisions for backward classes (Art. 15(4)).</li>
    <li><b style="color: #00BFA5;">Forty-Second Amendment (1976 &mdash; &lsquo;Mini-Constitution&rsquo;):</b> Enacted during the Emergency, it inserted words &lsquo;Secular&rsquo;, &lsquo;Socialist&rsquo;, and &lsquo;Integrity&rsquo; into the Preamble; added Fundamental Duties (Part IV-A); gave sweeping immunity to Directive Principles over Fundamental Rights; and transferred Education and Forests to the Concurrent List.</li>
    <li><b style="color: #00BFA5;">Forty-Fourth Amendment (1978 &mdash; The Democratic Restorative):</b> Undid the authoritarian excesses of the 42nd Amendment: removed Right to Property from Fundamental Rights (relegated to legal right under Art. 300A); replaced &lsquo;internal disturbance&rsquo; with &lsquo;armed rebellion&rsquo; for National Emergency; mandated written cabinet advice for proclaiming emergency; and declared that Articles 20 and 21 cannot be suspended even during emergency.</li>
    <li><b style="color: #00BFA5;">Fifty-Second Amendment (1985):</b> Added the Tenth Schedule (Anti-Defection Law) to curb unprincipled political defections (<i>&lsquo;Aaya Ram, Gaya Ram&rsquo;</i> culture).</li>
    <li><b style="color: #00BFA5;">Sixty-First Amendment (1988):</b> Lowered the voting age from 21 to 18 years, enfranchising millions of Indian youth.</li>
    <li><b style="color: #00BFA5;">Seventy-Third &amp; Seventy-Fourth Amendments (1992):</b> Accorded constitutional status to Rural Panchayats and Urban Municipalities, creating a formal third tier of federalism.</li>
    <li><b style="color: #00BFA5;">Eighty-Sixth Amendment (2002):</b> Inserted Article 21A, making Free and Compulsory Education a fundamental right for children aged 6 to 14.</li>
    <li><b style="color: #00BFA5;">One-Hundred-and-First Amendment (2016):</b> Introduced the Goods and Services Tax (GST) under Article 279A, unifying India&rsquo;s indirect tax regime.</li>
    <li><b style="color: #00BFA5;">One-Hundred-and-Sixth Amendment (2023 &mdash; Nari Shakti Vandan Adhiniyam):</b> Reserved 33% of seats for women in the Lok Sabha and State Legislative Assemblies.</li>
  </ul>

  <!-- SECTION 3: THE BASIC STRUCTURE DOCTRINE & JUDICIAL EVOLUTION -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">3. Judicial Review &amp; The Landmark &lsquo;Basic Structure&rsquo; Doctrine</h2>

  <p>The adaptation of the Constitution has been steered decisively by the judiciary through constitutional adjudication. In the initial two decades, a fierce institutional tug-of-war erupted between Parliament and the Supreme Court over whether Parliament&rsquo;s amending power under Article 368 was absolute or subject to Fundamental Rights.</p>

  <!-- CASE LAW BOX -->
  <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #00BFA5; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 6px;">⚖️ Landmark Precedent: Kesavananda Bharati v. State of Kerala (1973)</b>
    <p style="margin: 0; color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">
      Heard by the largest-ever 13-judge Constitution Bench, the Supreme Court by a 7:6 majority delivered the most historic verdict in Indian constitutional history. Chief Justice S.M. Sikri and the majority held that:
      <br/>(1) Parliament has the constituent power to amend any article of the Constitution, including Fundamental Rights.
      <br/>(2) However, Parliament&rsquo;s power is not unlimited; it <b style="color: #00BFA5;">cannot alter the &lsquo;Basic Structure&rsquo;</b> or foundational identity of the Constitution.
      <br/>(3) In <i>Minerva Mills (1980)</i>, the Court reiterated that a limited amending power is itself a basic feature, and Parliament cannot convert a limited power into an unlimited one.
    </p>
  </div>

  <!-- SECTION 4: WHAT HAS THE WORKING OF DEMOCRACY DONE TO THE CONSTITUTION? -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">4. What Has the Working of Democracy Done to the Constitution?</h2>

  <p>The practice of electoral democracy over seven decades has transformed the Constitution from an elite, legalistic charter into a dynamic people&rsquo;s covenant:</p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #00BFA5;">(i) Democratization from Below &amp; Subaltern Ownership:</b> In 1950, critics viewed the Constitution as an English-drafted document produced by elite urban lawyers. Over decades of democratic competition, backward classes (OBCs), Dalits, Adivasis, and religious minorities realized that the Constitution is their ultimate protective armor. Marginalized communities now passionately brandish the Constitution and Dr. Ambedkar&rsquo;s portraits during rights struggles.</li>
    <li><b style="color: #00BFA5;">(ii) Language of Rights &amp; Popular Resistance:</b> From farmer protests and environmental movements (Chipko, Narmada Bachao) to women&rsquo;s anti-violence mobilizations, citizens articulate their demands in the constitutional vocabulary of Fundamental Rights (Art. 14, 19, 21), making the Constitution the common language of popular dissent.</li>
    <li><b style="color: #00BFA5;">(iii) Curbing Executive Authoritarianism:</b> Whenever ruling regimes attempted authoritarian overreach (e.g., the Emergency of 1975&ndash;77), the electorate decisively voted to punish the transgressors, reaffirming the supremacy of constitutional checks.</li>
  </ul>

  <!-- SECTION 5: WHAT FURTHER CHANGES ARE BEING DEBATED? -->
  <h2 style="color: #00BFA5; border-bottom: 2px solid #00BFA5; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">5. What Further Changes Are Currently Being Debated?</h2>

  <p>As India navigates the 21st century, vital constitutional reforms remain intensely debated:</p>
  <ul style="padding-left: 20px; line-height: 1.8;">
    <li><b style="color: #00BFA5;">(i) Simultaneous Elections (&lsquo;One Nation, One Election&rsquo;):</b> Proposals recommended by the High-Level Committee on Simultaneous Elections to synchronize Lok Sabha, State Assembly, and local body polls to curb policy paralysis and election expenditure, while opponents fear it may undermine federalism and regional party relevance.</li>
    <li><b style="color: #00BFA5;">(ii) Reforming the Anti-Defection Law (Tenth Schedule):</b> Loopholes in the 52nd Amendment &mdash; where entire legislative parties merge or resign strategically to bypass disqualification &mdash; have generated calls to vest disqualification power in independent tribunals rather than political Speakers.</li>
    <li><b style="color: #00BFA5;">(iii) Post-Census Delimitation &amp; Federal Representation:</b> The upcoming delimitation of parliamentary seats based on population risks penalizing southern states that successfully implemented family planning, sparking intense debates on federal parity in the Lok Sabha.</li>
  </ul>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(0, 191, 165, 0.08); border-left: 4px solid #00BFA5; padding: 14px 16px; margin: 25px 0; border-radius: 0 8px 8px 0;">
    <b style="color: #00BFA5; font-size: 16px; display: block; margin-bottom: 4px;">🎯 Board Exam Scoring Tip (2-Mark Precision):</b>
    <span style="color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">For questions on <i>&ldquo;Why is the Indian Constitution called a living document?&rdquo;</i>, explain that it combines <b>flexibility and rigidity</b>, adapts to changing times via Article 368 and judicial interpretation, and conclude with the <b>Basic Structure Doctrine</b> (Kesavananda Bharati, 1973) that preserves its core identity while enabling generational evolution.</span>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: rgba(0,0,0,0.4); border: 1.5px solid #00BFA5; border-radius: 12px; padding: 18px; margin-top: 30px;">
    <h3 class="text-center" style="color: #00BFA5; margin: 0 0 14px 0; font-size: 19px;">⚡ Master Revision Landmark Amendments &amp; Cases Cheat Sheet</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(0, 191, 165, 0.2);">
        <b style="color: #00BFA5;">Article 368:</b> Parliament&rsquo;s constituent power &amp; procedures for amending the Constitution.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(0, 191, 165, 0.2);">
        <b style="color: #00BFA5;">Kesavananda Bharati (1973):</b> Landmark 13-judge bench establishing the Basic Structure Doctrine.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(0, 191, 165, 0.2);">
        <b style="color: #00BFA5;">42nd Amendment (1976):</b> &lsquo;Mini-Constitution&rsquo; adding Secular, Socialist, Fundamental Duties.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(0, 191, 165, 0.2);">
        <b style="color: #00BFA5;">44th Amendment (1978):</b> Restored democratic checks; removed Right to Property (Art. 300A).
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(0, 191, 165, 0.2);">
        <b style="color: #00BFA5;">52nd Amendment (1985):</b> Anti-Defection Law inserting the Tenth Schedule.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(0, 191, 165, 0.2);">
        <b style="color: #00BFA5;">61st Amendment (1988):</b> Reduced minimum voting age from 21 years to 18 years.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(0, 191, 165, 0.2);">
        <b style="color: #00BFA5;">86th Amendment (2002):</b> Article 21A &mdash; Right to Free and Compulsory Education (6&ndash;14 yrs).
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(0, 191, 165, 0.2);">
        <b style="color: #00BFA5;">106th Amendment (2023):</b> 33% reservation for women in Lok Sabha &amp; State Assemblies.
      </div>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 2: SOLUTIONS (EXACT 10 Q&A)                    */
/* -------------------------------------------------------------------------- */

export const c11Pol10HtmlSolutions = `
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
  <!-- SECTION A: VERY SHORT ANSWER QUESTIONS (1 & 2 MARKS) — 8 QUESTIONS       -->
  <!-- ======================================================================== -->
  <div style="background: rgba(0, 191, 165, 0.08); border-left: 5px solid #00BFA5; padding: 12px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #00BFA5; margin: 0; font-size: 18px;">SECTION A: Very Short Answer Questions (1 &amp; 2 Marks) &mdash; Exactly 8 Questions</h2>
    <span style="color: #A7FFEB; font-size: 13.5px;">Definitional Precision, Core Concepts &amp; Concise 1-to-2 Sentence Answers</span>
  </div>

  <!-- Q1 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 16px;">Q1: What is meant by describing the Constitution as a &lsquo;Living Document&rsquo;?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #00BFA5;">Answer:</b> A living document means that the Constitution is not an unchangeable, static legal text, but an organic, evolving instrument that adapts dynamically to changing societal needs, economic challenges, and generational aspirations through formal amendments and judicial interpretations.
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 16px;">Q2: Which Article of the Indian Constitution lays down the procedure for constitutional amendments?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #00BFA5;">Answer:</b> <b style="color: #00BFA5;">Article 368</b> in Part XX lays down the constituent power and formal amending procedures of the Union Parliament.
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 16px;">Q3: What are the two essential requirements of a &lsquo;Special Majority&rsquo; under Article 368?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #00BFA5;">Answer:</b> A special majority under Article 368 requires: (i) a majority of the <b style="color: #00BFA5;">total membership</b> of each House of Parliament (&gt;50%), and (ii) a majority of not less than <b style="color: #00BFA5;">two-thirds (2/3rd)</b> of the members present and voting in each House separately.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 16px;">Q4: What was the landmark judicial holding of the Kesavananda Bharati case (1973)?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #00BFA5;">Answer:</b> The Supreme Court held that while Parliament possesses extensive constituent power to amend any provision of the Constitution under Article 368, it <b style="color: #00BFA5;">cannot destroy or alter the &lsquo;Basic Structure&rsquo;</b> or foundational framework of the Constitution.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 16px;">Q5: Why is the 42nd Constitutional Amendment Act, 1976 referred to as a &lsquo;Mini-Constitution&rsquo;?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #00BFA5;">Answer:</b> Enacted during the Emergency, the 42nd Amendment made sweeping, comprehensive changes to virtually every part of the Constitution &mdash; inserting &lsquo;Secular, Socialist, Integrity&rsquo; into the Preamble, adding Fundamental Duties, and curtailing judicial review.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 16px;">Q6: How did the 44th Amendment Act, 1978 alter the Right to Property?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #00BFA5;">Answer:</b> The 44th Amendment repealed the Right to Property from the list of Fundamental Rights (Articles 19(1)(f) and 31) and re-established it as a simple legal/constitutional right under <b style="color: #00BFA5;">Article 300A</b> in Part XII.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 16px;">Q7: What constitutional reform was enacted through the 61st Amendment Act, 1988?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #00BFA5;">Answer:</b> The 61st Amendment amended Article 326 to lower the minimum voting age for elections to the Lok Sabha and State Legislative Assemblies from <b style="color: #00BFA5;">21 years to 18 years</b>.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 8px 0; font-size: 16px;">Q8: Give an example of how judicial interpretation expanded constitutional rights without formal textual amendment.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #00BFA5;">Answer:</b> The Supreme Court progressively interpreted <b style="color: #00BFA5;">Article 21</b> (&lsquo;Right to Life and Personal Liberty&rsquo;) to encompass the Right to a Pollution-Free Environment, Right to Clean Drinking Water, Right to Livelihood, and the Fundamental Right to Privacy (<i>Puttaswamy Case, 2017</i>).
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER QUESTIONS (2 & 4 MARKS) — 2 QUESTIONS            -->
  <!-- ======================================================================== -->
  <div style="background: rgba(0, 191, 165, 0.08); border-left: 5px solid #00BFA5; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #00BFA5; margin: 0; font-size: 18px;">SECTION B: Conceptual Short Answer Questions (2 &amp; 4 Marks) &mdash; Exactly 2 Questions</h2>
    <span style="color: #A7FFEB; font-size: 13.5px;">Democratic Working &bull; Constitutional Evolution &amp; Future Debates</span>
  </div>

  <!-- Q9 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 16.5px;">Q9: How has the working of democracy transformed the Indian Constitution over the past seven decades?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      The vigorous practice of democracy has deeply reshaped the Constitution in three ways:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #00BFA5;">Subaltern Ownership:</b> Initially viewed as an elite, English-drafted document, marginalized communities (Dalits, OBCs, Tribals, Women) have embraced the Constitution as their ultimate charter of social liberation and political power.</li>
        <li><b style="color: #00BFA5;">Language of Popular Struggle:</b> Mass democratic movements (from farmers to civil rights groups) frame their protests using constitutional vocabulary &mdash; citing the Preamble, Fundamental Rights, and equality.</li>
        <li><b style="color: #00BFA5;">Institutional Checks on Majoritarianism:</b> The electorate has repeatedly punished authoritarian overreach (e.g., rejecting the Emergency regime in 1977), ensuring that governments operate strictly within constitutional boundaries.</li>
      </ol>
    </div>
  </div>

  <!-- Q10 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #00BFA5; margin: 0 0 10px 0; font-size: 16.5px;">Q10: What major constitutional changes are currently being debated in contemporary Indian politics?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Three major constitutional debates currently occupy center stage in Indian political discourse:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #00BFA5;">Simultaneous Elections (&lsquo;One Nation, One Election&rsquo;):</b> Proposals to synchronize Lok Sabha and State Assembly elections to curb recurring election expenditures and policy paralysis, contested by critics who argue it could dilute federalism.</li>
        <li><b style="color: #00BFA5;">Anti-Defection Law Reforms:</b> Overcoming loopholes in the Tenth Schedule (52nd Amendment) where en-masse resignations or mergers are engineered to topple elected state governments.</li>
        <li><b style="color: #00BFA5;">Post-Census Delimitation and Federal Balance:</b> Addressing concerns that allocating parliamentary seats strictly by population may penalize southern states that successfully implemented family planning, upsetting North-South federal representation.</li>
      </ul>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: INTERACTIVE MCQS (15 MCQS)                  */
/* -------------------------------------------------------------------------- */

export const c11Pol10Mcqs = [
  // --- TIER 1: EASY / RECALL (Q1 to Q5) ---
  {
    id: "c11-pol-10-mcq-1",
    question: "Which Article of the Indian Constitution prescribes the procedure for constitutional amendments?",
    options: [
      "A):   Article 352",
      "B):   Article 356",
      "C):   Article 368",
      "D):   Article 370"
    ],
    correctAnswer: "C",
    explanation: "Article 368 in Part XX of the Constitution deals exclusively with the constituent powers and procedures of Parliament to amend the Constitution."
  },
  {
    id: "c11-pol-10-mcq-2",
    question: "In which landmark case did the Supreme Court propound the 'Basic Structure Doctrine'?",
    options: [
      "A):   Golaknath v. State of Punjab (1967)",
      "B):   Kesavananda Bharati v. State of Kerala (1973)",
      "C):   Minerva Mills v. Union of India (1980)",
      "D):   Maneka Gandhi v. Union of India (1978)"
    ],
    correctAnswer: "B",
    explanation: "In Kesavananda Bharati (1973), a 13-judge bench ruled that Parliament's amending power under Article 368 cannot alter or destroy the Basic Structure of the Constitution."
  },
  {
    id: "c11-pol-10-mcq-3",
    question: "Which Constitutional Amendment is popularly known as the 'Mini-Constitution'?",
    options: [
      "A):   24th Amendment Act, 1971",
      "B):   42nd Amendment Act, 1976",
      "C):   44th Amendment Act, 1978",
      "D):   73rd Amendment Act, 1992"
    ],
    correctAnswer: "B",
    explanation: "The 42nd Amendment Act (1976) enacted during the Emergency made massive changes across the Preamble, Fundamental Rights, Directive Principles, and Seventh Schedule, earning the title 'Mini-Constitution'."
  },
  {
    id: "c11-pol-10-mcq-4",
    question: "The 61st Constitutional Amendment Act, 1988 reduced the voting age from 21 years to:",
    options: [
      "A):   16 years",
      "B):   18 years",
      "C):   19 years",
      "D):   20 years"
    ],
    correctAnswer: "B",
    explanation: "The 61st Amendment lowered the voting age for Lok Sabha and State Legislative Assembly elections from 21 to 18 years under Article 326."
  },
  {
    id: "c11-pol-10-mcq-5",
    question: "Under the 44th Constitutional Amendment Act, 1978, the Right to Property was removed from Fundamental Rights and made a legal right under:",
    options: [
      "A):   Article 21A",
      "B):   Article 51A",
      "C):   Article 300A",
      "D):   Article 312"
    ],
    correctAnswer: "C",
    explanation: "The 44th Amendment deleted the Right to Property from Part III and inserted it as a simple legal/constitutional right under Article 300A in Part XII."
  },

  // --- TIER 2: MODERATE / CONCEPTUAL (Q6 to Q10) ---
  {
    id: "c11-pol-10-mcq-6",
    question: "Amending federal provisions of the Constitution (e.g., election of the President, Seventh Schedule) requires:",
    options: [
      "A):   A simple majority of Parliament only",
      "B):   Special majority of Parliament and ratification by at least half of the State Legislatures",
      "C):   Unanimous consent of all 28 State Assemblies",
      "D):   A national referendum of all citizens"
    ],
    correctAnswer: "B",
    explanation: "Federal provisions require a special majority of Parliament (2/3rd present & voting + >50% total strength) and ratification by resolutions passed by at least 50% of the State Legislatures."
  },
  {
    id: "c11-pol-10-mcq-7",
    question: "Which Constitutional Amendment introduced the Anti-Defection Law by inserting the Tenth Schedule?",
    options: [
      "A):   44th Amendment Act, 1978",
      "B):   52nd Amendment Act, 1985",
      "C):   69th Amendment Act, 1991",
      "D):   91st Amendment Act, 2003"
    ],
    correctAnswer: "B",
    explanation: "The 52nd Constitutional Amendment Act, 1985 added the Tenth Schedule, penalizing legislators for unprincipled political party defections."
  },
  {
    id: "c11-pol-10-mcq-8",
    question: "Under Article 3, Parliament can alter the area, boundaries, or name of an existing state through:",
    options: [
      "A):   A simple majority of Parliament like an ordinary law",
      "B):   Special majority under Article 368",
      "C):   Mandatory written consent of the concerned State Governor",
      "D):   A constitutional amendment ratified by two-thirds of all states"
    ],
    correctAnswer: "A",
    explanation: "The Supreme Court has clarified that laws enacted under Articles 2 and 3 for the creation or reorganization of states require only a simple majority of Parliament and are not deemed amendments under Article 368."
  },
  {
    id: "c11-pol-10-mcq-9",
    question: "Which words were added to the Preamble of the Indian Constitution by the 42nd Amendment Act, 1976?",
    options: [
      "A):   Sovereign, Democratic, Republic",
      "B):   Socialist, Secular, Integrity",
      "C):   Liberty, Equality, Fraternity",
      "D):   Justice, Dignity, Unity"
    ],
    correctAnswer: "B",
    explanation: "The 42nd Amendment Act, 1976 amended the Preamble by adding the words 'Socialist', 'Secular', and 'and Integrity'."
  },
  {
    id: "c11-pol-10-mcq-10",
    question: "The 86th Constitutional Amendment Act, 2002 inserted which new Article making elementary education a Fundamental Right?",
    options: [
      "A):   Article 19A",
      "B):   Article 21A",
      "C):   Article 31A",
      "D):   Article 45A"
    ],
    correctAnswer: "B",
    explanation: "The 86th Amendment inserted Article 21A, providing free and compulsory education for all children between the ages of 6 and 14 as a Fundamental Right."
  },

  // --- TIER 3: ADVANCE / ANALYTICAL (Q11 to Q15) ---
  {
    id: "c11-pol-10-mcq-11",
    question: "In the Minerva Mills case (1980), what crucial principle regarding Article 368 did the Supreme Court re-affirm?",
    options: [
      "A):   Parliament can abolish judicial review completely",
      "B):   A limited amending power is itself a basic feature of the Constitution, and Parliament cannot convert this limited power into an unlimited power",
      "C):   Fundamental Rights are completely subordinate to ordinary laws",
      "D):   Constitutional amendments can never be challenged in any court"
    ],
    correctAnswer: "B",
    explanation: "The Supreme Court struck down Section 55 of the 42nd Amendment in Minerva Mills (1980), ruling that a limited amending power is part of the Basic Structure, so Parliament cannot grant itself unlimited power."
  },
  {
    id: "c11-pol-10-mcq-12",
    question: "Which of the following is NOT a feature of the 'Basic Structure' of the Indian Constitution as declared by the Supreme Court?",
    options: [
      "A):   Supremacy of the Constitution",
      "B):   Federal character of the polity",
      "C):   Absolute and uncontrolled constituent power of Parliament to amend any section without judicial review",
      "D):   Rule of Law and Judicial Review"
    ],
    correctAnswer: "C",
    explanation: "Absolute and uncontrolled power of Parliament is the opposite of the Basic Structure doctrine. Judicial review, federalism, supremacy of the Constitution, and rule of law are established basic features."
  },
  {
    id: "c11-pol-10-mcq-13",
    question: "The historic 106th Constitutional Amendment Act, 2023 (Nari Shakti Vandan Adhiniyam) provides for:",
    options: [
      "A):   50% reservation for women in village panchayats",
      "B):   One-third (33%) reservation for women in the Lok Sabha and State Legislative Assemblies",
      "C):   Reservation for women in the Union Council of Ministers",
      "D):   Direct election of the President of India by female voters"
    ],
    correctAnswer: "B",
    explanation: "The 106th Amendment Act, 2023 reserves 33% (one-third) of seats for women in the Lok Sabha, State Legislative Assemblies, and the Legislative Assembly of the National Capital Territory of Delhi."
  },
  {
    id: "c11-pol-10-mcq-14",
    question: "Why is the Indian Constitution considered a masterly blend of 'Rigidity and Flexibility'?",
    options: [
      "A):   Because it can only be amended by a military decree",
      "B):   Because ordinary administrative matters can be amended easily by a simple majority, while foundational federal provisions require strict special majorities and state ratification",
      "C):   Because it is completely unwritten like the British Constitution",
      "D):   Because the President can unilaterally change any clause at will"
    ],
    correctAnswer: "B",
    explanation: "It avoids the ultra-rigidity of the US Constitution and the hyper-flexibility of the unwritten British Constitution by providing three distinct amendment avenues depending on the importance of the provision."
  },
  {
    id: "c11-pol-10-mcq-15",
    question: "In which landmark judgment did a 9-judge Constitution Bench unanimously declare the 'Right to Privacy' to be an intrinsic part of the Right to Life and Personal Liberty under Article 21?",
    options: [
      "A):   A.K. Gopalan v. State of Madras (1950)",
      "B):   Justice K.S. Puttaswamy v. Union of India (2017)",
      "C):   Shayara Bano v. Union of India (2017)",
      "D):   Navtej Singh Johar v. Union of India (2018)"
    ],
    correctAnswer: "B",
    explanation: "In Justice K.S. Puttaswamy (2017), the Supreme Court held that the Right to Privacy is a fundamental right protected under Article 21, demonstrating how judicial interpretation keeps the Constitution living and modern."
  }
];
