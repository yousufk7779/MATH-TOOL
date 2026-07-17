import { ChapterContent } from "../types";

const themeColor = "#C5E1A5"; // Matches getChapterGradient for c7-geo-4 (Very Light Green)

export const c7Geo4: ChapterContent = {
  id: "c7-geo-4",
  number: 4,
  title: "Air",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Our Earth is surrounded by a huge blanket of air called the atmosphere. It provides us with the air we breathe and protects us from the harmful rays of the sun. This chapter explores the composition and structure of the atmosphere, along with weather, climate, and rainfall patterns.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px;">Composition of the Atmosphere</h3>
            <p>The atmosphere is a mixture of many gases:</p>
            <ul style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Nitrogen (78%):</b> The most plentiful gas, essential for plant survival (plants convert it with the help of soil bacteria).</li>
                <li><b style="color: ${themeColor};">Oxygen (21%):</b> The second most plentiful gas, breathed by humans and animals.</li>
                <li><b style="color: ${themeColor};">Carbon Dioxide (0.03%):</b> Important green house gas that traps heat radiated from the Earth, creating a greenhouse effect.</li>
                <li><b style="color: ${themeColor};">Argon (0.93%) & Others (0.04%):</b> Helium, Ozone, Hydrogen, etc.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px;">Layers of the Atmosphere</h3>
            <p>The atmosphere is divided into five layers starting from the Earth's surface:</p>
            <ol style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Troposphere:</b> The lowest and most important layer (avg. height 13 km). Almost all weather phenomena (rain, fog, hailstorms) occur here.</li>
                <li><b style="color: ${themeColor};">Stratosphere:</b> Extends up to 50 km. Free from clouds and weather, making it ideal for flying aeroplanes. Contains the protective **Ozone layer**.</li>
                <li><b style="color: ${themeColor};">Mesosphere:</b> Extends up to 80 km. Meteorites burn up in this layer on entering from space.</li>
                <li><b style="color: ${themeColor};">Thermosphere:</b> Extends between 80-400 km. Helps in radio transmission as the **Ionosphere** is part of this layer.</li>
                <li><b style="color: ${themeColor};">Exosphere:</b> The uppermost layer with very thin air where light gases like Helium and Hydrogen float into space.</li>
            </ol>
        </div>
    `,
  htmlExercises: {
    "c7g4-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Answer the following questions:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) What is atmosphere?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The huge blanket of air surrounding the Earth is called the atmosphere. It protects us from harmful sun rays and provides the air we breathe.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) Which two gases make the bulk of the atmosphere?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Nitrogen (78%) and Oxygen (21%) make up the bulk of the atmosphere.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) Which gas creates green house effect in the atmosphere?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Carbon dioxide ($CO_2$) creates the greenhouse effect by trapping heat radiated from the Earth's surface.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iv) What is weather?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Weather is the hour-to-hour or day-to-day condition of the atmosphere that can change rapidly.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(v) Name three types of rainfall.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The three major types of rainfall are:
                        <ol style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>Convective rainfall</li>
                            <li>Orographic (Relief) rainfall</li>
                            <li>Cyclonic rainfall</li>
                        </ol>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(vi) What is air pressure?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Air pressure is the pressure exerted by the weight of air on the surface of the Earth.</p>
                </div>

                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. Tick the correct answer:</h3>
                
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(i) Which of the following gases protects us from harmful sun rays?</b></p>
                    <p style="margin-left: 15px;">(a) Carbon dioxide &nbsp;&nbsp;&nbsp;&nbsp; (b) Nitrogen &nbsp;&nbsp;&nbsp;&nbsp; (c) Ozone</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (c) Ozone</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(ii) The most important layer of the atmosphere is:</b></p>
                    <p style="margin-left: 15px;">(a) Troposphere &nbsp;&nbsp;&nbsp;&nbsp; (b) Thermosphere &nbsp;&nbsp;&nbsp;&nbsp; (c) Mesosphere</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) Troposphere</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iii) Which of the following layers of the atmosphere is free from clouds?</b></p>
                    <p style="margin-left: 15px;">(a) Troposphere &nbsp;&nbsp;&nbsp;&nbsp; (b) Stratosphere &nbsp;&nbsp;&nbsp;&nbsp; (c) Mesosphere</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Stratosphere</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iv) As we go up the layers of the atmosphere, the pressure:</b></p>
                    <p style="margin-left: 15px;">(a) Increases &nbsp;&nbsp;&nbsp;&nbsp; (b) Decreases &nbsp;&nbsp;&nbsp;&nbsp; (c) Remains the same</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Decreases</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(v) When precipitation comes down to the earth in the liquid form, it is called:</b></p>
                    <p style="margin-left: 15px;">(a) Cloud &nbsp;&nbsp;&nbsp;&nbsp; (b) Rain &nbsp;&nbsp;&nbsp;&nbsp; (c) Snow</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Rain</b></p>
                </div>

                <!-- Q3 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">3. Match the following:</h3>
                
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; text-align: left; font-size: 14px; line-height: 1.5;">
                    <thead>
                        <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                            <th style="padding: 8px;">Items</th>
                            <th style="padding: 8px;">Correct Matches</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(i) Trade Winds</td>
                            <td style="padding: 8px;">(e) Permanent wind</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(ii) Loo</td>
                            <td style="padding: 8px;">(f) Local wind</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iii) Monsoon</td>
                            <td style="padding: 8px;">(b) Seasonal wind</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iv) Wind</td>
                            <td style="padding: 8px;">(c) Horizontal movement of Air</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Q4 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 35px;">4. Give reasons:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) Wet clothes take longer time to dry on a humid day:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> On a humid day, the air is already full of moisture. Therefore, the rate of evaporation decreases, causing wet clothes to take longer to dry.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) Amount of insolation decreases from equator towards poles:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Sun rays fall vertically on the equator, heating a small area intensely. As we move towards the poles, the rays become slanted and spread over a larger area, causing the temperature and insolation to decrease.</p>
                </div>

            </div>
        `,
  },
  introduction:
    "In this chapter, we explore the composition of air, layers of the atmosphere, weather, climate, and rainfall.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [{ id: "c7g4-ex-all", name: "Chapter Solutions", questions: [] }],
  examples: [],
  mcqs: [
    {
      id: "cg4-mcq-1",
      question: "Which is the most plentiful gas in our atmosphere?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
      correctAnswer: "c",
      explanation:
        "Nitrogen makes up 78% of the atmosphere, making it the most abundant gas.",
    },
    {
      id: "cg4-mcq-2",
      question: "Which gas is breathed in by humans and animals for survival?",
      options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
      correctAnswer: "b",
      explanation:
        "Oxygen (21% of atmosphere) is essential for respiration in humans and animals.",
    },
    {
      id: "cg4-mcq-3",
      question:
        "Green plants use which gas from the atmosphere to make their food?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
      correctAnswer: "c",
      explanation:
        "Plants absorb carbon dioxide to perform photosynthesis and release oxygen.",
    },
    {
      id: "cg4-mcq-4",
      question:
        "The lowest and most important layer where we live and where weather occurs is the:",
      options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
      correctAnswer: "b",
      explanation:
        "Troposphere extends up to 13 km on average. All weather changes occur here.",
    },
    {
      id: "cg4-mcq-5",
      question:
        "Which layer is ideal for flying aeroplanes because it is free of clouds and weather?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"],
      correctAnswer: "b",
      explanation:
        "Stratosphere lies above the troposphere, containing no clouds or turbulent weather.",
    },
    {
      id: "cg4-mcq-6",
      question: "In which layer of the atmosphere do meteorites burn up?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      correctAnswer: "c",
      explanation:
        "The mesosphere (extending to 80 km) creates high friction, burning up incoming meteorites.",
    },
    {
      id: "cg4-mcq-7",
      question:
        "The hour-to-hour or day-to-day condition of the atmosphere is called:",
      options: ["Climate", "Weather", "Season", "Humidity"],
      correctAnswer: "b",
      explanation:
        "Weather describes the short-term state of the atmosphere, which can change quickly.",
    },
    {
      id: "cg4-mcq-8",
      question:
        "The horizontal movement of air from high-pressure areas to low-pressure areas is:",
      options: ["Wind", "Tide", "Wave", "Current"],
      correctAnswer: "a",
      explanation:
        "Wind is the horizontal flow of air driven by atmospheric pressure differences.",
    },
    {
      id: "cg4-mcq-9",
      question:
        "An example of a local hot and dry wind in northern India is the:",
      options: ["Monsoon", "Trade wind", "Loo", "Westerly"],
      correctAnswer: "c",
      explanation:
        "The Loo is a strong, dusty, hot summer wind that blows across northern India.",
    },
    {
      id: "cg4-mcq-10",
      question: "The measure of water vapor or moisture present in the air is:",
      options: ["Temperature", "Pressure", "Humidity", "Insolation"],
      correctAnswer: "c",
      explanation:
        "Humidity represents the amount of water vapor suspended in the atmosphere.",
    },
  ],
  summary: [],
};
