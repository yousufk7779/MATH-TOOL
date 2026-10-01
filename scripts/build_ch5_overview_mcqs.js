const { themeColor, accentColor, styleBlock, frac } = require('./ch5_common');

function getChapter5Overview() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Hero Header -->
  <div style="background: linear-gradient(135deg, rgba(0, 230, 118, 0.22), rgba(0, 176, 255, 0.15)); border: 1.5px solid ${themeColor}; border-radius: 14px; padding: 18px; margin-bottom: 22px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
    <div style="font-size: 22px; font-weight: 800; color: ${themeColor}; margin-bottom: 6px;">
      ✦ Chapter 5: Linear Inequalities
    </div>
    <div style="color: #E2E8F0; font-size: 14.5px; line-height: 1.55; max-width: 600px; margin: 0 auto;">
      Class 11 NCERT Mathematics &bull; Complete Comprehensive Reference Guide &bull; 1D &amp; 2D Geometric Representations &bull; Master Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ 1. Quick Glossary &amp; Core Definitions</div>
    <div class="q-text">
      An <b>inequality</b> states that two values or algebraic expressions are not equal, relating them by the order relations: <b>&lt;</b> (less than), <b>&gt;</b> (greater than), <b>&le;</b> (less than or equal to), or <b>&ge;</b> (greater than or equal to).
    </div>
    <div class="sol-box">
      <div class="sol-title">Essential Definitions &amp; Notations:</div>
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Strict Inequality:</b> Relationships involving only &lsquo;&lt;&rsquo; or &lsquo;&gt;&rsquo; (e.g., <i>ax</i> + <i>b</i> &lt; 0). The boundary itself is strictly excluded.</div>
        <div>• <b style="color: ${themeColor};">Slack Inequality:</b> Relationships involving &lsquo;&le;&rsquo; or &lsquo;&ge;&rsquo; (e.g., <i>ax</i> + <i>b</i> &le; 0). The boundary values are included.</div>
        <div>• <b style="color: ${themeColor};">Linear Inequality in One Variable:</b> An inequality of the form <i>ax</i> + <i>b</i> &lt; 0, <i>ax</i> + <i>b</i> &le; 0, <i>ax</i> + <i>b</i> &gt; 0, or <i>ax</i> + <i>b</i> &ge; 0, where <i>a</i> &ne; 0.</div>
        <div>• <b style="color: ${themeColor};">Linear Inequality in Two Variables:</b> An inequality of the form <i>ax</i> + <i>by</i> &lt; <i>c</i>, <i>ax</i> + <i>by</i> &le; <i>c</i>, <i>ax</i> + <i>by</i> &gt; <i>c</i>, or <i>ax</i> + <i>by</i> &ge; <i>c</i>, where <i>a</i> and <i>b</i> are not both zero.</div>
        <div>• <b style="color: ${themeColor};">Solution Set:</b> The collection of all values of the variable(s) that render the inequality a true statement.</div>
        <div>• <b style="color: ${themeColor};">Feasible Solution Region:</b> In a system of linear inequalities, the common overlapping region that satisfies all constraints simultaneously.</div>
      </div>
    </div>
  </div>

  <!-- Fundamental Algebraic Rules Card -->
  <div class="q-card">
    <div class="q-title">✦ 2. Fundamental Algebraic Rules of Inequalities</div>
    <div class="q-text">
      While equations preserve equality under almost all identical two-sided operations, inequalities have one critically distinctive behavior when interacting with negative numbers:
    </div>
    <div class="sol-box">
      <div class="sol-title">Golden Axioms of Inequality Manipulation:</div>
      <div class="sol-step">
        <div><b style="color: ${themeColor};">Rule 1 (Addition &amp; Subtraction):</b> Equal numbers may be added to (or subtracted from) both sides of an inequality without affecting the inequality sign.</div>
        <div style="padding-left: 12px; color: #CBD5E1;"><i>a</i> &le; <i>b</i> &rArr; <i>a</i> + <i>c</i> &le; <i>b</i> + <i>c</i> &nbsp;and&nbsp; <i>a</i> &minus; <i>c</i> &le; <i>b</i> &minus; <i>c</i> &nbsp;(&forall; <i>c</i> &isin; R)</div>
        
        <div style="margin-top: 10px;"><b style="color: ${themeColor};">Rule 2A (Positive Multiplication &amp; Division):</b> Both sides of an inequality may be multiplied (or divided) by the same <b>positive number</b> without changing the inequality sign.</div>
        <div style="padding-left: 12px; color: #CBD5E1;">If <i>c</i> &gt; 0, then <i>a</i> &lt; <i>b</i> &rArr; <i>ac</i> &lt; <i>bc</i> &nbsp;and&nbsp; ${frac('<i>a</i>', '<i>c</i>')} &lt; ${frac('<i>b</i>', '<i>c</i>')}</div>
        
        <div style="margin-top: 10px;"><b style="color: #FF5252;">Rule 2B (CRITICAL EXAM TRAP - Negative Multiplication &amp; Division):</b> When both sides are multiplied (or divided) by a <b>negative number</b>, the inequality sign MUST BE REVERSED!</div>
        <div style="padding-left: 12px; color: #FFD54F;">If <i>c</i> &lt; 0, then <i>a</i> &lt; <i>b</i> &rArr; <b><i>ac</i> &gt; <i>bc</i></b> &nbsp;and&nbsp; <b>${frac('<i>a</i>', '<i>c</i>')} &gt; ${frac('<i>b</i>', '<i>c</i>')}</b></div>
        <div style="padding-left: 12px; color: #94A3B8; font-size: 13.5px;"><i>Intuition:</i> 2 &lt; 5, but multiplying by &minus;1 gives &minus;2 &gt; &minus;5 (since &minus;2 is further right on the number line than &minus;5).</div>
      </div>
    </div>
  </div>

  <!-- Standalone Diagram Card 1: Number Line Intervals -->
  <div class="q-card">
    <div class="q-title">✦ 3. Representation on the Real Number Line</div>
    <div class="q-text">
      Inequalities in one variable are graphically represented on a 1D real number line using standard topological circle conventions:
      <br/>• <b>Hollow / Open Circle (&cir;):</b> Used for strict inequalities (&lt;, &gt;) to indicate the endpoint is <i>excluded</i>.
      <br/>• <b>Dark / Solid Circle (&bull;):</b> Used for slack inequalities (&le;, &ge;) to indicate the endpoint is <i>included</i>.
    </div>

    <!-- Clean Standalone Diagram Card 1 -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg">
        <!-- Background Grid / Frame -->
        <rect x="0" y="0" width="460" height="180" fill="#FFFFFF" rx="8" />

        <!-- Row 1: Open Interval (a, b) -->
        <text x="20" y="32" fill="#0F172A" font-size="12" font-weight="700">Open Interval (a, b) : a < x < b</text>
        <line x1="20" y1="46" x2="440" y2="46" stroke="#94A3B8" stroke-width="1.8" />
        <line x1="120" y1="46" x2="340" y2="46" stroke="#00C853" stroke-width="4.5" />
        <circle cx="120" cy="46" r="6" fill="#FFFFFF" stroke="#00C853" stroke-width="2.5" />
        <text x="120" y="66" fill="#0F172A" font-size="11" font-weight="700" text-anchor="middle">a (Excluded)</text>
        <circle cx="340" cy="46" r="6" fill="#FFFFFF" stroke="#00C853" stroke-width="2.5" />
        <text x="340" y="66" fill="#0F172A" font-size="11" font-weight="700" text-anchor="middle">b (Excluded)</text>

        <!-- Row 2: Closed Interval [a, b] -->
        <text x="20" y="105" fill="#0F172A" font-size="12" font-weight="700">Closed Interval [a, b] : a ≤ x ≤ b</text>
        <line x1="20" y1="120" x2="440" y2="120" stroke="#94A3B8" stroke-width="1.8" />
        <line x1="120" y1="120" x2="340" y2="120" stroke="#00C853" stroke-width="4.5" />
        <circle cx="120" cy="120" r="6" fill="#00C853" stroke="#0F172A" stroke-width="1.5" />
        <text x="120" y="140" fill="#0F172A" font-size="11" font-weight="700" text-anchor="middle">a (Included)</text>
        <circle cx="340" cy="120" r="6" fill="#00C853" stroke="#0F172A" stroke-width="1.5" />
        <text x="340" y="140" fill="#0F172A" font-size="11" font-weight="700" text-anchor="middle">b (Included)</text>

        <!-- Ray notation note -->
        <text x="230" y="168" fill="#475569" font-size="11" font-style="italic" text-anchor="middle">Rays: x > a extends to +∞ with open circle; x ≤ b extends to −∞ with solid circle.</text>
      </svg>
      <div class="diagram-caption">💡 Diagram 1: Real Number Line Endpoint Conventions (Hollow vs Solid Circles)</div>
    </div>
  </div>

  <!-- Standalone Diagram Card 2: 2D Half-Planes -->
  <div class="q-card">
    <div class="q-title">✦ 4. Graphical Representation in Two Dimensions (Half-Planes)</div>
    <div class="q-text">
      A straight line <i>ax</i> + <i>by</i> = <i>c</i> divides the entire 2D Cartesian plane into two distinct regions known as <b>half-planes</b>:
      <br/>• <b>Closed Half-Plane:</b> Corresponds to <i>ax</i> + <i>by</i> &le; <i>c</i> or <i>ax</i> + <i>by</i> &ge; <i>c</i>. The line itself is drawn <b>solid</b> because points on the line satisfy the condition.
      <br/>• <b>Open Half-Plane:</b> Corresponds to strict inequalities <i>ax</i> + <i>by</i> &lt; <i>c</i> or <i>ax</i> + <i>by</i> &gt; <i>c</i>. The line is drawn <b>dashed (dotted)</b>.
      <br/>• <b>The Test Point Method:</b> If the boundary line does not pass through the origin (0, 0), test whether (0, 0) satisfies the inequality:
      <br/>&nbsp;&nbsp;&ndash; If true, shade the half-plane <i>containing</i> (0, 0).
      <br/>&nbsp;&nbsp;&ndash; If false, shade the opposite half-plane <i>away</i> from (0, 0).
    </div>

    <!-- Clean Standalone Diagram Card 2 -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="460" height="230" fill="#FFFFFF" rx="8" />

        <!-- Left Diagram: Strict Inequality (Dashed) -->
        <g transform="translate(15, 15)">
          <text x="100" y="14" fill="#0F172A" font-size="12" font-weight="700" text-anchor="middle">Strict: ax + by < c (Open Half-Plane)</text>
          <rect x="10" y="25" width="180" height="160" fill="#F8FAFC" stroke="#E2E8F0" />
          <!-- Shaded region below dashed line -->
          <polygon points="10,65 190,145 190,185 10,185" fill="rgba(0, 230, 118, 0.28)" />
          <!-- Axes -->
          <line x1="20" y1="130" x2="180" y2="130" stroke="#64748B" stroke-width="1.2" />
          <line x1="80" y1="35" x2="80" y2="175" stroke="#64748B" stroke-width="1.2" />
          <!-- Dashed Line -->
          <line x1="10" y1="65" x2="190" y2="145" stroke="#E11D48" stroke-width="2.5" stroke-dasharray="6,4" />
          <!-- Origin -->
          <circle cx="80" cy="130" r="3.5" fill="#0F172A" />
          <text x="88" y="142" fill="#0F172A" font-size="10" font-weight="600">O(0,0)</text>
          <text x="100" y="172" fill="#00897B" font-size="10.5" font-weight="700" text-anchor="middle">Dashed: Line Excluded</text>
        </g>

        <!-- Right Diagram: Slack Inequality (Solid) -->
        <g transform="translate(245, 15)">
          <text x="100" y="14" fill="#0F172A" font-size="12" font-weight="700" text-anchor="middle">Slack: ax + by ≤ c (Closed Half-Plane)</text>
          <rect x="10" y="25" width="180" height="160" fill="#F8FAFC" stroke="#E2E8F0" />
          <!-- Shaded region below solid line -->
          <polygon points="10,65 190,145 190,185 10,185" fill="rgba(0, 230, 118, 0.28)" />
          <!-- Axes -->
          <line x1="20" y1="130" x2="180" y2="130" stroke="#64748B" stroke-width="1.2" />
          <line x1="80" y1="35" x2="80" y2="175" stroke="#64748B" stroke-width="1.2" />
          <!-- Solid Line -->
          <line x1="10" y1="65" x2="190" y2="145" stroke="#E11D48" stroke-width="2.5" />
          <!-- Origin -->
          <circle cx="80" cy="130" r="3.5" fill="#0F172A" />
          <text x="88" y="142" fill="#0F172A" font-size="10" font-weight="600">O(0,0)</text>
          <text x="100" y="172" fill="#00897B" font-size="10.5" font-weight="700" text-anchor="middle">Solid: Line Included</text>
        </g>
      </svg>
      <div class="diagram-caption">💡 Diagram 2: Open vs Closed 2D Half-Planes in Cartesian Coordinate Space</div>
    </div>
  </div>

  <!-- Master Revision Formula Cheat Sheet Card -->
  <div class="q-card" style="border-color: ${themeColor};">
    <div class="q-title" style="color: ${themeColor}; font-size: 18.5px;">✦ 5. Master Revision Formula Cheat Sheet</div>
    <div class="q-text">
      Quick-reference summary of essential rules, interval notations, and modulus relationships:
    </div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Sign Reversal Property:</b> <i>a</i> &lt; <i>b</i> &hArr; &minus;<i>a</i> &gt; &minus;<i>b</i></div>
        <div>• <b style="color: ${themeColor};">Reciprocal Property:</b> If <i>a</i> and <i>b</i> have the same sign and <i>a</i> &lt; <i>b</i> &rArr; ${frac('1', '<i>a</i>')} &gt; ${frac('1', '<i>b</i>')}</div>
        <div>• <b style="color: ${themeColor};">Modulus Bounded Inequality:</b> |<i>x</i>| &lt; <i>a</i> &hArr; &minus;<i>a</i> &lt; <i>x</i> &lt; <i>a</i> &nbsp;(for <i>a</i> &gt; 0)</div>
        <div>• <b style="color: ${themeColor};">Modulus Unbounded Inequality:</b> |<i>x</i>| &gt; <i>a</i> &hArr; <i>x</i> &lt; &minus;<i>a</i> &nbsp;or&nbsp; <i>x</i> &gt; <i>a</i> &nbsp;(for <i>a</i> &gt; 0)</div>
        <div>• <b style="color: ${themeColor};">Interval Notations:</b></div>
        <div style="padding-left: 12px; color: #CBD5E1;">
          &ndash; <b>(<i>a</i>, <i>b</i>):</b> {<i>x</i> &isin; R : <i>a</i> &lt; <i>x</i> &lt; <i>b</i>} (Open)<br/>
          &ndash; <b>[<i>a</i>, <i>b</i>]:</b> {<i>x</i> &isin; R : <i>a</i> &le; <i>x</i> &le; <i>b</i>} (Closed)<br/>
          &ndash; <b>[<i>a</i>, <i>b</i>):</b> {<i>x</i> &isin; R : <i>a</i> &le; <i>x</i> &lt; <i>b</i>} (Left-closed, right-open)<br/>
          &ndash; <b>(&minus;&infin;, <i>a</i>]:</b> {<i>x</i> &isin; R : <i>x</i> &le; <i>a</i>} (Unbounded ray to left)
        </div>
        <div style="margin-top: 8px;">• <b style="color: ${themeColor};">First Quadrant Non-Negativity Constraints:</b> <i>x</i> &ge; 0 and <i>y</i> &ge; 0 restrict all viable economic and physical solutions strictly to Quadrant I.</div>
      </div>
    </div>
  </div>
</div>
`;
}

const chapter5MCQs = [
  {
    id: "c11-math-5-mcq-1",
    question: "Which of the following operations REVERSES the inequality symbol between two algebraic expressions?",
    options: [
      "A):   Adding a negative number to both sides",
      "B):   Subtracting a positive number from both sides",
      "C):   Multiplying both sides by any positive real number",
      "D):   Multiplying or dividing both sides by a negative real number"
    ],
    correctAnswer: "D",
    explanation: "Multiplying or dividing both sides of an inequality by a negative quantity inverts the order relation (e.g., if 2 < 5, then -2 > -5)."
  },
  {
    id: "c11-math-5-mcq-2",
    question: "If 30x < 200 and x is a natural number (x ∈ N), then the solution set is:",
    options: [
      "A):   {1, 2, 3, 4, 5, 6}",
      "B):   {0, 1, 2, 3, 4, 5, 6}",
      "C):   {..., -2, -1, 0, 1, 2, 3, 4, 5, 6}",
      "D):   {1, 2, 3, 4, 5}"
    ],
    correctAnswer: "A",
    explanation: "30x < 200 ⇒ x < 200/30 = 20/3 ≈ 6.67. Since natural numbers are positive integers {1, 2, 3, ...}, the values are {1, 2, 3, 4, 5, 6}."
  },
  {
    id: "c11-math-5-mcq-3",
    question: "Solve −4x ≥ 12 when x is an integer (x ∈ Z):",
    options: [
      "A):   {-3, -2, -1, 0, 1, ...}",
      "B):   {3, 4, 5, 6, ...}",
      "C):   {..., -5, -4, -3}",
      "D):   {-3, -4, -5, ...}"
    ],
    correctAnswer: "C",
    explanation: "Dividing by -4 reverses the inequality: x ≤ 12 / (-4) ⇒ x ≤ -3. As integers, the set is {..., -5, -4, -3}."
  },
  {
    id: "c11-math-5-mcq-4",
    question: "The solution of 3(x − 2) / 5 ≤ 5(2 − x) / 3 for real x is:",
    options: [
      "A):   x ∈ [2, ∞)",
      "B):   x ∈ (-∞, 2]",
      "C):   x ∈ (-∞, -2]",
      "D):   x ∈ [0, 2]"
    ],
    correctAnswer: "B",
    explanation: "Multiplying by 15: 9(x - 2) ≤ 25(2 - x) ⇒ 9x - 18 ≤ 50 - 25x ⇒ 34x ≤ 68 ⇒ x ≤ 2. Hence x ∈ (-∞, 2]."
  },
  {
    id: "c11-math-5-mcq-5",
    question: "On a real number line, an open (hollow) circle at point 'a' indicates that:",
    options: [
      "A):   The endpoint 'a' is included in the solution set",
      "B):   The point 'a' is the origin (0, 0)",
      "C):   The point 'a' is excluded from the solution set",
      "D):   The inequality must be slack (≤ or ≥)"
    ],
    correctAnswer: "C",
    explanation: "In standard mathematical graphics, a hollow circle represents a strict boundary (< or >) where the endpoint 'a' itself is not part of the solution set."
  },
  {
    id: "c11-math-5-mcq-6",
    question: "The solution set of the inequality 4x + 3 < 6x + 7 for real x is:",
    options: [
      "A):   (-2, ∞)",
      "B):   (-∞, -2)",
      "C):   [-2, ∞)",
      "D):   (-∞, 2)"
    ],
    correctAnswer: "A",
    explanation: "4x - 6x < 7 - 3 ⇒ -2x < 4 ⇒ x > 4/(-2) ⇒ x > -2. Thus x ∈ (-2, ∞)."
  },
  {
    id: "c11-math-5-mcq-7",
    question: "In the 2D Cartesian plane, the boundary line for a strict inequality such as 2x + 3y < 6 is drawn as:",
    options: [
      "A):   A thick solid line",
      "B):   A dotted (dashed) line",
      "C):   A wavy line",
      "D):   A double parallel line"
    ],
    correctAnswer: "B",
    explanation: "For strict inequalities (< or >), the points on the boundary line do not satisfy the condition, so the line is drawn dotted or dashed."
  },
  {
    id: "c11-math-5-mcq-8",
    question: "Which of the following test points is most convenient to determine the feasible half-plane when the boundary line does NOT pass through (0, 0)?",
    options: [
      "A):   (10, 10)",
      "B):   (-1, -1)",
      "C):   (1, 1)",
      "D):   (0, 0)"
    ],
    correctAnswer: "D",
    explanation: "The origin (0, 0) reduces all variable terms ax + by immediately to 0, making the truth check 0 < c or 0 ≥ c instantaneous."
  },
  {
    id: "c11-math-5-mcq-9",
    question: "If a line passes through the origin (such as y = 2x), which point can be used as a test point to determine the feasible half-plane?",
    options: [
      "A):   (0, 0)",
      "B):   Only origin points",
      "C):   Only points with negative coordinates",
      "D):   Any point not lying on the line, such as (1, 0) or (0, 1)"
    ],
    correctAnswer: "D",
    explanation: "Since the boundary line already passes through (0,0), testing (0,0) gives 0 = 0 (on the boundary). Any point off the line, like (1, 0), unambiguously reveals which half-plane satisfies the inequality."
  },
  {
    id: "c11-math-5-mcq-10",
    question: "The graphical solution of y < -2 in the Cartesian coordinate plane is:",
    options: [
      "A):   The half-plane to the left of the line x = -2",
      "B):   The half-plane above the solid line y = -2",
      "C):   The open half-plane lying strictly below the horizontal dashed line y = -2",
      "D):   The first quadrant only"
    ],
    correctAnswer: "C",
    explanation: "y = -2 is a horizontal line. Since the inequality is y < -2 (strict), it is represented by a dashed line and shaded strictly below it."
  },
  {
    id: "c11-math-5-mcq-11",
    question: "Solve the double inequality: -5 ≤ (5 - 3x) / 2 ≤ 8. The solution set is:",
    options: [
      "A):   [-11/3, 5]",
      "B):   [-15, 11]",
      "C):   [-5, 5]",
      "D):   (-11/3, 5]"
    ],
    correctAnswer: "A",
    explanation: "Multiplying by 2: -10 ≤ 5 - 3x ≤ 16 ⇒ subtracting 5: -15 ≤ -3x ≤ 11 ⇒ dividing by -3 (reverses sign): 5 ≥ x ≥ -11/3 ⇔ -11/3 ≤ x ≤ 5. Hence x ∈ [-11/3, 5]."
  },
  {
    id: "c11-math-5-mcq-12",
    question: "Find all pairs of consecutive odd positive integers, both of which are smaller than 10, such that their sum is more than 11:",
    options: [
      "A):   (3, 5) and (5, 7)",
      "B):   (5, 7) and (7, 9)",
      "C):   (7, 9) and (9, 11)",
      "D):   (1, 3) and (3, 5)"
    ],
    correctAnswer: "B",
    explanation: "Let the integers be x and x + 2. Both < 10 ⇒ x + 2 < 10 ⇒ x < 8. Sum > 11 ⇒ 2x + 2 > 11 ⇒ x > 4.5. Odd integers in (4.5, 8) are 5 and 7, yielding pairs (5, 7) and (7, 9)."
  },
  {
    id: "c11-math-5-mcq-13",
    question: "Sunita scored 87, 92, 94, and 95 in four tests. What is the minimum score required in the fifth test to attain an average of at least 90?",
    options: [
      "A):   80",
      "B):   85",
      "C):   82",
      "D):   88"
    ],
    correctAnswer: "C",
    explanation: "(87 + 92 + 94 + 95 + x) / 5 ≥ 90 ⇒ (368 + x) / 5 ≥ 90 ⇒ 368 + x ≥ 450 ⇒ x ≥ 450 - 368 = 82."
  },
  {
    id: "c11-math-5-mcq-14",
    question: "If |x| < 4, then x lies in the interval:",
    options: [
      "A):   (-∞, 4)",
      "B):   [-4, 4]",
      "C):   (4, ∞)",
      "D):   (-4, 4)"
    ],
    correctAnswer: "D",
    explanation: "By the modulus inequality property, |x| < a ⇔ -a < x < a. Therefore, |x| < 4 implies x ∈ (-4, 4)."
  },
  {
    id: "c11-math-5-mcq-15",
    question: "The solution set of the simultaneous inequalities 5x + 1 > -24 and 5x - 1 < 24 is:",
    options: [
      "A):   (-5, 5)",
      "B):   [-5, 5]",
      "C):   (-∞, 5)",
      "D):   (-5, ∞)"
    ],
    correctAnswer: "A",
    explanation: "5x > -25 ⇒ x > -5; and 5x < 25 ⇒ x < 5. Combining gives -5 < x < 5, i.e., open interval (-5, 5)."
  },
  {
    id: "c11-math-5-mcq-16",
    question: "If a < b and c < 0, which of the following relations is correct?",
    options: [
      "A):   a / c < b / c",
      "B):   a + c > b + c",
      "C):   a · c < b · c",
      "D):   a / c > b / c"
    ],
    correctAnswer: "D",
    explanation: "Dividing an inequality by a strictly negative number inverts the direction: a < b and c < 0 implies a/c > b/c."
  },
  {
    id: "c11-math-5-mcq-17",
    question: "A manufacturer has 600 litres of a 12% solution of acid. How many litres of a 30% acid solution must be added so that acid content in the resulting mixture is more than 15% but less than 18%?",
    options: [
      "A):   Between 120 litres and 300 litres",
      "B):   Between 50 litres and 150 litres",
      "C):   More than 300 litres",
      "D):   Less than 100 litres"
    ],
    correctAnswer: "A",
    explanation: "Let x litres be added. 15% of (600 + x) < 12% of 600 + 30% of x < 18% of (600 + x). Solving gives 120 < x < 300 litres."
  },
  {
    id: "c11-math-5-mcq-18",
    question: "The region represented by x ≥ 0, y ≥ 0 lies exclusively in:",
    options: [
      "A):   The 2nd Quadrant",
      "B):   The 1st Quadrant and non-negative axes",
      "C):   The 4th Quadrant",
      "D):   The whole coordinate plane"
    ],
    correctAnswer: "B",
    explanation: "Both coordinates x and y are greater than or equal to zero only in the first quadrant and along the positive axes."
  },
  {
    id: "c11-math-5-mcq-19",
    question: "The shortest side of a triangle is x cm, the longest is 3x cm, and the third is (3x - 2) cm. If the perimeter is at least 61 cm, the minimum length of the shortest side is:",
    options: [
      "A):   7 cm",
      "B):   8 cm",
      "C):   9 cm",
      "D):   10 cm"
    ],
    correctAnswer: "C",
    explanation: "Perimeter = x + 3x + (3x - 2) = 7x - 2 ≥ 61 ⇒ 7x ≥ 63 ⇒ x ≥ 9 cm. The minimum length is 9 cm."
  },
  {
    id: "c11-math-5-mcq-20",
    question: "Solve for real x: (2x - 1)/3 ≥ (3x - 2)/4 - (2 - x)/5. The solution set is:",
    options: [
      "A):   (-∞, 2]",
      "B):   [2, ∞)",
      "C):   (-∞, -2]",
      "D):   [-2, 2]"
    ],
    correctAnswer: "A",
    explanation: "RHS = (15x - 10 - 8 + 4x) / 20 = (19x - 18) / 20. Cross multiplying: 20(2x - 1) ≥ 3(19x - 18) ⇒ 40x - 20 ≥ 57x - 54 ⇒ 34 ≥ 17x ⇒ x ≤ 2. Hence (-∞, 2]."
  },
  {
    id: "c11-math-5-mcq-21",
    question: "The common region determined by the system of constraints x + y ≤ 6 and x + y ≥ 4 represents:",
    options: [
      "A):   A single point of intersection",
      "B):   A triangular feasible region",
      "C):   The parallel strip bounded between the two lines x + y = 4 and x + y = 6",
      "D):   An empty set with no common points"
    ],
    correctAnswer: "C",
    explanation: "Since the lines have equal slope (-1), they are parallel. The region x + y ≥ 4 is above the lower line and x + y ≤ 6 is below the upper line, forming a closed parallel strip."
  },
  {
    id: "c11-math-5-mcq-22",
    question: "If IQ = (MA / CA) × 100 with CA = 12 years and 80 ≤ IQ ≤ 140, the range of mental age (MA) is:",
    options: [
      "A):   8.0 ≤ MA ≤ 14.0",
      "B):   9.6 ≤ MA ≤ 16.8",
      "C):   10.0 ≤ MA ≤ 15.5",
      "D):   9.0 ≤ MA ≤ 18.0"
    ],
    correctAnswer: "B",
    explanation: "80 ≤ (MA / 12) × 100 ≤ 140 ⇒ 80 × 12 / 100 ≤ MA ≤ 140 × 12 / 100 ⇒ 9.6 ≤ MA ≤ 16.8 years."
  },
  {
    id: "c11-math-5-mcq-23",
    question: "If |x − 2| ≤ 3, then x belongs to which interval?",
    options: [
      "A):   (-1, 5)",
      "B):   [-5, 1]",
      "C):   [1, 5]",
      "D):   [-1, 5]"
    ],
    correctAnswer: "D",
    explanation: "|x - 2| ≤ 3 ⇔ -3 ≤ x - 2 ≤ 3. Adding 2 gives -1 ≤ x ≤ 5, so x ∈ [-1, 5]."
  },
  {
    id: "c11-math-5-mcq-24",
    question: "Which point lies in the feasible region of the system: 2x + y ≥ 4, x + y ≤ 3, 2x − 3y ≤ 6?",
    options: [
      "A):   (0, 0)",
      "B):   (5, 5)",
      "C):   (2, 0.5)",
      "D):   (-2, 1)"
    ],
    correctAnswer: "C",
    explanation: "For (2, 0.5): 2(2) + 0.5 = 4.5 ≥ 4 (True); 2 + 0.5 = 2.5 ≤ 3 (True); 2(2) - 3(0.5) = 2.5 ≤ 6 (True). All three constraints hold."
  },
  {
    id: "c11-math-5-mcq-25",
    question: "A board of 91 cm is cut into three pieces of lengths x, (x + 3), and 2x cm. If the third piece is at least 5 cm longer than the second, the length of the shortest piece satisfies:",
    options: [
      "A):   8 ≤ x ≤ 22 cm",
      "B):   5 ≤ x ≤ 20 cm",
      "C):   x ≥ 22 cm",
      "D):   x ≤ 8 cm"
    ],
    correctAnswer: "A",
    explanation: "x + (x + 3) + 2x ≤ 91 ⇒ 4x ≤ 88 ⇒ x ≤ 22. Also 2x ≥ (x + 3) + 5 ⇒ x ≥ 8. Combining both yields 8 ≤ x ≤ 22 cm."
  }
];

module.exports = {
  getChapter5Overview,
  chapter5MCQs
};
