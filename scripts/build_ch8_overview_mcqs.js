const { themeColor, accentColor, styleBlock, frac } = require('./ch8_common');

function generateOverview() {
  // Standalone Diagram 1: AP vs GP Growth Comparison
  const svgApGp = `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="apGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#42A5F5"/>
          <stop offset="100%" stop-color="#1E88E5"/>
        </linearGradient>
        <linearGradient id="gpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FFA000"/>
          <stop offset="100%" stop-color="#FF6F00"/>
        </linearGradient>
      </defs>
      <!-- Background Grid -->
      <rect width="500" height="240" fill="#FFFFFF"/>
      <line x1="50" y1="200" x2="460" y2="200" stroke="#94A3B8" stroke-width="2"/>
      <line x1="50" y1="20" x2="50" y2="200" stroke="#94A3B8" stroke-width="2"/>
      
      <!-- Axis Labels -->
      <text x="460" y="218" fill="#475569" font-size="12" font-weight="700" text-anchor="end">Term Index (n) &rarr;</text>
      <text x="35" y="30" fill="#475569" font-size="12" font-weight="700" text-anchor="end">Term Value &rarr;</text>

      <!-- AP Line: a=2, d=3 -> 2, 5, 8, 11, 14, 17 -->
      <path d="M 60 190 L 140 165 L 220 140 L 300 115 L 380 90 L 450 68" fill="none" stroke="#1E88E5" stroke-width="3" stroke-dasharray="5,3"/>
      <!-- AP Dots -->
      <circle cx="60" cy="190" r="4" fill="#1E88E5"/>
      <circle cx="140" cy="165" r="4" fill="#1E88E5"/>
      <circle cx="220" cy="140" r="4" fill="#1E88E5"/>
      <circle cx="300" cy="115" r="4" fill="#1E88E5"/>
      <circle cx="380" cy="90" r="4" fill="#1E88E5"/>
      <circle cx="450" cy="68" r="4" fill="#1E88E5"/>
      <text x="390" y="82" fill="#1E88E5" font-size="12" font-weight="800">A.P. (Linear: a + (n-1)d)</text>

      <!-- GP Curve: a=1, r=2 -> 1, 2, 4, 8, 16, 32 -->
      <path d="M 60 195 Q 260 185 360 110 T 450 25" fill="none" stroke="#FF6F00" stroke-width="3.5"/>
      <circle cx="60" cy="195" r="4.5" fill="#FF6F00"/>
      <circle cx="160" cy="188" r="4.5" fill="#FF6F00"/>
      <circle cx="260" cy="170" r="4.5" fill="#FF6F00"/>
      <circle cx="340" cy="130" r="4.5" fill="#FF6F00"/>
      <circle cx="410" cy="65" r="4.5" fill="#FF6F00"/>
      <circle cx="450" cy="25" r="4.5" fill="#FF6F00"/>
      <text x="330" y="45" fill="#FF6F00" font-size="12" font-weight="800">G.P. (Exponential: a &times; rⁿ⁻¹)</text>
    </svg>
    <div class="diagram-caption">
      💡 Fundamental Divergence: Arithmetic Progression scales linearly with constant slope <i>d</i>, whereas Geometric Progression scales exponentially with constant factor <i>r</i>.
    </div>
  </div>`;

  // Standalone Diagram 2: Semi-circle Geometric Proof of AM >= GM
  const svgAmGm = `
  <div class="diagram-wrapper">
    <svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect width="500" height="240" fill="#FFFFFF"/>
      
      <!-- Semicircle -->
      <!-- Center at (250, 190), Radius = 170 -->
      <path d="M 80 190 A 170 170 0 0 1 420 190 Z" fill="#FFF8E1" stroke="#F57F17" stroke-width="2.5"/>
      
      <!-- Base Line AB of length a+b -->
      <line x1="80" y1="190" x2="420" y2="190" stroke="#334155" stroke-width="2"/>
      
      <!-- Center C (250, 190) and Radius line to top (250, 20) representing AM = (a+b)/2 -->
      <line x1="250" y1="190" x2="250" y2="20" stroke="#1E88E5" stroke-width="2.5" stroke-dasharray="4,3"/>
      <circle cx="250" cy="190" r="3.5" fill="#1E88E5"/>
      <text x="256" y="90" fill="#1E88E5" font-size="12" font-weight="800">Radius = A.M. = (a + b)/2</text>
      
      <!-- Point D on base dividing into segments a and b. Say a = 80px (80 to 160) so x = 160 -->
      <!-- Height perpendicular at x = 160 to semicircle. h = sqrt(a*b). -->
      <!-- In circle centered at 250, r=170: (160-250)^2 + y^2 = 170^2 => (-90)^2 + y^2 = 28900 => y^2 = 28900 - 8100 = 20800 => y = 144.2. Top at (160, 190 - 144 = 46) -->
      <line x1="160" y1="190" x2="160" y2="46" stroke="#43A047" stroke-width="3"/>
      <circle cx="160" cy="46" r="4" fill="#43A047"/>
      <circle cx="160" cy="190" r="3.5" fill="#334155"/>
      
      <!-- Right angle marker -->
      <rect x="160" y="178" width="12" height="12" fill="none" stroke="#334155" stroke-width="1.5"/>
      
      <!-- Segment labels -->
      <text x="115" y="210" fill="#D84315" font-size="13" font-weight="800">Segment a</text>
      <text x="280" y="210" fill="#D84315" font-size="13" font-weight="800">Segment b</text>
      <text x="95" y="110" fill="#2E7D32" font-size="12" font-weight="800">G.M. = &radic;(ab)</text>
      
      <!-- AM >= GM Visual Conclusion -->
      <rect x="290" y="35" width="190" height="50" rx="8" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/>
      <text x="385" y="55" fill="#0F172A" font-size="12" font-weight="800" text-anchor="middle">Perpendicular &le; Radius</text>
      <text x="385" y="74" fill="#E65100" font-size="13" font-weight="800" text-anchor="middle">A.M. &ge; G.M. (Equality at a = b)</text>
    </svg>
    <div class="diagram-caption">
      💡 Classic Euclidean Proof of <b>A.M. &ge; G.M.</b>: In any semi-circle, the semi-chord perpendicular to the diameter at division point (<i>a</i>, <i>b</i>) is &radic;(<i>ab</i>), which can never exceed the radius ${frac('<i>a</i> + <i>b</i>', '2')}.
    </div>
  </div>`;

  return `
${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Hero Banner -->
  <div style="background: linear-gradient(135deg, rgba(253, 200, 48, 0.25), rgba(0, 0, 0, 0.42)); border: 1.5px solid ${themeColor}; border-radius: 14px; padding: 18px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 22px; font-weight: 800; color: ${themeColor}; margin-bottom: 6px;">
      ✦ Chapter 8: Sequences and Series
    </div>
    <div style="color: #CBD5E1; font-size: 14.5px; line-height: 1.6;">
      Class 11 NCERT Mathematics &bull; Authoritative Gold-Standard Reference & Master Cheat Sheet
    </div>
  </div>

  <!-- Quick Glossary Card -->
  <div class="q-card">
    <div class="q-title">✦ Quick Glossary & Foundational Definitions</div>
    <div class="q-text">
      A systematic breakdown of core terminology governing discrete progressions:
    </div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Sequence:</b> An ordered succession of numbers formed according to a definite rule or algebraic function <i>a<sub>n</sub></i> = <i>f</i>(<i>n</i>) defined over positive integers &naturals;.</div>
        <div>• <b style="color: ${themeColor};">Series:</b> The indicated algebraic sum of the terms of a sequence, denoted as <i>S<sub>n</sub></i> = <i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> + ... + <i>a<sub>n</sub></i> = &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>a<sub>k</sub></i>.</div>
        <div>• <b style="color: ${themeColor};">Arithmetic Progression (A.P.):</b> A sequence in which each term after the first differs from its preceding term by a constant quantity called the common difference <i>d</i> = <i>a</i><sub><i>k</i>+1</sub> &minus; <i>a<sub>k</sub></i>.</div>
        <div>• <b style="color: ${themeColor};">Geometric Progression (G.P.):</b> A sequence in which each term after the first is obtained by multiplying the preceding term by a fixed non-zero quantity called the common ratio <i>r</i> = ${frac('<i>a</i><sub><i>k</i>+1</sub>', '<i>a<sub>k</sub></i>')}.</div>
        <div>• <b style="color: ${themeColor};">Arithmetic Mean (A.M.):</b> For any two numbers <i>a</i> and <i>b</i>, their A.M. is $A = ${frac('<i>a</i> + <i>b</i>', '2')}$.</div>
        <div>• <b style="color: ${themeColor};">Geometric Mean (G.M.):</b> For two positive numbers <i>a</i> and <i>b</i>, their G.M. is $G = &radic;{<i>ab</i>}$.</div>
      </div>
    </div>
  </div>

  <!-- Section 8.1 -->
  <div class="q-card">
    <div class="q-title">✦ 8.1 Arithmetic Progression (A.P.) & Properties</div>
    <div class="q-text">
      An Arithmetic Progression represents linear discrete growth where equal steps <i>d</i> are added at each stage:
    </div>
    <div class="defBox">
      <b style="color: ${themeColor};">Standard Formulation of A.P.:</b><br/>
      General Form: <b><i>a</i>, <i>a</i> + <i>d</i>, <i>a</i> + 2<i>d</i>, ..., <i>a</i> + (<i>n</i> &minus; 1)<i>d</i></b><br/>
      • <b style="color: ${themeColor};"><i>n</i><sup>th</sup> Term (General Term):</b> &nbsp; <b><i>a<sub>n</sub></i> = <i>a</i> + (<i>n</i> &minus; 1)<i>d</i></b><br/>
      • <b style="color: ${themeColor};">Sum of First <i>n</i> Terms:</b> &nbsp; <b><i>S<sub>n</sub></i> = ${frac('<i>n</i>', '2')} [ 2<i>a</i> + (<i>n</i> &minus; 1)<i>d</i> ] = ${frac('<i>n</i>', '2')} (<i>a</i> + <i>l</i>)</b>, where <i>l</i> is the last term.
    </div>
    <div class="sol-box">
      <div class="sol-title">Key Strategic Properties of A.P.:</div>
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Symmetric Selection of Terms:</b>
          <div style="margin-left: 12px;">- 3 numbers in A.P.: &nbsp; <b>(<i>a</i> &minus; <i>d</i>), <i>a</i>, (<i>a</i> + <i>d</i>)</b> with common difference <i>d</i>.</div>
          <div style="margin-left: 12px;">- 4 numbers in A.P.: &nbsp; <b>(<i>a</i> &minus; 3<i>d</i>), (<i>a</i> &minus; <i>d</i>), (<i>a</i> + <i>d</i>), (<i>a</i> + 3<i>d</i>)</b> with common difference 2<i>d</i>.</div>
          <div style="margin-left: 12px;">- 5 numbers in A.P.: &nbsp; <b>(<i>a</i> &minus; 2<i>d</i>), (<i>a</i> &minus; <i>d</i>), <i>a</i>, (<i>a</i> + <i>d</i>), (<i>a</i> + 2<i>d</i>)</b>.</div>
        </div>
        <div>• <b style="color: ${themeColor};">Linearity of <i>S<sub>n</sub></i>:</b> If <i>S<sub>n</sub></i> = <i>An</i><sup>2</sup> + <i>Bn</i>, it always represents an A.P. with common difference <b><i>d</i> = 2<i>A</i></b> and first term <b><i>a</i> = <i>A</i> + <i>B</i></b>.</div>
        <div>• <b style="color: ${themeColor};">Relation between <i>S<sub>n</sub></i> and <i>a<sub>n</sub></i>:</b> <b><i>a<sub>n</sub></i> = <i>S<sub>n</sub></i> &minus; <i>S</i><sub><i>n</i>&minus;1</sub></b> (for all <i>n</i> &ge; 2).</div>
        <div>• <b style="color: ${themeColor};">Insertion of <i>n</i> Arithmetic Means:</b> When <i>n</i> numbers <i>A</i><sub>1</sub>, <i>A</i><sub>2</sub>, ..., <i>A<sub>n</sub></i> are inserted between <i>a</i> and <i>b</i>:
          <div style="margin-left: 12px;">Common difference: <b><i>d</i> = ${frac('<i>b</i> &minus; <i>a</i>', '<i>n</i> + 1')}</b>, and the sum of all <i>n</i> means is: <b>&sum;<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>A<sub>i</sub></i> = <i>n</i> &times; ${frac('<i>a</i> + <i>b</i>', '2')}</b>.</div>
        </div>
      </div>
    </div>
  </div>

  ${svgApGp}

  <!-- Section 8.2 -->
  <div class="q-card">
    <div class="q-title">✦ 8.2 Geometric Progression (G.P.) & Properties</div>
    <div class="q-text">
      Geometric Progressions represent compounding, multiplicative growth or decay where each term is scaled by a factor <i>r</i>:
    </div>
    <div class="defBox">
      <b style="color: ${themeColor};">Standard Formulation of G.P.:</b><br/>
      General Form: <b><i>a</i>, <i>ar</i>, <i>ar</i><sup>2</sup>, ..., <i>ar</i><sup><i>n</i>&minus;1</sup></b><br/>
      • <b style="color: ${themeColor};"><i>n</i><sup>th</sup> Term (General Term):</b> &nbsp; <b><i>a<sub>n</sub></i> = <i>ar</i><sup><i>n</i>&minus;1</sup></b><br/>
      • <b style="color: ${themeColor};">Sum of First <i>n</i> Terms:</b><br/>
      &nbsp; <b><i>S<sub>n</sub></i> = ${frac('<i>a</i>(1 &minus; <i>r<sup>n</sup></i>)', '1 &minus; <i>r</i>')}</b> &nbsp; (when |<i>r</i>| &lt; 1) &nbsp; or &nbsp; <b><i>S<sub>n</sub></i> = ${frac('<i>a</i>(<i>r<sup>n</sup></i> &minus; 1)', '<i>r</i> &minus; 1')}</b> &nbsp; (when |<i>r</i>| &gt; 1)<br/>
      • <b style="color: ${themeColor};">Sum of an Infinite G.P. (|<i>r</i>| &lt; 1):</b> &nbsp; <b><i>S</i><sub>&infin;</sub> = ${frac('<i>a</i>', '1 &minus; <i>r</i>')}</b>
    </div>
    <div class="sol-box">
      <div class="sol-title">Key Strategic Properties of G.P.:</div>
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Symmetric Selection of Terms:</b>
          <div style="margin-left: 12px;">- 3 numbers in G.P.: &nbsp; <b>${frac('<i>a</i>', '<i>r</i>')}, <i>a</i>, <i>ar</i></b> with common ratio <i>r</i> (product = <i>a</i><sup>3</sup>).</div>
          <div style="margin-left: 12px;">- 4 numbers in G.P.: &nbsp; <b>${frac('<i>a</i>', '<i>r</i><sup>3</sup>')}, ${frac('<i>a</i>', '<i>r</i>')}, <i>ar</i>, <i>ar</i><sup>3</sup></b> with common ratio <i>r</i><sup>2</sup>.</div>
        </div>
        <div>• <b style="color: ${themeColor};">Equidistant Property:</b> In a finite G.P., the product of terms equidistant from the beginning and the end is constant: <b><i>a<sub>k</sub></i> &times; <i>a</i><sub><i>n</i>&minus;<i>k</i>+1</sub> = <i>a</i><sub>1</sub> &times; <i>a<sub>n</sub></i> = <i>ab</i></b>.</div>
        <div>• <b style="color: ${themeColor};">Product of <i>n</i> terms:</b> <b><i>P</i><sup>2</sup> = (<i>ab</i>)<sup><i>n</i></sup></b>, where <i>a</i> is the first and <i>b</i> is the last term.</div>
        <div>• <b style="color: ${themeColor};">Insertion of <i>n</i> Geometric Means:</b> When <i>n</i> positive numbers <i>G</i><sub>1</sub>, ..., <i>G<sub>n</sub></i> are inserted between <i>a</i> and <i>b</i>:
          <div style="margin-left: 12px;">Common ratio: <b><i>r</i> = (${frac('<i>b</i>', '<i>a</i>')})<sup>${frac('1', '<i>n</i> + 1')}</sup></b>, and their product is: <b>&prod;<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>G<sub>i</sub></i> = (&radic;<i>ab</i>)<sup><i>n</i></sup></b>.</div>
        </div>
      </div>
    </div>
  </div>

  ${svgAmGm}

  <!-- Section 8.3 -->
  <div class="q-card">
    <div class="q-title">✦ 8.3 Relationship Between A.M. and G.M. (A &ge; G)</div>
    <div class="q-text">
      The inequality between the arithmetic mean and the geometric mean is one of the most fundamental inequalities in real analysis:
    </div>
    <div class="sol-box">
      <div class="sol-title">Formal Proof of A.M. &ge; G.M.:</div>
      <div class="sol-step">
        <div>Let <i>a</i> and <i>b</i> be two positive real numbers.</div>
        <div>&rArr; <i>A</i> &minus; <i>G</i> = ${frac('<i>a</i> + <i>b</i>', '2')} &minus; &radic;<i>ab</i> = ${frac('<i>a</i> + <i>b</i> &minus; 2&radic;<i>ab</i>', '2')}</div>
        <div>&rArr; <i>A</i> &minus; <i>G</i> = ${frac('(&radic;<i>a</i> &minus; &radic;<i>b</i>)<sup>2</sup>', '2')}</div>
        <div>Since the square of any real number is non-negative:</div>
        <div>&rArr; (&radic;<i>a</i> &minus; &radic;<i>b</i>)<sup>2</sup> &ge; 0 &rArr; ${frac('(&radic;<i>a</i> &minus; &radic;<i>b</i>)<sup>2</sup>', '2')} &ge; 0</div>
        <div>&rArr; <b><i>A</i> &ge; <i>G</i></b> &nbsp; (with equality holding if and only if <i>a</i> = <i>b</i>).</div>
      </div>
    </div>
    <div class="defBox" style="margin-top: 14px;">
      <b style="color: ${themeColor};">Quadratic Equation in Terms of A and G:</b><br/>
      If <i>A</i> and <i>G</i> are the A.M. and G.M. of two positive roots <i>a</i> and <i>b</i>, then:<br/>
      &rArr; <i>a</i> + <i>b</i> = 2<i>A</i> &nbsp; and &nbsp; <i>ab</i> = <i>G</i><sup>2</sup><br/>
      The quadratic equation is: <b><i>x</i><sup>2</sup> &minus; 2<i>Ax</i> + <i>G</i><sup>2</sup> = 0</b><br/>
      The numbers themselves are given by: <b><i>x</i> = <i>A</i> &plusmn; &radic;(<i>A</i><sup>2</sup> &minus; <i>G</i><sup>2</sup>) = <i>A</i> &plusmn; &radic;[(<i>A</i> + <i>G</i>)(<i>A</i> &minus; <i>G</i>)]</b>.
    </div>
  </div>

  <!-- Section 8.4 -->
  <div class="q-card">
    <div class="q-title">✦ 8.4 Sum of Special Series</div>
    <div class="q-text">
      Summation formulas for the first <i>n</i> natural numbers and their integral powers:
    </div>
    <div class="sol-box">
      <div class="sol-step">
        <div>• <b style="color: ${themeColor};">Sum of First <i>n</i> Natural Numbers:</b><br/>
          &rArr; <b>&sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i> = 1 + 2 + 3 + ... + <i>n</i> = ${frac('<i>n</i>(<i>n</i> + 1)', '2')}</b>
        </div>
        <div style="margin-top: 8px;">• <b style="color: ${themeColor};">Sum of Squares of First <i>n</i> Natural Numbers:</b><br/>
          &rArr; <b>&sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i><sup>2</sup> = 1<sup>2</sup> + 2<sup>2</sup> + ... + <i>n</i><sup>2</sup> = ${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')}</b>
        </div>
        <div style="margin-top: 8px;">• <b style="color: ${themeColor};">Sum of Cubes of First <i>n</i> Natural Numbers:</b><br/>
          &rArr; <b>&sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i><sup>3</sup> = 1<sup>3</sup> + 2<sup>3</sup> + ... + <i>n</i><sup>3</sup> = [ ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ]<sup>2</sup> = ( &sum;<sub><i>k</i>=1</sub><sup><i>n</i></sup> <i>k</i> )<sup>2</sup></b>
        </div>
      </div>
    </div>
  </div>

  <!-- Master Revision Formula Cheat Sheet -->
  <div class="q-card" style="border: 2px solid ${themeColor};">
    <div class="q-title" style="color: ${themeColor}; font-size: 20px;">
      ✦ 8.5 Master Revision Formula Cheat Sheet
    </div>
    <div style="color: #FFFFFF; font-size: 15px; line-height: 2.3;">
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="border-bottom: 2px solid ${themeColor}; color: ${themeColor};">
            <th style="padding: 8px 6px;">Concept / Progression</th>
            <th style="padding: 8px 6px;"><i>n</i><sup>th</sup> Term (<i>a<sub>n</sub></i>)</th>
            <th style="padding: 8px 6px;">Sum to <i>n</i> Terms (<i>S<sub>n</sub></i>)</th>
            <th style="padding: 8px 6px;">Mean Formula</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Arithmetic Progression (A.P.)</td>
            <td style="padding: 8px 6px;"><i>a</i> + (<i>n</i> &minus; 1)<i>d</i></td>
            <td style="padding: 8px 6px;">${frac('<i>n</i>', '2')}[2<i>a</i> + (<i>n</i> &minus; 1)<i>d</i>]</td>
            <td style="padding: 8px 6px;">A.M. = ${frac('<i>a</i> + <i>b</i>', '2')}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Geometric Progression (G.P.)</td>
            <td style="padding: 8px 6px;"><i>ar</i><sup><i>n</i>&minus;1</sup></td>
            <td style="padding: 8px 6px;">${frac('<i>a</i>(<i>r<sup>n</sup></i> &minus; 1)', '<i>r</i> &minus; 1')} &nbsp; (|<i>r</i>| &ne; 1)</td>
            <td style="padding: 8px 6px;">G.M. = &radic;(<i>ab</i>)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Infinite G.P. (|<i>r</i>| &lt; 1)</td>
            <td style="padding: 8px 6px;">&rarr; 0 as <i>n</i> &rarr; &infin;</td>
            <td style="padding: 8px 6px;"><i>S</i><sub>&infin;</sub> = ${frac('<i>a</i>', '1 &minus; <i>r</i>')}</td>
            <td style="padding: 8px 6px;">AM &ge; GM (for <i>a</i>, <i>b</i> &gt; 0)</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Natural Numbers (&sum; <i>n</i>)</td>
            <td style="padding: 8px 6px;"><i>n</i></td>
            <td style="padding: 8px 6px;">${frac('<i>n</i>(<i>n</i> + 1)', '2')}</td>
            <td style="padding: 8px 6px;">Mean = ${frac('<i>n</i> + 1', '2')}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <td style="padding: 8px 6px; font-weight: 700;">Squares of Natural Numbers (&sum; <i>n</i><sup>2</sup>)</td>
            <td style="padding: 8px 6px;"><i>n</i><sup>2</sup></td>
            <td style="padding: 8px 6px;">${frac('<i>n</i>(<i>n</i> + 1)(2<i>n</i> + 1)', '6')}</td>
            <td style="padding: 8px 6px;">9<i>S</i><sub>2</sub><sup>2</sup> = <i>S</i><sub>3</sub>(1 + 8<i>S</i><sub>1</sub>)</td>
          </tr>
          <tr>
            <td style="padding: 8px 6px; font-weight: 700;">Cubes of Natural Numbers (&sum; <i>n</i><sup>3</sup>)</td>
            <td style="padding: 8px 6px;"><i>n</i><sup>3</sup></td>
            <td style="padding: 8px 6px;">[ ${frac('<i>n</i>(<i>n</i> + 1)', '2')} ]<sup>2</sup> = <i>S</i><sub>1</sub><sup>2</sup></td>
            <td style="padding: 8px 6px;">&sum; <i>n</i><sup>3</sup> = (&sum; <i>n</i>)<sup>2</sup></td>
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
      id: "c11-math-8-mcq-1",
      question: "What is the 10th term of the arithmetic progression 2, 7, 12, 17, ...?",
      options: [
        "A):   47",
        "B):   52",
        "C):   42",
        "D):   50"
      ],
      correctAnswer: "A",
      explanation: "Here a = 2, d = 5. The 10th term is a₁₀ = a + 9d = 2 + 9(5) = 2 + 45 = 47."
    },
    {
      id: "c11-math-8-mcq-2",
      question: "If aₙ = n(n + 3), what is the 5th term of the sequence?",
      options: [
        "A):   35",
        "B):   40",
        "C):   45",
        "D):   30"
      ],
      correctAnswer: "B",
      explanation: "Substituting n = 5 into aₙ gives a₅ = 5(5 + 3) = 5 × 8 = 40."
    },
    {
      id: "c11-math-8-mcq-3",
      question: "What is the common ratio of the geometric progression 5/2, 5/4, 5/8, 5/16, ...?",
      options: [
        "A):   2",
        "B):   1/4",
        "C):   1/2",
        "D):   5/2"
      ],
      correctAnswer: "C",
      explanation: "The common ratio r = (5/4) / (5/2) = (5/4) × (2/5) = 2/4 = 1/2."
    },
    {
      id: "c11-math-8-mcq-4",
      question: "Which term of the sequence 2, 4, 8, 16, ... is equal to 512?",
      options: [
        "A):   8th term",
        "B):   10th term",
        "C):   11th term",
        "D):   9th term"
      ],
      correctAnswer: "D",
      explanation: "Here a = 2, r = 2. aₙ = 2 × 2ⁿ⁻¹ = 2ⁿ = 512 = 2⁹. Therefore, n = 9."
    },
    {
      id: "c11-math-8-mcq-5",
      question: "The arithmetic mean (A.M.) between 14 and 36 is:",
      options: [
        "A):   25",
        "B):   24",
        "C):   26",
        "D):   22"
      ],
      correctAnswer: "A",
      explanation: "A.M. = (14 + 36) / 2 = 50 / 2 = 25."
    },
    {
      id: "c11-math-8-mcq-6",
      question: "The geometric mean (G.M.) between 4 and 16 is:",
      options: [
        "A):   10",
        "B):   8",
        "C):   12",
        "D):   6"
      ],
      correctAnswer: "B",
      explanation: "G.M. = √(4 × 16) = √64 = 8."
    },
    {
      id: "c11-math-8-mcq-7",
      question: "For any two distinct positive real numbers a and b, the relation between their A.M. and G.M. is:",
      options: [
        "A):   A.M. < G.M.",
        "B):   A.M. = G.M.",
        "C):   A.M. > G.M.",
        "D):   A.M. × G.M. = 1"
      ],
      correctAnswer: "C",
      explanation: "For distinct positive real numbers, (√a − √b)² > 0, which directly proves A.M. > G.M. (equality holds only if a = b)."
    },
    {
      id: "c11-math-8-mcq-8",
      question: "The sum of the first 20 natural numbers 1 + 2 + 3 + ... + 20 is equal to:",
      options: [
        "A):   200",
        "B):   220",
        "C):   190",
        "D):   210"
      ],
      correctAnswer: "D",
      explanation: "S₂₀ = 20(21) / 2 = 10 × 21 = 210."
    },
    {
      id: "c11-math-8-mcq-9",
      question: "In the Fibonacci sequence where a₁ = 1, a₂ = 1, and aₙ = aₙ₋₁ + aₙ₋₂, what is the 6th term a₆?",
      options: [
        "A):   8",
        "B):   5",
        "C):   13",
        "D):   7"
      ],
      correctAnswer: "A",
      explanation: "a₁ = 1, a₂ = 1, a₃ = 2, a₄ = 3, a₅ = 5, a₆ = 5 + 3 = 8."
    },
    {
      id: "c11-math-8-mcq-10",
      question: "If the sum of n terms of an A.P. is Sₙ = 3n² + 5n, its common difference is:",
      options: [
        "A):   3",
        "B):   6",
        "C):   5",
        "D):   8"
      ],
      correctAnswer: "B",
      explanation: "For Sₙ = An² + Bn, the common difference is d = 2A. Here A = 3, so d = 2(3) = 6."
    },

    // Tier 2: Q11 to Q18 Moderate Concepts & Calculations
    {
      id: "c11-math-8-mcq-11",
      question: "If −2/7, x, −7/2 are in G.P., the possible values of x are:",
      options: [
        "A):   ±1",
        "B):   ±2",
        "C):   ±7",
        "D):   0"
      ],
      correctAnswer: "A",
      explanation: "In G.P., x² = (−2/7)(−7/2) = 1 ⇒ x = ±1."
    },
    {
      id: "c11-math-8-mcq-12",
      question: "The sum of odd integers from 1 to 2001 is:",
      options: [
        "A):   1000000",
        "B):   1001001",
        "C):   2001000",
        "D):   1002001"
      ],
      correctAnswer: "D",
      explanation: "n = (2001 + 1)/2 = 1001. Sum of first n odd integers is n² = (1001)² = 1,002,001."
    },
    {
      id: "c11-math-8-mcq-13",
      question: "If (aⁿ + bⁿ)/(aⁿ⁻¹ + bⁿ⁻¹) is the arithmetic mean between a and b, then the value of n is:",
      options: [
        "A):   0",
        "B):   1/2",
        "C):   1",
        "D):   −1"
      ],
      correctAnswer: "C",
      explanation: "Equating to (a + b)/2 gives 2(aⁿ + bⁿ) = (a + b)(aⁿ⁻¹ + bⁿ⁻¹), leading to (a/b)ⁿ⁻¹ = 1 = (a/b)⁰ ⇒ n − 1 = 0 ⇒ n = 1."
    },
    {
      id: "c11-math-8-mcq-14",
      question: "If (aⁿ⁺¹ + bⁿ⁺¹)/(aⁿ + bⁿ) is the geometric mean between a and b, then the value of n is:",
      options: [
        "A):   1/2",
        "B):   0",
        "C):   1",
        "D):   −1/2"
      ],
      correctAnswer: "D",
      explanation: "Equating to √(ab) = a^(1/2)b^(1/2) leads to (a/b)^(n + 1/2) = 1 ⇒ n + 1/2 = 0 ⇒ n = −1/2."
    },
    {
      id: "c11-math-8-mcq-15",
      question: "If the 4th, 10th and 16th terms of a G.P. are x, y and z, respectively, then x, y, z are in:",
      options: [
        "A):   A.P.",
        "B):   Harmonic Progression",
        "C):   Arithmetico-Geometric Progression",
        "D):   G.P."
      ],
      correctAnswer: "D",
      explanation: "y/x = ar⁹ / ar³ = r⁶, and z/y = ar¹⁵ / ar⁹ = r⁶. Since the ratios are identical, y² = xz, so x, y, z form a G.P."
    },
    {
      id: "c11-math-8-mcq-16",
      question: "How many terms of the G.P. 3, 3², 3³, ... are needed to give the sum 120?",
      options: [
        "A):   4",
        "B):   5",
        "C):   6",
        "D):   3"
      ],
      correctAnswer: "A",
      explanation: "Sₙ = 3(3ⁿ − 1)/(3 − 1) = 120 ⇒ 3(3ⁿ − 1) = 240 ⇒ 3ⁿ − 1 = 80 ⇒ 3ⁿ = 81 = 3⁴ ⇒ n = 4."
    },
    {
      id: "c11-math-8-mcq-17",
      question: "The sum to infinity of the G.P. 1, 1/3, 1/9, 1/27, ... is:",
      options: [
        "A):   2/3",
        "B):   3/2",
        "C):   3",
        "D):   4/3"
      ],
      correctAnswer: "B",
      explanation: "S_∞ = a / (1 − r) = 1 / (1 − 1/3) = 1 / (2/3) = 3/2."
    },
    {
      id: "c11-math-8-mcq-18",
      question: "Two numbers are inserted between 3 and 81 such that the resulting sequence forms a G.P. The numbers are:",
      options: [
        "A):   6 and 18",
        "B):   12 and 36",
        "C):   9 and 27",
        "D):   9 and 36"
      ],
      correctAnswer: "C",
      explanation: "3, G₁, G₂, 81 forms a G.P. with a = 3, ar³ = 81 ⇒ r³ = 27 ⇒ r = 3. Thus G₁ = 3(3) = 9 and G₂ = 9(3) = 27."
    },

    // Tier 3: Q19 to Q25 Advanced Analytical & Multi-Step
    {
      id: "c11-math-8-mcq-19",
      question: "If the sum of two numbers is 6 times their geometric mean, the ratio of the numbers is:",
      options: [
        "A):   (3 + 2√2) : (3 − 2√2)",
        "B):   (2 + √3) : (2 − √3)",
        "C):   (4 + √15) : (4 − √15)",
        "D):   (1 + √2) : (1 − √2)"
      ],
      correctAnswer: "A",
      explanation: "(a + b)/(2√(ab)) = 3/1. Applying componendo and dividendo twice yields a/b = (3 + 2√2)/(3 − 2√2)."
    },
    {
      id: "c11-math-8-mcq-20",
      question: "If A and G are the A.M. and G.M. between two positive numbers, then the numbers are roots of the equation:",
      options: [
        "A):   x² + 2Ax + G² = 0",
        "B):   x² − 2Ax + G² = 0",
        "C):   x² − Ax + 2G² = 0",
        "D):   x² − 2Gx + A² = 0"
      ],
      correctAnswer: "B",
      explanation: "Sum of roots = a + b = 2A, and Product of roots = ab = G². Hence, the quadratic is x² − 2Ax + G² = 0."
    },
    {
      id: "c11-math-8-mcq-21",
      question: "The sum of the series 5² + 6² + 7² + ... + 20² is equal to:",
      options: [
        "A):   2870",
        "B):   2810",
        "C):   2840",
        "D):   2900"
      ],
      correctAnswer: "C",
      explanation: "S = ∑_{k=1}²⁰ k² − ∑_{k=1}⁴ k² = (20 × 21 × 41)/6 − (4 × 5 × 9)/6 = 2870 − 30 = 2840."
    },
    {
      id: "c11-math-8-mcq-22",
      question: "If the ratio of the sums of m and n terms of an A.P. is m² : n², the ratio of their mth and nth terms is:",
      options: [
        "A):   (m − 1) : (n − 1)",
        "B):   (2m + 1) : (2n + 1)",
        "C):   m : n",
        "D):   (2m − 1) : (2n − 1)"
      ],
      correctAnswer: "D",
      explanation: "S_m / S_n = m²/n² ⇒ [2a + (m−1)d]/[2a + (n−1)d] = m/n. Replacing m with 2m−1 and n with 2n−1 gives T_m / T_n = (2m − 1)/(2n − 1)."
    },
    {
      id: "c11-math-8-mcq-23",
      question: "If S₁, S₂, S₃ are the sums of first n natural numbers, their squares and their cubes respectively, then 9S₂² is equal to:",
      options: [
        "A):   S₃(1 + 8S₁)",
        "B):   S₃(1 + 4S₁)",
        "C):   S₁(1 + 8S₃)",
        "D):   8S₃(1 + S₁)"
      ],
      correctAnswer: "A",
      explanation: "S₁ = n(n+1)/2, S₂ = n(n+1)(2n+1)/6, S₃ = n²(n+1)²/4. 9S₂² = n²(n+1)²(2n+1)²/4 = S₃(1 + 8S₁) since 1 + 8S₁ = (2n + 1)²."
    },
    {
      id: "c11-math-8-mcq-24",
      question: "The sum of the series 8 + 88 + 888 + ... to n terms is given by:",
      options: [
        "A):   (8/9)(10ⁿ − 1) − 8n/9",
        "B):   (80/81)(10ⁿ − 1) − 8n/9",
        "C):   (80/9)(10ⁿ − 1) − 8n",
        "D):   (8/81)(10ⁿ⁺¹ − 1) − n"
      ],
      correctAnswer: "B",
      explanation: "Sₙ = (8/9)[(10 + 10² + ... + 10ⁿ) − n] = (8/9)[(10(10ⁿ − 1)/9) − n] = (80/81)(10ⁿ − 1) − 8n/9."
    },
    {
      id: "c11-math-8-mcq-25",
      question: "The sum to n terms of the series 1/(1 × 2) + 1/(2 × 3) + 1/(3 × 4) + ... is:",
      options: [
        "A):   1/(n + 1)",
        "B):   (n + 1)/n",
        "C):   n/(n + 1)",
        "D):   n/(2n + 1)"
      ],
      correctAnswer: "C",
      explanation: "Telescoping sum: aₙ = 1/n − 1/(n+1). Sₙ = (1 − 1/2) + (1/2 − 1/3) + ... + (1/n − 1/(n+1)) = 1 − 1/(n+1) = n/(n+1)."
    }
  ];
}

module.exports = {
  generateOverview,
  generateMcqs
};
