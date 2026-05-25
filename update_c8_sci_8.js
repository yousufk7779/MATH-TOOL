const fs = require("fs");

const path8_9 =
  "C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\magnetic_needle_tester_diagram_1777803352734.png";
const b64_8_9 = fs.readFileSync(path8_9).toString("base64");

const path8_10 =
  "C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\bulb_tester_no_glow_diagram_1777803382636.png";
const b64_8_10 = fs.readFileSync(path8_10).toString("base64");

const content = `import { ChapterContent } from "../chapterContent";

export const c8Sci8: ChapterContent = {
  id: "c8-sci-8",
  number: 8,
  title: "Chemical Effects of Electric Current",
  introduction:
    "<div style='text-align: justify;'>Electric current can cause chemical changes when passed through certain liquids (electrolytes). In this chapter, we learn about the conductivity of liquids and the process of electroplating.</div>",
  definitions: [
    {
      term: "Electrolyte",
      description:
        "<div style='text-align: justify;'>A liquid that conducts electricity and undergoes chemical changes in the process.</div>",
    },
    {
      term: "Electroplating",
      description:
        "<div style='text-align: justify;'>The process of depositing a layer of any desired metal on another material by means of electricity.</div>",
    },
    {
      term: "Electrode",
      description:
        "<div style='text-align: justify;'>A conductor through which electricity enters or leaves an electrolyte.</div>",
    },
  ],
  keyPoints: [
    "<div style='text-align: justify;'>Most liquids that conduct electricity are solutions of acids, bases, and salts.</div>",
    "<div style='text-align: justify;'>The passage of an electric current through a conducting solution causes chemical effects like gas bubbles, metal deposits, or color changes.</div>",
    "<div style='text-align: justify;'>Electroplating is widely used in industry for coating metal objects with a thin layer of a different metal (e.g., chromium plating).</div>",
  ],
  crux: [
    "<div style='text-align: justify;'><b>Chemical Effects:</b> Evolution of gas, deposition of metal, change in color.</div>",
    "<div style='text-align: justify;'><b>Conductivity:</b> Solutions of acids, bases, and salts are good conductors.</div>",
  ],
  formulas: [],
  mcqs: [
    {
      id: "c8-sci-8-mcq-1",
      question: "<div style='text-align: justify;'>Which of the following liquids is a good conductor of electricity?</div>",
      options: [
        "<div style='text-align: justify;'>(a) Distilled water</div>",
        "<div style='text-align: justify;'>(b) Honey</div>",
        "<div style='text-align: justify;'>(c) Lemon juice</div>",
        "<div style='text-align: justify;'>(d) Vegetable oil</div>",
      ],
      correctAnswer: "c",
    },
    {
      id: "c8-sci-8-mcq-2",
      question: "<div style='text-align: justify;'>The process of depositing a layer of desired metal on another material is:</div>",
      options: [
        "<div style='text-align: justify;'>(a) Galvanization</div>",
        "<div style='text-align: justify;'>(b) Electroplating</div>",
        "<div style='text-align: justify;'>(c) Electrolysis</div>",
        "<div style='text-align: justify;'>(d) Tilling</div>",
      ],
      correctAnswer: "b",
    },
  ],
  examples: [],
  summary: [
    "<div style='text-align: justify;'>Chemical effects of electric current are used in various industrial applications like purification and coating of metals.</div>",
    "<div style='text-align: justify;'>Distilled water is a poor conductor, but adding salts or acids makes it a good conductor.</div>",
  ],
  exercises: [
    {
      id: "c8-sci-8-ex1",
      name: "Exercise",
      questions: [
        {
          id: "c8-sci-8-ex1-q1",
          number: "1",
          question: "<div style='text-align: justify;'>Fill in the blanks:<br/>(a) Most liquids that conduct electricity are solutions of ________, ________ and ________.<br/>(b) The passage of an electric current through a solution causes ________ effects.<br/>(c) If you pass current through copper sulphate solution, copper gets deposited on the plate connected to the ________ terminal of the battery.<br/>(d) The process of depositing a layer of any desired metal on another material by means of electricity is called ________.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) acids, bases, salts<br/>(b) chemical<br/>(c) negative<br/>(d) electroplating</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q2",
          number: "2",
          question: "<div style='text-align: justify;'>When the free ends of a tester are dipped into a solution, the magnetic needle shows deflection. Can you explain the reason?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The magnetic needle shows deflection because of the magnetic effect of electric current. When the free ends are dipped into the solution, the solution completes the circuit (if it is conducting), allowing current to flow. This flow of current produces a magnetic field around the wire, causing the needle to deflect.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q3",
          number: "3",
          question: "<div style='text-align: justify;'>Name three liquids, which when tested in the manner shown in Fig. 8.9, may cause the magnetic needle to deflect.<br/><br/><center><img src='data:image/png;base64,${b64_8_9}' style='max-width: 100%; border-radius: 8px; margin: 10px 0;'/></center></div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The following liquids are good conductors and will cause the needle to deflect:<br/>1. Lemon juice (contains acid).<br/>2. Vinegar (contains acid).<br/>3. Tap water or Salt solution.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q4",
          number: "4",
          question: "<div style='text-align: justify;'>The bulb does not glow in the setup shown in Fig. 8.10. List the possible reasons. Explain your answer.<br/><br/><center><img src='data:image/png;base64,${b64_8_10}' style='max-width: 100%; border-radius: 8px; margin: 10px 0;'/></center></div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The possible reasons are:<br/>1. The liquid in the beaker is a poor conductor (like distilled water or honey).<br/>2. The bulb is fused (broken filament).<br/>3. The battery/cells are exhausted or weak.<br/>4. The electrical connections are loose or dirty.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q5",
          number: "5",
          question: "<div style='text-align: justify;'>A tester is used to check the conduction of electricity through two liquids, labeled A and B. It is found that the bulb of the tester glows brightly for liquid A while it glows very dimly for liquid B. You would conclude that:<br/>(i) liquid A is a better conductor than liquid B.<br/>(ii) liquid B is a better conductor than liquid A.<br/>(iii) both liquids are equally conducting.<br/>(iv) conducting properties of liquid cannot be compared in this manner.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The correct conclusion is <b>(i) liquid A is a better conductor than liquid B</b>. A brighter glow indicates a higher flow of current, which happens in a better conducting solution.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q6",
          number: "6",
          question: "<div style='text-align: justify;'>Does pure water conduct electricity? If not, what can we do to make it conducting?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>No, pure (distilled) water does not conduct electricity because it lacks dissolved salts. To make it conducting, we can add a pinch of salt, a few drops of lemon juice, or some acid.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q7",
          number: "7",
          question: "<div style='text-align: justify;'>In case of a fire, before the firemen use the water hoses, they shut off the main electrical supply for the area. Explain why they do this.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Common water (from taps or tanks) is a good conductor of electricity. If the main electrical supply is not shut off, the water from the hoses could come in contact with live wires and conduct electricity to the firemen, causing severe or fatal electric shocks.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q8",
          number: "8",
          question: "<div style='text-align: justify;'>A child staying in a coastal region tests the drinking water and also the seawater with his tester. He finds that the compass needle deflects more in the case of seawater. Can you explain the reason?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Seawater contains a very high concentration of dissolved salts compared to ordinary drinking water. These salts produce a large number of ions, making seawater a much better conductor of electricity. Therefore, more current flows through the tester, causing a greater deflection in the compass needle.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q9",
          number: "9",
          question: "<div style='text-align: justify;'>Is it safe for the electrician to carry out electrical repairs outdoors during heavy downpour? Explain.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>No, it is extremely dangerous. Rainwater is not pure water; it dissolves gases and pollutants from the atmosphere which makes it a good conductor of electricity. An electrician working in heavy rain faces a high risk of electric shock as the wet surfaces and rain itself can conduct electricity easily.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q10",
          number: "10",
          question: "<div style='text-align: justify;'>Paheli had heard that rainwater is as good as distilled water. So she collected some rainwater in a clean glass tumbler and tested it using a tester. To her surprise she found that the compass needle showed deflection. What could be the reasons?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>While rainwater is initially pure, it passes through the atmosphere where it dissolves various gases like sulfur dioxide, carbon dioxide, and nitrogen oxides. These gases form mild acids in the water, providing ions that allow it to conduct electricity. Hence, the compass needle shows deflection.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q11",
          number: "11",
          question: "<div style='text-align: justify;'>Prepare a list of objects around you that are electroplated.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Common electroplated objects include:<br/>1. Door handles and bathroom taps (Chromium plating).<br/>2. Bicycle rims and handles (Chromium plating).<br/>3. Artificial jewelry (Gold or silver plating).<br/>4. Iron cans used for food storage (Tin plating).<br/>5. Car bumpers and parts.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-8-ex1-q12",
          number: "12",
          question: "<div style='text-align: justify;'>The process that you saw in Activity 8.7 is used for purification of copper. A thin plate of pure copper and a thick rod of impure copper are used as electrodes. Copper from impure rod is sought to be transfered to the thin copper plate. Which electrode should be attached to the positive terminal of battery and why?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The <b>thick rod of impure copper</b> should be attached to the <b>positive terminal</b> (anode) of the battery. When current passes through the copper sulphate solution, copper ions from the impure rod dissolve into the solution and get attracted to the negative terminal, where they deposit as pure copper on the thin plate. This way, the impure rod gradually dissolves, and pure copper is collected.</div>",
          ],
          answer: "",
        },
      ],
    },
  ],
};
`;

fs.writeFileSync("client/data/content/c8-sci-8.ts", content, "utf8");
console.log("Successfully updated Chapter 8 content with diagrams.");
