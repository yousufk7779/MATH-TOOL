import { ChapterContent } from "../types";

const themeColor = "#FF8A65"; // Matches getChapterGradient for c7-geo-3 (Deep Orange)

export const c7Geo3: ChapterContent = {
  id: "c7-geo-3",
  number: 3,
  title: "Our Changing Earth",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">The Earth's crust is not static; it is constantly changing due to various forces acting upon it. This chapter introduces the concepts of Tectonic plate movements and explains how internal and external forces shape the landscapes we see today.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px;">Endogenic vs Exogenic Forces</h3>
            <p>The forces that shape the Earth are broadly classified into two categories based on their origin:</p>
            <ul style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Endogenic Forces:</b> Forces that act in the interior of the Earth. They can cause sudden movements like earthquakes and volcanic eruptions, or slow building movements.</li>
                <li><b style="color: ${themeColor};">Exogenic Forces:</b> Forces that work on the surface of the Earth. They lead to wear and tear (weathering and erosion) and create new landforms through deposition.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px;">Major Agents of Landscape Change</h3>
            <p>Landscape changes occur continuously through the work of natural agents:</p>
            <ul style="text-align: left; line-height: 1.6;">
                <li><b style="color: ${themeColor};">Rivers:</b> Form waterfalls, meanders, ox-bow lakes, and fertile floodplains.</li>
                <li><b style="color: ${themeColor};">Sea Waves:</b> Form sea caves, arches, stacks, sea cliffs, and deposit beaches.</li>
                <li><b style="color: ${themeColor};">Glaciers:</b> Carve deep valleys and deposit moraines (rivers of ice).</li>
                <li><b style="color: ${themeColor};">Wind:</b> Active in deserts, creating mushroom rocks, sand dunes, and loess deposits.</li>
            </ul>
        </div>
    `,
  htmlExercises: {
    "c7g3-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Answer the following questions:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) Why do the plates move?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Tectonic plates move slowly because of the continuous circular movement of the molten magma inside the Earth.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) What are exogenic and endogenic forces?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> 
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Endogenic forces:</b> Forces acting in the interior of the Earth (e.g., Earthquakes, Volcanoes).</li>
                            <li><b>Exogenic forces:</b> Forces acting on the surface of the Earth (e.g., Wind, Rivers, Glaciers).</li>
                        </ul>
                    </p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) What is erosion?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Erosion is the wearing away of landscapes by natural agents like water, wind, and ice.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iv) How are flood plains formed?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> When a river overflows, it deposits layers of fine soil and sediments along its banks, forming flat and highly fertile floodplains.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(v) What are sand dunes?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> In deserts, wind lifts and deposits sand in low, hill-like structures called sand dunes.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(vi) How are beaches formed?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Sea waves deposit sand, gravel, and sediments along the shores to form beaches.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(vii) What are ox-bow lakes?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> A river forms large twists called meanders. Over time, erosion and deposition cut off the meander loop from the main river, forming a crescent-shaped ox-bow lake.</p>
                </div>

                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. Tick the correct answer:</h3>
                
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(i) Which is not an erosional feature of sea waves?</b></p>
                    <p style="margin-left: 15px;">(a) Cliff &nbsp;&nbsp;&nbsp;&nbsp; (b) Beach &nbsp;&nbsp;&nbsp;&nbsp; (c) Sea cave</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Beach</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(ii) The depositional feature of a glacier is:</b></p>
                    <p style="margin-left: 15px;">(a) Flood plain &nbsp;&nbsp;&nbsp;&nbsp; (b) Beach &nbsp;&nbsp;&nbsp;&nbsp; (c) Moraine</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (c) Moraine</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iii) Which is caused by the sudden movements of the earth?</b></p>
                    <p style="margin-left: 15px;">(a) Volcano &nbsp;&nbsp;&nbsp;&nbsp; (b) Folding &nbsp;&nbsp;&nbsp;&nbsp; (c) Flood plain</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) Volcano</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iv) Mushroom rocks are found in:</b></p>
                    <p style="margin-left: 15px;">(a) Deserts &nbsp;&nbsp;&nbsp;&nbsp; (b) River valleys &nbsp;&nbsp;&nbsp;&nbsp; (c) Glaciers</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) Deserts</b></p>
                </div>

                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(v) Ox bow lakes are found in:</b></p>
                    <p style="margin-left: 15px;">(a) Glaciers &nbsp;&nbsp;&nbsp;&nbsp; (b) River valleys &nbsp;&nbsp;&nbsp;&nbsp; (c) Deserts</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) River valleys</b></p>
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
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(i) Glacier</td>
                            <td style="padding: 8px;">(c) River of ice</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(ii) Meanders</td>
                            <td style="padding: 8px;">(d) Rivers</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iii) Beach</td>
                            <td style="padding: 8px;">(g) Sea shore</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iv) Sand dunes</td>
                            <td style="padding: 8px;">(h) Deserts</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(v) Waterfall</td>
                            <td style="padding: 8px;">(f) Sea cliff</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(vi) Earthquake</td>
                            <td style="padding: 8px;">(e) Vibrations of earth</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Q4 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 35px;">4. Give reasons:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) Some rocks have a shape of a mushroom:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> In deserts, winds erode the lower part of a rock more than the upper part. This creates a rock with a narrow base and a wide top, looking like a mushroom.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) Flood plains are very fertile:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> When a river floods, it deposits a layer of fine soil and mineral-rich sediments along its banks, making the floodplains highly fertile for farming.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) Sea caves are turned into stacks:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Sea waves erode hollow caves in rocks. Over time, only the roof remains (sea arches). Finally, the roof collapses under wave action, leaving only vertical side walls called stacks.</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iv) Buildings collapse due to earthquakes:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Earthquakes cause violent ground vibrations that shake building foundations. Weak structures cannot withstand these sudden shakes and collapse.</p>
                </div>

            </div>
        `,
  },
  introduction:
    "In this chapter, we explore tectonic movements, exogenic and endogenic forces, and natural landscape features.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [{ id: "c7g3-ex-all", name: "Chapter Solutions", questions: [] }],
  examples: [],
  mcqs: [
    {
      id: "cg3-mcq-1",
      question: "Tectonic plates move because of the movement of:",
      options: ["Air currents", "Molten magma", "River water", "Ocean waves"],
      correctAnswer: "b",
      explanation:
        "Tectonic plates float on the semi-fluid mantle and move due to the circular flow of molten magma inside the Earth.",
    },
    {
      id: "cg3-mcq-2",
      question: "Forces acting in the interior of the Earth are called:",
      options: [
        "Exogenic forces",
        "Endogenic forces",
        "Surface forces",
        "Atmospheric forces",
      ],
      correctAnswer: "b",
      explanation:
        "Endogenic forces originate deep inside the Earth and cause events like volcanoes and earthquakes.",
    },
    {
      id: "cg3-mcq-3",
      question:
        "Sudden movements of the Earth like earthquakes and volcanoes are caused by:",
      options: [
        "Exogenic forces",
        "Endogenic forces",
        "Gravitational forces",
        "Solar forces",
      ],
      correctAnswer: "b",
      explanation:
        "Internal endogenic forces can release sudden energy, leading to earthquakes.",
    },
    {
      id: "cg3-mcq-4",
      question:
        "An opening in the Earth's crust through which molten material erupts is a:",
      options: ["Meander", "Volcano", "Glacier", "Sand dune"],
      correctAnswer: "b",
      explanation:
        "A volcano is a vent or opening in the crust from which lava, ash, and gases erupt.",
    },
    {
      id: "cg3-mcq-5",
      question:
        "The place in the Earth's crust where earthquake vibrations begin is called the:",
      options: ["Epicentre", "Focus", "Crater", "Cliff"],
      correctAnswer: "b",
      explanation:
        "The focus is the exact point underground where the earthquake originates.",
    },
    {
      id: "cg3-mcq-6",
      question:
        "The point on the Earth's surface directly above the focus is called the:",
      options: ["Epicentre", "Vent", "Core", "Delta"],
      correctAnswer: "a",
      explanation:
        "The epicentre is on the surface directly above the focus, experiencing the strongest shaking.",
    },
    {
      id: "cg3-mcq-7",
      question: "Mushroom rocks are typically found in:",
      options: ["River valleys", "Glaciers", "Deserts", "Ocean beds"],
      correctAnswer: "c",
      explanation:
        "In deserts, wind erodes the lower parts of rocks faster than the tops, forming a mushroom shape.",
    },
    {
      id: "cg3-mcq-8",
      question:
        "A crescent-shaped lake cut off from a looping river is called an:",
      options: ["Ox-bow lake", "Glacier lake", "Salt lake", "Lagoon"],
      correctAnswer: "a",
      explanation:
        "Ox-bow lakes are formed when meander loops are cut off from the main river flow.",
    },
    {
      id: "cg3-mcq-9",
      question: "The depositional feature of a glacier is a:",
      options: ["Flood plain", "Beach", "Moraine", "Sand dune"],
      correctAnswer: "c",
      explanation:
        "Glaciers deposit rocks, sand, and silt to form ridges called moraines.",
    },
    {
      id: "cg3-mcq-10",
      question:
        "Low, hill-like structures of sand deposited by wind in deserts are:",
      options: ["Moraines", "Sand dunes", "Beaches", "Cliffs"],
      correctAnswer: "b",
      explanation:
        "Sand dunes are depositional features created by wind in desert environments.",
    },
  ],
  summary: [],
};
