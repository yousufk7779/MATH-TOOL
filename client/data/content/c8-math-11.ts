import { ChapterContent } from "../types";

const ex111Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #00D4FF; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #00D4FF; padding-left: 15px; margin-top: 15px; background: rgba(0, 212, 255, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #00D4FF; font-weight: 700; }
    .step-label { color: #40C4FF; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
    .fig-container { display: flex; justify-content: center; margin: 15px 0; }
    .prop-table { width: 100%; border-collapse: collapse; margin: 10px 0; background: rgba(0,0,0,0.2); border-radius: 8px; overflow: hidden; }
    .prop-table th, .prop-table td { padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; }
    .prop-table th { background: rgba(0, 212, 255, 0.2); color: #00D4FF; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Following are the car parking charges near a railway station upto:</div>
      <div class="q-subtext">4 hours — Rs 60</div>
      <div class="q-subtext">8 hours — Rs 100</div>
      <div class="q-subtext">12 hours — Rs 140</div>
      <div class="q-subtext">24 hours — Rs 180</div>
      <div class="q-text">Check if the parking charges are in direct proportion to the parking time.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Two quantities are in direct proportion if their ratio (x/y) remains constant.</div>
        <div class="sol-step">C₁/T₁ = 60/4 = 15</div>
        <div class="sol-step">C₂/T₂ = 100/8 = 12.5</div>
        <div class="sol-step">C₃/T₃ = 140/12 = 11.66...</div>
        <div class="sol-step">C₄/T₄ = 180/24 = 7.5</div>
        <div class="sol-step">Since 15 ≠ 12.5 ≠ 11.66 ≠ 7.5, the ratios are not equal.</div>
        <div class="sol-step"><span class="ans-highlight">Therefore, the parking charges are not in direct proportion to the parking time.</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. A mixture of paint is prepared by mixing 1 part of red pigments with 8 parts of base. In the following table, find the parts of base that need to be added.</div>
      <table class="prop-table">
        <tr><th>Parts of red pigment</th><td>1</td><td>4</td><td>7</td><td>12</td><td>20</td></tr>
        <tr><th>Parts of base</th><td>8</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
      </table>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let red pigment be x and base be y. Ratio x/y = 1/8.</div>
        <div class="sol-step">For x = 4: y = 4 × 8 = <span class="ans-highlight">32</span></div>
        <div class="sol-step">For x = 7: y = 7 × 8 = <span class="ans-highlight">56</span></div>
        <div class="sol-step">For x = 12: y = 12 × 8 = <span class="ans-highlight">96</span></div>
        <div class="sol-step">For x = 20: y = 20 × 8 = <span class="ans-highlight">160</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. In Question 2 above, if 1 part of a red pigment requires 75 mL of base, how much red pigment should we mix with 1800 mL of base?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the red pigment required be x.</div>
        <table class="prop-table">
          <tr><th>Red pigment (parts)</th><td>1</td><td>x</td></tr>
          <tr><th>Base (mL)</th><td>75</td><td>1800</td></tr>
        </table>
        <div class="sol-step">Ratio = 1/75 = x/1800</div>
        <div class="sol-step">x = 1800 / 75</div>
        <div class="sol-step">x = <span class="ans-highlight">24 parts</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. A machine in a soft drink factory fills 840 bottles in six hours. How many bottles will it fill in five hours?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the number of bottles be x.</div>
        <table class="prop-table">
          <tr><th>Hours</th><td>6</td><td>5</td></tr>
          <tr><th>Bottles</th><td>840</td><td>x</td></tr>
        </table>
        <div class="sol-step">Since time and bottles are in direct proportion:</div>
        <div class="sol-step">840/6 = x/5</div>
        <div class="sol-step">140 = x/5</div>
        <div class="sol-step">x = 140 × 5 = <span class="ans-highlight">700 bottles</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. A photograph of a bacteria enlarged 50,000 times attains a length of 5 cm as shown in the diagram. What is the actual length of the bacteria? If the photograph is enlarged 20,000 times only, what would be its enlarged length?</div>
      <div class="fig-container">
        <svg width="150" height="80" viewBox="0 0 150 80">
          <ellipse cx="75" cy="40" rx="60" ry="20" fill="rgba(0, 212, 255, 0.1)" stroke="#00D4FF" stroke-width="2"/>
          <path d="M40 30 Q 50 20 60 30 M80 30 Q 90 20 100 30" stroke="#00D4FF" fill="none" stroke-width="1"/>
          <circle cx="50" cy="45" r="3" fill="#00D4FF"/>
          <circle cx="100" cy="45" r="3" fill="#00D4FF"/>
          <path d="M15 40 L5 40 M135 40 L145 40 M75 20 L75 10 M75 60 L75 70" stroke="#00D4FF" stroke-width="1"/>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Actual length = Enlarged length / Enlargement</div>
        <div class="sol-step">= 5 / 50,000 = 1 / 10,000 = <span class="ans-highlight">10⁻⁴ cm</span></div>
        <div class="sol-step">Now, for enlargement of 20,000 times:</div>
        <div class="sol-step">Length/Enlargement = 5 / 50,000 = x / 20,000</div>
        <div class="sol-step">x = (5 × 20,000) / 50,000 = 100,000 / 50,000 = <span class="ans-highlight">2 cm</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. In a model of a ship, the mast is 9 cm high, while the mast of the actual ship is 12 m high. If the length of the ship is 28 m, how long is the model ship?</div>
      <div class="fig-container">
        <svg width="150" height="100" viewBox="0 0 150 100">
          <path d="M20 70 L130 70 L110 90 L40 90 Z" fill="rgba(0, 212, 255, 0.1)" stroke="#00D4FF" stroke-width="2"/>
          <line x1="75" y1="70" x2="75" y2="20" stroke="#00D4FF" stroke-width="3"/>
          <path d="M75 20 L110 50 L75 55 Z" fill="rgba(0, 212, 255, 0.2)" stroke="#00D4FF"/>
          <text x="80" y="40" fill="#00D4FF" font-size="10">Mast</text>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Let the length of model ship be x.</div>
        <table class="prop-table">
          <tr><th></th><th>Actual Ship</th><th>Model Ship</th></tr>
          <tr><th>Mast Height</th><td>12 m</td><td>9 cm</td></tr>
          <tr><th>Ship Length</th><td>28 m</td><td>x cm</td></tr>
        </table>
        <div class="sol-step">Ratio = 12/9 = 28/x</div>
        <div class="sol-step">x = (28 × 9) / 12</div>
        <div class="sol-step">x = 7 × 3 = <span class="ans-highlight">21 cm</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. Suppose 2 kg of sugar contains 9 × 10⁶ crystals. How many sugar crystals are there in (i) 5 kg of sugar? (ii) 1.2 kg of sugar?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Weight and crystals are in direct proportion. Ratio = (9 × 10⁶) / 2 = 4.5 × 10⁶ crystals/kg.</div>
        <div class="sol-step"><span class="step-label">(i) 5 kg:</span> 5 × 4.5 × 10⁶ = <span class="ans-highlight">2.25 × 10⁷ crystals</span></div>
        <div class="sol-step"><span class="step-label">(ii) 1.2 kg:</span> 1.2 × 4.5 × 10⁶ = <span class="ans-highlight">5.4 × 10⁶ crystals</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">8. Renu has a road map with a scale of 1 cm representing 18 km. She drives on a road for 72 km. What would be her distance covered in the map?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Scale = 1 cm / 18 km.</div>
        <div class="sol-step">Let map distance be x.</div>
        <div class="sol-step">1/18 = x/72</div>
        <div class="sol-step">x = 72 / 18 = <span class="ans-highlight">4 cm</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">9. A 5 m 60 cm high vertical pole casts a shadow 3 m 20 cm long. Find at the same time (i) the length of the shadow cast by another pole 10 m 50 cm high (ii) the height of a pole which casts a shadow 5 m long.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Convert to cm: 5 m 60 cm = 560 cm, 3 m 20 cm = 320 cm.</div>
        <div class="sol-step">Ratio = 560 / 320 = 7/4.</div>
        <div class="sol-step"><span class="step-label">(i) Shadow for 1050 cm pole:</span> 1050 / x = 7/4 ⇒ x = (1050 × 4) / 7 = 150 × 4 = <span class="ans-highlight">600 cm or 6 m</span></div>
        <div class="sol-step"><span class="step-label">(ii) Height for 500 cm shadow:</span> x / 500 = 7/4 ⇒ x = (500 × 7) / 4 = 125 × 7 = <span class="ans-highlight">875 cm or 8 m 75 cm</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">10. A loaded truck travels 14 km in 25 minutes. If the speed remains the same, how far can it travel in 5 hours?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Time = 5 hours = 5 × 60 = 300 minutes.</div>
        <div class="sol-step">Ratio = 14 km / 25 min.</div>
        <div class="sol-step">14 / 25 = x / 300</div>
        <div class="sol-step">x = (14 × 300) / 25 = 14 × 12 = <span class="ans-highlight">168 km</span></div>
      </div>
    </div>
  </div>
`;

const ex112Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #00D4FF; font-weight: 600; margin-bottom: 12px; }
    .q-subtext { color: #e0e0e0; margin-bottom: 5px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #00D4FF; padding-left: 15px; margin-top: 15px; background: rgba(0, 212, 255, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #00D4FF; font-weight: 700; }
    .step-label { color: #40C4FF; font-weight: 600; margin-right: 5px; }
    .sol-step { margin-bottom: 8px; }
    .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; line-height: 1.8; }
    .fig-container { display: flex; justify-content: center; margin: 15px 0; }
    .prop-table { width: 100%; border-collapse: collapse; margin: 10px 0; background: rgba(0,0,0,0.2); border-radius: 8px; overflow: hidden; }
    .prop-table th, .prop-table td { padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: center; }
    .prop-table th { background: rgba(0, 212, 255, 0.2); color: #00D4FF; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. Which of the following are in inverse proportion?</div>
      <div class="q-subtext">(i) The number of workers on a job and the time to complete the job.</div>
      <div class="q-subtext">(ii) The time taken for a journey and the distance travelled in a uniform speed.</div>
      <div class="q-subtext">(iii) Area of cultivated land and the crop harvested.</div>
      <div class="q-subtext">(iv) The time taken for a fixed journey and the speed of the vehicle.</div>
      <div class="q-subtext">(v) The population of a country and the area of land per person.</div>
      <div class="sol-box">
        <div class="sol-step"><span class="ans-highlight">(i), (iv) and (v) are in inverse proportion.</span></div>
        <div class="sol-step">Reason: In these cases, as one quantity increases, the other decreases (and vice-versa) such that their product remains constant.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. In a Television game show, the prize money of Rs 1,00,000 is to be divided equally amongst the winners. Complete the following table and find whether the prize money given to an individual winner is directly or inversely proportional to the number of winners?</div>
      <table class="prop-table">
        <tr><th>Number of winners</th><td>1</td><td>2</td><td>4</td><td>5</td><td>8</td><td>10</td><td>20</td></tr>
        <tr><th>Prize (Rs)</th><td>1,00,000</td><td>50,000</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
      </table>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Total Prize = Rs 1,00,000 (Constant). Product = x × y. This is <span class="ans-highlight">Inverse Proportion</span>.</div>
        <div class="sol-step">For 4 winners: 1,00,000 / 4 = <span class="ans-highlight">25,000</span></div>
        <div class="sol-step">For 5 winners: 1,00,000 / 5 = <span class="ans-highlight">20,000</span></div>
        <div class="sol-step">For 8 winners: 1,00,000 / 8 = <span class="ans-highlight">12,500</span></div>
        <div class="sol-step">For 10 winners: 1,00,000 / 10 = <span class="ans-highlight">10,000</span></div>
        <div class="sol-step">For 20 winners: 1,00,000 / 20 = <span class="ans-highlight">5,000</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Raj is making a wheel using spokes. He wants to fix equal spokes in such a way that the angles between any pair of consecutive spokes are equal. Help him by completing the following table.</div>
      <div class="fig-container">
        <svg width="200" height="80" viewBox="0 0 200 80">
          <circle cx="30" cy="40" r="25" fill="none" stroke="#00D4FF" stroke-width="2"/>
          <line x1="30" y1="15" x2="30" y2="65" stroke="#00D4FF"/><line x1="5" y1="40" x2="55" y2="40" stroke="#00D4FF"/>
          <circle cx="100" cy="40" r="25" fill="none" stroke="#00D4FF" stroke-width="2"/>
          <line x1="100" y1="15" x2="100" y2="65" stroke="#00D4FF"/><line x1="78" y1="28" x2="122" y2="52" stroke="#00D4FF"/><line x1="78" y1="52" x2="122" y2="28" stroke="#00D4FF"/>
          <circle cx="170" cy="40" r="25" fill="none" stroke="#00D4FF" stroke-width="2"/>
          <line x1="170" y1="15" x2="170" y2="65" stroke="#00D4FF"/><line x1="145" y1="40" x2="195" y2="40" stroke="#00D4FF"/>
          <line x1="152" y1="22" x2="188" y2="58" stroke="#00D4FF"/><line x1="152" y1="58" x2="188" y2="22" stroke="#00D4FF"/>
        </svg>
      </div>
      <table class="prop-table">
        <tr><th>Number of spokes</th><td>4</td><td>6</td><td>8</td><td>10</td><td>12</td></tr>
        <tr><th>Angle between spokes</th><td>90°</td><td>60°</td><td>...</td><td>...</td><td>...</td></tr>
      </table>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Total angle = 360° (Constant). Spokes × Angle = 360°. (Inverse Proportion).</div>
        <div class="sol-step">For 8 spokes: 360 / 8 = <span class="ans-highlight">45°</span></div>
        <div class="sol-step">For 10 spokes: 360 / 10 = <span class="ans-highlight">36°</span></div>
        <div class="sol-step">For 12 spokes: 360 / 12 = <span class="ans-highlight">30°</span></div>
        <div class="sol-step"><span class="step-label">(i)</span> Yes, they are in inverse proportion.</div>
        <div class="sol-step"><span class="step-label">(ii)</span> For 15 spokes: 360 / 15 = <span class="ans-highlight">24°</span></div>
        <div class="sol-step"><span class="step-label">(iii)</span> For 40°: 360 / 40 = <span class="ans-highlight">9 spokes</span></div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. If a box of sweets is divided among 24 children, they will get 5 sweets each. How many would each get, if the number of the children is reduced by 4?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Children = 24, Sweets per child = 5. Total sweets = 24 × 5 = 120.</div>
        <div class="sol-step">Reduced children = 24 - 4 = 20.</div>
        <div class="sol-step">Sweets per child = 120 / 20 = <span class="ans-highlight">6 sweets</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. A farmer has enough food to feed 20 animals in his cattle for 6 days. How long would the food last if there were 10 more animals in his cattle?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Animals = 20, Days = 6. Total feed units = 20 × 6 = 120.</div>
        <div class="sol-step">New animals = 20 + 10 = 30.</div>
        <div class="sol-step">Days = 120 / 30 = <span class="ans-highlight">4 days</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. A contractor estimates that 3 persons could rewire Javid's house in 4 days. If, he uses 4 persons instead of three, how long should they take to complete the job?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Persons = 3, Days = 4. Product = 3 × 4 = 12.</div>
        <div class="sol-step">New persons = 4.</div>
        <div class="sol-step">Days = 12 / 4 = <span class="ans-highlight">3 days</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">7. A batch of bottles were packed in 25 boxes with 12 bottles in each box. If the same batch is packed using 20 bottles in each box, how many boxes would be filled?</div>
      <div class="fig-container">
        <svg width="150" height="80" viewBox="0 0 150 80">
          <rect x="10" y="20" width="60" height="40" fill="none" stroke="#00D4FF" stroke-width="2"/>
          <circle cx="20" cy="30" r="5" fill="#00D4FF"/><circle cx="35" cy="30" r="5" fill="#00D4FF"/><circle cx="50" cy="30" r="5" fill="#00D4FF"/>
          <circle cx="20" cy="45" r="5" fill="#00D4FF"/><circle cx="35" cy="45" r="5" fill="#00D4FF"/><circle cx="50" cy="45" r="5" fill="#00D4FF"/>
          <rect x="80" y="20" width="60" height="40" fill="none" stroke="#00D4FF" stroke-width="2"/>
          <circle cx="90" cy="30" r="4" fill="#00D4FF"/><circle cx="105" cy="30" r="4" fill="#00D4FF"/><circle cx="120" cy="30" r="4" fill="#00D4FF"/>
          <circle cx="90" cy="40" r="4" fill="#00D4FF"/><circle cx="105" cy="40" r="4" fill="#00D4FF"/><circle cx="120" cy="40" r="4" fill="#00D4FF"/>
          <circle cx="90" cy="50" r="4" fill="#00D4FF"/><circle cx="105" cy="50" r="4" fill="#00D4FF"/><circle cx="120" cy="50" r="4" fill="#00D4FF"/>
        </svg>
      </div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Boxes = 25, Bottles per box = 12. Total bottles = 25 × 12 = 300.</div>
        <div class="sol-step">New bottles per box = 20.</div>
        <div class="sol-step">Boxes = 300 / 20 = <span class="ans-highlight">15 boxes</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">8. A factory requires 42 machines to produce a given number of articles in 63 days. How many machines would be required to produce the same number of articles in 54 days?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Machines × Days = Constant.</div>
        <div class="sol-step">42 × 63 = x × 54</div>
        <div class="sol-step">x = (42 × 63) / 54</div>
        <div class="sol-step">x = 7 × 7 = <span class="ans-highlight">49 machines</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">9. A car takes 2 hours to reach a destination by travelling at the speed of 60 km/h. How long will it take when the car travels at the speed of 80 km/h?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Speed and time are in inverse proportion. Product = 60 × 2 = 120 km (Distance).</div>
        <div class="sol-step">New Speed = 80 km/h.</div>
        <div class="sol-step">Time = 120 / 80 = 1.5 hours or <span class="ans-highlight">1 hour 30 minutes</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">10. Two persons could fit new windows in a house in 3 days.</div>
      <div class="q-subtext">(i) One of the persons fell ill before the work started. How long would the job take now?</div>
      <div class="q-subtext">(ii) How many persons would be needed to fit the windows in one day?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Product = 2 persons × 3 days = 6 person-days.</div>
        <div class="sol-step"><span class="step-label">(i)</span> If 1 person fell ill, only 1 person is left. Days = 6 / 1 = <span class="ans-highlight">6 days</span>.</div>
        <div class="sol-step"><span class="step-label">(ii)</span> For 1 day: Persons = 6 / 1 = <span class="ans-highlight">6 persons</span>.</div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">11. A school has 8 periods a day each of 45 minutes duration. How long would each period be, if the school has 9 periods a day, assuming the number of school hours to be the same?</div>
      <div class="sol-box">
        <div class="sol-step"><span class="step-label">Solution:</span></div>
        <div class="sol-step">Periods × Minutes = Constant.</div>
        <div class="sol-step">8 × 45 = 9 × x</div>
        <div class="sol-step">x = (8 × 45) / 9 = 8 × 5 = <span class="ans-highlight">40 minutes</span>.</div>
      </div>
    </div>
  </div>
`;

export const c8Math11: ChapterContent = {
  id: "c8-math-11",
  number: 11,
  title: "Direct and Inverse Proportion",
  introduction: "In our daily lives, we often encounter situations where a change in one quantity causes a corresponding change in another. This chapter explores how variables relate to each other through direct and inverse proportions, helping us solve real-world problems efficiently.",
  mcqs: [
    { id: "m1", question: "If x and y are in direct proportion, then which of the following is constant?", options: ["x + y", "x - y", "x / y", "x × y"], correctAnswer: "C" },
    { id: "m2", question: "If x and y are in inverse proportion, then which of the following is constant?", options: ["x + y", "x / y", "x × y", "x - y"], correctAnswer: "C" },
    { id: "m3", question: "If 10 m of cloth costs Rs 200, then the cost of 4 m of cloth is:", options: ["Rs 80", "Rs 100", "Rs 40", "Rs 50"], correctAnswer: "A" },
    { id: "m4", question: "Which of the following is an example of inverse proportion?", options: ["Distance and time at uniform speed", "Speed and time taken for a fixed distance", "Quantity of goods and total cost", "Side of square and its area"], correctAnswer: "B" },
    { id: "m5", question: "If 12 men can do a work in 8 days, then 16 men can do the same work in:", options: ["10 days", "6 days", "5 days", "12 days"], correctAnswer: "B" },
    { id: "m6", question: "x and y are in direct proportion. If x = 2 and y = 10, then for x = 5, y will be:", options: ["20", "25", "15", "50"], correctAnswer: "B" },
    { id: "m7", question: "x and y are in inverse proportion. If x = 4 and y = 6, then for x = 8, y will be:", options: ["12", "3", "4", "2"], correctAnswer: "B" },
    { id: "m8", question: "The distance covered by a car and the petrol consumed are in:", options: ["Direct proportion", "Inverse proportion", "No proportion", "None of these"], correctAnswer: "A" },
    { id: "m9", question: "If a map scale is 1:1000, then 5 cm on map represents:", options: ["5 m", "50 m", "500 m", "5 km"], correctAnswer: "B" },
    { id: "m10", question: "Number of pipes and time taken to fill a tank are in:", options: ["Direct proportion", "Inverse proportion", "Linear proportion", "None"], correctAnswer: "B" }
  ],
  summary: [
    "Two quantities x and y are said to be in direct proportion if they increase or decrease together such that x/y = k (constant).",
    "Two quantities x and y are said to be in inverse proportion if an increase in x causes a proportional decrease in y (and vice-versa) such that xy = k (constant).",
    "Direct proportion: x₁/y₁ = x₂/y₂.",
    "Inverse proportion: x₁y₁ = x₂y₂."
  ],
  exercises: [
    { id: "ex11-1", name: "Exercise 11.1", questions: [] },
    { id: "ex11-2", name: "Exercise 11.2", questions: [] }
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
        color: #00D4FF;
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
        margin-top: 10px;
        background: rgba(0,0,0,0.2);
        border-radius: 12px;
        overflow: hidden;
      }

      .prop-table th, .prop-table td {
        padding: 12px;
        border: 1px solid rgba(255,255,255,0.1);
        text-align: left;
        font-size: 15px;
      }

      .prop-table th {
        background: rgba(255,255,255,0.1);
        color: #40C4FF;
        font-weight: 700;
      }

      .highlight { color: #40C4FF; font-weight: 600; }
      
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
          In our daily lives, we often encounter situations where a change in one quantity causes a corresponding change in another. This chapter explores how variables relate to each other through direct and inverse proportions, helping us solve real-world problems efficiently.
        </div>
      </div>
      <div class="section-box">
        <div class="section-header"><span>✦</span> Proportion Types</div>
        <table class="prop-table">
          <tr>
            <th>Type</th>
            <th>Relationship</th>
            <th>Constant Ratio/Product</th>
          </tr>
          <tr>
            <td><strong>Direct Proportion</strong></td>
            <td>Both increase or decrease together</td>
            <td><span class="highlight">x / y = k</span></td>
          </tr>
          <tr>
            <td><strong>Inverse Proportion</strong></td>
            <td>One increases, other decreases</td>
            <td><span class="highlight">x × y = k</span></td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex11-1": ex111Content,
    "ex11-2": ex112Content
  }
};
