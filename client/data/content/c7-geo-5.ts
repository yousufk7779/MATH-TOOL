import { ChapterContent } from "../types";

const themeColor = "#2196F3"; // Blue for Geography Chapter 5

export const c7Geo5: ChapterContent = {
    id: "c7-geo-5",
    number: 5,
    title: "Water",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Water is a vital resource. The sun’s heat causes evaporation of water into vapour. When the water vapour cools down, it condenses and forms clouds. From there it may fall on the land or sea in the form of rain, snow or sleet. The process by which water continually changes its form and circulates between oceans, atmosphere and land is known as the <b>water cycle</b>.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Distribution of Water Bodies</h3>
            <p>Three-fourth of the earth's surface is covered by water. However, most of it is salty ocean water (97.3%). Only 2.7% is fresh water, found in ice-caps, ground water, rivers, and lakes. Salinity is the amount of salt in grams present in 1000 grams of water.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Ocean Circulation</h3>
            <p>Ocean water is never still. It moves continuously. The movements that occur in oceans can be broadly categorised as Waves, Tides and Currents.</p>
            <ul style="text-align: left;">
                <li><b style="color: ${themeColor};">Waves:</b> Formed when winds scrape across the ocean surface. During a storm, very large waves are formed (Tsunami).</li>
                <li><b style="color: ${themeColor};">Tides:</b> The rhythmic rise and fall of ocean water twice a day. High tide helps in navigation and fishing.</li>
                <li><b style="color: ${themeColor};">Ocean Currents:</b> Streams of water flowing constantly on the ocean surface in definite directions. They can be warm (e.g., Gulf Stream) or cold (e.g., Labrador Ocean current).</li>
            </ul>
        </div>
    `,
    htmlExercises: {
        "c7g5-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <!-- 1. Answer the following questions -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">1. Answer the following questions.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) What is precipitation?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Falling of moisture in the form of rainfall, snow, sleet, or hail on the earth's surface is called precipitation.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) What is water cycle?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The process by which water continually changes its form and circulates between oceans, atmosphere and land is known as the water cycle.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) What are the factors affecting the height of the waves?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The height of the waves is affected by the speed of the wind, the duration of the wind, and the distance it blows over the water.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) Which factors affect the movement of ocean water?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Temperature, salinity, gravity of sun and moon, and wind are the main factors affecting the movement of ocean water.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(v) What are tides and how are they caused?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Tides are the rhythmic rise and fall of ocean water twice a day. They are caused by the strong gravitational pull exerted by the sun and the moon on the earth's surface.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vi) What are ocean currents?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Ocean currents are streams of water flowing constantly on the ocean surface in definite directions.</p>
                    </div>
                </div>

                <!-- 2. Give reasons -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">2. Give reasons.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) Ocean water is salty</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Ocean water is salty because it contains a large amount of dissolved salts. Most of the salt is sodium chloride or the common table salt that we eat.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) The quality of water is deteriorating</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The quality of water is deteriorating due to human activities like dumping of industrial waste, discharge of untreated sewage, and excessive use of fertilizers and pesticides which pollute water bodies.</p>
                    </div>
                </div>

                <!-- 3. Tick the correct answer -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">3. Tick the correct answer.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(i) The process by which water continually changes its form and circulates between oceans, atmosphere and land</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Water cycle</b> &nbsp;&nbsp; (b) Tides &nbsp;&nbsp; (c) Ocean currents</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(ii) Generally the warm ocean currents originate near</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Poles &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Equator</b> &nbsp;&nbsp; (c) None of these</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iii) The rhythmic rise and fall of ocean water twice in a day is called</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Tide</b> &nbsp;&nbsp; (b) Ocean current &nbsp;&nbsp; (c) Wave</p>
                    </div>
                </div>

                <!-- 4. Match the following -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">4. Match the following.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(i) Caspian Sea</td>
                            <td style="padding: 10px; border: 1px solid #555;">(a) Largest lake</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(ii) Tide</td>
                            <td style="padding: 10px; border: 1px solid #555;">(b) Periodic rise and fall of water</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iii) Tsunami</td>
                            <td style="padding: 10px; border: 1px solid #555;">(c) Strong seismic waves</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iv) Ocean currents</td>
                            <td style="padding: 10px; border: 1px solid #555;">(d) Streams of water moving along definite paths</td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    },
    introduction: "Water is a vital resource.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7g5-mcq-1",
            question: "The process by which water continually changes its form is:",
            options: ["Water cycle", "Tide", "Ocean current", "Precipitation"],
            correctAnswer: "a"
        },
        {
            id: "c7g5-mcq-2",
            question: "Generally, warm ocean currents originate near the:",
            options: ["Poles", "Equator", "Tropic of Cancer", "None of these"],
            correctAnswer: "b"
        },
        {
            id: "c7g5-mcq-3",
            question: "The rhythmic rise and fall of ocean water twice a day is called:",
            options: ["Wave", "Tide", "Ocean current", "Tsunami"],
            correctAnswer: "b"
        },
        {
            id: "c7g5-mcq-4",
            question: "Which is the largest lake in the world?",
            options: ["Victoria Lake", "Superior Lake", "Caspian Sea", "Dead Sea"],
            correctAnswer: "c"
        },
        {
            id: "c7g5-mcq-5",
            question: "The Dead Sea is located in which country?",
            options: ["India", "Israel", "USA", "Egypt"],
            correctAnswer: "b"
        },
        {
            id: "c7g5-mcq-6",
            question: "Tsunami is a Japanese word that means:",
            options: ["Big Wave", "Harbour waves", "Stormy water", "Volcanic wave"],
            correctAnswer: "b"
        },
        {
            id: "c7g5-mcq-7",
            question: "Salinity is the amount of salt in grams present in ____ grams of water.",
            options: ["100", "500", "1000", "2000"],
            correctAnswer: "c"
        },
        {
            id: "c7g5-mcq-8",
            question: "High tides are helpful for which of these?",
            options: ["Navigation", "Fishing", "Electricity generation", "All of these"],
            correctAnswer: "d"
        },
        {
            id: "c7g5-mcq-9",
            question: "The Labrador Ocean current is a:",
            options: ["Warm current", "Cold current", "Neutral current", "None of these"],
            correctAnswer: "b"
        },
        {
            id: "c7g5-mcq-10",
            question: "The Gulf Stream is a famous example of a:",
            options: ["Cold current", "Warm current", "Tsunami", "Tide"],
            correctAnswer: "b"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7g5-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
