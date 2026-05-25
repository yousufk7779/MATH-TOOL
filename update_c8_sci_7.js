const fs = require("fs");

const imagePath =
  "C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\candle_flame_zones_diagram_1777803232392.png";
const b64 = fs.readFileSync(imagePath).toString("base64");

const content = `import { ChapterContent } from "../chapterContent";

export const c8Sci7: ChapterContent = {
  id: "c8-sci-7",
  number: 7,
  title: "Combustion and Flame",
  introduction:
    "<div style='text-align: justify;'>Combustion is a chemical process in which a substance reacts with oxygen to give off heat. In this chapter, we explore the conditions required for combustion, the structure of a flame, and the characteristics of different fuels.</div>",
  definitions: [
    {
      term: "Combustion",
      description:
        "<div style='text-align: justify;'>A chemical process in which a substance reacts with oxygen to give off heat and light.</div>",
    },
    {
      term: "Ignition Temperature",
      description:
        "<div style='text-align: justify;'>The lowest temperature at which a substance catches fire.</div>",
    },
    {
      term: "Calorific Value",
      description:
        "<div style='text-align: justify;'>The amount of heat energy produced on complete combustion of 1 kg of a fuel, expressed in kJ/kg.</div>",
    },
  ],
  keyPoints: [
    "<div style='text-align: justify;'>The three essential requirements for combustion are: fuel, air (oxygen), and heat (to reach ignition temperature).</div>",
    "<div style='text-align: justify;'>Fires can be controlled by removing one or more of these requirements (e.g., using water or CO2).</div>",
    "<div style='text-align: justify;'>A flame has three distinct zones: the innermost zone, the middle zone, and the outermost zone.</div>",
    "<div style='text-align: justify;'>Ideal fuels have high calorific value, are cheap, easily available, and do not produce harmful gases or residues.</div>",
  ],
  crux: [
    "<div style='text-align: justify;'><b>Types of Combustion:</b> Rapid, Spontaneous, and Explosion.</div>",
    "<div style='text-align: justify;'><b>Fuel Efficiency:</b> Measured by calorific value in kJ/kg.</div>",
  ],
  formulas: [
    {
      name: "Calorific Value",
      formula: "Calorific Value = Total Heat Produced (kJ) / Mass of Fuel (kg)",
    },
  ],
  mcqs: [
    {
      id: "c8-sci-7-mcq-1",
      question: "<div style='text-align: justify;'>Which of the following is the hottest part of a flame?</div>",
      options: [
        "<div style='text-align: justify;'>(a) Innermost zone</div>",
        "<div style='text-align: justify;'>(b) Middle zone</div>",
        "<div style='text-align: justify;'>(c) Outermost zone</div>",
        "<div style='text-align: justify;'>(d) Luminous zone</div>",
      ],
      correctAnswer: "c",
    },
    {
      id: "c8-sci-7-mcq-2",
      question: "<div style='text-align: justify;'>The calorific value of a fuel is expressed in:</div>",
      options: [
        "<div style='text-align: justify;'>(a) kJ/g</div>",
        "<div style='text-align: justify;'>(b) kJ/kg</div>",
        "<div style='text-align: justify;'>(c) J/kg</div>",
        "<div style='text-align: justify;'>(d) cal/g</div>",
      ],
      correctAnswer: "b",
    },
  ],
  examples: [],
  summary: [
    "<div style='text-align: justify;'>Combustion requires fuel, oxygen, and ignition temperature.</div>",
    "<div style='text-align: justify;'>LPG and CNG are cleaner and more efficient fuels than wood or coal.</div>",
    "<div style='text-align: justify;'>Increasing fuel consumption leads to environmental issues like global warming and acid rain.</div>",
  ],
  exercises: [
    {
      id: "c8-sci-7-ex1",
      name: "Exercise",
      questions: [
        {
          id: "c8-sci-7-ex1-q1",
          number: "1",
          question: "<div style='text-align: justify;'>List conditions under which combustion can take place?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The three essential conditions for combustion are:<br/>1. Presence of a combustible substance.<br/>2. Presence of a supporter of combustion (like oxygen/air).<br/>3. Attainment of ignition temperature (the minimum temperature at which a substance catches fire).</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q2",
          number: "2",
          question: "<div style='text-align: justify;'>Fill in the blanks:<br/>(a) Burning of wood and coal causes ________ of air.<br/>(b) A liquid fuel, used in homes is ________.<br/>(c) Fuel must be heated to its ________ before it starts burning.<br/>(d) Fire produced by oil cannot be controlled by ________.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) pollution<br/>(b) LPG (or Kerosene)<br/>(c) ignition temperature<br/>(d) water</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q3",
          number: "3",
          question: "<div style='text-align: justify;'>Explain how the use of CNG in automobiles has reduced pollution in our cities?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>CNG (Compressed Natural Gas) is a cleaner fuel compared to petrol and diesel. It produces a very small amount of harmful products (like smoke and residue) upon combustion. By replacing petrol and diesel with CNG, the emission of toxic gases like sulfur dioxide and nitrogen oxides is significantly reduced, leading to cleaner air in cities.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q4",
          number: "4",
          question: "<div style='text-align: justify;'>Compare LPG and wood as fuels?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'><b>LPG:</b><br/>1. High calorific value (approx. 55,000 kJ/kg).<br/>2. It is a clean fuel (no smoke or ash).<br/>3. Easily stored and transported in cylinders.<br/><br/><b>Wood:</b><br/>1. Low calorific value (approx. 17,000 to 22,000 kJ/kg).<br/>2. Produces a lot of smoke and leaves behind ash.<br/>3. Its use causes deforestation and requires a large storage space.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q5",
          number: "5",
          question: "<div style='text-align: justify;'>Give reasons: why?<br/>(a) Water is not used to control fires involving electrical equipment.<br/>(b) LPG is a better domestic fuel than wood.<br/>(c) Paper by itself catches fire easily whereas a piece of paper wrapped around an aluminium pipe does not.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>(a) Water is a good conductor of electricity. Using it on electrical equipment fires can cause electric shocks to the person fighting the fire.<br/>(b) LPG has a higher calorific value than wood and burns completely without producing smoke or ash, making it more efficient and cleaner.<br/>(c) Aluminium is a good conductor of heat. When paper wrapped around it is heated, the aluminium pipe carries the heat away, preventing the paper from reaching its ignition temperature.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q6",
          number: "6",
          question: "<div style='text-align: justify;'>Make a labelled diagram of a candle flame and name different zones of a flame.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>A candle flame consists of three distinct zones:<br/>1. <b>Outermost zone:</b> Blue, hottest part, where complete combustion occurs.<br/>2. <b>Middle zone:</b> Yellow, luminous, where partial combustion occurs.<br/>3. <b>Innermost zone:</b> Black, least hot, containing unburnt wax vapors.<br/><br/><center><img src='data:image/png;base64,${b64}' style='max-width: 100%; border-radius: 8px; margin: 10px 0;'/></center></div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q7",
          number: "7",
          question: "<div style='text-align: justify;'>Name the unit in which the calorific value of a fuel is expressed.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The calorific value of a fuel is expressed in <b>kiloJoules per kilogram (kJ/kg)</b>.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q8",
          number: "8",
          question: "<div style='text-align: justify;'>Explain how CO<sub>2</sub> is able to control fires.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Carbon dioxide (CO<sub>2</sub>) is heavier than oxygen. When sprayed on a fire, it covers the fire like a blanket, cutting off the contact between the fuel and oxygen. This stops the combustion process and extinguishes the fire.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q9",
          number: "9",
          question: "<div style='text-align: justify;'>It is difficult to burn a heap of green leaves but dry leaves catch fire easily. Explain.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Green leaves contain a significant amount of moisture (water). When we try to burn them, the heat is used up in evaporating the water, keeping the temperature below their ignition temperature. Dry leaves have no moisture and reach their ignition temperature very quickly, hence catching fire easily.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q10",
          number: "10",
          question: "<div style='text-align: justify;'>Which zone of a flame does a goldsmith use for melting gold and silver and why?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>A goldsmith uses the <b>outermost zone</b> (non-luminous zone) of the flame. This is because it is the hottest part of the flame and provides the high temperature necessary to melt gold and silver.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q11",
          number: "11",
          question: "<div style='text-align: justify;'>In an experiment 4.5 kg of a fuel was completely burnt. The heat produced was measured to be 180,000 kJ. Calculate the calorific value of the fuel.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Given: Mass of fuel = 4.5 kg, Total heat produced = 180,000 kJ.<br/><br/><b>Calorific Value</b> = Total Heat / Total Mass<br/>= 180,000 kJ / 4.5 kg = <b>40,000 kJ/kg</b>.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q12",
          number: "12",
          question: "<div style='text-align: justify;'>Can the process of rusting be called combustion? Discuss.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Yes, rusting can be considered a very slow form of combustion. It is a chemical process in which iron reacts with oxygen (in the presence of moisture) to release heat energy. However, it is called 'slow combustion' because the heat is released very gradually and no light is produced during the process.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-7-ex1-q13",
          number: "13",
          question: "<div style='text-align: justify;'>Abida and Ramesh were doing an experiment in which water was to be heated in a beaker. Abida kept the beaker near the wick in the yellow part of the candle flame. Ramesh kept the beaker in the outermost part of the flame. Whose water will get heated in a shorter time?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'><b>Ramesh\'s water</b> will get heated in a shorter time. This is because he kept the beaker in the outermost part of the flame, which is the hottest zone due to complete combustion. Abida kept her beaker in the yellow zone, which is only moderately hot.</div>",
          ],
          answer: "",
        },
      ],
    },
  ],
};
`;

fs.writeFileSync("client/data/content/c8-sci-7.ts", content, "utf8");
console.log(
  "Successfully updated Chapter 7 content with Candle Flame diagram.",
);
