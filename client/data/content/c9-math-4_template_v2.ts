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
    { id: "ex4-1", name: "Exercise 4.1", questions: [] },
    { id: "ex4-2", name: "Exercise 4.2", questions: [] },
    { id: "ex4-3", name: "Exercise 4.3", questions: [] },
  ],
  examples: [],
  mcqs: [
    {
      question: "The point (-3, 5) lies in which quadrant?",
      options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
      answer: "Quadrant II",
      explanation:
        "Since x is negative and y is positive, the point is in the second quadrant.",
    },
    {
      question: "The distance of the point (4, 3) from the x-axis is:",
      options: ["4 units", "3 units", "7 units", "5 units"],
      answer: "3 units",
      explanation:
        "Distance from the x-axis is the absolute value of the y-coordinate.",
    },
    {
      question: "The coordinates of the origin are:",
      options: ["(1, 1)", "(1, 0)", "(0, 1)", "(0, 0)"],
      answer: "(0, 0)",
      explanation: "The origin is where the axes intersect.",
    },
    {
      question: "Abscissa of a point is positive in:",
      options: [
        "Quadrants I and II",
        "Quadrants I and IV",
        "Quadrant I only",
        "Quadrant II only",
      ],
      answer: "Quadrants I and IV",
      explanation:
        "The x-coordinate is positive on the right side of the y-axis.",
    },
    {
      question: "The point (0, -7) lies on:",
      options: ["x-axis", "y-axis", "Quadrant III", "Quadrant IV"],
      answer: "y-axis",
      explanation: "A point with x = 0 lies on the y-axis.",
    },
    {
      question: "Ordinate of all points on the x-axis is:",
      options: ["0", "1", "Any number", "-1"],
      answer: "0",
      explanation:
        "Any point on the x-axis has a height of 0 relative to the axis.",
    },
    {
      question: "The points (-5, 2) and (2, -5) lie in:",
      options: [
        "Same quadrant",
        "II and III quadrants respectively",
        "II and IV quadrants respectively",
        "IV and II quadrants respectively",
      ],
      answer: "II and IV quadrants respectively",
      explanation: "(-5, 2) is (-, +) while (2, -5) is (+, -).",
    },
    {
      question: "The distance of the point (0, 8) from the origin is:",
      options: ["0 units", "8 units", "4 units", "64 units"],
      answer: "8 units",
      explanation: "Distance = sqrt(0^2 + 8^2) = 8.",
    },
    {
      question: "Which point lies to the left of the y-axis?",
      options: ["(2, 0)", "(-2, 0)", "(0, 2)", "(0, -2)"],
      answer: "(-2, 0)",
      explanation:
        "Points with negative x-coordinates lie to the left of the y-axis.",
    },
    {
      question:
        "The perpendicular distance of the point P(3, 4) from the y-axis is:",
      options: ["3", "4", "5", "7"],
      answer: "3",
      explanation: "Distance from y-axis is the x-coordinate.",
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
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
      .main-wrapper { padding: 15px; width: 100%; color: #fff !important; font-size: 18px !important; background: transparent !important; }
      .content-box { background: rgba(255,255,255,0.03) !important; border: 1px solid rgba(66, 165, 245, 0.2) !important; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
      .section-title { color: #AA00FF !important; font-weight: 600; font-size: 1.3em; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-family: 'Nunito', sans-serif !important; }
      .step { margin-bottom: 12px; font-size: 1em; color: #e0e0e0 !important; line-height: 1.6; text-align: justify; }
      strong { color: #AA00FF !important; font-weight: 600; }
    </style>
    <div class="main-wrapper">
      <div class="content-box">
        <div class="section-title">1. Introduction</div>
        <p class="step">You have already studied how to locate a point on a number line. In this chapter, you will learn how to describe the position of a point in a plane using the <strong>Cartesian System</strong>. This concept was developed by the French mathematician <strong>R&eacute;n&eacute; Descartes</strong>.</p>
      </div>
      <div class="content-box">
        <div class="section-title">2. The Cartesian System</div>
        <p class="step">We use two perpendicular number lines to identify points. The horizontal line is the <strong>x-axis</strong> (X'OX) and the vertical line is the <strong>y-axis</strong> (Y'OY). The point of intersection is called the <strong>Origin (O)</strong>.</p>
        <p class="step">The distance of a point from the y-axis is called its <strong>x-coordinate</strong> or <strong>abscissa</strong>. The distance from the x-axis is called its <strong>y-coordinate</strong> or <strong>ordinate</strong>.</p>
      </div>
      <div class="content-box">
        <div class="section-title">3. Quadrants</div>
        <p class="step">The axes divide the plane into four parts called <strong>Quadrants</strong>:</p>
        <ul class="step" style="padding-left: 20px;">
          <li><strong>Quadrant I:</strong> Both x and y are positive (+, +).</li>
          <li><strong>Quadrant II:</strong> x is negative, y is positive (-, +).</li>
          <li><strong>Quadrant III:</strong> Both x and y are negative (-, -).</li>
          <li><strong>Quadrant IV:</strong> x is positive, y is negative (+, -).</li>
        </ul>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex4-1": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        .question { color: #42A5F5; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #AA00FF; font-weight: bold; }
        strong { color: #AA00FF !important; font-weight: bold; }
      </style>
      <div class="container">
        <div class="question">Q1. How will you describe the position of a table lamp on your study table to another person?</div>
        <div class="solution">
          To describe the position, consider the table as a 2D plane. Choose two perpendicular edges of the table as the axes. Let the lamp be at a point. Measure its distance from the shorter edge (say x cm) and the longer edge (say y cm). The position of the lamp can then be written as <strong>(x, y)</strong>.
        </div>
        <div class="question">Q2. Street Plan: A city has two main roads which cross each other at the centre of the city. These two roads are along the North-South direction and East-West direction... (Simplified)</div>
        <div class="solution">
          This problem illustrates how a coordinate system works. By representing streets as grid lines, any location can be uniquely identified by a pair of coordinates. For example, the 2nd street running North-South and the 5th street running East-West meet at point <strong>(2, 5)</strong>. Only one such point exists for each unique pair.
        </div>
      </div>
    `,
    "ex4-2": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        .question { color: #42A5F5; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #AA00FF; font-weight: bold; }
        .ex-img { max-width: 100%; border-radius: 8px; margin: 15px 0; border: 1px solid rgba(66, 165, 245, 0.2); }
        strong { color: #AA00FF !important; font-weight: bold; }
      </style>
      <div class="container">
        <div class="question">Q1. Write the answer to each of the following questions:</div>
        <div class="solution">
          <span class="subpart">(i) What is the name of horizontal and the vertical lines drawn to determine the position of any point in the Cartesian plane?</span><br/>
          The horizontal line is called the <strong>x-axis</strong> and the vertical line is called the <strong>y-axis</strong>.<br/><br/>
          <span class="subpart">(ii) What is the name of each part of the plane formed by these two lines?</span><br/>
          Each part is called a <strong>Quadrant</strong>.<br/><br/>
          <span class="subpart">(iii) Write the name of the point where these two lines intersect.</span><br/>
          The point is called the <strong>Origin</strong>.
        </div>

        <div class="question">Q2. See Fig. 3.11 and write the following:</div>
        <img src="data:image/png;base64,%%GRAPH1%%" class="ex-img" alt="NCERT Figure 3.11">
        <div class="solution">
          <span class="subpart">(i) The coordinates of B:</span> <strong>(-5, 2)</strong><br/>
          <span class="subpart">(ii) The coordinates of C:</span> <strong>(5, -5)</strong><br/>
          <span class="subpart">(iii) The point identified by the coordinates (-3, -5):</span> <strong>E</strong><br/>
          <span class="subpart">(iv) The point identified by the coordinates (2, -4):</span> <strong>G</strong><br/>
          <span class="subpart">(v) The abscissa of the point D:</span> <strong>6</strong><br/>
          <span class="subpart">(vi) The ordinate of the point H:</span> <strong>-3</strong><br/>
          <span class="subpart">(vii) The coordinates of the point L:</span> <strong>(0, 5)</strong><br/>
          <span class="subpart">(viii) The coordinates of the point M:</span> <strong>(-3, 0)</strong>
        </div>
      </div>
    `,
    "ex4-3": `
      <style>
        .container { padding: 15px; color: white; font-family: 'Noto Sans', sans-serif; font-size: 18px; line-height: 1.7; display: block; background: transparent; }
        .question { color: #42A5F5; font-weight: bold; margin-top: 30px; text-align: justify; }
        .solution { margin-top: 15px; padding-left: 12px; border-left: 2px solid #3B3B52; text-align: justify; }
        .subpart { color: #AA00FF; font-weight: bold; }
        .ex-img { max-width: 100%; border-radius: 8px; margin: 15px 0; border: 1px solid rgba(66, 165, 245, 0.2); }
        strong { color: #AA00FF !important; font-weight: bold; }
      </style>
      <div class="container">
        <div class="question">Q1. In which quadrant or on which axis do each of the points (-2, 4), (3, -1), (-1, 0), (1, 2) and (-3, -5) lie? Verify your answer by locating them on the Cartesian plane.</div>
        <div class="solution">
          <span class="subpart">Verification:</span><br/>
          - (-2, 4) lies in <strong>Quadrant II</strong>.<br/>
          - (3, -1) lies in <strong>Quadrant IV</strong>.<br/>
          - (-1, 0) lies on the <strong>Negative X-axis</strong>.<br/>
          - (1, 2) lies in <strong>Quadrant I</strong>.<br/>
          - (-3, -5) lies in <strong>Quadrant III</strong>.<br/>
          <img src="data:image/png;base64,%%GRAPH2%%" class="ex-img" alt="Plotted Points">
        </div>

        <div class="question">Q2. Plot the points (x, y) given in the following table on the plane, choosing suitable units of distance on the axes.</div>
        <table style="width:100%; border-collapse: collapse; border: 1px solid rgba(66, 165, 245, 0.2); margin: 15px 0; text-align: center;">
          <tr style="background: rgba(170, 0, 255, 0.2);">
            <th style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">x</th>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">-2</td>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">-1</td>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">0</td>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">1</td>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">3</td>
          </tr>
          <tr>
            <th style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">y</th>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">8</td>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">7</td>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">-1.25</td>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">3</td>
            <td style="border: 1px solid rgba(66, 165, 245, 0.2); padding: 8px;">-1</td>
          </tr>
        </table>
        <div class="solution">
          To plot these points, we draw the axes and mark the units. 
          1. For <strong>(-2, 8)</strong>, move 2 units left and 8 units up.
          2. For <strong>(0, -1.25)</strong>, stay on the y-axis and move 1.25 units down.
          3. Continue for other points. The result is a set of distinct points in the plane.
        </div>
      </div>
    `,
  },
};
