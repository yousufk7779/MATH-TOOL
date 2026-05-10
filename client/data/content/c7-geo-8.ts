import { ChapterContent } from "../types";

const themeColor = "#03A9F4"; // Sky Blue for Geography Chapter 8 (J&K)

export const c7Geo8: ChapterContent = {
    id: "c7-geo-8",
    number: 8,
    title: "Life in Jammu, Kashmir and Ladakh",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>The Union Territories of Jammu & Kashmir and Ladakh are known for their unique geographical features, diverse climate, and rich cultural heritage. This chapter explores the life, agriculture, and resources of these beautiful regions.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Agriculture and Crops</h3>
            <p>Agriculture is the mainstay of the people. In Kashmir, rice is the staple food, while in Jammu, wheat and maize are widely grown. Kashmir is world-famous for its high-quality Saffron, especially grown in the Pampore highlands.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Horticulture</h3>
            <p>Kashmir is often called the 'Fruit Bowl' of India. It produces a variety of temperate fruits like Apples, Pears, Walnuts, Almonds, Cherries, and Apricots. Horticulture contributes significantly to the economy of the region.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Rivers and Power Projects</h3>
            <p>The region is blessed with mighty rivers like Jhelum, Chenab, and Indus. These rivers provide immense potential for hydroelectric power. Major power projects include the Salal, Baglihar, Uri, and Dul Hasti projects.</p>
        </div>
    `,
    htmlExercises: {
        "c7g8-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <!-- 1. Answer the following questions -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">1. Answer the following questions.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) Mention the main crops grown in Jammu and Kashmir?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The main crops grown in Jammu and Kashmir are Rice, Wheat, Maize, and Saffron. Other crops include pulses, oilseeds, and fodder.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) Give a list of temperate fruits of Kashmir?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The temperate fruits of Kashmir include Apples, Pears, Walnuts, Almonds, Cherries, Apricots, and Peaches.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) Mention the local names of Jammu Plains?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The local names of Jammu Plains are 'Andarwah' and 'Bajwat'.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) Name the major power projects in Jammu and Kashmir?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The major power projects are: (1) Salal Project (Chenab) (2) Baglihar Project (Chenab) (3) Uri Project (Jhelum) and (4) Dul Hasti Project (Chenab).</p>
                    </div>
                </div>

                <!-- 2. Fill in the blanks -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">2. Fill in the blanks.</p>
                    
                    <div style="margin-bottom: 12px; margin-left: 10px; color: #E0E0E0;">
                        <p>1. The staple food of Jammu is <b style="color: ${themeColor};">Wheat/Maize</b>.</p>
                    </div>

                    <div style="margin-bottom: 12px; margin-left: 10px; color: #E0E0E0;">
                        <p>2. The staple food of Kashmir is <b style="color: ${themeColor};">Rice</b>.</p>
                    </div>

                    <div style="margin-bottom: 12px; margin-left: 10px; color: #E0E0E0;">
                        <p>3. Lidder is the main tributary of river <b style="color: ${themeColor};">Jhelum</b>.</p>
                    </div>

                    <div style="margin-bottom: 12px; margin-left: 10px; color: #E0E0E0;">
                        <p>4. Saffron is mainly found in <b style="color: ${themeColor};">Pampore</b>.</p>
                    </div>

                    <div style="margin-bottom: 12px; margin-left: 10px; color: #E0E0E0;">
                        <p>5. <b style="color: ${themeColor};">Wazwan</b> is cuisine of Kashmiri people.</p>
                    </div>
                </div>

                <!-- 3. Activity -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">3. Activity.</p>
                    
                    <div style="margin-bottom: 12px; margin-left: 10px; color: #E0E0E0;">
                        <p>1. Collect pictures showing the traditional life styles of Jammu & Kashmir.</p>
                    </div>

                    <div style="margin-bottom: 12px; margin-left: 10px; color: #E0E0E0;">
                        <p>2. Visit any hydropower projects of your region and prepare its report.</p>
                    </div>
                </div>
            </div>
        `
    },
    introduction: "Union Territories of J&K and Ladakh are known for their unique geographical features and culture.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7g8-mcq-1",
            question: "Which is the main staple food of Kashmir?",
            options: ["Wheat", "Maize", "Rice", "Barley"],
            correctAnswer: "c"
        },
        {
            id: "c7g8-mcq-2",
            question: "Saffron is mainly grown in which area of Kashmir?",
            options: ["Sopore", "Pampore", "Kupwara", "Anantnag"],
            correctAnswer: "b"
        },
        {
            id: "c7g8-mcq-3",
            question: "Lidder is a major tributary of which river?",
            options: ["Chenab", "Indus", "Jhelum", "Tawi"],
            correctAnswer: "c"
        },
        {
            id: "c7g8-mcq-4",
            question: "Which of these is a famous traditional multi-course meal of Kashmir?",
            options: ["Wazwan", "Pulao", "Biryani", "Korma"],
            correctAnswer: "a"
        },
        {
            id: "c7g8-mcq-5",
            question: "Salal Power project is built on which river?",
            options: ["Jhelum", "Chenab", "Ravi", "Indus"],
            correctAnswer: "b"
        },
        {
            id: "c7g8-mcq-6",
            question: "The local name for Jammu plains is:",
            options: ["Kandi", "Andarwah", "Pahalgam", "Gulmarg"],
            correctAnswer: "b"
        },
        {
            id: "c7g8-mcq-7",
            question: "Which fruit is world-famous and widely grown in Kashmir?",
            options: ["Mango", "Apple", "Banana", "Orange"],
            correctAnswer: "b"
        },
        {
            id: "c7g8-mcq-8",
            question: "The main crop of Jammu region is:",
            options: ["Rice", "Wheat", "Saffron", "Cotton"],
            correctAnswer: "b"
        },
        {
            id: "c7g8-mcq-9",
            question: "Baglihar Power project is located in which district?",
            options: ["Jammu", "Ramban", "Srinagar", "Leh"],
            correctAnswer: "b"
        },
        {
            id: "c7g8-mcq-10",
            question: "Which of these is a temperate fruit found in Kashmir?",
            options: ["Walnut", "Almond", "Cherry", "All of these"],
            correctAnswer: "d"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7g8-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
