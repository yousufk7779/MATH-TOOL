import { ChapterContent } from "../types";

const themeColor = "#42A5F5"; // Matches getChapterGradient for c7-civ-3 (Blue)

export const c7Civ3: ChapterContent = {
  id: "c7-civ-3",
  number: 3,
  title: "How the State Government Works",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">The state government is responsible for running the administration of a state. This chapter explains the role of Members of the Legislative Assembly (MLAs), how they are elected, how they debate issues in the Legislative Assembly, and how decisions are made and implemented by various government departments.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. Who is an MLA?</h3>
            <p style="line-height: 1.6; font-size: 15px;">An <b>MLA (Member of the Legislative Assembly)</b> is a representative elected by the voters of a particular area called a **constituency**. MLAs do not represent the whole state individually; they represent their specific constituency and gather in the Legislative Assembly to make laws.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. Ruling Party and Opposition</h3>
            <p style="line-height: 1.6; font-size: 15px;">After elections, the political party whose MLAs win <b>more than half</b> of the constituencies forms the <b>Ruling Party</b>. All other parties are called the <b>Opposition</b>. The MLAs of the ruling party elect their leader, who becomes the <b>Chief Minister</b>. The Chief Minister then selects other MLAs as ministers to run different government departments.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. The Legislative Assembly</h3>
            <p style="line-height: 1.6; font-size: 15px;">It is a place where all MLAs (from both ruling and opposition parties) meet to discuss and debate important issues. They can ask questions to ministers, propose new ideas, and debate where money should be spent. Any decision taken by the cabinet must be approved by the Legislative Assembly.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">4. Working of the Government</h3>
            <p style="line-height: 1.6; font-size: 15px;">The government does not only work inside the Assembly. Decisions are also discussed in newspapers, TV channels, and press conferences. The actual work of implementing laws and decisions is done by various <b>Government Departments</b> like the Public Works Department (PWD), the Health Department, and the Education Department.</p>
        </div>
    `,
  htmlExercises: {
    "c7c3-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Use the terms 'constituency' and 'represent' to explain who an MLA is and how is the person elected?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> 
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;">An <b>MLA</b> is a representative elected by the people of a specific area called a <b>constituency</b>.</li>
                            <li><b>Election process:</b> The state is divided into small electoral areas (constituencies). During elections, candidates from different parties contest. The candidate who wins the maximum votes from a constituency becomes its MLA, representing that area's people in the government.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q2 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">2. How do some MLAs become Ministers? Explain.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> MLAs become ministers through these steps:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>The political party that wins more than half the seats becomes the ruling party.</li>
                            <li>The ruling party MLAs elect their leader, who becomes the <b>Chief Minister</b>.</li>
                            <li>The Chief Minister then selects other MLAs from the party to head different departments as <b>Ministers</b>.</li>
                            <li>Finally, the <b>Governor</b> of the state formally appoints the Chief Minister and other ministers.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q3 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">3. Why should decisions taken by the Chief Minister and other ministers be debated in the Legislative Assembly?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Decisions should be debated because:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>It ensures that different opinions and local constituency problems are considered.</li>
                            <li>It helps to check if the decisions are correct and if government funds are spent properly.</li>
                            <li>Any new law or major executive decision requires the majority approval of the MLAs in the assembly.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q4 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">4. What was the problem in Patalpuram? What discussion/action was taken by the following?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Main Problem:</b> Patalpuram faced a severe shortage of clean drinking water, dirty sanitation conditions, poor medical aid, and a spreading diarrhea outbreak.</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; text-align: left; font-size: 14px;">
                        <thead>
                            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                                <th style="padding: 8px; color: ${themeColor};">Group / Entity</th>
                                <th style="padding: 8px; color: ${themeColor};">Action / Discussion Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Public Meeting</td>
                                <td style="padding: 8px;">Gathered to protest, block roads, and demand immediate clean water and sanitation from officials.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Legislative Assembly</td>
                                <td style="padding: 8px;">MLAs debated the crisis, questioned the health minister, and demanded clean water tankers.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Press Conference</td>
                                <td style="padding: 8px;">The Health Minister invited journalists to outline the government's plans and measures.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Chief Minister</td>
                                <td style="padding: 8px;">Visited Patalpuram, met patients in hospitals, consoled affected families, and released emergency funds.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Q5 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">5. What is the difference between the work that MLAs do in the Assembly and the work done by government departments?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>MLAs in the Assembly:</b> They debate problems, ask questions to ministers, and approve/make laws for the state.</li>
                            <li><b>Government Departments:</b> They implement (carry out) the laws made by the Assembly and manage daily public services (like setting up schools, hospitals, and water pipelines).</li>
                        </ul>
                    </p>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter covers the functioning of the state government, role of MLAs, formation of ruling/opposition parties, and departmental execution.",
  definitions: [
    {
      term: "Constituency",
      description:
        "A specific geographical area from which all voters elect one representative to the legislature.",
    },
    {
      term: "Majority",
      description:
        "A situation where a political party wins more than half the total number of constituencies in a state.",
    },
    {
      term: "Opposition",
      description:
        "Elected representatives (MLAs) who do not belong to the ruling party and question its policies.",
    },
    {
      term: "Press Conference",
      description:
        "A meeting called by ministers or officials to brief media reporters and answer their questions.",
    },
  ],
  keyPoints: [
    "Every state in India has a Legislative Assembly where elected MLAs gather.",
    "The Governor is the ceremonial head of the state, while the Chief Minister heads the executive.",
    "MLAs raise local issues in the assembly and vote on new laws.",
    "Decisions made by the Chief Minister must be approved by the MLAs to be finalized.",
  ],
  formulas: [],
  crux: [
    "State is divided into constituencies; voters elect one MLA from each area.",
    "The majority party forms the government led by the Chief Minister.",
    "The Legislative Assembly is the forum for debate, questioning, and law-making.",
    "Departments (like Health, PWD) execute plans approved by the Assembly.",
  ],
  exercises: [
    {
      id: "c7c3-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc3-mcq-1",
      question: "What does the abbreviation 'MLA' stand for?",
      options: [
        "Member of Local Association",
        "Member of Legislative Assembly",
        "Main Law Agency",
        "Minister of Legal Affairs",
      ],
      correctAnswer: "b",
      explanation:
        "MLA stands for Member of Legislative Assembly, elected directly by the public.",
    },
    {
      id: "cc3-mcq-2",
      question: "Every state in India has a legislative body called the:",
      options: [
        "Parliament",
        "Legislative Assembly",
        "Central Cabinet",
        "Supreme Court",
      ],
      correctAnswer: "b",
      explanation:
        "The state legislature where MLAs sit and debate is the Legislative Assembly.",
    },
    {
      id: "cc3-mcq-3",
      question:
        "The entire state is divided into different voting areas called:",
      options: ["Blocks", "Constituencies", "Districts", "Municipalities"],
      correctAnswer: "b",
      explanation:
        "A constituency is a marked area from which voters choose their single MLA.",
    },
    {
      id: "cc3-mcq-4",
      question:
        "Who is the head of the executive organ of the state government?",
      options: [
        "President",
        "Chief Minister",
        "Prime Minister",
        "Chief Justice",
      ],
      correctAnswer: "b",
      explanation:
        "The Chief Minister is the elected head of the ruling cabinet and state executive.",
    },
    {
      id: "cc3-mcq-5",
      question:
        "Who formally appoints the Chief Minister and other cabinet ministers?",
      options: [
        "Prime Minister of India",
        "Governor of the State",
        "President of India",
        "Mayor",
      ],
      correctAnswer: "b",
      explanation:
        "The Governor is the head of the state who appoints the CM and council of ministers.",
    },
    {
      id: "cc3-mcq-6",
      question: "MLAs in the Legislative Assembly are broadly divided into:",
      options: [
        "Ruling party and Opposition",
        "Primary and Secondary groups",
        "Voters and Ministers",
        "Police and Officers",
      ],
      correctAnswer: "a",
      explanation:
        "The winning majority forms the ruling party, while others form the opposition.",
    },
    {
      id: "cc3-mcq-7",
      question:
        "A gathering of journalists invited to ask questions and report on government plans is a:",
      options: [
        "Public meeting",
        "Press conference",
        "Court trial",
        "Voting booth",
      ],
      correctAnswer: "b",
      explanation:
        "A press conference allows ministers to present plans directly to the media.",
    },
    {
      id: "cc3-mcq-8",
      question: "Where do all MLAs meet to debate problems and pass new bills?",
      options: [
        "District court",
        "Legislative Assembly",
        "Parliament House",
        "Gram Sabha",
      ],
      correctAnswer: "b",
      explanation:
        "Debates and voting on state bills occur inside the Legislative Assembly.",
    },
    {
      id: "cc3-mcq-9",
      question:
        "Which of the following is an example of a state government department?",
      options: [
        "Public Works Department (PWD)",
        "Health Department",
        "Education Department",
        "All of these",
      ],
      correctAnswer: "d",
      explanation:
        "All these departments are executing agencies of the state government.",
    },
    {
      id: "cc3-mcq-10",
      question:
        "A political party that wins more than half the constituencies in a state is the:",
      options: [
        "Coalition party",
        "Ruling party",
        "Opposition party",
        "Minority party",
      ],
      correctAnswer: "b",
      explanation:
        "Winning more than 50% of constituencies makes a party the majority ruling party.",
    },
  ],
  summary: [
    "The chapter 'How the State Government Works' describes the election of MLAs, how a ruling majority party forms the government under a Chief Minister, the function of the Legislative Assembly as a house of debate, and the implementation of state welfare by government departments.",
  ],
};
