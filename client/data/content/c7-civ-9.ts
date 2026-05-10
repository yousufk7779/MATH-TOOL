import { ChapterContent } from "../types";

const themeColor = "#FDC830"; // Chapter 9 theme (Gold)

export const c7Civ9: ChapterContent = {
    id: "c7-civ-9",
    number: 9,
    title: "Administration in the Union Territory",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>India is a vast country divided into States and Union Territories (UTs). While States have their own elected governments, Union Territories are administered differently, often directly by the Central Government through an appointed head.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Structure of Union Territories</h3>
            <p>Currently, India is divided into 28 States and 8 Union Territories. The head of a Union Territory is usually called the <b>Lieutenant Governor</b> (in UTs like J&K, Delhi, Puducherry) or the <b>Administrator</b>.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Lieutenant Governor (LG)</h3>
            <p>The Lieutenant Governor is appointed by the President of India. The LG acts as the representative of the President and is responsible for the administration of the UT. In UTs with a Legislative Assembly, the LG works with the Chief Minister and the Council of Ministers.</p>

            <h3 style="color: ${themeColor}; text-align: left;">District Administration</h3>
            <p>The district is the principal unit of administration. The head of the district administration is the <b>District Collector</b> (also known as Deputy Commissioner). They are responsible for maintaining law and order, collecting land revenue, and implementing government schemes at the district level.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Administrative Hierarchy</h3>
            <p>A district is further divided into Sub-divisions, Tehsils (or Blocks), and Panchayats. Each level has its own administrative head, such as the SDM at the Sub-division level and the Tehsildar at the Tehsil level.</p>
        </div>
    `,
    htmlExercises: {
        "c7c9-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <div style="margin-bottom: 30px;">
                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q1. How many Union Territories and States is India divided into?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> India is divided into 28 States and 8 Union Territories.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q2. How is the Lieutenant Governor appointed?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The LG is appointed by the <b>President of India</b>.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q3. What are the functions of the Lieutenant Governor?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The LG maintains law and order and oversees the overall administration of the UT.</p>
                    </div>

                    <div style="margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q4. Write briefly the functions of a District Collector.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The Collector maintains law and order and collects land revenue in the district.</p>
                    </div>
                </div>

                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 5px;">Q5. Fill in the blanks:</p>
                    <div style="color: #E0E0E0; margin-left: 10px;">
                        <p>1. The head of a district is the <b style="color: ${themeColor};">District Collector</b>.</p>
                        <p>2. The head of a Sub-division is the <b style="color: ${themeColor};">SDM</b>.</p>
                        <p>3. The head of a Tehsil is the <b style="color: ${themeColor};">Tehsildar</b>.</p>
                    </div>
                </div>
            </div>
        `
    },
    introduction: "India is divided into 28 States and 8 Union Territories.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7c9-mcq-1",
            question: "How many States are there in India currently?",
            options: ["25", "27", "28", "29"],
            correctAnswer: "c"
        },
        {
            id: "c7c9-mcq-2",
            question: "How many Union Territories (UTs) are there in India?",
            options: ["7", "8", "9", "10"],
            correctAnswer: "b"
        },
        {
            id: "c7c9-mcq-3",
            question: "Who is the head of a Union Territory like Jammu and Kashmir?",
            options: ["Chief Minister", "Governor", "Lieutenant Governor", "Prime Minister"],
            correctAnswer: "c"
        },
        {
            id: "c7c9-mcq-4",
            question: "Who appoints the Lieutenant Governor (LG) of a Union Territory?",
            options: ["Chief Minister", "The President of India", "Parliament", "Supreme Court"],
            correctAnswer: "b"
        },
        {
            id: "c7c9-mcq-5",
            question: "Which of these is a function of the Lieutenant Governor?",
            options: ["Act as representative of President", "Oversee administration", "Maintain law and order", "All of these"],
            correctAnswer: "d"
        },
        {
            id: "c7c9-mcq-6",
            question: "Who is the head of the district administration?",
            options: ["Tehsildar", "SDM", "District Collector", "MLA"],
            correctAnswer: "c"
        },
        {
            id: "c7c9-mcq-7",
            question: "Which official is responsible for collecting land revenue at the district level?",
            options: ["Police Commissioner", "District Collector", "Education Officer", "None of these"],
            correctAnswer: "b"
        },
        {
            id: "c7c9-mcq-8",
            question: "Who is the head of administration at the Tehsil level?",
            options: ["Naib Tehsildar", "Tehsildar", "SDM", "BDO"],
            correctAnswer: "b"
        },
        {
            id: "c7c9-mcq-9",
            question: "A Sub-division of a district is headed by which official?",
            options: ["Tehsildar", "SDM", "Collector", "Governor"],
            correctAnswer: "b"
        },
        {
            id: "c7c9-mcq-10",
            question: "Union Territories are governed directly by which government?",
            options: ["State Government", "Central Government", "Local Government", "None of these"],
            correctAnswer: "b"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7c9-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
