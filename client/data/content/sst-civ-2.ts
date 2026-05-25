import { ChapterContent } from "../types";

const themeColor = "#7986CB"; // Indigo/Blue color for Civics Chapter 2

export const sstCiv2: ChapterContent = {
  id: "sst-civ-2",
  number: 2,
  title: "Federalism",
  introduction:
    "In a huge country like India, it is impossible for one government sitting in New Delhi to solve the local problems of a small village in Kerala. That's why power is divided! This system of dividing power between a central authority and its various states is called Federalism.",
  definitions: [
    {
      term: "Federalism",
      description:
        "A system of government where power is structurally divided between a central authority (Union government) and its constituent units (State governments).",
    },
    {
      term: "Unitary System",
      description:
        "The opposite of federalism. There is only one level of government, or sub-units are strictly subordinate to the central government. The center can order the states what to do.",
    },
    {
      term: "Jurisdiction",
      description:
        "The area over which someone has legal authority. In India, the Constitution clearly defines the jurisdiction of the Center and the States through three lists.",
    },
    {
      term: "Coalition Government",
      description:
        "A government formed by the coming together of at least two political parties. Usually, partners in a coalition form a political alliance and adopt a common programme.",
    },
    {
      term: "Decentralisation",
      description:
        "When power is specifically taken away from Central and State governments and given to local government (Panchayats and Municipalities).",
    },
  ],
  keyPoints: [
    "Federalism has two objectives: To strongly safeguard and promote the unity of the country, and to highly accommodate regional diversity.",
    "There are two routes to form a federation: 'Coming Together' (independent states forming a bigger unit, e.g., USA, Australia) and 'Holding Together' (a large country deciding to divide its power, e.g., India, Spain, Belgium).",
    "The Indian Constitution divides power into three lists: Union List (National importance: Defence, Foreign Affairs), State List (Local importance: Police, Agriculture), and Concurrent List (Common interest: Education, Forests).",
    "If there is a conflict between central law and state law on a Concurrent List subject, the Central law totally prevails.",
    "A major step towards decentralisation in India was taken in 1992. The Constitution was amended to make the third-tier of democracy (Panchayats and Municipalities) vastly more powerful and effective.",
    "The creation of Linguistic States (states formed based on language spoken) was the first and a major test for democratic politics in India. It actually made the country more united and administration easier.",
  ],
  formulas: [],
  crux: [
    "Federalism = Power shared between Center and States.",
    "Holding Together (India) vs Coming Together (USA).",
    "Union List (Center makes laws), State List (States make laws), Concurrent List (Both make laws).",
    "1992 Amendment gave huge power to local Panchayats (Decentralisation).",
  ],
  mcqs: [
    {
      id: "sc2-mcq-1",
      question:
        "Which of the following is an example of a 'Coming Together' federation?",
      options: ["India", "Spain", "Belgium", "USA"],
      correctAnswer: "d",
    },
    {
      id: "sc2-mcq-2",
      question:
        "On which of the following subjects can BOTH the Union and State governments make laws?",
      options: ["Defence", "Police", "Education", "Foreign Affairs"],
      correctAnswer: "c",
    },
    {
      id: "sc2-mcq-3",
      question: "What is meant by decentralisation?",
      options: [
        "Power given only to the President",
        "Power taken from Center & State and given to local governments",
        "Power given to the military",
        "Power taken from states to form a dictatorship",
      ],
      correctAnswer: "b",
    },
    {
      id: "sc2-mcq-4",
      question:
        "In India's federal system, the State governments have the absolute power to legislate on all those subjects neatly included in the:",
      options: [
        "Union List",
        "State List",
        "Concurrent List",
        "Residuary Subjects",
      ],
      correctAnswer: "b",
    },
    {
      id: "sc2-mcq-5",
      question:
        "When power is legally divided between the Central and State governments, it is called a:",
      options: ["Unitary system", "Federal system", "Dictatorship", "Monarchy"],
      correctAnswer: "b",
    },
    {
      id: "sc2-mcq-6",
      question:
        "Which of the following is an example of 'coming together' federation?",
      options: ["India", "Spain", "Belgium", "USA"],
      correctAnswer: "d",
    },
    {
      id: "sc2-mcq-7",
      question:
        "Which level of government has power to legislate on 'Concurrent List' subjects?",
      options: [
        "Central Government only",
        "State Government only",
        "Both Central and State",
        "Local Government only",
      ],
      correctAnswer: "c",
    },
    {
      id: "sc2-mcq-8",
      question:
        "What is the system of government in which power is divided between central authority and constituent units?",
      options: ["Unitary", "Federalism", "Monarchy", "Dictatorship"],
      correctAnswer: "b",
    },
    {
      id: "sc2-mcq-9",
      question:
        "Which state of India has its own special status under Article 371?",
      options: ["Uttar Pradesh", "Nagaland", "Madhya Pradesh", "Rajasthan"],
      correctAnswer: "b",
    },
    {
      id: "sc2-mcq-10",
      question: "In municipal corporations, the political head is called:",
      options: ["Mayor", "Commissioner", "Sarpanch", "President"],
      correctAnswer: "a",
    },
  ],
  summary: [
    "Federalism allows a large, diverse country like India to be strongly united while respecting local, regional differences.",
    "The Constitution clearly outlines the exact power distribution between the Union and State governments through three specific lists.",
    "The era of coalition governments in India (since 1990) has significantly strengthened federalism, making it extremely difficult for the Center to arbitrarily dismiss State governments.",
    "Decentralisation (the 1992 constitutional amendment) established robust local self-governments, genuinely deepening democracy at the grassroots level.",
  ],
  exercises: [
    {
      id: "sc2-ex-1",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  isHtmlView: true,
  htmlOverview: `
    <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
        <p style="line-height: 1.6; font-size: 17px;">In a huge country like India, it is impossible for one government sitting in New Delhi to solve the local problems of a small village in Kerala. That's why power is divided! This system of dividing power between a central authority and its various states is called Federalism.</p>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Federalism:</b> A system of government where power is structurally divided between a central authority (Union government) and its constituent units (State governments).</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Unitary System:</b> The opposite of federalism. There is only one level of government, or sub-units are strictly subordinate to the central government. The center can order the states what to do.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Jurisdiction:</b> The area over which someone has legal authority. In India, the Constitution clearly defines the jurisdiction of the Center and the States through three lists.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Coalition Government:</b> A government formed by the coming together of at least two political parties. Usually, partners in a coalition form a political alliance and adopt a common programme.</p>
        <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Decentralisation:</b> When power is specifically taken away from Central and State governments and given to local government (Panchayats and Municipalities).</p>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
        <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
            <li style="margin-bottom: 8px;">Federalism has two objectives: To strongly safeguard and promote the unity of the country, and to highly accommodate regional diversity.</li>
            <li style="margin-bottom: 8px;">There are two routes to form a federation: 'Coming Together' (independent states forming a bigger unit, e.g., USA, Australia) and 'Holding Together' (a large country deciding to divide its power, e.g., India, Spain, Belgium).</li>
            <li style="margin-bottom: 8px;">The Indian Constitution divides power into three lists: Union List (National importance: Defence, Foreign Affairs), State List (Local importance: Police, Agriculture), and Concurrent List (Common interest: Education, Forests).</li>
            <li style="margin-bottom: 8px;">If there is a conflict between central law and state law on a Concurrent List subject, the Central law totally prevails.</li>
            <li style="margin-bottom: 8px;">A major step towards decentralisation in India was taken in 1992. The Constitution was amended to make the third-tier of democracy (Panchayats and Municipalities) vastly more powerful and effective.</li>
            <li style="margin-bottom: 8px;">The creation of Linguistic States (states formed based on language spoken) was the first and a major test for democratic politics in India. It actually made the country more united and administration easier.</li>
        </ul>
        
        <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
        <p style="line-height: 1.6; font-size: 16px;">Federalism allows a large, diverse country like India to be strongly united while respecting local, regional differences. The Constitution clearly outlines the exact power distribution between the Union and State governments through three specific lists. The era of coalition governments in India (since 1990) has significantly strengthened federalism, making it extremely difficult for the Center to arbitrarily dismiss State governments. Decentralisation (the 1992 constitutional amendment) established robust local self-governments, genuinely deepening democracy at the grassroots level.</p>
    </div>
  `,
  htmlExercises: {
    "sc2-ex-1": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">1. Locate the following States on a blank outline political map of India: Manipur, Sikkim, Chhattisgarh and Goa.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b>
                        <br/>• <b>Manipur:</b> Located in the North-Eastern part of India, bordering Myanmar.
                        <br/>• <b>Sikkim:</b> Located in the Eastern Himalayas, bordered by Nepal, Bhutan, and China.
                        <br/>• <b>Chhattisgarh:</b> Located in Central India, bordered by Madhya Pradesh, Maharashtra, and Odisha.
                        <br/>• <b>Goa:</b> Located on the South-Western coast of India, in the Konkan region.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">2. Identify and shade three federal countries (other than India) on a blank outline political map of the world.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b> Three prominent federal countries other than India are:
                        <br/>• <b>United States of America (USA)</b> (North America)
                        <br/>• <b>Canada</b> (North America)
                        <br/>• <b>Australia</b> (Oceania)
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">3. Point out one feature in the practice of federalism in India that is similar to and one feature that is different from that of Belgium.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b>
                        <br/>• <b>Similar Feature:</b> Both are 'Holding Together' federations where power is shared between the central government and regional governments to accommodate linguistic and cultural diversity.
                        <br/>• <b>Different Feature:</b> Belgium has a unique 'Community Government' representing specific language groups. India does not have community government, and the Central Government is relatively stronger than the states.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">4. What is the main difference between a federal form of government and a unitary one? Explain with an example.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b>
                        <br/>• <b>Federal Government:</b> Power is divided between the central authority and constituent states. Both levels enjoy independent powers. <i>Example:</i> India, USA.
                        <br/>• <b>Unitary Government:</b> Power is concentrated in the central government. Sub-units are subordinate and must follow center's orders. <i>Example:</i> Sri Lanka, United Kingdom.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">5. State any two differences between the local government before and after the Constitutional amendment in 1992.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        <b>Answer:</b>
                        <br/>• <b>Before 1992:</b> Elections were not held regularly, and local bodies lacked independent powers or resources.
                        <br/>• <b>After 1992:</b> Regular elections became constitutionally mandatory, and 1/3 of seats were reserved for women.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">6. Fill in the blanks:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                        Since the United States is a <b>coming together</b> type of federation, all the constituent States have equal powers and States are <b>strong</b> vis-à-vis the federal government. But India is a <b>holding together</b> type of federation and some States have more power than others. In India, the <b>central</b> government has more powers.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">7. Here are three reactions to the language policy followed in India. Give an argument and an example to support any of these positions.</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; font-style: italic; margin-left: 10px;">
                        Sangeeta: The policy of accommodation has strengthened national unity.
                        <br/>Arman: Language-based States have divided us by making everyone conscious of their language.
                        <br/>Harish: This policy has only helped to consolidate the dominance of English over all other languages.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> We support <b>Sangeeta's</b> position. India's policy of linguistic accommodation (no national language, 22 scheduled languages, states formed on language lines) has strengthened national unity by preventing linguistic conflicts and making administration easier. <i>Example:</i> Unlike Sri Lanka, which imposed Sinhalese and faced a civil war, India avoided division by accommodating Hindi and English.
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">8. The distinguishing feature of a federal government is:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        (a) National government gives some powers to the provincial governments.
                        <br/>(b) Power is distributed among the legislature, executive and judiciary.
                        <br/>(c) Elected officials exercise supreme power in the government.
                        <br/>(d) Governmental power is divided between different levels of government.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">(d) Governmental power is divided between different levels of government.</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">9. A few subjects in various Lists of the Indian Constitution are given here. Group them under the Union, State and Concurrent Lists as provided in the table below:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. Defence; B. Police; C. Agriculture; D. Education; E. Banking; F. Forests; G. Communications; H. Trade; I. Marriages
                    </p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; font-size: 14px; border: 1px solid rgba(255,255,255,0.15);">
                        <thead>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.05);">
                                <th style="text-align: left; padding: 8px 10px; width: 33%; border: 1px solid rgba(255,255,255,0.15);">Union List</th>
                                <th style="text-align: left; padding: 8px 10px; width: 33%; border: 1px solid rgba(255,255,255,0.15);">State List</th>
                                <th style="text-align: left; padding: 8px 10px; width: 33%; border: 1px solid rgba(255,255,255,0.15);">Concurrent List</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Defence, Banking, Communications</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Police, Agriculture, Trade</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Education, Forests, Marriages</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">10. Examine the following pairs that give the level of government in India and the powers of the government at that level to make laws on the subjects mentioned against each. Which of the following pairs is not correctly matched?</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; font-size: 14px; border: 1px solid rgba(255,255,255,0.15);">
                        <tbody>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">(a) State government</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">State List</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">(b) Central government</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Union List</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">(c) Central and State governments</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Concurrent List</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">(d) Local governments</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">Residuary powers</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 15px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">(d) Local governments - Residuary powers</b> (Residuary powers belong to the Union/Central government in India, not to local governments).
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">11. Match List I with List II and select the correct answer using the codes given below the lists:</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; font-size: 14px; border: 1px solid rgba(255,255,255,0.15);">
                        <thead>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.05);">
                                <th style="text-align: left; padding: 8px 10px; width: 50%; border: 1px solid rgba(255,255,255,0.15);">List I</th>
                                <th style="text-align: left; padding: 8px 10px; width: 50%; border: 1px solid rgba(255,255,255,0.15);">List II</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">1. Union of India</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A. Prime Minister</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">2. State</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C. Governor</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">3. Municipal Corporation</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D. Mayor</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">4. Gram Panchayat</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B. Sarpanch</td>
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
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(b)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(c)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1); font-weight: bold;">(d)</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">C</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">D</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">A</td>
                                <td style="padding: 8px 10px; border: 1px solid rgba(255,255,255,0.1);">B</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 15px;">
                        <b>Answer:</b> <b style="color: ${themeColor};">(c) 1-A, 2-C, 3-D, 4-B</b>
                    </p>
                </div>

                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 17px;">12. Consider the following two statements:</p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px; margin-left: 10px;">
                        A. In a federation the powers of the federal and provincial governments are clearly demarcated.
                        <br/>B. India is a federation because the powers of the Union and State Governments are specified in the Constitution and they have exclusive jurisdiction on their respective subjects.
                        <br/>C. Sri Lanka is a federation because the country is divided into provinces.
                        <br/>D. India is no longer a federation because some powers of the States have been devolved to the local government bodies.
                    </p>
                    <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 10px;">
                        <b>Options:</b>
                        <br/>(a) A, B and C &nbsp;&nbsp; (b) A, C and D &nbsp;&nbsp; (c) A and B only &nbsp;&nbsp; (d) B and C only
                        <br/><br/>
                        <b>Answer:</b> <b style="color: ${themeColor};">(c) A and B only</b> (Statement C is false because Sri Lanka has a unitary system. Statement D is false because decentralisation strengthens federalism, rather than destroying it).
                    </p>
                </div>
            </div>
    `,
  },
};
