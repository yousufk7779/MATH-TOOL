const { styleBlock, themeColor } = require('./ch4_common');

function getExercise4_3() {
  return `${styleBlock}
<div style="padding: 4px 2px;">

  <!-- Header Banner -->
  <div style="background: linear-gradient(135deg, rgba(255, 145, 0, 0.2), rgba(0,0,0,0.35)); border: 1.5px solid #FF9100; border-radius: 12px; padding: 14px; margin-bottom: 22px; text-align: center;">
    <div style="font-size: 20px; font-weight: 800; color: #FF9100;">
      📘 Exercise 4.3 &bull; Quadratic Equations with Complex Roots (D &lt; 0)
    </div>
    <div style="color: #CBD5E1; font-size: 14px; margin-top: 4px;">
      NCERT Class 11 Mathematics &bull; Complete Verbatim Solutions
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Solve the equation: <b><i>x</i><sup>2</sup> + 3 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Comparing with standard form <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0:</div>
        <div>&rArr; <i>a</i> = 1, &nbsp; <i>b</i> = 0, &nbsp; <i>c</i> = 3</div>
        <div style="margin-top: 6px;">Discriminant:</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 0<sup>2</sup> &minus; 4(1)(3) = &minus;12 &lt; 0</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;<i>b</i> &plusmn; &radic;D</span><span class="den">2<i>a</i></span></span> = <span class="frac"><span class="num">&plusmn; &radic;(&minus;12)</span><span class="den">2(1)</span></span> = <span class="frac"><span class="num">&plusmn; 2<i>i</i>&radic;3</span><span class="den">2</span></span> = <b>&plusmn; <i>i</i>&radic;3</b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = ± i√3</span></div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Solve the equation: <b>2<i>x</i><sup>2</sup> + <i>x</i> + 1 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = 2, &nbsp; <i>b</i> = 1, &nbsp; <i>c</i> = 1.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 1<sup>2</sup> &minus; 4(2)(1) = 1 &minus; 8 = &minus;7 &lt; 0</div>
        <div style="margin-top: 6px;">Using quadratic formula:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;<i>b</i> &plusmn; &radic;D</span><span class="den">2<i>a</i></span></span> = <span class="frac"><span class="num">&minus;1 &plusmn; &radic;(&minus;7)</span><span class="den">2(2)</span></span> = <b><span class="frac"><span class="num">&minus;1 &plusmn; <i>i</i>&radic;7</span><span class="den">4</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">−1 ± i√7</span><span class="den">4</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Solve the equation: <b><i>x</i><sup>2</sup> + 3<i>x</i> + 9 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = 1, &nbsp; <i>b</i> = 3, &nbsp; <i>c</i> = 9.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 3<sup>2</sup> &minus; 4(1)(9) = 9 &minus; 36 = &minus;27 &lt; 0</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;3 &plusmn; &radic;(&minus;27)</span><span class="den">2(1)</span></span> = <span class="frac"><span class="num">&minus;3 &plusmn; 3<i>i</i>&radic;3</span><span class="den">2</span></span> = <b>&minus;<span class="frac"><span class="num">3</span><span class="den">2</span></span> &plusmn; <span class="frac"><span class="num">3&radic;3</span><span class="den">2</span></span><i>i</i></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">−3 ± 3i√3</span><span class="den">2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Solve the equation: <b>&minus;<i>x</i><sup>2</sup> + <i>x</i> &minus; 2 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = &minus;1, &nbsp; <i>b</i> = 1, &nbsp; <i>c</i> = &minus;2.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 1<sup>2</sup> &minus; 4(&minus;1)(&minus;2) = 1 &minus; 8 = &minus;7 &lt; 0</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;1 &plusmn; &radic;(&minus;7)</span><span class="den">2(&minus;1)</span></span> = <span class="frac"><span class="num">&minus;1 &plusmn; <i>i</i>&radic;7</span><span class="den">&minus;2</span></span> = <b><span class="frac"><span class="num">1 &plusmn; <i>i</i>&radic;7</span><span class="den">2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">1 ± i√7</span><span class="den">2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Solve the equation: <b><i>x</i><sup>2</sup> + 3<i>x</i> + 5 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = 1, &nbsp; <i>b</i> = 3, &nbsp; <i>c</i> = 5.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 3<sup>2</sup> &minus; 4(1)(5) = 9 &minus; 20 = &minus;11 &lt; 0</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;3 &plusmn; &radic;(&minus;11)</span><span class="den">2(1)</span></span> = <b><span class="frac"><span class="num">&minus;3 &plusmn; <i>i</i>&radic;11</span><span class="den">2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">−3 ± i√11</span><span class="den">2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Solve the equation: <b><i>x</i><sup>2</sup> &minus; <i>x</i> + 2 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = 1, &nbsp; <i>b</i> = &minus;1, &nbsp; <i>c</i> = 2.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = (&minus;1)<sup>2</sup> &minus; 4(1)(2) = 1 &minus; 8 = &minus;7 &lt; 0</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;(&minus;1) &plusmn; &radic;(&minus;7)</span><span class="den">2(1)</span></span> = <b><span class="frac"><span class="num">1 &plusmn; <i>i</i>&radic;7</span><span class="den">2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">1 ± i√7</span><span class="den">2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Solve the equation: <b>&radic;2<i>x</i><sup>2</sup> + <i>x</i> + &radic;2 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = &radic;2, &nbsp; <i>b</i> = 1, &nbsp; <i>c</i> = &radic;2.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 1<sup>2</sup> &minus; 4(&radic;2)(&radic;2) = 1 &minus; 8 = &minus;7 &lt; 0</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;1 &plusmn; &radic;(&minus;7)</span><span class="den">2(&radic;2)</span></span> = <b><span class="frac"><span class="num">&minus;1 &plusmn; <i>i</i>&radic;7</span><span class="den">2&radic;2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">−1 ± i√7</span><span class="den">2√2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Solve the equation: <b>&radic;3<i>x</i><sup>2</sup> &minus; &radic;2<i>x</i> + 3&radic;3 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here <i>a</i> = &radic;3, &nbsp; <i>b</i> = &minus;&radic;2, &nbsp; <i>c</i> = 3&radic;3.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = (&minus;&radic;2)<sup>2</sup> &minus; 4(&radic;3)(3&radic;3) = 2 &minus; 36 = &minus;34 &lt; 0</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;(&minus;&radic;2) &plusmn; &radic;(&minus;34)</span><span class="den">2(&radic;3)</span></span> = <b><span class="frac"><span class="num">&radic;2 &plusmn; <i>i</i>&radic;34</span><span class="den">2&radic;3</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">√2 ± i√34</span><span class="den">2√3</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      Solve the equation: <b><i>x</i><sup>2</sup> + <i>x</i> + <span class="frac"><span class="num">1</span><span class="den">&radic;2</span></span> = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Multiplying entire equation by &radic;2 to clear fraction:</div>
        <div>&rArr; &radic;2<i>x</i><sup>2</sup> + &radic;2<i>x</i> + 1 = 0</div>
        <div>Here <i>a</i> = &radic;2, &nbsp; <i>b</i> = &radic;2, &nbsp; <i>c</i> = 1.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = (&radic;2)<sup>2</sup> &minus; 4(&radic;2)(1) = 2 &minus; 4&radic;2 = 2(1 &minus; 2&radic;2) &lt; 0</div>
        <div>&rArr; &radic;D = &radic;[ &minus;2(2&radic;2 &minus; 1) ] = <i>i</i>&radic;[ 2(2&radic;2 &minus; 1) ]</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;&radic;2 &plusmn; <i>i</i>&radic;2 &radic;(2&radic;2 &minus; 1)</span><span class="den">2&radic;2</span></span> = <b><span class="frac"><span class="num">&minus;1 &plusmn; <i>i</i>&radic;(2&radic;2 &minus; 1)</span><span class="den">2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">−1 ± i√(2√2 − 1)</span><span class="den">2</span></span></span></div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      Solve the equation: <b><i>x</i><sup>2</sup> + <span class="frac"><span class="num"><i>x</i></span><span class="den">&radic;2</span></span> + 1 = 0</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Multiplying entire equation by &radic;2:</div>
        <div>&rArr; &radic;2<i>x</i><sup>2</sup> + <i>x</i> + &radic;2 = 0</div>
        <div>Here <i>a</i> = &radic;2, &nbsp; <i>b</i> = 1, &nbsp; <i>c</i> = &radic;2.</div>
        <div>&rArr; D = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 1<sup>2</sup> &minus; 4(&radic;2)(&radic;2) = 1 &minus; 8 = &minus;7 &lt; 0</div>
        <div style="margin-top: 6px;">Roots:</div>
        <div>&rArr; <i>x</i> = <span class="frac"><span class="num">&minus;1 &plusmn; &radic;(&minus;7)</span><span class="den">2&radic;2</span></span> = <b><span class="frac"><span class="num">&minus;1 &plusmn; <i>i</i>&radic;7</span><span class="den">2&radic;2</span></span></b></div>
        <div class="ans-box"><span class="ans-label">✓ Answer: </span><span class="ans-val">x = <span class="frac"><span class="num">−1 ± i√7</span><span class="den">2√2</span></span></span></div>
      </div>
    </div>
  </div>

</div>
`;
}

module.exports = {
  getExercise4_3
};
