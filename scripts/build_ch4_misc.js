const { styleBlock, themeColor } = require('./ch4_common');

function getMiscellaneousExercise() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF9100; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF9100;">
      📘 Miscellaneous Exercise &bull; Complex Numbers &amp; Quadratic Equations Mastery
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Evaluate: <b>[ <i>i</i><sup>18</sup> + (<span class="frac"><span class="num">1</span><span class="den"><i>i</i></span></span>)<sup>25</sup> ]<sup>3</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Evaluating each power of <i>i</i>:</div>
        <div>• <i>i</i><sup>18</sup> = (<i>i</i><sup>4</sup>)<sup>4</sup> &times; <i>i</i><sup>2</sup> = (1)<sup>4</sup> &times; (&minus;1) = &minus;1</div>
        <div>• (<span class="frac"><span class="num">1</span><span class="den"><i>i</i></span></span>)<sup>25</sup> = (<span class="frac"><span class="num"><i>i</i></span><span class="den"><i>i</i><sup>2</sup></span></span>)<sup>25</sup> = (&minus;<i>i</i>)<sup>25</sup> = &minus;<i>i</i><sup>25</sup> = &minus;(<i>i</i><sup>4</sup>)<sup>6</sup> &times; <i>i</i> = &minus;<i>i</i></div>
        <div style="margin-top: 8px;">Substituting inside the bracket:</div>
        <div>&rArr; [ &minus;1 &minus; <i>i</i> ]<sup>3</sup> = [ &minus;(1 + <i>i</i>) ]<sup>3</sup> = &minus;(1 + <i>i</i>)<sup>3</sup></div>
        <div>Using expansion (1 + <i>i</i>)<sup>3</sup> = 1 + 3<i>i</i> + 3<i>i</i><sup>2</sup> + <i>i</i><sup>3</sup> = 1 + 3<i>i</i> &minus; 3 &minus; <i>i</i> = &minus;2 + 2<i>i</i>:</div>
        <div>&rArr; &minus;[ &minus;2 + 2<i>i</i> ] = <b>2 &minus; 2<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">2 − 2i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      For any two complex numbers <i>z</i><sub>1</sub> and <i>z</i><sub>2</sub>, prove that:<br/>
      <b>Re(<i>z</i><sub>1</sub><i>z</i><sub>2</sub>) = Re <i>z</i><sub>1</sub> Re <i>z</i><sub>2</sub> &minus; Im <i>z</i><sub>1</sub> Im <i>z</i><sub>2</sub></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i><sub>1</sub> = <i>x</i><sub>1</sub> + <i>iy</i><sub>1</sub> and <i>z</i><sub>2</sub> = <i>x</i><sub>2</sub> + <i>iy</i><sub>2</sub>.</div>
        <div>&rArr; Re <i>z</i><sub>1</sub> = <i>x</i><sub>1</sub>, &nbsp; Im <i>z</i><sub>1</sub> = <i>y</i><sub>1</sub></div>
        <div>&rArr; Re <i>z</i><sub>2</sub> = <i>x</i><sub>2</sub>, &nbsp; Im <i>z</i><sub>2</sub> = <i>y</i><sub>2</sub></div>
        <div style="margin-top: 6px;">Computing the product <i>z</i><sub>1</sub><i>z</i><sub>2</sub>:</div>
        <div>&rArr; <i>z</i><sub>1</sub><i>z</i><sub>2</sub> = (<i>x</i><sub>1</sub> + <i>iy</i><sub>1</sub>)(<i>x</i><sub>2</sub> + <i>iy</i><sub>2</sub>)</div>
        <div>&rArr; = <i>x</i><sub>1</sub><i>x</i><sub>2</sub> + <i>ix</i><sub>1</sub><i>y</i><sub>2</sub> + <i>iy</i><sub>1</sub><i>x</i><sub>2</sub> + <i>i</i><sup>2</sup><i>y</i><sub>1</sub><i>y</i><sub>2</sub></div>
        <div>&rArr; = (<i>x</i><sub>1</sub><i>x</i><sub>2</sub> &minus; <i>y</i><sub>1</sub><i>y</i><sub>2</sub>) + <i>i</i>(<i>x</i><sub>1</sub><i>y</i><sub>2</sub> + <i>x</i><sub>2</sub><i>y</i><sub>1</sub>)</div>
        <div style="margin-top: 8px;">Extracting the real part:</div>
        <div>&rArr; Re(<i>z</i><sub>1</sub><i>z</i><sub>2</sub>) = <i>x</i><sub>1</sub><i>x</i><sub>2</sub> &minus; <i>y</i><sub>1</sub><i>y</i><sub>2</sub></div>
        <div>&rArr; <b>Re(<i>z</i><sub>1</sub><i>z</i><sub>2</sub>) = Re <i>z</i><sub>1</sub> Re <i>z</i><sub>2</sub> &minus; Im <i>z</i><sub>1</sub> Im <i>z</i><sub>2</sub></b></div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Reduce to the standard form: &nbsp; <b>(<span class="frac"><span class="num">1</span><span class="den">1 &minus; 4<i>i</i></span></span> &minus; <span class="frac"><span class="num">2</span><span class="den">1 + <i>i</i></span></span>) (<span class="frac"><span class="num">3 &minus; 4<i>i</i></span><span class="den">5 + <i>i</i></span></span>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #FFB74D; font-weight: 700;">1. Simplifying the first factor:</div>
        <div>&rArr; <span class="frac"><span class="num">1</span><span class="den">1 &minus; 4<i>i</i></span></span> &minus; <span class="frac"><span class="num">2</span><span class="den">1 + <i>i</i></span></span> = <span class="frac"><span class="num">(1 + <i>i</i>) &minus; 2(1 &minus; 4<i>i</i>)</span><span class="den">(1 &minus; 4<i>i</i>)(1 + <i>i</i>)</span></span></div>
        <div>&rArr; Numerator = 1 + <i>i</i> &minus; 2 + 8<i>i</i> = &minus;1 + 9<i>i</i></div>
        <div>&rArr; Denominator = 1 + <i>i</i> &minus; 4<i>i</i> &minus; 4<i>i</i><sup>2</sup> = 1 &minus; 3<i>i</i> + 4 = 5 &minus; 3<i>i</i></div>
        <div>&rArr; First factor = <span class="frac"><span class="num">&minus;1 + 9<i>i</i></span><span class="den">5 &minus; 3<i>i</i></span></span></div>

        <div style="margin-top: 10px; color: #FFB74D; font-weight: 700;">2. Multiplying by the second factor:</div>
        <div>&rArr; Product = <span class="frac"><span class="num">(&minus;1 + 9<i>i</i>)(3 &minus; 4<i>i</i>)</span><span class="den">(5 &minus; 3<i>i</i>)(5 + <i>i</i>)</span></span></div>
        <div>• Numerator = &minus;3 + 4<i>i</i> + 27<i>i</i> &minus; 36<i>i</i><sup>2</sup> = &minus;3 + 31<i>i</i> + 36 = 33 + 31<i>i</i></div>
        <div>• Denominator = 25 + 5<i>i</i> &minus; 15<i>i</i> &minus; 3<i>i</i><sup>2</sup> = 25 &minus; 10<i>i</i> + 3 = 28 &minus; 10<i>i</i> = 2(14 &minus; 5<i>i</i>)</div>

        <div style="margin-top: 10px; color: #FFB74D; font-weight: 700;">3. Rationalising:</div>
        <div>&rArr; = <span class="frac"><span class="num">(33 + 31<i>i</i>)(14 + 5<i>i</i>)</span><span class="den">2(14 &minus; 5<i>i</i>)(14 + 5<i>i</i>)</span></span></div>
        <div>&rArr; Numerator = 462 + 165<i>i</i> + 434<i>i</i> + 155<i>i</i><sup>2</sup> = 462 &minus; 155 + 599<i>i</i> = 307 + 599<i>i</i></div>
        <div>&rArr; Denominator = 2(196 + 25) = 2(221) = 442</div>
        <div>&rArr; Standard form = <b><span class="frac"><span class="num">307</span><span class="den">442</span></span> + <span class="frac"><span class="num">599</span><span class="den">442</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">307</span><span class="den">442</span></span> + <span class="frac"><span class="num">599</span><span class="den">442</span></span>i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      If <b><i>x</i> &minus; <i>iy</i> = &radic;(<span class="frac"><span class="num"><i>a</i> &minus; <i>ib</i></span><span class="den"><i>c</i> &minus; <i>id</i></span></span>)</b>, prove that: <b>(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)<sup>2</sup> = <span class="frac"><span class="num"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span><span class="den"><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: <i>x</i> &minus; <i>iy</i> = &radic;(<span class="frac"><span class="num"><i>a</i> &minus; <i>ib</i></span><span class="den"><i>c</i> &minus; <i>id</i></span></span>)</div>
        <div>Taking modulus on both sides:</div>
        <div>&rArr; |<i>x</i> &minus; <i>iy</i>| = |&radic;(<span class="frac"><span class="num"><i>a</i> &minus; <i>ib</i></span><span class="den"><i>c</i> &minus; <i>id</i></span></span>)| = &radic;|<span class="frac"><span class="num"><i>a</i> &minus; <i>ib</i></span><span class="den"><i>c</i> &minus; <i>id</i></span></span>|</div>
        <div>We know |<i>x</i> &minus; <i>iy</i>| = &radic;(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>), &nbsp; |<i>a</i> &minus; <i>ib</i>| = &radic;(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>), &nbsp; |<i>c</i> &minus; <i>id</i>| = &radic;(<i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>):</div>
        <div>&rArr; &radic;(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>) = &radic;(<span class="frac"><span class="num">&radic;(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)</span><span class="den">&radic;(<i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>)</span></span>)</div>
        <div style="margin-top: 8px;">Squaring both sides once:</div>
        <div>&rArr; <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = &radic;(<span class="frac"><span class="num"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span><span class="den"><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span></span>)</div>
        <div style="margin-top: 6px;">Squaring both sides again:</div>
        <div>&rArr; <b>(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup>)<sup>2</sup> = <span class="frac"><span class="num"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span><span class="den"><i>c</i><sup>2</sup> + <i>d</i><sup>2</sup></span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Convert the following into polar form:<br/>
      <b>(i)</b> <span class="frac"><span class="num">1 + 7<i>i</i></span><span class="den">(2 &minus; <i>i</i>)<sup>2</sup></span></span> &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(ii)</b> <span class="frac"><span class="num">1 + 3<i>i</i></span><span class="den">1 &minus; 2<i>i</i></span></span>
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #FFB74D; font-weight: 700;">(i) <i>z</i> = <span class="frac"><span class="num">1 + 7<i>i</i></span><span class="den">(2 &minus; <i>i</i>)<sup>2</sup></span></span>:</div>
        <div>• Denominator = (2 &minus; <i>i</i>)<sup>2</sup> = 4 &minus; 4<i>i</i> + <i>i</i><sup>2</sup> = 3 &minus; 4<i>i</i></div>
        <div>&rArr; <i>z</i> = <span class="frac"><span class="num">(1 + 7<i>i</i>)(3 + 4<i>i</i>)</span><span class="den">(3 &minus; 4<i>i</i>)(3 + 4<i>i</i>)</span></span> = <span class="frac"><span class="num">3 + 4<i>i</i> + 21<i>i</i> &minus; 28</span><span class="den">9 + 16</span></span> = <span class="frac"><span class="num">&minus;25 + 25<i>i</i></span><span class="den">25</span></span> = &minus;1 + <i>i</i></div>
        <div>• <i>r</i> = &radic;[ (&minus;1)<sup>2</sup> + 1<sup>2</sup> ] = &radic;2</div>
        <div>• cos &theta; = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>, &nbsp; sin &theta; = <span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span> &rArr; &theta; = <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></div>
        <div>&rArr; <b><i>z</i> = &radic;2 [ cos(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) + <i>i</i> sin(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) ]</b></div>

        <div style="margin-top: 14px; color: #FFB74D; font-weight: 700;">(ii) <i>z</i> = <span class="frac"><span class="num">1 + 3<i>i</i></span><span class="den">1 &minus; 2<i>i</i></span></span>:</div>
        <div>&rArr; <i>z</i> = <span class="frac"><span class="num">(1 + 3<i>i</i>)(1 + 2<i>i</i>)</span><span class="den">(1 &minus; 2<i>i</i>)(1 + 2<i>i</i>)</span></span> = <span class="frac"><span class="num">1 + 2<i>i</i> + 3<i>i</i> + 6<i>i</i><sup>2</sup></span><span class="den">1 + 4</span></span> = <span class="frac"><span class="num">&minus;5 + 5<i>i</i></span><span class="den">5</span></span> = &minus;1 + <i>i</i></div>
        <div>• <i>r</i> = &radic;2, &nbsp; &theta; = <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></div>
        <div>&rArr; <b><i>z</i> = &radic;2 [ cos(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) + <i>i</i> sin(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) ]</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Both simplify to: √2 [cos(3π/4) + i sin(3π/4)]</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Solve the equation: <b>3<i>x</i><sup>2</sup> &minus; 4<i>x</i> + <span class="frac"><span class="num">20</span><span class="den">3</span></span> = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Multiplying by 3: 9<i>x</i><sup>2</sup> &minus; 12<i>x</i> + 20 = 0.</div>
        <div>Here <i>a</i> = 9, &nbsp; <i>b</i> = &minus;12, &nbsp; <i>c</i> = 20.</div>
        <div>&rArr; D = (&minus;12)<sup>2</sup> &minus; 4(9)(20) = 144 &minus; 720 = &minus;576</div>
        <div>&rArr; &radic;D = &radic;(&minus;576) = 24<i>i</i></div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;(&minus;12) &plusmn; 24<i>i</i></span><span class="den">2(9)</span></span> = <span class="frac"><span class="num">12 &plusmn; 24<i>i</i></span><span class="den">18</span></span> = <b><span class="frac"><span class="num">2</span><span class="den">3</span></span> &plusmn; <span class="frac"><span class="num">4</span><span class="den">3</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">2</span><span class="den">3</span></span> ± <span class="frac"><span class="num">4</span><span class="den">3</span></span>i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Solve the equation: <b><i>x</i><sup>2</sup> &minus; 2<i>x</i> + <span class="frac"><span class="num">3</span><span class="den">2</span></span> = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Multiplying by 2: 2<i>x</i><sup>2</sup> &minus; 4<i>x</i> + 3 = 0.</div>
        <div>Here <i>a</i> = 2, &nbsp; <i>b</i> = &minus;4, &nbsp; <i>c</i> = 3.</div>
        <div>&rArr; D = (&minus;4)<sup>2</sup> &minus; 4(2)(3) = 16 &minus; 24 = &minus;8</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;(&minus;4) &plusmn; &radic;(&minus;8)</span><span class="den">2(2)</span></span> = <span class="frac"><span class="num">4 &plusmn; 2<i>i</i>&radic;2</span><span class="den">4</span></span> = <b>1 &plusmn; <span class="frac"><span class="num">&radic;2</span><span class="den">2</span></span><i>i</i> = 1 &plusmn; <span class="frac"><span class="num"><i>i</i></span><span class="den">&radic;2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = 1 ± <span class="frac"><span class="num">i</span><span class="den">√2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Solve the equation: <b>27<i>x</i><sup>2</sup> &minus; 10<i>x</i> + 1 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = 27, &nbsp; <i>b</i> = &minus;10, &nbsp; <i>c</i> = 1.</div>
        <div>&rArr; D = (&minus;10)<sup>2</sup> &minus; 4(27)(1) = 100 &minus; 108 = &minus;8</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;(&minus;10) &plusmn; &radic;(&minus;8)</span><span class="den">2(27)</span></span> = <span class="frac"><span class="num">10 &plusmn; 2<i>i</i>&radic;2</span><span class="den">54</span></span> = <b><span class="frac"><span class="num">5 &plusmn; <i>i</i>&radic;2</span><span class="den">27</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">5 ± i√2</span><span class="den">27</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Solve the equation: <b>21<i>x</i><sup>2</sup> &minus; 28<i>x</i> + 10 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = 21, &nbsp; <i>b</i> = &minus;28, &nbsp; <i>c</i> = 10.</div>
        <div>&rArr; D = (&minus;28)<sup>2</sup> &minus; 4(21)(10) = 784 &minus; 840 = &minus;56</div>
        <div>&rArr; &radic;D = &radic;(&minus;56) = 2<i>i</i>&radic;14</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">28 &plusmn; 2<i>i</i>&radic;14</span><span class="den">2(21)</span></span> = <span class="frac"><span class="num">28 &plusmn; 2<i>i</i>&radic;14</span><span class="den">42</span></span> = <b><span class="frac"><span class="num">2</span><span class="den">3</span></span> &plusmn; <span class="frac"><span class="num">&radic;14</span><span class="den">21</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">2</span><span class="den">3</span></span> ± <span class="frac"><span class="num">√14</span><span class="den">21</span></span>i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      If <b><i>z</i><sub>1</sub> = 2 &minus; <i>i</i></b> and <b><i>z</i><sub>2</sub> = 1 + <i>i</i></b>, find: <b>|<span class="frac"><span class="num"><i>z</i><sub>1</sub> + <i>z</i><sub>2</sub> + 1</span><span class="den"><i>z</i><sub>1</sub> &minus; <i>z</i><sub>2</sub> + 1</span></span>|</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Evaluating numerator and denominator:</div>
        <div>• <i>z</i><sub>1</sub> + <i>z</i><sub>2</sub> + 1 = (2 &minus; <i>i</i>) + (1 + <i>i</i>) + 1 = 4</div>
        <div>• <i>z</i><sub>1</sub> &minus; <i>z</i><sub>2</sub> + 1 = (2 &minus; <i>i</i>) &minus; (1 + <i>i</i>) + 1 = 2 &minus; 2<i>i</i> = 2(1 &minus; <i>i</i>)</div>
        <div style="margin-top: 6px;">Dividing:</div>
        <div>&rArr; <span class="frac"><span class="num"><i>z</i><sub>1</sub> + <i>z</i><sub>2</sub> + 1</span><span class="den"><i>z</i><sub>1</sub> &minus; <i>z</i><sub>2</sub> + 1</span></span> = <span class="frac"><span class="num">4</span><span class="den">2(1 &minus; <i>i</i>)</span></span> = <span class="frac"><span class="num">2</span><span class="den">1 &minus; <i>i</i></span></span> = <span class="frac"><span class="num">2(1 + <i>i</i>)</span><span class="den">1<sup>2</sup> + 1<sup>2</sup></span></span> = 1 + <i>i</i></div>
        <div>Taking modulus:</div>
        <div>&rArr; |1 + <i>i</i>| = &radic;(1<sup>2</sup> + 1<sup>2</sup>) = <b>&radic;2</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">√2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      If <b><i>a</i> + <i>ib</i> = <span class="frac"><span class="num">(<i>x</i> + <i>i</i>)<sup>2</sup></span><span class="den">2<i>x</i><sup>2</sup> + 1</span></span></b>, prove that: <b><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <span class="frac"><span class="num">(<i>x</i><sup>2</sup> + 1)<sup>2</sup></span><span class="den">(2<i>x</i><sup>2</sup> + 1)<sup>2</sup></span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Taking the complex conjugate of both sides:</div>
        <div>&rArr; <i>a</i> &minus; <i>ib</i> = <span class="frac"><span class="num">(<i>x</i> &minus; <i>i</i>)<sup>2</sup></span><span class="den">2<i>x</i><sup>2</sup> + 1</span></span> &nbsp;<span class="reason">(since 2x² + 1 is real)</span></div>
        <div style="margin-top: 6px;">Multiplying the given equation with its conjugate:</div>
        <div>&rArr; (<i>a</i> + <i>ib</i>)(<i>a</i> &minus; <i>ib</i>) = <span class="frac"><span class="num">(<i>x</i> + <i>i</i>)<sup>2</sup></span><span class="den">2<i>x</i><sup>2</sup> + 1</span></span> &times; <span class="frac"><span class="num">(<i>x</i> &minus; <i>i</i>)<sup>2</sup></span><span class="den">2<i>x</i><sup>2</sup> + 1</span></span></div>
        <div>&rArr; <i>a</i><sup>2</sup> &minus; <i>i</i><sup>2</sup><i>b</i><sup>2</sup> = <span class="frac"><span class="num">[ (<i>x</i> + <i>i</i>)(<i>x</i> &minus; <i>i</i>) ]<sup>2</sup></span><span class="den">(2<i>x</i><sup>2</sup> + 1)<sup>2</sup></span></span></div>
        <div>&rArr; <b><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <span class="frac"><span class="num">(<i>x</i><sup>2</sup> + 1)<sup>2</sup></span><span class="den">(2<i>x</i><sup>2</sup> + 1)<sup>2</sup></span></span></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Let <b><i>z</i><sub>1</sub> = 2 &minus; <i>i</i></b> and <b><i>z</i><sub>2</sub> = &minus;2 + <i>i</i></b>. Find:<br/>
      <b>(i)</b> Re(<span class="frac"><span class="num"><i>z</i><sub>1</sub><i>z</i><sub>2</sub></span><span class="den"><i>z&#772;</i><sub>1</sub></span></span>) &nbsp;&nbsp;&nbsp;&nbsp;
      <b>(ii)</b> Im(<span class="frac"><span class="num">1</span><span class="den"><i>z</i><sub>1</sub><i>z&#772;</i><sub>1</sub></span></span>)
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #FFB74D; font-weight: 700;">(i) Re(<span class="frac"><span class="num"><i>z</i><sub>1</sub><i>z</i><sub>2</sub></span><span class="den"><i>z&#772;</i><sub>1</sub></span></span>):</div>
        <div>• <i>z</i><sub>1</sub><i>z</i><sub>2</sub> = (2 &minus; <i>i</i>)(&minus;2 + <i>i</i>) = &minus;4 + 2<i>i</i> + 2<i>i</i> &minus; <i>i</i><sup>2</sup> = &minus;3 + 4<i>i</i></div>
        <div>• <i>z&#772;</i><sub>1</sub> = 2 + <i>i</i></div>
        <div>&rArr; <span class="frac"><span class="num"><i>z</i><sub>1</sub><i>z</i><sub>2</sub></span><span class="den"><i>z&#772;</i><sub>1</sub></span></span> = <span class="frac"><span class="num">&minus;3 + 4<i>i</i></span><span class="den">2 + <i>i</i></span></span> = <span class="frac"><span class="num">(&minus;3 + 4<i>i</i>)(2 &minus; <i>i</i>)</span><span class="den">2<sup>2</sup> + 1<sup>2</sup></span></span> = <span class="frac"><span class="num">&minus;6 + 3<i>i</i> + 8<i>i</i> &minus; 4<i>i</i><sup>2</sup></span><span class="den">5</span></span> = <span class="frac"><span class="num">&minus;2 + 11<i>i</i></span><span class="den">5</span></span> = &minus;<span class="frac"><span class="num">2</span><span class="den">5</span></span> + <span class="frac"><span class="num">11</span><span class="den">5</span></span><i>i</i></div>
        <div>&rArr; <b>Re(<span class="frac"><span class="num"><i>z</i><sub>1</sub><i>z</i><sub>2</sub></span><span class="den"><i>z&#772;</i><sub>1</sub></span></span>) = &minus;<span class="frac"><span class="num">2</span><span class="den">5</span></span></b></div>

        <div style="margin-top: 14px; color: #FFB74D; font-weight: 700;">(ii) Im(<span class="frac"><span class="num">1</span><span class="den"><i>z</i><sub>1</sub><i>z&#772;</i><sub>1</sub></span></span>):</div>
        <div>• <i>z</i><sub>1</sub><i>z&#772;</i><sub>1</sub> = |<i>z</i><sub>1</sub>|<sup>2</sup> = 2<sup>2</sup> + (&minus;1)<sup>2</sup> = 5</div>
        <div>&rArr; <span class="frac"><span class="num">1</span><span class="den"><i>z</i><sub>1</sub><i>z&#772;</i><sub>1</sub></span></span> = <span class="frac"><span class="num">1</span><span class="den">5</span></span> = <span class="frac"><span class="num">1</span><span class="den">5</span></span> + 0<i>i</i></div>
        <div>&rArr; <b>Im(<span class="frac"><span class="num">1</span><span class="den"><i>z</i><sub>1</sub><i>z&#772;</i><sub>1</sub></span></span>) = 0</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">(i) Re = −2/5; &nbsp; (ii) Im = 0</span></div>
      </div>
    </div>
  </div>

  <!-- Question 13 -->
  <div class="q-card">
    <div class="q-title">Question 13</div>
    <div class="q-text">
      Find the modulus and argument of the complex number: <b><span class="frac"><span class="num">1 + 2<i>i</i></span><span class="den">1 &minus; 3<i>i</i></span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Simplifying to <i>a</i> + <i>ib</i> form:</div>
        <div>&rArr; <i>z</i> = <span class="frac"><span class="num">(1 + 2<i>i</i>)(1 + 3<i>i</i>)</span><span class="den">(1 &minus; 3<i>i</i>)(1 + 3<i>i</i>)</span></span> = <span class="frac"><span class="num">1 + 3<i>i</i> + 2<i>i</i> + 6<i>i</i><sup>2</sup></span><span class="den">1 + 9</span></span> = <span class="frac"><span class="num">&minus;5 + 5<i>i</i></span><span class="den">10</span></span> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span> + <span class="frac"><span class="num">1</span><span class="den">2</span></span><i>i</i></div>
        <div style="margin-top: 6px;">• <b>Modulus:</b></div>
        <div>&rArr; <i>r</i> = &radic;[ (&minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span>)<sup>2</sup> + (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)<sup>2</sup> ] = &radic;(<span class="frac"><span class="num">1</span><span class="den">4</span></span> + <span class="frac"><span class="num">1</span><span class="den">4</span></span>) = &radic;(<span class="frac"><span class="num">1</span><span class="den">2</span></span>) = <b><span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span></b></div>
        <div style="margin-top: 6px;">• <b>Argument:</b></div>
        <div>cos &theta; = &minus;<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>, &nbsp; sin &theta; = <span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span> &rArr; &theta; lies in <b>Quadrant II</b>.</div>
        <div>&rArr; &theta; = &pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> = <b><span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Modulus = 1/√2, &nbsp; Argument = 3π/4</span></div>
      </div>
    </div>
  </div>

  <!-- Question 14 -->
  <div class="q-card">
    <div class="q-title">Question 14</div>
    <div class="q-text">
      Find the real numbers <i>x</i> and <i>y</i> if <b>(<i>x</i> &minus; <i>iy</i>)(3 + 5<i>i</i>)</b> is the conjugate of <b>&minus;6 &minus; 24<i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>• Expanding LHS: (<i>x</i> &minus; <i>iy</i>)(3 + 5<i>i</i>) = 3<i>x</i> + 5<i>xi</i> &minus; 3<i>yi</i> &minus; 5<i>yi</i><sup>2</sup> = (3<i>x</i> + 5<i>y</i>) + <i>i</i>(5<i>x</i> &minus; 3<i>y</i>)</div>
        <div>• Conjugate of (&minus;6 &minus; 24<i>i</i>) is: &minus;6 + 24<i>i</i></div>
        <div style="margin-top: 6px;">Equating real and imaginary parts:</div>
        <div>1) 3<i>x</i> + 5<i>y</i> = &minus;6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...(Equation 1)</div>
        <div>2) 5<i>x</i> &minus; 3<i>y</i> = 24 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...(Equation 2)</div>
        <div style="margin-top: 6px;">Eliminating <i>y</i>: Multiply Eq (1) by 3 and Eq (2) by 5:</div>
        <div>&rArr; 9<i>x</i> + 15<i>y</i> = &minus;18</div>
        <div>&rArr; 25<i>x</i> &minus; 15<i>y</i> = 120</div>
        <div>Adding equations: 34<i>x</i> = 102 &rArr; <b><i>x</i> = 3</b></div>
        <div style="margin-top: 6px;">Substituting <i>x</i> = 3 into Eq (1):</div>
        <div>&rArr; 3(3) + 5<i>y</i> = &minus;6 &rArr; 9 + 5<i>y</i> = &minus;6 &rArr; 5<i>y</i> = &minus;15 &rArr; <b><i>y</i> = &minus;3</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = 3 &nbsp;and&nbsp; y = −3</span></div>
      </div>
    </div>
  </div>

  <!-- Question 15 -->
  <div class="q-card">
    <div class="q-title">Question 15</div>
    <div class="q-text">
      Find the modulus of: <b><span class="frac"><span class="num">1 + <i>i</i></span><span class="den">1 &minus; <i>i</i></span></span> &minus; <span class="frac"><span class="num">1 &minus; <i>i</i></span><span class="den">1 + <i>i</i></span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Taking common denominator:</div>
        <div>&rArr; <span class="frac"><span class="num">(1 + <i>i</i>)<sup>2</sup> &minus; (1 &minus; <i>i</i>)<sup>2</sup></span><span class="den">(1 &minus; <i>i</i>)(1 + <i>i</i>)</span></span></div>
        <div>• (1 + <i>i</i>)<sup>2</sup> &minus; (1 &minus; <i>i</i>)<sup>2</sup> = (1 + 2<i>i</i> &minus; 1) &minus; (1 &minus; 2<i>i</i> &minus; 1) = 2<i>i</i> &minus; (&minus;2<i>i</i>) = 4<i>i</i></div>
        <div>• Denominator = 1<sup>2</sup> + 1<sup>2</sup> = 2</div>
        <div>&rArr; Expression = <span class="frac"><span class="num">4<i>i</i></span><span class="den">2</span></span> = 2<i>i</i></div>
        <div>&rArr; Modulus |2<i>i</i>| = &radic;(0<sup>2</sup> + 2<sup>2</sup>) = <b>2</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Modulus = 2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 16 -->
  <div class="q-card">
    <div class="q-title">Question 16</div>
    <div class="q-text">
      If <b>(<i>x</i> + <i>iy</i>)<sup>3</sup> = <i>u</i> + <i>iv</i></b>, then show that: <b><span class="frac"><span class="num"><i>u</i></span><span class="den"><i>x</i></span></span> + <span class="frac"><span class="num"><i>v</i></span><span class="den"><i>y</i></span></span> = 4(<i>x</i><sup>2</sup> &minus; <i>y</i><sup>2</sup>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expanding (<i>x</i> + <i>iy</i>)<sup>3</sup>:</div>
        <div>&rArr; <i>x</i><sup>3</sup> + 3<i>x</i><sup>2</sup>(<i>iy</i>) + 3<i>x</i>(<i>iy</i>)<sup>2</sup> + (<i>iy</i>)<sup>3</sup> = <i>u</i> + <i>iv</i></div>
        <div>&rArr; <i>x</i><sup>3</sup> + 3<i>ix</i><sup>2</sup><i>y</i> &minus; 3<i>xy</i><sup>2</sup> &minus; <i>iy</i><sup>3</sup> = <i>u</i> + <i>iv</i></div>
        <div>&rArr; (<i>x</i><sup>3</sup> &minus; 3<i>xy</i><sup>2</sup>) + <i>i</i>(3<i>x</i><sup>2</sup><i>y</i> &minus; <i>y</i><sup>3</sup>) = <i>u</i> + <i>iv</i></div>
        <div style="margin-top: 6px;">Equating real and imaginary parts:</div>
        <div>• <i>u</i> = <i>x</i><sup>3</sup> &minus; 3<i>xy</i><sup>2</sup> = <i>x</i>(<i>x</i><sup>2</sup> &minus; 3<i>y</i><sup>2</sup>) &rArr; <span class="frac"><span class="num"><i>u</i></span><span class="den"><i>x</i></span></span> = <i>x</i><sup>2</sup> &minus; 3<i>y</i><sup>2</sup></div>
        <div>• <i>v</i> = 3<i>x</i><sup>2</sup><i>y</i> &minus; <i>y</i><sup>3</sup> = <i>y</i>(3<i>x</i><sup>2</sup> &minus; <i>y</i><sup>2</sup>) &rArr; <span class="frac"><span class="num"><i>v</i></span><span class="den"><i>y</i></span></span> = 3<i>x</i><sup>2</sup> &minus; <i>y</i><sup>2</sup></div>
        <div style="margin-top: 8px;">Adding both expressions:</div>
        <div>&rArr; <span class="frac"><span class="num"><i>u</i></span><span class="den"><i>x</i></span></span> + <span class="frac"><span class="num"><i>v</i></span><span class="den"><i>y</i></span></span> = (<i>x</i><sup>2</sup> &minus; 3<i>y</i><sup>2</sup>) + (3<i>x</i><sup>2</sup> &minus; <i>y</i><sup>2</sup>) = 4<i>x</i><sup>2</sup> &minus; 4<i>y</i><sup>2</sup> = <b>4(<i>x</i><sup>2</sup> &minus; <i>y</i><sup>2</sup>)</b></div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 17 -->
  <div class="q-card">
    <div class="q-title">Question 17</div>
    <div class="q-text">
      If &alpha; and &beta; are different complex numbers with <b>|&beta;| = 1</b>, then find: <b>|<span class="frac"><span class="num">&beta; &minus; &alpha;</span><span class="den">1 &minus; &alpha;&#772;&beta;</span></span>|</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>We know that |<i>z</i>|<sup>2</sup> = <i>z</i> &times; <i>z&#772;</i>.</div>
        <div>&rArr; |<span class="frac"><span class="num">&beta; &minus; &alpha;</span><span class="den">1 &minus; &alpha;&#772;&beta;</span></span>|<sup>2</sup> = (<span class="frac"><span class="num">&beta; &minus; &alpha;</span><span class="den">1 &minus; &alpha;&#772;&beta;</span></span>) (<span class="frac"><span class="num">&beta;&#772; &minus; &alpha;&#772;</span><span class="den">1 &minus; &alpha;&beta;&#772;</span></span>)</div>
        <div>• Numerator = &beta;&beta;&#772; &minus; &beta;&alpha;&#772; &minus; &alpha;&beta;&#772; + &alpha;&alpha;&#772; = |&beta;|<sup>2</sup> &minus; &beta;&alpha;&#772; &minus; &alpha;&beta;&#772; + |&alpha;|<sup>2</sup></div>
        <div>Since |&beta;| = 1 &rArr; |&beta;|<sup>2</sup> = 1:</div>
        <div>&rArr; Numerator = 1 &minus; &beta;&alpha;&#772; &minus; &alpha;&beta;&#772; + |&alpha;|<sup>2</sup></div>
        <div style="margin-top: 6px;">• Denominator = (1 &minus; &alpha;&#772;&beta;)(1 &minus; &alpha;&beta;&#772;) = 1 &minus; &alpha;&beta;&#772; &minus; &alpha;&#772;&beta; + &alpha;&alpha;&#772;&beta;&beta;&#772;</div>
        <div>Since &beta;&beta;&#772; = |&beta;|<sup>2</sup> = 1:</div>
        <div>&rArr; Denominator = 1 &minus; &alpha;&beta;&#772; &minus; &alpha;&#772;&beta; + |&alpha;|<sup>2</sup></div>
        <div style="margin-top: 8px;">Notice Numerator = Denominator:</div>
        <div>&rArr; |<span class="frac"><span class="num">&beta; &minus; &alpha;</span><span class="den">1 &minus; &alpha;&#772;&beta;</span></span>|<sup>2</sup> = 1 &nbsp;&rArr;&nbsp; <b>|<span class="frac"><span class="num">&beta; &minus; &alpha;</span><span class="den">1 &minus; &alpha;&#772;&beta;</span></span>| = 1</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">1</span></div>
      </div>
    </div>
  </div>

  <!-- Question 18 -->
  <div class="q-card">
    <div class="q-title">Question 18</div>
    <div class="q-text">
      Find the number of non-zero integral solutions of the equation: <b>|1 &minus; <i>i</i>|<sup><i>x</i></sup> = 2<sup><i>x</i></sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>• |1 &minus; <i>i</i>| = &radic;[ 1<sup>2</sup> + (&minus;1)<sup>2</sup> ] = &radic;2 = 2<sup>1/2</sup></div>
        <div>Substituting into equation:</div>
        <div>&rArr; (2<sup>1/2</sup>)<sup><i>x</i></sup> = 2<sup><i>x</i></sup></div>
        <div>&rArr; 2<sup><i>x</i>/2</sup> = 2<sup><i>x</i></sup></div>
        <div>Equating exponents:</div>
        <div>&rArr; <span class="frac"><span class="num"><i>x</i></span><span class="den">2</span></span> = <i>x</i> &nbsp;&rArr;&nbsp; <i>x</i> = 2<i>x</i> &nbsp;&rArr;&nbsp; <i>x</i> = 0</div>
        <div>&rArr; The only integer solution is <i>x</i> = 0.</div>
        <div>Therefore, there are <b>0</b> non-zero integral solutions.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">0 (No non-zero integral solutions exist)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 19 -->
  <div class="q-card">
    <div class="q-title">Question 19</div>
    <div class="q-text">
      If <b>(<i>a</i> + <i>ib</i>)(<i>c</i> + <i>id</i>)(<i>e</i> + <i>if</i>)(<i>g</i> + <i>ih</i>) = A + <i>i</i>B</b>, then show that:<br/>
      <b>(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)(<i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>)(<i>e</i><sup>2</sup> + <i>f</i><sup>2</sup>)(<i>g</i><sup>2</sup> + <i>h</i><sup>2</sup>) = A<sup>2</sup> + B<sup>2</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: (<i>a</i> + <i>ib</i>)(<i>c</i> + <i>id</i>)(<i>e</i> + <i>if</i>)(<i>g</i> + <i>ih</i>) = A + <i>i</i>B</div>
        <div>Taking modulus on both sides:</div>
        <div>&rArr; |(<i>a</i> + <i>ib</i>)(<i>c</i> + <i>id</i>)(<i>e</i> + <i>if</i>)(<i>g</i> + <i>ih</i>)| = |A + <i>i</i>B|</div>
        <div>Using property |<i>z</i><sub>1</sub><i>z</i><sub>2</sub>...| = |<i>z</i><sub>1</sub>||<i>z</i><sub>2</sub>|...:</div>
        <div>&rArr; |<i>a</i> + <i>ib</i>| &times; |<i>c</i> + <i>id</i>| &times; |<i>e</i> + <i>if</i>| &times; |<i>g</i> + <i>ih</i>| = |A + <i>i</i>B|</div>
        <div>&rArr; &radic;(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>) &times; &radic;(<i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>) &times; &radic;(<i>e</i><sup>2</sup> + <i>f</i><sup>2</sup>) &times; &radic;(<i>g</i><sup>2</sup> + <i>h</i><sup>2</sup>) = &radic;(A<sup>2</sup> + B<sup>2</sup>)</div>
        <div style="margin-top: 6px;">Squaring both sides:</div>
        <div>&rArr; <b>(<i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>)(<i>c</i><sup>2</sup> + <i>d</i><sup>2</sup>)(<i>e</i><sup>2</sup> + <i>f</i><sup>2</sup>)(<i>g</i><sup>2</sup> + <i>h</i><sup>2</sup>) = A<sup>2</sup> + B<sup>2</sup></b></div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved.</span></div>
      </div>
    </div>
  </div>

  <!-- Question 20 -->
  <div class="q-card">
    <div class="q-title">Question 20</div>
    <div class="q-text">
      If <b>(<span class="frac"><span class="num">1 + <i>i</i></span><span class="den">1 &minus; <i>i</i></span></span>)<sup><i>m</i></sup> = 1</b>, then find the least positive integral value of <i>m</i>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Simplifying the base:</div>
        <div>&rArr; <span class="frac"><span class="num">1 + <i>i</i></span><span class="den">1 &minus; <i>i</i></span></span> = <span class="frac"><span class="num">(1 + <i>i</i>)(1 + <i>i</i>)</span><span class="den">(1 &minus; <i>i</i>)(1 + <i>i</i>)</span></span> = <span class="frac"><span class="num">(1 + <i>i</i>)<sup>2</sup></span><span class="den">1<sup>2</sup> + 1<sup>2</sup></span></span> = <span class="frac"><span class="num">1 + 2<i>i</i> &minus; 1</span><span class="den">2</span></span> = <span class="frac"><span class="num">2<i>i</i></span><span class="den">2</span></span> = <i>i</i></div>
        <div style="margin-top: 6px;">The equation becomes:</div>
        <div>&rArr; <b><i>i</i><sup><i>m</i></sup> = 1</b></div>
        <div>We know the cyclic powers of <i>i</i>: <i>i</i><sup>1</sup> = <i>i</i>, &nbsp; <i>i</i><sup>2</sup> = &minus;1, &nbsp; <i>i</i><sup>3</sup> = &minus;<i>i</i>, &nbsp; <i>i</i><sup>4</sup> = 1.</div>
        <div>Therefore, <i>i</i><sup><i>m</i></sup> = 1 for <i>m</i> = 4<i>k</i>, where <i>k</i> &isin; &naturals;.</div>
        <div>The least positive integer is <i>k</i> = 1 &rArr; <b><i>m</i> = 4</b>.</div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">Least positive integral value of m = 4</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getMiscellaneousExercise
};
