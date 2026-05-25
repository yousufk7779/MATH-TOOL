import { ChapterContent } from "../types";

const themeColor = "#8E2DE2"; // Chapter 4 theme (Violet)

export const c7Civ4: ChapterContent = {
  id: "c7-civ-4",
  number: 4,
  title: "Growing up as Boys and Girls",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Being a boy or a girl is an important part of one’s identity. The society we grow up in teaches us what kind of behaviour is acceptable for girls and boys, what they can and cannot do. These roles often lead to inequalities between men and women in society.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Growing up in Samoa</h3>
            <p>In the 1920s, children in the Samoan Islands did not go to school. They learned many things, such as how to take care of children or do household work, from older children and from adults. Fishing was a very important activity on the islands.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Valuing Housework</h3>
            <p>Women’s work is often seen as something that comes naturally to them and therefore, it does not have to be paid for. Because of this, society devalues it. Household work involves many different tasks like cooking, cleaning, washing clothes, and taking care of children and the elderly.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Lives of Domestic Workers</h3>
            <p>Many women work as domestic helpers in urban areas. Their day usually begins at five in the morning and ends at twelve at night. Despite the hard work they do, their employers often do not show them much respect.</p>
        </div>
    `,
  htmlExercises: {
    "c7c4-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. Are the following statements true or false?</p>
                    
                    <div style="margin-bottom: 15px; margin-left: 10px;">
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">(a) All societies think similarly about roles.</b> (False)</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">(b) Our society makes distinctions.</b> (True)</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">(c) Women at home do not work.</b> (False)</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">(d) Women's work is less valued.</b> (True)</p>
                    </div>
                </div>

                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. Explain the terms for housework:</p>
                    <div style="margin-bottom: 12px; margin-left: 10px;">
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Invisible:</b> Work not noticed (e.g., cleaning).</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Physically Demanding:</b> Work requiring heavy effort.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Time Consuming:</b> Work taking up many hours.</p>
                    </div>
                </div>

                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. Why are toys for boys and girls different?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Toys suggest future roles. <b>Boys</b> get cars, and <b>girls</b> get dolls.</p>
                </div>

                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q4. Write a small story about a domestic help.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Meena works for 12 hours, cleans houses, but gets low pay and little respect.</p>
                </div>
            </div>
        `,
  },
  introduction:
    "Society teaches us what behaviour is acceptable for girls and boys.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "c7c4-mcq-1",
      question:
        "The Samoa Islands are part of a large group of small islands in which ocean?",
      options: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c4-mcq-2",
      question: "In which year was the study of Samoan society conducted?",
      options: ["1910s", "1920s", "1950s", "1980s"],
      correctAnswer: "b",
    },
    {
      id: "c7c4-mcq-3",
      question: "What does the term 'Double Burden' refer to?",
      options: [
        "Carrying two bags",
        "Working both inside and outside the home",
        "Having two jobs",
        "Studying and playing",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c4-mcq-4",
      question: "Most of the housework done by women is:",
      options: [
        "Easy and fast",
        "Invisible and unpaid",
        "Paid and respected",
        "Visible and simple",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c4-mcq-5",
      question: "Domestic workers usually start their day at:",
      options: ["10 AM", "5 AM", "8 AM", "Noon"],
      correctAnswer: "b",
    },
    {
      id: "c7c4-mcq-6",
      question: "Anganwadis in villages are provided for:",
      options: ["Farming", "Child care", "Fishing", "Sports"],
      correctAnswer: "b",
    },
    {
      id: "c7c4-mcq-7",
      question:
        "Who is primarily responsible for 'Care-giving' in most societies?",
      options: ["Men", "Children", "Women", "Government"],
      correctAnswer: "c",
    },
    {
      id: "c7c4-mcq-8",
      question: "Social roles of men and women are often determined by:",
      options: ["Biology", "Society", "Weather", "Luck"],
      correctAnswer: "b",
    },
    {
      id: "c7c4-mcq-9",
      question: "Equality is a key principle of the Indian ____.",
      options: ["Cinema", "History", "Constitution", "Geography"],
      correctAnswer: "c",
    },
    {
      id: "c7c4-mcq-10",
      question: "In Samoan society, what was a very important activity?",
      options: ["Cricket", "Mining", "Fishing", "Information Technology"],
      correctAnswer: "c",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "c7c4-ex-all",
      name: "Exercise",
      questions: [],
    },
  ],
  examples: [],
};
