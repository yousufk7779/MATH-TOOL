import { ChapterContent } from "../types";

const themeColor = "#7986CB"; // Matches getChapterGradient for c7-civ-2 (Indigo)

export const c7Civ2: ChapterContent = {
  id: "c7-civ-2",
  number: 2,
  title: "Role of the Government in Health",
  isHtmlView: true,
  htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="line-height: 1.6; font-size: 16px;">In a democracy, people expect the government to work for their welfare, especially through education, health, employment, and housing. This chapter explores what health is, the role of government in providing healthcare, and the differences between public and private health services.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">1. What is Health?</h3>
            <p style="line-height: 1.6; font-size: 15px;">Health means our ability to remain free of illness and injuries. It is not just about diseases; it also depends on clean drinking water, a pollution-free environment, adequate food, and a stress-free life.</p>
            
            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">2. Public Health Services</h3>
            <p style="line-height: 1.6; font-size: 15px;">This is a chain of health centres and hospitals run by the <b>government</b>. They are linked together so that they cover both rural and urban areas. They provide treatment for all kinds of problems, from common illnesses to special services. They are free or very low-cost so that even the poor can seek treatment.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">3. Private Health Facilities</h3>
            <p style="line-height: 1.6; font-size: 15px;">These are owned and run by <b>individuals or private companies</b>. They are not controlled by the government. Patients have to pay a lot of money for every service, test, or medicine, but they offer quick service and modern equipment.</p>

            <h3 style="color: ${themeColor}; text-align: left; margin-top: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">4. The Costa Rican Approach</h3>
            <p style="line-height: 1.6; font-size: 15px;">Costa Rica is one of the healthiest countries in Central America. Many years ago, they decided <b>not to have an army</b>. This helped the government to spend that money on health, education, and other basic needs of the people, ensuring safe drinking water, sanitation, and housing for all.</p>
        </div>
    `,
  htmlExercises: {
    "c7c2-ex-all": `
            <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
                
                <!-- Q1 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">1. Explain the terms 'living standard' and 'public health' in your own words.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b>
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li style="margin-bottom: 8px;"><b>Living Standard:</b> It refers to the level of comfort, wealth, and clean basic facilities (like housing, clean water, and food) available to a person.</li>
                            <li><b>Public Health:</b> It refers to the health of the general public. The government provides free or low-cost medical facilities and keeps surroundings clean to improve public health.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q2 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">2. What are the different ways through which the government can take steps to provide healthcare for all?</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> The government can provide healthcare for all by:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li>Opening more <b>government hospitals</b> and clinics in villages.</li>
                            <li>Providing <b>clean drinking water</b> and proper garbage cleanup.</li>
                            <li>Making medicines <b>affordable</b> for the poor.</li>
                            <li>Organizing free vaccination camps.</li>
                        </ul>
                    </p>
                </div>

                <!-- Q3 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">3. What differences do you find between private and public health services in your area?</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #E0E0E0; text-align: left; font-size: 14px;">
                        <thead>
                            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2);">
                                <th style="padding: 8px; color: ${themeColor};">Facility</th>
                                <th style="padding: 8px; color: ${themeColor};">Cost of Services</th>
                                <th style="padding: 8px; color: ${themeColor};">Availability of Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Private</td>
                                <td style="padding: 8px;">Very High</td>
                                <td style="padding: 8px;">Quick service, clean rooms, modern machines</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <td style="padding: 8px; font-weight: bold;">Public (Govt)</td>
                                <td style="padding: 8px;">Low or Free</td>
                                <td style="padding: 8px;">Crowded, long queues, basic equipment</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Q4 -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: ${themeColor}; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px; margin-top: 20px;">4. 'Improvement in water and sanitation can control many diseases.' Explain with examples.</h3>
                    <p style="color: #E0E0E0;"><b style="color: ${themeColor};">Answer:</b> Clean water and sanitation prevent diseases because:
                        <ul style="margin: 5px 0 0 20px; padding: 0; text-align: left; color: #E0E0E0;">
                            <li><b>Safe Water:</b> Prevents water-borne diseases like cholera, diarrhea, and jaundice.</li>
                            <li><b>Clean Surroundings:</b> Stops mosquitoes and flies from breeding, which controls malaria, dengue, and food poisoning.</li>
                        </ul>
                    </p>
                </div>

            </div>
        `,
  },
  introduction:
    "This chapter covers the government's responsibility in health, public vs private healthcare, and international health models.",
  definitions: [
    {
      term: "Public Health",
      description:
        "Healthcare services and cleanliness measures managed by the government for all citizens.",
    },
    {
      term: "Private Health",
      description:
        "Healthcare facilities run by private individuals or companies for profit.",
    },
    {
      term: "Communicable Diseases",
      description:
        "Diseases that spread from one person to another through water, food, air, or insects.",
    },
    {
      term: "OPD",
      description:
        "Out Patient Department, where patients are treated without being admitted to a hospital bed.",
    },
  ],
  keyPoints: [
    "Health refers to physical, mental, and social well-being, not just freedom from disease.",
    "Public health services are funded by taxes paid by the public to the government.",
    "In India, private health services are growing rapidly, while public services remain congested.",
    "Costa Rica spends army funds on public welfare, making it one of the healthiest nations.",
  ],
  formulas: [],
  crux: [
    "Government has a duty to ensure healthcare, nutrition, and clean water for all.",
    "Public health centres are low-cost/free; private clinics are expensive but quick.",
    "Dirty water and poor sanitation are the roots of major communicable illnesses.",
    "Costa Rican model shows that avoiding military spending helps improve national health.",
  ],
  exercises: [
    {
      id: "c7c2-ex-all",
      name: "Chapter Solutions",
      questions: [],
    },
  ],
  examples: [],
  mcqs: [
    {
      id: "cc2-mcq-1",
      question: "What is health?",
      options: [
        "Only being free of illness",
        "Our ability to remain free of illness and injuries",
        "Eating only junk food",
        "Sleeping all day long",
      ],
      correctAnswer: "b",
      explanation:
        "Health refers to our complete physical, mental, and disease-free well-being.",
    },
    {
      id: "cc2-mcq-2",
      question:
        "In which health facility do patients have to pay a lot of money?",
      options: [
        "Public health service",
        "Private health facility",
        "Free health camp",
        "Charity dispensary",
      ],
      correctAnswer: "b",
      explanation:
        "Private health facilities are run for profit, making them quite expensive.",
    },
    {
      id: "cc2-mcq-3",
      question: "Which health system is run directly by the government?",
      options: [
        "Private hospitals",
        "Public health services",
        "Personal clinics",
        "Corporate diagnostic labs",
      ],
      correctAnswer: "b",
      explanation:
        "Public health services are managed by the government for all citizens.",
    },
    {
      id: "cc2-mcq-4",
      question:
        "What is the main cause of water-borne diseases like cholera and jaundice?",
      options: [
        "Clean tap water",
        "Contaminated (dirty) water",
        "Fresh air",
        "Green leafy vegetables",
      ],
      correctAnswer: "b",
      explanation:
        "Dirty water contains pathogens that cause communicable, water-borne illnesses.",
    },
    {
      id: "cc2-mcq-5",
      question:
        "Costa Rica is considered to be one of the healthiest countries in:",
      options: ["Asia", "Central America", "Europe", "Africa"],
      correctAnswer: "b",
      explanation:
        "Costa Rica is located in Central America and has excellent health policies.",
    },
    {
      id: "cc2-mcq-6",
      question:
        "What did Costa Rica decide not to have in order to spend money on public health?",
      options: ["Schools", "An army", "Roads", "Police force"],
      correctAnswer: "b",
      explanation:
        "Costa Rica abolished its army to redirect defense funds into health and education.",
    },
    {
      id: "cc2-mcq-7",
      question: "What does 'PHC' stand for in public health services?",
      options: [
        "Public Health Centre",
        "Primary Health Centre",
        "Private Health Clinic",
        "Personal Health Care",
      ],
      correctAnswer: "b",
      explanation:
        "PHCs are local Primary Health Centres that serve rural villages.",
    },
    {
      id: "cc2-mcq-8",
      question: "Communicable diseases are spread through:",
      options: [
        "Playing outdoors",
        "Water, food, and air",
        "Reading storybooks",
        "Sleeping early",
      ],
      correctAnswer: "b",
      explanation:
        "Communicable diseases spread through contaminated vectors like air, food, or water.",
    },
    {
      id: "cc2-mcq-9",
      question: "Which of the following is a private health facility?",
      options: [
        "Government district hospital",
        "Private clinic or nursing home",
        "Rural health sub-centre",
        "Government medical college",
      ],
      correctAnswer: "b",
      explanation:
        "A private clinic is privately owned and operated outside of government funding.",
    },
    {
      id: "cc2-mcq-10",
      question:
        "What is essential to prevent the spread of malaria and dengue?",
      options: [
        "Drinking cold soda",
        "Proper sanitation and clean surroundings",
        "Watching television",
        "Eating sweets",
      ],
      correctAnswer: "b",
      explanation:
        "Sanitation and avoiding stagnant water prevent mosquitoes from breeding and spreading diseases.",
    },
  ],
  summary: [
    "The chapter 'Role of the Government in Health' outlines the public healthcare system in India, compares it with private clinics, and details issues like water quality and sanitation that directly impact public health. It highlights the Costa Rican approach as an example of prioritizing citizen health.",
  ],
};
