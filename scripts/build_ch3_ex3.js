const { styleBlock, themeColor } = require('./ch3_common');

function getExercise3_3() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(124, 77, 255, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #7C4DFF; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #7C4DFF;">
      📘 Exercise 3.3 &bull; Trigonometric Identities, Sum &amp; Product Formulas
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Prove that: <b>sin<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> + cos<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> &minus; tan<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> = &minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>LHS = sin<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> + cos<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> &minus; tan<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span></div>
        <div style="margin-top: 6px;">Substituting standard values:</div>
        <div>&rArr; sin <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>, &nbsp; cos <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>, &nbsp; tan <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> = 1</div>
        <div>&rArr; LHS = (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)<sup>2</sup> + (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)<sup>2</sup> &minus; (1)<sup>2</sup></div>
        <div>&rArr; = <span class="frac"><span class="num">1</span><span class="den">4</span></span> + <span class="frac"><span class="num">1</span><span class="den">4</span></span> &minus; 1 = <span class="frac"><span class="num">2</span><span class="den">4</span></span> &minus; 1 = <span class="frac"><span class="num">1</span><span class="den">2</span></span> &minus; 1 = <b>&minus;<span class="frac"><span class="num">1</span><span class="den">2</span></span></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = −1/2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Prove that: <b>2 sin<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> + cosec<sup>2</sup> <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span> cos<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = <span class="frac"><span class="num">3</span><span class="den">2</span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>LHS = 2 sin<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> + cosec<sup>2</sup> <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span> cos<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></div>
        <div style="margin-top: 6px;">Simplifying cosec <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span>:</div>
        <div>&rArr; cosec <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span> = cosec(&pi; + <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) = &minus;cosec <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = &minus;2</div>
        <div>&rArr; cosec<sup>2</sup> <span class="frac"><span class="num">7&pi;</span><span class="den">6</span></span> = (&minus;2)<sup>2</sup> = 4</div>
        <div style="margin-top: 6px;">Substituting values:</div>
        <div>&rArr; LHS = 2(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)<sup>2</sup> + 4 &times; (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)<sup>2</sup></div>
        <div>&rArr; = 2 &times; <span class="frac"><span class="num">1</span><span class="den">4</span></span> + 4 &times; <span class="frac"><span class="num">1</span><span class="den">4</span></span> = <span class="frac"><span class="num">1</span><span class="den">2</span></span> + 1 = <b><span class="frac"><span class="num">3</span><span class="den">2</span></span></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 3/2</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Prove that: <b>cot<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> + cosec <span class="frac"><span class="num">5&pi;</span><span class="den">6</span></span> + 3 tan<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = 6</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>LHS = cot<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> + cosec <span class="frac"><span class="num">5&pi;</span><span class="den">6</span></span> + 3 tan<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span></div>
        <div style="margin-top: 6px;">Evaluating each term:</div>
        <div>• cot <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = &radic;3 &rArr; cot<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = (&radic;3)<sup>2</sup> = 3</div>
        <div>• cosec <span class="frac"><span class="num">5&pi;</span><span class="den">6</span></span> = cosec(&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span>) = cosec <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = 2</div>
        <div>• tan <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = <span class="frac"><span class="num">1</span><span class="den">&radic;3</span></span> &rArr; 3 tan<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">6</span></span> = 3 &times; (<span class="frac"><span class="num">1</span><span class="den">&radic;3</span></span>)<sup>2</sup> = 3 &times; <span class="frac"><span class="num">1</span><span class="den">3</span></span> = 1</div>
        <div style="margin-top: 6px;">&rArr; LHS = 3 + 2 + 1 = <b>6</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 6</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Prove that: <b>2 sin<sup>2</sup> <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span> + 2 cos<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> + 2 sec<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = 10</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>LHS = 2 sin<sup>2</sup> <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span> + 2 cos<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> + 2 sec<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span></div>
        <div style="margin-top: 6px;">Evaluating each term:</div>
        <div>• sin <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span> = sin(&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span>) = sin <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> = <span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span></div>
        <div>&nbsp;&nbsp;&bull; 2 sin<sup>2</sup> <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span> = 2 &times; (<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>)<sup>2</sup> = 2 &times; <span class="frac"><span class="num">1</span><span class="den">2</span></span> = 1</div>
        <div>• 2 cos<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> = 2 &times; (<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>)<sup>2</sup> = 2 &times; <span class="frac"><span class="num">1</span><span class="den">2</span></span> = 1</div>
        <div>• sec <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = 2 &rArr; 2 sec<sup>2</sup> <span class="frac"><span class="num">&pi;</span><span class="den">3</span></span> = 2 &times; (2)<sup>2</sup> = 2 &times; 4 = 8</div>
        <div style="margin-top: 6px;">&rArr; LHS = 1 + 1 + 8 = <b>10</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 10</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Find the value of:<br/>
      <b>(i)</b> sin 75&deg; &nbsp;&nbsp;&nbsp;&nbsp; <b>(ii)</b> tan 15&deg;
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #B388FF; font-weight: 700;">(i) sin 75&deg;:</div>
        <div>&rArr; Express 75&deg; = 45&deg; + 30&deg;.</div>
        <div>Using formula: <b>sin(A + B) = sin A cos B + cos A sin B</b></div>
        <div>&rArr; sin 75&deg; = sin 45&deg; cos 30&deg; + cos 45&deg; sin 30&deg;</div>
        <div>&rArr; = (<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>) &times; (<span class="frac"><span class="num">&radic;3</span><span class="den">2</span></span>) + (<span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>) &times; (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)</div>
        <div>&rArr; = <span class="frac"><span class="num">&radic;3</span><span class="den">2&radic;2</span></span> + <span class="frac"><span class="num">1</span><span class="den">2&radic;2</span></span> = <b><span class="frac"><span class="num">&radic;3 + 1</span><span class="den">2&radic;2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">√3 + 1</span><span class="den">2√2</span></span></span></div>

        <div style="margin-top: 14px; color: #B388FF; font-weight: 700;">(ii) tan 15&deg;:</div>
        <div>&rArr; Express 15&deg; = 45&deg; &minus; 30&deg;.</div>
        <div>Using formula: <b>tan(A &minus; B) = <span class="frac"><span class="num">tan A &minus; tan B</span><span class="den">1 + tan A tan B</span></span></b></div>
        <div>&rArr; tan 15&deg; = <span class="frac"><span class="num">tan 45&deg; &minus; tan 30&deg;</span><span class="den">1 + tan 45&deg; tan 30&deg;</span></span> = <span class="frac"><span class="num">1 &minus; 1/&radic;3</span><span class="den">1 + 1/&radic;3</span></span> = <span class="frac"><span class="num">&radic;3 &minus; 1</span><span class="den">&radic;3 + 1</span></span></div>
        <div>Rationalising the denominator:</div>
        <div>&rArr; = <span class="frac"><span class="num">(&radic;3 &minus; 1)<sup>2</sup></span><span class="den">(&radic;3 + 1)(&radic;3 &minus; 1)</span></span> = <span class="frac"><span class="num">3 + 1 &minus; 2&radic;3</span><span class="den">3 &minus; 1</span></span> = <span class="frac"><span class="num">4 &minus; 2&radic;3</span><span class="den">2</span></span> = <b>2 &minus; &radic;3</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">2 − √3</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Prove that: <b>cos(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>x</i>) cos(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>y</i>) &minus; sin(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>x</i>) sin(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>y</i>) = sin(<i>x</i> + <i>y</i>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let A = <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>x</i> &nbsp;and&nbsp; B = <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>y</i>.</div>
        <div>The expression matches the identity: <b>cos A cos B &minus; sin A sin B = cos(A + B)</b></div>
        <div>&rArr; LHS = cos[ (<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>x</i>) + (<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>y</i>) ]</div>
        <div>&rArr; = cos[ <span class="frac"><span class="num">&pi;</span><span class="den">2</span></span> &minus; (<i>x</i> + <i>y</i>) ]</div>
        <div>Using complementary angle rule <b>cos(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span> &minus; &theta;) = sin &theta;</b>:</div>
        <div>&rArr; = <b>sin(<i>x</i> + <i>y</i>)</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = sin(x + y)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">tan(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> + <i>x</i>)</span><span class="den">tan(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>x</i>)</span></span> = (<span class="frac"><span class="num">1 + tan <i>x</i></span><span class="den">1 &minus; tan <i>x</i></span></span>)<sup>2</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using addition and subtraction formulas for tangent:</div>
        <div>&rArr; tan(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> + <i>x</i>) = <span class="frac"><span class="num">tan(&pi;/4) + tan x</span><span class="den">1 &minus; tan(&pi;/4) tan x</span></span> = <span class="frac"><span class="num">1 + tan x</span><span class="den">1 &minus; tan x</span></span></div>
        <div>&rArr; tan(<span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> &minus; <i>x</i>) = <span class="frac"><span class="num">tan(&pi;/4) &minus; tan x</span><span class="den">1 + tan(&pi;/4) tan x</span></span> = <span class="frac"><span class="num">1 &minus; tan x</span><span class="den">1 + tan x</span></span></div>
        <div style="margin-top: 8px;">Dividing numerator by denominator:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num"><span class="frac"><span class="num">1 + tan x</span><span class="den">1 &minus; tan x</span></span></span><span class="den"><span class="frac"><span class="num">1 &minus; tan x</span><span class="den">1 + tan x</span></span></span></span> = <span class="frac"><span class="num">1 + tan x</span><span class="den">1 &minus; tan x</span></span> &times; <span class="frac"><span class="num">1 + tan x</span><span class="den">1 &minus; tan x</span></span> = <b>(<span class="frac"><span class="num">1 + tan <i>x</i></span><span class="den">1 &minus; tan <i>x</i></span></span>)<sup>2</sup></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">cos(&pi; + <i>x</i>) cos(&minus;<i>x</i>)</span><span class="den">sin(&pi; &minus; <i>x</i>) cos(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span> + <i>x</i>)</span></span> = cot<sup>2</sup> <i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using quadrant reduction formulas:</div>
        <div>• cos(&pi; + <i>x</i>) = &minus;cos <i>x</i> <span class="reason">(Quadrant III)</span></div>
        <div>• cos(&minus;<i>x</i>) = cos <i>x</i> <span class="reason">(Even function)</span></div>
        <div>• sin(&pi; &minus; <i>x</i>) = sin <i>x</i> <span class="reason">(Quadrant II)</span></div>
        <div>• cos(<span class="frac"><span class="num">&pi;</span><span class="den">2</span></span> + <i>x</i>) = &minus;sin <i>x</i> <span class="reason">(Quadrant II)</span></div>
        <div style="margin-top: 8px;">Substituting into LHS:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">(&minus;cos <i>x</i>)(cos <i>x</i>)</span><span class="den">(sin <i>x</i>)(&minus;sin <i>x</i>)</span></span> = <span class="frac"><span class="num">&minus;cos<sup>2</sup> <i>x</i></span><span class="den">&minus;sin<sup>2</sup> <i>x</i></span></span> = <span class="frac"><span class="num">cos<sup>2</sup> <i>x</i></span><span class="den">sin<sup>2</sup> <i>x</i></span></span> = <b>cot<sup>2</sup> <i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = cot² x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Prove that: <b>cos(<span class="frac"><span class="num">3&pi;</span><span class="den">2</span></span> + <i>x</i>) cos(2&pi; + <i>x</i>) [ cot(<span class="frac"><span class="num">3&pi;</span><span class="den">2</span></span> &minus; <i>x</i>) + cot(2&pi; + <i>x</i>) ] = 1</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using reduction identities:</div>
        <div>• cos(<span class="frac"><span class="num">3&pi;</span><span class="den">2</span></span> + <i>x</i>) = sin <i>x</i> <span class="reason">(Quadrant IV)</span></div>
        <div>• cos(2&pi; + <i>x</i>) = cos <i>x</i> <span class="reason">(Quadrant I)</span></div>
        <div>• cot(<span class="frac"><span class="num">3&pi;</span><span class="den">2</span></span> &minus; <i>x</i>) = tan <i>x</i> <span class="reason">(Quadrant III)</span></div>
        <div>• cot(2&pi; + <i>x</i>) = cot <i>x</i> <span class="reason">(Quadrant I)</span></div>
        <div style="margin-top: 8px;">Substituting into LHS:</div>
        <div>&rArr; LHS = sin <i>x</i> cos <i>x</i> [ tan <i>x</i> + cot <i>x</i> ]</div>
        <div>&rArr; = sin <i>x</i> cos <i>x</i> [ <span class="frac"><span class="num">sin <i>x</i></span><span class="den">cos <i>x</i></span></span> + <span class="frac"><span class="num">cos <i>x</i></span><span class="den">sin <i>x</i></span></span> ]</div>
        <div>&rArr; = sin <i>x</i> cos <i>x</i> [ <span class="frac"><span class="num">sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i></span><span class="den">sin <i>x</i> cos <i>x</i></span></span> ] = sin<sup>2</sup> <i>x</i> + cos<sup>2</sup> <i>x</i> = <b>1</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 1</span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Prove that: <b>sin(<i>n</i> + 1)<i>x</i> sin(<i>n</i> + 2)<i>x</i> + cos(<i>n</i> + 1)<i>x</i> cos(<i>n</i> + 2)<i>x</i> = cos <i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Rearranging terms in LHS:</div>
        <div>&rArr; LHS = cos(<i>n</i> + 2)<i>x</i> cos(<i>n</i> + 1)<i>x</i> + sin(<i>n</i> + 2)<i>x</i> sin(<i>n</i> + 1)<i>x</i></div>
        <div>Using formula: <b>cos A cos B + sin A sin B = cos(A &minus; B)</b></div>
        <div>Let A = (<i>n</i> + 2)<i>x</i> &nbsp;and&nbsp; B = (<i>n</i> + 1)<i>x</i>:</div>
        <div>&rArr; LHS = cos[ (<i>n</i> + 2)<i>x</i> &minus; (<i>n</i> + 1)<i>x</i> ]</div>
        <div>&rArr; = cos[ <i>nx</i> + 2<i>x</i> &minus; <i>nx</i> &minus; <i>x</i> ] = <b>cos <i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = cos x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      Prove that: <b>cos(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span> + <i>x</i>) &minus; cos(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span> &minus; <i>x</i>) = &minus;&radic;2 sin <i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using formula: <b>cos C &minus; cos D = &minus;2 sin(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b></div>
        <div>Here C = <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span> + <i>x</i> &nbsp;and&nbsp; D = <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span> &minus; <i>x</i>:</div>
        <div>&rArr; <span class="frac"><span class="num">C + D</span><span class="den">2</span></span> = <span class="frac"><span class="num">6&pi; / 4</span><span class="den">2</span></span> = <span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span></div>
        <div>&rArr; <span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span> = <span class="frac"><span class="num">2x</span><span class="den">2</span></span> = <i>x</i></div>
        <div style="margin-top: 8px;">Substituting:</div>
        <div>&rArr; LHS = &minus;2 sin(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) sin <i>x</i></div>
        <div>Since sin(<span class="frac"><span class="num">3&pi;</span><span class="den">4</span></span>) = sin(&pi; &minus; <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span>) = sin <span class="frac"><span class="num">&pi;</span><span class="den">4</span></span> = <span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span>:</div>
        <div>&rArr; LHS = &minus;2 &times; <span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span> &times; sin <i>x</i> = <b>&minus;&radic;2 sin <i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = −√2 sin x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Prove that: <b>sin<sup>2</sup> 6<i>x</i> &minus; sin<sup>2</sup> 4<i>x</i> = sin 2<i>x</i> sin 10<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using the standard algebraic difference of squares and product transformation:</div>
        <div>&rArr; sin<sup>2</sup> 6<i>x</i> &minus; sin<sup>2</sup> 4<i>x</i> = (sin 6<i>x</i> + sin 4<i>x</i>)(sin 6<i>x</i> &minus; sin 4<i>x</i>)</div>
        <div style="margin-top: 6px;">Applying sum-to-product identities:</div>
        <div>• sin 6<i>x</i> + sin 4<i>x</i> = 2 sin(<span class="frac"><span class="num">6x + 4x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">6x &minus; 4x</span><span class="den">2</span></span>) = 2 sin 5<i>x</i> cos <i>x</i></div>
        <div>• sin 6<i>x</i> &minus; sin 4<i>x</i> = 2 cos(<span class="frac"><span class="num">6x + 4x</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">6x &minus; 4x</span><span class="den">2</span></span>) = 2 cos 5<i>x</i> sin <i>x</i></div>
        <div style="margin-top: 8px;">Multiplying and regrouping:</div>
        <div>&rArr; LHS = (2 sin 5<i>x</i> cos 5<i>x</i>)(2 sin <i>x</i> cos <i>x</i>)</div>
        <div>Using double angle formula <b>2 sin &theta; cos &theta; = sin 2&theta;</b>:</div>
        <div>&rArr; = sin(10<i>x</i>) &times; sin(2<i>x</i>) = <b>sin 2<i>x</i> sin 10<i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = sin 2x sin 10x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 13 -->
  <div class="q-card">
    <div class="q-title">Question 13</div>
    <div class="q-text">
      Prove that: <b>cos<sup>2</sup> 2<i>x</i> &minus; cos<sup>2</sup> 6<i>x</i> = sin 4<i>x</i> sin 8<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Converting cosines to sines using cos<sup>2</sup> &theta; = 1 &minus; sin<sup>2</sup> &theta;:</div>
        <div>&rArr; LHS = (1 &minus; sin<sup>2</sup> 2<i>x</i>) &minus; (1 &minus; sin<sup>2</sup> 6<i>x</i>)</div>
        <div>&rArr; = sin<sup>2</sup> 6<i>x</i> &minus; sin<sup>2</sup> 2<i>x</i></div>
        <div>Using the identity <b>sin<sup>2</sup> A &minus; sin<sup>2</sup> B = sin(A + B) sin(A &minus; B)</b>:</div>
        <div>&rArr; = sin(6<i>x</i> + 2<i>x</i>) sin(6<i>x</i> &minus; 2<i>x</i>)</div>
        <div>&rArr; = sin 8<i>x</i> sin 4<i>x</i> = <b>sin 4<i>x</i> sin 8<i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = sin 4x sin 8x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 14 -->
  <div class="q-card">
    <div class="q-title">Question 14</div>
    <div class="q-text">
      Prove that: <b>sin 2<i>x</i> + 2 sin 4<i>x</i> + sin 6<i>x</i> = 4 cos<sup>2</sup> <i>x</i> sin 4<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Grouping the outer terms:</div>
        <div>&rArr; LHS = (sin 6<i>x</i> + sin 2<i>x</i>) + 2 sin 4<i>x</i></div>
        <div>Using formula: <b>sin C + sin D = 2 sin(<span class="frac"><span class="num">C + D</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">C &minus; D</span><span class="den">2</span></span>)</b></div>
        <div>&rArr; sin 6<i>x</i> + sin 2<i>x</i> = 2 sin(<span class="frac"><span class="num">8x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">4x</span><span class="den">2</span></span>) = 2 sin 4<i>x</i> cos 2<i>x</i></div>
        <div style="margin-top: 8px;">Substituting back and factoring:</div>
        <div>&rArr; LHS = 2 sin 4<i>x</i> cos 2<i>x</i> + 2 sin 4<i>x</i></div>
        <div>&rArr; = 2 sin 4<i>x</i> (cos 2<i>x</i> + 1)</div>
        <div>Using <b>cos 2<i>x</i> + 1 = 2 cos<sup>2</sup> <i>x</i></b>:</div>
        <div>&rArr; = 2 sin 4<i>x</i> &times; (2 cos<sup>2</sup> <i>x</i>) = <b>4 cos<sup>2</sup> <i>x</i> sin 4<i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 4 cos² x sin 4x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 15 -->
  <div class="q-card">
    <div class="q-title">Question 15</div>
    <div class="q-text">
      Prove that: <b>cot 4<i>x</i> (sin 5<i>x</i> + sin 3<i>x</i>) = cot <i>x</i> (sin 5<i>x</i> &minus; sin 3<i>x</i>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #B388FF; font-weight: 700;">1. Simplifying LHS:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">cos 4x</span><span class="den">sin 4x</span></span> [ 2 sin(<span class="frac"><span class="num">5x + 3x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">5x &minus; 3x</span><span class="den">2</span></span>) ]</div>
        <div>&rArr; = <span class="frac"><span class="num">cos 4x</span><span class="den">sin 4x</span></span> [ 2 sin 4<i>x</i> cos <i>x</i> ] = <b>2 cos 4<i>x</i> cos <i>x</i></b></div>

        <div style="margin-top: 10px; color: #B388FF; font-weight: 700;">2. Simplifying RHS:</div>
        <div>&rArr; RHS = <span class="frac"><span class="num">cos x</span><span class="den">sin x</span></span> [ 2 cos(<span class="frac"><span class="num">5x + 3x</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">5x &minus; 3x</span><span class="den">2</span></span>) ]</div>
        <div>&rArr; = <span class="frac"><span class="num">cos x</span><span class="den">sin x</span></span> [ 2 cos 4<i>x</i> sin <i>x</i> ] = <b>2 cos 4<i>x</i> cos <i>x</i></b></div>
        <div>&rArr; Since LHS = RHS = 2 cos 4<i>x</i> cos <i>x</i>, the identity is proved.</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 2 cos 4x cos x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 16 -->
  <div class="q-card">
    <div class="q-title">Question 16</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">cos 9<i>x</i> &minus; cos 5<i>x</i></span><span class="den">sin 17<i>x</i> &minus; sin 3<i>x</i></span></span> = &minus;<span class="frac"><span class="num">sin 2<i>x</i></span><span class="den">cos 10<i>x</i></span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Applying CD formulas:</div>
        <div>• Numerator: cos 9<i>x</i> &minus; cos 5<i>x</i> = &minus;2 sin(<span class="frac"><span class="num">14x</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">4x</span><span class="den">2</span></span>) = &minus;2 sin 7<i>x</i> sin 2<i>x</i></div>
        <div>• Denominator: sin 17<i>x</i> &minus; sin 3<i>x</i> = 2 cos(<span class="frac"><span class="num">20x</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">14x</span><span class="den">2</span></span>) = 2 cos 10<i>x</i> sin 7<i>x</i></div>
        <div style="margin-top: 8px;">Dividing:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">&minus;2 sin 7x sin 2x</span><span class="den">2 cos 10x sin 7x</span></span> = <b>&minus;<span class="frac"><span class="num">sin 2<i>x</i></span><span class="den">cos 10<i>x</i></span></span></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = −sin 2x / cos 10x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 17 -->
  <div class="q-card">
    <div class="q-title">Question 17</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">sin 5<i>x</i> + sin 3<i>x</i></span><span class="den">cos 5<i>x</i> + cos 3<i>x</i></span></span> = tan 4<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using CD formulas:</div>
        <div>• Numerator = 2 sin(<span class="frac"><span class="num">5x + 3x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">5x &minus; 3x</span><span class="den">2</span></span>) = 2 sin 4<i>x</i> cos <i>x</i></div>
        <div>• Denominator = 2 cos(<span class="frac"><span class="num">5x + 3x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">5x &minus; 3x</span><span class="den">2</span></span>) = 2 cos 4<i>x</i> cos <i>x</i></div>
        <div style="margin-top: 8px;">Dividing:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">2 sin 4x cos x</span><span class="den">2 cos 4x cos x</span></span> = <span class="frac"><span class="num">sin 4x</span><span class="den">cos 4x</span></span> = <b>tan 4<i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = tan 4x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 18 -->
  <div class="q-card">
    <div class="q-title">Question 18</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">sin <i>x</i> &minus; sin <i>y</i></span><span class="den">cos <i>x</i> + cos <i>y</i></span></span> = tan(<span class="frac"><span class="num"><i>x</i> &minus; <i>y</i></span><span class="den">2</span></span>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using CD formulas:</div>
        <div>• sin <i>x</i> &minus; sin <i>y</i> = 2 cos(<span class="frac"><span class="num">x + y</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">x &minus; y</span><span class="den">2</span></span>)</div>
        <div>• cos <i>x</i> + cos <i>y</i> = 2 cos(<span class="frac"><span class="num">x + y</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">x &minus; y</span><span class="den">2</span></span>)</div>
        <div style="margin-top: 8px;">Dividing:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">2 cos((x+y)/2) sin((x&minus;y)/2)</span><span class="den">2 cos((x+y)/2) cos((x&minus;y)/2)</span></span> = <span class="frac"><span class="num">sin((x&minus;y)/2)</span><span class="den">cos((x&minus;y)/2)</span></span> = <b>tan(<span class="frac"><span class="num"><i>x</i> &minus; <i>y</i></span><span class="den">2</span></span>)</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = tan((x − y)/2)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 19 -->
  <div class="q-card">
    <div class="q-title">Question 19</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">sin <i>x</i> + sin 3<i>x</i></span><span class="den">cos <i>x</i> + cos 3<i>x</i></span></span> = tan 2<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using CD formulas:</div>
        <div>• sin 3<i>x</i> + sin <i>x</i> = 2 sin(<span class="frac"><span class="num">3x + x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">3x &minus; x</span><span class="den">2</span></span>) = 2 sin 2<i>x</i> cos <i>x</i></div>
        <div>• cos 3<i>x</i> + cos <i>x</i> = 2 cos(<span class="frac"><span class="num">3x + x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">3x &minus; x</span><span class="den">2</span></span>) = 2 cos 2<i>x</i> cos <i>x</i></div>
        <div style="margin-top: 8px;">Dividing:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">2 sin 2x cos x</span><span class="den">2 cos 2x cos x</span></span> = <span class="frac"><span class="num">sin 2x</span><span class="den">cos 2x</span></span> = <b>tan 2<i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = tan 2x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 20 -->
  <div class="q-card">
    <div class="q-title">Question 20</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">sin <i>x</i> &minus; sin 3<i>x</i></span><span class="den">sin<sup>2</sup> <i>x</i> &minus; cos<sup>2</sup> <i>x</i></span></span> = 2 sin <i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>• Numerator: sin <i>x</i> &minus; sin 3<i>x</i> = 2 cos(<span class="frac"><span class="num">x + 3x</span><span class="den">2</span></span>) sin(<span class="frac"><span class="num">x &minus; 3x</span><span class="den">2</span></span>) = 2 cos 2<i>x</i> sin(&minus;<i>x</i>) = &minus;2 cos 2<i>x</i> sin <i>x</i></div>
        <div>• Denominator: sin<sup>2</sup> <i>x</i> &minus; cos<sup>2</sup> <i>x</i> = &minus;(cos<sup>2</sup> <i>x</i> &minus; sin<sup>2</sup> <i>x</i>) = &minus;cos 2<i>x</i></div>
        <div style="margin-top: 8px;">Dividing numerator by denominator:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">&minus;2 cos 2x sin x</span><span class="den">&minus;cos 2x</span></span> = <b>2 sin <i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 2 sin x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 21 -->
  <div class="q-card">
    <div class="q-title">Question 21</div>
    <div class="q-text">
      Prove that: <b><span class="frac"><span class="num">cos 4<i>x</i> + cos 3<i>x</i> + cos 2<i>x</i></span><span class="den">sin 4<i>x</i> + sin 3<i>x</i> + sin 2<i>x</i></span></span> = cot 3<i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Group terms with symmetric angles (4<i>x</i> and 2<i>x</i>):</div>
        <div>• Numerator = (cos 4<i>x</i> + cos 2<i>x</i>) + cos 3<i>x</i></div>
        <div>&nbsp;&nbsp;= 2 cos(<span class="frac"><span class="num">4x + 2x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">4x &minus; 2x</span><span class="den">2</span></span>) + cos 3<i>x</i></div>
        <div>&nbsp;&nbsp;= 2 cos 3<i>x</i> cos <i>x</i> + cos 3<i>x</i> = cos 3<i>x</i> (2 cos <i>x</i> + 1)</div>
        <div style="margin-top: 8px;">• Denominator = (sin 4<i>x</i> + sin 2<i>x</i>) + sin 3<i>x</i></div>
        <div>&nbsp;&nbsp;= 2 sin(<span class="frac"><span class="num">4x + 2x</span><span class="den">2</span></span>) cos(<span class="frac"><span class="num">4x &minus; 2x</span><span class="den">2</span></span>) + sin 3<i>x</i></div>
        <div>&nbsp;&nbsp;= 2 sin 3<i>x</i> cos <i>x</i> + sin 3<i>x</i> = sin 3<i>x</i> (2 cos <i>x</i> + 1)</div>
        <div style="margin-top: 8px;">Dividing:</div>
        <div>&rArr; LHS = <span class="frac"><span class="num">cos 3x (2 cos x + 1)</span><span class="den">sin 3x (2 cos x + 1)</span></span> = <span class="frac"><span class="num">cos 3x</span><span class="den">sin 3x</span></span> = <b>cot 3<i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = cot 3x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 22 -->
  <div class="q-card">
    <div class="q-title">Question 22</div>
    <div class="q-text">
      Prove that: <b>cot <i>x</i> cot 2<i>x</i> &minus; cot 2<i>x</i> cot 3<i>x</i> &minus; cot 3<i>x</i> cot <i>x</i> = 1</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Notice that 3<i>x</i> = 2<i>x</i> + <i>x</i>.</div>
        <div>Taking cot on both sides:</div>
        <div>&rArr; cot 3<i>x</i> = cot(2<i>x</i> + <i>x</i>)</div>
        <div>Using formula: <b>cot(A + B) = <span class="frac"><span class="num">cot A cot B &minus; 1</span><span class="den">cot B + cot A</span></span></b></div>
        <div>&rArr; cot 3<i>x</i> = <span class="frac"><span class="num">cot 2x cot x &minus; 1</span><span class="den">cot x + cot 2x</span></span></div>
        <div style="margin-top: 8px;">Cross-multiplying:</div>
        <div>&rArr; cot 3<i>x</i> (cot <i>x</i> + cot 2<i>x</i>) = cot 2<i>x</i> cot <i>x</i> &minus; 1</div>
        <div>&rArr; cot 3<i>x</i> cot <i>x</i> + cot 3<i>x</i> cot 2<i>x</i> = cot <i>x</i> cot 2<i>x</i> &minus; 1</div>
        <div>Transposing terms:</div>
        <div>&rArr; <b>cot <i>x</i> cot 2<i>x</i> &minus; cot 2<i>x</i> cot 3<i>x</i> &minus; cot 3<i>x</i> cot <i>x</i> = 1</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. Result = 1</span></div>
      </div>
    </div>
  </div>

  <!-- Question 23 -->
  <div class="q-card">
    <div class="q-title">Question 23</div>
    <div class="q-text">
      Prove that: <b>tan 4<i>x</i> = <span class="frac"><span class="num">4 tan <i>x</i> (1 &minus; tan<sup>2</sup> <i>x</i>)</span><span class="den">1 &minus; 6 tan<sup>2</sup> <i>x</i> + tan<sup>4</sup> <i>x</i></span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>LHS = tan 4<i>x</i> = tan 2(2<i>x</i>).</div>
        <div>Using formula: <b>tan 2A = <span class="frac"><span class="num">2 tan A</span><span class="den">1 &minus; tan<sup>2</sup> A</span></span></b> (with A = 2<i>x</i>):</div>
        <div>&rArr; tan 4<i>x</i> = <span class="frac"><span class="num">2 tan 2x</span><span class="den">1 &minus; tan<sup>2</sup> 2x</span></span></div>
        <div style="margin-top: 8px;">Now substitute tan 2<i>x</i> = <span class="frac"><span class="num">2 tan x</span><span class="den">1 &minus; tan<sup>2</sup> x</span></span>:</div>
        <div>&rArr; Numerator = 2 &times; <span class="frac"><span class="num">2 tan x</span><span class="den">1 &minus; tan<sup>2</sup> x</span></span> = <span class="frac"><span class="num">4 tan x</span><span class="den">1 &minus; tan<sup>2</sup> x</span></span></div>
        <div>&rArr; Denominator = 1 &minus; (<span class="frac"><span class="num">2 tan x</span><span class="den">1 &minus; tan<sup>2</sup> x</span></span>)<sup>2</sup> = 1 &minus; <span class="frac"><span class="num">4 tan<sup>2</sup> x</span><span class="den">(1 &minus; tan<sup>2</sup> x)<sup>2</sup></span></span> = <span class="frac"><span class="num">(1 &minus; tan<sup>2</sup> x)<sup>2</sup> &minus; 4 tan<sup>2</sup> x</span><span class="den">(1 &minus; tan<sup>2</sup> x)<sup>2</sup></span></span></div>
        <div style="margin-top: 8px;">Dividing:</div>
        <div>&rArr; tan 4<i>x</i> = <span class="frac"><span class="num">4 tan x</span><span class="den">1 &minus; tan<sup>2</sup> x</span></span> &times; <span class="frac"><span class="num">(1 &minus; tan<sup>2</sup> x)<sup>2</sup></span><span class="den">(1 &minus; 2 tan<sup>2</sup> x + tan<sup>4</sup> x) &minus; 4 tan<sup>2</sup> x</span></span></div>
        <div>&rArr; = <b><span class="frac"><span class="num">4 tan <i>x</i> (1 &minus; tan<sup>2</sup> <i>x</i>)</span><span class="den">1 &minus; 6 tan<sup>2</sup> <i>x</i> + tan<sup>4</sup> <i>x</i></span></span></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS</span></div>
      </div>
    </div>
  </div>

  <!-- Question 24 -->
  <div class="q-card">
    <div class="q-title">Question 24</div>
    <div class="q-text">
      Prove that: <b>cos 4<i>x</i> = 1 &minus; 8 sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>LHS = cos 4<i>x</i> = cos 2(2<i>x</i>).</div>
        <div>Using formula: <b>cos 2A = 1 &minus; 2 sin<sup>2</sup> A</b> (with A = 2<i>x</i>):</div>
        <div>&rArr; cos 4<i>x</i> = 1 &minus; 2 sin<sup>2</sup> 2<i>x</i></div>
        <div style="margin-top: 8px;">Using sin 2<i>x</i> = 2 sin <i>x</i> cos <i>x</i>:</div>
        <div>&rArr; = 1 &minus; 2 (2 sin <i>x</i> cos <i>x</i>)<sup>2</sup></div>
        <div>&rArr; = 1 &minus; 2 (4 sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i>)</div>
        <div>&rArr; = <b>1 &minus; 8 sin<sup>2</sup> <i>x</i> cos<sup>2</sup> <i>x</i></b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS = 1 − 8 sin² x cos² x</span></div>
      </div>
    </div>
  </div>

  <!-- Question 25 -->
  <div class="q-card">
    <div class="q-title">Question 25</div>
    <div class="q-text">
      Prove that: <b>cos 6<i>x</i> = 32 cos<sup>6</sup> <i>x</i> &minus; 48 cos<sup>4</sup> <i>x</i> + 18 cos<sup>2</sup> <i>x</i> &minus; 1</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>LHS = cos 6<i>x</i> = cos 3(2<i>x</i>).</div>
        <div>Using triple-angle identity: <b>cos 3A = 4 cos<sup>3</sup> A &minus; 3 cos A</b> (with A = 2<i>x</i>):</div>
        <div>&rArr; cos 6<i>x</i> = 4 cos<sup>3</sup> 2<i>x</i> &minus; 3 cos 2<i>x</i></div>
        <div style="margin-top: 8px;">Now substitute cos 2<i>x</i> = 2 cos<sup>2</sup> <i>x</i> &minus; 1:</div>
        <div>&rArr; = 4 (2 cos<sup>2</sup> <i>x</i> &minus; 1)<sup>3</sup> &minus; 3 (2 cos<sup>2</sup> <i>x</i> &minus; 1)</div>
        <div style="margin-top: 6px;">Expanding the cubic (<i>u</i> &minus; 1)<sup>3</sup> = <i>u</i><sup>3</sup> &minus; 3<i>u</i><sup>2</sup> + 3<i>u</i> &minus; 1 where <i>u</i> = 2 cos<sup>2</sup> <i>x</i>:</div>
        <div>• (2 cos<sup>2</sup> <i>x</i> &minus; 1)<sup>3</sup> = 8 cos<sup>6</sup> <i>x</i> &minus; 3(4 cos<sup>4</sup> <i>x</i>) + 3(2 cos<sup>2</sup> <i>x</i>) &minus; 1 = 8 cos<sup>6</sup> <i>x</i> &minus; 12 cos<sup>4</sup> <i>x</i> + 6 cos<sup>2</sup> <i>x</i> &minus; 1</div>
        <div style="margin-top: 8px;">Multiplying by 4 and subtracting the remaining linear term:</div>
        <div>&rArr; LHS = 4 [ 8 cos<sup>6</sup> <i>x</i> &minus; 12 cos<sup>4</sup> <i>x</i> + 6 cos<sup>2</sup> <i>x</i> &minus; 1 ] &minus; 3 [ 2 cos<sup>2</sup> <i>x</i> &minus; 1 ]</div>
        <div>&rArr; = 32 cos<sup>6</sup> <i>x</i> &minus; 48 cos<sup>4</sup> <i>x</i> + 24 cos<sup>2</sup> <i>x</i> &minus; 4 &minus; 6 cos<sup>2</sup> <i>x</i> + 3</div>
        <div>&rArr; = <b>32 cos<sup>6</sup> <i>x</i> &minus; 48 cos<sup>4</sup> <i>x</i> + 18 cos<sup>2</sup> <i>x</i> &minus; 1</b> = RHS</div>
        <div class="ans-box"><span class="ans-label">✓ Result: </span><span class="ans-val">Hence Proved. LHS = RHS</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise3_3
};
