const { styleBlock, themeColor } = require('./ch3_common');

function getExercise3_4() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #7C4DFF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #7C4DFF;">
      📘 Exercise 3.4 &bull; Principal &amp; General Solutions of Trigonometric Equations
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Find the principal and general solutions of the equation: <b>tan <i>x</i> = &radic;3</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: tan <i>x</i> = &radic;3.</div>
        <div style="margin-top: 6px;"><b>1. Principal Solutions (in [0, 2&pi;)):</b></div>
        <div>• We know tan <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = &radic;3 &rArr; <b><i>x</i> = <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></b></div>
        <div>• Tangent is also positive in Quadrant III:</div>
        <div>&nbsp;&nbsp;tan(&pi; + <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>) = tan <span class="frac"><span class="num">4&pi;</span><span class="den">3</span></span> = &radic;3 &rArr; <b><i>x</i> = <span class="frac"><span class="num">4&pi;</span><span class="den">3</span></span></b></div>
        <div>&rArr; Principal solutions: <b><span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></b> and <b><span class="frac"><span class="num">4&pi;</span><span class="den">3</span></span></b></div>
        
        <div style="margin-top: 10px;"><b>2. General Solution:</b></div>
        <div>&rArr; We have tan <i>x</i> = tan <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></div>
        <div>&rArr; By theorem, tan &theta; = tan &alpha; &rArr; &theta; = <i>n&pi;</i> + &alpha;, where <i>n</i> &isin; &integers;.</div>
        <div>&rArr; <b><i>x</i> = <i>n&pi;</i> + <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Principal: π/3, 4π/3; &nbsp; General: x = nπ + π/3, n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Find the principal and general solutions of the equation: <b>sec <i>x</i> = 2</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: sec <i>x</i> = 2 &nbsp;&rArr;&nbsp; <b>cos <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span></b></div>
        <div style="margin-top: 6px;"><b>1. Principal Solutions (in [0, 2&pi;)):</b></div>
        <div>• cos <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = <span class="frac"><span class="num">1</span><span class="den">2</span></span> &rArr; <b><i>x</i> = <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></b></div>
        <div>• Cosine is also positive in Quadrant IV:</div>
        <div>&nbsp;&nbsp;cos(2&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>) = cos <span class="frac"><span class="num">5&pi;</span><span class="den">3</span></span> = <span class="frac"><span class="num">1</span><span class="den">2</span></span> &rArr; <b><i>x</i> = <span class="frac"><span class="num">5&pi;</span><span class="den">3</span></span></b></div>
        <div>&rArr; Principal solutions: <b><span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></b> and <b><span class="frac"><span class="num">5&pi;</span><span class="den">3</span></span></b></div>
        
        <div style="margin-top: 10px;"><b>2. General Solution:</b></div>
        <div>&rArr; cos <i>x</i> = cos <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></div>
        <div>&rArr; By theorem, cos &theta; = cos &alpha; &rArr; &theta; = 2<i>n&pi;</i> &plusmn; &alpha;, where <i>n</i> &isin; &integers;.</div>
        <div>&rArr; <b><i>x</i> = 2<i>n&pi;</i> &plusmn; <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Principal: π/3, 5π/3; &nbsp; General: x = 2nπ ± π/3, n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Find the principal and general solutions of the equation: <b>cot <i>x</i> = &minus;&radic;3</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: cot <i>x</i> = &minus;&radic;3 &nbsp;&rArr;&nbsp; <b>tan <i>x</i> = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;3</span></span></b></div>
        <div style="margin-top: 6px;"><b>1. Principal Solutions (in [0, 2&pi;)):</b></div>
        <div>• Tangent is negative in Quadrants II and IV:</div>
        <div>&nbsp;&nbsp;In Q II: tan(&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) = &minus;tan <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;3</span></span> &rArr; <b><i>x</i> = <span class="frac"><span class="num">5&pi;</span><span class="den">6</span></span></b></div>
        <div>&nbsp;&nbsp;In Q IV: tan(2&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) = &minus;tan <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;3</span></span> &rArr; <b><i>x</i> = <span class="frac"><span class="num">11&pi;</span><span class="den">6</span></span></b></div>
        <div>&rArr; Principal solutions: <b><span class="frac"><span class="num">5&pi;</span><span class="den">6</span></span></b> and <b><span class="frac"><span class="num">11&pi;</span><span class="den">6</span></span></b></div>
        
        <div style="margin-top: 10px;"><b>2. General Solution:</b></div>
        <div>&rArr; tan <i>x</i> = tan <span class="frac"><span class="num">5&pi;</span><span class="den">6</span></span></div>
        <div>&rArr; <b><i>x</i> = <i>n&pi;</i> + <span class="frac"><span class="num">5&pi;</span><span class="den">6</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Principal: 5π/6, 11π/6; &nbsp; General: x = nπ + 5π/6, n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Find the principal and general solutions of the equation: <b>cosec <i>x</i> = &minus;2</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: cosec <i>x</i> = &minus;2 &nbsp;&rArr;&nbsp; <b>sin <i>x</i> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span></b></div>
        <div style="margin-top: 6px;"><b>1. Principal Solutions (in [0, 2&pi;)):</b></div>
        <div>• Sine is negative in Quadrants III and IV:</div>
        <div>&nbsp;&nbsp;In Q III: sin(&pi; + <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) = &minus;sin <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span> &rArr; <b><i>x</i> = <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span></b></div>
        <div>&nbsp;&nbsp;In Q IV: sin(2&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) = &minus;sin <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span> &rArr; <b><i>x</i> = <span class="frac"><span class="num">11&pi;</span><span class="den">6</span></span></b></div>
        <div>&rArr; Principal solutions: <b><span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span></b> and <b><span class="frac"><span class="num">11&pi;</span><span class="den">6</span></span></b></div>
        
        <div style="margin-top: 10px;"><b>2. General Solution:</b></div>
        <div>&rArr; sin <i>x</i> = sin <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span></div>
        <div>&rArr; By theorem, sin &theta; = sin &alpha; &rArr; &theta; = <i>n&pi;</i> + (&minus;1)<sup><i>n</i></sup> &alpha;, where <i>n</i> &isin; &integers;.</div>
        <div>&rArr; <b><i>x</i> = <i>n&pi;</i> + (&minus;1)<sup><i>n</i></sup> <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Principal: 7π/6, 11π/6; &nbsp; General: x = nπ + (−1)ⁿ (7π/6), n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Find the general solution of the equation: <b>cos 4<i>x</i> = cos 2<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: cos 4<i>x</i> = cos 2<i>x</i></div>
        <div>&rArr; cos 4<i>x</i> &minus; cos 2<i>x</i> = 0</div>
        <div>Using formula: <b>cos C &minus; cos D = &minus;2 sin(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b></div>
        <div>&rArr; &minus;2 sin(<span class="frac"><span class="num">4x + 2x</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">4x &minus; 2x</span><span class="den">2</span></span>) = 0</div>
        <div>&rArr; &minus;2 sin 3<i>x</i> sin <i>x</i> = 0</div>
        <div>&rArr; <b>sin 3<i>x</i> = 0</b> &nbsp;or&nbsp; <b>sin <i>x</i> = 0</b></div>
        <div style="margin-top: 8px;">• If sin 3<i>x</i> = 0 &rArr; 3<i>x</i> = <i>n&pi;</i> &rArr; <b><i>x</i> = <span class="frac"><span class="num"><i>n&pi;</i></span><span class="den">3</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div>• If sin <i>x</i> = 0 &rArr; <b><i>x</i> = <i>n&pi;</i>, where <i>n</i> &isin; &integers;</b></div>
        <div style="margin-top: 6px; font-size: 13.5px; color: #94A3B8;">(Note: Since <i>x</i> = <i>n&pi;</i> is fully contained within <i>x</i> = <i>n&pi;</i>/3 for multiples of 3, the complete solution can be stated as <i>x</i> = <i>n&pi;</i>/3).</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = nπ/3 &nbsp;or&nbsp; x = nπ, n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Find the general solution of the equation: <b>cos 3<i>x</i> + cos <i>x</i> &minus; cos 2<i>x</i> = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Grouping the first two terms:</div>
        <div>&rArr; (cos 3<i>x</i> + cos <i>x</i>) &minus; cos 2<i>x</i> = 0</div>
        <div>Using formula: <b>cos C + cos D = 2 cos(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b></div>
        <div>&rArr; 2 cos 2<i>x</i> cos <i>x</i> &minus; cos 2<i>x</i> = 0</div>
        <div>Factoring out cos 2<i>x</i>:</div>
        <div>&rArr; cos 2<i>x</i> (2 cos <i>x</i> &minus; 1) = 0</div>
        <div style="margin-top: 8px;"><b>Case 1: cos 2<i>x</i> = 0</b></div>
        <div>&rArr; 2<i>x</i> = (2<i>n</i> + 1)<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span> &nbsp;&rArr;&nbsp; <b><i>x</i> = (2<i>n</i> + 1)<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div style="margin-top: 8px;"><b>Case 2: 2 cos <i>x</i> &minus; 1 = 0 &rArr; cos <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">2</span></span> = cos <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></b></div>
        <div>&rArr; <b><i>x</i> = 2<i>n&pi;</i> &plusmn; <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = (2n + 1)π/4 &nbsp;or&nbsp; x = 2nπ ± π/3, n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Find the general solution of the equation: <b>sin 2<i>x</i> + cos <i>x</i> = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using double angle identity: sin 2<i>x</i> = 2 sin <i>x</i> cos <i>x</i></div>
        <div>&rArr; 2 sin <i>x</i> cos <i>x</i> + cos <i>x</i> = 0</div>
        <div>Factoring out cos <i>x</i>:</div>
        <div>&rArr; cos <i>x</i> (2 sin <i>x</i> + 1) = 0</div>
        <div style="margin-top: 8px;"><b>Case 1: cos <i>x</i> = 0</b></div>
        <div>&rArr; <b><i>x</i> = (2<i>n</i> + 1)<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div style="margin-top: 8px;"><b>Case 2: 2 sin <i>x</i> + 1 = 0 &rArr; sin <i>x</i> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span></b></div>
        <div>&rArr; sin <i>x</i> = sin(&pi; + <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) = sin <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span></div>
        <div>&rArr; <b><i>x</i> = <i>n&pi;</i> + (&minus;1)<sup><i>n</i></sup> <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = (2n + 1)π/2 &nbsp;or&nbsp; x = nπ + (−1)ⁿ (7π/6), n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Find the general solution of the equation: <b>sec<sup>2</sup> 2<i>x</i> = 1 &minus; tan 2<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using identity: sec<sup>2</sup> 2<i>x</i> = 1 + tan<sup>2</sup> 2<i>x</i></div>
        <div>&rArr; 1 + tan<sup>2</sup> 2<i>x</i> = 1 &minus; tan 2<i>x</i></div>
        <div>&rArr; tan<sup>2</sup> 2<i>x</i> + tan 2<i>x</i> = 0</div>
        <div>Factoring out tan 2<i>x</i>:</div>
        <div>&rArr; tan 2<i>x</i> (tan 2<i>x</i> + 1) = 0</div>
        <div style="margin-top: 8px;"><b>Case 1: tan 2<i>x</i> = 0 = tan 0</b></div>
        <div>&rArr; 2<i>x</i> = <i>n&pi;</i> &nbsp;&rArr;&nbsp; <b><i>x</i> = <span class="frac"><span class="num"><i>n&pi;</i></span><span class="den">2</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div style="margin-top: 8px;"><b>Case 2: tan 2<i>x</i> + 1 = 0 &rArr; tan 2<i>x</i> = &minus;1</b></div>
        <div>&rArr; tan 2<i>x</i> = tan(&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span>) = tan <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></div>
        <div>&rArr; 2<i>x</i> = <i>n&pi;</i> + <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></div>
        <div>&rArr; <b><i>x</i> = <span class="frac"><span class="num"><i>n&pi;</i></span><span class="den">2</span></span> + <span class="frac"><span class="num">3&pi;</span><span class="den">8</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = nπ/2 &nbsp;or&nbsp; x = nπ/2 + 3π/8, n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Find the general solution of the equation: <b>sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i> = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Grouping terms with symmetric frequencies:</div>
        <div>&rArr; (sin 5<i>x</i> + sin <i>x</i>) + sin 3<i>x</i> = 0</div>
        <div>Using formula: <b>sin C + sin D = 2 sin(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b></div>
        <div>&rArr; 2 sin 3<i>x</i> cos 2<i>x</i> + sin 3<i>x</i> = 0</div>
        <div>Factoring out sin 3<i>x</i>:</div>
        <div>&rArr; sin 3<i>x</i> (2 cos 2<i>x</i> + 1) = 0</div>
        <div style="margin-top: 8px;"><b>Case 1: sin 3<i>x</i> = 0</b></div>
        <div>&rArr; 3<i>x</i> = <i>n&pi;</i> &nbsp;&rArr;&nbsp; <b><i>x</i> = <span class="frac"><span class="num"><i>n&pi;</i></span><span class="den">3</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div style="margin-top: 8px;"><b>Case 2: 2 cos 2<i>x</i> + 1 = 0 &rArr; cos 2<i>x</i> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span></b></div>
        <div>&rArr; cos 2<i>x</i> = cos(&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>) = cos <span class="frac"><span class="num">2&pi;</span><span class="den">3</span></span></div>
        <div>&rArr; 2<i>x</i> = 2<i>n&pi;</i> &plusmn; <span class="frac"><span class="num">2&pi;</span><span class="den">3</span></span></div>
        <div>Dividing by 2:</div>
        <div>&rArr; <b><i>x</i> = <i>n&pi;</i> &plusmn; <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span>, where <i>n</i> &isin; &integers;</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = nπ/3 &nbsp;or&nbsp; x = nπ ± π/3, n ∈ ℤ</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise3_4
};
