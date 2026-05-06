const fs = require('fs');

const imagePath = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\gold_leaf_electroscope_diagram_1777804282130.png';
const b64 = fs.readFileSync(imagePath).toString('base64');

const content = `import { ChapterContent } from "../chapterContent";

export const c8Sci13: ChapterContent = {
  id: "c8-sci-13",
  number: 13,
  title: "Some Natural Phenomenon",
  introduction:
    "<div style='text-align: justify;'>Nature can be beautiful but also destructive. In this chapter, we study two destructive natural phenomena: lightning and earthquakes. We learn about their causes and how we can protect ourselves from them.</div>",
  definitions: [
    {
      term: "Electroscope",
      description:
        "<div style='text-align: justify;'>A simple instrument used to detect whether an object is carrying a charge or not.</div>",
    },
    {
      term: "Earthing",
      description:
        "<div style='text-align: justify;'>The process of transferring charge from a charged object to the Earth.</div>",
    },
    {
      term: "Richter Scale",
      description:
        "<div style='text-align: justify;'>The scale on which the destructive energy (magnitude) of an earthquake is measured.</div>",
    },
  ],
  keyPoints: [
    "<div style='text-align: justify;'>Lightning is caused by the accumulation of huge amounts of static charges in the clouds.</div>",
    "<div style='text-align: justify;'>Earthquakes are caused by sudden disturbances or tremors deep inside the Earth's crust due to plate movements.</div>",
    "<div style='text-align: justify;'>Like charges repel each other, while unlike charges attract each other.</div>",
    "<div style='text-align: justify;'>We can minimize the damage from these phenomena by following safety measures and using protection devices like lightning conductors.</div>",
  ],
  crux: [
    "<div style='text-align: justify;'><b>Lightning:</b> Electric discharge between clouds and earth.</div>",
    "<div style='text-align: justify;'><b>Earthquake:</b> Measured by Seismograph on Richter scale.</div>",
  ],
  formulas: [],
  mcqs: [
    {
      id: "c8-sci-13-mcq-1",
      question: "<div style='text-align: justify;'>Which of the following cannot be charged easily by friction?</div>",
      options: [
        "<div style='text-align: justify;'>(a) A plastic scale</div>",
        "<div style='text-align: justify;'>(b) A copper rod</div>",
        "<div style='text-align: justify;'>(c) An inflated balloon</div>",
        "<div style='text-align: justify;'>(d) A woollen cloth</div>",
      ],
      correctAnswer: "b",
    },
    {
      id: "c8-sci-13-mcq-2",
      question: "<div style='text-align: justify;'>When a glass rod is rubbed with silk, the rod:</div>",
      options: [
        "<div style='text-align: justify;'>(a) and cloth both acquire positive charge</div>",
        "<div style='text-align: justify;'>(b) becomes positively charged while cloth becomes negative</div>",
        "<div style='text-align: justify;'>(c) and cloth both acquire negative charge</div>",
        "<div style='text-align: justify;'>(d) becomes negatively charged while cloth becomes positive</div>",
      ],
      correctAnswer: "b",
    },
  ],
  examples: [],
  summary: [
    "<div style='text-align: justify;'>Static electricity and tectonic movements are powerful natural forces.</div>",
    "<div style='text-align: justify;'>Understanding science helps us predict (to some extent) and prepare for natural disasters.</div>",
  ],
  exercises: [
    {
      id: "c8-sci-13-ex1",
      name: "Exercise",
      questions: [
        {
          id: "c8-sci-13-ex1-q1",
          number: "1",
          question: "<div style='text-align: justify;'>Which of the following cannot be charged easily by friction? (Already provided in MCQs).</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Correct option is <b>(b) A copper rod</b>. This is because copper is a good conductor and any charge produced on it by friction is immediately carried away by our body or the surrounding medium.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q2",
          number: "2",
          question: "<div style='text-align: justify;'>When a glass rod is rubbed with a piece of silk cloth the rod (Already provided in MCQs).</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Correct option is <b>(b) becomes positively charged while the cloth has a negative charge</b>. Friction causes electrons to move from the glass rod to the silk cloth.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q3",
          number: "3",
          question: "<div style='text-align: justify;'>Write T against true and F against false in the following statements:<br/>(a) Like charges attract each other. ( )<br/>(b) A charged glass rod attract a charged plastic straw. ( )<br/>(c) Lightning conductor cannot protect a building from lightning. ( )<br/>(d) Earthquakes can be predicted in advance. ( )</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) False (Like charges repel)<br/>(b) True (Unlike charges attract)<br/>(c) False (It is designed to protect buildings)<br/>(d) False (Earthquakes are unpredictable)</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q4",
          number: "4",
          question: "<div style='text-align: justify;'>Sometime, a crackling sound is heard while taking off sweater during winters. Explain.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>When we take off a sweater, friction occurs between the sweater and our body/inner clothes. This causes accumulation of static charges. The discharge of these accumulated charges through the air causes tiny sparks and the crackling sound.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q5",
          number: "5",
          question: "<div style='text-align: justify;'>Explain why a charged body loses its charge if we touch it with our hand?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The human body is a conductor of electricity. When we touch a charged body, the excess charge flows from the body through our hands and body to the ground. This process is called <b>earthing</b>.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q6",
          number: "6",
          question: "<div style='text-align: justify;'>Name the scale on which the destructive energy of an earthquake is measured. An earthquake measures 3 on this scale. Would it be recorded by a seismograph? Is it likely to cause much damage?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>The destructive energy is measured on the <b>Richter scale</b>.<br/>1. Yes, an earthquake of magnitude 3 would be recorded by a sensitive seismograph.<br/>2. No, it is not likely to cause much damage, as magnitude 3 is considered a very weak earthquake.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q7",
          number: "7",
          question: "<div style='text-align: justify;'>Suggest three measures to protect ourselves from lightning.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>1. Stay indoors and avoid open spaces like fields or rooftops.<br/>2. Unplug electrical appliances like TVs, computers, and telephones.<br/>3. Avoid touching running water (do not take a bath or wash hands) during a thunderstorm.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q8",
          number: "8",
          question: "<div style='text-align: justify;'>Explain why a charged balloon is repelled by another charged balloon whereas an uncharged balloon is attracted by another charged balloon?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>1. Two charged balloons have similar charges (both positive or both negative). Since <b>like charges repel</b>, they push each other away.<br/>2. A charged balloon induces an opposite charge on the surface of an uncharged balloon. Since <b>unlike charges attract</b>, the uncharged balloon is pulled towards the charged one.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q9",
          number: "9",
          question: "<div style='text-align: justify;'>Describe with the help of a diagram an instrument which can be used to detect a charged body.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>An instrument used to detect charge is called an <b>Electroscope</b>. It consists of a metal rod with a disc at the top and two thin metal (gold or aluminum) leaves at the bottom, enclosed in a glass jar.<br/><br/><center><img src='data:image/png;base64,${b64}' style='max-width: 100%; border-radius: 8px; margin: 10px 0;'/></center><br/>When a charged object touches the metal disc, the charge travels down the rod to the leaves. Since both leaves acquire the same charge, they repel each other and diverge, indicating the presence of a charge.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q10",
          number: "10",
          question: "<div style='text-align: justify;'>List three states in India where earthquakes are more likely to strike.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>1. Jammu and Kashmir.<br/>2. Himachal Pradesh.<br/>3. Gujarat (specifically the Kutch region).</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q11",
          number: "11",
          question: "<div style='text-align: justify;'>Suppose you are outside your home and an earthquake strikes. What precaution would you take to protect yourself?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>1. Move to an open area away from tall buildings, trees, and overhead power lines.<br/>2. If you are in a vehicle, stay inside and ask the driver to move to a clear spot away from bridges or trees. Stay inside until the tremors stop.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-13-ex1-q12",
          number: "12",
          question: "<div style='text-align: justify;'>The weather department has predicted that a thunderstorm is likely to occur on a certain day. Suppose you have to go out on that day. Would you carry an umbrella? Explain.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'><b>No</b>, carrying an umbrella during a thunderstorm is not a good idea. Umbrellas have metal rods and tips which are excellent conductors of electricity. They can attract lightning and conduct it directly to the person holding them, causing serious injury or death.</div>",
          ],
          answer: "",
        },
      ],
    },
  ],
};
`;

fs.writeFileSync('client/data/content/c8-sci-13.ts', content, 'utf8');
console.log('Successfully updated Chapter 13 content with Electroscope diagram.');
