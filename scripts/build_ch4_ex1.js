const { styleBlock, themeColor } = require('./ch4_common');

function getExercise4_1() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF9100; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF9100;">
      📘 Exercise 4.1 &bull; Algebra of Complex Numbers &amp; Standard Form (a + ib)
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b>(5<i>i</i>)(&minus;<span class="frac"><span class="num">3</span><span class="den">5</span></span><i>i</i>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: (5<i>i</i>)(&minus;<span class="frac"><span class="num">3</span><span class="den">5</span></span><i>i</i>)</div>
        <div>&rArr; = 5 &times; (&minus;<span class="frac"><span class="num">3</span><span class="den">5</span></span>) &times; <i>i</i><sup>2</sup></div>
        <div>&rArr; = &minus;3 &times; (&minus;1) <span class="reason">[since <i>i</i><sup>2</sup> = &minus;1]</span></div>
        <div>&rArr; = 3 = <b>3 + 0<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">3 + 0i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b><i>i</i><sup>9</sup> + <i>i</i><sup>19</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expressing powers of <i>i</i> in terms of <i>i</i><sup>4</sup> = 1:</div>
        <div>• <i>i</i><sup>9</sup> = (<i>i</i><sup>4</sup>)<sup>2</sup> &times; <i>i</i> = (1)<sup>2</sup> &times; <i>i</i> = <i>i</i></div>
        <div>• <i>i</i><sup>19</sup> = (<i>i</i><sup>4</sup>)<sup>4</sup> &times; <i>i</i><sup>3</sup> = (1)<sup>4</sup> &times; (&minus;<i>i</i>) = &minus;<i>i</i></div>
        <div style="margin-top: 6px;">Adding both expressions:</div>
        <div>&rArr; <i>i</i><sup>9</sup> + <i>i</i><sup>19</sup> = <i>i</i> + (&minus;<i>i</i>) = 0 = <b>0 + 0<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">0 + 0i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b><i>i</i><sup>&minus;39</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Given: <i>i</i><sup>&minus;39</sup> = <span class="frac"><span class="num">1</span><span class="den"><i>i</i><sup>39</sup></span></span></div>
        <div>&rArr; <i>i</i><sup>39</sup> = (<i>i</i><sup>4</sup>)<sup>9</sup> &times; <i>i</i><sup>3</sup> = (1)<sup>9</sup> &times; (&minus;<i>i</i>) = &minus;<i>i</i></div>
        <div>&rArr; <i>i</i><sup>&minus;39</sup> = <span class="frac"><span class="num">1</span><span class="den">&minus;<i>i</i></span></span></div>
        <div style="margin-top: 6px;">Multiplying numerator and denominator by <i>i</i>:</div>
        <div>&rArr; = <span class="frac"><span class="num"><i>i</i></span><span class="den">&minus;<i>i</i><sup>2</sup></span></span> = <span class="frac"><span class="num"><i>i</i></span><span class="den">&minus;(&minus;1)</span></span> = <span class="frac"><span class="num"><i>i</i></span><span class="den">1</span></span> = <i>i</i> = <b>0 + 1<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">0 + 1i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b>3(7 + 7<i>i</i>) + <i>i</i>(7 + 7<i>i</i>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expanding the terms:</div>
        <div>&rArr; = 21 + 21<i>i</i> + 7<i>i</i> + 7<i>i</i><sup>2</sup></div>
        <div>&rArr; = 21 + 28<i>i</i> + 7(&minus;1) <span class="reason">[since <i>i</i><sup>2</sup> = &minus;1]</span></div>
        <div>&rArr; = (21 &minus; 7) + 28<i>i</i> = <b>14 + 28<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">14 + 28i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b>(1 &minus; <i>i</i>) &minus; (&minus;1 + 6<i>i</i>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Removing brackets:</div>
        <div>&rArr; = 1 &minus; <i>i</i> + 1 &minus; 6<i>i</i></div>
        <div>Grouping real and imaginary parts:</div>
        <div>&rArr; = (1 + 1) + <i>i</i>(&minus;1 &minus; 6) = <b>2 &minus; 7<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">2 − 7i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b>(<span class="frac"><span class="num">1</span><span class="den">5</span></span> + <span class="frac"><span class="num">2</span><span class="den">5</span></span><i>i</i>) &minus; (4 + <span class="frac"><span class="num">5</span><span class="den">2</span></span><i>i</i>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Grouping real and imaginary parts:</div>
        <div>&rArr; Real part = <span class="frac"><span class="num">1</span><span class="den">5</span></span> &minus; 4 = <span class="frac"><span class="num">1 &minus; 20</span><span class="den">5</span></span> = &minus;<span class="frac"><span class="num">19</span><span class="den">5</span></span></div>
        <div>&rArr; Imaginary part = <span class="frac"><span class="num">2</span><span class="den">5</span></span> &minus; <span class="frac"><span class="num">5</span><span class="den">2</span></span> = <span class="frac"><span class="num">4 &minus; 25</span><span class="den">10</span></span> = &minus;<span class="frac"><span class="num">21</span><span class="den">10</span></span></div>
        <div style="margin-top: 6px;">Combining into <i>a</i> + <i>ib</i>:</div>
        <div>&rArr; = <b>&minus;<span class="frac"><span class="num">19</span><span class="den">5</span></span> &minus; <span class="frac"><span class="num">21</span><span class="den">10</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">−<span class="frac"><span class="num">19</span><span class="den">5</span></span> − <span class="frac"><span class="num">21</span><span class="den">10</span></span>i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b>[ (<span class="frac"><span class="num">1</span><span class="den">3</span></span> + <span class="frac"><span class="num">7</span><span class="den">3</span></span><i>i</i>) + (4 + <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>) ] &minus; (&minus;<span class="frac"><span class="num">4</span><span class="den">3</span></span> + <i>i</i>)</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Grouping all real parts together:</div>
        <div>&rArr; Real part = <span class="frac"><span class="num">1</span><span class="den">3</span></span> + 4 &minus; (&minus;<span class="frac"><span class="num">4</span><span class="den">3</span></span>) = <span class="frac"><span class="num">1</span><span class="den">3</span></span> + 4 + <span class="frac"><span class="num">4</span><span class="den">3</span></span> = <span class="frac"><span class="num">5</span><span class="den">3</span></span> + 4 = <span class="frac"><span class="num">5 + 12</span><span class="den">3</span></span> = <span class="frac"><span class="num">17</span><span class="den">3</span></span></div>
        <div style="margin-top: 6px;">Grouping all imaginary parts together:</div>
        <div>&rArr; Imaginary part = <span class="frac"><span class="num">7</span><span class="den">3</span></span> + <span class="frac"><span class="num">1</span><span class="den">3</span></span> &minus; 1 = <span class="frac"><span class="num">8</span><span class="den">3</span></span> &minus; 1 = <span class="frac"><span class="num">8 &minus; 3</span><span class="den">3</span></span> = <span class="frac"><span class="num">5</span><span class="den">3</span></span></div>
        <div style="margin-top: 6px;">Result in <i>a</i> + <i>ib</i> form:</div>
        <div>&rArr; = <b><span class="frac"><span class="num">17</span><span class="den">3</span></span> + <span class="frac"><span class="num">5</span><span class="den">3</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">17</span><span class="den">3</span></span> + <span class="frac"><span class="num">5</span><span class="den">3</span></span>i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b>(1 &minus; <i>i</i>)<sup>4</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Expressing as square of square:</div>
        <div>&rArr; (1 &minus; <i>i</i>)<sup>4</sup> = [ (1 &minus; <i>i</i>)<sup>2</sup> ]<sup>2</sup></div>
        <div>• (1 &minus; <i>i</i>)<sup>2</sup> = 1 &minus; 2<i>i</i> + <i>i</i><sup>2</sup> = 1 &minus; 2<i>i</i> &minus; 1 = &minus;2<i>i</i></div>
        <div style="margin-top: 6px;">Squaring again:</div>
        <div>&rArr; [ &minus;2<i>i</i> ]<sup>2</sup> = 4<i>i</i><sup>2</sup> = 4(&minus;1) = &minus;4</div>
        <div>&rArr; In <i>a</i> + <i>ib</i> form: <b>&minus;4 + 0<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">−4 + 0i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b>(<span class="frac"><span class="num">1</span><span class="den">3</span></span> + 3<i>i</i>)<sup>3</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Using identity (A + B)<sup>3</sup> = A<sup>3</sup> + B<sup>3</sup> + 3AB(A + B):</div>
        <div>• A = <span class="frac"><span class="num">1</span><span class="den">3</span></span>, &nbsp; B = 3<i>i</i></div>
        <div>&rArr; A<sup>3</sup> = (<span class="frac"><span class="num">1</span><span class="den">3</span></span>)<sup>3</sup> = <span class="frac"><span class="num">1</span><span class="den">27</span></span></div>
        <div>&rArr; B<sup>3</sup> = (3<i>i</i>)<sup>3</sup> = 27<i>i</i><sup>3</sup> = 27(&minus;<i>i</i>) = &minus;27<i>i</i></div>
        <div>&rArr; 3AB(A + B) = 3 &times; <span class="frac"><span class="num">1</span><span class="den">3</span></span> &times; (3<i>i</i>)(<span class="frac"><span class="num">1</span><span class="den">3</span></span> + 3<i>i</i>) = 3<i>i</i>(<span class="frac"><span class="num">1</span><span class="den">3</span></span> + 3<i>i</i>) = <i>i</i> + 9<i>i</i><sup>2</sup> = <i>i</i> &minus; 9</div>
        <div style="margin-top: 8px;">Combining all terms:</div>
        <div>&rArr; = (<span class="frac"><span class="num">1</span><span class="den">27</span></span> &minus; 9) + <i>i</i>(&minus;27 + 1)</div>
        <div>&rArr; = <span class="frac"><span class="num">1 &minus; 243</span><span class="den">27</span></span> &minus; 26<i>i</i> = <b>&minus;<span class="frac"><span class="num">242</span><span class="den">27</span></span> &minus; 26<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">−<span class="frac"><span class="num">242</span><span class="den">27</span></span> − 26i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Express in the form <i>a</i> + <i>ib</i>: &nbsp; <b>(&minus;2 &minus; <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>)<sup>3</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Factoring out (&minus;1)<sup>3</sup>:</div>
        <div>&rArr; [ &minus;(2 + <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>) ]<sup>3</sup> = &minus;(2 + <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>)<sup>3</sup></div>
        <div style="margin-top: 6px;">Expanding (2 + <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>)<sup>3</sup> using binomial theorem:</div>
        <div>• 2<sup>3</sup> = 8</div>
        <div>• (<span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>)<sup>3</sup> = <span class="frac"><span class="num"><i>i</i><sup>3</sup></span><span class="den">27</span></span> = &minus;<span class="frac"><span class="num"><i>i</i></span><span class="den">27</span></span></div>
        <div>• 3(2)(<span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>)(2 + <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>) = 2<i>i</i>(2 + <span class="frac"><span class="num">1</span><span class="den">3</span></span><i>i</i>) = 4<i>i</i> + <span class="frac"><span class="num">2</span><span class="den">3</span></span><i>i</i><sup>2</sup> = 4<i>i</i> &minus; <span class="frac"><span class="num">2</span><span class="den">3</span></span></div>
        <div style="margin-top: 8px;">Summing inside the bracket:</div>
        <div>&rArr; (8 &minus; <span class="frac"><span class="num">2</span><span class="den">3</span></span>) + <i>i</i>(4 &minus; <span class="frac"><span class="num">1</span><span class="den">27</span></span>) = <span class="frac"><span class="num">22</span><span class="den">3</span></span> + <span class="frac"><span class="num">107</span><span class="den">27</span></span><i>i</i></div>
        <div style="margin-top: 6px;">Applying the leading negative sign:</div>
        <div>&rArr; = <b>&minus;<span class="frac"><span class="num">22</span><span class="den">3</span></span> &minus; <span class="frac"><span class="num">107</span><span class="den">27</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">−<span class="frac"><span class="num">22</span><span class="den">3</span></span> − <span class="frac"><span class="num">107</span><span class="den">27</span></span>i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      Find the multiplicative inverse of the complex number: <b>4 &minus; 3<i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = 4 &minus; 3<i>i</i>.</div>
        <div>The multiplicative inverse of <i>z</i> is given by: <b><i>z</i><sup>&minus;1</sup> = <span class="frac"><span class="num"><i>z&#772;</i></span><span class="den">|<i>z</i>|<sup>2</sup></span></span></b></div>
        <div style="margin-top: 6px;">Finding conjugate and modulus squared:</div>
        <div>• <i>z&#772;</i> = 4 + 3<i>i</i></div>
        <div>• |<i>z</i>|<sup>2</sup> = 4<sup>2</sup> + (&minus;3)<sup>2</sup> = 16 + 9 = 25</div>
        <div style="margin-top: 8px;">Substituting:</div>
        <div>&rArr; <i>z</i><sup>&minus;1</sup> = <span class="frac"><span class="num">4 + 3<i>i</i></span><span class="den">25</span></span> = <b><span class="frac"><span class="num">4</span><span class="den">25</span></span> + <span class="frac"><span class="num">3</span><span class="den">25</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">4</span><span class="den">25</span></span> + <span class="frac"><span class="num">3</span><span class="den">25</span></span>i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Find the multiplicative inverse of the complex number: <b>&radic;5 + 3<i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = &radic;5 + 3<i>i</i>.</div>
        <div>• <i>z&#772;</i> = &radic;5 &minus; 3<i>i</i></div>
        <div>• |<i>z</i>|<sup>2</sup> = (&radic;5)<sup>2</sup> + 3<sup>2</sup> = 5 + 9 = 14</div>
        <div style="margin-top: 8px;">Using <i>z</i><sup>&minus;1</sup> = <span class="frac"><span class="num"><i>z&#772;</i></span><span class="den">|<i>z</i>|<sup>2</sup></span></span>:</div>
        <div>&rArr; <i>z</i><sup>&minus;1</sup> = <span class="frac"><span class="num">&radic;5 &minus; 3<i>i</i></span><span class="den">14</span></span> = <b><span class="frac"><span class="num">&radic;5</span><span class="den">14</span></span> &minus; <span class="frac"><span class="num">3</span><span class="den">14</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val"><span class="frac"><span class="num">√5</span><span class="den">14</span></span> − <span class="frac"><span class="num">3</span><span class="den">14</span></span>i</span></div>
      </div>
    </div>
  </div>

  <!-- Question 13 -->
  <div class="q-card">
    <div class="q-title">Question 13</div>
    <div class="q-text">
      Find the multiplicative inverse of the complex number: <b>&minus;<i>i</i></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Let <i>z</i> = &minus;<i>i</i> = 0 &minus; <i>i</i>.</div>
        <div>• <i>z&#772;</i> = 0 + <i>i</i> = <i>i</i></div>
        <div>• |<i>z</i>|<sup>2</sup> = 0<sup>2</sup> + (&minus;1)<sup>2</sup> = 1</div>
        <div style="margin-top: 8px;">Using <i>z</i><sup>&minus;1</sup> = <span class="frac"><span class="num"><i>z&#772;</i></span><span class="den">|<i>z</i>|<sup>2</sup></span></span>:</div>
        <div>&rArr; <i>z</i><sup>&minus;1</sup> = <span class="frac"><span class="num"><i>i</i></span><span class="den">1</span></span> = <b><i>i</i> = 0 + 1<i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">i (or 0 + 1i)</span></div>
      </div>
    </div>
  </div>

  <!-- Question 14 -->
  <div class="q-card">
    <div class="q-title">Question 14</div>
    <div class="q-text">
      Express the following expression in the form <i>a</i> + <i>ib</i>:<br/>
      <b><span class="frac"><span class="num">(3 + <i>i</i>&radic;5)(3 &minus; <i>i</i>&radic;5)</span><span class="den">(&radic;3 + &radic;2<i>i</i>) &minus; (&radic;3 &minus; <i>i</i>&radic;2)</span></span></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div style="color: #FFB74D; font-weight: 700;">1. Simplifying Numerator:</div>
        <div>Using (A + B)(A &minus; B) = A<sup>2</sup> &minus; B<sup>2</sup>:</div>
        <div>&rArr; (3 + <i>i</i>&radic;5)(3 &minus; <i>i</i>&radic;5) = 3<sup>2</sup> &minus; (<i>i</i>&radic;5)<sup>2</sup> = 9 &minus; 5<i>i</i><sup>2</sup> = 9 &minus; 5(&minus;1) = 9 + 5 = <b>14</b></div>

        <div style="margin-top: 10px; color: #FFB74D; font-weight: 700;">2. Simplifying Denominator:</div>
        <div>&rArr; (&radic;3 + &radic;2<i>i</i>) &minus; (&radic;3 &minus; <i>i</i>&radic;2) = &radic;3 + &radic;2<i>i</i> &minus; &radic;3 + &radic;2<i>i</i> = <b>2&radic;2<i>i</i></b></div>

        <div style="margin-top: 10px; color: #FFB74D; font-weight: 700;">3. Dividing Numerator by Denominator:</div>
        <div>&rArr; Expression = <span class="frac"><span class="num">14</span><span class="den">2&radic;2<i>i</i></span></span> = <span class="frac"><span class="num">7</span><span class="den">&radic;2<i>i</i></span></span></div>
        <div>Multiplying numerator and denominator by <i>i</i>&radic;2:</div>
        <div>&rArr; = <span class="frac"><span class="num">7 &times; <i>i</i>&radic;2</span><span class="den">&radic;2<i>i</i> &times; <i>i</i>&radic;2</span></span> = <span class="frac"><span class="num">7&radic;2<i>i</i></span><span class="den">2<i>i</i><sup>2</sup></span></span> = <span class="frac"><span class="num">7&radic;2<i>i</i></span><span class="den">&minus;2</span></span> = &minus;<span class="frac"><span class="num">7&radic;2</span><span class="den">2</span></span><i>i</i></div>
        <div style="margin-top: 6px;">Writing in standard <i>a</i> + <i>ib</i> form:</div>
        <div>&rArr; = <b>0 &minus; <span class="frac"><span class="num">7&radic;2</span><span class="den">2</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">0 − <span class="frac"><span class="num">7√2</span><span class="den">2</span></span>i</span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise4_1
};
