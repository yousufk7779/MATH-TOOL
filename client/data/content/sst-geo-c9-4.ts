import { ChapterContent } from "../types";

const themeColor = "#00FFAB";

export const sstGeoC94: ChapterContent = {
  id: "sst-geo-c9-4",
  number: 4,
  title: "Climate",
  isHtmlView: true,
  htmlOverview: `
    <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: transparent;">
      <!-- Key Concepts Introduction -->
      <div style="background-color: #1E1E2E; border: 1px solid rgba(67, 160, 71, 0.25); border-radius: 16px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
        <h3 style="color: ${themeColor}; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 12px; display: flex; align-items: center;">
          <span style="margin-right: 8px; font-size: 22px;">🌦️</span> Introduction
        </h3>
        <p style="color: #E0E0E0; font-size: 15px; line-height: 1.6; text-align: justify; margin: 0; font-weight: 300;">
          <b>Climate</b> refers to the sum total of weather conditions and variations over a large area for a long period of time (more than thirty years). <b>Weather</b> refers to the state of the atmosphere over an area at any point of time. India has a <b>monsoon type of climate</b>, characterized by seasonal wind reversals and regional variations in temperature and precipitation.
        </p>
      </div>

      <!-- Key Milestones (Important Points) -->
      <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
        <h3 style="color: ${themeColor}; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 14px; display: flex; align-items: center;">
          <span style="margin-right: 8px; font-size: 18px;">📌</span> Key Points
        </h3>
        <ul style="color: #B3B3C6; font-size: 14.5px; line-height: 1.7; margin: 0; padding-left: 20px; text-align: justify;">
          <li style="margin-bottom: 10px;"><b style="color: ${themeColor};">Climatic Controls:</b> Six major factors control climate: <b>Latitude</b>, <b>Altitude</b>, <b>Pressure and wind system</b>, <b>Distance from the sea</b>, <b>Ocean currents</b>, and <b>Relief features</b>.</li>
          <li style="margin-bottom: 10px;"><b style="color: ${themeColor};">The Seasons:</b> India experiences four main seasons: the <b>Cold Weather Season</b> (Winter: mid-Nov to Feb), the <b>Hot Weather Season</b> (Summer: March to May), the <b>Advancing Monsoon</b> (Rainy: June to Sept), and the <b>Retreating Monsoon</b> (Transition: Oct to Nov).</li>
          <li style="margin-bottom: 10px;"><b style="color: ${themeColor};">Monsoon Onset:</b> Monsoons arrive in India by early June and retreat by October. They split into two branches: the <b>Arabian Sea branch</b> and the <b>Bay of Bengal branch</b>.</li>
          <li style="margin-bottom: 0;"><b style="color: ${themeColor};">Distribution of Rainfall:</b> Highly uneven across India. Mawsynram (Meghalaya) receives over 400 cm of rain annually, whereas Western Rajasthan and parts of Ladakh receive less than 10 cm.</li>
        </ul>
      </div>
      
      <!-- Key Terms Glossy Box -->
      <div style="background: rgba(67, 160, 71, 0.05); border: 1.5px solid rgba(67, 160, 71, 0.25); border-radius: 16px; padding: 20px; box-shadow: 0 4px 30px rgba(0,0,0,0.15);">
        <h3 style="color: ${themeColor}; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 12px;">🔑 Key Terms to Remember</h3>
        <div style="color: #E0E0E0; font-size: 14px; line-height: 1.6; text-align: justify;">
          <p style="margin-top: 0; margin-bottom: 8px;"><b style="color: ${themeColor};">Coriolis Force:</b> An apparent force caused by the Earth's rotation that deflects winds to the right in the northern hemisphere and to the left in the southern hemisphere.</p>
          <p style="margin-bottom: 8px;"><b style="color: ${themeColor};">Jet Stream:</b> Fast-flowing, narrow bands of westerly winds blowing in the upper troposphere.</p>
          <p style="margin-bottom: 8px;"><b style="color: ${themeColor};">ITCZ:</b> The Inter Tropical Convergence Zone, a low-pressure belt near the equator where trade winds converge.</p>
          <p style="margin-bottom: 8px;"><b style="color: ${themeColor};">Loo:</b> Hot, gusty, dry winds blowing during summer afternoons over northern and northwestern India.</p>
          <p style="margin-bottom: 0;"><b style="color: ${themeColor};">Mahawat:</b> The small amount of winter rainfall caused by Western Cyclonic Disturbances, highly beneficial for rabi crops.</p>
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
                <b>(i) Which one of the following places receives the highest rainfall in the world?</b><br/>
                Answer: <b style="color: ${themeColor};">(b) Mawsynram</b>
              </li>
              <li style="margin-bottom: 10px;">
                <b>(ii) The wind blowing in the northern plains in summers is known as:</b><br/>
                Answer: <b style="color: ${themeColor};">(b) Loo</b>
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iii) Which one of the following causes rainfall during winters in north-western part of India?</b><br/>
                Answer: <b style="color: ${themeColor};">(c) Western disturbances</b>
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iv) Monsoon arrives in India approximately in:</b><br/>
                Answer: <b style="color: ${themeColor};">(c) Early June</b>
              </li>
              <li style="margin-bottom: 0;">
                <b>(v) Which one of the following characterises the cold weather season in India?</b><br/>
                Answer: <b style="color: ${themeColor};">(c) Cool days and cold nights</b>
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
                <b>(i) What are the controls affecting the climate of India?</b><br/>
                <b style="color: ${themeColor};">Answer:</b> Latitude, altitude, pressure & wind systems, distance from the sea, ocean currents, and relief features.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(ii) Why does India have a monsoon type of climate?</b><br/>
                <b style="color: ${themeColor};">Answer:</b> Due to seasonal wind reversals caused by differential heating/cooling of the landmass and surrounding oceans.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iii) Which part of India does experience the highest diurnal range of temperature and why?</b><br/>
                <b style="color: ${themeColor};">Answer:</b> The Thar Desert (Rajasthan), because sand absorbs heat rapidly during the day and loses it quickly at night.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iv) Which winds account for rainfall along the Malabar coast?</b><br/>
                <b style="color: ${themeColor};">Answer:</b> Southwest monsoon winds (specifically the Arabian Sea branch).
              </li>
              <li style="margin-bottom: 10px;">
                <b>(v) What are Jet streams and how do they affect the climate of India?</b><br/>
                <b style="color: ${themeColor};">Answer:</b> High-speed westerly winds in the upper troposphere. The westerly jet brings winter cyclonic storms, while the easterly jet causes summer cyclones.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(vi) Define monsoons. What do you understand by "break" in monsoon?</b><br/>
                <b style="color: ${themeColor};">Answer:</b> Monsoons are seasonal wind reversals over a year. A "break" is a dry, rainless spell separating wet spells of monsoon rainfall.
              </li>
              <li style="margin-bottom: 0;">
                <b>(vii) Why is the monsoon considered a unifying bond?</b><br/>
                <b style="color: ${themeColor};">Answer:</b> It binds the nation by structuring agricultural cycles, water reservoirs, animal-plant life, and regional festivals.
              </li>
            </ul>
          </div>
        </div>

        <!-- Q3 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q3. Why does the rainfall decrease from the east to the west in Northern India?</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <b style="color: ${themeColor}; font-weight: 600;">Answer:</b> The Bay of Bengal branch of the monsoon moves inland from east to west along the Ganga plains. As it travels westward, it continuously sheds moisture, leading to a steady decrease in rainfall towards the west.
          </div>
        </div>

        <!-- Q4 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q4. Give reasons as to why.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
              <li style="margin-bottom: 10px;">
                <b>(i) Seasonal reversal of wind direction takes place over the Indian subcontinent?</b><br/>
                <b style="color: ${themeColor};">Answer:</b> Due to differential heating of land and sea, shifting the low-pressure belt (ITCZ) northwards in summer and southwards in winter.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(ii) The bulk of rainfall in India is concentrated over a few months.</b><br/>
                <b style="color: ${themeColor};">Answer:</b> Due to the seasonal nature of Southwest monsoon winds, which blow only from June to September.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iii) The Tamil Nadu coast receives winter rainfall.</b><br/>
                <b style="color: ${themeColor};">Answer:</b> Dry Northeast trade winds gather moisture over the Bay of Bengal and deposit it as rain on the Tamil Nadu coast in winter.
              </li>
              <li style="margin-bottom: 10px;">
                <b>(iv) The delta region of the eastern coast is frequently struck by cyclones.</b><br/>
                <b style="color: ${themeColor};">Answer:</b> Due to low-pressure depressions forming over the Bay of Bengal during the retreating monsoon period (October-November).
              </li>
              <li style="margin-bottom: 0;">
                <b>(v) Parts of Rajasthan, Gujarat and the leeward side of the Western Ghats are drought-prone.</b><br/>
                <b style="color: ${themeColor};">Answer:</b> They lie in the rain-shadow region of mountains or are too far inland from moisture-laden winds.
              </li>
            </ul>
          </div>
        </div>

        <!-- Q5 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q5. Describe the regional variations in the climatic conditions of India with the help of suitable examples.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <b style="color: ${themeColor}; font-weight: 600;">Answer:</b> India shows sharp regional contrasts in climate:
            <ul style="margin: 6px 0 0 0; padding-left: 20px; list-style-type: disc;">
              <li style="margin-bottom: 6px;"><b>Temperature:</b> Summer temperatures reach 50°C in the Rajasthan desert but stay around 20°C in Pahalgam (Kashmir). Winter nights drop to -45°C in Drass but are 24°C in Chennai.</li>
              <li style="margin-bottom: 0;"><b>Precipitation:</b> Annual rainfall exceeds 400 cm in Mawsynram (Meghalaya) but is less than 10 cm in Western Rajasthan and Ladakh.</li>
            </ul>
          </div>
        </div>

        <!-- Q6 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q6. Discuss the mechanism of monsoons.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <b style="color: ${themeColor}; font-weight: 600;">Answer:</b> The mechanism is driven by:
            <ol style="margin: 6px 0 0 0; padding-left: 20px; list-style-type: decimal;">
              <li style="margin-bottom: 6px;"><b>Differential heating and cooling</b> of land and sea.</li>
              <li style="margin-bottom: 6px;"><b>ITCZ shift</b> northwards over the Ganga plain in summer.</li>
              <li style="margin-bottom: 6px;"><b>High-pressure zone east of Madagascar</b> pushing moisture towards India.</li>
              <li style="margin-bottom: 6px;"><b>Tibetan plateau heating</b>, drawing strong vertical air currents.</li>
              <li style="margin-bottom: 0;"><b>Jet stream movements</b> (westerly shifting north of Himalayas, easterly over the peninsula).</li>
            </ol>
          </div>
        </div>

        <!-- Q7 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q7. Give an account of weather conditions and characteristics of the cold season.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <b style="color: ${themeColor}; font-weight: 600;">Answer:</b> Characteristics of the winter season (mid-November to February):
            <ul style="margin: 6px 0 0 0; padding-left: 20px; list-style-type: disc;">
              <li style="margin-bottom: 6px;"><b>Temperature:</b> Cool days and cold nights. Temperatures average 10°C-15°C in the northern plains.</li>
              <li style="margin-bottom: 6px;"><b>Winds:</b> Northeast trade winds blow from land to sea, causing dry weather across most of India.</li>
              <li style="margin-bottom: 0;"><b>Rainfall:</b> Small amount of rain ("Mahawat") occurs in the north due to Western Cyclonic Disturbances, benefiting rabi crops.</li>
            </ul>
          </div>
        </div>

        <!-- Q8 -->
        <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <p style="color: ${themeColor}; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 10px; line-height: 1.4; text-align: justify;">Q8. Give the characteristics and effects of the monsoon rainfall in India.</p>
          <div style="color: #D1D1E9; font-size: 14.2px; line-height: 1.6; text-align: justify;">
            <b style="color: ${themeColor}; font-weight: 600;">Answer:</b>
            <ul style="margin: 6px 0 0 0; padding-left: 20px; list-style-type: disc;">
              <li style="margin-bottom: 8px;"><b>Characteristics:</b> Highly erratic, seasonal (June to September), unevenly distributed, and alternates between wet spells and dry breaks.</li>
              <li style="margin-bottom: 0;"><b>Effects:</b> It is the lifeline of Indian agriculture, recharging rivers and aquifers, but its irregular nature can cause regional floods or severe droughts.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
  },
  introduction: "Climate refers to the sum total of weather conditions and variations over a large area for a long period of time (more than thirty years).",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  mcqs: [
    {
      id: "sst-geo-c9-4-mcq-1",
      question: "Which one of the following places receives the highest rainfall in the world?",
      options: ["Silchar", "Mawsynram", "Cherrapunji", "Guwahati"],
      correctAnswer: "b",
    },
    {
      id: "sst-geo-c9-4-mcq-2",
      question: "The wind blowing in the northern plains in summers is known as:",
      options: ["Kaal Baisakhi", "Loo", "Trade Winds", "None of the above"],
      correctAnswer: "b",
    },
    {
      id: "sst-geo-c9-4-mcq-3",
      question: "Which one of the following causes rainfall during winters in north-western part of India?",
      options: ["Cyclonic depression", "Retreating monsoon", "Western disturbances", "Southwest monsoon"],
      correctAnswer: "c",
    },
    {
      id: "sst-geo-c9-4-mcq-4",
      question: "Monsoon arrives in India approximately in:",
      options: ["Early May", "Early July", "Early June", "Early August"],
      correctAnswer: "c",
    },
    {
      id: "sst-geo-c9-4-mcq-5",
      question: "Which one of the following characterises the cold weather season in India?",
      options: ["Warm days and warm nights", "Warm days and cold nights", "Cool days and cold nights", "Cold days and warm nights"],
      correctAnswer: "c",
    },
    {
      id: "sst-geo-c9-4-mcq-6",
      question: "What deflects the wind direction in the Northern and Southern Hemispheres?",
      options: ["Gravitational Force", "Coriolis Force", "Centrifugal Force", "Friction Force"],
      correctAnswer: "b",
    },
    {
      id: "sst-geo-c9-4-mcq-7",
      question: "The low-pressure belt near the equator where trade winds converge is known as:",
      options: ["ITCZ", "Jet Stream", "Loo", "Mango Showers"],
      correctAnswer: "a",
    },
    {
      id: "sst-geo-c9-4-mcq-8",
      question: "Which state in India is usually the first to receive the monsoon onset?",
      options: ["Tamil Nadu", "Kerala", "Maharashtra", "West Bengal"],
      correctAnswer: "b",
    },
    {
      id: "sst-geo-c9-4-mcq-9",
      question: "The local winter rainfall in Northern India that is highly beneficial for Rabi crops is called:",
      options: ["Mango Shower", "Loo", "Mahawat", "Kaal Baisakhi"],
      correctAnswer: "c",
    },
    {
      id: "sst-geo-c9-4-mcq-10",
      question: "The term 'climate' refers to weather conditions over a period of at least:",
      options: ["10 years", "20 years", "30 years", "50 years"],
      correctAnswer: "c",
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
