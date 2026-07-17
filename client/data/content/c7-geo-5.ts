import { ChapterContent } from "../types";

const themeColor = "#42A5F5"; // Matches getChapterGradient for c7-geo-5 (Blue)

export const c7Geo5: ChapterContent = {
  id: "c7-geo-5",
  number: 5,
  title: "Water",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Water is a vital resource that constantly circulates between the Earth's surface and the atmosphere. This chapter explores the distribution of water on our planet, the water cycle, and the movements of ocean water like waves, tides, and currents.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">The Water Cycle</h3>
            <p>The process by which water continually changes its form and circulates between oceans, atmosphere, and land is known as the **Water Cycle**. It involves evaporation, condensation, precipitation, and runoff.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Distribution of Water Bodies</h3>
            <p>About 71% of the Earth's surface is covered with water. However, most of it is saline:</p>
            <ul style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Oceans (Saline):</b> 97.3%</li>
                <li><b style="color: ${themeColor};">Ice Caps & Glaciers (Freshwater):</b> 2.0%</li>
                <li><b style="color: ${themeColor};">Ground Water (Freshwater):</b> 0.68%</li>
                <li><b style="color: ${themeColor};">Rivers & Lakes (Freshwater):</b> Less than 0.02%</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left;">Ocean Water Movements</h3>
            <p>Ocean water is never still. Its movements are categorized into three types:</p>
            <ul style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Waves:</b> Formed when winds scrape across the ocean surface. Larger winds create larger waves. Undersea earthquakes can cause giant waves called **Tsunamis**.</li>
                <li><b style="color: ${themeColor};">Tides:</b> The rhythmic rise and fall of ocean water twice a day, caused by the gravitational pull of the sun and moon.</li>
                <li><b style="color: ${themeColor};">Ocean Currents:</b> Streams of water flowing constantly on the ocean surface in definite directions. They can be warm (originating near the equator) or cold (originating from polar regions).</li>
            </ul>
        </div>
    `,
  htmlExercises: {
    "c7g5-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Answer the following questions:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) What is precipitation?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Precipitation is any form of water (like rain, snow, sleet, or hail) falling from the clouds to the Earth's surface.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) What is water cycle?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The continuous circulation of water between oceans, atmosphere, and land through evaporation, condensation, and precipitation is called the water cycle.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) What are the factors affecting the height of the waves?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The height of waves is affected by wind speed, wind duration, and undersea disturbances like earthquakes.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iv) Which factors affect the movement of ocean water?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The movements of ocean water are affected by temperature variations, winds, the gravitational pull of the sun and moon, and salinity.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(v) What are tides and how are they caused?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Tides are the rhythmic rise and fall of ocean water twice a day. They are caused by the strong gravitational pull of the sun and the moon on the Earth.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(vi) What are ocean currents?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Ocean currents are streams of water flowing constantly on the ocean surface in definite directions. They can be warm or cold.</p>
                </div>

                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. Give reasons:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) Ocean water is salty:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Ocean water is salty because rivers dump dissolved minerals and salts from the land into the oceans. As water evaporates, the salt is left behind, increasing its concentration.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) The quality of water is deteriorating:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Water quality is deteriorating due to:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>Dumping of untreated domestic sewage and industrial chemical wastes.</li>
                            <li>Runoff containing agricultural pesticides and fertilizers.</li>
                        </ul>
                    </p>
                </div>
            </div>
        `,
  },
  introduction:
    "In this chapter, we explore the distribution of water, the water cycle, and ocean movements.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [{ id: "c7g5-ex-all", name: "Chapter Solutions", questions: [] }],
  examples: [],
  mcqs: [
    {
      id: "cg5-mcq-1",
      question:
        "The process by which water continually changes its form and circulates is the:",
      options: ["Tides cycle", "Water cycle", "Wind current", "Tsunami"],
      correctAnswer: "b",
      explanation:
        "The water cycle moves water continuously between oceans, atmosphere, and land.",
    },
    {
      id: "cg5-mcq-2",
      question: "What percentage of the Earth's total water is fresh water?",
      options: ["97.3%", "2.7%", "50.0%", "10.0%"],
      correctAnswer: "b",
      explanation:
        "Only about 2.7% of the Earth's water is freshwater, and most of it is locked in ice caps and glaciers.",
    },
    {
      id: "cg5-mcq-3",
      question: "Where is the vast majority of the Earth's water found?",
      options: [
        "In rivers",
        "In fresh lakes",
        "In oceans and seas",
        "Under the ground",
      ],
      correctAnswer: "c",
      explanation:
        "Oceans and seas hold 97.3% of the Earth's water, which is salty.",
    },
    {
      id: "cg5-mcq-4",
      question: "Why is ocean water salty?",
      options: [
        "It contains dissolved table salt",
        "It has fish waste",
        "It is caused by seaweed",
        "It has hot water",
      ],
      correctAnswer: "a",
      explanation:
        "Ocean water contains dissolved salts, mainly sodium chloride (common table salt), brought by rivers.",
    },
    {
      id: "cg5-mcq-5",
      question:
        "The rhythmic rise and fall of ocean water twice a day is called a:",
      options: ["Wave", "Tide", "Ocean current", "Tsunami"],
      correctAnswer: "b",
      explanation:
        "Tides are the regular, twice-daily rise and fall of sea levels.",
    },
    {
      id: "cg5-mcq-6",
      question: "High tides are helpful because they:",
      options: [
        "Help in navigation and fishing",
        "Cause coastal erosion",
        "Produce high winds",
        "Trigger earthquakes",
      ],
      correctAnswer: "a",
      explanation:
        "High tides raise water levels near shores, helping ships enter ports and bringing fish closer.",
    },
    {
      id: "cg5-mcq-7",
      question:
        "Ocean tides are caused by the strong gravitational attraction of the:",
      options: [
        "Sun and Moon",
        "Earth's magnetic core",
        "Wind systems",
        "Undersea volcanoes",
      ],
      correctAnswer: "a",
      explanation:
        "The gravitational pull of both the sun and the moon causes tides on Earth.",
    },
    {
      id: "cg5-mcq-8",
      question:
        "Streams of water flowing constantly on the ocean surface in definite directions are:",
      options: ["Tides", "Waves", "Ocean currents", "T Tsunamis"],
      correctAnswer: "c",
      explanation:
        "Ocean currents are like rivers flowing within oceans, influencing regional climates.",
    },
    {
      id: "cg5-mcq-9",
      question: "The Labrador Current is an example of a:",
      options: [
        "Warm current",
        "Cold current",
        "Mild current",
        "Subsurface current",
      ],
      correctAnswer: "b",
      explanation:
        "The Labrador Current is a cold current that flows from polar regions southwards.",
    },
    {
      id: "cg5-mcq-10",
      question:
        "Giant ocean waves caused by undersea earthquakes or landslides are:",
      options: ["Spring tides", "Tsunamis", "Neap tides", "Drift currents"],
      correctAnswer: "b",
      explanation:
        "Tsunamis are massive, destructive waves generated by sudden seabed movements.",
    },
  ],
  summary: [],
};
