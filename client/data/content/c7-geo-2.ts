import { ChapterContent } from "../types";

const themeColor = "#26C6DA"; // Matches getChapterGradient for c7-geo-2

export const c7Geo2: ChapterContent = {
  id: "c7-geo-2",
  number: 2,
  title: "Inside Our Earth",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Just like an onion, the Earth is made up of several concentric layers, one inside another. This chapter takes us on a journey deep inside our planet to explore its layers, the rocks and minerals that form its crust, and the rock cycle that constantly reshapes it.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px;">Three Layers of the Earth</h3>
            <p><b style="color: ${themeColor};">Crust:</b> The uppermost and thinnest layer of the Earth, about 35 km on continental masses (made of Silica and Alumina—<i>Sial</i>) and 5 km on ocean floors (made of Silica and Magnesium—<i>Sima</i>).</p>
            <p><b style="color: ${themeColor};">Mantle:</b> The middle layer extending up to a depth of 2900 km beneath the crust.</p>
            <p><b style="color: ${themeColor};">Core:</b> The innermost layer with a radius of about 3500 km, mainly made of Nickel and Iron (<i>Nife</i>), experiencing extremely high temperature and pressure.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px;">Types of Rocks</h3>
            <ul style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Igneous Rocks:</b> Formed when molten magma cools and solidifies. They are called primary rocks (e.g., Granite, Basalt). Can be intrusive or extrusive.</li>
                <li><b style="color: ${themeColor};">Sedimentary Rocks:</b> Formed by the compression and hardening of accumulated sediments transported by wind and water (e.g., Sandstone). Often contain fossils.</li>
                <li><b style="color: ${themeColor};">Metamorphic Rocks:</b> Formed when igneous and sedimentary rocks change under great heat and pressure (e.g., Clay into slate, Limestone into marble).</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px;">The Rock Cycle</h3>
            <p>A continuous process in which one type of rock changes into another under certain conditions in a cyclic manner. Molten magma cools to become igneous rocks, which break down to form sedimentary rocks, which then change to metamorphic rocks under heat and pressure. Finally, under extreme heat, metamorphic rocks melt back into magma.</p>
        </div>
    `,
  htmlExercises: {
    "c7g2-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Answer the following questions:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) What are the three layers of the earth?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The three layers of the Earth are:
                        <ol style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Crust</b></li>
                            <li><b>Mantle</b></li>
                            <li><b>Core</b></li>
                        </ol>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) What is a rock?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Any natural mass of mineral matter that makes up the Earth's crust is called a rock. Rocks can be of different colors, sizes, and textures.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) Name three types of rocks.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The three major types of rocks are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>Igneous rocks</li>
                            <li>Sedimentary rocks</li>
                            <li>Metamorphic rocks</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iv) How are extrusive and intrusive rocks formed?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> 
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0; list-style-type: none;">
                            <li><b>1. Extrusive Rocks:</b> Formed when molten lava erupts onto the Earth's surface and cools down rapidly into solid rock (e.g., Basalt). They have a fine-grained structure.</li>
                            <li style="margin-top: 10px;"><b>2. Intrusive Rocks:</b> Formed when molten magma cools down slowly deep inside the Earth's crust (e.g., Granite). They have a large-grained structure.</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(v) What do you mean by a rock cycle?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The continuous process in which one type of rock changes into another under certain conditions in a cyclic manner is known as the rock cycle (e.g., Magma → Igneous → Sedimentary → Metamorphic → Magma).</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(vi) What are the uses of rocks?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Rocks are useful in several ways:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>For building roads, houses, and bridges.</li>
                            <li>As sources of fuel like coal, petroleum, and natural gas.</li>
                            <li>For manufacturing products like cement, chalk, and talcum powder.</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(vii) What are metamorphic rocks?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Rocks that change from igneous or sedimentary forms under extreme heat and pressure are called metamorphic rocks. Example: Clay changing into slate and limestone into marble.</p>
                </div>

                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. Tick the correct answer:</h3>
                
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(i) The rock which is made up of molten magma is:</b></p>
                    <p style="margin-left: 15px;">(a) Igneous &nbsp;&nbsp;&nbsp;&nbsp; (b) Sedimentary &nbsp;&nbsp;&nbsp;&nbsp; (c) Metamorphic</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) Igneous</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(ii) The innermost layer of the earth is:</b></p>
                    <p style="margin-left: 15px;">(a) Crust &nbsp;&nbsp;&nbsp;&nbsp; (b) Core &nbsp;&nbsp;&nbsp;&nbsp; (c) Mantle</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Core</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iii) Gold, petroleum and coal are examples of:</b></p>
                    <p style="margin-left: 15px;">(a) Rocks &nbsp;&nbsp;&nbsp;&nbsp; (b) Minerals &nbsp;&nbsp;&nbsp;&nbsp; (c) Fossils</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Minerals</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iv) Rocks which contain fossils are:</b></p>
                    <p style="margin-left: 15px;">(a) Sedimentary rocks &nbsp;&nbsp;&nbsp;&nbsp; (b) Metamorphic rocks &nbsp;&nbsp;&nbsp;&nbsp; (c) Igneous rocks</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) Sedimentary rocks</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(v) The thinnest layer of the earth is:</b></p>
                    <p style="margin-left: 15px;">(a) Crust &nbsp;&nbsp;&nbsp;&nbsp; (b) Mantle &nbsp;&nbsp;&nbsp;&nbsp; (c) Core</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) Crust</b></p>
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
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(i) Core</td>
                            <td style="padding: 8px;">(e) Innermost layer</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(ii) Minerals</td>
                            <td style="padding: 8px;">(d) Has definite chemical composition</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iii) Rocks</td>
                            <td style="padding: 8px;">(b) Used for roads and buildings</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iv) Clay</td>
                            <td style="padding: 8px;">(f) Changes into slate</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(v) Sial</td>
                            <td style="padding: 8px;">(c) Made of silicon and alumina</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Q4 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 35px;">4. Give reasons:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) We cannot go to the centre of the earth:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> We cannot go to the center of the Earth because the temperature and pressure there are extremely high, and it lies about 6,000 km deep below the ocean floor, making drilling impossible.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) Sedimentary rocks are formed from sediments:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Rocks break down into small fragments called sediments. These fragments are carried by wind or water and deposited in layers. Over time, these layers are compressed and hardened to form sedimentary rocks.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) Limestone is changed into marble:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Limestone is a sedimentary rock. Under extreme heat and pressure deep inside the Earth, it undergoes a complete physical and chemical change to transform into marble, which is a metamorphic rock.</p>
                </div>

            </div>
        `,
  },
  introduction:
    "In this chapter, we learn about the Earth's layers, rock types, and the rock cycle.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [{ id: "c7g2-ex-all", name: "Chapter Solutions", questions: [] }],
  examples: [],
  mcqs: [
    {
      id: "cg2-mcq-1",
      question: "Which is the thinnest layer of the Earth?",
      options: ["Mantle", "Core", "Crust", "Sima"],
      correctAnswer: "c",
      explanation:
        "The crust is the outermost and thinnest layer of the Earth, only about 5km thick on ocean floors.",
    },
    {
      id: "cg2-mcq-2",
      question: "The innermost layer of the Earth is the:",
      options: ["Crust", "Mantle", "Core", "Sial"],
      correctAnswer: "c",
      explanation:
        "The core lies at the center of the Earth and has a radius of about 3500 km.",
    },
    {
      id: "cg2-mcq-3",
      question: "The Earth's core is mainly made up of:",
      options: [
        "Silica and Alumina",
        "Silica and Magnesium",
        "Nickel and Iron",
        "Alumina and Iron",
      ],
      correctAnswer: "c",
      explanation:
        "The innermost layer (core) is also called 'nife' because it is made of Nickel (Ni) and Iron (Fe).",
    },
    {
      id: "cg2-mcq-4",
      question:
        "Rocks formed by the cooling and solidifying of molten magma are called:",
      options: [
        "Igneous rocks",
        "Sedimentary rocks",
        "Metamorphic rocks",
        "Fossil rocks",
      ],
      correctAnswer: "a",
      explanation:
        "Igneous rocks are primary rocks formed directly when molten magma cools and solidifies.",
    },
    {
      id: "cg2-mcq-5",
      question:
        "Which type of rock cools down slowly deep inside the Earth's crust?",
      options: [
        "Extrusive igneous rock",
        "Intrusive igneous rock",
        "Sedimentary rock",
        "Metamorphic rock",
      ],
      correctAnswer: "b",
      explanation:
        "Intrusive rocks (like granite) cool down slowly deep inside, forming large grain crystals.",
    },
    {
      id: "cg2-mcq-6",
      question: "Rocks that contain fossils of dead plants and animals are:",
      options: [
        "Igneous rocks",
        "Metamorphic rocks",
        "Sedimentary rocks",
        "Hard rocks",
      ],
      correctAnswer: "c",
      explanation:
        "Sedimentary rocks are formed by layers of sediments that trap shells, plant remains, and fossils.",
    },
    {
      id: "cg2-mcq-7",
      question:
        "Under extreme heat and pressure, limestone changes into which metamorphic rock?",
      options: ["Granite", "Basalt", "Marble", "Slate"],
      correctAnswer: "c",
      explanation:
        "Marble is a metamorphic rock formed by the transformation of limestone.",
    },
    {
      id: "cg2-mcq-8",
      question: "The continental mass of the Earth's crust is mainly made of:",
      options: ["Sial", "Sima", "Nife", "Slate"],
      correctAnswer: "a",
      explanation:
        "Continental crust is called Sial because it consists of Silica (si) and Alumina (al).",
    },
    {
      id: "cg2-mcq-9",
      question: "The oceanic crust mainly consists of:",
      options: ["Sial", "Sima", "Nife", "Granite"],
      correctAnswer: "b",
      explanation:
        "Oceanic crust is called Sima because it consists of Silica (si) and Magnesium (ma).",
    },
    {
      id: "cg2-mcq-10",
      question:
        "The continuous process in which one rock type transforms into another is the:",
      options: ["Rock cycle", "Water cycle", "Life cycle", "Soil cycle"],
      correctAnswer: "a",
      explanation:
        "The rock cycle is the continuous transformation of rocks under geological conditions.",
    },
  ],
  summary: [],
};
