import { ChapterContent } from "../types";

const themeColor = "#FF00FF"; // Matches getChapterGradient for c7-civ-5 (Magenta)

export const c7Civ5: ChapterContent = {
  id: "c7-civ-5",
  number: 5,
  title: "Women Change the World",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Through education and collective struggles, women have broken stereotypes and fought for their rights. This chapter tells the stories of pioneering women who learned to read and write against all odds, explains the reasons why girls drop out of school, and details the methods of the Women's Movement.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. Breaking Stereotypes</h3>
            <p style="line-height: 1.6; font-size: 15px;">Stereotypes are fixed ideas that certain jobs are only for men or women. For example, people believed women cannot be engine drivers. However, 27-year-old <b>Laxmi Lakra</b>, from a poor tribal family in Jharkhand, broke this stereotype by becoming the first female engine driver for Northern Railways.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. Pioneers of Education</h3>
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Pandita Ramabai:</b> A champion of women's education who could read and write Sanskrit (a language forbidden to women back then). She set up a Mission in Pune where widows and poor women were taught to read, write, and gain vocational skills.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Rashsundari Devi:</b> A housewife from Bengal who secretly learned to read and write in the flickering light of candles. She wrote her autobiography <b>'Amar Jiban'</b>, the first full-length autobiography written by an Indian woman.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Rokeya Sakhawat Hossain:</b> Learned English and Bengali with support from her brother and husband. She wrote a famous feminist story **'Sultana's Dream'** in 1905, describing a utopian land called 'Ladyland' where women ran the country and flew air cars.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. Schooling and Education Today</h3>
            <p style="line-height: 1.6; font-size: 15px;">While more children attend school today, massive inequalities remain. Girls from Dalit, Adivasi, and Muslim communities drop out of school in large numbers due to a lack of proper schools, long distances, cost of books/uniforms, and discrimination.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">4. The Women's Movement</h3>
            <p style="line-height: 1.6; font-size: 15px;">Women and men have struggled collectively to fight discrimination. The methods used to raise issues include:</p>
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 5px;"><b>Campaigning:</b> Fighting violence and securing legal acts (like the Domestic Violence Act of 2006).</li>
                <li style="margin-bottom: 5px;"><b>Raising Awareness:</b> Performing street plays, songs, and meetings.</li>
                <li style="margin-bottom: 5px;"><b>Protesting:</b> Holding public rallies and demonstrations against violations.</li>
                <li style="margin-bottom: 5px;"><b>Showing Solidarity:</b> Celebrating women's day on March 8 and supporting each other.</li>
            </ul>
        </div>
    `,
  htmlExercises: {
    "c7c5-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. How do you think stereotypes, about what women can or cannot do, affect women's right to equality?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Stereotypes harm equality because:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>People wrongly believe that women cannot do technical tasks like driving trains, piloting planes, or doing scientific research.</li>
                            <li>Families often push girls into early marriage instead of supporting their higher education.</li>
                            <li>Women are paid less or ignored for leadership roles based on gender bias.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q2 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">2. List one reason why learning the alphabet was so important to women like Rashsundari Devi, Ramabai and Rokeya.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Learning the alphabet was important because:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>It gave them the power to read and write independently at a time when education was forbidden for women.</li>
                            <li>It enabled them to write books, document their struggles, and open schools to educate other girls.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q3 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">3. "Poor girls drop out of school because they are not interested in getting an education." Explain why this statement is not true.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> This statement is <b>not true</b> due to these actual reasons:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>No Local Schools:</b> Many poor and rural areas do not have proper schools or teachers.</li>
                            <li><b>Lack of Transport:</b> Distance makes it unsafe for girls to travel without school buses or vans.</li>
                            <li><b>High Cost:</b> Poor parents cannot afford books, uniforms, and fees, so they prefer educating boys over girls.</li>
                            <li><b>Discrimination:</b> Dalit, Adivasi, and Muslim children often face bias from teachers or classmates.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q4 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">4. Describe two methods of struggle used by the women's movement. Which method would you organize against stereotypes and why?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b><br/>
                        <b>Two methods of struggle:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Campaigning:</b> Working in an organized manner to pass protective laws (like the Domestic Violence Act).</li>
                            <li><b>Raising Awareness:</b> Educating the public through songs, street plays, and pamphlets.</li>
                        </ul>
                        <br/>
                        <b>My chosen method:</b> I would choose **Raising Awareness** through street plays and school campaigns.<br/>
                        <b>Reason:</b> Because street plays are peaceful, highly engaging for kids and families, and help correct people's mindsets from the grassroots level.
                    </p>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter covers women's rights, historical educational struggles, modern educational drop-out statistics, and women's movement strategies.",
  definitions: [
    {
      term: "Stereotype",
      description:
        "A fixed, oversimplified image or belief about a particular type of person or group.",
    },
    {
      term: "Autobiography",
      description:
        "A written account of a person's life written by that person themselves.",
    },
    {
      term: "Women's Movement",
      description:
        "The collective efforts and struggles of women globally to gain equal rights, education, and security.",
    },
  ],
  keyPoints: [
    "Laxmi Lakra became the first female engine driver for Northern Railways.",
    "Rashsundari Devi secretly learned to read and wrote her autobiography 'Amar Jiban'.",
    "Rokeya Sakhawat Hossain wrote 'Sultana's Dream', a story of female empowerment and technological freedom.",
    "Dalit, Adivasi, and Muslim girls have the highest school dropout rates in India.",
  ],
  formulas: [],
  crux: [
    "Stereotypes restrict women from entering technical, leadership, or academic fields.",
    "Pioneering women overcame major social bans to gain literacy and speak for others.",
    "Dropouts are caused by systemic poverty, lack of school infrastructure, and gender bias.",
    "The Women's movement campaigns, raises awareness, protests, and builds global solidarity.",
  ],
  exercises: [
    {
      id: "c7c5-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc5-mcq-1",
      question: "What is a stereotype?",
      options: [
        "A fixed, narrow belief about a group of people",
        "A type of digital camera",
        "A style of classical music",
        "A sport played by children",
      ],
      correctAnswer: "a",
      explanation:
        "A stereotype is a rigid, oversimplified categorization of people based on gender, race, etc.",
    },
    {
      id: "cc5-mcq-2",
      question:
        "Who became the first woman engine driver for Northern Railways?",
      options: [
        "Rosa Parks",
        "Laxmi Lakra",
        "Pandita Ramabai",
        "Rashsundari Devi",
      ],
      correctAnswer: "b",
      explanation:
        "Laxmi Lakra broke gender stereotypes by becoming the first female train driver for Northern Railways.",
    },
    {
      id: "cc5-mcq-3",
      question:
        "Ramabai was given the title 'Pandita' because she could read and write:",
      options: ["English", "Sanskrit", "Hindi", "Urdu"],
      correctAnswer: "b",
      explanation:
        "She was awarded the title Pandita for her rare mastery over Sanskrit literature.",
    },
    {
      id: "cc5-mcq-4",
      question: "Who wrote the famous Bengali autobiography 'Amar Jiban'?",
      options: [
        "Rokeya Sakhawat Hossain",
        "Rashsundari Devi",
        "Pandita Ramabai",
        "Laxmi Lakra",
      ],
      correctAnswer: "b",
      explanation:
        "Rashsundari Devi secretly educated herself and wrote 'Amar Jiban', the first full-length female autobiography in India.",
    },
    {
      id: "cc5-mcq-5",
      question:
        "Rokeya Sakhawat Hossain wrote a remarkable feminist story in English called:",
      options: [
        "Amar Jiban",
        "Sultana's Dream",
        "My Childhood Stories",
        "Wings of Fire",
      ],
      correctAnswer: "b",
      explanation:
        "She wrote 'Sultana's Dream' in 1905, visualizing a world run by women.",
    },
    {
      id: "cc5-mcq-6",
      question:
        "In the story 'Sultana's Dream', women had the freedom to invent and fly:",
      options: ["Toy planes", "Air cars", "Gliders", "Helium balloons"],
      correctAnswer: "b",
      explanation:
        "The story features technological innovations managed by women, including flying air cars.",
    },
    {
      id: "cc5-mcq-7",
      question:
        "The primary reason why poor rural girls drop out of school is:",
      options: [
        "They are not interested in books",
        "Lack of nearby schools and safe transport",
        "They want to watch television",
        "Lack of playgrounds",
      ],
      correctAnswer: "b",
      explanation:
        "Poverty, distance, and lack of secure transportation force poor girls out of school.",
    },
    {
      id: "cc5-mcq-8",
      question:
        "The collective effort of women to demand justice, equality, and safety is the:",
      options: [
        "Women's Movement",
        "Trade union",
        "Political coalition",
        "Art guild",
      ],
      correctAnswer: "a",
      explanation:
        "The Women's Movement represents global collective struggles for female rights.",
    },
    {
      id: "cc5-mcq-9",
      question:
        "Which method is used by the women's movement to draw public attention to injustices?",
      options: [
        "Staying at home",
        "Protests and rallies",
        "Online shopping",
        "Cooking together",
      ],
      correctAnswer: "b",
      explanation:
        "Public rallies, protests, and street demonstrations help highlight social violations.",
    },
    {
      id: "cc5-mcq-10",
      question:
        "On which date is International Women's Day celebrated worldwide?",
      options: ["5th September", "8th March", "14th November", "26th January"],
      correctAnswer: "b",
      explanation:
        "International Women's Day is observed globally on March 8 to celebrate achievements and fight for rights.",
    },
  ],
  summary: [
    "The chapter 'Women Change the World' highlights women's struggle for education and equality. It features stories of Laxmi Lakra, Pandita Ramabai, and Rashsundari Devi, explains dropout realities, and details the campaigning, protesting, and awareness methods used by the Women's Movement.",
  ],
};
