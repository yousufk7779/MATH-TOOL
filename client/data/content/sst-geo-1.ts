import { ChapterContent } from "../types";

const themeColor = "#66BB6A"; // Green color for Geography Chapter 1

export const sstGeo1: ChapterContent = {
  id: "sst-geo-1",
  number: 1,
  title: "Resources and Development",
  introduction:
    "Everything available in our environment that can be used to satisfy our needs is a resource. But wait! Is a piece of rock a resource? Only if we have the technology to use it, the money to afford it, and society's permission to use it. Let's learn how we categorize resources and how important it is to plan their development.",
  definitions: [
    {
      term: "Resource",
      description:
        "Everything available in our environment which can be used to satisfy our needs, provided it is technologically accessible, economically feasible, and culturally acceptable.",
    },
    {
      term: "Renewable Resources",
      description:
        "Resources which can be renewed or reproduced by physical, chemical, or mechanical processes, such as solar and wind energy, water, forests, and wildlife.",
    },
    {
      term: "Non-Renewable Resources",
      description:
        "Resources which occur over a very long geological time and take millions of years in their formation. Once exhausted, they cannot be easily replenished, such as coal and metals.",
    },
    {
      term: "Sustainable Development",
      description:
        "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs, without causing damage to the environment.",
    },
    {
      term: "Gully Erosion",
      description:
        "The process where running water cuts through clayey soils, forming deep channels called gullies, making the land unfit for cultivation (referred to as badland).",
    },
    {
      term: "Sheet Erosion",
      description:
        "When water flows as a sheet over large areas down a slope, washing away the topsoil over a wide area.",
    },
  ],
  keyPoints: [
    "Resources are classified on the basis of origin (biotic/abiotic), exhaustibility (renewable/non-renewable), ownership (individual/community/national/international), and status of development (potential/developed/stock/reserves).",
    "Indiscriminate use of resources by humans has led to global ecological crises like global warming, ozone layer depletion, environmental pollution, and land degradation.",
    "Resource planning is essential in a country like India which has enormous diversity in resource availability. Some regions are rich in certain resources but deficient in others.",
    "The first International Earth Summit was held in Rio de Janeiro, Brazil in 1992, where world leaders signed Agenda 21 to achieve global sustainable development.",
    "India has a variety of relief features: 43% plains (agriculture and industry), 30% mountains (tourism and perennial rivers), and 27% plateaus (rich reserves of minerals, fossil fuels, and forests).",
    "Land degradation is caused by mining (Jharkhand, MP, Chhattisgarh), overgrazing (Gujarat, Rajasthan, Maharashtra), and over-irrigation (Punjab, Haryana, Western UP).",
    "India has diverse soil types: Alluvial soil (most fertile and widespread), Black soil (ideal for cotton, also called Regur soil), Red and Yellow soil, Laterite soil, Arid soil, and Forest/Mountain soil.",
  ],
  formulas: [],
  crux: [
    "Resources must be technologically, economically, and culturally viable.",
    "Rio Summit 1992 focused on Sustainable Development and Agenda 21.",
    "India's land features: 43% plains, 30% mountains, 27% plateau.",
    "Over-irrigation in Punjab and mining in Jharkhand cause land degradation.",
    "Alluvial soil is most fertile; Black soil (Regur) is perfect for cotton.",
    "Terrace farming and shelterbelts are key to stopping soil erosion in hills.",
  ],
  summary: [
    "Resources are essential for human survival and economic development. Categorizing resources and planning their sustainable use is vital for ecological balance.",
    "Land is a limited and highly valuable resource. Unplanned human actions have led to land degradation, which can be checked by reclaiming wastelands and planning land usage.",
    "Soil is a vital renewable natural resource that takes millions of years to form. Diverse relief features, climate, and parent rocks have produced various soil types in India, which require dedicated soil conservation methods like contour plowing and terrace farming to prevent erosion.",
  ],
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 17px;">Everything available in our environment that can be used to satisfy our needs is a resource. But wait! Is a piece of rock a resource? Only if we have the technology to use it, the money to afford it, and society's permission to use it. Let's learn how we categorize resources and how important it is to plan their development.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Resource:</b> Everything available in our environment which can be used to satisfy our needs, provided it is technologically accessible, economically feasible, and culturally acceptable.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Renewable Resources:</b> Resources which can be renewed or reproduced by physical, chemical, or mechanical processes, such as solar and wind energy, water, forests, and wildlife.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Non-Renewable Resources:</b> Resources which occur over a very long geological time and take millions of years in their formation. Once exhausted, they cannot be easily replenished, such as coal and metals.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Sustainable Development:</b> Development that meets the needs of the present without compromising the ability of future generations to meet their own needs, without causing damage to the environment.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Gully Erosion:</b> The process where running water cuts through clayey soils, forming deep channels called gullies, making the land unfit for cultivation (referred to as badland).</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Sheet Erosion:</b> When water flows as a sheet over large areas down a slope, washing away the topsoil over a wide area.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
            <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
                <li style="margin-bottom: 8px;">Resources are classified on the basis of origin (biotic/abiotic), exhaustibility (renewable/non-renewable), ownership (individual/community/national/international), and status of development (potential/developed/stock/reserves).</li>
                <li style="margin-bottom: 8px;">Unplanned and indiscriminate use of resources has led to global ecological crises like global warming, ozone layer depletion, environmental pollution, and land degradation.</li>
                <li style="margin-bottom: 8px;">Resource planning is essential in India due to enormous diversity in resource availability. Some regions are self-sufficient while others face acute shortage of vital resources.</li>
                <li style="margin-bottom: 8px;">The first International Earth Summit was held in Rio de Janeiro, Brazil in 1992, where world leaders signed <b>Agenda 21</b> to achieve global sustainable development.</li>
                <li style="margin-bottom: 8px;">India has a variety of relief features: 43% plains (agriculture and industry), 30% mountains (tourism and perennial rivers), and 27% plateaus (rich reserves of minerals, fossil fuels, and forests).</li>
                <li style="margin-bottom: 8px;">Land degradation is caused by mining (Jharkhand, MP, Chhattisgarh), overgrazing (Gujarat, Rajasthan, Maharashtra), and over-irrigation (Punjab, Haryana, Western UP).</li>
                <li style="margin-bottom: 8px;">India has diverse soil types: Alluvial soil (most fertile and widespread), Black soil (ideal for cotton, also called Regur soil), Red and Yellow soil, Laterite soil, Arid soil, and Forest/Mountain soil.</li>
                <li style="margin-bottom: 8px;">Soil conservation methods in hilly areas include contour plowing, terrace farming, strip cropping, and planting shelterbelts.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
            <p style="line-height: 1.6; font-size: 16px;">Resources are the backbone of any nation's development. Proper resource planning is crucial to prevent over-exploitation and ensure sustainable development for future generations. India possesses diverse relief features and soil resources, but issues like land degradation and soil erosion require immediate conservation measures like terrace farming and contour plowing to preserve fertility.</p>
        </div>
    `,
  htmlExercises: {
    "sg1-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <!-- 1. Multiple Choice Questions -->
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">1. Multiple choice questions.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(i) Which one of the following type of resource is iron ore?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Renewable &nbsp;&nbsp; (b) Biotic &nbsp;&nbsp; (c) Flow &nbsp;&nbsp; <b style="color: ${themeColor};">(d) Non-renewable</b>
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(ii) Under which of the following type of resource tidal energy cannot be put?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Replenishable &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Human-made</b> &nbsp;&nbsp; (c) Abiotic &nbsp;&nbsp; (d) Non-recyclable
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(iii) Which one of the following is the main cause of land degradation in Punjab?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Intensive cultivation &nbsp;&nbsp; (b) Deforestation &nbsp;&nbsp; <b style="color: ${themeColor};">(c) Over irrigation</b> &nbsp;&nbsp; (d) Overgrazing
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(iv) In which one of the following states is terrace cultivation practised?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Punjab &nbsp;&nbsp; (b) Plains of Uttar Pradesh &nbsp;&nbsp; (c) Haryana &nbsp;&nbsp; <b style="color: ${themeColor};">(d) Uttarakhand</b>
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(v) In which of the following states black soil is predominantly found?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Haryana &nbsp;&nbsp; <b style="color: ${themeColor};">(b) Maharashtra</b> &nbsp;&nbsp; (c) Rajasthan &nbsp;&nbsp; (d) Jharkhand
                        </p>
                    </div>
                </div>

                <!-- 2. Answer the following questions in about 30 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">2. Answer the following questions in about 30 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Name three states having black soil and the crop which is mainly grown in it.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Black soil (also known as <b>Regur soil</b>) is predominantly found in the states of <b>Maharashtra</b>, <b>Gujarat</b>, and <b>Madhya Pradesh</b>. The primary crop grown in this soil is <b>cotton</b>, which is why it is also famously known as black cotton soil.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) What type of soil is found in the river deltas of the eastern coast? Give three main features of this type of soil.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            The river deltas of the eastern coast (Mahanadi, Godavari, Krishna, and Kaveri) contain highly fertile <b>Alluvial soil</b>. 
                            <br/><b style="color: ${themeColor};">Key Features:</b>
                            <br/>• <b>High Fertility:</b> Rich in potash, phosphoric acid, and lime, making it perfect for crops like paddy, wheat, and sugarcane.
                            <br/>• <b>Composition:</b> Formed of varying proportions of sand, silt, and clay.
                            <br/>• <b>Classification:</b> Classified as old alluvial (<b>Bangar</b>, coarser and containing Kankar nodules) and new alluvial (<b>Khadar</b>, finer and more fertile).
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iii) What steps can be taken to control soil erosion in the hilly areas?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            To control soil erosion in hilly areas, the following steps can be taken:
                            <br/>• <b>Contour Ploughing:</b> Ploughing along contour lines creates natural barriers to the flow of water down the slope.
                            <br/>• <b>Terrace Farming:</b> Cutting steps on slopes to form flat terraces reduces the speed of water runoff.
                            <br/>• <b>Strip Cropping & Shelterbelts:</b> Planting strips of grass between crops to break wind force, and growing rows of trees (shelterbelts) to stabilize the soil.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iv) What are the biotic and abiotic resources? Give some examples.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            • <b>Biotic Resources:</b> Resources obtained from the biosphere that possess life. <i>Examples:</i> Human beings, plants, animals, birds, and marine organisms.
                            <br/>• <b>Abiotic Resources:</b> Resources that are composed of non-living, physical elements. <i>Examples:</i> Rocks, soil, metals, water, and sunlight.
                        </p>
                    </div>
                </div>

                <!-- 3. Answer the following questions in about 120 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">3. Answer the following questions in about 120 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 22px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Explain land use pattern in India and why has the land under forest not increased much since 1960-61?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Land Use Pattern in India:</b> 
                            India's geographical land usage is divided into forest cover, area for non-agricultural uses, wasteland, permanent pasture, and net sown area. Currently, about 54% of the reporting area is net sown area. However, pasture land has decreased, posing a threat to livestock.
                            <br/><br/>
                            <b>Reasons Forest Area has not increased much since 1960-61:</b>
                            <br/>1. <b>Population & Agricultural Expansion:</b> The huge rise in population increased food demand, forcing the conversion of forests into agricultural fields.
                            <br/>2. <b>Industrialization & Urbanization:</b> Forest lands were cleared to build houses, factories, highways, and smart cities.
                            <br/>3. <b>Development Projects:</b> Large-scale projects like river dams have submerged thousands of hectares of forest lands.
                            <br/>4. <b>Mining Activities:</b> Open-cast mining in states like Jharkhand, Odisha, and Chhattisgarh has cleared dense forests, leaving behind degraded, barren land.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) How have technical and economic development led to more consumption of resources?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Technical and economic progress have directly caused an exponential rise in resource consumption due to the following factors:
                            <br/>• <b>Efficient Extraction:</b> Advanced technology allows deep mining and drilling to extract minerals and fossil fuels that were previously inaccessible.
                            <br/>• <b>Mass Production:</b> Modern machines have replaced manual labor, allowing rapid, large-scale production. This requires huge quantities of raw materials and energy (coal, petroleum).
                            <br/>• <b>Increased Purchasing Power:</b> Economic development raises per-capita incomes and improves lifestyles, which fuels high consumerism. People demand more electronics, vehicles, and luxury items, all requiring mineral resources.
                            <br/>• <b>Urban Development:</b> Growth of cities and infrastructure (dams, concrete roads) consumes immense amounts of sand, wood, cement, and metal.
                            <br/>• <b>Commercial Agriculture:</b> High-tech agricultural machinery and deep tubewells have led to over-utilization of groundwater and soil.
                        </p>
                    </div>
                </div>
            </div>
        `,
  },
  exercises: [
    {
      id: "sg1-ex-all",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "sg1-mcq-1",
      question: "Which one of the following type of resource is iron ore?",
      options: ["Renewable", "Biotic", "Flow", "Non-renewable"],
      correctAnswer: "d",
    },
    {
      id: "sg1-mcq-2",
      question:
        "Under which of the following type of resource tidal energy cannot be put?",
      options: ["Replenishable", "Human-made", "Abiotic", "Non-recyclable"],
      correctAnswer: "b",
    },
    {
      id: "sg1-mcq-3",
      question:
        "Which one of the following is the main cause of land degradation in Punjab?",
      options: [
        "Intensive cultivation",
        "Deforestation",
        "Over irrigation",
        "Overgrazing",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg1-mcq-4",
      question:
        "In which one of the following states is terrace cultivation practised?",
      options: ["Punjab", "Plains of Uttar Pradesh", "Haryana", "Uttarakhand"],
      correctAnswer: "d",
    },
    {
      id: "sg1-mcq-5",
      question:
        "In which of the following states black soil is predominantly found?",
      options: ["Haryana", "Maharashtra", "Rajasthan", "Jharkhand"],
      correctAnswer: "b",
    },
    {
      id: "sg1-mcq-6",
      question: "Which soil is also known as Regur soil?",
      options: ["Alluvial soil", "Black soil", "Red soil", "Laterite soil"],
      correctAnswer: "b",
    },
    {
      id: "sg1-mcq-7",
      question:
        "Agenda 21, signed at the 1992 Earth Summit, aims to achieve:",
      options: [
        "Global free trade",
        "Global sustainable development",
        "Eradication of diseases",
        "Arms reduction",
      ],
      correctAnswer: "b",
    },
    {
      id: "sg1-mcq-8",
      question: "What is the total geographical area of India?",
      options: [
        "3.28 million sq km",
        "32.8 million sq km",
        "2.4 million sq km",
        "4.28 million sq km",
      ],
      correctAnswer: "a",
    },
    {
      id: "sg1-mcq-9",
      question:
        "In which of the following states is mining the main cause of land degradation?",
      options: ["Punjab", "Haryana", "Jharkhand", "Kerala"],
      correctAnswer: "c",
    },
    {
      id: "sg1-mcq-10",
      question:
        "Resources which are surveyed and their quantity and quality determined for utilization are:",
      options: [
        "Potential resources",
        "Stock",
        "Developed resources",
        "Reserves",
      ],
      correctAnswer: "c",
    },
  ],
};
