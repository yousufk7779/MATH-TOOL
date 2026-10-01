const { themeColor, accentColor, styleBlock, frac } = require('./ch7_common');

function getExercise7_2() {
  return `${styleBlock}
<div style="padding: 4px 2px;">
  <!-- Exercise Banner -->
  <div style="background: linear-gradient(135deg, rgba(41, 121, 255, 0.18), rgba(0,0,0,0.3)); border: 1.5px solid ${themeColor}; border-radius: 12px; padding: 14px; margin-bottom: 20px; text-align: center;">
    <div style="font-size: 18px; font-weight: 800; color: ${themeColor};">
      📘 Binomial Theorem &bull; Exercise 7.2
    </div>
    <div style="color: #CBD5E1; font-size: 13.5px; margin-top: 4px;">
      General Term (T<sub><i>r</i>+1</sub>) &bull; Middle Terms &bull; Specific Coefficients &bull; Consecutive Ratio Equations
    </div>
  </div>

  <!-- Question 1 -->
  <div class="q-card">
    <div class="q-title">Question 1</div>
    <div class="q-text">
      Find the coefficient of <b><i>x</i><sup>5</sup></b> in the expansion of <b>(<i>x</i> + 3)<sup>8</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>The general term T<sub><i>r</i>+1</sub> in the expansion of (<i>a</i> + <i>b</i>)<sup><i>n</i></sup> is:</div>
        <div>T<sub><i>r</i>+1</sub> = <sup><i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>n</i>&minus;<i>r</i></sup> <i>b</i><sup><i>r</i></sup></div>
        <div>Here, <i>a</i> = <i>x</i>, <i>b</i> = 3, and <i>n</i> = 8:</div>
        <div>&rArr; T<sub><i>r</i>+1</sub> = <sup>8</sup>C<sub><i>r</i></sub> <i>x</i><sup>8&minus;<i>r</i></sup> (3)<sup><i>r</i></sup></div>
        <div>To find the term containing <i>x</i><sup>5</sup>, equate the exponent of <i>x</i>:</div>
        <div>8 &minus; <i>r</i> = 5 &rArr; <b><i>r</i> = 3</b></div>
        <div>Substituting <i>r</i> = 3:</div>
        <div>&rArr; T<sub>3+1</sub> = T<sub>4</sub> = <sup>8</sup>C<sub>3</sub> <i>x</i><sup>8&minus;3</sup> (3)<sup>3</sup></div>
        <div>&rArr; T<sub>4</sub> = ${frac('8 &times; 7 &times; 6', '3 &times; 2 &times; 1')} &times; <i>x</i><sup>5</sup> &times; 27 = 56 &times; 27 &times; <i>x</i><sup>5</sup> = <b>1512<i>x</i><sup>5</sup></b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">Coefficient of x<sup>5</sup> = 1512</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 2 -->
  <div class="q-card">
    <div class="q-title">Question 2</div>
    <div class="q-text">
      Find the coefficient of <b><i>a</i><sup>5</sup><i>b</i><sup>7</sup></b> in the expansion of <b>(<i>a</i> &minus; 2<i>b</i>)<sup>12</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the expansion of (<i>a</i> &minus; 2<i>b</i>)<sup>12</sup>, <i>n</i> = 12:</div>
        <div>General term:</div>
        <div>T<sub><i>r</i>+1</sub> = <sup>12</sup>C<sub><i>r</i></sub> <i>a</i><sup>12&minus;<i>r</i></sup> (&minus;2<i>b</i>)<sup><i>r</i></sup> = <sup>12</sup>C<sub><i>r</i></sub> (&minus;2)<sup><i>r</i></sup> <i>a</i><sup>12&minus;<i>r</i></sup> <i>b</i><sup><i>r</i></sup></div>
        <div>Comparing with <i>a</i><sup>5</sup><i>b</i><sup>7</sup>:</div>
        <div>12 &minus; <i>r</i> = 5 &nbsp;and&nbsp; <i>r</i> = 7 &rArr; <b><i>r</i> = 7</b></div>
        <div>Substituting <i>r</i> = 7:</div>
        <div>&rArr; T<sub>8</sub> = <sup>12</sup>C<sub>7</sub> (&minus;2)<sup>7</sup> <i>a</i><sup>5</sup> <i>b</i><sup>7</sup></div>
        <div>• <sup>12</sup>C<sub>7</sub> = <sup>12</sup>C<sub>5</sub> = ${frac('12 &times; 11 &times; 10 &times; 9 &times; 8', '5 &times; 4 &times; 3 &times; 2 &times; 1')} = 792</div>
        <div>• (&minus;2)<sup>7</sup> = &minus;128</div>
        <div>&rArr; T<sub>8</sub> = 792 &times; (&minus;128) <i>a</i><sup>5</sup> <i>b</i><sup>7</sup> = <b>&minus;101376 <i>a</i><sup>5</sup> <i>b</i><sup>7</sup></b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">Coefficient of a<sup>5</sup>b<sup>7</sup> = &minus;101376</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 3 -->
  <div class="q-card">
    <div class="q-title">Question 3</div>
    <div class="q-text">
      Write the general term in the expansion of <b>(<i>x</i><sup>2</sup> &minus; <i>y</i>)<sup>6</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here, <i>a</i> = <i>x</i><sup>2</sup>, <i>b</i> = &minus;<i>y</i>, and <i>n</i> = 6:</div>
        <div>The general term is given by:</div>
        <div>T<sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>6&minus;<i>r</i></sup> (&minus;<i>y</i>)<sup><i>r</i></sup></div>
        <div>&rArr; T<sub><i>r</i>+1</sub> = <sup>6</sup>C<sub><i>r</i></sub> <i>x</i><sup>2(6&minus;<i>r</i>)</sup> (&minus;1)<sup><i>r</i></sup> <i>y</i><sup><i>r</i></sup></div>
        <div>&rArr; <b>T<sub><i>r</i>+1</sub> = (&minus;1)<sup><i>r</i></sup> <sup>6</sup>C<sub><i>r</i></sub> <i>x</i><sup>12&minus;2<i>r</i></sup> <i>y</i><sup><i>r</i></sup></b></div>
        <div class="ans-box">
          <span class="ans-label">General Term:</span>
          <span class="ans-val">T<sub>r+1</sub> = (&minus;1)<sup>r</sup> <sup>6</sup>C<sub>r</sub> x<sup>12&minus;2r</sup> y<sup>r</sup></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 4 -->
  <div class="q-card">
    <div class="q-title">Question 4</div>
    <div class="q-text">
      Write the general term in the expansion of <b>(<i>x</i><sup>2</sup> &minus; <i>yx</i>)<sup>12</sup></b>, <i>x</i> &ne; 0.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here, <i>a</i> = <i>x</i><sup>2</sup>, <i>b</i> = &minus;<i>yx</i>, and <i>n</i> = 12:</div>
        <div>The general term is:</div>
        <div>T<sub><i>r</i>+1</sub> = <sup>12</sup>C<sub><i>r</i></sub> (<i>x</i><sup>2</sup>)<sup>12&minus;<i>r</i></sup> (&minus;<i>yx</i>)<sup><i>r</i></sup></div>
        <div>&rArr; T<sub><i>r</i>+1</sub> = <sup>12</sup>C<sub><i>r</i></sub> <i>x</i><sup>24&minus;2<i>r</i></sup> (&minus;1)<sup><i>r</i></sup> <i>y</i><sup><i>r</i></sup> <i>x</i><sup><i>r</i></sup></div>
        <div>Combining powers of <i>x</i>: <i>x</i><sup>24&minus;2<i>r</i>+<i>r</i></sup> = <i>x</i><sup>24&minus;<i>r</i></sup>:</div>
        <div>&rArr; <b>T<sub><i>r</i>+1</sub> = (&minus;1)<sup><i>r</i></sup> <sup>12</sup>C<sub><i>r</i></sub> <i>x</i><sup>24&minus;<i>r</i></sup> <i>y</i><sup><i>r</i></sup></b></div>
        <div class="ans-box">
          <span class="ans-label">General Term:</span>
          <span class="ans-val">T<sub>r+1</sub> = (&minus;1)<sup>r</sup> <sup>12</sup>C<sub>r</sub> x<sup>24&minus;r</sup> y<sup>r</sup></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 5 -->
  <div class="q-card">
    <div class="q-title">Question 5</div>
    <div class="q-text">
      Find the 4th term in the expansion of <b>(<i>x</i> &minus; 2<i>y</i>)<sup>12</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>For the 4th term, set <i>r</i> + 1 = 4 &rArr; <b><i>r</i> = 3</b>.</div>
        <div>Here, <i>a</i> = <i>x</i>, <i>b</i> = &minus;2<i>y</i>, and <i>n</i> = 12:</div>
        <div>&rArr; T<sub>4</sub> = T<sub>3+1</sub> = <sup>12</sup>C<sub>3</sub> <i>x</i><sup>12&minus;3</sup> (&minus;2<i>y</i>)<sup>3</sup></div>
        <div>&rArr; T<sub>4</sub> = <sup>12</sup>C<sub>3</sub> <i>x</i><sup>9</sup> (&minus;8<i>y</i><sup>3</sup>)</div>
        <div>Evaluating <sup>12</sup>C<sub>3</sub>:</div>
        <div><sup>12</sup>C<sub>3</sub> = ${frac('12 &times; 11 &times; 10', '3 &times; 2 &times; 1')} = 220</div>
        <div>&rArr; T<sub>4</sub> = 220 &times; (&minus;8) <i>x</i><sup>9</sup><i>y</i><sup>3</sup> = <b>&minus;1760 <i>x</i><sup>9</sup><i>y</i><sup>3</sup></b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">T<sub>4</sub> = &minus;1760 x<sup>9</sup>y<sup>3</sup></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 6 -->
  <div class="q-card">
    <div class="q-title">Question 6</div>
    <div class="q-text">
      Find the 13th term in the expansion of <b>(9<i>x</i> &minus; ${frac('1', '3&radic;<i>x</i>')})<sup>18</sup></b>, <i>x</i> &ne; 0.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>For the 13th term, set <i>r</i> + 1 = 13 &rArr; <b><i>r</i> = 12</b>.</div>
        <div>Here, <i>a</i> = 9<i>x</i>, <i>b</i> = &minus;${frac('1', '3&radic;<i>x</i>')}, and <i>n</i> = 18:</div>
        <div>&rArr; T<sub>13</sub> = <sup>18</sup>C<sub>12</sub> (9<i>x</i>)<sup>18&minus;12</sup> (&minus;${frac('1', '3&radic;<i>x</i>')})<sup>12</sup></div>
        <div>Notice that (&minus;1)<sup>12</sup> = +1. Simplifying terms:</div>
        <div>• (9<i>x</i>)<sup>6</sup> = (3<sup>2</sup> &times; <i>x</i>)<sup>6</sup> = 3<sup>12</sup> <i>x</i><sup>6</sup></div>
        <div>• (${frac('1', '3&radic;<i>x</i>')})<sup>12</sup> = ${frac('1', '3<sup>12</sup> (<i>x</i><sup>1/2</sup>)<sup>12</sup>')} = ${frac('1', '3<sup>12</sup> <i>x</i><sup>6</sup>')}</div>
        <div>Therefore:</div>
        <div>&rArr; (9<i>x</i>)<sup>6</sup> &times; (&minus;${frac('1', '3&radic;<i>x</i>')})<sup>12</sup> = 3<sup>12</sup> <i>x</i><sup>6</sup> &times; ${frac('1', '3<sup>12</sup> <i>x</i><sup>6</sup>')} = <b>1</b></div>
        <div>Thus, the term is purely constant:</div>
        <div>&rArr; T<sub>13</sub> = <sup>18</sup>C<sub>12</sub> = <sup>18</sup>C<sub>6</sub> = ${frac('18 &times; 17 &times; 16 &times; 15 &times; 14 &times; 13', '6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1')} = <b>18564</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">T<sub>13</sub> = 18564</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 7 -->
  <div class="q-card">
    <div class="q-title">Question 7</div>
    <div class="q-text">
      Find the middle terms in the expansion of <b>(3 &minus; ${frac('<i>x</i><sup>3</sup>', '6')})<sup>7</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here, <i>n</i> = 7 (which is odd). Total number of terms in expansion = 7 + 1 = 8 (even).</div>
        <div>When <i>n</i> is odd, there are <b>two middle terms</b>:</div>
        <div>• First middle term: (${frac('<i>n</i> + 1', '2')})<sup>th</sup> = (${frac('7 + 1', '2')})<sup>th</sup> = <b>4th term (T<sub>4</sub>)</b></div>
        <div>• Second middle term: (${frac('<i>n</i> + 3', '2')})<sup>th</sup> = <b>5th term (T<sub>5</sub>)</b></div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">Finding 4th term (r = 3):</b></div>
        <div>T<sub>4</sub> = <sup>7</sup>C<sub>3</sub> (3)<sup>7&minus;3</sup> (&minus;${frac('<i>x</i><sup>3</sup>', '6')})<sup>3</sup></div>
        <div>= <sup>7</sup>C<sub>3</sub> (3)<sup>4</sup> (&minus;${frac('<i>x</i><sup>9</sup>', '216')})</div>
        <div>= 35 &times; 81 &times; (&minus;${frac('<i>x</i><sup>9</sup>', '216')}) = 35 &times; 3 &times; (&minus;${frac('<i>x</i><sup>9</sup>', '8')}) = <b>&minus;${frac('105', '8')} <i>x</i><sup>9</sup></b></div>

        <div style="margin-top: 14px;"><b style="color: ${themeColor};">Finding 5th term (r = 4):</b></div>
        <div>T<sub>5</sub> = <sup>7</sup>C<sub>4</sub> (3)<sup>7&minus;4</sup> (&minus;${frac('<i>x</i><sup>3</sup>', '6')})<sup>4</sup></div>
        <div>= <sup>7</sup>C<sub>3</sub> (3)<sup>3</sup> (${frac('<i>x</i><sup>12</sup>', '1296')})</div>
        <div>= 35 &times; 27 &times; (${frac('<i>x</i><sup>12</sup>', '1296')}) = 35 &times; ${frac('<i>x</i><sup>12</sup>', '48')} = <b>${frac('35', '48')} <i>x</i><sup>12</sup></b></div>
        <div class="ans-box">
          <span class="ans-label">Middle Terms:</span>
          <span class="ans-val">T<sub>4</sub> = &minus;${frac('105', '8')} x<sup>9</sup> &nbsp;and&nbsp; T<sub>5</sub> = ${frac('35', '48')} x<sup>12</sup></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 8 -->
  <div class="q-card">
    <div class="q-title">Question 8</div>
    <div class="q-text">
      Find the middle term in the expansion of <b>(${frac('<i>x</i>', '3')} + 9<i>y</i>)<sup>10</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>Here, <i>n</i> = 10 (which is even). Total number of terms = 10 + 1 = 11 (odd).</div>
        <div>When <i>n</i> is even, there is exactly <b>one middle term</b>:</div>
        <div>&rArr; Middle term = (${frac('<i>n</i>', '2')} + 1)<sup>th</sup> = (${frac('10', '2')} + 1)<sup>th</sup> = <b>6th term (T<sub>6</sub>)</b></div>
        <div>For T<sub>6</sub>, set <i>r</i> = 5:</div>
        <div>&rArr; T<sub>6</sub> = <sup>10</sup>C<sub>5</sub> (${frac('<i>x</i>', '3')})<sup>10&minus;5</sup> (9<i>y</i>)<sup>5</sup></div>
        <div>&rArr; T<sub>6</sub> = <sup>10</sup>C<sub>5</sub> (${frac('<i>x</i><sup>5</sup>', '3<sup>5</sup>')}) (3<sup>2 &times; 5</sup> <i>y</i><sup>5</sup>) = <sup>10</sup>C<sub>5</sub> (${frac('<i>x</i><sup>5</sup>', '3<sup>5</sup>')}) (3<sup>10</sup> <i>y</i><sup>5</sup>)</div>
        <div>Cancelling 3<sup>5</sup>:</div>
        <div>&rArr; T<sub>6</sub> = <sup>10</sup>C<sub>5</sub> &times; 3<sup>5</sup> <i>x</i><sup>5</sup> <i>y</i><sup>5</sup></div>
        <div>• <sup>10</sup>C<sub>5</sub> = ${frac('10 &times; 9 &times; 8 &times; 7 &times; 6', '5 &times; 4 &times; 3 &times; 2 &times; 1')} = 252</div>
        <div>• 3<sup>5</sup> = 243</div>
        <div>&rArr; T<sub>6</sub> = 252 &times; 243 <i>x</i><sup>5</sup> <i>y</i><sup>5</sup> = <b>61236 <i>x</i><sup>5</sup> <i>y</i><sup>5</sup></b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">T<sub>6</sub> = 61236 x<sup>5</sup>y<sup>5</sup></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 9 -->
  <div class="q-card">
    <div class="q-title">Question 9</div>
    <div class="q-text">
      In the expansion of <b>(1 + <i>a</i>)<sup><i>m</i>+<i>n</i></sup></b>, prove that coefficients of <b><i>a</i><sup><i>m</i></sup></b> and <b><i>a</i><sup><i>n</i></sup></b> are equal.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>The general term in the expansion of (1 + <i>a</i>)<sup><i>m</i>+<i>n</i></sup> is:</div>
        <div>T<sub><i>r</i>+1</sub> = <sup><i>m</i>+<i>n</i></sup>C<sub><i>r</i></sub> (1)<sup><i>m</i>+<i>n</i>&minus;<i>r</i></sup> <i>a</i><sup><i>r</i></sup> = <sup><i>m</i>+<i>n</i></sup>C<sub><i>r</i></sub> <i>a</i><sup><i>r</i></sup></div>
        <div>• For coefficient of <i>a</i><sup><i>m</i></sup>, put <i>r</i> = <i>m</i>:</div>
        <div>&rArr; Coefficient of <i>a</i><sup><i>m</i></sup> = <b><sup><i>m</i>+<i>n</i></sup>C<sub><i>m</i></sub> = ${frac('(<i>m</i> + <i>n</i>)!', '<i>m</i>! &times; ((<i>m</i> + <i>n</i>) &minus; <i>m</i>)!')} = ${frac('(<i>m</i> + <i>n</i>)!', '<i>m</i>! <i>n</i>!')}</b></div>
        <div>• For coefficient of <i>a</i><sup><i>n</i></sup>, put <i>r</i> = <i>n</i>:</div>
        <div>&rArr; Coefficient of <i>a</i><sup><i>n</i></sup> = <b><sup><i>m</i>+<i>n</i></sup>C<sub><i>n</i></sub> = ${frac('(<i>m</i> + <i>n</i>)!', '<i>n</i>! &times; ((<i>m</i> + <i>n</i>) &minus; <i>n</i>)!')} = ${frac('(<i>m</i> + <i>n</i>)!', '<i>n</i>! <i>m</i>!')}</b></div>
        <div>Since <i>m</i>! <i>n</i>! = <i>n</i>! <i>m</i>!, both denominators are identical:</div>
        <div>&rArr; <sup><i>m</i>+<i>n</i></sup>C<sub><i>m</i></sub> = <sup><i>m</i>+<i>n</i></sup>C<sub><i>n</i></sub></div>
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">Hence proved that the coefficients of a<sup>m</sup> and a<sup>n</sup> are equal.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 10 -->
  <div class="q-card">
    <div class="q-title">Question 10</div>
    <div class="q-text">
      The coefficients of the <b>(<i>r</i> &minus; 1)<sup>th</sup></b>, <b><i>r</i><sup>th</sup></b> and <b>(<i>r</i> + 1)<sup>th</sup></b> terms in the expansion of <b>(<i>x</i> + 1)<sup><i>n</i></sup></b> are in the ratio <b>1 : 3 : 5</b>. Find <i>n</i> and <i>r</i>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the expansion of (1 + <i>x</i>)<sup><i>n</i></sup>:</div>
        <div>• Coefficient of (<i>r</i> &minus; 1)<sup>th</sup> term = <sup><i>n</i></sup>C<sub><i>r</i>&minus;2</sub></div>
        <div>• Coefficient of <i>r</i><sup>th</sup> term = <sup><i>n</i></sup>C<sub><i>r</i>&minus;1</sub></div>
        <div>• Coefficient of (<i>r</i> + 1)<sup>th</sup> term = <sup><i>n</i></sup>C<sub><i>r</i></sub></div>
        <div>Given ratio: <b><sup><i>n</i></sup>C<sub><i>r</i>&minus;2</sub> : <sup><i>n</i></sup>C<sub><i>r</i>&minus;1</sub> : <sup><i>n</i></sup>C<sub><i>r</i></sub> = 1 : 3 : 5</b></div>

        <div style="margin-top: 8px;"><b style="color: ${themeColor};">Equation 1 (First two terms):</b></div>
        <div>${frac('<sup><i>n</i></sup>C<sub><i>r</i>&minus;2</sub>', '<sup><i>n</i></sup>C<sub><i>r</i>&minus;1</sub>')} = ${frac('1', '3')} &rArr; ${frac('<i>r</i> &minus; 1', '<i>n</i> &minus; <i>r</i> + 2')} = ${frac('1', '3')}</div>
        <div>&rArr; 3(<i>r</i> &minus; 1) = <i>n</i> &minus; <i>r</i> + 2</div>
        <div>&rArr; 3<i>r</i> &minus; 3 = <i>n</i> &minus; <i>r</i> + 2 &rArr; <b><i>n</i> &minus; 4<i>r</i> + 5 = 0</b> &nbsp;&nbsp;...(1)</div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">Equation 2 (Last two terms):</b></div>
        <div>${frac('<sup><i>n</i></sup>C<sub><i>r</i>&minus;1</sub>', '<sup><i>n</i></sup>C<sub><i>r</i></sub>')} = ${frac('3', '5')} &rArr; ${frac('<i>r</i>', '<i>n</i> &minus; <i>r</i> + 1')} = ${frac('3', '5')}</div>
        <div>&rArr; 5<i>r</i> = 3(<i>n</i> &minus; <i>r</i> + 1)</div>
        <div>&rArr; 5<i>r</i> = 3<i>n</i> &minus; 3<i>r</i> + 3 &rArr; <b>3<i>n</i> &minus; 8<i>r</i> + 3 = 0</b> &nbsp;&nbsp;...(2)</div>

        <div style="margin-top: 10px;"><b style="color: ${themeColor};">Solving (1) and (2):</b></div>
        <div>Multiply (1) by 2: 2<i>n</i> &minus; 8<i>r</i> + 10 = 0 &nbsp;&nbsp;...(3)</div>
        <div>Subtracting (3) from (2):</div>
        <div>(3<i>n</i> &minus; 8<i>r</i> + 3) &minus; (2<i>n</i> &minus; 8<i>r</i> + 10) = 0</div>
        <div>&rArr; <i>n</i> &minus; 7 = 0 &rArr; <b><i>n</i> = 7</b></div>
        <div>Substitute <i>n</i> = 7 into (1):</div>
        <div>7 &minus; 4<i>r</i> + 5 = 0 &rArr; 4<i>r</i> = 12 &rArr; <b><i>r</i> = 3</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">n = 7 &nbsp;and&nbsp; r = 3</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 11 -->
  <div class="q-card">
    <div class="q-title">Question 11</div>
    <div class="q-text">
      Prove that the coefficient of <b><i>x</i><sup><i>n</i></sup></b> in the expansion of <b>(1 + <i>x</i>)<sup>2<i>n</i></sup></b> is twice the coefficient of <b><i>x</i><sup><i>n</i></sup></b> in the expansion of <b>(1 + <i>x</i>)<sup>2<i>n</i>&minus;1</sup></b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>• <b>Coefficient of <i>x</i><sup><i>n</i></sup> in (1 + <i>x</i>)<sup>2<i>n</i></sup>:</b></div>
        <div>LHS = <sup>2<i>n</i></sup>C<sub><i>n</i></sub> = ${frac('(2<i>n</i>)!', '<i>n</i>! (2<i>n</i> &minus; <i>n</i>)!')} = ${frac('(2<i>n</i>)!', '<i>n</i>! <i>n</i>!')}</div>
        <div>• <b>Coefficient of <i>x</i><sup><i>n</i></sup> in (1 + <i>x</i>)<sup>2<i>n</i>&minus;1</sup>:</b></div>
        <div><sup>2<i>n</i>&minus;1</sup>C<sub><i>n</i></sub> = ${frac('(2<i>n</i> &minus; 1)!', '<i>n</i>! ((2<i>n</i> &minus; 1) &minus; <i>n</i>)!')} = ${frac('(2<i>n</i> &minus; 1)!', '<i>n</i>! (<i>n</i> &minus; 1)!')}</div>
        <div>Multiplying by 2:</div>
        <div>RHS = 2 &times; <sup>2<i>n</i>&minus;1</sup>C<sub><i>n</i></sub> = 2 &times; ${frac('(2<i>n</i> &minus; 1)!', '<i>n</i>! (<i>n</i> &minus; 1)!')}</div>
        <div>Multiply numerator and denominator by <i>n</i>:</div>
        <div>= ${frac('2<i>n</i> &times; (2<i>n</i> &minus; 1)!', '<i>n</i>! &times; <i>n</i>(<i>n</i> &minus; 1)!')}</div>
        <div>Since 2<i>n</i> &times; (2<i>n</i> &minus; 1)! = (2<i>n</i>)! and <i>n</i>(<i>n</i> &minus; 1)! = <i>n</i>!:</div>
        <div>= ${frac('(2<i>n</i>)!', '<i>n</i>! <i>n</i>!')} = <sup>2<i>n</i></sup>C<sub><i>n</i></sub> = LHS</div>
        <div class="ans-box">
          <span class="ans-label">Conclusion:</span>
          <span class="ans-val">Hence proved: Coefficient of x<sup>n</sup> in (1 + x)<sup>2n</sup> = 2 &times; [Coefficient in (1 + x)<sup>2n&minus;1</sup>].</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Question 12 -->
  <div class="q-card">
    <div class="q-title">Question 12</div>
    <div class="q-text">
      Find a positive value of <i>m</i> for which the coefficient of <b><i>x</i><sup>2</sup></b> in the expansion of <b>(1 + <i>x</i>)<sup><i>m</i></sup></b> is <b>6</b>.
    </div>
    <div class="sol-box">
      <div class="sol-title">Solution:</div>
      <div class="sol-step">
        <div>In the expansion of (1 + <i>x</i>)<sup><i>m</i></sup>:</div>
        <div>The general term is T<sub><i>r</i>+1</sub> = <sup><i>m</i></sup>C<sub><i>r</i></sub> <i>x</i><sup><i>r</i></sup>.</div>
        <div>For <i>x</i><sup>2</sup>, set <i>r</i> = 2:</div>
        <div>&rArr; Coefficient of <i>x</i><sup>2</sup> = <sup><i>m</i></sup>C<sub>2</sub></div>
        <div>Given that <sup><i>m</i></sup>C<sub>2</sub> = 6:</div>
        <div>&rArr; ${frac('<i>m</i>(<i>m</i> &minus; 1)', '2 &times; 1')} = 6</div>
        <div>&rArr; <i>m</i>(<i>m</i> &minus; 1) = 12</div>
        <div>&rArr; <i>m</i><sup>2</sup> &minus; <i>m</i> &minus; 12 = 0</div>
        <div>Factoring the quadratic equation:</div>
        <div>&rArr; (<i>m</i> &minus; 4)(<i>m</i> + 3) = 0</div>
        <div>&rArr; <i>m</i> = 4 &nbsp;or&nbsp; <i>m</i> = &minus;3</div>
        <div>Since <i>m</i> must be a positive integer, discard <i>m</i> = &minus;3.</div>
        <div>&rArr; <b><i>m</i> = 4</b></div>
        <div class="ans-box">
          <span class="ans-label">Answer:</span>
          <span class="ans-val">m = 4</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

module.exports = {
  getExercise7_2
};
