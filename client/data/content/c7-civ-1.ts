import { ChapterContent } from "../types";

const themeColor = "#AB47BC"; // Chapter 1 theme (Purple)

export const c7Civ1: ChapterContent = {
  id: "c7-civ-1",
  number: 1,
  title: "On Equality",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>India is a democracy. The key elements of a democratic government include people’s participation, the resolution of conflict, and equality and justice. Equality is a key feature of democracy and influences all aspects of its functioning.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Universal Adult Franchise</h3>
            <p>In a democratic country like India, all adults irrespective of what religion they belong to, how much education they have had, what caste they are, or whether they are rich or poor are allowed to vote. This is called Universal Adult Franchise and is an essential aspect of all democracies.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Dignity and Equality</h3>
            <p>Every person deserves to be treated with dignity. However, inequality exists in various forms like caste-based discrimination, religious discrimination, and economic inequality. The Constitution of India recognizes every person as equal before the law.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Government Initiatives</h3>
            <p>The government tries to implement equality through laws and through government programs/schemes. One such example is the <b>Mid-day Meal Scheme</b>, first introduced in Tamil Nadu, which helps in increasing school attendance and reducing caste prejudices.</p>
        </div>
    `,
  htmlExercises: {
    "c7c1-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. In a democracy why is Universal Adult Franchise important?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> It is based on <b>equality</b>. It gives every adult citizen one vote, regardless of wealth, caste, or religion.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. State two ways in which Article 15 addresses inequality?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> 
                        <br>1. It stops the State from discriminating.
                        <br>2. It ensures equal access to public places.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. How was Omprakash Valmiki’s experience similar to that of the Ansaris?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Both were treated unequally. Omprakash because of <b>caste</b>, and the Ansaris because of <b>religion</b>.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q4. What do you understand by the term “all persons are equal before the law”?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Every citizen, from the President to a worker, must obey the same laws.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q5. Rights of Persons with Disabilities Act, 2016 Analysis:</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The law is not followed if there is no ramp. A <b>ramp</b> should be built for accessibility.</p>
                    </div>
                </div>
            </div>
        `,
  },
  introduction:
    "Equality is a key feature of democracy and influences all aspects of its functioning.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "c7c1-mcq-1",
      question: "Who is the author of the book 'Joothan'?",
      options: ["B.R. Ambedkar", "Omprakash Valmiki", "Kanta", "Ansari"],
      correctAnswer: "b",
    },
    {
      id: "c7c1-mcq-2",
      question:
        "Which Article of the Indian Constitution prohibits discrimination?",
      options: ["Article 14", "Article 15", "Article 21", "Article 32"],
      correctAnswer: "b",
    },
    {
      id: "c7c1-mcq-3",
      question: "What is the meaning of Universal Adult Franchise?",
      options: [
        "Right to work",
        "Right to vote for all adults",
        "Right to education",
        "Right to property",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7c1-mcq-4",
      question: "Rosa Parks was an _____ woman.",
      options: ["Indian", "African-American", "British", "French"],
      correctAnswer: "b",
    },
    {
      id: "c7c1-mcq-5",
      question: "The Civil Rights Act was passed in the USA in which year?",
      options: ["1950", "1960", "1964", "1970"],
      correctAnswer: "c",
    },
    {
      id: "c7c1-mcq-6",
      question:
        "Which state in India first introduced the Mid-day Meal Scheme?",
      options: ["Kerala", "Tamil Nadu", "Gujarat", "Punjab"],
      correctAnswer: "b",
    },
    {
      id: "c7c1-mcq-7",
      question: "Equality is a key feature of which form of government?",
      options: ["Monarchy", "Dictatorship", "Democracy", "Military rule"],
      correctAnswer: "c",
    },
    {
      id: "c7c1-mcq-8",
      question:
        "The 'Rights of Persons with Disabilities Act' was passed in India in:",
      options: ["2014", "2015", "2016", "2018"],
      correctAnswer: "c",
    },
    {
      id: "c7c1-mcq-9",
      question: "The term 'Dalit' literally means:",
      options: ["Lower caste", "Broken", "Untouchable", "Strong"],
      correctAnswer: "b",
    },
    {
      id: "c7c1-mcq-10",
      question: "According to the Constitution, every person is:",
      options: ["Unequal", "Equal", "Superior", "Inferior"],
      correctAnswer: "b",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "c7c1-ex-all",
      name: "Exercise",
      questions: [],
    },
  ],
  examples: [],
};
