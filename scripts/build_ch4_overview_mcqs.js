const { styleBlock, themeColor } = require('./ch4_common');

function getChapter4Overview() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Hero Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.22), rgba(255, 61, 0, 0.28)); border: 1.5px solid #FF9100; border-radius: 14px; padding: 20px 16px; margin-bottom: 24px; text-align: center; box-shadow: 0 4px 20px rgba(255, 145, 0, 0.25);">
    <div style="font-size: 22px; font-weight: 800; color: #FF9100; letter-spacing: 0.5px;">
      ⚡ CHAPTER 4: COMPLEX NUMBERS &amp; QUADRATIC EQUATIONS
    </div>
    <div style="font-size: 15px; color: #FFB74D; font-weight: 600; margin-top: 4px;">
      सम्मिश्र संख्याएं एवं द्विघातीय समीकरण &bull; Class 11 Mathematics Master Reference Guide
    </div>
    <div style="font-size: 13.5px; color: #CBD5E1; margin-top: 8px; line-height: 1.5;">
      Imaginary Unit <i>i</i> &bull; Standard Form <i>a</i> + <i>ib</i> &bull; Modulus &amp; Conjugate &bull; Argand Plane &amp; Polar Form &bull; Complex Quadratic Roots
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(255, 145, 0, 0.45); border-radius: 12px; padding: 16px; margin-bottom: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
    <div style="font-size: 17px; font-weight: 800; color: #FF9100; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
      📖 Quick Glossary &amp; Core Definitions
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 14px; line-height: 1.6;">
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #FF9100;">
        <b style="color: #FF9100;">Imaginary Unit (<i>i</i>):</b> Defined as <i>i</i> = &radic;(&minus;1), satisfying <i>i</i><sup>2</sup> = &minus;1, <i>i</i><sup>3</sup> = &minus;<i>i</i>, <i>i</i><sup>4</sup> = 1.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #FF9100;">
        <b style="color: #FF9100;">Complex Number (<i>z</i>):</b> An expression <i>z</i> = <i>a</i> + <i>ib</i>, where <i>a</i>, <i>b</i> &isin; &reals;. Re(<i>z</i>) = <i>a</i> and Im(<i>z</i>) = <i>b</i>.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #FF9100;">
        <b style="color: #FF9100;">Conjugate (<i>z&#772;</i>):</b> If <i>z</i> = <i>a</i> + <i>ib</i>, its complex conjugate is <i>z&#772;</i> = <i>a</i> &minus; <i>ib</i> (reflection across real axis).
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #FF9100;">
        <b style="color: #FF9100;">Modulus (|<i>z</i>|):</b> The Euclidean distance from the origin: |<i>z</i>| = &radic;(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>). Note: <i>z</i> &times; <i>z&#772;</i> = |<i>z</i>|<sup>2</sup>.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #FF9100;">
        <b style="color: #FF9100;">Multiplicative Inverse:</b> For <i>z</i> &ne; 0, <i>z</i><sup>&minus;1</sup> = <span class="frac"><span class="num"><i>z&#772;</i></span><span class="den">|<i>z</i>|<sup>2</sup></span></span> = <span class="frac"><span class="num"><i>a</i> &minus; <i>ib</i></span><span class="den"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span>.
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border-left: 3px solid #FF9100;">
        <b style="color: #FF9100;">Polar Form:</b> <i>z</i> = <i>r</i>(cos &theta; + <i>i</i> sin &theta;), where <i>r</i> = |<i>z</i>| and &minus;&pi; &lt; &theta; &le; &pi; is principal argument.
      </div>
    </div>
  </div>

  <!-- Section 4.1: The Origin & Algebra of Complex Numbers -->
  <div style="margin-bottom: 26px;">
    <h2 style="color: #FF9100; font-size: 19px; font-weight: 800; border-bottom: 2px solid rgba(255, 145, 0, 0.4); padding-bottom: 6px; margin-bottom: 12px;">
      4.1 The Imaginary Unit &amp; Algebra of Complex Numbers
    </h2>
    <p style="color: #E2E8F0; line-height: 1.85; font-size: 15px; margin-bottom: 12px;">
      In the real number system, the square of every real number is non-negative, meaning quadratic equations such as <i>x</i><sup>2</sup> + 1 = 0 possess no real solutions. To overcome this fundamental limitation, Euler introduced the symbol <b style="color: #FF9100;"><i>i</i> (iota)</b> defined by <b><i>i</i> = &radic;(&minus;1)</b>, such that <b><i>i</i><sup>2</sup> = &minus;1</b>.
    </p>

    <!-- Standalone Complex Conjugate SVG Diagram Card -->
    <div class="diagram-wrapper">
      <svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg">
        <rect width="380" height="230" fill="#FFFFFF" rx="8" />
        <text x="190" y="22" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#E65100" text-anchor="middle">Argand Reflection: z and Conjugate z̄</text>
        
        <!-- Coordinate Axes -->
        <line x1="30" y1="115" x2="350" y2="115" stroke="#333333" stroke-width="2" />
        <line x1="120" y1="25" x2="120" y2="215" stroke="#333333" stroke-width="2" />
        
        <text x="355" y="119" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#333">Re(z)</text>
        <text x="120" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#333" text-anchor="middle">Im(z)</text>

        <!-- Point z = a + ib at (260, 50) -->
        <line x1="120" y1="115" x2="260" y2="50" stroke="#FF9100" stroke-width="2.5" />
        <circle cx="260" cy="50" r="5" fill="#E65100" />
        <text x="268" y="46" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#BF360C">z = a + ib</text>

        <!-- Point z_bar = a - ib at (260, 180) -->
        <line x1="120" y1="115" x2="260" y2="180" stroke="#00C6FF" stroke-width="2.5" />
        <circle cx="260" cy="180" r="5" fill="#0091EA" />
        <text x="268" y="186" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#01579B">z̄ = a − ib</text>

        <!-- Vertical reflection line -->
        <line x1="260" y1="50" x2="260" y2="180" stroke="#9E9E9E" stroke-width="1.8" stroke-dasharray="4,4" />
        <circle cx="260" cy="115" r="3" fill="#616161" />
        <text x="260" y="130" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold" fill="#424242" text-anchor="middle">a</text>

        <!-- Modulus labels -->
        <text x="180" y="75" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#E65100">|z|</text>
        <text x="180" y="160" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#0091EA">|z̄| = |z|</text>

        <!-- Angle arcs -->
        <path d="M 160 115 A 40 40 0 0 0 155 96" fill="none" stroke="#E91E63" stroke-width="2" />
        <text x="168" y="103" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold" fill="#C2185B">+θ</text>
        
        <path d="M 160 115 A 40 40 0 0 1 155 134" fill="none" stroke="#2E7D32" stroke-width="2" />
        <text x="168" y="135" font-family="-apple-system, sans-serif" font-size="11" font-weight="bold" fill="#1B5E20">−θ</text>
      </svg>
      <div class="diagram-caption">💡 Geometric Conjugate Law: Conjugate z̄ is the mirror reflection of z across the Real Axis</div>
    </div>

    <div style="background: rgba(0,0,0,0.3); border-left: 4px solid #FF9100; padding: 12px 14px; border-radius: 6px; margin: 12px 0; font-size: 14.5px; line-height: 1.85;">
      <div>• <b style="color: #FF9100;">Cyclic Nature of Powers of <i>i</i>:</b> For any integer <i>k</i>:</div>
      <div>&nbsp;&nbsp;<i>i</i><sup>4<i>k</i></sup> = 1, &nbsp;&nbsp; <i>i</i><sup>4<i>k</i>+1</sup> = <i>i</i>, &nbsp;&nbsp; <i>i</i><sup>4<i>k</i>+2</sup> = &minus;1, &nbsp;&nbsp; <i>i</i><sup>4<i>k</i>+3</sup> = &minus;<i>i</i></div>
      <div>• <b style="color: #FF9100;">Addition &amp; Subtraction:</b> (<i>a</i> + <i>ib</i>) &plusmn; (<i>c</i> + <i>id</i>) = (<i>a</i> &plusmn; <i>c</i>) + <i>i</i>(<i>b</i> &plusmn; <i>d</i>)</div>
      <div>• <b style="color: #FF9100;">Multiplication:</b> (<i>a</i> + <i>ib</i>)(<i>c</i> + <i>id</i>) = (<i>ac</i> &minus; <i>bd</i>) + <i>i</i>(<i>ad</i> + <i>bc</i>)</div>
      <div>• <b style="color: #FF9100;">Division (Rationalisation):</b> <span class="frac"><span class="num"><i>a</i> + <i>ib</i></span><span class="den"><i>c</i> + <i>id</i></span></span> = <span class="frac"><span class="num">(<i>a</i> + <i>ib</i>)(<i>c</i> &minus; <i>id</i>)</span><span class="den"><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span></span> = <span class="frac"><span class="num"><i>ac</i> + <i>bd</i></span><span class="den"><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span></span> + <i>i</i><span class="frac"><span class="num"><i>bc</i> &minus; <i>ad</i></span><span class="den"><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span></span></div>
    </div>
  </div>

  <!-- Master Revision Formula Cheat Sheet -->
  <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(50, 20, 0, 0.95)); border: 2px solid #FF9100; border-radius: 14px; padding: 18px 16px; margin-top: 26px; box-shadow: 0 4px 25px rgba(255, 145, 0, 0.35);">
    <div style="font-size: 20px; font-weight: 800; color: #FFB74D; text-align: center; margin-bottom: 14px; letter-spacing: 0.5px;">
      🏆 MASTER REVISION FORMULA CHEAT SHEET
    </div>
    <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left; color: #E2E8F0;">
        <thead>
          <tr style="background: rgba(255, 145, 0, 0.25); color: #FFB74D; border-bottom: 2px solid #FF9100;">
            <th style="padding: 10px 12px; font-weight: 700;">Formula Category</th>
            <th style="padding: 10px 12px; font-weight: 700;">Standard Mathematical Relation</th>
            <th style="padding: 10px 12px; font-weight: 700;">Notes &amp; Properties</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 12px; font-weight: 700; color: #FFB74D;">Powers of Iota</td>
            <td style="padding: 10px 12px;"><i>i</i><sup>4<i>n</i></sup> = 1, &nbsp; <i>i</i><sup>4<i>n</i>+1</sup> = <i>i</i>, &nbsp; <i>i</i><sup>4<i>n</i>+2</sup> = &minus;1, &nbsp; <i>i</i><sup>4<i>n</i>+3</sup> = &minus;<i>i</i></td>
            <td style="padding: 10px 12px;">Sum of 4 consecutive powers: <i>i</i><sup><i>n</i></sup> + <i>i</i><sup><i>n</i>+1</sup> + <i>i</i><sup><i>n</i>+2</sup> + <i>i</i><sup><i>n</i>+3</sup> = 0</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
            <td style="padding: 10px 12px; font-weight: 700; color: #FFB74D;">Modulus &amp; Product</td>
            <td style="padding: 10px 12px;">|<i>z</i>| = &radic;(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), &nbsp;&nbsp; <i>z</i> &times; <i>z&#772;</i> = |<i>z</i>|<sup>2</sup></td>
            <td style="padding: 10px 12px;">|<i>z</i><sub>1</sub><i>z</i><sub>2</sub>| = |<i>z</i><sub>1</sub>||<i>z</i><sub>2</sub>|, &nbsp; |<span class="frac"><span class="num"><i>z</i><sub>1</sub></span><span class="den"><i>z</i><sub>2</sub></span></span>| = <span class="frac"><span class="num">|<i>z</i><sub>1</sub>|</span><span class="den">|<i>z</i><sub>2</sub>|</span></span></td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 12px; font-weight: 700; color: #FFB74D;">Multiplicative Inverse</td>
            <td style="padding: 10px 12px;"><i>z</i><sup>&minus;1</sup> = <span class="frac"><span class="num"><i>z&#772;</i></span><span class="den">|<i>z</i>|<sup>2</sup></span></span> = <span class="frac"><span class="num"><i>a</i> &minus; <i>ib</i></span><span class="den"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span></td>
            <td style="padding: 10px 12px;">Defined for all non-zero <i>z</i> &ne; 0</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02);">
            <td style="padding: 10px 12px; font-weight: 700; color: #FFB74D;">Polar Representation</td>
            <td style="padding: 10px 12px;"><i>z</i> = <i>r</i>(cos &theta; + <i>i</i> sin &theta;)</td>
            <td style="padding: 10px 12px;"><i>r</i> = |<i>z</i>|, &nbsp; Principal Argument &minus;&pi; &lt; &theta; &le; &pi;</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
            <td style="padding: 10px 12px; font-weight: 700; color: #FFB74D;">Argument in Quadrants</td>
            <td style="padding: 10px 12px;">
              Q I: &theta; = &alpha;<br/>
              Q II: &theta; = &pi; &minus; &alpha;<br/>
              Q III: &theta; = &minus;(&pi; &minus; &alpha;)<br/>
              Q IV: &theta; = &minus;&alpha;
            </td>
            <td style="padding: 10px 12px;">Where acute angle &alpha; = tan<sup>&minus;1</sup>|<span class="frac"><span class="num"><i>b</i></span><span class="den"><i>a</i></span></span>|</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: 700; color: #FFB74D;">Quadratic Formula (D &lt; 0)</td>
            <td style="padding: 10px 12px;"><i>x</i> = <span class="frac"><span class="num">&minus;<i>b</i> &plusmn; <i>i</i>&radic;(4<i>ac</i> &minus; <i>b</i><sup>2</sup>)</span><span class="den">2<i>a</i></span></span></td>
            <td style="padding: 10px 12px;">Roots are complex conjugates of each other</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`;
}

const chapter4MCQs = [
  {
    id: "c11-math-ch4-mcq-1",
    question: "The value of (5i)(−3/5 i) expressed in standard form a + ib is:",
    options: [
      "A):   −3 + 0i",
      "B):   0 + 3i",
      "C):   3 + 0i",
      "D):   3 − 3i"
    ],
    correctAnswer: "C",
    explanation: "5 × (−3/5) × i² = −3 × (−1) = 3 = 3 + 0i."
  },
  {
    id: "c11-math-ch4-mcq-2",
    question: "The value of i⁹ + i¹⁹ is equal to:",
    options: [
      "A):   0 + 0i",
      "B):   2i",
      "C):   −2i",
      "D):   1 + 0i"
    ],
    correctAnswer: "A",
    explanation: "i⁹ = (i⁴)² · i = i. i¹⁹ = (i⁴)⁴ · i³ = −i. Hence, i⁹ + i¹⁹ = i − i = 0 = 0 + 0i."
  },
  {
    id: "c11-math-ch4-mcq-3",
    question: "The value of i^(−39) is:",
    options: [
      "A):   −i",
      "B):   i",
      "C):   1",
      "D):   −1"
    ],
    correctAnswer: "B",
    explanation: "i^(−39) = 1 / i³⁹ = 1 / (i³⁶ · i³) = 1 / (−i) = i / (−i²) = i / 1 = i."
  },
  {
    id: "c11-math-ch4-mcq-4",
    question: "The value of (1 − i)⁴ is:",
    options: [
      "A):   4",
      "B):   4i",
      "C):   −4i",
      "D):   −4"
    ],
    correctAnswer: "D",
    explanation: "(1 − i)² = 1 − 2i + i² = −2i. Then ((1 − i)²)² = (−2i)² = 4i² = −4."
  },
  {
    id: "c11-math-ch4-mcq-5",
    question: "The modulus of the complex number z = −1 − i√3 is:",
    options: [
      "A):   1",
      "B):   2",
      "C):   4",
      "D):   √3"
    ],
    correctAnswer: "B",
    explanation: "|z| = √((−1)² + (−√3)²) = √(1 + 3) = √4 = 2."
  },
  {
    id: "c11-math-ch4-mcq-6",
    question: "The principal argument of the complex number z = −√3 + i is:",
    options: [
      "A):   5π/6",
      "B):   π/6",
      "C):   −5π/6",
      "D):   2π/3"
    ],
    correctAnswer: "A",
    explanation: "x = −√3 < 0, y = 1 > 0 (Quadrant II). Reference angle α = tan⁻¹(1/√3) = π/6. In Q II, θ = π − π/6 = 5π/6."
  },
  {
    id: "c11-math-ch4-mcq-7",
    question: "The multiplicative inverse of z = 4 − 3i is:",
    options: [
      "A):   (4 − 3i) / 25",
      "B):   (4 + 3i) / 7",
      "C):   (4 + 3i) / 25",
      "D):   (−4 + 3i) / 25"
    ],
    correctAnswer: "C",
    explanation: "z⁻¹ = z̄ / |z|² = (4 + 3i) / (4² + (−3)²) = (4 + 3i) / 25 = 4/25 + (3/25)i."
  },
  {
    id: "c11-math-ch4-mcq-8",
    question: "The polar form of the complex number −1 + i is:",
    options: [
      "A):   √2 [cos(π/4) + i sin(π/4)]",
      "B):   √2 [cos(3π/4) + i sin(3π/4)]",
      "C):   2 [cos(3π/4) + i sin(3π/4)]",
      "D):   √2 [cos(−3π/4) + i sin(−3π/4)]"
    ],
    correctAnswer: "B",
    explanation: "r = √((-1)² + 1²) = √2. Point (−1, 1) is in Q II ⇒ θ = 3π/4. Polar form: √2[cos(3π/4) + i sin(3π/4)]."
  },
  {
    id: "c11-math-ch4-mcq-9",
    question: "The roots of the quadratic equation x² + 3 = 0 are:",
    options: [
      "A):   ±3i",
      "B):   ±3",
      "C):   ±i√3",
      "D):   √3 ± i"
    ],
    correctAnswer: "C",
    explanation: "x² = −3 ⇒ x = ±√(-3) = ±i√3."
  },
  {
    id: "c11-math-ch4-mcq-10",
    question: "The least positive integral value of m for which ((1 + i)/(1 − i))^m = 1 is:",
    options: [
      "A):   2",
      "B):   1",
      "C):   8",
      "D):   4"
    ],
    correctAnswer: "D",
    explanation: "(1 + i)/(1 − i) = (1 + i)² / 2 = 2i / 2 = i. Then i^m = 1 ⇒ least positive integer m is 4."
  },
  {
    id: "c11-math-ch4-mcq-11",
    question: "The modulus of the expression ((1 + i)/(1 − i)) − ((1 − i)/(1 + i)) is:",
    options: [
      "A):   1",
      "B):   0",
      "C):   2",
      "D):   4"
    ],
    correctAnswer: "C",
    explanation: "(1+i)/(1-i) = i and (1-i)/(1+i) = −i. Their difference is i − (−i) = 2i. Modulus |2i| = 2."
  },
  {
    id: "c11-math-ch4-mcq-12",
    question: "The number of non-zero integral solutions of the equation |1 − i|^x = 2^x is:",
    options: [
      "A):   1",
      "B):   0",
      "C):   2",
      "D):   Infinitely many"
    ],
    correctAnswer: "B",
    explanation: "|1 − i| = √2 = 2^(1/2). (2^(1/2))^x = 2^x ⇒ 2^(x/2) = 2^x ⇒ x/2 = x ⇒ x = 0. There are 0 non-zero solutions."
  },
  {
    id: "c11-math-ch4-mcq-13",
    question: "If (x + iy)³ = u + iv, then the value of u/x + v/y is equal to:",
    options: [
      "A):   2(x² − y²)",
      "B):   4(x² + y²)",
      "C):   4(x² − y²)",
      "D):   (x² − y²)"
    ],
    correctAnswer: "C",
    explanation: "u = x³ − 3xy² ⇒ u/x = x² − 3y². v = 3x²y − y³ ⇒ v/y = 3x² − y². Sum = 4x² − 4y² = 4(x² − y²)."
  },
  {
    id: "c11-math-ch4-mcq-14",
    question: "If α and β are different complex numbers with |β| = 1, then |(β − α) / (1 − ᾱβ)| equals:",
    options: [
      "A):   1",
      "B):   0",
      "C):   |α|",
      "D):   2"
    ],
    correctAnswer: "A",
    explanation: "|β − α|² / |1 − ᾱβ|² = (1 − βᾱ − αβ̄ + |α|²) / (1 − αβ̄ − ᾱβ + |α|²) = 1, since |β|² = 1."
  },
  {
    id: "c11-math-ch4-mcq-15",
    question: "For any complex number z = a + ib, the product z · z̄ is always equal to:",
    options: [
      "A):   |z|",
      "B):   |z|²",
      "C):   2|z|",
      "D):   a² − b²"
    ],
    correctAnswer: "B",
    explanation: "z · z̄ = (a + ib)(a − ib) = a² + b² = |z|²."
  },
  {
    id: "c11-math-ch4-mcq-16",
    question: "The polar representation of the pure negative real number −3 is:",
    options: [
      "A):   3 (cos 0 + i sin 0)",
      "B):   3 (cos(π/2) + i sin(π/2))",
      "C):   3 [cos(−π) + i sin(−π)]",
      "D):   3 (cos π + i sin π)"
    ],
    correctAnswer: "D",
    explanation: "r = 3 and θ = π (along negative real axis). Polar form: 3(cos π + i sin π)."
  },
  {
    id: "c11-math-ch4-mcq-17",
    question: "For any two complex numbers z₁ and z₂, Re(z₁z₂) is given by:",
    options: [
      "A):   Re z₁ Re z₂ − Im z₁ Im z₂",
      "B):   Re z₁ Re z₂ + Im z₁ Im z₂",
      "C):   Re z₁ Im z₂ + Re z₂ Im z₁",
      "D):   Re z₁ Im z₂ − Re z₂ Im z₁"
    ],
    correctAnswer: "A",
    explanation: "(x₁ + iy₁)(x₂ + iy₂) = (x₁x₂ − y₁y₂) + i(x₁y₂ + x₂y₁). Thus, Re(z₁z₂) = Re z₁ Re z₂ − Im z₁ Im z₂."
  },
  {
    id: "c11-math-ch4-mcq-18",
    question: "The conjugate of the complex number −6 − 24i is:",
    options: [
      "A):   6 + 24i",
      "B):   −6 + 24i",
      "C):   6 − 24i",
      "D):   24 − 6i"
    ],
    correctAnswer: "B",
    explanation: "The conjugate of a + ib is a − ib. For −6 − 24i, conjugate is −6 + 24i."
  },
  {
    id: "c11-math-ch4-mcq-19",
    question: "The roots of the quadratic equation 2x² + x + 1 = 0 are:",
    options: [
      "A):   (−1 ± i√7) / 2",
      "B):   (1 ± i√7) / 4",
      "C):   (−1 ± i√7) / 4",
      "D):   (−1 ± √7) / 4"
    ],
    correctAnswer: "C",
    explanation: "D = 1² − 4(2)(1) = −7. x = (−1 ± √(-7)) / 4 = (−1 ± i√7) / 4."
  },
  {
    id: "c11-math-ch4-mcq-20",
    question: "If z₁ = 2 − i and z₂ = 1 + i, then the value of |(z₁ + z₂ + 1) / (z₁ − z₂ + 1)| is:",
    options: [
      "A):   2",
      "B):   √2",
      "C):   1",
      "D):   1/√2"
    ],
    correctAnswer: "B",
    explanation: "Numerator = 4. Denominator = 2 − 2i = 2(1 − i). Quotient = 2/(1 − i) = 1 + i. Modulus |1 + i| = √2."
  },
  {
    id: "c11-math-ch4-mcq-21",
    question: "The sum of four consecutive powers of i, i.e., i + i² + i³ + i⁴, is equal to:",
    options: [
      "A):   0",
      "B):   1",
      "C):   i",
      "D):   −1"
    ],
    correctAnswer: "A",
    explanation: "i + (−1) + (−i) + 1 = 0. The sum of any four consecutive powers of i is always zero."
  },
  {
    id: "c11-math-ch4-mcq-22",
    question: "The argument of z = −1 − i lies in which quadrant of the complex plane?",
    options: [
      "A):   Quadrant I",
      "B):   Quadrant II",
      "C):   Quadrant III",
      "D):   Quadrant IV"
    ],
    correctAnswer: "C",
    explanation: "Both x = −1 < 0 and y = −1 < 0, which corresponds to Quadrant III. Principal argument is −3π/4."
  },
  {
    id: "c11-math-ch4-mcq-23",
    question: "If z = √5 + 3i, then the value of |z|² is:",
    options: [
      "A):   8",
      "B):   √14",
      "C):   14",
      "D):   34"
    ],
    correctAnswer: "C",
    explanation: "|z|² = (√5)² + 3² = 5 + 9 = 14."
  },
  {
    id: "c11-math-ch4-mcq-24",
    question: "The roots of the equation x² − x + 2 = 0 are:",
    options: [
      "A):   (−1 ± i√7) / 2",
      "B):   (1 ± i√7) / 2",
      "C):   (1 ± i√7) / 4",
      "D):   ±i√2"
    ],
    correctAnswer: "B",
    explanation: "D = (−1)² − 4(1)(2) = 1 − 8 = −7. x = (1 ± i√7) / 2."
  },
  {
    id: "c11-math-ch4-mcq-25",
    question: "If (a + ib)(c + id)(e + if)(g + ih) = A + iB, then (a² + b²)(c² + d²)(e² + f²)(g² + h²) equals:",
    options: [
      "A):   A + B",
      "B):   (A + B)²",
      "C):   √(A² + B²)",
      "D):   A² + B²"
    ],
    correctAnswer: "D",
    explanation: "Taking modulus squared on both sides: |z₁|² |z₂|² |z₃|² |z₄|² = |A + iB|² = A² + B²."
  }
];

module.exports = {
  getChapter4Overview,
  chapter4MCQs
};
