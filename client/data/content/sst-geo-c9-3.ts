import { ChapterContent } from "../types";

const themeColor = "#00C6FF";

export const sstGeoC93: ChapterContent = {
  id: "sst-geo-c9-3",
  number: 3,
  title: "Drainage",
  isHtmlView: true,
  htmlOverview: `
    <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: transparent;">
      <!-- Key Concepts Introduction -->
      <div style="background-color: #1E1E2E; border: 1px solid rgba(0, 198, 255, 0.25); border-radius: 16px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
        <h3 style="color: ${themeColor}; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px; display: flex; align-items: center;">
          <span style="margin-right: 8px; font-size: 22px;">💧</span> Introduction
        </h3>
        <p style="color: #E0E0E0; font-size: 15px; line-height: 1.6; text-align: justify; margin: 0; font-weight: 300;">
          The term drainage describes the river system of an area. India's drainage systems are mainly controlled by its broad relief features, categorizing Indian rivers into two major groups: the perennial <b>Himalayan Rivers</b> and the seasonal <b>Peninsular Rivers</b>.
        </p>
      </div>

      <!-- Key Milestones (Important Points) -->
      <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
        <h3 style="color: ${themeColor}; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 14px; display: flex; align-items: center;">
          <span style="margin-right: 8px; font-size: 18px;">📌</span> Key Points
        </h3>
        <ul style="color: #B3B3C6; font-size: 14.5px; line-height: 1.7; margin: 0; padding-left: 20px; text-align: justify;">
          <li style="margin-bottom: 10px;"><b style="color: ${themeColor};">Himalayan Systems:</b> Includes the <b>Indus</b> (originates near Mansarovar), the <b>Ganga</b> (formed by Bhagirathi and Alaknanda at Devaprayag), and the <b>Brahmaputra</b> (enters India through Arunachal Pradesh). These carry massive water and silt volumes.</li>
          <li style="margin-bottom: 10px;"><b style="color: ${themeColor};">Peninsular Rivers:</b> Mostly rain-fed and flow eastwards into the Bay of Bengal (<b>Godavari, Mahanadi, Krishna, Kaveri</b>) forming fertile deltas, except <b>Narmada</b> and <b>Tapi</b>, which flow west into the Arabian Sea through rift valleys.</li>
          <li style="margin-bottom: 10px;"><b style="color: ${themeColor};">Godavari Basin:</b> The largest Peninsular river system, often referred to as the <i>Dakshin Ganga</i> due to its size and length.</li>
          <li style="margin-bottom: 10px;"><b style="color: ${themeColor};">Lakes of India:</b> Fresh water lakes (like <b>Wular</b>, which is tectonic, and <b>Dal, Nainital</b>) and salt water lakes (like <b>Sambhar</b>, used for salt production).</li>
          <li style="margin-bottom: 0;"><b style="color: ${themeColor};">Economic Value:</b> Rivers and lakes are highly vital for irrigation, drinking water, hydroelectric power generation, inland navigation, and tourism.</li>
        </ul>
      </div>
      
      <!-- Key Terms Glossy Box -->
      <div style="background: rgba(0, 198, 255, 0.05); border: 1.5px solid rgba(0, 198, 255, 0.25); border-radius: 16px; padding: 20px; box-shadow: 0 4px 30px rgba(0,0,0,0.15);">
        <h3 style="color: ${themeColor}; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 12px;">🔑 Key Terms to Remember</h3>
        <div style="color: #E0E0E0; font-size: 14px; line-height: 1.6; text-align: justify;">
          <p style="margin-top: 0; margin-bottom: 8px;"><b style="color: ${themeColor};">Water Divide:</b> An elevated upland or mountain range separating two adjacent drainage basins.</p>
          <p style="margin-bottom: 8px;"><b style="color: ${themeColor};">Estuary:</b> A semi-enclosed coastal body of water where freshwater from rivers mixes with saltwater from the sea (formed by Narmada and Tapi).</p>
          <p style="margin-bottom: 8px;"><b style="color: ${themeColor};">Delta:</b> A triangular tract of sediment deposited at the mouth of a river before entering the sea (formed by Ganga-Brahmaputra, Godavari).</p>
          <p style="margin-bottom: 0;"><b style="color: ${themeColor};">Perennial Rivers:</b> Rivers that have water flow throughout the year, fed by both rainfall and melting glaciers.</p>
        </div>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex-sst-qa": `
      <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: transparent;">
        <!-- Q1 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q1. Choose the right answer from the four alternatives given below.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
              <li style="margin-bottom: 10px;">
                <b>(i) In which of the following places is the Wular lake located?</b><br/>
                Answer: <b style="color: ${themeColor};">(d) Jammu and Kashmir</b>
              </li>
              <li style="margin-bottom: 10px;">
                <b>(ii) The river Narmada has its source at:</b><br/>
                Answer: <b style="color: ${themeColor};">(c) Amarkantak</b>
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iii) Which one of the following lakes is a salt water lake?</b><br/>
                Answer: <b style="color: ${themeColor};">(a) Sambhar</b>
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iv) Which one of the following is the longest river of the Peninsular India?</b><br/>
                Answer: <b style="color: ${themeColor};">(c) Godavari</b>
              </li>
              <li style="margin-bottom: 0;">
                <b>(v) Which one amongst the following rivers flows through a rift valley?</b><br/>
                Answer: <b style="color: ${themeColor};">(d) Tapi</b>
              </li>
            </ul>
          </div>
        </div>

        <!-- Q2 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q2. Answer the following questions briefly.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
              <li style="margin-bottom: 10px;">
                <b>(i) What is meant by a water divide? Give an example.</b><br/>
                An elevated landmass (mountain/upland) separating two adjacent drainage basins. For example, the water divide between the Indus and Ganga river systems.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(ii) Which is the largest river basin in India?</b><br/>
                The <b style="color: ${themeColor};">Ganga Basin</b> is the largest river basin in India.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iii) Where do the rivers Indus and Ganga have their origin?</b><br/>
                The Indus originates in Tibet, near Lake Mansarovar. The Ganga originates from the Gangotri Glacier as the Bhagirathi.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iv) Name the two headstreams of the Ganga. Where do they meet to form the Ganga?</b><br/>
                The headstreams are <b style="color: ${themeColor};">Bhagirathi</b> and <b style="color: ${themeColor};">Alaknanda</b>. They meet at <b style="color: ${themeColor};">Devaprayag</b> in Uttarakhand.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(v) Why does the Brahmaputra in its Tibetan part have less silt, despite a longer course?</b><br/>
                In Tibet, the river flows through a cold and dry plateau, resulting in low water volume and very little geological erosion.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(vi) Which two Peninsular rivers flow through trough?</b><br/>
                The <b style="color: ${themeColor};">Narmada</b> and the <b style="color: ${themeColor};">Tapi</b> flow through troughs/rift valleys created by faulting.
              </li>
              <li style="margin-bottom: 0;">
                <b>(vii) State some economic benefits of rivers and lakes:</b><br/>
                They provide freshwater for drinking and industries, enable agricultural irrigation, support fisheries, generate hydro-electricity, and boost tourism.
              </li>
            </ul>
          </div>
        </div>

        <!-- Q3 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q3. Below are given names of a few lakes of India. Group them under two categories - natural and created by human beings.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
              <li style="margin-bottom: 8px;">
                <b>Natural Lakes:</b><br/>
                Wular, Dal, Nainital, Bhimtal, Loktak, Chilika, Sambhar, and Pulicat.
              </li>
              <li style="margin-bottom: 0;">
                <b>Man-Made (Human-Created) Lakes:</b><br/>
                Gobind Sagar, Barapani, Rana Pratap Sagar, Nizam Sagar, Nagarjuna Sagar, and Hirakund.
              </li>
            </ul>
          </div>
        </div>

        <!-- Q4 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q4. Discuss the significant difference between the Himalayan and the Peninsular rivers.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <b style="color: ${themeColor}; font-weight: 600;">Differences:</b>
            <ul style="margin: 6px 0 0 0; padding-left: 20px;">
              <li style="margin-bottom: 6px;"><b>Himalayan Rivers:</b> Perennial (flow year-round, fed by glaciers and rain), long courses, perform high erosion, have large drainage basins (e.g. Ganga).</li>
              <li style="margin-bottom: 0;"><b>Peninsular Rivers:</b> Seasonal (rain-fed, dry up in dry seasons), shorter and shallower courses, perform minimal erosion, smaller basins (except Godavari).</li>
            </ul>
          </div>
        </div>

        <!-- Q5 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q5. Compare the east flowing and the west flowing rivers of the Peninsular plateau.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
              <li style="margin-bottom: 8px;">
                <b>East Flowing Rivers (Godavari, Mahanadi, Krishna, Kaveri):</b><br/>
                Flow into the Bay of Bengal, carry larger water volumes, and construct wide, fertile delta formations.
              </li>
              <li style="margin-bottom: 0;">
                <b>West Flowing Rivers (Narmada, Tapi):</b><br/>
                Flow into the Arabian Sea, flow through narrow rift valley troughs, and form deep estuaries instead of deltas.
              </li>
            </ul>
          </div>
        </div>

        <!-- Q6 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q6. Why are rivers important for the country's economy?</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <b style="color: ${themeColor}; font-weight: 600;">Answer:</b> Rivers are economic lifelines because:
            <ul style="margin: 6px 0 0 0; padding-left: 20px;">
              <li style="margin-bottom: 6px;"><b>Agriculture:</b> Offer the main source of water for irrigation, which supports India's food production.</li>
              <li style="margin-bottom: 6px;"><b>Power Generation:</b> Crucial for hydro-electric power plants.</li>
              <li style="margin-bottom: 6px;"><b>Industrial Use:</b> Essential for industrial cooling, processing, and manufacturing operations.</li>
              <li style="margin-bottom: 0;"><b>Navigation & Livelihood:</b> Supply cheap transport channels and sustain fishing and tourism industries.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
  introduction: "The river systems of India are categorized into perennial Himalayan systems and seasonal Peninsular systems.",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "sst-geo-c9-3-mcq-1",
      question: "In which of the following places is the Wular lake located?",
      options: ["Rajasthan", "Punjab", "Uttar Pradesh", "Jammu and Kashmir"],
      correctAnswer: "d",
    },
    {
      id: "sst-geo-c9-3-mcq-2",
      question: "The river Narmada originates from:",
      options: ["Satpura", "Brahmagiri", "Amarkantak", "Western Ghats"],
      correctAnswer: "c",
    },
    {
      id: "sst-geo-c9-3-mcq-3",
      question: "Which of the following is a salt water lake in India?",
      options: ["Wular", "Dal", "Sambhar", "Gobind Sagar"],
      correctAnswer: "c",
    },
    {
      id: "sst-geo-c9-3-mcq-4",
      question: "Which is the longest river of Peninsular India?",
      options: ["Narmada", "Mahanadi", "Godavari", "Krishna"],
      correctAnswer: "c",
    },
    {
      id: "sst-geo-c9-3-mcq-5",
      question: "Which of these Peninsular rivers flows west through a rift valley?",
      options: ["Godavari", "Krishna", "Tapi", "Mahanadi"],
      correctAnswer: "c",
    },
    {
      id: "sst-geo-c9-3-mcq-6",
      question: "The Bhagirathi and Alaknanda join to form the Ganga at:",
      options: ["Haridwar", "Devaprayag", "Allahabad", "Rishikesh"],
      correctAnswer: "b",
    },
    {
      id: "sst-geo-c9-3-mcq-7",
      question: "What is the Brahmaputra River known as in Tibet?",
      options: ["Dihang", "Tsangpo", "Jamuna", "Meghna"],
      correctAnswer: "b",
    },
    {
      id: "sst-geo-c9-3-mcq-8",
      question: "Which of the following is a man-made/artificial lake in India?",
      options: ["Loktak", "Chilika", "Pulicat", "Gobind Sagar"],
      correctAnswer: "d",
    },
    {
      id: "sst-geo-c9-3-mcq-9",
      question: "An elevated upland area separating two adjacent river basins is called a:",
      options: ["Water divide", "Gorge", "Estuary", "Delta"],
      correctAnswer: "a",
    },
    {
      id: "sst-geo-c9-3-mcq-10",
      question: "Which river is also known as the 'Dakshin Ganga'?",
      options: ["Krishna", "Kaveri", "Mahanadi", "Godavari"],
      correctAnswer: "d",
    },
  ],
  summary: [],
  exercises: [
    {
      id: "ex-sst-qa",
      name: "Q & A",
      questions: [],
    },
  ],
  examples: [],
};
