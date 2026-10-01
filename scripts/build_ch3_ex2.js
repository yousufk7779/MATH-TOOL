const { styleBlock, themeColor } = require('./ch3_common');

function getExercise3_2() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #7C4DFF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #7C4DFF;">
      📘 Exercise 3.2 &bull; Trigonometric Functions Across Quadrants &amp; Periodicity
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Standalone ASTC Diagram Card -->
  <div class="diagram-wrapper">
    <svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg">
      <rect width="380" height="230" fill="#FFFFFF" rx="8" />
      <text x="190" y="22" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#4A148C" text-anchor="middle">ASTC Rule: Signs of Trigonometric Ratios in Quadrants</text>
      
      <!-- Coordinate Axes -->
      <line x1="40" y1="125" x2="340" y2="125" stroke="#333333" stroke-width="2" />
      <line x1="190" y1="35" x2="190" y2="215" stroke="#333333" stroke-width="2" />
      
      <!-- Axis Labels -->
      <text x="345" y="130" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#333">X</text>
      <text x="30" y="130" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#333">X′</text>
      <text x="190" y="30" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#333" text-anchor="middle">Y</text>
      <text x="190" y="225" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="#333" text-anchor="middle">Y′</text>

      <!-- Quadrant I -->
      <rect x="205" y="45" width="125" height="70" fill="#E8F5E9" rx="6" />
      <text x="267" y="68" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#2E7D32" text-anchor="middle">Quadrant I (A)</text>
      <text x="267" y="88" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#1B5E20" text-anchor="middle">ALL POSITIVE</text>
      <text x="267" y="104" font-family="-apple-system, sans-serif" font-size="10.5" fill="#388E3C" text-anchor="middle">(sin, cos, tan, cot, sec, cosec)</text>

      <!-- Quadrant II -->
      <rect x="50" y="45" width="125" height="70" fill="#E3F2FD" rx="6" />
      <text x="112" y="68" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#1565C0" text-anchor="middle">Quadrant II (S)</text>
      <text x="112" y="88" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#0D47A1" text-anchor="middle">SIN &amp; COSEC</text>
      <text x="112" y="104" font-family="-apple-system, sans-serif" font-size="10.5" fill="#1976D2" text-anchor="middle">+ve; Others −ve</text>

      <!-- Quadrant III -->
      <rect x="50" y="135" width="125" height="70" fill="#FFF3E0" rx="6" />
      <text x="112" y="158" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#E65100" text-anchor="middle">Quadrant III (T)</text>
      <text x="112" y="178" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#BF360C" text-anchor="middle">TAN &amp; COT</text>
      <text x="112" y="194" font-family="-apple-system, sans-serif" font-size="10.5" fill="#F57C00" text-anchor="middle">+ve; Others −ve</text>

      <!-- Quadrant IV -->
      <rect x="205" y="135" width="125" height="70" fill="#F3E5F5" rx="6" />
      <text x="267" y="158" font-family="-apple-system, sans-serif" font-size="14" font-weight="bold" fill="#6A1B9A" text-anchor="middle">Quadrant IV (C)</text>
      <text x="267" y="178" font-family="-apple-system, sans-serif" font-size="12" font-weight="bold" fill="#4A148C" text-anchor="middle">COS &amp; SEC</text>
      <text x="267" y="194" font-family="-apple-system, sans-serif" font-size="10.5" fill="#7B1FA2" text-anchor="middle">+ve; Others −ve</text>
    </svg>
    <div class="diagram-caption">💡 Mnemonic: "All Silver Tea Cups" &bull; I: All &bull; II: Sin &bull; III: Tan &bull; IV: Cos</div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Find the values of other five trigonometric functions if <b>cos <i>x</i> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span></b>, <i>x</i> lies in third quadrant.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: cos <i>x</i> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span> and <i>x</i> lies in <b>Quadrant III</b>.</div>
        <div>In Quadrant III: <b>tan <i>x</i></b> and <b>cot <i>x</i></b> are positive, while sin <i>x</i>, cos <i>x</i>, sec <i>x</i>, cosec <i>x</i> are negative.</div>
        <div style="margin-top: 8px;"><b>1. sec <i>x</i>:</b></div>
        <div>&rArr; sec <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">cos <i>x</i></span></span> = <span class="frac"><span class="num">1</span><span class="den">&minus;1/2</span></span> = <b>&minus;2</b></div>
        <div style="margin-top: 8px;"><b>2. sin <i>x</i>:</b></div>
        <div>&rArr; sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i> = 1 &nbsp;&rArr;&nbsp; sin<sup>2</sup> <i>x</i> = 1 &minus; (&minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span>)<sup>2</sup> = 1 &minus; <span class="frac"><span class="num">1</span><span class="den">4</span></span> = <span class="frac"><span class="num">3</span><span class="den">4</span></span></div>
        <div>&rArr; Since <i>x</i> is in Q III, sin <i>x</i> &lt; 0: <b>sin <i>x</i> = &minus;<span class="frac"><span class="num">&radic;3</span><span class="den">2</span></span></b></div>
        <div style="margin-top: 8px;"><b>3. cosec <i>x</i>:</b></div>
        <div>&rArr; cosec <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">sin <i>x</i></span></span> = <span class="frac"><span class="num">1</span><span class="den">&minus;&radic;3/2</span></span> = <b>&minus;<span class="frac"><span class="num">2</span><span class="den">&radic;3</span></span></b></div>
        <div style="margin-top: 8px;"><b>4. tan <i>x</i>:</b></div>
        <div>&rArr; tan <i>x</i> = <span class="frac"><span class="num">sin <i>x</i></span><span class="den">cos <i>x</i></span></span> = <span class="frac"><span class="num">&minus;&radic;3 / 2</span><span class="den">&minus;1 / 2</span></span> = <b>&radic;3</b></div>
        <div style="margin-top: 8px;"><b>5. cot <i>x</i>:</b></div>
        <div>&rArr; cot <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">tan <i>x</i></span></span> = <b><span class="frac"><span class="num">1</span><span class="den">&radic;3</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">sec x = −2, &nbsp; sin x = −√3/2, &nbsp; cosec x = −2/√3, &nbsp; tan x = √3, &nbsp; cot x = 1/√3</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Find the values of other five trigonometric functions if <b>sin <i>x</i> = <span class="frac"><span class="num">3</span><span class="den">5</span></span></b>, <i>x</i> lies in second quadrant.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: sin <i>x</i> = <span class="frac"><span class="num">3</span><span class="den">5</span></span> and <i>x</i> lies in <b>Quadrant II</b>.</div>
        <div>In Quadrant II: <b>sin <i>x</i></b> and <b>cosec <i>x</i></b> are positive; cos <i>x</i>, sec <i>x</i>, tan <i>x</i>, cot <i>x</i> are negative.</div>
        <div style="margin-top: 8px;"><b>1. cosec <i>x</i>:</b></div>
        <div>&rArr; cosec <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">sin <i>x</i></span></span> = <b><span class="frac"><span class="num">5</span><span class="den">3</span></span></b></div>
        <div style="margin-top: 8px;"><b>2. cos <i>x</i>:</b></div>
        <div>&rArr; cos<sup>2</sup> <i>x</i> = 1 &minus; sin<sup>2</sup> <i>x</i> = 1 &minus; (<span class="frac"><span class="num">3</span><span class="den">5</span></span>)<sup>2</sup> = 1 &minus; <span class="frac"><span class="num">9</span><span class="den">25</span></span> = <span class="frac"><span class="num">16</span><span class="den">25</span></span></div>
        <div>&rArr; Since <i>x</i> is in Q II, cos <i>x</i> &lt; 0: <b>cos <i>x</i> = &minus;<span class="frac"><span class="num">4</span><span class="den">5</span></span></b></div>
        <div style="margin-top: 8px;"><b>3. sec <i>x</i>:</b></div>
        <div>&rArr; sec <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">cos <i>x</i></span></span> = <b>&minus;<span class="frac"><span class="num">5</span><span class="den">4</span></span></b></div>
        <div style="margin-top: 8px;"><b>4. tan <i>x</i>:</b></div>
        <div>&rArr; tan <i>x</i> = <span class="frac"><span class="num">sin <i>x</i></span><span class="den">cos <i>x</i></span></span> = <span class="frac"><span class="num">3/5</span><span class="den">&minus;4/5</span></span> = <b>&minus;<span class="frac"><span class="num">3</span><span class="den">4</span></span></b></div>
        <div style="margin-top: 8px;"><b>5. cot <i>x</i>:</b></div>
        <div>&rArr; cot <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">tan <i>x</i></span></span> = <b>&minus;<span class="frac"><span class="num">4</span><span class="den">3</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">cosec x = 5/3, &nbsp; cos x = −4/5, &nbsp; sec x = −5/4, &nbsp; tan x = −3/4, &nbsp; cot x = −4/3</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Find the values of other five trigonometric functions if <b>cot <i>x</i> = <span class="frac"><span class="num">3</span><span class="den">4</span></span></b>, <i>x</i> lies in third quadrant.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: cot <i>x</i> = <span class="frac"><span class="num">3</span><span class="den">4</span></span> and <i>x</i> lies in <b>Quadrant III</b>.</div>
        <div>In Quadrant III: <b>tan <i>x</i>, cot <i>x</i> &gt; 0</b>; others are negative.</div>
        <div style="margin-top: 8px;"><b>1. tan <i>x</i>:</b></div>
        <div>&rArr; tan <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">cot <i>x</i></span></span> = <b><span class="frac"><span class="num">4</span><span class="den">3</span></span></b></div>
        <div style="margin-top: 8px;"><b>2. sec <i>x</i>:</b></div>
        <div>&rArr; sec<sup>2</sup> <i>x</i> = 1 + tan<sup>2</sup> <i>x</i> = 1 + (<span class="frac"><span class="num">4</span><span class="den">3</span></span>)<sup>2</sup> = 1 + <span class="frac"><span class="num">16</span><span class="den">9</span></span> = <span class="frac"><span class="num">25</span><span class="den">9</span></span></div>
        <div>&rArr; In Q III, sec <i>x</i> &lt; 0: <b>sec <i>x</i> = &minus;<span class="frac"><span class="num">5</span><span class="den">3</span></span></b></div>
        <div style="margin-top: 8px;"><b>3. cos <i>x</i>:</b></div>
        <div>&rArr; cos <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">sec <i>x</i></span></span> = <b>&minus;<span class="frac"><span class="num">3</span><span class="den">5</span></span></b></div>
        <div style="margin-top: 8px;"><b>4. sin <i>x</i>:</b></div>
        <div>&rArr; sin <i>x</i> = tan <i>x</i> &times; cos <i>x</i> = (<span class="frac"><span class="num">4</span><span class="den">3</span></span>) &times; (&minus;<span class="frac"><span class="num">3</span><span class="den">5</span></span>) = <b>&minus;<span class="frac"><span class="num">4</span><span class="den">5</span></span></b></div>
        <div style="margin-top: 8px;"><b>5. cosec <i>x</i>:</b></div>
        <div>&rArr; cosec <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">sin <i>x</i></span></span> = <b>&minus;<span class="frac"><span class="num">5</span><span class="den">4</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">tan x = 4/3, &nbsp; sec x = −5/3, &nbsp; cos x = −3/5, &nbsp; sin x = −4/5, &nbsp; cosec x = −5/4</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Find the values of other five trigonometric functions if <b>sec <i>x</i> = <span class="frac"><span class="num">13</span><span class="den">5</span></span></b>, <i>x</i> lies in fourth quadrant.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: sec <i>x</i> = <span class="frac"><span class="num">13</span><span class="den">5</span></span> and <i>x</i> lies in <b>Quadrant IV</b>.</div>
        <div>In Quadrant IV: <b>cos <i>x</i>, sec <i>x</i> &gt; 0</b>; others are negative.</div>
        <div style="margin-top: 8px;"><b>1. cos <i>x</i>:</b></div>
        <div>&rArr; cos <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">sec <i>x</i></span></span> = <b><span class="frac"><span class="num">5</span><span class="den">13</span></span></b></div>
        <div style="margin-top: 8px;"><b>2. sin <i>x</i>:</b></div>
        <div>&rArr; sin<sup>2</sup> <i>x</i> = 1 &minus; cos<sup>2</sup> <i>x</i> = 1 &minus; (<span class="frac"><span class="num">5</span><span class="den">13</span></span>)<sup>2</sup> = 1 &minus; <span class="frac"><span class="num">25</span><span class="den">169</span></span> = <span class="frac"><span class="num">144</span><span class="den">169</span></span></div>
        <div>&rArr; In Q IV, sin <i>x</i> &lt; 0: <b>sin <i>x</i> = &minus;<span class="frac"><span class="num">12</span><span class="den">13</span></span></b></div>
        <div style="margin-top: 8px;"><b>3. cosec <i>x</i>:</b></div>
        <div>&rArr; cosec <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">sin <i>x</i></span></span> = <b>&minus;<span class="frac"><span class="num">13</span><span class="den">12</span></span></b></div>
        <div style="margin-top: 8px;"><b>4. tan <i>x</i>:</b></div>
        <div>&rArr; tan <i>x</i> = <span class="frac"><span class="num">sin <i>x</i></span><span class="den">cos <i>x</i></span></span> = <span class="frac"><span class="num">&minus;12/13</span><span class="den">5/13</span></span> = <b>&minus;<span class="frac"><span class="num">12</span><span class="den">5</span></span></b></div>
        <div style="margin-top: 8px;"><b>5. cot <i>x</i>:</b></div>
        <div>&rArr; cot <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">tan <i>x</i></span></span> = <b>&minus;<span class="frac"><span class="num">5</span><span class="den">12</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">cos x = 5/13, &nbsp; sin x = −12/13, &nbsp; cosec x = −13/12, &nbsp; tan x = −12/5, &nbsp; cot x = −5/12</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Find the values of other five trigonometric functions if <b>tan <i>x</i> = &minus;<span class="frac"><span class="num">5</span><span class="den">12</span></span></b>, <i>x</i> lies in second quadrant.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: tan <i>x</i> = &minus;<span class="frac"><span class="num">5</span><span class="den">12</span></span> and <i>x</i> lies in <b>Quadrant II</b>.</div>
        <div>In Quadrant II: <b>sin <i>x</i>, cosec <i>x</i> &gt; 0</b>; others are negative.</div>
        <div style="margin-top: 8px;"><b>1. cot <i>x</i>:</b></div>
        <div>&rArr; cot <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">tan <i>x</i></span></span> = <b>&minus;<span class="frac"><span class="num">12</span><span class="den">5</span></span></b></div>
        <div style="margin-top: 8px;"><b>2. sec <i>x</i>:</b></div>
        <div>&rArr; sec<sup>2</sup> <i>x</i> = 1 + tan<sup>2</sup> <i>x</i> = 1 + (&minus;<span class="frac"><span class="num">5</span><span class="den">12</span></span>)<sup>2</sup> = 1 + <span class="frac"><span class="num">25</span><span class="den">144</span></span> = <span class="frac"><span class="num">169</span><span class="den">144</span></span></div>
        <div>&rArr; In Q II, sec <i>x</i> &lt; 0: <b>sec <i>x</i> = &minus;<span class="frac"><span class="num">13</span><span class="den">12</span></span></b></div>
        <div style="margin-top: 8px;"><b>3. cos <i>x</i>:</b></div>
        <div>&rArr; cos <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">sec <i>x</i></span></span> = <b>&minus;<span class="frac"><span class="num">12</span><span class="den">13</span></span></b></div>
        <div style="margin-top: 8px;"><b>4. sin <i>x</i>:</b></div>
        <div>&rArr; sin <i>x</i> = tan <i>x</i> &times; cos <i>x</i> = (&minus;<span class="frac"><span class="num">5</span><span class="den">12</span></span>) &times; (&minus;<span class="frac"><span class="num">12</span><span class="den">13</span></span>) = <b><span class="frac"><span class="num">5</span><span class="den">13</span></span></b></div>
        <div style="margin-top: 8px;"><b>5. cosec <i>x</i>:</b></div>
        <div>&rArr; cosec <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">sin <i>x</i></span></span> = <b><span class="frac"><span class="num">13</span><span class="den">5</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">cot x = −12/5, &nbsp; sec x = −13/12, &nbsp; cos x = −12/13, &nbsp; sin x = 5/13, &nbsp; cosec x = 13/5</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Find the value of the trigonometric function: <b>sin 765&deg;</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>We know that sin <i>x</i> is a periodic function with period 2&pi; (or 360&deg;):</div>
        <div>&rArr; <b>sin(2<i>n</i> &times; 180&deg; + <i>x</i>) = sin(<i>n</i> &times; 360&deg; + <i>x</i>) = sin <i>x</i></b> for any integer <i>n</i>.</div>
        <div style="margin-top: 6px;">Expressing 765&deg; in terms of multiples of 360&deg;:</div>
        <div>&rArr; 765&deg; = 2 &times; 360&deg; + 45&deg; = 720&deg; + 45&deg;</div>
        <div>&rArr; sin 765&deg; = sin(2 &times; 360&deg; + 45&deg;) = sin 45&deg; = <b><span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">1</span><span class="den">√2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Find the value of the trigonometric function: <b>cosec (&minus;1410&deg;)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>We know that cosec <i>x</i> repeats after an interval of 2&pi; (or 360&deg;):</div>
        <div>&rArr; cosec(&minus;1410&deg;) = cosec(&minus;1410&deg; + 4 &times; 360&deg;)</div>
        <div>&rArr; = cosec(&minus;1410&deg; + 1440&deg;)</div>
        <div>&rArr; = cosec 30&deg; = <b>2</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Find the value of the trigonometric function: <b>tan <span class="frac"><span class="num">19&pi;</span><span class="den">3</span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>We know that tan <i>x</i> is periodic with period &pi;: <b>tan(<i>n&pi;</i> + <i>x</i>) = tan <i>x</i></b>.</div>
        <div style="margin-top: 6px;">Expressing <span class="frac"><span class="num">19&pi;</span><span class="den">3</span></span> as an integral multiple of &pi;:</div>
        <div>&rArr; <span class="frac"><span class="num">19&pi;</span><span class="den">3</span></span> = 6&pi; + <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></div>
        <div>&rArr; tan <span class="frac"><span class="num">19&pi;</span><span class="den">3</span></span> = tan(6&pi; + <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>) = tan <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = <b>&radic;3</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">√3</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Find the value of the trigonometric function: <b>sin (&minus;<span class="frac"><span class="num">11&pi;</span><span class="den">3</span></span>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>We know that sin <i>x</i> repeats after an interval of 2&pi;:</div>
        <div>&rArr; Adding 4&pi; (two complete revolutions):</div>
        <div>&rArr; &minus;<span class="frac"><span class="num">11&pi;</span><span class="den">3</span></span> + 4&pi; = &minus;<span class="frac"><span class="num">11&pi;</span><span class="den">3</span></span> + <span class="frac"><span class="num">12&pi;</span><span class="den">3</span></span> = <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></div>
        <div>&rArr; sin(&minus;<span class="frac"><span class="num">11&pi;</span><span class="den">3</span></span>) = sin(<span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>) = <b><span class="frac"><span class="num">&radic;3</span><span class="den">2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">√3</span><span class="den">2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Find the value of the trigonometric function: <b>cot (&minus;<span class="frac"><span class="num">15&pi;</span><span class="den">4</span></span>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>We know that cot <i>x</i> repeats after an interval of &pi; (and 2&pi;):</div>
        <div>&rArr; Adding 4&pi; (a multiple of &pi;):</div>
        <div>&rArr; &minus;<span class="frac"><span class="num">15&pi;</span><span class="den">4</span></span> + 4&pi; = &minus;<span class="frac"><span class="num">15&pi;</span><span class="den">4</span></span> + <span class="frac"><span class="num">16&pi;</span><span class="den">4</span></span> = <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span></div>
        <div>&rArr; cot(&minus;<span class="frac"><span class="num">15&pi;</span><span class="den">4</span></span>) = cot(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span>) = <b>1</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">1</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise3_2
};
