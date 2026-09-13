// Class 11 Political Science Chapter 11: Introduction to Political Theory (Marks: 04)
// Official State Board / NCERT Curriculum Blueprint — Ultra Gold Reference Standard
// Primary Theme Color: #E040FB (Neon Amethyst / Radiant Orchid)

const themeColor = "#E040FB";

/* -------------------------------------------------------------------------- */
/*                          TAB 1: REFERENCE OVERVIEW                         */
/* -------------------------------------------------------------------------- */

export const c11Pol11HtmlOverview = `
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
  <div style="background: rgba(224, 64, 251, 0.06); border: 1.5px solid #E040FB; border-radius: 12px; padding: 18px; margin-bottom: 25px;">
    <h2 class="text-center" style="color: #E040FB; font-weight: bold; margin: 0 0 6px 0; font-size: 20px;">🏛️ Quick Glossary &amp; Core Political Concepts</h2>
    <p class="text-center" style="color: #EA80FC; margin: 0 0 16px 0; font-size: 14.5px;">Official Syllabus Terminology &bull; Class 11 Chapter 11: Introduction to Political Theory (4 Marks)</p>

    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB; font-size: 16px; display: block; margin-bottom: 4px;">1. Politics:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The universal, collective human activity through which groups organize social life, negotiate conflicting interests, articulate vision for the common good, and make binding public decisions regarding power and resource distribution.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB; font-size: 16px; display: block; margin-bottom: 4px;">2. Political Theory:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The systematic and normative study of political ideas, concepts, and principles &mdash; such as justice, freedom, equality, democracy, authority, and secularism &mdash; examining their philosophical roots, meanings, and practical application to institutional design.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB; font-size: 16px; display: block; margin-bottom: 4px;">3. &lsquo;The Personal is Political&rsquo;:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">A foundational feminist insight asserting that power relations, hierarchies, and subjugation are not restricted to governmental institutions but operate pervasively within the seemingly private domains of the family, marriage, domestic labor, and gender roles.</span>
      </div>

      <div style="background: rgba(0,0,0,0.25); padding: 14px 16px; border-left: 4px solid #E040FB; border-radius: 6px;">
        <b style="color: #E040FB; font-size: 16px; display: block; margin-bottom: 4px;">4. Public Reason &amp; Rational Argumentation:</b>
        <span style="color: #FFFFFF; font-size: 15px; line-height: 1.6;">The deliberative process through which citizens in a democracy resolve disagreements not through violence, brute force, or blind tradition, but through reasoned dialogue, logical scrutiny, and mutual justification accessible to all reasonable minds.</span>
      </div>
    </div>
  </div>

  <!-- SECTION 1: WHAT IS POLITICS? -->
  <h2 style="color: #E040FB; border-bottom: 2px solid #E040FB; padding-bottom: 8px; margin-top: 30px; font-size: 20px;">1. What is Politics? Popular Misconceptions vs. Real Meaning</h2>

  <p>In everyday conversations, the term <b style="color: #E040FB;">&lsquo;Politics&rsquo;</b> evokes sharp cynicism and distaste. When an ordinary person observes election mudslinging, horse-trading of legislators, false promises, financial corruption, and criminalization of political parties, they often equate politics with a &ldquo;dirty game&rdquo; or an unprincipled scramble for power. Many people despairingly proclaim: <i>&ldquo;I am not interested in politics&rdquo;</i> or <i>&ldquo;There is too much dirty politics in my office.&rdquo;</i></p>

  <p>However, this negative view mistakes the <b style="color: #E040FB;">aberration</b> for the <b style="color: #E040FB;">essence</b>. At a profound philosophical level, politics is an indispensable, noble, and universal feature of collective human existence.</p>

  <!-- THINKER QUOTE BOX -->
  <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #E040FB; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <p style="margin: 0; font-style: italic; color: #FFFFFF; font-size: 15px; line-height: 1.6;">
      &ldquo;Man is by nature a political animal (<i>Zoon Politikon</i>). A man who is by nature and not merely by fortune lackland and solitary is either a degraded being or a beast or a god... Society is something that precedes the individual; anyone who either cannot lead the common life or is so self-sufficient as not to need it, and therefore does not partake of society, is either a beast or a god.&rdquo;
    </p>
    <p style="margin: 6px 0 0 0; text-align: right; color: #E040FB; font-weight: bold; font-size: 14px;">
      &mdash; Aristotle, <i>Politics</i> (Book I)
    </p>
  </div>

  <p>Why is politics an inescapable necessity?</p>
  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #E040FB;">(i) Human Interdependence:</b> No individual can survive, build infrastructure, or achieve human fulfillment in total isolation. To survive, human beings must live in organized communities &mdash; villages, cities, and nations.</li>
    <li><b style="color: #E040FB;">(ii) Plurality of Needs and Interests:</b> Different individuals and groups have conflicting aspirations and priorities. A factory owner desires lower wages and fewer safety regulations; workers demand higher wages, job security, and safety standards. A farmer demands high crop prices; urban consumers demand cheap food. Politics is the public mechanism through which these conflicting interests are mediated, balanced, and resolved without descending into civil war.</li>
    <li><b style="color: #E040FB;">(iii) Collective Pursuit of the Common Good:</b> Decisions regarding public healthcare, building schools, constructing dams, environmental conservation, and defending borders cannot be made by single individuals. They require collective institutions &mdash; governments &mdash; operating through political negotiation.</li>
  </ul>

  <!-- COMPARISON TABLE BOX -->
  <div style="background: rgba(0,0,0,0.25); border: 1.5px solid #E040FB; border-radius: 10px; padding: 16px; margin: 25px 0;">
    <h3 class="text-center" style="color: #E040FB; margin: 0 0 12px 0; font-size: 18px;">⚖️ Master Matrix: Cynical View vs. Philosophical Reality of Politics</h3>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #FFFFFF;">
        <thead>
          <tr style="background: rgba(224, 64, 251, 0.2); border-bottom: 2px solid #E040FB;">
            <th style="padding: 10px; text-align: left; width: 50%; color: #FF8A80;">Cynical / Negative Perception</th>
            <th style="padding: 10px; text-align: left; width: 50%; color: #B9F6CA;">Philosophical / Positive Reality</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #FF8A80;">Manipulation &amp; Greed:</b> Equated with deceit, unprincipled ambition, and self-serving opportunistic behavior.</td>
            <td style="padding: 10px;"><b style="color: #B9F6CA;">Public Deliberation:</b> The art of collective decision-making for the welfare of the whole society.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 10px;"><b style="color: #FF8A80;">Confined to Politicians:</b> Viewed as something practiced solely by ministers, MPs, MLAs, and political parties.</td>
            <td style="padding: 10px;"><b style="color: #B9F6CA;">Universal Engagement:</b> Practiced whenever citizens organize, protest, debate, vote, or demand public accountability.</td>
          </tr>
          <tr>
            <td style="padding: 10px;"><b style="color: #FF8A80;">Source of Discord:</b> Believed to tear society apart through communal, caste, or factional divisions.</td>
            <td style="padding: 10px;"><b style="color: #B9F6CA;">Peaceful Conflict Resolution:</b> The civil alternative to violence, wars, and chaos for resolving deep social differences.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- SECTION 2: DO WE FIND POLITICS IN SEEMINGLY NON-POLITICAL DOMAINS? -->
  <h2 style="color: #E040FB; border-bottom: 2px solid #E040FB; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">2. Do We Find Politics in Seemingly Non-Political Domains?</h2>

  <p>A conventional belief assumes that politics exists exclusively inside parliamentary chambers, government secretariats, and election rallies, while institutions like the family, schools, workplaces, and cultural communities are entirely &lsquo;non-political&rsquo;. Modern political theory radically shatters this illusion.</p>

  <p>Wherever there are <b style="color: #E040FB;">power relationships</b>, hierarchical authority, unequal distribution of resources, and decisions made by one person affecting another, <b style="color: #E040FB;">politics is actively at work</b>:</p>

  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #E040FB;">(i) The Domestic Sphere &amp; Family (&ldquo;The Personal is Political&rdquo;):</b>
      <br/>Feminist political theorists (like Carole Pateman and bell hooks) revealed that the traditional family is not an idyllic haven free from politics. Power operates deeply within domestic households:
      <br/>&bull; Who makes major financial decisions? Traditionally, male heads of the family.
      <br/>&bull; Who performs unpaid domestic labor (cooking, cleaning, care-giving)? Overwhelmingly women.
      <br/>&bull; How are inheritance and property distributed? Traditionally favoring sons over daughters.
      <br/>Hence, domestic violence, unequal division of domestic chores, and denial of reproductive autonomy are deeply political issues requiring legislative intervention (e.g., Domestic Violence Act, Hindu Succession Amendment).
    </li>
    <li><b style="color: #E040FB;">(ii) Educational Institutions &amp; Schools:</b>
      <br/>Schools and universities are microcosms of political authority:
      <br/>&bull; The authority dynamic between principals, teachers, and students.
      <br/>&bull; What gets included or erased from history textbooks is a fierce political battle over collective national memory.
      <br/>&bull; Student council elections, debates over dress codes, and campus fee hikes involve active political negotiation.
    </li>
    <li><b style="color: #E040FB;">(iii) Workplaces &amp; Corporate Organizations:</b>
      <br/>Office politics, unequal corporate pay scales, glass ceilings preventing female promotions, hierarchical managerial authority, and the right of workers to form trade unions are all expressions of political power within economic production.
    </li>
    <li><b style="color: #E040FB;">(iv) Social Castes &amp; Religious Communities:</b>
      <br/>Caste panchayats dictating social ostracism, honor killings over inter-caste marriages, and controlling access to village wells or temples are coercive exercises of power within society.
    </li>
  </ul>

  <!-- STANDALONE CLEAN DIAGRAM CARD (WHITE BACKGROUND, ZERO DUPLICATE TOP TITLES) -->
  <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(224, 64, 251, 0.4); border-radius: 10px; padding: 14px 16px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center;">
    <div style="display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 540px;">
      <svg viewBox="0 0 520 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
        <!-- Card Background -->
        <rect width="520" height="330" fill="#FFFFFF" rx="8"/>
        
        <!-- Header Banner -->
        <rect x="15" y="10" width="490" height="42" rx="6" fill="#E040FB"/>
        <text x="260" y="30" fill="#FFFFFF" font-size="14.5" font-weight="bold" text-anchor="middle">THE EXPANDING HORIZONS OF POLITICS &amp; POLITICAL THEORY</text>
        <text x="260" y="45" fill="#F3E5F5" font-size="11" font-weight="600" text-anchor="middle">From Formal Statecraft to Everyday Power Relations</text>

        <!-- Center Hub -->
        <circle cx="260" cy="180" r="48" fill="#F3E5F5" stroke="#8E24AA" stroke-width="2"/>
        <text x="260" y="174" fill="#4A148C" font-size="12" font-weight="bold" text-anchor="middle">POWER &amp;</text>
        <text x="260" y="188" fill="#4A148C" font-size="12" font-weight="bold" text-anchor="middle">DECISION</text>
        <text x="260" y="202" fill="#7B1FA2" font-size="9.5" text-anchor="middle">MAKING</text>

        <!-- Node 1: Formal Government (Top Left) -->
        <rect x="20" y="70" width="145" height="52" rx="6" fill="#EDE7F6" stroke="#512DA8" stroke-width="1.2"/>
        <text x="92" y="90" fill="#311B92" font-size="11" font-weight="bold" text-anchor="middle">The Formal State</text>
        <text x="92" y="104" fill="#4527A0" font-size="9.5" text-anchor="middle">Parliament, Courts, Law</text>
        <text x="92" y="115" fill="#5E35B1" font-size="8.5" text-anchor="middle">Statecraft &amp; Elections</text>

        <!-- Node 2: The Family & Domestic (Top Right) -->
        <rect x="355" y="70" width="145" height="52" rx="6" fill="#FCE4EC" stroke="#C2185B" stroke-width="1.2"/>
        <text x="427" y="90" fill="#880E4F" font-size="11" font-weight="bold" text-anchor="middle">The Family &amp; Gender</text>
        <text x="427" y="104" fill="#AD1457" font-size="9.5" text-anchor="middle">&lsquo;The Personal is Political&rsquo;</text>
        <text x="427" y="115" fill="#C2185B" font-size="8.5" text-anchor="middle">Domestic Division of Labor</text>

        <!-- Node 3: The Economy & Workplace (Bottom Left) -->
        <rect x="20" y="235" width="145" height="52" rx="6" fill="#E0F7FA" stroke="#00838F" stroke-width="1.2"/>
        <text x="92" y="255" fill="#006064" font-size="11" font-weight="bold" text-anchor="middle">Workplace &amp; Economy</text>
        <text x="92" y="269" fill="#00838F" font-size="9.5" text-anchor="middle">Corporate Hierarchy, Wages</text>
        <text x="92" y="280" fill="#0097A7" font-size="8.5" text-anchor="middle">Trade Unions &amp; Capital</text>

        <!-- Node 4: Civil Society & Culture (Bottom Right) -->
        <rect x="355" y="235" width="145" height="52" rx="6" fill="#FFF3E0" stroke="#EF6C00" stroke-width="1.2"/>
        <text x="427" y="255" fill="#E65100" font-size="11" font-weight="bold" text-anchor="middle">Culture &amp; Social Caste</text>
        <text x="427" y="269" fill="#EF6C00" font-size="9.5" text-anchor="middle">Social Dominance, Rights</text>
        <text x="427" y="280" fill="#F57C00" font-size="8.5" text-anchor="middle">Community Hegemonies</text>

        <!-- Connecting Lines -->
        <line x1="165" y1="108" x2="220" y2="152" stroke="#BA68C8" stroke-width="1.5" stroke-dasharray="3,3"/>
        <line x1="355" y1="108" x2="300" y2="152" stroke="#BA68C8" stroke-width="1.5" stroke-dasharray="3,3"/>
        <line x1="165" y1="248" x2="220" y2="208" stroke="#BA68C8" stroke-width="1.5" stroke-dasharray="3,3"/>
        <line x1="355" y1="248" x2="300" y2="208" stroke="#BA68C8" stroke-width="1.5" stroke-dasharray="3,3"/>

        <!-- Bottom Banner -->
        <text x="260" y="315" fill="#4A148C" font-size="10.5" font-weight="bold" text-anchor="middle">POLITICAL THEORY EXAMINES VALUES ACROSS ALL THESE SPHERES</text>
      </svg>
    </div>
    <div style="color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500;">
      💡 The pervasive nature of power: Politics operates not merely within state institutions, but across domestic life, schools, economic markets, and social hierarchies.
    </div>
  </div>

  <!-- SECTION 3: CAN POLITICAL ARGUMENT BE RESOLVED THROUGH REASONING? -->
  <h2 style="color: #E040FB; border-bottom: 2px solid #E040FB; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">3. Can Political Argument Be Resolved Through Reasoning?</h2>

  <p>Political debates often appear emotionally charged, toxic, and irreconcilable. Citizens hold passionate, clashing convictions on topics like reservations, affirmative action, capital punishment, uniform civil codes, free market capitalism versus socialist subsidies, and freedom of speech versus blasphemy laws. Can such profound political arguments ever be resolved through <b style="color: #E040FB;">Reason and Dialogue</b>?</p>

  <p>Political theory firmly answers: <b style="color: #E040FB;">Yes, through the commitment to Rational Public Discourse.</b></p>

  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #E040FB;">(i) The Socratic Method of Interrogation:</b> In ancient Athens, Socrates demonstrated that most prejudices masquerade as &ldquo;common sense&rdquo;. By gently interrogating accepted dogmas through systematic questioning and counter-examples, Socrates demonstrated that reason can peel away contradictions, exposing moral hypocrisy and arriving at true justice.</li>
    <li><b style="color: #E040FB;">(ii) Differentiating Prejudices from Principles:</b> An unreasoned political opinion says: <i>&ldquo;I oppose reservations because they harm my group.&rdquo;</i> A reasoned political argument asks: <i>&ldquo;What does genuine equality mean? Does formal equality perpetuate historical injustice? Can affirmative action be structured to promote merit while remedying deep social caste oppression?&rdquo;</i> Reasoning forces citizens to evaluate claims from an impartial, universalizable moral standpoint.</li>
    <li><b style="color: #E040FB;">(iii) Deliberative Democracy &amp; Public Reason:</b> Thinkers like John Rawls and Jürgen Habermas emphasize that democratic legitimacy arises not from the sheer brute force of counting heads in an election, but through <b style="color: #E040FB;">&lsquo;Public Reason&rsquo;</b> &mdash; offering justifications that fellow citizens with differing worldviews can reasonably accept.</li>
    <li><b style="color: #E040FB;">(iv) Peaceful Living with &lsquo;Reasonable Disagreement&rsquo;:</b> Reasoning may not produce 100% unanimous agreement on every issue, but it clarifies underlying values, fosters mutual respect between ideological rivals, and establishes consensus on democratic rules of coexistence without bloodshed.</li>
  </ul>

  <!-- SECTION 4: WHY DO WE NEED POLITICAL THEORY? -->
  <h2 style="color: #E040FB; border-bottom: 2px solid #E040FB; padding-bottom: 8px; margin-top: 35px; font-size: 20px;">4. Why Do We Need Political Theory? Four Cardinal Pillars</h2>

  <p>Students often wonder: <i>&ldquo;If I want to become a software engineer, doctor, architect, or chartered accountant, why should I study Political Theory?&rdquo;</i> Political theory is not reserved exclusively for politicians, bureaucrats, or professors. It is indispensable for every human being living in a free society:</p>

  <ul style="padding-left: 20px; line-height: 1.85;">
    <li><b style="color: #E040FB;">(i) All of Us Are Citizens Who Vote and Shape Public Policy:</b>
      <br/>No matter what profession one enters, everyone lives in a political society, pays taxes, obeys laws, and casts votes in elections. To vote intelligently, one must understand the basic values at stake &mdash; what is justice? what is liberty? what is national secularism? An uneducated voter easily falls prey to communal polarization and demagoguery.
    </li>
    <li><b style="color: #E040FB;">(ii) Cultivating Critical Thinking &amp; Intellectual Clarity:</b>
      <br/>Political theory trains our minds to look behind sensational media headlines and political speeches. It teaches us to unpack political rhetoric, analyze constitutional arguments, and distinguish genuine public welfare from partisan propaganda.
    </li>
    <li><b style="color: #E040FB;">(iii) Clarifying Core Value Meanings:</b>
      <br/>Abstract concepts like &lsquo;Freedom&rsquo; or &lsquo;Equality&rsquo; seem simple until we apply them to real life:
      <br/>&bull; Does freedom of speech include the right to shout hate speech?
      <br/>&bull; Does equality mean treating disabled persons exactly the same as able-bodied persons, or giving them special ramps and affirmative access?
      <br/>Political theory provides the intellectual toolkit to define and navigate these complex dilemmas.
    </li>
    <li><b style="color: #E040FB;">(iv) Ideas Have Powered the Greatest Human Transformations:</b>
      <br/>Every great historic revolution &mdash; the American Revolution (1776, natural rights by John Locke), the French Revolution (1789, liberty, equality, fraternity by Rousseau), the anti-colonial Indian Freedom Struggle (Mahatma Gandhi&rsquo;s Satyagraha and Swaraj), and the Anti-Apartheid Movement (Nelson Mandela&rsquo;s <i>Long Walk to Freedom</i>) &mdash; was fueled by the powerful engine of political philosophy.
    </li>
  </ul>

  <!-- BOARD EXAM TIP BOX -->
  <div style="background: rgba(224, 64, 251, 0.08); border-left: 4px solid #E040FB; padding: 14px 16px; margin: 25px 0; border-radius: 0 8px 8px 0;">
    <b style="color: #E040FB; font-size: 16px; display: block; margin-bottom: 4px;">🎯 Board Exam Scoring Tip (4-Mark Analytical Mastery):</b>
    <span style="color: #FFFFFF; font-size: 14.5px; line-height: 1.6;">When answering <i>&ldquo;Why do we need political theory?&rdquo;</i>, structure your answer into 4 clean subheadings: (1) <b>Informed and Critical Citizenship</b>, (2) <b>Deconstructing Prejudices and Biases</b>, (3) <b>Conceptual Precision on Core Values</b> (Freedom, Equality, Justice), and (4) <b>Inspirational Power of Ideas</b> (mentioning Rousseau, Marx, Gandhi, and Ambedkar). This structured approach guarantees full marks!</span>
  </div>

  <!-- MASTER REVISION CHEAT SHEET -->
  <div style="background: rgba(0,0,0,0.4); border: 1.5px solid #E040FB; border-radius: 12px; padding: 18px; margin-top: 30px;">
    <h3 class="text-center" style="color: #E040FB; margin: 0 0 14px 0; font-size: 19px;">⚡ Master Revision Political Thinkers &amp; Landmark Ideas Cheat Sheet</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; font-size: 14.5px;">
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(224, 64, 251, 0.2);">
        <b style="color: #E040FB;">Aristotle:</b> Declared &lsquo;Man is by nature a political animal&rsquo;; politics as pursuit of good life.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(224, 64, 251, 0.2);">
        <b style="color: #E040FB;">Plato:</b> Authored <i>The Republic</i>; examined the meaning and nature of Justice.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(224, 64, 251, 0.2);">
        <b style="color: #E040FB;">J.J. Rousseau:</b> Formulated &lsquo;Popular Sovereignty&rsquo; and &lsquo;General Will&rsquo; in <i>The Social Contract</i>.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(224, 64, 251, 0.2);">
        <b style="color: #E040FB;">Karl Marx:</b> Critique of capitalism; argued that economic class struggle drives politics.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(224, 64, 251, 0.2);">
        <b style="color: #E040FB;">Mahatma Gandhi:</b> Authored <i>Hind Swaraj</i>; genuine freedom as moral self-rule and non-violence.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(224, 64, 251, 0.2);">
        <b style="color: #E040FB;">Dr. B.R. Ambedkar:</b> Insisted on Social Democracy and the total eradication of caste hierarchy.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(224, 64, 251, 0.2);">
        <b style="color: #E040FB;">Nelson Mandela:</b> <i>Long Walk to Freedom</i> &mdash; universal human equality and dismantling apartheid.
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(224, 64, 251, 0.2);">
        <b style="color: #E040FB;">Aung San Suu Kyi:</b> <i>Freedom from Fear</i> &mdash; moral courage as prerequisite for democratic struggle.
      </div>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 2: SOLUTIONS (EXACT 15 Q&A)                    */
/* -------------------------------------------------------------------------- */

export const c11Pol11HtmlSolutions = `
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
  <div style="background: rgba(224, 64, 251, 0.08); border-left: 5px solid #E040FB; padding: 12px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #E040FB; margin: 0; font-size: 18px;">SECTION A: Very Short Answer Questions (1 &amp; 2 Marks) &mdash; Exactly 8 Questions</h2>
    <span style="color: #EA80FC; font-size: 13.5px;">Definitional Precision, Core Concepts &amp; Concise 1-to-2 Sentence Answers</span>
  </div>

  <!-- Q1 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 8px 0; font-size: 16px;">Q1: What is the core philosophical definition of Politics?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #E040FB;">Answer:</b> Politics is the universal collective activity through which people organize social life, articulate goals, resolve conflicting interests, and make binding decisions for the welfare and governance of the community.
    </p>
  </div>

  <!-- Q2 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 8px 0; font-size: 16px;">Q2: Why did Aristotle describe human beings as &lsquo;political animals&rsquo; (Zoon Politikon)?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #E040FB;">Answer:</b> Aristotle asserted that human beings are by nature social and rational creatures who can only achieve moral virtue, justice, and complete human fulfillment by living and participating in an organized political community (the <i>Polis</i>).
    </p>
  </div>

  <!-- Q3 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 8px 0; font-size: 16px;">Q3: What is the common negative or cynical perception of politics?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #E040FB;">Answer:</b> People often cynically view politics as a &ldquo;dirty game&rdquo; driven by selfish ambition, manipulation, corruption, opportunistic horse-trading, and broken electoral promises.
    </p>
  </div>

  <!-- Q4 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 8px 0; font-size: 16px;">Q4: What is meant by the famous feminist phrase &lsquo;The Personal is Political&rsquo;?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #E040FB;">Answer:</b> It means that power relations, gender subjugation, and inequality are not confined to the public government arena, but operate deeply within the private domestic sphere of the family, marriage, and household labor.
    </p>
  </div>

  <!-- Q5 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 8px 0; font-size: 16px;">Q5: What is the primary subject matter of Political Theory?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #E040FB;">Answer:</b> Political theory systematically investigates the foundational concepts and ideals that shape social and political life &mdash; such as freedom, equality, justice, rights, democracy, secularism, and state sovereignty.
    </p>
  </div>

  <!-- Q6 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 8px 0; font-size: 16px;">Q6: How did Socrates contribute to the tradition of political argumentation?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #E040FB;">Answer:</b> Socrates pioneered the method of dialectical questioning, challenging unexamined social dogmas and prejudices through rational dialogue to reveal truth, justice, and moral consistency.
    </p>
  </div>

  <!-- Q7 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 8px 0; font-size: 16px;">Q7: Name the famous political treatise authored by Mahatma Gandhi in 1909 explaining his concept of Swaraj.</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #E040FB;">Answer:</b> <b style="color: #E040FB;">Hind Swaraj</b> (Indian Home Rule), wherein Gandhi defined genuine Swaraj not merely as the exit of British rulers, but as moral self-rule and mastery over one&rsquo;s desires.
    </p>
  </div>

  <!-- Q8 -->
  <div style="margin-bottom: 22px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 8px 0; font-size: 16px;">Q8: How does Jean-Jacques Rousseau explain the basis of political authority?</h3>
    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.65;">
      <b style="color: #E040FB;">Answer:</b> In <i>The Social Contract</i>, Rousseau argued that legitimate political power rests on <b style="color: #E040FB;">Popular Sovereignty</b> and the &lsquo;General Will&rsquo;, declaring that <i>&ldquo;Man is born free, and everywhere he is in chains.&rdquo;</i>
    </p>
  </div>

  <!-- ======================================================================== -->
  <!-- SECTION B: SHORT ANSWER QUESTIONS (4 MARKS) — 7 QUESTIONS                -->
  <!-- ======================================================================== -->
  <div style="background: rgba(224, 64, 251, 0.08); border-left: 5px solid #E040FB; padding: 12px 16px; margin: 30px 0 20px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #E040FB; margin: 0; font-size: 18px;">SECTION B: Short Answer Questions (4 Marks) &mdash; Exactly 7 Questions</h2>
    <span style="color: #EA80FC; font-size: 13.5px;">80&ndash;100 Words &bull; Point-wise Analytical &amp; Theoretical Evaluation</span>
  </div>

  <!-- Q9 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px;">Q9: What is Politics? Distinguish between its cynical everyday perception and its true philosophical meaning.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Politics has two sharply contrasting meanings:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #E040FB;">The Cynical View:</b> Popular perception views politics as an unprincipled quest for personal power, characterized by deception, opportunism, corrupt deals, and empty promises. People disparagingly equate it with &lsquo;manipulation&rsquo;.</li>
        <li><b style="color: #E040FB;">The Philosophical Meaning:</b> In reality, politics is the noble, inescapable art of collective decision-making. Since humans have conflicting interests and diverse needs, politics provides the peaceful, institutional platform to negotiate compromises, distribute resources, and work towards the common good of all society.</li>
      </ol>
    </div>
  </div>

  <!-- Q10 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px;">Q10: &ldquo;Politics exists in seemingly non-political domains.&rdquo; Justify this statement with examples from family and workplace.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Politics operates wherever there are power hierarchies and unequal resource distribution:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #E040FB;">Within the Family:</b> Feminist thinkers demonstrated that &lsquo;The Personal is Political&rsquo;. Patriarchal decision-making, unequal division of domestic labor, preference for male heirs, and domestic violence reflect power imbalances within the home that require political and legal remedies.</li>
        <li><b style="color: #E040FB;">In Educational Institutions:</b> Power dynamics between school authorities and students, decisions over curriculum content, and student union representations are fundamentally political.</li>
        <li><b style="color: #E040FB;">In the Workplace:</b> Hierarchy between employers and employees, wage negotiations, corporate board decisions, and trade union rights all reflect power struggles over economic resources.</li>
      </ul>
    </div>
  </div>

  <!-- Q11 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px;">Q11: Can political arguments be resolved through reasoning? Explain the significance of public reason and rational dialogue.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Yes, political theory demonstrates that political arguments can be settled through reason rather than brute force:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #E040FB;">Separating Prejudice from Principle:</b> Rational debate forces individuals to justify their claims through universal principles of fairness rather than narrow selfish interest.</li>
        <li><b style="color: #E040FB;">The Socratic Tradition:</b> Socrates showed that continuous questioning helps uncover internal contradictions, eliminating biases and leading to shared ethical truths.</li>
        <li><b style="color: #E040FB;">Public Reason:</b> Democratic legitimacy rests on providing justifications that reasonable citizens with differing worldviews can understand and accept.</li>
        <li><b style="color: #E040FB;">Civil Accommodation:</b> Even when total consensus is impossible, rational debate establishes the grounds for peaceful compromise, avoiding violence.</li>
      </ol>
    </div>
  </div>

  <!-- Q12 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px;">Q12: Why do we need Political Theory? Give four compelling arguments.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Studying political theory is vital for every citizen for four fundamental reasons:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #E040FB;">Critical and Informed Citizenship:</b> All citizens vote, pay taxes, and live under government policies. Understanding political ideas prevents citizens from being misled by demagogues and communal polarization.</li>
        <li><b style="color: #E040FB;">Clarity on Core Concepts:</b> It enables us to define and balance abstract values like freedom, equality, and justice in real-life situations.</li>
        <li><b style="color: #E040FB;">Unmasking Prejudices:</b> It equips us to interrogate accepted social hierarchies and biases (casteism, patriarchy, communalism).</li>
        <li><b style="color: #E040FB;">Inspirational Engine of History:</b> Great democratic struggles &mdash; from the French Revolution to the Indian freedom movement &mdash; were born from political ideas.</li>
      </ol>
    </div>
  </div>

  <!-- Q13 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px;">Q13: How did Dr. B.R. Ambedkar and Mahatma Gandhi conceptualize freedom and equality in Indian political thought?</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Both thinkers enriched political theory with unique indigenous insights:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #E040FB;">Mahatma Gandhi (Swaraj):</b> Gandhi argued that freedom is not merely the absence of British rule, but moral self-rule (<i>Swaraj</i>) over one&rsquo;s senses. He advocated for non-violence (<i>Ahimsa</i>), rural decentralization, and the uplift of the poorest (<i>Antyodaya</i>).</li>
        <li><b style="color: #E040FB;">Dr. B.R. Ambedkar (Social Democracy):</b> Ambedkar emphasized that political democracy cannot survive without social and economic democracy. He championed the total annihilation of caste, substantive equality, and affirmative action for the oppressed.</li>
        <li><b style="color: #E040FB;">Synthesis:</b> Both proved that formal legal freedom is meaningless without substantive social and moral emancipation.</li>
      </ul>
    </div>
  </div>

  <!-- Q14 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px;">Q14: Explain the contribution of Western political thinkers (Plato, Rousseau, Marx) to modern political theory.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Western political thought provided foundational concepts:
      <ol style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #E040FB;">Plato (The Republic):</b> Examined the nature of justice and the ideal state ruled by philosopher-kings, laying the roots of normative political philosophy.</li>
        <li><b style="color: #E040FB;">Jean-Jacques Rousseau (The Social Contract):</b> Championed popular sovereignty and democracy, arguing that the will of the people (General Will) is supreme.</li>
        <li><b style="color: #E040FB;">Karl Marx (Das Kapital):</b> Argued that all history is the history of class struggle, and that economic relations determine political structures, laying the foundation for modern socialist thought.</li>
      </ol>
    </div>
  </div>

  <!-- Q15 -->
  <div style="margin-bottom: 24px; background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.07);">
    <h3 style="color: #E040FB; margin: 0 0 10px 0; font-size: 16.5px;">Q15: &ldquo;Political theory is not just for political scientists; it is for everyone.&rdquo; Discuss this with reference to democratic participation.</h3>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 1.7;">
      Political theory is essential for all citizens in a participatory democracy:
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li><b style="color: #E040FB;">Evaluating Political Choices:</b> Voters encounter clashing manifestos promising subsidies, tax cuts, or identity-based schemes. Political theory provides the analytical criteria to judge which policies promote true justice.</li>
        <li><b style="color: #E040FB;">Defending Rights:</b> Citizens can only defend their fundamental rights against bureaucratic overreach if they understand the philosophical justification for why those rights exist.</li>
        <li><b style="color: #E040FB;">Constructive Social Dialogue:</b> It enables citizens to disagree constructively with neighbors on sensitive political topics without bitterness or violence, building a resilient democratic culture.</li>
      </ul>
    </div>
  </div>

</div>
`;

/* -------------------------------------------------------------------------- */
/*                         TAB 3: INTERACTIVE MCQS (20 MCQS)                  */
/* -------------------------------------------------------------------------- */

export const c11Pol11Mcqs = [
  // --- TIER 1: EASY / RECALL (Q1 to Q8) ---
  {
    id: "c11-pol-11-mcq-1",
    question: "Who famously stated that 'Man is by nature a political animal'?",
    options: [
      "A):   Plato",
      "B):   Aristotle",
      "C):   Niccolo Machiavelli",
      "D):   John Locke"
    ],
    correctAnswer: "B",
    explanation: "Aristotle famously asserted in his treatise 'Politics' that man is by nature a political animal (Zoon Politikon) who can only find complete human flourishing in a community."
  },
  {
    id: "c11-pol-11-mcq-2",
    question: "The word 'Politics' is derived from which ancient Greek word meaning city-state?",
    options: [
      "A):   Polis",
      "B):   Demos",
      "C):   Kratos",
      "D):   Res Publica"
    ],
    correctAnswer: "A",
    explanation: "Politics comes from the ancient Greek word 'Polis', which referred to the self-governing city-state of ancient Greece."
  },
  {
    id: "c11-pol-11-mcq-3",
    question: "Which ancient Greek philosopher wrote 'The Republic' and examined the concept of Justice?",
    options: [
      "A):   Socrates",
      "B):   Plato",
      "C):   Aristotle",
      "D):   Herodotus"
    ],
    correctAnswer: "B",
    explanation: "Plato wrote 'The Republic', in which he engaged in dialogues (primarily through Socrates) on the nature of Justice and the ideal state."
  },
  {
    id: "c11-pol-11-mcq-4",
    question: "Who wrote the political treatise 'Hind Swaraj' in 1909?",
    options: [
      "A):   Jawaharlal Nehru",
      "B):   Mahatma Gandhi",
      "C):   Bal Gangadhar Tilak",
      "D):   Subhas Chandra Bose"
    ],
    correctAnswer: "B",
    explanation: "Mahatma Gandhi authored 'Hind Swaraj' in 1909, outlining his philosophy of moral self-rule, passive resistance (Satyagraha), and critique of modern industrial civilization."
  },
  {
    id: "c11-pol-11-mcq-5",
    question: "The slogan 'The Personal is Political' is most famously associated with which political school of thought?",
    options: [
      "A):   Liberalism",
      "B):   Feminism",
      "C):   Fascism",
      "D):   Conservatism"
    ],
    correctAnswer: "B",
    explanation: "'The Personal is Political' was popularized by second-wave feminist political theory to highlight that gender power dynamics exist inside domestic family life."
  },
  {
    id: "c11-pol-11-mcq-6",
    question: "Who authored the famous autobiography 'Long Walk to Freedom' describing the struggle against Apartheid?",
    options: [
      "A):   Martin Luther King Jr.",
      "B):   Nelson Mandela",
      "C):   Desmond Tutu",
      "D):   Kwame Nkrumah"
    ],
    correctAnswer: "B",
    explanation: "Nelson Mandela, the iconic anti-apartheid leader and first Black President of democratic South Africa, authored 'Long Walk to Freedom'."
  },
  {
    id: "c11-pol-11-mcq-7",
    question: "Which thinker argued that all human history is the history of class struggle between the exploiters and the exploited?",
    options: [
      "A):   Karl Marx",
      "B):   Max Weber",
      "C):   Adam Smith",
      "D):   John Stuart Mill"
    ],
    correctAnswer: "A",
    explanation: "Karl Marx, along with Friedrich Engels, declared in the Communist Manifesto (1848) that 'The history of all hitherto existing society is the history of class struggles.'"
  },
  {
    id: "c11-pol-11-mcq-8",
    question: "Who wrote the essay 'Freedom from Fear', highlighting fear as the root of corrupt and authoritarian rule?",
    options: [
      "A):   Aung San Suu Kyi",
      "B):   Malala Yousafzai",
      "C):   Benazir Bhutto",
      "D):   Sirimavo Bandaranaike"
    ],
    correctAnswer: "A",
    explanation: "Burmese pro-democracy leader Aung San Suu Kyi wrote 'Freedom from Fear', stating that it is not power that corrupts, but fear &mdash; fear of losing power and fear of the scourge of power."
  },

  // --- TIER 2: MODERATE / CONCEPTUAL (Q9 to Q15) ---
  {
    id: "c11-pol-11-mcq-9",
    question: "Why do political arguments require 'reasoning' rather than mere opinion?",
    options: [
      "A):   Because opinions are always illegal in a democracy",
      "B):   Because reasoning requires individuals to justify their claims through universal principles of fairness accessible to all citizens",
      "C):   Because only politicians are allowed to have opinions",
      "D):   Because reasoning guarantees that everyone will think identically"
    ],
    correctAnswer: "B",
    explanation: "Reasoning elevates debate from subjective prejudice to public reason, demanding arguments grounded in universal moral standards and logic that others can rationally accept."
  },
  {
    id: "c11-pol-11-mcq-10",
    question: "Which of the following demonstrates that politics operates in the seemingly 'non-political' domain of the workplace?",
    options: [
      "A):   The physical architecture of the building",
      "B):   Wage negotiations, hierarchical management, and the right to form trade unions",
      "C):   The lunch menu in the company canteen",
      "D):   The color of the office computers"
    ],
    correctAnswer: "B",
    explanation: "Workplace hierarchy, wage negotiations, and unionization involve power relations and resource allocation, making them fundamentally political dynamics."
  },
  {
    id: "c11-pol-11-mcq-11",
    question: "The Socratic method of dialogue is characterized by:",
    options: [
      "A):   Delivering uninterrupted four-hour monologues",
      "B):   Systematic questioning and interrogation of accepted assumptions to reveal contradictions",
      "C):   Conducting secret opinion polls",
      "D):   Enforcing censorship on uneducated citizens"
    ],
    correctAnswer: "B",
    explanation: "Socrates used dialectical questioning, challenging interlocutors to define their terms and exposing underlying contradictions to arrive at rational clarity."
  },
  {
    id: "c11-pol-11-mcq-12",
    question: "Which Enlightenment thinker wrote 'The Social Contract' and famously declared that 'Man is born free, and everywhere he is in chains'?",
    options: [
      "A):   Thomas Hobbes",
      "B):   Jean-Jacques Rousseau",
      "C):   Voltaire",
      "D):   Baron de Montesquieu"
    ],
    correctAnswer: "B",
    explanation: "Jean-Jacques Rousseau opened his celebrated work 'The Social Contract' (1762) with this famous line, advocating for direct democracy and popular sovereignty."
  },
  {
    id: "c11-pol-11-mcq-13",
    question: "How does Political Theory help ordinary citizens in a democratic nation?",
    options: [
      "A):   It teaches them how to evade taxes legally",
      "B):   It helps them vote critically, analyze government policies, and distinguish genuine public interest from political propaganda",
      "C):   It guarantees them a government job",
      "D):   It trains them to join the military"
    ],
    correctAnswer: "B",
    explanation: "Political theory cultivates critical thinking, helping citizens evaluate political claims, understand their constitutional rights, and participate meaningfully in democratic governance."
  },
  {
    id: "c11-pol-11-mcq-14",
    question: "Dr. B.R. Ambedkar argued that political democracy in India is unsustainable without:",
    options: [
      "A):   A massive military build-up",
      "B):   Social Democracy, characterized by the eradication of caste hierarchies and substantive equality",
      "C):   Restricting voting rights to university graduates",
      "D):   Adopting a hereditary monarchy"
    ],
    correctAnswer: "B",
    explanation: "Dr. Ambedkar maintained that political democracy ('one person, one vote') would collapse if society continued to deny social democracy ('one person, one value') through caste inequality."
  },
  {
    id: "c11-pol-11-mcq-15",
    question: "Which ancient Indian text on statecraft and political realism was authored by Kautilya (Chanakya)?",
    options: [
      "A):   Manusmriti",
      "B):   Arthashastra",
      "C):   Abhijnanasakuntalam",
      "D):   Panchatantra"
    ],
    correctAnswer: "B",
    explanation: "Kautilya wrote the 'Arthashastra', a master treatise on political realism, espionage, statecraft, taxation, and military strategy in ancient India."
  },

  // --- TIER 3: ADVANCE / ANALYTICAL (Q16 to Q20) ---
  {
    id: "c11-pol-11-mcq-16",
    question: "What is the primary difference between Political Science and Political Theory?",
    options: [
      "A):   Political science only studies international wars, while political theory studies municipal laws",
      "B):   Political science empirically analyzes how political institutions actually function, while political theory evaluates the normative values and ideals (what ought to be) behind those institutions",
      "C):   There is no difference between them",
      "D):   Political theory is studied only in dictatorships"
    ],
    correctAnswer: "B",
    explanation: "Political science deals with empirical study (facts, data, institutions), whereas political theory focuses on normative questions (values, justice, ethics, and ideals)."
  },
  {
    id: "c11-pol-11-mcq-17",
    question: "In political theory, what does 'Reasonable Disagreement' imply?",
    options: [
      "A):   That one side is always completely evil and must be suppressed",
      "B):   That sincere, rational citizens can arrive at different moral conclusions on complex issues, necessitating mutual toleration and democratic dialogue",
      "C):   That democracy has completely failed",
      "D):   That courts should dissolve parliament immediately"
    ],
    correctAnswer: "B",
    explanation: "Reasonable disagreement acknowledges that even when people think rationally and in good faith, differing life experiences and values lead to diverse viewpoints that democracy must peacefully accommodate."
  },
  {
    id: "c11-pol-11-mcq-18",
    question: "Which 17th-century English philosopher argued that all individuals possess inalienable 'Natural Rights' to Life, Liberty, and Property?",
    options: [
      "A):   Thomas Hobbes",
      "B):   John Locke",
      "C):   Edmund Burke",
      "D):   Jeremy Bentham"
    ],
    correctAnswer: "B",
    explanation: "John Locke formulated the theory of natural rights (Life, Liberty, Property), which heavily inspired the American Declaration of Independence and modern human rights doctrine."
  },
  {
    id: "c11-pol-11-mcq-19",
    question: "Why does political theory argue that 'Equality' does not simply mean identical treatment for all individuals?",
    options: [
      "A):   Because some individuals are genetically superior to others",
      "B):   Because treating deeply unequal groups identically (e.g., able-bodied vs disabled, or historically oppressed vs privileged) perpetuates and worsens inequality",
      "C):   Because the Constitution forbids equality",
      "D):   Because only rich people deserve special rights"
    ],
    correctAnswer: "B",
    explanation: "True equality (substantive equality) requires treating likes alike, and providing reasonable accommodations or affirmative action to those who are socially or physically disadvantaged."
  },
  {
    id: "c11-pol-11-mcq-20",
    question: "Which concept formulated by German philosopher Jürgen Habermas emphasizes that political decisions gain true legitimacy through open, uncoerced deliberation among citizens?",
    options: [
      "A):   Will to Power",
      "B):   Communicative Action and Deliberative Democracy",
      "C):   Iron Law of Oligarchy",
      "D):   Dictatorship of the Proletariat"
    ],
    correctAnswer: "B",
    explanation: "Jürgen Habermas's theory of 'Communicative Action' argues that democratic legitimacy arises when decisions are produced through rational, uncoerced public discourse among equal citizens."
  }
];
