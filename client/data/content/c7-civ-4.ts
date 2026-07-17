import { ChapterContent } from "../types";

const themeColor = "#8E2DE2"; // Matches getChapterGradient for c7-civ-4 (Violet)

export const c7Civ4: ChapterContent = {
  id: "c7-civ-4",
  number: 4,
  title: "Growing up as Boys and Girls",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Being a boy or a girl is an important part of one's identity. The society we grow up in teaches us what kind of behavior is acceptable for girls and boys, what toys they should play with, and what roles they should prepare for as adults. This chapter examines these distinctions and how they lead to unequal value given to men and women.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. Growing up in Samoa (1920s)</h3>
            <p style="line-height: 1.6; font-size: 15px;">In the Samoan islands, children did not go to school. They learned household chores, looked after younger siblings, and learned outdoor skills like **fishing** and planting coconuts. Once boys were around nine years old, they joined older boys in learning outdoor jobs, showing a different way of growing up.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. Society's Toys and Distinctions</h3>
            <p style="line-height: 1.6; font-size: 15px;">Most societies make clear distinctions between boys and girls. This begins from a young age through the toys we give them: boys get **toy cars and guns**, representing adventure and toughness, while girls get **dolls and kitchen sets**, representing caregiving and domestic roles. This tells them they will have different futures as men and women.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. Valuing Housework</h3>
            <p style="line-height: 1.6; font-size: 15px;">The work women do inside the home—cooking, cleaning, washing, and caregiving—is often **devalued** (given less value). It is assumed to be natural work that does not deserve pay. In reality, housework is **invisible, unpaid, physically demanding, and highly time-consuming**.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">4. Domestic Workers</h3>
            <p style="line-height: 1.6; font-size: 15px;">Many homes employ domestic workers to sweep, wash clothes, cook, or look after children. Most domestic workers are women. Despite doing heavy physical labor, they are often paid low wages, and their work is not given proper respect or dignity.</p>
        </div>
    `,
  htmlExercises: {
    "c7c4-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Are the statements given alongside true or false? Support your answer with an example.</h3>
                    <p style="color: #E0E0E0; line-height: 1.6;">
                        <b style="color: ${themeColor};">(a) All societies do not think similarly about the roles that boys and girls play.</b><br/>
                        <b>Answer: True.</b> In Samoa in the 1920s, children did not go to school and did outdoor fishing work, while in Indian urban societies, children are expected to focus heavily on formal schooling.<br/><br/>
                        
                        <b style="color: ${themeColor};">(b) Our society does not make distinctions between boys and girls when they are growing up.</b><br/>
                        <b>Answer: False.</b> Distinctions start early. Boys are given toy cars to play with, while girls are given dolls, teaching them separate future roles.<br/><br/>
                        
                        <b style="color: ${themeColor};">(c) Women who stay at home do not work.</b><br/>
                        <b>Answer: False.</b> Household work like cooking, cleaning, and washing requires a lot of effort and runs from morning till night, even though it is unpaid.<br/><br/>
                        
                        <b style="color: ${themeColor};">(d) The work that women do is less valued than that of men.</b><br/>
                        <b>Answer: True.</b> Society attaches high value and respect to office work that earns money, while unpaid household chores are often devalued.
                    </p>
                </div>

                <!-- Q2 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">2. Explain in your own words the terms: 'invisible', 'physically demanding', and 'time consuming' with examples.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Invisible:</b> Work that goes unnoticed because it is done quietly inside the house. <br/><i>Example:</i> Dusting, organizing shelves, and maintaining the house daily.</li>
                            <li style="margin-bottom: 8px;"><b>Physically Demanding:</b> Work that requires hard physical labor, lifting, and stamina. <br/><i>Example:</i> Carrying heavy water pots, sweeping large areas, or hand-washing heavy clothes.</li>
                            <li><b>Time Consuming:</b> Work that takes up a large portion of the day. <br/><i>Example:</i> Preparing meals, cooking, and washing utensils multiple times a day.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q3 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">3. List the toys typically played by boys and girls. Why is there a difference? Does it relate to adult roles?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Boys' Toys:</b> Cars, guns, bat-balls, action figures.</li>
                            <li style="margin-bottom: 8px;"><b>Girls' Toys:</b> Dolls, kitchen sets, teddy bears, makeup toys.</li>
                            <li style="margin-bottom: 8px;"><b>Reason for difference:</b> Society uses toys to tell children how boys and girls should behave differently.</li>
                            <li><b>Relation to adult roles:</b> Yes. It prepares boys to go out and earn money, and girls to become homemakers and mothers.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q4 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">4. Domestic Help Story</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Summary Story:</b><br/>
                        <b>Shanti</b> works as a domestic helper in a nearby apartment complex. She lives in a small slum dwelling. Her day starts at 5:00 AM. She works for 6 hours across different houses, sweeping floors, washing clothes, and cleaning dishes. For this heavy labor, she is paid only ₹3,000 a month. Her employer often speaks to her rudely, showing how domestic work is devalued in our society.
                    </p>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter examines gender roles, social conditioning through toys, Samoan child growth, and the valuation of housework.",
  definitions: [
    {
      term: "Devaluation",
      description:
        "When society gives less value, respect, or status to someone's work or contribution.",
    },
    {
      term: "Double Burden",
      description:
        "The dual workload of women who work both outside the home (for wages) and inside the home (unpaid housework).",
    },
    {
      term: "Care-giving",
      description:
        "Tasks like looking after children, elderly, or sick family members.",
    },
  ],
  keyPoints: [
    "Gender roles are not natural; they are shaped and taught by the society we grow up in.",
    "In Samoa in the 1920s, children enjoyed outdoor activities and didn't go to school.",
    "Household work involves a high degree of physical labor but is unpaid and devalued.",
    "Government is setting up crèches to enable women to work outside without neglecting childcare.",
  ],
  formulas: [],
  crux: [
    "Boys and girls are raised with different toys to prepare them for different adult roles.",
    "Women's housework is invisible, unpaid, physically demanding, and time-consuming.",
    "Domestic workers undergo hard labor for low wages and low social dignity.",
    "Government intervention is needed to establish gender equality in domestic and public spheres.",
  ],
  exercises: [
    {
      id: "c7c4-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc4-mcq-1",
      question: "In Samoan islands in the 1920s, children did NOT go to:",
      options: ["Forests", "Schools", "Beaches", "Markets"],
      correctAnswer: "b",
      explanation:
        "Samoan children learned practical life and outdoor skills at home instead of attending formal schools.",
    },
    {
      id: "cc4-mcq-2",
      question:
        "What was the most important activity for Samoan boys as they grew older?",
      options: [
        "Studying science",
        "Fishing and coconut planting",
        "Playing computer games",
        "Running shops",
      ],
      correctAnswer: "b",
      explanation:
        "Fishing was a vital skill in the island nation, which boys learned as they grew up.",
    },
    {
      id: "cc4-mcq-3",
      question:
        "Our society gives different toys to boys and girls to teach them:",
      options: [
        "How to paint",
        "Their future adult roles",
        "How to compute",
        "Only music",
      ],
      correctAnswer: "b",
      explanation:
        "Toys serve as a medium to condition children for separate gender roles in adult life.",
    },
    {
      id: "cc4-mcq-4",
      question:
        "Girls are traditionally given dolls to play with, while boys are given:",
      options: ["Sewing kits", "Toy cars", "Kitchen toys", "Bangles"],
      correctAnswer: "b",
      explanation:
        "Dolls promote caregiving roles, while cars represent mechanical and outdoor tasks.",
    },
    {
      id: "cc4-mcq-5",
      question: "Household work done by women is mostly:",
      options: [
        "Highly paid",
        "Invisible and unpaid",
        "Managed by machines",
        "Very easy",
      ],
      correctAnswer: "b",
      explanation:
        "Housework goes unnoticed and receives no financial compensation in the family.",
    },
    {
      id: "cc4-mcq-6",
      question:
        "Carrying heavy loads of water or firewood in villages is an example of housework being:",
      options: [
        "Extremely fast",
        "Physically demanding",
        "Unnecessary",
        "Light work",
      ],
      correctAnswer: "b",
      explanation:
        "Housework involves heavy physical labor like carrying weight and standing for long hours.",
    },
    {
      id: "cc4-mcq-7",
      question:
        "Housework that takes up a major portion of a woman's day is called:",
      options: ["Cheap", "Time-consuming", "Boring", "Fast-paced"],
      correctAnswer: "b",
      explanation:
        "Cooking, cleaning, and washing take up hours of daily labor, making it time-consuming.",
    },
    {
      id: "cc4-mcq-8",
      question:
        "In India, the majority of domestic workers employed in homes are:",
      options: ["Men", "Women", "Foreigners", "Engineers"],
      correctAnswer: "b",
      explanation:
        "Most sweeping, washing, and cooking help in homes is done by female domestic workers.",
    },
    {
      id: "cc4-mcq-9",
      question:
        "What refers to giving due respect and equal value to someone's work?",
      options: ["Devaluation", "Valuing", "Ignoring", "Taxing"],
      correctAnswer: "b",
      explanation:
        "Valuing work means acknowledging its worth and rewarding it with respect.",
    },
    {
      id: "cc4-mcq-10",
      question: "The government has set up Anganwadis or crèches to help:",
      options: [
        "Old people sleep",
        "Working mothers look after children",
        "Children buy candy",
        "Police officers train",
      ],
      correctAnswer: "b",
      explanation:
        "Crèches help mothers take up employment outside the home by providing child care.",
    },
  ],
  summary: [
    "The chapter 'Growing up as Boys and Girls' explores how gender socialization shapes child growth in different parts of the world, describes the invisible physical labor involved in housework, and discusses the need for laws (like crèche mandates) to support working women.",
  ],
};
