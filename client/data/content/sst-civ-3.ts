import { ChapterContent } from "../types";

const themeColor = "#42A5F5"; // Blue color for Civics Chapter 3

export const sstCiv3: ChapterContent = {
  id: "sst-civ-3",
  number: 3,
  title: "Gender, Religion and Caste",
  introduction:
    "In a democracy, everyone is equal. But does this equality exist in our daily lives? We often see people divided by their gender, religion, or the caste they are born into. Let's see how these dangerous social divisions affect our democratic politics.",
  definitions: [
    {
      term: "Patriarchy",
      description:
        "A system that values men more and gives them power over women. It is a society ruled by men.",
    },
    {
      term: "Feminist",
      description:
        "A woman or a man who strongly believes in equal rights and opportunities for women and men.",
    },
    {
      term: "Secular State",
      description:
        "A state that does not have any official religion and completely prohibits discrimination on the grounds of religion.",
    },
    {
      term: "Communalism",
      description:
        "A highly dangerous belief where one considers their religion superior to others, often leading to hatred and violence.",
    },
    {
      term: "Caste Hierarchy",
      description:
        "A ladder-like social structure where different caste groups are placed from highest to lowest.",
    },
  ],
  keyPoints: [
    "Gender division is not biological but based on social expectations. The 'sexual division of labour' forces women to do all household chores while men work outside.",
    "The Equal Remuneration Act, 1976 firmly provides that equal wages should be paid to equal work.",
    "Women's political representation in India is very low. However, 1/3rd of seats are reserved for women in local government bodies (Panchayats).",
    "Communalism happens when religion is expressed loudly in politics, and one religion tries to dominate another. It is a major threat to democracy.",
    "To counter communalism, India chose to be a Secular State. The Constitution gives everyone the freedom to practice any religion.",
    "Caste is unique to India. In earlier times, your caste decided your profession and you couldn't change it.",
    "While the old caste system is slowly breaking down due to education and city life, caste is still deeply rooted in Indian politics (vote banks).",
  ],
  formulas: [],
  crux: [
    "Women still face severe discrimination (Patriarchy).",
    "Communal politics (focusing only on religion) is extremely dangerous.",
    "India is Secular: No official religion.",
    "Caste still heavily decides who votes for whom in India.",
  ],
  mcqs: [
    {
      id: "sc3-mcq-1",
      question:
        "Which of the following refers to a person who firmly believes in equal rights for women and men?",
      options: ["Communalist", "Feminist", "Secularist", "Patriarch"],
      correctAnswer: "b",
    },
    {
      id: "sc3-mcq-2",
      question:
        "A state that absolutely does NOT establish any one religion as its official religion is called a:",
      options: [
        "Communal state",
        "Secular state",
        "Dictatorial state",
        "Religious state",
      ],
      correctAnswer: "b",
    },
    {
      id: "sc3-mcq-3",
      question:
        "In which of the following institutions are seats legally reserved for women in India?",
      options: [
        "Lok Sabha",
        "Rajya Sabha",
        "State Assemblies",
        "Panchayati Raj bodies",
      ],
      correctAnswer: "d",
    },
    {
      id: "sc3-mcq-4",
      question:
        "The social system that values men more profoundly and gives them heavy power over women is known as:",
      options: ["Feminism", "Matriarchy", "Patriarchy", "Democracy"],
      correctAnswer: "c",
    },
    {
      id: "sc3-mcq-6",
      question:
        "What is a system that values men more and gives them power over women called?",
      options: ["Patriarchy", "Matriarchy", "Hierarchy", "Monarchy"],
      correctAnswer: "a",
    },
    {
      id: "sc3-mcq-7",
      question:
        "The representation of women in Indian Lok Sabha has historically been:",
      options: ["More than 50%", "Around 33%", "Less than 15%", "Exactly 10%"],
      correctAnswer: "c",
    },
    {
      id: "sc3-mcq-8",
      question:
        "A person who does not discriminate against others on the basis of religious beliefs is a:",
      options: ["Communalist", "Secularist", "Casteist", "Feminist"],
      correctAnswer: "b",
    },
    {
      id: "sc3-mcq-9",
      question:
        "What is the name of the system where occupational groups are arranged in a hierarchical order?",
      options: [
        "Class system",
        "Gender division",
        "Caste system",
        "Religious system",
      ],
      correctAnswer: "c",
    },
    {
      id: "sc3-mcq-10",
      question:
        "Who was the great Indian leader who fought against caste inequality?",
      options: [
        "Dr. B.R. Ambedkar",
        "Lal Bahadur Shastri",
        "Jawaharlal Nehru",
        "Sardar Patel",
      ],
      correctAnswer: "a",
    },
  ],
  summary: [
    "Democracy bravely tries to accommodate social differences.",
    "Gender discrimination remains a stark reality; political empowerment is key to solving it.",
    "Communalism divides people; a strongly secular constitution protects our unity.",
    "Caste inequalities are a stubborn reality of India, deeply influencing political elections.",
  ],
  exercises: [
    {
      id: "sc3-ex-1",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  isHtmlView: true,
  htmlOverview: `
    <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
        <p style="line-height: 1.6; font-size: 17px;">In a democracy, everyone is equal. But does this equality exist in our daily lives? We often see people divided by their gender, religion, or the caste they are born into. Let's see how these dangerous social divisions affect our democratic politics.</p>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Patriarchy:</b> A system that values men more and gives them power over women. It is a society ruled by men.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Feminist:</b> A woman or a man who strongly believes in equal rights and opportunities for women and men.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Secular State:</b> A state that does not have any official religion and completely prohibits discrimination on the grounds of religion.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Communalism:</b> A highly dangerous belief where one considers their religion superior to others, often leading to hatred and violence.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Caste Hierarchy:</b> A ladder-like social structure where different caste groups are placed from highest to lowest.</p>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
        <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
            <li style="margin-bottom: 8px;">Gender division is not biological but based on social expectations. The 'sexual division of labour' forces women to do all household chores while men work outside.</li>
            <li style="margin-bottom: 8px;">The Equal Remuneration Act, 1976 firmly provides that equal wages should be paid to equal work.</li>
            <li style="margin-bottom: 8px;">Women's political representation in India is very low. However, 1/3rd of seats are reserved for women in local government bodies (Panchayats).</li>
            <li style="margin-bottom: 8px;">Communalism happens when religion is expressed loudly in politics, and one religion tries to dominate another. It is a major threat to democracy.</li>
            <li style="margin-bottom: 8px;">To counter communalism, India chose to be a Secular State. The Constitution gives everyone the freedom to practice any religion.</li>
            <li style="margin-bottom: 8px;">Caste is unique to India. In earlier times, your caste decided your profession and you couldn't change it.</li>
            <li style="margin-bottom: 8px;">While the old caste system is slowly breaking down due to education and city life, caste is still deeply rooted in Indian politics (vote banks).</li>
        </ul>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
        <p style="line-height: 1.6; font-size: 16px;">Democracy bravely tries to accommodate social differences. Gender discrimination remains a stark reality; political empowerment is key to solving it. Communalism divides people; a strongly secular constitution protects our unity. Caste inequalities are a stubborn reality of India, deeply influencing political elections.</p>
    </div>
  `,
  htmlExercises: {
    "sc3-ex-1": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">1. Mention different aspects of life in which women are discriminated or disadvantaged in India.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Women face discrimination in several ways:
                        <br/>• <b>Literacy:</b> The literacy rate for women is only 54% compared to 76% for men, as parents prefer educating boys.
                        <br/>• <b>Unpaid / Underpaid Work:</b> Household chores are unpaid and undervalued. Even in job sectors, women are often paid less than men for equal work.
                        <br/>• <b>Sex Ratio:</b> Preference for male children leads to female foeticide, resulting in a low sex ratio (943 girls per 1000 boys in 2011).
                        <br/>• <b>Safety and Violence:</b> High rates of domestic violence, harassment, and social exploitation.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">2. State different forms of communal politics with one example each.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Forms of communal politics include:
                        <br/>• <b>Everyday Beliefs:</b> Stereotypes and prejudices against other religions. <i>Example:</i> Considering one religion superior to another.
                        <br/>• <b>Political Dominance:</b> A majority group seeking to dominate the state. <i>Example:</i> Sinhala majoritarian policies in Sri Lanka.
                        <br/>• <b>Mobilization:</b> Using religious symbols, leaders, and appeals to divide voters. <i>Example:</i> Asking votes on religious lines.
                        <br/>• <b>Communal Violence:</b> Riots and clashes triggered by religious polarization. <i>Example:</i> Partition riots in 1947.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">3. State how caste inequalities are still continuing in India.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Caste inequalities persist in modern India through:
                        <br/>• <b>Marriage:</b> Most marriages still take place within the same caste group (endogamy).
                        <br/>• <b>Economic Divide:</b> Access to education remains high in upper castes, keeping them economically better-off, while lower castes remain poorer.
                        <br/>• <b>Subtle Untouchability:</b> Although legally banned, social discrimination and untouchability are still practiced in rural pockets.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">4. State two reasons to say that caste alone cannot determine election results in India.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Caste alone cannot decide elections because:
                        <br/>• <b>No Caste Majority:</b> No single constituency in India has a clear majority of a single caste. Candidates need support from multiple castes.
                        <br/>• <b>Split Votes:</b> Multiple parties often field candidates from the same dominant caste, splitting the caste vote.
                        <br/>• <b>Varying Preferences:</b> People of the same caste have different preferences based on their income, class, and gender.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">5. What is the status of women’s representation in India’s legislative bodies?</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b>
                        <br/>• <b>Lok Sabha:</b> Very low representation, which only crossed 14% for the first time in 2019.
                        <br/>• <b>State Assemblies:</b> Extremely poor, averaging less than 5% across the country.
                        <br/>• <b>Local Bodies:</b> Excellent representation, as 1/3rd of the seats are constitutionally reserved for women in Panchayats and Municipalities.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">6. Mention any two constitutional provisions that make India a secular state.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> The constitutional provisions are:
                        <br/>• <b>No Official Religion:</b> The Indian state does not patronize or establish any religion as official (unlike Buddhism in Sri Lanka).
                        <br/>• <b>Right to Equality:</b> The state cannot discriminate against any citizen on the grounds of religion (Article 15).
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">7. When we speak of gender divisions, we usually refer to:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        (a) Biological difference between men and women
                        <br/>(b) Unequal roles assigned by the society to men and women
                        <br/>(c) Unequal child sex ratio
                        <br/>(d) Absence of voting rights for women in democracies
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">(b) Unequal roles assigned by the society to men and women</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">8. In India seats are reserved for women in:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        (a) Lok Sabha
                        <br/>(b) State legislative assemblies
                        <br/>(c) Cabinets
                        <br/>(d) Panchayati Raj bodies
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">(d) Panchayati Raj bodies</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">9. Consider the following statements on the meaning of communal politics. Communal politics is based on the belief that:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. One religion is superior to that of others.
                        <br/>B. People belonging to different religions can live together happily as equal citizens.
                        <br/>C. Followers of a particular religion constitute one community.
                        <br/>D. State power cannot be used to establish the dominance of one religious group over others.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Options:</b>
                        <br/>(a) A, B, C, and D &nbsp;&nbsp; (b) A, B, and D &nbsp;&nbsp; (c) A and C &nbsp;&nbsp; (d) B and D
                        <br/><br/>
                        <b>Answer:</b> <b style="color: ${themeColor};">(c) A and C</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">10. Which among the following statements about India’s Constitution is wrong? It:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        (a) prohibits discrimination on grounds of religion.
                        <br/>(b) gives official status to one religion.
                        <br/>(c) provides to all individuals freedom to profess any religion.
                        <br/>(d) ensures equality of citizens within religious communities.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">(b) gives official status to one religion.</b> (This statement is wrong since India is a secular state with no official religion).
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">11. Fill in the blank:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        Social divisions based on <b>caste</b> are peculiar to India.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">12. Match List I with List II and select the correct answer using the codes given below the Lists:</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; font-size: 14px; border: 1px solid rgba(255,255,255,0.15);">
                        <thead>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.05);">
                                <th style="text-align: left; padding: 8px 10px; width: 50%; border: 1px solid rgba(255,255,255,0.15);">List I</th>
                                <th style="text-align: left; padding: 8px 10px; width: 50%; border: 1px solid rgba(255,255,255,0.15);">List II</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">1. A person who believes in equal rights and opportunities for women and men</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B. Feminist</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">2. A person who says that religion is the principal basis of community</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A. Communalist</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">3. A person who thinks that caste is the principal basis of community</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D. Castiest</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">4. A person who does not discriminate others on the basis of religious beliefs</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C. Secularist</td>
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
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(b)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(c)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(d)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 15px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">(b) 1-B, 2-A, 3-D, 4-C</b>
                    </p>
                </div>
            </div>
    `,
  },
};
