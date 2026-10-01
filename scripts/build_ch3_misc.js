const { styleBlock, themeColor } = require('./ch3_common');

function getMiscellaneousExercise() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #7C4DFF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #7C4DFF;">
      📘 Miscellaneous Exercise &bull; Advanced Trigonometric Proofs &amp; Half-Angle Formulas
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Prove that: <b>2 cos <span class="frac"><span class="num">&pi;</span><span class="den">13</span></span> cos <span class="frac"><span class="num">9&pi;</span><span class="den">13</span></span> + cos <span class="frac"><span class="num">3&pi;</span><span class="den">13</span></span> + cos <span class="frac"><span class="num">5&pi;</span><span class="den">13</span></span> = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>LHS = 2 cos <span class="frac"><span class="num">&pi;</span><span class="den">13</span></span> cos <span class="frac"><span class="num">9&pi;</span><span class="den">13</span></span> + cos <span class="frac"><span class="num">3&pi;</span><span class="den">13</span></span> + cos <span class="frac"><span class="num">5&pi;</span><span class="den">13</span></span></div>
        <div style="margin-top: 6px;">Applying formula <b>cos C + cos D = 2 cos(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b> to the last two terms:</div>
        <div>&rArr; cos <span class="frac"><span class="num">3&pi;</span><span class="den">13</span></span> + cos <span class="frac"><span class="num">5&pi;</span><span class="den">13</span></span> = 2 cos(<span class="frac"><span class="num">3&pi;/13 + 5&pi;/13</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">3&pi;/13 &minus; 5&pi;/13</span><span class="den">2</span></span>)</div>
        <div>&rArr; = 2 cos(<span class="frac"><span class="num">4&pi;</span><span class="den">13</span></span>) cos(&minus;<span class="frac"><span class="num">&pi;</span><span class="den">13</span></span>) = 2 cos(<span class="frac"><span class="num">4&pi;</span><span class="den">13</span></span>) cos(<span class="frac"><span class="num">&pi;</span><span class="den">13</span></span>)</div>
        <div style="margin-top: 8px;">Factoring out 2 cos(<span class="frac"><span class="num">&pi;</span><span class="den">13</span></span>) from the whole expression:</div>
        <div>&rArr; LHS = 2 cos(<span class="frac"><span class="num">&pi;</span><span class="den">13</span></span>) [ cos(<span class="frac"><span class="num">9&pi;</span><span class="den">13</span></span>) + cos(<span class="frac"><span class="num">4&pi;</span><span class="den">13</span></span>) ]</div>
        <div>Applying cos C + cos D once more inside the brackets:</div>
        <div>&rArr; cos(<span class="frac"><span class="num">9&pi;</span><span class="den">13</span></span>) + cos(<span class="frac"><span class="num">4&pi;</span><span class="den">13</span></span>) = 2 cos(<span class="frac"><span class="num">9&pi;/13 + 4&pi;/13</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">9&pi;/13 &minus; 4&pi;/13</span><span class="den">2</span></span>)</div>
        <div>&rArr; = 2 cos(<span class="frac"><span class="num">13&pi;/13</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">5&pi;</span><span class="den">26</span></span>) = 2 cos(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">5&pi;</span><span class="den">26</span></span>)</div>
        <div>Since <b>cos(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span>) = 0</b>:</div>
        <div>&rArr; LHS = 2 cos(<span class="frac"><span class="num">&pi;</span><span class="den">13</span></span>) &times; [ 2 &times; 0 &times; cos(<span class="frac"><span class="num">5&pi;</span><span class="den">26</span></span>) ] = <b>0</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 0</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Prove that: <b>(sin 3<i>x</i> + sin <i>x</i>) sin <i>x</i> + (cos 3<i>x</i> &minus; cos <i>x</i>) cos <i>x</i> = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expanding LHS:</div>
        <div>&rArr; LHS = sin 3<i>x</i> sin <i>x</i> + sin<sup>2</sup> <i>x</i> + cos 3<i>x</i> cos <i>x</i> &minus; cos<sup>2</sup> <i>x</i></div>
        <div>Regrouping:</div>
        <div>&rArr; = (cos 3<i>x</i> cos <i>x</i> + sin 3<i>x</i> sin <i>x</i>) &minus; (cos<sup>2</sup> <i>x</i> &minus; sin<sup>2</sup> <i>x</i>)</div>
        <div>Using identities:</div>
        <div>• cos A cos B + sin A sin B = cos(A &minus; B) &rArr; cos(3<i>x</i> &minus; <i>x</i>) = cos 2<i>x</i></div>
        <div>• cos<sup>2</sup> <i>x</i> &minus; sin<sup>2</sup> <i>x</i> = cos 2<i>x</i></div>
        <div>&rArr; LHS = cos 2<i>x</i> &minus; cos 2<i>x</i> = <b>0</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 0</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Prove that: <b>(cos <i>x</i> + cos <i>y</i>)<sup>2</sup> + (sin <i>x</i> &minus; sin <i>y</i>)<sup>2</sup> = 4 cos<sup>2</sup>(<span class="frac"><span class="num"><i>x</i> + <i>y</i></span><span class="den">2</span></span>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expanding both binomial squared expressions:</div>
        <div>&rArr; LHS = (cos<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>y</i> + 2 cos <i>x</i> cos <i>y</i>) + (sin<sup>2</sup> <i>x</i> + sin<sup>2</sup> <i>y</i> &minus; 2 sin <i>x</i> sin <i>y</i>)</div>
        <div>Regrouping trigonometric Pythagorean identities:</div>
        <div>&rArr; = (cos<sup>2</sup> <i>x</i> + sin<sup>2</sup> <i>x</i>) + (cos<sup>2</sup> <i>y</i> + sin<sup>2</sup> <i>y</i>) + 2(cos <i>x</i> cos <i>y</i> &minus; sin <i>x</i> sin <i>y</i>)</div>
        <div>&rArr; = 1 + 1 + 2 cos(<i>x</i> + <i>y</i>) = 2 + 2 cos(<i>x</i> + <i>y</i>)</div>
        <div>&rArr; = 2 [ 1 + cos(<i>x</i> + <i>y</i>) ]</div>
        <div>Using half-angle formula <b>1 + cos &theta; = 2 cos<sup>2</sup>(<span class="frac"><span class="num">&theta;</span><span class="den">2</span></span>)</b>:</div>
        <div>&rArr; = 2 [ 2 cos<sup>2</sup>(<span class="frac"><span class="num"><i>x</i> + <i>y</i></span><span class="den">2</span></span>) ] = <b>4 cos<sup>2</sup>(<span class="frac"><span class="num"><i>x</i> + <i>y</i></span><span class="den">2</span></span>)</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 4 cos²((x + y)/2)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Prove that: <b>(cos <i>x</i> &minus; cos <i>y</i>)<sup>2</sup> + (sin <i>x</i> &minus; sin <i>y</i>)<sup>2</sup> = 4 sin<sup>2</sup>(<span class="frac"><span class="num"><i>x</i> &minus; <i>y</i></span><span class="den">2</span></span>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expanding both binomials:</div>
        <div>&rArr; LHS = (cos<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>y</i> &minus; 2 cos <i>x</i> cos <i>y</i>) + (sin<sup>2</sup> <i>x</i> + sin<sup>2</sup> <i>y</i> &minus; 2 sin <i>x</i> sin <i>y</i>)</div>
        <div>Regrouping:</div>
        <div>&rArr; = (cos<sup>2</sup> <i>x</i> + sin<sup>2</sup> <i>x</i>) + (cos<sup>2</sup> <i>y</i> + sin<sup>2</sup> <i>y</i>) &minus; 2(cos <i>x</i> cos <i>y</i> + sin <i>x</i> sin <i>y</i>)</div>
        <div>&rArr; = 1 + 1 &minus; 2 cos(<i>x</i> &minus; <i>y</i>)</div>
        <div>&rArr; = 2 [ 1 &minus; cos(<i>x</i> &minus; <i>y</i>) ]</div>
        <div>Using half-angle formula <b>1 &minus; cos &theta; = 2 sin<sup>2</sup>(<span class="frac"><span class="num">&theta;</span><span class="den">2</span></span>)</b>:</div>
        <div>&rArr; = 2 [ 2 sin<sup>2</sup>(<span class="frac"><span class="num"><i>x</i> &minus; <i>y</i></span><span class="den">2</span></span>) ] = <b>4 sin<sup>2</sup>(<span class="frac"><span class="num"><i>x</i> &minus; <i>y</i></span><span class="den">2</span></span>)</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 4 sin²((x − y)/2)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Prove that: <b>sin <i>x</i> + sin 3<i>x</i> + sin 5<i>x</i> + sin 7<i>x</i> = 4 cos <i>x</i> cos 2<i>x</i> sin 4<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Grouping terms with equal angle sums: (7<i>x</i> + <i>x</i> = 8<i>x</i>, 5<i>x</i> + 3<i>x</i> = 8<i>x</i>)</div>
        <div>&rArr; LHS = (sin 7<i>x</i> + sin <i>x</i>) + (sin 5<i>x</i> + sin 3<i>x</i>)</div>
        <div>Using <b>sin C + sin D = 2 sin(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b>:</div>
        <div>• sin 7<i>x</i> + sin <i>x</i> = 2 sin 4<i>x</i> cos 3<i>x</i></div>
        <div>• sin 5<i>x</i> + sin 3<i>x</i> = 2 sin 4<i>x</i> cos <i>x</i></div>
        <div style="margin-top: 8px;">Factoring out 2 sin 4<i>x</i>:</div>
        <div>&rArr; LHS = 2 sin 4<i>x</i> (cos 3<i>x</i> + cos <i>x</i>)</div>
        <div>Using <b>cos 3<i>x</i> + cos <i>x</i> = 2 cos 2<i>x</i> cos <i>x</i></b>:</div>
        <div>&rArr; = 2 sin 4<i>x</i> [ 2 cos 2<i>x</i> cos <i>x</i> ] = <b>4 cos <i>x</i> cos 2<i>x</i> sin 4<i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 4 cos x cos 2x sin 4x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">(sin 7<i>x</i> + sin 5<i>x</i>) + (sin 9<i>x</i> + sin 3<i>x</i>)</span><span class="den">(cos 7<i>x</i> + cos 5<i>x</i>) + (cos 9<i>x</i> + cos 3<i>x</i>)</span></span> = tan 6<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Applying CD formulas to each group:</div>
        <div>• sin 7<i>x</i> + sin 5<i>x</i> = 2 sin 6<i>x</i> cos <i>x</i></div>
        <div>• sin 9<i>x</i> + sin 3<i>x</i> = 2 sin 6<i>x</i> cos 3<i>x</i></div>
        <div>&rArr; Numerator = 2 sin 6<i>x</i> (cos <i>x</i> + cos 3<i>x</i>)</div>
        <div style="margin-top: 8px;">• cos 7<i>x</i> + cos 5<i>x</i> = 2 cos 6<i>x</i> cos <i>x</i></div>
        <div>• cos 9<i>x</i> + cos 3<i>x</i> = 2 cos 6<i>x</i> cos 3<i>x</i></div>
        <div>&rArr; Denominator = 2 cos 6<i>x</i> (cos <i>x</i> + cos 3<i>x</i>)</div>
        <div style="margin-top: 8px;">Dividing numerator by denominator:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">2 sin 6x (cos x + cos 3x)</span><span class="den">2 cos 6x (cos x + cos 3x)</span></span> = <span class="frac"><span class="num">sin 6x</span><span class="den">cos 6x</span></span> = <b>tan 6<i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = tan 6x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Prove that: <b>sin 3<i>x</i> + sin 2<i>x</i> &minus; sin <i>x</i> = 4 sin <i>x</i> cos(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">3<i>x</i></span><span class="den">2</span></span>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Rearranging terms:</div>
        <div>&rArr; LHS = (sin 3<i>x</i> &minus; sin <i>x</i>) + sin 2<i>x</i></div>
        <div>Using formula: <b>sin C &minus; sin D = 2 cos(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b>:</div>
        <div>&rArr; sin 3<i>x</i> &minus; sin <i>x</i> = 2 cos 2<i>x</i> sin <i>x</i></div>
        <div>And using double angle formula <b>sin 2<i>x</i> = 2 sin <i>x</i> cos <i>x</i></b>:</div>
        <div>&rArr; LHS = 2 cos 2<i>x</i> sin <i>x</i> + 2 sin <i>x</i> cos <i>x</i></div>
        <div>Factoring out 2 sin <i>x</i>:</div>
        <div>&rArr; = 2 sin <i>x</i> (cos 2<i>x</i> + cos <i>x</i>)</div>
        <div>Using <b>cos C + cos D = 2 cos(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b>:</div>
        <div>&rArr; cos 2<i>x</i> + cos <i>x</i> = 2 cos(<span class="frac"><span class="num">3x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">x</span><span class="den">2</span></span>)</div>
        <div style="margin-top: 8px;">Multiplying:</div>
        <div>&rArr; LHS = 2 sin <i>x</i> [ 2 cos(<span class="frac"><span class="num">3x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">x</span><span class="den">2</span></span>) ] = <b>4 sin <i>x</i> cos(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">3<i>x</i></span><span class="den">2</span></span>)</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Find <b>sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b>, <b>cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b> and <b>tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b> if <b>tan <i>x</i> = &minus;<span class="frac"><span class="num">4</span><span class="den">3</span></span></b>, <i>x</i> in quadrant II.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: tan <i>x</i> = &minus;<span class="frac"><span class="num">4</span><span class="den">3</span></span> and <i>x</i> lies in Quadrant II:</div>
        <div>&rArr; <span class="frac"><span class="num">&pi;</span><span class="den">2</span></span> &lt; <i>x</i> &lt; &pi; &nbsp;&rArr;&nbsp; <b><span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &lt; <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> &lt; <span class="frac"><span class="num">&pi;</span><span class="den">2</span></span></b></div>
        <div>Therefore, <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> lies in <b>Quadrant I</b>.</div>
        <div>&rArr; <b>sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>, cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>, and tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> are all POSITIVE.</b></div>
        <div style="margin-top: 8px;">Finding cos <i>x</i>:</div>
        <div>&rArr; sec<sup>2</sup> <i>x</i> = 1 + tan<sup>2</sup> <i>x</i> = 1 + (&minus;<span class="frac"><span class="num">4</span><span class="den">3</span></span>)<sup>2</sup> = 1 + <span class="frac"><span class="num">16</span><span class="den">9</span></span> = <span class="frac"><span class="num">25</span><span class="den">9</span></span></div>
        <div>&rArr; Since <i>x</i> is in Q II, sec <i>x</i> &lt; 0: sec <i>x</i> = &minus;<span class="frac"><span class="num">5</span><span class="den">3</span></span> &rArr; <b>cos <i>x</i> = &minus;<span class="frac"><span class="num">3</span><span class="den">5</span></span></b></div>
        <div style="margin-top: 10px;"><b>1. cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; cos<sup>2</sup>(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">1 + cos x</span><span class="den">2</span></span> = <span class="frac"><span class="num">1 &minus; 3/5</span><span class="den">2</span></span> = <span class="frac"><span class="num">2/5</span><span class="den">2</span></span> = <span class="frac"><span class="num">1</span><span class="den">5</span></span></div>
        <div>&rArr; <b>cos(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">1</span><span class="den">&radic;5</span></span> = <span class="frac"><span class="num">&radic;5</span><span class="den">5</span></span></b></div>
        <div style="margin-top: 10px;"><b>2. sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; sin<sup>2</sup>(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">1 &minus; cos x</span><span class="den">2</span></span> = <span class="frac"><span class="num">1 &minus; (&minus;3/5)</span><span class="den">2</span></span> = <span class="frac"><span class="num">8/5</span><span class="den">2</span></span> = <span class="frac"><span class="num">4</span><span class="den">5</span></span></div>
        <div>&rArr; <b>sin(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">2</span><span class="den">&radic;5</span></span> = <span class="frac"><span class="num">2&radic;5</span><span class="den">5</span></span></b></div>
        <div style="margin-top: 10px;"><b>3. tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; tan(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">sin(x/2)</span><span class="den">cos(x/2)</span></span> = <span class="frac"><span class="num">2/&radic;5</span><span class="den">1/&radic;5</span></span> = <b>2</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">sin(x/2) = 2/√5 (or 2√5/5), &nbsp; cos(x/2) = 1/√5 (or √5/5), &nbsp; tan(x/2) = 2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Find <b>sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b>, <b>cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b> and <b>tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b> if <b>cos <i>x</i> = &minus;<span class="frac"><span class="num">1</span><span class="den">3</span></span></b>, <i>x</i> in quadrant III.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: cos <i>x</i> = &minus;<span class="frac"><span class="num">1</span><span class="den">3</span></span> and <i>x</i> lies in Quadrant III:</div>
        <div>&rArr; &pi; &lt; <i>x</i> &lt; <span class="frac"><span class="num">3&pi;</span><span class="den">2</span></span> &nbsp;&rArr;&nbsp; <b><span class="frac"><span class="num">&pi;</span><span class="den">2</span></span> &lt; <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> &lt; <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></b></div>
        <div>Therefore, <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> lies in <b>Quadrant II</b>.</div>
        <div>In Quadrant II: <b>sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> &gt; 0</b>, while <b>cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> &lt; 0</b> and <b>tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> &lt; 0</b>.</div>
        <div style="margin-top: 10px;"><b>1. sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; sin<sup>2</sup>(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">1 &minus; cos x</span><span class="den">2</span></span> = <span class="frac"><span class="num">1 &minus; (&minus;1/3)</span><span class="den">2</span></span> = <span class="frac"><span class="num">4/3</span><span class="den">2</span></span> = <span class="frac"><span class="num">2</span><span class="den">3</span></span></div>
        <div>&rArr; <b>sin(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">&radic;2</span><span class="den">&radic;3</span></span> = <span class="frac"><span class="num">&radic;6</span><span class="den">3</span></span></b></div>
        <div style="margin-top: 10px;"><b>2. cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; cos<sup>2</sup>(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">1 + cos x</span><span class="den">2</span></span> = <span class="frac"><span class="num">1 + (&minus;1/3)</span><span class="den">2</span></span> = <span class="frac"><span class="num">2/3</span><span class="den">2</span></span> = <span class="frac"><span class="num">1</span><span class="den">3</span></span></div>
        <div>&rArr; Since cos(<i>x</i>/2) &lt; 0 in Q II: <b>cos(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;3</span></span> = &minus;<span class="frac"><span class="num">&radic;3</span><span class="den">3</span></span></b></div>
        <div style="margin-top: 10px;"><b>3. tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; tan(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">sin(x/2)</span><span class="den">cos(x/2)</span></span> = <span class="frac"><span class="num">&radic;2/&radic;3</span><span class="den">&minus;1/&radic;3</span></span> = <b>&minus;&radic;2</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">sin(x/2) = √6/3, &nbsp; cos(x/2) = −√3/3, &nbsp; tan(x/2) = −√2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Find <b>sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b>, <b>cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b> and <b>tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span></b> if <b>sin <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">4</span></span></b>, <i>x</i> in quadrant II.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: sin <i>x</i> = <span class="frac"><span class="num">1</span><span class="den">4</span></span> and <i>x</i> lies in Quadrant II:</div>
        <div>&rArr; <span class="frac"><span class="num">&pi;</span><span class="den">2</span></span> &lt; <i>x</i> &lt; &pi; &nbsp;&rArr;&nbsp; <b><span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &lt; <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> &lt; <span class="frac"><span class="num">&pi;</span><span class="den">2</span></span></b> (Quadrant I).</div>
        <div>&rArr; All half-angle ratios sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>, cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>, tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> are <b>POSITIVE</b>.</div>
        <div style="margin-top: 8px;">Finding cos <i>x</i>:</div>
        <div>&rArr; cos<sup>2</sup> <i>x</i> = 1 &minus; sin<sup>2</sup> <i>x</i> = 1 &minus; (<span class="frac"><span class="num">1</span><span class="den">4</span></span>)<sup>2</sup> = 1 &minus; <span class="frac"><span class="num">1</span><span class="den">16</span></span> = <span class="frac"><span class="num">15</span><span class="den">16</span></span></div>
        <div>&rArr; In Q II, cos <i>x</i> &lt; 0: <b>cos <i>x</i> = &minus;<span class="frac"><span class="num">&radic;15</span><span class="den">4</span></span></b></div>
        
        <div style="margin-top: 10px;"><b>1. sin <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; sin<sup>2</sup>(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">1 &minus; cos x</span><span class="den">2</span></span> = <span class="frac"><span class="num">1 &minus; (&minus;&radic;15/4)</span><span class="den">2</span></span> = <span class="frac"><span class="num">4 + &radic;15</span><span class="den">8</span></span> = <span class="frac"><span class="num">8 + 2&radic;15</span><span class="den">16</span></span></div>
        <div>&rArr; <b>sin(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">&radic;(8 + 2&radic;15)</span><span class="den">4</span></span></b></div>
        <div style="font-size: 13.5px; color: #94A3B8;">&nbsp;&nbsp;&nbsp;&nbsp;[Since 8 + 2&radic;15 = (&radic;5 + &radic;3)<sup>2</sup>, this simplifies to <span class="frac"><span class="num">&radic;5 + &radic;3</span><span class="den">4</span></span>]</div>

        <div style="margin-top: 10px;"><b>2. cos <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; cos<sup>2</sup>(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">1 + cos x</span><span class="den">2</span></span> = <span class="frac"><span class="num">1 + (&minus;&radic;15/4)</span><span class="den">2</span></span> = <span class="frac"><span class="num">4 &minus; &radic;15</span><span class="den">8</span></span> = <span class="frac"><span class="num">8 &minus; 2&radic;15</span><span class="den">16</span></span></div>
        <div>&rArr; <b>cos(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">&radic;(8 &minus; 2&radic;15)</span><span class="den">4</span></span></b></div>
        <div style="font-size: 13.5px; color: #94A3B8;">&nbsp;&nbsp;&nbsp;&nbsp;[Since 8 &minus; 2&radic;15 = (&radic;5 &minus; &radic;3)<sup>2</sup>, this simplifies to <span class="frac"><span class="num">&radic;5 &minus; &radic;3</span><span class="den">4</span></span>]</div>

        <div style="margin-top: 10px;"><b>3. tan <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>:</b></div>
        <div>&rArr; tan(<span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span>) = <span class="frac"><span class="num">sin(x/2)</span><span class="den">cos(x/2)</span></span> = <span class="frac"><span class="num">&radic;(8 + 2&radic;15)</span><span class="den">&radic;(8 &minus; 2&radic;15)</span></span></div>
        <div>&rArr; Multiplying numerator and denominator by &radic;(8 + 2&radic;15):</div>
        <div>&rArr; = <span class="frac"><span class="num">8 + 2&radic;15</span><span class="den">&radic;(64 &minus; 60)</span></span> = <span class="frac"><span class="num">8 + 2&radic;15</span><span class="den">2</span></span> = <b>4 + &radic;15</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">sin(x/2) = √(8 + 2√15)/4, &nbsp; cos(x/2) = √(8 − 2√15)/4, &nbsp; tan(x/2) = 4 + √15</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getMiscellaneousExercise
};
