import { ChapterHTMLs } from "./chapterHTMLs";
import {
  Definition,
  Formula,
  Question,
  Exercise,
  MCQ,
  Example,
  Theorem,
  ChapterContent,
} from "./types";

export type {
  Definition,
  Formula,
  Question,
  Exercise,
  MCQ,
  Example,
  Theorem,
  ChapterContent,
};

import { lazyChapterLoaders } from "./lazyChapterLoaders";

const rawChapterContents: Record<string, ChapterContent> = {};

export const chapterContents: Record<string, ChapterContent> = new Proxy(rawChapterContents, {
  get(target, prop) {
    if (typeof prop === "string") {
      let item = target[prop];
      if (!item?._isLoaded && lazyChapterLoaders[prop]) {
        try {
          const loaded = lazyChapterLoaders[prop]();
          if (loaded) {
            if (loaded.id && loaded.exercises) {
              // Full chapter replacement (Math, Science, SST)
              item = { ...loaded, _isLoaded: true };
              target[prop] = item;
            } else {
              // Content override (Physics, Chemistry, Biology, Zoology, Botany, English, Arts)
              if (!item) {
                item = createEmptyContent(prop, 1, prop);
              }
              if (loaded.htmlOverview) item.htmlOverview = loaded.htmlOverview;
              if (loaded.htmlExercises) item.htmlExercises = loaded.htmlExercises;
              if (loaded.mcqs) item.mcqs = loaded.mcqs;
              if (loaded.exercises) item.exercises = loaded.exercises;
              item.isHtmlView = true;
              item._isLoaded = true;
              target[prop] = item;
            }
          }
        } catch (err) {
          console.warn("[LazyLoader] Error loading " + prop + ":", err);
        }
      }
      return target[prop];
    }
    return (target as any)[prop];
  },
  set(target, prop, value) {
    if (typeof prop === "string") {
      target[prop] = value;
    }
    return true;
  },
  has(target, prop) {
    return prop in target || (typeof prop === "string" && prop in lazyChapterLoaders);
  }
});

const createEmptyContent = (
  id: string,
  num: number,
  title: string,
): ChapterContent => ({
  id,
  number: num,
  title,
  introduction: "",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [],
  examples: [],
  mcqs: [],
  summary: [],
});

const emptyChapters: string[] = [];
[9, 8, 7].forEach((c) => {
  for (let i = 1; i <= 14; i++) {
    emptyChapters.push(`c${c}-math-${i}`);
  }
  for (let i = 1; i <= 3; i++) {
    emptyChapters.push(`c${c}-sci-phy-${i}`);
    emptyChapters.push(`c${c}-sci-chem-${i}`);
    emptyChapters.push(`c${c}-sci-bio-${i}`);
  }
});

emptyChapters.forEach((id) => {
  if (!chapterContents[id]) {
    const num = parseInt(id.split("-").pop() || "1");
    chapterContents[id] = createEmptyContent(id, num, `Chapter ${num}`);
  }
});

// Create empty WebView-enabled chapters with native MCQs for Class 9 Social Science
const sstC9Categories = ["his", "geo", "civ", "eco"];
const sstC9CategoryNames: Record<string, string> = {
  his: "History",
  geo: "Geography",
  civ: "Political Science",
  eco: "Economics",
};

const class9HistoryTitles = [
  "The French Revolution",
  "Socialism in Europe and the Russian Revolution",
  "Nazism and the Rise of Hitler",
  "Forest Society and Colonialism",
  "Pastoralists in the Modern World",
  "The Integration of Princely States: A case study of Jammu and Kashmir",
];

const class9CivicsTitles = [
  "What is Democracy? Why Democracy?",
  "Constitutional Design",
  "Electoral Politics",
  "Working of Institutions",
  "Democratic Rights",
  "Electoral Politics in the Erstwhile State of Jammu & Kashmir",
];

const class9HistoryMCQs: Record<number, MCQ[]> = {
  1: [
    {
      id: "sst-his-c9-1-mcq-1",
      question: "The French Revolution broke out on:",
      options: [
        "14 July 1789",
        "14 June 1789",
        "14 August 1789",
        "14 January 1789",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-1-mcq-2",
      question: "Who was the ruler of France during the French Revolution?",
      options: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XVIII"],
      correctAnswer: "c",
    },
    {
      id: "sst-his-c9-1-mcq-3",
      question: "The fortress-prison stormed by the people of Paris was the:",
      options: ["Bastille", "Versailles", "Tuileries", "Louvre"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-1-mcq-4",
      question: "The Third Estate comprised of:",
      options: ["Clergy", "Nobles", "Peasants and Businessmen", "Monarchy"],
      correctAnswer: "c",
    },
    {
      id: "sst-his-c9-1-mcq-5",
      question: "The national colors of France are:",
      options: [
        "Blue-White-Red",
        "Red-Green-Blue",
        "Yellow-White-Red",
        "Black-Red-Yellow",
      ],
      correctAnswer: "a",
    },
  ],
  2: [
    {
      id: "sst-his-c9-2-mcq-1",
      question: "Who led the Bolshevik Party during the Russian Revolution?",
      options: ["Vladimir Lenin", "Karl Marx", "Leon Trotsky", "Joseph Stalin"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-2-mcq-2",
      question: "The Russian Parliament is known as the:",
      options: ["Duma", "Reichstag", "Congress", "Parliament"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-2-mcq-3",
      question: "In which year did the Russian Revolution take place?",
      options: ["1905", "1917", "1914", "1921"],
      correctAnswer: "b",
    },
    {
      id: "sst-his-c9-2-mcq-4",
      question: "The Bolsheviks were a group of:",
      options: ["Radicals", "Liberals", "Conservatives", "Moderates"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-2-mcq-5",
      question: "What was the main slogan of the Bolsheviks in 1917?",
      options: [
        "Peace, Land, and Bread",
        "Liberty, Equality, Fraternity",
        "Workers of the World Unite",
        "No Taxation without Representation",
      ],
      correctAnswer: "a",
    },
  ],
  3: [
    {
      id: "sst-his-c9-3-mcq-1",
      question: "When did Adolf Hitler become the Chancellor of Germany?",
      options: ["1933", "1929", "1939", "1945"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-3-mcq-2",
      question: "What was the name of Hitler's political party?",
      options: [
        "Nazi Party",
        "Labour Party",
        "Socialist Party",
        "Democratic Party",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-3-mcq-3",
      question:
        "Which country did Germany invade in 1939, starting World War II?",
      options: ["Poland", "France", "Russia", "Austria"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-3-mcq-4",
      question: "The famous book 'Mein Kampf' was written by:",
      options: [
        "Adolf Hitler",
        "Joseph Goebbels",
        "Heinrich Himmler",
        "Benito Mussolini",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-3-mcq-5",
      question: "What was the German parliament building called?",
      options: ["Reichstag", "Duma", "Diet", "Bundestag"],
      correctAnswer: "a",
    },
  ],
  4: [
    {
      id: "sst-his-c9-4-mcq-1",
      question: "Who was the first Inspector General of Forests in India?",
      options: [
        "Dietrich Brandis",
        "George Yule",
        "Verrier Elwin",
        "Lord Dalhousie",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-4-mcq-2",
      question:
        "The system of scientific forestry was introduced in India by the:",
      options: ["British", "French", "Dutch", "Portuguese"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-4-mcq-3",
      question: "In which year was the first Indian Forest Act passed?",
      options: ["1865", "1878", "1927", "1855"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-4-mcq-4",
      question: "The shifting cultivation is known in Central America as:",
      options: ["Milpa", "Lading", "Chitemene", "Tavy"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-4-mcq-5",
      question: "Who led the forest rebellion in Bastar in 1910?",
      options: [
        "Gunda Dhur",
        "Birsa Munda",
        "Alluri Sitarama Raju",
        "Sidhu Murmu",
      ],
      correctAnswer: "a",
    },
  ],
  5: [
    {
      id: "sst-his-c9-5-mcq-1",
      question: "Guijar Bakarwals are pastoral nomads of which region?",
      options: [
        "Jammu and Kashmir",
        "Himachal Pradesh",
        "Rajasthan",
        "Maharashtra",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-5-mcq-2",
      question:
        "The pastoral community of Rajasthan that is known for camel herding is:",
      options: ["Raika", "Gaddi", "Bhotia", "Sherpa"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-5-mcq-3",
      question: "The Maasai pastoral community belongs to which continent?",
      options: ["Africa", "Asia", "Europe", "South America"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-5-mcq-4",
      question: "What are the seasonal pastures in high mountains called?",
      options: ["Bugyals", "Bhabar", "Kharif", "Rabi"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-5-mcq-5",
      question: "The Gaddi shepherds belong to which state?",
      options: [
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Gujarat",
        "Uttarakhand",
      ],
      correctAnswer: "a",
    },
  ],
  6: [
    {
      id: "sst-his-c9-6-mcq-1",
      question:
        "Who was the last ruling Maharaja of Jammu and Kashmir at the time of integration?",
      options: [
        "Maharaja Hari Singh",
        "Maharaja Gulab Singh",
        "Maharaja Ranbir Singh",
        "Maharaja Pratap Singh",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-6-mcq-2",
      question:
        "On which date was the Instrument of Accession signed by Maharaja Hari Singh?",
      options: [
        "26 October 1947",
        "15 August 1947",
        "26 January 1950",
        "27 October 1947",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-6-mcq-3",
      question:
        "Which leader played a pivotal role in the integration of princely states into India?",
      options: [
        "Sardar Vallabhbhai Patel",
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Dr. B.R. Ambedkar",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-6-mcq-4",
      question:
        "What was the status of Jammu and Kashmir under Article 370 of the Indian Constitution?",
      options: [
        "Special Status",
        "Union Territory",
        "Associate State",
        "No Special Status",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-6-mcq-5",
      question:
        "The Treaty of Amritsar (1846) marked the creation of the princely state of Jammu and Kashmir under:",
      options: ["Gulab Singh", "Ranjit Singh", "Hari Singh", "Ranbir Singh"],
      correctAnswer: "a",
    },
  ],
};

sstC9Categories.forEach((cat) => {
  const catName = sstC9CategoryNames[cat];
  const limit = cat === "geo" ? 7 : 6;
  for (let i = 1; i <= limit; i++) {
    const id = `sst-${cat}-c9-${i}`;
    if (chapterContents[id]) continue;
    const title =
      cat === "his"
        ? class9HistoryTitles[i - 1]
        : cat === "civ"
        ? class9CivicsTitles[i - 1]
        : `${catName} Chapter ${i}`;

    let htmlOverview = "";
    let htmlExercises = "";

    if (cat === "his") {
      htmlOverview = `
        <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: transparent;">
          <!-- Premium Info Card -->
          <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
            <h3 style="color: #FF8A65; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 14px; display: flex; align-items: center;">
              <span style="margin-right: 8px; font-size: 18px;">💡</span> Core Learnings
            </h3>
            <ul style="color: #B3B3C6; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Explore critical timelines and major turning points of the period.</li>
              <li style="margin-bottom: 8px;">Understand the socio-political movements and economic causes of key events.</li>
              <li style="margin-bottom: 0;">Analyze impact, consequences, and long-term historical legacy on the modern world.</li>
            </ul>
          </div>
          
          <!-- Premium Status Card -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px dashed rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 16px; display: flex; align-items: center; justify-content: center; gap: 10px;">
            <span style="font-size: 18px;">⏳</span>
            <span style="color: #94A3B8; font-size: 14px; font-weight: 400; text-align: center;">Comprehensive notes and answers are being processed. Stay tuned!</span>
          </div>
        </div>
      `;

      htmlExercises = `
        <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: transparent;">
          <!-- Premium Status Card -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px dashed rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 16px; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 24px;">
            <span style="font-size: 18px;">⏳</span>
            <span style="color: #94A3B8; font-size: 14px; font-weight: 400; text-align: center;">NCERT Q&A Solutions for this chapter will be populated here very soon.</span>
          </div>

          <!-- Interactive Tip -->
          <div style="background-color: rgba(33, 150, 243, 0.08); border: 1px solid rgba(33, 150, 243, 0.25); border-radius: 12px; padding: 16px; display: flex; align-items: flex-start; gap: 12px;">
            <span style="font-size: 20px;">💡</span>
            <div>
              <h4 style="margin: 0 0 4px 0; color: #90CAF9; font-size: 15px; font-weight: 600;">Study Tip</h4>
              <p style="margin: 0; color: #B0BEC5; font-size: 13px; line-height: 1.5;">To prepare for exams, practice the dates and timelines first. You can write your own revision notes directly inside the <strong>Quick Notes</strong> screen!</p>
            </div>
          </div>
        </div>
      `;
    } else {
      htmlOverview = `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <h3 style="color: #FF8A65; text-align: left; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Concepts</h3>
          <p style="line-height: 1.6; font-size: 17px;">Welcome to ${catName} Chapter ${i} Key Concepts. Content for this chapter is being prepared and will be available soon in this beautiful Web View layout!</p>
        </div>
      `;
      htmlExercises = `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <p style="color: #FF8A65; font-weight: bold; margin-bottom: 8px; font-size: 18px;">Question & Answers</p>
          <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;">NCERT Q&A Solutions for ${catName} Chapter ${i} will be populated here very soon.</p>
        </div>
      `;
    }

    const defaultMcqs = [
      {
        id: `${id}-mcq-1`,
        question: `This is a sample multiple-choice question 1 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "a",
      },
      {
        id: `${id}-mcq-2`,
        question: `This is a sample multiple-choice question 2 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "b",
      },
      {
        id: `${id}-mcq-3`,
        question: `This is a sample multiple-choice question 3 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "c",
      },
      {
        id: `${id}-mcq-4`,
        question: `This is a sample multiple-choice question 4 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "d",
      },
      {
        id: `${id}-mcq-5`,
        question: `This is a sample multiple-choice question 5 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "a",
      },
    ];

    chapterContents[id] = {
      id,
      number: i,
      title: title,
      isHtmlView: true,
      htmlOverview: htmlOverview,
      htmlExercises: {
        "ex-sst-qa": htmlExercises,
      },
      exercises: [
        {
          id: "ex-sst-qa",
          name: "Q & A",
          questions: [],
        },
      ],
      mcqs: cat === "his" ? class9HistoryMCQs[i] : defaultMcqs,
      introduction: `Introduction for ${title}`,
    };
  }
});

// Create empty WebView-enabled chapters with native MCQs for Class 8 Social Science
const sstC8Categories = ["his", "geo", "civ"];
const sstC8CategoryNames: Record<string, string> = {
  his: "History",
  geo: "Geography",
  civ: "Political Science",
};

sstC8Categories.forEach((cat) => {
  const catName = sstC8CategoryNames[cat];
  for (let i = 1; i <= 6; i++) {
    const id = `sst-${cat}-c8-${i}`;
    chapterContents[id] = {
      id,
      number: i,
      title: `${catName} Chapter ${i}`,
      isHtmlView: true,
      htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <h3 style="color: #FF8A65; text-align: left; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Concepts</h3>
          <p style="line-height: 1.6; font-size: 17px;">Welcome to ${catName} Chapter ${i} Key Concepts. Content for this chapter is being prepared and will be available soon in this beautiful Web View layout!</p>
        </div>
      `,
      htmlExercises: {
        "ex-sst-qa": `
          <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="color: #FF8A65; font-weight: bold; margin-bottom: 8px; font-size: 18px;">Question & Answers</p>
            <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;">NCERT Q&A Solutions for ${catName} Chapter ${i} will be populated here very soon.</p>
          </div>
        `,
      },
      exercises: [
        {
          id: "ex-sst-qa",
          name: "Q & A",
          questions: [],
        },
      ],
      mcqs: [
        {
          id: `${id}-mcq-1`,
          question: `This is a sample multiple-choice question 1 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "a",
        },
        {
          id: `${id}-mcq-2`,
          question: `This is a sample multiple-choice question 2 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "b",
        },
        {
          id: `${id}-mcq-3`,
          question: `This is a sample multiple-choice question 3 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "c",
        },
        {
          id: `${id}-mcq-4`,
          question: `This is a sample multiple-choice question 4 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "d",
        },
        {
          id: `${id}-mcq-5`,
          question: `This is a sample multiple-choice question 5 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "a",
        },
      ],
      introduction: `Introduction for ${catName} Chapter ${i}`,
    };
  }
});

// Dynamically generate Class 11 Science Chapter Web View Structures (Physics, Chemistry, Botany, Zoology)
const c11Subjects = [
  { prefix: "phy", title: "Physics", maxCh: 10 },
  { prefix: "chem", title: "Chemistry", maxCh: 9 },
  { prefix: "bot", title: "Botany", maxCh: 4 },
  { prefix: "zoo", title: "Zoology", maxCh: 4 },
];

const c11ThemeColors = [
  "#FF512F", // Ch 1 Coral Red
  "#FF9100", // Ch 2 Electric Amber
  "#00b09b", // Ch 3 Mint
  "#11998e", // Ch 4 Emerald
  "#00c6ff", // Ch 5 Bright Blue
  "#FF8A65", // Ch 6 Deep Orange
  "#AB47BC", // Ch 7 Magenta
  "#FDC830", // Ch 8 Gold
  "#FF007F", // Ch 9 Neon Rose
];

c11Subjects.forEach(({ prefix, title, maxCh }) => {
  for (let i = 1; i <= maxCh; i++) {
    const id = `c11-${prefix}-${i}`;
    const themeColor = c11ThemeColors[(i - 1) % c11ThemeColors.length];
    chapterContents[id] = {
      id,
      number: i,
      title: `Class 11 ${title} Chapter ${i}`,
      isHtmlView: true,
      htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <h3 style="color: ${themeColor}; text-align: left; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Reference & Concept Guide</h3>
          <p style="line-height: 1.6; font-size: 16px;">Welcome to Class 11 ${title} Chapter ${i}. Key Concepts, definitions, formulas, and reference theory for this chapter will be rendered here in this responsive Web View layout.</p>
        </div>
      `,
      htmlExercises: {
        "ex-c11-qa": `
          <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 18px;">NCERT Solutions & Answers</p>
            <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;">Detailed step-by-step NCERT Solutions for Class 11 ${title} Chapter ${i} will be populated here.</p>
          </div>
        `,
      },
      exercises: [
        {
          id: "ex-c11-qa",
          name: "Q & A",
          questions: [],
        },
      ],
      mcqs: Array.from({ length: 10 }, (_, index) => ({
        id: `${id}-mcq-${index + 1}`,
        question: `Class 11 ${title} Chapter ${i} - Practice Question ${index + 1}`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: ["a", "b", "c", "d"][index % 4],
        explanation: `Explanation for Class 11 ${title} Chapter ${i} Question ${index + 1}.`,
      })),
      introduction: `Class 11 ${title} Chapter ${i} Introduction`,
    };
  }
});







// Dynamically generate Class 11 & Class 12 Arts Education Chapter Structures
const eduThemeColors = [
  "#FF512F", // Ch 1 Sunset Coral
  "#00C6FF", // Ch 2 Electric Cyan
  "#11998E", // Ch 3 Mint Emerald
  "#8E2DE2", // Ch 4 Violet Purple
  "#FF8A65", // Ch 5 Deep Orange
  "#FDC830", // Ch 6 Golden Amber
  "#FF007F", // Ch 7 Neon Rose
  "#29B6F6", // Ch 8 Sky Royal Blue
];

const c11EduTitles = [
  "Concept and Nature of Education",
  "Aims of Education",
  "Psychological Foundations of Education",
  "Sociological Foundations of Education",
  "Guidance and Counseling",
  "National Educational Policy 2020 and the Curriculum Frameworks",
  "Statistics and Education",
  "Peace and Value Education",
];

const c12EduTitles = [
  "Philosophical Foundations of Education",
  "Mental Health and Wellbeing",
  "Adjustment and Maladjustment",
  "Human Growth and Development",
  "Educational Technology",
  "Inclusive Education",
  "Statistics in Education",
  "Education and the Contemporary World",
];

// Initialize Class 11 Education (c11-edu-1 to c11-edu-8)
for (let i = 1; i <= 8; i++) {
  const id = `c11-edu-${i}`;
  const themeColor = eduThemeColors[(i - 1) % eduThemeColors.length];
  const title = c11EduTitles[i - 1];
  chapterContents[id] = {
    id,
    number: i,
    title: `Unit ${i}: ${title}`,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <h2 style="color: ${themeColor}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px; margin-bottom: 16px;">
          Unit ${i}: ${title}
        </h2>
        <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 16px 0;">
          <h4 style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin: 0 0 6px 0;">📖 Gold Standard Textbook Reference</h4>
          <p style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6; margin: 0;">Comprehensive theoretical foundations, philosophical origins, thinker viewpoints, and visual concept maps for this unit are being rendered here.</p>
        </div>
      </div>
    `,
    htmlExercises: {
      "ex-c11-qa": `
        <div style="padding: 14px; color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <h3 style="color: ${themeColor}; font-size: 20px; font-weight: 800; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px; margin-bottom: 16px;">
            Unit ${i}: Golden 25 Board Master Q&A
          </h3>
          <p style="color: #94A3B8; font-size: 14.5px; line-height: 1.6;">
            Strictly curated 25 Board Exam Questions (Section A: 12 VSAT, Section B: 8 SAT, Section C: 5 LAT) for Unit ${i}.
          </p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c11-qa",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 25 }, (_, idx) => ({
      id: `${id}-mcq-${idx + 1}`,
      question: `Class 11 Education Unit ${i} (${title}) - Practice Question ${idx + 1}`,
      options: [
        `A):   Option 1 for Question ${idx + 1}`,
        `B):   Option 2 for Question ${idx + 1}`,
        `C):   Option 3 for Question ${idx + 1}`,
        `D):   Option 4 for Question ${idx + 1}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for Unit ${i} Question ${idx + 1} based on the prescribed textbook syllabus.`,
    })),
    introduction: `Unit ${i}: ${title}`,
  };
}

// Initialize Class 12 Education (c12-edu-1 to c12-edu-8)
for (let i = 1; i <= 8; i++) {
  const id = `c12-edu-${i}`;
  const themeColor = eduThemeColors[(i - 1) % eduThemeColors.length];
  const title = c12EduTitles[i - 1];
  chapterContents[id] = {
    id,
    number: i,
    title: `Unit ${i}: ${title}`,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <h2 style="color: ${themeColor}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px; margin-bottom: 16px;">
          Unit ${i}: ${title}
        </h2>
        <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 16px 0;">
          <h4 style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin: 0 0 6px 0;">📖 Gold Standard Textbook Reference</h4>
          <p style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6; margin: 0;">Comprehensive theoretical foundations, policy developments, historical commissions, and visual concept maps for this unit are being rendered here.</p>
        </div>
      </div>
    `,
    htmlExercises: {
      "ex-c12-qa": `
        <div style="padding: 14px; color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <h3 style="color: ${themeColor}; font-size: 20px; font-weight: 800; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px; margin-bottom: 16px;">
            Unit ${i}: Golden 25 Board Master Q&A
          </h3>
          <p style="color: #94A3B8; font-size: 14.5px; line-height: 1.6;">
            Strictly curated 25 Board Exam Questions (Section A: 12 VSAT, Section B: 8 SAT, Section C: 5 LAT) for Unit ${i}.
          </p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c12-qa",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 25 }, (_, idx) => ({
      id: `${id}-mcq-${idx + 1}`,
      question: `Class 12 Education Unit ${i} (${title}) - Practice Question ${idx + 1}`,
      options: [
        `A):   Option 1 for Question ${idx + 1}`,
        `B):   Option 2 for Question ${idx + 1}`,
        `C):   Option 3 for Question ${idx + 1}`,
        `D):   Option 4 for Question ${idx + 1}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for Unit ${i} Question ${idx + 1} based on the prescribed textbook syllabus.`,
    })),
    introduction: `Unit ${i}: ${title}`,
  };
}

// Dynamically generate Class 12 Political Science Chapter Structures (15 Chapters)
const c12PolTitles = [
  "Disintegration of the \"Second World\" and the Collapse of Bipolarity",
  "Alternative Centres of Economic and Political Power",
  "South Asia in the Post-Cold War Era",
  "International Organizations in a Unipolar World",
  "Security in Contemporary World",
  "Globalization and its Critics",
  "Environmental and Natural Resources in Global Politics",
  "Nation-Building and Its Problems",
  "Era of One-Party Dominance",
  "Politics of Planned Development",
  "India's External Relations",
  "Challenge to and Restoration of Congress System",
  "Crisis of the Constitutional Order",
  "Regional Aspirations and Conflicts",
  "Recent Developments in Indian Politics",
];

const c12PolMarks = [
  "6 Marks",
  "6 Marks",
  "6 Marks",
  "6 Marks",
  "6 Marks",
  "4 Marks",
  "6 Marks",
  "6 Marks",
  "4 Marks",
  "2 Marks",
  "6 Marks",
  "5 Marks",
  "4 Marks",
  "6 Marks",
  "7 Marks",
];

const c12PolThemeColors = [
  "#FF512F",
  "#00C6FF",
  "#11998E",
  "#8E2DE2",
  "#FF8A65",
  "#FDC830",
  "#00E676",
  "#FF6D00",
  "#2979FF",
  "#00BFA5",
  "#E040FB",
  "#FF007F",
  "#D50000",
  "#7C4DFF",
  "#00C853",
];

const c12PolParts = [
  "Part A: Contemporary World Politics",
  "Part A: Contemporary World Politics",
  "Part A: Contemporary World Politics",
  "Part A: Contemporary World Politics",
  "Part A: Contemporary World Politics",
  "Part A: Contemporary World Politics",
  "Part A: Contemporary World Politics",
  "Part B: Politics in India since Independence",
  "Part B: Politics in India since Independence",
  "Part B: Politics in India since Independence",
  "Part B: Politics in India since Independence",
  "Part B: Politics in India since Independence",
  "Part B: Politics in India since Independence",
  "Part B: Politics in India since Independence",
  "Part B: Politics in India since Independence",
];

// Initialize Class 12 Political Science (c12-pol-1 to c12-pol-15)
for (let i = 1; i <= 15; i++) {
  const id = `c12-pol-${i}`;
  const themeColor = c12PolThemeColors[i - 1];
  const title = c12PolTitles[i - 1];
  const marks = c12PolMarks[i - 1];
  const part = c12PolParts[i - 1];
  chapterContents[id] = {
    id,
    number: i,
    title: `Chapter ${i}: ${title}`,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: inline-block; background: ${themeColor}22; border: 1px solid ${themeColor}; border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: ${themeColor}; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">${part.toUpperCase()} • ${marks.toUpperCase()}</span>
        </div>
        <h2 style="color: ${themeColor}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px; margin-bottom: 16px;">
          Chapter ${i}: ${title}
        </h2>
        <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 16px 0;">
          <h4 style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin: 0 0 6px 0;">🏛️ Ultra Gold Reference Guide</h4>
          <p style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6; margin: 0;">Comprehensive ideological analyses, diplomatic treaties, historical mechanisms, and high-contrast concept flowcharts are being prepared for this chapter.</p>
        </div>
      </div>
    `,
    htmlExercises: {
      "ex-c12-qa": `
        <div style="padding: 14px; color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <h3 style="color: ${themeColor}; font-size: 20px; font-weight: 800; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px; margin-bottom: 16px;">
            Chapter ${i}: Board Master Q&A (${marks})
          </h3>
          <p style="color: #94A3B8; font-size: 14.5px; line-height: 1.6;">
            Targeted Board Exam Questions curated strictly according to the official ${marks} board weightage.
          </p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c12-qa",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 20 }, (_, idx) => ({
      id: `${id}-mcq-${idx + 1}`,
      question: `Class 12 Political Science Chapter ${i} (${title}) - Practice Question ${idx + 1}`,
      options: [
        `A):   Option 1 for Question ${idx + 1}`,
        `B):   Option 2 for Question ${idx + 1}`,
        `C):   Option 3 for Question ${idx + 1}`,
        `D):   Option 4 for Question ${idx + 1}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for Chapter ${i} Question ${idx + 1} based on official NCERT / State Board curriculum.`,
    })),
    introduction: `Chapter ${i}: ${title}`,
  };
}

// Dynamically generate Class 11 Political Science Chapter Structures (18 Chapters)
const c11PolTitles = [
  "Making of the Constitution",
  "Fundamental Rights",
  "System of Representational Democracy",
  "Executive in a Parliamentary System",
  "Legislature at the Central and State Level",
  "Judiciary",
  "Federalism",
  "Local Government",
  "Political Philosophy Underlying the Constitution",
  "Constitution as a Living Document",
  "Introduction to Political Theory",
  "Freedom",
  "Equality",
  "Social Justice",
  "Rights",
  "Citizenship",
  "Nationalism",
  "Secularism",
];

const c11PolMarks = [
  "3 Marks",
  "5 Marks",
  "6 Marks",
  "4 Marks",
  "4 Marks",
  "4 Marks",
  "6 Marks",
  "4 Marks",
  "2 Marks",
  "2 Marks",
  "4 Marks",
  "6 Marks",
  "6 Marks",
  "6 Marks",
  "4 Marks",
  "4 Marks",
  "4 Marks",
  "6 Marks",
];

const c11PolThemeColors = [
  "#FF512F",
  "#00C6FF",
  "#11998E",
  "#8E2DE2",
  "#FF8A65",
  "#FDC830",
  "#00E676",
  "#FF6D00",
  "#2979FF",
  "#00BFA5",
  "#E040FB",
  "#FF007F",
  "#D50000",
  "#7C4DFF",
  "#00C853",
  "#FFAB00",
  "#00E5FF",
  "#E91E63",
];

const c11PolParts = [
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part A: Indian Constitution at Work",
  "Part B: Political Theory",
  "Part B: Political Theory",
  "Part B: Political Theory",
  "Part B: Political Theory",
  "Part B: Political Theory",
  "Part B: Political Theory",
  "Part B: Political Theory",
  "Part B: Political Theory",
];

// Initialize Class 11 Political Science (c11-pol-1 to c11-pol-18)
for (let i = 1; i <= 18; i++) {
  const id = `c11-pol-${i}`;
  const themeColor = c11PolThemeColors[i - 1];
  const title = c11PolTitles[i - 1];
  const marks = c11PolMarks[i - 1];
  const part = c11PolParts[i - 1];
  chapterContents[id] = {
    id,
    number: i,
    title: `Chapter ${i}: ${title}`,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: inline-block; background: ${themeColor}22; border: 1px solid ${themeColor}; border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: ${themeColor}; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">${part.toUpperCase()} • ${marks.toUpperCase()}</span>
        </div>
        <h2 style="color: ${themeColor}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px; margin-bottom: 16px;">
          Chapter ${i}: ${title}
        </h2>
        <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 4px solid ${themeColor}; border-radius: 8px; padding: 14px 16px; margin: 16px 0;">
          <h4 style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin: 0 0 6px 0;">🏛️ Ultra Gold Reference Guide</h4>
          <p style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6; margin: 0;">Comprehensive constitutional principles, democratic institutions, political theories, and high-contrast concept flowcharts are being prepared for this chapter.</p>
        </div>
      </div>
    `,
    htmlExercises: {
      "ex-c11-qa": `
        <div style="padding: 14px; color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <h3 style="color: ${themeColor}; font-size: 20px; font-weight: 800; border-bottom: 2px solid ${themeColor}; padding-bottom: 8px; margin-bottom: 16px;">
            Chapter ${i}: Board Master Q&A (${marks})
          </h3>
          <p style="color: #94A3B8; font-size: 14.5px; line-height: 1.6;">
            Targeted Board Exam Questions curated strictly according to the official ${marks} board weightage.
          </p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c11-qa",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 20 }, (_, idx) => ({
      id: `${id}-mcq-${idx + 1}`,
      question: `Class 11 Political Science Chapter ${i} (${title}) - Practice Question ${idx + 1}`,
      options: [
        `A):   Option 1 for Question ${idx + 1}`,
        `B):   Option 2 for Question ${idx + 1}`,
        `C):   Option 3 for Question ${idx + 1}`,
        `D):   Option 4 for Question ${idx + 1}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for Chapter ${i} Question ${idx + 1} based on official NCERT / State Board curriculum.`,
    })),
    introduction: `Chapter ${i}: ${title}`,
  };
}

// Initialize Class 11 English (Hornbill, Snapshots, Writing & Grammar)
const c11EngHornbill = [
  { id: "c11-eng-h1", number: 1, title: "The Portrait of a Lady", author: "Khushwant Singh", type: "Prose", color: "#E91E63" },
  { id: "c11-eng-h2", number: 2, title: "A Photograph", author: "Shirley Toulson", type: "Poem", color: "#9C27B0" },
  { id: "c11-eng-h3", number: 3, title: "We're Not Afraid to Die... If We Can All Be Together", author: "Gordon Cook & Alan East", type: "Prose", color: "#2196F3" },
  { id: "c11-eng-h4", number: 4, title: "Discovering Tut: The Saga Continues", author: "A.R. Williams", type: "Prose", color: "#FF9800" },
  { id: "c11-eng-h5", number: 5, title: "The Laburnum Top", author: "Ted Hughes", type: "Poem", color: "#FBC02D" },
  { id: "c11-eng-h6", number: 6, title: "The Voice of the Rain", author: "Walt Whitman", type: "Poem", color: "#00BCD4" },
  { id: "c11-eng-h7", number: 7, title: "The Ailing Planet: The Green Movement's Role", author: "Nani Palkhivala", type: "Prose", color: "#4CAF50" },
  { id: "c11-eng-h8", number: 8, title: "Childhood", author: "Markus Natten", type: "Poem", color: "#E040FB" },
  { id: "c11-eng-h9", number: 9, title: "The Adventure", author: "Jayant Narlikar", type: "Prose", color: "#3F51B5" },
  { id: "c11-eng-h10", number: 10, title: "Silk Road", author: "Nick Middleton", type: "Prose", color: "#8D6E63" },
  { id: "c11-eng-h11", number: 11, title: "Father to Son", author: "Elizabeth Jennings", type: "Poem", color: "#FF5722" },
];

c11EngHornbill.forEach((item) => {
  chapterContents[item.id] = {
    id: item.id,
    number: item.number,
    title: item.title,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: inline-block; background: ${item.color}22; border: 1px solid ${item.color}; border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: ${item.color}; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">HORNBILL • ${item.type.toUpperCase()} • BY ${item.author.toUpperCase()}</span>
        </div>
        <h2 style="color: ${item.color}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${item.color}; padding-bottom: 8px; margin-bottom: 16px;">
          ${item.title}
        </h2>
        <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1;">
          Comprehensive literary analysis, character sketches, poetic devices, board exam solutions, and interactive quiz for <b>${item.title}</b> are loading.
        </p>
      </div>
    `,
    htmlExercises: {
      "ex-c11-eng": `
        <div style="padding: 14px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
          <div style="background: rgba(233, 30, 99, 0.15); border-left: 5px solid ${item.color}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
            <h2 style="color: ${item.color}; font-weight: bold; margin: 0; font-size: 18px;">
              BOARD EXAMINATION QUESTIONS &amp; ANSWERS &bull; ${item.title.toUpperCase()}
            </h2>
            <span style="color: #CBD5E1; font-size: 13.5px;">Extract-Based &bull; Short Answers (3M) &bull; Long Answers (6M) &bull; NCERT Solutions</span>
          </div>
          <p style="color: #CBD5E1;">Full exam solutions for ${item.title} are loading.</p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c11-eng",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 20 }, (_, idx) => ({
      id: `${item.id}-mcq-${idx + 1}`,
      question: `${item.title} - Question ${idx + 1}`,
      options: [
        `A):   Option 1 for ${item.title}`,
        `B):   Option 2 for ${item.title}`,
        `C):   Option 3 for ${item.title}`,
        `D):   Option 4 for ${item.title}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for ${item.title} Question ${idx + 1}.`,
    })),
    introduction: item.title,
  };
});

const c11EngSnapshots = [
  { id: "c11-eng-s1", number: 1, title: "The Summer of the Beautiful White Horse", author: "William Saroyan", type: "Story", color: "#00B0FF" },
  { id: "c11-eng-s2", number: 2, title: "The Address", author: "Marga Minco", type: "Story", color: "#7C4DFF" },
  { id: "c11-eng-s3", number: 3, title: "Mother's Day", author: "J.B. Priestley", type: "Play", color: "#FF4081" },
  { id: "c11-eng-s4", number: 4, title: "Birth", author: "A.J. Cronin", type: "Story", color: "#00E676" },
  { id: "c11-eng-s5", number: 5, title: "The Tale of Melon City", author: "Vikram Seth", type: "Poetic Narrative", color: "#FFAB00" },
];

c11EngSnapshots.forEach((item) => {
  chapterContents[item.id] = {
    id: item.id,
    number: item.number,
    title: item.title,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: inline-block; background: ${item.color}22; border: 1px solid ${item.color}; border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: ${item.color}; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">SNAPSHOTS • ${item.type.toUpperCase()} • BY ${item.author.toUpperCase()}</span>
        </div>
        <h2 style="color: ${item.color}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${item.color}; padding-bottom: 8px; margin-bottom: 16px;">
          ${item.title}
        </h2>
        <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1;">
          Comprehensive supplementary story analysis, character motives, board questions, and interactive quiz for <b>${item.title}</b> are loading.
        </p>
      </div>
    `,
    htmlExercises: {
      "ex-c11-eng": `
        <div style="padding: 14px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
          <div style="background: rgba(0, 176, 255, 0.15); border-left: 5px solid ${item.color}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
            <h2 style="color: ${item.color}; font-weight: bold; margin: 0; font-size: 18px;">
              BOARD EXAMINATION QUESTIONS &amp; ANSWERS &bull; ${item.title.toUpperCase()}
            </h2>
            <span style="color: #CBD5E1; font-size: 13.5px;">Short Answers (3M) &bull; Long Thematic Answers (6M) &bull; NCERT Supplementary Solutions</span>
          </div>
          <p style="color: #CBD5E1;">Full exam solutions for ${item.title} are loading.</p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c11-eng",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 20 }, (_, idx) => ({
      id: `${item.id}-mcq-${idx + 1}`,
      question: `${item.title} - Question ${idx + 1}`,
      options: [
        `A):   Option 1 for ${item.title}`,
        `B):   Option 2 for ${item.title}`,
        `C):   Option 3 for ${item.title}`,
        `D):   Option 4 for ${item.title}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for ${item.title} Question ${idx + 1}.`,
    })),
    introduction: item.title,
  };
});

const c11EngWriting = [
  { id: "c11-eng-w1", number: 1, title: "Note-Making & Summarizing", marks: "10 Marks", section: "Reading Skills", color: "#FF512F" },
  { id: "c11-eng-w2", number: 2, title: "Notice, Poster & Advertisement Writing", marks: "4 Marks", section: "Writing Skills", color: "#00C6FF" },
  { id: "c11-eng-w3", number: 3, title: "Formal & Business Letter Writing", marks: "6 Marks", section: "Writing Skills", color: "#11998E" },
  { id: "c11-eng-w4", number: 4, title: "Personal Email Writing", marks: "4 Marks", section: "Writing Skills", color: "#8E2DE2" },
  { id: "c11-eng-w5", number: 5, title: "Article, Speech, Report & Debate Writing", marks: "8 Marks", section: "Writing Skills", color: "#FF8A65" },
  { id: "c11-eng-w6", number: 6, title: "Grammar Error Correction Master Toolkit", marks: "8 Marks", section: "Grammar", color: "#FDC830" },
];

c11EngWriting.forEach((item) => {
  chapterContents[item.id] = {
    id: item.id,
    number: item.number,
    title: item.title,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: inline-block; background: ${item.color}22; border: 1px solid ${item.color}; border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: ${item.color}; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">${item.section.toUpperCase()} • ${item.marks.toUpperCase()}</span>
        </div>
        <h2 style="color: ${item.color}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${item.color}; padding-bottom: 8px; margin-bottom: 16px;">
          ${item.title}
        </h2>
        <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1;">
          Master formats, board marking schemes, solved samples, and practice tests for <b>${item.title}</b> are loading.
        </p>
      </div>
    `,
    htmlExercises: {
      "ex-c11-eng": `
        <div style="padding: 14px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
          <div style="background: rgba(243, 156, 18, 0.15); border-left: 5px solid ${item.color}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
            <h2 style="color: ${item.color}; font-weight: bold; margin: 0; font-size: 18px;">
              BOARD TOOLKIT &amp; PRACTICE &bull; ${item.title.toUpperCase()}
            </h2>
            <span style="color: #CBD5E1; font-size: 13.5px;">Official Marking Scheme &bull; Formats &bull; Solved Samples &bull; Practice Tests</span>
          </div>
          <p style="color: #CBD5E1;">Board formats and solved samples for ${item.title} are loading.</p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c11-eng",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 20 }, (_, idx) => ({
      id: `${item.id}-mcq-${idx + 1}`,
      question: `${item.title} - Question ${idx + 1}`,
      options: [
        `A):   Option 1 for ${item.title}`,
        `B):   Option 2 for ${item.title}`,
        `C):   Option 3 for ${item.title}`,
        `D):   Option 4 for ${item.title}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for ${item.title} Question ${idx + 1}.`,
    })),
    introduction: item.title,
  };
});

// Initialize Class 12 English (Flamingo, Vistas, Writing & Grammar)
const c12EngFlamingo = [
  { id: "c12-eng-f1", number: 1, title: "The Last Lesson", author: "Alphonse Daudet", type: "Prose", color: "#FF512F" },
  { id: "c12-eng-f2", number: 2, title: "Lost Spring", author: "Anees Jung", type: "Prose", color: "#00C6FF" },
  { id: "c12-eng-f3", number: 3, title: "Deep Water", author: "William Douglas", type: "Prose", color: "#11998E" },
  { id: "c12-eng-f4", number: 4, title: "The Rattrap", author: "Selma Lagerlöf", type: "Prose", color: "#8E2DE2" },
  { id: "c12-eng-f5", number: 5, title: "Indigo", author: "Louis Fischer", type: "Prose", color: "#FF8A65" },
  { id: "c12-eng-f6", number: 6, title: "Poets and Pancakes", author: "Asokamitran", type: "Prose", color: "#FDC830" },
  { id: "c12-eng-f7", number: 7, title: "The Interview (Part I & II)", author: "Christopher Silvester", type: "Prose", color: "#FF007F" },
  { id: "c12-eng-f8", number: 8, title: "Going Places", author: "A.R. Barton", type: "Prose", color: "#29B6F6" },
  { id: "c12-eng-f9", number: 9, title: "My Mother at Sixty-six", author: "Kamala Das", type: "Poem", color: "#E040FB" },
  { id: "c12-eng-f10", number: 10, title: "Keeping Quiet", author: "Pablo Neruda", type: "Poem", color: "#00E5FF" },
  { id: "c12-eng-f11", number: 11, title: "A Thing of Beauty", author: "John Keats", type: "Poem", color: "#00E676" },
  { id: "c12-eng-f12", number: 12, title: "A Roadside Stand", author: "Robert Frost", type: "Poem", color: "#FF9100" },
  { id: "c12-eng-f13", number: 13, title: "Aunt Jennifer's Tigers", author: "Adrienne Rich", type: "Poem", color: "#FF5252" },
];

c12EngFlamingo.forEach((item) => {
  chapterContents[item.id] = {
    id: item.id,
    number: item.number,
    title: item.title,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: inline-block; background: ${item.color}22; border: 1px solid ${item.color}; border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: ${item.color}; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">FLAMINGO • ${item.type.toUpperCase()} • BY ${item.author.toUpperCase()}</span>
        </div>
        <h2 style="color: ${item.color}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${item.color}; padding-bottom: 8px; margin-bottom: 16px;">
          ${item.title}
        </h2>
        <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1;">
          Comprehensive literary analysis, character motives, poetic devices, board exam solutions, and interactive quiz for <b>${item.title}</b> are loading.
        </p>
      </div>
    `,
    htmlExercises: {
      "ex-c12-eng": `
        <div style="padding: 14px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
          <div style="background: rgba(255, 65, 108, 0.15); border-left: 5px solid ${item.color}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
            <h2 style="color: ${item.color}; font-weight: bold; margin: 0; font-size: 18px;">
              BOARD EXAMINATION QUESTIONS &amp; ANSWERS &bull; ${item.title.toUpperCase()}
            </h2>
            <span style="color: #CBD5E1; font-size: 13.5px;">Extract-Based &bull; Short Answers (3M) &bull; Long Answers (6M) &bull; NCERT Solutions</span>
          </div>
          <p style="color: #CBD5E1;">Full exam solutions for ${item.title} are loading.</p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c12-eng",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 20 }, (_, idx) => ({
      id: `${item.id}-mcq-${idx + 1}`,
      question: `${item.title} - Question ${idx + 1}`,
      options: [
        `A):   Option 1 for ${item.title}`,
        `B):   Option 2 for ${item.title}`,
        `C):   Option 3 for ${item.title}`,
        `D):   Option 4 for ${item.title}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for ${item.title} Question ${idx + 1}.`,
    })),
    introduction: item.title,
  };
});

const c12EngVistas = [
  { id: "c12-eng-v1", number: 1, title: "The Third Level", author: "Jack Finney", type: "Story", color: "#00B0FF" },
  { id: "c12-eng-v2", number: 2, title: "The Tiger King", author: "Kalki", type: "Story", color: "#FF6D00" },
  { id: "c12-eng-v3", number: 3, title: "Journey to The End of the Earth", author: "Tishani Doshi", type: "Travelogue", color: "#26C6DA" },
  { id: "c12-eng-v4", number: 4, title: "The Enemy", author: "Pearl S. Buck", type: "Story", color: "#D50000" },
  { id: "c12-eng-v5", number: 5, title: "On the Face of It", author: "Susan Hill", type: "Play", color: "#AB47BC" },
  { id: "c12-eng-v6", number: 6, title: "Memories of Childhood", author: "Zitkala-Sa & Bama", type: "Narrative", color: "#64DD17" },
];

c12EngVistas.forEach((item) => {
  chapterContents[item.id] = {
    id: item.id,
    number: item.number,
    title: item.title,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: inline-block; background: ${item.color}22; border: 1px solid ${item.color}; border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: ${item.color}; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">VISTAS • ${item.type.toUpperCase()} • BY ${item.author.toUpperCase()}</span>
        </div>
        <h2 style="color: ${item.color}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${item.color}; padding-bottom: 8px; margin-bottom: 16px;">
          ${item.title}
        </h2>
        <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1;">
          Comprehensive supplementary story analysis, character motives, board questions, and interactive quiz for <b>${item.title}</b> are loading.
        </p>
      </div>
    `,
    htmlExercises: {
      "ex-c12-eng": `
        <div style="padding: 14px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
          <div style="background: rgba(71, 118, 230, 0.15); border-left: 5px solid ${item.color}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
            <h2 style="color: ${item.color}; font-weight: bold; margin: 0; font-size: 18px;">
              BOARD EXAMINATION QUESTIONS &amp; ANSWERS &bull; ${item.title.toUpperCase()}
            </h2>
            <span style="color: #CBD5E1; font-size: 13.5px;">Short Answers (3M) &bull; Long Answers (6M) &bull; NCERT Supplementary Solutions</span>
          </div>
          <p style="color: #CBD5E1;">Full exam solutions for ${item.title} are loading.</p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c12-eng",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 20 }, (_, idx) => ({
      id: `${item.id}-mcq-${idx + 1}`,
      question: `${item.title} - Question ${idx + 1}`,
      options: [
        `A):   Option 1 for ${item.title}`,
        `B):   Option 2 for ${item.title}`,
        `C):   Option 3 for ${item.title}`,
        `D):   Option 4 for ${item.title}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for ${item.title} Question ${idx + 1}.`,
    })),
    introduction: item.title,
  };
});

const c12EngWriting = [
  { id: "c12-eng-w1", number: 1, title: "Note-Making & Summarizing", marks: "10 Marks", section: "Reading Skills", color: "#FF512F" },
  { id: "c12-eng-w2", number: 2, title: "Advertisements & Invitations/Replies", marks: "4 Marks", section: "Writing Skills", color: "#00C6FF" },
  { id: "c12-eng-w3", number: 3, title: "Formal & Business Letter Writing", marks: "6 Marks", section: "Writing Skills", color: "#11998E" },
  { id: "c12-eng-w4", number: 4, title: "Resume & Cover Letter Writing", marks: "6 Marks", section: "Writing Skills", color: "#8E2DE2" },
  { id: "c12-eng-w5", number: 5, title: "Article, Debate, Speech & Narrative Writing", marks: "6 Marks", section: "Writing Skills", color: "#FF8A65" },
  { id: "c12-eng-w6", number: 6, title: "Grammar Editing Master Toolkit", marks: "8 Marks", section: "Grammar", color: "#FDC830" },
];

c12EngWriting.forEach((item) => {
  chapterContents[item.id] = {
    id: item.id,
    number: item.number,
    title: item.title,
    isHtmlView: true,
    htmlOverview: `
      <div style="padding: 14px; color: #F8FAFC; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: inline-block; background: ${item.color}22; border: 1px solid ${item.color}; border-radius: 6px; padding: 4px 10px; margin-bottom: 12px;">
          <span style="color: ${item.color}; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">${item.section.toUpperCase()} • ${item.marks.toUpperCase()}</span>
        </div>
        <h2 style="color: ${item.color}; font-size: 22px; font-weight: 800; border-bottom: 2px solid ${item.color}; padding-bottom: 8px; margin-bottom: 16px;">
          ${item.title}
        </h2>
        <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1;">
          Master formats, board marking schemes, solved samples, and practice tests for <b>${item.title}</b> are loading.
        </p>
      </div>
    `,
    htmlExercises: {
      "ex-c12-eng": `
        <div style="padding: 14px; color: #E0E0E0; text-align: justify; font-family: system-ui, -apple-system, sans-serif; line-height: 1.75; font-size: 16px;">
          <div style="background: rgba(243, 156, 18, 0.15); border-left: 5px solid ${item.color}; padding: 10px 16px; border-radius: 4px; margin: 15px 0 20px 0;">
            <h2 style="color: ${item.color}; font-weight: bold; margin: 0; font-size: 18px;">
              BOARD TOOLKIT &amp; PRACTICE &bull; ${item.title.toUpperCase()}
            </h2>
            <span style="color: #CBD5E1; font-size: 13.5px;">Official Marking Scheme &bull; Formats &bull; Solved Samples &bull; Practice Tests</span>
          </div>
          <p style="color: #CBD5E1;">Board formats and solved samples for ${item.title} are loading.</p>
        </div>
      `,
    },
    exercises: [
      {
        id: "ex-c12-eng",
        name: "Q & A",
        questions: [],
      },
    ],
    mcqs: Array.from({ length: 20 }, (_, idx) => ({
      id: `${item.id}-mcq-${idx + 1}`,
      question: `${item.title} - Question ${idx + 1}`,
      options: [
        `A):   Option 1 for ${item.title}`,
        `B):   Option 2 for ${item.title}`,
        `C):   Option 3 for ${item.title}`,
        `D):   Option 4 for ${item.title}`,
      ],
      correctAnswer: ["a", "b", "c", "d"][idx % 4],
      explanation: `Detailed explanation for ${item.title} Question ${idx + 1}.`,
    })),
    introduction: item.title,
  };
});

export const isChapterAvailable = (chapterId: string): boolean => {
  return !!chapterContents[chapterId];
};

export const getChapterContent = (
  chapterId: string,
): ChapterContent | undefined => {
  return chapterContents[chapterId];
};

