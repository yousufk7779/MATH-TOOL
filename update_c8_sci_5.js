const fs = require("fs");
const path = require("path");

const imagePath =
  "C:\\Users\\hp\\.gemini\\antigravity\\brain\\03ee5b4a-e2c1-43ac-867b-0b6e5c8fd885\\human_larynx_diagram_1777801777037.png";
const b64 = fs.readFileSync(imagePath).toString("base64");

const content = `import { ChapterContent } from "../chapterContent";

export const c8Sci5: ChapterContent = {
  id: "c8-sci-5",
  number: 5,
  title: "Sound",
  introduction:
    "<div style='text-align: justify;'>Sound plays an important role in our lives, helping us to communicate with each other. In this chapter, we learn how sound is produced, how it travels through different media, and how we hear it.</div>",
  definitions: [
    {
      term: "Vibration",
      description:
        "<div style='text-align: justify;'>The to and fro or back and forth motion of an object.</div>",
    },
    {
      term: "Frequency",
      description:
        "<div style='text-align: justify;'>The number of oscillations or vibrations per second, measured in Hertz (Hz).</div>",
    },
    {
      term: "Amplitude",
      description:
        "<div style='text-align: justify;'>The maximum displacement of a vibrating object from its central position.</div>",
    },
  ],
  keyPoints: [
    "<div style='text-align: justify;'>Sound is produced by vibrating objects and requires a medium (solid, liquid, or gas) to travel.</div>",
    "<div style='text-align: justify;'>Loudness of sound depends on the amplitude of vibration, while pitch depends on the frequency.</div>",
    "<div style='text-align: justify;'>The human ear detects sound vibrations through the eardrum which sends signals to the brain.</div>",
    "<div style='text-align: justify;'>Unpleasant and loud sounds are called noise, and excessive noise leads to noise pollution.</div>",
  ],
  crux: [
    "<div style='text-align: justify;'><b>Audible Range:</b> 20 Hz to 20,000 Hz for humans.</div>",
    "<div style='text-align: justify;'><b>Sound Production:</b> Humans use the larynx (voice box) with two vocal cords.</div>",
  ],
  formulas: [
    {
      name: "Frequency",
      formula: "Frequency (f) = Number of oscillations / Time (t)",
    },
    {
      name: "Time Period",
      formula: "Time Period (T) = 1 / Frequency (f)",
    },
  ],
  mcqs: [
    {
      id: "c8-sci-5-mcq-1",
      question: "<div style='text-align: justify;'>Sound can travel through:</div>",
      options: [
        "<div style='text-align: justify;'>(a) gases only</div>",
        "<div style='text-align: justify;'>(b) solids only</div>",
        "<div style='text-align: justify;'>(c) liquids only</div>",
        "<div style='text-align: justify;'>(d) solids, liquids and gases</div>",
      ],
      correctAnswer: "d",
    },
    {
      id: "c8-sci-5-mcq-2",
      question: "<div style='text-align: justify;'>Which of the following voices is likely to have minimum frequency?</div>",
      options: [
        "<div style='text-align: justify;'>(a) Baby girl</div>",
        "<div style='text-align: justify;'>(b) Baby boy</div>",
        "<div style='text-align: justify;'>(c) A man</div>",
        "<div style='text-align: justify;'>(d) A woman</div>",
      ],
      correctAnswer: "c",
    },
  ],
  examples: [],
  summary: [
    "<div style='text-align: justify;'>Sound is produced by vibrations and needs a medium to travel. It cannot travel in vacuum.</div>",
    "<div style='text-align: justify;'>Loudness is proportional to the square of amplitude. Pitch is determined by frequency.</div>",
    "<div style='text-align: justify;'>Noise pollution can cause serious health problems and should be controlled.</div>",
  ],
  exercises: [
    {
      id: "c8-sci-5-ex1",
      name: "Exercise",
      questions: [
        {
          id: "c8-sci-5-ex1-q1",
          number: "1",
          question: "<div style='text-align: justify;'>Sound can travel through (Already provided in MCQs section).</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Please refer to the MCQs section for the answer. (Correct option: d)</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q2",
          number: "2",
          question: "<div style='text-align: justify;'>Which of the following voices is likely to have minimum frequency? (Already provided in MCQs section).</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Please refer to the MCQs section for the answer. (Correct option: c)</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q3",
          number: "3",
          question: "<div style='text-align: justify;'>In the following statements, tick T against those which are true, and F against those which are false:<br/>(a) Sound cannot travel in vacuum. ( )<br/>(b) The number of oscillations per second of a vibrating object is called its time period. ( )<br/>(c) If the amplitude of vibration is large, sound is feeble. ( )<br/>(d) For human ears, the audible range is 20 Hz to 20,000 Hz. ( )<br/>(e) The lower the frequency of vibration, the higher is the pitch. ( )<br/>(f) Unwanted or unpleasant sound is termed as music. ( )<br/>(g) Noise pollution may cause partial hearing impairment. ( )</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) True<br/>(b) False (It is called frequency)<br/>(c) False (Large amplitude means loud sound)<br/>(d) True<br/>(e) False (Lower frequency means lower pitch)<br/>(f) False (It is called noise)<br/>(g) True</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q4",
          number: "4",
          question: "<div style='text-align: justify;'>Fill in the blanks with suitable words:<br/>(a) Time taken by an object to complete one oscillation is called ________.<br/>(b) Loudness is determined by the ________ of vibration.<br/>(c) The unit of frequency is ________.<br/>(d) Unwanted sound is called ________.<br/>(e) Shrillness of a sound is determined by the ________ of vibration.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) time period<br/>(b) amplitude<br/>(c) hertz (Hz)<br/>(d) noise<br/>(e) frequency</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q5",
          number: "5",
          question: "<div style='text-align: justify;'>A pendulum oscillates 40 times in 4 seconds. Find its time period and frequency.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Given: Number of oscillations = 40, Total time = 4 s.<br/><br/><b>Frequency (f)</b> = Number of oscillations / Time = 40 / 4 = 10 Hz.<br/><b>Time Period (T)</b> = 1 / Frequency = 1 / 10 = 0.1 s.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q6",
          number: "6",
          question: "<div style='text-align: justify;'>The sound from a mosquito is produced when it vibrates its wings at an average rate of 500 vibrations per second. What is the time period of the vibration?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Given: Frequency (f) = 500 Hz (vibrations per second).<br/><br/><b>Time Period (T)</b> = 1 / Frequency = 1 / 500 = 0.002 s.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q7",
          number: "7",
          question: "<div style='text-align: justify;'>Identify the part which vibrates to produce sound in the following instruments:<br/>(a) Dholak<br/>(b) Sitar<br/>(c) Flute</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Answers:<br/>(a) Dholak: Stretched membrane (skin).<br/>(b) Sitar: Stretched strings.<br/>(c) Flute: Air column.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q8",
          number: "8",
          question: "<div style='text-align: justify;'>What is the difference between noise and music? Can music become noise sometimes?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'><b>Noise:</b> It is an unpleasant, loud, and irregular sound that causes discomfort (e.g., sound of traffic or machinery).<br/><b>Music:</b> It is a pleasant, rhythmic, and regular sound that is soothing to the ears (e.g., sound of a violin or flute).<br/><br/>Yes, music can become noise if it is played at very high volumes, which makes it unpleasant and potentially harmful to the ears.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q9",
          number: "9",
          question: "<div style='text-align: justify;'>List sources of noise pollution in your surroundings.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Major sources of noise pollution include:<br/>1. Sounds of vehicles (horns and engines).<br/>2. Explosions, including bursting of crackers.<br/>3. Machines in factories.<br/>4. Loudspeakers used at social or religious gatherings.<br/>5. Home appliances like desert coolers and air conditioners.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q10",
          number: "10",
          question: "<div style='text-align: justify;'>Explain in what way noise pollution is harmful to humans.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>Noise pollution is harmful in many ways:<br/>1. It can cause lack of sleep (insomnia).<br/>2. It leads to hypertension (high blood pressure).<br/>3. It causes anxiety and irritability.<br/>4. Prolonged exposure can lead to temporary or even permanent hearing impairment.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q11",
          number: "11",
          question: "<div style='text-align: justify;'>Your parents are going to buy a house. They have been offered one on the roadside and another three lanes away from the roadside. Which house would you suggest your parents should buy? Explain your answer.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>I would suggest buying the house <b>three lanes away</b> from the roadside. This is because the house on the roadside would be exposed to heavy noise pollution from traffic and honking, which can affect health and peace of mind. The house three lanes away will be much quieter and safer for long-term living.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q12",
          number: "12",
          question: "<div style='text-align: justify;'>Sketch larynx and explain its function in your own words.</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>In humans, the sound is produced by the larynx (also called the voice box). It is located at the upper end of the windpipe. Two vocal cords are stretched across the larynx in such a way that it leaves a narrow slit between them for the passage of air.<br/><br/><center><img src='data:image/png;base64,${b64}' style='max-width: 100%; border-radius: 8px; margin: 10px 0;'/></center><br/><b>Function:</b> When the lungs force air through the narrow slit, the vocal cords vibrate, producing sound. Muscles attached to the vocal cords can make them tight or loose, which changes the quality and pitch of the voice.</div>",
          ],
          answer: "",
        },
        {
          id: "c8-sci-5-ex1-q13",
          number: "13",
          question: "<div style='text-align: justify;'>Lightning and thunder take place in the sky at the same time and at the same distance from us. Lightning is seen earlier and thunder is heard later. Can you explain?</div>",
          solution: [
            "<div style='color: #FFFFFF; text-align: justify;'>This happens because the <b>speed of light</b> is much faster than the <b>speed of sound</b>. Light travels at approximately 300,000,000 meters per second, while sound travels at only about 340 meters per second in air. Therefore, the light from the lightning reaches us almost instantly, while the sound of thunder takes some time to cover the same distance.</div>",
          ],
          answer: "",
        },
      ],
    },
  ],
};
`;

fs.writeFileSync("client/data/content/c8-sci-5.ts", content, "utf8");
console.log("Successfully updated Chapter 5 content with Larynx diagram.");
