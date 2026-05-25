import { ChapterContent } from "../types";

const themeColor = "#AB47BC"; // Purple color for Civics Chapter 1

export const sstCiv1: ChapterContent = {
  id: "sst-civ-1",
  number: 1,
  title: "Power Sharing",
  introduction:
    "Normally, sharing power might sound like giving up your strength. But in a democracy, sharing power actually makes the country stronger! Let's look at two completely different countries, Belgium and Sri Lanka, and see how their different approaches to 'sharing power' led to entirely different outcomes.",
  definitions: [
    {
      term: "Majoritarianism",
      description:
        "A belief that the majority community should be able to rule a country in whichever way it wants, completely disregarding the wishes and needs of the minority.",
    },
    {
      term: "Ethnic",
      description:
        "A social division based on shared culture. People belonging to the same ethnic group believe in their common descent because of similarities of physical type or culture.",
    },
    {
      term: "Prudential",
      description:
        "Based on careful calculation of gains and losses. Prudential decisions in politics reduce the chances of conflict and violence.",
    },
    {
      term: "Moral",
      description:
        "Based on purely ethical considerations. The moral reason for power-sharing is that it is the very spirit of democracy.",
    },
    {
      term: "Checks and Balances",
      description:
        "A system in which each organ of the government checks the others (e.g., Legislature, Executive, and Judiciary) so that no organ can exercise unlimited power.",
    },
  ],
  keyPoints: [
    "Sri Lanka (a diverse island nation) chose the path of Majoritarianism. The government forcefully favored the Sinhala majority (74%) over the Tamil minority (18%). This led to a brutal Civil War.",
    "Belgium (a small European country) faced a similar problem between Dutch-speaking (59%) and French-speaking (40%) communities.",
    "Instead of fighting, Belgium's leaders amended their constitution four times to create an innovative model of Power Sharing. Both communities got equal ministers at the center, preventing conflict.",
    "Power Sharing is desirable for two reasons: Prudential (it prevents violence and political instability) and Moral (democracy literally means rule by the people, so all people must share power).",
    "Horizontal Power Sharing: Power is shared among different organs of government like the legislature, executive, and judiciary. It ensures checks and balances.",
    "Vertical Power Sharing: Power is shared among governments at different levels (like the Central Government, State Governments, and local Panchayats).",
  ],
  formulas: [],
  crux: [
    "Sri Lanka didn't share power with Tamils = Civil War.",
    "Belgium shared power equally between Dutch & French = Peace.",
    "Power sharing stops violence between different groups.",
    "Power can be shared Horizontally (Legislature, Executive, Judiciary) or Vertically (Center, State, Local).",
  ],
  mcqs: [
    {
      id: "sc1-mcq-1",
      question:
        "Which of the following communities constitutes the majority in Sri Lanka?",
      options: ["Sri Lankan Tamils", "Indian Tamils", "Sinhalese", "Muslims"],
      correctAnswer: "c",
    },
    {
      id: "sc1-mcq-2",
      question:
        "Which language is spoken by the majority of people in Belgium?",
      options: ["French", "Dutch", "German", "English"],
      correctAnswer: "b",
    },
    {
      id: "sc1-mcq-3",
      question:
        "The power-sharing arrangement among the Legislature, Executive, and Judiciary is known as:",
      options: [
        "Vertical distribution",
        "Federal division",
        "Horizontal distribution",
        "Community government",
      ],
      correctAnswer: "c",
    },
    {
      id: "sc1-mcq-4",
      question:
        "A belief that the majority community should rule the country by disregarding the minority is called:",
      options: ["Democracy", "Majoritarianism", "Federalism", "Communism"],
      correctAnswer: "b",
    },
    {
      id: "sc1-mcq-5",
      question:
        "In Belgium, a special 'Community Government' is elected by people belonging to one:",
      options: [
        "Language community",
        "Religious community",
        "Income group",
        "Political party",
      ],
      correctAnswer: "a",
    },
    {
      id: "sc1-mcq-6",
      question: "What percentage of the population speaks Dutch in Belgium?",
      options: ["40%", "59%", "80%", "1%"],
      correctAnswer: "b",
    },
    {
      id: "sc1-mcq-7",
      question: "Which community in Belgium was relatively rich and powerful?",
      options: [
        "Dutch-speaking",
        "French-speaking",
        "German-speaking",
        "English-speaking",
      ],
      correctAnswer: "b",
    },
    {
      id: "sc1-mcq-8",
      question:
        "What system of power sharing is also known as checks and balances?",
      options: [
        "Horizontal power sharing",
        "Vertical power sharing",
        "Community government",
        "Coalition government",
      ],
      correctAnswer: "a",
    },
    {
      id: "sc1-mcq-9",
      question: "In Sri Lanka, the civil war was between:",
      options: [
        "Buddhists and Hindus",
        "Sinhalas and Tamils",
        "Christians and Muslims",
        "Dutch and French",
      ],
      correctAnswer: "b",
    },
    {
      id: "sc1-mcq-10",
      question: "Power sharing is desirable because it helps to:",
      options: [
        "Increase conflicts",
        "Reduce the possibility of conflict between social groups",
        "Impose dominance of majority",
        "Make decisions faster",
      ],
      correctAnswer: "b",
    },
  ],
  summary: [
    "Democracy does not mean the absolute rule of the majority; true democracy requires accommodating minorities and power sharing.",
    "Sri Lanka's majoritarian policies alienated the Tamils and ruined the country with a civil war.",
    "Belgium's brilliant power-sharing model successfully accommodated all its linguistic differences, leading to peace and prosperity.",
    "Power-sharing is the very spirit of democracy. It reduces conflict (prudential reason) and is morally the right way to govern a diverse society.",
  ],
  exercises: [
    {
      id: "sc1-ex-1",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  isHtmlView: true,
  htmlOverview: `
    <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
        <p style="line-height: 1.6; font-size: 17px;">Normally, sharing power might sound like giving up your strength. But in a democracy, sharing power actually makes the country stronger! Let's look at two completely different countries, Belgium and Sri Lanka, and see how their different approaches to 'sharing power' led to entirely different outcomes.</p>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Majoritarianism:</b> A belief that the majority community should be able to rule a country in whichever way it wants, completely disregarding the wishes and needs of the minority.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Ethnic:</b> A social division based on shared culture. People belonging to the same ethnic group believe in their common descent because of similarities of physical type or culture.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Prudential:</b> Based on careful calculation of gains and losses. Prudential decisions in politics reduce the chances of conflict and violence.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Moral:</b> Based on purely ethical considerations. The moral reason for power-sharing is that it is the very spirit of democracy.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Checks and Balances:</b> A system in which each organ of the government checks the others (e.g., Legislature, Executive, and Judiciary) so that no organ can exercise unlimited power.</p>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
        <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
            <li style="margin-bottom: 8px;">Sri Lanka (a diverse island nation) chose the path of Majoritarianism. The government forcefully favored the Sinhala majority (74%) over the Tamil minority (18%). This led to a brutal Civil War.</li>
            <li style="margin-bottom: 8px;">Belgium (a small European country) faced a similar problem between Dutch-speaking (59%) and French-speaking (40%) communities.</li>
            <li style="margin-bottom: 8px;">Instead of fighting, Belgium's leaders amended their constitution four times to create an innovative model of Power Sharing. Both communities got equal ministers at the center, preventing conflict.</li>
            <li style="margin-bottom: 8px;">Power Sharing is desirable for two reasons: Prudential (it prevents violence and political instability) and Moral (democracy literally means rule by the people, so all people must share power).</li>
            <li style="margin-bottom: 8px;">Horizontal Power Sharing: Power is shared among different organs of government like the legislature, executive, and judiciary. It ensures checks and balances.</li>
            <li style="margin-bottom: 8px;">Vertical Power Sharing: Power is shared among governments at different levels (like the Central Government, State Governments, and local Panchayats).</li>
        </ul>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
        <p style="line-height: 1.6; font-size: 16px;">Democracy does not mean the absolute rule of the majority; true democracy requires accommodating minorities and power sharing. Sri Lanka's majoritarian policies alienated the Tamils and ruined the country with a civil war. Belgium's brilliant power-sharing model successfully accommodated all its linguistic differences, leading to peace and prosperity. Power-sharing is the very spirit of democracy. It reduces conflict (prudential reason) and is morally the right way to govern a diverse society.</p>
    </div>
  `,
  htmlExercises: {
    "sc1-ex-1": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">1. What are the different forms of power sharing in modern democracies? Give an example of each of these.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        The different forms of power sharing in modern democracies are:
                        <br/>• <b>Horizontal Power Sharing:</b> Power is shared among different organs of government (Legislature, Executive, and Judiciary). <i>Example:</i> Parliament, Cabinet, and Courts in India.
                        <br/>• <b>Vertical Power Sharing:</b> Power is divided among governments at different levels (Union, State, and Local). <i>Example:</i> Central, State, and Panchayat levels in India.
                        <br/>• <b>Social Group Power Sharing:</b> Power shared among diverse social, religious, or linguistic groups. <i>Example:</i> Community government in Belgium or Reserved Constituencies in India.
                        <br/>• <b>Political Party & Coalition Power Sharing:</b> Competition and alliances among parties ensure shared power. <i>Example:</i> Coalition governments in India (e.g., NDA/UPA).
                    </p>
                </div>
                
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">2. State one prudential reason and one moral reason for power sharing with an example from the Indian context.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        • <b>Prudential Reason:</b> Reduces social conflict and ensures political stability. <i>Example:</i> Reserving seats in Indian Parliament/Assemblies for SCs/STs.
                        <br/>• <b>Moral Reason:</b> Upholds the spirit of democracy by giving citizens a voice in decision-making. <i>Example:</i> Panchayati Raj (local self-government) in India.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">3. After reading this chapter, three students drew different conclusions. Which of these do you agree with and why? Give your reasons in about 50 words.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; font-style: italic; margin-left: 10px;">
                        <b>Thomman:</b> Power sharing is necessary only in societies which have religious, linguistic or ethnic divisions.
                        <br/><b>Mathayi:</b> Power sharing is suitable only for big countries that have regional divisions.
                        <br/><b>Ouseph:</b> Every society needs some form of power sharing even if it is small or does not have social divisions.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> We agree with <b>Ouseph</b>. Power sharing is essential for every democratic society, big or small, regardless of social divisions. It forms the very basis of democracy by giving all citizens representation and a stake in governance, which ensures long-term peace and stability.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">4. The Mayor of Merchtem, a town near Brussels in Belgium, has defended a ban on speaking French in the town’s schools. He said that the ban would help all non-Dutch speakers integrate in this Flemish town. Do you think that this measure is in keeping with the spirit of Belgium’s power sharing arrangements? Give your reasons in about 50 words.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> No, this ban is not in keeping with the spirit of Belgium's power-sharing arrangement. The Belgian system relies on linguistic accommodation and mutual respect. Banning French violates equal representation, promotes exclusion, and could foster conflict rather than integration.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">5. Read the following passage and pick out any one of the prudential reasons for power sharing offered in this.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; font-style: italic; margin-left: 10px;">
                        "We need to give more power to the panchayats to realise the dream of Mahatma Gandhi and the hopes of the makers of our Constitution. Panchayati Raj establishes true democracy. It restores power to the only place where power belongs in a democracy – in the hands of the people. Giving power to Panchayats is also a way to reduce corruption and increase administrative efficiency. When people participate in the planning and implementation of developmental schemes, they would naturally exercise greater control over these schemes. This would eliminate the corrupt middlemen. Thus, Panchayati Raj will strengthen the foundations of our democracy."
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> The key prudential reason is: <b>"Giving power to Panchayats is also a way to reduce corruption and increase administrative efficiency."</b> This choice reduces the role of middlemen and optimizes resource management through local participation.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">6. Different arguments are usually put forth in favour of and against power sharing. Identify those which are in favour of power sharing and select the answer using the codes given below? Power sharing:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. reduces conflict among different communities
                        <br/>B. decreases the possibility of arbitrariness
                        <br/>C. delays decision making process
                        <br/>D. accommodates diversities
                        <br/>E. increases instability and divisiveness
                        <br/>F. promotes people's participation in government
                        <br/>G. undermines the unity of a country
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Options:</b>
                        <br/>(a) A, B, D, F &nbsp;&nbsp; (b) A, C, E, F &nbsp;&nbsp; (c) A, B, D, G &nbsp;&nbsp; (d) B, C, D, G
                        <br/><br/>
                        <b>Answer:</b> <b style="color: ${themeColor};">(a) A, B, D, F</b> (These arguments represent the major prudential and moral benefits of sharing political power).
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">7. Consider the following statements about power sharing arrangements in Belgium and Sri Lanka.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. In Belgium, the Dutch-speaking majority people tried to impose their domination on the minority French-speaking community.
                        <br/>B. In Sri Lanka, the policies of the government sought to ensure the dominance of the Sinhala-speaking majority.
                        <br/>C. The Tamils in Sri Lanka demanded a federal arrangement of power sharing to protect their culture, language and equality of opportunity in education and jobs.
                        <br/>D. The transformation of Belgium from unitary government to a federal one prevented a possible division of the country on linguistic lines.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Options:</b>
                        <br/>(a) A, B, C and D &nbsp;&nbsp; (b) A, B and D &nbsp;&nbsp; (c) C and D &nbsp;&nbsp; (d) B, C and D
                        <br/><br/>
                        <b>Answer:</b> <b style="color: ${themeColor};">(d) B, C and D</b> (Statement A is incorrect because in Belgium, both communities were accommodated equally, preventing Dutch domination).
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">8. Match List I (forms of power sharing) with List II (forms of government) and select the correct answer using the codes given below in the lists:</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; font-size: 14px; border: 1px solid rgba(255,255,255,0.15);">
                        <thead>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.05);">
                                <th style="text-align: left; padding: 8px 10px; width: 50%; border: 1px solid rgba(255,255,255,0.15);">List I</th>
                                <th style="text-align: left; padding: 8px 10px; width: 50%; border: 1px solid rgba(255,255,255,0.15);">List II</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">1. Power shared among different organs of government</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B. Separation of powers</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">2. Power shared among governments at different levels</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D. Federal government</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">3. Power shared by different social groups</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A. Community government</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">4. Power shared by two or more political parties</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C. Coalition government</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 15px;">
                        <b>Options:</b>
                        <br/>(a) 1-D, 2-A, 3-B, 4-C &nbsp;&nbsp; (b) 1-B, 2-C, 3-D, 4-A &nbsp;&nbsp; (c) 1-B, 2-D, 3-A, 4-C &nbsp;&nbsp; (d) 1-C, 2-D, 3-A, 4-B
                        <br/><br/>
                        <b>Answer:</b> <b style="color: ${themeColor};">(c) 1-B, 2-D, 3-A, 4-C</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">9. Consider the following two statements on power sharing and select the answer using the codes given below:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. Power sharing is good for democracy.
                        <br/>B. It helps to reduce the possibility of conflict between social groups.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Options:</b>
                        <br/>(a) A is true but B is false &nbsp;&nbsp; (b) Both A and B are true &nbsp;&nbsp; (c) Both A and B are false &nbsp;&nbsp; (d) A is false but B is true
                        <br/><br/>
                        <b>Answer:</b> <b style="color: ${themeColor};">(b) Both A and B are true</b>
                    </p>
                </div>
            </div>
        `,
  },
};
