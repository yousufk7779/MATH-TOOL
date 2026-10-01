const { THEME_COLOR, frac } = require("./ch10_common");

function buildOverview() {
  const svgConics = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 500 240" style="width: 100%; max-width: 460px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Circle -->
        <g transform="translate(60, 110)">
          <circle cx="0" cy="0" r="38" fill="#E0F7FA" stroke="#00BCD4" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="3" fill="#00838F"/>
          <line x1="0" y1="0" x2="38" y2="0" stroke="#00838F" stroke-width="1.8"/>
          <text x="12" y="-6" font-size="11" font-weight="700" fill="#00838F">r</text>
          <text x="-20" y="55" font-size="13" font-weight="800" fill="#006064">Circle (e = 0)</text>
        </g>
        <!-- Parabola -->
        <g transform="translate(185, 110)">
          <line x1="-35" y1="0" x2="45" y2="0" stroke="#94A3B8" stroke-width="1.5"/>
          <line x1="-20" y1="-45" x2="-20" y2="45" stroke="#94A3B8" stroke-width="1.5"/>
          <path d="M 35 -38 Q -20 0 35 38" fill="none" stroke="#E11D48" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="3" fill="#E11D48"/>
          <text x="-3" y="-6" font-size="10" font-weight="700" fill="#E11D48">F</text>
          <text x="-25" y="55" font-size="13" font-weight="800" fill="#9F1239">Parabola (e = 1)</text>
        </g>
        <!-- Ellipse -->
        <g transform="translate(315, 110)">
          <ellipse cx="0" cy="0" rx="42" ry="24" fill="#F3E8FF" stroke="#9333EA" stroke-width="2.5"/>
          <circle cx="-22" cy="0" r="3" fill="#6B21A8"/>
          <circle cx="22" cy="0" r="3" fill="#6B21A8"/>
          <text x="-8" y="-7" font-size="10" font-weight="700" fill="#6B21A8">F₁   F₂</text>
          <text x="-25" y="55" font-size="13" font-weight="800" fill="#581C87">Ellipse (e &lt; 1)</text>
        </g>
        <!-- Hyperbola -->
        <g transform="translate(440, 110)">
          <line x1="-45" y1="0" x2="45" y2="0" stroke="#94A3B8" stroke-width="1.5"/>
          <path d="M -40 -35 Q -15 0 -40 35" fill="none" stroke="#EA580C" stroke-width="2.5"/>
          <path d="M 40 -35 Q 15 0 40 35" fill="none" stroke="#EA580C" stroke-width="2.5"/>
          <circle cx="-28" cy="0" r="3" fill="#C2410C"/>
          <circle cx="28" cy="0" r="3" fill="#C2410C"/>
          <text x="-32" y="55" font-size="13" font-weight="800" fill="#7C2D12">Hyperbola (e &gt; 1)</text>
        </g>
      </svg>
    </div>
    <div class="diagram-caption">💡 The Family of Conic Sections: Circle (e = 0), Parabola (e = 1), Ellipse (e &lt; 1), Hyperbola (e &gt; 1).</div>
  </div>`;

  const svgConicAnatomy = `
  <div class="diagram-wrapper">
    <div class="diagram-svg-container">
      <svg viewBox="0 0 480 230" style="width: 100%; max-width: 440px; height: auto; display: block;" xmlns="http://www.w3.org/2000/svg">
        <!-- Coordinate axes -->
        <line x1="40" y1="115" x2="440" y2="115" stroke="#64748B" stroke-width="1.8"/>
        <line x1="160" y1="20" x2="160" y2="210" stroke="#64748B" stroke-width="1.8"/>
        <text x="430" y="132" font-size="12" font-weight="700" fill="#64748B">X</text>
        <text x="165" y="32" font-size="12" font-weight="700" fill="#64748B">Y</text>
        <!-- Directrix Line x = -a -->
        <line x1="80" y1="25" x2="80" y2="205" stroke="#DC2626" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="45" y="45" font-size="11" font-weight="700" fill="#DC2626">Directrix (x = -a)</text>
        <!-- Parabola Curve y^2 = 4ax -->
        <path d="M 360 25 Q 160 115 360 205" fill="none" stroke="#00BCD4" stroke-width="2.8"/>
        <!-- Focus S(a, 0) -->
        <circle cx="240" cy="115" r="4.5" fill="#DC2626"/>
        <text x="235" y="105" font-size="11" font-weight="700" fill="#DC2626">Focus S(a, 0)</text>
        <!-- Vertex O(0, 0) -->
        <circle cx="160" cy="115" r="4" fill="#0F172A"/>
        <text x="140" y="132" font-size="11" font-weight="700" fill="#0F172A">V(0,0)</text>
        <!-- Latus Rectum L-S-L' at x = a -->
        <line x1="240" y1="42" x2="240" y2="188" stroke="#16A34A" stroke-width="2.2"/>
        <circle cx="240" cy="42" r="3.5" fill="#16A34A"/>
        <circle cx="240" cy="188" r="3.5" fill="#16A34A"/>
        <text x="248" y="46" font-size="11" font-weight="700" fill="#16A34A">L(a, 2a)</text>
        <text x="248" y="192" font-size="11" font-weight="700" fill="#16A34A">L'(a, -2a)</text>
        <text x="290" y="110" font-size="11" font-weight="700" fill="#16A34A">Latus Rectum = 4a</text>
      </svg>
    </div>
    <div class="diagram-caption">💡 Geometric Anatomy of a Parabola: Vertex V(0,0), Focus S(a,0), Directrix x = -a, and Latus Rectum LL' = 4a.</div>
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
  .diagram-wrapper { background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(0, 229, 255, 0.4); border-radius: 10px; padding: 14px 16px; margin: 18px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35); text-align: center; }
  .diagram-svg-container { display: flex; justify-content: center; align-items: center; background: #FFFFFF; border-radius: 8px; padding: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 0 auto; max-width: 480px; }
  .diagram-caption { color: #CBD5E1; font-size: 14px; text-align: center; margin-top: 10px; line-height: 1.5; font-weight: 500; }
</style>

<div style="padding: 4px 2px;">
  <!-- Hero Banner -->
  <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.25), rgba(0, 0, 0, 0.4)); border: 1.5px solid ${THEME_COLOR}; border-radius: 14px; padding: 18px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 22px; font-weight: 800; color: ${THEME_COLOR}; margin-bottom: 6px;">
      ✦ Chapter 10: Conic Sections
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.5;">
      Class 11 NCERT Mathematics &bull; Comprehensive Reference Guide &amp; Master Formula Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ 1. Quick Glossary &amp; Fundamental Definitions</div>
    <div class="q-text">
      A <b>conic section</b> (or simply <b>conic</b>) is a curve obtained as the intersection of the surface of a double-napped right circular cone with a cutting plane.
    </div>
    <div class="sol-box">
      <div class="sol-title">Essential Definitions &amp; Unified Focus-Directrix Property:</div>
      <div class="sol-step">
        <div>• <b style="color: ${THEME_COLOR};">Focus (S):</b> The fixed point from which the distance to any point on the conic is measured.</div>
        <div>• <b style="color: ${THEME_COLOR};">Directrix (L):</b> The fixed straight line from which perpendicular distances are measured.</div>
        <div>• <b style="color: ${THEME_COLOR};">Eccentricity (e):</b> The constant ratio of the distance of any point <i>P</i> on the conic from the focus <i>S</i> to its perpendicular distance <i>PM</i> from the directrix: ${frac("SP", "PM")} = <i>e</i>.</div>
        <div>• <b style="color: ${THEME_COLOR};">Latus Rectum:</b> The chord of the conic passing through the focus and perpendicular to the axis of symmetry.</div>
      </div>
    </div>
  </div>

  ${svgConics}

  <!-- Section 2: Four Canonical Conics -->
  <div class="q-card">
    <div class="q-title">✦ 2. The Four Fundamental Conic Curves</div>
    <div class="sol-box">
      <div class="sol-step">
        <div><b style="color: ${THEME_COLOR};">(i) Circle (e = 0):</b> The cutting plane is perpendicular to the axis of the cone (&beta; = 90&deg;). Standard form with centre (<i>h</i>, <i>k</i>) and radius <i>r</i>:
          <br/>&nbsp;&nbsp;<b>(<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup></b>
        </div>
        <div><b style="color: ${THEME_COLOR};">(ii) Parabola (e = 1):</b> The cutting plane is parallel to a generator of the cone (&beta; = &alpha;). Any point is equidistant from focus and directrix. Standard form:
          <br/>&nbsp;&nbsp;<b><i>y</i><sup>2</sup> = 4<i>ax</i></b> &nbsp;(opens right, focus (<i>a</i>, 0), directrix <i>x</i> = &minus;<i>a</i>, latus rectum = 4<i>a</i>)
        </div>
        <div><b style="color: ${THEME_COLOR};">(iii) Ellipse (0 &le; e &lt; 1):</b> The cutting plane intersects only one nappe of the cone and is inclined at an angle greater than the generator (&alpha; &lt; &beta; &lt; 90&deg;). Sum of distances from two foci is constant: <i>SP</i> + <i>S'P</i> = 2<i>a</i>. Standard form:
          <br/>&nbsp;&nbsp;<b>${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1</b> &nbsp;(with <i>a</i> &gt; <i>b</i>, <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup>, <i>e</i> = ${frac("c", "a")})
        </div>
        <div><b style="color: ${THEME_COLOR};">(iv) Hyperbola (e &gt; 1):</b> The cutting plane intersects both nappes of the cone (0 &le; &beta; &lt; &alpha;). Difference of distances from two foci is constant: |<i>SP</i> &minus; <i>S'P</i>| = 2<i>a</i>. Standard form:
          <br/>&nbsp;&nbsp;<b>${frac("x<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1</b> &nbsp;(with <i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>, <i>e</i> = ${frac("c", "a")})
        </div>
      </div>
    </div>
  </div>

  ${svgConicAnatomy}

  <!-- Master Revision Formula Cheat Sheet -->
  <div class="q-card" style="border-color: ${THEME_COLOR};">
    <div class="q-title" style="color: ${THEME_COLOR}; font-size: 19px;">✦ 3. Master Revision Formula Cheat Sheet</div>
    <div style="font-size: 15px; color: #FFFFFF; line-height: 2.3;">
      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">1. Standard Circle:</b> (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup><br/>
        &bull; Centre = (<i>h</i>, <i>k</i>), Radius = <i>r</i><br/>
        &bull; General form: <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + 2<i>gx</i> + 2<i>fy</i> + <i>c</i> = 0 &rArr; Centre = (&minus;<i>g</i>, &minus;<i>f</i>), Radius = &radic;(<i>g</i><sup>2</sup> + <i>f</i><sup>2</sup> &minus; <i>c</i>)
      </div>

      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">2. The 4 Forms of Parabola (Vertex at origin):</b><br/>
        &bull; <b>y<sup>2</sup> = 4ax:</b> Focus (<i>a</i>, 0), Directrix <i>x</i> = &minus;<i>a</i>, Axis: <i>y</i> = 0, LR = 4<i>a</i><br/>
        &bull; <b>y<sup>2</sup> = &minus;4ax:</b> Focus (&minus;<i>a</i>, 0), Directrix <i>x</i> = <i>a</i>, Axis: <i>y</i> = 0, LR = 4<i>a</i><br/>
        &bull; <b>x<sup>2</sup> = 4ay:</b> Focus (0, <i>a</i>), Directrix <i>y</i> = &minus;<i>a</i>, Axis: <i>x</i> = 0, LR = 4<i>a</i><br/>
        &bull; <b>x<sup>2</sup> = &minus;4ay:</b> Focus (0, &minus;<i>a</i>), Directrix <i>y</i> = <i>a</i>, Axis: <i>x</i> = 0, LR = 4<i>a</i>
      </div>

      <div style="margin-bottom: 12px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">3. Ellipse Formulas:</b><br/>
        &bull; <b>Major axis along x:</b> ${frac("x<sup>2</sup>", "a<sup>2</sup>")} + ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1 (<i>a</i> &gt; <i>b</i>)<br/>
        &nbsp;&nbsp;Foci (&plusmn;<i>c</i>, 0), Vertices (&plusmn;<i>a</i>, 0), Major axis = 2<i>a</i>, Minor axis = 2<i>b</i><br/>
        &bull; <b>Major axis along y:</b> ${frac("x<sup>2</sup>", "b<sup>2</sup>")} + ${frac("y<sup>2</sup>", "a<sup>2</sup>")} = 1 (<i>a</i> &gt; <i>b</i>)<br/>
        &nbsp;&nbsp;Foci (0, &plusmn;<i>c</i>), Vertices (0, &plusmn;<i>a</i>)<br/>
        &bull; Fundamental relation: <b>c<sup>2</sup> = a<sup>2</sup> &minus; b<sup>2</sup></b>, Eccentricity: <b>e = ${frac("c", "a")} &lt; 1</b><br/>
        &bull; Length of Latus Rectum: <b>${frac("2b<sup>2</sup>", "a")}</b>
      </div>

      <div style="margin-bottom: 6px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 8px;">
        <b style="color: ${THEME_COLOR};">4. Hyperbola Formulas:</b><br/>
        &bull; <b>Transverse axis along x:</b> ${frac("x<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("y<sup>2</sup>", "b<sup>2</sup>")} = 1<br/>
        &nbsp;&nbsp;Foci (&plusmn;<i>c</i>, 0), Vertices (&plusmn;<i>a</i>, 0), Transverse axis = 2<i>a</i>, Conjugate axis = 2<i>b</i><br/>
        &bull; <b>Transverse axis along y:</b> ${frac("y<sup>2</sup>", "a<sup>2</sup>")} &minus; ${frac("x<sup>2</sup>", "b<sup>2</sup>")} = 1<br/>
        &nbsp;&nbsp;Foci (0, &plusmn;<i>c</i>), Vertices (0, &plusmn;<i>a</i>)<br/>
        &bull; Fundamental relation: <b>c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup></b>, Eccentricity: <b>e = ${frac("c", "a")} &gt; 1</b><br/>
        &bull; Length of Latus Rectum: <b>${frac("2b<sup>2</sup>", "a")}</b>
      </div>
    </div>
  </div>
</div>`;
}

function buildMCQs() {
  return [
    // Q1 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-1",
      question: "What is the eccentricity (e) of a parabola?",
      options: [
        "A):   e = 0",
        "B):   e = 1",
        "C):   e > 1",
        "D):   0 < e < 1"
      ],
      correctAnswer: "B",
      explanation: "By definition, a parabola is the locus of a point whose distance from the focus equals its distance from the directrix, giving an eccentricity of exactly e = 1."
    },
    // Q2 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-2",
      question: "The equation of a circle having centre at the origin and radius r is given by:",
      options: [
        "A):   x² + y² = r²",
        "B):   x² − y² = r²",
        "C):   x² + y² = 2r",
        "D):   xy = r²"
      ],
      correctAnswer: "A",
      explanation: "With centre (h, k) = (0, 0), the standard equation (x − h)² + (y − k)² = r² simplifies directly to x² + y² = r²."
    },
    // Q3 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-3",
      question: "What is the length of the latus rectum of the parabola y² = 4ax?",
      options: [
        "A):   a",
        "B):   2a",
        "C):   4a",
        "D):   8a"
      ],
      correctAnswer: "C",
      explanation: "The endpoints of the latus rectum at x = a are (a, 2a) and (a, −2a), so its total length is 2a − (−2a) = 4a."
    },
    // Q4 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-4",
      question: "For an ellipse with semi-major axis a, semi-minor axis b, and focal distance c, the correct relation is:",
      options: [
        "A):   c² = a² + b²",
        "B):   a² = b² + c²",
        "C):   b² = a² + c²",
        "D):   c = a + b"
      ],
      correctAnswer: "B",
      explanation: "In an ellipse, the hypotenuse of the right triangle formed by the semi-minor axis and focal distance is the semi-major axis, so a² = b² + c² (or c² = a² − b²)."
    },
    // Q5 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-5",
      question: "What is the eccentricity of a circle?",
      options: [
        "A):   e = 1",
        "B):   e = ∞",
        "C):   e = 0.5",
        "D):   e = 0"
      ],
      correctAnswer: "D",
      explanation: "A circle is an ellipse whose two foci coincide at the centre (c = 0), hence its eccentricity e = c/a = 0."
    },
    // Q6 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-6",
      question: "The eccentricity (e) of a hyperbola always satisfies:",
      options: [
        "A):   e > 1",
        "B):   e < 1",
        "C):   e = 1",
        "D):   e = 0"
      ],
      correctAnswer: "A",
      explanation: "For any hyperbola, c² = a² + b² > a², which implies c > a and therefore e = c/a > 1."
    },
    // Q7 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-7",
      question: "What is the equation of the directrix of the parabola y² = 12x?",
      options: [
        "A):   x = 3",
        "B):   x = −3",
        "C):   y = 3",
        "D):   y = −3"
      ],
      correctAnswer: "B",
      explanation: "Comparing with y² = 4ax gives 4a = 12 ⇒ a = 3. The directrix is perpendicular to the x-axis at distance a behind the vertex: x = −a = −3 (x + 3 = 0)."
    },
    // Q8 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-8",
      question: "In the ellipse x²/a² + y²/b² = 1 (where a > b), what is the formula for the length of its latus rectum?",
      options: [
        "A):   2a²/b",
        "B):   b²/2a",
        "C):   4b²/a",
        "D):   2b²/a"
      ],
      correctAnswer: "D",
      explanation: "The focal chord perpendicular to the major axis has length 2y = 2b²/a."
    },
    // Q9 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-9",
      question: "What are the coordinates of the centre of the circle (x − 3)² + (y + 4)² = 25?",
      options: [
        "A):   (−3, 4)",
        "B):   (−3, −4)",
        "C):   (3, 4)",
        "D):   (3, −4)"
      ],
      correctAnswer: "D",
      explanation: "Comparing with (x − h)² + (y − k)² = r² gives h = 3 and k = −4, so the centre is (3, −4)."
    },
    // Q10 (Tier 1 - Recall)
    {
      id: "c11-math-10-mcq-10",
      question: "For a hyperbola x²/a² − y²/b² = 1, the relation connecting a, b, and focal distance c is:",
      options: [
        "A):   c² = a² − b²",
        "B):   b² = a² + c²",
        "C):   c² = a² + b²",
        "D):   a² = b² + c²"
      ],
      correctAnswer: "C",
      explanation: "In a hyperbola, c is greater than both a and b, and the fundamental identity is c² = a² + b²."
    },
    // Q11 (Tier 2 - Moderate)
    {
      id: "c11-math-10-mcq-11",
      question: "Find the radius of the circle x² + y² − 4x − 8y − 45 = 0.",
      options: [
        "A):   √65",
        "B):   8",
        "C):   √53",
        "D):   7"
      ],
      correctAnswer: "A",
      explanation: "Completing squares: (x − 2)² + (y − 4)² = 45 + 4 + 16 = 65. Thus, the radius r = √65."
    },
    // Q12 (Tier 2 - Moderate)
    {
      id: "c11-math-10-mcq-12",
      question: "The focus of the parabola x² = −16y is:",
      options: [
        "A):   (−4, 0)",
        "B):   (0, 4)",
        "C):   (0, −4)",
        "D):   (4, 0)"
      ],
      correctAnswer: "C",
      explanation: "Comparing with x² = −4ay gives 4a = 16 ⇒ a = 4. The parabola opens downwards, so the focus is at (0, −a) = (0, −4)."
    },
    // Q13 (Tier 2 - Moderate)
    {
      id: "c11-math-10-mcq-13",
      question: "Find the eccentricity of the ellipse x²/25 + y²/16 = 1.",
      options: [
        "A):   4/5",
        "B):   3/5",
        "C):   9/25",
        "D):   5/3"
      ],
      correctAnswer: "B",
      explanation: "Here a² = 25 and b² = 16. Then c² = a² − b² = 25 − 16 = 9 ⇒ c = 3. Eccentricity e = c/a = 3/5."
    },
    // Q14 (Tier 2 - Moderate)
    {
      id: "c11-math-10-mcq-14",
      question: "The length of the transverse axis of the hyperbola x²/16 − y²/9 = 1 is:",
      options: [
        "A):   6",
        "B):   10",
        "C):   16",
        "D):   8"
      ],
      correctAnswer: "D",
      explanation: "Here a² = 16 ⇒ a = 4. The length of the transverse axis is 2a = 2(4) = 8."
    },
    // Q15 (Tier 2 - Moderate)
    {
      id: "c11-math-10-mcq-15",
      question: "If a parabola has its vertex at (0, 0), focus at (0, 3), its equation is:",
      options: [
        "A):   x² = 12y",
        "B):   y² = 12x",
        "C):   x² = −12y",
        "D):   y² = 3x"
      ],
      correctAnswer: "A",
      explanation: "Focus (0, 3) lies on the positive y-axis, so the axis is the y-axis and the parabola opens upwards: x² = 4ay = 4(3)y = 12y."
    },
    // Q16 (Tier 2 - Moderate)
    {
      id: "c11-math-10-mcq-16",
      question: "Find the length of the latus rectum of the hyperbola 9y² − 4x² = 36.",
      options: [
        "A):   6",
        "B):   4",
        "C):   18",
        "D):   9"
      ],
      correctAnswer: "D",
      explanation: "Dividing by 36 gives y²/4 − x²/9 = 1, so a² = 4 (a = 2) and b² = 9. Length of latus rectum = 2b²/a = 2(9)/2 = 9."
    },
    // Q17 (Tier 2 - Moderate)
    {
      id: "c11-math-10-mcq-17",
      question: "The equation of the circle passing through the origin and having intercepts 4 and 6 on the coordinate axes is:",
      options: [
        "A):   x² + y² − 4x − 6y = 0",
        "B):   x² + y² + 4x + 6y = 0",
        "C):   x² + y² − 2x − 3y = 0",
        "D):   x² + y² = 52"
      ],
      correctAnswer: "A",
      explanation: "A circle passing through (0, 0), (a, 0), and (0, b) has the standard form x² + y² − ax − by = 0. Substituting a = 4, b = 6 gives x² + y² − 4x − 6y = 0."
    },
    // Q18 (Tier 2 - Moderate)
    {
      id: "c11-math-10-mcq-18",
      question: "Find the coordinates of the foci of the ellipse x²/4 + y²/25 = 1.",
      options: [
        "A):   (±√21, 0)",
        "B):   (0, ±5)",
        "C):   (0, ±√21)",
        "D):   (±2, 0)"
      ],
      correctAnswer: "C",
      explanation: "Since the denominator of y² (25) is greater than that of x² (4), the major axis is along the y-axis. Here a = 5, b = 2, so c = √(25 − 4) = √21. Foci are (0, ±√21)."
    },
    // Q19 (Tier 3 - Advanced)
    {
      id: "c11-math-10-mcq-19",
      question: "If a parabolic reflector is 20 cm in diameter and 5 cm deep, its focus is situated at:",
      options: [
        "A):   (10, 0)",
        "B):   (5, 0)",
        "C):   (2.5, 0)",
        "D):   (0, 5)"
      ],
      correctAnswer: "B",
      explanation: "Using y² = 4ax with point (5, 10): 100 = 4a(5) = 20a ⇒ a = 5. Thus, the focus is at (5, 0), which is exactly at the midpoint of the circular aperture."
    },
    // Q20 (Tier 3 - Advanced)
    {
      id: "c11-math-10-mcq-20",
      question: "The area of the triangle formed by joining the vertex of the parabola x² = 12y to the ends of its latus rectum is:",
      options: [
        "A):   36 sq units",
        "B):   24 sq units",
        "C):   18 sq units",
        "D):   12 sq units"
      ],
      correctAnswer: "C",
      explanation: "For x² = 12y, a = 3. Endpoints of LR at y = 3 are (−6, 3) and (6, 3). Base = 12, height = 3. Area = (1/2) × 12 × 3 = 18 sq units."
    },
    // Q21 (Tier 3 - Advanced)
    {
      id: "c11-math-10-mcq-21",
      question: "An equilateral triangle is inscribed in the parabola y² = 4ax with one vertex at the origin. The length of each side of the triangle is:",
      options: [
        "A):   4√3 a",
        "B):   12a",
        "C):   6√3 a",
        "D):   8√3 a"
      ],
      correctAnswer: "D",
      explanation: "Let the other two vertices be (k, ±2√(ak)). Side length = 4√(ak). Setting OA² = AB² gives k² + 4ak = 16ak ⇒ k = 12a. Side = 4√(12a²) = 8√3 a."
    },
    // Q22 (Tier 3 - Advanced)
    {
      id: "c11-math-10-mcq-22",
      question: "A rod of length 12 cm moves with ends on the coordinate axes. The locus of a point on the rod 3 cm from the x-axis end is:",
      options: [
        "A):   A circle of radius 9",
        "B):   A parabola of latus rectum 12",
        "C):   An ellipse: x²/81 + y²/9 = 1",
        "D):   A hyperbola: x²/81 − y²/9 = 1"
      ],
      correctAnswer: "C",
      explanation: "With AP = 3 and PB = 9, cos θ = x/9 and sin θ = y/3. Using cos² θ + sin² θ = 1 gives the ellipse x²/81 + y²/9 = 1."
    },
    // Q23 (Tier 3 - Advanced)
    {
      id: "c11-math-10-mcq-23",
      question: "A point moves such that the sum of its distances from (4, 0) and (−4, 0) is always 10. The equation of its path is:",
      options: [
        "A):   x²/25 + y²/9 = 1",
        "B):   x²/25 − y²/9 = 1",
        "C):   x²/16 + y²/25 = 1",
        "D):   x² + y² = 25"
      ],
      correctAnswer: "A",
      explanation: "The locus is an ellipse with 2a = 10 ⇒ a = 5 and foci at (±4, 0) ⇒ c = 4. Then b² = a² − c² = 25 − 16 = 9. Path is x²/25 + y²/9 = 1."
    },
    // Q24 (Tier 3 - Advanced)
    {
      id: "c11-math-10-mcq-24",
      question: "The eccentricity of a rectangular (equilateral) hyperbola x² − y² = a² is:",
      options: [
        "A):   2",
        "B):   √2",
        "C):   √3",
        "D):   1.5"
      ],
      correctAnswer: "B",
      explanation: "For a rectangular hyperbola, b = a. Thus c² = a² + a² = 2a² ⇒ c = √2 a. Hence e = c/a = √2."
    },
    // Q25 (Tier 3 - Advanced)
    {
      id: "c11-math-10-mcq-25",
      question: "The equation of the hyperbola with foci (0, ±√10) and passing through the point (2, 3) is:",
      options: [
        "A):   y²/5 − x²/5 = 1",
        "B):   x²/5 − y²/5 = 1",
        "C):   y²/10 − x²/6 = 1",
        "D):   y²/9 − x²/4 = 1"
      ],
      correctAnswer: "A",
      explanation: "With foci on the y-axis, c² = 10 ⇒ b² = 10 − a². Substituting (2, 3) gives 9/a² − 4/(10 − a²) = 1, which factors as (a² − 18)(a² − 5) = 0. Since c² > a², a² = 5 and b² = 5, yielding y²/5 − x²/5 = 1."
    }
  ];
}

module.exports = {
  buildOverview,
  buildMCQs
};
