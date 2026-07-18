import { ChapterContent } from "../types";

const themeColor = "#00B4DB"; // Cyan color for Geography Chapter 6

export const sstGeo6: ChapterContent = {
  id: "sst-geo-6",
  number: 6,
  title: "Manufacturing Industries",
  introduction:
    "Production of goods in large quantities after processing from raw materials to more valuable products is called manufacturing. Whether it's paper made from wood or iron from iron ore, manufacturing sectors form the backbone of a developing economy. Let's study how industrial development is crucial for our nation and how we classify these industries.",
  definitions: [
    {
      term: "Manufacturing",
      description:
        "The process of converting raw materials into more valuable goods in large quantities, e.g., paper from wood, sugar from sugarcane.",
    },
    {
      term: "Basic Industries",
      description:
        "Industries which supply their products or raw materials to manufacture other goods, e.g., iron and steel, copper smelting.",
    },
    {
      term: "Consumer Industries",
      description:
        "Industries that produce goods for direct use by consumers, e.g., sugar, toothpaste, paper, sewing machines.",
    },
    {
      term: "Light Industries",
      description:
        "Industries that use light raw materials and produce light utility goods, e.g., electrical goods.",
    },
    {
      term: "Heavy Industries",
      description:
        "Industries that use bulky and heavy raw materials and produce heavy goods, e.g., iron and steel, cement.",
    },
    {
      term: "Agro-Based Industries",
      description:
        "Industries that obtain their raw materials from agriculture, e.g., cotton, jute, silk, woollen textiles, sugar, edible oil.",
    },
    {
      term: "Mineral-Based Industries",
      description:
        "Industries that use minerals and metals as raw materials, e.g., iron and steel, cement, aluminium, machine tools.",
    },
    {
      term: "Joint Sector Industries",
      description:
        "Industries jointly run by the state and individuals or a group of individuals, e.g., Oil India Ltd (OIL).",
    },
  ],
  keyPoints: [
    "Manufacturing is considered the backbone of economic development, as it modernizes agriculture and reduces people's dependence on land by providing service/industrial jobs.",
    "Industrial location is determined by physical factors (raw material, power, water) and human factors (labor, capital, market, government policies).",
    "Agro-based industries like Jute are concentrated in West Bengal along the Hugli river due to water availability, cheap transport, and dense population.",
    "The iron and steel industry is a basic and heavy industry, heavily concentrated in the Chhotanagpur plateau region due to local availability of high-grade iron ore and cheap labor.",
    "Aluminium smelting is the second most important metallurgical industry in India, requiring regular power supply and bauxite as a key raw material.",
    "Industrial pollution degrades air (smoke, SO2, CO), water (chemical effluents), soil (solid waste), and generates high noise and thermal pollution.",
    "Mitigating environmental degradation requires treating industrial effluents at primary, secondary, and tertiary stages, rain-water harvesting, and fitting smokestacks with particulate filters.",
  ],
  formulas: [],
  crux: [
    "Manufacturing modernizes agriculture and creates service/industrial jobs.",
    "Industrial location depends on raw materials, power, labor, capital, and market.",
    "Basic industries supply raw materials to other industries (e.g. Iron & Steel).",
    "Jute is focused in Hugli basin; Iron & Steel in Chhotanagpur plateau.",
    "Limestone is the core raw material for Cement; Bauxite for Aluminium smelting.",
    "Minimizing pollution requires treating effluents, recycling water, and using particulate filters in smokestacks.",
  ],
  summary: [
    "Manufacturing industries process raw materials into high-value products, driving economic growth, reducing agrarian dependence, and earning foreign exchange through exports.",
    "Industries are classified based on raw materials (agro vs mineral), role (basic vs consumer), capital investment (large vs small scale), and ownership (public, private, joint, cooperative).",
    "Rapid industrialization has caused severe air, water, land, and noise pollution. Sustainable development requires adopting eco-friendly technologies, treating industrial wastes, and conserving water through recycling.",
  ],
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 17px;">Production of goods in large quantities after processing from raw materials to more valuable products is called manufacturing. Whether it's paper made from wood or iron from iron ore, manufacturing sectors form the backbone of a developing economy. Let's study how industrial development is crucial for our nation and how we classify these industries.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Manufacturing:</b> The process of converting raw materials into more valuable goods in large quantities, e.g., paper from wood, sugar from sugarcane.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Basic Industries:</b> Industries which supply their products or raw materials to manufacture other goods, e.g., iron and steel, copper smelting.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Consumer Industries:</b> Industries that produce goods for direct use by consumers, e.g., sugar, toothpaste, paper, sewing machines.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Light Industries:</b> Industries that use light raw materials and produce light utility goods, e.g., electrical goods.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Heavy Industries:</b> Industries that use bulky and heavy raw materials and produce heavy goods, e.g., iron and steel, cement.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Agro-Based Industries:</b> Industries that obtain their raw materials from agriculture, e.g., cotton, jute, silk, woollen textiles, sugar, edible oil.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Mineral-Based Industries:</b> Industries that use minerals and metals as raw materials, e.g., iron and steel, cement, aluminium, machine tools.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Joint Sector Industries:</b> Industries jointly run by the state and individuals or a group of individuals, e.g., Oil India Ltd (OIL).</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
            <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
                <li style="margin-bottom: 8px;">Manufacturing is considered the backbone of economic development, as it modernizes agriculture and reduces people's dependence on land by providing service/industrial jobs.</li>
                <li style="margin-bottom: 8px;">Industrial location is determined by physical factors (raw material, power, water) and human factors (labor, capital, market, government policies).</li>
                <li style="margin-bottom: 8px;">Agro-based industries like Jute are concentrated in West Bengal along the Hugli river due to water availability, cheap transport, and dense population.</li>
                <li style="margin-bottom: 8px;">The iron and steel industry is a basic and heavy industry, heavily concentrated in the Chhotanagpur plateau region due to local availability of high-grade iron ore and cheap labor.</li>
                <li style="margin-bottom: 8px;">Aluminium smelting is the second most important metallurgical industry in India, requiring regular power supply and bauxite as a key raw material.</li>
                <li style="margin-bottom: 8px;">Industrial pollution degrades air (smoke, SO2, CO), water (chemical effluents), soil (solid waste), and generates high noise and thermal pollution.</li>
                <li style="margin-bottom: 8px;">Mitigating environmental degradation requires treating industrial effluents at primary, secondary, and tertiary stages, rain-water harvesting, and fitting smokestacks with particulate filters.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
            <p style="line-height: 1.6; font-size: 16px;">Manufacturing industries process raw materials into high-value products, driving economic growth, reducing agrarian dependence, and earning foreign exchange through exports. Industries are classified based on raw materials (agro vs mineral), role (basic vs consumer), capital investment (large vs small scale), and ownership (public, private, joint, cooperative). Rapid industrialization has caused severe air, water, land, and noise pollution. Sustainable development requires adopting eco-friendly technologies, treating industrial wastes, and conserving water through recycling.</p>
        </div>
    `,
  htmlExercises: {
    "sg6-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <!-- 1. Multiple Choice Questions -->
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">1. Multiple choice questions.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(i) Which one of the following industries uses limestone as a raw material.</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Aluminium &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Cement</b> &nbsp;&nbsp; (c) Plastic &nbsp;&nbsp; (d) Automobile
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(ii) Which one of the following agencies markets steel for the public sector plants?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) HAIL &nbsp;&nbsp; <b style="color: ${themeColor};">(b) SAIL</b> &nbsp;&nbsp; (c) TATA Steel &nbsp;&nbsp; (d) MNCC
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(iii) Which one of the following industries uses bauxite as a raw material?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            <b style="color: ${themeColor};">(a) Aluminium Smelting</b> &nbsp;&nbsp; (b) Cement &nbsp;&nbsp; (c) Paper &nbsp;&nbsp; (d) Steel
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(iv) Which one of the following industries manufactures telephones, computer, etc.</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Steel &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Electronic</b> &nbsp;&nbsp; (c) Aluminium Smelting &nbsp;&nbsp; (d) Information Technology
                        </p>
                    </div>
                </div>

                <!-- 2. Answer the following briefly in not more than 30 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">2. Answer the following briefly in not more than 30 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) What is manufacturing?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Manufacturing</b> is the process of converting raw materials into more useful, valuable goods in large quantities (e.g., producing paper from wood or sugar from sugarcane).
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) Name any three physical factors for the location of the industry.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            The three physical factors are:
                            <br/>1. Easy availability of cheap raw materials.
                            <br/>2. Regular, uninterrupted supply of power (energy).
                            <br/>3. Abundant supply of water for manufacturing and cooling processes.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iii) Name any three human factors for the location of an industry.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            The three human factors are:
                            <br/>1. Availability of cheap and skilled labor.
                            <br/>2. Capital investment and credit facilities from banking systems.
                            <br/>3. Proximity to market centers and efficient transport networks.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iv) What are basic industries? Give an example.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Basic industries</b> are those which supply their finished products as raw materials to other industries to manufacture different goods. <i>Example:</i> The Iron and Steel industry (supplies steel to manufacture machines, tools, and automobiles).
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(v) Name the important raw materials used in the manufacturing of cement?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            The key bulky and heavy raw materials used to manufacture cement are <b>limestone, silica, alumina, and gypsum</b>, along with coal and electric power.
                        </p>
                    </div>
                </div>

                <!-- 3. Write the answers of the following questions in 120 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">3. Write the answers of the following questions in 120 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 22px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) How are integrated steel plants different from mini steel plants? What problems does the industry face? What recent developments have led to a rise in the production capacity?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Difference:</b> 
                            <br/>• <b>Integrated Steel Plants:</b> Large complex units that handle everything under one roof—from gathering raw materials (iron ore, coke, limestone) to smelting, refining, rolling, and shaping steel.
                            <br/>• <b>Mini Steel Plants:</b> Smaller units that use electric arc furnaces, recycling steel scrap and sponge iron. They mainly produce mild and alloy steel of custom specifications.
                            <br/><br/>
                            <b>Problems Faced:</b>
                            <br/>• High cost of coking coal and limited local availability.
                            <br/>• Lower productivity of labor compared to global standards.
                            <br/>• Irregular power supply and poor infrastructural support.
                            <br/><br/>
                            <b>Recent Developments:</b>
                            <br/>• Government liberalization policies and <b>Foreign Direct Investment (FDI)</b> have brought capital and modern technology.
                            <br/>• Technological advancements in steel-making by private entrepreneurs have significantly boosted productivity.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 22px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) How do industries pollute the environment?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Industries degrade and pollute the environment in four major ways:
                            <br/>• <b>Air Pollution:</b> High emission of toxic gases (sulfur dioxide, carbon monoxide) and particulate matter (dust, smoke) from chemical units, refineries, and fossil fuel burning.
                            <br/>• <b>Water Pollution:</b> Direct discharge of untreated organic and inorganic chemical effluents, heavy metals, and dyes into rivers and ponds.
                            <br/>• <b>Thermal Pollution:</b> Draining hot water from power plants and factories into lakes and rivers before cooling, killing aquatic life.
                            <br/>• <b>Noise Pollution:</b> High noise from machinery, generators, and drilling, causing hearing issues, stress, and anxiety in nearby residents.
                            <br/>• <b>Land/Soil Pollution:</b> Dumping of solid wastes like fly ash, slag, and plastic, making the land barren and contaminating groundwater through leaching.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iii) Discuss the steps to be taken to minimise environmental degradation by industry?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            To minimize industrial environmental degradation, the following steps must be taken:
                            <br/>• <b>Water Conservation:</b> Reusing and recycling water in multiple successive industrial stages, and harvesting rainwater to fulfill water demands.
                            <br/>• <b>Effluent Treatment:</b> Treating all industrial wastes before discharging them into water bodies:
                            <br/>1. *Primary treatment* (screening, grinding, sedimentation).
                            <br/>2. *Secondary treatment* (biological processes using microbes).
                            <br/>3. *Tertiary treatment* (recycling water using physical and chemical methods).
                            <br/>• <b>Air Protection:</b> Fitting smokestacks with particulate filters (electrostatic precipitators, fabric filters, scrubbers) and substituting coal with gas or oil.
                            <br/>• <b>Noise Control:</b> Redesigning machinery to operate silently, putting silencers on generators, and providing ear protection to factory workers.
                        </p>
                    </div>
                </div>
            </div>
        `,
  },
  exercises: [
    {
      id: "sg6-ex-all",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "sg6-mcq-1",
      question:
        "Which one of the following industries uses limestone as a raw material.",
      options: ["Aluminium", "Cement", "Plastic", "Automobile"],
      correctAnswer: "b",
    },
    {
      id: "sg6-mcq-2",
      question:
        "Which one of the following agencies markets steel for the public sector plants?",
      options: ["HAIL", "SAIL", "TATA Steel", "MNCC"],
      correctAnswer: "b",
    },
    {
      id: "sg6-mcq-3",
      question:
        "Which one of the following industries uses bauxite as a raw material?",
      options: ["Aluminium Smelting", "Cement", "Paper", "Steel"],
      correctAnswer: "a",
    },
    {
      id: "sg6-mcq-4",
      question:
        "Which one of the following industries manufactures telephones, computer, etc.",
      options: [
        "Steel",
        "Electronic",
        "Aluminium Smelting",
        "Information Technology",
      ],
      correctAnswer: "b",
    },
    {
      id: "sg6-mcq-5",
      question:
        "Which of the following is a completely agro-based industry?",
      options: [
        "Iron and Steel Industries",
        "Petrochemical Industries",
        "Cotton Textile Industries",
        "Cement Industries",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg6-mcq-6",
      question: "Why is the Jute industry mainly concentrated in West Bengal?",
      options: [
        "Abundant coal reserves",
        "Proximity to iron ore",
        "Banks of the Hugli river provide water for processing",
        "Cold climate",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg6-mcq-7",
      question: "Which city is known as the electronic capital of India?",
      options: ["Mumbai", "Bengaluru", "Hyderabad", "Noida"],
      correctAnswer: "b",
    },
    {
      id: "sg6-mcq-8",
      question:
        "Which famous plateau region has the maximum concentration of iron and steel industries?",
      options: [
        "Deccan Plateau",
        "Malwa Plateau",
        "Chotanagpur Plateau",
        "Meghalaya Plateau",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg6-mcq-9",
      question: "Which city is known as the 'Manchester of India'?",
      options: ["Mumbai", "Ahmedabad", "Coimbatore", "Kanpur"],
      correctAnswer: "b",
    },
    {
      id: "sg6-mcq-10",
      question:
        "What type of industry is owned and operated by a group of raw material producers?",
      options: [
        "Public sector",
        "Joint sector",
        "Cooperative sector",
        "Private sector",
      ],
      correctAnswer: "c",
    },
  ],
};
