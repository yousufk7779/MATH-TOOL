const { THEME_COLOR, frac } = require("./ch12_common");

function buildOverview() {
  const svgLimit = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 460 220" style="width: 100%; max-width: 420px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Axes -->
        <line x1="40" y1="180" x2="420" y2="180" stroke="#64748B" stroke-width="1.8"/>
        <line x1="80" y1="20" x2="80" y2="200" stroke="#64748B" stroke-width="1.8"/>
        <text x="415" y="195" font-size="12" font-weight="700" fill="#64748B">x</text>
        <text x="65" y="30" font-size="12" font-weight="700" fill="#64748B">y</text>
        <!-- Curve y = f(x) -->
        <path d="M 100 150 Q 230 40 380 90" fill="none" stroke="#00BCD4" stroke-width="2.8"/>
        <!-- Point at x = a -->
        <line x1="230" y1="85" x2="230" y2="180" stroke="#E11D48" stroke-width="1.8" stroke-dasharray="4,4"/>
        <line x1="80" y1="85" x2="230" y2="85" stroke="#E11D48" stroke-width="1.8" stroke-dasharray="4,4"/>
        <circle cx="230" cy="85" r="4.5" fill="#E11D48"/>
        <text x="224" y="195" font-size="12" font-weight="800" fill="#E11D48">a</text>
        <text x="55" y="89" font-size="12" font-weight="800" fill="#E11D48">L</text>
        <!-- Approaching arrows -->
        <line x1="160" y1="180" x2="215" y2="180" stroke="#16A34A" stroke-width="2.5" marker-end="url(#arr-r)"/>
        <line x1="300" y1="180" x2="245" y2="180" stroke="#16A34A" stroke-width="2.5" marker-end="url(#arr-l)"/>
        <text x="145" y="168" font-size="11" font-weight="700" fill="#16A34A">x &rarr; a&minus; (LHL)</text>
        <text x="255" y="168" font-size="11" font-weight="700" fill="#16A34A">x &rarr; a+ (RHL)</text>
        <defs>
          <marker id="arr-r" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#16A34A"/>
          </marker>
          <marker id="arr-l" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#16A34A"/>
          </marker>
        </defs>
      </svg>
    </div>
    <div class="diagram-caption">💡 Intuitive Foundation of Limits: Both Left-Hand Limit (LHL) and Right-Hand Limit (RHL) converge to L.</div>
  </div>`;

  const svgDerivative = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 460 220" style="width: 100%; max-width: 420px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Axes -->
        <line x1="40" y1="185" x2="420" y2="185" stroke="#64748B" stroke-width="1.8"/>
        <line x1="70" y1="20" x2="70" y2="200" stroke="#64748B" stroke-width="1.8"/>
        <!-- Curve y = f(x) -->
        <path d="M 90 170 Q 200 150 360 40" fill="none" stroke="#7C3AED" stroke-width="2.8"/>
        <!-- Tangent Line at P -->
        <line x1="100" y1="180" x2="340" y2="50" stroke="#00B0FF" stroke-width="2.2"/>
        <text x="345" y="55" font-size="11" font-weight="700" fill="#00B0FF">Tangent (Slope = f'(x))</text>
        <!-- Secant Line PQ -->
        <line x1="150" y1="170" x2="360" y2="40" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="4,4"/>
        <text x="270" y="115" font-size="11" font-weight="700" fill="#0284C7">Secant chord</text>
        <!-- Points P and Q -->
        <circle cx="180" cy="140" r="4.5" fill="#00B0FF"/>
        <text x="145" y="135" font-size="11" font-weight="700" fill="#00B0FF">P(x, f(x))</text>
        <circle cx="310" cy="72" r="4.5" fill="#0284C7"/>
        <text x="295" y="62" font-size="11" font-weight="700" fill="#0284C7">Q(x+h, f(x+h))</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 First Principle of Derivatives: Tangent slope as the limiting case of secant slopes as h &rarr; 0.</div>
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
  .diagram-wrapper { background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 176, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 18px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center; }
  .diagram-svg-container { display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 480px; }
  .diagram-caption { color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500; }
</style>

<div style="padding: 4px 2px;">
  <!-- Hero Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 176, 255, 0.25), rgba(0, 0, 0, 0.4)); border: 1.5px solid ${THEME_COLOR}; border-radius: 14px; padding: 18px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 22px; font-weight: 800; color: ${THEME_COLOR}; margin-bottom: 6px;">
      ✦ Chapter 12: Limits and Derivatives
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.5;">
      Class 11 NCERT Mathematics &bull; Comprehensive Reference Guide &amp; Master Formula Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ 1. Quick Glossary &amp; Conceptual Foundations</div>
    <div class="q-text">
      Calculus is the mathematical study of continuous change. <b>Limits</b> describe the behavior of a function near a point, while <b>derivatives</b> quantify instantaneous rates of change.
    </div>
    <div class="sol-box">
      <div class="sol-title">Essential Theoretical Axioms:</div>
      <div class="sol-step">
        <div>• <b style="color: ${THEME_COLOR};">Limit of a Function:</b> We say lim<sub><i>x</i>&rarr;<i>a</i></sub> <i>f</i>(<i>x</i>) = <i>L</i> if <i>f</i>(<i>x</i>) gets arbitrarily close to <i>L</i> as <i>x</i> approaches <i>a</i> from either side.</div>
        <div>• <b style="color: ${THEME_COLOR};">Existence Condition:</b> lim<sub><i>x</i>&rarr;<i>a</i></sub> <i>f</i>(<i>x</i>) exists if and only if both the Left-Hand Limit (LHL) and Right-Hand Limit (RHL) exist and are equal:
          <br/>&nbsp;&nbsp;<b>lim<sub><i>x</i>&rarr;<i>a</i><sup>&minus;</sup></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>&rarr;<i>a</i><sup>+</sup></sub> <i>f</i>(<i>x</i>) = L</b>
        </div>
        <div>• <b style="color: ${THEME_COLOR};">Derivative from First Principle:</b> The derivative of <i>f</i>(<i>x</i>) at <i>x</i> is the instantaneous rate of change given by:
          <br/>&nbsp;&nbsp;<b><i>f</i>'(<i>x</i>) = lim<sub><i>h</i>&rarr;0</sub> ${frac("f(x + h) &minus; f(x)", "h")}</b>
        </div>
      </div>
    </div>
  </div>

  ${svgLimit}
  ${svgDerivative}

  <!-- Master Revision Formula Cheat Sheet -->
  <div class="q-card" style="border-color: ${THEME_COLOR};">
    <div class="q-title" style="color: ${THEME_COLOR}; font-size: 19px;">✦ 2. Master Revision Formula Cheat Sheet</div>
    <div style="font-size: 15px; color: #FFFFFF; line-height: 2.3;">
      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">1. Standard Limits Identities:</b><br/>
        &bull; <b>lim<sub><i>x</i>&rarr;<i>a</i></sub> ${frac("x<sup>n</sup> &minus; a<sup>n</sup>", "x &minus; a")} = n a<sup>n&minus;1</sup></b><br/>
        &bull; <b>lim<sub><i>x</i>&rarr;0</sub> ${frac("sin x", "x")} = 1</b> &nbsp;(where <i>x</i> is in radians)<br/>
        &bull; <b>lim<sub><i>x</i>&rarr;0</sub> ${frac("tan x", "x")} = 1</b><br/>
        &bull; <b>lim<sub><i>x</i>&rarr;0</sub> ${frac("1 &minus; cos x", "x")} = 0</b>
      </div>

      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">2. Standard Derivatives of Elementary Functions:</b><br/>
        &bull; ${frac("d", "dx")}(<i>x</i><sup><i>n</i></sup>) = <b>n x<sup>n&minus;1</sup></b><br/>
        &bull; ${frac("d", "dx")}(c) = <b>0</b> &nbsp;(constant)<br/>
        &bull; ${frac("d", "dx")}(sin <i>x</i>) = <b>cos x</b> &nbsp;|&nbsp; ${frac("d", "dx")}(cos <i>x</i>) = <b>&minus;sin x</b><br/>
        &bull; ${frac("d", "dx")}(tan <i>x</i>) = <b>sec<sup>2</sup> x</b> &nbsp;|&nbsp; ${frac("d", "dx")}(cot <i>x</i>) = <b>&minus;cosec<sup>2</sup> x</b><br/>
        &bull; ${frac("d", "dx")}(sec <i>x</i>) = <b>sec x tan x</b> &nbsp;|&nbsp; ${frac("d", "dx")}(cosec <i>x</i>) = <b>&minus;cosec x cot x</b>
      </div>

      <div style="margin-bottom: 6px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">3. Algebra &amp; Rules of Differentiation:</b><br/>
        &bull; <b>Sum/Difference Rule:</b> (<i>u</i> &plusmn; <i>v</i>)' = <i>u</i>' &plusmn; <i>v</i>'<br/>
        &bull; <b>Product Rule (Leibniz Rule):</b> <b>(uv)' = u'v + uv'</b><br/>
        &bull; <b>Quotient Rule:</b> <b>(${frac("u", "v")})' = ${frac("v u' &minus; u v'", "v<sup>2</sup>")}</b><br/>
        &bull; <b>Chain Rule:</b> ${frac("d", "dx")}[<i>f</i>(<i>g</i>(<i>x</i>))] = <i>f</i>'(<i>g</i>(<i>x</i>)) &times; <i>g</i>'(<i>x</i>)
      </div>
    </div>
  </div>
</div>`;
}

function buildMCQs() {
  return [
    // Q1 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-1",
      question: "The value of the fundamental trigonometric limit lim_{x→0} (sin x)/x (where x is in radians) is:",
      options: [
        "A):   0",
        "B):   1",
        "C):   ∞",
        "D):   π"
      ],
      correctAnswer: "B",
      explanation: "By the sandwich theorem and trigonometric geometry, lim_{x→0} (sin x)/x = 1 when x is measured in radians."
    },
    // Q2 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-2",
      question: "What is the derivative of xⁿ with respect to x?",
      options: [
        "A):   n xⁿ⁻¹",
        "B):   n xⁿ",
        "C):   xⁿ⁻¹ / n",
        "D):   n(n − 1) xⁿ⁻²"
      ],
      correctAnswer: "A",
      explanation: "By the power rule of differentiation, d/dx (xⁿ) = n xⁿ⁻¹."
    },
    // Q3 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-3",
      question: "The derivative of cos x with respect to x is:",
      options: [
        "A):   sin x",
        "B):   −cos x",
        "C):   −sin x",
        "D):   sec x tan x"
      ],
      correctAnswer: "C",
      explanation: "By the first principle, d/dx (cos x) = lim_{h→0} [cos(x+h) − cos x]/h = −sin x."
    },
    // Q4 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-4",
      question: "The product rule for differentiating two functions u(x) and v(x) is:",
      options: [
        "A):   u'v'",
        "B):   u'v + uv'",
        "C):   u'v − uv'",
        "D):   (u'v + uv')/v²"
      ],
      correctAnswer: "B",
      explanation: "By the Leibniz product rule, (uv)' = u'v + uv'."
    },
    // Q5 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-5",
      question: "The derivative of tan x with respect to x is:",
      options: [
        "A):   cot x",
        "B):   −sec² x",
        "C):   sec x tan x",
        "D):   sec² x"
      ],
      correctAnswer: "D",
      explanation: "Differentiating sin x / cos x by the quotient rule gives sec² x."
    },
    // Q6 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-6",
      question: "The value of lim_{x→a} (xⁿ − aⁿ)/(x − a) is equal to:",
      options: [
        "A):   n aⁿ⁻¹",
        "B):   aⁿ",
        "C):   n aⁿ",
        "D):   0"
      ],
      correctAnswer: "A",
      explanation: "Using algebraic identity or L'Hôpital's rule, lim_{x→a} (xⁿ − aⁿ)/(x − a) = n aⁿ⁻¹."
    },
    // Q7 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-7",
      question: "The derivative of any constant c with respect to x is:",
      options: [
        "A):   1",
        "B):   0",
        "C):   c",
        "D):   cx"
      ],
      correctAnswer: "B",
      explanation: "Since a constant does not change as x varies, its instantaneous rate of change is 0."
    },
    // Q8 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-8",
      question: "The derivative of sec x with respect to x is:",
      options: [
        "A):   tan² x",
        "B):   −sec x tan x",
        "C):   cosec x cot x",
        "D):   sec x tan x"
      ],
      correctAnswer: "D",
      explanation: "d/dx (sec x) = d/dx (1/cos x) = sin x / cos² x = sec x tan x."
    },
    // Q9 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-9",
      question: "The quotient rule for differentiating u/v is:",
      options: [
        "A):   (u'v + uv')/v²",
        "B):   u'/v'",
        "C):   (u u' − v v')/v²",
        "D):   (v u' − u v')/v²"
      ],
      correctAnswer: "D",
      explanation: "The quotient rule states that (u/v)' = (v u' − u v') / v²."
    },
    // Q10 (Tier 1 - Recall)
    {
      id: "c11-math-12-mcq-10",
      question: "The derivative of cosec x with respect to x is:",
      options: [
        "A):   cot² x",
        "B):   cosec x cot x",
        "C):   −cosec x cot x",
        "D):   −cosec² x"
      ],
      correctAnswer: "C",
      explanation: "d/dx (cosec x) = −cosec x cot x."
    },
    // Q11 (Tier 2 - Moderate)
    {
      id: "c11-math-12-mcq-11",
      question: "Evaluate lim_{x→0} ((x + 1)⁵ − 1)/x.",
      options: [
        "A):   5",
        "B):   1",
        "C):   0",
        "D):   10"
      ],
      correctAnswer: "A",
      explanation: "Substitute y = x + 1. Then lim_{y→1} (y⁵ − 1⁵)/(y − 1) = 5(1)⁴ = 5."
    },
    // Q12 (Tier 2 - Moderate)
    {
      id: "c11-math-12-mcq-12",
      question: "Evaluate lim_{x→2} (3x² − x − 10)/(x² − 4).",
      options: [
        "A):   5/2",
        "B):   7/4",
        "C):   11/4",
        "D):   3"
      ],
      correctAnswer: "C",
      explanation: "Factorizing gives (x − 2)(3x + 5) / [(x − 2)(x + 2)]. Cancelling (x − 2) and substituting x = 2 gives (6 + 5)/4 = 11/4."
    },
    // Q13 (Tier 2 - Moderate)
    {
      id: "c11-math-12-mcq-13",
      question: "Find the derivative of (x − 1)(x − 2) with respect to x.",
      options: [
        "A):   2x − 1",
        "B):   2x − 3",
        "C):   x − 3",
        "D):   2x + 3"
      ],
      correctAnswer: "B",
      explanation: "Expanding: f(x) = x² − 3x + 2. Differentiating gives f'(x) = 2x − 3."
    },
    // Q14 (Tier 2 - Moderate)
    {
      id: "c11-math-12-mcq-14",
      question: "Evaluate lim_{x→0} (cos 2x − 1)/(cos x − 1).",
      options: [
        "A):   1",
        "B):   2",
        "C):   −4",
        "D):   4"
      ],
      correctAnswer: "D",
      explanation: "Using 1 − cos 2x = 2 sin² x and 1 − cos x = 2 sin²(x/2): lim_{x→0} [sin² x / sin²(x/2)] = 4."
    },
    // Q15 (Tier 2 - Moderate)
    {
      id: "c11-math-12-mcq-15",
      question: "Evaluate lim_{x→0} (sin ax)/(bx).",
      options: [
        "A):   a/b",
        "B):   b/a",
        "C):   1",
        "D):   0"
      ],
      correctAnswer: "A",
      explanation: "lim_{x→0} [sin(ax)/(ax)] × (a/b) = 1 × (a/b) = a/b."
    },
    // Q16 (Tier 2 - Moderate)
    {
      id: "c11-math-12-mcq-16",
      question: "Find the derivative of 1/x² with respect to x.",
      options: [
        "A):   2/x³",
        "B):   −1/x³",
        "C):   −1/2x",
        "D):   −2/x³"
      ],
      correctAnswer: "D",
      explanation: "d/dx (x⁻²) = −2 x⁻³ = −2/x³."
    },
    // Q17 (Tier 2 - Moderate)
    {
      id: "c11-math-12-mcq-17",
      question: "Evaluate lim_{x→0} (cosec x − cot x).",
      options: [
        "A):   0",
        "B):   1",
        "C):   ∞",
        "D):   −1"
      ],
      correctAnswer: "A",
      explanation: "(1 − cos x)/sin x = 2 sin²(x/2) / [2 sin(x/2) cos(x/2)] = tan(x/2) → tan 0 = 0."
    },
    // Q18 (Tier 2 - Moderate)
    {
      id: "c11-math-12-mcq-18",
      question: "Find the derivative of sin x cos x with respect to x.",
      options: [
        "A):   sin 2x",
        "B):   cos² x",
        "C):   cos 2x",
        "D):   −cos 2x"
      ],
      correctAnswer: "C",
      explanation: "sin x cos x = (1/2) sin 2x. Derivative = (1/2)(2 cos 2x) = cos 2x = cos² x − sin² x."
    },
    // Q19 (Tier 3 - Advanced)
    {
      id: "c11-math-12-mcq-19",
      question: "For f(x) = x¹⁰⁰/100 + x⁹⁹/99 + ... + x²/2 + x + 1, the value of f'(1) is:",
      options: [
        "A):   50",
        "B):   100",
        "C):   1",
        "D):   100!"
      ],
      correctAnswer: "B",
      explanation: "f'(x) = x⁹⁹ + x⁹⁸ + ... + x + 1. At x = 1, f'(1) = 1 + 1 + ... + 1 (100 terms) = 100."
    },
    // Q20 (Tier 3 - Advanced)
    {
      id: "c11-math-12-mcq-20",
      question: "Evaluate lim_{x→0} f(x) where f(x) = |x|/x for x ≠ 0 and f(0) = 0.",
      options: [
        "A):   1",
        "B):   −1",
        "C):   Does not exist",
        "D):   0"
      ],
      correctAnswer: "C",
      explanation: "LHL as x→0⁻ is −x/x = −1, while RHL as x→0⁺ is x/x = 1. Since LHL ≠ RHL, the limit does not exist."
    },
    // Q21 (Tier 3 - Advanced)
    {
      id: "c11-math-12-mcq-21",
      question: "If lim_{x→1} [f(x) − 2]/(x² − 1) = π, then lim_{x→1} f(x) equals:",
      options: [
        "A):   π",
        "B):   0",
        "C):   1",
        "D):   2"
      ],
      correctAnswer: "D",
      explanation: "lim_{x→1} [f(x) − 2] = π × lim_{x→1} (x² − 1) = π × 0 = 0 ⇒ lim_{x→1} f(x) = 2."
    },
    // Q22 (Tier 3 - Advanced)
    {
      id: "c11-math-12-mcq-22",
      question: "Find the derivative of (ax + b)/(cx + d) with respect to x.",
      options: [
        "A):   (ad + bc)/(cx + d)²",
        "B):   a/c",
        "C):   (ad − bc)/(cx + d)²",
        "D):   (bc − ad)/(cx + d)²"
      ],
      correctAnswer: "C",
      explanation: "By quotient rule: [(cx + d)(a) − (ax + b)(c)] / (cx + d)² = (acx + ad − acx − bc)/(cx + d)² = (ad − bc)/(cx + d)²."
    },
    // Q23 (Tier 3 - Advanced)
    {
      id: "c11-math-12-mcq-23",
      question: "Find the derivative of (x + 1)/(x − 1) from first principle.",
      options: [
        "A):   −2/(x − 1)²",
        "B):   2/(x − 1)²",
        "C):   1/(x − 1)",
        "D):   −1/(x − 1)²"
      ],
      correctAnswer: "A",
      explanation: "Applying the quotient rule or first principle: [(x − 1)(1) − (x + 1)(1)] / (x − 1)² = −2 / (x − 1)²."
    },
    // Q24 (Tier 3 - Advanced)
    {
      id: "c11-math-12-mcq-24",
      question: "If f(x) = { a + bx for x < 1, 4 for x = 1, b − ax for x > 1 } and lim_{x→1} f(x) = f(1), then (a, b) is:",
      options: [
        "A):   (4, 0)",
        "B):   (0, 4)",
        "C):   (2, 2)",
        "D):   (1, 3)"
      ],
      correctAnswer: "B",
      explanation: "LHL = a + b = 4 and RHL = b − a = 4. Adding gives 2b = 8 ⇒ b = 4, then a = 0. Thus (a, b) = (0, 4)."
    },
    // Q25 (Tier 3 - Advanced)
    {
      id: "c11-math-12-mcq-25",
      question: "Find the derivative of cos x / (1 + sin x).",
      options: [
        "A):   −1 / (1 + sin x)",
        "B):   1 / (1 + sin x)",
        "C):   −cos x / (1 + sin x)²",
        "D):   sin x / (1 + sin x)"
      ],
      correctAnswer: "A",
      explanation: "[(1 + sin x)(−sin x) − cos x(cos x)] / (1 + sin x)² = [−sin x − (sin² x + cos² x)] / (1 + sin x)² = −(1 + sin x) / (1 + sin x)² = −1 / (1 + sin x)."
    }
  ];
}

module.exports = {
  buildOverview,
  buildMCQs
};
