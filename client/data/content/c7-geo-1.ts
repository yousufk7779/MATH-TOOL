import { ChapterContent } from "../types";

const themeColor = "#4CAF50"; // Green for Geography

export const c7Geo1: ChapterContent = {
  id: "c7-geo-1",
  number: 1,
  title: "Environment",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify;">
            <p>Environment is our basic life support system. It provides the air we breathe, the water we drink, the food we eat, and the land where we live. It is a combination of natural and human-made phenomena. While the natural environment refers to both biotic and abiotic conditions existing on the earth, the human environment reveals the activities, creations, and interactions among human beings.</p>
            
            <h3 style="color: ${themeColor}; text-align: left;">Key Definitions</h3>
            <p><b style="color: ${themeColor};">Ecosystem:</b> It is a system formed by the interaction of all living organisms with each other and with the physical and chemical factors of the environment in which they live.</p>
            <p><b style="color: ${themeColor};">Lithosphere:</b> The solid crust or the hard top layer of the earth made up of rocks and minerals.</p>
            <p><b style="color: ${themeColor};">Hydrosphere:</b> The domain of water which comprises various sources of water like rivers, lakes, seas, and oceans.</p>
            <p><b style="color: ${themeColor};">Atmosphere:</b> The thin layer of air that surrounds the earth, held by the gravitational force of the earth.</p>
            <p><b style="color: ${themeColor};">Biosphere:</b> A narrow zone of the earth where land, water, and air interact with each other to support life.</p>

            <h3 style="color: ${themeColor}; text-align: left;">Components of Environment</h3>
            <ul style="text-align: left;">
                <li><b style="color: ${themeColor};">Natural:</b> Land (Lithosphere), Air (Atmosphere), Water (Hydrosphere), and Living things (Biosphere).</li>
                <li><b style="color: ${themeColor};">Human-made:</b> Buildings, Parks, Bridges, Roads, Industries, and Monuments.</li>
                <li><b style="color: ${themeColor};">Human:</b> Individual, Family, Community, Religion, Educational, Economic, and Political situations.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left;">Biotic vs Abiotic</h3>
            <p><b style="color: ${themeColor};">Biotic:</b> The world of living organisms (e.g., plants and animals).</p>
            <p><b style="color: ${themeColor};">Abiotic:</b> The world of non-living elements (e.g., land).</p>
        </div>
    `,
  htmlExercises: {
    "c7g1-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify;">
                <!-- 1. Answer the following questions -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">1. Answer the following questions.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) What is an ecosystem?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> An ecosystem is a system formed by the interaction of all living organisms with each other and with the physical and chemical factors of the environment in which they live.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) What do you mean by natural environment?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Natural environment consists of land, water, air, plants, and animals that exist on earth without human interference.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iii) Which are the major components of the environment?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The major components of the environment are: (1) Natural environment (2) Human-made environment and (3) Human environment.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(iv) Give four examples of human made environment.</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Four examples of human-made environment are: (1) Buildings (2) Parks (3) Bridges and (4) Roads.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(v) What is lithosphere?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Lithosphere is the solid crust or the hard top layer of the earth made up of rocks and minerals and covered by a thin layer of soil.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vi) Which are the two major components of biotic environment?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The two major components of biotic environment are: (1) Plants and (2) Animals.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(vii) What is biosphere?</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Biosphere is a narrow zone of the earth where land, water, and air interact with each other to support life.</p>
                    </div>
                </div>

                <!-- 2. Tick the correct answer -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">2. Tick the correct answer.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(i) Which is not a natural ecosystem?</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Desert &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Aquarium</b> &nbsp;&nbsp; (c) Forest</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(ii) Which is not a component of human environment?</p>
                        <p style="color: #E0E0E0; margin-left: 10px;"><b style="color: ${themeColor};">(a) Land</b> &nbsp;&nbsp; (b) Religion &nbsp;&nbsp; (c) Community</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iii) Which is a human made environment?</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Mountain &nbsp;&nbsp; (b) Sea &nbsp;&nbsp; <b style="color: ${themeColor};">(c) Road</b></p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: #fff;">(iv) Which is a threat to environment?</p>
                        <p style="color: #E0E0E0; margin-left: 10px;">(a) Growing plant &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Growing population</b> &nbsp;&nbsp; (c) Growing crops</p>
                    </div>
                </div>

                <!-- 3. Match the following -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">3. Match the following.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555; width: 40%;">(i) Biosphere</td>
                            <td style="padding: 10px; border: 1px solid #555;">(e) narrow zone where land water and air interact</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(ii) Atmosphere</td>
                            <td style="padding: 10px; border: 1px solid #555;">(a) blanket of air which surrounds the earth</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iii) Hydrosphere</td>
                            <td style="padding: 10px; border: 1px solid #555;">(b) domain of water</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #555;">(iv) Environment</td>
                            <td style="padding: 10px; border: 1px solid #555;">(d) our surroundings</td>
                        </tr>
                    </table>
                </div>

                <!-- 4. Give reasons -->
                <div style="margin-bottom: 30px;">
                    <p style="color: ${themeColor}; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">4. Give reasons.</p>
                    
                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(i) Man modifies his environment</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Man modifies his environment to fulfill his needs and lead a comfortable life. He builds houses for shelter, cuts forests for agriculture, and builds factories for manufacturing products, thereby changing the natural surroundings.</p>
                    </div>

                    <div style="margin-bottom: 18px; margin-left: 10px;">
                        <p style="color: ${themeColor}; font-weight: bold;">(ii) Plants and animals depend on each other</p>
                        <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Plants provide food and oxygen to animals, while animals provide carbon dioxide to plants and help in the dispersal of seeds and pollination. This mutual dependence is essential for their survival and maintains the balance in nature.</p>
                    </div>
                </div>
            </div>
        `,
  },
  introduction: "Environment is our basic life support system.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "c7g1-mcq-1",
      question: "Which is not a natural ecosystem?",
      options: ["Desert", "Aquarium", "Forest", "Pond"],
      correctAnswer: "b",
    },
    {
      id: "c7g1-mcq-2",
      question: "Which is not a component of human environment?",
      options: ["Land", "Religion", "Community", "Family"],
      correctAnswer: "a",
    },
    {
      id: "c7g1-mcq-3",
      question: "Which is a human-made environment?",
      options: ["Mountain", "Sea", "Road", "Forest"],
      correctAnswer: "c",
    },
    {
      id: "c7g1-mcq-4",
      question: "Which is a threat to the environment?",
      options: [
        "Growing plant",
        "Growing population",
        "Growing crops",
        "None of these",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7g1-mcq-5",
      question: "The domain of water is called:",
      options: ["Atmosphere", "Hydrosphere", "Lithosphere", "Biosphere"],
      correctAnswer: "b",
    },
    {
      id: "c7g1-mcq-6",
      question: "A thin layer of air that surrounds the earth is:",
      options: ["Biosphere", "Hydrosphere", "Atmosphere", "Lithosphere"],
      correctAnswer: "c",
    },
    {
      id: "c7g1-mcq-7",
      question: "Biotic environment refers to:",
      options: [
        "World of non-living things",
        "World of living organisms",
        "World of air",
        "World of rocks",
      ],
      correctAnswer: "b",
    },
    {
      id: "c7g1-mcq-8",
      question: "Abiotic environment refers to:",
      options: [
        "World of non-living elements",
        "World of living organisms",
        "World of plants",
        "World of animals",
      ],
      correctAnswer: "a",
    },
    {
      id: "c7g1-mcq-9",
      question:
        "Which is the narrow zone where land, water and air interact to support life?",
      options: ["Lithosphere", "Atmosphere", "Hydrosphere", "Biosphere"],
      correctAnswer: "d",
    },
    {
      id: "c7g1-mcq-10",
      question: "The word 'Environment' is derived from which language?",
      options: ["French", "Latin", "Greek", "Spanish"],
      correctAnswer: "a",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "c7g1-ex-all",
      name: "Exercise",
      questions: [],
    },
  ],
  examples: [],
};
