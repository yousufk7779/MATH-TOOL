import { ChapterContent } from "../chapterContent";

export const c9Math11: ChapterContent = {
  id: "c9-math-11",
  number: 11,
  title: "Statistics",
  introduction:
    "In this chapter, we explore the collection, presentation, analysis, and interpretation of numerical data.",
  exercises: [
    { id: "ex11.1", name: "Ex 11.1", questions: [] },
  ],
  examples: [],
  theorems: [],
  mcqs: [
    {
      id: "m1",
      question:
        "The range of the data: 25, 18, 20, 22, 16, 6, 17, 15, 12, 30, 32, 10, 19, 8, 11, 20 is:",
      options: ["10", "15", "18", "26"],
      correctAnswer: "D",
    },
    {
      id: "m2",
      question:
        "In a frequency distribution, the mid value of a class is 10 and the width of the class is 6. The lower limit of the class is:",
      options: ["6", "7", "8", "12"],
      correctAnswer: "B",
    },
    {
      id: "m3",
      question:
        "In a histogram with unequal class widths, the heights of the rectangles are taken as the:",
      options: ["Class marks", "Class widths", "Adjusted frequencies", "Upper class limits"],
      correctAnswer: "C",
    },
    {
      id: "m4",
      question:
        "Data collected by the investigator with a definite objective in mind is called:",
      options: ["Primary Data", "Secondary Data", "Raw Data", "None"],
      correctAnswer: "A",
    },
    {
      id: "m5",
      question: "The class mark of the class 90-120 is:",
      options: ["90", "105", "115", "120"],
      correctAnswer: "B",
    },
    {
      id: "m6",
      question: "The range of the data: 10, 20, 30, 40, 50 is:",
      options: ["10", "40", "50", "60"],
      correctAnswer: "B",
    },
    {
      id: "m7",
      question:
        "In a bar graph, the bars:",
      options: ["Must touch each other", "Have equal widths with equal gaps between them", "Have widths equal to the class size", "Are drawn only for continuous classes"],
      correctAnswer: "B",
    },
    {
      id: "m8",
      question:
        "In a histogram, the minimum class width is 2. The class 6 – 10 has frequency 16. The adjusted frequency (height of its rectangle) is:",
      options: ["4", "8", "16", "32"],
      correctAnswer: "B",
    },
    {
      id: "m9",
      question:
        "In a frequency polygon, the frequencies are plotted against the:",
      options: ["Upper class limits", "Lower class limits", "Class marks", "Class widths"],
      correctAnswer: "C",
    },
    {
      id: "m10",
      question: "The mid-point of a class interval is called:",
      options: ["Class limit", "Class mark", "Class size", "Range"],
      correctAnswer: "B",
    },
  ],
  summary: [
    "Statistics deals with the collection, organization, analysis, and interpretation of data.",
    "Data can be presented in the form of frequency distribution tables, bar graphs, histograms, and frequency polygons.",
    "Measures of central tendency include Mean, Median, and Mode.",
  ],

  isHtmlView: true,
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4DA6; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4DA6; padding-left: 15px; margin-top: 15px; background: rgba(255, 77, 166, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4DA6 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4DA6 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 77, 166, 0.05) !important; border-left: 4px solid #FF4DA6 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4DA6 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4DA6 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4DA6 !important; font-weight: 700; }
        strong { color: #FF4DA6 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4DA6; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 77, 166, 0.05); color: #FF4DA6; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<!DOCTYPE html>
<html lang="en">
<head>
    
</head>
<body>
    <div class="content-box">

        <div class="step">Statistics is the branch of mathematics that deals with the <b>collection</b>, <b>presentation</b>, <b>analysis</b>, and <b>interpretation</b> of numerical data.</div>
        
        <div class="step"><b>1. Collection of Data:</b></div>
        <div class="step">Data collected by the investigator himself/herself with a definite objective in mind is called <b>Primary Data</b>. Data collected from a source which already had the information is called <b>Secondary Data</b>.</div>

        <div class="step"><b>2. Graphical Representation:</b></div>
        <div class="step">Data can be visualized using <b>Bar Graphs</b>, <b>Histograms</b> (for continuous classes), and <b>Frequency Polygons</b>.</div>
    </div>
</body>
</html>
`,
  htmlExercises: {
    "ex11.1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FF4DA6; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FF4DA6; padding-left: 15px; margin-top: 15px; background: rgba(255, 77, 166, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FF4DA6 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FF4DA6 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 77, 166, 0.05) !important; border-left: 4px solid #FF4DA6 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FF4DA6 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FF4DA6 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FF4DA6 !important; font-weight: 700; }
        strong { color: #FF4DA6 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FF4DA6; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 77, 166, 0.05); color: #FF4DA6; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="question">1. A survey conducted by an organisation for the cause of illness and death among the women between the ages 15 - 44 (in years) worldwide, found the following figures (in %):</div>
        <table style="font-size:14px"><tr><th>No.</th><th>Causes</th><th>Female fatality rate (%)</th></tr><tr><td>1.</td><td>Reproductive health conditions</td><td>31.8</td></tr><tr><td>2.</td><td>Neuropsychiatric conditions</td><td>25.4</td></tr><tr><td>3.</td><td>Injuries</td><td>12.4</td></tr><tr><td>4.</td><td>Cardiovascular conditions</td><td>4.3</td></tr><tr><td>5.</td><td>Respiratory Conditions</td><td>4.1</td></tr><tr><td>6.</td><td>Other causes</td><td>22.0</td></tr></table>
        <div class="question" style="margin-top:6px">(i) Represent the information given above graphically.<br/>(ii) Which condition is the major cause of women's ill health and death worldwide?<br/>(iii) Try to find out, with the help of your teacher, any two factors which play a major role in the cause in (ii) above being the major cause.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) Bar graph: causes on the x-axis (labels slanted), female fatality rate (%) on the y-axis.<br/>
          <svg viewBox="0 0 320 272" class="ex-img">
            <text x="176" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Female fatality rate by cause</text>
            <line x1="44" y1="190" x2="308" y2="190" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="44" y1="166.29" x2="308" y2="166.29" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="169.79" font-size="9" fill="white" text-anchor="end">5</text>
            <line x1="44" y1="142.57" x2="308" y2="142.57" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="146.07" font-size="9" fill="white" text-anchor="end">10</text>
            <line x1="44" y1="118.86" x2="308" y2="118.86" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="122.36" font-size="9" fill="white" text-anchor="end">15</text>
            <line x1="44" y1="95.14" x2="308" y2="95.14" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="98.64" font-size="9" fill="white" text-anchor="end">20</text>
            <line x1="44" y1="71.43" x2="308" y2="71.43" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="74.93" font-size="9" fill="white" text-anchor="end">25</text>
            <line x1="44" y1="47.71" x2="308" y2="47.71" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="51.21" font-size="9" fill="white" text-anchor="end">30</text>
            <line x1="44" y1="24" x2="308" y2="24" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="27.5" font-size="9" fill="white" text-anchor="end">35</text>
            <line x1="44" y1="18" x2="44" y2="190" stroke="white" stroke-width="1.2"/>
            <line x1="44" y1="190" x2="308" y2="190" stroke="white" stroke-width="1.2"/>
            <rect x="52.8" y="39.18" width="26.4" height="150.82" fill="#00E5FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="69" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 69 201)">Reproductive</text>
            <text x="66" y="35.18" font-size="9" fill="#00E5FF" text-anchor="middle">31.8</text>
            <rect x="96.8" y="69.53" width="26.4" height="120.47" fill="#FF2E97" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="113" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 113 201)">Neuropsychiatric</text>
            <text x="110" y="65.53" font-size="9" fill="#FF2E97" text-anchor="middle">25.4</text>
            <rect x="140.8" y="131.19" width="26.4" height="58.81" fill="#00E676" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="157" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 157 201)">Injuries</text>
            <text x="154" y="127.19" font-size="9" fill="#00E676" text-anchor="middle">12.4</text>
            <rect x="184.8" y="169.61" width="26.4" height="20.39" fill="#FFC400" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="201" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 201 201)">Cardiovascular</text>
            <text x="198" y="165.61" font-size="9" fill="#FFC400" text-anchor="middle">4.3</text>
            <rect x="228.8" y="170.55" width="26.4" height="19.45" fill="#B388FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="245" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 245 201)">Respiratory</text>
            <text x="242" y="166.55" font-size="9" fill="#B388FF" text-anchor="middle">4.1</text>
            <rect x="272.8" y="85.66" width="26.4" height="104.34" fill="#FF7043" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="289" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 289 201)">Other causes</text>
            <text x="286" y="81.66" font-size="9" fill="#FF7043" text-anchor="middle">22.0</text>
            <text x="176" y="267" font-size="9.5" fill="white" text-anchor="middle">Causes</text>
            <text x="11" y="107" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 107)">Female fatality rate (%)</text>
          </svg>
          (ii) The longest bar is 31.8%: reproductive health conditions.<br/>
          (iii) Two factors: (a) lack of proper medical care and facilities; (b) lack of awareness and education about women's health.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(ii) Reproductive health conditions (31.8%) (iii) Lack of medical facilities; lack of awareness and education</span></div>
        </div>

        <div class="question">2. The following data on the number of girls (to the nearest ten) per thousand boys in different sections of Indian society is given below.</div>
        <table style="font-size:14px"><tr><th>Section</th><th>Number of girls per thousand boys</th></tr><tr><td>Scheduled Caste (SC)</td><td>940</td></tr><tr><td>Scheduled Tribe (ST)</td><td>970</td></tr><tr><td>Non SC/ST</td><td>920</td></tr><tr><td>Backward districts</td><td>950</td></tr><tr><td>Non-backward districts</td><td>920</td></tr><tr><td>Rural</td><td>930</td></tr><tr><td>Urban</td><td>910</td></tr></table>
        <div class="question" style="margin-top:6px">(i) Represent the information above by a bar graph.<br/>(ii) In the classroom discuss what conclusions can be arrived at from the graph.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) Bar graph: sections on the x-axis (labels slanted), girls per thousand boys on the y-axis. The y-axis starts at 880 after the zig-zag break so that the differences are clear.<br/>
          <svg viewBox="0 0 320 272" class="ex-img">
            <text x="176" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Girls per thousand boys</text>
            <line x1="44" y1="174" x2="308" y2="174" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="177.5" font-size="9" fill="white" text-anchor="end">880</text>
            <line x1="44" y1="144" x2="308" y2="144" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="147.5" font-size="9" fill="white" text-anchor="end">900</text>
            <line x1="44" y1="114" x2="308" y2="114" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="117.5" font-size="9" fill="white" text-anchor="end">920</text>
            <line x1="44" y1="84" x2="308" y2="84" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="87.5" font-size="9" fill="white" text-anchor="end">940</text>
            <line x1="44" y1="54" x2="308" y2="54" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="57.5" font-size="9" fill="white" text-anchor="end">960</text>
            <line x1="44" y1="24" x2="308" y2="24" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="27.5" font-size="9" fill="white" text-anchor="end">980</text>
            <text x="39" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="44" y1="18" x2="44" y2="174" stroke="white" stroke-width="1.2"/>
            <path d="M44,190 L44,187 L40,184 L48,180 L40,176 L44,174" fill="none" stroke="white" stroke-width="1.2"/>
            <line x1="44" y1="190" x2="308" y2="190" stroke="white" stroke-width="1.2"/>
            <rect x="51.54" y="84" width="22.63" height="106" fill="#00E5FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="65.86" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 65.86 201)">SC</text>
            <text x="62.86" y="80" font-size="9" fill="#00E5FF" text-anchor="middle">940</text>
            <rect x="89.26" y="39" width="22.63" height="151" fill="#FF2E97" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="103.57" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 103.57 201)">ST</text>
            <text x="100.57" y="35" font-size="9" fill="#FF2E97" text-anchor="middle">970</text>
            <rect x="126.97" y="114" width="22.63" height="76" fill="#00E676" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="141.29" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 141.29 201)">Non SC/ST</text>
            <text x="138.29" y="110" font-size="9" fill="#00E676" text-anchor="middle">920</text>
            <rect x="164.69" y="69" width="22.63" height="121" fill="#FFC400" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="179" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 179 201)">Backward</text>
            <text x="176" y="65" font-size="9" fill="#FFC400" text-anchor="middle">950</text>
            <rect x="202.4" y="114" width="22.63" height="76" fill="#B388FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="216.71" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 216.71 201)">Non-backward</text>
            <text x="213.71" y="110" font-size="9" fill="#B388FF" text-anchor="middle">920</text>
            <rect x="240.11" y="99" width="22.63" height="91" fill="#FF7043" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="254.43" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 254.43 201)">Rural</text>
            <text x="251.43" y="95" font-size="9" fill="#FF7043" text-anchor="middle">930</text>
            <rect x="277.83" y="129" width="22.63" height="61" fill="#40C4FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="292.14" y="201" font-size="9.5" fill="white" text-anchor="end" transform="rotate(-40 292.14 201)">Urban</text>
            <text x="289.14" y="125" font-size="9" fill="#40C4FF" text-anchor="middle">910</text>
            <text x="176" y="267" font-size="9.5" fill="white" text-anchor="middle">Section</text>
            <text x="11" y="107" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 107)">Girls per thousand boys</text>
          </svg>
          (ii) Conclusions:<br/>
          • ST has the most girls (970) and Urban the fewest (910) per thousand boys.<br/>
          • Backward districts (950) and Rural areas (930) have more girls than Non-backward districts (920) and Urban areas (910).<br/>
          • Every section has fewer than 1000 girls per thousand boys.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(ii) Highest: ST (970); lowest: Urban (910); every section has fewer girls than boys</span></div>
        </div>

        <div class="question">3. Given below are the seats won by different political parties in the polling outcome of a state assembly elections:</div>
        <table style="font-size:14px"><tr><th>Political Party</th><th>Seats Won</th></tr><tr><td>A</td><td>75</td></tr><tr><td>B</td><td>55</td></tr><tr><td>C</td><td>37</td></tr><tr><td>D</td><td>29</td></tr><tr><td>E</td><td>10</td></tr><tr><td>F</td><td>37</td></tr></table>
        <div class="question" style="margin-top:6px">(i) Draw a bar graph to represent the polling results.<br/>(ii) Which political party won the maximum number of seats?</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) Bar graph: parties on the x-axis, seats won on the y-axis (1 unit = 10 seats).<br/>
          <svg viewBox="0 0 320 232" class="ex-img">
            <text x="176" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Seats won by political parties</text>
            <line x1="44" y1="190" x2="308" y2="190" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="44" y1="169.25" x2="308" y2="169.25" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="172.75" font-size="9" fill="white" text-anchor="end">10</text>
            <line x1="44" y1="148.5" x2="308" y2="148.5" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="152" font-size="9" fill="white" text-anchor="end">20</text>
            <line x1="44" y1="127.75" x2="308" y2="127.75" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="131.25" font-size="9" fill="white" text-anchor="end">30</text>
            <line x1="44" y1="107" x2="308" y2="107" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="110.5" font-size="9" fill="white" text-anchor="end">40</text>
            <line x1="44" y1="86.25" x2="308" y2="86.25" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="89.75" font-size="9" fill="white" text-anchor="end">50</text>
            <line x1="44" y1="65.5" x2="308" y2="65.5" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="69" font-size="9" fill="white" text-anchor="end">60</text>
            <line x1="44" y1="44.75" x2="308" y2="44.75" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="48.25" font-size="9" fill="white" text-anchor="end">70</text>
            <line x1="44" y1="24" x2="308" y2="24" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="39" y="27.5" font-size="9" fill="white" text-anchor="end">80</text>
            <line x1="44" y1="18" x2="44" y2="190" stroke="white" stroke-width="1.2"/>
            <line x1="44" y1="190" x2="308" y2="190" stroke="white" stroke-width="1.2"/>
            <rect x="52.8" y="34.38" width="26.4" height="155.63" fill="#00E5FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="66" y="203" font-size="10" fill="white" text-anchor="middle">A</text>
            <text x="66" y="30.38" font-size="9" fill="#00E5FF" text-anchor="middle">75</text>
            <rect x="96.8" y="75.87" width="26.4" height="114.13" fill="#FF2E97" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="110" y="203" font-size="10" fill="white" text-anchor="middle">B</text>
            <text x="110" y="71.87" font-size="9" fill="#FF2E97" text-anchor="middle">55</text>
            <rect x="140.8" y="113.23" width="26.4" height="76.78" fill="#00E676" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="154" y="203" font-size="10" fill="white" text-anchor="middle">C</text>
            <text x="154" y="109.23" font-size="9" fill="#00E676" text-anchor="middle">37</text>
            <rect x="184.8" y="129.82" width="26.4" height="60.18" fill="#FFC400" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="198" y="203" font-size="10" fill="white" text-anchor="middle">D</text>
            <text x="198" y="125.82" font-size="9" fill="#FFC400" text-anchor="middle">29</text>
            <rect x="228.8" y="169.25" width="26.4" height="20.75" fill="#B388FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="242" y="203" font-size="10" fill="white" text-anchor="middle">E</text>
            <text x="242" y="165.25" font-size="9" fill="#B388FF" text-anchor="middle">10</text>
            <rect x="272.8" y="113.23" width="26.4" height="76.78" fill="#FF7043" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="286" y="203" font-size="10" fill="white" text-anchor="middle">F</text>
            <text x="286" y="109.23" font-size="9" fill="#FF7043" text-anchor="middle">37</text>
            <text x="176" y="227" font-size="9.5" fill="white" text-anchor="middle">Political party</text>
            <text x="11" y="107" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 107)">Seats won</text>
          </svg>
          (ii) The tallest bar is A, with 75 seats.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(ii) Party A won the maximum number of seats (75)</span></div>
        </div>

        <div class="question">4. The length of 40 leaves of a plant are measured correct to one millimetre, and the obtained data is represented in the following table:</div>
        <table style="font-size:14px"><tr><th>Length (in mm)</th><th>Number of leaves</th></tr><tr><td>118 – 126</td><td>3</td></tr><tr><td>127 – 135</td><td>5</td></tr><tr><td>136 – 144</td><td>9</td></tr><tr><td>145 – 153</td><td>12</td></tr><tr><td>154 – 162</td><td>5</td></tr><tr><td>163 – 171</td><td>4</td></tr><tr><td>172 – 180</td><td>2</td></tr></table>
        <div class="question" style="margin-top:6px">(i) Draw a histogram to represent the given data. [Hint: First make the class intervals continuous]<br/>(ii) Is there any other suitable graphical representation for the same data?<br/>(iii) Is it correct to conclude that the maximum number of leaves are 153 mm long? Why?</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) Gap between classes = 127 − 126 = 1, so subtract 0.5 from each lower limit and add 0.5 to each upper limit:<br/>
          <table style="font-size:14px"><tr><th>Length (in mm)</th><th>Number of leaves</th></tr><tr><td>117.5 – 126.5</td><td>3</td></tr><tr><td>126.5 – 135.5</td><td>5</td></tr><tr><td>135.5 – 144.5</td><td>9</td></tr><tr><td>144.5 – 153.5</td><td>12</td></tr><tr><td>153.5 – 162.5</td><td>5</td></tr><tr><td>162.5 – 171.5</td><td>4</td></tr><tr><td>171.5 – 180.5</td><td>2</td></tr></table>
          <svg viewBox="0 0 320 233" class="ex-img">
            <text x="173.5" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Length of 40 leaves</text>
            <line x1="42" y1="190" x2="305" y2="190" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="42" y1="166" x2="305" y2="166" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="169.5" font-size="9" fill="white" text-anchor="end">2</text>
            <line x1="42" y1="142" x2="305" y2="142" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="145.5" font-size="9" fill="white" text-anchor="end">4</text>
            <line x1="42" y1="118" x2="305" y2="118" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="121.5" font-size="9" fill="white" text-anchor="end">6</text>
            <line x1="42" y1="94" x2="305" y2="94" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="97.5" font-size="9" fill="white" text-anchor="end">8</text>
            <line x1="42" y1="70" x2="305" y2="70" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="73.5" font-size="9" fill="white" text-anchor="end">10</text>
            <line x1="42" y1="46" x2="305" y2="46" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="49.5" font-size="9" fill="white" text-anchor="end">12</text>
            <line x1="42" y1="22" x2="305" y2="22" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="25.5" font-size="9" fill="white" text-anchor="end">14</text>
            <line x1="42" y1="16" x2="42" y2="190" stroke="white" stroke-width="1.2"/>
            <line x1="42" y1="190" x2="305" y2="190" stroke="white" stroke-width="1.2"/>
            <path d="M42,190 L45,186 L49,194 L52,190" fill="none" stroke="white" stroke-width="1.2"/>
            <rect x="52" y="154" width="36.14" height="36" fill="#00E5FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="70.07" y="150" font-size="9" fill="#00E5FF" text-anchor="middle">3</text>
            <rect x="88.14" y="130" width="36.14" height="60" fill="#FF2E97" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="106.21" y="126" font-size="9" fill="#FF2E97" text-anchor="middle">5</text>
            <rect x="124.29" y="82" width="36.14" height="108" fill="#00E676" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="142.36" y="78" font-size="9" fill="#00E676" text-anchor="middle">9</text>
            <rect x="160.43" y="46" width="36.14" height="144" fill="#FFC400" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="178.5" y="42" font-size="9" fill="#FFC400" text-anchor="middle">12</text>
            <rect x="196.57" y="130" width="36.14" height="60" fill="#B388FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="214.64" y="126" font-size="9" fill="#B388FF" text-anchor="middle">5</text>
            <rect x="232.71" y="142" width="36.14" height="48" fill="#FF7043" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="250.79" y="138" font-size="9" fill="#FF7043" text-anchor="middle">4</text>
            <rect x="268.86" y="166" width="36.14" height="24" fill="#40C4FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="286.93" y="162" font-size="9" fill="#40C4FF" text-anchor="middle">2</text>
            <text x="52" y="202" font-size="8" fill="white" text-anchor="middle">117.5</text>
            <text x="88.14" y="202" font-size="8" fill="white" text-anchor="middle">126.5</text>
            <text x="124.29" y="202" font-size="8" fill="white" text-anchor="middle">135.5</text>
            <text x="160.43" y="202" font-size="8" fill="white" text-anchor="middle">144.5</text>
            <text x="196.57" y="202" font-size="8" fill="white" text-anchor="middle">153.5</text>
            <text x="232.71" y="202" font-size="8" fill="white" text-anchor="middle">162.5</text>
            <text x="268.86" y="202" font-size="8" fill="white" text-anchor="middle">171.5</text>
            <text x="305" y="202" font-size="8" fill="white" text-anchor="middle">180.5</text>
            <text x="173.5" y="229" font-size="9.5" fill="white" text-anchor="middle">Length (in mm)</text>
            <text x="11" y="106" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 106)">Number of leaves</text>
          </svg>
          (ii) Yes, a frequency polygon.<br/>
          (iii) No. The most leaves (12) are in the class 144.5 – 153.5 mm, so their lengths lie anywhere between 144.5 mm and 153.5 mm, not exactly 153 mm.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(ii) Yes, a frequency polygon (iii) No; the 12 leaves have lengths between 144.5 mm and 153.5 mm</span></div>
        </div>

        <div class="question">5. The following table gives the life times of 400 neon lamps:</div>
        <table style="font-size:14px"><tr><th>Life time (in hours)</th><th>Number of lamps</th></tr><tr><td>300 – 400</td><td>14</td></tr><tr><td>400 – 500</td><td>56</td></tr><tr><td>500 – 600</td><td>60</td></tr><tr><td>600 – 700</td><td>86</td></tr><tr><td>700 – 800</td><td>74</td></tr><tr><td>800 – 900</td><td>62</td></tr><tr><td>900 – 1000</td><td>48</td></tr></table>
        <div class="question" style="margin-top:6px">(i) Represent the given information with the help of a histogram.<br/>(ii) How many lamps have a life time of more than 700 hours?</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) The classes are continuous and of equal width (100), so bar heights = number of lamps.<br/>
          <svg viewBox="0 0 320 233" class="ex-img">
            <text x="173.5" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Life times of 400 neon lamps</text>
            <line x1="42" y1="190" x2="305" y2="190" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="42" y1="171.33" x2="305" y2="171.33" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="174.83" font-size="9" fill="white" text-anchor="end">10</text>
            <line x1="42" y1="152.67" x2="305" y2="152.67" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="156.17" font-size="9" fill="white" text-anchor="end">20</text>
            <line x1="42" y1="134" x2="305" y2="134" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="137.5" font-size="9" fill="white" text-anchor="end">30</text>
            <line x1="42" y1="115.33" x2="305" y2="115.33" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="118.83" font-size="9" fill="white" text-anchor="end">40</text>
            <line x1="42" y1="96.67" x2="305" y2="96.67" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="100.17" font-size="9" fill="white" text-anchor="end">50</text>
            <line x1="42" y1="78" x2="305" y2="78" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="81.5" font-size="9" fill="white" text-anchor="end">60</text>
            <line x1="42" y1="59.33" x2="305" y2="59.33" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="62.83" font-size="9" fill="white" text-anchor="end">70</text>
            <line x1="42" y1="40.67" x2="305" y2="40.67" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="44.17" font-size="9" fill="white" text-anchor="end">80</text>
            <line x1="42" y1="22" x2="305" y2="22" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="25.5" font-size="9" fill="white" text-anchor="end">90</text>
            <line x1="42" y1="16" x2="42" y2="190" stroke="white" stroke-width="1.2"/>
            <line x1="42" y1="190" x2="305" y2="190" stroke="white" stroke-width="1.2"/>
            <path d="M42,190 L45,186 L49,194 L52,190" fill="none" stroke="white" stroke-width="1.2"/>
            <rect x="52" y="163.87" width="36.14" height="26.13" fill="#00E5FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="70.07" y="159.87" font-size="9" fill="#00E5FF" text-anchor="middle">14</text>
            <rect x="88.14" y="85.47" width="36.14" height="104.53" fill="#FF2E97" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="106.21" y="81.47" font-size="9" fill="#FF2E97" text-anchor="middle">56</text>
            <rect x="124.29" y="78" width="36.14" height="112" fill="#00E676" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="142.36" y="74" font-size="9" fill="#00E676" text-anchor="middle">60</text>
            <rect x="160.43" y="29.47" width="36.14" height="160.53" fill="#FFC400" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="178.5" y="25.47" font-size="9" fill="#FFC400" text-anchor="middle">86</text>
            <rect x="196.57" y="51.87" width="36.14" height="138.13" fill="#B388FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="214.64" y="47.87" font-size="9" fill="#B388FF" text-anchor="middle">74</text>
            <rect x="232.71" y="74.27" width="36.14" height="115.73" fill="#FF7043" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="250.79" y="70.27" font-size="9" fill="#FF7043" text-anchor="middle">62</text>
            <rect x="268.86" y="100.4" width="36.14" height="89.6" fill="#40C4FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="286.93" y="96.4" font-size="9" fill="#40C4FF" text-anchor="middle">48</text>
            <text x="52" y="202" font-size="8.5" fill="white" text-anchor="middle">300</text>
            <text x="88.14" y="202" font-size="8.5" fill="white" text-anchor="middle">400</text>
            <text x="124.29" y="202" font-size="8.5" fill="white" text-anchor="middle">500</text>
            <text x="160.43" y="202" font-size="8.5" fill="white" text-anchor="middle">600</text>
            <text x="196.57" y="202" font-size="8.5" fill="white" text-anchor="middle">700</text>
            <text x="232.71" y="202" font-size="8.5" fill="white" text-anchor="middle">800</text>
            <text x="268.86" y="202" font-size="8.5" fill="white" text-anchor="middle">900</text>
            <text x="305" y="202" font-size="8.5" fill="white" text-anchor="middle">1000</text>
            <text x="173.5" y="229" font-size="9.5" fill="white" text-anchor="middle">Life time (in hours)</text>
            <text x="11" y="106" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 106)">Number of lamps</text>
          </svg>
          (ii) Lamps with life time more than 700 hours = 74 + 62 + 48 = 184<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(ii) 184 lamps</span></div>
        </div>

        <div class="question">6. The following table gives the distribution of students of two sections according to the marks obtained by them:</div>
        <table style="font-size:14px"><tr><th>Marks</th><th>Section A (Frequency)</th><th>Section B (Frequency)</th></tr><tr><td>0 – 10</td><td>3</td><td>5</td></tr><tr><td>10 – 20</td><td>9</td><td>19</td></tr><tr><td>20 – 30</td><td>17</td><td>15</td></tr><tr><td>30 – 40</td><td>12</td><td>10</td></tr><tr><td>40 – 50</td><td>9</td><td>1</td></tr></table>
        <div class="question" style="margin-top:6px">Represent the marks of the students of both the sections on the same graph by two frequency polygons. From the two polygons compare the performance of the two sections.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Class mark = <span class='frac'><span class='num'>Lower limit + Upper limit</span><span class='den'>2</span></span>: 5, 15, 25, 35, 45<br/>
          Add one class before and after, with frequency 0: class marks −5 and 55.<br/>
          Plot (class mark, frequency) for each section and join the points.<br/>
          <svg viewBox="0 0 320 230" class="ex-img">
            <text x="173.5" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Marks of Sections A and B</text>
            <line x1="42" y1="190" x2="305" y2="190" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="42" y1="174.4" x2="305" y2="174.4" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="177.9" font-size="9" fill="white" text-anchor="end">2</text>
            <line x1="42" y1="158.8" x2="305" y2="158.8" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="162.3" font-size="9" fill="white" text-anchor="end">4</text>
            <line x1="42" y1="143.2" x2="305" y2="143.2" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="146.7" font-size="9" fill="white" text-anchor="end">6</text>
            <line x1="42" y1="127.6" x2="305" y2="127.6" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="131.1" font-size="9" fill="white" text-anchor="end">8</text>
            <line x1="42" y1="112" x2="305" y2="112" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="115.5" font-size="9" fill="white" text-anchor="end">10</text>
            <line x1="42" y1="96.4" x2="305" y2="96.4" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="99.9" font-size="9" fill="white" text-anchor="end">12</text>
            <line x1="42" y1="80.8" x2="305" y2="80.8" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="84.3" font-size="9" fill="white" text-anchor="end">14</text>
            <line x1="42" y1="65.2" x2="305" y2="65.2" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="68.7" font-size="9" fill="white" text-anchor="end">16</text>
            <line x1="42" y1="49.6" x2="305" y2="49.6" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="53.1" font-size="9" fill="white" text-anchor="end">18</text>
            <line x1="42" y1="34" x2="305" y2="34" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="37.5" font-size="9" fill="white" text-anchor="end">20</text>
            <line x1="42" y1="190" x2="42" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="42" y="203" font-size="8.5" fill="white" text-anchor="middle">−10</text>
            <line x1="79.57" y1="190" x2="79.57" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="79.57" y="203" font-size="8.5" fill="white" text-anchor="middle">0</text>
            <line x1="117.14" y1="190" x2="117.14" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="117.14" y="203" font-size="8.5" fill="white" text-anchor="middle">10</text>
            <line x1="154.71" y1="190" x2="154.71" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="154.71" y="203" font-size="8.5" fill="white" text-anchor="middle">20</text>
            <line x1="192.29" y1="190" x2="192.29" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="192.29" y="203" font-size="8.5" fill="white" text-anchor="middle">30</text>
            <line x1="229.86" y1="190" x2="229.86" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="229.86" y="203" font-size="8.5" fill="white" text-anchor="middle">40</text>
            <line x1="267.43" y1="190" x2="267.43" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="267.43" y="203" font-size="8.5" fill="white" text-anchor="middle">50</text>
            <line x1="305" y1="190" x2="305" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="305" y="203" font-size="8.5" fill="white" text-anchor="middle">60</text>
            <line x1="42" y1="28" x2="42" y2="190" stroke="white" stroke-width="1.2"/>
            <line x1="42" y1="190" x2="305" y2="190" stroke="white" stroke-width="1.2"/>
            <polyline points="60.79,190 98.36,166.6 135.93,119.8 173.5,57.4 211.07,96.4 248.64,119.8 286.21,190" fill="none" stroke="#FF4DA6" stroke-width="2"/>
            <circle cx="60.79" cy="190" r="2.6" fill="#FF4DA6"/>
            <circle cx="98.36" cy="166.6" r="2.6" fill="#FF4DA6"/>
            <circle cx="135.93" cy="119.8" r="2.6" fill="#FF4DA6"/>
            <circle cx="173.5" cy="57.4" r="2.6" fill="#FF4DA6"/>
            <circle cx="211.07" cy="96.4" r="2.6" fill="#FF4DA6"/>
            <circle cx="248.64" cy="119.8" r="2.6" fill="#FF4DA6"/>
            <circle cx="286.21" cy="190" r="2.6" fill="#FF4DA6"/>
            <line x1="50" y1="24" x2="66" y2="24" stroke="#FF4DA6" stroke-width="2.5"/>
            <text x="70" y="27.5" font-size="9.5" fill="#FF4DA6" text-anchor="start">Section A</text>
            <polyline points="60.79,190 98.36,151 135.93,41.8 173.5,73 211.07,112 248.64,182.2 286.21,190" fill="none" stroke="#4FC3F7" stroke-width="2"/>
            <circle cx="60.79" cy="190" r="2.6" fill="#4FC3F7"/>
            <circle cx="98.36" cy="151" r="2.6" fill="#4FC3F7"/>
            <circle cx="135.93" cy="41.8" r="2.6" fill="#4FC3F7"/>
            <circle cx="173.5" cy="73" r="2.6" fill="#4FC3F7"/>
            <circle cx="211.07" cy="112" r="2.6" fill="#4FC3F7"/>
            <circle cx="248.64" cy="182.2" r="2.6" fill="#4FC3F7"/>
            <circle cx="286.21" cy="190" r="2.6" fill="#4FC3F7"/>
            <line x1="170" y1="24" x2="186" y2="24" stroke="#4FC3F7" stroke-width="2.5"/>
            <text x="190" y="27.5" font-size="9.5" fill="#4FC3F7" text-anchor="start">Section B</text>
            <text x="173.5" y="218" font-size="9.5" fill="white" text-anchor="middle">Marks</text>
            <text x="11" y="112" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 112)">Number of students</text>
          </svg>
          Students scoring 30–50: Section A = 12 + 9 = 21; Section B = 10 + 1 = 11<br/>
          Section A's polygon is higher at the higher marks, so Section A has performed better.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Section A has performed better than Section B</span></div>
        </div>

        <div class="question">7. The runs scored by two teams A and B on the first 60 balls in a cricket match are given below:</div>
        <table style="font-size:14px"><tr><th>Number of balls</th><th>Team A</th><th>Team B</th></tr><tr><td>1 – 6</td><td>2</td><td>5</td></tr><tr><td>7 – 12</td><td>1</td><td>6</td></tr><tr><td>13 – 18</td><td>8</td><td>2</td></tr><tr><td>19 – 24</td><td>9</td><td>10</td></tr><tr><td>25 – 30</td><td>4</td><td>5</td></tr><tr><td>31 – 36</td><td>5</td><td>6</td></tr><tr><td>37 – 42</td><td>6</td><td>3</td></tr><tr><td>43 – 48</td><td>10</td><td>4</td></tr><tr><td>49 – 54</td><td>6</td><td>8</td></tr><tr><td>55 – 60</td><td>2</td><td>10</td></tr></table>
        <div class="question" style="margin-top:6px">Represent the data of both the teams on the same graph by frequency polygons. [Hint : First make the class intervals continuous.]</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Gap between classes = 7 − 6 = 1, so make the classes continuous: 0.5 – 6.5, 6.5 – 12.5, …, 54.5 – 60.5<br/>
          Class marks: 3.5, 9.5, 15.5, 21.5, 27.5, 33.5, 39.5, 45.5, 51.5, 57.5<br/>
          Add one class before and after, with 0 runs: class marks −2.5 and 63.5.<br/>
          Plot (class mark, runs) for each team and join the points.<br/>
          <svg viewBox="0 0 320 230" class="ex-img">
            <text x="173.5" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Runs on the first 60 balls</text>
            <line x1="42" y1="190" x2="305" y2="190" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="42" y1="164" x2="305" y2="164" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="167.5" font-size="9" fill="white" text-anchor="end">2</text>
            <line x1="42" y1="138" x2="305" y2="138" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="141.5" font-size="9" fill="white" text-anchor="end">4</text>
            <line x1="42" y1="112" x2="305" y2="112" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="115.5" font-size="9" fill="white" text-anchor="end">6</text>
            <line x1="42" y1="86" x2="305" y2="86" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="89.5" font-size="9" fill="white" text-anchor="end">8</text>
            <line x1="42" y1="60" x2="305" y2="60" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="63.5" font-size="9" fill="white" text-anchor="end">10</text>
            <line x1="42" y1="34" x2="305" y2="34" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="37.5" font-size="9" fill="white" text-anchor="end">12</text>
            <line x1="63.92" y1="190" x2="63.92" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="63.92" y="203" font-size="8.5" fill="white" text-anchor="middle">0.5</text>
            <line x1="107.75" y1="190" x2="107.75" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="107.75" y="203" font-size="8.5" fill="white" text-anchor="middle">12.5</text>
            <line x1="151.58" y1="190" x2="151.58" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="151.58" y="203" font-size="8.5" fill="white" text-anchor="middle">24.5</text>
            <line x1="195.42" y1="190" x2="195.42" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="195.42" y="203" font-size="8.5" fill="white" text-anchor="middle">36.5</text>
            <line x1="239.25" y1="190" x2="239.25" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="239.25" y="203" font-size="8.5" fill="white" text-anchor="middle">48.5</text>
            <line x1="283.08" y1="190" x2="283.08" y2="193" stroke="white" stroke-width="1.2"/>
            <text x="283.08" y="203" font-size="8.5" fill="white" text-anchor="middle">60.5</text>
            <line x1="42" y1="28" x2="42" y2="190" stroke="white" stroke-width="1.2"/>
            <line x1="42" y1="190" x2="305" y2="190" stroke="white" stroke-width="1.2"/>
            <polyline points="52.96,190 74.88,164 96.79,177 118.71,86 140.63,73 162.54,138 184.46,125 206.38,112 228.29,60 250.21,112 272.13,164 294.04,190" fill="none" stroke="#FF4DA6" stroke-width="2"/>
            <circle cx="52.96" cy="190" r="2.6" fill="#FF4DA6"/>
            <circle cx="74.88" cy="164" r="2.6" fill="#FF4DA6"/>
            <circle cx="96.79" cy="177" r="2.6" fill="#FF4DA6"/>
            <circle cx="118.71" cy="86" r="2.6" fill="#FF4DA6"/>
            <circle cx="140.63" cy="73" r="2.6" fill="#FF4DA6"/>
            <circle cx="162.54" cy="138" r="2.6" fill="#FF4DA6"/>
            <circle cx="184.46" cy="125" r="2.6" fill="#FF4DA6"/>
            <circle cx="206.38" cy="112" r="2.6" fill="#FF4DA6"/>
            <circle cx="228.29" cy="60" r="2.6" fill="#FF4DA6"/>
            <circle cx="250.21" cy="112" r="2.6" fill="#FF4DA6"/>
            <circle cx="272.13" cy="164" r="2.6" fill="#FF4DA6"/>
            <circle cx="294.04" cy="190" r="2.6" fill="#FF4DA6"/>
            <line x1="50" y1="24" x2="66" y2="24" stroke="#FF4DA6" stroke-width="2.5"/>
            <text x="70" y="27.5" font-size="9.5" fill="#FF4DA6" text-anchor="start">Team A</text>
            <polyline points="52.96,190 74.88,125 96.79,112 118.71,164 140.63,60 162.54,125 184.46,112 206.38,151 228.29,138 250.21,86 272.13,60 294.04,190" fill="none" stroke="#4FC3F7" stroke-width="2"/>
            <circle cx="52.96" cy="190" r="2.6" fill="#4FC3F7"/>
            <circle cx="74.88" cy="125" r="2.6" fill="#4FC3F7"/>
            <circle cx="96.79" cy="112" r="2.6" fill="#4FC3F7"/>
            <circle cx="118.71" cy="164" r="2.6" fill="#4FC3F7"/>
            <circle cx="140.63" cy="60" r="2.6" fill="#4FC3F7"/>
            <circle cx="162.54" cy="125" r="2.6" fill="#4FC3F7"/>
            <circle cx="184.46" cy="112" r="2.6" fill="#4FC3F7"/>
            <circle cx="206.38" cy="151" r="2.6" fill="#4FC3F7"/>
            <circle cx="228.29" cy="138" r="2.6" fill="#4FC3F7"/>
            <circle cx="250.21" cy="86" r="2.6" fill="#4FC3F7"/>
            <circle cx="272.13" cy="60" r="2.6" fill="#4FC3F7"/>
            <circle cx="294.04" cy="190" r="2.6" fill="#4FC3F7"/>
            <line x1="170" y1="24" x2="186" y2="24" stroke="#4FC3F7" stroke-width="2.5"/>
            <text x="190" y="27.5" font-size="9.5" fill="#4FC3F7" text-anchor="start">Team B</text>
            <text x="173.5" y="218" font-size="9.5" fill="white" text-anchor="middle">Number of balls (class boundaries)</text>
            <text x="11" y="112" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 112)">Runs scored</text>
          </svg>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Frequency polygons of Team A and Team B drawn on the same graph</span></div>
        </div>

        <div class="question">8. A random survey of the number of children of various age groups playing in a park was found as follows:</div>
        <table style="font-size:14px"><tr><th>Age (in years)</th><th>Number of children</th></tr><tr><td>1 – 2</td><td>5</td></tr><tr><td>2 – 3</td><td>3</td></tr><tr><td>3 – 5</td><td>6</td></tr><tr><td>5 – 7</td><td>12</td></tr><tr><td>7 – 10</td><td>9</td></tr><tr><td>10 – 15</td><td>10</td></tr><tr><td>15 – 17</td><td>4</td></tr></table>
        <div class="question" style="margin-top:6px">Draw a histogram to represent the data above.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          The class widths are unequal, so the bar heights must be adjusted.<br/>
          Minimum class width = 1<br/>
          Adjusted frequency = <span class='frac'><span class='num'>Minimum class width</span><span class='den'>Class width</span></span> × Frequency<br/>
          <table style="font-size:14px"><tr><th>Age</th><th>Width</th><th>Children</th><th>Adjusted</th></tr><tr><td>1 – 2</td><td>1</td><td>5</td><td>5</td></tr><tr><td>2 – 3</td><td>1</td><td>3</td><td>3</td></tr><tr><td>3 – 5</td><td>2</td><td>6</td><td>3</td></tr><tr><td>5 – 7</td><td>2</td><td>12</td><td>6</td></tr><tr><td>7 – 10</td><td>3</td><td>9</td><td>3</td></tr><tr><td>10 – 15</td><td>5</td><td>10</td><td>2</td></tr><tr><td>15 – 17</td><td>2</td><td>4</td><td>2</td></tr></table>
          Draw bars of these adjusted heights.<br/>
          <svg viewBox="0 0 320 233" class="ex-img">
            <text x="173.5" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Children playing in a park</text>
            <line x1="42" y1="190" x2="305" y2="190" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="42" y1="166" x2="305" y2="166" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="169.5" font-size="9" fill="white" text-anchor="end">1</text>
            <line x1="42" y1="142" x2="305" y2="142" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="145.5" font-size="9" fill="white" text-anchor="end">2</text>
            <line x1="42" y1="118" x2="305" y2="118" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="121.5" font-size="9" fill="white" text-anchor="end">3</text>
            <line x1="42" y1="94" x2="305" y2="94" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="97.5" font-size="9" fill="white" text-anchor="end">4</text>
            <line x1="42" y1="70" x2="305" y2="70" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="73.5" font-size="9" fill="white" text-anchor="end">5</text>
            <line x1="42" y1="46" x2="305" y2="46" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="49.5" font-size="9" fill="white" text-anchor="end">6</text>
            <line x1="42" y1="22" x2="305" y2="22" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="25.5" font-size="9" fill="white" text-anchor="end">7</text>
            <line x1="42" y1="16" x2="42" y2="190" stroke="white" stroke-width="1.2"/>
            <line x1="42" y1="190" x2="305" y2="190" stroke="white" stroke-width="1.2"/>
            <path d="M42,190 L45,186 L49,194 L52,190" fill="none" stroke="white" stroke-width="1.2"/>
            <rect x="52" y="70" width="15.81" height="120" fill="#00E5FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="59.91" y="66" font-size="9" fill="#00E5FF" text-anchor="middle">5</text>
            <rect x="67.81" y="118" width="15.81" height="72" fill="#FF2E97" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="75.72" y="114" font-size="9" fill="#FF2E97" text-anchor="middle">3</text>
            <rect x="83.63" y="118" width="31.63" height="72" fill="#00E676" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="99.44" y="114" font-size="9" fill="#00E676" text-anchor="middle">3</text>
            <rect x="115.25" y="46" width="31.63" height="144" fill="#FFC400" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="131.06" y="42" font-size="9" fill="#FFC400" text-anchor="middle">6</text>
            <rect x="146.88" y="118" width="47.44" height="72" fill="#B388FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="170.59" y="114" font-size="9" fill="#B388FF" text-anchor="middle">3</text>
            <rect x="194.31" y="142" width="79.06" height="48" fill="#FF7043" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="233.84" y="138" font-size="9" fill="#FF7043" text-anchor="middle">2</text>
            <rect x="273.38" y="142" width="31.63" height="48" fill="#40C4FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="289.19" y="138" font-size="9" fill="#40C4FF" text-anchor="middle">2</text>
            <text x="52" y="202" font-size="8.5" fill="white" text-anchor="middle">1</text>
            <text x="67.81" y="202" font-size="8.5" fill="white" text-anchor="middle">2</text>
            <text x="83.63" y="202" font-size="8.5" fill="white" text-anchor="middle">3</text>
            <text x="115.25" y="202" font-size="8.5" fill="white" text-anchor="middle">5</text>
            <text x="146.88" y="202" font-size="8.5" fill="white" text-anchor="middle">7</text>
            <text x="194.31" y="202" font-size="8.5" fill="white" text-anchor="middle">10</text>
            <text x="273.38" y="202" font-size="8.5" fill="white" text-anchor="middle">15</text>
            <text x="305" y="202" font-size="8.5" fill="white" text-anchor="middle">17</text>
            <text x="173.5" y="229" font-size="9.5" fill="white" text-anchor="middle">Age (in years)</text>
            <text x="11" y="106" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 106)">Adjusted frequency</text>
          </svg>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Histogram with adjusted heights 5, 3, 3, 6, 3, 2, 2</span></div>
        </div>

        <div class="question">9. 100 surnames were randomly picked up from a local telephone directory and a frequency distribution of the number of letters in the English alphabet in the surnames was found as follows:</div>
        <table style="font-size:14px"><tr><th>Number of letters</th><th>Number of surnames</th></tr><tr><td>1 – 4</td><td>6</td></tr><tr><td>4 – 6</td><td>30</td></tr><tr><td>6 – 8</td><td>44</td></tr><tr><td>8 – 12</td><td>16</td></tr><tr><td>12 – 20</td><td>4</td></tr></table>
        <div class="question" style="margin-top:6px">(i) Draw a histogram to represent the given information.<br/>(ii) Write the class interval in which the maximum number of surnames lie.</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) The class widths are unequal, so the bar heights must be adjusted.<br/>
          Minimum class width = 2<br/>
          Adjusted frequency = <span class='frac'><span class='num'>Minimum class width</span><span class='den'>Class width</span></span> × Frequency<br/>
          <table style="font-size:14px"><tr><th>Letters</th><th>Width</th><th>Surnames</th><th>Adjusted</th></tr><tr><td>1 – 4</td><td>3</td><td>6</td><td>4</td></tr><tr><td>4 – 6</td><td>2</td><td>30</td><td>30</td></tr><tr><td>6 – 8</td><td>2</td><td>44</td><td>44</td></tr><tr><td>8 – 12</td><td>4</td><td>16</td><td>8</td></tr><tr><td>12 – 20</td><td>8</td><td>4</td><td>1</td></tr></table>
          Draw bars of these adjusted heights.<br/>
          <svg viewBox="0 0 320 233" class="ex-img">
            <text x="173.5" y="12" font-size="10" fill="#FF4DA6" text-anchor="middle">Letters in 100 surnames</text>
            <line x1="42" y1="190" x2="305" y2="190" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="193.5" font-size="9" fill="white" text-anchor="end">0</text>
            <line x1="42" y1="173.2" x2="305" y2="173.2" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="176.7" font-size="9" fill="white" text-anchor="end">5</text>
            <line x1="42" y1="156.4" x2="305" y2="156.4" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="159.9" font-size="9" fill="white" text-anchor="end">10</text>
            <line x1="42" y1="139.6" x2="305" y2="139.6" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="143.1" font-size="9" fill="white" text-anchor="end">15</text>
            <line x1="42" y1="122.8" x2="305" y2="122.8" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="126.3" font-size="9" fill="white" text-anchor="end">20</text>
            <line x1="42" y1="106" x2="305" y2="106" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="109.5" font-size="9" fill="white" text-anchor="end">25</text>
            <line x1="42" y1="89.2" x2="305" y2="89.2" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="92.7" font-size="9" fill="white" text-anchor="end">30</text>
            <line x1="42" y1="72.4" x2="305" y2="72.4" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="75.9" font-size="9" fill="white" text-anchor="end">35</text>
            <line x1="42" y1="55.6" x2="305" y2="55.6" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="59.1" font-size="9" fill="white" text-anchor="end">40</text>
            <line x1="42" y1="38.8" x2="305" y2="38.8" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="42.3" font-size="9" fill="white" text-anchor="end">45</text>
            <line x1="42" y1="22" x2="305" y2="22" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
            <text x="37" y="25.5" font-size="9" fill="white" text-anchor="end">50</text>
            <line x1="42" y1="16" x2="42" y2="190" stroke="white" stroke-width="1.2"/>
            <line x1="42" y1="190" x2="305" y2="190" stroke="white" stroke-width="1.2"/>
            <path d="M42,190 L45,186 L49,194 L52,190" fill="none" stroke="white" stroke-width="1.2"/>
            <rect x="52" y="176.56" width="39.95" height="13.44" fill="#00E5FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="71.97" y="172.56" font-size="9" fill="#00E5FF" text-anchor="middle">4</text>
            <rect x="91.95" y="89.2" width="26.63" height="100.8" fill="#FF2E97" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="105.26" y="85.2" font-size="9" fill="#FF2E97" text-anchor="middle">30</text>
            <rect x="118.58" y="42.16" width="26.63" height="147.84" fill="#00E676" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="131.89" y="38.16" font-size="9" fill="#00E676" text-anchor="middle">44</text>
            <rect x="145.21" y="163.12" width="53.26" height="26.88" fill="#FFC400" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="171.84" y="159.12" font-size="9" fill="#FFC400" text-anchor="middle">8</text>
            <rect x="198.47" y="186.64" width="106.53" height="3.36" fill="#B388FF" fill-opacity="0.92" stroke="#FFFFFF" stroke-width="1"/>
            <text x="251.74" y="182.64" font-size="9" fill="#B388FF" text-anchor="middle">1</text>
            <text x="52" y="202" font-size="8.5" fill="white" text-anchor="middle">1</text>
            <text x="91.95" y="202" font-size="8.5" fill="white" text-anchor="middle">4</text>
            <text x="118.58" y="202" font-size="8.5" fill="white" text-anchor="middle">6</text>
            <text x="145.21" y="202" font-size="8.5" fill="white" text-anchor="middle">8</text>
            <text x="198.47" y="202" font-size="8.5" fill="white" text-anchor="middle">12</text>
            <text x="305" y="202" font-size="8.5" fill="white" text-anchor="middle">20</text>
            <text x="173.5" y="229" font-size="9.5" fill="white" text-anchor="middle">Number of letters</text>
            <text x="11" y="106" font-size="9.5" fill="white" text-anchor="middle" transform="rotate(-90 11 106)">Adjusted frequency</text>
          </svg>
          (ii) The tallest bar is 6 – 8, so the maximum number of surnames (44) lie in the class interval 6 – 8.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) Histogram with adjusted heights 4, 30, 44, 8, 1 (ii) 6 – 8</span></div>
        </div>
      </div>
`,
  },
};
