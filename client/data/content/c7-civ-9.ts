import { ChapterContent } from "../types";

const themeColor = "#66BB6A"; // Matches getChapterGradient for c7-civ-9 (Green)

export const c7Civ9: ChapterContent = {
  id: "c7-civ-9",
  number: 9,
  title: "Structures of the Governance in J&K and Ladakh",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Following the Jammu and Kashmir Reorganisation Act of 2019, J&K and Ladakh were created as separate Union Territories of India. This chapter details the administrative structures, roles of key executive heads like the Lieutenant Governor, and local governance divisions ranging from districts down to tehsils and villages.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. Union Territories and States</h3>
            <p style="line-height: 1.6; font-size: 15px;">India is a vast country divided into **28 States** and **8 Union Territories (UTs)**. Unlike states, which have their own elected governments, Union Territories are ruled directly by the Central Government of India.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. The Lieutenant Governor (LG)</h3>
            <p style="line-height: 1.6; font-size: 15px;">The executive head of a Union Territory is the **Lieutenant Governor (LG)**, who is appointed by the **President of India** for a five-year term. The LG supervises the administration, manages police and land laws, and ensures the implementation of central government schemes.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. Administrative Divisions</h3>
            <p style="line-height: 1.6; font-size: 15px;">For smooth administration, a Union Territory is organized into smaller units:</p>
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">District:</b> Draped under the administrative charge of the **District Collector** (or Deputy Commissioner).</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Sub-Division:</b> A district is split into sub-divisions headed by the **Sub-Divisional Magistrate (SDM)**.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Tehsil:</b> Sub-divisions are further divided into tehsils under the charge of the **Tehsildar**.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Village:</b> The smallest administrative unit where a **Patwari** maintains land records.</li>
            </ul>
        </div>
    `,
  htmlExercises: {
    "c7c9-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. ANSWER THE FOLLOWING QUESTIONS IN BRIEF:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">I. In how many Union Territories and States, India is divided into?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> India is divided into <b>28 States</b> and <b>8 Union Territories</b>.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">II. How Lieutenant Governor is appointed?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The Lieutenant Governor of a Union Territory is appointed by the <b>President of India</b>.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">III. What are the functions of Lieutenant Governor?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The main functions of the Lieutenant Governor are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>Supervising the general administration of the Union Territory.</li>
                            <li>Maintaining law and order, police administration, and public safety.</li>
                            <li>Overseeing land revenue and approving administrative files.</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">IV. Write briefly the functions of a District Collector.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The main functions of a District Collector (Deputy Commissioner) are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Maintaining Peace:</b> Overseeing law and order in the district with the help of the police.</li>
                            <li><b>Revenue Collection:</b> Collecting land revenue and updating local land records.</li>
                            <li><b>Development Work:</b> Implementing government welfare plans, education, and healthcare programs in the district.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. FILL IN THE BLANKS:</h3>
                
                <div style="margin-bottom: 15px; color: #E0E0E0; font-size: 15px; line-height: 1.6;">
                    <p>I. The principle unit of administration in a Union Territory is the district and its head is known as <b style="color: ${themeColor};">District Collector (or Deputy Commissioner)</b>.</p>
                    <p>II. The Head of administration in the Sub-division is known as <b style="color: ${themeColor};">Sub-Divisional Magistrate (SDM)</b>.</p>
                    <p>III. The Head of administration at Tehsil level is known as <b style="color: ${themeColor};">Tehsildar</b>.</p>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter introduces the governance structure of Jammu & Kashmir and Ladakh UTs, detailing LG powers and divisional administration.",
  definitions: [
    {
      term: "Union Territory",
      description:
        "A federal administrative division in India ruled directly by the Union Central Government.",
    },
    {
      term: "Lieutenant Governor",
      description:
        "The official constitutional head of a Union Territory, appointed by the President.",
    },
    {
      term: "Tehsildar",
      description:
        "An administrative officer in charge of a sub-district division (tehsil) responsible for revenue collection.",
    },
  ],
  keyPoints: [
    "India currently comprises 28 states and 8 union territories.",
    "The 2019 Reorganisation Act formed J&K and Ladakh as Union Territories.",
    "The District Collector holds the highest administrative rank in a district.",
    "A Patwari maintains agricultural and land ownership records in a village cluster.",
  ],
  formulas: [],
  crux: [
    "UTs are directly administered by the Central Government through appointed LGs.",
    "Administrative hierarchy runs: UT Head (LG) -> District (Collector) -> Sub-division (SDM) -> Tehsil (Tehsildar) -> Village (Patwari).",
    "District Collectors focus heavily on law enforcement, land revenue, and community development.",
  ],
  exercises: [
    {
      id: "c7c9-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc9-mcq-1",
      question: "India is divided into how many States?",
      options: ["25 States", "28 States", "29 States", "30 States"],
      correctAnswer: "b",
      explanation:
        "India currently comprises 28 States and 8 Union Territories.",
    },
    {
      id: "cc9-mcq-2",
      question: "How many Union Territories are there in India?",
      options: [
        "6 Union Territories",
        "8 Union Territories",
        "9 Union Territories",
        "10 Union Territories",
      ],
      correctAnswer: "b",
      explanation:
        "India has 8 Union Territories administered directly by the Union Government.",
    },
    {
      id: "cc9-mcq-3",
      question: "Who is the executive head of a Union Territory in India?",
      options: [
        "Governor",
        "Lieutenant Governor (LG)",
        "Chief Minister",
        "Mayor",
      ],
      correctAnswer: "b",
      explanation:
        "The Lieutenant Governor acts as the administrative head of a Union Territory.",
    },
    {
      id: "cc9-mcq-4",
      question:
        "The Lieutenant Governor of a Union Territory is appointed directly by the:",
      options: [
        "Prime Minister of India",
        "President of India",
        "Chief Justice of India",
        "State Assembly",
      ],
      correctAnswer: "b",
      explanation:
        "The President of India appoints the LG to govern Union Territories.",
    },
    {
      id: "cc9-mcq-5",
      question: "The head of administration in a district is the:",
      options: [
        "Tehsildar",
        "District Collector (Deputy Commissioner)",
        "Sub-Divisional Magistrate",
        "Patwari",
      ],
      correctAnswer: "b",
      explanation:
        "The District Collector (or DC) holds overall administrative charge of a district.",
    },
    {
      id: "cc9-mcq-6",
      question:
        "Who is the administrative head at the Sub-division level of a district?",
      options: [
        "Tehsildar",
        "Sub-Divisional Magistrate (SDM)",
        "District Collector",
        "Block Development Officer",
      ],
      correctAnswer: "b",
      explanation:
        "The Sub-Divisional Magistrate (SDM) manages the sub-division of a district.",
    },
    {
      id: "cc9-mcq-7",
      question: "The head of administration at the Tehsil level is the:",
      options: ["SDM", "Tehsildar", "Patwari", "Naib Tehsildar"],
      correctAnswer: "b",
      explanation:
        "The Tehsildar is the officer in charge of revenue collection at the Tehsil level.",
    },
    {
      id: "cc9-mcq-8",
      question:
        "Who maintains land records and measures crop lands at the village level?",
      options: ["Tehsildar", "Patwari", "SDM", "Police officer"],
      correctAnswer: "b",
      explanation:
        "A Patwari (or Lekhpal) maintains records of land boundaries and ownership in villages.",
    },
    {
      id: "cc9-mcq-9",
      question:
        "In which year was the Jammu and Kashmir Reorganisation Act passed?",
      options: ["2014", "2019", "2021", "2024"],
      correctAnswer: "b",
      explanation:
        "The J&K Reorganisation Act was enacted in August 2019, splitting it into J&K and Ladakh UTs.",
    },
    {
      id: "cc9-mcq-10",
      question:
        "Which is the highest judicial court of appeal in a State or Union Territory?",
      options: [
        "District Sessions Court",
        "High Court",
        "Supreme Court",
        "Lok Adalat",
      ],
      correctAnswer: "b",
      explanation:
        "The High Court is the highest judicial authority at the state or UT level in India.",
    },
  ],
  summary: [
    "The chapter 'Structures of the Governance in J&K and Ladakh' describes the division of India into states and UTs, details the powers of the Lieutenant Governor, outline district divisions under a Collector, and details rural revenue officers (Patwaris).",
  ],
};
