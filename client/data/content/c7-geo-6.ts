import { ChapterContent } from "../types";

const themeColor = "#00FFFF"; // Matches getChapterGradient for c7-geo-6 (Cyan)

export const c7Geo6: ChapterContent = {
  id: "c7-geo-6",
  number: 6,
  title:
    "Human Environment Interactions - The Tropical and the Subtropical Region",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">This chapter explores the relationship between humans and their environments in two distinct regions: the tropical Amazon Basin and the subtropical Ganga-Brahmaputra Basin. It details the unique climatic conditions, flora and fauna, and human life in these regions.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px;">Life in the Amazon Basin (Tropical Region)</h3>
            <p>The Amazon Basin is located in the equatorial region of South America. It experiences a hot and wet climate throughout the year, supporting the largest rainforest in the world (the Amazon Rainforest).</p>
            <ul style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Flora & Fauna:</b> Extremely rich biodiversity, including birds like Toucans and Hummingbirds, and unique animals and fish (like the flesh-eating Piranha).</li>
                <li><b style="color: ${themeColor};">People:</b> People grow crops like tapioca, pineapple, and sweet potato. Manioc (cassava) is their staple food. Cash crops like cocoa and coffee are also grown. Many houses (Maloca) have steep slanting roofs to drain heavy rain.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px;">Life in the Ganga-Brahmaputra Basin (Subtropical Region)</h3>
            <p>Formed by the tributaries of the Ganga and Brahmaputra rivers in the Indian subcontinent, this basin lies in the subtropical zone.</p>
            <ul style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Agriculture:</b> Paddy (rice) is the main crop, cultivated in areas of high rainfall and fertile alluvial soil. Other crops include wheat, maize, sorghum, gram, and millets. Cash crops like sugarcane and jute are also grown.</li>
                <li><b style="color: ${themeColor};">Wildlife:</b> the basin has varied wildlife, including elephants, tigers, deer, and the famous one-horned rhinoceros in the Brahmaputra plain.</li>
            </ul>
        </div>
    `,
  htmlExercises: {
    "c7g6-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Answer the following questions:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) Name the continent in which the Amazon Basin is located.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Amazon Basin is located in South America.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) What are the crops grown by the people of the Amazon Basin.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> People of the Amazon Basin grow tapioca, pineapple, sweet potato, cassava (manioc), coffee, and cocoa.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) Name the birds that you are likely to find in the rainforests of the Amazon.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Toucans, hummingbirds, and birds of paradise are found in the Amazon rainforests.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iv) What are the major cities located on the River Ganga.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Major cities on the River Ganga include Haridwar, Kanpur, Allahabad, Varanasi, Patna, and Kolkata.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(v) Where is the one-horned rhinoceros found?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The one-horned rhinoceros is found in the Brahmaputra plain.</p>
                </div>

                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. Tick the correct answer:</h3>
                
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(i) Toucans are a type of:</b></p>
                    <p style="margin-left: 15px;">(a) birds &nbsp;&nbsp;&nbsp;&nbsp; (b) animals &nbsp;&nbsp;&nbsp;&nbsp; (c) crops</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) birds</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(ii) Manioc is the staple food of:</b></p>
                    <p style="margin-left: 15px;">(a) Ganga Basin &nbsp;&nbsp;&nbsp;&nbsp; (b) Africa &nbsp;&nbsp;&nbsp;&nbsp; (c) Amazon</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (c) Amazon</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iii) Kolkata is located on the river:</b></p>
                    <p style="margin-left: 15px;">(a) Orange &nbsp;&nbsp;&nbsp;&nbsp; (b) Hooghly &nbsp;&nbsp;&nbsp;&nbsp; (c) Bhagirathi</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Hooghly</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iv) Deodars and firs are a type of:</b></p>
                    <p style="margin-left: 15px;">(a) Coniferous trees &nbsp;&nbsp;&nbsp;&nbsp; (b) Deciduous trees &nbsp;&nbsp;&nbsp;&nbsp; (c) shrubs</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) Coniferous trees</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(v) Bengal tiger is found in:</b></p>
                    <p style="margin-left: 15px;">(a) mountains &nbsp;&nbsp;&nbsp;&nbsp; (b) delta area &nbsp;&nbsp;&nbsp;&nbsp; (c) Amazon</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) delta area</b></p>
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
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(i) Cotton textile</td>
                            <td style="padding: 8px;">(f) Varanasi</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(ii) Maloca</td>
                            <td style="padding: 8px;">(d) Slanting roof</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iii) Piranha</td>
                            <td style="padding: 8px;">(g) Fish</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iv) Silk worm</td>
                            <td style="padding: 8px;">(c) Sericulture</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(v) Kaziranga</td>
                            <td style="padding: 8px;">(a) Assam</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Q4 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 35px;">4. Give reasons:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) The rainforests are depleting:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Rainforests are depleting due to large-scale clearing of trees for agriculture, roads, industries, and developmental activities.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) Paddy is grown in the Ganga-Brahmaputra plains:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Paddy requires flat fertile land, alluvial soil, and abundant water/rainfall to grow. These conditions are perfectly met in the Ganga-Brahmaputra plains.</p>
                </div>

            </div>
        `,
  },
  introduction:
    "In this chapter, we study human-environment interactions in the tropical Amazon Basin and the subtropical Ganga-Brahmaputra Basin.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [{ id: "c7g6-ex-all", name: "Chapter Solutions", questions: [] }],
  examples: [],
  mcqs: [
    {
      id: "cg6-mcq-1",
      question: "The Amazon Basin is located in which continent?",
      options: ["North America", "South America", "Africa", "Asia"],
      correctAnswer: "b",
      explanation:
        "The Amazon Basin is located in the tropical equatorial region of South America.",
    },
    {
      id: "cg6-mcq-2",
      question: "The staple food of the people living in the Amazon Basin is:",
      options: ["Rice", "Wheat", "Manioc (Cassava)", "Maize"],
      correctAnswer: "c",
      explanation:
        "Manioc, also called cassava, is a root crop grown under the ground and eaten as staple food.",
    },
    {
      id: "cg6-mcq-3",
      question: "The flesh-eating fish found in the Amazon River is the:",
      options: ["Piranha", "Shark", "Dolphin", "Whale"],
      correctAnswer: "a",
      explanation:
        "Piranha is a famous freshwater fish in the Amazon River, known for its sharp teeth.",
    },
    {
      id: "cg6-mcq-4",
      question:
        "Large apartment-like houses in the Amazon with steep slanting roofs are:",
      options: ["Igloos", "Malocas", "Tents", "Caravans"],
      correctAnswer: "b",
      explanation:
        "Malocas are large communal houses constructed with steep roofs to drain heavy rain.",
    },
    {
      id: "cg6-mcq-5",
      question: "The Ganga-Brahmaputra Basin lies in which latitudinal zone?",
      options: [
        "Equatorial zone",
        "Subtropical zone",
        "Polar zone",
        "Frigid zone",
      ],
      correctAnswer: "b",
      explanation:
        "The Ganga-Brahmaputra basin is situated in the subtropical region of the northern hemisphere.",
    },
    {
      id: "cg6-mcq-6",
      question:
        "The main crop grown in the Ganga-Brahmaputra basin due to high rainfall and fertile soil is:",
      options: ["Wheat", "Paddy (Rice)", "Maize", "Sorghum"],
      correctAnswer: "b",
      explanation:
        "Paddy is the primary crop in the basin, requiring flat fertile plains and heavy water/rain.",
    },
    {
      id: "cg6-mcq-7",
      question: "The famous one-horned rhinoceros is found in the:",
      options: [
        "Amazon Basin",
        "Brahmaputra plain",
        "Ganga delta",
        "Yamuna valley",
      ],
      correctAnswer: "b",
      explanation:
        "The Brahmaputra plain (particularly Assam) is the natural habitat of the one-horned rhino.",
    },
    {
      id: "cg6-mcq-8",
      question:
        "Kolkata is an important port located on which river of the Ganga system?",
      options: ["Ganga", "Yamuna", "Hooghly", "Brahmaputra"],
      correctAnswer: "c",
      explanation:
        "Kolkata port is situated on the banks of the Hooghly River, a major distributary of Ganga.",
    },
    {
      id: "cg6-mcq-9",
      question:
        "The rearing of silkworms for the commercial production of silk is called:",
      options: ["Sericulture", "Agriculture", "Pisciculture", "Horticulture"],
      correctAnswer: "a",
      explanation:
        "Sericulture is the specialized rearing of silkworms to harvest silk threads.",
    },
    {
      id: "cg6-mcq-10",
      question:
        "Kaziranga Wildlife Sanctuary is located in which Indian state?",
      options: ["Uttar Pradesh", "West Bengal", "Assam", "Bihar"],
      correctAnswer: "c",
      explanation:
        "Kaziranga is a world heritage site located in Assam, famous for rhinoceros protection.",
    },
  ],
  summary: [],
};
