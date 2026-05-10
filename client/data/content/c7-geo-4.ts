import { ChapterContent } from "../types";

const themeColor = "#4CAF50"; // Premium Green for Geography Chapter 4

export const c7Geo4: ChapterContent = {
    id: "c7-geo-4",
    number: 4,
    title: "Air",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Our earth is surrounded by a huge blanket of air called the atmosphere. All living beings on this earth depend on the atmosphere for their survival. It provides the air we breathe and protects us from the harmful effects of the sun’s rays.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Composition of the Atmosphere</h3>
            <p>Nitrogen (78%) and Oxygen (21%) are the two gases which make up the bulk of the atmosphere. Carbon dioxide, helium, ozone, argon and hydrogen are found in lesser quantities. Nitrogen is essential for plants, and Oxygen is vital for humans and animals.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Structure of the Atmosphere</h3>
            <ul style="text-align: left;">
                <li><b style="color: ${themeColor};">Troposphere:</b> Most important layer; average height 13 km. We breathe the air here.</li>
                <li><b style="color: ${themeColor};">Stratosphere:</b> Up to 50 km; free from clouds and ideal for flying aeroplanes. Contains the ozone layer.</li>
                <li><b style="color: ${themeColor};">Mesosphere:</b> Up to 80 km; meteorites burn up here.</li>
                <li><b style="color: ${themeColor};">Thermosphere:</b> 80-400 km; contains Ionosphere. Helps in radio transmission.</li>
                <li><b style="color: ${themeColor};">Exosphere:</b> Uppermost layer; very thin air.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left;">Weather and Climate</h3>
            <p>Weather is the hour-to-hour, day-to-day condition of the atmosphere. Climate is the average weather condition of a place for a longer period of time.</p>
        </div>
    `,
    htmlExercises: {
        "c7g4-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <!-- 1. Answer the following questions -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">1. Answer the following questions.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) What is atmosphere?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The huge blanket of air that surrounds the earth is called the atmosphere. It protects us from harmful sun rays and provides air for breathing.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) Which two gases make the bulk of the atmosphere?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Nitrogen (78%) and Oxygen (21%) are the two gases that make up the bulk of the atmosphere.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) Which gas creates greenhouse effect in the atmosphere?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Carbon dioxide (CO2) creates the greenhouse effect by trapping the heat radiated from the earth.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) What is weather?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Weather is the hour-to-hour, day-to-day condition of the atmosphere at a particular place and time.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(v) Name three types of rainfall.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The three types of rainfall are: (1) Convectional rainfall (2) Orographic rainfall and (3) Cyclonic rainfall.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vi) What is air pressure?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Air pressure is defined as the pressure exerted by the weight of air on the earth’s surface.</p>
                    </div>
                </div>

                <!-- 2. Tick the correct answer -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">2. Tick the correct answer.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(i) Which of the following gases protects us from harmful sun rays?</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Carbon dioxide &nbsp;&nbsp; (b) Nitrogen &nbsp;&nbsp; <b style="color: ${themeColor};">(c) Ozone</b></p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(ii) The most important layer of the atmosphere is</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Troposphere</b> &nbsp;&nbsp; (b) Thermosphere &nbsp;&nbsp; (c) Mesosphere</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iii) Which of the following layers of the atmosphere is free from clouds?</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Troposphere &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Stratosphere</b> &nbsp;&nbsp; (c) Mesosphere</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iv) As we go up the layers of the atmosphere, the pressure</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Increases &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Decreases</b> &nbsp;&nbsp; (c) Remains same</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(v) When precipitation comes down to the earth in the liquid form, it is called</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Cloud &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Rain</b> &nbsp;&nbsp; (c) Snow</p>
                    </div>
                </div>

                <!-- 3. Match the following -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">3. Match the following.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(i) Trade Winds</td>
                            <td style="padding: 10px; border: 1px solid #555;">(e) Permanent wind</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(ii) Loo</td>
                            <td style="padding: 10px; border: 1px solid #555;">(a) Local wind</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iii) Monsoon</td>
                            <td style="padding: 10px; border: 1px solid #555;">(b) Seasonal wind</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iv) Wind</td>
                            <td style="padding: 10px; border: 1px solid #555;">(c) Horizontal movement of Air</td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    },
    introduction: "Our earth is surrounded by a huge blanket of air called the atmosphere.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7g4-mcq-1",
            question: "Which gas creates the greenhouse effect in the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
            correctAnswer: "c"
        },
        {
            id: "c7g4-mcq-2",
            question: "The most important layer of the atmosphere is:",
            options: ["Stratosphere", "Mesosphere", "Troposphere", "Exosphere"],
            correctAnswer: "c"
        },
        {
            id: "c7g4-mcq-3",
            question: "Which layer of the atmosphere is free from clouds?",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            correctAnswer: "b"
        },
        {
            id: "c7g4-mcq-4",
            question: "As we go up the layers of the atmosphere, the air pressure:",
            options: ["Increases", "Decreases", "Remains constant", "Fluctuates"],
            correctAnswer: "b"
        },
        {
            id: "c7g4-mcq-5",
            question: "Precipitation in liquid form is called:",
            options: ["Snow", "Rain", "Sleet", "Hail"],
            correctAnswer: "b"
        },
        {
            id: "c7g4-mcq-6",
            question: "The coldest layer of the atmosphere is:",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            correctAnswer: "c"
        },
        {
            id: "c7g4-mcq-7",
            question: "The local wind that blows in northern India during summer is:",
            options: ["Trade Wind", "Loo", "Monsoon", "Westerlies"],
            correctAnswer: "b"
        },
        {
            id: "c7g4-mcq-8",
            question: "Which instrument is used to measure air pressure?",
            options: ["Barometer", "Thermometer", "Seismograph", "Rain Gauge"],
            correctAnswer: "a"
        },
        {
            id: "c7g4-mcq-9",
            question: "The most plentiful gas in the air is:",
            options: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
            correctAnswer: "b"
        },
        {
            id: "c7g4-mcq-10",
            question: "Which layer of the atmosphere reflects radio waves back to earth?",
            options: ["Mesosphere", "Stratosphere", "Thermosphere", "Troposphere"],
            correctAnswer: "c"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7g4-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
