import { ChapterContent } from "../types";

const themeColor = "#66BB6A"; // Matches getChapterGradient for c7-geo-1

export const c7Geo1: ChapterContent = {
  id: "c7-geo-1",
  number: 1,
  title: "Environment",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">Our environment is everything that surrounds us—including living things (biotic) like plants and animals, and non-living things (abiotic) like land, water, and air. This chapter helps us understand the natural environment, human-made modifications, and the delicate balance of ecosystems.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Domains of Environment</h3>
            <p><b style="color: ${themeColor};">Lithosphere:</b> The solid crust or the hard top layer of the Earth made of rocks and minerals, covered by a thin layer of soil.</p>
            <p><b style="color: ${themeColor};">Hydrosphere:</b> The domain of water, comprising various sources of water like rivers, lakes, seas, and oceans.</p>
            <p><b style="color: ${themeColor};">Atmosphere:</b> The thin blanket of air that surrounds the Earth, held by the gravitational force of the Earth.</p>
            <p><b style="color: ${themeColor};">Biosphere:</b> A narrow zone of the Earth where land, water, and air interact with each other to support life.</p>
 
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Biotic vs Abiotic</h3>
            <ul style="text-align: left; line-height: 1.6; font-size: 15px; padding-left: 20px;">
                <li><b style="color: ${themeColor};">Biotic:</b> The world of living organisms (e.g., plants and animals).</li>
                <li><b style="color: ${themeColor};">Abiotic:</b> The world of non-living elements (e.g., land, water, air).</li>
            </ul>
 
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Ecosystem</h3>
            <p style="line-height: 1.6; font-size: 15px;">It is a system formed by the interaction of all living organisms with each other and with the physical and chemical factors of the environment in which they live, all linked by transfer of energy and material.</p>
        </div>
    `,
  htmlExercises: {
    "c7g1-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Answer the following questions:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) What is an ecosystem?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> An ecosystem is a community of living organisms interacting with each other and their physical environment, linked by the transfer of energy and materials.</p>
                </div>
 
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) What do you mean by natural environment?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The natural environment consists of all living and non-living things that occur naturally on Earth. It comprises land (lithosphere), water (hydrosphere), air (atmosphere), plants, and animals.</p>
                </div>
 
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iii) Which are the major components of the environment?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The major components are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Natural environment:</b> Land, water, air, plants, and animals.</li>
                            <li><b>Human-made environment:</b> Buildings, parks, bridges, roads, and factories.</li>
                            <li><b>Human environment:</b> Individuals, families, communities, and societies.</li>
                        </ul>
                    </p>
                </div>
 
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(iv) Give four examples of human made environment.</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Four examples are:
                        <ol style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>Buildings</li>
                            <li>Roads and Bridges</li>
                            <li>Parks</li>
                            <li>Factories</li>
                        </ol>
                    </p>
                </div>
 
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(v) What is lithosphere?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The lithosphere is the solid crust or the hard top layer of the Earth. It is made of rocks and minerals and is covered by a thin layer of soil. It provides land for agriculture, forests, and human settlements.</p>
                </div>
 
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(vi) Which are the two major components of biotic environment?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The two major components are:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>Plants</li>
                            <li>Animals</li>
                        </ul>
                    </p>
                </div>
 
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(vii) What is biosphere?</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The biosphere is the narrow zone of the Earth where land, water, and air interact with each other to support life. It includes both plant and animal kingdoms.</p>
                </div>
 
                <!-- Q2 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 30px;">2. Tick the correct answer:</h3>
                
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(i) Which is not a natural ecosystem?</b></p>
                    <p style="margin-left: 15px;">(a) Desert &nbsp;&nbsp;&nbsp;&nbsp; (b) Aquarium &nbsp;&nbsp;&nbsp;&nbsp; (c) Forest</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Aquarium</b></p>
                </div>
 
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(ii) Which is not a component of human environment?</b></p>
                    <p style="margin-left: 15px;">(a) Land &nbsp;&nbsp;&nbsp;&nbsp; (b) Religion &nbsp;&nbsp;&nbsp;&nbsp; (c) Community</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (a) Land</b></p>
                </div>
 
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iii) Which is a human made environment?</b></p>
                    <p style="margin-left: 15px;">(a) Mountain &nbsp;&nbsp;&nbsp;&nbsp; (b) Sea &nbsp;&nbsp;&nbsp;&nbsp; (c) Road</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (c) Road</b></p>
                </div>
 
                <div style="margin-bottom: 20px; text-align: left; color: #E0E0E0; line-height: 1.5;">
                    <p><b>(iv) Which is a threat to environment?</b></p>
                    <p style="margin-left: 15px;">(a) Growing plant &nbsp;&nbsp;&nbsp;&nbsp; (b) Growing population &nbsp;&nbsp;&nbsp;&nbsp; (c) Growing crops</p>
                    <p style="margin-left: 15px; color: ${themeColor};"><b>✓ Answer: (b) Growing population</b></p>
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
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(i) Biosphere</td>
                            <td style="padding: 8px;">(e) Narrow zone where land, water and air interact</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(ii) Atmosphere</td>
                            <td style="padding: 8px;">(a) Blanket of air which surrounds the earth</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iii) Hydrosphere</td>
                            <td style="padding: 8px;">(b) Domain of water</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 8px; font-weight: bold; color: ${themeColor};">(iv) Environment</td>
                            <td style="padding: 8px;">(d) Our surroundings</td>
                        </tr>
                    </tbody>
                </table>
 
                <!-- Q4 -->
                <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 35px;">4. Give reasons:</h3>
                
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(i) Man modifies his environment:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Humans modify the natural environment to satisfy their growing needs and live comfortably. For example, they build houses, roads, factories, and clear land for farming.</p>
                </div>
 
                <div style="margin-bottom: 20px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 5px;">(ii) Plants and animals depend on each other:</p>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Plants produce food and oxygen, which animals need to survive. In return, animals breathe out carbon dioxide needed by plants, and their waste adds nutrients to the soil.</p>
                </div>
 
            </div>
        `,
  },
  introduction:
    "In this chapter, we explore our environment, key domains, and ecosystems.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [{ id: "c7g1-ex-all", name: "Chapter Solutions", questions: [] }],
  examples: [],
  mcqs: [
    {
      id: "cg1-mcq-1",
      question: "What is the world of living organisms called?",
      options: ["Abiotic", "Biotic", "Artificial", "Modern"],
      correctAnswer: "b",
      explanation:
        "Biotic refers to the living components of the environment, like plants and animals.",
    },
    {
      id: "cg1-mcq-2",
      question: "Which of the following is NOT a natural ecosystem?",
      options: ["Forest", "Aquarium", "Desert", "Ocean"],
      correctAnswer: "b",
      explanation:
        "An aquarium is human-made, whereas forests, deserts, and oceans occur naturally.",
    },
    {
      id: "cg1-mcq-3",
      question:
        "The solid crust or the hard top layer of the Earth is called the:",
      options: ["Atmosphere", "Hydrosphere", "Lithosphere", "Biosphere"],
      correctAnswer: "c",
      explanation:
        "Lithosphere is the solid top layer made of rocks and minerals.",
    },
    {
      id: "cg1-mcq-4",
      question: "Which gas protects us from the harmful rays of the sun?",
      options: ["Oxygen", "Ozone", "Nitrogen", "Helium"],
      correctAnswer: "b",
      explanation:
        "The ozone layer in the atmosphere filters out harmful ultraviolet (UV) solar rays.",
    },
    {
      id: "cg1-mcq-5",
      question: "The domain of water is referred to as:",
      options: ["Atmosphere", "Hydrosphere", "Biosphere", "Lithosphere"],
      correctAnswer: "b",
      explanation:
        "Hydrosphere is the water domain of the Earth, including oceans, rivers, and lakes.",
    },
    {
      id: "cg1-mcq-6",
      question: "The thin blanket of air that surrounds the Earth is the:",
      options: ["Biosphere", "Atmosphere", "Lithosphere", "Hydrosphere"],
      correctAnswer: "b",
      explanation:
        "The atmosphere is the protective layer of air held by the Earth's gravity.",
    },
    {
      id: "cg1-mcq-7",
      question:
        "The narrow zone where land, water, and air interact to support life is:",
      options: ["Troposphere", "Stratosphere", "Biosphere", "Mesosphere"],
      correctAnswer: "c",
      explanation:
        "Biosphere is the zone of life where biotic and abiotic components interact.",
    },
    {
      id: "cg1-mcq-8",
      question: "Which of these is a human-made environment?",
      options: ["Mountain", "Sea", "Road", "Forest"],
      correctAnswer: "c",
      explanation:
        "Roads are built by humans, while mountains, seas, and forests are natural.",
    },
    {
      id: "cg1-mcq-9",
      question: "When is World Environment Day celebrated every year?",
      options: ["5th June", "15th August", "26th January", "2nd October"],
      correctAnswer: "a",
      explanation:
        "World Environment Day is celebrated globally on June 5th to raise eco-awareness.",
    },
    {
      id: "cg1-mcq-10",
      question: "Which of the following is a threat to our environment?",
      options: [
        "Growing plants",
        "Growing population",
        "Growing crops",
        "Rainfall",
      ],
      correctAnswer: "b",
      explanation:
        "Rapidly growing human population increases pressure on natural resources.",
    },
  ],
  summary: [],
};
