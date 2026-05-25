import { ChapterContent } from "../types";

const themeColor = "#00C6FF"; // Bright Blue color for Geography Chapter 3

export const sstGeo3: ChapterContent = {
  id: "sst-geo-3",
  number: 3,
  title: "Water Resources",
  introduction:
    "You probably know that 3/4th of the Earth's surface is covered with water. But did you know that most of it is salty ocean water? A very tiny fraction of it is fresh water that we can actually use. That's why water scarcity is becoming a massive problem for humanity across the globe. Let's explore how we manage water through dams and traditional conservation methods.",
  definitions: [
    {
      term: "Water Scarcity",
      description:
        "The shortage of water resources to meet the standard water demands of a region or population, often caused by over-exploitation, growing population, and pollution.",
    },
    {
      term: "Hydrological Cycle",
      description:
        "The continuous cycle of water movement on, above, and below the surface of the Earth through evaporation, condensation, and precipitation.",
    },
    {
      term: "Multi-Purpose River Project",
      description:
        "A large-scale project involving the damming of a river to achieve multiple goals simultaneously, such as irrigation, flood control, electricity generation, fish breeding, and navigation.",
    },
    {
      term: "Dams",
      description:
        "Barriers built across flowing water that obstruct, direct, or retard the flow, often creating a reservoir, lake, or impoundment.",
    },
    {
      term: "Rooftop Rainwater Harvesting",
      description:
        "A technique to collect and store rainwater falling on rooftops for future use, commonly practiced in arid and semi-arid regions.",
    },
    {
      term: "Palar Pani",
      description:
        "The local term used in Rajasthan to refer to pure rainwater collected from rooftops, considered the cleanest form of natural water.",
    },
    {
      term: "Khadins & Johads",
      description:
        "Rain-fed agricultural storage structures constructed in arid regions of Rajasthan (Khadins in Jaisalmer, Johads in other areas) that collect water and allow it to moisten the soil.",
    },
    {
      term: "Guls & Kuls",
      description:
        "Diversion channels built in mountainous regions like the Western Himalayas for agricultural irrigation.",
    },
  ],
  keyPoints: [
    "Water is a renewable resource, constantly replenished and recharged by the hydrological cycle.",
    "Despite water covering 3/4th of the Earth, freshwater accounts for a tiny fraction, and its over-exploitation and pollution have led to severe water scarcity.",
    "Multi-purpose projects were hailed by Jawaharlal Nehru as the 'temples of modern India' because they integrate agricultural progress with industrialization.",
    "These river projects face strong opposition (e.g., Narmada Bachao Andolan, Tehri Dam Andolan) due to large-scale displacement of communities, ecological damage, and poor sediment flow.",
    "Rooftop rainwater harvesting is a highly successful traditional method to conserve water, particularly in Rajasthan, where water is stored in underground tankas.",
    "Tamil Nadu is the first state in India to make rooftop rainwater harvesting compulsory for all houses across the state.",
  ],
  formulas: [],
  crux: [
    "Freshwater is a tiny fraction of Earth's water, replenished by the water cycle.",
    "Nehru called multi-purpose projects (dams) the 'temples of modern India'.",
    "Dams face opposition due to ecological damage, community displacement, and river fragmentation.",
    "Traditional conservation: Guls/Kuls in Himalayas, Khadins/Johads in Rajasthan, Tankas for Palar Pani.",
    "Tamil Nadu is the first state to make rooftop rainwater harvesting compulsory.",
  ],
  summary: [
    "Water is a vital renewable resource. Rapid population growth, industrialization, and urban lifestyles have led to over-exploitation and severe water scarcity in many parts of India.",
    "Multi-purpose river projects act as key infrastructure for irrigation and electricity, but they come with heavy socio-economic and ecological costs, including displacement and habitat destruction.",
    "Rainwater harvesting offers a highly sustainable, eco-friendly alternative to large dams. Modern adaptations of rooftop collection and groundwater recharge are essential to secure our water future.",
  ],
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 17px;">You probably know that 3/4th of the Earth's surface is covered with water. But did you know that most of it is salty ocean water? A very tiny fraction of it is fresh water that we can actually use. That's why water scarcity is becoming a massive problem for humanity across the globe. Let's explore how we manage water through dams and traditional conservation methods.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Water Scarcity:</b> The shortage of water resources to meet the standard water demands of a region or population, often caused by over-exploitation, growing population, and pollution.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Hydrological Cycle:</b> The continuous cycle of water movement on, above, and below the surface of the Earth through evaporation, condensation, and precipitation.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Multi-Purpose River Project:</b> A large-scale project involving the damming of a river to achieve multiple goals simultaneously, such as irrigation, flood control, electricity generation, fish breeding, and navigation.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Dams:</b> Barriers built across flowing water that obstruct, direct, or retard the flow, often creating a reservoir, lake, or impoundment.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Rooftop Rainwater Harvesting:</b> A technique to collect and store rainwater falling on rooftops for future use, commonly practiced in arid and semi-arid regions.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Palar Pani:</b> The local term used in Rajasthan to refer to pure rainwater collected from rooftops, considered the cleanest form of natural water.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Khadins & Johads:</b> Rain-fed agricultural storage structures constructed in arid regions of Rajasthan (Khadins in Jaisalmer, Johads in other areas) that collect water and allow it to moisten the soil.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Guls & Kuls:</b> Diversion channels built in mountainous regions like the Western Himalayas for agricultural irrigation.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
            <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
                <li style="margin-bottom: 8px;">Water is a renewable resource, constantly replenished and recharged by the hydrological cycle.</li>
                <li style="margin-bottom: 8px;">Despite water covering 3/4th of the Earth, freshwater accounts for a tiny fraction, and its over-exploitation and pollution have led to severe water scarcity.</li>
                <li style="margin-bottom: 8px;">Multi-purpose projects were hailed by Jawaharlal Nehru as the 'temples of modern India' because they integrate agricultural progress with industrialization.</li>
                <li style="margin-bottom: 8px;">These river projects face strong opposition (e.g., Narmada Bachao Andolan, Tehri Dam Andolan) due to large-scale displacement of communities, ecological damage, and poor sediment flow.</li>
                <li style="margin-bottom: 8px;">Rooftop rainwater harvesting is a highly successful traditional method to conserve water, particularly in Rajasthan, where water is stored in underground tankas.</li>
                <li style="margin-bottom: 8px;">Tamil Nadu is the first state in India to make rooftop rainwater harvesting compulsory for all houses across the state.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
            <p style="line-height: 1.6; font-size: 16px;">Water is a vital renewable resource. Rapid population growth, industrialization, and urban lifestyles have led to over-exploitation and severe water scarcity in many parts of India. Multi-purpose river projects act as key infrastructure for irrigation and electricity, but they come with heavy socio-economic and ecological costs, including displacement and habitat destruction. Rainwater harvesting offers a highly sustainable, eco-friendly alternative to large dams. Modern adaptations of rooftop collection and groundwater recharge are essential to secure our water future.</p>
        </div>
    `,
  htmlExercises: {
    "sg3-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <!-- 1. Multiple Choice Questions -->
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">1. Multiple choice questions.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(i) Based on the information given below classify each of the situations as 'suffering from water scarcity' or 'not suffering from water scarcity'.</p>
                        <ul style="color: #E0E0E0; line-height: 1.6; padding-left: 20px; font-size: 15px; margin-top: 5px;">
                            <li style="margin-bottom: 5px;">(a) Region with high annual rainfall. <b style="color: ${themeColor};">-> Not suffering from water scarcity</b></li>
                            <li style="margin-bottom: 5px;">(b) Region having high annual rainfall and large population. <b style="color: ${themeColor};">-> Suffering from water scarcity</b> (due to high demand/over-exploitation)</li>
                            <li style="margin-bottom: 5px;">(c) Region having high annual rainfall but water is highly polluted. <b style="color: ${themeColor};">-> Suffering from water scarcity</b> (water is unfit for domestic use)</li>
                            <li style="margin-bottom: 5px;">(d) Region having low rainfall and low population. <b style="color: ${themeColor};">-> Not suffering from water scarcity</b></li>
                        </ul>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(ii) Which one of the following statements is not an argument in favour of multi-purpose river projects?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Multi-purpose projects bring water to those areas which suffer from water scarcity.
                            <br/>(b) Multi-purpose projects by regulating water flow helps to control floods.
                            <br/><b style="color: ${themeColor};">(c) Multi-purpose projects lead to large scale displacements and loss of livelihood.</b>
                            <br/>(d) Multi-purpose projects generate electricity for our industries and our homes.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(iii) Here are some false statements. Identify the mistakes and rewrite them correctly.</p>
                        <div style="margin-left: 10px; font-size: 15px; line-height: 1.6; color: #E0E0E0;">
                            <p style="margin-bottom: 8px;">
                                <b>(a) False Statement:</b> Multiplying urban centres with large and dense populations and urban lifestyles have helped in proper utilisation of water resources.
                                <br/><b style="color: ${themeColor};">Correction:</b> Multiplying urban centres with large and dense populations and urban lifestyles have led to the <b>over-exploitation and depletion</b> of water resources.
                            </p>
                            <p style="margin-bottom: 8px;">
                                <b>(b) False Statement:</b> Regulating and damming of rivers does not affect the river's natural flow and its sediment flow.
                                <br/><b style="color: ${themeColor};">Correction:</b> Regulating and damming of rivers <b>does affect</b> the natural flow of rivers, causing poor sediment flow and excessive sedimentation at the bottom of the reservoir.
                            </p>
                            <p style="margin-bottom: 8px;">
                                <b>(c) False Statement:</b> In Gujarat, the Sabarmati basin farmers were not agitated when higher priority was given to water supply in urban areas, particularly during droughts.
                                <br/><b style="color: ${themeColor};">Correction:</b> In Gujarat, the Sabarmati basin farmers <b>were agitated</b> and almost caused a riot when higher priority was given to water supply in urban areas, particularly during droughts.
                            </p>
                            <p style="margin-bottom: 8px;">
                                <b>(d) False Statement:</b> Today in Rajasthan, the practice of rooftop rainwater harvesting has gained popularity despite high water availability due to the Indira Gandhi Canal.
                                <br/><b style="color: ${themeColor};">Correction:</b> Today in Rajasthan, the practice of rooftop rainwater harvesting <b>is declining</b> due to the high water availability from the perennial Indira Gandhi Canal.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 2. Answer the following questions in about 30 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">2. Answer the following questions in about 30 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Explain how water becomes a renewable resource.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Water becomes a renewable resource through the <b>hydrological cycle</b>. In this continuous process, water evaporates from oceans and lands, condenses into clouds, and falls back to Earth as precipitation (rain or snow), which recharges rivers, lakes, and groundwater tables.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) What is water scarcity and what are its main causes?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Water Scarcity:</b> The lack of sufficient fresh water to meet the needs of the population in a region.
                            <br/><b>Main Causes:</b> 
                            <br/>• Over-exploitation of water for domestic and agricultural purposes.
                            <br/>• Rapidly growing population increasing food and water demands.
                            <br/>• Industrialization and urbanization consuming massive quantities of water and power.
                            <br/>• Pollution of existing fresh water sources, making them unfit for use.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(iii) Compare the advantages and disadvantages of multi-purpose river projects.</p>
                        <div style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Advantages:</b> 
                            Provide regular water supply for irrigation, control floods, generate eco-friendly hydroelectric power, support inland navigation, fish breeding, and tourism.
                            <br/><br/>
                            <b>Disadvantages:</b> 
                            Cause large-scale displacement of local communities, destroy natural aquatic habitats by obstructing natural river flow, submerge surrounding fertile land and forests, and can cause earthquakes due to reservoir pressure.
                        </div>
                    </div>
                </div>

                <!-- 3. Answer the following questions in about 120 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">3. Answer the following questions in about 120 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 22px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Discuss how rainwater harvesting in semi-arid regions of Rajasthan is carried out.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            In the semi-arid regions of Rajasthan (such as Bikaner, Phalodi, and Barmer), traditional rainwater harvesting is carried out using underground tanks called <b>tankas</b>:
                            <br/>• <b>Rooftop System:</b> Sloping roofs of houses are connected to these underground tankas via PVC pipes. The rain falling on the roof flows through the pipes into the tankas.
                            <br/>• <b>First Rain Spell:</b> The first shower of rain is not collected; it is used to wash and clean the roof and pipes. Subsequent rains are collected and stored.
                            <br/>• <b>Palar Pani:</b> The collected water, locally known as Palar Pani, is highly valued as the purest form of natural water and is stored to serve during dry summers.
                            <br/>• <b>Cooling Rooms:</b> Often, cool rooms are built adjacent to these tankas as the water's temperature helps lower the heat inside the house.
                            <br/>• <b>Agricultural Fields:</b> In fields, structures like <b>Khadins</b> and <b>Johads</b> are built to store rainwater, which moistens the dry soils for farming.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) Describe how modern adaptations of traditional rainwater harvesting methods are being carried out to conserve and store water.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Modern adaptations of traditional rainwater harvesting methods are widely implemented in both rural and urban India:
                            <br/>• <b>Rooftop Rainwater Harvesting:</b> The traditional concept is updated with modern filters. Rainwater from rooftops is routed through sand-and-gravel filters to remove impurities before storage in tanks or direct injection into borewells to recharge ground aquifers.
                            <br/>• <b>Compulsory Rooftop Systems:</b> State governments are making rooftop rainwater harvesting structurally mandatory. For example, <b>Tamil Nadu</b> is the first state in India to make it legally compulsory for all buildings.
                            <br/>• <b>Groundwater Recharge Wells:</b> Rainwater from roads, parks, and rooftops is directed into percolation pits, trenches, or recharge shafts to raise the falling groundwater table.
                            <br/>• <b>Community Rejuvenation:</b> In rural areas, traditional check dams (johads or bandhas) are reconstructed using modern engineering to store surface runoff and prevent soil moisture loss.
                        </p>
                    </div>
                </div>
            </div>
        `,
  },
  exercises: [
    {
      id: "sg3-ex-all",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "sg3-mcq-1",
      question:
        "Based on rainfall and population, which of the following regions suffers from water scarcity?",
      options: [
        "Region with high annual rainfall and low population",
        "Region with high annual rainfall and large population",
        "Region with low annual rainfall and low population",
        "None of these",
      ],
      correctAnswer: "b",
    },
    {
      id: "sg3-mcq-2",
      question:
        "Which of the following is NOT an argument in favour of multi-purpose river projects?",
      options: [
        "They bring water to water-scarce areas",
        "They regulate water flow to control floods",
        "They lead to large-scale displacement and loss of livelihood",
        "They generate electricity for industries and homes",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg3-mcq-3",
      question:
        "Multiplying urban centres with large and dense populations and urban lifestyles has led to:",
      options: [
        "Proper utilization of water resources",
        "Over-exploitation and depletion of water resources",
        "Conservation of water resources",
        "Increase in rainwater harvesting",
      ],
      correctAnswer: "b",
    },
    {
      id: "sg3-mcq-4",
      question:
        "Who proudly proclaimed the dams as the 'Temples of modern India'?",
      options: [
        "Mahatma Gandhi",
        "Sardar Vallabhbhai Patel",
        "Jawaharlal Nehru",
        "Dr. B.R. Ambedkar",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg3-mcq-5",
      question:
        "The Narmada Bachao Andolan was a movement directed against which dam?",
      options: [
        "Bhakra Nangal Dam",
        "Sardar Sarovar Dam",
        "Hirakud Dam",
        "Tehri Dam",
      ],
      correctAnswer: "b",
    },
    {
      id: "sg3-mcq-6",
      question:
        "In the semi-arid regions of Rajasthan, agricultural fields were converted into rain-fed storage structures known as:",
      options: ["Kuls", "Guls", "Baolis", "Khadins and Johads"],
      correctAnswer: "d",
    },
    {
      id: "sg3-mcq-7",
      question:
        "Which is the first state in India to make rooftop rainwater harvesting compulsory?",
      options: ["Kerala", "Karnataka", "Tamil Nadu", "Rajasthan"],
      correctAnswer: "c",
    },
    {
      id: "sg3-mcq-8",
      question: "Which state is famous for 'Guls' or 'Kuls' for irrigation?",
      options: [
        "Western Himalayas",
        "Deccan Plateau",
        "Thar Desert",
        "Ganga Plains",
      ],
      correctAnswer: "a",
    },
    {
      id: "sg3-mcq-9",
      question: "In which basin is the Bhakra Nangal project built?",
      options: [
        "Satluj-Beas basin",
        "Ganga-Brahmaputra basin",
        "Mahanadi basin",
        "Narmada basin",
      ],
      correctAnswer: "a",
    },
    {
      id: "sg3-mcq-10",
      question: "Hirakud dam is constructed on which river?",
      options: ["Krishna", "Mahanadi", "Cauvery", "Godavari"],
      correctAnswer: "b",
    },
  ],
};
