import { ChapterContent } from "../types";

const themeColor = "#03A9F4"; // Bright Blue for Geography Chapter 3

export const c7Geo3: ChapterContent = {
  id: "c7-geo-3",
  number: 3,
  title: "Our Changing Earth",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>The lithosphere is broken into a number of plates known as the Lithospheric plates. These plates move around very slowly — just a few millimetres each year. This movement is caused by the molten magma inside the earth. The changes on the surface of the earth are produced by two types of forces: Endogenic forces (acting in the interior) and Exogenic forces (acting on the surface).</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Forces Affecting the Earth</h3>
            <p><b style="color: ${themeColor};">Endogenic Forces:</b> Sudden forces like earthquakes and volcanoes that cause mass destruction on the surface.</p>
            <p><b style="color: ${themeColor};">Exogenic Forces:</b> Forces like weathering and erosion that slowly change the landscape over time.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Major Landforms</h3>
            <p>The landscape is being continuously worn away by two processes — weathering and erosion. Erosion is the wearing away of the landscape by different agents like water, wind, and ice.</p>
            <ul style="text-align: left;">
                <li><b style="color: ${themeColor};">Work of River:</b> Formation of waterfalls, meanders, ox-bow lakes, floodplains, and deltas.</li>
                <li><b style="color: ${themeColor};">Work of Sea Waves:</b> Formation of sea caves, sea arches, stacks, and sea cliffs.</li>
                <li><b style="color: ${themeColor};">Work of Ice:</b> Glaciers (rivers of ice) carve out deep hollows and deposit glacial moraines.</li>
                <li><b style="color: ${themeColor};">Work of Wind:</b> Formation of mushroom rocks, sand dunes, and loess (common in deserts).</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left;">Earthquakes</h3>
            <p>When the Lithospheric plates move, the surface of the earth vibrates. These vibrations are called earthquakes. The place where the movement starts is the <b>focus</b>, and the place on the surface above it is the <b>epicentre</b>.</p>
        </div>
    `,
  htmlExercises: {
    "c7g3-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <!-- 1. Answer the following questions -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">1. Answer the following questions.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) Why do the plates move?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The plates move because of the movement of the molten magma inside the earth, which moves in a circular manner.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) What are exogenic and endogenic forces?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The forces which act in the interior of the earth are called Endogenic forces (e.g., earthquakes). The forces that work on the surface of the earth are called Exogenic forces (e.g., wind and water erosion).</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) What is erosion?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Erosion is the wearing away of the landscape by different agents like water, wind and ice.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) How are flood plains formed?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> When a river overflows its banks, it leads to the flooding of the neighbouring areas. As it floods, it deposits layers of fine soil and other material called sediments along its banks. This leads to the formation of a flat fertile floodplain.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(v) What are sand dunes?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> In deserts, when the wind blows, it lifts and transports sand from one place to another. When it stops blowing, the sand falls and gets deposited in low hill-like structures. These are called sand dunes.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vi) How are beaches formed?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The sea waves deposit sediments along the shores, which leads to the formation of beaches.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vii) What are ox-bow lakes?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Due to continuous erosion and deposition along the sides of the meander, the ends of the meander loop come closer and closer. In due course of time, the meander loop cuts off from the river and forms a cut-off lake, also called an ox-bow lake.</p>
                    </div>
                </div>

                <!-- 2. Tick the correct answer -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">2. Tick the correct answer.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(i) Which is not an erosional feature of sea waves?</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Cliff &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Beach</b> &nbsp;&nbsp; (c) Sea cave</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(ii) The depositional feature of a glacier is</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Floodplain &nbsp;&nbsp; (b) Beach &nbsp;&nbsp; <b style="color: ${themeColor};">(c) Moraine</b></p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iii) Which is caused by the sudden movements of the earth?</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Volcano</b> &nbsp;&nbsp; (b) Folding &nbsp;&nbsp; (c) Floodplain</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iv) Mushroom rocks are found in</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Deserts</b> &nbsp;&nbsp; (b) River valleys &nbsp;&nbsp; (c) Glaciers</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(v) Ox bow lakes are found in</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Deserts &nbsp;&nbsp; <b style="color: ${themeColor};">(b) River valleys</b> &nbsp;&nbsp; (c) Glaciers</p>
                    </div>
                </div>

                <!-- 3. Match the following -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">3. Match the following.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(i) Glacier</td>
                            <td style="padding: 10px; border: 1px solid #555;">(c) River of ice</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(ii) Meanders</td>
                            <td style="padding: 10px; border: 1px solid #555;">(f) Rivers</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iii) Beach</td>
                            <td style="padding: 10px; border: 1px solid #555;">(a) Sea shore</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iv) Sand dunes</td>
                            <td style="padding: 10px; border: 1px solid #555;">(b) Desert</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(v) Waterfall</td>
                            <td style="padding: 10px; border: 1px solid #555;">(d) Hard bed rock</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(vi) Earthquake</td>
                            <td style="padding: 10px; border: 1px solid #555;">(e) Vibrations of earth</td>
                        </tr>
                    </table>
                </div>

                <!-- 4. Give reasons -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">4. Give reasons.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) Some rocks have a shape of a mushroom</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> In deserts, wind erodes the lower section of the rock more than the upper part. Therefore, such rocks have a narrower base and wider top, giving them the shape of a mushroom.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) Flood plains are very fertile</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Flood plains are very fertile because during floods, rivers deposit layers of fine soil and other organic material called sediments along their banks, which are rich in minerals and nutrients for plants.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) Sea caves are turned into stacks</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> As sea wave erosion continues, the cavities in sea caves become bigger and bigger until only the roof remains, forming sea arches. Further erosion breaks the roof and only walls are left. These wall-like features are called stacks.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) Buildings collapse during earthquakes</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> During an earthquake, the vibrations travel outwards from the epicentre as waves. These vibrations shake the ground and buildings. If buildings are not earthquake-proof or are weak, they cannot withstand the force and collapse.</p>
                    </div>
                </div>
            </div>
        `,
  },
  introduction:
    "The lithosphere is broken into a number of plates known as the Lithospheric plates.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "c7g3-mcq-1",
      question: "Which is not an erosional feature of sea waves?",
      options: ["Sea Cave", "Beach", "Stack", "Sea Cliff"],
      correctAnswer: "b",
    },
    {
      id: "c7g3-mcq-2",
      question: "The depositional feature of a glacier is:",
      options: ["Floodplain", "Beach", "Moraine", "Sand Dune"],
      correctAnswer: "c",
    },
    {
      id: "c7g3-mcq-3",
      question: "Which of these is caused by sudden movements of the earth?",
      options: ["Volcano", "Folding", "Erosion", "Loess"],
      correctAnswer: "a",
    },
    {
      id: "c7g3-mcq-4",
      question: "Mushroom rocks are found in:",
      options: ["Deserts", "River Valleys", "Glaciers", "Mountains"],
      correctAnswer: "a",
    },
    {
      id: "c7g3-mcq-5",
      question: "Ox-bow lakes are found in:",
      options: ["Deserts", "River Valleys", "Glaciers", "Seashores"],
      correctAnswer: "b",
    },
    {
      id: "c7g3-mcq-6",
      question: "What is the instrument used to measure earthquakes?",
      options: ["Barometer", "Thermometer", "Seismograph", "Anemometer"],
      correctAnswer: "c",
    },
    {
      id: "c7g3-mcq-7",
      question: "The place on the earth's surface directly above the focus is:",
      options: ["Focus", "Epicentre", "Vent", "Crater"],
      correctAnswer: "b",
    },
    {
      id: "c7g3-mcq-8",
      question: "Sudden movements like earthquakes are caused by _____ forces.",
      options: ["Exogenic", "Endogenic", "Gravitational", "Magnetic"],
      correctAnswer: "b",
    },
    {
      id: "c7g3-mcq-9",
      question: "Large deposits of loess are found in:",
      options: ["India", "China", "Egypt", "USA"],
      correctAnswer: "b",
    },
    {
      id: "c7g3-mcq-10",
      question:
        "The steep rocky coast rising vertically above sea water is called:",
      options: ["Sea Cliff", "Stack", "Beach", "Sea Arch"],
      correctAnswer: "a",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "c7g3-ex-all",
      name: "Exercise",
      questions: [],
    },
  ],
  examples: [],
};
