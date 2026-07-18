import { ChapterContent } from "../types";

const themeColor = "#FDC830"; // Blue color for Geography Chapter 5

export const sstGeo5: ChapterContent = {
  id: "sst-geo-5",
  number: 5,
  title: "Minerals and Energy Resources",
  introduction:
    "Think about the toothbrush you use, the bus you ride, and the electricity that powers your phone. All of these depend heavily on minerals extracted from the earth. Minerals are an indispensable part of our lives, and in this chapter, we will learn about their occurrence, classification, and conservation.",
  definitions: [
    {
      term: "Mineral",
      description:
        "A homogeneous, naturally occurring inorganic substance with a definable internal crystalline structure, forming the building blocks of rocks.",
    },
    {
      term: "Ore",
      description:
        "An accumulation of any mineral mixed with other elements, containing a high enough concentration to make its extraction economically viable.",
    },
    {
      term: "Ferrous Minerals",
      description:
        "Metallic minerals that contain iron, accounting for about three-fourths of the total value of metallic mineral production in India, e.g., iron ore, manganese.",
    },
    {
      term: "Non-Ferrous Minerals",
      description:
        "Metallic minerals that do not contain iron, playing a vital role in electrical, engineering, and metallurgical industries, e.g., copper, bauxite, lead, gold.",
    },
    {
      term: "Non-Metallic Minerals",
      description:
        "Minerals that do not contain metals, such as mica, salt, potash, sulphur, granite, limestone, and marble.",
    },
    {
      term: "Conventional Energy",
      description:
        "Traditional sources of energy that have been in use for a long time and are exhaustible, e.g., coal, petroleum, natural gas, firewood.",
    },
    {
      term: "Non-Conventional Energy",
      description:
        "Modern, renewable sources of energy that are inexhaustible and eco-friendly, e.g., solar energy, wind energy, tidal energy, biogas.",
    },
    {
      term: "Placer Deposits",
      description:
        "Certain minerals that occur as alluvial deposits in sands of valley floors and the base of hills, washed down by water, e.g., gold, silver, tin, platinum.",
    },
  ],
  keyPoints: [
    "Minerals are found in different types of rocks (igneous, metamorphic, sedimentary) and are formed through weathering, decomposition, or precipitation.",
    "Ferrous minerals like iron ore are the backbone of industrial development, with major belts in Odisha-Jharkhand, Durg-Bastar-Chandrapur, Bellary-Chitradurga-Chikmagalur-Tumkur, and Maharashtra-Goa.",
    "Copper is indispensable in electrical cables and electronics due to its high conductivity and ductility, with major mines in Khetri (Rajasthan) and Balaghat (Madhya Pradesh).",
    "Bauxite decomposes into alumina, which is then processed into aluminium, valued for its strength, lightness, and conductivity.",
    "Energy resources are classified into Conventional (coal, petroleum, natural gas) and Non-Conventional (solar, wind, biogas, tidal, geothermal).",
    "Coal is the most abundantly available fossil fuel in India, classified into Peat, Lignite, Bituminous, and Anthracite, and found in Gondwana and Tertiary rock series.",
    "India has massive potential for non-conventional energy, especially solar energy (abundant sunshine) and wind energy (with the largest cluster in Tamil Nadu from Nagarcoil to Madurai).",
  ],
  formulas: [],
  crux: [
    "Minerals occur in igneous/metamorphic cracks (veins/lodes), sedimentary beds, and placer deposits.",
    "Ferrous minerals contain iron (iron ore, manganese); non-ferrous do not (copper, bauxite).",
    "Mica is essential for electronics due to its insulating properties; Koderma is the leading producer.",
    "Thorium is extracted from Monazite sands of Kerala.",
    "Coal forms: Anthracite (highest quality), Bituminous (most popular), Lignite (brown coal), Peat (low carbon).",
    "Solar and wind energy are critical non-conventional, renewable alternatives.",
  ],
  summary: [
    "Minerals and energy are fundamental to industrial growth and daily life. They are unevenly distributed and exist in various rock types depending on geological conditions.",
    "Fossil fuels are exhaustible and cause environmental damage, necessitating a transition toward clean, renewable, and non-conventional energy sources like solar and wind power.",
    "Mineral conservation is crucial because they are finite, non-renewable, and take millions of years to form. Efficient extraction and recycling of metals are key practices.",
  ],
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 17px;">Think about the toothbrush you use, the bus you ride, and the electricity that powers your phone. All of these depend heavily on minerals extracted from the earth. Minerals are an indispensable part of our lives, and in this chapter, we will learn about their occurrence, classification, and conservation.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Mineral:</b> A homogeneous, naturally occurring inorganic substance with a definable internal crystalline structure, forming the building blocks of rocks.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Ore:</b> An accumulation of any mineral mixed with other elements, containing a high enough concentration to make its extraction economically viable.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Ferrous Minerals:</b> Metallic minerals that contain iron, accounting for about three-fourths of the total value of metallic mineral production in India, e.g., iron ore, manganese.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Non-Ferrous Minerals:</b> Metallic minerals that do not contain iron, playing a vital role in electrical, engineering, and metallurgical industries, e.g., copper, bauxite, lead, gold.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Non-Metallic Minerals:</b> Minerals that do not contain metals, such as mica, salt, potash, sulphur, granite, limestone, and marble.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Conventional Energy:</b> Traditional sources of energy that have been in use for a long time and are exhaustible, e.g., coal, petroleum, natural gas, firewood.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Non-Conventional Energy:</b> Modern, renewable sources of energy that are inexhaustible and eco-friendly, e.g., solar energy, wind energy, tidal energy, biogas.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Placer Deposits:</b> Certain minerals that occur as alluvial deposits in sands of valley floors and the base of hills, washed down by water, e.g., gold, silver, tin, platinum.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
            <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
                <li style="margin-bottom: 8px;">Minerals are found in different types of rocks (igneous, metamorphic, sedimentary) and are formed through weathering, decomposition, or precipitation.</li>
                <li style="margin-bottom: 8px;">Ferrous minerals like iron ore are the backbone of industrial development, with major belts in Odisha-Jharkhand, Durg-Bastar-Chandrapur, Bellary-Chitradurga-Chikmagalur-Tumkur, and Maharashtra-Goa.</li>
                <li style="margin-bottom: 8px;">Copper is indispensable in electrical cables and electronics due to its high conductivity and ductility, with major mines in Khetri (Rajasthan) and Balaghat (Madhya Pradesh).</li>
                <li style="margin-bottom: 8px;">Bauxite decomposes into alumina, which is then processed into aluminium, valued for its strength, lightness, and conductivity.</li>
                <li style="margin-bottom: 8px;">Energy resources are classified into Conventional (coal, petroleum, natural gas) and Non-Conventional (solar, wind, biogas, tidal, geothermal).</li>
                <li style="margin-bottom: 8px;">Coal is the most abundantly available fossil fuel in India, classified into Peat, Lignite, Bituminous, and Anthracite, and found in Gondwana and Tertiary rock series.</li>
                <li style="margin-bottom: 8px;">India has massive potential for non-conventional energy, especially solar energy (abundant sunshine) and wind energy (with the largest cluster in Tamil Nadu from Nagarcoil to Madurai).</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
            <p style="line-height: 1.6; font-size: 16px;">Minerals and energy are fundamental to industrial growth and daily life. They are unevenly distributed and exist in various rock types depending on geological conditions. Fossil fuels are exhaustible and cause environmental damage, necessitating a transition toward clean, renewable, and non-conventional energy sources like solar and wind power. Mineral conservation is crucial because they are finite, non-renewable, and take millions of years to form. Efficient extraction and recycling of metals are key practices.</p>
        </div>
    `,
  htmlExercises: {
    "sg5-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <!-- 1. Multiple Choice Questions -->
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">1. Multiple choice questions.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(i) Which one of the following minerals is formed by decomposition of rocks, leaving a residual mass of weathered material?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) coal &nbsp;&nbsp; <b style="color: ${themeColor};">(b) bauxite</b> &nbsp;&nbsp; (c) gold &nbsp;&nbsp; (d) zinc
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(ii) Koderma, in Jharkhand is the leading producer of which one of the following minerals?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) bauxite &nbsp;&nbsp; <b style="color: ${themeColor};">(b) mica</b> &nbsp;&nbsp; (c) iron ore &nbsp;&nbsp; (d) copper
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(iii) Minerals are deposited and accumulated in the stratas of which of the following rocks?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            <b style="color: ${themeColor};">(a) sedimentary rocks</b> &nbsp;&nbsp; (b) metamorphic rocks &nbsp;&nbsp; (c) igneous rocks &nbsp;&nbsp; (d) none of the above
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(iv) Which one of the following minerals is contained in the Monazite sand?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) oil &nbsp;&nbsp; (b) uranium &nbsp;&nbsp; <b style="color: ${themeColor};">(c) thorium</b> &nbsp;&nbsp; (d) coal
                        </p>
                    </div>
                </div>

                <!-- 2. Answer the following questions in about 30 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">2. Answer the following questions in about 30 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Distinguish between the following in not more than 30 words:</p>
                        
                        <div style="margin-left: 10px; margin-bottom: 12px; border-left: 2px solid ${themeColor}; padding-left: 10px;">
                            <p style="color: ${themeColor}; font-weight: bold; font-size: 15px;">(a) Ferrous and non-ferrous minerals</p>
                            <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                                <b>Ferrous minerals</b> contain iron (e.g., iron ore, manganese, nickel, cobalt), whereas <b>non-ferrous minerals</b> do not contain iron (e.g., copper, lead, tin, bauxite, gold).
                            </p>
                        </div>

                        <div style="margin-left: 10px; margin-bottom: 12px; border-left: 2px solid ${themeColor}; padding-left: 10px;">
                            <p style="color: ${themeColor}; font-weight: bold; font-size: 15px;">(b) Conventional and non-conventional sources of energy</p>
                            <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                                <b>Conventional sources</b> are traditional, exhaustible sources of energy like coal, petroleum, and natural gas. <b>Non-conventional sources</b> are modern, renewable, and eco-friendly sources like solar, wind, and tidal energy.
                            </p>
                        </div>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) What is a mineral?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            A <b>mineral</b> is a homogeneous, naturally occurring inorganic substance with a definable internal crystalline structure. Minerals are the basic building blocks of all rocks on the Earth.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iii) How are minerals formed in igneous and metamorphic rocks?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            In igneous and metamorphic rocks, minerals occur in cracks, crevices, faults, or joints. Molten minerals are forced upward through cavities towards the surface. They cool and solidify as they rise, forming smaller deposits called <b>veins</b> and larger deposits called <b>lodes</b> (e.g., copper, zinc, lead).
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iv) Why do we need to conserve mineral resources?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            We need to conserve minerals because they are **finite, non-renewable**, and take millions of years of geological processes to form. The rate of replenishment is infinitesimally small compared to our rapid rate of consumption, posing a threat to future generations.
                        </p>
                    </div>
                </div>

                <!-- 3. Answer the following questions in about 120 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">3. Answer the following questions in about 120 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 22px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Describe the distribution of coal in India.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            In India, coal reserves occur in rock series of two major geological ages:
                            <br/><br/>
                            1. <b>Gondwana Coal Deposits:</b> Over 200 million years old, these form the bulk of India's metallurgical coal. They are situated in the river valleys of the eastern and south-central regions:
                            <br/>• **Damodar Valley (JH-WB):** Key fields are <b>Jharia, Raniganj, Bokaro</b>.
                            <br/>• **Other River Basins:** Godavari, Mahanadi, Son, and Wardha valleys contain major deposits (e.g., Talcher in Odisha, Singrauli in MP, Korba in Chhattisgarh, and Singareni in Telangana).
                            <br/><br/>
                            2. <b>Tertiary Coal Deposits:</b> Much younger (around 15-60 million years old), these are found mainly in the north-eastern states:
                            <br/>• **States:** Meghalaya, Assam, Arunachal Pradesh, and Nagaland. This coal has a higher sulphur content.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) Why do you think that solar energy has a bright future in India?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Solar energy holds a highly promising future in India due to several geographical and economic factors:
                            <br/>• <b>Tropical Location:</b> Being a tropical nation, India receives abundant sunlight throughout the year, with nearly 300 clear, sunny days.
                            <br/>• <b>Rural Applications:</b> It is highly suitable for remote rural areas without electricity grids. It can run agricultural tubewells and light up homes cleanly.
                            <br/>• <b>Environmental Benefits:</b> Utilizing solar power reduces the rural reliance on firewood and dung cakes, preventing forest degradation and indoor air pollution. It also preserves dung to be used as agricultural manure.
                            <br/>• <b>Energy Independence:</b> Reduces India's high economic dependence on importing expensive crude oil and coal.
                            <br/>• <b>Government Support & Cost Reduction:</b> Advancements in solar photovoltaic cells and government subsidies make solar installations affordable for households and industries.
                        </p>
                    </div>
                </div>
            </div>
        `,
  },
  exercises: [
    {
      id: "sg5-ex-all",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "sg5-mcq-1",
      question:
        "Which one of the following minerals is formed by decomposition of rocks, leaving a residual mass of weathered material?",
      options: ["coal", "bauxite", "gold", "zinc"],
      correctAnswer: "b",
    },
    {
      id: "sg5-mcq-2",
      question:
        "Koderma, in Jharkhand is the leading producer of which one of the following minerals?",
      options: ["bauxite", "mica", "iron ore", "copper"],
      correctAnswer: "b",
    },
    {
      id: "sg5-mcq-3",
      question:
        "Minerals are deposited and accumulated in the stratas of which of the following rocks?",
      options: [
        "sedimentary rocks",
        "metamorphic rocks",
        "igneous rocks",
        "none of the above",
      ],
      correctAnswer: "a",
    },
    {
      id: "sg5-mcq-4",
      question:
        "Which one of the following minerals is contained in the Monazite sand?",
      options: ["oil", "uranium", "thorium", "coal"],
      correctAnswer: "c",
    },
    {
      id: "sg5-mcq-5",
      question:
        "Which of the following minerals is indispensable for electrical and electronic industries?",
      options: ["Iron ore", "Manganese", "Bauxite", "Mica"],
      correctAnswer: "d",
    },
    {
      id: "sg5-mcq-6",
      question: "Which state is the largest producer of Bauxite in India?",
      options: ["Odisha", "Gujarat", "Jharkhand", "Chhattisgarh"],
      correctAnswer: "a",
    },
    {
      id: "sg5-mcq-7",
      question: "The highest quality hard coal is called:",
      options: ["Peat", "Lignite", "Bituminous", "Anthracite"],
      correctAnswer: "d",
    },
    {
      id: "sg5-mcq-8",
      question:
        "Which of the following is a non-conventional source of energy?",
      options: ["Coal", "Petroleum", "Natural Gas", "Solar Energy"],
      correctAnswer: "d",
    },
    {
      id: "sg5-mcq-9",
      question: "Khetri mines in Rajasthan are famous for the production of:",
      options: ["Copper", "Gold", "Iron ore", "Mica"],
      correctAnswer: "a",
    },
    {
      id: "sg5-mcq-10",
      question: "Which is the oldest oil-producing state in India?",
      options: ["Gujarat", "Maharashtra", "Assam", "Tamil Nadu"],
      correctAnswer: "c",
    },
  ],
};
