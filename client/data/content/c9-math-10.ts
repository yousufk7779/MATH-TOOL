import { ChapterContent } from "../types";

export const c9Math10: ChapterContent = {
  id: "c9-math-10",
  number: 10,
  title: "Surface Areas and Volumes",
  introduction:
    "In this chapter, we explore the measurement of surface areas and volumes of various three-dimensional shapes like cuboids, cubes, cylinders, cones, and spheres. These calculations are vital for understanding space and materials in the world around us.",
  definitions: [
    {
      term: "Surface Area",
      definition:
        "The total area that the surface of a three-dimensional object occupies.",
    },
    {
      term: "Volume",
      definition:
        "The amount of space occupied by a three-dimensional object, often measured in cubic units.",
    },
    {
      term: "Lateral Surface Area",
      definition:
        "The area of all the sides of an object, excluding its top and base.",
    },
  ],
  keyPoints: [
    "Capacity is the volume of a substance that a container can hold.",
    "1 m³ = 1000 litres; 1 litre = 1000 cm³.",
    "The curved surface area of a cylinder excludes its two circular ends.",
    "The total surface area includes all faces of the object.",
  ],
  formulas: [
    { name: "Cuboid TSA", formula: "2(lb + bh + hl)" },
    { name: "Cube TSA", formula: "6a²" },
    { name: "Cylinder CSA", formula: "2πrh" },
    { name: "Cone CSA", formula: "πrl" },
    { name: "Sphere Surface Area", formula: "4πr²" },
    { name: "Volume of Cylinder", formula: "πr²h" },
    { name: "Volume of Sphere", formula: "(4/3)πr³" },
  ],
  crux: [
    "Check that all dimensions are in the same units before calculating.",
    "For 'open top' boxes, subtract the top area (l × b) from the total surface area.",
    "Remember that the volume of a cone is 1/3 that of a cylinder with the same base and height.",
  ],
  exercises: [
    { id: "ex10.1", name: "Ex 10.1", questions: [] },
    { id: "ex10.2", name: "Ex 10.2", questions: [] },
    { id: "ex10.3", name: "Ex 10.3", questions: [] },
    { id: "ex10.4", name: "Ex 10.4", questions: [] },
  ],
  examples: [],
  theorems: [],
  mcqs: [
    {
      id: "m1",
      question:
        "The slant height of a cone with base radius 5 cm and height 12 cm is:",
      options: ["7 cm", "13 cm", "17 cm", "60 cm"],
      correctAnswer: "B",
    },
    {
      id: "m2",
      question:
        "The curved surface area of a cone with radius 7 cm and slant height 10 cm is (π = 22/7):",
      options: ["154 cm²", "440 cm²", "220 cm²", "70 cm²"],
      correctAnswer: "C",
    },
    {
      id: "m3",
      question:
        "The total surface area of a cone whose radius is r/2 and slant height 2l is:",
      options: ["2πr(l + r)", "πr(l + r/4)", "πr(l + r)", "πr(l + r/2)"],
      correctAnswer: "B",
    },
    {
      id: "m4",
      question:
        "A hemispherical bowl is made of steel 0.25 cm thick. The inner radius is 5 cm. The outer curved surface area is:",
      options: ["173.25 cm²", "183.25 cm²", "273.25 cm²", "None of these"],
      correctAnswer: "A",
    },
    {
      id: "m5",
      question: "The volume of a sphere of radius 2r is:",
      options: ["(4/3)πr³", "32/3 πr³", "8/3 πr³", "4/3 π(2r)³"],
      correctAnswer: "B",
    },
    {
      id: "m6",
      question:
        "The volume of a cone with radius 3 cm and height 7 cm is (π = 22/7):",
      options: ["22 cm³", "132 cm³", "198 cm³", "66 cm³"],
      correctAnswer: "D",
    },
    {
      id: "m7",
      question:
        "The ratio of surface areas of two spheres is 4:9. The ratio of their volumes is:",
      options: ["2:3", "4:9", "8:27", "16:81"],
      correctAnswer: "C",
    },
    {
      id: "m8",
      question:
        "The total surface area of a solid hemisphere of radius r is:",
      options: ["2πr²", "3πr²", "4πr²", "πr²"],
      correctAnswer: "B",
    },
    {
      id: "m9",
      question: "The radius of a sphere whose surface area is 154 cm² is:",
      options: ["7 cm", "3.5 cm", "14 cm", "10.5 cm"],
      correctAnswer: "B",
    },
    {
      id: "m10",
      question:
        "The volume of a hemisphere of radius 21 cm is (π = 22/7):",
      options: ["19404 cm³", "38808 cm³", "9702 cm³", "1386 cm³"],
      correctAnswer: "A",
    },
  ],
  summary: [
    "Mastered the surface area and volume of cuboids, cubes, cylinders, cones, and spheres.",
    "Understood the conversion between cubic meters, cubic centimeters, and litres.",
    "Solved complex problems involving thickness, cost estimation, and ratios.",
  ],

  isHtmlView: true,
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFA726; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFA726; padding-left: 15px; margin-top: 15px; background: rgba(255, 167, 38, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFA726 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFA726 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 167, 38, 0.05) !important; border-left: 4px solid #FFA726 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFA726 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFA726 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFA726 !important; font-weight: 700; }
        strong { color: #FFA726 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFA726; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 167, 38, 0.05); color: #FFA726; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
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

        <div class="step">In this chapter, we study the <b>Surface Areas</b> and <b>Volumes</b> of various 3D shapes. These concepts are used in constructing buildings, designing containers, and manufacturing goods.</div>
        
        <div class="step"><b>1. Right Circular Cone:</b></div>
        <div class="formula-box">
            Curved Surface Area = πrl (where l = √(r² + h²))<br/>
            Total Surface Area = πr(l + r)<br/>
            Volume = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span>πr²h
        </div>

        <div class="step"><b>2. Sphere and Hemisphere:</b></div>
        <div class="formula-box">
            <b>Sphere:</b> Surface Area = 4πr², Volume = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span>πr³<br/>
            <b>Hemisphere:</b> CSA = 2πr², TSA = 3πr², Volume = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span>πr³
        </div>
    </div>
</body>
</html>
`,
  htmlExercises: {
    "ex10.1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFA726; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFA726; padding-left: 15px; margin-top: 15px; background: rgba(255, 167, 38, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFA726 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFA726 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 167, 38, 0.05) !important; border-left: 4px solid #FFA726 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFA726 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFA726 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFA726 !important; font-weight: 700; }
        strong { color: #FFA726 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFA726; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 167, 38, 0.05); color: #FFA726; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="step"><i>Assume π = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span>, unless stated otherwise.</i></div>

        <div class="question">1. Diameter of the base of a cone is 10.5 cm and its slant height is 10 cm. Find its curved surface area.</div>
        <svg viewBox="0 0 240 183.59" class="ex-img">
          <path d="M45,139.59 L120,18 L195,139.59 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M45,139.59 A75,18 0 0 1 195,139.59" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M45,139.59 A75,18 0 0 0 195,139.59" fill="none" stroke="white" stroke-width="2"/>
          <line x1="45" y1="139.59" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="195" y1="139.59" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="139.59" x2="195" y2="139.59" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="139.59" r="2.2" fill="white"/>
          <text x="157.5" y="172.59" font-size="12" fill="#FFA726" text-anchor="middle">r = 5.25 cm</text>
          <text x="164.5" y="82.79" font-size="12" fill="#FFA726" text-anchor="start">l = 10 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>10.5</span><span class='den'>2</span></span> = 5.25 cm, l = 10 cm<br/>
          CSA of cone = πrl<br/>
          = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 5.25 × 10<br/>
          = 165 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">CSA = 165 cm²</span></div>
        </div>

        <div class="question">2. Find the total surface area of a cone, if its slant height is 21 m and diameter of its base is 24 m.</div>
        <svg viewBox="0 0 240 169.71" class="ex-img">
          <path d="M45,125.71 L120,18 L195,125.71 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M45,125.71 A75,18 0 0 1 195,125.71" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M45,125.71 A75,18 0 0 0 195,125.71" fill="none" stroke="white" stroke-width="2"/>
          <line x1="45" y1="125.71" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="195" y1="125.71" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="125.71" x2="195" y2="125.71" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="125.71" r="2.2" fill="white"/>
          <text x="157.5" y="158.71" font-size="12" fill="#FFA726" text-anchor="middle">r = 12 m</text>
          <text x="164.5" y="75.86" font-size="12" fill="#FFA726" text-anchor="start">l = 21 m</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>24</span><span class='den'>2</span></span> = 12 m, l = 21 m<br/>
          TSA of cone = πr(l + r)<br/>
          = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 12 × (21 + 12)<br/>
          = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 12 × 33 = <span class='frac'><span class='num'>8712</span><span class='den'>7</span></span> = 1244.57 m² (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">TSA = 1244.57 m² (approx.)</span></div>
        </div>

        <div class="question">3. Curved surface area of a cone is 308 cm² and its slant height is 14 cm. Find<br/>(i) radius of the base and<br/>(ii) total surface area of the cone.</div>
        <svg viewBox="0 0 240 209.9" class="ex-img">
          <path d="M45,147.9 L120,18 L195,147.9 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M45,147.9 A75,18 0 0 1 195,147.9" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M45,147.9 A75,18 0 0 0 195,147.9" fill="none" stroke="white" stroke-width="2"/>
          <line x1="45" y1="147.9" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="195" y1="147.9" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="147.9" x2="195" y2="147.9" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="147.9" r="2.2" fill="white"/>
          <text x="157.5" y="180.9" font-size="12" fill="#FFA726" text-anchor="middle">r = ?</text>
          <text x="164.5" y="86.95" font-size="12" fill="#FFA726" text-anchor="start">l = 14 cm</text>
          <text x="120" y="201.9" font-size="11" fill="white" text-anchor="middle">CSA = 308 cm²</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) CSA = πrl = 308<br/>
          <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × r × 14 = 308<br/>
          44r = 308, so r = 7 cm<br/>
          (ii) TSA = πr(l + r) = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × (14 + 7)<br/>
          = 22 × 21 = 462 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) r = 7 cm (ii) TSA = 462 cm²</span></div>
        </div>

        <div class="question">4. A conical tent is 10 m high and the radius of its base is 24 m. Find<br/>(i) slant height of the tent.<br/>(ii) cost of the canvas required to make the tent, if the cost of 1 m² canvas is Rs 70.</div>
        <svg viewBox="0 0 330 148.23" class="ex-img">
          <path d="M35,77.83 L145,32 L255,77.83 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M35,77.83 A110,26.4 0 0 1 255,77.83" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M35,77.83 A110,26.4 0 0 0 255,77.83" fill="none" stroke="white" stroke-width="2"/>
          <line x1="35" y1="77.83" x2="145" y2="32" stroke="white" stroke-width="2"/>
          <line x1="255" y1="77.83" x2="145" y2="32" stroke="white" stroke-width="2"/>
          <line x1="145" y1="32" x2="145" y2="77.83" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M152,77.83 L152,70.83 L145,70.83" fill="none" stroke="white" stroke-width="1"/>
          <line x1="267" y1="32" x2="267" y2="77.83" stroke="#FFA726" stroke-width="1.2"/>
          <line x1="263" y1="32" x2="271" y2="32" stroke="#FFA726" stroke-width="1.2"/>
          <line x1="263" y1="77.83" x2="271" y2="77.83" stroke="#FFA726" stroke-width="1.2"/>
          <text x="273" y="58.92" font-size="12" fill="#FFA726" text-anchor="start">h = 10 m</text>
          <line x1="145" y1="77.83" x2="255" y2="77.83" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="145" cy="77.83" r="2.2" fill="white"/>
          <text x="200" y="119.23" font-size="12" fill="#FFA726" text-anchor="middle">r = 24 m</text>
          <text x="82" y="48.92" font-size="12" fill="#FFA726" text-anchor="end">l = ?</text>
          <text x="145" y="140.23" font-size="11" fill="white" text-anchor="middle">Conical tent</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) l = √(r² + h²) = √(24² + 10²)<br/>
          = √(576 + 100) = √676 = 26 m<br/>
          (ii) Canvas = CSA = πrl = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 24 × 26 = <span class='frac'><span class='num'>13728</span><span class='den'>7</span></span> m²<br/>
          Cost = <span class='frac'><span class='num'>13728</span><span class='den'>7</span></span> × 70 = 13728 × 10 = Rs 1,37,280<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) l = 26 m (ii) Cost = Rs 1,37,280</span></div>
        </div>

        <div class="question">5. What length of tarpaulin 3 m wide will be required to make conical tent of height 8 m and base radius 6 m? Assume that the extra length of material that will be required for stitching margins and wastage in cutting is approximately 20 cm (Use π = 3.14).</div>
        <svg viewBox="0 0 240 180" class="ex-img">
          <path d="M45,118 L120,18 L195,118 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M45,118 A75,18 0 0 1 195,118" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M45,118 A75,18 0 0 0 195,118" fill="none" stroke="white" stroke-width="2"/>
          <line x1="45" y1="118" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="195" y1="118" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="18" x2="120" y2="118" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M127,118 L127,111 L120,111" fill="none" stroke="white" stroke-width="1"/>
          <text x="76.5" y="72" font-size="12" fill="#FFA726" text-anchor="end">h = 8 m</text>
          <line x1="120" y1="118" x2="195" y2="118" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="118" r="2.2" fill="white"/>
          <text x="157.5" y="151" font-size="12" fill="#FFA726" text-anchor="middle">r = 6 m</text>
          <text x="164.5" y="72" font-size="12" fill="#FFA726" text-anchor="start">l = ?</text>
          <text x="120" y="172" font-size="11" fill="white" text-anchor="middle">Tent made from tarpaulin 3 m wide</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          l = √(8² + 6²) = √(64 + 36) = √100 = 10 m<br/>
          Area of tarpaulin = CSA = πrl = 3.14 × 6 × 10 = 188.4 m²<br/>
          Length = <span class='frac'><span class='num'>Area</span><span class='den'>Width</span></span> = <span class='frac'><span class='num'>188.4</span><span class='den'>3</span></span> = 62.8 m<br/>
          Total length = 62.8 m + 0.2 m = 63 m<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Length of tarpaulin = 63 m</span></div>
        </div>

        <div class="question">6. The slant height and base diameter of a conical tomb are 25 m and 14 m respectively. Find the cost of white-washing its curved surface at the rate of Rs 210 per 100 m².</div>
        <svg viewBox="0 0 240 201.1" class="ex-img">
          <path d="M82.08,148 L120,18 L157.92,148 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M82.08,148 A37.92,9.1 0 0 1 157.92,148" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M82.08,148 A37.92,9.1 0 0 0 157.92,148" fill="none" stroke="white" stroke-width="2"/>
          <line x1="82.08" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="157.92" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="148" x2="157.92" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="148" r="2.2" fill="white"/>
          <text x="138.96" y="172.1" font-size="12" fill="#FFA726" text-anchor="middle">r = 7 m</text>
          <text x="145.96" y="87" font-size="12" fill="#FFA726" text-anchor="start">l = 25 m</text>
          <text x="120" y="193.1" font-size="11" fill="white" text-anchor="middle">Conical tomb (curved surface)</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>14</span><span class='den'>2</span></span> = 7 m, l = 25 m<br/>
          CSA = πrl = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × 25 = 550 m²<br/>
          Cost = <span class='frac'><span class='num'>550</span><span class='den'>100</span></span> × 210 = Rs 1155<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Cost of white-washing = Rs 1155</span></div>
        </div>

        <div class="question">7. A joker's cap is in the form of a right circular cone of base radius 7 cm and height 24 cm. Find the area of the sheet required to make 10 such caps.</div>
        <svg viewBox="0 0 240 201.1" class="ex-img">
          <path d="M82.08,148 L120,18 L157.92,148 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M82.08,148 A37.92,9.1 0 0 1 157.92,148" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M82.08,148 A37.92,9.1 0 0 0 157.92,148" fill="none" stroke="white" stroke-width="2"/>
          <line x1="82.08" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="157.92" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="18" x2="120" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M127,148 L127,141 L120,141" fill="none" stroke="white" stroke-width="1"/>
          <text x="95.04" y="87" font-size="12" fill="#FFA726" text-anchor="end">h = 24 cm</text>
          <line x1="120" y1="148" x2="157.92" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="148" r="2.2" fill="white"/>
          <text x="138.96" y="172.1" font-size="12" fill="#FFA726" text-anchor="middle">r = 7 cm</text>
          <text x="145.96" y="87" font-size="12" fill="#FFA726" text-anchor="start">l = ?</text>
          <text x="120" y="193.1" font-size="11" fill="white" text-anchor="middle">Joker's cap</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          l = √(24² + 7²) = √(576 + 49) = √625 = 25 cm<br/>
          Sheet for 1 cap = CSA = πrl = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × 25 = 550 cm²<br/>
          Sheet for 10 caps = 550 × 10 = 5500 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Area of sheet = 5500 cm²</span></div>
        </div>

        <div class="question">8. A bus stop is barricaded from the remaining part of the road, by using 50 hollow cones made of recycled cardboard. Each cone has a base diameter of 40 cm and height 1 m. If the outer side of each of the cones is to be painted and the cost of painting is Rs 12 per m², what will be the cost of painting all these cones? (Use π = 3.14 and take √1.04 = 1.02)</div>
        <svg viewBox="0 0 240 208.72" class="ex-img">
          <path d="M92,158 L120,18 L148,158 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M92,158 A28,6.72 0 0 1 148,158" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M92,158 A28,6.72 0 0 0 148,158" fill="none" stroke="white" stroke-width="2"/>
          <line x1="92" y1="158" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="148" y1="158" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="18" x2="120" y2="158" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M127,158 L127,151 L120,151" fill="none" stroke="white" stroke-width="1"/>
          <text x="100" y="92" font-size="12" fill="#FFA726" text-anchor="end">h = 1 m</text>
          <line x1="120" y1="158" x2="148" y2="158" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="158" r="2.2" fill="white"/>
          <text x="134" y="179.72" font-size="12" fill="#FFA726" text-anchor="middle">r = 0.2 m</text>
          <text x="141" y="92" font-size="12" fill="#FFA726" text-anchor="start">l = ?</text>
          <text x="120" y="200.72" font-size="11" fill="white" text-anchor="middle">One of 50 hollow cones</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = 20 cm = 0.2 m, h = 1 m<br/>
          l = √(1² + 0.2²) = √1.04 = 1.02 m<br/>
          CSA of 1 cone = πrl = 3.14 × 0.2 × 1.02 = 0.64056 m²<br/>
          CSA of 50 cones = 50 × 0.64056 = 32.028 m²<br/>
          Cost = 32.028 × 12 = Rs 384.34 (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Cost of painting = Rs 384.34 (approx.)</span></div>
        </div>
      </div>
`,
    "ex10.2": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFA726; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFA726; padding-left: 15px; margin-top: 15px; background: rgba(255, 167, 38, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFA726 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFA726 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 167, 38, 0.05) !important; border-left: 4px solid #FFA726 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFA726 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFA726 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFA726 !important; font-weight: 700; }
        strong { color: #FFA726 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFA726; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 167, 38, 0.05); color: #FFA726; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="step"><i>Assume π = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span>, unless stated otherwise.</i></div>

        <div class="question">1. Find the surface area of a sphere of radius:<br/>(i) 10.5 cm<br/>(ii) 5.6 cm<br/>(iii) 14 cm</div>
        <svg viewBox="0 0 240 122" class="ex-img">
          <circle cx="42" cy="46" r="32" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M10,46 A32,8.96 0 0 1 74,46" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M10,46 A32,8.96 0 0 0 74,46" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="42" cy="46" r="2.2" fill="white"/>
          <line x1="42" y1="46" x2="74" y2="46" stroke="#FFA726" stroke-width="1.6"/>
          <text x="42" y="96" font-size="11.5" fill="white" text-anchor="middle">(i)</text>
          <text x="42" y="113" font-size="11.5" fill="#FFA726" text-anchor="middle">r = 10.5 cm</text>
          <circle cx="120" cy="46" r="32" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M88,46 A32,8.96 0 0 1 152,46" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M88,46 A32,8.96 0 0 0 152,46" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="120" cy="46" r="2.2" fill="white"/>
          <line x1="120" y1="46" x2="152" y2="46" stroke="#FFA726" stroke-width="1.6"/>
          <text x="120" y="96" font-size="11.5" fill="white" text-anchor="middle">(ii)</text>
          <text x="120" y="113" font-size="11.5" fill="#FFA726" text-anchor="middle">r = 5.6 cm</text>
          <circle cx="198" cy="46" r="32" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M166,46 A32,8.96 0 0 1 230,46" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M166,46 A32,8.96 0 0 0 230,46" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="198" cy="46" r="2.2" fill="white"/>
          <line x1="198" y1="46" x2="230" y2="46" stroke="#FFA726" stroke-width="1.6"/>
          <text x="198" y="96" font-size="11.5" fill="white" text-anchor="middle">(iii)</text>
          <text x="198" y="113" font-size="11.5" fill="#FFA726" text-anchor="middle">r = 14 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Surface area = 4πr²<br/>
          (i) 4 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 10.5 × 10.5 = 1386 cm²<br/>
          (ii) 4 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 5.6 × 5.6 = 394.24 cm²<br/>
          (iii) 4 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 14 × 14 = 2464 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 1386 cm² (ii) 394.24 cm² (iii) 2464 cm²</span></div>
        </div>

        <div class="question">2. Find the surface area of a sphere of diameter:<br/>(i) 14 cm<br/>(ii) 21 cm<br/>(iii) 3.5 m</div>
        <svg viewBox="0 0 240 122" class="ex-img">
          <circle cx="42" cy="46" r="32" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M10,46 A32,8.96 0 0 1 74,46" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M10,46 A32,8.96 0 0 0 74,46" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="42" cy="46" r="2.2" fill="white"/>
          <line x1="10" y1="46" x2="74" y2="46" stroke="#FFA726" stroke-width="1.6"/>
          <text x="42" y="96" font-size="11.5" fill="white" text-anchor="middle">(i)</text>
          <text x="42" y="113" font-size="11.5" fill="#FFA726" text-anchor="middle">d = 14 cm</text>
          <circle cx="120" cy="46" r="32" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M88,46 A32,8.96 0 0 1 152,46" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M88,46 A32,8.96 0 0 0 152,46" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="120" cy="46" r="2.2" fill="white"/>
          <line x1="88" y1="46" x2="152" y2="46" stroke="#FFA726" stroke-width="1.6"/>
          <text x="120" y="96" font-size="11.5" fill="white" text-anchor="middle">(ii)</text>
          <text x="120" y="113" font-size="11.5" fill="#FFA726" text-anchor="middle">d = 21 cm</text>
          <circle cx="198" cy="46" r="32" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M166,46 A32,8.96 0 0 1 230,46" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M166,46 A32,8.96 0 0 0 230,46" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="198" cy="46" r="2.2" fill="white"/>
          <line x1="166" y1="46" x2="230" y2="46" stroke="#FFA726" stroke-width="1.6"/>
          <text x="198" y="96" font-size="11.5" fill="white" text-anchor="middle">(iii)</text>
          <text x="198" y="113" font-size="11.5" fill="#FFA726" text-anchor="middle">d = 3.5 m</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Surface area = 4πr², where r = <span class='frac'><span class='num'>d</span><span class='den'>2</span></span><br/>
          (i) r = 7 cm: 4 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × 7 = 616 cm²<br/>
          (ii) r = 10.5 cm: 4 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 10.5 × 10.5 = 1386 cm²<br/>
          (iii) r = 1.75 m: 4 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 1.75 × 1.75 = 38.5 m²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 616 cm² (ii) 1386 cm² (iii) 38.5 m²</span></div>
        </div>

        <div class="question">3. Find the total surface area of a hemisphere of radius 10 cm. (Use π = 3.14)</div>
        <svg viewBox="0 0 240 130" class="ex-img">
          <path d="M48,84 A72,72 0 0 1 192,84" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M48,84 A72,20.16 0 0 1 192,84" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M48,84 A72,20.16 0 0 0 192,84" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="120" cy="84" r="2.2" fill="white"/>
          <line x1="120" y1="84" x2="192" y2="84" stroke="#FFA726" stroke-width="1.6"/>
          <text x="156" y="119.16" font-size="12" fill="#FFA726" text-anchor="middle">r = 10 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          TSA of hemisphere = 3πr²<br/>
          = 3 × 3.14 × 10 × 10 = 942 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">TSA = 942 cm²</span></div>
        </div>

        <div class="question">4. The radius of a spherical balloon increases from 7 cm to 14 cm as air is being pumped into it. Find the ratio of surface areas of the balloon in the two cases.</div>
        <svg viewBox="0 0 240 158" class="ex-img">
          <circle cx="62" cy="72" r="30.8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M31.2,72 A30.8,8.62 0 0 1 92.8,72" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M31.2,72 A30.8,8.62 0 0 0 92.8,72" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="62" cy="72" r="2.2" fill="white"/>
          <line x1="62" y1="72" x2="92.8" y2="72" stroke="#FFA726" stroke-width="1.6"/>
          <text x="77.4" y="58.38" font-size="11" fill="#FFA726" text-anchor="middle">7 cm</text>
          <circle cx="170" cy="72" r="61.6" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M108.4,72 A61.6,17.25 0 0 1 231.6,72" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M108.4,72 A61.6,17.25 0 0 0 231.6,72" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="170" cy="72" r="2.2" fill="white"/>
          <line x1="170" y1="72" x2="231.6" y2="72" stroke="#FFA726" stroke-width="1.6"/>
          <text x="200.8" y="49.75" font-size="11" fill="#FFA726" text-anchor="middle">14 cm</text>
          <text x="62" y="151" font-size="11.5" fill="white" text-anchor="middle">Before</text>
          <text x="170" y="151" font-size="11.5" fill="white" text-anchor="middle">After</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Ratio = 4π(7)² : 4π(14)²<br/>
          = 49 : 196 = 1 : 4<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Ratio = 1 : 4</span></div>
        </div>

        <div class="question">5. A hemispherical bowl made of brass has inner diameter 10.5 cm. Find the cost of tin-plating it on the inside at the rate of Rs 16 per 100 cm².</div>
        <svg viewBox="0 0 240 156" class="ex-img">
          <path d="M40,50 A80,80 0 0 0 200,50" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <ellipse cx="120" cy="50" rx="80" ry="22.4" fill="rgba(255,167,38,0.18)" stroke="white" stroke-width="2"/>
          <circle cx="120" cy="50" r="2.2" fill="white"/>
          <line x1="120" y1="50" x2="200" y2="50" stroke="#FFA726" stroke-width="1.6"/>
          <text x="160" y="21.6" font-size="12" fill="#FFA726" text-anchor="middle">r = 5.25 cm</text>
          <text x="120" y="149" font-size="11.5" fill="white" text-anchor="middle">Tin-plated inside</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>10.5</span><span class='den'>2</span></span> = 5.25 cm<br/>
          Inner CSA = 2πr² = 2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 5.25 × 5.25 = 173.25 cm²<br/>
          Cost = <span class='frac'><span class='num'>173.25</span><span class='den'>100</span></span> × 16 = Rs 27.72<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Cost of tin-plating = Rs 27.72</span></div>
        </div>

        <div class="question">6. Find the radius of a sphere whose surface area is 154 cm².</div>
        <svg viewBox="0 0 240 150" class="ex-img">
          <circle cx="120" cy="68" r="58" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M62,68 A58,16.24 0 0 1 178,68" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M62,68 A58,16.24 0 0 0 178,68" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="120" cy="68" r="2.2" fill="white"/>
          <line x1="120" y1="68" x2="178" y2="68" stroke="#FFA726" stroke-width="1.6"/>
          <text x="149" y="46.76" font-size="12" fill="#FFA726" text-anchor="middle">r = ?</text>
          <text x="120" y="144" font-size="11.5" fill="white" text-anchor="middle">Surface area = 154 cm²</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          4πr² = 154<br/>
          4 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × r² = 154<br/>
          r² = <span class='frac'><span class='num'>154 × 7</span><span class='den'>4 × 22</span></span> = 12.25<br/>
          r = 3.5 cm<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Radius = 3.5 cm</span></div>
        </div>

        <div class="question">7. The diameter of the moon is approximately one fourth of the diameter of the earth. Find the ratio of their surface areas.</div>
        <svg viewBox="0 0 240 148" class="ex-img">
          <circle cx="70" cy="70" r="52" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M18,70 A52,14.56 0 0 1 122,70" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M18,70 A52,14.56 0 0 0 122,70" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="70" cy="70" r="2.2" fill="white"/>
          <circle cx="186" cy="70" r="13" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M173,70 A13,3.64 0 0 1 199,70" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M173,70 A13,3.64 0 0 0 199,70" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="186" cy="70" r="2.2" fill="white"/>
          <text x="70" y="140" font-size="11.5" fill="white" text-anchor="middle">Earth: d</text>
          <text x="186" y="102" font-size="11.5" fill="white" text-anchor="middle">Moon: </text>
          <text x="186" y="118" font-size="11.5" fill="#FFA726" text-anchor="middle">d ÷ 4</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let the radius of the earth be r; then the radius of the moon is <span class='frac'><span class='num'>r</span><span class='den'>4</span></span>.<br/>
          Moon : Earth = 4π(<span class='frac'><span class='num'>r</span><span class='den'>4</span></span>)² : 4πr²<br/>
          = <span class='frac'><span class='num'>1</span><span class='den'>16</span></span> : 1 = 1 : 16<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Ratio of surface areas (moon : earth) = 1 : 16</span></div>
        </div>

        <div class="question">8. A hemispherical bowl is made of steel, 0.25 cm thick. The inner radius of the bowl is 5 cm. Find the outer curved surface area of the bowl.</div>
        <svg viewBox="0 0 240 162" class="ex-img">
          <path d="M36,50 A84,84 0 0 0 204,50 L200,50 A80,80 0 0 1 40,50 Z" fill="rgba(255,167,38,0.35)" stroke="white" stroke-width="1.6"/>
          <ellipse cx="120" cy="50" rx="84" ry="23.52" fill="none" stroke="white" stroke-width="1.6"/>
          <ellipse cx="120" cy="50" rx="80" ry="22.4" fill="rgba(255,167,38,0.12)" stroke="white" stroke-width="1.4"/>
          <circle cx="120" cy="50" r="2.2" fill="white"/>
          <line x1="120" y1="50" x2="40" y2="50" stroke="#FFA726" stroke-width="1.6"/>
          <text x="80" y="20.48" font-size="11.5" fill="#FFA726" text-anchor="middle">inner r = 5 cm</text>
          <line x1="120" y1="50" x2="204" y2="50" stroke="#4FC3F7" stroke-width="1.6"/>
          <text x="120" y="152" font-size="11.5" fill="#4FC3F7" text-anchor="middle">outer R = 5.25 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Outer radius R = 5 + 0.25 = 5.25 cm<br/>
          Outer CSA = 2πR² = 2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 5.25 × 5.25 = 173.25 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Outer curved surface area = 173.25 cm²</span></div>
        </div>

        <div class="question">9. A right circular cylinder just encloses a sphere of radius r (see Fig. 10.22). Find<br/>(i) surface area of the sphere,<br/>(ii) curved surface area of the cylinder,<br/>(iii) ratio of the areas obtained in (i) and (ii).</div>
        <svg viewBox="0 0 240 153.52" class="ex-img">
          <rect x="68" y="24" width="104" height="104" fill="rgba(79,195,247,0.08)" stroke="none"/>
          <line x1="68" y1="24" x2="68" y2="128" stroke="white" stroke-width="2"/>
          <line x1="172" y1="24" x2="172" y2="128" stroke="white" stroke-width="2"/>
          <ellipse cx="120" cy="24" rx="52" ry="13.52" fill="none" stroke="white" stroke-width="2"/>
          <path d="M68,128 A52,13.52 0 0 1 172,128" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M68,128 A52,13.52 0 0 0 172,128" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="120" cy="76" r="52" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M68,76 A52,14.56 0 0 1 172,76" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M68,76 A52,14.56 0 0 0 172,76" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="120" cy="76" r="2.2" fill="white"/>
          <line x1="120" y1="76" x2="172" y2="76" stroke="#FFA726" stroke-width="1.6"/>
          <text x="146" y="56.44" font-size="12" fill="#FFA726" text-anchor="middle">r</text>
          <line x1="184" y1="24" x2="184" y2="128" stroke="#4FC3F7" stroke-width="1.4"/>
          <text x="188" y="80" font-size="12" fill="#4FC3F7" text-anchor="start">h = 2r</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) Surface area of sphere = 4πr²<br/>
          (ii) Cylinder: radius = r, height h = 2r<br/>
          CSA of cylinder = 2πrh = 2πr × 2r = 4πr²<br/>
          (iii) Ratio = 4πr² : 4πr² = 1 : 1<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 4πr² (ii) 4πr² (iii) 1 : 1</span></div>
        </div>
      </div>
`,
    "ex10.3": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFA726; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFA726; padding-left: 15px; margin-top: 15px; background: rgba(255, 167, 38, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFA726 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFA726 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 167, 38, 0.05) !important; border-left: 4px solid #FFA726 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFA726 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFA726 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFA726 !important; font-weight: 700; }
        strong { color: #FFA726 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFA726; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 167, 38, 0.05); color: #FFA726; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="step"><i>Assume π = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span>, unless stated otherwise.</i></div>

        <div class="question">1. Find the volume of the right circular cone with<br/>(i) radius 6 cm, height 7 cm<br/>(ii) radius 3.5 cm, height 12 cm</div>
        <svg viewBox="0 0 240 181.52" class="ex-img">
          <path d="M14,130 L62,74 L110,130 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M14,130 A48,11.52 0 0 1 110,130" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M14,130 A48,11.52 0 0 0 110,130" fill="none" stroke="white" stroke-width="2"/>
          <line x1="14" y1="130" x2="62" y2="74" stroke="white" stroke-width="2"/>
          <line x1="110" y1="130" x2="62" y2="74" stroke="white" stroke-width="2"/>
          <line x1="62" y1="74" x2="62" y2="130" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M69,130 L69,123 L62,123" fill="none" stroke="white" stroke-width="1"/>
          <text x="32" y="106" font-size="12" fill="#FFA726" text-anchor="end">7</text>
          <line x1="62" y1="130" x2="110" y2="130" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="62" cy="130" r="2.2" fill="white"/>
          <text x="86" y="156.52" font-size="12" fill="#FFA726" text-anchor="middle">6</text>
          <text x="62" y="173.52" font-size="11.5" fill="white" text-anchor="middle">(i) r 6 cm, h 7 cm</text>
          <path d="M145.92,130 L178,20 L210.08,130 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M145.92,130 A32.08,7.7 0 0 1 210.08,130" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M145.92,130 A32.08,7.7 0 0 0 210.08,130" fill="none" stroke="white" stroke-width="2"/>
          <line x1="145.92" y1="130" x2="178" y2="20" stroke="white" stroke-width="2"/>
          <line x1="210.08" y1="130" x2="178" y2="20" stroke="white" stroke-width="2"/>
          <line x1="178" y1="20" x2="178" y2="130" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M185,130 L185,123 L178,123" fill="none" stroke="white" stroke-width="1"/>
          <text x="155.96" y="79" font-size="12" fill="#FFA726" text-anchor="end">12</text>
          <line x1="178" y1="130" x2="210.08" y2="130" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="178" cy="130" r="2.2" fill="white"/>
          <text x="194.04" y="152.7" font-size="12" fill="#FFA726" text-anchor="middle">3.5</text>
          <text x="178" y="169.7" font-size="11.5" fill="white" text-anchor="middle">(ii) r 3.5 cm, h 12 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Volume of cone = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span>πr²h<br/>
          (i) <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 6 × 6 × 7 = 264 cm³<br/>
          (ii) <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 3.5 × 3.5 × 12 = 154 cm³<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 264 cm³ (ii) 154 cm³</span></div>
        </div>

        <div class="question">2. Find the capacity in litres of a conical vessel with<br/>(i) radius 7 cm, slant height 25 cm<br/>(ii) height 12 cm, slant height 13 cm</div>
        <svg viewBox="0 0 240 181" class="ex-img">
          <path d="M29.92,130 L62,20 L94.08,130 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M29.92,130 A32.08,7.7 0 0 1 94.08,130" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M29.92,130 A32.08,7.7 0 0 0 94.08,130" fill="none" stroke="white" stroke-width="2"/>
          <line x1="29.92" y1="130" x2="62" y2="20" stroke="white" stroke-width="2"/>
          <line x1="94.08" y1="130" x2="62" y2="20" stroke="white" stroke-width="2"/>
          <line x1="62" y1="20" x2="62" y2="130" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M69,130 L69,123 L62,123" fill="none" stroke="white" stroke-width="1"/>
          <text x="39.96" y="79" font-size="12" fill="#FFA726" text-anchor="end">?</text>
          <line x1="62" y1="130" x2="94.08" y2="130" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="62" cy="130" r="2.2" fill="white"/>
          <text x="78.04" y="152.7" font-size="12" fill="#FFA726" text-anchor="middle">7</text>
          <text x="85.04" y="79" font-size="12" fill="#FFA726" text-anchor="start">25</text>
          <text x="62" y="169.7" font-size="11.5" fill="white" text-anchor="middle">(i) r 7 cm, l 25 cm</text>
          <path d="M132.17,130 L178,20 L223.83,130 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M132.17,130 A45.83,11 0 0 1 223.83,130" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M132.17,130 A45.83,11 0 0 0 223.83,130" fill="none" stroke="white" stroke-width="2"/>
          <line x1="132.17" y1="130" x2="178" y2="20" stroke="white" stroke-width="2"/>
          <line x1="223.83" y1="130" x2="178" y2="20" stroke="white" stroke-width="2"/>
          <line x1="178" y1="20" x2="178" y2="130" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M185,130 L185,123 L178,123" fill="none" stroke="white" stroke-width="1"/>
          <text x="149.08" y="79" font-size="12" fill="#FFA726" text-anchor="end">12</text>
          <line x1="178" y1="130" x2="223.83" y2="130" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="178" cy="130" r="2.2" fill="white"/>
          <text x="200.92" y="156" font-size="12" fill="#FFA726" text-anchor="middle">?</text>
          <text x="207.92" y="79" font-size="12" fill="#FFA726" text-anchor="start">13</text>
          <text x="178" y="173" font-size="11.5" fill="white" text-anchor="middle">(ii) h 12 cm, l 13 cm</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) h = √(25² − 7²) = √(625 − 49) = √576 = 24 cm<br/>
          V = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × 7 × 24 = 1232 cm³ = 1.232 litres<br/>
          (ii) r = √(13² − 12²) = √(169 − 144) = √25 = 5 cm<br/>
          V = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 5 × 5 × 12 = <span class='frac'><span class='num'>2200</span><span class='den'>7</span></span> cm³ = <span class='frac'><span class='num'>11</span><span class='den'>35</span></span> litre<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 1.232 litres (ii) <span class='frac'><span class='num'>11</span><span class='den'>35</span></span> litre</span></div>
        </div>

        <div class="question">3. The height of a cone is 15 cm. If its volume is 1570 cm³, find the radius of the base. (Use π = 3.14)</div>
        <svg viewBox="0 0 240 192.5" class="ex-img">
          <path d="M45,130.5 L120,18 L195,130.5 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M45,130.5 A75,18 0 0 1 195,130.5" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M45,130.5 A75,18 0 0 0 195,130.5" fill="none" stroke="white" stroke-width="2"/>
          <line x1="45" y1="130.5" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="195" y1="130.5" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="18" x2="120" y2="130.5" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M127,130.5 L127,123.5 L120,123.5" fill="none" stroke="white" stroke-width="1"/>
          <text x="76.5" y="78.25" font-size="12" fill="#FFA726" text-anchor="end">h = 15 cm</text>
          <line x1="120" y1="130.5" x2="195" y2="130.5" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="130.5" r="2.2" fill="white"/>
          <text x="157.5" y="163.5" font-size="12" fill="#FFA726" text-anchor="middle">r = ?</text>
          <text x="120" y="184.5" font-size="11" fill="white" text-anchor="middle">Volume = 1570 cm³</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × 3.14 × r² × 15 = 1570<br/>
          15.7r² = 1570<br/>
          r² = 100, so r = 10 cm<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Radius = 10 cm</span></div>
        </div>

        <div class="question">4. If the volume of a right circular cone of height 9 cm is 48π cm³, find the diameter of its base.</div>
        <svg viewBox="0 0 240 205.87" class="ex-img">
          <path d="M62.22,148 L120,18 L177.78,148 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M62.22,148 A57.78,13.87 0 0 1 177.78,148" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M62.22,148 A57.78,13.87 0 0 0 177.78,148" fill="none" stroke="white" stroke-width="2"/>
          <line x1="62.22" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="177.78" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="18" x2="120" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M127,148 L127,141 L120,141" fill="none" stroke="white" stroke-width="1"/>
          <text x="85.11" y="87" font-size="12" fill="#FFA726" text-anchor="end">h = 9 cm</text>
          <line x1="120" y1="148" x2="177.78" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="148" r="2.2" fill="white"/>
          <text x="148.89" y="176.87" font-size="12" fill="#FFA726" text-anchor="middle">r = ?</text>
          <text x="120" y="197.87" font-size="11" fill="white" text-anchor="middle">Volume = 48π cm³</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × π × r² × 9 = 48π<br/>
          3r² = 48, so r² = 16 and r = 4 cm<br/>
          Diameter = 2 × 4 = 8 cm<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Diameter = 8 cm</span></div>
        </div>

        <div class="question">5. A conical pit of top diameter 3.5 m is 12 m deep. What is its capacity in kilolitres?</div>
        <svg viewBox="0 0 240 195.38" class="ex-img">
          <path d="M101.77,42.38 L120,167.38 L138.23,42.38 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <ellipse cx="120" cy="42.38" rx="18.23" ry="4.37" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <line x1="101.77" y1="42.38" x2="120" y2="167.38" stroke="white" stroke-width="2"/>
          <line x1="138.23" y1="42.38" x2="120" y2="167.38" stroke="white" stroke-width="2"/>
          <line x1="120" y1="167.38" x2="120" y2="42.38" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M127,42.38 L127,49.38 L120,49.38" fill="none" stroke="white" stroke-width="1"/>
          <text x="104.89" y="108.88" font-size="12" fill="#FFA726" text-anchor="end">h = 12 m</text>
          <line x1="120" y1="42.38" x2="138.23" y2="42.38" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="42.38" r="2.2" fill="white"/>
          <text x="129.11" y="32" font-size="12" fill="#FFA726" text-anchor="middle">r = 1.75 m</text>
          <text x="120" y="187.38" font-size="11" fill="white" text-anchor="middle">Conical pit (top diameter 3.5 m)</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>3.5</span><span class='den'>2</span></span> = 1.75 m, h = 12 m<br/>
          V = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 1.75 × 1.75 × 12 = 38.5 m³<br/>
          1 m³ = 1 kilolitre, so capacity = 38.5 kilolitres<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Capacity = 38.5 kilolitres</span></div>
        </div>

        <div class="question">6. The volume of a right circular cone is 9856 cm³. If the diameter of the base is 28 cm, find<br/>(i) height of the cone<br/>(ii) slant height of the cone<br/>(iii) curved surface area of the cone</div>
        <svg viewBox="0 0 240 201.1" class="ex-img">
          <path d="M82.08,148 L120,18 L157.92,148 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M82.08,148 A37.92,9.1 0 0 1 157.92,148" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M82.08,148 A37.92,9.1 0 0 0 157.92,148" fill="none" stroke="white" stroke-width="2"/>
          <line x1="82.08" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="157.92" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="18" x2="120" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M127,148 L127,141 L120,141" fill="none" stroke="white" stroke-width="1"/>
          <text x="95.04" y="87" font-size="12" fill="#FFA726" text-anchor="end">h = ?</text>
          <line x1="120" y1="148" x2="157.92" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="148" r="2.2" fill="white"/>
          <text x="138.96" y="172.1" font-size="12" fill="#FFA726" text-anchor="middle">r = 14 cm</text>
          <text x="145.96" y="87" font-size="12" fill="#FFA726" text-anchor="start">l = ?</text>
          <text x="120" y="193.1" font-size="11" fill="white" text-anchor="middle">Volume = 9856 cm³</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>28</span><span class='den'>2</span></span> = 14 cm<br/>
          (i) <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 14 × 14 × h = 9856<br/>
          <span class='frac'><span class='num'>616</span><span class='den'>3</span></span>h = 9856, so h = 48 cm<br/>
          (ii) l = √(48² + 14²) = √(2304 + 196) = √2500 = 50 cm<br/>
          (iii) CSA = πrl = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 14 × 50 = 2200 cm²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 48 cm (ii) 50 cm (iii) 2200 cm²</span></div>
        </div>

        <div class="question">7. A right triangle ABC with sides 5 cm, 12 cm and 13 cm is revolved about the side 12 cm. Find the volume of the solid so obtained.</div>
        <svg viewBox="0 0 240 205" class="ex-img">
          <path d="M65.83,148 L120,18 L174.17,148 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M65.83,148 A54.17,13 0 0 1 174.17,148" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M65.83,148 A54.17,13 0 0 0 174.17,148" fill="none" stroke="white" stroke-width="2"/>
          <line x1="65.83" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="174.17" y1="148" x2="120" y2="18" stroke="white" stroke-width="2"/>
          <line x1="120" y1="18" x2="120" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M127,148 L127,141 L120,141" fill="none" stroke="white" stroke-width="1"/>
          <text x="86.92" y="87" font-size="12" fill="#FFA726" text-anchor="end">12 cm</text>
          <line x1="120" y1="148" x2="174.17" y2="148" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="120" cy="148" r="2.2" fill="white"/>
          <text x="147.08" y="176" font-size="12" fill="#FFA726" text-anchor="middle">5 cm</text>
          <text x="154.08" y="87" font-size="12" fill="#FFA726" text-anchor="start">13 cm</text>
          <path d="M120,18 L120,148 L174.17,148 Z" fill="rgba(79,195,247,0.30)" stroke="#4FC3F7" stroke-width="2"/>
          <text x="120" y="197" font-size="11" fill="white" text-anchor="middle">Turned about the 12 cm side</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          The solid is a cone with h = 12 cm and r = 5 cm.<br/>
          V = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span>πr²h = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × π × 5 × 5 × 12 = 100π cm³<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Volume = 100π cm³</span></div>
        </div>

        <div class="question">8. If the triangle ABC in the Question 7 above is revolved about the side 5 cm, then find the volume of the solid so obtained. Find also the ratio of the volumes of the two solids obtained in Questions 7 and 8.</div>
        <svg viewBox="0 0 330 148.23" class="ex-img">
          <path d="M35,77.83 L145,32 L255,77.83 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M35,77.83 A110,26.4 0 0 1 255,77.83" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M35,77.83 A110,26.4 0 0 0 255,77.83" fill="none" stroke="white" stroke-width="2"/>
          <line x1="35" y1="77.83" x2="145" y2="32" stroke="white" stroke-width="2"/>
          <line x1="255" y1="77.83" x2="145" y2="32" stroke="white" stroke-width="2"/>
          <line x1="145" y1="32" x2="145" y2="77.83" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M152,77.83 L152,70.83 L145,70.83" fill="none" stroke="white" stroke-width="1"/>
          <line x1="267" y1="32" x2="267" y2="77.83" stroke="#FFA726" stroke-width="1.2"/>
          <line x1="263" y1="32" x2="271" y2="32" stroke="#FFA726" stroke-width="1.2"/>
          <line x1="263" y1="77.83" x2="271" y2="77.83" stroke="#FFA726" stroke-width="1.2"/>
          <text x="273" y="58.92" font-size="12" fill="#FFA726" text-anchor="start">5 cm</text>
          <line x1="145" y1="77.83" x2="255" y2="77.83" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="145" cy="77.83" r="2.2" fill="white"/>
          <text x="200" y="119.23" font-size="12" fill="#FFA726" text-anchor="middle">12 cm</text>
          <text x="82" y="48.92" font-size="12" fill="#FFA726" text-anchor="end">13 cm</text>
          <path d="M145,32 L145,77.83333333333333 L255,77.83333333333333 Z" fill="rgba(79,195,247,0.30)" stroke="#4FC3F7" stroke-width="2"/>
          <text x="145" y="140.23" font-size="11" fill="white" text-anchor="middle">Turned about the 5 cm side</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          The solid is a cone with h = 5 cm and r = 12 cm.<br/>
          V = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × π × 12 × 12 × 5 = 240π cm³<br/>
          Ratio = 100π : 240π = 5 : 12<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Volume = 240π cm³; ratio = 5 : 12</span></div>
        </div>

        <div class="question">9. A heap of wheat is in the form of a cone whose diameter is 10.5 m and height is 3 m. Find its volume. The heap is to be covered by canvas to protect it from rain. Find the area of the canvas required.</div>
        <svg viewBox="0 0 330 165.26" class="ex-img">
          <path d="M35,94.86 L145,32 L255,94.86 Z" fill="rgba(255,167,38,0.10)" stroke="none"/>
          <path d="M35,94.86 A110,26.4 0 0 1 255,94.86" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="4,3"/>
          <path d="M35,94.86 A110,26.4 0 0 0 255,94.86" fill="none" stroke="white" stroke-width="2"/>
          <line x1="35" y1="94.86" x2="145" y2="32" stroke="white" stroke-width="2"/>
          <line x1="255" y1="94.86" x2="145" y2="32" stroke="white" stroke-width="2"/>
          <line x1="145" y1="32" x2="145" y2="94.86" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <path d="M152,94.86 L152,87.86 L145,87.86" fill="none" stroke="white" stroke-width="1"/>
          <line x1="267" y1="32" x2="267" y2="94.86" stroke="#FFA726" stroke-width="1.2"/>
          <line x1="263" y1="32" x2="271" y2="32" stroke="#FFA726" stroke-width="1.2"/>
          <line x1="263" y1="94.86" x2="271" y2="94.86" stroke="#FFA726" stroke-width="1.2"/>
          <text x="273" y="67.43" font-size="12" fill="#FFA726" text-anchor="start">h = 3 m</text>
          <line x1="145" y1="94.86" x2="255" y2="94.86" stroke="#FFA726" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="145" cy="94.86" r="2.2" fill="white"/>
          <text x="200" y="136.26" font-size="12" fill="#FFA726" text-anchor="middle">r = 5.25 m</text>
          <text x="82" y="57.43" font-size="12" fill="#FFA726" text-anchor="end">l = ?</text>
          <text x="145" y="157.26" font-size="11" fill="white" text-anchor="middle">Heap of wheat</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>10.5</span><span class='den'>2</span></span> = 5.25 m, h = 3 m<br/>
          Volume = <span class='frac'><span class='num'>1</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 5.25 × 5.25 × 3 = 86.625 m³<br/>
          l = √(3² + 5.25²) = √(9 + 27.5625) = √36.5625 ≈ 6.05 m<br/>
          Canvas = CSA = πrl = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 5.25 × 6.05 = 99.825 m²<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Volume = 86.625 m³; canvas = 99.825 m² (approx.)</span></div>
        </div>
      </div>
`,
    "ex10.4": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #FFA726; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #FFA726; padding-left: 15px; margin-top: 15px; background: rgba(255, 167, 38, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #FFA726 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #FFA726 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(255, 167, 38, 0.05) !important; border-left: 4px solid #FFA726 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #FFA726 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #FFA726 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #FFA726 !important; font-weight: 700; }
        strong { color: #FFA726 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #FFA726; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(255, 167, 38, 0.05); color: #FFA726; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="ch-content">
        <div class="step"><i>Assume π = <span class='frac'><span class='num'>22</span><span class='den'>7</span></span>, unless stated otherwise.</i></div>

        <div class="question">1. Find the volume of a sphere whose radius is<br/>(i) 7 cm<br/>(ii) 0.63 m</div>
        <svg viewBox="0 0 240 112" class="ex-img">
          <circle cx="62" cy="50" r="40" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M22,50 A40,11.2 0 0 1 102,50" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M22,50 A40,11.2 0 0 0 102,50" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="62" cy="50" r="2.2" fill="white"/>
          <line x1="62" y1="50" x2="102" y2="50" stroke="#FFA726" stroke-width="1.6"/>
          <text x="62" y="104" font-size="11.5" fill="#FFA726" text-anchor="middle">(i) r = 7 cm</text>
          <circle cx="178" cy="50" r="40" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M138,50 A40,11.2 0 0 1 218,50" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M138,50 A40,11.2 0 0 0 218,50" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="178" cy="50" r="2.2" fill="white"/>
          <line x1="178" y1="50" x2="218" y2="50" stroke="#FFA726" stroke-width="1.6"/>
          <text x="178" y="104" font-size="11.5" fill="#FFA726" text-anchor="middle">(ii) r = 0.63 m</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Volume of sphere = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span>πr³<br/>
          (i) <span class='frac'><span class='num'>4</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 7 × 7 × 7 = <span class='frac'><span class='num'>4312</span><span class='den'>3</span></span> = 1437.33 cm³ (approx.)<br/>
          (ii) <span class='frac'><span class='num'>4</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 0.63 × 0.63 × 0.63 = 1.05 m³ (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 1437.33 cm³ (ii) 1.05 m³ (approx.)</span></div>
        </div>

        <div class="question">2. Find the amount of water displaced by a solid spherical ball of diameter<br/>(i) 28 cm<br/>(ii) 0.21 m</div>
        <svg viewBox="0 0 240 112" class="ex-img">
          <circle cx="62" cy="50" r="40" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M22,50 A40,11.2 0 0 1 102,50" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M22,50 A40,11.2 0 0 0 102,50" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="62" cy="50" r="2.2" fill="white"/>
          <line x1="22" y1="50" x2="102" y2="50" stroke="#FFA726" stroke-width="1.6"/>
          <text x="62" y="104" font-size="11.5" fill="#FFA726" text-anchor="middle">(i) d = 28 cm</text>
          <circle cx="178" cy="50" r="40" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M138,50 A40,11.2 0 0 1 218,50" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M138,50 A40,11.2 0 0 0 218,50" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="178" cy="50" r="2.2" fill="white"/>
          <line x1="138" y1="50" x2="218" y2="50" stroke="#FFA726" stroke-width="1.6"/>
          <text x="178" y="104" font-size="11.5" fill="#FFA726" text-anchor="middle">(ii) d = 0.21 m</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Water displaced = volume of the ball = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span>πr³<br/>
          (i) r = 14 cm: <span class='frac'><span class='num'>4</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 14 × 14 × 14 = <span class='frac'><span class='num'>34496</span><span class='den'>3</span></span> = 11498.67 cm³ (approx.)<br/>
          (ii) r = 0.105 m: <span class='frac'><span class='num'>4</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 0.105 × 0.105 × 0.105 = 0.004851 m³<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 11498.67 cm³ (approx.) (ii) 0.004851 m³</span></div>
        </div>

        <div class="question">3. The diameter of a metallic ball is 4.2 cm. What is the mass of the ball, if the density of the metal is 8.9 g per cm³?</div>
        <svg viewBox="0 0 240 150" class="ex-img">
          <circle cx="120" cy="68" r="58" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M62,68 A58,16.24 0 0 1 178,68" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M62,68 A58,16.24 0 0 0 178,68" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="120" cy="68" r="2.2" fill="white"/>
          <line x1="62" y1="68" x2="178" y2="68" stroke="#FFA726" stroke-width="1.6"/>
          <text x="120" y="46.76" font-size="12" fill="#FFA726" text-anchor="middle">d = 4.2 cm</text>
          <text x="120" y="144" font-size="11.5" fill="white" text-anchor="middle">Density 8.9 g per cm³</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>4.2</span><span class='den'>2</span></span> = 2.1 cm<br/>
          Volume = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 2.1 × 2.1 × 2.1 = 38.808 cm³<br/>
          Mass = Volume × Density = 38.808 × 8.9 = 345.39 g (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Mass = 345.39 g (approx.)</span></div>
        </div>

        <div class="question">4. The diameter of the moon is approximately one-fourth of the diameter of the earth. What fraction of the volume of the earth is the volume of the moon?</div>
        <svg viewBox="0 0 240 148" class="ex-img">
          <circle cx="70" cy="70" r="52" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M18,70 A52,14.56 0 0 1 122,70" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M18,70 A52,14.56 0 0 0 122,70" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="70" cy="70" r="2.2" fill="white"/>
          <circle cx="186" cy="70" r="13" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M173,70 A13,3.64 0 0 1 199,70" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M173,70 A13,3.64 0 0 0 199,70" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="186" cy="70" r="2.2" fill="white"/>
          <text x="70" y="140" font-size="11.5" fill="white" text-anchor="middle">Earth: d</text>
          <text x="186" y="102" font-size="11.5" fill="white" text-anchor="middle">Moon: </text>
          <text x="186" y="118" font-size="11.5" fill="#FFA726" text-anchor="middle">d ÷ 4</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Let the radius of the earth be r; then the radius of the moon is <span class='frac'><span class='num'>r</span><span class='den'>4</span></span>.<br/>
          Volume of moon = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span>π(<span class='frac'><span class='num'>r</span><span class='den'>4</span></span>)³ = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span>πr³ × <span class='frac'><span class='num'>1</span><span class='den'>64</span></span><br/>
          Volume of earth = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span>πr³<br/>
          So, <span class='frac'><span class='num'>Volume of moon</span><span class='den'>Volume of earth</span></span> = <span class='frac'><span class='num'>1</span><span class='den'>64</span></span><br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">The moon's volume is <span class='frac'><span class='num'>1</span><span class='den'>64</span></span> of the earth's volume</span></div>
        </div>

        <div class="question">5. How many litres of milk can a hemispherical bowl of diameter 10.5 cm hold?</div>
        <svg viewBox="0 0 240 156" class="ex-img">
          <path d="M40,50 A80,80 0 0 0 200,50" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <ellipse cx="120" cy="50" rx="80" ry="22.4" fill="rgba(255,167,38,0.18)" stroke="white" stroke-width="2"/>
          <circle cx="120" cy="50" r="2.2" fill="white"/>
          <line x1="120" y1="50" x2="200" y2="50" stroke="#FFA726" stroke-width="1.6"/>
          <text x="160" y="21.6" font-size="12" fill="#FFA726" text-anchor="middle">r = 5.25 cm</text>
          <text x="120" y="149" font-size="11.5" fill="white" text-anchor="middle">Bowl of milk</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>10.5</span><span class='den'>2</span></span> = 5.25 cm<br/>
          Volume = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span>πr³ = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 5.25 × 5.25 × 5.25 = 303.1875 cm³<br/>
          = <span class='frac'><span class='num'>303.1875</span><span class='den'>1000</span></span> litre = 0.303 litre (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">0.303 litre (approx.)</span></div>
        </div>

        <div class="question">6. A hemispherical tank is made up of an iron sheet 1 cm thick. If the inner radius is 1 m, then find the volume of the iron used to make the tank.</div>
        <svg viewBox="0 0 240 176" class="ex-img">
          <path d="M36.2,50 A83.8,83.8 0 0 0 203.8,50 L200,50 A80,80 0 0 1 40,50 Z" fill="rgba(255,167,38,0.35)" stroke="white" stroke-width="1.6"/>
          <ellipse cx="120" cy="50" rx="83.8" ry="23.46" fill="none" stroke="white" stroke-width="1.6"/>
          <ellipse cx="120" cy="50" rx="80" ry="22.4" fill="rgba(255,167,38,0.12)" stroke="white" stroke-width="1.4"/>
          <circle cx="120" cy="50" r="2.2" fill="white"/>
          <line x1="120" y1="50" x2="40" y2="50" stroke="#FFA726" stroke-width="1.6"/>
          <text x="80" y="20.54" font-size="11.5" fill="#FFA726" text-anchor="middle">inner r = 1 m</text>
          <line x1="120" y1="50" x2="203.8" y2="50" stroke="#4FC3F7" stroke-width="1.6"/>
          <text x="120" y="151.8" font-size="11.5" fill="#4FC3F7" text-anchor="middle">outer R = 1.01 m</text>
          <text x="120" y="170" font-size="10.5" fill="white" text-anchor="middle">Sheet 1 cm thick (gap enlarged to be visible)</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Inner radius r = 1 m, outer radius R = 1 m + 0.01 m = 1.01 m<br/>
          Volume of iron = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span>π(R³ − r³)<br/>
          = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × (1.030301 − 1)<br/>
          = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 0.030301 = 0.06348 m³ (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Volume of iron = 0.06348 m³ (approx.)</span></div>
        </div>

        <div class="question">7. Find the volume of a sphere whose surface area is 154 cm².</div>
        <svg viewBox="0 0 240 150" class="ex-img">
          <circle cx="120" cy="68" r="58" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M62,68 A58,16.24 0 0 1 178,68" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M62,68 A58,16.24 0 0 0 178,68" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="120" cy="68" r="2.2" fill="white"/>
          <line x1="120" y1="68" x2="178" y2="68" stroke="#FFA726" stroke-width="1.6"/>
          <text x="149" y="46.76" font-size="12" fill="#FFA726" text-anchor="middle">r = ?</text>
          <text x="120" y="144" font-size="11.5" fill="white" text-anchor="middle">Surface area = 154 cm²</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          4πr² = 154, so r² = <span class='frac'><span class='num'>154 × 7</span><span class='den'>4 × 22</span></span> = 12.25 and r = 3.5 cm<br/>
          Volume = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 3.5 × 3.5 × 3.5 = <span class='frac'><span class='num'>539</span><span class='den'>3</span></span> = 179.67 cm³ (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Volume = 179.67 cm³ (approx.)</span></div>
        </div>

        <div class="question">8. A dome of a building is in the form of a hemisphere. From inside, it was white-washed at the cost of Rs 4989.60. If the cost of white-washing is Rs 20 per square metre, find the<br/>(i) inside surface area of the dome,<br/>(ii) volume of the air inside the dome.</div>
        <svg viewBox="0 0 240 148" class="ex-img">
          <path d="M48,84 A72,72 0 0 1 192,84" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M48,84 A72,20.16 0 0 1 192,84" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M48,84 A72,20.16 0 0 0 192,84" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="120" cy="84" r="2.2" fill="white"/>
          <line x1="120" y1="84" x2="192" y2="84" stroke="#FFA726" stroke-width="1.6"/>
          <text x="156" y="119.16" font-size="12" fill="#FFA726" text-anchor="middle">r = ?</text>
          <text x="120" y="140" font-size="11.5" fill="white" text-anchor="middle">Dome (inside white-washed)</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) Inside surface area = <span class='frac'><span class='num'>4989.60</span><span class='den'>20</span></span> = 249.48 m²<br/>
          (ii) 2πr² = 249.48<br/>
          2 × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × r² = 249.48, so r² = <span class='frac'><span class='num'>249.48 × 7</span><span class='den'>44</span></span> = 39.69 and r = 6.3 m<br/>
          Volume of air = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span>πr³ = <span class='frac'><span class='num'>2</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 6.3 × 6.3 × 6.3 = 523.9 m³ (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) 249.48 m² (ii) 523.9 m³ (approx.)</span></div>
        </div>

        <div class="question">9. Twenty seven solid iron spheres, each of radius r and surface area S are melted to form a sphere with surface area S′. Find the<br/>(i) radius r′ of the new sphere,<br/>(ii) ratio of S and S′.</div>
        <svg viewBox="0 0 240 122" class="ex-img">
          <circle cx="18" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="31.5" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="45" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="58.5" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="72" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="85.5" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="99" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="112.5" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="126" cy="42" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="18" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="31.5" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="45" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="58.5" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="72" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="85.5" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="99" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="112.5" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="126" cy="64" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="18" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="31.5" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="45" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="58.5" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="72" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="85.5" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="99" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="112.5" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <circle cx="126" cy="86" r="8" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="1.2"/>
          <text x="72" y="112" font-size="11" fill="white" text-anchor="middle">27 spheres, radius r</text>
          <path d="M140,64 L158,64" stroke="#FFA726" stroke-width="2"/>
          <path d="M154,59 L160,64 L154,69" fill="none" stroke="#FFA726" stroke-width="2"/>
          <circle cx="196" cy="64" r="31.2" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M164.8,64 A31.2,8.74 0 0 1 227.2,64" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M164.8,64 A31.2,8.74 0 0 0 227.2,64" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="196" cy="64" r="2.2" fill="white"/>
          <text x="196" y="112" font-size="11" fill="#FFA726" text-anchor="middle">r′ = ?</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          (i) Volume of new sphere = volume of 27 spheres<br/>
          <span class='frac'><span class='num'>4</span><span class='den'>3</span></span>πr′³ = 27 × <span class='frac'><span class='num'>4</span><span class='den'>3</span></span>πr³<br/>
          r′³ = 27r³, so r′ = 3r<br/>
          (ii) S : S′ = 4πr² : 4π(3r)² = r² : 9r² = 1 : 9<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(i) r′ = 3r (ii) S : S′ = 1 : 9</span></div>
        </div>

        <div class="question">10. A capsule of medicine is in the shape of a sphere of diameter 3.5 mm. How much medicine (in mm³) is needed to fill this capsule?</div>
        <svg viewBox="0 0 240 150" class="ex-img">
          <circle cx="120" cy="68" r="58" fill="rgba(255,167,38,0.10)" stroke="white" stroke-width="2"/>
          <path d="M62,68 A58,16.24 0 0 1 178,68" fill="none" stroke="white" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="M62,68 A58,16.24 0 0 0 178,68" fill="none" stroke="white" stroke-width="1.2"/>
          <circle cx="120" cy="68" r="2.2" fill="white"/>
          <line x1="62" y1="68" x2="178" y2="68" stroke="#FFA726" stroke-width="1.6"/>
          <text x="120" y="46.76" font-size="12" fill="#FFA726" text-anchor="middle">d = 3.5 mm</text>
          <text x="120" y="144" font-size="11.5" fill="white" text-anchor="middle">Spherical capsule</text>
        </svg>
        <div class="solution">
          <strong>Solution:</strong><br/>
          r = <span class='frac'><span class='num'>3.5</span><span class='den'>2</span></span> = 1.75 mm<br/>
          Volume = <span class='frac'><span class='num'>4</span><span class='den'>3</span></span> × <span class='frac'><span class='num'>22</span><span class='den'>7</span></span> × 1.75 × 1.75 × 1.75 = 22.46 mm³ (approx.)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Medicine needed = 22.46 mm³ (approx.)</span></div>
        </div>
      </div>
`,
  },
};
