import { ChapterContent } from "../types";

export const c9Math4: ChapterContent = {
  id: "c9-math-4",
  number: 4,
  title: "Coordinate Geometry",
  introduction:
    "In this chapter, we will learn how to locate the position of a point in a plane using two perpendicular lines. This system is known as the Cartesian system, named after Rene Descartes.",
  definitions: [
    {
      term: "Abscissa",
      description:
        "The x-coordinate of a point, representing its distance from the y-axis.",
    },
    {
      term: "Ordinate",
      description:
        "The y-coordinate of a point, representing its distance from the x-axis.",
    },
    {
      term: "Origin",
      description: "The intersection of the x and y axes, coordinates (0, 0).",
    },
  ],
  keyPoints: [
    "The horizontal line is the x-axis and the vertical line is the y-axis.",
    "The coordinate axes divide the plane into four quadrants.",
    "The coordinates of a point on the x-axis are of the form (x, 0).",
    "The coordinates of a point on the y-axis are of the form (0, y).",
  ],
  formulas: [],
  crux: [
    "Quadrant I: (+, +), Quadrant II: (-, +), Quadrant III: (-, -), Quadrant IV: (+, -).",
  ],
  exercises: [
    { id: "ex4-1", name: "Ex 4.1", questions: [] },
    { id: "ex4-2", name: "Ex 4.2", questions: [] },
  ],
  examples: [],
  mcqs: [
    {
      id: "m1",
      question: "The point (−3, 5) lies in which quadrant?",
      options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
      correctAnswer: "B",
    },
    {
      id: "m2",
      question: "The distance of the point (4, 3) from the x-axis is:",
      options: ["4 units", "3 units", "7 units", "5 units"],
      correctAnswer: "B",
    },
    {
      id: "m3",
      question: "The coordinates of the origin are:",
      options: ["(1, 1)", "(1, 0)", "(0, 1)", "(0, 0)"],
      correctAnswer: "D",
    },
    {
      id: "m4",
      question: "Abscissa of a point is positive in:",
      options: [
        "Quadrants I and II",
        "Quadrants I and IV",
        "Quadrant I only",
        "Quadrant II only",
      ],
      correctAnswer: "B",
    },
    {
      id: "m5",
      question: "The point (0, −7) lies on:",
      options: ["x-axis", "y-axis", "Quadrant III", "Quadrant IV"],
      correctAnswer: "B",
    },
    {
      id: "m6",
      question: "Ordinate of all points on the x-axis is:",
      options: ["0", "1", "Any number", "−1"],
      correctAnswer: "A",
    },
    {
      id: "m7",
      question: "The points (−5, 2) and (2, −5) lie in:",
      options: [
        "Same quadrant",
        "II and III quadrants respectively",
        "II and IV quadrants respectively",
        "IV and II quadrants respectively",
      ],
      correctAnswer: "C",
    },
    {
      id: "m8",
      question: "The distance of the point (0, 8) from the origin is:",
      options: ["0 units", "8 units", "4 units", "64 units"],
      correctAnswer: "B",
    },
    {
      id: "m9",
      question: "Which point lies to the left of the y-axis?",
      options: ["(2, 0)", "(−2, 0)", "(0, 2)", "(0, −2)"],
      correctAnswer: "B",
    },
    {
      id: "m10",
      question:
        "The perpendicular distance of the point P(3, 4) from the y-axis is:",
      options: ["3", "4", "5", "7"],
      correctAnswer: "A",
    },
  ],
  summary: [
    "The Cartesian plane is formed by two perpendicular lines.",
    "Every point is represented by (x, y).",
    "Signs in quadrants: I(+,+), II(-,+), III(-,-), IV(+,-).",
  ],
  isHtmlView: true,
  htmlOverview: `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #42A5F5; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #42A5F5; padding-left: 15px; margin-top: 15px; background: rgba(66, 165, 245, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #42A5F5 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #42A5F5 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(66, 165, 245, 0.05) !important; border-left: 4px solid #42A5F5 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #42A5F5 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #42A5F5 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #42A5F5 !important; font-weight: 700; }
        strong { color: #42A5F5 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #42A5F5; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(66, 165, 245, 0.05); color: #42A5F5; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="main-wrapper">
      <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <p class="step">You have already studied how to locate a point on a number line. In this chapter, you will learn how to describe the position of a point in a plane using the <strong>Cartesian System</strong>. This concept was developed by the French mathematician <strong>Ren&eacute; Descartes</strong>.</p>
      </div>
      <div class="content-box">
        <div class="section-title">2. The Cartesian System</div>
        <p class="step">We use two perpendicular number lines to identify points. The horizontal line is the <strong>x-axis</strong> (X'OX) and the vertical line is the <strong>y-axis</strong> (Y'OY). The point of intersection is called the <strong>Origin (O)</strong>. Its coordinates are (0, 0).</p>
        <p class="step">The distance of a point from the y-axis is called its <strong>x-coordinate</strong> or <strong>abscissa</strong>. The distance from the x-axis is called its <strong>y-coordinate</strong> or <strong>ordinate</strong>. For example, for the point P(3, 4), the abscissa is 3 and the ordinate is 4. Points to the left of the y-axis have a negative x-coordinate, and points below the x-axis have a negative y-coordinate.</p>
      </div>
      <div class="content-box">
        <div class="section-title">3. Quadrants</div>
        <p class="step">The axes divide the plane into four parts called <strong>Quadrants</strong>:</p>
        <ul class="step" style="padding-left: 20px;">
          <li><strong>Quadrant I:</strong> Both x and y are positive (+, +). Example: (2, 3)</li>
          <li><strong>Quadrant II:</strong> x is negative, y is positive (−, +). Example: (−2, 3)</li>
          <li><strong>Quadrant III:</strong> Both x and y are negative (−, −). Example: (−2, −3)</li>
          <li><strong>Quadrant IV:</strong> x is positive, y is negative (+, −). Example: (2, −3)</li>
        </ul>
      </div>
    </div>
`,
  htmlExercises: {
    "ex4-1": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #42A5F5; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #42A5F5; padding-left: 15px; margin-top: 15px; background: rgba(66, 165, 245, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #42A5F5 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #42A5F5 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(66, 165, 245, 0.05) !important; border-left: 4px solid #42A5F5 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #42A5F5 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #42A5F5 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #42A5F5 !important; font-weight: 700; }
        strong { color: #42A5F5 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #42A5F5; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(66, 165, 245, 0.05); color: #42A5F5; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">1. How will you describe the position of a table lamp on your study table to another person?</div>
        <div class="solution">
          <strong>Solution:</strong><br/>
          Take the table top as a plane.<br/>
          Take two perpendicular edges of the table as the two axes.<br/>
          Distance of the lamp from the first edge = x cm<br/>
          Distance of the lamp from the second edge = y cm<br/>
          Example: 15 cm from one edge and 25 cm from the other ⇒ position (15, 25)<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">The position of the lamp is (x, y).</span></div>
        </div>
        
        <div class="question">2. (Street Plan) : A city has two main roads which cross each other at the centre of the city. These two roads are along the North-South direction and East-West direction. All the other streets of the city run parallel to these roads and are 200 m apart. There are about 5 streets in each direction. Using 1cm = 200 m, draw a model of the city on your notebook. Represent the roads/streets by single lines. There are many cross-streets in your model. A particular cross-street is made by two streets, one running in the North - South direction and another in the East - West direction. Each cross street is referred to in the following manner : If the 2nd street running in the North - South direction and 5th in the East - West direction meet at some crossing, then we will call this cross-street (2, 5). Using this convention, find:</div>
        <div class="solution">
          <span class="subpart">(i) how many cross - streets can be referred to as (4, 3).</span><br/>
          <strong>Solution:</strong><br/>
          (4, 3) means: 4th street running North–South and 3rd street running East–West.<br/>
          These two streets meet at only one point.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Only one cross-street can be referred to as (4, 3).</span></div><br/>
          <br/>
          <span class="subpart">(ii) how many cross - streets can be referred to as (3, 4).</span><br/>
          <strong>Solution:</strong><br/>
          (3, 4) means: 3rd street running North–South and 4th street running East–West.<br/>
          These two streets meet at only one point.<br/>
          (3, 4) and (4, 3) are different cross-streets.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Only one cross-street can be referred to as (3, 4).</span></div>
        </div>
      </div>
`,
    "ex4-2": `
      <style>
        .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.85em; margin: 6px 2px; line-height: 1.2; }
        .frac .num { border-bottom: 1px solid currentColor; padding: 0 2px; }
        .frac .den { padding: 0 2px; }
        .container { padding: 15px; color: #e0e0e0; font-family: 'Inter', sans-serif; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .question { color: #42A5F5; font-weight: 600; margin-top: 25px; margin-bottom: 12px; text-align: justify; font-size: 16px; line-height: 1.8; }
        .solution { border-left: 3px solid #42A5F5; padding-left: 15px; margin-top: 15px; background: rgba(66, 165, 245, 0.05); padding: 10px 15px; border-radius: 0 8px 8px 0; text-align: justify; font-size: 16px; line-height: 1.8; margin-bottom: 25px; }
        .subpart { color: #e0e0e0; margin-top: 10px; margin-bottom: 5px; font-size: 16px; line-height: 1.8; margin-left: 10px; }
        
        /* Overview styles */
        .section-title { color: #42A5F5 !important; font-weight: 600; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
        .sub-header { color: #42A5F5 !important; font-weight: 600; margin-top: 15px; margin-bottom: 8px; font-size: 16px; }
        .formula-box { background: rgba(66, 165, 245, 0.05) !important; border-left: 4px solid #42A5F5 !important; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-size: 16px; line-height: 1.8; }
        h2 { color: #42A5F5 !important; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600; }
        h3 { color: #42A5F5 !important; font-size: 16px; margin-top: 15px; margin-bottom: 8px; font-weight: 600; }
        .highlight { color: #42A5F5 !important; font-weight: 700; }
        strong { color: #42A5F5 !important; font-weight: 600; }
        
        /* Utility classes for step-by-step */
        .step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .sol-step { margin-bottom: 8px; font-size: 16px; line-height: 1.8; }
        .ans-highlight { color: #42A5F5; font-weight: 700; }
        .svg-container { display: flex; justify-content: center; margin: 15px 0; width: 100%; }
        
        /* Table styles */
        table { width: 100%; border-collapse: collapse; margin: 15px auto; font-size: 15px; color: #e0e0e0; text-align: center; }
        th { background: rgba(66, 165, 245, 0.05); color: #42A5F5; font-weight: 600; padding: 10px 8px; border: 1px solid rgba(255, 255, 255, 0.15); text-align: center; }
        td { padding: 8px; border: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        
        /* Bar graph styles */
        svg rect { stroke: rgba(255, 255, 255, 0.8); stroke-width: 0.5px; }
      </style>
<div class="container">
        <div class="question">1. Write the answer of each of the following questions:</div>
        <div class="solution">
          <span class="subpart">(i) What is the name of horizontal and the vertical lines drawn to determine the position of any point in the Cartesian plane?</span><br/>
          <strong>Solution:</strong><br/>
          Horizontal line: x-axis<br/>
          Vertical line: y-axis<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">x-axis and y-axis respectively</span></div><br/>
          <br/>
          <span class="subpart">(ii) What is the name of each part of the plane formed by these two lines?</span><br/>
          <strong>Solution:</strong><br/>
          The x-axis and the y-axis divide the plane into four parts.<br/>
          Each part is called a quadrant.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Quadrant</span></div><br/>
          <br/>
          <span class="subpart">(iii) Write the name of the point where these two lines intersect.</span><br/>
          <strong>Solution:</strong><br/>
          The x-axis and the y-axis meet at the point (0, 0).<br/>
          This point is called the origin.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">Origin</span></div>
        </div>

        <div class="question">2. See Fig. 4.14, and write the following:</div>
        <img src="data:image/png;base64,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
" class="ex-img" alt="NCERT Figure 4.14">
        <div class="solution">
          <span class="subpart">(i) The coordinates of B.</span><br/>
          <strong>Solution:</strong><br/>
          B is 5 units to the left of the y-axis ⇒ x = −5<br/>
          B is 2 units above the x-axis ⇒ y = 2<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(−5, 2)</span></div><br/>
          <br/>
          <span class="subpart">(ii) The coordinates of C.</span><br/>
          <strong>Solution:</strong><br/>
          C is 5 units to the right of the y-axis ⇒ x = 5<br/>
          C is 5 units below the x-axis ⇒ y = −5<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(5, −5)</span></div><br/>
          <br/>
          <span class="subpart">(iii) The point identified by the coordinates (-3, -5).</span><br/>
          <strong>Solution:</strong><br/>
          x = −3: 3 units to the left of the y-axis<br/>
          y = −5: 5 units below the x-axis<br/>
          The point at this position is E.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">E</span></div><br/>
          <br/>
          <span class="subpart">(iv) The point identified by the coordinates (2, -4).</span><br/>
          <strong>Solution:</strong><br/>
          x = 2: 2 units to the right of the y-axis<br/>
          y = −4: 4 units below the x-axis<br/>
          The point at this position is G.<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">G</span></div><br/>
          <br/>
          <span class="subpart">(v) The abscissa of the point D.</span><br/>
          <strong>Solution:</strong><br/>
          Abscissa = x-coordinate<br/>
          D is 6 units to the right of the y-axis ⇒ x = 6<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">6</span></div><br/>
          <br/>
          <span class="subpart">(vi) The ordinate of the point H.</span><br/>
          <strong>Solution:</strong><br/>
          Ordinate = y-coordinate<br/>
          H is 3 units below the x-axis ⇒ y = −3<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">−3</span></div><br/>
          <br/>
          <span class="subpart">(vii) The coordinates of the point L.</span><br/>
          <strong>Solution:</strong><br/>
          L lies on the y-axis ⇒ x = 0<br/>
          L is 5 units above the x-axis ⇒ y = 5<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(0, 5)</span></div><br/>
          <br/>
          <span class="subpart">(viii) The coordinates of the point M.</span><br/>
          <strong>Solution:</strong><br/>
          M lies on the x-axis ⇒ y = 0<br/>
          M is 3 units to the left of the y-axis ⇒ x = −3<br/>
          <div class="ans-box"><span class="ans-label">✓ Final Answer: </span><span class="ans-val">(−3, 0)</span></div>
        </div>
      </div>
`,
  },
};
