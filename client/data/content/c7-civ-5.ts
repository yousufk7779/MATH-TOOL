import { ChapterContent } from "../types";

const themeColor = "#FF00FF"; // Chapter 5 theme (Magenta)

export const c7Civ5: ChapterContent = {
  id: "c7-civ-5",
  number: 5,
  title: "Women Change the World",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>In this chapter, we see how some occupations are seen to be more suitable for men than for women. We also learn about how women struggled for equality and how education was, and is, a key to change.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Breaking Stereotypes</h3>
            <p>Society often believes that women are good at only certain jobs (like nursing or teaching), while men are suited for technical jobs (like engineering). Many women have broken these stereotypes, like <b>Laxmi Lakra</b>, the first woman engine driver for Northern Railways.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Learning for Change</h3>
            <p>In the past, the skill of reading and writing was known to only a few. Women were often not allowed to learn. However, brave women like <b>Rashsundari Devi</b>, <b>Pandita Ramabai</b>, and <b>Rokeya Sakhawat Hossain</b> struggled against all odds to get an education and help other women.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Women’s Movement</h3>
            <p>Women and girls now have the right to study and go to school. This change has happened because of the 'Women’s Movement' which involves campaigning, raising awareness, protesting, and showing solidarity.</p>
        </div>
    `,
  htmlExercises: {
    "c7c5-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. How do stereotypes affect women’s right to equality?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Stereotypes limit opportunities by suggesting women are only good for certain jobs like nursing.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. Why was learning the alphabet so important to women like Rashsundari Devi?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> It gave them <b>Literacy</b> to express their thoughts and fight social injustice through writing.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. Why do poor girls drop out of school?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Due to <b>poverty</b>, lack of facilities, and discrimination, not because they aren't interested.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q4. Describe two methods of struggle used by the women’s movement.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> 
                        <br>1. <b>Campaigning:</b> Fighting for new laws.
                        <br>2. <b>Raising Awareness:</b> Using plays and songs.</p>
                    </div>
                </div>
            </div>
        `,
  },
  introduction:
    "Women have struggled for equality and education is a key to change.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "c7c5-mcq-1",
      question: "Who was the first Indian woman to write an autobiography?",
      options: [
        "Pandita Ramabai",
        "Rashsundari Devi",
        "Rokeya Sakhawat",
        "Laxmi Lakra",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c5-mcq-2",
      question: "What was the name of Rashsundari Devi's autobiography?",
      options: ["My Life", "Amar Jiban", "Sultana's Dream", "Women's Struggle"],
      correctAnswer: "b",
    },
    {
      id: "c7c5-mcq-3",
      question:
        "Who was given the title 'Pandita' because she could read and write Sanskrit?",
      options: ["Rashsundari Devi", "Ramabai", "Rokeya", "Sarojini Naidu"],
      correctAnswer: "b",
    },
    {
      id: "c7c5-mcq-4",
      question: "Census is held every ____ years in India.",
      options: ["5", "10", "15", "20"],
      correctAnswer: "b",
    },
    {
      id: "c7c5-mcq-5",
      question:
        "What is the main reason for high dropout rates among Dalit and Adivasi girls?",
      options: [
        "Lack of interest",
        "Poverty and discrimination",
        "They want to work",
        "Marriage",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c5-mcq-6",
      question: "Who was the first woman engine driver for Northern Railways?",
      options: [
        "Laxmi Lakra",
        "Kiran Bedi",
        "Pratibha Patil",
        "Sunita Williams",
      ],
      correctAnswer: "a",
    },
    {
      id: "c7c5-mcq-7",
      question: "International Women's Day is celebrated on:",
      options: ["January 1", "March 8", "August 15", "October 2"],
      correctAnswer: "b",
    },
    {
      id: "c7c5-mcq-8",
      question: "Who wrote the story 'Sultana's Dream'?",
      options: [
        "Rashsundari Devi",
        "Rokeya Sakhawat Hossain",
        "Ramabai",
        "Laxmi",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c5-mcq-9",
      question: "Campaigns led to a new law in 2006 to protect women from:",
      options: ["Road accidents", "Domestic violence", "Unemployment", "Taxes"],
      correctAnswer: "b",
    },
    {
      id: "c7c5-mcq-10",
      question:
        "The method of showing support to other women and their cause is called:",
      options: ["Campaigning", "Protesting", "Solidarity", "Awareness"],
      correctAnswer: "c",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "c7c5-ex-all",
      name: "Exercise",
      questions: [],
    },
  ],
  examples: [],
};
