import { ChapterContent } from "../types";

const ex41Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #2196F3; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 10px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #2196F3; padding-left: 15px; margin-top: 15px; background: rgba(33, 150, 243, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #2196F3; font-weight: 700; }
    .step-label { color: #64B5F6; font-weight: 600; margin-right: 5px; }
    .math-svg { background: white; padding: 10px; border-radius: 12px; margin: 15px 0; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
    .data-table { width: 100%; border-collapse: collapse; background: white; color: #333; border-radius: 8px; overflow: hidden; margin: 15px 0; }
    .data-table th { background: #2196F3; color: white; padding: 10px; text-align: left; border: 1px solid #ddd; }
    .data-table td { padding: 8px 12px; border: 1px solid #ddd; text-align: center; }
    .hint-box { background: #FCE4EC; color: #880E4F; padding: 15px; border-radius: 8px; font-size: 14px; margin: 15px 0; border: 1px dashed #C2185B; font-style: italic; }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. A survey was made to find the type of music that a certain group of young people liked in a city. Adjoining pie chart shows the findings of this survey.<br/><br/>From this pie chart answer the following:</div>
      <div class="q-subtext">(i) If 20 people liked classical music, how many young people were surveyed?</div>
      <div class="q-subtext">(ii) Which type of music is liked by the maximum number of people?</div>
      <div class="q-subtext">(iii) If a cassette company were to make 1000 CD's, how many of each type would they make?</div>
      
      <div style="text-align:center;">
        <div class="math-svg">
          <svg width="220" height="220" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="90" fill="white" stroke="#000" stroke-width="2"/>
            <path d="M110,110 L110,20 A90,90 0 0,1 195,138 Z" fill="#BBDEFB" stroke="#000" stroke-width="1.5"/>
            <path d="M110,110 L195,138 A90,90 0 0,1 45,173 Z" fill="#90CAF9" stroke="#000" stroke-width="1.5"/>
            <path d="M110,110 L45,173 A90,90 0 0,1 25,138 Z" fill="#64B5F6" stroke="#000" stroke-width="1.5"/>
            <path d="M110,110 L25,138 A90,90 0 0,1 110,20 Z" fill="#42A5F5" stroke="#000" stroke-width="1.5"/>
            <text x="135" y="75" font-size="11" font-weight="bold" fill="#000">Light 40%</text>
            <text x="100" y="185" font-size="11" font-weight="bold" fill="#000">Folk 30%</text>
            <text x="10" y="160" font-size="10" font-weight="bold" fill="#000">Classical 10%</text>
            <text x="20" y="55" font-size="10" font-weight="bold" fill="#000">Semi Classical 20%</text>
          </svg>
        </div>
      </div>
      
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        <span class="step-label">(i)</span> 10% represents 20 people.<br/>
        Let the total number of young people surveyed be x.<br/>
        10% of x = 20<br/>
        (<span class='frac'><span class='num'>10</span><span class='den'>100</span></span>) × x = 20<br/>
        x = (20 × 100) / 10 = <span class="ans-highlight">200</span><br/>
        Therefore, 200 young people were surveyed.<br/><br/>
        
        <span class="step-label">(ii)</span> Since the sector for Light music is the largest (40%), <span class="ans-highlight">Light music</span> is liked by the maximum number of people.<br/><br/>
        
        <span class="step-label">(iii)</span> Total number of CDs = 1000<br/>
        - Classical music CDs = 10% of 1000 = (<span class='frac'><span class='num'>10</span><span class='den'>100</span></span>) × 1000 = <span class="ans-highlight">100</span><br/>
        - Semi Classical music CDs = 20% of 1000 = (<span class='frac'><span class='num'>20</span><span class='den'>100</span></span>) × 1000 = <span class="ans-highlight">200</span><br/>
        - Light music CDs = 40% of 1000 = (<span class='frac'><span class='num'>40</span><span class='den'>100</span></span>) × 1000 = <span class="ans-highlight">400</span><br/>
        - Folk music CDs = 30% of 1000 = (<span class='frac'><span class='num'>30</span><span class='den'>100</span></span>) × 1000 = <span class="ans-highlight">300</span>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. A group of 360 people were asked to vote for their favourite season from the three seasons rainy, winter and summer.</div>
      <div class="q-subtext">(i) Which season got the most votes?</div>
      <div class="q-subtext">(ii) Find the central angle of each sector.</div>
      <div class="q-subtext">(iii) Draw a pie chart to show this information.</div>
      
      <table class="data-table">
        <tr><th>Season</th><th>No. of votes</th></tr>
        <tr><td>Summer ☀️</td><td>90</td></tr>
        <tr><td>Rainy ☔</td><td>120</td></tr>
        <tr><td>Winter ⛄</td><td>150</td></tr>
      </table>
      
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        <span class="step-label">(i)</span> The <span class="ans-highlight">Winter</span> season got the most votes (150).<br/><br/>
        <span class="step-label">(ii)</span> Total votes = 90 + 120 + 150 = 360.<br/>
        Central angle = (<span class='frac'><span class='num'>Votes</span><span class='den'>Total</span></span>) × 360°<br/>
        - Summer: (<span class='frac'><span class='num'>90</span><span class='den'>360</span></span>) × 360° = <span class="ans-highlight">90°</span><br/>
        - Rainy: (<span class='frac'><span class='num'>120</span><span class='den'>360</span></span>) × 360° = <span class="ans-highlight">120°</span><br/>
        - Winter: (<span class='frac'><span class='num'>150</span><span class='den'>360</span></span>) × 360° = <span class="ans-highlight">150°</span><br/><br/>
        <span class="step-label">(iii)</span> Pie chart based on the central angles:<br/>
        <div style="text-align:center;">
          <div class="math-svg">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="70" fill="white" stroke="#000" stroke-width="1.5"/>
              <!-- Summer 90° -->
              <path d="M90,90 L90,20 A70,70 0 0,1 160,90 Z" fill="#FFF59D" stroke="#000"/>
              <text x="110" y="50" font-size="10">Summer</text>
              <!-- Rainy 120° -->
              <path d="M90,90 L160,90 A70,70 0 0,1 29,125 Z" fill="#90CAF9" stroke="#000"/>
              <text x="95" y="140" font-size="10">Rainy</text>
              <!-- Winter 150° -->
              <path d="M90,90 L29,125 A70,70 0 0,1 90,20 Z" fill="#E0F7FA" stroke="#000"/>
              <text x="35" y="80" font-size="10">Winter</text>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Draw a pie chart showing the following information. The table shows the colours preferred by a group of people.</div>
      <table class="data-table">
        <tr><th>Colours</th><th>Number of people</th></tr>
        <tr><td style="background-color:#E3F2FD; color:#1565C0; font-weight:bold;">Blue</td><td>18</td></tr>
        <tr><td style="background-color:#E8F5E9; color:#2E7D32; font-weight:bold;">Green</td><td>9</td></tr>
        <tr><td style="background-color:#FFEBEE; color:#C62828; font-weight:bold;">Red</td><td>6</td></tr>
        <tr><td style="background-color:#FFFDE7; color:#F9A825; font-weight:bold;">Yellow</td><td>3</td></tr>
        <tr><td><b>Total</b></td><td><b>36</b></td></tr>
      </table>
      
      <div class="hint-box">
        Find the proportion of each sector. For example, Blue is <span class='frac'><span class='num'>18</span><span class='den'>36</span></span> = <span class='frac'><span class='num'>1</span><span class='den'>2</span></span>; Green is <span class='frac'><span class='num'>9</span><span class='den'>36</span></span> = <span class='frac'><span class='num'>1</span><span class='den'>4</span></span> and so on. Use this to find the corresponding angles.
      </div>
      
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        First, we calculate the central angle for each colour. Total people = 36.<br/>
        Central angle = (Number of <span class='frac'><span class='num'>people</span><span class='den'>36</span></span>) × 360°<br/>
        - Blue: (<span class='frac'><span class='num'>18</span><span class='den'>36</span></span>) × 360° = <span class="ans-highlight">180°</span><br/>
        - Green: (<span class='frac'><span class='num'>9</span><span class='den'>36</span></span>) × 360° = <span class="ans-highlight">90°</span><br/>
        - Red: (<span class='frac'><span class='num'>6</span><span class='den'>36</span></span>) × 360° = <span class="ans-highlight">60°</span><br/>
        - Yellow: (<span class='frac'><span class='num'>3</span><span class='den'>36</span></span>) × 360° = <span class="ans-highlight">30°</span><br/><br/>
        
        <div style="text-align:center;">
          <div class="math-svg">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="70" fill="white" stroke="#000" stroke-width="1.5"/>
              <!-- Blue 180° -->
              <path d="M90,90 L90,20 A70,70 0 0,1 90,160 Z" fill="#2196F3" stroke="#000"/>
              <text x="120" y="95" fill="white" font-weight="bold">Blue</text>
              <!-- Green 90° -->
              <path d="M90,90 L90,160 A70,70 0 0,1 20,90 Z" fill="#4CAF50" stroke="#000"/>
              <text x="35" y="130" fill="white" font-weight="bold">Green</text>
              <!-- Red 60° -->
              <path d="M90,90 L20,90 A70,70 0 0,1 55,29 Z" fill="#F44336" stroke="#000"/>
              <text x="35" y="65" fill="white" font-weight="bold">Red</text>
              <!-- Yellow 30° -->
              <path d="M90,90 L55,29 A70,70 0 0,1 90,20 Z" fill="#FFEB3B" stroke="#000"/>
              <text x="65" y="35" font-weight="bold">Y</text>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. The adjoining pie chart gives the marks scored in an examination by a student in Hindi, English, Mathematics, Social Science and Science. If the total marks obtained by the students were 540, answer the following questions.</div>
      <div class="q-subtext">(i) In which subject did the student score 105 marks?<br/>(Hint: for 540 marks, the central angle = 360°. So, for 105 marks, what is the central angle?)</div>
      <div class="q-subtext">(ii) How many more marks were obtained by the student in Mathematics than in Hindi?</div>
      <div class="q-subtext">(iii) Examine whether the sum of the marks obtained in Social Science and Mathematics is more than that in Science and Hindi. (Hint: Just study the central angles).</div>
      
      <div style="text-align:center;">
        <div class="math-svg">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="white" stroke="#000" stroke-width="1.5"/>
            <path d="M100,100 L100,20 A80,80 0 0,1 180,100 Z" fill="#E3F2FD" stroke="#000"/>
            <text x="120" y="60" font-size="10">Mathematics 90°</text>
            <path d="M100,100 L180,100 A80,80 0 0,1 156,156 Z" fill="#BBDEFB" stroke="#000"/>
            <text x="135" y="130" font-size="9">S.Science 65°</text>
            <path d="M100,100 L156,156 A80,80 0 0,1 75,176 Z" fill="#90CAF9" stroke="#000"/>
            <text x="115" y="170" font-size="9">Science 80°</text>
            <path d="M100,100 L75,176 A80,80 0 0,1 24,124 Z" fill="#64B5F6" stroke="#000"/>
            <text x="40" y="160" font-size="9">Hindi 70°</text>
            <path d="M100,100 L24,124 A80,80 0 0,1 100,20 Z" fill="#42A5F5" stroke="#000"/>
            <text x="40" y="70" font-size="9">English 55°</text>
          </svg>
        </div>
      </div>
      
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        Total marks = 540. Total central angle = 360°.<br/><br/>
        <span class="step-label">(i)</span> Central angle for 105 marks = (<span class='frac'><span class='num'>105</span><span class='den'>540</span></span>) × 360° = <span class="ans-highlight">70°</span>.<br/>
        From the pie chart, the angle 70° corresponds to <span class="ans-highlight">Hindi</span>. So, the student scored 105 marks in Hindi.<br/><br/>
        
        <span class="step-label">(ii)</span> Central angle for Mathematics = 90°.<br/>
        Marks in Mathematics = (90° / 360°) × 540 = 135.<br/>
        Marks in Hindi = 105.<br/>
        Difference = 135 - 105 = <span class="ans-highlight">30 marks</span>.<br/>
        Thus, the student obtained 30 more marks in Mathematics than in Hindi.<br/><br/>
        
        <span class="step-label">(iii)</span> Sum of central angles of Social Science and Mathematics = 65° + 90° = <span class="ans-highlight">155°</span>.<br/>
        Sum of central angles of Science and Hindi = 80° + 70° = <span class="ans-highlight">150°</span>.<br/>
        Since 155° > 150°, <span class="ans-highlight">Yes</span>, the sum of marks in Social Science and Mathematics is more than that in Science and Hindi.
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. The number of students in a hostel, speaking different languages is given below. Display the data in a pie chart.</div>
      <table class="data-table">
        <tr><th>Language</th><th>Number of students</th></tr>
        <tr><td>Hindi</td><td>40</td></tr>
        <tr><td>English</td><td>12</td></tr>
        <tr><td>Marathi</td><td>9</td></tr>
        <tr><td>Tamil</td><td>7</td></tr>
        <tr><td>Bengali</td><td>4</td></tr>
        <tr><td><b>Total</b></td><td><b>72</b></td></tr>
      </table>
      
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        Total number of students = 72.<br/>
        Central angle = (Number of <span class='frac'><span class='num'>students</span><span class='den'>72</span></span>) × 360°<br/>
        - Hindi: (<span class='frac'><span class='num'>40</span><span class='den'>72</span></span>) × 360° = <span class="ans-highlight">200°</span><br/>
        - English: (<span class='frac'><span class='num'>12</span><span class='den'>72</span></span>) × 360° = <span class="ans-highlight">60°</span><br/>
        - Marathi: (<span class='frac'><span class='num'>9</span><span class='den'>72</span></span>) × 360° = <span class="ans-highlight">45°</span><br/>
        - Tamil: (<span class='frac'><span class='num'>7</span><span class='den'>72</span></span>) × 360° = <span class="ans-highlight">35°</span><br/>
        - Bengali: (<span class='frac'><span class='num'>4</span><span class='den'>72</span></span>) × 360° = <span class="ans-highlight">20°</span><br/><br/>
        
        <div style="text-align:center;">
          <div class="math-svg">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="70" fill="white" stroke="#000" stroke-width="1.5"/>
              <!-- Hindi 200° -->
              <path d="M90,90 L90,20 A70,70 0 1,1 66,155 Z" fill="#E3F2FD" stroke="#000"/>
              <text x="120" y="100" font-size="11" font-weight="bold">Hindi</text>
              <!-- English 60° -->
              <path d="M90,90 L66,155 A70,70 0 0,1 29,125 Z" fill="#90CAF9" stroke="#000"/>
              <text x="35" y="150" font-size="9">English</text>
              <!-- Marathi 45° -->
              <path d="M90,90 L29,125 A70,70 0 0,1 20,90 Z" fill="#64B5F6" stroke="#000"/>
              <text x="10" y="115" font-size="8">Marathi</text>
              <!-- Tamil 35° -->
              <path d="M90,90 L20,90 A70,70 0 0,1 30,53 Z" fill="#42A5F5" stroke="#000"/>
              <text x="15" y="75" font-size="8">Tamil</text>
              <!-- Bengali 20° -->
              <path d="M90,90 L30,53 A70,70 0 0,1 55,29 Z" fill="#2196F3" stroke="#000"/>
              <text x="35" y="45" font-size="7">Bengali</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const ex42Content = `
  <style>
    .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
    .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
    .frac .den { padding: 0 2px; }
    .ex-container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
    .q-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
    .q-text { color: #2196F3; font-weight: 600; margin-bottom: 12px; text-align: justify; }
    .q-subtext { color: #e0e0e0; margin-bottom: 10px; margin-left: 10px; }
    .sol-box { border-left: 3px solid #2196F3; padding-left: 15px; margin-top: 15px; background: rgba(33, 150, 243, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; }
    .ans-highlight { color: #2196F3; font-weight: 700; }
    .step-label { color: #64B5F6; font-weight: 600; margin-right: 5px; }
    .math-svg { background: white; padding: 10px; border-radius: 12px; margin: 15px 0; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
      .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>
  <div class="ex-container">
    <div class="q-card">
      <div class="q-text">1. List the outcomes you can see in these experiments.</div>
      <div class="q-subtext">(a) Spinning a wheel</div>
      <div class="q-subtext">(b) Tossing two coins together</div>
      
      <div style="display:flex; justify-content:space-around; margin:15px 0;">
        <div class="math-svg" style="width:120px;">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="white" stroke="#000" stroke-width="2"/>
            <path d="M50,50 L50,5 A45,45 0 0,1 93,36 Z" fill="none" stroke="#000"/>
            <path d="M50,50 L93,36 A45,45 0 0,1 76,86 Z" fill="none" stroke="#000"/>
            <path d="M50,50 L76,86 A45,45 0 0,1 24,86 Z" fill="none" stroke="#000"/>
            <path d="M50,50 L24,86 A45,45 0 0,1 7,36 Z" fill="none" stroke="#000"/>
            <path d="M50,50 L7,36 A45,45 0 0,1 50,5 Z" fill="none" stroke="#000"/>
            <line x1="50" y1="50" x2="65" y2="30" stroke="#F44336" stroke-width="2"/>
            <text x="30" y="30" font-size="12" font-weight="bold">A</text>
            <text x="25" y="65" font-size="12" font-weight="bold">A</text>
            <text x="60" y="80" font-size="12" font-weight="bold">D</text>
            <text x="80" y="60" font-size="12" font-weight="bold">C</text>
            <text x="70" y="30" font-size="12" font-weight="bold">B</text>
          </svg>
        </div>
      </div>
      
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        <span class="step-label">(a)</span> The outcomes of spinning the given wheel are the letters on the sectors: <span class="ans-highlight">A, B, C, and D</span>.<br/>
        <span class="step-label">(b)</span> When tossing two coins together, the possible outcomes are Head-Head, Head-Tail, Tail-Head, and Tail-Tail. So, outcomes are <span class="ans-highlight">HH, HT, TH, TT</span>.
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">2. When a die is thrown, list the outcomes of an event of getting</div>
      <div class="q-subtext">(i) (a) a prime number (b) not a prime number.</div>
      <div class="q-subtext">(ii) (a) a number greater than 5 (b) a number not greater than 5.</div>
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        When a die is thrown, the possible outcomes are {1, 2, 3, 4, 5, 6}.<br/>
        <span class="step-label">(i)(a)</span> Prime numbers are 2, 3, and 5. Outcomes: <span class="ans-highlight">{2, 3, 5}</span>.<br/>
        <span class="step-label">(i)(b)</span> Numbers which are not prime are 1, 4, and 6. Outcomes: <span class="ans-highlight">{1, 4, 6}</span>.<br/>
        <span class="step-label">(ii)(a)</span> The only number greater than 5 is 6. Outcome: <span class="ans-highlight">{6}</span>.<br/>
        <span class="step-label">(ii)(b)</span> Numbers not greater than 5 are 1, 2, 3, 4, and 5. Outcomes: <span class="ans-highlight">{1, 2, 3, 4, 5}</span>.
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">3. Find the.</div>
      <div class="q-subtext">(a) Probability of the pointer stopping on D in Question 1 (a) ?</div>
      <div class="q-subtext">(b) Probability of getting an ace from a well shuffled deck of 52 playing cards?</div>
      <div class="q-subtext">(c) Probability of getting a red apple. (See given figure)</div>
      
      <div style="text-align:center;">
        <div class="math-svg">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="55" fill="none" stroke="#333" stroke-width="2"/>
            <circle cx="45" cy="40" r="12" fill="white" stroke="#333" stroke-width="1.5"/><text x="40" y="44" font-size="12" font-weight="bold">G</text>
            <circle cx="75" cy="40" r="12" fill="white" stroke="#333" stroke-width="1.5"/><text x="70" y="44" font-size="12" font-weight="bold">R</text>
            <circle cx="95" cy="60" r="12" fill="white" stroke="#333" stroke-width="1.5"/><text x="90" y="64" font-size="12" font-weight="bold">R</text>
            <circle cx="45" cy="70" r="12" fill="white" stroke="#333" stroke-width="1.5"/><text x="40" y="74" font-size="12" font-weight="bold">R</text>
            <circle cx="65" cy="75" r="12" fill="white" stroke="#333" stroke-width="1.5"/><text x="60" y="79" font-size="12" font-weight="bold">G</text>
            <circle cx="25" cy="60" r="12" fill="white" stroke="#333" stroke-width="1.5"/><text x="20" y="64" font-size="12" font-weight="bold">R</text>
            <circle cx="60" cy="100" r="12" fill="white" stroke="#333" stroke-width="1.5"/><text x="55" y="104" font-size="12" font-weight="bold">G</text>
          </svg>
        </div>
      </div>
      
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        <span class="step-label">(a)</span> In the spinning wheel of Q1(a), there are 5 sectors (A, A, B, C, D). The pointer stopping on D is 1 favourable outcome. Total outcomes = 5.<br/>
        Probability = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>5</span></span></span>.<br/><br/>
        <span class="step-label">(b)</span> There are 4 aces in a deck of 52 cards. Favourable outcomes = 4. Total outcomes = 52.<br/>
        Probability = <span class='frac'><span class='num'>4</span><span class='den'>52</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>13</span></span></span>.<br/><br/>
        <span class="step-label">(c)</span> Total apples = 7. Red apples = 4. Favourable outcomes = 4. Total outcomes = 7.<br/>
        Probability = <span class="ans-highlight"><span class='frac'><span class='num'>4</span><span class='den'>7</span></span></span>.
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">4. Numbers 1 to 10 are written on ten separate slips (one number on one slip), kept in a box and mixed well. One slip is chosen from the box without looking into it. What is the probability of.</div>
      <div class="q-subtext">(i) getting a number 6?</div>
      <div class="q-subtext">(ii) getting a number less than 6?</div>
      <div class="q-subtext">(iii) getting a number greater than 6?</div>
      <div class="q-subtext">(iv) getting a 1-digit number?</div>
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        Total slips (outcomes) = 10 (which are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10).<br/><br/>
        <span class="step-label">(i)</span> Number 6 appears only 1 time. Favourable outcomes = 1.<br/>
        P(getting number 6) = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>10</span></span></span>.<br/><br/>
        <span class="step-label">(ii)</span> Numbers less than 6 are {1, 2, 3, 4, 5}. Favourable outcomes = 5.<br/>
        P(getting a number less than 6) = <span class='frac'><span class='num'>5</span><span class='den'>10</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>2</span></span></span>.<br/><br/>
        <span class="step-label">(iii)</span> Numbers greater than 6 are {7, 8, 9, 10}. Favourable outcomes = 4.<br/>
        P(getting a number greater than 6) = <span class='frac'><span class='num'>4</span><span class='den'>10</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>2</span><span class='den'>5</span></span></span>.<br/><br/>
        <span class="step-label">(iv)</span> 1-digit numbers are {1, 2, 3, 4, 5, 6, 7, 8, 9}. Favourable outcomes = 9.<br/>
        P(getting a 1-digit number) = <span class="ans-highlight"><span class='frac'><span class='num'>9</span><span class='den'>10</span></span></span>.
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">5. If you have a spinning wheel with 3 green sectors, 1 blue sector and 1 red sector, what is the probability of getting a green sector? What is the probability of getting a non blue sector?</div>
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        Total number of sectors = 3 (Green) + 1 (Blue) + 1 (Red) = 5.<br/><br/>
        - Number of green sectors = 3.<br/>
        P(getting a green sector) = <span class="ans-highlight"><span class='frac'><span class='num'>3</span><span class='den'>5</span></span></span>.<br/><br/>
        - Number of non-blue sectors = 3 (Green) + 1 (Red) = 4.<br/>
        P(getting a non-blue sector) = <span class="ans-highlight"><span class='frac'><span class='num'>4</span><span class='den'>5</span></span></span>.
      </div>
    </div>

    <div class="q-card">
      <div class="q-text">6. Find the probabilities of the events given in Question 2.</div>
      <div class="sol-box">
        <span class="step-label">Solution:</span><br/>
        Total outcomes when throwing a die = 6 ({1, 2, 3, 4, 5, 6}).<br/><br/>
        <span class="step-label">(i)(a)</span> Prime numbers are {2, 3, 5}. Favourable outcomes = 3.<br/>
        P(prime number) = <span class='frac'><span class='num'>3</span><span class='den'>6</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>2</span></span></span>.<br/><br/>
        <span class="step-label">(i)(b)</span> Non-prime numbers are {1, 4, 6}. Favourable outcomes = 3.<br/>
        P(not a prime number) = <span class='frac'><span class='num'>3</span><span class='den'>6</span></span> = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>2</span></span></span>.<br/><br/>
        <span class="step-label">(ii)(a)</span> Number greater than 5 is {6}. Favourable outcomes = 1.<br/>
        P(number greater than 5) = <span class="ans-highlight"><span class='frac'><span class='num'>1</span><span class='den'>6</span></span></span>.<br/><br/>
        <span class="step-label">(ii)(b)</span> Numbers not greater than 5 are {1, 2, 3, 4, 5}. Favourable outcomes = 5.<br/>
        P(number not greater than 5) = <span class="ans-highlight"><span class='frac'><span class='num'>5</span><span class='den'>6</span></span></span>.
      </div>
    </div>
  </div>
`;

export const c8Math4: ChapterContent = {
  id: "c8-math-4",
  number: 4,
  title: "Data Handling",
  introduction: "In this chapter, we explore tools like Frequency Distribution Tables, Pie Charts, and Probability.",
  mcqs: [
    { id: "m1", question: "Central angle formula:", options: ["(<span class='frac'><span class='num'>Value</span><span class='den'>Total</span></span>)x360°", "(<span class='frac'><span class='num'>Value</span><span class='den'>Total</span></span>)x180°", "Value x 360°", "<span class='frac'><span class='num'>Total</span><span class='den'>Value</span></span>"], correctAnswer: "(<span class='frac'><span class='num'>Value</span><span class='den'>Total</span></span>)x360°" },
    { id: "m2", question: "Sum of angles in pie chart:", options: ["180°", "360°", "90°", "270°"], correctAnswer: "360°" },
    { id: "m3", question: "P(Impossible event):", options: ["1", "0", "0.5", "2"], correctAnswer: "0" },
    { id: "m4", question: "P(Sure event):", options: ["0", "1", "0.5", "100"], correctAnswer: "1" },
    { id: "m5", question: "Die faces are:", options: ["4", "6", "8", "12"], correctAnswer: "6" },
    { id: "m6", question: "Outcome of tossing 1 coin:", options: ["1", "2", "3", "4"], correctAnswer: "2" },
    { id: "m7", question: "P(Head) in coin toss:", options: ["1", "0", "<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>", "<span class='frac'><span class='num'>1</span><span class='den'>4</span></span>"], correctAnswer: "<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>" },
    { id: "m8", question: "Range = Max value - ?", options: ["Min value", "Total", "Mean", "Median"], correctAnswer: "Min value" },
    { id: "m9", question: "Tally marks are in groups of:", options: ["4", "5", "10", "2"], correctAnswer: "5" },
    { id: "m10", question: "P(Even number) in die:", options: ["<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>", "<span class='frac'><span class='num'>1</span><span class='den'>3</span></span>", "<span class='frac'><span class='num'>1</span><span class='den'>6</span></span>", "1"], correctAnswer: "<span class='frac'><span class='num'>1</span><span class='den'>2</span></span>" }
  ],
  summary: ["Pie charts represent relationship of parts to a whole.", "Probability = Fav <span class='frac'><span class='num'>outcomes</span><span class='den'>Total</span></span> outcomes."],
  exercises: [
    { id: "ex4-1", name: "Exercise 4.1", questions: [] },
    { id: "ex4-2", name: "Exercise 4.2", questions: [] }
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
        color: #2196F3;
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
        color: #64B5F6;
        font-weight: 700;
      }

      .highlight { color: #64B5F6; font-weight: 600; }
      
      .intro-text {
        line-height: 1.6;
        font-size: 16px;
        color: #e0e0e0;
        text-align: justify;
      }

      .formula-badge {
        background: rgba(33, 150, 243, 0.2);
        border: 1px dashed #2196F3;
        padding: 10px;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
        color: #90CAF9;
      }
        .q-text, .q-subtext, .sol-step, .sol-box { font-size: 16px; }
  </style>

    <div class="premium-container">
      <div class="section-box">
        <div class="section-header"><span>✦</span> Introduction</div>
        <div class="intro-text">
          Data mostly is available to us in an unorganised form, called <strong>Raw Data</strong>. In order to draw meaningful inferences from any data, we need to organise the data systematically. In this chapter, we explore tools like Frequency Distribution Tables, Pie Charts, and Probability to handle data effectively.
        </div>
      </div>

      <div class="section-box">
        <div class="section-header"><span>✦</span> Key Concepts & Formulas</div>
        <table class="prop-table">
          <tr>
            <th>Concept</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><strong>Circle <span class='frac'><span class='num'>Graph</span><span class='den'>Pie</span></span> Chart</strong></td>
            <td>
              Shows the relationship between a whole and its parts.<br/>
              The whole circle is divided into sectors. The size of each sector is proportional to the activity or information it represents.
              <div class="formula-badge">Angle = (<span class='frac'><span class='num'>Value</span><span class='den'>Total</span></span>) × 360°</div>
            </td>
          </tr>
          <tr>
            <td><strong>Probability</strong></td>
            <td>
              The chance of an event happening.<br/>
              An event that has many possibilities can have outcomes that are equally likely to happen.
              <div class="formula-badge">Prob = (Favourable Outcomes) / (Total Outcomes)</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex4-1": ex41Content,
    "ex4-2": ex42Content
  }
};
