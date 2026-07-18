import { ChapterContent } from "../types";

const themeColor = "#00FFAB"; // Premium Green color for Geography Chapter 4

export const sstGeo4: ChapterContent = {
  id: "sst-geo-4",
  number: 4,
  title: "Agriculture",
  introduction:
    "India is an agriculturally important country. Two-thirds of its population is engaged in agricultural activities. It is a primary activity, which produces most of the food we consume and also provides raw materials for many industries. Let's learn about the different types of farming, cropping seasons, and the major crops grown in India.",
  definitions: [
    {
      term: "Primitive Subsistence Farming",
      description:
        "A type of farming practiced on small patches of land with primitive tools like hoe, dao, and digging sticks, depending entirely on monsoons and natural soil fertility.",
    },
    {
      term: "Intensive Subsistence Farming",
      description:
        "Practiced in areas of high population pressure on land. It is labor-intensive farming using high doses of biochemical inputs and irrigation to obtain higher yields.",
    },
    {
      term: "Commercial Farming",
      description:
        "Farming in which crops are grown mainly for commercial sale in the market, using modern inputs like HYV seeds, chemical fertilizers, and insecticides.",
    },
    {
      term: "Plantation Agriculture",
      description:
        "A form of commercial farming where a single crop is grown on a large area using capital-intensive inputs and migrant labor, e.g., tea, coffee, rubber.",
    },
    {
      term: "Rabi Crops",
      description:
        "Crops sown in winter (October to December) and harvested in summer (April to June), e.g., wheat, barley, peas, gram, and mustard.",
    },
    {
      term: "Kharif Crops",
      description:
        "Crops grown with the onset of monsoons (June-July) and harvested in September-October, e.g., rice, maize, jowar, bajra, cotton, and jute.",
    },
    {
      term: "Zaid Crops",
      description:
        "Short season crops grown in summer months between rabi and kharif seasons, e.g., watermelon, cucumber, and fodder crops.",
    },
    {
      term: "Leguminous Crops",
      description:
        "Crops like pulses which have root nodules containing nitrogen-fixing bacteria, helping to restore soil fertility naturally.",
    },
  ],
  keyPoints: [
    "Agriculture is the backbone of the Indian economy; two-thirds of India's population is engaged in agricultural activities.",
    "Farming types vary from Primitive Subsistence (slash and burn/Jhumming) to Intensive Subsistence and high-tech Commercial Farming.",
    "India has three cropping seasons: Rabi (winter crops), Kharif (monsoon crops), and Zaid (short summer crops).",
    "Major crops grown in India include Rice (staple crop), Wheat, Millets (Jowar, Bajra, Ragi), Maize, Pulses, Sugarcane, Oilseeds, Tea, Coffee, Horticulture, and non-food crops like Rubber, Cotton, and Jute.",
    "The government has introduced institutional reforms (Zamindari abolition, land consolidation, KCC, crop insurance, MSP) and technological reforms (Green and White revolutions) to boost production.",
    "Globalisation has posed new challenges to Indian agriculture, especially in competing with heavily subsidized foreign markets, prompting a shift toward organic farming and genetic engineering.",
  ],
  formulas: [],
  crux: [
    "India's farming types: Primitive Subsistence (monsoon-dependent), Intensive Subsistence (high population pressure), and Commercial (market-oriented).",
    "Three cropping seasons: Rabi (sown in winter), Kharif (sown in monsoon), Zaid (short summer season).",
    "Rice is the primary staple crop; Tea is a major beverage crop requiring warm, moist, frost-free climate.",
    "Pulses are leguminous crops that restore soil fertility by fixing nitrogen.",
    "Government initiatives: Land reforms, KCC, crop insurance (PMFBY), Soil Health Card, e-NAM, MSP.",
    "Globalisation brings competition; organic farming and crop diversification are key solutions.",
  ],
  summary: [
    "Agriculture is a primary activity in India, producing food and industrial raw materials. Over time, farming methods have evolved from subsistence to commercial systems to meet rising demand.",
    "India's diverse climate and soils allow the cultivation of wide-ranging food and non-food crops. Managing crop cycles (Rabi, Kharif, Zaid) and protecting soil fertility through crop rotation (using leguminous pulses) is critical.",
    "Indian agriculture faces threats from shrinking landholdings and global market competition. Continuous government intervention through reforms (like KCC and MSP) and sustainable farming practices are vital to secure the livelihoods of farmers.",
  ],
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 17px;">India is an agriculturally important country. Two-thirds of its population is engaged in agricultural activities. It is a primary activity, which produces most of the food we consume and also provides raw materials for many industries. Let's learn about the different types of farming, cropping seasons, and the major crops grown in India.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Primitive Subsistence Farming:</b> A type of farming practiced on small patches of land with primitive tools like hoe, dao, and digging sticks, depending entirely on monsoons and natural soil fertility.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Intensive Subsistence Farming:</b> Practiced in areas of high population pressure on land. It is labor-intensive farming using high doses of biochemical inputs and irrigation to obtain higher yields.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Commercial Farming:</b> Farming in which crops are grown mainly for commercial sale in the market, using modern inputs like HYV seeds, chemical fertilizers, and insecticides.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Plantation Agriculture:</b> A form of commercial farming where a single crop is grown on a large area using capital-intensive inputs and migrant labor, e.g., tea, coffee, rubber.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Rabi Crops:</b> Crops sown in winter (October to December) and harvested in summer (April to June), e.g., wheat, barley, peas, gram, and mustard.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Kharif Crops:</b> Crops grown with the onset of monsoons (June-July) and harvested in September-October, e.g., rice, maize, jowar, bajra, cotton, and jute.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Zaid Crops:</b> Short season crops grown in summer months between rabi and kharif seasons, e.g., watermelon, cucumber, and fodder crops.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Leguminous Crops:</b> Crops like pulses which have root nodules containing nitrogen-fixing bacteria, helping to restore soil fertility naturally.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
            <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
                <li style="margin-bottom: 8px;">Agriculture is the backbone of the Indian economy; two-thirds of India's population is engaged in agricultural activities.</li>
                <li style="margin-bottom: 8px;">Farming types vary from Primitive Subsistence (slash and burn/Jhumming) to Intensive Subsistence and high-tech Commercial Farming.</li>
                <li style="margin-bottom: 8px;">India has three cropping seasons: Rabi (winter crops), Kharif (monsoon crops), and Zaid (short summer crops).</li>
                <li style="margin-bottom: 8px;">Major crops grown in India include Rice (staple crop), Wheat, Millets (Jowar, Bajra, Ragi), Maize, Pulses, Sugarcane, Oilseeds, Tea, Coffee, Horticulture, and non-food crops like Rubber, Cotton, and Jute.</li>
                <li style="margin-bottom: 8px;">The government has introduced institutional reforms (Zamindari abolition, land consolidation, KCC, crop insurance, MSP) and technological reforms (Green and White revolutions) to boost production.</li>
                <li style="margin-bottom: 8px;">Globalisation has posed new challenges to Indian agriculture, especially in competing with heavily subsidized foreign markets, prompting a shift toward organic farming and genetic engineering.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
            <p style="line-height: 1.6; font-size: 16px;">Agriculture is a primary activity in India, producing food and industrial raw materials. Over time, farming methods have evolved from subsistence to commercial systems to meet rising demand. India's diverse climate and soils allow the cultivation of wide-ranging food and non-food crops. Managing crop cycles (Rabi, Kharif, Zaid) and protecting soil fertility through crop rotation (using leguminous pulses) is critical. Indian agriculture faces threats from shrinking landholdings and global market competition. Continuous government intervention through reforms (like KCC and MSP) and sustainable farming practices are vital to secure the livelihoods of farmers.</p>
        </div>
    `,
  htmlExercises: {
    "sg4-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <!-- 1. Multiple Choice Questions -->
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">1. Multiple choice questions.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(i) Which one of the following describes a system of agriculture where a single crop is grown on a large area?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Shifting Agriculture &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Plantation Agriculture</b> &nbsp;&nbsp; (c) Horticulture &nbsp;&nbsp; (d) Intensive Agriculture
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(ii) Which one of the following is a rabi crop?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Rice &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Gram</b> &nbsp;&nbsp; (c) Millets &nbsp;&nbsp; (d) Cotton
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(iii) Which one of the following is a leguminous crop?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            <b style="color: ${themeColor};">(a) Pulses</b> &nbsp;&nbsp; (b) Jawar &nbsp;&nbsp; (c) Millets &nbsp;&nbsp; (d) Sesamum
                        </p>
                    </div>
                </div>

                <!-- 2. Answer the following questions in 30 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">2. Answer the following questions in 30 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Name one important beverage crop and specify the geographical conditions required for its growth.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Tea</b> is an important beverage crop. It requires a hot, humid tropical/sub-tropical climate, deep and well-drained fertile soil rich in humus, and frequent, evenly distributed showers (150-250 cm) throughout the year without water logging.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) Name one staple crop of India and the regions where it is produced.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Rice</b> is the primary staple food crop of India. It is majorly produced in the plains of north and north-eastern India, coastal areas, deltaic regions, and irrigated parts of Punjab, Haryana, and Western Uttar Pradesh.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iii) Enlist the various institutional reform programmes introduced by the government in the interest of farmers.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Institutional reforms include:
                            <br/>• <b>Collectivisation & Land Consolidation:</b> Merging small landholdings to make farming viable, and abolishing the Zamindari system.
                            <br/>• <b>Crop Insurance:</b> Protection against crop failure due to drought, floods, and pests.
                            <br/>• <b>Financial Assistance:</b> Launching the Kisan Credit Card (KCC), Personal Accident Insurance (PAIS), and low-interest loans via Grameen Banks.
                            <br/>• <b>MSP (Minimum Support Price):</b> Fixing floor prices to protect farmers from middleman exploitation.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iv) The land under cultivation has got reduced day by day. Can you imagine its consequences?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            The reduction of cultivable land due to urbanization and industrialization has severe consequences:
                            <br/>• <b>Food Scarcity:</b> Insufficient food production to sustain the rising population.
                            <br/>• <b>Inflation:</b> Shortage of food supplies leading to high rise in crop prices.
                            <br/>• <b>Rural Unemployment:</b> Loss of agricultural land deprives farmers and laborers of their livelihood.
                            <br/>• <b>Industrial Impact:</b> Shortage of raw materials for agro-based industries.
                        </p>
                    </div>
                </div>

                <!-- 3. Answer the following questions in about 120 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">3. Answer the following questions in about 120 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 22px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Suggest the initiative taken by the government to ensure the increase in agricultural production.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            The Indian government has launched several technological and institutional initiatives to increase agricultural production:
                            <br/>• <b>Technological Boost:</b> Introduction of the **Green Revolution** (using HYV seeds, chemical fertilizers, modern machinery) and the **White Revolution** (Operation Flood to boost milk production).
                            <br/>• <b>Irrigation Expansion:</b> Implementing schemes like *Pradhan Mantri Krishi Sinchayee Yojana* to provide tube-well and canal irrigation to dry zones.
                            <br/>• <b>Kisan Credit Card (KCC):</b> Providing easy, low-interest credit to farmers for purchasing seeds, fertilizers, and machinery.
                            <br/>• <b>Crop Insurance (PMFBY):</b> Providing financial compensation for crop damage due to weather extremes and pests.
                            <br/>• <b>e-NAM (National Agriculture Market):</b> A unified online portal connecting local mandis to enable farmers to sell their produce directly to buyers across the country.
                            <br/>• <b>MSP Policy:</b> Guaranteeing a Minimum Support Price for crops, preventing distress selling.
                            <br/>• <b>Soil Health Cards:</b> Assisting farmers in testing soil health to use fertilizers optimally.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 22px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) Describe the impact of globalisation on Indian agriculture.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Globalisation has brought both positive changes and critical challenges for Indian farmers:
                            <br/>• <b>Positive Impacts:</b>
                            <br/>1. <b>Export Opportunities:</b> Farmers can export premium cash crops (spices, cotton, tea, rice) to international markets.
                            <br/>2. <b>Advanced Technology:</b> Fast access to global farming technologies, high-yield hybrid seeds, and modern food processing methods.
                            <br/>3. <b>Horticulture Growth:</b> Encouraged high-value organic farming and fruit/vegetable cultivation.
                            <br/>• <b>Negative Impacts:</b>
                            <br/>1. <b>Unequal Competition:</b> Indian farmers face heavy competition from highly subsidized agricultural goods from developed nations (like USA, EU).
                            <br/>2. <b>Rising Costs:</b> High dependence on expensive imported seeds and fertilizers has driven small farmers into debt.
                            <br/>3. <b>Ecological Crisis:</b> Excessive use of chemicals to boost exports has degraded soil fertility and depleted aquifers.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iii) Describe the geographical conditions required for the growth of rice.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Rice is the most important staple Kharif crop in India, requiring specific geographical conditions:
                            <br/>• <b>Temperature:</b> High temperature is essential, ideally **above 25°C**, with high humidity.
                            <br/>• <b>Rainfall:</b> Requires heavy rainfall, **above 100 cm** annually. In areas of lower rainfall (like Punjab and Haryana), it is successfully grown with extensive canal and tubewell irrigation.
                            <br/>• <b>Soil:</b> Rich, clayey **alluvial soil** which has high water-retention capacity is the most suitable.
                            <br/>• <b>Topography:</b> Needs flat plains so that water can stand in the fields during the early transplantation stage of the crop.
                        </p>
                    </div>
                </div>
            </div>
        `,
  },
  exercises: [
    {
      id: "sg4-ex-all",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "sg4-mcq-1",
      question:
        "Which one of the following describes a system of agriculture where a single crop is grown on a large area?",
      options: [
        "Shifting Agriculture",
        "Plantation Agriculture",
        "Horticulture",
        "Intensive Agriculture",
      ],
      correctAnswer: "b",
    },
    {
      id: "sg4-mcq-2",
      question: "Which one of the following is a rabi crop?",
      options: ["Rice", "Gram", "Millets", "Cotton"],
      correctAnswer: "b",
    },
    {
      id: "sg4-mcq-3",
      question: "Which one of the following is a leguminous crop?",
      options: ["Pulses", "Jawar", "Millets", "Sesamum"],
      correctAnswer: "a",
    },
    {
      id: "sg4-mcq-4",
      question: "The Bhoodan-Gramdan movement was initiated by:",
      options: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Vinoba Bhave",
        "Sardar Patel",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg4-mcq-5",
      question: "Which crop is known as the 'Golden Fibre'?",
      options: ["Cotton", "Silk", "Jute", "Hemp"],
      correctAnswer: "c",
    },
    {
      id: "sg4-mcq-6",
      question:
        "Which type of agriculture is practiced on small patches of land using primitive tools?",
      options: [
        "Primitive subsistence farming",
        "Commercial farming",
        "Intensive subsistence farming",
        "Plantation farming",
      ],
      correctAnswer: "a",
    },
    {
      id: "sg4-mcq-7",
      question: "Which country is the largest producer of pulses in the world?",
      options: ["India", "China", "USA", "Brazil"],
      correctAnswer: "a",
    },
    {
      id: "sg4-mcq-8",
      question: "What is the rearing of silkworms for the production of silk called?",
      options: ["Horticulture", "Pisciculture", "Sericulture", "Floriculture"],
      correctAnswer: "c",
    },
    {
      id: "sg4-mcq-9",
      question:
        "What is the primitive subsistence agriculture practiced in the north-eastern states of India called?",
      options: ["Milpa", "Ladang", "Jhumming", "Roca"],
      correctAnswer: "c",
    },
    {
      id: "sg4-mcq-10",
      question: "Which crop is known as the 'Queen of Beverages'?",
      options: ["Tea", "Coffee", "Cocoa", "Milk"],
      correctAnswer: "a",
    },
  ],
};
