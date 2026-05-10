import { ChapterContent } from "../types";

const themeColor = "#8BC34A"; // Light Green for Geography Chapter 7

export const c7Geo7: ChapterContent = {
    id: "c7-geo-7",
    number: 7,
    title: "Life in the Deserts",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>A desert is an arid region characterized by extremely high or low temperatures and has scarce vegetation. Depending on the temperature, there can be hot deserts or cold deserts. This chapter explores life in the Sahara (Hot Desert) and Ladakh (Cold Desert).</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">The Hot Desert - Sahara</h3>
            <p>Sahara is the world's largest desert, located in North Africa. It has a scorching hot and parched dry climate. Despite the harsh conditions, people like the Bedouins and Tuaregs live here, raising livestock and growing crops like dates near oases.</p>

            <h3 style="color: ${themeColor}; text-align: left;">The Cold Desert - Ladakh</h3>
            <p>Ladakh is a cold desert lying in the Great Himalayas, on the eastern side of Jammu and Kashmir. The altitude in Ladakh varies from 3,000m to 8,000m, making the climate extremely cold and dry. People here are mainly Buddhists or Muslims, and they grow crops like barley, potatoes and peas during the summer.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Flora and Fauna</h3>
            <p>In Sahara, vegetation includes cactus, date palms and acacia. In Ladakh, because of high aridity, vegetation is sparse. There are scanty patches of grasses and shrubs for animals to graze.</p>
        </div>
    `,
    htmlExercises: {
        "c7g7-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <!-- 1. Answer the following questions -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">1. Answer the following questions.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) What are the two types of deserts found in the world?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The two types of deserts are: (1) Hot deserts (e.g., Sahara) and (2) Cold deserts (e.g., Ladakh).</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) In which continent is the Sahara desert located?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The Sahara desert is located in the continent of Africa (Northern part).</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) What are the climatic conditions of the Ladakh desert?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The climate is extremely cold and dry. In summer, day temperatures are just above zero degree and night temperatures below -30°C. In winters, it remains freezing cold below -40°C.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) What mainly attracts tourists to Ladakh?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Tourism is a major activity. Tourists are attracted by the 'Gompas' (monasteries), treks to see the meadows and glaciers, and witnessing the ceremonies and festivities of the people.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(v) What type of clothes do the people of the Sahara desert wear?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The people of Sahara wear heavy robes as protection against dust storms and hot winds.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vi) Name the trees that grow in Ladakh.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Trees like willows and poplars are commonly seen in the valleys of Ladakh. Fruit trees like apples, apricots and walnuts also bloom during the summer.</p>
                    </div>
                </div>

                <!-- 2. Tick the correct answer -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">2. Tick the correct answer.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(i) Sahara is located in which part of Africa</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Eastern &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Northern</b> &nbsp;&nbsp; (c) Western</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(ii) Sahara is what type of desert</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Cold &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Hot</b> &nbsp;&nbsp; (c) Mild</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iii) The Ladakh desert is mainly inhabited by</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Buddhists and Muslims</b> &nbsp;&nbsp; (b) Christians and Muslims &nbsp;&nbsp; (c) Hindus and Buddhists</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iv) Deserts are characterised by</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Scanty vegetation</b> &nbsp;&nbsp; (b) Heavy precipitation &nbsp;&nbsp; (c) Low evaporation</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(v) Hemis in Ladakh is a famous</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Temple &nbsp;&nbsp; (b) Church &nbsp;&nbsp; <b style="color: ${themeColor};">(c) Monastery</b></p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(vi) Egypt is famous for growing</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Wheat &nbsp;&nbsp; (b) Maize &nbsp;&nbsp; <b style="color: ${themeColor};">(c) Cotton</b></p>
                    </div>
                </div>

                <!-- 3. Match the following -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">3. Match the following.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(i) Oasis</td>
                            <td style="padding: 10px; border: 1px solid #555;">(e) Depressions with water</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(ii) Bedouins</td>
                            <td style="padding: 10px; border: 1px solid #555;">(a) Sahara</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iii) Oil</td>
                            <td style="padding: 10px; border: 1px solid #555;">(b) Libya</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iv) Gangri</td>
                            <td style="padding: 10px; border: 1px solid #555;">(d) Glacier</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(v) Lamayuru</td>
                            <td style="padding: 10px; border: 1px solid #555;">(c) Monastery</td>
                        </tr>
                    </table>
                </div>

                <!-- 4. Give reasons -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">4. Give reasons.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) There is scanty vegetation in the deserts</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Deserts have scanty vegetation because of extreme temperatures (either very hot or very cold) and low rainfall. The lack of moisture and harsh climate make it difficult for most plants to survive.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) People of the Sahara desert wear heavy robes</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> People of the Sahara desert wear heavy robes to protect themselves against the dust storms, hot winds, and the scorching sun during the day, as well as the cold nights.</p>
                    </div>
                </div>
            </div>
        `
    },
    introduction: "A desert is an arid region characterized by extremely high or low temperatures and has scarce vegetation.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7g7-mcq-1",
            question: "Sahara is located in which part of Africa?",
            options: ["Eastern", "Northern", "Western", "Southern"],
            correctAnswer: "b"
        },
        {
            id: "c7g7-mcq-2",
            question: "Sahara is what type of desert?",
            options: ["Cold", "Hot", "Mild", "Humid"],
            correctAnswer: "b"
        },
        {
            id: "c7g7-mcq-3",
            question: "The Ladakh desert is mainly inhabited by:",
            options: ["Buddhists and Muslims", "Christians", "Hindus", "Jews"],
            correctAnswer: "a"
        },
        {
            id: "c7g7-mcq-4",
            question: "Deserts are characterised by:",
            options: ["Heavy rainfall", "Scanty vegetation", "Lush forests", "High humidity"],
            correctAnswer: "b"
        },
        {
            id: "c7g7-mcq-5",
            question: "Hemis in Ladakh is a famous:",
            options: ["Temple", "Monastery", "Mosque", "Church"],
            correctAnswer: "b"
        },
        {
            id: "c7g7-mcq-6",
            question: "Egypt is famous for growing which crop?",
            options: ["Wheat", "Maize", "Cotton", "Tea"],
            correctAnswer: "c"
        },
        {
            id: "c7g7-mcq-7",
            question: "The finest cricket bats are made from the wood of ____ trees.",
            options: ["Teak", "Willow", "Oak", "Pine"],
            correctAnswer: "b"
        },
        {
            id: "c7g7-mcq-8",
            question: "What is the other name of Ladakh?",
            options: ["Khapa-chan", "Sahara", "Gobi", "Thar"],
            correctAnswer: "a"
        },
        {
            id: "c7g7-mcq-9",
            question: "Which animal provides milk for cheese and butter in Ladakh?",
            options: ["Camel", "Cow", "Yak", "Goat"],
            correctAnswer: "c"
        },
        {
            id: "c7g7-mcq-10",
            question: "Dras, one of the coldest inhabited places on earth, is located in:",
            options: ["Sahara", "Ladakh", "Siberia", "Alaska"],
            correctAnswer: "b"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7g7-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
