import { ChapterContent } from "../types";

const themeColor = "#26C6DA"; // Teal color for Geography Chapter 2

export const sstGeo2: ChapterContent = {
  id: "sst-geo-2",
  number: 2,
  title: "Forest and Wildlife Resources",
  introduction:
    "Did you know that India is one of the world's richest countries in terms of its vast array of biological diversity? Our planet shares life with millions of other living beings, from micro-organisms to elephants. But due to our greed, this beautiful web of life is under severe threat. Let's learn how we categorize species and what conservation efforts we can make.",
  definitions: [
    {
      term: "Biodiversity",
      description:
        "The immense variety of life forms (flora, fauna, and micro-organisms) co-existing in a closely integrated web of life with mutual dependence.",
    },
    {
      term: "Endangered Species",
      description:
        "Species which are in danger of extinction. Their survival is difficult if the negative factors causing their decline continue to operate, e.g., black buck, crocodile.",
    },
    {
      term: "Vulnerable Species",
      description:
        "Species whose population has declined to levels from where they are likely to enter the endangered category if negative factors continue, e.g., blue sheep, Asiatic elephant.",
    },
    {
      term: "Endemic Species",
      description:
        "Species which are only found in some particular areas usually isolated by natural or geographical barriers, e.g., Andaman teal, Andaman wild pig.",
    },
    {
      term: "Extinct Species",
      description:
        "Species which are not found after searches of known or likely areas where they may occur, e.g., Asiatic cheetah, pink-headed duck.",
    },
    {
      term: "Reserved Forests",
      description:
        "Forests regarded as the most valuable for the conservation of forest and wildlife resources. More than half of the total forest land has been declared reserved.",
    },
    {
      term: "Protected Forests",
      description:
        "Forest lands declared by the Forest Department to be protected from any further depletion. Almost one-third of the total forest area is protected.",
    },
    {
      term: "Unclassed Forests",
      description:
        "Other forests and wastelands belonging to both government and private individuals and communities, found mostly in Northeast India and parts of Gujarat.",
    },
  ],
  keyPoints: [
    "India has nearly 8% of the total number of species in the world, which is estimated to be 1.6 million.",
    "The International Union for Conservation of Nature and Natural Resources (IUCN) classifies species into: Normal, Endangered, Vulnerable, Rare, Endemic, and Extinct.",
    "Major causes of flora and fauna depletion include agricultural expansion, large-scale developmental projects, mining activities (like Buxa Tiger Reserve), and poaching.",
    "Forests are classified by the government into Reserved Forests, Protected Forests, and Unclassed Forests to regulate conservation.",
    "Community conservation in India is rooted in traditional beliefs, such as sacred groves, and organized movements like Chipko and Beej Bachao Andolan.",
    "Joint Forest Management (JFM) is an excellent program that involves local communities in restoring degraded forests, launched first by Odisha in 1988.",
  ],
  formulas: [],
  crux: [
    "India has 8% of global species (approx 1.6 million).",
    "IUCN categories: Normal, Endangered, Vulnerable, Rare, Endemic, Extinct.",
    "Buxa Tiger Reserve is threatened by dolomite mining.",
    "Forests division: Reserved (most valuable), Protected (no more depletion), Unclassed (shared/communal).",
    "Community action: Chipko, Beej Bachao Andolan, Bhairodev Dakav sanctuary, JFM.",
  ],
  summary: [
    "Biodiversity is essential for maintaining ecological balance and supporting human life. Unplanned developmental activities have threatened many species with extinction.",
    "Forests are categorized into Reserved, Protected, and Unclassed, providing a framework for state and community protection. Legislation like the Wildlife (Protection) Act of 1972 provides legal backing.",
    "Local communities are key to long-term conservation. Traditional nature worship, community-managed reserves, and collaborative programs like JFM show that humans and nature can coexist sustainably.",
  ],
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 17px;">Did you know that India is one of the world's richest countries in terms of its vast array of biological diversity? Our planet shares life with millions of other living beings, from micro-organisms to elephants. But due to our greed, this beautiful web of life is under severe threat. Let's learn how we categorize species and what conservation efforts we can make.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Definitions</h3>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Biodiversity:</b> The immense variety of life forms (flora, fauna, and micro-organisms) co-existing in a closely integrated web of life with mutual dependence.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Endangered Species:</b> Species which are in danger of extinction. Their survival is difficult if the negative factors causing their decline continue to operate, e.g., black buck, crocodile.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Vulnerable Species:</b> Species whose population has declined to levels from where they are likely to enter the endangered category if negative factors continue, e.g., blue sheep, Asiatic elephant.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Endemic Species:</b> Species which are only found in some particular areas usually isolated by natural or geographical barriers, e.g., Andaman teal, Andaman wild pig.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Extinct Species:</b> Species which are not found after searches of known or likely areas where they may occur, e.g., Asiatic cheetah, pink-headed duck.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Reserved Forests:</b> Forests regarded as the most valuable for the conservation of forest and wildlife resources. More than half of the total forest land has been declared reserved.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Protected Forests:</b> Forest lands declared by the Forest Department to be protected from any further depletion. Almost one-third of the total forest area is protected.</p>
            <p style="line-height: 1.5; margin-bottom: 10px;"><b style="color: ${themeColor};">Unclassed Forests:</b> Other forests and wastelands belonging to both government and private individuals and communities, found mostly in Northeast India and parts of Gujarat.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Important Points</h3>
            <ul style="text-align: left; padding-left: 20px; line-height: 1.6; font-size: 16px;">
                <li style="margin-bottom: 8px;">India has nearly 8% of the total number of species in the world, which is estimated to be 1.6 million.</li>
                <li style="margin-bottom: 8px;">The International Union for Conservation of Nature and Natural Resources (IUCN) classifies species into: Normal, Endangered, Vulnerable, Rare, Endemic, and Extinct.</li>
                <li style="margin-bottom: 8px;">Major causes of flora and fauna depletion include agricultural expansion, large-scale developmental projects, mining activities (like Buxa Tiger Reserve), and poaching.</li>
                <li style="margin-bottom: 8px;">Forests are classified by the government into Reserved Forests, Protected Forests, and Unclassed Forests to regulate conservation.</li>
                <li style="margin-bottom: 8px;">Community conservation in India is rooted in traditional beliefs, such as sacred groves, and organized movements like Chipko and Beej Bachao Andolan.</li>
                <li style="margin-bottom: 8px;">Joint Forest Management (JFM) is an excellent program that involves local communities in restoring degraded forests, launched first by Odisha in 1988.</li>
            </ul>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Summary</h3>
            <p style="line-height: 1.6; font-size: 16px;">Biodiversity is essential for maintaining ecological balance and supporting human life. Unplanned developmental activities have threatened many species with extinction. Forests are categorized into Reserved, Protected, and Unclassed, providing a framework for state and community protection. Legislation like the Wildlife (Protection) Act of 1972 provides legal backing. Local communities are key to long-term conservation. Traditional nature worship, community-managed reserves, and collaborative programs like JFM show that humans and nature can coexist sustainably.</p>
        </div>
    `,
  htmlExercises: {
    "sg2-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                <!-- 1. Multiple Choice Questions -->
                <div style="margin-bottom: 25px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">1. Multiple choice questions.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(i) Which of these statements is not a valid reason for the depletion of flora and fauna?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Agricultural expansion.
                            <br/>(b) Large scale developmental projects.
                            <br/><b style="color: ${themeColor};">(c) Grazing and fuel wood collection.</b>
                            <br/>(d) Rapid industrialisation and urbanisation.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: #fff; font-weight: bold; font-size: 15px;">(ii) Which of the following conservation strategies do not directly involve community participation?</p>
                        <p style="color: #E0E0E0; font-size: 15px; margin: 4px 0 0 10px;">
                            (a) Joint forest management &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (c) Chipko Movement
                            <br/>(b) Beej Bachao Andolan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b style="color: ${themeColor};">(d) Demarcation of Wildlife sanctuaries</b>
                        </p>
                    </div>
                </div>

                <!-- 2. Match the following animals with their category of existence -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">2. Match the following animals with their category of existence.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <thead>
                            <tr style="background-color: rgba(255,255,255,0.05);">
                                <th style="padding: 10px; border: 1px solid #555; text-align: left; color: ${themeColor};">Animals/Plants</th>
                                <th style="padding: 10px; border: 1px solid #555; text-align: left; color: ${themeColor};">Category of existence (Matched)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #555;">Black buck</td>
                                <td style="padding: 10px; border: 1px solid #555; font-weight: bold;">Endangered</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #555;">Asiatic elephant</td>
                                <td style="padding: 10px; border: 1px solid #555; font-weight: bold;">Vulnerable</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #555;">Andaman wild pig</td>
                                <td style="padding: 10px; border: 1px solid #555; font-weight: bold;">Endemic</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #555;">Himalayan brown bear</td>
                                <td style="padding: 10px; border: 1px solid #555; font-weight: bold;">Rare</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #555;">Pink head duck</td>
                                <td style="padding: 10px; border: 1px solid #555; font-weight: bold;">Extinct</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- 3. Match the following -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">3. Match the following.</p>
                    <table style="width: 100%; border-collapse: collapse; color: #fff; margin-left: 5px;">
                        <thead>
                            <tr style="background-color: rgba(255,255,255,0.05);">
                                <th style="padding: 10px; border: 1px solid #555; text-align: left; color: ${themeColor};">Forest Type</th>
                                <th style="padding: 10px; border: 1px solid #555; text-align: left; color: ${themeColor};">Definition / Matching Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #555; font-weight: bold; width: 35%;">Reserved forests</td>
                                <td style="padding: 10px; border: 1px solid #555;">forests are regarded as most valuable as far as the conservation of forest and wildlife resources</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #555; font-weight: bold;">Protected forests</td>
                                <td style="padding: 10px; border: 1px solid #555;">forest lands are protected from any further depletion</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #555; font-weight: bold;">Unclassed forests</td>
                                <td style="padding: 10px; border: 1px solid #555;">other forests and wastelands belonging to both government and private individuals and communities</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- 4. Answer the following questions in about 30 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">4. Answer the following questions in about 30 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) What is biodiversity? Why is biodiversity important for human lives?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            <b>Biodiversity:</b> The immense variety of life forms (flora, fauna, and micro-organisms) co-existing in a closely integrated web of life.
                            <br/><b>Importance:</b> Humans are part of this ecosystem and depend on other living beings for survival. Biodiversity ensures resources like fresh air, clean water, and fertile soil are continuously replenished.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) How have human activities affected the depletion of flora and fauna? Explain.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Human activities have heavily depleted flora and fauna due to:
                            <br/>• <b>Habitat Destruction:</b> Clearing forests for agriculture, railways, roads, and urbanization.
                            <br/>• <b>Mining:</b> Large mining projects (e.g., dolomite mining in Buxa Tiger Reserve) submerge and damage forests.
                            <br/>• <b>Poaching & Hunting:</b> Illegal trade in animal skin, horns, and bones.
                            <br/>• <b>Pollution:</b> Chemical runoff and forest fires destroying natural ecosystems.
                        </p>
                    </div>
                </div>

                <!-- 5. Answer the following questions in about 120 words -->
                <div style="margin-bottom: 25px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                    <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 12px; font-size: 18px;">5. Answer the following questions in about 120 words.</p>
                    
                    <div style="margin-left: 10px; margin-bottom: 22px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(i) Describe how communities have conserved and protected forests and wildlife in India?</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Indian local communities have always had a strong, traditional connection with nature conservation:
                            <br/>• <b>Nature Worship:</b> Tribal groups worship sacred trees and groves (<i>Sarkas</i>). The Mundas and Santhals worship <i>mahua</i> and <i>kadamba</i> trees, protecting them from hacking.
                            <br/>• <b>Chipko Movement:</b> Villagers in the Himalayas successfully resisted commercial logging by physically hugging trees, showing the strength of community action.
                            <br/>• <b>Bhairodev Dakav 'Sonchuri':</b> In Alwar, Rajasthan, villagers declared 1,200 hectares of forest as their own protected sanctuary, banning hunting and regulating resource use with their own rules.
                            <br/>• <b>Joint Forest Management (JFM):</b> Local village institutions work with the government to manage and restore degraded forests. Communities get non-timber forest products and a share in harvested timber.
                            <br/>• <b>Bishnoi Communities:</b> In Rajasthan, blackbucks, nilgai, and peacocks are protected strictly by local Bishnois as family members.
                        </p>
                    </div>

                    <div style="margin-left: 10px; margin-bottom: 18px;">
                        <p style="color: ${themeColor}; font-weight: bold; font-size: 16px;">(ii) Write a note on good practices towards conserving forest and wildlife.</p>
                        <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px; margin-top: 5px;">
                            Good practices for sustainable conservation of forest and wildlife include:
                            <br/>• <b>Empowering Local Communities:</b> Making local villagers equal partners in forest planning and protection, as seen in Joint Forest Management (JFM).
                            <br/>• <b>Sacred and Legal Protection:</b> Demarcating National Parks, Biosphere Reserves, and Wildlife Sanctuaries under legislative frameworks like the Wildlife (Protection) Act of 1972.
                            <br/>• <b>Banning Poaching & Deforestation:</b> Implementing strict punishments for illegal hunting and trading of endangered species, and stopping commercial logging.
                            <br/>• <b>Afforestation of Native Species:</b> Promoting the plantation of local, indigenous tree species (not monoculture plantations) to restore natural food chains.
                            <br/>• <b>Spreading Public Awareness:</b> Launching campaigns like <i>Van Mahotsav</i> to educate school children and citizens on the value of biodiversity.
                        </p>
                    </div>
                </div>
            </div>
        `,
  },
  exercises: [
    {
      id: "sg2-ex-all",
      name: "Exercise Questions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "sg2-mcq-1",
      question:
        "Which of these statements is not a valid reason for the depletion of flora and fauna?",
      options: [
        "Agricultural expansion",
        "Large scale developmental projects",
        "Grazing and fuel wood collection",
        "Rapid industrialisation and urbanisation",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg2-mcq-2",
      question:
        "Which of the following conservation strategies do not directly involve community participation?",
      options: [
        "Joint forest management",
        "Beej Bachao Andolan",
        "Chipko Movement",
        "Demarcation of Wildlife sanctuaries",
      ],
      correctAnswer: "d",
    },
    {
      id: "sg2-mcq-3",
      question: "The Asiatic Cheetah was declared extinct in India in which year?",
      options: ["1952", "1972", "1983", "1992"],
      correctAnswer: "a",
    },
    {
      id: "sg2-mcq-4",
      question: "Which state has the largest area under permanent forests?",
      options: ["Odisha", "Madhya Pradesh", "West Bengal", "Kerala"],
      correctAnswer: "b",
    },
    {
      id: "sg2-mcq-5",
      question: "The famous Chipko Movement was launched in which region?",
      options: ["Himalayas", "Deccan Plateau", "Western Ghats", "Thar Desert"],
      correctAnswer: "a",
    },
    {
      id: "sg2-mcq-6",
      question:
        "In which state was the Joint Forest Management (JFM) resolution first passed?",
      options: ["Odisha", "Bihar", "Gujarat", "Assam"],
      correctAnswer: "a",
    },
    {
      id: "sg2-mcq-7",
      question:
        "Which Tiger Reserve in West Bengal is seriously threatened by dolomite mining?",
      options: [
        "Corbett National Park",
        "Buxa Tiger Reserve",
        "Sundarbans National Park",
        "Bandhavgarh National Park",
      ],
      correctAnswer: "b",
    },
    {
      id: "sg2-mcq-8",
      question: "When was the Indian Wildlife (Protection) Act implemented?",
      options: ["1952", "1972", "1983", "1992"],
      correctAnswer: "b",
    },
    {
      id: "sg2-mcq-9",
      question:
        "Forests belonging to both government and private individuals/communities are called:",
      options: [
        "Reserved Forests",
        "Protected Forests",
        "Unclassed Forests",
        "Sacred Groves",
      ],
      correctAnswer: "c",
    },
    {
      id: "sg2-mcq-10",
      question:
        "The Chota Nagpur region's Mundas and Santhals worship which of the following trees?",
      options: ["Mahua and Kadamba", "Mango and Peepal", "Banyan and Neem", "Tamarind and Sal"],
      correctAnswer: "a",
    },
  ],
};
