import { ChapterContent } from "../types";

const ex131Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #E040FB; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #E040FB; padding-left: 15px; margin-top: 15px; background: rgba(224, 64, 251, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #E040FB; font-weight: 700; }
    .step-label { color: #EA80FC; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
    .fig-container { display: flex; justify-content: center; margin: 15px 0; background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; }
    .prop-table { width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; }
    .prop-table th, .prop-table td { padding: 12px 6px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-size: 14px; }
    .prop-table th { background: rgba(224, 64, 251, 0.2); color: #E040FB; font-weight: 600; width: 1%; white-space: nowrap; }
    .table-container { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. The following graph shows the temperature of a patient in a hospital, recorded every hour.</div>
      <div class="fig-container">
        <svg width="280" height="200" viewBox="0 0 280 200">
          <line x1="40" y1="160" x2="260" y2="160" stroke="#e0e0e0" stroke-width="1"/>
          <line x1="40" y1="160" x2="40" y2="20" stroke="#e0e0e0" stroke-width="1"/>
          <path d="M40 150 L70 140 L100 80 L130 100 L160 130 L190 130 L220 120" fill="none" stroke="#E040FB" stroke-width="2"/>
          <circle cx="40" cy="150" r="3" fill="#E040FB"/><circle cx="70" cy="140" r="3" fill="#E040FB"/>
          <circle cx="100" cy="80" r="3" fill="#E040FB"/><circle cx="130" cy="100" r="3" fill="#E040FB"/>
          <circle cx="160" cy="130" r="3" fill="#E040FB"/><circle cx="190" cy="130" r="3" fill="#E040FB"/>
          <circle cx="220" cy="120" r="3" fill="#E040FB"/>
          <text x="40" y="175" fill="#e0e0e0" font-size="9" text-anchor="middle">9am</text>
          <text x="100" y="175" fill="#e0e0e0" font-size="9" text-anchor="middle">11am</text>
          <text x="160" y="175" fill="#e0e0e0" font-size="9" text-anchor="middle">1pm</text>
          <text x="220" y="175" fill="#e0e0e0" font-size="9" text-anchor="middle">3pm</text>
          <text x="35" y="150" fill="#e0e0e0" font-size="9" text-anchor="end">35</text>
          <text x="35" y="100" fill="#e0e0e0" font-size="9" text-anchor="end">37.5</text>
          <text x="35" y="50" fill="#e0e0e0" font-size="9" text-anchor="end">40</text>
        </svg>
      </div>
      <div class="q-subtext">(a) What was the patient’s temperature at 1 p.m.?</div>
      <div class="q-subtext">(b) When was the patient’s temperature 38.5°C?</div>
      <div class="q-subtext">(c) The patient’s temperature was the same two times during the period given. What were these two times?</div>
      <div class="q-subtext">(d) What was the temperature at 1.30 p.m.? How did you arrive at your answer?</div>
      <div class="q-subtext">(e) During which periods did the patient's temperature show an upward trend?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(a)</span> At 1 p.m., the patient’s temperature was <span class="ans-highlight">36.5°C</span>.</div>
        <div class="sol-step"><span class="step-label">(b)</span> The patient’s temperature was 38.5°C at <span class="ans-highlight">12 noon</span>.</div>
        <div class="sol-step"><span class="step-label">(c)</span> The temperature was the same at <span class="ans-highlight">1 p.m. and 2 p.m.</span> (36.5°C).</div>
        <div class="sol-step"><span class="step-label">(d)</span> At 1:30 p.m., the temperature was <span class="ans-highlight">36.5°C</span>. Since the temperature at 1 p.m. and 2 p.m. was the same, it remained constant in between.</div>
        <div class="sol-step"><span class="step-label">(e)</span> Upward trend was seen during: <span class="ans-highlight">9 a.m. to 10 a.m., 10 a.m. to 11 a.m., and 2 p.m. to 3 p.m.</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. The following line graph shows the yearly sales figures for a manufacturing company.</div>
      <div class="fig-container">
        <svg width="280" height="180" viewBox="0 0 280 180">
          <line x1="40" y1="150" x2="260" y2="150" stroke="#e0e0e0" stroke-width="1"/>
          <line x1="40" y1="150" x2="40" y2="20" stroke="#e0e0e0" stroke-width="1"/>
          <path d="M40 130 L90 100 L140 110 L190 70 L240 90" fill="none" stroke="#E040FB" stroke-width="2"/>
          <circle cx="40" cy="130" r="4" fill="#E040FB"/><circle cx="90" cy="100" r="4" fill="#E040FB"/>
          <circle cx="140" cy="110" r="4" fill="#E040FB"/><circle cx="190" cy="70" r="4" fill="#E040FB"/>
          <circle cx="240" cy="90" r="4" fill="#E040FB"/>
          <text x="40" y="165" fill="#e0e0e0" font-size="9" text-anchor="middle">2002</text>
          <text x="140" y="165" fill="#e0e0e0" font-size="9" text-anchor="middle">2004</text>
          <text x="240" y="165" fill="#e0e0e0" font-size="9" text-anchor="middle">2006</text>
          <text x="35" y="130" fill="#e0e0e0" font-size="9" text-anchor="end">4 Cr</text>
          <text x="35" y="90" fill="#e0e0e0" font-size="9" text-anchor="end">8 Cr</text>
          <text x="35" y="50" fill="#e0e0e0" font-size="9" text-anchor="end">12 Cr</text>
        </svg>
      </div>
      <div class="q-subtext">(a) What were the sales in (i) 2002 (ii) 2006?</div>
      <div class="q-subtext">(b) What were the sales in (i) 2003 (ii) 2005?</div>
      <div class="q-subtext">(c) Compute the difference between the sales in 2002 and 2006.</div>
      <div class="q-subtext">(d) In which year was there the greatest difference between the sales as compared to its previous year?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(a)</span> (i) 2002: <span class="ans-highlight">4 Crores</span>, (ii) 2006: <span class="ans-highlight">8 Crores</span>.</div>
        <div class="sol-step"><span class="step-label">(b)</span> (i) 2003: <span class="ans-highlight">7 Crores</span>, (ii) 2005: <span class="ans-highlight">10 Crores</span>.</div>
        <div class="sol-step"><span class="step-label">(c)</span> Difference = 8 - 4 = <span class="ans-highlight">4 Crores</span>.</div>
        <div class="sol-step"><span class="step-label">(d)</span> The greatest difference was in <span class="ans-highlight">2005</span> (Difference from 2004 = 10 - 6 = 4 Cr).</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. For an experiment in Botany, two different plants, plant A and plant B were grown under similar laboratory conditions. Their heights were measured at the end of each week for 3 weeks.</div>
      <div class="fig-container">
        <svg width="280" height="180" viewBox="0 0 280 180">
          <line x1="40" y1="150" x2="260" y2="150" stroke="#e0e0e0" stroke-width="1"/>
          <line x1="40" y1="150" x2="40" y2="20" stroke="#e0e0e0" stroke-width="1"/>
          <!-- Plant A (Solid) -->
          <path d="M40 150 L100 130 L160 80 L220 60" fill="none" stroke="#E040FB" stroke-width="2"/>
          <!-- Plant B (Dashed) -->
          <path d="M40 150 L100 140 L160 80 L220 50" fill="none" stroke="#EA80FC" stroke-width="2" stroke-dasharray="4"/>
          <text x="100" y="165" fill="#e0e0e0" font-size="9" text-anchor="middle">Week 1</text>
          <text x="160" y="165" fill="#e0e0e0" font-size="9" text-anchor="middle">Week 2</text>
          <text x="220" y="165" fill="#e0e0e0" font-size="9" text-anchor="middle">Week 3</text>
          <text x="35" y="150" fill="#e0e0e0" font-size="9" text-anchor="end">0</text>
          <text x="35" y="100" fill="#e0e0e0" font-size="9" text-anchor="end">5 cm</text>
          <text x="35" y="50" fill="#e0e0e0" font-size="9" text-anchor="end">10 cm</text>
          <rect x="230" y="20" width="10" height="2" fill="#E040FB"/><text x="245" y="23" fill="#E040FB" font-size="8">A</text>
          <rect x="230" y="30" width="10" height="2" fill="#EA80FC" opacity="0.6"/><text x="245" y="33" fill="#EA80FC" font-size="8">B</text>
        </svg>
      </div>
      <div class="q-subtext">(a) How high was Plant A after (i) 2 weeks (ii) 3 weeks?</div>
      <div class="q-subtext">(b) How high was Plant B after (i) 2 weeks (ii) 3 weeks?</div>
      <div class="q-subtext">(c) How much did Plant A grow during the 3rd week?</div>
      <div class="q-subtext">(d) How much did Plant B grow from the end of the 2nd week to the end of the 3rd week?</div>
      <div class="q-subtext">(e) During which week did Plant A grow most?</div>
      <div class="q-subtext">(f) During which week did Plant B grow least?</div>
      <div class="q-subtext">(g) Were the two plants of the same height during any week shown here? Specify.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(a)</span> (i) 2 weeks: <span class="ans-highlight">7 cm</span>, (ii) 3 weeks: <span class="ans-highlight">9 cm</span>.</div>
        <div class="sol-step"><span class="step-label">(b)</span> (i) 2 weeks: <span class="ans-highlight">7 cm</span>, (ii) 3 weeks: <span class="ans-highlight">10 cm</span>.</div>
        <div class="sol-step"><span class="step-label">(c)</span> Grow in 3rd week = 9 - 7 = <span class="ans-highlight">2 cm</span>.</div>
        <div class="sol-step"><span class="step-label">(d)</span> Grow in 3rd week = 10 - 7 = <span class="ans-highlight">3 cm</span>.</div>
        <div class="sol-step"><span class="step-label">(e)</span> Plant A grew most in <span class="ans-highlight">2nd week</span> (7 - 2 = 5 cm).</div>
        <div class="sol-step"><span class="step-label">(f)</span> Plant B grew least in <span class="ans-highlight">1st week</span> (1 - 0 = 1 cm).</div>
        <div class="sol-step"><span class="step-label">(g)</span> Yes, at the end of the <span class="ans-highlight">2nd week</span> (both 7 cm).</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. The following graph shows the temperature forecast and the actual temperature for each day of a week.</div>
      <div class="fig-container">
        <svg width="280" height="200" viewBox="0 0 280 200">
          <line x1="40" y1="170" x2="260" y2="170" stroke="#e0e0e0"/>
          <line x1="40" y1="170" x2="40" y2="20" stroke="#e0e0e0"/>
          <!-- Forecast (Dashed) -->
          <path d="M40 140 L70 110 L100 80 L130 95 L160 140 L190 50 L220 20" fill="none" stroke="#EA80FC" stroke-width="2" stroke-dasharray="4"/>
          <!-- Actual (Solid) -->
          <path d="M40 125 L70 110 L100 50 L130 140 L160 140 L190 80 L220 20" fill="none" stroke="#E040FB" stroke-width="2"/>
          <text x="40" y="185" fill="#e0e0e0" font-size="8">Mon</text><text x="100" y="185" fill="#e0e0e0" font-size="8">Wed</text>
          <text x="160" y="185" fill="#e0e0e0" font-size="8">Fri</text><text x="220" y="185" fill="#e0e0e0" font-size="8">Sun</text>
          <text x="35" y="170" fill="#e0e0e0" font-size="8" text-anchor="end">10</text>
          <text x="35" y="90" fill="#e0e0e0" font-size="8" text-anchor="end">25</text>
          <text x="35" y="20" fill="#e0e0e0" font-size="8" text-anchor="end">40</text>
        </svg>
      </div>
      <div class="q-subtext">(a) On which days was the forecast temperature the same as the actual temperature?</div>
      <div class="q-subtext">(b) What was the maximum forecast temperature during the week?</div>
      <div class="q-subtext">(c) What was the minimum actual temperature during the week?</div>
      <div class="q-subtext">(d) On which day did the actual temperature differ the most from the forecast temperature?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(a)</span> Forecast and actual were same on <span class="ans-highlight">Tuesday, Friday and Sunday</span>.</div>
        <div class="sol-step"><span class="step-label">(b)</span> Maximum forecast temperature was <span class="ans-highlight">35°C</span>.</div>
        <div class="sol-step"><span class="step-label">(c)</span> Minimum actual temperature was <span class="ans-highlight">15°C</span>.</div>
        <div class="sol-step"><span class="step-label">(d)</span> Differed most on <span class="ans-highlight">Thursday</span> (Forecast 22.5°C, Actual 15°C; Difference = 7.5°C).</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. Use the tables below to draw linear graphs.</div>
      <div class="q-subtext">(a) The number of days a hillside city received snow in different years.</div>
      <div class="table-container">
        <table class="prop-table">
          <tr><th>Year</th><td>2003</td><td>2004</td><td>2005</td><td>2006</td></tr>
          <tr><th>Days</th><td>8</td><td>10</td><td>5</td><td>12</td></tr>
        </table>
      </div>
      <div class="fig-container">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <line x1="30" y1="130" x2="230" y2="130" stroke="#e0e0e0"/>
          <line x1="30" y1="130" x2="30" y2="20" stroke="#e0e0e0"/>
          <path d="M40 70 L90 50 L140 100 L190 30" fill="none" stroke="#E040FB" stroke-width="2"/>
          <circle cx="40" cy="70" r="3" fill="#E040FB"/><circle cx="90" cy="50" r="3" fill="#E040FB"/>
          <circle cx="140" cy="100" r="3" fill="#E040FB"/><circle cx="190" cy="30" r="3" fill="#E040FB"/>
          <text x="40" y="145" fill="#e0e0e0" font-size="8">'03</text><text x="90" y="145" fill="#e0e0e0" font-size="8">'04</text>
          <text x="140" y="145" fill="#e0e0e0" font-size="8">'05</text><text x="190" y="145" fill="#e0e0e0" font-size="8">'06</text>
        </svg>
      </div>
      <div class="q-subtext">(b) Population (in thousands) of men and women in a village in different years.</div>
      <div class="table-container">
        <table class="prop-table">
          <tr><th>Year</th><td>2003</td><td>2004</td><td>2005</td><td>2006</td><td>2007</td></tr>
          <tr><th>Men</th><td>12</td><td>12.5</td><td>13</td><td>13.2</td><td>13.5</td></tr>
          <tr><th>Women</th><td>11.3</td><td>11.9</td><td>13</td><td>13.6</td><td>12.8</td></tr>
        </table>
      </div>
      <div class="fig-container">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <line x1="30" y1="130" x2="230" y2="130" stroke="#e0e0e0"/>
          <line x1="30" y1="130" x2="30" y2="20" stroke="#e0e0e0"/>
          <!-- Men (Solid) -->
          <path d="M40 80 L80 75 L120 70 L160 68 L200 65" fill="none" stroke="#E040FB" stroke-width="2"/>
          <!-- Women (Dashed) -->
          <path d="M40 87 L80 81 L120 70 L160 64 L200 72" fill="none" stroke="#EA80FC" stroke-width="2" stroke-dasharray="3"/>
          <text x="40" y="145" fill="#e0e0e0" font-size="8">'03</text>
          <text x="120" y="145" fill="#e0e0e0" font-size="8">'05</text>
          <text x="200" y="145" fill="#e0e0e0" font-size="8">'07</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="ans-highlight">Linear graphs show the population trends for men and women over the years.</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. A courier-person cycles from a town to a neighboring suburban area to deliver a parcel to a merchant. His distance from the town at different times is shown by the following graph.</div>
      <div class="fig-container">
        <svg width="280" height="180" viewBox="0 0 280 180">
          <line x1="40" y1="150" x2="260" y2="150" stroke="#e0e0e0"/>
          <line x1="40" y1="150" x2="40" y2="20" stroke="#e0e0e0"/>
          <path d="M40 150 L80 90 L120 70 L160 70 L200 20" fill="none" stroke="#E040FB" stroke-width="2"/>
          <circle cx="40" cy="150" r="3" fill="#E040FB"/><circle cx="80" cy="90" r="3" fill="#E040FB"/>
          <circle cx="120" cy="70" r="3" fill="#E040FB"/><circle cx="160" cy="70" r="3" fill="#E040FB"/><circle cx="200" cy="20" r="3" fill="#E040FB"/>
          <text x="40" y="165" fill="#e0e0e0" font-size="8">8am</text>
          <text x="80" y="165" fill="#e0e0e0" font-size="8">9am</text>
          <text x="120" y="165" fill="#e0e0e0" font-size="8">10am</text>
          <text x="160" y="165" fill="#e0e0e0" font-size="8">11am</text>
          <text x="200" y="165" fill="#e0e0e0" font-size="8">12pm</text>
          <text x="35" y="150" fill="#e0e0e0" font-size="8">0</text>
          <text x="35" y="90" fill="#e0e0e0" font-size="8">10</text>
          <text x="35" y="20" fill="#e0e0e0" font-size="8">22 km</text>
        </svg>
      </div>
      <div class="q-subtext">(a) What is the scale taken for the time axis?</div>
      <div class="q-subtext">(b) How much time did the person take for the travel?</div>
      <div class="q-subtext">(c) How far is the place of the merchant from the town?</div>
      <div class="q-subtext">(d) Did the person stop on his way? Explain.</div>
      <div class="q-subtext">(e) During which period did he ride fastest?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(a)</span> Scale: <span class="ans-highlight">4 units = 1 hour</span>.</div>
        <div class="sol-step"><span class="step-label">(b)</span> Total time = 8 a.m. to 11.30 a.m. = <span class="ans-highlight">3.5 hours</span>.</div>
        <div class="sol-step"><span class="step-label">(c)</span> Distance = <span class="ans-highlight">22 km</span>.</div>
        <div class="sol-step"><span class="step-label">(d)</span> Yes, between 10 a.m. and 10.30 a.m. (indicated by the horizontal line).</div>
        <div class="sol-step"><span class="step-label">(e)</span> Fastest ride was between <span class="ans-highlight">8 a.m. and 9 a.m.</span> (steepest line).</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. Can there be a time-temperature graph as follows? Justify your answer.</div>
      <div class="fig-container">
        <svg width="280" height="100" viewBox="0 0 280 100">
          <g transform="translate(10,10)">
            <line x1="0" y1="80" x2="50" y2="80" stroke="#e0e0e0"/><line x1="0" y1="80" x2="0" y2="30" stroke="#e0e0e0"/>
            <line x1="0" y1="80" x2="40" y2="40" stroke="#E040FB" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="25" y="90" fill="#e0e0e0" font-size="7"> (i) </text>
          </g>
          <g transform="translate(80,10)">
            <line x1="0" y1="80" x2="50" y2="80" stroke="#e0e0e0"/><line x1="0" y1="80" x2="0" y2="30" stroke="#e0e0e0"/>
            <line x1="0" y1="40" x2="40" y2="80" stroke="#E040FB" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="25" y="90" fill="#e0e0e0" font-size="7"> (ii) </text>
          </g>
          <g transform="translate(150,10)">
            <line x1="0" y1="80" x2="50" y2="80" stroke="#e0e0e0"/><line x1="0" y1="80" x2="0" y2="30" stroke="#e0e0e0"/>
            <line x1="25" y1="80" x2="25" y2="30" stroke="#E040FB" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="25" y="90" fill="#e0e0e0" font-size="7"> (iii) </text>
          </g>
          <g transform="translate(220,10)">
            <line x1="0" y1="80" x2="50" y2="80" stroke="#e0e0e0"/><line x1="0" y1="80" x2="0" y2="30" stroke="#e0e0e0"/>
            <line x1="0" y1="50" x2="45" y2="50" stroke="#E040FB" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="25" y="90" fill="#e0e0e0" font-size="7"> (iv) </text>
          </g>
          <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#E040FB" /></marker></defs>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> Possible: Temperature increases as time passes.</div>
        <div class="sol-step"><span class="step-label">(ii)</span> Possible: Temperature decreases as time passes.</div>
        <div class="sol-step"><span class="step-label">(iii)</span> <span class="ans-highlight">Not possible</span>: Time cannot be constant while temperature is increasing.</div>
        <div class="sol-step"><span class="step-label">(iv)</span> Possible: Temperature remains constant as time passes.</div>
      </div>
    </div>

  </div>
`;

const ex132Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #E040FB; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #E040FB; padding-left: 15px; margin-top: 15px; background: rgba(224, 64, 251, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #E040FB; font-weight: 700; }
    .step-label { color: #EA80FC; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
    .fig-container { display: flex; justify-content: center; margin: 15px 0; background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; }
    .prop-table { width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; }
    .prop-table th, .prop-table td { padding: 12px 6px; border: 1px solid rgba(255,255,255,0.1); text-align: center; font-size: 14px; }
    .prop-table th { background: rgba(224, 64, 251, 0.2); color: #E040FB; font-weight: 600; width: 1%; white-space: nowrap; }
    .table-container { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 15px 0; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Draw the graphs for the following tables of values, with suitable scales on the axes.</div>
      <div class="q-subtext">(a) Cost of apples</div>
      <div class="table-container">
        <table class="prop-table">
          <tr><th>Number of apples</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
          <tr><th>Cost (in Rs)</th><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td></tr>
        </table>
      </div>
      <div class="fig-container">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <line x1="30" y1="130" x2="230" y2="130" stroke="#e0e0e0"/>
          <line x1="30" y1="130" x2="30" y2="20" stroke="#e0e0e0"/>
          <line x1="30" y1="130" x2="190" y2="30" stroke="#E040FB" stroke-width="2"/>
          <circle cx="62" cy="110" r="3" fill="#E040FB"/><circle cx="94" cy="90" r="3" fill="#E040FB"/>
          <circle cx="126" cy="70" r="3" fill="#E040FB"/><circle cx="158" cy="50" r="3" fill="#E040FB"/>
          <circle cx="190" cy="30" r="3" fill="#E040FB"/>
          <text x="30" y="145" fill="#e0e0e0" font-size="8">0</text><text x="62" y="145" fill="#e0e0e0" font-size="8">1</text>
          <text x="126" y="145" fill="#e0e0e0" font-size="8">3</text><text x="190" y="145" fill="#e0e0e0" font-size="8">5</text>
          <text x="25" y="110" fill="#e0e0e0" font-size="8" text-anchor="end">5</text>
          <text x="25" y="70" fill="#e0e0e0" font-size="8" text-anchor="end">15</text>
          <text x="25" y="30" fill="#e0e0e0" font-size="8" text-anchor="end">25</text>
        </svg>
      </div>
      <div class="q-subtext">(b) Distance travelled by a car</div>
      <div class="table-container">
        <table class="prop-table">
          <tr><th>Time (in hours)</th><td>6 a.m.</td><td>7 a.m.</td><td>8 a.m.</td><td>9 a.m.</td></tr>
          <tr><th>Distances (in km)</th><td>40</td><td>80</td><td>120</td><td>160</td></tr>
        </table>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">(i)</span> How much distance did the car cover during the period 7.30 a.m. to 8 a.m?</div>
        <div class="sol-step"><span class="step-label">(ii)</span> What was the time when the car had covered a distance of 100 km since its start?</div>
        <div class="sol-step"><span class="step-label">Answer:</span></div>
        <div class="sol-step">(i) Distance at 7:30 a.m. = 60 km. Distance at 8 a.m. = 80 km. Cover = 80 - 60 = <span class="ans-highlight">20 km</span>. (Note: Car covers 40km per hour, so 20km in 30 mins).</div>
        <div class="sol-step">(ii) The car covered 100 km at <span class="ans-highlight">7:30 a.m.</span> (from the start 6 a.m.).</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. Draw a graph for the following.</div>
      <div class="q-subtext">(i) Side of square vs Perimeter</div>
      <div class="table-container">
        <table class="prop-table">
          <tr><th>Side (cm)</th><td>2</td><td>3</td><td>3.5</td><td>5</td><td>6</td></tr>
          <tr><th>Perimeter (cm)</th><td>8</td><td>12</td><td>14</td><td>20</td><td>24</td></tr>
        </table>
      </div>
      <div class="sol-box">
        <div class="sol-step">Is it a linear graph? <span class="ans-highlight">Yes</span>, it is a linear graph because all the points lie on a straight line passing through the origin.</div>
      </div>
      <div class="q-subtext">(ii) Side of square vs Area</div>
      <div class="table-container">
        <table class="prop-table">
          <tr><th>Side (cm)</th><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
          <tr><th>Area (cm²)</th><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td></tr>
        </table>
      </div>
      <div class="fig-container">
        <svg width="250" height="150" viewBox="0 0 250 150">
          <line x1="30" y1="130" x2="230" y2="130" stroke="#e0e0e0"/>
          <line x1="30" y1="130" x2="30" y2="20" stroke="#e0e0e0"/>
          <path d="M30 130 Q 80 120 190 30" fill="none" stroke="#E040FB" stroke-width="2"/>
          <circle cx="62" cy="116" r="3" fill="#E040FB"/><circle cx="94" cy="100" r="3" fill="#E040FB"/>
          <circle cx="126" cy="78" r="3" fill="#E040FB"/><circle cx="158" cy="50" r="3" fill="#E040FB"/>
          <circle cx="190" cy="16" r="3" fill="#E040FB"/>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step">Is it a linear graph? <span class="ans-highlight">No</span>, it is not a linear graph as the relationship is quadratic (Area = side²), resulting in a curved line.</div>
      </div>
    </div>
  </div>
`;

export const c8Math13: ChapterContent = {
  id: "c8-math-13",
  number: 13,
  title: "Introduction to Graphs",
  introduction: "Graphs are visual representations of numerical data. They help us understand patterns, trends, and relationships between different variables at a single glance. This chapter introduces you to various types of graphs such as bar graphs, pie graphs, and line graphs.",
  mcqs: [
    { id: "m1", question: "A graph that displays data that changes continuously over periods of time is:", options: ["Bar graph", "Pie graph", "Line graph", "Histogram"], correctAnswer: "C" },
    { id: "m2", question: "In a line graph, the horizontal axis is usually called:", options: ["Y-axis", "X-axis", "Origin", "Scale"], correctAnswer: "B" },
    { id: "m3", question: "The coordinates of the origin are:", options: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"], correctAnswer: "D" },
    { id: "m4", question: "The point (0, 5) lies on:", options: ["X-axis", "Y-axis", "Origin", "Quadrant I"], correctAnswer: "B" },
    { id: "m5", question: "The point (5, 0) lies on:", options: ["X-axis", "Y-axis", "Origin", "Quadrant II"], correctAnswer: "A" },
    { id: "m6", question: "A bar graph is used to:", options: ["Show parts of a whole", "Compare data among categories", "Show trends over time", "Represent frequency"], correctAnswer: "B" },
    { id: "m7", question: "In the point (3, 4), the Y-coordinate is:", options: ["3", "4", "7", "12"], correctAnswer: "B" },
    { id: "m8", question: "The independent variable is usually plotted on the:", options: ["X-axis", "Y-axis", "Any axis", "None"], correctAnswer: "A" },
    { id: "m9", question: "Which graph is circular in shape?", options: ["Line graph", "Bar graph", "Pie graph", "Histogram"], correctAnswer: "C" },
    { id: "m10", question: "If the Y-coordinate of a point is 0, it always lies on the:", options: ["Y-axis", "X-axis", "Origin", "None"], correctAnswer: "B" }
  ],
  summary: [
    "A graph is a visual representation of data. Types include Bar graph, Pie chart, Histogram, and Line graph.",
    "A line graph displays data that changes continuously over time.",
    "A coordinate system consists of two perpendicular lines: the horizontal X-axis and the vertical Y-axis.",
    "Every point is represented by coordinates (x, y).",
    "Independent variables are plotted on the X-axis and dependent variables on the Y-axis."
  ],
  exercises: [
    { id: "ex13-1", name: "Exercise 13.1", questions: [] },
    { id: "ex13-2", name: "Exercise 13.2", questions: [] }
  ],
  isHtmlView: true,
  htmlOverview: `
    <style>
      .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
      .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
      .frac .den { padding: 0 2px; }
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
      
      .premium-container {
        padding: 20px;
        color: #ffffff;
        font-family: 'Outfit', sans-serif !important;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        border-radius: 20px;
        margin: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      .section-box {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 20px;
        margin-bottom: 20px;
        backdrop-filter: blur(10px);
      }

      .section-header {
        color: #E040FB;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .prop-table {
        width: 100%;
        border-collapse: collapse;
        background: rgba(0,0,0,0.2);
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 12px;
      }

      .prop-table th, .prop-table td {
        padding: 12px;
        border: 1px solid rgba(255,255,255,0.1);
        text-align: left;
        font-size: 15px;
      }

      .prop-table th {
        background: rgba(255,255,255,0.1);
        color: #EA80FC;
        font-weight: 700;
        width: 22%;
      }
      .table-container { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin-top: 10px; }

      .highlight { color: #EA80FC; font-weight: 600; }
      
      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }
    </style>

    <div class="premium-container">
      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          Graphs are visual representations of numerical data. They help us understand patterns, trends, and relationships between different variables at a single glance. This chapter introduces you to various types of graphs such as bar graphs, pie graphs, and line graphs.
        </div>
      </div>
      <div class="section-box">
        <div class="section-header"><span>✦</span> Types of Graphs</div>
      <div class="table-container">
        <table class="prop-table">
          <tr>
            <th>Graph Type</th>
            <th>Primary Use</th>
          </tr>
          <tr>
            <td><strong>Bar Graph</strong></td>
            <td>Comparison among discrete categories</td>
          </tr>
          <tr>
            <td><strong>Pie Graph</strong></td>
            <td>Comparison of parts of a whole</td>
          </tr>
          <tr>
            <td><strong>Histogram</strong></td>
            <td>Frequency of data in intervals</td>
          </tr>
          <tr>
            <td><strong>Line Graph</strong></td>
            <td>Changes continuously over time</td>
          </tr>
        </table>
      </div>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex13-1": ex131Content,
    "ex13-2": ex132Content
  }
};

