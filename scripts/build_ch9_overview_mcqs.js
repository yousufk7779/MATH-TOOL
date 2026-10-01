const { themeColor, accentColor, styleBlock, frac } = require('./ch9_common');

function generateOverview() {
  // SVG 1: Line Forms in the Plane (Intercept and Normal Forms)
  const svgLineForms = `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Grid -->
      <rect width="500" height="240" fill="#FFFFFF"/>
      
      <!-- Coordinate Axes -->
      <line x1="40" y1="200" x2="460" y2="200" stroke="#64748B" stroke-width="2"/>
      <line x1="80" y1="20" x2="80" y2="220" stroke="#64748B" stroke-width="2"/>
      <text x="460" y="218" fill="#475569" font-size="12" font-weight="700" text-anchor="end">X-axis</text>
      <text x="70" y="32" fill="#475569" font-size="12" font-weight="700" text-anchor="end">Y-axis</text>
      <text x="70" y="215" fill="#475569" font-size="12" font-weight="700">O</text>

      <!-- Line L cutting axes at A(320, 200) and B(80, 50) -->
      <line x1="50" y1="31" x2="380" y2="238" stroke="#D500F9" stroke-width="3"/>
      <circle cx="320" cy="200" r="4.5" fill="#D500F9"/>
      <circle cx="80" cy="50" r="4.5" fill="#D500F9"/>
      
      <!-- Intercept labels -->
      <text x="320" y="218" fill="#D500F9" font-size="13" font-weight="800">A (a, 0)</text>
      <text x="90" y="48" fill="#D500F9" font-size="13" font-weight="800">B (0, b)</text>
      <text x="260" y="100" fill="#9C27B0" font-size="14" font-weight="800">x/a + y/b = 1</text>

      <!-- Normal from Origin to Line L -->
      <!-- Line equation: approx y - 50 = -(150/240)(x - 80) => y = -0.625x + 100 => 5x + 8y - 800 = 0 -->
      <!-- Normal vector from origin: (x, y) = (800*5/89, 800*8/89) approx. Let's draw perpendicular from (80, 200) -->
      <line x1="80" y1="200" x2="165" y2="103" stroke="#00C853" stroke-width="2.5" stroke-dasharray="4,3"/>
      <circle cx="165" cy="103" r="4" fill="#00C853"/>
      
      <!-- Normal arc and text -->
      <path d="M 120 200 A 40 40 0 0 0 108 168" fill="none" stroke="#00C853" stroke-width="1.8"/>
      <text x="122" y="180" fill="#00C853" font-size="12" font-weight="800">&omega;</text>
      <text x="105" y="135" fill="#00C853" font-size="12" font-weight="800">p</text>
      <text x="175" y="98" fill="#00C853" font-size="12" font-weight="800">P (foot)</text>

      <!-- Badge Info -->
      <rect x="330" y="25" width="150" height="55" rx="6" fill="#F3E5F5" stroke="#BA68C8" stroke-width="1.2"/>
      <text x="405" y="45" fill="#4A148C" font-size="11" font-weight="800" text-anchor="middle">Normal Form</text>
      <text x="405" y="65" fill="#6A1B9A" font-size="12" font-weight="800" text-anchor="middle">x cos &omega; + y sin &omega; = p</text>
    </svg>
    <div class="diagram-caption">
      💡 Canonical Forms of a Straight Line: Showing Intercept Form (${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 1) with intercepts <i>a</i>, <i>b</i> and Normal Form (<i>x</i> cos &omega; + <i>y</i> sin &omega; = <i>p</i>) with perpendicular distance <i>p</i> and angle &omega;.
    </div>
  </div>`;

  // SVG 2: Perpendicular Distance Geometry
  const svgDistance = `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="#FFFFFF"/>
      
      <!-- Coordinate Axes -->
      <line x1="40" y1="200" x2="460" y2="200" stroke="#94A3B8" stroke-width="2"/>
      <line x1="70" y1="20" x2="70" y2="220" stroke="#94A3B8" stroke-width="2"/>
      
      <!-- Target Line L: Ax + By + C = 0 -->
      <line x1="50" y1="180" x2="430" y2="60" stroke="#1E88E5" stroke-width="3"/>
      <text x="380" y="55" fill="#1E88E5" font-size="13" font-weight="800">Ax + By + C = 0</text>

      <!-- Point P(x1, y1) -->
      <circle cx="210" cy="40" r="5" fill="#E040FB"/>
      <text x="210" y="28" fill="#E040FB" font-size="13" font-weight="800" text-anchor="middle">P (x₁, y₁)</text>

      <!-- Perpendicular from P to Line L -->
      <line x1="210" y1="40" x2="275" y2="109" stroke="#E040FB" stroke-width="2.5" stroke-dasharray="4,3"/>
      <circle cx="275" cy="109" r="4.5" fill="#1E88E5"/>
      <text x="290" y="118" fill="#1E88E5" font-size="12" font-weight="700">M (Foot of &perp;)</text>

      <!-- Right angle symbol at M -->
      <path d="M 268 101 L 276 93 L 284 101" fill="none" stroke="#334155" stroke-width="1.5"/>

      <!-- Distance label d -->
      <text x="252" y="70" fill="#D500F9" font-size="13" font-weight="800">d</text>

      <!-- Formula Card Box -->
      <rect x="50" y="35" width="140" height="60" rx="8" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.2"/>
      <text x="120" y="55" fill="#0F172A" font-size="11" font-weight="800" text-anchor="middle">Distance Formula</text>
      <text x="120" y="76" fill="#C2185B" font-size="11.5" font-weight="800" text-anchor="middle">d = |Ax₁ + By₁ + C| / &radic;(A²+B²)</text>
    </svg>
    <div class="diagram-caption">
      💡 Perpendicular Distance of a Point from a Line: The shortest Euclidean segment from <i>P</i>(<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) to the line <i>Ax</i> + <i>By</i> + <i>C</i> = 0 meets at right angles at foot <i>M</i>.
    </div>
  </div>`;

  return `
${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Hero Banner -->
  <div style="background: linear-gradient(135deg, rgba(224, 64, 251, 0.25), rgba(0, 0, 0, 0.42)); border: 1.5px solid ${themeColor}; border-radius: 14px; padding: 18px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 22px; font-weight: 800; color: ${themeColor}; margin-bottom: 6px;">
      ✦ Chapter 9: Straight Lines
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
      Class 11 NCERT Mathematics &bull; Authoritative Gold-Standard Reference & Master Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ Quick Glossary & Foundational Definitions</div>
    <div class="q-text">
      Fundamental terms governing linear equations and geometry in the 2D Cartesian plane:
    </div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Inclination (&theta;):</b> The angle made by a straight line with the positive direction of the <i>x</i>-axis measured in the anticlockwise direction, where 0&deg; &le; &theta; &lt; 180&deg;.</div>
        <div>• <b style="color: ${themeColor};">Slope or Gradient (<i>m</i>):</b> If &theta; is the inclination of a line, then <b><i>m</i> = tan &theta;</b> (&theta; &ne; 90&deg;). For a vertical line (&theta; = 90&deg;), slope is undefined.</div>
        <div>• <b style="color: ${themeColor};">Collinearity:</b> Three or more points lie on the exact same straight line if and only if the slope between any pair of points is equal.</div>
        <div>• <b style="color: ${themeColor};">Intercepts:</b> The directed distances from the origin at which a line cuts the <i>x</i>-axis (<i>x</i>-intercept <i>a</i>) and <i>y</i>-axis (<i>y</i>-intercept <i>b</i>).</div>
        <div>• <b style="color: ${themeColor};">Concurrency:</b> Three or more straight lines are concurrent if they all pass through a single common point of intersection.</div>
      </div>
    </div>
  </div>

  <!-- Section 9.1 -->
  <div class="q-card">
    <div class="q-title">✦ 9.1 Slope of a Line & Parallel / Perpendicular Conditions</div>
    <div class="q-text">
      The slope of a non-vertical line passing through two distinct points (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) and (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>) is given by:
      <div style="margin: 8px 0; font-size: 16px; color: ${accentColor}; font-weight: 700;">
        <i>m</i> = ${frac('<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>', '<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>')} &nbsp; (where <i>x</i><sub>1</sub> &ne; <i>x</i><sub>2</sub>)
      </div>
    </div>
    <div class="sol-box">
      <div class="sol-title">Geometric Conditions for Two Lines with Slopes <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub>:</div>
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Parallel Lines:</b> Two non-vertical lines are parallel if and only if their slopes are equal: &nbsp; <b><i>m</i><sub>1</sub> = <i>m</i><sub>2</sub></b>.</div>
        <div>• <b style="color: ${themeColor};">Perpendicular Lines:</b> Two non-vertical lines are perpendicular if and only if the product of their slopes is &minus;1: &nbsp; <b><i>m</i><sub>1</sub> &times; <i>m</i><sub>2</sub> = &minus;1</b> &nbsp; (or <i>m</i><sub>2</sub> = &minus;${frac('1', '<i>m</i><sub>1</sub>')}).</div>
        <div>• <b style="color: ${themeColor};">Angle Between Two Lines:</b> The acute angle &theta; between two lines with slopes <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> satisfies:<br/>
          &rArr; <b>tan &theta; = | ${frac('<i>m</i><sub>2</sub> &minus; <i>m</i><sub>1</sub>', '1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub>')} |</b> &nbsp; (provided 1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub> &ne; 0).
        </div>
      </div>
    </div>
  </div>

  ${svgLineForms}

  <!-- Section 9.2 -->
  <div class="q-card">
    <div class="q-title">✦ 9.2 Various Forms of the Equation of a Line</div>
    <div class="q-text">
      Depending on given geometric constraints, the equation of a straight line can be written in multiple standard forms:
    </div>
    <div class="defBox">
      <b style="color: ${themeColor};">Summary of Standard Line Forms:</b><br/>
      1. <b style="color: ${themeColor};">Horizontal & Vertical Lines:</b> Horizontal: <b><i>y</i> = <i>k</i></b> (or <i>y</i> = 0 for <i>x</i>-axis); Vertical: <b><i>x</i> = <i>h</i></b> (or <i>x</i> = 0 for <i>y</i>-axis).<br/>
      2. <b style="color: ${themeColor};">Point-Slope Form:</b> Line passing through (<i>x</i><sub>0</sub>, <i>y</i><sub>0</sub>) with slope <i>m</i>:<br/>
      &nbsp; <b><i>y</i> &minus; <i>y</i><sub>0</sub> = <i>m</i>(<i>x</i> &minus; <i>x</i><sub>0</sub>)</b><br/>
      3. <b style="color: ${themeColor};">Two-Point Form:</b> Line passing through (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) and (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>):<br/>
      &nbsp; <b><i>y</i> &minus; <i>y</i><sub>1</sub> = ${frac('<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>', '<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>')}(<i>x</i> &minus; <i>x</i><sub>1</sub>)</b><br/>
      4. <b style="color: ${themeColor};">Slope-Intercept Form:</b> Slope <i>m</i> and <i>y</i>-intercept <i>c</i>:<br/>
      &nbsp; <b><i>y</i> = <i>mx</i> + <i>c</i></b> &nbsp; (or <i>y</i> = <i>m</i>(<i>x</i> &minus; <i>d</i>) for <i>x</i>-intercept <i>d</i>)<br/>
      5. <b style="color: ${themeColor};">Intercept Form:</b> Line with <i>x</i>-intercept <i>a</i> and <i>y</i>-intercept <i>b</i>:<br/>
      &nbsp; <b>${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 1</b><br/>
      6. <b style="color: ${themeColor};">Normal Form:</b> Perpendicular distance from origin <i>p</i> and angle &omega; made by normal with positive <i>x</i>-axis:<br/>
      &nbsp; <b><i>x</i> cos &omega; + <i>y</i> sin &omega; = <i>p</i></b> &nbsp; (where <i>p</i> &ge; 0 and 0 &le; &omega; &lt; 360&deg;)
    </div>
  </div>

  ${svgDistance}

  <!-- Section 9.3 -->
  <div class="q-card">
    <div class="q-title">✦ 9.3 Distance of a Point from a Line & Parallel Lines Separation</div>
    <div class="q-text">
      Standard formulas for Euclidean distance and geometric transformations:
    </div>
    <div class="sol-box">
      <div class="sol-title">Key Metric Formulas:</div>
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Perpendicular Distance from Point to Line:</b><br/>
          The perpendicular distance <i>d</i> from point (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) to line <i>Ax</i> + <i>By</i> + <i>C</i> = 0 is:<br/>
          &rArr; <b><i>d</i> = ${frac('|<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>|', '&radic;(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)')}</b>
        </div>
        <div style="margin-top: 8px;">• <b style="color: ${themeColor};">Distance Between Two Parallel Lines:</b><br/>
          For parallel lines <i>Ax</i> + <i>By</i> + <i>C</i><sub>1</sub> = 0 and <i>Ax</i> + <i>By</i> + <i>C</i><sub>2</sub> = 0:<br/>
          &rArr; <b><i>d</i> = ${frac('|<i>C</i><sub>1</sub> &minus; <i>C</i><sub>2</sub>|', '&radic;(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)')}</b>
        </div>
        <div style="margin-top: 8px;">• <b style="color: ${themeColor};">Foot of Perpendicular & Image of a Point:</b><br/>
          If (<i>h</i>, <i>k</i>) is the foot of perpendicular from (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) to <i>Ax</i> + <i>By</i> + <i>C</i> = 0:<br/>
          &rArr; <b>${frac('<i>h</i> &minus; <i>x</i><sub>1</sub>', '<i>A</i>')} = ${frac('<i>k</i> &minus; <i>y</i><sub>1</sub>', '<i>B</i>')} = &minus;${frac('<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>', '<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>')}</b><br/>
          If (<i>h</i>, <i>k</i>) is the mirror image of (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) in <i>Ax</i> + <i>By</i> + <i>C</i> = 0:<br/>
          &rArr; <b>${frac('<i>h</i> &minus; <i>x</i><sub>1</sub>', '<i>A</i>')} = ${frac('<i>k</i> &minus; <i>y</i><sub>1</sub>', '<i>B</i>')} = &minus;2 ${frac('<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>', '<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>')}</b>
        </div>
      </div>
    </div>
  </div>

  <!-- Master Revision Formula Cheat Sheet -->
  <div class="q-card" style="border: 2px solid ${themeColor};">
    <div class="q-title" style="color: ${themeColor}; font-size: 20px;">
      ✦ 9.4 Master Revision Formula Cheat Sheet
    </div>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 2.3;">
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="border-bottom: 2px solid ${themeColor}; color: ${themeColor};">
            <th style="padding: 8px 6px;">Geometry Concept</th>
            <th style="padding: 8px 6px;">Standard Algebraic Formula</th>
            <th style="padding: 8px 6px;">Special Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Slope of Line</td>
            <td style="padding: 8px 6px;"><i>m</i> = ${frac('<i>y</i><sub>2</sub> &minus; <i>y</i><sub>1</sub>', '<i>x</i><sub>2</sub> &minus; <i>x</i><sub>1</sub>')} = tan &theta;</td>
            <td style="padding: 8px 6px;">&theta; &ne; 90&deg;, <i>x</i><sub>1</sub> &ne; <i>x</i><sub>2</sub></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Point-Slope Form</td>
            <td style="padding: 8px 6px;"><i>y</i> &minus; <i>y</i><sub>1</sub> = <i>m</i>(<i>x</i> &minus; <i>x</i><sub>1</sub>)</td>
            <td style="padding: 8px 6px;">Passes through (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Slope-Intercept Form</td>
            <td style="padding: 8px 6px;"><i>y</i> = <i>mx</i> + <i>c</i></td>
            <td style="padding: 8px 6px;"><i>c</i> is <i>y</i>-intercept</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Intercept Form</td>
            <td style="padding: 8px 6px;">${frac('<i>x</i>', '<i>a</i>')} + ${frac('<i>y</i>', '<i>b</i>')} = 1</td>
            <td style="padding: 8px 6px;"><i>a</i>, <i>b</i> non-zero intercepts</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Normal Form</td>
            <td style="padding: 8px 6px;"><i>x</i> cos &omega; + <i>y</i> sin &omega; = <i>p</i></td>
            <td style="padding: 8px 6px;"><i>p</i> &ge; 0, 0 &le; &omega; &lt; 360&deg;</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Parallel / Perpendicular</td>
            <td style="padding: 8px 6px;">Parallel: <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub> &nbsp;|&nbsp; &perp;: <i>m</i><sub>1</sub> <i>m</i><sub>2</sub> = &minus;1</td>
            <td style="padding: 8px 6px;">For non-vertical lines</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Angle Between Lines</td>
            <td style="padding: 8px 6px;">tan &theta; = | ${frac('<i>m</i><sub>2</sub> &minus; <i>m</i><sub>1</sub>', '1 + <i>m</i><sub>1</sub><i>m</i><sub>2</sub>')} |</td>
            <td style="padding: 8px 6px;">Acute angle &theta;</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Point-to-Line Distance</td>
            <td style="padding: 8px 6px;"><i>d</i> = ${frac('|<i>Ax</i><sub>1</sub> + <i>By</i><sub>1</sub> + <i>C</i>|', '&radic;(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)')}</td>
            <td style="padding: 8px 6px;">From (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) to <i>Ax</i>+<i>By</i>+<i>C</i>=0</td>
          </tr>
          <tr>
            <td style="padding: 8px 6px; font-weight: 700;">Parallel Lines Distance</td>
            <td style="padding: 8px 6px;"><i>d</i> = ${frac('|<i>C</i><sub>1</sub> &minus; <i>C</i><sub>2</sub>|', '&radic;(<i>A</i><sup>2</sup> + <i>B</i><sup>2</sup>)')}</td>
            <td style="padding: 8px 6px;">Coefficients <i>A</i>, <i>B</i> equalized</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`;
}

function generateMcqs() {
  return [
    // Tier 1: Q1 to Q10 Easy Recall & Basic Facts
    {
      id: "c11-math-9-mcq-1",
      question: "The slope of a line passing through the points (3, −2) and (−1, 4) is:",
      options: [
        "A):   −3/2",
        "B):   3/2",
        "C):   −2/3",
        "D):   2/3"
      ],
      correctAnswer: "A",
      explanation: "m = (y₂ − y₁) / (x₂ − x₁) = [4 − (−2)] / [−1 − 3] = 6 / (−4) = −3/2."
    },
    {
      id: "c11-math-9-mcq-2",
      question: "What is the equation of the x-axis in the Cartesian plane?",
      options: [
        "A):   x = 0",
        "B):   y = 0",
        "C):   x + y = 0",
        "D):   x = y"
      ],
      correctAnswer: "B",
      explanation: "Every point on the x-axis has a y-coordinate of 0; thus its equation is y = 0."
    },
    {
      id: "c11-math-9-mcq-3",
      question: "The slope of a line making an angle of 60° with the positive direction of the x-axis is:",
      options: [
        "A):   1/√3",
        "B):   1",
        "C):   √3",
        "D):   −√3"
      ],
      correctAnswer: "C",
      explanation: "Slope m = tan θ = tan 60° = √3."
    },
    {
      id: "c11-math-9-mcq-4",
      question: "If two non-vertical lines with slopes m₁ and m₂ are perpendicular, then:",
      options: [
        "A):   m₁ = m₂",
        "B):   m₁ + m₂ = 0",
        "C):   m₁ / m₂ = 1",
        "D):   m₁ × m₂ = −1"
      ],
      correctAnswer: "D",
      explanation: "Two perpendicular lines satisfy m₁ m₂ = −1 (their slopes are negative reciprocals)."
    },
    {
      id: "c11-math-9-mcq-5",
      question: "The equation of a line passing through (0, 0) with slope 3 is:",
      options: [
        "A):   3x − y = 0",
        "B):   x − 3y = 0",
        "C):   3x + y = 0",
        "D):   x + 3y = 0"
      ],
      correctAnswer: "A",
      explanation: "Using point-slope form: y − 0 = 3(x − 0) ⇒ y = 3x ⇒ 3x − y = 0."
    },
    {
      id: "c11-math-9-mcq-6",
      question: "The y-intercept of the line 2x − 3y + 6 = 0 is:",
      options: [
        "A):   −2",
        "B):   2",
        "C):   3",
        "D):   −3"
      ],
      correctAnswer: "B",
      explanation: "3y = 2x + 6 ⇒ y = (2/3)x + 2. Thus, the y-intercept c = 2."
    },
    {
      id: "c11-math-9-mcq-7",
      question: "A line makes intercepts 3 and 4 on the x- and y-axes respectively. Its equation is:",
      options: [
        "A):   3x + 4y = 12",
        "B):   4x + 3y = 1",
        "C):   4x + 3y = 12",
        "D):   3x − 4y = 12"
      ],
      correctAnswer: "C",
      explanation: "Using intercept form: x/3 + y/4 = 1 ⇒ 4x + 3y = 12."
    },
    {
      id: "c11-math-9-mcq-8",
      question: "The angle between the lines y = x and y = −x is:",
      options: [
        "A):   45°",
        "B):   60°",
        "C):   30°",
        "D):   90°"
      ],
      correctAnswer: "D",
      explanation: "m₁ = 1, m₂ = −1. Since m₁ × m₂ = 1 × (−1) = −1, the lines are perpendicular (90°)."
    },
    {
      id: "c11-math-9-mcq-9",
      question: "If points (x, −1), (2, 1) and (4, 5) are collinear, what is the value of x?",
      options: [
        "A):   1",
        "B):   0",
        "C):   2",
        "D):   −1"
      ],
      correctAnswer: "A",
      explanation: "Slope of AB = Slope of BC ⇒ 2/(2 − x) = 4/2 = 2 ⇒ 2 − x = 1 ⇒ x = 1."
    },
    {
      id: "c11-math-9-mcq-10",
      question: "The slope of the line perpendicular to 2x + 5y − 7 = 0 is:",
      options: [
        "A):   −2/5",
        "B):   5/2",
        "C):   −5/2",
        "D):   2/5"
      ],
      correctAnswer: "B",
      explanation: "The slope of 2x + 5y − 7 = 0 is −A/B = −2/5. Perpendicular slope m = −1/(−2/5) = 5/2."
    },

    // Tier 2: Q11 to Q18 Moderate Concepts & Calculations
    {
      id: "c11-math-9-mcq-11",
      question: "The perpendicular distance of the point (2, 3) from the line 3x + 4y + 4 = 0 is:",
      options: [
        "A):   4 units",
        "B):   5 units",
        "C):   24/5 units",
        "D):   22/5 units"
      ],
      correctAnswer: "D",
      explanation: "d = |3(2) + 4(3) + 4| / √(3² + 4²) = |6 + 12 + 4| / 5 = 22/5 units."
    },
    {
      id: "c11-math-9-mcq-12",
      question: "The distance between the parallel lines 15x + 8y − 34 = 0 and 15x + 8y + 31 = 0 is:",
      options: [
        "A):   65/17 units",
        "B):   3/17 units",
        "C):   17/65 units",
        "D):   5 units"
      ],
      correctAnswer: "A",
      explanation: "d = |31 − (−34)| / √(15² + 8²) = 65 / √289 = 65/17 units."
    },
    {
      id: "c11-math-9-mcq-13",
      question: "In normal form x cos ω + y sin ω = p, for the line x − √3y + 8 = 0, the value of p is:",
      options: [
        "A):   8",
        "B):   2",
        "C):   4",
        "D):   2√2"
      ],
      correctAnswer: "C",
      explanation: "−x + √3y = 8. Dividing by √(1 + 3) = 2 gives (−1/2)x + (√3/2)y = 4. Hence p = 4."
    },
    {
      id: "c11-math-9-mcq-14",
      question: "The points on the x-axis whose distance from the line x/3 + y/4 = 1 is 4 units are:",
      options: [
        "A):   (4, 0) and (−4, 0)",
        "B):   (6, 0) and (−2, 0)",
        "C):   (5, 0) and (−3, 0)",
        "D):   (8, 0) and (−2, 0)"
      ],
      correctAnswer: "D",
      explanation: "4x + 3y − 12 = 0. Distance from (a, 0) is |4a − 12| / 5 = 4 ⇒ |4a − 12| = 20 ⇒ a = 8 or a = −2."
    },
    {
      id: "c11-math-9-mcq-15",
      question: "If a line passes through (2, 2) and cuts off intercepts on the axes whose sum is 9, its equations are:",
      options: [
        "A):   x + y = 4 or x − y = 0",
        "B):   2x + y − 6 = 0 or x + 2y − 6 = 0",
        "C):   3x + 2y = 12 or 2x + 3y = 12",
        "D):   x + y = 9 or 2x + 2y = 9"
      ],
      correctAnswer: "B",
      explanation: "x/a + y/(9 − a) = 1. Since (2, 2) lies on it, a = 3 (giving 2x + y = 6) or a = 6 (giving x + 2y = 6)."
    },
    {
      id: "c11-math-9-mcq-16",
      question: "The equation of the line parallel to 3x − 4y + 2 = 0 and passing through (−2, 3) is:",
      options: [
        "A):   3x + 4y + 6 = 0",
        "B):   3x − 4y − 18 = 0",
        "C):   4x + 3y − 1 = 0",
        "D):   3x − 4y + 18 = 0"
      ],
      correctAnswer: "D",
      explanation: "Line is 3x − 4y + k = 0. Substituting (−2, 3): 3(−2) − 4(3) + k = 0 ⇒ −18 + k = 0 ⇒ k = 18."
    },
    {
      id: "c11-math-9-mcq-17",
      question: "The ratio in which the line x + y = 4 divides the line segment joining (−1, 1) and (5, 7) is:",
      options: [
        "A):   2 : 1",
        "B):   1 : 2",
        "C):   1 : 3",
        "D):   3 : 1"
      ],
      correctAnswer: "B",
      explanation: "Ratio k = −[(−1 + 1 − 4) / (5 + 7 − 4)] = −[−4 / 8] = 4/8 = 1/2. Thus 1 : 2 internally."
    },
    {
      id: "c11-math-9-mcq-18",
      question: "If the line (k − 3)x − (4 − k²)y + k² − 7k + 6 = 0 is parallel to the x-axis, the value of k is:",
      options: [
        "A):   2",
        "B):   −2",
        "C):   3",
        "D):   6"
      ],
      correctAnswer: "C",
      explanation: "Parallel to x-axis requires coefficient of x to be 0: k − 3 = 0 ⇒ k = 3 (and 4 − 3² ≠ 0)."
    },

    // Tier 3: Q19 to Q25 Advanced Analytical & Multi-Step
    {
      id: "c11-math-9-mcq-19",
      question: "The image of the point (3, 8) with respect to the line x + 3y = 7 is:",
      options: [
        "A):   (−1, −4)",
        "B):   (1, 4)",
        "C):   (−2, −3)",
        "D):   (0, −1)"
      ],
      correctAnswer: "A",
      explanation: "(h − 3)/1 = (k − 8)/3 = −2(3 + 24 − 7)/10 = −4 ⇒ h = 3 − 4 = −1, k = 8 − 12 = −4."
    },
    {
      id: "c11-math-9-mcq-20",
      question: "The foot of the perpendicular from (−1, 3) to the line 3x − 4y − 16 = 0 is:",
      options: [
        "A):   (68/25, 49/25)",
        "B):   (68/25, −49/25)",
        "C):   (−68/25, −49/25)",
        "D):   (2, −3)"
      ],
      correctAnswer: "B",
      explanation: "(h + 1)/3 = (k − 3)/(−4) = −[3(−1) − 4(3) − 16]/25 = 31/25 ⇒ h = 68/25, k = −49/25."
    },
    {
      id: "c11-math-9-mcq-21",
      question: "The area of the triangle formed by the lines y − x = 0, x + y = 0 and x − k = 0 is:",
      options: [
        "A):   2k²",
        "B):   k²/2",
        "C):   k²",
        "D):   4k²"
      ],
      correctAnswer: "C",
      explanation: "The vertices are (0, 0), (k, −k), (k, k). Area = (1/2)|0 + k(k − 0) + k(0 + k)| = k² sq units."
    },
    {
      id: "c11-math-9-mcq-22",
      question: "If lines 3x + y − 2 = 0, px + 2y − 3 = 0, and 2x − y − 3 = 0 are concurrent, the value of p is:",
      options: [
        "A):   3",
        "B):   4",
        "C):   −5",
        "D):   5"
      ],
      correctAnswer: "D",
      explanation: "Intersection of 3x + y = 2 and 2x − y = 3 is (1, −1). Substituting into px + 2y − 3 = 0: p(1) − 2 − 3 = 0 ⇒ p = 5."
    },
    {
      id: "c11-math-9-mcq-23",
      question: "A ray of light from (1, 2) reflects on the x-axis at A and passes through (5, 3). The coordinates of A are:",
      options: [
        "A):   (13/5, 0)",
        "B):   (12/5, 0)",
        "C):   (3, 0)",
        "D):   (5/2, 0)"
      ],
      correctAnswer: "A",
      explanation: "Mirror image of (1, 2) across x-axis is (1, −2). Line joining (1, −2) and (5, 3) meets x-axis at x = 13/5."
    },
    {
      id: "c11-math-9-mcq-24",
      question: "The equation of the line equidistant from the parallel lines 9x + 6y − 7 = 0 and 3x + 2y + 6 = 0 is:",
      options: [
        "A):   18x + 12y − 11 = 0",
        "B):   18x + 12y + 11 = 0",
        "C):   9x + 6y + 5 = 0",
        "D):   6x + 4y + 1 = 0"
      ],
      correctAnswer: "B",
      explanation: "Lines are 9x + 6y − 7 = 0 and 9x + 6y + 18 = 0. Midline has constant (−7 + 18)/2 = 11/2 ⇒ 18x + 12y + 11 = 0."
    },
    {
      id: "c11-math-9-mcq-25",
      question: "If p is the length of perpendicular from origin to a line with intercepts a and b, then 1/p² equals:",
      options: [
        "A):   1/a + 1/b",
        "B):   a² + b²",
        "C):   1/a² + 1/b²",
        "D):   1/(a² + b²)"
      ],
      correctAnswer: "C",
      explanation: "p = ab / √(a² + b²) ⇒ p² = a²b² / (a² + b²) ⇒ 1/p² = (a² + b²) / (a²b²) = 1/a² + 1/b²."
    }
  ];
}

module.exports = {
  generateOverview,
  generateMcqs
};
