import { ChapterContent } from "../types";

const themeColor = "#AB47BC"; // Matches getChapterGradient for c7-civ-1 (Purple)

export const c7Civ1: ChapterContent = {
  id: "c7-civ-1",
  number: 1,
  title: "On Equality",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Equality is a key feature of democracy and influences all aspects of its functioning. In a democratic country like India, every adult has the right to vote, and everyone is equal before the law. This chapter explores the concept of equality, its implementation, and the challenges that still exist.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. Universal Adult Franchise</h3>
            <p style="line-height: 1.6; font-size: 15px;">In India, all adults aged <b>18 and above</b> have the right to vote, irrespective of their wealth, religion, caste, or gender. This is based on the idea of **equality**—that every citizen's vote has the same value.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. Provisions in the Constitution</h3>
            <p style="line-height: 1.6; font-size: 15px;">The Indian Constitution recognizes every person as equal. Four main provisions guarantee this equality:</p>
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Equality Before Law:</b> Every person, from the President to a domestic worker, must obey the same laws.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">No Discrimination:</b> No citizen can be discriminated against on grounds of religion, race, caste, place of birth, or gender.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Equal Access:</b> All citizens have access to public places like playgrounds, hotels, shops, and wells.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Abolition of Untouchability:</b> The practice of untouchability has been legally banned.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. Government Initiatives</h3>
            <p style="line-height: 1.6; font-size: 15px;">The government implements equality through laws and programs. An outstanding example is the <b>Midday Meal Scheme</b>, first started in <b>Tamil Nadu</b> in 2001. This scheme provides hot cooked lunches to children in government elementary schools. It has helped increase student attendance, reduce caste prejudices, and improve children's nutrition.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">4. Issues of Equality in Other Democracies</h3>
            <p style="line-height: 1.6; font-size: 15px;">Equality is a struggle in other nations too. For example, in the United States, African-Americans faced severe inequality. In 1955, <b>Rosa Parks</b> refused to give up her seat on a bus to a white man, spark-starting the <b>Civil Rights Movement</b>. This led to the Civil Rights Act of 1964, which banned discrimination in the US based on race, religion, or national origin.</p>
        </div>
    `,
  htmlExercises: {
    "c7c1-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. In a democracy why is universal adult franchise important?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Universal Adult Franchise is important because:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>It gives every adult (18 years and above) the <b>right to vote</b>.</li>
                            <li>It treats all citizens <b>equally</b>, regardless of their wealth, caste, gender, or religion.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q2 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">2. Re-read the box on Article 15 and state two ways in which this Article addresses inequality?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Article 15 addresses inequality by:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Prohibiting discrimination:</b> The state cannot discriminate against any citizen on bases like religion, caste, gender, or birthplace.</li>
                            <li><b>Ensuring access:</b> Guarantees equal access to public places like shops, restaurants, roads, wells, and playgrounds.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q3 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">3. What do you understand by the term "all persons are equal before the law"? Why do you think it is important in a democracy?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0; list-style-type: none;">
                            <li><b>Meaning:</b> It means that every person—from a regular citizen to high-ranking officials like the President—must follow the same laws, and no one is above the law.</li>
                            <li style="margin-top: 10px;"><b>Importance:</b> It is important in a democracy because it prevents the abuse of power, ensures justice, and protects the dignity and rights of all individuals.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q4 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">4. According to the Rights of Persons with Disabilities Act, 2016... Do you think the law is being implemented in the boy's case? What needs to be done? How does this affect his dignity and safety?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0; list-style-type: none;">
                            <li><b>Implementation:</b> No, the law is not being implemented here. The boy is being carried down the stairs, which is unsafe and shows that the building lacks proper facilities.</li>
                            <li style="margin-top: 10px;"><b>Action needed:</b> A **ramp** and a **lift** should be installed in the building so he can move independently and safely in his wheelchair.</li>
                            <li style="margin-top: 10px;"><b>Impact on Dignity and Safety:</b>
                                <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left;">
                                    <li><i>Safety:</i> Carrying him down the stairs carries a high risk of slips or falls, threatening his physical safety.</li>
                                    <li><i>Dignity:</i> Being carried makes him feel helpless and dependent, which hurts his self-respect and dignity.</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter discusses the key concepts of equality, its constitutional guarantees, the midday meal scheme, and civil rights movements.",
  definitions: [
    {
      term: "Universal Adult Franchise",
      description:
        "The right of all adult citizens (18 and above) to vote, regardless of wealth, social standing, or religion.",
    },
    {
      term: "Dignity",
      description:
        "Refers to thinking of oneself and others as worthy of respect.",
    },
    {
      term: "Constitution",
      description:
        "A legal document containing the basic rules and laws for the citizens and government of a nation.",
    },
    {
      term: "Civil Rights Movement",
      description:
        "A movement in the United States in the 1950s/60s led by African-Americans to secure equal rights.",
    },
  ],
  keyPoints: [
    "Equality is the cornerstone of democracy, giving every citizen an equal voice through voting.",
    "Article 15 of the Indian Constitution prohibits discrimination based on religion, race, caste, sex, or birthplace.",
    "The Midday Meal Scheme was first introduced in Tamil Nadu in 2001 and later expanded nationwide.",
    "The Civil Rights Act of 1964 banned racial and religious discrimination in the United States.",
  ],
  formulas: [],
  crux: [
    "India is a democracy where every adult has the right to vote (Universal Adult Franchise).",
    "The Constitution guarantees equality through Article 15 and by abolishing untouchability.",
    "Government programs like the Midday Meal Scheme help address social and nutritional inequalities.",
    "Struggles for equality occur worldwide, as seen in the US Civil Rights Movement.",
  ],
  exercises: [
    {
      id: "c7c1-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc1-mcq-1",
      question: "What does 'Universal Adult Franchise' mean?",
      options: [
        "Right to play",
        "Right to vote",
        "Right to property",
        "Right to travel",
      ],
      correctAnswer: "b",
      explanation:
        "Universal Adult Franchise guarantees the right to vote to all adult citizens.",
    },
    {
      id: "cc1-mcq-2",
      question: "At what age do citizens get the right to vote in India?",
      options: ["15 years", "18 years", "21 years", "25 years"],
      correctAnswer: "b",
      explanation:
        "Every Indian citizen aged 18 or above has the right to vote in elections.",
    },
    {
      id: "cc1-mcq-3",
      question:
        "Which document contains the basic rules and regulations of our nation?",
      options: ["Textbook", "Constitution", "Newspaper", "Novel"],
      correctAnswer: "b",
      explanation:
        "The Constitution is the supreme law book that outlines the rules for governing the country.",
    },
    {
      id: "cc1-mcq-4",
      question: "Who was a key leader of the Civil Rights Movement in the USA?",
      options: [
        "Mahatma Gandhi",
        "Martin Luther King Jr.",
        "Abraham Lincoln",
        "Nelson Mandela",
      ],
      correctAnswer: "b",
      explanation:
        "Dr. Martin Luther King Jr. led the struggle for African-American equal rights in the United States.",
    },
    {
      id: "cc1-mcq-5",
      question:
        "Which article of the Indian Constitution prohibits discrimination against citizens?",
      options: ["Article 15", "Article 21", "Article 370", "Article 45"],
      correctAnswer: "a",
      explanation:
        "Article 15 forbids discrimination based on religion, race, caste, sex, or place of birth.",
    },
    {
      id: "cc1-mcq-6",
      question: "Rosa Parks, who sparked the Civil Rights Movement, was an:",
      options: [
        "Indian activist",
        "African-American woman",
        "British queen",
        "American doctor",
      ],
      correctAnswer: "b",
      explanation:
        "Rosa Parks was an African-American woman who refused to yield her bus seat, triggering historical protests.",
    },
    {
      id: "cc1-mcq-7",
      question:
        "What refers to thinking of oneself and others as worthy of respect?",
      options: ["Wealth", "Dignity", "Power", "Fame"],
      correctAnswer: "b",
      explanation:
        "Dignity means recognizing the self-worth and respect due to every human being.",
    },
    {
      id: "cc1-mcq-8",
      question:
        "In which year was the Civil Rights Act passed in the United States?",
      options: ["1947", "1964", "1950", "2000"],
      correctAnswer: "b",
      explanation:
        "The Civil Rights Act was enacted in 1964, outlawing racial discrimination in public places.",
    },
    {
      id: "cc1-mcq-9",
      question:
        "Which of the following is the core key feature of a democracy?",
      options: ["Kingship", "Equality", "Dictatorship", "Military rule"],
      correctAnswer: "b",
      explanation:
        "Equality is the fundamental principle and core feature of any democratic system.",
    },
    {
      id: "cc1-mcq-10",
      question:
        "The Midday Meal Scheme was first introduced in which Indian state?",
      options: ["Punjab", "Tamil Nadu", "Kerala", "Bihar"],
      correctAnswer: "b",
      explanation:
        "Tamil Nadu was the first state in India to implement the Midday Meal Scheme in government schools.",
    },
  ],
  summary: [
    "The chapter 'On Equality' discusses the fundamental democratic value of equality. It outlines the constitutional provisions in India (such as Article 15), the role of government schemes like the Midday Meal program in promoting social equality, and references historical global struggles like the Civil Rights Movement in America.",
  ],
};
