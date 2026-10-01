const { THEME_COLOR, frac } = require("./ch11_common");

function buildOverview() {
  const svg3DAxes = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 460 260" style="width: 100%; max-width: 420px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Z Axis (Vertical) -->
        <line x1="210" y1="20" x2="210" y2="230" stroke="#00E676" stroke-width="2.2" marker-end="url(#arr-z)"/>
        <text x="218" y="25" font-size="13" font-weight="800" fill="#00E676">Z</text>
        <text x="218" y="240" font-size="12" font-weight="700" fill="#64748B">Z'</text>

        <!-- Y Axis (Rightward Horizontal) -->
        <line x1="50" y1="130" x2="420" y2="130" stroke="#0284C7" stroke-width="2.2" marker-end="url(#arr-y)"/>
        <text x="425" y="135" font-size="13" font-weight="800" fill="#0284C7">Y</text>
        <text x="35" y="135" font-size="12" font-weight="700" fill="#64748B">Y'</text>

        <!-- X Axis (Oblique forward-left) -->
        <line x1="210" y1="130" x2="90" y2="225" stroke="#EA580C" stroke-width="2.2"/>
        <line x1="210" y1="130" x2="310" y2="50" stroke="#64748B" stroke-width="1.5" stroke-dasharray="3,3"/>
        <text x="75" y="235" font-size="13" font-weight="800" fill="#EA580C">X</text>
        <text x="315" y="45" font-size="12" font-weight="700" fill="#64748B">X'</text>

        <!-- Origin O(0, 0, 0) -->
        <circle cx="210" cy="130" r="4.5" fill="#0F172A"/>
        <text x="190" y="145" font-size="12" font-weight="800" fill="#0F172A">O(0,0,0)</text>

        <!-- Projection Cuboid for Point P(x, y, z) -->
        <g stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="3,3" fill="none">
          <!-- base on xy plane -->
          <line x1="160" y1="170" x2="270" y2="170"/>
          <line x1="270" y1="170" x2="320" y2="130"/>
          <line x1="160" y1="170" x2="210" y2="130"/>
          <!-- vertical pillars -->
          <line x1="270" y1="170" x2="270" y2="80"/>
          <line x1="160" y1="170" x2="160" y2="80"/>
          <!-- top face -->
          <line x1="160" y1="80" x2="270" y2="80"/>
          <line x1="270" y1="80" x2="320" y2="40"/>
          <line x1="210" y1="40" x2="320" y2="40"/>
          <line x1="160" y1="80" x2="210" y2="40"/>
        </g>

        <!-- Point P(x, y, z) -->
        <circle cx="270" cy="80" r="5" fill="#D81B60"/>
        <text x="278" y="78" font-size="12" font-weight="800" fill="#D81B60">P(x, y, z)</text>

        <defs>
          <marker id="arr-z" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#00E676"/>
          </marker>
          <marker id="arr-y" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284C7"/>
          </marker>
        </defs>
      </svg>
    </div>
    <div class="diagram-caption">💡 Three-Dimensional Cartesian Coordinate Frame: Mutually perpendicular X, Y, and Z axes intersecting at O(0, 0, 0).</div>
  </div>`;

  const octantTableHtml = `
  <div style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 14px 0; border-radius: 8px; border: 1.5px solid rgba(255, 61, 0, 0.35); background: rgba(15, 23, 42, 0.85);">
    <table class="octant-table">
      <thead>
        <tr>
          <th>Octant &rarr;</th>
          <th>I</th>
          <th>II</th>
          <th>III</th>
          <th>IV</th>
          <th>V</th>
          <th>VI</th>
          <th>VII</th>
          <th>VIII</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>x-sign</b></td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>+</td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>+</td>
        </tr>
        <tr>
          <td><b>y-sign</b></td>
          <td>+</td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>+</td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
        </tr>
        <tr>
          <td><b>z-sign</b></td>
          <td>+</td>
          <td>+</td>
          <td>+</td>
          <td>+</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>&minus;</td>
          <td>&minus;</td>
        </tr>
      </tbody>
    </table>
  </div>`;

  return `
<style>
  .frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-size: 0.95em; margin: 2px 6px; line-height: 1.25; }
  .frac .num { border-bottom: 1.5px solid currentColor; padding: 1px 4px; text-align: center; }
  .frac .den { padding: 1px 4px; text-align: center; }
  .q-card { background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(255, 255, 255, 0.15); border-left: 4px solid ${THEME_COLOR}; border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.25); }
  .q-title { font-size: 18px; font-weight: 800; color: ${THEME_COLOR}; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
  .q-text { font-size: 15.5px; color: #FFFFFF; line-height: 2.1; margin-bottom: 14px; font-weight: 500; text-align: left !important; }
  .sol-box { background: rgba(0, 0, 0, 0.35); border-left: 3.5px solid ${THEME_COLOR}; border-radius: 8px; padding: 14px 16px; margin-top: 12px; text-align: left !important; }
  .sol-title { font-size: 15.5px; font-weight: 800; color: #E2E8F0; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
  .sol-step { font-size: 15px; color: #E2E8F0; line-height: 2.35; text-align: left !important; }
  .sol-step div { margin-top: 6px; margin-bottom: 6px; text-align: left !important; }
  .diagram-wrapper { background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255, 61, 0, 0.4); border-radius: 10px; padding: 14px 16px; margin: 18px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center; }
  .diagram-svg-container { display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 480px; }
  .diagram-caption { color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500; }
  .octant-table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 14px; color: #FFFFFF; }
  .octant-table th, .octant-table td { border: 1px solid rgba(255, 255, 255, 0.18); padding: 9px 12px; text-align: center; white-space: nowrap; }
  .octant-table th { background: rgba(255, 61, 0, 0.25); color: #FF6E40; font-weight: 700; white-space: nowrap; }
</style>

<div style="padding: 4px 2px;">
  <!-- Hero Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 61, 0, 0.25), rgba(0, 0, 0, 0.4)); border: 1.5px solid ${THEME_COLOR}; border-radius: 14px; padding: 18px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 22px; font-weight: 800; color: ${THEME_COLOR}; margin-bottom: 6px;">
      ✦ Chapter 11: Introduction to Three Dimensional Geometry
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.5;">
      Class 11 NCERT Mathematics &bull; Comprehensive Reference Guide &amp; Master Formula Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ 1. Quick Glossary &amp; Fundamental Principles</div>
    <div class="q-text">
      To locate a point in three-dimensional physical space, we choose a fixed point <i>O</i> as the origin and three mutually perpendicular lines passing through <i>O</i> as the coordinate axes: the <b>X-axis</b>, <b>Y-axis</b>, and <b>Z-axis</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Essential Geometric Axioms:</div>
      <div class="sol-step">
        <div>• <b style="color: ${THEME_COLOR};">Coordinate Planes:</b> The three planes determined by pairs of axes are the <i>XY</i>-plane (<i>z</i> = 0), <i>YZ</i>-plane (<i>x</i> = 0), and <i>ZX</i>-plane (<i>y</i> = 0).</div>
        <div>• <b style="color: ${THEME_COLOR};">Spatial Octants:</b> These three mutually perpendicular planes partition all 3D space into <b>eight</b> regions termed octants.</div>
        <div>• <b style="color: ${THEME_COLOR};">Coordinates of a Point:</b> An ordered triplet (<i>x</i>, <i>y</i>, <i>z</i>) where <i>x</i>, <i>y</i>, <i>z</i> represent directed perpendicular distances from the <i>YZ</i>, <i>ZX</i>, and <i>XY</i> planes respectively.</div>
      </div>
    </div>
  </div>

  ${svg3DAxes}

  <!-- Section 2: Spatial Octant Sign Table -->
  <div class="q-card">
    <div class="q-title">✦ 2. The Eight Spatial Octants Reference Matrix</div>
    <div class="q-text">
      The sign conventions of coordinates across the eight octants are systematically defined as follows:
    </div>
    ${octantTableHtml}
  </div>

  <!-- Master Revision Formula Cheat Sheet -->
  <div class="q-card" style="border-color: ${THEME_COLOR};">
    <div class="q-title" style="color: ${THEME_COLOR}; font-size: 19px;">✦ 3. Master Revision Formula Cheat Sheet</div>
    <div style="font-size: 15px; color: #FFFFFF; line-height: 2.3;">
      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">1. 3D Distance Formula:</b><br/>
        The distance <i>d</i> between points <i>P</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>z</i><sub>1</sub>) and <i>Q</i>(<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>, <i>z</i><sub>2</sub>) is:<br/>
        &nbsp;&nbsp;<b>d = &radic;[(x<sub>2</sub> &minus; x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> &minus; y<sub>1</sub>)<sup>2</sup> + (z<sub>2</sub> &minus; z<sub>1</sub>)<sup>2</sup>]</b><br/>
        &bull; Distance from origin <i>O</i>(0, 0, 0) to <i>P</i>(<i>x</i>, <i>y</i>, <i>z</i>): <b>OP = &radic;[x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>]</b>
      </div>

      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">2. 3D Section Formula:</b><br/>
        The coordinates of point <i>R</i> dividing the line segment <i>PQ</i> in ratio <i>m</i> : <i>n</i> are:<br/>
        &bull; <b>Internal Division:</b><br/>
        &nbsp;&nbsp;<b>R = (${frac("mx<sub>2</sub> + nx<sub>1</sub>", "m + n")}, ${frac("my<sub>2</sub> + ny<sub>1</sub>", "m + n")}, ${frac("mz<sub>2</sub> + nz<sub>1</sub>", "m + n")})</b><br/>
        &bull; <b>External Division:</b><br/>
        &nbsp;&nbsp;<b>R' = (${frac("mx<sub>2</sub> &minus; nx<sub>1</sub>", "m &minus; n")}, ${frac("my<sub>2</sub> &minus; ny<sub>1</sub>", "m &minus; n")}, ${frac("mz<sub>2</sub> &minus; nz<sub>1</sub>", "m &minus; n")})</b>
      </div>

      <div style="margin-bottom: 6px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">3. Midpoint, Trisection &amp; Centroid Formulas:</b><br/>
        &bull; <b>Midpoint of PQ:</b> <b>M = (${frac("x<sub>1</sub> + x<sub>2</sub>", "2")}, ${frac("y<sub>1</sub> + y<sub>2</sub>", "2")}, ${frac("z<sub>1</sub> + z<sub>2</sub>", "2")})</b><br/>
        &bull; <b>Centroid of &Delta;ABC:</b> <b>G = (${frac("x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub>", "3")}, ${frac("y<sub>1</sub> + y<sub>2</sub> + y<sub>3</sub>", "3")}, ${frac("z<sub>1</sub> + z<sub>2</sub> + z<sub>3</sub>", "3")})</b><br/>
        &bull; <b>Centroid of Tetrahedron ABCD:</b> <b>G = (${frac("x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub> + x<sub>4</sub>", "4")}, ${frac("y<sub>1</sub> + y<sub>2</sub> + y<sub>3</sub> + y<sub>4</sub>", "4")}, ${frac("z<sub>1</sub> + z<sub>2</sub> + z<sub>3</sub> + z<sub>4</sub>", "4")})</b>
      </div>
    </div>
  </div>
</div>`;
}

function buildMCQs() {
  return [
    // Q1 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-1",
      question: "The coordinate planes in three-dimensional space divide the whole space into how many octants?",
      options: [
        "A):   4",
        "B):   8",
        "C):   6",
        "D):   12"
      ],
      correctAnswer: "B",
      explanation: "Three mutually perpendicular coordinate planes (XY, YZ, ZX) divide the entire 3D space into exactly eight distinct octants."
    },
    // Q2 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-2",
      question: "Any point lying on the x-axis has coordinates of the form:",
      options: [
        "A):   (x, 0, 0)",
        "B):   (0, y, 0)",
        "C):   (0, 0, z)",
        "D):   (x, y, 0)"
      ],
      correctAnswer: "A",
      explanation: "On the x-axis, both the y-coordinate and z-coordinate are identically zero, so any point has the coordinates (x, 0, 0)."
    },
    // Q3 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-3",
      question: "The equation of the XY-plane in three-dimensional Cartesian coordinates is:",
      options: [
        "A):   x = 0",
        "B):   y = 0",
        "C):   z = 0",
        "D):   x + y = 0"
      ],
      correctAnswer: "C",
      explanation: "Every point in the XY-plane has its perpendicular height along the z-axis equal to zero, so the equation is z = 0."
    },
    // Q4 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-4",
      question: "In which octant does the point (−4, 2, 5) lie?",
      options: [
        "A):   Octant I",
        "B):   Octant II",
        "C):   Octant III",
        "D):   Octant VI"
      ],
      correctAnswer: "B",
      explanation: "For (−4, 2, 5), x < 0, y > 0, and z > 0. The sign pattern (−, +, +) corresponds to Octant II."
    },
    // Q5 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-5",
      question: "In which octant does the point (4, −2, −5) lie?",
      options: [
        "A):   Octant IV",
        "B):   Octant V",
        "C):   Octant VII",
        "D):   Octant VIII"
      ],
      correctAnswer: "D",
      explanation: "For (4, −2, −5), x > 0, y < 0, and z < 0. The sign pattern (+, −, −) belongs to Octant VIII."
    },
    // Q6 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-6",
      question: "The distance of a point P(x, y, z) from the origin (0, 0, 0) is given by:",
      options: [
        "A):   √(x² + y² + z²)",
        "B):   x + y + z",
        "C):   √(x + y + z)",
        "D):   x² + y² + z²"
      ],
      correctAnswer: "A",
      explanation: "By the 3D distance formula from the origin, OP = √((x − 0)² + (y − 0)² + (z − 0)²) = √(x² + y² + z²)."
    },
    // Q7 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-7",
      question: "The midpoint of the line segment joining (x₁, y₁, z₁) and (x₂, y₂, z₂) is:",
      options: [
        "A):   ((x₁ − x₂)/2, (y₁ − y₂)/2, (z₁ − z₂)/2)",
        "B):   ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)",
        "C):   (x₁ + x₂, y₁ + y₂, z₁ + z₂)",
        "D):   ((x₁ + x₂)/3, (y₁ + y₂)/3, (z₁ + z₂)/3)"
      ],
      correctAnswer: "B",
      explanation: "The midpoint formula averages each coordinate pair: ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2)."
    },
    // Q8 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-8",
      question: "The perpendicular distance of the point P(3, 4, 5) from the XY-plane is:",
      options: [
        "A):   3",
        "B):   4",
        "C):   √(3² + 4²)",
        "D):   5"
      ],
      correctAnswer: "D",
      explanation: "The perpendicular distance of any point (x, y, z) from the XY-plane is given by |z|. Here, |z| = |5| = 5."
    },
    // Q9 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-9",
      question: "The perpendicular distance of the point P(2, 3, 4) from the x-axis is:",
      options: [
        "A):   2",
        "B):   √(2² + 3²)",
        "C):   5",
        "D):   √(3² + 4²)"
      ],
      correctAnswer: "D",
      explanation: "The foot of the perpendicular on the x-axis is (2, 0, 0). The distance is √((2−2)² + (3−0)² + (4−0)²) = √(3² + 4²) = √25 = 5."
    },
    // Q10 (Tier 1 - Recall)
    {
      id: "c11-math-11-mcq-10",
      question: "The coordinates of the centroid of a triangle with vertices (x₁, y₁, z₁), (x₂, y₂, z₂), and (x₃, y₃, z₃) are:",
      options: [
        "A):   ((x₁+x₂+x₃)/2, (y₁+y₂+y₃)/2, (z₁+z₂+z₃)/2)",
        "B):   (x₁+x₂+x₃, y₁+y₂+y₃, z₁+z₂+z₃)",
        "C):   ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3)",
        "D):   ((x₁+x₂)/3, (y₁+y₂)/3, (z₁+z₂)/3)"
      ],
      correctAnswer: "C",
      explanation: "The centroid of a triangle in 3D is the arithmetic mean of the coordinates of its three vertices: ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3, (z₁+z₂+z₃)/3)."
    },
    // Q11 (Tier 2 - Moderate)
    {
      id: "c11-math-11-mcq-11",
      question: "Find the distance between the points (2, 3, 5) and (4, 3, 1).",
      options: [
        "A):   2√5",
        "B):   √20",
        "C):   4",
        "D):   5"
      ],
      correctAnswer: "A",
      explanation: "d = √((4 − 2)² + (3 − 3)² + (1 − 5)²) = √(4 + 0 + 16) = √20 = 2√5 units."
    },
    // Q12 (Tier 2 - Moderate)
    {
      id: "c11-math-11-mcq-12",
      question: "Find the distance between (−3, 7, 2) and (2, 4, −1).",
      options: [
        "A):   7",
        "B):   √34",
        "C):   √43",
        "D):   √41"
      ],
      correctAnswer: "C",
      explanation: "d = √((2 − (−3))² + (4 − 7)² + (−1 − 2)²) = √(5² + (−3)² + (−3)²) = √(25 + 9 + 9) = √43 units."
    },
    // Q13 (Tier 2 - Moderate)
    {
      id: "c11-math-11-mcq-13",
      question: "The ratio in which the point Q(5, 4, −6) divides the line segment joining P(3, 2, −4) and R(9, 8, −10) is:",
      options: [
        "A):   2 : 1",
        "B):   1 : 2",
        "C):   1 : 3",
        "D):   3 : 1"
      ],
      correctAnswer: "B",
      explanation: "Using (9k + 3)/(k + 1) = 5 ⇒ 9k + 3 = 5k + 5 ⇒ 4k = 2 ⇒ k = 1/2. Thus Q divides PR in the ratio 1 : 2 internally."
    },
    // Q14 (Tier 2 - Moderate)
    {
      id: "c11-math-11-mcq-14",
      question: "In what ratio does the YZ-plane divide the line segment joining (−2, 4, 7) and (3, −5, 8)?",
      options: [
        "A):   3 : 2",
        "B):   1 : 2",
        "C):   2 : 1",
        "D):   2 : 3"
      ],
      correctAnswer: "D",
      explanation: "On the YZ-plane, x = 0. Using section formula: (3k − 2)/(k + 1) = 0 ⇒ 3k = 2 ⇒ k = 2/3. The ratio is 2 : 3."
    },
    // Q15 (Tier 2 - Moderate)
    {
      id: "c11-math-11-mcq-15",
      question: "If (1, 2, 3) is the midpoint of the segment joining A(2, 0, 4) and B(x, y, z), then the coordinates of B are:",
      options: [
        "A):   (0, 4, 2)",
        "B):   (3, 2, 7)",
        "C):   (1, 2, 1)",
        "D):   (4, 2, 6)"
      ],
      correctAnswer: "A",
      explanation: "(2 + x)/2 = 1 ⇒ x = 0; (0 + y)/2 = 2 ⇒ y = 4; (4 + z)/2 = 3 ⇒ z = 2. Thus B is (0, 4, 2)."
    },
    // Q16 (Tier 2 - Moderate)
    {
      id: "c11-math-11-mcq-16",
      question: "If origin (0, 0, 0) is the centroid of a triangle with vertices (2a, 2, 6), (−4, 3b, −10), and (8, 14, 2c), the value of a is:",
      options: [
        "A):   2",
        "B):   −4",
        "C):   0",
        "D):   −2"
      ],
      correctAnswer: "D",
      explanation: "x-coordinate of centroid: (2a − 4 + 8)/3 = 0 ⇒ 2a + 4 = 0 ⇒ 2a = −4 ⇒ a = −2."
    },
    // Q17 (Tier 2 - Moderate)
    {
      id: "c11-math-11-mcq-17",
      question: "The points (0, 7, −10), (1, 6, −6), and (4, 9, −6) form which type of triangle?",
      options: [
        "A):   Isosceles triangle",
        "B):   Equilateral triangle",
        "C):   Right-angled scalene triangle",
        "D):   Collinear points"
      ],
      correctAnswer: "A",
      explanation: "Distance calculations give AB = √18, BC = √18, and CA = √36 = 6. Since AB = BC ≠ CA, it is an isosceles triangle."
    },
    // Q18 (Tier 2 - Moderate)
    {
      id: "c11-math-11-mcq-18",
      question: "The equation of the locus of points equidistant from (1, 2, 3) and (3, 2, −1) is:",
      options: [
        "A):   x + 2z = 0",
        "B):   2x − z = 0",
        "C):   x − 2z = 0",
        "D):   x + y + z = 0"
      ],
      correctAnswer: "C",
      explanation: "PA² = PB² ⇒ (x − 1)² + (z − 3)² = (x − 3)² + (z + 1)² ⇒ −2x − 6z = −6x + 2z ⇒ 4x − 8z = 0 ⇒ x − 2z = 0."
    },
    // Q19 (Tier 3 - Advanced)
    {
      id: "c11-math-11-mcq-19",
      question: "Three vertices of a parallelogram ABCD are A(3, −1, 2), B(1, 2, −4), and C(−1, 1, 2). The fourth vertex D is:",
      options: [
        "A):   (1, 2, 8)",
        "B):   (1, −2, 8)",
        "C):   (−1, −2, 4)",
        "D):   (3, 2, 0)"
      ],
      correctAnswer: "B",
      explanation: "Midpoint of AC = (1, 0, 2). Midpoint of BD = ((1 + x)/2, (2 + y)/2, (−4 + z)/2). Equating gives x = 1, y = −2, z = 8. Hence D(1, −2, 8)."
    },
    // Q20 (Tier 3 - Advanced)
    {
      id: "c11-math-11-mcq-20",
      question: "The lengths of the medians of the triangle with vertices (0, 0, 6), (0, 4, 0), and (6, 0, 0) are:",
      options: [
        "A):   6, 6, 6",
        "B):   7, 7, 7",
        "C):   7, √34, 7",
        "D):   √34, √34, 7"
      ],
      correctAnswer: "C",
      explanation: "Midpoints are D(3, 2, 0), E(3, 0, 3), F(0, 2, 3). Medians: AD = √(9 + 4 + 36) = 7, BE = √(9 + 16 + 9) = √34, CF = √(36 + 4 + 9) = 7."
    },
    // Q21 (Tier 3 - Advanced)
    {
      id: "c11-math-11-mcq-21",
      question: "Points on the y-axis at a distance of 5√2 from P(3, −2, 5) are:",
      options: [
        "A):   (0, 4, 0) and (0, −4, 0)",
        "B):   (0, 3, 0) and (0, −5, 0)",
        "C):   (0, 1, 0) and (0, −7, 0)",
        "D):   (0, 2, 0) and (0, −6, 0)"
      ],
      correctAnswer: "D",
      explanation: "Let A(0, y, 0). 3² + (y + 2)² + 5² = 50 ⇒ (y + 2)² = 16 ⇒ y + 2 = ±4 ⇒ y = 2 or y = −6. Points: (0, 2, 0) and (0, −6, 0)."
    },
    // Q22 (Tier 3 - Advanced)
    {
      id: "c11-math-11-mcq-22",
      question: "A point R with x-coordinate 4 lies on the segment joining P(2, −3, 4) and Q(8, 0, 10). The coordinates of R are:",
      options: [
        "A):   (4, 2, 6)",
        "B):   (4, −2, 8)",
        "C):   (4, −2, 6)",
        "D):   (4, 0, 5)"
      ],
      correctAnswer: "C",
      explanation: "Using (8k + 2)/(k + 1) = 4 ⇒ 4k = 2 ⇒ k = 1/2. Then y = −3/(3/2) = −2, z = 9/(3/2) = 6. Point is (4, −2, 6)."
    },
    // Q23 (Tier 3 - Advanced)
    {
      id: "c11-math-11-mcq-23",
      question: "The locus of points P such that the sum of its distances from (4, 0, 0) and (−4, 0, 0) is 10 represents:",
      options: [
        "A):   An ellipsoid: 9x² + 25y² + 25z² = 225",
        "B):   A sphere: x² + y² + z² = 25",
        "C):   A paraboloid: x² = 4(y + z)",
        "D):   A hyperboloid: 9x² − 25y² − 25z² = 225"
      ],
      correctAnswer: "A",
      explanation: "PA + PB = 10 represents an ellipsoid of revolution. Simplification gives 9x² + 25y² + 25z² − 225 = 0."
    },
    // Q24 (Tier 3 - Advanced)
    {
      id: "c11-math-11-mcq-24",
      question: "The trisection points of the segment joining P(4, 2, −6) and Q(10, −16, 6) are:",
      options: [
        "A):   (7, −7, 0) and (8, −10, 2)",
        "B):   (6, −4, −2) and (8, −10, 2)",
        "C):   (5, −5, −1) and (7, −8, 1)",
        "D):   (6, 4, 2) and (8, 10, −2)"
      ],
      correctAnswer: "B",
      explanation: "Dividing in ratio 1 : 2 gives A(6, −4, −2). Dividing in ratio 2 : 1 gives B(8, −10, 2)."
    },
    // Q25 (Tier 3 - Advanced)
    {
      id: "c11-math-11-mcq-25",
      question: "If A(3, 4, 5) and B(−1, 3, −7), the equation of the locus of points P such that PA² + PB² = k² is:",
      options: [
        "A):   2x² + 2y² + 2z² − 4x − 14y + 4z + 109 = k²",
        "B):   x² + y² + z² − 2x − 7y + 2z = k²",
        "C):   2x² + 2y² + 2z² + 4x + 14y − 4z + 109 = k²",
        "D):   x² + y² + z² = k² − 109"
      ],
      correctAnswer: "A",
      explanation: "Expanding (x − 3)² + (y − 4)² + (z − 5)² + (x + 1)² + (y − 3)² + (z + 7)² = k² yields 2x² + 2y² + 2z² − 4x − 14y + 4z + 109 = k²."
    }
  ];
}

module.exports = {
  buildOverview,
  buildMCQs
};
