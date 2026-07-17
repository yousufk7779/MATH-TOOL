import { ChapterContent } from "../types";

const themeColor = "#FDC830"; // Matches getChapterGradient for c7-geo-7 (Gold)

export const c7Geo7: ChapterContent = {
  id: "c7-geo-7",
  number: 7,
  title: "Life in the Deserts",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">A desert is an arid region characterized by extremely high or low temperatures and has scarce vegetation. Depending on the temperatures, there can be hot deserts or cold deserts. People inhabit these lands wherever little water is available to practice agriculture.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. The Hot Desert – Sahara</h3>
            <p style="line-height: 1.6; font-size: 15px;">The Sahara Desert covers a large part of North Africa. It is the world's largest hot desert, covering an area of about 8.54 million square kilometers. It touches eleven countries: Algeria, Chad, Egypt, Libya, Mali, Mauritania, Morocco, Niger, Sudan, Tunisia, and Western Sahara.</p>
            
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Climate:</b> Scorching hot and parch dry, with a very short rainy season. The sky is cloudless and clear. Day temperatures can soar as high as 50°C, heating up the sand and bare rocks, which then radiate heat. Nights can be freezing cold, with temperatures dropping near 0°C.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Flora & Fauna:</b> Vegetation includes cactus, date palms, and acacias. Green oases (islands with water and date palms) are found in some areas. Camels, hyenas, jackals, foxes, scorpions, and various species of snakes and lizards are common.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">People:</b> Inhabited by nomadic tribes like the <b>Bedouins</b> and <b>Tuaregs</b>. They rear livestock for milk, leather, and hair (used to make carpets, blankets, and clothes). They wear <b>heavy robes</b> to protect themselves against dust storms and hot winds. Settled populations live near oases and the Nile Valley, growing crops like date palms, rice, wheat, barley, and beans. Egypt is world-famous for growing cotton.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Mineral Resources:</b> The discovery of oil in Algeria, Libya, and Egypt has transformed the region. Other key minerals found here include iron, phosphorus, manganese, and uranium.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. The Cold Desert – Ladakh</h3>
            <p style="line-height: 1.6; font-size: 15px;">Ladakh is a cold desert located in the Great Himalayas on the eastern side of Jammu and Kashmir. Enclosed by the Karakoram Range in the north and the Zanskar Mountains in the south, it has an average altitude ranging from 3,000m in Kargil to over 8,000m in the Karakoram.</p>
            
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Climate:</b> Due to the high altitude, the air is thin and the climate is extremely cold and dry. Summer day temperatures are just above 0°C, and night temperatures fall below -30°C. Winters are severe, with temperatures remaining below -40°C. It lies in the rain shadow of the Himalayas and receives less than 10 cm of rainfall annually. Burning solar heat and freezing winds occur simultaneously.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Flora & Fauna:</b> Vegetation is extremely sparse. Scanty patches of grass and shrubs support grazing animals. Groves of willows and poplars grow in the valleys. Summer brings fruit blooms of apples, apricots, and walnuts. Wildlife includes migratory birds (robins, redstarts, ravens, hoopoes), wild goats, wild sheep, yaks, and special dogs. Yak's milk is used to make cheese and butter, and animal hair is used for woollens.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">People & Culture:</b> The population is predominantly Muslim and Buddhist. The region is famous for its Buddhist monasteries (<b>Gompas</b>) such as Hemis, Thiksey, Shey, and Lamayuru.</li>
                <li style="margin-bottom: 8px;"><b style="color: ${themeColor};">Tourism & Economy:</b> Summer is the primary agricultural season, where people grow barley, potatoes, peas, beans, and turnips. In winter, people engage in festivities. Leh, the capital, is well-connected by road and air. Tourism is a key industry, with visitors flocking to see the monasteries, glaciers (e.g., Gangri Glacier), treks, and local festivals.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Hot Desert (Sahara) vs. Cold Desert (Ladakh)</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px; color: #E0E0E0; text-align: left; font-size: 14px; line-height: 1.5;">
                <thead>
                    <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                        <th style="padding: 8px; color: ${themeColor};">Feature</th>
                        <th style="padding: 8px; color: ${themeColor};">Sahara Desert</th>
                        <th style="padding: 8px; color: ${themeColor};">Ladakh Desert</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 8px; font-weight: bold;">Type</td>
                        <td style="padding: 8px;">Hot Desert</td>
                        <td style="padding: 8px;">Cold Desert</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 8px; font-weight: bold;">Location</td>
                        <td style="padding: 8px;">Northern Africa (11 Countries)</td>
                        <td style="padding: 8px;">Great Himalayas, India</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 8px; font-weight: bold;">Climate</td>
                        <td style="padding: 8px;">Scorching hot and dry; summers reach 50°C</td>
                        <td style="padding: 8px;">Freezing cold and dry; winters below -40°C</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 8px; font-weight: bold;">Key Vegetation</td>
                        <td style="padding: 8px;">Cactus, date palms, acacia</td>
                        <td style="padding: 8px;">Willows, poplars, apple, apricot, walnut</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 8px; font-weight: bold;">Main Inhabitants</td>
                        <td style="padding: 8px;">Nomadic Bedouins and Tuaregs</td>
                        <td style="padding: 8px;">Buddhists and Muslims</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
  htmlExercises: {
    "c7g7-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Answer the following questions:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(a) What are the two types of deserts found in the world?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The two types of deserts are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Hot Deserts:</b> Very high temperatures and dry climate (e.g., Sahara Desert).</li>
                            <li><b>Cold Deserts:</b> Freezing temperatures and dry climate (e.g., Ladakh Desert).</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(b) In which continent is the Sahara desert located?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The Sahara desert is located in <b>Africa</b> (covering Northern Africa).</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(c) What are the climatic conditions of the Ladakh desert?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The climatic conditions of the Ladakh desert are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Extreme Cold and Dryness:</b> Winter temperatures stay below -40°C due to high altitude.</li>
                            <li><b>Thin Air:</b> The air is thin, causing the sun's heat to be felt intensely.</li>
                            <li><b>Low Rainfall:</b> Receives less than 10 cm of rainfall annually as it lies in the rain shadow of the Himalayas.</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(d) What mainly attracts tourists to Ladakh?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Tourists are mainly attracted to Ladakh by:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>Visiting Buddhist monasteries (<b>Gompas</b>) like Hemis and Thiksey.</li>
                            <li>Trekking to see glaciers, meadows, and high passes.</li>
                            <li>Witnessing local cultural festivals and ceremonies.</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(e) What type of clothes the people of the Sahara desert wear?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The people of the Sahara desert wear <b>heavy, loose robes</b> to protect themselves from the hot sun, dust storms, and sandy winds.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(f) Name the trees that grow in Ladakh.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Trees that grow in Ladakh include willows, poplars, and fruit trees like apples, apricots, and walnuts.</p>
                </div>

                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. Tick the correct answer:</h3>
                
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(i) Sahara is located in which part of Africa?</b></p>
                    <p style="margin-left: 15px;">(a) eastern &nbsp;&nbsp;&nbsp;&nbsp; (b) northern &nbsp;&nbsp;&nbsp;&nbsp; (c) western</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) northern</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(ii) Sahara is what type of desert?</b></p>
                    <p style="margin-left: 15px;">(a) cold &nbsp;&nbsp;&nbsp;&nbsp; (b) hot &nbsp;&nbsp;&nbsp;&nbsp; (c) mild</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) hot</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iii) The Ladakh desert is mainly inhabited by:</b></p>
                    <p style="margin-left: 15px;">(a) Christians and Muslims &nbsp;&nbsp;&nbsp;&nbsp; (b) Buddhists and Muslims &nbsp;&nbsp;&nbsp;&nbsp; (c) Christians and Buddhists</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Buddhists and Muslims</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iv) Deserts are characterised by:</b></p>
                    <p style="margin-left: 15px;">(a) scanty vegetation &nbsp;&nbsp;&nbsp;&nbsp; (b) heavy precipitation &nbsp;&nbsp;&nbsp;&nbsp; (c) low evaporation</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) scanty vegetation</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(v) Hemis in the Ladakh is a famous:</b></p>
                    <p style="margin-left: 15px;">(a) temple &nbsp;&nbsp;&nbsp;&nbsp; (b) church &nbsp;&nbsp;&nbsp;&nbsp; (c) monastery</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (c) monastery</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(vi) Egypt is famous for growing:</b></p>
                    <p style="margin-left: 15px;">(a) wheat &nbsp;&nbsp;&nbsp;&nbsp; (b) maize &nbsp;&nbsp;&nbsp;&nbsp; (c) cotton</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (c) cotton</b></p>
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
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(i) Oasis</td>
                            <td style="padding: 8px;">(d) depressions with water</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(ii) Bedouins</td>
                            <td style="padding: 8px;">(f) Sahara</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iii) Oil</td>
                            <td style="padding: 8px;">(a) Libya</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iv) Gangri</td>
                            <td style="padding: 8px;">(c) glacier</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(v) Lamayuru</td>
                            <td style="padding: 8px;">(b) monastery</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Q4 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 35px;">4. Give reasons:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) There is scanty vegetation in the deserts:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Vegetation is scanty in deserts due to extremely low rainfall, extreme temperatures (very hot or freezing cold), and nutrient-poor, dry soil.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) People of the Sahara desert wear heavy robes:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> They wear heavy robes to protect their bodies from the intense solar heat, dust storms, and blowing hot winds containing sand.</p>
                </div>

            </div>
        `,
  },
  introduction:
    "In this chapter, we explore how people, plants, and animals adapt to the extreme environments of the Hot Desert (Sahara) and the Cold Desert (Ladakh).",
  definitions: [
    {
      term: "Desert",
      description:
        "An arid region characterized by extremely high or low temperatures and scarce vegetation.",
    },
    {
      term: "Oasis",
      description:
        "A fertile area in a desert where water is found at the surface, often supporting vegetation and settlements.",
    },
    {
      term: "Gompa",
      description:
        "A traditional Buddhist monastery or temple found in Tibet and Ladakh.",
    },
    {
      term: "Depressions",
      description:
        "Low-lying areas in deserts formed when winds blow away the sand, exposing underground water channels to form oases.",
    },
  ],
  keyPoints: [
    "Deserts can be classified as hot deserts (like Sahara) or cold deserts (like Ladakh) depending on the temperature.",
    "The Sahara is the world's largest hot desert, touching eleven countries in Northern Africa.",
    "Bedouins and Tuaregs are nomadic tribes of the Sahara desert who wear heavy protective robes.",
    "Ladakh is a high-altitude cold desert located in the Great Himalayas, experiencing extremely cold and dry climate.",
    "The Ladakhi culture is characterized by several famous Buddhist monasteries called Gompas, such as Hemis and Lamayuru.",
    "Tourism is a major economic activity in Ladakh, driven by visitors checking out monasteries, glaciers, and local festivals.",
  ],
  formulas: [],
  crux: [
    "Deserts have extreme temperatures, low rainfall, and scanty vegetation.",
    "Sahara: Hot desert, nomadic tribes (Bedouins), heavy robes for protection, oil & mineral discovery.",
    "Ladakh: Cold desert, high altitude, thin atmosphere, Buddhist monasteries (Gompas), summer agriculture.",
  ],
  exercises: [
    {
      id: "c7g7-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cg7-mcq-1",
      question: "Sahara is the world's largest:",
      options: ["Cold desert", "Hot desert", "Coastal desert", "Forest area"],
      correctAnswer: "b",
      explanation:
        "Sahara is the largest hot desert on Earth, covering 8.54 million square kilometers.",
    },
    {
      id: "cg7-mcq-2",
      question: "In which continent is the Sahara desert located?",
      options: ["Asia", "Africa", "South America", "Europe"],
      correctAnswer: "b",
      explanation:
        "The Sahara Desert occupies a major portion of Northern Africa.",
    },
    {
      id: "cg7-mcq-3",
      question:
        "Which of the following are nomadic tribes of the Sahara desert?",
      options: ["Bedouins and Tuaregs", "Sherpas", "Bhils", "Gonds"],
      correctAnswer: "a",
      explanation:
        "Bedouins and Tuaregs are historical nomadic groups who rear livestock in the Sahara.",
    },
    {
      id: "cg7-mcq-4",
      question: "An oasis in a desert is a fertile place where:",
      options: [
        "Underground water reaches the surface",
        "There is no sand at all",
        "It snows heavily",
        "Volcanoes erupt",
      ],
      correctAnswer: "a",
      explanation:
        "Oases are formed when depressions are dug out by wind, allowing groundwater to form pools.",
    },
    {
      id: "cg7-mcq-5",
      question:
        "Ladakh is a high-altitude cold desert located in which mountain range?",
      options: ["Andes", "Rockies", "Himalayas", "Alps"],
      correctAnswer: "c",
      explanation:
        "Ladakh is situated on the eastern side of the Jammu & Kashmir region, in the Great Himalayas.",
    },
    {
      id: "cg7-mcq-6",
      question:
        "Which of these is a famous Buddhist monastery (Gompa) in Ladakh?",
      options: ["Golden Temple", "Hemis", "Sun Temple", "Lotus Temple"],
      correctAnswer: "b",
      explanation:
        "Hemis is one of the largest and most prestigious Buddhist monasteries in Ladakh.",
    },
    {
      id: "cg7-mcq-7",
      question:
        "The milk of which animal is used to make cheese and butter in Ladakh?",
      options: ["Camel", "Yak", "Sheep", "Donkey"],
      correctAnswer: "b",
      explanation:
        "Yaks are adapted to the cold, and their milk is vital for Ladakhi dairy products.",
    },
    {
      id: "cg7-mcq-8",
      question: "Ladakh is also known locally as 'Khapa-chan', which means:",
      options: ["Snow land", "Dry land", "Gold land", "High pass"],
      correctAnswer: "a",
      explanation:
        "'Khapa-chan' translates to 'snow land' in the local language, referring to its cold nature.",
    },
    {
      id: "cg7-mcq-9",
      question:
        "Which tree is commonly grown in Ladakh and is famous for making high-quality cricket bats?",
      options: ["Willow", "Teak", "Pine", "Rosewood"],
      correctAnswer: "a",
      explanation:
        "Willow trees grow well in Ladakh valleys, and their wood is prized for manufacturing cricket bats.",
    },
    {
      id: "cg7-mcq-10",
      question:
        "The warm, light wool obtained from the Chiru (Tibetan Antelope) is called:",
      options: ["Pashmina", "Shahtoosh", "Angora", "Merino"],
      correctAnswer: "b",
      explanation:
        "Shahtoosh is a highly prized, ultra-fine wool woven from the underfur of the Chiru.",
    },
  ],
  summary: [
    "The chapter 'Life in the Deserts' presents a comparative study of the hot Sahara Desert and the cold Ladakh Desert. It details the adaptations of plants, animals, and humans to extreme aridity and temperatures, demonstrating how they utilize limited water and resources in harmony with nature.",
  ],
};
