import { ChapterContent } from "../types";

export const c9Math4: ChapterContent = {
  id: "c9-math-4",
  number: 4,
  title: "Coordinate Geometry",
  introduction: "Coordinate Geometry is a branch of mathematics that uses a coordinate system to represent points, lines, and shapes in a plane. It was developed by Rene Descartes.",
  definitions: [
    { term: "Cartesian Plane", description: "A two-dimensional plane formed by the intersection of two perpendicular number lines (X-axis and Y-axis)." },
    { term: "Origin", description: "The point where the X-axis and Y-axis intersect, represented as (0, 0)." },
    { term: "Quadrants", description: "The four regions into which the Cartesian plane is divided by the axes." }
  ],
  keyPoints: [
    "The horizontal line is the X-axis and the vertical line is the Y-axis.",
    "The coordinates of a point are written as (x, y), where x is the abscissa and y is the ordinate.",
    "The plane is divided into four quadrants: I (+, +), II (-, +), III (-, -), and IV (+, -)."
  ],
  formulas: [],
  crux: [
    "Location of a point in the plane is unique.",
    "Points on the X-axis have y-coordinate zero: (x, 0).",
    "Points on the Y-axis have x-coordinate zero: (0, y)."
  ],
  exercises: [
    { id: "ex4-1", name: "Exercise 4.1", questions: [] },
    { id: "ex4-2", name: "Exercise 4.2", questions: [] },
    { id: "ex4-3", name: "Exercise 4.3", questions: [] }
  ],
  examples: [],
  mcqs: [
    {
      question: "The point (-3, 5) lies in which quadrant?",
      options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
      answer: "Quadrant II",
      explanation: "In Quadrant II, x is negative and y is positive. Since -3 is negative and 5 is positive, the point is in Quadrant II."
    },
    {
      question: "The distance of the point (4, 3) from the x-axis is:",
      options: ["4 units", "3 units", "7 units", "5 units"],
      answer: "3 units",
      explanation: "The distance from the x-axis is given by the absolute value of the y-coordinate (ordinate). Here y = 3."
    },
    {
      question: "The coordinates of the origin are:",
      options: ["(1, 1)", "(1, 0)", "(0, 1)", "(0, 0)"],
      answer: "(0, 0)",
      explanation: "The origin is the point of intersection of the x and y axes, where both coordinates are zero."
    },
    {
      question: "Abscissa of a point is positive in:",
      options: ["Quadrants I and II", "Quadrants I and IV", "Quadrant I only", "Quadrant II only"],
      answer: "Quadrants I and IV",
      explanation: "Abscissa (x-coordinate) is positive on the right side of the y-axis, which corresponds to Quadrants I and IV."
    },
    {
      question: "The point (0, -7) lies on:",
      options: ["x-axis", "y-axis", "Quadrant III", "Quadrant IV"],
      answer: "y-axis",
      explanation: "A point with x-coordinate zero always lies on the y-axis."
    },
    {
      question: "Ordinate of all points on the x-axis is:",
      options: ["0", "1", "Any number", "-1"],
      answer: "0",
      explanation: "For any point on the x-axis, the vertical distance from the axis is zero, hence y = 0."
    },
    {
      question: "The points (-5, 2) and (2, -5) lie in:",
      options: ["Same quadrant", "II and III quadrants respectively", "II and IV quadrants respectively", "IV and II quadrants respectively"],
      answer: "II and IV quadrants respectively",
      explanation: "(-5, 2) is (-, +) which is Q II. (2, -5) is (+, -) which is Q IV."
    },
    {
      question: "The distance of the point (0, 8) from the origin is:",
      options: ["0 units", "8 units", "4 units", "64 units"],
      answer: "8 units",
      explanation: "Distance = sqrt(x^2 + y^2) = sqrt(0^2 + 8^2) = 8."
    },
    {
      question: "Which point lies to the left of the y-axis?",
      options: ["(2, 0)", "(-2, 0)", "(0, 2)", "(0, -2)"],
      answer: "(-2, 0)",
      explanation: "Points to the left of the y-axis have negative x-coordinates."
    },
    {
      question: "The perpendicular distance of the point P(3, 4) from the y-axis is:",
      options: ["3", "4", "5", "7"],
      answer: "3",
      explanation: "The perpendicular distance from the y-axis is the absolute value of the x-coordinate."
    }
  ],
  summary: [
    "The Cartesian plane consists of two perpendicular axes.",
    "Every point is uniquely identified by an ordered pair (x, y).",
    "The axes divide the plane into four quadrants."
  ],
  isHtmlView: true,
  htmlOverview: `
    <style>
      .ov-container { font-family: 'Inter', sans-serif; color: #E0E0E0; line-height: 1.6; text-align: justify; padding: 20px; }
      .ov-title { color: #AA00FF; font-size: 24px; margin-bottom: 15px; text-align: center; }
      .ov-section { margin-bottom: 25px; background: rgba(170, 0, 255, 0.05); padding: 15px; border-radius: 12px; border: 1px solid rgba(66, 165, 245, 0.2); }
      .ov-header { color: #AA00FF; font-size: 20px; margin-bottom: 10px; border-bottom: 2px solid #AA00FF; display: inline-block; padding-bottom: 2px; }
      .ov-text { font-size: 16px; margin-bottom: 10px; }
      .ov-list { list-style-type: none; padding-left: 0; }
      .ov-list li { margin-bottom: 8px; position: relative; padding-left: 20px; }
      .ov-list li::before { content: "•"; color: #AA00FF; position: absolute; left: 0; font-weight: normal; }
      .ov-highlight { color: #AA00FF; font-weight: normal; }
    </style>
    <div class="ov-container">
      <div class="ov-title">Coordinate Geometry - Overview</div>
      <div class="ov-section">
        <div class="ov-header">1. Introduction</div>
        <p class="ov-text">Coordinate Geometry, also known as Analytical Geometry, is the study of geometry using a coordinate system. This concept was introduced by the French mathematician <span class="ov-highlight">R&eacute;n&eacute; Descartes</span>. It allows us to locate the position of a point in a plane using two perpendicular lines.</p>
      </div>
      <div class="ov-section">
        <div class="ov-header">2. The Cartesian System</div>
        <p class="ov-text">In a plane, we draw two perpendicular lines. The horizontal line is called the <span class="ov-highlight">X-axis</span> and the vertical line is called the <span class="ov-highlight">Y-axis</span>. The point where they intersect is called the <span class="ov-highlight">Origin (O)</span>.</p>
        <ul class="ov-list">
          <li>The distance of a point from the y-axis is its <span class="ov-highlight">x-coordinate</span> or <span class="ov-highlight">abscissa</span>.</li>
          <li>The distance of a point from the x-axis is its <span class="ov-highlight">y-coordinate</span> or <span class="ov-highlight">ordinate</span>.</li>
        </ul>
      </div>
      <div class="ov-section">
        <div class="ov-header">3. Quadrants</div>
        <p class="ov-text">The axes divide the plane into four parts called quadrants, numbered I, II, III, and IV anticlockwise from the top right.</p>
        <ul class="ov-list">
          <li><span class="ov-highlight">Quadrant I:</span> Both x and y are positive (+, +).</li>
          <li><span class="ov-highlight">Quadrant II:</span> x is negative, y is positive (-, +).</li>
          <li><span class="ov-highlight">Quadrant III:</span> Both x and y are negative (-, -).</li>
          <li><span class="ov-highlight">Quadrant IV:</span> x is positive, y is negative (+, -).</li>
        </ul>
      </div>
    </div>
  `,
  htmlExercises: {
    "ex4-1": `
      <style>
        .ex-container { font-family: 'Inter', sans-serif; color: #E0E0E0; padding: 15px; text-align: justify; }
        .ex-q-box { margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
        .ex-q-label { color: #AA00FF; font-size: 18px; margin-bottom: 10px; display: block; }
        .ex-q-text { margin-bottom: 15px; font-size: 16px; }
        .ex-ans-box { background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-left: 4px solid #AA00FF; }
        .ex-ans-label { color: #AA00FF; margin-bottom: 8px; display: block; }
        .ex-step { margin-bottom: 5px; }
        .ex-img { max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0; border: 1px solid rgba(66, 165, 245, 0.2); }
        .ex-sub-q { color: #AA00FF; margin-top: 10px; display: block; }
      </style>
      <div class="ex-container">
        <div class="ex-q-box">
          <span class="ex-q-label">Question 1</span>
          <p class="ex-q-text">Write the answer to each of the following questions:</p>
          <div class="ex-ans-box">
            <span class="ex-ans-label">Solution:</span>
            <div class="ex-step"><span class="ex-sub-q">(i) What is the name of horizontal and the vertical lines drawn to determine the position of any point in the Cartesian plane?</span></div>
            <div class="ex-step">The name of horizontal lines is the <span class="ov-highlight">x-axis</span> and the name of vertical lines is the <span class="ov-highlight">y-axis</span>.</div>
            <div class="ex-step"><span class="ex-sub-q">(ii) What is the name of each part of the plane formed by these two lines?</span></div>
            <div class="ex-step">The name of each part of the plane formed by these two lines is a <span class="ov-highlight">quadrant</span>.</div>
            <div class="ex-step"><span class="ex-sub-q">(iii) Write the name of the point where these two lines intersect.</span></div>
            <div class="ex-step">The name of the point where these two lines intersect is the <span class="ov-highlight">origin</span>.</div>
          </div>
        </div>

        <div class="ex-q-box">
          <span class="ex-q-label">Question 2</span>
          <p class="ex-q-text">See Fig. 4.2 and write the following:</p>
          <img src="data:image/png;base64,%%GRAPH1%%" class="ex-img" alt="Cartesian Plane Fig 4.2">
          <div class="ex-ans-box">
            <span class="ex-ans-label">Solution:</span>
            <div class="ex-step"><span class="ex-sub-q">(i) The coordinates of B.</span> -> (-5, 2)</div>
            <div class="ex-step"><span class="ex-sub-q">(ii) The coordinates of C.</span> -> (5, -5)</div>
            <div class="ex-step"><span class="ex-sub-q">(iii) The point identified by the coordinates (-3, -5).</span> -> E</div>
            <div class="ex-step"><span class="ex-sub-q">(iv) The point identified by the coordinates (2, -4).</span> -> G</div>
            <div class="ex-step"><span class="ex-sub-q">(v) The abscissa of the point D.</span> -> 6</div>
            <div class="ex-step"><span class="ex-sub-q">(vi) The ordinate of the point H.</span> -> -3</div>
            <div class="ex-step"><span class="ex-sub-q">(vii) The coordinates of the point L.</span> -> (0, 5)</div>
            <div class="ex-step"><span class="ex-sub-q">(viii) The coordinates of the point M.</span> -> (-3, 0)</div>
          </div>
        </div>
      </div>
    `,
    "ex4-2": `
      <style>
        .ex-container { font-family: 'Inter', sans-serif; color: #E0E0E0; padding: 15px; text-align: justify; }
        .ex-q-box { margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
        .ex-q-label { color: #AA00FF; font-size: 18px; margin-bottom: 10px; display: block; }
        .ex-q-text { margin-bottom: 15px; font-size: 16px; }
        .ex-ans-box { background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-left: 4px solid #AA00FF; }
        .ex-ans-label { color: #AA00FF; margin-bottom: 8px; display: block; }
        .ex-step { margin-bottom: 5px; }
        .ex-img { max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0; border: 1px solid rgba(66, 165, 245, 0.2); }
        .ex-sub-q { color: #AA00FF; margin-top: 10px; display: block; }
      </style>
      <div class="ex-container">
        <div class="ex-q-box">
          <span class="ex-q-label">Question 1</span>
          <p class="ex-q-text">In which quadrant or on which axis do each of the points (-2, 4), (3, -1), (-1, 0), (1, 2) and (-3, -5) lie? Verify your answer by locating them on the Cartesian plane.</p>
          <div class="ex-ans-box">
            <span class="ex-ans-label">Solution:</span>
            <div class="ex-step">The points are located as follows:</div>
            <ul class="ov-list">
              <li>(-2, 4) lies in <span class="ov-highlight">Quadrant II</span>.</li>
              <li>(3, -1) lies in <span class="ov-highlight">Quadrant IV</span>.</li>
              <li>(-1, 0) lies on the <span class="ov-highlight">negative x-axis</span>.</li>
              <li>(1, 2) lies in <span class="ov-highlight">Quadrant I</span>.</li>
              <li>(-3, -5) lies in <span class="ov-highlight">Quadrant III</span>.</li>
            </ul>
            <img src="data:image/png;base64,%%GRAPH2%%" class="ex-img" alt="Plotted Points Graph">
          </div>
        </div>

        <div class="ex-q-box">
          <span class="ex-q-label">Question 2</span>
          <p class="ex-q-text">Plot the points (x, y) given in the following table on the plane, choosing suitable units of distance on the axes.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0; text-align: center; border: 1px solid #AA00FF;">
            <tr style="background: rgba(170, 0, 255, 0.2);">
              <th style="border: 1px solid #AA00FF; padding: 8px;">x</th>
              <td style="border: 1px solid #AA00FF; padding: 8px;">-2</td>
              <td style="border: 1px solid #AA00FF; padding: 8px;">-1</td>
              <td style="border: 1px solid #AA00FF; padding: 8px;">0</td>
              <td style="border: 1px solid #AA00FF; padding: 8px;">1</td>
              <td style="border: 1px solid #AA00FF; padding: 8px;">3</td>
            </tr>
            <tr>
              <th style="border: 1px solid #AA00FF; padding: 8px;">y</th>
              <td style="border: 1px solid #AA00FF; padding: 8px;">8</td>
              <td style="border: 1px solid #AA00FF; padding: 8px;">7</td>
              <td style="border: 1px solid #AA00FF; padding: 8px;">-1.25</td>
              <td style="border: 1px solid #AA00FF; padding: 8px;">3</td>
              <td style="border: 1px solid #AA00FF; padding: 8px;">-1</td>
            </tr>
          </table>
          <div class="ex-ans-box">
            <span class="ex-ans-label">Solution:</span>
            <div class="ex-step">To plot these points, we draw the x-axis and y-axis. We choose 1 unit = 1 cm on both axes.</div>
            <div class="ex-step">1. For (-2, 8): Move 2 units left, 8 units up.</div>
            <div class="ex-step">2. For (-1, 7): Move 1 unit left, 7 units up.</div>
            <div class="ex-step">3. For (0, -1.25): Stay on y-axis, move 1.25 units down.</div>
            <div class="ex-step">4. For (1, 3): Move 1 unit right, 3 units up.</div>
            <div class="ex-step">5. For (3, -1): Move 3 units right, 1 unit down.</div>
          </div>
        </div>
      </div>
    `,
    "ex4-3": `
      <style>
        .ex-container { font-family: 'Inter', sans-serif; color: #E0E0E0; padding: 15px; text-align: justify; }
        .ex-q-box { margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
        .ex-q-label { color: #AA00FF; font-size: 18px; margin-bottom: 10px; display: block; }
        .ex-q-text { margin-bottom: 15px; font-size: 16px; }
        .ex-ans-box { background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-left: 4px solid #AA00FF; }
        .ex-ans-label { color: #AA00FF; margin-bottom: 8px; display: block; }
        .ex-step { margin-bottom: 5px; }
      </style>
      <div class="ex-container">
        <div class="ex-q-box">
          <span class="ex-q-label">Practice Question</span>
          <p class="ex-q-text">Find the coordinates of a point whose abscissa is 3 and ordinate is -4. In which quadrant does it lie?</p>
          <div class="ex-ans-box">
            <span class="ex-ans-label">Solution:</span>
            <div class="ex-step">Abscissa (x) = 3</div>
            <div class="ex-step">Ordinate (y) = -4</div>
            <div class="ex-step">Coordinates = <span class="ov-highlight">(3, -4)</span></div>
            <div class="ex-step">Since x is positive and y is negative, the point lies in <span class="ov-highlight">Quadrant IV</span>.</div>
          </div>
        </div>
      </div>
    `
  }
};
