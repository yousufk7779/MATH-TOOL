import { ChapterContent } from "../types";

const themeColor = "#009688"; // Teal for Geography Chapter 2

export const c7Geo2: ChapterContent = {
    id: "c7-geo-2",
    number: 2,
    title: "Inside Our Earth",
    isHtmlView: true,
    htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>The earth, our homeland, is a dynamic planet. It is constantly undergoing changes inside and outside. Just like an onion, the earth is made up of several concentric layers with one inside another. This chapter explores the interior of the earth and the different types of rocks and minerals that form its crust.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Interior of the Earth</h3>
            <p><b style="color: ${themeColor};">Crust:</b> The uppermost layer over the earth’s surface. It is the thinnest of all the layers (about 35 km on continents and 5 km on ocean floors).</p>
            <p><b style="color: ${themeColor};">Mantle:</b> Just beneath the crust is the mantle which extends up to a depth of 2900 km.</p>
            <p><b style="color: ${themeColor};">Core:</b> The innermost layer with a radius of about 3500 km. It is mainly made up of nickel and iron (nife) and has very high temperature and pressure.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Rocks and Minerals</h3>
            <p>Any natural mass of mineral matter that makes up the earth’s crust is called a rock. Rocks can be of different colour, size and texture.</p>
            <ul style="text-align: left;">
                <li><b style="color: ${themeColor};">Igneous Rocks:</b> Formed when molten magma cools and becomes solid (e.g., Granite, Basalt).</li>
                <li><b style="color: ${themeColor};">Sedimentary Rocks:</b> Formed when sediments are compressed and hardened to form layers of rocks (e.g., Sandstone). These often contain fossils.</li>
                <li><b style="color: ${themeColor};">Metamorphic Rocks:</b> Formed when igneous and sedimentary rocks change under great heat and pressure (e.g., Clay into slate, Limestone into marble).</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left;">The Rock Cycle</h3>
            <p>The process of transformation of the rock from one to another is known as the rock cycle. Molten magma cools to form igneous rocks, which break down into sediments to form sedimentary rocks. These, under heat and pressure, change into metamorphic rocks, which can melt again to form magma.</p>
        </div>
    `,
    htmlExercises: {
        "c7g2-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <!-- 1. Answer the following questions -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">1. Answer the following questions.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) What are the three layers of the earth?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The three layers of the earth are: (1) The Crust (2) The Mantle and (3) The Core.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) What is a rock?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Any natural mass of mineral matter that makes up the earth’s crust is called a rock. Rocks can be of different colour, size and texture.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) Name three types of rocks.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The three types of rocks are: (1) Igneous rocks (2) Sedimentary rocks and (3) Metamorphic rocks.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) How are extrusive and intrusive rocks formed?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Extrusive rocks are formed when molten lava comes on the earth's surface and cools down rapidly to become solid. Intrusive rocks are formed when molten magma cools down deep inside the earth's crust.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(v) What do you mean by a rock cycle?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The process of transformation of one type of rock into another under certain conditions in a cyclic manner is known as the rock cycle.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vi) What are the uses of rocks?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Rocks are very useful to us. Hard rocks are used for making roads, houses and buildings. They are also used in many games like seven stones (pittu) and hopscotch (stapu).</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vii) What are metamorphic rocks?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> When igneous and sedimentary rocks are subjected to great heat and pressure, they change into metamorphic rocks. For example, clay changes into slate and limestone into marble.</p>
                    </div>
                </div>

                <!-- 2. Tick the correct answer -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">2. Tick the correct answer.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(i) The rock which is made up of molten magma is</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Igneous</b> &nbsp;&nbsp; (b) Sedimentary &nbsp;&nbsp; (c) Metamorphic</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(ii) The innermost layer of the earth is</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Crust &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Core</b> &nbsp;&nbsp; (c) Mantle</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iii) Gold, petroleum and coal are examples of</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Rocks &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Minerals</b> &nbsp;&nbsp; (c) Fossils</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iv) Rocks which contain fossils are</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Sedimentary rocks</b> &nbsp;&nbsp; (b) Metamorphic rocks &nbsp;&nbsp; (c) Igneous rocks</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(v) The thinnest layer of the earth is</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Crust</b> &nbsp;&nbsp; (b) Mantle &nbsp;&nbsp; (c) Core</p>
                    </div>
                </div>

                <!-- 3. Match the following -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">3. Match the following.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(i) Core</td>
                            <td style="padding: 10px; border: 1px solid #555;">(e) innermost layer</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(ii) Minerals</td>
                            <td style="padding: 10px; border: 1px solid #555;">(d) has definite chemical composition</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iii) Rocks</td>
                            <td style="padding: 10px; border: 1px solid #555;">(b) used for roads and buildings</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iv) Clay</td>
                            <td style="padding: 10px; border: 1px solid #555;">(a) changes into slate</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(v) Sial</td>
                            <td style="padding: 10px; border: 1px solid #555;">(c) made of silica and alumina</td>
                        </tr>
                    </table>
                </div>

                <!-- 4. Give reasons -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">4. Give reasons.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) We cannot go to the centre of the earth</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> We cannot go to the centre of the earth because the temperature and pressure are extremely high. Also, it is at a depth of 6000 km, which is practically impossible to reach.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) Sedimentary rocks are formed from sediments</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Rocks break down into small fragments called sediments. These are transported and deposited by wind or water. These loose sediments are then compressed and hardened to form layers of rocks called sedimentary rocks.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) Limestone is changed into marble</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Igneous and sedimentary rocks can change into metamorphic rocks under great heat and pressure. Limestone is a sedimentary rock that changes into marble when subjected to such extreme conditions.</p>
                    </div>
                </div>
            </div>
        `
    },
    introduction: "The earth, our homeland, is a dynamic planet.",
    definitions: [],
    keyPoints: [],
    formulas: [],
    crux: [],
    mcqs: [
        {
            id: "c7g2-mcq-1",
            question: "The innermost layer of the earth is:",
            options: ["Crust", "Mantle", "Core", "Lithosphere"],
            correctAnswer: "c"
        },
        {
            id: "c7g2-mcq-2",
            question: "Which layer of the earth is the thinnest?",
            options: ["Crust", "Mantle", "Outer Core", "Inner Core"],
            correctAnswer: "a"
        },
        {
            id: "c7g2-mcq-3",
            question: "Rocks made of molten magma are called:",
            options: ["Igneous", "Sedimentary", "Metamorphic", "Fossil rocks"],
            correctAnswer: "a"
        },
        {
            id: "c7g2-mcq-4",
            question: "Gold, petroleum and coal are examples of:",
            options: ["Rocks", "Minerals", "Fossils", "Gases"],
            correctAnswer: "b"
        },
        {
            id: "c7g2-mcq-5",
            question: "Rocks which contain fossils are:",
            options: ["Igneous rocks", "Metamorphic rocks", "Sedimentary rocks", "None of these"],
            correctAnswer: "c"
        },
        {
            id: "c7g2-mcq-6",
            question: "What is the radius of the earth?",
            options: ["3500 km", "6371 km", "2900 km", "5000 km"],
            correctAnswer: "b"
        },
        {
            id: "c7g2-mcq-7",
            question: "The word 'Igneous' is derived from a Latin word meaning:",
            options: ["Water", "Fire", "Earth", "Air"],
            correctAnswer: "b"
        },
        {
            id: "c7g2-mcq-8",
            question: "The crust is about ____ km on the continental masses.",
            options: ["5 km", "35 km", "100 km", "2900 km"],
            correctAnswer: "b"
        },
        {
            id: "c7g2-mcq-9",
            question: "The main mineral constituents of continental mass are silica and:",
            options: ["Iron", "Magnesium", "Alumina", "Nickel"],
            correctAnswer: "c"
        },
        {
            id: "c7g2-mcq-10",
            question: "Limestone is changed into ____ under great heat and pressure.",
            options: ["Slate", "Marble", "Quartzite", "Coal"],
            correctAnswer: "b"
        }
    ],
    summary: [],
    exercises: [
        {
            id: "c7g2-ex-all",
            name: "Exercise",
            questions: []
        }
    ],
    examples: []
};
