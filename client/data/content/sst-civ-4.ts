import { ChapterContent } from "../types";

const themeColor = "#8E2DE2"; // Violet/Purple color for Civics Chapter 4

export const sstCiv4: ChapterContent = {
  id: "sst-civ-4",
  number: 4,
  title: "Political Parties",
  introduction:
    "In a democracy, we don't usually vote directly for the Prime Minister. We vote for a 'Party'. But what exactly is a political party? Why do we even need them? Let's explore the engines of our democracy: Political Parties.",
  definitions: [
    {
      term: "Political Party",
      description:
        "A group of people who come together to contest elections and hold power in the government.",
    },
    {
      term: "Partisan",
      description:
        "A person who is strongly committed to a party, group or faction. Partisanship is marked by a tendency to take a side.",
    },
    {
      term: "Ruling Party",
      description:
        "The political party that runs the government because it won the majority in the elections.",
    },
    {
      term: "Opposition Party",
      description:
        "The parties that lose the election and play the role of criticizing the government for its failures.",
    },
    {
      term: "Defection",
      description:
        "Changing party allegiance from the party on which a person got elected to a different party.",
    },
  ],
  keyPoints: [
    "A political party has three components: The leaders, the active members, and the followers.",
    "Functions of parties: contest elections, put forward policies, make laws, form and run governments, and play the role of opposition.",
    "Party Systems: One-party system (China), Two-party system (USA, UK), and Multi-party system (India).",
    "India has National Parties (presence in multiple states like BJP, INC) and State/Regional Parties (presence in one or two states like AAP, TMC).",
    "Challenges to political parties: Lack of internal democracy, dynastic succession, money and muscle power, and lack of meaningful choices for voters.",
  ],
  formulas: [],
  crux: [
    "Parties are needed to form governments and make laws.",
    "India has a multi-party system.",
    "Major problems: Lack of internal democracy and use of money/muscle power.",
  ],
  mcqs: [
    {
      id: "sc4-mcq-1",
      question: "Which of the following is a component of a political party?",
      options: [
        "The leaders",
        "The active members",
        "The followers",
        "All of the above",
      ],
      correctAnswer: "d",
    },
    {
      id: "sc4-mcq-2",
      question: "Which party system does India follow?",
      options: [
        "One-party system",
        "Two-party system",
        "Multi-party system",
        "No-party system",
      ],
      correctAnswer: "c",
    },
    {
      id: "sc4-mcq-6",
      question: "Which is the oldest political party in India?",
      options: [
        "Bharatiya Janata Party (BJP)",
        "Indian National Congress (INC)",
        "Communist Party of India (CPI)",
        "Bahujan Samaj Party (BSP)",
      ],
      correctAnswer: "b",
    },
    {
      id: "sc4-mcq-7",
      question:
        "What is a signed statement submitted to an officer where a person makes a sworn statement?",
      options: ["Affidavit", "Manifesto", "Declaration", "Charter"],
      correctAnswer: "a",
    },
    {
      id: "sc4-mcq-8",
      question:
        "What is a political party that is present in only one of the federal units called?",
      options: [
        "National Party",
        "State party",
        "Coalition Party",
        "Alliance Party",
      ],
      correctAnswer: "b",
    },
    {
      id: "sc4-mcq-9",
      question: "Who is the founder of the Bahujan Samaj Party (BSP)?",
      options: ["Kanshi Ram", "Mayawati", "Jyotirao Phule", "B.R. Ambedkar"],
      correctAnswer: "a",
    },
    {
      id: "sc4-mcq-10",
      question:
        "What is the process of changing party allegiance from the party on which a person got elected?",
      options: ["Defection", "Nomination", "Campaigning", "Alliance"],
      correctAnswer: "a",
    },
  ],
  summary: [
    "Political parties are highly essential for democracy.",
    "They face numerous challenges that must be addressed to ensure fair representation.",
  ],
  exercises: [
    {
      id: "sc4-ex-1",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  isHtmlView: true,
  htmlOverview: `
    <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
        <p style="line-height: 1.6; font-size: 17px;">In a democracy, we don't usually vote directly for the Prime Minister. We vote for a 'Party'. But what exactly is a political party? Why do we even need them? Let's explore the engines of our democracy: Political Parties.</p>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Political Party:</b> A group of people who come together to contest elections and hold power in the government.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Partisan:</b> A person who is strongly committed to a party, group or faction. Partisanship is marked by a tendency to take a side.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Ruling Party:</b> The political party that runs the government because it won the majority in the elections.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Opposition Party:</b> The parties that lose the election and play the role of criticizing the government for its failures.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Defection:</b> Changing party allegiance from the party on which a person got elected to a different party.</p>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
        <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
            <li style="margin-bottom: 8px;">A political party has three components: The leaders, the active members, and the followers.</li>
            <li style="margin-bottom: 8px;">Functions of parties: contest elections, put forward policies, make laws, form and run governments, and play the role of opposition.</li>
            <li style="margin-bottom: 8px;">Party Systems: One-party system (China), Two-party system (USA, UK), and Multi-party system (India).</li>
            <li style="margin-bottom: 8px;">India has National Parties (presence in multiple states like BJP, INC) and State/Regional Parties (presence in one or two states like AAP, TMC).</li>
            <li style="margin-bottom: 8px;">Challenges to political parties: Lack of internal democracy, dynastic succession, money and muscle power, and lack of meaningful choices for voters.</li>
        </ul>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
        <p style="line-height: 1.6; font-size: 16px;">Political parties are highly essential for democracy. They face numerous challenges that must be addressed to ensure fair representation.</p>
    </div>
  `,
  htmlExercises: {
    "sc4-ex-1": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">1. State the various functions political parties perform in a democracy.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Political parties perform the following core functions:
                        <br/>• <b>Contest Elections:</b> Field candidates to compete for public office.
                        <br/>• <b>Formulate Policies:</b> Present diverse programs and policies for voters to choose.
                        <br/>• <b>Make Laws:</b> Debate, vote on, and pass legislation in the parliament.
                        <br/>• <b>Run Government:</b> The majority party forms the cabinet and runs the administration.
                        <br/>• <b>Role of Opposition:</b> Criticize government failures, check ruling power, and highlight issues.
                        <br/>• <b>Access to Welfare:</b> Provide citizens access to welfare schemes and government machinery.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">2. What are the various challenges faced by political parties?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Political parties face these major challenges:
                        <br/>• <b>Lack of Internal Democracy:</b> Power stays with a few top leaders; regular organizational elections are rarely held.
                        <br/>• <b>Dynastic Succession:</b> Leaders favor family members, blocking ordinary workers from top spots.
                        <br/>• <b>Money and Muscle Power:</b> Rich candidates and criminals get tickets to ensure wins, corrupting the democratic process.
                        <br/>• <b>Lack of Meaningful Choice:</b> Parties offer very similar policies, giving voters limited alternatives.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">3. Suggest some reforms to strengthen parties so that they perform their functions well?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Suggestions to reform political parties:
                        <br/>• <b>Anti-Defection Regulation:</b> Strictly enforce laws preventing elected representatives from switching parties for personal gain.
                        <br/>• <b>Affidavits on Wealth & Crime:</b> Mandatory public filing of candidate assets and criminal histories.
                        <br/>• <b>State Funding:</b> Govt funding of elections to counter money power.
                        <br/>• <b>Internal Regulation:</b> Make membership registers, dispute cells, and internal democracy legally mandatory.
                        <br/>• <b>Women Reservation:</b> Guarantee 1/3rd of party tickets to female candidates.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">4. What is a political party?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> A political party is an organized group of citizens who share common political views and come together to contest elections, win public office, and run the government.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">5. What are the characteristics of a political party?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Core characteristics of a political party:
                        <br/>• <b>Shared Ideology:</b> A common agreement on policies and societal welfare.
                        <br/>• <b>Constitutional Means:</b> A commitment to gain power through peaceful, democratic elections.
                        <br/>• <b>Three Elements:</b> Leaders, active members, and followers.
                        <br/>• <b>Partisanship:</b> Aligning with specific sides of public issues.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">6. Fill in the blank:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        A group of people who come together to contest elections and hold power in the government is called a <b>political party</b>.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">7. Match List I (organisations and struggles) with List II and select the correct answer using the codes given below the lists:</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; font-size: 14px; border: 1px solid rgba(255,255,255,0.15);">
                        <thead>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.05);">
                                <th style="text-align: left; padding: 8px 10px; width: 50%; border: 1px solid rgba(255,255,255,0.15);">List I</th>
                                <th style="text-align: left; padding: 8px 10px; width: 50%; border: 1px solid rgba(255,255,255,0.15);">List II</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">1. Congress Party</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C. United Progressive Alliance</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">2. Bharatiya Janata Party</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A. National Democratic Alliance</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">3. Communist Party of India (Marxist)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D. Left Front</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">4. Telugu Desam Party</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B. State party</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px; color: #E0E0E0; font-size: 14px; border: 1px solid rgba(255,255,255,0.15); text-align: center;">
                        <thead>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.05);">
                                <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">Option</th>
                                <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">1</th>
                                <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">2</th>
                                <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">3</th>
                                <th style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.15);">4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(a)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(b)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(c)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(d)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 15px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">(c) 1-C, 2-A, 3-D, 4-B</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">8. Who among the following is the founder of the Bahujan Samaj Party?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. Kanshi Ram
                        <br/>B. Sahu Maharaj
                        <br/>C. B.R. Ambedkar
                        <br/>D. Jotiba Phule
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">A. Kanshi Ram</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">9. What is the guiding philosophy of the Bharatiya Janata Party?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. Bahujan Samaj
                        <br/>B. Revolutionary democracy
                        <br/>C. Integral humanism
                        <br/>D. Modernity
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">C. Integral humanism</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">10. Consider the following statements on parties:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. Political parties do not enjoy much trust among the people.
                        <br/>B. Parties are often rocked by scandals involving top party leaders.
                        <br/>C. Parties are not necessary to run governments.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Options:</b>
                        <br/>(a) A, B, and C &nbsp;&nbsp; (b) A and B &nbsp;&nbsp; (c) B and C &nbsp;&nbsp; (d) A and C
                        <br/><br/>
                        <b>Answer:</b> <b style="color: ${themeColor};">(b) A and B</b> (Statement C is incorrect because large representative democracies cannot function without organized political parties to form governments and build consensus).
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">11. Read the following passage and answer the questions given below:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; font-style: italic; margin-left: 10px;">
                        "Muhammad Yunus is a famous economist of Bangladesh... He decided to launch a political party and contest in the parliamentary elections... His party, called Nagarik Shakti (Citizens' Power), has caused a stir among the Bangladeshis... But leaders of traditional political parties who dominated the country's politics for decades were apprehensive..."
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b>
                        <br/>• <b>Yunus's Decision:</b> Yes, it was a positive and democratic step. Floating a new party offered a clean, grassroots alternative to traditional political groups.
                        <br/>• <b>Agreement with Fears:</b> The traditional parties' fears were largely driven by the threat of losing political control. Concerns of foreign mentorship were likely political mudslinging rather than reality.
                        <br/>• <b>Party Organization & Defense:</b> To stand apart, Nagarik Shakti should run on internal elections, complete financial transparency (such as audit publications), and volunteer participation instead of dynastic control. As Yunus, I would defend the party by arguing that democracy lives on healthy choice, and our mission is to empower citizens and check institutional corruption.
                    </p>
                </div>
            </div>
    `,
  },
};
