import { ChapterContent } from "../types";

const themeColor = "#00BCD4"; // Cyan for Geography Chapter 6

export const c7Geo6: ChapterContent = {
  id: "c7-geo-6",
  number: 6,
  title: "Human Environment Interactions",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Humans interact with their environment and modify it according to their needs. This chapter explores life in two different regions: the Amazon Basin (Tropical) and the Ganga-Brahmaputra Basin (Subtropical).</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Life in the Amazon Basin</h3>
            <p>The Amazon Basin is in South America and has a hot and wet climate throughout the year. It contains the world's largest rainforest. People here practice 'slash and burn' agriculture and grow crops like tapioca, pineapple and sweet potato.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Life in the Ganga-Brahmaputra Basin</h3>
            <p>This basin is formed by the rivers Ganga and Brahmaputra in the Indian subcontinent. The area has a monsoon climate. Agriculture is the main occupation, with paddy (rice) being the main crop. The region is also rich in wildlife, including the one-horned rhinoceros and Bengal tiger.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Tourism</h3>
            <p>Tourism is an important activity. Places like the Taj Mahal on the banks of River Yamuna, Allahabad on the confluence of Ganga and Yamuna, and Buddhist stupas in Uttar Pradesh and Bihar attract many tourists.</p>
        </div>
    `,
  htmlExercises: {
    "c7g6-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <!-- 1. Answer the following questions -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">1. Answer the following questions.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) Name the continent in which the Amazon Basin is located.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The Amazon Basin is located in the continent of South America.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) What are the crops grown by the people of the Amazon Basin?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The main crops grown are tapioca, pineapple, and sweet potato. Cash crops like coffee, maize, and cocoa are also grown.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) Name the birds that you are likely to find in the rainforests of the Amazon.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Birds like toucans, hummingbirds, and the bird of paradise with their brilliantly coloured plumage are found in the Amazon rainforests.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) What are the major cities located on the River Ganga?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Major cities located on the River Ganga include Haridwar, Kanpur, Allahabad, Varanasi, Patna, and Kolkata.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(v) Where is the one-horned rhinoceros found?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The one-horned rhinoceros is found in the Brahmaputra plain (mainly in Assam).</p>
                    </div>
                </div>

                <!-- 2. Tick the correct answer -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">2. Tick the correct answer.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(i) Toucans are a type of</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Birds</b> &nbsp;&nbsp; (b) Animals &nbsp;&nbsp; (c) Crops</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(ii) Manioc is the staple food of</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Ganga Basin &nbsp;&nbsp; (b) Africa &nbsp;&nbsp; <b style="color: ${themeColor};">(c) Amazon</b></p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iii) Kolkata is located on the river</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Orange &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Hooghly</b> &nbsp;&nbsp; (c) Bhagirathi</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iv) Deodars and firs are types of</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Coniferous trees</b> &nbsp;&nbsp; (b) Deciduous trees &nbsp;&nbsp; (c) Shrubs</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(v) Bengal tiger is found in</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Mountains &nbsp;&nbsp; (b) Amazon &nbsp;&nbsp; <b style="color: ${themeColor};">(c) Delta area</b></p>
                    </div>
                </div>

                <!-- 3. Match the following -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">3. Match the following.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(i) Cotton textile</td>
                            <td style="padding: 10px; border: 1px solid #555;">(e) Varanasi</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(ii) Maloca</td>
                            <td style="padding: 10px; border: 1px solid #555;">(a) Slanting roof</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(iii) Piranha</td>
                            <td style="padding: 10px; border: 1px solid #555;">(b) Fish</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(iv) Silkworm</td>
                            <td style="padding: 10px; border: 1px solid #555;">(d) Sericulture</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(v) Kaziranga</td>
                            <td style="padding: 10px; border: 1px solid #555;">(c) Assam</td>
                        </tr>
                    </table>
                </div>

                <!-- 4. Give reasons -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">4. Give reasons.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) The rainforests are depleting</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The rainforests are depleting because of large-scale developmental activities. Forests are being cleared for agriculture, mining, and building infrastructure like roads. This leads to the washing away of the topsoil and turns the lush forest into a barren landscape.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) Paddy is grown in the Ganga-Brahmaputra plains</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Paddy is grown in the Ganga-Brahmaputra plains because the cultivation of paddy requires sufficient water. This region receives high rainfall and has fertile alluvial soil, which is ideal for growing paddy.</p>
                    </div>
                </div>
            </div>
        `,
  },
  introduction:
    "Humans interact with their environment and modify it according to their needs.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "c7g6-mcq-1",
      question: "Toucans are a type of:",
      options: ["Animals", "Birds", "Crops", "Fishes"],
      correctAnswer: "b",
    },
    {
      id: "c7g6-mcq-2",
      question: "Manioc is the staple food of:",
      options: ["Ganga Basin", "Africa", "Amazon Basin", "Ladakh"],
      correctAnswer: "c",
    },
    {
      id: "c7g6-mcq-3",
      question: "Kolkata is located on the river:",
      options: ["Hooghly", "Ganga", "Yamuna", "Brahmaputra"],
      correctAnswer: "a",
    },
    {
      id: "c7g6-mcq-4",
      question: "Deodars and firs are types of:",
      options: [
        "Coniferous trees",
        "Deciduous trees",
        "Tropical trees",
        "Desert shrubs",
      ],
      correctAnswer: "a",
    },
    {
      id: "c7g6-mcq-5",
      question: "Bengal tiger is found in:",
      options: ["Mountains", "Amazon Basin", "Delta area", "Thar Desert"],
      correctAnswer: "c",
    },
    {
      id: "c7g6-mcq-6",
      question: "The Amazon Basin is located in which continent?",
      options: ["North America", "South America", "Africa", "Australia"],
      correctAnswer: "b",
    },
    {
      id: "c7g6-mcq-7",
      question:
        "What is the main occupation of people in the Ganga-Brahmaputra basin?",
      options: ["Mining", "Fishing", "Agriculture", "Hunting"],
      correctAnswer: "c",
    },
    {
      id: "c7g6-mcq-8",
      question: "What are 'Maloca'?",
      options: [
        "Steep slanting roof houses",
        "Type of fish",
        "A bird",
        "A crop",
      ],
      correctAnswer: "a",
    },
    {
      id: "c7g6-mcq-9",
      question: "Slash and burn is a type of:",
      options: ["House", "Agriculture", "Animal", "River"],
      correctAnswer: "b",
    },
    {
      id: "c7g6-mcq-10",
      question: "The Brahmaputra is known as ____ in Tibet.",
      options: ["Hooghly", "Hoang-Ho", "Tsangpo", "Dehang"],
      correctAnswer: "c",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "c7g6-ex-all",
      name: "Exercise",
      questions: [],
    },
  ],
  examples: [],
};
